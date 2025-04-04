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
    "NwLdCnT9u1htSMzP9qfCECD6ymaJsvdFNfNjhGGh8EKXaUfxuBqHyftKLWxExHsPvpX1Efy2Pe1Dha63ZEmVdfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vC4gDpsrtnBoRsLxeDhkGiVSr3pwo54mC4FNwL9x2Kr6FGLxpyg3mymsgQiaCXiaETUHCBDUSwqpoTAsiwL95Hb",
  "key1": "5QGnxfsU2kStBycnsnUXdfzsrxL8HgWew2dW4iKPuz54mFNobw6Dgk6TsjuJEPL4U2n6q2e8GVZ42AvBz9bZJmwt",
  "key2": "3cx7F3ddFQEVLqNpbyZrk4Udr1sMQjGQmcozLFiF57o4Ksd281egrqQjo3KgW6kLS166CrsXrQzupBNq5TJ8ATit",
  "key3": "3HhDD7q3ECJ1e78ZZ38mAVmJqLXsyvkU2zq9j6mnUinbL7wpQL9iEkiGdgDqezZhMsSiYKBDRJZDdTeHVHymhwad",
  "key4": "DLTZRyU6CKuXVi7nQXcTT4aDgwCe9E3WakvWCeJv8mgnceHzpSgWuveoofb7gCXDLzHbV2vJkWNX5ZbV1jaYRnz",
  "key5": "wV7tSswKjWqJ9TgYVtBq5KhUaF51Uv13xfsWKumfDtZErdsqeSqqnxUkH9zfT1tAed8Fpqv3tEbS7PcwqEJcHSC",
  "key6": "2Nc2Ld6zBbu4NX9g7MHp7NVRfT1gPxu677irY3KewK8n8T7fDf4nMG1mQDaWc51BvMYHMGWyYvjvaxNysCtVbyFQ",
  "key7": "5621NnDnZKAnabqZwhAxeqYdkntsNk7S2z6cziamcm7Mwn2YWcFzvvfZeVb6hod9eAtJQnmj6iJxRFzVX8t9GddB",
  "key8": "3RwqhmFaREg9mQim6wewWnSSYwCRAHE9EieMyuQL6fqiphZ9qTgZ89JdK5F6AKKjH2u6gyc9pZYxGSmyBvkZcFTu",
  "key9": "3tzLgi579eMgt8N3oVcqE5BZ5jDoXC5M46jAZHwUacmD5VkVdrE5qeH4xmMP6XfECAp5wb7nmXKSg3wDCBHf8zSx",
  "key10": "5hqzpGWQdFJV2qXt3sfyp7X2aRSfGFuYG6pHh6uEZDa6muc82tdBdbQEVjwCLafzTuf86tR2kWwQ5jFrV2uE7rZ4",
  "key11": "2seAVMCSy3KQgwTkF8NC16hVKpoVhBtNgkSRWLUhef7cjF5gL9bHs4F3FVe6WnJJVMvwDmPjbxb9XgFdUqELQ5fv",
  "key12": "2UCMNVsvf4i6Z4xMDdYYM4zPpnttBcCM1YniyenGqHxHPEBPQuEq4kqUjJceAYeqPH5BiM9abFKQHcXXKqcR59CQ",
  "key13": "5CmNRJNapS9k2aPB6AELmHpznbsWjUniAzJXr7UzsV8QMJmcQ3vAzELLQFrs2r5tR1WGmMXnM8Psp9s5g3biu3eZ",
  "key14": "2XwwgvpCQ1FJnrjqoHJy2ZN3M3e7MV5KJR3wU4LS3V1Qh92kuYNfjMhByeefGkB2Q6VfMtpyojWwm5zkLd2Em1jF",
  "key15": "5EMejYUM6aKY64AE4kYDqiU6qedxZEpiqyUWrBzkU8AJeWLgjew12wBDyQWmy792rS6gWKbUmCkdMbjVBB73ApDm",
  "key16": "5N9NoP4dvmVt4ZBU1pvGVLmnj8MGEtGzjLTFGp3WfC5yVPidyDbT75NnfaWRM2oj2c9fostRpLPaCGVw3gVKWvFJ",
  "key17": "31X5J93hBtdzNVk1uZeDxVespaBWkDy6JACNpquaYii3HZ2UTUaVBDZDtTDk2SeDrRnhVSvgaXc7qoXbKRwasgmo",
  "key18": "5ifDbZJCb4XsDpjhD2fD23qeaMGwsibX1tT563WAfnBLB6LgUFAES92CxRezq1zeZDNTAitVvVYaCAnmXUZ7upep",
  "key19": "3PEJZGGYg2TXnDNyuZXSsLgVyo2rKLM7sWhwbC6iETaE8vDi9wJJrCnBve4eb9MZ5b3TS1Sc55LZfp6e5NTyGmxj",
  "key20": "45oGDQE9UK7yGBSy7cgM94m3BBvNKJ77f4pZ3S4M9vfCfG64LrAK36r4hGdQJnoJgzorBa7pzbdhKFUh36yQswzU",
  "key21": "4CHQMGqZzTDHby1sa4BHMSdN6Yzu1CmL7ziL1NAp1RdH2ihtwvdcJtJ8wncTZmLEytjdvdeR1hzSYWZmvbF7nYJ6",
  "key22": "ZR4LwYhUanGxCxKVr3fCdCTMx4ZmPdjSZVFtXiQFsfsrWJLB8bq2iJF3GLNCQNoR2UhfdeSJiggWgJXcWBB9U5L",
  "key23": "2hVA5riAPSPwzyDSq5BNdHdJgJAQzh8yx9GZVZwyDK5bfD65GhZUWbLHrsz88v8CDW5UtBPdzSMpof5cqUrtwx3C",
  "key24": "5oL1HgaeXspVrcq1FSW9g4vnKUmxSkvqufTLutAA8gKysnAdThsZTe6QpUzTY4d5rQfMmp32vzG4MyuMr26fm8pX",
  "key25": "5iy7rkDUWGDzdCfcowcec5HDrjocVQW4U8eRjdED6yZQwqzPGzUq3DEhfnGiXUNBmjfrr2eqWbJZFR2rrkJTSFTH",
  "key26": "LsUtMBokPo9n7BGCXZe7KuaVnqkc9b6GpLZcg21DTFTyppRaoeVi3Bj2voLdEwan1RYPWW52CizGVZcsThEqiWy",
  "key27": "4wkvtaBf8yPGYB7B8xJAmAN53phNJitHtNGhfjsKGYyHzgWhMJPEQbgkTZDMCQaErUuWnzWFT57GqtkfcNcDAmJr",
  "key28": "2nCopu7QyQDCWGjgGDz9kryh1T2ogNh6eksH9oKqhcXyR9ghTt6UFwfXnxNKcdKnshXiSGrnb3Edvs1y2Sxs558t",
  "key29": "SwBAyfLugmJqGJ7hgCp5Ys1a3XCaxxdrzRouNrAPVA8m8PX7YRHjtMFqteer4WmUHchYZSU5VscjsGViGfwUKye",
  "key30": "4wcpWeKTQYmFw4Ty3ix45CCbu1FcLges3PiSVkZysaJDDHNh7UaKvs17qxHhSpH3hovXj5uhqKnfAuRyDPTqCHPv",
  "key31": "8gzMR6aTv9NjfYPuCLWzrx42KuKQFYWU8xACPqQDUVcjiKT5PDtEjDbAVAvDj2dBBpLwj4ABG22PiuAZuy5kqQw",
  "key32": "4H7FPLJwTXBNbKMAgEDoiLiGHhnDCzJZNZ76SZ5nvNYnifXjuA8ujDaT74CRqfsWjVrKYoWjDDSBeuEWeWug8xAz",
  "key33": "2DNm2kNfLgYkuxKAseB5zEzz92iUjYSw6QnrjEKa16CKDGC3Nm7r2xtuGoqexHGA1U2ysGbaccgfTR6MA1pJRxXT",
  "key34": "2fy5oCzd9x8NZMCfRUjHGAMTfu1XdyzynkyK3yC75o1FpXsggbTXT8L2GbvDFynQDdpg3PV6TKvq9vMMJvnmigkM",
  "key35": "YtEjw9npPV5CF7q4y1pwqinoPNjAMj98E2Hha5J7uGuQcv7JJ926aN3XkCEvNV4p6dbewwFRfcki2VHUioMUD2S",
  "key36": "1aGAhui9MC7usA4Mx5zg4VYTDrYfPtgv3gkXSBEgnyYxQGS2tmqyGGojXDSceYw3thxd7iRXFukita69DPyzn6k",
  "key37": "5ACHAsgiyRszyHrhFMXd1t9zytpMXWxoP6CaBHN1mzdAfonnLNtKQjQPogh5CBzNptbYDULJa9boDASQGiAHmeJX",
  "key38": "5noR9fhMiSb4PQYXF1KFsrTD8xEhNjxnDQRruKUmibe1xWYq8jBttZ8h6D25PznE2Tmti8FDFuJKJubNsoXg5zwB",
  "key39": "3nexvgeBHUiWs8PveViao21uhVRmBdv68sMKmwejf9qLuzXy2nF8mnNFE6LDxKBNb4guE4xwVHKQ84nJgK3yoxte",
  "key40": "4WjmqAc3VhraHBajUrgmHXRi17vBU2qXXZNo292Bnn2oc1LQu8e54yPQre98Swbprujx2Rb6KnjcGhe4WHJsZycy",
  "key41": "PCTpVfZAqULS1T65RRLLwoj9nQrdQ6HEGSfJUrPzrkLwba4P7wXe4zcuoAc6HQbcme3Ahx66Yi2QtCovQPuog3Y",
  "key42": "363XNAzYFxG7SRYPMDTT2Dz6Rm33FRdiX78yfdBkBCQwLNqBSssd32h4t3Rv2i3wsSUsM9sNY56KsUV4y3ZQ6Sfo",
  "key43": "3hbcb6hceb9AKKGydaYidwq1hdhnQ3FZgpfTCNp6LwrmbTiNK31ckyk6MxuGAPxW3459oLx9LMKXeTua9ue1ThYA",
  "key44": "27Wrg6MfhV7YgishXXKGyhSZiYSc1Lipaq7H6vh83TYoxUKRhNjWgfquBBgmkwZfT65edoJfdWnLYSh6QFjBzpZT",
  "key45": "3qtGbU5MmiyftYyMANSxTj3GyeVpNPtazKxSzUExM7cXrtaYy358QmsMctBtg9LxStV6q2qWeApJcPVqgYHwShk4"
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
