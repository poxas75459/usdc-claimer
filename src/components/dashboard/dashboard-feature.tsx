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
    "3Jh5UrNUYpV946TLpKCrRCYZu67jxXAxzNW9XJXmdJW7t2Ug7sgQBq4DGWTjohYB633ZUc6K7ogAEhsNrXFYqVCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mAQyfHCmLbATZQCPSpwcrjvx3QpXEE1kwEXXytDkSe2oKU4abzQjD553viW2r43vVZDgBDRkk2eXNLCnYED4prR",
  "key1": "5XpVapXyjzBHQgha9Kq3toxFPnAgaZ94yyCPQeoNLRx9NXWmW8c6D1QSgm87TdmHDiA2waBud4QuehZxT6tUpxmu",
  "key2": "3kEoNKTLmVC9S5dCVx7z5WgFWLUiRc9PnYEWdyDbw7VBdU8UmqesDtRiZdcqqBzi6yU7UcFvCT4wznhuzs1HAPfD",
  "key3": "2Un8mQhmb53q53pHviVeJGbNnb2tncDwfG8kETFHd3Pk6SdSaJRTy8S5RVzfMG3B6f5Y81YJnSgEXF6FCfDcU8yL",
  "key4": "4UoCqGt2xDk2kP14EQ4L7TvsiYWutC9GNNNQiXkYaksKpNzUVxD7t1DcGcQcokFnB4g8Tkds9gBZmuvqfuA6rYcm",
  "key5": "31QHM4ZVCyWgLRjnciwa9uPNQC6i2qmxfFLjawyhJ2tSXtCJxXYcWxJoRgg7yhZmNFQ4LfoyfzZ6SheNz7CJV72N",
  "key6": "3oxt1G39EonjNpzJkVNeC1wZhWiqKVu7UWhGmCiPj8fCQRSQpobhL9yCNiy99qLRVnMUzBmKLt2ykEFdzJEYXzec",
  "key7": "3WyHcZLjhDK9e23mqwodT1nn14xV4ShDnXUf6WNGA6bvZvhUN5toNSHAZRq2f7gENghw1Jd813dokyXnqnUaYE8C",
  "key8": "4sjFRWUKWvH2eAYUeMszSMC6ftfCr4ntYj4oKBDcM2n6AcsGfgStWT6ZccTYC37v7C3esMbQGyNV6jQMyZ4MVptS",
  "key9": "32y2vnLkNvJDopHmGf5DJCbGByjQuB6wXeuyxoA2GsbPtyPzZSV4ytypKmFibft5yRZzUybmWy5WqXK8xVEw525v",
  "key10": "3fVZkQupr8yhrss2uef4s9h5YYJGbWmG119XJNAGNcsXdZ5FE7Sjsc3hy4qywieuABGZLZFN1jG2KpQxDz1SFGru",
  "key11": "3CPomB5yH5KAnPSr7DAdknuHQfYUFESwo4yBtPK18rPRqMxwfHd3E7c34YZ6GpW3VP3Cmfk8s6q2RLiTxdpZ8cBp",
  "key12": "3RLATRR55swrUMEkJyqZfa6id71t8iLwxqJmyNHyNLJkvGJPzKj5YYAXWX4G74LeARcgHe12CdMXXKGCEshARaxw",
  "key13": "2zkeok6tWmdnkzhsd7mgKj7kdP38R2WaY6E12MweYAKEkUkJ32vDZGgk8uwQ6rPigNmEMWRdmx55aHwqtEEuzRCd",
  "key14": "zWzrS7UEVApW5Sn5PVf2jZqHLFjt1Nk4xvGeSrbN2ToyjahXszkG75BSmSsoZ6vRwSqR4Pk8AcdMMSZzrJXwiY4",
  "key15": "2QVqUcBK5eZDkDTYYCD31RhFXu4uc5ztarWqcBMthLH5FVNPQ6P25TMkfMZogaLnmJpSHS5i7tN892eqwCqTpv4j",
  "key16": "2qeixDzaQZJkqSrLA5ZNRrv7wnVUX2udbCipayHtjybHzucxWSKsD7gPa2R6piphxn5F72HgwMfN22ZwrXbUa6kQ",
  "key17": "mUYbV38nJPvSY6jd3ff9DTTTViyGyjBnFpnWi9E5AD6UpNx7hoGZp3WxGpZvxPGjTh2gG3aCujoE7sPL2NRAK5u",
  "key18": "4fPLN15QgAdYer5UqM6nc9vmancBxkavPqRL9tfquewPaaXDwbZ1dc91YgNSWACExwdJSrSS9cA36h6KBq8GGMM5",
  "key19": "3K7uThyBfwkuTo1rFefWiHwD1pJzxNWgAsPbAChLEBm5kGa7DdMnVDX2Rt75FTJKrouu5yo88QVGZa86Ss6sQ8eX",
  "key20": "3WKnmWRQ84LMdowNw2sAZXCFgN9NLT3pdP5Ej6kAmmpWA9yf95gRSvCA2AoX3P2PpFaWUAmLh53KzJfAf325PSkj",
  "key21": "4Nm9Jsu73NAk5zcLvfuiVNyA7aA8uZ6jSohN966R9AuCVTYBbLMYb1mxF1HggT5wCE7XzAXahTyherKcghFjzXf7",
  "key22": "2tVknE4Cs4pt4xWo8vCPAZsXfNn5NBZVJoob7SQmZYM4BJUDmG2tk2DCowEMwTfrwFcczwq7s1wxfy1pASZ8J7gA",
  "key23": "2AxPNspAS4a8G1gkMXvFWUpXEQiTAgNf2D5yEsZFV9i3n87xkmWy3v9xQReeYpn3CLurygpiT5dKR3sjeodG4j85",
  "key24": "cbijHk7cDL9myVoXquYqwMw5PMsvNztauvrYxzCKEG31S4xAFie9cCVRJZo51gTRqeTS5NyzSdoAhpTCcoYbt73",
  "key25": "DMNTVT1NBFku8K4mUZQDfWtBz9RZy8FR5DUSveV9a8SsZa2ApMw3R45JRP14T1RZbK3m6oDNeRFWZ2TNeZd4RPW",
  "key26": "2a2XJ4dqq3BcQGiwFCiXCVbh9r13rezQLqyucqmcnMDWVqjtgpTg1RJyHq8yoDm1vwVQVQP3h38h27RSYuNiaTAG",
  "key27": "4rF6SfXf7Xa827VSDnhZ8LMMG6KkE37A4WGPjFrEyGeBbWHUnCS1hsFwjAtiDD8BZtm5wBkmuFRfhs3YQDMKb2Ch",
  "key28": "5Y7qfuqHRZNKVEBWLhdyaReG1FGACHcyiNxLREGcQcJaLnqTn7h3cyEB7NVAwvjNtnt4rTb1d9gg7CGCrtZPKtsG",
  "key29": "3NPHAZNA8CKVBTcUYGidhmGBJLRZGZ1Pv6EjWhcet5SrmBesLHxzEuyRznmbDh2KJbwvJRumu535pZtHFJTxe28J",
  "key30": "5wGCGjEmCpRpM4HKFcb8UCTx6tPtNssgkJ8kQ8S7n8eEGRetb8SSHCDTjbgUw73mEnF1x7uM8noYDuqShgNbQeVu",
  "key31": "4wwzrorAASD1Je3DkRxg5PMR6iqSGk1TtDrKA4vU9wrcV8VVHzqoPSTrhXzx8mE1UBDPuQ8fmxoKh2dwM2Lc5iZ5",
  "key32": "3jCQ4Gj84kGS37uo7u7QThQDnsTvRDerPUK99VJvdA3EXsiG8SCCRvwR6rhKATCBrPomMpYYFWPK9rYNrwUk96Jm",
  "key33": "2f7V1hXbthKxZ6cV7GN9zmhULJ453meSDMRDfsYXiBf6LEwxBcJF9XXJE29aRDBDd5CWeq747NGpTW9aEfpXaSMs",
  "key34": "37fPS4op8SPEfbhfZHaQ6aPwedQMmQFthKs2hgPtS97bo6B2CZxiz9icSR5rubZqwGU1aZqGssiwPbyNgssAzCTy",
  "key35": "2uJcRWRj54TKHD2P4dJ5T9C3nicvmeRxzmpJ9c1q6FPLWi1ZSyJz6MYHVY7SLpHjReoVCpunkhNDaKEERASrVb9h",
  "key36": "5wYefVNSiNcSQALLq5MwGJVrvjVqiDsVKkKKBxCpHvijetGzsU3VJJ1eg7GdRr2daXPSnbdUsyLHqGeWMBQ8G99Y",
  "key37": "WPEew4Njzh3mfsB3F5vbXJVNXtumooW5wXhgFcP3Ca6ZeLusfpnzCajMp2q1fVMSKFFdmYpEHTi2dBpf5dJ8A3i",
  "key38": "4Chjbms7AzfwMT3j2ZkjAzQJwQ7LRjqKKHP3Kce2q1ZUJcBTmhgAHBc6nUnkfYDDp1yNkBjhjn54Y4ruAyaMuVhg",
  "key39": "4DxbB9ibwX8CRBMr8pfuy34dgKgumv76zmnP1CqAhLzvecFa263r5mpgcv1VWvX7XYkTUf8ec3SeSHGTFcqVsTdx",
  "key40": "B6a5pd2urU3B8wXVRUsjHtwe7RGj98Q2rnkGMU6DCxvyzcAFxVNk5xHkQ2P3KF3mFxmk1uVHixYbQcWQLB5Gz8G",
  "key41": "2E97TPkEyochjgqxKXAWGLx2MuTpJxgeKkEjiNhsVRUBDH336Rr5Ns3VATj7eypnRyTaXs9GoTTqsGWwUR6Scefp",
  "key42": "3AjY39qD4kFnGjBvaYogFi4ZWorUeS7JBroz2eABNT7DNY6ZHJTpoUn3FR9SJZ8aj7Pycta5AUGKyHhM4QVRTsNS",
  "key43": "63TQAtzTidathj8mz93SRXJJzU3kZwUxJJavn5sFykFgfoxpspEKS8MKjnk3skU8ZsatyoTJNHwN3mZvyYw3ST2X",
  "key44": "2H5PXLjB2VcGR9EaYXyJX8NbFarwCXUCC2koWEmiYzgELaJUALxgFerPngYtgoHiCrBiuvR3f7Br3U5tAT5NgvuV",
  "key45": "32WZ7rsNJ9SFxqHhNveEgq4dhJREZN4CR77hEt1UgmQP3ScEwRpd3U2PPvFsjWyWGdxhQN9hqkccTAU5Hzq7Xpov",
  "key46": "3qyZ9j81Ta47NcHb8BU5FSFaYp3rGKS13rL18ASQTK6K9gmSv8f2isDEgEg3ydZoUsGGzmwFCWiZASEvb3rSTG2B",
  "key47": "4EUvhRWDT3CGoKZUCw1p4pVSMGVmQwFFAdp7JvL26Qr5Q3wSnzGn7gxdtFQGfzY2Vn3JWVF5zGrztVUqpYXp79PV",
  "key48": "6736UY54amZusbRGVWxMckJTc9HZxXLUFjcP6ivpiS6KVb6NQpB76ykfPtuFczJ62z58gHbNyiGQF6cNmTP7zGMm"
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
