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
    "33vchQVBFAoTRQ1bJ9rcCAATyCUagyG9jvG1xFM6VWd3hQp5U5vUJuPqF5S4mRTiEVhaVrctmBsZqm2Lr8QU9ZYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyc8x9AdGyQUXuAahpffkcXP6pSowBoXEau5GLt3NQuY76NKq9mXW9isMYXXsCRkuDyNCwLQ8PUNXpjj16a3Szu",
  "key1": "3K6KVTKQ1Gv2K2LrrjynoierzTN8ovUB9PLGCx9gUiZX972vW2C1kahRBuagqVPv8MSm8cSei1nYsDKg4Gv2gPMz",
  "key2": "5TvZWnaiJJMPbFcxrric2UoNKZ5fpozJF1CcBCdcbN1YkSpTdMeZBatsHNJNWSXNfKjeweRxH6LJTitHXYr544vd",
  "key3": "5adJozL2zyp3ZPuWi2xjTPagxNMMoib6A7peFLhgCLtuCv4pRvmFVeRa9aQyGuEKsBgxXR3ZLJQ6GWJ4zLbRjwd",
  "key4": "2S1pvAec7yZPyuPZ7rKFVbo2hpfyouP9CUEvLjzDL2AvWsFxD6jahKbGjyXCB3DTD8LovKAmEM5EBr4hbrNCMj5D",
  "key5": "4yy8nfjnHzcrjm1LkdBaxXZV2G1WSZo27QdiBbGmWZiCgq6VTRUDVYa856D8uQvGkXLMEVfxEfMzkqNW13NGaJuq",
  "key6": "4NXjE89P2vQyivSvuFHG5wbXaBCSJ4bcLVQMw2jF16WwBdhFwCBuWUVLLwCL3V1bvkRBUkY6nJs79Jky9aQnqPSw",
  "key7": "3Z38HPRDRzZmxkQT5yJLok6n3wcB6gFDC7rhcr4HAtaKWb4EX3BKcvvudMbRkjAquo8nk9rknXbGptu3CtM6Hww8",
  "key8": "2VuhQybQBnk79GasXoAopRni5TCK29XZ8N9tNDLsoes1cJZdcffXD6P7ZAzF13ssE8ANxbUp2Zg2RYHWMNWGThZe",
  "key9": "2u4t9jW3fUrhzdsM1pvkEa4DLZznxV7s4sz2VBmTQLbvKLfUYAmPa6um8SBoqiTg93o1V3XqXDD3FVJ3LQPwQNsk",
  "key10": "3qNaFmhy2coWHssKh1FnMEe4C1JhbWh1LWu7wuheeaxS73oav7mBLpzbSEz5ZijihdCocvfTaW9WJJ8XcbCqc1dD",
  "key11": "2gxtTEfkLnHYvDedrdgtKAP8hXbkcaREiWmbVKPiRWjPHU9qiBA2E22knqVeofJPrMJU9gVS8AAmNkFtgiu3rzFz",
  "key12": "5Dk9E3y6mMZe1SGKNyC5kScGb7iHRgG7ZpQnDGM5z8MURSBH4cgSsmQ63wyYJkWKiZkmAm1nXbrakM7xoPFe3rFw",
  "key13": "3sQrhoh168AiYqXTu96WYURVCzVg5XctWecWnQ6XbnSWFsaMcdzT6789pyVVRMbrjtcRXyNzxWDJ6vzHsGygvrs8",
  "key14": "122TFp5Hv2WmFS5HSwabrGkoNcy98SxmyFU8CJmScVoBLC2JxxZFxzbLFrWtci4Vx41nx6oQWTFgVyz4dEL5hHx7",
  "key15": "VBHDTqA7JFY6UBVGMWRnP849CgRL1mhvUUZvLseSnHuJpLbnMfL8ZMGETCWQbSEsgxidZsfGpYFQAkXL5aCPRmG",
  "key16": "3mn11LkvHvLuSFPZYuSPjZqdxPxiu2AWcnYmpJgi1ghu4xjibTqBA9EYvdJuctyfnWAmGGH4CLeTAPQQyediGDQv",
  "key17": "2TeqVVfLkP9Aa8spPFR8b98wnwUztcekAELAQERPEEsLRRSt7ehGx96cenbNYJr8zqAKJmZsQmTyaMKBdq4kErbW",
  "key18": "3QEXheEmuFxHeFB73vkhfZrYkMJjhGLdzbbhXYXY8r2aqn22FbKLrdpTV68CxQCx43QV7LC2NHfiwy8HvPueGHPc",
  "key19": "5sEhPzva5kMYwQVUrKhBBcLDwNGRfiBRoYdBvySLHaQ721tSUo4bnfRpzkfSFnkzSFbkLvTnaMhBdNs6jF2ujxyi",
  "key20": "63s254yfpRqynGkVDVjjNyeZfrRb6UXVp5PxSTBg8YQzB4XQ66crB2oqEEwXqUNwo7yzWQHn4VzRh5jFdGBCAE43",
  "key21": "58UL8DgZj9MwwWbQp5bSP5rc3Ekstex1JBEEqb4kmw1Ay1yJWABmKZs6wR1dtF8XovZRpuGK8mrP8LMYcufbcSgd",
  "key22": "4Sk3Ftmce3KAsb4VR3r411kZ7ZvisYLtTZnJYkJWTmzm6cWZ84p5a8hMbLLinKXfq39KopyZ3SYYecpBfCo93RLo",
  "key23": "45M8Di7bqQoxHcXtfUxEKyV3eatC7UJHkGaXCjfowtdCwngiBtP3wQDpdLsmXReqCukeH4X8ChtGCSHZwJtgPHiJ",
  "key24": "614BTLwt7rgKtpCjEe3cq3jasGNLbqs3NTVz2tG5TKQye3zgEpkfdipfDUZvbe6GpXvxmGUjYfdRVu1rYJoVKJnV",
  "key25": "53LyUL15EThxorHLiKvpSPNHA3cNFirbq6NxsejNMdZPwSnc4xSM1RcqVyC57dpW2yWczDbPvq2uD4YTRkpPHW5Z",
  "key26": "3Fpq84cXP4dziRw9NUyhoHakr1NFEVxxGHdZy18AvTNxoAttsY9U7wjFSN3Dfout3KpNrop7KsQgMHq5CJxJWsjZ",
  "key27": "4ipeReSFfqVv1j5HiQq6ek67t5Uk6kchG2E7ieAiiYAsUJtBi76tpUoMh7Ktth1iJ1D19EeUzMkE2KPeASo4Mjbk",
  "key28": "vDHy862bHKVTL1SX1s7SqbruNXyUXFac5p3ik7w5fuceePeMUiMnhzyvyXwsT9Y8P16dvyZcwrxm48WKRWKdVz2",
  "key29": "RkuxqoWXZkymG5g52gD1Xb6E5m4v4JxzTkM67Hc35AK1Mj17hiMqF4fEUkisArPHRuiJ7VGzF1aVEkiZ32piPh8",
  "key30": "5sy9WX2f4LsC7JdxYyTCQyGWFmFD2JSrYxqizQjCzWQ2V7sPAPJEFjd7zBtY57xi2LXgwyE7oRCX7r94SV9txVnu",
  "key31": "iDzGBnBTpxPc4v97ascvwKeExRGdVoxjxSTUEuXJ3YkhECuJen2zdmdt6LeCfciFvfZHpRfxoGiWpCsENG1581w",
  "key32": "3ZcMipAovpm1qAJiGC4A2qQcX3yXcoaRQ7h7S5tAEXuPuEBdxvL5PULb82FUUnrLUtERdJxkT7FDou3GRPjB9xP8",
  "key33": "DyxWzGdsPGjLuW2NidfX6i95x5r8oR9spNRCe2hL8SJu3pKWWhfsvu8STn5iNxMeopFW2JMzrgSXTBG7UDy6A1a",
  "key34": "331WhPm8uaxBnzmXzzoDxPpfWmsdVG6FS99xH3WxPJqnm47YsaeUy79iweYcPXfg3Siq9uUTSFYRCTciXvYPfnKZ",
  "key35": "4gmrEb399CoT2M3gi1hJzvhsxCfTkECVdxhzc9cfrLn5pWRqmWv3Loca2vvq75Ev53biFBeHqwP9RN8amVTtPQSk",
  "key36": "2oczFbQYDJiZpvHoqrpEG9bouRAVNy7QWU9JpRvAjX8cyo28DpKfJ3gcbJFam5wU9w3qrP8ZdD4adbHGo59twijm",
  "key37": "3T4XgjiTWvX45EzxWWnFFGhMNGEVfsumtKhxHkiFkf1cWf3cnNFok7w6ziYtnoGk6xnXt4oKgAyNUr4ZddVWjCta",
  "key38": "4zzT2RUPbyV9yW4diY4DxZA9EszBA7En2LUMbNa46WV8TipcKWg1sVyXgWMxDtPZU64xjRQFRSTr5CLW18PWSGa7",
  "key39": "aTpjRMgAVjG9c1PJCCwELmdBiUJcuKHSvQPRoGarKyjDHZ4Frar8p3AHCVsVFAN15W6vXU2EauWnuyjnMhCpkrR"
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
