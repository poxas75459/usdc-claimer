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
    "45mZQjftEtKPTfd9S6EYRfEGVSg1VQRegr6UnLf96UekieWBEyqKJA6W2XkXE2bZXyWRUvsC6tu7W5tqzsYYdRoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XTDbdURgHHpW3g9thGjEkmTdCCy4vc4FwLunoN58CVqepidRWhKwgfAnyZDbNQ2YgD8YQ3iVLeGuetVgZu1KUkX",
  "key1": "2Cw4SJbv48FijbzXi5RBSdHd3Xry7h5EgEjWPzuq8Z43hWeqJiBEuDKKVdHqBTjAi5v7R69KcvLcZr2Z7uH3tZF4",
  "key2": "4eYPvCcxcAxrHKG8CYpUJA5EewLMVjqY88vNQ8JDwqgcN6mBYKLdgsbxcapL73Teigv48E8rJsZvwjLJ9ipCdz6g",
  "key3": "XdVeoV25cAsMaqBhrhRBY3PUnDuiMTvQJi6dwo794wvMt3U8RHUpumUTU8ySWyfq9birvR883WVUrgMU6hXGWjK",
  "key4": "4HkpMxK1S7RLQJV2CPrtDqqYBxRMhs2ieS1djdctdq7jnBexvJPxV9SsT4Co7ALYTSwc3LnbRbFWJHbXF1q261TJ",
  "key5": "qREBMSihW4MAniisTc57Z4Bdiq6CPreZEqLaXipM96w54VwVyhBLoTDsT16LxebBKUY6mdX7QqgAbdHXoFYpuXT",
  "key6": "MFb4jVedErJsJ2ctZLoWXihsgAfaW3D8J8LWBWZqMXhQp2n2gzVg48rgNyZdGbWREZYvPnyuHLsLwC3ppsu7pPS",
  "key7": "3PzUyV8Gy5SWnhyNNR149jLi4v7o8GcGUqwXMaYwHtC62LNbaCcd2XfckVJPKECL66U4kyqeqU5NtsU6c6CGeA2d",
  "key8": "5knb7tSnexGpAeY5KqaygcmQ1icMKesSqd1VkTV4sUmBXZGs268Cqy9wEB1NrGEY46ax4Cu3robXamCGccDUpuAw",
  "key9": "2VcfWPmwWhmAj8sdf9FWPSPk4CAbxwgEZU9YFT4z9NvmBQv8mrqQfgeRvKteuMLUYu6Rq6hNtqqrYvaCM5ibibef",
  "key10": "3F7zsrzLrYoLgCkxmUaz3QPZ5EPsRNY3HKyAa1rbUvK35JZ5S7tnuAtHUJmCk148yHtBRhyxVN9R9Cx6sJBnghry",
  "key11": "59YdUw9UDiAto1u4kz53QnkhZdCbfJjf2yoD7SniPhWLcXR4NmVS6uPMj6ojgCzqui1R4yFhv9PHU5YYY4Kqw63R",
  "key12": "4sWNfknbJMvjbt1ik5ojZx2YXYrBCyt2uPvVyJWVcRyYkbE9wzmtmpD3eoJveZ7apdAuamjGd1o66oUs3nHvjmnH",
  "key13": "4QZHvGRy8cwLbTLcVvaeM9PHEytgucoPNvHMqjuUKA4mnm8L24ymxu6UQhnv5Z3xjF52jjCZXdnhwMAswbHq18i4",
  "key14": "56DYEdGiTbFydLRu1TTjaUnMES2B7FGoFVu9iKu2VcEZ6oaVmfWJDvuAAWzDX77iq9UnEaZuR7Vxw4iHLE5nDW31",
  "key15": "61Cy5kWeQp4zaTmYwxeKrD6UyY8d2ejb1ito8mbekgZBroYe27LBdrE35bioYDxxK4MGqGVa5MQEdcUbt1XSyoW7",
  "key16": "AvQqjjneNtMJgNmcHqHjGcZ5DB4BkUtAdWpNtJzEc7Ce1Z3weBUveuXuxgeSkUs4c25McmQPTHGai2AJQbWLUwL",
  "key17": "4qGkgux9qgJMCKyYjY4kT5bMLiZepUZZ69rEvu929AcFniByEb4eomFioSTLKfU95JgiKU3EpWx1m7pMVtwge2Ue",
  "key18": "5Sc5YCSRCahW31xicJEKwnB2cEwQZDvMtSgUrq75WcAfFj5YtR9uDEsK7x1KJcR5J9Wv8xF8KbCq6uGDtJcvMLmM",
  "key19": "VRvPWSDxaXJuivwT1iPCRNHfxbWUZt8jRfLJxSg15jcyUzyXwXrN3puLxQ4jvwVK2cmjqehBC5ELJEkiaYS5zXx",
  "key20": "4WmPKTog1pBQtXzHEKgf9WNURdqfAhr8rnWqjMaqkVLqnV5Sk8iWm4qBgpwSdNXNQyvDu78eqx8iecz5kkgDJCWR",
  "key21": "4ZX6NDYrVS4whWaTXXuCwha2pnfL7Qfs4fXAVsWErTTYsP1oPAr6R7eNbh3n5yQLm7kXoW5YK4WntSBRWkQiXHdv",
  "key22": "5HN5Szx4SNiosJBDKsBk1PojkWLHFettvVtrs7M5e5uhi4FH3rRPMEgX21ZNx5vLWPRpPoFUfNNEUeUv88T995xS",
  "key23": "66FeU5kPXpFGkcoVCAaYnHEybhCZzphHoU7Bf2HDW3SrdNR2cbgPp5W6xKcMUneMmfYe2JdJXf9xXnquG7ZFYCtv",
  "key24": "651oURwRAomPYrdQ2WyeQTdPGeyn8YZECgYfmwra7j3Hn4e49iMLjkRPQUFjCA2nF8VvnCMZKQrw321qeZ3mWtkp",
  "key25": "23Qkh5f2j4Z9URYX7rjuUeJ51WDxPY6q5eSXjVrQ2vjpJF4deUjq1fNfFVYugEZcoNLAi2zUwBtrYcpkb8jzLdTn",
  "key26": "5f3wZuFk9XkvoSQA7wJQuHig9eiC2mid2Nr8KDtzUdHgFzzo1kjYPeVmtKn93HYgvgZop7Vdvk11MtiawZ1pP9WT",
  "key27": "39oEGcurCm8KBpKJaqxAnUxEwi5aRBJ4nSMdZE4mUhP4AEqG4eKwCdeQuBKw6nvW5KtQtiYAsKfY2iNm3i4HqsCH",
  "key28": "3UUPxw7gwzjc4UrrtLSu8ixLM6V9Lm136AJYqM8LZL9YmJQNKaczAcCLE2BVaPVxh4MH8irjD486u3P2cWFoHzrG"
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
