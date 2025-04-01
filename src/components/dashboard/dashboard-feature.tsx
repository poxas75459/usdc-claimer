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
    "9Ndq71aGEvKLkDQQNcoDumo7N7HXBigizJPaZJ3ZxPN9xqckxND541ModvKrQuhvA8WUsyQhU5GpUjBdHkbPEKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdDf3NxEtcWboLVHpfpQJWYpHshLex7hQF8iVywgiD5RnM171fCuT6aqpXVnUnB1xdvfg5QHdXqtbpkC6ByV8TM",
  "key1": "aDCZTeeJQjCoWGvEUm7T3h2eusjLhDnaNSNUnrPEXaA5L46ndQqs3gKUMPYdAvH21iRRyGdjCnkXfUH7m3aiGDS",
  "key2": "5PWXASUXXqJhU1F28rdM14HQ8bprqErB8JZ5JCzR4zTxfYynyso9n7L1HoTVQh2ZmtpsvjUq41AEjcTSzaTqc2MC",
  "key3": "yRHtX1pddXxHRdxuMNbK9gQP3qgepmtkHMJhkJbCWpVSgCw8buhS1aKSxz18tryJiwpRfpc6ujV2rbpDTpSzWeu",
  "key4": "5ixckXAXW7BRFoWpAxH6y626nWm2vXhwwb4bL7pURvio7cxCqyeh38jXsuQyBUwerTsy44FbX191hGg4RfefKqEm",
  "key5": "4XuR9ixds78sqUtnfHuPkpX5kTpGBHVCzdLCj35o6o1Bd9npzEqvAMzCPeWnKQPMTbEpbzbsWC4KFsfUwsMT19hP",
  "key6": "2biChSJyh7KD68hsKNaJsWdG8bKukwkVajkkuSo7WxE9UieZdtunJWaD6eXFeahkYGicQqUXiXcpmMoByCxy4Xnv",
  "key7": "2M3GwtBxe6QfJorSx1kvdXeBXfRooEhGCAWjtdvrjDRxbkDxnQu3MYR33TGqKML7AGex4WvTCEbzFvenWB3h7L1e",
  "key8": "8MFoY89FH4njEmMQEuWUgrbmotjRiZbVghPRk5qVP4Dsy7jjFzrmzHxMiRAjmP6KgECe1bdvv4S7djCGLBWqzn3",
  "key9": "3AhrtSeam62jpKLUeWWfjdm64JyDLdxkNyFJrJo5Man6S1MjaftMAYmax7ZijD6XWsh517Aukh5dAAvDrLHGzAsM",
  "key10": "2btLqFztiUjQJe8cx9iC1rKoXK4p41Bqpt56UoE4NTFyMH1UtAeCV6ThzWJ1PWodhsXdbPQSZUYBMjbxscWx2Bbn",
  "key11": "58YB2Az9ti97zJAJyNixJ9wm7eeN5cmAX6YHsWCuqTYUkCTWBxXE7GteegjhjpAYAVKs4vYpvF3b3H8X5PEoUCTG",
  "key12": "5sFUFiy81ysxYMAiTsPQcYD3pkXL21Yxh7UJeX47ZedZYeCh7hh788DXpAP72iG3X5BcNJqqpneusHqKCf2cWfCQ",
  "key13": "3ZxAXm1qfCxAEtp3DSkvYWcBySQjiYhLVPKHVFARAXgLTN2meqA2CTC6wB7btgkzUkRVqi9DhZs5LpREA9Yot2Bi",
  "key14": "2Bv7sbpfj2enZv8LxZyoTbU1oBjpgPkSbbVogJpvqVwumfGtjq4rrRSdn2B8pa42DgmyqkMiJAauViBbwwpy33Q9",
  "key15": "4s1pjWUbE9X5Kp82vvtahZ3dyNymrsgpgo4hQ4KEAtSm1X7gjKSa6N4wJt7QkqJgVRaCkFxDgPgyFkd56bDUzERQ",
  "key16": "rN9tJEjanTiZzEPHU88AyjCNsxhxmgwRUrdeMnL1ANiP6Wjwa5df4QnYoWAzr8dHqwaCyvhhkPhuxL6wswyj9cB",
  "key17": "3Qw2y5rd6gheopZSHLGatnE3xjnyi6ZD4NsHdM1qSqScRW439EpgagdkxHdoEnbwJ5xB17cC8cPvB4duuWzWcd5F",
  "key18": "663JhWoaBTYBxGhz3Ez3bZqw7BkS6KhLXp2dxDLDWjf4mY6qYW2eqxEFPUFBEQC7urtBLFnG1zRh2gp3ByPVbS2X",
  "key19": "4zzPCcaguzN9euexenKrpCJCe6ztcnnp4xvVARtSvmqgDSEuVMyAZwDE6dRRMKmhgBwJ4dKambSJ86ektUuPaNrj",
  "key20": "5nCHe288ockYw68rgQsmbX5PFfNcfteottP5YA2QQDArdfvwzqtfPm58Nho5T8edz7UA1sLoGmJRqdDumwkLnSG7",
  "key21": "2tL4V4w2CWEPqtFu55bQJLPDMr5gxq1zNp7CR7FhQY87NHcy1KHfn5QMenKzdKdJJwa3zPFa6Zd54pU7hJvWuw9g",
  "key22": "cKYCo57CJGqEzT6bisfafu4HRccPxaHjEjRJEvnBVeSJTrD7C4Nw3Ex7dyvACTetooNq85irphabTrBCa6q4u99",
  "key23": "2UPHz1dyQ2UYrcHRPLoZDDbsHq48ncaeXdnYB5gkBkHmetS1Nu3HgcJwjvtxUUzbeJwxYN9uViPCTY5KNmBBbGBU",
  "key24": "3SB9VkspGgLFBqyYFwY282AafbmDXEHjFzXX6WJqc4bbiSafCdWDYTqusRJAu7ynpMTAVB8DTUS58651YNvvj7Gf",
  "key25": "2kvohy9W22cz23ZMWTfNDrQXjX6irhd1mELuP3rBSpxCff6Zdm9XnoWHCB5kJAwehsdVDbzLrdcYX8uXahri6fMf",
  "key26": "DV1eBRX7mVq9yQk14bCDnfP1pSxBva8H5fGd75CAGmMS6m1fFbHTLmVGbz4vgrBNhZtFkjrJNkUeZRnisZkPsix",
  "key27": "5FYLKmy7w1ErmP88DgrXvAdAWjbDdK6CnZRUhp3suibKadVgmLDdN4gcuUwxzBfjkZNVN6VqUVyatkz6Dog2zXcf",
  "key28": "Sb3mqbupmaA9KhxUx234tp1SsyeoNf6YAT7Dw4TLFZHn2tYCW7Fd7PP7urcgripHbCq9f95DPsQXW7VFez7K4Td",
  "key29": "2yM8ukS3XNd9SVWfJdARMBNUMdA91MxPwK7w29QdNLTsXoPdjV1QqLVXyQ42W5tREHfw39Sn5VzWot7a8QVpNBZd",
  "key30": "32gaTxsf4w7Ud36PqVuXmTUmXfw3ZMS5AsohibRsNmEBiGoK2be3Q4qBDomQRmkXcPSDAQ5QpAVMmsJJe6trn2XS",
  "key31": "3xbDMhrbfZ3fSJSyGVKbeMzPab56iSf9DFUpfj51wZcBqp5BZGzkRrMkWmjVqEayE47GiwEc9ewhhCJX359b7UGh",
  "key32": "jpinrfbXq7AzEGjjKJZApjbeVrbJty6mUQzFsgSbzEs57pkErTtRTm15AnjL4LaNYyWmoUop1ASRmh18gtxCzKK",
  "key33": "4KKV1EWJXTUb3heCUwF2RoRUnH1rKVewQ3zXkHBa3Rc28XfYs9ayQHLohxEFnB6wn8ffQh5dX8anpicr4zJRJXKr",
  "key34": "mPWzYiwKkS6NNzqVro1wBuQEVJb9fEPt33EkMhLbQaPPNenziKJ6kUphs9w7wPhqcdh6JKbszi2T5XxMM4PKQ9i",
  "key35": "2FL9iHTFSD1uZLSp18YLd3BcvUL6h1T7yaTXQys6M7LxsXEFaJD6QAubwqYPZx7RMqtJMbwsutZD2eapKQNggoAq",
  "key36": "24jSdnJXbHmRpagtKsAKtiHEQLxeQu62m1wJLgN7tp5dM3MhS5DG6q41oeVbb2zp4NjLHPQx7ZZqh3su7VeNcBMe",
  "key37": "5Ds9MLFtEqTAABoiWFK9otVVz3NJAtKbm7XawEPYYpQXH78gfiFtMZEPEaVDYiMwNYmbfZtpiqPbGgaN5vHaGT8n",
  "key38": "66JoV1YfCdBKRAGuWCytiaqmo2HHy8E7N5fjCHWVWTSikoN6DxAiquSpbkNK2xXbsfvDh5yPSo7jdPDKDNcuvDPs",
  "key39": "2TGxptWZVFZLaQCJS9cvRmFEG9FVBz13EnHRu9cqMKVo858qwP6WnjnNUmNNDoLnQvb7UuLEB5NR1jARovmsZnnz",
  "key40": "3sgpzcdYqz2c8ixSocaQBn8XUmKWonSkAJth5vUSaz1ie1FfJK4mc1buUBM6xhkLRjw7JUgyAxPUXF6aqYwuRDjf"
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
