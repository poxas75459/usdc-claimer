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
    "5xeVyQdgctomWeoEsaTVoucd1jn6rrQYhgEWPLKs3d7FVscn4r1PhPQJ3G39pAxoZ1inYboifEzZk87eHn7AtEFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Hp3dmBiF7gNMV1L7mTpmqfW5shGcEo3b4UYG9PVeD9UrZrwKkfew15M2Twxua4kAaV3PJGAViaWeGDsQXgFMnj",
  "key1": "GbDuCaN6BnLCJc6F26SdYchrBH4FTjNHnFhm33Byd24tECXY4JNc7SniQiCGj4wqMrFKQx9B7dC6nYKD5hC5sic",
  "key2": "LtDUaQw8BVL5q6CUjpmEikBXvKAvj1pcZcBp3dqSRLf2NDvJy6uTLgTt98Ui7yUpc5ToQdpYdBtFaP7Pc8xkwVC",
  "key3": "DegdzDvS3ZDy9xQDSg8YBWbjhaE5SYYLJhGi33EJAErKtzYzy1AqgFBsBbFS8oY8VERVVdo2namt6cYktBABC84",
  "key4": "62XgQUNKMWKexL5zBsB9NW3DApcBz4hFFJU4fPwdhwbE4H8uT6hbrtApnWMdcnDYTPwvNyVqy6KHedTqk5MBk1QY",
  "key5": "2k6wAC9F25YwVJ3to2DFpXAYn7tAhHShSLnWkrceLcNwt7ag2ntf6LTxJrvZABiLaBozWE7UEjb4u9TER8jac9tJ",
  "key6": "334etv7gL8WRf9S2jftWEyHaTAuJTfzXJzHheYB4F5NYajxazz54VXw9h6F2mU4nAyXNAUuagT2Mq4qsn68cN17N",
  "key7": "2PcKaxYVPaW71qgKhW93DfrWPvEMkNgsGhQYP3R6GhsQxqwWKR7sxTf1DDcNZj6pXBaGVQ8tHgXdYTPPtRFFzPns",
  "key8": "5P4irSFQbdmGXcejhfRwaYWPEKp8LiY5LFM1wrBGmpynZwrJmvcQEhrKgXEgEAGqFnj4tfTqhiDTQz7pc9faS1ui",
  "key9": "sbJNSyC9zGc1LKNRKT7wjQhVbcQiUQ8P7KDpaQYUejbNVKdewafReJuBvoWdVevtwGNeL6JV6efQZi7KNxQQnLo",
  "key10": "3gAv2SkkbPmrUYhbk7ctJe6vjFbYiSXs1YJS2wezuBPXpHPzsWtiUS9EUKy25aqRiv774DU5T99sQ1bGn9SbGzES",
  "key11": "5pCKbh4q7meXQYLLsrfyZzicbuDvP5CiiiMJ9iG8wYHuevmH9N7sS4qq9w91QwesYFptoGdJwkUp5a21gpTqdZvt",
  "key12": "jupte2epfF4psRsoUC7QhNEN3WbeoLmCvqxupuPGidErAX9azkHkLj1EQQ4v2Ffg4YiacrYLWcMdAmRDTFaWMcT",
  "key13": "7zTZVPmkCYHYXNTrUGSVsJBVssLJ876n61eFzNV1wJhJJ6WZ3hX5CSbTdUovR7PEZp6LYF1FdGQ3B2PrMRyFNVN",
  "key14": "2dhc72St8LfHdtjCh8cKyVJxawiZyDaKNJUgEkXEz3UWXeHtwgNrm9FhbrZiCJjxPkhaeakfGTv83A4c35UpPGiZ",
  "key15": "2BXk7qYmiVhkq4WZwB2NFk7zVjijoFVVanKukPJfVeSbBnXzwbAtSdD9qf9oLwzW9Yezr8uNym61zYoMCY1oRFLW",
  "key16": "5FnHca8ZbAyVPpcfS5Voqbt8XzyPSW869E7edWUZdf926pShAd2HDGQQ6SYveUbQSgHnKmaxkDR65wTAsi7XD5Gy",
  "key17": "4PY76nKDZqVyLWZmrZictqDrK6a5fsPHSKtZPjEqFGCCUp9e6QCwQsULgyepKHTr3PysS6HFpGCud9VeXh6DQ9Wn",
  "key18": "5UQc7g15Z3UubHRpezRjrqf3BkP2xK9aSS2dD2gGoGLeo71AtmAMTruSwU6ERQVrfMYSakwUV5mAjH6gWubSNYhm",
  "key19": "39UDdokt83Tc9pmg8xPZCGARYB5dKjfKmo8VBzfmpJgqz9QqUkxupGPkNqczNxBEqvyUECycX7mGJK9imxRh6gPs",
  "key20": "9yjQ64xw7iNe2GunyCHCTUa2z8MdhqA3U3W6CcpHYsXbL6WobKHep75mxZMbRqmZiVbsnUeYyt9YavradAoSLcu",
  "key21": "5NR6mHNYahFprhE9ACN3djr3PRWhrnNvj1JqNaKbW5mQq6bVJAnBAXbnSk8xgHfEK6c35c5behux5NZdXnmZkVFh",
  "key22": "4a2St4CpCwDrxs1duaf5vGP6PoNhEsbwmn8GQNsdcVXsnQtYDSuS77k4mGU1HPVrbQ327uu4NicnNvHohKqEJXcM",
  "key23": "3Cf7fVz9poHRDNxGTCAXEhVBvrMHtS3wkAADxx5FaXJEPhGG5mStfYhKAU4h6hBmBtfDPBjFo3ETy4qp4Xvrx3Y8",
  "key24": "3kNYeMbbrEh9req1a1aajPYkVfxSy9rDfYhCxPXGGae7hvH9F2dhJiEKaVPTX3z2NLN6iEqKRCZpTwsGn9vfcJ8B",
  "key25": "2vu1WVz2eppgUkjpYCAF9jr55Jj3EykoTxkjJ55D4tuhkZ4WDE5gQ1o2Rmwgno6aUVT8rDxYH8uEp3zm39ieH3y8",
  "key26": "27dYZGhAMtWnZV5J5gWqNRYquTGAVJ3eXjSL4un5npqckwAosa3CJqUzHD81kvXEh5jjQn2yYbAwSsyLaB2vNP6z",
  "key27": "5GufHf6ZcETG24NDAaBbFC6x2535reSyRPF8fTb6YLpp2PRmfHeEJd5Tom6DDaAG9o8pimGRKXfRvgN8E4ytXW6C",
  "key28": "3DLNH8fnNPVTht94aLd3fdSRPAB3kFDt6xibSxxjyzKRPbFHVKNJxBUQUJVadHBP7PFePXuao8gadTLYRwYU8ko9",
  "key29": "L2tQt1oqao7o3Aoavj6HpP9MqkeiZr43KF7XW53YZ35bH4opUZVqrFxHu8N6ZeN1dxwEYHbvfzpVzBbDKrJAyhg",
  "key30": "dTD9gtJyepCKprocLa7kP689s4N4UutgzeJcEerc3XMZHsA5rogiRBNXqs9WBVoDRyvCRt4AMtwmhhkCgidxTtQ",
  "key31": "BrWL41jCMTwdEsRtChiwjR7h3XBXwAek7JgyHgkeGZ9HVwpW4P8b3dvZT6Bc5TTEuACpRN7ENRV8uXMQ6EVMZ1A",
  "key32": "5ykbieHDTutRTXeWfPHNHPGoUfUDADGQJLBpXrHPwvPKb57zk5aT1WG5cwdj1QMY9HgFUxqDK3pongNg1csmTGm7",
  "key33": "64PyXNUZ4aN1cCPN179QJieMENCQ1dCEmdrd1FPfjE23kEun4dHsno7Hnwj4rYF9bVTDvvmh8JYumh5Zcwf8bUsf",
  "key34": "5uBmJLyWEH9sqHFUTDGmDdRXivkW6J9WjWr2imvyQvau6hV5DjCevVUqE8gj4WNZ1kNKgixsW8QQR4sNwT9wBy9c",
  "key35": "4ABEJfqZ75xcZwnvfiwGUz2jfxy7eERaoaXz2D8AZofnh3WDixSFGFmVCg2wajoupZC6jMFbXRMuFr9kbjGxiJBu",
  "key36": "2wBUx89St7xZmSpLzGLG6e21o4BTLnNdYbKzDhFLo5kaJzjaGqasbPtdhs5EvQdqtXcPjKYyj9payVEgWevCZQNj",
  "key37": "5Rd8VD6MNrQZcHzJ3kme1NS6voHAN6JqQWwmeHKESm4wHjGHqDmLUi17MfhetfxAz9KyTWNDbc4BAtiXCGAW7uUJ",
  "key38": "3p1BxdsLem6g5cRRBXu3cmLFRoPFH4n333h7zaMdoJ9ypJcViFmxnLUSNy12wQVXrud7keSGAP9JeNCA3zLHLTad",
  "key39": "3P88VUuadcrZWBJ6cRdyqL2hcyrpN1PZdP7xS6na2zkkanwwBjn4o7mUq3roDHUBbWuN9cDRLPR6ouogPDVguC7r",
  "key40": "b25jUsscgwLwVSTEjE75pDhXN3ihju2iGEzVLhBiURmq8xNZdficKYirwf73tHqh3BDqerP8cg1f4fqfCh8RSXA",
  "key41": "3g2jCRE56UMJqumHu8UWwBXzjZeLfsBy795JAz35WRBSAvajiBkyccs6waMeTDZcPk8kmLFKJmSUvcYhATonE7ek",
  "key42": "H53oKBDFeVKW2sUQofs9z2GXiKxK9phJxju1LnpGzMoRtyxBfU6wTyb4NMXv2xjQA2WaQ2t6H1nBoGQnL3ax3Lh",
  "key43": "2ZBYkPrFMXHsfSSKXTKj4mUzSTjkF2vPrFmaD2Jpb9oG3so9WBuHA74bLDkmKoLuh7mpuQqGa4T4WexdmMn4jpm3",
  "key44": "5GkZgfnvunP31RHfsHcyDwefGfrTiJeLSLtgdC42v8hBvhq5A4Wy4RRYvQw1EdjKvMLn5XrD6Dy6R3CATNDHvcpx"
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
