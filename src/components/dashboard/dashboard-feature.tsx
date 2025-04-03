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
    "5RVG8zh2i1uuu54pC4w1g9AfXQpGzgCBcPE4ZcWG4nzM53P5M6PdpUmWxT2okVGeXofejFZWyFub9iscZftdz1dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sLu7YpB3ypSbSRzvTx83JHeJqTZRuLx1TSgsYQjzFD8c8gNNHQSyCcpMWwR1M3p74ck1r77qeKxhokuakWQHvkz",
  "key1": "57mSh8TzkSpm1rtwRM7C2Nztox3B8uoMe2s6xz9cipoS42oBr3rjoQu2SoVfDiwr3D1zVCoMfsSDbgGjGT4xGJPj",
  "key2": "3DsxTE2p6zve8nbNd6rnMvk3NbQf92CsAbyXjngRoFT1jxSy8Ugp5MNyxb7fCoYWXqsjwgysVvRY9Mw8of4JpkvW",
  "key3": "5zz84E6ZeKx1Cf17UtghXaDUPkHVefekvYjue5CZ2Ti9Tjmmr9V4LRJqizfvPXRk8u5vR7bsEXbHSgAx3uRMxfCe",
  "key4": "5Qn4EEvpRFVjALKis4VwQHE5SwqMtSfQnZdVwTTDS4kGke2DnnohtLYzwPf5CqPeebntfs3zfbbqp7aMDigbUvMv",
  "key5": "4BJf5JyeBJ9o2EMFARmRLjQHrfDjucxNVMSieDaTaziiKgT7TpG3tNE29oYqUAGfTFRmabTnWjsTwnz4wVUDgvJU",
  "key6": "jPTnCb5J9P5j2e3WhTB7kQsKjsCcJDt19ehKJEwTQYyAixte7Zaj3H6sCr7bupxKKvD9iAz4yRFV6LkTXZhD4X4",
  "key7": "5etKhhHHPeRcfgnVjBWLBe9Xpq2dEtokZRrDBUfLr2N8Hb7gC9LEcb94RSHeBadMo4NukhJp9v9suSfLU8ixr4Vw",
  "key8": "3SLY1hGxmrCYDiFETSGwJwiwNTm2a14eWynufWkqYgHXVZYHrs4oJGAbByUFgbTZCSzJQGmktETNxXpXpZmyr1mM",
  "key9": "2TvbERV5QwkKxiHp1fmXewWf6WK2jHALdsqKyn52VAX6Yvz4Tb7cnrjnws99EzHJojKQVvdMRhUqwqWbEaZbPMFC",
  "key10": "4MtWXoZfKxpthBbWWEFnV6akXgs6saY3cXk2hZN9BDrnXUTTRPyegjaZ4pvU4rn7dekPc4HibpyFw2bTKDEZHyNC",
  "key11": "1Niz6K9apjBnD3r1e5oMF6knE4dqmZS49oGqLJT7LUf4RkjfhD1mNRGpbwHPtLjdD5aBVF44bNGsPqTzaTwEiXM",
  "key12": "kQRzFYrbq9s8HxNj3Q2GffQq7oGAjfHTyikfM4MpapMSB81znVo8Yk76KCyoLAv8qMkCMn32AgwPKqvi61HGBPf",
  "key13": "5BFFGc78mrh8a6kKoDeqmd13qUn9Vc9FR12saWejVFRCzBFJdoGNi81fhPr2Xda6NEQjvvFMKo4kLs1PDGyhFATR",
  "key14": "Z8vqzYCZSpH58GptaKrvfSMx6wRGuhAwJXqxq4prdjUoy9reu72DhjVjVB8s7BxmxZ19ANjs57HJGY4TZsnuwov",
  "key15": "3dSN2XBY49tXadC1Tn3cvnDmGegXLRbyeihiGGXsC9KmuC8EjArZDSYPiCwGw87W3znuFu7797ntfdGVaKifjRwp",
  "key16": "2tGnjraEMh4GbuDZnNjPU7ee3YLySpZwoe53GQupHapRDC9kAVaSHebjUdkmfVRCez58soTrSVDm24ZYSYbadQQG",
  "key17": "4BAHBmHMqmDYpiKeBSPb88tA64rwk9g51hPCBfuaqVAfVYos1b1HYXXzav73PjL9RmhJJB6SY9Lh3i4JX4YnKyeg",
  "key18": "pQFPjhUsd9sWH5dkRpzfdkhhLUPVT3MD1GXrF9Yf64H9NkEPfavHpXuHFYiKHMAcdBbGU4sFDgABU5kWWRAWrr8",
  "key19": "2D9cDb1cmc6WBqdCXVUbtdSUPadvyUuXKyRBeb9v9ZJPJEy4tsJMyxuFvUxW64VepMRUR5Dzad1MRkJ1r2WrPB7G",
  "key20": "5fGtmA7KF4wfGEJ5acdZuzS5WHHp63cmD4G6d86yochHJ8QMadvRoXdm81o5aXTHWgrczvy7kmY22KCyShZ2rFhv",
  "key21": "5TN6b6dU1KW7i75buuKu7PLXcNcQFb3LemneyPpdfhgnudfo566zFn2dU2dsK5tVd8PhwXzJRFnVkvd5f3NcTT5G",
  "key22": "3F5uN1T8LYftA7ZD46fkaBuJt8hwV9wiFYwGmtRLk6qKY2vh6peAakyCLWY4Ftk4idNEX2kY2cAhwEq9gQJUaevP",
  "key23": "5v2P91TbZFrPx1iMZfUBdmi2YY6c5pRGum9tFHkfa4MaXqcGbWp42SV6fQGcy9wC3QBBYz9PUqmhNoqukAuXtmPg",
  "key24": "2kjNr9sanzrLyhDNjaMwRu2HcuYDgV1h2BQUKfW3MJKCUnGgrHCPWNnWDFbHgz1SHQ99t48P4ugXm3wfgqWsNYT9"
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
