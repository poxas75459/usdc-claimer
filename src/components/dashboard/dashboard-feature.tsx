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
    "4sVQvqYHzWSJkCUq2juVx6GYvde9BdzpPvynoboSrL3paLGtyzwUa4UyPPfnGcBaPvZjiqVDxX5z2evRMUptW2BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zndjcmvHdqy5gR8WCfHfUwFkWtwumn9NBK2cUtkscHaV2cLaVGKAxL9ZPQ33YFmnzuyyjVRvRMxG4kNtqSFWwBk",
  "key1": "3SbnyEQR7CsEMfXtVzC9JbszQnYUsY6CKD6uVozb1SUQY4srBiYDJeoVowwj4M6bVVSTWEQW5ANDCZuBjnCiGmZN",
  "key2": "5eyKiDf1Q49R2vGubAC5eVML8n3qQ7XBh7d8dm1hHd345Bx5Ydo2p6mAUnvmhaW5sGGeJ3fduNmJUCCprn4ZZXX5",
  "key3": "31KpcLEUy6GPvoKkz1Uqx7sKDSi8WXAFbkdsENHrwtfzJGg2QH3yVThEJMpPjbM4asjTGRGZrGtXqd2QhWEzKxSg",
  "key4": "2CLCfWEu5XZHkejnNSFd7dyz5ZPFwLtANNL6DSvanwSTT7XhVCRd4dif46RrTFtahMd4HzAR9qcsJEbvAAPS7dpA",
  "key5": "nQ7CJpR22gEF6zVtBwf8k9jkbYQ88G88VnhujWhpotUSEBvdiv9WL49XQmVv6grMxAqofdsxr5JgHQ1UG33kKHh",
  "key6": "4j3CgESvYWDc5FDib4ChhQxjCSwSkKavE6AmaCHpBEwdXv2YCZSucDN23sdxW5iCCKx7mVNY1fCpMtC6J9PA86cB",
  "key7": "2UX4sx8RULwXmV7jjtzG6t33wayoNE3jtefEoXdH47uPwfegmtFCEe841VDt4pySLdxwJ7qvkknuF8iYF8zFzP9N",
  "key8": "3DDgFk3nCiq7RgvP8FD1tqFtP7AjHGFpLQ9FgS5E3LmHq9c1NVzTuYtDYJfdxG6hfQhSkoVxKabyWyc7rzvayN8J",
  "key9": "oratq3J1Tbn2Fr8t67uGWRTSJqhUCLQjTSsa4CrMYjS7JyRD65rhGKsedLUHyV1VsquExFEf36UeXFZ9vLmfvtF",
  "key10": "5Sasv6DHBrDmdixhY1QKcnZs7skaUCfkS7FQVb3B4qi9WWexrkb1xvbMaVmQdxvte4Mkji7L8LwBiRFyAzRdke2H",
  "key11": "3Tcfeoq6cNaDUE5XShb2w9Bv57oNhZp3KdfDYuH3HTbuE5JevCBEBVkGrFpA4ehhLh65TTdr5698emvCj7XkNew7",
  "key12": "HV4urbVFLyWC1XLCSLzGLtTR8xCNjhDzGek8cLHcnzKomwY5cZjE4X8Qd49jirkRfEr4YuKDmki4kEaKxUgcsX2",
  "key13": "4oi6P5jZqNYDPUqXRuTk3GSbbW335iXDjDoJJdzenrTL2TKmuTHkRzJx7JkfLs1AH4HhRbvDUhCmZimibpz9awEG",
  "key14": "2HNxvMPxMV3HDZfJcPEwEhMFGfAPm4uzT1v2uHAmMy6w2CPwHYD55Exn9zt3ERgTm5FqUMMo4NFBiRnygMVZRwUH",
  "key15": "u8WksCiezTPgKaET8cEq3uXTybYcQVBqNS4KAvssp5RXXgrPWHgdtkrc1tfBVXEnjx26ztHUySig9R3YktQN1hq",
  "key16": "j1Ne6GiUq5GC2rc13otgxGuGNkBz8zCNM1DpmAzqnm7BCiWuMmDmwHWCQMzqACjQgRTQQuiTdAFUy5FFGVK9Aan",
  "key17": "JrUacJn8R9qwRZNEpSpneSDgou7KThmb61dhg7BkKZdn1536E8VdZX3w9xBYiERoKpekuEsr3spLoRjh931rKKu",
  "key18": "3qm6aLvTLF7xzRnC9xSoviuDtW8RUbcGnpvfDJqPzM27FvmnuiG9pM2ykgWLsRgzgsJgKFbzACYJmG5xS5vmgPTD",
  "key19": "d3Ps49u3w71LXUghfwzysNgy1gazx6XbcJJSt5H5B5LqKV3DkWwoqFarU2tamBUwJB286UDqy2q6q8Dn7yKfT3N",
  "key20": "3BjFDVaMPMx1stW4AXPMKgAGWQMUtsauj5GgmHntaVdngxW3GqjQHStk7YVrYPWB5iJmrGmunJmj8BJPSQkUa87f",
  "key21": "53uzS664Yc5VrqVm6YAscEZTe4mGjmtqHzcoVS6reUYabffj1Dc6UodQA2xvAXTmb2wujc9AspwxRFEN4bHYFTLY",
  "key22": "67hk5a7hD9DTu1jNYMmgv8XK2r815CCfz1epv4QffngJd5ZLG4RK8hKbBpmsZJ7ENzRjA46QmFMZYdyH1Ckuj16H",
  "key23": "5SYp6uH1msBazGBHK3yLNZGNCHgQajFyzpQFKhADHfeZuVEaxdbPQeukJuda5UvspPg79WAPZbLBwLvf8xGauAP5",
  "key24": "3XvpfVEPhzLkM6PFBuq6Sbcs88uwBBvL2Md3TW2pLKVZPc8EHeFMokCinddftXaCgAznhff84D5m42VY6RVhvQzw",
  "key25": "5RrVPVhU9oiEa1Qp2EDnpv22L3hTJLFiU3M4fs76U7whUhj1ML5QGu93amACsxGWZLbSQJwH2erkX5bYkqoNMxN3",
  "key26": "5q7vFN23DXUnBCKpzxSSQR39bAdTThckJbqJbkzNoZtwgykWGdoP1giiZBVn7bWNorUAD21nhEV3puc18MnQDnne",
  "key27": "Gj7TX8NndJy2ZwFfgqBRULTo2VG49d8apUp8UYBBMxoQU4wpcLcFu65vBoUP4m9Ab3TEExDypQTd1ccse1j7V6M",
  "key28": "5MKhVLUEfMSmhy5UW4zHaTeHTRntrnqMEwCMcyWs7Pucm9CDuWhojqps1u5E447E7bVYcwLq7GKQEFZ3o3ePavJ9",
  "key29": "55tu4LmJQawtfZJ4zAjrFf4qjKN6NE1ePzvT44uLbhd7FQpZpLEhdbHtibiysQW8C6Mm467G4YF4uVrgHT2VJdLU",
  "key30": "QtCfm71q2cAw1ih5sJYUYfpx2iuVV3Yn9W1zknjky5BhqWwv6LAuRt3QfMbdzzFkaVu3wmtkZDPdrFCwKhKfDuN",
  "key31": "5pXaQJdELTZJXmSdLubLdyToEmgJjHCAUbgPWyEeq7bqvMdiP3SHcjsqpK2EgoegY8X8WBea3WQBMu1NeMmyA663",
  "key32": "5tkGzotXrH6C5mqKcTSEmwbUG5M1WMUDEjqXm1FSghHKZRP9T5TrgYTrEoJgsENN4cqhLXL3ioskUDiyg7W1NbvE",
  "key33": "5Hz1qiDkeeCPqRFVbKVjTVhZdo8CSvv6gbuiDi8Ycwb1GVtwKWkpTc6uevswQETuyGYvb5omVdHbPKfC8bQSinpV",
  "key34": "2JuLG9DJHVMi8SkJrrfaaynNRGATMV7gNrYuPzRFocHxw94qWhR9ze1Vy4CXcxPiePaLwh8EKPF6EeSpMqF3g5BS",
  "key35": "4jjKFbmxWB9XoXLM7axQw2i5nVRJLpEMaGceKFu8QhGvvyb6xGtp2zDNW8UcF13xk9XJrJoooztpRm2rryCaXAYR"
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
