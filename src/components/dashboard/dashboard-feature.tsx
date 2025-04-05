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
    "5qjT9yDvK5SjKWchMv7trbMJ6eeR9Pkr5GKDt9qgwEhkRmN5TYmGumnjNxRhZ8gu2xc7wTuUwFFv8z1oMNH2R4Hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GT9xaZXncD6hBkPbNfdBLXHLDtrzZrrF3YGUsGdA5Dzi1vuvqxZymgryjJCdLSfZo8jCUznyEzyLszUqgCeLbsJ",
  "key1": "pFW1P8VdjgXw8YXSy4XEe9FLLeoJKGpMP7aQ8dBANSk58DCnZE3DNF1Kr2nutvipRjDewXtC7eD86vubqRu497d",
  "key2": "2r55YvNcYb6MAxcg5udDK9MrVHM65NDebghzH8fXi6pKUtV1Fnrc2E6XLREFYRLKDmv1UQqjdoPp7MRFJS8aVX3R",
  "key3": "56QCdurLWj1a94YGh2xA68SWjVVTjMtyFCNr3KYWaoPGrybkECVy8UnguBTzUuSjmYKCPeaRwB5UFm8T1bymXREX",
  "key4": "44aBWSWvQ1pBFuvJSkbouiCZuLmmjiJRe3gyLsnywHjpto99Thb96qV6jsbWnN9D23ZCdpqK8RxETV1zCf3qJ54q",
  "key5": "2FzeWqk12TJxgrX9RLniSp2gUSi9H5maMttFaBZcDo8xaa92RVTnReFqHMgt4z5xjFDTJ7bQVX48LYwmLiibMKHc",
  "key6": "zPvfPyZp7H4MgnG5EGpwxm76DuJmhCeV21rxiBUBwLGNn3Lsqytnapr56B1kQGLx8FG5iyTmmAoqqM74hMQsUmy",
  "key7": "2L5AgX1jsXP7uak3hJgXN2MmwsZw7LfByYMKuYJR1354rBBDvCd6gboCxCY4t8QKsCamwqVf6fGAwRdE9USG5tJF",
  "key8": "kX6g9ARKu3QcKzYWbSpowKG7Bjig4NJATCmi5BF64XYpWbCMbPHSiBJTfeNmP6GAx5Ec9veicrR7aafr9BRXByt",
  "key9": "2C8FDhkE8B6W2L914EHkAn8TjFRUWxK8tGRFPqkoY7pEoFs45NiLzN2HvBMVwpGaRqL42yGnhfh7FjdcaNwYNCaY",
  "key10": "4GguLDvG6r7DUbjoci4gxXxpiXzRQ86Yx3SEB2CgFsNZiEC5EbncG6QuuEzF4aUBvKzRVZSCbUpe8xFcU38waXvz",
  "key11": "3hxpdGiLRvYhyF1D2vEjtu9rPHEV3uz8rYfSCA5J56kgyooTcKovLh84QDHLyw14EkSyB3u4jQgyQ5TrQN6dzSqf",
  "key12": "3oUDgg48idG6aDbuaAj1KZ3MsgkgWhNDfjz5SZjCvVfZkesC9LGZGYDcm4DCuxcdXypj2Qhxho7vD6AHoY77KF7R",
  "key13": "62yZMMgxpriXg1qfAxRHa1PxfFMwxtZZdXBcDJonMa67ryokfswBMK8efM1EV6S9XvFL4VGyWL6ri3hYbEnWPqk3",
  "key14": "66MYTpbuvBkv7ukxrjt8rtR6fZBLMTzRPprLSv9oUNiWULSN8AhpZUDFCu6tDXyXJYXLGrMth7qZ1fTTRZxHgTfo",
  "key15": "2fRwE6jV9RRmiSUH2bD3iz5vQaknZSytGsweSKH91CNwhypjoggq1vpva96H2S8635gK8FZorLMHaLUyEJxKRNVk",
  "key16": "3Wexo2uNB2pDp2nKy1GfrTYGrG6KPMbg8r2bJyWewg728B2Cp3TUo5t4yfhuEwyWXbx5HLSG9bzWbj8KyRwdMb3G",
  "key17": "58KvPBySndWUnjPy7it2oy2LemZLQAnTYmhnN7kmM8foL7pv4GmKmzvzBXvqVsCwAe73gbxgwBZmU493drCz1bV9",
  "key18": "4WhDuDHPkhCebHURd7NsJEqbsGyf9dEjh97bb1W2yaGh7c7asBZbHpR78FzBsyt7sYwcCuQreCMS3PDWQVpQEzBR",
  "key19": "mawwmtdH1W5YbgthZpiUebb3CBbn5CQ2hppQcR82VV2HkMbViwYETCNZhNsavD1bvbEoCnuvcqMNTz6iZpXPGZf",
  "key20": "2LVdcvsV94FFpBMqJsMBYGkSH5Sc78q4LHd3WGBDjFnXKpcZCUHGhqbYBq4kbDuKxksksqDTicDV1SEsLZRG77xu",
  "key21": "4j1GNNo5wPUBeNbFpAD7671zj6PPhXFwTtS2YYhbCbJhKyztB73w7AaMJE4bygGVmfNgD5oX7KTwxDnmwmbeSXbF",
  "key22": "5bfU28ExtZi94nthcwYnizm3bmGK4g7xhkjwzgBDLj7XMaiNEdBdtfGiKSqeohHfbEiXR4QiJtDf5vrkWWB1NJcw",
  "key23": "4fVTVoFw9nFy9zSHzrjysMaxFoMh8JMUg6Hz9RnjLtZ9nHkCfhN2XoFicqDKdPwgtgSE7csrNQWAW7DeW8ABbsUY",
  "key24": "qiBGL1PUgLvKCJ41ESmupGRrEBr8WLWPXZhK8BAkhCh8hK6coSEcRuFe6CzvKyLvQ5KGbiLFSxr63yqGu8xjFvD",
  "key25": "X5VupskJEepKYcAVcHgcq5aDPUy7sGA7gG5os7tDmgjtcvNiXxsAgfFFhhdvwafQ2xDfwZxuU4tULp2nAq3861k",
  "key26": "2e6d1fpExkVYAANABrM3pjkPHJm8XrsAvNu5w421ne3gBWb8YVU5psdwPTNGobrb63jx2bCbqReAnB4ieg2q3Jv9",
  "key27": "4pg8TT8Vdwrx2u8b3V3nC9sr3oFces8S6GFcbJZ3SgiRkoVVwgekvZoXzp2QbL8z368zzhTXggw4GQ333RdS6W4E",
  "key28": "2WaEz4xXE48unZG3bQcVGy7YXXNLa5CFHZi7FccNouWaCcuWTRaexpVofac5P9Gr3TiV8yu5WH6fqpVz8FQrRFLK",
  "key29": "3pKdVVgbbPixB9keCFAr9M68xTCWaPzcujkNG7qrSgZk4b2iLdXi7jxAcWdymJaZ4bjsFmd1b3NkLp25oW6V6PFt",
  "key30": "54iNEC6CuykutqqsGVhi7365hjc5HfL9X7NLYh3WfqNkXmK4Y3iwZArSvDVJet9GzYx5MnsdLXhgQirbzFzFApga",
  "key31": "3MugbB3ZDEgwSpaGVnKuZU1ZddR34zbQM8W32CVSzRnvDnnRuEmPGyfKw9Xm6GoyUt7bg7pVhMcrqWarKFPzHHK4",
  "key32": "4ZuT6afCnXEppnH5PHP6dftjFiPa4SisJEqBVXJeGcXxMiRogqr1iCGmsVnRS79XbJKazupFQ9wDW3VysuC2Jo4n"
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
