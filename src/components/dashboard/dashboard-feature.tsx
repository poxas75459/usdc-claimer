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
    "4KGNkgJT4gSmXDUDSEFjZHpxW8iYA2dwAfFQPHc3sz6rndBTz6MsrYUJpqKUHLGKkkb3vCmVYWvGtiReUjeS8yzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3x4DygnkgdbFx4urKYZ3S7Q1DK9n6u37HUG598J5PdxjLgQfdDf6o1B32X5Dfm5Tuknc61Siqi6LmxLrnofhU",
  "key1": "2Jmc9ywvPJcgDiqMStba2yk5jszSSMdH6fChPdHZf5CyRHkpmGe2k1AJd1oyyQF4VXkK9bT4qgFsN3YXQJdMWLfq",
  "key2": "FB8yTfhuWkPAuc18JsqdNf8Gm242fNEXqTSv3S4WnQCDvG6tLh93iKxsAMqoVc4bu1ksu5A2fqVqpf15RUmubCq",
  "key3": "RspAhTYeYKf2EAYf15YBJc2V132QCC1G4iighoBJ8eC6juCWYavKM9R1qbTfeHL69h9a2rPqQy4AsxkgcHK4B3i",
  "key4": "4cUxUe79axSEiAf9HrdfnrbfmMDwth5mRUqtFcfNWBmJWAdsMbgcqFRHsidfiXsQWEW2UN2jYtYHxYVG3r3MYDRt",
  "key5": "4RHUVxBRbqMYEsu9a9HHotpvbU3bH1JRbxSGkWsd8BToahFJ8ve4So4uFFLWENB1Scga8Yuis7zSXv4pNMCWCjwc",
  "key6": "3u5xCbkDvc9QnLVcg8uEawztwyY8VaqgomvjYpcfQf7wEED7zxXKkdE7oFU2apnSWyRvsdb7sz6PpXWd4RhsqDvy",
  "key7": "3Ca4FLYnacP6P8CLg3jQSV93sVjzUJPB4KZJ6oJ9926ufHUYc8mkqrcBR5cPBkfpVRvzZuv4YLwBQcJqXQubteL6",
  "key8": "5QwZxKvAesxQyN9bk8mLG58kKYTgaurTcjVKGMgqJNcaZgLmD8qidbKogSujvc9EAXK9JTwLV2UVKxzMpmZX4boy",
  "key9": "4Xw6ZcYrbYzU9AS7eim6udxXNosbSe1bB4oJCGXZfv8uMWaxwhFBcU5wxxxjDasAAzt7LJzkNwFFGZfNRTm1Zqqv",
  "key10": "4HEz3fAoTZjcymJrLma9mCuJg2XutC1CbzCrG6PCqv97d6KFq56r3fmkChQdfS8etdfTSNvUPwa2oYzB6LgYpryq",
  "key11": "32fuWZAc5m2i3SEGza5R6uVfsgcdWL5EfQyCwUCTq3uHx7VGG7NzmjK7oKcX8VhSaM3ofBwDVMgHhSyTgyCiyfQG",
  "key12": "2FPEHZcvjW28oZYAqFtvmPt6wnbVgCp7wszw1Cx1gCxjvQpk32a2x18CYgtKabASter2bSfsCgGMof2XoJjadM52",
  "key13": "5sqx25XQPBnZUhzoeieV3ycaSbPZTA9RJ8WWMpe17EFZA2rBGHv5u1u1XyMLejWLkCGAQocmSiJUwuqrM6RkWo5M",
  "key14": "4eDMAs2zbe2XzjpK8pSGSfCzNi4T2uYP6KSjbDCdpyNq933TRZ1sSg7fXV2X5PRuJG4s8cZTtfRw8HTV6EHw2Fo3",
  "key15": "2eCJ6ndY8qSaeEBqMdAzZRhARV4qencrM6rd1L8tsouD6sNgwsan9et3tnZG2wiHZkLWSj6hdjhFsG1cvdBpvAoW",
  "key16": "2QG8Many4PzvVQ9WMnqKZ5aG7nx5PE8s48HSuUEGYsesm8Dmq1wardVXftq8p2SFqecReFg77m2CjG86fvNPxof3",
  "key17": "5ZTrYMKzikRHcwVY2Si3wQygezhv2ugoBB7P3B9zPxz8zZ1M81Qarh6MEKDeTWEcm5QstFYPVFxdNojtPn8QnQVd",
  "key18": "52aEYUMrFFzPyWEGzecfYBSdbs3383M2391nKARp8pqTRkUQuqzYbU3RqPtzpRCvgvp1okZXuM7kdDyzuR7jQ5ND",
  "key19": "23GwSR7gGnyefE6VRGUfi78NuEdr19qTBvjDyjPhshvgxsMGiNZv63vra1WgtpwFN1Y4CtAmnoVFiNoh62dJ77KK",
  "key20": "JbNVWPgDvTKuSniD9R2BSyyghFv1smjta7mFRiSsTPwkzogkAXCRkHKb6sCu33svziVREwi4RZCby7EoRFLqcTq",
  "key21": "9PduJFFPti8MHPWfvZWx74zL4BEHUJrD8QKgrr2sqNuH9idnKzW2pqP2nSwbZ5jSuGyioSrbZkcZP9Zcf6aQsHp",
  "key22": "2TUqYE856piB3xEjYTGm8gEHR3gMAStX7Cyx3Rq8UDqy5aZhLEVJveo8dPEXeZtu2VUUKNqWeek1yncLUQRQCVNf",
  "key23": "5BwCEa3qaAejCAu7MQbDQSf4wbAbfj1aHts9pBxrnPqdrL2Mkxa6hFkojCgxmsRC6LrnRvQyyX1Cf3MRieQY2dL4",
  "key24": "4yTkn2kpNeubZNxdJSDxLS7MyETKeR9k9DctLhw1i61MRrD2QhVFPpaUmZkPobVSmBqngAMV4vX4R6oZHrUHsAZo",
  "key25": "3p82qBGv7NSEwaC8y5HZV91byf4SmwkyNvtqU6MuL1MnMLhzAfMxAmvgMm9tADnpgGuppzksDwu4CytzihBubfFa",
  "key26": "5PHRvjYptEXNsymzkRDDAVYF6XmNo8b8JJi2dPaZBTAvvvz88bERRkHifmKEdQUf4oqZ5siYZ1roaZp9c6kuh72j",
  "key27": "64e2HnFfbg4TDaKtvJ4XEtGCeLE1zTo9DsodJawydiJo3HDJErkpZAkTWZcpbybdNGrNvSL6gBir7t8nQYJdhu9U",
  "key28": "2Z3oMC3wv93X7moqaKcU5BWFbsG96mxfPS4t6bL2jh9EgZrs3TvNs9uj469BjPzHppFremzA7RgJEjEGLkNdLaMz",
  "key29": "5Eij6cy37YY4nnJHfM7Xb4xr7iPyLwZVAaiSm5STBxUL2CkBAvHeLaSrqQeSrXkv4faxCYRtuu5TkvJGAzzQa34M",
  "key30": "s8UdXzR3r2ggQmiiu4Fw1MJwUodd1NZHXkZuHHVEdEJZuNyEgKvv9x34fMD1hny7ijrVGXg7Mj5t9VBLSPFbnjb",
  "key31": "2ZTHurdyF5HKpvqXy2DZwuznr1Pg8fpE2qdA8fHf7zugWeieUw9FMeHa4quo6SjR49yYCmoDJJ64DBPjXitizxPi",
  "key32": "GSbSt6ACqs8UyUfr24Y46xy5it9QgQUpeXisMP2diCmcae5gWcqrZyTYDn95T3B9oGNjGJRVFbkkJRTVL46huNg",
  "key33": "62W1Er3GC8fGsUw2CHvZSXrurJB3kbXL8yTL1pEWVXEZ7bazfdSLRgBxnrnmPgSMrsvWa1Vybh9J7kNyrgP1wUua",
  "key34": "4AyJRwmzysayUiU6WhC15mDsBg68WHz8VNUKuc4LdxBZKVEzQGAKkPuCXRceWEp29iJVuVXnpe2eB9777T6HZi62",
  "key35": "4JmkwhEhZfggNjXh54PyYwHUutij7mKx5ZzdnS5BuQbKgtqbLbZ5sPvCmNptsAs91W3om4FGtE6p3cUYQMWbfjdQ",
  "key36": "CbhEj3tNj6rjHnSNP9vYnzuAhDngkDn9n5ZHww9JveiBMYV86SEDNxcPjkB5Hh4MeHgRfCgusTBexdbgAKMm8LG",
  "key37": "4AUfM6cCozHfoB4zkjkuxhnAm9Ts9Hjgb8QrJGGNeSy6k7EzFST5pZL9MXuAW5mjZjhcAVCn6RmTquYKiW18MZJo",
  "key38": "4hh8Wtp1y79FwDU7HGXYBaEX1Cpcqb2mnsQXr9N97Mfgx48vg1to8qrgt6ioM1ZfUbKoJtofcA6HDkBHost4jwfX",
  "key39": "34gB7Th7NCMjmAzLuNkySYK1ZeyGgt9d1PFSbrYR1CVnNL9iouAPENhb1UZBRiF9VXNpTdcPgZpTBdWKPreijDDd",
  "key40": "5nRYAHzr2aEWgWpzTxqMQSYE6ZcFT3y7QsPEYXHe1dn8ShfK1EqQdoJC1mxb2T96HxGFhEXViCcfqmSjKYeHDzJA",
  "key41": "2P9zJq2B6iGmt2LohuUFgp79D8DdBnMpm8xGgfniFj7EzbqXkb5HL5T9qHZd5Hx3XYGXtbUJ7df61yrTTmviiWt4",
  "key42": "3gGvRGBaPMBYPT8nUCbQUn4e5Eeaw4YH6u6V4HgfRqfncM7F7oR12tU6wrwNEj4CWZMBXLkLveHdQdDz3Zzbc74A",
  "key43": "rDJbYg7oBDk2uE881HLkRtMMaZTWMP5wQbmQZzERsaTfQH1bf7AZTDyj6cs9Aq6jUNFpA4AqxeUq7611GerjpyU",
  "key44": "5y6rxcN8k2mdpP4R8z3W9rHndzk7AWMXDoJECf3TLWc7jgCehrJKUsNE3YfNL4rGc8vJLnmrYjhWTEcxsyDQdms3",
  "key45": "33a9DFrs4f3xcPy6ftLmLrWMnXzHsbyFMqECMHaT8smsXRmGz48ipypNYwSaE6VziTPs4d45GJbiC2KrLoEhr4z6",
  "key46": "2zm3sfuAHYCGv1LgNwNePCEjFcXoDQQWurNymmAvvtnGiaeaLtdnFBvTZL62DauRy2Bk78gWLMJSLf3Stjfyib7V",
  "key47": "2yzS7tNBQUTSWUuSK6baq51H5kyvYVMxSei5tWvPztMDGVPPfzsFRWJN1ioooUhc8fSwZ8jQT7gnnDDpnwk4pCH3",
  "key48": "wttJtm8LzHpGoYKx8tbvsvGjsyBEsysLcc3GBTMbvVso8YhEs4ajB98HonDkdDYLcTgnacmH8PVKx7vQjNBiqZw"
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
