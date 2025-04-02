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
    "51dy5qJ9ASbw6SynDhSvUTtoeZdewauvdmJxTDX3k8MB1R3vdwAcdg6Mu92xpHBXxnFdbJhShEpG9ikxrzY2zXrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFi6J2Qe7YBwjAxSh4qT6HojcMgkukfdxSs3KVvi8TGQD1LX78cDQBCcY3TKTm4yeJtyWhPyTtCnqi6eQCEhHMs",
  "key1": "5ACKDHzFemmedWR8uh4BKzvHARwgxw5q78qKVjjLSPdDbahL1gzZBMLfAHXXvjhJYVtA9p4k8tU96SB9DYjA3fDv",
  "key2": "2cdP2V9AatZsW3qTQZvQRc4XhxEGTdEXdCcuutM6KfSb37bqr16PgSBnRgH3f1xDTy95if9pxAcp889qK9HZss7r",
  "key3": "Y3uN59enSnvXwzkGPy12WzQ7Vsd83B3uRnWuK22ewA2e8deo9BcXtrqN9e5eteVzJPbremnDbBsJ9GqMsVGGQJ4",
  "key4": "2NnLezvu5yWAV23v66ztxDEbKuH7e441vHfNeSYgiTWYTxAqcrT1jgqdRN8aJ77pyzZWmxTdzD9JRsiWfuvXcPKF",
  "key5": "2qjEJWCvT3pfXDA1LViVSeagk9nmBufTcLsmuhj6T2oGnsXoMRPJuocCACSzz9sxBshaf9j1csM12nuWMShDyvPm",
  "key6": "3Z11MwoFEnxHkL5FJB6K4ADp3SQMtenPkbFXgyuGzUeFV464xNv66xW4wDZGSyVeP73K5tdkZQWoHk9PkNNu6h57",
  "key7": "4Bit5yw8umNYxKeEAxu9ncsxhBuMooG6BkSdxxSNGJZzJs5UGEs1J8aD739nsrGjSabNN5cR4NqipWUbZP6V3sdu",
  "key8": "5UUaj9U5BVKdf6uq9idHwCE7E1rGp12dNaLt2GQccwna55hDk1D9KKRMsfza2BGx2wP7RPXLM9GnQHSxhDQG2k7q",
  "key9": "5cFNobAChL9fiRg22Rjquq4SUfCrP3XivfK6GMNzbLzGt2UQxhqS1WMwuUjrL1YLit2pzKHijbfVi1FT6nCUqKPW",
  "key10": "2NE6cANAExMFGvNwnr5PaMeQFYJqqhsjcAFdJSEW2WoPQMqmAK98vREk3pvhPRXX9sgbAeCc9yms4FxxanmQjP5R",
  "key11": "wnbDGrV1e43ULfVcKhDY6b6WZbRXEaNFaLiCJcJZd4k131fxRmCMQc5nuYu8ydU2ZMzCT497JmwXPjKS9vnBE8C",
  "key12": "3CF2KJNouMkkoaJ1isukTMzdvVGBLpqq28oFW3E8p1sNurwmBMTPnbVCMNR21RSTV5fXtTUZpbWuawckFt6qVy2f",
  "key13": "3AEWsse5GkRhAMpzft6Yrvw2G2a2chtjUFH9ZoPx825ZpshY7sHGmQ3m9Req1J2GNmEMVGrUiNJe3E4XkTQAeKJ2",
  "key14": "45vG1R5PpSHDQs7NepCjiJsLrBZRETw4PCTV4fdwKXErGmfuWSidqYNrcEiuuK9sDD9pQX25zQcYZfb9vAMcspNu",
  "key15": "2frmgV1YSpvnQrkpn832cHabCBRviHpAbnvBsiMkgJ3SKuTXY8DFHBM5eJFQrYewSDfF24wt2c3LY2p4nniA49MV",
  "key16": "5s28f9MUVUVyzrpTs21MkX3E8pAg1GtMnagMwyYRgDcNMc5ZoYy5U3cPY4CZPkwLguh82X3jiRhC9QrNkWWHxDGg",
  "key17": "XFwbEsesXTjGJ6KYhQg3WiuizUX5Bm7Td7QxfenFSdAxc2ymEzfqnvuRaCh8m1reCVPbUB7GeSaAXzZq9Qeg6hD",
  "key18": "3dNFv3hQpcLTvqT7LHjyFoCGd1LqChXN9xXZhT9VMpVhidUgkytuoTkcYLc2hJTk2Qx2odmRgcRe23YEFPMj4YKA",
  "key19": "2L361NtpD5tzJv61YFasFUVodB8TepytSYjThY6VpeJUP3sErhRmNvusvAWB4QCSoZEobamz689GVf1qz7BZtTG3",
  "key20": "3Cw7MEpfXCJGHaP3T1WCkcFrn4EiM5KQMxpryFrpwwjmNTXRWNcvG1q2T1MMvZAcUUdmjmt2THsTtDykZ4Fitgh9",
  "key21": "5k6fuPLir6gWyfJmX1DGqFNtf3oTLvy51gp7C9nzsZF2d42BkK12nnvaxhwNMEYtpXUYR3BCXeqFZB42tjvyH4d8",
  "key22": "2zCUwexmdBFtvDiYuJCekqeZkfWoeqgutdMmtQrJkQr4StEgfdDnp4gD17G9J9ztRebbVWLp3BzVbC2SeVnCVLRG",
  "key23": "4jrUhh7SRH9B8vtSzTkMNWhC9ETf1hzAY5Jv5Din71tFnC1sMBsrF149pSXq85YioCAY6J7VrExAcFyFBhVjCrhn",
  "key24": "3yEaQSQN8gNXzfzczaeVTRa7Q2uYZDFrk2vrPPneak6V72h5mFwXdkaW1r2Yty8U59dYAJ9LrBs4nMdFRsWuexqP",
  "key25": "65cVU6xtoaByfXmBeGQZhFpVPbF58rMj3PKKC3Mfo5Wk5HrsFVFsFVwen4g4Js3Qo267arRZjV85TTZ3e5PJxK4E",
  "key26": "3JfrQyiEnSTUvfXXLJE6sWWhCkWM7RghmLsStRru1FRu3tN1Q7HESPaF5rZqFchymQ656cyXeD9GpQDzhMgDwjME",
  "key27": "23qiyHV4KP2YThftoAyWjAZwSs1pAAHjGa63afxfqoYuAVuqNUKagajGYszbjoQ21xUoMWE8a9NSp55RT1UCQUfm",
  "key28": "5wsa5eaXLeHUnh6szro81gyPvTx3tNEBXJqyG2vw8BXzKSkM4UBN6xmoiY6hQMb9iHX6SvkUMTytqWdziGC3pbqj",
  "key29": "5vZKea8EtrNGuHZNnhtp4pN2rLHGtuyv8GjqUZQQ8JbtLRJYYoP7Kdqu2HLFp2URXgNuNyS56hw7Pb4XRvmnSmx",
  "key30": "36XpoKe2VRE39FaKFTPcJFo8WQdHz55VCmWDwEZKggMrkYpmgai5rPp4m9MNrWYNKQjL26sZh6azGpREdexe12nz",
  "key31": "3JsttWHLAkzCL2HVKm6Vye26R8p5Kz4uWpFFohRhRJfgqinWN1ugpbfSKPH3nGYQLPYbPFVzxq379mDfos8rqHww",
  "key32": "uXe7itLjY31jennbgu3h83HhyzML4f7g7RxiNCD73oyHTQxvDWLNZkxJyrBVNbNE6RrxMm8WLVzFWKUv42B8diZ",
  "key33": "JUz8PLLZyyGfpr1W1rHH9L8krLsuhEBrtgWgr5KVeLYFSc4Rd5uLQXnpHgWqQ75uY1cvc4RysdRDR6P4eLdC1aT",
  "key34": "4JtLi7nKNVe2UVMp891QWDVct9CZbMdbTe4xfuM7D6EY4Mo8ikNYYbtUNvAfTKQUNvgtWqiWHkkgW6uFzVPJhmoL",
  "key35": "63Lz4pWmTwachsbUuWom3avYkcJcKqkp7wRiPdgubin7gtCwGhT9Qdd1URMT7TXYWCVpwQSQKvo8WvzMVcgocnwW",
  "key36": "3in93eW3iUVqpUJH6wzNUReTnnAitUhrq5yf7wzAwLrkoxnKpX5AE8HdSVwW9fGSdBNCV96wDK43cNdhC2gh4BMS",
  "key37": "2Han9RZdAWT2toZ9T2Xwfuaf6v4sVCL6KMenVCcJxnGkdeFGexwbGCLP5ryv7tTwT4nCxtVcmgot59VqYtkfVwxo",
  "key38": "3W99FvNpuEgp8JvqCQerFi7UhQEAhAiPD5RvzEUwiUGUCnkQQDQyLzJjGw759S3FnXiRkZdMUbYDYivcw838xXW2",
  "key39": "HjjXVfMH35fvPkazPj8SWfUZ3fU19YrgGpp7ZEo8b5pKfgZ7a73QXkYxNFoLG4tAfLqvjXin8LhRWA8TkWYTbHh",
  "key40": "5DjhP7FcHFcnprMYLmSfd3bc4JuUUqNTy8Zd2BZvZdFg8QZyBtyvQ5Ta2vQgt1TS913zmnr8A5y9Y5AhfczeMPUj",
  "key41": "adB6R25FM71mS5kw3wYYHy1Ca6rDQaEvQXxzCSCzGECRqEop46V1cRBWsbN4T3PGdBXL28jWxrRRQjZQSdA3K6E",
  "key42": "4QpewGTB4dxUNgXcgPVwP3tNpXrFAGLjGcgVAeeC77MvKWUjoCo1cRiuYUJFW7Qcmd9PnGMQNR7a7aEHj1r5QuuU",
  "key43": "5dfReZZw4HBbpGXgY9ARELCfnTojaZxDnLyM6dnwF5SthXLL2xoAmw7rF738GbBzQx8G1qtKswhw5p1srUwGMQGF",
  "key44": "s2Qi8ECt88nKXkTgW8bt9tkExp98mdvUQED2BRMoJAs2yysbsjCMHh62Mk1B6jgeADkTAw2e7xhAxdk7pwehpSh",
  "key45": "VopreDZApgMUqxnDdvvrGuK1kS2kMPhKzJ5Cmx2HTsGxSmXuNkspofjd7kHwv1vuR2ZmJqTsgAN8B4kmzRZ8A9y",
  "key46": "56fZ4rBHid2URnCYDSfLeZesBq5JhNANYQHVJWzobjxEaWF7kTYjAHVs15DS4PnYE3usLLKAgwJPFxURwo9KWZQQ",
  "key47": "2DUUoos9KZ1Dm7LEBYnRCJQsLXTWrJmBGFiixKXi9CviBbpu1oAyqjvSCr7XpytivZySrbmitkjyLNSC4CwvA7L6",
  "key48": "5HaG4rt8MVKqfMzMYR1ZoRBBpDvVTWwSYTBWZgBzNqdH79dbCqZt7vZCXHpKsaXmFPD4hPPQhsrHVMMQ8CZvXjmw"
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
