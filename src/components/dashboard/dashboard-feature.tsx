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
    "2iEq87jV4WRaWWAPnapk4whZsBrwWxfqH8iJbAgwiRL2zGGvteu277Sgoj85p2LLMDKTWn5aFndoSM2J9X4iEvQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oZYyDBqQT3LSkiiYL4zoJSDksuKpk134jKWPaXwStdnKc4zqvsnKnQGupK1xjyQdk1wwRKxVip8Dmbv26WCGGJP",
  "key1": "27xDLZ15PQG9P3EeDMhBVttkc7sPcvWjUq9gu4haQyCJS39Wino9LPhYMBZDNAuwWiF1UZadGgnC52Eei7hAMhVX",
  "key2": "3q3FanHn2L9xswnD5QgfFYGpSPrNSAtFGzqHqEVaznSjw6sJH9jWYfTUtqtUrTgSYam3BQTRKNuXyyUwjWcHByfE",
  "key3": "47qXCHcpK9JP5eaWtxd6qkDnucGkGsGDigmkxE5F6d6HR3XcKecpgBsEmGCrEr359R6q5QifMorGx43r7FBSRmd3",
  "key4": "5kLt3oecK4L9ovj6Wcw5ogqxPDca5pBPM9Msf3qHc3oNz3hJa5p8xH5djpTs7ikEhUffqZw2tJnY5cZMxoqECPv",
  "key5": "2EZcGbUW8vqg8mgkwih3rsXdN1bWqFjjDvkpLx3sC4s6WgGfG8faRU3uj2UyLNJdUbX4FCJPWWu16LFo6t4qPyXQ",
  "key6": "468jAJ5mrrGUjs3HQd4tzsysA5TSE1fYtcaiW38bBbb8aSJ8NKRFDuLQFgUstwMy7QDsUXgwVPjE2tzYfA6ZiWcr",
  "key7": "5Nw8BnByfPVVEYaB57ZWjedtw5hZSiCcnWUdcbCgJn7TiK7zyuWA8H7Fy8TYfiLciyUTfUTAvuvzp6fNUvxjCNb7",
  "key8": "3dRAnDDDvTBMLiZQFBep53we3dDw6VTE4H18drYcTa3v2rZoYM9paCpQsXh8wueqLPvCXGQD4PDTebrDGrHfg3sy",
  "key9": "ipBxWjPDZHQTffYh5xrggbYMhzZdYgZyGPi5f2ZEYQQmuXDDwXVK6rUJoQzH9sTYeZpWuBj4dgo5iSvweCMBgqM",
  "key10": "C9aNNCxs1csurveULqzZnShdUyg8U17KxNvAU8HhJTFMKjS7LdYTtXGZLDyjbQvFd6VatuLERadCc7LQM13x9Fu",
  "key11": "3kuo4HaBN9qC7SWdH51Nmb6LMJ1hxjF3GE3JsA64qbPZV3t1wGpL9fgw8Wv2Y8dFqrKrnMUbugeLUXDkSwREK9UE",
  "key12": "kyZbdGUrzZMYCPq6bCvDmhvvJT33gpzVdEDCJA5uhcK358PtxMrsuP2Jzec1kquRauW79ow6S6CsCUqqxPvx2eu",
  "key13": "5ku7vQB44wnSHs2EnDrp9HCreMQd79DBVeq6vJWJd2hh3oQEqeraq7LAszs8b1jgbZs5ey8uAJ2n24bG1NeKJNK5",
  "key14": "VXgGmsR8a2ZG4gBcuS5AUvz61C8CdFAbKxrbwhucynWnHUojwm7aMR7mccrA4kvnxDtqoiweV4etHGp2TgGQu23",
  "key15": "4yBV3HR4hRBW9uyk5ZwkmA176aHrbcmv5n8uQoV8tZ17V57f3nVnXkiWfT24GMeaoHtzGq8Pq1tAZV74R7ZNTDEZ",
  "key16": "394yRPpQFoxVtedecVMEtJ3jeD8J7ao6QQUtKvA6hB7kd116KSjm5YsRdXMjaQMXfzjnCLS6hSAMkatd6YbGjSNR",
  "key17": "2GzfUpa4JPD5APpcUQxHE86z6rRjTcova49aujKnBtkUbVESAGuafaN98bdCArs3ghDY7sGyyUqj8g78ukiPu5PL",
  "key18": "4GUdvZgwMvv7fdCdPxMiDJ43n7aNjCeLkem36K61NvLh6cN9TWfqJGq6HQHuhmuerEzUwKyb2uLoZ4mUJb74tUVP",
  "key19": "CWVzaX57B26bMSvSTdXBWZ8qJiPbLXnGA5JK8ygZstsBkMk9UgvqWN6gfBKj5vphkxC7r6JCtNoCzRtBRzKsa1f",
  "key20": "2bL7JS7XQ8fY9Fg1BEQ52afEtaSiCUKDCq8zyBEKqXw2wqnqwbEsUjwA5bSu9ADwGnWq3pWVRkpmjQ61X8mrDnHr",
  "key21": "4yrkbjpx9ke7vGz7jQ5hKy2shnUiS7w8uPET3uVdvQZ3beztpbBFnSiWsugrg2H9tCPeofrFWVQprguSHRwJZRU6",
  "key22": "2ihogsZKyAvoYFFQXSfvQaQgh24dqFTkBRyRYBwzaXpU9GQKRLw3ij66UMM9TpJB9ZKJhkdqaxsX6JaP5QEhXs8W",
  "key23": "3qERyW9jKoLC7HwZ3CCd7ury6kEQ9pGd7Jfo2JvN3f9gLXe86uTo7Y2u1oDU24tVVf1PUgreRwKAgT5QQyKSKMxW",
  "key24": "5DatnE24rqc79kSe98oSSTqQVe1nFPoEV3RMZxbxEGQZPJSxYJaETjwHFBNZCZ1HvZ8Yg3TCWvPKBbYsYpMV5Yie",
  "key25": "4fNJnpcw1CR52yTXTWWy7Sm9tT2CeeYf2otVDJ2ZT9A1Zm6WnyfGRDYqS5qWCBVDSQBPMGkohf7h83SLoyKB6kdL",
  "key26": "5V4c6LYqPaVvBjhnU8Fx1Vs5xpTYjnRRiaT8LkPWngszqjLC34QKicVP7j8A3AmVGo8ycc9BrMTLTZG9M22NRLH"
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
