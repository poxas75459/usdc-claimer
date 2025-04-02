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
    "42jbRYw4dngTWqXAMahDSBhqG3iprpj5RrtqryXRXgysnZMuTiBJArzbuv6ybdE822VUrJwXbCdjXMPx76V9qNjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXPMRfrtsjdB3PBUumXpXMi2sRnkcQTzHmookQrhSwDno6dC1NcNR47Y57EV3tr8uV9V1TM66NDgunUEuGJ8aD6",
  "key1": "hQvDtWYWKWywrRjFtg3Z7bgmjjsuhYCYB7qqKQ9G8Nd63mvU8YnjpZnNa5P9A4diBPpzim1JwvuwEYsSMNqp26a",
  "key2": "2pQhow2weTYa1rtS1qYGstJzyQEdxVEgnsMDkhPTawbyLTvQ5FsBsbEfYgTcVCxmrkNzXNnYEhzhGoWZgBFE8YuE",
  "key3": "3UbpfwtuzUhjHwsV2Z1e9vX1XJiMBANp3NheYSNSTQ7DmB23ACf3WxdbdLgCDvQDuUzgZzH6tqWw6vAs35mVi1tf",
  "key4": "6ePxq59kze9xKPRR4oJStxe9MA5dMf4kaJS3oMyEFUSSNvn8sP7MHYQNvEEeXhr4mJZniBx6pacZpMgjPpEhoqU",
  "key5": "yieSgQyAxV4F9gCB3LSXRJiDc9Rsb5BtGXKFLcqLdvmY7sygS7v8u55rJkcmFuPLTooeErkah5Vi3dVSrdYQvfY",
  "key6": "3aZxXhaAds8Fj1GisgZfiTZdz6X1rc5yeSXyULvCk7GW9Q87jjmSTMW1LbePwXzS3gFs7Apf2D1mUjPPgABE8gDZ",
  "key7": "2qHtcLxr5BhwZtA53vwqdNompnJuUBFwVAbpXMgiT991n2sLSadzXax4xuxPZc56cDbRm7bqCe7bN6drVHdxqnzb",
  "key8": "2yX6RGTbpQZpamBgGc7JD3fKirjdPfnjoLx5PEQrxNC7dtFzGWfs9utpY6oDSgUpxeU3sqQeos8tuSFnr4CFVMUB",
  "key9": "VuNtXqznaZCGaFatTsGypF47uV6LvVaHbVGo9vPH1j7idppM5bZWuHmf4DkAZ2JQ25oexgwc4ksJeTSjqFEmvaB",
  "key10": "3HXiFeEfyGFMjHoTe7rNcx7veAduMw6apLHQmNKmVtZkaw6x6iWRXbrRchPwAC3x1CQuqVCaHNmXKd8DMxAVx3Yx",
  "key11": "2cL4AUrXqibd2tspHd5Vr6V7hB26jTRy3mHAWimmQBacAHz4ywiC49a2BSFoDFQerz9Xt5iMkhbFbFjTYK8RFraH",
  "key12": "JdR7nYEaFB4BcKE8cp9NUsTNHbnpPu7htJEcH2pya9npUQVGpTYeHaFZpJzotjReAqBVjdZdCekEWVC1A3bmkJn",
  "key13": "2io3GCkfTZEGtz6rJx7KuiEXDWdztPpGjkdGoNX7hUP31HCusAyeVJXotMz3zAoJFtufJUvkpnM8VPQkiHRkMrtD",
  "key14": "Ba3ujdqxdN5rN1S7BrRULhTHSCYKH6uBHjg86asNZwgj5R7tDXG7kC4GkRbXxBFykbSoezEeeaEPyJYeTXB4HwH",
  "key15": "64VJKXZ9R4cZwfeYo2s7j6AftrVgmAGGQJGYZiKFdj79w5zKAdvSH2H5kC8CNmaMybvuGwEBPxXRmRE7mjK4vrZy",
  "key16": "HzL2PcxmiucGiSGpcJxmz94PqDWdP8HGAsrDVf2MbWDfQ2LAJewvtneVNx3cvoMSMkFbhXiNqsKHMACzc4b17By",
  "key17": "48veg5myaRzqjmjjdwWcS4VthLDpBU4PiskqzKiqanMZSKy7ruJPLLCe1KzfufrdJKFsMk8RDBoKryFdVvusvcWz",
  "key18": "3yxNR9penmBYKMEA6diCV3k8j3h1zs8w4QCmG928cwVNE4tsSphtxAWgFa59sRMFQDGV3PkgmRDKrU4Z9qs8j4Cm",
  "key19": "4AQtwBHkh1vXAM9rxENZEEXZfvBWiN8npL2FscmiowDrUvyhbAZHrv2M3kie6r9WhJPCAEyNyhnkzwuuvC3WY2cb",
  "key20": "5fYzhzm67tKicfBxnQzURP9gmqkAtmnEoq79DYk4S7DKxFQ2VGX3x27wQ5BnDbqeLoRRjCLXPzhidoC7crcsUuCL",
  "key21": "3Tn4ZDKmCYCMkf487aoUjtG2ifHcHRfYsonZEUhpukYTdYAJ4rMP1aF722k1ZYawqERXEHRT8pXERdyTKRj8HZ2S",
  "key22": "5ht76eTYVcsdUrQQ4xGM9fXVwKc3hknEcayKi8HgcE9vqyQktQqvzHiWx2t62J5X5aPiMwCNCNA51E9tFec3r7r1",
  "key23": "88oZ4djTwq7mUrVQnLJjcu7ivHR2pv5EG571p8bm7rvVX5SzShRjpTCZRpuWLVHRbAQ3JmCNPxAjydyqqB29MjQ",
  "key24": "5heyqaz2G7Ygv4EMmZVMbpL2zkpcPbBT7BofpDy9tVUPimKttCKwVHkrrMPWddyJ3PuWURfquiwNrhrNDaGdfet2",
  "key25": "4PcK8TcEtMbdtS2tdmjKjRugTgyAsvYK3c2Y14e3ee6DT2gn7izNGWRR3f5fMuAHDhoLsNHPjVxVoexA9krpUHxt",
  "key26": "2f3FDbvQq898CEuovghGMGKQ8iuuiUVpbkYjqtZTHuU42n6QusBEjxdAAFGEVxBkZXMjyphaGFvQgaXb7qdELwcc",
  "key27": "3h93fZXXrSvCdSPWTJg5pnBYshFbg6ebHSVCzt2GEwykVKX5Ys44Hd6HEV5hmhjEikXnjsCvb4rQa9rH9GDbh4TM",
  "key28": "4CV1bWTyUctYDBiqDEPNo9cNiRcupewQR3tARNMZnVPVU3HfJerTz9ifuJtzK4Szykyg4LgScMHdiffPs8ADSwA7",
  "key29": "4ooZSwqyJqCCmoJooWnUe7zxAJK3A9sDw3oHNz4gX2CWbRjPac9eR4Ju52UqfsxH8R8Zhde1fF3VP3bmNqsb8BAP",
  "key30": "5utCPnm9c8GeFVLL5Q5XcYNzXNqJMcZZmAQPjhH18HdqSfuD6DChyX3TMqsfHi2VzLMXHP1iS9gMtrAG5EwbTQrE",
  "key31": "3z72c5ZT9DSZ275185KHkV3feTZztUCm4xigi9QB6P8nmoFzNy1SwVDYp4hhQGnqoGt9qo6GkJfcan4PNDGW3xrA",
  "key32": "W19tCGxAZMtLqMJzJGrNDEWvcRr4x6ZMn5dbdeh9rQisrPmSGWiLfCDWnfZzp28QPokJz5gAi217v4KtvMLGTnk",
  "key33": "4aUzMiNPyQXe92yeQ6EWtSFUrSFvVnmmQdgKTzCVbgwkmggbYtk54UkQQdHvQpgXNvgtnetUynJSSXu96rB9GcMA",
  "key34": "4f6SQnQESTAkGB2Q66FAqt1ouZPRcGoZsi6JGQKvjq9uKJeyfutWKASJXwiH7P1KGvKi1PXHZtx2c1fPz3KMR8ig",
  "key35": "4tLtx7in3RMiHvHHHSBmzydguXq4NsY6t24uPSXoxkdwEULpxB3fNPGDmdgcNUEUNBswo7Efb5gTJRQJ437ky2wm",
  "key36": "5RQzMKrqtaVVp9tFafvcy7nF8Z3oxdh6fMfBupj1VFP9bpSCy72AnXpmf19XLaqz8Q5TvD6yvquwPb2Wea7SiCoE",
  "key37": "2HhKQJoStfngwsP6LxBdYqDnqEGZrP5Dv7Hs3Yz9snngfoQki485nZjDcPFDe4HQWaRFtASReUnhePLFoKQHPe3E",
  "key38": "4RTLkXA3tfEYoQKtsmTMDpFdfN8jR1KbB19NWLoe5XborhZ7wzDBEkJ6v9GivWBfQgFPfk349P1f71wtuW45ZuMu",
  "key39": "4dv7MXwyEwRBYbweaajnZJGt2KiBk7AeZ2J4tggdVqEngwLPYo3hJpmKPGZPtUdEqLUbomfa66XZaJtg5k4NptNV",
  "key40": "2EBHBrbg8gLLqGZEjPKpajDBwj8a1s4R6KaLNS4nVcBBqAtM9z9C5Kc4X1JE4drdDdFQWteLmNinXPtxWfy5aqn4",
  "key41": "3JYRzvxkCGPRGmcT3mVtP2fv3nNKjwQ26orMcjZwLpKgF2uiWXWSoGzgJhCEWEr1qSPSPU41zKDwMyuTmbAeJfyP",
  "key42": "2EhUBc8TTDUa4aGua5AwNbirWtRjC1u6S6vyMdqjrz2dS1PAY8nhwgN8dPvSMpa7nLrkLWXgcfhZZ5Piwhi98VW7",
  "key43": "3ZTERz3yFFVKY6wkpKX4hSiAgDEehEMQwTSpxp7xPUV3Afwo3J1hAsFEJTSJnrjL4UqX1gscpnZD72W3aYHXHdQ4",
  "key44": "DztQRPupKfmNzgvwHGvTWBybZmqDgrFLfFPjEvn6iUBKiMbi2z5d7MxxBrr1hUWGGjN5b7JUEM3qneACQwtaP5i",
  "key45": "4NAn5chaKGEnm2fqYWcvW7wL73pX8CgWekUo7avH2yE35R5zDXk4GWvD2MWmMAtd6fvDF2hZH3wxHpNciFb7Js8F",
  "key46": "5S48qyHYEqeD6gm7YzHizdABwweE4f1Cu79hrmhQ4RzioeN3fxL8AQu8eM1uiuQsXuwoEt15o4DjhTqryHfG9RVq",
  "key47": "4bbymmGfp2axsBuqvVhvdpZjYjkTbAG27DuKuULgkp7xjQ6WCAgRin4o95hw8LvgcGrhpyaQFgs2Fcvn6pH5Kmk5"
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
