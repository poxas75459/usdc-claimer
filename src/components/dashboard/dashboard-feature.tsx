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
    "7XRUnLaSa5qPChQzsKvraBdAxKaeT1HL8ZeGXYg1e7DHU14zcQG2m8aD2QYDVPxCmJptyT6LK3gskHvPXfEHH85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxUrKDxzUkhzTCQc1cyHvxFwgoJCj344Gd2kjqv6DRbVbpuAB7degMVhZFJH3Y6jyHvQxrGdvvqKFtY1u6NXeLC",
  "key1": "4iMeprJwqNN7cAEwiCSghd159nY2edib7sB3UEwNXsxTTvmi2roNC4ctdSQS2NJJF7UXtLaChF8kt3ALBpxXGUUH",
  "key2": "5dwUUhm86Gqk7MmTwdjZ38dXw7KngJBW5pNk3WZ24Ywe9GNuM5bub2BMMhEzdbhuQargrzxupjP11DZSn9VN66PY",
  "key3": "5ghg9LCdkL1Wx1GN48xRqpkXGVBigUcbfRVunpinmkyC8jciW2fevWAibV9BMbNtYCEKfKcinpuDLDvZ3TtLdURx",
  "key4": "TtnrJVh2m7ZS1Tfi89C6wbenNVQZYq7A6nm5vbLMTi58RfYQhhQuo7r6BjqcJpoUF7tUkBpjgkP36gfdvFsddPg",
  "key5": "9aiuDuddgVD1bNnYQJeXMynarVqdTiJ8nLGLXfVswLZAcJmkoZ24jrKhGgGiw955ThKkN1kYSGxnbpsmo2ayUHe",
  "key6": "44oAQ1KD4ycgbMpZ17YDuFLEATfaLzisy966bZo22uGxX7ZVWVQoS8S7rqSjhZ5p1rZYaaHD2nDLmjMQAEboanTF",
  "key7": "tWd4Xk82YVF5Cuz8HvvvcVne5b7Q7F4xV3YhoAEXN5QynCwm2MDyJBC3ognYiHkxr1KmZ63iyVzmXoirnMWbKgY",
  "key8": "29PgytnngLxidW5VZguL4DM8dqPS7SjQXX2J8rtx35uUjhscdgZmtDiZ6dWogkQXvuyvi11WpVtyXNdvTBcfEpEv",
  "key9": "5cXAHaDNZbazBwFHE4DJxWHmQXf2pJc8fqCAG7AQN1E6HXJ4njd3ysBVCj4qLHL9S1CVBhPw9Lg3F1wJqpKQRxuN",
  "key10": "2VYpmTLqTJTuHHqQNnXRyj78VG8kXibxM4SLyopMeUbeF7rz5iFRhnSVMLxjv9pxd5TsgDdgQmHynUEf8bnZbpnN",
  "key11": "j3KaisKVN1smAkEwGWPe9EjzyLVGD8T5YrVgPeQAjZG22AhbMVMrYq2hFugw9PSPCtSRM2GqnNhZukCNtDrGAqx",
  "key12": "2PnMb44jAbYGPn9WG734suuupizVdcRVkfxwH4WHmVpJckXBACWiErC3PmsG8R9XrumFkQuF1nwFzH5y98taix1M",
  "key13": "5o9mz3qaNdWCj9wuoaTM4B2rPtcJ3WMbJgMeL6n1HK9d33aJgdAyb5XT1Z8gaeRXhBFLKBW8aU62T7VkQmsmEsDv",
  "key14": "3acNsSq3f8ov7JocNHkzszgWHYA2tf1gxNMom8VxjFEis8GBtyKT2WU64EWTiArsPi699rMXtGPiDPq47N1KXyHA",
  "key15": "37QbfrRCvpQRzXJhoueGjgNjFC9Qww8wgWsoBeiJbq6f8SzPCVTb341QnnHd6iv41gmWCSFyGsi4GXgzHPRkTCef",
  "key16": "5TUs1i5begWDdmJFCxjGWxPZsqvAxNM5nW9xHBhUdhEjecDbRqgMi4asNtfwAu5iTBXDRHzWbqfEZcG6bgAxksRR",
  "key17": "3qEpTjxoU2WVNSh81GKBadFW5eHvbvUXagJTVCtjB5kbrW8VbMT1tEodcxR45iiT8QfxcvnEnFbab6ubh3LWPn57",
  "key18": "4VEwoK7hq9xwCKACXpXzedomEaU34FJUzvwnjeQGrVf8od8CJ2CP1zUhN4jqEosRTk6aowSqK4g1tKzbQE8vY5Ty",
  "key19": "5kYPvYVJBAQLuc3TKuNpzCftpVyQzxLT67QQYKZF9ALkyn7hpEdmiKAgioT2HwznkA324u8Kg1zUcZarHtLN2Q7L",
  "key20": "42UWNodjaRAgbxeaXrX6oSoZ61BTGWD6zw6VKFjGucgiBTjXTw1sA4GYzX4BMtaZrXxVsdj2iFVDFqpQXfFdEfFW",
  "key21": "4m1Q9UpGY2rTKBdpVYU15hLTrtemm4AmNtXfLP2GJmgAgRbyHyaCJccBAvdqTkJts8apsycs1iprC1viVJLRGiZ6",
  "key22": "34KGZA7ahJb3Bnzuk22weyWWcnfmW6esnNPNG9YgxtLRCjXc3pyAsrsTPXK1VR4L6zXmDh3D83YDmYm9g9ck1zqk",
  "key23": "27nC6dWhURhw23hpiwiXzyd49RefxNGr2PbgTsZGSmabCfNUC9sdFi8MALthoFXmFTyQsE2YyrwXuLs1t7dzZ1Db",
  "key24": "NLcXyTfscn6dbxiy2ftY6eyYKBQrZYVkb1BKPHY4wAu22sm8A89HxH9ERt3AiQMknA5b7cq2LeBfk6r3R7YHsxj",
  "key25": "z1YjfJWghEJB3AVWUJ5Q7wcJdnMiVMwYhice9D7paJUbqNH1oqo1iFFvzi7LooTQZpkqEbjHsZEqhcq5118qBE5",
  "key26": "3oWdso7q8kiSF7e9mAnZ4gbMqvSWk9osC3os1drBSekxomqstvcDiFUhCjYJfW8wLBLE7ASK22x9Dk4yFRZmU2KC",
  "key27": "2vSuMAiA4g38z1QrMgfAv5uDivZN6RzjAQuDL1x8Pnw1QFzRYScEtVaqcySroYrxUofdCvUngR4eqw9Z1jX1G128",
  "key28": "3yHKXoJVLuemcpSPE9MHYYwaJNtiAxrxxhMpUBqJryry93vsN84RwbuHYntXRoL47kN8VHFkF21cGLUZZ3girxzi",
  "key29": "2M8KLX4YeFWdoMyXhNnYUfpdvLZzwPaAZv93YxUaS72irvp8vnBPUWiUrH5jc49aw2wmJCLyLPPZVF32xhpBahvb",
  "key30": "475qwqtaoUmcH9zNdpGVaVJmaTEEmJMARaXrYTNqfmjUjhuyXHU36qwLerHS8i4qEzMvVSHRoaSGVtEUexCFdv2j",
  "key31": "599pvEy4HgYCf9HrzPnm1JshDALRzishBFfpK7jSxcDedgknVHosV2Jmy4dbq4EFqSEL6GZ8fpaauQU14PnHA6xB",
  "key32": "4fCJMtXJXob4JSFsMCe6YhxWowjrVc8HvNbQko4cJcyMxAA2TGC29U2ZCQ6YHGZdzXNJD47DAyNL2pkkM3eoawS8"
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
