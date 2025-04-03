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
    "3SyBSjn2C3n8KvznXsTpXKMerUYek33fqTUP7bjguJ3GRUEX3zkEz4TAxoYUhjT7ZCmjqbVe38jkAb672Cvzwgzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtXBdNC2TxwKecKSE9GnmKWkanvSLK9xHBiYL878j6SXLxVKuzmBxTNto4BGiLvCyqdY88Z81PmV6z5c4d3WBay",
  "key1": "3Px39qpua3azgYEnVpDVnhNkK11T6ogtby77m24rb8ivqFjbWXbaALzKmd8255S7cz4CVm7FFfBzoWsazrfXLSKE",
  "key2": "5VwKoqAaLHp2mp4MkCyXVtnh1oMjocUx1BfwsZ4beB1yrB1cXm9rDwvBPBAEtiv7Xmje37QK9UL4Cqj7uTNnFdeJ",
  "key3": "5piMos8fi94NdR3pNcUtPvDeRYCMyr3CaHg1b3hHMFeHpm1DMQYsricSM6PbnAiRAHX293niuCTvLde6UFnHztMF",
  "key4": "5cECVCKeN5VJv8EYnLTGbnE2gLPU35RnZ3EV5Ybv4Pka8W8HRZ8vBryq2cifQBLamgS2z7965ijk9trQ8rzXHuDE",
  "key5": "5tJmfrge7jVRHPSTnUHAcrXEtWNQzDMmMe78aDqQBxTLn3nn8m2ZUzXKq2EbrQEW9ZmDSAc5Z6BMHBgX97Sm7Psh",
  "key6": "59rFNt6FswUqAdDhEUbzjn9jp7yaeBGhzKN9HZ3BAAxaFos5LHjr3RHTVKBsGMArBHg8t2kH6g2QEHnwWuAvLEvc",
  "key7": "mXBYf43obMiu55np7YjB1ZMhgvxr3uAQhY7rJ5tAXQtoLEnqnFVFjwjb6DC1oGsFsaAbN5EZ6VjT24LYifA6XgR",
  "key8": "2r3WgXJ4uLLjYMWctTRyc1FKVXydoMVztwtTfECzLpUAYChzobYvkqoh3MpDrR7eVYtskpDdfok19yP5BQtkPSs5",
  "key9": "5JdFuYrg6mxizWDNdx22hkpCGTJZNvPyCbTNe1XESHcjk3U7nbTsVcbj8rKdKDNUmyaJfM5pX7WEo8K4BdQvTziY",
  "key10": "5PDP2fVUs7WBMtfaNPBL3LztzRAKM1qbMMQDeRsgMSCf6ae2hJXAwCUF2HH8PUX38TuuGdBXUZugTme2Hk9gfGMr",
  "key11": "2RyNvZDfXStpJPG1cUJYyLrvfXbME9CJMaNSbPXFokL1CYTmdt8a3r7W1K6eztim5LMGmLKrvGYhy16WWzA7m6bA",
  "key12": "4TesebTmJZYrdqHSMFFvVhD1ntbgtikLV4xdnEqAWyRAwqCQssz3BcBADifX1NT94PDDbPQM8ZuESgz9EmPwz2Yp",
  "key13": "4jkLyZSn2DFPhTbkDUx4UXjji3x3T34TUVPZZcMhVogoeUQ6fCp538PDe5g9EDa67tiDCM2j2BfS7somtZcvd3Wi",
  "key14": "5DZoX4QTNTbe5HeMARAoi1z3zgNY1aUszZFyyic3yNHWFqwpBUAETWB1jrGj1PRKGthMRUtsUFBmHsALS2ui1b84",
  "key15": "Do4oVEaTaRpjhHKpyJJfKbzrEjnKjLy8fBch9M6WRaSJTqQDdJFgqSvwVE8zFioXZHizvkRGTYnaBGoH3XgDfzc",
  "key16": "48hmcAjE4q1joYEytiEFtTXhoQyYjRvR6YKmCtyRFumF84prdCpgN2w82bZWwyEVqP1EGRaDzvQP3xuMrrk4cvbD",
  "key17": "2DvaEBsAZBLqLDsg95KeBg8ApFo8c7yPJTgydxpJKkUWGc9cJEhFcntPSFM65ieYvcFRpc7bBYKMbKHZi5AmaTEe",
  "key18": "21HYTgTTcLqjX2e95Gg9Kmp6acr14uvBjCpUpNBWp4LiLgH3fUfohVgiFX7ct2H83uALrhvKuGNZFSpEf6UW1j2N",
  "key19": "5EoRn7NjCDRrswV1mtErXSEgAcu2rskrSR4CPrHA1v6NVEPxByWCfEjSBHBDXpGb9H2Sygu4im7fYVBqJzdpCoty",
  "key20": "3xDjnHgp71rmZgktr27ZFeycSWVLSSaM7t34CvtWQMTUu3DraJkWz4fUuSrwDpAwXVJHuKRgM7xRH5j57JwhU3ys",
  "key21": "sHcFLNyw9k72KdJkAHxUE7CvFUGGp8xMYWTKftGp98dcKGPw5Mot2uC7Srs2YUdGKNgEUStSGkwtc33hVvBcgUP",
  "key22": "3PX2ZGa887BqGSfhLh96mo4xn1gpsJNC54UJ693zcsyBdrcXz4KfvEFpyyRvmXXgNZeSBAoLNyeuvgPf1TqQeggK",
  "key23": "4XseZdFR3NgUkuTBEPXXyA9i82T4261knF7QLRdNfsUY4RFrXCircG2dPdLQrUwfTsXEvqSSMGFxzMqVEQyqdBzg",
  "key24": "2U3VgyDzQhK42tcK3cWS2dm8JKWmYuUdV1R8F5sxrTmtiiv7LrRb4gV8WqGBzCtnebjT9krioisp6Md9AjDau2D9",
  "key25": "33ayPyXieWbXQit7samM4B5HjThwdDF6ZCpF9g2CXqybhaAwkF9CaqtjLNjcTMJneyUJrde11bm1vnmbhqVUVWbN",
  "key26": "2tMd2ZzkqjFxAMe9x8EQj49VZnoVrqpPWdcVZEQLJE1XRkiYnnGPp5NEQ861c67N5x6iNAYAVv4henZ4cd9rFJi3",
  "key27": "4ASZ4EYkfAnntBB4gDat8UGqausgDcaKmqFeGuX4SVQ1Q7q5PRD3J5wb1rA1JRcoHzgypHDZXPinJkEZgg6qv4Pd",
  "key28": "58qSYYG4ipbm6iWMqiRFtg4dX9MtcQ7hD4qYgFgGrb2wwcfRAk5MA47P1qKrxFwUg3EKJBexzJjc8LUrFyhnkY6g",
  "key29": "5yqaHf8wnkrgiZuwyemaDcPmUPchHgZjEVLBK3RaHN16MGdujc3TmzcGGmPoHATHsogmHWSUiuG6WT5Hh9z9HZ9Z",
  "key30": "5iTHoqXwnSjFyiRgav3PqnKULRETRBL3FWkQrpUY1ELr8Y2CvHVwU7KKxkmS6Mq4h22sp6gHF7Q69BNetXCuFtLd",
  "key31": "4dJSEvQbyDjJEaWZpVKrrJfKfjJ7hsJCsHB2Wa4spspSquKgM6xRLmLJNsUyovQtD8muqi3QHtR6aVmnx8sP3fqo",
  "key32": "4LS1L5CfwMTeThx7Jtz6drByCCXxyoqqytaGD2wAS5LjPHda1iRBCLoTCXUSdXNQLa51NeMSrUCbyf7wJZ2g9Di7",
  "key33": "5tpX17NDHX1JUEYL9oLYiMkkXciLYwNruzgSwzqTbPku8gnQLpHXEjmnVZ1ciLjCsameqyq79aEofBZ6fQAu5oEq",
  "key34": "AfQNYi82ZWSVRALsoVEQui2NbiAE6gUe2n27bGUGwzPkjAMrFfMgeSE5H38cQKkzvv7ZjUqjhfjrFhYimJtwnVS",
  "key35": "5ZV7w1VUCoNwcJPm1uiXkLzfJJS8hsdmCkgQX3e27qtrKLtURzs5GZ69VUuU4vGHEkyfBJ6v2myMvkEK8HzfwWzh",
  "key36": "4dX6naCXgyRPrjepSrU6ttBzqMQfvxTXD3ajHdyXmvCe6KjFF24ks2MNkvhNHHdq8Ttb84P73oKtYC6Q1ansJ31s",
  "key37": "LFdc2phKUjNTRWDeSSTbNHL8eF2FzyDU5CLs87GwDrm3rqVhG5WUcrwnHmZCLdMgXVTBmkkV6f2MiqzZPjW5pBu",
  "key38": "2QuRoF64GYARWjDNvCEmSZWFREhbikjvP9dfqDGZqPLRKHcQmUCYkWktVGQGBJAv9uGyRwuXGihM3neMyo671CJe",
  "key39": "2ass5psU2oBHVTxVbqtKhbMqL5vaM3D2EhbCM2jMybY8Gk8xCa62VBgyw91BPNdJuNzhCV9bMgMCYppHeMQsM8te",
  "key40": "zN6eqUNZQ7DzzMP7R6TLGsT2cvWmBeFQ6LensasnS1PoXEEdYyFahW98vuJEpuYgrcuWDw4oAf21GwFdvzzhBem"
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
