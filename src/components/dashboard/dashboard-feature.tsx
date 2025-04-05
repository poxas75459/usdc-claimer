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
    "Qhn5ppKSe71johJ7hNz6JX5Mh4zAMX3Rx6TwDxUF6t2rkR1xZvZs5SJMkT3wZrwhu3bHnokveGimcJTj2rTiuFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gnBVtraZzcsURhKdrtSsEEo5RooNGizhnK1DBYr2F8erxXQYkivkRQ6vnwhaW8LMrGQdP1caR4WrXGn1Z2pwEH5",
  "key1": "564M8TC5HqDFZFjdFMnEefHsgcPpdEnAjwmhHptsUNia6EjfD5RoizqNPAvxYaZ2UsM2JxhTzbQYiNU2mX6PUQhp",
  "key2": "45jPumqQtwd9uyiGzZ8BVeHaWbDQY9pF8LtMpqjoMn4KrG9vxhyeL1vQjkZF3oLAbqXvkgjukW3ZPgJUqoY4bV5F",
  "key3": "2sZ4AGFmZQKurNJbnMgfhqw5x8V6A5BjSDVmuQv63QiBhitR6exs9gTMozffuzVv6RCsQXkTZtza665YpgLHRFB4",
  "key4": "1zm55s1XMoUtyze95DeGs2QmBC3FmRUa6C7AjAthrDNz42GfhdvHdoy865oyvZET6vUwDKs3yt4n7WdABPbv7Ee",
  "key5": "K9VwqjE85ShxeixYWh8F7GA5Lskw5dzgPMWCAVVREDWiBmeuJA3a9T717RFsmML7i4jAPefJd2mVvxvpAH5nUNJ",
  "key6": "2QinzpDXtF9Ex6QAtQKdyihsQYu8m6QjT6jYhKpKBH6fY94aeSuXHgiyBvjWy4PShB4JWvi5PNjkDohKm9jpzR5d",
  "key7": "3L7FpEa1T9R11yQqVdXGo86B8USPYW1RwwEt7StnFkgufHJtQ6aRybjrTUgZrmLBEmQkVAy2NVFeocycsA8D7jxR",
  "key8": "4kEoBBvDGU4o9N6xrbEQj4JZGLMxhiHGyZfcxVjWWYyx4ZaKLvsrd556pZwNcpDzXzoF62nwgs12EE2cuE8dkRKs",
  "key9": "2rq9h8A56VVNgRiDPaCgFM28ehqEGowPCLv217YjTSmr9FvuYW2DsefB7KanrH2vHcQ8GuDgCuwhEpQ7wi8UZXHP",
  "key10": "VePgNDP58gW369oNPgH3JyqXLkQRSuo7jAALJD1SE2zWFKkFTQETvqhNW9BtpfdMAjxcdW9Kt6jFAJzRGRzLKmv",
  "key11": "YP5VKoCgPzwPACKA51dtmyiiLdoLFVkgdd6n4dnzqUvgusqxVPGhhN3i7wyrFrRFXowrhg7TqpGHyC2VWc1KcTn",
  "key12": "4UfJDQ44dMbVwEEwbE1MB42xAmKt3WeyJhJ6tVRXXzGDLBFSbJpPzb3PpN1pySAkJGQTQpnpUQQUQGTe64EXjd3q",
  "key13": "4uB7bb3C8aV7eMRWrLLfDd2X6qtkEtvMLx7LgipjWRNB7gMTHLzjjLrYPrTFKywMt4gPq1QCZSTtj1LsB55uhAoa",
  "key14": "2dcV51GZhSoyh1QDfBuhUYLPrwkDXhk8nr5X8eNcc1NR1S6YicifyG9QdTozFDuZFdjJKMcVADDRPx98Kr2WUZbK",
  "key15": "4weRJhXeRxeBumPeYZLfuYoGobddeAaxdGSznUeKVmiAc6Wvqce4REnDCi7XkVbDXipyD5KeFTzMRBVPCQeNCqYd",
  "key16": "2gaazMerL6Gi9ss4dJyofmPY24kj6aZLApmZ7ze61M3SX9K8NzCbdg4j52MKmyRMxoNUCsX5Bqw4ss3ttnUZSSze",
  "key17": "4ud7GnDmUemWu8JuEX1AY1PGzVwAGRBk8eRV62U2dJJLMLFQYxGTcuV6ruCBUkds1Q4iAwwe8XVn4fMYQWBjci2s",
  "key18": "3uGwr5Tv665myyoHgVyAN1sMxCnGtR9Nzh6nx7MrMuLnZ6jWUK7REfuKFTHHKWctLm85mhEnvx1efHttSq9uyah2",
  "key19": "2XFX1xB6PGYv1p2MFhjXuLJ8hw7QYCo2YdpkTHZJBmtqxR36xVvoWoHjChYVUq15tNKecN87iVinGqXGBCaDu1aN",
  "key20": "es7MHT4SGU1R4pHdCbjMrpEAGio1NjZp1widVFdskxK7iqnduvscpNZRSufNKJixSUzkUXSrJz8roCK36LqbcMe",
  "key21": "46jk8drZdSX2nFMZP2o2UY6gjckEcdvkVat3LC9PvURQV7NAjg2rSqQgCK2G86rGLjoQyuSMFtivGN7nDwdXUmxs",
  "key22": "3Zjg5VbQBoV4ZtNQ9jgPoaGYnFxfKkiNu8wVVs4Ze7Cap2XKCTEr5DEKrSuRp8rV8CT7DzBWBH5WEyxtDM9ntkho",
  "key23": "66fNcPm144SF2ZWuFUsntkRMCFH5GPgLF3n7y19uGm8Q5H82Pbf8VofCMuUDWx4b8hxyTw2yvSiADCAcvW254sWD",
  "key24": "5mv5oqVbTbXWbpSYLzKDR2qpAzE5fxVQuE3MxhQob7PQFBCpN84WDQgP3HSLhQzUD34ec1uTVChte7HsFjrENoUj",
  "key25": "PXZX7M6aK3W9i6Eza6x2SUsgoWBaDLbcpjwV3jhRyFbxbdvtWRaGiMuhzoMnPPFXkdVjEdbtyVASfMtBbWdxQhm",
  "key26": "26EvHKCDgGxV78r7ZxzLUn7CjPG25nxRx9QdZjDdJsCoFAKodUa8hCag59WhzhvmmQiRFFPtE9DEvq9Uoqzzdi1z",
  "key27": "27L1DdFscrks9nNXkx6vmtYNetiV7L5ES9cGxjuShwWVcSUoHmVhbMN2CBgYnyL5FurrTQqeA2qx5PTrqjyVEXb8",
  "key28": "2V3QZU2S87LB8f7HJ25zYWR9NGUJ7NH63ApPWE392W7nGhuHugn8BBTuKwod6c561Ku5Qq2ZDp4HMEhXFuN7j2Nf",
  "key29": "63DbPg7eWg9J2iPucm5z86F91FVarwJgSGKrpcSbLxByeNAGxpprGcf9vdUSDfCUB1qdMG1DZNydC4PKA4oGsFpJ",
  "key30": "jwyvQqMtw8EyW81YWCi77q44Uo79gQiuFJ4HCqWX8ANXSWUuHrkfryrdXAWVWvEq3QaVUgPXMesTQfFh8qApyvz",
  "key31": "3Xj4FdXDaRmVuVWPP3k9UxWacad97eLtV5d2HdQCB6iKvLTJjcRYQWP6QDVwaFqeBdAVoMB4z277DKBD4rU7bY5R",
  "key32": "5fjTjFdZpRsN2QD1nWweScQQMFzGdDHbjYgKpiLF29cKiQ4Lh4SLgVvHaAjyz2ttmfNQShpz7wdEAo77pginHfRJ",
  "key33": "3XqAibdaB3CdmFsZS8LxGsxSuvRMPe7mCEHk96JhGV5rCR4pQdKqe3xm73ACZwLYFBgkwZ7whXoYikqHgit3krwp",
  "key34": "3HDDh99ZJu9Tm9CRAMmGYKyKSYHWnWtPpegYuJe9TK3h82EYoiqQA5kSAcfR3QYRgNKXNYUEQdFEwWBcWWVKdism",
  "key35": "4me2SsvSPYUPAVbEG996gUPv3UDE3znnXuQKXxNAN6Ft2rvKD4D3EdkeR7Cd3iwCtcKnq8RpbpepEJPjFpKVodK9",
  "key36": "5Kucfe724Gssoe5VnWNBMLrnxnTztsyccF4AjTVuLcrpEVxzcPZJEA8CTqNNXRPMkKagkwS6pWbphLwubdG5xSvD",
  "key37": "2eNMept5Gp6CjRwvh2a3hGMgv557es1tNyyxowBsHix1QSCNXpUmCmXqFYaRH5Eai2kjMK7neAKxC16k6zYAhjYo",
  "key38": "JMifzAsUirH9uPoCqPqADu6ehATazSGZqUvW4tpxQg5WsCLtYYmabMJabdmHmkQq2vW9mwvsfbANwy4tv3T4kiw"
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
