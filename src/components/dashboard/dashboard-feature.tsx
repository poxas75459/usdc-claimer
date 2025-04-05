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
    "5y5wFuQ76afWahmEcKjnaDKNVFp884J1GFkJ3aznmwVDLqugR2b2bbwE5R7sv1CX9UNuqS9rnJpvhnpLGtw2ZER7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cbo367RE3AFH8isbvXvK467zYm7MAtXW1ztL3a68FeJ31W75nxSZ4UHpMLqZe6ByWUY6bkwsJMUb8b7X3SD9H8G",
  "key1": "36jvfe2G7cpmtu3smDmY3ouPxuUcBuns7V9sb97XgVNAxAE8Bupp8mVkt5Eh3EF1qNX9rv7CPA4Jr2ZjZLjP6bSu",
  "key2": "2sUenVtLtRoUHxdrVgRayysAfG6VMDiKAp26H6AcVBMJ2ePi92S9h5f4Tvq8m12BjFutGUkHtykTycWHB8AxsuMZ",
  "key3": "j3VSzCLbBpxMgHcy2ZadQtU4zN6w1v18q6sAbktqxHpViQeWRCm7hMqzBuPg6vsPg1NcnvkRHgvrf7TAA9Zes78",
  "key4": "3JuaohD3wFC7urfmMpN2njjBAbQqoiEzFvS2twWzBisnpFJZf3iD89fXGQS8UmMAp9EqwodzVGkFNpBRLQfyvJWU",
  "key5": "5x9XmJ74Gck3rLgFArSfq8PKa1umMp1vMJA7stHKd3sFhN3srQSJLrVByt2dCMNFQk8CPzmQeJR28s9FxueDAJEr",
  "key6": "3nWYY734w5Y3tFbkQ4u815eNTGKvhLLJD4Za1sAw3kPWpa1fwpU8qaZqUbZzvi7hNtymB5B7mt67PP8qoWjPmB9D",
  "key7": "3HuEn31cnCEmzsAXRFjoqUoTSBDJwvtEr5gdsmKJHNkxHsaMuDNoQuTFqCmTKNmxyi44oADeZjZgWEacRFTMjjSu",
  "key8": "4aNLHhayzFriktr4TXa4WAvEtK71FcCoYJ6weMgYGaTY4f7jd7vk8S5vWXMepz4x3Ky3cRGvXYvg4bAzh9NZt5tS",
  "key9": "5M9333kPgvvhNkC7ZvosGNxuUUj2eAhXV29hHhTRV7aGrSuWm7hA867Brt3nRHSsh9VEKqFiBPbhcX6aWXxNvBTZ",
  "key10": "3YVMJbJWowEw54ddub4GVmSF3Hx65Bg9yFZoPUALkmq5HSUdoaPEp2LEcBWzd2aqUzUDSwp4biDyEzBwn8NG9ta6",
  "key11": "269aAbBcBUkjNhGRUSuS2Vqz2T6rxP9rJFTL2p8bq3uWasApmptJV2uALJazdzqE3nB4zA5GWb1V25ASc3j5zSjq",
  "key12": "5Ahn1tTYcmg24BFfNmB1t5nqYUxtMYyMdndaXwgp5ivohMA4kYSyvPFq4WuiZdXDbJt6iWDEQdReLa73J1sq6Kv5",
  "key13": "5uGs6UAaVFEDZE3KQX29uZgoEZi5BTNnqMNeY9Jogi1w9ctJ8WhK3M33jeQjrWymd9qgrqq2uhEWQUVhajMXLZvs",
  "key14": "3m4HMgbeNiaHEBT4PjFEyeWDowUaGrd7K3T44btRoZgjsd6auB8cbvQuugW4iqFvHFnsW3MbER383LzAC8mFTm65",
  "key15": "5qM2T3fbc5uEfdjAFF7EDoJghKZ6DNJdq4zZWZJgJsH9wCe5bjuajCd7iYUaZpvNaJT3Rwqb9mvnqWvN5Ri4wETs",
  "key16": "2wH9TwLsc46pGgqE2vR5icEnKQ2ecCQspMcJZKJiMHqEVqxcgV3zD4C7gqekZenPBm6AtVbbzQfkQoTXTt4mTEMJ",
  "key17": "2zSt78KCTKfuE1JSPH5DFQGDomxXbHcPMNCihfjvR7Wd5bvr4UUv2p75UcY47bCXBSagEGEHBHXWiFpRG5Ww6uP7",
  "key18": "3MLLEcDL1DNmNpF3NjZz38UgyGXitYBdoKLTGzttMxLXmsE8ZAZeZkPWoFfnUdzQNKfvc9ChpsM4ZpacSJxN6NCH",
  "key19": "3qWbdSALN23vK9WFSBiUBdaKzCgDdcvAHmN95A2svuFbrx57zw8xgeNwpRSMYH2VpKQi21vkFEMT1PeysFtf6Zae",
  "key20": "DHvd3LXR3opXxVpqFfjkhWV4jpx4SB3Hhbq8oMJLPHq6EneZuv6X6TZay4SxFNLAmyTcJVCiMstnbucp43TKjge",
  "key21": "41F8pffaVB6pNBC9CiuaZEzCqdYD78bouQWe78FSSspR3usHepEx5P4BoUemiSCyETWtw3bYm6dryK1nnte2W6zL",
  "key22": "3zqvMAKppXgbAxLsdm1JNoXWJzTPZDeP22vCpJkuRJKRXN4XBUHJ9T6Rz8YSZgn6w9sG5xLUtjiX56CjFpSFhpfD",
  "key23": "5NwWPtxX3hFms5RpGtREpeNSwcNkNoTuKtoYdR4knsKnC8WKJ8sNe7YREKUycMJPrkDhX2AkKkGEsX4xchw3w4vf",
  "key24": "JS3JouvDzjymFkYR6qsAhEvVSBfBdyzhfomtVHnKLkVq6YSCRkEBpwVtvknvdjBp6ot62m8VeGvfHvX7f7ypDA3",
  "key25": "4ShiL5WQh97HhDV5XrG5RnS3WR2riUDAESU3Eb7uQQyeUuKa2Pfi4S1GeCMGtrGo1KuNmdEq5iqyZrkdvRzkP4Xy",
  "key26": "3MgtZEjBmJkZB2QmQuce3sZEkruMAcoiPsRid9rcmFZaBALEXahBt8HtsYGF2Fe187fkMDQ1hLZwx2jnbkY9cz5P",
  "key27": "Zy9uaxTEES4Qr3WVs1f8ei5D46A9KPV6itRccKkmEAq9zMFtg6wbR57U3D3EUfU4gLf3cA8UjG1WaDe8fMHNvCn",
  "key28": "3H6LpgCd9ub8eCCdj2kahDrK4gXva6QZSu3wAfcdnyKx7KYhDgWYCTXYbn8Qg99FB7yc5z65bzRU6X1BSfatTqky",
  "key29": "62mrj6sbkVLZiibHZF7BxjroXaDTtzH9ggD2uNfrDSRQuKxR1d1BQcetnjPKfvt9kVFPGxsYyYz22BdxJdNqHdEj",
  "key30": "24zD31af8aNiJ712tcpuuHMYZbnefpKRF9bS5QXSCkspqULjjrRn3uySZ2w2dBDofyFPJ3byCYVx6N2p3q3adM2y",
  "key31": "49ieFnp63f4XcoYKJSEJoMyc8veo3DBdB8ip93YxvUzoQ9HCBUFyu5da4rPsDRLfGjRhKwtnEzsg7iCdsZLsiYNj",
  "key32": "h9QDmd36J1NvkaQ1Nj2HedVeXiRDF62wu4JEPqxc5TDzoBegvd9kDYzhGnkvtS2KNaKT7gDZwiHS4r3sbje4Jnp",
  "key33": "5K4HAJVg343X3ugg9cKCe6UiYPYq1AFLq532HpKEht7CRr3xKGRBvi9JEvzxKawMJAN7XFzQFZqexPgnSvpwuJXm",
  "key34": "2gzEccjKrDCRdVTaB5k6TwaNMZdRAJuHzcvRr5jSY4kNovdASKzZ2PTwRFNHw9Pm3RW91HudvvoCydMYQnYkgzyd",
  "key35": "4WwSNZ72FacZkBSXH6Zn1UsBk12BbjXGd4svjrgFhBBQd2XuiyWRPL5dnZmpkD85ZA8c2NWTkzdKoUZRvM2fdBMo",
  "key36": "2vxQcBqmxQPMiS7C1CVoo2UDftacQJoM6jNv7qHPBKzH3DCdjbCp49ozPgEjnj1QusF7sXz1TqKeiQL8x57HUZsZ"
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
