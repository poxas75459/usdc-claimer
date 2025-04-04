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
    "5EzFPiZw1zppjFVjEV4pA57ucptu6AU1DW2JC1G8naiMQcpAwZqELsA8Gny5WwXbbyiwVGCn47gkXEsmT68AU8gX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cLSCEG2wKTiyRtCHVerPv6TQtFb85d2SLUDfNxHT9xvyD6cLiRrdwfwSUbgYnqZs2spbzvtLbbKx5XUhrPKH4wM",
  "key1": "2S7sJJL2LVcndpT5LwZksKtnYHjgTXrtBjxadCbmsU2G1QBBuwen2nAdnQbMYAEPUYUo3WUTtbUDbq5cSyCVeY91",
  "key2": "5hxU33Pzv73swuodYsVSf19suGYfVHmBH2TorpcQcAkc5rHiXJopT28ucaYWRyiVM2QtnRwXo44PNEGFUhgq47o4",
  "key3": "2oUdQErS2N6vobyaHJgZZV5asBsD5X528NaAbK2oFtjPit6tuTU7Gbn95SqSxJNpimn87XV4D8ePLHvZqUyPbpXe",
  "key4": "5XrB3SJRTBAjgg4wnVmNLmctqkhhkiX4fMrCvBw7zrPCiWFFBSaeB3UUfyckdhnwid1zFGntX9BsufZCDN65iXKP",
  "key5": "4BNzXynwgPmysXKTUHgsuYkJySmYWzpv5mWydd8uoraUfTVp7EtMRFgoHWrdWEz5yAmDBQDBQxRDbtpWtz1nUeLj",
  "key6": "KhXUV9WCPoCRS5z4mDy9MkTTMXsfpVVEABXC6tawmWViuQcuEV8UZAV4CPczkoB5VsLcJmusZugBycq9jMkVEpm",
  "key7": "CnvcH7b9vdYAveYWEkUPjJCrMAToEn2Kez3zr4zuFGpSgxHkwMBQKS8cxo8idqvtTDRJDQ8HQtTn9uSViJbVYec",
  "key8": "4626u93c44xVuZzkovPTSP5dvHENikkqYrTuxok68gsLaYUZteXB4qp6ygahZTmtf1Js534ZibzAMKFVQUL4Dv93",
  "key9": "dkp5fvDjjhg9TV99tgMVAoLZumGRXxStDbmrBMU94a6ymgpB9Y3M69duVK1YsP44i3TCLXukVf9pdqxkZpWwXFN",
  "key10": "655bk8csDeCXaVKWLReqHB4KLZnB2zmz4tYN7xGKYo8YDzEA2q1bd5uxnNjCQY4oiRZCDgjPRgSdwvHMXK4rTdqP",
  "key11": "5U2HTT5fx7DAeNS6jw63KcskZdZuBzMJQZyeRNH74Rted8C2vV4RCCh5j5zw1JCzbUFguoV12mwLhohfWYBZK4Pc",
  "key12": "493eaX2GvSCHBvvf93Je8pbZ7QiMorQqY8fgBzvg1HmmJPr5iKUuMZquxqaUhtvK3pszMkii2LzSJGGc3zZJvByy",
  "key13": "2SEoXAVfJYnwgvUQSkFyTrJWAztw7XVmhZFjDyg1gLPKjjxXAFRXo84qhMjDqz8b1xpc88LSXQHSYeKMaXkBHEvy",
  "key14": "66nwcBezj8RzMxq6FpSC9ULGTNhd2BWcL6yPo3VPBc82ptdJpzQi1WqYgQkFSMi89V4gNjWXm1R2XUAajStbcgSM",
  "key15": "2UnBWNSGJ3N6v5863WR1WbPdMKCRvgBvqW2Fysx7EV13Ug6qhAsobALr9eSomwRneZ5KfgX4CHVnuG858tMcMfE",
  "key16": "PjWGJS9x2Lbtv37H8MVDx3WKtA3ukbXBXoXRhWEjinrQKveftb3mhicGvfY5Vk6gL42HxJpM9FJQQBmSb7XyB3Z",
  "key17": "3Us8vUoWHo7K8QKsJubCwQPANE87zYKVj7E9ZM9GPqqWG89skmQ8EbxjLYXQ9n1n5j3BNVUj6hnfFLVZ8uQrKUFY",
  "key18": "5q8gchSBNDaAoNMdwuqEKmpS8vDQYjoAez8jMAKRw9mwoZhbmqhURUiNyRUmNoUx3K91wm2LgiPuMk2zS6DzSSpM",
  "key19": "39bj4DgMWT2peg1xwqk5DBi19P5vXLuRwpbdXGpKaiQS5gPvSKFEDh9NfyaXKrTpVtJ3VS3Cigb1HQs2WSuNTHNR",
  "key20": "5p5BtR3guXvt6Edz1eFALWFq35sJ42tFD5PiCNo7VmyBu4XNxR1DYQgN5Nsr9ZiuxtxWUzDDtjD9rLVynYUzUfuf",
  "key21": "wZWXWrRgFF5gsuBrpdaG9chg9mQWjtidrJf9P5y9WkudjR5PA42TTKzWBPqVBoES9TPMVNWycRFrgof3XxLBMkH",
  "key22": "4HNb7oLaNqsvEGa6TBqyqzw75PUiwqJ6QcLpbGsNQiekVame9Lwr5vDaJ76rsB4wC5dcVgN3WGtpto3wWfmiJcCi",
  "key23": "UUmkVH5jW2YBctDuMPxUo1tLhvDY6CbFSzTN6sZUdnjpqLj7UZVTYTP6xSX5NyYSHBAD138xqjVwe7xmCQjuH5E",
  "key24": "4QZsuMFLvV7HCFeyoM1xyXmZYw1hp97nu8ZBuY9HXzC4yxXeDTikhbTZ1potAyy6mDcJM1aLJ7DChHbKcmuTNa5S",
  "key25": "edkJHcA4DYRRWjs4sEkvrfEELFLdmh6confSnkrDg3EKSrmAEJW4BFf7ayyJEvG38qX6xa3cH63i5QC1WYMKbwG",
  "key26": "5AcGyBMpfy4paXQVtjPawCwjx8BtWUgQSUPku1fRSm4kx3NmW3MaFhdC5djPBa6gzDscRsaK8LMcyHkLmGAD4AoT",
  "key27": "2D45cLpggAqjPFeW9ydxUDoMhjpxr1GPhwGWKsTa36aJz5o2ireYPB5yxpqPjnT6V26nUxMQKxidHCtVXG9kkhrV",
  "key28": "2gJ31qSHguRL1y7x5qjH8trRf2xYXhdDgpktNzf2GMwT1hJ13bxrjgbmPTAjDwdGBBZddKbTe89qYCfKuS98Dnyp",
  "key29": "3rRaRLqxs8GsBgLuyvPCA8akEkP9fdEbUk8UNebNy8vadAhR9i2sayHmKKpHvQjiuDYERAKbRKYNv2ZSvP5E8zcG",
  "key30": "3brCQgAh5MpJRBb45y2PtLR278Sf1sC3eV3WgkUhG9a1cV9TKB4BEzTEJXzhzN98B2EPbdFXK8AXfT7MuFw6ryf7",
  "key31": "67mXU6SdnnyyMAm1mvqJTAmLJdzNTHuFrEtKdV2CUC8SsH7GubKmhuzrHNJJPRqksEUVQncU6ycVbXwmXYwFJej7",
  "key32": "4GYG1ptrGXF4PPyB4vHM5cFaAAR8DQmBq1Ezrogw3p73Ctp1nfZRAiY3gn5fJwuxtjduDWTEc8KQJRW63u8HPJEB",
  "key33": "4Fapysh1wV1cBsrTRVbCfpi5CtSv6uUNuvvLBsKRNpGQhCVJ1daenvbJqhiMor7GqA5HNDRkieJVzPFyB62mU4MP",
  "key34": "5cMaQKntYyCgtBu1bX9ru1emC1MfFdFYf5NzCcnUYVp9wWbDT3goUvMdruFZAC8dpD4sUfnjXRQmAfyeE71wkE7A",
  "key35": "4MGgxGagYG4r9i8Fg4qyY78QFfnby94rDG2uTU64PTNDCsaB2jfGH5buMtakhMNpL1vGgXFyzJ1JLzvJMcmroUtB",
  "key36": "4Dhbq7vMjQX6dszY1RWMSQeDTakd3qfg9PV3Nd7uZzZwtBNyKZzBXkbmwm6zqxePut8Ab4Kjfg97Ptydhj4dBcbR"
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
