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
    "3oncy45gcxej8HzdgceW24kTrdmtKMksfSCYeyxW9hhXqZuWhzGbutd2EZ5dQKAthKWbaJ5Z12522NovSF42FWGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfrvnyeBwrRFkoWXhwRtuL5FQHiA22pDAiy9CQpYXEV2TUMgorA8eEgabDZwyv16Xi2VSbZdkqqGbrNrE4TZD8T",
  "key1": "3bCx8f4XAzg2bzfxpyi1Uiej86PNqibYDQCf5gyk1g4NfaadTLhRnEJjXV5EdabUXfiUtKWiSPBrLEF5u221s6nd",
  "key2": "576NEVXqAvB56L73s5rX4nRfVhs5LsrtrfGGkogyNRBS9q22NQr4gWRMd1nhDm453UZ1pss8z5uAcgmERspMEyHP",
  "key3": "4LN2BZyGyb649Uzc2hGukWc4qJMSiSGrLRFFWC4vJFyiNp1Ew2VQRq5NcWNzyYW9CVN7682NRzBx1Ewhm4QkusDk",
  "key4": "7kJUbK2W89SKaSFYHVAsoverJVUJ2YH2CVySk9Sp7ESTgkWbBgPUEHbbZCCawvjJ5bj2E7uS8c9kyPUjv1VwF2j",
  "key5": "5bneFpkq9XEeLfuwTJKr8Ut49Tx7cAPzpij6WU6LY4wKVqDgey9xbhhahkcn1ke7avNo9k86JmoWjfxxGMXdMCpG",
  "key6": "5Lu13XJqdPRVLTZ2Bw9KFdPVPZ4AYwBS3DvL5MhvMh5dZcneHenGxD3fggYN2qCp9hEkp2fQ41SWNpMfDfWKq9Ls",
  "key7": "5DPMUYbd5czisihLfE2jErPjTa7fa5S7MKCNzJe3vzxRbcAqRSqGUHENPd3sVSK3c9tn8Wb21UZgMvJ635QcV8e5",
  "key8": "ospj7iFjvpSqtSDExXriaYc8qYqLjnZV97LqKaqE6jhvJrvXncSJTRZMTCmPskuGFUXamkLb5uH2uTrHzwEbE9C",
  "key9": "4KapdW7mkpyebimtXcmq3kYjddnUHW2HrT7HVwQvsH5saRQyZUwqsqVdFQWJsyvSmdmcwhpinZB9vRfZPmLcxnvE",
  "key10": "4EqZdgG7GpywVTvSKQ3hYQ52yBPScn4KqFwZBw9yatoc5tmCYZnbQYQpBxYmtC8gvkzGYzdhyzzWUuy4SAjeUaAr",
  "key11": "3LjTv7keVbGH2Ar5vgLmpkdFp6uW55wgS7ixuVeiiJAJqJYuDUag8Fxzyk2oU2Y6XygEBRFGgs8dSn3ymgs8Kazb",
  "key12": "3CWYQhKmxKx9cJgvFax7WTSKQFpSasrcBuFEvd8stJ466L83h23mvFgSiuyDfcpz5hEmPGndz5SD95fM4jYdsN5y",
  "key13": "62gwMoEMmH9CxsEFhrvvDCtVk6BD1AKKe5DQUdVjJrq5Mf6YT1Hxk8EPFcwSaoBiJu1G3rgGegm4fhhBjBcKWukR",
  "key14": "2RzFK3hj1PdkZsUCY5MraVcpYf5pD9Qzdwbpk1zojtyaPBAHfBHtmGeVVKafXwTfgVi7Gb7nLBUH4rYRc4BLkQLJ",
  "key15": "28jhw37mZiAcoucTduQTGSjRroqPzcuA4ztQGMM7DFQLsry6KUj32YcShBAaX8suhNWssTDhx3BizgQyUiMsHoaK",
  "key16": "5Sqgf3hhKmAjBHuu7XxxjjAzZ7SKAG9s5z5r1gw3TJL3jdgHXy7SxDxzd2J6CQaq9yTWDz11DfmnCKjiS9ixaDbp",
  "key17": "59zKRprpyGXYSRTrPRwm7s4YJkaYt8tDhAy4zyE5RgGWboWYqR3MjfxbuvJjQYJ4e6ZJLKP6rJZAnUXRCCR7URcd",
  "key18": "62mRPiHiBiaDr1Pk3G8ZMHJsdxuuxSUx4zHJnMbjSrTW7P736sSwfKseYtK5rvdqawiCuZHc4cf3WSTERhqJUXn7",
  "key19": "2bnCpaGw4FEQtsPdVFfvK9iYaXcpCzKL2QjzGJbnNiycc5S64W2hpkrQNR8NJ4xnzFveKZJxA6ofiCXgTDiXVdHd",
  "key20": "2eizgKpbepA3e7mxEqxVwknaqaPHD82wN3rfFTB2fUj5TC3mkGu4fUqDzwRgSzg8k64hGG44rkpeYGETCuMySDsT",
  "key21": "4B4xuD6TwBgsRGAcxfZRj5gKK5m64xdLtsv46wbssze4eoT2jmehKQd18QmmMbEo2LtGFB6qdzAWyt3SBKy2c2QN",
  "key22": "29YgPzqMNCKtvtUXZths7E79zdWTDsVXWs8zMjNt1gJetMy4ef1GWczmD2SQWyAZxBwbb15QrPZQPM5oFWCzxMjY",
  "key23": "3odoJWBBG9r8Ja69hLKnM2DXi5xgQh7Z11pnGpE378sBdRDVkNXyYEupfYGyyYMETzxCJ3uHjederVxJMm85VVby",
  "key24": "3tjYTXVrTmabw9w4vGWQDsD9eBcavzqbChbGbkKifJZRooYS3Wn7aTcRZi7jEgmqGw4LRtT4E6fNrHL37eVxo6VS",
  "key25": "4SyufPxHCpjs8Zhgso24gfkYRxwUg8EdNE3NMrheHAkhz65wEJzvu7Vx4FdFwbV5FaMWk3dTJCJQRJGaByz1jUo4",
  "key26": "oUmrVrBzLQqcyV1SnCkArjAwSfGPGUZV2uVJrsKvWWLGFhS2biwieBPfo9Se1stfUQ2BgRJL5TowLPprVp52Grv",
  "key27": "1JDG4yFQHN3UKHGwozJpB9gxNQqfuR5zxQsvypqPkqjJsS76oNULGpbULc4XQsX6KPoHg3TxF1rdB2tVQ9PmRcC",
  "key28": "5Zf5Wb9cFV2KAbnTeKU3nZFUGR1FWdYozWm1ZZFjvjm93pWAyCkkXgkABWZEgAtmL6HES5VJJsiANDBEAVJtnXJM",
  "key29": "gAHMc6QZszjSE5NV2pVZ7WPtHFVq2Ar7LZMwtRdiDkV9e9atzavAaT2NphBVt3G7o2QD8ddHfrpeisgT98v1CFF",
  "key30": "2pp5KLPWwEhK6NCo2arcnYjxjEGiLixdJGKZVsnSdpTsUCQ4dqFTJmzqRVV217Dn69zQzCuHN6Rt545U4dCcguH8",
  "key31": "u5MpmyUGHa49wrnvBLSwaDvZ4xAtbGLVDURPADN85LgRLy7GW55ag31rNpFWXMVrk5naBa6LGnUJRmK2jFtqyUw",
  "key32": "4oS5vwfwjwzFS5ESNhcieSvNeExdVV77iRedt1L4byU8vDYGRBF7K4UF1GJKBc8EmfwFJd4befxQaVdVNAL7rndA",
  "key33": "3gT3o2qRXkX7qGjv6ynbWmtHcvLXjiWBKNceVKv7tZaZ19sJjfVVstuEa9NbS12KeYiSEG2VN7kWCJUfUFLWKAPL",
  "key34": "126TSkwrqo32JN5CCnrgA96Hr8TrXRRCgSVdu63228vBpVXMQqvvK65CkfA4pQVHynzwYySSpqTgsQfaXEQNfJg7",
  "key35": "kLTVhiKqyWWK9KzNZTxPDBzaJpcRtGBVBUgePuAyTrGDxm9i5CYgBUGdanVqCR6YWu5HGvW5iXhT1fyD9Y1VjY6",
  "key36": "3mkeFsWSxMDCn5yxitC8f4RurwVbr72EHQjTdRnUfkZxE944igAKeukw8aWnNWnRn8XwSb44LV7SjNYcvjnwbDAb",
  "key37": "4pr1iSPAMvsDLfQ6ypZri5eaff7vQCPtt5fmz291LYVPZ7jM9g6mSdgq4kWw4m3qFHDXzLhoLRbtWbPxuT8hui36"
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
