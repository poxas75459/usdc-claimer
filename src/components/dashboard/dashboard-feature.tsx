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
    "26mGWa5bBnQS6GBg7BogRhjb1PdRueNbd6AvWFsqtgE2QWc2AocfNo8BzH38chrNZJ4PQdM9BBD279L9FAzrDxH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmjkGkm1wadNkmEc2gKKwDcXyPQAqe5nMia335aqFS6T1x1wYJ29JfonsVgq66SKsVpVHiQJkdbdWmD2fMwfr64",
  "key1": "45QBvubUjY5s1kstGTgQwU3GKkUbr91oQhQwZJ2xsT9Gag17pCm52QWABjQcEwA4Aq36EnjpmSvv9YoUDQtukJX8",
  "key2": "2fueznUsybkTUR7QfgCYcT3eyy79qBby3JXBM1SHaBH5FQxi2J6qtZjZqgcv7eccEk4KH6b7yKCdgJULChqP2GUP",
  "key3": "4ZJws5SzRn4JFoUNNHYfUFXMzNY8s9xLLs7jZXjDQbKfXns9p93dnHWRGXnPA1H4jnN5u4kzShWFDtbvVCof5Z6J",
  "key4": "5L58hWpx19yaqkttJo5EBbpJZL74r37FvVdmeFh6wqjkeUGfcNpkDYBy33Vbk3bWz2N3qHJMpHRVCkh9E3LjgyEW",
  "key5": "2WG56xX3KR1JGpDZBNqmJVYqeq6gTNEPafncnYB2DYytGveWzyPzYpwZ8L358FckZZasZmewBTiAvDsgkP2SR3Fy",
  "key6": "2wzHwcWErKKEBAhUgW5VoZtBNM1zcZBzsmusABoWvVHcFUi4wNsZB9y17WcaNmH3uWECK2oZotdQUD5phusfNmjS",
  "key7": "H4JtWFPmXWcmXT3GTQM3dcx2spgZygs1DGv6xDYTbHd3uj4Sr7FMGPWouGtpHY1dsHvmbfAWwjxycwL1z8Y3pBg",
  "key8": "2ubGhpNcBDyKcPSxUUmbe2bhTMhN2UDkxtpHfQ57kAxqrqaubgUQ86PHfbawRaYCkg1NxgspLobTdCwE3DLyWQe9",
  "key9": "3WQWYMnwgAgXRh98xTQC95hSAEbXJquCMQY3ZFVLvhSbKLRDEpzTijcbbxaduzh7kCpCPYn8SUYyALaLVwwcrJbH",
  "key10": "4u6U2zdYH7KVMKhWVJDN3guScZYU7LxC5NDB4f2DmQ8PbMoxQeHPqktvgm8RMgANtqJ16j16Av7dmijUPe9tskAN",
  "key11": "2BBFWoU4JAcGUan8iJNSPDi1VP6V2dXTNRZvGUAxkXGubi3pip3ysyJ8YK9CE7b7y9epbc2kPZkxw2uf9gJWTcGV",
  "key12": "323QpgqV3MKjsR32sPwvvL8rhAZt94QtfUyBH23hi2s1PLLffFJK46SsRJweP2bHSEQKrMo3PVh5wg6qsZCo1cyd",
  "key13": "2d6Tx9sVrNUz8DmaKF2fW3xoXVVgzi5BQTykrHVnXCGSLfuVuB6Var7pRCbTuWG3bhFeYAz2FRXWUXBf7WrkovQc",
  "key14": "2b5XMHGw2pCRSdXrVRey5oc8QiTuuVuPR45AQ8RP73R4WCxzzRUekW83jSF3FehPfryA546pRHFPoVcKbgGHGAH9",
  "key15": "4c6oL3QxzaPeTyachGY8JkHRPTmuQCiZY3NrQR5ESkpkQ2keqoMHj1np5mgVEjcGxYNCLy4Aa2eKtsCdJWrxWMjS",
  "key16": "5LjjYMqYAz2Qj2W75c6Y5FQQr8GQfwEatFuwLdiJGB2DEKGzTwKM4HkZh33pPnwsGhy93nEdCwTghF7An2NUgpmJ",
  "key17": "3M28Qh4ds4w3oihaGrYqpFJt2dQoTvWbgAc6ks8Axe8S3mFfAo9eb79SKbRDqBjxXpZZffaj1uJhiGJKRg9tbbtD",
  "key18": "4vCCMecd5xy1Y8vYnwafWurfj5oVXFMz1Kyw1fbwBX3ykj4h3RMXxzEqfWTRGkcDCAUBsV2fR2UbJYhjgZHMPtai",
  "key19": "43xzyJL47a2NE23gonRN5595eg6nsCb1aKr6DnB6fGUeVo5t1nqiUGko7q6dw8Hm2Hfa9TFi9T9gdtgMV26yrq8T",
  "key20": "2ibZ8Y28NDJxmXk8dZs5Jjc8ShEP8v9LTgSZGEDiBQQYmY2rzcma44EaiqHsMX9AkGD57rCddvxjLRZ3mhiFz9DW",
  "key21": "7BqZiXDm6sdNPUQonFefY2punBtQWFCeizY3wReuSVbL17v9zfGk6oErQEf7SMfYziBLiPpKyEephEPkey6mqYt",
  "key22": "2MKd1jD469NojBwAn9j6CP4pqupAKnCHCH9pnEtARfcQPxcyj38H9j1HWcfcMAWW5rXUS2HPM85S1YbNYzYR84n3",
  "key23": "4oBWPcaymQiRdys9kozoYNdyGDt4ALEuF4BNz5ibL8fGjRxsTNsEPchLsJsiFoN2NaMDPM1LmTr2C52zrzCejTsd",
  "key24": "2kXtGq6iY9mpsjY4sT4CHVRQGP7dB3n7cKxJMkrCyxG7NrbeKNC7ivyj8A81JQHXbNekQsM87GUbMnmXiV7Yt5mL",
  "key25": "kpxXwF5VKRDHfs836WXaWTye72YwToc8LHw419VEG49hcEKLRmvuycEh7KkPdxzDKUxNXbfPFjrn1UfSkvzzrXg",
  "key26": "3UZSK3aCUYeAHV1ggSjy2gEapSQxcTtWcWjnBS6pV2ngJrjE36CwvSj3RfMoHkZfbU8LWx4DYFAKqxQwVimWQpvY"
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
