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
    "3DgiHbS5jEvtzbvPe717grgp78p7RCrTe83xUPzheEe6XqEY1pH6qnTBRTradeYngHqRSApMugJrAqSd8Go8pwSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CLkAv7JEfM6rCdcUnzqNcP58Q2F3HhmFxjkeXejBeDPYgLiWFWmrGXxCLiwA73Qohz6kpFEfgstGSiSyFVSXU7v",
  "key1": "3dJsTwaGjGRDvu9ArvopM5dGYjPqrcuUKL8fU2B5waEJvMB3dQkARiQA8PMFXt9bcdTMRMFEWQKCK2cZUMLmgLbm",
  "key2": "4Uu66bvKhn8q7VrSdJizG8gn14hi6RL5BBLyWbpWowond2sk5wJ6gHjYq9hgtHrdTvfEuwYeMKCFUZBtC4D5wBCm",
  "key3": "xouQFf9v21S6Y1cvBFHegSnTXeMU9BdghSgzgsidW3osFyyAYfJrNvSENcnP3fyc2DMinZH7bDPiUdbf5UbtKgx",
  "key4": "31DqgJu6Ums6g8L5yqRn91KibTXiBw6hJ5xkY1RzbbmMtYAeXs75F3UwM18iG1bc9TeQb58XQnEgQft7huFe9XzB",
  "key5": "5EojJspsN7QzNEk21mepEfEvHo2duYki4UUcZ47gGcV4Ev4u4qTZXCuCgFPpJYymaEt6mf4kiqQivTahCWr9PHP9",
  "key6": "5utfYqxd7zJj4pgQP8EonXyzYQVTwpTAumWKtzPREmqfWaCLS5H2J7VZzEwWVWuyL1L8UxxXV5fK62iNa2FPj685",
  "key7": "53NTg7rMbqzWzQabdmSXjEkTD7t6g2xC1pR4GoYM8u9CjXhz91M1L6smgEYfVjMRtfpiBr7uD9xSTSoHNpD6kYp4",
  "key8": "3X9Mn885xuVM4f9N9rcY9FkCycbujemoDysmfYwSBMdGrheXHHQdU8AtAdeMHFxgNhSeim1JyhauuSzzH7EMSnU9",
  "key9": "q4TMX8FhT8dRfbL7wj4s61MFM4LrawkLDoQxrYN11Uk6fxNg1mn1RvyJ3yoazSZGCfn72uJnLmS1XvX3SamNE3j",
  "key10": "5gSLBG6zvJpZfm3hApJTcdZKznP5g9n3LcLu5evoKtC8CEHEe2ymokeEZxNNeBzoHshoHyTjnMPetf51Wq4vGsuZ",
  "key11": "3QbJrPbF2F3pYxkK7cpkKZ3x8f4SAo3DTC7atXPwxZAgQ9kapyvXvRShqKxfjQewpUsbfF9Adrqum4TLHZrz4yQG",
  "key12": "2ByN8xynHCeMyNyPhukp6UAR8BYPMCAMK12yMZBzvxQxaXwqFyTKCRfZxdnHXWUJgt6JeAVKdHEaRGpWhY3gMZmt",
  "key13": "WfiRuWETnaTMRL139Wm2GGRiF8pfQTPm8jebmpSo5K7c7EhZ9KEF1QL9troJd6qV4LkZKisHamec59TH6oQXuQr",
  "key14": "3xmxdJkDona4BfJM2LiHQXrmcXiuNVdc9TEcYa3YSZckyAwszMn71ASgiFdTnkwk4LtzFwUQvCnWgDSjamcemCHH",
  "key15": "4zf4bGdRncE5AP8UbLNzkv7aBSvN8VjRtrf5N93r9eDUx4a44tn6tUrDLn9u1zM46M5JgR4KkzK4ERpbDcCVWrn",
  "key16": "2XncnqLr9yosb5U8jTVMqEyCCjbwgn6u5X9C1mTJbmhwhg3TEVYpPi4MV9xgdcPioE9pkCNjKRoFWP7jx11MgKNh",
  "key17": "4tYLvaW5L5CU6Ye2fXLxkbf3SAHAW4DkhQfhpuvWgAn5rVfHdzY788kv5tvACRd5AXjVrm1VMMEJQfmVtrRHHFAn",
  "key18": "44wYxaEjaWHcJy3btZNQDsYUWXSQ3KUM1vYdpFUW813og8YCFJDzYLYfC93wi1TcWGWZR6Kr12bKaxKwwEizF1id",
  "key19": "5Vw6oeGL5CcfHPxGxG7Ttgxk6zJ2XLqTWq3yEMq8GVv5AQUXWSvZkP6SavXV8dgSJV3N93T477F6GHBG847KydDL",
  "key20": "5FcDamW3vg6J6CDwP5qww8ReZVr46PxYz6xZyq6JgnXYB5qNNrxQVhF1gLd9nZRDXGJUrdYHic9TFtbcEtksbyuc",
  "key21": "5XtRUEeLwM7cWKuo4tKNnchnoWQijzYn3oDU7vf6AMzPjXcVjXQy8CpM2nh1qZ38ohyQ1B74EPg8FrC8J3HD1R2e",
  "key22": "3JoFtwyHfcaND3xkw7Sa8cSXq7CwM6GnKyrPFuAx5DRAbx1KtuH89dfhRoSDPcp1riQ2xyeU2W1Zt9ocXwANftvY",
  "key23": "PQTFc7UMJj5q8nUiB4TvMVjZ3GRFfiVWjcT3SQoPKTCcPaSwR2duLX3Fqkw5o2zUckjPRtGhT4JNqoJFSXPH5me",
  "key24": "4JQjFHdiduNq8UZCV1DvQ3FSEx65XC3ZAmfmDeD9XNcJgYcmVPAAYHMwKkWQVDcLkoy1znNQfqsewN1ZxyaoWhLE",
  "key25": "5Ntqnz5oVjjn2VdC8L2yCFFH8W232YpLRgJM3CMCM6TchJ4ZbFYAp73h7kvNEqFjUFNRDTnWj76AcSPkC41BeUP9",
  "key26": "3hw2EvXBkhWzHqZswqJVtXaDXeQxgMxo8RXS2EoAVUqEJhVY6GzZqufaYk3MmgPAYkaPVbmBeYEM6P7VXDwEiVHZ",
  "key27": "3iTAuw4DSB6XC3TH5wVnrwCQUUN5fF6Y9xeyW8tsJZ6NQykYv4UNDpgM7Rkrpwf3wrCmhJfaMJc2hxsdKvtWMHfY",
  "key28": "2ZawCtFsekLq5rFbmZu2caea79Zu8sW2ASEyeVKHvspaPhZrnJvYA73Y7F1EEkKpjQ1HPR1PwL38p2mQb6FV8kaH",
  "key29": "hwqFsmXjwdc8r8YvRu1gKUB2FeNK6ABCtxZTKDj8ziJYTePgv3XbfYcpx6DMtGmUDMaT5PVh9UX95NQzb7b51Re",
  "key30": "sRa1HoNRkRCGVSCi4HbHym1LxkMBxMyz4Y8A22xuAmEc6i2tuhhXfmfPww8bmXYeXH71oBswzozZWxezi14ZpW7",
  "key31": "6LPJiaFxKU1FAivswtDV5oZeqkyKoKXdT3dzJ3ioZN5RUvQHPN7CVY2TQPipAFLPCxUqAjJ4bFR71fqrrqfiHHV",
  "key32": "4wcMN2hyZkrrBes6xgAx9zPhvABjXb5yxrSfmwnuAM8Qw1fwNZKsN74bRNGnNQ2EPTFrsNvJksJE773QSU6YrvFk",
  "key33": "yQLqsL5ZSnkKB8TwJi6kYmESUMNXLvRvGw1rprzVJCUgwqjn8BaYc9MQeCU5S3788LUEm98RtQr7bPtGZp4jggD",
  "key34": "2LHbhLsJEj3wwxNLauzgN4XgZBWNv5mbfsF17rawPS8jQDds6K9bjewi1H4BR934VY7cKQVFvPdzVRgFoiRUjEeu",
  "key35": "aSM4gJkuvRAtq3Gj53nwT1q1gRz1otbaLuSXV2sdE1xWKrpZzEGA1imJGE2Si3CPoEnPiVx1HB8Jcr3t2PABK7w"
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
