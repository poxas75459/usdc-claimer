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
    "42VwbmZXB3JtTZyruzAatfFoqRFG61XJrK7UBNMy6oD9x6MrdbF6YRP2ifxTHXcTASVFFrq9fmUJRrVCwCGuwayi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sivC7qcoYuCpAc94eQeTiBCuYhvhZNutxUqmKasLyoQUx2mWrsdADZLTNZKC2jecR7gE1STFE2qnB3x5ZqTjQ14",
  "key1": "vRzUdEArW2nMgAAcPx8pg3P4Z8wT2196iPzH4YCXiYJY2rvJJJvQNboUuPduxuFXxnmtpuREbQ91Moof14xwhLU",
  "key2": "3s6zqaKq6o8TzdPcLWMNXjv4WWb5nU6FdrfxYXLksfAtEN1rzziCPMnLgZXsAfnNt7f281zegetdNWBV9JUREQ16",
  "key3": "3zgd7Aj8sX9jAHB1jwNX5in3hVaCsWjqjfGgXbXzfNiwcSmHi5LXhrn7Nx6XZbGPe2EkQw7HTZtPT52R47oZEAWr",
  "key4": "4LCgFiA5wgBDCqkYnEH9pX4SnrJ7imw95VVaAoQAdyhgDv8tT67xsqb6jbMCD5iEgotzXZJYqEcRH6kmQRqtjgsq",
  "key5": "58gmmudYSNNfv4o7EdG3g8nKMwZU3zqMUKMp4V6mJZ3fRheDprRF4RmJ45oR33ibKcB4UxCoJfLZsj5NpSCZmJnN",
  "key6": "GKLAuuFZW3vBRgPa59VQzRVNheWpR4SE1fpfK4Hr3sDtXdrZZ3c5c7iPQjegyMvhs55k5NCJLSKXSnfDfrHQbsj",
  "key7": "5BkpvBPJV4FVdpcrJA7dMALZHruEGQfobfahSpGXwdY3r6zGoSh66HUgDCKCd38b4k4Uzu8yXye3KvKVzcU3w82L",
  "key8": "2tfkF6SAx3d3oTRoB2Mc44GXVNgm2ujWh36QxgBQDeevBx2fXyspLVGvssV5UVD8DnPazmZdPEEyTpTwTiCP1AZD",
  "key9": "5xDjJoiY1gEWKq2qm1eFk22DXzUNUaWWaDcbmmrtzu2Xzb7XH6hdh4hcN7fMSTSFuUxh7nw3iQb8m3kt3MTpukxT",
  "key10": "4ibosuJ7ufkFd4AK8wddTGeWQHctxnTZE455ZoTuoEABqnQrCQ9KWc1FmKnFCYg7i66BALLJqSBvaeyVb8nQCBt9",
  "key11": "Qgj8FqUVVwJUkaAeQtQ2knho3TtkiZCBvpUBhHaeCxkJ262a5djr4rTeXvSuHR1NGFD7puXBrc4JtKNUNS1euDo",
  "key12": "4oX2PyrpMvW83gGDnuMLmDSdsXrDLg9Xw8DxBpVZcmwKNs4gzs4BF4xd8BC5PwYEEs9GAzVwFQTs7Wq8ccShYuf2",
  "key13": "4z5e1d3Qg5jouVJNAr8KUqYyDmREQWDvjfN3CCB7zXBKGSTVwmppurEsWgRywm8EBUHBeKnf7dq6E2Zy4DKhHHjv",
  "key14": "tT3HFpwMfPA3uuRHM2KC75ZV1DhgdzGDAvgfkz4oEwxyeeeUkkoU9AfzQrQnyvpthcQ2nAZd72dEujkWrvLVFnD",
  "key15": "4wm4KHnxnAWuYNZ1QozxU4vobZpnttVXSNpTBsjkr4NVnetfWBRJqeXSR85jmQqEi9JhXJJGvRnAWZkaB2C156HU",
  "key16": "14FVoiH8ksZ7qNfbVyamYn942C6yb4dYHDrvPLr8ViURZBGom7z6yaMhEa31r47z7kmFFqej6p8w2G6Gdys5nmV",
  "key17": "5eCrqZMSf8hj7e2jfZiZjUiRTESbtsQjHZZos7Cyw7dfJFUYsUDwNv1tE18e1FD2Qwuun5MPSvTSgeprbeaxZnvi",
  "key18": "4SEVrBurjCCdQb9EXAGBcYh3jBGuiuQutsv3NbJHjKqqu2YgdrBMsee8YDt7c9QBzHAS5qjJne2EysWdunT3WJCz",
  "key19": "2pUAV9ARoKBepzhGoGKq2nMJbTGMdjHaVPyruF8PLFWUzGbbJJXNcaHCn2arrBXz6dQzDBHxRkxpBcqSuUBqPLry",
  "key20": "4ohNAZipGM6AZzsc2VggSbp64CLkmCbDcn8wLiTd6LDncUw2L96i6h8L4tT8GmPmukxNdJZijcmaKmL7g92MVywa",
  "key21": "4FmZKgC2mKyzyZng8VAqLbSdGhiUcuSdrrAAJgYTFyQVvdeNiq5bpqSHN1VPFxy9F8rT9JsxmbQm4uLqE8xKdRX3",
  "key22": "neq4a1Uh3HmfMswYpoz8sDQfD46Vj2gTzbAZu1HcvwuTDNr918Gac7Xx2J6QrzXs6AomVT1XwziWDyxi9Ea7fX8",
  "key23": "4FxCUAjLeVvNJq5k6AZUR1YDLfxjqSyPzXLJoFSfDqwLjj6NdHiJ6j6zwPQPiKUdpQJEHBvCmXKp2kRXmFTZZdiP",
  "key24": "33xgt8WUV4knETtR3dtLbU3KTDNUhNHKRXuZhyhhQXXStKVEH2pj96zTjhLTrBUFoYRjC1Gayeo3Bi4CipiQWw82",
  "key25": "36c8ntGmioonJ9uUBTnMTuQ9nsRGHeruux8E89dLoFVBTGNsCeWJdphWEG1793vMttx41of4tNwh2DNSHwBiRukx",
  "key26": "eZW7GVGoZgSkSCsecL93gbxQFW9g6Ds6823oP7M8KPjSGcDAPLcJzaesdWh6aHaQD2WJpivxc3RDkqsDMniVUjs",
  "key27": "4hM2T7MsKuA1MBZ6AvFLDtBLJ5AiQUv9K4qCNNRo17zb8vUucvUQjvxhiVT25MNrCCVEKDN7Go3Z7MMzQvv3PFMH",
  "key28": "55auDJPTBSLovaoFATNCQhX3toYn24kyzFB7dexdp4b1mk5wbdvSDDa7tzZNsyPRtZ72Xn7QgPRRz9LsAdQ1BK6c",
  "key29": "669aTqN2qqtbbRw8jHcaK1xqVKDJCVaa88FGesYVGmT6ppScpZKiKSntm2Tcpji7oVhiZxL8kon7hvmrNvyYQbFE",
  "key30": "5KbvmtDuaH4HGYYa1ZxukCoYqCFBvrsnkdn7AL8xwost2E13f7MhY7SjRVNHgjya3oBPSQMgFYFofXWPxiaV8ToG",
  "key31": "4vmioj1xqGstBHNUPD2zKR3vVPMgibHy3VBUK9ofcwM5NqEEcoGy71jyqcc5NCwQqe9BkZyRaCrFHxi9aBAfea5c",
  "key32": "5uk7YjtMTh29BtbFKyvsf1buBDarKTQMScbToSjEtq8Jokb24UzbDSecKkcSkX6td8ShCb8KdxyJA3TJMk53szFB",
  "key33": "diZiB7PR45n9zBvmscJEh7cdJWt9PzQFfEzgd7Gc4neLJcVhJ4MD8HrNcxDf8GjGzVus4tuVgJrHGPA1qv6RptN",
  "key34": "4C91jodmQRKrRWHvduFbUbush4JiABT4WMU4y4SnsJhZPHtc2r8RvETG3xMFTnYeGW7okfbf7j4GunWghhiEgFrN",
  "key35": "3MmsyJg49bGmvdxtBBSK8XHGVhX5JYEqbgTpFdY8Msrqgq6T1P4boBRSMvU9TLeE9Kv8Eo27ZKjb9ECDowiX8fw6",
  "key36": "2cKFZ7WbuYK6eqKvyUeFFpVsCV94mxC4PN9zogNyMsxDQB3cmnjDvBWQCWLTDGGQE1Wuk14mPhoND3ZzjXgy4f5n",
  "key37": "39YWo7Rb5pZbbfyyRSHE9H3mH7jLbbkTbpRMM3RJ9f7sM28AdyYc7C3SKhCv4aNnK4qvSca1xQBM8RTrBjNrJdGq",
  "key38": "4HjdM6NKcwtvXnEpQPk1beWSSRo6VzApXPjoX8BiBYGBxwFa1CazqDFaDEYoTfMM4sXvr4ocSG48S692hU3CCFAR",
  "key39": "4B8wj7dS3hfu2PuWuzigE67JybzNHrRkUNKimt9quJExN1spLw3hFFPTBBLZK3k5FPXuNiNRH4ZjnGqUW8JNrpNY",
  "key40": "4GNPACXUbfbrKbn4r7jpJjtSwoNVNw8E9sgWFuUohNFtuKztzUkiKDA8PeC6uCvDnFoQYyjVFY3qcpEZNpvwRC1t",
  "key41": "4tQb2svfEQ2pmisMBCjuF5i4FJ5RVdHN9cRTqDeC8W6UKjffxTF4D5gPAqrFmz7vCSj6vwh8papQ5SRm1NXrP55P",
  "key42": "53z1aBx5igtTZPFCYMDkTVHkubiGCsZLaV18gNwnASDaE7Bttkz6dHXNj4kQig1GF5h22prKsXhqYo2EvEjs8XS1",
  "key43": "4n3MHYTEFjuRMQDfCvmhdRbyxcxTStNus1ZCeMYugpsLQuU6AfYP678fExQ9FcjpYyLyd5AeiE3MDcJTLnJcvfjp",
  "key44": "2SQzMnj8rEj8dinwhb2STXArvht99uwaZJCiSGL59u79sUHw2sJdDC8b7TPkNUTZL5YWRGjkUyM2NtRUB8cwt263",
  "key45": "5GBkHzhNU1mzfNeoGYWQJa4VFQpv6npxPFpFQDWW85cjijcHWCvjqTAJGxCXYsNSjaysSnnFnHVwtF2nvHpLw3Nk",
  "key46": "4oKGF3KHMBBb7zvsoxi8ycvcP4K1zhvYGBRX7Rygp2DG4mCTf1x6AhdCF1cxYKkgRXUkpz4dBUyrEd3kzdZ4pLm7",
  "key47": "2SwuTFg5dKXNQHCTQosXT5vaJDCdj7XX8LPTRqTmw1LVS1hnEVeQpM8SQ4rhFeLZwTf9tt2PS3Wg6quANoYbt5VX"
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
