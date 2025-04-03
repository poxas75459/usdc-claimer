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
    "zZUM685D5DXVCinwNcP5DNbbCmwecq5wStcuUuf8kBqpMw4GDBLvcXYqe3eLk9hR2unF6TMMw57dqzRwMBipy3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wpNLYvnNPvf7qsvx3tWdn7PUmwuFe3fGSpqvSqRntRvR66recZgffhkTjdStoHbnYsPxNuxZF9zJjSUwqGsj8ho",
  "key1": "3t6hSyA74tgdMZoe1EqeaXYhbJ13f5Jy4KSNooREveAG2XV7D89LhuXbm6PBMidKvhjwcUfCQJGXkTkNZ1m5ZVht",
  "key2": "3noYC7bLCS5xavuy84V9BFoicqqqDtvKcYN4kz3wcGpXjw4MAVc35uivSQTu5KSL8DG4e58xZxGChruiuJLoNJ9r",
  "key3": "33JeNsbeB5zRaFr68FKstdnpvCcEJy78gbnERCaHDbUi7CjqPZRfxuRfWXofrPFi6FFhc6mZgDRHnS5UkN65w6fv",
  "key4": "5fEdbSEx9CjgZReLqbUsMysVzM9dwppwnzMrhNP2WZeJERgz9gzepRs1oMs3Fezqb5tNjPNVdsuUFTyrFHS2xzgu",
  "key5": "34JGRP43fQYLqgyNSRPeRwZzog6aeGxnJ9JVs5Lr3oU9xj1HGjhL8KcRMxpQzqnpyuAyuoRbW76dXZWk6U94DzkU",
  "key6": "2PyMU3GPrjqLSYcMR1Tyha1WYq4YM8jaRKEjjspt7v5hft69TUt561UxmjMGp2vBBzcfY8X3y8rpWTdEhBikHFB9",
  "key7": "GauAtALw6Dqnv2CGVvvPFDLWQY1VQomSyWK4g49kTJXNBZsVENmSVzRKVSkRdefva8vFmAeMMvUNCsBZwzKbYzE",
  "key8": "4UdNbek6B8f5JYwef81LHBq8A65XXr4N1MLwTf5rABsWWCAvieA3mvo6trDk8dCK1Ju9adMwDwbcRS3x4pj7Y8SH",
  "key9": "3wHFVpGTLf3V6eh25jxJBBe7JAUHkzp2Nx23MkXgmeLy7rrZqtPA2GpWqros7L37Fu258HntKf7VBLxM8BMSyVbt",
  "key10": "eSiRJvKQw9SiekKeGuqV9petboeL5Y4M9No8UdqYyZjcpRYohsZWEePpEtQqDPgAe9ueYfnZkC3nqASfKz4e9ez",
  "key11": "3HjAdc5E82RwUPSFkeM6mq9FQBztUVn2KJzwLy2f8YexrKRy5vh5h4BLPopgGcTyNqK75eK5qEuLaXgnoEowq69y",
  "key12": "3dFVVUvPHGdLohh1KQW7P4wYtqJVSADJMPcpY4Dw3qPbJ1f621LQq3jvH29noZFPWgQmZ33Qpyi7nygMP4fzNbgS",
  "key13": "2jEcSU6YaZfqPYRDe9b1cmgJzh1e4Qq6nzuUfrXXJwMo7qkFoMDucuNR1sxmo5KtZDTEo5BGeeRzWgVQnRhUeiUJ",
  "key14": "57ZJdvc4hc1u6x8VBcEXCAgTofWDSrqarWXzQxPojxM3oEoRQ2YCRp9tsgKfsQf9yEPsiX5Qn1fzWw7Bsyeepzr2",
  "key15": "5HVPKMEhjjuoQMfhpM2bWLfvyFkaGdBVAz9RhrLTNqmnzb24oSzLGVq2SqGDrMgJNKDywUh9d97d339qUkAbJ1Mt",
  "key16": "4c9jwJ4qotXkRGKnfkK4RHi5c4JQWtUtpHmv3pDhFPtVc31nm296cb7ZU7srAKWLfGFH6XcMRD1wzK6f6J5Jech9",
  "key17": "3bBPDUguqLLTtuTXbSnrzaQFyetiVVF8ox7EKRa5HoN2JwbR38sEWZezAFFp2zxcAgpoQT4tqKNXKAB6B6pvg64b",
  "key18": "3AaETHH9165gVY7Q2WbnoADwgrnDhxUi9e1wWe17hJKjFvWLzueQ5BTwm5K6p4vN25MWZCp1BxPtGA5n1Mrao3dP",
  "key19": "38N7pqoEEnCaxNsMNZoLD6Lq5vcZze1iBq6aN2Pwx61UB1UQoaxUYANWvA3mhskqNCNqKngUeLYC9D6HkRejNSU6",
  "key20": "43mfDk1rW5dH3eMu5ZEBsQCEDTR5TVWVQ6KbAeq56U3pzfWdgXq6ca2Bqabt467BRn21fy7YEsx3MWsVoG9U41Lr",
  "key21": "448wsd2yfK7Kkbuv3H3qmiWL4kYLEfkRxnVeDvt7varwBfku7gWga3MYAQnRi3JuzW3hZSMfhRGsoZbqMJ8eCCNh",
  "key22": "F3ZpN98Vz6fFn2BGwQ3ySJR42SDknCGc8e2KqkLkE7U8tz6zFpVPRZ7ksnZX3HdE5q4YvBSVpNF3kaHeWKAZFXF",
  "key23": "3j2rtSmwX2ydaGfSez12HqZcPf8sSiFRqP2U4XuU1mdXjEHgPEHaMWXft1hSWbWNuxykvpUFEwesFMzEYEn2YPcT",
  "key24": "2UETNAnDfiNACysjoxEmWgnuPf1DXk48nhDz9sBy4E1dES4rtJA4BB9UgWG11dTKvhLGGK6k8Muh4aTFxnsaRq8v",
  "key25": "5CkApQeYrHTS2sAZbwiztd3tiwXCAbi7WkKmMUveLWkGLZKvP2piEiAavMnwiAnH1ZVkFyxUrgoSCcUcnPe3DBmo",
  "key26": "BCcrbFnqqVyTycrAPa9GJmgUhyHunVRNmjEQwQHpvDAN95JzmNFs5u1ZRmUwF7J8v2Cmsyvfbz1dhDXGeQU289N",
  "key27": "KwXsWk26YPFxLJsHfbTAixCJEPmux4ER1b1Qa6Z6NVJrbR9ncSnLWxPc97KvJpgUMa6cuVNUkwEdqe3FYAHk5JD",
  "key28": "5FAwnnvNDs5mzMvJTrdnsFJQPDjtnw71q5N4YDH5vtbpg9Upn4JTwcwBaHe7kndzW3ooZspYGzqU78Eyo1kUijRY",
  "key29": "4G9dELWRUe7cRACuytmiVnCNS4y951o4wp2u5H84scwsU8Czf1pFeYhwWosKhQqU43s7qga3ELJFWe6SUPXa2aoa",
  "key30": "xNPq9kSprwqM77nciZjmDUef2dNDDfyjMxWsUU1BLUadASUhc9Ao19VgokpgiiUm6YwXBBuunKWGzkLYSGXiBe1",
  "key31": "5vd9gzhQuHBFavecuUWWKs6S68mYUpAXWcCneoCQyYuQS62UH7HToQPczFbZRckWuaMdVthveCSdt7QAnPaAcv5Z",
  "key32": "4iNKuGQ6VTowrNsbuMLvZCfEtiAguv9TqPz3bgtb62fqE5Vm77j328zGUnf6ZpTi3d2KwTWAj97Ta1tCGbVX6S9z",
  "key33": "5zybNzHJ5ETVDaxLS7GdfkKYeAbPmzsMWR5MK6pmJ9knJRnn4w7GiRhwsU7UGibJdk9w78UtfUkAGrzxK4Dj5S4c",
  "key34": "1UfTTCubKKJrSpHgYnGjaCMet1ZGxmBYrDs3TTgA3aKBbnsDQwuasgV5pq1DTiCsN2fEdbGiiGsxuiM5kK99tPG",
  "key35": "674VsEKmC9PaugmcfnkLaPnwL5CgAfFQmKPGcYawXybsqXMSxt9qs8u1GGhT9optKvijkscGNsd1vGxseTR2Xpg7",
  "key36": "na4FB583d3k3P3gEPrgWr9pD5L7juesidP9S7qafUWN8SqBT5bCyuXXfmFrMLg6VoWe5PjXD771yz1HPKmowfbs",
  "key37": "5f65tXf3Bn3ngsj5qAe3fFa31oWs2PxvMeykZ6T4U8C6m18CD3rvuVkjnyzCctWrujSb6vkTqJzTrc9Kz3ripYYh"
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
