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
    "GFz4Aon3fhbzc7xnPpx8k7RWH74Eqqz7hfCVuFXthu4u89XSc3Vt8mchViNnEhDqQoECQaQ3T8nyeaApo4aN7oQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvevGzsniLj35dcEHxVXTaQK6Umrv9tvYVUKu2mgdgiYZoCubWHdoHa59MagrQ2pH9u8a2MRsqjUcMsyUCeq5Et",
  "key1": "4wzXLUcNYCajoZvmDtHpjguaUBjJzazKzwoYdXhfR6ubKkYqbcSJeCFEx5y3jWeRtNW3VerB2dq2bYn8WPao27DJ",
  "key2": "rr6KFqV6XM9FDaXfbCF79GBftBmrt7SMuNMXtSToEKRW1ASrybothCXLvXWgPKkc3g4pswbkjoZXMf3xRQSu6nh",
  "key3": "3MTLp7Eg2VNnG8pmDvtLVUVy2pPmiJAioxUBVKr9FtJeWawgcVjq1MWDF8NMYCsMfXCUYTgZX8JdxrrW4orWY2Gc",
  "key4": "tvketZz6SbzVRnk83z9jLEU5sokLhimk9bNpVFVtqEFMFEm5MFfnyPauNEDUWYfxdAUPD2ADQsTEAFCMspNNYJn",
  "key5": "4X7GvJfq86G1buvFqhmDhZsmbLb8brNwt28qwEh5LBkFTyBRVH5Fqhc7SukGyz2962t1LCusndGPqhHFLJ6obnRW",
  "key6": "2p3SvCXW2Cw7aVofTrudG6QznZuQ4La592Chey11HgHPptAChte5gBBiV4ccvfN1wN3cgj3pjhHR1gBnzzdGcrtM",
  "key7": "Y9aEgDeeh4CzxJg6pw7RTaBqEKBBt1E8uLukxVEn6qjBmzLCxwDab4pEdyQvgi5eFhj6aD1sWetvex7XabCkArb",
  "key8": "3LPcejHGwJtQgJoPE72dnzqZzXBdjGfkTNeVmaXSQLuaQPkSL9G49oiRmgif9wJpHCEQ2Fsu8SGa2pf6AhayWwxk",
  "key9": "2RnajnoyGVVQB7AVZeoAwFMuj7KimFuRHg6eTQnHnTvCgnPsWiEAmXYZGDp89wh33L4k8ptWFdQuYAq5AcE2NAs9",
  "key10": "5DVnaGhi2ZR82BBGweZzdVWFbukHQVVJGdZw734Q3Gdkxdq3E31ss8itbT9uWVhcBfmjgsJK8kkcUxfEjcgoiaoG",
  "key11": "4Wjudq4xcBTZrFzb49ZiHAC8A1SR9zv3WzQ3g25dqu7jkss9498B9C6wpMfJxpMSkZqZYUe9UE5QaFjBZFGVGHv9",
  "key12": "nB3P2xtwAdSziL9UmCendeQGKDUN28YfYFSVYdZbaqz4waYiqti57T6vNjAR75ujc7n6wM6JvX5Ur1q2WYPPmVm",
  "key13": "f6mNMZa3Wfwm2kBry3nussEuEx7agHZcqs2tP2BZoaFjVayvgUZqrFdsqpA3JonNGbLnFM67XxGV57rLYCaVDQo",
  "key14": "M5gMnBCVv81oAS8pao37x5Mocw9sPMz8HkPjQmEnJ9uK3V5jYbJRiobNkr8mL3v4zoZaAXaRvjJj4zALknGkGGA",
  "key15": "2vXLH8qUwkqDkcb2DYkExWdayRTQkAsehYcfUdNf3ETPSqu3XqpYZ2iS6C7ifWNSECkzU9ny4tjVpEDhDJq2NcXw",
  "key16": "6SGQ4ojfgaNujVPwwzUDAruWCLY2fSsVsp1HmVpZ6jGGmKXdW2QrUnDFQBvkX8qdWj6ZqixtSo8HJ9X2A6czLUr",
  "key17": "4u7ZTpGbEBf2RvLTSURUasoBsNhLqfuZXWFihdwjpKSpex4S5Ls8utmchQqSzaXYCpGqMSU4AUm15nYuibB8FmwY",
  "key18": "5WcLYinXPYnZzaYMbQmGma7hdkLhtAfUCXZ3QRYTy1uYAWHH6Vr2b7wUM6m9gUZkXXdR1eJgUGtgujaDMhTyETVn",
  "key19": "3p4TUhQ27UmFChsQ6eNKuhc92z6goqjPro8sr48hV9VhD3EDcWb8nnARaA8oFPv3QsGwzWpCYnsehu6Q2KCA83wo",
  "key20": "55dHZf3EArRkkyAnT9tkCRSgZhSNuMUkoyj84NeoeU9rrJ2uRk63jWuRtGekZ5Avh7jqY936bRu1o5k8t2iAqk85",
  "key21": "2TBniY4G5nMpeKwTSqSLbpsWFjvwWy6ftuxiWFmHmn5W5dBkwgN7K7zcNzh1QDHHWCmejXfSmnyYmQ7hujQKQN3L",
  "key22": "2rq5RdqUi4SRMCg5kKFzAMJF9rtSfJiJuy12jd8QATxuK5fx45A67mAsYwtQauQodNJPmH7M718ipuVoNaiCvTvF",
  "key23": "2mthMJZoTUe4kNM6dHCAA5vXh2ksbkN7y39Uhc5VASrNxe75kTtMLqvYS9GgYProBieknnAoj5hAtLdSz93uh5dk",
  "key24": "2wSs7Hks8yNiXFwvLC5Z3zM84dRnnEFb8jhtZ6sznrbtsB31zBeZmDhxVCYPbJuvnbykgeAYeRCcTrxZSZnsFeq5",
  "key25": "m9czMwsiuz6RKKn7iuga1D1mz2NqJYPAjf6VZo5MSxTETDps4zqfVA5G3jCCxcRbeVLS7WDWQwC12VZDoqAhEBF",
  "key26": "RUo4cgR5uted66itJJqC7LiCP5q5W7CMofBn7cSdAT3HKZQ6TA8ksDjR2hq53GDypKxi2szi5FNGQF1fnxjdNcR",
  "key27": "2Xri2iXe5jRzd5oGSmt47qFsYCSZ7bbaHct8Zv624FSfvearwjSwpAEoKmVmvENxXe2Zxu8FUAf1tA3RJKF7kKnb",
  "key28": "4ndUFpop9wm4qUttksE6AffVVoZSsB2A4XxXKEaxxoeXEhKLqTKMWvRvbVSMrz1NiVYhE7kPCQDykye3gCj8fx5J",
  "key29": "2vHtqPic54wxFmoDmE2EKa8M6z7kAuh8e9Ey8JKcXBFk5RnUwSh7DXDunLqCr2KZ3XvJBiijn2ByZvp2QfBD2vdm",
  "key30": "2MsyxZw2KqKSixaaB6nQea442982DoySLDeWDVvVLtP4iFdejsy7MnSaWkJDjnchWpgvqJisY1GAxJZPBSZmUT8g",
  "key31": "ETygeenhzSakFH2mKczTsDDfKDj9hpzgfJLLec7mCrcqbMriCv26VpiWBnyUSmv7DdzwvzvqqM4eeYRadWEbEaD",
  "key32": "WN34CXSZfiFLZJ2BjnuFSUo66S7RtzPpUQaptWMnFiKGyhtapxfrP1rwgyiSJKpVMptfS7sQjX6SP4mSLtukZZ4"
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
