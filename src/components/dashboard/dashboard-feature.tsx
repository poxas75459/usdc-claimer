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
    "59KAKYme4j24zu1hFfb4q779LmjQ8KSJRyANFvoDgnC2NuB7wMaQskWKYC7hvbeBaQUitcGbg3Ussd57zMZN2LMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wFvwGh1SPoxg89iLF7aubBfRqvXncL1RKi5Nn7kFNr3BsR9DZZivJjycEhdiamqhtBUftNB4nb98wCRrXMDw3aD",
  "key1": "31RsUpL6VihjHWJJSh9K5zC5mFLtDahpMZAce1PCRtZp2vGPauqFsA1tfXpWk2xHEz7BArLhJQfYodXPYLjVwYtP",
  "key2": "L9Nuenw4YiwP4x3CQjJGgJXJ8NiikwAL9fVV9Qu8TE7tPsB2adqepmkkQ2YDJsZwgqQrcThnTHCVRB6LsCtNS62",
  "key3": "5yzAtB7zUExQ6JwLBTGBDZTiK8nE1wUkGCLos5KiaXA7Pd67AyhDWuQyfv6wZNH5ydRXi3UAwTM2YbzgfFpfqkuD",
  "key4": "2dVPx69DAEFxwLyacE2eHaLjx6vtPQJMHY63aAXDw2pSUDcNTyPc2bY4KHf4PhsoMwxLZsP94FLTeC32N8ECkwxE",
  "key5": "2h4cFL8KxaVS8KLYoeSKThX2jmtPdzxo5L2AUG684MQmUtxofnRiEp9h15RNZcCjxhTHuQVNTz9CfNtgdn1mPWE",
  "key6": "4y66bKeAf4XAmJRmvF25cPuLqwUCG8ZXCzEtLzAwB59RWTPMxLf7i7eXfs6U5Kja6HuXKwvxULyHZhpG7KCgtkYs",
  "key7": "3GZDhRKEHCK1au5zzGxNieBzMsAfjKgAcWA7ToYARhAQ3KkK6VPjbDtPC7z8qQuc9BwkVS2HPNvA2YkGrYewxHsL",
  "key8": "36x6BT34WA8zdsZjESPByrN2uSNcLFL2dcrgL2mqXDEzPo7FmL9mHYn1dDKrXF94Jq6SvWRymqQRCCYbgqNmKv1c",
  "key9": "572StSqzUgxMRbuUaNu2FHGbAmZSHSNKZkVWq3LUErfQ8UG3VEVUnXx8a9is979A2cq2NoCVWrgc73edG7B5W3oB",
  "key10": "9AYU2sRrKEvY3WEW8RVYiLWdwaL8DyZWZWQT8ux77JZHihzsFwMcxA5yNXvGYBK4P27H6n9YeLr3DLsh2iBMLYJ",
  "key11": "3huYSi6Lj4so2XHjEhXWA9MLKiFhgiqVijmCm3e3euLqmrRkejyt7rXSu7aeezz7AK3ehFueEXXsV4CimqeJV7sJ",
  "key12": "5EHFdUdTUtWgMAhvC1Zxyk998r1Dnv2Pfh2mfGQBB2JzoryQPoDHRGunfn3sJJcAU4uEAX2puJLs468BikDRbX5i",
  "key13": "XFqMio59K6k3QTWg2Ux8YXHKJUxDDLDNgUtLNUyCtk276XE7vaQDEyiQ5s5PJiRuUDJb9CTGgNWRGSgcLh3QThe",
  "key14": "26iLLJ4x8LyBwgi6CWxRatqxcNr8hEEnFungoTePB6wiiD8KZob9jtGX6yNYv4m7hubtRtiNj9ucjQUpAEfQZ5QE",
  "key15": "5zhtHRJfAz1CGZAUnNkkwFTDL8Wu7PvDGz4rCKrHjsRX3riYpVRqdXpjge585Go1xYpB1K3AYw8k6AK9BdEb1cq7",
  "key16": "2y7SuyYCrF5hc7GGsM4a8EjsRVyoNpspHyD8TN8ZaGyd8nYScHxSs14rgVcs57F3V8nH9CQnCAS6eh5SoWmHLjTY",
  "key17": "31kVeimFEjcL2kEuapnHmSbFWrcvePCNtKut5T8M8auYUSQjcw3zbsbdL89URUGcUXDBEpA458NhjwqZekKWYLLk",
  "key18": "5D4WqC93BgNVFxxKvrGFpWZRf9X9xv2VXQFjQxPj5A6BqmiqPFpEcnbkhMi9jkr5sVf6rTUvqK6pm2yJ4MLgY6yY",
  "key19": "5YhkuWUG8CZ4R6Jz23ePaLx39AVRgiLF7PsK7wrDzi7n86vPEKEekGF4dc7qoHuwT36biWdXPgYMKw8j2HzeEMmn",
  "key20": "6wrLws55kfeiVCjYuBRFe2Lx3ScgNUruJhmgEVagCruGwAPtegnggCMPvYGE7uhGfLmuAMS5SFuqGb28cvAgLAu",
  "key21": "4WP9frcwqiWK9AjqyasoxyynrQW7SwVLfyxbb5AVFeNgFbSgPVdWvxoicHmEQ4ETaMDndmYyCmUs7gygK7sbEHX5",
  "key22": "3XS533zAciBhPBocsTHimE2qSPMANE9Uz7Fes3BcaNiLdZbKL7PftoxYvuGPfcze1mga2Rm7gPtshnZSXMxEDon2",
  "key23": "3PcJbdsznYD1JZqqMY2aXFHCPaj2mULjF9UWHJmCx5bqBinpuCxBnVFwzqieUfpyLRDAvXnfRv81qcdyXJtYPfuV",
  "key24": "5KfxXZ9MkVacjkQt4YeDga77gyZHT55mMUwLRhGV4nYTX8cg4UUuFLWBBszJTiMCmNgJG9KGPrGDThK4wuxNX4QX",
  "key25": "pSAh8Lo8AMqqKtNb7kmyLfd247yRnpXM3ggHEC4mEWmiQ6oSJTUwZMWQEfc5x45DMAg5XTNdjPGcUm2ZsjfBhjQ",
  "key26": "3AKtcuGkx95U7eFyMrjDHFYNZ2kC3zTu3xJPUXm7YYkpY9rjUtbTdKX1AQeA9MBGi8NRw8hsq9RWDpQXm5FEjPfa",
  "key27": "GZnZkUd76jXLW9sV19Rd3N98urWtRjSAjknNTsaxzZQ1U1bniDH4PPYDGb3LgQnsZVrAQ6ua6tJmtWUTRFzUuXv",
  "key28": "4jEg9KC6abKexTua7rgS42YJB9MCjmEMx2iDxSyCjvzY8ZsgqebEcsKjT11ooqZkkVwePPd8odapo7UYJcLZ1pnB",
  "key29": "127xdghynFRtx2gDGmiXsAjHsp3Pqr5mFtBaZZACrEdkMJdqgiwX3WnTpmzBww3nTFKLKi1fKVqUX1MkDucqbRmY",
  "key30": "4pKAYuk48rWwVb3gQKcpyXGSEMuENWmUicPbJQrobK92f2QiwhWoBSsAGUByYD5oBVyLLtQxndmcfL6HYWSUaKb4",
  "key31": "4szsn1hEaet1s6hEnhmakFbp8CyXy1wQZ1kajS9qU3ngC1f4ZAyxrNiBX859SWBnqe2AJDr7gTfKqpm7S2Dc2KYx",
  "key32": "5AjfRzaFX5M7VewZxXfmjGXMfwPvgbGbceN6CgmPVn4WhDJp1cfJYiWYhDDm4oMZxjkvLDtXU6NtBLVZyx41HX29",
  "key33": "5XFdr3UYER3UxML8VfxNAjVR9HxTWip1hL9TdmRvSPfFNR3qNHAdEcS9gyemuPY48RPcGpXcGNTga9h3fveXC6uG"
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
