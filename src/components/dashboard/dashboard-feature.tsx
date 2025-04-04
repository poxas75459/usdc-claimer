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
    "3s3kBbahW32EhX2sx95n1xUUWrFWXsFvNXFZ6ymJULRgnwS1uxtoFbJv6YUZYmrDErzwbmSnqEYR9q51Uq5xYjKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FhLqTw9TXjMnsGJZZPUEUUKYNChZuMVYjKFyAWSTRzTQhmvNC68jac1f1vhgvtaGGKTzEXjSKh2LXKRk3YagTUo",
  "key1": "3TiHVhvkDpTPXEVJ7EQBVw7fKLWXxMhUfLc2YbE2t69eHZ4c4xpjoXCf6BS3GcbTUL2GVnQDTaTbvzf9hMRPbJrA",
  "key2": "58q7DndfYaVVo7r1AD56HXPvzwSrV3omUoZy1w55u59YtqcLS6Td78WrHxcQU9VA3hvewhXWvNBNQy6TfM5rhGe2",
  "key3": "nqDtL4dPtrfC6EZAsnutRYTHUjxfa9L4fQdFk83AewfZefwp3JzXfCZrtft7s6rNBmTUd5QDSXWYBP7ewnwmpyJ",
  "key4": "2Hnog9w5r5raxUUpTZ4v5tPZtCYW1vceghMpc98oBzvPKur6zKxemdQYh3fX9PVaYRzBbnESjRrVnWuZrvig4jpU",
  "key5": "3rFbW7VfTyqF6Cva2vL3s64CCbSrC9rK7SV5WMt5ULCsRDL6ukiq7nanmnz1EaZN1Us8WiUA3t2DgiutEU6ayRLK",
  "key6": "2GyVT4VbUsHUbrcSKfHYA1tQ1wpvVFMxgyj31dEe6KvMN8pjtmXmUzxQW8uchUzTDBKqKnSjFPbG71wPfajjJ4RN",
  "key7": "4AZcmy6bACZKpCBLvBdgFGzQzEMHs9H7pMDnNG4gZHhhPAoatip5boSTWVZxCboprvMztMKA5dzz4DFef4in618g",
  "key8": "2PDYAA5ensUQ7X11giLAn7QH9FiGJKa85fegYUXo5MvV1NUp2ruZynLM6YLq2TCK4a4VpsCRj2qCFMFYzPqadyT3",
  "key9": "3rzBpcqZ47vFKG3iwT9aLswsBRVtndckzH69MRYhmCqarxUx1eyfLgqVHfh7s4MDNGtKgtBgxD3L5NFJeBNLY9oT",
  "key10": "4RLPD5ERmRjz3XRtPFKuKf9qanDK3UhVG1gaqFBa7uhkKnnuhdRjCXGfoXGxf1eBKh6kYnFLbNqK5E4ZnKQur6XS",
  "key11": "2B1eNNiPDqr3Xz4ED89vcWHR53RRBFkQLaX2VBdPRu5dJ5vhibwW1twe7XALvUxdBwWGRvprgubAEbCThPmfdnZi",
  "key12": "PzTw4Ku7sRtDoiC3M8gz2vBR6j2b3mJpn3zE3ne115WHDGSYvtQv7HzcjRUm3VuA6VENhgjgTCNgwC6SdsB3bx4",
  "key13": "38isiFUB6vPr4Xw68QwBm1L7C4NM43YC8tz7jV66U8C46dLRzUuuTng7AHt3KJn4TNqP32TW9yGbE7VCwyP3xGoM",
  "key14": "E4E7GwtNZ1FYUrZwvVG8o4dHnXPn5MXqT4gBvScPpdBeCDDwVZKuzX3w5CRMS3CxL55wPGqfZhLV3LE8Tf5KKoV",
  "key15": "4w9jXHYhtCCsqDtUUpxEXd9yALGCjKsqbMuxmDm1gwNrXmnjZu5Y815fP7mPHTERTRnja4fHxFAeCbQdaiGVzxU8",
  "key16": "f9CHobknFqab4ypqBDzkmKXvsMH2nfitPEUm3Ya9qT4FcsvzYJ76DUnmgxDikG7W5NafAYsArbGtVspGTBQvGsX",
  "key17": "2vER6VHUZJfnEsCsdTTLkNeGYRwt3xFoxs8mZJS8ngo5NZvAj8zZvQPL6SUXwiuWrZifHzjcymDP1TU7KL4AdvdD",
  "key18": "47TvdRvsrDt4qwKVEfkYbLB6Hyvq9xRhVxNDYfGrx6tMXPGpuFvYaz5tv3nvbGRJfp3yC1hfJA2yU3L6SnW9vqdv",
  "key19": "3jiv4nDcu2nWT8Li6wbqL83agF5j4MbB2R8yE2Smbmar91xRvSAZxCaFg2nczVxXcScs2cR5VEswP3Hkzx9u9xkb",
  "key20": "57RkaKM1hAnHnSkEaxbxEjAZh46CYmKUZu7LdMMQJq5XWebQRXdkcJ3uJvkf6J9SH8pskcNK3ccNVt5FydN1poDu",
  "key21": "4g9HRQbZBsWsJCAaAoVVBTEHLf7wCASZPfK9x5QZa4zkEKe1YRaRqWMeH18vL2kG7bAtK8xmnUuxLnHDfjK5PLj6",
  "key22": "4UvgxUxFo1XbaMa8muDk5dxT2ttaGUuv889jXj6occjsRUS35kLL2yrqr9uYyAiZD2KNu765PdbFqa1N8iSthfPm",
  "key23": "2f8K71FEd2CUqfh3rwVfJE3vQjwxNy1DgyqjB7fYygFrzg7zsbtdui3xZDAzJ6TbZoxbRyf7AfUGZLZFpMQ6ANBA",
  "key24": "qCdm9nTwwqi7mAiP5ZHiqpLEHZHzyz7o265CXuBKnNmYVRAU2Eb66U1aAvJqXruxdUpAF3k1ZE7G5xKr2mqduFt",
  "key25": "4iLs5cMNRRRJkuDyA2AuRKfxyc5sNCDjEZc5xZXuKkn8VmSAd5dDUa2phqJnPLyHGdRtkSHttqQufHNfwDEbThBk",
  "key26": "55NuwFwHGr1gPWE2stqgfap7FDvYwio9AQyE2dTNFB3rwVrdfmbpruKu19MmhW29Z4LiLwmpHAdg6tvQwsdJL3f1",
  "key27": "vK3K7T9DWGSeUajoMLELttxANq22sZyj13VZKHoTnzFBvrTz55qxkmRbYvGqzuoMVmB3SCYvSqUbrmQ9EKWxt9b",
  "key28": "T8isubKcLYKBPaVdy1gavpkz1XJW7kGm2QXxNwcPZostLEdcyxyAsV83iZrYyUjwRYiG97EkpRhZvnu19z1bhb6",
  "key29": "58DBvZ8TkH3HdZUFkPhd9A2fESywCJ3hKJhr2ejvPbM8DhLe3QtYy2Xub9vD3JmHbkfbn5ULhVmS1v3sAb27Ug2P",
  "key30": "4bwTDXpSxxWzuHZSd1zYByfPG1YF2mt8xtdo4rcdigU73z9CFmV9KTskMun19VEoMZAXTQfPB7WFMb9swm8k1yhX",
  "key31": "3Z8Gfhjs8yryPZqimtBUnafbKgL2p3gS1ePgiyXdP5WiatN7mB96mwucpxWMYCB4JqwmCxYLsyn1tQSCPuyXaCXq"
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
