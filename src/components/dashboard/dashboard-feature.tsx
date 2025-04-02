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
    "32fRK3MgE9c2zAJHxMjRm316cDBHuRvrAsRvGj2SSByJvNMcifqbmmN6m5HDmdcFmPidWcda8zKazPMyBQrCB8X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhEa8ouCGWijjfqtb5CtCoKbnzBBCS9qzutJaKKz2JtasDBUPNkebkabCtGEBzPn2zH1ET6uVLWmUHuP8FF5e2w",
  "key1": "43yxWj11trDUxkZaqkjJD8URRqJohRSWRWriGCrjw1885THK1HTJKGQ8btxYx4dDcYJTjrFsMnrQqzLaVMzHZpTP",
  "key2": "57h9SJKdPpXraY9vhQSFbRRNq87cJyi5N7dRr7A3SGdQh3wUNL9Nozxvp1bStuJ6qWwwsBaEgQbRcqLctDuiUwke",
  "key3": "2T7BEn2YoMNCRrrhwZwt9q7BjeafxKH8FWc3dzy55FcZyrh2FWgAW7RaLyEk3uhHdhaf8J4CvDxKRtSzVtPXVgyY",
  "key4": "5M4ZMiknhE2L4S6asj7ZKh7PhEM7EJipQqwQSMdSYRmCXGEidTYtX1C4usCQDEZtXVe5ktFSTkpQnXN5JMhjebeb",
  "key5": "5mx4JJvsahWT1j8dTZFyTWSTvdDgvyRWWcWwsyfT7ng29886cGL5Px2qiwy9C9ENEuNRDWFfXRxMm5AKn6P3LRZ3",
  "key6": "5gKDEmy2WFk14UaJSvJRs5dXGY4nr5nyCeGWPeyLEhgkBnNMxVfxYAsJiMWnAaArP8yLPr2DPjdCXUoyxiwgA2wo",
  "key7": "2bAMeZHni8GTdj7CTJbw5GqbsAyrwy1ndk6ZxfJ8g2sRq7sH9RpkezdDBAHckZg4pECtkNqJPF8iw41kCDvSfVMh",
  "key8": "5SW4WFw6dV7ZrT9xrHFYmvgNyugvSrj1boo3EhVwPaxXL5BK7kQytPeMXpidUQJJucgD5h4aHUfDp7A35NUcGfrV",
  "key9": "UJjVhhbRTzvJbnQ4Y8XFgUcQ4iUoa9w2eyThssnwqEZeJn9T39ZV8y1us8F3woqFCoJTaVvwWEzcipY1B8n57Co",
  "key10": "4m3pyeQjLALnfs5fRf8iDWvH92wWSAvNVhJaG2sbhipMtD7QEqdxMcVUr2ntxctCBh353aFhZ3XCgipQZVS14xMn",
  "key11": "2BSE4YRV248FM72tmfR9MkzBsAZSEoedkUCgZQrRNMhs4jt9QCwCdHaNfqDGWfeJAVte9hp9bxNbqdo3i3Sa8sS2",
  "key12": "5tzskvTQVPRC29U8CxUsjbDYrxE3mWKyKsjRsBVBgRHSznhvaJRjmeqvtRh6naBWMYLC4ooWWdARZAjdKBgtm1Vv",
  "key13": "3p9P9mRaT8Mnm2sM1C1sQaXuxFsLk1tjXu37c2zbd9a7o68HgTQQDaLS9R4DHTx7gEfByhf5LJfpQ2CzodSLYdDX",
  "key14": "2fgcyGeb4dgnVmiwd1dKmqeC7S6zX4PBzJeX7Z1xjDgmwvG1mr2nhcsRqBdaVeYFnnvc48Rsf7EyiM4Jnkp9Fei6",
  "key15": "5UCveN6bJV4cpK8qgfamcmUBWfnxVjHWRKJX8zYftXVwLWEydjAesxXNZfFVrvkH4T5pzqEBvYwhLRqyYbyg3cic",
  "key16": "2minh418U9Dgh4UYFt7xWuaUsArSxA8PG8SWNAAArPFUy8hRt5d9UEjGJkKdz7HcXHscQCkZCU6g6UVdEs75oMvT",
  "key17": "2P5B4AuiPdaqTrAs562KvHCJt7nV2hCeD4ji8R1JNkT2p6qQJoXT7QW73jUZr5NKMrFBn311DjEwy6y7Md59SdBz",
  "key18": "vVnkR3zmQS1Tcdj5yhZtaabHYjc1pAr9nJViaJeEe5HzSuq24fG8d4x5KV3UP2RryDWzcAf6r6ZQvoQLDhV8H52",
  "key19": "4z5xuEKBsET576YxM8xRtMoYjVzVGfZKnVJ7vnJPtKRMzG3Mu4TwJxuEquBzjFej9YDWhuq3fy3WtpPEhnY5T2St",
  "key20": "5VwQrnokTh7Lksfkmeuxzs3wjAQkP5VLQEH2aZTWT2BKqZj8kvh45MLpUfZH71vgUXMx6ZLKbnefBn4kLxyXFE7m",
  "key21": "34kgRcaidV6k3iXKjtg77JSa1pyjjCMgo76cLb8iBBUm8m3yS4vQZEmzA2rEqJiNVCBXEfepUYvMkRSuwY5ZEcDg",
  "key22": "3dn8vJv5NJFzM9uZHGcwSuDnq4UX1x1kHJyMwxt3vZ4QKLUmrYTRn8azqNwSGKj2z5Mv8r5yjWPWnooB8ZY2GRDo",
  "key23": "5zC2F3nGhpRcan1nYXFwvhF24GcfA68d3CyPRSQjnd9onCAx3BHskxfjAW1E651p8J5ccaYz3Vs1x3KPjKq9Ya9B",
  "key24": "5TnEBsQ3R4Cppf7GPjUaHLEa1QW5G3KDTtyxLFVVNxDZUvjwxkNBbSFiPpDtVUbghHNmnYR1vnenp8ihB5AdebVE",
  "key25": "2HkJRv35pdumWFah3bbQzvVcrM3pBtYRGq5khraGguc8s1AsZMMnQcphP7H5HrQDFHbunCZU8CtY3P63dhKcTtNX",
  "key26": "9RAbrWn7T4wyA3qRq6un5sctMydhBnN4vs5UpZ8RZUduZXG7tnArJqbugR812wVPuGVYXjHMgSe2vnByUyp8B8j",
  "key27": "5aoegqCAq5L6UPgMKR9bfZAByzB3jAS7gZahERAVvabyDXtNDuYJgHu9ywXNJ5ZeV8YZJNNGZGcgdnXwj5Qu4uuW",
  "key28": "4dqK4CRrKLoX6wULwdx93eLjwxpkE6fe6guMuyRYaffCuDxnX7g7cyp9sS3CcBH48CXUpMj4ZmSra1m3K8d9sz97"
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
