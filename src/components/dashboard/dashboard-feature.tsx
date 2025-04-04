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
    "wvWB9jsVEfpV2jgfmG89Mh7dLuMQ1CVmt83NowegXm3m551FgaaVY6pCpC19eERw2sdSTJdhQx2VFv3hHVdhVNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5enNaWUaWjA7K91huR2DBnDi7irQojtUHVppEgYoRjkB3NEY46tBrfFXax96MUMS2ZZZFK5gJFAAJmJdsDZd6P6",
  "key1": "66Szye9iG18kxQFfhA3Fb8HGHmJvdhLPTVYABMiyCxfQNwKPBqj9nt72mfYxAwgirdTsksUTEvorbtgYsDegtx4L",
  "key2": "58yW5GcXN4peAt6WjVvGcUg7XaWWKm9TcXvBvDhsk1WozDG15ZKhLKAGKNBk1XWHcikNSXmiGy92FhJEbypFPZ6T",
  "key3": "5vbgzoVJYHESGybKy5RZwpin5ZYZWkeNE6JsQKuPiqx87QLwCAR4Ff3qgUsRwofSytPxtsXtRBsXrBGsVnQKZxth",
  "key4": "4ZybxB71ooxyfQMjWzxRZ9pqSH2XGnoUkhbGsjohSqzfzE6U2f6PNaq8iBkVnxbLxgz7YYtAccsyzTP487cX12h1",
  "key5": "3aPMjuKiyZ13nHyUDVynhcfyFKHzBzFcBV8AmHQgJsc5UnxutrUqx1bfyC2JyucEfyKdzq6ysUhkUStFQd8knvbE",
  "key6": "32bXXqd6yVRSgftpuyfZX7ngJMWTE67BmRRxQ8rq4TbbwFAmFtteYioc9b53KN16S4SQBiXEHfvw1mhB6YpnBSkE",
  "key7": "4kgGvu7vbDEuA3ce6DDjSMKSiaJyNU6rWsdSojujr1JdqBQYR8BBJZ5XaBoXTz8UHxMZvcwzqYLEvF7HxGYwdhCT",
  "key8": "b7zTad1j25qtGvmNeZgMuYLECa87kq4SbsT4WXL8w3kAwcgzzPLmjVZZraq2mgHvkZmGHmVk427VTSedugYse5W",
  "key9": "5qzAEvhQXNyBBPKZbutHjESnNbtJEGdPEWRNCRB1ZwPB3A5cB1H7NmWHJeLH5x9MXSGTVvrhEq2z9wJ81H4eJUgh",
  "key10": "HQ9mTDWSgVZmTG8o3BTUdhfsPaM82nkF5P9q4Pzn8K4VAiPYibdnYcFtwAXGZY9ani6jZMUaHKAeXdnibvuFGvi",
  "key11": "5JRdq9NthCFnRwXgnC2yyxnRgaS4ymKHKdmed5rStL7iBg9CbNzrBcbnLuLascLrhkhbL6fmnhJh4x23VQE1ctfj",
  "key12": "3gMk95Um6PEBWrFYgN7NtSn6CJq1YWa6brF3zxoZtFKtbndXKdJLLDoPM8bknh4Qv2N1uHbRWLnfNUJe2K8ENvjv",
  "key13": "4WS1dUobw1PvddEh5jX949o4MzPGHfc2FrQF9MGWCM5miVLEtxM1ZR3wEBqasByUxecfdSoUN9akzcXCc3f1kvCr",
  "key14": "5feir9LQevcMdrLQQYfZrQLCd6SgPdjU13KBVeg8DVXTJtu4GGdSiojGUnGvg3A5exonQowLmcT8ALztXSCkquLq",
  "key15": "5TqbS1geKbw3wzLDW2y6CvD1pmcJYtRdkP5sr5cZCQFvrTpQnmXsaxmguCemiQN9Kbw8dYiZ9PifYYia4mtqmqRw",
  "key16": "dkKGYhuhyqMC3xWj4WmyTdtVew2EfXee1otwbH4dwMcG5kHdrwbrDwVtiaqGZv5tkmKsHbr893vwmna5Dyu6cSA",
  "key17": "2FaUubLnNGDmUPvutCCAMuf8ucDSUa4zmftt9dXN7XoaNhqsqGa9agbg8psdkrn8Ynm9LUDqxfQiEBt9fCzsWSLr",
  "key18": "55jox9t1gBzHJcjHErH2zur4cHdeM2XcBqCVW74ko5uYcMBKbnpz3n3z267Q86pSKtKdn8BYAksT9fn64XM8upMa",
  "key19": "31iDGLP4VJbFrWWZNykgvjgj7GCvAs8DVxCe6tEeawtcxFP3zzabs4tjU15te9bnp3BSyDH8WteiMcDeajN9hewJ",
  "key20": "AdFkMVEicGhhDFD5QeiQXGDifcogk3edaUJvyHPKhvznpN1Do5RWJnYcQxksDcbaT9c44epmjigAELX2jRV24bY",
  "key21": "Pg5h1P8JHXXhkfsSaYgJ7MNTHxoZitPN5L37Kf3C5WVJSzJH7BTn3jG9oAGpRNwuA41FsBNA2eqVBYLyHGFL1Mu",
  "key22": "5ftDbaey9M6rhupEq5NAQtoSPWf1T7e5FzUPbc6C4E7y8wVSA9uA4N7pnHy9Npx5JnUk6VrA76mu1C6HCmdEwafK",
  "key23": "2by6SZAc3xzyeshRDUie8nSxaK8Y1SgV4whUkCUQEcvhbnckNe4Cz1tnNYa6yLHVBuN9Mek2pRFFdMooQdS86HwS",
  "key24": "Mfito6vB8qK778fYorzf24Xkapg1AP9X8Ez2JPTqxf5eDY1hKTsokd9GjUPcTozfJ74KCrvTwhRGFTnSinUQynw",
  "key25": "oBieM1HZhsVBgqtgd8zXNc8cdFAspEQmFmfVLkJtQTqfCDBHwrJsHStJtWqPxXV4uwCKzPDMGxeCoBbmJseSXDT",
  "key26": "3eeAQRYBffY1Jh9DrUEUGtLStAJm672ztd6mxEVNVCd2U2ynsDSdVnJp1WdFTn3idAdyfHBRMLSrMyJCQJVTEmox",
  "key27": "4ip5aQ641oN375hTgeoZA1krfnaKXwb9yEadM2UvyRtm6NTnyArpfhrbp9GCK72Sa1pW33C44wrGpstwuBXejjdi",
  "key28": "5uop28DjtnaACZrCTrLSbh3q8hcu5TqBTp2HKCtWuH9NPKaiMTScxFr6HUWEDtPdwe239VdqgtCabH3bEpqFkhZn",
  "key29": "8eqSJKTJfstCWdkb1yLe8d6dMx5FecnJhZQzjRD84krah5iWzvPXrCmbwNCsjb9ipAdrup2qM9z2V2t6gjzQq2F",
  "key30": "4ToSPrceWmxRuiVCmAbSsWHwW5A2XCkLexuXN3PUPczKouNX8oUWwMd5ip22nWXeezbt9APSCtudJt4J69fSEVBz",
  "key31": "2Kr9AJVhzh5DGuX3sS2GcFUV9eorB1ZMybbrAonxL1qZJmZ4zJsefnt1qDrfq6FoaYxtgrB1VEdUKEdFW44SzjAK",
  "key32": "3CTPi9JX7TvkDSiw377iZfX3i89jeA8oTwTtCAU6ZfhxCDdTRnK3yvnxP9jK4KGxQKh3xtf5pzvH55uRWHehG47",
  "key33": "3ujv7VXqoy73PGjemmrrdh3ZQmnLnipvpBW7txhHLc3gVFDnT3SA9FWKzPkEPg2DKPrw9rFMx8bvHvgR5TgiVHDu",
  "key34": "5MRdu6PokZPzikfdWhzd3YAhwbb5ouJLAeVRhvLKcJNyw9ffb1kw5xZKyDgzg4QvrxjVYpdi2LGRAQkJtkX3aTL4",
  "key35": "3AB8GXznX1yNfmZNtRXHLyd83Vf3inxK9q9EgNibDULYHjN85HvT5an9s3wTTqYd6PjU4XxhXnKiWP4tXBSHHsRP",
  "key36": "zwmZYHc5rJX9RhjUB7MEGiuR7Rrtrv7t62CL8VGegX9Um5zT9jzsj5MFfn1SZr8hUfLVd93rEhagVL271mC2cay",
  "key37": "45T9mYZ6GjaWTntaUoz7oHXFhmPVsBmgv1qTNTh39LBFHq7LDpPMev7zDmWgBABrJXmSj5GEJ6E2AszDvgeBBMgZ",
  "key38": "5K3AXYKbK3STdBXYL8UhiZ8g8zmfvLq1z94mHMYiyKjsWQHCk6FTVBYfejToDn5j4j8oEs8x1mjCS2JWrCHt4PRA",
  "key39": "4FG6cyiWGetkhtwk4zLYdoyJEaF9Te8SfRdCmSVYnvjMfg8uzLeHk8WLiiSN9PuhmEZA9rFJXQYkvrKrRi8VTzWQ",
  "key40": "3cHdQDQTPvdjxL2ss61caqqBR28Wke5C4MhL81T3BzpoyFnK6mFuJJFjMStgWe5cYVgfEKaZC3U8bBxuZdgmKoq1",
  "key41": "5XKp9pKTJQXBCu6ys5W2reu7F4pHeTDsa4AErL7v4g7pBstPD2bL1THjNwZWB88M7JyaBFYhPoWb7es1Y7xmyVoJ",
  "key42": "euLHX7uSNzdJ8L3whiKRXouV5WWJqQWLsue3CSvppekUKWxR1AHBpt2e8ussxK44TC92YsWFjRT5SWnHUyYEDYh"
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
