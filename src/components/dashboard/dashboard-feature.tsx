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
    "5A122Hv4dgUEPYaecS3qYqAmDx3dUVx4HqKnFtfzWj4QWwbBNxx8aostz5nqhyHCG5irUr8VnbSuvUPwtHwv3cz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4k8tsqN1Ypam3fXWTJBRdLmLA6Cjzj9Nees22vRkh6ob894KiWZMcXYv3gKFQQbahBBfiU49XwYJzYFHJyvHph",
  "key1": "22M7vMQZrHAQgEpoLF7cXUgpTbjVhA5TMoG3dWMLp1NxNQHW2JncbvvzRbGZ5GSGNybij9yHiHw3hFw81UGyJAeJ",
  "key2": "3ywAdamsYhXPsGsgXhBUmbooXsnNKwebeGTXTGfWmNGYRSspK6XxDXx3t6keJFgrCv4iJr9JDmYEXgaLqY6W3cxv",
  "key3": "5wVKQWnZUx5s1yrcrxsT7aMxftYtzX5u4Vmp7f2xJZ2V69sn49pZkiBfaLomYDQPZLq3ntRV5V43wMRYEyDJ17qR",
  "key4": "67gVYxynKFpU566BaKzS63jEuNUVcQcDM4x2q7i3ud9NXwAn5MTusF6SW6JDWBEojeotLUZmBKUPP1w55pQvQvie",
  "key5": "4fq2UGY9GXsyoHj7u4B8hwVytgFFSFZ4mNiC2kRfM1ZSAGhTYRYiTZ6jsjgkjCd7XoCMnd2PYBB82FoNtL4moeYZ",
  "key6": "4UiUGWZws6PA6jvhoSFAbEWMSN6GDASaYzP3eUCekmdLLUTAjyYMsGtZMUub8P9gLtxkSFvyMghdzu8XwxhgjGbh",
  "key7": "KNuuzUsy3XtBgEun4eVc6sy5wzQYueowVgubKqQRcFNveXPuQ4gugtqBKNXQYKcb5VnmJCGZzJsfoLTdpo41Cnf",
  "key8": "3798TiJsp68KMYxHHymTAC2iH5V5FL7yCS6eu8RrYojVYVNsYSJKYEGChX3vxkPxSa2uReKYEBVAuoCVQYDPb4Kq",
  "key9": "3PnEMs6vMKeTfhBL1bcECsTHBq4GdJaJwK4L7bWHUVnGc9L9LG1NLAqetu9CkwWacAs2gYo4F6f62g9AnEwhZhRV",
  "key10": "kyGVWq2GYBoqjKxuiyufYGsqDzErDo5zayhxvFr5xF6rhc216ScGxzkaZuo8wjqzeCZCmeXmxKBryG7dyEtFbLt",
  "key11": "5YvwJZY2p3nnQ954QFoEMnZLvy4jkYqaCTs19zP68GaxELoX2EXRuB4w19DuCEHsT1UwQTfv62zxrRUQSmFB97o2",
  "key12": "25PJC2evZdqBZWyzDBF55ktN9XfQxF59Gfi3jvxRdzUietFr6b5CMieoU7kjo1PJV9VBJVr8M5soPbEEFTyAjTMT",
  "key13": "3MaHycawz224D5b3L867SH6F37oHudvDNxN3e4a6BqRzeLkDn1zt6jX6Re5WpYFUPdoUXnDA7rR1HhyL7TnoGcfR",
  "key14": "5LuJepMHZjJkLn27qzyArbWKQsEAZ7v8wsNAhbCoWFmgRcPP9xVn1dF36zphEMwnykKRvCHJQN7eAjUxQxShAizV",
  "key15": "218qZnsgJSSTtbXjiyPDnPyck39tVFwRV3cgGjZNK6N6Cw4Ts4C5DtA4QMsYUua1xZjheYYMtxCqXBA1Mh6GcoYK",
  "key16": "5y6jqfYMunCyFrCYqC8MeU5ktaGdrn6Q9RmrTGGX3R5jHxQSb3eCQMok4nvpihe8H3rC7D7eg6Pd9PA2yYibnGv7",
  "key17": "P5svUjZZ1kcgtpDnrhF9nypqZABN78XioZEeecHwJiepa9dDH61VQy26hTJmaXHy7ungVWR7WECT7NdTKLokEae",
  "key18": "2iXBZGZESQhRg7zZGJDCbJwDYUqnrNK6kYcMSgdkW4vZEBdwhbUmnMBZKwqMGpP58czDrjamNLydgX115REAAF6X",
  "key19": "5seKedBDbx8dLbBeWJKkXn7JYkQDCvrYtZZqvgtgTKkRwrV3nnLM9Y2ZssNB8RbpYLPWfENyt6WhPivwbqb29wWe",
  "key20": "4srJygG1CWLHHNkBhTYLvcYwPQxa3frw98wsT2EzwkMDX4J94jLrx2y1kTZfQmnMSbofN5B1mfSrtEEDD7v6bB1d",
  "key21": "2LdszCTMMd5odu6AVjAW88HnJBbZ6BcTRmr3ra4vxDGPxCbfJNQzM7sd16M86NGqr34FcDE8pDyNdwgtyNCLL9e6",
  "key22": "4x5J8wPKZkG8LUxYLwDQNnBQW3rwhTZtLe3jrJR6Sz6x6AhxbLUy8z7JCdATjF6QwQPmjCeWahC4FsWZbR8ffyY9",
  "key23": "3FPnWmmh4aSrLEVuTMucy2LuhZ99CzxmaSTNAj1Mzs7F5JNPd7aZWAopuZSys3EijjLHJcrt3PfBwgM98CocyAsT",
  "key24": "67WcxgAMCFojnxkBCpEMEbLgdamWwvVPyggH83TDLRV64Xt6myisfRhesmehCqLhd3EHrYTveE3YwSFVTeY4niqT",
  "key25": "gi6CDgVgoLyaLojekhGJjYEhDMLm3x2Dvq17hNTCRFYdc2n6ZGPZqkp5xEsNztMNLagADVivF5PRm2qc9fSLKEA",
  "key26": "3oCeBqZPUxgGqgBydjAK7xoscPA3MRkuLsrbrhrAT2ykAS2QL7K8v3FH9RFrTPp2ZsEhzcoMDrkVCnZq7CSMRmHY",
  "key27": "21U4vGWiaayBmu2SucxNiZYQBDABGsGngfsxb2J2uMgSXMivWgG2W46EBnUHNFvk1Nu8V3You6RKcxxFGNPibH5s",
  "key28": "3x3yTLaK2D7DdXtSiAgwtCrSBA1eCq7c57j4oHXKWVPqpg1McEDW51AvPku5w4thmwfvHHy8sMXRVDJKEvnwuZbu",
  "key29": "2DYp9KULD5FXE41MTrw9qtHViWpwtqvxu69jKR8LiyJF5cf7u5CsFCnW9F5gdkxbXNKVS15XzWkLWrGg54trfsSP",
  "key30": "3o4odqmsXrz9rUzCr9hbkq3BvQoTzCYsRtTndKpYD6QvxKCicCqmGnNmbwSTAxGUzQYUEgGAkkmTAApKbbLrBrQg",
  "key31": "9iGm4nKsEtrZ8YDS7Z8BLbURLW5Y55QxZ99mwEfH4XvXpxXhthcjREwmnnREShVP61dqmc8u9Zmjm3hUXHa4vE2",
  "key32": "os52NSic6GMfbCNFy2sQXGLiM9tACG5UgRyxBygT39fTcL1mfoPe2CcndtxAc1eE5qGXYBv2NpaxTLHcQrSDTiG",
  "key33": "2gjfYmBrxyHojVk6fb3PgTFMXt14UUgoSggvZwUQcaMoHhWrCMfmUcr2CX8yvXngE2d2kT6DwyuFM5neJC3YHsUy",
  "key34": "nJLi44QkhZs6ujoWLHmbeNQNPSLSPFEnpjerz6zRo7o47xCUQ6NQBVWEtoQecUdQoXWrpyGXqYxkNvW1Y2uaAPx",
  "key35": "5fXVDk3q7HipvXweAZjskZwSYgzmD82xSEzyGHMHm8drWxCamY8zCWwSKSgrz4rHLVPriLWBWvxbE2CHsBo56c4H",
  "key36": "3wKmLGGjkGZF7u9FJozLYn3P4riebfYKLDMkdWDfzmkDFBt3fn1C1ttGXcxhjUWhEUqfGwetsxjXg9LrMAmH6m8y",
  "key37": "4WstddSB1kdRmXJ6tfppGxxXxJweYeHWZyJerU749VeVufeC9QembWVu2Kuvji6aTpJpQq6mWshvg4s4gs6u9yTn",
  "key38": "tLg4iwF8Sx99n1zosVkzTHboF9j5ktRssLCwUWvZoovNfHbinTiPn7F2nVPruJdASnb1EMQ5NbeZBa2ag8sBuwB",
  "key39": "5BdK19rju5vCGygz7xz3zZ1LCgx3vHkBjmPyuH6YkaRpCazaQaove5cEE6jZueBjAzp1iFd4ZuygY6e8t7cvjNZh",
  "key40": "df9AfM4zoXRe5c3hqWhoNhijmHwH45vb66LjDyRXGX5iqRUa66oeCq6ehQqxY3p9RPnBbbEGNsTBYin195ZBiB7",
  "key41": "4eeyTHQk6UNe4noRZWbSxfE4EHZ145n2gwfEiyMXUXb4KBBnYkozaeJv4N9vc47sVzzbVkRwkozV7zaTWjU6bDKE",
  "key42": "4KsR7UrYhr2jvvaNYJonVGdoFCqyUYNirsGgeP1DyFGKxVyAE5daefBuwE9jWGJq8Q7QdqeLKxpqvDYniHPq2q97",
  "key43": "2mwJvvFHzEUGf8c8Vhp8T2FJ4gAYffMBdWbExHtyCaFWebq8HRTRi3mNVSd6cFfsS2BKLq3KLJxFG4QXVVVVxq6u"
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
