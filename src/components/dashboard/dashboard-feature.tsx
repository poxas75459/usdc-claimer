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
    "5LPm2ubx7koABRDtEMLQt3tsvMP3zD5FU4YCGpFCF1wZyHE2y4eXQ7ZCmS7M4xV1nom18XDY1BKkKCeSugf61kZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3deBsvwVkbEBJo1RRRdFbPnhbsHmQGjyNaKkSf3vFsnCUazUNFpEkpqWkpXRxaa4CaMBiWSV5MArrsydrfJUMvJM",
  "key1": "4w3xGgm8FVDeJwvwiuttEZusonCvVqgyf6UHxBxHTL5ZtErVq9HgQzQjCzxsz3Ep5At8iDSbhVCg9BdyHARddBUY",
  "key2": "2g8dz9WqYHaMxhcVbuNFYNxV8rvUYRRuKkdxzjNeiyryq8Lv1SqE2NUqNgXphbj3zccqYJCEpZEaJQ5be9ZXZvz3",
  "key3": "dWZ7ZXhzZzDCtqh4Q8q2gNyWTbsbASD1gYzEEa4Xd9gca3tNEpj4KWkBkgf5Wy5qEXtYMEXhWiymKtkRpXXHeL7",
  "key4": "2hCpjqBFz7jo6iHojAp6ESMrWidVMP4geDyUJSxochdpN3tkAPd6trYJiMvU4qVg6Tf3JqxX5P1hKu5Ai1ufoYxr",
  "key5": "2sPt5FLuSS1VAiZe3EZDPfG5NeS2hmPDG76Ed7H1qsmLfciyvTUrdFWaZhorFKeboqcQeFKcMzyDDUuLLm8c76xh",
  "key6": "3F1sEgG32PZY6a3yMfV8qv1NKUjKTbM3baaoyPg14ntibmZcC514VAjUvfxhTaH24Lwrrts2b5JooR1NPFTZaEsh",
  "key7": "5djZdPPwxL1bwR3AjAfT3e1RVt3FT3DMP5MNMEJd7AJxyZT9McCrEhgJTJ9W5gvWLPmyNoxAhePJG5pt2HNeWceQ",
  "key8": "2a8XHFL5RjCLxi4PK7MC1aJTxjjB95kX2b7n3FSCCzXHEmrvADTs3GCn4XfQnX3nAQ1rRQkUKPDw344SXtot9et5",
  "key9": "3bGtUBFZd7yWPRXmbawKjNSffeFLpS7eF4MERJh2tkHzUWvg28548UNUbdUsL8XGyL5VMV27mT5Etn2T5AKEK9Dz",
  "key10": "2sDsUoPrZs5i8s3MhBZuQc2VxzVEJij8FtS1dVvUKyG2LfJnXUJFatGfHi5ZHnbpBTcP5Z6GDo4FAoREZjrp1K4T",
  "key11": "5pfdB2JHxA278wyQAm56oQnNzDspaGxuY4pPzfBoEXnre89rcGcg3DHhsZb2xKAAMHQPHraghY2xnxBcq1Ce9V1q",
  "key12": "5dCwpbHcqWUQhePCzidKVKNuMRijYLs2U3pervZaXjtvvmPmPest2ta8joTiMc6AttP7FEWJE8DzuBy516Wjghv4",
  "key13": "4R16349wTkBKnuhdzTkTjZb68Hczn3vZduFwgNzqXGTUKh6xRiMRFfgP93KEveCUNvj5JaVpYxRtJ1pm8y9iHR1p",
  "key14": "42MghMPoJebzYZe4U3A3gBD8Mhzc9nWhaeSnuyPtgW5QfwKi2UKcRuotJzTXYh3j3YqeUZ3NiJMjEnAu7gLVuVki",
  "key15": "5cxw2tSkXi9PYzwJHxoTQCVBfJ11mgsH7rE324wikRnHBGQz6K6mZnou38D7J8EM9v8tk3eBvR1wqJYGmKBUEYsq",
  "key16": "3TY9E4GBJU1uB5V8M73C7N74oLpUMqb5gYC5yqoEXqqwxdNiwS3XgGe9APbHqimEUwxrxkVhqLqXys1zgs4ZJvP7",
  "key17": "49TJncyxmQEE5jSRxbUGe9rXjq4ecd2neQXg3X4ALhiGmRA8uUNjGvJroUuNBWzcp687ZzVuGTMck1Qd3tWthCd2",
  "key18": "2QrX1obyyjkKdLneT264ma39YTMyTJQtuE1DveDbFX5dMbFwcuTrqXmz7DBYrtctuWwmZrawddshUEvDhLfGXUG8",
  "key19": "24JMQjPUbg8tQSN2RzRmkqnW81ETKkYWHY21cD1SXkmJeYV9HKgBzFELdVajrVUCUC3ezVXXWUmMoDnfP7T7eJUc",
  "key20": "5orWmXuakwg5qBhEYz7kEggKy7CA1HhNnMS9ZJCBxYZMRoeeTRskCFeg2rgtP4qoReH9USAeZBFRYMTuganfAwS4",
  "key21": "3cpHYwuWB5yr2uPRBK9iqh7zo7R3eJF4xeS8TqPCfeUAse3r66afH9Wf8Ray2R5uZDHxVYkKjhHTEJVM5B1ezSKs",
  "key22": "2Vv5mhdp74b7AarZ9fHvwjdThZ4ga3mFfSJQEWYYdfCHzYCaPDqpUHsgPftJBG9vxiJRX5LoPw69rtjNXPnRun1Q",
  "key23": "5HFiNNwwQXvkwhJt2H2n6nPGXtTcMEVCGUpgiSrvPSQZpSVq8UHf27Ewwmn1tyedp1JYsVTw5jtvmgKBNHX2orYu",
  "key24": "4SKXQkYraUnF3Q8GjjR8yNKjXAi9LLirfAYRJCHJ28rBWGgwAvy5G4hVCTuAeV3cpGkVDtPLYE7PPnhkGzWytXoK",
  "key25": "3Y3PhL7iCDV3GvPU4sS9aVrjzYgjpw6QKCWmZdUinasG43BAU2AHyoEzJ2qE2QLgssmmaXVDBNzWkSNXFeqiSZ6y",
  "key26": "Cf9Zf2UVpudH1QudK2Xxg3EEZ7575P7TntJtgbVNNQVdh7Ndjd6z6d46YtWFaaaNPJBKvnCpb5bRrS4xeAn8z5g",
  "key27": "2h2LkDTq8HZUTquYU2gf2hiZWM4dLvDPT4pLhDq8oGhXn9XMdEfeqdPBdjKQUzA1hXiDPn8gNFH7BXz4pGBhjqpC",
  "key28": "2u7W1BdXJdcsdawtKqcx3MwCjZvsP3iuGeqScfBEUCpmG7jRW9Lc8RNmeqoUcxviEAKhHs9r3Lb9wXN33QDVY5Ry",
  "key29": "4UsoXPRLEzeBwoABeXKbTCikg1Q8QU6gnhLrD8FEE6F1ZhDraHt7a7pTaTWWUtY3otKdtWq6cWDEwpaUJNLUyN6d",
  "key30": "52FCRFLe5iG1ggd11ueYJuUpfuZ3NH5B5U3zY2Uxuq788SY57heAzKYXUHaNBykoDHBFjPaPFfKFGjq6oZzRKbKv",
  "key31": "47AFTBcs5EgF6jauKW7bcX4EAL5mEMZGUEyKWnXe4MqG7THynf9wp5dkY3M8RBCypxX5GAeX6srWWVMwjdrV1isa",
  "key32": "22cmnX73rFjfrMTvuHGSP7Tn2fVSS5gpruEDQ52Bmn3aV7RrDz9GRF88m5yvzhqKMibkvcgqruAc8ypF2LZzeubK",
  "key33": "2Lfch9sxgEc24j6fYzH6sWcg83Z3cQKEsF9wfEWX9yQeJuczqyze4ENiUqZFTVjymTL1NKgkeL6kJuv8wxnckp58"
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
