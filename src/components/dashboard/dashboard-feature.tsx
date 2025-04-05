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
    "2nYbHpYF68rM44KXN4iPPA42dvkKKKiRbAmpR8rScHxFoShJNebLwV91RocuYa7e9MxNx5aDEu3GqgXXuHyNGDao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iD9nAGS9gmeDG2pHjhDTDM4jmiQDMRWD9p5UNczN48gTHEstV4jFqib8fJzy9gRGyPmXTKX2MUAVpuCDJUNzvVP",
  "key1": "26BhPJpn89rCz168Czgz7vQFtqo8yaVFbzAyqutNqx7jR5RqQKGeo83qWGgaxf3Per1n6FKPMr9F24CaoBkDhCmh",
  "key2": "38xVKHLyYFszqiQWmCgTqw8V2ycVatr3PsRwfn3gerMNzw7Kkmy6EiTXj2YF6KRFxYZxYZ26W1MYqhFKkjhMcmxE",
  "key3": "3K1PTNL2L3XiiEGnkbGzqShFD1LcGsTJMppvJ9WKMc5j7zyzVxiprEL16HQrBHZAv2PsRaeoLz8ijsQtLBbbixPo",
  "key4": "VDMaZNuCrnz4ijerqCBd6yc23DHRXFRt9ag67vAqs1H6QCbvAMjkT4w31YX1bnJLyoosZxmjAqV9Q51voRhnR7B",
  "key5": "sPW478EXPtZg4h7di6LeEFsXocTj6mytmgw2FSaHy1wxrY1cw32MFyAhYNs5etVGkMdMT327PAJ828ag3s12Wpd",
  "key6": "4jXRh6Eake38wCPACutCZbQzQBYuuhZMCrrq2D6pvHK7FrTuiTXp8XvS4E7HFmzZ8Dnby3Nbfe7whJSNQbZnL2M3",
  "key7": "4WTeNEv724GEAxEvzGX1VKXTqBd58a49Qqz7npjQi4q9F5KjYTLDEEs627pEjxXj4uMNYZz9xBBJ8r4mbi3iTE15",
  "key8": "41FxwsaWjru7bikqi5wknUMgytEJ31kVs8j9KXq7jv19qc97roheeU77M8uMBjWWYLf5QpnrmNhaNWLQtqkaGfbd",
  "key9": "h9eFNupq8875Gn8UF3T8VXubV9gdSr5hpuWxKtAkxVq5biax5f2yVBNR7AZntsmaEDip7tio81JsKxC2xids7B5",
  "key10": "37XervGKHvHPVLfLLUA6KCPwVLZxpKhyp4D67FDe47snimrrRFXWwotKGMGUXR6KvXY2C8Sr1dzX3mDxv26cv8o",
  "key11": "58TrRv1Eaw1aEnmY81qtNvMP3KN2o1CprnXAMjUF4Q6FbSpRJiZFXue5mdbEbXMaoCxgA4tfehx4eCyZZ6u1c2F2",
  "key12": "5yz27JSErLHo36VbKwc3ZgUTtMdSDqCpDo8j6UsGo6NVGKJ5ViVT7gT516B9iZDvbCfKTshfQgUVSLAxCUSWzD5q",
  "key13": "LJ7cDgf83qkS56hPMQXYopaDuwMwTZ6Lt5TXvAvcu1A6Q1HTFKk7vScAe7PF6yHz9bh9Sdib53tVA7P926QhT1f",
  "key14": "4ECmoFVQQ2aeiyDK4Dt9kYNBduhzjvQzTRK7DF7jL1Rxo5Me7rVAcD1P7eY2CqpE25iC9SjU8izxyudNzzuFcxRD",
  "key15": "5axeJryhXeh6mNuvvmsahFeNAkN4j6rBskvWSGjbmkUVfjgbkNXkFGY7qKqWeTUEYPvMkn6AxGgNTY5QmnwXUNSY",
  "key16": "5mWfW3qivmpyawqDo36Q9npaXiZAumCjZQ5rSnGdKb1PuCUmD7Ge87jq6MXATCUgFswiS4uwF1uwrK4iqCwgKppg",
  "key17": "4aS1byNWvqa43WUQjfSMWEjNjqGXPm4kJZpXRSFRAsuSa5s6YXjXwrj7osWVUM6wAeQZ7rdk6do7DT8b6AoZrY8p",
  "key18": "3548ce3v78gzwp6JsaQMmGciMxLx5HdsLthqLua65n3uy11EkE5e6zXngf7VZUFa3MHLV7b8qtTFrh4m8FBDCHqZ",
  "key19": "46LJrt7YkpRKZG1FCUjhfCHsPt666jERNi6NJVxvG2B3iayinn1MDBauZjRTQ8ABvFKzK4zBMgH2m5c9maAG7x8k",
  "key20": "2b73oUDuV4yrcUhEEmrUDLbxtB22FK63osM55pYxx1wYiFCWXqhJZnqaZNjDjem3XNv25gxHokzc2T5Y7uqyk8WR",
  "key21": "3awC9uBdDBm7Pe9ubBtdx4uHKDTwpJquNkUmV2Xe1fLXXPrJ7ErpZiazxmZLHk54JxkRKS4SCRanyPURTfthDxs",
  "key22": "2z64uhGZDuTYgeV2aCsP5aaeVRTZjdFLGGSNa23QAh3Gbs8QHC3cD2AGnx1dqfP5qWC1Qz5EUU2qc1gRBwZRU6LQ",
  "key23": "3nbRTMCi9acQVDfxWp3yq2Yyc3Y3J1Tw1Avxi5RZYciEc1HBxJ5DNhWofWFyE3TTpbh6Aepbx4bYCLYxTSXDcuku",
  "key24": "3YTHXoxGQsnRiB6XgknJTTcpz8K9LjhgWQH757s51uKJwSGo22QY28rJ3kAE1A8TeNY9VGC2kQ2N3ouMEKroFAHh",
  "key25": "2PFQrUuQFnNcGbu7hoJyUFfKzJw5dbPuW4roRLPbAd3daUdwDrmGCZpbYY51FxYtT8aV5xBN7FW5bEy6MZbcrZ6q",
  "key26": "gLzJKmGbUSCUs4S8xjtRja69WfwACWtFn9zN5xtnHgxjiDq72amPWYNvRmsGUPKx4MB5QQY2sCFpzQpvVvkJhG8",
  "key27": "5DMLdnazBw6zV18mqRLWWiN3g86UHR5FmVx3LnbCi5uQDHUJx5Zb93h3BxzF7muhTjfHHhPyf9HK7LMf8e31298Y",
  "key28": "38TfqnFaR4pyxpmXnuRKx5w4VUcjMJGupkehW9Fut9W6e8SrgmHpJ8YEK4Wg5eoSYD8Bn74M4GaRUfcWTLyi3k7s",
  "key29": "3NHCbnNKkjcB5bBFyW8fTagEFraNe2TfhULPhaHyHxuVWDgzP9sNdEKVGnb1TTmy8DQxprCPARZiderR362AG6yU",
  "key30": "4MBFYWzFHXVBVpcfXUvKXmY8d42bss5YZHMNz9ChDQ7cCWXnPqu1kFm3pdAXfjEnVkbZ3eZe9xqX7gkHQ2ZEydAD",
  "key31": "Ff42tq6NqmafGbYnVaWHo6neHYVBwxKmWtkPAvRLpMGSAh7KQ1RteMMCuahDpue7m3RWWqvt8MyKiheGXTTyyVw",
  "key32": "5RsAii8KNnethGeTU1mUbYLskSAL2Wor3dzcCYpaAz7gBcuTaptD9XEh6Ap3F7auuM3uCBLKnPrHSiomfoa4Lz9W",
  "key33": "4nf5BLKm8rYz8kgkQKYg6zNYoaUzHoN1hfoPDXJcUt2TKr4x9zv8oa6fSEWmaMDQd2A9DPfAWi8ajrtQ2SRTWGYV",
  "key34": "4e1HnS2GJWUqLEzrkpzqTRko8d798e128hqPa4PZdYXUFiCSGhmyxhUCJeCFJX6Kf8gebVG5u1DzSLPXjvRcPwiw",
  "key35": "4rK2GytRAP73Ww9ipjFYEgLQkMW5D7QNrfwzVdDoJqhJxbchmdNDeriBGiFUozLfpsjZjr4Xo2kxYKkmBraiL6AA"
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
