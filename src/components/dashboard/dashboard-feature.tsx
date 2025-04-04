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
    "5xFLbCHHbakkNqs6zz1Q793Hb4fXYAksosn28Ce84ASYuhkfgqcAQmjSua14nsgRkXJ4xB4eeicvTNtAcNBwFqo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F2Nzyz2knozU92yhDAF4gKoDeHezLvJNtDjHKhS1sJW1fzDZzbRhURa6XQw1Ra5NwNzQh5ggsVwnMGam84YCRGF",
  "key1": "5u2RRHEuBz2cxMzvz426UegGhvVHVjDD17UBqafPARfXAPAXA9NduejhSd75BvPRU1k8vbCUN7BPM9gnvA46PuU",
  "key2": "2EUFXRgzHNxTVB9Tqhcu57JFSuSot6bKKPwzZx2ehtKR1vcvDHTDCqFH6Tv2h9BjUDKPDFbJrKo3qQXAbfDrenpp",
  "key3": "449Y4uApBYR9ke4Z5maJBwTdpiPZL4597W6WtzRTDS2QE6XSBC6PqA1Sfx3GsfYT2ZsdJHkZnsZLrKpXtZ7raxYe",
  "key4": "2fFkZcHVSjmC7P8rRxpXgTgVyv3hZpFyVMcDXHBDz3xyZ4quneqLgWYe3YpjAhX6zMs3dMhRHYcmFdZbSuKU7aGt",
  "key5": "5nMJ5fjeXMq5MF4WZQUTYtcpKdCzo5bnikDRARgXUzz1iTbBUqPJHp3d6Q2A6Ew7ubMYKbzANpSYDczRWtmYhoHw",
  "key6": "3S9TP5LmchXxjJGRLbzAwgSr5P3HAN3rkBjSyye33pXobBeqtbydXpx8h21F3bNcnEFxF6Zx92roVdKH6TFerntR",
  "key7": "5aQyQ6G1WP8ZuceYbdHSKqLvgnkiF5HAvmzN94AYEk31p5fXHPVFuEoWAgBK7qy6xq2wiZ17YLY98sHx7EpbDGza",
  "key8": "5mQtu98ttXGRUtajNx9Leq35Zc5pE5RfqYoqJeyHEm6PK1HUcPBnAoeJ5MXUSFGFrS3XFTVKswF75ur8cyXhkYuj",
  "key9": "ZnF3i1YPqEDeoBQjxoKzijF7KWDZmg5tAU6Tmn8MZwyy7PC7rwGcDdFzf4zALPfwYsfrLVM2hJbWciYq2VVvZRU",
  "key10": "GC5FSV6at5PmkZ3MfLq96tZ432nfMwQJMUCcQ93EB1rTybq5p5vq5HbxriE3RyKr1R3nunB4oNecu1MzLKaFCqe",
  "key11": "5p57Y4VkXowFnKMq6RhoewiQ1RwNMLvFGEP6ybQ7k1UPVpt44nFzxtoyM6sxp18Nu9qCiYXQFoNqNxLnv2vPRvqb",
  "key12": "b3ymz4aYsLC1wyJ9Xa93vsmgPVcNSqSu83GaW7CjvdtDnsRA3tJYHqgobA99dBs3hNtUThijxmj9YNWdsN9eR3R",
  "key13": "4nDmqS1jkU2pxNvXqx3tQXU8uWJbNRzDT7zRrzNUFoZ17RRWKJ7PHyYaeK7LCwH31FkPhWVW7eYQFB2PNYnfu5DR",
  "key14": "5ayYuiBGCFUyaQ6ANSeja52cyhKcMPhJrpGtZYoZAMHQCQD1M3ac8HbxdYS3sC9SZirom72JY8PXNS5ueLWxpyQ5",
  "key15": "4CtmcpmPxBuJHSSVLjYW2HzdDnr9eNYBTpttotAR53RdToyPFr2ot1j7yuP31pZK2eW8CGaVh3H4xpyhgAJQJmDY",
  "key16": "2dLciyoMK5r9imzCUv4EvA6AYGm59qUygUyCe1WFbyndVtTMF6SW1Frb5cjF8k9cw2Di93yHe1GBXnYrZE5Kmc8C",
  "key17": "2K25wEtBcnUqP123XbUewG9uAjKFBDBRTZDQBHRiYgBaqnWwKoEMqWQphgD6SmznkLckofJsRfthQLvgAu27khku",
  "key18": "wsfgwAUReHjB196WdBFd7RzCjehzgrBZPmRw2bYTEBVL7YWro5jpBnHHEzbqR9CwzsYd8GhTz2gpAM7iBkvk7RK",
  "key19": "3GvQXko7LSxtNyhZJNDnovz4bJx22TgxjRgtqvVGYrcqGMxK2cspdbpz9mEXB5yoV1QoqcJ6iZvQP746H35mYCcx",
  "key20": "5mFGQhKZqwTU91FY63aGXKopNQNPp191QNrM9ef89AQ4EtFuLwrhJ9wrEZe5EEnZPUHZigZ3UiJM9iqke52CViBC",
  "key21": "5Qe6SjjtN1xGijGpuoUB8J5btDtdEQk6BeYhewhwkxtBkjXMweStzszpruEKTV9VGeHWcXkDT9V1HCpZdA18TT9U",
  "key22": "cYXHMCRjqTyzVSrEHUhHgzjJwd4uLKyysSEDdztTH6Scbq4phnZfA1RS75c5czZSTwxHzmdRB71qh1xgwzVBQCU",
  "key23": "2FS6sbCYYkEGQ8ggnVs2QvfxYmyFrqoozXrTPgtwicc8xdLTp3TgRCibwmAUwPHF9i2dPG9ckTsWrw71KJ2WbnYe",
  "key24": "wb1nLgvFr3CdZuwYHTX1pLuNcUrCjQL6PEdWAN6ibNNhMr4Pkyh4Ez76KRz9kZi9YS4yzHQCQcLcAAV8Uxcymzd",
  "key25": "2isTgu7PeaC5k3rcbUeHSsZSicGm6imDaZ2R5oX3eC3HBJsFesPT6hDs7cpcsr7bTNasmP32BzDFLH27cS5e7Rxr",
  "key26": "2i4MnvnxQkdA9kFTYgAkYaNZYr8NJRo4rCTfH3oh2rUAsh7tGtERjcLrh58WWn96pMcaBexdDYicAXbv37gmPm92",
  "key27": "3JYJPJFxYCgQSFA5yXN7KJrS7bPbkdxgAtNmKpiww1XvZJyZHtTed3Ptkd1r8hBTajCZijXvgh8TdfYz8CTiSfL1",
  "key28": "xvH5tf9FWq4wsRUkAribVdpbHSNxcuF1KT5NVb9KN1dpEkNRzGTPv9qLXQezLt7WxWxkssAnc65zG9DaAGKiEDW",
  "key29": "5kV2vDR36c74hpBBnUpaZ2AnfGBVxNsVnrp1HA34Rn56GqqxPTtKERDC5wPWiaJTxn6QYRnJSAcqqmKLz8MqFWoZ",
  "key30": "4qJzi3HwVqDhgUWpGrfEZuEfPUjmXSxFAH4qYDhSUKBygXii8mQ8Ne6rN8uABBpzjm5QJnVyvFgdrHTsfgdNUBqu",
  "key31": "5Rt5aTpg4oTWsb3RTrvPhNt26ii2ecTymSg4YdHYfvQPRxsAd87UzJ8wWA3hryiNsYHhm2ra4HBg3CGKgzTNRpDk",
  "key32": "3LRqEJNqrCAFVonqJN7PyBupv5pycQ2o6txykb6UsjCnb8q1XqsXx2dpH33kseCqqLXf262nboF4EVe5ucH8zZcC",
  "key33": "PG7jqbgrh7otx42Kt9o3DBKimGhQfLuSFuVvThqyNg1qb6bsTAvyYTeNw55seQia8RQvos1EiaGp257FrjDnTnn",
  "key34": "57QWyMQMHs6aWC7vRcfG2rCf3HCm9nro5A5pbzyJVDeHozCUkCC2hApvzudp9SFugJsne7ig54um6TnsLvQjLHUm",
  "key35": "4BhaQjC1EPmos6jeNY3UpwoZvJ8b24DbZK5CGeGM75eqrb59zCpFRYDWmcewSBE9y6bd4dscPs44wtev65mFqds",
  "key36": "3TsHRwHoZc8xKSWEFBYQFoBi9jcH44MKgvUx9gM6aZ4sXmk1zGyaTFJgSfuLTp1BWGQYMWtAQRfmVaZxwRxwdpEA",
  "key37": "4cbazR2CGsBc7UuxqVzSmeeETMqdFgV4dMe2Y79RFieKroTs9nJ5eU8tmv5GuSEi6nmNA9YkJq2mWfwPbgaYAGhi",
  "key38": "67WzF29SdM57pxcrSWfuhyJWz8ktp4gXeG7b7ykempbc2AZKWdzp2Pey9Dmjy4k7R1y9CsJAM23imGBwUvN4hHGH",
  "key39": "2F3juWD2W9DM5SQmGUoJiYfyLUdz1QD6qMuc6sLJTp12epPkcPxnbec82aH2ycLc9vm34ChjNNwYQYAiMxo2kaJQ",
  "key40": "41CT6XUj6yfLdfiR7AhLVrGVwD12vG9xHkW2GjpLrXg7KYj1aBBA9qAzmthSFA3Le6ikXpUdQGCfNYGvVyfGqYix",
  "key41": "4pvwCceqzuDBkRrDHZPKhF6DnJ223ZhG2549YP7Jf3jkjvCYvJwP7TL375udAZtGe3G9NKzBavFYosFZeE7EJoPT",
  "key42": "3XpeJaRBomkp9gboyDKYZZa2RJBNQN1Djupd6Vm1PDywfBssQpmCBVZPApAXHKDCwnZAvoKaY2Rq1YnwTyYmwfyb",
  "key43": "2vNwJw7nDyVgQoWobcD7KSQaDPAbtooU58gVEPfGcCYs1gRjGZ2uHDFT6LmmSxeTtArwtuqYJ8VgZ1hNiqAgRT2V",
  "key44": "4nKZtzfuKiBxxjncKJ6Ms6XzXiEJ4PvnJ32JQT33XKuLsd8vicKG5YBJtDGtaPyChSduTqNiKrpnYGVHLU4pRNAs",
  "key45": "3zW22Roy7vUQqHmRJhPViU5jdoWHuEGoqKsNHtb9uA1rhCuWTmWsb27EskDd9pvFNx8mBijbdtBxhj5iE7edqmda",
  "key46": "42Nm4yhDrQgRZGydKuAuA3Ze4cHy7LzH3Ahnt93AqvmdHfhgWbzrZTEbp6to9Sq6LdXsgvEPg5JgonzSmGp98Twj",
  "key47": "5vFZBkHN29XispviWNAkmxfAzpRHtJ2JhooTYcmvSFkBEFRSpGeQnQgrRZsQ312GwEPsL927dgfSMunUfnzVMP1S",
  "key48": "3C9mnz6vPr8QsmDoETkiZ15SrYgH2o5FzZJnvpBARU837skiMXNWcUst3eEhM8K33hX8Y6cujg6QNQbqqbkCphSZ"
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
