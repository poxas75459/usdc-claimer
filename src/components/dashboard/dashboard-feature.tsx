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
    "2qL3mkcdGxEkuNCxKnDpZPDbcuqE4S6oQdTbRpagdBjunfDo77iDfge799oxGEHXtcGJ7nghzzFUyGf61ncVSg7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfpZUSNGAMNi4bvFc2fRYdrMqGSZ4VdgvY94PLTiKikJ4wC4CpbhiC7jv8DVp6GxqdecAGZk3AVioCpRsbSSVNN",
  "key1": "2fHUTQwp995FxaCUiUjTLGz4idGYsW8edonXwizwVehhy8JJJaLVBGvC2AEVKBkuJgQtSv5FbWEebVRQhxLEWg49",
  "key2": "5wjXts1FLPkLGz3iGM1gE5KfVtZhVuUvFL2fu6zWb9nzA5G96BrBmNzGDB9V2MbTjuAA74RnqXPP6tXP1U963LW1",
  "key3": "2qyevXc84BE1Mr9VUJXKeKLriWLtkdcFnJTqZh63W72GZJrYZrZt1Fj32V7CJFDtHxWq5ch7s9SJGh9E6zkNsb83",
  "key4": "QxJZ9Mps7CVfbVTRp44zz3jqTDjmDUD1qBpvzN836fpiqmvH1hANB19m3NS1hZj4KGjnr31S3QRy9qc5fcfV6VE",
  "key5": "5H4P2KMTq8N4aDq3KTTmwRqFpYjMJv8M3Q3DhyYgu8WsPByAQKdxpdsu72jc3jcHKAfwmd9nAemCBCrTdKt1M3C7",
  "key6": "5yrhbJBey9fqSmeQFaZYh2p6UJ7Q51CDQ6mDNAqo9Mh7XiLN1D96a8kG5yiQp1rKDuK2pLZgc28BGVe3NgToC6uM",
  "key7": "5JH1FtZRyfFHFps9AVK5pYdx9YUprnkyGgrFPJThaXkzxM6Ey4n9kUdquLg3hafnskDy9xnC7Uc1pHBwMXHiGkFX",
  "key8": "4pGLqt5faoX8Jys9TUAkjRLAd77EjFfRybEfmyxt9s68ayWRD3jotUSWZd4dns1qDnUF17TEatKnEF3D8dDyiuFe",
  "key9": "4wcGbhZrQzcoAPXYruBgX6H5rPP1gF44tjcfFWnUxruQzU2E2D8k7HPneBNctTGkSPiS1VV35uheD9q6J9ShVao6",
  "key10": "2FG9rAFSvgH76QjY6khbkYehkWXAfgNk5Gc1DcGpc74EQQdkNPXNcSbRJEV3CVuh3xosnUaYreuxKnA1aT46Qja6",
  "key11": "2wHJ61uRC24y7eyB9XkzF4phoVWbGT8KF3odcUEPvgpSxwV8i2xii5arZKkGrLr3WGCG8LwnKeUw35HcYvcTimvh",
  "key12": "3LvwHf43EoyKLLTmAHwd47Jw4HHztE3J7sWEicXeWzh6mv2Fw7CeQx9g8bAFE8Xamjj65yjPhxjLkDKjphQsMngL",
  "key13": "4SmGaPt9DfJMNhCS2TJr3SWFVms4js9xrnG3XnBa87HXJhqWXjXMVmDcAq5gX67VFfeh7eo33mJnsVTirGVBG5Wc",
  "key14": "5BbwTTeK3UUgvtjthEnBJUjwfQkk8Vb3uNQWJdHbgaVqDXq7MHwq2FpwVjK4yGzpVWyV9KsToGSfhFTdgJufgEx3",
  "key15": "36uM14rcjs3fXotDbASWHZ29k29tFYDxMws5x7FyJeCMh4Nvb4wZtGGvHRzVVbZ1baLnqvZuaLAjmCAZgUT5Eaoc",
  "key16": "QEEGq4KLCuczrWLvFRiesCU5JZiZ6YaUtUh4mXBJg9LZpxTug6HfNoK8m3dyP2bTcTPY2PQUAnxkHyjzjP33RKN",
  "key17": "inkQA1wvMRwurTv7ku4ygdy2YNKh3cZ6as3P8BdKtyn85A6abUkg3fpWVAmDmywMWnxf3Mipg92xiBymWXNA3VD",
  "key18": "2BGTn1mmM7bkTNdGJ5PuKt3aH88smhTxBUqvbgKpAFfmagBJPogowDxjuLPEnruXJMJfSEKS932FCkaY959VYKmD",
  "key19": "2fdMFRVG4MDcMYgdFmdxm1PJ8phaWki8EC9rjYnLDrv1fiADC2ksDjT87wpBWtacRJGxRKBmRaYRmk8c9eL31gvm",
  "key20": "5jQXuTfqCUtJHrmHCNeh17xZWVkWkDJkpUk88WfpS29RtSE8pZLnXH5rdrdD1RXWL3X5J8zxnqRuKQ6Chyc8ba98",
  "key21": "5bs7cTVvzkNAopHQWVTF3uspvdywMhop4uCeFTxd89ntgYgAFX4faxrW4DobVPenP91bCLfpPwqtAvdYjgKMSj8i",
  "key22": "3h6pLMLtYbfcWXThk9HJm4BYPBNW5WMr4fMzipgbRvufhyYPMicCvpjaR7LG5zLxD1fuJqrQiAjMcdUgCRjqWM7z",
  "key23": "3pKbxeCh4R2Up5GpL9fzhRsgioBABSLeZJCoZnUNx2zxQimr2BXk3XxMfeYNDFE1fahkAdnZqXJ6tPk3SUf68Ts7",
  "key24": "2vK85nmpHNSRayev1dSA8i36s4m5jHq71XCo9nZD44JM5sXGFArabniiJbuER3pb1bUfnJ67bfeQq8VQujSJAd3o",
  "key25": "5Bd6XFVw7wGYAFdPQkfFA4nBR4B1AwVFyR3Qj1x2V7FxBadnRt62vkGpbhD6dYkSeNP96Gvm5pqwf9uHGELGxQ4d",
  "key26": "2YAS921wcEy8uw5WgTZrsEiDJFvdPZdLC1kPj7Khqyiz1rs7Xf7otRCKsnaoKTLWubMLTMPdfovEzxYS9eQMnRsf",
  "key27": "ztqdA5UpeRDoyGZBMS4avgggLNaCSyivsUJ6d4GTesVTo7HY6bqxwBNmLssLy1kMPuzWewyz8GimBZUwiqhjbv1",
  "key28": "5dSstEZCikp7dQD7dGjGcHruWak5fwYbAzVqpXA4fAqQYAkGg2Zphj9hwfMDSEdn8CYC9CiQ1fmXC4M76vF3mAZH",
  "key29": "2icaqjaRPrJS7hJ1EXgfJk3fRCSYMc1LJCqvBLNgxcWPV2zgwSL4k9AvfBe8U7NtUP6puDD5NoJXbGH4F7kdtqGe",
  "key30": "55oP2u5rVGMJoQa9oUgZirVCsTzRjVJQ9aKvW7gMiVJT6dqeqHUtRWNwMK22NHXNViG52XLH1ySqgZrFLKjZSCB2"
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
