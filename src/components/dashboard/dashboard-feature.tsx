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
    "43W9bsWgw66xWbPA4bSnToP2EL2YwZej8pKSBHBdHktCucJGD1ekhLhBNsd8iVXqUT5j1kRgmvjduiJx95tssj95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3deqtQxwoHsVXfEdYCGaRq1afofazPRZPetzZfooaGsTA8W4Bfh2ypnDQsoKrTNjN3ADUQxfiDEZAJnsSAJtzD8W",
  "key1": "32sNkzzmuZ3KDZu8pBobt9oNPM6JxBjnrSiwjRpzREqA8i9adti8Gsake1WA2xZP95aJwi95mwgbaZXt5PUhnW1d",
  "key2": "32erxnPanZe5eJevk4pi48bDR52ySUNv5mvKEkqwTSSyVNeHgKRPhMzUJogXUu2EqhnrjnwxWyFgMGDQZbfdC1VU",
  "key3": "4dw2XVMuPs8XuzW5znr7H75aYfikZ6ob5e7sA5k6nbX4vVwgMwDBQpuQWxMYrrFgkvtV5AmxqiiU3VUzT2NyM2jR",
  "key4": "kbgLPZJDbPpkCuMBQaV9TeGeHUCauD9udRfTwM3SaxWBipvedZExn61g7A9kLRi66MgVnCPER3Yr6W5jhv78zjz",
  "key5": "3EwDCViw3UmqBLx9wvSQqxnbiPugXzCurfrNsDLpCUKZ9uVKaLUFrpdimprJJnnZLp18Lfc9RYY8CYxRF9wqY4mr",
  "key6": "4Vz8xCf4jBu85aHbqdw63V5DgbGeSYKZ1N9hqQapQ2t4Tw9rA8SNjCviqN9C4AptRmUU6RzSniPhVQKAyzH9H8kM",
  "key7": "2N3bKS8NtmzBuzPRadSGXqPdCE8u3oiqeeQ96k5hxWfN5HVMPRRJvza1Xs1KsBwgU8uD6ZiJzbQJbpTM6ZSajjnK",
  "key8": "4vFc16UGuNKWL7pi5d4gjA4bmsFCh7CXMm3cKxSe1WrauZ4yMd5Jq18GXrZeFz3FPuwYZ75UqJzZPhBkQ1Q5Pio",
  "key9": "4sZkeo2hy3GVUX8z21QiMYttr8NsjqR7K1MsZmmUEzicxSsbEThTCcvUwq3AB5nUdzAuHPhrzJGZSrrLhLDGfnEp",
  "key10": "22EofZR6JeX8vJBVHeGxdKAiPWMcCQwg2mPGyLaREfvdyxFnKxjazTkr41pMZh6ZscSuhk5EzvbTbQzzgyQ5s1P3",
  "key11": "2vUfzhpeFvUyvckLyGYvGaEDjYQoQms6mJEqwhcwTfuWErACRPTPyezrv6AgnqxtkHGeRe6Y4a8zGvDwAzBF59Ei",
  "key12": "34Ht9qeYscG61TYBtfvse46QTNB76PAufZ9YWEPAzZs1RshWGt3SL1swMDRpynb2kGYEG7xnQ8bxCiZBxfGpUfvZ",
  "key13": "3zPL5PCN58uWJpGtAPJb76ZAW7SQtX64Rfaqfu49xjDAdCxDaaSiDwM3itQDWefhBbY7quQbw9t34RQtK88Thtvo",
  "key14": "64GUwRyBCahuk9zFmwnXLGAmnyn5PbW7hf3RvvxQ5CNfHHRbR8VhQX5vpQjJ9MgEh8x4Hx3eCrNPVu9gRSnJdNE7",
  "key15": "4yXaunYNahbKF2cD2vNuAdNUiFYJiVEk9UBkjJaMV6FrBgVSzEbooALiLg9hoTNAxbR1grM58QobnWDvkRawfBZ5",
  "key16": "3qGwa8WbGdu3yhuHqgjU9Mt27B3jRF466ep1GxVQwjiqFfHrrLJ9c8WhSisf4EbJVHUcWqMTzJKrPZD5R46ACCd5",
  "key17": "4DC3BNX3mNAewQS6LPahESGsgobBKmbE7Lr9unXkEJoYziTRzGTKt1Sj5EQKW8NfbXFLKfyYe8wcjL8u3D5Fcxpa",
  "key18": "3ZAp4qdycevB14HJcNGdV4hDnQLdZBormihNepEYKrQFYXGD7vL1KE84PKide4RcjXm8qv4crBPcr6cW2zKEwDWw",
  "key19": "26XvrkxiN5gdjEBCo1SSkiuK8zkc5xxAMna5kwSBHKWvS3yxwYV2QjumZN3x8BNMPsWy6hcuTNsFSom6tCNRuhzb",
  "key20": "3Edyn86ovngUN3cpshdV9ZLuF2QevqEg4kGArnMpwpnk9AdFeqXbdZn5dbhBqN64tGACkFCowmUMcduErtCqgp7k",
  "key21": "AK2spSSSVm582amB3vV4gPajhLTmkMHpe9WGn3NwD5VcUqXjQyuhdo2jG1R9HPkb4rKEf4vYmB9GWE9E1ykuXGp",
  "key22": "YVcj69vwtsKdhT8ccUrYumjvxPoBnsG4CRQLMs1gznR6k29KJUjsxNoUyzX3hdF1Lvv9VRirzSmLbusF6Q251a2",
  "key23": "3dxcMFjg5qakBHbL7pbJdfJLnVgGbe1LvURDHedJS8BCgNiCkeYChCm4SXYVBKVGwexMndKTrwvf6GrcPbjYUqDE",
  "key24": "4vJ69WNUaG6FvXxAMo1BTkj1UjcHEkBjWb6e1gSc55F9Lkg8h1aK51RxL4SZvV5JRG4U9ZXoHJ54dpFGZkMH1djp",
  "key25": "4uZmGpXs3XowzVCGLct4MSmVrtTzYL3Q6WTgJYPuoidN3D6LzcR3Ap2SfRLeHMDvSB2gMrShWucccE3kSHDVTPH9",
  "key26": "2ZbDTnumgtRTpovhpQ8WNPScFjikk6KNw6donXiMuH2SCtsRrtDtU7YNLPrtcsbGkiL6traTprtdnGN9CtUvxnwg",
  "key27": "49YZ1EsZCuGJbJhoZY3YUUGnGBe6TfnFcB8NEAtwm2g4VBqCbsBFEfcBpsMcHqsPsfQzph2Esx7zX1NjZVw2bYWX",
  "key28": "577daQqPwTz8f7NHVYYVTaDM11aTTc5duj4NSZq3nVYTaE2LgSVFdLTnZjn9Jw7rKp5ivokoXapvNeMYCZKL288R",
  "key29": "3qQJU3kWHtCV5sHdHvGv78uq3U44fhJ7RbBwobJobgo5k4NLghst5rMRCoaWQ1TEFHACZmHjBf2seWEjpuu58NCz",
  "key30": "45yFCsugSfTEta3zafTJheVMaiZgaBTh7Fv6A6qsFFUjMikszTrcAi6YEt6FbyMcH6WXecjhybbKjB6zXU67FgFU",
  "key31": "4Nbx8PJPvbEK1ThNzaLTJngJCEgJA1WWToJZXdtHRGNNZgiswFmLpzFRYhHgUJAvp2JZwpXPjPpnUV9Q7nJ7RMZG",
  "key32": "zDkS2bkk8HHhQCpeXvjgM6L56C51RP5dHS2ubBgscRY8diV52UgDC6KmgEvW2ZT5pefczrS8YRpMvLw2p7LD7WZ",
  "key33": "UrV2VMCrjKYdHq1wqgfXnJtFdZGp3vcaSZMrrmjNFPrANAnpA7CQC5QuEvQcLiFUMXvSdUcy6SRP8c5K5GTKPjx",
  "key34": "Cz3cUMq6sRTHmkv4SZsa7FC1hvURk3Chxc9A2RjafQZyQxPnNTX9kJ3wEVnB9ZftXhXFe6NbJ7H1BtUBhqcKzSw",
  "key35": "5kM5WCSbzH35ujjkN444gk2raEhCqRri6DHpjD6vMLug7A2fxPKgiUappn5qTVx3a2fKR5rNVKnBZpA4QU3tp8wj",
  "key36": "bFhcVJPtiuEpdRHz7CKsHhJ7VCgHPKFNwrNVLZcJx4L4DMqUxUmiLnKCeztBTYcM8SQMNoYbQTzDgMF8YZ5BFXv",
  "key37": "KY4jbMbw4KwXMrgBMWozVLL9G8RbVeQcb6nkdA5DzYH77JxkApY93ehZHesZornaFpe4xQRK5q8mG8JzhkkXSXC",
  "key38": "XdhpzsWiQSWFm6SWq2X8XurzuCjimweG2ZduFtwfaeWT7MxxV1T6GqSqEXWmtqVBwuvxmNWgsVGsNXffFiBoMDF",
  "key39": "etBLruK7amRyhWJ3iwwGFjEBGqoWDbvpRED58gJB6xFG4mMbrNxhvEM2prGNgRDRFPfBMEUze6XDv7SgoHBUaHA",
  "key40": "516eeaGALUMcsx3sB71H8iYuzA7xg8ZAzeCUWcGPTobB5JrBY7Uok2UKAyzbEedXWDYtQ9c9kFteeZc6Q1SM6CkS",
  "key41": "5xGjcgaAKDS8rYDumyBNK7gqDBXM7tMqaHcCVsD4yqT1Korj8rtuxpofAiQhr1eiegtrbruXVrFRMcgwmJqV7iLx",
  "key42": "2LVafCZUNUz4DD8FrzJ2EY53XjtNdLGm9M7X4zR4WiSEc6GQUXANJUVqWHgMeR86RFxk5NBtQcDAZkG6cDApjwiQ",
  "key43": "4EQ6KgN7tefMMADtpinJQ1VZdvgmw1qtzQJq25rKqP8nfmF8VjHteUdsLawbzHzyAVLkpPC9EHZoAjkLfG6Uafgy",
  "key44": "59kCUwSPJ8X7JkKurQvqbc1qFAYdonGDXkZQUgKpBp1ZhTTX3Tm75vQfaB8CSfFQfsEF8jpGG1xQWPypWoZopVCL",
  "key45": "2VBZ1EXQ5V1iBJRJJhKvYRwNvZThMzXVo9w44WEPhGhHJ8nXxpRKXPXNERLiyCRDqVJSuGSRxYpwHfTzXmZMH5dj",
  "key46": "5JE7Xvvx77nzEnTWjjk8fcnyULau8Hu6MtxrGSunjrCTPGxkcAHQ7uUe4mEZ5eJiXwwhUn62qa7UV9SccJWFr5xq"
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
