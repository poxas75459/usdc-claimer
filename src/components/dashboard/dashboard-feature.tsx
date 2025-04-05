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
    "4CUc7J7omJDKWt7W1GH22pU3qTCQFsV82Nj31Nzvdr8yQMakdQKk7NtTCQHSXxsPDrkH8yB2zaQNGhaqbDn1L7UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JH9SySFs74kc91UGd1kEmyeiesHLNT85WMiZKzt8M7wS3P418dWUybF7oPRVrzKYFR8NZnBhvz5y4Dqq8g83HfT",
  "key1": "3JhJBW1hUWsBZkw9kFvsNpFDn887ridhWbQQmS7xiT2ooX3FpJWh6pwYNpu6dvo4aUe2kbJ9hsHKsQmts87z75nT",
  "key2": "29aRFL9W8xYRqrEooxpdJ12S6SCfSUYaKuY5X3uMTJxJohRcYD8GZ5Pk2NVj53uCAQt1spGAxZTjrAA556mEqif3",
  "key3": "2ia982goeXu7EZECib2hzzN4YHAWwt2bwgwXc8swk4fSHTGa6m4EB5oF2XhdKL2eQ7kjEKd4mckcehDVCsvQpBAt",
  "key4": "2gwiiCXZssAvsfNYrPnBNLug4gqzZULTrcBkENpa2ttZvRsxJxDv472tLTTYAVD7PaJyRBLURc4kAu8GTerit3JV",
  "key5": "33PEsHFCfzn6nJUDFNqTHL8VPHoxr1SC6Gz3GDyKgy1ZtAkQFBMtK9sadB2FjaBNexjo4QJV7tqk6kuAqkSVyqUJ",
  "key6": "3tAiHQYPpuvqzR1d22dq5xuj3E7TNvh99VnD52pijx8hbty4cmYhzFSXh5iPnhUbH9g8vV3rVp6yxPLNhZr6zDZY",
  "key7": "23yXg6WtZpFsccW6PgeTgtcQpQtJUqviPrqXQhYk3s9iPHnsFxMMxi6iMpjkWxvfPezdfE6F7b62CQNvjswGnkGX",
  "key8": "5hskytKriaK6KtjxiKUbqx4gdk5R3QHbUMpocqBQGaUT1QNvmuoWJ2rBycpcJhTuyqSVXFeVxHcZMoobtNbtLs9z",
  "key9": "3RNvtF4ZMBgwpTaJMaABq9TqnJ7U1ALWFECCQNvBNw2voYBUdTLSAQfxNvAbAKmxxQ8tmAVhoNiNDb2s2GRiJRoe",
  "key10": "57niY6xSqbQ7Auwi57E8rRSSWEAWUPDEW2ifyuqbb81rY8DdppXefnMkRdXLmfm3rRFBkS2SWvRfju1vwqxxevwz",
  "key11": "H1NjENSnfVaSc49JoRDgUFnEjNgmP3Uwrkydm55wpYdL7zjSuj6kQ4sMeHSG6a9XAE751kEPVCCMV1sqfS23HDq",
  "key12": "37psHm62fnwp9iWsoKYBG1YSr6drMNqaLioSJyahQcjTKAAkcaRcvphg7LCwW55CdzofjBNTA8n1EQMDkJZfFocB",
  "key13": "5eEMidDxcv55yGcJoZGc3NEHzf2KSyGWJpXBoNZkbv7ovSvqQu3QRz7yED65UoWsMLsut8ho38pWLLfXw9ebR8gi",
  "key14": "3XCMA2AejQX8jf6hWBZ6KbwHBSyGSTJ6uDGYtyTKMTttZQYoR4sPeoQCkurv2REEQsrumhaGb11AiTyFUXTTtNvi",
  "key15": "5ays6gcy8WTsJD3viLHvByoJYYvDPYWczuqi1JD9WpkuaUzx6M5UznvHpRta8WZ3z14PKiEnqHq8zBGdCLbq3AJa",
  "key16": "6A2peVfyGnzC9JEabkeGDXoZjtQDyRpiNkdxJD8FfYB3qw73VbXzcD7bNjP9CSgr3eH4maUxGZGw2DQEUQ41N54",
  "key17": "41kE5ZXpm2aZVXXgzVZXZGyNWZo99nz67zFuByi4FjYMXnXwiyHrzfJiYuDb91NUjvWeZCyvSw9M376qhPRDHrC2",
  "key18": "3hXcvQt6eFkPpPkAHJHtHrY1udjsjJmT9qgsRqjbEe5DKXGvUgaYta9WhsHH4MRCCY5QpGd4q2pa82S43ZCaESTQ",
  "key19": "3hEKMoAg747fD2otuk3zEMDp8ZKjNNiRtixsKdqSE9zgDzBvo5GxNTMFuyipm33unaSUuRN6focdtMKUa4J22dPJ",
  "key20": "G45av5pz6fHj1Vq8wmsGU6V1eAP8mMcjGPTGMHM7prLpEg4Z6QSfmgR8utxUvfABRivmyN3Warys6YSoU739vjf",
  "key21": "co888eNHYVUSXCNXNJyay1tatyzUw34dmsi3jKVnH7x4i4uWr9Gt6wvvCwMYN2uEcsA7tJanyXu6ALdN7GAGxYM",
  "key22": "2154mVmKyJFXFaQjNquUMYu8dnhSizU5WzrWBM3FvTpVK4iv7QTEgpdDtYdWvky79EKZ1zfhzXQsuLA2S7Hezb4k",
  "key23": "5iPt6b1aaEpZ5WjYqAEfsZP2Wv2358Bj3kKP4qNEcb5KH2qESdGYysej6nYzmNKBb6Qw2ZdgJSuzhLFBVUYfvraK",
  "key24": "3VG3uSYWrjub4AFpVw3oBG5jrYWoQfPB3bxYvqtGyQ1Wv8C1eoaWsv83a8JzaepCpvJvkFKCM8gB9wEpR6szj1Wm",
  "key25": "2UxJpxMHXMrhGcnuSn57Zay3iTcK68nc8WQrPsKfZ6duTk928JSKHQC9wJd3MGL2VvV4Hx43nsNosGRd8pSwJxip",
  "key26": "5KLqr7yXQQmVMXXJKnahkbMZ5YYbDqrzprvjopfBmhCVh94tTXAhwoWi6DiQD7JmK4U2vSeAAjtWZcrUjM2oSyXU",
  "key27": "34yfdHyqNV6cdZqocnyiCRm8qHANid8TpqbKEvLp5i7xFRVPrHGtAKdFvYRrF254SMdw849bTcE7hadw4UVhX9Gg",
  "key28": "4gDf4LTF23nfcScnCz1pKEDCSHoKUQbeb9m38V1CUGYuhdh5bq5ZReFgHGVRM563THJrrwaG42xEPo9wJcD4LiUY",
  "key29": "4bguU4ePRBfZ4Wqyex9SdTBbSZGDABqu3XP6Ke5UCkQQFPKTRQwKiL2Np1ttiEsWThEbiXewtZbLq6e1Dcm7JirS",
  "key30": "ZZ4cjjHaqQJ8KzJ55iTef2ydQRNhnnLyLVNWQG4tRihA9sGFxqM2K1YaGV3cfMHnHtXeNek7F7cpeKwqjQNPmba",
  "key31": "PF11J54nLQ468zvhk8qGHtKaWGAxyStmnjLXkDd8bH75SLnrzPZxFVHoc48RFnsBGBuXDkbDQoUPFjmvtWNpNvP"
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
