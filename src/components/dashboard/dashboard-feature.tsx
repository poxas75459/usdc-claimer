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
    "2n54AXaBw2C4YUkn188GUvZXtk1hikbft9BxQaKXvx8Y7GaWAcfJrvJmY3o5Zo9eVaN8PCJcTZHAswvAAQZ8C4g5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMVDRdDJqfdf7eyptZifuMrkaQsLYJ3WFmdfck5fh9WVpMEvSbTvJuTeWV3sUzyUZbkptgX5RWNkhpFwLSfVhQN",
  "key1": "5qR5whEsaDAkKV7Eqr9hpGWzdpqxktP4F5dpTMfwRwNbfJRiphUkUdDfK88CRT9VUnT3jtKydcDsePovmAmbrWWj",
  "key2": "2JQFN9eT2cYchpKm4pSauLKnhyzsovMxRDn3qPRVvMD4TJpeG5bAgmKuJgeP2SFrZWN1wjPGtY9eVkFGfxxrHPNX",
  "key3": "4DgKN2sxRCEcUPr9FyAkVWrKMv9KSrRvwrXuruEfvZ7zhVvhU2gCfAC2FYXaPFW3kaydp85V2EnRfLZ4EHar8sfZ",
  "key4": "4XuFfXcpo4Z7PCJm28Kfexz6hfJLQs1bxnPjPi5Y24Z4PDmjK6aT3DP7Gu6oXtXVrcb6AeHAsPnyGFUDw1V9a1mH",
  "key5": "3yw72w5VYgpY4LGbj4jnhqUjtz1Ke9ZMuEt93jA1pjPpvTYDWVtrep7Sq3Uq7EDyjdehiMpQFBFzqFrvEaeHNifc",
  "key6": "WnqSNt5CYgsU1x8cSnQEzKRYaxmGU7GUKjCAoZnUb4E8adPq6w7kKsRu5ZMXLEzt3YSDmy6dR4wC4faGp3CrBpi",
  "key7": "L6NxHNiTPVr6FSgS6s97r8wK4ZhqpTt2tacPjhSW5sHTbE2aCxVLAMMgBCrw7RKwCRZkgwUqNe7C16bUtCWwbwC",
  "key8": "yzDVj4b1Sune1LxmV7YYhgFXdM2YjCpTqZuPMSrg9Losk2TCRmouVk5GW35KbkMxXw7UAWQeAfgm7gUZwSsWqWU",
  "key9": "5Hx832tt26AESVeV2wRwk493d4e7gXafduREMVpyHrgtBvpbRVm9n1HGc3PeAkC8uWNB2uZaPZUjvo6rBxMiffjK",
  "key10": "237HuMedhrwj5agGRPuWsSufJQEdG4SCmNyA4EssB11pRbJtvgnbep2NEZdZc6dQYCXWfvoxdJwzizJTVZSfT4M5",
  "key11": "4X256rJMAx7ceh4duzp8NzxPvgjirwYqqYPsJ4Km6zNP1tejRS9wjAiBERULXMeCgZo2xucQroqjyqWcP7PC7s2W",
  "key12": "63V3cdjVuVQKe5on4v9yqXAnr33Fkn8sxAid1Y53UQzf6JPwtmHo4EWXn6eocY9P4m39Zdv65vaTBGNYhmNuZLeT",
  "key13": "bomBjYMZdmM97yywGSGsSL5zgSAdaUc8Rwp5E4RVDF5sgHMep4JbV58ouwQLnPqpFoNKiWUmdXGfvSY7L4BUggu",
  "key14": "3WV2cgBcYsJrjttAqXxCux1Eor8TWNrkBgBPitbYmYusJDRaBRmvgUuk1Yu4JhXRNCGHcF8oN7fbdy7J6GpSNaH8",
  "key15": "kKKs7sg6f8par4verw3nR6x5AzFoJjQcprAq2NPMPPjdR6irMVbQzDuaankVpePWrPbYEVoYHkFTNheadq7cFyy",
  "key16": "4pxZDaukRgqzbx3N13rDbQtKR9ckaprokjkPsdR7SPsKgerfG1vwKZE3ouZFDbGQyQ1WibM9SFoxYyoZDKrh6tZn",
  "key17": "49jtY7s3jsEoo3xaoNi665uVBN4yBLfi9KTLwGGMWW4EUcDn9pnU7MiTmRsoEJPvbRasNVkYvugALwfRdjJk7GN1",
  "key18": "5qwW8u6LvYTaCcZd5eXeGWrKuw2rFE6qmt3yZoJpcL9f6oJKZp34xr6d1uwitERtg4PwMJAfGaMe7ddRYdF5P87N",
  "key19": "3dv3t3YgboJgHRsu7x2hTREutgkaudzDC4YCDAsVKMHQ1hpqxL2uq6XsswPm1a67Rvj2rCFKZ28biJmUoYVX5PNP",
  "key20": "QwePZPuvwPzTRzexnwWJMX8zX6yi5rzmKBvCJDMxCzrQLmzdXDvg4mycNusqwmr96gpk1NzwtJ5tzaVFMhLSrcL",
  "key21": "5K7XSCe6AfygWKMpg4VaoYKAVnY2sLAgQoFfzjjgKNxzvnwvS8ozYwLUHteb1dn7tJZzNdTyRESNEA6dvuA48qkx",
  "key22": "4iQrVh6ZhdBD1mfn1naftWiNfgNCJq5384pT5FVsszPVLZ7ZDzksKzecqaEf32456UqCUZ4xF44HgdWnBGxciawC",
  "key23": "2JNAahQKjCkbivrAZRsugqmutwUrMW2fikSsTVEjXbD9qWSYLGija5643pJZPqui2EktXaaL2cN3N8yMciynmDLM",
  "key24": "wK69aMU6mXNkV566MtXMMQTu2MNXiBkCLsXtUsjqaWjFF1pzGAP2hTnAqwMXRQ4uoVGtynkorYGq6dWsfUJzrzc",
  "key25": "2evt5RinVyrDr6FUwWc3xNqgJQfi94vNnbUvTUy5pdz8n7HA3VsMYR4pD6j3SWJD3wBhAoBdE2uKKNygq699EBxC",
  "key26": "2hGaqa5uWDb9VeRzWpdjw7AyrZgoSybjN6EpszimYL96oG63yW6LvXX1tFqANd2aQwVnhaD2uxmAr9CUeNTjEB6K",
  "key27": "4AibRuHeNs5T89oACMU7e74b3yHLucrB8p5Fu2D2Cnrjsc9jhdYXo6q7yS7fY8x1HgdbctjyVtYMvEHqH8jP1shT",
  "key28": "3JkTGfgGyD7xWDGN3Ct3gqX8b6Eb6cfUPLnUXAvhFE2orAae8nDaSmapkccq4as1oR2RJ6VCBmK58PPPbQFNJNnZ",
  "key29": "4QJJddmjCvxtT7bxpTu8DKkXNM5AAbF6huDvYNowqo1YoWmFKYYiUEpbWjvBF7wC6ewgBWcxcTvxQhWVfjzJP7n8",
  "key30": "33rHiDb4VjwjnjAkqA2a6d4DjqHHcgauUDxZbSw36Nw2jYSE8yYeJuJaWir6tViK86GYjJBjBRzHojDujdxwkxwo",
  "key31": "44qXaUAwFiz5qxzqqjFY9W7cZDBoPZvtyeNMUgi9vaJZhWkgGWtv2UQv5Tw4FpQZ4vtjhYe5aZUprjMF6GQj89g9",
  "key32": "2xDGgz8qMBS9mtcJ98KLXhX3LKJzcagnKeyASEzFNXg44cZjyWytNvF8uo9FbT9K995L3vV8BzrYTPVfmdhEsoGp",
  "key33": "59h9n286bNwW9urv5pzMdvjDCAMuQDzETnFtThP4ZZXkabWNNbLgzA6D3B9qSL4numqgB94ckDM28p7hFWhHT6gS",
  "key34": "496xuhSGaAJnxCpquY5H5oF2GhXuNTV5hHTmXRzxC8nVwWCu621nJsm99samXYh2oVBS1NsegaBJkQpDrvcZJn6v"
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
