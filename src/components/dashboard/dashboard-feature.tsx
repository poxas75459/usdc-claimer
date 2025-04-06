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
    "iRC82bkTSTfdUjYJFh7b28qPC5N5r7GZxyCDMXW7BnJVHDkAQmZ2qX978kEZocho8UUPk9hYsNDXPMkiiTEZNNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqBpuM5asjTTGPAuvpcUj2r59iF2UKtQW4A4G4uu2z54GBoNLHjCBfzWqonyDFDHsRFQz7XY818PAWDFdZGiQR7",
  "key1": "4FqnGMePsZD3bRkbUPbQTTdbHQyowsBF65Ziuyw67EvR7n1yemGjwfcmXweqfEvNbFVJxKRZMU6u7HHmXgCfGqtG",
  "key2": "267fY6KQnnJ8bXCR4W4QyTauuE53WQhxdjDTbYhWj4ZRLRWaPp8jykpzCA6aGcK8jczdLKdZZekEKxkxfdDJmEzL",
  "key3": "vdRC7JR4Eu5nnRn5vSm3pU4rnnGpAWyfM5eq9g6DQafufXU1rkCbwZ4RDVipjwU16eey5wRv5jWB4iBpbUd615i",
  "key4": "5FTdTidSd1wBeMFvuBqwTZ6SVuJ2PeBGmNGxnBf2hkdqkYiSojuHfRuTwio46XcEceGD8rtgKXxpmridQkt5zKJc",
  "key5": "fyFuCEtmNWhvZxiyAUqFjK1YEGzUzz28xdbDzw9ZhPxykCyFM5sQpr5HFgNgeyoY5vVRAWcS9LLHKsyKh4JEbrq",
  "key6": "2ydD2cy4iH9wSynvrLdvpdofe1MWjubBomi1a7rHmRQkzzZTBW1tKLkvB5bvC6fCPmWj7gFhEEGSXfVyoeNCpKdx",
  "key7": "5jLJ14NG9WE5DVZbR5mHRTKZEQFowN2esq3UBanyVwomncwH9WdmEXNsD2iu9evjEs7AdgFJdszQuLJ2GWM2Tohb",
  "key8": "37XbjcxMgXRk5Q91vArCzzT2Tftu7eQN2TyDtGpjcHnXwam5q1vDBbtn1mLnPaQazkfQC7uecdD8B1xAh6aUJWQg",
  "key9": "3tcZe76Ej632zBHsJ2NXmex9SyzLd4rDnBTdKvqjRXcgC5cP4vCiFiTRqFviXED5n8TE5mcJLyFdShwPD98zEnGP",
  "key10": "4Cw3WDTFQh12JmVVjSfC4eiC9tVeoARYyvVAUESEUMftWxf1MsoVbUCzubJ8FZrV12eJkKHgJYJ5pPpioXwWob24",
  "key11": "5Df6TgXi8mHmKjysJfqTDW4BvCoTuBVaRjYEEwC73ALqyrfFBitgBz2jRLCbCEK5Wfm9ajCs8jz7BNGnncsE4WtP",
  "key12": "mxoa1S3xGLrJAoMcg8mFc8a7TsttXfgFbXb9XgJt5xnDizrPT7QqBypZStcXLR1BMueLGRDAnQz4HC6p1oxqAcz",
  "key13": "4xL4zBMn7eFbczYnUgcR4n7o3yneyXvc4qEibtF5A9dhCDFTYzsLM7KnBrDYWpDiiCzu6wfjufhVMUbD478ujHiv",
  "key14": "ud1S17k7KLD1zAdykr6W1cvdN53JJYXgycJJehmaXWwUxWiar8Ts6GadBUCB7YHem2HCUgkuLo7xzAVJ9BGyb9m",
  "key15": "2vSMVcGeCjfq4HUiNndwFxBKARQAaA4iATDVp4ANobAxhzR3Y2zPqCiVdNsZHanqJgFSwNK4Ninq3b9Cs2Bjgkbm",
  "key16": "4ioMGBQ98rgzhioSiGasTz658XesDNwaSKtMWSjdnd3FG2Negyaw9JQ3rfoEBEwALYp8X3fQ1a4e35aLw4DcAxKg",
  "key17": "3JuqzP49LaEhXWUuaerfguyPhk5iCqBU1Z6gwRmPcc6osMrbqCbfWEavpN97xNiwmYQrfjYWZYVmhWBwL6L3WMTv",
  "key18": "3sHSdaRcMwwhmNSSvEBqa3rc1qaWpzcC3kGbwiHR1uLBRnWQfD4oFese3AkaMfi8qg1L5avF7JL6sJ2txJXBcqrM",
  "key19": "586fFSY9P6y6dXi9AvJU5cToLYADg4LA3gz73SE2Kdz5eev62gxYAWt6idF69HF7gZNMgic7qauwGKmCA6dxZwP6",
  "key20": "2BxBwtVvWf4fFSCRYRgAEaiRbj1HaAYTPieg61Pjp1d4cS8yt2xnPze53NR6QvfmFNc9TSyjd3gFvJSbcVp1Rpzw",
  "key21": "59jRAFJQHgwRhdZHA9n1SvnNpLBrkE7vAMqMFKvYpsvB84TDSpKRC6kJh67A7mvM5hCzgsDFMASWXy1XAmsNEBZA",
  "key22": "4NfL6vxUwAUdoNdnRZtzN4RS5WkLWDaag6fnc2rdjRfhPWcv6Gn5gPAPiQXmUQZ2D4piy4yCuYwChQ2KkxwARyG2",
  "key23": "dHqxP62ZFyepRXYjgZtauCC7pFWNBEsrZUZ3hACq3kWVnFpZaGHSrHhZYLGyan64Us3XCPMcNU6ArSSodFG54yz",
  "key24": "36U7SUox9pB7KiYBUHQArvrM8uGAfr63rx6nb8Yf7xu91KnwNoR2U7n9UkyaLmbtPhA2vfbvRECvhQfWBdnGGFHn",
  "key25": "4xbZNbn34qhjLA8yhdRotkQF1XNtSrBRLiSdnxcBQ8gqN7nXn1TxHV4rjwMCh4aTn6AwL6sUWNjWjFV3NXaVqLgA",
  "key26": "3PPdDj7PxNsciiRTBWRSwEEAXT7eej9nXBdk7SCpND9FbeKrTtg3fyBDRGT3nrgYEgrxEy2TFCux1fCp7fgnVjFL",
  "key27": "2P6DndK3m6hKE79K7K7Joxn9yokBp7XYgcYaVyxXVdAKokdEmNtbC5NwFDxyDp3ms6Ac7KLbs7sQtQZranY9992c",
  "key28": "51XzmHaHq2HPf8QJY4dEuQosckyKVWHqxR4X9NfSYDJrG2X4vMyxBNXsg1dxwXuaFWYM6ipoJhLS7Lchs4RdQpe9",
  "key29": "2p9N8bg1p2F6tMa1dD2qTSBAFsYcEJoB6zn1Aiv8FuoUex1X5dNFu9NDaBzLpdLxMtSuB28juWBfUaiMHMcmdtC3",
  "key30": "3CX97pqQ4GD9LN3dr5bSvX336SJyiiqwHyFg95XwtmK462cLNn9cKbbxbhSy9G7GKYfGo4DCdq3sEGwpRP52cKzp",
  "key31": "4GHpWwC2FrfviKsNhVE4XJdoNLsUbmEVSWY72PUEmr9b2do4kaAy8JPK3PGmQ7qRQhkQHetsoL3uznu7o4mzH8T2",
  "key32": "4CFhk2WDkV3BSARGUwDkrnZzpDqnT3h4Nswx9NZE5savzY8DmKCb5dAZnCb22q9PLu17fgy2GT7auHhqf9uykZiy",
  "key33": "5Ws4Z1ptFp2CoPJcgbrFAQaNaGzhuigRF9NiiKmy9LPEzTsLkyWjzHXfmx4mdjUDcY3xf25N3BueXhsCjLxwhwwc",
  "key34": "4uusXn4YJkMiPRXujN3jB6zpGjkosT3fYYSM8PGn6GNx3fpX5Qbb1DHsvgXUmMf9qSG6dYCb4qZxWiWspXh1KP3D",
  "key35": "uar1KHTZiu65kxMGjRW28harmzGHj3k1QGw3oAGiyij5ost22skrfooCn7QKmAmLpaWLXF74tUCDs39ub95xoku",
  "key36": "4cpC5dbiLqJ5xuuQcH1NvEqzG8WAvoAM15rWuPn4i6y7nseBw47hfdPRBcgdKFkFwGxKGoibg2w1DadMMCXaDEAu",
  "key37": "2X6KPT71JcuwszE8TvX5d9CwCCG7nhNVmsFKVBW4kaSaJws1TS3kE1RG43b3JrAThHuALMd6kLLJq2t26RcZa9oK",
  "key38": "268awSjoaqcBqCrhWm3EVYT9UMkALcie81n6qFManq8nb6eEshiGVHJVoRegNtJb5RGkmS3qZhjBo6axXfjxyXMz",
  "key39": "5hTSQb5rkpn72fqn1pRjyEX4VTRVcCSpwFb5yegF975F6N8qcWmGXathX2eatMQRjGAQLFNc7HisiteHBDkRieav"
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
