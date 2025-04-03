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
    "KASMPLkrF9q4UMzQsxG3Hb43bAcQex4BW65i374UpcDc1zVQ9xtbviPLM9WR9cyFdmRa2eHmbAMHd9yiCFH5aCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DB6FdfU9nt1TpggSoTgrgNNLxvH4zXsFmLCpDqEoD8iUCQUL5g7DBxBKtojZHAx7RPxnwWexzBBFPmwqiA2SH9",
  "key1": "5rbBWXRksUzurfU394Si2HLTWkgsgtAN8jdx1tQuEPF3c7nVJfRfdzTgUwhLqnidX6xDht24Ea7YQ4ohT2WvWaFa",
  "key2": "2odxPgRm6oaLUEHV2gnyoyZ8MLcYojo9hFAvhs5BigfAopazrXUUnnnRM8qXZZjwCLBTqbM4jq5LuhVbSnJVtngA",
  "key3": "k2vdja7N9ZpQiXEK5mUmfSsCybiaizmFRtDwiLHrcKnvjo2f9Qih7z5ZJT7N7AT824oU6q1gvffpnzdNwQQGoTX",
  "key4": "57YFog53svZ5C8MTYcBRjyUueu3NVgvqEJbwgvDTiyp5JPrr6DhxoV4FYSHuhdxUbxSEbtdaxrGmH5dqMqyddSi4",
  "key5": "4nDta8z6yjutDBMTQcs3MJCM1G3i9XfL43iGSPiGjP87qrYyeFspBr64GPBBFJvanjE4RsUhPHxCLjJmqpuzrtfw",
  "key6": "2b8JCQB4LWB18AHLCSkSiLQEAdLx84aLEjnKGxd5NQGUKPsidDP3EY2B5WKHftmKvthM5Pg4zHkaRRGaArfKBfAB",
  "key7": "2Lx44iJMWqhQBueHYtY4nxcykKTknYbndjGTTrZyNeWo6X7dqemw6CqJ1ze8HENL34KVw4cxoHNtyvL3fmeLQqTN",
  "key8": "5tj4qhckffpupnHNcgJGRbzeRDG5yqeRKLRfx7ZjBGohZU4Y5KnKkupiLcb1UEQJXXvApSbasULTD2fHyz6dDone",
  "key9": "277rtNPnoA3xQcecoMpxgxg8Hi2M4EHRnJPjqxbTzDpGTGXZYKPUpu7eweAsd1Rw1YtLjP4zHwYRj5pU8KVmoqM8",
  "key10": "5xRTP8kxNgouuZasYBZYMKFcv9WwehyeoyUWrKpagVNneSMGydTEK9GEKzJZsUomfUdyrBmQ21mTonqFkWG4PAfR",
  "key11": "2iDxzAt12VYkMs4ZWPD4JQhhTqzPN9CVcvsryjXhL1RctRNYHk7s8Vo8ZQt9aayZu5yBZFViKk1txgMw9EvcRT3h",
  "key12": "47FnUQooz1edCmfhyw6fVz7i2B3cJDZ8w5s6VgtfNBhtj6nKAa5XDEfUVcVwHeW9gjVBU5NDZZCLRLxwfMdJQSvF",
  "key13": "RWvq63YsRrA4Gn9Gwcz3oxuRHRM2Cq5Xn7oFjmnZZ9zvT8iE43zoucVaCBAvVtbzKzhX3ovsYnqxWB64joqex8U",
  "key14": "47ahkPzoZSTZrHiYvgBkpy9kkde6GaovDEbezPxZ7A8WziSV4d7B6enY8dgoGCQGEfTVabzmnpbnUMkNGdTCgc5u",
  "key15": "3yBsteREJiwyUmL7q59tHj9TJKeHLzdXv6KF4UdZ5m9Nfm41qJebxpXpErzgAMmqee8sB4x6qXtgjVWzCYLbAYjM",
  "key16": "2fBimbUwzJsE6r3RmxMMbMZvFdGqdFkkYy8DwxkKbUNDuA7BDMy46dJruTVbsD6bfVo3yHHEjTHRStp4b4TbeYCq",
  "key17": "4dUGeJEzXSTHmLoCeaokHopYtfd6AbBtjbWofM3r7yu7KV6ocevVTrEPEdqiWuie4coFE2vpbmYLxTCyDmq9JmkF",
  "key18": "4hhjnqZ3hF67TkAueUYtkipCfYv9dhDrmLisYt711keVUeZW5XzmdP3f288nRT6WVvVgPPyLYZRwTz731qLnheYL",
  "key19": "3xSHYQKrLtzZbA7NLHkLHwFKpSKUevhqZPzfJcUYDGoHKKr2BWBNndBB55dXsUW1QwrYmJpcN9hZ7bJj2pfqDAgu",
  "key20": "ArSRTjBiQSBfZCwzdYY2Hp2Tab3dxr5rBwwe5WvrqWFoqnrLjnmtrhqbBZhMkSMqSLzkyCL4dKSR6awdaHeMeR2",
  "key21": "cjtj29tNf5ghLrtQBjkQUwSVrTS4J9W5xPESSMTNCLYMoA82SMWgGrjTbjh9K5meTxknJ7xwvdZM3HHmuWk2xV6",
  "key22": "kdYHAKr9obBiwD2kYUa4xCoUtYDZFb5VBa6dken4LhsP73cTfAisWZKUSh2fit5mW5em4DsHAwdnczVU8pQ3nC7",
  "key23": "KUe1uAfMcSXbL672G1FJj5u34W9MPqw9EaLnCLoJ2munRkaveVfXBJAZpNr1mSHLsKQ3tb7NdKu1QVt6gg6PtPJ",
  "key24": "TTHbohgnT2ZBqmLxChEZNGv6Mfrcm1CY6ZQ53Am26j8GegoAiR7dcWs8LeSWSSmCLXGmuizpz38tLc75VBwsr9v",
  "key25": "67USTPfnYzvCfdJ2d8faCFo8oacgt6mQgrsA55cbTBCNGfLqjUVxzhtYWonei7oi3v9wFp7ScRd4ucL5qkwj46jH",
  "key26": "4SyCPt9iyRUachdRgy1nKnj8gdrhtQqd8SGXqWw43SeziNUuposgT5SxDyDoNG5dSqo4ByDMSGYYA6ahCHbC1Cyr",
  "key27": "4CW6bENJiDsVYc4Lduu3ftVQLCHmk6oVHFV5K8FtKaZYZMpMqUKzqc7F7e1GkYKjtm3FTAvFosCJwz2bj3HNNHFy",
  "key28": "UwnPb5gzbuh5dbzgTCEcU89wqkmE7F2xzr3oecLteMuAh5nCX6kdDuuDC61troBtALN1fA1rg9xNbxFzR4Ky2QB",
  "key29": "5gGCpv4XJarmrkfx8U8QwHUzPpAJgVKxACBxUxMzkBVf2zpYKTaBePCbABX5pMwTymtoKJtszRgboPvp31fUrVkG",
  "key30": "3xJWSiAQVDrVwEYRN4ou9Tcn7CsLTaJKae5BRNmC77aajqcyPT5FuGLgrZsbjA6DpuzC6FfQWZ69vxBmZ6y8vcTe",
  "key31": "4KFNLotxoeHpnZmLfoyEe2w4d4FMX9bicA6qLSz4UVqG6AHpsm14gKivn3JckvT6u3ywn6JXZsF4TbE4q7XXEYWb",
  "key32": "4xvDkSyp6iHSUZf1c2r2BwinB5SUL4cfCunjtQZPUrgXUvNKQpiV8oUDVXa7eVQ7UAfG5bTMMMsHodaAazWnmPPS",
  "key33": "453PoRCx9efx2k9ZvLpqvvB3kqfbtAbhW6ZMTtdRnp6ni3hKj1m89gssAtXaUMs24PHHxLbZPUtmk49iszDRnXJk",
  "key34": "EmZmzJf4eRhnZMP6sHb7xJ8KbEUct3Vk6LEw6B6P8hihtFce6Kj3hDZfUZkKv9nNAg1EaLBVg5qK7cGJrmKDkbY",
  "key35": "5yCgh1eLeucYEVwVG67jMoHDcLwnx173Cd5T2BRdEbM6MMbbx2iQvgU6Q7b4fiqYNjiELEzb4ZfgEW9pAeiSH9Pg",
  "key36": "41HLMc8Hw7oMBNmge8qJYDHzNjv2qvFWwSapGdmKT2nVJrL2NxnwWrpSDsF29pkWtgZXYRBkhpFf856my7fzgUJY",
  "key37": "2t63tEPusBt7YhGXsTamk9WA1FRqVRH7aGNAEWtJK9emRubcM4fsifAYwyxfwi1g4i6qaHTg4H6MaWFvoi5JFbtT"
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
