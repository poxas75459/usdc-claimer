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
    "5hQWFWzkSC7VmKDJE1byPqHq2dKrgQCUj4whYHRFb5i79DuziZMXSeRGHBkhoRQ9ABtQTvCroAcBSnFGJK8ZV3LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWxLVfRcDWUSMdtdhDFJYYggLihWYvtXpYRmR2V1FTiuxJNyh3CdQhW22ac8HKGhyAfBUMTsPhkdngVSZx8wvQJ",
  "key1": "323xF9vETy9PnEoz7dSbUSfz48dRVcaLYLSkGqSUkgigJjpHqpFTqXzKsyBimaQHt522fMdek98VEpuXDjuNhaq5",
  "key2": "2jMzTJoe8me35DAnN1zkKiVgefMTf6UKciyNaCyX1Uskm4bgmJkCpar39rQo16PTEws1EkDjj1BWWMF3tZjVempp",
  "key3": "YaigMXJB62JmamdWdy7gPVGdnczNgPLvSm6rQJna7me55cyCsmuUBGT4qfmUFHgLQzvEbpUPaY8ayTMKBuSUqYP",
  "key4": "3r6Bu4H2QD5cSmbaqfVMaZw5N1VGvxdymqaNSUSApXNmsfWhBtTWhWDhifvHpV7oDTQWfGVAYMLetewYDRi7wVmV",
  "key5": "BfCLC8xT9dn3Vo5A8yY7GSWiJFW6sxPdcWPuuvLa1g55RvxRLdfAF578HxnUaVH86zjc1MJLaRn2rEL4D6zMGC2",
  "key6": "4UjvGVjA3PcUotdKJfhATqzPhVZ4K2sx5AoMs7rCk1GFqHSTpeE9ALWqXPM9ZQdqCdxNog9AeSb97wjdmxywjnHL",
  "key7": "2dm7ygTqhxXQyQryU2ezDXZSLZM2oU1gVMLU1jw1Mtn879ANqSTPawcCudYgZPLMnaFiY5rHumoUo2j9xa9RmEWy",
  "key8": "2t3Jdx5XcKz3cHmvvtBCi1HcMQD9xyfbkMWJUiQyDCqWYoFHNRttkgRgJ8fuz42gafDcXzB3wcVwd4DkoZQR9gas",
  "key9": "3Ps4PVTkXVoMAUg4GrqCJFZT3TvXhQ3oSTHEofG95dSQXKhaRJpFQF9MNh7Yk5ZxGYpAeuCwVXhhaJ1uMvZLUuyG",
  "key10": "HvvtiTefNTXnZibo7xWrjgeLr1g4VLPz1guuu9URhgs3yA9F918KWz43MXdHivyA2EMJsspxusVQhm2ysEHx3oG",
  "key11": "3V3FeMZADnWoQoaVE9Ap7uD4b6bgEqkdLJaknKhhBpKcQeHjiZRAwKgoWW7e8pj3f3TwouRk2PyWovyJC1Q7vvFi",
  "key12": "2akanP9NvRnfwC19JgYmGC5MwA8cwYyJVRVVjHKnTLMDzSvQnES5k6VhLqXiBxq1TSpJKmGiB3udNGs568dfMeS9",
  "key13": "6PvUmxZRbyqwQV1wWWUyZD4SgGm3D7iUR81xFPSWPNYE4MhimX22BPQnqGU9QMvfEHc7oSqDAzhvMApkcYgXycT",
  "key14": "4kcbDBZJo9dGgZsW73AbpJZnU7nZA3q9H2AHBzsLaqqWV1Ran9DNJecjNG4s9rMkGKXgePa3rLKkmXC5burpsvBV",
  "key15": "3Sw7P27cxxCuDPsPuKuhq7UNxiNUR6XfHVuLC8qoCr8wRkZn2PG2PXzSCeTRFYm2aADmnv5UJTYoMEjbt4fap8iP",
  "key16": "31cVeg1JgedpVj17BomoYjC8dL16dqe9uVgnbGatx5m4bUaSrqUrJSh6unaVY9ybWWBeoFSryqRub8R93oqE4ptm",
  "key17": "3th3HwbDQFCDJ4QmMDTM4eGik1jn3tHYNvh1cZTrSZ7gNNXdfoRzNSFwDPcthbEBtZNkYJzWSKbKwVP5bRgr9Jwt",
  "key18": "44t9aZ5V1tZG5iea6CQNDPBnE6TtRxotKdM2VBgUzFsfXpWVaUUDD1jELoQhVDQyTzLd8wkGRJdc4ULbem7X8wY4",
  "key19": "5oN6fQzgaUpy5czgeWHTjMGJLtk3AWWMSMGG9hnDT54ASFNEj76HuuPNxhFth2ux3t5AhiMDZFSQVWP5x2pyWUco",
  "key20": "3GEvCN6SCTJoxHUYUhbvSwakqKJBhqZjRtqMNn1EBCFM1bSHYB3VFv6oQMEfHcevRgzoRNqM2DMHDDmPqvoyQMoK",
  "key21": "4NnvrmSqPwnGg52v1L33q4jTVg7TWgofzwGMCmcE3SiZzX7ZvFvhMgzs5PNJAjviSQYJ6bVQBtmDhHbQQTk5no8c",
  "key22": "3RPDvqCu26X3eArZbiYBfTxrAqjopKZ6NbPR8X8XkUDhawk3Rih6kZNYXhUE4CPKr42v5BCKp9UEkXdMVNXKDHmz",
  "key23": "25t2MYp87U6qmMz4PHUQZ4vXdHn571r8c5AS5MTC36hnmTFu3ZcmoHKHHHiCdKfyatUzQjq8VFY4ETvR6mGAefoR",
  "key24": "2PFB1inBR2QsCBAugrwka5r7MoLqH6dQ38Rr6CFPrEmDTShicRDNqRNn8rgxMxn3W36sfZNQPUNskaBjh3kLs1kG",
  "key25": "2T4q6rF1q2A631FHWENi3r9atfKMuJxWWW9Hmjd6FkxPDmKQWASDjgkahHQ38yXaqW8Vx2jH74Ek5wWAjmh5HDMh"
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
