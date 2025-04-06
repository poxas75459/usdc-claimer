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
    "4j2q1gnj39HNe9NXdwJwiseHbzXynLypYbMkLBqQmLQ49w7LjkNSZBmCK26ZwpudrgeGXBkJjrn19zmgXdQPJq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PphKtyBz5DxBNbpP5g6UtaKTt9uzQCr22T5NaaB74DVCqpT93pzHK2K6V1t4xoCvkLsBKWBA2rGNWd6eHBn3B2A",
  "key1": "2466q6mSzghXjwf9j2y8iKMbvBF5BHFptQAMHVhCLe7pTwGYVdMtBqwwdVCqMnWE6ruWy3y27VW6QTV9kEB2hZdJ",
  "key2": "3X7y7bcYJ6ZYxYR9Mb3vGgSuN5mt7TyGKDDRuVTaF5LfivgcmnjYDMLK9WSbtFyDhygnxvPbL2Aa1oJGLVkV2mRT",
  "key3": "5CtYUHNVYzoRgkgJ7LaaP22RHAqiLvZWVCcmjV6XGLrmwcrroNQ8jvJc5g9iWac2J1g1XVF2XzJNPjTdH9EdUW7R",
  "key4": "5mnbE66nDkq86RExnduKUirf8BLMouNoLE5YR4fTfGaZPg6HKaNNCZsroz51M5H3FvFM7iUP9yXQiL5kEC2kdwXJ",
  "key5": "3Kjqu6Fq9sHD12bPgNj1sXSFdsHTDjfapqSRm4DfhEaHVJNfYHvbWAEayv1bCoP7jjGzAPfo54mQYpDM5DiM8VYK",
  "key6": "3VkYZWpU3ujW5M1BCSMBpJ7GhRa9UbgAT4Kh8a5icMg41yUFxbHAUSyg2iEQVSLn2LMgo3QKFsfJnGYCdqdjtTLb",
  "key7": "3Zae1ASziZemGcpTnbXddkXkEiZ7Qmu5brdUQr1mrWqSviYGjagE8Gs423DkRskYPLHe4bPv2qAPvkQat9ZPZosZ",
  "key8": "5btR6jxhnLPG6BCs4xh4EZTbYo7iGMeWHGu1kW8BSsRZDMcNbb8NS1eAYEoqWY1F1hqhQyeYL5DeC2Ks22UGwspC",
  "key9": "41L2JQebNH2SDzejMkyDVNTh3toaRkVEWp7gafHrkaS4smTtYofxR6FXdQCFJ9mwT1TTpDcWCUPMy2dG3WrKgfbD",
  "key10": "3eDLBtDw38o94xXethN4eXaAxvPtKoWPsiG2KFSDi1buVAKfofPbvW369tx6z2e6atQuutwNsH4TRxakFCK6o1QA",
  "key11": "2Z2GB355ZGWehENMiNmUSCEpaK9e4zqgrZTx2yovCSWqGYb7iQpGRAg8jeaXtm7ExdG2ZFXd9M9JNyub39TAF3V3",
  "key12": "VHFJtBfsFPZHQoWsLaYottzJoo6W5wV8vtbk1xUyxTadPYQJK4aHAPKKRDL3T7UE5mZeZQtx8kL6t96a8wbL2uU",
  "key13": "3r5Gcd69HCG1JBx2PiYFPNj5bix1dUS1TbmCK6boACtXwB2R9R6eibCC1qN9cML87rwWehPSVrXh3XezK3gnrfzM",
  "key14": "ZpeEFoM3my1VSAEtAUsRnAkNmy9cSME9h5qm6QaZRS6fTLCPU357whpxaPtLS9cYQ9uC8wTKQyaKyxv4VsQv25K",
  "key15": "4T3YzeCAX5w5J6TiEdCcGi2dxJXMnQteVaK59w7Vh7CREatRBmeqiQXahSvo7w8Yt6QoTrDFBeyiqFrAHfkuCFcK",
  "key16": "2gkcWf3jKQYU32W1jLyCDDDryFBh5bDQc6c1rKwWSrkB53MAKfBmdeMzMcZraxvpGgJ7JUu3UU8thkgtAU2oANjN",
  "key17": "2UD2fLrfiT1W78Dns5DJ5DX2LaCZao7Tez7NHgmn3FNm4Zhpfa7fmYSpyvTKw3NubNFYYL5EEGbuPuFbAfCZcq2W",
  "key18": "2kXjpepw1qchSUVPGeFVZ3dMkst3U3vRhskvDYp9SqeJNFs7nqKVG3AdMW3xFAYm6LCK6CWwiA7dcv9VfUCnEYEG",
  "key19": "2z3591FLtxZyT6cnGsKcFoDSKWQkPGMaoD615CAE5RV9h7WtMQTf8h2WyouPdaH23FFv6MJxLAynQ5BwPibXXgGj",
  "key20": "yyDC1cyLPZGQJbjttEaWb42kfr3qed5TQRbgzj5GkutpyND9j3zieN5v54zpewRAt6nYHHa3aNA5whseXUBL4zp",
  "key21": "4wkWYGnh5R4bNG2rkHg3ap9cHAULPYyLsrW397Pm2sSEssSgxLR3oQxNhxHUWYjEau1WRGo9VNkEQ9mjbF5Mq8bC",
  "key22": "5jXeSFFhj8P2PCALJnZc7ckfYQLXbMg27ERhSRb1YcEUrY6H9iGBVEpgomZqaEttNqzdwUQ7Hrga16QHLGcom47D",
  "key23": "3u7rdUwjF2xymHbS7AaXCQP4QT34cCSTggEJWdmsDBcpWk9aNsRTc9nUgPYD1J7FhfDe4aqBx8mmh6ccYgZLgVbH",
  "key24": "5k7r7hn6FE64KDhjX88pQ21s8fMW3VzwixBgBjqbzE2gxXRh8TxrRUAh61smN1xDpu4AdaHmVcfjw31nMXvv5KEm",
  "key25": "4LAFKWJeSLjh4XugsBpy4NprTy1cHtjs8eZH4K7B7bx2DuvNwqWqxR1SYZugXzS6NNADwY7XTnrUUzrmBTAPA9wS",
  "key26": "53No6ie1AidN9adG572P2BmbP85M6QgGd1ZkCiiPHZobDMxmUuT35B1V6Cf4sRfLks4VfFbF3Lnb5rR4uqnvacUP",
  "key27": "2fQW83Jg6ac6YPYqVyMHUtpQUCgEjzWbpi8uykySRzq5nDA5bU8sR1be22WtSVbMEtDUK19mzXszUh9a5TynTE3y",
  "key28": "2jix73SDqPRq4kq1eutW14SPw35yDxocURNVbzPDH4VMdjMeJh74FYuzhQFSf2bYBXmNYpq4aBBwyb5ZDnjUu1Ka",
  "key29": "5c61WrYdf6dTqCD5WCmLdcTmLw63d5ZN88quMFP1VV34WGsVpXjDcTe1NkViRbTCSPLJUrSHf36Fe17PNVBH9ZLi",
  "key30": "DhrSqAeb3NNbZL1voYv7gmb7e5k8reZkchD2WHUxgNoEUFteBMGyafBo5BSXNFS2EYLJyu771iqtFbTHpypTxQF",
  "key31": "5fY6DXHjfsrgBVACQ5dzG8kaLwzTdUP2PsbYiajs2f4pjC2FHmuFyZwaANz2zLuEr78jnVCE3bEtc6nUYhJfU9UC",
  "key32": "2X4V24hJJU7V5muecveBHnhCzHh6ZMz1vKHHntoFMumed3QaqkxRB7TLLc9pf2ZyxQosTBsfvRTjgAfphUDm6c63",
  "key33": "ZXSoJYWZSWbpSHvxLcNqiuc8ZShcFxQDURMogER2d7ALy9sqZ9bpAXusaHTCa28a3B4HuPjig94TWGmSD8SibTN",
  "key34": "2V4iFngedFrhiDXmL7rgCqPNLScrjvDH6TQ8ut3yisQ7pvqjSLDpbm5H7CqE15ovBASj4fPiLJb8UCPpp35pGvdZ",
  "key35": "4cZCDmxtkjpxB278DbDoCiAMUnQ9JmmaKmmrLh4DV8VQ4kNkhRh6ER6rcrZ9rTBL8NeR2Urms6ZDDprwD7Z6mSjK",
  "key36": "3Mdp6HWGWKB2JeMg4Y6VmkoJ1ptjr9ceuT6ea6fAZtDQQKuwBuqkrBXfrUr7TqsRv4ykP7qEPznUusqAgodJVxfg",
  "key37": "4g14DRNvA8ycQY1A62SaZu6UXi4F9aGqyZrvm1uLswPRpQuM3YGeA8xxxfGgavz9TgtbepZaRnPSU6SihorARU3r",
  "key38": "vRoKkXJyxBCfvZBmnk8oukgXBH7sQec8geh5ZVUmMBpZaJJ1WycbP7KAT1YTtMdCxisRhpjRAHyQnopyRMoJRot",
  "key39": "615Dy8PtdzJRj1phA55xhhzcm26HrXEithdihPnq189mnJmYyjpEeSjoGKfA2whoXR2ueG58jtXCTBGPjUFvgQ6Q",
  "key40": "33pbtfXWdW4bCVwwFCjader1QdnW9w7sccuuxBivvZFZrwBx92YcfdYTFwxiqHiEdKEM887Qqs9HpNKo1Yj8oLQs",
  "key41": "2eGH4356H5JHxJLNzgR2yQ8msifgYCz2vPoQzkgTn7J6KwqAYAoF9QqvuShvMAe63xBgWN6xetqZqVnyNJRafRkL"
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
