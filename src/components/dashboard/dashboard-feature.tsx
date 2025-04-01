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
    "xTLZgG1po92s54WMrxWHZgDRfUrFxiXFLxaqVFxDmmYZw1t4EbX5HR41rFYZaQB6Q175FAaoU9DTQ7zUUnc1KXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYY5xM7xrtmhhE53LFc4J1umSGX7eT7ZBP1Ki8HDC9otEvzLhWMXTVSuWe2AqRR9U86RuaKZsDPzd9Mbcx7sqFf",
  "key1": "37BMoyxwoxdq8uFznZr9A5XEADJcWhw7BMFRoD3SbzdZz8wLFyCfXwS6NagjgEej6pu4QFb5tyopjfyHfPHmTdj7",
  "key2": "5QVCZsEaTiz32WYMJeqHCQiUGBgKXfnfAnFpcKLgg2JScKHhTSEFJEqAVoPGxCawoYkcLHe85Bsh2zqfEYMoRCfB",
  "key3": "39n3pX4tXC95NhYGb1dGiLfoDUu8XYDzEEihojRhdEJQ6A9ZiQGH8qtfSLwUKTUCHjZL9mjE6z14pxTZqpFgQiiz",
  "key4": "4eBFsxskitaUKaxVysUnk6b61TrXwSsN7VtocMeUyxyPf5zMFGoFMDEaCPxoUV4Wmx2joVtAjmodY4sBMVr4DfW",
  "key5": "3JQ397RVti9VuVy8Tu4qy2NxGJFd1W9SUjT97VdH7b3ioBdUAVt2E8WPqhQvHMHH6SshcoosW4dtsuamQgNk5JKT",
  "key6": "3YkXyj2uGTBRhSdpBSfeYxCaziMxzh5XDCyoXAXcufeeXWhg2zaoEHamV8617CQYLHQ3ZDhzTiuXVJdq3GN3ogbT",
  "key7": "5V53DfT6N1FVAUvePDAUNN7Wu69qnwBFxW4heLmboghHXCHSAtxE4eZcjdA8STbc8UqxUAx3RhkkRpV4hMjy9m1Q",
  "key8": "2ewmbDTKXYgX9vHnhHEaLZnqntT1mtSrfbXNqZMQWHDJshedf1LtYQCnAmyS9jZK22WCojkjYJ4ADDQUiEfkoa42",
  "key9": "N3PCsecwdiLw2gsaPE5cdEhRUw6igALax82UoWqcARSJBoPBP4ZHw9SejJD59UxHspr4CZgs3h7PDYHF8QDD2bz",
  "key10": "3S88LkrUCxkR7bjYGt1uBqEkFjnVb3DapMTAG2kF2Ype9LZr6aT17uYcWELxqNJyYq4gBLV2hWzFR6QvvYVUFWaW",
  "key11": "2FxRmxufJrzwCwY5jerf85fXBfb9xbDWvLn93ZmUFtx7j8ZvQmpzT2Bo2m2FTjiseyEH5jM3njUySuVRY9BqtmxF",
  "key12": "3QwSoAsWMhkz8LxRaYTA1waL1dG7FCPWV5jCnuMtrA23q3JRZ8n13Sm87JJMbqAzKkjJN95QYzrH8RqM5XyTLT4T",
  "key13": "hoaDZPQf7WUDWSoScPjtiEB9NYoWnmRjtubGJiKM4J77A9URiNea6n2CKjWXyz9jepP7LQV9aKRnLk8b9HhSM7T",
  "key14": "4gzhYXuSWCdgxjYukZCdutbwP6EW7t2Bn51AKezMW9Hx6k33qfGcAnVgZ8sPabgjqrpfk3iV4pUaxX6iH2CRUPsQ",
  "key15": "icUwGYtoB6AiZaJg5CPYurk2GUQwpMxmfMHGv85osFkzDTcPyJBCycXmuDdQgKFxukvgBDPpGREwbvp7XsA3yao",
  "key16": "kvb1PTS5RFR3i1sjnKeFhTQf3rG7bfTsmb4ZEoSycjkZ3PN7MyDgpKwYxCfkSP1jQbKWebqLmNZhhmXAfEVZHsG",
  "key17": "4TfVQRhX8BaMYN7zkhKciEL28xrn61g6dhhAqwKS4GoGAfc4i917hcNzdu4Qt7C5AoTqQZtnHgJvERrWEasYFUn7",
  "key18": "4r6yrfQsw1R1FENbkXUXYNpig1oAuDx3cCdnpkBnQP8tohezinAfQMYko2QkK1KLpyf6sU9DNVCPUTQGkuavoPhW",
  "key19": "3DeG1zdDQXVCqEmaNUAjm3Bs6SCmJTTGwBLsewNUgh7rDssXnhSBnKErjExiMLyEDGcx151gzUkNVsjNFy5phui3",
  "key20": "5fGZV4r7YM4ZREzEdvbqfGysd1S9Q2Y8ftVVCVxaCEEdGEchLb64mAkPcrrPkiprgxf82KEqGLdUAm84Nu5oWGg8",
  "key21": "4eY5ryhcPM84bVAc1dR3BAJDhAMeBD7tzvQ7Cqd7msLAps1n1FVGX6o7Qz4kQ1no9coWtEb7MR8E4J8KU1ihuMf5",
  "key22": "5SDyNVtrcdp81eyDv7kagKTGDFaqebJNs8omvztqmoYoVZxfMXfZtbjoDS4dP4rAoQf3oEbdCnZY6YmxvGhJHisE",
  "key23": "86FKK99BgVH7pfJnHxww4GGS9NAPPxdE6Mpf9iPcP2zseebUM6bpm6wYKRTJawJLH4dcCiyXqFEhJaMpfDQTGME",
  "key24": "24RrK8oBTZJfszJsZLD8faCeUfHiAHnj4oJ2dqboiYKiBwC8JgBWA9ukyjGFYJzYNBkQ3q8TPQnP1X8PoiVtGvbT",
  "key25": "43xB727diph4Eos6KkwHHbeXEJJL9HntawMaUzFBJsaDGHENh77fwdw7fuCvzBsnB31K5PpV8rX9WT6FJWReGvW4",
  "key26": "26rcVLLoagzCqYHuVCEx7M5ucBbvx8PAhAH4v32HTmv8UCoFLMQmnU5LJDyEQtm2zmhsaj7sdThkZiEq2RhhFiv3",
  "key27": "2PrmKWcuDw5dhFPKoHYuQYphxdqpEi2gSP4etihYN9hukpDMpagupNXGHKzTqrzsK7bXvZcG3m3FQTD9XhQBQbz4",
  "key28": "2eDqWSWyanSdBkf4hc1Twz6zKAem5CjzwxgHtNAiTnRaL5FPhKMmmuYcHpB3SQSg4mApw8pd3UVGNDnZj7Kfjk2r",
  "key29": "7kyhzfNpRyBBjcMRTsedLBgp8hhcndZw268FBz63fLjtmp5HdwsSkhb3QZU5XrWaEGU1FjHSkcEEFXEYgvGCMEf",
  "key30": "XDeLYNnCxdfqpJmJQqXc9xqMDrtnWKUsf64hqBpqv81ErE2Dtkw8ydYwWnfF7XWsSnc6oLR1oFo4j1uCavEYhxC",
  "key31": "3KXtaBfSswehunxG8jraS2PVKpYBonjPdBXe65bbgN4GxNHmrTY7V1eyjTiW9Y1gDCHLJq68XiMXBsHwzgZJJSC9",
  "key32": "67YjBxZQGjXhjMCEDnkiRKQkHuJXn4bLXJsgXSN3npYyc1oBEcKayBa9F9gSyTrtzKtpXCZn9LDZsiapsLevdvw3",
  "key33": "3LwaUHF2VkcZ1EovEbufWiSyUudhufNTqToL6oLmZkByTyeNJrh2De7qqn6bCjEQKaUuz7x4yxUenbS9WhvfLu3P",
  "key34": "41g6A9WLxMAYZp8w3VkVdEFrh4xmiEjBG5G9zPzzFtm24MbsNTS3kBEpwZaDUaPbzU9eP9ufSqSRP6TAcoWRN7D",
  "key35": "3uP4vUZNEEY2CA9w5M7o5mmBxA2kBf97NCw7q22sCoWwEV2osaQNQQvYEUfrKjmMW3rwq1jcymw2QHw8rodgNPE5",
  "key36": "3mww47h8VBBNZXKZ8anjbHJ21EtMLsvM8bLfYr3bYUe5BgpqsVKpdfsbTNoukpXtwYMCPYKkSxxhUxYAaTDK91A6",
  "key37": "NaohrGRjyaF2TpStM6PYqbxUmAEPxuMEV4s9M19ZDMTQcb3RfhKLswqxDb8587V39GjtZu3UDg3tqbA9hSVP4GV",
  "key38": "5JXtjocKmVL1aokH2XawD53NjaX4o9o9zSpE6m8WPsbtPXVTgt6okhfc9Mva3EVm1ix7WEXHMyBVoEEu58GKyAN8"
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
