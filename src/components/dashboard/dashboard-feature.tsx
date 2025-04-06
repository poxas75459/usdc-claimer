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
    "5sNw6qoaXAF51Tg7ZLFAHsTdUmnfkGCqG6Qujr6S8i3JfmkUYhzpsTi7tqpzS45VxV9615vtLSZpPD9mHBagXmGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58szUNAQuxYhDtjHd87wNc1MPwKknvfzZtjucP1hPCLrb4tCHeEM1CsqaNiH5yEhR8McSKzCVwSRyoNapjToT6Ad",
  "key1": "42NHzkebAw8JkgrzJmUv15Lxfeyv8jPzUcajUCijSysu2XpmQ9Lt8sncrHH6tSAiPQyUX2sJFHE7bCASv2AZDUca",
  "key2": "gHpctbuTQAJXMoWS5YZ3WRugRA87NL55BqAwTW6Fcyi8yBY5r9Wbd427aasWXY716ei5EWXMLsFdY3yMsgWLqg2",
  "key3": "FwJn7ek4ta2jYe9X4GPMVTDqxRmrnYt8va7Mbd9kkSqsuPrXu25aaPVs1To8EvYZchrL6aLg6vYvQzwzThpK6wW",
  "key4": "3h9efuvLWZzMyZeeiLxmXtaYvV7wrgdtejSfUtKoHif8mx9nMNJ7cbYxkFPsvBXeYMMXy1PrrnFkMTxVc98TpPnZ",
  "key5": "3CwCQsgBt2va7a2uzLBrTAqxYu1cncptJbgPHKYDMt64tan2WNscMHCvvFwmXw3qHqdgA2fHftz8xpZMtEKMQ6qP",
  "key6": "49218sxHid7WJ7GbENy43A2DcQ5Hon2GVU1i7AR2zMP99vq57RQT8FYGtxgEns4H2YvhpKzPinAampkCfpAahrTb",
  "key7": "ijpQ694YJXaVFXsS2XFVakbEdCznfMcd4S9JmzbsAG4K1ptztgJZtgH4JT9Q3eXwGxhshQLbCJZ7nrARTPZA2D4",
  "key8": "5MGaA3YRwd677ZEgPBDNPcNHWbPLABhJY29PxJXSt28DVofYuxdzGTgDSb1TWi6fXf4NVLWpG3cBEEMxot9FC223",
  "key9": "54jR5qkSoL6CrjHDNmY3oigu21oVSJbdFCPuSqpoRMyXM977dw6uHtTs3QNzAjkTQB6needgBX8GbfqQeLu8a79W",
  "key10": "3kKfPvFAL9PQ7oaGNRQo7UGdU3SUod5kQDKBjPK7ZZe2kzLoXf2YkBenbhd5xmpAguNxp6h6vGdqWEvcb5xXnrfF",
  "key11": "5NK4VjJzcK8ZVAEAYqXSiT4y8u5jbq9T1SHtrYGjFZnpLK7BoFUwB5VoYyiWtSeedNLx4711mWMA48JgmPTmAY6F",
  "key12": "2fa7h5ERUduv15jwFZtQMTGQkf3zoxcYdX1B8R4HZEKA99ie6AAFgsT8AvwYNcfKt2skkUPy8tHTAotmpMd2ized",
  "key13": "2XA8LVZpwB7LXkjDacF8wYjM8KF44RvGR3osDz9mWfeXfPUS8vftd2LFEXSn83ALo2SRGCprw5FoNkZ8dPVXZ28Z",
  "key14": "reFweTifqCgNuhdwnKi5bMn2MTjJSirNDePk9HyYaktG2aAk4HxqzB5ZduxuRfCcBKU3boeqbVXUnfTSt6BurpD",
  "key15": "37Sozt7SVDEpBrrTHBexpAmBNhuc6w5btRJVH4PhSF4QD9WBtkqUZooSRcKztZHHSc766SLJgAYQfpyPJs16UpoG",
  "key16": "4o4UX2BELjExCcXzWq8odMy2nNtRuHHu1if4K8UTg44C5vGntRJ23BjtXzJLd9B6tKTHZL48cA8WBYeqRaPsZAWt",
  "key17": "5DwgSWtaAdCvJsZj9Kcn1JAHhRveHiikSbemrzWBafhgcmcRapzewHhWLD1hJZm5td6rHoTvYwmWxX8Y2iosw91h",
  "key18": "3DS7CLB5MjcxxHcNEuCvmEgYpV957bGWUiSakL9Uvdn5KKT2C1zwgAgLpZ22cCWntwTPC8KLsYFCkKJ8813BrSc4",
  "key19": "2Z3MrEoo8ZVVr9dzfxa65iUoy7cZWxTkSY4EkJaGUZ9TZULEDLwhMqakuRMABfByrQkCMaQ4gLyDrghWhVH3gyYK",
  "key20": "2yJMVXdDa44ZzuqYSwzuWNZu93phYbEX9tXf1Tzody644BmV7VftrkXUinKH8NxasULB9EXPfDcViLdvimvwqVw",
  "key21": "53VGnYoCrssZbjoaTuGRyymLW5DRAfXGJZKQGUnGYBXkXNTqmrLXtnJiso4QKoMoG34t6uCjUwCQo2ccGCHbRBLf",
  "key22": "kazv52iQXvsjPgdrqahbBVWGiZC2gvzCGgSCqw22vicMDX5fiTJAAzjj5Wro4jCRc3BGpYJEyrgPtkLTEgY13et",
  "key23": "46ox85j2NnijuxEbv1Gbf2nxu91ukKZ6MnwKd2mg8uhv1CP2ZC3hLitJAzHzRa6rHyAFTatRZbXEQkKcMwjsV6Be",
  "key24": "65r3Fs1W8i8fX2f6SEZLqEk5b9R8wTmf4ZN5r2PMbcE7ZEbqwyN1r3q7u2fVfXeoYD3ygWyXKnCvAVNfBZaVZPVF",
  "key25": "KRCFeeT5Z9UdspjwLvgNCmWokoU3jmyZYiMKX7mb6MNaEc6VFcBsiQkBBFGp5SnEdTjLUeBAuSy1ZSfxw9uLnrf",
  "key26": "5NpJ6tYQ8fdxSiGRfigUQ5D53zpwehoaJKYzvoEZfkTadeC5Evo8UyucT8zCCPcBwuPwbyfS79m6FdyoaApAUneQ",
  "key27": "4b1fygFftRXp87BCmikBDv66nJ1yqBP3LrbzYvqRHBrqW67i3D2h8PAwb5raXxPEPMuEa2mMEfTjTuKmjPD9NHKL",
  "key28": "3uf45P4AahbEMR8vTRssWjpd8hAyqb6YJiGKazkdCLbKBhsiGPPJo9jRRpLhM3jE5nTrMn1yrvhf67qbuP8REM59",
  "key29": "2bhsxK4T293Ve85nFA7LeRKjMYPaXgr66EWMMqbSkVXFGcDDuYNNgvke7D4dx2aCjJYktSUCTdARccsycRk53Lxc",
  "key30": "4Ygp3RQ4mZMRQK9cMT4s6mteiBJGJkMbE8BTjLtPr9c2FM5PTogc2ThkHTYsU5cDaRe4LVi1dtb5mMRwBpHiiGuP",
  "key31": "5t153SMkQWnrf8yCfF2z4FTxT2twxtwsrg6Nx7y1jXt5EDsaYbT3JZjjuzcCSNAVfFWpyQ2ZRJFAHZDdYX9EfkVw",
  "key32": "2x11L3iksqTn91eTGqhbYtfTpy4zUpJBtnJSwwiqYHMixUBSkG3Bo978SStvpA96uvJTLEGSsor7zoc89sSjq3J7",
  "key33": "3UQ8CgLi9b97VqMR6ZTCFytvZ7qEingd8d8U6wCQAtwKCqz8QpCAeGXT1cnhnS345TWpY7tzyqCaTW2b62v8kwFj",
  "key34": "2Conn11bAAmVPCF5A4so7yBpNFu7LfLU6ysVzKm8unmnYLsBkGVExajRxPv6iw3Y7tqo3NzFwk1ZymcLSfTkrhC",
  "key35": "5P1KTfsfXMasc8nfp8ujU6DUGoR2ZSVM8ZqwZ67V7zPXBu2rEArU958wNnsKMGcg3hQmLXLGTUDANJfjew39AWZ",
  "key36": "466ArVdJRQedUcboweMj7xetWUqNESHS2Zho9Tg3q1r97CqWtXMRSELCgyU7AA6zXL94KEwxr8okf7YRbXeLhCGh"
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
