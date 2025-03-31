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
    "4CprSQ1L22WnUuQQByJ35WVAfuSZc4ExFcfz3SAgSiLELWQ9ExsTh5nMLzx745SvXeLGtoECyGNjgaPpYCzDnup5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTCyPQVY6EbMdwmKgc329aoa5CGVRfo8cyssjDpToRWVW5zdXfsrCaq537xNa5mexEp6aSKtVz3KwURiMuJEDPp",
  "key1": "2TVWyTxRb1uLMCtuJEUqHn9udpDUsyBy9BwLKtr9N98iEHzS4HsUuS5gtYiz16N1uxm7oVCQ7WZaDpioowoobPHL",
  "key2": "4oZoewMj7kUNzqz9CLY7zrLhmR7koVCFZ3CVKH95Q6YphKKPDfGXZpmPZUkxvDua1ufLspAQCCPxvySpFG57PfV8",
  "key3": "49AAZpj8YbW7HvVDwo6QR1SkbhZqBA2Cvj66s8peGRD58gyFBPV9V4LChCG5XJ3SUBpksJTzBEAA9sG427t8wUis",
  "key4": "3XoSiDMCmYAKxpPGqbJoTw3Dkg3yskDWJGSUCZKbMnfyv81cXGow3Fyg1j6oZfM2XzWRjhTiALwT1M2dTuQ45BiY",
  "key5": "VC2P3XafgHJC7KauKkE17aaRPaqsni34wmMVnMRgDiEDcn2jURc9S5jPwjni2zvhKNwKbp4xrkDqpeW8V7qjjhW",
  "key6": "4Su9ABYhZKrgmcay8uvw3bAtQ1LAgqF7ys8arSR7UFxUJSB4J91omqP4rPh6F7qrPSad6CaftguW6qXzNvXvkC4a",
  "key7": "EKVSzssRSr4mbS7r8tax4cAxJ5FPcRMudRfYjDzBytC8KQPQJJ4r1ZKrUc2suv5sAPZXGXqufbr4FviL8po47WR",
  "key8": "5otFT5Lcy8VfL2psx5RXgAH4cTbFmWEq453UdfZWq2JBJLivCtTcM657AZckdcAXnrkF2Zj19MBfxWYRLJpF5zg4",
  "key9": "3ixd3tRPHot9MQrRUdEw2WndZiufciFiUqQrNwKKBh5vN51B8JTWB8EPqtXw2VEKKAoKk1YRVjvBPVNVE2ZmRwHs",
  "key10": "564ZnyxoFYdkAk9yNnqRY1hJuTFvmBrDKWSyeskS5fPj8hpZVdUAtjyQk4Wfxxy9bPoQKUzJ75n4Fn7j9u7cPZso",
  "key11": "66LiNNv222s5sr7ay4vg4Z2RS7tdJPjJB6592DAR4g6U2oVrGRiBMTCX8JwYJ1qUDyALbNCyvxTH7gv5JLLvSnqh",
  "key12": "uWp7m4M92EcZ2vP1zkAKAU948Urzyqs83Z88hrSRaS2RLcerJkYKQYZ95kXbkgN8cCptrZ8cpviFmXFjcLo2yia",
  "key13": "4T1GwVf6SmDe1HNDYdLe1RN7JChNf99EtaUDVvrWt4Gxqy2bgzD8DkkEVPN9GC2KhoXQjDimikjENhQVhngWb45n",
  "key14": "5ELZ1SE2qNVRQ1b7Qyq3Lrb8UHSzJj9AuC9FJpTyS7stR5GKuYKjWUb49cjoKLUnTC3rrv7A74G5GivpGXKyDMQM",
  "key15": "4YG86sMVrx9HFwGn7x231pP4Bc3KW7qEmyF2Bu3EwoTv72D9Xv59WUaT8uJNpYYJMHMaipSSxLqWagcnJwFsoDLV",
  "key16": "2FndzTSJx3LeoQa13jsaoYssxVNfbzRgKtzAKcXnsoAykqEbDN7cJe63Vuyjt6jmu37x8vSA9SLbQq2GaNAmUBdt",
  "key17": "2UesQEfUcv6gJ6Jd1TWUS9XMpnDY3Emk1SXqYUogfybJxCQnHJmWuBAsoaG1Zc2LimGffHAGCp9ke51HvFoaueiq",
  "key18": "3k933JLhppXMEdL1bSiX3gPqx6ALyQk4zSnoYtjpXbFuUdrhUeCnphntghR8pKfPRqNXGMhWyDhr4Twg2HviQrBo",
  "key19": "4THS14iEZPviPPVW8Ekp8XsRN8kiT2NwH8BXHYXzBNbK7SjbnVhPx7BWKryp9ikXQkPnsGM6ijMUHXetZqPQHZjJ",
  "key20": "5oLG4edXo3N2sFwbFLcp8rMaoSCgDm4nR5anC5ecWEUzdX9X3pGBXuRdTBJ4W7jL9pSawgRF7aqFj3FNWvuQ7Q7Q",
  "key21": "6MRUfBLHADeZCtjRZH8765qhayVkbLUPX9GNTAWFBs7QV1ZVaRvxm1Wc58eZEdCMRNtkCgKYCnczESMmFwGAiQm",
  "key22": "3gSY1cxRRkBXj1iADyVh25tbPeQgojYxXjtb1egXNgxzDqAkaFVDiCNbhxEfhmhgie4FKzQ2XvHQjizjDi8ifxCw",
  "key23": "3rpiYr626DnvARdNAv8n8fPmPTVHLhd6GbkvM9WstfJcTpgkz4ecFr2ch9SxkRnQ398TJYmaL9WpfsH1q4icVERJ",
  "key24": "3RxqwjN3CRmaUq2yFLrD1q6AaYf7o85S6J6mJU4pAJso3jR4EdxKD13EzCbqRyAiubyx7xw1SRbdQox2ets7WkZc",
  "key25": "2w4Bb5zWZhbqHCw4fmBwx2otEPMzPycZm99B7vG4Cjh2LcYWS9H4iAT3YYpb1iqh5zh1fURoMCsHZBzWwji4n75t",
  "key26": "3WkEeRrUSh7xzA6Qs8qEWnEnatQhpJ9p7hPqDDKRAgCPy5dyWz9Ei66i9hXA49M9nXYdiH7WczXHx2iX5adBhWe5",
  "key27": "HH177ra691ddjgZZ6ZigEEBgSU6jWYkSTB5MeiUqMSJpKQ7iCiokdHUaHMsRVrYYUvkSwQ45XqzvGU6EbVdp229",
  "key28": "3NZ81nwaGiGcXZpQrPPcGhgY7UsB7CYsrSagjMPmgfu5mzU8YSvdicpBfBWLQYDLSCW1kXWHifAgq1ipQv8ETXc9",
  "key29": "4pQ183qWCSEgo31p8ci22MFvDRv57V8UC15hrsDdKbSBTGsECkGYbyqrucbm7Bx2ud6C9k9N5bNrLiyRyMGtBns3",
  "key30": "466q5gB7iZUdSomE4Px2gexiSsyDyqMw224s3i79BZ6sddSGRkHiPsC3pRjz5PiJsWzkgzWjZf3Vvjfrz5zWuzSH",
  "key31": "GotW5dehFgnoi49GhCTTWPQ3xGApDgEdYy8oTKcJpUCnFemcYJ5eDJ4Etzi73F8LkcA662gqjMVng4BAzDYtpHE",
  "key32": "3Nd3zyrmvoYZ31EcW4AsxVJ54QbQpE38wAV7cx1YxvrddZsdtum4y3nZNNnzQEU4Pj9qyVQvocfMHEnAyUP71cKg",
  "key33": "3AbZwoZs4ZuBLMexmfKSb3a5qL6XhyEuGmbYibiS2fKrfvH2d53poeFrmxrtgTzYLzcXq49S4kD5wNjAjU2Zqinu",
  "key34": "j9m4TfhFE9DPHi2YwSwf6uKHqiMRQbpto4YgjvCDNRdJR3STMSFpoMY2KMvdnPv5rRpRxE3NuYUeKiceanvDPvN",
  "key35": "xDLFSanqU5uwEfEQdy1Y8rbGPCzfPBsCRpWPVDqQjzGCuQV2HjFamuCmxfgjmUWYLvXmoux7gGgyV9Czemqgvbf",
  "key36": "4mnamrecfqQaUJwy8LGL1Wzg4gAYuuT7E4j93MWvpGKsqLzcKcbsuDezeHbrjiWHczt5RtNLj4uJ16yX9FKggy6p",
  "key37": "5wBqSqMnogSVU9czorjRPYCtPGNwcdqdutV3673TxTcVif1QAe3sVpbC3XRYTwqQLJQD96JLEKphiqaWurPmo46M",
  "key38": "jcoxaqtetxzouwtSmh6Lv1mEZ54NBdviR8Nsb7mncSyAW7oB5ibVmB7dc4y2Sk4Rsocys2iT1qxTdjem1f5mESt",
  "key39": "3iYoMxmW5U79EwUByqxpmHhzSxhW1EknkLnuPhPUU6WM5mPsQP2rcvg5tdVJb1gYgMFHWe6AJUdvpi3kRM1dH9PQ",
  "key40": "4gjM3EVH9kPE8uQM77AG3S4xmt2Q7HUEzRqSkqoArK9Vqe8kovGrcHN4BkU3Wn6qmjhU9eCw6SvXBG9aDdArJHvV",
  "key41": "4iRfNoSMedNFQcS9Q2ovgXUCeRnK7rwqbzftNbrxn3T6CVn38QfAx5iDy7mate21NTQ5mxbA5x8SK6EepUHuG84",
  "key42": "5grsprU6x4dwic8yWgAwJXE8f3abA3nTVuRP8KkbeET2x1yT7wxvWw3rCyXYSjzyhSAAh8LHuvaK45Y9MaGyvC4o",
  "key43": "3TWBHTwxJGpPn4YZAqYUvKpy2DCdEWfWKvTMravTaqmidYmNegQuhYR1oZfSm5sDWphdCEvLUU7FtFYCtpvhwb8q",
  "key44": "4Z1RqGJYyNHzmquJd3PRP1tph41VQWKUiR86XAVsXwhj7KruhMQWVkUbXMYpPdb5RBtFUMBqd5UhYxCdb6t8RWLM",
  "key45": "4v9PUqxW4ruvh8YGGma5LtNSsVJfXJBbzZGhPhjbbGT2LVj5XR1Qnhh2zekxj2sfwXDGaACMXqDUpK76eL3EYLg1",
  "key46": "3yXVaKKhCCimA4A7EBQBfXom9qY9KUyHtqKV5jVkHNJTidTNKC5qFffNLbLFwSRtkwkg79v9tErHMhMW77qcd7dJ",
  "key47": "59G797AL7HDbxMwQw1qsCKdA9RTveZKV7cZrCiZxE6k76tFfKPZoomfmxVjs86L7YPWUvNRDQcnJgRj8S6sHAacX",
  "key48": "3XFKJDQxjRQ13Nj61q1zVRWdKCZKc2DfPtqH82Yx5XQPuSt14seUVTm5GCFfjUnn6VqHj5H694xVNS85QgxUgUqv",
  "key49": "5p1BDcLs47NKi6BPSkAy7tvmYNWnUjNjw5E9QjD3o3o4FttMtKdp38qZ1oVcDu3891GWvqB5Tdck86ceS7BHxKXn"
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
