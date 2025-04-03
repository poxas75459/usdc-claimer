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
    "4sP4a534AUGwqgY1aphPV5pYozUuJSUNoFYkmVjvxMEFmFEQ9uADp65PSWfr5pFoE69vnn9gmZ1Nikz9XyHVtC3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ahgRof3h4E1s379W6GkTwKAxzabBcrtnQQXuw2SHh9RspZMnjm6f35VQA45o3PXsPQafrNtu93n5V7owYTzgrAY",
  "key1": "4Lprpc4bC2PozRRC6W4ShG7oVsgzA8A4cy2B196CBzbP33e8ZN3Nj2i3k2VjDvuhnDBQyFCutToD7nFDfKAvCPh",
  "key2": "5U25xUxa1T2JwG6pZsSEgizZoE5mXAF3mK99bsWkdzpmftcwdZfT2cVYBBNoL8HbX7x63TTw6vhtWUAFpJbpDW5p",
  "key3": "4RSg62bZPfDMMTDzXUqYn9KHdyRjrKgGqXtwYY6KucF2943rv29EnFsNVQ97bNe48EkPtgi3H4VVNpsHCsSjbhZj",
  "key4": "4yG63QQ5Y8HSWh24w9U51XbEUgZdRX9uWgA6zS7PzH4BSwZeEkPkwEk1m184EB5vBynRroPzeQxsA1w5jhqER7AG",
  "key5": "3Xf4d1QZ4ddpohcCh35LbdczvFKvDe5JKgeR75bKbeBVfU39m4uCp6a6jYP15Y9uz96jYFWcWBdTQSWJbjfAR2yo",
  "key6": "5M5eZLcru4GZVQHQ7e3iknjUYGjkaEgGP48megf7P1j9PuHpz84itSt1i5a4qLonAtGgaAMQnuXpr7gTSKD7XNp3",
  "key7": "4dxQei4xn9ESWQj5S49UcaHpk3sSTnMUoeMddGJk3hiYoe2az1hpJzVFYBcUwkcnxcudE18kV45d97uvfQyz4xDj",
  "key8": "3MbT2cpeWUwpDCGrutZdZwmGoUqbSsjg1B5BRtju6iBX3ZiZM2iwwXPkFK3DaiQ1STQ2KTXhMcqV345jxiiZWLS3",
  "key9": "2FnCVGLvmiHEgmmsygJ36Da1GoYEXtRkq4hW4F7LXQZuPKwAR5smiKSU1TAL3VhUeqcGHtjy3vd8Ru8p3gj524Hr",
  "key10": "41ichwbnf1h14CnjbPGqzUYdTQCj9SEZPCEpy157w619ggeejgLsLvJmfk2tuKAC3kKEnwG9xz9Ci8HRQfXyx5xJ",
  "key11": "3WHaug15ZLMRJroCnSwBE9p83umkWh3HYvp9XUBsWaP1A8kFM1DVXDDcqUochxzar6uEtz1V1FohheZpxaUsUHoA",
  "key12": "6KRYB6j29M6uwD1YwoN2Ria7tvtjgRD24KEWkWKKaDEU4Xko3wi6hiVDDm29pgtAuwzQDGnYNgrxZPzqRLZGxKi",
  "key13": "2UpujwhHGn3S9Dwa4okUuzLwasjyCsgTaPnEHk2U9RdUBp9rkq23NacmivWnrjzLWmmWRHd5eFkuaycoxeiDmcQo",
  "key14": "39hZB28iDry2V8pTAtrLs2gpQYdFyEmYZE4pDHespfP2sav1aEhD3Tgh73o3jPehPj9mbEdPXUSz4B19Jo4ChuMN",
  "key15": "5rKsSxGVcXTdY5QQdvFCmuYvuK7JZPCcA1tZhqUdDpScZdRvdKZfv2M62bW1hBtuuFP7tUS7uHLHEFYpyWo5MJ9r",
  "key16": "4QkLjc7ADRAyX5hW2z6gZun95wDUVFkcJUhSSU3pxZ15yD9KEZNGnMhDFpTZbRpSY7HdHKdcLSfGfHUwBjmDcZ8E",
  "key17": "2b7rw4esVjwQ5CBSQfx5fWDYe6soczMZx8UrMvJuu3K4SvPP3wsy5kcvZB8Ajwduk65yisrJ8T56tbHJiCj8xGDw",
  "key18": "4QsiMsnrWQ7akg8P7KvL3ho9iLHugKdtKyb2g2goRrXQKTrmFqPqbh7wtVTjPY1wUesEfuG7MEe77Tt4ErSTkbfq",
  "key19": "41R5r7jDAHDb9ZQGwGKeq8iMbH7VjuduzgNf5Bx7tUdYau2fknZesQmuHhaWLep4UyLVuWAcs5PTivAyfsy6YGzA",
  "key20": "5nrDe2sS1TwtYd9vWARtQRxpeNzpqvnaBH55eKizpFxW9HLbt3fcQxgk4MhgY8oRp6gqgXD3c7nh2uU9NZjrgdih",
  "key21": "38FFUmdLUCiebbzQHsP6oEy9wJ3njMKwbscJmnNucNPjYmVpE42isvC2AMo9trnXQT1NmPn934iWdJNGxCumSGBM",
  "key22": "2Y6ZCpDn3h7WVtFntaxPSktxwZN1EpbEQXaTh9BdDnxG3gZFXyNscnEcuBkvfD4JkFLfRJzskX6P1Ezj18iZ6bNc",
  "key23": "3bCi8SgUbE5WZmrgXL6rziTx86xN5yM2N4Aku5AGXqBcC5oyfsW7AJEeREWKLETcQFKixMsBzKcSVsgAzAfpuMdd",
  "key24": "23gkwYkCaHfiMKw514twB9m4C3n5iPCdBPP3773dWRvk25UTaGbrLEe3dBhUZxQKZUgHiAvywGPrX8M915pHbUQs",
  "key25": "2Jv1JV3BeD9MpeATuhho51LTZYGUFpgHFVVUt9f6ty9CZ59mW7LDAceLyee3DcvjGXbmpFgg1zbTuiPVULnjW7u3",
  "key26": "2xZQVBWVdy6oyHm8zJ96f26zv9KgEi911vXDV6Mhd9gmft252fLWhSJ4MqpDMLMAyvBDtaCGXw5zT5Varq6HGAV9",
  "key27": "cv8YboytYM3VVdmxcpPRsRsVvA7PP9rxkF3bJMH4Zkhe7xxFwmxPcxiTaei1LR2KXHQypH2oEtoHmFqqTLXmFLN",
  "key28": "65NRTLHPW17ZrVxSSJ2T87WTKPwrsLPtgynXvVUtepxXG8YZDyTYp76CRuZ6gv69aPWhyiqVJ8Pb1D4CLomBhEnj",
  "key29": "3mDCaYiNHNCTnfNP1ZLMhrFuk6KSW7E9aCa29gBUdTbUfkFtNrDKspUYY5e9VvEVgAAMtUWjEFUAJYgThNa41dWZ",
  "key30": "65697hTiUSXvoQVP6JVtL9bp2sPcnCiSRBuvW6rGzNVEgG8oAtwVNb7bUmRwZive3Mrr1GCuV5GeJW1dPS94gBGd",
  "key31": "4TPdEX8R3QtNYUiYLLA6voMvunhW8R94R65UrCGKBWJ6e3Rbtkv3Cj86Fqj7GuZkMwdY6TXocmxtZGX4DCKm5u9d",
  "key32": "53is3QYiFj8BRLBkfuvxfvvpegAuHDMFPU6ifsjnATsH4Qo9cVgwcd4yXW2kANGSwUtp9rrVpXoud7KqsAv2Tnh2",
  "key33": "4Ze22bvTgFKLsELzbE9hSEZxhLMoqJm5xncVFTtsf7zWBFCo3JoWvke2AMW5MHARYX7oY1x4kUP5fmuzkfPVnfPA",
  "key34": "5VkdTDaUUWYaTv4Qo6r4vNtGNLy2kKT9rrYDQvL68ApPpdQ4F9Ce6dUsFxbQGyCQiWukeot7D2hvdRVphf6z1GGz",
  "key35": "2oKohpL4hf6MnhjujvM5HKsdxbexBvpm8H2Xf5wBymNB8Z9vy2YYdhhzkFMyhTW6Y87XWbyGe1vbXxpto1bCzxmc",
  "key36": "3iYj8MB9N6AXwwaWbD1yPbHciKCkFmaC2W7SeMYpHZRrAyFu78FZ1vavsVEcTAqKCAqr8A4Cq9f4qb5YhisYdzLQ",
  "key37": "5EekEAdwGosZR1DcrEgzBTnQSah9c4nt15SuT7xFYupXM27PFMANW53nvWLC8YUKw1f7jZqH2PdES3AhtdNAbbsL",
  "key38": "24RJBLgvBBZS1fHGen4WTnBqJzxWyERjSjMbxtiEosKgA2m7zZhXvhAZhaYiURt3h4JsK3zfaTGb5x5TxPg2hGBt",
  "key39": "3A663fY3nMrig2e1GK5w1P93HYp1sBHmRSiwBAhduRUJ9Z9iiFjH8rSCcicQaVuaMJmWzTgGCYZPtyBEsw8vgWqL",
  "key40": "265nXCYoYwHFtGzRbRKG5rJoPE8Aq9q7EpMyNjG6z2HjkRUGYX3XkUkGVYdgi31KWfaC7iiTWADhFR6qRaqQra9N",
  "key41": "4iJW6oamwn2D6kdWAgozoUGgWaKN3XRtZ7SCTKzeWcEfnxvXijhHqFUo2V162hHXBBQjXTQYVfGJJCkR6LK1n8nA",
  "key42": "5wCugc131ibEPQJ5Frobtp4QaompZ1BCLbj8my6eJ9mvJhXLMmtDn9nzCvtdHH1xDEKcoFHwi9H7MVNdeYKY9kSx",
  "key43": "LcZ8i8xcKvq3ThKfFBMvFwbWs9XHrYp8bukWHztTpCXevqR4hLTGz3hffACmaFdQxfBF99Ro7cbXAdwEeEdk3p7",
  "key44": "3rwv1ZFsr7UHGKVeZPpp1Hg3dJjXsn2GCEC7J9EUVaWLRbBr6U6aCyFAQpqPudNWWv7Cc2g2H9Qnqgq3AojkVq8V",
  "key45": "a31xkx82XpQCdRakkVGGts3mj6djqDNvGyjan3D2w4BqquXBuRZvR7bmL9dgcuGTCTezsCVW551fkWW4pzYFhQM",
  "key46": "39F4KhPHb6pVGqgWRErYut2ZHk8aPYYqEfpwBVWoFttiWUpYJrSNbjbuLv4mCiHbZULEnXuqZjpSUaupVkyVhWrh",
  "key47": "4hxzBdC6C4BWMZiNtnqrKuSmp9Xq62PMqK6529GsuFC7Xke4eJrAXCE3m214GiijHHJBq4auaAH4os9h9xR38Ftz",
  "key48": "66WAykDgb5ytuPBeAw6zgcZTvRVvEhAAzz5NUu5h2aVxMNmD5GBFyMVWYvok4cCiUQDXQjzsuDxQsz5kgnb9MpvS"
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
