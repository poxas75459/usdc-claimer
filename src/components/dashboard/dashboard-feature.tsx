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
    "3yhiDPaKZA8P5D21a6ERzMsPUyyjaju875RucXJKLco5rFMftEFxoZne6s9PoaQLELqxrErCxbN8YJueAEhPNHFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9x6UkupAjKaim6P5ABC6es1E9QAJiNhDP2p7FfQpQHuwM9WLdp6fLz9JCk1yzxysdVKthgqVY1SwziM46fY8k6",
  "key1": "491SQiisU3EkiU9o4BQKYN2US6gNX2rqREgZCiiwVhy8oWoHqPhH8BYJy38a4PUHWTCsvFzAyMrUtptwfVhrv4Ax",
  "key2": "5tNaAMFN5bpUnU8jU9WqQuL6ai4FbZTH4VYLgvLsWTdb1mHmeFRyUa1HCyV5YA2AvidxfYHmqGgdgCPNxH6CjDEK",
  "key3": "ANvHhW1eNjSS2smge3ifnXk2nDC64JcUcjdJGTKHyHRHfJmYsLJsXBySqKBLKH6nh2YxwJ5B32BwJ2ZEP9LdbHR",
  "key4": "xBoUgDiwTAcGb5RbjxGbLNaRB26HXkHsC8H7H1qPW8soHv2GdWr71r1pUxiJgve5Z2UWUxZcyX7UwPcU1KxUMQ9",
  "key5": "3ffGaQzg3tBtJRqEvYFywo3ssfHqWnFWEkYHukiSKDr8U9H6Kc39xQvUuhVg6h7hdCJyNeToNfSv2Gq674SyPPRW",
  "key6": "334E1Mzikf6xXrckUHF2p4YTRqymdLJeKnNHwmGpqmRgbvYmyCPZzPQeLUd8ByM2ziBeHA28BxTm1iaXyL4xAcNd",
  "key7": "5iYhszJjW9wXF4A4GPew9sSMY4Fzc3NtENyXU2sztrar1d4rzH5TSGYYUTwjTM6vC4ZY3jTkvWnKwN18oC8gFFeC",
  "key8": "3aM4Y4fbuqh6gDjL3XpWr3iuHiNG6Ta3m6Mm1HAK2qhPHBqH3Dy3TxaLz58wm8FSzsx3jzFX8mpmyVjFs4NbDuf3",
  "key9": "28E2TtFmsvAfZxqpoSZTNJDqU7TCpb3Bx1XBzVLz6AYULjUKruTFCXf4rjoVtb1tT1EcKi4wa18gHMbdkHTT6dwq",
  "key10": "y7WLWuinbG1cAKQ2yZ5CFjJU87QAiDAo9fTm6xNNxBLPX2RzJt32HAZF4C8cHN3R6Z4YrwTHGjyRW5k9kVFi3kQ",
  "key11": "5qwurcF3VZ9mDP4AWQuNTXyoiQxzxa2w4amymT1D8gQcnGFWx7dAxiWz7JPdfHGzEeAyoGaeQzPgouEtWLcjDiNc",
  "key12": "2L3vJGcD4Q1njfH2W8kbbCFeAkjUsu1JbMcWkJfo1bjoUcfXf2CTp9GLNhEKjDiyxqmnjAZxh86BuKvywGADbG9y",
  "key13": "66J2ysBzzauyjVxCFf5seEZQ3y4d1vXTd6XHNj1RktUxsQ5GhbedVJ4xCjJdKPg7V71Cq3TJ1xf7TZhvSittKiQX",
  "key14": "664mxV1y3pKyEMuQdC6FpU1C6wy7LkMBZLTe9ZdoM6QZuykrxNhdE8x2U3wLroZStteuuqbpFEWdqqBQPtEJDmGj",
  "key15": "4Mgv6PbjotF7hMAbr2kmDK4ThM9ka4kqiR8aATiRrpyMX5i4DTjMkTgfxFsdce957twnSDytfsUtWr2XmN3R3Yh6",
  "key16": "3bqAWNEJ6Lw8ytFCTGZNDyjpRmiToArZ8PW6Q33YGtB1HStrhpkmvW2HgDucUSumqvw5gJJRuDQe6pCGD9u6CTYL",
  "key17": "2EfERiW9FPGtJH9vexmdQLQXF8Ggci24rqj8WzNwwT2PgqwhuyExfJqJJWARLe1rdQasYRx7GW9RUNrqSKPWYtYA",
  "key18": "3a3G7BG1A5af2d4oKoHa1p1gAFcRy6k45ccuPcsWWz9fHhiFH7JVAm6LHuFWxBxRtSXHkWMUgBy49PvweAGZ9cr",
  "key19": "4UTPc8uRscHwTy72bzBpExoYus6YN4yF5mWfvDWzooE6pm5rEtHbs4GJwDYfVrqQRJob9AzaTrpUiD6GHnLuxYc7",
  "key20": "5MQxBx46vRNAhGmYQ9UHUa7YgRkjXpVjBPbgzGDNcpvcKN3QNxpgH1bu324pSfxwTMHqCTivE47bW2DCoiu4koh8",
  "key21": "DN6zDU6W9KzTMJnimbo5QV4BjHRGnLagzX4dCr5jX8bzVPogk1KTjRee9bmBAB4ppLDXZ9bf9yW8D9F9VAWhViq",
  "key22": "3W84RsW1WumAKgJm8Aizvjtf6h9EqZTbeHkfBSYCAqJ2rprFJxMRNFX7mY92hqHKhBf98GLdDfUGotqXPFVhnypk",
  "key23": "abk1PqPCj9bUT3sM6wK6eEtHEXntzKH6Ykf9P5aHjaHZrPMiv1MjrBM1uuCi3ybaeKEoJUMCt9cozTXUdhb3AZB",
  "key24": "5JRGfXCjZWb4AjriRfsnUpU9nLSgDv8faeYhxFSqfHjgW8pjrhxMnHmHpZUCFojeUYXGFdJqJzNDsfdBGQdP3Pbf",
  "key25": "uy84UTxd8bwM7Bnd9WXEKjawzR6n2NkQV2Y2eSaQ11ZkbxZeDPehgVhNQ1brkKGeCWRLyJgwAspUCa8wV8kTeFu",
  "key26": "2ra4QySRa6vFqzDZsxjPRHUKVGYjA6CqrNYHxW2cPS3ajNdtmZUR59DU7nRBWn5V26dgroueXm25ek2nbR1tnHtW"
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
