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
    "4rieHrAiFBtx6D9zHTZ6HERRRx4UZxgPG4umA5zvjXWCPE8CCcAuC8R5F9dguY4jiRDzWX749S2RoNoy8WYXSSir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n81Jnxy3DgKuqksuSh3c2SAM9KkFqp2umAhSiLUZknAF59m4JqiQPGa7J1QGHQNiz8fWdTp3CoodYSs5CEBxGz8",
  "key1": "4yv9rwWVaBG7G27hE8ZQ3F82NRxENcfw81AFGekMZbiH2ANphX23fiX8oks719UyPRZ36AvDsH8mb2mBF7f9kpyH",
  "key2": "5ixRLx5yK4bAUnGD324pEwx39Z1AYm1gjgFQiLsydaEykg2vo4kXPKfYztM35iLdtQhH2Z7e8heXtBUS5TQds5mX",
  "key3": "29mBykwBoW3mwA2tKQbnva96znDuYoeaJz1vYoEAFn82Gj27TG2fCYsuwDSeemASnfCYUDz4purbe3g3F8au5Cv6",
  "key4": "52ET88XSox1nCCKM41pQxvxkzyui7S9PyQ5CeUB81FzXUcAxyWf3dfiSanHXspiRv8iRrMLA1GcLdvz831RB8LvU",
  "key5": "3sUQPWzGr9ZJwNaKBBkSdTkrZkzFLkJEs9JZjj62H8xN52tEesQDc2WP2U9EqtKzZd6RRYgDDcEp67WXqT57uFeR",
  "key6": "4RLFqTgV8LWgsMk9F1cvTifd1vpuQ7rp5rvJEErxuveCt6spt1YSmAuu8Y6D13deAL78iCKmXyHZrq7uhBUhqsTM",
  "key7": "5qtZ7VRZ4TBweJc4dcNJHhZ3KMYZD7Rny49dyJL9LCAVDx3GXGBAZGeg44u8kPw39PxfZVPz6H73MV1o9UbQydNr",
  "key8": "Khp26euqj2GE5DPf86Nj9YMUY5cZm66kdsTGsnrw84cV7zNUt7zVq55g9xG2wpizWkA9zDnXKxcrpCJ89khqk3b",
  "key9": "2QUweKyFspRjBJ8XRRQucxNKhsUuBtSRFWVrSYyhRkrNkmqJQUSDvQZHdvo9DUwNFU1wcmq65g78cvqboGnrNuP3",
  "key10": "5XykWboY8VVnwBmBZV9MN2ByowCMN5k7BCxfs8YLE2qXm3VR2q4kgU1RiRWWcQ92FMVra1vQkckC9dAahUfAdHLS",
  "key11": "3yoSxos4739q1p75nzeHtChDHg66k19a4Q4Pr1pb7sBeHdNmffh5Wuzk1C8TSqEb1f5kgRpnxRzfhtMCe8231kVm",
  "key12": "GcKX4F7KmBSJMH5bLnHLRH4eGYZmNNMeP6Tnzk1wiuZnBS1coBcK6dfE8trjzKuVoupGi4HXWekMCRFQp6gyHp8",
  "key13": "36FWw14iqGCzt9cb5tygNLuSsejbMWrBFGZZnBmTtamdLf4dEPfoe4Ssy7Lw5QuaAJHvi4bqpJeTuVvjxYaNknVE",
  "key14": "3EBcSDNNPu4AEBCrbgA8Vg6WpV8sSNrsbhHmAs99B3wk9sq5j9S93y22voU6vWFUdxc4BjTxAVQ4ojgjKKiw97WY",
  "key15": "267xpqE36YuCdhwoi4wV6W5723aP7qLrh8MDWCrfphXvVpvHhZVGVnqNwLNd8NrJVrmjcc1xeoUyxp5uQcLWgoKm",
  "key16": "2TzEcUeyPzmj8fU3xE2irnwB2tjo9eUCkXhF2tid8iJhY6ocGo5wyNfkNZtSoMjt5JDk6dPcXxYBfifzBirbiA8M",
  "key17": "95brkrpAUDbfoGH4exgtxnyzT2vYMirP5DuFm1qofQ8WugV8rYb2dXriN1G5g4sYBz4bMvR7vuYWMJMugKDYUhv",
  "key18": "5JuMdsi6vnmDrmGmotgcH5xboe8m9bhwKjMtZyMDMU4Wo9GN4zjZYoaYHuEoKHq2fDi4mTDG9HQPQH8ca9bSomUa",
  "key19": "47SivqmK9ExbGQFuEbpQiPntuzkhuFagBoTHcRH3GhvbjazWPgaFZM3EVpwJFdz9p64cvbfttpCV5YkVzV4rWmwh",
  "key20": "3qDFbDYB5vsSzA8Akp6de3uqGtwFVAHKKPav9RbPvGe1JwzUqrVU8h7BSXbpJ7sRGdhHBS5MaLCpMsyTaS1jCdjx",
  "key21": "5AABsvixAYCgEwSpbHc4JMbSi59184okQfKJtaqfFnJ9tdWSmbsBSju1fxF2o1qPEi5yYsu6zAv73diAUNgN98D2",
  "key22": "4P1fw9JN3nLYP3ETrpSw1s4GWV2tU9pGK1GUrvw8t2WiuJzq1ez83Js5fXMpRpVSvkyMUREf41A9Eo4yjr1fXhqM",
  "key23": "4TqXwPnwvKso3c4LH4QBcoUoy4U75eCUpisJB8LSULtPwbsAATVSAdrgJV1ZS2GeiyZWaULMmAPVpoLaZvYq3Nc7",
  "key24": "2h8q3DWH1brgwUjEXfwGxR3BkWKTMUNHZvMKrYL28nApwP5VuX9nTVtKkSmrNEuBHbjBJxkhkeCYEhxTABsAxhHN",
  "key25": "27uGuE4pMXsopHGqgoDVZMsXLY29nhNyrierMRhats3TpdvLUcUGawLn2k6U5RVTAqDzsWiUkZihZ6Tkd4tJXqyx",
  "key26": "qMF9R4ehQXisX9uTtnFCf1x3xNjPRo8SRveVJxsfAMFgMNQMoFY379hS63cCNtz3RzYcg4Ph1kvnKdQL3dGwVmh",
  "key27": "LPKyVbrKLXhLoETVbA2ZV4aWRBB25PN9k2EoVgKWd84j44t6ruEsy1v6Kgwe8ZNgUMn7nR5qe2hyKV6nPh7T35q",
  "key28": "2UY9pAiPBqPYbndRDsYxtLHYPT2f4TLhaP2xxdaozevDdz4H6vr2PvNGUHkSjux3oTCrMJhD5pLaiFGr6QLWD7pV",
  "key29": "4jQiXo2oTW9GcjvvQAfC74NJDshNEv5KU342CuJaDvRZvn8y6Psb8yY7XDJsiudhUKyWKQNMikF8CX3krc37hoCv",
  "key30": "umrFWJhcqoj2adywcDSDmqKeTHo12zzjK452ZUYjRbZgHZX3XmiYCdc2iBKT9LVfmVBK3hW7WXWeFXYWXFkRn95",
  "key31": "3bK1yNqG79dQzF53iUSR9UN1QdVHicQ2TWDXta7P4DpNDPwUMr4MLV7BpFnkYHfs4ZvFSGGqBsyeYedHK2HNioKy",
  "key32": "2A5CuuiHqfcANKn8abtW4kQQnKKjM3NkaD3qpe9fCWbrqtGR1jyQXkBdgjMBa46Pby42s1tG3poquKGmX97cz7bg",
  "key33": "3yysN2a5fm5oHMUD3Hb7U1HfUaNX757nv3QSxzKxYRjaEHh7myuxsqhoVKX7vx9vCdaamvH3mpZnB7bkEX5tgwxj",
  "key34": "2HrodM5GLmRUu4PTYyAMAydNL3SSncCAZar5gC1Bz6sBaEFohifanyHLRksjY1TfPXU6tA1t4f2a28sPXZe4zQsJ",
  "key35": "2cz1vbws6A9S1GJfXE8gQrbNVrHCGDe9kyNfENGaEbLrd3L6D53m1USA1FavSJmw9a9yR6jXMvWtyj3PP7aWMPx5",
  "key36": "PaZHd61tYDHRyHSfMzb5zZwbfXZWTbpHKPkRqvQzvq57BaWF4k5m1cxBp3GV8JSweUvot8grTtHim7rbC2miCJA",
  "key37": "2Hmt2NZWfXeGQn31BLDiGau5aqJ9F19GUnVNjPAJ26FSVJSExqh5zUvVFrWx3iR9kcDQJ1jw74tFc5kzHiXSRk5T"
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
