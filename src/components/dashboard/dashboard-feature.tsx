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
    "44hpQeAmTU4SSRueMwnu69r6pt9j8345HYmDJa1Wjs5vXoAPPKmnSKXtc3MKDn7ULxNrhxCg3RP75ufuALhmdgy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opKCCAMomCetwnTNPhozT8qLz5WrjU8GATvmyqV21WKoxobkYwxJ2fhFrRN2UYMcTZVyoLfAvw2JpeYmeifupD4",
  "key1": "2iWb74pWLEq3NDjqGQH718bePKdomq1zSUUqtyJyBSxGF9WNRPfQcs956JHjU1AyBWnSfG8EwSCXtyZkcyrvkqQF",
  "key2": "2bFNq22TE84qpMJB4zFQG7XTQE9h9oFRYhsudRyqD4bVpTfNJXEoM2eD6Ui8xenLPdWbQnHB9zzUV8t3fhDk7zqo",
  "key3": "5kgjGMLosHX1tcV361qCFnwjh4sY2m4nkpgejXPpAVkxUYfjW4xewzdZFLYADBCBYeJjRq6UL8uzpJCYWDQnQ69Q",
  "key4": "27yNzTBwhe12ZnVouNKPjS6vpvi5nKLVUohuMYoeZ4asx7YccRBmv91pxMu7TiJyUNyUCFpxeYpJ34V1wMLjv2o9",
  "key5": "R7qbMPgDoqEQaE5muRXEYhqKHUs348EW1Z6SNGwhJqkVBjFRt2bkrA1b9mNuwTdwjYBWX7PM2LyMfws96aCoQe5",
  "key6": "483cWeK3Se34w4MPwuJiJz6fi9RRfh3ZprZAFwWikkhZw4dQUcoC6kyNwXRxi4qQNjRrHAUsNA3BWiD9eSzxTUUh",
  "key7": "4DgcSEvNaK9ewaagMErC6Tjhp21B9swGfYQ5cGrK5Qt98GwoRiWK8BE4E5AHtscUqhBrqSJQrdnET9nW44NwtzXP",
  "key8": "4BDtq2CeJN1vRSUUEgFuP4Hhjn7RPV3CxMAVQb1KbmE5gtqTJpwTxE97RBKdxMLsKLC564teodft5nwLg9N5yW66",
  "key9": "z4siN2GxujNCaadFqV9C56zNYRDKSXbDF4AsP1AmSC5RbtbpxkVefzpAg79m3cZHRbRbixDN8H6kxqtyQQ4JxmG",
  "key10": "g1FaRyx7pFiB9xEutL1yxpcYUpJV2iSbNydgSj9gFgVnTM8qyBgxZK6UBTPxafMHESqe5ykENzPPL6xyR68tkhf",
  "key11": "4vH79K1bbguPQkXXLgmXh9PZKfPWBHhKdWkEX5WeweWbcSSKdJsHRDVjvdyjUu9zkWer7H5iATE9mEW8qwenxbNz",
  "key12": "4UtPrW8akwD6HMdW6eYu74FFyqZsbLH26FGgsT8MmDKFzHnYa7S8yZ5xudAf25s3cVPgV4fTTWMdTSTkuRB958SG",
  "key13": "3R1r358aLQnL8ZwKWWqLgvpwchoDB14SjRmZh2P4K3iRgXXhaMryNK8RBFCjERbzvRXxbauSmyqAzekRfyhoStBN",
  "key14": "55pixg88JB92TZXtMfh4vrUAnkKun9MenvdwA8WugXoSxmYpDf5FT9kogWZSdZ6sjopukKMXFCQou4jdfXAV34jw",
  "key15": "BNPe6aykkTQkeMzHym1VGe49yK96sqnT14cAW3icv797s3Wu97p4NR7qoqPvNfUWoNvypxWEtau73W6hLGfJ7rb",
  "key16": "3JkYbrVznUM7Qzw2Y63uuqPeMEECW9fCVjvSPj9aoRyC873DWPJfpRd1QvJX3Zjurk4YZG4oCCczn1oWYVxPysuY",
  "key17": "eNbvUS4PxDxfekqu8isNkQB94XGMFRpZJCwjT7V2mfCg5EPNJY7t9qzWAxbFL5PWN3myt6G3SWhb58S3GvccTcv",
  "key18": "4vdeSLGBwsuEPKPeo2y1fMYiCPVJaV3e8oVDuzfKrwfL5tAGD4HihhVohEsqtFCdZoad8EN9F9HuUTkFQA9Wo9EU",
  "key19": "57SLyFHne4WjMbvScC4JxfgnX95YWgpEHHxqtukcK3JwNhCE8gjubn5ihaQBvzzkFfEYFsUT4JgHTqKjybAXXzES",
  "key20": "2f1HbXyoHSjcyfCkUw3kUuiFWcz3PtYQ81uudGD45Hm3rzyBgjDNpqQneJsu6UrKy3KckCQhGSe51qZa5aAj3jPi",
  "key21": "5wk21ecqbDrwWk8AwFYRbiWA35UbCgSfLznh81NWpU3HGTeVC7ASuMehNg5b5MK9tZxFEfiAFqyLFKJG2Zhtw5kk",
  "key22": "2Yx4SEfxqkPCqneHg59BLS64ygeKuF8R4NgFbx9Rnod1KBkcpAWDr2atqzRWHqSnMHJJ6DWtr2bSaJh2vsfjv8vx",
  "key23": "4PJzotaR6XisERrQ8bgS1HbXaJWSk32zdvz9bMAcDT8UYg8vRXqDzPSdfnTx6EEsxcbe92gQAt9kFnqE8h7vmMY8",
  "key24": "4gmFwYCU9T5CJg5umNQC4SmSJ9m2jBLvY4NkZzqSc1TAGaSidfCbAdpnTbZei2hLnUAkcQr8SKun84mZD7gVh2Fr",
  "key25": "3ncypGQ7MYhYqouzEdfVALm9S99cfEcYGysGeVELbaKWpTcmjfXF8XoERy49nX7fCu1Q1DkzS9ARvUExfriKV7jx",
  "key26": "46CQkpUBdgGWJFJbouEhCEGUhEQMBA68asKxh5zCQYBGY6e94jgNByXN2MaTtU518SEnKJPQEMQHa6VkAwJNfADQ",
  "key27": "sgAJLXby4sJBhxSRkpvFRoZ1gsg5CnkYMtrA7XcbHkbpCf7WQnEC2wcwKF3ob7bPThmGEzE89MX7yrvk18LwSa3",
  "key28": "HDJYmcHHctdWLecb8cpQAyXDpQayaJMTGtREp3QBWAeyBA4XAf2dQK9XvCci2yJhsthJaDfwNJRmq3nEYbvuFPh",
  "key29": "33jXyjHv8wit619dDQ4MJiXr8Btvv7pFA9biEdnngrYpXL3qpMeP1XJaaBJLa8ZXmvayibFA44faCAgGXtSTLE4P",
  "key30": "26RGGzfoZiCHroN3vNg27SLTzvgHPAqWYFcorpBvQhyD4mRmhWZLKKywrNBUXX9oGQAmZWYVMmbg1E44Zwku1bvd",
  "key31": "5XZT1KkK78CUEhB9btyCu5cTc7RfNYwYQojM3cNDPdvLWDqa8akxKLoptzPGEfdkbMkZDgA8AWvYPsnRjHZXaWdP",
  "key32": "45hUun7DhQvFGx1dDRFwcTfw6X8Jijnuerzi2mJrafiwAt52gH67tSxRJvaUYY43ejQHiV72QWrqeKfXqHpWCtFX",
  "key33": "5ckmhYLUieNGnimmhG3gad2z8dH3E7BprF3kvjpZEzKAMRuU1DTjEd5kprZXkT23rYH2aDXPjismbLLkQsGDrqUx",
  "key34": "3tb8nGsTiBLGdZTb5urWMWCueJ7Kv2h9fPfvSa4hDzR2tQKskksDxYWhgUvqy8ciSDT2Qw6n6kGAGc1YKCUZLQti",
  "key35": "4rzjrgRj7HdZFNx3Kp2qctKCoCSyFAvD5rExgic3iJphr7C4ezZavfrAUnH9ippDxo18nWH6EsiANu7aokc1VfYV",
  "key36": "28i7gD7pYZsfTxaQ118kt5SY96sin3Uw2ASz9JNcbhj6PWjGfbbev1QaLPFfPucR2R2dspxviu32k6eWYzmH2Dxp",
  "key37": "67QS8ht8nLCXpiyLHtXQYc5XEA24UauD54BHmFwfZ8mgyTKzBjEWbTrcN32WBELHEnvWmDPdMzYYM7jEPs5DXYLp",
  "key38": "5BkKEdcgvXcJq5Jba1hwjCrEq7DFYtJgB18naAUvvmySqDmFionV7XBisxKz3qRW3cNgtEeqkoUuHApEoo8pNMQb",
  "key39": "5CxtBuAWbrhXcwfmRQdXMEvzLjr639qQeRnuTRDt4zA8hodrtVCEPHV1ifQGuf1aZrodatzEYfyVewp2VQvXZQry",
  "key40": "4b8qpaYRANzmBTEixtvU2H5UJhaVE4TWNxMtJu5nHjGwDC33gfPy4XteoWmSQEdsTMTNrnfjgNrxkLd4iXGLv8VP"
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
