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
    "3soFDNk11XpCGTGbc5DCG8AiWaHRvk4FHHsCWcxZZhNE8ifQx2nQ61vwrD4AD5rKWyCaxwASFzpFFACeMC3dEDiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzRH6eyfyfj7nKfWMeAwYnSH5z9RniqoFQe6H5JQ42ha8XX9kKx1a2MBQrTsBxKzzGTXtvexpkD4KRUcrnSi3dA",
  "key1": "2NemXYo1BT7unSUAThcd66iaeznxL3spScYYexxCx9yzbw4M5oZdFHnXD7XK94wizAg3z6JKr8zxuZRGqwpErVuC",
  "key2": "4YY14NaAKgQp5zovamBTsMKR9kn7qma6gDdrvqiiqaJp4F7RRAjJidEMAtzeEnjV9EEP9tK2YeDjCPfn36oEAWFm",
  "key3": "2oZPpCg345w8X7CQAEXCFyYrXp9NJBMxb6GZ8K7MXvU7u5HcA82CzZbjPL7RKvwWTTrne7vfEjQZitiVzWHE5nqB",
  "key4": "5bhfWDEQcKdPCezNZE66T4pUHhPdDXg8s6ScBHh5HTvPQAvWF3BgL5YcVMzRNZoP2KvfprFTPWdBjtYYRGHpE723",
  "key5": "5i7KdJM1jVV5vz6VP3TQL3GQDqCzhT6bDUcT1C1dsQtLQQBrah3PqyxwkhCfS4EfNjKFXZBpAXB3whty4RxJjZtX",
  "key6": "2PBNGZUcYTZmU8VpFG6m7V9npBkbPMfPLKRJ5vfUZteHNjdb4HYMaVwwLhuLhc3EMdgZANwQgZCHbjdh26MvssP7",
  "key7": "5Az6edeMNSBMJGNGk6Nd1R1GkqgdvEY49ZdmmjYCEA1nEQ3MrBNzsUEK7g7Jt5UUHvUdjHJhrCDfyjapvcnCPtVb",
  "key8": "4oqEDrmiAt1PnfjvP9EeS7r1RtvnfEn1XMHLpbVFhD3eAVAU5nhHUxpaEJk7r1zFw4TfQsBV4ErAcR4WBejkddcR",
  "key9": "3JjZRYi7bmq93s2vLX3cD67NqrKMCjitryyhtS1FVWxHa4sPfDT9wLXjFC7a2yFNbrxc3c3xtHUw3KZqeobVP4J2",
  "key10": "ykVKweMUGbxqDb7K8awQfJdWvJENwJRvnh716pA2mrHW7bjBz3Ry1MtuA2N5Pw2aHjfJkTzjtw9Xn6U3NZhceAD",
  "key11": "LCFT6Eg8cq6qQfPqfrsFd47WGdkSGL3EEZBwm29KsyUFi7vst8APscKsGo2HT1vSjGmdexWKuw5j72ujdmWhKbQ",
  "key12": "3DtruK9rcXKxmh2BbcdoXNrsoy7fjCBQyaeZsqKaeNZngs1JNejpM4UEjuVbPvayGnEmM5Ymo1j3qGSPTbP4MRBs",
  "key13": "3AmHeETbg7d1trr5AEgjYDxCVaiXuf21q9KhR46jKie3ivHfw7DPPXLZMQo9SM4PZKMgL7RdV8VKQmVfwPzzq3v2",
  "key14": "56AnmApAPURrN3F9oKxYdVPkFJwUKrUQiuoRN3BEJEbnXepnN3Ew8yErNs1xYHx2LTdfsL3Jj8fVq9U1jBvoCo8d",
  "key15": "3PAhXbvRxmPuqDFwTMGbKMm6ssH76MVZuUa3i2HJwfn2nR5TjGzFYW4CDvRE15iXg1GvGF42xKL14VczwyboZ9tt",
  "key16": "2c1x5nYch3f3J4JRaWiAxFrzPFZLS9eX26HGTY9uRg8q8n3NdPXo6LtAbemP7DSXcTqhBYq9A5uYUWbJVJCoNNsG",
  "key17": "5dF2Lo8fKxTXZ8yJ5JAMm4VoZjQJwHYEwCFuCnAGpqHevSSRD4xadx65ystc2g9TE2Ercuf4V7qLJDpwQCVm783i",
  "key18": "5aUhWfbEFrTys2v83bk9oaSjXeKcyDPLoCkZDRB3GsnhEsQkhYTaDiAjq72U8Tac5r9YHBY3ooA698T5rAcpcDPA",
  "key19": "54BY2K76bgt54gMdjJBZeWTsBbjJwLNZQnCwTgAyTM8tSj8hWSAwNssjJdS4E5tNJytu4ksJNcW33z8vErknYX4q",
  "key20": "5aTGGDFSbxrtsQPR4YTtNxCPz6PCS7QWgij8bPngEH5xzrM9GqwJeXBkwp5ymWBBKHkpCE1XnpovfPaT4Ty5feRN",
  "key21": "2HDvUHNhGtfBgdaQu8F1tUv6FUruSx737bqCfsgnT8YFCyn6ezF78mTfu1XRVivqdKsxFDyDT2pAL6M9DXpSe1jL",
  "key22": "4rGEtUgdgbDUf5RpnghWFUB1t5SvaH7q4bH99zHjZcVXb7HBsgSTvCkqM7H8zQE3MLDaVQsmDDjS81wtCjb3istU",
  "key23": "2p6pm3Hoe8AzfWcsA78Z3GwGMEm2gUKsWGqGYrHpQk2tTjMx5zhXQWNk8DhSxmn4xr7CkHkdAn5iL9EsBCkQ7Qn4",
  "key24": "5uGyQxJxkRbdnSftZ4dVxhkkW1frd9zE9NNDv6fjjmWfzDHaDds85ugYNuQDVgWfK3GsnqZaC8VZAR3jQgo1j3Lu",
  "key25": "58z41fiLqj58WqTvDY4uBdJyTV2PdZFFA9WxzrW7V7gn4YYqU7ZKwadHPEF9TW2QjniFPDCet71hwuATftyrshQi",
  "key26": "26yvzPTZMjpUjXnvrbYWXihYoXTKnZC7nWZuM47n6oW9JaweRCPpfSe4qK78AHn8XAvwFqr94xx1uWFazRHhsJ1q",
  "key27": "2TaY6Wm74icJKzAHkhDaW4BC6kvKcpiwGugC49KcvGKmjnSDEhLmp72MpbFtRvUXPWNGGW7TXAVufwreLMQU3qtG",
  "key28": "5WTNN1w6WDhUB6YX9Nopgv9o2uAfwuQ5cpv5fLBxF5eAMRYmFdghY7ZpCscL15CDsLGigvXQPV7jyxoBtt5rAw44",
  "key29": "Yr4A3crnv2cAF9x6FVM4drq3KgCsF4XWKsg4HmWqDtQYFfKVezB6KCBTozCW5sUoCBsRQYKG2jpabgBH8PDBX9P",
  "key30": "5x4mC3st5c2LhXGNhsgU6kP3TohE93WthnVWyRXbumLr64RAWJbMjBMe9rnHhvZXT8kUCBhT6swQR4LwUMWAnB4q",
  "key31": "4JoNh1TaFueuBp4mDhYxpnEvZNLQTrg1mu3wWsBr64UmBXSMpUVdhJYF6wBQ9qgeEu5FDtdAXG1cXVvkL4Pih9Yw"
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
