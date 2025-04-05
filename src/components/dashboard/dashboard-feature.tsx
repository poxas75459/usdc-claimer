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
    "4mwuqeoLsxTbQhkRpq23cvHRHP1SdpKUjHNkETwbJxWL1gxvZxdK8pjyimCf4bugWm1C9C1L9tEmChYVNNZtXqtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fyg5zBf9gDVLx1Eegj3Z67Y55pFbD51pQCLY1sSZ6U8S5jr5HwYtPwr3AsnTjQzw1RVvoqcyEMfKTPR38Ufb3MU",
  "key1": "42YEXgH5bHs4oAmVTxcWXLdRSZEUUzydQKbi5D2JsLedW5MACr1ocieqm5TMYCgJmRwtfvD53T38Pu999iRXgwUv",
  "key2": "FMDdhmc3yW86EHYYogtTXvs3Td5kS83re5S3J14zRkKJWAMcTfqDWwbUZGQUAZyyR4fMu9132tg3pkyegBeMU3i",
  "key3": "3y6aCHPzk1ajUkpZiHNjV4vzkUVYUvyGzeTprsJ7Y8wm7WrEA88t5u7wJCkarZVi6T7PPaDBgSFiaMBgFhxeFfXY",
  "key4": "2Nhhxhg42jxXzYuARfadtY4hCgRLu8Sk4AcyscdpuKFACKm5UB55RjFzHWYdo4xLXd34szVRQnCzSHhrfW47cm5Y",
  "key5": "4tFyxe79DXEdbnJCtoavLc263D6NdhwYoR1BFyqW5A89A9AW7W2JJDCTq9w9pPx2htUMbi9caLTCTCPD2JbVMLAQ",
  "key6": "2rmSWdPh2RqphMdmTvYp2uLCL9ynmK3XSgunzi78DmYFCmAvAWUZBcmMs9V7AkDKXTfcLeJQxqFpsr2nkPWQ8fS1",
  "key7": "5zmN9TvJcnmTBdZVr6QUecXf6twTc9fBksxWqjC2kvUTEBP8hyqMpWHNCzVAhRi6dRavG6zYoHKQK57BfhrxiC5s",
  "key8": "4ToJHVJvtPcfiznoaKfG4G8rNh1UJPrRvCWqDDm6zQCJTW3sPp1cDjSc6Xxoc1dibyMLbLM3UyFZ33eAJJ36aiy3",
  "key9": "5bFi2Zogcbq1Ds2dsdHTHqsTCspgKepVKB61EXkaUdd2XrvY6am7KnkJpqHyKXkEYTdoAvi9UixgwBeGtk1venHK",
  "key10": "4kJD4CPaUm23QAk9aGr9G5eTP5cr6WGbdhGm5X4TnULv5QFG5YZjGWMPkna7rHr23bBKYyx9wKJtpmdQAvvMPZb1",
  "key11": "62oodHyvp6SP8PBFuBdeYH69B8rTkZXcQYof6tJbqj5MEJFyrrWct9f826BKWLJUDYcNik9RN5Z3HJ9qNVmmKkAF",
  "key12": "45LB6AaK3Xs1oh5dVqfuhk3SMLXuSarshQQ6ULLCnWXMKyh7pV6ucr4Gpu8p9CAxPwsEqMngzWs6joqPjKpbn8iW",
  "key13": "3j7Jqag67uUBrBV8tepdFrj1ZkjBBZW6GhutkSeMb78CRvvUN3v8hndzK9YNMEErnQFCYQMAg6NkTg6Uzzasr8WF",
  "key14": "2BqZ2vsoqwCihPetgUVSTDXSME2QKcnJ8EwA7Ftqxv6YEjodscgbdEEppo6hYdFBBVduA3Eqe4Wr1D2QzXtUV4Np",
  "key15": "4YgjUD6FAuv1C6tr29LoScGRfcVWGYj9jT7D1x7ByYYPyeXWjmm9ih2Ucu45RBjjs1xn4nKyc2hEQ2XoPxHDqKh1",
  "key16": "eNtB2zFew8tiYLwNAjJjADF5fAurQAbPxnH2BcfuYXrkCaHenmmNiqgFbBeHCrzZcwZEDNJWR5eDQgmXFgxmVpe",
  "key17": "2129SeDuJDL5djSn5fLDrDqeCnwiABSXWQyacPBohCfSsdRsec7quFmVyTWNR3L2xYBnD38SgmnguX6DSQk9SkJe",
  "key18": "5bT33J5Loqs3BQpUeiARQXbnrVX3wU8j7X9zFVa9QbRLqTiYXjdPbV3eWueL3ezPE6DJfdUdS4A8wizshC6KAF8A",
  "key19": "2WowaxiXiKcKem2X5qfqREPJu59BNjVR8x2CAKxVb77aS73pDKWbRWyqUY2zF5Tq7Xgo7D9Djt2PEzCk2j9JKHti",
  "key20": "tXYxkvDshLAb9597GFJvBmoiH7WS8e7jpEhXdzWvS1Sb43t8TfcTpBELGY6baGZMPPF73FALGTkYGx2KcfGh1q9",
  "key21": "4mHyrzEJ7XEGUE69rQ6xxhRpu3jW9nef1Zh7MNmugYtF4NSYXmXnhrYq4wi7dXsB12sXAeqM6NBFjixwXH1oWQ8g",
  "key22": "a7zrT8Xo2kZJm8ateVptwipZVVwbprYkkbkUFYGPVAFX1Bm8zD8o1dM3fBJp2uGnWCg7Gmjx66eArqFYkS1Yyat",
  "key23": "41bJLfiFXRNhQaZHexerg97XzDFuisJgps33pZmE1Zx5MAoFZSxPdFby7YXp9R6gs89Edvqc4g6N8eJMiQYxUeCR",
  "key24": "2LzbUfDrLBuz8o7ZSvmFiwTHvSq6ZbnvxtVhg5QanYo99XPsMaRRktKFvpnVKvttx635o33fHK6XbY1mEUoM7jUv",
  "key25": "5cdUie6qzvLmZ8PYFpv7D6JCYmUD1WngPkhBo4zG1kds9XoAWMMEcEvDnscnpNDdaNDffxJJ6jAQZz1gdjqecPvL",
  "key26": "3c2WZt93U6PFRCRvpmZ1wppGpXAXu2myVGq4bXg2RVFUDBqo8NZ9V914PqNcZMyNa1kAxrdoYXDKoY6d3BHgsmXD",
  "key27": "47D5BSHuys4uhqF4AXfzbgStcm7U5KW4RwLnaT9w5q7v1wd9pSqtvamx3DPJLMKhG8RWSEFnAqFmPTwYh6QRLmA9",
  "key28": "4RARc7uLnDdKzQqXorWx6QxLnvUAyD4NaTjwbZVx3a3cHNiKh5vMdjyNzJiSNPToy7oNR12eBsrYkaEqJnmmbC7C",
  "key29": "2D4MCmmVzqpNmosovGc7DxXcBinYSjE1ofPBxPGScPDohDi5C1jwoBX4VXU1PAfCJY7eqMo2z5t4iAbYDasLtF6n",
  "key30": "K7JQizK1YPdApt5XFjR5HEs4iTsQPf2bGya6H3qX8aZTFQhVDEenfxvgapaCY2T2LcG7Dam52Xx7aqjzAcQhMZm",
  "key31": "4ufAFdBGc2mNJop4cwD6jCjgTRKw1GYVSKQgrYL1r6ZKKZDzagAqXeewQ6Fev5Qe1DSXgMR8VAmDwgDRyhyoRxvc",
  "key32": "YMKwSeRqDkr73KKqjdhjZDb3RSEAWJ77jjRLisfepPjSPbm86pc5mkxeJZj2nRVS7gNENAF7KpZ27C4GGJbh1mH",
  "key33": "judFHcdKwq3SDJVENcWNKusC4zkdPSYVodmcRsrToJB9AHYx3DQq84j7ENdaaW8cxGPATBo9ScgXvmKu4d8jh5d",
  "key34": "38VgYbFQUGjZgsuhtVq1NwLKm2TKVyXQDY1vXRp5qBVUb2nL7GHVrbW7j9ZsNc89ejexMmgyLxTN3KbkTSXHaLYb",
  "key35": "2HdEVQbjxJhnAVwRGyyqKyc1tgHRP2XPzaN6FAEaUjtPx1N3LWraUmuVEHV97MQkN4nnfMcuu3jaGA6neC65niAp",
  "key36": "33hGvsAhcxkM6ovo1PtwL4LYvciFqD8ipj635NJcxcsPDPvqV6CjvhtNckcgQni5JrUEehpwqPbFTGqyNkYWWUPs",
  "key37": "55euYGMz5QoMkqZjbMmsY9MHySmCVzn3u6xQ29fXbiVDuR7R1SqDJFuRjWLW58ixH5wzn4AnW7nDdmrSw28qTbWv",
  "key38": "3pBFK4GG86RVt6hhBX4myShVw46UVKBckmWbMrs5ZMoPb3TaiDSSiPXK5jdqxJP1NkYD2yU2aZv3n6mhFE9H8B9R",
  "key39": "3d7qHVywfXmwCDPabtUiwdixKSuBAzycFiUQ4SxnLrJ29jnnBxKTyvJ5SgW4bnSmVYzrkc1B9wXCMc4uDXCR8oBC",
  "key40": "4bJCJtjPs39DGaz3CheJqTfk5MKHfKUX6nx9m3FVq7i8YuLaZCTP8vuFKo3NJFUN29zowLTHFMCk6oWN5pjvcrAi",
  "key41": "57zLBDmTcqLznx7tckJrpGLfSXkysd7t7jz764qw1QGUVuYUEdefWt7dKPi27MHxjYZgsTd3KabBeqAKQQfQDDs8",
  "key42": "3HbmP4timm5dhVazhqrHfmEW342b9azkZ9kdz2Kme2m4QDCkSPFuth2ALGrCqiTug3Dr1WG8t1MWR51Dp9jUQWuH",
  "key43": "4RntMH59y1RMQcJLgNMRrEjAcJm6Qq8arRF3UjaR5aQs9zhGfn5DCAd1i1TjgHXuT7f6zSq3ZuzxCAyCmykgcwSu",
  "key44": "4TkBWR3Xt5PYamYR4GZzfNYahJzqCN7yUAhdijMvXrGFW8qPyBWKDTotYbTbQi2DPmm3fDSXoNvYzu1Z1d2pUUsK",
  "key45": "3X2wkFoQUQ3ozqLoVKYZbMePgbE5f56AV6BSZZjH4D7ohvRVphhmXdtQefTiTviH25SZxAtr7a5GZNbZ4b9Hgt7h",
  "key46": "5CygT9UE5EmmrW16eSNCjZjJERRZfeUA77ERyh24mxnLZgdTJHxhgUQUhTP4y7w2RhDG85besWBPotM9GbcHNc53",
  "key47": "CHkKjikS7uW5H2wfjERiR2dCTU2WprXC94W53x6zSQwKnNKEWEQLy8W87Ke2MPVY3MKBeXxTyDbxwJJ4HfAQfqx",
  "key48": "3UkFu16BQsrY41LZJCgnUWUn4A83Bo6KERV12isnWh5ti1Fqws2N3qpL6gpPQFeVtrg69vfmbrKwywkYokgKztWB"
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
