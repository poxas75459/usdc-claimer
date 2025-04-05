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
    "47YsKd7wFNzFsKpaj9oP52KUhwTuwRceEmG8RPGXuiz5J7YrsmbVqq39Z1aDBPHPbDskDp6rSttM49vdLcFxYwug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXQ8uBiaFHk6y3awbZ6bo6XfkXWTzjjM6VJhaY16NRU33DDUQ68zTsYHfNQmMLR6xMN4ZNXnBNFu1NtYWZhtDWV",
  "key1": "3TqH9ZeQ2J7vSEeMRX2rhUeEPbLga6YM6VQ1pCVp1S1bJVAvN2P7drvjL7eSN7coNYN15dpYMFhd733bsdHr2xDe",
  "key2": "3NFFi2gVmVygFQgY2T8AJXziagdYX32mSB2giJk7jCTL7Wm2JLQD4in3aa5BonZjWGcAe8BsNJqiMEJUC8mGqPXa",
  "key3": "3turjzfaauM5zbFNJfApfRfWrdEu3voEFA7351UTpMnHdEwPYyeeGV8U4brhkR8GNN5p4DWDEdAJyznHBnvszCMC",
  "key4": "2DsqT2uRKT6b5m64Zg65Zjg9GN5Rjy6b8x2Sptkw4vp9YeXFoQECfg9KAsvxmmLHwSoC71BGZT8T9qXaqJsVYUQP",
  "key5": "3aDMbGeyHEwQJEgMbtJaTT9v5Gc8D8dFLUJ5nLW9krZJYwi28AVZv3xKNG5T4x76aTvHf9mzkDjtmPprE6duQA88",
  "key6": "4yM58nnnEZ2MtHywmsjDhGymweoEtmDBA7hYBu892X5w3iQr2NUdoip4CjG1YG7nVg8UTP8K4rrDYytubCPgGerX",
  "key7": "3RdTjw7oDPLjBPtQLSpDx7w4QQpt3ePwQRQ5kHiW5XW4UzVaFD9zXqKMytjNrhZafFBzLre1cTn2Vz2ynU73V4ZH",
  "key8": "5wiz4jBc2keRfNLmR7coW1P4d3GtBVBBcRWrwB9ThrwC3Vv8ubCw3GwWsrHgJ2Ro5eE9F1oz9SNjPVWLYg4y7c1c",
  "key9": "bMvrVBzE1mUtDEpvFpc6aZdn6FDZxwVKVt3AFpKuS2j7QakRk8YC8SdUCt625bePUxkqWAkHkvTLT1JQXajZWgZ",
  "key10": "bLF4HkTC2B9xAfdDBz5xCodXGbg48s1v2GNKwQrQJSDWdK7u1s5nD9j3emN5x74f1Nks2WpjtqGghBSyzVyy7po",
  "key11": "2MHRtFgNJ557DGVGK7dfv5FDsvVrL9qkXnfpxrsp4MgqCoW4Pke1XadhUfPpBt1hwPu7TmgqHyDSKiwmoNkDyhRF",
  "key12": "2r4cmtann9K8Sz8zC7NJzgF4F2h3Wvi6N88ej8GRCvUaDEktoEBpid8Y1Y8hyV4RTjYRjkLNuSmVLJYzLGCAUw9z",
  "key13": "2DeM4CViAZeY4aFWNFvdzbNDUiPXYzdvFJc3qNsuy5xkhVQr4422NfesME23kq78NxJ4rcoXELwivC8HYmA737X",
  "key14": "2CUEBcKxvRwjoWWBrrFvRfHBLi3ijBw3DyWi2UvaGHXXqs6gUMbadiitdouZ9fzqSsdE9aRxhw4Ubv6MnsVSidK3",
  "key15": "3FxSamkxiPhM3RLLjRez5Sdusgb5TjaxN91ysWqHMmds4JF5rFCNwtikJQQ1hrJyHS5qUuQ1wJLK9TsoDDW5AcTg",
  "key16": "4jEbRBDpuHFF7XmqL1jMgoYpiP49dFJ3nDHCDvacyMELVqT9NQmBLPzKCBcSWExbPXdPA21k4XoGXFUUse4KoGKv",
  "key17": "4dXMnkiLaVFk2wsmE4EHhGx7CZhngRX8PnJQuVYHyYcsf3dKidzcW2dbvgQz5mBcFvFezSCfp11f2ma19gzS6nUJ",
  "key18": "5xzCA4CCmULs2T5CHWrykpUJFeds61bpf9j7gF13FY6zaEnZUUUi8qrSEaGWkRsPmeSRYhf2UvvfDZgeuTmkXMXM",
  "key19": "rVYLdwvDdXxt7zx4FMeX7XcNxbNitHYi5pMz54wyJy739ZEVtHVLUJbczgdLeVxhGgrhKCs78VyzestETHV9rVm",
  "key20": "5eqMMfhEbbrWFVj9F8f71on8vGuzBYP4AHW6iuw6ZRHdpGk2zDq6eLfzuc9XkQc7VwyDYcnRUtdDLdmYZY3mR7R6",
  "key21": "4jzPTRjM7Mhn2YaTZAeEQqJDVmX5vYYMFGkeBHJQQ973offn8xXY36toGU7dbfDpsFhkTgfiyBYpWwBmruz7NPSh",
  "key22": "3Fs3aET3dwCuR7eSRYDmwZfGEeUqFF9gFZGPpZQwwRZrXEYWozkciWsDre2i5z5BgthpiubY9n8e3KdmginFQJUt",
  "key23": "5SURhhQAAkFjLABkbfKr4pxu1GsoiawWHp5MNuQARXRLzvj5JGmDbqHEXBaj6VCenzLK7rDakgscVWMqPLCpX8Gs",
  "key24": "4Z4fDsTCjHNVgQVJ9VxH87x5gDNUZKPvj1GW5nEo33w3RLNt5PFjZi28rm7u9CCSgs8ToXrW8dmnDFZuoKNunjS5",
  "key25": "5WWo6DcRKNpHW9Gx7v63V7uZLoK1WoNzvKJXwdjog3xnomTgfXLQ3Ze2VQYfCQo1vGS67geVKkDN1FMZQajPG4px",
  "key26": "2KeyGGW77UQ56kUrbSUVHVXGeCHjqpaTp1eQuphQaqFwyncGGhc2e4UE33iPwxi8Lv682W9WGNp7Fxhg5ooXJr4g",
  "key27": "5nLBvoeoaNyjfkFAqyxbZ8oatYJ3PfXeeKtjDjq2wR9o2EMNJYHryeTPpDY5eGFE997RTtTeXtQzDtKp3naTu3V3",
  "key28": "XoajgEtAJgbLw3jBdgMVFzociqUmNx8zAk77ahjSAAzxEVVKJfAxE4g8orxaMnkzDYxPLATgmk9txaeeKFVY499",
  "key29": "3a5cyxy55J5gY7JDkuBmuNrVFRv2fn4pYM8239UHGU8EjjsCbbns4vhZDbqL7s5RUSUHxgRfpBLi6Ao7zevZ5VV3",
  "key30": "5Vax2LYPLc72EmZzWveg4F97rp8n8Vx6taN6paDTqZQxiedGRKbZ7mU9yrgFS4Pp8P9oUQEkPKqqrJaRGbxdocg1",
  "key31": "2fHLN6mwgKADhR8sTqFbEMANvgWtY9w7zcTV9qZ7M6FrXvqfUixLukFGPx5svTBJrdaM5wR7uP6yYLVNFpGvLDQm",
  "key32": "5pCE45WE9Jjr3PSBFC7W71aoPmxtNoTUGSVrnuWpW9NgDfGG6vgwJ3hb8uKtux2JFuVrgh81i8sJPmgyH53nVDkb",
  "key33": "5n4AQz7TfcKSamsytRB4LjXzPE99fWiyi8sobriuYVVAZCfgxeudwShDVkJeJLZiPFFz8PuJg8BdUUf5bCf8ZtN3",
  "key34": "TbthptnCXByKYRZc4gdjcVua4rA3Y6wZPQMjdH9CMG17mNn57pkijAeq6KkdoxSTVGB8QnCLpEhoqxdMqoBJxZZ",
  "key35": "5X4Yx1bBNtLtKmeTTzZDghHNoq62Ke67syNEqb8JXgvrqdbFNEWfC5aLZ5pphmQSoNegLetrotf3xMrDYXyFRzMC",
  "key36": "h9pNaYPMQnP2ezyVkqF6ahHgxsBvDrWku9cbc3xZYPsGKsHBpg1sornFGVJkpvSzCuUKGLX7Yt5oBKMRtHfboCn",
  "key37": "2vuTq3zbRcYMZB1Sv99ZXP2HC7oDPgHhKDv5PSX1oxH87VscTdLnCbhTQcqTibsqkrDwSagnF65WYmCWBKJouZsk",
  "key38": "5ESn3QE9xDFWaJcU7jgev8xfjzrXE1EYb7MHrArGT7GoZVgoThGP5x4H12JVZf1jS918ZbtHre9w6tT7rr35wXt5",
  "key39": "4Dk2JaJTL89BBRTvfagfCPYMLK5YZouGXLMovJdpCwbSzVkeut6k6QFFwbyVRMU1r4HbNFp564mjKDtRey6DB371",
  "key40": "3Rncdn5uSzDNWFqVXRAs3QGieu4kRwQ5f2siAUt1sB3T8awrheUvJDjd82zyHdvSbG9udLcFGc3RbS1TSFo4AWRV",
  "key41": "4sb3XdP7Yk45cW9buqvaWmUnsocxvzTZfLpRvstFzoyKKyipG9x5H5D6M3wKo6zjzurwimhsVsLjYc6ncVKd7WyV"
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
