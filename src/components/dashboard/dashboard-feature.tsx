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
    "5nh7hTGDQoAsrM3x3Euf2rUS1K1b7tiac4R88ysAYirZKtzuFceGYw1bFKf4h4S6FJhe9sKW45dbZ85bjUxHK42W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5NERJ2yBjDSqm9gDgAJVYTHJy3mRgyBcYx8c7EXv1tyCYcZGtSSmSsiUenfHLMs5dM6fw7RtGZDaVy3LNLqsj2",
  "key1": "3kDqTeyCg1AnoeSRkH9szqeG2VJfGVQtBPegeL84EzbJharPemA1tzL7NuWFio7zfre3zWoEAQ66ombtvaYsFuTZ",
  "key2": "5gPdtpbhgUFiGbGx1k5x3jtqNZhcRc47qMTPRrFyVjnWUoTZ8QGNPs4Qff3kdpjofd819WLsfw5ygNYgf65vzFQ8",
  "key3": "YUQgu7oxY4x1bQAtgos76yzAAt5F8c22YGmsPyvfSnF8QBNZTsJfzcwAhs1hYxafpbjB8NZxjZpBbJLDNLwvnYX",
  "key4": "4KtALz8xNEELUNNkfKGWi4DfbTLuxsVjS4S7CfjB3gtSdQUtamgyrSAEQ8GesXvKYATYGWf5Bgog4g7g4DWBKzJy",
  "key5": "2MwRoFLfB2ecnELSe2LRU3TCX1ArjNAKqWbAJLctAmEu1VU1zRjEa7TTLAHneDWVYfts1kLnefgs3CypMi4JKJqU",
  "key6": "3WdZHA4uQPkazun5XgM7sat1eYbuw7wR17ivcs8zYgA2NiB9QC9bkt7V3HL1PRvGmfjB5hhr9e8Tnn83rvaEpFgY",
  "key7": "2yUbQ3zKvpjANw4dWJpQbCD82MohCQMiipoACqm48U2ckvWm4iSAZi43qRbmgnDMynMVuNUQMgEFsxQuxwrDc8mK",
  "key8": "2miLybQCrZ6r57mNbz67NSjhLPf8BHsmiPSReorS1vXd51RgAPv56R1mdabXGXz5Vtu7jUrapQcoRHqzfvaDxtxH",
  "key9": "3xx6BtNUN3arxpMFhXNaYAZEjekouL6Z8VBU6AsJxcXq7KcdnT8NwKnUbaFgNNP91TBr2pHPJ6jmhNfQPhU51kpG",
  "key10": "4RRfYg6HtCeqbyn4ciaA5qgoqbhdXKCLmuvty1viq45YF1JJkzUA6SFUTgRM4hCqiDZKr9ESp3CRw7SdkGhcvKkm",
  "key11": "5qrM4oCf6yka3AYvWozYU76pP1zDGPxdiDbcjNuswy2oo6trHYgKrDcqQPGS2Cqzs8kQKVn9jMdYqJ6n3n4TfbtK",
  "key12": "4DjcpvTPHfKLFHVHpWzaqWrSiUd11Cs4fqG2wUm2jsdym2KVyRXQH7aYH235HBXEG2dxpV1THf8N6N6D3swCZ1Xu",
  "key13": "5Em9CNHsRtwmanF2r8BsZfwjvWBQWj58WxDXRe1F3ov9veRUFK8vBVzy94hWhXve8H5P7wfJDHhoZJct4Edak7FW",
  "key14": "4JbPus1o15Lx18QRgjaTwSmTvDzu1FJeDzgqpNoYKWsMLymanEFiuMc8mUv6yFCMpT6hKSwZv4rZan9GGKVbXKEL",
  "key15": "5LwE24D2PjtFcCk3gaHYNx5pfVNYHyWc9WymNbr8BwLFVkKwoGmtgQcn98aZXLkmoajxzjpxoQ8oAT8q4b6BmMLt",
  "key16": "4G9aB7gZJiJ12H2aBMkXSK43kDprdYXx4cGKqF7jtiyf2RmQn4TuS7PyZAnqxmRpSbEaxBJMqTqxgsX9MPi5jyXj",
  "key17": "HyeGiiKHcMRpqXDeztVKiQ7M5Fom1WmTSPoZxL34kRB6rCADjHzFzx5aKomFGQfMY6SkT5xCw9k8a9mBazMkuy7",
  "key18": "3wo1jSCtpgFfd5JXxQ2BA1Jnkz4n3ET5uSaoSo7eJkD4cRWRAsbE6MvDnNmt8yzqr4KLSh6KJSX7aHBUyUN4dYca",
  "key19": "5LJqUoe7MBEUHBFpDx7LkqQVa8XbGuvgnp5mDqgBDAffSdV1GhHMTqR4399v8sUEZKWLPaXvP7eqGmRUK2PXrZLW",
  "key20": "5rTqVfXZBSG2isVyCuMe8nV8TrRp1AwnbLUVSeh1YRZtV6KepHLAXk3yfMa1WRjgZhW5pmTJWCzos1fovjjYKZyM",
  "key21": "28cLwhhh3xj3dWMAEqaggjiqC36LPbdw6bRpNKppKH38Dgj9UmVopxT1RFAGzF6YWSLoQdtxkyyUkfLsYjqizndt",
  "key22": "2ffKZDDnQCQfHGiZxLM3xjtYtxkUDahC4qyuQhzZCGJtwVo3XpV6bPhjBH98qQ9kdncXbE6sPY7GNm1EzTAYYV2z",
  "key23": "49Mj7hnsnM951ukCRdiKNkX9iWiva1diEwQdyfhur57WihobWSANKYLh9nFvfjE6kSoJCAPBjMabmDjXKbf5idhq",
  "key24": "2j5ExEHGvFPNVoo4eWaho2huoB2XTjyXMkAoo3vbt7XRY6UntYHDdrWsKoEVCSsUBBnHZSf9k6En2ChFPgpoLwNZ",
  "key25": "2KVkbiFo3wgyhAns515XLnC3iWM6j9gysYCMsG6ZMTabXAS5twkZpHT47a1JHKciXCP9rCNwFmy6Zvk1kqcnAkhg",
  "key26": "oqHm3b9bmmDV1Ygmuqwn8fwGbMwn1BnSTBV5GP6Udt2EUbj7t2WAWSnNVtVVip3tPwZxttgui211Wz4HgLsqn8y",
  "key27": "q5a1xq81qMF96odz9x97LJWAAMjfSjKdoXxGVsSUUegnfZsr6umfV3AndBCS3PniLXrRdGXsc45obNivqRMnuRN",
  "key28": "3TaiXD2ZnYDHr5xXoMrqTvN2squWaWnwYGTcZfrED2B6UxDdqUL548ufTR8ZbKodSwJiTY8EJAkVdaPM2zkPxZhJ",
  "key29": "5sCirc3DwzvrxCjsoy9W8nJNhkU8JNkeSPZywVGbPE7i3TaEhDazcErXA2FVb9tjYFguCgXL33C6kpE7Y2Avx7gK",
  "key30": "4kzezrKiozUevbGSUZ7diYu7cn8JHcov7wpzq61X2qdAyyzgLvqw6yPXzw7NFr2Fckuiqc84wStGChaQZdHDKLpT",
  "key31": "pabnZMDQvxEJiufX4cvxLzpLuRxpqK8u2zSMhB3XLYpVwDan1z9Js1YSQj9hv9LtJLmWfP3nh3ZTBmDQvjDqY2i",
  "key32": "4YcUYvRgAgkyUpRJ6GaR7FZynxpKaLEK7L8Swen3yXLveQCwGFkXVBurFdR5Gkqbk8Asy8oyxiAV7r3ArsBRKoD8",
  "key33": "eUnTomsUdPvtsXNEavGSG2gR7GstBbCWyvttqzLbvasAFynQDRB9ocSe4SCZchzG356yQBoKysz1nfbpFPFofEw",
  "key34": "2Yn6Rz4fQeYmWALPmmjebJQqmFtzj92cdCP7RMr6VKovWq4twt6THBsakS4ZRoesLYHgfWhqMFwAfhTHcNoefw15",
  "key35": "2X4C8MynbazwGfvmumgFatmWQW2znVZnWD18CZk49xu8vXKf2XKkYWMTQTQdSwDTCoC5QTpxLFkW8J8dhtAoztUc",
  "key36": "36gmN7NgMocUmRGVNNSZQyWV2C1LiZGdMKkb1mLCiKAhAWBYW6w7eRbJhmhRQsyp2QqdSa5Bsxi94gSVaQkphbtJ",
  "key37": "62NurPZU5PU9VB2gk7kQhxsWoK1qU77vN2mFqSsv3YzFGF8YiozC6i8XdJ4rxZK1YJCYLG7bZQxgLQsoZEv7ektv",
  "key38": "2myWYMb94PdZSNJXhwok4bMWKY54E8bSKcydZVnATwjfbGseJLedmFt1fvYn2V4ptZye1XwXXqQvxoWKK3YMixAM",
  "key39": "ZDj5dABHzjvBq93Eg8ehmpNcd3KepKSnebyy4Zo4BG2CSGUBWsB6qo4yQTM8MEQfqYziwkmBGXY6kESqBTxWPxW",
  "key40": "5HqbkUiFToMt8Cy1EaYR3ZtDoee6SL1DH47GU76dPKzJ2DQgbM6zLk8cezoB7exD2ZyKjCWM34AjDyNLjxgiDU5o",
  "key41": "3jzmTRwEirnTEMtxs1qFUzHDEas2o5RtyNu7Ssy1gorHTthdVhSC1CuYcSLV9kBUNiPYXYpZZDSM9j2Rmwv8JFKJ",
  "key42": "3ZuZXKrFqBdvz6yFX5xPw5DyqEm2E8rw8Pjc4s2bzAvtRgeRaKEyHVxLEiraLNuoDCkiCBFiiybFZrEwh17o3q26",
  "key43": "3wuwHJBpUDEagqgFZQyn7pLbWvdDZTAQtS1JSEXhqbVHDVfyAnW65fw94SX1LXB1ou94dJAmLxZ5QvKzVugTjh8b",
  "key44": "n7ZNVPQA6ZZgMYPzJ2vzGHTcessbeDeTky3ksaWuBvFLJnTLzcjanWKLxXhYCZSBf6WVBAVJzvjAUumk2aWwzd3",
  "key45": "5goSBunaka4PPXyUsfLv2ZDamep9BUMV48JimbQbEbJswqbHa1oWyc2a3nxoLjHHoA9o86xYBoDDLeVALmK83fom",
  "key46": "2sscbyjJpTggsj2ZFyz6K4nZNSUj675nyxDjHXgKXjjV2fPnhSev7dJPYNq2Hhyxy4ojEkJFjTmnMrPsv31tDDHd",
  "key47": "5GmA73j3Czw3hsCDtPCBt4phrFe3RYnGpqtwYBj3hA47o19usKCGWB7UDM8b3xxwpWFjCvgQW7rsFgYvLeGBFJaD",
  "key48": "3AHXrtN7H5YfZ5tRv9YDwN6RHCMkHAoDfZ64k99pL2ui9Ran3vSNdC3Kp93BZGeBBijphzeH1yEcxQ4d2S1dpyzB",
  "key49": "5Za7ZNuVM3kxbnrzuZzkEgeXyjivPrMh27kq38LrbChLeKvHTKnti9ZxhCTrTQ2D8h5b7z1yAjGxksnM5J7xuU9o"
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
