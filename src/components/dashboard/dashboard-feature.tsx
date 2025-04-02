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
    "ju9LshZmtge1CJvDT3mfEoHjgJPkg5P4kiCUQULbRVwtNPyM8K6k1c4hc5LfjWSwG5Cex7KjrsVTbPQc9Ma7tFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFLL6ZoF6ZbSqVuuYDBhSiAF4X8FiU6W5KTPv5YM9Fa7xQSb8mL33LFGqgRGhaFoWbUoqeaktwDsjDhcg2s8Kh",
  "key1": "eEUuFNgSYBfxq4xRBUzaTvtRetkskees2CF42FnTTatvhc78c2dZqcAdmSth8XP1mAec7QP8CDEdnhrEbms7KEe",
  "key2": "2fwgE6yi8QiryUuf8wPd7Am8F2Ea1pp38qwDm9LHUmQPFKK6RBhE4RxUXM6JxR4vCr5tSQn6dpjM1HkxTV4kxaCH",
  "key3": "3GdozhJKZ8exfDXch7hSfTSLcjrcQumCfqmdiyCQBjkXy36pXwWHT9y9CjtMnDsBjakFZWFhw7VkHQLL9i81EdV2",
  "key4": "3d2FMen8BNUHXM7rWw2hCanmzNygLTJp7SfYA1SfGc9tCj3WCnyUinwqmLTqPTnYrGqVjZUCUeNBztQDvRtL5L7j",
  "key5": "2kgsx2k2ZPFcagz3pjxm85V4ANtr53AJL7sKzHLgHDUY3WrsFU89HpxsgKZPnyVKmp3GR4GY1Tiw54oAEFedXHCi",
  "key6": "3mhCSaxKWBhHgTR1FgwNeaqAbW2JThVD6uvtH54sP97wW1oEBxyNFRLjfNTbhTJ41tCeWaFg5skeq9ixBnqEwFXg",
  "key7": "XEjgaCnaPDRrwotBBsJ9bwEuSavstyetHCceU4TXQDF5CuAdTGyeep7sZFXxELgDruSMFhZHy5pRE82pKsJMmZd",
  "key8": "5SCGJeFmBu3J6hE7TKsra7KfL7qLhUVPLcBGJiRTQMPCP9kxy78v1DwPWpG6HNTEwEShv9epHuidPtMqt72LwCUt",
  "key9": "5UaB65FpAYx4DV1EPTJGDt4iAeZVtSSRXsUKVLY4BvR4wDZGxmgr76MW8CtrqcodX2j9Xz1eW4Q9xhBdZ7adunnZ",
  "key10": "5TFRWZ1oLkq4RXaKz3QUVgmdduHadA3METidgRw7diqDZi36HcgSJxF4quk2C29219zAJsApqdETHMT6N4MH3HMq",
  "key11": "4eynGDgmi82ao3fJsR6LcTRM6BxHPeJJ1PxmR3VnDBuYqrDcT3fmPgxgSJpQFVRrHRcu1RWNqnEn5EcsZTLNNL1y",
  "key12": "2oCm6TioweHu9ky7bcbhZWajsKhN7yfK1SLHUQj9wiHCpvkzckN4dCbN38NJu4nxhkeRAjT7RCmFeNXgt6ZTAzWs",
  "key13": "28EDjp2XnTNFjTb1grnm7NqJBGVWERanVwdJjQH1YCXyMKAYuRFhuAEyJkvLsqRqebiWeHaXmcBpNYo4HTLbx9F1",
  "key14": "3gMHDeSUCQnpQ9APG5nWLgK2Uz2GHpgH4nqHLdSUMGuy2kGg7HCHpf1XSEWbu4ZhYuedvg5XHyEru3A6X4ha1EsA",
  "key15": "CzBcsuaW9AnmUMTkGsKYhFTqZh77AXG7Swws8gNtMvEosND6ueu6WsA4MNp2we5yUXYrkh3dRMy2PVJb7Yx72tm",
  "key16": "iFdikAURdeoQ2ais7qQvef297C8tnkNUGYun574vbTYSkVdUHLRzqycNUUXfBSNxS9fSbEJshXXrdRXhACKuF4a",
  "key17": "4HnHauBkE7CDvTE58hhacivf8L3SghiPm584kXcwYR3hWDZbeH6CCoXsDMXTeHsQ9aoemymnVjLcqjp5twhoTbwp",
  "key18": "4ELP82a7bAFRKgmDkLA5QYZ5XcozdpsbN3KCyECmVMKsqE6ovqqNQYD6sRcMxLosizBX5YnVERpk22GdnmptFsuE",
  "key19": "28EUfkULjobvM5K9YjL9qiYRBCSsAGGfaD9C4mkBQBhPBxbD1H2G9xTHf9qtSEsQvkJeoMhhTYMrweWgE11XggB9",
  "key20": "489DXEyKPRRmxjAHCS2Xu6YrybebCC6FoKSGWLA6dqUAk8y4c5V1TNZtznoygQoJTbSmwiFxmPhPwURvEWYxhQuT",
  "key21": "58xfJijTG23N3PWTjJS1U4fi9rovvK6FiUwux9phbyN5uSAUfPv5QLbYk4n2A8p5giRdjze7xcxDJScrSNyBqsAf",
  "key22": "25uaNLMkN8mPdF2j5Bzbh1TUB8JrJHi6qBAy2cqyGJUE1USNqKqpQ46xy61FCePjGeJ2z56mKoozvJ2cdCFPKnmn",
  "key23": "3XHjRXzkJR5pbdKa2JAqwT5TNViM3BaV6AtxdBLme6445Mdax4werxD6g8YETdRpQR17H1rgEetYgjHuG7uwwuVc",
  "key24": "3CRpzcThYwoinYc2EyFY2pqkmQ3WhfNig3mNbWjanDJyLdmtevM2DpFSWyyT1dompDkkUhXkP4bv9F4NcHk5cGkK",
  "key25": "4d6cLbstuSRaEgrvaek8Lpxq6NijSwxASHM6T19HbfeoKxpkQrb2C9SWwGmEzNRSuPkUqxUoSA7y12NB2XCc8hDQ",
  "key26": "2DGmdHYSx8jSgN1RcPxfm1W8EP1LBch6gfjVGCHMr8TpyP4U5PDkc447vSEZEDw2pT2DnS4UBCXuycArDbsSdStS",
  "key27": "3bh2PNiZtnB8MRDosQQJZTRB9CH2jpPnStKPQmJPgLDJsDn3UtUu5UhDB2shJdn173AQ7yyE5hgS1DynKtR8znEW",
  "key28": "2tWPtpkULsLAiyiqZwe2HfCExP6U4kW2faLTBxd2NkUTYLaVQ5YEoLoYoQZ2axXAzahExrvbaJ5pMdUmZ6FCb6Ww",
  "key29": "3NgZrWtgyHwqJQtoddtLtymjFeXVJ1Lb2Mx33c6HeqT2ZHo2NSRaVpVWkwdJbDnkdyWv6jbMswAKuGrzq5TSHqnH",
  "key30": "4uG5M21oECTuYea3NTr8jJXZc9S8Ua7Bwgm3MDLoUYfk31H8bHDkDPyp8SRi9YEWhXCFPLvqfZs28Rwx2pk8Bivi",
  "key31": "2RAR7yWrVU47QeXtz18Hu5QYAzyosS7S9pQNU34SsQF9dLKgwZqwAmT7BVwBfTAhgAyMw2DazgDVcePgX2QLF5Yf",
  "key32": "36FCUMFTqkv2pwKhXhdYo6mksTktTj7X4zGPzK9rKqVA9UKUG7CvZCv4FXbenk1rRtWD4JkXxvW6eAnekJ5hT37t",
  "key33": "7EARcUAD87uRb49ePuLH8A73PRMHCRKW3cXGbBtb7krHJGKUZGG8AE9w4wo7EohA51rweCCcuXBggCPmvErns1c",
  "key34": "2SHYWH9tfc9azCsPDDXy6pxLJBFRrLfJ82ehe7ziAdAW5F7yRcGijNcaEcUYpqHmgvqZpzq7e47am9BZQxpbSHcS",
  "key35": "4QzqqStvcLxYu2X3JXHnxMTXiTXHi6MZk2wLtSmE1hLsmbVcHJD4KKC7gj2bpakhxpfAwQ2YWdTmoba5STfAhMFd",
  "key36": "3tUPeRAr1SseMq7wjHFDPvYy3oBTPKkvUze9LX7qWpRaVaUBW58bSXxScror7QayJrWj2t4DJnyDwHz1UpUgRMHi",
  "key37": "5q7vWXcJ2mtRW68Lbpkbw1isgEnh2cyPsDwA4NLFCSSdZ1c3fb2g7kHVwpibarthtdDFovHH5eeMdbCz5zMu2Bqn",
  "key38": "28FThpLFYCsxTk4oD7ZC1wvAUSHrNrYA7SnByNZ1LYVo47hLPrhJ3zKWJTwEjCmGYy2SAXzDmi1LbVbsDc9E1btj",
  "key39": "5ZAQLitLf5F2SjT5ZCYyCmA2of5r5yt43Lznf8PYS6qhxjEwTW1tnaxgo2eV42tj3e1mcAXQvpJw7CLiKtWY2YqW",
  "key40": "2GnQWMmgv44ar34yt44mphT2g815TMhxDMeKSj2oxHuDyx4WbRPUqR9SvN3LEXZ3aujRa3MiyYtc7baXpGcuoCWe",
  "key41": "3diReFCCT7V7TwxyP5qGkbg9qMxaP7h6vL5s7eP3vWeFVSYnEw6DAkDszL1ef5tciaCLaW1kQLauQsx7RzsMv4SJ",
  "key42": "2x4aag69foAKKMgtcPfTNjMrFF9THF8rddPbdUckPKENUaNnE3EJpCvWsPMCMsq1XRtrWngnvcsf6DbU2a7Xi7JL",
  "key43": "2UXcJP9FvsX4KuMu9a1xg9tUFSh2gKxhG1g6WMyYnohuevyxvp1WUuYadbeWVCmaU5WvWXuqJ7euYudKSgPXJTSt",
  "key44": "5YoraAJ6kHf83reFnuuzEG4695iC2kfw6vAoFbN6xofUsEmw7jBNoy7pihB8NgHDS6Rh4k2JTLAfQ3sD4geq3VuV",
  "key45": "32BY2XaVPMCZ5X4EMvEPGqm1h5cfyBn7zPVfHnjqcG4Ue45KA61mNSgUhtv6KE3o2tQJeR1KdVSe2AmmdxECSykz",
  "key46": "4BrFy4hXB82eWR3RfoKvs9bTW4f2eQEQJAh61hiZv4h9Pq1ymk1EeAufGpZiHcaH1BFEuxnYkWxxN6Dror2hRLsB",
  "key47": "JM2DiEj3jSEKyRfXRPpTdHSwqxNBVzYDeoG4ShuAVF8t2NjFvnpY6JZtB5aWe4SVz9jJY8Z8tfJp1DVdq4fi4Sy",
  "key48": "QDQj4fGzXYhaNPpqBJgrnM8JEhiEu7poqHiWpYTH26ts6a951rnSRG9ZDrBeMD3fmb4dXA2hTE8kVtbKiaCFrnL",
  "key49": "3JDhrq7vuEcApJm4Ji3XfisHLf5rGk1TvRHaw5wpRD6k7ZVccUb2jEiNExiS4UNEM4hVVYaTQuQ1bSBGubkaJDa7"
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
