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
    "2RZWAzZ3jpzHRskZ8Pa4HP9ZefJxek2eZvinotzYjRpjfBbJWuQVzEkocVFLMhCkf5wXSXAQ295qYQYMeiriAG93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35n89TTz4u5Yd6AXmYZLkuWfoUzSvDeQjoU7bFgjnnoBrQNbEd4tHEDmRsw9vzGARtuToJaWFxTqhdNKFZEwhYfm",
  "key1": "eaKkwray3ARUnZHU3KWnLSapqHAcJ58iKCT5XM1tfMoQTywnEDjA4Hyh4pPxGBR8zy3uUPR2rrfF58KhxpSx1Wp",
  "key2": "5hgKRvbHv8d7bqjoGhXfPtKVdcf91x48K5dKPG36dhG1JChhYAipngcdBXGck1RnQ7Gyip9CwfVD5RXPCyfWF3Ts",
  "key3": "kCoWHV7HKijWvHnqWVVFhoEGS64zkHWi9vMgWKwdFRrrL9ktGeWNxDxGkJCv7fJaKjMXFzufta6kr1UscqYkHfG",
  "key4": "5dYWZTbbDMgB3brW23toe57AYSx3BxVrBHGAd7bcnogVvoozMjpLMe46D9V5zuqtVgzUuFxCdS8MNbXcJab63QJB",
  "key5": "3jTX3VTwo5q6K9TJrN8L74j3mfQkFWgXf1Jw1FWpsHgDt8AW4n5KWCV2XZgb5FFLvtqDXduDDeC3n5xB2GfxQD2h",
  "key6": "GFdtoGZiDtKSy2kAhbJ8W7DoJ119fZSWDbh1Xng3CU4Vqd4qKGbuYQZ4P9dE7D9zoEsBvq1ERFB6BSy73pjLq4i",
  "key7": "5KcWGutdXFUAaMkVMYEZu3swCyePq19Eo6ZkqZw7xJY7wCHs8KA35KjVoJ3f9s955YAEYWrhYidJLnsPcLZ8Pb39",
  "key8": "434qVaQyCWdLwZDpyMa8UVtLKCHpXv68nQADJGRDCbviuk74qy1zm1YeihNeQNkyVUqic9G7bemYsEaMxWCCj2oZ",
  "key9": "5U62RommVDe3pU3ZGDnPucZzTmENoR8NeHBdwjBc15Hmaz4r4TT5nS5xaniWB8mUHji4JL49DMvHRsfAgKv1ff4B",
  "key10": "uY27wUq5x516Q1wC4WwaN7MehyQPy5cTTJ57wffTrvAFp12ykndbAMyDAmATzG6LYDUEkgWVpnZpCtd1xeXir7b",
  "key11": "2bTjVAsgaevcyzZ4L932a6bgApgFwFhoDrtucuqiKtz9B3PNHcgtnUPEq8nXcq7NMoXiAcqcTNt2JGf6BgGSJn53",
  "key12": "TDhRXHPoN5gniHAKtbd6t5WKEgKCHWre98cVruRgVv3zcxvHWtbDmRLx9e5HLmDd2A8DH2E6pUXcPgRioNb6e1C",
  "key13": "5xFndEggnwxTz76Z3QTF2yMvHjq3uQsVDbMWA993qYB7bjfFCvz5Q5AFJUK8fpKh3sq2QfRZY4d9TVCJoYCtw3Zs",
  "key14": "65YSGRyyDL4zStNpaQFJjFCF16vkby5YjMgwDYbXssThmv3yaYJmW54SxCcV6bLqovNwhU7WWajECJLay7WTMREJ",
  "key15": "2qVRjcHNbakt7qoPc6haQF3iq3KVzTYncueN6XCC4ZVmxcw8B7K94rymsowMeTRFjimZTGifHH2BRx4NnQibFMJ6",
  "key16": "4eqZiNxU17j4KssUT9D9K3MBnSwMiP5ov8puW6AWnZ53zf6Ptb1FZ2n1Ex6LPwKZc75gqknwkot7Mt4VPJoCFAqK",
  "key17": "2NEe4M2LxxLUJ8Jb62J4bBwsY2UiQwursxjeng5vUeEg8qV9rPro2YbTkNSvkdbPb4eDr33UpAjRv8SNChhf2Gvf",
  "key18": "33Q4cEKTzHc7pURgiBLsxHbp4cq7vfdmmTv1ocsjDf7ZiQAiyJmU6ngW8y632tUycff5bYtML47TAgivdhyg8Bp3",
  "key19": "yPyeherS6cBUW2DcotTibU7gvBtnpPxD64Kc2bH3M3PX5v9JGFX9fi693Lm39sujrgq1MXDE9zwa1cJmES596r3",
  "key20": "4gFSm6XxmJuWtZpZxuziFGcm7qdwFSevixA8gQttLnTC2U2gCfixb56e3XQ17qDf7i17nCEjXE74ikUMrKhVmJY8",
  "key21": "52F5fS3G1h2eyNSw2k61W7kgFc1wjsnevsRdVQLNfr9pVcyzohw5W6aGU1z9UyR4vq5kZ8Qbqu7jLtxp6ihmEAjH",
  "key22": "4hrVjsUp4HHxbe4wLTc8pnFohTN696FpVXuzBtKvvyDbKXe9LVeMFQcC3G9UKM5WRTbW9xJLCgqZQt57P4CbtV9H",
  "key23": "5KTMewDhZyDAs38yZF9zq23Mj72HsuDHkswcve4LwdkwyKkSkq1jXYGR4RtsomeXf86ab2E8SrgXUL2bMrQ4h1KF",
  "key24": "5Q3xbRWh81fbMZW4UXs6XR7VagWD3vxm3nKxoKzaVGh7VawzbUDQ4fyWVJRZmRKRD79Qr9R9iqYf4wrnsPaWnemQ",
  "key25": "kt651TGJ4xB3rpqtdUGqMuoX9eAbcf4YmydXir7ST1MkTGUiZpzCAyy4tNpSsP5XAuPyhnWZx4zEVuCZhsVgDa8",
  "key26": "5uxFjs3beXSmNYw7X8Mn5as1ED8Nc2oBNreh1z9wevzxjHozFnxctmG3YvsbhXPtfjznCqPwLCEyW1Btf9oW2C7A",
  "key27": "4sdkxYUs8jkwqrixseCb6ecKh6dgRDDRyUWYki5ivc2vHCVEhd3pL8pT68N5nasHyYeEBh6DuLUoCiLALma1q3we",
  "key28": "5cMMnJ8x14kMLr1UVvVmH1G3HqMuhgWuCi2xropXfLQSmmrft9EKfTM8vv6U4wqhzMukNc69mRjwjYK4gxrk4YDa",
  "key29": "5fwneJtBLpdnxgEr3RHYVoFZmuqXXqgWqxWgvdmA9HP166vNuTJsqh4F1uJzi5XdvxJXHrE1YKgvSZtB5V7dnFJR",
  "key30": "5vUyqKayFUm7zA2ia4uopCXsk7k6CJJyTB9SbMxkBBR64353CcNYyZFfzguodk93qArgBc95y8QcbQAbNLc1T2C6",
  "key31": "3qajYcx7oM6yUMhxfj8xX2uuX1G5tXBZTzhZ9Y7p3PadZ8vousfJxBjK3pWqKmA26aU3S5iUcAz5Ffnew3GRvqVS",
  "key32": "2CWhTYqK1nwDdEmEVpUi65tC4jkoxxe454PGVcz14B6g5dU5tyDgGxYnmrwJZvXPRCwXbopqKU37effTaVe9Yw7y",
  "key33": "3sSdJjSKKC8FJFg8zHusAszxKcB3UQ8BpPBQsEcAqn3yAty9pXuSnG45MoUTZdKjybE4VBgF85N1Th9EXKr5qwQU",
  "key34": "4zweTPCg5WckSKCj7mxB1CbRG8EEJNbaYaqDP5mchJGZjwCnDtti7HAEFE4tZkEHmG85AFfk8hTGsQ3cEJ1WeD51",
  "key35": "3tofWycxk3yMx5BDn5Rq3J7Y7kAJbvc1BaecWeD6H7e9Z9rDe6oQYPJ7hCugRbmKGRtWWfQcdDcXAXrJp3Uqhcne"
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
