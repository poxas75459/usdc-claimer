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
    "31Lf5gy4baaKdAi3xeoWsYieJtAeQS1tVXAbnb1QsimQaK3t5CscuQmyY1jvYvPmoPHnFczPYxbXNdbEL3YYbhTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LByQpLb2CYft61bxuYoVJE7ad8r4cyZN48JgKZxnuz5LE2Z3NxAbUGa8QpKouWAJ5gk8DESg8q5yEWCN3Tbng2b",
  "key1": "5aF7uXKvKyNCtV3jWXuu3SPdSfUTtY9My3KiKcActrxRhCqtn26NbDohr1HgRTFHRKvmUVLbgDmemSXRdXour2N8",
  "key2": "V7n7nSu6rmx3aSShZd8x2AGomTR1dh7JMoBCQpE2U5QuuCk4f7Q7QBfm9xKxTth64fd6kyftNitsPjwRMxYMya2",
  "key3": "4gLs4B3nPwoPPYggLNBfyNDXP9LYGwbByqJX7RDRBRA2dcg1nnmY6dYvCWV6VdAhqk58KK2j2pHn3dn7iB3sDHoA",
  "key4": "4cFMRGiP9e5HqYkCFAv4rEQ4Lg6ukQKjMmtoUyp9Rf3EBfRmVBTRkDeHjxSntsdvFRH9377pJZiRxqoNEDUSEcp8",
  "key5": "5bApDvMUnxRC9AJmCcrxP9wg9AjLgQPAiznP9zKmEqeisuBrCFRnbhdDZoXRTuMZDWryZmiU7LJDPi7kyntiGKoE",
  "key6": "64JTutZZwtyNqNFKmadfuCKPEjMgDmVwD27Nk85iwAywKdMJdJ8YtA5wTaBNab17e64r214BXj2ygauaCJYJLee1",
  "key7": "2z2VotbVhz2Ah1Ji6VDHbFFDD3Ja28HWZXQXkQPmyUwg6mYp2jCBmyLx6pUtgUA79j7Htze1zXhcGsiMEGZqWnyL",
  "key8": "47cSqH4uuo9cRBh3PvAbt5DpcYu2K8e2YQ5UUaPut5SkZEfPnbV14FgpfmEd8GTb2PJH5Vm9afKjXCWpjDH2WeZA",
  "key9": "FdfCPnp14Z6mGE4Ea48bfJiBZnWhkMWJvyi5y4YjdNbwmybEKu9qDYxfjJCy7LnCTnJHGvCXxZL2vmZnyQkYL9Z",
  "key10": "5ntCh7w9rcmAPZAeWKerTJ7YY8tA1ZDkZk2JUzbPxBubtDgo8dor3sYJfVze5qxCSuHqJzd7NUN84HLQqrSYGvRb",
  "key11": "4UTdux5YTkWFhYLoyp3BwpQTza5f2dGVuZzGmSPymSiSnrTAUNiocZG7nsvjuSgWMUA9mxQCFHkS4QS4KkC2Sgtg",
  "key12": "32FiMmsVz2uGVZLGgiitjh9aL4BS292H7d4Cw1dq3FPdVk2JVYxYqJAYGjtXaAssbj3igYXtsfjc9rPQJCEJcySo",
  "key13": "skCkhaU9zwseacGUWfpFg4SRbj4ScDfTB3DCjoG8GPj7FAS9FDZ5f9sr8gbs7rHoqFtdnngqM9wxri5AQVyeNEG",
  "key14": "28ai6sBPWoMMhxAmSpfAidUx1xpmVpNb85znFj7kMtudWYRt5sHSw4ZyCrpAjLHayVTfocRko1E5ozpT7NnPMf8Q",
  "key15": "2V5CxW8br19vkUHb5G2W7VtVB5kCp2vfBoiXGewMbpKxHSkuSyakjQaDs5gh52pDK7ocH3eUAwShHCz9CWugsNWh",
  "key16": "3VekNMipqckCpddio1ft8JjFCXi82Gm2FwoqZDYJ2bmV7U4TqiTQVeyjG1CLKr51KvWa4J78xFuAkpvyx1r7fJVA",
  "key17": "22B8vvqccwoinrXbyhQR7UfBkxUcCq9hqJU2ELY2my36Ethd6LoQqGFdp7zpd2XwY8EgfJq7a2epaWJSU8XKTxAB",
  "key18": "2d77wGfH2FhXB2TBkozCDJWRJ628PdGaw4CyGqzmupTiKUomTUcztcKecmmk4pAd7MDwLyThCSvoF3d14Tkq3CTM",
  "key19": "4BjRvF2EMTo58CNqPcUumuvGseCrxvJwAR46CzxybSTZJci5ve1ivHeNZTvZJxvzRGghV92ix1gzwF6ovsSk3Sa6",
  "key20": "2figgVGTNAcz3Ly7B4fvXNk7inWkkktHyUJqEA3Yis288rhcEQKSpDgvuHm1LkggeUYSaswtGrWELf9RsFv5Nz3Z",
  "key21": "4h7ycmU9NDsacotQCqHkoZREtisSoUcsJLo7cp31MyQ2dQqG6EAmyTK54q5rg1BqD4WBZtY6ipK1oFJrCzzJ3Zn4",
  "key22": "5oPQRHV3xNuuMntZsnDvs1ByXPjKqiiNEvJCCQn2MZku9BRXrXSFF3v5mzRMmuQU4ntxRfnfj36iSduQGUs4JmDP",
  "key23": "3zpMWjFmj5nxrhBQ3S2aWaE9hTUNyF3oYGzFsRSDAdNMh38pV1Hx1veA57KaVDzq4ExbQDtcrCKrTKQKaVDZL5Jr",
  "key24": "3sjaa9m9cLdA6cHysDgE7DSQj2KUMSWuhiKx9atz3xJ3jjBjpRKzeoPQB4R3zi4xQExsiCZMttk1XYsAt1dwaJHt",
  "key25": "3ULY21VFc9ysG5ZBHJpZCEciLSPzSjaYP6y7DiZoAbB4zqcsXm4EmjvL4pRMk9A1nKZmFFKPqh1fo1mx79RJtcKD",
  "key26": "5hUbJ3QaBGhNQpJvbhZugZTAnD7mo3WxKWZ9Bjox531M6zwUyZNH6psC4AsFoter7kMTayLXrEJQtuny1DCAHC4d",
  "key27": "uDAtmYezYFedkqdLFppUGKroGZnehwEf7VBK6BzfqHoTL4mcRu8EVadKpmM1QggA4c6f1ZnXv7UBd7oPfv5Y7Ki",
  "key28": "4xqgHnnewP7GW88vTxoTx2SVQ3ETb9GZHkznqLtgmuk6K2DfW8U3aDCC9PntTjFRCHfc3VjyNt7V2Wp5MYeU2BoE",
  "key29": "2CgugjPJWPVxdWVkApdN8zgf7EJWdpZPTMWoqgEzDsopRtXdPVhcuzgAX3ErQnwows3FfxDdygd8fCavUdnqfRS7",
  "key30": "67SGVxttrQguN61XrTTi7hRXj4iDo9XjA3rgUpLsU5m7LK4cnHku2PTCSshqi57iC3zJETdGep45gjfz1jKFEYTv",
  "key31": "54VPSSV8ffE6P2mPDUtMnyfsr3dojEkSPpEogiHK4E63hhNGEWSr4TLuHEF6nd8Z5DnaoyoA4GYhTAEcFoxUneCQ",
  "key32": "634darTvkbXZ3sFeFw1X1ZRjUrCxP1ru9yJj2S26Dm6ApbEAVW2kmCVt31i9bG2c4hXTLXaFYcAb2vsuhYAQvAee",
  "key33": "4BSb3ATz5aR8kCQkFs9Sd22FL32VhedjLvdqUfjrNVxXRfwJaZimZ2dvYTaEFHY8YPu27uvA24CviB9LsKFQtZMg",
  "key34": "2nZVJbdSqvXUgwoWDCcmtysdeZCeNSGoiyNFHEyuDAADHSEkwomnUs5QjBpcLcRaKUxGouX49NZ1pBccnz9YNbMi",
  "key35": "2E9Lcw6Prti2XCQJspFejNh1H7Syu4hdmP4AQtbLyEFWHYAK1FyLeKLCs24tiMxZtFf8TRJZ7Q5zurHWvzLPmZod",
  "key36": "2mQKYAbL8sndCjK7DG4eG1MzzGWxTBNLaMAWojw4JuDSvN5RJnr8Gr3kRzvwedgJtUBi4CeTX8rJW5rTGR38LFf1",
  "key37": "649Zxdwa41JoLCPqv2KAUWvQiUrT3GsmNcfxyjqwH9XMDr4vCXKXTrszEc8PG68umKkeQfSgRWxCyuP5X98v2o5c",
  "key38": "4z1noEUKCAjvB5sRMH92orFBtoHSVSHFM4QJh2UUkEADKATnn2eHu7iMNoMMTHgxtEdzrxzzboTK7YEW5nPchWfv",
  "key39": "5dv2XcWQwyNXU7Xs9qRiVnM5yqYLoUcguuWJHdFeLPjJRgVdAwCoDeznXrPRf3sMHuEfyRYWiijuhsRTuXj3XZH3",
  "key40": "4R6B61rHJfKZ7TgeuEChiQYCsjMbn8jkXbyYMHRTZETmtwrQmEqfn4vQxAByAnoXbi7wH3wgN7ou6PXpA5hgSfCq",
  "key41": "KGJeUqbdWcXoqBeTL1w2bzu3CtdbvQJ5anM8N89ZQwHAw2uwW4BcvkMU7fiKC9aJyaoiabPBdni5KYTuakLm8DF",
  "key42": "iZpmruH2bJBR7Au4UXtZfQFEJjf59BsuTLeuEWx2d9cajX5Qw27kXdjftMf6wMAu9DFMwxAxcRhkiPnE1dWcPJi",
  "key43": "qxhgqAQ8ec3WM5hDCYbukL9Y2yAtrAkmiKYpf8M3DJZ9QzAk8Ck3xohYeSG7QD9yzU9Mtuc7jqBHtqRAHpjxDcF",
  "key44": "5mvqbvH5G6hPN65NYTwnzqtqZWUzpRuRy5DHfnXUpzAvWyu4PVbcnegeUhG6T8nYq8HNVkvXYiEJW8mQBq2Vxk3u",
  "key45": "5rt95uKJNmHWnLkhpNZ4HninrWaoKXcqW4aVSdgSPpNwMTM4JzJgMaRoi5TLDtrRLyn1YU44pjcrwJt4nUHxaqWQ",
  "key46": "5kGDR7Wa8hKH87DTMXnPuEW89uihn5vJwdiUdtSFEPXMq52r1erVKYQWsCU1USaCMts7rxAZ55MfBkv93wGwgyvU"
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
