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
    "2ipKqNU4Cea1ZfxsPZWtmhJpAdVajTp9znNA5m8eKfow6Kj24Cz4CsnFJtuj7D2VBsmEM7C76mVeDAvZJcXENnk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GKKndXrC2QwzkXxngtwdmg6LtF1WbgJA7s1oTz6fQ4e3VXc8wJquDz6oFzDEzPQKPBQ5fLUCoXub3x4YLVxKX96",
  "key1": "3detuh3LpyXQ9Ces7gi5yQkgqNNbJojnHH5pyeJDF71k3usKnCLzhaQ1s28wRqRSshQxe8jBjkfUnEiDiRPHc97R",
  "key2": "3TceXhn2wbXHAkLHZGx1ShdFwsG373ahEGHLV6CTU1JLqecchfXNLfAcWKiRJCdzbZC7q1hJk2XF9T7UHhpQr1e3",
  "key3": "5x8BbHuai1AeC3ts5Bim5mTMRrdBTtXfNqnkKYzTUH7hBsvyAeamb4HBUTKT7kgjMgFw69bNZmrSDQuNG8txaLQ",
  "key4": "4YKjt71pXu3VEpWNjTBvSpYxcyX2Eo7xVJJsyPRR3s8saXQ7GuukCRir9KYveh8fk7NJBxbJE7z7koZ2H8YQf7Zn",
  "key5": "SRUwAY6egYfHS8CEH2KqpqE1P8oSRwW54bH7uHGNCKTzpngtxxGGhZAnDgqaL7uyH7SxncFy8fj6b8GRhtKMRTT",
  "key6": "28VaPWNvkgZ9vUBpNq1AyxWihBTPNEywsMvZraf98MBUYb9D1wwE5NTjLmC4eTDD6aWJqwo9yixfY6ocfhxCAYp7",
  "key7": "4tbTfpRAPsnAEHgngr74Ae3TmRQBWiquYN2uENw81T1VbRVo4mpQ5tyf1pvAYdXut2s7WPMguZqC5v1GvjJwumgF",
  "key8": "uHncHFVJmSWkmHovAwcP3om25CSFC9ep7DTjoS7ef6ohCbVoS8irzWSSeSTE63o2qjKthixgbUxzLtdB5qUBaic",
  "key9": "5XnDmhUu1u5irwfkHimBALeE5rQFQ7WNBModbDXohssEKmEVeafmUfAZpZQjExGAUxh36if47SCDLFuom3xakV8h",
  "key10": "2RJWyYPZdTeRYXf761yTq4g7JNStW8m2vRzVsVzJ8YtU3t59VGNSETjgeWAVPmb2g8n2Ar3fRj74EMiw2HzXjzVG",
  "key11": "4XbNsoLUfnLExvvvX4hTCy92BmFsGQtrBEsdEND7Qq6W36yFRgQ1TwC9DGmtdfA3jeyEarBZfndnDrEz5pa7Gm1r",
  "key12": "2fs4BbdGvHXSCgMb9Fd6Bv7tSL8FVTvTYBLtGUexP3xNwbU1mgSzQrUKhjJrRtjKcxF1LRZVQKNchyYheFnJmafv",
  "key13": "5gw9DsayVt5PNfwJEjj6XRfEv6wbsNjq6SSpXKLxrEpN6mPW86tz4xyZP4rxqg7R7HcB1E8CgDHdoN1NAL11SxLA",
  "key14": "5fgDz34ZNwwP5eFrKCccpCYduZaLsnYbhvW4ZruvN2kUS1qppbHt5erJ4Qxg6yFpC448xmSe93SdP7t9QqnM7Eow",
  "key15": "5QnqPgzkLEaqwRA3dnFpaDqRLHdPFFHWhzQ94fRqffHatYQMom5o5tuFw6fnZCgVRuoPUmhZurS5EQ53C8KQVmCr",
  "key16": "PoRVyLtneP3H97HkyvDw9uEiEAjVUUAovpLNum6F3Dm6tTRsKZSGddrr5KUZuhZ5YLaXXbzuJCqWQrzdRd7gNNw",
  "key17": "4kfJNuhoT78DUktMG3qPjSxrx5k4M85jzP8G8SuwUh7Xm3CumxzyGppHAbSNcYy6fBXVTwSDngHGR5erxWVmVytM",
  "key18": "28UnP5RZea3Q6Z8ojE1r74cjBzSp5cpXZwyqfgm471EDZpkcQrdL84Qy9xRJq9cyoqazM8hginBPjy8x5jZuo8Bf",
  "key19": "3PwfU9frHFuLeUBBCPMowFtQNnEpnSPwhDSnFB65dea1rphUPTqd7NcLq5QRQA7MHuBzMYxoZZp2chEio5kpuVXx",
  "key20": "2EQbaV5TqexHg8UoMgUPg3rtmNWX4rmD8FcwvvgVfWmmKExJvqTBBDtkTxcFhBBxxGdT3PWhTf6xGzbN7R1kyj2h",
  "key21": "2qNTMtHBCzhqecfzVWrXqAExP2gtZRNVqYwh7mQwn78Epw3bEJYm3xXwu4sJ85eR5zXvyvnGsnWBxuy4gejVPpx6",
  "key22": "36mw6EobroCpZfX3mecV1V54mmVkuh5yDrj6MboWEiVWPvh7qhxZxNkSbKoo3K7CTJAqPtivqBSwtwxJu4uzcbR3",
  "key23": "5uR1o5NtSSJkY6gAsCZFKPAvCJhPvBYvuiekGWHfLMwruQDu4j46N6BuUuuUhKuvZ7h4QSxCdhhAZD8XJTroYZ72",
  "key24": "42i7QxbL6ant9rDvYQfKrtJKNHrqUfNRFo4rgmwr8cgNcrqKjX5SsSQvoJCGkXM2VfjgWh9EZUXk6LArXwzviVAh",
  "key25": "3La6CpT1Nb2rznZtmsdgBEkKSvW8AYL6Yyz9K33ppLEFVnaE1qotDLU9pKqnyYApUoCga97srfJ3x8PGH7ihMW9Y",
  "key26": "2zZbdX1GSNPECP4vRkmJNdLuAtyDj8EgXt1r2zKxuWTtAnyBjSF4k68YmM9azqBdCFEwS98rEnHE7AvAovBj2F9e",
  "key27": "62UNKaBq7Zg9mVjXa3YfkWjPRDdpUmFuxKYtiVpETcU3EVjYvWsnRw95ur9kbx43drv68i1rPUNCLiZ6rsiKRyTt",
  "key28": "3q6oSqh8xTW7TFon9SLb9pM4eABfjz43iH4JNeMXqjCUqKENRbJmqudbfrqiWceQHYrmwFmgpQAdwNeW5kdcLjV5",
  "key29": "3vS1Mc96ucUFFzQ8tLdVuuuyAhQZoo96NvZJSG7v6N1RmZVTBLyLWe1uWJG2EPceJgLXLxa9bvtKMCE8xJsWbDNq",
  "key30": "288sYv2n5QJYN4naYsW2wroaNMAhMRoicZ4mNtDj3LjHN6GLeHHYVuVmB5wp8BXasqn8m6Mz5TaagMgodqRXDtE9"
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
