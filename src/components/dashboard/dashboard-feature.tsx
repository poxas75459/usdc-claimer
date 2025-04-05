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
    "61ToJ8euwWiUn14MvCuTznG2JbMupGAjtm4MmnaYZWFjNpFaVmNCo882MgkE8jR1W95iQbAdE4GnwmC7CoEXvNBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnqb3KvnnYt56sSiXwL8YpAZWdktkMwU3juk9RRgUx57LgzMJAEi8Df4Gprf1KqqhMUt4K6ST8gewbRyA62Gn4R",
  "key1": "qUM3S1awTj743fpfCiVEcaVCJgk1wVuCouFZE8XmCQb6FHXQ1gCM9wjCZUQBrDB7xhCjkm4SwX94av32tBZYPgZ",
  "key2": "46nzm8J9Z1giUpA8X5z5XVHqjb4rEitgV7HwuTv4LKdnYufeuZum9RBuHGcgKDAqTAwrAg12gNMhTRZm9VQ4MzQD",
  "key3": "5vu3tP73dQRt6cPKLk8F5xZddLFG58Zcu588sZsT8SbL6Phjzy5TFqWYQVZaUqdLdJCzxzx3iJG9SZpfLnNshyTR",
  "key4": "44nGAoWDXNCmAPPcdb7mXxLT757YXmb7ZoiHUNYq65E1Rvn1HpYE7637SPQj9FfFR1P7G9q2F14JHvRh6wWT3jFf",
  "key5": "4fjFDu6jtq2y6hfpcQRVPEByYfUNuYyrxbnSywikFd6HsWXRM3C1zuh5pSrdnH8667GssiAq59seq3z8fSu8WSyv",
  "key6": "rvr9xYgaYi5ZcQX3z8SewktZZfGjJXe9Yf4BBSZswMTycabHFSidsxfbZrWAaeXg2abNpyxfpj5iKt9mBy1p1Dz",
  "key7": "5p5FQkuWkRjE41KdMF7rpcJy1RTn4SdfTX22ZmXo8NmSZgpihj8U8By1J1WoZPEnnEGXWwRpqTKJznAhjXpuLFcT",
  "key8": "5965quyxBsghVpUBf8zicqWJB9drZR7fAKKarrZw3FVZrKRTXpgU4mfF8enUbFAajXVZfYMspXcRQyqNuw76mzLF",
  "key9": "3R89txCpwkW516YeXQaqV93YzAuuHR5RVZvynnmcALGGKg3bs2TmaMmWPzRLAgNqvpXPZCfS2RXR6iEb5LvLvSkb",
  "key10": "2Zf5LnXzjEzvsQVczPN4dNz9UFpvrwWcUCpj6Cx4hkfMFjHTjPoYdfi8U8STo2GUWovZf8nt3dyHVnEjAYoaVXLV",
  "key11": "Vvrbqz1GKZUSGvo77e3jMVeNgvqWpazzF2QSNvQCRVCgFtj76Fe966vVDWY2wCVjUWdn4zeCvsG4yTBJtXDMVms",
  "key12": "5eyHKtB9T53vWP2BBnzcmU9ZdvZeszECb1xko3DR2ejb2CpV21JA5he7FHJocAPYV3Rh3cpw3u9fyjaqzpdsrkou",
  "key13": "2NUNWbnzNgk8nHZxWp3Q2CcK6ickh959sSdmgNdnWBgoJbs3zx1NRtXQii61utcTqKgPVK8x1CQuHK41M1F4ZT3u",
  "key14": "4FJGRf86t7Vt4JMd9Xq725sJq49tvSFyz57V2mNGZG43Q8zjtFKRvrDwhMnDJnnUo5ezj9vxomg9duAbemB6ncSw",
  "key15": "GA43DkKebtYR4qvbmGF7zt4CdXqsW4Lh67SuhgxvucsjkVJuPuap5E3nGaNryCBbZTgLKbSsdcbYTpCfWJq1Nd7",
  "key16": "2wQvQA2GSTxW7jrwRbzsW6GkPecn3VBhXF17EnFp7zjdnEroY7STm1hSpQt8YjKV73sFbd67cyYtz4x7MfS5NTQC",
  "key17": "2JJRMbMb7B9XS8qvkaL2x9hTMBPndVKJoMeTpZ84fxwvmyneKGQyXjXZszrfcWPQPwMnED1Hh4JttkHpT732qjhS",
  "key18": "5JmFskfJMAC1QJiBoqUMiksx5CdDYzJ8cWedXhYdgveiQwEpNsb13FALv6x5ibQJNCeJrgycDcnQRGjYP4g27DMb",
  "key19": "3WdZVD8AajziQDKeVv6LPt7cKL4fgBzWtdu4utrJUrpzcM3x7hPZxQ4cNdr15bSigjUAwrQ5Q1AvAeJeDHkAJJyH",
  "key20": "FraiRWnghnrDxquWTddeJMVZHeWaLYKSb391g7F3R1AGL1DrjGDCe8Q31mYWg9d7EubkG91JK2iKewcRC6NZKpY",
  "key21": "3UzUc7QGjUTjQUS2uEMA2RLzKxGyyeBVazeoYk6UBY5eeZmz2gnQyeGBzBrjbcpLbT73yAhcDGDVhQBeJyGCiksn",
  "key22": "4hsA42CiQiJxTafWzNU7qtUQ31sHh8NoNaY4YWqWSdpSfspo8AZg8rD159UBFap8XsbrM28kE2Yn9VwgfXjb3SWi",
  "key23": "3qv9MFu4E9HtVrHynPj8QQZkQ3ezgGTmg36mKjBZYLEKSDKyQxVpFCHqnGDhVV59GVKqG2JCmQH7wmAhJ4eZP5wG",
  "key24": "2f9Ah9Q63fdv4MtZVrzkr5xkKMkaZQYB3iUyQBC5wZufndrTxdN71r7qNDoxxUDgfQiykG2Q6dokoytBoRtroTL8",
  "key25": "2B8dbhVKuG1B26S6MFv8cmfGgKMfBmKu47Tp4xxYfGmNY51LBqDrRpNWVydkNLa4TG9DApavgxJFze3x5H1WF2EK",
  "key26": "4NyVBMumaVc1xsP4yvaXRHWw8vrbfsCivgjtkxviJ5yKY9Mo46BFM3Yy9p5wkrMmeqWw6vL3QuyLokphpATTyQgz",
  "key27": "488EjXgsVh9en14yH2PXaX6BMgg6hchVE8x5KokMNPx86JTT5HeAUqb3ELoUxQP2g4VKsoxdkPD723TCC5fN5FH3",
  "key28": "2ERFK397zZY7Kky9VTub9azUC6Sjkv9iq9yqYxSx77qR5TYnHDnjC63y3WmrZfefVEymgQQxwSMKUU1CVPJW2A1B",
  "key29": "4QzyXRE3Vp7dt45pbhBmniCSm3FN6GCGcxKn5XPwUhqqF5rXdsDaJcXSdN4mUAAvKJxXTZcapAt8csrszbS6oZWP",
  "key30": "5LYQaiKKDmobdFvVzaZiz7SFqqHmNaSE77eaWsn19E8KtYuJQ2FwgegWVFqJMAJpXnSBvbKNaV6QPD7w155EDf7Y",
  "key31": "5Pav6fX34C45aeTGnANpAQs1nbp9uzFH5aiDLPj8M4v9HUAXhLdLKrFxUDcxAxxdg32TMjGaTV8nNMWwZYvj3wvf",
  "key32": "CZkgCMKdB8JKz1YPSDDcxmwTDHQeFE3v8Hv1SPi7eG3bmuZyYUgdb2JXmSMSCeTNq3bNUFaKjA3bFG9G1Ph76KJ",
  "key33": "2vw8hhbv8Tcur491jXDAFVJG4xgNKd2T3pEUWAYQ76mMTLRVLNGfN36tNfEtf7rXq5uwAn8LYxg4VEdrC7fZv7o4",
  "key34": "63cNCvAcLEA37f7wtFRfrU2MbazWTbLVjqS8usudtoY5d5zti1wbCjAjZ6Hb2U78XMNrw7S2au3xyc2nixbiFotj",
  "key35": "3o521qBxXgiHy4YihVqMS7vdbKwpDk7PPDZZzwxoNwm8ppYDrqQzNXkrNeuCFqx16MasKZ8iHJanoybanWR1XJcB",
  "key36": "3SWpFitw1B8Spc8RzoiVsQtPbGmBkPbQeCk9DCmYtdobWocau4GiYCn6v5ufdFTYLpJuzG1CcUStyW5Lwa6HXcs2",
  "key37": "5XrFyGSc9VJHTW1n8uEwpXjhTs77a8GH6SGc1U8EqZNgS8BraYrfZXyZKo5LQdJfaT62Qn7qt7Aa1Pz7Gfdz478s",
  "key38": "4sqnd8HcwVQUghkZ4FyCsaPrhrvCViVeyT91PXGR2wQtkr3o98vbDkkKGV5zdHZ5aR7nBxFKQbpfywGWrGN74UeR"
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
