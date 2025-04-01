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
    "4t6crW7gLKAhYKABnv2zxxUBc2gQMKVEo4xhnUykPUonBWtaLuvASY4YtocVFVFNoVx9XPrioW2vYrv2BGbLVh3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gP6N7mdox4FnDWTuRPxgNrSSuDDNBAR4Z8CJDMbAy8FSFc5yr5GQihnRQ6MncA3zciPQYWijrDJQcQZqrRQSSbf",
  "key1": "5tPKUVPVofMYjf3TJ4BTh7VyAj2TC9oBFJpGigMdPp3qBiNxhWiDc9LiD9WJYMmHv4ijJiTouR75UqVMrz2zdHRP",
  "key2": "5fKk2ogGagLHsXCRTTiCrptseWUWMiCcWHckDBwycPsJ1ucLZHbTA9gRCNCacQWCZEAFVxk3pha2StNDfx9dXAKH",
  "key3": "3Kqs1b2nX78xeXzBuoJ3gLdXKb7VsBUujfbx6UQ8sPZwRjT3P96tjpBoBtkiSEhqjzb7w78AJGSGpBKityx8dpTw",
  "key4": "3gVyAzHZduH7LFmYW86RQ83vgBVbmwLYRXxjvgctReXe2wYLLYw5nrR6qRvHrzM2pdMkDtLHEHVoN78xw5TdGuC2",
  "key5": "515vw8QddquDNhErM3Ydr7MEbERtgfEjBZMNMfKQFsDYHSBpNEX5LyJ5PKJDuRNvUD8KokzLoCpJsEbnfLU9RZd5",
  "key6": "3TFt4Aawe7Tf1AvBDuSqTDujHv4K8HMFfXJNYMPBh9L8NFM8qAxRLrJHiFxd1siJZMcYCoD9REBTqmBsqn8KoCuu",
  "key7": "3ceWg1XH4i8NuN4AvLi8mi2pGCRaoJfozGgDXqw3PGT1PNCtXiGPqHTXFKssGFtiaNiEZwovRKDSqMCtV9cb7ixe",
  "key8": "2zjCXm7FYRN4eFkEVg1xvYm1QLnYNSJR193K1HHrzPVs6BanrjC65ZDSetokrjGhzXsa7QvJEVLUSjgstvDzvcmh",
  "key9": "4yrS8EpWu19iJ1DxLD64k4wXrpHFbvu8Fgoaubc8QdUYXdQZh7KGd7N7zscyu5LuPrCPfq4KBwHLsAjw2rwmE9tp",
  "key10": "4JqJx5gNYtLRZdPFWz7qL5jFz4jthtN6E8HX2WqHVhMUeALeF7v8Qohaav4BV34RMa7KpXHfPs4w5ABNAeN2VnMC",
  "key11": "4FodwZwoyCqaouNb53MXdDT1HKyjEQCoRrnSazuZc3Xrm6ZydpfF46Gw9nFR8R3W6fBSJMDojXq6ybzTo3tLekhB",
  "key12": "3AGKiqsCN6fLRTXUwauoRGjqMSKBVNeL2sXukwqAVePaWLY6X3dMyUrfR2nPpAm2z37Hr1X1TTE3z39Hu8NzYGgP",
  "key13": "4faUqh2p9GbBcvRqFuZJ4fFppQ4qnXYhjh9KtMppLmFBbEowrRR2hZk5hHbY9wDkfNdXkio4uwtMkg3e4vQVS6iP",
  "key14": "5nqyqpw8V2q9dwGfLg1B8aAwvQMdyQmtA6hTjPLHEizaCMHBrCmhtDQB3MvBNEbhFqGLxp8g31U8GHskcQf4WsXM",
  "key15": "3SHKaNfKyJHPn5qTycjiH6tmXFvSkT6aj3efUWnHoJYNv5Yqy9Ydz221SpoWm5Nc6VXuZjGpqKKHR7UNLytxwiX9",
  "key16": "2jyUjnef5U6xGQQdaMuGjPUXnmeyQQz7HDG91gWWuPD1M6g93AJr2jZvqzt47KbWihwTV5e4uyfFp7BrMDHcEm1h",
  "key17": "3UnERweh737uc78pToz9ctYzSniPvx75AXeB5jV2AHjeX9Wk8aCg8U161nXWJh3rGkacwZPFgCBXFgwXVgqiwqmf",
  "key18": "3fHjTnpGBXLApkhxW3WbJRX46XhKgTNKe2JQD86dsDCKphninK4Yvs19Z9W3298LA42GTEzy3uFVezFz1ZRAigHT",
  "key19": "2uKKz3Fnv2rcPcEm81C9NPvif1taAzKJGX5a4J4yVC5pdSQhPRyDkbwDsFgVqApdCxhSMKpvRKpYGEKfgdVMu9o2",
  "key20": "2TLQYtSJSV26Cu4BNxvQtBSHkNbJLQVYmi9M7nSR1FpDR6cFrzgZVBN1782jvWQRoCn1yXwigWyqxtnRFmczUcuA",
  "key21": "5pzbYBLzy5ege7rTJNVCbHcQ5Qqct298GfNz5dBaDuhhVcj9ocQ5BHaBdMpVbLkVDs1tusyw2xx8uXF6Giz1mT5v",
  "key22": "2T8k4o5ocZgm9LANPM2nCGdAGpgBM2eyv2tDum2WLps6Dend6q32LNAp1p5Jce2dij7T9RxefczX88GMh3iyopjc",
  "key23": "3jPw7iiJKpT3CJNDPBVzC2gVpaT8AySmUjwLA7tYaeDqb3HFTqHjn4ssrFpDp1gzUan7dWCHFZjT9Uhoc2Q226SK",
  "key24": "37GNEaV1fbkAQgoR2AZRqSMkundHwL8fv1dBjvPa1hL2hpefCu8Lyu16bbarhBLGJSDafVGkGgBTop6L11TYqLB3",
  "key25": "5gQBHDXz9uQkb3ibf5myEigEgCx6jwTK81VEJSSeNRRjCf3hGFsXi7r18a7yVUWinLZUHNzkXAJEUDVM9YdHPsW4",
  "key26": "ekmGFRQqLU1eFTrEQzN39a5W9nF41Ea69KaZputw9cPGStKAFszakvfciyDzH11nUYZNRT5qr2x3zMgnErxvSqJ",
  "key27": "2v9p1bDgeANY4vp6d1XZ4KPFCLkp8CPbNhPESTM5UNSmQXoMG1FGgicxQFiobBJkuY1dMn7nezSTgGywKN726vGj",
  "key28": "4nba8HfVSFVorhoBVjqM3cct4Tw24MgytGgSJD8d1PpsPhpbdzWtRouMKawh7LiiCifqKDtU6VV5zk3uWTRKhMf2",
  "key29": "4TKSTM8RxD3APMNVXsmJzedFgDW12mgFoEFQBHD3yShrtTkdQzp4Bu6QBjSAPZFeZayCZM3kgmxLMRrrB7XVfWGJ",
  "key30": "guXJuQV1U7xDKBDCcCVxkwDWvGHn7iPa9FZh7SDc3QryZSRZXgysq7xHay82HntgcoCDLQbZPBvMFX9yy2GtxJX",
  "key31": "4oNLeEhwLy6GGuUkfRHnH8jRnt4V3qaGQfFvypnJVQnTetQAj7X2T7nKEqZBvQuTWQv7m4QvaNE3NZx84vXx3ReU",
  "key32": "ubdBxZthXCJJNrTbCQVtxrFkGwqqEankhRvvoCtYgPUG9ZmjyBw2gpsYggNbZYxgd6mpGjrUNbSYgSmYs2k8zeb",
  "key33": "5P7m7g9Uuj373B8bTxYPcfj5V9t86wKMSLKicL3u3aYXTzg1SvEhyo4LHhMbW9Nb3BZh4d8wPLYMrNKXRg1QAkrX",
  "key34": "rgLLz7VxRwgxNHrv6vzz2qvXi1T13gMrYnnvH3cuoGazUQ4NUY41yYJCYxEFsJMsTauDZw2rzvCiu3Z4jX3AiCi",
  "key35": "dtVTSNPorX91jDngNy2zeNBifDcgBt9pP6f7CLeveDHGiEFhASmQ6YUyUGt3CHNsRuPC21cagovRrjWLenER9LX",
  "key36": "MwM638u7wUxBhAy7ccZodwngLL1gGyirjrfvp1SmGo73cw3BAqDVcKmAUePQPtxL95gtjQkV1kpjob8JeofkYf4",
  "key37": "3G6DzJFDSZ9WGPeeD7jnYBivoWsNRBjLm9vLSU2YM8SkUjBhdAvPGAMJJLYdCwVCM7eQftf22a21TKbruv2tiusf",
  "key38": "5ftixZXysz7w58UKhErwqbnuNwEgvBN7MXrrRjj2s4mNAkKWg1TQaYE7Czao7Py2KeGDzRuBRa3XocmTmCv6bTSy",
  "key39": "5mzrAtrknihyM7nVMWp1iuqYAjurt8wN8pZwheGAePvhgrTidv6LAfiTsWhzB1uXqn2JgL6XgsbXnHWw4r91nbXJ"
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
