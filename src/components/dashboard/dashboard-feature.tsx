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
    "bw7xU2UCokxUa4RbhXomAXXiRLnFDqxfJwnc7sbR33D5TWsC49DaRSGG3q1wnZvyDSBDzFbyJABEWKmY4CmHT2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9cH1SjcGdnwNhgtbRDHAxhgx4imPT4gaVBg4yctkrZTiJvAW2DvMuYwkJz6kszUipTkbrV7ptXA1GvWT3Yp71Ek",
  "key1": "5Pb6NvJbjvkXMsU8kwTrsV96dmN1bmkhoWwZJd9AMwfnZZkax27jueRQ9gMNJ45nzx2UaU4eRMh8aYsFyB1NXZgA",
  "key2": "5sL6rcqkPeRAD8VqJtwgynqqcoK5NxXG96qtTmS9YCkLcJNcVeaYZpc2XjeTyX1BPdK3Kduh2LHhNasoPtHuij5K",
  "key3": "1DXDrrp3WcAX19hgWSnfcxbsN73AanwzgwpVtkhFD3Uhy6ZQD6Wpuk3iV197QHs2HgcGUuhFTBsaLJfKtzmZZ6m",
  "key4": "373i9hS2eBMPhzBATxja9DRVo86njda9X2gAiSezmo93paAJnUtSo2sBeW4HgWMkeu6oRLQTkgkcwm75RfjrpY1g",
  "key5": "3S4RMTXUqBpqWJGRfHsvGgwmQHQWjiDZuTFsZyqQ6kdNFi5CdbP1WggNwAsdGptGfFkduFaQf7wC5bLyb5SHTuQR",
  "key6": "2iNjKPeVEFUHnRqFX4DDhaXpbjTQmgnnCZYiNYGsLiPM9hxrzRk4g5AuqQuDxbqZuVgsH9MTUncoc2kcPQ27ZwLa",
  "key7": "2iZKW7FuYG4nNebyUWRxSMWEXAEkpQobM4oCqFyTwDuGhEVdPQ3X4JyAZDkgR81sK2HnTMKt9YLoR37HZoihS4gv",
  "key8": "49RiH4XKCvRBJsDwYZ9gkcExgXDhEoHE134e9HMYPqYef3SoN9qHUaXoJzPwQavd44DbWMEY3M9r1n8ubbuXDsfU",
  "key9": "2Yu95jwzDAtRJJ4KzjgiyVKQL7ySgzEX1cEuQXKk9dCBqXonZyoXpV8jQxoWHgxShc2J491oF1hCTUbqBPaRMWd",
  "key10": "4N14kA9GD66rcEouWtWWehBFcfRvG5SveaEcCC6quiMit2d8z8AcScid11V7sw8Lm6MEZTgvnjeH9h6kxMA3FaMw",
  "key11": "4Jv8VQjoKyUiTsWWAy5R6hjXVMD1YWBSiUpHE73n63iWJh3g9uqyV1WaufLDx6KMVtoERKZQzjCwjjG3kWG5era4",
  "key12": "JkMqi7tDfGHx9bZ7E14jucpBVYgt4ViJPmhnu3jBp8ns4Jy69jm1V156mbzeZvCqhxarX5P9oT4SPfd8CDMoFab",
  "key13": "43fLHwpgagDFnovXHU187ZddPmZ5ZMsgZACjLA6YEY2sbht72Xu7M1gHJrsoJRpjbkzUrLDvL6THUiRUKSeqgHxs",
  "key14": "4MyEe5AQmJkjHQYkiy7EFz5rdBGm19Tz4twdWaf3PyfxEMjBCpRAdC8fbX8Rx9joVUXL4fex86jZ29w6mRQmuwF2",
  "key15": "3zq2dpVmGFX7a3XzyeCPt2sxREwXk4YsuLeqzPr3mmhwtDeiwTWWxhPqHoizFLfSfrkFJeAmiEQXfJQACQxd7oAg",
  "key16": "5hJ22thBL2n7N1raf6gynvrz4Wbp2ZfTj1zefSNQEGhP1ZfDvmbeMacTDndYAF92w8ghGuFFDty63tSuvmhBRhHz",
  "key17": "3yypG5KRVbWgVKD9BYgPwyJgY9qKvsJ6iWDAj46FtQ3hQvqTHQPaarEGDHGPjMXMR1a64Mo2b2v6ZMEnxyMi4qhL",
  "key18": "3fFUvyYF84wMfewWjshM5dPKhLdZY9tg8sRGj53jcBfATAr2ZtRAShRjLgxSwBWp8bZt2kj32EiqwAb999j6EmGR",
  "key19": "26VeTGa7ipnsMQm3hd3j3QipwAmCeoaYnSze9o5mby3nMEJQfGTRwF6ge93qBFQCshQjD8rRwwNJcnDu6LCzubvv",
  "key20": "3FQqyeKkYUndTfUXpkCsmu4XKobEbnK8pnqQJN4yWSvAipmeJBEw4Vj91LkrbSnt9px1QenmArYvw3Hrpsz6Tavs",
  "key21": "4Xc2kfS4QVmy744cx7NoDhRK2tdy9tfriMFJFMHHFVxHapFcFxp7fiUAHuqvpzJnxuTKgAu2xGtbjrstnsXD7Cso",
  "key22": "2XgrQZMmVWKaiUEKK27QvxXAjfkFcjLWThJdEei1QSMzLETtR7mwH9JSDHAv9NA7J11J3RRs6sDE7fuFdN1W1v5E",
  "key23": "3ocsWnwy7LzHQuhJyodCz4vbGJgdgVXSXNbuWsHKEtFgzriA5Md3bvJeTxzD1sQqyv7edK5fDPkQsHdGjvFQuNHR",
  "key24": "2QBCHKXEQ5VXsPVcrdJWP9vnSdG5kxJTZeG2uHTB1HPst4uvkKG6iY6m7YfiboDTUhaswdUc871VwZnx6eoGXpN",
  "key25": "2swomSCKqBTPYJ62g6oZvEA8ZcVRbZk35SSxcXoecZMAp3EZYSjpCVHhPfypMuaBFzzGZpCjdanTYVN8KZSTD4wr",
  "key26": "2WZGiHE1j1G2L2BJ1jRfKEkctooXRRNMgF7Yo7ZoxfkvhffHKTpYiHqMhsWFJUTn6SEE9fv488zvuKDZ4aTStAud",
  "key27": "3DcQFdsSErANRcTa2Bt2BbShXeJmpdnBX9cRaCpNn8JkNpouwMu9bhtw2ADMcUHS3gZZSUiPWYofPxTUr2QGDtk7",
  "key28": "4fM9XpFrp65XzQrCveEnp7FgWNM2tMHHkbF7wJ6sFsiYVoD1yAFYsEnUh3bBcL4NkJ3F5sZNnyViM2unPt9ja5pq",
  "key29": "3mFJGKdrZwYR3GTCab82CsvZ38noeAMrhqiw3yzcqXb6qmgu9GprV3SHndxTooqy3sf6FLBay9MVYY6BpkavtwRr",
  "key30": "5KXTjkQipYAV1h8W6SZCtXGg7eB7GKRuFAtW495EoH7aBswZgjmMq7snd9dhys7rjHtK3PQsx5rb3Qfw3NwWy4DP",
  "key31": "3dCw9DqRS2zjZvwjU4Mbuy5Cmp2xKeLzVE6HDnQMW6fL2MLESQdcYHmmUKhZ4E3umz9D8p6R8653Mz5ShSze4FRR",
  "key32": "3Es9rdJz6T147iQQhRZP1JVmRN4crYkCL6T6xHTXSHFgs5xsEM2CH4eC29isyZr4sJfi1M8jc8n4D535sSH3thug",
  "key33": "3Ch6JvAREAMwN9aKC3RHQiJxjunaSRHTmjgESirVVT2CqUuY11Tjaupic9KaVHANqxMW4NhwUPYxENkKeMA9Euaf",
  "key34": "249X7KdV18ZB28VMxDiqVaTF9qvanw5gUGDmh4TotY8b3Nah1Lv2uXAJ9S8sh5gVvA47JkdsZXLvrC6VsHZ38KGP",
  "key35": "pEfM5kn7CwbjJBA7DQDGpF1paoJ5kvDfRUv6bKiDMMP4w7Xuw4riv4FiLKcrCK5MujSisj1nU4LDYf5TydV5XG6",
  "key36": "5bGjkSVtfYTmGrsRN52EdViTtbwnGEkDQKGNqtfg3CmdU1vjGsQ13oHYbR9QbL2anPp6kb3LD6UKCRgZ3zbm1SfS",
  "key37": "59ghnBfJnfRptpcx7rFaAK4qkH3DJeMYHPK7ifeQAz2qp5gkhfidubozQwoFYuRZS8nSvSRPzf7Y3QDiD2dLMtfA",
  "key38": "5zTfCbE844D8PDgY6ST1aA3DkJ6qydG7SRar3QS9fiaJ3wpmbrMpnp81ahmNvmmunkanWcDzU4DxSGELQ7RxN2BD",
  "key39": "5iTj9NBGUJwZqwwDsGvDntyqdQ2hGTdVV1Q8enD6DDzWkJKbPuT5UaCT8uPryAH2UkHsyTonkLuEYzbrH2A9YWv4",
  "key40": "4mrgqqYS1Y3QYA53TP8LTzXtAHp4WchxuqcDiDVppKNyz2arU9ED54oH9BuzQUpBFbVxQDDgySRFimERLPzWhwKP",
  "key41": "5VX5TZMkywSS8NBsX5GfS6Xr7bMQVriTkJr2Hz942TTmcEUW8GRp7bfwSjisM6vJvEpt2QEqbfjCqJB9Nvq6wzKz",
  "key42": "67n2VQ3QUWBa6DR9Ex7uB8VBM4p75FJqbwJNvhWdP3LU2vYqEa3PyE46Ts5L7bVqKiA9NdQURD5f3FSBAv6aKcVZ",
  "key43": "2eNwifoWGSYJnEQFtxt88d5zTeqr5NU4TV5PrAyABe7b4mHvwByF4HV33DUfQQVKz89TXSHqTHgt5FwgAatWYMbH",
  "key44": "5w5RwCvm4fLy9FNrnk8YWSmCDo8GRhtvB7eqbisX3AG2CvDW1dYVbucYdRa3N2wFPXNHBvXC354Kc2gWVvB5nkYt",
  "key45": "5NSMspY65Kiy3EwspUnBDDMLLa7E8TnWfz4cj11VGuofQtkeYUHC4WSieo6ZDDo2Q85UQCKkxdPxXdhvT4V14wgv",
  "key46": "3ujwmu7SNMSqynB9uMTYtWdjK8ufTJ7dsr7j3MBvPL4iZAE4xxqgaUwTbSXNvk6orV5HzXQWtHCkTsKMXKe9ZZTy",
  "key47": "4fyLwm5BWajKuJeFYrRADcsZi6XZFu8x9BoPVeup78ELmWBZsyCmEB4Y8RpazKYu8ivXAPWYvAWzpmsZWy4UtUPH",
  "key48": "4A6FcndMiZpcbnS5yAqYzGLqLaJwQEdsN8qEDa5whH8FnQWu95ww7DN2YPRFaoek5xBfDeTMeygW7zaoFDJLp6iV"
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
