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
    "57rujLddFU5yWNbjzxE4mzhuE4STKWiH1mpmdrRTRLhVarwXirWBcz8qE2b7gXk68brXe1ztufLcPwEZv7hFSTUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PdarKwNsSqCc2GVVfBDosuGU23qSqEzPWcxpMVB5JT8WaAskCJmth5X44d9XArrJLrQuFomBzU8sHsEDDVF81h2",
  "key1": "3zPwuTnf62u7EiWWqByhw86xPp6g364owe7G3XcS4srvKZZZzri65QLv8UTMpjTYY4kptugRHowuHAdnRFXrTPHR",
  "key2": "3ju1WPSVPk2fC3qkiZoF6aqSs86uRLBG3Pu4AHsKqBkJCQaP5BxNG584uSJ7MMx3YoWeyRYZBfi4uBYLTjkgBDM2",
  "key3": "5aJ1VoK7zC9ECBmg7qBRALNQPeNHyi7A29JdbN8gvp1UVggyPKzuQdv6d7DJA9b5QxSsoA1Aj5kRf1UvGuQWSnMR",
  "key4": "2XyEBdUVWEZxMnjh8gD7bTYHPgjmvP6HTJZ1Fn32jNFEXAhVnWJhxZZGmCFRgruuMkNswuVT7Bjsnq1PyD5UPeHG",
  "key5": "5d8f4YBcVBA6JDdGjB6bkd6B8ZvuBTHVYph4pAk8iU3eAQaX3zwJDeGUGH4JtnCx4KgBcMEzfHXUtXJBQbv5Ahvv",
  "key6": "21EutP2oZ7BHghHwr9SsQVfherrDsoZU2DW36daN2UjS9zX7W2NUPaJqLTxwBDArHRycwJdfjPcR5AxBWrr7VW2H",
  "key7": "2LqaE5pVyW5JESdPoXZ7mzpCLyymCyQEJG2EM6yL54UVnYvZBqi4QodVMBcDZG6zKayKJCEcJ7cuiALTZkr5fNUm",
  "key8": "374wH3ZWJSPPDHPuwXTtuBJN7jscCb9vMmwjWbD3zi4rMu1NfqKFKpmJYQ1bokeDikksAGovDhRUoXB8ikvB7fuL",
  "key9": "SRKcRA8zSh8syMchkhoDGHrmJVQce7frfNSTcmYvXcePVPwCHxhcZNusuR2dMuhScct6FZF84onbyPbfCSi3Zfd",
  "key10": "RYgFq18uiU97bzzaFc5Ef5SCPCTb5dZREfuGFxS8CWgoMuU3SjBb5uWPFcjVzBAJUMgCm4s1BGMpqdZveUF6akU",
  "key11": "5FxmT6Xa85cCAx8G8c3ZG4Scig5XsXQAi4VVkfQ4VXAngerAg1g9zDh2mKYFnXBtP4VUnquW63JymXhdZKAaHLPK",
  "key12": "3S5fthDDWf4hDEAWGCEX3AgMx7TtHbkEGJUe6g2zi4y9Nvoa8gmQUpwXVKCkNHBV9PGJguRzVCjryCMmZdWT9p1Q",
  "key13": "61ruNUnhs9iXfhZpfZ3PEzkqr1R2LqeNYCQCkBqoYbpeRexWg8TepJB16R2nESnYfHAYEYUTWWHCmNrQCtCE1E7e",
  "key14": "2NjNww4MbBav5jX9YeposhY7mRsjodhAKi7u8ScBQoiMh6eUrpvKsssQiBL9G7ENKurFAv25sCwWXBVmEpBckExj",
  "key15": "2gy8yn5JiwHm9ZfemuotSBiukisYZEjc2ZcZ8ZPvpRCJtR4ot25teazLgVgeH3Emuv3DX8Qo1i7ztLGhMAh8hZ3L",
  "key16": "3EQ5CrXpaXYLwEGbRZkKyPTz92gky7TJEDoyJMuHYDd1znPZSHFRguiqerBC6bdLz3kuDHCeEHhwEgT7PGHmwRcx",
  "key17": "32zxRhJENUGqJkNcueYX5kdEFQTkPoxLJkobACZTJRPnZCkK1csTfxYdWmuhdH6ZNcXj4SYPJ5VVPHAwTzogiMxf",
  "key18": "5mZUrdDqc4mG9DGv4jYKLEA3QiehTHYHpa2E2cSt783Dh2PPb3VhzLAPH58buqFF94HbhQvfoAgueMKxMJTscYyF",
  "key19": "y3WWpqsBcfWiRhuj89HiJZopxmo1BGf8VfAfVszT22nczJqeuEkiMV3LD85uzbK988ABCiQCcWzoKW4pZBvQZvG",
  "key20": "svJbc82J6SEpdhFqBnYHt6pXXXbw773SD69yVqhxpNvwXLCY6RHRe7eNSMjseSxSjZDGRKxoQARavmSjkq59bV1",
  "key21": "2bS6BARQ8ezTayv75QyAmR27KaXxUivBRcKqKPkQb4nAfZdjeisVsZ6cb1b9yA1j6eVyviEtgfp8BqAju96QYNyj",
  "key22": "5QYUJvyGmDG814cC3WgytaLAKJCnqvz2xKQuvMbSwmw1ohmGxWEScVV2ubsa59tW55q2gU7o72WAgfEuoXWj78SE",
  "key23": "2rbgwx6uPUoxPecPNqQJ2VX3nKm1TR7X2DuYfztVEDpQqgnLdxwaoWPvDeC5C7YuyZFyJ63hj3rGmwaCpuqzssMD",
  "key24": "5DhbLL1Qdn4av1LXDDL2QG2Mk3dEwZXrLHUSxrmupArYr5Yt9NNoeRFb2Tbog3Fv2BnGfshS9hcM8YFpes7dyNEE",
  "key25": "2ykogP4eajnAYdperx3w7J3VHGFmZ4P2PzvsXo821cUrnaZ1chtCvD31Suny14n29qNhRwaTZWYANXkzn5kCm28L",
  "key26": "2KDUVDthJe7dwXn3Hsa3AjxNSQqYsTYBFvudqv1SW3XjNpoyTyPDAStwr6AR2B9yjtsmvpoyyjyv8Yh9U7eghqS",
  "key27": "3EEMFPFjyi12f5GBKj7uouDV5nfmSPS56kxDcUgDN3wz2hDDjjLQQ2oSVXb4n8djpiq1BBtf4Riv1qRWvoEmMK7Z",
  "key28": "v5Ha32ZAC1HJXM3Vhtndy6cKvLhu88y5AbQ9A3Jd7DAuvXHninY9eCwEdAR12SVwDPi7ZYQKyV9pyieJ8D3vUcD",
  "key29": "31S9q3exhQwcEDSPexN58J4sB9qubeVkxUhnq4HN5csVzUfNhTods2wGV58yNhDVV1bszJZhGM2gbC65MYoWjUDQ",
  "key30": "BzHozxRX9M85rnSX4chVjqN97L5ijQEUF4p1FZThga4SyFWzEzFUbbCJzzCNzAKgRB9CbFmijdV9G791dSXQftc",
  "key31": "5cjAZ6m1jdAXCTwMronrRZ4JJWKAQXX5C9dSHnErAryaJrewHmEfD4fLPWXhuQN2Zzv8u69GPqfGcbM17yXLsdDt",
  "key32": "5ZV8qhQ2fLN6bz842nuztahuvpKGRgGdfn3NmmhCPKZtgdQMT22cj5MJpGvvNAHLFG7WoqXawH1VVaHFCVdX4dKx",
  "key33": "21aT5xk8UAcdQf68GkErAk8JMbhwYEG4dDCUzxjgBAb4CawyXYfUgBq4NmZJsb4FMJ3LXMJoGjJd5tvNVde39FrU",
  "key34": "3HfVFY1n6jAvjkeXTNxnD2veXCYTeiPvQeWzcPaWAM8LyqMaibspScwDV37egEajw2Qbpkg7hNrGRFbT5hYDpU2d",
  "key35": "4XGFmL3iptT9R7wVybBq8aFkTUqxY1eQQq3jn6DJxrZ4MCQMbFPaspDS6WHix8gzvFhkmxoYLWa5evLUKnKoYdcg",
  "key36": "SUeZmPcsjC43Zn2YB6aJRx6VXEsNUcabnqAnQgkqUpvLdf2usKhdfn59bCvaj3fGfATAPuNdh1CnReubUrdDmoq",
  "key37": "5zme2hWQQLGyVDw3LJ72KMM5qiUTADShQmrbUzgXhEvQXH236R9MkxQN3yQ4HCXmFxpPxahXDQA31ZFZYBGcCtmc"
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
