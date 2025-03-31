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
    "4PNxH77ChNei7zj15hUAEw8zA5szh6W6K8jr9wGXmonUzfD9jaUpPPUt9uymqVD2sddjauTNaYkS6dSrZ7STP77p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3c1CZ4GXLZZnUJLYcvYij6vGW9UFcEMiCt8XqgannxDb1FqrNDHJs2igmYqwbPnAQKUNkXFVT68HQDAL9v8cmZ",
  "key1": "4zLT7Pxtx9oq9cBJ3aE5rDyV11Q559AXrnoujTULHduEhvu6Lro89jeibrSdHH5pQGZvbxmBxhdkL2fzg9F4NURL",
  "key2": "BkKHzauFACYSyofq6yR7ithtiaS3mQf5XsCbVS1AsX5ez2qHG6LsLPaxp1h5cGFTamBLNb3SqUXs17HvWQXbYvF",
  "key3": "24i528rj5R9UkqKnJ5x7x7arXeDLJqVYeuS7VNw48KGwcEEfSgtSyT6gS4bBxnzM5gsR5MzYFFqytQgQafho1Pi9",
  "key4": "66zbW1ZBcHCbuSf4KsnYUANn7CTDx8GDHx4i9SDnSnxXJsFAZTU1R3qcURXAmtXd5DF4CfNq5ZezTHf9RXnR3YE5",
  "key5": "3R7THRpQ8de89rGUZVWhFHyZL7txfpKcD1HCTS45uTVBDCrtqdib1LhyTb1eTnHc2d3cMgFkuoLiQRaeDw2zXZvH",
  "key6": "CLT5iXqVSXLyGx48BSWcyE8vhcSBxJbbXD33hFhgrBp34CyycfsXKw7AX8s3mP5SSbLxKvoDh4pAo43iNRXBjzC",
  "key7": "2n9koqvQ97jvSFB4KV5w9voRG2vN4kspjCyFuLHVcFjkUpB8toCTHeBKtBkLrWJ5Unw4P6XNxAnY9hut1unkXBxU",
  "key8": "2ZZMy4AaunJ2Avx6dSNYxrY3KUgHRNS4jsoX2rRhg2E1CQqurfuybywfDewVfxxSNJJpVmjvYyoxiCigJbDg9qj4",
  "key9": "1oXECJiaQ68YzD5uwR5HTxKGErmfnTWaPsWJPftzi4bkptwyDHv6S2Y454JZigLgWhPuBiLvnSqJuTyCUtqvnJf",
  "key10": "47gKiWMWiyUbcEkPNMycXvj5Y1guLs4Mzcscp2BcAYoYUjUrixY3p2oiVJTLxd51BFtBwz5U5oiCaYWAKk5ZsGc7",
  "key11": "5iDC7KNYKRhDkcq7n7DQnqPwhvS4GF6twnWEVLnAnTX5HE8cxD51WrtWsNCycU1GHxd7nXGDSopiHMFLXDRdzwU4",
  "key12": "4LsrPvyJe42GfVBuqvJTCqbii42oJ3nKHA2NgwB3gDQBLWVW1AzfuTKxLFAMP4zRCcHybbbngKtCQc3PPPRPWbHf",
  "key13": "3tPfAv3j9ZWowe3kmWzYnpExSfWuPU76DqJGENXmauds5ThxZe4LdG9qT34ZMJQGLmQHpkN2SYrKDgpV4eGYDhst",
  "key14": "5wQQATuRcq4HUow7cD98tAFChShxF9ZVMHYbL1Dz47qbDccMy3hoVAEJSp7dvQox1UKw65auztvyX7ZAePGkRENG",
  "key15": "SZocjfLUh4fH4cYSjRUVtQxT4H5j9ufn5xaJpec3oRAx6xyPVP7QtJtLbLpysuVPZaf9PfK69a6cCLhWnQSzrQP",
  "key16": "5jiksoVYkPzPiMUG8psoUXyGCBuXYiqk9fhgVB5t8mVigoJSDThEhPVT5SKGuBFCKERSKmU6XdRoyh2Xq251tgki",
  "key17": "37VZhEHg4etTebL72JcdYwuyw3XhfQsmwYKXGV7khx391inWXZMRxnzwUc1jCQo6pUXEty7soTReBkD9c7fU9viF",
  "key18": "4SKtsry94CRCwfzApe1uFoMXANk1M24LyUDeHynLYj8NcGH6xQizhcdtkfrUkXZGZqBtCuwvg1h5qa4jhKEET4RZ",
  "key19": "3bnmMPuXqyxhNgzzWPLhAqcTgWzi7abHwMSy74T7rBXBwwoR7QYRsCvyapbXArt7x53Zp5QFBasUtVjSZJtAwTPw",
  "key20": "4U16bscgkkNbfW8uizGXQA3ApfVB9B3suwBExBWvcCP776GgruMEYqrC7wH4W5eNvUrFGjEmCpYpDYVqHEHWuhrJ",
  "key21": "4grnsbwAdt9KgbsqhPMhn6gkD9vDVYbJ4diH29Xq1U7LS8Mur5gHPTbabhVUNbrzDvDJh28EpjAJaTbtUEkdpmJZ",
  "key22": "3zJsfLJ6ZgCPwWvUCLvrdTbPfMWuEuNHs8JpJgXbogNVQtAoq5BwcHpSt253oPDULqfYnp9hM9DhBEnmCnhC6FwU",
  "key23": "5L4rtd7pJ8rUMjtG3AtohjwhhMFvvn9YrTpPXKqE8v49GD4DHZGobTBYAbMMt1CwRAm6GdcdmeUMRf1b11QbcsDE",
  "key24": "4EZqbLQjp2rT6rzss9FefqSuXG3AzBsFRdLoZDanXcUuKSDonE9TTFy2r7uZXq7UC9PXPYkwpu6tvfSKo9TUeDEi",
  "key25": "5fssEaRqfWeeXhTyHbNtdY3FWPbPgeRN7cXu2ns3vUmZBYw2cnTYUmoUmGYPbzaxnGamXq6UpHw1tpumVth68QTG",
  "key26": "3jaXaiZXDLbkJvu36HYbFuqVQvNngeBXiqrLaR5P9D8ceNThCqw3mMDYuVQVZ3qBV7FyDUU8YpkLdBithCxguQXB",
  "key27": "2cPUHUramvV76R5kfqPjbPRFH3RY9qCMyvXZMTWSHw6MCpKHPRGcG1tkQutJmif2hE1XMwTCqbTYU2CLN5mY6kzc",
  "key28": "3iDAF5mvZhNAvHHHscjqjATX3EXyxdXG7c2U6mmVwwVpVErAU9i3ozo1en4NLUKR2fy2JBMuX7qBY6UWozapnnQt",
  "key29": "ybxmVzgPvrP9WwaKUNrUDWt27h2Vc2zk2q5kBFX3ZX5929ozCnU9z2htiEJHsgfRaMsEV6EHszM8oovosZkB3hA",
  "key30": "38e3mZkdR1WarjgHrvKz5TU4YJEwBv1wexumTPi1JoxzWcdLdMtDpduWfVn596Uom1zhUSihVEkrFXvjFstDy2ee",
  "key31": "5BujSsFo1E5jgmzFRezQ5o85xHkEBEc5pXZbQ6H31nrRAvyT4YByFbF5cjcXHxBN9fd7Dyt4dKngV1FLR2tpX4vk",
  "key32": "3aadnDzhzoauaCRwQU2VxM1HAUn9NsWxTZM42AWtHWJDpvT5Aqn9X8GtiWdzYitE4WRQowgM5udS3MiWh3SLCmr3",
  "key33": "5LvWD38PNpZ1MNkcZgFGHVibVZc8jqdnD3B4nwGiaSucJkSQRxBTaYbXnbL5VmrYYwB1WGiJFxK8skQjiKcmsjvo",
  "key34": "3hiSp96XNF1jsqVzBTtjB9N4ZNCuPe9J69rm4vdrQ1dcVzZ3SpMEhdUxrjYeUC9G84bF4eo3L467pjdkPMUAQjG",
  "key35": "45UPrBEnVhAgNdwiYbKhcMESzpxkYwGpz2tiGcKnyxRoqDUm1gwFPYEQPwzv59zh4HxHTxTtxeu3zQxT2V1ovP7n",
  "key36": "2QsSP942KnNPbMfvk5Cx6i5KroagQVCGB7oNxzq6Bx3xudTyZSGwSzLokWF7nNjcypgQt9bFkw1W4WHawNum36n1",
  "key37": "361btvnokJxb4HcVxneJ93zM9ov6njX5kRp9KVQCDxvj4NAyHGW15bfgVYeVbVnyR5uFJaMCehcJvKkaWEGz5TKS",
  "key38": "9mhRnCKr3spaHwr4n8SBDpMcL2jBLpkY3yKXgNk6Hjk3jMMeUzhdqtEqv3M8DoX6ZvvKe12hrfokfJKtgSW4w86",
  "key39": "5NDSBH3ZHE5bV26dZmwK26PXmg3tS44KxGMDAxpkMMRGnLicmRuvJfzWbjtqJnFhSNsGKxe922yJSWkRMEGkaprh"
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
