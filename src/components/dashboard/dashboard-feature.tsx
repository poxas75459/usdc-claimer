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
    "8rybhbnsaCoi2nrPZTRM3RGMfvWH4uZDoSVCTJGN9ZQY7R6dtbKu2UJh5Cr6SAAjyaXXdpsLDbnCydiBy3Cb2EP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sihJmv4Qq8rKVCEXmRkouo6L77RAZsxCp9X1TfG2PcDqbgpSNLgvftg8zQPrYvA63ANySxK2mdyAtw7wM4eWxEd",
  "key1": "3n1QRyDZrgTCiunopaj2a2QPVXqtD6LfykTVofTtPMRgEpZZyFX6NnijeuWRnQx31TbytFmhzuVuZ9yk6fnGiQab",
  "key2": "3CkAoDUHVyjUn62BHMuduDimJGrLMztkrC5UPQzknRCCJEL3bydiGbCbzcMyt7yLKBJ94y2HXyCbSoG9c6akdLr8",
  "key3": "4kbcTi3CDhKPRdECgd55dZ2LhM1t4zCP5uSsowkRd24HzH1uNr6EjHLoJt4PYuKFxPWVJFD4oGifgAHcofPrpdZc",
  "key4": "xE98aCzC6ZXhY8PRHWv9yFFqPng59f8E1er2wCuaH6Vi5vja22csdopc2mjaX6YSRjppQxS2urKcZnYfB9AnQK2",
  "key5": "4ztfagvGk5qfni1hvcVdJ6psswE5ZgwCPqQrR5fGChpCVi8n227gkhFyEvxhjoc9voGRsNR2kF64dP7sLe5Gy8Ds",
  "key6": "3C7n7GJS6PJ6ApepNG75rL9PUJk63UJNrNr6eCfwtaLqV9UQgecNg7tXZRtCpNNHNNnzaKYcGVxfGSR6KABX975",
  "key7": "36r9o83FLa2WAWAjkjGmsgqCCV5KHYTpoc4DKubAerroXjJVu5MMBm2JyXTbWBaXr3pFcftr8eKSDQZd1ESQFjbS",
  "key8": "4nXudgAkmeBLxQsMHKtVtSW7aSxFLNyv1nQXiCrLmG9oeQ4f878zJuF1Nm5gXi1basFkgkUXP9vS4L14EtKL2vEg",
  "key9": "5nMM1DQED5FXuZbQ4qHZdtyX4zhwu2gvWRRBexrH585dzbhJ4vnR5eXyWXZCDZboXyUsyCWWGbHhy8S4iMAVGWGw",
  "key10": "43BKGhHWNcTd31ij7q7d7Ehh7zk7k7BjUNUthZ4PmFNPaoEmrQNsjXkg43epDnKpt1vPZi4myZzntYHJfX83T56d",
  "key11": "34a6BQzBJKV8y1NzpKr2SrFvF1PFAsZNdwQnRDy5JbRBoYPAHo3q3jJ5yNjEEPbLw1To257sdCFdwHG6tC3iisBm",
  "key12": "2LJcvvJKHqyE72KeZyFPbhpjSmUw2R5kfpA4u448xyoqzGrvaGY3o8bcc4HddwBNsJJg6gsMDHx73tMgC2Qce5a7",
  "key13": "4gpx7LWQcBz22QvfjG5xYqc8otrWai2DuC9BSeH7XirDorQ7TgUTgZajynEQxCYxPKgZN6kqva4B9JVhSJGgx3gS",
  "key14": "4SWgvVRFSMGv1FQdB1dDhdPhqMfYH4US1C7d4TazZaHkSDLPM3erHNzAnWJRgmzGL3gdqKUpW8MQP9XaQXKvXaNv",
  "key15": "2UBdbT1vUtSoTdqse1ukNZvpMXsZeHrnmecn1Z4v3PjPsVV7R99XNUNjsMmaS8wXT6g375ziKtevxJgzsW8Q5Fhc",
  "key16": "FsrXPgta8DVhhnMribwxEcdDmzzryemTprV7AdAsdD42YgRHMEcF9SEMBiXGqU9otEKYGmbEg37hzPcwnz7MsVU",
  "key17": "3C4q8XKDcGfgXkyeYwCfn75iVEZMAmyiSxQQK4cWZPU7C6KCqYgRVpKL31SRE5gRaqHXJbLbwEJSbbJDqYgGR1Qu",
  "key18": "5oTE8UcJd2j2PnikPyxpcDvUYUynEi2s6mJZfQD7bTjfYwhqXxEtf9Xf21iiJM8U7p7WcokTSP1aHsZCPgwQDHY8",
  "key19": "3JKtKhJQFzdoSRnLHiJVBaecRnMiuhZefTmFhZc7sXLdPp15M3vw5fm3Yb14MfU6WYFmtHih2rk5orEoyajYWUpT",
  "key20": "3iWkxP9Jg6A2mwmuntsrqTWZBdVWsqP8p7kzxWkppfrNB3eJK5AJBXgRBFGV6fFwTn6GDhXeySzNtA79AjCcD6CZ",
  "key21": "4LcTNCRDR2J19yZozoGbNAFXZyUzT22BEY4nuZxLjf4AibtVZ8vyFnX3Bk3fT5a8n5FVGxShgDTvV4zg5iwtT7YX",
  "key22": "2cnvzkT12uE4TJiKJVx7fTJniXSykDsyL8poCrAnYZsuFNRkgXB75VHtP3HCHmtoaw8GUSfUeiKkvAQNYZdtAakS",
  "key23": "2XwwaDE1DRM5dAwGWq1sxYp7NAgk91NcG1CyxERP5wL1pNrA1mre58iiaemXmYFQxKn9fjenPpu8BiqnguFdZ5Nj",
  "key24": "668EC92sncJwbycWNdFtcHxJjjV38a99mqHoSqVLBL5ajpBAfvmVZNDqXamJuvn6EoXJqMMST1DYxuud4PRbfAKt"
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
