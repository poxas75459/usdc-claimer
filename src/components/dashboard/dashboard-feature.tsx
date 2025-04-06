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
    "3t9ZNyBSrZdyEk1udWAzs35WSRJZcVx5Ps5kxAVPA6SD6FQP4ATWKE4AHZbuBxU8XsysKkoun8CMqoSJTtj2GZWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pTxnTZu3bqZj9HzyVhNWExywSgxUqrUXqJPzn2D69PZuNLk2VNnovegUax7NvkLKxNpTU7HAa6GETojQVUCjU2N",
  "key1": "4AumPKuHW4ZTWjiWPXp4krTAogvS3TvYP3RmpDgr421kbyLkf4mkjqAwVm8bdP1Vs7TS8Nftg3EiR5hB2G6h6yvM",
  "key2": "4j1gwH4NJdPNFKW4ov3pbfsWpBGjfEfpwuWht3kFrA7jaPvnVZrx7aSqfPZEJm9EFrgBHAuHh5urTUNDtNub9xpw",
  "key3": "4kpsx2s2AJgvhp6ar5vPd7WZ6ieE6deKZXe5XnYXRLtCrbyjSoiLA5dzbrvmNdAKXZwHnNEgnjELqE7zpjEojm3n",
  "key4": "qojmGXSBwuyHLbtvx1rpMnYoDaboC2j6cBgUHp5WPaWEHkxJodkNjqsqM3rcVUgXw5eQNTjEGvuzUgK1RqnP9qv",
  "key5": "5deuM5DTWVp3eErMh9Tp7adRqa5ZfPx9NypAyU7H26DWSobzqX2GJYGZpA88xL8tMai9cCgqKVx44X3kNjX5obF7",
  "key6": "4WpzpFcQh8a6Q22nM6gqawfedK4Z5REcUFZZzBhzCZAaqmV1E159XDTf8gEqUxoJHVMrn4ucmx78tbUuVRugaENe",
  "key7": "U19MuJ72XCXWVz53k2ZVM14kyD7BiUwJUqWxcjRxoS11atbpoqoVAGZUkJqxzyNBpDa3pbxUTy9cJnYf5hrKVjM",
  "key8": "4Ky2ekcRt4VW3U2FYS8eYF4cLdFUWN7zwKmZAghgHQgELppbpc88tLV5TUd5h369TVSUAePAzDQa3WBdqUXAFLCX",
  "key9": "324hv2faHa1Zhzda8aDcHJY46r7ZvNyML5TL317SfWctd4PrPCweQJgFTBA2M97FfooeDHRMwR84YsekKbv5Ne4x",
  "key10": "4AfcdsqWJrHLFFpBeq5B9Ea9KeJa9LSvPaPfKeWFE69XHpgHNBKpQDBMFVHBWptqkLxSksCLVA29h9ZpeRpiCDA2",
  "key11": "2oysEtnA5gafWwayGCgRMFTeuTVYvm2qE5v7tQaNatCicjJieEK3F1zzH2FpGbMHi9cF3UnaeVY4DMfVoc7U4SA1",
  "key12": "2FYNGzWyEK6pSy8suaZej8XZGANXj7wTAx3sUophs9Lgta7HNbReuNK8ds9JKK2zvgaQ4iKvdMqrSQ1WRSdp3sGC",
  "key13": "sN9H2B1v2hbnh2enkSovzCsWgor9C7AA3C155bEnvJK2Cy2fVAkP7dtSD2WSrXPC9XKP91q5foCe2Sex5zM1Wph",
  "key14": "2oUhgdijVATSEK4S7DzqLipzxwbDftXk2zizbV9L8ySeBkc9tMQS1fo5KzMZ3Lkg6XjNqdZudV4F5rgv3smZRzwF",
  "key15": "2jhKJJbMR9tCSr7UncfiXYEv5GhYg7nPYHh2fAjs2Bued4XJmZh5GUhdFBEuUqRNPrTupNZkrTaPoSJ7vdhh7iEE",
  "key16": "3tdqziBpy21xYLE4Cgj4KqpEn4C1Y2dnptnq3qJQCgs87gzMaJ9wYuhape9FNBDjLuQ93Y8TGLgGctSyasXbSrdU",
  "key17": "5yRWV8TMJTRMyLigkX7EgEANAop5qWSDmw6fc4qgCX2e4WBjKZVHBRCumGeeYKjZwkM46LHi8bVmcv24AMMLeNeZ",
  "key18": "AgmwLspFqe35K2eQM41kNaSMWv9ryiYMtdcGDqV39Q8rUmssXbxafYXE7XRLaENnFz7zGTBgMhfSaFMSTGvDouC",
  "key19": "PGwMT8druD4GrG9ziYqaHQBdgMmCJMZEgTUhXowb2jVXDxf4QB9nmnmpGSkvHqqSe4QcSK7WiCk6pmCMTiLVSQY",
  "key20": "5SWzK7gToMabT2jhVaXoG61f6FB6LFg5RsWCkeDdJwaT8CiVNCm6X4oxegGEfmmw8VyFZpGM9nUyqsMYFGKvuPRy",
  "key21": "3cGQnKfqX1m2Z4B7okbRNHsSGfqxAoZJpKrhVmQN1o6QJPW6rhosR8CS6owHNwQHFic4ytXPLLnT2iMKCgGBMick",
  "key22": "34gEYoLRe3tvMzv2s1WH1vmdayKZVk6vtEVmUinG9LcfY5KmC5QZwQV7a7b91LWJmAGTe1SMRqvW3T4Lj4hTV4z2",
  "key23": "4j2ggb8GH9JGjwHrs4RvvCSLmfYs776t9gN3iYgvqegEKvd3LUsxuuqcJvhr92ex9w4eQg8f8mdUhwtsxywAE5dy",
  "key24": "2hneA8M4ffhxwqFzrcaNgxv8hSii3i5NfuFMfsXG8JmnX44gtU4pW5ukQhC9kmh6ZKmrYQE1fWWoHe6XcgUavkvr",
  "key25": "4yEkYqE8xFwU3EHf6EkZzqAN7bahDLsGvwjsL1DvHpXwzLQHinRGm1W2ndxNLLjskAPAiWRV3gXZQVi2xTdxfxWT",
  "key26": "36QYYqGNubtciUZGHraWGA8QXqvaKLYQgqJMw8VJyy5DqWcbxucKEdnRFakL4WFvsBio54ZaE7v4rwRhpRSW422x",
  "key27": "4kYseJWMRcrgKRAuPEMwSEsjSiNxPVRJxK6vAJgDYtajQEf2RCt7VpJf8H3asr7BZsMm2kqXdMd6SVvDze1gZbqL",
  "key28": "2k1fLQurfoWLQDX2HSndhEjd9BTSDFXhikvSYjN4KCSrF5Sn9ARyyU1n6JkoCvFhkj2dJFN5JU4VbbjtSkS3bHu7",
  "key29": "jY4smGcFM3ZzWxsE5om8jX76SM6BoGbYS4hwQB5CBm3sseYzXYQLsbSAXnUS2RpxunzevJbLKBgtYUePqbZAued",
  "key30": "57Vy3wsRMrERMLgFBoZEh3Jfg1CfnLqMqbjZACGKs2RtaNqE6ZE5tDdEDdxQdu5AFcykY8PtaftoxMAoqZ5SdJsv",
  "key31": "2659oxm6nwZtR1ziKYSShPLk7s1WNET9jgqPERHwucAuph4R1rzP8zvSQ37g2DCf9d4kcvUZGoukCyPiv5pt9Mg2",
  "key32": "4FNxv3RyvVDrxUgcBCSeGYxnQqHyHXk37s86inUbsKcqRXL3pKsfJ38wwjvRe37aog7pFEJyqK4bqhaRrjQnGomA",
  "key33": "2AueR2oFfw3znYV8w6prwvTUmDaJEz1wp7PSYLASkLsZRTp9aaKvHwUVXTEyZzgQTrHXLUhZsdRkFHKpkHhunu8E",
  "key34": "5F9AFyezmMVt8ZBqxJ9sEvPdvFsyGExc6kbj441f2usyxRjYBqGhwsc3oQszSBetsJb2icZDZm98nh82hhfBpPyn",
  "key35": "uCBQY5tq4EqBdAMCwC9jWd57kTX5TrnKMs2x27PKXquSNj6azRga4xCUeYbJ6AamT68SYURpjYgAoBwY3TKNZRk"
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
