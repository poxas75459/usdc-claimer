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
    "qeCJt2WVi8WE6K9SxtX12sSEsYBy3GUVi44zmJJ9FgL1JQH7NxvURuH375UR7tAmBi8iSRndVEKnrdiXHPoBP6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pk7q4aXFwwSnUbowvFS8YtNX3rmCAS2Bm1PmNTBcwetXxdJasn45Rxo2DTnsCSt99eDQBsbx4kdQvTp1v7EhMqq",
  "key1": "2JMQMaJYaB5nVs392hG5W8xZ4WzjifjdL9zWv1gL9LvgsTWnE3qmVitj7CKFRa1CAV9qefY2Dp4cUyM9Keo1BHFV",
  "key2": "4wBW8FhwFxzQJMBeq6LCvGzUhHrnu26pVf3HWjqvSLyZSRRqmLqF2ExpwXkWRCAmUHAzA6afwfkDHnc8WjDrJajK",
  "key3": "3xxSnLtaPyiBLNvUr2KCEcFJoNbdEmwCAxs8bqJEiuUrMd5LjgAETNzVL7WynmTEE59sqHkHENLq58fM7sAD3Fbt",
  "key4": "z3WGbAsFEaydGk3xHrLDGLHFZNkQmMfCad74wmU7ZPWrxway8eXSTv8ARgqH7ZK28JvYBMiSFR5DjDAoF4Xtc9M",
  "key5": "5kpqyoJj8S5f7KBnDsdVG7uNWnvaqBMjNbPyxdvNiEQ7m5hJs6B84KF9hmmCP2NPDRLqxksobf81omTcYL2xR7QE",
  "key6": "sZGYKCoanjHVSTrLFYTe65YBW3xJc6ktXFLhZ9buUyYN3vRJMARywgeQkFfrDGbCDAZakYJ71sUV8e6utHVz3DZ",
  "key7": "3gnLqMSKBQ6tyGth1ZNL45SgmSJXP6GKk2wBsPkE2mmTKwhmkWjpsJV6DjF9U2noDXGBGDfnmuF3JRPC3D8cqfvb",
  "key8": "CLFJ5TXSXCwKLXeHWZVYpb6nFmDQx2m5MKS8qefvTH9ZX5UJMv6YAWhUjB4XW5RR5bQ8tzfQpwhC5U1F54GU749",
  "key9": "3gVQcLJ2NuFLdwgLEUp4bxrBd9veKn59e9TqAuBg9e1MkYVuckd9t5EqsSeafdtUueEyyypqjksH2ckwAuzukyce",
  "key10": "5xYQC81LVXVzsuu7C5hG726qvPRWYA9C5D8nRYh3eH4WXgyUeQLgSpDoU8MyZsUCuuunVM7YDFhTPNcKkHLsnuB6",
  "key11": "3Vzp6CySqK89EgWbCkS2xonGwTVP1h8oFsW28yNpaYv67yK9P8xfPswpMQgR9hfrofXNs5vnvQXSRjPEVWYKSCQg",
  "key12": "42kHnbzypyZm3infvR4badc3oXfhdLRd6LVkP99z21E5XqDTxAmx5cNwPkL7P2L1QmrJLFXEoXpE4W6mJ7qTL4pn",
  "key13": "2k1UkWCGgUEMWRFHNUmHWHK8EG6C6KqSyKfaCkCKgzzfdnTpBdwJNL8Rudsdv1fJT1RJkCSDjPgeZXXeN1LyYR8v",
  "key14": "2wuMj576NEy5S3JwTjYuCqSkyCaTn7BWnuevbRFhP3XDP4LaYXfNY1oYchKkMbKciEHp5SqLHsYx37C8EYPShQ55",
  "key15": "3veKwgrpLaD3J8cA9jRzA33pnKFe3rb7aikDorkABqKMcTXRoB7vUQ93b6NHvM3Hpxp1M3zaKmrGBM8o1a5ahXHy",
  "key16": "5kxetp2zX3YVCmc1rZzXZUReYpqAaw4KcD1gciMxvxUkbNnzBjkeucsydnHeSBKzAYMppFyWbyTqtnX4gLbkpE9i",
  "key17": "5gfERRXGX8gFJxzvNNtiVw6o98AxVoZR3rfAvbPSz2Q5kyu3MwSB5P8WjfrVrqpHB7K8nHVeDSX9Bb7jwPpN5GnT",
  "key18": "5QwxK1ZFSAPCxczEJo6R5Tt7URNhzRBhfYq1uCA9oztdDA1WaWZeiUpbeAaExoEMrphsRR6jwtnXQjdwkh16Fr2a",
  "key19": "45GimWK9hapfY2s7WcSpkiuV1Hkztk8jSHjeaGWaTcKXobJNL1MNCbLUq6dyYoSzScJbmESTaxgqsJD1KNwJvNtL",
  "key20": "KamFwHk8oZKNMMNFBezK42WGgNhZYFsNHSfnhM5yTZ6Su4LHFfq6AoReni43jzZ1wrBYpCSXoJaWzjTzW8SZXD5",
  "key21": "MZH9Y5gX2PACimKkgNdMLdcpgrcM2nyCLmjxDE9cHrenFmE9iAD57mkpBjyz5yGrtzdf4Yn5j6Ze18fTPWLdAa8",
  "key22": "2232KdHKfqtmKFE1ugHzSjBCwpUm3RStSMQk5TA8USu7LXKneSSWtoh2cnQCoPmJ38g4ephoeY1y9zL911qtPxDV",
  "key23": "3rNcDtBdz8vcMqRWUFAEAASFTBf63PMEKv7nusNrhr7opoBadeqz6LGJ8u1VZtZPTqLE7HfSXwVBHap79GqGvMzA",
  "key24": "WnP98ZNvMK9DDamPnc763KfdDcUwaBSHCac59k8Py9Dz8MC28YUs9VRQbQQCGadVxziKoTygQWK2Q7wsVCFEL89",
  "key25": "xDsXh8ajPhEE6skkfA9r1DRdLad94hsNMc9Qn3JYxENgHj9rtkDCeH5TkNZdnNaeXJnGWQU7HzbiK5BTdM3B4M3",
  "key26": "2gtzSYiTEXUHeSKVbhCnD5EuaR9auPTAbLvUyLEj58ejXPnknCfaRDLUQ3HWeZUKWeBfW4gwpUsArdenWxpbsyKB",
  "key27": "4x8uHWsrV8d4KFiiMLe2PxPNBfWh4C8ZjJDN6BS4azgAcMhT5NJx3Jo1eW7U5fhfAoXsu64MSv7S4K1GWfiZSaar",
  "key28": "5gQ6xhmQdHZpvMb5AKdncq5TgMLdcdGe2jwfrySWn9aZA26oBxVSFqEt6FE2BAegM5g3chQNNvwYmiBv4zcc5H4A",
  "key29": "2B5AUkNzzfCU3Mc6ntA863ExXPNT2tPzjuEpaa7FvB6KLKzVJyMRS35SLXzUtzrVL6KSanpmPmQcDsMiKKpcxhgt",
  "key30": "rFexxVU4Wr7JyPQoPV6ArDNKcVTbpxSFL2em6BAfGwrhWgaGXbBZVMbXKKbAzgaVz8J4BE5tWczxa2sLm83TMxX",
  "key31": "5NF7cKvMY1VuvsgbBHvP6aP8zNW2VmtDc7rJ9YEhbjf7sw96bpkA2tjMJYzyJaB4A7kWza4Ut7GvzLKjWeDGgfj",
  "key32": "AKnGkENMckVRKZ212qgptQNmfMVAHDKn84ni3s7ts6cbqB4fr2vqL8ASNsSm7dXA782VMbzyEojxZNWPgoeNmEz",
  "key33": "4CamVWkLeUue1e7WgBXE2KVnrL8r36RoxQ5aP6HTvF3qnDNz8zHd8FGFdyyMS9hSpmtTmsm1TL48tMq6pG1LGMa5",
  "key34": "4PG1sXjPt3mWnpFa9cNZVfaMXwZk6N1R45WVmggnFusmZsMTkT9Lc8i9FGYhU7rPzsRTXWcwpE8L6SGRF1MKbCht",
  "key35": "37DhnbnSR1pLNgR9RpofVMUsWuHiKYmQojZsHhwqVegMGDtj7K8geUxUaexA8qHAVkAT2GPYkGDxs1wqQsPr3zej",
  "key36": "3kAMxhH3MkpMdLpU9FYXoA6yZmP2cm8oBcn8ZQCnqNHS4eh9vuv2obvFt49QjjQctwQGz5czpgjE66acqabPxbVV",
  "key37": "2smEomYNJXVVoxxqbmcivcbsumnDm4RUMNd7ebVyBcFUMMhDKwDSiGZ5eCxdAnUJCUHLVjhJUBVzr8UDyJ497CtV",
  "key38": "21pgYtxJfGAv1CBf2X5cT6LtJoYEwbaZGcXFZqHadqGQNjQviQ1v9gGjwaKeZT88itqJ7D1KiXXCrgobiJe9wQE5",
  "key39": "2Pn7Y9C86NVyEkhtVW2vx9XNskNLzgu3WLqhodQj5rbKUngz8C1VqRHx3AYiS1Qq73WbtYRCrh8DsocaGb1coFLp",
  "key40": "2rUCWtgSagX5bFbgQ6T7LRYEVgPMiZGVgC92J1N3F8Yxd8vQ4gfxwvLagUKpaN5nTF1xaWozZURngnwV3scz4MFa",
  "key41": "3cSSCYe411q3sLUu74LLt4C66hJ6mJLH7iUjFS2VcjugkP35gGgGK9ZxpmhVZqaRTaWaD6zHWqXTHg4RPwT8eZJ1"
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
