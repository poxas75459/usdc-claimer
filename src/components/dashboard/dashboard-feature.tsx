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
    "3sKfZK2McsikAoAiwDtkJsvvDgpS5KXvoZpFuhTJph6RonFUtn55VhKSPbYgaE65Tjwzs8a3MrLo8hUqMnn195DB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmLGDvkf2FUxTSZXhDv4N9hVdFReDxXnvpdaCfzVPRH9LPLjEZn2Vamt31KNr5vxEMTjwhLqMHNxs5KtVwqTXDu",
  "key1": "2xumEvAbvYYVK7BxjK7imjXYnBeH46n2sXJCbQbW4wXckgRb5wqiR1hvQ2hqkqmzwy1gGdu8EBZTKmcwQdPegY36",
  "key2": "2abY7Nm51ZTAh5Ap1mPe2K1Xra5Ki6AipdVyLCmQ4TqhcnXJDfrczWXGV38BRLbtFcbANNVwao4Rf9QGFKhLyzTc",
  "key3": "Dtnb9kh2tZxky811C4ZrMjcfDndnMLZ65TJAhaf5SRpBfmeMh2bJkGU4cn9uGAprt5WfxQw5MP9qj3C2qswNwXd",
  "key4": "5Bog37B6GqbbDLW9TGpXnvGqBJEAi3CfVRQ5BzdgSMbqsokSZAzZTfMqMxfcgvo4ic1WnALkEfMmLc2vT8BKqZdT",
  "key5": "4Qkrnnoq6XPhb24VrRpKJu3WnvWxaQ81cGf1wxbSUVmtz713y6ZxRKRuSbmgiFH1ayFV3qxnKqDhL4ANz1tinXhY",
  "key6": "31caEnRirCGGJGwE5A46mXT5fHu2vj9j5LhUwp76Sv6hx4hALszL2tR9VgYu7ktKtsfehHMBjFuX19dbb3ozHQXc",
  "key7": "5zwVazZYYC823Fr9MRUp5xuCPG88BDRp4BtEDj87utYQJGvQD5MnfqPaS1jGaEQ8nriE7cfc4MY1PGXpGkkxeeQx",
  "key8": "2dnrdh7RHahhwswMHshdVNhYiKYtBrA1JbWuaYKwuHFBDH1zegugjcMt4kvD5dkcQQFLuCe2V53uBo5PNPHAiUmg",
  "key9": "2r4NqcVnPJkSTYGYzBM4SsMX5vCJCziXrSX45PA5qV3gNgtGDwjhuv6gK4BgRrPhWVzLjVX4cCNKULbqYH51dCdv",
  "key10": "4K65q8PDvHWwTYoZzCUKQhSy3t4Q4U8HWNEBdFKQobjgitYtD9nKxDMg4rE2FoeSbfvxxvnpNz6xMMEYy4SjEqho",
  "key11": "5r7HsPt1AijFrWHBLxyfFxsHvXGTDNHd2B363B1zafwSbzzDsLqVWHVtHw5Q66oV4KS52yy7UYdCsmiQNb8tPDJy",
  "key12": "4o339JHZHVmDFgpccAGyCH24BjNCyokkgynT6bg19eb4284QQMJxWodNYGHk3g2K4u7SdRqMFJe5AxF4KU4Xa7B3",
  "key13": "5tDkkmSZNGx2EyoLaLLP78SEFGTtJBxL6MQNMfxW8fRdkhcj8XPNFQZpTepAmcFnJMAhBnVYuUiLSbw4a5cK6RTM",
  "key14": "73yZdMoJ4DQQruZsUrw87CgWaE5BofwWrtgX4mpALwiKSb3CMyQ4DjMiwe9icKR5P63LUJMcTaZohVB6enudRaw",
  "key15": "4SP1bVsnETWubCQKRX9b8RPTq1d4WCnXo11inRQfCEkk5FYAKPBiAiX9jxJawKuCLkJCfyqhSDYqfhxZpiDercLW",
  "key16": "4mCdrEst2GSr7derCYAzoJTnsT4Ap1PTTJVT59Rev2aajTXZkf3ALfUGnBWfub7Vs1Xn9Ctw2KwEMiA4JtSE57KJ",
  "key17": "5DhxgLjB8ZgTQcCUrJe9jkxEqHYCcFdu8cUkhkncZ6npsWNnjvcfExhM5xV7yhRexV26YnUNbDrBvErdmMNJoK1n",
  "key18": "jMqpj6LsyE7bRwJc4MHTYtXrYnrLBchmzSFcBrqtYqQWmKdKtQf7TfXVSCUgiEFxdu2PyFhcP3HZgRUZ6NhqdLa",
  "key19": "2nW8rVuwAtHdvHdV2xdTM9KLprgBCPFKWPakwkrt46v2jFjeMZUFzWAbXNsLfYXmmU1W5xvGH4qz5E9PK4SvR7cx",
  "key20": "4Sk6STBz4zC1iVu6RhQcQZDB8A27WyH5KqjZ5bWsgFKRZhxQfeQ32GFudHR2GXpXkgXti1FebShUAejswYZTNJtm",
  "key21": "3inWoP2oLef44BF9nxMbpFE4YReUeb8MXdpJiFtLf6SJbr4mrAwgwrQLoPthpkcWTFAa16EukA3bREVC8rrxkMQt",
  "key22": "2RSJ8J9fhby8tBVLKwSTyGcArnGrZyJ8oj7QLukAfoAtfYiWenwoRgZxGLAtysF7uYqxDemzt6HhmGV3SbCVBLwk",
  "key23": "2r7tWNbR5Y3ypGwxDLt5B63Vjjnz53UHGkm9Zk7FBYGbpyMk8GPShhKABdNwK1a3Xqn6LDWYBkzLiiD9YTy5QibA",
  "key24": "2ZS5KQGJELBGh4zqqYkVjQfrjZCrYatCLSGV6VsBhANDxwnido7yjY6aG57sAkVsqLRGvZFQSsvAyYM2asZbN7ju",
  "key25": "22qDiafdueaBG3oJgxU492oNk3f7PnRkPdtxU8rcjR3SHZMA3Lirc5iTyPsZ9BPrec7aaDuK6MDnxEvUpE52tnLg",
  "key26": "4vtFzpiiidnKduSnrQbYxtT3gci8WcSw4sYnLn2tUySRAGhuH4FXtUMaBd57DrF114mbywMTrZn5c4NA1FFRfTsA",
  "key27": "4pPdCNfMzvagj7BtdjihogdeGEecBPuRAKFtc6iZLEh1zZGRbe3jd4r7B5qGCN7aqvv4WCs36srSgi8UQBQjPbLS",
  "key28": "2HPs4HQ8CFWUGNFMfYr7RrnjByAHAqZSzSoUZoq4rijH4EAatkcrXnkmgVeiM7ocGAmcR1hLdvZvhdaqHvPwbZak",
  "key29": "4XZwcXwYz8SVzYdkyFVb3HoChHAxGCMXznWrrmvggzpn2HDbzJnoLCp77G1TL8SafQWYnvDdULSEhWChgo4A1aPF",
  "key30": "4BV57kpN1PasmZ38fB86nFaTkd4WKv2U8wuzt6tRZB1WyCMz3HKdYbP8V8rQaAFabcwP3NvQV7HTavCjVDsEofv5",
  "key31": "47Z5Efq6cGPtEWq5jiNJewgPDUSAXN36LMRY6hqqEi5gD5QsJiRtaRYMKPYFUJQpeRLjHfHDB2n6vFH85bs3ubpD",
  "key32": "2HiTt6rtQUw1q9YLwNboZ4YBrKy7VnBQVEbYSmK9sQT14VcEUafMEb2MoeSyGjBWewdJk1aWdTBAcXA5xNGUDSXs",
  "key33": "35S3F7Xr4DAU88af5vBcEgtD76Gj8cYMo9Pt2LEH66wnoSxyJey77GvmUUQA3VhJdBvhgXoVyNy29FZBU2L96rEr",
  "key34": "GLyaqnNFFqU4UQLjHtTq18F5iEyMwSXYkKWRnu7Bsxj4nzuDaStaZyjN36VHurd8b553V4XRtwr2SEMZE3fvT6g",
  "key35": "5LNME51t2GHpFuKMP3sio74FvrupznFoidqVYT2RZkMwfpSvtrdWAU7SbJFY3Sgn45REFm5ye37HM8pP3ZrcFQe6",
  "key36": "4Zt3Q9KogxbgfwUtCtZAPUbHAGZh6eM7GERHPwaYf3z3s6iYLsM4rhkm8rxcFKX2wo18zF9qYAqzVwFzgBvVk5rW",
  "key37": "3bCSMKeUhvK4tpen3sbbHW1sZCQbKSgzbG9cRr4pSy1GysmigTVhjsnw8tsSHd2caJKDqsSWHPMieFTgo7QNydkV",
  "key38": "2U8QEYR7gh5DJCGRFwp6BsTKg1eAVFwaz8Ne2ygvMToyyCkyAwV8a4b8aBqnh2xQK1kXBEA3ZAmF4Msb2K6kWgDA",
  "key39": "MhHkSmb68etfvNkxjmLh9oGrAHiyaWkwYVpiQfpCqgi2zpcjVGGr8oXiUqF2QRkYGPsnkEtHPfzcShEY3yoCTg3",
  "key40": "43PStssDk5XwuvarJfujEFAxF1zcBsyU1m54eXnWrx3meCuN7vFwsxKroNVNfjbDPmDSntspXpaXAvvJxFipfygn",
  "key41": "2qn9Yw9V6UbGTpGjrinWn1Kusu8txqZhQRcuZ24zKYJ9XVBtSJGRx6am1KTn7aFsD5mbRjheXjUtx3hseyebfFZJ",
  "key42": "5G6BwTaKn9GSyHUwk3kjrYtLYgH9daVfy7oJUGsxjekzZYZ8t7me6jDA3LhHEv28VDHfxisXUUZmpzkQm998tQYj",
  "key43": "4H4Jpg7yBRhDpFfHwXBwXqxsZuMpminFMfEbCaVmsku1uDqZj22dMbUm89xdGajfnMuLb8UK8YSbyxRcBF8PCXSi",
  "key44": "42sEHUMfWSAKyaKmG51KnkYxxHptA2rti9FgjetDSeATb8RNcFZtmSyf16XEbvLremka5ddKRHz8J9epihbjDPUV"
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
