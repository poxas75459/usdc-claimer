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
    "K8bKBXqo6oc9B3PvxdWKW6z1qZDwn5DBWVmB85mSUWGGEcHK3aG6AF6TPWTcCyf9TvYpvGtVBjdjzSFRReChriZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f2MSZffWAdJY2XzsAp3nq1QyqyCiJSpW79GrWdN1jd4dRuvmPWxACv8wWJkafySRYQ6SzqvH9stPPFCfhAcfbnc",
  "key1": "5hnQFyPX7L5uy9JMY3U56AC1BLF22BMX2JBweghGmq5fUNc2dqPb8dZzxx2DRJmWSVm7CqCvGg6WEiawcRC7Lkyv",
  "key2": "4ueQoRqQD5sfxJNhFCyFA19B5Q617NFgNDEcy1tbPDMEMbJUto7SAdLxqVy7HJAzkJZjgaS8eodtrrSdXF6oBKmY",
  "key3": "3WX9kfbDxFGDjDbhDhLzFDiWJbEfVu8gGc7cCKys9bQmrF6emowEQHFoGzC2iL8PHDR1yw4LStmTP6G2mHebuBXR",
  "key4": "3nzV7tt2wEfFwACYpwvR5efwyybmCoRNY549oKHvmEkQMwQBVYXSp8Fee9TxMXpxNPMxVGY6NULtMDGEEbGKpFVJ",
  "key5": "xM48EoQ3uaXhQ8QKMGvGbJQ7SnwNWGcojk9LyDTqPc94BDC3XETb3vmvCBweE1bDFEcuBYYQsFjuMaUcKbbDkhg",
  "key6": "3GZntqW1jcvJ2XmNhwS9PTtinreRb77kYv7FFJQRnna8NR6GqreAWxpNudFEpFzmu4isRtzVsTvtqx1k8MZekMsV",
  "key7": "4kL98aTgBJY9Xs5E3E7RQz48241CyaKzms8X6uLTtpW7dGrMc8SuSwdQRN2koSpYXTUqhV1hy7pGrb4LqgHp1iiT",
  "key8": "5AtZqcyfe3wZuVmao9NdcFDna5tWBkveu87eVxbaUoXu48udgePzyKNQPDwvG7uwcwEn6RpxyLJv8c9vCqh25Sp8",
  "key9": "2KekFatvh5zkuMychgbwZr6uX3z7SD7R5NNk6oVHqZjNHhBQavu4KRW4PxQXVmStCsfhrp11GYPwvwv2Aa91SED5",
  "key10": "oWeQTsRTtPKwH9LTZYV4zHKKWFM1TeeBoi6JrF4vrL8HHqQYpmP92rxf8rm488ys15EUzBYsdqNfzkHc6TffnJv",
  "key11": "29cpbTWkjCT8NLCqynqmkifVEouts7hTpEwYvy3eUeJP6iAWaFGTWYBPUst8s6V5JCRv1dzxPKy4Va5GUxHGXFTB",
  "key12": "21DVETuuV8Lht54D42vLS9zUHcMvPRwXnahGGtc5LSpXyuLNRAPpHmVP1tCXqkhfVJVFmE2pH6LZugiAf6fefbP1",
  "key13": "3kjfMaApSBAQVmD3m6sxeGuk35hVWNgj9Ra6rLXDFP3rBCHPxvw4uN2rCfcdLD59NQdT9E4XcYfiCjntm4DN3o2G",
  "key14": "2yXSw4tVc9CQu8bwRyuFyorWxh5YZ99PY9vRZienSb261NoKHg5hZLRqDrkkjfVrQciQjDRarHCRQPuDr2o6jyN7",
  "key15": "5pZbifMfYButmHxBPhMqWxJvcKP1xGo57wX6pvN72HTUS5PBnPWzA3HStzQA3vDgjkjwJZ8652Ywbwwnwo22pgyA",
  "key16": "2LqLwb245UXUxDvnCB5uoTSueQnVmG2QDjyf7gvMgPKwRWmyCkyVYVUEJ3otDS5eYNidpvRE3xFY4y8U9mnEcms8",
  "key17": "5eFSUXKPwqNv6EoZ127i4TVHgkFCWCtxuz5dHi2fACujEnSANuYdHYSCCMC9WyVU93bftiVFmy6p6u1qY65LuXD2",
  "key18": "4kFwEm9rn76tB8bFHy7mQBYgPgbXysYfQwgJHPytN9q47jAeTRMBPQSMVKiFrcMgrWQqRo8KoYzRdfRRGGwzX5Uf",
  "key19": "3SSM5rJJ7ZAEcMRD8YFQvMGSsETYUzKLRZfjUxXraRLxKkYUv7m4hLK9xhF4c5qdhnQfLDd2RUEf5iYqiowTnD8T",
  "key20": "nBB2ST4zQEb7JnT8Ln9APo6DPgie2AaU8cViJHuV9ZELbNJg41T4TsGrfhqfkNXRhywSwuQb5RrjXSVRPfH3R4W",
  "key21": "2UwD4Rp6H3X68394WtdaXmjtKjrptRwuaJjMzxFhTwsEHj8eAJ2Pva8WzChjpLB48SB3WybwMpCFuhyzoYx6ovgJ",
  "key22": "3G3jMKkWBnMTJcTHcJFr3JbrtJ2jg4eMKsuQoYFCHkB5M8262XcTjLcWjNqd4os1sdk71eCbFrVsDq5MrwTwLKAU",
  "key23": "4hSuk4rBnmv8RRTzwwQHDQ9vhNR8c1rUwL3qvvvXGeoEjosnsb83EHiBceMXD3Uj3fWV3kbiGpj7ci61LnZEbpf7",
  "key24": "5Q2NgTbWayLTDb15NVaSPyAfnGZ2SrS3iCzzkTdE54MW1jbh64BsyrQgCAahG3WHGqBLaVrFYCuYohFp8qGmR3N6",
  "key25": "4s3e7KZPX5bNbdQVvmXs3gZJcMG5r5HRPjDcX6x2hvvw5qds4B6EvLmwXfr6y19CsrRa89ZGgiKewvJ8JKA9hNdu",
  "key26": "4zKkHjufkNVCCVTM6Rv7XpN3xZbkeMHKT8PS4bLyEWWV8r7X3DrvgKcYG4zRJfVLbMemajbhbnw8tGdv7YT4tc7X",
  "key27": "Y5jjwAcUfTWSXpdKjW4k7WVQRUXVSJKnGTp2juyWZWYUS5hhF7jBqyRh2iBEapTaC4JajywCgHDmB8562RFjgCZ",
  "key28": "39icdBV5Xp4NNLVYMCGfxGbw5drf1nKSwRgaje9npPPFC84NtVLzyAsk4fxupTWGHDU18YFp5B6EqLdiPtc74pHV",
  "key29": "5dXPEVCtkJiWCGZCkPP8x7Fi87RwnfHf8SybwqHh9NDtzDJD7pTFD84xoDW75SVBv3zxmZX4gvxKV7sd9cuUE193",
  "key30": "5LwnLPiedd7Jm2UADzjt9jTSaSshZL6NLAdSPPe7gdkq95e3t43vyoGRkAmUBc7GXCxgMwLmJxfpTPTSUE5fDD3p",
  "key31": "3ykJfyY5DYaMi8JTF62UugQeSvuuifk9py7389HDngUVrEfBogfzSd4r5wB2guM2NLAzUH2RH1sPqxJHrxkRKHx2",
  "key32": "2w7GgRmiuZvHyESJ5nG9RcPYLZQTacVL5CDiNU8Z51VQ3VoooHdFVJXanWGQX8wjYuCvpdGX9qk9ayAcmPkCbWHd",
  "key33": "4nRVjFu11BRbjthALVvBL5iJPcQqiSjXgYWe7bhx6ax5EkfA5SB744WTcNaNxRjXwgaZ4oVNrK5ZpxnQee2AcGtA",
  "key34": "TdM7B7kCS7jVHNVe9rYHFEd9CGqW1wmiJHEsAY7WCXB8i89u7wcv1anNn1WbcAxn2wGZ7zL1H2JnKJXAnECLWPG",
  "key35": "59JQ5uGD7M2zsgXAuwx6ePYcfSeBoipxVYeqEYkdv7QKkWUR7zd2bW72b1hg8ZQhm3T2VuHb8e3Rkb7VrjkJF5aA",
  "key36": "5opMctoNTTDMB1NTQcb3ZE8mG6kVJp9BwPp2Zv3sYPjjDUhv1v94srGG2iEaf6QFdVZQCQjGw4unTeWUZtbfNXnM"
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
