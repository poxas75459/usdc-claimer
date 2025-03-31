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
    "2LmGzo6zqbDBkwhoS9xyedf9XBCUuKdiEyPXk4ZWocNc1K1zon8oAzY9D2HhoX6hCPCmoirbgKBD9vmGCHi3M1Le"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y1pKMGXrb8YnYywzY9Kh7ayoANwQBGaKHWmDQYb247xj1omvSJXGBEAMt9ZUeNjK7ffjD1anHVRwuR9QaKRioe1",
  "key1": "24D33FGo42xjuEbu6aL3Mn5qKHuifeM7mwDDDAQ1vWmtAQjLnV1P5hzdMALE9mA4bF3CJyP3u2NyFdbzACZz1ytz",
  "key2": "2pgUjR5rqoySGhLK6mKJeh7vWLgA1G6V99fSvd8x7koNebGB1raU4jpjFGBffJxtuyAyun7Vnuz7ok3TZoKGmd9",
  "key3": "5XBEEPZt6GVGK4DKxeMsNASoidmMMoDGikfAYcYD8FKMz2r5ZHTsRmQMwpZvt85BFFg3MMNrQ5PRYVqjxeeskZJ7",
  "key4": "4foh4XpEbzFxK5G497K2zPmwg9ngNXSmumVnDcNFATUy6QkVYzWrcdWumX54hwroohLh7DPDRSkyZngY19cQXtrV",
  "key5": "4bLMwxfAs9omAPvssfsbVmrauM2HpTSHr4YHFfFjGEZctdsxLkv5AVLsP6vAa25PLExS2KL7jfxLEurLFWSWzCjD",
  "key6": "63BateHThBdMd7uy8dRbJnpStcmNCLTojQjoXADNDVJLBPf23eygXheEvGziuQtFPNH5MjRVU6tKHaBsf6U77q7u",
  "key7": "3s9MC8JXzExvbRGd9Pabgzoerk5PVBhytE9gSYBLdUb9Cfvd84RvqAWvsWfz7x2KYmqPy6qLxtKnYDM4p2KJkvoX",
  "key8": "3gB41pVauTV23MYswVr36Pp8JMCkJkxJtnuBvPJGE9VQh9va2PAErhXugVoPUQSGYTwmiDYWiuNXvPnftSPQiY1w",
  "key9": "2BPD2WxqihBokrr8Dca7eUbitrxirhKJjpDUtAJpuJKzroW96bxpN2AcPDqzm2NmrdX94SmTNVKgPhNKAuWPDsd7",
  "key10": "4UqgFfDb8KmcEYKaLNJPts3QJhx7FkaL3YLfQCzgBEAMcYStwfdGntt371wsAjubWCHXvTUcmi8UKfnjJkpb8PD3",
  "key11": "5Ppo6TuoCxNV4vsa4snn9rti6B8kuH7uCNbWLxE3v6Exu4HCQ2f5teJCzYmunFUoofjt2wQmkvKH6U1Frc6nbrUH",
  "key12": "29MdiGjheV2ZZTyDxduSZ4hSszMGRpKnKkPe1pYfc8CAY3sEbggRCA5Ci4FivqdzKsnAw1C7cuK5HYgZQ4ohAGmT",
  "key13": "3WWAha5c93aXnLaEpgE8DVAwdzpSnkPmrMXvdFGrd66Aj1BsoJCRDZV93GVxMZ45Pp9o1fL6smEak7gtn9FW8Jsx",
  "key14": "cQnKfFFvR2zvsg6MJs79Vneqc4dBdZpwHukeCwb2ZQcVF8rga58bqtzWAnCfqfbrNX5QNZE6ENiE7CDoi3pWDgG",
  "key15": "4wxEyY48AJUxL2F16YzuNJ3SEAziGtNfbz1VwoDMuASgmwDPKqkH2gWJfSyxZA67EYYwbs78FQ5Ct1ouTbpy3Ucw",
  "key16": "5whoPe7WeSxLJHtGxBxmhwwvRByiJFJ1rG85b8xM5mHfX42g89HEHZGb8HddT3KWuwUqQuQFmEq9KY9VA73J5RxM",
  "key17": "3uhKR6YDVibLUR7SmMeBAfN1G1gqS7uhDkgFaqYMjFQXGz9oEDVLCxiH1RwABEhgAzuHWYEAbuMTjffxRmZTF7K5",
  "key18": "zKKpaVkv27RWCnoPhG3qe1G3U2E731HRRgzkUk22tDXv2pLRZ2c9ephSCFPhr6ftwvB8dvDKm9AXbuxYrxXLZgt",
  "key19": "Viacsx7NbzMKuwRiUh3s5ZjD9fbZr7Riny7JRf1QX572HiEB4uWNQUMVt25J3wi2Xnd5vKPThGLuyXYJDVmrEFG",
  "key20": "4bnu9RmLECBKyuioTC3jFC9RwMURs9zCLiPiR1Pc5p2vUfGn88vTNVyy1Bg13pNxx1bHn9Ea7ukAo86igdk54fRj",
  "key21": "4tnhRLyMPYAKithR7ab5iNiT2evkFC1yxgPRggFKfSSEpAkgzmrfNmHkfucdbim8iE2SGWtyT8hJnyW58WKkETh9",
  "key22": "47RYnb2A5TnnSh7U64eBtEcFCnEjcWnKXwuHCzR8WynTtjX78Gt295PbM2p2iQjgK1kn3m5ZiWb6QUmGYghaPnWP",
  "key23": "5fNMH94vCbMoBBtzuRqe82ybyqYLMmVbprGesSneN298gr9ai4HvN5RnFHCtPSecZhjE4nQnMwYCXJhkeL9vTc1h",
  "key24": "2mdf3TP7LwuV112msUPCcoa8vVcw56yPMJf4xyKUoNzVgHaoYR9oBzztLeMRZthr8Rrq4jsCQsUWHhAif9KgXZjK",
  "key25": "2h26kHWrVMizXeMG6YU3dwaUhEmS4K1JPCoiXtrou6DGWG3aDfsw9yR5uxhH3Gxaqgb6EiiD4rSeck543Qc3VV69",
  "key26": "5CMvDatRhkCLzTU9MnAhRpqEbMbbpSLPJGXuE4uiH7seQzsE4RAL2Xa6kEpjGstoWzncfDcBfdbWUimhKM6Udj4j",
  "key27": "4qeKL18o2KbV3PD57a6jWatJXEhBLHV9Wrbi6NDnLZH5UJc99KuerBdXQ7mscvnmNadwiQS8qQAT8Teiu6wsy8KJ",
  "key28": "4DRe5Gnz4M65CbKAXvDvBZEkKXc51HdNTSLZSrfema73YckqgyF5K4vWQaitsQzKnoCbxB2zjUYDxWTfcYMNBvQR",
  "key29": "HnRRZPxzJtXu2j8p7Mdmd2fikSR8obU2NXNkYWmDgJYMGetNfMWavtB3RATzEh31FtmJ6DaLYv99Zr7KBfuJQM9",
  "key30": "2Du89iJdQ63cPwJ3m58R4Vi5mRyYu8XnRoLk5KUrnEJcrmSGS2DxEaD4mkDZUdKijVtGe5W1qa8Hi7XFKy1MeKGS",
  "key31": "oXYVrQmsTmqCPTBiTGsCnWDivHVsiBB5km1u6bzxr8iSSVhiXcEGDbuCPnBKUgueJsrivBnpmrxvtb42Jkh7xou",
  "key32": "4n18jY1gknQtAmZrrzARkNiDGx7bLBnHFfqDv5j65s4q6rGfs8ufZsziWW3rQimPbL7QAR9sKoJouc3Z7NARdaGp",
  "key33": "4bqC2qVmSnkmYoVLWfcwmfEDvAujRAfoEGdwLiQWEAvgfh3Wy8oKCchVHjPS9TunhKrQrqyQEe4YhKab9cVR5HEe",
  "key34": "5qzSZjFnumYkNa6BxZ5Ry8KCo1jk3Ft9RAgeeSJtZyHJ9kCWQvL4JHVbqzftyWojnp4FYBXZgZFRU9CJaS6pNZr8",
  "key35": "4rdJxTQWutpaLS23oem51HWw5N4rH65mGNZT6Vys4y992LAiMAmLwDNkBFx6UT85P8ELRf54vRTeYHgz1UEyMF4o",
  "key36": "5Ly3p6yKsQhUo5Ph7wf8kpqRNCUnnEqhUaxBwKDK3trJpcx6a3kvsTGwJQHSQSMDGXDup2B1DD1GZU9KMzJife1Y",
  "key37": "4TFHLAhLE3FYT6PmKr8oKRwyTyS5FbdBcYSe5Tnq1ZTp2WUU9EaAZE5DLXWAWdJijEvxFhWBbc73adZAoL9RQYir",
  "key38": "444K3gt3whAsmg4AsNrqVfZELdGS2HXFm2f54TmTivDXM9PjZFzAY2u5iSUKhCjveRzCfCHypHPH6cKcDRx4yf8R",
  "key39": "49VAdBKpAGVvUwAbbKc6jwEvCjxz7YzKAQ9dwhb4uRqjQHTjmRxAEZLbi8FiKewzerGXUXr6mv3Yc76kF2TF3g3o",
  "key40": "5zzbco9aRbBDJ62KFnZskcjL3HJUSCCHxUkVzenomPwJ5qgaLUpNXAMMwq5YNBdHdpz9ZeyA8cvJfQuXxfkWXKft",
  "key41": "3EZtCR2HFzMZ71LSZCMq2zZsNRDvpCgViZRU5q2iWRqhKcSN6Ewq3vwAvvJssfoNpBgFT5omyPBhZt7kQU3SWxr1",
  "key42": "4GrL4Tf3TgGTfsBCgAXS1d2JBLuP9oG5K4NLvmb961J6X36bzobvrXE8enRsyutCAMvaP1XMWk3y7e28xdoRTPb2",
  "key43": "4h1w8TaXXUivSdyh43raGWVWYQiwdSkE8QJXW5zr3VWUxf393UdUqpptZzHbWtq1SYoBNvBfy9Nt3cRfG2vAUpsD",
  "key44": "4JXDwiMKMaGB9SWBQgxHbD5UZWEjw4PrEry2e9oBvV7aw7KF4aKsxrmADwqzq2VbYJufajjZ1EGPmrUwtP6MNU1p",
  "key45": "5wBnUMTZ7LBC9X5DAPH3WSxzCEavMR6pBkK8tLWPCb2FTN4tFS1zKQus28xWw1omwf1Ug1ELXCMQfCsNhK9EcpzU"
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
