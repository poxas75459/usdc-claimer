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
    "ohWJGWmecZNwGRrebn5wH3t2w7zWA4BPSbGWZPErGJWHXZxrn6QFxh96BSf7M8Gd63smaBcYge2Qw9piMtEhiHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qoCzaSffaB8A3iqZjCtYLaHdX7wqBsCQXJTDUMEagZiiEnf9dzdZhvmVgoAGk5PhJtBFK6WahAnVDMoicThaPJ",
  "key1": "4x4aFaAuJxoUuLBLmhQWTmZSfpedEc1DGFMUGYCsv1mSjajb4uDjDCM5Fdn5EEq88G3ANVx3fgEnTY2sSN6xnqz5",
  "key2": "cLtceC6V6L9k3JB9dogfhKAjtVpsLNfR8N4Xte3NwMfJCgu44s3B4iGTiRiQ5ppba9hzQBiKuum8uwRoKbuVRUF",
  "key3": "3BJ2tvjiMmuwqtfuhiDUTip3FbYSEYLMHXepjewcSdEYBPDcMhReLkq4u4Y3QMpKJSBvK6SspmtSQXiPCyTymJu9",
  "key4": "4eeViM3vLp1RFa8D87JXd3n6J81q6EGm2WGQFJZtVEcBQx7uvCnyXjXFpvLwMBFJvnDAUJeFFG3ETpwcAveKwQrS",
  "key5": "2GghPBTHDuUSoXjQLYSz36FKfgL28jDDbbwoSSC652TqJAwN1T1hZ32bNxUxopBhhYvVLwKdw8F7M2GkmXikCKmB",
  "key6": "2PoFfWZG2PeftudFJZFn4ae5HF7qgGp9RDrciphFjmD9616BpMtPJaWVVSE2nR6MSwXTgyC7gwWYpbSb57FhdV2E",
  "key7": "2iZ6Bfp2mMqidGzY2PS9JMiR5M6aTP1J4b6xpH5NWXmAK3ra1wcPA1Zf9reNb76K5iMTxYgPngoc7hFSDxnJRVnB",
  "key8": "5bo1Ja5fenyoU2ngZcSmvmLbh21WG9UHZNCk2mBHzEp85YjQtq2sLzwKoA8xFfAG7YTf2g8eK9878woo1mB1jVh",
  "key9": "3E5MjPuP8h89U7Qyf5X2t7PuL8kY4bsYm4gSukpoF4Pi6NLhdhNMx2dbowFzrvwhBMSngwNRa6YQ9F7BghNJ3gJe",
  "key10": "5SNf6dLn38Ng9gHjXDYGbizJ2KyXezqFvTernGCtArCnXZEVgJYh943ib3Z9FTAWdLB9jRPz2RFKPS3bvGzLnNTq",
  "key11": "4ZEBpKut2avysEmhTenh3mH5h6evETTDZeC6UCLN55u5jb8nQkU96WPkuFm6e5FZaf11wqbgz1M2WF7UtyKrbJeV",
  "key12": "5PinR33yRTVRN6WtrckAbAfgpVsA2H9PT9kzNYKBRGKipC2B8s7H9zViNRn5tHJjvr6xVBPPRxr7Tx8yCGTNsPcq",
  "key13": "5ymfUdsk6jUxNgNo7dtrVste5D8yUb6pat7S5yZVtp3pGBwwYoqRCweZ8JcDpZyCHkvHBuoG198t7QqqWrVdjXHz",
  "key14": "5u9D8ve6QLuoVuv9PpEGDA6rxcoC2uvoFBSRiejut4nAJ8f4RrLSatT42469sBk39centbnA7MS9b7RqNYvp8Ecf",
  "key15": "3UTjcvPsc51AX1XCfj8XdaMouiMSibAHus6GNRqAGFtKuk8UxUg5fTAnYB9v2WsRXcFsXQjM4Qt59czc4747ZBA8",
  "key16": "4E9xyZE5R95XdjrGu9kqWak6jiPDfLZPa48YqccCnBNPCsHGj5ZeX4MVFwbTC3kMkeQU3g1bUpsuEKCLj32hwutG",
  "key17": "fZLpcwGAM8t2foRCmExrzVHdenJ7bFKdhgXeRKa2gEN9i3dsg7e56tVL3i37i9gTRXYFQ5sQaJ7DgCUk84oNhHx",
  "key18": "3SkaB99K5nG3R1wUgfk3n2RTkD7hjjUqRYuA9rRb44unbxg3NXxYHthvAEE128JwSdh3n5b7rzMc92ob8u48nQtC",
  "key19": "67JoVSs4Mnw2C8QQRCzhc7T4igc2BrqfhSpH8zhWRfJTFQ8HnGkdjr7xPndKvwHwy6D9gW75Pd8sQrAcsYTiP5JV",
  "key20": "As8GXErxcXENNgEBmr2xtd8ebkvgthFHwYLjxrugFrC9GJed25GoaJwuHJaEUQWVT39ZmEb1qmBCSSNy5iJLj64",
  "key21": "2eWz9TKTy9VQyEg4tCLi85g8pekJEB7o41nFKBQq74GyBgsksYV58jvMM7MV5qhTUkkyQhVALE7tf6nfHRs2Xthc",
  "key22": "rjJDEL5AkFAAgqGqtBB8L3svYMUZQnXMYeYFajF9gR6j48CY9yzz17ZywGhDt4o8oLEhfnrojG6KMMmmaGSsePa",
  "key23": "2ZepcfmDeA71rnM4GtsenpouKTWVoTmUJBANUnHxmn5mS4wYd8feNsNwcmz3GbuPWaL2uGhSWsDAYE5NQ3g7jguZ",
  "key24": "4EXdC8a5uFngPoaA4WFdberzmM7BAbXDSUj2Rnk7xNnBmugdBzsbwvR8Lk9ifNTjqDLed8XEkx6NnJMvvgobmUuX",
  "key25": "1tfSLVfEnukJ2i5wAHGEegwe4b7mzhJot1Qx9nnmA43NkXrSv8x7tURrwto9BAn79yjBEWDZTWDprtRyihdFmFV",
  "key26": "27Hc5bCRixqV7ve5mP4qffakLXqpXM4oCL1dMZKCkNE8pKy3hCCoqR1CbhRH26aev4KR3yoxNHBVzLoHDSPdxjnC",
  "key27": "AbvLqmgAZUg2bvT1qw7SiMt6wnmeaYa9NGk9rQyQxUJbimfPwWSt2spr2UwCcBhJNC6hsVb4MjW8U1yxpDTGhwv",
  "key28": "5BVVk22M5pwrLoUtbhxFhRrX4DwrJ19mWcZGGaqmxMGFRU9UBnAaSWx1YBcsr8ksEaHG53zrjWXswm1cHMwu8Rq8",
  "key29": "3CqVUCyoYKXdkZ8wpKyVJp5wfLkhQZPAis3oZET7UQh6fqrpj7JWKFprzq4vCFiGF14ERfcpzBDFPHHvCUUWYxcj",
  "key30": "5JsZn4kKzP979Lr5s23Ybi5Tuv1vra1qVCM6LzadgbCD8w8NaH6xPdmT7cwLQRxt3oz6UShK1qyYptWKWH4gCz62",
  "key31": "336ju3yD8hjFa9i7MDbS23paqsShPT9U1MuusNSnTcFC8i53k2ZejUvcozuZbTsi9XKjknY792cfLz2gHeUx6Upz",
  "key32": "4MVCcPFqC4pLX5N1Q45LffdbuppmCiF8bJxyhQXDtQedmspFBNHJSDumiH7v1SW9vWzWp4RjySM4a5QghEe9jpZh",
  "key33": "4KogUY8LefJosfg69C6KVx2g6hNUgpwbWL1i1psHAS1qubMP7TKDvhh3GLzGCYvFHnUizGyrCTwgceVWiH1GQR9J",
  "key34": "pEFsB3gjvrL29vmmYt63qj1vGRkd7r1T1d6vKhNZqbwj17LQmTQhdMTyTUv2r5rMcJPcH5j2fVysakC6iFbhgDf",
  "key35": "5mh9KSr59tsVdyKiXm2sF5xQj2DheJgpyadw85nNWRpwaH7RV2JxkXUrAoxxPdgs7HL7TtBcLD4RSfygZHZhDzK4",
  "key36": "wFVuegNzsm8r7vGX94tJiLr2d8yagUmUAquvG39xgzhJM852f6YKhShn3nSXCH8gsjmZR6SfF7WbWyide5y9L2F",
  "key37": "3B71oYVb6H25xuh6Xa71ot4xJwgWcckapptHhEp5QW9QKwC7hJ7meermJxvgQZ3W563r19r3zuezQFPmSBbNLcLM",
  "key38": "3fn6nMesCDwnR5eWPnWmf5aULcpgob5QGqz4VRxWen3893stfG4MWQSxNVJcjxt1fcmzUvnuG6NUxHrVwyTci5C3",
  "key39": "3Pcq4VWX53kpYz6SxENx4BAfHjsPi6bFABD7EY4GoKCGifT5SXVqyQ8xTgTTfYZxcYdyzxFQ7vHAD4y3wdfpASjc",
  "key40": "22R2Ejh7AWxAM2BvpXDeLKAe3j97PVshYuADcCsh64MVVvKD7b6xpa8nzsv34ke84N5V4quZpLFDv7rNNRAeu9vK",
  "key41": "3YQjRbNq5BWRKdQyceScahKmMyJM1nvEXvP1FgE4cjLh4paZ1izQiB76yKbWJaX1fd9ZXoCWx5NkgrKPhWdKX1MH",
  "key42": "25fa6hNcDK9742sFzwBVd2CZGZoBfYdEc9ED3UT4ugRGBGRi94RRxuK5e99Bj253gm92aAFwcyVfp8p8e5BwXERX",
  "key43": "eKPdSHr6dzebkNiVsF9JX6U5KoZi1JmuK4G9afhXkCPx1oMg5WHSQ6QV57Res8Es5hnC8e5ZuZYcKtHx6LK7K8o",
  "key44": "3M6RbzY7m5Zfv6NKDfBW1Fi3EoAMPWrqWtDxBhjYUjVbpQJyVCRzGttuJMiyoZZ1unXxojyf8iNbtXBaFwduSh7z",
  "key45": "49GntVDSFSBteWrC1wb1JS1YJf8T5hLbxaWtQcURqEyaY9LYj7uLi99YwkbwkqoWQRSxzQKCNUBVonm1i8CFjR7E"
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
