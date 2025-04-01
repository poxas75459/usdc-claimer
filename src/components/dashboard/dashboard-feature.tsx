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
    "2uCXooAdzQWDXB5QRfascDq1VTY7bPaZsU6APDegBhU49NkvMuo6EuHS1Z28AwwLQouWAth2tDV6UvrrTueRiBQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMqWuCrS5qzQMKRssyN4QLJBmtR2LBtY3ZTuMQktDpuUe82UZZtjApskPGnB3JM19HqygudC3dFdbNQYJdMbhqZ",
  "key1": "3bPJ66Mkzxzib7HRh7aFuZdjpe3rHopvKPgYY6ZJJTv5EXmGNMJxdBs37CAUjzoPge2so14Fo6YbJdEw7ekAQXrm",
  "key2": "5GEaWzEUS7aNkEvWxByCcik4xC8qqf86pNnrqcL6kM55Am5aHALSCx8yJKJiXognVTWnV2e139rXR6P7TjZHTHnX",
  "key3": "2BHxJRv2xbYVf8H4LLQEEfLddjgHwcR73wjtvRyxJpp4j5kNJhTS7EcrtXGqejhCUvihfkNkupoZ5mPuejwQhkhP",
  "key4": "4rYXkoWH5QsVCpmiQkhi6NAYy6BXctfxRqGoq4efaYABc6GburYd6j1fLYCAk98jFpJ5AhJSsqd8qtxPpeVx32Qg",
  "key5": "xQfE8nRY6oCWz2zWFCKzcXdVinz8gPGHyNLjXtR6984ry21emQcqLjqwssPRPKjHccRKPnztWgvczgNjqBzCv2T",
  "key6": "42G5QXhaLWpQHaqjoJJCt3DiDdvurzfBFxnWMUwzrJjKqWWUMEM4tsMGNbCvYqBj2QzZHajEJnBxoPazqhu7Gx53",
  "key7": "3sEv3cckph4XqMgxwT7aYViHPviRdh6b6GcfRhYxVFZweiv53ZYmuJASe2rxCw7Ro7NzdXDXgaPB7bUxhnvJvLzN",
  "key8": "2DMj8RZu8iqBW6SvpV36L2jpKN9H2sbMGoEzNDC7T7ZxwQn2iZbHSNV9a2sQxmKxeoMbo1rNCddQ6DXNttK99tTA",
  "key9": "Db4TKgLoZn56VebKk7JQeEvWjdihxZgQYJGPS8uNMXJxQJTytGhiscMsJYzbX94gPcEnB3ZDwsRjjXPeuvr1hJu",
  "key10": "uAnjPzWcg7T5QffeZHSuVp6CjLtfMbrdHSUzGCFrDpBkrEZpKY32cx3jgZmd5FureKZRrJX9Yo2wbmmKhhvPR48",
  "key11": "5Qcd8aF17Kzw6Hqgmm7i7MF9tjYBVe49sbdYNtgGwE6mrxsHgPaeyAam6ukgbAbad9cDn9L6JhAAThGfPxvDSfqA",
  "key12": "5VNDcssyQ2a1ByEUCYNSz2XvmXMPRPdsVN8Rd7BTtewapes3tMidQ5iiuJxhABNNNHpyzDrQb1FVBrAHsbwSwDCD",
  "key13": "3kjoXYk6hEBmwMXDm5CJHB3nYv6psSb5JcgyK62eq3sy9GXsEmwL25Vs1KpXAVm8Yy75wP7dNM4D3CitQoDrdWbK",
  "key14": "4gjay5MC9rjgdUViWUMdJ5TCUocrAeAa1vocyw9gRCMXSCtPP5jT9L2vgwswi8CJaeSRwcjzEy5jG8rHY1c3eBdS",
  "key15": "vCFZwrS3PXWp71zCcBmdzqvtS5oq51qKPX8HfN3Ranv93eGAByqEiAeXyBYJMKF5SwZDQcH2uUEdpDGyNcnL9nD",
  "key16": "3R19yFwRrEkc3e1dpnjcs918StTHdeL8PLZpagzgXynDRXHVEnSYLubYsCeU8BpfaJd7yTQiMmE7821JY9gJ4qek",
  "key17": "5xD1Kjjyv1WpcwHx72UneQKxMCN4GTgeXnUB3cag1Nbqh4p9RjgLTrJEfQA2qALge9h4BR4ciCR1GUEr6L3nWPG6",
  "key18": "4riQu2g22E5ftqEjicvp9NjPxwaZH289WzvhX8ca9y7SUdTHNZ6nJCBq4NZc7PTEVfWJrnoZwrsGiZNwCTw5nKgu",
  "key19": "4bqUxMN7hKHe1XwPzQT8hPUet6iT3pnpDCntdWrDJ3x79y38h8LeSwCRDpnCkmNa8vmaH5BWfJfw2Gv5LfVLXyNn",
  "key20": "7cu96ntkMKcaQVZQtkcFG9oPPUEqYeCXuoZDnmwwSqp3TzwpF6r2Q576YP14YpKy9MrvDk571tp2j6Aw7KUSAd8",
  "key21": "2Co9dB2MmJ1Ac7mAFWFXjph49eFjVUQDmEuZEbj2r91ergGxgVHQYZg6SjnyBe1XC9uFGWtYqDkTXbaghLDrysEW",
  "key22": "2V7tvzecmwTqQBayPRBGxaDD6ZhZ6uCEywSwFhtL7RF4qvvMsdBTTLmPV2e6ipHYTzT4QjsgBDHncv2fPo3rgA5V",
  "key23": "5T7GmBg8CwBpTQUEUBHpYi2zBU6mGUSo8oshTP9NhUVTjFgmnDbhFbrNE8nAkSzAifm7KCbtyM3eNVAuzvesnHc4",
  "key24": "4K9itLUc5hbhHXrxwLGNwwGEJXXxkBM8Gx2MBESG3nAPDT27Lyo9oX1T65kXRMSZyW8bYSEK9ZkrW4nEJAhp2p5o",
  "key25": "bMGreiib7E9mWri7cfgvq4BYeWkFUNwJSEQoM93CaJHZ54SXUr1g4iMXukc2VYdn8cEaBUu63kMT9SEJbpEYMHw",
  "key26": "4tzuinyGsrpzJBk8krZLL8ozddr7zxPhKXmDh8Nrw1VfVJS5BTx47jDZGLL5de9N4P5emvTTPhe4zayYy6CzQyJB",
  "key27": "4STsua1MvW4PAaK68D2y34CaLHXGiK8G1wuS6AVMjfqKWByvftVdcm4frKHyqJWFyYT5Rq9rYUcNcteP9mnVT4zk",
  "key28": "2ovkA2dTMN26trNz4mCeb8JCTYkMWNKo7FDupFoKPZwoPFM8iwdhTh5UbXRqc1y7sffdgqsihestSRNCEo6RN9Rh",
  "key29": "PKbzTMHBUUT4wn8dne4vt1ChWectTgWpoEy62KhtpdvqJbm1vVeEnLGoghuRwhgfbCt1vA1t4GTyd5tAqtGAu5v",
  "key30": "2yGoKmH6BHJ9vWASkJsVDW1nAej4id5zg7mcQJXw6yXfBRoyu8cFSnJg8RPvGHWbubJXWKrsjq1uydv8Xb6LLifk",
  "key31": "25jL585AX41C4MCtPxkTj7BwWSMLpL9vdjTJthUAE1NzmaJFiNdzaYJuLrCvxtNMiNazHDgGHYrKZuuyA5k45UVz",
  "key32": "aeibWfGefztkEQpcJqKPchAK25rizynyEZwB5FvFdVjP6aHnKaRNmsmznQpKEs9NQtQhsrKPTRCubeLtLhcfQwt",
  "key33": "4AbQryYrpTjuss564jLWzeZHipeGSiiHxac377j4VvbHnpxjeQa63hTv4HYmmVUrtfHp6H4tMEqrLXbczXKqXbr5",
  "key34": "62he7T1VNTZJkWu9XwufXQmKraWtttmUnLTeJM8MZHXcj8gjS6a7RRfnkF9V7yLPZkX2hiCNpvuqaeAfuXb9PVjX",
  "key35": "5ksscvJDwQryn1SsZuZjzDwy9sVkgR4UjYgvHZeCdzbnEEWVTrNBcNgoA7BsCDXMBERncRBGEQcrcBA4u5R9mga6",
  "key36": "wqT9sj41nDEjJX5iuk3keeM8sVtn8UH9aEQ3ccEip6DusQNawb1tAABiyknB7mhf6T36iJEG2aVHH3HFnfhNn3U",
  "key37": "FcjhDaLeoNEtFZBbUtMGcveanNFWgm6PRbuUuxLHKrH16wL6MMemn5n8psPKy2EjzHpw2C9VbGWAo6JXYQ1Xp5Q",
  "key38": "36YYbQa58z97VHi4WuhHKxgV6rwCzFk5JGjYjWLDKFwbmXuuTzZEvP9hzouYJF8vQcxReys1JVyts6dsLmocdJCe",
  "key39": "5BbPHsTrKKg33JVeWeFPMnkCqGEH7epQWkfe2pBtxpZDLtaXhUwd4QhTM7MGfYrGxqxAFkg3ohd6J4URXCtcJpUF",
  "key40": "4Pwh1KEBNFv2aUZfXviKmgbaUGFoFfSZw7cRQXNcxHsBLk9F5pfv6gX3rj1uvh2qkyKgm62Bttgf9NXs6C94abxT",
  "key41": "JFFqK6JDiSntCk24ddNxEcsvaAgnEieRFJWdPEKHr8jnLK8PsQJbMAK3GQS7k2oYACzPjvr2RJZcbQTmHneAVSf",
  "key42": "3VMTsmrrhuQMFnAYPhmnSmXnJujPwinVfXxXNeWAnVc8Aby5yHdAfr5LgBWqMrbPLGXaba1AkKoojyDRdJure3Ks",
  "key43": "3AV5Jsyy4rtPcd18P5Yw9TyzD1R2oZ8ufyi6ULojcxNxba3rQFCRGzt3XnVWEdVjx3aHSfnNk9nLqeBx5DS5LQzx",
  "key44": "66qNw3znMMdUVCPKHfM4h6GkBuJFZvv1Jefz57U6p7gWZcyHp1fwpi35SS4vM63GHJBgCy73kh6q3TfWdxEbcyWz",
  "key45": "49KzAhYivZSPoRRH2iCc6717zpZs9nzoHoGtBSzSyi38nrhZjfV5ibecyPDMi3fvS3iYKWMVpgCR1PVikjEEocuX",
  "key46": "5SidSWZassdhC6pfqM1mxzQwLi2SDcC2GSQ9or9T3fihH9P7GCbC2GoGhsKMLruYNhbtB6KaKTfFngQLkomcV5t",
  "key47": "2vmcUnjNohTEY654pU149FB1fT9hc8aXvKUNPQ9m7BJo6FrcrX21Mbnz48uyrNQzaD7othzwWkzjgHf8NgBKFBzg",
  "key48": "5gRiTMk3tjmBum26oas3tXWfGaYto7poMpE6qaNsDcSwcXjbDeX1GhvSmhAiuiwZN6DommkMb6hz4gxAnSJKxKYV"
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
