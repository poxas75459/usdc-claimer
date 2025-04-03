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
    "4s7dnkfpjDqW3XrNvhsQa14yN3CRaDtwM6VXoB2nvkTLvgsNpAftDbDDEDDhuCvYb2KEPfVTh5FZcTHcBM2wYR5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D1NsHRyTw14EM1SQRSZUT4jx899S12YcVM4vZghW3xLi4UsoJzYYMLyKu5Whz99ajvNAQHYPkrFLsc6DSCJiAM5",
  "key1": "4XLGicV5BzJyr4xvbcWk82uQ7UJTBtDkock3PDnTveKSLvGHcFTP5k7n8AcDjYGWVHYvamxRTTYUGK3QCtr2cQsf",
  "key2": "64MGH2KPEGeM1Ec1ZEkR1jNSfBPgGHm86VC9Q3RKW7eaMR2tieqrXXHRCNYXBZbqpZKxKdaHKt1bdEMTHJmnzxwn",
  "key3": "cDpDBajPwHSF9C1L4HY4x6NwJpndYeE5tYeitcZuAfe2yoBdHZz9YZbr747KNn68y7DN3BeKuKYS25AaimffJjj",
  "key4": "2WMpabKoxbkUVpgATPkciC9LWCxQ5FeMXxSwhcrVmETXwCt2Pss1oBF1Cdvq8MwmSFuW9QYkbXN8Yii7gTxQaLHi",
  "key5": "5Zrhdr5uFTRaGxyb4RmmshTeSxckJPVSZsCcaCCYAukhb6cpVpbteNfWk84B6bj3R4LtcVbdfUJ8Hn9RQEViW8MR",
  "key6": "2rwPubHL2Y2hASekCpUCwFFyGehemoDneCyEpWzZURrcpQQrHYtTdFw23EU5dHuUK3VhuRMN4v7J9QokALMU3XS4",
  "key7": "4pPAwDPqrDdd1FhxvqvJkLExY15vvzfP2bE5RSzKUoQwfAqF8eXJW1xNmbJaQ6ARFXVbeYihBtFSq3zAhucrnWhT",
  "key8": "5MxERfHLmpiPPPk7QSmvY47Rdy1UjYZNjUVUKfwiQQdSwhMS2UPYoQw7GPSaaJur7bZnKhr5ca7oEBBYKEr5te42",
  "key9": "58MbfxC7GAFu6VQroE12H5cAxLGgd29zKt51ePiyLHNJz3APxfdHfA5wA2xjFoUabu3pQCimzHs1rRqjdve1sRjs",
  "key10": "SWBRmKg3y1B7bAWPXjbdYGrDuWZjhFhV8mPmWYBCJ7SXJPfDx19EqiJ1QxNeiB3DtujHgaKtjPxqd2aRk8ktd98",
  "key11": "rtb5xpfoXb5Y6hFGVqcy3a4vRFdxwZGWmFvMnFQvtagcamR6Duo4feDL1Km5Reiouh4tdwQXRhvUQgrZBoBdx2m",
  "key12": "5qsA53Cf9H4pzXGDE7AwsX6uegQKXuB3Tyc36GR7xGD7VwPLcWRG1thqVtv1rbuNEzaopYxJw3HnAsHMR8GUTXC7",
  "key13": "5FzFJ7Bs7zbCRS42KJ56Z5shGgtpP3AWSpMq5H9kwtgGNvZ9e1w46M9FQWfyQXpJ7vrcbJWK1secEKbQy7GCJJz",
  "key14": "2wzeDC9PMC7gR8wKELS6VGz6Zp1bGH29uR7XemD8VRazRzmGCN7fR8y8inkpmMU4yApkWKHXKJTxYWJAbcbf48Vx",
  "key15": "35A35Mwmgicb9uvyG2pH121YuDkbvFkxi72fs15BF1gaTUswr49fTcEWvoXqgVGh4pN5KbDzghs8QoqmT1nJ2nUm",
  "key16": "5qSeKkUTHr6nMdXp3E8L9S8SJnFgTsME7r93t3E9u9gK1mYzAzdWpBHSvmi3VEc3W7t2j1kouUxxLKDGQ1rrciFj",
  "key17": "5pTqzFRBJZhESNRLavxaKsaAgqVh6uCJTZDFr3jUC1N4WkFgGwd6w8SdeTvVCp6SRWFURLPLLdL16StJvRWij1Zi",
  "key18": "4hwMVbcLqLBqJoWZ2cRcuhsPm66ThPdpG4S4YqKehJJzRqRuHSbQW8XMgKS9iLXq2FoFgX2yJCTK4gtCRjGnYRk2",
  "key19": "5LKCSeXmeLMTETYEpcV6zFrKDMEn8zRLYwxgYWF7Fa2sDRCESdFoPixtNV5cps1KCQ4QY62oqLhqJbDGfFQuaxTZ",
  "key20": "3uXwAqSjKzcinbsHovZWmzW1auLGYDA3b8Q1xBGCfP7JhBQoK7bt8tYdrfACTfysKrFMD7m7sRsigP1kPEkKjQao",
  "key21": "2xyiK7h4ycB2SAkcmf5T2zJcgYM5ouVxu4o7YYivJAHyn6vn31Adymyi4Bj8SaEsmvhH6csME2kAJUcuepGznhzm",
  "key22": "5f6JZeUvmys7FTkSM1ZkMsTurUeHZ5bJKwBPcw76f8cWPNp5QPZo5kVmDQ9qBuoW1RVZQkiub1hkp8y6GyJLqP19",
  "key23": "QefMpuxeF57FH52KgW3nW2edfWpVQeT7zHtCLLbhsAVPEXaHSGhkYH2vD3xrT63j6RvZ3e3inFhP6HLpb1385Bm",
  "key24": "JwpYXiv2Rh55pp2VW1DoE3HZKRP7UYvuyuPA5WCrnX83p3aAFShoub5HBxsQBWzaCyTXx4mj5HVDijjDxxQ9Gma",
  "key25": "5v99GQkhuoDB3BAudDdXjyeaKgYiAnZx4PNy2F1HSSKYfGmGcEhr8oepMu8JnF7poxmfJ2WPB7CVqFeP5bE8Dsby"
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
