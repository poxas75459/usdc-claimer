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
    "GVdWCjZspsJDJDhsA3RhoM5MYhNbqVaq9d13KuQ4cd6reyjpoKdjJFpdPCLGkrWMvty39m9uyuJh35d3mmCZLer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNUbkSrqVFeC4LLhWTQ4SaDpqhV5AJanqQPimZm9zvxfKCNkUMhVBkgLgMjrKkCSmqy7mVny5ZjEetUiwZuRRmD",
  "key1": "3SiC3J77voeazQh5ttvNCXr8tdZTmViuL248f61WeGfZcSQQyJHuP13Na7gEhfdMSfuEfYNJDzGoJYkLDG8ob3UP",
  "key2": "4qWpyoaYT9Qx9ZS7eP26ZPoCEoyXCqwX3C1agSSz7znU3qzJ9RpFZYNrVAG2HvcgwEj7NFDpu34HTeCG4Vyf5fZm",
  "key3": "5dD1mWngsJiqwhN1uaUPFo6QTySHAQ1DoRT1TDUV3imZmnnxrNpF7R31R7zBvBvEATHk4ouhtpC8rPmhR9UALe6T",
  "key4": "6m8j7x2NjyVWmkkXJb7jRCkX5TTRrwm6NCSswjYXDHzLexwedLf5iv8Wf2wb1gciGSGusoTkzXfJGtsMnMRvaH4",
  "key5": "4egoj9z1foQcmUaE7uzfgH8o2PAy89FSbtk5mkdTmwCQbznuER96pYxk2QxCGe9MuEY7mHXdysr9cTkkqqpcEAYu",
  "key6": "pq6JfKYSKwi3fRfJNvidVNNUu16E9k3bHjMNKuD2W6NQpr6PmvGAnZPwwVr884YM3QgZYSzKgcWzGjta272vzRx",
  "key7": "tooP5Mu7UA9bBcL1itumnLQ3xEKMY1uq5Ma7cFg1WApYXhJhoyR9JpNJWYYTcdmqAAo1DjvHJX77REZqvxk67yF",
  "key8": "3c991xaNiabgWnkEMt8RyaiKpRUp9jjnZ9LJeYdUFp8rNBNZHi4auuQ7yNFgtqFsGRsUQ4pYNtjCQbuuYnNv7L1D",
  "key9": "u3bGAc64hSdC2Sz8751jQvd9yEgiPZXLT6F7Ljh5u7V7jD2mhPCBWAyk2mbWitj2kbZPo61ZADQdvvuUN7Addyx",
  "key10": "5mQV846C2ADAUiMp9wBqrxqMQcA53K14dhgGHLJhsTPph5fMUfubjhQ9SPGJgXQFLjkzGRComb1SJpbek3ebs7tU",
  "key11": "4B71L5iGpfFsjRG6CgxHtK6YzLDugVfyfasL1ZprJMiQCTq21groGtYMaJqGqNkr8DcR2xif93W853NR1FBDj2kE",
  "key12": "4Z9YJCeC44wUYUv7vB1XQrjqkjgRjKJ15JYw4ULNU3ma8X73XhrqqubSA4hDm6Tc1FNuW3ALaUpzrkqmxcU8cHia",
  "key13": "aYft5h5VehS4wytPZMn3Jm3FxfCnRWBC5nDhCWGNAUZ1UYWbeTUqvkLvYaGEVtZmK8BuL1tKzv7vwivADHUiSj1",
  "key14": "28ErRFyYSrmmkVDfinjJVV29GqPiL5oXYGsvMT8V4JujnGhThMLmHhUSEuubqt5SBq1Qp4fGAUgLZg49z68eQ6aJ",
  "key15": "37HqwdX3vkr5EErA3JYmscSmUe69m1nbUi3E9yXmNQK1EBrYhkh2Fs78N7stqz44hKtFBypZTRjjn8TSb2ADM9KN",
  "key16": "4t8HgDCBacKk8pk7treWPuepMQMePdb4VjnoyoRpUVVHEAggJpPpnR21n5kTpcBVrw7SFJt2Dk1y6cu51Ac1fWjK",
  "key17": "5hfRUT5QwMaZjSWcAma8cAHCHvxjS7i3VBooihJYX1iqV5BsgSheEHVaJs86GVwWzpw7feJnCVkFfpTsXuoE8Ksu",
  "key18": "5jeZQZJb3fJAL2bCxJrQtA5kY5dP3LSJf4P5uvQtpwaUaiAT6FJbHmJ5NyvNngRtMDxjeEu9bhj1x58X4X7bmKnH",
  "key19": "3Mfbw6auRqhJctLsSbtEiJj6UifPfsVcYidBNk8Bj2xievoTpwRi8iJgCPV1adYPSsrbwWk2eBh6txVAV9oqBKtV",
  "key20": "2GJReUMvQ97GV4KZSsUYSCCmktenG1wMCiCL9udCiFa4rgjnotFNC769atCpXYiwiDCG7koEhzTjSP4RxXXvR7jk",
  "key21": "2j3z3RKhphZhnNYQiBCj7916aMbH4ya4wBHStaw4CSL6TywTUow6V2DnwczYuESBf5ZRyL2coj46MxeL9Wiz8k7G",
  "key22": "3Wo8Sq4cot9EnGV8QyCmtJ2E1FTsnSw314UTEYqqC1tsKmcFbcxHxiLcPw4A3gBhPbEBNnFm7A5Zf7mGM1xX4eLm",
  "key23": "5CWbrqFtwsi2kFcRdHC4aFCeommgN97T9vmH7jfUi6b3udeW65YxyggaPX5Rzd1a3eSXhhnL41eVHnmGjpjVpwgu",
  "key24": "4mMVL5J6qNj7u8eKeqoCbH5P81iw72RpjB7TcdnwN4UEoPxGczxCa9A6phw4KCUmH7Fepr4witAfV9nupEQJfWk",
  "key25": "3cCAnJEm98cc2bJNqQZH6xsDKAfn3Ek1RcM9kfnvZ4sKbjoUHghpQ6ph3A3qe71UXXXNeJT42Vi5Ze1zzRSe4H5h",
  "key26": "5hBQNZjWVKH38jXZFfSeELwEeUAgvJyYiHS8fQtjWersu6mGZZvU79oGB6H7X1vGHmASay5MrNzxkwfjQtKPSBvg",
  "key27": "bMjkz7XvWPaQNaE6oFNL46k3K6D6npZ5ukGnmR5uAxrLuXoeqqgY8i6U3qpzaskNYrW4bgTqVTM6yP4CNq6ze4a",
  "key28": "4SbtgBYkuVx2sK7jWrsRiecvX8asbgguJP1JQ5CJaSj8JBi7jHXwtMXKNv2B8F7DBxpDyVPBKL1dnfFmjYs5mc5u",
  "key29": "5oZpnqL7yHFBzgGgwnURQuhVFg6aMMxJHmRCQTMAtwHJkvqhqZq4qZKZWqfG3dmBCGzWCNZFe1P1svKmTP2CRqY8",
  "key30": "4yfRq3Pqb9skn2yPdVw5NfLPjLUvbDPT2DvL59M73V6nwjN5k9LxDMPtGxw8Li3Yu61wcm7QkG3TAkhK3nsaj1Ed",
  "key31": "2zgx5awfxNjqMXt4XZz4wDXja1twvDzFv8bQzoWAkZ6uxrJQgeXHgEncxVPsfaPQB18TNkxFykeWJGuh2HVVew5F",
  "key32": "55eXBkaUdvxSPwp1b5sKPbtHanjDKKes9JkUUKpNSaEJAxLZeVzBn29rDcMWfy4ofzdjcKZcvRVSijvDiaCWAtP9",
  "key33": "2TbfCYsqp58zW19b1cqFDEHAna4m6LZagvJovi66xRSyZCj1kfbex9oMwNCGQKiVGyZjFYYJw7qHsvtySr94C4bu",
  "key34": "3TkwLxtqKkoTQuo6VMsKfKD6JJ1FyXgfrWftENYgzqDUkD5qGiX7yewucihyFDTMyzSzdaMifMM4vLz2cr4pZDyc",
  "key35": "5XPG29XwxExhijQoLbE6Vsi9Go9VMWiPJzdBUTntexQah9yAiWD7xiVrBCZnp9oSeX67PKGTz91DW9RKfR8N1DdB",
  "key36": "5zYSVeJ781bKpLvrfZaqHAFdt4Wa8LTNjMC9KDEANM1ko1tpUk8F2X3KPCe2a2YyNv5zNeaQ5b358Lj2qAHt5vF5",
  "key37": "4xQGtUefZAj3zmCrizRjxtStHe1skSF1FLLwD8ZMKzT5Q85QFucx37QVpMttWrF7s7pGihb3tkwmYXu3nwDpDTdp",
  "key38": "3CQiLyTKevgMQBYX3H8ek88zTTQkr2TEhhRY6GF12DLgaVsRo6E4yrzoKHtNzCGXYEdvnBYLY2trw85zBdn52hSm",
  "key39": "2yWd3yfkgpGFkrkxWqWWLLF8L6moa35ASoraWpPsSEPAUPfovfM6PD88gTBnXSdrSFJFPTvMYcgDeRtt3FDtBHSq",
  "key40": "3Mdhs94AnYxCwPv4iFW7RXkoneM4V4Ffd8DiErR8UWatviHpoctY8WRTR3Btu8jCxruTaQhh8gsjQTAzBRVT9mMJ",
  "key41": "2RDJY2es41NvWN6z99pHmTG4sDnsbnKvBHmYRF884W7QCqsNsRm73njeiutdRRstKFU61NYj3PVwoYiVcfVPfMVP",
  "key42": "9XR3Ndg4Pxmp6M8ELCdw59HZNtnq7q2CQuLhYv8mN7GkDDKxtvtJetTpU2cDDH8Xvk2ochXQH5kn2S4WeExTEGB",
  "key43": "5uuQY9dT3gpn12PKQLh6JUAii7kZQS56jSDi3qYVDjZ88bBhDs5iz2ShgxvfWoB11ar9QQnpVPmxKtp7YCxCu6Mh",
  "key44": "3suBfd147jQMKNhdQR8KdC3vFYtSuKAZorVX13qqNGyZHTzKY9d9nFJj25T4h6gMQH4Tn7nitJPdf8J9WpUUiGjq",
  "key45": "4Jg6USBJm3FeHoteFWsyXWm7oRv4ainEB4L3PoSLr3hTgSoLHEivjMkfKsLuo4bp9Hqf9mMEpein5RMbMmfjipDY",
  "key46": "3fRujPiZa63Qpe4YrQtLEQZDMZt7eauQUSs8Mtf9Pj8d8wEpZEFGEe24TGezZ55cP1UvfErCUoa6qaVdY2Qj7pU1",
  "key47": "3EKFtVwr9NopCH4wx2RSu7NCz1RHSy5z1S7iwB9JyXuvPgTJ2hbsHe4HrjBzUGWrwo3HZr6pC9AtpveTYt64Ru45",
  "key48": "FDjD4YiiTVtv79NCeakT7RB58ECFu6ACesXt9ojBLhy92TMttd6g4fzF7UnKyUrjdheoVr1gxEMxPiJno68NE7F",
  "key49": "jweiBhMaoQtg49rZyBji9n7QjZ6wykfEoEbXj48NmkLrPf2ZYiuQjBRf2n4ryvKx1iMGqxdx9NvbVBoV55LCaXy"
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
