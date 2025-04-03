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
    "5hQas4LUBq32i4xqJ5z4pwkhBFr9Uirt9qizgn5nESH2ieBKuHe9kMqKbPDvM85fhiwS6wcZF2U79SQ5YSZhRmYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwdZJt6kXGNfxG9dNoJTeExGCvud3bFBmqJAtGyCnxgkW6u1RnHZjm685XpwF8EJDybMJZoTZapdnfzV7nfbgzZ",
  "key1": "3HWAZE2huSoRgYwTkCTwrqzVBxoXgQoLwP3uaXeZRZ7e8yjHCVU5PJKWnTQrwW1cGjhH61i34JH8i5QRABz93KHR",
  "key2": "2JuqJ6D66bmCSFa1CBRfsS258BCvvZGtQxru2y1oij5VPuV8HpXorp6oERsLvdfAsb15qUoSubQf7MeUaqX516PM",
  "key3": "oo5ujuSMF772pHzrch1cJAigNJQgwC558s6mci8yTU92gRB6GCWVVbX82cshqVThq8kiDptKfuH4XYfuwwV5WMb",
  "key4": "4DC5ErcvZuGXjqo4PU1TArjmyoZrwqbKbFbfPiT2TWHT7GamoppF8XVRUor5Qa2X4kFSSmbJbGMesUCrB87EgUYf",
  "key5": "2vwfK2vpefKCjKunDZjTjSABExbM6VcJnu82LbzZkL9kD9SwzprEtutRqSQEknaFdgDn2tpLSzP7vFSQ7Kho5Q7t",
  "key6": "9TWJmJbMXSjyVbD2VT8ngRZzrcEgMrhW86dJFm4Ma5bmFcV4SLYaQvn8FEot2TxU5XPkH4j4QuxkfQ9WiXZNpqq",
  "key7": "5ceJpZepMbBPzLGyGBhEScdwtkd3ZSP6ZNcCgCxZiesjG5xQp6voacSEVWiG3PRM38CAYgAhCrUWkUzdMzXPA6Mk",
  "key8": "4HhH4CgQvkpdhb3F3PdSnjSHBZPNRzk9BCjstPEKDAcnhNSetxeQuSdfvcv2MPdusCwZEUY58imBiJNUzX5zYFqQ",
  "key9": "2D4Nf3eq3ijGRrDzp2XZvUh5QfKxaFMQAwuJ3a9JWWViEj3D2ByYpeShbQpTtZbmmQmx6tLKQTaQ9odWs7pU36NE",
  "key10": "4HKsKX177gGBLjQt6LZckeQp7T5h1CfUcN6rYak8Z79EbFDfmgUCWHgowvH9y9DjnbG68mvWppFfx7Y3ZMcZTknM",
  "key11": "Zsn6aThgpD6XzQhWss9QRWV1jUnxuxTej74pm1ke4g8aA6NKtNPNm5bVDrbKLCdipFxEJ6depuMDBv9ke9nvBU3",
  "key12": "9MwYEdZZm75MH2WXyZTKXZ93oSHQEm2wR8WZABLnFTh4bsQ1UNTMmHSXf7outRuPaniVc1AMqzYVjDrTe3ZbnZo",
  "key13": "4bRhZ4as3Zd6kKZDuw62Jv9He248ab9Lcx8q6uBnjVfrZggdBhVWGH2jZSJMiR5gjjjmtR1AVGuqwQiVnjDnTnvY",
  "key14": "5PgAJ8kqyMMTBe7MnZq5LTHXoerWHHneGXpMxmhFaG9F2rThVrZJSUWaDCB9BXGuhU7T5t4WDbSRyQzgibZvWEs3",
  "key15": "3sdqGMUXLeaZ43PNVCdkShk81HZhsC8JACKt8rgRJJUCfmA1aQo2unAmuUKMPtPdvYNoeTAyYQFXv6jsqqk7ehap",
  "key16": "45BvvUA3zphwRY6FMmGH8mpR1roQW55KEE1a1QEy22rkMTUzwDzQA7vFYqokC4YFUtdbnbKC3rjHfXgg4ykEde94",
  "key17": "3FBs6JJA4LctgT7E81uLcB2vPtXwDBfq6tKVmdku9SDhnw1vbxXpdHoUKhN2wHtg6ZcMi1zaqQmx44BfYJyofeZq",
  "key18": "DdL1GoH18D7iazaKA2Dp2a8DM1KKzW4ES9icpjaYCQBiGs9oabhseLnopzTKUspRb5VNyGUzNgHbBQoQomJhh8L",
  "key19": "5YifkhHGH7ZTJmLagXAcMD58YgCtiXUkLvvK47PBwpffFfRH68TQej8BygwnVqv9YtcFMsKvMyXAJghjEVguuNn7",
  "key20": "2BqTW9fyRmW3SHwnujbvKjcnEfCjfmeX6oZgdG4hWqEA7JW1mrfe8ypAWW7LHF43xZztHxUHtApwidw8LkPr1T9Q",
  "key21": "qpBLZNoo1BUeoJRriQ3ftxBuuFxKbK5Kk1zmutmK8XLtzreKKKgsSbH8Vt2gNFMh9Xf3dTgvyUUbmxwvtVgidCJ",
  "key22": "4xEBeGNVTKMziQVqe7F5fWUW2sz2deTkLc5AVpN2J7XbXEJ9mH8EW8SLDpLexCBvmcjrTpBA8hCnSBthfSRmiBtM",
  "key23": "1jPVs63cTnXGHrXr7XPefEUoP1bKEMWLP9VofED3eAZ3LEqVmXd86VDC95NJdMFM3Bwx9oWM6J7UVnr4GQd1kfL",
  "key24": "3mMbgGrkhupzkMVBEWWkdHb6anAZKApoRKcAE16mGdyG9Dg2FKp9qXmTS375FFJXpLWzN67DPYBjh487ToSMVYEP",
  "key25": "2vvMt5882UPZhhQjxRo4UY7WGtS5LsdzFKaeysoC7V1BNLgDCi3xGnLauJne9n4Bc3JDH2jQqZgVNXVSuCUAWPcs"
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
