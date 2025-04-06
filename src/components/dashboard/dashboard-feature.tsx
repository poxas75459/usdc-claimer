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
    "4gJ67ND79p4r1oQMwjnv5DrEokB1meaf84XtdvgzEXkt8f2RxgccEkszGti4bPQD7zchvjvTHJsa47wSGWjcFHSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XLFqiKLXZwuY5jPKGW63wWaPU6RzR1LJP68RZVXKEvzuc5XCN5dV5a2z8WTCQvHib94GnsfVXgPb97CJpZ8NRh",
  "key1": "2fC3bzrpy3peDaP2p1Xk5udDGgJ3BzNeBwmWmcSRVcEXZn5otKjY2TKJzs1xBfsFG6nfPsWCF7w3qu9pcUNQymzu",
  "key2": "4aj3oFD7hs1NB9nkDgcyrmQpgQfJdsPYzY1sjqS3dUGQq4mGaFtokmrGXK9kffqLhAhJg1uNw1p1XUDMdcFcB84",
  "key3": "24VVjyUeWy7PoY8YvXzpoiouBWdKftKWgV1QythZTPwevmVBdoH4e7XJA9PjiHTYqNXuQ6S4fCWvjm2MaJx3FWt7",
  "key4": "5trhaUswrDvatYzCZiikNxBxug9xZ76AAiCbDECha1eBMmRM3J9xamEJcGaaWDPjcowrBgfkz47iJzV5QUaqRH1k",
  "key5": "4ZAjSoJP8ncnQhL6Ws3TcQvyN69oAVk7NBhobAj2KzDcHoDheA7vgqf6y3zoszV2nFuKn4cia8tqHx6BCsRXAPZM",
  "key6": "AWHTumZ5Gg66RWPpWr8JkeWKKtKyyQr9kRrC4jDLQKTcabFC88Ptjh89EFqxxgc5HvGjN9Yqk6viCxLF9hyJVEU",
  "key7": "2vuBdGqKwBYfH8aBnsZwAq6Z2Girh5KoGdTTR17bhdpjmzcRK4CLupgSR1ejeqcq3iqBdgvbi75sVMfPPTpHztzg",
  "key8": "2fUkPaHi2hrmJSZeW8QYeKu3SXkPFL9qtU5pLxMqWedr2c3hEnEDvgaxCKNZZ2yGppQpa5Zp21fmji9m5PjP2a8c",
  "key9": "3VDwx6xNTKrjRD4HVMVHQq763BPcy434eKMEfGXhQDmWwc8c6m9h4duj66zeoY7jxPEpNmV4efveMnyXc3oK6UCT",
  "key10": "qZ6XE1CjXRMStibnWYLNmjU12quyXTEuH8bjqVMsx1jivfqYBc3nMcqw1Z3Qh8bZFQsYtPJsA6boeT72Z5gaVVG",
  "key11": "2BryLC6eKGpyDWrqCtBdPywkLxvZzULjPKnm3bLL5bN3Ltq2cedVafhSVLBzewXZHWn44B7aG3wPEo9MNDkejE7B",
  "key12": "4XAWqmpGtxMYjXYvNtKgRjDuSFNVK2YHqcYKpk8ZqQ4mAUa1AQcvnxUg6YwZiNAtP8eGwwrBTLSseNLtouMEjAGN",
  "key13": "VuBNgM3VfVTad48Rb6ZZ3WuAQac9hR82iy9bNTvQEDKNGRStPR7er6ZjkrKKf8nbLhs17cLykTuL7YftZun3z97",
  "key14": "2JDH7wc161gCjH2hvz86PJnDq9GnMzEiQyu9SVbY44mhARtU9B2cXBsHuVGZQg6QsAU8jZU6X1TarRChZVJs6cPG",
  "key15": "b88KkziEVnaQxFTxroV1dxDvbTs4cUcaBngBGXaSuJco9an7ewgFH6UvJQG2WWQY9z86G1iMcqpwx92nWPVJ86y",
  "key16": "RLahuJTrHtWv7wDQvpHY6Bh1qAoNQDPZSYjzTYAVJedGiEXVYNYrocbhCy2wfsMFv7dgEVRmnGE5gF3y5wkLtfh",
  "key17": "5sXM5ed1PR9X3v8NeE7gLMiWfx8VTb6HEeU1YCE8uvFb95Fut5Evm247csmzkp4m5xpNgzXvVBo9ka8PaFMnELNd",
  "key18": "4tzuAqCcnC3ALhKn6kwNhmDBuKRjSguNSevZ57FW4wsNSJ25wnoPEwZosV6w7NonzprH2k72p5eLmpxWesUavUHh",
  "key19": "2e6bhwiQ4ywW828XM3G2kosbtc6qedLyDyh5mDERzdvQvf2nVzHD9YAwuEoRqCVpqTm2aY2HB5M3GQyMy6bdxfot",
  "key20": "TL2yBJAk5p7ecJKG1CC3CrGmJz1nXwBnHosneg97BQiiiDXpCYu4RGgS6UcC9izQ7WbHyravco2TCYAhqa6gjHB",
  "key21": "sxdgEYuwRo4tGJrSfTjSrcLC1csqcZLrmLUaPj6yBFSXcWWDBE3Kjh8nW93EjBs3M86BKeu7wyA3eyBrNVw29Mf",
  "key22": "5xyPgVsKcZhU8KbWrbKSvG3ERq7E9FzgRc4Z9KtddZwy6Msenx8DetV6VxcBL3prMaf12rPhB3GgsTdUMqU3GHhX",
  "key23": "2qnzZcTLHAuh6RVJ8Vf7ZMbQ7dGFQJWQw4EeoQ8tcA1EMqGdhaHBExFC3S7sEnRHSbpfmDdo9uX83NTqcLMHVPD",
  "key24": "h2Uv17ecACm5fi8fXJRMpvLWcN9EaifLMtLbjRQCWuyHc3HLSEcriP1J6SUGFLmrk5rBvR1XotUkzbVxLTcKARL",
  "key25": "4591EmNMh4T7X2CxcKBSvBVWnG8sPesSH5aPniVbRxCFL5Bx2FRmCVDGfGk5zSbi2wNZXrQoFHp9GW2NXCv7r5rg",
  "key26": "4KEhCWamjoU2RJrXJgvVBxvje911p9L6HBLv7F7JG8usyxjNUydg9H6gbnhYUkr9Ep2Eb6UUK8yiQLHeMAmYZfqq",
  "key27": "P2Pt3UvsgVhpTgJBbLYRmia5QHTrPB6CWeXPgL54havAuHxK1nk5FGu2Tne17SdqTZK3upc4k66h73W1ueyoFat",
  "key28": "2A7ed8w6o79xg8pQrFqXwP8wgMRQaewEzbWreJwgGQtNPRL4kSu1W4ZTrCP81pxtTjdYPkMvd2dAs7zh5NTQhQ5E",
  "key29": "2M4L4CTWWxm6JK4JVznqCMxsViUQjCVArNAr138h4MvHMV5kQC6oHkTwreUhQpqU29FK5HJai2TxvrDEfB6XovHh",
  "key30": "4DRf5KhrC5CCLFLSy7dxWQq7uYJNxDobsTE2buDDWwRrqxbvQpmarUxCy6xBB3qYZebK5jHJF98rLtiRw8sHQgug",
  "key31": "bax27Um6r2rQB8iPsV4o4JLEbJbbbgZ5xcsGu9D67zEFmwzTeHwQ8EiWpC9dZoQgvDXUhYUgVztQxyqrcsBgtQf",
  "key32": "2hfmGcyLHtDFX4vjyoC7vbYtLsfMdji4ZdhAxDsVjKX33tMPnE5D1hHhRoBAYQgmigzd79U7ftTpMSVXiAcgzh66",
  "key33": "3JFoPm72mnjmEyz2x9AsFitYXvuJHCWoNY6WQKdKBY9zz9wFC1BKGLMD3RuNyvxKNDd3eNpfUADJVN7sgJzxKX2X",
  "key34": "574hKt87ErpLsVWJRE6TVZNLLpRRqqcBiqYudf88jerys9ux1o6PFVs47GsP98XcvkxpEHCoAeTXBkgezPZa9psP",
  "key35": "67mZqccmLiEq71d1W1nF4uTDudbZMvudNsFB4RHa2Vj1Tnhs6KSvksvwzcDRRRBv8HjJ6R8QN98pn1hqkPBMwhFf",
  "key36": "ofUnjaJYwcQDBwubwZdezG7989TPn9UUmsUcRybLXp5aethZV6np4cCXtbrDfm6poVSwsosDuJH72JbsDU99nrq",
  "key37": "54MGopeerHmoCKHRde9Fkn6XBw8kkXKbJsU9C8gqobjT23P7v4LEyZdvqZi5uSTnqLJcihtEmoLHomEFmKnT9DNw",
  "key38": "2fkaSkfm8cNLzh59JS7yfKR9Gopunr8rafU5scpAs2Y9La4Gohgo2jjLGmKVaxySn2zJXyD51zmwc2p75Q6NBayJ",
  "key39": "1HSUTCMtuiZa787UA9kCCjh8Ypof5J41giecC6CVZqZ44aDvg6h6NGhA5HMKhi5XpcqNhss7en7MW7xbPjbbPdp",
  "key40": "TuMUQKbrUsH4DY4Laz481VDD37uASkZ7sZQdsbsSvzND1t1voDzBni4LWP27ZgLMZGFi54NL3UYvzCsPqv3iLmi",
  "key41": "4YtjcSPH1YySdA3f3VXcBkWCSMQMVyNrpmz7FjSzt2esSdRRzTNXpZJ6iNyiX2Nt2fiJ5xiUYGmFGHARJbhXsQi7",
  "key42": "4QoAKS18bFh4s6YGwWLWdjKeDLVDsn6Waic9cmrTXXum13jEcqSMe6dquPBAH7XXLH8S3VgwsVVTGV6jFjjM19NL",
  "key43": "2WfuegQ4GKPTgPTEMXngcnBEhzNNAsMzwfNunVDS6P53zJJHAbAhBZi1umRDV5JRDsvPdPu6XhJfr35yNcwRVjoR",
  "key44": "3tq7QEDk1UNWeTQBopmmiyE6SvEJGtQfxvc1zHLBrPNkUmFmVHhLLhsYQS7V9NEmE6xPrMoJK7QsnF2k4UVcZLFK",
  "key45": "2ptrDyiLuK5oEEhENcmstW9wZ5A5xShwExq3k6QXX6TukYzczZHK6ZVZUpxrybVQ75EAjAsHqW6x7FSJDpYewnDo",
  "key46": "568BYBTeK4Rn4N2UnxN1fCKpk3ixPk48hdV2WjuAsgVuXPvwMtcydjZbuTJDdk5vMnS1JV3bYn2s8ovYdLywpbv6",
  "key47": "221cziLgtXX2dYB2gQ41JKMSJBXazt8VLftceWHhcnXYg5doMAjf1nYt5iV4GneYn3Dt2YaiQGW5jJqWNDfj5GB3",
  "key48": "4fBmT4TLXmV2mdu4wBc1DUTPMQuL3UDwxpSakVGk8t8pYnBdeh6WrYFDRvBWdd64m73AXxiFNhotKUGc3ByfbEi1"
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
