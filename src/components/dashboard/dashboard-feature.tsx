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
    "3DmNNTz9Z498bVpLyPE2egm7B9x3xS9haXrUhPdH38QavUXAifzhEoXYcyNED9YdVmmSMG33YGxp3W9Q2dgW4SAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1d4PEMNMwwdsBW7Yjoco2vxTtLNMmyoukSW3DoL514tsRWre9pVNNmRpW1Do2ftiEYG2A24Evo3mV3okXcggr4L",
  "key1": "3JuxgrCNcCRTHBfdQTnmM6P88iSfLeGHqAMHFHX11vnbimtAv1enuPia2cbNkPChHbAzPDk7wfQeekLhUEuXiaDU",
  "key2": "7s2t8KunV5qgvvGtkjJ8Do7cX8m6TQ1bnnhLzT52smQmNXMHkUKo2mFRefvF2gitpGGBHjJmCsVNpypb3H1nwZL",
  "key3": "2a8GPrWHjSeBwYVHF75AtNgo3FtY4hCxn5XdDYaLTjaPYRHY7SuxeoHv9vpW4RFw5C5xPZzGYuYbdsYRcvvX5W9E",
  "key4": "5C2DuS1nh49eSeT9QfLfWFD6fgCeJTsPVFR8Rx7QLAfjv1HfvcTMwTBdJhXRqn3Jhc3wq8Wj3UbMwU8C8cEYZvzT",
  "key5": "47qSMgyBLNrTnaJJFYeR9pq9ypzTrn4bjmDAJF3wMYbwAN4rd6d89YzGfqHpbBtPBX4CCqSGAijE3nWKHEtnrbzt",
  "key6": "5CHAKGivDJzXzeNp5odLc7hvSoZyw8F1DG9vAzLw7vf6mTvrpzoaDVDoQoRxpyzVmej73z6ScyrbVyM3zDtVLSSE",
  "key7": "U9xfYqDUw5oTmhp6gm5xPehcwBz1P1hwxMDGq4hxBhfjxoDi9joYQ6bNRaAWSneHrsSEybSybpZSbi7oBSfCR3o",
  "key8": "5zdtFtrWj3hcQftvdsUf6DzccbiqFJov8CgpbJwKoZ2JFW3whogNY6qS17CvEr5PUniiwnJsfKRS4qGwEtygV9Ni",
  "key9": "3AN4gz83k54a2cEYCt2p8YH6r7syeNUwHnGRqRpYEfCBqoxkgPoLZGQf9Nq8uP1Bs4HBmwbeBHEmEsXGW93UqtHP",
  "key10": "QY3QZv4AbDYwp7TaS1DvR4ZyFgiBvQMreHSweH359is4GrUi4dFHi9qN2as5xSXgVQ94EbxoYMeNMUQhxLMSxss",
  "key11": "4NZMi9fypo1Yz4e8BiEjWiqJPZ3FQosUeNz7sLujbEU1u9yd6vPmPPp1CBXn2J2ekjANe2HnYAnmxv4YeFPTcxd4",
  "key12": "5QYycN8tx7Xwv7GmBez7m5DgVLhhwxLKSsHnf2tvddTNP1TwmoTMTVexhxMZ8UrY8ZqbFJzLZ5gq3CmEoUzR3s86",
  "key13": "4o8yLE2PvwWrbWkSnJL1zdHoLQVUAmb7xmMsiKBrEPTxXwc23GSMgDP7vLXBD51wz3kD7WPaQ3Xig9z8mHgH4NxL",
  "key14": "5Xt6nLSKgSemgs5qYmKz3hDkJeiKPAswARqKR7aaBSqVQT8R9psGJgtb85d3tz2NdFcrugbLnwWpfZpa7dsjuUq8",
  "key15": "61NhbigGKodniyj9atQkyycTmhFJJ3XRSYQEX95GShWG9RKpeZHm56wv4WiBMD1WXphhewjiLcWe5Nvff95UUw9V",
  "key16": "2cw4ks31ZaEkXkjVbcsXZiCee8QTKXUPTgmPD8TNtcW6DjRPEjoMfRRiQ74H4fBPzy3GistZDaRSofNoihuiHX5N",
  "key17": "4VpmoiRuSJSm5Kn1D643wK1vJtHakG6Pv2ZUxJ1PKP6Et1AoeGr4zBEkJUi7v3schjhczsNS2rnZHfV39vhPTTSB",
  "key18": "3mJan2JwJAo3VXXRLQc5zomT91Pkqd4k5Ck89KDGwa9ybxW2NrnSattZVNggpFr9woMqfSB2nmJ2ayEwtnHKRcK",
  "key19": "wGDu62Pg3jXCcLqrcoMeZfTHfurjkUbD7AzXjStFqCEJEobYMWNcd8Rype4nvrT9ecjnUdsVSmw7weycjsBFzSU",
  "key20": "2qfbHvJ82Dd4UzMHFroP3FYAajRQDcW6FSUyrc6CbV9zr4LvtLmEzwiuA6gHwXUFusT8F4FggKx7upakCaWmZnHU",
  "key21": "4kiLcZrfJ4A439Y3ZFcSMwCPQSboiNWbptgSepF5rXiqQUTdAhsyoVwQ1eZjfHJEbExp4kzix5AVUunYS3nk5jYV",
  "key22": "2oyZQFiFrXy5LMM83R8dhk6VogrkiWWXG3saUEyBpkNE9boFfvspaXqb1agzpSGdSV2JG2349e3sktqfYM7mvZkK",
  "key23": "4z22rDM2ux9KacRXxE8caKjhHXGEjcwsCTxX7uYfxbgjevv9cGLHgQX26M4AQwV1ZKjMUydoP5U4DJ5J55f8EJgj",
  "key24": "tQmLKyD8apWk2HT86EmVRZ2XnHdp8DfJLejbn5KfP8PCiKUKMkDWos9s6MZdSM3zBW8xnuG7yH5UAcFHMJKUKyB",
  "key25": "2DFbuEumvnNxzdGjYZTLobAiLY4AFZLFnLFQg6WRKfWYv3dh8WfJpCzMCGXn3d3wscXSGWkwyMqrbpkq97d2MeEZ",
  "key26": "5a9TMYyjE3mGCeuTqmM2JpaantHzYbq1X9qPkV2nULzUVxgK7VdJw8DM6UYkM6UeVvMuCJiMJDxTpuP7L7tYiDcd",
  "key27": "5v2X7BoMKdziduj3SPmnAHnXB9oKu6HrprjaPGdUajHzvQAJZMoHLyCGg9eqnxx5PZtDNWmdvryxBjUpXGqPrHHq",
  "key28": "22o1GDpE2fZm5n4aCaUMUfshiebGGKF3XNWwTEtnsVbcYeZPxp2FEdnNpVikPRCtC9DffqA3kk8VUzeJPu9p7AeN",
  "key29": "3ZTuyqW2DGkm6fVtLjKvDTef8eztL1Hz3RvZHhNmEbgYKTVGxtgR64LgbeZPLZDZSmgsgfFJHKg1zcBZbWMuiPQ2",
  "key30": "2VJVXajNgfsjbNLDfVAM68ZkuKQeC59vBbPyjJrtE7morcaT5ybAtkZvMpuTmVsvZzMvRAqUNCwfvkc2i5HZKaZo",
  "key31": "p5khD3Bz8NfqyrDS6Wx81zf1h59Tx7WnVjaA1mFT1osKLkKVZA6NcGo9cR9g63a1Z8MbTdxUk6TRghREibrSP2j",
  "key32": "4YcVakRP3Qoo5jWuvTvuNNMsMcy7EhYFRqgDPXnGPm5V1yHfgKreTLZiFa7pgDNXgTEXQnPYMXsqS6aSrhw48xx6",
  "key33": "3EvwvCjV8H1CEpG5SRAFx62eff2XG2XnhaZwa253NUsxcXnzwCTDHhibButDrN5W4jVEcxPMtfeVxoUJGLW7eafQ",
  "key34": "3GtnB8gor5Gj4DeS9Kw67uJAiDBVQzfPgN2k2BVU7TQRfh61Xt6JC2amPNTfbZTF5ivzHVLRCCKtvZDdQeso8E2v",
  "key35": "4JswWTtXke7DwWyRvrtaRozPP8qo5PW1dFbgXvzBuyLFUgbysvqQANZqETCSaBxcWCcVYR3Q19Y7z7ZXgrnTXYUr",
  "key36": "3k8ma5MKRixvZ7mqVKgBiJXvqYA2MJmQSVdeKSfrBR92Q1iZv6HjbR56zVvaTvLjYHNgtenixamHQE1npjsF1WCr",
  "key37": "wrHPtffK4YZx3ViNxouW8UZioXUguFLzYfT7mDJHJxG3aSd2PJijV7WAYE2JyVz4bqv29BWJ2itaXqxBwamLU7s",
  "key38": "nWWKkZEN8SpakdJENKrGmLMM7HWJCNsh9ACAh3yTzmGhz9oCJZrzUVeUffnWTm43SitWPuJicfAKYXEKSZHtFkx",
  "key39": "5jzaVBpBiVjsxzipQ8JchT4qJVpEwj9AweQZdchcyJW12sd638F9rut4bNhQQM2JPosCbrAb3HNtpU2nWFHzgcBs",
  "key40": "SFSFVVXstjhszTtTwcnwXCuRBLXUErLJPBurKEyLakBSsiMSyR11Sfp7eURzjbwuu5N9hFhG6whiVzDPSSrvPuu",
  "key41": "2YWYSZoQvqLZCzoXCigPewJJjjZ6Trw3Erqk6TfMRewW8ffS7ihZyJEwJpgyDJABBx1TcE1Sqy8UxZLPJzakbA45",
  "key42": "4DNZpYQS39qbYWgLoyRpapgB67QyPT8KRfTpsEFpupMqCasFyBFdjtdsS9hSFvtue7K11RtpxygKFtZUtqBRLmyW",
  "key43": "3kcYgvxeXQNimyKBFTCrXnAF2cTDG8MMaJ4DMU8PpC5b5ySqRUvYA6dWu1J9NkHyUzbSApz8FiNE3HLT9soF4Y2N",
  "key44": "4dwF8FmmWLL5G4vkZ6Dyjma6mMWUVGDcrhiCVTihmtNSAnB6htQq7JraTnBeS3k2LgMkuZbNTwuBjHUzykK5Js47"
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
