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
    "CLzV23Fv364xjyDdCk9Y8kGFRa4zprX41eSK6SFN7NEiAE6H5Q3mkx4ncGsV6Jmys5hZobZ5qt2SpcZ9vRtKzJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35vskHgn91NyijH69VptmgvfCjZQXwKtZ6FTm2TqAJey1henskG7jA2WJReskBCdrtou21EmDVFakFRDRYdLRpSk",
  "key1": "vsK1DkbUwG7r1onr2dzkQ4kHfL5dJ8wGDrqgUhZUsYcaWJnuHwkk1x5t5RoW9tT3FAKWgADFJuHq2bBDeHENGh1",
  "key2": "CTqs3yxjHtwzXxQXZ73JcphWmhHGrEPQhzvXPKvA5YvVnKQFEC7nD9SjS1LmmQAaWDGTveQYniesBiNLiPMkWmk",
  "key3": "59xMiXmhaEJ3o3X1s2ejoRD1DyF2wRR9pXbRUuBFkxfUr2PVvp4ugfgh4ftufuTPqGQAU91vghFadYXMgyXKaTqS",
  "key4": "nSMWazTaFMXAG1uVUvwF99WLZ95BF9CRydvbhM8n6A5VmiwBgiBPzFQr93KJD7uXQ9CRvGEYqHcfekZUb5y36xL",
  "key5": "bVEuqUkpXfWdjXbLb2P97TUujn2nZ2TEabvQUE8wNb5XkxcKXtbZGeaKVET7FiWZzr931ySwAnTx1SXFryGFUvi",
  "key6": "4zsYjfXeUsLQpWYkmxyyrSo5QYQPNkK8bo3PsLqyt9PufaxE5DUSNfRWbUZ7oH3TbjKgHYYuP5KHRiDNHfDD6KSE",
  "key7": "39Uzqnq41Mt4XPyzwvASbxut8ZttTqwoqEXhgj9wVyy1hAzH7seBJCHkncqvUMv1Jc8ueeKCRBWWE1ER6tb5e5dy",
  "key8": "4Npxn1pD8pCtu2ADzzdVzMA4bSCwaJQuD65Sb4yS3zvSodCLPKmNHFNAiiLAiMHiPxYyvso8khg48GaQuW7DHVq9",
  "key9": "2xk4W9VE4khaeN7EfGWpXbSS1vaFJrZGNAtNYbDWtXPtXyv3hAyWQz6MEBJregxqPoxsiNNqMf55ZyWtLpSABho3",
  "key10": "4RYNoEKRPRQggABs1yKWvTCzftR3QpPQaSMVe42Z1yw1trHmUfQ162e6h7WstLgTfeXF9JnVPXacJKJratmLn3kX",
  "key11": "5xWD9SDcEwPa4bpQdPHfQ18SBhxRsKagUGEpecf2PrTVD62rSvqhfQ94WG7cSX8AkuqsQ6cQvN94yycRddezPtrC",
  "key12": "dpaFv4diEyKQUUNAaoc4baFbjSsfwFoyZNFW54oS6ihj7cPg3mxcffFJ44HbKZQ2VkYvQe3ZuFXnsPi25NTL4yQ",
  "key13": "62mAV8opqPzx1pyDisn3J57vDxrY3bnAecibutHgaj4EmRm2KNVNESM2Zzp6SvmQMWie7GDRBEMx6awcRfeHMGRx",
  "key14": "3ryP6s6murN9f5AFj6TJq7H2uqzS2qoxpFS2QXsdc25oTmwoRaiPDFd92WxcNGVDPectFNuMuUiRrJ1e7n9Kj4k4",
  "key15": "5ZVyUiiUVNrfoqTwRuQ6QqNM8yVoWL3Mx3kW2oHvfHhL6r4BHzUj5DiY8fZfDBSgZ6GZ9eFt4oZeJ6frCdTqJVSv",
  "key16": "3k1Azcj1nPYera8cXZ6i3LsQ5UAfwhmVFZTYfuzw75uZVzqxuzNkkwbgWTik1enc785GsyhqeAoPrwuASufNMyGq",
  "key17": "2YNJnRgvFXn4a3RqJJD8UAnU3uvSzz41o3PQrs88dax7yjqoEEGJoaS7DpBPKRNhV5Ya8FvLvUiLsUYx12h12f4G",
  "key18": "4ScRJpeDJCzpUC41BUTYYgN3Y58xr1yppBFtcqd99Ay1aNn3UWK1GpjqrC8dJCjsscKSxVzY4mh7X7HhMwWrGXuE",
  "key19": "5Fpe5n1vM5bgmdZr5i9i3iqkTJMCcoguyhwoShJifh6MohKjUfDNDcY4tXYGXyb8Ujj2bLUXWkU9JPFMG5Sbyqwb",
  "key20": "YtB334LJpsrUF6BN11sunBbWXPfnoqFmSzaV3f6qwFFR6vXVgk8SYo5oFBLwti2kBZDhAPrtzFFR8iZDfajY6v6",
  "key21": "3Vg91wTMhGq2Us6gsSNB22e6YoFXmnUHKeYtXkvqoRzDuPMbn6jTtjuMesZzk9maJPfrMu3CZeh5BNy9tJVHKA4J",
  "key22": "4oBB3v1fovPCr4t8a8pKy9q3vs8FiCitoiG39fjHuw71EBdJNSXJSryp9WWeT6wptBuEdLcooXG4NoWVqmRCkNjo",
  "key23": "2Gv9sc8RYLVZvdrsPKDc5xbvqgPMHeht9tZ5JYJxivbt3GeSKhWYhx9dzKHJSXWTyrb2Kx6dsVAihaiPa9Kx9e9V",
  "key24": "6iz6B6pzyQJbqWATNin2yUo4Yr1LUhCVc3vMjDidZ6ZgMUusHTfGjL3sSStVgDSxx498pL1rDjVPTCFJZdBt5ej",
  "key25": "5GZ8NjRY59yweBpeXZWaC3vDQBbnFmtTyxtYZBhR8LzfyJPw8HmW5XMDKzeqhowhvJ5pnA6oFzXQQoEJcfjmedvZ",
  "key26": "mZ6h8JGMwMf1xdVmq5VBavrT7vHbQ5S7SsaBBNkSke4hqxtEzGV3Wo8dEZQEgFU4TpcFMEWYLqkfCYPFGisFCDv",
  "key27": "2BYnGqpeheCikmEKHPXh261cTA41B9jDRbhsdygFWS2k5yz66PJeJVZZuSoUo1ErFpzigvuB6yeS4KKptV4Tqvz4",
  "key28": "54pigNaELR3p4ypv6y8cyapLzQdVZPe9eqwP1cjcAZTY5rworNaJPPXCnyXyyoXGXf2onTqNWECG1pftAUgYyQkj",
  "key29": "44jpdQUhj8vXxASPxKzqHgzsViX291RT636biHqYqnwm6fwF3tCmSjGBxyccZF3EqFAgCS5JDa1bjs7q42UtdbmM",
  "key30": "fY7DDchnu9ekwsRawTzhxwdZHDEr3mJEtXPLYujHSSpWvAx22AGyfL5M72xqmv9E3YJY588RKnH6oJyDzwFgqFL",
  "key31": "4JB5zWfPGKupn5dkkwVYRdcV7w9L4ffqzd5NuctnhJqsrmUvYgaEzufW72NHiJJXwrPv5xYSC4vNrAPhy4JjFwb",
  "key32": "2hj13aW9RSBsLdvMo4uYcwY9M148Es8oBKukm8dENn65gt31vpTWAdkhFmmd2m4bkJmDSBaYDkHoHKTf2vAZHQGa",
  "key33": "2RwjFqr2VkpN8f2SazTfYxmrjscre8KbPpCCbCfooYDNGd79K3o3dqHfNzoyLoMNVR7Lntucn81pU1kvXQiEYzWB",
  "key34": "3cHXK9mJZKUgb5QPLLGQ169YN8i5KHYMF6zTHA8bsgGmVgJqsaXKGSujDjziyA1RhCbXi3GrsH8BQEXCSJKLB3Lq",
  "key35": "4cbz1dUtiBZz1nwpeVXsvNpET7b3fevNvEQYEAx9JJh54yqDgU726zhkkAhVZmpVhKDQJs54gV4M6k1t3aiz63AA",
  "key36": "2eTkqpX62epHGGg6pZgMHcXC3obQBEjk1nwv442Hbq6edRRwgjzxz87wbBoyBsXpafxzPFTZUFrYQTo2ih592izH"
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
