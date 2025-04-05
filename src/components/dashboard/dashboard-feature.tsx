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
    "21bjUFRqwMNKyLZMYf7XjSmiZ64vVgbpDffuzteZPgM3vuaLZuZUBLnppDRQwmGgq5bUrZcftmMytDnBs83dgtHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DbJvXqHLvRduyhbsyAgr9nzvXCDdMhYfGJBTLYYJcejYVau4Ad9Ycj5LfEmdLboVpcxcovBv1wNGJFNuWkQT3k",
  "key1": "5oqrT1AfXM94wXyGwUpdWQrN84QN5hFzhpdssUwfjx7sBL5Q3bSXH71UerjuKf71ygkdByvPKr7MF929H7TyQryr",
  "key2": "qRvBN8JXzJJ2V6wxCAirEZ15DnDACcWUwGukCF7x56cD5TUBQuqHGx8fPLEZidaR1W2CWN8rxwoQkzBJQWTRiZ5",
  "key3": "Y7ApjiwJy46s7U36VVUrLMcwU1AZcCLLN8ja6KyCM5WuQXgUPhmVDw6fCcLAei3Dxu6w8pf8pQc37bm1kdzJuZw",
  "key4": "3foF5X7EArDSahBDh1nn1YH8QMGzkqrbkhpWQQBtV3mS6sDuHJ4L33uy4vJcf7QY8PJLCciGpa84oxW9yuYYKVG1",
  "key5": "4ZzHTZka3TM8ihR9pVxmWPHtGN8U2FX2tpf52nUr8fc9oSyN7FfjV6Fa1vHvL6X8AQRQnZoYrmqaCPCoB5RVxJAB",
  "key6": "2QuoTtGeC4RKYywGC7sVdfkrSiNoU1HQ35FBmcWJqovJwtmXpcoE1AxzV8uuq3v1VqynX6JDvQD2hroZx95RpnbS",
  "key7": "2kPr8FeTnuek9QKE3gZ4Et7UKNWUKn9fYp3eGjuui5axNFfBjs7C8HntW2sfuzAgb8A4KBoFUsTUpoQG1ZkAWNsn",
  "key8": "4F8BcsrdxWv6kiCYX1Je15PVmGKjUp1hpxmafefnEab4R3DgY7KZYwE5vnjnPC5mSUKhs5eJ4rz1cK4GRmY8P5QS",
  "key9": "EJHxvjnXv92VNcDVksGq6VM2fdivyiZaJ2N1EbrN8PeXH6SARk6bSbDhTdCthL9VBdhN1DABkj9DJBMqrpVhbux",
  "key10": "4cNurdoiumFVTabmhmvZVcsqCU4Bh1xxGVHSW1b2VPaPUc7qT1aSJJYmz3sx97L9gYUbMjPCrYfuJXbjp8KnD9xJ",
  "key11": "3VvdD2JFeKzGtjvELxWPgGz367yYZPUCRPhLKRn6BHEPLnQAMoY8T9BqStkNc69L9C7vx1cxHuqS9LbQ8xLa862Z",
  "key12": "oY9DZV9o8SygZsKYkoDFMb4gBEQz6JxU8Ea5NAsJCcHCMrmYBQ4WoAvDr1dEYnx3sguVZQkFXbvNnxF9oyZ7dAS",
  "key13": "2NRosbL8E4jvenrV9bfiRxzDkK6ZNRea5GHb3iB85dCamV46wvXugMghuKQk7GBh7YdNNmXQjHJZTcuxdA4tsQpH",
  "key14": "XhHkcWMjmDnkU2WbjrVhUiVwDaqJD6bWMeo3Sote1AEKmeAbTyf1AeJJXWKfdpMegSmZQNeUmb9ghQVTMVjZZjG",
  "key15": "3u66EtPFHANGwJGny36oBo3rXgbRzR2um2WwbqMd1zMNKqbm5v7BRJTYvtsSstvF26q8fbTX32GQrAuhSNSfmxzj",
  "key16": "22JcYyi2mmnADaH8RtvRC8vUm83UufGkfi9RUYtthovMnpPmrv5f6aBZ9KemrMbwbDP7LX8L6s6uUGNUD1sRyvAF",
  "key17": "4wTacNHU5VStqxzvtNj3RtCowhi8k8aeiXycf2JoBb1csYfjY62vJcMZ4X26m9BLdSUo7ihrEkkE24yJ2orjWUWR",
  "key18": "27jKdMynqyM9Bc4VNuhJYVe9RHgNPhLvsMFRb8nJgYTtHGeMKzGszg3JRjwa3JxzEKjtjxpdzrEUEh4GiAiEWuXV",
  "key19": "4eRZs2RaLbczkkBAoDbAMnNi5fAfJbVQsyroph4aXHoJZHR6Zhqw7D39tWBrcKpYb5kPwup6f51XFvW7EyjQqwPw",
  "key20": "4nCNP4TgJ6NW4DhzRbpN2X6jgCh79WhMrugQed5ujraDTWLVsVfvtfm2a2xZwY71N8ZfbpGWbjuvLPTX1uykQ1xP",
  "key21": "2PmuKdjY8asiR7fudxUTM3iqdbdQdnrbtQLtt9hQnrKxq4fVjwQsMpGFFEu2AnhHy4YBHpXJH9L3sJYz6TgdcwYA",
  "key22": "XS5sXusqoNBChbasXkiHFyY9zuFdw6CeNpAvsT2U1kJxvGtwKNS8j5vFZKfdSccRXFDYii6qMNTA7QqE1fxF489",
  "key23": "3YBAj2ffCGmYbgFtQTVxhkjYbtH3GPCc8o5iykgRNGzuTppogVv734uCLECKTKp8xw3xP1M8fyNZ6UG6t3aeZqaM",
  "key24": "4YeLNxDULE2DtqLPAJCXUyUBQpqVc9f8WdmNpU63E5JEVZVndQRE8AHzsbuxyRUG5NRLmZ1kKpqvP8yNU5UDaLfw",
  "key25": "3kSVM5v4kxbQ2BmvBCyJ3BStBqQAKZg2SiahMAsW8Foc9CDsAtEWohk9rUapksiatJfuPrJ8iKQGRX13Po5j7Y7C",
  "key26": "5LhMFEUrGxcGeGgLsZV9ny5cg4MDzRNUYXdmWo1Tedtevz5cm7uMhmFWLyReNQiU9JBvi4hD7sRHEc9Fw4FT3Wkf",
  "key27": "3yKMetGdjQT1FMY6k83By7DYaNgnCxCNkbkesuX5Ay9GnCvPe7DeVdGaa1jZyY9nj3MYgRv2yYcg9bENbd1uyGPe",
  "key28": "k7udYrcHRWt6nV5HGqUbXE3rg3N5DQZfVcdZd5JKqkrUEW6npzFYme3m1uvat2D22AYG1EUuRUwU2d8Ty5kBtYM",
  "key29": "4rjquwQJDA9SZvm14YCg3WZJPxD2RSbC8RJwK1k7Uvrb33PeugTnfmHcQVyBh5bUWcmiQkeWsNJvJ3DffNr4DzcB",
  "key30": "4Vi37g8Sn3WiFxdbGZTUG8ogQvXhxFaEzTfy1REpW5BtiJrtnXmuCVeVAgBLiPZog8aMXMAoua2YA325T1WKm1QK",
  "key31": "42i99H6khiFLopJ22xTy2N6jiMqLH7qsUP2PEVPF81ypQE1Rri5TC97d77kLjhCC1xtHGJhwVZsmFuGGmFMumG2K",
  "key32": "2fJYusmieq55Cm8Mn6UAtBnLPFfN9bWdDhFn9ADHWwVktRLfs8KwNKx1NjK8ujPFuQ9oaCS2a366XygB2qSBy3nj",
  "key33": "3qQmdxXMqySEeWcfZM9d5NYkavHRdB3dPd2HHZGgzHxnZ2xknyPNuRp2e7dfDNHqXQbgmp38544GqN7t6WoeQv2p",
  "key34": "2n4DVCm3AjKsP1XvWGMt9Azc52xDXrLt2hxK5iEYbDEdX78RccA8mQVdRBe3em9XhCCQCyHwudCKAn52EfUjxZ59",
  "key35": "7qPuDGJUX1A4oVHS5doo7CKdCZZ8JHpjfq24yNxDtZcU4cZbRdvdNGBu72onNcjb3syxLoSrqGdCMGSNUp8UPaz",
  "key36": "26babsiwaMWz1MjeukmmXCH7spfCZ5cfe2WjEhYtGZRpnpXHPFbSjQrNqP26HeKxqTSq7Bh8dkDV3ZHbytPeFbZs"
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
