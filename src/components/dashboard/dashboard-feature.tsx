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
    "45gaAyTbnFvdC9cdGbgUyksqa9nXJ8UuQaZXMYd2nbkXDRP1YhKLytVSSFToxmRURno3foq48bv9imB7pGg6L3mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYdW5JKqkubhbXXm3sToeN3XB7dmSHegQoV3HsH6isWNYQKQ1K7jmm33yJEvxBFm6GpCEh2Gjw4KEF9BuPo4Wrj",
  "key1": "63S8X95hGsjsX2ECKdCSWekt464tDeyvJ1UFXcG3YnBo4grhxH3nZ7CqTAEivG3nkfcbcLDrXc2SQ2ZXpCAKQE9h",
  "key2": "63GgGcu49xQjZRUoWvpQeBma9hDaoRQ9SimaFap8P3XRfCriVFQMjiwBHAyWbPHcrraDPXjkizQKprjqdUBs1ki9",
  "key3": "4Ynef8ZuZYfr6aeGWZuHCnB2KNicpA3wq7EiQa6PszWboRoT7dVcVRNvbMsWFhKjPjA4TJG9kjxWVk5kGPwctk2g",
  "key4": "39efBQRVjK2wuYUkdsBvKn5d4jue2JryZYXoxZVWn2BQNzYuN2ndKaj3wg7ye1FuEVFgFvjQwoX5X58bFkvriLLn",
  "key5": "66VEMbTNPicxEe75upnhZP4UPihHwiJPwqZFT5NNZwDmfoR7u2Zq2uzWNUXeQgj5G33PEx5B7qdFVrUfRJiRaTLN",
  "key6": "5MwwaGNNH1W7UNZR1F3qnaVb1dB8ewX45k1pcAhz6eBBKnKWPVXZJtcG7KKniN8rpGPP38tZnLH3Q4JgN9jibKDP",
  "key7": "2bdUagYuP8SQY5SjzLiYuBAM456gXBMLiXeDEeby7GJ35wgXZhVCvCf4Er3QCGaVk343SDRLsCDiaxFYYhoQpBUG",
  "key8": "5uacsMyMuMTa43BA17jWhEo7Amkyg4wG5ox8uiVHgcSknGShw7V96gBXdiZ7sVHFcmpPyhVnfLsTAt2y4G817MAe",
  "key9": "3fiTyjKLgY4VKqXcezyNQEvLH3KKQBSSwXpxELjSuhAj4emfFdsPUyvhD8rkLn1HZ3shafWZR34sP2xPYcSepV4o",
  "key10": "36D8ZoyTfo4xUZbKPy8hqVSAjXij74yoeH9C4sD5ABAyytKq15nnHwjUP5nPcgiJuen1V3uZpAvoXjCPWVsxChvw",
  "key11": "3pvGrj7Eh2gnksPKfWBgjtxSBdHEBtbCh9nYHDWhorJAejJvhXWNpEf7hLv7sf4Mjrk29N8mTbh3Wc8ZnkbkyfXf",
  "key12": "L8jWS2QieZyFWc9kGH4vptEfR9GQTRLmQSUSiJDGVme5D9SoR6GvftSuZDqVjjDHMD4pYKiro3VJwpxs4wvKgLm",
  "key13": "4AhnA1NWRSw3okVSHHyiiAFKwrdGyqnQyRk9Te4KPdQHwFAEvShmpLn7qPR1ULFRWGAm7o8kboawfNfpJ9wmL196",
  "key14": "449ftNsTSzyKEPNYeWr6yi4tLpptNgD9Wb1vUXxX7V8tmAcako1oJLKwQnbvTcqErAE9Vx8HJgfaT45SJEo938zx",
  "key15": "2Jprbee6Su6GTKr93NWaJM4vDc3dmwC2XFcVBBQKbGyMpWfV5VBfknRPrsXepAGUvp2Yf85YCS7u2JSmLEwc2Ty9",
  "key16": "LGugkKPcqUBU8Z8kD1gXMpsYmpeum7joJw2M6Kx38cnNDkmuBC7XWHD1GHQY7m6p7dd2XBqSwK5uatBLg2fMogj",
  "key17": "5JyUh6zJNvquKVk3scTRbxeYwSfweLMNFwXib8R5nkd7tXQFgH8nLyEEgsAph99Q9QrzzsPt6gb9d6h5MgiDakUP",
  "key18": "2ukwd3B4NaJk1aeWdMFFrZEfGobjdsPAbQuv6WcApJFJ8uFLwBAfqYodbqz4gkN5ACvd5tcHWZnXnsGusGNPR4f1",
  "key19": "2WmNCxiEhucHT2KgshQBvGjXz2PTvixqZv9D8jA3an7fbMdMrUuaUfnEPgC836PjiFf9VRnBEJxHZGE9qaHeZKMG",
  "key20": "t3nvutrSi9Ho19uvDBDErg4oQ42hk5tMsLatpFBgYWytqfV1MbianVLbJBZRAroWbvHhLMzEX4EN9GfL8DbaJwr",
  "key21": "2LwBKanGVsePyQ74WfQZKSYAmWoqodTuzzhxtSjNNHP5Xv7ScxBFqMrLJAF2KUDgFfiZSBa6EbzUud1SshCnYZpL",
  "key22": "GpbRwP7jEPMq9BTJ5pheA2iSAYbsRHU2rmZyiHGcH24KmrmzojNHVemEE2vTEt7yLZS9wJhr7sTE5LUFTJVkfJq",
  "key23": "bGxxQ9bNm6VXMBdaRSzusMC8eNEEaModqAwNAb6hH8q6bT46jHeTFbDng5skAHiQoNUUXZqHF3gUUCJ7U49TRyy",
  "key24": "VQRJZC6ZdmHwHXUQk6x3Mo6BvQZgNqzQyfBMKzZm1U7tFWBCVtTkDEfFty47WARpW5qShnDvu9vHWScLxHkMbP9",
  "key25": "5nBPRXMgjBfafKeGjhQXnEwEmWTCfscrkc8WZR9pXYpzi2BVDRssarxHa75eZYbKaLEpNEVgchpNxgCGEv4E5THD",
  "key26": "4mtdFs2FjLNLED3aXnmpeB8G1NfnhsFX5GBXuEep8ZG1vauGKjeo7nrvJ2srbPpBi4y5jTfFDCZsUSMG7BtaQL9E",
  "key27": "3nMJXAm9Ac8erFn5fr8RsZ9z6Ya5Y3rmXsovFtJbhs9cEdx34VajAasU5ns6WHbhfyZaSRGbBrDVtdx3xoSdKY68",
  "key28": "5sm7UvwiFH6Gs4ehmr7YwWZFWgmuuNHjVQR2DkMmr6gVts11YtLPbN7XyypVwug1wVGRkmo2V311FhteePzZTzVR",
  "key29": "4KwxELs2fTxcuvuogVxfMopLAXoGL8gso1Z9WeyhHX1dR3moPf2Bkz1Ni2bWgXj8mcQiDW1NUbUDVk4UXQfQbsno",
  "key30": "3FP5wjLAJuTQYHXtbxKFifxVh2dFdDZfSctvSYVP7tYVu5rYmBYWQU5fRTGae9afoxn11c1REivu35F5ErcyaqWZ",
  "key31": "4f6XVtZXdC9xXG8ycgWTZhZngAE6rJCeMBr167ydd7X81aBp5piiLg6rXkPPZYoZQtoDWbv38Ha6rdmzVdytTwQJ"
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
