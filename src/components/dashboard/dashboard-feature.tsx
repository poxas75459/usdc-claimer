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
    "4uCUR2gkoWKRGyRNZefzQpuZTmvz1cXgpxCv3UAJA2Kfx5G5FpZwjik8vcqaC3DMHJU1DGWvzXuPrj2ABmyjSMj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zeV2EhXFYBAcjmhSiXukNTDHeZkvn4uK3Q7nNH1SBXsmm8X59TLvsY8ibnn85ngp45SbuJyjebc4fqKhYQ48YJw",
  "key1": "2S9F5zp6otJK6eo7uh5Fn3KahBBuTrXELZgHcbJkdSosDwYuLcwFidUnJ9zJGUBwzaLG29e3EKUqfGKW57z2ELCR",
  "key2": "3UQZ6vmb2d6WEW2ac2sJmZXXVNKuc6EzdetkfiD2RDWCcaP7ZpHcSSNQxgUBwj7uF3KZhrMFpuoCtD55L6ZYEPsu",
  "key3": "2x6K9QsHzKQw1bMYGcWb4xUZxi7NR3ap47zFrSaZH6xKFAJFHQAwDk4ZdgpFftZLMDNfGb2LHMeGooKbkZvwkC8D",
  "key4": "5meGuSFjEqbp9RyRKNCqikgwZsME9iPZPy5VswyiL6hGfwY9hh9R7eTNfuQwUCU5hH7DyE2bPWxQ57B1GV7e93bP",
  "key5": "2pFHhtSC6qspuayCKSCyUf7EojYHViWsHU5sZa9TaJUX1mZEYGkVpYutkCJjpTD3QJqgx9HoczS2Ac5DX1GFYUSW",
  "key6": "UdpkDv1jPVSN9Vxwsbw6FxvFofEyqqGwfAEPVGuxN9V7vdm48FgTpjUaG3iHepKUWNL68T38QZHgsbYAG2yu2KX",
  "key7": "49e6p5XwdVC4ra3DxQDdXXNMSnj2TGKhpzqkfGPd2mjD7cT3DtcH8ihRakVMYgEdCPm7ETBhCF93kGQqEayvsakA",
  "key8": "2mkdGmJnoxYi4qfQ8wU9aMASeoQdP6rP3RiztUt9TZ5kDskJEqkPoE9E652m7tExc1xteEe8GUiKHfGW5cbtPj3Z",
  "key9": "4h5YcMb7C7FYHd3d6zABtb1Ejd7QgS8Qa5dtnGqktZrwZadgYGwFXbCRCVGyN85STvDprdpSEQx4oP8jvS9sS4oJ",
  "key10": "43TyevR3kfVSgQBMXpbSTBUxV6ayBq4E2MyM5CXXqVuLMH12HchhMrq6GWsLLq8ZiMKmrzoL3DYATEKdeKcQGPH1",
  "key11": "2AvSae2fSprFmtefrUPT1x5S8vVFH89EcrmPBiJZFBVwpDJ5Bqxcd7cLzp59MBASa69CdmbiXpzH1qaPho32PA8o",
  "key12": "2MPg5z4AhcyjmVYQQX46s7VzRYC68mocBnLMST7E5HVPZLYmQfGANkjisW5hBBBaTnZ5oi4L5hAPNKAJp9xGVLDm",
  "key13": "462psfsmgmVAVtXdtVetFaighgcjxnB8dn5PMyvSU4swSJvtwaqu23R2dgD5BUugZZaD27NxZCgj6ShHH5PcjfHT",
  "key14": "3xNRu9UZBWhvgVRpMBZZjEgQY4RRjb9QMh9AjoSmhVSJo9zcRgKz8SVgRkhV7mUEU5qeHtJxWcDvrvaULHx5R7Eu",
  "key15": "5H5hZCxiiAwP5KWbY9C6rVedRBu2PUQje8q1wQkZbM97p47d48GGJVPuRFJ2bbv3NMCDfzd5QEKeH98tSxsPCh9b",
  "key16": "2MUJAhGxDoBwb8VhC3R3HBNUcQCGui8ZT8gzZLTdFAH13uu8cGRzykGfH7LHH8jgqbc49g1vRsmLLaJt2xYCqMfy",
  "key17": "dm6Qydxowd1HSxARRDv4vB1na3zGzDWZf8U9kwUhQ33aKx9fKVaBzxEAPXoMNU58LqnQQKhUUGKeX1bvH2YfqbA",
  "key18": "4ekhxd73LEkNuzZMzE8MjWV4PWA9c2KpuCxuzYxLQXfM3MYGPtgtdsCnEQPGJqfJcyKpFrEckupsyEZXjgDejVjU",
  "key19": "5sgWR8XsfoHLZ3uNWVZeZq3ExNGBAEw3qNvvRTU8ayHhJnFXoUDvBLZbyGvP1vsnx9iZAEYLNDof7xXtXZ6Xya7S",
  "key20": "5MVgLrwDrVbF2tU7beH4mKDKr7uf9mdvDJXpgzY5Ck34c8ZSKQsuctvpmqFKQ5Xn2gv2YJ7XDfiTemToQCmmJxvn",
  "key21": "4KvuynexxyJKQMBawubLkXbh8jYXFJGHeH6wMYZVNeUP9cmn5cCLaeBmXLj6446GKRqGQcRGPQpeLTStbC3J5xNh",
  "key22": "5z5xAt1dxoBE9kY1hGy8htkCLtXXBPj4if7jYtmThzaUpxUVf6N8TkjMC9D35Jfhs57cb2zKmcaQhRuGynvCG1g1",
  "key23": "55VKrBq1aJrE9XcRWchDTdExgrSXy1DpcQSpgKaQVbobo7kk5Bhnhf3FgjKeqgp8ksFwBEtNuPN2tpGKeZFqWyEk",
  "key24": "3Ec4PgJw61Fnr6Kk7R8DhdYTjTuUzCwM6FxtVaCiGPaKVAf48qa4KpaHNUeV4oqSkaDQ1vXovUncyponV4EiHHNM",
  "key25": "5LkazTRESbJJ5FLyJunMnU9ARRUj8UhMSMgHkeSBKcxkEQTjxFG1jigCdCjrZfrn91VMdMUWsLjL3t8HxuveNPs",
  "key26": "2a3YS3ScVhY7dAFxGhNYj3JjiC64ozxZamYSmfxxjbsSZNbZbA8TWAQVmo2kV3UXb3NzrH12MmvqX5tuhsDag9vV",
  "key27": "uA5FgHcz4CB7M2PegyLnWHthUZmYTR6C9QZ1AvcMXnYuVKGUs67syx9sXXhLKReixCusTSK6adxCrBLWPMYUXjn",
  "key28": "35HcLqnFDDbGTMqKV9tAea7MxmzjbrZXFQhmz6W9QK96wnk5yovcKwAaGmRKn9R17hJsLBnqiN5b9AC4mt7cL9HU",
  "key29": "2trsi1Sm7qAPRkc99QR4mG5NSALeEXANh4v8zKZZ5HjVLfmWTxoK1VKhiYUcWYjaMdN6k8dr8UtGF4x1k6NTzGzF",
  "key30": "5MogX9enMXv9efkQ5s6svTTbZkEaiJ7fMFC6EEr5wznvPaxMkaQKamWVjZGo7kZjjGzzRjF3efVd89Uj4jvHDAJs",
  "key31": "5Dwm1ohwCZvVdWyezrYRVWK2FiiC12FkuwHYgBcvFdVqpekS1D4PjSaxRtE64NteejTgGdcYE8Z7f9Zr4EauyrG8"
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
