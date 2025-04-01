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
    "55anqn1HcteHVMaycLKmxqM67QGA5R3Q7hdesfhGTjx5fAb8YhfcK3VaCwyNv8SGoALswNDKifErEqz7TN2FuMmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aK8pGB625XEkxDEj3JgbavmccLNqZoPYCUqQhrn8LprfxQTgT1YEoVE4yAygMUno9rJ6nxYskknvoqb7q2LGQSz",
  "key1": "jXFjGcqkQS2bhuUAk4pQQfm6rRbkYhFnjivL2eZLoMGE7WWtp7P72cnWGbDRrtSbHD5bG7oyTU8GLZHKxRPsNt5",
  "key2": "4isco5GZ5j49fTVg7a6akQ6BrPPVYpYKUD1pUQuAZbiq6VvSerdAm8nBRtR5f74cECpnW2arzXqoE6VqQUT5yuum",
  "key3": "4TtbZRBfgzddJz81x4HFVvYtPr6UNMR7pKFzyaUhRu5sbSk9fx85B9mUh6VHTHrFY8YfmCnjghhhAhz9oiXDk478",
  "key4": "3hH1xkkyaePubq91CFr77gNTerRruNesZq29swVpmuqYRdQDeEWFoy86UENS1RRNFRWceoiVfgsNqFsUq82Nb5vj",
  "key5": "5vei72ZgJRrHXCVuGA4zAC578ExXYy7h2GmE6dh7JaPqadMNcGQm7NpdvQYujjsDjgwy7FwYUkoPgcJdzDjC15e5",
  "key6": "2b1jQHjkFCveYsxEAHZ8yeafZHYwDimxMe4wFiSfU1Zuv8Yqv83BjBRTPcUkfGJwZyF3aqwc4BMNXeMYxQQwqDk4",
  "key7": "3w6H8D76cP6FnEzP3XhoSQHZs9eq631SZJtsy6voVGsqNSz9HQ4a4pBmYqGM4Vh2TbJGzgLSsAh8heEw1JEJsnc6",
  "key8": "3PwpXtjJ27Gf2EUkVwKT9GuFiEGNXVHof36C72SrK6Lg54VdT2MLM7NGyRPYhVbwqaMk6pT8TW3cHtLKRwZqBkdt",
  "key9": "5Yy9VnaP31b1Y9iTxRzcj3TW36h81AKp2tTLHXADrwk1E1Udoq25wLsyvJ7CsMKX9A5GPMFJANofnSra4vdc37n8",
  "key10": "51c16Xh7SBkZnGSidaPC4DMx6Cm85MSF53JQSvq8JrY2ASjtYeCZsZFv4gF91Yzw96TUDSTrZWfmvMfTTFDpLQ8G",
  "key11": "27tVHh7aEkKCZg6EWRGbhvdV5GX7n72kTptyu7BAyKe15P25LmD1t78zhu3evER5TFkQT1VdoNqRTe4XQZBbLrxH",
  "key12": "3URgFzEB1JRcRf7Kchzeu9cuJX52SBgKrQQ8FXLwvhnFrj76jTYAUGLzF5iA81r6Axp7qJ31wkanu36v8BksJHWd",
  "key13": "5g7ZdPWXMSVCwCWRt5qQySxGoZGjjiV8WgvyaVSrbN19yVhNLmnnfg55t1ryVGeNZLJ2erTHV1ZcFKh7nPYb1Spe",
  "key14": "4GPp7uQdNqMW4WFWZj8Hk5tCgHbBvtDDpnt2yCyGoqjoKKumRHZBRyBXsNgPgoThvvQSPmwDnd2ejcn6KA9wiztB",
  "key15": "3fqe91cATXPxhN6ojdkzRcAn3QbXiUbfpDERV1QjGwKeD7URAePa9P4du8XythjPTNGAdPvX1PSCNirXCjQTUyhn",
  "key16": "2icZrPxGjxYUrvkqN77HyMNafvDM7mCqFv3cyk2qGZsWrZXyFbJDNxuUk5XMzHwUxtyCSwZ3iZ94JQP763tASFP4",
  "key17": "GkaUgEoFV96MZPcCR8KWDVNZvzWT9p3vjrfqNq3aWeQMZNGkKCu8WzmWCjZcof2eHVBvE65DTja2VhXCrNTvfvt",
  "key18": "vsWPfZUi6ZCuEAbKkubAGGkvevctKqUrN3VUEErZu9LMa6ZhcZm3nffjifMauXxnEwcxD3JxGdwJhEDaaLpVB87",
  "key19": "2JDqURFAr9WnEzJwSe5rphor5YpWAWqizmHsF69hvAPm27GKJPS2dT56x5HiSZj8RoaujUM5tsdbVH16f3zieGt3",
  "key20": "3vY9U8QD3pKnogJ51kAyPMJktV7UefMugA11JB6YRC8hKkKELgZhFbM37wRNLLPVPn8xsayPC8qoL7AusnKE6eYA",
  "key21": "yVdFJv5TndD4eizVv8URgvnx5eQLfQEPrbAvMTKdcGibZiAWH1aigD6ie7hv1evScR4ZPkACHeKY3UE7vr2WZBb",
  "key22": "4eytGg6P33vuy2FdBUnur1bcWxDuKpfDpQs2xZoMwia9WrAbLKMUFr23dRSefRkcPAZG1eALhoDoDagpKXWMZGP6",
  "key23": "5GL4y6TtS173A5wSKRHFbDcqv7yACEqzy2bhv2drzZXyNwVSmJXqyv2mwJ4ca6ocEFqKdgb7puUaBYjHeZrC6Vmb",
  "key24": "2hoHxVoaA186uEL2rmB9W8mHBPvbebUVCq3kiikyFt3s7XmVaFwpjbpZyh3JdrdHMKKTuDkh3VmBHtbmYF1MZmTR",
  "key25": "4ypYhpmCz9VuJ9ybZviddWr4Ur5aautgaVP9qcQB6tqrQCHSLM3PGKa6wAizKK7vQdxFURGGe15BB72sBr8YwaxJ",
  "key26": "3VUDQKxZjydGbtaMKrJkcr66GpZTYbFCBokGwM1c6nb8VK1ZDDdNa875oA7i2YXdVbcin3gVbLn3bRBrKJtEkvpN",
  "key27": "5Seg9LfWDoZXfLLWarvCco3xXpZYV9UyLJSJGtUVXiyhxxjLWBg5kvfXGsRmRK3NCMDVvAhRhKbwT1uJcUWNYUsz",
  "key28": "22oiJwGu6fbYq6YZh31dcN6vZrvLNSoxz7U7MoF2e7zYA1hmdmKtjTXM1iTK1DRxJ868VkA9EWuMsUzkvki3GPRA",
  "key29": "4qtyjxsLNoAaGDWCWqXwit3D6xuh8JdTK7m5dJnNL1CbqTR7yxGgpSfKATVSjUad74saU5Py8ooq9365uGRRHJcw",
  "key30": "jotoYiCnyDeBWkbCsKY5k4okXrDsP8DE5rrZwn6RNYA46mxiZXTsRVQJZddLikbr6B1Y8Wycr6DCUeYKgadwiua",
  "key31": "4yBWw2D3YYchg41xTv3tf9rfBmYAXYgfLNxBHV7fju751tLCqTDh38BGkWBJ1uP39Vsdu9kWUxtzU3TBFPWwZxi5",
  "key32": "4XZVbfnRjiNmrajgH32FE9q4QA9F4KFPjnrbWAyCmsT6b5TnpsJFvPtdnUHfwgvYGK3wpB4YNJhAqDRdz7eP2BgU",
  "key33": "4xoUYE6kY4PueBayqLmWtYjEsq8n8SuMwSB46srAd32WSp592hfZPAo3TTjDKgKbtoxf6ywGcLsvSutEbHzFiAzK",
  "key34": "de9eMsvcsjYhejoWH4BUshhiJhj5HDwU8DR6K4vHRP3xJ37BfS2gNKkTHcBtEZ8oWsCxSUYHifLkCGii1BNTwNn",
  "key35": "3UJN8tteVqJFtJRuPGbwB3eg9XzWJwWyno8jJRCMojMjMejiERi6vHm1FxkbtGURHDvUTY4MRgfDdhhvTXuFJTbN",
  "key36": "4dBqVqQQChGXmGF5XV4YhAu6z79qanr8QrLz3qtKYJHYuotrUHTUZBvc6asggv1YSTDZCNwipPJGH8k7xpD3sZ1D",
  "key37": "3Yk66V3ebhDZ1HhicL7bEomWxNNymf9ynBdtCq65PSNWNB3BEWBWr6WqqDWBbabeHXok5KgbRBfxcu3FDAWBVuhG",
  "key38": "atZv55phK3rMtwdDjSp4QaVZou8T6hmWhBN2w4sTU2k9zetRBWWNSxFsjqvaAr76ZMwCVdZTgZMFb18wB1W7vcC",
  "key39": "251mvUJ7ABv5PkD6Tx71Nb2oJ71bEKuRnjqnTbDxzn98bfWfkXCihJt1f5TE8gYsywt6EtevbNC3Hd2C5eSkdCuJ",
  "key40": "2dwiBs1cDMWLGBbVozPcJKmVBo4fHUG3j94BiWx7F6Lj418Cm8BfHUnMAanC1s8iDjUBsgSBjAhz34TVDmCghyij",
  "key41": "36ygizuBWFn6YYMCWDtj5xHMpnDdeicndoz1YWHawAJpBwuYxHS3QTRaRZst9wciHBjH72V2ipnqpiX3v8ZXPABh"
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
