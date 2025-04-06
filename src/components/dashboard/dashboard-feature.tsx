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
    "4683ERn9LppvhHKujRAyBeU5Kvrx6eAHmF86TLQpjghFB6FX5wLYRcJ4RWJMHRxgavJpCztXCwHioe4kAXs15tqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BVYZGrv2DGxLDNCrV8X2i1U53z1FemtYMK6EXjTTVuzw8dDU67GxY25j8QwmWiJ9XgMjnFAs8y32yGoVg9WyULF",
  "key1": "oS5ymNd2Wg9fsHyTZwnJ5m5DCS25bqpEHnjsHH5Koa4g49Qg6zsjtHZYKS8CiWtrXLXCjRFUqptEjThPggP8dbg",
  "key2": "56XhVEjmksbsXCxf2i5US61eRvAWXAk8D9y6btamZaYbfYET7ZbtcgqoxgEDNshwwUtmn7BEkVTsQJfy8kcGxV5e",
  "key3": "2tGGW7SzaCYHqa8DWEPrwX31L8cMfeuKxhhAycE83ftxSp1jqoeBnnE9W91MnZPSVYjRqZkYNLEsmJ9KCBx5Uoha",
  "key4": "5DhtvDj1yBga3LchueZJyXJ6L9WjYs9jx3GpksAmYpj5U8mzFUHgyjVFKavQCBuVvcTuMYifRTmB1fH4TdZM8izr",
  "key5": "3jrLeSZHWuAJEybzJAqPYkGWn8VHbFA1zjJE7MF5ZL1z1spMpi6D4QduYxq9yy5gMcRH8H2c765x3rmp5NwahCK",
  "key6": "3JUXndw1Cf1YwbzPtQmFjS8LjmdQMgXUEZJ1X3RTskCEz2nMrvfZyythP5d7F8E5sA6ZmXEmLuTPCrarTBJRGmyF",
  "key7": "4AtBLjUqdvHRS6z9FeTQ9V58NX7GgJAedWN4R1HExfYyw7zm1oQHUZeixGs4dKe1gfuvWX7KaqdtfBgauoAsNaBD",
  "key8": "25QRYGyZv2BF67adnjYxakNC9vUfz41BgU8WZvA3yB22F7RUUJ55QsrhkmwSRYQ7wf1TvxcquDAgydrH5PjboGQG",
  "key9": "3Kw9XjtBxW2QrhAMtm3PpUzNFiVhkdpERXyuVDQzJ39EbnU2tgT7AWZhHyAxpMXxqsFek9ZkkE2oBsQhxohrq6Xt",
  "key10": "9g8xTQTcZ7BYkbaWE2TPtG1XqkYh4LP5NnhvnQLqiAJsVx7dMBK43c1jNcyonZLHoU5EQ7ezqELohfu9NJUZ9FR",
  "key11": "5UzAMEymJpziGRfmSgu1GgLSraPcYnqh2PTG48sHExJzd8oQsshBnPvYxGw32rLiasM692peMSwhvVxaKkXoXhjh",
  "key12": "5eaBZRv7ioh4tudEPcKKzLpKByASZeYyGKYyV8PVETArCGbErkGTEudoqq5qKWMUGArQXt8N7nMzajix9PkuSsCJ",
  "key13": "66E2uVpCBu8aDafgYeNPdmBKgLpKcRaVsPFSUMZDcWktYzczw8T9RMwJ2qjuMweVPmZfcSTXxd5SyG6v5UgXykb",
  "key14": "5eyTzj9vaBjyTvZsL3ke9xPbD1DWC6UiYieArG3iCUxtBs8TQ6bqcqZsVCj3zSCKyoCY85ASi9bxLqQ6zaMPa6Gq",
  "key15": "2dHMYPTje8BnN1XojH3hk6jC5zkvFheiiAEBaF1r9hVFeXGBwRabNUrS8xVjZgAofbgRBNnDfb8YxpitMWkhy2hF",
  "key16": "5GL9M6tXhK4qpJ7Frzj8FaGz44jKxSNFHArQ3zFQJfc1M1P5Z8xSsQnXzaUE37VQAwoKnqnJM6ESt4Qf8gkywwNu",
  "key17": "K7wNaZbGb4k1tCXiqEs1zEwWfEsJSBLdZsME3EEoGFHJksFUcBzT1FpD8o6gjcLo66v8LPcBrWXA1PAgTn91mt2",
  "key18": "3RwcVaxesBQCdEXEVSeHNhczpLwUShWfyfiE7hu9qmLbV87S6dvqriJAMk7XJfEqxTFPqYGyssq1JK28uNH3sGVj",
  "key19": "gjm9rVqvFzueNrkUNDbDTZec9dHoGGVKcKwMoYjqK4G5CtHW3XRBAGd8EySyS784R89tBdUWV8JmcLgRfTc5qxY",
  "key20": "giC817vQhNXM7h1A1YEyZ97s5nLmF38RfbhUr7T8MFk2y6iL7tausjjnYzNTDDECed7EDeh1G1FTvDnUGeYkBJn",
  "key21": "5YSsPPKCyAHsit2qXuSHEe7LGuXLLFJbmZFzGQdSjtkPr3tDxXAwmJgWG6yPAf6qyTZVwoKabXZeiiTHiEMg7PCd",
  "key22": "27n4qHV8AHNEixTQ5dcdfSM81oTktrdoS1cPDv5eyx1rwSH2qdpH4wSxPed76ymgAVscP3UP7k5h1TLjSzC4NCPg",
  "key23": "5S4y1EYvmBw2ibgrCDfyMujRy9sHpvfntMDHH8yFbXxrWZAMj7WF7gAc74anQWRANJFDC8wi8tNiWnJ6hUCzXviy",
  "key24": "51cD8t2Qf7gut2xyQawPaFhCtF8kLRytEPAJ2ETgha1r2qMVaRpkfNshuaavynFxr5iw6yyP1nML8NQqxBUXz8S2",
  "key25": "36ubr8BAe8TMyruuhQCezoZpgT4zC3zA7N1ABjRdvkyWpjh8kQBgBWtu4GLKXtRB6AJTtBze9zqZWJ9UxkNAeQfg",
  "key26": "4Lf2P5vYyiNTF3VvcBs85HqUUfhLE4ZKQuFtjZFK38ZzVXf7Zyi6C4acEncEmsZV27okNUr3Mo3yY9oBiACMaw7i",
  "key27": "mnAKkPhe39FeEBMthYx1cYnQLmMgNkMZJDvHLAcZWS8jU6AhXp7GnQM3hNpz5nbF5b6P8QfpZqKphH2wjqLBUox",
  "key28": "4YigNTVTRE3fuDhLPa5j4YHi5JnvggzkccCsMMWUoVGW7JHejWMwqZxt5Et15e8b57rgcGDVapjykU6oUtNPETsw",
  "key29": "61SwxLnM589kzQ8mPcmgypNBetdKc7QbTpRrMGMAXaxdSBhGeChKjkcZKngJ4XRyqjvTHuQpiGHY4MQyi1AwY7Hc",
  "key30": "4BygoJbsHfUQSmVLyZFZ529dKDnSFWXx7brx2Sig8FyHPWwCDoTzXeMG2L6LUzuoeYUzdbedx1VBUfdiuqWw1rm6",
  "key31": "25Ad7DwKLtLGfrvXpgTzRE39cyuz3DC8g1rt2LZSuSMvHjJVcwNgYYqNXXXufXHNcCDohfM6Xp23Mub5Wuo1qfTv",
  "key32": "PpogsddVLzWyXcr3hVnMxXNirUdF7gGSng6Ke85oiJooR5nKqfkYpoeMsWPrw9RhZ9pXeZ3NU2EzkonMd3EoXEu",
  "key33": "BUqkfX7TXd6jPEzhHXTzqEUKN3XxGdv5jNzgE8F7jY5SQGvHJL9naYXxyvvbLKv7Z8TqK8PWzVEN7NQBpGbt2VK",
  "key34": "3EXMBS9ShATHbXAiFewu2s74v3zYB2LroeDD7tNYJo7a1rj4HJmR4g2vEZKyxrg25s9n858GdVGTLBnadc5GHmhQ",
  "key35": "54Ghba4SwFMfwAAofnHzt3Cw4nvMSjRkzBTgGXguyLVE5DiSU4KZcdm5ESyv1je78P6hN5VHjnPoAvMBNZLxYScB",
  "key36": "4sKXrfbsi3CHPo15UwxVPQt9DMi4gGeGuM8cEdVqm7RjEPGPmeTjXAYepUwKXhyjUBCJf5ZNLQisGiiQ8hoRwvGZ",
  "key37": "4vwDm1tyTmdZ26Z8rk39ihuYMcyi5DhgheHeW8Ffk3aLMbZ3BqVDZdVJDtDgaWXKewMKL3D65RiG3WLR7YXuL8Xf",
  "key38": "51ehzLKEvU6uBnHwNg41o1C4C2QAB6G1v5thdfzFdHogsZqeimDVqB3qk2xiRLFDVN9zTctZQMkAjjR26M9GiUyZ",
  "key39": "2S9uEPMJ3XjpL17JzdmtdzAAB8dz9sJE8LFNLiDiq28fuQU91TVqf2WJJE1221hzireh46pG7GPbjZrrdYdaHu9E",
  "key40": "tdBTrj7GXH1RA2akVZ6mwHWgffiwCFj2d4R7s8MXc4eW1rXdK8o4yq9CYZbL24M4oYe8a7keRGRZpLWGYkEDMBx"
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
