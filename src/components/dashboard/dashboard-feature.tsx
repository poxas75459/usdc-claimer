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
    "2JaZ6fjuPumiEswyLc148Rw8cEQL36DUp5aXnt73QScohLP9swPg6BFUQAXjpzL659opzyexDcPV9XwjjLbE1udq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgDDx5z7WUETjXJxLkKPCB9mMpyAnwMyxMQmQcvroSdR23hNmMFyj7epfMLkd43K3YLv2VkxSZAxKd9CUEePiLE",
  "key1": "4FU48nc7DS1N2VTRi1E2iK8KqQLvMbYJQF28FY9pW4pBU1pYSuLK8z7uUkVC6z4b2AT2YWJBaJuA8qVDiAhT3Q8n",
  "key2": "36ti4YT6bSxd52T6TLQSZXiZofFh4yCLNkQNk7rbmNbMgTQW6VJGdq71wbC1imxsq5UcriBrf3k1BVr2bTieKfzk",
  "key3": "2FAaTwbjvwnPfVX59BF1hTRM6PUZzB9uLRpn6QHBs1RXWUQo2maH5ZnAtwe8J9yhBTnWcpumeJPRdrMc1vNByNXz",
  "key4": "3ACSooC6MmWiFzeEeD2ARw16h7QQzQzM8W575PGGhNJcugKYZbcKbnt1tpHuP4vgMEjwt7xVZRXKdZBSV5m46pYF",
  "key5": "5shoHKRk29DoDnD55NLSStmSh85UeSp9bPMYgQraMMxhYjeaqPeZkzVm9Dt7TwwdgVzrGihnKanjTtQMKUcg2jpw",
  "key6": "2vsqdzmmiHh36cwG3GMEQA3gQbLj9EnQSL1XVBFzxoJNNJwMhoZxQW3bupytVHyKwjoGqAwksW4fMnibpqTBL33",
  "key7": "3QAUQehsUVzBhdTDBweC4tMurnkyG2xvog52rxFTqXf7ABLhFn9eQecpNha9JqH6kRT21ieg5F9uqmfWNfLRNTEF",
  "key8": "583zF5rXqcFKph7HDXb86uh4WbYMXHLKJxxAcroU6NKvZ8GyyyGUWSD7A1LEGE8rWo1buNhsU5zeWEYdZG1aibsC",
  "key9": "3cHtt9QyqeskGHXNGgYWVQzqKhfAzksh2eYtxJ6LhPJ1hBHTeuLhnQETvDJaEL5BjvfxQ5gvKBH1Bqp9CPF7ifLZ",
  "key10": "dRca1WDhp8beL8pQsdeqGxf3Et5vFGEVZMCroBg2vufg9UKff4RkJDrgVEDESq8vzY37mbgA2uKL3pgUvoBQAtM",
  "key11": "32cL2JF2j6AF2s4w2YuXBbk5LwWPGxGiNUVZvQDrYTMrDsk1LiNtU4npLcja54xTN4exrK954GyuaFiUdDGzA5Po",
  "key12": "MqzoZyw9VSpPNwKWPuS3jHjAZg5GJuXiBThyVhDHCUHcJzHNkYKbSFTNuiCmB6WnjM2bRDYsq2L1edxzxw1kojd",
  "key13": "5qXKqy3t3XmWuYFHDNNu55MRJZNaSY69M1VKpALTR2H6vV3sdQRMFjXehR3RLJkAL11aQTiQtMF4v8xiW8cYqEAe",
  "key14": "fXtdAJcts8XmSpyMLLC9aK63fDY5HLdfcRHX9pELGyjv1mxM2xUmXgStCu8tRdHEFeYXdmCQAt2PU19SFaBXT6s",
  "key15": "LprEncEBwjpSHhBKTnyEtbKVQEuPb6gUxtzg7JZGnzVCqjSegFt9YVsJePzAinHj6J7UCucnYXmh4JY8kz8SDo6",
  "key16": "2DAXytUsYmhoEKCLKfkCzxP2UGLBEaVZWbJHPcdzKjXbzSd5YUqnkFQX4wfcxgN6JkrqUxUMPpBA8FZ66qLPLq21",
  "key17": "4AJz2FJwMbRNMvvze1VFVxCuzo5n5YYJ1PNTDJto8deit2nrUYZrt4eCNVYmC94ZZsrjqrR2aDodwU97VpC7fF55",
  "key18": "4rboJDEJ1r6PT2N8v2vhTCcjBFvGXsps8mY74NviZcsjqA3Ui5HKQSihymLFFXFE1frAP7WUJGxJbsYs5gHVMSaw",
  "key19": "3ziucuxXqUNmJumTeKBpWgtNyiyBi357y3mgYScJD3Fh7zQDyYDYRmMBKVvo9Tkn1NLweDYMbNHNKYH8Q2VZzuqC",
  "key20": "3RSNb5Jy9Sqms8aLp6pXnKQraHkCzUWvyxnFi9vasg5TSj91qGqUvJzgY5WEUKqxcy75Mzukfw7eRUHba5Jkiqjx",
  "key21": "4JmnCBb3Xe7PupWCn4c5FGN5wPzV4984mfEvWXY4cVH814P1gbWbCXEaYU6TokQoEBWvnPRpWnsQ7D13y9zfAFwt",
  "key22": "2Fxt7amP2fnjQ3zMKKRXQJ9WDVTpkGrPjpnr1SfLaVCyidrvoSvM6x8PDkES7T9vvLy1xqn595QSqz7f9vWyo7sw",
  "key23": "2QGSerswKPNhsbBmtDSeqrCFkLpP84jn69djrg1UQtA5HF1MKYx9L8nh8UG63czrhF1onRuc4NZ3R8v4KFFN99aD",
  "key24": "5twx7d3iHuM4s2PQn73odgtCgtWgtgoc2M56MJJQBW5dMCeAX5KYZVY3xs8gryhm4azoZuaXFBqPBVbbWoLtsU5L",
  "key25": "3mSzgwajBWnPpCVdTKEbMfEHAEVuuqYkWqw5mxYyQSGZ9fsNX68cEcqAP8BUcup63jMLWhdiZTDcoD9UhCeyPNkC",
  "key26": "HqXUxkw6SC7XiDs8HEP6XAyi86rmLsKB6kksC2MtwUEyj7ym2rH7Vnf2FrXxLCoVxnam6tNwYeirRUwBKYEaQ4y",
  "key27": "XKkzoMfp5HLYa46NnQPbWbHVmSLUFpkdsYVDa76dvdE5oSNGKELciUcGniGQbr5iHkkAsKrZDoa8bSD3supVWAp",
  "key28": "2TnEdTCzRDgsnJ6JTBrq1kQGCXDYBKfCPFh6RRCPmNyGZfwL85QFHa78ZrvF5hKudeGryYJernEikyVPv8RE7tkx",
  "key29": "gsVH9AVTJkfLDFh9HcbNRQkpia8BRxHWXX9C3jqJ7RRKKrukZFf8J8YZNFkikfTUhQC9BFpmpQQG78pMsQFUR6V",
  "key30": "8CzNihxgKSSbWeBdwbyCJXmqo7Ke7pcBDFfHjKoCthrWmjWxFPCteq3zS2QBbp1vZ3osS1k7MSi9HSrEu3bWPbY",
  "key31": "kyiJhVP8QD99iZxMXTafScWdDmRBGvn34Xr5gQZuG7N9zmHsxM6HeN32tZyLfci7LSvTE7XjsAp2j64aj3Wi29a",
  "key32": "3dGZZYkFbUR6X4GcPwkn3XbinrKZ3Td4ZjmoRzLhYKarjus6uaaLRgzdpw9MhR9kNJXaV2mPu9gdcaa1HuL3bivM",
  "key33": "2w8Xg7cv5XAtpi9fjFF5m6YzhrhMxdg67ZcXcpPQztdEZhduxKG16aaUFtzEck7W9nfvVtZjPGuKCKaLrPawcukv",
  "key34": "2Ajj7VwsnaRZEt4NzkaTrmANtTyibaL2LfeQjVuMQq9W4eorAGTHqMfXgPaK1GWSamddHBoPbr25oPX2PppDQAJT",
  "key35": "q7MvxPz9syMioKkZp4tGPRqJp7LYqRbB2e8moRYsxheP5577wuGQ2VwfFBEikupH5z6d3G3FmtjcwMpRcrtTNJz",
  "key36": "2L2e2m1bCtyBtp7ub3s8nKCBCq1WdBMVzsVgYhmmjxiyaTA1pcH9sc6ZYHMenARomMRpHVs4QrmSAy5HkkQ7CJSJ",
  "key37": "W8ytEoXAh5pP8CbmZ3ww2EZ3BLogF3WW6w3ZtsRegFvY1Ye38jRc19CpBpj7j2SGTaLs7Efi5K2by2eGoPoN6oj",
  "key38": "AVGZ5FAC42BWhjFF4oXGYXWtrMVoLNaaNKtYcVuppRLspWVcuWSL6fFVKAwL2NGaXAb1VbWaAu4XZksuDaMscPL",
  "key39": "4WtsKzxyzsqXaR6utNBGkkXa7r1oCMLri2h3RK9oNXgC2YLjCSmaX4XXXUJcArVcSEegNFHAAFZHrVBqC6N7WGmp",
  "key40": "3FFnexjf3wkSrtUbt3nHA8sB7kajpAETLMXftHBKXSFYF4gXbNt824fnEkSJGtdcwXd9vfhrhvL1WCJDWVvMNQCr",
  "key41": "5hkQBCtkxx82DQraYKVusBR15VMaSfUoumbNfMgknom1dXFFksmpC4AAwcBznJaNiFQmAwE3DdJF5QxcrYLRBJy1",
  "key42": "XyPLhf7QtnKpDuFe6Rqg2NduPFv7XmG5kH6tEvZL1AxLMTPDJV1GREADP9u3DtYqAtEGWVQmUdRQV6wyDh5ZhmR",
  "key43": "3Z1mLzSk4aK5L8YrE66HAiH4PBezw1zQF1DVHW8E1JajUBf1WuupaUAZ56DTs95DwJsrDwR56rcrW2FcLyYUmrjY",
  "key44": "5essEP3gj19WLXPzP6mqFNS153euuMwz3x1SF4EeTqVLz9y5A4Fw9UPUZuKqMy6C7n8Ei5rJsPJzgudppM8NNWxU"
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
