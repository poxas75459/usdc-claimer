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
    "3LnNuUSg55BCtT1fSYSD5TzJZon86BmGTC6FVv42gJWTaWv8sBdd4427xEC4ySSCAUEPmLGpSrfbqPYWQvTVo6Y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pb7qaG3AzoTE2qo5xBJ2RmqLxc1VBLikqCwRCutmLoDKj4nNqRa4uWakGGy7b6AQVLGYxvGoz8kYRXS8YboAkZ3",
  "key1": "44CuNxydjp7Ktbtxgy4g8tKGh4iyebksBzTXLMvg4pdyuAFD74GhyiNVwHwKMR3xh6gzLfoK6adq8vGb4rp9rvYh",
  "key2": "51URMtGDCchyqeoM6Pq1abmsemueYTxxgBRp7epkdTgKXjMMgnna4QmjE4D3p6RycfZ16YxMt1oeuuZ9zC5X13Wm",
  "key3": "9zWdsomiJXLhne6ys5sueN9H6Yedu2UJSNvdtmGtzUBw4Myw1r9Xrj8EvymQ81b4ywXxe5VA6NVsgbqU9JCNdVF",
  "key4": "2LYAJ1rJ5wRUHYtEQ7nHgebyA5QZENp5oqjcEtazphMUzVrppM9a9fHFQZpUmtEnGaC5ebSnTVRCnbikMvn5D7w3",
  "key5": "oWShjokr9vtSiyNkAp33r1aGtDFRq9pgL4mkNAbrs7qsVVJ6f5ybKrU1BY8ZBbqEDXxDPsTK8ZbYGYasCgypDxP",
  "key6": "A8o6jLB9CTXkFHFYdhWRku3zkRaqHmnG9si4Zb2Q6pGDE5UpHeZPA3CmT9PnU7biSCksF43rHA16V7H7crTvcUu",
  "key7": "2omE9f1yKvjZdwhNzonh6xn6ZaZVFbLrGBRtcYBya7nrp6h99Zcg1QjqjSN41QPss1ytwfDTMzrikPM3WSzQ5XMX",
  "key8": "1wL95nr7HYRaH5ZFs56HwZyHRLJZLU2ct92aFHU5goz4Ffo6MstTbour6goeWJfYtExZjFoPhFf2GEQSWMFgyaX",
  "key9": "5RQoppf35ofmezncRr7KjSzub4zpsZ8TcEPRtxYFYAkbBAZAMfCiHzhHPQ6qSvBEy2kZ5T2hNuTmLv2VnVac98wJ",
  "key10": "5x8ApEr4mwAz4bwacA1txsYFvGZjYbM2ULzfP9igjcrJ6k5v6L47qCDMn9FDhg2pHnAYDtDHgZSQDMELnkV79X8M",
  "key11": "3wqGhjpwXURnWFk1CbBeXPVZ4XG7jnok4nq7xq5jLLcP8yeqUiYv5FEoT3NCnKFco9Ez5aQ1nQfqX31XzbD5mKqM",
  "key12": "5Zk3qFq6wMKF8AnocJtir3g8T5q5mYn7mofqwTiphCJpbAcKeNjxigxEgG9WuQB1BYz6m1Ryr7Bpiac5WKjPV1zb",
  "key13": "4iCcowcfpxv36sgDhj43rvGepZSbAukKdGpr6BviArXCHCErXw17stj8tsbQiSrQqFc5YUw4x8ckJD6pe3PSwM5g",
  "key14": "ZWzyhhAVvkrBG4YyLNWnYdvujxy7NeDLPbVnHDHzRyRCJVTCDGRvdu3CA7DUAyeNZSP2EKSXfTHKyswAsXKrndc",
  "key15": "45iDQct2qZfef6tEgo6vszjSuV3hKL7D6H4nEqCWMcnpCnwM7QM2aVitzTTDTZAmCBMxjHEK4AJkP7QbVLr4XrsT",
  "key16": "5qBSDruCSNcLd6bRxfPUMaex636ZbyqG1VYj4VSuFwXivKs6LAdEomuReLnJNw2XTdUUtYtBVWLRKyZTp7tPDrS3",
  "key17": "249QjaZjJepCJcnhaMtJat3uF1awxbpLP9YcG5iqn3bCjPKRfeZLjw1hTEN7TTDPkXMpykFa8MxgJnD78r5fADNs",
  "key18": "36LNgSJdrpAWwmUkMMfE9ezYNrZwDwHQDDU9rSogD95eQW2xhiryzmBqsNqccLUWpVfhcBwuym6FBXgEVFjepcDe",
  "key19": "PLnbZJoPVspM7FSrj2LNhpert2LUzGTZTo3fnJeuVgjF3qghG1En4ph9hegjELzHLiETxfRXYojzZmy2mLRvZLA",
  "key20": "Crrh7UC3J9tJXd7zEVPAsMeCsSF9BYMNDgK3Zm5BSt9WHJrWBTactF2UKEYtLLsnPVXxctQ2qkj7PAYCxhG8Zwx",
  "key21": "shUZo4iUMQYaryDXaFHV9HhTRzh7h3UbQVjMirXco4f3S86VGiuazLpLVdYo7mtqpFMxh8byefrku9rnPgEqbRe",
  "key22": "4A6SW4jS7KEMC3jzjewwTpomBseJzoNeiowgiAn3JCZyqzM5XcYi7L5BsWTUWRWBQSsZcJ6X3ZBi2CdRmvDNBjsm",
  "key23": "2y3cnjzmLMJ1zHzbrGe7BjQHov6AqMh5gbjxVvC3xBmeGNVbyvXA6V2VoByVPfBCrGvicNzLhYeNtqpp7aY1zPLr",
  "key24": "47LTGQbDf5J1j8UEQVuzCLRs8kggDYXN8JiGuDrCWUEwfUFLsxtno3eJmR77nqXtFLqWFzsAnabNHaLYNtqueZr5",
  "key25": "2mDnA5ivU44KZhNsrDpQDVYVnXUeBL28XJ2ansVb4Efq3B5GLnYj1yBRGSSWjLhHMbxBMM98JeDWyQpxPibvLfN",
  "key26": "4jf61jRAQdFiKwRj1m25fWNMTauSWPrK9e1yx8wvi5E9d8KjB5J1SDTEmmXyajLHWpDFNiQCBfpTiimSKR6k2vbS"
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
