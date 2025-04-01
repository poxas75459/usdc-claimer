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
    "5g3jk9KWmZa688co2u85nvEgd2xPniTnWFZJL5HiqgPVx2adSV3YHMMSNVthDCNAv4wf348T9VYD83joGoK9mKdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLw3uJCtrsqoW6rFAXw5MR6PQ5wGz9jcGA1iysyztcWT1Cwa48ku2FqdcGTsEX6SZvGksmyrGp1X8Q7EQP15xo8",
  "key1": "wD9asgTsPD2GPsaNJdEFJMdTovizuAc9dQoRTNh1qkpbxpGstCNkUYeY5eN1x668ESdmVso91HUQENi54VUqjJo",
  "key2": "5gFohMD5komD4fVaQjQyBVtkdQey4pW7xWaKzUwPfXi7wTfRayb5FgXg215jU2PxqhCyvt2X3cVwwxvuEJxu4Sev",
  "key3": "53PDkEg5jtfDEbvJBPSuECE24Ews6do8fRE9sH3q9ngCTTmXuSWkD49PRUbmyzNx1FSCyUnrBJ6sHeqoRcDVVBPM",
  "key4": "4MS7hyDkmNTXwKyLbVQMdXWFEq3yikbwAJsUx8SXcsz1sZZ6ghRiFcRWo5JQ9azCNQF9YJbp4GB7Wz41Tvi1DCnv",
  "key5": "318zY4TWjWrFTXERQSXb32hHuHAZSgPwFuiV3zhCn4EBVjqMMtggxYwYvhENuC5t6jDZE6dCqdFMooR7guuRasmu",
  "key6": "4c3qTuYyitfJjAmfzKehw488nFxWzCSnBuShXj8ufScVnqj2ueLoQiiwPEGbDKe7qY55MK2AWaqux1YRKxSSyWow",
  "key7": "64Bk4KvWWADocdotE2zAUUMWNHgzmihx75y4ZjtmvWPkUZU7dWJmdb6PeGM6eTgpWiM8YtYkAEDp5y4erbyaopCr",
  "key8": "44Bui4DqZxNC5FMMjaVFZJk5VQhFnh7wASF4E6FAVSzBxk83JoGmd7hcF9sYDU7rV2JQ6mQUuuTnkbJozVwE7EJV",
  "key9": "5dsmi7AR7JKgn8DNvMDMRnkovcpSCc9kkeV6GBLiswvJWB2s117t9otoPXP3d1oAGCUe8PqqpVFT1ti3TYovwAVt",
  "key10": "636X3Tsf17k4nyfe87PJ5LnMFeb4oApWAD5CzSi7AQtSEPb6NnYk6mV9VEhLKwXPM4D8qdAWJgBXJRSZkLr4Y8vm",
  "key11": "5fk3TUKzwxNqaqCEPfmL232AqycYmBESDKNCdchhgVktNTLzMoujfyChQT8s44UtvmubTDYzYyH1jedGeTcioGu6",
  "key12": "4K5idBhhRhsEVKPR9Rp2nMZ266oETz1VtYAf18Br7K2rnMbhyV51st4uTSxvmBJFUApcCoEYJzJGe11cgimjoNfE",
  "key13": "3GJPQ9ydsTisCSaC92PtF4zvjfrEvMH66MRjeqKMx2suT9SwMhWFEBVSAc45QRa33Ph4LVBzojFtn5dvBorLCSYX",
  "key14": "FmMsMKaAQRD11kCsda9V4TMgarhYaxdjnhCWeWQDLH3mqJDf5Mwd3tF4VgzfUawQVwTUHJzsD2DYCQ94pjtfLrf",
  "key15": "4qjzkuDmovWwSsBC5kpLKuS9ZnrhE8Yg2ptfgurtEbRWb7kPnM8TCMRrK9tLXU89cVFPmAju82pgLKgDRMXUdu8G",
  "key16": "W39rRsFCjE5i5PPCnRaambDirTbVBjScnxFDvQt9s7Z9JafVAVghTQG4i3UWjpKVtCfqRyg27tazXfrrBFa7XB4",
  "key17": "3TemLqNBwpkgPHZ48eFUgpF7rof1ofnh9owVrG74Emthy4Zict4pb7yqagavAVrSXY1KZvK487xWVqXJj1N8TfaD",
  "key18": "JYy2eNPHkRMDEBAtwbg3J2ttHWyKgzWvNB7m85bWpooBRRUSvKVySx2VqosmGVTFikZ6AENv1puQyk2HGxhyTwA",
  "key19": "wjK9cexJ6bEpaZjgTQmJe1HpC8sEBTSxni3LAXJAfc1EXsoz7VpFiSmtXAMQUq9X2tifgsxi69sQbfz32kPSxzD",
  "key20": "5hmxkDHmHwynSR5AUMBA8PBN2iQjMFufwFVQq2HwSV8hKQcBDxgF5FkMaytWrH31oQQuW1k4FnK7pLcqMT7QYYsp",
  "key21": "3JrRTdgHqJvc1uMBL1CsQNgHyw5chpJdma7Hpg83sD7fLzoL4md8TUpPveeEydx2gcsRYCjhGVG3mx5A3hMXYAXY",
  "key22": "5ucg6gQ9zY7DumcNCDGWsezR2EErymEgtVCTk92pAZJHw5MfmVA8VYKfXgRBuZnabeU8gHXm1ZMeZyQ5p6PUGeHS",
  "key23": "4gPZGu4FEniBwaKzaYA1pTFCW8y4aNmYDpn8w7RH2kdqr6fMHeH9bVc3XTPSEQydKS7FWi3h2E4FuSPT1Vsju3e1",
  "key24": "5rNSpoyvTByRpknhAPD1MREAehLUz7T6yix1TdEtwSmDxdpd3rfTndhcXw72cp9EEAJ4XMCjiad2SGKcsDhj8w4D",
  "key25": "hKZFksGShwF5emJx9TKrZyzeZCoFnaAZEu1E8jXYdHR26hQoQn78sUqt2euPKb9YN7N4x7Zjoapn7rz7ocjrsRG",
  "key26": "3ogVBudVWxPvHHjLG3Wpucs2iz9kCZUYhXK3ijraSvMzViS6nN3Rbw3BNfhHa5oXBrGyGvhPfvHADBJdRzKUM28v",
  "key27": "3ZyTW6vQDfF3b68A3sDsDbHFwREK7SkX5eTyGB7MozUs2qmXFYinScLisD9ZtHDHX1ByYtZRMSDPt7Pvhrs1pt8k",
  "key28": "2hUACBdKfgNPayj1Lfcry5gFSg5bRPurnAK8QW6RmD6S8Q9AAH1CCvk6AfTcqRyZ11dyjSWGBkTp7b1Zq8ZkiUY4",
  "key29": "3zA6VyYiKHPD8hTKLMV1LDGwyCeZUyw6ZiBU4aAwCwr32ReKR3Mib4BFHAEJu8Am9tta4C6dBoPSZmtR3GyfKxJv",
  "key30": "2guzngckUoeNCTMFSTxqqLwtHpsHeGGXZkrJQr1RkoV2JVaQiat69RqDkiSPXyrESDutytqsSVF4UCUb6kwvhM7B",
  "key31": "5qHQDyhRmTWkLLCQXLnpZcfN7zKKbuzinMn6RAU9b1iCAUWLykvqBDZoGs7W6K1KQovS3A8wMkbHQ5G8dwrStE4N",
  "key32": "8tthViHy7AKaySZe7vEpem9UwXTSxZY9jzAzWffADaq8FqFM3KzdoqLYMD8Unu2qjmVegWyTN28UbZ8gd2a5syx",
  "key33": "5T5LEQ3P1e6qh6Mdk26DAUuNqTJ7Hkhdt8GtnKNZqek4NJQ5FbqgCZNJWZQiT1dQ32pXD7maiSbzgtNaHhbXFXQd",
  "key34": "22L8dj5r8puUePB8RdqBrp8giqGm9FeWXbo45FsQQcuKqJELaKLDAvdjyAQZnrYVZUReiSu64rbJdW7y9PNoXoug",
  "key35": "vRtc8CJa5PyyAASypG7HpPfQBWbBVbY9ftrQEnCkssT7BvvhK3mDKwdQZWjtUxKU59mzQjU3cCQcSJvZa98rgbP",
  "key36": "PtQWrZkmeD8inYCpKFsNxATTqb23SE34Psava7UfsCL7EaAxw4djTkytLMAxiPb7AzyyE6w9mRrKAtXiTQ5Fa8x",
  "key37": "5vxh4RH43dhDRKcpdbBsnx3wKx8JTKYK4pUHQbUztsguX9HaatZZDtNmV7nHKXGMs4pa6bixbSS7nNBhnPZcz3Bu",
  "key38": "4BiXe4GY6EP1C8XLnbPQ9n2PbXtKk7aDKyse6mgzbg4JkDscMw5XstmTtQ6jeLyGxEeLjPihiBsR1rAXN6p7itCr",
  "key39": "3zuPzrvqPPZSM9zJz83NRMkeMXZj96FZmzcEt4KpXyerwrvJe3fau25jGAdNLNcQuvhGygkeH2Nq4oEQRLbgWZdZ",
  "key40": "3HqBwkaz3gRJd8236y4r1WbqZE8vftHUxuicF26VtSeqMf8678ZyES7r6ntsNt7YAStJ71QpM76BPexnQ2DR4Kwh",
  "key41": "vTdFgyMh9fBPdwBgjvzkcMbMxjgRBhVSK9gwhsJ3u9ktc8uqox39fganmtjPETP9nq6vytszWPp2Cv9EzSDiU8b",
  "key42": "9dCt5ha8xSPbbJLmgEmsCMAaPpnRmmkStujQEU3Pn7AaXw5i6LRDaHwciH9Rovy5ovjrqjPLz7wjzPXheTqEL8y",
  "key43": "E9bzW2FHzqFNrqanr6WEuk92d3VUC6YWKpMZNXnXZUrM8tj1LxAvFP5HUhoBTTRQq1CnqbWzYBgqrzc1tPrrhqq",
  "key44": "34BFtEdgMWxCGsPBV36bYqSSTpN6Jpd4EZ5FWcM2TyhcFTZGqW6f7u7J9Vo3AfXSayofHD24YpmB1wteEjyqsbBS",
  "key45": "5aHy4C6rmchykFeHtZAgjF2ZiwXRw2mpS4FfhTpcLuWRj84m4mmSw3B9yiUWxC25qfKxjkMfamKmq79E8VY5YbuX",
  "key46": "4fohwgX3Cc34nubkzk9o33CazHU2W1JxMURztr8FyN7xfMbjqPaw9Kdh5Qy5cnZ5VoZuLudCa1Pjx445SKLn8R4k",
  "key47": "3EpbtHxmtD4WGPHFpzAR5GCrugDuWqPUQhp642NLPf8i4JQfkABepTXJimu4aWbGaqnA7aqd64YRdEKYu6GktC3H"
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
