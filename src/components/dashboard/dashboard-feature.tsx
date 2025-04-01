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
    "4SYya7ST7cu213cPVkFC8FhKHgNNBSsV1vt6MMDn4ArpfbRCSdKVqmtozWVRKFWC1ChVU89o6ZhzLKuYvis3Waxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661mXiCyJG4eAAgdxUgh88LkBKAksoT9Zi58pP2qzdDu9ZW4yakpjEB9Jn328c8gJajx6TCVYH8UiUfk9eeFUeBB",
  "key1": "2MngQxNefFWtgtpVMRdyDbcQzkMH3zPDYw7qXpUVqRcmwCd7h2dTi1JQe9XgE6bC3Zcs2mXCTv8SYiVQzbsDC81v",
  "key2": "4CwuzZFTZ25VA4Nj2zBZ5artAMbHjQCzdHvPAoXJSwLeC7QdHiLJA6LuF6YFMEQYttRjR6CxUfED8CeFngL2NDNz",
  "key3": "5VFqFMDPJ7AH9DzMi6JGK5qVHGBAxg5ttmjHsRBv8SnySN25zGB8s6vhwpg8LpJQnnwPiVBgeyXso2Ypwvkk7fuZ",
  "key4": "95rRm1tcV6e5UuAXR2Re4QNajhgYrDezKAn9EEbq7HxC3bfYis9JXKW1DYMEHbyMTjEotguozcjhYr8PYKPN7py",
  "key5": "3MJE76zzVrJDDPmJ2HuHTupHbXVXa71RC1ViMNDCGzhasnzRBvigkPhxaQ957GhYyE3ME6jAtV7iqYNroVmF34nU",
  "key6": "NUWvL8c2pw98fksecZfR4K12P7Xe2AuYtaT8SDxcwefnW7mdjFvY7bLGGRusEKx6596v3A9y1jt7FuTqSX1WtHv",
  "key7": "7aP6T8meJ7tmyzy2yHfZU9bh5VpAVR3XkWDJnKm7BSSUuu6Qtopghj1UPwKqXqvnir76SQWoLxxzWyz47M6mrEy",
  "key8": "3aN6KKt45tZekBcomJRSvwUg61TNHWRzcqi27J2QgZNRdgKA8DBbJ91Ur4ZPgaqcCsB87aTLQS7a7VRJtds4czKy",
  "key9": "5RbEpdrsLpUxQyw1eQr6vDB6NTNeaBdHYURUjnuAd5Pt2LH2zBvxTBCmuvxoGvfrCtWkixANnSwZuyMiYXbzwvsx",
  "key10": "Vy2JxA63BQ8faA5wf2ZtnTtKcuepLbAWd5xLkMT6e6Gv3PA7ZfhWKQHbY6EbQHHTd8VaeHH5MMfPRTFSY5B1iAK",
  "key11": "5Hpxdp8KuaKeooXXPgKB4fs8eL8JNXdmDyX1jEpeGM7NsJRcdxcciqCg47Ys4rF2zKiPtET3q7GR4AiQHMrLmhom",
  "key12": "51QY8iDTyqE6XvrrhCnEVysHonEw1SwhQTdn3BheEex56f6dPcK6AwE6awS3X8dWnfkzzXydLPpQ3Xk2jFrmyPYS",
  "key13": "38WASnA78jvBV3u34dYih5J8hLXfpQuekevgrAavUTF92YutYKWJxfvRpoazyFPvBwUYyg3brpqD5Frjp9DUWXmA",
  "key14": "27fgNSBMsSebKbHwTxhQcGUVkhCmhPySrv9nWp3xwARSkTdyS7gE4RqFxxZWeLouL9ayo2NmhMKeCh1Up9BGP44u",
  "key15": "q8Wmikwh8KFtWboyM3EWtQcynggg8U4zqkm3opr2WkNwbnJiqViZvDKj3BBLwjaPmVX1rVNxpjLfz3Hb74BLVTk",
  "key16": "Do41PDVRvPLQCRtz6kd5uUkQBefshumiGoYZnXG6EJ678TCRFuzHhng2rVptBA8GBfx4HJeu3k7wTvmWQ5kazmY",
  "key17": "4YDciiGfkqYeLMS5HRWvDvryuMwt1wm4QN4shGFsiHiSC3aMYPwF2jheYpDw2HzpMMTmphLhkmv6VSi6RY7iUV8k",
  "key18": "3NcJmiRTK8k6QEMh7hiUkPFUJSJKSErb6z6HfTizQ98QjGwHMTezwT44HL93DdgsubHKKyKxxg14TjuvnQui9Vx2",
  "key19": "3sZQVNCisyTR1e4Sy2aftZ3MQ3jHGZejkqPjNsRuei1DnYo9FerPcHrjJUu75JPcP5AXMmMBy1Q7aBpnkukCA195",
  "key20": "48gPMKPeNgq6s1iqGdH7t157rgxgK3SKCPGQ5Luu5tPDECVXQaNKtsFZmXKka6BmKHQZeiRywDw4ofAsBFqWnuRb",
  "key21": "2HzvYCgMkZsbX6Hmw61sQRzGV7JUV8pFHb1f5ueEQhs6TDqxcxcyTWikVEB7aH5mhm4T4voj8onAM4U2umfLGeTo",
  "key22": "31mkraZ6aHoPAEdYFxh2XRAzuq3JKhzAVsrzYYgchs9tCKhnZYKSimPoTTjuLEjBkYM2Sc4cmncLxz1D7t4Zd4m",
  "key23": "3W2jSR4QAboB5hg4Nf1aeeYpZ65YsQmorTWyUrvWEHaKKgUNdoJLwEm4UckZe4uBy86KNbMuYF6Q7NeGzMywbj5A",
  "key24": "2q5zj6rcKUM3eBqRHowBxVMAzx7x4fswLq7bTkSye4aPdKQLCKawQqu4tzuN4u1UKX5E7kPFiH5BHKspKKGgCnF3"
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
