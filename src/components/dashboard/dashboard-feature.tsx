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
    "2jAR7mzQAdr69YbKDE3HhsH2jWmBfvqNdy3HAQqyWZ4bJL7KmG48b3XWQpLBXjRUWmZJatNsaeFAkN4R6nye6Rp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6skjxDz9nnR861QS7afHXm2H7ws7kzZF53zb6i75kwRhGVPw1myEY8nYMqc8kjf57iQfEGHQ4tRpKT66rHKGyS",
  "key1": "629CZdxk918RvGWWzUmpZCNUCzxyXRJ5B2rAAM26a6cWqVnX46BV5zW8BxsYP5WAnixca1nia7QAuvTkAotUTbC1",
  "key2": "5k7GwrcqfaFxt455zpFfy1a9T4xb5Z6Rfmas3YAC6Fqvb9jvpuWftxw5jsqUF7fex5MQFjGGyG56vjaEFicvBAk1",
  "key3": "inabKr8JGtWAmFWiZWEeGoUY9LE99ph5csJYS5BJjdXKVUdjEWaSjgFhzjWcupGJ3D2AzgBW1N8xk82Pokrc1Cz",
  "key4": "2adAhHrCJweLaGazpFMb6L6iGzubvwKudD38Pq4PZUJ5gAaa23k6GQD23vb2YjP1sm5tgriCiHdYjNA9mSguXk55",
  "key5": "29BzPrkxAWnqeRJCuRZcjqEgZyXCpnc939etEBq2QYMYDkqzn6MfLLe9zrJJ1sptwymT1g8GZBfCVWJHDEBfGJDr",
  "key6": "2WBgk9GbqimdS1TJdYon7hjau5pSHvELnLf5EA4cZMpkLR4igqGQrcUfv8S2LK4bctHtSCyuBHsbtnjGwVEEWtD1",
  "key7": "wXct9C9Q7zZeJ2G1siRNdvVD6mU5K275HUxuXssciManPWeRmgyp4xYdPWJMT1bHLL7sUyxXiTh869nDkSPuS2o",
  "key8": "65idwsouUA4FiGUhiUHD5cu3dfDoaE3CH13UXM4AMmREM42ye9B9DD39e6gzGEgtTKB3mEgkxf2ZUgys1MMaDNkG",
  "key9": "3zhMo48HYYNDcYpWDfNoJFoghjAXUqBLGSbKGHKby8u6mFSJ8P1DeWj58RMbQSwhebPHoCukyd6231C9iwhBt6iv",
  "key10": "Dp7c3xjPycrxhKwe8TexpeuFT1rpzAEKhTkVH6h5A1N3Hv7QeWLtLpybrJhn19MHh4qHwpj37YD8euCP2qcGqi7",
  "key11": "4KUbUCSh8i2tY2B5m7NBN2PaUMKgzgm2MWN1EXu8aR3HkctzP2t6RxZy2Serx6gbmMqvdD58NP9STDPxUbCzB6cL",
  "key12": "5c2Mc8fVWCx7fpxgMw3MmdkC2FhqV9KW2snNisAquMWcA2oyTKeB6sHjbfA4oft6UDEbJ7vNMJ7v3SyLr11bREp5",
  "key13": "5S6Mv6vhujSorAEq4QGMdq8avzBNdkfEDci8e3jZ3fToXyt8HYLZbWiRPf1PGatCgkBMFeaVpqPevDkAkQ1QNujR",
  "key14": "5riNVuj41UnavV3wedzojJi9oKU3kBZhUxbYCFXkfy4dEzHVMc6S9d3iJ5jVcLnScuYPzSZ6KwyHzTyFWdEdcoLo",
  "key15": "5R1oD3AYxTA2nZGZHLNQJ7odXKM2CANTnrWF8GtnBKESWVbogeT29oUmjnexbNr6g1YP9vF6qR7m5xwDNsdvyejV",
  "key16": "3Adx7GHm5VtkkPHYjzNjLfR7RkgDnYgnHYLi8KVztfB1tFes3hpdtRBxvh6t1jEn64ivCqzVBzzSyeGYJaJFXGxM",
  "key17": "257vF2PGPT7z5XLVnox4iTn6bxWVzzrNk3e7YTsVUBtX2zpXHGj2h9Zs34bp3auCGCS2UFXCrfnubDzbMXW41k3F",
  "key18": "4QjFYeeqAy69xsHN9jnhcEdGBFshVTugpafDUV3rLuc9NPYwrUGJQaiUwFFHcgDM1GPuk3i1qducDS5UxDdtiYBM",
  "key19": "4tSgSL1bdgyHpGkjLRipZNezPP48QojJgn4RRaYccbG3CRgsPRzTStPzSxJHjQBCbrkCDLLP9Uia4KU7DSwYzYtY",
  "key20": "59VDTvK49YpxTvk8a53q8ep8JnwbG7cnNLTPvsHAAZRXWgeH7AxBhWitcf1tonMoMz2xijfrxdaUVKyEhhdDZp7h",
  "key21": "97cqgFfwoBCiw48Kj1R364kXN93T41dSiowVfWfoMjjB8Au94Ew2hEHtDog6PLGdTkzXGLuEM9H1NAnDPLfv6za",
  "key22": "37eQrJoy2FQBV5y8mts2ZajqmuQjVSiNkMnNu73rrCXC5eGSPndSPK6bDtHmLHi7DT4bk3zDVvVpjSAsYnnEGyt9",
  "key23": "2U9EZPcAd99BioUQYidFPFLTSE2UETCHeAbNX363UCqsENRcBupymKLBgJFUfvo8zJQKwvXCeCTurFRVHjTwey57",
  "key24": "48d7QRJ8WdvkESwmDJQFmtdVdY4pBTwdBc82vrQdRSwibhVosGx4rKgWooaTs3RsewMiwsyfyu96GRdEjnxr1i17",
  "key25": "39KTJRwGesLLFLEcQofWPtEc5UVcyEAHyXv4mShRFPNY3oJiEQxt3z9uDDPjeB7pWD7WAJKHHCZXptNHrGUzJkb4",
  "key26": "3cRAbBVJydCHHXXNxLcPikYyDxnZJKTVEvHbzYZihef1zfYFcWiCuufuep3ihVn9f68DELiSUEguqSy689pxJT5f",
  "key27": "7PLi77KAkaWKY9dccZrvRTvEx5UNAvcwNiUY4AjNFR1kTj82BeTMSEGjLnGccYNWqEt8jNPjXsiuRoogc7AkFXL",
  "key28": "2cZvsTPpP3QPmXaoPnS7CAKmEWCP25LaXt8LGqCnJYHsrzrMDcM2d3TPGZ1EVA9wEWF9DQde7bWFvZeq8ZjMu1vp",
  "key29": "5DiXpDBGRHDZ8c6sFu1hq6uBXwhVg3aLfhPwfYWDCsDZQCP6yNGbfcro354q3BhPppd5E1e5fMgcT8EVk28tpwS3",
  "key30": "4qfjeiDmEBXfDC34XJZaezhfwxji1RyZwTku6SFYAGmwGbf2HTLy1wqAPNws8GJoAknmrmbaTJ96bir6jZQb72f1",
  "key31": "7K6yyuQZUBa81iz748rEMvq4KdchvyTNEGgrkpS4dSKwK3Li2LTMrXg6ncKC2jVjw3qg6VtbKX8CHqFaBJ23Dfz",
  "key32": "3AAkFhCUa2gtQVcwwzjCbUWRHe9nnrndWCcnw6RAA7m2hNQ24eu3rn8WsCjLSveZs8ZG7mqRWGkpc6CNurYim6Gq",
  "key33": "vucBu2WRj7rF2jebhtT4Kwr6MBUj4BGuTUAzmnUrf5Pt3GbLg8qskwd7yauYTFWUqfmAHpvaGArBEmMzhPiXsYr"
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
