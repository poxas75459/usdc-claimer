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
    "5QAhzuiMioRNpZBuaMsQUdgvUZfSnqYhKzk5yR6sRtgx12Vavt6sryAPK8zJ21TBttG8mEq6faBBC58SKmdz9ksG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyZuCZxhNgDndV7WfWdoMgph44QTx8L1KoifTHTtLVUtuWZDwStdnTduDy7CpGGNZG1NgNMX7c4MybNhxKgKQsQ",
  "key1": "5dkmGFKn3E6ueUqMajnEYX7pus3Ycy8yuUjiYBaGvauoYtbXD43ZyEVFFJ5MiQyznMZoDXJ5dnAptfeV8fgJxyoT",
  "key2": "26D62wXqoNNvqygtoXuhGy1JK2DGmx3FkByA7qMkTgERKbRpBRtZ9yz7f89AwQisCiSaskRNKhumHPAGJ6Fp9ShW",
  "key3": "4afTNBY4cbspbPvrMfRqY6TqX5bEv1pnrfidy5XKpSb6h2fMBLNthRs2jdkGEthwCFbRcUBy38aJTZvicmZT79V4",
  "key4": "67AAdMT6mkzJEXVifjtVdgL29wEkxzyiQvRFsViVe7ELRwZAhKcBg7iTAC85FECRyyUUvTEQjPfWpuB25u2EGnDc",
  "key5": "3Ha7jBEj36xrrsAKE358GD4eSg28t4rFcw5Qxeq41gJNKGGnwgssrgXwjtnqLtzk25Ab6M9mo4Y1ddibXEYY6nzn",
  "key6": "3CKDEEVXh9UGJ3BB17aM936DNQdy6mFJPsHEa9Nm9ppFneCsq9xRgXX94beQz59goXGGqnVCaUPd6JC2diu2XrmJ",
  "key7": "4cnpKBEgXkCgiZsoNdfh3as1jUvtmPbgEbSzfvc6Ps2CVBHeUaszM2QFc5QjQ9oM7BEEbmfmGMissYhwSymEe7TQ",
  "key8": "6cFNE7DN45KWTxbvaeKDrEtMphHB1kEVPVtgEf6Z7dqX9v15UqZduHJAzZ4cFUp4mSFwDAP3hjG3Jhz3PPF8epB",
  "key9": "5AEKJ3uSRfbCQFKpfY4N1DbnTZ6hC9W135j5QvgUDwgzoMqZJKydd7KrmFA3QFwTczF5sShQSeW9LJiiVsv3XjX5",
  "key10": "33ogyzmvpFSoVGvhUovitac3dHngiNVxaUpd21FwqjsXZxVzf8fbAorsCMtMFpupjgfBrSfDmtaiLJCBeQfKCyUE",
  "key11": "5JESrQWCCj5BjucuT4heh1AJohr2YPVp6rMuwn18u581YvMj62doWycGcwiwGYQonr8ykAHhgmvs9VFVtmxgzU7L",
  "key12": "2dL2CeZGxkZthRd7iVTia7TgCN25YEWhmoowwAtYVU2NFd73qftEyjWuMKofDSgffkNARHNh29UqvPDYMJtZzb2y",
  "key13": "CDQrwC4MCY7fPxbbRWt9LVFNNCvQu3pfcszywfa5TGMpuSynfrc5am4nbWgi1kiLVJmJQAaquLHjq5XGf3EheKq",
  "key14": "5cc9BxSJaymLEkzLPZHYe4XCp4KyaDDAD8Fysk5yGp5X1NufXatYAcPHfAWtmcxoMG6RvsCVTmukVZNfHhNHv54f",
  "key15": "jjXeLXLd8gUsmsBVNSQvuMjQqMVrUDtR5cmGWVvbaNRTUYWsZmKTwpfGQZ29FQCh2N3hYDSXd9iWrUs2ZooPXPx",
  "key16": "2faT9Z4tvV1bi6ZXMn3j7a9uztfawL9xSAH3fW9Edx4h6ueKuUsGZvApqfZbU1ZesMfwxBhqvbgN8L9nmZV89jAT",
  "key17": "2gvu7F42oJDaH3jg9PhaQg8o2Fp9tFW2soP1qeH6rmxeKeWqQC65UoqDa4wx7CRTq5QVdnEnk9V9XMCgLqfB1krQ",
  "key18": "2RzowP2MvTZcJYeKAtA68b8nrdg8oaSQXzLxEgzdcyiDJFiCgA6kSkTohG2p4Asc8rNj3Q3CjQoE7KpvVHzquLTp",
  "key19": "5nUKqVf1titne6v91zTosL6jM8b3yDGnjdL5vHHhzogT5h1wA1MzeP9UVv3Yjeo2UccRE7YvUwpLfkh6rKQWL8Bs",
  "key20": "xoqcknex2b11yMSSDZtrz32tFTuMdDkvTUXTdFLSYRQRowuQipQg7XW1m2AeEta126jHqB9pBT5uCg6Hmck4WD6",
  "key21": "5mtrFizBsyJRSY63c7GepFPjmZBQjaSUJRLZf2KFdCKZ7FJ7YhR8z5TGz7SHLxE8AvJLRrLH7iPj1zhGccyBBhe3",
  "key22": "2DcYi4CXHLkRd5ihCGs6DaxrTiW9yD1Sqw4yGudeiq7hwfXTJWjGYZEadaxReH4yJ9xWvFbP1mR9ff6JvZYBPzzA",
  "key23": "2EUyksnNxerThuDanCRuW8THTfq5ckgzgmDpVMXCxBD7QqHDtnLnaiKgKSqfTcP4PqnJGqP7v7jhwyWxTAjjHKpW",
  "key24": "34hgCicnUTV8rxMmBeq21UPLUQcaYN9AHEoPjFpZLdpJCJFpmoujs2RDdq6gJx814MiZRpGFfumRQ1DwQZZVD4Ke",
  "key25": "5X83eV1o9fD4JKZM4LTRLHVhgWg5St1C4LU8NWkb34y9BaXVyhapadBsNgDHMuXMxbKibnUrvLuXY2ynGcufy6He",
  "key26": "49GoYpVRx8NJTMnJnQf83uNWBmjq5Fqkj5EkfEpZSrsEH3xL7tG4K6QgDCgwp1DqCEgrYTp2yY4NsGKmXmUCco9K",
  "key27": "TXNowZBsCp8KdxNhKfNU82ew35YAw3g3YSVwepPYMHEsFynFRjzBLKN56RMjY7Sb2gEDin6B8uYDe6foim2FNbe",
  "key28": "2NUBmP1KvLGvNQ9tbK6wEUGiCtnaWgpESmyp5LNoVxjgCkexFkggLVL9db8RC24ymVxtRwhvGkimBG6xS3aUdbEz",
  "key29": "5CHz495BXEBH8qP5KnicG3F73rv979HBUYNfYgMXGsxayMdSt1U6ohiM4e35tZLXpjLpm9yRKY8cRmdQkHgYfqRn",
  "key30": "P5kb9hzJnFhSgUusJym3absWBKpQS6deiV4aB5dBgTkwX3xViPWXmE2Cod1qTmuukiQ39d36kKJfA73gXokMDx3",
  "key31": "rqDQC5cDbfF6gH6TbV4AUPu3Uvsp2nTVVnzjt1aRSGECq3nVzQjHzhFVtCqMdurp4DVocohS3KX4c5ceR6c7fYQ",
  "key32": "3veCkvksFC9zLGnoQN5368KYL9MpyivoEvdRhVBiJPoWVKp65md7rE3gzMtJxVVBTLtEuRKKQXXmiMGxeH8SPc1X",
  "key33": "3bRWYkqLRr8hMaVWrHC8ea2hq3eLqnGetGaVZQHph6Mej8nG1CY97QCt7bWSyNXbwFKFHS3p5jJbhRyNVLAteoyV",
  "key34": "eCjGzyQ7zbgDoN2YmcPt8GYTh8dPYEXxpBjPTEQKzoJu7cQD8j13u9H6itZiVDWa15HVpp1fAirNQfWoaGgGLU7",
  "key35": "52vz4omPS5NSNsDJ61jztYr7weYreMNMiBKWnWgykSvaq19LKnTsLzkrvjjcFoRp1WfLDXa1z3HhsQQgMtJGRbuN",
  "key36": "4PmQmeEgnmzLXwkWtUACi18jCkuZwi8YXGVUwLdHX3YRMTftfVsBP95EAPPbHuef7iorxDbcmQkqynrLku75ci1N",
  "key37": "4CfLFmbf37jmrezoEqxagMbVpsUXPc9yCnTZi2VH7vSkhTr6UCt6ordY14fBpFAUGi9JUigC7vGhy4PWMjKxcTHe",
  "key38": "5YUN34FrJZwaeibsiEuFoQAbgP4hP8xVNUTK7MFuwL1xn36vK85jasYWj7xEhaDdJ4eDh7Efncjrwvhtbazvo9sK",
  "key39": "iSnWn4ERWAgDFosuxEAKaowQXRXUDyXiypF3g55q8wpHcW8m4qKUdZ2DJfwpYkqiMg98rCuTGa9rJ9hj2YYwzWQ",
  "key40": "HmmUSaokt2D33Kk8VyKxVR6vNbbjXPuwkvZ6Ud1u3GnSPen1cnEJpJcjDEyiRoCLDbeVk5SGPDENDREN7zkvbC7",
  "key41": "3dHvR1HWTPSPNELD54bz7vyW3Z5xkDgTLDTkjAbvMxrpBxn4omCh6hssRMewdf1CKEJCRQAotpQnYWf3Hji4BG2C",
  "key42": "4MVbyreJKYT5JmoFL9JxDG2v79GP2ro5PjfBYMTB7gxgREQ8M4AUNCRnyKcTQofvUsBRcKEXZGxzaXc8BfUHfYU6",
  "key43": "4pv27aNbb8wfKEnoLnhRgwjyUYz3YUXWYtuEbNMHZ26JMSJ17LPLmaBmw6MixRJhbrMccqtpHX6M7XRbFZwj6AYQ"
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
