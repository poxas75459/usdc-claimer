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
    "3dEFo1w5nWaBDsxn6xJBhbUiTKMbRaCLWtZsizvvkyrH5FZTG4KtE4J4mYYLo8sNcEJCxya1FGL9BXPoeoKXA6dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5WeZXK5DXuN5wwZA1hre9K1Uspbuz2PkxY47frv3XqkCZXT2SYXAu3FvoFS6XahKd9mm5V1kiwPuiSJR6bwHJ9",
  "key1": "5KduERQpoP9ZhmhanJVexj4Z3qb4mAyzVkJEQrKCiwfRXVY3znBQDQVHhyD6M28kfXZmMdc9jLc617rpY1U1GnbW",
  "key2": "5gg7YsJhywevaxzFCmHS3iX1SqMrKgy3wP6N9ZvjizV8au1HDFsRvbucj5Dxj3SRBypqGoS4C4aUxgfeEzNt3oYc",
  "key3": "32YWxotJkKqaNC2gGJXTXu7jq252iVc1KKquebSqPBawA3rtgtsCPNDFJKkac4vGc4v6xTnboKWGFNdGJrWDCZFA",
  "key4": "4u28P2gJAMocBeaCUcjCe6AnCvVULRZVgstKD2rZcj3TZ8WeyDkrmBXCjFC4avQJEfF5gJskt1KYZBoAan8KC2nv",
  "key5": "2aWz9gcDEyn9qgLbxtpxsRpgNSVJuZBdrHNaTYCRrCDmkyCFshDqtkYi61VPPyQg4h2Xski7ZNmDdgVpKtAUuPFs",
  "key6": "23tWkmRX1bgMbCtuAAnBvCPVX7adq8A55BZmm2nsGNGRy7nksqfdymTe5uM3E96QAuF2W1yYM4MEhB9EmctrRNDS",
  "key7": "jp2dgwTmtt5AfrsPmBEQzjNhjGhXGM9HQnovMZXvkBSXp7j3v5sV7xQRQ9U8DJSDPBjgRBKxtgxDoSLdc8CycjQ",
  "key8": "29TtunWZpsG4XxEC9sDAjHMpH84B3G8nELNFQbL3ySCkveSdjTGUxZJ61sxa34SakjmtsqVpcVFgr5kUaGemE8rd",
  "key9": "3rAWXVaXB2xPfNyjdr7jq7RsRwxCg5svzKSumwvzwbTcHUEED8wFkz6zt9oAhtCUPiLHuxwBrMdiX3zzuetUGcuM",
  "key10": "61H9opyp2sKfW67t49AyYG3M8LBNkxF2yq7ca5VTkyhE6eKGPtmZb1fkreT17WgYecJmyDW75QKQTHV9FC8busFn",
  "key11": "YYpe35KowpT4iE1xt1QA3YJ2ntMj17arRg6pUDsw7fDsxcNReHhzvFzbSwfaV7NFDLz1KKnMKnRg5a3KRVCQajY",
  "key12": "2Xt5YrkSAYmxmUmCcxBs5um5fioVY8EcCFjoYrKHjDEhUUT494MBN5N6zgQnujP9z9Jd43h7nzaUgjgDgAhCFuXz",
  "key13": "54hbmytVc49CAr7UzM2jaj17DTayjt4mWYaBowXYqZMnbcJXaLCHyqWbLc2hn8KRyBdG33BDBrxe4ZZcnxxFq1nU",
  "key14": "RemEZMwMmdve1vquJqyJFx81PnMRe6eC48rvo5JzGE3CJkQBi5LcaLk7CANhupCM3wUu5M7RzN3sJCsizxHAGr5",
  "key15": "5TRWfd5nFuMWpry7LDf3BM2NnZLgSyiJwerT3FGaatiGD5Zhi9wEGz9Lf2CMcRZN7GUQXZ9c8JdoJgrzy8yjuKto",
  "key16": "4XbSLbPyAG3FciweEGA9dMUMENiWGL5o5cHHFagjKMJxohfqCwVTtpo3zmMXsD4svsGQ7fanZHKarfx5LFSq39dK",
  "key17": "2D5nJAqehLiCthShCdYRQSkKvuWWBctkF4GANNEWjFxtG624iHScm4KYPg3dF8hmrzcMT83o754U4iwWfhFxp7Me",
  "key18": "2CF8pcm786P8ED9oachvBDeBnWSJE446s3jBnAs4XwUee3vWAUYMXf72xVMBpZhzpuMSZd95iATpmjGPQaAEAZ5F",
  "key19": "5HTv1ufUBnsaMYNSrq8mqgQ9sW17JhS6ugYwo2JRhQYWxhavfoaXnF2bYdweJRufXMUUirMyVjinGrExqvCMgxSq",
  "key20": "3yjXt73FhQ5WpWoYMQYjgYD7Mio7aUBVwqgkGx3QzCrFBuNybN1XUbQZ5jb1WPecA7mE4MPbuKvnt2s416MytCJH",
  "key21": "Z5K8gzrTuxTDDQYzkBA3JpW767f1iP8weMtcuiaPbRxcCVn2sisZGc3R2qyUoC2PKc9dSjW9F9ZFBczY9EQcBRw",
  "key22": "37tSeWGMkJLxESS1ef23FyMjywFnZutE9jeL2coDCiHzs87QKbN6EEPUuptNoopFAipDttWynfy5nidV1GcZiTgU",
  "key23": "5bRhQnRM8YvRLu8F4dAPuA77VWcHRFqTeMDh55JFv9wxNkCDG79qUZ8gxN1Wr2VJ6uwBZ6pWwKDnRGkAbo64CKRq",
  "key24": "4hJLSk1NDV8co6LXuz2RYtYmY2YPM9dS9MDW1eHwkrLAWbAbvpVKmNUGUuxdZbqny9vnZt5n4a7yd379TGqagA5C",
  "key25": "3Mc7kUEDcssPCvZ26HsnA6Xvm9h1ZPantcHGtiQY8tEDBmDFjziM8oxx6qMBnwPgHWCGCPGHSdikJeLo91o1fL5S",
  "key26": "epRUFBLsxugA8vjxYLuzKHmQvtpdbbgkXczabSdtWUNdEFoqrd9pGugTmvYqv3DbM5eo24e1cGBDbTCz6A8cAXZ",
  "key27": "5KWRVGGXgWmUhbktdmz7t6qjzsfRNHNfKgGKvF5KqbGhtmXPExwhzAvP43NXLQyB1MepfHMD8vgHzTHZXpxaxQJj",
  "key28": "522Sj6gQ4KFyRpsTFysERBXZA6xAvUxs9rm3kFLfgFP9renrsZLTx8CTvFeTeNUrHi2Sc4Ay9ki6J99xUKRpyMk7",
  "key29": "5VVD8FBwp7xgvfzADgeWYmyYovckpPVurb3b9csYuJYPyyMzbppYN9TgP4jKqjJykGrDB8wNFpi9pmxqpTmPaHoH",
  "key30": "3MCR2jw3UcWakCH852wdmktrayoYujRy8HeQu8XMtUgjwUYxLPhEPNtSpdyPgJviUZbg8cccCGXoa9wXpbCkDsio",
  "key31": "2uGQst6UAzB3hR2gZnxiSCqWip7DntFWeM7D84mC4RNqdWrY1bG4xqUvv1GaLX7rCX2dvYXuvCb2Y2DWeMwaifyr",
  "key32": "3r1fCt5L85pibrQTsaAcnFHZmejSjVBGErMKBpQzdCi1F8MKjYrJvMxpDgRDTkbb9TwH9f1NiRGAWtzcVAMN2ZRE",
  "key33": "633bubG7rqJLVcSZG1FGJoYXpwRtdnkJ1fjgJAH3n7miU3iZ7wcHKEhQ1EUBXw1Pu4FiRj89AL6B7oL6i5FqpZT6",
  "key34": "GfKCY12qfJwW48Aiuj4ZTSNnkVTgfe3juDi2Y4cjQQqBJ6HHbtHtjoJ1Jbn56VkB3RzoiwhFzTo4Ab1oStfo1y3",
  "key35": "2qrrcMsPr5Ez68imNYXxmM1L23x1oVSCp7Ta2hESHLphCtC1Nm73nsx6bM1mpudVmLpojsixfDLPHcwPgf5zcDnF",
  "key36": "62A2nQY9mRzt4EDJFj4RMDFUmTiHcKVU6z7UW3tMkAxk1qeGBh8LUZTNGJDPbZMHTAJRDPYYgjiYVR2tmv5Ma7jp",
  "key37": "8yqRJdCaPM2r5iirH68LqBugmscCZHkq8J6q5YejbstPa8MvLX2Ywik1u35UdrVJYX1Ry1EBDtcZ3uZtaGA4bPJ",
  "key38": "5P34mL6LyrjqQ5kQNJ229MeuHRhAjrZzT4gtCiw27HSDp5kWCQfcpZzdysbJSpj2Aqjw4Kvab55wb3AMFmkp6MwB",
  "key39": "3XZB2gT8xQoqesRBGXTw4WU43ymrXpQLwqLTMAb5tU98hw9Um4ras6MpnF8rnD28ed6rgtJahDt738QbYqQ2apZ",
  "key40": "3C2LLmMMc2yF3YSWPGaySoa7ahTF3cAo9o552cthXjZzUUhmoVQprYW6DH9fcUB6y1FE2DqMLJU7uxvquqdayHXR",
  "key41": "26KRszgDdYZiCpVoxM1QJ9JBhcTd8uAxwG4eV1f8CPQQu8KTWzCKmWq2AB7wQr9DfpTzkJhao5dKThNpADsWtjyR",
  "key42": "4rG19jdJGZTaeUpV6fnWBvhLjXoVG4jFd4A7UJxzUJMSsct6opr5xqQ6KQMKTBfs6ifZdwBiMH78JyMBStRsmGi9",
  "key43": "ymJKrjsRbo1D7J2pcE31hNvPkUyfRSttrD5RQF1cMfVNz1U9uNFU2CLftbqUjjnWu3wFeDKqYRy2fnq6tZvWmbV",
  "key44": "4CEfmTR3WdzHy7CVyGJRYJYHD2Nmvog5uSWJxTKyUZeTgPNqwvXhy1Mn1jPtEVZHETUXPHGdBJa8SZK36VgG6Ujj",
  "key45": "642J5JS2UF3USEx7Qy6MAUMwJFpDrhmxL3yUmCDDEkZ1JC1K3iVCwoAqhwsdDjwkD9BFjMQCtAPmiwrXb43mtuj6",
  "key46": "CgCmYv7PrxD62izTTe7a6bCLJoGRfwNqzEvVf9AVwXK5fQDPMU4GMZ2vXYeSUqC5ciQ6gV6ZK9LdTTAPncGBDFH",
  "key47": "3cqAeNbB4G9onQFRcZDfJZhXzBXjwF9gutP8mUhQQAJjfugmaKnNGdKGivM8ntuYNNfTvSThVksawtncoE1eYaeX",
  "key48": "6M9vTU3qygwUjNsAMvxqHkhyXR8zkmoXqNfh89McPRtCLp3tsB3utm5pmQpX81FTP1BNLzVh8VwEZcycKpJqozC"
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
