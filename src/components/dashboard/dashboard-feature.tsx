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
    "2PVZygEa8n8EpWN2EZnzsLxH9LSKFPj4Qky5Gkss8kmLYf5mTQKMHYfBN6EfGAgB17qfuQga3RMAkdNp5P9cX9XV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCyanwFcG6f93Kmgwfy5KJ8f5uum7svvVQJwqBivDo3S5cHLM2HU42sMJ3yhPNL7BdmywrfUaWfeMe4AzQcv5hD",
  "key1": "411czTfBSweXqP7oVNmQmoC6MWpTGCpCQn1p84hjptkVvb7VdEgFqdEerW5mjUA8GdvNcCJqquzXs15EJLtKaJDE",
  "key2": "4KnLXYJcJAps4rGXqSEuKabNJeKqCidCLoWwpDAZhVoXnjbxsCmhHDm33AjRRQkMQayqm6GFSydBHiMSCDtF6tZg",
  "key3": "24aqAZhrrpUfkxjMLyAwuoVcBaZoWaiZDm4T42JJjTHZjJVEy5WSFRLQzz1yjfSJzLdNpw2w7qpyUiCLtiS2ivbk",
  "key4": "3MBb4NdopkfLdMjKdsb4f9CkfxiEhWGn3J7iDUpUjhhGNi7ebuvkaX2aAMBCrMcdMdivgay9QzwHuQ3nmDgk7P9e",
  "key5": "UdPWU6ezf2G5go9f5nmZVo1T1Gv8CeJNKWXWteeeSmJiDEN56EH61uRLucyipSMnv6r6NoA5WjUSEtjpX1MV1cU",
  "key6": "xScu2MUQrmv3gyuupn8iAg3LZPtmb156vc5HGmv7owJRpDP82EFWakf5Nx5UX9NuCN3meJWMyxitRRXE2LWKymD",
  "key7": "5YupxtyFeTjGcy1KCSycqwQBZfx3ycwYNwUwoNvb9UgBy4FicFRPxv4MXxFZRkqTqemRsW48viD3TYGw4YjCGzxb",
  "key8": "64vVXXeB91UTJQCxBkyqauKtX3yfs8BRtUW3B1SCGfzGXygiGqTXCb1zUVbPPjGmDW9Szsy7UJ5zjvVGM9wNsTPK",
  "key9": "TUyFFaUfQMunpUMmxs8MBkXfMyBzKicDDVK94fYZ15QkWZWJZ46EVRVtqnBRv2dkb6KeNsA5su5DWeAiU9aymvP",
  "key10": "2Lw6LKBWhGRdjUCMobCt7cuw6wjv1fxrfNC2C6B9eNE1gPGf2Crj6uzHHL1ppquFf3WXyFVV7SWWKT9VVSNNhEx7",
  "key11": "3zLXFAaBpqqPgoCrtDDvTBKRCZrKQg8Jt4qgy6P15jhiWp9GDeGXHVDodmDcLmHA9yy7SyAiX2TfYu8vnhRraP2E",
  "key12": "5Gz8r8JoXbKzYT3QRoP5MSg4Prv4ngYP6uJ8UgmVmTw1SYPMMWSYj6httqgqYLV7xHupxP1swj3Yypjua6oBDNm7",
  "key13": "39C8VogXspuVafepXiA1VDu9kVKUZioXx9J4zqXcSDwe83Rtx1ePeyGYNQa2ZnZ5GuJiKgQnAzZbTQrAQQhZuk5W",
  "key14": "5xKutbNy5udcTGwavjYXbwBUSurCwr8DLm8QvPS7ioiBznxfqCXqTQj24fc37Z9yTRjkCCELTUDbdnEiRt6cWTeo",
  "key15": "4tqcRzu9ecvFXpS3g3zvdWg1yXhXYrSb9h75XDGEiYNdDbqdg9bvV2tQUjY6RngLUdLKfN3zdeCPDdpEtPRnvPrn",
  "key16": "3vyE4wsbj13PPYTdRprNjzea8SKo6swmjj1mJewz3GNi21TW92gpfFuKgADSuB7UoXWHgWficpKYnQcWxGNGpGDE",
  "key17": "Ua7DnX2uvRyAgxPYjPYYcFNQUpKRc9SAn3zwoJXBeuB3sMTr7F4wNAQgSBstwyGy3g2xxnVTmqQ3VQCmnWtiqwc",
  "key18": "UuaP3F7uMHgLgcGbxNGGR73qW8wSGmSsoPjwoJaUPdokppNnAwkkZAoGKA1kUGu9PV2eC3wRvMWAmJaXnMP3B4Q",
  "key19": "4xRYrN6xKMF7MAgf8UL2UkJna6tYfGdsUiq1Q8AcQGDoYtcDnZRCm6vGpVWHPWzMcm1CYYWN8xAVb75gRGCmZoWG",
  "key20": "2w3RLtbhpmCqhp56y3oy7PxH7sR3EUCS4DZnP9VHGcDFECbi7sWCemFLt54rwiwkYoEEvpAZkAPh4nbgNohHqqLM",
  "key21": "2zRpMQmAspdTxDwoGY7uNv8focYdoqNmp4RicFoKYcLVyEzKAHgw7wiAxAVRGP5WEaCtYD9BAsWrPD2PwsDCCkD3",
  "key22": "5dtJZTREXmvAxk6NyKJ7SrhwNwS9CT4qrVBBkRmQcN69Kwsww2nJJfKXSXmubys22D952ZkHQx2gGUSpmGTR79oo",
  "key23": "4WWfyfEgwyGtmQLQsARMU8mgVAsit3xDU8vWApKnUXYi4x8fAAq6s5tuVB9GVYcgzXYUxhzdeqyoiounAi1ypjVg",
  "key24": "3Nnuy2JoGST1qcVjw4DgCxCV7d9MLSCjF2btFRZzwJutfgMrFMmyQSZJwZtpNQPE8shXhMuQYLmfv2KoqhTMgdpH",
  "key25": "3rd3YX2re5MjMihxGZp8AZVYu7ENX1PNEc43bkNqBNo3agPM3v8VyS6imLBZJ7ipjJ52hyi4x563THBpD715UTUU",
  "key26": "3EmJSmrduKf73pEodXBVNVuqvEvWFf8feag2yHWuB6f7ZavLT5kJ7imiUp2frYLSphiRk8bChNk6At6XA7ph6QBr",
  "key27": "2jTQhCWNhEcdJ3efYzWZctWDEhq4oRERBXwEB4U7ej4xbsFZgQjjnjRkLi1kiCKQ2tzZpxHnRWhhNNfegj846UZG",
  "key28": "5VakxqiSMevWjDALFw9Rk8tyzzmzTeeqjK7osLHVLEMmfZeygPEiH9YQmVqbWJKKDh6PCkia3sJeTqbug3mQ2nUf",
  "key29": "5m3apFKTUPNQQigFEULJMQJF9bf2URA7wzrumKBtweupwq8SNX5SvgDpFYDRAmrT594vebCp6Mjr5tMH4ztXLuB7",
  "key30": "4uoMtHYfPkyguRq6XDicgaUUawALSN5KTeQ4SmWgKWAbF4siZ7co8B5zY5WJQsg1F53WLArXAXfTc4TZfyjBhCPy",
  "key31": "5FsZsqxxPqgfzScSLvYaBBnXUkRbKgMFoKguTHcmxQsy7tsAJN1xkgwJzuQaPKaxW3sida9UJ1cdhCpD8jRT5pxG",
  "key32": "2XWF9y7kfAMGhjDXnvbazNK59893ztXUDxhV9UrpNSXSkRUA9Eg9zNCsTHRhuHbbx1zBYC73pLMiPNq3mRuhAX4m",
  "key33": "j4FvR3nE8F77NbvDjc5vhU8oSaowoGEbkjdph9Q93u1GwYHx2N4jDZwTNA7ScgPZ7iaoLrKD9ZexUCgX32Lk1RM",
  "key34": "3Ruqb8yEpUdehJXcdNE6PnExrorr3QLV8pKK5HBsXJRuE7AQ5qLh3kiDKaN7pCuyZL3qXCaLPNZvB9p3EGQJtjxg",
  "key35": "4w2BTEYS6w8T6nwtuvctkJxQDiHVxnBVbPeRVsoF6H3wjhMcNN3LdaRVsaiUGUEVvNLYv8pGjgeBsk1ZcYiW3yD2",
  "key36": "WpBUgvtmAZ4Fsduwdm2ZHuDrDGyyzKBruTubgUdWzuHCsBw7LaV1GzGCJGaH6mGbKs3DLm2WbKGQG2GRjpB19Bg",
  "key37": "5gytbLeiY4TRkeU7XNfE8Nco6aa7gP5KP9eUkvb2yKzhQbQhE4M8GtzKxnQkNzwBT3KS8FJ4ZndWzW7gAERgvjvx",
  "key38": "4Q35VuHVrGbBXSX4HqfMqJU1uGGXwtyFn4fbcqZ2XpCjpGGzkb49wtxTi6w7cHVyFHJt9JXPmdVrP1Bz3ftrBgG",
  "key39": "3TzZtMJ6ZnjfuR7siWyJNxWUEB934wmZNwhn2hE8pDn2bRczMTq4nfn13k8wT11WRzxnpBXk4Wd7s4Qaf5VPY54j",
  "key40": "65N6wsggvHWeWoLjamfaLPddJ4kUKnZkvAHNQb7ACvYcyrRbS686BXy8azMJrZhBdA8ysifi2yA8KnPU8SUq6ZU6",
  "key41": "3S3Ymtb8eTAwfcp2gQtCVjcKCaZnKhnY8k1FEQbNHz9SKbm7scpxjJcAs2vxFxeHRX916iLeXzL2g1W41jHAH2C",
  "key42": "51kFXxF3E2upK8iTpfHrm651kng4nSUyPyprTxT76jAzngghb2PYAdAVmadYucmFCkMhKGrv2y2FvgzhLob4Sw1a",
  "key43": "2R9xKpq1iibJw3ULWMAwbLtTpguYnviWsriASuw3SnxXx1n1YenF57ak17EYJXdRExWe4Uqs6zMofnbB7GUbvo4r",
  "key44": "2hejbb94xRvw54G9m5CfPWeWUuGToC76rLpxXdXoMSAC3GfoGwQwuLdCgNeYNhunby9uu9hHRHShaFLxHYuXM38Z",
  "key45": "4PUo5NQnfH289xqQUu1pphZMQHbo1pjhQSkwHUwjTcuUsSdvFkDk72o5Jgj4NYtBpFcbmqUfUmhUq5ZCNPqkvLNe",
  "key46": "3P2ygFFKi7g4ohmQsgiN2bL2Abep1Gvbkz82MrCPKTVJpTnuZpYDhsybR9pMNoodzJm2v3XhMNyup9eeGpuw2xfx",
  "key47": "2rkw7AX5NCJR36y45fbTasp6PoQG8agdLRuQBJPzCNmLZWQPx43VpmzhC3hfRQMkmwDgRrVxqLFkWG3N6wfzQvmk"
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
