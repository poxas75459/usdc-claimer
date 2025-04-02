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
    "27pywGcKQM1MfUauyzYF2r9Uvr3BzQne1U8oQ8SuNG8xKeiGoc59EDFmrk6ki4DHaVkzdR62WJYKNtwAJinF5h3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDP5qbavKJXggSTeyewupTqG7upKGENa5c568a4VeDr3VRR9nBPgkm1ewHfnD9kd4xN5xYNNdwMqCd2kzMZdnED",
  "key1": "4RmcNvyG8Tv2syNqF1ocacDzJYwYcXDZeT3eLQciemsEA7oQo4Q2LSodibinXeLAxoWEQRaKqXQ4vMskQ2RZwmPr",
  "key2": "3jxz3uQLcLZBvBWyMgjgwGyP3f3G6XGR6wucCDzC3e6dnQreUYs6qKERaEsHUPByw9ZJT7GDM7YktZ2kGqigUqPM",
  "key3": "4MEm1JCQwL3AvGE329aYmcnzrmCNXcGv5nVPdsvSsNbHK2cCrhNi9hz5ry5tL4fUMxSWJ2HrotS57XVtagybrfpc",
  "key4": "2qViYnwR7zc2a4nywq24a9osHLMdzU4sWGQBdrty873Fd42KcX7cZT7TPKH6WWe4JP9uS1MDAhDoBt5ajz5XFkLj",
  "key5": "5gan9EjQrsRUS5s9DFeEU7wLC55sDwFSNZnaYWWSTsmRBEjuKQD342zoP34mDDTrb7pATDTTAgjc2qJ3JrpUc7i4",
  "key6": "5GC5CaYm95fZcQ8TZgkjoQdeJ8fJmv5bYKnAPDF6qwB4NvHg8shLv4WXGjds8HmfDdmwKnkXJhJiCqC4LgiUuXb6",
  "key7": "4dN3fkBd1VV6vgM3pKXz7y5Gcq2RRFzFEidhiwdkDyZPfqKee849wHhGrkZSvVHAhTFqcUKPBeafr2JTcCMUvaGY",
  "key8": "61qRE2kpU5nX5GMrYXumK15vKQZs66czHJCZZGozvYxVTgeyhUds99gDnFySd6jJ3gXhNwVehCWeums36GbUYUrS",
  "key9": "5F19FbvP4YzH2WpLWjkKciGQfThituHb14pARXjTtXeAZAYsNCtV9ytQKqzNt2qw3SUaqXCT4BztbtKmEALgTMx8",
  "key10": "XZcco2U5brFnbFbM7KE9ovCF9RKDz7n97MyaJLepBNndxxYABaStMzGWac1BeFbLmycF5N8rU3eKMbG8i791J96",
  "key11": "3mCLJULtQ3PPY6U7p58ixUt275nSBE9srKSBFABSS8o3aWqJJjmgrHgYZ73F6aaKc4J6WWENc9sQcVSuUHktCfK7",
  "key12": "QcBc9LhC91MG3maqfQoXsoByJW1KbPokU1KcRkByCQHbuZMo9CxGDWHdrzFsBfmXfRWM6Dya5ycdN5PfrBDQRby",
  "key13": "2C7yeyDtZxL6i8WCtZ5Pg97eDbGxnVSr7dUfNJfp7fVH5eykXALEpWBVGgxWWz9A2EHcFhY2eKAMfYF3tjbrUTKv",
  "key14": "4Dm7Q4kn2QpiKaVvieoDyP1q8j9FA4wx7cqhv3LRCHT25Lh9aYt13B7TkbQy5kVCS8WXiLwgfninQcUAFwrAsiBY",
  "key15": "iKS312mZoDVmHPA4r4RPrdh3vDDtcynDW92cLootMqRz2uvqKvMuFDkFDk7r96gxfMxzvV7Q3UYMW8GDAxKg7jv",
  "key16": "4LP1c7VrASxXX5XcVyP7QpFfxxzLFbQpsBkQiZYBu77xA5n8eaxZv95Q7im9pot9UCbQC8VJAXHjpDS98eg4f9cz",
  "key17": "oXALLwH4JMYmrfMBMqxRmWmFQxQVHo3xYyWcCz8rYnJwPkgiSBVdYgJm6Jj2RRJcM9bS7CJde4rS38j5E7zS2vp",
  "key18": "4MqWRXrVP7o63dwn6BgzAxFm8jPTd4MQ3LU8H1dqLzt6QP5RMEcqyZPJicgQEmZ6ye4yGSFYH2t25oyCbq8tJQMp",
  "key19": "4ZiL6ASgjsm7mBaC6k8U8FHsWiNkdgzdZTgxMuRx1Td5qtL488ERMMyaff8rTk2RE5BA1LXwritfuCZZj3JJjbGt",
  "key20": "4Uy41Mp6yPoDtavpWa2W9SFmz425D4x4c1wTaFo3E2UZz99P4stYVHz7hxmvLrQpD4wLUPNcT5W1KugkPTJwAo1G",
  "key21": "NgLfMybZTn9WkZHsqxFs4jTwsYwNw9NE4VxZ2enpTTLMujr9zNba9trp38C6dRkNYnUbK6Me3zfjAxc3kAUan83",
  "key22": "3FB7KCnJjogTcXYBBJG8yoYKUEd6fUJfk3iPXeupDugRjqZ9ErrHv7CDTKZsYoVs4gvQz1Z7MDVAHyodT4q7ytmX",
  "key23": "3MPcucSiBU31ynZENJAp687UbcQdhQw7gYzYWdAjVKCq3yS1anMuiEnQXbvwwuzPPkVLo9z4cf9R6dp2y87bsDQ",
  "key24": "5ZuvC2wFCFkpcp9h2Qs7MFjmA6a7D5LU25jS2NfJ99QhCSRbAkCL3cHttga4NpMvUrGTmZ8Mj9ZaRCbWFmjBzygK",
  "key25": "RdqHXZAYLwpU41WKcMvZ6eZ45C4iZCvTMzQboKQGJxGcr2dPzVXVmQvC4UNdXQRwYtEg9BGPrpBeMSPBonRaqL3",
  "key26": "3PGpRtYA8wbfHudVWRQKNodYQ7nhGwkVSPfBxvDDqmPPLq8AgxRrzf2VJndTGz6tDDcLppjvqGqYajBNLUvzX8Hp",
  "key27": "5DgwxLazZgMJYJbP9JKsB8n7ANShYgCAywH49xU2ciBDdDXjKcrgBCJmcff9mPQAz5XV1Piecg3sbHhNR7tgU2HL",
  "key28": "3jhrMpb78pfHgoWG6xDRKREZCnvUuCJaDc6Drx4hLnAAT2ytjNALrNhjybw5vnWLHTEexutT2zp154A77xJsj9x9",
  "key29": "4LcGUw6vDCSZWV4SAUeUCfqJdYNoeVqDdqUHGkWAhm3TDppmTkRrU3Hse2cUDhmiguy6VTeVeyRbjK8B2JQhoPUS",
  "key30": "mn62HstHwFVYawdb5YbhNCW6ENXsE1EYyRfbnNLo2B8y92bs6unYwsXa6WgUbqkWy7CN3P5Z9WZtYDc2LFbQEAr",
  "key31": "aSnq6gT9sujCzmUJkkDebGLC4tVu2RYE4V2efuZ4BvU5CN5og9vKdM2tesGL5VzRbBVHBgf6jw7zm4woyJRzb6R",
  "key32": "33sGRNfmGYrRj7wY95PGyZtL2gysYxND6uhMerEZ1MBS4DMqCJL5nvDefrwcXnLyHozpdczqt9ZhPPNvZi7h8Qur",
  "key33": "27sY8aL53vASMLtBthbRf4jYqpvFQRpfBSRarh2n93YN75zNfWBWBhW2X5gZY3egPiuiN3t4dM8esg7ekfLytYVb",
  "key34": "29MrhTZZd9giZoFeQpGiJ47FnsDf4h9DunQtwjFsuqXU17CF5dbzPD4pZRpUjSJJSmpDGxo3mmxRKvovrvSLd8ze",
  "key35": "4VGuuCwYHYZXY98AWJAGZiMf8DXxdu4dPKboR4RpX5e1XPYQUSFAGPeECMSZ8h9MX6jvSFwcyWYJ5FL7MYXW7eko",
  "key36": "M6jVmBP1D8QJDNm2bFSWjxZY8HnFxWUYFM9ioCDCkWoBv2apHs1WmupU7CypyCnJiSvhQydzL3VJyWqxLZ4jbd7",
  "key37": "3C3EdG4H6sTs2817F3BnfiUz7tt3BSTFbz4hwkWRJtgcd76hFqmGpHHc7A9ZP3FYqthXXR3qysyuvRBXLTPScGQg",
  "key38": "3sCwPM6AAwTzDpkGFVqSg182nZQyg4RDPmbSfi6pr6pJje33dBy5iWaSvdFNLESLXUzh1XHhS8rPyQkSXp5euzpT",
  "key39": "mNJFWPE1UmeaZ8jopB6fzWN1SzVJfW7yvKgCELqEcxBA76V4ooJ9AryCa5wUWz6EsV3E1hNnfwGwuGpm8LJcvJC",
  "key40": "kaYoJQmHUwFSADMKpJw5NcNPR3afKwhTgiZhvMFJyW4QnygCCjdhhf2uZcCPfH4DiJNKZSYj787MpUX5rMWxVCn",
  "key41": "5YNtBMjrEfixBFNXFoaA7SHt4rJk6Yvg4CebvCNesquju7dWjFJWc3r34qiQs5HqWujKYir4qetTr4QE9Va97peK",
  "key42": "3chnCxNGEqD1JvYqbR3vhrD24MZUeVUtZe2wY6m8oHHUFE4rQMng8U5ErhNAXxrMUSfUSS3atrEgKy63uEzu2JXz",
  "key43": "5fYULwyEuduq3zxsCbdBh5drB6RgRmrC7x9MV7BJQetZSXNp6Wmq26MiBwMtKJCKraUXDWSqun5BM4aQnBUJsX8W",
  "key44": "H4Pf8bDg79ygCFtXtP4wRiazdGJycTQYfKfScHa2ioa4jm257FTm9y4digFtUddRZgEfp84G3VxQijvy7AYemMQ",
  "key45": "4PazgcYK8HkyDYNMBDSazpe1AZHm5PYyYkCYWwjKvzMThd9r4rVuy2QYr1TWAJnWqY9XVmEQhTrfjLdqPJLeF4od",
  "key46": "5CDNxE2iP4hTFpf6LpFEcDM4fWZeYPopA9G9WfUgzdeMownSL1qDtNpn4b6oWBUAQqT9L3fqh3bF146ZNcqsbGVz",
  "key47": "uvJ5ohurkdHdaN4MBpYuSLz2LrLcoeDRmb14igoU3BY8rNuR9mLqQYzQo376CkByn2m6djHRnhvwzgEMuxtRYJr",
  "key48": "2o5KiJASr2V96U2kZd9W5D1NuTicWcHfAKz9GkeLDiKHhDvPYjdpohWcBjG6AF3xuZuZyDjzQ7kGS7AWWpJWDv1B",
  "key49": "2XXsHHumTigknKejzZMD1YYQ5Tm7eGrydKTgACAjr53K1hun3M89fNrndYL5zJP5LvGtSdDYoB7h9jq2s9KTKfUz"
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
