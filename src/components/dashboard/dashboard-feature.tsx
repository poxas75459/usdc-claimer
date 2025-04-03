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
    "2y7fM4A4F7bb5KjWqyxiniX2qLwrKJKFtes9nMoAMNZ4FtLFaL3uUiJGSWQSqySHN7A9XT4tELiZ4i9BrbDuEnLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ChMusbHsxv1HiLpxfF2R7HBQTLdEUX1XAC3PpTtst9WbAYkJdyrbCyBgJvG6gQKt3w6Zizvubz9uwQrFbmEqsSp",
  "key1": "A2uaqrDPFPW9CU44YrCgfc1CFG8f6P7aSwJHwoTr4Y6bD1D82HqX55LnZb5yM2rhWw8Qmuvm3mE4bj6SchhrY9P",
  "key2": "5MNiA3JaMwhUP15pDZTHym1zSS5QLsbAnyP5LWfPeFcfnw6wFzAiSPwpjshadNeRvgvpQV6R6q7T8weoYmEauA9j",
  "key3": "3HSgGvdhRf9wYqXNfx4XtpYqYFH7cta5f2Uz2V9XfNHbY3m8ChMsXjrmAWjwDommXWSmWf26YwvjzHnbGQ9VdyNH",
  "key4": "47WehH6CCqMJDcQRj5Y5m71otmdqGDBTRMcMsPaCT4eHys4Ftbco9daGxMMtwP5nVhAKVrzo8pzB7hF4haz4Kw5t",
  "key5": "41Ski4wriqGQtLRF3KBzEmPTgd4odwcbnpbhTSQDBMSD5radw8tGURXyVRu7rCRmrEEm5EJkFByj1j9kAjBWSEH",
  "key6": "5mHbUv8JtbxsvGCSfjy6F2h5NqwTK6b8bW3zpgRqaJnckifsjsWWjgzKwNbJvPU9J8ZKrtKLxu8kivoQ8caD61Hw",
  "key7": "3BZfj5WkW9VAAcH4Z6Dcmxz4MKW4vTnCf4SGamMipUxPPLMPTuDwYB4bUbtSj6myZudHDNYqvbUpJ8vczKrg8uPT",
  "key8": "4toYtCkdE7nko1cbSL7p85K5M8o9YYByNhwu9TeAutmhLqTCcGZKwsPLQMwt4n7y4RfNJvmAQw9ZXJh4uB2rLvMx",
  "key9": "yXBv73BgxCdtG4KQSCukkrtj6rPdaTYRox8Yh81ahcwiRRcdjCzJNAoGuQ5nV2a8bkbGFerpnEUaYSEAyNKboiV",
  "key10": "4cYzjPnSe9243PwdPr3tH9nuDyc7jynkx69esd1DnLKwFdaDALDfeinfimmdezcLWAr81NG7MEcPNKHEhk8YDpQn",
  "key11": "21Hmhhx15thbs1Nfm5xvvd6AyQn2rNoAWTZvChmK5qzuDzX9FzPwPhUMGDS1vuy77P3EKzVFxC4h42neq3uSuUME",
  "key12": "4a1r1ijfQYGNhVqUhav4mcpoi7tNMLMbwDAet9s8CYnyQW1tHkQ7dFaZ3hmditTqNwhEQobzknTSfx1au5zxV8AZ",
  "key13": "eoDcKvJh4NAxMqbGWa61xHPUf37hctC4oTJw3Fjb3cmUPKBsEbgha4YPcxviZe8h9VEaZEv2zMZ6E4wdi33H4vF",
  "key14": "4s8UUNpPkdN4D6Mz39uWjX4WeGRLbveEFgXMkiN9Kiz2pTkn2p9Jiwfa8FgZ5s6KtW3Gjp44XiNNRTbUvgLxPEyg",
  "key15": "KPwBPUwcpvhuUZhrCd9EPFdSLZZkiJpJkdwBvq86Dc6bJiZK19zTwPdgR9j1rS7oS6hBzWmiH35cEf2g8Ad9FoF",
  "key16": "5rJFNA8Zjm3AbJm3DoR7nE9dgsQg8Xbgr756NHJRsT2bmXRrFuqbmJRSQvL25RTz79AT1DXmm8rBWHua7B3EzipN",
  "key17": "2b17p31TrzStoL8FEAoEgVGoaH6HeSAiGpoJwKAi2N5oBNDbpLrxVSioQP1rxqFN9GpP2sYp9Dk5RqU8B3x1RQw3",
  "key18": "3srRYxX1s7t5RkgQDeR9Hr2Yui4QFeKd4kuZ8YHzR1VLAYVbR4d6P3x4vSz6cpftgf9e7ZD1LZeMXtkMpSRXmssY",
  "key19": "QK6UU2qbfo1CC9puJqSzzrB3Q8DVVNdkB1KfG9QvkVGsxnNBPLcdRJ7SJLTQnJ9qrVfKKv1Det5rTK4JzpMjrhf",
  "key20": "5kGVQXkE7TBComXXXXEYeDjzKvnJhZLiyitNnobwg46EvDH8F42YCg4CSSifSv7GYC7bFUoTxFy6nBdfXGj96ac6",
  "key21": "5TLb4LzQ4LT6kXVZkMvNBqxFQXfaAKyLmDGQe9w9TGHyD5enNLd3U8AxjPfJer6pNH6G7wzmcxzyN9cXSVj5m3p3",
  "key22": "257Ga7QW61fiFzXgsConFVavDqdtFHpDVM6rMKhU7E2AS6DduULgsKHzSNsKD9bwcyAyFrEM7AuWb1hjvfFjMrTd",
  "key23": "2Thc3dLhv6Nc32uvYzdcr2bfPNHjTsH3NU9JhXiKg21QUy7XVUxgJgfrTF5KcJraAvCMk9hLkBpZpWFJnHtx4fEu",
  "key24": "34CaQxiFCDDjQWcRXAjUvu4ggAdGe4FhUgKQJKxKhcNbPTMaoWxKkmkK26hifXiv6yYHqavijG3rGjCYpZwkYqrr",
  "key25": "63N94A2JavEDKZZkXZsQByqRbwkcBJ5YYdNw7rrY3tE46DVFqd8ewL7toTGxR2fQ2HyBpfYPJjZqSUDhAHa4Nu4P",
  "key26": "5PKmJWd3BW9pD9UGQ33ZEDDFpqqswQZuhxrzAKLWYV6eFfXuENgZ2ZvcmWmWVeKMKj5nurMbXqhQj93mzju7xpDi",
  "key27": "4UQuUX2fMBZpkRkUbL3xZJLYfmDr7zmUULMuUbNw7fV3d39eS4faZ2ahHYFjoYt4Yvg5Bf7KaMnCZ8gMTdFsjWgE",
  "key28": "3z6ZvdzYq8E1xHssvCDhJG5HXMPyypyBehbQjbpJ5deqGy3QJqCqwFHLTVEroFHspYiweXLbo5rynCMRiKVUvXvx",
  "key29": "5krg7biWLUxUJY7Lg4Ke37manPf28SGoJxvJc3zMDW7q1ZbDM4JiZsFDT4jo88xg5atVu39XwzfJVNmucH29cjGW",
  "key30": "5axG7QqkDCw4jEmebTRv6Hd2rPDfoKGsLjMcDcHDxPJHjWjAEjJUzVRmQNryorKMz8PYoqCbFx2FxBD5heyYv3nu",
  "key31": "4TgZsjzoow6EStDDU1oE7sd7CLnveX2C72bBLwB5H6bEKGDPL1bMf7wY7uCPpcGh4m7SwgdevBZwfc7dCHKsSrEB",
  "key32": "21qa4VZx4dyiABAYkUgJLmdx6N8JckAyz1BMxsXTnxjFMjVSvJQJt12PuDMPJvYdVbjjMnwfWbErm8v5SfNeHtJB",
  "key33": "4uceNnz48eV9Yu7AaspgamoLswuFKyhEQWY8QMACuiwhACNub6NDgT2mgD2t9VLZZGQvEwQhBx3CDf2v37N74kEc",
  "key34": "64CyaZd2CtCiuvFRyAw7jw4yPQz4jHCQmmUPV6WecrosdV8hScxqKRpyDDQAh2WzpDzbbEpcSwBYGeuTnCAv8dWN",
  "key35": "3FDtsnygGJjh8PYnn4hp8u6d1ADRCmvbKcKy9Z21kvcWADymHQ9bXkw5bTGTVd2Ep6GNAJAq4FT1Y85dqMrmyrE2",
  "key36": "4mEE6XpG3jiestBmbbCP2caVD8HTNE9gTJSc2hnS7egHyT3tpaviS9862UFeK74wCoo9gkVUqkxTERQ3cqctTujG",
  "key37": "37jFqF6RssuZ52MyoS3NPCCh4qmdyTYa85kvxJaqjYPcKE6PGV1DmiZphwjfULPQrAqUN79UJYSNwdwxeCUGV4ex",
  "key38": "3ZKZA6MvUwJHavGLs5FvRPCp79D46bAbAz42CePqowSktY1XEFVq2kNwrMUzcRgkNsek1UrCGjmbKn49QmpEzzQm",
  "key39": "6597t4Hd4cUMxnwBsKAjt9HYwW7skvFVHKpLhK6WTYsw9xafwcqP6xwfnSyFNhR4rd7PY9HpoQNQxhYxsy2pRaY9",
  "key40": "65Gx79aLNywS2zYsJ5QZ4TQYWD2CZXR9EHi8DPzHk5QTpG2BLPwo2c1e5HaHPAy3MSdZVtG64HFF8kAtqvPHj1JV"
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
