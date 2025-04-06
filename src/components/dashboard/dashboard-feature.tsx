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
    "2wXPZkCmGbF5r6dvkxBRFthgV2pXjS6spfgZ2bzWcqkJ3MvJRGFBp6uttwhwYs7J1xRgwFVLVsDVM3u1p55YUyEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n3snNo8n2mKwTnnwv46JwMVC9zjMqJbuWfWeo84dVP8SRTjG16ChFoP3rih4HPB79P2mVd47NMDQ6XX4PCKULeK",
  "key1": "2ZNKfaHXavXaF15UN4Bcdmgqy6nSXVyBC8ytp3a2WVyLjBNaUzJapQEBSa8L69JVDYHkT8La9mAMz2AgdPLxaczw",
  "key2": "niJPfTERJfApEkU2AiZqUhWXdEzh18rizHBdEjqPggeXNgb9rAFNAJN3vGWVuFsBuK6MYQiXhnidiszjV4RnWja",
  "key3": "dmKCHFP5PeBKCiTzRn67h65R667xhWgEnRy8YSCVtcsw1mf4gmAexaD7Z7HKzbNEThcK56GnHdrffj99qNwVLyD",
  "key4": "2ssTrV7Xjrhut2i4m51kP7U1BWq1opneJ8vuD1NeL4kCquWsXEhwoRvVDDEudPRBS7C2fudEhedhKZMbx4YnAmst",
  "key5": "4HrZuyx6rKF13MjE9Sm2N9Y7sbRCdVAaScWSAwBq7XW7ESQYcbBX1btL94SJEqEce8xN9VHtyndYWPr9ygELCExQ",
  "key6": "5fsCpfB9UKwvhR1DwVYSTZqBhsi6Fya7Yi2xQP4e7PFt41HTg6mtCcwQkfHQnejQ9aZzFw1BmpTVKhf6GNacVPat",
  "key7": "5V17g2A5nJkpTAkfqdc7ZhrBPzCbQfGwwyuvoQiJNZqogkNErZ2MCV3Xf63Nr5Dbhi3icFRbHZ8CXXyELEZ3Tbmx",
  "key8": "LC6HjU1ApUDsLYdY3hz4j1vUc11osgR4MkpGEBSwxsuKWc4RmaUibEtzLahv9W1jGYrjof89wnhkWrwLvQyePUN",
  "key9": "4M2bwfzYyjSEL6V5WNvCigAqgTNcwj8Cm6CesV3HFqYNPHAm4KsRd5wuZ4PMcPVVctSKMR8fxwgVgV8SnVdf9KmP",
  "key10": "4Ev3Vm1crfp1Ahf7VdBLUQH7taf2N9Sznt3NsQ22qqmMTms7sfp5Nrf3BtB3YJ4VbTFB9Nm5f9xC7smhpqK83zAo",
  "key11": "5zWhhniDykK7VkXyegZLJZS1qiP4n9H7oa7nYoJfdzSU78gaVrNFwusXxix9zYACuQGJtMHKMpZGqzmT8MCBxyhd",
  "key12": "3h657qJbtDHvUHwHaU33exbkSC2pxi4aeMhgVXmhhGhRBzAkPkMjvPoR4XZae9zLWzX5PyGfun3jKy7cEjnv1QEL",
  "key13": "3UvxGGLjP3Zmxm2VCBbm6e2KjhspbnRhwK7Y35EbVe4q34TtyNsnQ1dARUjkGSxj2SoKsdqxeNmTPpY2nsdkzczy",
  "key14": "4UHeVJT6CLJn7HK3mGNrmGznXLg3K63NbkxGHM6xWUSPSACW7FHECu3rnJqwDKKTpeTBCb1kGRp7WhX6JChNWLKf",
  "key15": "3LrKvoXF4MF3HTxBCnRMTUXWE67VE5FH8rh4mREN7UsooMBsR8tb42yyDnsMBQkQW2rZNLxHNrpSpFx12o2qte12",
  "key16": "fQE5Yeg47deMu3TPK4UVQB7zLrdMAV1rvqvUrtHN9vVw4z75EgvoLk1AnmjaMnTcjZ6siSxpsqmfNS8hAuQ5L5f",
  "key17": "5RwLz6abmHqAy9a8DrAJxZG3WCRJGGUXuTMCeSvH42uFBKSHK8zhPKuireKnVJYZndNNjx769Wakgz11JtdNVWq2",
  "key18": "4UXMJAXfh9y3m8squKMfg7eTxFV4SzdneEWpVqdvx38XhCfoQLhMJnm3ajUMcdTQUHmsdcqf2FU44g937m47f7ZJ",
  "key19": "5kLu5DMrTMvCiN7pnLQ4JUAnEG2AKyy6tfV9H4jaj1YrxZd2ar3pbCCPxsmkz37ZJVcPxuqJTKMRK1mwSkEkpQFM",
  "key20": "63ftSSMrsAaEdSraJ9mq39UTKQrPQvQYKSCT3qabdoije5nERTaYKD4VCTmrUCewdEvso6oyXn4g5UbfLguKSvfz",
  "key21": "2AS8Fadv7pDBFLWcD66DUnVjKKGRAiu7SkSxyFNWMuhQCjhYW6i2bo3Zqm4rctUL62YfURMrJ5Z5XZnhUx28sSag",
  "key22": "43b997p9A7pTGFJ5PVAKZCngitmmCM749r8WVCwTXyRJEYmSBKsBAnBmMg9KVAXPMd4s3pJ4g3J4vns5YwA3LSGD",
  "key23": "3v1ZdjDA2EDGcdJLHoQnPuMokBJo6StVdf9FtKXPjwWgS9msWJ6ez6zdeHETZgw5gxSG3UeXijSPrZvydM8ev6Ni",
  "key24": "65Fqz4J1eDvaYGhU4mZqWcVDwczvkbpwTKYRLFGvBx3mMamtYdGX7HbvdB8wvRBpis3EDeJ8wB6vehSnQJzC3ALY",
  "key25": "XmbSyHZeRTmCwpr6VyXnHmKjF3xoMm51mUCQ2MYzMpccFJYd8xL2DtzeH48i57TM4jq8MTMDbGNp6rD8zD5tZut",
  "key26": "4YdK9PpjjAyTWYLREz4tmvRR7b1MkUc3XsMskRA4eowgcfo1PPPNJFPVvkrBz4wsCzW8Qi6HeT7N3dK3WDhiNwTc",
  "key27": "5Bjygb8TgLUsz8cVpTS5HZQ6ngCRcQ5Go2GvZNCYT94CfLYo3DEPt3V3wRTJTLttpuLGKTxwj2GDAmNg6YjZbggh",
  "key28": "5Bq8CRWEENDeHxXsCuEBLC2PgeSF4GaV7tmGH85GrUyXJzJnHYGUZ3thhmn5XVkgd9QKGfMetHwN73EMzVdxH31h",
  "key29": "67GjH5enhzw91cSLcSAD2Bj37T3CDeA523QWngpkQ2unx36dnrNDsfDoDJoifgdE2CmDjAp1jE3MwBS9NfyXWfhk",
  "key30": "QMW5NH4kKDWFgKUX7yLrB4fhP5fykWgG7EpM4WsrCpFm69XLwoYccNEGZsgMNhEGjPLBKRZGRdDcSAwYXvG64qq"
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
