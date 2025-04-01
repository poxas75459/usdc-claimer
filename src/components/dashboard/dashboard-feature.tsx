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
    "4s8VBDVAh4j4Mh438ZUgceYkCfM8MpTMHmrRDgzKpeTwgNb89spHnGGLYCB7FAwB6XTZLfuSjF6T85XBP5VEDhZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXR88wPCo7yQ23AjbLxxgfSZeDnnsnCtxs92rAuYVqRgaz4Be7M7XGpjubdHdvaaFcHpJ2gaeiShRqNjdDbGqH",
  "key1": "2yyebniA1X2VH67pymt1CS2BC5UeAc5Wzxqrv1tT1BnvWur9Bwp2BnmZiaC4EVJ9zJnw2KbCASyVxqnNnhxi1wY4",
  "key2": "3Q3AQJrsE96XJiotaejxafuchekkXPqLP1vLsrQsd1HBsD28TtoAP2FShBmU8swyqChaiMFbfr93PtUwMeJ1MT9K",
  "key3": "2P15CJc2zTEPGjnMTjW61KmwTq3y2tSbnUcNTmUb6jgLSrwquf4U1BNruMjpNXGW3MhavzKWgP8nbyL87nLS4Hr8",
  "key4": "5YvffsapstYyZjofXXmNwZsKM5t5AzCeA3qVxp4j5NPTaWzM5aZ1iKXGb7vwL3dGkgPjKYJWuGPBA6EXRzeRbtrD",
  "key5": "5A1xTC3wFm87nYouNKi2tMprWXN64YSHqt7CgDEjoHdjc63iyVDTZzVJjfFVVqgQ2E3PpaT4GwwZS369L28W4xy9",
  "key6": "YUqBUBkaLsctCkALaLQrbxMyhgSgomwhyh6hBzbmvM1FYjndsbwdqJG75vSEPDH2YjEHckM2L9kMRy8BCH65x5v",
  "key7": "3rPCzrWZz8iTG4qYp7TfuciU2fePW1edLujP4YoCgVv4GdBxd5PJWr2DGfJz6kT7WZk9HSmL8cfRR88k6Pa4KSy3",
  "key8": "kLSkDbW4zAs6VpfMtg4SV2WC2i775ttWJMeD8xXoPScgokByMaYudDJu3M6B5cLWu8QacLEmt7jktr1yFxfku7S",
  "key9": "28XipPPGAMw2Q9CokowHhNmspBrvZEosgLRvP4x43iyKecwb1n6gDBQhX8F7s1Ar8RCDq3pynkpYJSqDv6iXCorB",
  "key10": "2p9KskGGS7o3qR23HdRZFWoHoboV9avE2zMC6PHnZKNwZBrUKSfB9RAHvbRcfu9ZnAVxqcr8CsZAbT8y6kTWmVbM",
  "key11": "4ETBqAGNgsbziB6RrYUXAairq3mJGRUspKfRPgfNCmhCVXNz9oCGa5nKoP2eyGD8AHb9YgJBKX2NSomJefiVm9dY",
  "key12": "3zYpAQJKjfiyZTYVq959PGAzBrSycXbSr23VKHRvymPMjPRFFJBSNT2cdJfHgs8p9yR3ugetxKdizhBAdTjyt1MX",
  "key13": "51kERAQbWL4pEuQzTWyodeZsYsZgCWftjq3PGZdBwp6sMR3FWHhpy91JH4z4rJBVZ3Z8yZaJJNBoeZkyD4wxX4HY",
  "key14": "4VSv3Lrgvis9QP2FumYSKbjqGUsbe3wJP6VSnx1VvLdGEfB1UM2srx8LVD5KEieebLxVwcxyujtfgqJZgRAo8gSY",
  "key15": "Xn6eXB4dB3z1k7f31MSG5K2nXFMspHJESgXeiGD7Rc6KCuHyvGzLNQYPKVYLD7w5XL9C58n59qbAHcyYBGtVK7g",
  "key16": "62upqWearapNnjk7FKoEcvfdPj2p5pZ2vBTNTunq9TSRjW322rUP8xua2ytuuYMcfVCNkzjcH1pozaPJkRuzy4C5",
  "key17": "4WcLzUEEnBae3ogeBuZS4iXVsKB8aUoBoPuuZLBs2LAe8HrP5qrBpydHy6Xbn1yV7k3vjYjzmtBmU9QSZpMK9BqF",
  "key18": "4Lv4whQ1cprwzQF496nFxh2NurcwWC6FTtDKUfKeJA4y9uirfeazu4pGpLZcnBjTMXtGZ49tYypH9PbYgtju2rx6",
  "key19": "x9EWCXxp2i5UPVsea9NzQJ7TkeFVjVGWx1RDDJ2Qf8nwpEKoyjunnZfWm4GZ1EpKNzybi5qEqXtFYSBBRmUA5wP",
  "key20": "24bN9b3NNRgRjj7yo6CZvSd6tBFaFeE82XrXBwDc3xjrH5cXczB2xJtRE5vFqVdADrwi9UYqzPFqH9uVadEzvVUR",
  "key21": "m8VSEy8B9kVv6xkoTUcgJ2vtnrZ3ueuGAXZoPpaAsPTMak4D3is3LDh1w4mJ42oY85veK8JFm9k6bBSH5EVoeGN",
  "key22": "57cKaqeW24Gue3uM8zkxKksmJWX74dv3MbPrSxAzZZjwDvT14s3x76XydDRU41CpYjvNjghR3ggzJaJVvELGGL6Z",
  "key23": "3bsXf3Q9NQDc9UFADV3dtbaKsDwSTabVyaMo45sidcCY1pYv1qFThHZdhv6cYrzqb9VEy8Y7QPPchTxvHLsWPDkG",
  "key24": "4aDgwhSLoFYVsMj1zEZoi61t6PBv7fWKS4hNDr53Q1q1mgc6Ke8gkYjY5RwgJQkcfoeVNGcvv9SnpdJK3hwN58iV",
  "key25": "PXQnTZ1tpKfE7a9kExfm6qnZLrCYRosLPchkPVWj4DS6irNDygyCvB5pYsZd2jQUySv6RKxCmaJrVVtqsPf7C2x",
  "key26": "2yxQYa3ShkEiDEMP1681PvQo8CYViMHAnKQsd2A4K6YVBcdPzDxo3F4bPgsNfEM1GETipnj4Wfmqz54i8Zeppxxj",
  "key27": "3djMoXkNWFQNQ8fFgErmP2eEEGsUVwky2B1jHgAvN3P4KyLL7jfckperwntrqxwcV7XZdT13RwCmTCUrhXMhj4Ki",
  "key28": "5q2tqmCq9gN49QUXHsDexP68Th4dK1afdcYL66r584pod33Ct9zBAuEnfEWcRUpWh2GdbkGcyozgJ9ZTvMUuEXFY",
  "key29": "RxP8V2YmtoSsF5NUbFNgHQ4HAQtSxtphai6PbHZWozxmpfJhbkYHeQ1o6QtMSyTgxBefgnBYdL2sxfqnpwrsJ8m",
  "key30": "5iV9HT7Qcf3ZFLdksFwtezgWopspCZSuJMu5A2ebwqXHLmukR5CbDgNJ9CPN4ZxJXDz7AVAmHcReWd42iGuTjRn5",
  "key31": "5FSRhehiimoxRYhV5NTGyPyHGKJF4CgJc3jxGQviQ9k2TLSFcvW2iZXRajPsUiFzqB5wMiNRzD1UFYsjYqWXB89Q",
  "key32": "4LUQmRSfN7XKAWLuyZg1jTPK8yCu1MBv7Nv8MPD6ASx1x7dVg2cY22eWrM3pfgZrwGzPLiqrYZgwzyRJXkijxTJs",
  "key33": "4Eb8oyyq8E5AvA5ifwfCRvE78GSGFBhcrZAix1dvVzgtZ586JJBUhygGJNG3RiLhPSLZodKww7SDFMs1UZ5MgtLu",
  "key34": "4Ry1TVva4xzxkDTrwaa3Nz9zpGPQsMSgfredNLJN4A1A76FgVUVyvnycL1oQCRkWaysBcGnpCH75y3ithymLH4wT",
  "key35": "5YCyN7WCQzTVkaaZqVk2pP43JMBkcBBoDEPrD5nK5KxjfJK1UqF6LMHoDnJVfRURZKhmiZJTGZNypVYKcLXYrTiA",
  "key36": "51sZKnws1VBkc4fUZjSA7bsmPFwZ2LwRNn3EqN8xBQEMZQ3t8w6aLUS4Pp1HZq94p1WrY6bYNKPXF6dz1oiYS7i",
  "key37": "4QJYYALZZfRRgoH2qJhXaa1YvoGTxMFuP9TUT11Pxzwkue3xkGWbTSs4iKsivUKeeZsf3gujaNEesHoQpguFQDUo",
  "key38": "2EaHFx3SVEKRjVxQnBXn4WUYST7FnWDtSNdE4nr7dq1DAAR6RxJRApUcZiqqZpq77om94Nf9cZQLcczZNLpxiurV",
  "key39": "CDNj1PR8Po6G77KuyBL9hVBBriqgEM38CMsXLeuwZmTrxmE15ncH59mHj6jnRZc9gKQwFM3eqv2c1ZwFjRWa2ib",
  "key40": "22wZJndFkxAPnXkDQpkrJdCrfcfMiBMaN8ywK6gp3SgasGFqaoUcajiNA4AutJHoQSXUYYbM359Vgq65WcDyVUUF",
  "key41": "4oAR7NqM3g6oFU1b3oyRYSF9G8HUbZN2748rEHMgWuwzaCqsCLcZGNsCMbdcfGGkyFPyka8H4HeQR7azgQ34CACi"
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
