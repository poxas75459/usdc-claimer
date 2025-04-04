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
    "4VmWpMS3RAFrwAZggYJwahNrSSPofAXb6gAaGENNgp8wyHUpz9yPYCUsUFetPaZZUmygxExxVxQBbuxpNyPxq13R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NYXqfP1bViUZVuS4ckABqAS3VRG5m8LQeFWBjBNVGiHuAEiao62D5gmd6SrNtQhdhwwL6JxGC17umbbmC9NRX2F",
  "key1": "4MLjVoRGgGrC84yZzLH4w4v89YaTgXXHCe5L2PjuiBEb69EJ3LCwacZ7PL6XvScCsCgkP8rXZVNtkmJr1PVFVN6x",
  "key2": "3251Ne9pWpcenmEz8YgHGDaZnQMCxUxx7pF488uEsjxQMtTcGqxQghjDWjp5p5TRjGXKAdX9wfjJVGZV3nfgrEgb",
  "key3": "e9qphH883xifGYinzzurxwBRP3e173qMwvfVTJ3vHxXRxyS8eXLsHKti1bBCjij8YR2XnhdvUDgjDGVJYQw3gea",
  "key4": "4j4FLjTbkmjmiouLrVgHL1ZTmMZPqAvTVvD9uiZ2jRV1iewrQcVhbzimpbBZj7hTfpYrRouNvkqTS2hC4MrCQyoh",
  "key5": "5HBffFLzePz6oKtUsBQFsLwqHepRNNT4wxxbS1YEgHLG4p7DLwk8rr5SQFBjZDZddjSFBC5oNHem7W4XfuQZKDPP",
  "key6": "5s2AcE85VdKw1yQU771Ei6Kh9FtnAC4jtq3tJRvHTK9xSEawVD73KQveKxMrZxLxenLQ577f9mH5Xq7vtyxk7KcM",
  "key7": "4Bd3RvhEkPqDtdxdRt2FN5deQbveKscLmntF83EcJ92EVy2BndUr4qkQvVkqB65Pi6BBP5pdQehzuBZpC9DRN8tX",
  "key8": "5zbQzSNjpQt3fZ9uCjD6GvRihJKQTyYWp2m1B83fT1UPrKQDEmeRaK6QVv7oRpqgwZHaqxsHLy435CmzLFLRnVtE",
  "key9": "rwRX4wdc8AG2siT9YhvJki6yyv56LKgAy6CBvqGqRF5SFibo4qpRbg3GkjNiEjj1A4ovCCTHHiggcrpfLBGfDZq",
  "key10": "2dsqhjv2pq8ZcJrpZqgYm58hN5WrLKmyQKRNcGm6qioWaMjJWGVzJh61HEe6HZKTPkAiWNZdzwqhtc8wt97AkYTq",
  "key11": "2Nm7RtqXUavtXF1eyvbZaQD4XoEgPFgbU2bZCxtQACeRcurDUwrtMBafQnQAwsHoZDhUKK6KttjYb6C5tMCP555J",
  "key12": "2LTX76axaSZDNg6JT4GMsLX7pMqsdvRCrPPpWdwkMUAZHmyURuxYe61nPRoeeKqcN3Nb1ve43Q3mMtuyqoJBnpSW",
  "key13": "56UFp6xmJBoN9xors8zNw5xArKmBzLJ2fjXrokiAQY8YbuP17jDe471mtN6BWMtYJwdTCgaYTU1xvZGJWkiUnHpw",
  "key14": "2dXaDeGmiKgKEXsuAX9D44rev5SgEjZLoSYRVmJnts65r2XKvhmKQsgDkZdErxtgnJhzjayWdHT9uCEHvHUpzK59",
  "key15": "2fG7irToAyDMsASDJcSv7FXKreGsBhjSMhXrbtvsLS22sYt58PwGyFrZBAFpbsohqDz6WivEa8deDAVnsDU5Crus",
  "key16": "4JsF2F6mLziQkUbfeidMhkDQVkJiG6tk4o83gh1p9tgSyvJMxmutoaUHpff3xkpWtywmCgRsTCeuHNiSPuLpmMsN",
  "key17": "4iqZa3sDKyYUB7gENtrmCaveENhrdBxYRsmL1kP2fF32TYeFaSNkGXQAtJEi2SDiL5HahDCpTkywU6f3G54PnGMU",
  "key18": "ogXx9tWGgynxVtrot5BKfDUfRviNctmCuDYX4pteUwaGVU6LGsGP9or5Rs18DcBq815uZZE4DrB1U4zUEU3PCw7",
  "key19": "5dubHPtoHbeyQzVbjRPri6FvoJvjY6JWmZYuqaaGzCqWGwJsbFR4suVoaebYc5gian2aBn7rKGNA4dm7MwoCg1gd",
  "key20": "2MAEjc85AsbxpW99G1QPiHN5j6gR3pWABukd8Nv9E3bRzPHt5LJpbvExwrRmFHKwokPEwvdng1agX8YCCatWyiFa",
  "key21": "358U59G6uiKCh5WaD6EoJiDkbb96kV2gWj4o234ax3ZzQJE2aWgQq3dJ1P1Cv14cLSe6HpHy1znqe43h8nPehdw1",
  "key22": "37Md66jL7jjcD4t4SiikeKA2RUXkCQqvFm72pJdToZRmSLiaVJsSfgTb155iuGQCMLBpe1veQiNewTATdrKJZikV",
  "key23": "W2NF7BKAm9u5qscqeCpvDbfQeZc87EGt2TzYqprC2haHw59nWtAhVtbF4NkaKoRt7yeBeRQwEgc3bTQkuTJhK85",
  "key24": "3hnd9s7bk7kroPn19oJsrfeLZAA9znnfRLJNF6Qo2bK7VLq4xAaokiGa7BHchKP8FLgVP3f6NnjFD9A2FVv5wwmH",
  "key25": "5FsjAHrz9qJC7rkv2BQ51zyNsmsui8dMYwZ4oZFYb6oBfNnj7Hr8wfaYtqpBnVe5ouBjsHh6VScyYQn5kBnZhrzk",
  "key26": "3hwgxZC3ksiShsz2QNBhP1ziQGDi4qDs8gfkbGainxX6KRkWsEHdzmSkzxNjDuzCHL29rM2SpRVWNKD4SQwFvFyB",
  "key27": "61DL5r8ZEeEsrgzWwwGyjMqQN4r9rXWZgLHtVpFSws1eDqzVMgaGwnVBsWt5DybogVS2x7z1hdEPKYWkcuftdhrn",
  "key28": "4rgQxKyCwtFnzKHXNGUxyXo5U83NEiXgBcYwXnHZZ6vNLaspmmXMRhvw9u7y3abhL5EX1ifYbfGK4YkJgHN4R4Ed",
  "key29": "4mBsqANyvnAD7Kd5pzdxiiQbDzbTrkhGjDSvAuvpzfpfYLx8SSvvM76AqKjhuLA8ZEUFKibdTxeYkXYdtyDw6WaH",
  "key30": "4k7nRWYcziU2PpUmKf7TkSWZH2ExtAS47RZM8tTu1S5spbeGC7qhxUxW3WGh5HAHk3bg3ADQ3JP2fX343tm22P9N",
  "key31": "j634icspJGMH8NSTCZvqk4fYHGKHsxNvgUpNDdufGLC2XgkM4ixQmCgdrmPeryZ58Rq1R41r5zE7HtHE1iAcdPq",
  "key32": "4bgdjE5Q5BuB7w4ej5FTiMVadWBya2g6akhupLRJgtdGa51fAdN6gnrXYrkSTCQMBGiEJyhJXnDoVgRZ8WFMqBkn",
  "key33": "5wSwx2SU2v8WKwRZALBGatEkLMPh5gH27ucAKkJSY3f83SuFmWxB3KTWrk7hLMQCYpsCZBGzF2ECxpSMiqY5Q6Jf",
  "key34": "2GUmsgNCcGmphoifJH9TXp1SK92oq9wT1o1y4DjFgE44jsMgrQqb522hHBKvSSNfae8DgFub93JCaTdtc3EfPitU",
  "key35": "2LPZmdMjyYjmoCZC5yPLzcSzX9y3aVGLzZc21rF8H5DoMV7YdJ4pXAuasvS65EsLZCppi9fSBiLaMNUZdVUUiSnq",
  "key36": "2SeqeA3hgzY9ZiDaHM3RDDCVYMn6zFbCU1uXJS6ZNFXCfWV7xA7vshSoxDCJyDU9X1Mej1QEDwsp3NJMsRcDQdbC",
  "key37": "4VVFLB4Hmfn6ZVkj9ZWnQ7JqTj6HfcAjaWmdLwErGQkVwz4bqyeiTYLmqGJ684xiaFUg5Vg4SdkcMYCYTx1xA5pA",
  "key38": "37EBdkpWuijsRDuAQf33fv2ZNo55k3u4bxD9eo7cX4S2FfKd9ABWApXJm7bEHfeFnQQZghymd68cYi8QEPvmyC46",
  "key39": "2av3Gn7FjcVPHTetUNEKZTC7CFxWFoZom16Ks4SvnUj1NGXgtXBbhrGKJTGbSbMvYDENuBkKWxC9RtVHc7nJkPDn",
  "key40": "2ZvaczPie75sjNnF33pCbXLYmSpEgt24XNeCbVuyKRymSdL5xoz1d83Gs4UXzCfdnv7VdG2AxQgSAqHRw8MZDaae",
  "key41": "2sZPvmohRPRCkhMCPFaqd5JNyf5TARiGJqA52QaursFxJXH6FH3ppWzDLWQDeF4NE7DAiX9V6WnvgEHyr9kCEfFk",
  "key42": "3xxvmC3WzK7T46qfUEpnRbbGe269kNzS9Q3afu5h6QW3dw2vUYxh5GWDBdweTE3KVsQopSLcQ9naXCFRqZRyS4SU",
  "key43": "488jsd4SJXbWBoNxfx33RF7iasJ9qEQYHp4aRUSLDEXvbSro8Wg4dpWeKyBAVDn5GFmFfZdB2aVPx6wz1bnt4yZ1"
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
