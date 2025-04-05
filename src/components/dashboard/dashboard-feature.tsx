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
    "a2igC7K5rfsJE3vm8AudcKsKXqtY66ijxGPAezf19VqaBekNd3yH1JLQdzgLZ17P18BBPcsDFbPcYp9s9Pf48NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVQV6ShA5BvAVgFC7ZaUwCdvbk8creLmrXWGdYi5sw5J29Zfv98jaK5YgAydYdSaoXRsTp7SkqWj9Z9XLHuVQbZ",
  "key1": "4juEfbzw5NLNxN9829Q55qMuH61JDhvbpkJiSu5HGEogSDDtJsv9rRY5juycbkucht6GHAJB1WyWSsyp5TEho5RZ",
  "key2": "4tk3epF7375dhu52mkVNSwfGsJWD99vwreUwE4dCk8T9KnkPwvGEqhKqugU3TvDdyfarakK5wBgvDygcaLneCXKA",
  "key3": "5VKfr7jH5UZD3gUhVmQwm8DGsvLx9ZAJFaswYwECX9QMdchf3HxWbNgiuydUnEhdf3MnAmrMSqxMzUwr7e1DGpQ8",
  "key4": "2wE7RTNmhLnovGcgWrcHLNV2wqxQDU1m9Hm3YLZtVxMyLHCkdT4cYr6MGR4R11BjY9QFFjHxufmP6Vy1TF5U7eCY",
  "key5": "4s1HU9xqhWQTmDHbyhAFptYEqkouA4aamA5wN9sd2LRQMjDczhvtwVmRzzJLJP8aUCK8vwnXWD52iHNsgDX1oUWF",
  "key6": "5qeMBVBPF1XW5hzHfTvEZAKttz7bDFJSp7K9u49DBKCf1LktS798ViiEd2ZCJUew8wYjHWJR1t58phB766j6ZwNP",
  "key7": "528UZabx2YL4wKdwFG7APaPtYUqqdWTE9gUwdTC5i1vjkrJVxvTgHvH5rUdDfcUaR65YnRoKvo7kbsqUFTVuEQnp",
  "key8": "5SoGZpAAQsUWcSi9kkSGdRRY2LSWaKUgxLJb6bBYYCNGCVWg9CtCwgrCQhUogswLQTWUs9DRYq6gLfoF9Ayrko1c",
  "key9": "2EEMxTaSKm7ZWnwdKLUqQfPvtEe4YH4xJ6RwyHaUAstBvBVs2xMk6zGMoy6A8KAPo8MGLSGiEmQLN1nTujBdXodk",
  "key10": "zZGGNQDDuByqkBTg3pCGVGLESVX7UZMcVrKB28z7TVhk25Ar7wPjPYTAUSc3xmygwar9cP92QAi9z2yvGx4TaHF",
  "key11": "9UopG3j2o91Ky3yQRjwyp12FbQYEGXijG9GRtZHPwVqb4Q8Fo8TrXhAAbEiunmjNj4eBsa3ry1RtXyQ3Wt6HiUi",
  "key12": "2r2tKB6PGke2vEBuV4GmMxXt7xPb9nVWnfYvoNM8uoWxvRP2h54RjHtVSnaVCKi7jyPcjB99JreqADrctt31ThYu",
  "key13": "2bczud4RFgjr3aKKtSxBC6pS8WVX3r5QNRorYn5MQpTs3TGqhqW68LDKDRYKetA9XQNFiF1YeccUQaw5As6CWR9h",
  "key14": "42canTJShXgV2S5P1cViQh4m2mj7FBSweVSJdkzUX7tawwPKMVNtKUDkL7JrvGgnJm7PKNhTFhgJ7M5BPYEbNMZm",
  "key15": "4o2ptSS5yeU6d6bET2mnfXcr65EvzeCFDKfYmPGczaGzfjHczZQyHgB1AEEv2BDAM1SpmakMeaYV79mTtM8XrpnL",
  "key16": "53sv9JhU7xDfXi8GuzFddSpHTUrYEocDdxhCBwrFuU9Ju9kkWCMDxNWm7XE341W58ndo8Ud8CVsvzsmmRX6tuzW2",
  "key17": "2ko3HPVBjSdcpkAXsYQWe9QMhh1qtmnDytGsknjDhJyv1XoGpVZ7b6obQ7FD9tr2Zr9aiuL6gpjdXGgb1QsYcAUr",
  "key18": "4Xz12VFhFZCj75sZjLyM3eGT7qRPPFVDdA8c9Ziws2SrC6jeuDbvkVvsgA8NQgmReMJGM4RzhgKNPFVkjYbAjPQY",
  "key19": "Yi3L8rC7udupVni3R8s1QBnTLLVNoiH4d9JfmEtjvXPVGCGKaEH1J2SoJLZ3F4APDoKsxBNtiaG6cqKwtk4qZxr",
  "key20": "2jjTPRPJ3eXFv2FJNAwrcgDztu1MSWaTdTwp45e61BmkkLNZxwWziTpqWbzNz3bGVHsoUPR1CHyJ3pdMobfPiFbw",
  "key21": "5hBEMrJJhfjBwTY8dnxUTfucHuisojqaWbqR5Sz58x5kJwfZ7rJ5dH8LgAppTyJbztHLf4MqS7B8k6ooDqToRuEp",
  "key22": "27grPLJhHtw71JGBHP4xbb5MJwMBfV8UMj3kLGhiiNhe8egWVARKK6SsmyEbp3asoyseSExh1nvJtNTwHop7DrvH",
  "key23": "2hpcG3iJqeYpJkmpsfzNzos96Nd6eGbaJJQSAz5Tw5kc43rnSJ4TJ5UArBiQyQ95A4Zaw4b7CJ1qTHzQ8AeDhH2V",
  "key24": "5W8HqCjAr2zN5vuy9KWPw5z8Wqk8o38HKtP9qGu4YvTQAWZQJHn8hG5a9sukBT4VAZVjG6UPpbQoUefa32c5jJvZ",
  "key25": "4ugJh8XbCuu4Jv1MBWrbT2nJbWqVg9LR9dP3Z4yx3dSxSYUoEKhVGvCnpUFkLZQbv2iv9CoE2pd6EwyA4QME2vUt",
  "key26": "5pQrmdvy2TDhqFp85EXD4fVyWdtGJXaEHSYzM4FX1JgRKdgxM5soYzWu79CvEGLGQb2VETW4gYdaR29W2bz9DYiY",
  "key27": "65dWbxkNhMZRifBcXZsYB47xdu6fPdtRBkcrG1qcuM8yerRnAnfDg32VgjSRvy7noKxTVqBfxquVrTFH9ZVU5LeE",
  "key28": "3SP4UTw7a923R2L6BmHg4m4pqstoJL2fXXNMqasVN6giDF9Cwvj6okFY8cChP7bn4aDxMwDF3rPwoeBMXtci36iA",
  "key29": "2JKjdJm4i2giNZaADFwuNQanyNH64HSwggpMni2BPUD36V3vdjQHMzitK1W6hCKRaEAScFtVc9zKHqDeRfw39ryN",
  "key30": "3H9ycv98SgDZsiMRcZZtmrrXijTQ1PAiNYY1bMVwtUjhDcAKnvYwWiB3YiwUbTrUhWsriJ87qjgdB4gfNqHP6t6T",
  "key31": "5LhQ68N69apMRxdJFX6XNKbzDdH3ez3sz8cnt3ABWdFoXeoVyppcg5oY6utwGXK84EEFjUcscqSNFj46UwXEzLqe",
  "key32": "5PnJirRVKMW5UAWhXcbcaxaQnjTYHaoYmHZse4z3MB7mzNXXVCv5pD8XAYZF7uQFWCkeuxDDWF6huz79rkkb777n",
  "key33": "5dKRaV6c4tME5nAkAnchGycigr5KRDqznTFux5qD7G9r8d4eGjKBJRs48BDuBco1ArvWwUNnoPWDKZ8urGnkWz6T",
  "key34": "DKmQgWwYKSFgE9Zbb5NufgWkM7iGghUyerVAyob6caWEPmbT7kF1r4CSeeMTJVs3vP8M2A9h8QPjxEXUdP7A6u6",
  "key35": "4DWB9aoRUQ9ArgMTCqmcjiSgBj6dX49YnsduEz1cPLfG1XwzYqbPPnRFCrZnTWebPvEADMYamQzZP4HGiipymVEd",
  "key36": "y6LsZ1fzj6z7TieeQ3WCYCzJ7T4XZgH2C2dtS1Tvhx4uyofZcnpWN5yJ638NK5uU1afAP6XAWpwWRn7C6nKA9xV",
  "key37": "3AWVVD3hMsAxbSbBuymwxPtstXzjVjq29sFiLHjVJBiWGKzHtNfWJytM8L7nVWBQ2jrndV4P5tAXNTB9NycS232",
  "key38": "XxZgKFr3BmqbUnArjxby4gq3q7ymasuEXHeFpYwoWyj9wcEs2ug9qKiGC9A3XENmANq1E21MwYzhgmzvQiB5bMc"
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
