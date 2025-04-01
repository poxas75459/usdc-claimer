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
    "5nYriLE7LzqnmQfgu7eHKWKfnKJh9LTaLWkXYfzcYKQcD4CiWNHXT6WFbckcXVWXV1ee58fA4SLHUkSoUAL7uCNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9mzXxzKw1fs3kJzPHMPMz3VVqPbpohGareUkaFCYcwYENfcbds8bWALoBZ85L47cU1b5bQfmCvTTrK7gSXj39K",
  "key1": "2VGfApbUmXFLxyZGUMBmZbqsgth1r5Lv2tA4t1ZNBVi3e3pXYprdbBeZhFUna9CtZ1L3dCW5PqRGN9yH9rszgs7r",
  "key2": "3GksJba4w5EmeyPCmYPEns858RYe6T9dxfVAKbkntFP5hE71je6oXgGtX5sVJcQNLTcc9wTQQ1pMju58TRUetjNB",
  "key3": "5AGzKHSruMPHHYo5eCahWKusBdfcecNEqfHp4Rg7Bifr5F7JitApjHHrnKmmDwL4DixUSrK5yrd6jA4iD3PR9ey8",
  "key4": "4bGuMKxQpYifvSU4BQLGH7MUK3kE6w66f8j1Hskip2hADHc1h5PkrQKoCtz2vbDAH6adPoUzci3AhgMVjM3hUpHd",
  "key5": "5qTVTpn7Ezgm945boHrfscbbdVYeU3hXkCVpbNF4uDerdYcx3R9cWcwR8ZJkHLJEwevq5TSK1uHGRV2eQxcksJfe",
  "key6": "4yzgHdC3jbuo1HErkWQw1iRyeuMxTVLK3zAyi37pSb2QHL3dBwXHjTWWQ8dnXArrcFQJY4krBiNuBb6VWPYdrWQZ",
  "key7": "3qPN11cKy41PMMT9GM8vmpGh9pnFdesenX5YJf4yL58FMm1MiHU6EZHY2jPvhgzA5BCSjkT9CxSGzm7QCo3DYJTb",
  "key8": "2FAyjRYaZNRpVt2uYyFAxTzp2K5J8jm2eKyhtgGmpm8vQbvtp4uR18KjnUYjxsezbCkSrHHgY8y6mz8xJNq5GGXX",
  "key9": "4MHHvLmsZndzYF243DsynGn3z6y7iv2WbrfiNVu4URADCNyePGjccqiBX5EAnN9BLYChtziynsYPUwqiEffb6jum",
  "key10": "5PntdPXsf6TDsNDDRvHom9nsHz2xjdRyXmWPkHsac6yNpvHxAwPLMh2SB5xNkMiM9Wrd3dHyYScveDESuhT8whb1",
  "key11": "4V3rosABXorsCXAqi27FY2YZ37DX75fdApoMo8fyrT1Cn9zpjRgjfvLViGeiR6rmMa1Cy95fxrTPpT7M7cynARij",
  "key12": "4FHLdCkJsHPQVRBY7jUYhiQokLKdL6gvrfbnCZEM6Xhm6Xtwj6c89AB25QqDgPFYjU2S9bwQPND4Vjsi6RyT2Voq",
  "key13": "5RBrBUZwr4AbhWBgWxUdni8wSTNoZEHNG4D76kTVhyxRhAmd8gUTjec5mZsTfFJUvZeus6DoFjVw59hfvAwSC1mm",
  "key14": "od5QUs4srsuTvxkPb4ebZEueLtgSTYyYrdeH8VB2UTWofqNH3o5ayKZMbsQdsMtKMrjGLrAVaZEtEzs8jcXLf4C",
  "key15": "21PS3agNb322dnrxANYAZAQ2nqLLBg1ePZm6hZjidaF993SeH8ro7Maumh9n4EDjdmAZrHB5SV4c786xWWApqfwU",
  "key16": "3LKtcJarUG4jQZUEtpyxUFBE5wHFbQ5K2pZzfDQM84WX7uoGZZFkRD3etsPTWcZ48M1imxLHaALEEpaGGotGhoBu",
  "key17": "4JyarPvsCwineGgt14kgr43TptKZeUWEq71dBmFWbk55aoFaGqZaYGbtaEoKLFURjBTadAWiPUvDXLrcW7sPx64B",
  "key18": "2xgv1pZMcUV23BUFGFJcCvZotxiEa3ZMZFaozwSRTTN4ar3wBHm6xEqDJkXgJMQGxTefHRmUWCj5uJNLTbBm2LDR",
  "key19": "5MjpaVosUF1yCYuMz27o9BUXipNfy6pExWuDrsT89h17QwM3YYc3KezaJ7XzzvWSyZroVirmUVds45akvWQJhh6C",
  "key20": "5C7MsjZTsGaTzLHgwYeDrnFPi52a5zr6Yq8VPpkRxoe9swweG1Uav9FuN27zU1ACgc2CtaiMvAyARcKwmxPPy4J4",
  "key21": "2CBdxyUyS2B9X9qW1YMoJXw9RLojCdiTRHNgXQAXHoExP7FGN7gWk9THFbPZCfCKZfL2dhF3BsPExYqcno4cgaVH",
  "key22": "4QSCxi4uWMJpF5h67eLPyU8hBBfdHAqrCmPMUXS8V5H4GdFwwTMUCVqzKQyzkV2gZBrU23F6RYjuMsiKjYpVTirq",
  "key23": "2ExhbT3pP2arjAntL1B4aS3zTcL5huumJZbW7b5VsZa8vEBMPRkRMgcVwYpqELFWLvn17Rqgsk3b23LvSw3uBr69",
  "key24": "5FzxT2VE8nCbXSjNcFziJw1vZJsPjkvuwf85BXouch6jthKqG66EXY68pB9WxoixihDQW2j8Yby16it7dcpYAgZX",
  "key25": "3uhiXH34y1g89vGpo63FKFoW6dy3y82jivBypEBaKCzSiBn7BcKADaxUGRMpFhJJ9H7LR9K2C5WpExvXwVvWyvcv",
  "key26": "4j3Zvr4QHzH1eKB9x8EpV8LJTsKGpvJ1nYfSQtXaCscLCsNkxY2nCosvBQoHYZx8UQ4t97Y3szyUA3k6rPADx3hr",
  "key27": "4atWhN4Dvfexe8VqGQTadN61QnXCVRahkeyrFCNbNVyJHoruNYVpEDSXiNG4mkaYw5u3pNbiLxtLvEMzaXgSRBLJ",
  "key28": "Y51CGsy8izLKUZWbh8u5NVRgEKTUbrVBUVTaBaWiKP8sP2W9p44Qvq3NqWWyWNCth3TKUZgpfHbxXb7LXae3fro",
  "key29": "2fbT5XpGJnEbmvFy2kZrG2nWSUumztFLTmgg4EZ8q5Z7ot9PVEddrkRMnJ1bN2wEfmWbXq4v3K8J9aJn4kpLaJpw",
  "key30": "56VDxJVxzfKT7vaaZv6UwgzRY8us4KUWZcF9WCQaG5VB5a8eYCtVDXwNWTJ9JA3bBBP8Su9YVEsNKN6wNdGetz3T",
  "key31": "5ym88jGpv7JT3j3FDkssy3E7yhcrqUnAEh5ZXcAJSnZMYaHTDEuKueHWEJPiC5BcR3NpUo4vaJqR6v9iuKqZDwBG",
  "key32": "3xUYJvyvJUWtfTwkcVsJhzG1sV4FkGoND5rxqCjPyp5Q68v3uzDoLd8CX4Zcx7AsXoecCXv75BZj1impKppAdjHN"
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
