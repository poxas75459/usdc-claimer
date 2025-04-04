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
    "3bvUsDu3s1wAYYnHSuKGYBiaSsjQ3tGWRCekLbSU2pLZdGpG6UxKWYxGKP7WvjkXkV9RWZUTRvrxZEbJTmmb36MA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Epmjz9Bf8WRZtDLMN2sUxvNh82dQcgAFuEhBgycswhiCoMhPBZdEeBF3wCi57o4TxJR1vdDFJCqkUkoJuSjsf5h",
  "key1": "45Q7FTrV2L4QdvMdCy4YHFJvywukZyZ9x5WvaodtcGBFZKyoYpk5Ym7ym7aYTjj9m4ZWaChXzSb6UmdJQ9vojpA5",
  "key2": "495v246dRDyuZJSGZqyLXrzM57Tzw3f2FD9SjFgjKGxqcvcLxZ9dQRpcMXg19Jv7cYsZZYcrXQ45sT8Q9ocsK9uC",
  "key3": "62CQRNtEV9Sa5ja4k3qrXBFS3PifzX9qTbNvXyyHFqZSTf4aATyTFVZaLr9sPCVug2xSdt9jJYD1sL2UWDSYaTVa",
  "key4": "5vz1CRXQ9iA6Razm1hcZVfvQDhEn1K4eMSB1Lmx77cM4rbSvBwZBK7fziX7q6y8gdEScRH81LzZmmuKykfSbHbh8",
  "key5": "3N95nLVe7C96BfHucwnQwhmcxXayqE8NLPG3WrA2t6iFS3WtFnhYauF9ByYk7md5nEzBFfLQBP96USX1MBpfgw3w",
  "key6": "3dQ4Xwp1VmeTQwJrx25Dy62Pjv9iWuuSF6DfxQaHX1WKpoDC8qKg2vu1W35dtTiDPh8oAxHZM1G6VwaP5ygeDy48",
  "key7": "4mvDLrDop5hoP6v66goapjbh1AQfc2WX3epN3FYNb6Mpz1Fe58cQmNWoCuxg6jevVUeD3rSaTmuVTJEsq1JnMY3i",
  "key8": "5FSEXUtwEvA6GvoMCptVtdorVud47qg2ydwVy5bVbExTdqM68q829KEGjKLhyyGp1uu1Y1bgpncnz2RLrByapzs8",
  "key9": "3Cbs5wXsFYv2DAgnS3dmKMmzw95epNSAvnY8jEMo8pm45LvDn63ovomvxs1B9sTucNn31GyfBZTirYiMuWEzeWJu",
  "key10": "Bj74yEurMPfNreoftid9PX16dGyvQqwC5ZiwWEoefLbg1WMkpbEZTspJcstTcx2GD3MdKn33wkv8h2Pp727Vox2",
  "key11": "5bFuUFo9PP1cS5Rfy1MzymruAoYWMzgw6d1AFVcB5dJYh89x6FKabSD5XDQwUuELUMhD1sm8tGrfB9VEmnYnFhdE",
  "key12": "4nE4ytkuBAmWs6g9KRRpUyAqRzBg3HNLmEVRxDLEVarz7p4T2Ft9bXTbGkmtodxuJLQS2d5QAEUV5RSDE96Q3T5L",
  "key13": "vzgKRYw9k58fG84WcsGsy3dK3Uc4EpuMbNpwmr683h8A1As1Vk4J7J1ZhXZXyqT9WCGbidzXsEid6xiYcMqUoH5",
  "key14": "4hMRbksL1frq5tU3yNGsorPSTNby1HDVBDnwi2Zc5RNhexmg4VmTaGJstTqxropMmu8YH7JoK345QoaRySjBwd7N",
  "key15": "5ZbRkdj91YTf2hMHUez3aycbXBU5jxsyFHHr3re1nUCUE5THVjhQP1b3ZLan671osXvbPFXjNEMSRSY3XzJWF9kW",
  "key16": "59TQt6VU8Y7G3ehYj72nRN3aXPDgAAtLPa4JFQ2QU47mgozz42YpJZxfNAyx4WaDctvJA9UtccAD7f7dzKJ6ycLZ",
  "key17": "2M6ffw72xCxd6psAQzDYS1KuzCtBg5ySVyK2AC1VN83j3fFqR5vhJcbJJQxf5GLVGYG9TrC5pbhkRBtjtc6yCsUE",
  "key18": "5hhtPHLrCJkSKuewtyzJXGkBtH894WzkdVcDQgzc6Ji5rrxiTFcgmigzPUCf4bRoQrrLaomzqEp6RwTMFkNC1MXx",
  "key19": "2himfwokkP8PiFewwia5qA8Dru6fvLgMS2U9Zcpo4jmTiZVHApUb7HLsXo9aQu4FMx3ZHFmX8BDAC4MGKcQGFKPX",
  "key20": "65YPQYZJ77m1JQTbLAqy862tJBpZJ88rsMZqyXw8EFXi4hR8YWdVK48Y89KRWKAre6SQjHXKwxtdVu1fFiv3HhWN",
  "key21": "vQ1d34X8QRZZHGC5jHD8WjcmT5cPFHViFvTwgRCsR45UDeYhybakr4VxEe4mMAmYkBA5ZMU1chCNqxyoKVFqThE",
  "key22": "2MbXteGCkn2jdHyRZYSReDRxHRKDMn3VLmxJY1n86NuVRoVY5DpVKQ8GHgSQA57SVQpXAPFLR6q2XarivqZ31dYu",
  "key23": "4RoBSHQrDHYimydmwkhP2Ts5PKqzEhfAyWmc7prBCjACHnekTttoXSXpigua4JayfngVEfuBFpubjJ2JNs13QsNp",
  "key24": "3baaDAit4PmNzW3GPTw5pvFKY3P54nkeiihaDbLH16nhhjDfNDRvzzgb7dMrRtXHfnGfwwLi9Qd3Xf2Rb3L6xin7",
  "key25": "5bzP5CkM1JFYFCxQpTRD5Cf52iD9crRd15n8ddXPeJ9GE9JLew4X7Ptu8k229cjtm4SobJt7TXHMD8noiceGG3Zs",
  "key26": "2pjEVU6fKcTEod7AtporZig74iu1J3dCqBt4DubsusAbVubweMZGLK1yUAiYgGtPewizSypjYSDEc6adtSXVBLgL",
  "key27": "3AXWJvGuoEgUhWJ81dBjUj3UdAgPApfbYUaHaRWcr2ZZunvczJtHddAHT2DkWTYVL1RbqExcQFyH9jAMwAyJjjqw",
  "key28": "62G2yv6hDKf1y8PY8GyYNtMKgmEepsX2y1SSAAzKrcvPwgMsVmuAWXBfZ7E2kvgFNgyFaJtdecQG778bKqSdN6YV",
  "key29": "kvFoSe6KoxDXCfKMwMEvTVBRTE3Nnh6XmtqVBAdqbjryHr8KNKZf2iR8A6wdapNSiuuf4jJdPrWQjdZHYhasy8m",
  "key30": "2wnnA2wUo2EgdRwU2AuFRbK1ZgTYj4hT4tHLgdR7ijQyPwNkBDZbjg3ykMzHAZR395vVKazjFiHwiMNHA7Hyu4id",
  "key31": "24323WKBUBBiRAtNHhamMLCcuzBym8nscAXVQWkC5tm6yL4vLEFHLtjSjR5BU9gJv9dMCAMd2EGXihmdAM911fv1",
  "key32": "cpGMVhjKsmXvEuqUik23K9JXg5vUN3kjmsFdjF1eSV37zkm2sQyyaitCi5tkXzaWkumXVqNRLMWzuFFdg86JM56",
  "key33": "4QVRKqhShspvJ1Ub9k5xu8uwRvLMe8VTgDszome7DY6Hkrr4fhguhj9TKSwxkBJYN9D5W3btNvsCuNWeUkZLYoju",
  "key34": "nncJfzdsWSfRjdPW5qcbiZ9CK6pb5499mGouVNQpUb1wP3chg6geHubtdnp9Ngq7H3VrGkt29eiK95mJxb4vf4V",
  "key35": "3pdPd9eSpp2A9zDDhqKg9oki4zagvE86cf38F9aJ2m6vEWQaLgTh6wdjdQ5k3uQY6y2Dym3pE123CR9eKQhSAcLo",
  "key36": "bfjU7tW4QyTmySAgjtzHmyTL54DCUub1FmPLE1Fmf4gono4v81jmDRPvU4wXUYs3NqvgAFzxo1HNj4NnBGrNavk",
  "key37": "2CTtsHwTPq18RAuRcYSNMraQsNbLU2JyKyfuHUS8tssGNnEdP3AzU7viXZD6JNGS7s53imhS6AWSj6DMgXbZwscd",
  "key38": "5uV6Tj5BKp7PPumCyvvyKJV6qPTr4yjwH2sHpRQFpEhep64zD4xbXJ3Rx5xmQssn1THPjUEfU8UQtbgvC1AqYkLX",
  "key39": "2NwYsn2ZLkmdhnGM8R99o5fDed3VpQpwJopmyAgpLcPAWy2cpXjYpCPKbCHbJLFjr6Akumjqg22K9FEZw6K9Ab3D",
  "key40": "3L1uz1uMUevDhqiZxQ7KpKdqCcMYj3oPUaRoCnXFh3p7QkV6DfX734NvT94L3x91b4WFiDx1hkwhCrAscnEGjA1H",
  "key41": "5Wro3PJnBocyLUEeqPHMH2276EaCDswS1L7JRdnpZGMJCovuzfN23tMyEKZuVgb7c8jm4Z7WZ3EUNjvzTcjSdG5g",
  "key42": "5KV5p9Bs3j56ysfxoHZTk8qVF2SZHTYWBnt9j3FHquW2EAnux9dJqu7wGjZpvRPyHszWLbdyTeSWTzRtc22VHzPz",
  "key43": "2JMh8Q254wD66h3UTKPA5HP4nNETs2wV2doNrFTKEAJXg1tCsszpSr2EEKsXKBQrM26FSLtNEkhPGT4WBw8AeskB",
  "key44": "66cHJ6TtQsgDpzUF4dSQx3My4KDd84NKqfUHuErZgQfQ2obWXJmwrc28ae8mu1BTa5KG6kvTEdAaxM3zyeGGvpJN",
  "key45": "63wEFKQWnDFMFwZ6atuRjAfddKj8vkzocViCJpHDk4uZqqgiLCGW1rdyf7HVBEv5GXrXBJ6BwcjUBcCXw3fSre9X",
  "key46": "3NP1L2DFi9ECao557Di4CkSFvKzhMiAwvDerSac171T6VzZyJRg9f7fpda693PrFQmk1VymJEeoPMMAgCsA7mxTw",
  "key47": "2GQv8d7enuotyAWEa8QNmSGATZ4SAssUHg9DC7S2uH6qEetwW54YPQMcAzx6hfysvYAEPYxRYvxZ2yvj23pt3nMX",
  "key48": "249adkUPgWxqbzDEq3HsQXx1ycmD9NyezfYWtC9QAAXkZphhiYm3KMRCy97Hmzpy99SRMJfNh3VhMAKQNuadWoHP",
  "key49": "3hZ4XqQFQ5Uif25RGh4iYczdHWBxqTTTHXQi98ZX7jiEWdTfHw4xUynzs1ZTBVVXvfj5udJ3GaMN2hH7VP9mTZNF"
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
