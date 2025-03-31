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
    "vLNgpt4MLvWkNCSk442Y1KUwam6pUVYLW6LGcNFgupBLcJy7BkTiHgeB7EY7FdRhFqr6BvBJd5ekVYmPnskJaMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z6BXJm5AWgkCm6gcYzABYqHZmHbKpyK7d9R5awf3TnS4fMjh58P9vcUjsFU8GDFqPuuLtAjESCRb2ESh2truxwG",
  "key1": "4JmeEqQejP9qkprSE94GsSqiYqX88JT898yumyoScM3CnxPmvbKYoFyoandDk5CrFs262oNDz1KH9aAEKS77koXT",
  "key2": "5ddWg57Ym5uEZCPYp1zVvyWWgAFAS1cRpBGpmNKoBskwKeoS8tKh8RugynFcHfkiCE8wYMPvCX5YGg1BCSuEwXK6",
  "key3": "2Xfx5xQgwR3Ev5CV4wTYXcdyKgJaehM5jcTMNLDn8hXMLxTvHi69EDBxUxHv4HTVBEFjBBMpn76YKf6iio4msxA2",
  "key4": "tieBSnvXGMVfEAs86KPEqfNqAB2Ct2Y9JzhYDmc5Ve8bYTVy3UkKRMDpWQ91dtoMovyH15Fj9dR4gbF9qWWBz8z",
  "key5": "2Cf9tSySAqbvMHoW1ByzFA9itiq5QEsw94WLJTERDqTpA7PoXEfNeAtPK38c6Yz8mLrdwsCLnVmTGouk3YJYUGcr",
  "key6": "5i2bhyZLpB1VyJd3sahV3eeSEC98pouHfMjTSK31jGRk2nsr9Wf38nQt4BSvWWAKPM4noW4CYQs6YHQFC5DEeAx2",
  "key7": "5M3UU7k83kNeNEHnhv2kWJ79M5J851cApuQMH6kfogBn3robdqdgDe2Gd5VioVnpeV7JrASqoq8W28Q9pMnAoGYC",
  "key8": "5mnjXJDpxJ2tjGRRrPVsJUPATP2emESrYbLiDep8KvCLvABHhaPt3bBmpSsNcPkAqzAsRRZzoqKnzVPYcvau3kE2",
  "key9": "3KSyfTuAJxjiFuxnH8e6wDJNMc7panABEJWdS7cJSRfwqjwAQTQGJdNSf9aYvG89V338AGH2scY2heJMdQH9a2V",
  "key10": "58g3dxFeNZvm6Wo8aNLeKgjryPfRrYMC8bhN4zfbrMC3WyCz5BDDKN1sT7zJcEpZEtap7DGLQAJohE6EQFRSRx1U",
  "key11": "h1rcccY3fHZ5CTugT3wZyJCnsvs7VkheLb8EhXvhxuqzLzQ3C9BDxc7QoZHCTVobQLh65XCbV9o3oLHogNjYoXA",
  "key12": "5cj6uZEP8WbZSoR464dHir8Megr6USjgQRV56xLubVHueFUBx7uWxaHBmz2GpsBTv66VMDcGZ5feYJT9j42VZM84",
  "key13": "3ofyxM39iVu3NSThSYguBunW2wB1Nzb7WWAVg2TXkcbLPKXTSP4ZwKQ2sFMpwQDRqDFy26nUjwp9Ah2mDivRd2VJ",
  "key14": "5oHNx8JnhCrmQmVJgZKJt4JNx9GW9kWUcZ5EfFVNtrWEMQ7z8QZeGqWrz9Mubp4yiEVwUje85gHjuqaJAeoyPJL3",
  "key15": "vAqnX3cFXynz1k8VdpLkM2EZTDppXsE9ArMK67TnpSsodFf7sixDDtqpknke7ZwLLbbzSoHcjXjiet49yTNMVAd",
  "key16": "3UmBKsnCj3Ld2sP1LacQcXcBaA4RSZBgoDYcMbmiFn3XAMCF3Fnhjy6crdt5ba19t47vEdfedrELcNWdkY4rzVUH",
  "key17": "2cMtN3uKK8EFTbb11KvGpUJzw1ar5gCUPoaf8RpqKFMckurRyB96qNRrPoEPjvxM8tmkNyMghhx4ZCJnT9fv9QZb",
  "key18": "2skckW4LPW5i6ehEeQs7f73maR2EcRjWRzK6Nk1bLbLDgj9pYFWp8itfGwbBFhg9bEfR9cUcMV2qg5wMj5KS7Fic",
  "key19": "4gqNZatCu9YvQSgkjDTUmKgygsHCCCWqmdomubsrTC8LnwfT3QksfBZhP12exH5ujKqLZ1K3SKHZpyxcmov6Z5kw",
  "key20": "5MhSk43UTYw3LH5AjRRLGHJJeCNpckMFDbfYCLV22nEfHtxyjrRxZQTRHzAfDwcJS88b3RxhKxoUeknxcceJ4cRj",
  "key21": "4B5ZvW3yqpqYA3YVCbJwY8uKGy4qDi6BgfLV3XNBsNqu8jYx999DN53TTHcBhfLisbGKuAof7Y1d6t6qFq9HdE3y",
  "key22": "9nintLcKHbccdpFk5XNhg9QeK2YEyKLsgPp7hnNnSk4BhRBTYRa9uYUTk81jAUyeoJt4fH5e6HaKJymwgfgoDrN",
  "key23": "3oMXdaq2PUQqATV9vLRiPZDDeC3S4TJyfDkd3KMHvzCUS3fuDABTnfYs3X64RNed2pAwBVCoajXTbUKe1SW5iXTj",
  "key24": "5uyEGrciTRJuDJofxosVqhcno8jEJ64u9yWpRY6rM5PfdpgjVku6pFb6EZtd1ryvtuJEpPSCcJPaqHSFNuDjEQRQ",
  "key25": "5w9Mhvo8q2BndhjqpCjqNDRrDq8eGKkQdT9W5WTCsNbYhNcBsaCADzqx82zP9kQiqE4od14mJ76XPScSK9WH7Jip",
  "key26": "3LvPJyfTmxsqx9mXCAQp2dEQPpDMW4uX3ohaA8Lc9jUcrqwj5NZG7HBePpjmMWBeb1NyXx5h3AggN3HMMXi4m65X",
  "key27": "5QrmfrDmhn9mv2GsHEU66DVZVuph3UNzRngSbwJBfudud4KAn6ePQfNKdYPEKhyU9EkRWSNU9YFzPXLtt7GZTjvg",
  "key28": "5DnR3xUYno8wHJyfpg1Sy61Dy1SJHJbtGv6hVwaq5YRHtSCJQ2WrhNrT6saWYnJ18n2QLBPh1S2oRAQFXjfLsH2k",
  "key29": "59oqXWYf3sSR96VvRkYk43dPQJg3HzVdoMHQ4Ye8v7ibw1qwoXPkLx6rFRsCfisVPLmeptpzSQget8jT9ELcseRh",
  "key30": "2yMbFmZeMtmKvvPPwfQQibViBTuT6jPhmyrZNXeFjgdREcpRVQhT8rJAisKrZuiCzk7PUZwJxWUrxwZt1uCeWoZv",
  "key31": "351F1j4KHmMb4At68hFTZL63DagJXYgDJbhoGqgQYuccRKZTAfr33neCBzyC9S4Tng7XWUvYh4ZUdoB1664Sswz1",
  "key32": "3vmZBBWma7iADE1hNxQoMR6QHixS4bjX9Hu2AfQLxBGA9ZuRCkE5TYKix8LzVbsHRUCiVMqmg7zMmiWMmX7DeK5g",
  "key33": "4qaXqvTENGRokjvxiBXJna3Xh37YLL6vGRrDSeKtiTs9uS9CpKdoX9M783Yb1StxVTCeaTe6FtHQKPEN5E6Fd6Hk",
  "key34": "4XEdmKJQVEBnukK2kY6DphkoyPqEELRuRjEGK9MSdWsy2YC4kFhQjypH2g6KdDzGzjxtqkuKoxxGFMRaAfpogm6k"
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
