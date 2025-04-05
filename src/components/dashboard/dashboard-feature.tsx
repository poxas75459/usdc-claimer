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
    "2nqicvKaB2u43aQh5QuaKWFaZAsyqsuVGTb1qLqhbpXrnLfegBkMpCt3MTFjEmJqeRza2HMdErK4wQc12GwCsyDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vepNTo7MNFbTj7ecL6Ln33oV8Aywq3zpxU244rBYG7LmfLDghQNfL1BU5QgXQiUpcjSRmoNh38nzxyQEjkDii2M",
  "key1": "3XorpgFsnKvMBL5H2xek9zwLuYX3wQTfWJNvkwDd3SDSQFYMAZnjHPoWE8aQPuZDcHRKFkch4eRbpsu7T7BvF4a",
  "key2": "3C3RFhKGX7NDrTR2Rp433N2uuJGm8rrzBe6NFKq2QrNMWVC7fJo7dtUo1CA2McGowNDi4J757FnEaSjNQhUDkEVh",
  "key3": "4LFKb4sU6oat6EDeczH2AfJYSxUHVNPMTwLXpQauJPqvqpZPXHyPkGc6BB8vfVeH5YN2cjkdeUzwoqFqpfrnTA2v",
  "key4": "39qv9gBeVTeBWuoZZeiwchkmZ8CVr2SaJbPe4WH7u8MgcwFVdc2FmNoJC2ZMYc6Vh89bxXdjud13kUqDga2HAVwW",
  "key5": "3nEoidenZf8GiveVm2PATaRsehhAYeBzRFfxzWxvmDZN5WYkmaKJVzL5AzvTzBxD2r6Y6LL31t3mkfQHn13oeS4q",
  "key6": "5atEjQg3qGqLCAoQRKeF5RT7nsLFTZVcCkYraKhVGBAgUJXATvGoMKe7SdxsATsMhtzs2afutPWdfETyvDbuqsjF",
  "key7": "2iKZAwfwrS7SU5z2p3oatCZYL2KFcgoFVCBXMiKtW7mN5aBDyJuBqYL5chX89fR2CB8HprNLFBDnq3h6GzDeozwy",
  "key8": "5d5TyhvSPhszTEriJ1WNEMufwrfJSJNeRFz2UHKWk4s6z3BTNmwKjTiqgdEUaXmeUy7pFjkkhkEM4hFjbCfPKRLF",
  "key9": "ivrxRR4U4C4CWzQ4gdyRkRZZjEPADrcpJeazMnYtyTRguBuF49m6vWFKe7z7mb39UPhh5hPUMFYp1yND91BGozP",
  "key10": "Axz2tz8eat1oTA8jrGiq4QkcCJRRPV8QAedxDwT3WuGV4PgD9jQkwtT1WmmJqqzfRoBxsK1QQYzY5aLebCfq4Cv",
  "key11": "33rgDfip1JtuJrMP2oTe6uVVkFFC5kBYx6iRiRbeRMRiUzWULTRRj3siyyYGzThqV2EPKiR33TM3KVBRJs3wXjTo",
  "key12": "61CaVHqVfxGWoGzTExrX8DXiEbCF6Cxp1tij4D5CHwhgSteqCmz1k7ytK58qtsPXAvq4HkEb7RZynyWop8HWETaS",
  "key13": "39MyjjuSpkvF5ggd77wemQWYiSzBMU1FKXN9BZiDbkivQQSK9SbttRffC99wndWhmAgN1176SW9TMYizPJVHYikf",
  "key14": "2xNsowpsFHaN9KD3fhRQKQvbKwNL6Ldn2wo9QLbUnSU3PfuTbRr4VcnV36heaLjcPNMgc6nU1U1N1jyCqhyn7iJQ",
  "key15": "5bGmCm1ErvTqyDP1pKb7pZPku9pkcc88xAcAG5xhsK72FXbwrdz4QCYUGSXXotLzvwKfztx29PBFZZdxe1QtSMR2",
  "key16": "5JmukPdaoaDh7JxpagZvebjrJnzUGcVifTe8FTq3sY35aEamEf1TBvoF2sDKnZJ47Tf2WjgTbEv7MNUFmcoWtfwW",
  "key17": "4P1WQ32EwEYU5pJyw6P9rVjGwTu2Nj1b5Z9ji5h8r7x3mK9P61PdDYcWfT6ViYc7VeC4oMs2ro816QNeWHZxjNts",
  "key18": "4hv7fTXA7ZoRyqRxhhKXw8s2PSyPeJAa5iYknqpbT867B84deuoeATg5afCP4ttwTcTQyArmvgwY5LV9jyuD2qk4",
  "key19": "RdakhcKommKh2uj2P3GGwSaQCVEoY71a1cbB75kHePw8pXt7YSGt2kSWjGPwrT4vVRFqKLUaVYHDVkYk2gBiL5E",
  "key20": "42GU22LKU9cuYYs4he3NjRphLiVbWQa9sMVJJAinP5KZac5dDzDktfV3y6WRNnuGhBiHRsunHeh7encPSm5d7GF5",
  "key21": "4sNxmGuseCCkwT79Rw3tCKwZHsUcivKjedy5xQ5amU5vo9nfWqyFogKVU6ngqcp6EETw3ZsaJLDXxtNj1AmNRams",
  "key22": "2XB7P5LfaESVrP8Y4XJr7DoWJEYtoGiNGMzcceBY5WYVPhKdaoJfyLPGvwboN1eHXSaJya62J925UCQJGGHGTfGx",
  "key23": "5TCbR6NFs6vqbE4zE8UbpF7FaD1UdGUXsDJkVb75jWRmdT2UAgkJzPAqZ6GzMFX9DTXZYXMPYi6umV9dQptTRYfz",
  "key24": "2tsMUkMTFPDXCDVYk6HejVcPSL2NYSGLaWE5heQwzWKSBvRKkFPzDvCz2aENuiKdg14F3C9KfV5ArNDqJUWYSQoW",
  "key25": "33iRhKcYDBAhin2h4bqHJoouihbGbFctNF5eDx43yvH8HYEmnKSWiymgncMTEQdXiQZLrVHrDgew4844Lr7sbKvh",
  "key26": "4c1iLSBD5WrBZBvAHHcXweVz81gVULVHea1Ltk4WLv8hxJ5e54rQTwBuE3DsRjXejLRBA3qdjjKMG5NKx664obqe",
  "key27": "314XukChqmfn96Zu1tdJaL9az7tu9hshqETeqTpr9n9unLs83R6ULi2qCwXdHPoasBNsFe52u4rHGwAAmVof6iqC",
  "key28": "ALHkrJ3Y7ujZFcp3NYqKkUAntjasxWw9Koq3Z7nrh8gqCGF683AAWE7x1jHdGPwiuGiVq2qHM3TDbYfGBnrxZGS",
  "key29": "2XEGz11mTFEjbZb9vUq7P7un6kDtqYtJjWB99dSXHY1YL3mNHbEc4Cu9Ntnz4LqY4ZYFF9Kgxwx5sAPfMMU2bxdt",
  "key30": "3dx3XP5uy9q8PV3eM16Y373AWbitpUK4xbxFB4stxS5voJ8WZNSSCwtBRtXLbBdHVcC9wEDDvM8NVyxU7ZtUC8JB",
  "key31": "4ctz61TzfomuP142MwW8LenyMiDqZgftoWZW3kKdLoQmyTNLU8VHsszWZNvg7DQqtnDVtjizB3mt3wSWBDEbUNRF",
  "key32": "3hYqfnHfdp85B7dm8HcdQpzxA2En1cHeJH3j6iuv644kRa3o1onkwfDpJPr1EBwJCQ97U2U9TL2doLmrg3xaThHU",
  "key33": "5X26nWojyTwyJsYugV25Djs1yvicDxAd9tsHuiAh6e6N2beGALCWrmf7onAag4JwNbFNQmX9rRQrZnADFc9Y2tm5",
  "key34": "3okEndFbRvhLGdAhY9ZQ4BqqikCnJAumJ8KwemrdYQWYuNPfjDy3BVaTSMGMKMYv7WAvnGgU6S1bSqqzif59SKDV"
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
