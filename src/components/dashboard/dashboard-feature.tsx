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
    "8iiNCvzQ3RxKPXiAQej3t5B1sGDy4vdsgGkoR398sZFEhEk4q7fEeJQo6xePVEB1MZGkLWguC6xkGkvYNuJuuHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cB3DaKDYPm5gbQVd4iutiGp1REDSWE35MSs57ndeW1a3E9vfM2FWmadMDd4dRjy6MKA1rqGHk4aKWCzrPsbpf1n",
  "key1": "2pHsdPf2w2fyNRQAjhEkYoA1yboPaxuesMiNAUcE3ebRPvapy4YaWufDQb14pAnrbgArcZoeKK1yxGwyu2m8T18s",
  "key2": "3ZdZmopZiUxRs7FoDEzcAZuGrgSdyNGo8MSirPEo24hKX5kZTqJ4si3wvJ5uYvYedcFuitMj2Jag98nwHH1nQawN",
  "key3": "mo6M3j6LGKrqePLwySte86tVDe4s57LuhuiDUsmkhN3oDs78zhs3K9SiMsu9ruyqfDyMwjB61oYqPVyjhHX8eio",
  "key4": "29HgnvuBkGtBjv6NDNj4ZAAKLA6gGdto8pRZRDpqyNewLSoh3pLWWN477bSJb96kUKPZvcCdj3uE6RYnNDk58sYQ",
  "key5": "5N9zzEBxmTm8CZBPMRmyn76Q9ecWA7K2ECiXVUBnDSXwKutS4oAzFajQPnMdEgmisfcqctRjju7jfhyqkaweKwZE",
  "key6": "4i686NCEvs65i8hPLSTchWmLu6JkVxsGFpLfHzaE8AJuF7bJHkcqUubMChZ36D9E827EDcLbVYckvL44Xf6tXKwJ",
  "key7": "5FJnG9iU3aJsJzpFoWmbH6JALFStNufkUimWVaQDWg3q7s5xtLVAhmHz43pzymzHDdFMoNVsPcZYYtoKgYADEYcQ",
  "key8": "34FE9PV1EbdjA72cn9Wxbk6KdKcpDQ4VwqrQ478xucm81KKosRaygakZgn9B2fKJV8kypkHH6ARxUMbDxLZZBJyV",
  "key9": "F4aYvRjaib2zU8ZH6rdAp6A3Lrg48fX137rL61jMV4wZhqkh8gUJh5xX5WFNL4vvvg9ahFr6KwmxvESFtoTmque",
  "key10": "ekabj8K4D4Rp13LAhM4FHVRKDEYAkxbiVPJNQfpWLgZevnp2duwrvDyayR8aLsnoen4osTZFnbDDwPQ295Eq6Gc",
  "key11": "61BB3JMTAHkwTtSWK3VfnecZa9BesoLhV4ZBeyKzRzAPgRq9JPQnmpNwJFetEhzYsGGt9sq9hUTGxar4Y9XzqJba",
  "key12": "4nQRkcDxWLw4dUPbazBkvaVK2M9Sus44K55wkyQBnBHi8rSLbAsY82awiwEqKkMYAVfUidahb5TBf9SSF6zgkjfz",
  "key13": "3oZuFuNmnrJRCa494inrDyMaSuCkQ282pUshSZLYZdnTS1rXa7AZgA9Vue4bw6LxpqCQ1P4CQQo96cnoMggkFCz9",
  "key14": "WTCzEaB3irzVazpdnEgdPVc8J434igs4bLq7jixGB8hSbXeyk3sLLAhy8iGbXM85M7cQ8qhtrfXhWrsa29cdgAr",
  "key15": "5zgJ3TpMRLXiK1g553kM8eBZfHKKmP7yRpr8VTrARV9SRWsyCLk32rPKKCgjDKpGaQArhhLXK8Bv5T2bEgMiop3w",
  "key16": "eUy4mfpuS1Dogbpy9QokmQEExskTwM8sN7PmZZdRwAKKHhEtiFb4jfifa4X2eX5Fr5QieDK8Grm5QGcki3GXeh9",
  "key17": "4bHCuzjaSkZVomskdf1becfQfsReeqDbK5CPhSonm9wjB7o1oAKirWsRN8gmo9BrRkyLPbTjCWSzTG7YHSvQR3M",
  "key18": "3CrkYMzA2HfcVLnDT2J2Vp8xugTyQn3kkBEQAzsGWaQpNV9t5Jih2UiqaikTidVDRagVK9xgAfwStsq3XNM2Vc7P",
  "key19": "29vEoxQtgqNizqDNyuf9BobtKbRsjR1bQcWDr3GSDqPMnForY43FaJcxa6PHDkjvMr9F4bqm6DPAcXjtf5kvWgcp",
  "key20": "5wimNR5fP6MyqM7resUgKtUtL4AoJxmXEfBqgoCi6ybNUVZ1nnQcjzhwVVh9JzsberPNXi6AaZRFxDi8kz4Y3Fa4",
  "key21": "Y9X7RqNwoQZDeNQSsKgAJo7foy4HGE1FpUvRX1WjixrDaqSs29Z7Nmm9JmgZg42rwZgs1BxgnAxptDBxfm8y2VL",
  "key22": "3kHvRWhH3KKSdt8JyJEURbXowarFzZ8wMzJWXRVL39Q1eS4kb4hH4YS7xiZMAHT1MwcG2Mfe4LJ7xEfZLbF4Fevh",
  "key23": "4BEhEwvrBeg8UEQqZNVF4xSpgarZ8bGd7zVw212PYk6zA5pRN3osm8RY9zZ9rKn6tiFnbMNqWV5JJpjhAmPe4cfE",
  "key24": "3aNctE9LWfS87DrrL3bL8eyhmm45vKJJqY4JSmssgy4s2LecYVk8A1dRYGscCVSJeKJiFzcP1oDsGtmqgHKrsWN4",
  "key25": "2d1SBLtzUx8uTqSvsYC3rzYS4XYSxxytDLoCeia5HdgK7BCpeye9EtEVuSi363CoWKwhSLJcUW5YdjAHWUPfq9xq",
  "key26": "4yd11eEouD1iqtwyMUrkJmVqGgzPeZyvFRp6pY6wAGMe2PnDXk3kkaqc7RfoRep3CMinecHsdeWGteaYiHrp1QZF",
  "key27": "2o1okUMtJWjqvnrvuzxtbgaXM3Hgr28qkttm9JUkdFzzJLBzrkuaXJWXUDqooCMXAkUp3wKsAtoPx9rF1D22Levv",
  "key28": "4tsYoEu8HfCvCVsQh8ZcF13c7wfwYnKpuVVQjV4uCahRctx3bvsHxmfbNAYJEpbNVJsHNTEU1bHk7cpUWJqtzKJs",
  "key29": "28phNYGr5pVH2WXHxJHNMeMHWWUtSeoMp49tQgomxgEH7Jdg4txnJ6zS8zwMKgxoC6am4x4BmGj77oHKYoae3DKK",
  "key30": "5MuX1M9VE2c4x7TYeMd4v9Upb8qZRuB6rUijeaAQUDgZ4L43daDjM2RSwdyBcX1tTf1c2qTpTVBN2sLwZK1y4NuS",
  "key31": "3ttW1thPgdWZZp52WjW42TKiUZQNJxatZ4TquyscAZV5CKkn4JvYQn8vBkqy4MwLfvT11AyJnKtfwu1SoVxDiJLR",
  "key32": "29RCstSocKL6uBeXJV3eZES9zgscPJ142ufBmwjZX8SzHd6ty4iELA7mSzGebapNwhatjtZkkMXm4NQpRaT43TEf",
  "key33": "2akthZiRbWduGcekH5GPrXnzCCMVNk19dvKeCpsatg5s3bPGtxaQvsCMp63C8irthqCifHmMJzBKFSGwrfTwTzDk",
  "key34": "2an3YNKjTX1oNCq9xbmYot1KZ2jPpj5oMiLfAMhBeuaCuDausAfwnAQd5z958BdPmC2yE5oZhS7PrS8kXMS94qZy",
  "key35": "2P6GV15exGipGBgm3Sx16jLwhMofMsq1qm4dJMwptFadefqGkG32dCxYVDdqgF3pWNhco3DbWsnwnyurYCMUEyhx",
  "key36": "3C6uREsaHA4S5yKnqpfksTEHAttoC4hNmucn9DHo36L2VBnG85xEEtLXX8hPoC6kEenYAoFoiqDzQWdwDjxRdto7",
  "key37": "mhdfGFzJuHSRVrJBFBz8jubyKnWRjbmnLQqE68Xikvvnu54VqfeVmxQ9ygQhd45TWiBHcb7TJQbTvMPzpghNh75",
  "key38": "2L42n9sb83222jzRL9sDhgT9fLSZ2gVmW6kKb8AP37xHGVPLCbmwftzDwQLK6xPh6PsDZjZZyXnxE8YgF3CjAhMR",
  "key39": "5qYtguA8dqRXnc7Sge5fTCY4HZJTo74VS7oiGv1M1dnkSnmUQkCKtvmBDebwfZxC5kJaqLRdeU9EsHXuUXGsohRR",
  "key40": "2kXpDC2vurfVAZ2JJxd69Qvhcmy62n2u5jYK2dqUm3518RKCfLv3PHaCZR2yrH8U4RXaW2HjMyvKfPtM66GpY5kz",
  "key41": "5zcHiG3wAPHANtMGEsrMRPxi3eGSTa4u1aFwM3JX1o8hcj5kJ7oHwqPS9o5LoxjjnoEJrjUswqyAQQMi1aWzcQif",
  "key42": "2DUjtFRH4Nk9cB7121nfSwh1jRcKSRLLx5ZY3a7zBNtRSGAv5tBKghGpdKFUSF2H42YwATNC5NtcModsZxJLaTN3"
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
