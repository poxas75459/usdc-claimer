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
    "3s74AJqieYY9waYmeu5jdddS1Xohp46sN6oJJUz6CDip5zCh4h6qNWMHyxJLwBobPiJ5aoSGMqD2iVi2K5xCpAVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YRZej3PS1AHSBktGxRKFVeoj5xQX6HBmsu7WD55aDRRwcQXzyMxYCrDmMPChjWR863CYRFNnrjwtUrNg5gcmLq2",
  "key1": "2Y7hmm51g5jrXErNoRDS6kxt5gHwFJuDRM1RJkfbJteZJmKfVu1z53N8Y7DdToxQKQFrdebcT9vmiAYuUWbe5wUd",
  "key2": "225y9WPjgJLPAcdeAAeCjfZdZ31UJQaZ5XLtvghhpypNfvDvL77ZEmuDwj9EPz3C2bU3bEXa4muU57Wf73x6qA3T",
  "key3": "4HLBpQJj7L9bEXkTzWw8unQJb2MoLhRK6EQZuutYGkERPUfgvVQBrr2BTPyhTq1ugFhtaadfvb7H3YC92chj4jeY",
  "key4": "4GWiMwS1f2A1vqQApUzTc6KrHdPEKskMnRNnuuurffmqWr7dYM5zE97kg1vZbWtXUPJGvH2TsnWgrEPS58JBeuU6",
  "key5": "5xuLHUU28a62gY2SP8yKWfBb56kUqWtA6ax5ojjyzh37wuyiHxiz3xk3UktGb7knvsEiMhHR3YBdxsdrAx2UmZ45",
  "key6": "2Xrd18nx43Cm6ZbZCebNaDp5f9j5k8DptM9uqzWnUorSmpWQynwPMZevEbg1wUz5ecovFdz2trawoRt94PMy2AKv",
  "key7": "4m68wds8Z8ndc8yottF3iYAKykR3KugmpwnwxiicF78MPyhA5CEHGe1o7zyCis4ZJWhscgEooL3KavjjZBUeJQxe",
  "key8": "129yJV53kGxfadkLHKJ1eBHHzts8Ua85wu2nw6wvLc27mjh8Vmt7QJjKvkJTFFXPCEVCvRTWyEspNNpCZN8VvRNa",
  "key9": "mWNiqmG7ZqrrXjTU3Er1gjqoKKaYAuV4Z1P33Bx6t9TBD8oMXSKWwKYPd8UuaPcXSBPqnkkKKE2TfLfnJ1VnMYQ",
  "key10": "2anrLhMF1tiF82kRtzjXQaj87yWs3YsHgNGU8Zt3oEZVZUhM6Bqg89PZrQ7Gkon2t1CshGDwgGj33C69qdceW2kX",
  "key11": "5DLvd628TqqKdWPQNFjGAd36y32JgiFP1XXiSjeuUT82xV8vq6FZCuHUi5qd2bMByTjfZaDugqqhzHCqCkAKWEd4",
  "key12": "3NXko28TM2oNQDFcqwHmd5rpzhZmCYjjUPWSBY2B3WGCUprXyrqee5ykjRUP5GAtQ6fdWDrLcjH6nVBJKUYKBjon",
  "key13": "TPwgbZ74dbqQtaMg6d1TtaT52BCvhWmAawZrQbh3J11XSTMpjoDxG4bSN1CMkgAEZmeqnfSsLDLPRdfVEVmB8rc",
  "key14": "2JTKYR1w7PXQJHefvqJ9w1kiDjgRWm3raxXErCVHaHNQnVKU5sGmkxbF4uGFzXkesVW2EUZ1ppRQa55a2vbB2anX",
  "key15": "5UyWLVhiMBZ5c1mTkoVV5X1iL8yHsbWuoz752Aa8w9opaLNQy9RobteJsZTi7KwXa6owtLddf5Kz6xVAzZd2ruhY",
  "key16": "2WsCeg1PhTPtZGJcpQo9wE9AseTy9zWDN1QmKaZ3X2qGuTADLp4cxNJfDPGMdTTmPEXsonYKKTsa5AcjwVYNhMoH",
  "key17": "4D4SQZA1guhLivZXmn5aAQGTCccLjQLUekoJFaKp5QHCsVt3pJ3hxDUwvvymBMNsUKZjaiFqL9ogD4BuuaECTWAG",
  "key18": "3scxbSXotjAZaVYXi3Kw46hNPYdTNF34ubWNjCctKRvy5tMh3yvhnXL9mkUi9aQNgYNAc7HQdja6Dr9GAu1eXmki",
  "key19": "5DnxQqUpJXmYL27R4dhKWqZcPy64ntapg7ZmedSLEr5CBEwLxh1ZMPFJJ8Y9J6Q19VuSnsjbnzRpiYSAEkRBJXwF",
  "key20": "TB83DJmY2pU7jyMhm5f943AuujRKJwHvxAgrecB7UrjmC3WwNtTfHqMt243VuffRNBnX8rpMeETBGNwe5v2Jhgk",
  "key21": "5jahXzjyxxTWk1fH1X8hnmFo36XE2uQZi55vJxtwYKwSXz4khcJCGHM47qYn7mUFrJB9qrw65Uf2Y1voyqAYz2dG",
  "key22": "3Z8T1jTgKyCq88NPgozt6TJ5ZXYFQnamSokAAqvY6R68XR44FTddrffeBxNko2Nf4X7FX9saFomyvTLke9i33Yep",
  "key23": "4rNWtm5KHjQTmeoPEvzeXCv9LYcRpzqeHstz9rGDsBuwZu25h2LYaWQCGgV7kk42TAJdnWU4Vn5x5FFhx33cLB56",
  "key24": "4bBdDBZ9rSbgdxdCvyeHofiQAiKyo3MU79xBmMmLSoxPPuNbnyuJ7zLv8cifDQQ7eUD4x2pzorrPXcsGKhKKG2pi"
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
