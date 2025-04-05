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
    "4D7RDZcUGeaksPpz92KsjS7qoU6vi2wPru9WTp3EL2ZGUFQLVzBa47Nh67QjZ82Uvz6aVXERAZ2vhoB5SLmrRC6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvaGKE9fkhs9wMwNhkXq6yyb9JwihjqCYB3q4AfAHwSS3xQFrRa26XRqTZJhuvmFDH9ykzVbafUbS9QWcphrq1g",
  "key1": "4gbBg3v1YTFfaHDPqsjyKCtqJsxhq28VxALkUHwdc2QdUrAycvfN8heeRuK3mLLyihMoj61FspAhxdMAthwnNxzP",
  "key2": "22ED9PY8NvhSWGXzwYfNpzmiugz2yPtAJNcxdxPdJ7Rn1tJytvPWHzvGaVBEkKbvrZbwTAknGxLFFJ6KWjG1mf8o",
  "key3": "52WTJJxxw3pH9W4wrSh9jC3yN4pS1q3Zk3DkYoApWFd7TqD3fqZCUfzHMyrzFdxciyZV4rDLcjtFsVAfzLkEnhp3",
  "key4": "tJbtAEsGVH5xTtHQh7Y8NyUGBkiDyQTc8q9Kqwahb3zSBwZdgJ2ETJBaBDxjv2SUtMZAbqKUbTB3e4jWNEthZMm",
  "key5": "4DzPeSSq1DjgmPoabrHXmQmhUrwHEv7jeXF3PRBfQCPibDGt8ffAkn4z1avsVShBmqYHPDxQ49qN7YqmsrtKAiNe",
  "key6": "34gzjaPUMmQx11TquJvNaKhVExTPnkLEZP3sPJmwHw5Jtrv7dSUqtv8ENaVqEcTjj9fbgDujsMF2GGkwt26zNztU",
  "key7": "5ctD738JD5yHtK6pixDZMs7MXEbyBb3FSmcCsajDWU983ZGS1eQ1sJ7QdKYeiiD1JeZnDyM5ppFp2bNYeTQn6Mzd",
  "key8": "4Zkniv18nyrgsJCHU4Q5GfNSeqKUZXiwow1K4QX4aaYiCgkzDQob3ycwmWCpg4BkYk6uPWeWXSuGygRqnWjw9Dci",
  "key9": "3VFn9jfghRTLvujivfWTjtUvYvLE5H8DHwJ7Ysu8ofAZKDisX2zntVi7nMQXfMLpZmZMpG3MqNdMyxv4FHBkDjwU",
  "key10": "2HdzW7Fhgkg1L2dEivtjXrQDuXnfjCqmhsuXpAhSpBgRZgV8z2KQq8NNYfNTMVFYxwx78riowBBWTvGcCT79XWai",
  "key11": "3xZ6d6SN8NyTwsc6ZtbJbsmQJHp1UxePQED1TrJ5r2yr2uoqeMk8JjFi3FSGoarJyYGrVVE8sPqZUu6t1mWNNY2h",
  "key12": "4Ffdb2w2b9KFh4VRdQ6KodczB6ZZDeKJoiL7W6xX347pMGQHjjbfs7RTXBADWVDDutzv9jciCZtKtTeCjRaCxteg",
  "key13": "4qRaapSYyCZpqk4AHqdwMYPHQUnxxvFx2nSUBDt8cCwfu5NFZt2Mxmi8vogaAvAi4wGosyEXudfaAt6JsnKU6cmP",
  "key14": "5yathcEbYyipy8Rjg93PXLvTMshcQwAi9gnsqGG9VTmpM7sMSq2mxQcondb4D4F6EW7PprcPCJonV73d9tAF5ibP",
  "key15": "2Ws6to2fBmUsvpjCvR1AmHcrRZpVv2ozGJCgqCdpGSKMNNr5X4MsopeX7W5TAEio1ABMacnyrrGK4gu7pUS3Dg24",
  "key16": "59KvCxoyM4S885Z8YbSNJ6JCKd5pcZ2DMreCcj39PwMSnUuqHbU6pAvmNrVDQgipVCBtPgxf9yyaDiykvSooZ9bo",
  "key17": "4rPjwteZmabPVCxCCcQZSNfnRuSLetaNq1RgYvponyQbomVLd7wKsepmLBDqAudpyvSFFBoaLqHP2pyHFDgiRLLg",
  "key18": "5pjtbY8BD1KsNJ6SgHcKLwmin8ZJs41a5nM9ZjZsNLpprTT3MrjKTWVsr53FY52izxVYq4sx3X2cBUmscPsbrDd3",
  "key19": "4bySAjYwJFcxQGXuSArr8js2nH5SxheuCgMEyyMob9F3orqrw8Fjve9UoYvM6bHE352rSymYmucBtXnXSVRPFED7",
  "key20": "5BKQxf8htrvsbJJDmrNMdT6uFnNHcHH4V1GjgnLrmPuWZZVhQvwfBmTvXoJv1MhgUesTASYKDk7mT9SXuXEnR5Q1",
  "key21": "3QAi1Cwh2Y7STWQZaHbXwTuBf1LeMy5qPng9r1qnjigL1EjwHEVWdMiz36ELrjbpFFWpCAVLp7Jgfc1ZjFtrbJp8",
  "key22": "4AknYJnPpcTDnUVNUve4t7cbV1Rxpw4SXB7wkGGaZcibbbYYogPwp4cmJkvYFw4BtQ2YauaEPkqDSvp31NC6y8N8",
  "key23": "3BLhGSw1oHQZn6RVfPsXYegAoYsXYYTpFJ41mWf2horHjcDhkCkXkCgBYUXYA2FY4vHpEnCRbDYWBewYThssTaMS",
  "key24": "51j2S3TTyNudccuBwrofJs8suijHo7ggnhUqA7mPZD9dSXTZNqrRWhbyhATHb5s9TPPeiLUw4RSTCEbvya1ps63R",
  "key25": "4bCXugaqBPGkeQGN2xA7ph2hzzwTem5ZC9r5GUdfcE1671e2abazPsPtkXPPzq9ZUR2vVdobWkiByU49DfVASGDL",
  "key26": "3f43ryMaExqduyU5MgCUZ9Spu4rkeE3koU78eZf9ZDzEJo2bWmunZERtsG7C1TEKyC71r29UFA3LjkkMvCYGewRC",
  "key27": "4kngfmTgtSnKXna4WaTTdRjDnnG67E27MZ3zLBMX24A3nZvnMzikB2kXKTDWu8bzrw413kxNQH2UVhasVaJuRrUT",
  "key28": "4KZ3kdezm14gaihjTpWKkFwCZGNnCpbpgeyg7EUAoaf9f3evsrBBCt2RJoYrmRdkqoZfpxKDbEa77fpT6xw7Vwk7",
  "key29": "4Y3ntmtX3u6w8oj37CS7cfppLJmoWKb38VVBmTHWm4qr6kFLcq68J2pbDW2Cr1Xyfp2aM1GW2CX7q9irxaxqbHRk",
  "key30": "3aDMpy2g5MYXfGmpowKmYBk5qer3UJQE8dP3EbeQmmWzVEx4bWppRSdsYpQhAo8ixPdXy5abooW3bnCFSkSEcUrQ",
  "key31": "5Tuha6igfP29m8Ggu1addkNTcRHUvVA8M6MTy92MztQZVNrmLR4oWA2VE7hd8zC9WqLFudhqQyAoteqTpHqG9fNg",
  "key32": "51dTMax4d4ybFS4rwTytAURxo62iJmYeu9gsVSR2U7bfn9KnA7Kk7AJAiixdScDtXRKxvBLQZA3odpFPQLk3sZxb",
  "key33": "31CvAg51ZncFBBFqKiq4zSKGgLEbGyUiUm1fPxdNqHYYnkF9vzKXs7Cfs7AsVXi92DbAoT9Cnd3YJxKXeEN14UZa",
  "key34": "ywTwudbhEjmMZ1o4Xm1AktfxgoKyqTc522TZJXTNJSYvCd9ZQ9YTjycVVio1bdCfK14DgeU3aSGy2GiFeHCXc33",
  "key35": "2yM8eKYxAgi1CwL6JqscjFqQsvXzbum3Z9xTWYshJZc5ZwDdcizrHftoZtvnRjKdHKt5hQyxtG4vD571nGFRfvL2",
  "key36": "5X4vyHdJARcxDcdoktve6HUMnE38cQMiqKbNyF4kdnmXGANmRiHXtX51MMNjaPRaAtTsn1vEBeujPC5EvmsTz6ky",
  "key37": "4HFSNus9qbAdGefbsTTtusWN11b2KCH3QXqumsNkX8afqsZYAGvcw7UYTDSfQ4MXw2KFXQFF7kgoj74hJ6fS3huj",
  "key38": "48q68btuEAAah85RuzWopEYFqrqLiYRrSF6hAx4u7hxnJye7hmpkq6u4FqUKvX7jjFcQp9rVGGXHjkWSF5hDAUjq",
  "key39": "24YtAosJVxwRY3gQqh6LHKu1nzD5TmswrnTujJcn1LGgX5k6TyTg2vjcoQncHPtgCQvonMwuB6wJfqRr9pzQTLmB",
  "key40": "4bcktr93VhEKysKaoeQQFuNrCTktar8xmr6xoMhPS7PNbb2KxqkyNcWFE7YoHgo7UgAujUR9VDX8t3mU9b5ccUiZ",
  "key41": "FxpVww6y76CiaXSY1JbXT18JfayrH5yez4ek6ghEfzjuWPviD5NJLh9cK8LmT4eQppr9Uuq83yBMcwtrXDV8mPU",
  "key42": "4cFHXqHZUqAsJcWayMYp34SX3HAdEUhkgEeCHok8YPUG5kZ5SxAtN1Cr66xHyakJub65GkQunj1Dp4vm9G9Mq2qV",
  "key43": "5z25KmTHDnmJuBV2dVNUYbuS6qnAQ7CxzBpyTYfDC5S7BNxjPYDwPB6N5bnrktBvDCxytdFLpRSxNAEqLGLwCTyx",
  "key44": "64dp8q5hvV6eRv77HQ5HLYe3VCqENPUXTS4ahchh8ysDATThX92XKcq4DdKrpsfHKy7kCrfWrmobcsYwRyjkeaxF",
  "key45": "DCeXvGovpLMHL85edzhcLKxDzgHJFYZV2qaxDV9cdZUjhoxTQrvCLVK3jACNGDErWjiT7HbWgw4nr4uAnip2bE9",
  "key46": "4t52af358wG81JHfoNmaTitpkh1LYrSYzcwnH7G4bjn7axQKoD8dvFP8tEVnowNLzfHAppxzJzf7DBor5WY8Kwm4"
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
