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
    "46PGgy5DSM62nraZv265sDE4RXv5PhG7cQj6FVzjvcgpUTMizYTWnKvvKXu4pZguBKRRb45694Q1E3v88r3iwZUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5rUc6UBrXZg7qjaySUfRVCcsMp8YiMeXJX54A1azFWfH222x5MurxBZdTsToTMTXhjB4TekJ7L41579gALjjGq",
  "key1": "4SLZVSELvkoPVLecu9sDFyYj8UBTUt9hE73cfXD13fBpAduMMAMdttVw7dzy5sP1WQ9oZJqMozYuwBvV5D1Z1q8n",
  "key2": "4vjVR6Nh78RqFCetGjDsaj5Wpq4btYitUkmmyCK3TX29ScWhBBBCgcMsbndavvvWmodpVrq4jowYLSUZ95veKxQv",
  "key3": "3mLrdKpeKMcwsFFwEtD9Y3o5ZTPKr9JSjFfsjb6JHjh4rqWkWyYvHsP746HYNHFjPu5sHYhfMsJAPtVpi5a9NHCe",
  "key4": "2nZBsdobiXFMbJYuH9teZ5iZsVbAWwpDQUgGHhv7dJvCDgcrgDBqJqt85zXGTQtqV2NiMf1UShCboPMzqiVEXZfB",
  "key5": "2rXNhs3K62K17LkSUg4xeYwyuAaoKaV8NzcH1pbjY9yePZQnacuZkK7XKUon7XqQj2cLan6FPhTQfLL7p4Zv17u9",
  "key6": "5hZKehAaSN36zQ7CZamfuRoS9ncDWTFHz1ze66FZiWqGYXy6CYDdA3nAdcBCJ6wERw1zhb83jGhMtVbH1XgbD15R",
  "key7": "3z4gMEZUPRUjXupttAmx8KKC1wd6eGhXQ6p5GKV6bm5eHhCN3QsQKSKmbAyEc261yEAtE9uz682Z1xrghP51hCTG",
  "key8": "2YW3wuykANR41g31WwWMW2oFnThZya9pm3NaXCttG1j9PE6Su1fiEzsh3ksiJ8kpGMMExB5FrAwNWur6LXuQHACN",
  "key9": "474LEnpikdvYhiW7RTNvTt1qNVitJN66dsAedUrVHkHjd5TyNPKg3xYPK83Yak83djbTHbcQH8iCCkMPnjwZhsoo",
  "key10": "ub64sHkkS42aJ4239PXw7XiFoKKNsUnXhrDizJ63LqgF42BpWYERbVzrJiJv6yE8134UMTn19WzFSZ92XGFrkwL",
  "key11": "GvNW5K91qjZDdaP23EWAdn5v2mavJ6uVQNPgamMp5u9brFJewAz4mbPmKkM6DhzCJcLeeEYMu86JHbf4X9w1xtk",
  "key12": "39GgaLPEsNmg1oD2LrkwVj2h3vyn5wiVbHN8NcQkbvtoW3gfvuNq3hWc2GD65vgPeVwKvwQ86g5snKiuEWjFddmK",
  "key13": "9P6nxv6HxYsq8ecK7V8CcHJhYQuy92ScwLEFTdbeLPBqaaXbsqwv2atuT9ax54Ux9DE3GmYvK2R829zHEoC4ytG",
  "key14": "4CsxyD8kJ4NQDviiF3zBiN1HwNyyNsGBPopSNAEgjtouK4TsrgfVtaod5qVPTdiqFeUcXAgxdX1n3uHWJ7r1sQQg",
  "key15": "35LDo4F4TxGgYZ9hjLPMDfsBwHQqXKUh281RonaGKGK7pBp47xuYEPsH5N9o1aoijCuCNd4RgDAHdZpWKqtmhtwL",
  "key16": "6388RGiQiRPiZjyi33UBjhLDnpsVuVCLNhJvkYzf45t7MdpZ7V4ec3Rpjz6EYbJwtmBBppPxvurMLLxRHjwXguJT",
  "key17": "4KA4T5yYMpRK21iPDn8BbqZXHzApBjPd9qQaVAidJSX9uHEuQtiHo1HQp2avJ19jYYz7GqooNpdQQgNbqMkMxptH",
  "key18": "3nZJVpWsnQRKDgNCi3yUWfXB2D8RMMrqcF38KDUbDmHT2Hs921VgxXazPmK4B4qu6TiXJRwpufpSZNxYZ3rNK6sX",
  "key19": "4bpH31vD5bJukCGXmcYZKCQXypuU9qoC6Tghg22BQMy3Zib3332FXrFxZLHFhpw2L7knBYQ6qQecgkjhLxhEibeE",
  "key20": "3a33bdgsDXsXhsHyS8Mw3j38DJ4XFVgbGRaS6C3EZo7Wot8mhmitsNewySzjYVmRyg6Bbe6WWZN8XnuzhvBYX2o",
  "key21": "CjAxXizKn9qNTVL3PTRBkbpsitM3iHCVkhhNGSTiHA8VCa7TEenx5CrTKchLtfZTTtAbqdfqEdagerauEyPmrhN",
  "key22": "2LrMWCDaSbJwSyZLrzVFwYKoATF2jBuyxLSE8T2mzPyGghUYL2fhMHRSk4BEZEg7R2GdjqPx5WA6MvLZFDBL7w3C",
  "key23": "5L66goSq3q9NLSCBeunoiUQiKdnLW811HyuiQ18oj8e8u26pgR7gpYfNTMb2veoeRkEKJ8BiVyMyptUJu7AAMApx",
  "key24": "4vfDPNNLBe5ebY3CnzKXbQoSPfihHr57Eys66YBAbSJ2H7ZtzN584sS1AN2DuRs2gTxhDp4DGKQf5J8rCvnDQbWm",
  "key25": "kq4H4WkbmMyhWQAAGf4gqW9Mk3nxnM9NQAkxnoYavwzfeYArtEKoMUD2UdhDgZgSAh2jbTWqzwJJc5ihWnbHdG5",
  "key26": "31KKFghKAkJH49gi1CgMqg3RKbD9NkMbLomSWheuqFdzoLX8Q2YZh7uGTiRjsP8cq38uFAtVEt9MUAVcWTQiyjUc",
  "key27": "5kAToC9RWJy2ZvvHTzA9X19f9kiNLR9Y5NSB3ZSw9M4eKn87W35rRAnxLqa9NQ7FBzmHRY6LNq61zYJU3MJGQ4Nq",
  "key28": "61un6mGVEsN1LsTGF15WMWXt5HNd4df7aLrFFpxJ5b52bHb7uRFgRz9WUaumHJb7qe9YetRnQFN9zrYhTzf6iDmw",
  "key29": "4Vn2YJEaVqZVyoMXbHb6cBYLgP955ea474GpbzhzKEkdsg6tCnwnz87VKwX5eVB2saRRy1dmgHTsrkA33uu7Saic",
  "key30": "36KZCGf87npUZCDH63eUrB4RFA56RCkXhBk9qGMsrTduSzh7NzVYAtQyvv4jd47oLWyEPnTjjDRaMv7qXpBtgVY4",
  "key31": "4a4imkL3twKPCB9coCBXWp5gc9dymgqF2x76Uh4L2hcUgR1nEUpBBEcf51y62qngQHY4qd33nxJVwEXLa95yUWia",
  "key32": "yhdXyQK1HBhGy6BmBah8xT9MtyaS1gjgoAkqJQtNXzYmnwFsyBzsARU3MEGmY1Spbd2MZuTirPxQ8JfdUantfLt",
  "key33": "4eZDAnUCcpB3SaSPbviSx2pkrNnKV79qNiXw1YuBt755v2f3E6aPpuBge3omfY25G6tNRLdmS6uY7MqSJqGN8C7e",
  "key34": "3STGDfBToLZXx6ewHBmiTSLaeDemdYtL53gM4o5agaY1LQ3keUCh7BytPEr6Ag4QBafoewbXJ7Q442saWz5Z9oqC",
  "key35": "2AfRGn5FAeYdzZTL788vqqefYbPUPxGDTb5fd9nh287cf7DfD8ywDv7DQKVDcGqEHxAEh6uezik8o514TuK8Bexz",
  "key36": "1kvUt1e8Fkskq1AwgBYFrFeTapMbDZjFYfswoxxkQdEKMcpJqvWsgbZKPHpobfuMHZ3TZqMzu1eAfYUi2rvzgKm",
  "key37": "p11jDFrpSbti5k43i1pGsgTCoEJ2ipao15HhSDcbN4S14SLome829vpBoy7MEs1mhFa9BL8MXX51tRmskMLS6eg",
  "key38": "54k8TsbiEQDY5qPAEpxvJ84zZU1BFWBZMQKHKSmmr4cGg1SqzLoVjypNPbTuwXFX2g1DnFoLXqU7cekXSceis1MN",
  "key39": "4n92hUsgHQwTU9gSdYMLz3TjPNhUU3bUKjfEYUJ87Ly8Kr65V8e9vm3q1wnNJTfw9qkDA3cVdr6timwnfpkDpmuQ",
  "key40": "5af8PFNXM1W32L5seRPjSt9Mgm9CrcSbjYtckgNYdcoEqhXP76Z6JgJMY5rkFnxXckmq6obMnKW16XtFZMwPAwfj",
  "key41": "5HDjdiHxJaH73zQ6TZdHcqqQHRSiqmQYP4ga24wQSHXnApbHpkbSVT5pCowQ7AEFPz4NjhnxijHrMVP2AB39zBAB"
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
