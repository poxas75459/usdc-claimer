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
    "LjLZ7Lo5VdnQZLcSZt37VypH8N8ZcXoUzVSzZo1WgjeB2M9uqTbxx7KAqUPkryqxYhUhx9a9QhAAiA2L46c7BNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3tmWbkcCLKYzjFsLYrFjQTjLzJZ3ivNRKRFreB3fL9NbpNY6cQLALXA3AYBDRAiuBC2gGmDbwyG9Y4NZZncAHY",
  "key1": "4hfZH5YDsQSosSR88JsDWCbu7oAFPmZsR4mQkQxKDBjPkrKHF3kUpKRUsmtLUrbhTaaLG7r93KksQAPU5r4yv4LZ",
  "key2": "43fe4aY3onH4KWE3F4Fj4DMDakWunhFucHUdBU7CHGbf7Yv5GPvFAbjYhPXtwet8SSHMYi3BbcyMBgyRp2wNm8YN",
  "key3": "3jPFs41WkGzHqLhXNb6xnqMa4vdRRigo9UtfeZV627QSMm1GkDKpyBBT2NEM5Rd39an7PoaMDyU7NSBgJdzFhtTq",
  "key4": "3HSMW5L1LrW4Hnqd8zB2ndRyeycz6yKwMwoci6Q1Q44sKEZ7747fX9UuBsKRczcT92CFwLTnA3GLwKwewsYvNJo8",
  "key5": "3aEWcG3NrkDxfnYmVVa5JKrP1WuNDF28j1GVz8xBjt6xDmLsSRodtxhC9rsyXsSqDjCnjQkqXhaGU4X5nMf9vVAe",
  "key6": "2WH8Wup4jZFTX35TUso2XnrJQEi6wUwLREJsoPGVCC5kHKW7Jwaamp2acW1bCPqZWiozP5To9iUHKyAH5967XmtN",
  "key7": "2NhJrhnwJWyMivkW3y52L1gX61YRGsxGtv8Ryx9uPCKhiGtQcvMxABgSp3TuVmgAFbiNUbtbZihmkkVfcPNJ6rZp",
  "key8": "5L2Ci17PPjVeWG2BWdBZHiJpGDovE8jYEci9mSw5AToW1DLLkURjkSoRM2Sumj1YN6n1QpGYPspq848PcQAikBBh",
  "key9": "377YSvKmoL7L8kAkMURN11irzZSFBzYQsMysxjcj6A4rF9F8pUoGn7mbTgBbbmWMGmUxw6nTJgiFVfDKDnYaAUa6",
  "key10": "3oiyTgogmDySvBcmvE5m53CNLFSeMvTb4u4qNoTcnEc4hPfNvcTHsNaiQRyyQjbkkqUaZxPUUgG5cThh6jbNYVFJ",
  "key11": "3qkVi1hCS73FsU1W14h5g5VeVbCqEdXV1Ki8GBhK4a96Y9J71E4AFL5sQ3Q5XXbssHTZUZa2LQr8Cp9UEk8YTQ76",
  "key12": "8yzGJL1FyWjkfqgmFUFNS6Qhk9QXFVHnfDCCas7xSUxMrwNCnTp3GCsVAUPwg6MpXrY6dFVVRK4WZndqUFhGT64",
  "key13": "3JrefLHA44LEfrfstk6N2P8fN9T45H5jKzfbRFSfZ3ENcupRh1PvaACzK7FHrFRTwBq9pDj6xMieeKBTKQLwCtxr",
  "key14": "2fDjtY9FxZAQbakMWfbCo4j9kRniRRes74D9notR4nVyjhzqJcNTq1WQvnU2ef1RB3Pp6KPyB4a6rCWkxuPVy3oh",
  "key15": "2aYfsCPMRzj1UKTJvrmv6MLSvinj23bazBcN5QNSsiRczD8Q4HEG9NJtuu53xiwsrEMKidHqxRRpWKHyb9YsfJ79",
  "key16": "5hGogNm9Y2x961Jje9RqfrC8vbHnAptVuvSUuakcbNAVpAeMB5PS6ssfa4EBPpqx8bLr6ZF4CaaDWwvyQdVDbuG5",
  "key17": "3aLuzL2dXoQq32adDLCQ115672SeG3HXhGZLDKJrevste2b29jh2bD7Lof7NLTyVuvrUDogmDVPRsLPzFofeH77Y",
  "key18": "4PtVzFKaJzfWqCT8AGG7n2dB3ahERzAeXMfkY32Cr7rxW9bkPrUPTVCBgQhTPMVvxaZY4xUsJyNKrHFA4We58ZNY",
  "key19": "LeKP6ceVTBDmCbTU9PFUDhUsKVhvk6wSPUJzsdCCSm9hwBgqdo25DVyYt9rt2osgyPBkbh7pz64KTFnuoArWcjL",
  "key20": "2H8B5jDWSg6NoYv6Rwj3v1bAUiaarppvaXzrQvcQW4FuM6PhfzrdJiEi4RnU9uNSKFT1ShPsa4ZMqiH6fTfhqGFx",
  "key21": "5wDcZs4mFxaDq8aMQt8GcpcxyLDBxBCxVJSnKQzYMhr3djMzu2XBE9c3FP1yYuay9qiNBqDkGVTrv3rEPdsv6iEC",
  "key22": "Zs44owmmcrFBYzUh7NJiHQMUBLK4XvFuN2L7dmvNMMXbMhMsYkQqHwVyE2mF8DA3CVteyXZkNNeVtrj7aekdhEp",
  "key23": "2SkkEFRe1HpVknBwb5W6hsvkNQMUuhXhaoW9hJmb9JwwnApxz6DUkfTW1PWuabrpqM29fB4amKfWRVSM7PpYZqpo",
  "key24": "2EALqofGWRZaVADkZK9NZtL9QGdwBAzR4apcFgvHZGgwSGFYMqFpJGwHxKzidPZmLoQAJ59udmwHGgw8A8NVjfNz",
  "key25": "2ReopwsWw1v5wAja3z5Zee5LxhNoBxMYyuZtHW8BdUMshMXAhPtjTbhn5bEwasmkodpLQFMft5CnLbGJkSM9SGAr",
  "key26": "2bP1N5tsgzx2XUEkZYvA5zfNmYbR98ndnFW5sD7DHKsSqyCb9dYjPXea3NJVPLsj8ggjMhVZ2gnmtcEGRu8oMwFC",
  "key27": "4ernaZ5EwfeuXSkV37yKncyfCtr96VTF4guKjCKxrZSePR44j85Q4gujkr8UkoqDns79QyrCjPkPQ5u5iAHh6aYV",
  "key28": "UCcS7qfgawedVwPctL1EPqiZzFcUW8xBGznKWPZHtd7NmZJ36ZbDF9XmdecpgYTewuKQ4BbSa4j7ohYHbNm3cV4",
  "key29": "2m8bvHFA5Dm8vmoQFmXNr4jW74uyESVHBRhM7iWyZzf3HhM6QykWYHvYR2SAeN9urmBvD1kFGLGBPgdb4fAGj2WH",
  "key30": "58ZRQ8KrfZj5DHNQ8Bp948T9t3hVMmK6yyRk1c7KR3pCDuQ1hDkgdh2E7Rk8zHu17Ys5Y4Q1iQsGd2i37UMZU5jT",
  "key31": "3jPAwb81akV9MTpHYXUsEE2omqcNmZSHrBZnyoEo6LdEfSEJ6yb2DakqRVH7nahUykD81ccoUCHjAidnWxPXbV3e",
  "key32": "3VE2f8FtWNQSUnp9mMKqihnKL4o9XH2pL4FV2T5CrsW6h65srThhNvTLP19QMTJgBoEyuU73bBzvRcCtgc3dof3z",
  "key33": "4MKRAKa6Pu5DiMRgC1gqwGJM1A8iLReC6LsFh8RKFpeAkN91x7pHwUrCkRRtd4CYUVppuvMeeLbCL9tz2xLoxPF",
  "key34": "5KTkf62gWZzkZ6Rkm3bhJHYbHDL9XpATHVV8RpxQkKYGYFidZyARvziyPFUrf7c6QyycBXdNoajZ7NiKHtvaGiuC",
  "key35": "aysJtB7n2WDkRqa4caifsxEZoUCnz9qZe5RRPZ77tydT7psCHcxjBaApUyXpL3NNkHt9F2W2QddZHuKkhY1Qr9x",
  "key36": "2CHq85m2zMi3EPG92SuA8ng5Z9D6V8JyxsKjyfTSRhdhLpnbXRn2MoGVUmDF7C3C5oaWeVwRFrTm8YDBCk4F7xMV",
  "key37": "4eLUnYkg1nJVM8z9aDURdS1QiVK99w5utyTkD16nFi9rbJxE7GH8euzjuRv4cGn9eekS31hUP53LTUMNTaBiMbus",
  "key38": "2WsLLUAvWvNw4NGrBgZzmuWrh9ZnFAgTeovqXND1aXCYZYpseTCaqp2P3kP1MLQc6kmwLLr9JnQ3XaauF3kV7dC6",
  "key39": "227BgdVtUN9xLZdmqFzk2hjg4xYWvJFKE69oJSzzsRwrTty3F3k8cbkPSTT5wddYQysQJnAB6msgnMBt3ukf2sFv",
  "key40": "46GysHwGEQw4sWiHu9UmChQDdgztJphf48sgWcGxwTcC4uNAiz8wmnQcrz3xGPwqF9qv4hs8meGCTt1h8g9JoSny",
  "key41": "zG3S44sSTar9nAd6XA8P2CLbskNqUkushMqdSHjA9iKYzReyhuyk7j9xw5Qd4LUBs6yi3xVbmf3cqfVYEmHuXZ1",
  "key42": "2ZpiNwiAFnGNGhTHFGJ9BHQ2dqvd8padfXQon6GFxUAdG9SEToKyhAz2PmoytAgqh4YfD6aogh77fzkrV7QcXEwn",
  "key43": "35kQdfUsGB4N4PfPHGEwpiGgLa65NwBtjeHHtq8ap7quQSZDw1mgTEcZE7wda8sGHMnDFovWMUcS9voFCewu4mEG"
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
