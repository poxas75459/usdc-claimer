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
    "s5QrucmXovBs9DTMWMpyzNMKGEyBQLpW5hMfzz186h4PUcdP1rjJK2J5uQCNww41DpcbkcHuBDZcKCvYNSrSQNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XVyVgEk8fGJEKaMDbRTLfnfuQzZxkWoZ5kyoYBB42joYuKjd46gy8E5mjR743uHf3qr7LcZnJixeYRtHk4xnKQ",
  "key1": "2csFLUSKYhoEdcWtuHqWE2eyxGVMsMWefrSwiHB7jmAD4AMw6hfPKvMi4VMVG3DfdgSxRw165Q1eL7nuqMp1gvFT",
  "key2": "4Cg5bW45mTY3sztRcx5NTaEMttzZhdYFjSfL6AtbmwhguezTjP2X2R2tqER4YBPsdiA47vkabiAGF9tBVd36NVrX",
  "key3": "3P7D2PyzndrRMu4UmaaAScjhn9wCNdsBB2MkcMPJnccHvr6vRw6B7bZP2naPShK1kwKMyCQdcswa2NHTciUSNxuo",
  "key4": "5iQ9QVjDEJB6CTNY2W1CmfNuFGyE3RKFi58Rw8Wrm8urHtmiEEhz6bZwhjAtNEaNVhk6pfwiikJdTt62BF9kyjXe",
  "key5": "NAqiawaRKCvs6MY5S1QL5DDGk3A2GtoetYmHHUJ6qmvRQLipdo3fx7xY1z1MB6pkh5EbPfs13sNiBAcXFLgwGcS",
  "key6": "k9Ri9MT995MfdxQgX2aFfDjmikE3n2bwr8doLfQbm8iE2vJEW3Sv2xB63LzqmKSoNHbboJkPJU24N7b3rwuQ2Tf",
  "key7": "37jRLwvmrtgZaSiW9L6e8iZExonPRVBRHwBSPt8o8Y6qRRYwu9PBKip8cGuM1WiJ2Wi1SBhBZ147tiErCMgAAHqA",
  "key8": "4cQAyB4UrSNNLJ1ePXxRNwNZQHsfvo4Ambrhxgu1XKaSBn8EN6V6P23fpcPfg6n8nHDtte9i4rdBmoEU3Exp3bik",
  "key9": "51bB6L5zaZmZi7Me6AANWBnwgrhCD23nuULnCPoDxN6iD4e74bzxreoiT8xw7RzxxGwTm9ibqq3D1qkc2SaQ346V",
  "key10": "b411cmMDdq1xUCuV4cvCt3FdegPSxRMwmzmYWHTqVdDUAiHEiT9ho5VcUiFbraJK94x57HR4ChJPpojgCkgJ5kY",
  "key11": "Ymc1izmZNnFjfpeBan6aGVhsfikC7t4UPggJpM7qMSYpJPRX8qLby24J5CxD4hYGzk6oAe8u47FeYCePyjzre8n",
  "key12": "4UF4W5VSrNPbJ3EhXBfR8SYvYGZfA1PhT6ZaX6AqU3eUj6dhvfobdAuPSEGXLoZ4GkR55jv3UMHwqBaKLbKYq562",
  "key13": "5BACVnuDPr4nAKvRPWQu3BUNe7HuPVywbeWXrEMUJyGQwLMRumQus5rAWttseKU8Q2FWTCvwKuHmWkP4NBdaUz4g",
  "key14": "5y9ndS5hWw9mDQcuGadXBzBhwMNXdvrZrM64ETyxAkHUCgkFi24gxxKnTFxhBccHKaT6Kz7ViKi7UU9N43h7wL4p",
  "key15": "5UvBPAr4XLxVb7zpDm7NEhD5W1oxZNMTc4FUxpQgikSqBAMY6Ns7DoNwkWWvjeX3sJKikHoc5XyLPAn7RTNMaw8c",
  "key16": "4adxxJAzrUSJKDMcNMwSAEW94ptWxoa2QJZQEWq7xDk22mEAnW8NQnF835CqNf3aMJRYVuhHxNtvnA8f2DLk1gid",
  "key17": "62mz62Fqin9QTJkK8M8QYSVCCtYgcBje9UiprYnZjgUL3E9XnX1ZpbHnbbaUgdFdist1zHKQPRi6MoH1uEuCrAXw",
  "key18": "ZZVx247wjzJooGvVNg9DRxJYo8FmdDnpoBsxghKK2N4xZwjDMR3tsfZ4xLTjV7fEtR4nWriboH41yrW3BbadjpR",
  "key19": "2Jg9LrFTB1xY3XR3cC3Z4BsKXMeENSbepNbepmcGNVR7XeBnTf2NhUEMqnrn36fdk4wTTddQgYhoBLBbHzHYBkNb",
  "key20": "41Tf148RSsb1u6Jsjm4HHVzBazQyyywqbkKfRCHoV4eg37wgWUJ12zPB6vSgiTF6fj4VpJ6mBXRdPtfffhpXneP1",
  "key21": "5s4zqBHUVypTyF2HZH9mfHHQW1iHiwcyN549duoarsvZveeRVCXF9h513vicUs4kUK1sng78kUSdxhhVEKQkyLau",
  "key22": "4s4QmK5q9ySBB4NuYN931X5EWXVB3Vg55pvXbprMxdpafuaXhvEFQSgdM8AthGBu3Fx2VKZei9BpmzqYqVfu3y89",
  "key23": "5zA7c5dywb8iw2Fs86XJ2Yjhr5VhRRrwerwspUyqRohPTiS6JZPr2CkjhvPY6HR3QQh1FbfYARKhxVPpSvQeFS5P",
  "key24": "3mxZp2weBWH2JvMA77N34mJgggUGdsKcb5YtdakTokQf3UYL6yo4MqmFokUyXfpXPztM6B61PH9iHVGVH5DFJSKU",
  "key25": "3zKT8uEcnCu1ENhky9nfeAc2goMgahEU6ecjnDBMoQdfoHSgs5LzWUGVqoJ2NA9ta7h1gbJhe4ra77QnJo4Qe3Yg",
  "key26": "2ZR73bHd2KRPwBoQ23eEZKLUyAaHtAMv17Y2wnAQhddwvyzuSX3fgoBuwNUMJqTZfzApiNczh3Q2nEqHmdMPeDdG",
  "key27": "486aVF9Bz6kHAa3K4zvePtsHQsN72FhZ13MdqDVjdwQh5RSK1hQDUMghyRssp6RHwpCZYm1SkP38uZWAKNa98wET",
  "key28": "47DuEciUR8V4Rx3ApqQEKDmkhzWDkHVHAXED1PcBhLfdRkhGQdZGtRrim9dMXopnN3qiyAhT2ELPSMaM5CaoPiGf",
  "key29": "2WyUngb7Maq2dduyUivZMa3dZShkUs5wSFYGwcJDgodQXzq7XrjNEQMJGpvtWgmDEbgPwsZ6Qopjbxk2AJr5eNQr",
  "key30": "X4kDvh6zwUDjyp29gw8SQDf5DSseh2efu8CHhoVMia9Fjqw36SS9j969YjTygA88oYRkQXkDcYYL7u69DJYzfu1",
  "key31": "3g9TjwLRhGq68bVHHCf4cC137816KdR23WaMHdRhCsXwVJgtWBSafoBvLv99mfVGpCBRpYqdXRXH6qWMiqqev6df",
  "key32": "2wtkGfMKBCinSrRdKYGojDEMBoNccdpjSKXTUGXNTGvCJNVT9dLnnkdQFUcDyJsRsR7BKC6oAy2UCTeQCo2htnhy",
  "key33": "23p7oMRjxzbMi7hwnhg1cdkPhRTmiuZLbM5JZacNwt1qUezgAL6yaJ1s9AWBZkTmHqh27jZhjcBkqfvh7D4Moi75",
  "key34": "2RjXExkSyWP2uHyp9bxq7EzphqztGTJCreFmk8T3xhzvLAWXxTengdEhpY8RFbNgHExoBfqBeJKvwKBsbpLadQhL",
  "key35": "3yaboh31b9brUGF5zZGRp9VSPmgWqATsBzHDqFVYuakutxdDEfzgmCjgg3HPTjtEMfHRYTa3QwZ4jb8CHFgivxZf",
  "key36": "4bMBvZXFWSXWwgvWqtR2LTFDVrQFNVuEQ6UkFeiVWYxXWgETXbQnE1DYaGMBqvsUkx49uhupXv2pvUCoLQDiXWfy",
  "key37": "5C7RrJ2gHnEgJy6UDw7ejHBrLf5hTmL4hRvzdt1efQVmZSXw8cjhPcxH6vnwgY1uQZZoCkNKfVSobKFUoPfZKJEm"
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
