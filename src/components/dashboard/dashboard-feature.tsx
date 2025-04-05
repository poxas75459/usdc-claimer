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
    "pYUm7dXvgcZLhMWgXyb4fpBUGJ5FVUJQ3cuizYbnC2WgznVV75w8HrZV97GTX9usmChQgfohihBaaxCDE7KE1PB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XYKKDzxdXJGnv8HobS59wePQVhDjejaAU5XjcLBMk9DArxrWT8Ln6SAt4hyJfccryFBDXQiXkdfJTxFvH7wHsZ",
  "key1": "2RuAAXfNP6c5ixdCMv9jUgmrDHkDXCTt5bZ9fNeNXfapzJRCaz4CxBaEPfLrzsP3wBjgVEWG5jWvyQmF3ed7hxAL",
  "key2": "4rf3km1eBU5cNKZZucvVFeAtovddB1E6XjfdZevwdazfhPZXMVCX3sJUqnaAEkyRU4wEH1TEYjCRodiFBsF6jar9",
  "key3": "DwgtHv5g3FdhTK7rsJhWLJixjjeuc4V7WgKWHXGr4UM27oR6y2kkHR1aEAP8bTVS3m7v8zKp4979psKQHvSwFja",
  "key4": "2Mcta5hfKt7dnDHPKeDhqpC88XY7b12WjKyqYj4tAvjj5EFQfeGew5MycgGZ4kuifRw4xFJfbWBEvrhKw2LAWVfZ",
  "key5": "3pr1QvHK1LpgnA8PzGpBdhtFjYVj1HFcfw6rJby4XbfvgB8ySyUw6Xr39fL26ymdrCJoGNMumyu3JgS6FZ6eKokf",
  "key6": "3yGQa7Vmw7smrEQVmqsiMf3LseoRrdkg7aK34SLPDvXzw9MN7xUEaD5xK3zxh4ZgvQWCP9qAHTPQiuJ8PA5LwxhA",
  "key7": "gzoyQYuhwwqvsrsQKwifdbpFxsnXJFwbxrNJpWjbCfy1YtR2Boo88yc1DUnMssZcWjxngdyotxtvwQeYaNN1RWe",
  "key8": "52aoKS2ntbyzVeBcXGT4wAjTdUxf6jyd5ReWKPqi9qDBi91XdzwiWagpxfrbR7mWpMAdak8hH4R4KFNtJyoZgjE1",
  "key9": "4ax4PMAXrjPmYnE2zXVURgTDs8t5G2nFvesKs86ppSqzcfes9J4v8867mua6rSkAGD7vY74grT7LuagBwvw4CeK1",
  "key10": "3Pbog44CE2RgaYrqcy7as2kxQxUGyrTaUm5rXB3Rr9rpUJZ5RWiM2AJCccZeRfjh5tDD8qA2eRLnsxiwbxrmMboo",
  "key11": "3Ca8CgSZkjWuMNRsSYt2L7ke7hzASAYv18WXgHR61pbqGQzsC16nF3uKzHwex9yqvt2XdaKsUXaEjoJ4r8F6vbZD",
  "key12": "d7BXGczwCjybrmEiAgWrdjyT4aRZ3ZMeBvAodP4iatTW11xKno6duWAhsNF4BabpFhkXgEYVDKbtJnNwbDccMo4",
  "key13": "5pCTTMG8pJhnZqWPwYCH7m4GwhrkZ1hqA2cLqAigSRmfZPccFmW2XFLravkZEn1PjzCy4fHZDE9My3KhbRBVgtrg",
  "key14": "2cA19ctg1cKWzKfj38oNxhPjAYwmvR22KAJxhGNatWER4gQrFEZrBRvFPbv3wJenKJS4VNFFHYjkkMpVNwjsg5AM",
  "key15": "3DxjNqcPLov6Lh1XqvXZFot9v2AsyVpB3dtgz8AswnrGvcCrBYZaLSNRrC17mat6B56QeFQ528r744T7X6vXN89o",
  "key16": "4skvm54wsveFmoF45EhSL9dZ9fHWQGdw9YLdoMrTmitUhFEQsLmqxa2qLx9fwAufExmma9MWPMGjBLjyHW97QEfT",
  "key17": "ZimkeQBvJUCuh39n41hUo11s7Vm4yQThLx9qF5xghKAWdNms8NGpokjmwGjkDZp1RBsWF1zXiGcZdDnv8miNE1D",
  "key18": "QGeXGSrBF4GSo1t8xbMLtZzcUjqHstWCHJbrpc48KDoiRY1XYvVvsG1jCePP7GfSCEHGqFbQWDRXi6dxmjJdPE4",
  "key19": "4Jikakt1nuZ4kYkwEbVkhPe114qPJ6fJw3TGAXEsC952HfLRuPH3ULU1GzGAbSZHr4G5CjpGPwSoeSJDQpDTnPZU",
  "key20": "cVDA13sTyft1aUxt6LX7Swsj9iFUySCzLK7V66mAbGwrbmUhdqEU8XGszDf4pKYaFUQFSm66Xr5mmMMuCVDNtTN",
  "key21": "41sZWDUv6EXkZ9SrY1af54VudkstT2ffW2Yy4J2u6zbEFZbyGe3gdC8fhVKwPh6ozvPPNhMB8MwKWgFyii7go4ac",
  "key22": "XP2S4wQfQgivVcYeckb9mPFXVXPEnmefMkjex4sFgckLcAdfQP5Qksr6U38c4rJG6YkfdsKy86jizo2Sp9DSDuT",
  "key23": "2SFuvcDA8pjciDDPqfqKcKPaBDLr7ckYkSLPRLCFUHWXTtcH5WSj3WqLsj8cbPqKhSipyK9jJWwCrEx4q7gpPBxm",
  "key24": "52fSqoXTuNnKGrta7UTtTZ6FjrW8XFFtanNWSMmbwukHPioJmSsPDvj99Wmp6P5hkA638XwPTo98Bfpoq5YfoVcV",
  "key25": "3JFY6AZc3ixn36p4RGyXKvAap64T8QaBhWFGcaonzgcEfVZkyancHjWvcHBFq6pjPfvwNpBPs84GZyjEHKrvnjNP",
  "key26": "2wChwhF7QWms9hdraBsDcasM15ss61a8XNwHdaNSiqU6i5XKAUac1QseKQW9jynddNxmPsn21wtnEpQFTu6XMpQQ",
  "key27": "4T9pPLAwrqJRbJ62yvTzafY7dM8is1xDetM5xjdsLpMCXhTZWPxTiNoPy42SULzDEtvRuEqVp9wHoV9x1bQfvgpB",
  "key28": "2QZDRdbSSBncvGJTTMFKnkJHxWAbNoxwLujzmEm2RBWUQtvM5yCMcacMsxT7e7LdMpJNmLAvnKN2dmUsrvcSYk6h",
  "key29": "zGaKnu8tECft7zEtPd4u71ibsnm4d4HFXnnsHMqr3adTqCeuhmx9hcnBQd7Betxc3oUVj6cGfqUkTxkQKLuWRQk",
  "key30": "5dfno4Zy8p24pVPFPcB4k3v3fF124ZYFbkSsLLWmzzivpEyD7FQTsYvavWq6Wc7FA4JNAqQsdLkmPGA9gu2xSbP",
  "key31": "SABByTmAA4KqwYrAunU19vi9gxCkc7BNW77oe3kEDg6uP41hs9kRK6bf8LTyipYqUHdmBAibmHrnf4RUGgZfAHM",
  "key32": "2JwhXrkfecYPBwdMjwsop4HVozQojzFLiZVQwpSrMAtT2Y4WG1GsyFdVzF5ZBSnMv6QZ1yGoFTnD1RKBwmKWDpMR",
  "key33": "4UgwrxoRKm86AoDF5uo3dyHP1vSashmP5XbSSVSKFKv6AfiqBtDA5AFoQLLKgYJzFv3cmc6fuNXVayXUuZdek4fc",
  "key34": "4yCw4VyAfHU32D16esHkdmSSc6CWPeQDX8HiFt11E9Uuv4f4cudh8UraxjJ8GJfarkLH6smiuYWxonee2KRrX57k",
  "key35": "4ibw1BwLaWvPuHAdzZ3g3Q7644Hw4WZS3PgNeqhSEz4va9foqJgu3HEXGDeDH6gs9Sex7pti9H9YUv1q1jv1gYop"
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
