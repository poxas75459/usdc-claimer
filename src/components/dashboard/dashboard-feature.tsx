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
    "5RpoioEcdgAj1UZvsPZyxe2Gs73dGdN32TDtE6jYrTGixChriDoWXu1HwSJGwzWzSmRdrJ8v36vLyfhjDaCmAvMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2VwBfnP1x16SRCZRupLdttKou79Ypg1UA1BGePsWMKEaWTCLyVy3M7GFA5RNTJD82nentfMBt1oMuHaqihHkvm",
  "key1": "1wmxSBpGiiALVR7DZh1yekPMRYStJpRz9ACNu5pFJAs432YNu3nSTupf6CbDwF2SqgQk7btWZv2HRFJbBbg6p9a",
  "key2": "2saexAR8QqZP2EcsK7tfx91DUCrfF5F1y5euDZzuQAAE8j8vSpXGJEbtuurpxRPmZivdreWh6TDvLVTwKD2WfEDN",
  "key3": "56YMgurkYwJfNNueCwMMydsettKUinqDGdEvLkNS6oU6X5a6uy7RByT7V3wGJAAsc7SX36P4MSocmraCtnzau7Jc",
  "key4": "5FkTxt51xXgY5bVKMNsvVYUzPC6zyoiANV6ZnRY7bXA9x88NdXQ6LekPaHf6sbGyEWfRQgJyYENvikafKfsju3sG",
  "key5": "2ee2SW3oC1Nh6muHzAQkj31qfvRzRyCVs8XyNbFbu5FWkgJ9P3PC88e5ufmzXB4neNE8vwD1BnUKfeWAgBaAbaXs",
  "key6": "36obEyKdBbYSCymq2CohxgYuGPuxDUcwTTAXVxHP9uETrfVC3tRGTbGL9pzWY7rPiwMQJ9zsASprMT952chTruFu",
  "key7": "62VsKe9fhdhxJodDCz4t7y4t6vFQBjJ88KmJBLeUjiZ7eRdkTq57iXiVrq8GDQT9irQ3f2jGm4bbtm1jTLidohXA",
  "key8": "4zGLnxyhxkoTt2GFHvbN1ZWoMts9BEzrvEZLrGAYit3BiHsDVaGFPAEuP8L6b6tLemubsjdmpad9dPwCnbughA8y",
  "key9": "4xaJgxVCzPuS3jzYaiEmDtaSSvPEgamRBxsZ2o6Sv4ynvcru6TcasenuPqSa9myMc8pCwnWT8LNiEHJzfCRpdHf6",
  "key10": "4NUdQ8UyQxshPRm2TK3ATwkcHYGxHev1evQamzqLYzkdDU9hTvrspNMUANCtAHWiSM6w19G5V9D33qMHmbPd4rD7",
  "key11": "5whwChtN5MUeVQXTrQZXP8mjBNmywsYq7H1RbYqTyf4MNcG39KaMUWAERFEbcoUD3VkjtBjdFyfKtu9yvwm6NWqv",
  "key12": "22b5nHVkdiSmG3LQWhAmbehFDqxGWUMsXpCYPeyZZzBa4hrMeihJgK2oBGc9HMbeKi4PkhYcmCjBYBrBcSns93wC",
  "key13": "2Xv9F7Z2ZByyLougmJgyFW3DhSJQdVcHnuTXu3oUkeB6cQpfBGAqwNjP73FMyuS1j41pBxznvUsfsDVwZP1bk9LR",
  "key14": "3hUCHVefDxKWYmX1bhzSjq3b4pDt71jmAegeApKBt8VBZjGiyJrhHoticEHmKTH1mwNKQfMBtyoNN3JbXAc6eUuV",
  "key15": "3P4MUPdWMR5yPWEsmp46Ku1R1Eea3WoR621LU1QW5XHGGKu3bZiBMf8ErzzzP64pF9FyqxYicQNzN5TncMXM7QsE",
  "key16": "3MVBPm4wpfQiikhTqSd6DEq9AyCHE52Ewtm9bbc6Ji3yAhAdDEg9NNWb4vXZLXFVQtby4RiLQ2EtGDPPLdQbtMEz",
  "key17": "2JMsk7kR27PEdyG735eXQzvx2GLFPdzmwdJLg6ARHN9ZexadhjuuQG7rsfw7bzedQbZ7JcajQHSTvTXRqtZRaocT",
  "key18": "59iU73wqXTAiFfssvsRBvSwrHb3a4tSPn5MbKbyGrF5mRzpBsA5fFnRuqCGLmwGYbHf1hCbSMwUXL4uPTotc1q8H",
  "key19": "2k2CVUDXkBSyhNx2Tw9myjdQTYixbvE2mgLrwN5vEiZyQVYZyYLx5Wx9W47UnZsSJG6EQFtrZAT3J4w3BgBRS3bX",
  "key20": "jxUNE2RZaYUXsRPjCeZYmhqosRavLNp3MWbEWHUSCyk7M5fKRGEPmaduGUtWQBFdzeEU4hRiuGmo2WCKaZqiJ1k",
  "key21": "23hyoGCXut7sbmiP7oZtdeoUUzHnfPEYg2uXh8scsqGs4rvUxgQ3nECF7SoaDeuZUnRQ2vvpBVTwxLEXZT6ai53U",
  "key22": "375ZiDwZwnA2Hw5MFC344wRe4S2TS7RKcsWjN4X1U5MteZBMA7BBxogUCtih4MV7fuoqAkBQDV6qhzqst3yuqtKN",
  "key23": "3QzSE1HvFXGxxUTGu75yMuZEE6BPov5YRActbijTMjJ7vJ1kQcexd5FPmqx7ZvDBCjMDcnKU258dpqJoQHDkzPFv",
  "key24": "42UPMWDVNoCxZr1exdaje553UdoSRfjgyssvyyBG1ndFinVwxt9WRnGPoMUYpWphH2oetrFuN8N7ZQxmgdGCVo3x",
  "key25": "4eDG57ivmmfKbZd9qjgJmYXveppUN7tDHJy18d8siD7BH3eh954UEfxLFs4Yd8L4LbeZACcSx4Rbh5Unf1EvpX1q",
  "key26": "2gGafJAYrAjzfXEYLAhm5xZmAnJSLdxK63jHHZaeE8yAz482RiAgJHjK2QKMpjVGiKNgDs1sC3DePE6dHKeyoHP6",
  "key27": "3TH5iyapZgYSnWQ6aPrTv1s4EdC9p1tvq7NNEDkRDaqwjrDpyg9WH9m1ph2q3aVqU9H2NCiWV4Nwa5CEY8ESRya8",
  "key28": "32whxdfwojDkVS1dZEPPTDp8FfR8UQEUHyK5zJy3QW4sXJV5vcHd5HNtZDMPPeuhm86YXHcWk6kDTK9HKPM7D899",
  "key29": "toQEuB9vT7KniL9uNMS8KQhyo6SpqtVmmkXqu5JrdA1Nbbny7WgoUJdhrEsLeHoFgpKAnmMpMm4bSAx1j1tgjwJ",
  "key30": "3famTK1FvMYRmop59P6W4JMswrK62dDsqF7FgZmVfKrjrPB6THeUrX4yChFxtprHRJJJ5s9dWieNPvWpAwq8Xctq",
  "key31": "3FMgwd652rutRBqMdM8uuV1zgpZQ8CEUSDmNXVdEf3jEGorT7X3FNLaGS4eMnTqAafCbwpmWVYGumkjmicfnm8qW",
  "key32": "J5hrTNwYtRymkMnhchUtE4hNbjC85mzGyHsAbmQM249JMC7MKPuLBGKWEturNzwJSg7huJRvdrecP23NL8BAQQi",
  "key33": "Ck6m8LFd2XJsdLmy4eGzRiqW7Dqd4DN477PCtBrXE5Pequ75eWYHwQMY8rEZuZWMdbxhtzSi7yBLNuzm8qhBJNS",
  "key34": "ZYkjPk1SJnuZhbv3KJ6etK4tnSaW4WRg7ohgA3TSWLhDc8TVbzXwKsaF8rbcRXPzkUTiKRTK5G6xDCexcXg7wUN",
  "key35": "3wr51mPsdGwE7hKsMR9x9CN7GMBmERzvSZghBXdt3RYfr8GA8X2DWyUYt3izsgXmFdwW6388G9poKHKXcERNc4Dr",
  "key36": "2trsATbkyst9muav6aTU8WuAgyphJF4vkvDorvE5BkqYhVsMDGkMgVFQLRisZbLVFZMXvepeaMSPmSSezJi1zEou",
  "key37": "XiSLEPqac1e7iWHHA6rtA4avEncrHCyCsCVZcydWZofXvo6BdFEYH2s2r9NbyenFcfa9xCmnZCwuSnwunZeQZzg",
  "key38": "3wF8aECED3243Dqn7XLo44zErdtasTmzitSQjNJ4gYAT4zDme153F5ETReJjyo2cswxPrsB1vckRYhZLvzF661aW",
  "key39": "5Lj1zvVHju7eZcBeuTaWf3biWW25KFJSu4CCjcVwPfejwVHjtvsQmC1Q5JizVK25LkVe1ci3yVxzFhispVGzftcn",
  "key40": "29cNdAnDY12XWxMcTTq1c7UdkozizzSMJhdKhKaQqqmGCN7VL3cDWCr6RFgo2q6bpi7Xgm4MP2BsD3ycdghNrvZS",
  "key41": "S8RXimiNCYAUkgk9XXDcWf3WbenSZW5CXDFg5w94BqFzgUwsWMMgZtfDSKttwEagJ5cUnxwTqM8L1ugVaasGnqe",
  "key42": "4X5tsBt2WjD4ND3YmN72pRZKk2gj1B1Bnhvdwvhip6TnwrbDNZn6qmECbrvDLTfUmoevZ2pevFn7ZQPhptW4uxEG",
  "key43": "2hMuEGMLFUVYHzVgXff7oGo5JiBJY6WqgDzMDMf3cqzHKzwEhVuN6jcE5MwMPgE6PmFSu3jtarBah1FNpeeNKNa9",
  "key44": "5TEntwkLU6ddfK1zwED6pDvJuW5ZR1W1SnKNg9HMbDhg7pJx2PRPhUDpYDXugC6J7f7qZotEzRVc2Ee6f6wfeZyv",
  "key45": "417w2TmbNSrcKSSinZaWoCSgNEzcyevg1r2Q3XuLCgNkhZPXJk7ZE6a31SW6izQJyPwLaf1DF1tcV6DLLFZJKVkZ",
  "key46": "dqa1aWEeVDfdrjdNquyPKWkWc5redPpR6KEGQKHZoPLkTeE1ehWV7ih99Rb8kwtacK2PsyyAB2RWejPPBVmXUCj",
  "key47": "5Lj7oRZspTUeBEqVNwYT8hV54XZyJhHv3YdtofU59fB3Xa9gY4Q7nQSbvqTEiAwGZ5oJtYM8nCj9oZeYK6s95ENN"
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
