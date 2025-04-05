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
    "57G5KwmzXrKzhrLwSxaGyD2dAUkNQqHwzAswrwH656W7egokNZ92U7vSB75DfT5j5Tz1FfetHTpxtanMFXrFMJBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VmBTumdSw73Ta227MEa2KrbZcfPx98WDdW1QrtDstdtiAhBiXJvbUHG8oPWojpmA9uP59RY8UgprEaCbr3hKU9J",
  "key1": "5ZLwPrGNVK8WwovyVra6gtffGtDjV1CmLhCztaMfFavY689smZDXhnmgPK3YVNNXrcmT8eykrpVvgyjT1Fyv4NQ1",
  "key2": "2bFSRNAKBLCMR73LwriuSTs1CSUvELx6XWqg9uuCy5vyeDLFj1E3khFEnTXFesBC35T1jtNLRsVDfNruzNY5kypo",
  "key3": "66gxbDNG5nYzYXBHWYDSLJExPdpqvogSrTbNUNAdP8GarG9pj68c4zHnMej3YdKGSND5fifXbXCGsq7EEQ41kTXS",
  "key4": "3CPKcMqFxAZwZ8sH54tJwdcJD2Wj5XGWzkmFyP2H3LAD7Wp74hEyn8w6mBGmsM8KET47x22kex8Ns1Gx18cKQ4ZE",
  "key5": "29fhjfgou7F81H9rfUuojSNBwhnEh2QS3mC6FXeacfevSq67dWCp9eM6JvNmxsyo2k1fbXrUHwztHe3JAECy8UeD",
  "key6": "42JQhjt55WNmG1b1ooYSUEmzoUtt41FQHEYHVZNK2YarE58mToeUwCWnzHkYgzhgpzCdHGG1FdLd42Vk9YVKnjRj",
  "key7": "3BUD9s7iyA4dipdiXdGCDtmiWvzpZyEpau8oX5RUo8b9NzjPHnG2DhDB7n9GRfgXcaXE2QW4XZtMZyNgZcq8MeCE",
  "key8": "2nuArsCpbRzGLBaqVfhj7Jb3bjMd3Aa9qSnEMigssgWpu5Ch31NEmizZS3L29YV13Y9fWL8s5gvxKtmtq8E3Fmbd",
  "key9": "5oi5ybxESNZe7RdUbxRGUkBznNJJQsZVwhMxPErT9e4WyWJFbMGPF3RLx6VoeuX3yiKHkx9jcHpuAtrX5pbW7aGA",
  "key10": "2Smcrz2QXzHyG6Hc52ZTzrpoGs8oBqUGxVmCgCgbD7AfE5gWs5ssRS5J7ysuM8XYgTfyDHfpD9NDw272mvowVBpX",
  "key11": "5RA68oWV8DcT6HrqK4nZuuBTNnRVP5yidie1UPa97J4gQMmsXiwuK33bd9nvapW9tC7pwteXX1iMX9jnYoYnzniQ",
  "key12": "3uA3ncWKyDLYdd7wkTT1mxYjQnJbQfzXZ2twLgpRfFRUy542jSUtQpYJCVty8MiA91pVoozrqMwFQ8X4Qie527KQ",
  "key13": "2dmSpuqpEQDYf3W9egDrVdDMcDa9aPXZUdVfpGKwX5oc3BQP5Tenywcjc6t8x3pDVmSD4Aq4EvxCBiefE8UHXLAn",
  "key14": "3U2qzzrb1cweSohohBKjSiptYNyoiq4arrLQBP6ReHkVWuGpgjdTmtDTKNiDvFKQgfk9hJUWkCBEWBHuSffTTfe5",
  "key15": "5bCjjHCJjo1F7dFC2NDSxVanWsA3EhnApH8wx74nASiw166VSjNnWYjAD5LwXsEFML9zftkf5hJ9uLCMkRAb4QLa",
  "key16": "rLAzJAnjFsMD9e1QmB8QwR4af97WK9PN1G4h1jkCGyVoTDNeujjRXs2xmnRfBj9HRv49bHgPpmR4PmW4QuPekZX",
  "key17": "4biW5qgeSx9xWF81BKghVjnBrgeYKbBzTY3R1RmQhJtLEWWM9pPgC6GnGyjmc5nozZX3sBaXHzgFsq8ywWf7ijwZ",
  "key18": "5QAcugjEBY2DRm8tv36Q2T2XBWnf3T9Qmv2zJVvcKrxkiPruL7k1LCKRQvVQVsUXsYmoyZvqaVbKrYq7Sko4RjKy",
  "key19": "4bUUyQPMfEv299Wdf3fSrypC8CVcptjD5wskAp5wYZMdNSHrrtRVF85WorMxeiifeDt9GQyah8V99T92awVNMdTV",
  "key20": "2v6NUMXGSSNtDqEyvFxPq7udZ134rTBM7wNkqiFVxgvzes9jx4JojAtn6VA1VMKeMnr8dUEi4fJYhnx5kurbxetF",
  "key21": "5At1A1RVifEDvMek9895MfmHjSJxL46Gx53J8TV3iP54fEJSjh61rnDgqRo31truANzDgvdUUQWA9UtRCdj33wPQ",
  "key22": "2dXHGA1YJVo6hZYW1SXTawbSD2Vh8eDyTjCb6ku3jb4gJ6RFMuUoZpdCfAyQjf45FZtyAiYgoh4vD27iFgUp6jCb",
  "key23": "39ikkimhJfb4CSx8sakFc4zhW91k5rYHdRcQ17WaUrwCLmQhpHXH1gAFAcgjRtrUgD1gviaTgHWsyhaLYPTdEAq5",
  "key24": "4zUkWAY4dq7daRdz7wEKsAaUWLH6ZSp9e4M6NRbKPB1L5HkJuaRXYcGJEK5eJRu76jYmrDFLyW85t4BEu8BKcT4h",
  "key25": "4WcMo2kym9dWt7Yq942yaMX7M4uAH2rusWGnAs5xkCC3tE6wJ9CAMjACpQieTuK9cz2D4BHYi4HFU2cnDs4AAnoz",
  "key26": "54HWAQj1pGL9YPYpCKghAJZ5jRrUtv2bZHJDnqCR55EfaBQF21xfDSg8ojhuJLBcpvpT4AUEioGuWtx1MjFCmkZY",
  "key27": "hF9rzTMFV4QmXaMB4o5PvKJ4KvVPK2q7kVPaxqxJ73LS9sW4avkUuieFaxDwFXFo7Qet8vPYXx83zNtnnVKuG6t",
  "key28": "5dFXTcW3k98trw9goXTPuAVd78W1ok2YrerDt2t9fSA9ZiqBvSzcNQRJ5kjeizASHrT3kvW1CY5btjGUs5SD5xVQ",
  "key29": "5mjPRDe4jAHwb4VmXWJCCrfJ2UhSCRqigQbPzcMqVywHMyai4JKtfyjqjKyLZhW87y5bjFkA7hsQymBYsABuv5vb"
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
