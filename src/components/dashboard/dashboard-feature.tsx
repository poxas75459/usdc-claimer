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
    "59mAXYPkjro7EgCCDBDMHaUnjoZijGJ8pYKcXG8yUt7aCCbMnqRQkjhD5GfKxFnzzDa5RxMxQso8yefdQeBp8asa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4romnoMv4XooNhbkEePx4dmGaBrN9sCsxyF6x9fqJaVzKqTwZYTQDh7YQ1TLPJMomV4qLTaqxM1Vic2tjLnLfmZ1",
  "key1": "2Y7f1dP8Rw8EgGkg5rqssrkHgzrXjQUrsK6662trbGycSLh1ZSe5Ks1Qzy3waz9UxMeubG274FKVHtozo2JXP8xH",
  "key2": "5F1wErFHAHm1gEp3kPS33j4NWHgovw1tpv3PVVsqrnBSZvpSxHL2vys6XtcC5bKYkPw2P5F4sCB3JkhinoSQSNY",
  "key3": "26PMGgsEMEHTx5uCmbFnJYa89NgSKd5sjBJRmUEe9JknimbjtjpCRGUX8GpoWTJEWCV6BEhogPuowYsrDH8AuvgS",
  "key4": "2AvjvJxpchsJ1ZtLiQSoiSCEvqoMysD7tReRdoikxb2HtWrebMemvNv5ysr1vkUPuQj3fvPfSjosS5vm1YjK4wL",
  "key5": "4s925KzGXKBK3WXRckGfUUbPwr8KQLgH4UYRkJnyZDg6EA1vBDADWHWjLD94brkoozKhu5JS6opibNigffC1AB23",
  "key6": "fEHVzTp7wenrokkZSvRZgbShHr35Vm1wK5FahxAJZMFjjhswnv9RkACCfVJz7fRvEUm6XJC9Bta3TAZkEFHqdRV",
  "key7": "5Je2oP2ZdaeyRdr3DanhssUgwYEbLTZuatA5vR7u6iJ5RtJCdaC1kgxYJdLggyN9cRrotVy2XMuJh2xJBdbujNh5",
  "key8": "ktHMtsLtzqv6yDohyznm59sMZHdNdHBf1D7LZrKRtaaApcENdUS1GbH1J3gbTemg96ahm84uiVJVa2Y7GsRMy3u",
  "key9": "3eDCQhgPMNqfZeJSp98HoUHQ6zzzZNHekpmVhGT4Cji4Waog2WLNZCXns6WzatXtNMbRphQmAKov1D8QSSRnvbjS",
  "key10": "4QEiHBmM4nDYPBQ4ncedTM7FXnZMpfZuuSuVkqzeBqcRoyN5kJs4TH4DKc4LWGZUmoBsHNaTwT4BZnJaeQH6rMrW",
  "key11": "4BohCYCsK2x7TEyMp8gkPaBNHEigbshETaeKTFy8HFZXJFu7JYKsiVwC5bxoHcQTDWzCjHPxKVX9Vgws4iMZbvUy",
  "key12": "5XoynVbQTvrxFPykBDPj9HnErwz3kEQxZjSHTJQMPFH4p4mAxcnfK2ySm78LvY22Sy4RSLfHGQo94STCcpvjye8a",
  "key13": "3oCcbVFoxp7pTp5nmsyo6xsjq6ZNW7ywLsf82qar8d6tJC7rSBLtxb24tSEPJXrbNJEWajsAQwtVWrQ7B85qjANE",
  "key14": "32JE2nUDkcytMMPkDyKiEn3ZudL2p3JmSUQzfxPiijv2iSqn46WW3AMZLgRFTGL7MVRFdT7dWZRKZehRStJM89G5",
  "key15": "Z9hmmLvksED9twTr3m76aoVd8J2MLbFvF31CVziXUNMWQxiYev3AEaaxA7wRsWKCmFY7urpHPL8QYxyjvkToGfd",
  "key16": "P9Z8b55iw6ncwdWtfUvDmjVout1mXXSraudNzs6RFJFQVXBmvcoo55B838vt2vB8EdvNYxPGktZSFkcFvhqaoZu",
  "key17": "4sRaVRYatxinXceP5NVGWqb3oNwwL71RM3Ui2oQUmWGbuDK4o9pJLuqpbfWPVLXjRwtzPaNwej13JDJdvijvy11B",
  "key18": "2y23MitVq5uUUpww9r1Ak6hXQfGcmPswthDq4J5tbKqm16oAZ6hfdtCCqMy6ALuDjujxsCDabiDrDAR1zyyYZBdp",
  "key19": "aocRwPfw7NoJKDvv3UFP7vNcrJiCQDoMdkmJrbYg6EqT6XReUigXMf1JmMRxU3RKRdAFqFuTX4ndZT1jduKcn5b",
  "key20": "3hQA7BgfZosbqQfNMyfAxviBLZnQwy1UnLS6srS12iL7Fvy8zHLZVwakTWaXrmEfM4xbiuhSsDPtnwoZUf6NJwKt",
  "key21": "559JVmNeScGCiiDSYZzRUZa1guVYCjhsB6wvrzytNax5AugPawQqfUYDAFpBG1DQWinqr3n8H2ZNT2Hyx5JeADvB",
  "key22": "otNnKVuo9HcMJEBcy9nZ4k8tiNHcrhiiJL6PWhBjpsFhLp1oXurSnkYWsdLGG26NLUMvtqUDZZt9DQ39xMgLCfN",
  "key23": "28DfndtcafG6g6cXLfTygRCnH9oNruaizd3dC1xoKSWSoo9hyciZ7E1vqBNDA2zhxRtfM3mLMGktpeEnX1Nmhch4",
  "key24": "23WCK2BqUmBtPZdECXkgkb4YzjD3P3PcjXGh5oCKZ4zaD3x35jetL2Q1dB7di43FpHoM4WiDXLhKQ34RrFhgrizT",
  "key25": "4gmZXixyzwxwNrhwf9VFxfKKidYXqh7hpu36wLJ1G1tKjBehBPMfze5u6C7PQPQ2dd3bPEaGd7TVbshGurZCpTKj",
  "key26": "3ScjBurvZ5aU4kSbn3146yfYRqYkuAdzY8nZanTWVmN25dbynGdXBwuiFg7DHjBESLEiCn8Evj5k3Tx6cELxqdyj",
  "key27": "TFBAPWYHMxw85Z2CJ58RCWYPGYtuCBgnc1cmMPgHjGzJZfwmFSz1tBx8kqeDqsWcraS3fTQArzfAyHcYd9Z79i8",
  "key28": "47Bz7m1dEY2Cxf7RT52GNWnezznZc5k7XYPKjidRFhN6sgVRAs1j84o53Evmpqeqo4ZnSjCc6tcdpbTiF1tQaFQy",
  "key29": "2aNVudtCsSJxN9ZBHojv3Hjs47hRjN5NNMKGxYfGj5xnP9jKc8deyyXmaosoMG34F72RQUNpe7rwU68myUoJ71aC",
  "key30": "5SQXF2rCF2174kKhMPBchpBTc9EqVQShztvYGPBnwCgTHwPGKEH5SeqkGgAYmyTCQpnuhHhCV8pgMu8MnQ1vvwuX",
  "key31": "4NcdBtZB1QpTBv2JjYTyfPyHJ8TWYtc47vH2HALeNo7AtRW84peh7yRKG5X2ZZkxMN3pku8Ak9ZW1a4e3as9NZRf",
  "key32": "4v4GBmseCSNjoUHMgyb1VFHP5UBWy2WGoV5d4UhQpWS8yVPMTKg7QCzLwWVJcE7byMxCd9iiM5K8oVvtze8KfADD",
  "key33": "3u5uruGMNFbDziUamsAK5kxJaiz7PV4edJXookojLnWs94ps5SK9SuuiShEGuxscnibnoBGxFAcbV1dKPZombv5G",
  "key34": "14KeDZmTeNvBwT7aWVZqKm2UPSd6USGd7V149eULtuaWaSC4sm55DbTmoYFyC4ndq2wQNo64Y2AeYAMKNx7nrvC",
  "key35": "jTsbJRHtLwRbkduUyL1xT7dSm1UU6RdJY1p2g5SQTsCzjUfvkUuaZjT4WopxELR3N7XSuS4zne3Zk1RVp9xsomX",
  "key36": "5xzqz5dmicZM64TKjFST6Jvf1BxK278kNAab1M8a524Ft6TgpvtE9ijHfgGBmjP77WtuxgfvkzzAu22NmUcRwTFq",
  "key37": "2L2SzYpXsXa1ii6Z9EP71pUVXGwErwC3X63zmgenLmMwndBvno2Bh7apXhEzjEm7QkAExhPsT1ny3LHEB48QM1ka",
  "key38": "4qs4YwZfjtBZJcUv11e7CkADcsYDh96PtMhaNQxLUftGFmDrvRmqVUKsLXQx7E4kSCoWk8pLwHPohM3fZHhn6fCE",
  "key39": "4Ds1kPjbi7jQBfQG3aNLGsxwFvqNu8TfcpcDtGTXPZLy4dp9gSFfvzkzC7vw7VJaKTvuXQscF2XnmxppGk731Fma",
  "key40": "3k9qwWkTSkSRU1xuYv9NUaYLr6Bg48i5PHvhAFC4v9cyyRCfQqHU8wVnJXmHcCkni1nQVW9JHA7wGAs3QCgH3ysc",
  "key41": "UjoUVwzoLTAGW3FHhGwJWu3ixwAsbDshStFeQNt5pRsPxXxhsb7qExbtkwRtTBuCqwAgGw4dxL3dTjX5y2ufxxs",
  "key42": "4xCGKYnsGH9DgXNKnHrLBLPLbjGjv7NAmKfaz55XmgaUmVu7BsFxTHHF7MX5csEiWevVfDf7KerArXz2eg1cFu56",
  "key43": "4Gh1xnc9XQe7EK3ckA4aiAK6pYGk3qQfgrLBytPtcWscDgqzZzqHvjftJebJrfc7GpLT4Cxyq6z1zsM3FwstLmP1",
  "key44": "4CLEsRf22zEgsoL4DoquUMo9zmURFk1Vp5oHVvDtApADcShZtjaExc6PR9PLjfPJAdnhGzZhFr6wMjZxUxLHft8F"
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
