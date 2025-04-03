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
    "2A9P5oFPxpQLVvCU1AjjNBNzjCZ3yEy8B4fYwFhxuDmCDBZqDzQmsmoC3azo5LEJEu4ZxC73uNQZ9Ggaf5S5iSAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVW5LyNGHt3sJLCDtb2DU42MCDDVhfdKzUGeSk78QLgkskwk34o89vkUp5HLS9Q4yMeaYSfkUH4RdMxyxeJDJNh",
  "key1": "wpCsfm3SSumGwAtmejsxqQEJRojX7777nnKSaXvSvk7Eapcs7zokrkAhodbf2NjStAy7rocc9qVh4F8aWBvck2c",
  "key2": "49Zw5bndsNfkqsh78zBy3bkZGt2Stg4SNQWY6BShdDUbKQPhVVriaUmctWvo9rmbRC5ppCgFTx1MXp5MB7eMphE4",
  "key3": "43uV7yBnvsyKPW4GAT6ta4pfVaduWobLQinhgzXcZYixjkQnCagw9xi5MmVkxEJFFFtQALrd1BThLcZVjJ3WY296",
  "key4": "2eSsJ9Rv3s4CswNwBMMTrHnkqFhtrZJz7cDZgQ88fo2LL6rTgLeA7H3nGkqfcH7LfM4r1UUJWYLzoYVNA1ehe6AE",
  "key5": "jk5T1T2fs3BZVpMfQzeNYiqamJhEKHtgZy632o6k491gAqf5CgXtu2dHHmZRpSfJgeU5y9iBdBbp8Zd273kpnc4",
  "key6": "5Nef4qLvu3fDB5qP6QunVD83FDusYVQHaihJ1h3X17ibiYALUPtiA7x8actjjkQ1nVfMpenb4b4iHANxtwFTZd15",
  "key7": "5WNow8sMEGwzdzwSdUJ6aNTPyLVJqQaLKfvP3ztuie37j9uGrxYPUmJjH3hdT7GDH8xks4cTGNdJ4zTBAs4yUzGg",
  "key8": "2gLdGjASMADzz8krrHmVbaDXtABBmE8mG7tQr4mvHwULfuoi2qTccjVesyg16MqVGTMYR7HqXooMUFPzaBVQBEC1",
  "key9": "5f5PD3VQXYP97CZ6D5gKXsiZzEok14Yi5PJjKd2DVwxiAg2PJePBiswgY4jBtCUvPPVP4E7yTuCYY2qgmTfRUy2C",
  "key10": "5fSmddPHe6n5ecWRQHVmiiYpz8V2WtKEbrQ91nA3eXFYv8DU9ZZnzhg65CjZPhQUHKjtYwyNWzAEd1LSGKY7GQyS",
  "key11": "5swSc9Cf2TvFp4y7T3GVgVfVhqENRrDKSWnN14ZpTFAZf3SFBqtfqMG8oxMsEpCZRDFStLH9rR4sifpnFkeDNEcr",
  "key12": "46DN3ZeERax5hPt7vpgC7iKQCqEx9TJWRm79g4E1ExZHSp9JHHqCfogKRjLsKQpLPkDWNbJLs3HShfdUxQi3AznT",
  "key13": "WY2j8oW9GjEtqTycrcpVbW9SMyH5qM8Mv4baUze9dyxmeKJGDitmmTJgrLczHzuf7QXyWpscuqs76EQrFC6uEE3",
  "key14": "KZid6s93mGnTNAjEt58npZgG1s2CQmj4db5L2NqxEPVEgRqQAUKQo8CH1nVHM89HZzWhACb4T6ZwYR7MtWcxqio",
  "key15": "jZqdKpyNR75hnsb7JwTB3ENqz4szxnezedkEfqAK9VEgzXwvzipxi9yg54itoTgCzgsdB49FkH7mLxKPgYEoxKc",
  "key16": "5E7R9EaFy8EQkSUPTy44zAoNVPxcmjRJPzGYz2Tn45V65XZmzEMYy6yN5RkA92u5HPqkgEpSZAtHGbuSKFvXtVKH",
  "key17": "34mc7e3NdJPyvNVyXpyUp8JEmWkkG8p5zGkzpaTXEyaEgFfGxdum73wZuAHa9vQgBWv7updu3zTASyQvuSpawHGC",
  "key18": "kLXAm2ckWKhnhRQeTXd9FRzvCaFQsDxUg4mWt1AnZ18TUXkmKf63XKAEBqwg6TCvoyAfFA9gjfKvrB2snWsaM93",
  "key19": "58ZSrd42p1et14UBpbDNMiYxas8PoL9aYY12WQUXmA7fQxGmzjDWXvS4WySP55NxVPsnTbisp6YgkeSdrJwcCtQV",
  "key20": "2b3qFQ1yifGiwCufHLdPSozyZwUJyUtujGgoW1jLPiZwKjZgNW4STWEwcruTSXg4m1Xwf7dqd7Vn5Dazq6AiMtcG",
  "key21": "4W2WYRjFFj3k82xdFt5wyJnVSAqTKkjGVYzoQHvaNxvvZsUzb1xAQunmoetFzrsrmZGet3isT8gQAkgJmKAfLpiN",
  "key22": "Qbawdh5jTiBLiqyqG3w5tWFEuuXmg7cPos3EPSEvVL4bSQSLoVtALc3G95ZCom1Ek9giKbWJVsKT3xpD3nEyfS3",
  "key23": "2rLTpjFKpsxM8LgKxyaBweAWcAjsDg2SQwTHrKgGBCh5L193KrXZfuXz6833sSFMoZjSPDeYKiAvABpd4GSQPwJn",
  "key24": "54gEXVEwDiFfoN3HBFTWB7xBmCjYCXz5FQF1rSmiAVbLQYvjqa4zud4v5EDt832PVJ3GhwsHw1tF8GHv5oNb5ex9",
  "key25": "5NoXBJrwFNXAztNRwA8sVscGuyczLBWGDgmX63SDTACikVeR75M4FcbHRwukWLJZXCwCXsZKJPh9ffDsJii7H8Qf",
  "key26": "2YsgiaFqjkJwDKjyHY96FVXwfBufCixPXz5TWAYoJXCoV54pRef5cFZVXvk3qmWKABM1nunUs9Tz7MqQ7rpiYDnz",
  "key27": "8FhMBbFsMa5wEQtxDgEUURR58r8JebXwZspMYxDTx5v96tcSvs61oZLCeaSjpg5c5eS3kSJF8e7ZasoLigFPWLK",
  "key28": "3HEJrkTxd7GYDTkQHcM6DwZVgUC62kWrbpsHcghv1mbF7GAt2FaVm3LpV4hN7qoFbkzYHUueXbKwi94P2b8MYU5D",
  "key29": "5khZMtTAyFJSHcM8vEQeh728hUb8HmceytCUVgWVP52BQhb4tSyqSZcRS8Pxim7vrntV1QELUCfFB9RfguKA5jKp",
  "key30": "4FssKFp7md3UKnATFkDAqPYL1KYBNVR51iyGAyJMvTdhie4mhH97DVPxg5yCz9XECg682Ege6dKuHaK3USJphEZT",
  "key31": "44pCsLjND23VqRwLf2yHseE5NmUz9mxtvy3jkTLWbn3ofzQhtmf6h5V8DEHiKDFSoU8WgcLfrqmyoRLZhauroax2"
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
