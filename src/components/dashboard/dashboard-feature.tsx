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
    "P3oQixojaNwVMxjHwcuj3gHh9hyWrXhLBG9DWJj5YWGvUHThvVBbLPbmfmErrjB5vGRVihcCVfPU3qxczk7JdCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7uew8VRWXmrjfP8b21BXrNgwtxes7Wrw9AgBUjcR3mFJNfXj6swPi696KwRn4fi9BwwJ1C6YsWaYVJPftY4bZCa",
  "key1": "WgQTwHv3gfLVycRcixcRKH44KxUmrfBL8GNCvJeJhuH5RUE6pwktRTrZeGL6mBw5t1RJREDoLHTytYdEqqWcgsv",
  "key2": "2gNwq9T7MZUMFgE7fGZL86WUWkCjXiG3hJaBQB2Gt9t7yxBVvKvrdvZnAVNHJxPN7Ud54dJUYjuWmBh9zGH6EuEv",
  "key3": "5RzBUxMbVdc1N5nziuTCy4cDrTuca39KPMejGcuZ7kJGgu8Bm5FTP55y41CSZXGiqNcWRmVBHpDfG4FmqpXDbtvR",
  "key4": "CsXvVZzs7TNn4CgTBwgrXiqSvgng7tx1m6F1mRcUFtWAs99sMcLWjBfiEZiqSiLmZiTPRnux1oKdB8SNFqfv4ys",
  "key5": "55gXJ5Qd7LVsryRCPA7aTBZgWnDdLQZMsJ1FekWZ7hGoadtTSogt8sfuJtn7E7N8ib6e5tNydxQKYY87312nDvhZ",
  "key6": "rfbFVRnhFwgSaShd9N1jUjTJZRJSbJL2FHtR1xvDtpEemz1avUHFaGsEiFLBBuUiGFEnpsvNYSJeVSikax1KGcR",
  "key7": "38y6uLVjqofhWNfJk5gdQQAvApqFyFZcN854SfF6gMW3XNBYwXfWqggJ7HqeNQNuDxDQYuqEiRNe6UXhqczFSkPw",
  "key8": "xXYKZMz5B1Kc865CTBXGfajG5CXvrqkchy6c8jb8R82varBN9r2Su6hsdr6eT2k7BCxuMquTcCGKindUFTBieyF",
  "key9": "5ytx7TBxG1k2PE7athivSgEd31UvFegLjQFbHYzYzyu9Ai36BfPkZ4dyPcKwLH1ADuMwACCHAoj5FUc1GwCYhXRv",
  "key10": "36mD9MTMpp5maepYqS6zed5R6F5Ui4VREEDT6X9p1nfKijbNG6zpruQdR6ifUDAzVqVXH7uo9sauN9RmNLpyq7ns",
  "key11": "5qLg8vTSmusLoKTJUxfeziFMeWxVG96GW7dpc63wW2s2qK9vwAu8iQ9pHWrEqoNxyrFFvpjxyk4yk4BAsABaGDSe",
  "key12": "49bwY7XcDePhfHCsgWLcQgGLg1Hxqdr5zJuF7PwCccpwo1asUeDzkYHiEXQpsCr3D3rjJxobsjXK2z3tR88UrBBz",
  "key13": "2N25Y3DVzBv6x3DMgPcmTXEpycK3ehwQ7tw5hhXXXn7o7uRFga2s4biXA7ZAvHcpQHe1E7Pv3HoQNEqfTo1kPWvb",
  "key14": "4XvSSJgt8AqMehruqvjtEM1CWvRrgbLrGWZ1ddWPaXKNVpi1evftnqY2ZwLXqq4aRgBoHWJspotrPUEPxSKzbDzY",
  "key15": "5BYwdjKwWMNzNBHNhFB1wrdLjobMoix3fyxNmkSvSCe8C2UTCAjW8GEt5JtGpyCjtUXNJQfvpSEN2CMzPcgUUgw9",
  "key16": "PoQhTgs2ZyVzu8ZKcnY7ToPRNAbErfSGG5ic8ZPwghGKNHbZBqWMWy1Sr7FmiY8BsNcmSEuCAPTyTq8ZmKyXB4T",
  "key17": "4uuk2QGaQBKNmNvo1Ka6aj24aFqk6EJF3BBSXAgpgnRDFPr73UcwmxXcqp6wRHmNL2L64JE7RcXBMxc3mVbHzhx1",
  "key18": "2dcL5WYNZidS5sDg8kSNrBMR13t6DFoxBWojPhGpk4q36VyKfufDMaGQc1iH6iFuzhBdargEggWSGDdJAMVT6eEG",
  "key19": "28tUAon9wWcYnsyfzJCkAL5a2t3FEmCYJ9WdPbYRwJEWovkmjYrkJtsnEwYeu3oMWwvMBr6ZeiWM3gU3sz5ACkLM",
  "key20": "53ihNCS7QJW5FKXZMmpNqzYP4jQqce4TgcSpmTp2zCVXD4qghc7YxdZfkpEiifHWc2bsWf2XvJYuUEWJ1tNrkL7M",
  "key21": "4igzzdMf8syeKaxoCXCo2WEwnKBT3CLkPckcntp9fegcNG3kGrDr7GWvTPKwP2B54dUic7UfoUZWUVkbAm9feYKD",
  "key22": "2YhZs5t5f7eEUxkENAsXFvDvwo56F7ZQcPFWsxDuQrt79SzFw7pNQrbYK2hgxDfNB1WikCN4eY4H3Zy6E8L4UCET",
  "key23": "4VaWHqu3zdvjJSR8a3Wesb6rMKxsb7K3TzwLaoRXsVCcHiCTPfeCVoX9FwFUwKKAm8UrBRyAWveuk2D8QdqGjd7q",
  "key24": "5JgLzyuidUGveRVczriceNRLSwLdjr4oiTDr6xBCzXPgrm6sS9dsHCuU2JKPRFUcjhsfqi3DrNrF1Q28M7fWt3g4",
  "key25": "4m5JTvAek3aXQBnBTQ3wBuj1LQ1Kn3puDta8DJcRq8EaSQWH253hymhHVqpBS88MfqPg17ydReg9XTUmi2Xcnukm",
  "key26": "2JZSYZAk31sLbkSXmSbJcsXSKDTPqy2dQvYDjoxbJ3beoVsmXKDYSqaiD6WuDtMURiFE7TGfKud4w4WpgEMPE29Y",
  "key27": "45JSdVshj8sPJpcJ44y1CxsXdG5xTsWNJv6bBDZtrkMRV5cG5KpdZ7eLuaguZ1wLhKYpnkKPxBViaX2U8WWHTenu",
  "key28": "3Zo9ZyaMH68ntyfR8nR3gSW3D9EpHyYf7xbkzTFyNjDwxXGhJ6YLTSsAWEA3syA1VhMnns5SMpo8MKw6S2EEon4A",
  "key29": "552GJNvwXj3gKjVvTsmvYK6aLEtAsv7yAc22LCQfVacBXtQ447ACuKaDUdqYPU7GzFoK2ZQ159J1KLtq4AHCLSid",
  "key30": "42M2Mm8uaccopGiC2WhLKE3fW35fGrWdfWhGQYkVRpsYFKcWXPdFxypzujGxZkkv6g25QvKgsL85dQ9C7w2tE5H6",
  "key31": "52fHeYBPcTDRDSuyyvDykxPB7HMbTkUG4bRg9uVt7uXfZtVtorSkQpVYHtgJ9Cic1r5iYVJEQLxWEHYpcwxRuxAr",
  "key32": "24bomv9sD5Pt9F3sGoe9hxUSESTdND9TNG4rXR9WkjzaSFUTmBR7b9hoQ9UJAw86ykSkxUzw63wyQ2E5Jw4JqGAX",
  "key33": "4UoLgHtSPTUrxA879DQRXZVBviDY5vKh1ss81q3JwiCgsEkyHtCw8Yi64h99UktwDA9gZKM7DnqV3KByBZrWoCb1",
  "key34": "4PJbByt276vbexR9nbvUQxQprKght5DpgLJLoz3xPsP3aebs1UD2xEE4TiQ4LzApNtkTn96g5Y6sqg1ZTChcRMnC",
  "key35": "5ktbTxK6Xq7gJYtcNfo5ZNWVgy5qngxa9AraunUUoTNsEB2vCNw8uMou2Ef1EMHjt5wvBZ4TXYHnLiqHGrjMxJCX",
  "key36": "5S4Jmn5Ny67d8FszRygsxmYiufMuxYkqSKvugtq22SwJvynRdxZnbzgQaYMso3YXoLYXYNmdRTp6njL7Gu1uweDN",
  "key37": "2S8ob2VAzVC8dT3q2esb3PHsxDJUHFdHUKZb4qvTSzpaGmR1cv3MqsZAqWHed4xWgkFkv8rayh8PtdwnEcMN8uz",
  "key38": "484qqZeave1j5fksR2uqWQgZmZ6a8TuuEeeV3wbWeWwVjGvVCx5v1Bs9ZAkvsb7D7yw9eT17mRLujGgb3RXt9WFq",
  "key39": "cVG91iE6gpGWvtRHNMv6ET8LeH2SeSMyMxKL8XddNhdLzUyToBtyF12dboXELeHxc4nBJE1q5SHU26DzWrmfoEE",
  "key40": "4iM98sMFWKAhr1RBpmR2JrArnuhRSrKWi58PtvsprESNsDCeismXTcAAmsM3ERfL9diZwbQK5CFDWxUmZ1jRt5uA",
  "key41": "4Vz9gUSFwGUJPmd3KnGPFuMmxkXgWRyJkDkSgBhEVGQBpVkV5MBHUGjngLY3QsymQSTv8mTzUomM5NfDd1HLrSeh",
  "key42": "AKJUFks4dmqYvprDX3qqLdzwG1oFdTFLDwoLwuVeVxr2ShShCtZV9G4KvHX55rdQUPgaE8QroQFjieTAYEHt6om"
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
