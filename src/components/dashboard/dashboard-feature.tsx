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
    "3mp8Z83sgBEkdLNcEy3dovAmRL37edLrdS1oH9Ut9KJQ6uwF4KionZFBPz2nwEuXNoGw1ndxjTVcP4SDseiSkUNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33xJKLaU78SUWWXQzNs1GmgXpen73WaAzwQikkPNgxbzaJkYVd69GwRQpa9cqcgA9WWp1UwoMTJpipqRVqVUzTxf",
  "key1": "3JgY7BbVwDdF2AvTaX5XkxnofRsyrmxppiDVs9FJ2XxkiQueAn9wQzLyrE1e6RrjB5Z6K7EfUGDKmhFXwRNd4ZAd",
  "key2": "4eNQYieEvEer6TTr846PN2Tochuf6eS6m2TJdYCu6RVxie7ap49DqpXn85EJSYnytBKamHsA8XnhSoB2BX916McL",
  "key3": "5dFAS4WPKmxrto5A2NPteGr9EyFWQqaH9afvXsexrmHbtTbC3teajhVSysqUGnPagdsj6c33YMyG9o8HQbJ6szZt",
  "key4": "2qAuJdYvfsEx6JHewQ6jftYa65guwVMdE6YXZdSmwDuStvifpWTqk4wXUwZgLwKo9jk4vR4v3BM3cbf4sMdvyp3U",
  "key5": "4ruy9opd1vSESBJRsn8gMksi5zkCQ59cWrav1AMzHeMii8fPwD9R743nhragw3XQqTEezEfFVZNSpe7PHiPpVEVP",
  "key6": "6wA6nuzSTNpZb72HPX6D1uC4bMkZQ2gTFUBUowA5D5gWpzgTzrGa9h3pUS3RLeiF4j3U5QkCE1M3YMurH49sUew",
  "key7": "5FtQG3QxAohywBcW4UNCyXXPqGyXtHPaDrWTUmhzeYdAtQx9meL7ic9BGAYkALsQEwzDvGB6m3u1sGWZHVmT59C5",
  "key8": "5qFbnhgD8Rz8K4DSGoRWkF9fxETkiGUEoZ7e8QrJiqY1vAic3JJGHdSXCC8bkAFXxupW8YMwqM3HyRezGbU2eumR",
  "key9": "5svqyVR1b4rnyH1zDs7ALAXL2aMtbv367trkvDFiwKw3fuUsK1cVYHUL82cnjVaQhoRcnmMj9eHnGtWLy7frCVWo",
  "key10": "4QrXgurLoaAzsqJF8ueZmbWPbAbDUw5icFgAA5uCdRtgxX79N4y64E1jpTvxmvU4Asn7sBk2Hu5vj5Qv4RF6oafb",
  "key11": "2NMeRQNwEnoYSCQ2Pe63XdHDDbh3nnoHBEZWHWeUHX8Nx6ACSPFWMJhjicdSZfHtWgmsJncE1UAeHqPnmow1zpYp",
  "key12": "4Ldfjmb52p8iAdn4sFVrzR7nNwx6PLi7mnY8Z9yNb3Lvn9uKyqrBEx1SdKHHKoydS1i21ijkSNRbsW1ZFEViwFkC",
  "key13": "3HNyuEh2HXh7rWpcUaQxgzLRENSseWYjzAymngt9DRiACnztEnv6nfLZxrDUbufJqdotRPMw5HnFJcYwXoshzyD5",
  "key14": "3GF1ViG1SEjP5ovZ8Nj2qpd2SR1qGEtUCxGHsiPbp9jYmK1zWC3pWUj3pGStE94MiBJ9QDh9ECG1MUkz5AyPMSw7",
  "key15": "4WeqwUwmnQwMiLrjY613UYwhVjMAQM2dsVDZqtq5YoQ1ypxRaZ9TDCmit1eEmvDjLkv2KHagB3id9bpZ2RDWzJkP",
  "key16": "3x4CNqhxU2zwYtLcFvL9adWm57EiWmBcpA5VdZFKcvDWpX6DqKUSLDEcBqRxUo17JdXNuRNbppHaNnzhx6nUkmWN",
  "key17": "2hHdrh8XvUwBtWAt6GKYRmyhq1PYmwMDTjrW5bzL9WTMudCv6emKU1PHMs9grXwuWQijHhn8NF9kEqd5GnDHXgub",
  "key18": "2qUSwWgKRSnE8FLLBsyk3dxTFVMovs7rUe93vqqFbjG9ahzmhXhACbordJWtUsQZ97Ppqk56XfY9vxPJXnhbj7TF",
  "key19": "4RBuDqRY6a83vjQXEkSUpuDWSWxPjB4nVBd5Xg41W1hqufiXQAgvBxUB19uP8o1r9dvXKn41Ky2FMcm1NXcFCKqB",
  "key20": "3wVRj8Qfudx22srUu98BiEXGYkheHA2X7JFjKimpUVBuakQdNa9NnsSeBzhuaWMhm1EUu7uxjCABoQAbdk4rgoUT",
  "key21": "5soDkqS7qw69g55qjzFyXW6eF5R5ceSZJiVqQcCpZZBXKxHqssBjqrmo1pnbLPL68sa4X47rakD419iPs84b3mGA",
  "key22": "3weWZ3gsdeh68eQJsqSdFwgXGjV8UwH8X9CR7or158fmRTERcPkmVQ1wmySz6AH2GzBFfzL6k7K6188vyX3UejmW",
  "key23": "2wRafWnJebq6WQkDtayV64pFFsuguwJ2PrkWnEsrKdbQA8V4eMLvDBSz3TnuADgJjZivAYA65bCBHnMLXKJnMCME",
  "key24": "2fJf6bT8Emdr5vUekyu2xfyghyMd17DTpA5uEZ1yik3aH3fgacoEaPoc8hk1Brnqb36vZDVSWRiDXhaLvo8qXAJv",
  "key25": "26uWwK1XbB3wVbFinKiNWvuQdwt2bTkmPSaPDpT3D8CSza4Ypa28CcyPrBdZGdy2VLV6SWa5j3YJi8XNFMgmeUeM",
  "key26": "HvWztfCE2HZHvjAV6zzetGcUdyHj7mJJt85D79ZeavCdmr2xvPkS32x3Fhyh8559JWqUU4bs2KZSK9XDDgthiFd",
  "key27": "2yWLAdGbacFiDgt7yKHA3qhvA9ST47spax8cJftFShudju22jqczypJ5dUmix6tetVxDGDSXrEs7GFoNWTUgtnTE",
  "key28": "5sZgDgxP723HH9NMKR4C5WcTSjqaUR1EF96wRkE2XeBYLEYCdqLCB5FuvpkG9aEnAqC1acovcokSuCNiY53aRgUa",
  "key29": "4qSAw6NY4CSSvdWKJbiyatGuDzEPzprc1KdmqYUEqeFEqMqYabNM8QWQSi2XqQKJwspyTAkJsdwzRS6ERenjp8fU",
  "key30": "3hoGFeohoFgWN7xmUqT3U8ZEcDLjoSFHe7dyJT7ABzF7BvD8BPL4mLPHMa3fagntkLJCNrZ1yvgG4nHGw5wECGk5",
  "key31": "24YPVVMiuinJ5JBQVxkeEE8n1B3ZvDckXP9p1CfyM8JfmfsJNcZkjkuMZQKv9N7WfcKVX5nBAKPHihhj1GYuUsjP",
  "key32": "2Udyk9JvL9DfLZDwGTX8G3hEPbjBBdiKvR2HNmWJ1hXEPdmpeZC2tumMmzENLFu6U4u4nA7BWVoEK1bM7Q2aJ62N",
  "key33": "21EskvtrTxn1dGApMKN1CCRp4MNvv8geTv5vqjh4JM443notnj9CGvbH5seEPrvkKd46W57ikgwwsPEBUe8RTD2C",
  "key34": "5AKu1ZnzEnHxSYecS7bpeokEsEHmU46dCkac9okaMXfLei3kBrxvDutvJAEtqbXgg3VvSWtdzEaTyVesbUN9G1jZ",
  "key35": "62ze63bYE3htNyW2wVjdHDf8DCMaZQPgT9E4mQr1hpwi9tLTsD5rYaPvoGSr9G45n1ZDuusNqS9gxVbaVCTU1xo9",
  "key36": "3XNwLQ938X4bRooZY7Gw122ZvXjWV4exsiPv74pngj9hxBn1tAHK735tjaMmvsBaJrm3YFTHYeJHicxgGymC47om",
  "key37": "3JokWHHKUrgRuQsgdk5aZsNvK5fpiEBHzU4z8bVRD47f23bjh1MkaT1r4sopxPsMYd2GBnW9CffS6C2AvFoRCGSc",
  "key38": "5ebGs5ZHUHp8iKRF8oS2G56u6ALaWsMmnAFqfjpssir5MuJG6mbWNNsLtMZ5wJAbM7nSrxYbisCAXJbxzZunetEx"
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
