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
    "5ToFNb1bv3JrGNurqmRew7daYi6bNTzhgr3qiZrS2NzATDxtzUPHfCAmnopa65ZhsbCo4KBKuWvuTyAcZkc9Nwtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUDd4izT7pKheMNo8UfAr8BJijC66h7efCULaAN3G9zdaQunDdAv5o8JoTJY3pKGWAsoVVDgHnHH5fJQefxNuEL",
  "key1": "4jWUjhLJsj7AetHFtMKkJwP1xXn9Azo5tGUNCuiqZ1WxDzE3PXYEZrEnVWKEazCXNY5xJkLBnbfSmGswqC3Q3mBv",
  "key2": "53LFGmNKw518xC5wNDfXoh9mahUvkDtSsNniTX2mQ98xgLCASq36rpiqXNBfKvGFn5gBx4dYrrknqgwB6kH3QY2Y",
  "key3": "3g7jxyUJVZHdBCEnHkRcP1jzW2VGQAzS4cPEk26KzaW8FEnE5piNvHLZ8Kkf6kBJjFhvfNF8amJTaubKHU2XXmcS",
  "key4": "276GPyZeGkY795Z8G4AkVjwB18gVtVAdXyg7ZGJC3RTg9FxJuZsMxoVDCdkLjBrfVQKRi9Pvfw1bDAWET4W2piGH",
  "key5": "5oeZBVcDLa4WAYXyUPt1CqmE5GhSWFGpm1saNDf4rs9AeKpJyDuN1K5DgT9CuUs5vZazXeuqcjMkLWZ41H58rZLq",
  "key6": "4ULUcL4vpNToNwYhx7ixtyksd3vWhMabxg8pjKT1tJWk8AeP2aur2JzuqCyb8khD5AXhLwhY7dmt4SSnyKsTDoMh",
  "key7": "4a94jQDTzYpfCTxbhF9N8yFCFWZPP2J1E21rk9zxtAykH4Fu6sAhe425WjLzZhhg9MRso2EAtTLp1KdB2vyGmoNf",
  "key8": "67CxJqmYwWhYXX7HaTA6LqPH1EzAtQ9XtA6ce5ZF1SWvFmosAY3hmDX2ciZnqv6tZ4enAunBbnS61nfTpznVSiNY",
  "key9": "4Nkzjq579cZXQcKRJYBBJe5QKNnCy45CZNWjp87JJDQpR6gDkBwuWkcMqA6eYmrjp2V9rzwxJza7HiGutC1nEBG3",
  "key10": "3kGxm7vQh11SXtmmi4T9jz3cNAxPd1hGBZhoRFfBJ1SMxs7sJSYCyWmRtMpS9BjQyvZi9QhT38dSNRovNiwhLtWN",
  "key11": "5F6RUC44SmmhMgnK4USJrwanQV25RjJ5VnRExwMs4FUBwTW25yeCWwBwZhgiqgwyuWdy712Z6scDG84Juzo53WNR",
  "key12": "3HtQqQHe7zfyeY7ZHJvcF2LXsFCmD3QzX6WEAdRq7AERcNpHNB9A8x8urLPCKQqPDHCBarYuAeEnqFgS7NVxmagP",
  "key13": "4kB2k5vfNN7cFsN1GH9jJeSQZi5NVx6opeDUAQQFgmNzwgSxurdrBLUpHAqeCSaNbWoJgxF8KrjRRjdFFgwvxwHU",
  "key14": "4PkuFpXPQEdYidPYSySt7jsi2uSXFQBMXewMSuKe3oK7G16MVYfJE2k7yEXHVtVFEHP1g6oVk56x3tfGptPNc2kE",
  "key15": "kQfiUkdeUxXPWjo74oK6xb9SAUnxNHtk1RHTfdFnX7DotwNcbocySLu35xgw5y9dPPLNZuNx9H6LZhTpkEnF7r2",
  "key16": "2Xi19LTzjKYtuWVBj2XjU2h52fXTT2Z5WVwQYyXQXnouM5KMgtWCpPNCUN6BexTG1c4ghmAdrwEPM6FUw14kaqjD",
  "key17": "625rii8QwoCwp5WVqXwFs8UaPKP4AvZZjnZW43DHneve9sDHptnZEPgogAGkiB6jYzatTQULoj3Ja2a5X1LNnTHy",
  "key18": "3qD7gcWJdZQXJ89JGJWnrzeNqqgyry14V5Aex8mMqoJZFUpALj3Awrqt7wynYVdNV3vAKFQe2EQRu7ygFhj6VXJ9",
  "key19": "xGtvWJQJebN1kwVY6PbTsvvri6F3vQzcKm5NPMg7QnZcsVzSJJJi8wXqNaZ4JQ3RGuAwVG4bE2yEw7weCejnaXX",
  "key20": "2ScJSbLH2QQnTt3nVzAhQqtBratnMuBChU3FhhbpX3RsPkTHkDjGkyqBDQU52rrSvo5dDtExWbz9exqkVXrmw5Y2",
  "key21": "GEQg1ujLjj55RUJWuWkcNnbw9pzfkKCkTLniWfnZ1gw8LieWtS3w7jDjw4N8rNSPbM8nztKVPsnDDifRrj8Yuts",
  "key22": "2DvEcFc5G41t3mz2K5ray3QMvW67NhNPfZiPztMVgEtDk8KRvUcS5qzqTSe5QfhWMTEMad2AfvKHZZo6vrygNv7H",
  "key23": "2ghHBZxaC5rQPjeooo8NGDpqrN5vKdZR2XRgqCVGBxyaQGAtQmqaYts6wsxvmLV9xFu3FBDympdos8hr23Wr3Mwk",
  "key24": "vSd5PL1SKgZAyzL8tX5JQ3Z7Ughrk6n9Hsm9iwicLqbdukeNMA2q7NVrwqAWBbND3Q11CwMbCv5dwqX9FQfFnyd",
  "key25": "5SkSu5FUHJqoKM8RJLe8EfLCh1VndQugAFiXRd75vK9H9KrDz11qS9dmHW5gdVubtNXTTe7aAe9ZX6SvPxfyWC4t",
  "key26": "5N4tKSAqyKjd5SZG2oa8Z4SRJiwvVDqSGET7A1LxWqyKvhbmmerYznWQ8CQNEHEH39X92g2j2Tx3uERRQVjnoLK9",
  "key27": "4C5HahBHsHDhyUXExCMrF1CZqCMuA3deQMi5ik2pMP4GEc7FZPPKRYwGDrBYhbMfwM9dgyFMiM3SFKiESpBMPfJR",
  "key28": "5wJSviKR3BmqJFExeL9Vf69wfAytzJowDmAgG5jHE1AsvXxgYN7oexhrcQ5wtyNHNFAy4kMDmVoyyGrdAqwSB9gp",
  "key29": "4qzfV29N6T5YTmAf7tURok7pNxJ5Uy2X2yuzXKmJ3T8XZDCRC4c6C8fgHqmTPXhSuQEh8rZU4htBKXefYxVerAaN",
  "key30": "32xbEdEf7TEW9Bm1wUqhD9i5hj7vMzPK3jZktUVBaABFxp7R8PVqwkk593nHzP4HayyUF8DMghwBsh9purtEqHZ5",
  "key31": "22u3eydmwVMyjBsP44mmGfyRpNq3tRZWTShh5HsrdSsAyrvA35LLawczsnqrbLNMiG36nuoUQB11e2apSo8pD2kV",
  "key32": "5jnZLL6YeXEqZFH12e6J2zvuo38q6TuSLdFU9oXJasSQC94VdxV1mb1HcauXazFfJeG9XTx64A51QkfrFxZaMqT5",
  "key33": "5rh3gTS3dA8dDupow2DTnYemAeFtzyhvnVAymrbYcVz7bmNoP5MDsAFAb2wJZesV9RyKj8GePuWWFkVzbFNcdoyT",
  "key34": "3gD1tZ2nXVghbcEc5xVFAEkwR5oe29PyUJKrbB24hNTpKydkwZuFoKXnBwCAcSf9GDWJ18bzZQDP3UAXGJP9GbHL",
  "key35": "TRwjsqKESay3AbWBYqD7gtZk1imHPvmKQsKqTwBACEvZS4xGKauocsdvkXKzRdqjbBUXMksYSembqJ4d74bdBqN",
  "key36": "4GLfxfQryrxZm3XjxD3miPXndxovDmANdNfEKMmdjS4kBAa3ihyv5pebyyGoHrtwU2cDqpLxAjrxn9p3uVn6piiD",
  "key37": "63f7GSQ8vgAj5KXVZB1pmXL1QRnNvwihkZcuU2oyiVWyQjWaHKK3No3YiwpKzjfa8sRMLyy3ce3RVCaPpMHJd4JF",
  "key38": "45qGv3Y64dsSLxcUni4CHhKXJnQPrCGu9fKnoNwDAY1VNzuMSQPDi7nJ1Jm2AXVfqdmuSvr1Y9yA9RL4NFHEcTj8",
  "key39": "2xCVNaY3tXVBBMUJEuo3riX1UrhnjGQessTUA282qKEWSM3cJD5TMuprdkNhem621e6nTrgcSLvpfaraxfPZiheG",
  "key40": "Wn8mJzjAuLL21RmR7wQJtiiPNDnu7uh3YZ7JVELWoDsnhKGVdeDRvvGGxTf4m5VnYTrzSJBEdJ25okEhj9GhCxu",
  "key41": "4kKgqpNRdGC69rphzNs3mbUWQ3hVC3ALpZuUiMb5qHLLkR2Gh5TyHjnrjcrUjwCTThPKdtsYnkz5B5cY8i9QcYHU",
  "key42": "3UwFq1esGAvtUqwBwyLxhij7spmKSb2SNP5rFLXV4ik9bu7ifSfMmmSnbQmH95A1n2fAswgtyGnWotKCTjxnpeJM",
  "key43": "2M8as5JYuNq8TcvvdkeTs1wd1yaZS2CnUso5cksNopPvASVzz6iapkThKAF1UWL5v4BkmL9SKncD4ZbwoDr21hci"
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
