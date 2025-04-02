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
    "UTde5xHGCMr2kvQ7jTsqTaiGThAZAS3C9cJHvRQeCcQVMGFdQcUxkGBWmC4dfrkfy8YSzKAZPEJgJFqPnipcCaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P4AcP8GZw81nwnWPe6cvWSMvT9rfUyg2ufeMfNdDtvn1Lz4YHWV1PrUrqhbW2ifwtbkHk9gt4skox93HB4rSeRC",
  "key1": "3nKf61wGUzkHJtKAmfYfXyJJXqSFa2uB6MjU7fM7uy44vJi9Wh5Wt2Sqs8sLktN2NaeWoBmH1sLKafTt3ye939Ao",
  "key2": "2JLT3Gp2wDxdarK8po4YzvebudMrAvEhNnzg2xbNPjKNYzgbMDmodcoyXDqMVTo7nNH6ZKLzeXBDNheToLTD6esQ",
  "key3": "VdXqMLiPdU38AXTs71KMKjEtXQDWEhqqof6L51Pn6aErbwyvR1xXKs66XrU6QDdY8C6roNdx1yDHwa8QmmVeuMr",
  "key4": "37v6PL5dm9fjn9rH8ifSdV1TiMXh3WuEHeA1vuWNnsReVZEH2ZDrPSqKwqjjBGrfkvwoj23jbGvx6Ndu7mVyhH5d",
  "key5": "3V2U6MBMV9yrbPMVtvxEQHtZg21ArkZ2hhKbtQormrJPQ3ZA7m1Nfj6MZi7RzoUD194mcdTcfRr8Fwpp1v4a9iqe",
  "key6": "32hbW1PEaE9dQKVJp3ZcpD2sCpgn3Wd3mMVxVTE1dMEhP5hvWVG5bTRovq1hUUvKFJ3PF2m7vDrQgaC7AGWBvmk8",
  "key7": "Bix3PAD17Aw5DH2LR87f5kFab2Pjwv5fu1qxmZB66qvdjebytWcy8UgTC9MmnFiLrjVdZLHxHNd4w7t5FXBC3Sf",
  "key8": "49gWyL5SYqLPvNW1UUgdG2JhuXvppkwMMoZtNi9CRFKyENmWWVwG8uZpKBxXTppec7CNrWM6UoSU5NmUME7jXcwu",
  "key9": "2fXbBNMJHpNMYGmqSS4VMTWc8TjgMcJMPQK3RYtujTEG3QnDZr9TFZYSs5QDVgE7bfbBVu5wZek64rvCa3QaguAx",
  "key10": "49d5k1eZarrf9NwAMGT5E8KUawS4jUTXKTQnAt6ZJrbudVwYzsGzG4tZ7XiJWvMyusBCM8fuY7uq3daaY9MfXc7K",
  "key11": "4mzWacpppaHX31dBsjPPA8C2YazmQ8Gy1ojXgBCa3syJt71DHSDmuGAeu1QWrF4NaaapTc4DeC6iUeVcAo2vgT6V",
  "key12": "kuZ1P9JLFwiUb3FCzmCcScTC5WepmTMuJXttYygqC9aBQ2HjjFM4rHA3BEgUW9NtgWhAw4sWRBdz8A5m4S6Y8N1",
  "key13": "4oN2ttPz8dA1HsSiJ9HhVVLsrkUzi8JgVUB81PsNyuvoyDWrfUYArbpjbikybpKxN1wmyGYRZAEGqwGZJmqb1qaU",
  "key14": "33Z79i6HYHdkBsLZXq71XAvgtQPfS4JR7wR2GLDdUHx8s4mj8Pcw9hFNZT3B5kJeN1rgj5qoCWcx5574sDJXyaH7",
  "key15": "vimUGGPsFJdvq1nx647JkehYYLNWHEe74a5hStxH2zW91XkrpfgpSdzeEoYmAHuUWN4ktoUPaoejhbbKQsDfa8M",
  "key16": "5yWU55yCSem5mFwNLQJFLRZiDAZtKQAf2nAiS6jux2RrkTaWQMvzcpBY9ftavuPTXntUzE65FcoSKoWYhVD7scWt",
  "key17": "3c56AJABvMAJurfoPBwqkryoQsTCWcuXdMheEJqAap8tvZYwwm4uVGTJFSPvHoeUovtdSR9LhV6pX38W6WrxZacN",
  "key18": "3XJH57vg2hRL82zzZsniqcYtW14tiXZSVxxSDn7RwhDCWNECvUpkJUD495aSYd7gT3w1EaCusHPmCA4Hz6vvLxFi",
  "key19": "48ngSxKvjyhWBRMbdUYoDMwc8T1cLNrHsJ7zFTDqvJHtEydMRHf8CvmgFfuzHmqjabGjTN43b7wxC9mxpWTWS7vh",
  "key20": "5XeTjXwMoFyCG1pLKoQWpvYt7qoR47ZXVsbzurRsudsqUjh9ENPTDe8YZQvoEr1XF7aYud8tQamVB7h6rzsaLmJM",
  "key21": "5j5jF7BF1KRHS1wns4RhWyh66tN4KAUXfr5W9rXR84h1gy2gJhc7RDjcb6ra9G2TBaazRtRHH39SZXCS3WaoiGgk",
  "key22": "cQMZE1B8fK1o4k8DAqHpJXMwttB3tTeBNFSNFvWX9rn7UymDphwHZuQ9UtjMD7Fu1TUeJ1WTFYnqmxn8z3bTCab",
  "key23": "2bG8hsDcQM3EndutNnZqCx8zpRnN7ophS59NHDN2b67UsamLvTZJpFE6rsaDFSeKDHMp3P7L63pFjutc8UgbBeGV",
  "key24": "2XVyGUo8RufoKAquURvkvXwkqvJactTwC5Fcwq62vtwuDvy3TukwWC62tWNPHaaDHfURonKwsGfLmqQ2sy2kmFvo",
  "key25": "4meT81hy7BqieTP3JT6CeWJPD1cTavwFxTmY7QYdnSWJ3ZxZjDVqAGDyMt7d1tysZ2VnXp8Ah1uouwdY8EbuyhRM",
  "key26": "4kz2ZANbQox7yPboR47naopJLyzPXyyqaaQPquojZ8b59y5PN7rxqLHGqdLyT4VRj63LBf1UkUK7CrMtzc7WbnLc",
  "key27": "3YRyedGXJrNqkLz6SQRp29gro44yzDmFfNnZRMBkUVHRxNj59EJWgrbHffaS7a5CUCezz6SXy5vM7XuY6TACGW4x",
  "key28": "43q7QovpUxMvN9ZtTCqPKnXgzoekJtk986wTjii7JhCxZdJayopojocekgP5MfmVTf8gGD3dqzhXhdXv7K7Yr6Tc",
  "key29": "2m4T2h4LYmupE7sJXfwMCnW4NqsME8PfHPLNYWWDPzYGGu3p1gU1JTkbc6KBooxqB7tu3EUpRgiUrwnNx8BdQwAZ",
  "key30": "4MVe6dHwQ1tKAw5SshVzjX4U7AoKNortxaHeiYTtrphbTNRriY4i3LNyt9zSj4gd3YCMj7amhpfEMD6KNx3NexEt",
  "key31": "5fwwcmZVQppS3UD7N42rTmP5mUGNCECeuMinqFWz5X9kdYnbrSLiomNoGE6zvXHtB9csg9uKuLMFUfcoTsrGBNPK",
  "key32": "z6MwMGLobNNQnRb7N7iYCtJEx1LKD2tVhRavU2Ms7G9J6QywEo3kiPT9p7uvYDqR8hdijnoGReJZnjweqFxgW6t",
  "key33": "4AZxn39WxqawcEmKMVVbQURyQkirvXT86yEaxLwmB4g3AqppzLNosjAKLi1Be5ASejdKsJme2v2vothXNRpLqVw",
  "key34": "2f1oVo8MkSP3LzgTGBjSGsLdUgGZESHBU9kBT7aKSt8MBmBn3K8ESN6boRJFfqS1romVKSQGYjxXfhCdv6XMxhVE",
  "key35": "zo3jit4JmwAGhvryXHFD2PuiGMK4Jt4UBBgtrcMTYcU8bBgnZZTKjPwcf26vnkCACHxJyeNZ2xY9YsVcWggNLKx",
  "key36": "3YXf8HPRjPfsr3SFpRLUf5MBCoBJwFw99u4XV6RbS2iykZNgJQpPxu5hyJZNXBHLggstmRKXXdFFM33HQw5fVAwT",
  "key37": "2Sm62anaJ2h8BHqURwCE6ZJjNTajoxhauZvTf3yHNQkSxQYV9CzLKKyBpuT6g92MDT8ko6SgeJCx9zBjUAJuPomL",
  "key38": "2Hi4vaHpomUCVxZ4aCuVK7jjKx8dGBiYwKZKGSULCPFCsDUfxEvo2gCF2i8yzsfKVpfBEWpZZPRYRjhAgYnWm1oY",
  "key39": "3eeCkcQksHtQFVk3mNRdiTxEQFmL52uNEDzT1Ub9URxr1FwSuWEDGAdtXHEBpUwPnySdDiswbBFjAAafbRp22xHq",
  "key40": "3WUHow3zcXsXSVfQviEVSyubvjFtUcWWFdLge8V6JAXXEKLYUKkFDXpEgKSV4jwcMQTjbyvuC9sVsGCjBah62rSs",
  "key41": "2GVxrDUvtv63i7mfFrDrBsucF51qDeLJwuL45XjUQYr2EnreEnrChRU2gbhfnWj41Nv8H5go2qXDK4H6zMxXmsE1",
  "key42": "4ogHMikBtAc96GryxXT7KuGedGoHB4n6AScMVmybF5nJzLSeBd1FxhWUzLfEUVKtiKbVbEN4LfXcRcTxA13oucf",
  "key43": "2D8NVtGpcWjoLLSgc8fgs8y2iEPYhxitH9XZPEnjyATrYuQyxbcMB4hFiiQJUJx9tSP6iBwbaj4aG8bPjarfV3Ax",
  "key44": "3oiUaDuDQ3zxZuMn5sv5FfSCsqKGuoAaRVk7oa6wtRjcXcqnCtpiuLPgAKKFXDxqUmLYCFkGKcCeGfq9F35ESg8e",
  "key45": "3FyV984mYsHSWcU5wnww7PinPvSbPdqukrYPPK4AnfTujrNV6PYRG9pfFvSm4dyp9yAP1FXiszchMuHZcPRx2eGQ",
  "key46": "oWsoe9WnNwduTwKXuosSTHtbk3fG2VkDTYy4rERnZDHhqe42jyfv1SCML6JFTg6fHBLijzKjQhZYC7c8Hzr4eUL",
  "key47": "2zt2VoXFMSB9bkWR84QUmvVn1kEBojLT53BTMBbPbkyAed2qKdBfJ4TfKaWsyuByPHXcaJpsZiu12NSJsKygWJ7g",
  "key48": "T9NLJvBc9WbFxJFfTqC8j9hKsqx7EDXxqsmsxBN5BAhDh34CPw48UaWVrHeXbpFhqHui68QgTnWXXDRMZmH5tn5",
  "key49": "3L8SXVcxHxkh4cuJ9hbyEVfBnp7cmjVJyEUxbRNARCoJkJAKxgs9MDbpLTuHgbNzq7F4EbvCobkFXwgBdHATH5UN"
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
