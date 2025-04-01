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
    "4D3qe3fuXfkbfhiRkL24vrTqGFmXuWhGFR1dajN1JVCPZdHZ7d1UanTeNNPoWXbn5G7fijY5HTgcxpeL1jC3Mdav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k7rJMWbDwoKwTbBCuBbY1Crk2X4QGDrZXVuTxZkwQNQiEY7HuPyWt72EwEhpKjx5iQhSTmoKyr7xd8KMXHwR6SL",
  "key1": "4SyUsEcH9pUdCMy3sMoGMLwvpWmES42DFisQNv4UfEhyzCmbUjbM7QDcfRmn6SXLLmBWg32jM1fzs1vWbBgatEym",
  "key2": "emZkFWd5tg74SpzATVC1tS54dNEuy2dLEpWVHWfJbRpVrbx2NdBqVh6L813rAgzejbRU1jPvz3xqFDTmePK9Trc",
  "key3": "2ErDcaqTtEoWp76eKEiLAJh8ehyWsTQpcfGnwXenKPQA9zaLWmQW8CZwU4ZBcFQ7XXPkPXj6eKKpz6bCFkkxLjPY",
  "key4": "4DjwBmuAnpSLz3R9mAy9xq8b6rw63zCTwAXVqpXqaZoFbt35dEBGrRNWw99Aky8p2bLrTDgXFSLrMBHwhLSAURdV",
  "key5": "2cLDu3nHuw2wzKaRT6r7L4k41oz9qaupxHbc97rtfgXD1sK5Xa3kz82qY97jYwjbQVpRSi6kMwtoFoRdKuf2okzR",
  "key6": "2oHUj2kVMUyqBLV5Z5HPd5Lj4DjbuCeM12Zn4hqB2RNajpmvo4iyHhb6wv21UFKMTfFJL4GdwmhY9Tik4HTvMRB1",
  "key7": "3Jk6LFtXWTKBERqia8N1WU9o9VEPPMfSjssLSKjFVSjufB11UmEvS8mLGRTw1VfR3hH4Yf5anjxEzSRemRRoXpq5",
  "key8": "RbCRat9ptV7faHSWRFSe2gC4WZprrhMhhE3BLyM8JEnR8MhYfhJor5FEwqfy4u7cQ7zzA2e9oBAoJEkUeTYs5Nc",
  "key9": "5AZMHpTmfmZ3GVDJ8Z2zbEJrEpYvpne4ugRyvnCTgQKXpQGtVC7o9HzFLVGZgZCzmkBaRFNaEGtEpbjC5zxnz9XA",
  "key10": "5JEGPttNTrJHAR3szm2Fqq67tjpEcgxQB5DL9GBhkaKR2dEC7eptWD9RiY8o18hQMeRGkmjXmxpeFt3AFm3hGXyk",
  "key11": "3MLXdorAoVF2ZPB3NUktniHjHEzPcS7PLGvMCRL9qdZPArcYGvDw396JwpFzQsRN1ejkAririDkiCuccTTX5fKrd",
  "key12": "3SyqFntgnqzdQ5cQaJ4Us18wMxtivemDw3BVshGm2tFHCgywx5NUjRDjnDU8phkAY8h9ADyvv4dS1yEBBt4Ca4Tw",
  "key13": "jXi9LX2koq8gcmgH5CwgjSMvDAeJFSsYma9sJ7trCAfSuJKcTdjefEeP9L2jRowP1pzCsVXn1H3H6BDUGx7eb1w",
  "key14": "2f5SaFUhXisVpY1fCTvoRLbZq83jbJSsXT4SFyrcKNEaoXxHEKF2h6XugW5EGbdqKAKk5hJCYQ4avQKa7bGMobjg",
  "key15": "3rhh31H4AcZh78CGTqVRdiPYKU4EkHZHMxc3brrEtRhq74hG5b4b8S1mLNoYD1GCdafBEuJr54hpEMSSRXBkKsB",
  "key16": "38Nkmp42vJAcbxYAPzhp4UBSMyySZuj7XvqETRA2tRLiobbt3PqoL6jfHjdBJGTqC4qe9UNeR5Fq25BZy8N5kxwR",
  "key17": "5fQV4ST7KGamiPgEhV6YN9rPHGsm47bwoM2bNb9uKSMLwENbyeBBomiRDxnx9G41x3dUZ49akEVHot5TT9jCSB2Q",
  "key18": "2rnkRNH4uRdBeM1MNyXfLuo13Z5Vo7LbM3ShARcpJWmK5HR9mzZJYGHgadF9udvqTC55gBNNC9LRZXEwqUyabAV8",
  "key19": "59u9qNw6MhHugWvdC6QWD4ZyGWHg1v17uD5MtZhgVxvFy6d4K1W4oMSkDQDCdvneMgwfgzSijreR1VyU3roLCkh2",
  "key20": "5edoUhiakqoyrqf14LYFaCNdznM69ToEyUXL3PrLeGBjrUgeiUaXZq4qW7giThPTLfhRPkay9WDGQCSCHgV8mo7Y",
  "key21": "362o1DrUHNL54NLPe4734zPi6nkY824qjA7c9ToDpVUff5abgM2x62GYD355kTwkqWoCxG8gZAKA9shMXZa6vNDr",
  "key22": "8YWobkRCRFhnobteXP2r2175m2AnHTKz7jqEsK92kc4gKLrC8NgG3S6pT1xVcevEGVwc9MNji8GAFdYQsdD3CAR",
  "key23": "4KkLcCJ7q5g6dZcLW8hYAqv8bCEbakviedxEFzmEeS64acX7xVzQUur3rVeL9nPDMr1bdf3ZreExeSe616R5aUSV",
  "key24": "jjBvgtbKFKaKcMx712rYnr6UFL4VpiTrqhtqtEWgZMRTmw1z3t9xcT9w2DY3L8uamJLXkztuCwQsUvvS9BN4DZA",
  "key25": "4abTam1TB63TVs4fTiQfkeRSKBC8arjerGQ1dEovQsGY9pHyDv67ihC8rAF9Ed2wSbuTA25VVtX81KV4rqSF23FB",
  "key26": "4VTGSdorHKJFpqRStcg2v7aQXYY9fjLenxQBSxU8EquctxCxuZSvWcB1gB9zsjWCKiCy3WF7AdgF8bWkZsDoxGjv",
  "key27": "61rfDJSE871oU2hdE9gLZJreyePJfHjNPoua78W5U6zXGWcZoL8WtD1JdhRZfnqpsVVceNVenwo7hSGxtnNFT8XK",
  "key28": "3iYRstEbu6arXjUrngnkh3NtfTa2NDbnrdAaFU2hLVQYQjFCscff7nFHZNQ7vGTxboZZXU6C6WiY3hbtHjxwi1dA",
  "key29": "3VM8qwhZeLmDhMquRoPdJu9DHJYrkDi3PykavKCiNZtYPuYmMw6GmisqqhXfwdWrAFehB7MrBcC4HSuP3NMjJMg4",
  "key30": "4iLq1CR1pu2urzDvPmjPQxzhMoWMz8okf4EXzenwfhmwMNWn3mLrqxVUQT9cFjCM7mdvBBo6PuzSF8pqLsvDkbd9",
  "key31": "5tByEQXpomvQvT1xWmicVfxarbbeukjLAr2FUJtxPF4UJPdyxXbUuZsN5g76v9dmysa7mSJun4HPJMsHGWWLfkb4",
  "key32": "EFxkxpBzSLUu96JoR7iNRcUxwckgNEMNBWLmoBWHQuApuu4KxdW6Rb5TRZj4yFqvNPpRnpLdTbRgNMvx2erDqs8",
  "key33": "49t8v3m6ipwp3hNfLnrHoKUnRFd3XnZWNkssAJtNc2DoiaoawxaM2acdn4VWQ1cdapNtxe1iUn8XGYKDSbE8sYUZ",
  "key34": "4j118cJCJrxbmog7je9KLt1Jpp8mngyAq6dmq9Ji167ZTgpDDGgrwXp3Kz3hf5BuXt4Z6mf9z6x54PHEBBfJhm8H",
  "key35": "4u1HXLFVryj7cYTzjmtFeXudyjrTuvxSWnwh5ateF7L7EG66HXUFpSFBgoc92QTm1tXPPbuxM66z5uQciYcBkVdu",
  "key36": "49Y5KWe5F9iK776eTiwG51fWVDjk4PAZdjH3pbg1skZH7dSkqW31Hw6DAnRKmhrnrkpNVpTtiRauszn3FN68BeaS",
  "key37": "2Q4BK9HSQsfg2zPMeT3PADxcfM6jN2cmM82b6DwKVdKW4ADFthLR89nHwvEjyP77CpQdfLaMsJb85y7yNtJi8Kji",
  "key38": "5Gc54g3xrkgiDcDtSLqTEprjTYnqifxwqQquc2zLJxuGo3FguXNY8DadD7zpGGytpWysMcEYUYX48fMY5L3bkFuX",
  "key39": "2eudYCJfSfoDHMZYYQHs7m56b3PFDdeutvwAzqTnbYVGE7fFx4XZsz8hr5TSLE9FF5LA4JL3F2UPG3EoSzrLwFKC",
  "key40": "553Dqxtcbju6zwNxxSj46ksMnb5uqwkAcSXSigxf4SicCt4j23dPs5wxPXPJ5Vah4GpiZKqWLrLqvDwZs7y7JcEz",
  "key41": "73BQhw6XrJWKmPo1oUKyJdSdZDCRUuxp1F3KK8qsLbyx4vfi59n5yMVwuNYxiGmNQGeww5oGUidqyELEnWHVYVE",
  "key42": "4gft8ZnnjjawzSzY4uJYcwfaUEaySSq219t9kZo7q3FBJPsEgZSRUfddRiCXaXQK8aVnVjnhPXiJLrhAM1trooxx",
  "key43": "4AEUZxVYqMLu4V4HnEgkLgCfVad372qAyWqMhkWNpisvDe1LpnuuxAhoGdRg8wdw3nXkNdctJW1MffFCBqszctqy",
  "key44": "Na1AF3EWn77YQBxgP59aHppDy2UzUjeGD6S7xiGVXetxq4ZhUBZ9AZ8EQEkszpa4nBGizF1Ew4sUSRA4rUXEcW5"
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
