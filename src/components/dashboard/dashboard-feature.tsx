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
    "3ZkLxyDRTzFumskauRs7pENW6QBQFtu7YxYLeZyPDsHHgpzSSWhynWzfdRkZ1eCVihZ3TvmgoG9S5Q7YM132145H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ja3XmJM9nDApQL3KpuQP2HP67V8Tj7NbaeyaS9e1dJCDXGjtL1vHzEeoykTYKuFkSrB7wvicHJbhthUNa3JJDb2",
  "key1": "2vjMZTSaFPs1YL3iCtkUJ5n4zpcrPPFZR6vPu4e1SV9rdrRbMkLRZJ2S2wDkfaFQBVzX5TQbBJLbQa7gSYFLe7Vc",
  "key2": "4eZ5D7UYdZL64JkoHzWPsHzKeF3igRYFjuR2itakVjCXxGbGmqbLjkoXfBzet7r9Kdbc74NpBYpgDde4QbfR1PEx",
  "key3": "4sLh2c5aQtYdPkozYLvFgGxWtC1M1DpuuuEDb3pCBCCTwm8hASC8cQPTBqhFQ3tjv2Pgbe43MUUYzAfDSaUVC3Co",
  "key4": "3WDcZ78D4GfPhPnYcuaGs6bT3CdeLSQ8AzMEiVPiSpF8tCviYK6HnuMQJWjpXudxV7r5UMdhcHm54WMJvVBTs6vb",
  "key5": "5NgWuhMwdGJzKyALQUcmoQo81Ghhj1ZeNcXLv1tsxiRMgecVtU4L1SA1CN41bMNPETursusrsbJVbQ7YU3e8e1Jn",
  "key6": "5EDq3XfDMUtfa7gGUgZxxSBtEAZzTrz1xf19XHPtKx7Vy22ZUGkF4ty4o91go9w6wXZHWV7SomQPJ52Ae6ftX3su",
  "key7": "5664Cew9mAGjY6GEqbG7cvyUUtjMQWgWxMmosX4H9df3WzZLbz2JeP3h3kkViXRn1zjwoffjaVsHazDNYMq7osj9",
  "key8": "5x65PQGUa5CEJxfmo7YP8w4Vpofq8NPkjekPU8Hw9eo6M6ghN8YZJk7wUF9nBo3C7eN71M4jTxspcmy9452Ny1nL",
  "key9": "4s4v1DdPt5deuzwUhB9iwJwiH7okykq4wqWYYBeM1SJVetErugLYHDzMW3C3TDXkPKAjFgJgXw3aMEL2a8SVTiMC",
  "key10": "5g6HpiXUfkunjx5hdko1RWgyK2xBtG68ijbCVBCakbDs39oEBpXQJK4bZyxNFXNMCPhCaNi5gwm5wF6Fh6zPmrh",
  "key11": "5ZGTbzkH7Me6qiGvciKRZWo9QyrCw9ehtaQqej88yWW3YoxrQ292dRpAaYL2WwsxvArQjeicFDYp8ayPRSeUo8CD",
  "key12": "2zqNBQUxabfu7AkwutMnsKJXkUXTU7N4iZgpUZ4m9oCwnhk6dJqManhcDGWrfHAdtsy1Vixua7u3K2iQBHgKuws5",
  "key13": "2Ebmsf3vE9XnGWLdGL4zyWJpV9Awh6DjadUYfU174ENvzyfL58k2z1gtsQFpAqB2GFPjaNixcxh8uWK2XbYbFcTM",
  "key14": "5jVf3oc8fnjW1vYrNkMk9ygWyMt8ubm5G8haWCzpgF8TGh5N1uCdpH6LhSoS4QZWLHJLLzkCqJrK9effdQ5bGSha",
  "key15": "59r6ijfVBRE7NzYh2sYCNm9ih8HEt8cSWsJPXnvEb2pUPxRxxQEQW854g49ArscR4H5kRsZwdE1LbxVQMama8JZR",
  "key16": "3EqnzfLQwrGkk3NT2pY9PiegAuieZJnsexW3jqrsBehHjXuVWQ1RfTKnCvqk7oTSfWPJKxWxRZX5mYwKfCYm8U3X",
  "key17": "3aSJgnqybbrpz8UEsYPejvZLusyuckt5Jph3Tn7pp39pFMVqmZcbR6Rio7VQdnKp83JMDFtwKFPtrdK3khMhAUKg",
  "key18": "5WpcWewDZ2cLhzPyVCn5vmrkJpc3x7CYyVxpTgvgiePimAarkz4uHGGDhWGdbDFRD7zGZJn9bFQ8bekytweyRykZ",
  "key19": "CuoZ7o6A9yA2cQvQGgrVUc12pw88PUivEBFdFvxYphrBzdLfeY9REtZ6v1QfU7CmuHjco5rTxMc1PW2xGQ7sY5b",
  "key20": "5JAtuUB8jant4Hk6CaactoPxo99PMLdmDdus88FjyTd3z6gS6SdijAkdHJCyQ2SoUEWyyXkNgQopASnGwZ8hE2ot",
  "key21": "2LsfvXSUbhqhXFQ6L1JWoQ85LZTHNZ4GnRGa9Hi6a6bsGvdRVWUi7S3VY99UfL73eWsAGDnAnVJ9fLQazzhpEXrA",
  "key22": "31nDtVdRaxFP4auTUnjavzy9puLu69U4Y8HaPerTB3xESPf3FXt9BcWcCVsqgLy9opGAXf4vEeS3hVMyWoZTS5J",
  "key23": "5aJWCbH6hoMDuSwGjLejRpjXSQWM9wBG8g1FgEmyyfqr1uSbBQm7CThi2sH69JBwcnjgkVgnXuPHqvYZSh9oSp9q",
  "key24": "5dB36idLHdhcA6BxypgkHNQjZzLq4HzY84o8WvL71T3zmeDqvNTaA2ZXrU6CwxqXF9F9tXDzEK4ML2xqQiVxNe2s",
  "key25": "3Evo1y2nhtmXtafPY2sRxGd8xXNqq5VFY2PjrzAPD9CDYRLDRHMc4meTpXYdohYV4kyEB582gxBoTWQyEsxUoLxf",
  "key26": "311yD5HANyNJ7nUrcCztvtEA3ZMVtKQ2GxV7QdX7nokURc8TXC4tDWJyXjnx2wvKrd2oMbsgjQkTwZ6R7QVsjaLC",
  "key27": "4sa3xBC2S1spmHKbGT1UfWHhmzFu7L465HbPd9GV4n3ch8nKRrq3i1x7RNpPWNSUz7AchTPGGnC5KP9yMQrqj42X",
  "key28": "2jAgYcSHUzgSj5VQhYqR7kw2hWh2prPusosbACvyJSy6sQXLrgswPfVZ73hLaPXsD58MLChgnZe9tyhDfqCS8bzB",
  "key29": "2L6XQbfecC42E9f4hH3vL3oKZ6ZaDpjPuv88Z1hdMERsbtPtZXYseCCpC5KZV9Cytt76yvA3nbubGa1eAsJeciEa",
  "key30": "4w7SXbY2XgxJeKEMYc5XjWKjTyZaPS6yYLDa3jGduYxxgHYMMDF4mRZGPrd38tW2wcszXLabm9FRcyGkPXoiWFB7",
  "key31": "27C3NAoFguogvU4KhKYa6cq1V4A4guVC3sXQzDQtSHQAHsctEpyG5FAL9orFUJL1iNb9mf3YqvLBTJJxPAxDebw2",
  "key32": "2Em72xWRHTsd4TzvLDQxhr4HTVGVD4HsRLcTX4vq42wnthTroA3Rri6zP4DyVFhGqq64fwLSPfKe5xVMAfWgXBZq",
  "key33": "5xsvpg16b3yW1Ch3zdaVRvGHrGmoi5Tdw8sMJz4DuV3a2hpN7DX9CmgH9p6vC3DZ9DRD1jLv5axhNSw2jjy3DW3p",
  "key34": "44joYNour4NMkiLwHh1f4yJzYL8xeJK57QreXJ3RNkQALeRGQvKUE7yEGNTqP68Cj72bC2jNKb3pXignFaSjtANe",
  "key35": "5RkJmZMw9wU41voApYH7tSgrraALnGFWKoonuwTVf8MbxELtXG3ss6xvQZaTmf1ddPB3fdqKwv3uBfpvaWAmQN5u",
  "key36": "3wK7NfmWCjTUk5LSQUYNvtsxEt1GDE7P7QGqz3rLgqyPU2PkjLZda8CtBdRCoJQJD8XBeLZEsmjY7VDoBYVZMetx",
  "key37": "4NJ6YUHU6k4T3gKdTmKHeFX6GvoGp2ALxLecfUqFwH71R2DWCWTzvgYvputoy5CntG56iGYcMZqkM8pL6wf5HXBV"
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
