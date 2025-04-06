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
    "431rU38WUeJoQ7468PMwP2G82PiV418S7Uw7QgBj6a5LpMC8UFReQuwumoNJAJ5jUCdLxSfNy1qTYUvTfb1E6QYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGYDTw2JpyS8LroBRBqJpb8fUsxUKe7Gq1Lcympd1L7wHiha5FHmoQmq7cMQ1f6UvX84Xyko3pSQQuV9vjJKbUZ",
  "key1": "2qScg9LnM2xTPewbAqfcC18DLMnE7wm5Pxu6sErQjYkPb59VTZ6akbQpy2zEh631y6G4eYw8Z7Dwzrq6t4FJYkRB",
  "key2": "X4MwoCTShCWz6Y1Z1daF1KM1cc5gtyoRBG3F12Lgn2FPZMkZUbiTZsVJHLT7o3ibw9J7mDJFT2teNqMajRdwe3Z",
  "key3": "5dbaSJc4jqyiymBfb36Qi5U9e9CDA5CmTp55TyqFEyW63bbjUrVWVVfae4zd1KkpTdSLM5SErhcunrez47AZnR8x",
  "key4": "4hiWR3LAxny8ifBUrxqhRtg7vs27oET8L5DXCACf4evD6jR4J3TbgEimRS7dzm7fYcFZRCpMmkv1mhh53gQxTWQV",
  "key5": "5Fx1LexA2kv4nrrVh5YC8oenKZHmMfZFVdbiyVpz95xBFZoP81tmbQjYXNVuWVtq11kNZoqsCwWJa3xzGcHw4dc6",
  "key6": "5g7UrLxSWU4uC823qy1PgKCiPgusTRRhG97HkfX6Ha8a1UUXWRMwaWqnisGJ8vSSJtBUaGuS6zr418y5FQ7bwL8D",
  "key7": "355CayvrCc9c4DRe3MtEBzoddGMstEWHYNAy5XsaGdPM9HH1skNJ2Y5jDWmdRXnUPhDJAMuhHP9ZzsUyshjXhoMV",
  "key8": "4JdwB2eA4x1mYPtqgSBaV7EyHyGcFgWYXfNneN1Z3AWw1RKPo7MB6589Wnr98gRcDoxRSerNfD9nGcw8UnrggYet",
  "key9": "5xtcNfLaDq7ja7upq2Jc5N9imGpS6Qde5ffRdVDkvjPskuKHuQ98GhotfKwAALb5zrmmz9Byf7n2cxFHmVawYLp8",
  "key10": "5kydt1XGjsP5feSsrm3GKU21kzxWFo5r752UJAP14TSMYHfRYyLAwhdZhrF3Gi4UGwKCUJxr5Yyi7fTEzaxfoJuF",
  "key11": "4VYeoVpDksUkWBY7Q43M14MCcos9Uz5jZVQbHevezGiLxgcvdkWydNMnmyAQVE8owbnY3dPYoGbNbuujt8f4vu91",
  "key12": "4DfpVBgEwp1QjMoF8iQoPahKJqvNtrKsbrXdaYt8AdwQtPPo6sevwEXPoQi18ohn1k8qcxtnxdzfZoD5oLQCEZ4C",
  "key13": "67hn3mL9aR8Bq3G51bBNJWbkwkGyetDeBdS8xGp6Dkc7k3XYxatznZghDTBau1aP2KMSvbZypVs1RwYexWRviVcJ",
  "key14": "K5PJhHiVzN3ZwUvwW92siMpdpFKTxQm1NEv2cHNK4XzzXekeCKui1FERNV4pLdRanG2yyHqLc5tzukgyiidfhLa",
  "key15": "bFZprNTXcKs3mbzTrUsEH7FiRoeGMECfVGo7t4HuLCjnNqmTv3fEvPHEG2b41kLMvWbidUWTFbxctxbkL9cqtgo",
  "key16": "tLzz3GskFfz7FNeChvQd77XC1u4MyULmDCPzoMj1V9hmpe9ZQckQsTRP4J1rEb1LQUBsiS1K1N8BHQSom8jVtdb",
  "key17": "2X5KenxzLxrz2MNWskrkmwFu2rR3rxVW1RzqEJJ3sdxo77zATRn5JaGNHDwaCMBuHaTgRuk3mk8kyoDigaHPv7hQ",
  "key18": "4zzamy4SdrTmvx7LTkeKQy2rTB6cdk5qFxkWUuFtNjuYjKkEBrqXBzgwosQuao4hsZ79a7uEetNTEbNUJu1UZbQ2",
  "key19": "25nGqBbMDNzdA8G1vsigfyQ8WpFDsQzZsE6fazYDQsX1R4qXxN8hE33Zo6nzm11NeEQAg7dEe2c9tnFekdnHsqDA",
  "key20": "64R8SHQ3FBx56GysQc4dg9J7QQUGJGM8ssiNF1i7pLiyzXzzrRr1BJQTRpAfT8Gu1ps7DckLEnjJx6mMbWQeFJbt",
  "key21": "5f5nj2NA6mtd8PQDaNJihA2zZBF21KBkNoG7NUZb9jYsAeuMn5YeZeo7zqXpr9CvEE4yF3E2t38UcNoQEkaeCswB",
  "key22": "y8aNsy5pGAP3FksosDiQ2S9b9MMyoAZr5k3j7UZQeYshFn5qtcgNMi8tYJLtrE2Gm3wz3ssbd2UV6hjfSSBJSaz",
  "key23": "3uj1gJxZVktD92yQG39JKeht2wTdnFeDURks6hSakdG4wVEH6NDPdNkfrkwH2Fh6aL8k6ZXnRga2wgAUdV1RKD2K",
  "key24": "49t5ebrKcRg2wxVmxjecy6hmYT4w2TvTuoSJom1qztZSFUwT3skx8CuQKH6UgVNvhrV7dpZPsvqomjUotFPfRViW",
  "key25": "3QDdSEPhfbB3DB41u2kqdKFqBkdqvE7Uf6zepfWckdJ1KaP2t53g7PxEWpkrWEAKAy8XqLEA9fRZ9EC2yHbrmw2u",
  "key26": "2SvwppRx7ksb1BA8K7s3QSKnPbkQm5J7ePq3bm3tNWZyhcrHhatqQPVzrWtcRTgpu1t2WvgRVvT2Lv8w7RdYtMJM",
  "key27": "4o4XbA4vJaTJMWQ9pDe2Jm6cgJMe6fdg1NAdF1YBPquMSswZFqGQkmWQViEhKrHYcn9k18qHLkgYxkgPS4oKPmyU",
  "key28": "YWCuaLSuyHPRex2sf24YE63B5mGx81JK8wWr46wptgCVgEw2S7NYgKTkt3mdU18fkt6fXCHu4cBcmM9UjTtRzcZ",
  "key29": "2jUaB4JtCQJ1zsC1imHXYoFyCnKwAsyFdtgW4e4jrEujrUEH5EYqJAJayTsMoXnW9iEB8bmCJr9CG3yUyBh4cF58",
  "key30": "48pdU36D8QiU3jXyJpDXm9DbcjkDXo5LjArGbnx6YxkkYPruuWnC44WfcYYtR56XdDLyCuEgBKhEvNJLgr6XzmJQ",
  "key31": "UaPa2mqjHbe3mGMQ563Kwf7JikwHGmivZ7g6fizZsA44dBtFGUK4LrxigR48R9qfwSWTjQRsnxVvyd4h1RAebma",
  "key32": "3zxgAfPXnMDYBU6jVH97xdj86z4EQxQa9j57zpNyvXox4RvuKXUEsdiL9mXUq1gLrJNA1dF9hzA47gU8KU1XKHDz",
  "key33": "V9uqRkM8KvJyJMVfSUSKqB95fbi19tecPQTUPn5hTYBAHdDS1tmJSyzRX26wKNGnepGoKWbGfnKP9SNJfVL3cRV",
  "key34": "f18pmzydxaki4nyipbpYHPETeEEeiGEWbmZegV7A9j3qp5wx9THPEpo5MsyS2rKroSuusZ4X2c5HozKezNYTUVn",
  "key35": "3MymFvBGheyKHWafEvvsr5xDqU9mMt2ygkgV6o6RSYsXCniWuK8xVzJCnAhDMwbKfqQYrwAmYrFLs4bjq1L91hZ9",
  "key36": "2HC5oitxUYKHJ2acnNj342wbKCGiW9AeGXyzymVKFwFw77xfYHFjKdfdw5ZLbb7BTFodY4Mni4cE9yhnq6c3RQZe",
  "key37": "3dkvbagKbyrhathiVUS8qGt8ExHrYi6boiCpRrZ8cLJYAV5jVNrhoLLTBXMjQhCr2TknEydqWhRQU6YptxsWjjaQ"
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
