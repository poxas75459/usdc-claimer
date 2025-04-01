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
    "5qwjEANkAu5vdcBqSXaguNkfb6qkpFeCyd4M7zPLihAWSXM7Y4PQNhwR8nS7KHPoWuZU8z7C58nMnqiA13VLCnuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56trD5otcQPDniGf99SPrW6HLAcHSHDwDQBcfUKAZxSzNSpueKjuJgsbkRboYMa8DXGsBCgh2vqr2sz3BNra64Y8",
  "key1": "4wdGbBa5C4URGqmTzkgKqLHDUozUv8gJRpkYNhQzW246fJVHMqLzdJ1kDcPfGCSLENJiAKo89mdDiwBTXVr8bQWH",
  "key2": "3YnLNBRZbHSRNr4j8ZkKenTAsHtfKXDNzAAb8hWuriNdbTYB7ZpafrKHBM7YgvZacsEhyo2ZFgjsUsSxh2hjwNbh",
  "key3": "5NfiL6Mc8Wr8gFcddvViAgE7j5FKhUL2azn2MX8J4H4ZR124uBZmZFGZKDJDyEPBvRAjdWirTGWMazeT3nYpzZcT",
  "key4": "3Xe4JFAFK3PUN4SiocSq4G2qoQpVJLwWStFMuFWG7bBaJQ8ncBjQe8yVUoi7Q3Fw62gv5DUUzuJVX624DPrDyUYi",
  "key5": "ULdKtV9BtUCYHYkYsnFGUh63PGoGb7bZxsKBVsKJYmiEhwu9KpMHsdjEw4yuMVHVTjEz4FQ2C3dDxXYu6FfQS8z",
  "key6": "3e52ZiP1x864GwRPRkn4mEHSQ4CebFxJL8SLdQ5tkgG1aKYKNtVMYWFBQ89kgwpQfR71dgRbSwV4RcGSxVDx5WLo",
  "key7": "3dU5Ve6oSFX7qYAVbM5XjnUV8LMVa7NeUXeuMWcEfeca9MJccAANawDcxtjoTUvDSiMzyjkyD5zMp2Gstt1K4mcF",
  "key8": "5njQwmoSfnWC7b184Ls8P2HGxbDj1Rv7zft6x5Z623iphyuYLCgJZa7GP253F72bbdBimJrQEEnB5aa1V3B1KRvm",
  "key9": "KRQhmxpYTmwKwWpACDSrWBpetTEoitgCgvvmEmtJVzPeiDXgKws52S9oVWCHeCqSwcusyY548KjW6iPCUnUwWLX",
  "key10": "32ji4gvJaa1HwBuG2Rbvfso2U6CN9Ckit16huFZJWDvwyUTAkubavcBdLioE1ZRcmGQQw4tTsoDDdtqtfQAbycdy",
  "key11": "3vRhj3k4LkodQYoraN7d1mwK115yPj9YdqMDd9RrmkYvpDvM3MXC67pkkG3bGsog5XCS1pUUbvGr95dxb8MAmYTa",
  "key12": "3BMkjE2vEaVuer1kcPxHrBeBcd4M1Zq7wAeaL5tkAQzb9pmT59xgadpVL6ySZNwWgRhhzJguoZVG1xxw5gwTurLu",
  "key13": "5DABePCovjvzJUCV9dFGU9g68CTYgF6nXbHhARZNFqGE8QcTkm4SLffSBSQLRugXnV6ojtPSWgbz9T7cq36sxiKX",
  "key14": "TBBwwEpT5NhgPNUqCYVWUoUDZifiwxM5PmLFwQS4qJ7ZM8WSYzzc8cDXJeXWxEc9wDSS5FXBuoVuYxBNpaNfMoJ",
  "key15": "2hvpgkMXC8TcCv1S6JXYhva8SFdSh2fPeFH6WmNHVdBTUW5xmYe4pxLQJrUC69YenLnebbsQXtrk2asBABwoirtS",
  "key16": "9o1aqJQxoRc33RS5bRLuouZVUVTreCRhyHDj1VWoh14UNVJcMjVzh7m1bThUQwGQCZkzt8MaTQcTZK2u1okdWgU",
  "key17": "4o77XRmNB96yWTqPYUytjS4X3FL59Jesom2mxmqNqzmzQB2Bhd9osx4a6Uu2k6Ma44cPBJiHYPaWkyrVLMDiFcJj",
  "key18": "62aBg7KaV4FufHwavUn9qT1bWU88Qe8D6yzwjV1N436VTR4nUyt4UobTUHiu81eTzTGpsCkvBtYHWAkXhvtHGi5X",
  "key19": "43yVLZUH3eru1VfiDx6yvsfYnuJ21ugvmeBpokdTnkvendNS1CmhKMB4tTK3EVwqxHmGXMW9QiV2x42VGNTaAgfx",
  "key20": "3EGrZ64CmBr2xSpWqkcWMAGwEBD2NPtsmXFNqiKM7av1hZib9hBoXhaG3L6nCPF5UiayWBtGBPSye9oehAVbvXDc",
  "key21": "5LtvSMQV5W8JMjzFoXvyRK6kyCw6Ja89WWAZQbtGxYnoB1gfG4LNcc5M2nwZw2xtpFfCre5tUWH4kW2HkHnVovYT",
  "key22": "67UmpeTq4ckKJmup3N7Xk9EUZ7YU52pYvvE9aPuCnnj3YZtndshV3vroLpAhd1MdK1NGwXYuwh3tgQ2125oiyZEW",
  "key23": "3fpP57Ni7BSe6ZCb7MBmdtud836yUomAns9NT2MLV3YYMXfQ9yNtRxifG8zW8hrvs8Q1SjgxK7dUssEfrvcFj1sF",
  "key24": "1AADqA8ZCF2PdV66EaeiWaupUJJ3AzWXHL5AAPeNCiorT9VJfkKp6hyXWQuLCohsXLW2KAn2ME6jpsxGgwmuwx7",
  "key25": "4JzMqJ5YGw3ndBTKRaQ5mERNNRhrSpesnPQVndUxNFtL6rLgm78XeGw9P5jV3ky2E4Yk149jb2rfZfqscyGD8SVc",
  "key26": "2rkUuBMX3dYTXY5Jqe1bzDiBMTg4k8qEeRSr3hdLQmqgPx8WcCpZ2RdNUfnrDrLPmZVoWupghK7hwcZsi3QZWSVz",
  "key27": "EaPEPDaL5EX6AUPHrJjM5hTAu2kwe56ode5LRjiS2UhgncZiVt5m9m1YyMTcMMEUE1psGocY4CdXYHHgMYXhr4h",
  "key28": "2JMXMhzCQpgSGN5SrbXSWevMCqCWQPoKaC2tgfaczqdWqXsbxARA9oNMWHfBoS7wgzVkE9dByhvtHKVCchf7KsB5",
  "key29": "3cp4YQL2QUJDWUr7N6R66oSaqWieb17yXNEBktMiU7Qrk2xK89fj5b3d8gD867cXw5vPvuLViYTtbQC3QFtWr5UL",
  "key30": "3Wp9wqTu21U1FFUcrYXvrXRH9TQ9FpB9yijjDDgTon7dt1izpCe1hxkfBKKus42vWRCtHk43VzBdiSMeaCGyjcbK",
  "key31": "4ZZqLQZuHKXuFqwdu6P3hiyrWcSm4oMnwdZQcwWfSVX1zyEFL4DL8uodp9W9qw8EX593rKtWz4PBu4SE3hQTNCE2",
  "key32": "BG38bgV1Dz1D4B5kxDcichYe8fxFkpvVsvo14yVxiGneypxLNrCdb4qXgHG8zk5PMcHQwEVmuBmnxvTYm9yec1G",
  "key33": "4Kcuxjrqng3RobhgZyPb45wJuYY4VLVveEZmz1H9ZvJofJLV16qLTPgj1hxo26NYJfu51wdoF7jdWeJn4skXDQJ6",
  "key34": "4buPoi6u9p6S9a1Lw2ADS522N26xAiyHCVJGkDieFke8NxZN3UCeKmagg24ZbWPXffYcHMXJhvkYfd8ASds32AfL",
  "key35": "3JHwZXFxECd3DqqwSAKf6KE6ReZjTnPr7Za18xVCBSK2tpXVY72beTxjH66XmLVEqY1QjS7qt7kxyZyMqaNSsugB",
  "key36": "2cyTaRSUcJvuhQNNHPK2QbfhYwmQsSHUMNPrW3CMprAj3sfK6Xk24F9GDJXCHLgZTW4HPXJcyhAnjCnivX5i8ivi",
  "key37": "5NmNRgLp7aw2sWWNLxw4Amr1BB2zr2ChrsE5vymRn5FmiLvaMfGBRaxmGoEpdyRmfNF9zGWNkaSSVV3X9Pc58CrP",
  "key38": "5UW4KTLN7gvX5rskiAbw5CYxuMZE8KhaYvznjdhQ3zkRhxXSy84QN4HKJGNJG7VsuDJdPq4ndNAFdynJqJArmMi3",
  "key39": "2hUrk7M8cibuLNdQ8MguZ4DYoKtahnrjCuZyae6PhhLqt72toJv4soE5gAcrbBXpBmaXv92C79eEYZJn331LyzCQ",
  "key40": "5dmQgJxLeCdfCFwtTsTxWWn6wAhhGVW9KxHt7UPP2zAnnUVj76VSGrSd9UKXUg4k2NZkhtj3CDkmTQz1rsYjsqE8",
  "key41": "4Pj2mkGqzbVrHZHpddpekbnJ99oEqCfbjbMw5mQYSVm1HzopWS2w2Div2YxZYPYDGe2Nr75uXKwvJb8UBFYqjvdw",
  "key42": "UniKMqsoiE54v7QJcq3uVr4jceUJq9VhcX63UuzbPcfWnHVfMd5kv43Y817gXWQp4CyuLKsv4Er3yF1NSDJE5Pz",
  "key43": "4bMFwm3LizxaviBqo43VE97bz9F7wFsAM2iBfMLJJM3cekrESe5eZVA7hHGTkBNvvC5FpgsaGft5MQKWQ7PJDvYo",
  "key44": "4W1gqVSEufTQMivsJAiBcRPyf9cbzuumnEpb8KsU1RL4Ryrn6XigzZh1yzG9z5TXCxBSVq9NVYB6gdPmVtRJwm6p",
  "key45": "52NSukTNTQ9ydz61DXxqTAr8WsPrAYNN7o7ucdQySEqZyvSN6tgcNCUxFc5aWJ7rNQX77Ub5RftjyjgzAQ538ehN",
  "key46": "qrPwHrhRxUXonwePJAthzpY3C7hs81qWE237zV3rJ8QG2zXKafhoUZYUCYmQ73hh8CYuT1MK36nuycdkxmSbqvT",
  "key47": "7ha7SG4gJ8SDebJirrGqCEbJqcsKYMxaQUu2nd6cgLfwxth3NVhzS5mFdb8RciXAjUJnDph3EtK6TxP1EEf4Yk1",
  "key48": "3q14JBgGp38uZepJYPJVZHbrdsQEbLddctdL7qgDmvsdpAujQmUTSzyUMDqZeXEcGhRZcQYAEm2gmGQbDpojwbTq",
  "key49": "2NZV2S68ySKCHtRBjRntbG2rHHBH5dbQk41wjjqx3yjzhkTkYV88F6f59z1jSxQn5GNmhPgm4q5dNmkps6mvuA3u"
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
