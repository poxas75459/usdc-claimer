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
    "4wNEaxVf4NWY8JJNAt8fuRVVkTuGQDRz3E9FmsH65cmXY7oQMZGZ3Hovp4Cts7bD7ZuL6gcaNrLDaEKsdqaZbRyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGjipABxbSSH9pC1GTy5gZpDjtevJSJfL21N2ztPsQs7SqQrVZmXcsZLFoYebcFTngFmPhrMq6ywY58xyXhuwkP",
  "key1": "2NuJGTnBP4H4uPd3H9DfF1Py9fWLApZNuJAENn1BZT6SgzCU9k1sGkSsgXGt11Gv7eFLDvYNgttzxUn9tnb6Gvse",
  "key2": "3v8GHsuFhKMK2yDg9HENC59vq8sGuD2GRDmxMP9AGEpw6AnaQeGTnJtP1jXxM2C4YsYeQa4rUCriwojhxxp1r55b",
  "key3": "67mLwakubWzJFhHcr56N6UhTWzHKhNi8viu82APe6iPamAKDehonXX8Ct1RRD6GpPuyc4B6DZdSzCV6u4WLLbdC7",
  "key4": "5WhNJ1ArHr1M7euEmQrqXoap96db1iFtb7d7UHS4VktLDRiN4iwJnJ38pjpwa1pCb2Lq541USpZBmwGB1P4SzgBr",
  "key5": "2W5tactzLvrBPzchebQxdbLC5fEWhggNk5nwhB3AVpcK44pC67g7mUBZvugNrBX7V554w386yq4Nm6nvGB9yypWx",
  "key6": "2ZnX6ajw2y4h19nDDb2NgRnjTggJGNvEiXLoXjKwCJuar3tpfFpYtaSkLM3Dff6Cjc79hqPHeEkcwhMjgU34B1MV",
  "key7": "mvE6VbBkiSGG74CDtKvpshdv4RnLnRzzkhnrkQFPPnPcboWauT8SNm21XpWvpytgtBQFHAmr3JaV4HrPfjtQJsB",
  "key8": "2XUC4fc34B2p5867kATo4FtY6WAhQ6Sn3LpYvNJ1zsGE4No1kfrfHjZtWG1Cy5uNd8vrHEegzJB6PrU9y46e5VFZ",
  "key9": "3f9MPnyGnt2EJLwiV7qx168TY8TzQPCxmow3ttdAf8b6PXUHbKu73PK2X5Vahzoy26Xf5eVSubx9iKAV882FWfAR",
  "key10": "2txij5scYa3uCvktMT9xd6yksb7XAVqi5TYRyTv6sMwoeoxwKWZkRG41uBfFFtDP8Q8kvJuMXWkzdV9B9RzPuKz2",
  "key11": "2ZzUmqVQostgfr5bTD94kSs1wdHmwYayT4FDRdSh2dZ8TpnBipCZFVdP6pE9qtcB7rEdkANohNremFH49SJc2Y6G",
  "key12": "2M5EiEJRBobN8H7dgMYPcixbVDWrvqx6a53bKx33ZUWj5aLE3m1HJw52xLhXhBWpD8fwKmjJ37vQS6WUSx3Mj7A1",
  "key13": "4yrLLpbcEHLm5xVeYrDRpH4zS4ZzdxAkgmgJXZ2k2JMKdAtAe5HJVgT4jjtVwjxLQgM12NX1w6LRLWC2r5SooiVn",
  "key14": "5Amoca7ArXbHC4qUGCLUHbs4tHAVegPka7HJKAtf8t9pvULsRLD369nrkHJ9Kinwvd3xUpXztvf1ZYNrpEY27GZw",
  "key15": "PCffuHrvYW4G1vpBm4kVDdyCusxWV7ZscKYcTYokmxvfrkCTmtbyucfMrQRf6s88LuL61GkZ4PfVkaaxMdUvF7x",
  "key16": "296kvMycm5XB5grgnTC7uNWHS1rpB1Xx5yGEEUDPTv8TxqBe1CmdZMWZ49DKwp34rY2sLPYhVs2nJE79jVWSuKML",
  "key17": "2MYp7Qnb7A4kvVpo2aRhoaS25vqzeC6TsorttEfUMfukNTXc69rERiksy8ajPLKhyqx1cQQxe4Zp39ZNowpdeBKe",
  "key18": "5m2r6eaM9ASuigi8rNRFR7ZpJAagk8kWqZPXaHFuB9zWsua8Ujd2XohT12yxVpJHXqTZr9Z6s2W7yrEhfdyW47QL",
  "key19": "5mHgo3w3BuSwmXtvqLxckMDxFpsmKfJbUsFZNo5k2WrvHEDCAwVLF8vfVT99H7dv51uZwtPYoYdDiEBd6gadFBJD",
  "key20": "5AmZXGPuD6tVHPzdrhtBDytsBQ8ASxiWFR5o1A7cxxk5qCuHhh1Er63AKBp3Gvwp4MtCWKKwbjkzEa4rQngVt3bA",
  "key21": "61xLyvfPc7v9L8sWGqUAyaYVFqGPT6gmywAN6UChdpFAex6yCVizFxKGzDDeVgsbH4nqZwq9yQHrS2jDritRDNGZ",
  "key22": "6118cG9KQJVgACrAn8qq2GJ87SrrZRVPwq9wf3GN1wpERmtPUkQTgqB3X2oyD4g4hjExojaNf9a7757cMuogWAfb",
  "key23": "2xTKNu4YdXWCmVcwLtia3Erc2t51eSti5mKpQyMdFFfo9ezdeFTwsXmz7QjhhBtZXbLECsKW3FHzGXVHDtPMTbS5",
  "key24": "2dsZUCj7QVgbdgkec7C5rR23VgbLDexdMbF9m3L9kZexDwm7n1Zud8gP2SuggkVsv9bfsoevGc2MqTBDmHZh6GQ1",
  "key25": "4AzoZmLHuAdxv4GoML5vCdwukgXZsSPjcpqQDzZkFLvwUwwSkL1QErLrQJbNbRReEn1WttsQBk9e3hq4rjYtrGhA",
  "key26": "4gxR6E3XSUxYEz98ebmvwFGGjCKX9SxeTsdLGbrYL39UtMJiaDxQKdKPRnevAkDUVM9LScuiXrawcXA1qseriCfg",
  "key27": "5U39AkydNw3ukrKqAZPTaSseCJL2dAWma9P8mhN58j4MmZabCVQNVBm4N2F151vjN5Bxd3W2y12vkLQcyUvdmGPr",
  "key28": "4iTKLf4gmAjtGpxv6pi4EpGqJDJiZGy6CcS4kkwkJPEhkECX4f1GJ1bnxn44ojXTopj8jhgPg2gnKpmUeUUhuGSi",
  "key29": "263a6LNU1wkuWnKf4iSATv4rFrLdrqKbwFW7S8zRtDymdBr6KyMvbd8ziQJJDLZTHtbC31XqudVbDbAp7HjNf8Lx",
  "key30": "UipFV6RH5JaS9AWMpJvcNsxkc3D3UJCALDojP3VDfAxZeuLt73oY78qh57QmgsutFe7C6YGmYjXg3wnXMKdtAV6",
  "key31": "45MtqarsYcPjB4B4xhy3c2n5t1BEo2CEHQmnpS2QtHH4keQxA76pL1ZhUdFHPh1uiaym4VoatmndkXYV9tB5G8eP",
  "key32": "gCa4gGG9aChqw4tyTxkE8YMhcoGmM4s3fALvdRZRNxvTkpRq469KynkWa4GPuP7hXEMuyQFvF71J8KaGThbjdSD",
  "key33": "33tB6P5XouUJqzTweoRpCnN6Tyh341nPXiG8eUgKYEih37bEftsMq3GyQ1kGJ4cfEFZv6vo5WAeMMGuJgait3CU5",
  "key34": "3zDTfrj1PSaJEwcKVgf4QbT82Dx4J5oPT6ytu16zUVwE2f4XcFaCmsdu1t4Z6bLRB17XLTidRjZmhjX4nJXWFyPD",
  "key35": "2vaWF9WaQb3HPoeEYVrbvCd9SXpNWFwNzPknDHszTGu6oP9deSbh7tWvW9MLxzGax11B5LW5Y9dKRo23GbCRUvX3",
  "key36": "4y56xCk1RX3Th5Bpf83zRFqwbc8iqYJiEmzzPiYZ29KRXf2FBGN2Ho3YmpYNWcqaA1S1fncHD4Gk4BwF9Ce6FUKg",
  "key37": "2wqXF6h5Emw2VyvELfCLAzqkpLdUEcEqoDims1mL5t4oDU8iyxaE54MaSZEgmVr5KckYJiA3EgAqw9KKvPhJAHne",
  "key38": "3qjCBycF9keBxuKHpvrWCf8vyG7LrDLRhLJjfLTkEcWxDQ19Kkmod8qHgnfDy2HpCHffTZkRH3HfrrZ5n3ReeLJP"
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
