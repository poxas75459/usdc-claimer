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
    "5RYqcGMU1wVEUErgHVrgg88X293Zdk4mXwp54Hg4CGi1bchA4RxhbxrpNuGWZfVm1hKQ6jfAdbDPNGeV44r7DpqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LkJugeVQrNbqJVbQjXjsGziPXTpf2kH5LtyzAUuQLmoURswbU2hVHPj4i94oSD1Sya6tAHMSmGjmspaPxbdKwBa",
  "key1": "35AZR9VMgMi9bQPjFYAf5ZGbo2PVu7aeb28F8cNpvMaThKCY6ygnY94xmv86weSuFns4ZZTb3FqmgeNjSw6S7VJd",
  "key2": "3C9KjsZo5CaYGVWorGJ5teKLLPrPQJtq6azhmA2MPwQsvBPnTto9ttXZw4T9MCKnXMZgH9uQbhoomq5tC5VQGq1A",
  "key3": "23sMYbWNSmHmyBdkQ6DxEwrJL63bQWVqpJM69XEnXPjj4kx1pp717U34eJ4QJC9SozPoNmN7ovkesGZsjYF589B7",
  "key4": "3SuhxATEUhFUrD9hjRxWqKP8w3AH6qXoAV9eZPUyrWfj3ajVe4PpJePAd25qifoAvhnDTSXMf22kLm8qEBLYUwmN",
  "key5": "5weF2v5NpoWvawu34MHHYYqUzYu1pdQDJBUg7xa7ShUtwUCG2hMCSJecwMdKuTWgutcsR88hoxeqKh2YbH4yTPNN",
  "key6": "EFqJFU8NAe1K3ebaa3tGzUb3xtiJSCiARvi8Zavy4JFoDSihDvswiKqkxdsL3dfGUfTLaZERm9zR824i3WWav1w",
  "key7": "5YuBTmMzVEu1fgD5iimQxyoXHHLX1oRfXzN65bn4DoN4tt8kBX7c1xk6ziPcYB7hAqi3FE9NTaHmf1UTvAp75aos",
  "key8": "46TenVFqnmBrEFwsSiK3DaEVS1wrPWPjF9FYffDticY7haaLjQ2SrLn8T3hfjzCUoLaAe3U8okqRNLmaZLLzcf6t",
  "key9": "3iqU92fEhQoGUEDTRh2D4BiadSSMh9ZH9QD4Qm3phDfkbBoA5MUPU1kviWxdwzjHeKrGNanNDNjin598uD4Rh7m8",
  "key10": "4tg2it7BZNH48bpmq86PzM25zDyvY6AGNXzeEez7j2iJwTjQAhoGHYBygDM1PCHEs5wWkvynLZS2H9hdaLVRgSEo",
  "key11": "3PJJdDzmy9eSnfKdFPW5gcBKAs9iDtJgYNUwP9H9Rj9gbh1WXo5DNCt7JWz7raMuufbmizVGnKxftspZyW3mQs8u",
  "key12": "43T8CexYeGK6ZCzeE7o5oMdDS4ai9LeiDDBhzfqYssQYPPEEs7KmCYnrGDbGr51xAfgnDDGb5oMLQvvvzP4enQSs",
  "key13": "3N9Mc8AheXWcDisebhxqHxVijhkXTyj8MjUKfSupmA1a88xx6TsvRxtiAHwZgQmQ2z42HR6E2WcJ8V5WcY1vHP8V",
  "key14": "2gwaQpetHtwAx5MXtD8fcFkhSdm8seh7cHVzaRgeZb9iHR114bdTL75LyZUge8Z5Bmto6jUhnNdxW5CCMKLRKVVc",
  "key15": "2jsKD3ssEchmDkoGTdLB2FP1NJrVHwthXfACEySQ88P7JGa3xNRr8KAdVS6KZNM6Sp9Y5h2WJpcTV6CFXoZJh6TW",
  "key16": "JTSSBGg5saPDjdKU3vN4TSPXkd1yR8oa8ZXSMV7HFcewmG3dt1zgA3QFMUSzXejba1zeCzUUJW4xfnUTPVqJ6a4",
  "key17": "5prHX2swv3L2WU5yFuZmXmy7tGCdSJejmwVzEytNVDMng7gi79ZGRu5rJKL6sQrwvsfnCYawMCmTgX5yg5JxKQK1",
  "key18": "tLbgTYe4i68Uf2jmgFPbBxNDQ87u9ysMYVRhC9B3MT6hUrQ7gimHLCdLyb1WMqTFpqnvhCJLWD78Qjku92QWLYv",
  "key19": "4Q5WiPsvBCCERYASn7o2QnVUdD5GxGgsxYexSNq9dviPRJemdsXSyFUnn5YhDzzJHE4FC9Wwz2KovfTTZpP9M7CR",
  "key20": "4M7W2EmfK9y6rUp6q1iws3E1AdxF4tgPgLpC78GuWv9jdwtA97tvmp5xJ7TyuY6yZKqvCpN8DBQ8xmLDEFEYZftQ",
  "key21": "45WCfy7moZNEZT6Wa7kKtuK7oehd3WM1t8nrGaqUpdhBovKPnAinR6upFVdsTfwCEXYTZroW4vryUYNbsEhDXeWV",
  "key22": "4TyXMbwYrzq4h2dT866xgH3GVQJdWrJXTasbuyNSa3QMW8hFMKVqybnJhbRiaNDg8jcDdBRkerE9Eu3q1E9SHQnN",
  "key23": "F3V9Z1VWf4gPW5TgFiyze8ydxrnmQPaMkiA8B61jsF1TWmYtx5K9hpm6JZRHHqnaRJden9a8CKVXpZcgcZ355cJ",
  "key24": "9GzG2bX5sGKLpfa7GJfnw6iK7nXyS4QrR3L1mBqPvU6uDJ3fyT9Cb1BEiQpwALTPJvuWzoZBf7CvJ3nZtqDDspz",
  "key25": "5juizjM6Q3aRJURSz7CEeDP5JuE8KLUULJGPgWekjcd38K7yKWiNDLubeiZz2A6txuBpWnzvPoAZQGaxFLKxet8c",
  "key26": "3ctHvp3nRwj2XHu1ndc6RhfzUUgX3Cit6bHk9TChhu8QMwGe14EwDnPbDUp8FveaSB58jiwDqj9uRNrtJdxfjcL2",
  "key27": "2JkLV1Hy3144pBCjyANCSe6a5BL2AY8nfnh1p6ipZu3K8z4FgJDp2FDbzW9qdqJP8hW1fVhHnSsyKmAVTNwZXcLK",
  "key28": "66yr9VNNNx5o48i6sE2xfJvjdzJJLL3rcEyLHQiSV57zPU1ADEtpQ4uRoJF8hG6UzJZ8UQbFBDwvdUejWeLM4quC",
  "key29": "58YmHnHB46bS7hvDXAkwCmeRsVtYRKQ8Mxdvin2HbUiQreDmcL6GgXtqvaYQhRLWX1aTxZqSpFPU3jmdPyL17MBT",
  "key30": "4JfKyTsrFbvmWHVViAVRUzM9ojQRKMautfXn9BW3HWkicp1CXYodUCAQL4X36NNJTVp11wi6L6itQzGRNA4iV2Zb",
  "key31": "2E7RdUFzHUCnhjFLzDhPsXXwxuea4cZHP7bdN8Lmhu3cSWwuhTEZkUaXEjiXS39BQ6P72xVaKDdYkd2CdzRUuV9s",
  "key32": "32vEVwNgc1HVpjkGTEtwGu6YYEpEvbbECmdQvbdMPfj9Cwr4Znhan7eq7Zb1jt5mmZvXxWoNtsZ5fAdz4d8pcHzd"
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
