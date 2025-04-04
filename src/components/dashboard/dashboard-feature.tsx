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
    "5824PnMzFZsLswDyhyKMWk5d6NzVKC1PBkJBRWURuKqkJZNdeGuaWK8kvJo7Gv6vq4MPVCaAdUFSkSQEQpgjwx5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMNPeaVe1HJFHRsYy8d4Nv7VHPNWdnjYSUux6rvAEb2TPeRwQMcZshadLC3Yjvcwbq6xV4zYmeBp8QpLieKDuHf",
  "key1": "DGXQtkRLc9RhtE7R1MwEmefwi1TbrTJYdwZnWTMYmDXqrwV75EQfsCxA5TaUT1rSsVJsqAh9AyXTKraWNyhitgU",
  "key2": "2e3QUKwK66bmdLbJQBQm79bA6AZR1dztAFqmBHHz6khyeMRDdyCTwnKamWSS4LHQQpKzBcJuzrREkx9Db2iE1jyv",
  "key3": "4hdM8QRURXME1CbQEkjH3EFjhJuTUPTgMbkRtZ9UBQsw4xGW31VVby31AwvCCEbDyEzhqw8DYtdJypT3piDou4Js",
  "key4": "662oW5JxUf1wUzyvKLLRkEEgd8uFAmE3t5SrpSqkBiFqCQvJuLhZiwgy2LfQkfJUGBv4aX96qwhyB2iv2Yx21z2f",
  "key5": "5f5BkLGYRWxX63Nk1GEgzZxnjEExbRi7Z4gxdGiCqPFh65X8dtPcvwdKcd6Hw9kEbaFw9fsPsXVCL11WM1gDnc2u",
  "key6": "3pnRbvAFLi8pse6GEV9LJrjY4rn2UpoHkno9FyZinAKHRaQ4EQuhSzvPtCm8kzrW6dGS8ms3ZNuXWP9a7nNJJEKQ",
  "key7": "1K1ziMeqRPoBFy1Df1j1vhhGp4wQL27TKFSGdLmkmZfZB5BtpGPjjckdabb63ZtA9J8RttekRLeASaj8Zmi7St6",
  "key8": "s78aXCh142DBrZR773uSXAS6bRYTYJTgL1Skezyd9jauLEYr2LWuzZzPEzcrApsTiutXpRpiaZfYnovzXAfehCE",
  "key9": "FxSCNsnmCiST8GorpN1bzV6RBMgrALmZFbn39wcqtZq3GMLdr3KdRNhSHrfaAxhongsntiQVdLVvRnEZ9vszrFM",
  "key10": "2b1H8jNDGpav43HKb88ayA7ZeK2zDhVruLb5tLfR8QKzBMCJdMWSe59ebigfoMtAtBQhsZDZJr3GdZyXB1DpUYnd",
  "key11": "2LHy64yq6MvBs4Zv1pRXXNqfU6xXfrMAjzG69sa3sYrznco3PJBoT2HXHo6HfsjfWd7B4xQkfBmehCBnn5tFUKNM",
  "key12": "kT2YAoEiuBgCet66Yf2LW6HbqRZRY8SxwRnQQ9bMLgfYL1At5X7Bjjqyb3s4KP4YMHGJdemrEPxo1bpPgTYzUfF",
  "key13": "4oNdGSEPX7K5ij2V1CkHj4zrwd8nskDRPHyh6tEMqxTxJ7hF4u77WM7JfkBST8FHayo8Y2DcMRvxpJzMwyEDpazH",
  "key14": "XkiBQ658CNp6PYb7xHGBMwTJRGA7BF43KHAzCimL2nKVffx2X31jnDoJFWA2WcB9hgDRMk1wBruQ7ou9oMMK6Tr",
  "key15": "5NzbwYwSZD1xPLsQSMy1FBnfffw1JMvmQ8jcthdiYZRnoK2TTjstWHt3hWHEzaqiS1H5XMXJe9X6QMxzPqYytt9t",
  "key16": "633VTB28q6RjEKojFLGACjXg5iKmVdJHRbB3qjQJMHqx4mxpx9J9XqjJxKcUqtBSapn2iuzsNXN71LC4x2eu3DAE",
  "key17": "3eq4AEqmYbmXWKtTpVfGqPjmoMteaWmxUoDqcFZASJxW3UU9GbyoUjeGFpf4BsKQos7HsieX9C2jD8muYu9kasV5",
  "key18": "gSwyEsTfaj2FFUqRsEbKqMC5kRHjs7UjDSCLztVkLafQEZt3VQTmNhopuXzkGnMpetbUchiqiQhWjtneywiKMeV",
  "key19": "2iU7B1ZyyxeAUCEMiEfpFvBvAR6DyX7JooYN7sHviTo22C2kZ1wKrQHqZ8rsCk36RR2iYbaWxnmaXHDVtkuvuqiU",
  "key20": "51S3xNXsU6XcAWDvp2eZT2xrZHgwBW6SYkjGgGtenonJ7RvFrbNbdy3xERKqXnREjmk6prku7w92xqVfyWJFFfdS",
  "key21": "MN2wcXUxxzVF4nVUMV6yqtbJNuSMu2en5Bkj4pUojfuuE9fP5wduxrAS6ZdZPf94sifacwAPuMPuCp7y6uWB8Pm",
  "key22": "5NiFXFaSkTobEcA66DGM2gkgRUyeAzNbsWMBJT4YphWrN17nyBpsbyRxpr3jZz8UVpj9CFwCa5ymjnW9Gs9WgvSz",
  "key23": "4YFzuPhPVsMK8hvtjH4s5fobbWyBXoUHnMW8T5CkaW8oosXNxaMJCpZnJzwH7WDNZ978PnzfsMAY6ovGfffzT4UH",
  "key24": "35u61bxUYuE4gAxW3PBGneXb64dGuocqwKK1HWFN8wgk8WGC2HJhi1jZ3jV6b6NVTz2BDg2bFNRijr612jvrZTD3",
  "key25": "2kkZYryFjeEPTH5tmq3H9Au1au2AzPX5JfZtaGUCq5rzZSuseYMDUkEvNsgdQ3EuDyoxnkk19u1Dz24LpKEu48Ns",
  "key26": "WprC2GfHui689nBpwqZ83hfDaJgQ8gbFutj4gqywaMNvWwhRf82y7JJkc933LQqSzjEkb8bEoGPgzDCfAMD7ReM",
  "key27": "3rVXtdYoyE5RUc1UXMCwq77ipu3ksbwrF6QaevXUsVQ7ybhSMNgDJW9cSGLDoDJpugt5njMpzibLxftGwk3KgSLH",
  "key28": "44914QiNgiikQ8skdtVZjkgnruTpH4PQv9m9ZFJKW8HzKJPrTiGEH2VgaaDhwHvAnAa6cpDhKwojXdkDC2XeZZw3"
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
