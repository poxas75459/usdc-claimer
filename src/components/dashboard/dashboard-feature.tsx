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
    "4FUn19a3gqN2W17NkNBaUaSWFgtwJsMg2mRbUZ1xutAzeoM32Ba6fZ4TQ8FHh9aANZbYmcPiQgiu85xcVzphQEH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262G8nHjwtTGanFGNVuQkwE6nxQEDyq2VwaYufNMQWJV6VjoWNmLJwqhKgPTBMY3ebkPW2LX6Fx9wyW6mwejqiHA",
  "key1": "3z3y1puWhqLSrdtzc3dvjaWF4pa2dqNLGGg1o7ExihZSLNKLGpqTbWsEw3TagdgzuYToJaKL9dLEjTQG7amtUowr",
  "key2": "3ibuCtq7TE4hftEyruqE9ZnpN6iKUTBExMffsi6mgBymWxtgZGsx3Pin5uiajKmD3Chu2pbayvY7DkQSK2QUsgYe",
  "key3": "2HCXkRtrXYwkG4za93niNULavmLQThp6o7Zo5T13fojJspaJh9CLb2M7RdgZgzN5BAbT2jsrg3atKK4JYjH2ckPn",
  "key4": "56xqAJsQ4w5ryZEarAXZnf2PBccd1Fr4HPatZ6mCVoE29EBorSEqo4CzwqnkrvXaW6GgKU5cJTbDaUmqZFeRKHmT",
  "key5": "58M8RjKG2tmaEBhUZDCAu4bgiD5BK1xfGHPAt7edJs1wxN33ssXqnLBaxjXq5ogzicz4ATG3fZxGpyZfD315bL29",
  "key6": "5BjHXtE9WyrhmH4jPxUzwAyYiM4Vq9d6hmJbZqLmc4D46pW3xTKSK14X5TGiH6nk9d6m7v2mq6gueURr7YyA74nj",
  "key7": "5HAwh7hX22yXaxhV7dSv4a8Zo4p1mAqkVffXsqAmKgfdtoJwctVhBK1ffftZPzYbdgc3mM1Fq6zgXwQaeS9zdTtC",
  "key8": "3UhESsz6i7z5rkVZvHLLPrm5JYVx68WivyoZ5cX526QobEp1En9NKZh5Nfk2FB6D9Ywoa3zfoDRDFL375kag25mn",
  "key9": "kTBuwsnh3zzu6emavXQ1k8BXazzd76rtW4KBDRqSybuppi2pmWGbuGBg9MSCzCUuooRfneNMrGP2P3GX5jLns4g",
  "key10": "2xARCd89bHst4cruw7hJcuT9EgwcmaSnjEvJEnZYckJrMm2BwUnMLGaViaC6kPKDns3iHQ1gHpVEvCEzKhnXBDwG",
  "key11": "4prMqozipCd3hyuV1hCgc7ZpRrvqEH4HLgx2v1axaapSaoY5e4iEVMCi32jV8Qs66zCCZyNQBGKCG5XzE33Q1fCD",
  "key12": "4u61WeU4UtCbd4D7KDpY3ifwPzcTYnSBbNJFFzjQZLtWxikMxWKkPzzAJ7gcSu71iz5wwiPwV34z7D8BuQBzfQVA",
  "key13": "2d9WPNSdANii9UKCuTCzWj1m2aLERA8jTs3FeefjoAxi4BaZabYPyVkfqethWfLEQMcfwYkve3FtFJ1oeYZFqmea",
  "key14": "4xowqZGvqK78Pnm493RKM5jp4FbRGNVZG7CXdSxNVpNqNNeRDddmtV5MfHaisqKphnvTPSR5gUGtUGHEzN48Lorj",
  "key15": "37jubUW4yott4qM3VxMNMkmR5G9b5MsF4c2WuY9nu8zteRydFmXKprhCBAxP5cUBuTAurWuvnBMxPrnvP4P8dobM",
  "key16": "5jjjeYmSj6ynft6BURoQvDmfwAdoMVMNfWjmwgKjW1Bg3PwCMJxb1arQ7d7XaZztQeWqYSpKprh1JoT44PRjnEAx",
  "key17": "2oGJj9fGh2FVGjNd1XtTVLR6mZzT2BwXLPZZsaahWDSnyoe9pbqWKMGYCrbQ5qtCSw6yfse44oyNX1ndyVtR5WTY",
  "key18": "2Fxz3GnS3YfjxLNNASmcesF5UWHkBUhJtQeqfJMr8WkaTNq1qT6bfv3Hq5DKPYSEcyBLmVQ29uUxYnyWUjFe4AY9",
  "key19": "45if2jbCpHsu4jqFJPDhtVvBfwTzwaemJSfsVXVzjdqbDnf7bvnzJKYcdY4etiWYCjeAQ8yNqHXLVTfa5ipgcT5U",
  "key20": "59kscbRez29xPFPuanLgaCBS2FiJzb1Bugfj27V9aHiXLEJA5N8Ydwfvd8x2uAH665C68CbMq8r1gE49C8N2JqCW",
  "key21": "4BEwq1PTqT29Z7jqkMcMzNuRTAY86dohsZG5eZ6apNgb8KFMjQWcUNNpzf9AmuyMn4zEqrhV8EjiNU1mme8n8geh",
  "key22": "DhsbzNTa5hVE8Z6tiQgfUGpqNj3CjkF38hVVkxvGdcrJMYE1UYRp3jeETNUw5iTxyvniscBmBDrv5NTrc8FPjTt",
  "key23": "5xN1j5S3bhVuB2Ez8sSifpp8GXYNFfTE3m3HR8WMKaJE2tVntuvaVYJHXNjsaRGqxwPck5w8aA1A2ofsvEjAC33S",
  "key24": "B595xwwJjFe9jbtngSrmfRXjYJUbD69orqXL1nk1N33EghJku7eHzk7ofXpZuTD47AdSXBS1LnvS9xjcCoQDdb4",
  "key25": "36QuYC1JAAnsyS2WWPar4zGXdEAsxSp76i4Qa8zrake9qJT8u2tntotMr8oaPSDcsxMeVaKVPRcxtVz5Rhpdqque",
  "key26": "2yY8DN9EHZRkcSrJCfanexHAfSfmw2GLWWXJCU1FyFZDGXqyB5WwAiiMnSnHQgmpSGoDUDqUPBfdTBdV4Ztt1v99",
  "key27": "2XB1ZTYeTv3MRAVnonMmsCbbwJgrnhKtvRyc3k4x63JHDmZUr2VfET9NtoRK1HcEHcJnWUTUtsYJ4grd3kXdVuv6",
  "key28": "4bRZmqEVbyiCoFZMkVhEnRq7SryHFUnmnbBdkdWrqEMuhnKThsnMGyeETFe4Gwp9ZJxYWWqk7Wto2N8qoTvSx1Ha",
  "key29": "dX3rQDFZs7ZCe78sV9iBQAfkPRs1EAaFMUt71ZpQaeKxQVonkqY1Tv4xsPr5QRe9pxZ2wcefRPantC9MhhYxoMP",
  "key30": "47ivWAMAfTfyXRu7foqyFWovsttdcsmymZZiqWpPTFE7zLVpXMVgk765ZMfNzGTFS45ifriNTfJqSqcvRJZKcpPE",
  "key31": "3wan4T5gGpCyBPMki6cKRxMk45QLhv8xGqAmFVVqHidyq9gLuXR5tTmfL9GTwmvmhNJd6ZrB6sVS44PRDo1r5kVK",
  "key32": "5LZeknDvDVzWMAqMN7rwyYSw4TbXM3inPM89WgEUj4nNbBdYsysfBwqXnpipDL6Hy1rjhvrRHZffks1H5wMApWSu",
  "key33": "2SU2MKf3o4USJbvM7jgLVscxAh8vw5sk6EDmHNbxPhKzCoWSduF7NMYaUzSoBWVoRDC8HSUfdkdyJ34ALkN6rkE8",
  "key34": "3dhADoN5uatq4LpyaaUCenVE15KwGHJ3ccnfm73j36ZidwBdupt1zMMERrm3Bn5uUDDfHYNMmWgxmpNeuFpyDaab",
  "key35": "3z6YzF4WuGBvN3E9R2HB9uag3UZ64chxfyf2szYcJ8kvaCJjwN36YfYkeHiPJNb4gYQWkGWctx7bMhrmtwmKJyCM",
  "key36": "3vSxk59fzDjAN8y54KauYGPUP1Wc5Xwi3mQX8rqMdxQoZw42EmBUyzwBay1cK2prfKMTrid7muTqEZvwfNyC1NhB",
  "key37": "yTsWbbZq5XuyoANrtCH2NbwuT6pALfbckQKde4PoQqAAr9Z1Wxva6oA3J9wyWkxZ7pNwhyYQLzm1au8ogAPXaix",
  "key38": "2AJpEJ9uSoGHz4nJhULk8QYAJyLQKZczCXhWLCJLVG8HuR3ZKqAPKFQnnVEnWec1XFUVEn3ee5N33QuGavYqyKEM",
  "key39": "5JmWfdbQE5cjqvoYNxfH6aiYX8Qc8mnsVwuGnW92ShEmeDBGPBPnTm3oMZYMFntADmyVjAmxEMr7QvG2mZpvioj5",
  "key40": "4yZHBNNfvAF4gj6yeSYoP86U6GhASsUhm57ghs7LvQwBWkqzbkN5GybhJASiKh5FN7hcZQcxExx3murfPWt4XiFu",
  "key41": "4fGHzM3pA8TCCL3B2D8n7xh6Nwacxx7jB81heyKxTXJy1F3DUAFocHA7icuSApY1E6LjwJAm1MgF1Pt4nY2iT7qw",
  "key42": "4nFqt1H6nLPvvDyBicVtecUSPyJYU7b7xvRzzrjXTockrxybcVLgMnUs6XmYd4GMBBQwbumTk2Wn1WxoxgZwpXKH",
  "key43": "hJtwv2GvwHj7HRfKGSeoWpJ6Q7UZ2LFpkNHAvHG8VuM2ZW38gR9vzZ26gWpAvyYjmgUNduhkVS5PqAjGkbSwQCT",
  "key44": "trkX6DK2cGbYvda85F8pjBdb5LFVLraLaixWqsQFL6mqPLrocLbkDCzpeQQw2o7rzHskig5G1rJ3o1bVbNCEmJL",
  "key45": "ZSrPvGbGuZTKswHTMp1ghJ5L1rzkwssxGkXzMpmr1QXcNr2hBYePXNJ9PCXFXK8F3gqLF22m6R5LsC5wHGz5PLJ",
  "key46": "4joh8P4djLFYH8BH16U7hfAjWnLZ7P1EZLs4fEuB1qbB6ZmEroaV9CWki7ggHg5j5Tbj1w76vgC7hAsXrShYYMJL",
  "key47": "3U3PaW5N7CT65X8UbrkJvtgzyBbQgJ7SFn2Z6S1osdetSCzB4eemT1pApCjV3XpBUpMFeyyttU75L1dj3QP5QVNx"
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
