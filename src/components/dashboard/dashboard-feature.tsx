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
    "5xtCoFdDB4NHMN5dGRm6XvdqBviGbaGDqUtc2DTjCWZYWWz8umuDyF52STdgeG6QAtmYgvUfePNZACcPvzWXBpjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XeV2ZdXoUSp4aLUfXq5g4mzQcK2tWCRj8rSdF6N1AeCnPATZw6pE5PdZQm4Htn5YxU4jmygeTB42FG8eYUaaYLL",
  "key1": "2jkPBccyUfhX4jvYDGAjuB5A5bW56qPkoq6aqxo54aNiK4RYUj1vXtZqZXsxR4L1DxNFSQbJ8cAjcjvJM3Wm3FN8",
  "key2": "L6KeV6JryhBdc6P9iBNdm2nrerHH3VGZ2v6YWSp3XM4SdYHmYNXtzRNzjPeoCMadzmCQNAxNQuBxdyiXw2xiccx",
  "key3": "2MNtujm9HQq1mQtXNSmaW3JhcKdoRzEZEnzKwkNNuBrytWibhG16AFBsgNDLEUVg3zzGm6ocs7JY5LKKTErUKo99",
  "key4": "4idgWSKgbWAUdMoNV9EWv52vanMfim9UMKTG6HeEtZ1i5utxSD1MxLdqQVo8AVnFSVL9rcKTQ38osxcAvcPhMZFW",
  "key5": "GWGGSikazSmraRnG6AZUdEQZTLRvNVtQmp2q35xfuGZJWkEQ5rMCaTpdvDaDNwB148K9R7P9p9yGJyKZji9xdQA",
  "key6": "2Efs2nXVz7zEePpzmF7Y92uQBrLpsjuMrTYv3uvjGgoZrDWhFWyAHK8N4aJoNzy5gNrEruCnEYzbwqPHoGJ1Xxj7",
  "key7": "4DqSPKoqAF24XT1sYYhXXtvEaaqvYuBEc3wVTBfouo5rH5WiZdodTJMqbMEiNEz1ceddLibNYzQnj2C4J4ZWdJCf",
  "key8": "cotnTaVHasNaybaVzJSnYQWTzzqux6GcLXwFbxgGhPMyN4kmx9k6CpdQGyXuZyxtEMdbqHP8FiVUqBjo3mNMU6r",
  "key9": "4PA6KRQy5y4S6BrzUzig649wKj2KQikBGouer5UBGVkiW7vKGJWEe9fBRHKu6iTBWup3Vjrxt9kFXqCRKVZnU5Qt",
  "key10": "2dR5HJiaDRg6aeejbm1DonP3GeEi7f68MKKX2aaLdEVryPjSWDFq9CBn6GfuqXLhHwHre2yCRVox94uLXWzmVdgJ",
  "key11": "3bV6xWZQr1pZZZGke84xRJLL2J2CNMhkDKQZK9XTdRx8MJ5oyevQQ7ZvWND1ekNRLBVTpVVw4JGPy6NYSuoS6GHL",
  "key12": "2u69YEkXFYekALFLu2HFjioTvz97sbMuoiY4RqfAHtiycru6NY3MN1Y6Rimqxb3NpuqmSSSE8CcjfRNj9QYEKFtE",
  "key13": "3EXREgHHnj222myUv2S25JfGivcg6LG32ZiNmkhfpgpSQG4BTXLzeaAuF3vTJyWx5bwgrhfypKVoj1R5iKqN1feH",
  "key14": "5EP9zcxj9dFcVdtqfBqiDtgaYyhWUYiYu1xhW3Su5cMb2tpJkBeoSPtN8ZVEhfc9erKtFxfk2g44ANmEpdChNPWM",
  "key15": "9PmaZUvxN8yjaWi1pgrfKueuVWFbmSgQKAwKJhXmaK9DjoDe49C14Z4H7VQ1QCpief5azGEZ3q7js65JaiodzZc",
  "key16": "5cpmK2G73wu6XxfYY9LJqSHwMxibPibSbbe4zSj9xHhgp686w8QoZRHCTdf56ZuWw7km8JnE31UUpi8mz8xWeWH2",
  "key17": "39i81fy2ukumeFV2iB2TCwN8YJ3n8bwNtSQazu1pzKtfz8WEABfM3QuvMm4M5bT5ANhcxWxu1etUv6WH8ufQPAn2",
  "key18": "2yVdXN63j7BaEu46zyfMC9NUHAbRMYusXRpgFqTt2srGvPzEgK5wvmxh73zNEscmQWqZuVkS1MjZQbVkZHvyjSgc",
  "key19": "4T5cG7rtkkrmFYi371FDVDpRxZMvSzYgR5AkFXQJi9LGSghbZWmqbkbeStqJLqsoKa65KUwEJTqBfoeuaMsFzXJC",
  "key20": "2U3dnM6AS1QwXf4CmwjHTgBsnskXLSArZMuiPA79icyrBRUuiwA9R9D4bxk1QHAwQEDu4CxiHkRvX53pdx1S2AWk",
  "key21": "2Hmw4jjW9wt6Avs7T87ASAvfnsukND7K3FVcSfHRTVzMdT3PMzFgDFNC4bNbyxVgnSWvsddgaLAWVHCetkL5bqXh",
  "key22": "5mHhLBZShrZGkdqfnLFVDATqPuKrYET7B9kSw4NtPzRyiMg51sMpNHkiB9BBT5s4eH3ZGRFzfAp2VBS3JZn7bqMp",
  "key23": "4maWVKYhMSv7eLFyHYXwmaYirzF6kz2P3V5X8Z555wLQaind9Dd16nuLUtA3WXa2T7CxUXD9RV2tWjwukbFEc7hH",
  "key24": "21YNoUSYgVLJ7ouT89EwjQtJBjhARfF3kWYGpbUTjL5LE3fFqfWizQX6umowz83jvwbPHJQUCGocZtn5xGD8hanj",
  "key25": "3Eoi4gaLWFV6iBAEZ9LFiYtrGfhTak43qm8thSYZZL5jAGTw4cMcPMWrubyoKc3D49M1N2HKVxtHzw3mCxfWYYk7",
  "key26": "2XcJMPB3eGaBkm998nFdTwNJQgikUrn7j9xJtHyhbQXEu6ufyaXzhrjRtWGAwJc95iMTT72fUWMC9MqtqtFK2H15",
  "key27": "3sL1z7h1b3fj3Kq9a4jmAfX67xE4DGy7vzmAnYN8QnB6sLxjZmRi1PnFhu5g37z6Fm7yvQ4R8McjARJNrGr61xGo",
  "key28": "25vG6ST7dBJrsyCg9iGA4DvBsFrAaAvrP1NjgFsapg2BAm7Zb3FtCidoG92xEBw8rX69NcJBYmagQcKjTK3E9K4U",
  "key29": "r8RFsxaF7MY4dHy6ePrBjuLmkioGBNfqDghNk9iDBf2EuU3brJtfd9E8UnbF8tr555h3DQ7vzwCSt1j9DzNfo3U",
  "key30": "4qBkSXZSn4wb5Fb2PwS1RHg7yhMBqsjk8ih9AGXzTaPmXyBSNxkVbJ3hsdQ4VqS2yoP1pyrp19QdZ1ev6zpts9mn",
  "key31": "4mFc7qVYowgPrW7RZw9d5WyMjExPRmLFRKcArNgNVec5oowmRohjFpSh9J3FD4Anj5Un8UBJLRhvUM1de8R4aNgf"
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
