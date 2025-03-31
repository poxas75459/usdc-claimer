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
    "5pbho73vmxGriZEyEAJbRR1sXPQzS2yY37vnphrujKQsoVixZTiqncUrwNbncdgfkWx6brebCUn5Ntaf14vFibsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aV9az3DBjiaXVEVjgVVhDq9eWCFM5rqfpbussaik8VnDDVPh2C5CBg8Wpr1tMvhraCYBy7NBriZUJZ58PRGPt3s",
  "key1": "2ggjy1s3tZNBL7G3eowBWH9utkiwbSfqYJ1xw2n99Z7sL12iwaNG4GFWuMbo8K4un7zssimcpXGB84nJCKzWo5Ck",
  "key2": "4spwxean1B4q3tquUDx2GTJNoG54dBsPujnr3LnZ6Rqr9hgDnGdJGBYRwzq15GwKeo9VuNbMtZwuMLvAPqRwbuiG",
  "key3": "5L1pzh7ABLkgYeoWULXY7wN7zTEMSTBWfwGAnFQr2LrFJktVuLAJbYJ1LTaMYDy4YqjK6aWpgkQLyUT3P9fexggz",
  "key4": "5NHvbFKTBqaRDvP1Tqq5LovJh6EfBVhrUmurtEsXKcZAcyV3ePuUWrtEEBSQCctnvy5b2e21xYZ3EHcHeeFEo1fQ",
  "key5": "5ZSWqMGzkkpxEQZ6r1qfpMM6LxXFtEKKvWNzoR35hpPS52ijHdAGrynYLXehyY8nWTjJ4LKZEBqWMQ3mMeGW2ync",
  "key6": "5XMcCKh7vSKFnGtcqaef3Ec2z7ABGWNKGznLEKbCR33rHEzRLRNN9zmmWRJSdwRLbTqrT8kNepnEiPCtUir1f6n6",
  "key7": "5EmWTJByXrxjmktsKZte3EvwLQq7S8LzEXZfSVhfWTepm23Ctq6DJ7PPsqDwWAz5sVH2nE7wcwfwVsunrDCBELMA",
  "key8": "2S83FwByrwFinUatfRP7PnQ58HWNRLWkGb2D2V7WJEjtvrBuBggCiz5hX6Wf3Vbwogn3qDxfcAHkcUb8pqkjhLkh",
  "key9": "4SXHzUdFceqeBTSGdDSL2DKiU9ZbgvGVX815o79nnPonZPV8i4meCWP1dnUczMQuCYCpmj1xpw2fgcyqeJjc3ev7",
  "key10": "4SzyzRFfpN79ENJ82FEUUV9hhi2mN9DScBAXGQiUWjqc382GYzcTKre1MpK6PqdYAzUKGr5E7VfkykgKgGsUohCF",
  "key11": "3pzDq7kxG9AqBv5FKAdACJrURkVDm7dwxcSCjm9TXzUaysZK7LyQnBzt93uiMaA8Ufi3ePHheBVmXmtwfzBPGdeL",
  "key12": "5iJDqwXCor1NCcK5U6mauLoo7wCcnG65Mo3w7Cn1JkzyjHwABHQrUXuAaKecbiM88bJzZPQsx3DCqByGeRHNNMcm",
  "key13": "4iCFELN1hYn8kUtgCfWnzdsXDTNG3i6CxYbn9DiBu1Xx5BzhQsZsfFXEMucagpLuBjRQufJtv6pCLN6Z3zNMwHCd",
  "key14": "t7S7RJhKE4QGZHvYVNQV4yvSHtyXDtiExygiANpa8d624g6hjdMN5NqRcfMUEmx7aUH6HrH8E89ohQsKxVFWJ1w",
  "key15": "4sQrPFfrLGMSt7NeiuECNaviiFJmi8dtuizAej1DN7ep9yBHbcbGhKtjWsZGh1Neuy3GiRXLjUGnjmTeuajzt2LU",
  "key16": "54TVfTqSEX4Vdqn7N6qg972Qt3uCMEXwavBEGyK3PdvKr4Vw4doXtJ1a9jfRunnLNRFW8aFqmhduaUHMXQoGnqUh",
  "key17": "mi85As5CqXMvuFSy7JSR3FYmhPXHgqMACozUK4nsbF2McQbsyUCUPzJGaWgSS3XAMLUqKqs4RCVSENB5N7D7ypt",
  "key18": "5h8E5RK5yZQq3iDmU92G7PVkfnKAvXzLeobUpfRhRzfcJH7C2FovMSioi7PBy6rysWRWvfuiFHqSZ5654N88UiRd",
  "key19": "61E4Xxz7g3WGBjt3oaAxfScu7yHMkk3JRqUPWpMKs7Y48KmHQpPnR2vcv15x1hC7Mn4GyxY6kKSNNrudDWJnBLVc",
  "key20": "2TxvrRMi9dcAUGz54UN63Df1YfWXa2ku9wJWF3Bsp1PrvVkMJohppTMhFAUakmcyaKgDCLwkWFBUYAGrHv7QoVNW",
  "key21": "4mTLftMnvuxDhFhnZZdRmKYB9c952vTHtx8jkyk3C9VT8gAYNiZmDy3XBKFE1F3aH7cCzBs23jiF2PZpVEdWsZyZ",
  "key22": "3eqaX4baQaSxgbZwU3ajD6qj4cvvjbE1z1X3G82RNPqqDvPGP4gNRGMAXkFYHGpKFzzBnDr4CVbkdX46oYyzx1dX",
  "key23": "jqRa6DfVnEgdprPbzL1FuH8BcAPSc2mJuZxm2QXnDX2LPd7GM3NrogPo7aCXPyYtG3p2r8VoH9MdZTdTdrxsH4d",
  "key24": "2nUF5k6Bi57BUvaxHR8TSjGWv97TXiznRCDjpVFZ4U7xxRohePnHxPBkewVcoCpQEjajjgfV9WqFiAaKrtEq2Fys",
  "key25": "27kDQa6cVxRkV7zNUZaHrg4GDvPz9NLEc7QafJq436JmttYUDuRSC8sg8zM4QTLLcdXrQuzzBke5EJWBtFXDFMaH",
  "key26": "5Aiq6g9hVrjNfxaf3Ku1dkiyKxDgnypQDRRZqp6wyAph1d75fktVde17bQdKQUMYNFPwTaeDMAW1Xarp3x2iinBQ",
  "key27": "4G3ipS3VxBBcd3ixuXFVxMz5a1YirM4ehXjjawoR2UTQRtq3FeBDCHVzbveZRoVPCK3HW3KFXQNvryHaphxnyMYg",
  "key28": "uoc5EiaZxASN1U9GAgoXj9i5FdUdvCQfBPb334PVsj7PrATff7vXUC4G3bapyCMoaJkCvJVdMYJDEAxGnk9mXHQ",
  "key29": "5kNC9McRT7bFS9L8T93B3GvazfxbWnsoFmbqYUWtd3uZzZ49oeUg6jdXNJEfda4goRGPyBML6ZBB6W4NJ5Bae45L",
  "key30": "3WYtWBtQLgxh7TYPD11RefmLX4qeyWdNm3J9b8JTsJKMrXrP8yWq4zcrxMPruPqs4VnFMmw58SzNZoeiFhdfTTKt",
  "key31": "3uoaqbd9nqGjd692gdh4LEMBG7uw2VCs6Ljsyv4Ph3EYG2m8VFRYDHEcnS6xnNKPyNtqQkgrBiXTbegXnesP9SVw",
  "key32": "3SZSPr9RkQbzPCTg75CgSpdnvAxChGVrx2Ls9VWR5Q4ethB4nFthUwG8NU3fYU1XuqntVQaT9DgftRGNpW14TLbL",
  "key33": "45vSWbFixupe8rPABbBvwmo1P1njCk5iSEavaQdb57B31wE3hbnsMzpussyTsSVGe19TNbt3xCsNbiVbFG6nZKyb",
  "key34": "2AxBS9bt8VT8T5UjwDJ5cAh6ncE6B7s8h6gTWk6cdcwxpDF3CcPoS81RecuGBDZXtZjr4UxEF3C6ks3JqiXNvXkD",
  "key35": "4U6kiocYCqb2rgdZGEdr8Jhgoxr6WdvndWFDSNXE6c5xWudF4UPrcuVHpJ3rBPiNdJxzLGimJPSanZhqFAkJVQPX",
  "key36": "3Dbp4wQZADFJU1wN212tUrd7xzkzGqA8orkCmB8E4JuC4veN1i3A73Zsuh9HhYXb7osufWS8XLXo1XcxMNkhpmSm",
  "key37": "3yVo7XMMRNGfq8LqSjwNbu6BtoSJYufyes5Np6LPXtiniXHksQfFYoL4S29Re86AEP8h1LngcqZ9toN3hA1uyZaZ"
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
