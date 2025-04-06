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
    "5pMguD5TVC4EmRiSZgaTVgV6dLoRUY5r4djXU1jVRUfd62iMEG22eDyiiJnGyr6EPmu4ZML6YYA45gMhSRxUmyNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ha7LCZuVSMiZ6JyFfTLcRaMxN3oFoXggDeyStdRUz4hEpAsyDEsBiAEFpTSzyuTXWem2VvixYvogo4w7rx8gXXH",
  "key1": "2TZWRnik7VZU9BgveAjtuPYczE1owoa1afz9mXYXcwj3ajMQtgyexFQgwYSA5V1uHpnRYNC64qTGzBHmxjeaPkwj",
  "key2": "2m2JN6qNKhxx1GyGA95Hi8P8hvyBWVY7ndscexy4wYPEAfkUwJXiE6HyU9DRsi3pkPwnuRHa39RsxvYsVnboak8U",
  "key3": "dx3VWzLmjURRJyWfsXtfGuBB7QaPbvVQ6WF3c88cFGSKJsGsJq9vXX9Q1rsU2iy6kSBVQq7rfUyY3mRrAU56wiV",
  "key4": "2JskWhBh43ZCJxFSvtrPHXNdNRw2ZDNZxyJyxKZTG2oMYEEKqjCYqMY74eUyWRgkdmQyLWzCyRD1BYz5J2FZVssG",
  "key5": "2vLQuvf6rf1PJhHJEFyqfGQvwr9zzTnVxUULXwzK4WpG8ogpC4WdFmrZ5WDfGd4hpT9KRw85h6GSwZ5oYZBPWnXa",
  "key6": "3TqwFSiLyeqqsPqnABNi6EV3uzwfNES6DeUMRxTWbAiZPQEXW1Pfw2cowicq4HLdgi2f31CPLPsggkwGaMdAG93W",
  "key7": "5eu8jZtx9PDdZtgCTeexSnnGDy4WuKgb88hmYXbdVy49ZQco7MW1zs1pKyWRhnZhmReP6RZtzwrEL2WtpJcTrj2x",
  "key8": "VwwhSnRe7ePZuhtfWFzEAYngBXBoiQePCrrgLvu3rfkf5wekj6yoLEbwWUQiYLxKQrgRt7ZpJCLGTLuNwChUm2B",
  "key9": "4qtq4dnnXCqSkGj8PyxiPTHv2Db3VZnXWH8zK8mTUa3y4FCiWGe5chYCiEwB4FTMzKjXx7WEdTMmSzVfyujsr72p",
  "key10": "28cJ6rHYnTqjyLdTWdwKkuYHDLara5Li72EnAoaod1YJKn8cyL4U3gC3zj1xrvApYXo89vaj2DRef17VeNHstsut",
  "key11": "3YzwMwGdPKaDnhrzpEwqpMNx1fzqetVpJBv1jKGvg25ew6nVny79d2G4BmcjzaLkavN8ShsbG6bbvRgnDgEqEJMn",
  "key12": "3tKXJr7R544USkqeJLbfDLr7WfGfDrCyQtdCMZxQaHQ7Wnwi5MYGD2wkxiQmdXck8BrAFbRJdbeqQCRr7UmFyS3B",
  "key13": "5T6mv7Xc4stBCu76CrQUiEmbjEdKoiSWzbCB2WDVdxwhcQVBEpPjpvNJAE62tRLFXni5MsTZK3FhdSdCdSPjqyC6",
  "key14": "4XvsEiM5GH1svXYEQmbVqvnUB5snodoqDXhNm2n98GWXpAiSZG2a8pgJLww7rcMdDcKGu4P9dSzSLEQuaLciGjns",
  "key15": "2hbYPKhsf9PPeVpiExDZgSveijd2P375DnWU1amyLdpmXYSNwmATQT3izKyBY6uNUM26zvvBysN7aG6Q4nPnz3JG",
  "key16": "2sCgn2V5AEConJmW9iD2FZQMj7B4Me45NhnU7HHtSKo6WHVvi913Wmm1GugMEqExArFWo4nvBXWZu9AHcQ7ey54",
  "key17": "2cqUzeD2w3QwUGJvwRDWEwXRVbmwkHAAddTzZb5we67b2uvgMBekxfLP2TGM34NqtPzHveP31Y5hmEsssDSW5XNw",
  "key18": "E14YPFyvM1Qnqnr6JjuUenYo3c8Hd3RGECeBTQCXhH4mRQ1pzwVYfuTUzLedRa2fMkMsjnL8EVzsDKMAuTjVDuN",
  "key19": "59oYWTK5gvS3B5SFYegsLyPh6DRMCHgQzPrEg7HvJSvgyARhohe69cjBhGEGtZq38QwiACiWTUEqh9gtzs9j2qdx",
  "key20": "5PwypKMZVgWid9VckKsR6bb6RA86GQBYwV2Q4cuFvDnDfiVqqthr9KbgRJRD1ArB1PaAJUydrpbQEzWzEJwQ8Npg",
  "key21": "3VCrwsVsL4Z1gRmH6fW4ZKjsG38cdHogFuCYncN8kAGr2dpidsAfTtw2g35WxAE8S5DAWfda62RcH9hn6CCnE1rs",
  "key22": "4cvMj9ibH6NVjfMPMJoD4DRLsXEAN1gSfZZjCWQ1DwuMKVNXtWYp7RnK2tjb2wHEBsSSDEfpaHgJbzVs1Z3a1TQw",
  "key23": "tUhnu73wMowpC8augBhoLzuEKXvztvQkogpmGhWHWoC2pTfpJXzA67y1a76vmE66v9JJwmd1nUq4oLV8Ep193fp",
  "key24": "2LWPQqvxxA28Qfg4RAiwtRQzzqvaEu79VYkeRw2QhgjN6LdzyXsd927V4JWW2VZMtQxQZ6cPwMUkg5kBXtH1GHmc",
  "key25": "2nPHnR91ddRabHEQaDCziCyanr9h6yCohwMtY1YufYDx5MmwB1j23FjCqNqet7E4gs7G624BxpW1vFmeU6bCCTyp",
  "key26": "2T3o7c5PPsJ9zJ1jbDeQTkFpPv57tCAiuW2vF8GPXauPShcBTY6vZ3h3oHBfxdSCrtubK3krfmWbWPwyy87wisM1",
  "key27": "55j9GmnBC2gq4QKQ3WN2vg2Hx9BbeTgLvwB6tHpKis6aLRrEx1Tqsoj1pnVXC9kgsLuWwpQ4fyz2cXj9HzTSXPqq",
  "key28": "4tsgcHvz9kiC6kSNrUsCezWfMCE1M9EgMMEyEV6cH2Ws3vsKUCbxuNZrfaafCKdzP1ruH2cj6tvxJdg5XBP5DRQB"
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
