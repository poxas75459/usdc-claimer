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
    "4rQQKawZLCehjPYqKAT9S4Jxpmv2cPu7eKQ5RiQwbEtNprFgZr378epLP1U22vLxijj1MGdYCgQmayjKoMYw3JZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54fpbrAvWE5s9wd1fDwa4nWinSN9e9HfeDG6QNYowyNXeEZj8MRPYSZ3vsX3BQG2vvAz3cWPogkdiEoVsdJHwk8T",
  "key1": "Y8TUPGi9zAVFNbPeCo6MbxtxvXYPPgYjBFXEWdwReSJtwtz2jq7kRgkHiY1T2bSweYSq7BkQK9PjkHDvh4wc5Mw",
  "key2": "3gKQAuBdshohqKFucJZXuhcXXjDU4frdBiwnwthvwdURGqgWrJC3C3kuW3iJRxhu9FHGrQNmuWzVEuWP5p1i7HUD",
  "key3": "mHRiHeHQTfwpThQs4mx46mwL6PX2cAFMJN5xKF8uHXCCYXe7Sdv8p8aWgSPzXVEcLueX6wybY7haQAnXZAcThK2",
  "key4": "276pXBztehnR6zVHg7gb2UumuyKLqYhDoxKcQVsRixFcFMdGzy3vsPw6vqQzPFDWv4Ye3Av4yPfUy2AjApis6Sqb",
  "key5": "5ctmjhyjmNdw9qZqNZvKnhQqZ4sHpjo6Y42KHwp9iDYrUiRiRAfCT9o84jUCkavyN4JZjDA9pa9rJoULgnQo1yAY",
  "key6": "2X4CzqScXXQEmnnjDZKSm6HpWaBb9jJA1jk2c8JxPiuskjfv5W3eaEzGPZBv9ZC27iMh1DHAQ82UiHBAwWsCeRhQ",
  "key7": "aaorHy7iyXEtBpr6hdwH6AZEti1XzSufQi3KFP6wSNbJKMkjp5U5btsfd344qfyWSFLg8avNxdMWyALD15WNkfp",
  "key8": "4vrBbXucu3ZC8kucWNzn4MdBQYMaLonWaK9e14FnzNMxwmNTtzfUBkEpqg3zxsU1WRnjdGsi6b7FSm41hMU5BCAc",
  "key9": "Zy7SWEkuq3TNHXkN7DvBpHXzjrWsWWYmDrTQ6qkzKrjpAR2XPmrsoo9dWBkrWxNNmbLrZwUDJ685NsWKxwn5yuT",
  "key10": "3Jm1mnvvTr9kEZ1BC2vmU8R5DJ7BUBdtjZHww5JCyPQ2vJHpCDM6VqrQ3ncVHVdDXMXCJZYawdFvzk8cBgaWqXrL",
  "key11": "4nFB1wUU7qUAvjVLZwL86UBXvVynKFP9yDDNSJBE4PLexpdnad584Cbyhr6oD9N2NEcNBVN247YLmjppsjJsaSoo",
  "key12": "23Mz2jRx1RCFK99Aug8dHkZGGffn3ivgqxTnNnM3wvqjrkS4oCyffRSGpck9ayqnFLt6nTrxbXq4LQZP85AHZDMv",
  "key13": "5ARSmmHTqoyJfK3LKQdhmun6p2Lsem7eLSY3zWxcwfLFrqWEVeR962ZsVQ9FRLcdyBSREm7T1ezvi11kcn2hDoK7",
  "key14": "61pXs6RoSTBAAarL5bD4zZiMEsgUSoRMM4CjSfo5qe9GbhAXNC5oakEd48skC3m2Jr9pboDYL4JaPSVcrWcdU6vV",
  "key15": "5Mv7stjv71BjJ8higvRvgW3j8xHXqU6F5MAict5e76yTZpU6A8SnnBcj1m2DcPSocopKbmb3Cdj95nE46tgJfzUt",
  "key16": "7zBwR8VPtxryoFwMj7VZ27Sk6mYyUfSTeKc1AqhVCtD24HZeC2NA631So4EAhN3tWhBPJqVBjuBNeqRtSES3TP2",
  "key17": "4rwPDxgNDH2WkubY5bMqbZzyjanxxMnvPdqbT5dJUBv8Jbtb1projSBXWG2gkqquWq6gxhhcPPJnjiFBHBi4XgoN",
  "key18": "5nLywEc3jv3e1p2J63sgSkTjWVhagt3n1Ci2QAEsfAC3C4mWRyAX2c2o3fEuCPVTaDiKEiVtRTS2URezgQdrsxap",
  "key19": "3MixoB3RPtdAMJYtzi8S6a7515DS3BWj3jfGzw1EkbNYBcHuCG4Ru6UC1Gg6aNYf17aYCfSGFbsVXVdnNuoofVYr",
  "key20": "qeVp2QC4xercdSiuTUb1o3Neicfz5n9wo9ornyozg31yTSQkBRJE2G3utDSDDuzsw6gT1DQmCL19q2HRsFZwAtP",
  "key21": "bbj3qHf6m9k3ZdWkr9oz21t3euPbFVAsaD9dSXWiesGVvpzaLLtfwAaTqg4zqZaGU94ZwEFZ16kSiGia3YxZbYt",
  "key22": "gu4GdXkG3xoTmXC1vueQmbs1JsXVuYuQ2kwhPTEfSNh8AWa8yLbj1AQHDKnqZEUv1bxJPtpmiqAQE3HujnrruVd",
  "key23": "4LyZmMk7WUDM2TcwsiKn6Sn4NSRwuQ9cKUNmFrjGKXKr148KjpzVWukcg1caakggHsEVFpD7gnSezeLYeesNna7M",
  "key24": "4cgmzYvoG7F8A9DzdtSrR84MDPiDHMpJWV1j1PBi6EQyuv6cukWprYV5TURFjJDn7LabPyd1nsYdZsT5iPU7YrqN",
  "key25": "4geLMYpwdQNbbRvtkLErRdpx1ap1RJrudrdWnewwB9KXyNd4QtEwjKEjoJ19pZJPH7pxq3g3m6TdpwgmDUAWwq85",
  "key26": "py1GiwGfWEX81f7Jg4sVQTMxzd7hiyCoiNxbEVdGbceD2GViZ8Mu6Z2tSgTsRVV7wuwV3ESXmbFqnQxco7Y52Wc",
  "key27": "5tiHupAhc7CgmtGoRWy77YhQ4LScqxFQodkyFQokA54CJoZzYy6NGthvScJQussAodys7TKcbU35AV3EXhZWLdxG",
  "key28": "5WSfS1LL13oGErM5fgDtiRSkvW47d7hEhw3DPSdKGpQPGrWVGYUTYhhr2UQZXXQ56Be7R7azHHb1Mgumot2hgWjZ",
  "key29": "5fHXWT9egmhcSRihdm2bc4LzPfi74iZRtvqKZtLArNTxQGuNZPLerXEAJNVMScuM2xWSv4YAgVLCvzvYWaojVypQ",
  "key30": "2SVUXztKYWum2KdkjQtcchpquFYGbdxAFgYdDXTBLzx8ujeAxWtqvKSzpSiaMBWT2m144XhLvVDwoUXAXQAV7AML",
  "key31": "3eigV3T1mAnNT2CuEd4MuWbHS75K28ofzHU63XyzTUQ2neKd8mf4Tr25BZfHSGsQXeRCNwdq9C8G7gzqXcd4minA",
  "key32": "2j8AFpthLHGoYDdKtoPs2dxJEndGU9CU5KQGimyNtruBdvjwe3DUbrp6g7UU12rMR4ry33Q9ijMzZ9EwhsHd52v",
  "key33": "4DHEzNL51aeC4ZbV2Gz2fCAELEGy5U8p3mScZ5obKfD7iogBiiut6duFA9tnD4bvbyjCrMxp9vLwBA3HxH86Yyd7",
  "key34": "23dkCiLLghP9ETKudP9eotL7kLKzSJv3g7vJx1bsEuuwH1uD55Ah3o91PhYWtV4YW2vuaKGUAGPev868h6pCbvuJ",
  "key35": "4Zv3o83712Q95bqdNiwCuzQuopoRVxSZQPP7bz8ts94CGrQn2hr6HHoHPJviekVhsGKBSk6veZwmy7MPxnipc1R9"
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
