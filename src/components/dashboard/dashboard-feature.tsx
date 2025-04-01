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
    "5jxcYgCWQYkFPv9cxPDpvw2g47Zd49a9Mm7XG7zSKNKAbbrTsnZivpdPWBmoH4kWKfMqcBtUdCWhVueL7KW4QZvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QeNKANjnfYD9BnPQsvP9SGnnWiDRRo3VLKAZvBqZnGvmFdwQAaG5HJ7Z3t5EZnsbduxwbcQJdpSAW1GwKVc7qCH",
  "key1": "5mKWq8ts6AH9MhoAXJKcXYrtc8kBXxxjDEVsouqpvFu4oRhRCUjuc5r89WquqN7RnCyxnR4CmozomJnoEDzJ6ma5",
  "key2": "4ZrYUBjvfjLkE4YiHBqtfvKebeUbHTUDctXZvgjA9u1V1A3okQpEtH7yBTwmkpfyHKVcbPjr3h9hGKDT8CHVrz57",
  "key3": "4mMnP1NSTdqxK86DSWwQrWEScss9Rr9AUBn5VzZ9nsq5Cji4yTvKny2271deDfvmvVvU3JhBhyXW69bfnk4rsk3R",
  "key4": "2kCGF4VVtQtfaH36F7fniEVGyEwujBkBhPEuG3pUPyqMCeBtrh1TAQd1jzavnyBnFsFyXiSrgPRZTr9sxSieJYX1",
  "key5": "1ZNNQ9tFwRzMGhJcCKVwTUP33nj93Xkh63gDfwToXsZrqeSBTVRMpMnuE14rDrdBCrRTknsaig9kym26ddVk1vD",
  "key6": "xF7LwTjkd76RBmjPeHxgy18yo9gNKtPYZpHMFH6ykYzcvu92ck9ewN4H4xEzGArqJJqwM9M16uauEq4SXFPuZLo",
  "key7": "jYTTU2NqRoUu9GVV5zAAnw2zpXNLv7QpvhYhyJs7HvEN5doTCWPjmiYvcSHPUNCafXDeTmQRRBLHBzEeX7JKndq",
  "key8": "dtXVLtZDy67yYSZMJJYXrUhVAWVgiNaQ6NYtUFYrR13NsW18gMNwTgt6eYjCtPK1sNc7VPMkTuHr3qBnadWx5EB",
  "key9": "ZRacp4htEUwS1LpuMJvCJarJmCuSPX8Pt1t22oMQ6PTyCcro1FEEjXEbrTtT954u5a9YBFZdDFQszSqvJgKzGJB",
  "key10": "2vvuEa13sLLwmtSDtif9q3xQmuX7VrPEE53JwytDYYPTSaHrqP6Ua58rZaoupP32STb298Vjz9r1638943Qegxvc",
  "key11": "58dgrCx83xaxbZHv5xLYzDJzGJ81sJPx6xLsbtPqZego8Ho2UUcPY3BHCzHg4UZNNQTXztZXnNkJTKMXnXTzNnNR",
  "key12": "e6vXFBfuA72SgQsNiLHZzXFBqbPbobqWvS8mjBkb6gvWyf8otAqs9zKD5otbHCVedmLw4Dzgj4KewtS9T42sZNM",
  "key13": "4yPtiUHt2sLqbnHWzpFjpBM1nDUSLYQC8wfV5SK5o8RDjLK76zxruQXYYqJPDmvjNRQCbqw3YwprT4Gc95BRaJhQ",
  "key14": "3rVbizY8vGy5b4vB2JCeqz1kTRQEhCtewQcDivdRyTgvYph66qr9LJtvXzSm6aqUmYKgBTEHurk55GsQbNF1xdcQ",
  "key15": "ic69T2NgAqdYJF43q16ihV1GNxzZBGPycCnKxuhV3Bufrom5N9Eack6e9wkv26NDqHvEhj34FPvggAop9R6Y7Ty",
  "key16": "4wqkFmJLrYApymVaUESgK3QAeqcbZzwXc2p5tZPBLA5X8tzKWRKyM8Nf9FExMCe8r1HrxykSHDps34AQujQAQaZu",
  "key17": "8RJ5eyKhzPiMMh1wJwezjiZkYi3z89XpDEYFw3MxM1QndMUEzHeLQRAmQtxSxH3hejLBJDVYUTD1CEA9sgy3eZY",
  "key18": "nPAVpZ3MRwbBcnSv1bxuwEqYxvT2GeGbwFiZQTiQUcfheMJ8QQQVLzzXeQSSGP45SxHpYg7i1tgAma3UccShXM3",
  "key19": "635ix28Fu9pSta5o91s6nxaFnM2d3JzKhviLqZEPHmVVYqDeWiPaSzJzCKiqug5QpL2Nw11J7FWLwCmfGksgfFgE",
  "key20": "axGc7kxPzDg1nMfAfC5fSA3BD2YErAPNdas7JPEq4yBMbEBPKfJtJNN8CD3wr36hZnCXfZjMm4GDiHZzogrtNWQ",
  "key21": "3QFgUuywB2j4adt9vJKHT3uHt9XzJ33ErjwuBciotBM6mNfvTsoFG8wGARn8dSRHo7FHeJVJCsSqXijGb55RvE4y",
  "key22": "63Gr627mNegpMHNr9ipGhvTvB6tgXJnkESPnSx9q7ym6vsBwY8CRfcoeYSWnn1SaoW6wCyuY7gVWzfKdeBh2yuGj",
  "key23": "3pCthriZJLf2oVjX2qeJEVduZvPzwxveXNyJ5hrLKd4BrVyLsyML4x7Uv62aZR3trHJgxUA3rw5CiEyxkxCAADTF",
  "key24": "5tPPZFLTeYWp1LRpMTuf5UMnMHHZYUmTsRPtcn1aiQrbYrjTaqFndBt7UC8qnCztJsJrD5ExNoPcy2y2ZKgnpaNH",
  "key25": "4zrCyjeSyHX8BH7JQiSy5LJf1eNgR4kMJCP6k3yvDWkoEVXr23id4XgSEvo1VypLxEVmW1g2eonhF37FXt29PrTB",
  "key26": "2VVma9SJiHwn1wkv8xsJBsyqpwmMRhvk7TcuY3BHARCrKwmto2thJN5VyYCmrKLCi1hqZuNdF4EakN1Z5ApV8VGz",
  "key27": "4n6XwtzKCBgPKoq6xjkV5JDmQCwTZ1fyLHNkEcPNRizaw5UNKDjqnBwb8kzTLed6yGm3WYfbwBoYWg5GTXbUesBX",
  "key28": "2xNbXeT9epbVUC6YQeyhnHk7VHBNJV57K8GqsnTK4MAnHvZkmjr8ThGCGA2rRHAcLj5kRrDESXK6sgtWdxQTwBzW",
  "key29": "3YmZ1jnWx2rK22LvACUuYJiZHZpbs3VmenRorVZ2M8tDGTfoNS3M3wMGUmRbk5PAG8K6RiAoHJYmtvp72NZVDCpk",
  "key30": "3y8Y5VU9epUQNt1whzKh1bSCCW7iQBw3kuGyQ9ExS6Zk6UPeP7ASdtB9jjdRGViB4L9GQ3vBw3NU4raHJdviCjSe",
  "key31": "4Evk8sFRRWRSbH6rWoZDoRxWPuzpzDV3igkZye4HuYzeCUF1Xqr8Rm8jm5d6b7c97i6FP42KeNWrGtW39iZxhK8u",
  "key32": "5KmaMYmY641Rv74p5UFsLY2nZ4JHgCYVMLSUJBxYX6oeHjdVr75zSTh2aLJRD5cHW1q1yD5FKPADX8cWYeBYjsE5",
  "key33": "2kkY9QdgGJgM7UjDnFedfqD3W3VcDrCmbAaJab49SCz6Wxqbmgrn7eRfc5dcMh5LtpDzJvoz2nzPQcEWJ5WXbPXk",
  "key34": "5QdDp7Z8jGPx5Xe3AGqNsPSFpARhCR1iLUtXioLzeBTM3Uh1vFYukpEfKaGrf89DpV2BsXqAiLmPHqrya3j8rfW3",
  "key35": "5Wt5bUDdwFraZvSDPnCsKoGrnx2MC1ktbQVbeou3UputCB7SrRTtw1pac4Z2ZxhVFUaJd2yj2ttju7NQsqcrdv3v",
  "key36": "5xsxZmhfakHC2NPidVncU5kLY247QytzHfuTFj7UfvVQYKqkZqK6pWzoNGF8TgX7QYM4VQma4vKaLJCLH6pEsxoC"
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
