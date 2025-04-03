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
    "3pp4qyQJTNbdjw69Rz7mNViuAvxRbXpK8kXLsnijMdAdmgMQ3236wvn75Er5rTvtTy62WhJ6HSrH1rLTSdVfvcyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nAA3zu4fTHXJ1nGPY9MSbUZgpSsErYKk2PahBqL5RzwwKaKc8zvLoombA8rHwHYjweVuFLdaiEg7HrUi6ZjGwQt",
  "key1": "5QQRCy96Wvv7Zkgu4Q7NCrPD5XASKRUj6PLVTarhtkvCAr4sD7dijH9HjKZBYvWxHaW9nBzbHWnrVkVTkTCD7mqw",
  "key2": "3Mh4qfLiXMvX8wkxAVJgaenWddtVoJUr4FL5dwiCAdVftVfD4grRd3XJNZVApf42Zn3X6bCzoeezuo44PoV76c5y",
  "key3": "wAhq3FWkGGo5fHCfTwiWZXmeC5dxbL7bCVm8sfcPo9KVbxbJap49qQaGwSqvnhxaR75w4o1WJLLs9GvBvmh5Nse",
  "key4": "4fjjLgdSozGaALPaG93wQ4KdDzD5QoN3W55WVvAuyATfumm87Uya17VnZKdhPKD97Dz6uYBV15DZ5q8W3bN9fa3g",
  "key5": "9Q9AHGyYids3ts6yrDcAwWhwTeE9tnyAvFbSXHbc3j5azomFniMy2JVtZjXHBHTk32h4WkrbbN4CG7MBBJs3iZB",
  "key6": "4RDwr3ZUUHM2ask62nxsc6JUsczzbngL1fWcGinQvJ5Py9dLseNbPmvrwKA8U3xQbHJCzM29mx1sEsuuSXGhqCdp",
  "key7": "3g57shFWn1HBuzHVf95mykGyihRbymBhEa5JdVfTmUkNXfvCo1pNtNk6QFUwbvvw8UEDDBQrYEzAkjAUbXm1NQqv",
  "key8": "2cgZUrcvWvqvTWZyHKtmV6fpMeYkyXXBPhMNdYcE67FavmC9czrp4sfB26K6qzQDxqgicZEqpNkHzoqCLSGaFmrM",
  "key9": "63p12efXcaSy4c2DuuYjqeQzs4tAnTthYZtUM26jzRtY6wCjdj1X6ShJ1FXqtxgxoXpNchaHX2J5JPovAyogFR3Y",
  "key10": "2RkWUmDh2WgbJBQ3cxsFHvuPLQETyfGrwXKokV52sA4rP8XyHNBnZHf39Eqt4n6F1jEkgFpXfti3Uf9LGDSg7iFK",
  "key11": "5x2YiUBZNcAD4HqsavdgesdnV9vaZ2zKx8ffhh4n36ccduF7fZZoonYysiBb1YzjNuRkb8YTR9k1j1XkfTzmHPmV",
  "key12": "2mMBUbTXd2WS6pjZKsv82M2vMi6qQq9iwuuuo7Aaur9cAGAWe1yjSvRaGA7Dd9tJL11SAoc4sX3hAsK5vF2pJ1gr",
  "key13": "4eRULRRZ173YcGPESv2ikCkZ8z8PTARNd7JT9J2XV19WmRXbcpFc15txcxSkuGcw2J8Y7Uo9vmuWRZNuA7KEJndA",
  "key14": "33MuwJUqjYQPKxcRY9A7j2AvNR8geNKYzTPinP6J4EEKyVqg2fporzthQVGquzSc9FBLfpzikBANXQEoTain2Htt",
  "key15": "5t4mnQSZwsH4EuXoPXsZHCJKWDvMDjsdqeekm6bJYcFgxH4LokikTD7txwUwGx8ZrUcviPTEBMKpXW1s7kMNSRn4",
  "key16": "3HQeJrrS6g45KmFGEPhkaPHNhUcxutGY5kB1iM9hRnVkCA2995bq4qdYrYe2F8Mbt4Z2tVF77GgVnktcjHchU9oB",
  "key17": "5EmsQU4trAegop7CPeDGe5xFtUVR4B2h4xoJZJPTSbfSqwSwxgKhgLsKii68r9j1CvJHtz8LQVEQzR8cSzJXBm7C",
  "key18": "5bYxUd4qn52BCJPXTH6AUDsNQSD68mW9b5optWXizeiWKR4qP8e26ose9NZtqhWEf4T4eggQmEAjXi6TeqowHG37",
  "key19": "dbpK9U7b2hHVrVsBxsvdP1CtaXakUycwzuhhZp5doREXCuni7akAi3YrqySo7YjPMQMGWY16Bbpb1jqU9D2xUpe",
  "key20": "4z4BYJgsci7Sf5nm8vqekK1Fj1Ei8Ztw7Lej3GpjEpjPAi3aaJ1HY7EQsUUP9tafrAxmuKsmJCUmBBq1h6S95mP8",
  "key21": "3YboTrJ3cx8kiWzjWHmutCTJNxFTvzC8Qmnek5DZZSZoqvzSpZv1dF8neBkMo2gp6cJsBrBATxzPhpbjhYsNFSYX",
  "key22": "4nCP3bpU2zJS2tQv8SpbJfVsbfFTwGRQE5C2paMAGSaxnwRtW9QZyE9rVm38Q1jvqfvvuHbPDF5vdnRqHYJRrT8N",
  "key23": "Xms3NsSPnDBVUpxCqadii3qGphjuTM2mB5ADroJhskFUKerGg5H3oxQkQK1XYGnWkpyLCVrccq9XcdhA7s7A1xM",
  "key24": "JnxfmQ8gMEPHyEyzyJSh2y36uTJDoPFM6HX5rQQAZWoDupS3th8UBYoAQ1EwY1eqWcMaPsXm2ywXbqYrzcXEcmn",
  "key25": "3fx7ru2ksfgABeJrEKh2WwinBBBruhHdt8HHxVvPhon7aTm1Ks1jsEodTXck24qin2ojoQVJeR37B6mjmu26aWm",
  "key26": "5WZPQCnQKyD9EPd4spTiMj3m2dVt5oW6SsgCG2mQVoqPskGtmaCyvX5zibbU6FoiuiSJnpvX7xNnWFktDr62KqWU",
  "key27": "5J5m8B6AQZAgdfGSoYs3Ngdkz5sNbPooabnFDa59crrLCDwKQ6Wqu9pH6gfcdgDuNabd5eqkFr48PX7psKd4xTPu",
  "key28": "3czpP8Ebd1bkdKZoRisyEiaNcGbEnN7D6592xPyU1fUWvdCDs2vtZccdGsq8a6uRs5CH1pe6azK18iAWqQ87Xiij",
  "key29": "5vFrgNLYfUaR8YpYRLMKqvvnNwUhcb6joh3H9BoiePwFYCTQ8pjtQb9s8vHKqf3whqzgCUYRCmkgJ8NgoesiAyF2",
  "key30": "2teVcfLwuoT68r8tHikcrvqgJ5cgXLejWHWDvKX7vzXbKa9XDN7gyVGFqMDToTD1zUJUPMDmTdzihcApMMZVbV6F",
  "key31": "32vdYiP8wHSeLaVps1d2wjJ1u5GJQC5Gzfgw36vfPhb7kcYZEZzDK4aBdhn43xegiUkuDdKe76Hsx6FK7mfST5pL",
  "key32": "CSMYCvPC2KSGEMREBJ5hry3F7FN82bFUrvvt8Ko8PHdqJWKiXgtfmR3kD88imtCCjrBGkBfi1iQtAmuTJA8sJAS",
  "key33": "5CgavaEGgoojUHzEvB3S6eKZ3h4pKoCNNH3UjP4AtoNf8iYouxdJufW8seVJoGRrKXb67ogbFRvppFjFuhuKKtSi",
  "key34": "5pCsbfsXVfr1gntCZxeqwJ4zJmReKz6A8764oHppruQZRfz8YM7AJjGzN6auPmBjff1A84W2ESNxSFk4zT8PjYBY",
  "key35": "4R8N4cFbnqUJbe5cJfavJneXVWfz89oaX3t7HSAoo88yZeA5W4vriPt1Ymxfx6WRqWkR5vU1ncgNkjXhygdhxqWz",
  "key36": "3ui2co2ymN1RrYCYTvs837rRvEFm8sfbizHQNvXsWWHQgDPFYeQewTbQtVLVaZuHRgPXnbvADQBd9JRmz5dM2pyW",
  "key37": "4JbqrHJQjRq7m5Xyk8MLJqLQwD4dA2nNGrfcwcRQzz5XdEbsqqx5CdBiauigwDgcg9FPdZE24sn1j1irGMuS6iAW",
  "key38": "2pLzz8PXurxcCP9hUyJRcJqR6sU9MbMhS4mMgs3RQH54E8EyHaxzsAZBDPSBGx6VpWpJtr5MACFvervkQc53JW82",
  "key39": "5R5Lio2dD15Tgam1rMH4oVsWSB9BhBJ7Tv1dEvh1DzKk9RGxRcf6ymfvX7sZh1efrZQ47MxWiXt2CQYoSKBeHLQi",
  "key40": "H9xM6Y1vQZCCCjGQfprWBPCj1B1g9wMKZUpQcqHrGPirttWUUPL12FaCUPzJu6SsDksgXaSEz3ftB1w9uDL69Hw",
  "key41": "2abmYBpzd5tFjvZEbLcUDyZjFESejwFFGbd59pAnd3gFpaKAmZABNEq1VaQ2mP9Wo9FSLGddpaZY7cSKV8HbZnPW",
  "key42": "KUdJizSuihcHt2t3pupcoEYv31FWMpRfQbpoAyi3zz9DGXC6d85QFr5Koyow7qXTYG3v83TLdmgPfmbDiNVnZRY",
  "key43": "4DzwzHh26nJa9699rJiReTLqPbvAfsSudxZJFZ8akSkpAJzYcC8XCGpRgCKcUWp8UwjnAPWfwWRL4MagR941NhsT",
  "key44": "2725tPeP1mJWk82XQTXKzf7tRTkLeCLJHPxu7hu1GgXWFyzUjAAiHDujsq8MLieDao8C4WSUTkaxcFmfq3GLXEre",
  "key45": "2dy2TW72rSgqpMJppgnAY6qi3hc6LxkNU1fJXXoPjAW1zJTaEXFvE3SPkmoBtP4ZoRGwPKEmPMeDy8pt1tm8ZT8c",
  "key46": "4MiEJiuX6PdBMufu5PPPTRkUQWXW8wxfuchZcZapwzoEmTmqnsA7SJwV4UEyCzMNDje8F1awmAFhdwv4sHnwX2h4",
  "key47": "g3x963RS8Xtn57viXiHVPQeq2sAs8bVqTtoUv6AoqHqTcLvU7jpwRWTHrFi3eUBUwASNKWNmPMdtuyRB7QRchZ3"
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
