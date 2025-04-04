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
    "5QW45Bq5YraCejPwSuEYfXJMZuG1ZxhZtjL3HDmC1ieoNMC1n7W8VCQvUz4jPZmsqQ7JFfn8XZQpN8vTPqZnFvmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZwgNZZSQvHMTCWbHbaTcffhfCoQhXweTCxY96Aje2GvP34bCxx5mKURnkt4TGTkMbrGyRqLWfZf1AR9cyFB6wr",
  "key1": "3FNhzruzCMBF2LKgMBw2KmAcwHgr9uGCbHircPo535VUCpmJDHdGhWKzVscT7zNeLh7aT7Cb6oQebQhA4qY9yj12",
  "key2": "GaodGemQSuUDe62jQN1QhhNcKPKXuyV9CaVJ1Yj73NEe2vN5ChgsG61HrvghQQchA2p14jzcxZQS3XnEHB4FdR5",
  "key3": "3eVK1DFfxtJEds3UkzeewjMsW6Q2uJt6aFJJxdhcMpn5KMeWnh6NZCdWa6Q3XDLwgkXaqxLjiKmgKii7LMDHFK1R",
  "key4": "3kVXv2HaANUMmvNK6pKULeAPwWGyxwybhZjVWYMaWAChyN3ZykSwBeQv2ahKFvYwudEuWsioMwPEQHCDcreV6Lnm",
  "key5": "2EJU8U2QRSMCukjijLziXshbedhpmVjs3Ri6Uo222sayEKdJTCoXHSSFjEBSnjfd7dGKPHW4rkAcizMYS1ByMkN2",
  "key6": "4oLqVVScbAAyBvG5Zmu5XY45N6UjVAQiYByzy7btHSzedTXKZSrsvWTcP8Kx7uAtZx3jsG7bK3HuJYKwa1cStSYy",
  "key7": "3M5wmeCJA2ReBqVK2bSXE9Gsagb9XZy3s6mmQitcPwSrXFi2GYqJCBEJyJSQQEyLPi2P51EqpXvd8rE7YALm43z3",
  "key8": "2phGaEdXGWAvB5NgbLKQXso8Ftjecn5dtiNA9sUTReddzVEwsiTrCCrLrKy6a2XFHv2zPYPBCvt9LTmvbp72H9Xz",
  "key9": "3KBg7KrAUwk1treyFRNAhJCbeRp5irnn2uck5iPCZm6rMzcVPNaU27mQzw6evrM9wbQFH9JvX5kkmPuwtHikS7BR",
  "key10": "3UyUotN1gtRPb78cRAkV8r2kg1ZZ6w3aiHxaS1wYPZaNtHHK9AmJHeDK5zwUaiAbn3yfJTTM2p8n46gXh8a2UDz7",
  "key11": "3Z4sfdMW8tEitjk8DqHDJVE18uM9KRWTPJCqofy2csY4A8BgjQ2ZniS39YAWP7EkLJ2Xd8o6bkKQfzhiCP68PnXg",
  "key12": "4ujy9fE5X1fTbPYN1zuR1Wf7cV5t5fengAfonmzSJNFRQBFa4WB6LZcg74Z2X8LtY5nLMw7sNfmv5rLxKEY99gX3",
  "key13": "4XvRgoqmWWwhfjL2kNgjRjaDbCUqrJDNRcGdFGm7TF6Ffic9rMFFeCTZRDvqRb78yBGXRQoukRVaPTYHeFUevXP6",
  "key14": "rwpKmcsmy7yYj4rFfyWKS7BSWJJUrPTpReUCbd7FwU6AhL7ksDkk1KPqjdWZ55ZYyYBXunedGvM12LkVAcyj5So",
  "key15": "48fKdqytsFxnGHMYfb3PkvN6jvwVYgdNuxxMeH45QEY9Mk7NbD3Mvtb1HjrbyXURqNZV1VCG79VvxddsYcnPyH4D",
  "key16": "NF8zSi25NDqMjJGqVu7eaZeQ1ihGMVQ3NRveef8VYrYCpaw1HBhpJMawmKapW1pHvJ8WL5yQA9HMJLN563u5TH4",
  "key17": "3WTCWgMiRpkpFQWxzJ3D7Pcm1R85muvp68ZPXzX1WcDz842oxr2xXKa8teX1cWHTEjH3e4U939s5UKMEV3bf4k58",
  "key18": "3mu34G8qYp2K21nm4aytFxkUCCKgyHGRLjqrdsUC1Lv8z5eJSKN2LULNT62Dg8C5P8aoSphQvb5iAo1ba9HkShmE",
  "key19": "4XHw2qT5E6e7KZo6wTaagK1x9YSsJFqbtZ2FHqs3iQrXeiJfMz1V4Xj8LC3vfPvScfdXLZc3dNmqvqfkexCXDdnY",
  "key20": "5zkVge3kfsVKoyhkg2ZpxhD3dxbGA4cWv9SswSs5bGfNMNdKUBUe2j9YMF64NuakijPznS87Z8tb3pkkQ86rmDER",
  "key21": "nXGq6UTSbfa6m3FyZfvwa5D1auhUkHyJpChuHv7C1jVRyq6d3zSFj1kQySvb8dKpYnSjmPYY6RXwuVJhKrAiGbg",
  "key22": "3Q2ErzQ21MJnPZJWLobV9ufpvuAcgTXuLCfShNjSxf9TjEp9mGM9Ed2NwPzyBgxj6SHQCDXiDveGUWtwavP1z2Dz",
  "key23": "63drNFqzPzkjLLV8DYBK22uFQNqNkMTfcWinvsoxQdUuM9MFaz6Vf3jEBkeNr6oVE6rTuDWrNv3fuRTpBPU2g8SZ",
  "key24": "2LD3t4PHk8ixuJtojzHAPJEdw51eLNHGYB96BHXqs6B8ow7JnsDFZzSnS529MCkkJebbW1yZXXfYWjPqEf8WUDdA",
  "key25": "GNe2fnN1hEuppYoGdYNbbMTYHRm7XMVudu2iRcR8HwqJ3FdnXtaMoSRRzofF4KixiWtSrthLTqtASqmN7ZTwbF6",
  "key26": "3v57jTVGCK3SP7xCPwExMiS5VCQBmfF2PcPogxHBoXAZ5NPyGDAM21YtxvgKA77X5jrTQeSL3DMhAFaabN6pzWM7",
  "key27": "fEowxgmD28xvDKZHeaaqwpMV4Mgdag7SNzDoS68JumoRvB9zKQFHScJscraNJyM8UaNgtBqhXEPuvNsGJR2jAYh",
  "key28": "Z8baL4VA6N1wbGQfvSMppGQaqBXENrxguXKB4Koo3ksgg6N6N881gVD43VDapLPAVNpbhjREKnv8rV6qymXiyL7",
  "key29": "4zKK4MD1e1vfJ8y8HHMAKfasYah5hC3VZ4tBTYGDdDpATe9wpB7iiayjU5vdHfaEMfsdqvCrgCmFbGfEDvGh84cx",
  "key30": "VwFZ9NEzvQu5MPh9fF6vfSRprdV165gSQPrrcXMtTXxmtE8FEhYymjCZRdf1Y7XDUNtJVSN6YnagnC2V9d36WsV",
  "key31": "4G659qW8Xg7kugUVr6moiDD4RqZEHzAGFVUcPvVGbdnzcc1AS6JoJun5naiYiSYHbArGwQp8KNakwW4vHpAnvZUc",
  "key32": "3Ny82t4aNSZKxpMkBsZe51Xfd1pzAq3fPnZwHpPC99NHWwYBLU53Kt1pWRewVsB7bp4vg3runn1VgDYmmiW9stcu"
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
