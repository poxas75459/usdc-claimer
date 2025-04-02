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
    "5SdEvT2zADcQB7TYqGvtrt723Wkgk6yp1wQ7TBK9BCGfFy5xfijGESFFHSi73P8G7eznpLsWFEQn4VjwWeja72rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EP2U9qciV3RAtBDUBfrjtMNkqHTugzt6vQQvALLp42Wnj7AKJ36i7KZ6Q5snhjE7NzSte7czL3vnX9jZccSZuZz",
  "key1": "3GUCfTXqexZymJ6zwMHuGeBd4kPJSMYScoSi55gZeTLfV96QL72ZM59nFCEq6Eysuu5ecARGZQdRYhxnA3AdJtuN",
  "key2": "53S61LHqKuGCkdiDDAyaDa8sJ4B8szfNP33J2Ud9V5JcHTwfBwUdFZH2V4eNR4R3HZsSbJcYjy4fUUevF5PVm1R5",
  "key3": "3v1YhvVxwbQS2tcaAwYbtYn161vq72icsn5eMmHdAhCWKR6Hft4whrWanrYrhKYm8bsrPjUb1HpEa595AJEScMUJ",
  "key4": "5q5yD1m8L2znvJAftvUp7U3aeLWXaWpQhExepi6tibCtENrV6pAm31PrjxWLnKCfjD1gq1WC1Ko5ZJdYh5vWxq2c",
  "key5": "Mc37LaqYJhdExtEtRdF13HFaaY8Q4zA14Y6Ud2tpMKPWmdhzjviBKAiqMuYos3dgEMYoQhTAbSwVVsb8D3U5qbv",
  "key6": "3eMsrKBqax9EHX63JRVDStgNikuuFhdGJjAfGG2jMtK148XXKdzFhDBHtGinbnmA891dsFbBRSE9yK5mRkskMucL",
  "key7": "3WjCoiB1jio5uKuGaUo2RjjQ3uGgjpuzT1PMqHZPjFSnG45dfDUq7jLHhovJyh4qcbZMtPodHLjTscZKQDd7rUaQ",
  "key8": "4SHd75pdomJcv8N2XsxMjY8ymoXcF7qS7B7kKvuXL9i35TwbB4U68oGWPQUMAar79jEwQScATyYVfYNiGbnaLhXS",
  "key9": "3X5q4kwYZzQDiJYNFhAvkMFvpdXXD8pJ46WJDZWTzPjXjVWyUrsRB6soGAkoc7m66cW4qpJz9xd2Ms1cecJhkWwK",
  "key10": "4NDCk4WwwVbBwgKFpMzCCKifdkHTzZ95G8YQfoa52Yw8zteHK2eupNp62VkWjE9jgHwyZpNbVtrTVCC15g6TeYXS",
  "key11": "2f2c7BKiVCfRbeTBXjyRRBBvBeyNQSsbsnp11P1dc2Ddbk2KH6P4w7Xm6NPeLYy6TQAggwRdpXhqgvCJqwLf6t9o",
  "key12": "5GjREwcwS1QYMXABmwfrZghfqSyR8asEEqimxyNFiipY9WS48BAAxxDzNxQqAhv25kdzu9r9h1haz2hXzmGPZzSm",
  "key13": "3c369uJKpYL3rkSphnnHa7ms751BfJVVByMHZKVegoZDPmDRQa4yN6g6iMZDmmqW9SXvVhJ5y9DrX9cQhHm2BMYb",
  "key14": "5E7PvX88uT862jTa12Q3TGs1dDwAbwWWSiaKhbJtdt2M16abga3PtisqFiQbxtydgmxGnVFzTqMQw4qPnvuiUyru",
  "key15": "UZTQTvyfyawtNBikHvoh7jEfWxGYCm9P7koWaeKH6q4os3CHAScA9TVqbNyBAjsEPVPr91Wu2o37fJWYVXMFUCu",
  "key16": "2xmHvNfbNNiRiH69gpLCPgfcSxxpmVAmZN6KvPHZ121C7AcixGJLGxCRRiri6Wd7s65o2MuSM1WMzF5N2a6afEAo",
  "key17": "4c6kbaGyuusWZvaiCYoXH7QwuCqMYYkrPyHSk826qmPdZmusADJ8mSwHREm9ki1V97X5NzecDYDBG1MxNXdrEZb2",
  "key18": "D3WX9pVjediuiLNd9bEhBXEitqquR9heX63hJJbSukiRo9XSsN2rH6tLxJefZeG9g5MLU4K7uzaWUzGQF3kVqiw",
  "key19": "39McQ4aHLaiJtMeMzL2cEZ6AfCDiT2ZJnseoWPmKVSQSuxzxJpmCTNXqTGjgKX1JzFsRFDjjcrsmG48vq99GhXY",
  "key20": "3RcsJMgnB8oL9JVem2iibAo1mEF4mfsGvKvN3a9QBqHmKTFbN6Uz1QPVcXGQbZPcjJYbNLen7tEtJkrgGJ6Lo1gu",
  "key21": "3C4tkSwnPHyqZknXN7siga3Cs7K3KwJD2Y9A31vjB5s6BoAipvdmDVUmBrzNHnvxemkcHdnBN78Fw2xtQbU6Nbtk",
  "key22": "5qzWQpLMLK8nYt5DzcGCVRQRVZFpKNvBDqWE5ntqEMXun2avV7MFUmE36CoEsE44NgevzUT6DXXgCyvuCVz3qkQ5",
  "key23": "4LPa17MAucN4kMdswLqKXiMUm9ryaNSdQocY6AryzQi5hUKtbWfL13crFDay4GA3vAsBpFDh6DuRmNmdhrfx8b6t",
  "key24": "3Ag9uUWn2S3UJV5Ct34gyobkCpAhC229Vqy1rf6Nw3YRAYuEwT1k8385ykmzau86JXZDJG5bXe46rv17MJ9xGD7U",
  "key25": "3WD3aQk7P6Wj8VSPnPzPGDm6HQkfuDc8SqJSqKwpQ9bM9VNEMXwhrsVsQxUQZdcAQqbbh6yz2E78vyXNZZ2xD21e",
  "key26": "4ThdQpYN3L3goukYioDijkpQGiXbgnPA2U1Jw4Br3thLtTr5bjRiucXZppKjMeCwWzwYVnaAna9VWkLTSSxWMNbL",
  "key27": "3s2TuWUSP536FXaXy7XvYss4zdmgtBhg6nHPCMxhsFRm6trtgLXnm4b9NP2KFfic5SGdfrpBBR4GQEKJURUww66",
  "key28": "2zYMPXuAqiUuz12ZgqTdi872wLnWDfpVr98Qp7XoJwD2BKSZ9khxdXnyQSH1gmWhsb2BoUKuwtjdtvKLDNVNoX1m",
  "key29": "2DpJE1RH6fuCPt8feFE9ftYNLj6CmXQGWX6qWbwSQbCnQcmkc5KsFBqy9xXgvZW3QPVnsHHxLW1yMZkVNRf47qUv",
  "key30": "3TuApkj42zsaN5KQHYsSehx93woq9VVWmTiRv69GiP4B91geVsgyMf6Q5H4vs3zVCqWUxWFrH8phPG7t2SCTZVhJ",
  "key31": "51Mxe9wsqv6tD8DtoRQBSz5ick53Dei9SdqgYKrwFRWtoHaBqnjqMVBQmoC2nCoWEYs3ymrVbpE2qrDu5xYhKUuQ",
  "key32": "63861sThCxokwXfrvAyLkwfKmKBP4VnCDMr68jjpQFi4KcXtSiotQn46KfFnq7QrdWzypumcobeCEfU3MEdKMFPn",
  "key33": "5gB1dVoVmksJVNvVAyd7DZCks2fpP82TkREz68eTqCZL5jt1unJ9dX4RdJUdbX5HduDn81KRzAzFi4rNkwwTWgDw",
  "key34": "4QS5QvLAikSJHXS7Jb2CcPijTSsP8uxJwdXqNRxnHgmd2wnnf4EXUVQX14oBpW8roAZzy9TgAvrgXLn1Kg24JNKq"
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
