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
    "3gCHvF5EHCkRKLgQzANKiAQNDvgo3EgHGRHhB7SEHjpuiAstjBjWxxEiFSVwjmwHxZRFYCpAM2MH8VhJTacApXTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzaTMVVteUcKvY88oQXjZJWnDbYG3gPLpVpNU7ud2E6sRt4uiBVzTb1wy5CkvgcHWLMEMbExGkryqzzsK9dHqWC",
  "key1": "3waWUR6czguJ6udfnFJ7QsAwfAWgHjQqvTsGZgX5UmcnzjuzeC2FDmRPRsbfSFyr8xqVs6pWYuewD1nx9usNYCWw",
  "key2": "5B9ZVJKN5vwDaw6izMRsnvJPHqsv6XupwPzP3vCFub2mwQ7VJDTq8Cd4ZxyNHtFEWhkJNmVsLtGxcvh8Dwzfrjci",
  "key3": "2nkDPYsr3JeAVUsPa5d26PqvhW8nASuUfoBQYmKom93JQRLKMZZvLVmrB4Rsqf7nXgKRQ4rfhVhQjZdQsyrgsovi",
  "key4": "5FBXbWacLcNEiEGHdbEFqxwPh4a6CJeRVXmqTPdtsoiPjeKXeicsvkxoQRQkvQdYCF19MWD7Q7rdZ4Mm4YDcB6Jv",
  "key5": "NyHRDsRdy9e5XzXx33y7M3wKuURf4Vh6iUrV5ff4W8DnauyEojVvapNu68oFZRCNPgodAsePGbWuVALgVv5gLnP",
  "key6": "GpGTJ3k3ont9h3aSSbZenu9bp1nnFLRXFiLw7dt2U4sz9zDjTme6ku4bQNYTjXD7ZbCKJk8SRjangKV9F8YPzw5",
  "key7": "5pUSXTYdQXzorYxS7dZ4GrbUbajUQLD7BonMLVEqca7ZZvdVPkhWDThAKNWUxUas1M5a4RdvXP5Q2LXcdsffYAZY",
  "key8": "2ZCCcbT9GM4gRf3jVZ1AojWat6SThQjXx7MGLang7NggqnVi81e3V9KCHVH2TXF9GZNFSGpfnQGULxSHoR6TZhXw",
  "key9": "5ri63o2y25wJhC5R56z7i26Lc1x8rjsM6xSDwJvPMSpTa6fRJ2Q2mAt8HoxLbfYMz9JYB4CM1519ZZ2ZidYKzrEc",
  "key10": "4gHvwnsFZGGfvsYSXCoAXkrKAcXNq23cqCcD7xCWRiugngQW4s4nUTJ8XZyiTxRuo917e6fN8dLv2gqpKh5iPtrp",
  "key11": "3YJe2yY5Erw4n34ymTfL7NC9xQjzDeYorWirW5a4qJC78WZcX8e2rw6pybqZFvuTNZCS19akjfUrQuSaZFYY95fH",
  "key12": "4MpGVUM1gVQ4NGNc2W9WVtFzUVZZd3KhsEoXsvG82xCV4QhZ46AwkUyTK695SWjjBsXEsioEkdGMxtDykcoDM9Yf",
  "key13": "9ERSMWCAHL4QjsEVAV34aAXT7Mpd1gfsFxVyqGpBYREr5ma4LYdtjszkECJCfx7sdsStX9PqfQFvEcHvXdZNUvA",
  "key14": "BSABZePFgA6YyAM28rErzBZYctFu8npfQETzXysac6LsbrBZ2tJiF3NP3fmvm5MfDeE28XPyd9mt5SDmB5VWFti",
  "key15": "g4CRzK6SkQtZcJm8ASSXwVVp9x8UbhrXrc1b336uJWQNRVSoaLawbCczn9oJAT1JB1HCmyUet2jG27s3fYXZ4ti",
  "key16": "miPKYJCpr8HMh7BndNUDEkdM1f8rMMRzJUk4uNfUqKE4Ptp7xsvJ3TBWCPsyDrvzwFbXNLeqfwVAnxYSwTseZX3",
  "key17": "3Uu6HVTm1qomaVrJMRbFyUycuXBRtutEPFu6VJpgStyuyNQBWWkJhUiZhexErnqbEFd4WMkiVAWKsJGqm9U7cWL5",
  "key18": "4Kr32vfcx4MjdJogr2QHgqdrDoG3vLsU8knqQdgU4b4nAMrBqEZKovCgUYiw58nYP1N4aYjpnTERErJhjroRAYSe",
  "key19": "22ZirEiuZiHm2rkxdJnScM7TXXnfhx4uFvziM68KcXd5AzQMH1NDdXuYXHzwzGeiPxnLoa6DJ6Xi1Kpdiafho3ZA",
  "key20": "4iqJPDJGYVtjkwL1F9oh5b56iNqENG6KuZPzRBAbHkpcatCfoGaCWva3zAPBvdimfhXdDYa84YxUBd6u8gDKiyRw",
  "key21": "33ZE9trqAqfTzU6gkY2xrKMGoYsBSZC2sbHXRXbKegUdev9nzH6N3zFNsxaQhsPuhhsJKeLQoaaGQFnEmZ9FJLDy",
  "key22": "5N47XnVRSBfrCKhLps7yEpL5gfC7mRuSJa7KN9RULxy3uroUfa8gMXkcsuFQM1tizEnxxqNF8SJr886RtePfBGsE",
  "key23": "2tX8k9qW1rSWMUqgMpVxDE6uJ4bVzUV8Ho1XTWgo7jtrW4qK6JyhxpRuux3462mN5TGVemTeFKh8ad6HGGR3VEfE",
  "key24": "2mrPoP2tchNHrLR4Gm2W7iwbZLwPsgssmhBNKxoTLK24y5drwvgCTRLWmxvg6CKEYvtsGXcqZg7KokJo9FmFJ6Zz",
  "key25": "3Wfa1ftisKsqCbwqPXLqvaPtSd291C6yFCww1YBcX4UjsnwhhaeGrjdmnQ9ZcoNeBYvkCAXnjsHXTaG8tDyHeFMZ"
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
