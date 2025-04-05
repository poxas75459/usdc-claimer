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
    "2DbqVT4C7ARPvRypYH5sDqab1Z2ns6qdj5Dg8X6yYP4RGm8RoTSejqB7d8aTvT1qDg4FZWxTuK8s9CgvKsLYCdGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EuyGm65SpfQzBua7NC26egpprHk8yw1QJTtVabJaR11rcgsUH8reDjQJd2jWK1wT2htUnnCNLiq5KotPerfP3xw",
  "key1": "2WKpaJTUvx7scQTexedS2VXH8TLsNmkHYUrU94uhC7E6ahvf8yjqN3tpPmiLeEapZuerhXrWpjaQJ5FGBPbBbHUT",
  "key2": "2NnKQWSLtCVZmwVQq4gcdK1QygeFFeWALSZPXAmkk1vfu7CyiK1BmcdwxuPbobk7Ug65dfxDWbgw9Y1JndAVKUq",
  "key3": "2JFzQDprhw7D88SMsiRLXz3L5R1Rot91GfF5WtCMr9dNfCpkkfn5Vpjeq3hnabLQpZWp15sY1JEYd3gPGnhAUSxk",
  "key4": "v5AQTVYaNp2Kdb3x5TjV8zNAy1wDz6LVnFPRP9wsGvJfEEZofw7DbMcZjjCswTVRjTT37jn64iAWoUYGAqPjR4A",
  "key5": "da24FSjzxqs8y6MEjfgnLAoW3nYXPnBNd5H7jJpf4qDqMRX88UE2eYaC3KpP6n6Kqmp3UPGcimhZ67wuYa3Lk2N",
  "key6": "E9Grf6UUfLngAf7jfmMBrphSdqegmhgG3aQtmmEgJhffdAspJSNTS4VAwnSprSSpne46Qazc6vJiBXVqguYhYqr",
  "key7": "4NKrRGx7rTb8LJ3vFThuKn2MLSarSDaDh4Q7YJqp1xy21PD15EtKjawTBnhRFEfG9JYSTtChsg8t1a8aB5VXswFh",
  "key8": "5pCABWSZMBqY61Cj9GgLaWQyGQzcz1CT1XWEri5skh44JoHG5SDQG8iYjikYNUAvREPmRBs5BuS6zpK88DTTyDqR",
  "key9": "8opqpN4UbVj7Dsk9uKWp8mz3bnvzKiSDhnrXzL5DpxYw2ecFq4vg7MVbAJGBzonQroZmWnLeQb4DVA3H4BtUrnM",
  "key10": "2uMSAnEyd7rweFKiT9M2wnnSmuCuwLyXMGFTqvefx67vJtG5jz1vHJdwN6vn9dNcKigfXKW9sZqUD3SCVFAimbMT",
  "key11": "3yrpoftzDfSLaXA5Cznn54mWXKecBxot3ewMJwss7QzgsHLWNnhpi6isAvgTBdaGCYiaYV3Wygm7YnGrfePUrWYg",
  "key12": "5onL4zxZKq5GYB5BYzvTcFRf4EYxGs6oyFjWU7UoWJ1wAHYUzDP8n66FvPSpDb6ZAqsssdpCNWoLuFG2X8hAMUmS",
  "key13": "5pK4uYNHqurHLqCu9EJ1ktj6LmZ5UM7CaBBee1T1JMr6hPbxuUsUiYYh6V9DSfoiaJkKEqA8dwRzt7yqsDFYr3Ju",
  "key14": "3qNNhBc5eBKwoP7Ry3JZCQufpxSwkA9cKqCMWkW9zupJy9Uc5bffWET3mNTcncUhc2LthHMcYZDZNst7ymXrbnEq",
  "key15": "2Tzn5FELzBYehHEY6w3y39mbdFbFuzaKKrgBaEA458VfGuskyQ3hAL9DmZvj88anKtm2Q2dt79PEfYm7JXfFqB3i",
  "key16": "cPUfuYYSueC7cukSiCy2Jpf3hRQw3BznXdXjbNfpxj6SCFKCpQec8EoaLz5ZV7snoVqDkiJoywy3diiKqRfdtgD",
  "key17": "3A4Eg3PeBRXbCkdGzSUYCffRyVbSkKKRyYEsbW1KPkufLENfA17fMrkXie8jNp7wWtEiiSxyD8pVsu8JRXGtsjPB",
  "key18": "4BcWs3nMZcrcfAwamdUY16iFiSjHH2bREZ9Ns5QLw6tzFq7vjFLSyRRKk1PJsBwqqy3HqQaab6J462yKwXzWX2dA",
  "key19": "5AqheKyzSvmKrLtfaMkb6YVieNHjMsGU7t9uQMsZXB2nhczj3pUj6YYownoXYfLhSeB3RWp5q89t18XGKsP5awt7",
  "key20": "6TGbTSRHfdvw6yj4Xq2XYsMGc3Xnifqx66fEcdPTQG6zQk22A79Qd3XznezSBKhiaNDbBtfeCVKAh6Tj7zfKscU",
  "key21": "3PbYAsdABSVUsZUjjZxKcjryU3dmEFyXv2Wd6ZYeQukf6i22GyU5jbshaLzcCHUqvfGiUgfb9ZcP3VE5L8uwxNvq",
  "key22": "5TdvuV8dVm24SraF8MdLCmbJagqisgqNW9Q6s8iHNitMUv6Wf1eJU6paRbwUY9rCts1bGDbJLJMnNX5tbRSTJQf2",
  "key23": "3dff99TYzmri2drVUzCxF5XvTQi6rXh6moGwqs5nA26u2ZZe6yFuQ3QHFePA7rsT9G56RntP1D1zG557HhVnk3AE",
  "key24": "P5goTGEPaFkgV5wTiuqYggQvXiKbjBhx9pa6Zjr2MoZaYBQKUm6zYsBjYQEWVBJzXco5pRSckALk7Gd2tSG41r1",
  "key25": "3uCHLPuWMfcVmiTiXtuhjyB8PsPRJqXM2qTpCnyS5h9BTueL7umLprRYGRFJyHsGeTFzuvc9Q2fCSHiASnxBMCGi",
  "key26": "2MZQDdcuthujKKUZZ6KqaCczsbdRGgmYpjF4472pQuA4AkqFC3KP4epD8RgRbWirWk6AVBhB5riYSjZMPFc682Xu",
  "key27": "5rbsQaNp3RwBBtdyStmR5LS2JynaC2hW6CyXn1DKDbEvzx6t3n91FP2TLwfPvFPEKHT9kiochsSHqJv2FJT4tw4y",
  "key28": "5gfppFGaQNVNT8XP7KAw6FxCwSz5X6EZCqVQazt762FwUZqni8a5616x3KHT7cA5dhvUr3DMeWfkXNgatRP3CGDx",
  "key29": "4SA7rgcvZScC7k6Y4xZPzVNwU8ZZuZo7mdFmbHcEKvayJ8aoxfkKjg4UNyJTXLe25Khs4bjN4wy5UdLU2tYqsZVy",
  "key30": "4dbwaekjo9kTptnp7eo9KhfWypecZfE9Tg3mHGmNKz3zAzquDfSm78NA1nXPpwmWqzzP7rhqFhyLva7ZH5RBbkaf",
  "key31": "4rPuagLJHcztNNMnaR6VnPCa41Mdbp6Ln4QMtMA6vhBBUCqo5xGhxhLz6re6mQ2VaZJsifZ3uDLtyWrPPVJUB4zX",
  "key32": "4m4aomtxAw1CWd4UQaCBukyZsJWhbvK5NJFXsokB6DKBofvdy1RXoAYgrScuKgWdXrjkxp1YtHbjLXfZiek65uPe",
  "key33": "WqzGvSYJBvDxBZonNomShL4cpMgqyrotuC8YDNtQVkyNtBoQhwhq9VK3cMruymwDRTLJ9AVU8aYiPFyCXCvZTia",
  "key34": "2zBTZ4dRuREZWjNELBoKm2V9AEs5WW721rxbCCjEyTHwZMnfUpijMVfuLWjMYYNpCtDEgLo85kKm5XFkKyJ3x8aZ",
  "key35": "5eLxN3nbinD7vcf43c5R1zhE5xNDKJDeCpFkZLGgVzMRKbnSqKBbVy3KYyGBnyk6QP8C6CHFyzg2CVctuLFYxmqc",
  "key36": "Gr2CaXuv7nMSow95FkyMud6gditVK9Q2zfefzEffbPT3GHVJ8YNHEeQcbDACqHaSfA9CAYdPfETUK53FmbvY7WQ",
  "key37": "55QCYPJtKrhygJAcqSMMe7r68pWVAuHQ9WSHny8WNjqrYjCUsRrX6xfBEfwnypZS2TuNi6kjh17vhboPZT5dnApQ"
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
