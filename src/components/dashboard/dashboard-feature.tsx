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
    "2SMfWiwuP6VbbeVbjBxQmrdqvehZQSm2feJkPdN14GbDmfkaBBrwdWaVMxbVASq9SMtRbZA3ShKwiR8tKyj7U8iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBfqSbr4Zk2RYEY2gVev4w1dkJVWhL9hGMQB5Jtmzw5AxLVJxiZgp3bPximSHM4MNXTrzbAXPVNFzfBGoaiiAe",
  "key1": "g91CuhyQoW7Z7nNkSMaAroDVdgZFvmN1gw57DuQ9ZeXqcW63NaM5UQdkVhcFP4agu2UyvTtnbjhBJbPpYMSLAWC",
  "key2": "4LQXWJNBQvV4V3tDGoSzjMB6CYTWQc9FsSbd33U38x9CWKTUu5Qdges3KUTfoqtprkSiimRSERRWib7aDjwfH44J",
  "key3": "63EHrChbfsPxEq2ZoDKp3etQf33YpyaGydwNAUZRqR3FTX3LUb413fQEujf7yJU2UxY2ZLEEB4TthfRdsCknVZyi",
  "key4": "46uno5ZBoMcqnXeZ8cD5eK7GRQ1KUDMEQtdocs3FximxuYaxFRLEonSxd5DCXULpqb2isCGCwHop2Jfx8cC4Jodd",
  "key5": "57r1y7gAiWuZdf2jG2ELVS98moVcYaZ3w6PjNMXo2ihpqqYDF63U44M4nd7tZYw6Fxav3RJ8zpdXEqGkupokTkAu",
  "key6": "9p6q7gZaV8nER6vaMyVu2JzyBsFfm1m4U3ZcaEd1mNNmjGssvdUEF5EBuhBwRTHgwPBgaVfWtRaUiutWKCnnBDk",
  "key7": "5KLKWNswmRNWmfqsSUGABpEfbVFMev262zTaXGffkHSN1Z6h9Q5nzURkTaiz3abksNo51Q3KWQyH4LGRDhG6mx3M",
  "key8": "4YaGjRVhsCawx6AiGQwTZj1jWtHd3g4VyGnj9NqMA41mRKXD7qjamBmd7g6kNB4ZJdZwcURArWQPkMuU6BYtChxa",
  "key9": "26sWJddG5Bi2GBTturdSSHz4fATqQcBwqpJ7veeTF3bZ2xUcfg13W6jQ66ZuG8UZM5JraZcyQcz58ngtJ7mcF2Wy",
  "key10": "WEdAoVGFfBZhdH61bjn5JwcmuM9iKZPAAzU2R7kUXRFiG2v8NNmi7gFR9gS2bWLWtxbHwDWoDATGvY5HiyS8Mgn",
  "key11": "36ada4RzmFCmDyzftNWSmgCLvfwE2acVkVt76U28VuayQyRcqMa18wphNsCLSYtNPpks59NoM3g5Kh49gyUNh3RY",
  "key12": "3Mz9Spzrt4jhU3xVietKehcVoMqGha12iT2auPxeLmveo85zEKkJVjE6KENv2NVp5yCNiSumgRbRK2twJPHmcSSU",
  "key13": "2pbSt77Mx2WoezForpMHccYqZpuDwXmfyESfimxKxYpBa6Pu8ZZhniWFhWJU1hHa23QFfE6JcMUJDcbFVCGJ855K",
  "key14": "5V3NtHogz7P2pumJG2PkwcCPvHJMjfcR8GF16epUdK5yK8AedjgPcDRHHW9hqniEJDkgWi9Du3fHdujyCi9JsnYV",
  "key15": "XEWzwV57CwU827ZuWghEjFWBcaJjhmpfRZdeecj4GSA31ZtesNXfMM1eCX7iNqtULHpV6qJtnh9zmv43apAtUud",
  "key16": "3gRiAVALMduN6HZ3DbYuLDnbJrif1PEDQPyEQq1v4r3tyYzxvxn5tnwiLkAkuaxUSaSa4qMhC5jN9PfoQGcYgcAa",
  "key17": "5ZVn5K2wMgBXqdGWoZgNKAjkXjBqyufueUW8jYXwiDoWr2RSxyTzHz9p85tiQMiXUx5eDynTMA9ZbzuP9bTqyMWB",
  "key18": "88QHcHo4TX2f9UkzSghAKFTGhyDxVnW4uCG3KjVEgXa7SGVwzSG35CpeNsjtsZ7ZwKargssZxTq9vHB2vuPpV7D",
  "key19": "44wXk1ddfXnHcQjNkWaw531b9Xea7Zq5DFzucfZ7CHjzptam3uPYm33hbKFwgjRiJNHUMxuEjwkWbRmjLNez4o4p",
  "key20": "5VCKqYxPoyEvrtNuY8d5E4xUMDi1PpbfJHkTVdMF2cCTeikejLiWCu5V39bTUb9fL1siF5i8vDuJ9Bffk89Xyj32",
  "key21": "26sGZtX6RQ18fFF3Uafmcx5W7wjY7cbUevH66tyDWvYutPHijU6dgUA6PFu3GfZ8TDaAUTpRkw4ah3V18h9i6oLq",
  "key22": "MCh7uPgysz1GoXBYh65gcTZJwZacenh61aRbNAZoQp72CoZTUXbRyGdUMykYrSaANgMY6W7PPDowKcdDTxrnSTc",
  "key23": "5gzkBnayhhP5iiQQ5RHaYfZrEDjAJi5FZt3hyn2cLp9bVBK2LcmfcCD9AXM43stKnEctLZcGwaqtRCidbPhd3RKx",
  "key24": "5LdWvTi5Vh3TqbRzajttdtyGRp28iaJm8yVouamDNDc7k9Rq9hKPsMiaJZo9sF9aY6zgp4Ud8XEeXJLyhJwXsGgh",
  "key25": "3DvpN7mct4FBTp35ivHmmtqBzqYUCJbnPwCpqKJBR29tzk2EThbYSpPxytWcAzrAwDaqJ9EPL2idhHGbrXVfUwtu",
  "key26": "31X9nBPFoVvtJ7oXQBNRRurXZJLoWhprCCzKCvq2rxJrVEgn2wDQy1KE6JnibezQjCS1pHRiEegTpKGQm1QHWZU7",
  "key27": "2RidSGrMj1tY5hduNzQ6r21MQgZhnz7BzhwtmsgxHZja3huApftR5rs5oRFe5F2uuvAmpHsVvZ6Ue8aiKCdRtN9J",
  "key28": "CErHpPLdySGSXGNavjfEAhUDJKGY5hBA4cqowFrXuPuZEKk58irNNYq9wGRnZx7cTy3mVbqLG4EqLfp2Vu2Cz6E",
  "key29": "3TidjEw4UoV7JrAHG3doJJGXQpzd2g5xQGSdMcjN4Y4G4z9ksrYcGDZKUTNUN7yCBoVNAbir4vde5fedvJjd3Uik",
  "key30": "4J5uVYzz4Mg2gYjRztG6DYodZJWUBU2UaZpcBJQWrJR8LxWJRYFbyU7m4BGTuTij4KuHpsKVDRswj2xS4d6yiGFa",
  "key31": "5dFzSy5UcSV42gbmHGsqp1BALRm1kGMmpZ12cZZRQyDZY1VrpQwzAgcXLyKN2DGZHU2aqQ2CJqMfezMZkWi6oREd",
  "key32": "4mfRArWdR3mQK42krwKEhpWftLaADBnSAnSDv49gJbvcBP7xRpcUWjvbn3Z3JkMARPLGMtdAmza9fh4FN5qqQgfB",
  "key33": "ApS5skVogVRpgjJkV1c7tJm74y5oJY1n1P2PNk36Ano1rGXFRmAULtjEptfqqyxESzqFkRoy5wz6hodmhA8pUHD",
  "key34": "5JzAsMziZpRhVYhkb5b6WDF3Lyc5zzkFmmByJLW7GmUt1QfsQPtBRU8DnnA6ARg3pQREXNXZA2WkW3KdS3cz8D1U",
  "key35": "4BDp7eCrqc4KzXro972cVQks7VBxGnqn67GSP1x82gYpcqbfZdRtsqqRSkKzCqGS1D9F6wxuCTrvY9bw6B2RzaTC",
  "key36": "3DpSj7b4qkBFkgnpyrDS3wae9X84W66gjhbi9TiZF7yTpLR7Cn2M4LtVjD8oBCfXoxUKQ14Tk1KZMJsPzEP2F3Kc",
  "key37": "rKzH8tYPsg5umAxCfXs9NZUXmoBo4MHXDAa29ZM3TNDxVf6LgxWnWT47PQrbgDAZLunDfrjVkZpktxvWiuCyFj2",
  "key38": "4Eq68Z6gkySeGLhczirhPV3iUvHh7NHpsyLQbCBHe68xkVZdmQSE1H8CKQHYqCGEtYqdWC4JNgooj3a5dAdkkBH2",
  "key39": "55YapfJqMecABaVMYoNzwgJJQpKjDkNgBLFUgekhKvp3dt95ac1SxD9rz34fY24XLPcGA2tBozUojerWWFsy7Vrr",
  "key40": "34UUNLQoiZQBT6YTfr3AzGd88Jw1BqRd9hXiJJ4gS6DQjGk45UxF1DqVz9iCHAvejWDFrN6P7EWmXMtC42a8YCkF",
  "key41": "shm1FZPcY9K4csC8J3vj2hFLdXsHYizxjHB35iZ4U4vi1j9C3h1KjEz3a97Vhv1PCGfMVa8sSrdBc6Yw31MWZbw",
  "key42": "HpT5XRLmwHuc7tabcbiQJNmAfwvpgkXkMLVDgHhUCmQLyoA97vZ6R6Nq53jUVC5hNuATx8wMYzwgRHirFZgh1eY",
  "key43": "3HU7wuY2tjezLJm2jDQiPjNPJG2KJ868MmMwbCZdkJcA9kps1XcufWEmCVNo9UsNMxo7cvcxtqDySL1J7ofH2Ws3",
  "key44": "25wQM68kU14vDpVURT6QfCNvUytwEPU3Pm3m22ZoKLVkaZopyjir4783DZCctfoXTFHkaRddNfdksjyYGkTAVKfY",
  "key45": "5Kczgongfn6XQCz4xzhFBrv7hXjLMHdTsJgHckEZu1LuwZDSMx9cRiPHuMfsw2amRfQfmTUfk1GoStPBDFVuLyhk",
  "key46": "5nckZ5qh1dmKLxvxuExPtufgjHuu5CHvccaYsJciB57WaEXYYNrxMGpEj1GuSVn1B63LeFADjMN2yFztAYuWstdH"
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
