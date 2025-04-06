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
    "2A9y6izhfco3wonopZ694EZobDT7dJjygn4m7tJg5r6jbDcTccJuSgg4vhpZp9scVBVMpjZ3XiqnuiDgizwP55yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWK5jC63imHawJfva8oh1q69jHa6r1kVLZ6hHvvos4Umg51n1FyPEvJqVZM4FVHHFHAZCdzrKgFbi5VRNigmUnA",
  "key1": "5FQzQSywn6jkGREbfvN71FszhpBAnGJNUdMJEcZ39M1NyG3Buf1r7KfZvbZpmV76BQfU41Ak8yYYKnNY5aKfVq2s",
  "key2": "5ybEqidbVVEUfVMzx42DitNK8xDGw6mB3ydQozWhPMdbPAEcpSvnc1vwBbNgUGKghDLcU9vhN664vxUU2jLjrAaJ",
  "key3": "5BV5symkcuwvS4QzEGavVjXA27KzSeUQ6mSwh9LShLPLU7E6FB4WDr1zaei2Si13Pn1wHQkchi7dLywDoxvNZktP",
  "key4": "2KT2jsEVjMzEjc9J8Pt4hbVZ8yYyTBcnyMW7PYypuBkKXS67EfuTU1U32jUpmp2n5oerEpEwuJgW5bd55J2eEzcq",
  "key5": "2KRfMpPDWiG3kzhRW45kkvyqUHrYquepempHFbZMeFZeYWJjjjewSkkacLo1X6gyTaEno8N9K5sCZuPR3eAjEH1k",
  "key6": "4Zn5qPnxYmPz21hFxDf1ZcHMd83pPvEV1m1PK6KZkBFR3yQX8QUsEqAttCkZRnHPXNUxbna56awMPtg5q6gU7Qmb",
  "key7": "3F2EqHWenbs25NVsXeSW6GT33HNubaRobq4HNxdvMkMzMFQnDFFfHHfxwkCxGr9MSvK1oFCAXKAFo9a1mv4Gru4y",
  "key8": "3zfgEQiXBMZa6gSe2vqQiS7JE1YknPf4JS2VUke884bTkYEKL8RSxLzrJZezwmB8a2KgYRPoiUQqqY7eNJxWmqRa",
  "key9": "5aSj7DdfZjKXQTzKBEMfLkrzKQgLZnpWJdDz9Q4kQiz8gQqhZhAaNgmk46n4pSf3n3RmTXiZszrDhJkM1UQSLGDa",
  "key10": "3rDwaruCKJUvjP69EjzMNJm6GDspfKUHVS2hBdi64c4VDRSXWPcXQJ1HAFV6FfXQR2WCMTkCWWHAEQhk9ZU4amqV",
  "key11": "WquFd2PsfvQN3148nDLab4yWhzW2R9cNaagm6pbwBQiwH1VX49a2AZBYzqMQmfgdhiNsPpPv17L6Jqq8ZaNYxXB",
  "key12": "5MtgpBwnGAkr8u777cMy8DBXnG2ST8CP3k11GZmsUqWtjLhQAcWCydBKpTDp4gPvnzR66JhRgWjW1F4iyZUwxhA",
  "key13": "fhSCWxWXVMH3Uc44hHBNmBFn2n3DpcHXNYSJBt896sgPwveXwPATRmUpA8oBNQHjnBpKrEFDjWCgS4DexeUyUYQ",
  "key14": "5sKHAmbFZMBqFNBqPr2KfypABCDWLXjpaMZ4d3LFB8Shg6o3Fe3t2gbvrEgYoJ3mhLnZRgKJPxVDRGmaeHCmgD89",
  "key15": "3ZghLmGycvP8aQbjPmR3ZFFm8DWG9Qqt9EMEfENdmLu5FvFQDTvC8fJhcpVrs5gZKdtpMgXrr25sgXSwUCdkvcgC",
  "key16": "2Xy6Bc4mA9TtiuSbrG8S6nTUbgBWx93Gt1gwAWkP3U5DbjtovVMFVeYThbNcLAEF1p6qN1s4X3Q5Rr5yAMMHTBYo",
  "key17": "5768A5XPF5YJw6LaViJN9KrLuHGsLKF5EfrHsN47JTpiJNe9BS5zV6FqTp3FDCkZmHBWz2XRM98cNgV6Fq7rfFJ3",
  "key18": "4VjYrDDYiCUo2bS8UZH1kRZMotEz8WCG63oeyRVsrZErRWtLpXnekbzX3EfAqeTYZhuQLBK6Y2GdiWPDxe9VSoXJ",
  "key19": "25LuVEPDt1fs9XdhSrYEB5gyGRL9G8Rsb512KjVrzszPk3B18QTXbJjiV4BBb5JVxRKNFJmfnQ2DXD6Yhgi6V97E",
  "key20": "4HLnRa1B6BqXPxh6eBVNn9c6CFGewYpXpuU5AmhuGfPsSdTf6jbSSSkTguWtJtwjrXAB11SCuNvd82RchPuxmfui",
  "key21": "3bTjZVZGpEpgex6NSBSc7BMuPBesk47AJVfWv7Kwb7XgRtgH7sPsWqt9Dw8ApT91qGGiNSqcG5BCUnvLSsMEgRzv",
  "key22": "yPezXoe5rubyH4uHk32J53Fw6xRKvZXP6vxtVDH5Gjyu876FFi3soweDF18Gv8mo8G3s4N6VJrbfDs8nza9BW2m",
  "key23": "5V1DcFdWWiZ3U8ocscRFLA2a4fqwS6TxjhUnkqHmALb2CUxBqF8FvSgJh21HtNRSsVdL36ZQLBW8sxURkkj24AAf",
  "key24": "416qoSZLdAWKqBPKjfts88skKh61FGkBb2DAK5FQ9Wj5T4fTBxjYEBN3bszB6efWPUPpjhkwtmmVZzNhredbQywV"
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
