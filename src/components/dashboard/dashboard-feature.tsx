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
    "5XwKCstRTCnmdXtA8a6jYsATndLE5rNvSSNvLFs4dyU6LMb5sZhNBXCNMpxyCMZr8Emh9unAqSBbigLNwBbm6yaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7UX6Tk7JGwMb9WATNZbE496ympN1HcSyWoeikJupctBZ11TJS3ughrmndn9YSnH28EiJp11GYttyVpRNkhTchs",
  "key1": "42M1zJhoiM85ZreRKWX162ab99g2VuU3akwX5k4ZQp6oUCpivX9MZfmjKNn28Mw6bhyetriMhNxbzGJ6ErNF9moV",
  "key2": "D13zcFrtG6wWZXuvEDU27Sr9M85dd5hazDtzHqG4fCrs9HnNGDMHk4EWzj3JNi31aUoK3QPyBEpxtW6jAJNSHd4",
  "key3": "Fm1dnVii1CFB8bPqiordhEA3N8DFoJeUpgUXDd8TuvPPci2pmtBrhMRCbNXi2NrxuopTjDKvhfTnZnVgAyNWC4w",
  "key4": "3cFauq2JFqAmjNAMUFaaPXhXVW7dRCmuqAAf3VAsyKqJhV3uUrd1yTtYnQzmuLFLtMHtnMiezco44gjk8cc9Woy7",
  "key5": "5it5kUeWQmxcVzxsKhfzZQ6yzBo6bxhrFxFe1t2rGhB7F7SqXNZhiANgJMuAYdfm25v3vondpb3qvX3ae1S2gpDB",
  "key6": "ZccEL9qjMJGmkEu2P7xoLVVqtAxCWqvU8gaachEWjQUcT9XyijLdBo3uZxz3wjTfDWFc7M34SSkfTbcGyGviVjd",
  "key7": "3E6KB4ANGjVda43xBJgn4mzdGp5U4cWCWqjg9acoL1kUMWHTexg6QRyDvrUzBNd9GoEz7pUdA7q9EsgjRDH18r1P",
  "key8": "3ih8YsRGBSG3YNmQhhTq3M8KukAPN6FVEATjmvnGSo7oKkaAjBK2LBHRdzeKpDvK8jGiVkx97QQeEEwCD1z2YxF6",
  "key9": "2pyLKMcjR9xf98XWBUa1yGgQFzd84Pswm12HcuAz4NiBXzNQ4uUwM16FMzJ3xhHLURdUU3KxgsF7uJid4mBTDZHt",
  "key10": "3TbnZW3L8VbgEWRHxo8GAbBD7AFUaJjZ1bzdhXBYRTRGXWKeUxHD4SarEPDtR7RaquNxVPGTENaM9zf7bqQPvdDB",
  "key11": "kawXbBUudFhMu1HVSG8QjdiM4S71PbPJk5ASFQpoQc3UAk2KVYYSGcU2AX1nik9eEbQjir84DSboejrNsNCQY6y",
  "key12": "31B94P1ZWBqgpsJan8FYjnUpdZkNqsQVzNPWsFoVUugWX4JeZdSApzjqGqLGbXXuLQBF1ude5r4pawqqJ17ZSyKy",
  "key13": "4FcsrK8pn3hy1pKYR2qVpN39zhVKux93sLkQSGdRBZEL8EXZp8Gbx9WkRQLSXejFsDjT9cRv4TPuXP6bq1pdRKJL",
  "key14": "xaVBj9SpkSYTgxaJrbSy71wMRWBjsBJR4QqEKXu3NPF1VV54qHY5Vwi4AncD8dS8TGNFMpnNZJbMKSyR4LSUQJ3",
  "key15": "4jqT4vcDStitdRYoxYL2raMCndf8Qr5zBiU84APuH1GCeX5J8RHpcwNH4ZPe6G6fJUXhy1KGFEffY2rQ7PDjQS3U",
  "key16": "29eMNZyAdamJPSyuYECLez7Mc646VYXcQcUX4nRD5VnGvRbYHg8fyZhdDagatxUENztLpD4SPXSiKbYm8fsPjoXZ",
  "key17": "2SMuv5aTr9GvexHGmPmDAbDGBPm3bbB3wU37JeBGHpZcMzieeBw16Fz6zHSf8HakTWbM9yvk18bRKEd9hXxS6VYf",
  "key18": "3FzKkXa7d8MyzQRt5k4fk3ASDpA8Q4tjco6Cq2pYL2oZDJyYHnpyUC25bVa3owvQ2Z26h7n4vN4Qy9VfzuahHszG",
  "key19": "2gikX4jHLVv5bcUYqTYpSvuW68pAzpdN4cJZTaJKLakjfGRLdQU1fYo7RfuALhpYQehnK7xyJA19gPYhAsXPBJrH",
  "key20": "4Ryc4GRQ2Rudt7Vw2MSQyXXBQVamP3WFR5DnvR4mJ797kjWneZUeSg9oGwPoU2RKNX2zwjCWmSnmignxHpPJmp4m",
  "key21": "69XWQ3gPGh4tVZjiPf91cxqVVmQzf1G1tx1HqwSV6zPSjZeV9ZFNATUqpGjg9V51JQaiKoCswNkBUXcy5nwvtEF",
  "key22": "4py7TJKd3NNFtXHgy86doAPrs6zeU33SwMSocrRzsS4cUrC41gj1FmiVGWxBgg38RUd77hk5HY2jipApB6DfZL3x",
  "key23": "2pV542Zo6iKUncHsLZpCHSF65sswpPWQrG4XSf5NXhfuvnfpTU56ptqond9X7zs7APToDVhChnKHHyTwrS9sirRQ",
  "key24": "NBXiQjSewqxZgxEyE5xcbhj3Q8znptkRijGDjhcWtRmB2E4PiEQZ48AR66zZm4Rtda1aU3bwpd3fr6kCXK7coYs",
  "key25": "CSc4n94EAPefJdt3TkqpURPQ2Vo5qTWBGBjWH2S3sjRZsr5raP1F8dYcjj7DhKpe5VsQg7GAaxjqB26BAk1GEcR",
  "key26": "2QxKdiEpP6XMQ9SaaDogJY3fcDvyGxi8QZdLiLZ1VyqXeJ1ob6KY3Knrry9gjB75CedwkwWNMAiK2E4xyK3DPqDK"
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
