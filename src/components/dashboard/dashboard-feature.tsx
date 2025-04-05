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
    "4wBmTzBaP7WCvao4kwkuBggHr2gdNae44qU2m3zGTr6HNKr7WPvYswwuufbNxMruhfJPaFJZ1CEZKhvT9ox37vpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hPWitk7BCdqeDjNgpGnjfTqAgWo3MN1hgVsKd6m6dQc9SwztPFeAXPqUDj7QkFS7hbeZ3UNotDDDPCZbZ3pLca",
  "key1": "5CkBqYMT14t3tQt7h9A8qtiNRFaDoNF3GyX3CXGU5mLB9afAt1yhgcgTCUDZcdjzp3DphcpmrXeJqepvpX6iryxc",
  "key2": "2VNCjXBNtzT39PvCycocsJuVYU7pALYEqE53XiKK9qHQ79vWQ1KMgPGMHKR58nhVbxTNWJBQKZesNg4abzZXJqgA",
  "key3": "2dY2ZxQ93gqx91oZ2LCSXhQuKgWzawkWPVzysQqPV3qeFRJs1hpECDgcVykdyMUpfzkaSu3DYdrnLjMgRjFYvAc3",
  "key4": "vqXJu88r3dQKAKktVsJhep8Gd1jxZYS8mFfbWUp8PgfDHTcHnCyQn9uVJ2eNLJyL23aZyzRJaq8EcQwGb2X69ba",
  "key5": "2ebTFqVxT22aJ4HfD47mD4tbi4NhVpn79xebQoBUHzTrC1Gmsxd6qk6fvcftXS1CHaASov336iJTZwACmeEeQ1jJ",
  "key6": "qRnSbEgJUpXrtryc99Kt6VqGxwT6iT7vM5K8Z81CwmXA1nuox6PbNQCsPjdB78drJCFPEbjY84WUZKyKrfo7A3W",
  "key7": "4RsL3y6UMvtxWuwhUrLPxSAcSdkCYgAjuFF9BKK7sWEFrfZXpihibstsQkF3k7RPXw5rieJSUXNPHhKZsTwFpGQj",
  "key8": "25TSNS6d1Lq8ZoFaKvt8hvbk5BPptbBn6LZypngg18hMTW8HmUaiFYo6eR8t1gDZB1WHYhr5Kax3NnJoqwW5LxGZ",
  "key9": "ogQobme82xHjKjCU8Yot8y1LnVh8fTdjSUgiJ6XdLaSzwJskE19vDMKVXL5be9dBKwnsAqgt2cpeHaU3yoWutkw",
  "key10": "2hcVXRoWApFBRX833DmY58ez64dqBpnVSWabUGvs2HZ15UB51xFwi3v4YxxjofDLm14as6ARXVBSkcPWcsq1Vjuq",
  "key11": "2i9QYK94ptt6nyvn2frwmMQxw6d6B9h86qtSEJubGn7PE8RZog7rjR9GsR3frcYzbYuX6HJr22AZXFMuuJUuvW4i",
  "key12": "91MLqssjNpm11GykQzkCSWXamhQjJ2rSviMcbX2syzn48sAv8MUKCYh29nnqGf1EPsk2HaDrD9Hy1q8tAyLXSLG",
  "key13": "53UAHsWKxDtnAPH2mBDag4mkLZ5p3i3e5dsfm2ASSy3zXLqm4JGeyzSMJuCncnkMwiRG3AdewoXgzio4NzpGfywz",
  "key14": "3aa6Gu8fAnbJGVPdxa1H8q9T89NJMySwDAaZXTJ7vsuz9SqCbXjJjGJXTxqiiDqdF6W3qiUFUb4unbi5DJdo6bNp",
  "key15": "4C27W3s1mEX1MoWknfV9TPHemdQMvkyUNPgSBSEJEg9WASn7Z2xWbU851VJHwmKsNV3C57dQUxz7fH11Hs2H6pMG",
  "key16": "4HAypEgQmCPs6QegTw9fjqSU6MuZQWi3KbyYu7jW9JiaHXxUq3py3Pxr9xgKYcvPgUWdm6vxjTAXedB4J4ZyatTL",
  "key17": "KeFu9ijcE2Zk3nXDqp13cPNMaqftmczvELjirSHfegG4PpEJfyx4o8rCL9G2LXvSGpJY4WjHLwxPAV6Mc6wAG6S",
  "key18": "4kC9DXcsQMwwUQWVGr16L3ADqx2L67Bvo4VLVaF8jTFohULF6dDJSd4Fr5FMpfKsjPiAQac1kr5mjkBZpz6aigau",
  "key19": "QKZU3UcJkU3sgGEYL8VRuNyJxKW5RqTU2mazop5AN8pq1xo9UwFxCvpxSi8QzQgvte7mhZqbX7DWGj8zuLvFsGG",
  "key20": "22FEtM5tZNrDo6mbwptahfeykP694DgTHxzW7BYF81XmVn4xFzjJGWZbbcyNyvw3jXUSNXgPiAqTKLCyCcrnS3H5",
  "key21": "2KJ77NHijMheA8YPx97tXw1aXoPbNghcpsVvEipv67XbZmjxMGnCHQLyfgTXBqJq89wio2ADn4kgJyBxHJ24mRgK",
  "key22": "WkSzdxp6Sxr2MD34LbWWNU4XQrhaNXGXPHumFH3qURZABiBFH9YnYBQZBvsoNimkt8TU5YeGetj19v1Yg462Bb8",
  "key23": "3K9J8EsfNEujG78eXnNESXimpLKnJ129Y9GQe67fGMFvjuWnrerasJYPPhFCYs1i9n7Fddh5PW3AfrZhxUPUxSWu",
  "key24": "3NBvEUXsG43bSMHfAGsrvXfUSyGfjD3gW5jZ5Q2BNmYYX5Qoe6kFuvr3nCJz9XMgnCSbwPBECmoK2TAJvnRwK8KH",
  "key25": "4UJsUE8pVpzH39LqM35mGRXz4ofPqvETaxAWdx8FQ1KfGAGb9m9ywoWnSoS86DZuiBY4yb6LPTwrTRiQvKVQ3KpV",
  "key26": "2gvWwcWbirB3hoHNRHiocFZxpgtWNtwqV9gL6niKrnt7m6FLaGVePGGcr7RS4Tauyiu4So1n55bExbBTqs33fyca",
  "key27": "4xo2b4H6vnAwsAu4SaDkPBJY7tZWKCtaU6gKEbko51dPMqcwX2tpLbyhkcumsB1C1DsGMvF1nxKKd9yLKP687AcH",
  "key28": "jTLyTfQ2AAFR32AJ9AMqCjHkkQfEAGk8EAH297h5SsNJqt4KGsDUSnEES8C1iaiTh8w18XrSeYARG5K5eycrsqz",
  "key29": "4pKox2rrV5kj7LKg8wPmgNYxpm5wYw9cXbt59yeAuvhdvZjpzdKtQr1RekJyA1u2vn6dQfyCd3CEiKHrQ9bumu2n",
  "key30": "2iFG9V1SyKPMCmDiEymdFRjPSgYYwDS5CH8YEbDT9aRWD48vyKHY8GARpcGa4it4fizscYiAKTv7YgxmZxjhNkmx",
  "key31": "7bGZSirPJRtUqNTuz3VdTuLqCh7qcY9QjWhHZtsxizzvFoEmTfWMNvTmN62i1UhAsuBxwvqNs1mzfoRQRfEH3a2",
  "key32": "3xdNLNU5xjJbKgJx7a9ifSVdGCJ8aRYCB3FgDF4nwkkbkHZXuTdNbASjCfBYMbMaqSXh2uiFijkas6BQv2xJzZh5",
  "key33": "26BHYrDjFm4ZZDziiP8SQtbVnZAivqrbXcrdnHiH4cPCwMFbzUibS8cBVuj4f7qF49fDbVKP7CSFRPcGtX1bAwW2",
  "key34": "3ojibRnwoBtSr7UnDrRt1WnKh6aKYQbFpU9Jts7E5nkWzmvndA4HYkex5GdqLuA6CVeAjraBCeot4LEKKKqXMBdh",
  "key35": "5Kja6BZAFnK6fqkYkm8f1wjt5kbZuzATSSNSja21AYqpi7LnWCt8MRYsFHhRwiG8eRi7Zb8Yf4UAa1hHn25oLCzB",
  "key36": "52autXgVjZZJR66eDz6i6hdRcCGE1DxibkhWrpTrF9U4s5mJb378tXg3GpZmZjeq9TrvNDWqwaaiDrKuWQkPLLvx",
  "key37": "5EYjToLYZCzCuuR8YfuFFozEAZK9jFdWeXzFxpZM7C3api61DMCdKUjDh4D8xzRMTg92E4X2eGoNU9tJLbfF3mgE",
  "key38": "3vAMtJUYPzNmHzD6zRwVx5282Ta7RkyRkmXr9oi4wYK9592qTBgoDwnBu6btGMzMqPE5fWwNuGtuFa2VpqXE4VoB",
  "key39": "5ipCz6k85FyHTYuG8sZx53FDk9xJTmMKkBh6AUPmZiTf1iX4SoDoaMDxc5XmA3NY4nYs7mEqRZaUCM4xEnuZKjdZ",
  "key40": "2yxqq2Zp3sJvUwTkDTCoc7tSCPtBAgy93akmcJevqdaWSRXRCTQtkY9HDfPapeainu7X3rNHinqCPJTbrnmwiH11",
  "key41": "5CJxP5JVydZH4BfbkWibCqvdS4PmjqF6moetChg1E9V3DUdAdiQuHimM4cCYaSpHXx7Q1zCYiwYVuTEdTPaKdD4U",
  "key42": "3pmdVDemVSya7ecuAFA1vUVAWbNSD7LpnXugc8Qm3exCg6GmyscjTjfbKNhFqqDVCwuoA3aryoRRgK9TWXkmnpfg",
  "key43": "2sA3yD7rVFW9N9KMnYWLbc95ycK8nB28kKKUEgw63czPKYPpEPmLKMAGPwcxC4fpezWVxzbp86vsdzBqHnPh5jmK",
  "key44": "KxDXUR4coVfvXzEUsTsUzVjVKfXh2kb4FJLmzkX4fHj49pt4i6BU2YXG6tUXrP2CsaMyVPwZemVV4KfQzbNBGfc",
  "key45": "Uz7UZMYz48WBPamx1P9vZHqimEhRvpZa63QhAyr38zZbvuksaU6cy67PSVZafHh1utTHmiuA75c5sdw1G6fMvHF"
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
