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
    "45VM6xcsEUddJhfubganuzurTZsAEmodffcsBj4zf7FA4Yzw8cWWV7B5nTbMQFBMYrS2xJc8rc5ebo8xQCGNBxRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgeSaLCXQVXcPnGrxxR5ak2GRZnZ8ftvVSnjR2miD2czaGAt9qnSzatoHkGfqTkYpEZ64dceP8uvtmFLqdq59jR",
  "key1": "JRmRijP1GGZ9zD7Wx8uGjKcG7MApXq3oBA71JUrioiSzK2jk4aKBV64o53qcyznRpuqPqDdqnWWWKVzQc26b3zp",
  "key2": "48962nq1E7pHgtJ6L67rDXY4rctzDoaLtaG7amimCaKFYiddAsdFGvbjZZzRAhs3TGYJ4ZnwdQxteUuN73rqAnMc",
  "key3": "5FBbD7qzfsL4W8m6r19JCwx8pEz1ZwtVxb19NndH16eSKWk43p9wYjJqo6FMztQzvihGKzk7prKjFCJV69vPNFjn",
  "key4": "sYwz8SqSPXVGRNmhxv1DEiES7GzSB4kE56Exmh53S34B6zZL9mMoGQRfu2mUQVwsAagkSNcY1Zc6w1rHQMcRzdQ",
  "key5": "2w2gxmTJkV5pUtXVevdWZFMuPxMzrRqK6qhgpqhoKPppojvPfP415h8u4n7VyhWHswxcoNjrLzTPeCc1BA22tQZv",
  "key6": "2BPRabckHjkMweFu8nUNFcYsYwkn6nSQjePwpSVuLLdsdNUbkAQe7svBs7pJKSFJKcVMp9UsCLvFamgE8DSkkr9f",
  "key7": "53KSNizzbh8GyTwr6ikfDhQixsvW6NmXdRjnHeFJtQwK5ksyrbYd7SEjrYgfW3NaLBrM476jHkzK74Ed6PhDKPBs",
  "key8": "4ZUwxKLc4jiFci7CLCW66v8uAYNq2KwEYhvJNy9w52qxWJ7ryAWcMxBtuY9PVq8fWSjjzC3gViWVhmyjKidK5hbc",
  "key9": "cM7crbYNVj1WKWZvpuyuFZxSTBNDmZUmRxYSxnF1yR2uRx5Hn8JoPmFQ6MBSPizkYGhVNPMfc8tagrBG7BheZSg",
  "key10": "QBNjHrWh3YVJvARUXVK4MGu3mLJwyhGC84TpneTeFGUEFh1wFDvVLK68J9uEcfUtsPoKabxr81VuvRCnLSH9Sds",
  "key11": "5QCBLroTYjRov57eJKHZoegUaFZo9wpefwukyey4Ji4xSQJWcTkWG2jddmWPT7ak41MecnnH4rk5JmCcSRLJKFUL",
  "key12": "5bpELWiAjhjHfsx5NbU1szy6BKyvuQXBJAneasDFjLZE6JPdK1pUzwqJcZb2oytEENT2JYcmnCgNAAqTCJywp2zH",
  "key13": "u8gqJUheVEJs1dmBLtLHZ7Pqw1FCYLp6rBrGu1nFohkTzJrU4bwzig5mFnPi6m7i2gcasBX812r6kdsrSN18rdA",
  "key14": "2nSKTgSHM6cZc2QADvpfDukhynjYz7MGSi3258AqnpSwvV9SGBmM8uXQ7toX12xxGSFeYpQikNMqeHTMagBdnYe6",
  "key15": "3FDLBkBDmQUG4zCTS4SUL7Doprhawtm3LUabc7tpe4zeFSt5ZkkzFQ4W2sEMfWjjfYhmVXGqjvXK8omQxgiZ7ueo",
  "key16": "3i6wf6HqxBV2KgCQh7iRH1uHzYTq76aKPfiKHjQSXM6uWyeNsNsK2ffA5FnrV8RhU6gGg6egNEYXXxUDZF6HyhBE",
  "key17": "5emzyDs3q15pdwu5fpvzCx8FAoHvR5cMpHsdZBn589LxHKNMfYfQUCX1UdGmzgDfRuky7p1aVVV97kGy5tgYizM6",
  "key18": "5rZQJQh6rZQ4DXZZ86EresvSCxVR2qMgStPiBR1WnKADE3Tqw5bgTTX3eTUrqj8S9fGnVupMccKfwa9GXbEUEYgH",
  "key19": "5Hj4TkE8WTTtEVahrFH4z75M9iHKVLD5NzV84nrBWfQzbpXQgVSoGps8BDrTYjFtQfmZxqR9uGQy1jWY71CiLQ3s",
  "key20": "5QFJnzwA7VjYahyvHqsvmrR4nnuxiRwmNafZBNPjqpKjeornsEkgrmhVFoNckn4NfMB4XxA5CTrK349UGqxYkTAc",
  "key21": "r1nV6Y7QJ9u4xiNWoHKBbZiFyo5hpvx9MYuJSjjyKrMSgN3o1dNEnKHmMnQzbbXuhspquWUL5UXPqZB5Y9FVoBY",
  "key22": "CZaJezdtqwPZGMLG9kcguqBNxhY4uYeHH72ah6tksZpk1j5Y3kvdSbgdVCTmv9aoRXVdx9eXY6Q1RFJJPbhBgDW",
  "key23": "Bu3rBEdVzts6KwdJdEbXnFoqd9vzdTQM6aLYrb7UMvp9WLu4yseg2hzeHK3dRCsMSH1ervsFGZ9z9X7dbWcZ6ik",
  "key24": "4pFFxkvZujocc4uo8P2MaCLX9CRZDDzjDHhZ9kDAKkNvKkTXDNkwGMJctaScEtnBwwvYhFDtZtpYy2Hhreyi4g2f",
  "key25": "55iak2nfSb1zJ1L5FRNwgsZJmTfYC3Pam9tDPR76C2UZpNx6AxrcpxJopRcd5ydPcKyu81ESGRUdvLatsK4F8Vpr",
  "key26": "4EN6ji4ygjHQ7U2HgFgCTjXFojwRDorC34dd5qVZLp6yQLLquw22yQ1BZcepKYyqguCkV7uvmbDE7mjdp9Jiwvnx",
  "key27": "55osYnGC6RHuXhb4KX35S6HwYoW5VPFpmfFaRCQvihFSg7nKwJv8iht1NtsCPyFUQB4P1Bfof1xvcbuGYyFW2MLg",
  "key28": "4ia4R3YJZQnyQoi2XdgSCoXNRSHk2LW79ZVGKWUJV4fxVhvm3HCmFNWZkQNpHtP5DMJERT38CjKALYZKgBrV5fik",
  "key29": "4wXb4L9w358wbjFP2kWo2DPmbTa1dH6ZQZZ5phoVrhAz9ZftU7JZRwD1cC3ZDvNwWh7VcF459wh5CwxKu5YhvSem",
  "key30": "4cbHFN2o3RWtgwz7EA43KUcof939UZjDiC2UayMzq5UcP7hgSRcM2xDqoPtofWcvXXXiTpA52fD9JDoFkB76Cfmp",
  "key31": "4MZmKB6H5j97bTPjjehSVY22Qb62iT74ms3o511yJiYdYRkpHcf1qT67SGa3hVhXFRNEEZDrRMjGznGT5VMv7qYP",
  "key32": "5mnzMyw62jzyXSncTgthuNF9BB8WB8NXrK1ocmi4DwQfe238GEcpbSPFR2agsM4E1zmuSHtyyqM5vE63TdHg6qWF",
  "key33": "sfXpeXs5q4bJHxndV77oEVAj7cnTXqvwP6qpKhhV6ygsyVB3Ggxmod2M3WyGvP1QjBj3Wt6xJFDVGGBa2VZdpUK",
  "key34": "siN3iX79mAWWg4GbjV93P2wWAnpvHZiX5eZiqnwLgtYu4KXtwtKZUEwM5fWQXUCpivTGYDqdEcnfzXU847ZDVDK",
  "key35": "56QSJiaMKPcpR1mruqQ2aPTtZZtmDqGnzLw5b2RgWLbqEFZBD1gHQV1v896jPGbviPHBjdtjXXiLGhf399qHKAG",
  "key36": "4dDcV7ACMJYYRS4PzmUe49r2fyJaccsHeFws9tqrkBGWMCQ68KsuNZtMYDeHSqgy7Nfc4qFvRvszVvixKEYceCLV",
  "key37": "4gVVnmFtmHsSdzStYE5Q5aFGbDVExjZ27MbFWzrZUabjLs44Bh2AnzcZPbkEmczgEX7qLmjChuksMc7C2QjxKPEt",
  "key38": "2Pio1ccoSaazXb8nG9n6mqivVtRsDAEk8qXCFqsaqqjQ7ScKGGBGpbSYP8AWM3H7zU83a63ofxjNqeabiQt68Xp8",
  "key39": "5NcHx2wMdi76TJ1nbDAmHoWkTMokeHBYAY3i9oN35WF1kpzjmu7TotF9y4r9LMf5LtsVutLpooLRY9uywd1PCFSE",
  "key40": "3grGvMwMkXPNmkaGM34AbfSYNvje6u7X8Mi9HSrLay8rjKaHQcF3Kr3ZoM7ri9oMpgKTYQEwL1BnGyxCCiV6bbj5",
  "key41": "3M6R7GbKiuk1jqA4vdZuq3Z3eJiCTqHH3d33NKrLpBd48JR7q2AoiWr5Ay7mFg3QF3bdubKxSN7vHvAfAxjxhWwo",
  "key42": "4u8WLrMbYGtdzrnhqtzKtG6Le5pxdw1V54PR5m3PfLsXYKr42VBPkiwb7VS7F2NoUo8frZkAruYd8kiNjeT6itrN",
  "key43": "4QBz5kv3hNh9jhrqHBDQuySTgQCYBH3aGmW18BhK5D1hjGtwaScHsKz4V7PF5qi49vSP67Fo9Qtvs8xx4DkRsqKe",
  "key44": "4hx9sVQUXpGSQY1tWFYJxSW48TVtyaZbouLS4YtjJ96Qz35ARCNCghFo7pe3bm2X9k7vh28bZ59kXxSTxpwkuB2B",
  "key45": "5ZVDmTnLHeoNryAsgUiaKqRkN8qVLYRTfHij4XAaQRJcVZyhs6EBWa7jmWn2HxBrWaXJ8BVYyqFGLseshFCyvC8K",
  "key46": "5Bap8q8GWWdJp3mDdsz6vYcBzKSN24esK7XjKcg33tueScoZPbPmvmyJGj6UgHtJ2GYoxLzGPYne6JHiVEFCrpio",
  "key47": "qoouXAfvDavFXvX34A2QWTKZ3AJYng96uDmppD7bTpePiGxPbzHiaPVioH6F4KEJ8uA3T4i1wqn8dQsLDA3NtCz"
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
