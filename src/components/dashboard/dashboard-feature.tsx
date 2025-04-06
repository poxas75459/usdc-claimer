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
    "5YzjKGiwSkc5RSTYfVcxLV7LpaakVvLtmQKifdCa4UZ2zoUcyUphhN5nTr14L2o7tdJrZEg7Dd4iuG7VyPUFk8SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6bAXSeVAdXcWaRjtEG6P54Br9kzRs1XvRboKFuQp7DkqQPsKvhKBUpCso24WktZbKFiKudqCJnVesPqKBEdfjv",
  "key1": "Gq7s5jTrG16vnsqmLpVxbvtUWxEBcLroJWDk6Dd3qJ9sZQsHtKh4BG1jjfcuPQbBQfNNuyKm5uCgpmuQWRkRkNc",
  "key2": "3dGofhi9JRX1knBp24dECBm4JfmF8rYNwWXjcdF3KqfuDZP3bjmizxCFRCZirJGJRXaFNCxzQUCTrSnEfxPomonw",
  "key3": "3dugxNrZo4trFNJMZwsy8z4FYsaMAga27eXAcraR8ysTD9yQuE5ocgVNWDR1no1fLgNK1hKUU2SAMbWgfXvmAUtX",
  "key4": "3MbKRkPhD7rXYDY1puwCSgWQvHDhqfX7HmbureC2D3ujSyVRq4RTZE1BKVUEK8bP7LrTiumkdM6sp7jxbGLpEZba",
  "key5": "3cjyAoNbuT8gCqijvZinZZS37jLd1rmxHh1uoticnVB6UpKEp7QxxPjsadVW5UCV6CjApj1iRFBiaURPYY6NZ1SU",
  "key6": "5JRZJxo9DBWeA8MWKkE3gGRfoKRtUZ9fYjpsRvkxBGjtLCf9FeuMQKzecdDK4b53ZoK5GsiJqEknZuQos99omm3D",
  "key7": "d7CPnL6j4H5HQVirCdU4xi6uBNU42go1ZvYBjtr85JGsoGt54f2A45qYusdNxRiPYyK73HHAymNHfm3aPELR7Pg",
  "key8": "2iQLjvHftUW3wjzpeXyop3cM1M1iQRpoCJBWpxbUJK9Vcj47d5Numz2mxFCwmFVnMUL4J4nYyErpy4f8zrjtvJJB",
  "key9": "3wb3Jq8tKME3CyNwuazHQdcxe6jtLRcyPu27vMo2Fcf74hd7BLDouDfAFvLHbfWGFPJrJwEo9XQFczsxF21F3C6W",
  "key10": "62QGCWm7ctPsFu3JhRuH2s9sWbthshDejLtLA5jVUtujH7frs9DTE82W3dBLM5GaMT7YVyfzGufn3Zz2RXRdtbVu",
  "key11": "55hNQbDpehS5ViQY3P86bYv3cgRBxcFA441FpqS8t5LMKwQ6osWXXdjb4k2nnhs1PZ1Z1zkY2TnMUraYE2BzWpKv",
  "key12": "2x1dHoALcPpHaFdSfM8TiMc8VYBLfiAZFUrn2Cg5kdxWe8H8ZLn4UxDXYhkfYVoHWcrfiy32DhnBEm8edhdgGFEJ",
  "key13": "2JfXSytizaB3DBAYjm4c5PJQSCbpFkgToNtUdh5sauzSDNqDFMZbpasse1KidyUeLJdbgXckYoE4JB6dd7Y7rAX4",
  "key14": "4ymp3uGeNZtu7rAGn4SPuAQiVyacTxXTqj5EBQjDUHihc4tiE5GWstmGoKHEToCq6ko1kUu7FC55Q4t5J8WL4k1",
  "key15": "55MZs1cpJQbjDyuuD13ho4RGmn6X2vLbtihZ47bG9k5rThunLAuRGNqJn23uBJAjRcY5yyXRxVQfD4e5e8cygJzy",
  "key16": "2KRdFwQ9xVZtcjrGmiwmK7sH77soeP8pr7LZNHYg4RRAxuvhmjjUr4bfNRQXLsKGb5dcfKuQhbGCCWxNcFLeXyyc",
  "key17": "zfdqN69PWVTaqmTBx8SRxbd3rnCQihk5YNXb76GRipXjRfriwL6sNjPYN2DAyu3BPwQYsiRn2uC7mJKig8jQjn1",
  "key18": "5xDbLp9gnJhgHmQ7aPzauispugYno1a92JdMBRUNSS9eS7ki8kbajh5Q4A81rfytbKXpVtTC8Vg5Vt9c31p1utjK",
  "key19": "3LMJx3cTcreB4s8kEAZfB1KVrjJcpMStGoopgkBeJcpmxYvBEw5CjB4RYgtdoE9byfgUozus5QCquFrFtGQNCwJ3",
  "key20": "p5ZMZhSeBXsSeL1aWmfBcbAEBpmfdMBQiSrT7TgxQcSR3iKtBg3fihwNiqx5TycBPDxM56NX9pSAd9JWGZeuyaz",
  "key21": "3kpLJNHZzJDdamdZZmSAy5uXPtmzHBbwNDb1xZw6fEJ6yvtYJxHzpHDsY6MmTBhziF9toMFfCSmddrQNtrReEJkW",
  "key22": "4aARpRpRQ7jJvHJ531wu9YL4KqU3qZbx9aGRXkGSrnNWAB93FY5C7mdjeT28fGuVv4B5ZLg8NjAxhYxYb9jDRL1x",
  "key23": "2SLNvF95w2S7NB9LC5W9sZAi59zkVQAR2rXtfR2B8G7otyxfeDYQT6hME9yHrFXWYwuKkMAWxBXdsufqLUmr8sE1",
  "key24": "mdVgGSAmAfQJS9E1Ar2ZNeW8SHVNEyCoDYcshjQPThv8n2HHnNYGqhvgHcikncEjicHLEiDJSAFdCh7MTouTJqa",
  "key25": "3HVk1r2ZzB78rYvBmtp2JGWECLX2LS7gjDwhBGp2VDVo5gJ4XDU3zHLdpwoHUjDAm43m3StNEcLTQj3oAwUuAkMj",
  "key26": "kpGgaxuewrmRecH4Bq4RZR1ASpzXvABDpjb9LrNXRcB6zE1JCFLxkG39Pq1EDwfdeSvzGNwp1cA7uNWYMFdxc3g",
  "key27": "5PJhjCmohfUBuyRsXwk377C6LSwJNj8ki19ePmzaKpQTS9YCcCzx9SmRXEYAKfDK4zxogzcgmZL17JxQQZppRS2u"
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
