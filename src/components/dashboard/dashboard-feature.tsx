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
    "3EYccyKsWfVAVnf61secRGqtj3hL1PpQhaVVnZnkTdMiT6AznXtpfxZ3iRUxkaSP5f7mVWGMsJ7gry9p5cgy1RWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bkWsfFpDzkhm5obxGaxfbjC9GozHiFYNAiJzht5XePdkjwK8AjthJmcEM6DTmdXJKcqo6NPmYrA8PRrTWLkhAbo",
  "key1": "4N8CSbozST9iHigCuzm1mPe5eRpq9HaK73PpFGnHtY74f9KYTnWpBrFD7mWHjK3kHm8xdDUuRERZPe2DrTnyfpRi",
  "key2": "4ez1p1nkqrJyMg96J2boCLjgfW1CSoVbAYuQb1tZtqbhR76eECq2jGQC2QBXzLgVS7DWAPx9N4J4Rx4Km5sjYZuT",
  "key3": "4GnhPejfZtbuQ6ppw4YJa1VSss4EAanZUaStotEugV9TBPpGqJcVprNotRwN6FmCaeQ4FywsV8t4M97tXpYD3GJH",
  "key4": "5ZKqpaKtqWBDbeC4HaMKM2gvgF9cu4t3sZM4CPxb6zjn8bKgFxQVSHb3eY13BqE7j1fJHXZpJjPks1sqyMRHdWeK",
  "key5": "3kquqseeiaB1T2y4mdPdvfBLQZ8CwKXmMgDAriRhbbhDvhevrxF9kzct4JoNow8aT7jpkeMXkib2edZxYuR7H5Ys",
  "key6": "xsnLyqbvbjux9XuXi8S89kQTRm5Vz41CVcTQjREFLr4yvGkQZMXpMG2ifUh1tf5QNxhSwm5fKmJLgpBPD5NRTU6",
  "key7": "5yKrv5TTeaEELT6PN1xu44NngE7sDdFK15m2dF1jm9eNQoEN8oMjTHLrampAhpPEtfhKgnTKY1GAc1iyCzSLmwR6",
  "key8": "254a6GAT15rRTSM2G4t8J4CQmEKd4xgnPLeLtP3VNByRmhYRbn4UQ5wmH9DCQY1DZQjNjgcMF5DTDNKPKFbPgxZb",
  "key9": "3xuYFPo35maPLh5UGDUDmfPD5APKj7m6J7krSrvrdrJjj523wBQZ3xVa6uK5Zfs2w4XpEpv23VpTHgnNJEcN8sCi",
  "key10": "GBgZeJzSWnP1P3o9oYt2pN7PxoyXZ2qoXwMNmvnNGB5L1fBKLZY6VtN74AnovK6LTVHcUsY66aMzixVGQVHu95x",
  "key11": "3HM47ib4JGqApq49fB4Q6WR8vT6ME4xJnfnUd4Cmjd8bP46StLdYFg7B21HNHEQfLxnbxTQsrMsB2H35n1D3fhb2",
  "key12": "4if5Ay2D4yskigfFUw2ScySEffg99FL89EjskbSqJG5G1KLhLyh6U1LQLqm1xxEBYbu3Wkr456HkgC8X34BgxhRW",
  "key13": "a91wrEHEdfs3m5gE1TaTh9591NgZHuavYJ2wto8o6GNFdj3A3F75U6BiwiT7V7bzEpMsMhwEuZ95XZwKWSNbWDP",
  "key14": "2ovkBcdTAR9q7u5WCfRWAdMMErZtkggrW9AJXbk2cmaffAruB3GMnAF8VJuutEHfFzabRo9eZTASMCzURqDyxaMB",
  "key15": "4376JCtA8hwVmXm6APmJJLqRMkyWgSk1HQdZB7LLSZdkVU9eo2nVjKH996dQ28BfQNeTgoUCwGnZmeu6tLSHANkW",
  "key16": "2Jr63AniPLfZDJeaMhgqKUf4pVWXUNGgU6fL887XDmghUT2DnE4fzzJqRMuPuuNfpgMjio73rYqUZcktKoudLemE",
  "key17": "TFxdS1aYzzKV2nNWH3GtXTKgRJaA8jdQEgqLG66deP8P12TEw4FHuvHyUJL1Uvf6jdVy8bEPDk1Md2wLxtMDt7h",
  "key18": "2W6m6fzYYNvk21gbsNCH6MuN3fbHVMKDf79ppgr7ayUSCe6hzF8SMYC4gpJtPHQNLunM7b34baGpJbW7g4XYskfK",
  "key19": "2qJhrookF8uNcZg7FAXGxbQ7srtjZhfHGQq2cscawuVYLaqfxodVioGRZnwrfB9RiWQ2vZC13t2gCXNrqdTacpRf",
  "key20": "36ZQNLyNSnWWMm2xT3tnMjv9ENHnRhAjNxRJD28PKFE9b31QhHqMLDaYLAY7zTJH4SdMyneHfy3V9MMmhy8tKERc",
  "key21": "57nY425yLAKK2SqQZJvvQKcZYN7EsA5yGBiGaYbeoiEoBiMiQfmY26YhYzYbnFqtoSjhuLrQ5RtwesbNqBDzZM8E",
  "key22": "FWUhH6ffrhtn2LrVbAEYUSLMMzds9hnjmERbFYLXJMkWtBX2Dq6dqLWKRAKsLWSxp1NGEMf6LSWegpJRSLBV4Xx",
  "key23": "2fv6UXUtCoai6Tvs3KJvZxps2xsk99wv9qVmqgdTRGrkmGeQpndCxu2RKAZVh3gkDXmgKyZWV3Lk1fbWb6UfxCJ5",
  "key24": "2rGHnNPmUE8KuGAXrc7MwQZhRCwS6KbWyJSrKcG2wyym7HibmAJNbLVSrUhmSDek6xguxLse6xD5mFiHeP96UH6E",
  "key25": "3uLWk61F5nrh7kJ2eSmR82HxeifCrZpsvEDoRebgxcEGjDpznsqRWkHz5YhsfVnsvEj3A44Y84YivWTyCc9rTu2F",
  "key26": "2kDjcd5gTFBHLLGJGinS5RRRNjoLEYh4ANPE6XkdKRf3qHvsYci7qVUnMd9rP3CyFEFJrwa5NjSVxsc17F6QBzrE",
  "key27": "2zoCjtjtLPWzaXKdfcGniXcwFU61ztZHe55BuxC2GwCmx67avF6uRgtvjT7UoNxBXishC77wKAY3WuVB4F378RxW",
  "key28": "2RczYqtSJtavCqMSWEPQgJGyB3shP4yPR3e2PX3RoicQZKvNRfGdddnangTc5YvZU5Tkue8hSftgnEXPReAZdQy3",
  "key29": "4p77JBg4mYjCaVuRpQckiN9MRNVsquEBpR78Txh2cERZ6VqcsetXhqCvAkuqDGeNCmrphqFvQHgU3vbLNRGcPp92"
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
