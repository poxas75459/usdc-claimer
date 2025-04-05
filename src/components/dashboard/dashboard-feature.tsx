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
    "29nKhXYQ21vgsopbavohHxPd37GuXUVsQXHA7FhZ9K3qtSzJ42nDTRxMGcwAdAZYswvJAXFhWHvzsFZ3vJkiTye2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23L3yAZEBMsMJeqLZLvuKFX33b6nPfKfKmPVcGbduNHmtazkG16eTt7qPFn31R6KaQBzxmfgMg6nQgZG4eTzGMdA",
  "key1": "4ei2ysUHooFH84U3AiGXnAAbP75peCLi7a1bKTMr4LfCJRfXbZ9ykCg1nAQ1WnKdMX76tX7vzzcQrJw2HEie5AsH",
  "key2": "3CgM9UaeYtioJDUWWkE1p28TietZw6RPgrgfJDxmsnegRtpvHKgi71XmgL16Jep4c1WJjCLHHAh2WLjjUYKjNY5V",
  "key3": "4p3rpV5yz3JVZXw8AvvL9fKkA9gusr3hPDTYtBVZLo5MSsgjciDWFHHXMLUoJzKveYRk3UreFTV7DzJFcVx9Kcfu",
  "key4": "5EMd6pM2tTWeNbhn7YnEK8Pgnp8TQazgaceS6UyN3H355kqVEEmW5DjXcjwjiSPu3xCqHuWzKH25MYvQmyhM5qRK",
  "key5": "3UnmuUqpATNtVRGMX472B1kn7PA2BfiGQiihX5Ngrv1em9eoGGgpMUjT3RD88SWmNcnyvYwCGeQZe5k3s1uttZjy",
  "key6": "3xpuGZYMo8AuSqfcCuHpHaWNz1rp46dRmL4W5nSKhKqFCXtSVH2YySrxgewkAJ6VpxHdN4yMc6NeEJq4CLxQk7Yc",
  "key7": "4HFGG2QjBWYXo77Nx6GMKXJix7fhiwxHtkvEF9PZSygBpbivmvYaLd3RgvRQQqyqARNeSJZqM6zgdmJckjuNnQM2",
  "key8": "5BDVbFVwVqeFP8PexWnXhfs6dqg5bzF5EErFrD25LowZzSvwGL1bkcrMghuQNRm75tfhEUPJVXQGT5GMZ1NeHTm7",
  "key9": "4wvrAcvBpq6BYTUhyW6GxAX6rL35UXfcKiezZKVabfHhbDBeeLb6nNd72SBrukdufbyz7AZrii4iteFadqg1bvct",
  "key10": "5UPyC7R7MmZtL7dCaSbQgYgQ5JrADygBq8xoYtGPnuQ1yt466NPPVDnfqfCwRUHMNxhQSiGgMCk1hjXLLJxRmwPc",
  "key11": "5u6gEw1yGoE8atPPREgvY4TCoBbvss2eGphmiWTdwummzYriAvCCxZLeL5kpbnrScVE7RPH6TiWHCJNLQbh39sU9",
  "key12": "D5M9TxZeBJF3DEQ2p8NSaC3AEcNgpfFzv7USyZ3k35wkj5XZsKifrNBLvLmSEDqvvDpJr2CNT4avoAj1pbknrUM",
  "key13": "3Kzzznzy1Tv2V5n6KnsLSZABHz13qM7Vamu4Q5dzcuVDrjgUufrn6MD3XNiKBo79PJU3K9mb2TKoDretmHDkjNiH",
  "key14": "63dTtURuYUbKHNT32apKF45LsWyjS7FXJAptp5g7iRsdy82EWPDioJHoPASdgknrGeR6vfCxcX1GeYZRJpPUByos",
  "key15": "2rX9Fy7viFaSnfUz8AKJpkj9Fq3vfJ7hEizsNCPWi2WD3rHGbntbprpyrCzGVN4umEUyLbVe83KPQh39QTBa6fFL",
  "key16": "45TuoxpVDYGjHPo7u2yz3Tu3JB9kfm3TPDMZL9WvweKjRV8q76MVC3tNhsQQhX4zSHbbTAVPwUbq7yBoP23Agozw",
  "key17": "5zv1qfLbPd6WYKEubi12RodJayAfryLfkmfhvUYgAQW3uNeYvvpJ3kch8cY9YrJu8m72oqP5G5N68o9TMuartyht",
  "key18": "z2NX3zDfSkg7BTseBFH9W5VuuL7VnTX4ZHnohWzeW4zx8B7h7QVaDVh8VsGpkRVGfEbtY4xiURn314doK1K1WkT",
  "key19": "3FNZrTLqKFkchsUoEr26Dw25TbhoWJg5io1MM4eHQdajQEUvmoftiBjQdaW4LX288bwtLTd8zJjbcMSzsdtDm5wN",
  "key20": "5uobNp48hnms1ung7ujppE6xhvdtcyAHMDjqjQWkVoaKeAsbXfVjDZGPiqNCoWa94YcaJRY5ESMmiUv177GmUipg",
  "key21": "4Knob3CoqYRhV9puoema1Zn9zjmjmu1aXfLqYwruVnPX1KstFVJVtKQSpEieLECfSzkfUtKdnnF3D2SDpwkqEWx2",
  "key22": "42WxEsNb8W334L7gwXadeqaa2EaNhedxzRVXgd3FdaCvBFpHWeEPkViFJYaxCbc4tLoHjadAcEzVGrza8B8oi6Xw",
  "key23": "5zkGkSYL7gfcY2xqPXt2BzRXa6P9TtZ3x6Aso6eVQKbmnXqEsYCKyWvSE6P7wozGVLMuQbX3QjEzVBhsjamMdP3a",
  "key24": "2z2kjPG2Kim6yhXLCsfah1jx1arHTkty5PNV383962oWz9iVTY64npdTTtqta1rRkYhj9aN9FMjH5e9vJ2wX5qvu"
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
