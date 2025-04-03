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
    "3HUXm6ZB1eA9qFHFqMBTyF9aFnvBiNB8cYEgDACYyuKz8f7RLvN1Xf4ku3QKURJ1VjwVrVHaYKpf86tJzWN16RUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pH8RDKDRo9FNuMr4cGBzrmRZPzB6GAfPyPdepf47xBbxiG1V9vfgsn3heK8p8XmEWrNSPTRCvYDQnZs1a2g1MFH",
  "key1": "4eqJUL1kjz67GBrxWBSE9KZKGTCq1jC2G9jWLjTxjb1SdxgxCANZzxpky5DGc67p49PoFSwgQUyS261CDdbNSD7W",
  "key2": "5FHSdx3C1KmXLX31dXQKD4eiQVpHu7LLu6dYNTuBbfRoHqV9AE6zeyDfrzmMhbpCZQmf6ta5vurtuuUiejAqxJm2",
  "key3": "4cAU7GG24xixPumTrBFVS2ci69k2W4NparL41ARLR84ta1TGyjNzkKKTPTqVPfj5tt9iRyHMfWkzQkgNGaStvaiC",
  "key4": "24pD7VjV2CptB83ZiTPe4G8pwH1wN8ErrSbwMqnfa5K3XQmvveopXdtQMnvr6EsX9VsN2pJN3i7fVdGiMZJP8RRa",
  "key5": "5y6CiQKTbuh1c7UgFTb8o2mPRBZs54YKEmAtSGnvNksba6djQ9JyNdZCdVZg23WdnT1AsqVTajEQeNRQbcBE7UhK",
  "key6": "2kRtqLcWZEzTi34QziXeTcSdcLt6rLjWU7gnnbBdNxZt5TQdgea14qYXkvgK3bsLZisbjHWFQv9EEkAhCG7TD4gZ",
  "key7": "MT45Qbkt53RPNSCTs1RfqHPE6Pks69f1N82ksxTus6DJACHYtSMYHhAxSp1tV9kgbaDCaVxAUwywikFP9NStEoP",
  "key8": "5ejZqffgP2j69uzqUG5Fswx3Pm21g9jHy5dHfhcnEG4tHFWR7uqxbtYEVr6dBe7oxeh6Rq5DZMqLusczVkfdyt9k",
  "key9": "32L7Yed2DYcE2QfY6h8J3iuP7swybUQo2ZaEZdW6endvvXca4Rvbnk9QAdzj7wHzosiLxEMpL95ywNSxrc4gYLtr",
  "key10": "HZEJHhdpHFEnufPkD74btG5TEG4rkw6E4W5UVUweezHgSikEcz7Vw6ffCcXMkzEru5TJHm9ktJTRTG2gVyTDFVC",
  "key11": "4u7sRQMyNX46Jig5x7wGpVYj4nTDNvvJ5y4tQ4uDYUknjugJ8LvwZGQUVYNPFbbxHrmsZbBL13md9uKYsRx3Zy87",
  "key12": "27P6KB6zpYNpQHc8qu26mEddFpjSkJdyFBnAHPwnFc1BtsBhf3uyCqZCJTYJ2U7ZC5Er64fsfhifhz5PPYoqUAzz",
  "key13": "2TxfaVib8sB5zZmueXqZDEHrcwT14GRGxKoVqRY5C3JQjqas3ZyRMSymaLfTBATjNbSjFAx8XwtdRseruWSkTAXB",
  "key14": "xYQGDyGYFD3cobieVbGPy9GL5s6CGBVuQSEYR2ZAukNiTfAjBPAvSBZ68YnGitT2fMrzTrcfRcELgHqZh1XjuPw",
  "key15": "3zg1kTSSpANioXdAUYjjATTk7eBh3Jgfo9KWB92Uh2o5dztDF8rGL93i8YhcwU1DLjX2zhunAvnhur6iCrkY1ay4",
  "key16": "5bnQrEXra2HFx55APPeVg8smKDPC4ZbUoAYu7oxFh74GmhwA4rpzm6CLnGdd5Y7mr4E8LrDwhZ926hLUNENW6QJD",
  "key17": "4zyfhc3DbXdAqFoK4tz4pw3cS5qU1JQyHTRp7aTrcCZ2J29GNW683NxSgV79q1uq1vmxyogNFMi8gfQDJ928FUBu",
  "key18": "2HDuc5XrPq1wCvUXKU4qHiQwNeL12TpViSAbuiB2SAjYuoyhG3gDWEJpeEPxLZdPGVQaDHETV8LVh8e5xsriy2Gm",
  "key19": "34FuuENqd6wY7wL14Pk7qKjRuuUp6EYiZy9NvV6hDfu92276Yx5j3oJR8QoMR1VHm4pY26yVLWLhHHuREyTDKAAT",
  "key20": "kiziZpuh5X3roo7iLCiyi1MXmvwDLwwwaNopzkoGMXx4dFcenXMpotWFww2Tn1qUhcUk3TdC2uRTDvSoGKoznyA",
  "key21": "3Xxi5YKjBCgfsGXhxLeeLbknyxVpHTN6W14LRvAypnzJKnAhFvnjNeTk4AXbdW1Ppehm4SGc1f6BWXfZb782Ya65",
  "key22": "5F9jM27c4QkJwqNm2wHv37SbQoqP5AZuYU3M1yPiiM5ZbdpunVPXxmcZrUGsVBF3cYN5V2osCUzLaatcptb9A66V",
  "key23": "3dHwqS2FWCGhcw4NSVRnbKNJmSUdgpq9Hv7APgd8WwYtkoMQudsEWPP56fhAzudoCvutJbqZWLdtePY5LftS5b5x",
  "key24": "4SmjRADM3osiuPzCKsmAQS4mGnqXEz4FKsE4N61iEvkCNBKECxVjM5Z4coKur9V8C9eE1nTbxq4Yhq8f4ry4v2Fi",
  "key25": "5EaSVGoCkn6SRyVxTrno8yK7VXU9cQPS1YFL5Cn46vYqjKfCmU3uqf9DjAPCHsCReAt8nRGRZ2yJSep3cJtmJaNq",
  "key26": "22SWZx41HRvVc6aDHpqp2HgHNsqFbPSYb7odQXZcX4qG2Vwa34mmk6bypHbBqp1DDV3FWqK24rtopLuWBSjfTgU2",
  "key27": "31cZ7XzbyyAuenwXAoqjTnPomqStvoe4pE1Rae3eVXTForoNB4XmQSLDy2BGXesrgsKPiFVgQV8GG4zPDB5GGh4Q",
  "key28": "3nUggwbohRokR6qGbnYxajQNi9yQs7J2hvG2T3JZh9p25wW68SpFWHJx6erKvi2CnhxEFPPnWTqvfnkimEBnyh3a",
  "key29": "3g4UxpeoPxwiPShe1gDiibdwdgaNqZnoaQY8PTeczQy3DPHioJRwz6B7HTy5BVMiEAfMx47935PZpMndxpch6hPS",
  "key30": "42twpq4Kih2ALVYACz79XwjxbZUzbNpgMjCYuomHT8FuxCQt2rZtDoMBdxqqoyFgFcAyPYLQspreiSp6pdcUPSH5",
  "key31": "LEt8zPwjm5UrEvjafQ1EKwwQ5jbPic4k5vYP54717nQfAQXmLtGX7jeUZWL6ufWbDyeAhR8icu7q6GRZz1FRBh4",
  "key32": "4rWYapRQQqaf8Msf7iV4z3iHH8BQeJTkrqjc71Z4qM7vVMS7KcvJ7WigZrVR3G779pqrkSPoMrZ45wjeYZ9Y1M94",
  "key33": "5E5udr3j6AG1QhbzdhBJwwrDm5mGuLuCbYuGNmEJiKgJUDzPfx4NUq2vT2DUhXpphqzaihTSboFJGNSv1aaQF2d6",
  "key34": "3ZiSvyjnnDxy9aMiRjG8REeU8RFAaL4wkvcy3yt3H8ER9Kz6jeu4Z9zmKBs5k2Hc64w8vXPjhPDBYFASe94iBehu",
  "key35": "2dHNTKhURpgM4QUPAVErUmjbiPKkMcRn9zBpqYVX6SLy3xTtTkHuK8WviS7UwZDoRopeYjQHC6R6Ppk2HU9EntkS",
  "key36": "4YchXZ9qMP8A6JxyQ8pwqLpKer5F5aQABkK9hCPrfU9opBoZyNdstVhUA31yMBUeCE4HYXijqwULSZEhoM9ccjXt"
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
