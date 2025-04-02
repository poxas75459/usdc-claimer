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
    "2eauJNZEVEwuLHruXCW5iHm94L6ZxHsAHGkFpHNS52ec73tvPcFd2CeXCvd8NWrKVDYPsV1BHqbGAsJiXBnaJ4uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEYAnVJUpHM6ybfZgxiWXkMmtxwkhr9PVNCmZNVpathfxMWUK3fUJPmGASmzBpAcLre5tRZEr5ALMd58cgdsgQs",
  "key1": "5cVqhKpK625J5vPwnnGXjKk6C695X6MatzhgsMcL12bhYrdJyjp2w8GMnCpWwUsgMxq1gSNMPpCf56MtJVJsKoUE",
  "key2": "2ysmV9thGkieCBVHkV4ZpFv1uWLygQaXXMHwxr83HsVeqZKwjYeFSzidhGvfNWVndoKVzMGca1w4GfvoamYhtPgx",
  "key3": "zsm7gaTrLn16dyeUrg8E68Jp4eZkkmin6qjvNtqLw5cWAuL4db7qZHB3bqR2Txj2gKLeG5t1yigbZYPMpxuraKU",
  "key4": "3GXvTmA5URKKRE5ZMcLRjntyEqwn5Xkuwk8Ltq5MEvYkLZCWvkJZ5pJH9Q3n24JTec96UHyN4j5KKQtsHfnkYPBc",
  "key5": "3vV5J152pbGzSmB5LnFryV9WeJio2Cv8J68vyXCtf1jqSEV3wBJm8dxQWmo6PnZFupEBJDZ586WHoVBG6viC4YtW",
  "key6": "5LaCGUTnpkQoKLvRpxEyTuqsF5hHXSFjXE6zrKAhZw5hreXADmq9viRaKd4EpC8B9B7u9TzDp5hDW4xFYo9WWeQj",
  "key7": "5JQooejgnRGJZoo12yCjMtwPSi8FWZKmP1munVEgSFNn99MjaadKLuG6yQ4fGRXgvogfsAQRKnVhVTHLXFtV8u9z",
  "key8": "44CSMPvDTwNSTdGmkMtta5RJLt85NmYAtCv1u8iRPT5dv8zt8o9vwXgMFZ8PuXigHUNnB1p8orAdRvVtNx7dZuDM",
  "key9": "2ofmr69fKisYsqMUthq4mkNhY5udrM3fFxGMNWTM9isJt1aknAPi4fHTLERbhKXzvLJQH3tUEyJ4DJAoW16MP9yS",
  "key10": "hTFbPvv7DmvNEzEbL4Lf1Leb8cfKniLPHXjCxQjjCbzVKMLih8ahsNCPcPprUcE3AtknEoC9pWXxgLSh6Nqp8Nd",
  "key11": "2bZyY42WuCpnVyiNQZsaom44Jbi1tDJkC7TXaBxEhgp6Pc8pgpevnMmvVSSEn479EX43AeqVUk7yvghbN7mpm2z8",
  "key12": "5zt4hFPp9A8WfU9YYdjRPC68cKu3kyqN1jN7EEfcz88LqpWw4EwhfMsyCoSRhNtQw3xcUMYMWJTc2Z3Qfphn9sBB",
  "key13": "ArPEwGekmkb7MubpxJxocpz4eLTM8PsH8GYxpovu3TWHYJj1L6ZiiyfFbgAydEUPuuxG1NaTWUFnRABGExBTG6d",
  "key14": "4Z6kc2aP6dVa2HfQvth9XhHUyYjxZuRkTQSj8ErsGf8wF5z21frAw3BCiVfnk3HWMfB55arfY2jwv1sS3cBFZLQP",
  "key15": "4YKcfJBNc8GZsMYUw8GJDV1DaPuEAXyxGaUUwjYtS4wwVSvs8dJkHmFtmDZjaRC9CNjXXXouGQaVU66QGB8NhBF3",
  "key16": "5gY7xyf17Kr38NEdS4HZxeQYY6pbwvBoAt1Hsi5629QGoEYJ9hYxLJ1C9ZuhJFGYA5icqCnVFMY7CMUF8buhVmPf",
  "key17": "WNivgtCsGvtz2jpKd1doAeMBHVoxCxj69hYt7q6gAmYEgUczN4LshTAUiYW1nNZKtLo4P2H9XNuWiK4iCRBftks",
  "key18": "5zYoQXji6nyjvKW8KRdgHSrU9qALG7uUyPdgGQ6fRqLamSwqkbGjdR4zYa42X71QESw9ThrvRJLF45gNwmT14epr",
  "key19": "Bs8XEDyDRu7PEwCQBjr4cMehejszLjzK4tR1XPU9Wuevg93dJ3Wba9v4pG6ihRWPrvJ7d9HKYXSvLZv4kXwfth1",
  "key20": "3vS7D2XZsYQ2FmMj2bL4eFJ2ACZpZDmqXTDvtuQ4QjVRMDKB8sFnP3rwKrwSNMUKxi6mibF8HPgTQnkY5Vmr9eQg",
  "key21": "41WoGubZYEZUCzmUzGSMzkTSDCD1nXwfeMumQFH3fKhhdxHdnmkNbcd47RcSDnFpU3WACo3iG8n6G6Rj1nyKk7ZE",
  "key22": "4VXVMg4GK4NSLBm79yJjU3nbGygEmHuvsLtjKW2CLU654ED5UoK5kzHKyPrNAHTztaoRrX7dTELuB6qQxNZ2SFwt",
  "key23": "4GekVpPbRb5kz1fLDwEbYxUAYvxHNGhSK7qhNaRYMjn7nv3aSfAk5De25UVRTqLZt8STtQM7w6W7z1G6oGvLEV6v",
  "key24": "2g7nwDjsrqji41iCCZWJ2JurFXW2ykGeqpGj4WyioCd1D9HCkgANyFKpNwFLc6y2N8XnsGmFWV9CzCB3wv1XvthK",
  "key25": "5yi7B7DhKfKc5Y2wX9cxJcKXNX7f5gNN28T3g9rqvHK6sifFpkQHUDq2xDN8wCK59dqm6qryfiJwsGLUjMB4z3CJ",
  "key26": "2hGTQmJhS5it7F7s121Pq4TYFre6Cv4Yzxq4t9iWn9EQCByn2uU85GXsRbkfBL4tguA9gnp16UifLuVigpDuqtUs",
  "key27": "5F6XU3F5GrLctTRgityv8jxDovukdkMnksJcQJGj4EdC2WnDoEVzYdF81Yr3W4CYMz2Yy72MvizAkm5yzRTS6LVU",
  "key28": "29TTMLgWhymQYqZEoXtKp2128ogJe2qDD9K31ZNSiC96A6Ra9YuCDEjqFHk8FrEaCq3y2mEHuWJ592GAac7JTji4",
  "key29": "2S8kB38dXJCdrZ21nTmv4KzzinewVHtBPmw5GGtYQNFwZy5gfEmSxDhzCgFMGpe5zxVqKNJm7PGUASJ6JHfxo7F2",
  "key30": "2PUA3skeYggWjgbZAJXtqVuQPkDJR9hmSo5jF7eXrywMebTcxDN2bd5wGgCT1aKy6mThArX1BzEYhw69fLiYXDwE",
  "key31": "AtRVjyXLyZjJH2cWQtBb3WP6V4qg4QR33Ue4ZwamK9mAeYbo7vHEqhgxhe116kHgp4PvcepMVPpH8CeCkKjfoPe",
  "key32": "5AVBt72jWuxvzrQ4CkEPgNKzna17eySgrNg7ZLyMuUqiwueVoU7Zek716LpE6HxoqNZZ4Abwdwkj2Pjt3S7sofcH",
  "key33": "SMomj5JFp355WY8in39v3RQbLhQTAUaeMzjQWsXCxFpa3ZUZVu53V21H6Ldtk1gUiNQWNjoAoQoxR5F82kCPmMH",
  "key34": "tGcXCVF8RjcgDWH18iYW8vjdeGUyAqiEvQ7YYUbPYJZ261wyey6yHT91uVBry9WHceZ3ECwPuFq7dCDXhvNV9MF",
  "key35": "4U6ufLYxKy6G4XRUxkxA1xAzxD8Hyz7Typeg3xBYdqQxeFbfpbmTHpB8yMXzNuA5mvAEtPuuXTzEdeBRnFcMRsTV",
  "key36": "5kH44Yk8Bft3qqSEcqmcrGP7wudoiygAmbVvkpgahzipx7VN4bsVgqQ5cEV7iFJqhgNpHrsutn3TAKT9jVYvR9o7",
  "key37": "3ud3Uy2wszqGCniX3fP4BtUWknPCTu3XYpfB5kXxoR79hoVLbu9fKxUNFsZwoHrn9GJZsCMwUY7v5mnmWcH9E9KG",
  "key38": "635um1h99imsN5at7NdpwHvcCNL3hVWYK2mypTNVJZkkaJgVfiUh2DRZc3g9j7RABHukyw84o7uJ93iRrqhTXW3Q",
  "key39": "3MkXqpeJLWggPDFwNcMqxL82cPFiQoYqRt5tJtaZowwDrBC14FnE34p461znmPpznLxWtVsrmWkKqK1pSquxrJF8",
  "key40": "35zLKZTAvjCUiWaeSs7HZqvXk2AVbTHZYAkq89BF5QJLptXz1rfvGTXaqv7sGFDtApJA1p1umW4axPjt6bW5EReJ",
  "key41": "2rNnFVagEEZ8DYjH6J6kGcM5syuWqgZ71pMFiWQb3BHajz1hUQ1p3g7HVLi3wLyWWWacapu8JxXgjwt8CJCxtTzi",
  "key42": "3g4gtJyt9K2gzWUZ4jxfQ7c213MmTRfUqPMkBGkUC1jhLXJw7dZMAZqKibigjYKi8rmcd5tT2pWk3aCGVCbSxjua",
  "key43": "2Z4dLE5wgYJPiJYBUtTMFToHQ7TCyejAQcwSeZ1gy6wJywzvVPjEpcRWxyCapnUHphoo8sutMmDRS46tt788bdWe",
  "key44": "5xZGAoz23hH1BCBbooYySKvW61rmkmfUB9Myi3k8hy8z5FxkETdtheLU2P8bdKpbowgbqXuMzN1epnPAXqTNzJP6",
  "key45": "2oZYGhg8Vf7cCidibuhNZ4Eji859wfb6nWhLc1q51kkk3G7vrGCSKYXUi1yUyQRBPYdsUAwfGvFke1HPPptEeUqn",
  "key46": "2cZ7mFNLBHvm3M41xybFrWjF62G6jgEZ9Yjc7fE6HJN1oXDpwWnMdHZ7QkaWwMKVGkQYCZEqXScb2kVNDvQZVYLv",
  "key47": "5r4xQgsSkaQn84ei1BHVWDwMo7RGaBEGkmxtgxxdoWWHBskguMK4mBKrvnRXVDHr7qPxC1qGwL2fbcsEJsh4hEez",
  "key48": "2uGi77PLukDasmcM9rXmkGxqK8wFFeRHn9XHkPD7H57XSuwd23VorHWremZPf24m4TGPKT86yUGjxx86XgTTTsXW",
  "key49": "hXUsMHHLjGJWZqjurrNGbFsLwb1WPfxuKeV95ewRAJB96tA3r17L5NppibBADucDSoCa3zzMwxZPkq1o9UsCj7g"
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
