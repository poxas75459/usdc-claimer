/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3wpPSZmtBSFRm3nmMSU39NgyTRXRA8vtwjLqt2GnYzpQU1LNaAZiiaYxDT5FDvKoj67GyY276bkfZmQ4psx2GcME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYxJ7sHU6tPA1X5pYsRHxvD2XcfNJY3dzo55wParLFB4GcfyQRgsSk13LdjmWn83oxzrCB3NCNB7pBGGhfJojEb",
  "key1": "4uswW59SpdJeecnzjChx8b9y2yyCeseujFfZTSr1piGNJLPb6CzNvin1BU1YWw347e5M57iSL6rZr4ZzdUDXjV5z",
  "key2": "58dWNamskQMjAYKXJ1DN9QvFx5qy6jS9f4CfaJM88adSbey6LSAimBQhb3UmJf7zGt2T8wgMMs2BdRy7oPkJvrPj",
  "key3": "2LhP53CuP6UagtUP4NvGJFjEr7M5KWsGLm5XfjFxiYCggaPe2sZbDTkDkte1iJ6rtuvRtizhGCLceM5hAeWDuMTM",
  "key4": "3Sy7j8SXLoxzen5X5tBrLG7srGvx1AHwaFm92uMznqvuV5inxEhDQjaRbSbwC4QaJsMhAVV9wKr44CwAx6r5T6DQ",
  "key5": "64uax58KwuzhHj9pcQGoezRfFxZbHTszJMg9aRGuPPJsRpVuzUUxwana6Q7ugWGNQu9PRh1dcZtqkYttxchBXcDQ",
  "key6": "5hWKnQ2xH9wtpfSLz79eyaBM2jKuJwPYiHsraGhoPbzcRZLgyWDg5KYfBECZ8LrCgnrQbPigVQyZmXfE4sA98PYC",
  "key7": "4yx8i1QLXGM6sCN9EuAis2W1Upkdpx6M4xLSqXs4iMJ1tBgEw2qUWJMrwe3beqAQuxxxvtQ8Dx5NUKh6rZgdHMP1",
  "key8": "2FEnSUiNu2mFSXW8mme7k6ttRvq8tQg4hdLaPE9EWu6i28RLFNNm19nS71VhvUMZ4sesZbuG3sErBcv5G8a9fBLh",
  "key9": "5usBJ2MuzGKF7XbjegX4izboZojZYC9FrJjg5KVi5ELn7ugDZ4eKrWrpL61rwk1D7Grsk95R4AYGoASHGWq6gJpk",
  "key10": "5YNi6Lm8RE3DnfHfWbgU6PNZVBsEgTW6pd3e4HGaobeBic16QdGBApssH5Bmr6DLLnW4M6W8bwqzVQv1MN1DCmaD",
  "key11": "5oVjuWK7sLErqfGG4aggQoFeEfp69KLcRmCTgdnwVKH4w9zgzViFzpmYGwBVnYMTr8iS5k1APx7TvRTEkuSqf8uS",
  "key12": "2snkrLQTK9Eso8GXycALprZngf2GuCjRvCYJ5DhSrj2j7hVE29qqBhdp7J1LB8HrSSnvAzLDprsZrfetMGEaLd2d",
  "key13": "kPDVo8oJx8BR9VZotL2AqMsfFfAsRAaZZ4SfvGdA141dLUUkh5bzESnYWk5kLRZ1bBRweVp7mQkDve8RH6UD7RZ",
  "key14": "2yxL1qXJdcVU6Nr37VQgyJ7hY8FGqaA2YzYW1A4vhvApkTz8dnfq4ATdvq6TkaiqSgtGSjmRyzH3EvRvMibqfGZ2",
  "key15": "4hs1g3MXzANTKsbrMd7335zSmTPdjNtMLBusXH1HfYJaoEmbnZtjeLMzrRV2b6umEPcEAeXtBqzTHndm5nFky1Ub",
  "key16": "42fZehwt5s6TCDUEpSwuaGVJbEX2MQxXjj8awwdV57GQxUaybxZ8kUfwApngavWujmqSuijtFMeK3B3mjMod94qV",
  "key17": "5SGV84T3xB1LJndPr28j23ueA397mwX7nLwneajHyzR1SnWRGQbNchrSjs3adSR9ie8V78nxWgqszab7wFpGQKK6",
  "key18": "2WYS8rmXVrsN8A44PVkPZrc9JYDDMfm7KCKeuvi8cmHbh9TBUv8hyfoGzGnQrPb7LdfQMUg8XzggWg66dUXwpEov",
  "key19": "2wETZkFgt78pc8fwtTnCgdTa2vDb9BKNc5dibagGnjU5vGoLZF8wGh8uxtoU4gKU6VVcDyk7qGyErGcsThSFpZbP",
  "key20": "27RkTmiuVodD355mJNQzwtPFpUHud2WjoWASZfx322cyXP1BdsKUSLKxBPrL32MySEscL4VGDCHqfcNdMvx4ALaP",
  "key21": "5Q3oaoPMDNoJ721pk2kbuNLbn75wWua21rzHKz6g2FNnFyVzoPRVjTzq1wA9YtwUqsKnE8eevJArVTinjMuyiT3B",
  "key22": "2WxnbPp6MXmBWUz77if45SGo66nzz93P7YzKNi54T3pnMUywSThSTDLrUktDCfsD8Mj928kkuTTV55sXtm3dwdQC",
  "key23": "3Hw7CLUiPJY6Tn7BzyiRG43sCnpNzwEUHBYz48FDzBDRNCcboxj9CSDwgwLYM5TABKQSEEMJgaQKbKzQd1Nt2QhE",
  "key24": "2zMD7d5rXtkESSMJySjRHNiXQyJ3f2poZLaDbQoHH4u4UnfwJJoUmumge1tAdeXAJCwQfSnSk3kRA9xf4jvprfd6",
  "key25": "4BDtt5RaufrxsfH9wKu1c7YgSeS3se7eDvf3QqiGzbiCpfxK7cC6ehtzujzAT71pofgVcgMYboMcbrJ5F53pQZJG",
  "key26": "yiyeLZbLT8NpvCVDUr6bR7Kxch519gfnzF96hZmiYnSbjXmpAmHugZk7y83snHi7RosgHihLckbpAitjYNcqXKB",
  "key27": "8BSFam8ivqEULbMRDUDm7LehUuNjP2frj4u24vYPzUXEUKi74z9F7QyTQA8GxjQ6GFqCfiyLkwewWVdL3YEQ1Dm",
  "key28": "hoEpUFCStN88dsXG8w5fbTCf9MZKpBPamDUzZbV5qjnmjCvvPoSEk3JuRphyZp1WwEZwDU1KgPtUL9g5T4f6kGA",
  "key29": "2MBHEgAZGvofWCMzHrsMGAdE1Tru8UDnYqmbedHp1ri4T9qRAZv12s6mwnVD7yxtUeQbJ6Auu414McEVaQJXfGYm",
  "key30": "2zNfcZKgv9hjXt8FiP1ED9VvhLNFaXQgUK7ixikZW7qLbtRzRYWGLhwWEhPT74BXaSLf4Wt7cppEC9SZNCyjniLt",
  "key31": "4wPJ839eHvgtfe7AA6oZW5e3f1EMBHjwZaAyjxJBHXkYwpy66p3hfQqx4snbx7cPxG5Nq48KNACfgjQ2kbW1DWUd",
  "key32": "25xN6xMT11nToeDKRdvDGfoFMM1aNn65Xz8YxTKZ7rQCd7XKu3zyGTuJpJDkRnCtPZeQ3GqoiZo9pfepkVWqk1pc",
  "key33": "2tboRhg3uzVn66rTH5wxqLTXkjtNEQoV5X42etAaJ1Tim3E2QFjPemjhUNmUPVNwBV5mMq2jUu9FMKP1k1EmqBy8",
  "key34": "5pCByyiuSBBRp7iHzqPvd6bMU4DZETFXBcN3zqPf6GrcftY7ZLx36g7EzkHmh34aPKh2yvw1Srddh93BPCeZJHif",
  "key35": "2HQutxLUUNtY7a3cKxRhxkQqYaE3qH9VaWTAKimRzXHawQgHXgCk2fDmp8anfKhaaLSnG5XDEihaMTqjn9druUUB",
  "key36": "kCRb7wspW756aTD6KYE334LYf6raHNhnbyacHTPkobsgaaqn9BCZQn4WTa8BA6b7DRVY29Jucj54udn1AJ19Hqi",
  "key37": "5nb79jxEuAyuNveWrVGj7WfVd6iLn19H6KC6sgAYyk7uLAr8U1zBXK2kaZiKirJCF6AS3ti4E2F5pMBtkpFLAwtM",
  "key38": "1kfxzKn6tc1RSHczqPLfeP21tyCvEpK9QC3ujnTL4XTRnU3PrE8nrR5psNwrhae4hjbahxpF3Sohds9vZPXod7q",
  "key39": "4tvq1wUDcJizyoRJ6txvTYCyKPwrNdY3L7pA5W8X5rbxxLEyRtrx4c7sxjcYL7cmUEJ5asVNddUSwsyjnCvtDaQk",
  "key40": "56HfaUcALbbfWhVczAUyb96stSTAT8uE2S7XSBeQVQR6f4WBuirotLNuyPdM5Qma6rJ8MVf77kSkTpcVEnsm1ABP",
  "key41": "Pc2ycUb1g6bUq4QH4DjiRbFy4HxGeYofqkM7txDmKDGfpJnAjSsbWZvZNrbnxACqjSDer5hYkj7Sgo4NGNeqny8",
  "key42": "5Ru1dniQSXgNikechG7VHuiir8NKGe3PNH9EwTqboZkzm6jdRgpca4fECT6ChaHYenUWMsoLnP6QmPzBUJYkDhnG",
  "key43": "2RNSn3x4XoEQzQmpWqjuvjWTf24gVt431ZcSHmEzCf5UuUK7g2rDLdQr8iPRD1L6yPWSd7vnfHstEVJ1aa842Sj9",
  "key44": "2k8rGgtrVh1ewM3uXr2DtY2SxA5xmcCHGTHcS3rxnSSj6fGimKrr8gtq5R5xRuKSjkNgYDSkYgUYeUYemj76fRGo",
  "key45": "4ZfbG1vQviiB878dZJ156S6yJ5SbJKEFY92x88VaCaZn3iX2CWMEFEp67DeV2sv4dVM3R3AyAzNauNYVPdAwbAS7",
  "key46": "39peREmeAa7k287LZjRnw2fGKnqNFgMsd8n1drsAfjeT6eviKAdPFioQagEBqR5tGqtXt3BAN7ZVF87V91q9boBb",
  "key47": "2SoQBUgtPX5nLiAc7uAyFLExhVWX3NquFot9yeJozF1ZFUoY9uQzKmS55hSxJdYyRyFAENoKfrCYarHJohM2Sop5"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
