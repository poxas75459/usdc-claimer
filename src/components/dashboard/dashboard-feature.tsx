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
    "485vSYZKhhHJmBrudWXA9Jp5qS3ntk7mpzWWBrwZReyUERD1iGVx4hc2gVhM2PYPQU8p6DpHD2ecoXB4kWNzvMNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JodvsAkaPbb9y3c5h4YeHEHoHmQAN6JE6pMMHoj7rMgSqPFwkM7UKqMVRzoqiH3yERycrWLBoyAvJzPKyPL1jt",
  "key1": "yC3enAT1rnnhJhuQjMSgmLzM5s5XDBMVE4nQUSiv1Fofpym8u3QgniMqdmoCozNBrhUTvrQgLjH48LHeZ2svQBW",
  "key2": "3DtdnmJYBiuESwjJBKF5EoWqKHBz1bgZrmkgV58v8YN9kXX8r5yMSrvjC2ApKPFYoTDXnUjJhysveyKMUXoJ7MDS",
  "key3": "5EPEmu8TKCAchWdoZTMfdvqcMbj2yMQ6CGx5oPT4JMiehT35uNQxTiqySn5gofnUdpEbmGyquY2rTuhaumTYdmbR",
  "key4": "3GyYs1r9grVj9EHPZ6FYUCVUwiXYDU2JHXri5zAxpSZean6EKBHaRcRBhYo1Jrob6dwt4NQSD53vdME16Q9rYhvF",
  "key5": "4bUDGSreZUtxpauHxW3XPeS5vCXte4LKk3i5CAtyG29Ypd6zKZqsXsDB5y762siqoi9ie5MNwtVJnH9J2qAqbJot",
  "key6": "1T1A49rqjiDSW7c6s3Jv5F7j1e6NCMNJ9SzkXtbejXLpNo4nSAcgNKatvGRQfLyqJd1UhwYy9hq6YUSnBaaKuTj",
  "key7": "CSvKGsUwjEEB8cLeQxN5k8eU59FSBFBdEVg7cfrTVTLLAz2kDDQi47qARtfno3GSJeYMZQBhtRSvuQTKxKAsoAZ",
  "key8": "581rRBM3rCRJMp1YvZ1CCrr8h5jm9cXup5TtkEP3MGAJkzvx9xxPiyuoyNvpJ1qNxTgeSJC6HccWV71UAzc3uQFK",
  "key9": "3ajhav5amySEGzDHKWq3LdYPtjkEyUMGZMVEgYQsCdYaDCDETWrsyrk9KtVMpo22eymtjCxgDMGw26pcY9KBe33c",
  "key10": "5g4gt98WSbby8x3f1T7AeCyfc12AZvTTh3c6CTXuxw4VoKBAxMW5ijPT7zbAPrJNy4tdQQjUCXThA3Xj188aj9nn",
  "key11": "534pvAg91uncNv8nY7iRrS8qqyFoAvifad7vynHa8zmoSbfjJTVNx9K7F3nSofbDKTAUGi2UAZPtPkz3tvXVmjym",
  "key12": "31kkdRpwVmvEm6u8h1kKJtCJVNNKHwnnxyC8BGTEFfNmr9AtR6BEaxeUeSEpQ49i11cwEVso5A5btfcpW7oBxo8e",
  "key13": "K6gM6r11GCHB1GJBtdAC8CnYJ3kJvNqksLVt67YKr4BQ7qn9k6nsHw4GKZQat6CgxhLQVjCrCQMhGNGhtW4eXJV",
  "key14": "31zqFNwBERq3Mbbc9hEL5jzB3AzNeg74uQKPneyjSBaRiR9nLNo8632MgV1mYX2xrXGUA4p33ggg9e5C5HP58QC4",
  "key15": "36ayE5SH8eK8az4GDcRsjZptj3Ey2hMLrJjzhe4epRCKHNmWfrgSZFB9oQBrF8RTePoMNr53T8tmpHGHXLDPwRB5",
  "key16": "WZtFJAhsjgmDwWzXsKXfRqTqCx7qBmBBKWDWg75x51eTwXnkkdcMGXEd7VEEG8zFc5R31NfiuLdqkQUQG6HF21w",
  "key17": "25Xz3s1ZvEiU6HVevof1Lu2ngGSJYdnWp2qeNQcvESdwaoh7mTW6geSmGfd3pTwpsXiUW3MeKpNvgUWQ4SxheKyD",
  "key18": "21jfsaETTWWMmHX6M4ngnDCuSa9Xjv3HrtZDvZdqWRc1wKAd5eFm4sUZcEPyFLWxBc3m6np6LqccbZ9HWj3Kosh1",
  "key19": "k9zKt25jbLBx6FN2JSPusxNCeS8cXBbfZtKDRYUDL5HnHg2nkJpEL3N99W8PZ2FncKAn9ph2vKKx4jq5J7BRE46",
  "key20": "UPUWWen6Dzwy4asxBSk4v5paYYFHK8jYCkYQD3FMQF5VcdZw1TkUVo5Cs9JqM4zKHZwWrRnx1NPki1ZhBb3YTip",
  "key21": "4rE55i81U177x4sx1VihT5WBqv8bj6DaTy37FsfJZiuKeSRmVgRejCP5TiCpUm3tbxvoQL7DS9Ri5kgTUEAruad4",
  "key22": "4sf3gwqxgEhD93L12MVXJGwheT2od3d9yL5Jv3NrCYKqGATeCVNDhXtrTh9A6rZ25frL2P32Y8H1qwMJNc1FrxXX",
  "key23": "h9FpivBPdji5Rx5HzPdUDa1rZHg525tufdXT92edoRPKPJK2cCGqpqi4yjgQFeBEMppP1naUuR3uoVCbExpdNMD",
  "key24": "2EgGssrbUy2hoTNajxRBguGB6BsKDmHWty5PZFvbE9EiczwDd4zxtAjrxtTvbTuKtcbU9rDKE8jakL4kxL4YPakE",
  "key25": "5tgKNbLTpF36C2ashppgtucJu681RY5SxRCJd58BEpM4FVMVY3V4ZCHeeF7bwcijcBqiAVwkthcE4s3shnyGmw85",
  "key26": "3pSNqakJknEj2LAzkNat3o7LL1qKapYeos4HYoYmxLA3QEcTo2cDxRmsVVWkaxiPZKUNvxXjfptZxEkeXQup3czs",
  "key27": "2bH7PzCoy969Nbk66uhKQahvJ45ECee78ZSXWjTha7W93uuKqNHQtfec5DtgDTudmLNmd6KW7bZ4Dr99a2L8JzHS",
  "key28": "5k8MfgAB8kyT3ZHVsWQyPZqoq6HmEVtoBhs99DtMDmQP9M8ufnZ42ncqWnREVktS8qXJWTqeWXb3dd84J8Y2BCLS",
  "key29": "3mPeC5JLEJXyM3BjduZBHtrEEKdUtF5eNZXRmvQcFt2qXGeYrQbzLgvnByaEGuS1v64f9cZ13EtHbzAB5YpbBgsD",
  "key30": "5Ux4XBzLdG4J1QgpY6JE32zM9E9xvtUWKWnyWNmbXZeV22p2mHhskj6NsgFZqnRJp1WsUZjP2A2vEwH5qtp6ZLKK",
  "key31": "2fMZo2HKGjFNdZKTEhcTeewyeQ8QFzMEFHma8Lkc2BiHjwkJ21Cwx2zCcEyFZcDLsMk1j3gLqnidjyfGov6gvRkX",
  "key32": "3NaV153b1tjPurQ1RSQeWKYsYJz3BiW4RRQY7We8vFJ4LLzMCpEA56SxpsGGWvrXcfiBFSde94YRNzVJWoKQoTKR",
  "key33": "3xdVahpJKGGz3egrxthTmrm5qVQ6P66YQ1bkD6yAPEXpMgtoqmKMYSyCkx1z75eWSx51G1xEQ6H2xbQz7tGYXcRL",
  "key34": "5iQswdeJJmntLERHNd2zkAS532cAQxYusXA9Jf9jQJbMD4r9q7N3zy7cASj1V719EmxzfbZQMLRDuXwHztCV4tEE",
  "key35": "4aH24vEN8M7K44DsEivCEA4hEu19nnMp13JMS8wRuD9VRKEMEBN4mSppALhj9FuZu3c2UETmcAJHaSVGzBK9hfos",
  "key36": "4EDKcvDPhM3xjjio38tC79sSjoQUpPL5eAARCgpEjRWz5jeDLUPs1ajuv264ZX5bQaG1N5gQM8ke8U11rsXuPRYX",
  "key37": "661PdjgH8jtTfm2X1ZHZt8ZdRWzehRmGHzpFYq4mGnaSoV2gCrUSsS7fg1AKG9oiXCpERp6ZmhdypgZYiDQJoXdP",
  "key38": "5AexfHyb4JhRAD6f7peDzXqDhzKcd8zrKZvRajtvwr3MvrvVsfHKKHLP3UjeLQN4XBk92LUaXwmifPqKVGGBGqSB",
  "key39": "2k21S5JKEZWEa2Hc6TB3L9ZfKoUcyAXdLwEV7wRSssdNqGJgpGuYmLq4zmfBrQyHjW7GKfxWKmZg7HSswaGWjqpK",
  "key40": "5LYLJy1yRNv6iRSSG5ABsi3ey81UB1nWQvreJ7LNtJT3QrSMkEFUgA8DccFv1SXqscuvhm8z2FMSpkzFv1cUEb1z",
  "key41": "3BTXbwTMGxmvM91pyqP19xiBgDWSHRbMDMPFSxPTcwUVo3UWsVYNR6FapKCTmv1ur4g2VLch8kfAK9dmC6sWvYZQ",
  "key42": "N9ZtmjEBprscNDCqD7qpa4MKQynUeaQRam5GyB62MsfG9kd9K2A3tbXve8XJwJSQxb1Buyh45rynTrwkm2bqzjZ",
  "key43": "5C6oiRb7tkwydHgPeh1XnGidxuCV3HbJ94HC3aq6yN8xvHYwSeGzTjj4LDxbGWpy3Bg1PEWHQRCFDzJX9MaGQtHi",
  "key44": "3QeQ2CShyeSfYgbXqr1Gc1asbScoKJ7NS2zDeYjFFUyh3BHrkZfTQN9n6qgrLLvkJAWbGQkPGYwbB2BFRzuu35tL",
  "key45": "3HCj8vKd3zPYyuzTfzi9h3TXuaJL471xkvdKpCMqT3p5TshgX3B4ohYpPpyqdReEXSXQwaZQRDGgpHYfmJtAjGi4",
  "key46": "3ZEEAsxPFHjS8w59R7aj9TSDcpb5uN2GQ7uQTh9AqHPwr2KR6GPb4LNX3rksMsAGwrnPYJfxzeD4oxDfT3TBJFRQ"
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
