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
    "5PucoDXu31E1FXiQoxp4c1KJvZobXJrfGK1tdbdwUPknyUw2MrhCb4fchqEUJmLgrFMph2E1vFkrpSwwqXN2k9hA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRZFyUBWvabrxMFQceeT3EcqBN8WXFgbvzzGhkAKUYuN2CSgT5t6S61Tu49QZ61VQLKTnF8NXs9zkdBBKuyooUA",
  "key1": "3bj31AsiBfYvGPWHPt72vK8u5rmGetNz7xKkt4MrkgRjC6yvxGaw43dv3pUmYzfgGiedyNAzWCaRXotK3nv6KeUH",
  "key2": "4kEcbWjvdw3iV88Q99YRFqTEnsdTiYQPueCxVUmj1mjDahwvU2QvjFetHpkPXbZ8Nk7jEsTvw5tr5MseF4g8Famk",
  "key3": "2bq7muaE6MEUQMYUMrVZTrLRMwJSwJLNkZm1Rh63qGBkoDvhHHuaEcQjRbAhv9TJ3rsvm1d5PKTnPaPvMhWLSeQN",
  "key4": "61QTkvfJYETiedJG2Pxo7p4gbgrmTrsmVDZbCafNGdQq1dfYrGXa9BWojyxsS74LxHNYXqjqBTSdxjEGoPdrN8kx",
  "key5": "4Y7rer1naKxRsafD8mySUXzE3vLkXagmuUmgtqc1UjjCru7E5Ga7BLomQwLqGhsRh2rFPFjhFbqtc5ncoqfrRJWD",
  "key6": "GGDG9JSxnBnnHmMPBpzowF8u4bfSPC2NYTCXhyMq4JdYAFpACZ4smFjDHUfJmxi2bK4QtS3Z3iV9oWWuVV7BMkA",
  "key7": "2fiH796yUgbKaCdzyqEFwPrrzzRnyVG454T2AWqsC96jd1g1EyEC5AwZNoGh5aoooinK51ajH2gfHtqt266BvAgn",
  "key8": "hHMrMaVo9hgymUNTkiCpTKoDEEfR6na4ofvWeFMZwqxqDHrEbrJ1idbKRkF3H71J2WSjWXfEDN2hMZDsbpsSDut",
  "key9": "5WmKMPhVwT75DYkh1otQG1KAFmzv64jurNgSxCAYH1PUKZuAECBdrkREWpgSQY3WmPN5X5E2RtfBZxbZ63rFzrF5",
  "key10": "qwNuB3cGStUKwnJ81N1SbPbfnRm4sS65j3Jf1sfhsDnuTjVZwjbeCS9srE53cnLrMJjuDiAwEWkKdwKPxZXn6t3",
  "key11": "5XY54EN9gUuM3BqpyDAoBMd2xZMRp1o6wZBN84SzCRtiCEhwbHLXqcMSyWBZbjDX7BUrefk3XG1QuEbbd1XZQqjv",
  "key12": "XvqCwVY7JfFZ3ATM8qjzFbvnwLEBNBhb81ywHGC9s5cB8naJFG6Atg1sfv9Koi5quWiYRQUjSL6AJWoqocu7Yci",
  "key13": "5DR9pD19L4RQdSzME4mVSkw8FLTJVjkqP1vcoKAw5Xz1UThURd1Wrqg1hkcpN713BedHUAaU2fo3xpe8sakauKyc",
  "key14": "4VkScVSNhd8pNY9PJBjRSrDesG7LhMuT3nERxQNEBd7bLi3HgzTNGWajZqV7SGbccTdPe2J6m4Y1X4UtAJztCxZX",
  "key15": "3qhPYM8LAXP2r42ZrGVQZR11EzTFwzCh8rSrccFEfoyFnCDgScBP8qnjCAAm9ta8AkbQJxEJyG9BLdsPwRNwCoZy",
  "key16": "AycBRyLXNLYZbmkbvPW7PpGVf4DhXpVHT63e9jy9w9UKPxBEYAfZJfhvFPwk7G2hiQKQ1jd8Pb9DNt7HKdowP4n",
  "key17": "cTPSYbScL4FN6BwuPWL6Y4vMjaTBLZbJ5FQsrWpJGU4BW5bbwXVmy7Svgt81CXGEqxbcQo1AKLTPZBPJ1xPUjBs",
  "key18": "6bNRtodknTSHgitWqvSGyT8U8WkQu2F1XV6BYkarKQDGutqokW8myZzxC6EpzCceNaGuREZu2NXwhEeqnSBpfzX",
  "key19": "2fbbufoaXtETaT5p2D7oBmcgU7USn48g68PDJuyXDuhXt67jTB7z7aGLGzi813MYjyfLNkxSKW2SVvWUCQCms7D3",
  "key20": "35ToBk4vSMo4XGwehwmS2Je2jcmWaT56Cg48iVupBjuquFTdTRisYiTWGuQoMhfPhtmvjcgMuBicsm9Qt6Jxpa6L",
  "key21": "4AnynT1c7yFN5vi2AomB38FczBi9A92ofvgj4qJ95WnoF3W86E4rp5S23Jcffiy3uHkKNw65X8fzrmMnDymADPE9",
  "key22": "3z1XJGX4zicYdCs9rPFPKYB1nDeWAvrdykDwPLQy3aSPggyqHmJpcimiqbih4RGBjuLNVX5ZxUzXt8bQaMmtQLxf",
  "key23": "3PqrvtS5jtMBmsbjZNbJXyB2QkrTAuRu6c3Dpqjiki62xvn4TAicM7hkFywBNbLAxQGnQHe8EhMnxbRpkfPUTC24",
  "key24": "2d1p9nyPWhxZzUNgbJJ8w67AYyD4BAVNWDdXMiM7xkKi1zAbgNZmRBTPfaVmyEaXLA6x82SFvqQvRpXMwBsH2A8",
  "key25": "3vsEDbbnqEWz1i4SKnqy1gK53JgueH9s59oHNZi864yFEgJC5iRV7gFNqSyaGxPey97bm3dfiHo13BSgjfjBAMYb",
  "key26": "2iaCfAHXsD5o7h5L9hoYM8i2guaWRmQnFw1JuGWwYKhnnvjb2VWaYLjifSWuN8t7PMoFwxT6Hk6eACLd5U5YNrAe",
  "key27": "5VbnFM4BTXZcz9ZPE3L6WP1jQGc4qW4rj31t19xcUccuZCJWpnDH6BtZd3VBVCTnB1taBJ2RpHzCL2xcBW1GV9zQ",
  "key28": "3HuDZTjRRwWcjc1LXh4xV2YHp8zm8PwvYBDDdNUCnvtcUBjjNffRbUX2YAXx9i292pVWAfBEKZwyZQDJvYL88uXS",
  "key29": "wvAS4tUQq6VbaoM4nMUpVeSPzLruQmVLBJBeaccFjxnjbzg5Y26JD2YYpxxqRu5AHtdZU5yvjFcGyh6S9X8vbZ7",
  "key30": "5LmCpvWVGiyAFqmp8MVxpFLoYUYLqtiPKMyqjYU6os3oejG1NQbLahRXBPByTf5B2MDcQwxmjtvVzGA9uDVV5MoR",
  "key31": "3vHwhs8ZBjw4izrNa9D93EDdokbFpoi7e13ESzLnuwKqzgN9hh85rHWqgGByN1NtcWwovCfxaLgYdhqj95fCYptY",
  "key32": "WQCKsjXjuaiKkFrAGRgjGpkZy5egVdj4Acq7ZjAYqYBu9QeWEmfSfnA6gXnU4C6svkbxtaA8jP12eQpyVF1i3k2",
  "key33": "5oSXJgSxSGWhgZYAENY5u3xFsx4ZVRbc9qVUp5Nfp8jUmStZv9btqVrop8Mo7tNWzyBx8ExK7RpNHjWnyCNyipaW",
  "key34": "MKMsz4r4xYvxbHBiLaPAskR1fF6tJjQ3wQsQBo6RC6csHUtBAeF1jkW6HAWqdqTXHoGXmNzd17FwzWsppnCWL9n",
  "key35": "3pECskML2y7zBRT1kA6DHhUA8chcPZr3cFmmgwQGQPjzR8PQHRR4wS8K4tE7rtnUuiK9qC1GohQXhPj1T9bph32A",
  "key36": "eKWf2F3K4pGT8PvP4v3b2xcMzYMzbGrX9ey4YTpZZa2Qeipg8BUEunFVTcA438kbK4QJ8xucs1EkKkSyFyjzkir",
  "key37": "42KcL5AGdDgNaWwPrbqbNPSUA3ef361Eoe6HzxuNF92Le5a47yL8Tzsz43LNS2nMQgMa8SFHd2zZB66gLYAGAMyJ",
  "key38": "3sQWNrnCFWo4nJoTbrQHckJuG37EBNE11Qiv1DNXEF28V8CWc7adeiVXsJEDfan67zWuVapR3hZg7DkgBYs9YEkh",
  "key39": "5iDMpB7zpR4iGmhRitqXWsMeqsGTWkbJGDatQq8Hv2Di55KDRuaGAznQGPZCRZT5L4tGZ89QEVrFb133ETQ58FoE",
  "key40": "3gPPpVVha6rvRCETtQWW9i66n7cpdT9TRsvfuDHyohhL6ZjncVtJbEeEnRB7uNsa5wHrCjfviPdaHMhLYa2oNQsE",
  "key41": "3kW7NZ8CLQUnczoDFXgJoZ2bdgg8Yoh4gTkbnBz6Wo4jAYxqEczDKmDgYhM4xxwnRz9gGVjcxmB9LZqa5M8B9bTP",
  "key42": "egpuW9Zb3vt8rfGDvPihs1ujTgK4hD56JVhGHD5pFHpdTbbTEUA4y8buFw3NDkAgGJTnFKfCSP9uhfPjzRjDX8V",
  "key43": "3WQGzj4oGAtJoMc6ELKwiuzMvfWcUS4DnR85cC88gN2vwMeffTQZwrvwq7ov4QMC1qmF3unu6WoXDvbMRL5RG6MC",
  "key44": "21LqQWcx2K44soHFQuff4vv1Ezexoy5HzdvJJfWwiMFqdTKqU1VGgdwgfLZKQAXvBgyoBNEL1EFGtNzTGLLzgzEz"
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
