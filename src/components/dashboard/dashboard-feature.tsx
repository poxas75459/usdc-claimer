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
    "2eLinEVEJEWtT6P6TSvRUe6kDxjqRMwb8XmiubwcVdMPfKXLWDzSpedKMNcd64zCSEf46DJmb4mHZ9tKwZ74APbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JS6g2ugtYJwxTf2yqh1uYEisw1QtQgq1DCL6apW4n8TdzQgYYeaLhsi3ajuXq59r3k9LrazMnwjnVFFAXK7yPWx",
  "key1": "5qSJjgNCDT8Z9hkU1dtLLipCYf4w5dLjw8HBiLi4f5nwDQSDcU5PJbmRtaMGRKXNK8E3kquHiSfQemeJo6v4NbvP",
  "key2": "2Qyn8py6LGdpuQDMfEC8ghvzs4DnLbKp6bnE1jaZE9qhTnmRQSBxAh5iUK38L6NyiQeWMeW2YjBgCkD9TexVPGxt",
  "key3": "57c81wPCNaX1LcphjyufCFWfSg4PSxdi2XvsrBLfqCZ3NysrcSe6dKjjzHBTpUZEch2MEZfn18ujhxFo1zCAFM7b",
  "key4": "2h7QCtEWgXFgx5mVNuS1juYPfgotv6rZSqnZR8egWA54wYZ9ALd1hU7amrH5igkbRNPTrmMJemxGQjAnBqLcnGgs",
  "key5": "2oJCynsgqb8CfVNtRZham24qdHYgSwz1E2kzPiHx2JtakZ92CX26TXtSa4dxQPrB6FfF64ffkC84xx2Atrw1t75S",
  "key6": "4mWk8z6Sxg1rGMgSeE1yRj93Fu7TqkNzsCN7WDqDKtkEoriEgRWE2Zb7HFMT2GKy9rP4Fpe5X8ArpAwBzQ7yn89n",
  "key7": "Q6Mzn4mz71rQgMb1wbBBs4uNZ7XWz3pKjUQi8Br6JK5Jz9XXUMWdAV8UmQZsC8HxqfECtZpmvyGtn3fNJRqz31S",
  "key8": "5hUNn99v7CBYF3qbjNXRZyY3UWanhx7CMvVhSwPKrNEiY64gfsxFqTkk11FaRMNHFkxU8QkEhkkqwPbnwpamWBLb",
  "key9": "5T2U7X7foG3RPZhoWK3cmRxrspuYKQRgqycYCLG9SRXAipKHxtxZy47RXojdSDJmzSNPNxBcZ2Rg3TwG1F8SjVy3",
  "key10": "2foH2u9smbvu9Yqy4wAymxk7ukG9BDsfQQcs6WTCsQRD1Pdyy8zemdj6jU1MRMrNxqNKQqfoNJ6LYkLVnQyuK79B",
  "key11": "4mCVk8RqxV9SZL2kzNtompD2b2m4qezmZGohDoNzaZEkUnskDhKcp8V6pN3QMyd8J4HL3r7Y7A3ZFgYjRxurRyF5",
  "key12": "2nnvfUue26BniJJbS769ATNQohVBjuHzX6MAtNLSgFXgkEwXKTTXyS515w261PwSxpmgEVUU8VDAZBvHSxhsVQ58",
  "key13": "NQR7JKzkbbBgwnUrh2XNcqwcTA5SwK5Ri3P9wERxu7W8Ea2heeyfegwLanD57ighJj5vcKNxqkSz1iNC5oywJ6z",
  "key14": "5gZbpKc4Cjjmg8xjtxEWT1dJwfFCYr8DZovjoiQeLYeziq4HnsadWK1qRF9zfRaVLhAyveJtBXbDGQBm4BhkCzV6",
  "key15": "49RTwbYCBgubnwiyJx9hwXiUBiRPcWmdMNiFJTtmWiZm1Ggk8GdhNbKnDJqugZ8Uz9S48WubDnhrk1rCUkRgxvJw",
  "key16": "7YdeE6QWrihmADeE3KjTA9r3epwN1as2XP5NbRAcQYhmesaxgAdzhUnsuWhACcuQKHCDpYg3cFLrQGCFXTkt1dX",
  "key17": "2PiuNrbqqrWUp2AQUEXmFWvfN7PmkYDte2ehESmha7FcGDYqQGr5NPkA2fwNgmzgmXQjh9SNmfA9EGwNfDMsCK2A",
  "key18": "5zLnzMBQpSmnhtqit1MJaRW4XQon3TobS6NVMBudPQsNiBb7stCMG1dJHSKY5Aj3w5V2qxhQK9sbJPgwbFUXbMbA",
  "key19": "5R3Bjn4irsGrth5xCLJHK1SUarGnAF56CJafwCedCkfJJgzRDT37wNpxkVnmAZ6tv6P9MaNEhHDXosCTnx6wD74j",
  "key20": "4cq3UnqHzqHxztYAiHe5i93cgqtWQhsv5wsLGBVLEsDrGhacxfX4k8N5to5H3gjVRwNN8rt455ydLakNDGEs21ZF",
  "key21": "3FFFHHyiAxtiwXn2eqFkaDS5P4GsfYkbebE9CgW6pHxynjmuspuj4mk9i6ZPuTcTtQM6uuhZ23gANmPUtJosynYh",
  "key22": "2d9TQsi7tN9WsshPeM2DKwGq9vHWS1d5bkqwsu6NW1Q7TvjXrtUMoMkYQ8YAdGDTnB8zHT6UnqysVXY9SuLZwsdq",
  "key23": "5dkmPrC9b7fZuoQWjCjvmhdYBVyggj6THpFxGAGPm2xtxBxx1tUAgyVHVdu4MtZxJz7MoA2CY6onts294L6bFprX",
  "key24": "zKbM7tRmbE14WH6CrXXPxPmfx6ahhdJWzbhpGGHqtHMMnGiSZbwypB1LycQAk32BKrufhawZQ9J8NLGqiDEPoni",
  "key25": "5mtVvVem2SrqjnnY2dJ6k2JU7T9RUttrjkjceaAoHxDDMEmgbEbRgHZ3PdyEoSecaMGXUBFRS5tctmdz6JVw6oU9",
  "key26": "4KBKdzFssKLyAmvCJvzjW1npnyqre5T8uuaQpdQmvT9rrwadYVe5xTj2uoT6aitNJooBACPximH1NAXgTVqcnkBB",
  "key27": "5iGyLPq6y6jyceyFUg3xZLHxvVK1MzYahyLjChSGGBQ6xYHGhFqQhDitEDdjYrs8si8iGMPh4ZuSZhsxDNsJJbF1",
  "key28": "3UWgpqXdU34FTo2df9cFXLFC1dydYxZtcpy2DzVBPN3hrwWBrDybGhHNahRDxPpiLLYNHtE5RAvrnUyyGvkx79U9",
  "key29": "3DfFpGaP7dLR558su3eYMtKfFKKUJK4EUcaEwhkViz61LBMoTb2uRoagPeBYmBb2DoTTUN6N3D84yjci5VxooYhk",
  "key30": "5JykE9yr629KyuLBqMWEqSdiSprQQXNiimgTh7kD4FfrxnEwCzK9NT6PTT54ksryNafHgdkBPFhkYfXsWDiqJMTa",
  "key31": "3QLAFX7m5NpPZ2jAJAU3J2ZrZvAJcXn9fpwhbur5GXPthHT1JYqW5kN7icxxnwb3PFHsiEqnUQ4HCubiEiKMffsQ",
  "key32": "5v2guZV2u3UmuxnqEaMZ6bwAYpS9dJZV1N9uqWGh5pUR9zuHTvuJjKc3nh5g9heaVyWP4F4XqsxN8fWWCYBuXLh8",
  "key33": "4eLngPWiFt7GFHBeLQafkbGG7UeWJShwbja3fLEp2kzmhCyznuVSkh2VgQJd7gx4kGZXVjSm9FKyziuQexBxsvCc",
  "key34": "3AM2XuSbjNDq3bRXcSBwp9voShRPeCDHpoDVK8xuThHUuPLZXPWhCkRLdWcDrMZZFU9EDu2r5VHt3zkMDbnj3H3D",
  "key35": "2yPACDEhK5RT5WhUUYw8avQo9kBrF6i5mzuUJDXDoeNcraEyTuvQ4aJ19YL5v5Q4ooTaDEVuSvRQkXYoMYg4Eg9g",
  "key36": "27k3g1dfD9qd8uPqbp8BhXwQKJwRuXCWgJN28zMVtzYC1qqWSA7D1smDC5QQ6avkxd8q2Ns1D6MP7tBEWLfV5FSw",
  "key37": "5S1sRuN6rvfwR2iJTn1oHUXdctQPr3L3nQGQDeZT9KX8pNPLCs14M7gq3Aq4To3qT7q1xJdQ1oJUbo2b1jXykd4R"
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
