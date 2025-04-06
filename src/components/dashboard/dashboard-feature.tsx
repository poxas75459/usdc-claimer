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
    "4GkunRCy3FR9UXdk5BnuuWCsEUbkpPeViqE1A1EUVS1Y49pXUpe55pHkfv4icWoUL8yXujRveyCzDhynmZNttqK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zp2zvtsMz6GxHYozrg3sJEdkJMCE6vboaxgtDtjDgVXUKHEALm4zRnSAai3TGQefo6bDA1CSA9hJssQFBwYLeZG",
  "key1": "2XVAZRsfjSLkBSMP2ERTwQ4qXueeipEBPYkoJCZeLWqnK647722BmjNhaNFh2cbqTUqtE5aNSkW5sJKXWNXro15v",
  "key2": "5pJkW6b23VrBGmsgJAYXwPH4yVovZpp6BJDxQCVKxQ66Gfj6UeHv39NFz9BBAqJ5kyuc5PsEQkjeBt9ocjyLoVw7",
  "key3": "2bkafCAxgFFsnCPK5NQP7c5iuAacAWoWRwQ2Ga1udw7MZdXkyHQhB6FkueT87ppyHC5fPK4DVD4zCS3cBJQJcQ5U",
  "key4": "5dW7rXHHBCc2n2qBpgK8QshxTdJYWfzB9BSSzoooW6AchPZufBtYc633qwCEJtKTNDTq4y6g7bbSV7ys7U5Y4yrd",
  "key5": "5eqa6VJHjG6SWomX3gfRpWLn3WCdwZ2hFVXhghyzXXxMHTRF8zUbNGxB8vQRybuzToY1YjHFAA1NWEzexnSXzViW",
  "key6": "cjF2QJFEKU4VkhE3dwdh9xwnrDzruU26msjgFuv7nAy69syHBTMhLsHNTuDZdbzQHKG5anmBATkXzVTdTxZtGLb",
  "key7": "2ZAVAnzd1n4RbxkACNtNY6FYVuhxatYXpH8H65g7Vv6xS2Ca2yKPhmLau53SdacGamXG9KHwXLo5Dc2apxGmJMw4",
  "key8": "5gKgJRCNQbJ9ghqpbkJmezhffihtM3gYSRk24X5pHXHFP5PNXmiBzR4hekboyewbdwAYEou3xQ9fmTFk8PU3uiDd",
  "key9": "4GtYHJH7MCMH3hcm3dq5gYg7Z6upsiVRexJDgNrGxRGfoaEu1M5niShU3WQgcAC45hjkCW8ucFq9R1k9HFrmqijT",
  "key10": "2Dp52cF9hU31B71k6G244puCPdVyCZ4WYh9cPCNvhF8X6FPxVGN7jvgV1xbN2YHXy2TpTcLbuKtBSiS229b4Vnt9",
  "key11": "4Rpe6cT3j9Xp8Dy5nxc78P7EPU8KGpuswjgWc7Fgb8nUsyzgxh4Qt3JebQAyMgFTe8g5nrVjxkc8vBuQfWSipjrf",
  "key12": "21kQWi74KfQF55TuWLQzucNAsNpYKMdQevEGAVmrUE4K8PQni7eyP7PCszdDCj12pd8Uw6ikYBt31sNqtMSijnoE",
  "key13": "yWyf6TqWiR8JhC9R9xtHjjZqtjxH82HU5g1RcazZXhZmbMzCBWz9jTcqD5UW2xNuamb6dXKmqy3cKsFSKuvLgBD",
  "key14": "BvnD5pYHwNVJ9zdb5U97741vZFaUrtSGPxW1KGhdBQPm4uaU1TXrnN17o8GmRM7fJpfgUfhHhJCqVMs2hjqDzvZ",
  "key15": "4bRp7nn24d3sczE4du5zuQX8RCvQyyQJCzSg72K1RBWTJwU7erBPwu33NCPVENEAhDQ5SmLY5dTc41GY6AfdMmS8",
  "key16": "24eh8993dxDNxRRNEDzN7HJ34fr3dNC9r7B1zuokkb47CRXKDbJPR6XxEdLmkVCp5gXZnhp3NKQGsSVWrjkMjovz",
  "key17": "bKEBfRcSocFwiXZFSYpPBhfGacYwoX97WmFfwLfBigmgDxiwX9XpJgSQYEvu6FtPZvkdKNo7DtuBrQnq4RTYVo3",
  "key18": "5a5TXW8k3geoRXfsm766piNgV3sicxicy3ikb1UCcq5fHK56P3ZbRTrHRWRowCfMnAoQ47WArZy1MQG5apMcsmHV",
  "key19": "5ALXGj6gcDq7eHTKH1zSSickFaAQVTXTFVus1urC9SKPNDUyXT6pvxYrmQ5YCSS99oLxXVrLCdesTykvBBSF2Lvf",
  "key20": "CMwP423B3vCzJisRHEs8UhvRgyWV5TcRcHK3faqNwXeCxeFVc7wK7XC18fj34EJQhAP3CUaYiS6SD1H4e8PvdhA",
  "key21": "5hhkAnpxaTS7YmoqYjP8g537Vx6p1b4vmPzVPBRoXhRSDYccgYDZvBPX4PWw3sgxeSMNkv2ReWXLHJWLLpwK1QiF",
  "key22": "2Bq9iSbwA3fde5xXedbeZcWtp55xAvHo7oDfctmRnWwniLMjoFDxZWuC9Rfj6KC3TXcb8ecrYiNSELAGosgYWxgc",
  "key23": "UHHjwYZdGP1iRkjumbLBSo5ZVfzvzEqEvjhCXTFfRbFxzed1huVLYwoXujLhUReVEZKXrSDekMuWDhoMFFgvY4u",
  "key24": "QZWYkjiunsu2nzrpguFQMKvAUKnrG3MJRUf5c78ivPuQPsm71q5uUKio3iXH4oMe9pujuvc4RivABSERbiUsxo7",
  "key25": "5W4FJ3drvrWQ2kjDQ1MLEEAwVpbqtd8tD1kLYtrEn7KgXRUVprPwU56dDsvkcZ2uAGoni8hDi5ear1KUpJ1S5dem",
  "key26": "67bmkLNrjxddAhroPg66WaPhKPPBRWXRxcZEgKg2imrBRrEbMiCB1Xn9VjYvjcgRiLiKZgu9qDkM5581aroPzccM",
  "key27": "2LZMak8gWd4CaAuYVMEcqFt2AkNTV8VCkasm7DMTRchSXmJko5Gshx5YPCLetXbU9kWS27qcQHRD7FXXJ69RYi2T",
  "key28": "59mqz7CJnVdG8xJynbj6iGTKch3SLSykic5bXxNtuwk8a14ymHyKcDuyF1Ho4KGEZM2jM8W6y1ZSktyJJtUjzzEb",
  "key29": "5kZWWt8M7WBFT21AiAxYaQfyk499HWXYN6cK5PDXbKAWBqHpgXsN3nB4Z59hNuRSqBGLsUCaa57nmjUGgfbqQSzn",
  "key30": "5Smyc4zDTQ8UpAfkSQ1WUysDvguLTK8chJZ6uVuQzW8UMejUbGu3nnBcguKZ4oVovtpmaqxKCiSQwXwuNCpHsMTx",
  "key31": "4bLPDCedBneyMa9SV44R1QMyu7ubrBHJVDozMaQcYEyefwWyZ2Xv4sUuUDDF6UymvC7aGd8nEQuvsdXz9JhPdb3Q",
  "key32": "5GeWzqm27MzPPm8XBC14SJLT7LyxjxpmLrLkR2y1Lj5fWWMteQFNn7c9757z6Lx8iTp5AXA98iAv3HZuEmVw7yDd",
  "key33": "4CxSrLuJAGbXD6gfwSohov2NWVFE7SDqJXupDJW3BKHTWSAurWoUcD6byCUkPCMEPKGRLdqKwJnv3JECdYbYdjuH",
  "key34": "jqVun3TRVBpngxxJCkfaZnphZR9s6nnVx3Dkbq3562EvLknnm9a7UYQjHyNaL8vtUChUyagC86xzy3c2c4dQvGT",
  "key35": "3pGc3haGb2i8rxaoFLxCjpH2mEB6aptnL5dxfKCPGU8jPwxALzh5CJhb58WJzeyPQuHUzddNB8td2SdRKP51dcX4",
  "key36": "2jjmbuNtPcVm8BcfNDM8ZMwfdM75X2Ua2EdC2F6xFE2F365JsMgxhEwyeMm9tcLF7qRogziJyUihoanKXQySa9mt",
  "key37": "5JeqEsdY2HtxueCudhxSgGvKazAgt3cj91Gi6FH2QVmdohLyiTBP5cdrTGheKDJFFpirGofKz8mxnNzuyofFR49o",
  "key38": "HC2kKBtDGevxWpK3cDGLLrMT9GXAe9gFYYxMRcJj2BRpKJzCXatSvVKGNJ4qZ9vAZxLxsbqRSdz9garz23SbaRi",
  "key39": "497JM82TjppYgHRqnJZmwkPqwpFRabCJfUjG3ddheZpC7xVsSuPCH6ZNfTdNiRPbZqhRMBmKTXZVbYYeFtjJmNWJ",
  "key40": "3WSuYB8eL7QnemVHy2e6jmJwgox2aEMqbLd8L9VTpeBd3EZ23AkEfcqdxogH16CaeYEnTnHfs6QbLuVtpqPsQiNw",
  "key41": "4r9pthTE4swW2mcUFzRWdopXAatDJuPUJsF1cTvGgr8ibSmWbS9xxFVLpEb7YT8f7YkLiJchnGPf1fKTCxY7rxsp"
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
