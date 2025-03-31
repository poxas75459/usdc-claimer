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
    "5JzcCvvNTfoYDJrVNdauRsZncm78XkqANrwjKxSkbR5vfiVWmGaFsvDZsxyxt4uLeBD6WQT19euWFpkLderMfNGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLrTg8iqQZGAw8EUCSY6bVA2n1y2Te368LtoTRoTHbiPPtmdHxR7qFcBY7uabGpfoGkzn8Yu2t7xvdGP6a6ZxjA",
  "key1": "3CyD3UtXdLZLyCUwbmmaHudZkajEso7DKiNxCa6dV26aSeDRWxuoZ2XVcfAR8Eop4986mcUzHFoLYFLKKtWkUxyL",
  "key2": "4RQsMABkxLUCJckvXQbUUJMZ9ZLGyaRi5F6WHsBJjxMD1PcLzF93gdfLkwLmWSqi9LTsd1Djwx8cc2xoN7WPhPf2",
  "key3": "584fAdSNDrw18KYZsJpfbkniYFkU9JteVF55wR52qCjKL2GakjndLvh66LqSCJQE4ZmC32g6cYp2EEMEaV5xyujg",
  "key4": "HKTiqteKowvGmPPpRCBRYKz3LeCwnux8gGBeTvKFkxCbzMqBaZDH7kqKGjB4SJBQT1J6yXi9mtXEgp1nDoMRxU4",
  "key5": "5RpvQr7m8y7q24ZLmFRYnGKGQ3dHLVCYNA2fdQKVtRMCvR9GMHYDXwvqTLwgiWM1cYPcvmQycHtpaZD6M3jAMEHT",
  "key6": "4id7sh27hRguAiUTALM5ZQXN6oEMcerJdzgMPmiLz8h17v9bXUMrKyiDq2FtHmE9vwZutcwk9r8LVV7L8Hy7J6P8",
  "key7": "26Rid8MvCSujw6ZyfG6pMJD2dkS87i2NC1pXGGKipniiK4DhcUtfThDYCy3xJLMazgY12e64Cn2yFD3AejHQu4YV",
  "key8": "2Z7Z3i9NAERznaxUXnhUzeN6orEYEBzpXZwndSuaZBvcTs1vwj57E62tq8TYQCpTbKZcBbTEpip7M2ouLL3BE4xz",
  "key9": "35pEiPU5iKktRFUeXPGyWU81n9SQ9REy6MpEXdTa4BC2UsVXdyrhq759H8xhD9jxtPUmpUNkjan11KTQud55UdeQ",
  "key10": "2mU52p9iV3r47nFpkwPXWpaXfPB9broqsSdFg1tM9mxXiu5dtd4H7rdffQkGqPNfndSJ93hAnc5mBMjcrK8L9nTx",
  "key11": "51sNUMSHE5BUCk4ASPaZSYRMDVmoDmwGL7T5A6F6erhcAshyZmbeqmMav8CiJHdLU8HYSARuMXp5T3tsW1GU6w4o",
  "key12": "3r1GPonZ9vSbYxNwiuKJzpCUqw4iY1Md7m6jnRdGA9EJJZqEDf4DzSjLcPnwPEtx4ZoUtMuSCnitUViv86RBxJHF",
  "key13": "3CM4Wa4YiNPqmQDw9VE1Y7bajuoUNV9Sxezg3K5VUnbnXU5n2Scx1zk7CGH4ENoeGaAEKVUjmn3SmKwB1ktDCk3p",
  "key14": "3Kt6UySh6L5ueNhrgUg8skuLCCNwadU1QuaPNJd8KqsTveQ8Pd8MgnuuZRajKHMsftC91GWU46S8s9GPQABayk9V",
  "key15": "42eGJFgLiT15jJ1w6HriXMp7t5HJhsXg7o77AH1z7uXSJc5GxHt7EzTuJqpnnqhPw22bNzkdSLeBrg6zNBUA6NeE",
  "key16": "5cpx2W9yNmk9kYBbEn4WPiR2QQyq8Feq2W3w5yWmEAvhkWbTNeELs7EjvLwDV9gMx558gnxxYWvBeLv1LHNGRWtx",
  "key17": "5jyTAzh2FpB9TRUXoCEsUbvifb6mRuFbUKZzuu7LbdHmgH15qzWK1cZdimZG5TaPMcKVjvqd5bs3Y3igS6YBJXRv",
  "key18": "61ZRvf6L9srjUNhK8i2PzWWp7pyWYdAiX1RoNLNqFZj4VrkVk7d5gRZf5F8x3tsHYEZajAY8WEtCTKNDLoMK6D6V",
  "key19": "3zEWjXHnSNy25RZXofwPHUUmb1jVr8BN1TfUmGsYmah6HbNk49pR7XwTEZ5QBDnEQbpgLDxyVg3wd79hzuz8rLkr",
  "key20": "3MUPx4zQrkNr8zNDTmsLS1XpeVtFaUqRb3w5dyUasP7BVEGNuzsLFj36kFFRDZ5hZYzFaekQkxSNyKScCsphSgwR",
  "key21": "3RT6D5CBX68KVusqW5qb4j4TYvqZd1LJYUKmyzWNfiVM6YELCZE6tXJqBEPTheftJZmW29qmgugJREJ9FBrvyRuW",
  "key22": "3rVxpkrpdiBGF46o2AkDmFbdcxmWEvXR5oBN5CcW2pUggrx6jkWJA13Cm1qzQvCd5FxvSQo9aV3qjotD8y5KxNWg",
  "key23": "qKH57ZCVo4xJanLiXLhKyTQCCsW4f7KuftsEZnfmFxSDtcmmffVong91dQgECZmB9nPtFQjvogevAzLaBf2VPTM",
  "key24": "27Zeaicz7GbBzmsXqo9nugz2GZgSzoNr9b64XbsSMCnESnqqkkSu29ZDZD15q8UhYdWw4SE6xUkWJ2ahC5HR2Z1y",
  "key25": "vB3Wkus7nty97AzpwxnUnvrQepMxZvMp6oqAHfSbttkmVfrCYShnRz4yDvvw6dan7XFYQTZ7B5mkJVSnEfm5avA",
  "key26": "5KZKhwa2wTQo259bbFD8ei13uGZSzzXvYJqM4uojwF1ji5RNA3sqP2ZoXGBKJPACs5cfLUBtkt8WKVwENmceUR7m",
  "key27": "5GsNgeyE3bg9PrebJqpDJ6jotv5AThkBwVvkpF4MM9S4fDqySBjBYPjJ1hv9EGoXUgNbuSGJRB6aL8GTUm9eZ6i9",
  "key28": "5kupc9KmMQ3i4oETzkfVcCAr25oZw8oFXEUCWTKTpXxsQ5qx3kkQiNX9tu4bgoomkFmoxwBLuuwbtwMYZ8e2W5Co",
  "key29": "4nq7o6qbocABa7TnGiLxs4N8T7nrPcGsRMwPAnPBV2BJY7BtgexEN1HCCWKLUwgH9D2i3PACDMhKjaxTXfmox88p",
  "key30": "5EuSMrTyXVV6ZCAderZmuu1FozydgrAsAMBBxVJYqYuxVaGEBiG3odDYJM85mQviXSJMGMyVm2uWhdxMHiZGA8i9",
  "key31": "43CrLjDs5ox1DTtUrxGAqP7gxJELz5UT7vfefugzxWH2Uq9M6vX2nnY4npPgyXYN21htq71VTgJiryBW1B3RfrXj",
  "key32": "2cycP4q4r9J1FF9G9tZRPGnN5MN16s4GRpaMkPBqAqxLED796Yq8UygFg1FGgD27efxii4NAD1ctZnFMe8ENqAJa",
  "key33": "5e2htiatY6RQjtkjsGBgDdAdvC5hphRR7D7DJcjVaLXvAerQFAw6QuQqyM5G1CvVvZ1zo5RbesBJNwMVATG4DwK7",
  "key34": "4Xs5KWoEqraP55nSMFXQRJhn7VBBGpuVi6mhvikEV5Rc7wp1QPYs9hxhiZh7EUTiYU4fytHmL7gUWwQJgAaw1caz",
  "key35": "66PCvV4Zwqc7xGppKayo9hbN2xTb5AZ46FTfCQLaaF5o42yvPz9snEqU3w1ELY7dKCgg2t84tgh3q6sWzGtMhm8a",
  "key36": "3nen1Y9UYXspi5bUi13znY88PTSzQ9NKRji46KAkn5gdwdGQ5UqJzhzgPnCEV16dFHfuXWEB639779GXpXSRgX3c",
  "key37": "2bC7pap4oX9QT2o3pYX3WCbSEyTWUnz1odqk3q8joqBq1adZhnorc6p9GG2yHabry5uSV1CmcDgV5WFeq4nYAtRa",
  "key38": "5gWftpHrbdgx33J1pbqjjPDRTtuedtWQcJkM6ru4HLFMesfp6BPWexqNJxz68rfrgka6QYhxffSjgzrxS9a7aoe6",
  "key39": "4aMtD9cJxpSUU9JK2rUJSXAJCoFusn3SENfp8GEanZuY2QGVDzMc7fHj4fGkpCuiP1R25HHGCeKydAmXAnjkDHUE",
  "key40": "yYCLDM2t5dv8oyJNWVA5U2stzLMYru9TJZhb37KjQz6mj9cEn7Ug4mF2dXzTzFusbfP6ZUidTgbSmtbiTp6AcPo",
  "key41": "4AzLotNoZAcnxHJWy3FAbtLzQDs8D6KeBTjkazEGKehg7tiaD9T1DvXVRUmpoj7twk8SW5fjx1ZxontGphxh9wBp"
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
