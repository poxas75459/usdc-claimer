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
    "3bsowVhzShYZtRv948WsA7AojBXBS3gUmh6XHDq1FExrEdueQqSA6CRL8xAXZG1UiVWpUm6g6x5bygRdHVrctx9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yZVM7BDBgmqak1D7zKb62nsMUMYS6uGKJgU2rksk5rVfbN8rCYj5tpobdBRpywF9NeUvMwYSLNfoe3EEY9ciRDb",
  "key1": "5jfJezvmFcchkNR81SLc4W65e9YShjwmhdL2yFbXqW7tGj2SzChdeqwxQL7nwaY7WwsBEPupDoAv4XcLtN2c91cK",
  "key2": "3NhETyY6ZbdVMdZGWPHQxxAghgg8RS3vBPS9tZ6wm5h2PfyxQUK3Ppgq3ud5tzqm1jwRoLqdFsvKCPaiq9cHFFru",
  "key3": "2Kh1AP66fQR9rE5ktZyDWutdfzfMjanNeXf9PsXQUGTetucB1FeRXGzBzmbHJYXkCqW6zxm1zFYgxu9cTam9CM1V",
  "key4": "3iw5ijE3vNcnR9FvCLWsVjp52YFZkTPMvNnEjAabAETZEf7dHVf8PB5ndwJ5WiVoswEwBHq7HUiAyLufY3TkDmCL",
  "key5": "38NW3KwrJNGxj4dgTMk6eToR6SSR1Jr5WFqkxViCzRzb7VvbmdH3ame9P9jPDXWChdBFT2TN1rg7yoU5WQAxfoSA",
  "key6": "51EhgJUwSr57Mj7G7Z4CZzw41LYjTK4bCiePMCkjvCeJTn3Cx7MaJGNXkvwVD6wn8fXfzLFTZ9124SVKUUVGC5CK",
  "key7": "3ceBshKbAFNpzCogJScEQL4B9xy5qoFa2u97cDmgzV9Sihp62UB4aHkafd8d3J7tK385rYeFDTr54phE83eoup1N",
  "key8": "1twv3tkeFGThPfdBrvT48mFajxrSDXu1sYqdwwUjTPcjdAUxRSWbGfURXFszgrp7q7GgrkuzD7bfa53PryoGzEo",
  "key9": "SxnSCxtDS7tvfZXxLFunUsFuNUiiRnZP8xEKwqKHDoNpPgs2GAD63WVxo9HzmnLNfHsVKnnX417X9d7gohMqk5C",
  "key10": "376CfVPKALs2ZX7htFM8hRHbfdKfjLv9Qve3oug1f4Nc95XyY2qz5TL1oCDHZKxanjit5Aao94RRnybHbgz2gVUc",
  "key11": "3U94F39odfTMCbqGzE2gvihj8evV2N4Lc82EeV1TbmcuPXidcmEkHXnQ91Ftqzmxp1K9J9hbPvmfQH9oPGsW2iGZ",
  "key12": "5rCCmwhZpZJebKU3i1bUbHXpTodqgLHm1auGr2aqc3aKs7TuPHhgAJ4RnGb81w4hPgWKxNetTreCkLKNBKUSxsmH",
  "key13": "3i2qDE4mH6J9hPGAbqd6i6X2z3PPSDzagbWzJEgygSEXK4bGmzxM1eJGJjakz13CcM6NNsY6NjebgGvXRXTB2Sda",
  "key14": "44iio8UGfYywrSncdjphzUxYLj1VT8k5FqUu3dPEHNN3o2P6Z9zBVs5EZzfcktwuxPLox8PfoWww1ME3GtVBsoze",
  "key15": "58zTTMk3ADtD9pzqSvokM5NLPBwwYiYPdD3iBfw1yiPZzy5vq322cRm2jcoZh47sPCfHxVDfQFZrM3hCKbhqedo2",
  "key16": "5E1e3CfHQz2KgVNediJo55jHZb9LGWiDu83v7WRMLjQvRx8k3wsmanpEY2jYB84hTkTQQ3Ex5jKDadUVxiD4SGo6",
  "key17": "3hXzrcDPbUHPzoASjgvdXFqSgmYiuffaM2J7iQyudCnTurvkPb5EXn4HZNirqjkmHa8Ptidt6vtSNUoabit1Cqph",
  "key18": "5gGGtBtxCyRMtHeRc79nHL69Le4BYrPS9FQ4k49zroRRzSUkCxmyxoRsG1ujcfPvTvBFSP6DDzeZ3rJU6LcRdXfw",
  "key19": "2CS8BfFEj4UT27CCU3T9RhuvGw8cYwGisvdDZteuQBAFHsZ3k7xa1Fr8iUr8wyPAoSzgZPeWeC17JvQEiCwbtqWM",
  "key20": "4zdPUyZSEw42THrRp8gnmLE7h3hqEn2kw9V7fbxoBLaJwQYNw2KcgppMwRf5Wg7xfsbY5LC6fZsSLN2ELqfgSAQB",
  "key21": "4ZmpY2k9ZJbBoF7m5XqULUnXzcpMA3ZhvYKEsDfGApSxLFQnS2b2A4zK1r9pmcUvnFS4W46wZMPEoaN48DFrV9na",
  "key22": "XLyMVDa5gkmeX17eidbwPRHoGxmMSJHhJGoXSeMJkwMn8kmXedPivoSLPb4Zihos6wbFdEvwGMiAFfQLfpjMC8C",
  "key23": "4mZxYhCmCTv1ayEZkB1Vwt51hv7gjNLbAZ3Jiyh5TriZRM5woLcgV6ybMWC5DEUaaYqNjvaoemvLewJZarnHAj6z",
  "key24": "xYRgDorkd4ibHkQQPFBLp5LVJQdXJg3Zi8YemqoqvSnGcGJJbqi5GkWzqZwxARVqZ9vygHFkKJrNpBiphVaKFNp",
  "key25": "2n2ACyvkwAiihN6X9nJKaTj9y1haY3owAjbdqZDRYjczNAoEBiHbAtw3ogUZkYvnXucgEi93KuokbLVEsVA87HY8"
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
