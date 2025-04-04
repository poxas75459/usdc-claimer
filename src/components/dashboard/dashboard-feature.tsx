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
    "4aL5ivPud6b3pnSJntnKU6Qe99b2PchjnpKfPtTjsqjGF8b8JHxSXRLFjPAs2X1yemHRughEKwkh6zoehz4BULDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJgvknH8Gv4tgpmYetkwyoTpNU6xJSYHP8cdvebtA3UAwq4j4c8LupSSC5mYVTJQ9tEwryPLLXXhhpCctCRNHL6",
  "key1": "5v6kHg4xSWtwo9wgyTc7cnTgZWFnqXkmgaME8homwPcpR89kjTZ3DuQs9Tm7GJ4hmWGVknJq1nLx8Z9QcsP8eFS9",
  "key2": "4fM5MJfoJt1uxM7BdPHeWYwHxDsg5bq1uazAWZUsbZieEnhsUYWR41JDBiJnJXgByzw3VeyUPXhbRtmovKvdqAXh",
  "key3": "2ysBaco12greiTd2ey4bh5ugdDKBL1BDhWN5bpvB71McpbotUgM5YpuZu6PhY6Z9w1AohmxaEf45ffdPusRvmX1b",
  "key4": "4QcHH8U1MjULyuhCBevdpnCUWdHypKqvD9BWRPA5AFCmWNgCNEqUWUMvPY8owyacQCMuKuVgscCxoVA1aTq5keWv",
  "key5": "2917w5omTdcLsZmoF2vetodMbyrMEsqCnBcAgdUd1ds7sZ4ZVCCfhYxBBLW2yYYGYfdV58cpoSzmH7Mhe3eXPT7j",
  "key6": "4A8bAr5mbwx7rTBDwMxy6sj7kcXfXUnwoQiep3cHNSRWMkXXF6StE1cSYoBjZxZh3wdD2KHPvL36KERL1FWJjq6",
  "key7": "67n1XhxySfuYaL6KMNu1Z7g8ZZfvsDJpXgfarQ8FbN3Wxjg8Dkx94Bb4ecNLJwpWhYpJXBU1moxqe1uKDouovgi",
  "key8": "2UrxuZwAXimSGXSMPdJFKxQBAzNzCmiyvdGSLzkwhnmtEtu7YzhYoXcXidmu1BB5YZt59eeSDJBLWmvNougqfVBB",
  "key9": "2pqy4CUMxakP9r3Ji3FMEUp1fTWXHf6H8m7G9FoDEfU4YeT57tb8cU5beJNrTeQTpPDngikzu4SF9jeScQQCBwZi",
  "key10": "3vrccuuN3ER2GDKLkgy2YF4xe9fbtkaVhCCYgQQQ26jEDZNi25E9fLvJQyFhq3RahU1gbdj5YLBP4xidDfU2Vs9k",
  "key11": "3SK11HwjNoHRwDxYj1eb8cQBd2H68pNbqUDpv2qFiBC9ubBNEdNMPAdAiGtuCN5wne32S1kTeNVwU5UxF65JyEbR",
  "key12": "bQ2qxzgjs6HZH1fhNquE9v91PqZs5yNgTDAqdcxnz2uA6iHBZuCCD5uNV2ZKKFxetexetVhvc8uYbLVBnZtBYTt",
  "key13": "4Kki1VBt9yyRGbW3YPkyZoWhNvWgJXFhg3Njuf2oBeKEcY3DmnzfvxwsmK3dsH17FXLchfZ8n9acJfopM5PxbbmT",
  "key14": "5pxEFCimFiy2UR2GLSjDDiN8guKc29axCXfrC31cN6VsxjT7hmuV6GSjvPRN19NQyywDXW35cRpVLPR31QNeVrW4",
  "key15": "4F36CrMjPXHjGBWFK1iMzRmxWPzkbaJNcFtpjwaRxa4Gs5vYpkhzcDkHHmzmtVMuV7vzTHxmsCt7JyFagjk4Mea4",
  "key16": "4nXMk2PanRCs6vQUzQck7E5iq3dTyikoZwoJUUZ5yGANHKBTMkKEoJJgyXemoE4mZBd31EtXUP1Wt1mGiGvudcLW",
  "key17": "XKSGpFG2oEqgHQQGbJPtaDxJnnNZ3bZ9acm8oqB4quP1HcXeHUqiFKTxvMfyYnrrYxQKvhFiZhaTi8vmFf28J6w",
  "key18": "2EwHzKFJK8v9An1zuWDHeoMTknAfNhARXVXnhb1E3ohjGbJNa5EfPCreS53gAjofE925PQcXqsDkTfiAoXnr9vjn",
  "key19": "254AEw6Y6EEDDBugnEWvKssaqNm9PToMFFzkN99PcJ2wDgeqhtFwa6BmwLG4bT6BZ5xeu6gk28mPiFFtWwDTPmio",
  "key20": "3nvotP5GVq9Gvpnb863XNfpNarLzLeBiqarQkE1gFLhu3qr1hQFmZgFagZVcUuyERgVz9Jw1wtdPjHVw3QRsjfxy",
  "key21": "4GgiktatwXVGNFZCGUKpZecBWqbZ5mTNfE3RXHgKpEoR9pDrXkAdYrhQXYjHQaC1suKTrFM5yuJ3J9ryN5t6qmD5",
  "key22": "gu6UB9g8b3SAEH4wsJ72ipcxV5t5s1GXwupKs89qr74bAaX5t6NSzPCKaoRykJ2tfiC4h5cmBz4aMGNgd69FLWJ",
  "key23": "ggh9WcvMHvyZTD4NhMZyEdjeSHDeFHdptPMGiSrpwCRBUMmTydX1JzdreTTUMXvHq3TvKJgMme3NBrCffndu6mV",
  "key24": "2f9U2RvhFnGSDpMeeUh5qEqZUe6pEA2XKRRQMJkDrNqnS96WtngUU5sxnJ6vM8ofheDtgarHBugc55MPHvKu95nV",
  "key25": "mCbNA4a2JUxDgaBc4ep3M4ENNfKKb9S14u6dVM42ZXBjHuoj8RBd76uvkX62iWpb3AQjw9Rkb8XkPtufU1N6R7k",
  "key26": "3hzvPfuwcsdRkkuqof1CUBsHXUFrKAjZe2Wqcs85bLeu2pkueqSu3EEwmcbcjPteo2vvTpmCHiENzFWw5tvQHS3S"
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
