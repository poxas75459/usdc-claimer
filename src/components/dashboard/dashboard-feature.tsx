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
    "26Vaz6u2TWDDH8erYSFeLiMPkPwF6JhWuRZtnUMpt91NAHCi9JyPQKZk6DPvbqfE8x5miXi9FULtn3tPoQ29HhN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qX4XbvFy8MvdxgvTKwyZ1aaAAC7sv5hZA4WEkv1JTgrg9E4cwUcvWBYsZHo7tvLB989tG4oEfLcMZenoxoBkogw",
  "key1": "qbhM9M2eVxE1aXUig4DQzvWDJzLQr17bAeVdU4YNLwY4YdwWZBRrUFbyw83938ucDf3W3say1gwDgbZ1z91aVMf",
  "key2": "3da9FhbrSTuoM4YgDqYqyon31Y7JLoZqdHRhZtgvhWJxeHezVsm8FGs5NyXFqJPPuAbj7VkDnLrES4QveLFLWbnS",
  "key3": "3ujW6UuQ93gHFXgNDBQ18nvWSQg6mxv43ZPPRZ3k9vCV68mfWpzBjVhj8KmbtwTcEwoQLNzQVr7zSPuvWGVsCBHU",
  "key4": "4qRB4xtkPTJ1HvSpAutamJCr3sKyQFaYvRaL5wDztQU8BwakZoaAjXzGr21Ct1kR6KebeaVQbRBwW5UUS8THoC3a",
  "key5": "4D1HbusPh6juwvS3z7XdEswguyrLNo2hWSHvUu1RNfawn5Luu11BXMeDUhYSSyxbiNVSuHBPco2tAwdAgwViPs5Y",
  "key6": "2iHRaYqvu4SkbfZCB1JqEsdxiukvZGhoUjE9knfsTBEPcjVvNDYuFtd5FcHMdvY6TqmiBSV1zicH9xMJgzJVhr8Q",
  "key7": "UAQkBvty6iKyfGWKsz2WZEbYF6LEPiKcWU4fL4LrK16pYaYj5AS1YEE1sfKR5ZpQ26F87G4XBBqDRmyqJvE7nLi",
  "key8": "2fB6xJTPr97x1AG4ErzLy2s5jnZcYDyaVUae7SVNdc9XCd7Zt8Apzxn3125eL6T2oUvZ7KtEYKFSDcqbP11Rg7Sd",
  "key9": "57eBZPJjBj13esSDfN41LfCj8inaF74EkUyAZmgkEhRQWP4iu3Xpiid2eoAkQBC7CjF4GdCsZqut8nThCR81LH4y",
  "key10": "4muMDqyEbLtpjCmRASb9UrzcMehEerqRM2CUujRVU5daLbdB9hUvnSAQqjrSExCyCkKwSuSjKTP7jRUwZce36voN",
  "key11": "3Sm81T2dKyZNJqBwnXQ7zxykXgNL1RFuNG8zcchYLcG1tvtrHPtAwSBZrMdVE818CGd63PauutaiEHYPPnNgpXdF",
  "key12": "dwKezgtvUrEW1uHR6VJsSCNaYbPrGSJWY2fAkqyrEf4EwqZpdccx7b1jtdSXgVfYmMYCJctMwJy88xttqUfgRzq",
  "key13": "5nuXX4DDApDXev4QrXb1yy99fq5LS82CJHw8rQmQe5pgUGLckXxQtC6K5ZH4pNAwxXxxCKHtxn63J7qzYN7Vp7H6",
  "key14": "5T8aNUATH1xoHT9xEp3jFgG7tZdkqL9Y8zLNr193GYVvX7zEho7Tdx7HpGPShmjThNpwH79EeAnYkNC45rr8jeDw",
  "key15": "4U6VdoW4CvjynhiGm1ANpqL5HRS1YLnLf3S9gpkPxkZi77dHh8F5ACwmmziLgvbCCTQ35HXFHUTpV7gUqro9AMRo",
  "key16": "3RzKBpGQ2GpWGM56dCKr7v7riCaXPuEtBem2BCVT9WWRnb4vj4oZJNQNaj6WpaGaGMA5u3wM2kp6ArroZ2aB6HnT",
  "key17": "5u6zN4stiFFuoRpZMrQWm3BCEF3B8nZM6NJPCBuTSsmuDCJPCb1RC1knnn3v3bR1M7FcMkPzDvvYbmQq6Cjp27zw",
  "key18": "4TkYZw4jBP5jpEoanAXz1hVFgJGc5q2vGazaqxyC9aYeqYXPZRQynSM7d1Z8c45gDJPfkMoXXNh8bwgZkCBx5XHn",
  "key19": "5xziNUMWPvUJ48PEXAJgL1oVkBCA4bhFBGw2FioMrTmgE7AdtefB7NKisbuxm1MWqc2UDL9fjZ2t8H2PYR88RCjS",
  "key20": "5TmxMj1KHfMBXYWZFzz1bz4WZA8BVfBU2Dc4GP7knjxhyCPM9tvjHsTH5ggjXL9oKPKd91tkM92MzCb8ALFXm6zm",
  "key21": "4ftw44DBsPoPP5WaFX5D56m8L2fNr7WKFKXWcGZBwVBh99yktjcWNHPwsN8ezyP2d585B4NkMNZg2Mgat53koe9n",
  "key22": "2W8krC8yQi8WDqdkFjpckos1Rxb3ncCQFujANrCAyTu3YVA4CnmqF9szcCvGRZjbFxLeee783htChhEksyLueRX2",
  "key23": "3jFk8EwCqcGSybHWAuNHkVNrgTvdLk4X8RaZ7nZBp3nwvXJCszqMCy1PmXfdZPt26v38F6kU42tZCoLQrL1BRZX5",
  "key24": "46aEuwaha5itcH9As2rmgBY9a2TM7T3pMV3ENKXLBBGnkcJgUEyWycUjQWjmaKZ6bU4c164tVS8m42P49BJn3Hvk",
  "key25": "2ZrJbodwXFkwaqYQgi1rdE8ouQDkiCZWdbUJc1nHMRfNfJd3wNN4WipUuUvLwdnHu9EH6NJywRJisHPh8RQYv7Xh",
  "key26": "7PYvDuvD7eFzaZjXjrFwHGMCU4X1qLUdZkkvoptVJmuPi4QbAN5gssiH29sJschjvhrhDEtfh6ndQbRmoLenp9o",
  "key27": "5KGKHn5C6msUjC78M8GkW9aDS1HneGqD5xyGeZvAutBu8y83gVsNzv4HP2XtnpKELBiPj8snmVXp7s9RBSfpa1yS",
  "key28": "2pgwC7hadHNbjNU7fhNKumo9K94dDTFRFnLAghBD5L3bb4V4sGCemxsM6jV82YbHnXkBPAyohUQkrGEiJQJ9spHh",
  "key29": "VDkJvc7kPrBFHKQhoBA5XFWm8sQGTbM8B5bWKXZ4r55Jf4WvGWvg7tBhTxaoigkDEnAFVFwjtVzBs38kzxUc258",
  "key30": "3Lvm868P1EJLLDoUnEhhSv3XL2hPGQEJtmVKaoC9mUsHhHubQwZZ8tt6BE2cRAx3Q1U48wR4BX1b8xY2LKQVLfvw",
  "key31": "69ESnZAaMNJGpvqyiHGWxfGSb2y57zt1cW5ikHo4G9wcGhW8XBBRHFsag9gMAGcGpatXTuDBBDaLHPgzaG8TXP8",
  "key32": "3PXDHLya1LFeRTC4pkGBSL4prebACNw2oeoyzUeY1kQmGhECRJvWnBAqvtotMv9p9pKZNwEzpx9UqHitybgHzU3s"
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
