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
    "5h4Uyjzn8TQYYFtGHuRj4hXz6XxWJXq5DNvP6poBTSBHsamGGtgdyGhTkXegQJr3Yq9faasnR8oteWfCNYNMacoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbA1FkYvfqmz2vEgSLehEop54M1EizLwU9YtrTW89W6ch5kQfZvvbLJuF17JpvSmsrFYeCP7aVdR8TU4gAmLYGL",
  "key1": "2n5KNsekMV7cPYyNiDAvPTvVx4iYDxcHWxU3iwezyQuS244vjYmRHA5t4wDEMypc52Mec7a6zeUnkRbgPSKyR5bv",
  "key2": "3gso8htoCR9AUVEVjEzAELHrQYGGvRJVdjy1ce8Kpp1AZjzKJXTFLVQ3zaXuZqu4BxhGm1fvUBcqznhxknLQWcPt",
  "key3": "xYmJyjndd7PDNozCGwGxW7h3WQ5gcBCwqi2Y7onsDqm2crQ1ukTB1g5j7fbxALgKVB2XRyKMsXEJ7e3s6pHfysL",
  "key4": "4avte4pLVRKQdJ94K6tjXmmjVJ1VEChPcNNWHPPBo5Wex7iuFcx8cRQxpW8BvQKq795DsbTEC8ENqZVbrUng3vAQ",
  "key5": "5Vw6DWdtpJ7zB12eywNmJrqG3cki8FLCmyPsP6LCKwc9iPA1a1P3FBCGtFprtD2tSSPoXVgUNiEVY6ythk8Y5uru",
  "key6": "QGcdh6cC5ckj1hpxbHKmRwXZUg1eiS6Jn11jZeu2yYJNRRc897C5STCsiugkdDsuxprCk7UfPQj4umPhcag8ieo",
  "key7": "gvL7UbyGdMyknQHAo2E7SXgZehDsV8jZCT8K4d7bNczGSNQDXaMjX6jEjrmzsmTatx9uT8yXqoj3TDLFXXk8wF9",
  "key8": "3uCkTdxKp4qJ5rcuNnaRhSyKChgcoMVTbguyAc84aNy4QgTDpKMxkBY3yatrLunzGvRnpvcTLEpS8QLYUSfzUJJP",
  "key9": "4J8xjEbBQQoEmJtkQq2gQWaNXPfy6Pp8DcDeYb4EULfxpt2oevCy23rtnNQDFfuqiAMQKK3j6GGdFXp6i5Nj4dhH",
  "key10": "5aWJwSfD2MX7wnCvUutvJJ3WW2cKiHL81srYiMmVsYkYsoTepWvY1eWs1BzhYy9daLVXFjtXdB2AWcdt7ykDgkqV",
  "key11": "PpH1yKRxTukM6KQkqqTPwUemcHSdJPrgmjRUfm9eeKkt1a2PHhFoZRUj1gevRDDhLA9oQJkWbzDA6WiGtLFC8Sw",
  "key12": "24T7FJhosQSjP11VmAcoNe261WVxQiaUhzJ68wF3WZmkSX1DmyNzxUyWpUtr14ZWSyUfoucUUnBYkJ4aLa9nNYeT",
  "key13": "MTT8fTxbEGjyafxh6wkziugjCXZRiw8SKGUu6MNKQ74em1vPQ1mucMgnmfMU8Hs3ZXdcK5ee5zGHedcPb6f4oNf",
  "key14": "daJmaf6n7NLiWxBDozAuaALwyMqfB1YvKDb9jF7pFUQvg9M8DEBcRybNGsraEqSMJ1ytpCH8mGj67hoQ4J44hLi",
  "key15": "2StAvjLx7mi97V3eyFnGDYMtVoQhxBMnW46M6AjpFsEgzBXof7X43rUTKRkwuuDVACYsrMAVpafuVodEofocAcTN",
  "key16": "4NSekoabKFjA93xqPGgNoFETvqqZzsR4nA2VSEtX1iWM5ooxkEj4A1TgW8HP9K8HgcRihxE2jsLTXirSuxvARm9K",
  "key17": "3ZKy6M6pB1zQt7vKw9fXQgbBRV5os1wg3HjHW7gL6yLJrjNTyXxyeTdoEctN16UiUdsqtmDLnXPPj5JJk9b2mxfH",
  "key18": "2a6ojQYiF48jFtoVdxwDrGbu8UsKkRrZEjSGJ7WJNpQUbD2WAU2txCZhUYmUggtyu315JWHhsStekuXbMegcC1mk",
  "key19": "4jXqd9zbP57NG65L7RwM6yfRZnz1sWux5ACsnNbGshnfG7kpgCJwfMYo8G3GPbvyupaWNgwRTWQaVBZuEgnFCsfJ",
  "key20": "4RUEJEiJaeVfdBhUT79MsYpr7EUr1MiatZbo41yzG4w8wBQuqSf9Z9t4PSNGsHLzrWrF6xmGfDYYywj7GMWDPzhk",
  "key21": "5dZuKsK2QPQTs4g4bsDUaquzuFA7ufB3QWimfpsvxzNC46bWV9Cuox6KxeAcRba3MdzJnvpHtX9kAJ5CgbmszLc1",
  "key22": "4Q9SdXppJbWL2TwmkNrhX65d6JfPU1QHEAoRXbDVKNeGqoCdEzdK6nETY79JvM8rzHcsynWDeR1MwVjyTmvB6Ui1",
  "key23": "2sGLyuqivMS5rdwMZD2WUM2JGU9X3oEPaFW11yPMXVfHhTqZSBxYLpiq6dMvPZgp6qFadPZw8LKDw5s57b2tqMgH",
  "key24": "39jK9iyXTyYigwuNqr6Gabpj8DAiwc3Eh1HrzREefLh6M3ftRguGso3rE29PkqVYcAEnL5ozYWtiuBcA5Re2du1b",
  "key25": "4WDpAT9VAR79jEYTgbsHywxdGN42eWKrFf7wGHA79PVwSmdt8AKsheRNyxsLTa6XBGftvunHhPNKGZ9LXvV2r9dG",
  "key26": "3epMLFHgm6Wp3VZYgnXqGCn4cRg1T5ycNd4Lps564MDy8iNwzZWJKhigQx71ADfrquejm1hrEJUCG6fBX3TonbNQ",
  "key27": "ZcWqcY2fCk4KSj3R13b6ss8DxcwHBnX7ztSHmDwNzr5z2vc6oSNufRbVyZw2sZsrqqQMD8vj7VDtMvUXqG7BcHg",
  "key28": "2t1R9BbvT1kdTByVzrUR4oFiqH3rTkUaQqB3edXNmupYwjV5EmHP7khxJheDAC93U5r1EPV7P7i7VxHG7V9Weacx",
  "key29": "2Bh22GAvzhM1EvK8xFwF8h2qLDSgCdbtSQQuRrs5TdajbjBE9nAXNbFtYmhqpKoWhCGXfEzZ5e3HeTBbPrvcxi1D",
  "key30": "i1jg74S4Mo68bGpeTH18fBaszXr46JT4KrTVVAM9jvx65bWV339U33MLyDarMv8YgcB6LnyvboLc18eLYJS1nQJ",
  "key31": "62vWpzAEQic7txHTnnTApnnqjarkNQazdibJukg9FTT4nHvQgAFbr6S95zrS7pic7oPM7VRvV8tZgZX1vcR3uLKq"
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
