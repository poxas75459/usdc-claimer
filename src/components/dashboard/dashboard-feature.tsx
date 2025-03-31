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
    "4RGfubviF6bkimAQtupeDGd3qdRiqL1U9rt31pV5BsvizUZE4krLcpP7WwyZLfQDHUFc9T1xexcQaKE9btwXbcSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7UR5EFZ3chPUcNTwnVsBUswDjYCFuN4BLRiyamT2BMxaiYPdpZtvxALEx4FSrVKKtxQyN9a7poWRjGEaBrt8RJ",
  "key1": "2frczgxxHDdTRbP8cYHJdQNSvDWMU3BGpfH2JRZi1MrthHy8i6DAgv83HJBhCTBc4CVpNjkPLKf4tSntQZUgVzY1",
  "key2": "5M4EQziyHhrqBQHQi9hCY4ppX4uAD2wVk8HGJ4Qz6GNxFUY7Wvs21bJCF8NBYYr4aFnn2k5MB7LaNApWZsuJqv1C",
  "key3": "3my7dYxnuHhFWaLjkP6fbv7tjcTqoFTpPof8a7zxntKYSEm2GF1x5X41zLQky7Yyoc2ww16fwJFdcKexXzCUsJQV",
  "key4": "2ZUfjarqNTqdC9Zu8GCwKtGqjcdvbVoDUqwivPPSfKv79BNWrEHEzUyMfv3bSZLrBk552pYRfhA3yqpantp6ffbS",
  "key5": "5U2JZZfQV4JogpqtDCKo1DCyTi4p7FkM8aZzc4FXiP88mN8v3uwMFWrBtxcDmPRmLxhFb5sYG2Hba1B6HkB8oKtm",
  "key6": "2ttp5FocRQTReHDQRPQUBJfLhcNMsaHHkPMKKUKTpREmMKgVwcjFh8wxdJkB6CfPYzwzxUGiTp8ZTBnxgsSYBSqZ",
  "key7": "2RBiVjT9Ate2MPv1kBQDwQKLKbh2FrpqjNwPMJjQvL5NdqWpq6pcUjnPotGZUSdMsPNMDQvFg6V95K8aZMUj7H5G",
  "key8": "25v7TjNpoGhUyxLdYmEysvWfwWxQp27NERrAvrwyMrGYeEQpehMqKh2vo3n6wpcu3RNALfAPBbauxA7xqB9ACAmN",
  "key9": "4vkoj65dYDtjsAW4E81HXxCdJLWg4TaVzeGxTQ2ZnVrUx6kfjke2UGmTfgE6zZQoS2H9mF6zU8iEELkq8jwvZaR9",
  "key10": "4DWp7p1ZHsL1CiW7kp6xamFnghJir22SPZ72bZt84qdXWGHQWnyBiJicJRBmK1bYZt21QbjLnEUfSk6MHyMk2Uqz",
  "key11": "JrSHrPRZZH43PRiTCMDdcqkytHNBPK6aGgsEUZoCsAbFHWMShEgENKiHZFg8RrTgkQKr3PZyBb2qJaJgYUwufEG",
  "key12": "5DRPDt2kdFYuji8mECyBBhZNwxRi25B6vQSvKmWgG8Cvm52P2oZ7bwS7Gniokbp4GijYAW18uf5ACdZN4PgFWUH9",
  "key13": "64RGuLFTjLJnZAQ1whyMSRoqvvUYhFPfodAvNaoNvLsQ7bgcAqoFRGKdvF34AsB5WXyEqnBeSd99CQka14xUvRKm",
  "key14": "2cUPv29jT3Wq7fhGU2VtqS4TXaqpBA56QUQUVAjgwFSJ2nbGbbRZjioMfcDPiTjPGDXm69QnexYfnS6Jr2qicEmw",
  "key15": "sRCtZFeUvp94JtaGrtiVpLVnhWf3VZD2zT7MqPgXmhGy13apHLKbcC2kSAhS5YVn1191pZqPWQvhZ7Kk4kAAykW",
  "key16": "2XpDj2BfPV88AL8c6NQMMQ9bHK5LpvrVcbu27mif4eRGr1Cjm6Qm96XMogcTWqvCeY7AfdnWLgP8phnCHGV9Jqzk",
  "key17": "4KHyELCg9euVCCPAmvJHzpKbqdMntnWsdEVTDsddDsbpaX2Gar4ai9MNgvCBDktwjZ2kpFgscziUjj4BKGu8g7ji",
  "key18": "3JZk9e8buvWZWXTfj443ucBXQUKpCVhnpS4JnFWz3jEYA5ZA4GJwyUFurDxP4GapSYm5nVBj1r897mRP3tcBaKU3",
  "key19": "khnCve7WG3wCnRB9cU5ZCd4hqDTq3jrPh7Vb5RY7MSD8XJXpnT5XNe7av7A8ZenzeL9YPb5ZX8AsRSxxSCthbxg",
  "key20": "5YJpdmGpFuion6Eg8YZV7wnKvPyJBjubBYyNAQW9Z4TvRQtZSLE13MmsRYxbqG4KGZ1xvDnsEV4Q4PAjbnVsgh8E",
  "key21": "5o2oycawGFyWqsX1tNoXRnrMNAPNJkz5hJXzxs4g3pjY3v4Ybep4sZ6u571RynnLquXCiYRmA5XDGarJSv8Xx9qv",
  "key22": "5JFZMHhUMzC2nBw7BiE3bjbksWavXaeU4jJNNgTt9R6tUVYqNW5Xi65EgB3QkKaXsMgK12QFwKarC6V36DjRhc26",
  "key23": "52gutWe7EKZF3NadQvuUJWQWHbndS16r886Jz2XvGjsf1vLPz27D9hU4GbFgym188W9mM1bkQg8iSVjL8oFhPLDW",
  "key24": "64aHVHtTQvJv591cbnn8MDYhGKGmHjVKexpeL1hfJ8bro3S4PoE3zJLCvTxm2Az8WxJ8P8vh1evRwR4e6h74o1R4"
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
