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
    "gS4Ntg3QEUfKpjASuk35an8oW1mAviFdmgwMjp91mDedhPeRQeCPQQnES3cVF6hDtByZT6h3Psx2VzNKcmnkd5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaDxFBhjAW8jXbDjC2HF4WSGoKpGfXzThiyovcwYocy3wvZpUdb7UB74LUSXnfyhjNzw6vkjFyLvczwEwX3y1Fx",
  "key1": "2LcVMr2YU8H2RzxGz9TsJ6qFG8PbMNkotdxAfcYY8gmPS7YHXdbpnsx1Sk8gcQTmdWqBatkKkKVCtxHoTzW6fcmr",
  "key2": "5U4X7sXWuTQGEK43sF5pfn7RNTH5R14ZFMyTMNVGLisZCYJ2w6ffwrdM611MUTXWk2MyvoGjVLyKEPht8ED8CGpD",
  "key3": "2x5WbJhgUb42bKBEeobBcMqnLaRKdCeyeQCaB6vn9bc1ipRevAzLvhSpn4FVNfPFS47xg9nKfHk8mcYxibJLvgGd",
  "key4": "3jK9MWLk3MPPcxyPEC6wdqRVhuDgXYbsQCZA1w8HRo8QRHTWXAkKvpFNXa2uUzhLkVat25hs7kLA72E4AP4nEzKU",
  "key5": "5oZEexghoqk76CunJ6TUPa6pGNFKEFftE61AosKbXe11vnm5MHDgTWc8yndE4x1rUmj6am8VGH4U3yGJPf1iqpyP",
  "key6": "3TLpex7THGnWnHjTM4uQWQzjrk3hT7Bfght2xRE7cnBkEiGAqPCVuuxyqPJQ3RLUfCjZv9RPVPjeVc59B1E9arPu",
  "key7": "5r7NzjCarQfb3CZUQteMtMJHcEKtXa84LezeuyPBM8ZU18sDrWxiAep4KRM8fXwpn1PyAgnm4zQNS9fno8awoYKs",
  "key8": "4jhmThQPCQ4MWvrdmiX7qGyC4Dj4C6dxszUMhuUEk2EN8jPLf3kwARgSpxVq1AbhpSKE6Fo99s7Nx1P81Nt9EwQq",
  "key9": "5neK8oJ795HoSyvED1NgMfsPwMGpAVWTsMFnSyzUUqCkuGxTm6ZrQupNd1FxBGLSsezKEFai7PAURhCqtUf5rmSg",
  "key10": "5ixe8UhM7DcGPFcKFQD3ybiiJwU2yFr4TYmzoabAoZ4THx5jNEiLBro6iy36gZ7X7dkViN88mCv4EmyQc2UXEaf5",
  "key11": "3JLLva2urhKcTqfuWZPZhHxnQ4dMQVmtZFeEwTB48qmhAnebe6EsbTLBy5mKBzq6WfD5D9RyHihZUpy9hwRtZmhp",
  "key12": "4qJ7aSZYrVCDjFyuHPaNDEi6cyxhrvfZV1iGgupr2wEyJfBPdiP5cKg6BDj6nnBfGucYQEx1xnm24Rati5tQUJsw",
  "key13": "ukdnqRd6oC1SaLizzAAoEkfhgowea9eNnqVrWUNS1fCUa2yvvbScr7okezTYqCCz3aWf9VvHV4riF6qWa2LzD3T",
  "key14": "rh1Mi17PRoZWJs24KHwrrYhCUUdvvj1e2y2UR2g8hc5X2GUAjkxEcqmzxSVPVApd1Y2s46YjfvgNhQKubU5ixW2",
  "key15": "2tUaxto175u78bGRi7ykWDACfNjFZFqWUzN317oBF4vD8Ds6ZbS4SxvSNcfhtpdWjF1R3VwqRC7qKe7YQa2bqwko",
  "key16": "3MB8Eyxj89Ufp6AtzfzqrFqKAJjfssvGx1MFu28HFiSwzeYuv7JenuTQEqJptKPGutCmeL5PFE94Jf76QqKcwgoV",
  "key17": "5qiouEFb2PtsWo76uUWPjxv6ctST72jJabEb5FZv84iUWwcsFmSp7Y3pkaS4FbJ3ZLGu9sLpAswvtpWBP24EchMu",
  "key18": "4FAsSsatYYAMCrvcm4DAvCNrGZhcRvuF9knLVYrio1EJUJgWUdiz9EJqRyo9KEVrAeHDK4opfzHz7DhBJh55Hiek",
  "key19": "a5Ay2KnWBNppibx6jExuVfNEP3274EMZ6t7JkdKDpLi5cyznqrwTyKbW9hjheac2yRKtD8eDUcojVLSEPEQ38nA",
  "key20": "4cBH6oLhVBJTL5D2oY5KeiFDaYvQeUhn2nuAV5FZFFveKCEBsQJWPya8UpBSjcXQnwJphS8PpdVMbCEMD5r4RqeL",
  "key21": "j4aTBQ1Dg4Y1u6ao1T5Z457KxgxrLMTSJUCctpN5pxEiqBjqL1wVjwXZ7JVdVakRprZMfvBr43azR9SG6R8VBEN",
  "key22": "4DfVgtMPVFG3EVMwo5ANbpooJeiJ3nSdy7JfFiwY2oNA7uvhmMkpvfbUmCips7gtRhutTuiRVZ4kujvFwLPMbnMX",
  "key23": "3RY7VFaGoFgRmkU9ChRAYrBzknkiuDsheFQ5FhXVh5CAdPsHYV8F2vPqVeckoekmH1acg49gSkXXLLYwDRARM4oC",
  "key24": "4WKiMLBkxNMzEDeQ911yrjSFCGLnV2eSMsXRcz2okmJqVDHLF3k9Em1v4MuiujrptJDS6qiDAAiVauqKe1fmG8v1",
  "key25": "4k3X2HhsZFHtjy8buaZBiTVaCpFL9UhLs3QpEZZ7jxVM3UDdC9sVmFX5PoWktVSsZwcuHBY7V7SWJKg5yRNzADQm",
  "key26": "4zixuJWasybtGxKWTGffgZL9ssvfU5o5PgLCQViNcZ6EedssRYdwVL7aoJZcGSKwisdkrzL1C65pMqitcYs4hSDa",
  "key27": "4T4XXkdz7YToxRnuyq8XUSMojU3ULs42ratnJX5crsrz8MJqHZc1V9M7sWt7DJr63smFdXHtFojBNgj2VxL3aGNb",
  "key28": "4Wp3NDKZKfFDNRLBgdBFCLWWUHR3nge9W5QchKkuK4SLJCKG1K1TJRCvEKM6PUNpb5HR75gHqr7Vv5AYUD79ZSX2",
  "key29": "4XBu1YMF2QgZER6Vs1oZHKufDdnAeEvaaT7hHrWT8YFf1imt9TceFFV2RPBANcfVk4Rji8w83MCSiaeqnq8pCB3M"
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
