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
    "5Dut8kKkjKJcmm3H9m9Bv6KiCgHF9g7Vmxqw3oLvAcskAtbiHdPHMg5uk4RsjkNz3xazeHPAHzQPHbCHYdST6bHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67JxVJTkNCwfc9me34BexwcRRYww8jih6Jkq5BikFb7GF8akVNt7uKtMHfJyeoQi8UztsvJ8XyAyg9T6RCzjd3cs",
  "key1": "37g3PcdjAviKycWA9tEmMB7CdGr8uDErkV4hrBbiFL6W89RVzN1Nt2rn2eVJnxojrqYtbPhNeogxWqwXwEY51j2p",
  "key2": "3XvhCjuK6XYmYo3y1LugDKZGbyZJxbbgQ6TprorPXyRy24pbh49aV3C6VdgUysBudBB2HYJuj1Ait3cP49PRa2i7",
  "key3": "2UcD3FFVpM4SdrrLtRPKALQBD8xPAhPRu9B7gzv8i9EsLdDYRptYZicZJw5A6b6cbYy18mZZEiYBbR7fyDEi9qSy",
  "key4": "5YZBF8Kidz9TvXXRRQrZrqzim1DFyN2mbG4JcNrwhQDeQr4Z6nX5RbjqW4A84H45m4rBZ1HNWf3jaDdGbrnuVFJm",
  "key5": "62QLamJz1ru6B8bg4aSXqhdKmT8PDX2YHUbAB3SpfK5QEyYf8cEYiFhW12NdK56s5fVUoSMdJ2D7v5VimLNJHSrt",
  "key6": "2hCLmBYWwW9jDsg59KWkmtapeuYt9LoRMzvd24xFjHnXrpdVcdtqhVGgv2v57fbPa9yRp4oN8kEBHb85NfQbHsav",
  "key7": "45TqsYLC4Y8H5yFQrenvRZN4BcHHc7YTh8aXtZ8p77v8oLJXuWwrefdJMufNGg5KHuhkEKUkHzhdhtW4dm4mJceD",
  "key8": "4HYVeCAzUtnKpasLDHe6zSamCshzADCo5unLWKwFoMysRd1LvwY5uZg5Bwo8s9QvaAeLZS6ZHCj5B5wa5WBennY7",
  "key9": "35PmYcYwMmF1ZZw6kbKKy87sFbJVW6qDNak8vjsDWEkx9zadTWcmnRD1tn1ushdD4s14jGiPxFsVGVvzRjKwHrWt",
  "key10": "268y8cmaGKYG6ja93hEQarm7L2KFFrBfGAGVVvmJcRx9y1k4DtMQnqaxU3sxHtubZarbZohP5iu6U9fHKCsRkXWo",
  "key11": "C5foqgtAWRmH3jefp337FNx7FVVa4xVs3MmJv4xSyNKgNDhRdLpnan6ofZD9rrNvcQCWNCMwUKjKFKy5LyB3Non",
  "key12": "RzUgpb9Cf9yiuqNZRQMJMeZhrN38TxuVeeKjZr4ga3ndVAnajo7LYv8Eb7JmHi5ACWthv3G1nECng7gs4L6gLEU",
  "key13": "5aRBEhYquSiwmRP9SNsD8PvJpn4615rt9b9o7PtFsMmEEHirBvFRnXwUJSEd71DhMRjiBPZsyixHWK7zjjVx3n5z",
  "key14": "5uiczHYgc8KpobZVWxic25W5LAPcPL7MUoSdQxu89ZrwCvLNrZgnSmRivwCbVG8JVmcsznfAAPskeco36Tz3W2cf",
  "key15": "7JVgADRrUtRbkiDcrFYBp8C7GkUmsoxm23KFwZURzrthz7mamodqjhnVkRqXiCngrrzkiCze9LnQBVusujEwkzj",
  "key16": "3GKEgz6DegFQar8Na4cWZCpA8ViVSzzDBgzBTPyASnpLnhSbZaCWt8BpdSug8UjLNFdsYBbiHF3hKNTDs9zFYwUY",
  "key17": "41udbp3sYMskXG6nP6PjDbj1ArbTWJLNvh5R6ry8BBEFuQtfoBEQ5qdLXJ63HrFip8mGms98pFau7ANogbxFc8V9",
  "key18": "3o5wPugbmqiinD9XBeuAvAGUq4j7c21E4DmhvAeu8uHwy1U9ZkW6tLG9pi21ebwmruRDTTL7KGmqno4mpQ1jRc3U",
  "key19": "51EVRahVZA3pwijdfN6NkvfcXCQTeHUHuD3fa19Zg3uQDhRBBHbpCRAjey6wdnzmZL2iTJpU6fVWe5759suDhLre",
  "key20": "ymmQqAgtd75v7c1e8ofRACTNR7jPTKZtQZNVtL6n5tjcTNfs6wD4hSmnrtyBcLvEeVtMmMtEKdwqRHqMQBGCCWg",
  "key21": "2aJxpQ7DMFy9yg8RKJTjEF587AMFY7M4EutACKEAWC6LdM1E4hV8uXRFAUTbbqkhmEHmSUzEj3DDCKPgVfPqyM4U",
  "key22": "4WJHSxfQg3R4xajvSfaZrxzMW7kHvSbXKaRp8fCar22ghr3UZPFBPC3m4bLS91pPA3pzcQhD15TPvoZTQzHwsLTm",
  "key23": "5nKUxrYLHh1FgxUdgrsPcEJUsuqkFPopdRDdMntwhoVfs7YakSZfQ4D7FGtV3i8iqb8Rc95eLVK6DK6XUnuTME39",
  "key24": "aqw4HEChBMQgpb7CsCHqEopj8FNBR1BT5TB1PppkR7a6NSYWwSYUTPDDhkEn2ZjbTmj4iDz1Nr24cxMKJCW8CZo",
  "key25": "34ZMqimHLYhCpnaFUmcSfv1ennfusz8WHXELXGGeVFAabGAu8YThc3sMPmy7zMiWdTjXMncUBRy9XtvAmsshEimN",
  "key26": "2Nvi2bbdQsLivAd5ZKasTym7vFUFNEbMavqzDJMpTTGbhb5unCW6yJLrLaVd42KMdEuQez1SAicyVJBCndxeGX2s",
  "key27": "58UdgRaMeyJFcaSMYeivBowyS8YFJgL6iEJ8kbpMy8PN9khiGJrXXZn6vC5jsuwhTZzFtCaLzAqFMDoMUbEtSBRE",
  "key28": "5JAPG8VECgTmeLY8tDZmGhvU795hAbVWg91ys9TsfsXWPDodWJcJavNSGaMFV415DcHjjPZRdZrnAoNu41nmdYa3",
  "key29": "215d7k6jbHNTnKjfvoMGDpRaL6NkfkAiGz4ntqDnKy9i8PsA9Ft7BVYkoNyEHwUj8k2zKPA2Pu9AV7jSNMQg1MuJ",
  "key30": "5ZfdqRpiWSCRmQKt21XSq2w8UAJro8MbSXiQBLaadXhw4YbfBV329EAiQvYM1WEYbguvfcSkCizPQ6oFdU6YoprH",
  "key31": "4EwWkRBtnwPMqaxhsMJK6cxjuWYRvPCeVLvDuvQMCUqDsvtDHJCwo5Mwgo3JzEmCsoLVZdaF4jxVLecfQtE7BR3n",
  "key32": "2nEjGMPtrsV6bf69n5qAwoiRsZK1rBozCMeXFRxK3p6BKWJ3mGi9cZSUXsnCi3dUn2WFqszi4434aDCrZGJmEzbk",
  "key33": "36XU3yUZPTfewFn9SpvbUWriLxz6Ri7SwpAy4DNRnenVCnnjCiVcfCY1ftHhNL3WeViUswcYfNQs7rDSbwTk3QdZ",
  "key34": "m6gyTa5FWnMdxwYmz27rneTfUEaYB7VcBGHwPt2GucdBb4e2nqrx7ZLupekwkAF6oaPvMFgNVg5JPQwTwbpNwcx",
  "key35": "5aJMY5mmFWQSMDkcwQAjy9hHeyYnAn5xSAASqhnnuN8P8Jg3DkmGRp5MwqAgrTYNS1czBBTRSrEadoFbFzr6qK7M",
  "key36": "2QKdL7M3netF6PCbzFfu5fKyK4CLF7GFh5c2f64XUaVDNGLg3fHzRZA47RzDXWHCqKXeEcYPoCh47ynt9YBEC49V",
  "key37": "51CGYCm8rxsZKVct7cjKrbTWB7QnmiWQBgajo9WQZ5yotE71Bb7M1NXprWXbbBNoUfS57TvFtSkQEcH6ndDxDJvq",
  "key38": "2P2cnaKGCFioV3kn1SbRcupFRqnkU9Jcpc8YJvrZbBidj7aDkU2y61ifPwqU4rEzNRWTp9hYSV9zmgm8qtZV6kTJ",
  "key39": "67ZzZktu5LPSEak9qKLkvFK5cqjTCTPd8cmGseiK3UdeovpFCFrheJiCyCKrwWSLZrxH5riTaLJEEaXGuqQDWQ3T",
  "key40": "rnu6yDABr2VZtNMsxZcYY93bFpCoxawdicLW5Gn24GbPJxzCm68w23Jp75WkZPnCgx3cZAdJXTDtM72axDDPx5a",
  "key41": "3CZeeCRPYUnGY8gZp7V361mp5bEgmcvBVSe72FSN4UvBfxfYtVC5Bycg6UWLcKJMivavuGdWrmhVgUykq3cS1MqZ",
  "key42": "3rfhRXK6ofPP7KQAu82RrRA4xQ6w2Fy2EF736p9QFteAsD8uSgzsR3du76QmHxRAhJbe4wybHb5PRHZ1Qvw7sxy7",
  "key43": "2cFR6XB4GvcZQeQxsE6Bmwi6dXm3HT33vk77xxq7mbocPGVyDbXH9utQ6jj8Ejr91W8RZPS7XNoKD4nYAYVcucFz",
  "key44": "3YSiKs6phnn9BjRJboEA62Mgkped7su5n1mxZo1za8CJLoE2kXpcZqaGwzjZhM66nC4Eep9dmGPrRguf5KMKBoSg"
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
