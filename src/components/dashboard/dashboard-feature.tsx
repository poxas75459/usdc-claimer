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
    "2bBUMGUSMBSxkDVvykcbv2hsvxEdUBFYnQmLxYXNJXKsjBEMDPTTnf6mRpo6FJvPP6teJjxoKedZazVPjjM2aEJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yfF7LjiqV82HrKZY8FkdL7HD7FzvnSWfT46vxbivkPgZg9xQ4eKxyHi29r16trMWRFNjZJrXoUbRwgoQztjUQai",
  "key1": "3uPUmJFAhJYhbLqkDpWsqRo9V6dQaNTJgEhwTtamcxnQK5xJ6adx6A4usuAkCnuUxLuyshrKUcmhAH78webJPooQ",
  "key2": "PwUkNyWRR4SgkTH1pE4QpTAppUp7bXpR4WKRAixH1w4fJZk6YMHLUiEVwmJT6CqqhfC1F7VfHady99VjLPvuY2Y",
  "key3": "5P2f3oQ31hJVpZ5Zs9END5Y2GFx1XSWFYs2PhLctLgTLmABjfFvez9HKybc8KVS7X3NqzpSnL5UTt9VPVkekjqS8",
  "key4": "3aJWasSwokEDNyxMjVpZ38p4J8Wg8XuxGZcxRU7yVzdkJh3rBVw158zwsw6176TVUXumhDLFddUR2HQrv8hBseLk",
  "key5": "2aKZxtrGAG4rsxN4QdSPsGNFcApSw8vYrtgfcY3GPBPoZsCi1wfjTVrzuc2YLaECAPG3o7gWCj9uByMnAy8ce5Hs",
  "key6": "4Xukfzy39fDDCtxHCxWXrZT6zy6jgj521QdinFGZkJzXwaVnDuvt4Qune4VfXWp5BHu7G7dVjnkEtsPQYj2Vg8WY",
  "key7": "3uqrqjroa1nSJHvbrQCcF5xU17DU62fmRxmhScWFXkBEinDynrWKaB48sobaQ9DSKGwZ8xmEfeMiQsE3aV3ey84u",
  "key8": "4piyVBZsndRugNBwg8YBApm6fnqVJ2VCVbiVnxRSGf81JwgPqNtbNGpympv8YJPjVHFy9sSNDgqwYBYDtbXvew7N",
  "key9": "3Eh9aHxa8NY5bZktFXMF96KK33qyoxgvAV7HbGFR8fsgYyCPjSARf6TMCEFSSYpk96P5RmNz3LJu4kvkh2uayap8",
  "key10": "36DEjdS86UJzP7SHvfN3drSNd9nNrHFYgaN29VNkpwVx8jHbR4ZfQGQGsGHkHmwdHnZpk6VQak2xytJY5HQaQa6A",
  "key11": "2t2FneM1ypUtEoF4W5gR8qa22wqbdc9vKPpH7qSimV4wTw3MFT6LiFU3xQTLTSPmpLCaJaJipdYLxLPW9dABAHYq",
  "key12": "5Vrq7p8imHavLpgjqYawKFAy3EQvmeauZYzdfrwJVkWeLF6rxZJxSkdB69D8MVTSFicrDPN2ijq2AWmP3zM2ACjT",
  "key13": "4msvyBeHe58JhFdKVphfBPCiLt3xiN6xkBuymLCASMVeWYZ15LJGuXdKmc8xDuQ5yg9S6NXwSmRFe4jJ2rKfVDZM",
  "key14": "r8Awnigx6gm4NSnH5mzDDDcsSVy6HF3a17Rtt5JaWpo66NFbLKSNgUPf4sAH31RyMJvro998TcmqLjHbu1yrXL6",
  "key15": "4B7sZkRggParT8EERQAoXgbEX62vvGu5KJSAfh9Uc2HYDHUcaRvH8EtB7SiMUj1fNbV7vcyDdctFBZK46Bpvh87a",
  "key16": "3JSEdqeiYPufHcxz4EYbK3z55Mw57hcYBG2P8EM8YAYwg1xoDqJKopS17DetYsSNDsLM4MJHAyFvPcvQUSizSQ89",
  "key17": "4pW4s4fcUa49fpLd6q62ozMoLDkWQAEyDgACCa9eU17ndXnXPbzeXT7mngXwa6wY7Q7hYdd8F5MwQB39tNFcAa2A",
  "key18": "4bUrGBNPysHCzsAyqPwx354983obpCo7Yxdkk4TskB397M4DVE3chCjRkX2pjZVpq6KZa9Zn3Ro8nPCA4AgcSX3P",
  "key19": "59qXgH343ejnoMfzzJab5fiPDqozSwgT1yFfgHb8gkQXqXKPg996MassMGh4P5bpEh1iSBJq4r33t8PKrKJhmb9N",
  "key20": "2AeKREMvBqpMehCSFXhMPDU6p2YW9on2STGrEAitTBgfQoX4C5NGEcApn449W7Ee2TDqgMUzTMiN9uMG1igBy4hH",
  "key21": "HW4cmHnbBsrkvvxU8KRdAKjNdVA9i85Re5YSgUkRJ9SXgczWXH8F53UHV6up7BAkUWjJUy86CNQ9Tj1PvUpYdis",
  "key22": "3e5pMpH4Q9f5bz4njfYNV7HjFg53xLEA6HY2Dpr1mRHxUt86qFKYXUyrNFLVuQmhRcGmHArvoHKd1cGKzsMvwdL4",
  "key23": "4KMReoeNStH2FMhGuwdKVbCqqGrLNTs2JRboW1eTQuTU7dzPd8dxj28z1vY67bMyUpgzVjc4HB9yhaZTapLYJJq5",
  "key24": "EfiZro3pjJ4hHY5DRW5Zxue9ptTSJzM4aHLERztqDwxNgPe4QSEoCXJ43CLZa1CgLpAtmdqaJQMatUmqT9qPSAN",
  "key25": "5WwebMc8yZGaV11sPtQkuqoQ2e5nLF73wL8pnkoBv1tPtEq7wdQSBE5Aepsr75hSoqHHYQXe1P1pM9dYyY89NW11",
  "key26": "3xCjD2urwrD9bKC2wM6WGymfDEtZ9nNu1cpbwWoEmgyJvHtQNidRDpkvqrm17JQBtpMTooEgtVB5JagiEa9kxrhP",
  "key27": "DZEJLENcXjGehxPC7dq81sPSTvFieJFBGKJKG8xkzgVTF7hjyprHkeMWaDK7vhEP7ggocNNtrcyvhh7B5Xauj6p",
  "key28": "51bYZ68gzsswLNv2NVcvtfmVCmrVaU1kLnpK6EnSuwXkM88Gn3oWX8aBx5v2nYPc63RZdVH3g4DYrkkRCAznmGuT",
  "key29": "3NwakWmEn9ovKiMjRjqq2C3nrtuetwFks3sTgp2uCNDxSyNkihhFsrHsXtMEajBuW6Fex34xWrXJsepAxfMvc1w9",
  "key30": "HwG4wjFvEGN5kYBRM7ZG8AtdxCKPzSk68R4CHAAS67ueApQ8cnQ4SfNJYYq1JizMvReEwTUoBBw5RgvRk6oh3KQ",
  "key31": "2SJTsaE2j8gg7yW6GbjDh1z3HqcnrEatmNnKtTioFBQRwa6MtQ7tzaZgoaWm77PprCaGgfS3J4m6yJibCnY3KtiD",
  "key32": "3SstAMewXv3aCFkqqFp6yaHuQf8osRFuzywK4eRR6yKVR1ADFjMHANXwR6hXzhxnTBwcmSrfCJ2CFZ3DgbTEoFaw",
  "key33": "3mcQbAaPAw8U35bz6P1Loi9Asxo3QAhgvhjWy4wLCbHuViTzSafvuMAacFNZtMV3RRNEXDEtocv3tZdYx2Xn6HpH",
  "key34": "pacxGdgwQ3GAJAgcHgoYwaEPqmXt3jFEJeq7DnzuUFyXUc4we1BYbcvZZSY6RWVnmLj9xDeqVABANw2Yt8Vu1Gj",
  "key35": "437qHWUJxzfNaMBoK9abnNkb761UmJWNhknsMSg3rohqbpo7d9BQjKxcZxEopQmEYa2VW96cvrg9UvKm1Qbnn3kQ",
  "key36": "4WB1BYK71oNDUAZnhaUe2AiAjYujAykfDDB2xCRRGdCbBKKUuMAVNwVN3RhE8whZgbw1u4xqVyFRchkTeGVsC7CC",
  "key37": "5cY8Wby2cEayVzhN2FytAWs8HZDj16bDy8DY2UcAjw3k3c8rEaBXdfYQriCUp1Qa9DPoPGZcr8sFCVccFiVC5bRa",
  "key38": "3kE7tG6Jd96N6Gsex23Njzx6dLtm998chiRvWshUXPQCFcknwNiQ6ZiVVi6Wrnr18f1pKd2Ft9k3bpqVuYz2niJt",
  "key39": "5ukuWho7T2u39AsZVkwuci7MymQxLfNeybbkEBbzZ3DqLSAY2kcdFPEZRBP9YbuMxHWbpzZdCvwG4AWwc8LcxyDi",
  "key40": "NUxtyDDn9JiktyCzouu4Gg6GbKHMwxf22h2tqSz8ppQa5QeE7AxTiHgSp6xegLB5P92Qs8ADRBZnwKTdAQyzAu1",
  "key41": "45xGVSNKGmUfhMUnGjHYbXJWV7nSqS4v4ZckSNKa3BeTkvfCgERv4mt8pnts1UXumBi3MFpx1vSCaSg7mKpkzgK9",
  "key42": "3uAA5cypxW1qp9bgcxgY2WDTejyn5Gt2Qcb3eMPdhR6E4NX8qJmChucwdNQYSQFhS43KfPjzZ4jk4F3eKLjJxT4L",
  "key43": "2Y8v1t1gN3Ve1v9dW8vbBeqxH6U6KtepkDU2U1NuzGoM8KQwuwtr7HFLHGPstFTqmAY6LiBkgXTGq5giwspd6yUL",
  "key44": "3NE5s5Wk83meoiuLUnA9F14cpKgwNC7B7hH484BJszh97CV69ksLiYtBngTBpcUahdFDDxV6U4FP8dH1vm2qWb65",
  "key45": "3oRykb7grqowPXG5inmLWJYyxtmf9XHLar1jNogrG5669WTj5hySUY5Hp7YixFNV8TKKSM75wqSTir1GVa74JzMS",
  "key46": "htXmMbTMa4xRz1vLvLW2q67MdwyMy5DDW8Ef8mEFfRYcutEJKBDgaTsCn93WkxuRCLMA2VZ88q64EiuNrDtY5j3"
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
