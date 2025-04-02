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
    "DfKhhCVcdZt2rT8LGmG8ZnnusbPh8SLQ7h9bNHGcGx7vCMdDvMfS9VyZgwEVmxeYgFQnnsM57w8ShpxGP36Rf6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnQMzmQE5b3iZFtEuXSsRReVLg8rJxfhNhSNCMwnuqWMZsC41UBfLBp9ASRfsdeGwuAPdFjDfQSvZNe7Vm9N5S6",
  "key1": "4wG1rrT1R5FwVwFW9FqcsjutsyAQnvKdzNZv4N1YXNVGb2ZTNgH8jcNScAFzkmzhutzamgtQvGs93aBYeBbogXGm",
  "key2": "Wi1k1koKrMyNbbzASuhqgX2JBr67KMPeVjZgWAfVhmoqrM1bUk1azMiSifok3kKcKq3Jydo5VYA3opmUHUF5M9R",
  "key3": "5wf9rCYTPJadW6xmmaP48bG3HUvRx5Jcn1SzMKnbrRAsZnajpaoPkmeB3HNnDyeNi7GAP2sNytsDtun3fheWrcUT",
  "key4": "2vz4jxqDg5YfgTg82UETkzxwBqiMfY7RvADLLtjk7euPAiMjZP9EqnuT87LoXe5PHfiL7zeXSwV6TdHHij4Bvf5Q",
  "key5": "Jwtf72x7aTSxCjsDEeeSBLFNzw6JqvtGodCnxJ2tdYBVdU4ynMaJaWUn1HwR1W4C12VWRXNDf6qaSo7RzzNudh5",
  "key6": "37WX5dt1rzvWva7NXsavMJ81nQQxsVtYLfSr4VUfFK81Zbz9wJ6c9Jj5wftRHtNb5EF8V7a34SyGDH8DjG5hnkqv",
  "key7": "55ErMtWvWwjRoMwA7oJnSBFmjKECVvpJUw4BFFnANqoBy5XSDVJFURr1BjUsaW66FjMiXkzFXhrqNxrsVyyk424Q",
  "key8": "3Dq7GnToXB65K6SMmBTFsTmxL5mc3B14owFySzUVSbYhmGQGr397rsRK1KjP5Dfcny1F8vCWYpLBDH63G1BAc3gn",
  "key9": "WnDbKzBSzrZKjpuaNXUTw2UHuugJTG2rhBsD4Zb82Up7x8prGyp5t1cpAUsf9DyAL9Y5MSSLzZVeeB2TwKj5dZ6",
  "key10": "2GWaKDtFx8YAPAs7RdmQA1XwaAmLJxevhreQWW79Wxh5EkYkBVhLuN4KEf8LnBNeehnS7i1yTeo3mxtuhT91NHsm",
  "key11": "2bpBt6MmgSjFGT73fniwbBE6tHya3VqFy5kZaPKCGfAU7DjvBvNx2PWes6i8LssJ7M3EU7sFDiTSpyzig9c5Tgq5",
  "key12": "2GMHij29L2kPsjxEu36Ja2FpqUtBLk3Gpmcx6RRXkjjCTnhwixeYHBvdrfKAuEabhEycaX75aj5PZNKBst9PsqcQ",
  "key13": "5NyPeMaAYMZ9xeHksL5VQ7pzdG7HDLLUQsYofexCi1r2xkNPGxVnoHy24uEGLwFsofqKxU2DoNZseeNrLpBNXJF8",
  "key14": "42pSvuPQ2xfgUc7uNkoLLQmAeiBFoWpg6DFV5AVq8qy6YHbqoYv2SHnMorsdLDf6RgTqSsgy55FPuM4AnVSkmQbW",
  "key15": "2XxsH1bAXeJvgcKBcLg21vXkALHXGLRTjyZUzxtUYcq7bBqxKGPzvVDLtGd2kDLYcLrJs4xqyXWUaxX9LUScZeWs",
  "key16": "2kCLWMtP2miguAi2dxbNoJiv5s6aLrhcvPUxap9z3etv8GWpuYH63Ssq4rgEyLsBgRiiatB1DJ9syxkBvdB8qWJH",
  "key17": "5haVseZ8nivxr41FWA7qP1huovH3mFh3kmakEBKZpx3w28TdkeJwo862gwrEH2uYabdAcKz4AxGJTPaMvgnFSwke",
  "key18": "2TKf1iEq2KSPmaUAj4zkLiLWxWyxR4M1PGa9HV9i7xETH7Avzc7itMhiYj1sLe36k18vxeVrEaDsAuCNhY4kcU6R",
  "key19": "34P8ZQk1i1apQJcJS6hAnRhvwb8JWoqrhvxx7UX9gWGg5bMsJabt85KAPaQV1xZAHCcq99Nf6Zwd3Jeeqj3KqocP",
  "key20": "4EHAntrTTNjo33gBP5A1Ci4AArMF6wpuFdgFBECwa6yCfGkShuGG8WG9XfX4PkiopjkrVapqMusY7BqnjgUVPMtd",
  "key21": "hZt6EwFbTYhp1kY7q57MHaf8W7M2vZpXfNmfBRcCHauk3WrryGhCTQJ1hXTmLLxa4dEni87GeC6AXNyh971qGcd",
  "key22": "5BDtfp4ig2j6cFKNaS2NP84TzFYxL1hnbSbUcWtmLtTL9qEMpREKqe8PL5RuBm353yU9diJ9DRrgtPZHrKxzatpz",
  "key23": "5pPum9bRZMjX67TBioAVhTigb1sUmHiWpZyViLYNxN2BXKbUh4HHKaXDKy8x9861CiKNQ1dKxsHTfbNx3VAWnGRJ",
  "key24": "4yXCVb1B7XbK7CS8bcLn9EBDrVPMSr5a5TVj3U8pubMsFi5c1Tj8S4Gk9Ek8aWskH9FgweDTLUiN7hr7Hm4Ciz6j",
  "key25": "5t3fNoQpQq6b3BC5unf836emCuMJ2xadv3fzwDwRyyeKyDJSQ7r8z16d9A2vjy97VpJvux4G9vto4q5ZUphiGbyJ",
  "key26": "4VHVseg8wkxJSaKH4ct8QvE5KweJE5z1tjghFVhAifaiAxZqGSvEzfnV8kfTr7MrzqTgivfYgoWEqeZUcPd8C3jr",
  "key27": "5YRwT5m9HnZsc8NGsRCJp1bpyMPGYRqJ6AdPDFcczbpZBmy768iZH2wvirfCDKGKDYPRatm7jHLotfqSdoCDKXNR",
  "key28": "4xhxYm7XVVTARjozncrZEvAsuBjbx6XmuDC7JjZNUiTY7jzt5KRLT9ukFajnLPoonK235LzinPLB6QhqzjSGmBwD",
  "key29": "3Q74YJnRjLSjeChGCDnzhrFPVwEkE4emKDm7raNPziG42LUM5xnvdYt1TbzQgNdpFaHdewER3oTcjx8qopyGYxwt",
  "key30": "dXPcg7ihCK4y63M2X4T3VmAvT8XSdfg29xCZnRvN76UsTdcVdz5kZCie3ZLWg2o9rifpFAHt1wngJjUY23NjYdU",
  "key31": "3iZaWYQopom9rp1GWdo9rUUgcxPqWvomYnBowXZv1grhwLS7Gsd81JRVd5ZpdDzZbzRptybz1Mjszb1w6QHPTYeA",
  "key32": "4YqrJNaGJwjtZus3F3MPfQNcAMZRFTptfXtMnhs5e47Ks7gYG76pvHtgfifiDaJwyVwPQnR8qqdwme2S6PD9eb42",
  "key33": "uVsmJxFGfZaCM2wGJZ4w6bH2CLURdGRZcHBq7mYXXmWHqBHQvS6gnfLpyPBBgSUbxP6Y4SkHks4zresTWHVaoSH",
  "key34": "4nFUZhgQMMNyQ7fSgpJrfVVLivtj7RugSpkuscmTQU4Cv7yLq6K8BsWDvCkWcYhXKy7Q3BcKUP5XmBK1Z2tAEhx9",
  "key35": "5Lvh5sMEgBmF5YAzW4KbxGYE4hygAZFbiXdnqo3MrrKC11cJaZM8K612NGuE4gnR1Ys31pokpJxBVpkHAuufzytv",
  "key36": "GQ7uYef8pK7eTg6vbY3CRCA3vgpstLTGbCrncJ4KvBEdyq3uHWLompPwtSUWeZCqKmWMDBcEDeRd9iXttnm3XQe",
  "key37": "36qzGTweuG9ntex9ssJwWxAPPN4WGSiLE7wxyQoW8ttjbkRq7zCwvFYSD6mkzp1bCaUSGtX4Y2fDJqKghRaJ584E",
  "key38": "4hrTMdgZ2sJXohKazC7xxLWyLKEvk8cjzZWutj6nCgZ43o8cAHDJeCLmXc6hCrNPp1bMMFVNXMqvJpTqpkj6HmHd",
  "key39": "5FFgYujet8BB2M18F5s4JcgMZkVnAMptyvKfHYwsMcaVdYAmYp2kfFvJ6SJsn7oB4nk77EwH3yum7KHQzB3yqjPj",
  "key40": "3dWDn91EE6NtyexfAqu5L56KgkBhywFrtW5Nj2WfWydPSaQkoYuPbCq6zJ4Ps9Y8DVeWFdNhLnbeA33vGS4phKLA",
  "key41": "3uqCV2tNnWuuAqnVgVmRozYx4NjgRMArEHVBrf8en9RkJkQTsdcw9ZLQJGJWnzwMbqsgWQX5jrXMYAPuSvotQ9ZM",
  "key42": "5AX8wKVjptzqba6dJbVc55ug4UnZza8Yo3fVxfXMcMr3KgQFmxuX4R78jFte2syVX1eUwx3pYarfMSRLhDphsh4L",
  "key43": "613NochWciLYGQ9iZ1ffTDkPbyCsE95sTNSXbTfn7jWeiaUzcH4hgHcB1bGAZQAUWL5DaZRQCDjvDhGXK2XtCM26",
  "key44": "2nMVETVX4fP8q1KuboSBMkHGSpE67g2siaEgP7RRMkYpfeK6XUUzRkW7KkMeyDBbP5ecbExQnAJe6xxqiDifQh4F",
  "key45": "4o9Fh1uzhh2DabrZJJcJEKjKBbAcjZdSYaz5pFcxRjQxJisNMs8j4dUAEuNwxJ6JMWi8tuVMwgMcMxVV2mURGGvk",
  "key46": "5YGt7fF274HfLm1BALwbhML1uT2veNk5CsgMuTNqzD9QhmSh27HJyBojf7C39CAiiVEQY3Pc7iyDzeLicdZSBfRj",
  "key47": "2YG7YjHihJ1Zk8cvYzxoLnnePzp6skobLeVMZmw6sdnNzoKD8pYYk8ZkGnN979wQ5H4N6ktWzcvLSufg4uWxp2MC"
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
