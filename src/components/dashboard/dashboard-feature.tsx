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
    "5bvHXuXCv7MrEwLy2dWS2GVc3MN4EbTKyKYc6kGiayKLTSPWec1kHYThfbjbXbaAeTvU4tvg9KPH74g4jKptZ17E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1DPVtcqSXNVcX37tokZY7bvMs6H4ShijWS8DV3AEvYLV1xD99bw1HSjFoRDjXUZo3jDk6RbrtPYNZeanCH9LT8",
  "key1": "3mGVq5do2qit112ji5cX2tKy7ddmHBbNjdzbwLBx5X18GMQomsKkBLbG5qFB1MG16Cc5FQ1eZGZVmpWLShdGoVf8",
  "key2": "4scMbKKFRWoeL62rPAK9BNY5F8APJ5P53bbZiHeKCxZGnx3Bcsz1kPv5iGLBdZ34AD8Kj2LB5CiMp62sfHJi2GVi",
  "key3": "4N3ErDnaEHnG8BzuQ9jQpYJBFTL6GEepLWxxqYNw3GBjAqKJ8VrzQTyNEpdcYuHnrYwLV5xovdgc8cZwEtY3DJQe",
  "key4": "9JXR7n6npAUk3R21FGKbCdEqPBj3BScVErsyBm4cA661Boh78pxWqBGL1q5S8x37sL3MGwfEgVd8U811h8u9Lon",
  "key5": "4ds5LDJ1UMZQoywvSXjEZJbPJ2qGP6XiMTFZn7iptPBfihhnrVbjKaKLfqUFQfdfq6mXv6YwHMPFbfFnGqhEYmX5",
  "key6": "5ZF6TmC4Fyy3jBK88bag55qiLfwsTfQKysoxrWK2S2mMxjBRdyGG3qy2eS9LyJ6s4bVTv9icbAEZAvPZUquxETJe",
  "key7": "28xmV4ZUijGs7MDeseRommaa5Tmms75dVMJLsf3iUL16FmuFsCTbx25M9jVJyWKmRpE6JVKtwAkhymJJ1mfMPCGV",
  "key8": "58M6LKGYpBLduaq7taQDtq3UYvZkEiFGuAd7M32iVimFmueKY7cRqLwkTqRkSUs5iNaWA2obNmrafiqRZ9FXsNh",
  "key9": "3wzR9VDcFJFC4JvfBXA7EqYXkg1YNRsBNBY1v5qaDAH3a9dfsBFe1e7juXx1XJbrP9RDqKkSRmDS1HzhWwWKTJpa",
  "key10": "2HBXntMhJpEbdnJvgkAiHwByR3pFnRefxnmbTL75kVDTpBcHo5PBWFPfWj2sPtbwiet7eNtuhJBMZP1vo8UDfqwR",
  "key11": "5qyjcke8NpCHM6YaZiUJBsVPxAAQn4xAHU3Rn8MhoGSvrwgvQvkX5zDk6N3nc8afF8U2an8EkYyc2kwywFA7uJ9n",
  "key12": "2k41N68cT14A3cJeYtV45ak78RqAuJupbPfJuWaSCobMhDUERZUb1xTUZ2zAVBd28CTS7yTBgB7u8Rc6C5zJsjgF",
  "key13": "2EEJRSMEE7FC899VEqB6Pd8x68z62mLX4KAah2KPAqdrPEeoZ2N9e8ThVivJ3r3wbXWQPrJHMaCGwMgf2mBdA4fA",
  "key14": "2qeoW9JKbW51SwbNEWq811YnfVQWpS5KdfmHmkHubjNneCafxJ5JCHb36my7x79cUFQGAbtyMnbBG4WUmqv1oKny",
  "key15": "42Xmghhs75As4fh44fiyYRb27jLHWsGW3pTGd9MKW87e19Gymbr8jYgUYdJNKXj4EEFYgqSPEiZRwk1aH38FvxqJ",
  "key16": "3wtg4shdvDZNcnkuDKycZGfcYMe6rsoK4Wj1EuLWjZZrDSUhqWwNbdrwUir5Wb6ZVnGUkc9KLEW6bNae5h1Mnpze",
  "key17": "41P9wh6b5tc3WxrQjjFtXPnGvxx3rmre819TsgV7u4Bv1UZCDBjkGcc5ziJZPdv3J2ZTCJva3k224PNsba8hq2GT",
  "key18": "TpRidMeYikhgJJnHze9Bui9GgkHxZoiHGJDUedmoy6DNyiruquXxaaTXw8iic133NUTjPdZd75hh8ehyqiV8mk8",
  "key19": "6FARiC8hGdr7VreUZk2YZtSb5MNFtHjKe52ySDRWo3sFo5h3cGSj5XPHHKGkCCcZ1UDzdhVEqwHmENKpME6vCJ3",
  "key20": "senqQ2cohaanSy4SFr7jm5MXzq3e5XGfNiDyqpXbcDP3FfM6taz3EKFiJqbVCL7QgsypvkKpxYk3G7spk3Wso1b",
  "key21": "3U8W776xHvDubFh43HFPS4MR7uwpRSEHV3Z4EEG1gXxMVXPGVZVrg6XcSp8WAmVNTrGzc5BsdEGWDx5Bp26ugUaN",
  "key22": "AE1mSopEJLF4CpMtTs5hTDeQh6Wfn4NJZEGFWnpyct1yDbf2hZHAgyw2m7VyBUE9ru7KckDe3Wrf4iWWUqJEGQc",
  "key23": "2eJLMHtf2Kmu9xSSncRgfZU7dEHNko48ZPfJFrLBHCfgUHEG8GvAD5TfvaTG1qgsaAqBsZTbxXVJsjzgTPTHXidy",
  "key24": "3aAWrbxjRG5ES4JexdfnwU1UnqYPHshmX4nopZyo4vyjEQ2vjXMhKhjggYE3BurmZHKZ9TqFv2ugYtP9oEGck25T",
  "key25": "2gF7qdv5Eb2pMVCUikk2mdeh1ARpJ3kgK1uJYC2W8F8k3wwZQ2MEggoN5kVe2SHLQdyDpJvzDjrh9SVKoExawzDD",
  "key26": "58wE5LwtgUSMCzfrTmqhP2X85TUMA5j8hcYmC8pZs96ACumfLuYfEMQiWC9fS2qSbfWNesZLWpcsKU6yaU1Qstyt",
  "key27": "5CAbJQT46vxksYcS4tWz9Vc4Y3y8Jkze13EHC5vWEDY4tu1xWGnXY7WhB7jowiLDoCyYz2jrTYsDbd8XSJKBzvyo",
  "key28": "35xFheCFZt6pS22KacvVKcBqFk6u9nHBtVDr6P3Q5x51XWEMki4WMbEvWj113oNjgjgwGkveaQpr52LXw5uTZrGY",
  "key29": "4a5tDFvcAyoAxNfYou5wnLQMJQi4YHEHm8529t6wyPdZPbemhmcwC8sAXyaLuwYuiWT64JdzLKvGcRwQoZjd7MwA",
  "key30": "5QtXdki8HyMwM3rXoDqDh4WsrxuHhxecm6QU4jLd3AJfXEyDQyGAwxSsznFpZGeC1YTRgtcgTiUfThkQ1gtqwMs7",
  "key31": "3GtGBFEH3GsnaSmzZBudGPiVFzvsrUkFmodX7ikVvXGvaJ4DE6M8NzkQgUofY9fvaGeA7J5zLCh7zAK8J45Ebojy",
  "key32": "3o2kd3vec3ZXL5oiKPFiCPfenyChkFgy1Ep8FtQ5Xm1bQRfoAHQomAashMsCxujiajxwW3Xd9PvCwoHYrMoMiFcm",
  "key33": "3828YzxWtGcJL2rJP1CkczN2vBdJHdWdaSgtfQFNSSpaqNMhHjV58fQDLqfaouhTztTZJsD7sqnBdbYTUsrHhcTt",
  "key34": "3uj849V9VHYzmXEBiyofMSb45refG3y2q69depMzCtMLSRyvnoymcb4betYDA5nRyV5niKgVeVNhkH69xhhFZ4jc",
  "key35": "2rMbZ8BxkEe74WjUzDF5Vtau2UTViH7yatRkj8ZiWXgDNzVM9vTLE5B3amsbdiL1AiYbEaAEhY3j71az5PatLjvB",
  "key36": "5DQ2cwDuwctGLVNW7F6xWHd7AqB2LEbZEmR8J4Fejnncgfuy3sh3V9Lhi29YCmhU6UNLaUHamDt9JXKL5qtUKret",
  "key37": "2c813PCnrP53P4FLvh3jiFussxkfYnpaia8Ngta5m4h79oTpL5c5H5BCghVv7YxUCmRwkiFTbGEKvYMSW64ZVXf5",
  "key38": "4RsyxTd9q3L2ySRn9xqMc9sZH6eQDhZq9ss9WXdPEJMYSc8ag2NcRMHBwaw12KXJszh6EQQ8sqcQUv9g76w7jr52",
  "key39": "2ZbByK1NCW4Yg3S2q35ST1d8LbjReGw1JHwsnqQ556jTkCbGtGVJ5B8EgzJkbsHKiTjK4rmamojXXR3G2ekUSArY",
  "key40": "2q3JRu2tTjSahcjeBjT4oUN9KuHP8JemKge1LLLLeRoKdFmyv8EWx11XDUgMK62PVHp6D4AxxD8d5rPtATSX4t9q",
  "key41": "DfjXE4qChidm7ektdmGa5Faa8ycY5bT9SDes4dprjteMRUp3ngRZdAsfSHKcDRT1D9nRDBt7GuetpDFytgA5aQw",
  "key42": "3AW7nSpzsukVftv7Fe4JNBsbUwgN1mRHbhx61k2oHLamwfNqyC7oSTWZFKXboVuUhGAAogXJQJk8n6xVcdihXpo5",
  "key43": "5hpTXh9fzB8irnbuSNJp8Z94V5aHA4RubuFZdSoweJMrAWJMBzALPme9aozgwhHPxnnRS3xs5JdHkvYE4wSbxGQr",
  "key44": "4jhsk2cHu22DHFa3Fwz6mohfY11BH6uAn3j2U9jQcjr65qWGNXgXeXCCTsCpyxEPvF6br3MgrrHfD4vJF3DJgCWB",
  "key45": "2P3TQkuhY29RdVxN2kbwQ22qEraggq1sF8VQ5JzSWsp55AcxcihLHHtMzFr26VnS7DZwr6RrB3NscrmBRem7QQ6c",
  "key46": "5WFCTRYxxPEpQdxoZggzad6oeJssdmUhTZ9dwWdp4y9y2et2QEWaVNKEpRYKf3GZTadyHA6dh8XARz5rUpCHiA6h",
  "key47": "5E6dQcxWAMeAkucUCnvNdmTx3SB8AAoSd9iZXTSkHbWihsisF8i8PZsj4RVndQnb53dVVFR4ASJNvmMTK46wbwzj",
  "key48": "3k3WdqkjPMkab7aXnKeUKEubpUX5LnSSD3CQjWFjjHoXiKNvw6EG2UovfQEoCartKj9xdUuUXgxCZF7mDLjMgx2Q",
  "key49": "hjgC2gMxo8VcLjzt4dDuwdaDUDAkv1EeSkbLpRtn9vddto5yUuF8J8tm2FnJBge74fi7pA2yPa9Bd8KR8mZpZBA"
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
