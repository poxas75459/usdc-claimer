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
    "4msjYzqbYVpw2YEtBjgbhwg73HxoSeGW4b1GkPHw8yycKBDxpz17ZgzpGdUws2LFDqxDRqGU8KAkt6ky95JKyc8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugSjfWsY9cowHDxSY851YeN7KyVN7VUKjB5nFeD6xkJGjm7uttURJVKN4jfuyE3182n14H7TGZ3Uo95D1oneRyp",
  "key1": "2h2keALENpYaMLvPNKDASL337ZVQS4g319szJPTDvKLkFWkXHLSMYecbBsdQLRfSehYEsvXknGkzgFiBbNoPfMuF",
  "key2": "3nizQt9yHjk43qTc5Epv1JHJxhtKz1aAvBy1Up3xiHQ3sh4PNqsrdjEtbHu5rLfm12pR6JJGZTxrFaQ8vHp5353j",
  "key3": "3LAHqHvgw55stQXxhsWmnNTidU9d72bhoaFPXRMkSesmVpVcimu5SnQdZRez799MYwfsjcoREg735XcR2TMfH5Km",
  "key4": "5exWa8MGBa2Sf6mbk9dmv1PSqyhtDTMhWUfGoEyNzQFbWS2aHptnCt4pcvjT6fj6kpqLSdTjctdz7TQFA8A2acKb",
  "key5": "5f8rKJGmgJQS17wvyrjzUTPqisUaPzAuKkUSRqSHGxYGZHuPEzsLStNxZzf3ZPhkRP7VutxyvM5puhoUzAC9Fjb7",
  "key6": "U2x9nMNN7RipSAtX5dAgB9k3ZmHjNPa7fXh4LWPFNgngkrKJMrFWWFDeZQiSrUVrqBaN6KYX6egZubgrSSQnj6b",
  "key7": "8eFuaUra3hsXa2dUMDFpqYCULaxs1E6UkSKy28ZGTud4d2wxH1NH2fAy4eQsnM1w8bEQWqJr7NcZSwaiS8HAxAo",
  "key8": "4NxSVAWmGwtd5kCx7xwAFH26z1e2kXG2bUjLQC66MyGqbiubaH5TVh5ptfbQXAHKPEnkmoExoXMcXxGvaypsVWt6",
  "key9": "4Wibfz3YzKZchks8ftDP8UefkiLx1hTbZySVqt7NsMkzEhresLseKs89M82H5YqrPPwgLbpBJvkZxUsny69BRT2a",
  "key10": "4ayUboL52XVPh8nUM5LA1anzPfcW8WN5scnYud4YigS7Z1nQLhq8FAyFNkJKTE7c81FoNMjuAZ4AZRKPTN5qJ9or",
  "key11": "5UHZb48FJ589SQ1DbmWxqTmaeonhYYVs2rb3kAAm6UqzkXm5wDZeGZXSbzmSTtig832ZicuBcqnf3Er7M1EeFSrp",
  "key12": "3U1njz4WULiSictBgG4Ww51Fc6HTkX7EsGhQUAHcfDTtPKBvdhwNCD9bPK24asrk6TFeWubGYh45KmUmzFwRJdCC",
  "key13": "3fewrnZFH8d6PjLHxUSpjz8NJf3ZEPHpqS5WvzPgj3gnuRJy1WZ4WPfAxvTcaJwW1Zy9seCcamoBCMXh2a8sxKmN",
  "key14": "MKJMrJ2dFn8rzN7E1vW9CTBQrEpvQdquWQ5EBMmpUbHC9P9w5Nu7XxmKKD4xFGpmvyVDXah3CuhvJwM5GV5wot4",
  "key15": "3tUXJPAjJiYqkGUUcvcjmyim9qFuycJP882DYPyJxcY3TzvuqTR3YxhwD3dzV5SHmZbYy16WW755noGJwC1kh2bf",
  "key16": "2pEddbwzqNJsaqPEPx4sTSaQzAL3t7aZ3kp7kLvyFqgpXwifkjGZSRwJjVc2xXbwWqthv1kRkbgxfX5MasZk3kep",
  "key17": "4H5QtvQRBtfBDxv9f5ZogsX8t1CdzPxGvM1BBHecZEM7APvwzhtp6gVbXHQ4bxWcAAXwpFYyrRURroJekP6kPVoj",
  "key18": "22SJJdxSHrfEmDYJBs26qprPa1x7y8RN9TCBYjHvER4VT8moEYYF1Ghws3tmRJK1X3SAe62iuawW6DBSKHREXiQo",
  "key19": "4XqEUrvNKdWEnEDKi6jzD1jRmSkCCiqsg1Um5M7JjxezkaGAin5aA8v4y3n4YV1GQePAR2hUpJoLaYKyDpuha1SH",
  "key20": "3F49PZVpsMGr7JHohpmkKboTV9bZW13Xok8P3jMZqZkh1x8DfuK6YecVX7C7uEx5oxTVtvjJFqwGMmzgDF9Dv5JF",
  "key21": "2sAKzHfcw5SkHVMRBuNAEYrwaMZQ7K2ckLzfjCB3bFPGehxL31G2aFQmemBaaWUdpdPzBzMA2pq9rMGa8VBjpgZb",
  "key22": "5XwBVAYvPo9APm42yXARLBVm4vLSzAYeFCuHKpurNJ4XcQsfocHejD5N6mtiKXoAKeTUm3cDufgC3kwVk27uEDfD",
  "key23": "2Mwx1Dsx7YYGghx6eQUYgdR1ezXs6gxXbytb2UmbirofoB8gWDKaBNYPqEoFYoCBjYNa6f2VbZgWaqY51nEo4NCo",
  "key24": "RngJxwSQ3hxzShhvMKVWECVKdvjH3DUHzUunuNqwVWQasqkyqjcs5AJjDRyieCsC4gpnNN5iCPnBLRPRsiJVFpP",
  "key25": "29cfAMgg7ytDEENuXAuqJM4TagQNwAU8se7FRpAX9kLLfPULWgUsPsD3unuZaTBmoddMAZKk5ucEKQCe3vhMCHQ2",
  "key26": "3iWm5aLGcUqZ2yCoH8LQtYMXRtc38WN2i88ST946gcQV2nvf8CiBZbbxjXKf42xoKt23L8rb5U7wrVSkx5g4D6NU",
  "key27": "4PUEyuujUGBuDrBM4ZFGL8n1o4h1wHbqeFVEjs1E9ofe8drp7M5ZoJb2u4PS2K84c8bmajLkrqGzq7RQ8KXHoNX3",
  "key28": "53rAcJAgpAfJCUMDuDY3wnuP14nJRL4QzVqDx26TUmxzv2M2pK7WtxreLAzj3YJp2JtdYoNYhtKusY3tvKrGaAiV",
  "key29": "3XeY8FMAVY8hqwwe3HFpmCXuTeWCUiyy3JG5AdLKJJeAMk9NkgMYpoMrEA2njtLpF1x4p9q23p9Zq2deZSV17pgz",
  "key30": "cYYJxYZuyShpeUaecmzKzSjhqAfA1B5ak6c4mrfTcRnjb3RwoiKkX4j4d85dxUXqJjQkKnKm23QTvnng7VT5uWw",
  "key31": "5gXVASEaQWJNZRFfVHZaUJdXFM46e2SfMKCF7huEGQKFgd8j5Ewmgewge5bCjLojcsXQ2xm4wVksykCj5P4Yy46o",
  "key32": "2vY4dM1L4QhoNMnsAGLYUVPX7BVjoNz2psKdSrm7oC9sEczQsFDpZqjyenQ9HM7TWixT5enRhnKjNN1pZwVJWTSH",
  "key33": "26K46h8HBkrCPi4aMciF9x8PQfYo1r1R4HUeiWFAMGsvExtTK7gbKNcQgvBawB1pWsS1iqd7PjFpq62dnComr4RP",
  "key34": "6VD2LYi2zG26R4CVNLQvSg9GpZ6f1G2QCfnd89jUmPYAeWTMnTyS9givfQ9JoB8MtSe1NVY5Tbh6wHYBeWXAoPv",
  "key35": "XXBWeTFuWXfw9NBQ51o6xSkEtxJvSfKJFtdvxCUmo6MAYbfp3Hra5ewqUrwCBNAe3mPu2iyJewUyKsreRgLB2D4",
  "key36": "nKfyyvS3A7cmKg54Mgj5P78in8WLWHoSK8Ecq77zr9JMP5A6w7jrJp9oj39XRHrbxtZGhgxemrX8kg4fk7aBrP4",
  "key37": "gXs93GjLbczCuwP4hrujJjaAhLtXui3n6YD3tjeWk4VJnEzCFNwM1G8mmrBvZq57bLAkKFyDwv1cHzMa9t9M9m8",
  "key38": "3rvV8QnodLC1SCAapgA7hcgLHEPRNH4RaCdnirUgi393y2yiVS9PiJpEoGJu1i8AcXEzt6NjZy3cqqhHrB4PdzWq",
  "key39": "4NtD2ZafrjEv5dXoDePCxSqf9yjYuWFiwSW91qLf5rLJEbXrqvBQHwLg2WSgpatXxwxr9qhAiLJXwPyht71HHm4o",
  "key40": "4TWpMjKm9rExsrmowZhXxKdrXPvhocmtLonC3jSXfUSHovgKfsZpz5BNCtNskmvmFtebtmTnMyV6sW6PwjaZnZsk",
  "key41": "5SMhNS8DUE1cypvc48pGPYdXZKgyQDvzPE9d8xkmXk45B52cBsbUQr6B6eiEaf1jA8hBNCTfQo7bj4711CEN6vG2",
  "key42": "57oNSxQTdNZpF8ToniYsrgyoz87Kj5CYvbd6umu5C4djZC74f3sXE9peXE5hTZ9otYJwrqCynhzC3zimjA3ahnaE",
  "key43": "4eFY9w6kv2FMfvT28NyW3nNc25BWFbyCA6uq6i8ZFe32i2eVWg79RykaJUq3rH8TAkYYoUNdudogLWSkzjUUXdhw",
  "key44": "5RwZmmiXbupvwhh1vV2PhEZZQ5oQNjTJi5uZ8rGGYZfrGmcoxuTCytch6Zu8Vz9PQRB4VkPDk2czkQTPALK71AWs",
  "key45": "26xcMdW4NKskc6Q3dkQzaxueAFqTapY5ujroE4FEYrmshtE3yKFXaFhD429wLZXa6Uoax8EqEb2TMLrLRLLohTnd",
  "key46": "3xwFNJbuAB5i4d9jQRmqq7otd5PMsqX746oEwnHuFYyGE2o1zrfhtj1riTSh48Zz5xm6CA9SeXB45w4ygeaTZkYr",
  "key47": "2mFiG2KkkgvHUd9nPBf1ZAcZ8BYmUPY2fpnKfry8Zgk9yyztDLJtqN4LNFhTiBSRMXDzbGXxtbJ94uWmyBBF3q9M",
  "key48": "3RCYHTw6wJ9qoRNupe43MBWHj8scsQwtAkXKtDVBYyvSnP8mSrXYYG1q4fXaCLCAk8eoGTpty96PfEHiTShoYKjW"
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
