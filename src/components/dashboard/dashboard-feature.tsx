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
    "3ssGw7x5isrZjBnPUBhHNzje9b1Woe1t3JZVmpPiM5oJJMCkMsqRYsCa1Bs2nPtd46dEsyQvc9xZBpMSKTyG2wgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uom3MpJYJMmkhy3nmu5C5HSAeuJkQ4VggFUwQDU8s7uZEyo9HtAVPAHvTJvT7Zph1NFfQy4tpQji8r79FqeY7h6",
  "key1": "5xsrnCf8nohWeyfhc3qgLT1znCGXMFw2cqsDyEC6TfiHbKtRpJQoM2kQtajRyXV3r8EPQAkuPfsx1xM9EWRFbqDg",
  "key2": "3PxGXQMEhvH1RiVAWb8p1nXVhm2SkujUCLyDS1riTYbSuPKqb87vhNZt6SoMbbLApVGTaqzVSv3Mvhv4Bj5FBkTY",
  "key3": "3cgwFppZq2LiaSarzZRBRE8zxfxdkMNGyZYQTY7qfhDLbrnSmpDGHjW74skh51rcWTjLdm17bLsW3oaa9tvqTP5a",
  "key4": "3H7Z78aydAzRYBKRShwMKZioNqjC4fC6Dk421HSXMqxuwRfrgBhrbJcnGjshiJAG82ckyXNTZkGTPjCJmow84B2q",
  "key5": "55e5V9UcnACeryt397W6fo3Xi6MoM199f665oe1BtwYDYTEqvg7X9pAU4eVmajWVwZuYVSYqj3qm7xr7icqrywfk",
  "key6": "2ro7MhnHnfuZUzxCQRRTxnEmGc7P5amBgPoFP7CH2eMkfjtGjsnRx7o8RdTYjNizAavxXzHzHe7EBUL6vpTwNAaA",
  "key7": "hjHpqmiA1WcfnBdsnt2UCRbW4jMkuVQJXnmvkMwcdhk8fGon4xQRLxMZMbzKqydRTjyiPbacDvKZ4sPZX8BgRZP",
  "key8": "582K8Ky9i2sUVj3u9Kx2w4jZTQ3pzP5oNuHmsyLLG3hPFDwD58UMyZWQfTDVu7WDeQKP6hv1AL7MjCJWB1UjPivv",
  "key9": "54LWuocjnbs78Fv7nGiagTJdSXw7yY2Ast9sEKNEk6b7cm8HDeiFeaiqTMrwxKWT6qPrXQmSdm84rbeWfttzcvtk",
  "key10": "tSAfCHzqdDUiUmzeUCxjieKevJHsnn6F4H7u5q3KPbSF43fFXUw4TY6xrGVGFYSfFCAUwyQmfr8Q24L3SYCdNsw",
  "key11": "2vQufqtpJLdCCzubvT6KouESf5k64VumiyBGuTYG2L5QWmVo8WghbdK5mEdG3WpSLaBcVxs7SrzYyxmQ3KDJWjEJ",
  "key12": "49uqPUUXVarF4kV4oUT7AWVFKMXmtDjvhseZZzjo2LZofpYnHdkQSQzQ3fQD9VxsffvrG8eHYgPdJgYcd9H786nP",
  "key13": "4MDEghBQ5r6HnLBUHn944vkPNh8wZXk65TwiZbUDJBnSuTkHNy6ALRZSHgNnKEFZDjBwaTTwr1AEV8cQN1r8Jztk",
  "key14": "5tfgRb6zU1FxpFFgqPqSan4HJWTtxcEfi7u5mq22Nd4v8gzARcXp8vodAVTPg9fvXvvXzEJkY8wnX6ukpqxUBQUw",
  "key15": "5k3RYhUe2LFJuXsJZ7xmbnNamgz8pNWfQc1NFiSBJah2UUz1hNxKhKGzdiGhxTXpCXApcsBsHQDV3rThMqGhnEAP",
  "key16": "2v57WbEnGPdBuxVPYQVaVdxUBm3Ls5TmuQaKNFfjty15ZMFmZex5oPTfwExe3fbfE39VSbMpRSHet23M9EEB4CZN",
  "key17": "4HrEcRodNkH1A62KPnQyLsfgRv5Hxc9AVj5dacEZS2bFiLcddugp6KVnjUQX4ZMVg2HH6ZVz468MvD5Y2K4bxRwk",
  "key18": "2bz5Uu2Gx3gPs5XEcV1iyYowat2JdXn5x6B4VNsfH5dFiiiryYfdaPwoQbPRxxQXMDcbvS7DH9TYo46gxMqAjoxC",
  "key19": "3Cpgr8Nc53XDkPsQv3bQsL6hkH6fpGUv9FdtkiSwKiFsq2qjEWcYkqnpWJFBf6cRTQCJZ7HMdkMwKdHXyJGw7fLK",
  "key20": "fyvZgcFdp4ZH2TpsvGD1AWdv6GdXAxc4YdWwaapLC7ASzM2TVJrpFv3cexVZEQHpLF7b5P8bm6x2amTEpsKZ3Y3",
  "key21": "1SAHXiuDYLJBD3fGWckPyPSEc2KLiyEeqgLrfbfJQrxvXR3A6RYEGLwWwLTNE8N3u7xCH4S1EsFQFr9k63xbprv",
  "key22": "2FAyjixaRokrfZnyUc2dz1EbiWjBbUjUzFw5SZLNDFDWuipUiz1PCv3Sg2PCoUe1B8C9fwG5us6AR9UuXiDfMfaH",
  "key23": "4ecvUEhed17Xfc6243erTK2KS4QFNLsiGy5axtLoz8SFbiSSnCLNtUJeiGtD27gbEenwH9BoYEhUUqrbKjqVQnHR",
  "key24": "4YtKqi9HS8QwRAkC25SyNSqqLYE5KffPn4HDZmvhS9hDG1ySu2mc5n3trjdXrGXq6YXcrcx8byBJybkwLgkgHYpK",
  "key25": "5e7Lw7JcRmiooM1vqsSYYNBsd4pHon777Nce2Ao8S7iGjnAHBg9kBR9C4vbZZDH28h9v2yfG2Uafscyyq6pcSXRg",
  "key26": "5ZSJg877YENC14wZD15DmMb31GijhZj9M3jDxoXU5EVzADGzxFiddZZd8peSKN1aKN9ZDDKxG1FSgFTCPRvLZKBH",
  "key27": "4yPXNjwFSsr8EkpfCyG94wKkTFcVxNw74oCFhVyuHVAhSWDDHnq1sBtS2pqKhge6GZ8NJgReBSuc3yF776DLbVRj",
  "key28": "3EZAHRvQnWxhEzTKtEYfDZsBr4Xy4heHNGnvWCpAeZMjtXLgic6zxc9TujdMFYehAHiWdkgpcY8BGWmHzgzQT6DX",
  "key29": "2nmagHQJXV6PHZd7f7qkFGycQWTmhmBMWvGkBsAVNnhjSWYypfQzTixeykSzDL3D3iAnKxQp73eobuRztrpa5fS5",
  "key30": "3oxYFsrbRqrGzyVt6ZzvJ9taeWcrSnKgUWJgPaq9h19DSHtqScBDQPcaHeqcXmaT3SuJyt97f7wLDmZ2FmTGG4WY",
  "key31": "2sAAAEQsPfjfXEDFYV8ttdBh5YGjTcCMBKDzQFy4faj56wA5KCJ72RwkPiUiWx1mzmuCeBeAXTzYcKx6hT6uNoDa",
  "key32": "xrPaqrzetDoDwFZ5sVotzegCdU8u5oKXjFPt5t6cjQxj7VgQdFnJFqvtcJNbhGLB39dXWws7919sR2Z1Qot47FC",
  "key33": "4WzRhZpeEzb8tQgYLD19GZ2ic7EHTuuF2JP1XuifQWaV5hhqTLfUxR8GrtJvePFMM1zWupFE2LaxYPWgv2AEdGg9",
  "key34": "kWNCbQDQ9mpXNCKQ27Ezd5MVQh2eqMhz9Cp23j1b7dWyW4ozYgrofAXWjXfeLnEAVwG4hzb8N5hzLwPiqfG9cfY",
  "key35": "3RHz3QZBoGtFX8eejfqAASEryQFVTP76rcKSps8rrCk7rZRG19nEv5rePdAeVaKy8S6QkBc2ZP9Vi8q6jRQQmDtP",
  "key36": "2LeSXoJDybXv9Lmz2W2mDJ12Fw6kEpXkrtzw5GorLQx5NSAT5j9vZ6RTmNcVKdxuph77qgSriCJ2TnKqW5VF4tsw",
  "key37": "W4DRE88Tn4x2f6JNpTXfY2feMpW3Yt31Zn3cQrR14j5fxGDfBFdPr4gfNVgxfW7mRfkMHjcFLEzK3mSYveGJo27"
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
