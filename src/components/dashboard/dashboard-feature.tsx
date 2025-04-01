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
    "PVWLPkjQbpScPkGk9rM9b3pPjh8GTodC39TRhV5KUZsAg9X5pXPGm9W4DphnPATcsDW7Bd8H2qPspk8x11GUzpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22fViRd5CJSruDKWmMBKNx7dH6sRtKyrmWiCDMEtLn7qEhXZB86KKoKSQ3NnAqkjn3sRMn3y53ZgzvqgCis2ZEkN",
  "key1": "bTW6Bn8zMTPbXQvr75GujcVb9g9xDYiMLhqgb7jCMNq8z1guwEHQzCrsea5F5Xc88HpRAivMGjvqPNJkvKoXXfR",
  "key2": "42K1i4KY6g6FDv98tHQi8N9QThB4JDxHeNBBmubxp58Pqr4HXe8ondLofg3xVRaq3bxvhYhUNiYB3Ftx9xdEgUuS",
  "key3": "37bfkgj3pZjC74Jy8rwHAraQZufw69QSmuZPCZeMGXrTARVi9tSEE9CazcK7KG5ErGHexwgyQQeC4De7PghpMffj",
  "key4": "2jsev2ndXhEaXKPeu7HuhgTYybR5sRiC415oGjftp3fxsfmRXR7i1R8bpkrAjLDtYhj3zumUQ94UwpZLHNsUiShj",
  "key5": "4G2vCbczppCEe7jXBLn7S7EFYpTFRgQ8MZdKrZVuPXH86Ffc1AEekgQNgdNtHJEKnQf4oMFYbDGb3sa8gDbXW3Pm",
  "key6": "4W8tHHt36SAcnh1KQ4233E9YPwqsUdk4uicvzBPJScNLrHZiK2QPB9xXx4yNx4M61E3X6RQZBTXdKzZJLJY5Gx8R",
  "key7": "nRyhRr5SvtbKiGBBPFghSxmCTdTt2sMSLvspb1CQSifTuK3jdtPsnRG36Fk1xzSycMxhsRzff4MG6CCu6j7M3Vv",
  "key8": "fQHApMR7YphBkXoPEuNMvaCqLRqzAuJ9oQ27Ts7P8TnfaVopH4fBqeivKnWD3zuXUR8EKwNCTsrquQpr1gCHRrQ",
  "key9": "4PhHPuWWabu2FQLapjomHMiTnsRV5w1jKyndRXhDunX1oTgksKMAn4BgTHbcKe4tbRygefnEVHycCqdgvDstWep7",
  "key10": "25sMSMkP5FYdNK6EiabQYy5T6G7q778j1aAxEfgCTSBZK1Nga1rjWdiDwKdNMG2ZKb3GGGuSz3d592TNFZZQsTip",
  "key11": "4mjiPBe9tim6HuqdJB7FisECMjsp6iKYwJHVESgR6p4wrSsSozZdsQtQuzXF5NAG4AShoxBPJyRLKaaVRtEJJAyf",
  "key12": "26nDKHUMyy9znXsqJ7c22GjJTXrfwYnAQX77vjvEjKj45sjvy4HTskBJB4EizvuVGg5ebA2NWsrcBPxXsyz2yfzQ",
  "key13": "467nPF8VzCNMv8YvuEiVGcZsDNWTAvqvfpGayWDnyUW8G75QB8b5TUChmpk2HHeE6LWBqL5DiG7hZYBznMaQXuk7",
  "key14": "3mmvAZEaoN9tcDUmoJzTYEby38yk1hpa1fDsfQxW4nE3tjdSEjpQ6qwTxU7wkjPcQaiHynJkZyqUAfabmCMM84rd",
  "key15": "6465xi5Q5SYzn4Y17zD3U7kNtUNNBNbMCunww2pmQTKXcfz6dLosekJv3j41t6Awr3fPt6uX6toKufNCyUU9HNmx",
  "key16": "2JTz8onNfR7MZ6BSt275uxCu8zzGNJ7pA2KLWMJQjS1GTGXjwuHB648pApEC1UmyYnvF2h8183EQQWfveiBfn4bv",
  "key17": "4wrxYoYMCi4DfJFviYgZadZdVpDzPRMvvM8nwqKTzzEjcVNAu4fwACQi85rnn2oPBND8qUVBK69bGPnu9Nbs1vW5",
  "key18": "3SgeTNL3RMeQGc96FWQqZLp1YSjyDWu9mbaxKPhnpL5qg9BFykcZSsreSFc7xuqLzZtBXXG1y1w4byeRXKFrtttn",
  "key19": "2aPj6bKVQiNxJP6y5nGqU6GYQfUynMUh588ZomENEqrUkhsnHNbne3XApF3GDQgicrGCoBowAynDhM8vs9hjuV4s",
  "key20": "Y1vaxEtPiwaN5ouRMBZ1cSFBmPKiSpFYTTxJdFGxZU1Eyhxttw38aakhjKG61UaqD3nuV5sjwPDKAMCi6Eogvbu",
  "key21": "3FfUmLuiPaiRoG12A8vFvzTE3hv8UyWdhaq2xfFCsHLagvkiH73HXrYMDszpXHbucNCsTifUQhDSuKTmDoGGmguD",
  "key22": "2HxgEeBSJFm8mdCSfYNDfPywttC5rw3RtBhUWYV2zKLTHnjEvTrYruszn3D2fvPUcXMKaCdjaRJ34TaR1Gjjy3nu",
  "key23": "363TJNChX3Sw3is2F32AedecB3RfTfm5rNSGNSRWUt1ctQJkhbkxN2Gzz4QD4wBPd56ChCoJuydKdfck7jXD3nFn",
  "key24": "oZvBBHtpq46KX9weMPGQrztUT4yfDuCEicoCJk4pkD8Rd7pXkLM3AuNhoaurVzhke4iEfQ4MVSiqzFo8NLqNAQu",
  "key25": "3yARq8cew1GdAbGBazPZGNFrBULCK1XqHzTNGw4V4ruRWrW5YBBjHUVpiSNTjj6K4z1kn9CjPMVU2QHzUG16RpC1",
  "key26": "3fWCAsMUShtuFnKrr1CoDXigMJwUmRgnRSnZdLgHhLbRBnN5tVdeMedQzPXUdTUKaXjFJbi5hy3gawRyUXmXNDP8",
  "key27": "ffVMU4qAJXPkfrshm9BsByN6oR6VFeX9fmHMi8EWrVsrzt1YuXsQ3LpNwvdRADHvqE8hgVKH5ZUy1eWAdJPh9P8",
  "key28": "2nUaMybrFi17xCwj2thhbtmxwANu3HsPRHowdA88pe8RHm2o5fNQGMuz8QzxDKSgFuJZstEuzahBmDGufCvbu9Kd",
  "key29": "yN37ZZRE9FVv9WGhNAz4a6W6vKX1uPZpXdDjBFqxzmWsjGx6njd8FhdrKnPMidgeuLjUSJ4XNwbb26PUBqzT5pY",
  "key30": "5RKCkRP9ojGp6SASGLdRUj9Dkgu3rtQSpccskSbdLBCE6mhRKGc9c5j3x8JYaDZoPCxTRwGGtHNqgUPCLUSgDvRW",
  "key31": "2w76XdiHqmeG83t2B8XSeWyr8JtPZrjR1gR1VTycEG3FkKqM8C9vKVFNvZonauR88oMeMKNoVMGtVXHr2oJHX7AY",
  "key32": "2P3e2iG9RFYbbeZ6DVy3YBpi4WY2nbZcuhwaQaBPRWpLKQ6trkBy7jcKbnsEHNjPrEm7XjXq643bRTZQFnfhLtEi",
  "key33": "3Zx5SfhVMbUji552XEJHgLnyo5RW4nFvDP87gCL7ENJbukJtZhohpZNxaUruvADosTnciVVjnsjaEEk6eneFqRYL",
  "key34": "4M2ptWG5rBxRPz4woMStMmjJnwyXeMPv7ugFPvj1WNBfPBFKj2AfPoYa971FjXbtiN2rSmDSdJq1FyhsPAVdZdn",
  "key35": "4HkALnxX7xYbggG1upiTLPNQQS1Q7bAqR4L4prqfEsuMT1Ry4K6Qt8uceRCLE59Hyqpa1TMGBLt4j6tCM8HDJBdB"
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
