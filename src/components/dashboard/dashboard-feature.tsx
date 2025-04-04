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
    "2GBPWG4sHu2zWfsQg2KyEfg1WHFQiiWcAQm9TeBDhVaKyAd2hvQjAobeCVRpnKHu6i3Yg5zw6MxRjoScpkpVFyGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7bbCivaU4c1fqEQNtyQBAvgbB19GwMDvfRMG869H72hbEqqeCSLRyu5y9uBDj3gMAty1jXNXvHzchTeTeEyZq7",
  "key1": "5nT9Ch95CKcKn65byDckgAn1gtbGjRp5warRNgPB58WsNAtrftoFfATMYdRMjPztrq1zAYuU4S6mBnMvFRFVs7Un",
  "key2": "z9s5EJ9btSroBU2zKwPqxsfrLHTk9ib4BZzZSGsYRGt5URv5jAQXXwwvXCCeXz8N6nATWEyWCoLjhhGgEjBX7QG",
  "key3": "55JjQsgFZw4yxdHK66S215aM586XES5mpuJpKP9Yyvf4N2CeB2W4hXCSabsDXDmHUaCKLqJMbG8XrGPiSSxvsvXe",
  "key4": "5MhmtZ9mN9fpuCBp1gwh6RT6VzyrRkw9aRuhrQ2zR4tdRXs3pAzb9BZDsN3fKhhtcD1hzVdeAmmDbT7KbwqFvw7a",
  "key5": "4GBsrKsH3JSEEcb8UdH1hLbGm6K7nQVXVb1e8f83tfKszcWo9kcPJxvKeNHUzWEojRaZcMxAVauRuG87W1qkAWQV",
  "key6": "2ygNaAQok8hsuLRosxdsAfzWKNLxjSCwDn5io7mFVUrMwZGwtEGT7CdQaESdXYV4nB9sTC441QwDbvn6bn9WoPKM",
  "key7": "4tyzdTELcaJAjcvm3SSAELoVTzaySLzwzbjdvqTXZYbqxSeVcsGFXZcCxUJN42cT7497S46opgPVNQMhsAnapPN5",
  "key8": "DtjYZhWRqnhGGPJgr2TjKLcExa4i9gzHX4RUk3UoLVP1djmXc75bmwZRYyddXDizSyLMiLcxA2objzBUawvqtKr",
  "key9": "ipr3kce5a43Xw4eKQHpT7T2Kvd7oWLTcdGe2K7WnSL2j4nsQt8GhfUTzjdgtV3xSBLJ9nkgMeKYJJVf8v8BKhTH",
  "key10": "4hwytB3ccVHB2mMfmRS3jjg4AZoxRVPkW36JoJywhwLveVDQubjoPwb3LfYFZAAB3tYKTGNpk3jjcGxavmaDMz8R",
  "key11": "2pbNTy9niUjCp4qhwP5DSi9jyq1f7wbS2TvUHS1T7ukv7VmKcBY2EpAPF3k6SQf9w2dWhfz4Ye8F3oCZejHdk1mR",
  "key12": "51qCJC6mXjjySZpWQ3ujLuAVSEjXG1L5h1vjwmB1fH497umLceXHkM48ttKdsV8C9W3Q6zbSKqNbpUbUM8PK7szE",
  "key13": "JEmXkvWAzi4gxU8GkWSzjAyNM3XpZEfpchhHbGobC7QiSn2qenEBWgajtPSZGZRH8zvTaTMXZVysRXqnZTFuwVJ",
  "key14": "v93iRqQ9QpfTx1m9AVuycNBDTVSAAZrcwohqap4XfUmwxWaS8AugGLaDuagT4pAojPLExjTJk6diVJewVWBKcKX",
  "key15": "GSJikGvyf8RAMEutLoiTb5Vuv98VTcWKzpsg9sX5Rxz2EfkhddRtv8CBZFYvPXgCxFqJHPwod7yBF6w6Ugi7WVQ",
  "key16": "4WhYB9JxKxrHesqPLZV5526U7bocZyx1Md2m3iWUaArwKWRutn7CyxiyNC7brQyj56MeCS4f5yPMWMixJzJFVka",
  "key17": "3RqUCGf5kn7yHn4XGYP3YwErAwox6Q9C8JQvZed9B1BtDk2Mzg7GtrATtZLMxkN1Mv7TSARUTy2kidAi2dghZbpU",
  "key18": "5tnMHdMzMsTB5CbvAwZJxhw2SCm7PkNWmfYqBmibryG9TY8hszmV1hKfFdv3P18DvEYBxsNqBEZ8rpZMmBqGVSoL",
  "key19": "5v2Uj6Efs3bUQMWgYuYRrAFJGC3VtnupFrKGwPnALmseJWcdgEj7L6mnhvrABxFJbWzr2CRGXE3pKVCeF3nvZLHE",
  "key20": "3kW52dFPigJGpG5UQoXQXc6csKcKFvfEx6qPKw86SFN2VgKre2b2T5rEghkubTLVuBoehZuGUTKxUZvntmLkn1YE",
  "key21": "4Rcbkdr1Fi5ErbF1TJi1H3TbS6t1QpsniZjUcVHvMmVE4ykebUtaUjPngE1cCDZBjQj6daT33NhTtoNJBJXrf6DD",
  "key22": "2vNvF1FR1L7KfvQ8Yif7E8g64f7uixzbUFoDpE6qzQEYU9EACuusVWnM125KYxJv9wQRj8J158HJ3ApduG48WBjo",
  "key23": "nUfi6uNJfMqkSZpbdi8wvp5gdk3FeNobU9uyhs4HcQ5Dz9coLadmVKoqJxgeyRd265VXEzU1mt8nFgh2yiPkRDy",
  "key24": "4ChLcf9eBBGzpMECrbEzHnVkzyqjKmp8h91imWPnjSjLZuMvfpt3EvVFQiAqgoo3Zfdp2Q67rEkS4ws5zBP1wwvx",
  "key25": "2xQ8VBwkmGUbfCEB1MBTpGmKns4aws2u7QH18Nxhoa8ceDV71AnDBgCG37RR317wgw1pWgrasRydRU5LRk3JdU4H",
  "key26": "5pt5zMGv3uJDnrrY9gK2X68YqjwnzW25NPywks8eUNXhFYGBbRHXJmJL8bemNPhfTckWU5b5jtm4uAFqsNP2ktWR",
  "key27": "1rKLxxfCtGwesgXHLaCTmPz4QmnZZLMP8HNMufnEpDFry9Rgujq4fewvMbcG6z2ir1WpfqKiGaPVmo2z3ueZwyf",
  "key28": "3NtMebi9yzYFvx3GW3FnV8s2jAyeVjFvtRe4zwGX7zArSPg87rXvinupo1Yg6aLTnFecWP8GGdtPt7pTSKZUh4QN",
  "key29": "4FL8NhrhfWR4GEAuuVHPg4d3hiytcLx9Ww7qPFfRyLsNwGYKDuAhVktpE9amK1aKitEW4HaERNq1VkqZcS29hEwg",
  "key30": "2kVVMNafPhYQE4WCDMRQnjqqsScwMDUrHXD3JNcvzgRd9tHCCiBWAJ5JCkyhgiUUei2MyJr76WnMsskyywYp44CZ",
  "key31": "3qZwJVoviK8LszVfFtoTaSKwD3giGQ9WNjbHbUHZPSCingW1jwVnsveA1dx5qLKyQYYf4jXrVr7ETfHGX7ACrSSb",
  "key32": "3WVS3eZY7FjkisdQ9EroV5iHzvrMXxRN6Hctzkse5LcFcw6oLEyrS4MLhritthBHMViiqKd7oXqCgV747dNn2svY",
  "key33": "3t3SL86PEVkqDdEykpu4L5a9Rso2A1N4kE8jjXXE2Yfht1AUdoFAH9QHTFcjWKT91KE3b1aMW75nTsz85SwMt468",
  "key34": "2P1morux8WsVuQ8XKqRBCXksWauofAvRAmYbhN5FmGXSEUqr4rnD5YRsmgkCH8toZHidrsN2XgkpJ5CQzPkNjLov",
  "key35": "2jdnzLFADDR5eGzGU81qWXDzMFkp2VKVo5h3UY6WfER5oZX4CzmFYw5ZjyzCuKp9xqNsBwi6ZPqQs56NtGZREbmD",
  "key36": "3EJxSTNpTzpLZXNMthV5FrE6FnVyDoo12gX7pSZXuQLsgMg8nw3L8fLPBecHHs9vSmMruDne4r7QhKfuaZSpSoRa"
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
