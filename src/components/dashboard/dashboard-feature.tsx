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
    "7vsYHhhH2U7kuJ7P9xkraFFsMEvTnHdrDyjVbTHKeFAjPJUbSajdmsTbZb2XSN8Na6UstLDYNiCSAT1jBUVu4AA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyaCTPSBg97Em7A3Az5By31CRhYvjqXQaJ2gaSZVrFRy3KBocgn5PQ5L5ok5zCNWn5jBDfAVn6dCdb3Mj4Jxvcp",
  "key1": "3MLqiAa7NKYiJyUCpcqK83Vy5TL8U7JtsaGLLSEKN9oEZhBe2nWW2gvr5K2Y8XJWQKDGjRobnMCyV2HywHVWHq6T",
  "key2": "4mKxVqDeuDu4PWPBi1vc6iJMpUq86rhbeWnLuPz2jdirGjRah6Lu6p1c9UyfJBi661RTK5R2wSoh8R2D6WPjdkDx",
  "key3": "2qx9fffWtA7fxtQbrmVyBt2eQkVARLcLbVsxXJTQv29vmd7gCwSJF5vv4hLGmna7xfzL6s3ZTgE3a3k8N1kVVUHR",
  "key4": "2wat63cFzzTCJz41aK46HFKeRA8m4vLHS9PnTrS3GBwdSiGCphY35RPcuyHJPnzuDcis87jM2Jgv77Rj5Gu2QhNa",
  "key5": "NPJtS7bryH3MCLwdwfJ6ouzxMcEAVRJWFtmKQzAfHxwcHQDxZneCJwMtagWc7kTUY67sydxRYpbS8TxfaPk7qLZ",
  "key6": "ZQVhNNCaAWrQpiBHo2MdXA7VQpA8gNebDpSMQxFiMZq6gQfkSTcBn4yLjd2PaHfYrBCvkPTbZJ2to6XHRQy6G2g",
  "key7": "4RNDPWWcuvkfYhWiribxtAkatYLRcVsmSiUPY6v7mp2xU1inMVGhaqbC31LSF34j1fiVAAveYTmWjddKUwyQtFUL",
  "key8": "4zbE1YBkNr9P8aHtwhF4HQgvbK879PudMHNiMXgBcPdY6bZpJs2Hs78Gyp6qpthdjBUFTDqJKsjV7TMffAK2fWpP",
  "key9": "4pcm2JkHfYCEJuzwC4MMyEvMKUxFWvXV7g63PQiRk1hc8LEdUoXjcqxKxETB1kSorkxfWKr4MK1nFjcRgyo3pZN5",
  "key10": "3CUwTq1GwKAeTsFJCTywqZQnHAWkbpmKjWK5HPU1gKybzgpqmY9DuW1pRV7RZFJnuVURKGowFbtcPoCARhsBaGTs",
  "key11": "2XqpmMoC17kbtwACoMHB5WW7vTFvkeT9iPfv6YUGTv5YVtHQGpssbvAA31DeT7ffVP5RU6vUpAWBk33BLj42nhVo",
  "key12": "2USLo9VFQYkKGZMX6eznDu4QEKR35aWkcV8ejd1cwUHTSLT7EiGMmTbia2zdeKVSfuWPEbnU866bd54YSMCsDfXM",
  "key13": "5r3cXvYLpyZTBx8ZEahJ9Teop6Qadtuhsp5cSmEMY9QyPwnaq8GbRsE9KusVRbWDc4xPmeitWrLs5TrAY9EhGydy",
  "key14": "3SN2gxvXQuvUmQpwWkaunR5tPbvME3eCu95rPDww4rePigMheLxawSQLpp3QVm7GLbekMvoE3qvRzMkih9ok7gDW",
  "key15": "2jy3kGShKGe493Fn8xPWpMQ4tH3fmZpaTk3FUQf1VZVs7uUCKnd9KNFVD2BfGzYYzrtPonKusAzWJ1fk7tJPAHp8",
  "key16": "2zinkqpPfFeXoe3akW1y6yEGk1NWa2xRnai9mKy9W2mZnQmE82JxuVHXrzHGyvq58qK4BtAP5utmnAnehHSDRB2W",
  "key17": "59vKvPLMfwoJmwiFE5FkC5mg1AU2EmrDcMA6VUKYV2zT6XgtUYom8nFmDPVrk1WhptFa4hRJSXGmVxpTh6JKgiUx",
  "key18": "2GDqnhUMEaJEtSuoRz6sj1RuBTWgiGWaFN2e13qLexTpgbgWHfa4v1syt5CPoPdrykzUtDaZRhDAXm7NipbaJ1Ez",
  "key19": "2rHcU4bwk5ke5XVJUjcQjHTfEkAvbwXz27w1xWyW7yJp5kYxKLW8vWPA365WHiGTAUHwQZ9XYUwTVkpsYcet9JhD",
  "key20": "4SoMkK49dzvJqsn9DP9HbjFVKXkWEu1jYc5z8dhdY16k9E6HNtWMc1Pvwbbtzb2nwtW3pQ7J1KMdLDwnzFb4e49d",
  "key21": "2KHtYF3tTsz6cazfvGRtmtCUHN3mY3CBn5paRt7jqUeCuA9mUxiqzqLndBJGjg1h7aucmgQy9D51rgfV3eud7fuA",
  "key22": "3dZW9wxU7vNMHsU3ejhajgsxsBwh5XstppjiuajGtTN35xrViNrLhWWAZerWRYnUgCaiT8f5752qXpsTxrjULtw1",
  "key23": "AxmTwiABCvjeR7wdUVgmpsuxFHU4Vncaq7E3vK51faLbafkjqeVYkzRUdtiXH4da8ZukmRToWZzdbYoYggypYvr",
  "key24": "2stS3rTxzvPum3tPp6Te7BSNCZcBMmjTV4FVmCn415T81Ua2Q4bpLB9Y3vnGHb6C8rsmSwJSiHxL6qxoT4kjunfs",
  "key25": "sPQGMkL8Jo9uLzZU1dSZZMB7thxvUiXxuUSjsZoJKZxbDwHE4Z5ovZVQhPQaBPpNrewbXq9UuVMwyrADzFqjkke",
  "key26": "54GThAE4PQ32Pxp4G4GPkqWsxB4Mx8LnkxKZKtwFQZTcy3p7nTvPKfrdUSNhNbEpiwdrPCgUTPw5x5QWZtCzxvFb",
  "key27": "uqAfif9CowP1oSoC51U7iNqTnvBnyze8MigSMFf1K6qyep7Zge2X5vHdMieWgw777t3RcHuhbSJxaEDukmJ7x4Z",
  "key28": "T7RheyRyX6VQexy2DTXSHE2S6tnuEoMf6XNdMUgZ9JXENuRFDPtxWHn3Z8ptzWEM9RAr177WVurznBpWqyyfaHC",
  "key29": "2QQBDgPdCs5xQVcKnKkotW1vH7C91Dud5dCEjnoYYgy42vsGTisF26sE3dzDRZhMKJ28VTATyjYuxUUazBA7qGNT",
  "key30": "5LwbhBKBsKQJrHnwZHnkNLypvbCRDgSHucnSJe8aRF2DMKRwA2UQD7XEKrE1YcELtrjiSe1jPGMKtN7NQFJ8Zs3v",
  "key31": "hymKtA13JjodHMwiCr4pc6MUvAFU6sMZaab6wZDLcgdnvJSyr69JiXjwg2vsRoCmVUCyUj6LMhHfzREFyvFUptD",
  "key32": "4h8bpVw6L3c746tWCyApGew95TfVAMv6tctyWnYZ2WihV4niDUi2SrM1FhVRhw35KrsBZ73FfKnHZuEo8Nyo46FP",
  "key33": "5hxSA2eTetroqduK3LVNVRw6uPMCoGeppzSvVMHrS5eSmEVUuNyrD2LPu35UDaEwne54aRFp8BVqGKGTy94pJ1vS",
  "key34": "5r8LVrxSV2h3Gf2ddT1V87M31D82DNM59Xj7qnmVoT6coGNjX1sYV3tGEot19sF5MXW4QTN8hqTCeshc6E4Eyu8Z",
  "key35": "N5YbX7zoACttbaKgCrDqqC5bFY4ZNmaz59vimxrUM9wqXtfMYPcBinkF6vwHSYnGMU565YqqifgvgjB6jK5JSZB",
  "key36": "39uXW1sSEEr8hu4DZmVVvXbTb5d4HhANK89ePRH5F1MznwUQ1S3JKZNFurj7Dk8vChCq3s38jxZh9HPWzYhgNRv1",
  "key37": "mEzdJ73NsGZC2FKgEkLUkPcQQLeJpC8aBamTRvPZbYCWxtFaLBADYcRMkfomJuCckLiKaXRMAVMqACWSV5r6v32",
  "key38": "3fw5DeQfPLosfvKQv5AKEg7Gz16U9JZvkRwaXQ7h36jdTjCWEXAoLENqw4DTdParfeiXWWwUQDfU2ywxiiyoodHU",
  "key39": "2YGpJeG84evVorCuPH1HF7uAcuBG5GYJk4oq3XDsWcMZAsmpFWYThtko3nqzaGxmCrdJsaRP1veSv3fJDV67SBP9",
  "key40": "5FPWHG9kUmoNeJGfdrhFpKAVQqpRer3UjHmgscThNLgXoPc6L6SsG5QHMq8BAUvrm65VyEypLbXTeJuhNLD9ZdVm",
  "key41": "64x56DtCps9FDd6iPtG2fyYQjCnWbmR9qTtBsQHdjgVpjmb4MmSU8isTDE69XVMiKSpUkY9kPxwEyeA6ui1VWffd",
  "key42": "4c8uUoM6H5bEMauofQEpjCsKrNtoh5vBhjQv9YWogqyVpAVVsacPfjTnpCDibYqEewKqb9X8LALBM6Hc3b7VEk3R",
  "key43": "34oHFT45MVTvTfzkYqSCsQsQjEAYYJvtsPBrUs4gfKCJqt8pDnL1xMUoLzo5GapwQvcX5vS3be1Z1eu3x1fsdyhX",
  "key44": "3av5PiXmeTUGwCLfNw6N8ueW9jTAoWtsbfMxrWNd6WFiWY5GH2Kvo8LQNVpwiCwJMygrmXbbftBj41nWyPocECqK",
  "key45": "GtkD5XCVV9mWome9V3LzvZq7bb7tCaw7TJFWzRmp3mw93DXopkRv8fshG16yZ1enEMgEtmX3ckafaYv31FM2B4D"
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
