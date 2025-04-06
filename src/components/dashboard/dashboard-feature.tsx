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
    "3qAjgvrvdT8shNKv4Bh1asmaZw21woFcj1n4S8DTKmxyJLrezXSAtqQbVdwJPXmU2AFP1NaqGC6Bdg8nFD13bBmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53eNQXCX9t9ksvejxMKs9Q13hsoS5bF3tHCbKVx1T4FSZ1Jdgix6WffoMFHtP8KJNRPPp4AiVoCKgTdrHFGziiH5",
  "key1": "4gXSLHBCjZzh7mQq4xtmCx1wnvRzDxCNNxY4sEaPpHDYVM188MneZB42oedtytZvER9kCf7VsA2BBDEVH33Rssik",
  "key2": "S13cgtdL2CdCTxCYXQ2PTKHWHe2XN1iZZNasEE3EM2figsfPiSKWuiBunpqkok4Sb3rCA7F7RYeEWmUnkPrwn4o",
  "key3": "27GPiuhHYsaueZdr8gK2VLcbzh5G4ZM8Jie3iBGofPmC4AkxPvkBwbJVvduvRLDL5tdE4E6LJBXSSPEmXXrn3WKD",
  "key4": "2SSNCNWduEMwWuheE8KXbXrkMJLb6uHV5aCkGhfwGPfFh6rgq6Qfjy2v4P15CvP9VB4mkZxe1FxRQg8svcDufeCJ",
  "key5": "34PYQmPJKyELbenfEWj8Gg8YeWSM7Gg9WhthYibkZS84h3oE1P3UxuBzQnV8iYmmcvSY4hKacHJabA7EUMx5nFUD",
  "key6": "3AdYhSdSWSLGoosTyrGe8ev4FXhoh5NLAvD3wpMTVr6SHNQzjWeHcG4xxKVovkHpfeNq1R8e6dEqzxeYf1yp3J5V",
  "key7": "4vDH1qxXy1VQAcAVqpEnr4Ly8yh9JZttRvMoQm92Zjfyq7eFbRmMMJ7pcjL9W7idBzf8rBYYW9zqJCpRP5UP7TP6",
  "key8": "5DutiDrCjheDmVJDrwZTwQvf5bivJ6zByLey48YoMvur6yFDxmQuBRhvZ4ov8KShijRQB24WKvBS9f1kj56cK9zo",
  "key9": "2Mygkahj8yQZMTDpt9KMVkKpDwRh2aB3miJGZfZUwySRieUSqS49Edacq6G9LnqhsySRRxpFE2xj21SozmdXb6mw",
  "key10": "2ZmVQgjBs91HRzEboEX217HJKdLA2WbeuoHKB6ka9aQ5twF6ZFphnqAedwJop9SyczTUs7PSt7adHnTmvHEWvt3r",
  "key11": "4aUCvu5F437CNa4qNetXC2ShSD8AQZ9JnuzvHzmqBP7DLEVkNqL1oCc3VzedMfpnqMkzF5rnCs5JMduotYaE4o2F",
  "key12": "4fgh68fykSGLYPF9e8eh2Sx4qg6Qu4CRZshG65tJVTSoe6B33zwYhKGh2tYPdnLnVfM3V8MQonKdkybsNn6jZpAs",
  "key13": "3PLVgEUK9QuKxBhdCGmkH9TM93SJK4dAkmAYUzCk2JM1o1vEHEw8E7nK4qigr71s7wNR1DPEzybRYeDiwvPYECut",
  "key14": "4yv8NtaGFj9Sxi8QWYkjJvaYoogPW5KKjzPJfrzqinTTRKwsdhstiPV58EFGA9Pt3ocejrkCmPJ7tYLr9gpNoDUd",
  "key15": "4HjFrVrH9y7saEy4fq8g1wGxp8DXvdPX3WDG98WbPtK3MJKde4spbmnc2iqSah3db7sPuGrPg4xQhzBdToWzQUA8",
  "key16": "P8zCAuDWHrE9RZiMpnnVhJEY7phaCMPSYDCLfy3pnnaA6wCCPe52vLV21Qf5JZvnTX8icowsVRg6wKLKGuDw7Pu",
  "key17": "2d1oE19187wnACfCnidjunZQwpNJvU1LFZdbKHw2svvyLcHMDTzC9ALMDJYVhKsPRxVeVAXYMyqTTJoXBbjqNpft",
  "key18": "5JQpK8TbLHMUznMTMgBVub25dvRUnWpvfUN4zYpMqsGfeseC2ky9ANfNQQAhgocBVfQx3pSZ6VKtrzmjQBFtUKny",
  "key19": "5EnumNfnqJqRgQQqCiY6UXGMEVLE2yb5rKFKrZgoWbwgDWcGK7Z6YCUkJSNaN4knN3Lzm4VBpZoAjWFHXTqKiX9Q",
  "key20": "2wVE5f5Amy1MUHmxPQC7dJrNAPcAARnkPNaGEBsVtu8zCWyJrcdKN3nwQutcHr8AJndiXXP4Bv4gqENrj6Bhyh3J",
  "key21": "3tpNynZB4AEZyDtDQccuLYU3FbWE1Dswg6zx1EtzSLepTyd9e5BTJeqFQ5vXhhRgnTBKrsFhVAZjToW3dfmK4wx5",
  "key22": "2S6f8Hm7LhPutgQ9wYM737QcmiytfBrQyNFcLkGkronNRRmcRga7AScmENNuJmaVuzKEASda3S9neFbrGWoUvQjA",
  "key23": "AyPwgGo3Eo2UZKr9HnQu71f47YwjksEuFAtHdVf1RcbMzHBNpFuL5ZUF9TBz24nHqUX9ARuocNeSyVUkKQSeXmR",
  "key24": "2XgfMiiT9AVtyZRJBtYW9sXzwa64eyBruvbpuFwmozHcRwsY2cUbk6fJq3jrsa4QKXbeNkgPvok2LMU9nyCdMWXt",
  "key25": "2yx7cE92733xcY2foAxqa9iyJ6gFmzrLoG4FeLcWFM29AT3HnU9GSm1LqjLvws1pbwxuXQuQ5cqLCRbDNMGbvYyy",
  "key26": "2DRjDEx9zed2JafdR94V3PhYURXsMHi1PmJymGYf2HwXRtwoXaYWxPFQ6JpfhaPQqWK1UWHb3VwRvPz9mqMo3JLD",
  "key27": "2yHnNM8Ns8bqBaJ1TmTdyxrwCQWBgjVLx1AsK6gS7TvHv9CZd1BnEngapndXBypvmxgLHKhJQBnMHhZThAjPpuS",
  "key28": "4fELbC1xrWhTUyQeJ6ZVPEgr6sx1AgzXeMtj9TVDxsUdBm4ndYnhUNiVZKLrf3DqMKCx3xbmcP7Ycadym1UZ3qxh",
  "key29": "4dUYxLvKFSdnPy4H4tXW4F5EEQ4moHtrgxXXyGjKazCkShu2tyREx4u1qU2Vqp2v3jAhmAPTFP3SWYpfsuuwmokZ",
  "key30": "2A4KD1x6XVe3sGVYP4C7Tznw4VEw8fvm8K3azWhXgbGCbFFEpqtZ7KNECyaeFfxJ6orXBKGDfSTNkZn8gj6FNpsy",
  "key31": "1hANAKWWfk9atzPwV5rLAa4X7EEhkARc4fd36esPNDD6m6eQFKBd27UszEqxPHY9nZvwd2QYYbFafynN6SdDZgS",
  "key32": "3q1aAJ9pVCFQhBP25wpTMZ8FGos7ApsXQoLZKRuBvdSxzNRhZgN4p7Y7dpPND6MVhD77tX9TiQQf3QcQuJy1kyme",
  "key33": "WUxrqTRb1DbTfaJB7LCLZ5mfLobAoNjasNKphD5Bwn7dHySiutpYMV2WGDpriiErZmS1K7BKNepNiqTWt1BMWX3",
  "key34": "5SmVyL8XEG1w7xrxkFF2dBs8bS6GcANyyRf13iestAK8qpSeGvpEFjWDPvG9DDuUCdyLFNaaaG1a7gVsyKbyRFsV",
  "key35": "5s4ixUMgWBbVU84D7if7E9V3fcxM6bmHXCfdUcqT6MuS7STonhNFTtPDGWTifQXV1KZTWbn8G8t88NVZiiZVkfQC",
  "key36": "5PXcUTyWzCcGb1tREKFk4pX6HeHNgyNATVhW1Tpb1TS5BBw54rM4R5FfMCcbn8V5pqrPS9ARHGA5Bi6AfnurmhL1",
  "key37": "5WorzVZM5qjPd53VecoWMKdtBuExUtbSGRZfPPKQDXgo1AVhXqB9H9LKcz4yjGqhHP6zcVUpNhBDgRTt39hPsUcZ",
  "key38": "2hBEEDGXyxBbT7YKzrUuFw7ZbC5Eo2nU1SdoNcmSRS6nvnEaNEd3M6FoaxS2d9tRZ1VbE8993mwDtLqgtH8LyTrR",
  "key39": "3gbpdZTsQJTFWC4Xn3Vj61Yp27TXXTN3f6jfNEq5Vz8unG7X1WWJ7WK7v2NDSGCxTQypA1xmr5SFN6mmj95nFDhY",
  "key40": "4KUWN81faitBgrCRNTnKxtZy3VCo2DySbzm28vcTWjk8j4VqY8HHth1Fc7SSZwgL8v6sRBRCjHSroUr3A1XcgNG6",
  "key41": "486fVotm2BaNYxFSizSTjz7YFbjWUfNKZv3d7ojnmjsVwrKgNXL9S9iiXZD61PXEakV7QWDG8EKcxunYi58qiQDN",
  "key42": "5k8QQVsBX8Ta3Go2j4X8N9izvH9B4owN4ju73p899HzxK2qVz9ykz3M9U3r5Q5GE63gvNgXk1s1mERDSRUi3D9CN",
  "key43": "3CVTQFbya4jFYxhwzzJcCkEx19jWWftTgWYJLgZ4RUdgM6nRWh1TKY6W52UebuhbTtQjv8Z94vz4boiKGMjGDEKu",
  "key44": "L5C9NnkLmgTcHC4ZbcjUtES4Y7JnLeJpQi22jBzcNuZGo3MvjdJkE5JfE71ZAgYEHemxv8DDa8xK7HgiifVWxrR",
  "key45": "pq2hPvUXTsGthFRg4HpUuwWHxxaF6PydB8K35kgBoqKjZ39fSQ9Ga1WK46XUMutk15r3nT2tuxPF2tC9NEogB7W",
  "key46": "5LWKYJsumgMvRF6zrU4S6niwgbgKaNd4g8Ttv1z4bvkRqvwa7re5wjEEQsSqRa39NjXYnJcNhoz8vhwZPvgkDetc"
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
