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
    "5NoK4ADwoo2CH1x24AyHAKz7yaW2d7RWb9xHgiuRcNNYFx58yP3K9ZvJgWhJ546L9c9UkQGFWSLeQMoEBHJzxG55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284Q2oHAHpaGQwa489kTR4q8zzCBAxfmmNBVua6iyCn2qogMysVqf4TMSgVThX6Y4MWeq9mrk3pB4VmS6k54GtbT",
  "key1": "5fAfueA2WHpJazEbbtRU8FSQaG5DcQYd8PWVA9TcwK5X4jFwhMoUCBcz5jbGanf11vzLZXdCKGTYhVFcejcwhN1V",
  "key2": "3pUebN5yqfzvfB1FxkezEqqENBfRfAaBMYZUR2WXfKpqkXhVErWUuTnBmvLptrnYkyBH6n7AGDGWzSp6h3N1RwaC",
  "key3": "5ndHvyDihvNpWFe8PfSv2kyv5J2wYXGSqr5CTLSokB8kh7cjyr5XBBFG7VWicNFUUqDrL8GamWE9Z4mCBXhBxt14",
  "key4": "475zbTUGfqASULP9B4ZUV1jVUmEF23HcSyNQnvzem4BSPh6V4ohMLsYomGXbuvJuoAeggbK3Su51J3BADPY2R5oe",
  "key5": "23KLRnH74VXbPcxHe2eXXBwVRJEhgrs1BTRBv4smCJPudNVfzsUEdkyH5Bp182iQcr897cVRuPZdGQ2eoub2VWVf",
  "key6": "5cui3J4es9sooSsQ6B2LRiput1U3UEEMfFqLyd6nsGYMBmGEDjNxSZEpnxUfwUiJj8rnJQamPK2PQjoBX8EhCNoB",
  "key7": "2EwUC1cz7MRkTNPJSMQUYLFaTEK8dEKKjFYXWPBK2zjmAvJuJLuiF1Wfnm5AVst4BYg5S29Ep18wHB7GckbvhnDq",
  "key8": "3Gzu7U58qEBt571YNiSZvZhcfgvdgcnLVJ4mq7E2snVmnohkfKHHFvTbX8TqJ3iXVCQUG9bpJASbt9eWXFFeYrEz",
  "key9": "2xjhxDkZzdBWSb6QnE9qARWaXQb6EtvVnzYd3rnSTB7X3GKTwZFvRjxcw8QdiiXXNv19esYPytiEBtUQkj2sJVoh",
  "key10": "xENWgPFXyFFVHW5PxdUjWmh5xcbyrFrT67XsxhFoFSoKApvDBFVECLh2nVC2Kpq1sqYF39owpsBS8MQQrEZzxuL",
  "key11": "25rH3rSAcz7uPWVPgMnz3wuh95a3PpaLjzbU45vu5jskMZWUtByAVLDssnmYujXvPYBrntaZfmwL3Kp2V4FdFPsX",
  "key12": "4kdb4er2jQUDiRkyuFuuRA3WEZNXCZWGb6B9t75CfWsbxo1KfQGAZR5uCD6zYkMxLG5c4JcD7hN4UqKuVqBR9yAe",
  "key13": "5Z4TXk8e8v5AUKZQP9FxbmzrWP24FCXZGMM4UezfpBamCuG8RDseA6X2N6exs5vuUAWHAhShhLY2e9pQU3YuBSCR",
  "key14": "661KPvtcdmMtYuXuXPeYUXmpDRNEQSB9sbXMmu8RCvnSptX2YvWnzsMGUejx7NLCrircgFQJP2z161TvwcstEXVR",
  "key15": "4gyfm2oQsGpxJaPefshNJnwxQfFJrf65PNDBHoMNA8qph66tWvCNaxbJoHooPB1mZ1Bh9SKzUYPBRMKawj4RyRbm",
  "key16": "2BZ5QtLuygAfDGrvPKXnBAFqNA381oAD9FBRCsPLN4WAQVM5q9xhpBJaevQG1dvTbtk99gH3QHbt3nv58jinCg9p",
  "key17": "4e5TfnZMSwuMjJNK1C2QMeZ8dbd7R3jx6c3YLGiY7eTZanicZXpPTEVDT3NWX7JpQ7tJeWeWyCefqwMy4MvPYiDK",
  "key18": "2RPKDtw1XsHWoyJpYMK7tha5JrC5H7WCrYqTXFiXY1Uyf1isHThcE7vBqx2zgSdUg7Y82aTJ5uV8dF4UMVH9GyT",
  "key19": "4PFMwj4QcH7p3AK2m5UHAEgfHUZ9sANYMDpdAx8eGas3HMHpp9kQpjJyZBGtzYT9Z94ixPggusM5wq6zEw6mqWY6",
  "key20": "PGiCZ5iSgPkbDHSrLmgHyqgNfVTue8qAyDxfPeU1rKvHGrCmtFNPqQ76fNFDFoZ46rVzXKkjXtAsALyYZ2jfHMV",
  "key21": "3699i5pg6kCCYYczedcCBZFff4rFZoNSy8ypa7QLJoCQcTB9J2fpTga7tRvMAR471fkVZfybDcSE9mD95uopdaGB",
  "key22": "25bSrB2bYaEsao7LtTZG2vYYsf2mMUqF1QbxMiWyk3gJDzXAFA5XqDvd6TPqdszn7cjRcF9Sy2uMt49DNqyEDu8L",
  "key23": "2WHfsL4YZXh4syCct6tgja9UzkQzYfVBnq7c97taqp3mU1rXJFW1M2wbBAVPHUzmmZ94NffmBb5PkF3Up89n2Wes",
  "key24": "auJNgiKL2TbMhzNEqKjtrJCzCg6CfhSSXQWH9fu44LsosznXbb1GUpN1YxNoaMqfH8ccWsAQTBUK14QTfvsYQWN",
  "key25": "ozau4auLMw1m6zayeD5RcZWz6a3pXgmDH3vnpCvBMgYEtZZ9mjAz83VqNCfUi4gjYgrasnvmDAddPMnRMMfDeZh",
  "key26": "5xcDENZikUZcCzWP2UesbcnqHo4bhT2MZNGkpnBcFatoqg4Tk4wgFcArbHzYyCCNMJ8vcLr71uYtmmYeeRayRhaw",
  "key27": "4b8ASbAQ6q3qVrZT3oksHYJ1NBYeY6vhgB6MRzBh91qERQ2JswoTVHq5LBMmSUpz52AS1saqk9oYZm3k8o38n5ZB",
  "key28": "5sBYc91fiv4Zd5hT1riX46mBw49yg4B9YiiERfQw9RVu4yjv8Lf6ovstn1HTvYgHa5brSQQDqQxo9btK78FFJn1v",
  "key29": "46rDSDvUPzdRftPw68o9dkSk91uZDKXepedq95Q9PaDXjh47yE4HJEWcYETkcCGgybJELeSsvR2mm7xAzjPNXuWD",
  "key30": "29NY672yBsnDwy63BZDQWM2MsZksWTQYJ6fPD2ECqDnv3Vjhi8SRmE9S4hy3VqSMDW9LybuRiJnzC7oGWHcB6y4R"
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
