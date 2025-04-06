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
    "3nPSRi3FAmS169ZQrfCQ1BqP4BkffWBZV6TZeHHBxREQybVe5JRTAdcAxqRoFn4ks8vHdtDkctWaRQbWyUz4rnFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSqPxeYL1XnE6eXXRNW55gNsJwerovt2JqkkesdEMUEUA82aZWQ4yYanGN54pVAbkBUNHEs1VYTtLCHVQDqMddg",
  "key1": "krP8k9Cd93fARKMwNLJyA4oCjCRbC6KyAXqradXDTfwz6UwmVkdn8cqGY7ewg397vwrwwZmQWh4vLrA3TadehjW",
  "key2": "2txaGxAiJw38Yo3AyFF2ndmiJK2GJV88iNaPJ5MbqvjtbFUtz86tUuPjEspTzQukS4VJjR3txGAh4KfX3xBBmCcM",
  "key3": "5dxRaYNdQe6BTGA5iJfBvrt3fMVxm8MoHSu37UntQXBagYYH7D9TxP6vpE1nAmqKVjFbsAUigKrJeUsNS8dmGNh",
  "key4": "67kYKtnunWBw5iDWYezmtPuhfp2t6BJyTv1qRUgW4y2uoPrF673g3LEjFUgbKkD6apjQE3NXaVSRXx4uWziy3v2G",
  "key5": "3TJ4er62crxnCrAnYw7Zc6WD1UGK6FoMyXfdajN3ybjenhoz9BPDkEAfH5moD6jL1BQimF6qCpRa42F3HfuFvjm4",
  "key6": "3gKakfAz9rVESJ33PYJm3LjErYvqVfF5pVZjwg8tBctZzrMxMui6XccQ7HS8v9mq9abMwbCS4FjQQbQHU9TQAUu9",
  "key7": "6wY9FNsm2NNazxanMkZubqntWvWoSEHNVNTAAGXnqwzT4g4DbhykzLVq3GtQKpdQ7v2qLFEFhHrKDZFnf7tRkgS",
  "key8": "wXGE1eeGVxwtv9uqy3obSfMvCCystuM8NWKgi4cHGP8bRwmvxT3s2HHigF1HvD9i9Ry8m2FZ3a1GxcF6jYYDZjZ",
  "key9": "4YAJScofBth5sc55iRZR9Qr1KkjkF1qdRtDdQEyfyCvbvQQ8gCBno9hscnkJ7yTxriN8VML6C9ou3a7D8YmgCPEE",
  "key10": "49a3ZRWXfRt2qpTeJV5K6WYhfZbsWoiSk7mGPmWRSZqdrUwX4nPrWMqsDTXMZjw4PiQHGxxo51pqQMSdZzg8Kyni",
  "key11": "829SMdLR4cvhnCprHdYiqw523oY4g7pb6TDkdJ1ZsdyQNvDmvPd23gB4KkGLGy3CXPzowhhHbeawjvZnTZaHJiH",
  "key12": "ahQ1XMVs4S7PJ5h7ZtSf4oUn8NH4znTxfYhYMoDZ3qGswYWmFLkyAx8YE59wdTvyG9foditAP78dDy5Ykqnk19Z",
  "key13": "26eyxtvotWNFFnjBhnCf8wLvMs7LHcnGieThn1b2JPP3NTkJW1EFmyCWaruorXt4Ja2GakXYMeBHpCXDChEPst2C",
  "key14": "5eCGUkCwnSQT8fdzMCBcX3SWoh2VtfwuQmmKa2Fse2ZtYykjASxiyvw3XTToW13ucAWGxsFTwxYA696M5zfNrAdw",
  "key15": "2nNhtsLKRW3v1JZxgDJNkAxG8nhEobHPCFo9acAus6vRFGR9r1TSLkdxSgwBE2DHkNkJyNb1fy1WzWWZuTSzxdN4",
  "key16": "5TfQ87JRkf2aSdXg6kL26ZkzPM7W3qFAjU6Ba3RneEqXCWrtZaMWyuFz4uHzeXSqi6ZaYSs9pFtbsQ5L3VhWco7g",
  "key17": "3tqhKLjSjkLawagXUHSiovS69sTLH5QJBgUHwbnMDjvkrcPCRmX5qMxvCciDGFZ7QgrHQ4UCk6qZCA5Mzm9Lthw3",
  "key18": "Pymf6SXqAuBDb7xqchBPpgxBifr8Bqq5e37Y299kbsWnqhgG2V3FUsck8LWBeG5pTyxfXzqCeugao9H2RMyPStm",
  "key19": "3hagncaUjKa5vtvaPVzAtVPEChHAv1BWmyfFm9VDZrbFpnS9cuyDokH3EsuNcoLB1w7v1pDYhoVfhEPSGyDEU7Bz",
  "key20": "288EUjgajWj4QLuBi8NfhMYrMF1hdPDjSwNZ1dT5WVavx5VdhJg8TFdTQzFJpBqj3SZykWgDNBdeo4utcb2sHzvJ",
  "key21": "5aCVBnmjiwa34JM3y7j8PoPyyoGuYGvU1tihMM42MpcbRXYd4pUs6iQPvm6NXhsSPBWtFb4nfbjDWs6azduC7k5x",
  "key22": "EwDua2RZDdMC3ZtBWyQ5uZ18mpEkeCBvyb3VCv3YnxPb7tfq2Vgr4ZddFQWgkhX14AnnYQtBVyswwQci8hQpUSd",
  "key23": "4N3qRGWRhh8Wvsjmwgdt6rHeDGs6cA3rxthabke8kRNEzbWmDkhWqEL2EdqWmvfittPVZdrwBG29ouPBKgQ9W9qz",
  "key24": "4mQR1BQ9ECxtALkfcCZuYvhYer3ri1VNt1fcfrA118jLKnQwZ87EsiCggP5tU43rPajnSy1TTFAnKHxH4pWx11P6"
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
