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
    "2CxbbF77Bzj6EgTEStkCh9SpguRzSnsX7aYBEgBsV34rAnLbRyhgXprVz3CutGsaRt9t469G94fcYe2yMB3nnDAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTyqEp51rSTVNHw8U5aA9tTrbxVshhSXhtVcZBYZTEKiWgjnn9uXyJkvB9t4C5X8hzPZMsesSnoeHZCyEknbjMi",
  "key1": "4mXcvfeB74FaxyoKLx2WCAjTj3ji4VKsNeQbpnvkh2KQSkDcM1FS3rp7mjDo5Xf4AP4HtQ3Nuay8uF9rd5yKJs5Q",
  "key2": "339APhQVW7NThFanWu8NWAXAgCmagE8m1hPdpbQaHMLcBB1YmjHyyLzZNBMmwEZpYxAfqbcFCQZ5TUr5P7qk1X67",
  "key3": "smLtXi2aQLGb3oByijovFE566W9RVC59xTAuK6rTJq4A2yebcZk6NuNTarMVW22YBqKBBoBiymkz81tnVsc3aqT",
  "key4": "3PA6rH8Zxj1gdWvv7Ub4WARbJLHESZgXtKgybpqaREJBNAUwaycFPsQZKdHb9JjGREgBbRhitLZsfcZtaftLYsxT",
  "key5": "bbayKTZpsM9yziktJ994nDeScifFzuR3GsbfnVJGLZasHUoqvS4xQWZYKifnPZ7Doh63DpVCtrAtjij7Hnr1Nh1",
  "key6": "4od9pS1n4LT2VBbb7rhq1tP9X3rUZV9rdpFn8wkJi9LZxzXpZGQKUFiVY1jFEQKHwN11JHr5CCWDfrxbutRrKdjG",
  "key7": "5MQEJK22LgjRtVeT9aYqGPAXDUztLt42kKTJ4kYEPD9gg1ztxa16wc5qMe36xvQva2rKSpqJ2vZGkNj4y9YZipLQ",
  "key8": "2GjL3XfgqMParra664omnQrhoV4NS9a1sn9wi9yXsrA1hUrHpqeNYm4LiuaWBjcSpK2JW7nhNgj3PAbTeZWBtDFb",
  "key9": "3TRnCbRbLRDDSdvCpjruyQpskKAUuFKrStXQtYnR8wAQ5tXzQt2ebw5rUvrHkMCLQM9T3mnKZasEWJDvYqkxggpP",
  "key10": "2fTMQREuyBMoncttEvu2UwwP2kjbabRQS5GcVLgGPNX5NhRTvR7uiQvSKo9SiwX7yo5pszHG165MsKLoUKWPJkLu",
  "key11": "4x47ENyrFjb6isQCJ6B2vdGjzzNnJF23VwDxoMyNA2P16Ftc9PUsL94KW6uKmbqpKx7yavoCMXbQcU1V5dccK5mG",
  "key12": "6i2aPNwXDeV4PUwwU53wJpSDCRCTt7K4jzqL5YTaN4gDmjrmpGQ5ZRxuc7HL8Q4CcNZ84Xt7v8Cc9EPbAMwNTsY",
  "key13": "AgqztKUzsAA1phdaUVrLMGUNsR7EVLLnrVT6FEmJTgvKGScDRgZx4SzWSZr51FkYdNw16WUGj1ChETyiwVgoEzj",
  "key14": "39NgbY3TKvkowbQL2bXp6KoM4qGkvS6b7nNUUugaXNrhXKQA5Ptv6LCQgbshDAKuSC7zBkxvf3Hi1GQu2k2r24N8",
  "key15": "3dyq2mGMRMvtddHQzhmQvcjiKkMmGPpScBf9GFfbe1hZtAEcAMvudgFqWYFjPFdYGmgKAi7zp4R8MWkD518yZC8p",
  "key16": "9crfMpGQDg9zbvj4oADUJqdBVnczX7UkVNiuJLpgzDXLfp4aCh1pGD1JjaYzc6P8ow22CTxtvnEvnB4G3D4UAhN",
  "key17": "4a8LiWMpLvqm6x1B6skRfUZDrzMWC6g6KB5iKJ5YZw9bE5fFDp4kf651KABjMBiAUxbwjDqD6Htzp1uTDNnsJTDy",
  "key18": "3C2WvWmHscT2xVyBMtcAnF1VZ26PRUfhBaCJfCnjaaWdJjDzes4PTbhjek76chMN9PV3HvdwUvUuy4PuQX7tFUft",
  "key19": "4S1wWKjMNE8n6jbg4BcGF4Zr7iPEafh4GYQ7nnBM6uwP6M3mMaHWhmNfxFhajtQTPA53NDT9UMu1XwZjXH6U3M1z",
  "key20": "j3XyVcKxLXEmRS9fHTn2BkQYqmcNrJF71WHVe4Cfi6qdX395kiCuePJgARtBDdVFEKPEFitNZjC3UnyViwkyWC5",
  "key21": "4VkuA2whvtupGHp2i8Af3r8UP3Wt9DtVvF39i4GouByTkhKLEWchJzCL5CvgcCASEHTBJhEYguRkWFKVPYWs1Rs4",
  "key22": "2w6tUoe2HRCCeskDHDT2L4pKPya3sWx1esJYpy1d75mdLNcycXNGt4qTE1VLsFSQQ58beZRQiLuxWsiVngiJJPto",
  "key23": "3QZgokkVg49JQeZ4AFLKGdFHWNEVrNi24Qgp1XqPcWDdxXEbB7tP9tyrQfyVq7cHXTSahwWu7KNG2fzEv76fHf9C",
  "key24": "5KJA5An1FfEtbLbSoYDHNF86kuD38kdFbRHcS6HZBHLEL1cGK9G2M3kQbGo2zTbAynhLHCeoStn4X4zP6BzaskfE",
  "key25": "JX9TcWJVEREyU44wmc7Ero1gqBiT9f3ahY3cCcvpj646pjtLfPEHwxdfZKqGnQmiu8RDqoZ7RDCXof5GZH3mzhG",
  "key26": "5k2uMGRe4LTPVWqRnsUJb6SDvkN5NcCmhUVEefbxFjzvrGnTTs8vSbrxUBwWAwnZWF5n5GvmeATnkBZpmUfT9Lwe",
  "key27": "2fApe2ubzEybqEsufJ8ixzgfwU8MeuAsMYYm5LzQ1YgfRimvvsHdJbHVBYB5sZbSjBLFuE6jQZ82SeqmZyjoFFTi",
  "key28": "3yfsbJwXa2aisfBvu8Spx14R75VDercJS5nkWAe6URZ9pcLd7fivzr3idnrB7kCrub9mpTrL7ZErSkngZiu16jEF",
  "key29": "48aEr9EQkt8erbmLJ1zuFUYmU7SLyhyUbkNtDvZwaEY8zUfp3hP6reSXW8vbx7rS1CpBExJgGtbUe5QSFyAHDDB3",
  "key30": "3z6bKptZuGnVAocR6emrXqU9uJwWm7Lv47mQieB1q2Q7yNpbP3437KGaRoKeEqVNEekTY4TjQGj4DCXoRfs7C9Yh"
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
