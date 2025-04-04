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
    "4eP1jpRKa6w5mshLEGDeP4fs9YQzTZ6fovtm7Nrmys8NBAb68FQxuCWBR4GgQRzhPBwnyRznpXRPcyTzA6kEas5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517ghgeXKbTCsGszqkF24BwmSrSYAopjY1Whmw4f8myC6CnXbaCy1uNmntX9gXGDwREG1dK5ktNPJzrn4QxLwyyo",
  "key1": "5GSn2r4PvDRSY3DunpfhPYq9zRhoJxFRSNksFkQFYVSz7ingiB674N8WzvGXhofYf5zDBNkNsdqsbijUiFMRcZCG",
  "key2": "gDkBt48mRgo3r4pdH92EJ3g1qRa9hMkEsQkSZyKdgyjf3VecFYGCFhDdFpGvp5MfLmQCWheBzjVUrU4Kz229kFy",
  "key3": "3RoaxyJGd3kFwCo3UeRGWtfzWzzryzdemPjbKyu5e41FiM4ivE7w7PDuTVEZHrMkdbHjdyqTG94HA9aicwa3fRZf",
  "key4": "3C6jGksQDBZmXnV3iSvDWY2CiGjfX3x1vpMNwu1s45k1ds6SzBXVfjrXNnV31ksgvoCmJPBh8evih6FdGNaEeZRR",
  "key5": "4R1sbjNA29eRRFfCWqq2Hg6tqwMRddvmEKASWwYUc2pxAufQBkj3t75EpoHyYFaizg5wfuiJCdhfsW15SHc5d93z",
  "key6": "2xemkKNwwjSBrxjkZ5FXhP6AEanxCyBeGjpVrHjqVGwFvqKfMx2FtTmqYdAh3pp428V8CwwXqVhJnctc9hpvXKoC",
  "key7": "5K9e6Z1mGskkQZiNYrCdV6ksJrxyaoNFJmZm7hYNuPSsArWZENhMAwbUmfY47b88bddDiejb8edT4tqhvY95Phdy",
  "key8": "4tSxpLdsnMTMK75TZN7Yzzr3AoKoYGKn47dwqEh5NkkHftJP8rFjsQ5kDYJDJMMa6aoDW9hvhyJ7sh1wUq8Fugon",
  "key9": "46ThvUk6fxrZP2ecgjAL7fghurnrB8jAg6Mi4QX8JoDpb1EgxNCVZnny36eiJ5TorcEBhLKGXzkjP5me31S9XTix",
  "key10": "5RfnzYTcS6dpjnX1FkbTvmPpRRdVk6vDLMiQFDJej5nbj6xV61AYmmRQSrdF1QDJ3qPnMkcC94n2DqUPopkxTVh2",
  "key11": "ep912wPfxEP6vujo2YkDv5p5YrU26DPXZQ6FN9By73dhfmzfZkugw6xjnRAXnKpyzTy38GMDxEft9RoVVi4Cxou",
  "key12": "49pFfeH6dejnaTrPmhTwnjLBiXeMFxFXHneTgghRKre8RTZsQ9ePuGTcngjHVJvsgaLTANPTdFQ9qUsZmco7p1sG",
  "key13": "Dfywgc9dcMjQEADp8w5MUSzZeJVaQto8XDYos9qyKHR4Kgg2xWzYcqyg8eATaBQAYMNC3cqkT5fYmaDgikZqr1m",
  "key14": "H2LpTkKLQcws6jPiQTXy62xufqcXJ7GGQEhTJRphX998WZrQCJWnBxuqUQ35P2uyxD2hJxJSS4vZTjoEVywtAYW",
  "key15": "4RaCmWapU3CXeBnGKvJmqm8LmsJXwqVNPnqTDFEkzQUfPRjWu9CUDkNWZ6eTQRH3iPG87wmpjCat98H9sviDMnSb",
  "key16": "5hsNBtWgBZUuwsT98DAgYHDZWT25HshSqHju848gYZs7f4YSFXgD2W1TT6PqPkpshK1NySgJMRepzJJ6MwbLwynr",
  "key17": "5ytp6jRBqQw5E3LwvZXr8369YHiV9RWzBQdn9A5nZq8oWCnzm9s7w8eJYoUqH8CDo2aXHyXQbm1Loi2Gxh9YPaaM",
  "key18": "2YasDVgpawJNx9Dm4UHr6UFx1gSv4gFBD9zgEUbjd2xUAHADKb8ftcjdDHzoTdVX9m1AZFEAb8BkMqbHg27vpa1A",
  "key19": "2NR5mr6Hdwu6GoeqCVdqRJc1LwAN95fNecLYVtG5FLFyf76VdDbofxMxXAnH87LviyhxM17afTNTruX979cGD3HQ",
  "key20": "2DhxZQ2BUi94b7kWPGwcDQYLxttd4hxSMx1h9ZFcf6Px6L7vWwEixcMEabZkTkXjkfnBfceEsE3DSjYg94WX6sEJ",
  "key21": "2rbt9HnmBpTGdNHp6MkBu7coPFWkNoSeBxCZPTD1f9znDd5gCVAfjfSjymjAYT6pQ5qrkw8zbn4Xeg373xjMgmez",
  "key22": "Hkfc8hvkKJG5kUkFrFFvdGrKxdqjZt2i2qCrJeoNHsWnNLufV3yWCiZaUN3XXzALJLtk7JAxvTDJFKXjuVF64Fw",
  "key23": "4Y2xBYhKJEBFKmU8aYWrBFHcDABDiH8KhbriWMeBCNp6nA7z1492nSLzGHTEuZ74LNZSVnTDieWkHmRm7zBkyJcy",
  "key24": "4popsX4YTanXCU9vi1PSgJT9VYLrrPqMgLMAVcUeazxsT1dmUQ52pTx7yBrTnL1HXBbxDjQSTYUVH44kZMHvk9Hp",
  "key25": "5R1iRT5W16S9YN1qPDqiUUh1A6uxXnv1nZNNjxqTviYGQzFRz7pnRz3KJtoxXSX2Y47VPs5DNiEBre98JuKPjmAY",
  "key26": "4sREUVkHk1A8BkNA57UvW5wf22CqPTeQWz4Ah45ikNHpPNhdy81uhqh8Y9g9LNKU6uCd9SqSBqSUgpQ5LoEgE7zf",
  "key27": "3VRd6Fy5Emhjfge14ywmBcCJP89ZWfRNeF5WoH2yTsfqyMfkq9Q3PjpCxSh2qrFrV3ZwjiNucaNxrccsca3U7xfq",
  "key28": "4bA4dyVULKZ4a7e4ELqwH9e2q4BHKzBj4c7muRhhSVzMPigNQ7HMQJPCfNdpQoyNFvcAkxbbrbqmaTxZ4DfxvyZ5"
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
