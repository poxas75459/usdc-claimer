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
    "e2a1qSTaYNVDXj8HeSLeyYS1mbZU9dozh2QUgBVS7eYS6WF6qf24UQ34oo9oEeEnNUg5vCUoym2R3hs48qhnvg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPjdqSjJRntnPyQFFgEcuwDvzepqkiVyZF9d2XfZvqFLg5rsvyvbREjL1D2TZADyvfpJGxZAdFg2xRVJL5c2kfi",
  "key1": "4H3CXydQ86rQoUPMNah4hYF4APVUWUwqB7FvSi3gAAeuQb6jP9uNUSDSStnvPA1zqRBTKkd2ccruAGSmzuDzLB62",
  "key2": "5bT8roykvtwKJ8fBRTRP7W932Ms2688BBftdpLR5vzbPp4RHXXeHSMFibr3VqYmdTA6EvfXmdKccTixFaSFV4zRM",
  "key3": "4qF5sHMQCFFp76XREFTMUAJppZkF5RoaXRJpoynPfJagzxpU8x2RJyUbEPm3sYtVj6s3uWjBBS4T6MW5fe4CmLMo",
  "key4": "4jEybfaLy9TpyqJuXKtMEjNp8HSMPTA6CGtgAtmmv8NxBv2DgqGY3ctEGf8PzSYgkPUN16MhemzcevdykJ1qtVJm",
  "key5": "3dvL5Qd1WzWogBrHfH8hQKVP5FUV1wW6jjEHDwAqYBDBg6k34aoww7hyykxTVxNPJgTHPtXmDrFgiRSuSNqALqR4",
  "key6": "49GdWLz8V4x9tGT1yzV85dy6ZFLBzTdHSp2PMNcesnSDTKhJ472byhUbieuhzGjvqd5wHixqqfmY3qwvkmYgqt1h",
  "key7": "5LXVh5gTFKDXaZ8X3FseDvc6yoTNKiquGJF58dzGNmHsk22mX7KnWfxErTQxtAQjfJJAXp8zcoeZq6u5MhFAYinF",
  "key8": "4GMHxMVgo2fmaPsBnqzwzcg2mRbXd9GihDtpDtVuJD57D9EFNtSJes4HkVXMwkXUBq9K8XEW2pzHAKcNT7nHdcAd",
  "key9": "2URQQYcpvY5CyXgLP95hGadRRNHqXkwQhpAyPrH4qUBMcZNQUGEjZbagAj2yUtd5pddTjmDLsRY5HhHgqArfXf5W",
  "key10": "4LNqT1ru6C3ecGk3vu4QZtLsQgZbFv1tUQqBaoar5covrjmRZQqPqnE8VoJBuED4JRxobuHjrnnw2awe6sfAWqdT",
  "key11": "PZx6f29vRnyyNLYPopiPyx2jYj4YMFrDPe43w1AX7wMe9BmbxQWo1aZDNvkZ8up8zNrRFtTnb2XzsBoFFf8NGAX",
  "key12": "4US2aXaBcoNCcd5GXLj1Rh5734qDSpoQaDtsuT65Suxhs55TVHoaBNe3tgZVpWjXgVjQJ65mxgPzo9c5nmFP73o1",
  "key13": "39fKSpiuzaJGvSR9XcrPxdvCTV8jT6wCdFtrbcVTgmaWbjSN2TGA5dn1ZYLoo3fa2JaBCbTyjLSfdp2KMniQRGdM",
  "key14": "v7cq62VmvboXXWiWuRpWdBTyqPWx1A1hrkvrb5kzUUxJxFjsqEyZLkFrPm5CB3VsXFghaWAKXBXCAJQYMcJo9ca",
  "key15": "64Wxa5geCeQ7gd2Dpcx4onojumjk5FWvHYL1vHXcAn2riPQsRubodU7ABaUrxi9azmJGtGi9JBiNJoNhYh6B1Wxs",
  "key16": "5niBZk2kMMoD6AAH3PzN7YHVriYXWrtyGeq1bxxSv6Xt3SRKvVxqsc65gB5NDYTHrVgBY3JvA1EHWDYxAJn5kRk5",
  "key17": "35Eskm3VcvyUi1SspfsiBm513egCvBiyoPfUuqZ7Jmgb7WLSenPaWNp9QQ4K86Zhn42Za8xZHn4UqVG9NFz7FLos",
  "key18": "4VF2Z51SUm2Px494DFNVjC4r8ieUJtracH6TQKiFMWRWGMpusSk3zE6GiRZhisrie67kj8jLaLFe5H24oePpMQR7",
  "key19": "wexPCkwUBabmvALsNCNeXT2PhcjLpbbeAVMu9MCecQT3nkrVPfTAk9vg5MpvoWRgiW8PBAAFFcebC9s8eVtKV8z",
  "key20": "3jiAXKfSvafKCzmSuahytfWdddsRaEVYcY2Guv67ajw95ugTeZAqnt2GWYtWDgn8SZf2hvw1D1pbhgKDqWBrvFrc",
  "key21": "2Bng1bfLfQ9hXKcemYE6KRCphvuJYnKM62Ahzb9eKvgFuxHMqJs7n2i7vRBwNA3aLNSzXtn2CVUA4Ua57kjczXrP",
  "key22": "4Jr7ErWL87Yzf2NnRHRTZGEEDjtKTkJZQuAidaYUjBjjKcFcU1GwKc8BoVgFFuuH9NCXzLBDDm91cAGdVSmK2VR4",
  "key23": "4DWPdRmtCbSDqZebjVhZqc3tQLtu2CTmfYY4oxDa9nSzZMmSoxz5o92EFayq1LqTfAtjtXJeH3PCFBTEKowKYpqZ",
  "key24": "cEUFeax3dNiqU3zpzyM5pR8V5WjaPvBAhQM6mPPphWGrkgs7gwpCVdPGkVjHSLqhtgE14B8jM4LmpEKZsZMNyxt",
  "key25": "4eG4AWA4RFb7NPuEdFbCb6SE2kJkj8XuCPnh8CvLRvAwaFwH27ZEjSCTWreuQ4hkT4xs4xK32Y7updN9LHEVKqr9",
  "key26": "3XUEhq6eWP6RzF1JTCxp2UL7yN124p8aknraqgutragswV6QDEbvwNq2rWmgnfxRwaqSV7kqrZWBcBfBVYMvtGtc",
  "key27": "VXdkSMyWEXmjsrLKruYtA1SGw6CWYb7YQnCNXPSZCs42PtfuJxY5sfjRK62YBcccydpaTGWLBSmVSjTbhn1zW29",
  "key28": "3EfZGXEUeizHbY5Y4r9JBzTQ7LJBHasR5n2CANDphqVUUia7dBUKVJ1iYEjfQuVkbUa4RaxiZZ8QiWAWkjcehACn",
  "key29": "P8vGw5XzeDFuc7pSFus2aJnq1YH5Q8WTUNxPn48yuzDCWnszREANmKCxS9wMUA6WtSDFGH7b2rBdLpHtFaz4Gjw",
  "key30": "5B8XfhMgWeH1LbVm4St15LAoeoMvNZwSEMtL7uW81GqXaZG1u9Cc79wpviFy9mb3Uk8SY6duKZhY3vWrJWnLutz8",
  "key31": "3Sqzix1cXNCKtuY5HQiLWfoLgainVVuaGkUxAaV6XDWnECvZU5Mb7a6SDMLf2m3NwegTeDFDFU2McmtLk8MTeUTm",
  "key32": "5G8TSUL27aFVJQjHS7Y2yC7LusjaSP4UbdnEyKwpnL6phPAmQMC8Mf8sYP8K8ndN9cy1SYx5waU4nWAdcvPuSZmz",
  "key33": "2Y6YoAJotLhtDeT2EsntpkEUycc7UGwNwaFNm3URAkDmvgBxnWCq6agteTmJEUdhgkR3fyby6eDKwiK3tarbDoRE",
  "key34": "4UsyZJn94aZFwv7iHWjBKEjTp7yBttjYBjUsZhFFe8kEBBxpvrzJHmWqbPdyU3SheuSiupF7shuMquX7mtFvbLMr",
  "key35": "4WioMbCaCbUKKzB1t5DRwqznDDvmRzd2Xy212HKLXKCVdxUw3KrtDvWMWgyksabSvzGKpjK7wHi4RnBMygAx2M9B",
  "key36": "3nfXGYqhX7e7t1EjYr2mswBHypMsCRfFM2rkeLjtvEBk1688Maa71X5F3PBNad3GrLfwaxhBmcUYDY13v4szyz3d",
  "key37": "2CF2HwDszTP55YabiwS2KNGsGcP4Ca87jXokhYd5eVa2anijTBosKNH2C9ADWfTghdRn27LrkBMX7GJJqPaAFaW3",
  "key38": "3EWi3Zu9UBLWgzG8QvhfTnTnnkzsitS4BGBhnFFkJEbijwDBhtSbWNmky2hQuZ9bZe9i1qXXJgQtw4xzJyCtTKxo"
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
