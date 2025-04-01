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
    "61YrTucKWYySkuJRuX8b8SnCFAZEiEttnHJ1wUNvCRNcaByqjkEKeePftpPRR35p4wPHnwvYZhqXBMETuRrXGmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YPFruYjN2socDLmGjWLoXdunx91Qkr38QNYyLBucNUE1iPTAnbj63Nr7pexXCzk7QsYb6w9hdepc1NVKYptiU3Q",
  "key1": "224He1qPowmBJi3LzQ2XFNDyB7XEw6yqq1sbLfwNULnjBWxc8LkwQvHsr79GPtfWCaJeysd1CHAY1ERRHFo9sq9i",
  "key2": "41fTRLJ4prcGXvgYNqudPZonm5cwnDKrdZ8winanXm1xKAfJV3MP2CKcRz7cRUHkiezCh5smN8uDL5RZ51vz7oW7",
  "key3": "Ef2hvrqx89iRfCug27Qgogx8aEC9DhcBRCRzSqcM8PVRVHQWGf4zqMDAXrKZeNdMZjWyPQXfAr1g6SNDoS7GyM6",
  "key4": "47G8yw3PgpTF84vvT2uAWjkHATNvu4HAG2kqx7M9ky2MnzeGBZ193kcsUho9sSPLavmjCQmCH7n921Hu4xsYqZ2U",
  "key5": "rqgzEQ2UNb6ZEFd1qhcXZznWvEbgXB12CkvEHZVx3JqK8oXyhrt4K5DayDYitzBHjJomaM5hRQsxq2LPr7Vxx1N",
  "key6": "SZ1UMSKf95723WzqjQvVzq9L3FM5egAYSsoPL4WXgp1LFd4YjqWMcDywortrVD9xYUBkEBvsQeQa4Z9rG8QoKcZ",
  "key7": "4Pa6U1jABJsBwNi3iWn7M1Uwuu4u8N6dyXqDqKEmZEPcXM9qayQmFUh57iSMYEyqUiVTfd4WAc3agsn1ZKUa4SRd",
  "key8": "4VjMpkm4BT56Trg5C7DTKqLzArJ32DqVkvtotVTzffPWmfuNYa1ChnHGMFoAEjGXi5jBKyJaJSaw6eCMszJzrWG2",
  "key9": "5bBnMEw4hXNQeZz6iqwB1XmK6MKRH3XfSPT5X1aDEtzYHSWf54VGPbhUVmf4mPJub3Db1ibafZuL8kyUfZTEYTBk",
  "key10": "4PV73Drr7sqvUTNgr3wiV8GLwN1F3TF8oseB9sTCwRPLXhwR8VTxCzsqBbsrffkBhsNXFkESJRA8PP6EkVK8R7ve",
  "key11": "4R7vw2JpBvo1j4nE37ukpRnJuLqWCg8m12NbMmcUeJgPzSYynyDTFJ2FKoeQCZmSaQycehmJZek4Z2wp2BYfrfJ2",
  "key12": "BkanT1UqUQJHgPoqgUw5kA7xyvGJEzyT3JRom8uCdTVo5GqyfEwPMXgeawy3P7mMJrbAMXfYsF8fZh4oiZDfMso",
  "key13": "2YhvyAe8HYQcDQLaEpy8oWJUCu1rus6NmNjBZmR6ckrkCnKCGem1AqmEiNDH8jMrRnhh3StvD5wU94c8foTKtLn8",
  "key14": "3iSCheo4wt6jSkHW715v6Fjfd7Mxpbd9qpMFLL7gsyPt7ftxYHnQ465YTFRFEUbCFVLV9rRnx9eqy2Qd4DYtxExx",
  "key15": "2bA6LcZ5xTSaK5uWgGBKdNpJiTpMyqQRvRxbw52eVmAGv8hB27tpwmA2JLGyZiMYL89vkHXYcCHMP3me88owdyJ9",
  "key16": "4XiCHqyiUCZyxfvYHiZGxfNKJJbGKUQjAZftbJmfuYGKDyGitBMbn9fXjy2T58TkQmRd57MpWjqj4WEqUzrZpqT1",
  "key17": "4TJnWy7A1tCZnZf5v4wVMaXnzJbyERo6CAFhWX1TbYi92cZXq7XCpdRMGMU6zU5EmN63xMWfzkQq9VYdrRnpZ79Y",
  "key18": "2F2SZkfW7HCwmmAipSA8353bAT8HgN3dgdZ8V85SbcmHGE2evB6ZWmnJPEPJ8K5S5iBKnjFz96AnsimgH9Ap7qdF",
  "key19": "2MNyicfERatZC7bQnPKPUFRz2MTUdpjmwRW6HWPTt2G3FKwwbGpQFCEFGurvjXdWmg6hSeWykAD3Lxyam3mYaxcF",
  "key20": "3sVrsrnJwvQw7ja9stg9YiwpjJUMHyaPwhV3g1gdbaa2SCGqG3khS9Mo8DCwax3Ewf5hN9GczLizVKfiLavARTbQ",
  "key21": "5X6wwZm4iLER6bWJpiiLaxbw51uHjmWmpiCN9HpxV7mqbfFEgaLihgWj4DujRKGu9fbwPvkDLfYApuhpCAa8gmMs",
  "key22": "4XX2rM4t2taBsnJcz2kQFFEAxuNuJNrSLX5ZKRjFha1XSpS9L9b2nsnzGsbuauirV9RLnCwiqZGzUbKJ9YLnMK89",
  "key23": "3LqkKGLsvYe1En5fUqWoeggAAdJJL9qyCQ3sLjzsV1shLQyiKLHt8VByQxTkY6kEnAoP2KWkJqZXhGcqAhe383qA",
  "key24": "5vkjkLscpzeVk342V4Sz81HpcmvV6rdpZcBPS5gB3HrBKx9K3QVouEYXacU6dBU3xSmrQ4T774uFpq5iaEAoJMef",
  "key25": "5ngqGfS59tRzvk5rWnejBkGYN59j9qx2y5JbumTQ7QCvzg7FqwDHy3nNHzqc7G5GxrnXdhghXjFVaCmXG4MwYkvm",
  "key26": "4WGKjTHFjRgMmZ7kpyWdGKwnPb8bZ48S4YiY5Y7FwwQjgBNCj4r7bFPtgjVC7cWAeVyATkfJD8A2oVwAf6ZGdyMC",
  "key27": "5eGh3APLproaVmEC2Xp9r4Xq1cvZUyyf61nZY9h8A5nNzVcZGAQmmSDpsMaiwCYp1w58cHoYs9zhh21H1C6YQxYG",
  "key28": "2Td3dp3pVN8jFzU177LLzydsU8M8TZiGCehtNM4qDpUgkjC4pBP93V4EcsaAesyMfDzvAsk2SjLBevobCc8rf8sh",
  "key29": "2DTbCi8WazsHxonn55wvWpipK8xffSvhVmWDnsAk9u6ot636GG5ukUBuEzhiausamgRAwrA43Yv485JcvfcaRVXK",
  "key30": "56Xu5KRTfiD74iLbRcLkuyw3Kf1ENMmRHJxEs1Pi5wbtDoLvyTMDq9KmGSxaDXJEyRsrWatG5VAxthPwtUU9Ngxr",
  "key31": "5ZW7j77eR2Ytma3YTp1KBcKK2DtGNnUSdbkgKhBLv664TG5KKVHCxQKdUjwksNdh5vGYu6FRKnjA1SWfEKiBZbsv",
  "key32": "5oHspA4CQVxpFjCnEgRCJN78Gj4s6STW6MHXoNb24rYDNRpw9L7sEBqJeCzxPpqmjr538uv4YRze2WYxzg2UmGoT",
  "key33": "4UbZpWGMdh4LdDpmPwwAEDMxPtQVJs6kKsMAQXfGSNj9TSZUkLrWqtggTaFLaz4DSqyEdpwW3QSG88TMuwc1vTKx",
  "key34": "2F2kYutcoM7c1bj3TCToAdtf4jtPyRZJnrdCvmuJMf9UjtYodjxFxzpTfq4nmyNH2wNq7UsuVfmFNob2dXUjE64s",
  "key35": "1kkdhmM1xD4eystY3RJMUrwGad2SmwZ4WhNRbouS5Bjj4EF5UemBVhvWcJ41F9pE56eipuwDg1ghytkSarHx1ta",
  "key36": "2g6NEa3ruoXUywpcY8WWduu6Hb4HH9CCBTB7ZmzyYhemgXF3jb8XeuFrFtPcRFooNZTNF9VXjB1SwMU8eQedGfa",
  "key37": "rgNpJMHEnEXNRpG34QA81dgKcJx2bU9Y6HTkJwD5nT9SH74XetBvvf16ajnpf2bowAs6bcwUKix1YBLZtTLDmDm",
  "key38": "5LJKeyUuwsJ314pL44Fq5g2DJHLxdwqKC1NAhYqo19Ysd1FyMArVaAszere2sSBumsmvY2KCSkdwoqEAQR7zYjPQ",
  "key39": "3GMiSuk2mzLoXV5pLgHDf5PPUunzdcyqz8tLASe4G1mk97gNRxMMXYa2LeTqNTJAhuBhfrf9pikW97Xfbn3TcLCc",
  "key40": "4FYhDpW88moQg8yLkhZ9BuV5URT3Uk46pURT4DSvAt9XkeVRF9eMdoCQp13BVrihZYdquSXewecc4KLedF5s6LVX",
  "key41": "dwRfRrQLGzffBPN1iphME6nbYabETp63Wrwzi2mD3f8XiWnyxR65FobWxC5QQscjtoA3P7zNY1GECZVRVCMDBVR",
  "key42": "3d99Ye32a5q9TWwy4o77Q94EF9XXwkKLBCXiADuoQnsfmA3cEY5T5kmSGLdi2MhwjUghNudELhyLZQ1bMqnZzEgU",
  "key43": "ifYkECkpyTMJvzZ9rSJzA8XWXeK5rs7jSfDX2keVmZEhW5bkcQiizMkAdRUE6J4zzw6ehV3kPhhP1HrMhS32Kxb",
  "key44": "4JDhCGEzpBqNtcDfiLM83RpC2P7uPVMxmWyNSJjDpgwsqPj7gLeNnFQP3ZNADwwt7ykSGHHsyJN4J6iPMsvAddpE",
  "key45": "5QePSNrXSUecyCsMWLeZuWwVw7T5XRGMu9BY4Z8zjv79iVXaJF98HSNUHjigKsLmiyV4pNc6fqbtMMcSQG3Wsidd"
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
