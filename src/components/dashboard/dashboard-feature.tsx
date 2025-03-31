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
    "3CfqV9En6pFo9NcKnT7LHqWtp4R32DYzPdeEnuBHJvDRiFxtvecuWUPfshmKce1nWhUCb6ByMwC3i1QWkeQJx91B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNGWDKnWRtfFnbhVGbk2F3ceghHq3ZfQAj1rarQe4XM56tdG3KTZe2nFWrcETn2vWZ5c5dtS6WQaV5BmMrHunCD",
  "key1": "3oF3fvixafwNRpB2ftDPeyYi2UVk5uEBGwkyf67jBed61YkGRkXrJMWVwAPnpUWa5QCsyB1iXFbozpEHuGhhnKkr",
  "key2": "Ep8RsvhRETJwYG6D5SWFBLiQisAydh1tLdmFtCE8CmhDquNr6ws9Aw7t3sdmtJwQdKwkcpKULBrhwVR9TkcC5uF",
  "key3": "475LzTCdniXgmfijqxSNKMcv46TJXqAh22Kzms9DABvGFpwDvJuPfWkbNnccJmTUoECVJBNTAQmSnwoFW6oErD9s",
  "key4": "2vts6DkffZYKbDeRN9GBMx2cxdNwkTMi2cE7ct3dTSv5VSe5xCpSpEwsXKrugiNoBeScv6XV9XYYGUaTPYFaGyfv",
  "key5": "DtnfuR7YsNc3sdG7WTTt1bnLb9RiuwueUhtLicEjoNo1rs4sHniwmHTncXASbWNj677V3Xos3jqF28VfuVXz79G",
  "key6": "5ZrqWH24Qqs3ZuZwc1mDGRTarsVwFCPfkGpRozpdaeimzv2Zav9yKCwUPSAgXA9QnVvahQYtycaXYi1hguzhEHUo",
  "key7": "5QbaNVohDsGR7yPiENJVsZKsYBW8NUZReR2UGNZYg3iWqAzy6VndkV7m1z6SrU2jDrnh3Y1q1fduLr8Yrogb3KXw",
  "key8": "35DVpkz3pFU2ZyATUnrA5PtCi2cKhzDWw9J99EyZbG3PR21kk2jngqVCJkW9runJUNnMeho2YkivtgnfnuAHCvrK",
  "key9": "2XJ4b3Y8GffYsZsT9MXBdgy91nAaCHBt3SoE46oE4f1s25fCaWrRJMhod5fTM3qUEfZmrVHfo18sqk9BxS14Qaa",
  "key10": "4qbN5NQzfY4GjyrGdRQCwnL4nTbs6M4VQkekJxn2P3JHNDNb3EyQJheiRStgyV2pNbVrEWmbtSWwyMmXGU9rpeiy",
  "key11": "5d5DSyKNr5tnR2U1B1iyUX3fRbo9mrECFRac1AfeZsJYwpUzGb6S6pZ74U5yNHocM1TDCDfNHJXTBnmKh55nxHrp",
  "key12": "5XZAeVkoAB9EkkYEjcb3DPemnZeYZZvuxmHXqtzQ5pkbMs46ok5wxYGncMx5opix3nefcKXv3RRtUbTH2yciNmY4",
  "key13": "4HGGoEAL44v19JgH7bscGPP6miCryn6biEUMec8iB3zRe128u8N68SArF9JH9tq7bX5d4T1K3kKjuHQAa1TtD4eb",
  "key14": "3hUaJdcxRmCpVMtjT8CPFpzWAK1Vp9h5uS2ngTGdLM4tn9aNKHShWuetdYhh8JEBogffNsNPLjsm27XhP8pdJKoc",
  "key15": "2crApDejb5XVndWLNfzD2mKWjraiK63NTAYevMUhPMguM6jpCiCfkrPnYVLBr69uMgbkCHvcMT4Ft6Q19NQ8vsgg",
  "key16": "gtyLdEKwFUzdKPq2512mnL9Zmm81BeFCdpmuYkY6NuMRWn9B8DQz5XKXAHX24CJLGv3Crg2V1C7W6bAdn4mPeQH",
  "key17": "38DckrP1a43aG4kHgPkoH9yUztpx6QaqdjB9HwhuYt6XuBK6ShiTgxjXg8QxQTBEQxUTyKThYtCpdg25DmscS5EK",
  "key18": "51SHyUSN5XEPo9xmoWkjepvrfpsYDSsTKBA6nd1VCg6JvXrEjyVxLhB78AaFc2XjBPZho7TPHGT4QhtwrXyMeroF",
  "key19": "3QU7YMMPEJAQuGYCY58Kq5XYimkfiKx91NEQLQ6eSkwVupmXHS4qCsbfJ1pjd1wCCAFDNpsgGs38HTXxZkQ41J5n",
  "key20": "4dVdiFZin3LHfGUwGR3Y3oFDJbZTSzjVvSwMVfcxoDSV6pRgrL9TRkRFrk3585p9tWN7pLZBSpvQ4dyWtQo2RUnW",
  "key21": "3o12uYdNK29MizxLMN9qwkYqufDQ83zTxE81ch1x69YqLqqjZvXyHNNFRMnpZonpPuJJbQJTGJ9Vm13ifZhD4dyH",
  "key22": "4HRRagjDjjsGXtkoufVGswgiCVfhPxpu5TPPJEykmqp8QD6pzWZ7AWpqKZFrLp6XvbJ7VfGyZzLC1kHBBsL9tXWt",
  "key23": "gNjJEuX5VJEwgQXRq5fQmduyHtoru3qbrQW5NwcRshr9uz3cHJsWHQwhcXQS6WTRs5tb3emXsgxEbaFPUJLrzov",
  "key24": "3dogCtVRYcZ4p8pMNk6jipUM8DuFrX9kuL3Eju2FPVjDGNiqs5WRqrw6zKmTSavztX4ymhYpHNfzJAB1t7JrcSee",
  "key25": "3Kcg5kc3jsMqbPvrGeyH64c76w7ofQvcWCsxEXK8aQEGDWAvvmteZzCeSRr53Nn4MUXNtvjZCoRshrA2HdBdUH9x",
  "key26": "5jt85QCJVtx1BoXaJae1D6XbAzgiKYamGtyncdn8x6b745h9e5HpqusWbizBonaPLWBZc5kbh4dAWDE1px4LvRTn",
  "key27": "4mY2rFN23YzC18mhToQPekNP9xU3Q6rg2YhZN6sexHtiunoaZvhVGewRZ6UBdXo3NWWLJM4DDK9N7DwSniyaX8Nv",
  "key28": "3Q2F82h1qJHm8EYVsrCQ1HoYVz8dzej9VTXtNhLUX7LfDRAtuyfvN9wmAN5PdUuWHuYXRVemGoDAUic6DVjzznzn",
  "key29": "3xkKGdS9cjsXMjUGskLDYvsQi5hekWoCfZnevm1gNFFLeWqd54KYDdRCoc5eGtrd5dp6fnT15zPmeKaXAgxHi5c1",
  "key30": "s3Hqu4eGdYFq5qBb8gSRgUs1hvjftiy2bhQXZnW4mi3j2zZwUuxKCwciBJa4RDRNvCQcV4Qk6AkB1BwhH2gXrha",
  "key31": "5Pybj1ZNodaCcuEZHB8ggm4NA4AosCLCXPL5AshpHKcDdA9iAoV4emkwYqYyEs6tk2qp47Dr1LRUQQCnmnTxK4t1",
  "key32": "2DvsDWmq8Y6EiRpFZprxwtSSgiZ5BXKJTcpaNkcMidi6ezemS7tuWAN9dLo6touazb2SWoLApezJrQwRr7hGgmzq",
  "key33": "tRd4Qaced8UuZUeW9FnP4KVWBf8Uh1ynf8MkNcX4aNRevhFcTxMfL6eQ164jvJBg4pgcVQjyjdhD39zsu2JfMmH"
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
