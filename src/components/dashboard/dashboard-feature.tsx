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
    "2f5ZEPq9HM7cB8juxb2QJ1FKB4zHa1JucPkzebWBrjgWTzRsoYsJCHTboPTt9BpHWFTxmKyyM7TqQKg3UvU7qqnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYeUgb64GF5qSY7JDhRD4mFMcJMaxkgrZLuGvfJBdHwXMF96g7FP2oJ7upfFDiTyjHzpguQug8RhDtQe5338Tmt",
  "key1": "3QLhKppcYRMhoR6uHHnTbqLAEZUkFpqRtzCFyyRjuhP5gWxhKCCKcY2ednE5pC5Y3ho5NbH9MNAJ8xrWMijTE876",
  "key2": "2ZgQDBFmXxqnnuTsYnVdJFFxgB12aHBAkws2cYz2WiVFf98z1kZxYsxXYDsTRZUbYiS1zhAPftx5njUSXUa49LdW",
  "key3": "39Du5D7NzufD2dmqPLohyzmhR7k5mytxAUyGtDqHhAxFnZPU1QBLfweyDCgFLuu3LDpGFByKd32GWCfi7Wsx4zK4",
  "key4": "4P5efCkmZtoVHQd3H33AYRnJgLtY5q6iYp8ht4nx4Qh1np5KQSH6jag67oh2g71BEEEDcGtLaBvoypD37tnenZc2",
  "key5": "5gYHdcktPqzoqXFs4puAKLyr2uuJQxKHz9eMqqWyEsHqhpkNec4NMJ7UBH7ntG5jhHe94o16h6VgKC9ph5To9JeW",
  "key6": "2xZQTiKSb3rnJhrRw7ZxvvXLsyPL5GSZ3yweWdmmGwqfXp4LshfwCCELe1xbJmsS9EazmEXukJkKvrZg93fDbzqR",
  "key7": "3HowcHQMf2YM1dg8KerRb2r58YjVnzmE2rR8ou6PwxqFwY3CwDD12S8mrLCwVn1THUyJaN3dQWXvsrYpkvyr8kTi",
  "key8": "54xuVurgE6Ud2K4kW6KdeaNTFtGUWxaRRt9zHa3CVi5CbRb25bKi4RptduTg3cpUKfd5rJRchZ9FtCiWMGgJDdrp",
  "key9": "3mxBRM9WE1bUTcC8sJftev69dMsyXqECRs8FpCfSWmuvDhNh7uuKEzmpRvnD2jHoJy1X7A5PxZncRkT9AzEj8jTZ",
  "key10": "5zqWhGBUsXVnr8RUcNbbJPh6VUchVPYEEK6UrLdbkRn82TApKiZKPGwEEyC4oX9H17Az3qQbVTMDwgTHxX2Eboz9",
  "key11": "38Wzs5XSp4QSfffM4vZSB31EmucSJAyvASfdusjAoVmegHYECTSxwhwve5epKgkojtUyGyeTJb2Yg222tDyC3hEw",
  "key12": "22181mQXt1a16FGLnoGq5poK2Y9fjhwqwfggfFiFHTtu5LP3eqCarvCEf3CxEUBj67zjinXB3nwacBunsfP54L5T",
  "key13": "59ayhR41CrHgprZcdwvieANJQT7aWwYz4Y7h4nbeyQm2GUm2PvY646XZeZCLgQjAqhAkT9BdJ2Er936MKzLFDw1P",
  "key14": "3aVVv8uNiQr5uF3GeVSbCbH1fXyJvf2MVh2tPL3BD6Wict171WqbcxzyFugdiLKjdKNZ9Twz6pw6T2Msm6KW6qB9",
  "key15": "5LpXbKAGFDDwoakzWfKZKqzKsu7V678mYpJ5gFodpTis8E4RjioK5agJfSMdqwhDPEeUWQ5XBMnRvVz4LHiJN6SB",
  "key16": "33REiBSRA8mmKZLMqjN9oVrxkZwZJVXeAsCAQfQzsJ51dgp8S25JJVjS8L59DpXVo2HAPEz4myNv93bcjqfqTxnR",
  "key17": "5kfLpL3SvxUSftRYgUkqSbRKzaT961Jp8X8HogWPFvNGks6DUG54kExXeSBuJiqfPBgZZUZ6wexuKQJqnqzMvbUn",
  "key18": "J6bhpuTj2UES735z7pC3ExpqScndDrPYndR2hdFNwHY993jnjv4RuN5zHPbDZ5HuxcC5u3JSY8GWiHpQ6xuqFmV",
  "key19": "42LSzMRo5TFHK9BbcLrvT44wNJ8CYSavgkymxNU6Eb3B3yL9dKMu1kSzvvaMNsnKv2UgAVHt9QRi7PQCSUHAyrR3",
  "key20": "4DwwQ4YAsFLpBYp7Y1cQ9xD31eKgW7rv9QMSVNiVZCGYugwUghNUuy6NnLitehfiLN5BH3HEAvzvrXbmW8fCDzuY",
  "key21": "3ApKai7QqaYSoaUMHrr3krzVCEgxLNE6j1ciov7pGLagdF1eNa1Kg161dnZKc63UjXNJpMaX2dbUAaMorw8ZtDqA",
  "key22": "5ehwFahfp31hZEqpYGEvry9LyE8SPXUkn72bW34u8cVkRU3K4wPNL8BYMvahbGoJ4Q36yGh4wi6j77oQansqK5SB",
  "key23": "4qZ8ifVMkFAMJ7DM6e2rLfzfte4svRceJbiMUaohKmgURyyW9pQdgr6fhuw11uRYyJsWhkeYjg7v6AM8Kscz6AV7",
  "key24": "33TnU3v5x258NXj3jcLTTuvJnKo7mE4JK694ZunFpEGa9iLH2WqVmUJGiS4T5vgmJit9KQ6q1i7Rdpc8bNcAH6jF",
  "key25": "2F25yL4Sy85oBHaDCT58kaDt56GVU2GBuHEhGz94FWsPFWe57jBv3ezJvpci1ioke3CbYHg55TaSNYpm1xHe2byY",
  "key26": "5TgjR8c1LE7XLjxo233AAYyqLvtscU5BqApF8HrB7cykkB9Z9byRxqjhFDFVhHFkMd3HGt3xxMjQmDSxtQW7wQDq",
  "key27": "2uiDTY6GeqaAPRLNxifwvzqkgsbTkHqzDC5kF3GKrt9xCkQckwvcUPK8sP8fATwncQoq7U8ympVdbMKerGmENEnR",
  "key28": "28NK6yfqWLZ5wdTxrkaz5ACnM9wMqJJPrDbWEQrNQBpeUPEd6skaTSEf248JvAfG6c1S2wmEU7rPKvt6A1pvNWmZ",
  "key29": "sXo9BZRrBbHZYPqY7bnLC35P8LL61UGbv3mZrYXBdzX5W3YSgrLGexeaK9bycMp34Uz2Bp2Twg9ogBPNnsEe9vF",
  "key30": "54kX6u55NU7iNcaGtneHMwhrwsHqCUMhHc3V3vhhj32KjTFwrygDzN7vLR4pEAeoNGA86RuAPbWjJvUc1tMHYjG6",
  "key31": "2Fy27kw89E13KTfqcsQWLaJbrJ74df8N6mHP3NKr4JtKKimuRHYCCncUiArBoC4WifEXZuu4aiW1Li2nz8q7raRv",
  "key32": "5QJzz3kZkkKRHk9gWJ5NusiwjUYsk6CuHzT9tUSunxNY4JD4T2NifnoyMPgZ76irheLNZgn8xkCAq2uV7Kq5jTkC",
  "key33": "5AUiZwFDzQpCxybUjZHUVN5rnoXtvzD8F9EHKjwDzbGC68HAdP2N2eZHp1L8Sx1hE9gwzZNFM3cV9Eh9c5Kqw5xo",
  "key34": "2wKMoaSNuMdzE7Kf89sCVaydBkDEFE218UynXGq5kgWtStpSshdNfgkQGPR7dzffnfyhMuWmF8bZLddxynumLnx6",
  "key35": "4TbUeGb1PUEFxwpmMQXoYv29CLDTsvRVTqcR5FpUJyp383W4FXQ78LpnQxNJsWJwAD5dZhXnKMkA5LLs5p8fwmF9"
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
