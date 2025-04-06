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
    "3iXPUgGeQynAnxwTfCdfEjTEW1eVi6vb6u2Bh2K36DZdouPhhNRvTXGMXiLK9qqhmduycMph3yAQrCEbdjMVAvkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdb6baSBsVAbVpxWXzh6HxPH94MVkDrz8kjQzGcN2skH1pPPeuoBoo3j95p1o8BvhHdeBT9QXQeL7ckWvhDuXdJ",
  "key1": "5VY2ZDVpB6htSBhgpHWxR8tyFWfmfKePa3hNFXdfwtLi7uzzW9ue3tNMUTkaFPKjncA8aFhT8c7ck2xMzCaRihfv",
  "key2": "61KgyKcusMsyaVcTiHjFiuijcvotM6yJFwx4xLRhdGWDh1nvkXZkFgesBTe1EVAKrJFdQy4HmJCjKZmWzR9Nyzhx",
  "key3": "3cseWj3pqy6SqvDAfPTWEgsrpygKcsWMxK6GdQ6twcqQ79dEx9i793vEt5VP8fxeHc1HagtDKAvWmDLT1pdWjV9h",
  "key4": "31is228fxMyEKRRVWouFdUTEdJJzk5NCeGUKt1JeCZeXj968f7pWKCB39qmNxcPtnfBsEvr7WovnF7wUkjTAkDWh",
  "key5": "2k9Qgiymv1SuYXXomvQL1bsjhvFwTaWSprbykvpqzpqnVsAttZggA7iumJ5iSnpTpCpaoM7pR2zJm9k9kugSf5Wa",
  "key6": "5aLUCofy5WmJFerWoVsGP2YqhRE71mZqPinZ9dFDgGXx4S8iV38xY591ApZfhc7HUkoL7JgDM2hUcuQZAPhrjrkN",
  "key7": "63xGHFLpRvRp1AX2LNTQpxUUZfY6BnZ6ea9PRBX6cyaSB6JvSdEnBjuitHFmfiaYD7RajPGfNfWXgA9R5MwvC8ee",
  "key8": "FyS9SLkxNHvW33vy4jGdkaHCmehz2upUtmRthYto5uLBeeF1fTUkuWbfcTD1CgkzutzKFDzT23Bfwk5h5AFVYNs",
  "key9": "2Ht22SLB6Z3ecEpqoGdmfWcM19QYjwJXC7hPR5xLzob3EKu4zoJteNDs2s7r3JeTcByoLhE9r36jKzAez6udMDMa",
  "key10": "5mRPCUgTeUy7aBR3v5Bv3YabZLPxh47KsvYK75C6EPJfE45i5KFBp8FQEX8B89zkBiZStScVTaGUJD9Dj81jgnoP",
  "key11": "U557v4cqQqx82tUHrKiTRbMc1jtzWucy76y8PaosnpDH3uhheZY658vekswWwnJkJJL9L6PTwffQaAJ12P3BXBM",
  "key12": "2CpYvEUtQyaHHgyhBWA3m8nF5y4jn7vyvqGKV4E4xpAYi5YERYFhjL3bqtQC1ZMySgCwFyBLg3ZbdvBCPcLZdeyA",
  "key13": "2sd2VzRmamCKN6SHEdzcJPUvJVz7jiukqfHJcse1s8rpdNUoj1t7SzcNNF9LgAACFMpg54wpxtVVSM3kZbcEaG1Y",
  "key14": "55nyR9N7UppKkG9qSqjonfkUTEtJyPRKky9EeHQffET7pSfRJmv9vgTkX51tvUA2kMo4brh9mN8NFMQXURKzfSse",
  "key15": "2v82C9GjQrJ28pYJ7oNTrodaF8eoMWyrTLC4siZy8rNExfwp53uV7NzKnQMaSJNh5p4Pirtk7jyZhfbjWe2uhQoU",
  "key16": "3QUSFwBMDao3cRfAtRZM5pk5kaqF16YmcP4eGDH3v3XeDnTYrCAFfS3XjuH5sRv9B36jZx2Keg6pJkULsJ2wrcqu",
  "key17": "36HdbB32YvsfCStiHsqSGkwvcPPiWw6W7p37ck7qGTLsyuBDbvfc9hmcKNaPfspB2B4k7jMXAQCbr6XpaURuVSGt",
  "key18": "3xNZuuwW1bA4dSzKZsucuitdVbqVj6B2PAYp8iFgjpDyAunC5ur8qqStJjg1xFTEEkRSDKHFLtdg6jQUEYnmFLJb",
  "key19": "ufaAtrc9qBs5N8SJuN3qcRxxoPGw1LDtgweiUMLtJJFxoLZRZT1WTbHHcZJu467XL4XtPSRaipaqo6UZ8rAJPy3",
  "key20": "4Qgiej9iiR7Ra88L47K6dShHJdVwjUBEFNJuSEGSoJpEipRhrTen7h8jiECs9ne9wk49sXMKXxzC5fzEJFhQaFab",
  "key21": "4EAnCEKkf4d3vNeWeDpUaQcqdVsrpCSmAkfBtF6XftZVRajE4e41CYpH7Cr6KA5ySpAgZsHYa4NmmURwxUSoPwVo",
  "key22": "2CdtMSDtzgkBadN87SDWa5HmcFEQbbUyX4tkvPWMfbBhNJVf9fgQpnBgJzNb7RxxauXc4wKHkVmY3JrWESaRBqbK",
  "key23": "352AemqGnBVC7f6Sc1BtN772WkTVNZAdhVFVJefucXp22ZZZExzv32i6RPWWjXt4EQsBsZ3eyLRpijn1nGT9BN5h",
  "key24": "3RUXpE9TW7P48kp2d5DQtEBq7VdNhCe3wtqLs7oFmScxoxUvnizXUjrGAb8SvPX6Jdre29Cv28bXjqDn484sEJwT",
  "key25": "EZtGhR5BTT97wijFYSJci2txTRW9x3Mqj4C5arvSZAMow4Fi59LhnRKFdvgVFLAoaiaLYP736iUwV5kCFjaEwhX",
  "key26": "5Gh8nC4hPGCqez9WyUZjfmhFVNiHD7LFfRdBQetZFYPYxReAZGPgv7ZGZijTD3iBSwZGoJc3HCL88ejNnKmtkHL8",
  "key27": "ULeqYad66UmVZegsj1gx778XiyAsqKcMtLrP38YdjNJKy6EctML7hm3avY7VDQ58QuDP8992HMpgULGFjRSjypL",
  "key28": "65iG7LxARy4KmD3APdLyqt6zaRdwjFuYUBJXhxcnU5Hfy3T1CiisAbY4XCUhH8F6BhGcBxFUiW8uJJxRjJZ6rJ6y",
  "key29": "3gV6XYivCTz9QU9wzuDcq31bEHN5NBwbXbhXHRSG4vqWGBjr63Qfjr7SzuNeCnxi3szxjkqhMLbuqv6YQSeP6CT3",
  "key30": "ajM1E9TseHqAQ5n9ob5fD6PVfb1xejR61YhuMwNaHnj9ZYUnicjmPAFJ1SXXtugzbe1Z9Sb2Vt7MAzcHBypjR5y",
  "key31": "WazdjVhn7CKZbyYaq27zkHEvs3n26YV1r8ShSNou9VWSa9FCDoFR2GN3G4P8wTNcai1J7gdTskj4wWWZc55dqkK",
  "key32": "4vvRna4DVGdazHKvcxwhZXUXscfC1aKLS3sdPKSyBWmkURV6Cxhvfe9cJ3MhGi6Ga4DFUqKP1FoQQwD3oTprXmkF"
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
