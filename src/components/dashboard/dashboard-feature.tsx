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
    "44guChv2DKzv6AN78yKgNcooBkHpazxgLLvZ7HXa61HqQbte1SyPJkieCy2RSjdJhNjXomv2TVgsQSFqAsXu8AKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7wHNRauAgmv9ujUG1JJwJCpWwuL7sBJux15awGaGuNGqXzobX4R6Mr72BLA8tPq15K3Wg59w3ULrUGNaWLVKJA4",
  "key1": "4pK93gtxhTZtPPiVK6gGgw5DjFTpL3YW9HVBN7nFquFQWNR2373ngYLfpj9jX6ZHKhXGydUbUUeAHfVDKmUiki39",
  "key2": "2Shh1bqu2uKZ6R5re96iQNfE2hcsyachCAzCxAYiYmLF3Lzt9pSaZmU68REmovCdhXiAkLXXDCKUFB4yLLocJNDM",
  "key3": "npyYA7ZUMz9HELxSmPJkV1yVNr6sUnKoSHXhKk5WFCG7rtAFWWx1quuicxxV2KkTkQbvqGsobV179TehXDUAf9b",
  "key4": "21ndSrWTQvJz5nwATze14PsDZEJXFenkEHJft27EwnLGUqNT1JFbT6Nuxip61qWGaESDSwt78ufVYUbDaFbP9Kap",
  "key5": "8KZXmCC91fLGMudg7FWPtjjKezm3a5VFB6jRM43jZremcbg6RcETudyrq8RmDcVsBBuVu4gyrZdM6biPcNcZVBE",
  "key6": "3RetWpchVzLmEhpRv9wEDgM8AotWqNeZxWHjitg6WyQnenrH4NDvvr7gAqZBiVrnsL2FuiZgNyGj3sJjP4BPHS1f",
  "key7": "hSbAEWCMHFnpZLiurBxM33bSmFMTg3mLbgXkTUtr38vhPobrwayxK74oBDuLG2fGXWwm2fxQMUzbcSrvZ9QKAA6",
  "key8": "Rbqpohr3j85DBNQFeUtyEpgoHKNnJnr4BEhVwvJNvmmvVpAoQp5irgbwpupTAacvvzrFRUidMkbEMboYbHHpjXa",
  "key9": "467uf7FwT9QZypc5zg9MXBUHpy5szc9gPHBQCEUZB3ddmWfR2dfFitwr813uknD1QYTN4C4mSj6V8cJaeUPuFZ8V",
  "key10": "5okfqWtrL79BM1xGa4AF46AhW7vCGKQ8gQqwaJzjzSzQG2vnt6miMeFWrW3a8uKJ8jAdjXnUJcMeZtSBVgL9d5zx",
  "key11": "4njh454V3gFXD1K4193NHdmtdYLdvp45KtwhdKVqifCVdEm3DC1GZwSy1kRTHb6HkbkJTg9hdWBLaM3zchzr7zHK",
  "key12": "4yxh59ozKnvGm3eNkLhMw9vxxBfQsyRRf3YnBKL64iK8QVPkFX7ib7sGDjKTHzDR4mzB7DVs5nuXBgxS9fXTEe9t",
  "key13": "5aX9Ek8o2tPbzBzynETk4hxGj5y1AkVFJaVoNADEHzKjxokyGJ1VRC5TrSD1fVXELRPKvSedErq1y3tLVFDqcsga",
  "key14": "2vrnYmhAd5ZLqUkbPF7ZjmH4wiuN6EyTskaMmZagvxnnGJiTHixv2J1As8L4y2WsfZ6JAswYo39J8TZ9KUdnBR97",
  "key15": "23fwNw6QmxfKk9W2o3dUAHBFxdQvq7Zn6i3JB9dGRZr27X5PrCDPWuKmoeVAXDGbCZ1sr3v6FuAiyfxo8vy4hknf",
  "key16": "bXWGmLPPeDxcr6hM9RTNsANy8nEqaVMyYQLtRm3HFwYiFvj2ygPi3DJveMAVNBMgZgfaXz3EB24tnay7VteeVcy",
  "key17": "ic9YQ1C62SQUSSA7ZdZucUXc6J5fDUK1ogkRDNYcDN5acwvcfc4rLg2RByo7b1RmZNDANzzqMiBuUdKj1YqCG9P",
  "key18": "2PfKo2W54CUeU6tWWj7oSGHGJbCw4eGvfNNmVa1scJCGmWY6J6uozJHhMx4LZrfbsEhxC6iJ2MBB5J3uM4ZdpVz8",
  "key19": "47Bq2NKNj79F768nZVkp4CZnLYddxiETYHC9Vz9GLGNZne5c71FQfmSt27CXiqia5XdufY5uAMhA57CiKtrgSfK3",
  "key20": "41UnRVt7CkUx3U9D9M7BKueWJf5vx68pSe2PgS4fGJYQ1tuHU4vbc41e3tVtAu2ZyPT8g4G6tNDjJEw16SAjAPtK",
  "key21": "521qnXe68o1ZUac8jhivUBweHHeVkcyhbXNaEDoT3huhMe2ujsTe9Mu4WJEVUmHhKj9C5bhyjXRdqVG6puLMs1xG",
  "key22": "5J1nEx617MsSGmSBg3md59KbcjqpqpP5uSTg8eWCuu2mzv5gp1ShdRgsWcp7djhKjNGbwYKujMat617vYLaMc4op",
  "key23": "3n8xBgNnUz3bSi5oY3ompwBqkEy2dKxFKxU2Wcq8ySWXcRMxJhghvxuYYHfSveroLJovJp3AtgPVeKAtUPcrmYDN",
  "key24": "iK3NPz7upsqRcjE2pwSdN7M2HKxpWu89LVAUN5j2WR1V2EWQV5wAX7q5fGBX73MhX5jh5J7V16Hh5UhSX4w7ReJ",
  "key25": "4RxaFmqDLrjziHqWyYapL5iypjBLFGYjykCosFSXX716QsZmSHK88SK7DXcEtJsMCsmWKLMbRBnHcvAqaoq6nRt4",
  "key26": "k5yN1ZStkUwjh8KAk88CurCvGaMZtPf2UvTbkR7CUF8N4pMnhQTsyPSAUrH5vvoUaxhb46uTNWHbWTJjfGALyTz",
  "key27": "LY1gZ4d4cNVNYpcR4sfErW6rPtfR6zg4CKrAMvsfmqMHAFFVc466xdwaUQjBumtBW2PpX81WFeTLUrJMfzHh2Hf",
  "key28": "5Dv28xeeYaKLWWzJEibcF92pjd36FTUW52B9Qyj2aHs9NxkjREsTHRsaS2E6Yr1y2MfPA6yeRKwfSGnLskJTjAx",
  "key29": "64nG14Rozj1QcPbxHDtbmT3DxFmyY1FVeBXmXYkNMkCCYUtcRFeVYPjW5XqnHNzxejYSrs2DjMJWk8ixGHjSj7je",
  "key30": "2nY526hR3qzBFFnhNT7RGgStpdzsjCEj2uJBCEzgYXAfqY3qmoHTuD8zKDezRATKkQXTDrcMwcFLBq6AqaECu71X",
  "key31": "fWrFN9SNRriqdTmxFQ26QWgQCiYj6Acny7dfuyPNwFR4ijXf7fXMT7DQsRkCYUnMkzqRFP1JNzHZjzFB9x2GxwP",
  "key32": "yHHfcfGm7Vmms6DfbbjKMJdwEChuJcafwMiGGKFG1NqP3rWBxBAB15pKS1Lu8d2ryeZhXrXThFD3XaBEAjP2cza",
  "key33": "kPWFDWUx38FyDwYer1jJZYFwBXReHy3WNiXhPgSysQ8UevJjSrvjHoNHMidTr4KFZAP8158bYy5SE1LUHs28BZq",
  "key34": "3whCKRpDSDsLp1vxAyMa3Ugr2Xc2MiMzkjPYKUGmsnZ7X6SX7orjWgPttb5vxgE29QwmjKjBRpW1va5ngTDQaFwK",
  "key35": "5qaBHe5R798nWypdEg8oXWWChRvXwP2RDrLSWYsLetzqwVi9cdFn3jcyEWa4bwHZjgwV7PV7c8UWVZgLwCC6CffV"
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
