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
    "dHfCidy7DvqH2pq7G658CQtPgtFwQxi8VLyUkHqy6gFjeYYKjbohNFriYxbS1uteCDMHUpvEHqXoZSZ3S26Ngju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzBHLVLfKJfaWHUN6oAZghzF2PAzZaXE71Wbhi3uAQsoix5FzBc8C37AazLFGPCkKcN1YxrrZmTQrP51ZYqs8Xd",
  "key1": "5ZGUJUyuSFZTcujCf6NfbLb1XTiH5FsDektT3xShXkELocfKdXpEum5jkGrumAZCYkt3mdDtrB4tLhkH2imSNNA9",
  "key2": "55LWvuTuA6qcMmrHbN5b3J4u7nPRgL7jXHZm4jRUPLFfeCmda1MAFVro6LvQNgDnGbHBVDHTCvZwvBzeWyBWtDMo",
  "key3": "5HBgQ59Cr2t3UTBh8Jog7B587LMUNDZsrirhyYhnnqdxX1RLF82UEirfEvUgWh6jNrNSw5yAdWEgWdMt36hWG5Lj",
  "key4": "28vL8JYxnxQxb5N623fH4BfoJGbyroz3d5c2fAoaQ1gZLoqfCDscDFy1Xdx8Lkvzio9jTXPdNdwNLh8ce8ZQYyr5",
  "key5": "2hmhWAyGER2aNgo8WRZDaAhwiJEc1DAdTK1F2k4hTKZQ9mDhq2u895V21Vye2nuvmX3AbXM6ddCpqUBeCZ28QrtT",
  "key6": "3ZMmaoktzHczRxHaR1eHwK4z4wwuQwu35hWcxTrqJrDKMDGVUdH5TRDcfwK4BHzGwD25Pgmn1AesoHVqATMKE1mf",
  "key7": "4PuxnQoD5Hwwt7gv2s7Eo3tdAGdKhmd6uqCuo2pPgyaj6WSAeEJ1Q4HCggL5BuieQTb9jbSZueJf35fAtaXFNtXa",
  "key8": "4X56ke5Qe9q5bTNnfdLXWAGEDiMH2qUJdLhohYNKa9V4kucG9AHKweCA1jhTx7XSjBHiXevWoGaDkdCSk6H3VSzh",
  "key9": "5iUxV2gg1THeMzcEqmciQsdye1FZi5DSHJhwfxDjA3BhdjLnsrGcpbBkBoQ1VYSADLUDdEM2aBzuFYH1E7xYhiZN",
  "key10": "4GgfUvKe8h3wbByW3xnSyPi7183YXXRYDNoe4h8i1pMQdgu7UihS496jvUm8sPbCwv8xeJtdJPopa4sCiMunns6g",
  "key11": "Ji7sFD54PuqA8TpDKassKzwB8mFaTC1touWYCnQbtf3dKu1xa2ahAF8G1Rz4cFGCen2steKxgaazAbSmvcyz5xo",
  "key12": "31Kccu2ykc1JGWFBiekDzbmkWvziDB7cuy36xP9nznRtstoZqMgZ9SrZqDFMhqFikdLRm9PYQBq3xeKe8MAz8bnG",
  "key13": "4QL1fEp615kKd8tmTxfXqDYzW5mQPrFyfxroS78BLhoNAHe1qoeDhcQD1ECj6Xm7uotRr1bBj5wx65CWoerX73Fh",
  "key14": "3SJyRDyv1yE8GxgYWWFM9vWRnEGRB7KmPP5unwsV8AxgjceijQ6a6iXGunrWkBZg4d1ApyqiAcmsTAiwtJux3dq2",
  "key15": "39oprrWtYwyKvcfoMD6NJqGm2UkW5393o4puT7X1jKrezrRTCk4Tv1jyJngiiWTm5WP36phr14mZiuNhsgTNU9No",
  "key16": "nPaSYvUfYC1NkrpyzZvjW82yHnifMNtTvvTSzzfioZkCdY1rHfqGa71G66kRVFUouum7EnAx2651j5Cy1dY6vn9",
  "key17": "2x7fxoG3tLzct464SsMrVKhsQJNT8LhZ6jVSsWqUQXQXaTJvesuFhVPfXUKCy1UvuXEuKWcbvjHDF7BWLBXsUPqE",
  "key18": "2mASZmPViZ6qX1CiqpPC5wCLgMerUBZo9KZtSVUWksKGkhbZSchkok6xTeq1TQ4qCPLgoKemqrA2TF7F7DnvGLHK",
  "key19": "2wwWaBNbs1emXrpDcNB1MvtwJD68SwR4MT1iWGJp9P5eadTsz8kBRdPyFoMDRgC6na4YdWiY4ZCrLVN2rW3veJj4",
  "key20": "WuVTxfDiYaGLTzLXqBELQUghYQdRwPVM6atDXYcrG9yfosojvuwednTJa9d3tD5o9cb81G9MfMdY1AeNWWmdM2F",
  "key21": "tnmRjTBLccY1EkFKbaSgQjnDUeMgWNZJQnUVtWMryrQPQJRHLE6b1FARasQe4CsCc29CErBFVLYwru8PLpkKjkV",
  "key22": "RVx3UUX7B6FYsNtJZ8HZiPSYf1kbumsX4vFHSqjfvyWLKFsGxkTXQVnyBmChQtgKWpHY4nUMQEf4Acvu4PSPQ9b",
  "key23": "4FfEchTiZzf5YMzNEk8hf5bS6bnLJPcaPWYnYLyScbCapQxSHEBKP7kJKAV3HywTpkJtWf89PGXy2R34svAZQLWL",
  "key24": "wypyduLmDr6XaSTxXZmcGagXfUBDaAJDWjXVzjFEx2LRwzqMPvxsyDFSm1ctwkzSfiAf4G61MLuBckFbxJ3asGW",
  "key25": "5rgVAeyW3xfb6cetnW9raArVPZY5o4FvdtQpzwvP3oc2s2YwKmAHs9Yzywo6VrvW7fbn8Q3ax2i8b2eT67FbZGCC",
  "key26": "2pvxxk7yNvHiN69JpnnvEeikAL6T64HQ3UJojw7EEwoTsFdNPosxXbkX3PnPc9meLdduAkeNAFrdHHsfpg16zw9G",
  "key27": "64gQAAA83hCMyXWmAXbwdKFXmn9RSWX3dN6a7xm7DwE6224qP8cY7HnPxfRYPKWpWFdGKDNyVDGHQPgjRNYyfCfD",
  "key28": "tPbVY9bmTs3suKbq5NP55xQgVxp8nrsZYBvBNbVPMm9JnVqWpDVJV8qmZy8XSsWNQRhFWCmyt11NGk9in53Ex1P",
  "key29": "3GDAtZQRDN1LAnr4AtiQQwnjsCCzj6bX2qkaLZtuapsxdA96xpGhhysLEd9a5KJ6AXD3NLkXKnL38CDqQPRw5BX4",
  "key30": "4dYB4SQ2LkFMoqb3buo5AzeeXLUSnEFQsVTriHJcxkp14Yg6wmmUqEDFCMYBm5T5957ztLoZF3g2h82Vrn97Kr9J",
  "key31": "2sbncVBNUdpUh9GiFr24Dfvt3nwRq1Gd8jfThXKJeSGNvnSgPaZUc2A7wASDV3E7LVb6CZiaE918WMnbGaJ6zKQ3",
  "key32": "4kDo4R3j7EE8fBhZMeqCYrCWRBY1RRA7gCtZ1yEtPJ4f9ATtryHqhpDTTcFTxWg6pcUDbSd6Ae7qeXnfAT2d6fj5"
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
