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
    "4izKddXRt7r7oSgTaUjkAntk96nxo4BcaMhuJgkgou8qeDDJPzoo5sKy6iivsEwuRWcFNn3m3FdLybjHfDyowif9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3camnypZqfXoQVgWk3uH2Kk8PVMfieevALWubp2PhjHR6EC9QMA9ADJpKE4TFeisYuuNjnBu562YWXgzCsR4bazZ",
  "key1": "4FghCNyJNArEKDkQxfWjE4WQfhRwmLM6Hx7LGSfEagxpDCLSaHneghetZTskE5ChNbTQQhnvyS4yJ32BEiuYwGai",
  "key2": "3yQhqRUMUukASdkpiPFKPxcqEohzkxHLyD2uyVH6Dd1hUuXTH9ohsKr384TBJfw1TdZBneNLmzoKFiucPWjZpXiB",
  "key3": "3mfZQzJuUfrhLqtZNbnmd5NVwD3Fs5w8brx57JxSr1bwC7XnGwfTBL9g6kz8tLMNYJaPbjEoRoevzLMWNDCt5Di2",
  "key4": "fvpUbgMYpm7snPCNk1L84nP6QiXF6w5Gi4EMuwcpC5JnMafYYuYcA7YJyMXXBNFCvoquaVAsFCdccoymQjobT5e",
  "key5": "54bQngbDnmhag9c5Y4SLp8LkaFSPfk44owUSBFf4JyUuEbavzWu7dN1hQD47AnFiuzvXFtXQsVUgJhYYys98h8q3",
  "key6": "3zCygvJckTXyVjMytSs9pkhaG7QBuZPpbh8361PzyHuTU726fBMVqj4jYUqD54ubWq3BJd6WJ5Nny1H7jFqf1mV4",
  "key7": "5VPXGjnAKELH8ozALoEMXSTSyV1ECkPTVRK9oK5mMhfhQU9FK8gziiNdEiQrhirziQCoQwHrpRJKnuZEAjjZvdcW",
  "key8": "3agL29sjsSGeg7jAHqWztDY834fkJZ7tQmRLd9aM8TvsX5wiN2vKozE4FoG1RYks5tUpoPcWzwCHu7WuB69GPZfM",
  "key9": "AEzkdBtaxkEDHiyimGEgvg6Vj5SUnGyZYG2e2U9LCgG2aykwDKRiBi27CS8Nj5dmTrvj9HxmCRwEsfrox15Crqm",
  "key10": "56Rkdn8SEQgMTSL1Vauoibt3xsDofZHCKWYRw6wum7hZDUdDj4L3FtmQECfXFmHkLYcqr1XjmevhwzhdRKD3xPwh",
  "key11": "3JHCFTpp4WikArVPmam7V5EaDWbcV9onADpUpPbcTnGGNdSvoTPvRtmdZyrjQtFwZk5wpGaZCkxYY5GWJjqLfxpU",
  "key12": "4WSU9fQBjwQHbiAgZxReLMFY2h2WJtpYqQRPa4ADJfkmcQXhcj763bTV1yAdLDF9MAN2KFwJPgLzGGtsH8Hdcps",
  "key13": "5Ue45RnRia2vxfGhkCE2tXfxbXmb6Sh7tvph4BJNbyfGoRE28jZNRMVWXArGS6ETV6QaATXYgY4LjQk3ahyabhLz",
  "key14": "4WooaBjzyQ74ZAg8k1zqPKfoansgfEVKKsrZToLxSTjvJsSkRRgBHJeJGSdyfczENLAYoo8BX1hUnWvNUgZuoq8L",
  "key15": "3Uiv1bx6dyi9cfFt9UKj9P2UZ3GCNvp7N9ats5iV4MBZGya2DHDpT6DHKpgykYznV6x4vwXhwdmGAWs2yDjeJTMt",
  "key16": "65fhDhZyJ5mEGqyLGWUtpCDis2cPchHzaziMFZXxaGZb5v4ud9hjQVW1Z2qknVPVTMvuWxZ9AVGrGXxFWDT9w8r1",
  "key17": "4nsaSohxuXrGSGPNvZrmph19gVGafMNBSZpmyrjRVtFq2SAWvsyAWV1eCscWUj38576q5Z2vefmLBsjLyzFigupd",
  "key18": "7ABFX3ySrCgMafwArEmgtp46GtQFEjt5QVWAgi5oTF4igDPCLUsxb5xLkn1oiCTjPws9kuV3LGH1qgok5SYULWx",
  "key19": "UpFNuVsw9eFGwNzApmM99wG6sx8Eqg2RHGR58firYMQ8xwmdMBbX56EXxLLxwfQgsqKcyghrKFXJFgCMZhwPoio",
  "key20": "47Bce6ARcz4n6uqDZvSF3xvART3bhy7eXcuKrmeUQaXi3FEV5iT7CNbfZNCLbEmXg7c3t9QvrhXDoSVimxNCVWgF",
  "key21": "5oC2poXcbAtXYcU6b6zWPDQ6BmFagtffBgwfmXJFAfzM7nd7B2UMYCUFoKhbTWb1XgUsQNe4Sb62qvskZbiQLW5g",
  "key22": "5Z2g9Er98RMhuvgioWN1kcAd5UbfigeZhHTzkZf4LBBT4JrSKE3aEe3qFxomU2wLYkaqa8xDhfF8U6dp9PHQsHfm",
  "key23": "58CsJQPUyfJHQVJyeiSgF8ukMXiHwJsmnqinDQQHzp2e1LAu6kb16Q8oiaPehDawD2BdzJ5SVBte1Pq1uC3H5uMF",
  "key24": "5BPqaCwycKjo28vp9wH8gKosVvco1ddq3nmEUC54myTqkp3NUH5xdaWNXkPFbkqB49QPTobaeTkYPuGLnNjMi5yX",
  "key25": "43EX2AMQnBhruxuUDpQrkPBxupkW38NLeWSVVAJ81GBun45ESwvAst8QSCRPKkQTqoXaQDgDwUTMeYHbLwooh257",
  "key26": "4ob98FaSQqt97XQCaqnLusSZaqBa4JH57QgbYVpCXBPm3nz8cJdc9Kph1X77EEJQwmsHqxjHLC1JMHYrkLdcL2cw",
  "key27": "4aKzib4k2ipPWqrbMEs2ZYvXAUiXApLAphVDdyiD2euHvFxj5CirwjEMtuyZaxpq4XmfDxFAczJ5GvcKX98geMNA",
  "key28": "5CgeS8w2FHVYtv3Qf1WrsEdxEbAxZn716YmyXdZoDgarUF4cCpgFrPkcurDQ7Whh9rnmYFpgVZivsyPhrpyHidu9",
  "key29": "63msDWhS6trpZ32KNb3Uvxuv1nvcP4VrbMm5AQRmGjCSJsjFknadUoayqZEk1KqVh9mSMZiXvbwAgu5BgDZDuUGE",
  "key30": "5EKwiLSHoBvVsD4FnU6SpXeXoMMdcdAP9wFTNVRBH9dn3AqPykCmdKm3uadNbmy7wiEucKYbfRGZaLX6xTZ56fNu",
  "key31": "3GL1s1CBbkYu3H9gWMUPD77JYb8CAs89jr5jfuMajHoRAza2qxehdjusNHEnxTDhpUeMAmpkc2JQd96Ni4EA3Jjb",
  "key32": "4pFQnAdU5XV6grtJz1L7fofzuLj6cwPDXgMwhWEsGfRNfvYM4LMHYwLbhcLtHrPaSXz38BCERU3rj8RTiRrGNXX8",
  "key33": "5ga1L6tUDfTRBHRBQQrug3UG5DgGsGe2cF38hRBiDhoB5bJnv4wDuUgnSCzh82qcBXcwmZAJuHzMaLn8WGdggCvL",
  "key34": "g7d1jqfSN1wY56tdvEknUAeJ7LLASKX8JmuZ1VkrQX3rQKCegm2pkBGHBTeAz2E2H2vJTawUac8Be8QFYRrPWvR",
  "key35": "3LRokv2zQqk2H5hXSDvJGiRUmDiRbGfs3x4SMT4xPGaR6uLT6fRbTAvG632MbdQXJV2SZajS2uZWQFtD2myKJCgS",
  "key36": "Um65L6JKH8JKKsTYUNd23qXLnMNYsJ5qmFy2h7c2LCoMYyWBot73K6gsbKswvHWihhxR7YLAG2nk2TBWavt4FNA",
  "key37": "4Zw17ZKN8VasEN2wKBXh2wxuEWPxE4CijtpKihopXCNrygFUBNFwyXggxQrpvQ1Yt61uVNQaaR5XtkQPnEGGYwMm",
  "key38": "5qQmqkKYKsQjHpF2XaTDFtQX9hKwgmT3pYGKWDdnQEPHa2NwaVHvTZ8FHq474dUSRhPjN8J8ftjpeFMf9ZDm8A6q",
  "key39": "3Wfz9azHS7X9yK4DAzDixQppK1MAiqnpqNTmzxPyVhjsyw6UG8avQL8fUhmNYkw8K5t1gcvPuC4WgXWAhz8Bnj7f",
  "key40": "24xdddP7HimP8dL2Yc1xG2D9G5b6rm3ZuE6RQ2D7vJtjyWRHZh8TXUJhuSqyYQZFsPHaSciZkH6bkVDgLGoGKzwj"
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
