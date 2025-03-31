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
    "UAVwCaaB8yWWPFJKaVrSBDcA5bdG5v3UDZ1EvEvBiRrbW3eiQ32UYmrDfnjDWDnnSzCDCCTukQ3G2q6rAxARQT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2KX9ZGjfhH657hjien8XVc5SPJYVQxX5NpwhN1Ng8jVdTPNVja6TDhavrZPVrtEvZKTeMmvqMnDnrjWTcwLL7u",
  "key1": "2YPoaJZGjA97eYWKCcVXkUy5FZx1wTETPyGeUtbiDWhRH1XiTzdYW64TUoeCSHHVfqM5NzUgAbi7RR84tAMEPvJa",
  "key2": "5F2bLPC6Fkh5NM8GsQbA7oe77kxm6wGq5ohFCqpbPYCzZPKkoF2GycZzQvi6b5VmxydjVsULw7nNj2sxjqZXQm5V",
  "key3": "typ4qBrbGMWjQcesjumrocZovo3pYiZKjXrnQjUeyfpC8fK7YaTtAojoUYX1JFw3X57hzm2fpAeCWwwHwdus3yf",
  "key4": "ppeV4CNcZBKJ8jjYuLtYSTtBFteRDBvx62ZHicNybY7JA4K9fj5Mcbcpdw1v34tbBmjPjEyrYZ3i93KbY6kFXq1",
  "key5": "54aQFMDW7P5YQLpgjMmykkw4ENAjuz1Cmvt4ASWwm1KLKPJA5M7U3NfHLnnSJx88u5my3SbGR1atMXgJBDeZ1qir",
  "key6": "4i6ijWHQMe8Nr7gjUJHcYHVwmR3jEDPRNHoMyfii7JozLv6ZdmGGzFBRAvNJGp7RpZDub4oX3thTPpSMHiwn3Xvx",
  "key7": "5EyzHqbtP2aadDmZ5fWH4cjUufiNoVG7Lbjc1EUowTGKMxLKa6o6zUtruMbnQCV4tDpCBnXZQWjQG5XFLft7LXvh",
  "key8": "62zWv7QEqcgS9DxB6v3ULiFeeHyCRR7L34aXXeKu6MVmZyXXy2rgmLEF9cyhkkAHgNLeV58JJZmoZbP4RLLmAB2Y",
  "key9": "5RSKRXAd732hw1JSpPHVuUAxDbBBKPLVTqcHfUkN6oo6Fg6THQUKGBBqVN3tgkuBTGriHm5p8vZkGVq4RpxQESET",
  "key10": "5MQzoCGPjj6cTq38nJmQQtCMJBDxLgCU5LipW5wamCmghE9fwDiwEHckpbDMe6Hnj2pdPLrv2PEPNkBbhtC21yY9",
  "key11": "4eUoptcThHH7JymniupekZrbhSxRRRQPyZsCQQkog1qBeXRGqZ6XDVa8Q9FPDU3ijXaEK3LuwZW8txDVc4kZiPwH",
  "key12": "kvtWsfwDtJsNR6roHfJXKN3AunVSm1jc16aMgB6hdHvPyjkWDTmS4UoMafSivnTxj4ycpetWMerCBgtMbiEkn4f",
  "key13": "2hSB9fR2K5BUfiUCoXZXvs92u9xe8LJDbEdhtrEAknmprGhgwFxF3b8LzSRQaRYdc1RxrdzZJNwhuMKn69ouGZMT",
  "key14": "65XD6WJ3bjHoUpNkrX2CL1PkydPwoQhs68ydnVD2Fk8oxfFodptB4QkU6wEk4bBZkN9JNP1RzX3dire9Yh69uUFF",
  "key15": "66LfmGzSzQCYQPDGtQppHKUjWfNMcNu2jjaEmDANUzJXucx6JHx8sgBSAH7NQkrRSbpVVBs2ufS7uEK37jLBZEou",
  "key16": "121kDfvFdnUEAWyGpKXXpaNW6Z7wcCuxxdivhLqfGm87mgpARxDoxoDCCkdJDsc58Tj7s3MbgbHNV3CWMCNsVqWd",
  "key17": "EA2K4jxPuDptzYUcmKDb88uSuykBd8sfdA5fuF6fDGrwtiPxRwekHMkf9sPmRHzQM4WBSF6RYdSm6PFdwrbMcFK",
  "key18": "5NriwpDEiowZbBWsPuiFReTGV4k8ojAzdd2umKq3J65EWPQU4nSsy5qaA9axrb6483VAgZwtwDzGjyF5XaTpvKLF",
  "key19": "327BxP1RpWPCGhnaUBnPBiii557tNtW8oEYLGCtMcfRBznTscxmp8RgVn4922Pm4HCe5S3jvAirYdKwvD2akPWMR",
  "key20": "3yCmxBBTFdYHYUCApVnkk3HiNcZNEFYQwnAqZcVrq4KWzHTJ5vr9XNHCF6JAofzk8yL8CsrnP5cfATVBS9XPcyAe",
  "key21": "pSSEqVaSagD1qL5nrB6ePTWg2ib7SDy47USo746jMCtikwv7SAJHhZ8j5HK7eMMkKEgKGBj7hjJDTyztTnqQdAB",
  "key22": "27eUYBQQ19WdFPrAnXNDMim285r5WRJcXFe3BktYBB64Tri8Jc8dsG3yN1QKnML24CyturnRnWBzBvDgPGLSP1iN",
  "key23": "3LPfAsVK7Yy6eww5phEQKK2ChFJsm2waHiDadG2B9qMVAE3XvDswN7vDjeGtcanNr5YAfFoR9r7o9BPWsumiAHcy",
  "key24": "3ojZAAS1yLKVm8aHNwELA6SJtqFW8n4ZNaLMupuWw5hJxC17Ps5t6kCnry8MxqnRVLknntvjdVLGi4icpE1HjZHC",
  "key25": "37h9wY3K6MYgh9Vwx9oHAWEU8sznvJUbhr8CAjW6R7oBwwZLYPWqgVhc8PDKMDLd5BLD8XMP9jJru38j7fX2Luxg",
  "key26": "2ybfjkAVLtop59mZiYpijUhc7f4cbvpQKrvKNMzrXEo3bPpSUysomNgAWZuqdZANYxJSu6scnHmhJmBr42k1Umxc",
  "key27": "41kwQ8cqFQKmDos23TRSQutGfp1mpoV351dPSgi9jhoRfAeNLZofNN1wDC7EBxrVz7b3ZCWVhCrqJcqdcZsG6H1L",
  "key28": "5m2uTg7BuCWSn4EjFMp91z3QpxtxK8XGPiG7QhvC9gUnoQRmRedePCcfLgEAAZ5VubnFZZhNsewWxShQaFCHhbym",
  "key29": "3K1iKDhXuc967qo1s8Hy1k6B4MGXSXzdYmvMXi1rk6xXsbFpdPX3QPkDZtqHBULEQSYGxjeEgYjNfYshjk1abz2q",
  "key30": "4SUEkzPQnmUFMfG3UciZwuHVMcuMxPX4WV5MDWjA4zvW9w3sMhKN4HVg3xtBYrwtnLfzLswHMaynpjAEkNAM4143",
  "key31": "2DfawujBDGot5HwHKW1hr8QLJXUfhCUj2hd7zAGAikwDiSAzWdBJ664p2srUkretg7HbJaABDdKK6avw5FUK1zU2",
  "key32": "2hYPf3ZV2pNGKa4mMamc5xemgbSC8VvnwWoLFWnEQ4BAziPwFHBdD4KLPkGsUAR76Cujgxhz5LfHhP9UvJPUPYvR",
  "key33": "63Re7jBb82CX2vM6wvZgoAckJa587Hy27Q1mVmWHLXBpFRx5JsTMjR8qLVwn9dyPMphXh9VLxH5izjvjhkop1XX5",
  "key34": "4QsY1WVr8EEUf72bHqhzTtRAq5u39FfL9xz4usH28gHC6y2GV6oC4Bfu1J3i2Yc4epyc6JPdWpHGLc4piCSytVSW",
  "key35": "4YxiXYJq4Fjnj2dTFH3QgPJnkqE89GW71U9CByVtGWRNqUUJr86anz6aG3MfWdxSTvTkzgyY6w22BcwnQPafviPm",
  "key36": "z1dvgi7u9dAy2wzjCz7ih84hUf7iSCQ6TJUpA2BoEVzrdNbh4jWtAw2KQTkAuT7GFhstrwaJjbrSWQcae56bmP8",
  "key37": "2yAp2dJ6t4BA3bjJWb7DixTqBnQ9ME7Z5fdcEx3VP5YYLfvhRF3BhSiDyETuh2j9hg8fLgxDDUyM5HDsLTghdh2v",
  "key38": "62wZwvuUQK1br6KpxGesUn4DjZ2AyXiq6Kmmj9NCem4rbygdsJvq2cQRsTahHjfNbTWCLVp4cFtPjLMr9A3cbt4H"
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
