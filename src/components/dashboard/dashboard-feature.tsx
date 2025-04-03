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
    "27NuLqXj9PnnPdWJ5a9z5ku3wxDitz5ztnJpsoLj7awiATARQn9s97zb8M4LqXoR1NLMKmTS3Hi5vE5sYWi2Hxih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9kncwXFe5krzK7dcFWHNvh6j4qreKwWiAr32v5aFU5nNY2ZRxjt2RvQMhXCxZdDWAtfTbDn7d7ySheFtjgoAXEb",
  "key1": "3ZSTXwtyrFp7VMx8qcN1rofPnXW2R9WLviHga1A2fSdtUeHwaAY4PB3pQJoK6NMxWwTKtQoD2KwAQvLXcq3kCJH9",
  "key2": "53Z2VM13Wc8pgS9M7WCzyvenRciUV3MRDf7EsRYcrvAADamC6kSAicmGXeMDWgzDsmumxhqyDVuzwipxrjghx9aE",
  "key3": "Ri1U8p5chegGsE4C9Jd8xtpJQPYAhoL1VVHZ1ckBrc8PSpjTmhjtU6hY67vsTUuu8WtxKHRJMhN3T1tpfsnTBce",
  "key4": "2oJ3VB5nH3T3r4S7KEDkspXhHx9v41roBwbxybpBTb1cxH3kVwbZhvD91okzKakpsB91TUpuMS7haw9VRfSWFfG",
  "key5": "vaZqoXgDrrGdjoamHvf3MVzsxKMH7QtRYHHm1aNg2FpktfM8jTfMxTXzo7rfNs9GQTZWiqTzuaa2ZPSqJDQ7vQW",
  "key6": "61FNVDV59ertUBeqj3BksgWuHg18uJdKkRZugGsxS5cg6FCetYVrvuPv4mtP3WDaZkitqDNcs6QbKLMEiNmffNJT",
  "key7": "33uCHsrzNJs17mjDpsYD9LCby3iuJQPUCKHfjWSfxo9HTARFvuqVUWibF3Xe6VFuRu8KEfMi2TDUY19dSZBoctoX",
  "key8": "2zcpnxMf2W6YHTZRb9jCXEwwpAZASWuF7DFAesB6SHpCPSkQxMaJmsQP5e4dGAz4JFbrY6JVfjLReXXr3fCAE2Re",
  "key9": "2zf2isNERiziTn9Q22ws1c6NwBGNcAmjositWA737mhmcaswhMSM33Kib3bU3RWWMgLn3fBjfSvBPMpoNcd9jSpp",
  "key10": "5WWSRr5hRiXg42nfDwysD3ya8CUgPJps1RcMKZha7GNut54Uozp6LuF33QzT29aEyWnMXw75rKvjSUqRUXVfA9pA",
  "key11": "o3qi5MzzEYnt6JmUnX5w7bdFVKwyDwdYNjXva8Lk7LE8pPkjbCrY9otCqq7DWcZJEB83t6Rkvfdb4N55rnUsK94",
  "key12": "2cFXsjnRhce6zntN4cJ7LMwX1Ma97ZLCpK9udBd1mzYfnnfWjokGvu1rej725SQ4Qfkey5CawLuJJdDq8ifNQdyK",
  "key13": "QbSN9iZ39Ug7a3dzeZsQFjjGyWAqJYgQ5qNS2XAt5fo9gQzxnNH2LrwuuGPWNcib1tCUks7huC6dfBmrhhFiCHY",
  "key14": "3PEuRR4YXmiSbsw82SW2ZbNhB93DLdqE68jL5SA4ZKXwRZBYqCi12eyoqT1hdH6KZX4XDqRSwmzxKbprAgrA525W",
  "key15": "3t6qxqt52rh8muTNkMRbntHVRyd9t2SYimEBZRpkM2LF1DMvyWN4za9obrhpFbqp2nuYHWEQLqTRRo878yPPwPHa",
  "key16": "4YiQS4NviJnMAbWB1uf8Umbz7AL1Vanf1JkkuJJcyNRvQL1U1qodSSxFzvx4uo24eUuVAa3vY2gsbvYk34Ysbfra",
  "key17": "4idaGDyBDrMMPPd5wWkR9sPsio6uBG9cpjz7wAQwXemJxoi3M73KLfXbLBSt7rXm6fA741R1BpJkgagJnzeTMJu5",
  "key18": "GmymmyRT2DgnosqiUhdverKxYiT9xJH6T1TDwD8J35LuQtZMgyoCzs3SD1LvJF6AtsB3GjD7En5nDcZhTrZxcBC",
  "key19": "5qY2ynX8ba8ZHTYxkCAef1HHDFfSyJ8NuGTzyiYK42quFMmaVLLMuycod9BU6spfaTaz9HQm5qe7apYWaNpgzygc",
  "key20": "4kGpTn6GNJrJjZ45rnDwvGgbKVLmGYw73LmY6DzVvyjFgKsbmu5VYUPCU2RMCYCYR9AaP5M7jiwWg4jshWd4W2AV",
  "key21": "2JvtDLsLwBHC9P5CRurU9qJcfktCtMwgBizmY4odrXufU8ZKtA7qGXB78UGjFqwMwaX5xWiPGFvNH6HXhKJj1sgY",
  "key22": "22juUB3dk31Fc1PrggLbKTjM94usTosDJsrhyiVtDnEZpGZDh2ks4V7Bga9kCexCV18cK3AQXX7hZoLstfttvqwS",
  "key23": "235K7xwTjMu5Wy8829AMXENkJR46ETdqDfMuutmxd1ZMJBqB8oNNbqNFmW4QXwM7gnK5tgYQi1dyPNtTznaXCdrE",
  "key24": "5fFh67muu6V3CFFNzqSuxYpwUhNJAXUWTVy6N7Ku1NfWMntvzTaqn47SewSn9e7wF4DX4ENZGmrKAfeYK9K3oLrF",
  "key25": "288GGWQvAyqkB4QM87suU99DswbgUJUtwHmnt2SgagfhUCKcXpLn8kBH5B1TeoRKN6BAMWe4WcpT6HnUhmNAP9cH"
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
