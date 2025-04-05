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
    "3dGVyQXYgzTPgjUYUsZTgqqxSCP1BcPDrqYdKeVCiYStXagzkQA9D34w8zUeVLBz4T2wPJT26oBoP6k6UYUMg6oW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rgGDw3V11opnjtja1G44SkAUW5WHDAF13bqnWSKmSrTJjtwd49zitWre1NqDerg5UA4KWV7MLLTG29WdKmtM7Ch",
  "key1": "YNRNDUn6auwGg7wVqyrM4L9ts7neEBRoF6JwtH8Su8Ek6chAAQumRTjUbqqjFX51ZpUygdEMDSWDUBk6NFZXCVz",
  "key2": "29a5TQjjg23rvF3GVGmfcCJVzq53dkeEsbDvZNRdijE17QovjMWeA38EugsFHukgf8ndGA2PsHZ85wAJZKZFJqTa",
  "key3": "3fezRggJT5rVi2ZP5bMSKwZKjCyu59VLdkWMfMoksSqu485VZCZMs66bUNkLd6sTxLjNPRqRt1QVUKVn15STG9da",
  "key4": "mAGB95VuPxohQhyV9cUpDCNWDPUgvWfPWLaXpYYTbb2YfRDVN6ekYUWncrt91DdLmAvXYiBQfSVq3v3eZWMmSJk",
  "key5": "5FdsgJanHZToeadQFVvBNLWuAVKhfFqkmfBWdU1zXracgL2n45rtf13KLdNvVY9duyrxxScBj3Hd4HCzD6vXGDeq",
  "key6": "TmmmYLYM83bnffC4F9mbMEh8gikCDRK9hQTHd1tUke28YXJ2EwyoKpHPE4aiHVuZmKVTWgYE1ZQiKfLt6AT45ZN",
  "key7": "59yE1kjiig6ioEjP5knqHJ5Pe3tWQ9PXdHz5jMZkKSR5P4NNXmZYB4tkWB9q8ti6RCPf3eu5TWdLmu3h6zZDUu6j",
  "key8": "2R2hywFoi33ZWRFzMUNCsxSRax7SzvVqKdS9JDDjttEh3HJ3nGeDj4pDRi2BRrmfp4fJYjX9ZvCWTArEVfetCXPu",
  "key9": "4zAYvqahvX1N5a95ZopdmenF21d51H7MKQYCBKNU8NVe1LiPhAo3ZYHZjwhWMoSJUGVqAyemQbScK6yDWCwGkfHo",
  "key10": "LVzGYrVKBVZ7pfd55EdvYnFHAzhZMTgd2PtWz3rmQr4v97v7J5W3ps5hA6tMZJNx43aEsEooUGEqr8nxXjgL6JH",
  "key11": "5c7doVB6KMbr3m51GT39TnTLTG6z5dVFsheRvZc1WAP7f4Su1hqt67sJPGt6rnaeqjewdeoFNbMo3xB6Gj1xK57T",
  "key12": "5msjuxqqZ1jf26FCs3Jf5bNPBT5h7rqMkJtcncYQ1FhUoo7zpDbpPdAyvu55waB5LuVTEzMVAKRgCRxcKoeMu5zA",
  "key13": "Z8PJYfTMEybkQ5rAVHi3uNyjJ2aSVbAESWiaNRsvcuTS3Tb8k3j5S1ftaW64xkEXQML7aGtsyr7Lq6seX9rnYdE",
  "key14": "4UH2HMWddpansn6gZs3ZwGbN5T59fZ54U9XQANX9vhAag7LVCsMg779x9uWsUdyWh9DzS2KWyc9ipGprMYVHAEv2",
  "key15": "3aKZeJkmdHu9SPyWo1fhSFYHzC3zrdXuE2oi9U3hEwpKtQjc4UL4Q19DLxkQPLWdovXpnAPJwu3XhYURVSLW3pW8",
  "key16": "TNo7AmZrMzF8joY2fGmYtctubWY3wQUkqUYK3dgRwcq1W6e3nDrG41QYy5ybxXRLK2LbnRYtLQTvunSiXD8BEWF",
  "key17": "2pHMoHEFfU4XJDopNgyisFf3q3aNHKY3BKgsCR7AsoEc7ziPTfuX7wcmP57yBnSKR1NWvKMyUZUFuphyXJ3wqLym",
  "key18": "4iRMYKhJux8A8umZqrFKrcHxQKcoAkenHzAhQBBefPHerxiGBKozGSEThJfaWq1DP8nyNL5YU8yw9eB6YWbPw7kb",
  "key19": "3jbdEDn79FwhzHY1rHS2ujzkVLatGRtAU34Sa84M1ZUmKuj3pXYe8KMbqvFy7RwSFQRL8QfrdNQgBo8ck5xfG76p",
  "key20": "27x4PwRuS4R9tUT5V5jXkPMrfMDK1CsWxSYpjNfGYcM7oBcg2s2VMbwkUhiwGyasTqQnnwPYUZ8BNhsdGMNLwTPV",
  "key21": "51oFHpYEDxUircFc35DjDbzqDLNsrTGHsB1kYAZB82PqSJZ8NQRGsKvpEeECSBb86s1JHYh4qP2FnfQWCMeo5pej",
  "key22": "33HcNMCZrWsxuMqs8TgQgyRArQMCYoVWRv9ZmFR69qFNSdjKCL2hpLxojrScb5w85MSgtVs4oJmFhz8Yu97Mk1H8",
  "key23": "caafP1joT9viCsbU5zTWXZYzS3nRhLVfJ6ZJr5EZxQfzaUD4Y5AkWY5by3myVHoezDYQWo15utSzbogsSYWksDY",
  "key24": "3M4X81GZe8AXmr3xUryquTTdTkTeBdUh2xnw1Kj8BRBqBQxPrARRpMK5uWXZN1ovS78Z6mcEBELDgSWVETxbeeEZ",
  "key25": "4oh8Edqn3kdMJjueYTpo6gexyvAhB7rmVbWhC3m3qDCnhy63DfQqVQbbiR4B8ZbP2TKfxsXAuJdrqmKsjwzoZ1ZQ",
  "key26": "4772qXSDZo9ntMeWPLzEegESk88mA87m6V3f1TRrhKFYGRPPtGeyvQ4KqjnCJeUAf9GoJPqJEEDnPyeFTzqjtwcD",
  "key27": "4DF3BjHbk6iPskVAxk8MZxs8CJDpMS4ZLULW2F4sJbV5qCAE8rgaJi4GJ8HDzHUPaL6CfLAKFwvx7m2TSQjq31vv",
  "key28": "4WCbLcr3WD4DgeFV5fQnEirSYhReeLWtLU1zfk7bMUFEYeuaLaUkQJsYHdezW6EAobkjhKzUimm6wYu9r8M4iAkU",
  "key29": "47LWEryd3LxDfiSegTBQwhionyU1wUJKjHabCLCtoAXDvCfFphpwoQeSdhtpuwghG4ejgzWP9h7UXULqoe1vJmbF",
  "key30": "5dqzkyNYzNbq2kfJSaWLLPu5zpW16xyWpRaHZvkdCXPx2QpsV3uSEPM2rFuVV4qvmLFSarimhX9oBhoNmzYWqets"
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
