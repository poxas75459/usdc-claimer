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
    "2mFUWY6VKby9V34zgSAh8Zj6ssSyxf4RP9fAEoGGqsamidht5bo6KaFEMwEBPnFrLU1jcsWgNM19fG3UvdV2P1Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMRPyryNEaw7MqEXrkgUhto8jAh819mM3ainnDAiBPTp3H7m6GXUfoapHE9EZ82x9MspkoHoVhh826kamQLiwcs",
  "key1": "3NJG6XH2qB1huszpcqUhkgJEspYTcdRU6GNnVghqWk9eGkZKdxjkybkWsx4cRVWrwDmGE6ARtsdCbB8UuUgD3ygZ",
  "key2": "4VtBsSqrAWTtuXMiVTpLu8isTSADV8UxpsgFeS3Y4pymgxU549CKZ2ohY1ZDb2XqC7k2M1NDESTd43ghJhm7rCRr",
  "key3": "2uBBvwtiomSELpf95QW65a6NqKrf5QQjBtNFQtd32BZdg5P7Y6SBV47Mc8nLhr7X9z2tAntL4JRuUcYd35KtNwSj",
  "key4": "4isvXCoJ2pQnYDeCBx9KPXDz765WmcLXtN4qUmjJEP4Rt1zVGcCtmUPu4E9yN8aLmYAcsxHNrDkETZQUVZPTzySt",
  "key5": "5im9Ec2Y8Eo8Bvzftjbv5xW7G4kroxuKYHqxUGTKacEtemQvy2HeF8PDtdJk6AUCEjxpzEBx1wSmZk9fK7ZGCsfs",
  "key6": "3GupLhULymaGMm3NSkkKVRJkPqeBrcH8Vkh1RUMCEozPAhWNBJJ3GrqNBB192bhNWBkHrCPK11af3UuKqNEHb1kw",
  "key7": "gNDmWmthTA7QWZCt8aqUzXDtDK1EcLeqLmr147GSKFM4Dgxqc7ZCbu1qitwCtmamGmELCc9TwEogLo2hwVDJ2WT",
  "key8": "3knAs7gbb1TxsNGgFd14eXBt8DmC5eU6sfcqqanHavSrhLEmtjdnNSoYUKxkiUZs3isQkyzrtgPbVJyA479F6woZ",
  "key9": "4oASBYc7tNkCaQpMZpcRyVuv8spRch5QftAD5pMvZdYpjQutyAhE1tT5nNGwRYBZeF98Ltww4bWdzCemTdKAkKRh",
  "key10": "3NgexeagqoejPkEqktd3tkSQXXWQSApk64cpFDt3R6kn7NzCnWTs67xj5zwUNGP111jPKcyupu1zTg95QqhxDKRs",
  "key11": "3QgCW4cUzrC17wwKMaecarfDbXnvMBrqP6qybomRJrXm3KzBTDfRPwcjaRt6peDu9CTfDDycUbLGPGvfN9R622P8",
  "key12": "2zgjanMxNQNHh9K1HyVo7GnCeKGWWntyuEdZrU3h43kJnF9cjxPaAkGXyurF6dDKCMMQ7bRPLJHDetpUsWjESZmx",
  "key13": "4BKBS6WtFvzz6QsXuWvB3e4hPC4UKxWmmRu5SQhgUe461SqXJ3qcbM8PHad1UXuzM6Dj3G8fpHfJ7NwTBW6LJWq2",
  "key14": "3FmoNYC4GucwSRxLFZDga1YVWpNLPBtV4WCvbXD65JxHnFB285CeBtDdMpXRrdW2yMUAw2Q5XZ59yTf7xxaDPVSn",
  "key15": "2AvreRxTZvrFgb5CxQ4ojjr3CWUBmPUTBjMNpg23UGZ6ow2Vkzf2PinMyEmzezqJUGsMzjHXfHkc5ExwiWS9cpnu",
  "key16": "4x1o1a1oNRgARvJN5Htj1F5NN2xE9LVGSGcTdWV3G8oq4QkMGREKjkL9iWzPLkjhsZuDpN59sMU96J4Uv731zBHT",
  "key17": "4CSGAC6sLrqdqnCTDFkVvaE6aDWksxfDjxQgxnMVE7Ts8d1DfhMc71CKC1iVbMNBJ9cjZR8zBDB2DhpPrGhaYYNN",
  "key18": "34GDzsZ43w6QRwPc879M96qtUCs6ttbUy1vMYU25oEBeBoee4aL95zW89QSfo4ouU2a3KGwdvqBqCAtztrVLADDa",
  "key19": "3xVDQa9WfqJQkTaHy1C1UZ7ZQ4XqGxMKYQjmD6vBdJc7Ex9aYaYuNjzLkM4VfTR66yRWpEZL4BEFGh4A1LzRSfTz",
  "key20": "5vjbk77Yepv46ynNmbiU74wZPmEbSc8BQEE3f6BSwgqakBueM3VyZ4LLDCiNuqerAwAAsbUudPoF6exNrnFKvK2s",
  "key21": "FT3nBBCsxndJS7rQKmpqhQmCoK1A1uuvWvZ8ezPpnGUoXdRtpSvAjY9jwALn3XQPmv2wNBNSu8f7hhQWebmjUir",
  "key22": "2iDFpfvf36UHKdYBS3ep26tK3cSXubR8USdyKAzF6r37cZXR9TViaKSADmZYg6zcGr79zDf5NwmUdkc5NeaDqtb6",
  "key23": "3PFEo3HKwcMNBLDfKNBNSQnGZ4ofZgeVZ286VPoGaMNcVe6LvbmQ3UhcgaXP1a2z76QttMccu3Zi2yE96zRwwEWo",
  "key24": "499H3kAPLDDVm9AG7VDfHaEyw8Uq26Gytg1Zpd7Sik6o4L9Q9QTgNoJYxJuZvtG2s6cWnxJBjQmvw7QMqeApKRLU",
  "key25": "5q6iGDDw3eWncMos4qRFoEX4iXmnhDPLUqUmEkebzAT2kuRzwBSdQov1BvLaTsApcHTVKqsLeWUKg9WF9WY6LESF",
  "key26": "2JwXL5xPbVCMU4yva83Gm4cq2EgYTbWZpLvXQrP4h7i6RxRQMQhWxe1hykZZS235VqpGUDTnntRVgc1XBiv7xgMD",
  "key27": "538FCBfF8J4GbCwAEpmb3fY7LhQzyLpiVFwgS51kGEpJXKBKF8qogPud4yNb5yu9QkcnhHjgUPAPxXsJuv1k7sfj",
  "key28": "4TLeFmhrveAi9jnbSPx6UFWhhs3dg6vW5qfcnrohU5kNyJFJ8mvXdr8pDDViv2zXeVD52GPiLaTBtmi97kbtJDgc",
  "key29": "2htL5X2ujX6QFePHFyLCAU6otUvqpQSV1acVcwAygdRASMe2P6szYVXDESGTeRsGfVGaSN1nqEbDYgbyxz2izdmY",
  "key30": "53sLochNY472FrgCzQQAVhVmqbavDZRhMdYjM3S1LFtc9HAXYTTDW62nhSV9SMMAFCbZdYfAJWCNQ9camgXCxwME",
  "key31": "4aiphsqgCpb6eugKesbQQw99KimBxsMbAn4Q9rz2jSa7J9aM9guX6o9vFA9sHe94GbY4MaknKKp34mvbkJH15SnV",
  "key32": "2ba36JhkYFGt4uxDWVCq7sJtwynzNTbY4MFixYh9MYyNijvZg4zqyX547gdAY4dfKgVH2mNfRyvTin9xCPaMAVgf",
  "key33": "43W6cQJsSvRxvnEgUgK9rUY28S3HrmSEXkK2dFjEsdJqD5iU9uuRtTvbt8ZaJQbbXWNbTbuT98ymmvr24aY4tvvq",
  "key34": "3AkxuysCiAkSnwd44usqZxc37d3dMMRT2sNbXZYTpyARtiNNm5BUZqoFWDiGxJcwYeTVScArZKXJxU6CkRk1KyYb",
  "key35": "3aCbFrTmiFyzjQojbjyBpnqEcHFTxCZMUuE5cjjscpHDNhGM3csHhTriUEzEKXXryrSyUkKQLVAXSf24BTr8VGhw",
  "key36": "2VS4jCLzHFzf6ZJpnnLVsy1RCbHim2V6QoTv5jx6VFpa5jMJ7MqUox6SQe7GMohQT7N9zY97Bu6Eap4t7PWAUoKR",
  "key37": "4XS5jByhrNjWkiDBxGCUWRoMzNkC1KkoPcNVy8MB7AEYc2P6bP2fovpGMqp2e21eHhQvwigB3nk5QFsa5RwR9Zuf",
  "key38": "4yJLG4ZxQo6LZ6JcDfPh8Te3wQBxyPvy7XgTASrcQvLVJMgrqXTuWGjVeUHAq3NkoVwG5Jiqh3gLytSjjenvWb8W",
  "key39": "ncm2AiqbSuZuaWShbNr3wBVMqteJ5wBsWmMgcgyXJvWj6P8aqi8MT5d16C7pBYzoLqtPxRBTMW5eWWM2Ah1DUKU",
  "key40": "hvRwq5maH8jvf8xcc3C64dx4as7TiuHrAtth9j7CcoewVZwKSaHQcqGvKL4gyAjqBLVtC4GiYFsyu6yuyvC8dti",
  "key41": "2ito3Wp8QwgMkHKtDYx18oRdTi161BEKsHo55uieDKCduXhTkTKtVkUvDzPjbcHSAdeyBXaGxJAtTBcXqL6w8mUx",
  "key42": "1zNXHpxqFJDmMfUb19c1g1MMmuzWUzUpRYLiVGj57eD7D6L2PJ36BTVH5Af9dLDmiZNYoLT1nhSAEkr8LbJKhHr"
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
