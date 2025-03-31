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
    "5i4k4SkWJqjmVJ5cBSbn3bAxrV6cwMXxTf48AP61ydb9anKVH9sPumK3KX3qZ9tvH494zYzL77Dn3CyuxXoYhZn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFnDCNrWs2rc1RuV2mZ1bJRtvx2igu9n6Q1oFXdCtUx7ag5vWxvYByBseA57sEuP15dWNRauxkkBfDwUKwWqfwr",
  "key1": "4A6J1MY4eSF64ddys6h3mAFJGtSdQVpbHEFFbrbaTapc8fvz798ZnwimFUpi9HgewzBS4FW9GWHupBLzVmvrv5FP",
  "key2": "5hfH6eokL4DLhxNbbRWmQbZTiZqjWCWfa1kVHJYeigsQvR1tZytvHscMbmAUR6j47MQu5iTqKipefiEUJUSub1ej",
  "key3": "27ANJcSV7EKzBZt9nq8JLst4wm3fYvdD4xDeAPC8ELeQuHQzR6B9qifUFvrFbGiS2BNz8WysZbHTexMVHnqmrDFJ",
  "key4": "4bQRUGoCbsv6r2yDH7sdQg1xaY4rvF93W5B828cna4185eN6hawVAsuH6r1WWcWx9YfAyfe6ZUxFmhYa7N1uqeGj",
  "key5": "4x5SgkPF3A2GMmUttHo93vNo6chsgxkmHN2FFEmckrM3J37yHqtf6hHAAGMhCEFAP5MBebXKDhwwKEdPDHNQUuag",
  "key6": "4NQ5HA9K1cD9YmPY3yJqCzQbE7SLMiBELUp1szLE1dykx1Q5nkuusTFBBgcsNW7EK4GvS9oFG8fwACQGigVjDVAK",
  "key7": "2nHbykYTnSfZgLtTrkcGR5Wrb9CDXMhAKJfNfmFCPm3xdiNq7bnRGQhGo1eR1pREThJAWewVWP1MQ2yKdu3TR2Cn",
  "key8": "5QMxC3RZZW97AnDg8hydgZd24xUvj4Lks8wU9ESzniG7ThwvmJneQgzA9sqm6ScBgc8pd6dneNityRQm4hNv2pTX",
  "key9": "5bkJ8jHL3soEJ7ZeUsJEdoxTxhR33pYrQZPYEM8xZUCfCZSKotbGXVgeVY3C376m9uYeDmdhXxp3JUz1Jn4osX23",
  "key10": "3agLzEdmznCFcGZwyaz6oksiMAz1hCi3hS188fZYFk4C2MkPVtFyS9vQnZvS6bSEN6VE7t5JrMAH4fqfGZDJRzNs",
  "key11": "5fv4cpiJSdDZdTVGmEYNgHUDPDshccUSLfHyp5pCm6Yqzjf9kD2mDWUW4Mh634NrTyfYygA7u6uToPsWmjedvCgD",
  "key12": "2i6fCJbCnqC5FGxdckc1PvX8DpUJbtu6ymdjYYVqYY3WroWxrcfXjzFBzazpKfjwR691hYKNPm2XEjcsVJJx7ZSZ",
  "key13": "2G6M4g7cNuH5dWL8DMjSzoi626zq669rM4ennYURQENhDt8477UrqdPpuEoEdcr7SjzoektV7TnabitR8fmLiTS2",
  "key14": "42Ai2RZzgZr4cn1CA4kTda5mvJWT1RfbvmwWSqDH4pc18dmHYFUuEPGDiXnuJtrCuGgoqQrXf9u2TVWEdtkvZjnr",
  "key15": "39AtbHX8XyfZAMoq64YMHWiEkWqhcgimfMv2c3PpydXHe7LoBcnmz8oXy79oT8Xx4zFpRggrwsASTDydHBGwmHgo",
  "key16": "2wqBfxKshUkbr6RvNKvfmAiKERFfSwH4fytr86i7cWaqkaCAE1k1EH1WwWKgivbYVr1SnagqBu3xpaq33hHVkZf5",
  "key17": "bZmmvk9fEsgQurLjYhicBcjxQsWKS7VpKSx6gwPcDBJrRCcLHVt5paec3Mbo8ttxEiRa6z46wqjdUDFFf4EvGu2",
  "key18": "Y2v9MDgYXrZPUjTW3FfssEo9oqTcnVrKYP5XE7WVvZiSCyZeSrVPhcpR42wSnu5cgk9775dQobcjtFQpVhuxcLS",
  "key19": "2oJkzUnidBzwYYXaMc379ER4CHojb1Jt2N3JfzD6Ztus8SFrLz41mkstSqG5zP9iSSY8SsTCYdd8oJeoEJcVdW7t",
  "key20": "32ZDYZqYLbHzyBU3dgySDRAt4nT58Hbq4tCEcGxLHkXtjETYney5uiN6kgAgo7yrFe9WPUVG4eAp1o1Hv6dAy9GM",
  "key21": "3EoHRbaQdPrzahTHfq5gtou6W2BimNJZmXAvEfHNu2z1dwrwGcqpVN6TtfaZDUk7u4FQiAzmzNxDW1VnEinPVAxz",
  "key22": "s8dt38RcHiuz9gnecaQDZTi5fiyGV2cTpwzQzoHa8JXuWdx8tCjJbnUsoopWnnZZrzKnn45VVzQ3SPrgwReJRG7",
  "key23": "3gCmxPUvF5tiPeMUm5FeUyNnqYYFxHCiG7de1t3V1k8LaVoj77Ek7PtAvzNpzD1cb7jSvqZ2X7wsqX5EJqjhrerT",
  "key24": "4QfpWtmNHzd1jLJmbWB9CKZiGj4ze9Veep5vY7CerCmD8ZbsmCqedWBnWDshuXbvSyXDUjko553J9Er2oa4F824E",
  "key25": "3S4yTo27Hj7HgqHYXzNe17KkvtnXcnE9XiP2Dipkth2M2JbYQdRwTVd9jCQzDxxZKX1wiww631Uk3oe2iF41h8fX",
  "key26": "2ZcDo5MTb7BQtaFVVtMQ7njiSNZHZ4nmMTkoTcjD5BH8zKszJzkogbd7hRFNXCbrBA3ztpKKviq5nCY3uTaghz23",
  "key27": "93ZAZo3TjC1uaYsGsj1FCEcecRWhotyV4yY1XTcoytRUDo2bRXEgj3qAREJ9derasgcevSvj4VHG61xGxMxE7F2",
  "key28": "4P2V2rfzsqP66B1Rb5ek6yCL3dwBLDzX23o1Kanf5KFuufRRAHmwBcvA746iSko96HwiE39P2nUJvyfYkUobjeHp",
  "key29": "ynJJkjP3UsKh78Mqdy3EQwpRv4jaWAwkKRVBXZUJcksGhaCc8bacgrvcktCtEWLN3ckRjpS6QcfFWK4bLo2GqBg",
  "key30": "5Q8gKY18m3cfaJppJWdSdGYy8cDJt9toEeNySnhFn8uNVjZzmSx1Biu4vqF3kcY3kxi2A1VMjnqtBzRG8F73CQqx",
  "key31": "5ni2wqPDFE29JAAWDSYkdNzU7GxQzDs9wQtyAXwHp59qBpwjoEY63gXn97nV9Bitm3MFoJz274eJ8W7bHqWTPjAW",
  "key32": "4d7PZs2r3MdcYCqrkwaons3mA6k774BdEXSXbWPCXeUm3wM8qQBtcQHVteue9cJ44mPJ8sdfYkMmiPMihXx9dUCB",
  "key33": "5jsaSbwQF188ZJctHoMD1pKmB21Pf3nYDwwVTgDU4ovcoXiTJF5Fugo72PmqS12zxSqJRD1TCV7McPC1xX5m2YAs",
  "key34": "3iKX9PKMHPHRUDbz4KJznCsNtvevHrQtujkxJN9RgRwpDsymMke3oBrjDkfvKD67DjcTTq8RJJtbE33ngjWoa34N",
  "key35": "4A5P3D4JcUjXR1vbLQWGxyZYDRT18yDx7eiuP6icPMUoZLV1DYmoGVcEwnSg16HLwT2A1UQaVwo3WD9VQgFU9UJo",
  "key36": "59VWrLFMkreTZBm65n8d1nLTwmSRVVf4Fnebdpjf2vRJe755BH9oYo361EBy3PMFbZ72SN4CVScu5AEikb2eZvLy",
  "key37": "52eJCHNVHzY5GGBb2oeiVG6bgHYTj2jUwFiF1u58FL175g8zsqiVPPFLSN7mVgN8K3KkQ1HTCrYLVCnuEd9vBq4V",
  "key38": "2xyQMPbFEFmfrufnT2PcfEfVAZVDfSi9Ank4pNdF4NZAdb1rVqHVyPL6RHvi8257Qj5cYfXgfHYjGGvKWyzaJWWi",
  "key39": "3opX6NRZM3Sxfq38hDrMc1MWVpWYwNbAaPssX4M7tCt9JXg1miuH7XMeebDaWyK6Zp1M7zb66ySBd3W4DNcyi3va",
  "key40": "3FSrLiFa7qGmoVQ7dit8H8RihtHQqj6fMi488EPikpQ9DgRvpzMY5WvwsWGFDNHzR9sAAXwLh5qVtC78H9yVHMjE"
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
