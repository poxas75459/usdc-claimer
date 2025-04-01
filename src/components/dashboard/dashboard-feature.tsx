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
    "4aoMGTC5potHmU1Lxoa58RuQ1MkTzAy5JhX1MidKS9aPSCLaCXDiDaSvP4EypVQB5wt6ubZ4JZvh8xuHEq3iz3Pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtYXNnaEws1ymMLHfvCU2CdNw392Bwq6R6gabNNHvJfiZYmKqpVaupVb7umMoD5VxEAmKudcWCP3h5qrxRtkZsd",
  "key1": "41ni25bufdYnr66po9Ydx9483a3LuDpMMyJpoYqJU1tYJ1n5BT5XjRAb9Z4mvCx9Q1Cd5NSRW4FyjVPjok5G8MR1",
  "key2": "29zoaCviqLvJ83RzrKug1y4EViBzM2ufEiaKHzq5Yrg2yoYJVE37WPyNeiqMK9Q2hrezi5jCV38yov9C6nUMzjk2",
  "key3": "34USy7X2nLorUhWfVzspyNdt9BR5a8WukfLGqRwFffVMB9MrjWZDiNjaQGoJTRWhhhqNXEUijxbbC7Y9c2s6X1N6",
  "key4": "2iWiesbXQFc6kuXjLCqdXiGu8hTjjeJEtAHhr3ViHDY2PbtK6xYdbBjr6veZhbGuhDjEyHn4EAJpy2mnGzfs35Qm",
  "key5": "bPERstcA13e1QZatnNQNouenQJqsyqLaJysV9qJo15oNgC5yYcdMdF2RMxTkcobgK5r1S7X9AWWsHGQVsZ5zXEs",
  "key6": "JCLMLerdWYgeN64s3q2ArpCCn659G1TcMnQ6BvxXtjaHEWbuNQ5ckZcAfJwUVHAvtJQmcTXLVsvYozgDrgjkKu7",
  "key7": "3ncsCpTYaipBwFgATVyPPV7txUVarsoMiS85LkfZBvRJg77x696bhLuAYJzxwTtR3qHDbzUcmUV4TEmMWCbZvoY8",
  "key8": "5o33gnYc2RzVQzATHjMmb96vLWhvrNBS64MYk9S1mxof3JxGF4Qq4mhZzaeTkfieHgokV7vDd9DBZTzitHMErE7U",
  "key9": "4Nmj4r9XYoU26ZcGuhRDUsNTRg4Ztw7YeJMzgsozM1XHYX57TxrhuK3f7PDxWoXNoM6sUematisBC1SSumWvzb31",
  "key10": "2j2Midpd7XaKJcfT4V6JeoSiJEaNtdAhJNJYhyXhXhiGvA5guvRXagWft5yAS5M3rWXWPXYnh8iW28aKFqYrxvPz",
  "key11": "2rpTdUWb86N7wuBY8AcFm7ekjhfVJE9zd8usGgY3hMNdE67yS9h3ZsRAFpGX1BsGHoJV1DaihR9opHeCHueL5TWP",
  "key12": "3pSW3oNJZkDoiu4a2wzjRgyTENdM1Egr1Eyjt3ARReQmux4ALXTQbxbCdMuwix2pCtH5S9UK1JKTK8PdakwkxrUz",
  "key13": "37cnyRFfdbtVa6oS1ip1qN7qUTSXv4p7VhE4Qz3h72Ysf4DGpNSWmqrVJkpchZS4pfwW1hwdfcLfmE8Lbn8zeZLy",
  "key14": "35oEsWjHDbVPCUvcWWrNUEJTzYP2fAJrVFqkLi6xVsMgTFBVPMxp28wF9NcsdrLDF9s9KNhFeKbkUPEy6Gk6cNwd",
  "key15": "38AjjiRRiyjUCk4zBkorayv56Zmji5WWqJCLsSmoHNp23hLhwejuTsNHL9cQpSjfe9pd13uATwqtgBDZDLiuHsbF",
  "key16": "2SUBUdzKX3j1eNZ18SfVzrjLaZoeYySqEFDu5VvfQooJAi7JQKcgRefSoRV3kaC3iCmHrtuYBCe1FRrzh9VAK8Rg",
  "key17": "3CEB87yJG14u3dubEzyzMyJuCJ8gD3aNk6uXRCuXBAZMqoaZrafXHGMkWHEJXpa2nZqzm81zZGGNYnMkunGCcbGp",
  "key18": "5Z61Ffx1RPem1G8jrxQZBeWS1b8jQQF5onw8WJuRXYFUwAjqRkePyXyhYsgbFopE2u3ySMNk2YFmdJRQw8nWFeBp",
  "key19": "3KEdChsgp7SrYNHXvPy8neqFq9EMmo2Mg4qUrxYFunH82vKFRmrEWmCcCsNjamT3YWVMgDmAHU6JUshHz4ejkGSd",
  "key20": "33Wb6sHhk2GqXRNR8vxuC9WxhMcyuQ7Mt9SyCBtf6jdqEeVFWMQUfV9AFz3pkX7mB9s2ZcqwcxmNWGnpmpzYCHry",
  "key21": "2DqkwwufwKfQynVVeWfFMZ3KyZXzrRNoqArgGsA7uS13gxWQV3inf3drMWnizqkHNizH1HzoyAirVt4gDpbehVvK",
  "key22": "5Xsgcg5e5Zmr2VJPWFhvtgPzRrGn9M3QjXL39d5rm3uVWmm38PC7yd5KAC9qP5dV3aXf8eKGGn7G7Yj4qh9MWeU5",
  "key23": "2fv1hB42n8oM8qtqU8nBqNna5MJkX7w1VijL3kscWBKm9HJceXoa6izeMeqHrep4nUu4gz31SSXTvoE1v9dmcmjL",
  "key24": "a1eq4Uv1LTCi2rgeGYbici3Ad99hrL7BEK1ur8s9Kx2BC5DywZE79y2dyp5Je7xfpUqkPAfs2dyNYfSABWKDhQW",
  "key25": "4xy5A2Mnh3WcyBPscddBWYzseWnLMFSEA4GafA2fsdQxx2ckenxrYy9tYzLscJ5t2Mt9wYnk9RKMzZQWUDPhkgux",
  "key26": "YyTDFccnGndrid9AfqbxCN9naijCrpEz5RiXc9FseBuJtrSGhwPvVYHeeQEgsErNZonFmewg1Je8xUgpoS7UiQm",
  "key27": "4rEv2v6SwcQen4PC9sUwfnLsiK8rsgGC1AmcYaToVuzi7JGx2FgFTmvMsdcMV5yCzh6rmr7bW7a39PJyFxbMfga2",
  "key28": "ruWtomoR211sk59b219SRoKiryCu5otYExo4g8qLsA7ufaXAqGb44UdctQLprrTr6TMRs1tUV847dt3xtvsZ8XV",
  "key29": "RQfNDxu6RLRBLUEan73MxbVnAyprRvASHAitR5ERLQxXAPytXzFdBXSWEjQ7zN87Fa6udPCZ7ixvHqqtz2v3z72",
  "key30": "5673jsb8nNK8EWT55mcfHRx9xsuXg79wTCCwvN4Mni2x6m37ErfGLYU5vGAJmAQtuGYxjucASzsNjH7q9Ug3A3N1",
  "key31": "44f62viBwcw2LAvADyB7EjSSGoVjFvg9NcFUyJf2Y2wgWeBsWiGbBkGdDUWZkxfhCrNUn41vGt8obVG2Xs9gx3Au",
  "key32": "5ppgQG1eTpT7VhcXxkGA8keFNin3BTtNeuGsJApLBysDwqPPYPMmnBNcYmAmZ7TNh3bzYC3aqx6wcMFaTgUdDnkm",
  "key33": "2XdbqH9dnWocibAyRncixCYnx1izCeRdWwSR4cLin78QCRTEjQ3PJZ3oJkqM7Bz1FvDkdYZa9fsKEW59iKiKeerA",
  "key34": "28vpsZ4sTvhWHzvj9ewyrvDjSpm3WhLLJwbXu7GB4rtzMbiC5rYjfZxriP7nbk8K58XNnkt5TgUWMZVa2sG2aJEf",
  "key35": "61i6VC6bUduttFeZryUo4NvRQMNuLtdiMCXHAYCVED5wmCsa5TrMCNpYcL8rz74mwnzPwanoNs6rmMkhFbtdGqPZ",
  "key36": "EwNrBw7RDgvm6n4qRrJU296XvMWTjxCPpFCAyzQVPWq8QhhLGHdA2vqaufyJFhXaPTjHM3nv5Fu3LGnQmQhvk8q",
  "key37": "4UhMAVUNNjGyCYULd8k7gF1BqWxqadVvw6Gn4kekQaHgWLcATcZ5bHtGP66KRsSsECD2mCak335Fhgmd5n8oqiuk",
  "key38": "jBwsmhSmP3yYfWgAyewecK1YBcomsdA3KpYBFssnLnGStyQQTSRbHYbvxXe39t5yPCqDgu7EdVAuz8Cb4rsEoUN",
  "key39": "4euPSQKfqPiH8egPCwM7otM1a75AxaLTv3EVrqEjxXzfPdS9WLsxGNH3Fsbafg25rTeA766ThzBnq6junJHmKckn"
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
