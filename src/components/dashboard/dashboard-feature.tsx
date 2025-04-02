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
    "5Se93BA8SzKB92Ztw9yyiqDngt9L1wMsronZ1itB5dTXCgqKmBt3LuDM12q7HWRCCuqgbBFJdd2urYB7BThQQsRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDVRe5YVQ5xS2tqAFkGcqWr46aorQrvmX5jaZmUU618bifEmPT4Kwbw4S4ttJBGrZhDyUUaA1sXkT2eQ6rhrwpE",
  "key1": "53ATXQeqtetuPocRBspt5iZT2K6V3wgAN5ZfT4udvEDK26jhhWuPb8M4G5HtJZ8zU74HJ7iS9bGUXdQUr9gJGBX6",
  "key2": "43e7Kx6XBtmgFbcq1dUdbY7asAHEVGtuGRtASRvvXtpiTYqFiQFZLT9M81BGnjmfVYUpqfFDBiqx2bkwKtoQfu4J",
  "key3": "319B2nWWQiUcKjwpjJMxcGXJyUr85vrCnLeeyhw8PMmYb8NpfYaaP618QjDPp7SEfzgtsWaUAELxPcrSPKTpND2t",
  "key4": "gm8vzGbHNc6aVAyD2bUAsdNxkGy8Z5sny5Gjn8szMD7Cqp1yRoggGUeP3vqLwaQ2eew869A4CGV45Tvd664ws7j",
  "key5": "5z6YaMYXP6j7xDP1QKMGqbDFEszhj9imD1PjhbXW8LCDQaZ5jdq9trEF4uQavtkRtFUd9gnud4NUCbv4Lqk16okm",
  "key6": "4zXDT4kHfjNGcz8yEcVqDgD9Lb4ja2UVDHjNXWPNLypMjLn28ZnssPYDs61HhJCkeiijKBZBTeLWpeEkvfcgAd6E",
  "key7": "4eLjoCCZdnV414xH42HJbF48at4YhrpoxZHmHnn7wzDDVd4V6iUoCshKMAkuyFb9TVzNL5PY3kjkD3hVKfX4sezF",
  "key8": "6NWY621TtTGgURkh9tSnPCm2cGLyX5Vcw8ptWpMMbqG7dbD7QEmbPQpiv9W349BcJKPWSpvXYbz6NuDpVbN87Ab",
  "key9": "5rinehsjrUfXNPjrA9L9LLbf4D6yymjzUgQwQBKVVh5AZodbmqm9NrzY3PzTtUEtF9NP4ZvRUUKmgR6PUFptuZtH",
  "key10": "5BSE8CHqYjoZE67d9uvA1zuuaNswqGEtLDABsETbR4k4QoCyQDNzHTUqkqKMbMgcLmbeTvnr51tFotpD22gcmkXk",
  "key11": "2o5hiG4By86HBhxBWCfpxdBHTfhy9M6zZd9x2TSdReSZ17tPsDubC97SnNtAPX7n1uuFgb1LLsiLK25xqxUcTSaZ",
  "key12": "4u7EQW5xxzxeSia4AjNDJEdF9BhXgWQQCc3haVSX9EvgKxFdg6YXmmRWF3xr4cnzHoExR1UyqiZYmvJCCKCkEGos",
  "key13": "2JiDQNMKgBotP6HVUScR25JZqRupaELaaK2dBZ8ubfwBtoGyfT77U2nqhtebFq22KjvFoa2kW4dgfxcRSUhMaYKv",
  "key14": "5JWNqszsECeNsUMQAhtkoRtjhB96THnS1MHG1YM43hZKaJ6CwabnjfjBcC6MYCC9W6A9hjhEDvvDwo9Reo4xKacM",
  "key15": "5WwQbuj597bZXz4nBJhSLqBVdoEqbEjupZ6gCQ6CuriSaNZzAG2QAw3QBhNWe28uFcWgDmqbYWWJp8JAy1wqNdR5",
  "key16": "2JHW2ZtnEV4aJpZXB2pNySB36pubBuLeDMzJMyinfW3tUJpJG54oiaeEsU3pshGpryM2ChGyB4ux1j24oHTw1ppr",
  "key17": "9Qupzj6MH7kSouPY4JotfBePyqzfhrQgR3sHB1i3BUMiLrDj38emKe1GGvxa2GFSEXQBEcJjoUN4adTxPafhTip",
  "key18": "2eDg3JEz9BHXNJXDpn2XhZjHmLFeUS9Y3e4xchubaDZwgPqcd67eV62RcwTewqnJhvk7ozfP48KHrJwU8Pxrwh5p",
  "key19": "4AgDPQoi9zz9PxhiTZ4Z36hmWtkx9frCnvX84Gz9f45eUmRMHYZHgAS42S4nyGMQTSQV9jn8LARMfXKigrFExkpp",
  "key20": "33VajYhA64wqMuVHk4AJFSZh42TqGQctYznZQ76qLBZ67S2ZFhTWXPQAGRWZPUjRDkeihg2JmqGXXkYrbzTeLBg8",
  "key21": "FJTDsRVv2BqM6Sf7tEAHKhkibXBofVUgdBc57hxNtCaZ5CLZGkjQ81texWAhJ8scNCnCyudjwk56L5LhYYaeKHM",
  "key22": "66gVikARHyGHx6NfgHaomPZNi6JvH7KPgM71KegAg8Jc8iknR45evtc2cXGWS2TDQgWxqv7qZwmjaYytQESPf5u4",
  "key23": "4fdTkybZ4dnGPS7hqeR5qGZE5gFwBDJVaci2gpHfMe8WQ4YPKrKMk1oePetN5cNaURpMdLAEckN8NFNkNhG5ufHC",
  "key24": "iRZdLucbQ2SCmREfzACy2rV3DQJGYi9JGnMRqPUJmdqsnvLEHtUsanAGGcsKNuneJCnpc4w7awXhYDLzue1uLWH",
  "key25": "425JrvvRcbxg8rrWQh92ujAguk31nurGeLjk8vwpejRZC9hLXoHjthEgmhw7Cztf71XDFRsDJHuHTTYc3wHCUeSP",
  "key26": "2hWwwKjkZWKMkXRdHTFhn9iPYFLreG8kfwhJ8Zvow2Dx7tq3BPzPF2a62tGrg6CT6kNYE15hP8af6jCRmJXcRGXD",
  "key27": "5D2YwuD5VnHhWcVHQ86htLMMzLf21q7LjehkGwjb7gE6R4miawFzbiXMUuvE55jXq6aaQDg36tHXHjrcHK9CBcxL",
  "key28": "2riaw4kY6vmWX7SCAgL79DkKmHrGQp4C8Sht7DdRwfPaS1etWNMQQBAED9tWGGQiVg6HZdCTUfx8dZKfzf8rb3fm",
  "key29": "3m4UA57CZkGyCitE3nkb6s32fF9yDTgJHvSicAUEnUFrUY8MjFsJbLjuDYrANUzcQNBqiN391qqYHG9VK5mrypcq",
  "key30": "47N5qUAncjt4Yms67npbWFmpSHTtvgfcZ7YQaohQgs7MstU2BwPgZec985bdPL4PCGuMPVxXxrGpm4Vn5idZoRJh",
  "key31": "5aqGvzURsDBMFb2a4WV7pUuhzqV4doPJESKk3nNrHT8T588bmaKdARZAS4ZQfbavhN8gHTNzktPuYPt8QrCfcmgb",
  "key32": "1wEJph5C6aopPEWaaAfrKxukkXKbiSobtLh8tb9p33QjDbTtUUiGAL2AEvy5FSMjP6SATLcHorMpvhJP93dnCVd",
  "key33": "zyvoEK73qTSY5L8CTUTK1EGTFfEp39tyaHzLSLB9Mgf5u1BiFYujDM79RDzBGL15zzPwU76Ljb7c5R5u1T1vSG8",
  "key34": "4fhTYXNwb9zQ8rEeaaU67qZx2E116r8qQb2xpefU3NaMhNeuTdRmVZdHrAadGJV2UMwK91cF5XgS7z8zfhCJ3qzZ",
  "key35": "5yeN4yUGBS4dQuCEEcvSTjZxongwZQorQNERBg7oahpAhx7cuohHxZ7vr1bGYFyvm14HABTFVmJdSKV5fKPpbk8c"
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
