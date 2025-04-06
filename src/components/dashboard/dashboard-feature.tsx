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
    "4VE9PRdQUF7vcFWH8Wh2A3HRU4Piu8d1rUB65BphMr1j8GZiemdZvjB2D18U3LTAw3YG8JUT19nrbDTFv57Ths7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rq51CZrn6xUVh9C7PJsBXToTwZCb54ueqcrsc84MqABPoJHZ3E2kunux2amqo3D1xgvazMnRauAwb443qSzr6J4",
  "key1": "Xp51k1n3UW1XVsBk5QmkTkP9ShMmpPXtT5e3cHG99LgjiCh1pWbrfAe1ycvUh5KqyADScrCR71egq16HD3cY2Ms",
  "key2": "38cr7igxEP12kD6zGd2kLo6tPBKQDCtTWsKNpFZW2ZaGq9idBoNQ9ArqyfsYuJVbry4UUKFggoAxrP2MF78gfseD",
  "key3": "34NE4wjyPEyYffdFR4jBQfJq8oxExsCHr6FyGmSJ63Wutiuq78TSXY2ELNLFwqNAvVXVssrobeaqjdkFU6yPpUoi",
  "key4": "5n2fZVZTH7aHnui8mJT2XUZcmjBn7eHisAqkAJKvWHGyDGnTPQ8gDjocs9SWQPrTc3RdMyMCe9y43f31b64gNVAp",
  "key5": "2VhdDrm6dD9X1wtgTLTNscAezVoaMwBzeLDbrwnPyvu4gkh6bajh8Snqvs3exBNMvxqxK3TzPyyAAr78fKxf1Ysu",
  "key6": "4cs51C3GszJQxjfXrcetAMsupyZtvoa8BivhPtMiW4JHuqiQTjGVpPX4xidFCTZBfYCbHzqm5JQ3oXKyS3n3MFch",
  "key7": "65zo56yjtkj8taWZhKgP9MDGkFBHETVEiK6bC3ZJvBX3D479ecUxt9b4SwxmHR17y8z3uZxhtWP2WYx8tCZtHxNi",
  "key8": "5giYHSPy15dzrCafoqwUdgeHJ3HuXukvUJ1zE1WtnT4Mb1L8P4qnDGaux6YQWFuw7Us3MUmn4noWbNdoKn8NUwtv",
  "key9": "5oUVCMtMLp1e5vMAyVPGBWF2RdU6HVxTKYUJfb7Hb5yZDQMAhoqyTsjLMmFPkqp9CudkGEUN1fknmGqJKBzQn8jz",
  "key10": "5VPovgMrW8zzY83Q9h9zJqULPoP4HekqnqVspopVeogbUC36zaw3cys5VD3UgbdZGxyayAFgUWqZx2FvVRHwgTYD",
  "key11": "2WF9JezzQxTD3dnbvypvmoPEVaTKaSYVsrzUH2FTLhLS9NVagqY5hjZ8MWpo6TXZriJTwxoJFy5DXn2SJvAanGgv",
  "key12": "2WcVsw8PEfyc8E2TE63KoRbzyfhmBUdeLMjUyZXTUWDmNnrhPeMCacXb8HEVbWrb9m9rAUePJeyYfbvhMyQYSpym",
  "key13": "nat3zQvznsjRq7WiyZkmAWWmo5hMRiRp8RPxfsbMtP3CNS5DAAKnn1qiTRaazmxowkadWX9pJWoBonwMSBu5a9G",
  "key14": "T77TPiBTtGC7KCJjzyLk2ygzCEMzEov8MetgQVp7qUUBan3bBzuh4J2nx4ddv9fGJzLMBEWS8VZmEeuEFFc64pz",
  "key15": "4pVdUDyGEgQS5sN3DTpWvJ91Hu8uXLdYXtJMaYkHSBmYMBb2HP1xGmgKoDMg7a5hcoMEzvan5WFXwtqSrhcadr4M",
  "key16": "2dBaqQWhjoepH7hLJcX9XcXwp1fbRodP3yCZKsYRYsJw8CcYtbg9x2pYmbHJPDXhjZkxsWaLGfXjkbJ3dHmXkSFJ",
  "key17": "3boLqSc95ci8BeAd4NJYUysVWDyp858TzT3TmPcXV3XLfLTCSNLDWXCUWq8XWbyp8abKeFE4AYSNFfoNFatkXdPC",
  "key18": "35Khtu5Dd86XuhnH1QFFTC2erp7CSdFNdmFJeox6hrTbLqxbXUeAc9XEr9FZwBtPVHPU9HodTLCkGSyBQTCjLa3E",
  "key19": "3tHMXogbxxVSeKoPGAtZp4BnFdfZT26eGHz1zTZDRZvsLcTFT3LzgLqRVAahaX3nyFJMLZ8VLbUaN5sDZoTLnbk4",
  "key20": "3JRgz9YUsoxFAAHnQAjYTNiQDEnwH1tNP6h7gdyKDGhYWyFW97aznwckKJWBH8fbpbPJyXrH7rqwYhXYGyJTsJKR",
  "key21": "5TTHN9e7Wqs5yRiowwNix3CRXsTobsomWtL9JdWXJs9PkGvxc7QDqLaZ75dEeM2s4UojMru6QB74p6S7bzYLTez1",
  "key22": "232RZYg7SVmPe2R9HkpVY1JBove18mBAQngDnb3KjmMC1eLBKgv2PmkjtaYqp4XfZSJWPXcgWM75wC4QgercmTxu",
  "key23": "5RVAceGbhfoN5NC4tRcupYqoR5Nip3quaHDyfLJTrH8Xw3EJNx4hU51Yrhav3AAMLKWjL2AA7v271uFMhVy62RE7",
  "key24": "4j1mHL5AenGdxwJXcFeTwRVVP9XJiR2pL2mxLQoLbUg5E7igXo7egQWG5FXYMefEv3b29ZvrcgtaTWy3MUxwcCnW",
  "key25": "2JeHnJPG43HKL5PJpR9VkxyQo9fYVfp5Xwx8cwS7D3DHi8eRz4taJmiQDWDHkWKfGzSTekUuw7hgfejp7K48G4Y8",
  "key26": "i43i9PYCTivRr9Qpw4kLYehDb5B54YJGxA8kQ62jhB5iw6Gnp14KuxSKH3dMCQmP1cSrZ3rwknKFeqqq2p9ku2B",
  "key27": "rjoEjf6BpCsVDCEThYTbKuMfHM6fmjbtCs5Vh1oakZWnXsUXTBcLc5YZmbjm1MMqrB6Ah741t5dYFFk7hVKhh6i",
  "key28": "4k6nReTTkP7cMrz7y7pS5hJukaXdgnDfbXrkCYXFueQJkN23z6uNMsGUes8im7iZUueuuSoB1Ekp86W81oR3Zsia",
  "key29": "Hrc1Yz9pWYg8tVjAKxa2wJ3HSVn2RENoVuponzwz6uVkHHasgzocsqza8gzA2i5ybsVZRymZwe6ZMi8pmyRXq7M",
  "key30": "4qCwBwMf5uj4waG4itXvaudvnWBoLgetPFjSPtJvRsBb1GyeeTjgbCxMG9kkUbT4pNbZKBjj5LmUTZFerzisxMRL",
  "key31": "4jjUjkRPdY65MWJXWif2gdWihWprAXW4cbvLhMr7UTGb2B1nQ2CdYUGzHNYZzphVpdWHgon5u6N2at6wuq91VtNz",
  "key32": "43kBpng1K6gjDL7zvVejC8ehVuwaxwgFSHb7gCVY5chKm3DM4by1dc11sBf7WZUynnXxp8gA7WhB7413AUoazMKv"
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
