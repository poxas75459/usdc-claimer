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
    "6kgyhD2kh4kYAht2YRRErzcMVE4jo9UKWxPXVCupZS2dxyzYwk5zL8znoPnCwh6mStwjuAhL2wHiks26wbH2P8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVqRefboomfYB7cJTPipMb3uz4T6WFBkDhTHJu7nu4u7qvM4XYbQKAxFrmhR2TGX5RD15CsxTa8X2grBC8MekNp",
  "key1": "2emjsDcBLDJ2a1f7GdFJR6aVNyECgUVmLKuKdcNnKiuk9945sUsnBVauYEjuLJEGd9JjYeayDnjG5bPCNBkmxMAf",
  "key2": "48xEJFdXtNEEt8osjFMWxRgeQhxensVzmpgRBG4gmAG98CRu3P9XHBhjFGjW8ft9HoYMvnzZr68D4X5yooEdk56G",
  "key3": "47NpB5VdKjQXwfRSMn5vYV4mGgN6qw2r3Q9pGBUkr1bPwgH1GZmeXNFvVVHSkCJWihpj7getPfWe5hvCJQexgAQ6",
  "key4": "CavsavGwLu6qqXABCW5LbGyV2YR7ABiKqX4JHP5XwhXCFtrGrKLTDPVCzfmPoaoWohsq5dKwL7P2am45MzUrwdk",
  "key5": "2Fum4fgmvyZsS3Zj5ifBqKhjGzeiDCuvbTGcMSAasH8JwK5cXkXKDaemRytre5nt8aNU6bVbFfWVjjhx4VS5pzFz",
  "key6": "3UWnLQaTPJHVqsFD8BeFwnj3P2MqfFLuZk7CZci6CH3bQWZka5g8g1ChMQs8heTjPeb1DVeg3enSTGpEwFYEPaEH",
  "key7": "5ycMbX5JXFN4ChuS6G7ouAunfccxUTH7uvNj5BK9Co5qD7aZyxDyHwamabXzoU94kdMTP192kzkdEJ7EabWVLqUH",
  "key8": "2LAmVESSDLQoy4b2TnTuSAwr8zJtdDG7XA2TXBTK5q1BVXRqYrawhd89CJko8W8jAdoz4uzruRXWp8STfLTB5b4c",
  "key9": "4qNkQfoRYCSDiYjbJ1Pit4JX6Ce2cWSx6QbAhogx3cDNhkgQvvjDU4x9RDvNcNRi7d8x9hzDWZxWg4s7SwYbJRGX",
  "key10": "3cuQXzq26VEUgAjbdHvkBQeHGGqnLpkZDLeWj8RxkpKkzMCeUX5cLk2TB42wAaDhezroD2e2h81amwLxSztWh2XC",
  "key11": "3Vwcywu8WyFyL4JuNaUQ1gen5nkXSz1CeDAxZjM6e4HUPjL5iULRu8YpV6i5aXx2JhTJkV4dq7DjFVgb8ZfdwTdi",
  "key12": "5AwPHFXznhmwpLYbNVBecFZ3iDAWTaP32zSHdBGggGSQuUDTUXuZMRaokFEVRknCok2oTs3WofrBsc7jyBCHGWV",
  "key13": "5LNBcno6KAKRUEEjR5Fkt5YhkeZgVpua4UTp3dyaGWVnRdXydZQAMD77fDKtQoXKG29psJUFwrMMad6fXM6zRxti",
  "key14": "25gF7dquqQjLoFgoPF4scVDZhK9N6CN4CNMMwt2CAn6PgoKR2zLvExEq7cF7SaXCkTtdxzsYiP36ajwMaCVpJdzZ",
  "key15": "3Rhfbcc7fUFg28H7UyH7hZJygnfhuNCm2doR8NZoJryaxQx75y7nJvgXbWf54LHEPR3MozotfeewvEfBqPZXktCw",
  "key16": "5NRB3KiREdgJzvCciBtd9pUQgNfZWyjLXC5gpUxDfvKfr2QBLkBxED46M4dGVCevvhTBVbQPLEZHpNKVQBGUQcFr",
  "key17": "51SQi7xeSV8ccB59TPJ33P81iG8jH66KybBUntHBDN3g7FR5xHLeFYZyJQgRGXR4QuJhhphmDzJVqKKN2pFCPL1V",
  "key18": "1FAqgFvyA3o1vRuiHeDLz2xvi6qcbkqCtsdgtEABJDkTWEwnvapnUDUGSRWdzYeGDhXUYZVrFJR95dz1zB9dEpv",
  "key19": "5gZJaoPLhnTcGBBpsPvy4nqW5vRR2u9mKcKnhvtedKYJsPU9d8k7eJKr2Doti6SzK6AeoHPqjt7pL1kwnA4apvBi",
  "key20": "5okpribypiVtYnezB2j7iBaPNp65SyxtmqZmtiiGQDQjgBAZm7NY8RhHUngk4SbfLr16FeZ3ddLDeaS63HGEbAnU",
  "key21": "5ryyym3z34BZt2dk4fCZm7fuzNvUNxJ3QQQ83nUasRuhWyjmssXbzZvSMZxxyp9NnQmiKmHGeLk3W7tZdVoQvF8b",
  "key22": "5tdqKgE62S2SjE2ZPzHE9HxXndvDXFUZvLhy5TPXztqYQm8iKb3LQxHkDJprXTqsU2rzex2sZG8pwtRomGaVoWA3",
  "key23": "4uw6r39J4KpLJNF4t2fAhJjX9myXEWJDsJh7MYg2FsKvTnccWUGyMMytXnimzyE43WEJBzZmBPf3skzWYvS264Wm",
  "key24": "5XhypXz1E2F2tbqhPmrbQfQB1nroHJ3aA9gQRhrvH7x6oXjLsUUKFJtfmc1dhf32zK8nkrF711s22L8zBHqs2HfP",
  "key25": "2UcyP3zAAxng2RTDfPXvPiNsBeCa5sNMbstqbBQPpsiKNBcaP7pgHoBRa9XFzp5TXEhwyM5HvF2e66cBSryEnV6j",
  "key26": "5xdT9a6BxEirhecN796abBHwJ1VAfSjcuqsbXM6KhK3bYoNMGxKz5M9x7mDCVNKS6LzhEz6EYE7xgojdFgXc8cCN",
  "key27": "3t2DyujhpH9fZsS7aSJEJcFg7rxWsLgRsXbc2bCdAJdtZrfANSCW1SbPypycEasGGdB6K6i2aJv8RLBLvft1JZSt",
  "key28": "3E6nBoVG8NG6qUhF8fcoBPEEDjojsCdJVBKemwWtkyTKFZzSfH2C1JouPCkE9LUBBC1AyZoit3Z6h164NH9BH2R",
  "key29": "F3neBq5vKwT9LQEePu8QZh85LqnpijZdRDXBFkozM9sV8UPnqk24GJr286hCZ4e7tnjVm6n54RmNJpRHen5jpM6",
  "key30": "5J4m2Z71BjkRJeMAGtEufw8mvi3qLfQx5pU5LCZDjvQnaHYPWdSRhyyks2DsCmeo6QVq6wGcVd74Euq7hjNWkehC",
  "key31": "4odoyTeH7V3U5Psqw8rSKZvLzG4DPePnXUWffTjLrPQ4VyT1Mb1v6xiLcMuDpCEZA3g5VkD91beM4BkvBQoJv3B9",
  "key32": "5eovFsJfUakVuDj1jodMj5VY6cgHwGSn6XykTaZmtQUvQ1UeAsAaFKB4ZgYv56GXyB91G1GKtZNCaFLAkZ7QELtx",
  "key33": "uvigQeJ8gdnzP1NWAMGMJMfWxvQ8YgVG9WojzWeUptJy4XmvkZX98kvvqgfYEjgXry1MpjSQGuA6DZMqxjft6eB",
  "key34": "3U6TvRkrbMnjpYDEZzJQxxJSsxEcAYbHRAXurs7USQ8wge9v2kXdfF9ReNpdosUJtowbYEJ18AGPbR7Lnc48fC3q",
  "key35": "2D7TsN1DHSeGo8SWPV4FB9eUGbcs3pToVD1i8WUzpjkzwpFo92jdLvUZLuW8RZT7CWme6LhurYpxa5vsH38zZrry",
  "key36": "3TvW95pFJkNaFPy5aoZW23NCPZkHY7fQXYqhEV4JN3UdmJsc3hYjXTf8vvNJdBWS2NMoFq4bRT3Kym9hGpcTF78E",
  "key37": "5LqfN2bdV7HMcZSkvMFHKHw44CcWaBjTWVCzXdJkv4FZoe7gZTSsphyCcN6E4kt1biuRhAcUUifEdzmLCCmZPaLa",
  "key38": "33k1FjUzhLbEDYjcrVYnDupewDVJhjbG1wtEHTPy8xc9yErppWZobYM196g2ypbZsHiM6g5yY1tHYudgHgqNFkgh",
  "key39": "5EePJtMbyh5DZ9ukqtXFLRSG4yxNGpGgVxXQtqvSEDuqJ37tQz8iaGhEd8wT5JWVbSv4s9emrHUqnac7h6zGMRTA",
  "key40": "4U6C4s4Kv62X8VSymwovGAzduM7bUrdK6dthdLnwPTDYfTKaoBr7M5sve74odH6VqYxaw8Wm98Kk8FEaUZZWC1So",
  "key41": "5vweeDkeiKMf4gsDqPTDBPwCmakvhN95iGhGvE5ZbKA9JmfHHBLne9RSV4n42yshVh7nCTPJzhabeKtZybDsByYo"
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
