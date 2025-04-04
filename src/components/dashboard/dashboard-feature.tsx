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
    "q5dHqZCTsvXvFhgFeJQk9zpLvdLjPJK39GivsTLBZ1T69nVrms5ipt6r7mc7iEBrXBWwT4jPPBZH76PWYVZAbLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eiRxBFSYZzWvJb9vohEoLSGUm9oHs6778LYvKJHTeiukDeBFwZUoX4zsLPPh8f7ajuL6As1qFcAWMQSiACfo9F",
  "key1": "2X6a8hWiXm3fYCfCoK6juiKjfx9igrHbiKArrhqEEe7GW8rGHg7SMn74hHfRQm3ud8wCY9TPQt8Bv5hEywrfC3Gf",
  "key2": "2sTfsnqWLTvvU57gYLzpNicMK7YxwdmHdSdWzYDDydQP9d8XwbQ3WghgdGccqGA7zDnLkwL2bTTjjBnt2GoVhv6P",
  "key3": "oXABMAZJzaBy9sUBpqdEbwvkUwLMoBKHFwovyQS6HvQKN3mC2B93ujsWrAsiZSLKzK77rnPSAqbNUUTdAk4MeWb",
  "key4": "3tn8uwJKVYEHYdf6shTkuWS1kjvSfURXhgmZdQRmsGgxVKZecNAy2NLXztg1gHBbrxB1z7S9GWGVFW8d3HSSL4V6",
  "key5": "5XSc5zSrUBNdaJCHGeinXC9mZPRn4d1PwJhhGKpSH2QTbqNRvN7G4XPcJePtJGT1jKDHD11tmaAPA3YKf7qW7zbi",
  "key6": "5Swm8KRB7kcERKG83AG8HBz7Znoo9yAkoYak9seUHH1PR3atNV5nqgrMUeTeVa8Lf3JVLVtVb1MixAuhUtsPcU46",
  "key7": "64EVzWeK9Qsyt4F3endEfThAJfoFwrEcm8VjQfL4rEpe6QJXbmdbCqRDuuBJXfJutzwdWTbEMuqV5pTcegt4D2uR",
  "key8": "5abKD2YmuK2jqspuJAwSiaDVmNXQD1ZiPa9TXnUSrcVdT36vD4JJvaaFQYPFGPHQq6kroDh6DN1WoFjKkTg5jipk",
  "key9": "32jAwpkddEn9PSYFvTLbUwytjnyUgQSjbvGKHnN7EBvk7947SkSRXZHzKuE2dVfgduo3HrWMLBSVnJZqqKqEtrKW",
  "key10": "5qfDprQWj6GFZkDjgoD1uL7hBz2iq6a2bckraiJTbAfWQTwtKLjBZbD2Ups9AqwHpJyCnaGuUE1pTune974sG5De",
  "key11": "3nuGnvRciPZ7PFRx4GcG3qHNydy6nUwySL8SuHPJ7R1HNpxChqtPUGnsjMocKQ3qPxjNKf4YYCAkSohUjek9LKfV",
  "key12": "54udmqBatRqPt4FLhULVKJujXBYGjedkLacGKLeitxQgewau9A31VqogvdXLfRhzZvqHYWpQMz8y3C7T1cUyHpW2",
  "key13": "5gpm2hmiuqCVqwLfxQuBUP8JxNbE82gLMb8Q29Rb8BmVXxtTsYBxBBUSWLr5aC28nGc1xgBvH7dhdbEk75mGCEts",
  "key14": "32E3RriZDC2sXjRkYXApXSTSAf7yG2XUM49gJ9RKGaMJqMv6jKzXQRiohvEbPR8xDq3W3Z4toDbD5jbFsTQDHGBy",
  "key15": "63PsEX8q11iDbRRiSNdiK5AaZbVDYxGTEdK76QNWX1t8644ZPPx6YB3DzVavNmMvokEUwahiNdSNSVpVd4zhbdSq",
  "key16": "5Hmx4qcp9YTG9wUbt2U6LhMGLfqUidmsxgSx1myQoF5RvmYzvn8fHd2rjpXsCd6BVmuXj3XyCxcXcJr5t33nAPKv",
  "key17": "3vj7ZGJe9nNp7JKMfac4huLuri4jMqqcvVNasFExiv2tS4WbgQF6ABDUKZFbVSmMdYtAxHJD9ZRvvd3p8DKbDwwp",
  "key18": "kogVq6eeKR82WiTBpfB3H5iqsnXJaXH75hQBUXYKySqUMZaJFFDwKkoqjm3Pk3AyLb3LiSbxVmnzqiCa92nCJt4",
  "key19": "5kwZA2yDNedBCeBhvkgkAZUXHt9tacoK1Sxs7Rb9TcnvBBJpYxPjeEdXGkFJZM8RK2hmeRi77PZLarDz2aSzycUx",
  "key20": "53mzFAaxbUYzqSrx7ue8XvAZjXWWQC5vz564wgZwgmbsYMfUaY9UgFJTaHEV5VL54Xa37pH3UFGANRsgMC7U1BoR",
  "key21": "4DqZMSetQRMkcFBsWWazSoVsT3RpUnbUhmJiyXaLWePQ8NJxGAKtr4Qdw8y9bktcapFF8d3JJTbA5vgsDukqmCMm",
  "key22": "5YNwsoZbWxmmn4attLuU3L79PYteQuNYGkEnipsVAs79D2riMxvvaCAB9YC2hKqwSh52Qmg8k2mYvsPhGYLwCFdF",
  "key23": "5HR6Ay42XkJy9f1jYxMVMZRLBaki9SQuXQcegMM9qydJXgqp6mvAjG5Yh4eRTzsr7wJwCQbyXEKv28anWeNRtTEk",
  "key24": "h9g6X8BBisUZfgZoMFyFvUt14z3nNY2RjwNSo4LcWs5R1unNiwo4q4uHxueHScMzX4tsSAA3ZLj1iDmG3HT1jZP",
  "key25": "4yN3oaCz7oZnoLRwMFCZYdDLxeW3at8ykoBft6hq9UwEtQdx6d8CQTdhpFHZmpetRXDa5oQUXqy58RCceoxMPSUt",
  "key26": "YvDnzNUuTMZqdroLCt4BxNV1FqiwCeo9dEAmc7fH1yt1Db7kEKwsKwqvZmUnxNc6CLi9kMN7t8iNKwCP7F5GP1x",
  "key27": "Z7rFJXmZbzeGdirwXbrXre13iBrNmMQ2DswKYQ5VgfNUUtCPy7xTuxaVyAXJoYC2zgcYbzJZ7AEQWzX8Tx2LQWy",
  "key28": "2sfCCHFTWYFBRYTUK58mTbohbBUAvdcfBDQSfD51hffwQSTMHJ75L6FVbqaxXDVNqE44yF6Q9sYSMA5xUceTo9gH",
  "key29": "2XfLN545ijBbWCvCQQFZuSRPSEpWwWXtC6iHnjvhV4G2NixvyHP18wcz25YnN2s8hsRMjtBzAtyT1VJ9nPdHMQyS",
  "key30": "dCLCDpw1Xw5DFL7TkFTLF7aRvLS6SjQsbs7JEc6a1BogVP3yUi4DriYDA8ws5eAa71AbiZnxAfhouFxYG4fWsMm",
  "key31": "4uSskRf8Wi72d5rnGJN3sbd2izxJij18Aq5visCfNjZv2TRxyzNizvtxKEajdaem6ormJNL6U5RzaGhgqQD3EbDa",
  "key32": "msmE7YLQhGEYqQ8rRJLVJBzLet16DaTe4sYaZZK8WZYQZFCGMDqWkzV3yKoKyyLUdB8wGA8otctY1N5xiXuoB4a",
  "key33": "3T2QyQ9J1v8qfpABnhnMxLNTazWfQPYss6Gp1zTfdBufasquREJLYx9biznJ6FkgzFbcQhMe1LEE6yJJ3fvKWeqy",
  "key34": "DaezG3ymQfwg5RAvssA9c8FjSUoFxnHtx4Tvi5LmJ3hR7P2q9bvjeD4p4Bp8jMoWgGjhsycN1qGKdaokMBpfkvQ",
  "key35": "58wnGwuj4TiMxyMpFpokDFJ31ou84hX8XSJDEuWVW8dmGaJufcxZ7hPV7szC5oCn3fzTWE3Dt7rj3SxF1Jv1kwEZ",
  "key36": "5nFSNuJYfoKidbP836mf6tQV22Kfo7gYiV9uNDJF1jZYT146RQ6gj1PSjw2jb2SsbWZogXDAofTSWVrrvaYzRN24",
  "key37": "2evxCyQgojFsdZC6XZPKaEqbtHLFG4QU4Vd1QdcX9bq4LxVR2xW43xjCEi1PLKVD8sMGEwoGn6YfTzFWBLAL7esZ",
  "key38": "5Li51AZC3ZZgoqyKMuiGArTNNLngtK3YpuB59Tq9NCcRvcUScWKJFqBtjKqAmy133RtSFdg3kRaTs45AHSmJBDvS",
  "key39": "2HHpbsz8kaog918V2p1PhnVZeZYp6FDrboS5ywfPm23Gx2MLawxvmPzcxhjk9CVTQLfukvJQwKD5RMoUgrxhs7d5",
  "key40": "5Tkf5twHAGGG4uVQ4SDLNaVXrYNb1eCRibFPiABW7CoV3b8KXy5Mwcbqz6QQhnRZZLfvJrHBE1Ba3hgVQvta6LDz",
  "key41": "4nmEQZ9WrSp7LTdwo4a8aydmBmCRSBNH2jFThiCZxnMUnxHCMXbxou8k7cXSVjHuzhTvXBWi4bKLRKTK23tGf2Me",
  "key42": "4c7PjMg5cEyefgdoRFKoMEu3u89xC2Giy5qiiT3qFkCX9qsjNuZWVKDeZAfa3F7bVEcQeeXDR2wUYa9XCy2rs2dK",
  "key43": "3RdvwhPGyF9CaKp99An7ZVkkQt4H71uuM9s6bJzq4f4n2cZkiYQxXCnJVgX2BGyKWecQgKyTdXdYD9BM9NUkNnJZ",
  "key44": "4yCKDS6d6H3EHstjNxSyooZUijbbtcbM8CUruXSXJftTRMNqcNz4bj7uoaaAwqPyEpKVT6SnGZpTmLPGNjRzNGLi"
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
