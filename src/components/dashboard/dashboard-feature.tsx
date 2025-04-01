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
    "4pfisGnPGfcAtzdBZDdWJc9RHSUBqHHHXUbQG32URvbKLKbTc7xBfTTfpB9bGbmLzNwWdSVUCNiiJrXd1S3ys2N6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CfN4B5sGCKYhdknjSvwu5PUcSXbT1aqRnRZY8wW8qDrqw35c3jAo7nssMo7UAZc8ykt3K1ySkkDgsDWyf2caZEv",
  "key1": "4LBvF6KiZSxASJNtCFsfPqEBr49ibzzTFpHf5ypjVbPTLCqyRNAXqMZaamXfKschZBkQYhj2vVJa8CDP1qaiXcQG",
  "key2": "3KbB349KpoS2iWuj1vK6K3a1dQbJTHYQbeH1D1HEz5skgJncFwv4ykZ8AQLFjbtXfVWM535PforSorCACzX437yg",
  "key3": "3rUmWJqMd77SHpHGL544jaeiSUBiCdCgxyeFmRXAJeFSFaZwy7mBAEot9eo2nXA3XijKRaQHHvFp4TTHSzNb7Ma6",
  "key4": "3n5Bf9F2YDuJDX5yJv4rXeqGXE952y1NhSqFUsqGqGnS61NGyqWdTsEbATu8tSnHriV2ehWoabUEdorXQCoV1Exp",
  "key5": "2vEFzWuAPNSEhaUjuqqCM7dnu16DmcQVWq1qgPbvaFsn9gCgKsVW67fVvdkAeGk4tbhW5odVdnr6UHv2Rb1ErKFy",
  "key6": "a9hGwb5tnxqfQF8My8JDwJaHPcqwU9MRjsWcgi6n1JJCdkbWe7kpqt6prLeB2hePZQt8CpxiNAaMCdnKz3R1tHN",
  "key7": "49ijEstHg1zf1wWiNMqoYoGrSbqkowvUgDkFDhhonCqctGyQMywcSoTxbV7VrC1CQGRyUSvpczv8dWLBz4EyaAK7",
  "key8": "5K2qaZGWb9Xbni2qqzMqyfqFFsfdD5JousU7CB5aD7ykuU8WBZ2PHYgWivNCWcqGdxYLm3LWN4M8jMWAzTpheJsh",
  "key9": "2ViRHTnYAPwAjeozUEDrqaUv9uPRrAWMemUZGDLBETqcw9f9xCPRCbEZJ4uECHiDDs1jYXSdhLRQgyUEX14PFJpU",
  "key10": "4sQw2S7UYTLFpChju7jALVc2MM3caoow235SiM2K1s6byUEMZdabGcH49Cacw2QQ1eQ3XvGMSSUYf16LNqG6CTd8",
  "key11": "45ozTHj74Rqm1AsUeQgLhFevN8MjJ2zEFEJPrn2tLjvbxECZ1h5H3Bo5rHLFADDUgrhGTRBPqRhfnsvVaFGDGUQ3",
  "key12": "2j5Cs5NyNH45Qv3aYK2KE4GtfCfdg4HC7qwFCWRhQVtCUyB9Bu4w41KVxJePavc5Aahaoz4UMu1vDd8F6Nqgbqq2",
  "key13": "5V8WDUtyybwtnLdXTW2gNg1SRrJrUX7wCcqigxXiFXL26Ykfo7unZqQFgresVt1MqWuLtEzXRcNyrB6SoU5ggSwT",
  "key14": "5TEstDJ7kFJemY5CgKV5HZSQ8DDF4nKHY4eZC5HaVZD9dVPuPFJLhw23Y2H8mAe366dNo3SuwYqwiUaX7JiZ1g7y",
  "key15": "3GjK8aceJCMMB7jgci35Lo8bvcEkVCWERvTUCVpUHYSpE33PyEgS74NgvzJqRg5oiwTmjifxkEJ5M5HThET663CL",
  "key16": "5qb1WeDT5D6K3oUxvxYmRdkTgNRJ2DARfJ2jwkr2i2mxkSKoHoBxQKU1eTA2PeCErfMHScnwmdqMgnBiExH1se2x",
  "key17": "644kK6a9XAYxFKrzCcDBeP5aR1udzQ3TJJesoAv3jeXg9R6hBpVbAek3CE3idUwBiP7eTPDgx187K55TiDutMm6X",
  "key18": "2y4Pv96ANMKQkGHP394rQvxPfXDPgFQJU7D7cvQXbpz1uqupEQNMdGrADWrbbMy3VNVJ1sRgBrjyc4VXpakL3h2X",
  "key19": "31F2xH3eTCnEyJF4nbn581oHUCi6jMqtHo3hxvTCkFE5i6YwcuTpv2DSs28TFFmvzeFHnhPPBSbRqgz1UkaTEBTN",
  "key20": "3cAbR4utRoTMJjUhzjn96BMXikH4TyLVUNYb7fqqkjoDqJuSzk56gg5HrdfaQMRJmTn7QUsXfMvdgQF2r3BdL1TU",
  "key21": "EqfqgsFJvUPYZcBQxQDYoDgCHh7bQDG6Bx7bjcvvTLXB7spQ3f9fQ3wRR2CCFNhWrqv8hiLkudAsYFACTag6qgq",
  "key22": "2YWn2G2wzjuVkJ5cRHAdNxLHk373rzJVDsoRPgnsQw8X5xQKEJ4tmmRaJ71jyZSjQfMKtVt2e6QRagPwv9QTmMv5",
  "key23": "3BSSLqxDyrP7pf6jHe2WhFGCvcbQfp18rg4Q1j9S9DydcVp9dqQDda1fWpd8MBVoREZiJN2NDu8aNHgZHwKihZxm",
  "key24": "3KAVH5ATNopp27ymf393AcECVKBBodtni8BJUzicL6MRP56UX4ev4rr6LANPKHJN12YwAbUS8iDXBpH4RdN5GSsc",
  "key25": "4vHJs7Vvh1NVMCVZr6JMdYmHvNmbtLznARKquM8AWjGf2CEq7SA22ZBBbsp5QeDdyjWqLqTLDAhGkjg4Z2x4uuph",
  "key26": "5iuiWQ7dP7ZuF5khW8zCeiJstT3S9gQAsppJBqph9S8MWnd5FFe7wQ21wwb2LbAxDfiEhYWQor4zcnCUxwfKMJih",
  "key27": "242A6HtNPkPPv833p8tm4AjPZQNyFfRPY3QszZBbfqSsGtMSi689hoojXcxx417URqnYsWJqCAUZhrR8nKABL5c2",
  "key28": "3kqbRa19Gstxrv3D7mT2Tzs1DENCgsLZFUQens74WfafHuVJrLMgNMxJaotDvL4R9vfWnL8nRjwZkJe8zDbC18CR",
  "key29": "5YRS3U1Nor6azfHfMpATvNLivxUgFfsS5KHAuoJ3w7AhF9zXLzC56y3JTN83nBPs1zNNk4WqeYig2qRGpFv5q8V8",
  "key30": "29iu1A1o6ukR15jNPSMs6aHCsQGmwH358TjRPrmRXUYx1gCobeAvwdRpMaSG6ssJKfT1GrKv1nJsC2UMN6fZ5nCR",
  "key31": "QNWZ8PtCGbtAsVKAuCvFho49bGLSQRmJzFCt3PfzPXhp3u7tNRoxj5HsAG8ZujtP18tb8Hp4nNcaCQScUv5JbXa",
  "key32": "vBHVxVEmqVKQ31QsV9S5kcQNhQRJ5yTssa8kXs5bY8mMbFWYcEFFcdPtNL8sB2rdUtwGECxD6NwZDHnrnAjR6sL",
  "key33": "ZryXehwBRUrW3LYxgC1FFnucACDMMoCzB4KHXzYfATiU4fMERJqott4Y5a5t72e8tps9Sv3rP1mFnGyJBULMNnx",
  "key34": "UHSNgHN7rkrU18fobFUceAJYhGnv6fUXwKJMS3iyNotatRZMhHHrK2edGVaUdx2YnEVamPMdBnDLeXHnt7yuzmZ",
  "key35": "GxDXucSTeRyuhRTpzgNiTbXaym3RgydCTpwpEdjkdmvTeaMx5G58gCxWAZsWcnNLCHGGu5yQvcRPHRGK4Zpks4p",
  "key36": "4Ase1Gr5A9BNs4hDbzww8R2m5KhJWaXXEYk7u9d9prJNTrNFnJAh2ntZ7x3qFKssPPCkN9E2gzq8XunDW6zAUzAm",
  "key37": "hDWG1BJ3M9UQvtYCs6dm5win9VKvEgLvqCHVCxPQbTfYuLViKFE25DPFB5VWjkUBie7PXCYst3cQnfzsqJfz46R",
  "key38": "5kQ8GgezRzidjWM5cFsuUHWEhKXq6Xv6Sn58UA66V16pomE1dqPXjh8ed1GvYVAvFYWANNayovGymTV8LhNtGBpi",
  "key39": "2Zi7EXvt3ooLiQFvURESFrvBnYUDNdV4caGjpMzq9uuEL1otAUqqsh1nZByC2ZdnzdtuPaFmPrix89edu9YdA4bM",
  "key40": "3JQXxXKgL6utbwxVV656LfVZ6mu5n2JqHSfBCt99LWNBM38dCqzS3Ns72mBFGiXx622msXbfnKGn3VMt8UVniqUS"
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
