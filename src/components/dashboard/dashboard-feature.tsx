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
    "2oEe6bhzm2zmNfgrmvXT6hkRBtBw61utswh5fiDrEkJnV3nqR48AmMdALsAEDeAx8urEJZUU1z4iFJ1ZqQs86cKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFJJ3rMH5ws1FkBnAzDwozRFjJvEYjCQbLESbaxzctyTeMPPc4rkDEhmTSEJdJz51KjGSQ7yB2KKSyVunyRidGu",
  "key1": "XNkyPNNop5K4uGLwtGopFFwpaQE9FfbcZHSmm8Mfss2sWSn9NKi2FpeD4tZ6o7ZYSK6PFCgiHCMryWLRhw4etgi",
  "key2": "3o1hhiaTUBTRg6HxqmHsDfV4RSU3A1mt4MqkMS3bWKSJ6ybSvcrsT3zicM4LEgWWycret1hJjpTSTR96pyc2swoo",
  "key3": "2PMr9qHWzqTHnPrdgh1ysQZqeLoqAZVoubxLxTuQbEgGKtBomWEUvFigzPFBx2KzQHrRoDxfWeyQcmjJmtAhzEUM",
  "key4": "5M9EHWiaNALMnAy6sDeMWhJzs33id3pzcopNqeinT4TUf6aBAXvXPFWjeHxtuQUmLUQkGBLVNZmSwWFffmKKXhaa",
  "key5": "pbTYwMm1RV9LjsBtzPS9hzom5WuqRGfjHacnsSVmHZ8jpaAK5TDis5yum4gJpx32q7VoACJCierxYz7FGBjmCLU",
  "key6": "52FRZV7KaqvPu8fYpns799Jfirs8p5TJF16d4Us2wjHuquo544qXnFqhgvxXAFn2GSsr2v4NTdeJjaqYHdJLVS3Y",
  "key7": "5Q94aUdd3cbCovHEUxZt2yb5eNcLZn1aonfTNfxsQPAkh6cBafSGQmYQ176aVHGzWuZ9ibBeFTQfRRq2YF3KG65X",
  "key8": "4PAkQJL3GJSM8fbk6dMK2txbuYbPA5yQ3isH9jX1vMrBVw1tpRnvfCjvADZon2Zbskv2nV1wbgKZJJELz3vbhXhR",
  "key9": "FDWPVBeQ5q7JHLNrq3oaq1JkGaaT9Lt4FQDMinPqmsP3chPZarfmQ8F2PDVnhT5EP8HesG5XsdsdhU2dZCVJNN8",
  "key10": "4WfFkg6S4JwFeEPzrw2C3pJwsrSLDAzPAbYNzoB29GnJfcBVZdpMjP8tzNTELNTjtmYtwpRiDJ5CYtQEzEsNB9CG",
  "key11": "2BvyGx6De2hzN4xjsQZZFE3Fo81LaeRheV3eDUiGBBZoPMUACAA3uiXWcwmQUh7CJjkHz5jfCiLPRViFGGfbGn7U",
  "key12": "33iPC2N3td5qpowUEssB2UuKiMjSBsmHX9bcJDFSfYp8f2b4mTdzxHfn24r9bEjvHSo1btgCWwKnh9Z32i5XiKin",
  "key13": "37g6UCw8SRzShDQ8dLPuV847QRJ5YwYwcjsCUx3u2kMkMs3SqAP19KrVj2dctdEmAHpSWpiYgJq6UFysxuvakzEV",
  "key14": "4wEke8snATJjVvXxWHKXExKn778puiHGnPZH5CDNjovfB7dxGc8cenRJ8d8iaodjwt7yb5vxJzpB2h31f6uw7k8a",
  "key15": "3RuewZnmdzQhfXt7EdY3xSkcjSzZYFTz6dpJPmsyACoDr7sMYqTeJaJ2MGdUuuFPVGHXx339F9TSohNPPBoz5jxa",
  "key16": "65C5jw72u6K87crUf8dmRTbuShftQK4GwYBpytyfb22zQDh2PGmHgdHvStEJjGGW9gHmyRctDXghgmbAXMMbF3t3",
  "key17": "5xPX3pZUvT1rhwzZZ17QfjBpL8XPiY4fzaPjGGmdhVh8q7KqfqdFWUNpGEu4Vx2w97F3iDsbFCX3evaQmCkv5Dci",
  "key18": "35hrT3vSoSqT4JNT8H9qy5hB3P44Lhx7vfHLDiNW9w1fehzADGDNgg6kLJBVU1fQ7BTjhKYmhoRyiMV8jCydKS45",
  "key19": "35FDHEhxX3eyDMtPSWkgh1PzcTWeo4qQAmpVahW5VuwoWPVQEgkJNvMssiCkcpJovqRaYs6eBBgPc1AYFrQU8RK2",
  "key20": "3pXmvZNAz2t4uzWhmpidrhQKsT8jzf4tuAdJvKA3d7vJYp5rc7DEPHknTARC1MfFbyArCCCb81GoWhAam4dVxgjo",
  "key21": "msZHsYztkh3KQr9wmyVPn41VNhdK67ymNqP2RNkzMM4eHcgNvddq7jJuTn49WADguQLwUdKoCJVUCZYD9ELGdn7",
  "key22": "2SeUshxW26nzAyy33AZRJpbA4c8hiHg1eGehz8QhNxPzh3JKNgYZhEcxnnRoDRMkXxqJrs2RpZZtRgtdiSVUb59z",
  "key23": "rsLs16qAv4qgR7eZix6GE6cvKcbw5xv1UZsWQgRxrtmw7ubQ5TXfCmCAo15rXY8mhsL1EgQFjGU4KcKdtiSxLF4",
  "key24": "281yY61JaYJCqDD14SmMZfMxeMSQsN3QWjsUgZpgQRu2z556A84D7WPbLQ5dd13tiMvX4RQqhvinos6ihvVzLhQy",
  "key25": "2eShoSKAWPvWPXCGdegg7LJyDU4YfSuSgSdo3dH2PTbLUkGpRRWj4gVZD8nLaprcoqWNxMBv2fvbnEVehixcBeXY",
  "key26": "4eANBBKVWN8MfRbgW3ZHpbGW8rMzgS9aacPWUrVhxHHPKN1U3NutAJqZp5grDvHiEFSk5T49mqGc1qqX6vS3VioC",
  "key27": "4LjiVFXRmQqUp4sCuYfb6SRCKoPULxrGi4mSaeqSH5jEN2a5riJ6moFXPUp2JwpqkcRattZgh6ropYATVYTmxLgY",
  "key28": "4UErz8yAfsxWc7PtV1NZMSiHKPVnmCTqpGEZJrNwP3t3Rv136TFJoCcepXrYNCeBfNuVJAK7BPJmGdPfhyx9frid",
  "key29": "RDmaheFKB5H6jGGsrqD3YSxCQQRd3x5SVSCofMumRJsR8Yc2jqcLWLHWpb6SZ3ocDhZYxkniwEjUxbnqBbKXLgd",
  "key30": "5F7ScoUDiuoU9DWcT2Ny6ZcVXAvtAW6PxewFpNsQcECJN9f9ANoUrW7Z92ZB7R9kwBXECtVqmtR5k8Fxk5tYNUgA",
  "key31": "3YRSNeHx5WHF2Kw7C2W1zYnr23HfTtAHEry98YTYYj3LyVwdF51agQG9EdvQCpzfh2Toh5LbpromEFJTG7Yrjymq",
  "key32": "2W1dHNBw4R6o6vz8c4wARx2TsghYL62MjrabQdNkqeGtpEbPPgnJioNRFcK8pVT3KXt6dEkCCWvMyfUFbNiTmz7P",
  "key33": "szo9FjxMEpFiHbFXBavBeC2vZB7tKVtMNpRsGytbajRdZ6RMCgro3uhA4CaqaExQx3aWhFkGdSGsHTkewZK9ra8",
  "key34": "4LEZFKZ5XNpsb9wcSB2Uv6FtgMUyT1Zc3VVYMsobuMdML8bi8xsBeUstm5iLZfsaBMM2QWVYxtaedfCKecEbk2d4"
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
