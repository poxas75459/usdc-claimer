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
    "5b3dvBGf2mKZ9mM7xBZijJwyNXazgJkmbDwmTvskmDmzSEL2EZZyrxiqPKrZm6K2rTsqseKJLnodwXK7mV7gKgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRDUgxPo9LFG66XaXGW1iKqRhqKHL7ydKJPhbic18vozHPHUrsMqNicgCwDv7NENYMVw65NkL3KMGxhoSimhDBL",
  "key1": "3djUeebjgCBvZ6ubLRwadwb1W7g4uzkQ6XSwjiYcd2XWXBTiFLvhwqWqUFA6u1aZbN4SdajjWEAq24egpsmy7EqD",
  "key2": "kZaz4p7VHaVSoFJzADYwUbXr362trQ7DZLuf4VzhSsS837TPHXodt6gTbX2sWG6gfCLZi95hMVFfw2z2ony4bBT",
  "key3": "qkH1uqCg7n8CFU7xDjPEKtrSWTsuk6oDcKH8s66YrNnYpY8Vf5y8FwY5UnfAthzvZ227FkHmVMcFqosrm9kMFBF",
  "key4": "4YETX6SxSTcWxmNDfKtMo3EgqG2hAAsbwtq2PSKEcDYjvfjkmY64WZENeZYugTtJLz7CbuUghALzSXMirHR7mdkZ",
  "key5": "5mt5YAqHY8ynsdU1AXuJZF1TFzyFyM2UsUpQhFxfvLtybGy3d5joyFiGcX1CQcqNC4qTEsrywUBjXsMQobAXrf7c",
  "key6": "5c43JuuLfqeENM8txUQfyyecuMQFb8KBtU6B8sT4bTZnL2X2hQkRKXW6feQRA3amYAPn5tCvNDkKyAXXUEfyvs38",
  "key7": "VgCeFbNpxBuN8Sf1D9R8aZuJJG3iGuUBssvFfzQbERto9AT3UrufDyyZ2R2rdvP1a84cXnJ2ehbLniXXfiVWVwx",
  "key8": "2jAnJ3tajyXGLK6SDmbbaJmTY9ansL9sCL183Q4ThegLfjhtwckYA9mt1cf9Xnrz4FrnjD98zUGLtxcXqwbLvMRc",
  "key9": "2C42QsJQCYRsLX1i7QrJEzwEa1kac8t6KrCHG82UowGrobijc9LeqXcVKnmgig4Rwep5KSCUex7XieUwK2TUeT7Q",
  "key10": "LAYm7eDAuf9ryxo2nrgEfvRNbkoyCDKbDPvEQSc6QBSDnXDF2gUcSEPf1oXxqJgtV4K18BZHzFx5BNfMuwaDL8C",
  "key11": "4PZS1AfvJ6MZoT8tPTTnwHDc2fqPhJzBcd5dn7HrR1r8kPBorqZLMRsiLj9EPNSXezFcE7Hqfr3fiSZVbvbVnSd4",
  "key12": "aUZw4rpxjJoL3SQ89nU33QU9MkfyiM9LfV9HaoVhsQ8AQDiQxU7qns1ZvDpMH4zRjYpD1BEP4DLWbGLGpMNnKUd",
  "key13": "2L8xpKranQ58CUUye13CKo7NQ3Sgh9ofjtUWZUHH2hDqo72YPjbryDNdWNLmZU73NNqsvcZbJmyL32bmoaoHaZnv",
  "key14": "2BejSjeuo3HCzkCmabyVP2TYUXxzNFUiBqV7veKtWj1scWR2rjbjV8C2ZdaDozFjR3reGqKxiudbMgfNNEL5BuLz",
  "key15": "4DZF57DQk4Ya8GkVG8EwdJWzTSiZ6Po14uwfvcRzPuAwAjW2KxkvB5AJuDe6rSUT64Ca9qU4mAEcG9MBxV6hcwem",
  "key16": "3eMMkU3R4jVvdvCXkNzehwt2f4E2wgEBYkxxDWiBgqXiDqamTfPcrFnVYjFFNvHraXvbKpHaoyH4bZjh6b2TGCfB",
  "key17": "NLEdBhhMJaNU8ZUEbi6F8ePbw2kkBeB19NZWvKv4bfaWb9Tuy9iyaFZmZ4ZEvVdPCcVZ4FvzhavwhxKwQ1Qw1GS",
  "key18": "5d9Ngg1pcqe9xnR6EeXpFPUFKwq8FhAYBHageuqApwhodKowY31o7tb1BGcA3m9kpVW7bqMFXWPPgtaRarNrwTmP",
  "key19": "w5AvvWWehSaecRr2z2eFiwesRGD8pbURnHRuHteF5F5ecpTWcTJhZHuEKPsCbWCGbfQ6W6wDG7Zph5rvsAw6K3k",
  "key20": "4qzHK37njfn588zydsK7j6rgL3iQi7ksRjZvBJXU8jrZ6hAfsBVYQbZH4iZCVy89ZXEjfDxCZTLpordkMXQaS2q8",
  "key21": "jqYxpHAcXjCFc8ryzbFw6Ppnyaj4eENHgmmZnCHBruZ7mPK7W1Lqv1QeQc9VMLzgaWXqURz1CjTuCjDRfTgaWx6",
  "key22": "2qMmC963BxZzFHYijbTExnxafjgsuKUbQvpukLGHNK2KZfoCwPU7UozTKcWNsUQLRPKSG5muTeD1Y8bPqyUjaV2Y",
  "key23": "2RToSFpK924a7U8rWBVsvkJXh6GQdzrcvrP5fx1xpbNbko8AKqUJBHaAHcttPhvtRY6jiUfYMi9oWmBrgZgE6tDj",
  "key24": "26WeBYnAf5sE8zfkHpHL7Uwce6Z36JjeFAFKdzicgQpK4uY5hZEc2GPuqYzDqdhiy7Qc8SsvqLMYZkFcxaAzc3pS",
  "key25": "PhcADZarnwwE1UHizL2FCyJEbVSbfVcwu1F9oXa2fDm4Rwb8pcFzX5fXET2LYLbkV2qWfL9rrbpARyEAzjuqGEQ",
  "key26": "34g1FKfsFD1hcPs4soeNMkoRnKGMjYBQoWSxLw9Sw6qd5qauu3zEi8LQ6qhj7fMFUgMRYyGRrwx5WrZPaPRp4spL",
  "key27": "4EfVtVRXUHkYNaPa1mUKdW9XPoryg4SBDiq7m4qm2ZY4v2sry8dCTfwQTtKEVZ5o5TwYXp5RkFxbU2iKfiQfdccj",
  "key28": "cEwThgKWqFzbQDwGjTisgeGnrF3sn5Uu3xZdFAHCdwtbqjri6fnrt3UNpjEcFX8kftCgPLDYuSJheDcbdnHrTho",
  "key29": "3QrU4mHLGVGT4hLvVNshpP39hcPbZNPEUBpAV8hxMa6bWptCjm7kLUUgwp3ZbagPjX8yYkaQFksLyNfJ8JeJZiJx",
  "key30": "2mcMDor3YdBdjwgwEoKPkiJCzekVybwggqVJyBfUL5QN7hSKpBB4Cg7vfgWskTDz9kDNv4b51QuextqfXJR8LY2F",
  "key31": "3K1wFs81xVr12hoA96BSAv5EJsuYVkJLnqjNx3Q777XQkDqvQRhE1qek2ukfB42iZyiFK3aKXxf4DmSfd3enypXg",
  "key32": "jfvwL68zGq9fYcGXgnQGfxTPqEq6EA85rFse3B7gSwFNhMx7KotkUVbRBHTWNnyiiTakmDTf38feeJrXUvBNaXY",
  "key33": "dsydPbvoWJZ7Yi2BEg4zfneRCTqGRBdM8MKgBD6JgEoLiuJxgPYP5VXJwUsjqsH6vVHYwxtHoBn1x5DG56bmNVw",
  "key34": "4eRekzgMychzA8VgL9DwWr64JinZgKujJ3k3eE12swY4zkEuCqSpLZ8ormfqn48Q9ZbDW4WkA2nrd6m4T8W5tqPB",
  "key35": "546fSGZiwxLC5MxrBMwf27hv4yjyRMhVSHVHuytKvz8uPzvCaWe6FEvRMBDT3VtU5XdGapiMK9uBktL2xp2a4CpJ",
  "key36": "2FBhyHF5AEqcTeTKYQsyTX9PfJkmtkas6UV2Dw2yxWU36wToYBZQdiz6SK9AMB4SYjqTtVE5zbJ6wAZ3dk4cPVdt",
  "key37": "4VrL73Y8nSMJGFUMbRjoPJ9YNb5MutkfPkM6TWHjyx1YhhVCgmXStpmufKL6jka3gkb6xxujzYQGTcBBgSNMdBmC",
  "key38": "46WP8YjhDNsPg544QL5Q4AYyeVgguQRk9LLkaPFoRJnqowxzArTDNahgq2yaw1h9Gzem1ahCUvg5jS258yWZW3R2",
  "key39": "5ArMxzGWXmzq3Sr1jpWLWnP2iHDgxn8He8AeqHpxbMXsYAo8EENWUgcQvfDaTE7USrBoDydUJNCcLZz2xBycsGMr",
  "key40": "4JfccNTiqsz5hxJ9p59VUMgYoAPEqZHXDYFP9BNQkMbdjL7tzQioYEJnHWMxQPwu1uyj5Xnz1uzztuB4Pn4TVnHk",
  "key41": "5UcXBwSfWMLDH6s39rJRjh9RzPgwuZwiMtrJLLmzKFSu35ohNY2UG2jsFX6GnCbUwyjXZJJ26qYxf8p9X9QrwzER",
  "key42": "ipXkFX5nENkgdosbRSaHPKRqeGQDygVryutGpjjNFZeDgzmrtBgU1hU7nPEsPPateopChWJFdUm777h3pJDfbA6",
  "key43": "3oCsBDyGdrZjoX8ATHFGNZGYtTJ3fen8t6ywEjvG1a5bFuJmUD4KT9SFDVvkR19fNSuUFiYK8VGGQWcqTL3uLeAy",
  "key44": "66r6xp9cVgUQB3FnfcvXfiP8vxYWPHFqnHvYoGux4o9G3hHpcm65XtZUQHUVtTt3FaRJJFANNEQicbx4i7UuHCVc",
  "key45": "HrJVkwVwpz816recPvUtKsuJ9NbT8sH61fNLuo2d3whcEY7NAQjYuYj7488jJ8YnKHjS5S6svtyEH2SHipmMMiT"
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
