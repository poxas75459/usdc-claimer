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
    "4cptejyaiRCovyRHy8QekMHrKkzspqEjGcxZFhNgCkXL6XZCBThTtoBy8P19S7PF9ehzcXycWf5EqqQzSovdKeYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqLWyU9EjueqTL2aimb21fmfM4BVHaHfqepPRMYbFBUa57danZ6aH91hjS8o9E6EzdTV8uPxwgYdaynoEAxL5cq",
  "key1": "5vH54sm7BUY2DgK5drBqtupF8W1xoV5zKoCPKPZGcAjC3AaEXgNT1BJisBvCyJbfiWqFQmjFXurbEmqgncaVCRAK",
  "key2": "3iJtRReY1TNRYeqrtLJLZKXNik13yKAFCEatPABsbmKdoqDa7XNcdSm2b8EaqBtnuo2uxDVTV1gHWXwf8aZBLrjR",
  "key3": "2Nr5nrsFc7PCjzmfUe25RadeVc8WfmLKtjnk5jLBjk4cKzKZ8ZTahoedi6J2CBk1adkaGcdg9UVgbFiA95v2FSeq",
  "key4": "5z5cdt6v7iDWpopVt4vdZzSQ5xL55AZ9PzaMqLR7FpbKH3dkQfyoHSSiP9sbXr2zHTFagpMKyx1iANjf7Rn9Czrk",
  "key5": "BJHCC37D9YJabutqHxJ4Qj7MX2LaPsSfsfAXEzh3zLqG2GWJk8vTBGbbVZZTJKReDkEw9HKqyXZWmBYNabnPdHL",
  "key6": "4mAPRf7gBy2rs15enQZkqRGGZGa2Mt4rShxRotx26euPK13eYfk3yHYLfTaQ1SqxzbkvZSsqqqszY927y5jy45iX",
  "key7": "1fH1CwcnxBZj8rRSdei6N5BcKYE3xZQKuJg6vWh87feiA7fVdQCc3a5xQqhi7rnJZvTBoFfMmw6FxcEmM36xnZU",
  "key8": "4tSXG4CMWLnroqxFcLPv3QkDT83GnHQgnFGHHuM83h3n21bHVZBJmChVcHecmYU3wKCkkuj5w4PdH9JLoVvFHag1",
  "key9": "LHAVHi9KsDqhCZxdvDdSt24RtjpVDVGA9RAkZrxBghecQoiRWQ2FpoEZtLwNzeJeyNRqqSJCZez7DZbyK9yYsSc",
  "key10": "4CRt7P1g8iskiyQHCN3TEHf9PE3Eg86rgGviHE6TjenfSiad4HQU4h4VZzazpNksKPxSh1VuuwWVVVJaw73Dz1Fs",
  "key11": "31ynRt9cmwowVsWAXdvGHXWHD8EC3XT78EGjLJiiPnZCjFvJSW2iQ5S7sZkokXy5Jw2WCe6BRTKiHofRqnynDuX3",
  "key12": "48cZjyonP4zMUoPNzvNyi3btvZyjYJiRW2fwLBcwHqeA4hRSr1bEW4teJ7csejhZmfPNFdHbLdkyCVebKPotWb6S",
  "key13": "2Ykbp18UBjyaapseT6JtBrGSyf4MfPeMsLx1BtduJpnm9E94j7Chp2kGyNCoMmHxg7VDJ26SMnc4b8az3aC6fC5G",
  "key14": "3AdMquNPPaULJG26X7qxxJQ1HWe9k9b5fNDR2djrodjFmtKJbdwyNF7qauPLEEjoEXcHu9DjyoJHE5qXgQXGDiwY",
  "key15": "4ceB4ry8koNwCzK8CEVix1Q6AigpsrHi2rBQKPGj3p5hyiYp33wwn6FJ9K5fmBh2Wx81hjmrqM9EzYAHg8eHtxmm",
  "key16": "5Jy8bj35BBhXqGgeZdV7bZcAXy4xpocu4vrtvysKKY2pfH3yQXdsnMJu6AG8QcTQzZKT1F7bXAdvdEVdDyVfRFpz",
  "key17": "2JPMCCP41SfUsbDh4rw7CzPVjQtnB4Zr5LBju33hX2RmRFMfNm9T29ydEKvaDpiL9EjPaskrsdB5y1k1rQ7tySig",
  "key18": "3fvXeURxHtBZ1hZ7ea4yGFXhWy9m5YgSP228TAd5nyzEugT3GStcS2FnBuGEGkbqY5VVpAm5KZEVo9yukcnR6gkF",
  "key19": "5re1KKDvmpL1sR91YB8HQjqPnZx6TdZDnQqGcpRMQs6Kiy2wJLpvNoymLw9BQxjCKzXwHcV4YJ8jAHUBumwthQFc",
  "key20": "3i8Avjc1YWEcMkBTscPKhRFXyGRAzBHthqaXfQSdRvBqzCKgosZt2HEhEC3YNKxtqs2YxuZbjtNoF24cXrpU3X8J",
  "key21": "jiMBJ4ZjsTqVezNtC641LQbYbfoTxSMxr1p8fxyjaErj1m31ASNueS1AfSdguD5aN1a234RFuR7ZnybhDcogGLP",
  "key22": "4LS2vBcrmSdD5kgjdX3YvQKgsQudLnXSpTkCJMykdy93PB5mSqPxn9N6ELmXCK48XWrx1jQ3Nhg8CQrw5PXpfs86",
  "key23": "2eGkNPPP5Q6DZhFQTd9yAY8cP46hXyC1zZhurgqRH3WquYqMdHiTwYHLMuJ51JvUVZmeKNyNLT8sZ2214tiJYDNu",
  "key24": "3ELAznKMBuY9d95RyurKComihj5A8EiuNgdSHb7Mk8HraqJfQMfMBdx6GvswsCuKXoGEZkYk4F1QG5zM6E6haiQb",
  "key25": "4jiw1CDimwunfET1mF1KWGCYyirtmELSheDEKwLNJAFL27S3DebBgCPkFC6qkxzLZ3G3bZVRW1S3HtZCbqET296p",
  "key26": "3XvAEMRWKjoGA6DcbEYbfEBiuzZ8gue2diU1HAEnwUXVLah7ftPDgkjbBX3D9z4SKT5kyDeY5fgR3gMptrj3rqPL",
  "key27": "3Y4HXtzRDkTk1ELLNv1fkYXegu7ccQN9JCKKCzMUjhAGQ1La3gmi12f5nf35uUN3YDGt6gxw62ju8gVvBvVK9GYQ",
  "key28": "3B3oQTPi9JkjvYZfXQNDHU6eVVTF7KTNLUyDoG8eUSZSKBkijVpUTVYsetDxZ5HgZgCS1obKC79EhtYbjFRPUPpg",
  "key29": "xU2iQg3DZrrtrfpTEYGogcDDQ8FGpq2EqRhnbkQ9XqCjcUD5aawCZvtTdzFMgJEeZyrqmXqhMsureotGMdi5vJe"
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
