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
    "EJMa1LzK865wn222XAzbnSkRG7MQurnWj6hDsZBFQrSPUvdYFxLhQ3yfqj2svyKrY54vfVQtSYp7YYsV8vwFRR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ydDAvJY1xTKuHyUyoFRBgnr1LUfUchy62kDxjRky17qSXkAxgXuSYCyam86Rfji95jFGAseeYjFsfnY2uPDRgqJ",
  "key1": "2TzfRnnWVJD8WKDECmPKZMyeAHDQ8MKAkaCfkxv9RXree5AK3oXFnGY84WJ86PfpxsFSJHwUtSJPUTnLeAHLJkwx",
  "key2": "nodR1v7E5QibWQ3zLpMa6CTYf9ZiQS4bx82dBrUtjWqh8PzMgwm7MFGzFTxnZvEmMuf8Tte6fpvJ4fWYrk6KsPx",
  "key3": "4q8KPrMoGeychGFtVUjL6uuWykHif1UJq8kaT9DeeZ9j7USy9qfVh61CqdR5fTFVnNBHJsPrm5pN5eYagvJuFEtQ",
  "key4": "4hwdpF4MqyJH15GRw3JkZJ6AQ6EyYY6DBv2bMEkAJRhV9i1HcoQ4X7J4ZyZZDopmwHyRMpd1N3eLDz9jxQabzv6y",
  "key5": "45ZnyTzMxx2e2PQRBzU8NEreajBXEAYneTZZNzJb7jdAQbnFBHa3sW9sYET1xLmZ7s7HeBGJEoWaBz8XFyScBqFX",
  "key6": "4vdTrQbHGtzqyDYer62NfWDVAcuTNjyGP65ir4SB4zmCg4KADchtDpedXyFkdvHNJaDfNCMCagCLvjXVSqLyiaGh",
  "key7": "5udJGWsxcKUE4BSYkUCg4jh4VnmNSDbTKNfZ9WkheBtRLKadKFbcRmGJUktZbi2mcbNPnzeYkKW1rvjjxH3SAWGr",
  "key8": "zCEYuh7ugvdSDmLmVitdUW3p6dytZDh1DUtHBHcbkgr1MpKB98tRAzRwM7kmPi98sKzTS27F2HXsaEDdxvCQmg4",
  "key9": "5z8mHKSs5UtWJmpQ8WDo2eH2V9JzyvP4QFJccX223AEJFrdjB9nwbyCuqNPSn4cA39P4TwHBdrPxyB4DJLcwyx2Y",
  "key10": "5GRMktr1kdzTdtjWChWQwrZAgzzYkkjG6Lgfyeb5F9H2HxiWJzTSFMZnXYg4jmgoa6aaNLqFMD4A3UC8mpZSiF2H",
  "key11": "2UPm1TNKfsZVmggr5wR2srfmYAqDJEfNFzFbueXeEybg8zEmygMdNWh2Gb45hfFeVvACY2fiJESPpfqYyfXTuwm3",
  "key12": "5Zk7vQiCR9kBJg2Y84uHsdZzhSh8YnfLjypptNdnWJ7ThVpSRoWDSSixPQScju2yKtU7c1hBwx6zQ3miQSSB7vFq",
  "key13": "5ddn38rTygBMJB8X7oVqE5T5DGeaN14KtKTg7Ms8oFVhHiRoTaqNx8EmWG7sXkNVPfpqPR1iVy1ZgxNqqwsyzgSh",
  "key14": "4rQQNhq58haYPVh8eaNo2xHrc3qqeEp6YckEixYCra3TG13pRFqSGzCcp1U9PZroc4dnyQxYamUoMW6GXMWpheCf",
  "key15": "3gquNnEEMjoRo3KbcdFGv29ahn7cqP7mUMmhhpcbxxRNAKNxQe4HpErK1vWfUCfSA9PsVCzSxLLwp6xraihTU9dH",
  "key16": "2wLhB1fcTEGd8QXYJZ7rMihQFV4HZStHaWobn9ZzYXvaFjkMy7rRpkcawcPR9ePXAbDZgUMdcgvznKuJhxcRFuvu",
  "key17": "5xniJNcABCS9kNcCPuJBkEbxLrxWvChAeDmWSU2BcsxJqDV74EXhEKp4KRP7Ti8YHYGRvAgriuCWFdFwcnrju6LZ",
  "key18": "5UQ8jWtuDG5KuHqYutwrpzWUpTz15LxicCoajx6px5WWQ1nmegjdaRhE24fGU3qcTLKtPMD596jFMX9XmMfQtBwv",
  "key19": "5uuvENBws8DBKmg1Tvv43SodHcziK7WAHj5YiU3JdBXFofKzQA53xcw7qfFEtDq4EARDB2ARiLY2QgPcavE1S7F7",
  "key20": "83q92BkFzfPrq1GGYz3CrJ6d9tNHvS8sX6S4sPcv7SNJBGDTFXLViFsh58hdxSvC6UpGrtkcnge8vtUYCWnEE3Q",
  "key21": "4fztKzABt5ZW1F1jUaTG1wHdZg1mX9jhji6Ghcfmf1VC8R2CnaMNEbLHsvMLQgKhCTP6ryHhB6mfG6Ga8bsGwuMc",
  "key22": "5J8F8Fi2MZT3DgoCV4karXCbyssCntv6e7W5ZfSXwkj6fNYJGnRVsuxZHwFVjV7wqHe5iH9CkrPzcLUTZ4gB8oDa",
  "key23": "ggUXy8jn1pdR78cCkZddX7CeJwzsr43SBEozE62BUrGrSqcUCjvJib3CCV7CzbgJ4dteGbThoGptpuY6g7oNzPF",
  "key24": "5JEQgkumuKVZn3oMQocVo9yZz86kK6KQp6juYhkAnSuSjmZkUbHGyz39vzXg6VN37RAJn56aas7Y3zZVnm7ofBYD",
  "key25": "2o56aSfP42mXTtc9ieh9Sy9vcgwsgFzNH5PqN8eDauj1ZvwtVe5YHUuzbvpfwhwxAftsUENEsrU7aoHKA5VdLNyz",
  "key26": "5kxUEMzhxtoSXXvRsZuu8Qb4AeUcLk6b8HU6i6pbhRu8BM7c9Sqhy7xKX1nyJWd6F7o8iWrzWk8Tz6DEwjjcSTkb",
  "key27": "4oLyozXD8ujvHsWtnYno1vK8bMxTf8CggVLGYwsM3GzrYyeZLo8ZDyprEwvLEQR5brmQPy9dUBeZSyLgawmTwAGc"
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
