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
    "5jBvgmb7JYWSWzRj1CL4yxvqTF1JYFYd1McdmG77yWwabwnQBVmvn1hzvF4vhEN7imsJdEfZsL4YajeBHKgJu2Tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1wkbM38v5wJeVNApmP7way9HSCd6Ze262m6vGmffAa48BENhvAnic9BoDKRmELzaS8iCSoSf8Sr74ixLGX5vSB",
  "key1": "4TDWpXhnWMbnR9voc7V58hcPsM7kHmhvcoEDteaxhs6wqL21skozF8mJVJPajfLYerVx59rsDABFm1GSJteNjrJ",
  "key2": "4VLqWw2f4LmWhmSJcytxUph8uMEePge5wcy1uwsbBLqTzBwD9FeCyZcPosYawhcHSQ9rG72CKufZFXqPXu1M4GbQ",
  "key3": "52n5RBDBqwXfNvpJYY9181rTeq636sjMZaZXeX862GQtrkeJ6wDyYjUPeFnbnmabHJwgnSUHk7Sg5wU8yEDPkAXK",
  "key4": "5qFLcPWyWYDgtsQBhoVLouGacDu1M6eHVQj6JMUkoboffGt6omFci4a3b2kcGRQYPsHX1GZmjSfuct5AeYjeHG4f",
  "key5": "4brwem1WYDWosvnqdcpouuCvJM1hca7S15weRSCo51MVdrsTLX2ifGP1DxcPaHTAsr77Z3NiZ3gKqfffp1pTaSAS",
  "key6": "3WjSdo1a14rN6n4QDYgoG1qVUT9FcQRqdSwcGDJhBV9m5gw5nrbT77WLBHt66poM2zhSVcUpL752HTURBowcUqxg",
  "key7": "heCHhUJU7XCwZKDSEe61n7wpCBi7gbWENS5dfhhE97RZxx3ua9TpQFQEhu6KFV8R1w6NhHoWRDwbHMVoX3nNZxg",
  "key8": "3iPujaMzvGDMwiwDfpHaeiK1Lce3wjWGDNjFrTzPqbSwpwbNDSHF1NRDXfpXe9qyLCJwvSXm8VXWSBKUrxSEsncP",
  "key9": "4V8tCa2BSUvRQ9atPPJruTyEUJ5QbvXKf9f2tvcYoDUtXkCQfLAma4oogTdAADYgY6DQ18P1oxsHj5XKcWyA4f4",
  "key10": "3nV7h5SBgEUaVUe1DJFcTYVZfwebKxTpK2yGWdozVm7B6fijQp6h1vjK1KTF4WpWi1GXVSjFoKfDkXmpABz297vD",
  "key11": "3eyXn6L4Tmh1YFSRXyRdsy7ZXAnNMWbUQRdb1RqAiMZ9snkenxmcK3vH8XSK2VwdwjR5zvkHqFjcLKxJ6p6BxpDm",
  "key12": "uqbYH2LgKE4iCaGdkMCRDakCm4LMpxXDcUu4W815sym9wDmmDsAJJSSyyKtN5euQcE1mLgoxi84w4eyT1xYsKVp",
  "key13": "4vULD4QsnxKFhPeJZxWPsR6jY1RUWESrN4QCoyDprDyss6CF6Jo2mib3MXCtxicdCotKxGDXBmpMcSCDGKp9CcTv",
  "key14": "2wGzp4ZmEKk1qCMGa2Pbk2ySiEqfZbBb2SFysgGSDDYttDUMso89YDhL3sMazgHhv9Gt7bbdn6xuRbDuJue1fMfq",
  "key15": "cvgjycKgzo6KtUzJQeSPmeqD71KzFBNcWxx8ymUo9ABnNM58zHiYzfGDuvvk4YBvWFxJ7ksDo7TfGMsC7446evb",
  "key16": "mxd7XdVPnVChrrSTb2UU3ikHyM3i3ZudpuyhuaMrm4oyMamt3KzjCpzx6i4XabtwD28t2taN6cUYKgYqJNa1aCe",
  "key17": "2yL8yQe8WvsAc9XZZobzSsXrevtKRQyGg5Xab4BJXh2Q4n6H4p2XyLGrgvHY9cqV216PNvWA8K14ffFAQ6nfdwyv",
  "key18": "2wVQqW3kTUMPd7ibNs6z7g7rPUF2iJCt8N7Crp2t4T2kzjCJq8ESnv6nFCFT5dELzbf5DZhwTB18q5xZdj84NT26",
  "key19": "2vKdJz9AfGfLof7K57HnGjg2SzDPfQbTzYEF49e9Za2w57CC31M9W9u73MUiw3YH5DCUvH85UPs8Shhv4NqwDe8N",
  "key20": "35HQ832EL1TDK17sqKeDeXV84ob2McHQP5X5H4d9YNJa1bVRMh9yspjp1GUkNgffaiuixTUUyKnvxPRV6bvF8RRr",
  "key21": "32W3kf1eNGv9KmGqD3hxsTypMXFj1Zih84rrJATsQigmUiqb2qGA5HhdQpYUuxb2VDEGNzEWQFj1NmxnQRXWvBqB",
  "key22": "52ZMUQ4iDCjPnHRr6U72NyKkDgx6YozxuPoekPdNui9LtpSt6vURX6CBVxnrNa1d2WPZa4QdAZCNGZtbU1iLBX7m",
  "key23": "3A2HgAmR7kfWXeR95hAAxh3geBpyKrAJWvqu8CMnhuRQccunKVmLdHPg8EAY4htPmUj1ysu4N3nrWCwfUvy4CvHX",
  "key24": "5jj5tEdYT7iYW65dvNUSCYdaZ8UcvpCGyJY92Hey7QqLkQhm2yHaxeKGsQZ6ZQC2Qmabcn5ycSovigzijAQcMwVF",
  "key25": "zQHzL4jsrcAYYBCEg5RLtLk1CVYfrnPKmWXdTKD8ZHcwnRMF22SGL6z7JpA2cLXAawMZ1MWWu6UhJopZQy785Jb",
  "key26": "vTPTut7qvkH73YDuaAx64XpJYGyVwKUhpXej6o3SekpnpeaUNttmLW8Xnd98psTv7vkuJ4xS9LQpNvijEHLQR9G",
  "key27": "4t9KXQACnvEizrY7Qvqb2Bht6CtxGj94zYNFR5HEeiT3gqY17cLPWWVRkyJyMEeVFzJGFBtdNAih6kDraiBS6r9A",
  "key28": "ihSTR15fNGBP3jUVM4A8hT4FZq3bEh8Jerz2qaFQ1iRUPazn5FzEuF5HEeiAEBxpKQ37V3MpC9mc43pK6FWiDTD",
  "key29": "4tg6tByNcp17oypCt5zH4qNh8Z3gDLG1Q4EBg4c9Ptm52VoqsZDvHVNbtcRgK1PuhiTWroda3X9oq5mXMmgU7cG8",
  "key30": "2RXSaxJPHjNbs42p2T2vXY7Th8owhrr8HSjixL33NbKNxTD3379UgGHDqSSuYxTiR9CD8H9jws3GpB7Ga6gZJzRU",
  "key31": "4SLV43kh8RWUWM7qasnAw3oAyJ91AiT1UGbaF7E1q72BAwafEvQXrjXXDSdzpjDDj3iictXLaNErPbE5Vioxazc9",
  "key32": "xjrNiMt4KA3fsqhmn8Js4LMabuRDC65ozjuRk5YyxHrwPA6MFrVLQsE3AQ3YFhof2zGmGHHrHYLdGnkzB4EezbQ",
  "key33": "hWXLgyJdfDrAPLYqHAvEyhQmqEMK5rCgSN9SzxyyCFE7KWdRqJEJyGCUXS9hCuU1moK9zGSMLfkyB8AkcBNZQbS",
  "key34": "5PczY7grfMB3XruneXYtyXQgtM6tmZ66myM2AensmhuyyCf49Y3Tbuca3Caqzis5Pvg6SibUNgCkE55RbENHEfJP",
  "key35": "YgqxQHmtSg4Pn4X4F5WvJUWro6XrEGsygJcCdz8upq9i21f8WP8DUGRjKiqt4URuHanT9QXmuzSfjTqP9LFUAA1",
  "key36": "2cAjzRtGbKjWSct2mMHSagYU3nKWPR1WLePb4NDbwThQoDu3FvWhn5Vi8X4SRnRMoUoDVYWuooSWUqBxBd43y15r",
  "key37": "2f2iwqB87uVyqJDxgiU1gYfG2CtQwsSimgAGZxcuYS2DDT9Wv3KTsGjKswZ3Dp7dP8sgGw4LKmyVDJmauK4tg2Mr",
  "key38": "2EzsUpS62JUALHMbBq6nHUhLwBvqYUBdPZkH2VSq5uADTNKYFBwVYbFrqjH37v5SyguxdHZsZSfHPWhSECEbmQXs",
  "key39": "4ovSjAhSjmJAtXEYbqMBh6A6b1Q5UYX3zU2xqjcAPmonJDVrnJLPQZ9Za6Do2ZFNYzuCqPWx3LaTp9HhpYKodTpK",
  "key40": "5uD2r4Nai9wiVe8ywhYBiHDYSxs2heg5rJeZMDCXnANzTREdXBuMVF67G5Xw4fpM6Z3Z2A9gLEdT5ymezW9HRLQD"
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
