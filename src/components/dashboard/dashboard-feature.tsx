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
    "tsndQkJjSHAcS1qtVDyQrzZA4jKnnozyDr8kNubVemdrS1wpQoXDWUmp1RiZJoNGKx3sSwTg2Wgb3RmRXR2iuz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dpgp8gSHBtYzAJ3xTuXfUrEbPrx8iFH7jVr7rBctLHiSkm6CEFhUvS6eUA4BGVJF4ragZDS5bxqk312qDwhogFK",
  "key1": "3MvmEnPydpRNc6HKnywm3NvYWJcvfuL3Putg3rjPzjXaREneXu7ntLS72nX9b3kZ7YFwN74XR7mwXMMkdhjFDG9N",
  "key2": "2ZkYE9mFyA4VutKir9smiSRX8ZTFfeokkjTmFya64FChSQzBC6onwSEVruAwtorrfwCFAsCLLA5H1CieCZBx6gCT",
  "key3": "49qLr6azLMnCZvUhpBu96AmokbkZh8hEF2gcUbhHLzvqVoR3G1Na5127p3qurQUtvQ34Wt7PBxYdkSe14rhiX48d",
  "key4": "8o9eDK1XM4PqE3FmHcrfHJEYuW3JfMJDYP13XTX2xU3KXgfwpriErmtoq4n1EWY8QeYFN44bB8Gh1LcX8bEfxMN",
  "key5": "2KvQ4nXnngQrRctkmJMTdNeBD1juree4aTEEmfaS2DCm9fnHYBQzZHoMNSa5seiqee8o52CCsDyuqwiNSYcRfVuu",
  "key6": "5Vx9JnTAWSecaPC1LrcRuv35U32Bkvz4ByLuQF8DJVvno9J6SVCVs1z2ESUoq656fT4WgSMPrawj9jmhwXHgAWDn",
  "key7": "31mZrF6iF1earQPYxEa38WCyvvtCV79CCnaXuHZngCJ39ct5eM4ww8rD6y4bLuBUmrK6tsvWC2SdoemqqZuVtDd3",
  "key8": "2RXJE8VX5ctiXYiwjoH6K5urE6XbktCh32rSSooZsxasE7kG2XQDkdFhS3dkUsiFS7BUBAmLAS853GFJqmScSh7G",
  "key9": "X8MXGnSGSu8H2VjP283RSMGq4xBt41pN4pZqPyidzRTDbN9bfBsQuHHpH6AXhoZCSfWwZQVrnXKHkHhh3Ehn6qm",
  "key10": "23jg4haoUFKfA6sF7QLfNzASNjP3j717rMrUR6fc8uDKohTazMRXz1kniNVz7h3oYqnRSC7Z6nNettd3bP8u1QjX",
  "key11": "5m1PGBszF8uWqhMR6vxwQ7Q2G9Dgm6oZuky2umFQBxuADr6z2fF7wFTHe8WmJxurARKjTcJXdW5WZ2A2GJHDtWgX",
  "key12": "5tTthCvo7TEt7f6kqPw9CyRcvsoXaXund5Mr1B3R4gmdHd1a4kvnpPKHYirv128kMz6HnzU4Hs33ZxHgF1bBdHjX",
  "key13": "5jJper1De2sr8WkCokznWGRrxDMKUjds2CgSEYPUJ8X6TDkx42UeJAJtCYrr6QGc17f7EvnPdEt24iDg624HGyK2",
  "key14": "3HEuoFgJGyiU7XRgVyPSTUR1zsziPJW64KJK86PxDJxhDXbmTL56CnoAHcvd2S3CF3k3J2xnDCHPPX5kmFPRoEq7",
  "key15": "4xjaP3ZT1DrH6G5A6XJoqQ2BoHrbLHqaxxb5Zan4gUkdB9mwUiwnbiNaPAVswNzg29rCscLLoguZKcttAjqSKNpw",
  "key16": "rz5cD7uBbAzwoHZ9PFVSJQoeD7MPwov1qubKSFWTvMCgvjxQsuyneZiRxrwUUPhjztGmmhcn9YFEv9RapJ18rwL",
  "key17": "47yEHppEBf5BWHEVmqnWcwDnRMBwxqsNy115mchRJGkdRQHFU5wbuuMgGwcreejLXHws6dSXKMQJKfsgVMVsEmDb",
  "key18": "5opVtNjePRzuXdt9WnK7DWLaHoz78fHZbCr7hw8oJR7fTByXVKUpfw8Uzjoh4uZwywTT9jC51xAxLskMZnET5aqX",
  "key19": "DdtJppXdzpDY1V4gMuf8NE4zP8teZUASUKmn6KZKQ2MFof8Nz8W779pPqxdWDBf7C65BDmtMAdCi1ZCs9EDCmsi",
  "key20": "57QFYh6eQ5P8dRufHfT8a6dPcgTNBf7krJxDP4YYN1SFeb81hnxGnS6YRXFU1kbWKM7YnXCHujNWH6xvocZfuDK1",
  "key21": "wsLoFsCwpZpg8te5Bho1LBcmU3PNCwN5DqWquMv2Yh27birG52gdWCx5u5FonqBTbhJM3kfHWb6J5byZXjCRxuY",
  "key22": "5Zx85bFXkXjZxcooahB16ZRtpyMmyViogGrTtEjNPbEPh3uhjptDNon8zaAGW1QMrprhsFaYwwVWFFdDQCCikrXq",
  "key23": "2EYiV2zmcqmNPAtVyw8goFFYQGJLcoKAifGuGCDZxGzLnjfDd4NUoMDqCw18oCYSYAu9wcZq2zu3JSGqWgJtXfuS",
  "key24": "2fphY5CggwHZdhyL3paip1eNaQR86uLk5GMcMJqrN7HsLqNWU1ZHvqnPXJYtYXzFfdbEZtpVodwnWjpCNB31f1LR",
  "key25": "zqXEpLUnvbPZk7w3LNg8S5Y7vrqAMVMsLo9Qzmwo9tx7QsxBB74eCfAR5F62cHUF5MNhnoeq9HNLYpeW7rFWEea",
  "key26": "66XvVf57k1BVvTxSarPmMB3xNw17jX8QSb1T3o5C7yMucEXciVwv2bp86bmFgo4vcEcsn58Ys8eP3vawrrrzm2Tm",
  "key27": "kNQqQFwYnjUpuKenc3SYzXeMPShn6xXgixQkSGCkYyN8HLymiTwd4uw23da7FkUm9u533xbMMxVXzME3QRQUv9e",
  "key28": "3aguMKSLhdGr1qwq3rkwVgPRDpqutD8uLdhcmfu52EEq5BbCDcDUsfEcUFBbeUdL9KiSqQ1fYGd2nbUAaF1E3xV1",
  "key29": "5psVvX6E2wAqv5r4VUzqBLaqe7zyBL8ttmYmKWcGcQqMNGupAc12V5WRRCxWYBHKcy72y1cCB9EimJNpp5Zx8Wjz",
  "key30": "2AoTDM2H19mhodUD3x8wKFjEcsVprs8BV98tKHum2wovCULitpoctTPtY2Pa3xqKRz2zvWhARxNtrATe63VAkwjy",
  "key31": "3nqa3qAbHRagBSWqG6zT6coWmKeg8iesEoFEDXEEtzhHWh1DjM1f4rD7cACsZniLoRL8KSUGBXNsCWPS3kavZHkg",
  "key32": "284vodcfvQE1esKBq3ZC37kVcRQLzaWk3vDrnFLSDcz5b1qoYyKeRANVTndQ3Geutxms8G87WKgxsnbHi2na75Qr",
  "key33": "4TcWEJpBo8cvWXvbaPZ8wGxD28DUgkt3YD57UMKYPuP4nxsaUVQjMoSWUW94dSpw57Fzkz4WxpupgK782YqQaGc8",
  "key34": "3Q8dqGMMdykj8LVBvdvmnhadLxTpbK1ekPSonhXpU89JcRrsJwwPwk47zL9EBpCbNMTtmpDb31VMkg94MBxyxkw2",
  "key35": "42WwcHjiHS38nrWt9wkgKFsXaEixExknwfTTAaVzvp2kQGpbN5yMvHaipvmzf7G8PQeRh9cak4cwGtTrPeoZNWNk",
  "key36": "wDZqGtUhZe16BiqmouV4wB1o3KkcAnkQvgGinzoDq5vyU6791HfhEQ5wnCj7GhKRxrwCxmmJNf8U8qJGf9qJAMD",
  "key37": "61YJ9Ps6x51mTGcfXtiGmtfZLgHcejv5ia6JU1y7BSTDjSuHXCkYVxw84qaVRiZd6FArNeimmm95U8dV4HiuDU2j",
  "key38": "EStZwjnGFKq1gFYu1HpRsLmtkZqERnKZLqXSTQ6gD12FwsSmrswCCDL4W2hPECg4aSw84Vu1KY5XZAeyw8Htqjh",
  "key39": "5co6pkgpkbtH1hutF2zerLejesPXjqh2E6TBagLzyq5QMtfEKTyNNBoGtPrK98WTpkAiEHDavjDmWxgN5DDtaoYT",
  "key40": "4yCbHz1SQyNShffVwDv5W6yrq5NhPTGdrUHHC6wioNvG7X7DnY3eX4gh5XKaQmouR3ksx452vYoNzVmPBTyx1csh",
  "key41": "2mktHttaJzfz9n2M6oR4qrascEZpgNkzy57Bm7nQHxmduFEJeBhJsuua28xpQu9vQxkS9JRD9yHWjMJSQ8FZciZ5",
  "key42": "3EpfjuYrZ9tucxYVWs4m4ariVqci25YoJNYsU1BNdNfqAMN1vmNBXj9nf8RAkRfr2HayVgW61c3bPkFZiGHmKQfd",
  "key43": "Jbmi7Bmqw8aaybxABruKt7Q5fHPY6cKw14i3jtpgcp6PkgpKrNTG5ahzM9mDXWRuyVxeNWLj7iBwcYTQxTFPacK",
  "key44": "4biJuKLfSoN32ryZcEnW3veUNSp3kNeZCA1mqLXoFSXkHuQvsa74K36acnmrDZ9rvV9HwRz5G74aMf1hrvyU9XSJ",
  "key45": "4qZkxeTaLzhDVyAmk9QCpe1cjtKtFqEwrBCrFqGKKJJLHw69BRXcEPN2dhDSGo6nD4fYJRNWXvwrmXFZpHEbHGRW",
  "key46": "5N6vCefFYn4yeUs7jAZrE9jwmAHpfaFJNCeRe6aKWpW3Rwsm7eN5qATLNY8W2pXXxgoiAwuYJ82Da1yTr4tTJeeH",
  "key47": "3rvVF5XTP5Cms7cpLaGoZF9Z2QUe43SVBCd6T2g8RGgAHUSzY1HwiwwVZdpjCsznya8SCcM6WPivLM93epAxt7ZF",
  "key48": "2QxkMHjdE5kQLh7cphgHDy8ZxKnN1yk245vvfcFrNegHv9PEiGoZPRHJrF4Uj5ff2j3aWiRLyAA3FRLqoaUFrgRL"
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
