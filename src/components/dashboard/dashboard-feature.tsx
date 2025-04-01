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
    "45dWuKeeyiZ4xSR7Y1i5ASrtsLbKFVyowNwhVvpWcEQVo3bVqNCCcen3Hd3xAvU4DjpgBgWQtaJfRqqp42UrePgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zq98UJLhd25VfkaxzPxMA2D3SjjQ77ijRTnciXM66JSXsh7wTtJosiYuRnFfQLbQKH1oS1gYyb8tW2j1uLbPpHf",
  "key1": "3nhsj52B19oqkMLRewxYddUaQ3i7bid2XDqdNDd9DbrYZaXaen2qQFqfNMMANvn3uvPt5qwSnHtUW2aExi8SFNRw",
  "key2": "5EW1bkQyHqDgNgXcAdd24jCZ1SRKRX1vMhjEAtsd3hzBK57ezQqP6hRs5SF1eH1d7uGzF2ntYAUsXEvYpXrKg24e",
  "key3": "Z9A4b5S7HrXzJioZzAa7SLuBAyGrX4LWh5q6jFVdUF1xJiqV93Air3iTrndnJfv7cREmmn2TJS9wPo5V1WXPbKN",
  "key4": "kk3XWLiJwojMoGnuWn2hEm8sSJw6pt2qsKa5RcFwLkRGjv7MsaKaoVEWtfC4HwfqbqfEGVxLecQF2psgKbVVED9",
  "key5": "4ffkSZ2QPaXjQjArutz3yGqwoi46DfMwWv2n8tKddBFLUHkHwmrQxftfdh9sqseVbgHKsvHzN1kUK9tqzYLFVBwG",
  "key6": "iMsNEmyDzVDFvwjEC5eUZtoo1UVeTrjX58TXK2wsMg4YRGVKKVKdEWJ3D2pyotoW91rYjgEzfJKbtt9wNKC5K1J",
  "key7": "2N21GdpBgWAHGEa5jnXrgaJJV77nKqF9CFxJYo81yySt3LiFPdNA8pAefxoKhYwgMYTScoctHHggGAnZvxqiUHXk",
  "key8": "wRYbgA7bkGttDyng2S7ARK9PoKN1ChcnwhXvqBEkasNmk3YxjC8XHo1wit9DZpdx9uRrCWESmdsvjmP6SJ8WDo4",
  "key9": "5XebqcaenK9ipW1et87oMuiDmFDVz1QoL596pXLdQAG2E15piPcCeRz9LAP1qu8arA156B965NdCpGsvdFDNp4T3",
  "key10": "5y4VFNdN16ojBvr3ZyXsUCp6tDgv7xQDXwYhzD48eQ3y62n26vd8PzLFvaUBCxmc4i5dqSWs3KoqzePFc278HiSG",
  "key11": "64fDKEJhXv71MhqFrXQQctbgyqcuaQiPi11yVmtJfUMYb4vqokcw7kDWdDgGPgsPzBwfNtpvkYbkK3wAZY4WubHW",
  "key12": "3cYYssjtzdKCuLp93UVX7187rpDKaMeRyBbQMEhymn3JyWQ6QF5SxrKzsxufK3z7am9u5mHdjkWcixeiBZkz2XmL",
  "key13": "Ty9Dc23uThbwXE2VHdm2VRt9feJPCHhR4xyiKAxpKK8DjG6DL6Cv3hRGP186sWhoTYFQBBYLq338Bv5pcqAz6Bg",
  "key14": "5CEGxnYKk7CdVSDzAdKUqSU7pdvZpxkkeay6xoWFaEK29Fid6pSXZALx2QHbjcYCUDqR7cShs42PZrbLYTENVwyL",
  "key15": "rdhpjTwxzWcQMqjeiv87KYgChftmQbzvVLkGqVERLFK2tmHfWNdJS69okogMkrUtTERZzwpTofHSCwTztbHumNi",
  "key16": "2nZG6XZ444UW2GYE9ixPWNN6PGZCLMLEbLZhzqzCzBQp7KrMoPAr6jJ5dNpsfgXUNkswHNHWQQRs2ksdV4r7bB5Y",
  "key17": "5dPLmM3HuFoPfJtYbyzacUYK9TWd2yhzSLSzbnXW37y4i7PLeXL78tkdCM3tF4iZwh6nQbz4THsPKZ8i1tix4dWd",
  "key18": "4GDAXy8YP7tmgntjYYtpnGTKU25fUntscM281RD53gKbhGBxL86BnQ6DuEq3jGpMDC2Se6ZxYapY3x96NQ99XiAy",
  "key19": "QzZ79qHHgDKLhahhLDjjtcLonPQfc7UuB79h6JUgBHRUyyNBjbeTXmxv2bjX68EpGnJf3LjyajwaCCqFKzihV4W",
  "key20": "4PzdSGx6r7K2DdV2cfZCdj9oV85BM31DMsjrtsmwCmU9s1SK4rKKJZ7krgAWpWr9NcBpUT6VseZ3TUQ2rGzQ4SqQ",
  "key21": "2ZDYB96u2K8vYjaR2JUeRN3SRYMmPZ9XAmHfL4WZw8BHtqyAa4DPYXRFChuTVC6Wv223LQ4jQA4a5qNSTxBahAx6",
  "key22": "3b4xE5FeAGpEHdih8WKgTJ97EVxMkgcauScvZXpzS8f6CxTk2FMWtq5q88UjAwLxftpgRvsBciRjv4ZxV3TdpfWL",
  "key23": "5BdS797PEjSZRUE9haJuc8RKaw5kahfyVPmqra8ci3rNY2rb1B2jnMY6XS4no7TE9U5CPaViy8zgUXGMXd8aQE7e",
  "key24": "3JD8SFLtELvhyDEL8xWLQ4asvMD9hZCPKkLmQNowf445f38KuZ7rdFjdHW7WDPVEGpDrVxBbLRePwTqLN7gRrMF8",
  "key25": "3cuXNU2xHhEE3QtJQnnCBLDKqzihnr1bR76Grj2ifaJcxHsRR6vX5TM6n6FuD4exQv4YcLcB3BogRqfqE9GAGX13",
  "key26": "51ZCjxtrBov5J7aQC137iEUZJKY5VwJa2jvqo1iGgBi5WS9Jum8L2s1HbguwGtHzsFHUNn38wa6icHmk2tPE2TP4",
  "key27": "3vPwjrgTy43VdwGpf9JGNUT9shQ2STpn5bqp2otrMdrshNM3TBUNL6cCTUKTRvCb5pZkSHUX8wzv1k4WnbAQVWaK",
  "key28": "kkEWZqTnkxEo4S6afHJ3LwHdBRT5giUtLLF3ienq73TRudJe26WP2o2myeznis3Kw49sFY398tiJRoRCmYqibv4",
  "key29": "4PJWcFF1joCzyZachBYRPN7BzwJRUchmPNg2uBbHUPURactWZwSusA3Zq5EzvqNbx5mwMNrqnfwEfkUQq2oVE15Z",
  "key30": "3UjckqeHtL2XHp1UWGjVPqPxqqAyyEy5qnPFaN8ks9iYxCrCo8Qj9FmDcnR8Sy6FWqt4stjjK7ZEijYFdxDpMor7",
  "key31": "3qcy9vNiiRYhbvuNariio5FsRWG2H2KDs8S4joNVw6PLhLCdcAMRjFyRcfzwret2tLnr63W2PSuGSSYMhN9AeUtH",
  "key32": "2FcZrPpVbwT1CJPB5oPr1iVNCwuEKMrm6B8qSxELXgeYxdNZUvHGviosCTTj3dy7rwhp3yNnPNziiYgkr4b3suqr",
  "key33": "2aHidRp7LX8WUSgsnSbxdadm7kZpK545dtMdbdHvbknzF5KqnH94wb3dUwb6X2qB2q6UReuGnGoxZSQgjX4YqDQ2",
  "key34": "2jAA35vSSxmEN1gP7kgeNpmd3xm3L7VEHxftXik783FeKr1bbDhkFMUAQh21VgxuUcYxfm46Fm1NrTK5kkVKvwRn",
  "key35": "4WFgEE8mqrf57GUa6fXH8GXeyr4SMKYKPMRZmApXmeztUeWvuSbjVdHm3aFr8CGLBx42hT5vDHj8Ukf9VfoTGNbM",
  "key36": "2PwJnixSkfL5jnnEf8j25pW5bE9wdEgv8gs8QFPxupebZEm7xdMf8rLCEm4LftV5nQTwdYYesidS1k2a3WzExgjL",
  "key37": "5Qv9i2tVCiaJiMCdk1dFH68tv1y64GxJKMrQSjLcmieUo7ptpDEuLaxxjFVt1dmsSqqAA6JEWsBFnRUgfZ2LhLVY",
  "key38": "38MYkqPGFtH8xNo9VkCsEnchzaCX5Jq3DB1s7Byvbv2J3DHySVojJN4JcF1vYtt7q6bZEg7qygQ7K81V5C6iajHk",
  "key39": "5RWWqYooaDgG5f5JvZ75FTSXfkD2uVKJzVRLRVpvSvumwotp1zopzCfQhKsdkspn3JApmkNjERAH87dNDn68KYu7",
  "key40": "2NYyYZ3CNgbRVjKZdNB3v4VjJ8GhKoySt8mDKUiTPztn8YnJyv2mtZ9mF7JeSzc7nSphiiRUzN4RT77dRRyFEUNv",
  "key41": "7hWsAWLKxBn2nsHWmTLcLDbp2HcphKcZuQSuz3amJkTLBk5XZTkECMMrMFzqU5dEWmtzNP42D7PF6HE4dkhyoGB",
  "key42": "4CKd2ezooETk8QxNE4dHcNe5vLR185Dowuv7eNfwZXK9MMAKmqZH1YzbTQ1LDGfMQJJwiHQzpGsgERt2SSWquZRn",
  "key43": "2fRpiiX2Vt4izoz4onnMcALBkRi85FCKEia8pyKYSyJ27G7sHkhF6BJxYq2s656EGHpA17qfAe5eNhyry86szZUC"
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
