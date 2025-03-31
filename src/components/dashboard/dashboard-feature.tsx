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
    "28CuhcLy2JnfuPWvEMnqXC2cE6nWLEHXpgeSoqedNEcrQg3NZC3d1kfZgfsLuhRGgwf6nGhkae1TYsvc6Qu6Gz7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ut4Aw3ppP2J4jdVqhccjAQrGaf3CbxCwiVb1fk4dQVdGVtnDjg3pYz9uGJgQHLnHwFBh9aX94gL7wLs6TL6wtZw",
  "key1": "sY9M5R4ZnFFL9QdjPHPxJsEk9YyGMfWAzBYmqxM3jgVmqiuePqrN7vRQ7gbdNJQqtF66Zy6unFY3LoW2JgBvggj",
  "key2": "2wMEwpo4e1HyCXUpesVb2Y8KfFrzSACJaaBi5youXjsfCvBwJ5uLGKjqaAfxC7xz1E7PFYwY8bsofQKW3Jz2YCu5",
  "key3": "hBiK6uLNC4gzLWxpYaNtiDwDdWDP2CGvzeqRoznXF8TyyRk6zcQqRK5SLMHV9acg6Vne9hir4HJa9H6SYXiWTyZ",
  "key4": "4xiNsKrAB1FEYmdNKBH7ecwLZU3dpPVVC19sZRQmkcNYYqhUVzbmdKz2JJNBTz34DQ1jTvU2BCinvjZqZdpfeP99",
  "key5": "3aY88JtfeGmGJ8ymUMHjZTTNUztDTUU9RmHnKkuxx9ddsGrQF7c6959zRfJrnhti11VZ76mayuVaTsaH1mVMG3p3",
  "key6": "4p6e5e42MbB8oxLCBYLt6mnbqy8kgd9unnA44fxpANoyQW33aVbk7sZ6zCfee31d9s1WUTo6X2PUvz969USyGBbb",
  "key7": "4FVAs36eFrUntCazaSADnDjE4dsGsUmnX97AKa95ciQhHs9h9UyTDKiVStVA8ETH5JnwSXcoFpEqki7VJMpjpFjq",
  "key8": "4KydkBLKiuXQa8QXNS8H2BFRtfzPTEsU5THZSXAGxuERb4mevhvF8GDNsB1jrJtK6DVw2YNwmZG3UyCjobuiuT56",
  "key9": "3gk1ZB6TTiC6XA8NqLshdSeyHbPiahZ5r1C6NgqbPmG5ZG8XVKpaqabWou5MjiVHgNMi4WE4W9njFeQCUQpLxtDv",
  "key10": "2dRFGW1qm5fthFrQ9CqqxdoKrgy4eLxVqFqnZVNVqiyudmcEVx2HaBrvH3orUMibU8SD98x3VZRL2QrsuuWbhjwp",
  "key11": "25FNAaVnS7WAAf5b2v6AueYPjrAQnNkmQfhCC27ypAQDcmaAds3nmiDc5MUEP6LawuyQzHyRRdjhgqbEtzZq9Xue",
  "key12": "21Szd7n87d7PVZYXxj62Kb3eJhL5n55DKTip6AczjjPCwdzhv94b95nYFaHyJMbYLCuqLDVxe9ckrT3TWwsW9Si4",
  "key13": "596vcywHUWF1ttiftX9bjGTuerasdBA6DfSa5WLuBrHUZUEru9GwgeEH3YWXkZs1vuuEoWwrkAx2r1rnEdxMfbhp",
  "key14": "cXss2mFGoB8uxH9uiMTZtkNMqsKVbLY5np2QcKF6Ru5R27xDNtWQN2GMCHwSjESo4Fbv94eT2QQkC8RKKu8Z3TC",
  "key15": "4hFVFum28cWcpWgC7gUbKvVPVGE3D9NTw2WSgcm47untuQoh1MyAS5HmtPbx5djLM5ha5itQoaxAfBp3dubtZSrN",
  "key16": "2uNr6bEHHVzjHbJk5LdjyH1SGFNxXjGhvd4kAKEytuq83yT43rtz2nvGo85SD8nWJfyucsmUyLVgvpvmWx7k8RCc",
  "key17": "4tJERRAinSjDLpoeUHMeN16yuqYztM4Qbd3Eq8nXNdu8W1owjDtvfYMXdHEebiyNTJN4oeoe9asN7GptPsJngPWP",
  "key18": "3XoHm7TB8ZgC2DMMqjJMP4CdDAG7q5kVGf4CaMFgfukJmB1yJ24BrXiFm29mAnmz9gHpJLXQjALafw1xk4NDsnWM",
  "key19": "r9CGRJFnEoXC44foH5sBHfDTGJbf9uefjyM17Je14JQzm814grzqtvpyQNG2ZZ7d6fdExD5fdj5ca7uoq7xx4jk",
  "key20": "5XUs743RRMKcnycLDV4NMGDAsC34z6vHMnh1Mmb8tjq8FGdJfYEYQNRBRkiT3BQEKem6PfyFr7TnFCgxjSpi4fHU",
  "key21": "6b7F1KY7ptfvL86gxKkiEWLtkkEr7bAsgz9oEufx2oppTFz6TNC5bXoEz3QY6KQMtykwRpgaUz1t3ezC4S7cQDD",
  "key22": "3yXq5ajP7yqNz2Td78evovki4fxVX63K67eK5AqTfJWuQwcAS48toR2nQB3EcPw3P6JAAqppwZ5MHn7Bryk99cn1",
  "key23": "3BYfchNauFBcg7uRJSTYjfGjZqXy889EHHmJiWzDnUdhHePStmHEr2kk1kPhf2aupasrpq7EYftUnUA7q1WyNAag",
  "key24": "3wBCNmZqNyDZpKmyAu5a5uy6xeEsW9Rncm2JnoggDc7cobYMriHRas4mdth9A2HNQBHs8nV6mMeVMgsjgTyqPrZz",
  "key25": "4UVD2FtY7AA8fywb3dyevuHa4emoNVwLmfkcmuvGqKW2v5vKgGWzxfQRXkdKHKXo8x6RKGoAanGaDBGGKqUZr6sn",
  "key26": "iLYDcoCG2w7Y75RkTcaoggjm1pYGtu7iZCdyKy1tjPfaptcaWsVecivjdLRcEMnGiGeLVtiABnA5FKbNbDtkjra",
  "key27": "5o4vUjZXEAugtzFeUj3XZ1wYtag1zHankDDzUySA45utFEJXFYEjYpQsSGpE6UvfEVn5QHbSo4ANNv4TXh8RNCDc",
  "key28": "3rD1fraVhKcTfrHBgwFqMtQ68RrjgXMxQNKLK7a8KC5Ym7t3WkQg1QrTsPg1b9fektZkHGsSk9yXMqQgPbyeNjZu",
  "key29": "5pZBMzxeKfgaP4p2wY8gGwhb6PkJFv671FLsXtFwB9rRq5Bd49UVdvzRnwGGFQn3LUnUPSgTX6LXW2vNtq4MwEwX",
  "key30": "4npfAD77t3ZWeJU8hDRMxKViT1Dr5VqNemtTvuLqLn6jcPeZYikg2uBhFrq6R9oZM4i1Ch5XquRE2keG7oW9KZVV",
  "key31": "3pYy7FmeEnvnPDcjNtU4DDzHk4oyypQmJVUuRxV2ZFHk77budYvqKmfc2E8y9HzommTvxW5yfDpjjhgaGshcor6b",
  "key32": "5fZ9umuhVU35tPaC6onjka48siSFCGrcvG8kMotcNJtwhzy5G2sv1XcrZBi65qm4F1gFpYpt35Mrkm9F74TJQnpx",
  "key33": "n2Ap88XcFxMacwJnVmy3nzSjNeDqMy9Hx9xmXuPbFfVbH4K14gTejT121k2ZhQpoDejeueEVPbNzvg22utfaZB8",
  "key34": "LkDeeZXYYM42ZCm458egzCXjXqw6qd7HnbzimzK5BvDVWHdLpPZnGZGgJyfyMDtaa7QWyTgLtnDCbL8BJAXCiPd",
  "key35": "3WygyNDsFEb37MGNqmi5qZD6ZsBwrm7KuXxuZivbModALgwug8n8j58UKrsFqT4ai8ZtyWHXXQSRu2VQhYdLvZGB",
  "key36": "427L2k2KVHTnadYY5uqbrmKsC7SgjQzBaPgKngHD2fSoCDncys77qbKDYTh999Vz5nXmEZTCqtLMEPL5WYWMeDUH",
  "key37": "Bgfo4A8ztB5EYpQX5G6z6sDNKU5xabzfypYY7AfvtGRnfnJA9isVDKzBPDqc4UX6eSZ6fSxRVJ2G3r5G5JgstSi",
  "key38": "5M9kaaUX19F9Qfuquo7Q9Pug8eiSyHS4tw7hPAHdGXzLRq6spChr8TCevVm3GvGzhvPvxHVdfYNMFJ3E8hfPzsAa",
  "key39": "3GqcLhtotm88e9q6opSSxNmrtVgiGGwDbW2PLe4TogN7GisMF5DhuTTSRgov77Rj6UUtfwGwXEevH91EHU3qKp9r"
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
