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
    "2ab1PtvUZgBGnaEXU8iU1Y8gv4TCxLpvLhqVvyD13mefkfGu4PHgFFQdJnSUXiV7ykAyXPHUJP6jHmNmuipJ1xXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oyBSoscYhZgwWNnBTwvcdRxFgZMmg1KF2RySiW8WLHh8E97pfzhKqBL7EMsL4fGynbhzX7AuYqdXzvCyVPV8AYw",
  "key1": "34yVhso9d1xGye3osLmF16fsA61ruuKpSrnFyJHURnf9Ds5YPfsuDt9q4WRWegREmXa8WfK4TFgMLpVY2hmHoy7o",
  "key2": "3bnt3krDSbByCCYsRRLpxMkQxCo2agBGzzPNiFi94xeLrjStLhZmETppsA8P5o1Wbg9JwKdawjB4xqZVykEFDgbn",
  "key3": "5jFqZysM3G4wKE7aRP7VeStHdpcqqKnnP7N1kazLcmH9pR7NrmR5EEA2cZUnajxJC9D78J1RqJqQsgBvsfWZCwjF",
  "key4": "3BQ9BhjR1PLzYA3TJZp7hhxYAsbcL5EyNWgVTt2Mm98m8pbWXd5M8iCBoeDc36uy8Z4siPWJZBtiS3HhJvCwxgDF",
  "key5": "4CU2KSFdAYJtEtJMK5LGMWQWcUSpgmbnx5SAy8UFQD8hb1SLdWW11VKS4H3WSXxwgKVLV68B7zm1ApMhwUCjTfev",
  "key6": "UqwW9vCmUa6Ci6GGK94HnZTYy4Nf3yQPceef9iWKqUhgXKwkt6os7EMCbRVYY57W2FUkiGKnfJZFC86qowmFU3F",
  "key7": "2dHhsrMXjqrtuWxSogNt4WPPV1YhYdiU9Hm8gbAiAVSQix6hr4bARRMdudgUYMyg23Hsp7rfBgEWCdnA5ePxqdki",
  "key8": "3byT3L9sbRww7vWBAh5Yx12GGfKuwTvfs1zMdm4Utgaqg86ZAGuZgpXeUAPM31GbcS3QVLhNs9BpANXtnbtcgUwi",
  "key9": "4q1MSUmj5LDtLdnFxU18f1f9FL8KiqN35GFhV4T9Dnpap8FrGFtUhKHrR2KPmqioYX8oVeCBmswnpvQXLqiJkwJg",
  "key10": "2A26txq2eTBUpVJcQK49wabNA2kGrz65DLxGPYMj1FFQm1AM79RoNBZg8rpmkJ6UGwnnXarGG55RgJcEUd4o9uTD",
  "key11": "4arB7uKg6kaTUHtzosJQeeS2rzkx9EJT45Bfk44wpqDNseUGzHno6jbf9m4iviQoQcNLj4pVYj3ash1ZGENi6jiT",
  "key12": "5UGL5m11agiVmGUW9iZU6sEgZpZTpD8BtdX2AKs3HCAPk814PWsPdhRcUpqqqE18DLETJAGA2AnfCmMXxaaSZ3C6",
  "key13": "4ZF328uT8fVTNYqvndZBNS6AiiSrczLR6KHdXM3gmQfVDCS4WZzXHP9p9Bjo8m5qJnakdpvqSfiLauKdyDjhVSPx",
  "key14": "2ZZKAivvhs9zzNXinLzciUrJ85CQmFKAN13ZsrFkTWL4yLVu74GTrb6pFmFeUAFK2gNknPcTkoPzr3417Vx2Ryuo",
  "key15": "5Q4WkuSjG9tebr2fVVdZHt9hHE98AMQTjJg2MpMdDADTZPiFAaNCAZzVSkuHBfWAf3qBYL5g1z58n9k5waLWT1ti",
  "key16": "2iAetVJ45Ya7cDWk3Ww8pYGi8QsNqF4h1h6pPoDAJbBiawjJYd27vwXRUU11SqFTGAcKzKPCj8ws56qCYeL2i2kb",
  "key17": "53ozU38jvggcV1w88D5CPEZXJSgj3FisX6wDemNi8TBVUvMSxBNxRey8YyU3bBvnPPzQX1drSShB2MBmDZbUFjcV",
  "key18": "r2mtKjAxiKsFfDH1hc1X5nj43t19EKjfFjMQh1AecEwLCJoPcbHrdbRxutMeaMqzDUpT4LDK9Kijzuv77iaWzdF",
  "key19": "3Gw1AodYd59iupSmiwr3vw8sJtjTB8bj7W3YYi174cRLJkQcTpdwCgCuXsBQYvTNPbsMfDr8Fr5ZN7RQrwczTdUU",
  "key20": "2PPHtNiHiw9qnqRvYLwa6FJKZ7Ke3yCigee3DnpCoQgu3Ubai5fVYXdwGL8vTrmmy51KRsbLdBirQXZfpMRXeryT",
  "key21": "3XF2fcPU1gByHag8QpNhEDQsW21GgtsPqfnosTMmoj1Cq2aZuavNaXN2aDjBnbhuKVa5LqqYLDS2wH6fqhTQ79us",
  "key22": "4a3Q4rJNqf82um82zARkC37RSoZhDQZ9KDZPY8Hop7ZbHcQLCZPxg6FPYNAkgw7pMKgkvNcmQWWiRHceqZigAPBR",
  "key23": "2VzoLcXGTExafPAVSLyF67ei5HDTJ5qDxWjWnDrv7Agoce4gcEgEs3zd8rpCVHk3SDVGsZTVkkzbqnCs6C3PiEGo",
  "key24": "51u6gWChLVgxgzLD98RQZV1ZSi6obKWPC2NFEs3L62kLEbx5NUHghSBk6R7AkmgsY9SkYnKer2EcrLYupZLfy5ez",
  "key25": "43vmxfX8WVkYKo1s4cbNnLgJWVDL7gRjCQjUvEKptVyXa28gFmGJLp8oZNALn9cqB29KtZ8GK5rnHXsdRCVLcNnH",
  "key26": "3zcjwNjtt2YtLckBvBnivht1DsakHQsDy7a3SSY5qRvTePRzgwohDnhLUzy1icScVBJuxb5eTPTGweanthcid79U",
  "key27": "5Ec3sFTUaR786Sf11jfYJXp3VAaTYtchnZyY5P1bPEa3rn2SsNm75D1XqUtgqZi2NSKp2jEgP8Su3M74wqQGk6Ae"
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
