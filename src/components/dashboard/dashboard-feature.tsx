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
    "4sYfmfcm3DKTqDSvnGUAYSoA4zCVx6Ccn7XoJeTmXbin3VMocj7xfz4jmBTmTT3MucphUAc4xc6fj6fMRpvniQ81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6EArfgkZjQhs2wzap6D2fi12AgpcbEzyyxNBJMhCkJmbAmvBSwhXg2B79c5xdjerQs348FM7XyTSgEHULi4wwB",
  "key1": "tXNbPDTV6H6uJeUwknQzQiEX1Q1qg28YtBLEiNwKy46n1hXzsmKCSHfEBF7KqvKGXoDR9dMJh8d1zYSXL2NJELn",
  "key2": "2xdFurtEZGDKCZdsahqNtMBBrnL9GaYnezgbRTnka2QPpiPUHF84WehJzpQcm1NNHpQTAVo6qYoejBKXvYZeZrPW",
  "key3": "2ro9UD9QyVQ1XLkTurJqBxCXvyb4pJByTviPk86nZg6R5GFEgRxyxyJTHTuRHMiPLKhnepPndBw3xKr9E6tXaxPE",
  "key4": "2HQEmNwTHhp9vhe3Yam7FJ2gzteQyGUuw1g1fPin6V85LFtxTnEYfPFC3oU7TzXSXUkJhxFaAv1koknvYhXm3Jj4",
  "key5": "24tqs1PeBenVVds5JP74q4ZQbbVBYspd4yLTiEBYvmoGNYvK9moYhCN9utjefbApsga2F5mMrYdsR7K7mZm4wdKX",
  "key6": "2ja6dkDQwNbvTJ657w66GZW39nRCiEGMmWaK9eHX6LwUQRD84Hyyuh9eVAZcncdQLNFBySritfKuR8ryW3wnYgqm",
  "key7": "2iy3M1fC3vfb7nnKUB87ahi4rBqaFKJg87toj1tMMWVrsTokKAZS5dXydBHgCjabJ5XLfu3qZCAkEQMR7kNnJmZN",
  "key8": "Z55BC9nBjHN64ndr5yPx18zdToau8bUmFbuoSTebyQ1GWprfJhbRLmesFm4WCCyfj3MCTUWQKwx5L5YLv93RXXs",
  "key9": "299ymc4gEKYHq8T4r8DfPaR7WnprNUEMt38myyttmZhUU2aj9QC8by6r8cx2JVHZ7A9YCH8HJbyoXcz6Bp34g6rC",
  "key10": "4EX5LMSUiZCYWDYAq5uHNNn4Dq4DZbxXj8RacQq8v3gR6q12jKcT442kQqyce59P5uPPmUT6N6btX5HGG2KbUEdS",
  "key11": "5XMV1pheKYb2aDxPV5cbNKATvS3KEJ7rrSe5rZ33WN98hVLEyVJrao53vSt7TScF9dbBi2Feop45btNkzQ1YLipE",
  "key12": "58FZMcrPjxjQq1gEEDKXtvSwPZMWUHsRe2aA1YWt6168aSe1jcWnSZkanKYP6N6K6Y4LDJqhPuUQMboakCiYTjDR",
  "key13": "4K9cgaMDBEmqzR5T8LKhz84B171JBzXC3cPa98oUYYfhkyBWLtDPgjLyuTZnJbS7s1kueBXaeQBUtoDi6iVeYjr",
  "key14": "2f7sT2hMx48yhe3ckDdGuZ25uy6vepGdyngbo3rXdQMLKQAmXfYzMXy4Qb59zhRJNdDdFjJwaxb1cEBb5iV9LFeK",
  "key15": "cHTxrMuqhRcdLcaz4KmMmLN5zsAXtnxD2dPXoqxBoXZodALknpr3vMBR4FQekdsN5Sq1P7m4Bv2vDKgjoMsiM1y",
  "key16": "4R1Pd1Gb3hLu8SmfjkXUkNRDXGWW3rEDJHQh1mjg5qFzRzUCFjjhj27YNpNze8pSDtiFxZTxTt8C5UsZgYokg3pp",
  "key17": "xCvaaL1tzPm3Enj2GhCmNVyagzbQn7ZbuyCK54zeusWEYNn3EFQw8FuR4FG2rEhJHDG9BzrYWC37kqvUZmgwVDD",
  "key18": "4HKfWSWjAwUHzBahKHUPoAVsVP1X8EjnnZX2ZoEJeJgMCS7c1jyrapPZQ8KwL5HqZmyNJoYu4AzPmCHJvzpYxevb",
  "key19": "5a7DBcJL1u3UF4ubRY9fA63UHQ23z3nNNcYUJhUVMvG41VMEie5b3vyCATv41Zm7PhS494zjhhWuovbQsgir81Rd",
  "key20": "39g68JEn6Xidc5s41hxjsCoCnzFi7hSq5HvkxNH1B3C5C8r3qMqqiwkh2UkNzVJ8TDKXDfiSuxwFdMDyaVE6Kzqp",
  "key21": "4kn7PGj7N4ZaP8ci1z8E93X44EQNyyHXd7xtuZkHqPaShjR5io1UsRd1xKFagSeNQUFeKHMXvdn8RyjRNLEyR1po",
  "key22": "33Y62AnJrVbCV4SPkDMaMM8AAGMp89Z2XxxWQxUHHFXp2C6wCrXPF2oRVhHbTftECSCdreBquhhFefmy2jMbq57u",
  "key23": "5dPjmEp8fVcNfytByohnbgB5qk2YQD5UTekca5BnnjvMswyiZwc3nxSwPa5i5KaeqWN5ScWmQA6Sms2H1peb6u3D",
  "key24": "46uV9F7qWqR36oyosQyVzruBmNdRAAuLM64Dw4ExVZRu2BhkbU2hoJS2iQ1TnjjgCFQsMQTWqQ9SwcK4H31Bntxs",
  "key25": "662MnPPyWfR5dkSp8WJ8n7NG83SXbSuLzvy6gCTsyhCwH5RB2hNvHRpvE1P1s6N5wmmn6c7SBwrvvH3mTzxNWftR",
  "key26": "4mTPzxDaoeXtGiL3K7hFKFRAeCq1rVCDQXTr5mLftojBBmLP7K6sx1ycAmnAVqmppUqgizvDdQzo2NU1LB6DykZm",
  "key27": "5My8FgLG8Hov3M6XcCce5FFwghizD6Ed8pbimoQXNu54h15upUZ2DXVMHAVBjyeuB5ZKnaQ3wMEiy5h6obPBoNDg",
  "key28": "AJAEqURV3P6XQSvqQ8zubJTQANYWoeUgDCkh6w4AmEhGY4CsSd7kSUGbLLPnAzUPc2cmCiNPEMUfX8uc9ceD993",
  "key29": "QgnxaiaB2r5SXXHtxpzmV84XW7MshNwemdQtj6FmbfYRZvHbchKG8B3hX42ZzUKgceGtSJDVQ9BXdQTxJnC2eJV",
  "key30": "4ChsZQYRqhc2MChNv8Pkiyf9XsNnFXMzzttUQ64GwiuJ3HTxjEQ8u8BJF8J849hbUo4GPyUvijh3NaxcK6FR6eZR"
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
