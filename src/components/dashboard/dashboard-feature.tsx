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
    "548vdG9d1gHfncipqN9KGvRMb4zfPDXRNwT24ounLgwLLtmKfSUojuVzHkd6t3vxwqTmHREAzbdyhYJNr3WXhopm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V15Mud2TXpjQfzkKq7y7gXJVSU8kFSWKb48rdPRTaJqaKpBaFfrBrus9SXtfVS81hZWNGyCn3QHVWViPhKEdi8M",
  "key1": "42eEr5oF65ng4RVK9hrxVvB9qH6dQ24ckHbrSJgtvCcVchg8Shi2bmszoQsPLGk7122qfkJGd2w8CJmiG4rwnMWo",
  "key2": "5QXtPJCVxFtjxQxaJBejnY7YrVu3EkBdhJGNi5NrDGZMtztFsxqv6Bf3Sfdk7fWdT4gawA1FBuhCvnQ8dqgSFQoU",
  "key3": "3q1ZxnrG9YHkRASbteSTwkgYuKroeCYv9DKGajhebp6JSF7qWHUX4pRxJUvPWQTjzbNaurvPyuZD7TkZX8G2jPYC",
  "key4": "27tgsMQYhNwyAahHteTes724C4HzFEpMyZiRFinvSrtz4CdE7a7yjxwMmByXSuQLfAdpDE22s4FAxtHzxTuvWjSV",
  "key5": "4L48w8S6bMwA5BtnxyKBp546GkwTH8fW6Kuzz62XQCjKMEigTQo82v655NCmMdtL79dF9kGSigacdh3ddmoLz5HU",
  "key6": "5RcxWhooBJS3o9CD3o8KPQiNb3cVFi9Vrq9Yw8TRmYJmky9pHc8eHD8zHFD625qDJrcSstdrE9kYNGsJ4Mo4RUbo",
  "key7": "3A8AqiDWi1YgVzeZqBGji9Hw1AJa1hWQpDGohaPxXAvk7psuECggKTCKaEbWHFkctqGxN6wgxWTWFjxkyHXmHHTn",
  "key8": "5UvTJghrUM5hbVNzwvgVkE1Vfd9FLSkZgF4hqm7rAG8xYwYgT7r8owpfeFbpKHK2kagpqDRdriLhGUA5yw3xdV3k",
  "key9": "2eaYsobC8qkPWhgTV1GA7cPBQWQFTsoj8SnQroGL6jBUr9a36HtyUvfaFSVpQ7u5rKLDJzAoG5JWheRvJKirD1tT",
  "key10": "dyK2AD4mrKpr8MoXuxy2eyc5hy8Dkcj7R8idRULQH3cuH8hMPVNeAQg8snA9xEvcjW6WDyqrHEY1EsA9QNxfH2n",
  "key11": "2yg1S8EKGJR6161znhLPNtyqRAVk1Hx4gFU1EqC8mbQdoFbkc61D4akXrJZ1QM7ThbRm7StLTtAAPAWG3UaZp5t",
  "key12": "GmvoTHwnv4So8bqanD8M2eEz2QU7DMPaRx5ZNA4X5Kh5YyExR98RwhSvxnKKkx5S46DiGfWWJHpUdSixeUZnpTM",
  "key13": "3Ht3BV68PNFvXs35BikXPr1DmTzDvRvwTE3NB94YyTYnaoMiZtXX5yHzJJBSPGxx4PzN3ckcbjk22L6sbWbgop6f",
  "key14": "38tNpkAUR3TpcaZYoGTdK6ptk6MAL3HWAp46SJQTDdT3osjE9JSZS6edaip6dVzNZjRmWgZXyd1tjDgR7t8M6VjK",
  "key15": "3m3WChjvrThSPYZoHBEmrV7ZT5zcCdvTbiBLSXak1kxUU4jtFuNMGmX7bWd2FFZFHaSM4XJ9aJ6eM1dXASGbZLDr",
  "key16": "28yZmXVDpMT2DjrcX4szQzFxtXiXbtTyywKYgmS4MWkn7criHWqi5vUPKHPiENZ9ALPgTYobi3z3RKL1n5TPRbfS",
  "key17": "2Zm98m5tgBS5X6hiNKLdM56hfPcZytjJa3m4YzCzcG6NEVn8UUnNgwn17AYa7QmVXYsvVyy5PSCX2da5HJLyWvwZ",
  "key18": "51Dm5TFFrUWviJ7F2Fh6vo6cZo4pVojKNVQLcVLGuiEANeXd5viJ9JFiSzX9bEZzef9A9Bc6yLFqDEVtnvUkrV7D",
  "key19": "28sC6PaCPc9ieuZ3Y4f3Meu6J3LcfaNbir8iWXtYYNGBJYdnYPdvr8iD8wXNYL5CdsCgbzXYWtqxbgZyRae87krL",
  "key20": "vZayyEEzxhCroVM2pSMpG82MckDm6QGD5m2vqdB1E9a5EA1xYoucMsDJceF2WMRh4zxTrrYx3FDqgQARpwwuEoG",
  "key21": "5yFhFVwgfG7PKXg1ksY45svy8oYjV1JvU6khcuCaqTzAFiWFsc6k5mPcph1EyhrUDRA3t3fsSSsCNWhCPU8Jqpcc",
  "key22": "QePLNkH8974RvyTMCNXoE8oLD3ws6CM4fHyeQQN1N4JSkpx7EAskdudzjeBoLM3jvSVfX8wXuv3i6ZjjaKNp4FM",
  "key23": "tpLecXstvd4zUAbcYggSCcFJepRFWzQrWmvHqpS1y1ScejFKLQpTjn6dxL5wJRokmWjrWLTi9wF9tuBUejgbxrj",
  "key24": "3h3ByCL3moFJUfiezmBsosd5CcK53v5E7DhaFsyZYMru9hNJNshDnwTNBeh2CcBEbivYiiV6VKL3zoYhZh2o3j7Z",
  "key25": "5v5E2FYRxnujBbie2WgwGM5pHF9n4sqmuLhQSF98o84x8cQVVgYZuviDvFrhrZnqSvecTJb89WDX4zgyZ7LrmDLg",
  "key26": "2Ko8bbFUJSbc3ru37nUoAX75qaXGe6DWmv5pbuKAiD4Wh3am3xe6s2RCWErPH3fvnd829W3QbHVJBcpSTP8qNsaj",
  "key27": "3PqX6G6C4wYqiZv8Ht6THSdyt3oqgnUfp91V6TS3u4SBnz8F6LvuNuoGWjSwpB5yakB91987T9xrT92AXmJ77HQV",
  "key28": "5d1PoB84TihfWDJH9Zik4nhxqHjCBtaDjVkntyGGDv4LSz5E7raxXz2YXVVvebvqCAXZuoLCnkzGe7PmvtY8Mkfu",
  "key29": "5g4HH4vG6pnZkNbGrsqx325Qrm57vbqxGw7YzWCAPj2kcMJmhfSwXoKWc69wNxjmuxkTjXM2ipy46Kwa2HbkboxH",
  "key30": "3fnJSbi4wJEu6Pobq581tC9f6xxxHkZYs4P7QeXGKWL8rd2qscjLiTHATC5ah3HfomcgYGyZTbVEVJFUErKbfYu1",
  "key31": "4Wsxs8tti3NgVrrXUxuHnaxXksnW6cJ7AjqNt85bBU1T7su2bssEuCzy7pzguG2kpg3vRHK1QfUojv8Y1EdoQN3K",
  "key32": "39XEV3yCN9ZgCXzjMQh5kYY1PUFkdWSPdrXNBoETCBe7a3SRs1PWXgZ25NAtEgBUZ3woPKFJ3aSKULov6TvCnHDD",
  "key33": "49aFegMrcwXeAj4JaNkzkmKB7CP59Ej6WU6yMgZVkPmW9Up6H1EBdoMWQ7YrpS2M8aTSvuunirVN4SbGpu8KZsiS",
  "key34": "5LUXkkc7q1VRNdFXg9PSXFNpMQZaTHowuvtyuuVRQv8aEpJrwNCw7NcFoG6R7UxuxenKouuk6N6wmtKrDSSxjfhp",
  "key35": "3enH2viVGLQ8yBrSFmMkoZuojNZhU5ztDvv4yik9m4xD843YVzYEA7GLNNR1hpCkjGZBsZBZccQH4WRmPEo6STS9",
  "key36": "2tYZmB6NrdeRXtxiJGQg7VmBEoBQxJhRGVfsX8zmJ2rdKsnDUDoGm4sFFcuotHjHYtg2WRtJSCeAu8UaSYQEJZNa"
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
