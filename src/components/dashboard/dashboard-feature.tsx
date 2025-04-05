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
    "3AGZ1pFzkUUJhihw1r6DACXs8RPKactGVNzwwLvnxUSjG7p4YM3trioVfhH1fejP1uj8GiH8tVbuHfmSNy43BHdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pdYSJ7pvbRTrDMUBP9nSdKuWxdR1NN3ZcUTj1Kj8sLU7MXXywjsaCqAy2eaWLJ4Fx72xJbpCvaQhUPsandnEtK",
  "key1": "2ebuXPN4M8X8LdMAapLq5dZDRtXHL4C5uXp2QVVELEaQZfkFAPm17itUgffCUPz81htxkcpm7F2ANHwc3zjEXDcR",
  "key2": "24bSxsg7aVdcGmQLahVqKgaEqrrSWKqRZhR2WTEuDyHobhp5szV2YMj2abWkhxgTzrG4v8N5seeUN9oeLVXCwVBi",
  "key3": "6QfV8d2oLX1ccqQhrFyxU8gXa8xUbss3Lg9ubFERtknudDmnMbVJyyQNCnMsFGkbS3HxWwfCNKCikdbvwawJ65r",
  "key4": "3U1t5Q74otziKRhHpapFkodfeJR77bVd1FfhA58rBx7b1HN1ruLUaUkPeF3ihqq8G6EDw4Gi3VRtrdJVqLPS3aqW",
  "key5": "3bQwFEJPVrC6qa886xiXZXviKd2sDSMg2xnq5Zw8JvtWfd8AmxaTE5etozyBo9vwXN2jg6SSg5PxVFV2xhrfeJrN",
  "key6": "34pLmVf2dfHbEMwX1Ac2QzgJ9ZUSWrgZyaSWEj31JVRK6ksNfwa1aeiZyjcWW5sQbACSPzVHZhBym8L5roSnxCL9",
  "key7": "45BkM7rK8axx2jhNiehnfJUijn9msnrkMKJ63CDBwbt3SWresq7cPU4bh3t9tafnJ1AUnBuK1FmJXJ7uB5ezb1D1",
  "key8": "3BrcsZtPdVWFbCvigbUcrFG9vcPmyCcUYaHANLN3ccUPTyTzka6JESXFyBA7Zv6cnx4Y6U9sTdkn8Fa81R85e6Jr",
  "key9": "5uD5KaHderS7H3Pr6DZhap7Kshe94UizAYmgSeAxRdcewaynqeXuWo7srchQzWfn2qkSJsE79k7DttFziXRovgFg",
  "key10": "2vfM6L9EAj6dikkPAKZTNifFyjYFVrA4CiFsVgHGdqekjGAQiV2MqzC9P9pYthvN6gxhTzifgEYxBM2r6dTyggwh",
  "key11": "5YtGzo5AensGx8XpfTsAEemJ9RQKKyWr24zUNVHCygVSCUykE8exqXNNDYB1s2BZ7ZyQukym5QLTHaetJWKhVodd",
  "key12": "5GpDbx41nc6jdEdShHviyuKT1BUvQqXVZLyS3dViXu1tMr4TKffi4VEwv5rdpTGFoZh7rowL8qRKiu4sac6kXDmy",
  "key13": "QTopDH2jzoun99wtFkVBnW9faUHk8WjnThRnTithJte1zLPkv8gPR7GDytQzLTeqp6R1bJK8AAWDHvXbBDEsw4H",
  "key14": "3E86girZMCN18z6bh1wnQaiZypPhTgBGeQregtPj2xFRmLQ6hqQwcJ3sn7DvEw6bsFTYKSN217vMN7yTNb7CWDuE",
  "key15": "3tXez6bE4QzmHc8SWyzS1wzTdGLUameK6nxzPSVu4hWmocfFSFQWFQ5wgo3w4Tyi1eKDp9qNdX7R2MmEfn353P93",
  "key16": "hrzJGJsLThxouMGAGcTMzex1JtTho1GRimQPfHLSVoX6hUD6rYYD4HMc1rUX6UBTp5WL9bY7coC1XAuv15pbqSS",
  "key17": "4WFLNz2U9WePXo68NCzhaZdDEXwiphKj594TpCVzaVj2KqU3iM68fnpbrUXZv2fVd1HKVX28JSweDYxwGMW5qRdh",
  "key18": "aux1Di4a4m3Xhtg3NqketwGnQuuQsjntaBGg1digLUnFmEjCAVfm6ZdXBJthjJxm2CZi2VD1XSE9Qh1KCPWjUB5",
  "key19": "2UesU5vkJ2Uyht6SNhkNRzM1G9af8ufQQ1QyuzarmfPvoXrgdCDCTXdsjT7NZNRXgR4toFffbj6o341Sz8j7ve9L",
  "key20": "4Ag1BT5cztzHXfWxpHasbQEx8YWQC6ZeLgmFnb1e6mb2DgyWTepk4suGc3bVELr1Sd7MmxYrgFHsoBkdgo7SWcCR",
  "key21": "3rnrNEPNWYXmb4pCUQYsY12mh6TeNgZy5mqjuiJ2Capwsg4gChyooNYfBDrzfnhu5nQgrkDFX19P1QtJDni81S3k",
  "key22": "3KvqfyxLCV2aWsuE14Qe6yiQKSaDcoqo8vdhEnptQHyUsqbGXJf9dTwqEmYrW4zhB6hi9U6wFWCJ7BPY4DMrJbjB",
  "key23": "2QJ3H1h2Q8MJFr1Qf16RFeZftPkzZ7tiHsawBEcRsA2XmSDc33Tjt1m1PXPnbjaEYFkrgnUbRNGNGGMd8NEXouuz",
  "key24": "A8AJtB4qpqMCwmkvZJBkXtoGK9yTQyoHULsRDLRvMUb7DXMzpksafmwbR5yTPiEwxwdEXzPUanxGxpp4A9sUATd",
  "key25": "66e1oexZGCjua5KSeS7uHfjJU1FZeAt4SL8gqqnPSAjAFNHzzKKuLiH8aRPHd9jnmui97wrkAmD1iBBw3Us9i71D",
  "key26": "27b7nCvV841dtNAuK6eaRZbbomfm84kSp7hMtgvVkxPo3Fjn9mLibQG4Qhvf3McvHtVFeJvuPAEfs4MWwGHUgesA",
  "key27": "4y62YGoV6gZwPHt2An9vJsCVUUnYxRbt1pinUKbYAYMjSRnQQwG44h5QosJC82wVgravHfvWbjw2Rf5zSECcWjpr",
  "key28": "5K6vawzpjrqGAmpzcRyecmxG8RvK8KoADyJjn4AhuTHAJmKkDvx8RH7JBRHaSgmA6hY7h3Ws1M94KK7NCYJ416t",
  "key29": "3Y16wsLWPf1vYdm6Xpdrwt6bpF7vcRznWupJxY7rkKFi1e47yxLth32nRC4rdZQ7Zx1ppEEwQV9irXK4oQoPEEfE",
  "key30": "drqBqEweaa1u1nteiyue9jxGEUpQv3ocWqiqHRVNbhs4Pnr714JzZmHTWpv1aPshMUjY3iXkAGTZRmWgb44QfvD",
  "key31": "5Vq59nzSQ2b9CcnpxAzD1F2XkoqvFrsHXPGREC8W3QPYK1Zc3fmcSekwkzsaX7iSsos2ReWALTuVK9g41R2FdUnw",
  "key32": "mqWFUjeRP1fUR6zYsCYS4rSHaNfHcFTdGayDby3VYbrskXrMgPH848AKixMSdCqURyo53AEqVyekHnLkpASdScK",
  "key33": "3a3afmgeXhpDgyCLWNA55gDPfEijaoNh9kPjuFFJTBg7fpdLHTSzUxugto83BApkGboPUN3kDbnDKvWQ3V485oq6",
  "key34": "5hJHhqXYakwC2WLz5FcotDFBNtR7aWANbWnw6tY8ocBHaHa7XrZWuy1LbnARRZWMeMGSRG1iCLuG874CRhJhbenr",
  "key35": "twD5wP48FxPDUD4LUueKQrA8PqJDqZCFJ9kBNpCWfGUKued6WW6jmkjiKrdnRqK33MvP4pBRwyvUsTjxm1jb3mV",
  "key36": "33eGbEYAj2wx37CnpT43BxZeZeWNvFr2EnSNse56bQkvj4d7qoAqdkWQ8meKN3vjmNGuUeSefcx9WPZUHA16qrcF",
  "key37": "5MLerBYgy6Pkd3JSjK9UCLvU3oCWANdz5DrSPPPgGeFbxa1THAgaF7SjeD1icBxqmKQuF9mSvH6xUH4uBEJp8TnB",
  "key38": "4cufXXUTMX93az2DJYENSfft5VPexX3ZwrXkpkjJJ5D3LdKj4rnKCGJSbRF1mk1PnuFpgERsouLkfEZ5U9UZDECy",
  "key39": "4TNaHwLXMy8MNsRpcdU1o8Fzb4wM4EGkbJtGQrXATkn4PA7rrsMmueeqXxQP6mHr7FQ4CZiJpxQ9igoR59jp9EdL",
  "key40": "5whqEq3Gig6SZAqSsVAxF7sXujkH3vH6iUydQaEnTbudcuGc4Vvh4qf2dq3tkv4u68Nsc9wqRndNFXtGn11Q2HSy",
  "key41": "3T4iKwXvwsHpXkrvZiJWMijLiNMiuv4zRobAbbNxeCK39is2uAeHL4nUPAEHuMXY3yXgmgGx32C8s6tgRPDBoeZq",
  "key42": "5HkxSLXr1kNbRcKoywXSWx2dzwF216QToQEA1HybQN12ZWPkWATLYx72cAhnmd9v1XFvuZvkanzxFj4jem7VNaK6",
  "key43": "3CcpX1PnVXXNgCFmCX6PKJ4RaSvBAzjFW98Baup2wUaNHW6QCJoYRhTnQdCRZBfngj3x7grzC2dPDBsaBgAc6ptr",
  "key44": "hksmf1JsyhBuQH9vSH16XnspJrP5oEurd1myzYYfverDCgnTKrLDLKFdudakTA812p5v1VaTEPr8qaqpwsUkZwC",
  "key45": "4JyKEpZ1eTumZ32iuQZSor5zE9EFohRfA657dWNaPLpLvJhHj1Bke2oC6VEtgTYK5kKg8Gok5m2xDkeA2gWJry7Q"
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
