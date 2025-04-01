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
    "GJJhMQoCX9HBmZMHXwLHqGAexwrPSWEu2kWHuC5cXNR5Ha3V13ShBFU3NZabBUXDMKweEBToeYgqqumqUPma5X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gPSRecETJpmtUbjoNcTmREr3Mw98wCNMx47TDFJCQvookEVZB3qHNxMDLWKomNDbwNbYe3tJWyM4FbEYB24oSuM",
  "key1": "4bny9XKRXsRDxWdtMCz3bSpgipecFPyT3TQ87UW89uwHBGZNLhwMgoeE5D63m7JE4kN8rEWRwzFTCmXrWac15Eu5",
  "key2": "5vqFTNBux2Erw12afHYBmK5w49HTP7qToeVrN72dn2wBQCJ6sBEQXiahS1otvXs2UxcNA81CPDJ3dsQQLfmxGoat",
  "key3": "5EK2vTkL95V4dBGfXSZ9az4YL8C2Tq4qFKwXpChjYH838pwJmrgxseEEumC2BoYDXxQtwtvCp4gZYo1AC633324T",
  "key4": "4bgg1ucwcsFS7y6hrqbj4UiQsmhETTyVGdFvDtMMqtpkxVLp4gpM94uSD9AtkPsdCMa6GD1AQ7U42BmZsbnndjVe",
  "key5": "3HRwtbiP7tqghJ6bs3m5LHChLgr329DzWM5qGgregTnY84nYoMJ4XoKjBtU8FwJdDAWFpHwqZ7trwgU3zV3ncst",
  "key6": "3V7Lt6Sy9Rrg6PEU49K4mgMHqY3oi8ipDgLGfrEyGrQDiGxHMR6L5pAyNLtKYNxTpukH4EDWmpiFH1e5KkVy6N4j",
  "key7": "4dW2hVDQca6fFYhMTZoiEUXko71xBurdJuUHSVhwLYKidJwQVfRjakdv2WVMP1hg35wyQc1GqhDKg51gk3xa9Uuw",
  "key8": "26F1yUQQKk28F2oKDT8q4ynGEURb8uS25W9UHHUUvKCBrZMAMXFokj5m8vp3w3LRG9w3jhVGwhBHMFFrUtoexS9z",
  "key9": "41AhQtvS5m1iQZeNcWgVMqELaHbxxrwABcCRvFirGZnLrQjpX8ob3fuKT8gnxskLmbNDfVufzBMnJzcLQSP96Kz5",
  "key10": "4bTdJWsy5e5E7kQVCsyFqpUpar3Z9BdWoD6uw6A4EEKGPgadwSUpwQcNZxB2Ys7DU2KrNCNwGCgFKYoSANavjor9",
  "key11": "2p5gAsTr1LrUrVH4gDMGT2Q9gSPm4KK5P33oqPSZ9VMJ7AALgiPqM5MjpY3yvM5emsrs9ovVHWb8Gxy3m9FvUGR2",
  "key12": "3asbTSXXQBxmXpzFMCsthixgHCo5bRUqyCZ7ZyriYHr2oC5FEGYJcxxSKGfURYtknhdYFMLkvRsmvFTKALy3d6Dt",
  "key13": "2kjgrw1catCdm6DVuLt9g4WPBcHkuz5sTESxGrVm8txiMMtfTTa7XWdbtFoGZG9uN76joz4FMT2kF2MwbHEY257q",
  "key14": "4nkgaDs1LtHKESPLwbvNNpMvWRcdiLhspnoRnHLdNnuXWharSk7cxRVZoy46dcveehVMDgoA5pf38wdnpsjdg1mt",
  "key15": "4P8DT1T1GAK1shQ36Lv39mvTtioe6ZBcaNsdtkHbHXo7aQfKSHBBgbZuK9UW63oKUKL8nmH31hcy6y7Xn869Qvpb",
  "key16": "3XGGpSZEaiX5aoa4B8pYxdM1L676rnkA34RqrANh7hH7yVUSyMkVNPtkpTSdKyco8mw9kP68uUVn6L4UW7FeGxWD",
  "key17": "BvSSicd8UWj1gk1VeCnyL9ahbDMsH98sKTW4PgFo2KcY7SwDQKF8jgbKarhtiUZWcn7Vnp1GPdHPBJDDr9YGhDW",
  "key18": "4NbwR6avrVhPWHUcUvfJoytRmWUc4uJUvsvzHfwTTLw5dKMa2UQ7pDWyGdKaNQMsfE74DbTBtfoZZRchdxAEW8bY",
  "key19": "4s1mT2QTSPYLYLxn8hJpVPRzs584wmN6c4toFVNk8PuynFifhyTXXhJ39D7yWJePbvs5AFWS3SamHPjqoENxrpfq",
  "key20": "vTc3vicUVXNQQNXsZLLNxyAQgBT866HSkCK8C854EY7HKgvHQH8QcXSusu8YnnTPMVXgAavPBcFp7jpePCcyiNY",
  "key21": "2oEi7kKP6Vw9c6iYo2oFbte857WiJJRWJTRaQyFNhCAUwnxRczzqEGPF945TRwBaj3V9yn18XEsEPy6LfUrrpEaN",
  "key22": "4gJMPZa2ceVqPwzNDdERCrAZRHRWXw62ReYMVj84QDTbFQ8oK3otWSH9SeqM9RFqRgW6gR4mFAavFaSviYdmMk7T",
  "key23": "2aW2NkHk7mJJDfa1qzEBpyPcnHRb7bnVoDYkK3ZHp6WF7YuebCJWPBrGu7tTh8VCGvXnD2KQaGZu2GdKkFMmDobQ",
  "key24": "2UepmE9L12hRG8wbxZokgkMuhpgiiT42EnECQhPBouLr4YdoyNKVdiZZnvujdmxFnPrnVrVd3z3mwxzcnVMA24L2",
  "key25": "4HF3k5sm8WSZpVs8rgSmNJum2ZK2NF2TEPGrmnZXv4dzqD9UYRXzrntqVecfunDTaMM6syrp4oYG5kf9ZL1szFrG",
  "key26": "39WaT6aTEAWKq61vPu6Erq4jgReu2xea8tYCMsacCo5k2zMxxM2NgpxmWFPFva1yuhb4CyJrfqXDjby528ZwNxhZ",
  "key27": "3vd1FQkoe6wxNoXqMEXGQqBExwMvM3EvisBRHeYtWeHgVGGQkBnJokn1dLoKN5ogsrwJyzs4dqZrTQawHxjqZWu8",
  "key28": "368TPVSVoaS5hSN2sBgsaDPE7RQobEtkzQzja2HfQRX7P2VCnc1cnVbAeFtSYgbL55aDoTCRnqGMD4XTqQMQWrdc",
  "key29": "62Cx8oLRTkMN1YT7avvmbMWcVSX1w7BeJzmbBxNaHLTZyPqNJxWRFLsyyHr9VM2G1wwfmFMYGAzdtfsjyV5oXUBc"
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
