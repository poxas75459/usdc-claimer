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
    "4q411kaYr5W9D95prLWtnCzY2Z3sDigf2rJhiiPLoaZQPGyNntaJuPwNbDiZBhPH5TQN9TATadNhG23wQN2UzuyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkGxjkiZZJusKUuAdLRNB9rjQE7t1RizyVK4hFnk43CosD2zUwKQqQBSeoHT5xPEo94fbHQjd1yj4phgQCtcMQX",
  "key1": "36y129eoZwY4BkWt2crTnLsBtECr1WWfwcLz7gv1RLH2CkvT2stfgVxZ6U53TC73xgpyTNsqzmkBSTFCEyaJcqgk",
  "key2": "4ouE5SpmZp5FmFYzJxuPHtrYWM5iumL9rUVkxBSJM1rFtD9sTQktJbzAX5bn4VqZPDdzf8owaYf6j86wmRatkYMw",
  "key3": "43cXEhptfwXwir2PqTcCK9uZx1AuKurEcuZLMss8NXAvqaA1eExejUW41SN9mqPTDswHD4Dwut6ZXv4dohoYWNLh",
  "key4": "EZUuasKeZVn22226ToeVTsFifcxGuByKWxRfbVW9LeW6REjvh6xtuSaa4BTDFnPzLjW7AaTcy2h428AGeZ81nWV",
  "key5": "t6s7wXbJ1WkaMd9VEjf4NfBAEB2z1do6MyWujXUwP9qpxxm56zKNBH14C8fDch2U7MJsFbb62mzQYx9MZCNgomr",
  "key6": "2xGVtphoLG6e8sEPSgYoa8i7ghKRadThoKfRafb6kKEZYwcrN7wejyYEhthA1SnCt6KRg2iGua2dcKKVUiP9Qnns",
  "key7": "cMbCgeXVJE4kG9yKvLpDB3dkBmuq9f8PtjhEio6FaYdV52zFKz1jH9yQckXHVBXyQBrSTZ8u5T5CGAAmgE8yzmp",
  "key8": "2kfpAi1WLUr8sJReN4t3m7CqQAB9oqdetT4gR2GUXdhZVLEdcC3Q9ANVSNE1PW6qF9ZJfki8LMLZdL6zWyoDc8ei",
  "key9": "2dNERyjvYEkqtmFLPz94QkWvQv2PnU8hrz2pZEFgDVDu33f59R2dxfZKkbTH3stVsxz5S7d2gNgjGu3R6ehzyuYc",
  "key10": "4zfdoyYFjXrnpSrbep4hE6BSmdYkPr4MgL7qcVe1BLh9dFnN8y9Boj9aPwWR835BkjJJzyRbvpFxramJbpwCsz6a",
  "key11": "4y3mgJpZfiZfVnDLJDW1qthxTCK1kUXJLfL711mW9VfbSf9kuVQqaxxKyjAFc5LSBuoX2sTdFGyCB2EydxvDfMXt",
  "key12": "5UC38zh5qowB41kbzwAMVirYHxQf8xtEfuqb5GyDwBdyhM64Cfii8ZekKaEaUuprTzwDcoDG1cD61ZnPrvVyBZjH",
  "key13": "jZNUDqs4DTXHYuhi5D9b1oyyY1jRecChCdgcgkJnq3vtf9grHDx3CPiyp88vJgZgZVPnLe9TVzN5hrzjnkNHDyW",
  "key14": "3rQ4wCwVbjxVVZev3NgLc5ffmPGPLBBX4ocqtLsVHQEgnty5SjQ9vk1Qb7ZkoFivHzd5YxLjEnZ93MudnWE3JerP",
  "key15": "3zVxhRcHRnDrHLj32yDHXSTVyP8sgZN1ju4E76VxxGNVUT5f1EW5C1GCFoGpnndX2qRpzdFLSTpTN58qxW7Cq8fC",
  "key16": "5NN3AfMKPT1kQ3opG7HQ4NnJ6k3N2DPrKkWBfPpvG4vfAFtovbGkwy5hh3AZ2srgZ6HV6zM8eQGCAmyUhCR53En9",
  "key17": "2R8v8si5dqvt28t4z1VDiNihjPUmDi8HSQFCKtUCmuCgxrJqVTPZxyddXHfkBKbdbFHhiBc7yp5UxiZ9xDTP7bsZ",
  "key18": "4Z1bLF6PU23yMgqiPJQoMetTsctCA41NoBmAPdiKQdeyRxVCqQciSDq4joc8egUMSMZEf4Gin5pmk4f4XafQ3i9n",
  "key19": "42sAKSST7XTpXQxF8ATwrxYVXiKJzqWnt32nE4CevegecQ6JYnapv22RmuMgtbuWSQZ7yuQGPrPXvo3KWrysxzT8",
  "key20": "cffcKF3by5FLEMJt8PHRaKjqjTFYyjjtCrWKyT4LdK1LMViWcVZPASW5TmQPkNK5xTarc3gE4gH3fo21UxHLT5H",
  "key21": "bwKwqgxSyBgbCRisNh8PyE5wwCUfWFPdxPZU5aKNshpCJfjs9aGPbEYvfsaweaEy5yVzg4AZE9T4eUhCgAmqfg6",
  "key22": "2PkcGfSw8V2K5FKMH1hVtqsNBYEHCQw5buz9t9G2bv7tDbr7cpYnvQVAg8qYE6bTxCdXWZGLKyp7jkJNZB5cDdAj",
  "key23": "37AKnmKKv8Y4EYDcfNYSc7sHwWeNsz8rsPkUoSzzWJNfUkTRsiujaU4yBkbXZThQUjCK5nVc9Xzf7dboppTy6LUm",
  "key24": "5gkNhiHhjv3FXnB4bGWataScThZX9yt31Shq4wY4ndkRh3ibRFHvtuRmFm3F3u5LDGjLYcirssJRMW1Wrpb8HQbM"
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
