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
    "n6pDbb24jdrTXWpup9ro7fs76eAtPokiMQH5FQGBHEWdaMN2rQXd9bQrUZA3heWYbJu7H1H8eh23kdtWqiVxLz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TjMmVfmpsiXj6DUB3eK2YKnLsxn1R2ycWwGya37PUPwE5Kc1USM38afeX5U84MUDDYbJqZpmBQ5TwYoGaZ2c8eg",
  "key1": "5ZtcQWq2iAE1WXN72q3g4oA2sEDUCGkRLAquvAnNZM6DnZyCHMjkS5XqZe9Hm2ZgMpHaMY7p2v51jA72GwBtx4ai",
  "key2": "4Qk2t8YXaqoa78VNTcsLdhhsyp6trD97Y4PDETNV2DkzpnYxJhfgn86ud5PAJpdC8pRm16wR8UeyPTGGJBycJ1N5",
  "key3": "5H5PE2sRbwJ458uZvQX5F31Krp7JTjBHcLpEWs1M1noj7VBNTNXSx2Jg9vwpR1PZRSvXWzJgbgJHRhznjKKY3Dcg",
  "key4": "2Yi8vzv7kTaHqj6zNtapZXBniTZ3cRSB18b4oPvyowBZE7Cps5kiu3VtuAkaVBJrp6CShmpgrMZfhBVLDk8ZrCVg",
  "key5": "4tVMQ9zRyjrFdAEKc7QKiAcu3tRmksaG2in62BZv1WVCfGGtfbrhcqMi6viLPjF5cJMSmxMzCpCG4WpX158NyNTQ",
  "key6": "5RffUo37NEyJ9TTaaLVH1WLTyHN92QiaPQFMSjLs3XxfDUfwkycAyJFhkW7UyQwn2WwyNVrFbRdKZeQ9tJ8AM2C4",
  "key7": "5no2ZWBaUqQwi3rbLsSHfoFvH2Fd82iCjKKXZDjoL9HX7i3EPJzqk1sTehB7fngVpVYCTUfzR7RHXrz9aezXeL3e",
  "key8": "tSVvGDanDSqEZNoZqz8NVuS5tAfd59AxPg4q4YwmxkRoZQw1nZU5k86dxD4mxW9oofKephBxqwrQXeTfv5e66pN",
  "key9": "4MD11fxPr6mWTUhbHqEiugudVpfzFSkN6e1NrQNR16kLixkdo8kjjwWxCRydz5LifUpdAGPvAmiVcGG64tjtT6pV",
  "key10": "4cFBQRbwWtEVEmSZtYnDN2g2gK5i41imN3ULh71RHXpS2XW7p2sm317HNigg9wcUWsUt4e2adAmC8GgDhVgnECMV",
  "key11": "3cUmtRLSryd4p22qBsuMApxQzi3Gqy5Vmo6TPqMEQG1dUQoPkWejND8ibJnrgGbfo4F2MxKXnWZqWpEcc1PtS6Hb",
  "key12": "Rinv9utkWkF7GzgY7okpBf8zM9CBqnNLgHm7gzqXxkupv8YPq6rCdFkQPQsgaCWwNZsFgqdJWPK3J2wPHQ2A5Ga",
  "key13": "4R6ukJjMxSM7KoYj4Kr71nTPUY7L8WmKPmpLs6kEC7RSW2UWesVU14vXykKebs6VWhDLC4CSarbMZ3WHthj6if8S",
  "key14": "62wdHSitr8HBkcjugE4aHXwZ1NVXSi2tPpcK4F45ZMq46aZMo7fa7RoHbmDjW6uBXvmp9ZBqJ9TJRs32ePz7SZxk",
  "key15": "54rR6qGSi2ZqmEUuRRyEMZ7aDaSMwEiEfSAcLvsdWzGn5Jtzn4pZ9JrGziABitN9DPeQwruBJfCqvBi6Ls3C4nYf",
  "key16": "3iABPJTHXvGysgD96UUMEwkDzFMMTXuFrs46nAcHFFMTPcdCaFFsJCQ2Ne9mhrugrpLXXCXum4Q5dZ1C5FVkumhs",
  "key17": "5yUpeQziW4Q5iM4vjnAGR4Hxhrxxx64yFfnjthkxjJ2TeRmzxR9C2bptpVd3tZY2ZiyKXD1ZZAse5z8Tncb4JoF9",
  "key18": "XQgGWjnhvJTN6xXXST3oWwqkAG9QssMJPReeXHzVfQk3Mapi8okzJBt56aSPDim2jarepQGvu2G67HQ46WqdT5U",
  "key19": "vL5LdZHfRoY5CWFBzMsWnevUah5hi5B3ex3H7ybga37qy1a4kzrGBGE43YcVHmDhS99RZxFYSpnc52zZJmJY8wL",
  "key20": "45WSZRWSwdfVg8pisSUL8dQHPF2Z3T4FbumZkMFntMTcmLtSBqJYUQ2GHm1EuS9G3HpMeSo1kxKZSGum9yH4TVjE",
  "key21": "56mk5JR5DvTh61iLKVj2WURSHhcVHx9MViE2R7KDjVtZurG3zFdViptMHUpFCGyN74255XSR9M3hMqgZwwWkbPhp",
  "key22": "26minRnvZofSht1iGae79v7Vt74WcmLjbp3vPU8U1CcfS4YdTtsNWgBoT3rpdw44kGZ3f7mAUvSjSwrCwbNPujcv",
  "key23": "5NH3jiJSt4oFwQiRTZC14YfbwFGJGN41fHozo1jz8wYEzUtL35ziGbcaoRWb8uSeGQsL4JG8okcft1SRco6hMbkq",
  "key24": "57XDjv8FbHiVk2oTvR7HjgxYxCzHA9KuM9DXyYbvVzXi5Dj2yh23LCMY3WeZdE1eXEDawM2MYRhpsbaoArT2RrGc",
  "key25": "4Y4XqaBvF8iBgycjmP11ajRHsovzY3Ruzj889Lvc8snRbVoBQwAhLDUvXAU8aJbVDYw4SchXwsw8B24fgyKfPUeX",
  "key26": "ZiPicbrKdetDSVcvRGBaetyFwNQYWwv7LtBChSV1bYZbdLiEGZtCRk8qx5qjv4qEbderU6aNVWeyLksEJuG3toG",
  "key27": "VosNB9LhmYBzvKyKEmErVqK37sHdE9Rtbha7fjVBSW3wo7iVrq5Yv6g7aMxythnnoMfuLYXaD19i5jMj6JVgmoN",
  "key28": "5AtwMBbSFzjXYgqCrkgoHKiZGeY9nmZH2D5bJrK3Xbt3kxn46xqYsgHAk9PdaGLPw7vtWHyFnBq3fYg5uL52ma8b"
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
