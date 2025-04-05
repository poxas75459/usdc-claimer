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
    "4VGEK6wUYHM6a5GutEF7vBcspx4TBXN3XxyXHAJ5CQRdh4tY9x1LcXYBDhgWARmsXvXV9tfEQxgBhbsLsMLasLvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxvuP3dWmhWPcCP4ypB8GN7G6ToVXnJsEGfqerbunbq6PnusxTALzkiPAxzGyrZy4amPTZntuv1Vek28WH6aArr",
  "key1": "nLu5DGKfVW1CUD81AYKxgqyGAui2AZ6hUinLHLesgHyJjcECgzvsgkXTLjdAp61hn8dU4m7fxhGLjhvRfjAvpbi",
  "key2": "9CngcKPxPygzbEpAbjsMnp97VXcCF97Mqy3hdKxuZEBogiC1YPUCfL95Pbqdaq7rahAyPaNucjUh4DVkQmZRE3p",
  "key3": "66ESQsqpmU8JrQhYXARr2F6n9YcsjntZ1MBZcLAdU2dpiHcWchsDV4VPou3ChRyBxCVfwabVq4A3YiBsWcRutnjr",
  "key4": "sSH7UAPtebvJ2Ao3CqVGNMCNMvwkhAnx2B5V69S1nqjPbcymSFbejUCVbu5Nt2raNgpq7WmG9pF12Bawy3DkbUN",
  "key5": "5xAoaDzNELZAgT3SyZDdXZ7HvafrgpXRAVxP1a1acjMQ1RbnZJFsZAwhft6A63KtMYW2eAf3ruNtkTm5KxLReFKr",
  "key6": "4ztp75WHcA97g4KMf9tGbzX4bbWwgXvbCFMEXzTSCg2F7zByUzAV9BnHpG5X1bKM3vPJBqrgmQKs5VXTZNwJe9oH",
  "key7": "53yuq1xPmtgRvFcLYHC5KnNXgYPREezxuHyGVjSDR2LmXXGdD5TQEQhjsmbBAheYqTdzi7rWXW8dYicp72idoN3K",
  "key8": "2siU2rDRu89Dr5g5Cs6y3MsuH7oJLV8yoef4GE3EauCEoXGEBu79grShp9TPvbywJDnMy94qB7nNCSRZD2BYJexi",
  "key9": "27NCaY9deQULW5V3fKZCeuM7vGNW2aFX9bbK1StGFGx9YfjCJCNNQ6ypsD2i9Q5JLm3DBkQxdkJnBAmCNZQ873z4",
  "key10": "23Tu8BoRNQ3Q4esPMYL41pdvbDx1A7rj5bTnDSPHMor5Gjm6MqymoVV7vwtChs9qXwRm5aqZTu5pSeo5GE4RmQHz",
  "key11": "5SaeYcAJLCNXrQnLskPt6PFhctwosajCjvDtyBmTaMqeFRDt85yNMBxqVT3ydJtLTTN9tSRnXzYc56btydTfU6jW",
  "key12": "5AeJ9r44mW9HiLPbAbRhZpkSwoCWQ6ZgYLppogwqbHjd5WNmpsCdvcySbpbNsD3Ebi2qJEaE8B4kWVWvyekEW36z",
  "key13": "4qEMHfBKkgiUZptfjjjkjGqefSo6Mq31sEGofsAzH67CMGxSdMaz2JW5PQfmSbcKTX6KnVJNm2Bs1PivUvu3mZ2",
  "key14": "s8tVLgYmz9rjwkeGK6aUgwu8EUns8XuphT3nf1VUG2caoabZqqBP2wvJcgDHExsaD1jaeLtBVQxK3fq72KXJMqn",
  "key15": "4oKpXRNp9pCWwGtx5911ptjxYxpu5yARhoCmTaWGxfrxE8or7AbNCEnf7V9JGApD3SCHgJqKxCFE6xVQEeA9NbXP",
  "key16": "2ffiuenWnCeST5pCnpGPeha8h5rkPnRtpduDLW2nhv4LSKzwLgcm3qxqb2L8rpLgAFzciKjEimCUeUwRhc6zh6eS",
  "key17": "5sobthjwRbNrMR5tEEA2N7JtpTaTpmJdN3nfswMiLtdTyHVw3rqDWUyqNTiGBy25ebZkZgRPtZ1d575HM2wYaafR",
  "key18": "3Ga2MCRukZvpEdWCwG4DrQ9SNtXefAeaGcLAv1aVQHcmThAgQ7PBVv27yiSfgR5eoVG8XSEkMx7tNWBSoikFvNNe",
  "key19": "YtmLAsrFd7kgG8w5DuMBHJ75MRo3JYVJKWwAJYPt8Fy15q5YNtA1fHUnLQAmJagvVwah4UCMrRpBGFeQ3xV1Mvf",
  "key20": "5sxVLrquH8dHFNEqsuNaoer1Z6NyfMNXsZKMkLWARRG6o5FvVdLhXL44dTHF2V74PtSCobuLu2qMEmZMTdMYL6u6",
  "key21": "3JbpjxZVp8LMUgoeW6fr5aoTsWNeiP3Y2Xi2qnshHxACqTVfHkqK5LHuuF2zZoANVhCAaLKZ3NZcuxaFZPqqpPHr",
  "key22": "5QB51DSwuvZ7bkV7gPU4knKtkX26uyYWZY2hDaT8cFosgKTg3moJd9mbwAQA5EvYbKNoNaAcWyBDXvJPFx6fH4p1",
  "key23": "3uBF2ezgvWhBCme4viL1eD3WqtrBrqRo3nsUDpiKbHMbDurMo1CPULvZpWc931ZxT9HpxtisNpHnbMiNbDGBU97v",
  "key24": "3m4mZRya3Mtbz462TxHxhvqxJ64XdeTtiPYgWF4dK4HRaw2reT26D5B1tceKMAKhEcFdN5wsdyRoXN9MHdpf6TsJ",
  "key25": "66J4SQdPtyGAdai3VuAubvCJCtCP6kw5mYiGbrJBwM7CKd4MA5ThEd6FoD2ujXkrYeyRkSQZpfD7D3Ad5p2odCrq",
  "key26": "4ZEWFHhNgqKAFBNTXVKyJRNXPbgHUJpL9qN58uiUmoqDCS9zL7f4xYdNeH8r9C9HpboddJ3kyC4uVSQP96MkgCV8",
  "key27": "3wYwLoVGtQpBgEvXLd41Mo3T8wk3FkzMcMK6jCNL6X7yL6RGoKxzuHKjztXjZ5RxEyiM5Tyyhw8yEiYcgNBa1KHv",
  "key28": "3YK3W44LjrPoN29eHerYR8qrcwSnBchHGGXRWDmwKE3WrqpgavQEbWZmeUdbPvzZm7WXfKhdV9csaQ7yVYMmZzmA",
  "key29": "2dZJEBWgsUpSUPQLoRh5FdxQEGViQiQmWtJzMqVFzY9GjsgtJqDXe3BEk1AMxWNtoBVCfgdbsQpTxRoCtVcqwwRm",
  "key30": "2QTMw5YPW4fmeJvyfbPhqMDQrChUxJ4GkWitQyfG63B6Cs1QN4UxEzaEeBGPyJHqpxeZpudzuV42Z7jbHUjFuYsk",
  "key31": "5pQta4xaJ9P1PFvCibY316W3J16Qw5rSesT7pZtGAs9pZbs2sQ5MVca4WSbBvXd41KCzcTDcsid8ke75pdEZhmhf",
  "key32": "cSCxxtDmeqi7mNBFYtDR8QsGc6rJvnrx4bW2eXxNTupBuScsBS2j5uAgGggkpxy9eVZwphn2fsqg7pMMDna8trL",
  "key33": "3daqE68tKcWBGHif7vhxsxabHA9aBHmrWFNGHzfhTtz64waJyr9moAKESBAjDhY3gozNK89xB2LaFLi6MGQK6hm7",
  "key34": "4SfhrcUiXEuqksfGF6eJ3fTSy8Nx1UTu2gTcoYKBQNrEMyMh51Uj3dGmkPUzPcjjdXr3oahfYJLdQdgqwTqs1AM4",
  "key35": "227BXjWXEyD6b8JDmmQXD7xs5m4rXZ3Zg9mETRJsuTxCUZomZjJU4XCnYX26uPTyDthnLctT85aa7J2kuDx8Cokn",
  "key36": "4FXhKzmf7dHhcz4ZND4mbdzx486o4eupWYYUQiuYry8oBFcMqZaWaX51ZUk1rWRW2TrqpJ943AnYE6jmtwDjqqjw",
  "key37": "4WUWryE3kzXZFhjDf9YDvTQihtqZGepq6MSfVKG36VCB6D2minWaa3jpJCVoLh6UN8yraoUfQYMJE1ESTDDbyZHd",
  "key38": "5oN7FhMxhzrbJ1NYwtgR5ahWHqxC7bZQXnkcktpUj1crcSLHviwtPtr8kqtTSZUWC28W2bAnLkKxdMyeS8FaaLb9",
  "key39": "3UJXvCVuYwNU2j2yz12ZZ4Z2kqoUVJFVQmdZSkxKL7PhChFpHhrM3EZvM38Vv7PKQ8Tf74b3nWX9z8cGXyF3LAU8",
  "key40": "38pVb6MuX1xK87XXXzCeqzgPbANcCkD8Ug589yHSkTZvTyZvsF5RdpNpH9eKaA9WeK3X8wU1jA8WqNHHx6WbtKkg",
  "key41": "4Kv9tnCLaikoeGoQmW9f6UhoPqE21Ljb7sXfVK6C3HSW7JSXZBw3ckXG96e9AM6uWfd22REych5cNek3ov62Hcom",
  "key42": "2DyTUN73tM7pPokXweBkXRrHDGqERawhvK281XPVT4Esnsfv13XDFjEQnm2QMWPStR9swfDNcgaj8qD61u7q5a9Z",
  "key43": "3aNw4KJdajiwHY822cDn3y3voZwCN1sqPCaNWzz9o1SWot7JddPPpzGf3dNYb4KPu72Qh5MoqSwzjYoC13EY5nNC",
  "key44": "5GMb6cQjpDG3cE2ETooDv7E3mqZECSYvnf2vgpaPTHkRTaxVpbS1RkCxJDndbFTjpbTy3P9LaCKHtAdpaB97VyJD",
  "key45": "Z1TYHHRfUXWmthQnNNxndZveZewJrrih5t6hhd2WCZLR9pXFQ7stuSVeULN5WA9zx3S1aQQd9Jt98jzdRsWDcdq",
  "key46": "5jX3YfsnvxBy4voifZfuRWAVUZ6RHfkVErGUdWT23D12fagp3MhVHA4wAG6RKWLndikUmQroJmSmFspvYAiDDmhi",
  "key47": "KU4oCEFh1pBWmprFjUot2UXNksKYCYm3aKjEnNWuQ1XZ1M1DPpwAcHqMZ3vDqkzLooXnGTJo6Kh7KkJ2mJJWCBp"
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
