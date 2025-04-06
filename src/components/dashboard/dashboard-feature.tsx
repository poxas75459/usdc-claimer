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
    "2Mo3pjc5yaUayyJ9XKS6iAnyGnZ8YMEqvuMzaU6KHvd7DzLHguVhkksqHU5FtPSU3VLQGLcfmmTZHKcGrgmQvYEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LP3eARxQUXRgspTfuR1SCutaaA4Q8BthZ49A1HKdWdpiPs64cXQhot63iu78Pnt5WErwvrHiM1QiqWq3eseWk1",
  "key1": "4Gg4MQVgwT4weDKbmpG8tcyACdAmehnjEwqdEwkP6BMzXK2pkjUWwkNm9mv1hu4zqZuB8nmvfNjCRpyxPJSskTUp",
  "key2": "RmXYxkN2LE9geFed4z9TY179ktpnyUxhCAa9k36XeEy862QZnPND9Sg5extYBPSMwgmwA1kruBbtwxXiTAtUF8D",
  "key3": "2twdH4e6fq2ngT6ybru4d5EciUURk2M85CcLvQk9PmcGFLNNE4Vv68E8LriNp7bNmorjvnWVkiaf6WDFM4SZeNgY",
  "key4": "4JzttTQXfvbyPk5x4fbDATmFF7iJTNusaSoqoitV71JSpK2zuwb83vW54nZRepeuUP6xE5NyXyyjmvGZ4CrLgXgK",
  "key5": "2ffsJXL57rUJ5zqNWspDz1KszdZhPFXZFx8LFrZh87Vm2G59PR9e2g5bQ4KY4tRxdcXTyjt11mmBQCHD39bi8fKL",
  "key6": "3gdFq5x184bLK2dpMjDKnDFJB1VwZE9WbULMCdYGFzP58X6pvDwx7HhzkxJyhaGXHa3TDBkSUxcNdes5VvRPGuoA",
  "key7": "5h2TkNqSpatVHTiwoWxABiiEFEpHja2X2XdAohR4Dzk8YkLP58YWEBuYWEKG7Eh3CYJwsaDBDBjYc5iacPeGDJWF",
  "key8": "2sVWLRyabJsr8aPTxD86bmJbCSFPPuX37KUgRTgTS8Xa5E2LwrEbzP2CW8xb1cLdDzV4RaJYioZzYR5RF3cGXuvq",
  "key9": "2VLMMxQVevQt6GXwa8HoLNuAUdwnNTaDgeNNTGgi2JEykVw7krCDCassYineC5bn5Nsz8FHYQkc1bwjjHgYsxnfo",
  "key10": "5Q54JXXCSYLC7F9M1u66qdEY91qPht3eQe7kXm8ajbFbodsr1dxXtSHZShHKQY1q1znx8sBJa4puBANRK3dCjTdy",
  "key11": "5Naah73SnHRUEhv73n6RGqB8bXA5Z91DsAomAs6KCC6RAKrTyMQE6MzyxxXtUwyWeSu7WYBs8j5xkwSv4qfmzHEC",
  "key12": "4mTW9eqAEhg4eBbC217rsLyegZ8BG5sXjtKbghtSZgZ58AuBMyn8oWJed96rkynZBgBJB6EKLL26kdKcXmfBAsi",
  "key13": "opA1dpwu82YjoQp2AFXnzHvR1zMuGS5K9p9T7MWu4s5hjoBQqitda9B7NhFyzJ6ruKv7gvexQ3pKV5Z9YitY2Dx",
  "key14": "5VD1mZhSxK2RznXtWm8bRjp9XZ8TZzTDGLHhen46eVvoC2UAGkLvGTySK6pnEL31w8udBB2PtcqhHKLJryyFsVj6",
  "key15": "4c2WSRPEhuPhYZP2Q3WKgtupTcAHXbv44MGfHsmdk2REszwCkVvSxaRg7ZmeiwD2obzwRwn3sDWB4nGzLfZN2WJR",
  "key16": "46G3T3GBmJBA3mdV7pc2T4rbaZcP2koeoZe7i9SmSoVDfR9kqJ3DPqtX8jwMVSu7aAJHWPLaDHJycSiFPKdSwvvn",
  "key17": "timFXkbfkBxyVTuesWSm5z85kWNgFYCx9qqdhqSjFZKQ3qvzZ6tM3gT6HQnUuSrEo6kmx3yxiayaCGWRE7Gmpr5",
  "key18": "3cv5Ptw3j2D2ApvEUvJShpfZqv7nkoW7M8FB4HEnmRcW17PjduS2G3NkCm3pZEr9iD8FEn8rE8BDtyszxvaVWiKo",
  "key19": "2A3wHBV2FqmxXSXbYJXPaVHPC7JVibBAEJDVodjwepLKoEmNEX2pUNAAv68nKyRPFZrWQRe41HDv1iF3w37bz2ua",
  "key20": "2iTqSqh6F26AZnghAKvcbyraVmshNLQ29GaBmAiitxMj2gVxEtjyVuvqs3saXrN3CRr7nCit2SH88wgaWA7FExcD",
  "key21": "619GYgo15qAn67nnSrpYjMQY3qq7ZFxkXpA9M8dNAxqYPNvyYa1pNmAYZJDTX11V6UXXsjhteHWySsRvnwVmNERW",
  "key22": "4DbN1GLFcRE1HbXpUq1rRBKMAcMturvAmYTerskvhdTGwT4DN7UyfTPgUGVkiyaCAf7orToEpGN3Xn5Lo7C8v3sL",
  "key23": "4aZTzAmhMDhBKzbpa5fK8Dt6YfsbGwi3hbV4wcb9XyxdXLftEo85J4D2dbkw5S6DyAUpbPAYrN4YDEnP33RP3NqN",
  "key24": "21C2zij2i3rJPk59TT7htTt9oRWZK43wemvAK3mb43aeiHrFf9CFkrcq6943JgUC8yDE2zkJGEQTka5cU9WQWF8w",
  "key25": "5ZuRnQd3QhX86m6Z3ZSRBZFUu2SfRFhkPoqAHzo2bbQN36zWXMBYHVjABUtN5bdynKDT6RzB56cbgvyNy4vQ8115",
  "key26": "a4okfEsyHtcoZ5Qy7TqtBVonxWFnE1THZYBQJimwnR5qjm5JsnUcvcGFwGtum7DGDb3trkMK1H8BzJNNkXZVYb1",
  "key27": "2JZm8Jfof8hkStMsGPcrwuy4qtwYNbL13JJYA71bFDR6hhi5c5esjY4ZQqresoxMMW1s2NY2SVVDLG47EaZ8cyDC",
  "key28": "4MZdsVKrj26SB8aHeBPcSZdrovZ3obFiepLcEbJx2st98Raub17TuxoNskns43D2ELbmMLKZw5Joo35YJncxxnNz",
  "key29": "MPUpHiswa7GRoWGxvsDg6WyDph8bBptWqU34Q2JCaVzm6c7TQMeWxujYa9zxMU8MeXkorpTow6FE6jjNbmpYvzc",
  "key30": "x5UGnSVkGKMLzn4yqDrRcrxzph23D9mAtEm33Lp5vyWeDgjg4MATFYiibRRk9PSZDn2iMcM8YhubdxKWYsJuEKR",
  "key31": "a7tXSsSPosrD6AdTA4BfKSCCCen9YdfTjpvia5J2ppqMa5y1ecnWqjiVLAyPbnxihpY7MATN1J5JdtXkAy8rgGf",
  "key32": "63HYKDW5Cu1zzuewPTSnAZhHJDbsHPTPTt2pUibGtQkjhHQbhf3a5p7ScoLMdi7g9XbQVuKTQwmCaiNiuEVDQqb5",
  "key33": "YzYCzmGGd5QrUAYzsEbVSAkDJvcQMcrhqDTi9ne2o87uuZtuAuS3gcKFjuz85iYbDojXmmFZ26aoYxF2YStvtb7",
  "key34": "3vRAAk6PHMg6qGdMCmQPV1FuxMBHhnoXN1q5WZxgyNHoZ9KAjrLpkm7jY6nMXQWutFZCnRMa7vGyYeZ4Q6qBNuBX",
  "key35": "u4tXmZ82ERPmqN99J4p6cxXfr4C1XR4ry4kBJV9q7WjgGHY1CH7HfEetxp3SrjdwEJP6sLkJMnGTXXw17fbFACu",
  "key36": "fZX6a2PMeWJ1G5DcunH1euprzWPpHdAEMYtZdXfuGRwF9bc3re1FWEHg9tPjgR6HTGKuoUkzzrGFGKQDBpwSJEK",
  "key37": "5ph1UGzw2PDhrd7N8cNkSbxvMRa4SKfQ2YqJV9zbdiDVdbJVvDWDQPcuaGisyQADSV3kKeZK9BVuAtVXSJgpSsdP",
  "key38": "3CYHCCkoBsr49i9CTywSFbgFh8tvhq2K1Ft5QRYoRwyShxpygWQu8pf8dieTJpNabrSvNx31iuzHYPb14NQVNxUV",
  "key39": "SxcVa11gu7yFwU37Fx6a5k71Q6WeyBwvqPxjKV8S1x4DJQzTJz3Sc1egciwVbxYdjeT2zGTHHxV8SeMh7bnS3zu",
  "key40": "3FXWVntmE7pTvduN25u2o3txrck1NFyu5AsHXZom37WJJvgpHcc8Yx8Yo5hb6PGopkhrAakN5gAh77THHwGktn2h",
  "key41": "3JMCf3GtbKFwZERMVCR8j2F7jEuEvd4zaUXLY9er7fHUDnUc4ZgH2ZPPYKuSpmMzkAn2psJQ6UuAmMZP1gZMfGDf",
  "key42": "6YJqfK7kgATAh1tTzfc4PvFxYzGCRNGvRrXpWY66o7MWfsAo9P8tfyPEoZByued2GQeLV8HBtQgSPf3aP7r8uDF",
  "key43": "4ASTzrwZMezXWHZFqsC8mTeU48AmHJC6qWC2xuF8KEJ4QZuymzE9ctpmviwRQ9KqyJpH5oqiaA6ZBDZYqu64CKtu",
  "key44": "uagPjqJF4dtJBe4pjKrrY11iy8RcQ3jRTEkDi5sdqGevWvmZWrEgXUH5AucxaFyuzyZGSWYqDgsKSgwwrhZkQ5n",
  "key45": "65q8bDR1RwvPr39PDUQ8B8YQsSyQ37e2rEBkshBXFa6UH9pihC3XbCccWpGhdJYAwnyuwMT23wqjavJtrk7tyEdM",
  "key46": "UXio3GiDF85d8jbSdBt2UhU53GQ6SJP5qU8Fiof2pEHmK8A24LdJNz8JfnhhzWRwSubEcEXK7M4GnzZDPrk6bD7"
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
