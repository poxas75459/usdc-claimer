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
    "7FdcvWX69RJsK3KNtHMAa1x6rVLVeiaKwhsdXTCe7UbqaeLzcNe4yo6WsErBzbWQGkLEYWesDwWUtcQ9GVrrCEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CABbsx3yciwApwoqz99rgc1gE98Bz4Ehr6s6k1ZYWccXG28LMpY6SiXbNsSkEi7YtycPjU9YpSQzYiKiR6q4mCs",
  "key1": "8Tc7F9GPbXgNFVPcJR75MAVLArK656k23R5dhrt3yymTmhzVewkvsQu7NQd1HyT9D6uBQ4GfgTPoDTvMM25cnhy",
  "key2": "5H7KGD3AcwCrpURDmipgFbNzGk3qv2UgZgmfYH2tWDw5fikouvduSqKkaWZ2gtAjXgxqT5LjhXSpkggDjWeTUVxr",
  "key3": "ew42TjLYnGpBwBBwqbg2JQRkoMQAZZysvN95apYpQRqSRHjwEK1VXx1D2HeEjAtcpE6RPA4r94PyHGCUwS16XkG",
  "key4": "4MvsdzmQhyinCLXhH53CoTHdmJ4iB7qRcLE6smXD2Ao5VkK66bJNLXb3Xbq8SoTLoiZW8cpnwmR3YLhZcemLinro",
  "key5": "3JXjUwhdfoDcxukWf2KvUVfpHPeawHkbwTfK9DZVQMiFFDedE6TarBjEG4fNknjbaVLzxQupuDz2Yk1ZCp4ubwbW",
  "key6": "2yzyYt4F6aw36KAXDzXkVvm12YeaGxaQUVhDf2ZzJWywoU1iSU1ENAW1oUEgEmVkt4q4GbjM5jDnegU4AjK2hyUL",
  "key7": "uiZRVbPJPsqsAaSbgC8JXGPMB8jvdJK4nvt3WjWs9gqwcBEJvEoTpsVsipeMBBCnCwVTVzj4iYqbxpFYouNSBwP",
  "key8": "5KZehM6URr3YAkUUm3kqeEyr1xFcEKhPbFHzZSzzWmEAsNgoVZS3Ls6GKm8615q8H2rmUptrsbW61LFfWqcVH6AN",
  "key9": "YurQdyTNU2bMKHzmgyQBVtU1ye5QxLwQ4F3tYkj8CtY8NaAYYjN5gLkQmy6SF8UF96cx5K78FoA7kqPjCBD6Ttz",
  "key10": "4X54bVy5UddMqjAeB1Dw1zsJQz4qnXKXDCrPnARuzWJTDbvff2Rw2PHGU4Wdy49WGkjkr6uBnwCR9uUbuGKWxJuT",
  "key11": "LQ6dhsb5caZoeEwDw8CmvqaXoiPxc6sAUWBuPJqgC6GrTUsLMotJjXaV4R2B5rnZTBXeqQPwaMbPY1QHxKVM8eS",
  "key12": "37CeHNii9H1Vt71RZX197XVyTVgmZavjLeai3SeLJGzYHB6sq1K4rq4wEUp7vdgPBWGAqfGbU9ejJHN3Fss8McLE",
  "key13": "2rqdEHf16huo8wPaWQgfNggnBXQnHGo4VangXAu2nCjWCAwkT4goKu3jhETd65LjZpHgGQ9kSGXGCfE3jh95z4QN",
  "key14": "MEFnb3GQ4epRWWDcdTqD6HZF3jgmGuCMM9kRRSceLUvqfL7mLoHp8fdbucktGn6Sjgx54gzoNSAgEvjrwDCsMa4",
  "key15": "vhxWE17XquMJisXkVMBiVmBio5W5sut3fRzJqJgc7PPVR2Fu12HJCRykeMGUxnUxuT9XaAgiie72LuvZtGkwYCs",
  "key16": "yj7Zve9G4SQzd2vqCTFqMeTQHhezbfo7AJyurm4qhiWZbwtQShtHSbet8BGPk8pmcJ2nLxMVYhq8cD7XLKx6qwN",
  "key17": "4NoAsw2cDA2s2yodjZ76vipWYfbEv9X4Q65eMuQv5WAFesKWzxQ634eYCUNix7dqm11A16E3D54tHh3ecjK52RQ4",
  "key18": "38WfsiYY8yB8dnGJuAXPYnfzHHqa8ZKvuXjzqeALakZU68uaF9hLz1FGpz4PEQ4brTdfrvhNUhFf7wnLXFo7euQq",
  "key19": "mnGK6pZTKokVrqFoRhSQ4EiXPdHyikT4rpRgKEsHtBQ1jPjRxnuhbCotdX3urFEhWvnxHjHwNdSAwHh3EhytAiH",
  "key20": "2hkVeSvfeHQ4wphBxkedMWtCLWg98FYCh4bWvBpcxBi8JopGnLSBZjAjdMw3RUkWK5HimGkeayiUTzyzjpxisxFM",
  "key21": "61f4ASLdiJVD4qD8Arh4655BcahxB8FEt8YuD2mJsYEF4EQR1eLSiU5G5e4JtJy7aPnTMXFL2BpL5DLrfqfwuDf5",
  "key22": "3LUS4EkH6VrawfguPLwrALr8QAbdq4aaUGDrUER8bqkHPBThNiz5Ky5u1Bacycg5cSCPtrP434tu5vMq3D5mfNCj",
  "key23": "4Q9uSc1wrk4g5GchKLbcyyskfgHTaZcLvfPJHrw7xV1kHDMAGwerRxAD83AWqmhZ7xgdq6NTMU2V9HnAMUioxG5A",
  "key24": "2CRGiptzDAud7W3mdt3juJ7mnRfyPr5FqHNirKsB9khosDFy6Xjs2AGpfFBAxgmqMo3mv3cE9zHFjwuLLTxMbwdx",
  "key25": "2BWNpkjsYwzECqb7YTQxqH1xrw2RDCpgzcQPh2M3rksGLTYTsvdVtDwn66qcawcZ8n28YX21UKhQqL4ci51szkAn"
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
