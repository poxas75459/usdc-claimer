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
    "3ERJFo75PdgNk6XDTj8GdNLj7dnvRpEiq9f1RyxMDfdD9ENgQRcFg17UMhrRnK2DgWb1yVJhGsQ6Tbo874DRgCPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sVZxi2rtvmN8JQHashKkid3e25hwGb8YaMjnf81hGeY9P68iMAZzFY5A35KaAGo3hh1nQhLRJoUhg2xvT3bQ6mn",
  "key1": "2SmQ5Hm9GCzooKqjiyn7C1EVjYifHbuZJJWNFKEZSeWh26UEkFi6X3P5zje8Dh4UospmMtu937WNgjsMxsqRG8Kz",
  "key2": "3BakGuony1zoQ6mj5UNWUQ17hGNGVBHpuwpFsGNNEx7PDcpmauPj8rCFaRxEzbC5L12F4gMU9ustcTFgjB4uW8wN",
  "key3": "znSh5ycARNyj3tVgFkkuBVzod3NdSnbCcEB2DpPuNCM7rFe9zNLh9Ra4XxqwjHzT6i9wQBNqyMaynbuKvFHkpNZ",
  "key4": "oDQDHGSwFqNuZA77T8RHnVJAfeMLMos7AqCoWCKTkSGeAH8LCGS5RY42MWb3JPsjZ6KkvQ7VXuvaudjoYgFgCis",
  "key5": "Jsb8Pn48TjC1eFHbt1hyEkQLUce43tbR9wdyzvvYqfvyALDHF2jtjPobvE28ph5jmTwQQDJZ3JtB4aDAbv6z47E",
  "key6": "2erbH8vrt1aLDqLndXFnA5423D6BNHfF7ZBUxgy7yGRhvSECKyPN8spnPVeWYHAhcbmYuTSxUB4fTwgKEZdgdhpn",
  "key7": "418c5Je7a8tjAowdvndBodEDaD4hgid2Eqsg9zqHEgmwZV4bKXtcgFAzZZ4C5rzfPPn2fk9M9CdweXBsvnZSrB94",
  "key8": "52A33BaLaWY4h1Pwe8K4TnZzDsVqADVZx7erKhkJXvvN1mDqR7YkFW1c8S9tekMoUr4VD39ByiHkWiwe3zs8L3ct",
  "key9": "4P2kCSox3awvSaSCieGKKQQAATghMHhqANQFUmo1hV5qVoL2K4HerW3Nfez6VswyVKSdzfV27sKy3vmrhtacCHW5",
  "key10": "25YJdsSy1emBTfozRyfBen1hLoRU5DhhKXT2dLXzM696gBpBB8yc8Dtypeo9bDaLNFga2HFY8AtrqP4qKcddbUeW",
  "key11": "3QLzGQmVsSsVv3YHTsriZndYaqyQ85xaSnPx7DWKDTnPCujmUvNC3eBKzpZrvVuJjgkwNyzUA1MKWvxdot7x3ojU",
  "key12": "FEoABcUzYet8F26DshVBQGDndJMH1WnqZe3LEpvgKEeXyFCYFFnmesgz981HA8B992bME2YqiJwaFZBAu2sF1Dh",
  "key13": "5a2o6dP3CQT14oPx7xVtvaofdM5D9NuvNNAexheuMg273qsEP5VmBnFzpKC5Xh2FaDAZWZt1VoJs8ykBzXqhaXeo",
  "key14": "2wjW1fjxJmYLApFpkJzGUPRQzSWJfs7FDU2yojEnjdXx5LLJ4ZZK8KjfcrTyiQhrSHTWZLfgqudGfz5a8t4ycH1M",
  "key15": "3z1KKFgcWixPuu2PjYTyhaSSdThpeN49XZ7n8EMMcmDUcBv3UaqPsgDKPd6XW7nyHb1NfQ5FKoAEBp88SGHNcWXo",
  "key16": "4UFkLPpcEQXxUjsf43K4u59yU6nSRYeZA53XNdgDuRDtxzhbBMh9kx6jcBnErSkGhxpAbTXY5MfmVqdSwMsoH7Ld",
  "key17": "fYzWcPBWWBvN5crzSMWqcDwBqaGSqdzGr8ZKBjuTHVHVpkXkSk63ez8QRXrPeiyxT2k9T3vtH39h7gjzbN8RK6U",
  "key18": "22mbUDwPz9hRL3XftjnD4dU79QiFaD8T4gsxr9Mq8Y3f88v4au1phzw2ZmCQUEvoKutGRrtvEXCxvDUQNEnLuHoK",
  "key19": "8ofGaBJhyo7TvyRc81uBCMdDJ1qwQ9o546ocrCFBUFizhh3gL4sBWbUdjZYzoXaxeXedaj4STty33mWrmyTc7DC",
  "key20": "3nZHEfE6RAw4tXvdK8i7Pht7WQKjUhbDkrmAKLS3iqRDHws8X3zZeE1KENamkpFVSbSH5z4qNCBpHzWmntmrtS8w",
  "key21": "5E3my9RyVGoM21AsT4SBZnC4Eo6WyuWMf9rGgZorYzq6finTTkxEoB3N7BFTsaVsTVmR7hQpgUkHEXyhpA15MpQd",
  "key22": "5eKDtYbsJt8w4xMnAkWP4ueFVdVFfvC8h6UfUGAisqjuEzvJSQRznscZs6dUeXXfJSQ8DVFnfNpDcNPFDegCgTM7",
  "key23": "3Tx6Av1S6kE5g9K3WkNeocy8YoXJPdjwRJE4Snw7fkqVvT69xEZqP4puY3RaEyYeRkWaYFMbkVrWotbn5NDWBtf1",
  "key24": "NffahWt3RfzqkfHekqUiA2BWMNBz7Nc8HTBaB9rn8b7VN3UJUhYURSvPvHPt39nCKsmRF6hz7JDzUGZjm1TkzoJ",
  "key25": "4tJf5jixT4NurqFukfoA34iZnRV57u3FM1gnfPfRM1yAj8WA7KcGhRMJ4TwpojG4KA3j9vqXPevEDnweyWjYp24Z",
  "key26": "3xm2c8Ah938wXt8rWicHz4rSrHgzXHDLHSbUAJpUw8mpbpbrfi6yDUa4gWWwP2L5WBfYoFnYfXqdbqTDBzwKhmpa",
  "key27": "5TgiX63MR58TTefpPiZ2ZRXfMRa5iuyKLKrLmmuT8tL4jnE2ep2E2dyoHP7zZpwSgw5gweRstbcW2dM4LWVcwjLY",
  "key28": "gr9XYb1hWNxhYfsdAyWDVRAiYYRrfwgvBj3g77UCH7ApTxJCkixhrHHypQjxCutifWJTC5mGvgBvFP6aZuYKKJF",
  "key29": "49AtCeW1SJT6EbhJymQ5Uy3jEopEVSaMpSB8HUKRWDHZsL9NvbuB91EuW1hDZK4gQtwDVRt7MBTx7ZyG8YGFxHnY",
  "key30": "4qPRQ9ixrWeGq2VNggxQtUotDiwFqcR1Rg1MrqWeeeJXXRRCa8UCr8LJPWyMNsLRWbms7ByPCKLPJvMpthL8i69N",
  "key31": "5EJsG1RZvBVoBsFtXQJZCFE32hK2DqExpMHHseoWmPiNLSiRZUk6RDs8DS52agqWbGNGXjwBrDs5ZjXUvVyGMc67",
  "key32": "3RpyvgzWoDdafAjci7ciDFFMbgb1YPYt9uYC1fnoMb2oANgdi7PVo2NvvkvhGmLLkwkesMuzxGWdGratDqi28Qob",
  "key33": "5Jw41UrXVBG6nGQrhwcZcVcxHkAjqiFD91bncHkk1oEX87PbbCAR5ARZUtAfkJVJuf5vDdcip1kJjLL2tTQZZ1xz",
  "key34": "58PysCAE47USRzY8tQBSo7voh6yNGuJ2KaR6S6crsyJsUsyKxWr9B47fLDbzu8fiEFP7TUHzTwvCHLAQ3fWqKzrS",
  "key35": "JSpADBSwHPmpHc5jGh6S8ZXVb1H2xth99y67RoJzvFC8md9thUYEb7WzArLEyKmUGLo3DPKdB4q9Dy4xzvjukcx",
  "key36": "4vJtkENyBJBEYUehPXBGx1SHmhyWSLCkRNFVBuUkJ41Za1w7SdQka35oMqfDfyvJ4ACFA9NGMWoQsSZiE4KJjdC1",
  "key37": "LbGhvodm8hLgCvFfjZaCoxEdGWcfs6pJbs1EjEarxF2Q9jiJ2dZMuy2j1DHHty1dvJQkt9YzKoHKbHEojTK4kMt",
  "key38": "G7JbQ57NevLqbcxo24WHBne2bGBshRWCC31xwSFr9G9aasvPFjHFqxL7G83UgQZDmXKxosCZ9WDexZWnuuyFznz",
  "key39": "5YXc3yukYunwzncM1m5TSniuzErzCwtjdtcVY9mdbzTN4KGccwsYwsNjSEUZvSMUUxtZXGQ8Ay3MP63pR3TSQo5N"
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
