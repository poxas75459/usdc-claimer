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
    "5eGPhnxEg94ZTMubumjP2MRZ7ehnPbB84ngQtkWZaHvK6ygeXjp3aaZvUFbpG7UaNwigKt7TG5B9zz6Jaraw89Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACXEWTdMK8Aw6fDJkVr3oE3xKWRAncwboQJzd5jnHWWqz7yevxrtD3DXSdGNvBjH33QmMUhWzm2d2dbAwea2Wx3",
  "key1": "2sg6DRN8tZgRAHDmX7Z73rMHyHWh1V7CMGujMHBkyF2hXu5YeqkzTdZ7t2NBTfsusLnPYPgTkNB757KZzTw2Vjwg",
  "key2": "zet5rYAJEp6CvxXnrVTK8uGDUZW4vVFsN6kPPWYpqT5Q4ktL8BgDXycBVqM3ZrsLgMg65Em9dTmz7KJN8TyXySx",
  "key3": "2hW4tsh9ZPKWwGMn4WkBwYvqsUCFUdA62FCLt1GmB7Xcv1Mj4CLjNcW6CxsotfUWKvQPnKRfHS36Eeg6mSvwgfd3",
  "key4": "2Z4jVjL2KHPkdoFdhVsLYRUWP4Fcx25skNwVdCLVAmJ7DHGTqCs4ShUSxDW1wvHAxsTZoYcrvXRKU23rGZeKMKPq",
  "key5": "3F8AStJ7Vdab62pDs1aMABM1u6frA8fvvo5HKBqMJUvqXtyVtN7PhFF8kFJ7oSNV5asmjEav74kcuuQjpNVWJcQQ",
  "key6": "31tZYTNrSEcrZrVs28kSS7YGG6paMDyTc5rrLzLYitZEgUFzk6i6M2MBwFJPmeVwCEVfgqxxaDgfbU1R3iJgdswk",
  "key7": "5i41Ypki52vPy7C85JoUXkpchw9LnNSd5y9HDetB6wTyohqhvDKmy7suAD8ogkhQ6NWrNiEjMaxwhg8WYWMvM4uZ",
  "key8": "Jts7fwqjFTrQiuyeCv8vFnZ8d18zkn2mGqrVJuvbgDETWMjUHN42XHum7tNbCro6t8qm7FYH5ZZcjRCr2nm7G6L",
  "key9": "4jCGkKjhHXrVkpAdU18RvpxkCtu6gSE2tV7PbbSfXNvF7SaCQB2Em5dLpBfFWRQ6U3KAXctfJ1gqqskF9jQPw7WQ",
  "key10": "4d2UcB4uFWF4L2yjXh7ouNDBDNpjXM3kpcZd3jWtvMubhG11SQL6JpB17pS3G4HbaHyRybfTVQtBesLgUb3uJ5Lq",
  "key11": "5nSxebVXK4kCY2UqNTDyvnxdemK7NBAU7iFBm2kusE8EZEvfBNxLdjnX4nN9zf3DMsf8AiLidkQSWBXyBb9HpCkL",
  "key12": "3a5bK6DR7V2L3gzDguZLMSngWpxv5jtQsavBhxNUaeNie6AfinaLLXrKYaAKak3MWZdE4MzY11jzZ8TZPWqoG6Ti",
  "key13": "3a4QDWDyvi5CjTNNnVApEAAMazXojsStPypbZVRtnQsxThSMG841aTRxQsNtDfadGBGxvaQHt2ZvgFf2hYwy29eW",
  "key14": "TEw6DTXzFfqHuVYfYELASb71W6pm697ofNhKV8wRDrLZaW8riqhBpjUQFmw4ix8cZ3L22EiV5YMLvGHNyi8BgeU",
  "key15": "5hYwpyzGVJbhycCG3NjyCiRRGhXojjrhscTU3UHV3hXJxexVK6SAKVwwLRqeTbhF2qs54RYHyXNnyGSdsaBPfpg2",
  "key16": "4cudgYm5xjsjNtGC8nfLmRE7VdgnK8xizZ6mokhN8pZGZC3VRMbAykbtytc5WSCvx7HkWfgMo7vfAaw7DjQ8KA4d",
  "key17": "3NNrXEmqG1k9L6rb2DtfVfCsCYnVD8zMyvwuFdByQb1JDdVAe9dNp6n3pNeBo95yLDcXqKf3ujC1vcvufkX4Ltwv",
  "key18": "3GLiadnC12S5pYtKSW3E224BXqQKHNvsaGH9XpDigFL2u2V6WNKLm91Y5XjADLh1zLpp6E1eHCZianK2zvuEhMrm",
  "key19": "3mgLXxLoZ7LpshNS29Ru7s2qLnoWvHZadcHfMY1jyzC8qKQhRhe9MpbMKFrb571nZGQufW1jxdzQzC4pwsESvENa",
  "key20": "5Nu3MLrJdCKB7asyXQ4PcMLyaMpDEvnikNkkbzSLP4qREYqqCtFKgn7uv68buJ6JNwY5dDicFfXCFWd3cQkXisxN",
  "key21": "2fB411qk1Deg8KzdkKz9ij671Cztzf3RnxwopSRQV8s53oyK3wXvc8jajfZhUEk8Dzbkkbvjtbjd1H2gyuRY594U",
  "key22": "2Mifrv81v8YCH3iQhoPfyUkguStSWMzL3EejCcyA6NCU5rEEkVfYEEccv36XicmYPVUPkpVmKWhHoy7msJ53SHan",
  "key23": "2vJrE7cMe24QxNCTRXq5E1WBeZjE31xeKDQtXu8UofCdFJV5pPPRoEKFJFegWugXhEYvSiNXPtLzeEoB6oiNefCZ",
  "key24": "SxgkGYXN7NhSLKTcihBduL3c21G87UjhsHKmjgdzUZo9TXD23TRngHCc8gAYxmCuaGE5md7Wx5B28192PFTKRfG",
  "key25": "2yHmoe1nkmrSiGjfmofDER34bCypg72qG2Wk1xwVWcre4EBVjsXnF7rN4Kp6L1YMgK9aGu5H8hRN178PX2ipCXHE"
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
