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
    "3HdJh1vJRygPycDsgCP8zdnHG3qLQGmNLifiwxP4LzNrRD9iT5P8zy9VogzM3zEWpddDEA4XsiWkwxvx44vs6zGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E3krhLknWFtCaoHvZeK5exFcDXVRsnE78LT29zEGC2fPmayv5ZroKSLj4zCwsgQTKdrZzFa77exwTfYdbHSV9z5",
  "key1": "3TdCLAeCAjiR9FgoCKkoh8iLVGyXUZTwwHaub2EKUF6tYVBNfhoWVp5QgKpZ4SdHGTwXj2SJQ2qEAT1wx5fvatoN",
  "key2": "2sLqjJ9X6CfPJQVtHaVCkvadzJUVzQqKRYKaBYeVpedhpqBotZkkMJcEcApjDfcnLTZsTbdg1tp5rv2WRQLxNUK8",
  "key3": "nMuLxrw9XNAU8hPGLrcegkudGu8bqK4MNjjeE8fExKQZQAnCaJM5KZtoqGJMszMUawEK6EKUNhVSKnhk4oquGqJ",
  "key4": "3Cn3T7c7osBVv5EY7muPVcZaihNCPzXGBG73ZDQNWF4CwUS41DLMMGhD8qnH3CDezwUAP2KhTpCXBYKyjpmqZgHJ",
  "key5": "ChVRHnMwKMVLpmmQV5v4FAQRRbsqjkAbuxkRJAWd7kkgsSZiSZCHVhYEpA8LYPaWx3CPYZDV3FPWhyF78yNnjH4",
  "key6": "U3qHLAyTY4tW98cPCs52Dio6f5zrH4CDw8hzs2b1wFdFvEFF1es2Q6DLkwcshsAqYzaok1YXcxQdzaB8mC7UJQB",
  "key7": "2jNPqXcEp6h8mHq4hrnQAfB2b1cb5UfLAVJQmuvT4G3MMDECFz283LXC5nPwiE4Yxw7ZgQay59MutGPfVtoxDNCw",
  "key8": "3S7q6enC1rBapk6F68aS7dWjQxqGciPCHPKL7SYzLJkZemT3GevmKeKt6G9wsjruRU2tUUVDvH1DJ3x2qA7Ry1RX",
  "key9": "5FwwbHVDy7zxx35ad6zFsTcQM4iue8W8Qw1w3SZ3ZVDcKhptF6TotPckQBQEBzbF8c6QcpxQc2JWRSmnTEP8zfgw",
  "key10": "2hBcT7vVv7hEDQQ4PWJf6MhsmHkzQd1hPabVFU2gRw5pCtNEdGGzSVG1GsyATZFe2S8pd73At1ZXFiU4rZ2ApBiD",
  "key11": "5LL5BMmGFPUGfBGX5Q2w9wseJVwvgD7EfHHevjY7CVyHzgMzwTFNuzAyw8LzsB5NPQ1rs5FoLeFVxfHFLxhkHvfx",
  "key12": "4VWvFrqQBNEhBwL2X28QRHdG2G8T2PMZu2JEeyoubpAH4rkdDmmvsuCNoPBfzoKEu6RzG33MXmiL32rgFYnuZy8x",
  "key13": "43Q5UQ26dKrnv925FiXCg62Gf9vsuLcCjc5H2L4Ff6X3CPvT2xfXUk88LhrKbbziBd6FKnjmwsXLYhYtFiXN1vGq",
  "key14": "5GmzTEGDkLhL7oBDwW4iNjHN3k52kcn3egqEahCUTVrhse5P16PzabuH9Dn3PZejqfLkbneiizgzpz4Xt8DgFAi9",
  "key15": "2L8SXjVdRVg7nnY44W8xDdx228CweRQwhoFtr26n7vjQQvASv8aBnRucaE3jCMnpP7Hr5rsMoopaMZtQg8QiZLKL",
  "key16": "Efrz4fQRcs5i2n4ATbQKXhGNsUfLwa3wBAHzbQPYUDPaZRZU2pjX1ikiZejqp8ciF8z38uJ2Vd9W4VEVMCm7Qui",
  "key17": "2hhNpx3jddHgnFBD9v59xCXFuyNsg6i11GBquArgTT3PdrLaG8k43fqiGXME67QSNgrN53heDkiBLXHurVsQ9vjb",
  "key18": "4GYouJYQXu3HybSZqUEAQD8HhTedvTukrLnZQXrevXLX1UEF4ojY6fQpCbtkidYqizQvTUNCNNsyBZ7o66U6a74e",
  "key19": "tu4bawZMyFUr7GrM8ytXxKTubjxeWwCUoEJTwLJ6TWbAYSxZi25hodu67BbhkvJrXzEnZco8WypB7vs1Aq1Bcat",
  "key20": "5GEJvoSUofGS8Vm7oHgcjAP9fSp9U2V6XrjxtcSLYKAC9JtyHivvXPXBWUqA4zFemYEwTXBNiZFVyP7LXMrv1fXX",
  "key21": "4N5xs75NpF5YoGL6itBZvNrYobV7d2Qc4kPWTSiKzN5i6jyro3sftjCNFg2dwyxcPS1MgMVX32bBoPeQw6KevVZb",
  "key22": "3xg9xDD6rs9knoiWmjhM43uaMBU99XjKr9yTc15PkfJ7ecoBueWwZwcPY8JCnzgCNSowiD9G76PozJugsVZGCbQv",
  "key23": "3zg72q8KkiQdUVKrMXJ8RbqAXfR7RjYvmLWLN3VHdJSSYhrjh2chafxLahqXHhANXq1FXimccd1AUBeKLXM9vVAC",
  "key24": "42M4RnPsUkNz3GaWWLZ8MtLTSQE26D3qZCkFaZgFdGXw5ejqGk6KY1FXgRSuqEDim4rVpSAhqywTx9midwoJqQWx",
  "key25": "2ERYbWGBTgX1uxfs8GJBkHuhbup7YwopPi7TLo18G7opS9FaiHnrQTUfHx8TjBwMcZTCxh2o53hpqPfQHL8iwgGZ",
  "key26": "4FifuGFdh1ZM4UNqmR2A2iX62XHDagy2n1EsX95UkiR8sv6e8U7G9eRaVGRFwFd4btgWyj1i18BB2tpbtHbRUeds",
  "key27": "4CRWpTgJkEj6PNbMWroRCtNQtjS9mjQuXpPKt6qoUGqzqe7HWnFESab31RZxhFVCfbJz1XsW7i6eRfd54s8YpsDR",
  "key28": "E2jSQZ6hrWTwALP7EjYcP6qt3P6CPb5vCJxaMvdvL6yApSF1Km7AjJjiWeJjiWuJ58JTUX3P6ibDoUQWYFR7bZm",
  "key29": "5qessc11yN8fpZsujEDHVXkpG77nKH36sCjy34Ww6TBe8JBCuFZBvG5HbLMYpRSryv5nXR5hd9pkeakFLM1CMT1K",
  "key30": "27ZSSGtPm8MYTPcmu2teN2kPsTadnTzhyWgWEUMWeXLq5N1fxuwPFViBk9BT4w1jdEDJgZAZrHmm383bZPY3WJHj",
  "key31": "5SdhZXGgekdMt8LUqNAMH11hMiPsWC1P3oWELgV8vaweDWnpwwvQvoz6XKZWJ3bH12nTNwD4uPNBZ7Q5utsRHJtC",
  "key32": "3bMUKDSfrnJeEzFLGHvrzCw5yhWgTZYgog5Y5HosewBoEHFCa2ma4bUbNNJpbpHq9EWxPKrKuWUm3eL7xDgZq7ZZ",
  "key33": "5yByqv2EKAtDYju5kuJ2cna6HbE43PcLHGg39jEgXCgLF6a4Z2DGhVQ7BXLoCFc5pgSZP1xV1upSMYzcQXQP8dQm",
  "key34": "cNcuQfQw5it8pPrMZRrXFv8zuujqEyUdwPVNpCzS7kPALhy4WmRWzGHqwjAaPwEHSUy8XnPMEHhv69QR5DAt3FE",
  "key35": "h8r2M2DkpzmyvSBAgfbVzS6bRPAFLCNmqurA2Bj8nroY1Y7ciqZxnDZmFiDrjko6HW4GTCwLWSffKovmqVPJoTP",
  "key36": "4BVnnoxj7yFZEzGYm5f3xEtvco9c6KcRHqZDPdcFTN3dWA3RtNVBVLAhTdEpLm8kQ85oNvAgZbjaF42tudbJqpFH",
  "key37": "58uFhKzThBoiWBkHmd3tpdzgN1GZMnS8GAtoYseC7BpsvovJ3GFBAtxc2Nt7oKd1uPpXRyV8h5MmECs9xoNbtc2c",
  "key38": "5p9E6PZJrEXgGTt71jhXHtvZBXUFgxXA2pAx1D7k7eit8ZDw5LKb7xDdZqvtvWvdhHFQNjpnn6hJCogL5iAcpLz1",
  "key39": "3GV3cUqEv94Y8UDzacP5Km5PNiyrYPfybA5Rn9PQEyfJzoKqUFPqzX4S5Z78yzhitP5dwQuWYGruPs8UYgJ4P9yb",
  "key40": "2nTyWASXjzYZcVL72vp1qvDjxTGk5UuXqwyZopnpQRMDbPf3yBwj6XDEnVireL6pCrEV3txuke5a7NFPfqHSYeEA"
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
