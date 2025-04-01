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
    "eupHCyDVXRcMLuNfZrCBrvJKc7GfY2rqTSyDysezcPjGzZeVeDGEBi6aFp8YcR2DVpoxYBA88c1rAKj1YkEWLx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LketAdowRZ18L7dBwcSzSdaAUWpUtpezhfddKsmdcpkmtECaMvaABKELFZJEJyFRPZ7vuReNwfTX8d8ouWwE8Wf",
  "key1": "2fDNkq3wtsjsAjYKnjnQJUk719dRcEgvAQhed7jL8RFddYFckvA4yfrYC1trhrEVpfRRLbWtygGktJpdRDFZ6Snd",
  "key2": "4J61hPA7ZoxvTjXX6ENZNCJMnFJVGcJ6B2LY8Crv1hBrUacGgDBQikgDpnLSzwR2YgbFzDb2gDFESEw7WNoH6kG",
  "key3": "5P9RJkHqtNsizWcYRCXiDGFbvsHesKUFpFaJpDwpcXtqwpsPi1wkyM1iiiGH13kgJLLvR8Jsti6yiQ9ipUUbWR2Y",
  "key4": "5CXjjVTNYrh4Xgyxy1yNSJ1rN2vpyMRzPZapkZzfTHWgqgPxzx5MYim9tQ7yKML9EZ3SNncTswqfTmBcJ8stkEfd",
  "key5": "4ECn2A32MkrXD9ntVzhFqMRzPVqYbimz1qRzQvs4uWxCrBxEkJsHV998REFYLp877hDPSwTYbf9hGKDzw8kHuZFG",
  "key6": "2As19BhD57dWDqKjxF1yZzRnx7z1GHAYqT8xNxvd1CgiUJ2bJE6JWPLArPWLFhyMMfen1WkjPnj3wffN2NaNBPzW",
  "key7": "3NpKXugMQPRtonhRGVNivLgoJCaj7Gsf9QLaioyL6FRD7RPMrdcFF68dwJWQKKamuHazpBFycuVD3reJjL29RAXq",
  "key8": "aTUMoK16988aac9y47DmKHUQY1wpuhJGrFdBopbCraHpMVJ4cT9gR3Bmti3rWG3FLNWRzgLJbUaJTXQf8aLRsjV",
  "key9": "5fYVfVQpBVfZDg2xQEgK9GTh8VtJhb2hKS4LhzNWeusarrMDynbnZZX8zcyypKgih1cJmAjgpMeWySCQ1qBisBaE",
  "key10": "Sdmbdx7RMaQr3aTUsziDdxR2iu6UYPcedeiuqEySyupoZzmjzzh8CtppMGPGYSPoHeZ4v3Q2TUXiUrjhRgRm9HK",
  "key11": "61aY1zMdV78bb7X3dgBLagoT1xtT6Vm8KS3yqkcvLoRhF82QAxZeyanv5zPHr6wZU8ephGBasiZME3Qc8RqkSimM",
  "key12": "QJUrEwiGYDnMRbRQCEALiFhNVGZbKpwEpb9TRQ5gKfDeUt3WyQRDCo5sKB8oLqWEi4XYx73z74dGkHu82FxnFbW",
  "key13": "3LamxvhRsgXvmoXJXwEiobjqMnYJNcmdkMNboLkTnjq9dYsmHdF3rVUyD6UFjasrJuRfg8pDHh8jq1pt1KpfaVRv",
  "key14": "4CMpXtibw2Cjr6z8SoBa1A1mFpCUTBgDcVEd76X17hgtgF6ru5x2VUeQKcCvhtntw6XbNvPMQjRRJtjG6Gjy6mFr",
  "key15": "5V4MACTfDtp9xLvrV8fspifJavHQ96aJHzHSHEMP5cRuEL9j4dqNoK6nYAR3XbypX5VBwHrXta9DqBRosztzbwDu",
  "key16": "4RmPt2TmEthS3L5z7MqvyMXC3wBm7kRfXVgPbZrxtzR9aPRagpgS6NHrFdk6QqY9tJ2vapB6ngzQrsfLeNTVDYUC",
  "key17": "2VvTiEKCmdZhooXikrPTNtJ9EpStnd4Ahw2bJZaxCJEb3ALQ2p1FkVYjLBqNYZkbaq4TDQhssf1GPsGZ6pi7sD1E",
  "key18": "4jMetBac3NqGTqU2PKjnEgCLncHZrRtm2XcJvTA1wniZ17SQyMPEKfxrMVpagDjNwDcMF7QTUj6BAKRUt7wMLQpN",
  "key19": "46BbXKuV6r5pe1CwQ5hT4yX1k1EFtQLJyJLjJPg1GefDJaFbVnfKzNvpDReED8Acmx7rd8SA8j61LBLaRsUW6U99",
  "key20": "4crm84CMV9Rd1kPnm9pq6GWs2AxHEjL898c5KxHMYRLYdGPBXDKWZ142RLZMXFqYQmx9UJrcnY9WsTPsTfDFCzp3",
  "key21": "3xi9oxK7rhevZFXGvpY6EX4yD4RUzTo4f2cWy5ykxndHp5krHfwGyiGhtZqaFeSnqA5XQkLNHyKLXQD4we72k7uB",
  "key22": "QNMeY3zqBhNWs4gB4GzgN8iYbFG2hYACuDEmxxJprjXYh23Mkz8YbVyd35oMmiJyaw7mFcLtDMRJ74t8tSPSj1b",
  "key23": "5rchvC6TnnvahCvdF4PAjcPx7tuoCTXfm5ix8H4rxW1XvMnSaRyrtYdsJbuFfN4zEvhdjSr1wj8veo8K5qjhc5MK",
  "key24": "BCoJXpfkwtmW4EyeTnjcYnRaPHMXVGL6WYRKM9LD2AwPKkGDWnivT3FHUbzaAB33Gq2yUHBuDZSEXygE7kQZEiw",
  "key25": "2TbnEmqHj2AvqpmJepCCj1oBSrLhNpe46dBBP74cJ5rbmtcFrJcQs9cBRvQRY6V61Jx2RL5mEsUYeP6WoLUdSWxk"
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
