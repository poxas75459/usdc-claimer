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
    "eM91s5baSg2k8DvmjENU2WdJKq1Tb7QRv6saAgoG2Lj3yoV6VAZEBEn9Jh8NdNPX9GKjCajhGNJb6VBEnogBeCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hCqhcxtDvs9cjTXhgZnTyMFpcSBRs7d3rJKCJQ8ofXgSWdUt9cCMonpapWm3eYAefgopAwqda4cP6AowhYrPqaR",
  "key1": "2GXUGSTL9pRrH5Rzg3CxaNaJkMK7jXyvZoWw4RvarBn528a9MS5ed8J5Kt5wXG4BLie7RyUDHEpN2edRjaEdkj3r",
  "key2": "634PaaeGWQdh54PgxcRy3R8RxsHdJRxsao82A635aMSKoqjBFaE4FT8mBGHCD34LtJvc39apLCAtFVYXPPwd62dy",
  "key3": "39JW7W49buxPR38xpfhG6ooRfTMLFXbVQhkBaKYyRZHEQB3QA1Lw4jtfJPrSq2oNhmSjzdogb3zcxpYkHx5qCxdw",
  "key4": "2Wdq4pS5VNnQrTZNXe9X4FpDFzwEDEfWJamvP4YgSb9e5g6Mu9DqzRJDMp2xxUYJdqz52fQEtCygdYhNbL48okAm",
  "key5": "SgMxCfwqeR3DybgD9LKfbQzkEFVFeUtxVgLPmoVguBNnM7g3BzM5VPB4fbfFB86vsWL7csC38NT8svWgKwsbEQe",
  "key6": "4EZHJTKffTHxWCpWnaLLLPg9jJGV46LcU4yZLwCcpQgRLqsG6QD6KmJtHu2rfeZ3cqRBi8BQrtRVpcVnu35CfDt1",
  "key7": "533x5r7omEP74z7hee4YrhLaH1pxGMQ5jSH61GBo3JS4VBN5VRQZNxXV3jF2d2rGXmgfpzqfexzhG8KrqFdpCYu1",
  "key8": "2msfoN9bftJ6GEQgtYPwdVPWcp6MoXmWEQfeHLVFv2cWAdUPSUQfQCaQQcX1MECzrQSYvL1wSzFjWnActTcsQ7Ba",
  "key9": "3n97Cw4bgNSzzWUeCFAbXfg8jN6yZmBBhS6wPPyUK8iqr62ZpUVTiZmCkwzt5NmrPifVwnxzosAqoZLCUWBbxxt5",
  "key10": "5C2FV6C9otY2YVYfwgEQKMGBoGg3o37vGUxxN5oQAcqdZ8TadwGYgsJhJmFVxLwAruLcqLVL373KvifNWssxkf1G",
  "key11": "27oqtKQu7Hj22882dfpivbnpXVYdMD6BtcNBrHv9j1PUUPgA6foeKm9NuRjEP8v8aX2qvkGZ7mDAcMGLnHL9cWCo",
  "key12": "27t7uB9CQM1FPAkHhNdbaKRsj4e4r1tzzJ69KU9w826sJ7uWZ9j4NJYE1k5gFFBv3SEN3w51BuPvS7KySD94Dp1s",
  "key13": "3Uryu4QD7c2mkViuir4WaURVasE9eSb78vhbpJhH276PndDaHZyHcnfHVpB7sYe9Q34hHCvMz4WFy7wdZYZEGT9k",
  "key14": "2g2wapWkNcXXLxxAGA6SMd87qwutu4zT8ixyqNkUXiTZ7B484vQmRgARZBrnB83hEmYcYUXrkuChzMnY5EGr8KcA",
  "key15": "az9vLrZdtjJjTg491rxPcR66DZvM2B3fBbDaFcG8BzbLtyr6HpHbzEgVFKcx7UxcuF1W6QBP8HvukPJZYxbidiN",
  "key16": "w49mYmY6KzeEeBANc6LUb2H4E6JbvNCQZXsyMnxt7BU9W8cSrhxJ8ZGxm3NxLfGD1uKiby2s7WChDpHehSeHg3D",
  "key17": "5JopTZAojWhfraeet8qQGMMG99Np2svN5BAR6cNozQgFVV62KirkyJWixzz26po6fskBRv5FwMsePEa88z2E5tgK",
  "key18": "3qShj63UyqbAfC3AHE95b3FqBWZS2fMj37ybn5aNUsbWy2K8Rxi8bE1yni8zGpVqCFeUZ5KTv7rci23DpzhRX2pq",
  "key19": "3wMqZMmrEsfZmAjTAFZN5NvLuBoJh9NaekXVnPvJr9D4gSPKpiAmq2R2kBs9K6yCELCfDLnvAHi66TqBoannAXeY",
  "key20": "oFwsYqDniukGSvhENQJULvHrrf6MvVS7DoYkqcgCURFeLLsKAcS9rT3eUKBv8ZmQfPrPs69AeWEyoGVYvuY4BKQ",
  "key21": "5qqoAmGVkMpbzjHdZF1XKuwhhgYbPNd5gXUZF6ujZoHYSPz5omt4JeF6DSHwkKo6dfoHZG5TYvMeSh9Y3KM4BGkx",
  "key22": "62EyxFpp3ZuikVcXRStqQtvf8SKkRuLQu4Y2JAuGDqaKPLtnXdt1vwNa6VrHSs5n6yCw6t78TvuMupJFUbSTo3gY",
  "key23": "3SxXeetQiMbpmYe8c1eYYYeCWipNQdtDo1SHbCbqPGvCFycKphdgWoS7VowhUYMN8bcvDZe4eHXB4GwaBHvsCoZq",
  "key24": "4nTqwAH5kWtmrUiMHNhomf5SMf6S4j1EcSrYAk35HzcpJKRxoWCEyCjuZaWttS9sNqBdQrhzYhunQyFqFnZcaesq",
  "key25": "2iaNEu1Aqm9xsrncuxWddp6RTnBLdP7gZYjd3b9rHwvqxVCVC8k9XzEdy4qFh2ZD9AMkPLWAV8QDCXNebaTHVGpe",
  "key26": "2v82EE52cpUW9H1ySBgUo4mDEnCFhPGGiyRvWGN1Cqwtkch6Qayr5Y6DAbS7t75viZJeY6ZDqpwzQuHsiqGTwruw",
  "key27": "4fb5KwJfth3bp8WcNvW4a3bsvHa5Dj83KgsZCWcycuc8PCavHoVATqfzHFYBCvMbMp8enzrETsPSyKXh5T8CMSS3",
  "key28": "3qeku1k2xhj6PuW15gT4UfevZKrMYoVWbMuqAWXhR5nRkWxrY2TzF4BC8imjoaSV4pSSUrVMJiBdEi4LmmgvYQn9",
  "key29": "4mX2ZdzruAXhuQPtdLHaDDddjYGcN7irMz6NEJmjoDi8vaZiW2gYgd9sFnhRWJEvJZL3W3sMZqPda7nF6HttSGbb",
  "key30": "X8THgwgcwGMeT8A4vrCVPukvAX2uSMmfUGQHfXmeqKJnLSVULiRDWhVfge5TtKRcAKmwwF8wgh3W8ZWtYZ5tXs7",
  "key31": "44ka7rgR61wCncfRUUwuDwAvRY9gDYsx34njwinFZvifCqHGWBBfmwnuCBhsd9Kx7bi5MRcHnARDdKQyDo6bn4aR",
  "key32": "gsbZ1BvCnk8zJ29gjKykLYLXsrtb8w8wAXbY11tptTMhyq2vvyQT75BVtTRPim53EpKmjn5CfAtxpZamoRUzmSo",
  "key33": "3DUoA3uNVAZJXFoHKKhzJp7VSZwJcNPE7zcgkQsvvdeoFPm8wD1Ummvi5ZTDQ1aycy794RBMF99bXvMG5ZmFkVQx"
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
