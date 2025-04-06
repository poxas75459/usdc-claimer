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
    "4CswnMzL74J4SEqUYiRgtWGhddXPwtGsfq3RxBZ9Eeu8YCCG7MbQFS4bwdq8yCQbVAi5z3ZyyC6WJYHwj681hNQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EX7ozxJ5mpeFBib9uC5Ti79qNGKQib8qPgoEKBf9rEVPddXxFDmKuax987FRNuzoSayyr6hLeuLQEHgpMYsh766",
  "key1": "54w6xDT3mf7uBADMBoraDAA1bz8xVuxEWpsGSNXnqDr9X2K2qqtB9rrwD11WVFJxQp4GjaGmjrPYjM4r4YVuHwtK",
  "key2": "38R66CZCKCTXoo5wLf4wNRESm7Hx5KrCheHbtpNBcKjEqgPXDCBH9PuSDiEp126swremZbyAERVCfWSyxHrANC7f",
  "key3": "4fZG6fLkzqjtfjtsTsafiFFK6KYPDTTAHeWkrWqG7Pf6J9YmU3YfCCXWZprEDHaeuL7izgvjTGoXQAawrvcgLQWQ",
  "key4": "4j5jXtBwaycDeYEzARDfKCv8387HDT1H9EkVKYSdoyqs1kiCcRzKu7aNstqj4Fm7cFA64HUEbcd4MJvL4Fjzpvc1",
  "key5": "31g8cJ2pvvXMeBXbvsAnCRodCVEm8HgFtK8P6CXr3ScVy7rrBiJuu6pF6YSrTWPKboraCv7mFG288YYTz4o5h6kH",
  "key6": "4ckyYHQCWQAaVZDzMLihPTXQprkda86QCD2vJ5VajrinvtQM3twiFzgPAa2rsa7XKVSSeXwKXVDTN3UERERpen3B",
  "key7": "67rTKanNEaHSd24qj752s7uf6NZxpY7Hb69DoLMTJuj6bAQj9nUZqpGW5xZag5DXKXfHsF6FJNFJ3TPUnR9y9BN",
  "key8": "4kjwon8bqwqm9N16D7KWD6CkVw2MpdVC6mXUPTgjX68Vz1xnL7EHtdr8KruYRcLCf1KwvZMMpdBwZ9wnYJidZ4ye",
  "key9": "4DZ6gHEqzze2Jbjvs9oQuaf4ojaW5ArsqT1fY5Czifws6qqCvyak6tnaChtb9nFUBjeDLTT4ZP2Vf7uaAoY87iKa",
  "key10": "3ERD1Med4PH7RhNuKKwJaQrbVg9msxt6zpNd2NsaQhqnT85s3Xb1TUZgT2QDyebTEhrGdKBQYR41rrjBynSw4U4E",
  "key11": "4LowwpxoyZ67WKgtTcQVvLZWvqneHZXTnz6vWW6fq4Yg3Moi42kt69PK2Tr7s3zxYEtzLm15DX82GJg1d9ULVQgV",
  "key12": "3aEur21zXvKR8GU8rVdT2FAAvgPE6iL23CGQiJPZqj1hJtfcwUvmHHqjQHK7KAaj5oCchG2xK1wSXyL5mbXb13mV",
  "key13": "M3s73ocVDbKhthjQtYkN1Bk31BNsCSc4YsknubmbVECuMN11itqynWF1XGtet3S39XFear6ug9mayWkVVbmAi7H",
  "key14": "31EQV7Am3byRvdKQjS3xv8mmA65bvenxk7sWDVGDTFjMzZH6ov8wCp9KxjG8WSDaYK6zESF4tEQZXCf6WUwTz7xy",
  "key15": "3gWkFhSt2gWXBD3TmC4MF5Cx5ZUPqA5HHhcYaiwT3K5DQ3D4wQQherBBeq4uE6YgeF5jrcRLkKgeJmWy5RpRroB9",
  "key16": "2z6LSped6HKYuzat82QRvrfEdB9iWNEUUCpRGWdPbeNRADAQdMtjhUtKU5Gq4y3dw413dEYcY53YXJ95GfyfR5uo",
  "key17": "N9CehnURy8GsdKfjY72GSNHwq5SU9ZHboZS5iTPmKLJAtR7EqWfMZc9v6D7rwwtBmcWPU7HTwzfe2yZwQYtoaK9",
  "key18": "5qrMa9dup9HRzaqwiJyZEsjJYi5sxgAKVdY3jzXRDFHn7YHtfVb6K3eDrVtUs1fwVEn8H2J6jH8JTf2tB2HNBR49",
  "key19": "4JtCVb8eAp6YBNijGufWS9w6eqgdVYQuKrzguzUspxowjKfCMAtdtCG9JAa1MPzBmyg31Bc2XdE2Ednsw1tAY1AD",
  "key20": "66PkuzGdNzU9JHrSq6CLhfi5Mu4cK7AZeBh9Tb4MZe7ShXissPnBpmNAURvG92QusK2CFxwFpTBsRsyCCMNCcEyZ",
  "key21": "2WRUq5kFdDsSQLqvbDngU4dskj76koecNjg5hCQ11eZMt93viFmPvUQAQ1xEHRnDxMofFDJ7PiqnzadZhxocsHhL",
  "key22": "4FP8f8KMHFjF4UUHxnDkgY4915fL4GV8x2UXivdQRLJzKakWWaJyktUKG2nRbdsgFckeU1Qeg97vBJR2Xw4KeYPX",
  "key23": "8vU7XndA4YXuvdq7BePSZnV22sq8FWDU4LpvsDuMa6go8yGUJy8doai2b19S6fAstXcCw9Cg9ggnh4RUwq398P5",
  "key24": "2JemVGK5wWVKquKLpAEitcQfP7wPvTUanQb3z6CJBbfDxx6dJddHRDS8Xc1tvUme63r6HMVMH2K49q49tR4FHfX9",
  "key25": "2H5Wbe99S3PRqpRxhtbCAko6sn3Bp1CofskCfb5o6NWemfCcQvEaG4edgCLp4A841MdJqn8R3fpJCygTZbwGawiG",
  "key26": "34ntbjkUwzdQsGdxHp7cgf9pLvP2UmoEwN9EGbMqV4mWCbuoAgnRvVtf1SVbbP4H9VNSMzdBs4zQ8d8k3XSW8yzM",
  "key27": "4rUFXjVaoMDV5kbKVqUY7FqFZo6c6kP4eTCCh8zf59scvYAzBbVJVPx6SGEUps5kroabRhE9UuGnCpQfZA3G37R4",
  "key28": "5RoiKPbago7LEqfvZqkiH9Cwspog91Xwf7S9CbQ2zu7osU9sTzwdEQcgpnbAUiPikL5wFEZ3mVcqTV3LMWddmhe6",
  "key29": "3HtLfutu38eynogbpcX9HouYeS5exnd3CWQLvLB2iPcsgKGriPY8kFwxM9k6RCFKYSuWUzqsajGUwxz9eUbJzkKh",
  "key30": "2Coxo7AEwASB3nC4n8D3ZUsda7iU3BkUefPdZq8W2v9kCa6Km1WFBJCEYBAQNk8HzgdaqdV23wjC3NCjL7qgtw7E",
  "key31": "144VRxAbZLktwKMv8ENeoYWH6MGUVDTs22t6sbAsovsxuhb27sQA61MrfrEmBMUhi53gMWem5sU55V6b2hrHctS",
  "key32": "LsSeTerW8uZJ66B61J9xqMEiHy5JxWCufwhzQoBQD4qjvda1MAmv287VeCR9mye6yVY7jQvLReyNZHKJboTjYJP",
  "key33": "536Z6MUDkfvfXzJQaCNnf9rAzWwgPRCVYKDNU9yvRSe4kYGzuuuEnHeQU4LzFdCPB75d42r2CvtRrSmkEBrb1HiK",
  "key34": "57QgSAcU3PXZYV4YVEAVTw3CEjLACmn66WRviFswY7iArvZww59iDkiCw35cDHUewTCgEhMreKgTZygtR9A89HQD",
  "key35": "3RAEXw89a6DeNAyFARzWvAmcvZjsPGa2xPUKgdZqcRZActRnQY4yAYZ6zTGff8y1neiRy5zD9yEni5zg4Psfagvc",
  "key36": "4Zy1KpXCnXHS8SST2VzEvR5Mujp3kjgnEEmah4BaJPjGTChCSVUHnacXLMLijXghPhL9XQ4AvF5MBe2pHkSWA5FJ",
  "key37": "Ygf2nwyUYm6R7UxZkCuqBZ87YaZJaHuZfapYcHa5pLpxWwMJZVSomzpcdV3hWSYrUhax7HLtkqC5cNN2dqb2XU2",
  "key38": "DztUHezZVAxsSUoi37F1Hgt8Hy1iDq3Kye96Rm4q79F1XemVBxeFEj6zySbaxTd9J9JZrGDXJv2FyHVy3Rgj7yD",
  "key39": "mozuMC4TtH6UP9MiVuCexGEZSSbpRn4dA2H2BG37SbVejFHjkc6KFriejhcRCVXmcDc5zsD4x4CQMfZ8JACJ2mU",
  "key40": "af4qmNuzciBjHHB1B6G9Yw6pFJayJxYDSjMXrbgDZejDwLvjPMY1apFfZvo5uWgdbghEugMvfyeVDkDSQspUP4R",
  "key41": "EaaZUAqmtYAopGy29hPmTgQBFRokeyZCcacd6MnB9j1oMCwPP3HUFhwGwJohmXkRQtmLPFjBCiWdCLyFGPrXvsB",
  "key42": "vdhqhaYFmf3hrrxjMCYgxiCBBavivk4rsvfZkr4WBjxAr2xpeg1fHtL2Zufo8CmLvmdS9Rsc3zKF7q7i5tMjG96",
  "key43": "5RunjwSCNf78RStuqoJsgudWPf6EixeXCGaaW8c4npvbjfkg2iGqhP1KN2Ea35bGezEK2d3kEx9j7VqVtD9szhQK",
  "key44": "UTMe8t7Dv7F86NRxJ2KcnHTpvJ2zUYyWLhQUfLa3cwFiGxmTXrogoKCt1TYbVhcGfMManLgz6DoUSFNjqGzhL9L"
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
