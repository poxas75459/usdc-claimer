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
    "2JZmaNdvK7q1Hr4GFMAdjGUfHTNyRY9ofuyUnnXBZUVuEAZqfBEHz5VoNkof3FxzKT6EexuNKBSSmv2HeuT72Bh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KzT2jSAxM6nJt5oxinMaYMrKTBm7E6aHxFaxtrBCmiGHB2WncmKkiJcZ6MKCbVV18PqvzaXHCCNKs68uLbL7THB",
  "key1": "3hSNBwEp3Wq2FSoiRmcjGYNFsXxq5pqiGEjZXqmxckTmWSRgXTXAZ6Ni4RgF9VUVy4y88cURLaw4Xyg1M4HmM8Z7",
  "key2": "2godndHfNtumh2mrryWvfU2A7ieasSs84Mk5p82XsaNHYkQYR1F4GffXb8ngu5PxeSeJaQRCdciR3W1KP4RLCPp5",
  "key3": "S6a8qWnRrtx2meeTLx7wVfsnGmdFCScqh8NA7av5gDSR8hyVsbz6fFRZLWLCRmt1pvgXTBasXR2Z5T2G1CTBwhp",
  "key4": "49vVoV4vGyMqJ9niXGcoVhtUkUytnmMHLafntBnSB8JmMDXvW1s4MZmLoW5LZtTuYbBkyBWJUPc7GE4WonpTymQs",
  "key5": "5S4Szcfvkygp3v55j4pdrE938qA3G8rGZW7ps67etmmpi81y21vhS8CrmgBvv85KdvKLJEvaEau7QZcWwLbg9YgR",
  "key6": "2iArcPJy6oGTFYQSG1BBigESATY9Fbqr5YMMxrMaWwpJB1nkyNx2ckHeaQt2NyEKxgY45SWXA1hT9veNv8oX8SvC",
  "key7": "2KERQJ523iJ9XJZ8KZhVrYdShd7qAsysM4AHtBLaqmBR7VNJ6GhuTbf2ghaL5pLK1NqwSQvnFYGCoLxGyqWh46Wa",
  "key8": "5UDRBA8h2jDKj9YfnmT2fd8zuWEuFw7Xn5A87TCaxjixVQNqc4JeiT5xHDhnEDggB8uStzLkHSjdHXLACjf4oPgX",
  "key9": "2taeZpU1Z595geDRMVdzhJrwm37h3vaGKhHXKqkood2Du4S7hRkXHEPU8gT6QBQcpfk6ARsWzfbYqhVu6MVnGQBZ",
  "key10": "62yTJJsTncrcFShySvUoGjvKgqWbaE9XvGehvftmfDRmTuVzpzEQjzqoU7GoNiX8xgBT6k45jUNFavsHECfkVSa6",
  "key11": "4DbQ7yUEAUiJKb9joGuShqNYEmDPNy8gNBfjrKPVe6hQdsWVPCGGvmGLKapLR5iFBHjPk93GYn7wnt1HojL1nqEG",
  "key12": "3hBHUCMmdckZMrmo1bSexg9UCsqRPxXEA1ySciNcmVLNfkzfV85H7osbc2rozWe3zWKfA3xd4jkdm8LuUGJrdqnj",
  "key13": "1WxyoYFxZhSvmu6z7cFfzkG6xuhT3mdEhGLoFVpasda37dVBYSSBRJWyKkE1wU8w2CsRr5XuWKVdq5bM4FhyRrs",
  "key14": "25mLGXsxi1yfhz8g7wr1MZkAdU5jvpB4ZXyXMpjVStiFtNL5juj62U2K1TgJmjYwdLbbozom7LoEvnnep9Y2HSyY",
  "key15": "5dWWuifmQkkLzMHe1q1NTKja1GuXYoZ8fUNMfS3n264WaYUrDWQgDLmdxpEVyCAHwKDpPh4tNPgya81qW1JmwDHp",
  "key16": "5HpzuQUHZcCgmMEzAFKRPRzo4F7Qbm2TPPTcGn2pA2KMG4Pb4J2bQScBUWnXeVdEqRvkGyokJZXYFunfYesNpc4S",
  "key17": "CDmwPgtsiEFArLw5nFLFY6aWneUYX2ztu2E5QWjGUV6kF9RmCUcV7hcL6mEAkUHymqLCjfsDj25xEesZpx78dJt",
  "key18": "556FRDBQL8ayHAUKrtya5XbR6f3C65w2BBXnQBW3ZrhxNM5oFhbCcASwXWRvhGMurmWoqU1yv5bysskQg6i2d9Jy",
  "key19": "4xzyf3cJFWiYjWPb7HHz8rPmZ6NcvnBjVgBLEqjje55AXZXES36s3Ky3TNKjHdApP99F1LFtbYqQz2cgNiDRPYKJ",
  "key20": "5tBzMwX6GabMLXVEY7YjiXG7DcQ7R4FgRAvUoQmZmZxvF9zuCnyRTf1p6g5QAFt5HZVQFTBgBqnzXzZpe4fLcc8G",
  "key21": "3sRuA3DbLTKNwf1f9Qa8ht6Ed2RwxxbJcpY2Xx7JY6w8ZXgPRYRdX4FqbtFqjf9S5iT9PXWhd17JR6ZNJ92ywBLd",
  "key22": "GYHLRSkzFi72L1LiPqTo7huLB2ziVaQCgsHSVGobdubsyUAvy6RccnErGoF7SispZmnK4Qz9pxKobGTS9Ht3kN8",
  "key23": "3y3q7qFBQbU9Ci4arNBrCSwYCTkgdBkVJ2g1CvuYqPhdZkeGxd8RsE958YLQ4YCCtn8AZ89xJdoA9CkNfJPKJQwq",
  "key24": "4hM5DvTGh9jREbr9HQ4PwjdaGStmpFG6YkbHezCs2UEdrM6i7ZE3PE6o5jWjxZKmBL2AWUzceb49tGdAxcj5rshp",
  "key25": "2zWtj6662frfi43YrzvFnghmc4Lu4oHfNhhkD5XyLbrzA7kuQdsQQ1eBzVKcL5To9ZR4huTCwrJHGnE3dYTCQoiW",
  "key26": "2KnerCrKmz6NzTt3XcKFqWa8CLx4ixKAKPAtYsdjWtCbFXtcgngSwVWvZpbSFN1ayx1LhwwxtHT5hbEqdX5q81fj",
  "key27": "39pDdc82VEDP3VfCiRBRCMAMffFCWAmhinG5jJgicYrnAoefKAo2PYz8bWKHxhAukKqdk8TvE7WMsHsoRjQYg9TS",
  "key28": "4eecNre9WMXcxeYLheKa8MaMuBHBCND42B9es1HcA5ArADQ77KSs6gg7qPLKZW9iNrLiqzvMX6iD1faKeVHaTunR",
  "key29": "3rk56W5z32ZYNZSsvwzuHhZN6zRi4tzMy7XFMHyS6mzXqDAHUSvdD8dbWFqmGFNgnsiyECUEBehgc9eUVTacrqnG",
  "key30": "419B2gzuubqgSPGPArjFbaTM6PzzyvYwnt6uPN8nb4GATLYqJmXLqgfucay2FocPDBVJgcPyEMtMRNZAPEwrGr6v",
  "key31": "2ZrbQkyaULJpZ4jxExjQYzextsBe3EgKuZNUSVyPfLMHmSTrMUDdExAFs9npHovLpX4U85TJj2DsDE79B7Wp33Re",
  "key32": "5Scmmfj9KazFyz7v5RVeD69NBqdbvBzuT3gTeERnUh5C8Sq8519fpLefjedLjzuGo3yFwpEYdckfnNHhEUWWFazz",
  "key33": "28NW5LSCNyrWFkNFrELKxHbgGkN98TtCfL9G58pEJmWcP4YWQGeybRHJHshrMBzdLdgrA6V2eXy5vnP3beGVhSdK",
  "key34": "5AtxYjTCqZCRBW7rsJHEoQ8Cer6p7bDgfUS9fDH5F1tA6k5yxo2bXJbeCsVVmjC2DkFe3dRFZtL3yz1PDHnAwpDM",
  "key35": "5qrgzNM4fqo8wEbJoepVibwPjadaUMDEondZnwvwnv1o21xmgajY9gJt1ymm3pfdDWXwVqhpbsegcpJiYJMsGQjh",
  "key36": "5tz9ELfnXbpT4L9B4RQUpBRSTrG3mYopZwiQY9waJGpojHs4WMpMom5zVxZEfctj5qBKknD3MMUprWFPXoTVRUrU"
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
