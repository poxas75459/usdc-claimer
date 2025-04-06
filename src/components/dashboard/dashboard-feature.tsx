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
    "2BhdLuuPYqRdiThn3sRCJ2BGiLFgvT1jTpRy1HJj2AjPXpeTUbqNpoH54Ge21p34JnNxDpWpkhvmhcCrYmu93FLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7vTgVnzztxyzwsGKDUnJn8dQqKqyy4mrENs6p4rDYc4ueundAwKTcm1NTjQ2Jkzp1NpUeLfM1nNuWTtUNeNRxev",
  "key1": "2ccgderHKPHRYdqajNxi9FC4NugxiE9QzaFHTjc1FAAnBfdSRxpcnzXMcYc1x5ofXnPkLsBfN4SykTxRLGvRR9HS",
  "key2": "3a92wH5bCj4qDpgG8wr7qHCvTYpAj9TbnzJJi5z6U1ZAngYtzGVL6xpaQdJkFZ39QUh5CBp8AasANySsScDMh3pH",
  "key3": "4FKe4rq4R4xrfLMfRZD9q9HYAJFLYHzHp8ZuRZZXqVNPvHREYbrt2c6WvMBJdaRdmZsNVtph9t4eczYhAzojFdyA",
  "key4": "2nzCrpckqvr3MZCEa8wS4nmBWZqxaWsKjAh4VPviMg1utSk2kRF6sqehvTfoeweLNxywr2TaTDSzrwuRUW3H7iqT",
  "key5": "8JYzpKELDe178zvNs3z217VPQFmRHNeJbz1g9C2iXXNzDWduUvW2dFEwaCtZH99Cn7jpeW5mNAfnyM2EYstJQxY",
  "key6": "26Utkz77An95MfKecpczUgKb7CV5gDMsQ5EbpQ91WMvk92Hp7rTF2W3B4B9tqAWLfMEm82bxBG29xZnLY9oCVLuX",
  "key7": "2zVndLDZpBTg41kWyv3SKF4jNhTgfW2HYgiD4NxXSffdvdJ1ZNxLkQvDPRQLP4HKsDDspuX45MUSLxY79gfY17P",
  "key8": "BZni8JVYNa8mDeJj6SXTEADCakyWxJDVT1nPvKWhcgvXA3ZjGzXdvMGuDMkvukv2uEnSrHFsQrJSqh6XoP68a8Z",
  "key9": "44SJkLm9958C61H7NeTMZYanUrrkRk3w6y8BQ2u4RpMX47HUJfi44GFVuubW6xdgPbombmYjHqxNic12RrHeLHXB",
  "key10": "dmhMHTbP7epb8vvnQuZMDJDnGm86k6JJhyqBRrpppjazcrFUfqNKVppeLBfFwKAYNbPAWbLo6puV9NQ1qUDAVmM",
  "key11": "oBUq8A645h9qHk8Sb1Pd8ic3xebAUdoqNpybe4jqTR1DFdCs7azNZBNnhStAMkWLppc6wtpvg9rnb6EYy17PcFJ",
  "key12": "3x8DzSZWqtJ7VZastpy6mJ2R7cLE7bbXysRVYVwjdPwymBrLWMEhKXYCxZhSs3s2cdpPkcr5FpK4RwL8aQ89AZP8",
  "key13": "59US7sAi8H2Rf8FNPotMBr5uHXDPA849EmWMKhJFMbieNb3JsXhF9zXPZRfhi222woxLZZ7Y2Y2mgZWWfFKkhT1A",
  "key14": "41ciuJmQjhvzdKMVdXuTmqkmY7kBsHRv69x3jWLikM49DtmA9W7QBA6NwErC4RHu32Jiyr5TzB9NrYAP8cA9162F",
  "key15": "5bXuY3DxBQsTeAUmLDrjdDj4UuXoU8yaXHKBJbQjoVLcotEcieSbWwKccMt3tEnfAY3DLmKPfbfdFRaZ34dVvrBT",
  "key16": "4F9aF7KPFzDH12tYF9g5mVaid2v9UkXbxE7Ab8gvt6uDjNV9QGqKSAKsRoSyMygpYLKXL6iuXMH66KZrLZfgVSoR",
  "key17": "2iNYjUKKmpJ6pXwfHy2fWJFrjSvcYMqxqwi6vSuQuXWhFk5hL4JjbZZ6rESNYPxX1YhhisQU51SL6EpktqvR8Wbc",
  "key18": "8hfjbeeX57ve4jG5LnkRimYnhWDUDgwSiLh2WYtr8XwCKTGcHuYvfDsLXoVgmGifgjRQWyp2edXysH4i7UnHUQK",
  "key19": "3K1MPwQCokE4Kdk91tcrZpdBDweiEKtqQREjzxSY8vML62wgquCM1GgBUM7p82id7Z2iKH5XSBLQFoMxpknhDtAp",
  "key20": "2eUCFr9asKzwrWWLUbZrRjV9opFPt3iTNpmVWDQQ7u5P1kmhpWTqQYtp5BRrEghYgLyUdwNHtjTJYVaJxKXDQdJB",
  "key21": "3RiEJgzi7A8Z3MCwjgS5ckBwcvtWj5Nxi9BuqDjCQ2K2rh8rgekhegCbrnU6ziyUQJpxEwfLmx5H4q3nTLwa5MC9",
  "key22": "5NYcaAA7hfpGG7kpXhudkQJGonaDh2gNitq5Rzrbb9HzHpd5ayf95S6J37eTqqCFMVmFoZ9nVMwpHfV52DE8uPT8",
  "key23": "36vKFq3v4kpWDSadSLPM6MR4Wy8pgdgHqWwkj2oShNPkXX99sDcv4zRQZZmzvWGKAVD4cvq5tUncHFFhxrMHnc7M",
  "key24": "ChMZqUewLjdb7MFu9Qs37p3PUgSEEnCNrznDpaGziX2sCjGxQutJYb516FHMHJHakV6J1NVeRCxVzX1Wjx4GYXE",
  "key25": "44vvsGThUsXYre3ovTN4bRS3rLB5FGjxpGMEG588W5jU2F5MQ8Tw12aFTpwY5yKsCG7UXSKzg5rGZjRbzUTchF1S",
  "key26": "3E58rQhw8rm1RBNs3m1BMMTy7CA25PS4b5t9zkcyWWP6iPiaETHQiam88FMVZPXSLPB9WiLEjkSGzqdE4TxfJEsZ",
  "key27": "ArQDBMZBTZs5pWXi5ntP94vkTE5Dq9mb9F9GajkvubXDWsjcm5dYCDYta2CujzqUsHD2PuBtLraFgiaRt3N6QnM"
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
