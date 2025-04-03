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
    "5EQCUdLC3UxMDfYmKVRdgAjLbwdRdgZr5UYcuxtj9p6JrYQSynAjE6PKZJqwP2JRJMzLtWuP7QLjmwMokGgJRpFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JBErk7CiELouMC3AgQ1duoKVfh2UZ2Dyhq8oMpu76nGQiGWDPViVMNHqgrg73SjUtbhvBuQTK5P3jUxGLFFkLNL",
  "key1": "oL3TKDZFUSi3Za2yF1MVwMAx6Hbc72qz6yKnfAgEHnycCnohgfVPHCAc6pJjG7mTZY3nAPqgaBvDQciFMuiMVo7",
  "key2": "3J1B9K1gbyFQUsz3yNWtVzsGoEiR84jkTik3J4h4VSm48Mtthp3L8s2yMtngwqjanBAEUc5ArA9x9efZiC7HVdW",
  "key3": "2ieto3L7U2eVFPYCPSfXgDCGaK7ADtpUSinxt6eVdi1T2f3DMHiAoCUTj3NhPSwwm1Tg8opxTqykHo4shyWGbBJY",
  "key4": "65PfcmC5FPsbNi4im5fxJEFp91hQ19HREjGCwcAmbxEUGbzBuTMHPwVUmBKpoMcvqNSKkNWwCDdZhQgSg6PXZ4qe",
  "key5": "tRbgvcdszG7pL1ECU4e5YPNG2HS5vnVUog5SWdNohzZUHieNULwrF1Q6gBHbgxrpwwZFGfCDREpKyyaAnACJZ1o",
  "key6": "4CaKt34bHFGHGLX4HPgxdPQMU6ReStBF6es8iyKs4DMtkUNmWaH4VhjqDX1TjjNVWVtweCW5cbrBbGZGRoGEFbQQ",
  "key7": "b8njSyzUP5kHjZntGKdUsiJM3bfydSyjAr7J2Z66ehKfo9jrRJV3eegiWb5Zb43raTnFjpgSqHiK8xTAvaPa8fZ",
  "key8": "2H3ZUS7Bo2NdXsbyigUNyxNqbp1uCytwGiPstL11GXFKWtjCmnGqvM676eifva1x8o9FkkURRPLTmbgLVaJAwVSk",
  "key9": "myqf3XQkg95XL6e2E8NawJrwd6Zbwx6SgkQD5awoJoxfQnjBYfLGUoscwW14Seb4UXjJdzjexcRi4U8gRhwEWAS",
  "key10": "4MxwZ1iQ86u2VwyxC2D15E92BGWUjTJyCdNYw53nrADDHpQyFW6nRcAcr8mVcHjrqz9yEma68j8J6JcjKnUkLAJk",
  "key11": "KWPxdSEGSYueB3arG2eGAzqh81i1RGsT8kxWQiZfdJABGFXDSDFaG4ampMhU5dRX1KvqaQhkfFAGQw8sdjKQKHt",
  "key12": "5hEh357cgJee6LQuD55zHXUpAV77QxUpS46tFNFaRwifKMu8MCaqPLeqJnCw1LW9fwLKGgX7zXT5mytMUixv9j8m",
  "key13": "2MLqFxfCgFD8XjMjjvDwsH6DaP8s3PkVdhipoV5zjNKWciiNWVxqX7mULgS21RC4XUyQsgC4zfczE5fyYHcmHdwV",
  "key14": "GxcKbNXUSWiBKA1f5Tf26hrgsktjQWhUsJ3VMmFbbz4N5s22rXfKBRzxk3cFZ1gLzgyv1f8BD7AWj7cAM5FJuFj",
  "key15": "5RL5BetUmhGxKi3Q8uVYVz3DDShtsP9iiFUxVz7v4J5oZ4HpFKFroGGtZBALbGyZoyzQz8jLNWeNmpBg3Ck1MtGS",
  "key16": "65XFvyqim2xa5pCHCc9DDuF9EddBfJxJUx6vj2zC2Yx4ZqwvNrdpYChCpsVnzktMVuzQBdgRns8zvDCseFwTRqcR",
  "key17": "2Dv8dMGUuuC3sLXu1Rmnks9VWDvxX4yiY3gcbJMsvF3ByH3bMcrLJgiy1bmfX3UN4sbxQ7vqMcnhxzwy11cbWKs8",
  "key18": "2LAMnZ5g8P4f33n4wPjZHyPVJadHnj5G62ZPt4RVebJWWGB3ntbpfeMpn71n3d1U9wnJNNJRZpz1q5SjRXnrxvjv",
  "key19": "2PZRcMdexDAfSWRKWUZvHh21LrACW4NxmaAoeMJFGN67PKRctLiSkWHELS4KqhYbbLFX5i7xyzZo2W8Q2ASL6Q4R",
  "key20": "45g6zNUQhCGeaN5fp5r7jnhYWMnec8AvjFE2HhzbHfJ8wFnmaM8i3PwVkPmcCxyaUMemqaEE8BZ8TtUfbC8hf7in",
  "key21": "36pXvWLM9A1adtXvDBrtULTg84uL62jfeBPQZPcQJyLk43sNbt4zzBJorkeW79mjYjcRmEphuJ6zRnegZHutcwLy",
  "key22": "5Fpqgga6h1kgnr7mbdZ5WkRKFtqi5sgUmbk57WvTMUNYhmvjm25YQrCtrFfXorL3Ks7eaPiUTxLtxvaMiaxZ8G9s",
  "key23": "3P62qpVDZQuMBFHKnYbdEeNituUKhtVj17oBGMaVKu3aAfqGZXhKfGTE374sHwakXEmpxMMZQGYSM83HVDePNRCw",
  "key24": "5aBwSjzExsGGfSS9FM2noAdhbaqghrACai92diQcRHiM3fnheymmKzH3X9CnzZh5vEB5WpqcVekX9n38ycpTtvAR",
  "key25": "45sTiYG5DifrN7ADVRprGQhZXrN9GJrLpqoJ5fYd7f7hT2NC93aHTXMjQA2TwE7yqHKRJiZ96Gv1875sfN8f8UK",
  "key26": "xqHSjakF8vmgR8Eze9cH4LoBtFYV7kUVCVcdurD7gXzsdMQTSG5qwi7gSU43piaWqNJBMExR1DTLedNCgT99QCr"
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
