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
    "3AooVN6AGHK6ocKDHGJEufmFLhci8SWsT2TRkRfKC4rk7Neg9kWB3C6iLJiEzB1GwCgTD9JFuSPnu1bpiGViu7sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdQNwrndjG99AzhBgQvR2kU5a153zJNiEs4m8JWD9XcbKvLd1rQC4gPwSNix2QbstM5cE9x4z7wpfCM2wdUWiGZ",
  "key1": "4xGLZAtXPWVTXmSwUuDfCqLao1RFudzgJM3kpQiZVU6tdeTGbntdNPUmfUxWY9PVAFf2Au2R1jB8F81JGR4XrKMF",
  "key2": "4wcemLQ8jZr3E6KVn5reTC4ARsZSfxCZCs6U5NaPdqntxn63SfUjhvTWpjWxcGiKSuDNuvsZjNsBVeiMgYzfGaQL",
  "key3": "4w9ZpySiL59TBjSBZWE89CjDyzmjXgFfvHykhz6zcR7PF84BR15QPSTVFm5RQbFUpLebGbftH3EPx22aWmEBQJK3",
  "key4": "5i9LGvs43RCEpGieMJk9BervBBZXdi6M7FUGngPu8cD7FQPkJB4E2bYuxVKeL5Ya2Cn9FhFmiz8cvfKAC7odkWkt",
  "key5": "42u2dxFgYniiyzjkepjQ7RyfmhkfD2zMJuYDetsQru2KiQ6JK4yGv6mW8y9mAZ6FydJqKB24DThzUKm4dWGwnMa5",
  "key6": "5oNFF1zxbNnCtJzgpGRVz2fwgMDebmf4rXjGf7BWBiy7xis1nTRcfMx2BAAhpaomEeYqkTaZCU79ChX9489aQijb",
  "key7": "4cFRjmWjb2MM5vhXNA3vc96CucteiRDT3iwWJpjiE3oAnUjFPReyrHbWUERr6WKTudWJWpXHt6tVWWtkXMveCp4Z",
  "key8": "5ebwwBkqWm2nzNVNKCHvDysmnkeF6VBkVAMHF79o4xTg7c9tXEwMkbwJhP4c9edX7zdqg4oSH5L7Dk5w8Ha23LDT",
  "key9": "4cWeJZMyT7ocD6XShBv5aug6AxxBxgdwKKuFCMnrikySLhnAWpUJkPCvrBB8LQd6pz2rgTW7b2WjiiE9i34GJbgD",
  "key10": "2czbW4MjLndvx5PLqHfT7NuG5Wc6QeMebWkB246CREDow7F3VuA5Wd3CMkT2XvMYw8qiQ5qmvXNH9dTZByCntCQP",
  "key11": "4hg4KjDqBaLjQRd1k97hVLdHM1buLXFJfbCjt8tAQmScbf1W6n7b1g1EQ9NwxVH6Az7yG91kitkBAWzCkc5mHymp",
  "key12": "i6N5pnTVcJwUh5kk9BPiTXscghA3gunt3s3V9tKUmkKQ7vpRniX72UiZj1MiqnGPVUgFdv4Vh2RDoCbNvcBBgj7",
  "key13": "3tcdMrFSmUdjooeuMMLKmcMxSpR2KG2SHgpNzzbe5RB6YrCBnx2H2SDbdZd56sVUiCrX5b3ZKz7jBK1UUciBaMkx",
  "key14": "32BXjSQoXaEoRu61jBLLaRLWH5DScFapmZMc7UVmGf2veSvESY3BKDQBudYkiBmQrJebPhdSb1bcmS9qPVEX89Bk",
  "key15": "5iWHC3nhf9cpbvFyzGZaW5cWBark41xz9w1PAqPgfTwjCYJPv3Qzn6XQVrTdkpAmGSFZZL8qs3caj5WDmMEvSW6m",
  "key16": "CYmYEJsrNeZM1PktMCDtUVKk2stvVdRJQhKRvaVGqvJvFUoXgE2LLqhcKfEhHUjXRALRLvwxGg4H5qWsyCgkFjb",
  "key17": "4p9TcvPnEVaz3L6Widv5PUZPNodxipG5MJc8CMVjqFtizhwWEJtDd5xViHygs738Jt9PYvPXkCqt6ukU2dn4XqNX",
  "key18": "2tk5gHkdfSRuMH56298r3gEmJtZKPtMxk5C9CQGErdrouKh4YQC4DtPEvB8DG5EaE3peqKoEkYtkYZSF73k868CN",
  "key19": "4okHPJXcH3pCGrwy5VKzrEdGuEMUdvW9eVSg5DEYchQYVj2wnMh666NvRkv6o9F1F4AubzwzJvMTSoQfsnuxy3LR",
  "key20": "5bib5SNbsdDwjYLtuVPdcGYt8V64h9ruYr4yf2SLxuAtSRhPvhPGiuVHKX7cHZTa5jdfs3rKd9hb3JmgSdRKVzB",
  "key21": "58V91uSAMvrGiT4cVfmEVjsbtLCzbkWfngzRpxuBjGkZZD79y2SurggsisRy4ttL8cqVJcA73rxUTo4wtAVDE54v",
  "key22": "4uixv2Bv8cFFMaiisxkgBHZYuU7TYNkqiqwGLaRNaAMJuD6pbP6UfTiDPDsZmhA2Zf7C52gbxN6HBeFogXo4KW6m",
  "key23": "3PpPt1Y4jiWoidgLewUqbViBY3B6z7t3YKdrjKhJLFFArW2Z4nvm54mtgXx436vxzH2qxbzyn8hXSsNMnEGGAgQE",
  "key24": "5QPnPWE1PkYSPMLzLgEfUJ1DfzFuLPvT8qg61JkRyjTkY8iewoGtJPyxUicK6qFMeZJxMHssXh6KViqaxmghYM3r",
  "key25": "5ZNgANwAEeBLp4j6URTX2f2m1yKQaJik7EkMTHdzoAjR1rmzyZnrMaVSZAeCmCsnC269LQBqW2gtm1EiNFar839X",
  "key26": "ZgXh7QwXKV85kCGsNbxcnXKfUx3ZonYyadZQtpp6cCtXghy214TKscUGXRWzxaQMHWcLWDTPwZZvYSNcfjX8jJk",
  "key27": "3tFfAM4pNbfZo5Thb3h2zDhUWoAySbajHNtEypdsdGgqAemc6VnCYzifqQ5wDXNoFKEYVhkno7hUNRRD9AvVF47u",
  "key28": "3q2EVUw7e2c6UbKXKsuhym95DrVAGijN4rbajoyV91u829jJLpQsaLZz8juzwWnWDHME4ZooFezNDUsuHdTMpqgP",
  "key29": "2P1XJEuo5HND1eFDyH43fYjDmLcDsvRLN55zxTsX9AbWkeMBZTaAJGnesdPpQArr6DzdBCZNkDaeFBxLQnAmug9V"
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
