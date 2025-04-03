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
    "VFe7tSBLUBkbBhU983HRYq4Ss2R1bWKBoQj2L3McJo4pB1aEkLTMbsAcWfx5Vx7aHw8U56au3fTR6FhAWmjAGwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agF7fSqAUt67NiSZ4uYjEgyL49d46kRufgWzNF73h644zuQctsHknzNKMyYq9fo7SwEbFobGz3WHWAJ3cNQBHVR",
  "key1": "4PGRc11uuQdMis7KCgUSibTEHr4thbShWjqVh3DDgbt4sL47z6q1PkUhaMiCYR1Uxd3vSin5qZmomWF6xbZ41J7v",
  "key2": "2H1pQ2mXmJjNVxLjFwbPLmibgeD9WE3xPUjdT5LJwa1ZFsQFbp9aYPKrfSjuDPKwLSyf3HhhJwDsRsWRc3D7JqA3",
  "key3": "4p8D4Avyx1HGLC7aZooQZFmZDt9YrYS1MRAnqWcBUmCnFHVicg96nCDuD4S5PLjHcAK2DruJJVnBJxs65NPTJwWS",
  "key4": "3dEKUMx2verWA9TjQZ1vKzxeZDJFjKPXjWGyuxQv2nYwgZTiC28qqVh5KPi7SfNDjQJPBrvQDsVj5umT2NDN749X",
  "key5": "5yC4pknosaGfo5DZFK4AewFjYXA7YBiKKPMjym4Av6t5vgpQHesDpBM9t3VibKsVyXpRzUZNjUN9tkPb7poTgyA5",
  "key6": "3aa67GimUBRuxPFW4xkiHvy8sMD1eC5SXduveE1d6FMTF11KXep1S8aKE459bgqLfggmq4eZ1BY8ZCjexdSo2U43",
  "key7": "29QB2TLLFmyiL1ujmiFParhnBV2ZBsjUxi2Tiky243zowotrUrUTUPi1na6TkijTgnG9HkoYWqDSJqL7WJ9MvFWR",
  "key8": "4ZKWGhnrLoB6ZEYrE9yQBdqU6ZoArULViHjtGUEXYtTVpNSmkDoJkUS6koYxPnP5tpNc1mpYawFQuFi9wmAjtFUh",
  "key9": "Ki7gDDN8RTQDze6MwD7JsEoXpaNwcPxBePjsaFa1dm1k653cktnx7rA3DjC2GExFUWf9RCN2632q7b6CabM3uEm",
  "key10": "38kUaPJAf3dFRZN3jCHP3etMH2oJHZwbq6zpEcN4JYfmP4iMvHbhqTaVZ1iJenAqngr2wnbeZxFn4dKcZmqcNcGm",
  "key11": "4oyvZ3aQRJKWBbzWfzekwNAqC98uHhUU3BWqH9z4jUrobTmStoVY11tXggEnAyBTi4bqrrFQy2DqRGaUx99cFJoC",
  "key12": "3Vj6JCdcmDBfJ9ACpwdnpTnzo8Jau7BoVrcTEhTp9XgHsgHet8TJJTJmTuyCR57R3WmFZx7rvdSV6PQpk3HJDrip",
  "key13": "3ZCpReZosRewjaUoiz3uZ9N551uqrNwkp2peHKHhZurG4V1WgujdDtukUrwRXkNWyFS5FDsLrh6ExBwu4Tg58TN7",
  "key14": "Jy7YGERoieCPyhwNbfX1SiJmbzggCfPuo154a8BkD753kKsXCpb7CTgRzNhGdPoRraF8o6uWZJ3KscJ1imT2eRv",
  "key15": "fLfinqP6Ps8oKFqdVwCpNYPMLf1sTkYBNbUrdPNfnSF4YZTFf4wULzxW5gM7cnn5Y6WCENohNk7qbb5b2DFTRkX",
  "key16": "48kXQcqfGXTUv5hsbfNv5ucGa5WWmS6VV148vdrgb5xGwcGRcXmWZYxigyYvPqhzV1RMih1tXAhBkQxWkKdXE9Rv",
  "key17": "ADDJ9Tpmuvd1JyNP5GiPyQRG9aEvN2ScWbaCMjjysBcAxz8yMD45hXwennLridZpL7BjJEeMVvbdZVPC8djv8hi",
  "key18": "4FE7UaZ3aL1ywvxYA8jDCMLmRoK7q7WirFvwv2P1fxyUQw7wU6wU3hsP3rBhY1hoLGtQ2mqKdhkZyA4XdMzm5NcD",
  "key19": "5yXGaMh7R5oVjY56J8qxXPybbNkhT8hgTM3iEZCR7m2JCSouRMpUcR4YahbUBKKGh32zRvNMwvto6y29ZhqLFPtL",
  "key20": "59NGNS1k5feD7TRMc1qAMvr2ucYumn3YZ6UULTZzFBkAio5qcWFEJRJqWnLuMXCrpwQHbN92qx6QtBiB4cfo3tXE",
  "key21": "2kLRhPuuwF7TYGywzQeMFDqZNfKfWHJdgy2mmohm9qqAFihA2EFqPJhtoBxuMvMEhAS4gBsfBoNnWaJP15sDG5fF",
  "key22": "5pxVdRP8DtCs96DkzWet6qd8pS9A2ciKKTbTpQ1oTkYsYXfzW7GLMEsoYEiRrbrJt6KsWz9kun1zGkdvWz7UHV1M",
  "key23": "5EafoAfL6HFyzRaf9sSM6ZwUSka8t6KtMzeovxwmaYJgj2zyWBuetdRBXjafcSqa7zNqAZDbwimzWxHZEYfyVmsL",
  "key24": "33UwnuM6YbYE9QhYKVTwgNgpaig4ghnc5brSRAEoKtUViVrS1eF4Y6amLvfzKyTmQj5ifwMxY45ybi9rQSRqcHkL",
  "key25": "jxEtkmoRuNvCv35QJGxorR2GvR5HrxeBG2ZvrVP82H1LGwE23pZNYVPwCsvUJ3NnfaSFbqE1G3gWiuXTMRSyTWG",
  "key26": "4pHgYXgsWyFrk86Vk6391Yhpje3S8Ns1T8m4ARU1jmJoP8Qi8gg376GALCvhXFbcsbHAECA8BzvyKTHrQLhj26EP",
  "key27": "5XiVL5koUBXWHPB95E38KFjpTCypFZ5zYFuwdXekbh9afsA3Z7KsWQJxq2RU51BbibTTvNSbSVZhLpWP6wcnpBT6",
  "key28": "2ZZGRRWAHEPG6VgYPniWH3PahASq19eSiMSeNBRDC5BYt7xF4stD6PrZpEvLSYMCvNHap5XhzJSM8ST4WpxbkeBW",
  "key29": "UNt5zaimBRs2gqB6ftU4ci4tbPzuAG8sVSaVbzhqmz7DWtPEE24gWGaKXSZydCpcKkbf5wfCnRpd5JbY8w34dU8",
  "key30": "4yj4k1s6GyfXDK8TKWbDRr1Uyeh34d6YedPwFmji6tbbj1VJs3PKJL4Ks5jdSGRcW6yxrjHFoLUuHBFUhjW5cg1T",
  "key31": "4F3rAo1bwTewBZZRzHpMaLcng5wLqDCWnQKxHH4dCJG1EASSY922iH6WZ6hE3xMU17W95Ch6rhZpb9DnfaDNuuUB",
  "key32": "4uxkHSC8LbbEyBQkhkEcZWXRN22s1cibDGLPuxK8yMdhaqAdRmFk4vfUvq7fdBSQgHAXUAcz8XKUeobbLuTwc3de",
  "key33": "3T8KYW1XGTE8vkTgqeKe4sTB2ZTNbLQPpwUPaPviuQCXJ8TxLCMYQyAaXdFPC47R78yWfUCihJtSpwqNjWm6poUH",
  "key34": "A23tnDH5PnELNGDnnjh92E75yzSEjoPXCFoWrXYcoJx2bcDzUDMfVLK5bMrcbTKiKkqA9sGK9K4DS5wnug3pZnB",
  "key35": "3AyAQAwiwzeX4ihwA7BVGGy1eDcYfTdS3iZ9a7FEffNQoQjWhZDbGfPcz6dqSuHcRGWBk2Fc63MFoVzA89wqKXDz",
  "key36": "3qvxQeinzZLnwwe4CHPzZjFMkR3ovh1excuZsgZmuECMwsfvz7CLx9tKah7Xpk8od9DJcMGgJx1nEShkfRaBgDgt",
  "key37": "2Rxq1s9jqGwonQLHvbb4W6eHP8ucy6jwdq3YW8nfxvmHb2ZcL6cP8psCiHuhRG3JVgcWT2K5K6TZ4ZTyRQcQQtEw",
  "key38": "3XVUjKxrsSiS7KAsmFCCBHbLbmHqLp7jVAP1GCz7FznmuPhYBSVLCf6mhVzBisXuZvHdBfAqQQaEZ4J1EXaFeo8g",
  "key39": "3XbKkepwweLigsLbTS24UNibVMxjVMyniyFEhpr1k8ascKiPnoY3qPY8wvv2D8m4GSXimXnWHdF9AwxXxJWkDHLU",
  "key40": "5mbHz5Kzq2ciH8jqhRkobH7XWJ7KQ5Zu3XJwuDt7hNfx427cGCsrJd4USDCeN1LMnw8wZAtNkWCKevCnAeEbHDjt",
  "key41": "4ZJSzvJvrq6TF3NA72Yu7twHWv9nczZeZka3S6SQse8ewyM4MDYc7DrxDebvyz6NRsorqi3RAwjMAYTdZWfKuLez",
  "key42": "2Hj9D2AzLgsLfG2g58nyQECtdiqFB9EekNJWrfmi2aSStqwUdaxMasbjPi56dKofKe5razzQcY2QsSDug6vJgv55",
  "key43": "5reXf9VjmqEXM8xvaDsCArPY3fZGrxx9kTNzcXJnLZGBf52JbmhzmghboPUae9rAurpkHtakzpxqLcNKjohPmunp",
  "key44": "3HWD7LiZRrWDyLgqvDiQPFmEkbKJVGfiKNhB7UYSaZgWuLbCx45Qo7aZM619JGwfBb6m4sPCucm2HXKUDX7SP8AH",
  "key45": "4r2uMHm6Sqz3yS5T3TiUrbnYzVxfr4gv499wXUDd4zYYrKosAiRN6cddTZD9XzVYmEJidQJEXNbcGMMqcH5CaGyn",
  "key46": "xg9kdpZnAXeiAufzeoexWPJNMe1mzh8iG8iwWWVoEhMny2vuS6DzHMQzpPHva4TjDEAxzNLr75o3YfYfAypya9Y"
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
