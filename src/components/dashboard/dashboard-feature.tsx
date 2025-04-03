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
    "KRnn8xR3WmLM2X1Cr3JXTUYqxuetyjC449mHx1qzMdYGtqo3BQiEgSYbQoe2PjBVBYUWb34HeNveCyjC2Gp1CyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sw9dTixChX26YUc5jKuiJfzpm4B1ziWYEnueYSD6X351sPFdCZEkgTmict2g1qVNwecErdSMZc2rSFHnu7AfeYp",
  "key1": "5BCsj82RTcGmECHbcVakv8BR1tCpEuD7huAKzCzLxRrB6Nqbi3ALAmqtnX27RsCYLn2K8QCXw3MkmWWWD92NQ7oN",
  "key2": "65Hjvfus5Bw3QQ2B1JFDuX4F1fAvLKfEQvNzYYTVv6Q2CznkDBFyWeaf4h9EBa4xmqkqp8sDxCg1vNUEgGejV5gZ",
  "key3": "2fyN6RPBqd2o9GbbWTYKdji7QTuiVLVbx6aJ1oqDzYDQWmYFF5FHVeWgeTZARXTTXhF9RAKp7RbmuwV3eoARwx8r",
  "key4": "4cWxSVGwdeWEc9qYT9ZiknhadoP6Z27aEkPHNLLTkWWc1Kxi2ULurehkMokitBFtP4Xe12WMdgRy4CHGHE5AxPj5",
  "key5": "5NtBHbivic45vmq9E9Mb93rq3DKuQH2rB4m2296pvsgZEoahi9bS4rMoiAJZTde1J5QqsFCM9rmkDA8Td6mJaDuJ",
  "key6": "2ZdSdQMC297xdaef6BqjXMNUM7eeFcG1bbmu92UQ93LTAJNRqU3tn8TFPtFnNddSdiyC8e5j6YrjG9Gr3hXCdLf5",
  "key7": "5Whr7N85PzSSfxL3UBhXi7SXHYxV7x1GZLLWJjRchbkurDEQhm5UNe13kUJK2eRhTgvtd7hvmi53mhKrHu2Xtz3E",
  "key8": "56uDhMznr2gMwWBJjgWFWjbp64teZbhkAsRTzY5k7dYhLMruurUwP3aVf1phWnko8nCMENAVPtHHBjaY21y4jiax",
  "key9": "5mey4w2uGTJzsQcCLfA8qJcYmqBAcQGRghqifepsfdXnvzqnnrcrYeCie7Zsts5bFvnKXMBna7wBHFLXrF5Z6GsR",
  "key10": "3ULQTv7UZxAmGizRDED2KddfrZBpCW9zFULSUgqBsBta88r6VWDCD1eLemzhtzmG2K6cPN2YryHX1GmuxuCvHdaQ",
  "key11": "3pzUWJvdifDJCeX1pGcwwd1Tq3c87PdRCeqHUyxeb4QWMK3Bc3Sn7qo4jot9QaZMAgTgSjmWTiz2rVxwkb6PxhFM",
  "key12": "CMi5pvGDaWB6RYZQLHK6cVFDUjmuKXh253Y2eRpwd69rvfxNjieXTeJLUfmBoV3K42N7Nv7tEbmbECRMDRAqNHz",
  "key13": "4JQMk4im4N8X1bjGcjhPrfC888nUnvvdXorJe8zA1VMxsbVXDUjdzeTrBqPxfSiA13FTj8FRKqtoYfVasF8iypuC",
  "key14": "4m4x4BSxbmNFZbHGGDfE3sjaNEGqKbNPhjn7Yye3aiFNHVLDSnXVrfZ2JQEwHFadnzXB3b5xDXAhqmT92gAVUxb4",
  "key15": "5RZNsG9HunGoemrWFToCrqD8mWqGbYp6thtJ4PapkMWmkia9wBn9QpXT4Mm9tftLEzF2USrkW24o7zBjH53Wrfyi",
  "key16": "4NMVZfJKrcVWpBz8oxid9pftzqwK3YTQpr4aW6PZqNRsqQRtqm63BHock9jZeSL8WUMA4rhEgQaVZKPyqBTe9r1i",
  "key17": "3SBhSDmJ6fWxeLcpWdCAtnaEWUrBCQ9jSfJ4KnE7NqwqFyjwM87eHMmCJARfssFeJ8sP5g6iLC5E24VhQnTLMvZq",
  "key18": "4iwmdkb1psFs9ANx6R28Z3J5np7qPX7zDQqvsTEAqscwhxUivu94PLNsv4TmDbBgsPuq3zfDb7pVY7UZfN2FoWHy",
  "key19": "2D6i8NQ7SRiyTjanhLH1nbUVjDReZWn9yCXHo1bDaTmakPKeQhrnSnkrwDcmhBzYLNa2U6bcYMDVA9hLEDmeixHw",
  "key20": "2nE3TArMpqejcWAXbphXDELYE3QjQ9WVBHw5B56HRJAacLR4QUrcND9DED3B1exk8LiFt1ump7KraehtQWeX5k6i",
  "key21": "3Gk3UAtJSKA3yTPaFZQAipygWVDXLfJBiva1VhEQrMQ68bEWRoL4cL2gKWneYwsgoTtJwVudzVavuegXLwqF8f3n",
  "key22": "3AiYWDgPro5Xxv7orMidvKsCgCt5nvg9JhrCDwpcohDcqgRDhcoFYLXrN9QFtQyi1XgpGmM9ogGwcz1CfZUXrprZ",
  "key23": "xeKHtjUFqek9XUcSkKadHduWzEgZB3Mxy9zP3SEzWXmVQ4WoUaBdkXwaRKUsFCGT9V4ByymqB9gvN1XXcXP8spd",
  "key24": "mJEWSVU3jBsJPTzUdGL6Rdq1LCHuAcMQ5jJU9NwZhZPTZk9gtemUYg4CeSHLn5tZPFzzd1FH5fkTHRxMCzQyk2B",
  "key25": "2SwPWQeiy1e6YPMW796Gr7HvdnFHFTHkU4Es2dfZnAvriq5NrA3BKR3PkaeDEhStZDujjUJ14LGRXLTsKAuDRbqD",
  "key26": "5nfHXzChpKH4dgNvdfhVEj7q8M65eHL3MbAwaYaLMom2PBsBFsFacjhtjnsMHBTq22PQwK2V7UoCSLMbHcont2hY",
  "key27": "2tYruc91KmER7GYsGyaT838pZD4ieELUc5CSYAtqSNEJqHujCCz2o8CQMg4iudjmmfJHHMxBxUrbzcwgsiAAqMqX",
  "key28": "N83HPKKYAcNxaQgLbdMNfKxuwGcC8TXvWGNHhZH1pW8gHGpiJtX6D9vPPB6nXTvFCTzx6Tw8gZU1XRbZxoCvmbJ",
  "key29": "VZJjfyckYFXbCVRoGAMwpvKrpwyaGTzjY2JWeQvdK1ixmpM2UNBUsayoPN3gMqW4rnzofJ6hyWJFL9E8v88PhQY",
  "key30": "5rPSpkMaSXEFBR66NGFHxbBbNAQPvE57ndybCisCcWJFAehfNgoiN7V4j8fLXA5Xeir3XTfaDkYmfPFZRFhZLZpK",
  "key31": "5TdJvpBUCbF8RFPrGoBmYXtHegbcQTX84zn9aAhmnjiuRMkeX62hRTDUofx2UoDiuMCLu5oTVMqrjgY9QHW9wLdn",
  "key32": "379NuXCHEowZL9ZjNAZkyRbM7P3W81DX9D53rqAwDaueScfdsmRa5kNE4KDiuqoP9peTmSRcDHjmnghqzkTYfBeJ",
  "key33": "5Ap9VcrdgPycfG3BnbvivqreJQvxQDvRskHTTru8t79gEtTXZr88S6si2WeCaUW6XMdfER4m2zEnbdz4RjqjGCJX",
  "key34": "5UdsGtWSeL4HvySvk9hpkqES2NT8WhpGhNkquuSCnp6pXc8yCTw6D2MJxe2WBFnZR9tWvfMAJXSL3U4RMDQxX4PL",
  "key35": "2ZLFxnweqbCvbzVJbGKyDwBbrS1BXXPbKqgQ55Fu47xFMMyUDKBr44SithCponXTx1wsTEYQtXRpKdkwWziMPn11",
  "key36": "5hHjbz3AmPbBbrCZ6TctpMEmfrWYGipLsUr1cNXGT16hu5DrMa578Ys8v5qEpVAtNStViPHjuC3rsJ61fXz5Ysuf",
  "key37": "2nQGVEKgKsxSXwt5kxEBfrbcw5SwyijQux8dvZGRr7Jabgc6DdETABNZ39epxYZWYQzELiiubXoHhxAHLsiEybCT",
  "key38": "SVDStjSNFLr4X2foPo8pgDzKtDqs3eg6PgMqCTVktgL1JCzZSaPnxmNLpXWyt54iQG4tdDYku4KRhJ2W96nNBBH",
  "key39": "gCXRsAu2vuPerjc2NaM8zMbv1tTu9AdXAL7e3qLQUvhLhhr7Zgac4nKc1C2T4JCEx2nUytKxp8AafmmfkaLHUk5",
  "key40": "32BhLitMkRG1cSfZEzpfKktcX1ReZEKkLkkzRan5YzjuM8XyNGLQs9n4oTm7AAZxfauECBAeYVCSGsQ15aVETfH5",
  "key41": "3MyYWeTGYMseFSP4LAvJ2am1XBtBmbZ1j5eCZ6ajBXi9TUN77qnxNAm65WraRcu9wMMYXeBZ7xQF3pmXFLK83EPU",
  "key42": "4KeGFkNbBZhF2sr843iijc5qqhaeFZiWJoLyQuPKtzjoucV32ibusqhnHRED7k4E4s9wtpqARuoxyZFNqu8kMXhr",
  "key43": "54REb8HdywmXXiiVEUfSdZtP7zMRj7MhmhkZQRFcZtwBhReqPogKMvzXkg86MejEHePjgZALhtLDPc1dP1vdiaxt",
  "key44": "MUi8Dg15fSXWc6HJrcGpxTQsBMtozdoe6NM6rbw5UjdTDPViMtW2NkGVAxMgPpaotDSQLAbB1ZDAGFFY4z1ewAC",
  "key45": "5L5SbTsiGGYE7hdNiqgxpr19AcNSSbC4wudX8Y7qiXG11HYwTw6h3YyKP39uTjJ6ajbEEAjuFK7MeYMBJQXpXmZX",
  "key46": "5FGWhdMvS1mYgWeL51EpqneQoPjMXWGhAtA6JYuSKD7xvSMRZjJJjAw6uKs81SXbab6fd2CeNivYu8tQw6vvim6n"
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
