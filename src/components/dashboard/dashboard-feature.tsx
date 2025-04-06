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
    "5BnwUnDwaBghyma6WxPGduegQKEUYX2XXcceT9xUPQ3QtFXgAwDneMks7L3XMKmimtN3Qi3DqDxmTSSmgF3pMnrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FY38Gn63WUqt5dFAsMA5Fk73osfrnzrmhbinPaNYqDbDBF97xF35FPo4tg8vCPmAj7acrmDYjfSfDdABJ5UUpND",
  "key1": "21hwiq9PSMMuP6FS4kE1JDSdroTZNqA8VCTTAboNK5xjUAMBDgDP4yBzw7NvrNAWQVXDrhrsdPVwptux3PpTCZuG",
  "key2": "snVFWkRXFYUwNrUG8bkuhjGojYLH9bAbDUXLhwkSSEnaB5MhjRiG4Pq5wS5d4AmAVTtu2tnEtJ4vRxE3SP3nWYA",
  "key3": "Mef1R7wZy4wjq9rhWEbkR1pfVHfMbAXW5J13qbrvtyU1dunbiYp18W5WFYL7ZGMDjNSmUCFzrDoGMjKVV7fionT",
  "key4": "3hRdGHMzdZctx8SwGhnnepMAmZ8QMfEHcnbu3MujGRAMxGY5jvVaVmoRuGfua1wYYw7VuSnvbmzPihZfo6XbESjJ",
  "key5": "ndxFxMjJzVtT2S7aFFfRAjREYyjF1U6KUUvATM9wVMAuqmvQSUUV2x59XDgF7BXZf5T1SkEfkXgLngrcgVABrAg",
  "key6": "4fHZB6UnngvN6bdsiocoRMNB8QkMLfn4G5d9pRpdHqzsAjbazTXXsLiXS6f8y97madrNv1seprUu5rSmR2kJDxwD",
  "key7": "3K7e1WfyBcbS3A6ZvLFNaMGRozwURndDgb4QxQ3irYikHWMLH4yCuNRoz11xZFAs7DXqt2nw7JC8P1KrtepnBiBo",
  "key8": "2qrRxM8WjuaAK7xbfbtbcAULTWzswUEUkLuoWSYmBErXAUaCRACw6soxyPS5d39Cv92qJ3CMBJvYDA2XdUSQqHja",
  "key9": "5pHhLuiQnqSS3V35HC4c3evJwb5k9VfrhRT4ErGQap721Z69LCjmnqJgDoYijfgLw1PbfQ4pUQsokSks7VJ4y5ts",
  "key10": "4zcwFoZ63CmpNzqY3rC4UwUAfYLmaKpJ1eH3y2RNLcnQUR9Nymr6QwvU1vGQea7DA1RP3hVjwiE3zHeDx6qTKMG8",
  "key11": "3LLgto2K2UhM9JQ4fKwApii4mgpCeYEVswDNUFK5Uwn2PhYFLCytipsJPyG4GB1kLj8Y1tpBWgz1STHPWJCy75Ke",
  "key12": "4EXcw2YKtSDPPmeb6FnyiuUZjhqfzm1ANM5mhooNA4PErzuGk9hE2mmGcxz7FMu8sPHQhd5QUZRTrketEXXtsZoT",
  "key13": "5cyFY7snYAfeYczdQRpNQX3yipujdixnUPsoQiBTZKu7DZV4JeZEuHkH5Y6Kzisbb9WX6iMNSh5CCSbUVJwzMtpz",
  "key14": "4N8MVLbXdjCMVsXhhMbXx492GZFr16rK5pakfoMsc8Fdp1qZQ77NXVQRu5UEYDMo9Y9Nt7uee4ZP3fAoojfSHHdD",
  "key15": "5Yh23dYdU8NV1EzUkr5ygkq5CF5rApyuyLXtZ33n5BYJTGNMJX2XJ4JwQ6pknhfdcXNYnXnsmc1mNqPreqemR9Zm",
  "key16": "2twqpd9hiNQVcTkXhLE4YYwRfjB72Y24GE5FviiG66EH8m3MwxQKAjSDgND3FUtPRa7YP1Qz8s7XJRZw5oLzHdbk",
  "key17": "5Qzfp6zifoTvmRSGF7FpX8DthhzLusLv2mRUG2uQye4US4D9dxsSm6rY14Q7ktSpAEhjbDpzbS55GYQqS1eewyMN",
  "key18": "5gLsjGgqFVDUyz57eLvSMsxHNFff2dU1w1H5SVSnHSpGXCCP2uVsxzFKLFDy9MA34Rw71i3p1qtYHD5xzFc8HA59",
  "key19": "4f4BQF1982LxFeusJ6DjL4KCVqkqTaL1yjDndeTBnybjef6Z4ftJLJRpbh55UwrGJbjHWUXeFfB36p4LidRFqfRa",
  "key20": "3dtRcp83kwHcNaZLjsj9sWgSq7p9QoTXfF4MPGrHnaRExQYRzVamNePcmXJeNX1WmbFcYPu6r1qr9JR51vthgBK8",
  "key21": "5mAZJEdZxYdpFHK1NfRnBs7WLF6yQmRyqdfGsb4bAs79LNXZVNXxpEXZXp6BrQhemoWgS24J5kejeQipahafVX22",
  "key22": "UUWj4gmzhmnxLiGNCfuv9AJznosm6X4N9ebC7jKGVw38QG9YTVgRss1dACZogbY9P39paBcz9Sf7L1xFZ8aRat4",
  "key23": "wZ6LtYgGqC8vVTH1VpsiSyKRUX8rp9SVUapK2yH6ZyNokqyyEgUV4BggZCC2HutgUqpoTENF3w3XvZarNiTjHvJ",
  "key24": "4pmH6TA1Hx1bxcAME894dTk4jnSz4JtVfLGCY9g1yfSsJMJuRrUdqtmfrK1WFSFNzygutdirJGgAA9BZ8wtLd4k9",
  "key25": "3bV15QozXoQi3B7GwCRHeq4QtAQDKxq4hhN8KMd1bhWkjaPixBvuZFDq1rcqtRtFRKoTaCJWH1oPD5s62Y1jqxHe",
  "key26": "ANJBifMUZwymw6sMkQX5VB8XLA3HhiCHsCsMY4BpNAQ1uzivieKL1d49YRLMGy8J2tcrFoXQmmJ7oJPHoXktY6J",
  "key27": "4NjZCZ2XUqZSGc9LUCiYYzAzHiQ95q9CeH5okzzsm3hPf6nreiQCkpovYTUCLgHWSbmN6CtJwfbgbyhCdbmDDXsQ",
  "key28": "3jVEj8mLztYCnxj2AC6ZMeRsUsTvQUV1MXqsuhtoMt5FDtLxWzBkEuBEydFANRmmP3duXbcEguiNtjB3uCTohvFx",
  "key29": "5DUK6ZXmGuPYhKjbxRnnPvSZzqsa2VEi2BXarfYyKwjJW1cz7FVRAXXopp4P9BwRHxiwVrDoFhFnpEVMzYDxEBMd",
  "key30": "29bqyKxAkmUmJYSGzDkuNhGsCqSy1bmdKZ8m2KMzxnREpzP1eyXoNJvDRyZ4SEnsN8krRYMFG1pbnqHCpm572RfN",
  "key31": "49XundTi8iHjnRf5FfMBWSXbYCM4qzYU2dLPndEw7kxCSufyG6FEBAHoYgX2JQCjLQwDsanmf9XkCSaaHrveJtx4",
  "key32": "5NnKjhU6qX9cNpUeesZJtFG5yC25GSVWd7FBUBMv8XC4pDxZFz1iA4x1eoyhmvQvMpJaDG4NPxNW3Mpk2woNXat7",
  "key33": "Tm2X74NDAeshEyrGw1rqEn3n5WuY16ZrTMBQnBkX5oaEA9QqoCVYJ7J2dBRLvMVLNpsPC2L7EtD4uhWtvo5CJEu",
  "key34": "5sp1YUj8dfDrfqcBgoU2K1bbNxEaiLz825EaCZ5pKuBUpu5foq5k6hzvCGjPnPgvNgWXB7nHZMU9GwH3pM4kQVCJ",
  "key35": "47AqknNoQWoNh9b2ZP8jDyenXEFaxQjVtT3qWzc8yB7UQbXF9p9hQFuVASiiGFeY8DhVpNzFS91zekv3B95S25Vp",
  "key36": "2WNgJ76Uj7xpHPceJ7zoJ928XmujcxiiFmFDLdoCpe3bqPcsr3nji8dczRFtfss6q3qrGvjSQwDg4CtiD9CRhM3t",
  "key37": "2KbYs7S6JRA3ZU8C1jQ66PaLDqurTDUGwj5qRktGJf2Bxj4VnvuNHfaQKf2tXGT1QJt6DRWLCSoPaAipb2PCz6d7",
  "key38": "uEeyYnb9N8YnjHFtvZuGCn87gmPNQfV6xEXbRMYtfR7X48Uh6z9UU8x2WiQ5FDEeDDUnkfe6wqdDrtaazB4qnCw",
  "key39": "3jrx5tY4C4op9UtFzzu6rcBbnnNgyb7Sno72NWwB5yrDgF4ai4osU2f9kt5PxTqZxQF28nG7wP4Q2aSQjYCyEup8",
  "key40": "eoTcwUcwJUGCDdHZsBYMzNNd7eAJDoCXdAsp3aELtria5ThDqeJQkL14ERHqztwTGhJRxapmP7Z6TGoQ3L524yT",
  "key41": "PfxyZWkxw4Q1L7qEUDELdBZKG1afyww2ZSWvvrTxjPSCBEv8aETwQufxVJT9EHaUVTfu3VBd7dSkdWtTwNfd7Xa",
  "key42": "2fxnwDAconJMkdZgMP7jF5KY9g74GEXAEPcnNNoSxYEo4PEj7zeDrn1Vpam8JSHfoRfrNissGHEFRAG9H2uZagsR",
  "key43": "5XHo2uXPQWvueAAL4qN6ohBLMESGNVMgsvs9YabHkduLtGty14BgDsrvMTtjhASSArA1FtaGhj4Rms2dACrHc3Dn",
  "key44": "2Q6th3ZBz7o69Agv6fhzmfKhFPHLh7cJGqhNj1tpi7pqTu1LGTh8rueXxVfEGJYAJ8J5h147y5mUjHViuYfeyZDQ"
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
