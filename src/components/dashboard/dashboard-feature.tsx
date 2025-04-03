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
    "5VbYyxL3QpdzDJcV8ba1L5ekg8E762AkQiU2LchSHHw1A97iNP5i5eDZHfzvTqKd3nnqECi2aU6aaGdPDUySy8c2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hciCtce8QWNsQpzbmyyfyxDMPmwvgUZwnhbzSbA3PNgwmSnYFH8xaw4D2WYc8JZdQAxvgScuJ9S8x61cJXYf6fS",
  "key1": "Zbj8PomoYcs4PXQEyHRJJzQ9eVZBqrZc5SRcKSC4gUJeMPBrsg4W4CGozVVnq9SCuwUKBKsWHgq3SaPk3Y3b7xx",
  "key2": "kNQZ3KXTTUmEn47smh8NLiSJuZhAdzmH8dQd2NY2GAYJAP5xXSSDrbrN52XQXKswCE7pPY4bUGw432ndQ1MKCTm",
  "key3": "33EiSnC8JHV3hRCccDMcfaMDL2gGTvSvTYSwZMUyTRELrLynkFzs5xVKRZ1ejFdsoingdLJK7qgZxYRQSu1KvDzm",
  "key4": "3ikUxDbajkWkVyvxU6W2VxzDJn8Tt8Z56EsvopZ4EKWQfaDHHiKnnPDY78Sx3PDtRfCcAYinnzkPHLBDy2X48hWg",
  "key5": "4FvGXZiZDuBsMiYpqnJV6twWt1tr66femamahqKGDQ937nBXx9CRjSqj9fDYkz1JRRWUtZrnhKH9YGngekwujcsf",
  "key6": "4XmfwAUNyB9B5jsCmb1WoGoJZbHyAjuQFSKMyP7rLbAZxUaPKBe4fByLKPb4LujaAz4jv4qHY4R4im927Lo9fxYS",
  "key7": "228Y2nfaype3Xa3wErGcWUSthWopNpAFx78ZrQiLtu72ajqe72rYMbJzCVuvPsk3DWCgut16gzFguWmUnYCBD22j",
  "key8": "57E1EAdvepJXrBQSf1sQg6dBTDcpx5Y4f3diZiekqPL6G7KkffQbczWWGZTvNyPgYXg85H95QVB7t2pSSRuY98a6",
  "key9": "E9tZvF3dTB8ySube4J5fi3VYsHNppQfio2vNYSnXZktjHK6S63rE2fd42DAmN4mkZhmkzD7taPzSaN6nDX1qxB5",
  "key10": "4V5SiidBJwj6B4r8ttHzshwxs5MQWv6vgGBfRKN2cG43QJSCPkAT2fedtwUZEu6PWD3rZobKHBntdpPRnWigGhBD",
  "key11": "21oNGGsR4Ryhf3FtrWF9s2MCmzayVXJ1PBeTuXiH5ALT5XEnCYApfuQj8qq9Py9GMpr9sbXsrt9UpzHLKbyPJ1Vf",
  "key12": "52cCyjW229vqb9AgJjzTuShTh2CmcYCBTF4o6FbfRrh7PrH9dnjHRe4QdWnDChisEmNVUhH9cszyN4siSghry1AT",
  "key13": "2dkCnJedKH9Y3YBrYFnvR642tt2x6Stkj5SyawuysUjv5CFCvaVvdPQzfww2GmSHvuPSsv9qhztwvBBGncNpbFQQ",
  "key14": "2fBwUv4d2Cv97RgpK5S5KsxLaqQEjcFDZFPRfoxFPUgMd7tfFT1Adetfy8dkepx7HEcWCcLMit6nkZqef1ZNHcfj",
  "key15": "5mxY1TNFF2k5CXbpfTxZ5qX9ztGnTH5m2pvJYpqvgJVL4WU5xfmuJoP8oPRRYboHvNJv3CAcbKiR3m5CCs3BiteG",
  "key16": "rmJp4eDVKcpCNjNq3JpvPoo5wWqZzdjKBjUAp5VvFv7rFAunqqRFCeoUdTjBVyAabrj6ujXdk3UdPRR4nz9SkbT",
  "key17": "3VQdrg8FYBqWFAW7R553LQvNavCvyJ28GkvLJNJLfXG6KcnFUwkLWu4zyx2KpHfSni6X3a8FVh2Np6AmSByRffcz",
  "key18": "CHCo2tnhQvFQmFGPs5hEtjzcQNeJu7v6FiioaFofUq6WEkT7bBFFzReVdExcZpTbvUSmMf4eESf6Hz2rGovRpuT",
  "key19": "4R5owMqnD3jbtcGy4aEknJh8NS8UPVHGv6wpDqJagRTURANpbu8th4Fjyd6hszQHHaXazmct4YPiYhWDm6fXiFmS",
  "key20": "QyCwj8XeG6NqsDZMVw2cGYwXiom3CCnzBetK2diYB37QqywtYgcMWmfMNfvEZCzZ79uGd1dLGUneJfdBBqjzVrM",
  "key21": "5UZWfq9nnYEc4iE7uiqqXeeZ24xUrWmKaeQyMttjUYzCdQZ74XxfB5Uo1Q83hG1uRLP5hUhrdmxpwEv2xPVjm2VS",
  "key22": "5UcACBdBRVmQxskVkJVAUn7KDkdc7FEpeB1MxEkudpStXfpeetTk3xgmDSUe7gHygmGZraZ9nURvVnoHbWWM48f1",
  "key23": "3nzyhi7kmPD7LQU8vVi56NPXLbCzLg1qM6JVC4A6pCe4rtAkTFuPQdjrrMJMAptXKbUmYE2LTMS7QE4d3jJLnooW",
  "key24": "Jxs1jZchfKSpMVHYYtwKbdpDUE6hjmB5DPi65NR5cE6bavT9PoRhSmCvn72X1mg9BEJHPnxXuZeJmzpEscgqeZ9",
  "key25": "4c5R6LgH8ZCh2SWzW7eZHyQqG3Uox87FvmobF1rsJt43B1CxzkhA4YUVHhGGDLimL7jh3F4tq84mFFesNtpHzeih",
  "key26": "2gadAohe5NqqUVAmoajdehnmmUEtAVHfjodSWv73Fqu7Xfqz64oaFp43nQLqs5wRYSUAnNJmVvMWxuQonTiD3XYS",
  "key27": "3RAYZyrN4po6UXivq5Bk365UNxVgDxjJb3XSJq9vU394XXsPfxGPfqZUHpbo7LYjWLdm1E4svo3Scvoit6wyg1nA",
  "key28": "2JUXZCY2GCQGwHnyAmCNns7bT7rFfb2xxf1JTadLsPh8a5y9Ry98HZxi9cquw8MzyUt4CuEWTtFh5EwAVvKLyhrX",
  "key29": "5RYV6RzdkHK8BasRjW1RBVghv5z7YGxrZeGf8R8DTGrY5MqkwHhMddnR64v92c2zngcFhY8wHUyH7YeTwmTgGRUt",
  "key30": "NcXaFDBDWKQk1Jrfj1XpDaz1sK5Kzcr3HgByjijPp9uzB32hSkZpjSAQKaN1M2CaBaEq5Grp6fBgbKH3jWgfmBR",
  "key31": "b1CNqMFQQVR8PZjps5xp5HgGXywg2vWid6JsB6NomjsbSbLetN2zkWWJ3XTYNRsNPHBo16Ed421uWMAhjNrWMb7",
  "key32": "3D8afUhM2rM7Qgc4UNjnoJMpxD2BDubvrGvj324wxXnakaBJipFLnSiYNmePVe5JH8kWDybWzk5uaZwysYHN46wx",
  "key33": "2vcSgbWWHRWwdT9WrGwe9eyQxMCkt64t4pa2NieGBVFR57gPafMa6mToHDbSY5KyVq6cpdvfLDa6o7dze4qx7aha"
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
