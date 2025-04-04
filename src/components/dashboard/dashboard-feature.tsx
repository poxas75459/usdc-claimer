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
    "3CnQ3BerkDPTYmiGoYVTfQpkb1NGoPiywswi6qr5uqMvj8ZjUps1TkbK3BsY49SxCATfHpjvo47NGuvv4aqw1yjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQixGPoM91ZpML8pr2MasjP7VXQ7vtCvCVTSCGY1XqYFAUW7Yh7GWo2vYLpRtn2bLv5zvi9PkZmozHozYARLpUo",
  "key1": "4dxYCvmFr1ckXPD2iu6vAAo7Kkn1m2428zWf3Wxf4EdDBEtv3Ns2K6vwmDJmqnCH6K47RFVXeipfxNrd8L8iKStm",
  "key2": "39uSP9dwc8FdDfXmbYSh8JMqwfPf9tMT8LP1EZBJianFm5NPpuSrvwgW5vxBmEp7ufWVwmW8yQdKva8bU1p6uTjM",
  "key3": "2KB4DcGTeCmbZbgYoa4Zgv6YeAGPgkAHbPmUnvXCkPz4Ltp91GbUhbPARfFBWbAHhS4wGDtqTVY4iBsBxwuHXJGr",
  "key4": "4BGgLsveXQkeQe3ohqK1WS1UHUx7eMeKsG2X18JnBTi3vcodvsrp8ghRRmAWeNSn4nEJ9CdYJpvC8HYmxhcB2aNU",
  "key5": "FATp2uBdnZaVXANxKGGEyHAtuBAvh3FM9vzsTJchMjuuBgvUW3rPgXrV57ofJTcDZm2fvPRCNVdrwbFCfFrgXTQ",
  "key6": "kJgbtxL1fx9zxcKkVh8SzvmFi3veiCsaKF8kxzJKcG55dU7dsyGkgRMYXJDsjgtqASLfX3k9qeWBXJAJhCzVLSw",
  "key7": "ZRT29S6gZNRaabBhJAfmfwVSWbfsCweaoMTqXCx7caCRJ3fg772bqaUNNwE2Tn8WEZWRonBUgP4kfadHJVvfUJg",
  "key8": "hnXAZWGKcqZyeJTLpC8Kk8AjngkChzkeqNZCv4wYXn1tokFwrE2JjhuWy5VF5May8DKowaECVfRzMh48hknDoL5",
  "key9": "xk396tbeoYHuMe5eZHV2SCbbC91SKAPJMM7aTpPvrD8G75F18SRhK4X8MXphnYViJVDU3fz3ZvKKA8cjwbGMF6a",
  "key10": "67CmnxchjKrQXHURusbCL4etWts7fCffG9c7y7RJEQGhmEqkkR2QmdX3QYuuUbzM3fp43VcjaMwHvBcHWANBbpW8",
  "key11": "341LUs6UfewDLWoaR8ydLzVGJ8aRE59NoSaBYiQBnW4gcB2UNUFE9cv2HwLdLcJvnCWKR6pxL6X9bbvUsZW1npmM",
  "key12": "39WpyjmHkSWCkReuLGJ9W4EnUt7q2hAse46iW843EBf6NQHtFS9KZoUEFcsJhX9y7mBW73Lmy6JsRbS3bRsKGcFd",
  "key13": "5wxhkjCogMR5mU9f5EYQKnej6GPtmpuTWZ94hwmqQBofFdHATrAe1KvZPM2TwrSFDuERmYrqphJkbkr2xhAbzWsB",
  "key14": "61QzW3vKLMEgi7jMdVmCMTxc2BEMz2iwQ4va1Gi6XqQSEoWJMAPoPr76Z3yynjYsU2erVffU4iVYiVEYfnNqdsgm",
  "key15": "4EVxnzrbRPXoxuP65h4WHxc42yHkgRSEkFFpdC3brm9kXt9K38LfuwFWfGqGaYxoQwqEpSTF8TenRGqTFscYW4q4",
  "key16": "F4n7x1tACTG7jNTgv8syfM4JwD5SRBh3sU5RC5YC3PwfZXxEJ8f1oEX6sRLki7WeUrvT41qAcxp22HwxDZE4DNt",
  "key17": "5bSyrYYe2GDdAkUooBL9p5YLZLad6EhjkouWDUDNGihGAJscZN3bL7UzRDFt1APPY6npB2A18TfEBDw84E5aJtra",
  "key18": "2ikqdJSi9uQoj9XaUHGyuijAH3M7SnLTgoFcjwrUPhzcMUpK566Kn5uUA49X54uxkGiwnv4sjt3m8NaTyQo3YPw5",
  "key19": "3gimazXL2C8CXiWgdWYkunuVi86sDXAARRYMy2DMmVsSEXq9EbVBjetpLxE6RwGFwAC8n4wWCnB1Wa3wftiixLHA",
  "key20": "uLcNgJh1Zj22AiA57CXSMcLZ6QqW2LKemqtm6HQkZc1tBNF8crzBE4df2ahKDCoPMvg87TiUEivaDnjzeMJB4qG",
  "key21": "3hXb6qTtApmsbzN8j8rAXMEWBZCgdHkfJz4QKMoeUneehYpJcLFN5oo4xxRq9931THmmr18mnysVXQNdJK1jm8Pb",
  "key22": "EwrmixLfHpdGJufqUPjbaR6nAj8BvcrGmKdTRkbxUv4vHPG2GmMysxfvSyVmbW3ySJzEVuS6jrW4QcgWuxMNzd1",
  "key23": "jwJaFp73F2dFHntHA8rn2Q2D12RqiSSAsJJNj3vVKU2jcXbMgdGeDXpJWizkZXSY8ox9KLS5SD526v1ov8ZrBvL",
  "key24": "5j9gSFCBE26STXJegPuuFHr2e6ceZAbruWzyhd7eCDNyKK1hv16Qr2MsShhRBBsUsaun4LUXauSKhmJ9eS6PHygg",
  "key25": "5HR6cpkD8tz2fNwsFMZzqjixQ1xLBCGM8ihgmQ294FgcF9gj1XR9UvAQzAuYoRiREpyd5FymCZpWZdzSXxsS72LH",
  "key26": "21U3TwE8hySUJZGaPZ8PZRYaBDhs196fjimN9DXyHrDek9f1Qt6iYkiVtsn5Uq2XUVgc87KLKQgUJ1C3HYSajyMD",
  "key27": "5gE1kUXzVULo2zo2cJ5xsXLPqVip8MTyQKLRWD8LvTVf3LEa4cAsvCA77zXD9EBknNv5KPvoZj7hQfCCdphmSRH2",
  "key28": "5AduDqYG484nqFvvev1NsyMb5v6pav6QXzLyAsA9YenBmLvaMWo8H9wN2s85P3kpuiDj76YCwgQM3ELz3TRs5yCt",
  "key29": "3W5o4eoRZtp4HaoQdCwACSrgqXy68D4tGETsCgnymDTJbaL5ZQWLyoajDrqdbzWbojVdtBcAR1gfCww5z5pLDsZQ",
  "key30": "3KUx3BJSi1Eb5UdyoH8ebvjBjWVWk5WZe1p3C7Dv11oXfV4w7WzV31S7Zj93uGJT6LHRrDaGq9NLQ9vZnXaJkmEf",
  "key31": "inaYVqLVWQbWTSoje88QL99XZx2xW5LdNWrbR4HcaWibs7Kzf9VhNgXVZ4vKNAxDtb5SjjCQdD8zMyA5sgQSiYv",
  "key32": "4uEKHZ5uM6r5vkjwiRhF4djJ7pkXnLe5JDVM6QBuDz1nMu2uXTb1HctxzU1BHGXUPmm9dNHZmrkbWZjzfj7rPb7j",
  "key33": "3uddk9HdR9JGFvhsLypBCksU9GyTYPHkBwqH9b3SoiGMT9LogLk2QvDhB6LUfDKUafeFCm6Ktst4tgzb2SVztRHw",
  "key34": "3CxwAj2bTPvAMQ5gY7Jgdo7E8X65dLuRPbpPzigdpntZguyhPYfkxkpqUrCWYu11o7bkhXocSrRwFoSczATNpBCD",
  "key35": "5FLeUhY4gRnyXoXqYx6C3jjTmXu4uvxP6SsyV7fatMJuTvcvCzLYHYgUNf1dp8WrSWZmUMVXMpsG5aFPKsiHmvEK"
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
