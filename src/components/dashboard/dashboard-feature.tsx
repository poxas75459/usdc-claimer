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
    "rA5gUHuhWK5Jjfd8yXNfioxCtigdf9ztptGKd76we7Yu6chPdKnEm68wdsTvWrtzfwGy5jjK9PhhQe6RMrzCf2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RdKccEpfPoZet4RLPBjHhb5jiyFq1SsLr2T9CpiSeU49nrMFPP5z5bYmFRxNWdnkRqk9bnnpeeHaKjLApWveMBa",
  "key1": "5KGrKExU2z84UZzxuZ588tCRoHDWUzHurPDJ1LR6uGLsX8w72r4XBMWuyuJz33u39RwLubwAPUUk8GTGJs3Fo5dA",
  "key2": "4ALerHmBbCq5hh3F2ij6kiP5WzfUVJTdNfceuYCMDBUaYyzAZDZ9wLMyhmMS3mk7rUvHJ36k7mpupUEfV7dSEYjn",
  "key3": "3RyCnrytVELGJCJZKbNkgn985Lt1CouWw4PuRzRoMnwMHDu6UVea38QqVweGbZLu2VCDWYQ4pGz1bn1aagpi1ptj",
  "key4": "558C6PL9EZErrmviJS7zbYSJ8b6drnUxFRmmzCi11LvAPcEwyt32rMLvGeNf8xopuskXZY5f8D2aoXYgmbUZkmgQ",
  "key5": "3qBWfQhFeQfZbdyuMKcaZ7ofkdnRkju8PDh8cbchBWFbPP1PUKThkxpv5Lgx4ZqbbqDwZcMm2cXpyYZrTFXHEZFN",
  "key6": "3WqAd39zqvMYuswT2oS5Ymw9FxQV3Ys98T3WhMYTDZ4KYdQiuMCV9GXit2EfkF8N31QpmBcdaEwvrFr5vxFT3Hr3",
  "key7": "39zYPgtm82vaMfgnYUHjvpHpJLPCGCTsrKU3gwu4ypWqN5566viiZcJXnBeUPTiPk8JzE35GZ7hqfoQjQNKPwGiQ",
  "key8": "wwV6VSSQ6WH8mNVq4BZ6KLshVcpAE2cYEy8d8S2QtpYgPV1Z1rpSzJjFgRYPSWG1Hs8QcShhw3QfH9LMrQxN6f8",
  "key9": "3VP6Ah7ttgquoGH4NGX2ifvVfXQ5dSejJCBB5weAyNptcHEghTkbCRPAKhMozKBN5mdphW6R6aBh3LswUa7HbD3B",
  "key10": "3Aaf93rV7zVQwFF23sG7rSj5etXeX22TbCEhvZ5jNeTTbN4RzQWMhq1czs1rSEHQp9jwEDagqLLXDxYpTWK4Z5Yd",
  "key11": "417Ka69oXmU3z5vUPLBkH1uNSygL33MRgsPhESqVS9Xxiy6cX4UyeUJwuNX5c5nDBZ6tvo8Jug9eMsdGAD5bGfM4",
  "key12": "4uYvsfdH4XVKQM5mo1uf2PvTBZo1JMAHi2ncfBQ3Mk1eFDYefXq7tTGmNLVsCPvhwxXKyTDCXMhzA17oE5R8Eabz",
  "key13": "2BjZ7J4pgZXwxjGq5mk6R2anVR6zTsucDYvFHmiJdy1j6mz2YzLNGHhG1MYyrxWA3SWQyo5DGzQkGD5bML2hLfMc",
  "key14": "43UEmi2ttXh8Kp93ZPdidg1v4mLSKY3cReuuovCrbMuiDyAvr4QXJeMH2LQJWhkcE6k7G2H8RMdFgf5X2Xp2DGE7",
  "key15": "LQVmDPtFHe6EPCiF5Tv8QYspAcTYBvNAMkygKE4tcVaZ3djzgCx91YXSqJVavuDparLLZL3iqvcH6BifuqPnctj",
  "key16": "zrVoco48sys36y5gN3MRP7T8HUyesXEcW6pfXDDvVaka9A7SnHnWef8XQ1fAec9uuL36dH4KdsChwaTq1bHVwG6",
  "key17": "3RZvKoZ9AxxWissm2yUVmV9qJgrTmZ5mpBJWFUC8A6j7a6JR58YJZwkX2DZQc3fymR7FvQtk844GKzzyW4ieumQP",
  "key18": "5NvN5Jfk9UyThJeNRF41krqBMXcTXAtTqJhwntP2tVVmrfvW59YB6gg5mrKAKz7ueReSw8CXE9G9XFXXGnFhyrdV",
  "key19": "yfgupN1FNyGnHkTJtuE3NLQn54dbj6amPwfTvipB4YjyF9osjj4nydMfbeMvmBQYmao8L9mNVstGGjfiPMYnL7i",
  "key20": "3u3jeEY5xYu9tsB5kogFToV5nxsPwfvaB3Lv8oLYUrPB9k7FG4qZKtKcm3sMwjv8Z8EAhCdzT32eqYzBodepstD8",
  "key21": "2CKR5PdPxodLVg6dBFFxGVtbWdBATLudxqiNaJUyUC4CUPUdJmxAvDaULhTqDoetfH55RyJtAbQxkfPWvndkY2Kn",
  "key22": "4jq1dZtkec7p33G66xsqyjWLDYN1eBkLjzsEXHsiv9Rtg5VFMrtj2AeA5qELGd4sg1sAMG4dL1hfg27gkUwd51RY",
  "key23": "5Z9RiRByxZCu4wp3rdjeqPxgKMz3TcGST1D91XnPHrmRzCdSZzdi7aHZpYTTW9pjWuK8VpLRgmu3eikLnaFwxxjz",
  "key24": "3KFKKhFF4k7HDJHLKLt62FF9gCXmHtXC8WFEWmjbx18HRbuPciLxAbKnkUXR3gLnyViRUw283ir2tCHkYitGTYpr",
  "key25": "2sXffd1K5xczRUUtrwUs3wafBZRMRC3dB2WmGgE6v62DCTeQvVYdAhW5SDRJvzg9FB7mar2kkWkFbpXKXEaSgVzY",
  "key26": "L4FeJwn8mBAQw1fRicxMyznJqJK8N6bRRhdTmKTq8HfnvSo5ta9acoZyHnibynfGCdQV6GEkLJYxUz3eU864iHg",
  "key27": "4q54VFKsCygaaQNcdswp3zipzaHSXnMiToFzcL7rTfZXZTiWUBqPx782epcu2FzKn7azLHVbX36NmVqcAwzQJeV8",
  "key28": "4mVzUfBoQ5DdJTn2pM3fd4RefFGCRxUqNeGhkjNMrqEkfQFYa8uArSQ8r5XjYCjECGRCaQbXuqkRE8U3o22sWwdz",
  "key29": "59vunfbwDNMksvesPDve6RJgnn4GqQxKNs6q2sJfTtWtqTY4Z5T1gHqsBKZPXrqfcKBFegmeWRqqYj7ACfanw15S",
  "key30": "QZNtTeYWPmUtVQCGpHr2RBo25nqYCJssW2R8wg3gQ5jHDPRwSZZyfVHE3L4CTGfSLkymPKGfWQ6jxNBaybtMAAm",
  "key31": "2hnG1ZNaWNk9UNpoQPTGhweqcbWTEyuhXEnDvRa7ZdhqQmeB3SZweWf2HNYvoQLbRzJLwoKEJdEsAAKL7fdEZ5Gd",
  "key32": "47PMm7G9rLTYyMUyh9vAxy48bpFnhqjmkcpiSZfE7FnV6BX8GUd3haAAYuLDG2RFgtAxJe8bw73VpT2uEjV1p2zG",
  "key33": "475pNEKzSW7mJQ3wZ9Y6B2ZY6WH2p8RcnzYhxRiqNjAbB5jw6DXTUUWuSjw5ahEZSvYkgR2etkzLertkAciwbmcT",
  "key34": "26fVNcFoXQqBGxmz4gVNskvA7Audf7n12wgojgy7cJQKDDb8snuFhUnLA265USpaAAXq1V1UGhgsgPsD3UjbQgMs",
  "key35": "3iUEF1Fu6Pfnv8wBqFffPkv7z2oEtFYDvCAhHRETUpMhST3dS3ZvLmPVUmC7BucWXkSBVsnboED1ubGCGkaBSenH",
  "key36": "4W5R96XwJQJj1p8niq91YaC6NUEqQ8KVFEqoFwaocxLQGL9eucBSmjNNkZp7S3JhdzK8RcyzzwG7SVRj3xnWAHK4",
  "key37": "5dhu1DZi3evkAtxuWuy4Xk6mrRMTbs2s6VC39cjy2XPqfZjedHFfZWAy2DjviKi85GiW7CXspXwE9QBVVoebC99z",
  "key38": "5F1afaHvzyu9Etd9PqNYdYxFAGQq95MXUJbmtFWkrX8kk3jA8bWemze16T3YJg5iduVLJTX58k5A2k9MGgjenkbs",
  "key39": "5QuRUgoEj4f2QnmH5kcdKTWMCUWCvYc8XGmPtFD9xQJsyKaA6z6YzLvjpVwcUEamjPwyLeZqWQzpdp11cXm1mqAr",
  "key40": "3YrELUKRKQuswhYn5B8yw4shtrB4W6j3HfDnnE537jrP4iphbHYkrW439m2mMVY888Hq1Q7yakru6sAYt4ZXkUAU",
  "key41": "2hhXr6PcqTAo9XkQLnWXpXRVfEG4ygLinumyZRmX7ZgSWBqiCGgBqiqyqZqXe67vyj6mixryS654Ju6bvqsC2wFZ"
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
