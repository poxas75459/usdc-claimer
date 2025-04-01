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
    "5eXrVPNm6U7QejyqbiUqWuzTQhkJrJDKdW6vhnbKV2dTjzW2AMTHK68unzoU6pmf4fpam9YQ3Nqx969o2RJdPuzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCpTz5cEZXr6qkbAqviLMNzAYcm56ufAo9E5NkMr4v7xBFnUTfbbyjWEkKwhvTtr9LA7DqV2hZRsedbn992jsFp",
  "key1": "2dWinxZBfc3H8TxBZ9h4BzCT7KksDAABKp44sz8886xd3yNSfYDoWEaHe9HsrecdptairoTE6WJUpBHCMMb4cRJL",
  "key2": "8g4N397jfBchPXd7DeotSUSgnGydJekkqkwGpuPLKPEz4VgAz4kJPWkoDViimHBkTVdvRMVpKQ87yPirPuAQpB1",
  "key3": "3ef4aPv3e6WEb1erv1Fv7pGSfRst3eAU7QkDnphvh6Dz1cMp5AUJ2MR5j79vhYbBsooPU4my3sQkkMRhPgTCdrka",
  "key4": "3UiiyM9rxpoXRBiMFCb6Dw6Dxdw6TyKJmZpz6Y3t1KS1npL9KPEWGn9ML2SCtFRh8LBF8hx9LxynhgWeaeEVJXA9",
  "key5": "5eZJQAZDzDXAc9NbJDcH1Hb8Pybi3W3TfkFCRXbTigb7ZV7s8tM8vmVa9YYoUtZcxUrFQWUnJDkMK57cnk2csgwm",
  "key6": "3sRQ3Ps3mMGUbytNjtr5yMfnqdViWF64iBC7Pb598iEZg3dDpQTzAVV4B9RxarpBB2QQr4wzsv13npPF4G6rxaCL",
  "key7": "5X3jt39NGuYrSayBLHHKUQP3r8AvB2yqKrUHJinAZU9qiqdcv7Q6nFwTGM9wpHRcGcH2mvYMrm6woQ9cQhnELvvw",
  "key8": "3AHPmhEwvSrDaP9ZtczmvabqvSyShqMYVTgAGBcddBadYAYrWikAXSHooDQa2H7uDq3ADt5ZcGVz47Wyv7KEGasG",
  "key9": "dwPTsSf25yPoF82TQB6rYSivXjfHJXVg8AVA7VbG11sSEnk5qBjpG9D8ndYHs8J3dVqyKxjKZDWHisg8Gtrmt3u",
  "key10": "4jBSiEn1Z1Xr5419Twnfu3kXrk9Wr69dg7Tk5yR16jfhaHsmjJtmimR2dv31YnnZPUvxp3ThSzzsx4Varz8sq2T5",
  "key11": "3j84EB3vH6FGC1FARUbLt64dM1kNdGBDnpYomcGoeF1LwuB9sGREcUpVfpiqSiJKtYgqoLVAELMuGuudFtkXqTmQ",
  "key12": "65jarEr9zGp4jTAGCabYG2PMzf2xep1H2Dd3vxES5pPmyqcUzjuQL4XhKR28dL9D5uz3j7ta3jCKnZZjKwaDKSvo",
  "key13": "3xqQVty2XfuQdzWy5gaWMM7G6VJ2RpDRy7wAbhaqoe8mgsfszn46NzfNpaTWjuox77UXSKEo6DSqFc2XieVxHBuk",
  "key14": "2jAMoXvdhXVF17ovQeVpaX88EktbUxxAfxNogKLfauuYfLJwU7Psg4UsyTwzyTmWAz973HPuWRE8CApfk4zjWt8e",
  "key15": "2zakgZuzYjqWKWUjKCagxRmKoHb4uia6CnkDPyAnsXxk3UGLvKuUiTa72fv3t7zABucEcEgukvsW54t5rp4WaDQn",
  "key16": "4CkWNt7j9H2Fk7ixTgCWL5ZkB4Zp4iFUju8VNgkP1Y3auo1rEcBXJUcv1qU3PFRiwxm5sc8Wc1cy3e5a6K7Y8zdv",
  "key17": "2ku6xE3Dh8veXaohGet5oYWth7D17Qz8naPawG4hc9miwW8jvyuAPSJ2RW1HcX5rABexBtT7gzzLfDgbQ75uD5qi",
  "key18": "3MdYrei1qX1nVTfyPjpdSKPEUZHniag1eEYLjdv3qx5aPArx7x6MSGKgzPgKsE9wvrAmmTF1H4BDaGx2LysFc3y7",
  "key19": "mnVaYbdTkYxmDjSE4YAEnDsoBbjF9keebYtdbyFavQxgfzKAEx23N4wsfpN9f272S8bRMNo1CG17KyMuoaeToYc",
  "key20": "2MYT7J9a2uhacsN53ZyswvHfFAUiyuwi1jbMeUWtk46WawGY1RCbN5LVY61yfV6EiTADg497wjsTgMLc3nxoMReJ",
  "key21": "32AKdSVY4nuxxPy2VyBgMAVBLH4onkw276UZAwHvJsDALk6GeMjDgiBj1pqMap5qPY6KcEVrvKxHVQeyS1ePjw6f",
  "key22": "3Cu89AFkPs6LUb3D27nS3trt49M9Wou1rTYCGMW3C5nhHwr5hUu1he72psLPGgcm9qvHf8DXeoMJd49kE3BeQWGv",
  "key23": "xgEWAQZMAChkHH9WBnncMbj8dwNfx533PUdQyz8LVmLC9CdNBgENR9TGKhrETvKXFuAa3z1NXH7R7ddSLDQFXQP",
  "key24": "4MfQGALM4WCmWCw4yawwDupYMagJgV9DGW5YigMA8GrJR5cE8q3un9JN2c4VqcVXWk1kzYpKVLqcJZQL7C9qj1ij",
  "key25": "3xDjBngdU59NxZTL9qeXZbn582TMi5pE3J3eXkhsFU39s6s3XZFXB9WDEWhK493CzVtAkTbVCEutSUmZ1CKoV2dZ",
  "key26": "2zaQmFchU4AW2oqFs95ov7JLyM2DafWP61oJq3BTNQuPYgmjzGBKGxE2gp4CoKYvMe2cJPPYrFKnnv9zksXVoa48",
  "key27": "5Ss8ye6jhuKWyN2vJts39T5kwHVHfdxdYEzvJeuwsLsqzPa949i4GFKSn3BJnHmdBvreMcGLeLagkqrmA9urNTwB",
  "key28": "5bNAhjDyDcmJhLgQEdDazzoxwGizRBMe7o5SZvZcVCfHaf6Ngz6Lbibhy3xtdhocdemeukcGSEogYwtFQnGiwmzg",
  "key29": "RJggbpWjUToXWDtvR8KqJarC2sKTEUDuRZd92mbSMKka5qcpKi7yBczrTcTW99NBBwKXjKcNsXNWePqAYeJeJd9",
  "key30": "jg1nqw8GZJL1Q2NcWqRdRAUhDmCrdiyCSjwwpRaSaZvDRgvxQh6cxDUpHHuGkazKGhZWuh32ezYeGEm2qjt75Bn",
  "key31": "vVT4uYeNnqkSxoncH1nrt1NLXn9cV9e7cnXm1yQjFztnMu2tWjvQmBNp2iK8qsgS5P3C9G46VHTHSMdqrn6nN39",
  "key32": "vfeCzxgUoQqiB4wWTC9NvJx7j2Zew4Vhu6WcswZGGeMGvVHYrdPwuaXnMQvyxHrQy2RmLs1deHsELKCy1fshvA6",
  "key33": "4dhYGo4mjsniq9MopCA2txSZtqkPU3nnEFLV2sQyJM4qaztPnDNKW6jvtWrQkrTH3k6uZT9zHzag8Px9dov4KdgQ",
  "key34": "wqQtdd6t12QHxGxkoTzEbWbmvEgAmFvoJf84yEpWmyzNf3GoyKBYfPTm2xvsRDqAjceMjQp9uNVYkxC6DzfXjLz",
  "key35": "5A1BcAfpi8JHw22TYyGRXMB5TiLbMDQxhsRwQcMBuNHeznrgverjhcCX89N6wx2b6HRRiTHpQ22xZ5bKJydt51Jm",
  "key36": "3wDEJ1kpyULNaUGs3SJPyrEfFmq7rHLk7EbQK58tQn36vGSvsVSzhx81YZ9KnwHtFQZqSPWCdAMH42yZksPEt3dn",
  "key37": "3HuorCw3nDA7Lh97kVHQNqvQaWHRXKQWVBePcXVRn1RQTxn29bmX4DMynHBG89B6GhuV4M62AxzWTUMXcNKwsbSn",
  "key38": "2snei8TvnB94snBMKod3RpxZjqvdqDjv7RFPKmaAohn8ADypPHk9PV2dhVNB1gMdijFWXdWYkBEpjf23MrLHYieV",
  "key39": "5KHjYeVSQaJPVmJd5w23mcgQEKWUp5B2sbsg9evUmvEoQPRf5ch8E3ga9pUK8idtdCZ84HZTYraBP774Sgvc3Gd5",
  "key40": "47oe1NBgZAFQWgqnKAFRdR2UbfjRmYetw8mMbqJf4V3MuaiCo9hauEC4nty5mvpTEQGNDUyYdhyWGRDyqo8dmYLY",
  "key41": "3W4eLihuwA8ioQvo5Xo43gcdZaWm7rMzKqA8TPAoF4aZhd1c6VYYjJbeYqc63iTbqs2DpW77ac5poCfiUfLiAVUV",
  "key42": "3GS5qaT3RgyRwwZAT3R1vUFVo4yKWp8SGahzCgU83yp1Q2HvubDfnJ4WHda8bDdBWGWfBnba11xPN7NbK2huvLDJ",
  "key43": "3bFrQPYc4vuDeZqxvUnZf9mTbLLLGJqmAUzkucDYPgU2xoCn8fKBS7je96HYAhvhtcH293bCcFoRo3TBgaoDXJFg",
  "key44": "61zKv6vSnJMqe8cUQaEGJZD2MTbB5LfF7pTLacRReWzji97WLMNCzL1AXmRdxziyt2tNdY9g2yWqxw7ae4EShwnJ",
  "key45": "2JfMEVYZwWDoibNe4jpVCQxWGHydj1C9engdpV5xTGkZ6GGkx1VWdgrcfBC7SnV8dmm8wJKtN8PWew9vHZGDx2Bp",
  "key46": "tWqkoeASN1d8EHyeFU5mijy5xREi7xXRqzQW5a7ax4M6yKBWHLeEeKHPrqScFJFei7hG4yu7ucwYk12DF7wsnDs"
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
