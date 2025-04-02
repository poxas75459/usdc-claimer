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
    "2oj1WypzSCcXQiMyJ1h6YYsUWabgA8JQCq4VF3Bu219UhiLKGs6RYnmpg7TtcPDu19sNcavJNJ36LUU59iibYbWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9sqbbBSwevZZUV7uGRp3QEYASiahBnwZGoch3mgwbLzHuPD6CcB4RtxGL8LzyQSLmc7p79jh8QGh9K7JGVVRkbL",
  "key1": "59nnvZhGXcZJyYoQUdpxawaGnJ3o2QchqEogGur1v7Co9GFT3u8WtNxqBWrV8j5Q5HZvU8PPe67YFvBZpGWzRFx6",
  "key2": "4JJxgkAG7gbSNtSCjiDiWfYHH3mazYWbSCZqKJsbdBJtxqs15ySPcSjxMrFNjYLtFcXwntcuNnYq9prbtSDEwrTA",
  "key3": "2c8mkftnNojYuMEfUd6adHYjwozs4UAUJykzNcbEi8MKTGFHz22sXd7AQT314ssNShsmHkb5FcmaZ3fBLQ3Qw8Xq",
  "key4": "3eceJ5mS65CZE1tRfckDSqa2mCtp2fDsKze7UdBvNcMsxZMJs14DAgwuVEWihKRdV6omzTXjWp4mmrUHnSPYm4WR",
  "key5": "4HFccYsWhKHPq2njfA2n5dDLh2J4AnFYbYgCj2gbXBePrebdmaX8zyoJt1AeVH75bJ5cf5DCGuYggz4sJsAam1Wo",
  "key6": "24zzgUSVEzrefSLivfVRE2yeJazYHaV3vv5yqe3h6NR33XUpJipZFx22Rn9PpwumSrvoiuRd1VPgu8HHErBCzLpa",
  "key7": "3XEHjf2Xm5Q3xCZ5fkK2ADZt3pWHnv1stv2uJL34Xs84DoUWE6u2hJdCTXfg5GwLb7YcBZtLtbUSE6wX2ZC43roR",
  "key8": "4dfjME6R2WWgoTUZXxadj7vzL1ZS7PDbhHjt5xbP8kC5BCiSdpH3RGsDmzebHateRJgZitsbEHYsVYYhbmg9H2dr",
  "key9": "5jpdYyUBSm6GYxYRRt7eGnzGy8v7mrF5Ys3j1QuRASNMmG2hRAEQPQ6S61zD9hQpPECpZwcBNaAoxcGc7CaD1BE2",
  "key10": "397HHzvdrRu6t2RtH4rfLtwbMN6q1y1Yt59z598vaVPdcuR5y4YYaHaX6wBFmktNBi1VNwqNC7u94AiD8e1zhcxS",
  "key11": "YLzhjpjHFFUQWu3ydaGTDc5x4TuuFZiXdkUNzGRApASbKTERtLujSwa4Vg8uM77eNBcw8x5CSL5x3sQnKzGZreo",
  "key12": "twyCJDK8gvMHmx7nHFeVESEcyJvTi4VrxHFk6zMBSjMp2HFdfFDgF6p3E33gANVgY9rC2EYUKbndsN43r16bYKP",
  "key13": "c9E47xQ27xAQ5gAyWQ3bCSs54qXP8NMXLxzPjVMePJBPHrDXhfuR6fuEEXsy15azRzfmBC8GaUqGdpBnuPY5YWo",
  "key14": "4dQTQb7SGhfgK5dWsrb472MQtkuF8A9XBeJUoYWWjEen2GNFCEdT7Ety9qD4bHY4AjsjfWNAAmEE2AfkQ9ebL5J1",
  "key15": "EyYVH6sZnnjTnngYjrM8BX5rGXR4kG8UTx4bTa11sbb1VnaZr5grjtiBWmo1Y7cyS3w2dvpuQjz2syApxgB1KeY",
  "key16": "2UTPap85mQDF7VumnTyywms1R4mbgWGuMyPhUBymqa6Rej1FCP616zuZi2tAkcJXgufJq5B8KEG3fkL3JCVQ1w5r",
  "key17": "5NVtR2PfP98C8P4Dr4REBPWA7TPzF7AXazd3oFE65Qb67BFw8HrfWF3HG7d55ysBjLeceWEEUaxc15DTStsn35Kj",
  "key18": "2JFT6Q7rMFuTVCkHPCMqwZxXv24wjWvdrrpREDfyH49C5SGxcbbaMNByFYHVDrYhkdYxfx3TFcfbhtWoAurNdfuY",
  "key19": "2aJEsSYk2Bn2HgikLgTtiZGsKJ9kNSVHygvf59ryM3fwDJuXuEjk1bPRenURtSSejvjhq19Hf23oTSr7WbiwadTA",
  "key20": "31nz1RSJ8F1qBErcReDPUT5Y3V2zyTcRrS5H3uhytbhRhYbfNaGM5QVppx5MiPWow51tDgR5bXsQW2upo5nKur7J",
  "key21": "4Ejfx4opPdhcy9dZWNm656yzFskpLHg6viS5iB5dHTQnxsuMwhh9FD2BUcr9nb8fbY2LtvKSG46ctACHzvh92JDu",
  "key22": "Zigcsz2nMp43FNdraqDi13A1pJMdVFbrU1RHHHGdSc8A4XupwCz6jPXPsKKKpZhXDAEGJipq44Z9XS22XfMYLyS",
  "key23": "5U7CFTwnNnnn8fYAPiiATXd4tafcYWdyV8uYmTzHqEpQGiStYHb4Xqq1N4tGwQLNqmY1wTKP3HfeDWwLsir3SW3x",
  "key24": "2AiKcUTZBWxyFL1kyNhPyjyUFAGyRKWKWLjzZXeyyQAFKJ7HiqmihpC4AdDarqTxswG3Hac5uNxJnmdGp4jvf78f",
  "key25": "2WLLz9JifF1VfxqmcDSdYW8cFMmBJUYDuSRVomR78SVoibPqmsxQTrKeXmiTgzw1HFGXNe5Rgdfs5Jqpfx65HG1q",
  "key26": "5tCMT9yzL9yihmufMsHswyvodaPstVt8zHZbtELQHZyKx9fGS91Qi8zjxs9QGEgL9QBkq34JA1t5554u1jTDCVQr",
  "key27": "48MwbjmBErHomWCbHdniPPG2pXiKCbGdekBLYqd5JruMDwLE6E4eBSEebsj78RXuHKFCKd7ayyVxCqMYnaXotZBF",
  "key28": "5GieHziXz4Wi2K276GhsjwZhoDXsWCBYihFw52ZWRADDYxxcsnsc4MDYpCeYT2DaMxFyZU5vYR6rJ2QQgYnDcJpw",
  "key29": "2oh1M5Ua4QyvVSpW8H2J1oQ8MFR3VNoDarvEQhk158ZXQqJDUtgMsSrjHd6z7FooHP7Ck93d8dWkXtEABaoUod8n",
  "key30": "614d2RgaTQyKrnDuZ5LJD5wjYYXMz4LiNSaRi95LG3NDhqDQ41uEjVH3AQyQmXkBSGpusspYEz5mzEcYVG4SquGw",
  "key31": "2MMPf2WH8dgYaapXaHKtMZSH7j66uvCDmUok6y7VvArVn2t1AXiLtAA6rmMmpimzsDzwYSuEvMkCCQLvTpSGWFqY",
  "key32": "3nfxfNWmETG5oFoPgK1hYFkXqDWE82ucdxhwphRJLqyK1nLbnR1NxZjjXePpSuHtszGovW5SdFQUS1f5yz5BgMks",
  "key33": "3JsuHfzJGzfA6tZddtLpEgbFAdapfmmvvyi9FiUmCeCCKXZRie5RPhsXK2rwKki6nbjdM6BiCrDjSDpC7eB89UhK",
  "key34": "2e3V2K1aHGCYNmgUjK6jC5zQ8maZ511uMU8WQn39DzQDPYcbvsuxRJjK7WYTxHe12F5JJexiiumtGDTMGWzyhttt",
  "key35": "28ShqEbPGm5nWub8k9DUyRV3j99XbYsMib2v83CLRcGNWTZe3AL6bJ1raykkgiAnM3KT7HEps2TjR7HhN25AiWMS",
  "key36": "5kAuKt6E4vDpWSyTWnwFYb3CmQ51gRHNhMKsXkdHCKDbQb7R3kpc2EURzz2z2EhgtGY12grxVcxg9rJkE5mgoQja",
  "key37": "5cc6FwXyPJgjEhEJt3SHFAyRdji6a569wxrXtuRF8yt3ZCyDPEbWsaYNJH7t7c23EWUGS7v2hMfvGodywCSnbsiB",
  "key38": "4Q9ZaAxL4AaTw4RwfS1oHnRUbDaMy6iF7N9fY7vRDDP66jCyhUN6mgv6em72ZeDm2vErazVv1DLgNxcAYxjjTDoK"
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
