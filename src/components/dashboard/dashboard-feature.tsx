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
    "5kM4S2FmUGGUnPvsATtRSkrbwuQKrgJ2xL9ADXJ4rVYzoDhQXeVViEm45S4unkN9qDAdbs6e48K47bjiYyyXQrMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iah46jjbtCyAJHYFhte3E7H2hDrdn4xGtF2AKiMzWydWHaoUAz6FNFyRWMm6SxJihHkiZ3T7hZzzX4EKe7fKhKE",
  "key1": "617ANXXUs4e3ZTFMBe4GMijgfyue33EDcFF6J1NuHP3gZrdEx5ByYURH9uwPRC7rTydQK7JgNTJowfGSDGLu8YgB",
  "key2": "GhFY7qMWSEJ9RXCKZhqputr64stC1nzbqkB4J96bbfXhMUYiTvQmXV8f2pB65ADAkiiiDTtePgFYDwtPZDdHhRR",
  "key3": "4aS9mgJieP2KTGFyNDast7CvgK8PqBQ5pxK49vhp6gc3ssF7tfGoZ1RQjKspdoBC6Ay5NQxBKnkdjF9YFtYQdAWu",
  "key4": "3Kbt5mdUD8e8mu7t2ZQHunHgUytwM1U7JZdsXtqngsjEq178PALYUakXmto9rp1YaLJ6bTMS7jZe2Nng8jBRPWKs",
  "key5": "3m5AquQm7RZ7kiRdejSPgWyCBLNmHJJrz7MfNYDwj6xuRYUB4zFWwHYoPgG1JnbkUvfx8dX4Sdt11DctHARvRLGa",
  "key6": "9JeMZfnBHqJntU8A1x5CzjotDAjT3pGLVLTQQ7NSQQLkFP3qAopifkc5GoMvaSpDSzr7SyDHc6JxPqRdceCdN2K",
  "key7": "66Yi1aJFzsoyzNKyhHQeEuvT9u2DWmguyS8jDi4mF4oKWuhJio1cj7AEcamgEQUdrEwNC3a8WTtXJoz6tJ1Fx8qc",
  "key8": "2TfJBk5mpJ8NqgAibUYjk9sVDFJjsdEDrreX15RH1aeDcQ6t1vW9NCqhV2W4KYh1ARXAKQwKuW7K35arhxaitZfr",
  "key9": "3J1N1jUgQkxf3tJnjirZNqmDkeZn5vonvXg35JTvBdP7PHUkyLdNp427zFyh1Vteyq17RJCUaC8LHR3CSLwt2Yuh",
  "key10": "4nNkV1mmSGndP5g89uoYUThDASQUcPm4U5z5wsWWV2GvpQsDSdGWRyzVmpDtSgabF17htz7r2wnUHTy8jCN2bKGy",
  "key11": "4wprwp2KooTTcp1XrnRgcQPs6AgYH1cdpvAt778BMpy7E66ojXRu9QVRbG5s3Pk6MFUwNGLW2wRE3y3aSJMLbvyx",
  "key12": "nGNhQjRTbXq36FxC2gbsjRW9JaVRWeiNdYATc43RyRbTVN69PbMjAzpZCdyHFmDtLeN7GzrtoFzmvTyzffzdZJJ",
  "key13": "2PAPrz9DDdEYLQVwm2zxyxEvyDoq1KNv4Hi8ESMhVH3JNieLGjL6etu9S3cKL6VrdFz4pBb7cy3AjefiKjuW1p9W",
  "key14": "2oPigADnDyh1s38pvp9jPh5GWK17jk175C3da7Q1DL9DaRpWjgN7Xi7z176Pe7vZgVynrNrRHoKia7ePcs5yxb2y",
  "key15": "4Qu9TPWAdfdQrjXRedaJyZtQv7Vasfae8kdRst3UPE3Qgyj9qrB8TdrJjUYwkP7s42xvspizZWcJtmpPX2C4aQzf",
  "key16": "279EWeZHRg2hFLuSeceZHK57RhcDEBRLs8XASGBfGRBbGNeKmPzZoEUjwwqDU5gGYd3RnHNZ5disEMuKKh2cR2SC",
  "key17": "3roVeauyD5Y6sxLfNAtUt3PwpjBBfB1E6WrnKD6LBRnomo9UkGsKR8W85tn6vzdAGN2yYBHHcsV8aCMZK31NUd4S",
  "key18": "4JZDZvCyZLzyFUpndawNkZX42HV7baFfWzJDVi4ngeCzp6XkLoQdsEAUN5kYc96HRN7AmGbdS9Gm3m2oGZSGegfE",
  "key19": "42UQJyo8KF36ZpBPnGczTxq9k6NdLy5oHgpsFzWrEN1ocxoGqrtd8Vv62kbY6ZnMT6LkbYMA8rTuoscoDmtnKfss",
  "key20": "3hD4TwHyMSaSioPNzAx7LDbZP5Q4ZCRHYSqaev6ucDxpD4keVGVvyEfwfPQMGLgUUg3MzrCvYwdGd8M4vnUHUxR3",
  "key21": "4942DDJBUcBvEryG4capDQcbmKuWmqntmb1VPbgCpu7rH1WrzuLXTDkWzexVecGY1gxPXNpgRT4h4nau5bfbFWY6",
  "key22": "5guLz2djF6EyjGKb2MxfBE1pH6NDYS92z5okeFRJuXsUN5KcWCg58cDNTZZstYtbWrFuHKF3bSGPmAzCZsfDDoyL",
  "key23": "38DNh3xWSgo43wZASq1vqBXPzSgdU389P7xiwuJ65fjEqgK8u6L8SVppxxaP6VobUxwREpr4Sjzs8TG4JuPJppKJ",
  "key24": "4qUmLjj81qmkFTX5DzDGz67hhgtNLudm3z9RaEnvjeKRnWG8qWpWdazJ945wdwH1fwgVzoX2ajSi3Yaqhxb34KS",
  "key25": "UkPYsdhxLLc7S6GztDNFFSmSLt1eBBhBdhii2c79CLmDmWWbbioxGHsV6P91C1SCLGoCUywpRcQLX6USexJ7Rvq",
  "key26": "2Aazs9TcxbjzB9p6Qdqj7BCBByNhbLi3x7jWMcrAMkEqfLdikVNn1oHozhMgkac6qxCHCMqZtoRztgXDqLCehXtZ",
  "key27": "36mXoHkV9xNALJ9cKAQd4fDUWcAEJtCkbqwpZsr5vtnm6zPVRXck7nM9crvpnYSpqfbsNBSkNPEvS4KRhge1kzxz",
  "key28": "JLS82ZdPBiVsMdFLPPUwqDvjbEpKs9KhVJtsxrSYmri8q1s1p3KAJUSW52nq3LUJAwXP3yV5ccjs9om9iuYfmKR",
  "key29": "uNpF83HEzRp4SmXLZE3riwqtV3a6Zupk3UxdQBA8KpReU4bfEsoCMFwCNtusrmiX6AdDG2xmJYr3VnhEqAHnQFq",
  "key30": "46m2k9jJzyys5W9rQkdzkEWfipjZuYF3Taksmt6MvC6va4aynU76H5rB6LtrLahrHBXACetAHT2y8SZzsEGjjiTf",
  "key31": "2TwW9wmHwwfvogMJ3L594zMxev9Wna1DUxwDM99kScfLtXUxHhKrQUEoF2yXT9wMNR82cEtdBCbNq2dHbLRDybBM",
  "key32": "4A5zFtAiBeYsPtiRmVGNhvVbDKk5wCPp5YDwk1QXjrXDnQ2U5WxsyzjKKRLjLBCgepoVR8K82GpmxHq92MioL2WP",
  "key33": "2gmoXKWke5SazJz5YNriyDYW7KzpVB368ehxf844Yw9NUvCQ8jSrVect28G4jDm6f6cbsX3dd3yANzRHP9UCKPJT",
  "key34": "2YAXpZ8RzR3ft4wfwkTozRtV2aJkf1Kkqc3xo2fv444qH86qS519yBVcG5XhtzkrpL1ArxQxc6vJwYLq3yE8mste",
  "key35": "4q8Et156t91fuAQH7u3nn4S2mkPbqM5sBmwR9H3mFJaVBBg4waj33Vu53MPLzRUdz75r2s1RPThDZZYDCsKSqWAQ",
  "key36": "3RrShP6V8PLcgvpf5P2kvrVsRDECQPbzTnSqkETyT2gq699wrLydoEM6SeNQSCcs7RL7tkKUD5aruV93BRUhMvhq"
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
