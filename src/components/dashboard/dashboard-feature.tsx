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
    "3Ymz7jfvPMYo9QmZrhezXuZhvN6U7kV8xCby9NLvEyiCn9eboHUj5XQpBKeT2Keqzjbx3Vi9Zrk4qTmseGZGpNjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BquV8AdZFa3EX1JYjjYEMgGZgvYxCmyKDX7W9myaNcmp2nv2Std8775VdoJDeCv1F3Z7GFQTStdKfcLgdkkGMMy",
  "key1": "4r5FA197F8Wd3gACa614EoFGgxCmUPMDhWmngmqaXsjzYuAZcs25hDU4PTZrbTUnmJ3T41ooJo6CvhC3byKE62rh",
  "key2": "27ALJBi5qQRHTz6jpKJ77HecMH9SLFcKdZ9YovAGvcjTo7Mbzir8fZPzj5h2kZDjbKnqJ9oz7EgBHgq7NNnHFjD7",
  "key3": "2NGm9iBE823p7QZzGFb7d4sj6R7aQXuPgsXDPWNREu3VhzUN12tWDkpZmT5yH4NTfbXpjtyW3AbzvurU6RkavbUG",
  "key4": "57mCaJSggEJKaamwswTrLEhiQw3tTyJYtkSgBqACQ2wyPbMrgtug7VZCbbhoYQ9WbKeGM9zPG4kmVccbPFwaeE2X",
  "key5": "VPVaJrAhHkjxundVW5faQD3k7YpJDzz4fUD7CbjDrBJ7BZiGtvUDyzwjozUCKN9tpEEtr9GS4iDPnoR6hEn6N5D",
  "key6": "5mUGLQTRCYur8J8iMDkwfYT8ThbKwexxdZpw3wnb5Ysxif1bnJB45Jxhwvxt8vG4nGhxHoUPgfmAFF3K7g7RtK9J",
  "key7": "2ohjoDFfAvsxwK9rr5J3TNdC1YShGLvktuv48oc61u1PW3GyPDH4WFtsKMs1eEnBH9dr5zj4kSm3NkQRBjPvpD7L",
  "key8": "22fXxmarji95UdwPFsxD4wUbyLjhGcz1CP6BPuVZBpw4ozGQx8AtnEH3VKKUcAkP6fpaFwyuo4VZEEMd7yHFVhA6",
  "key9": "3YZdFYgVdRouCUCjULSAsvLdxtRD28ojjborZvexf1MmH7g38K1mPKsAQ3oNZufoyZkikEP53LofDmr1gYMbDsqW",
  "key10": "2dkEp6bBJ2BPcD8BXpovtQcRjXAbvZ7RtRshGPn3k9CHN1KxVj2G7Hnxwn4a5oiRri2ZYczK3hER7gyTr5BDsXPn",
  "key11": "3dxZ4b4EQkWSVR5kLLbrMyB5nL8QzQPDTiBZL8QqL3dAAf8sxSuDX3GGbhAwiA6B9mMTUji11R6CULUZjrkj3w5d",
  "key12": "3bfpxrg2rTsXLAAbDqi5DpYsytFZJXkasAvQwWY1NVNT7FHKskgS15TAivev8oPHt2j7xGXur3jAWHR1ysB1yfBh",
  "key13": "fQRddut8mUQcWE1CR6DrXFkymeLkwHnJHo6UWvZgHcpkbSLQig6dbY3QEqn25xpVfP71vGJ947KYRMBB8QAUJ2G",
  "key14": "4tx9vY3DRymiAShLpPPLfJrbQzFEVYoghtKnGGLLz4spHRE6pfvpXeqVZAwGwfUKYhyXd3FGCFanKSKzNDQhs6Wr",
  "key15": "yfT4sqECLMgY7zS49Qvw4v49ih66rjHSqjVKaDUAwMCtL3g14KRKFnK3w2RhmsgYmo7LKqH7uHFKkcBmX6r6Mn4",
  "key16": "5Z9CozwHLGdAqJKR16GHFknrmk6L3DXJkC21kppku936MwLjt7ybmZxRErzjGD7BtgYKzrN7nuceu5euXAWkaMku",
  "key17": "4XQt3UR9jiTqMbKNPfZsoPXe5aArM3F4P182PkeFSqR8RH6NzB2eKHpNKHQbMWUkauQZxEsppRhJM5YJgahzK85n",
  "key18": "5ZWJQi5bTSDwpu1bpKUQVjvq3UiWGGkz7rhPM3mhiQzsPDvmEunGqvn7JQ52SX7mVzvAUx8DJRNZeziGWuLxj9Xo",
  "key19": "4ecCTdHfUyCKwfcwDQHH571otmBELXYVWULjJvWx4rjqf87ZADLv9XyP2ugwgoxJeEpg1FnLA67QVVtYevZa6Gqn",
  "key20": "3JwTDJm4voXHWHeZ6oyEXrNKFFVczUs4Cu55MLPjmLWUzEku8oqT2krEd2D44qp6ajEC27VtCb2zsVh9EhjwwdoA",
  "key21": "2cLyJJnzv1dMXZD5HbpExmMnoyaUG8P7xwwdF1C7riYdYJF9mTWj4sa1uFYEohuSyzeQmwWWhYkCq2hrQWnri6QF",
  "key22": "2mFo2juPqR1hpoAJjawgU16JcWhiMBHMgfSVytbeGgUXrqNiLBpXUGzZj9gy8TEt2hpAb6J9xh12QrjDebJX2tr3",
  "key23": "5Kg9ciwWWpXC5t24qtMo6RrNRZAvNesT7twa2KbGyCJtjHHDhkcSuCjXzW95i9R2iukZGt3xeAcX3j8met4bPKoo",
  "key24": "2paKSYagrTUKGgs1GcNE6N3FB7vPWSHHUVcuCeyRwuj8txvQ6MA5nFexTN9yJH9mCMqGLXkMeqRqh9a58gDX3HpY",
  "key25": "3H7RoqvCCYP7ieootJyySUmUjz3dSpX6U6kHEGxhpKCsZNqADLu16D5Spe935B82EbvRc3w6egWvM2NWRpHmB4fG",
  "key26": "21qtvaDBmEpitctwywjYuJh9KgEQEdgpY3Tk7Ue3qCutTC1eWEQcdjuYzJEPgXoTWQhiMUNUeMuHqYZBXtCyCog5",
  "key27": "uswjhaDJ6nXXvXi6BwJf1Dw9CXRsuVbGe4YFhinub9RqReJtNZiLZpv2HCcVqLZHDkh2JeMstoQNMnvGfF3NFzk"
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
