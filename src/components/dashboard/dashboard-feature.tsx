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
    "4bRJRQJMuQ3c4wXTpxgr7g2gZuoRjHv39gRebHsYWdAL4ysPuWe9taXeEEiZqZVCQEdEjeRf9Sajn1zDHhmkT19j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCWSmFbEwVRnYMfYEVtfigvCJLehz8ZgHhGwxSybDwZzSusAhLcaZDfKseoCPArRSgTsC2Ro8G8TQaVV23FMqYd",
  "key1": "2yJmgNTDjWxhagWr8WwwpqvdUuh3Y2kKocyPk9Vyqe9UW7r2jScW61VXymWW1ZaUtwPhTxnecsYbMBDFncuKnYTi",
  "key2": "5z7PYXyJ6GuGQYPmcFjs6z589TeCcLCBQnazhFUR3psBYNLTMAn3ocNiVWusRvCjfSEeFZapPAJDhc21H4Mb71he",
  "key3": "2U12kYRteJ3YNB9wXYExsQXRSu6t4RjZmgQ56auJFibFFNhsUu6xV6iUJbF2C7D4i8Ans7H9AUz6kfHPeqjB227r",
  "key4": "3BR69skT9uQ1nFtML7qSu48AC9tcRWVFkdfhRWVhnA7gnbAQDuFFtCQo7zwY5M2fwt2gPgxQcs2uXo15Vc7MHjMq",
  "key5": "2RvoxcWfvqUwWXzLXUMvaVTf5U3zNzaFs1zvZBnvkdXbr82uFaXr5uyMC6LbYWgcEwBfb2c6fwHcmQ7uZ2p7xvwG",
  "key6": "43TAnPFMnQbxZf9Tt2rvom4bzRELXH3EyhsSxqG2nmjpr7hSg8EGetBXjxbBrvBiws33NXaLRZVWVfhjfb9ULotK",
  "key7": "45rKKThca81P8qxPDXZNo6HqdqSFmrAGwXa6SkaEjb21woZP8KmGWYfEh6zegXJF4dGjHAfjo1qYUJf7N2fDuitg",
  "key8": "4aNNccAsokfbkcLWD8bP6ZobuAjSC2aZL585cjQGWCFo9GSRyQ8XccSR22nMETpo3ZYm6jBirJyyQvXtHyhRu3Q8",
  "key9": "63LzNRZ72LVayeupmGLac9XdwKVKZz6zokxcHC2HmXFgU7juJhJ8r55caaPrVwoXB7nJYGJwASpCn78b8PJxkbhw",
  "key10": "2TkQHShpT2GvvaJnBoxRKSg7ZMSMRba735UH9oJCAxuh2zy5XvAterYaptjVZnE4sVQ47cSsKYdpGeJF4YAuvvLW",
  "key11": "4iLRbjJBzjo26Mt4rvsKouCG6Ayqt2jcUJZejdnDeJkMrR7avaqEd4XbztCccbWyqKS1ZTb6KFEe2LV7RtP4d6b",
  "key12": "2PYW4srq7gNx1i2q1uxNJSfwuc1wR1mnePhYNfSVrYK6F4EmdfjkkmBAKsKy5459UXERUtvLJuCS8juNsGNPCJyb",
  "key13": "4r8BvDmcjKwiabtqMFhzXZSQCCfXHsJAeNWRSheMdabBJEJGAC6TvGb3yQtTBoDVMY3h7UgJbLdNUs7TfeMntsEy",
  "key14": "vn4HxJXfqimcADkfGQmwUnxFaELhbadhPRJ383npRyyutzgK9FT5NzhZcySfV5AcCcmgm2fy23oyUiHVZ8r3Vo1",
  "key15": "4VkcqQkUC9C8fkife8fQAkHV1kDDXA9Zd7aVKvnBehPdvWrMp2TUqLLNcKWkDYjwzTSJC4m5uYVAB3avaCiVnRJ6",
  "key16": "4osLWUgVmDXsrXt2GawycY1NVSkDz6mB2rrYQAHTZ2MRaBoGT6nSGJigiYvppgMcwnkBbjUfc86jCVyFdKyFC3G6",
  "key17": "4JDqke6HYygQpg8MBDF82tmchWc6kcNnrAcVu1epVvDpU7RsWHCgPVgXhXSTEP9eQy34poeu7x1m18JnwdV4En9G",
  "key18": "2aFKnuYdmxtTQqDDpGr2iSmdJRjhsng6uN6hd7V269MGJ6LZSQF4cKpvJCvwcvBidkKZ5JWxXeRyBXB6e8uumggq",
  "key19": "96zY737q4bgzQdM731YxAA278WRbtzrXiTmeHBjj7LmavXZoAvZhwmURwvjHLQ8pv1bz3DNjtdHpW2kRLtSdqPf",
  "key20": "4WJ241hckcJzVFZYc8zTejyJQP2E6wVRqEHhqjfoCtBuK7n8xVo2GZAHVhCRq9hpsvDKnESzZE5S6wmoDjovuKaB",
  "key21": "Ue1oWHmoq7cxDJRawRsB2eJJJ7FoFw2zUi917tsra2K69JMCdHaFPS5i9MNfPS9ft5KKVbPz6pnpugMHdXDuUJN",
  "key22": "2wGFYTgU8udA2hdt9oH2pwXD7VZry4YC29ZDQkwioKJbeMaaEkv9afascDRZ85Ycxci8u7xgGE9BQEbjegbiMmcz",
  "key23": "81oPPj7eGnoe4Q5XJukh3hxHbNseSb4AnMBgkQWZGM7eRiRgzG6UkxbtDAkQJnbQHTcEHrJSRpBDL3VZ3EewjT8",
  "key24": "31vifnRYBN8shCdwSPcHFpFAnZvybhopuoXDQrH5C9kCxEtjTe7RbGzZbZL4N5ok8GbLQVe55H41sZ1a3Y13sDR8",
  "key25": "5656Dj5dS641yi96K5icZuKWXTGZXghvibPc51ivsXHPme4fZEdZk3UQsUfzK53XRXHhbxK4G3DXmdXZsyDHcbZz",
  "key26": "JXQqh3haBQNRw9pduMib9uJYDd6W4mmDGYU1R3qQLyyc68g1u6oWa8rMDq2cPGHVCveEAaQ8rckrikym6nyfkmn",
  "key27": "4ddrMoTaftPeTAnEJressS7fH2FrvuqYfdXDxhwMqa9EonkHRLaftNSBy3PJe9i1eGferKNSmLfmm5NTjzUrvWmX",
  "key28": "2feTEcjb9StfGpiSRWZfuFts8DdrSi2ButH4NmWqcKDUm9L4AKA8uANANyxvskQxFCCRMcJHnAA9nqmgUBVxiknF",
  "key29": "yMPNi6zVCHg5YruN2Mn1cg4RD38oFcBz59jyrNW8PSKSmqPkwvUteQdechEbdQTnfYeZywwm4z3SyLhDRf6zaJu",
  "key30": "2kVnK4fSwAxyEYGe7T8XsUmnxJLtCkHvwTq8M1qJU7Vxa6cnLQ6v1A2tSRBQ78SrkRjpWMBHaJkaUQWk7Rojo9Ms",
  "key31": "3E1Tss1823KCHf4Aud2Es1YodVz1kTVoVmg286epZmQztVTVA8mjEkonuoe4FJz7f2pfm8qUKSQgkS96in4fKJsB",
  "key32": "5qRVpTT5LrSw2mtM6AXnUkRAJm5rNT4ZoPqC1oX5GM79e8vT1TKRmaHSV67UibyE1XCJoHLKoH3Gqm6Gn4ctFprT",
  "key33": "koptsJCe5Yhdv4SwKQVLDSY96smfKhdpxBok5G7bJgb38RrTuZXCc1WYAF3Cpt1N5dyrJr59uz4cC2YutpPig6J",
  "key34": "3E4RaiAeDgaDYRVuJbcBFae6RpXj2roPzqEgZzvaL7SkQUPCtW9TWkBm4PErL4U1hVwrvEVXB1EY2HpQDpb8dDhY",
  "key35": "5dRTSZZwP59jU34Zvts2x9n1b7pM3G8YXmAAP6dpRBMspJatykZ5bnZy22XwrWqyNZiHRqnXhL5uyhg4VUUAeGjR",
  "key36": "29DhG5N1tqs74R9jbAcMwDrRswJorEnb9paozfWDwKa5aTxNh3V8fD8ETjBbdVF8YPtg2Pn3vMNye1SXt54DCo4F",
  "key37": "nm79LWVSVSpUL6LYxQmZ9kxWd1XUFcAG6EaeAFrW4rFDsN8hTZRSomvy3cbwqySeh1GVa4yVn1fEXPgckqZBsCN",
  "key38": "3cNsNbJ8NRgB1TBdA29jCsuseVcBwN1q8wUAfwjx8Tqegrurk5AL83uCNXr48uoZe559PUG24y37DuQUY9mswQES",
  "key39": "2KtyYKdNxECUY69dR46UFcANToqHPfnZU4HwySWSbYvb6uZn89HVDqHR1P45VPS3KW4BDzfoy58TMerXhHg1JLsH",
  "key40": "4Lg4CGSwd1XtXB3MGAQUEbarktqn3Mh6caa9XfXgEtY6mcDfHFA3Bfa9s2w2UvebmtZ5LrZ4JNZd1azGiyxBF6Ed"
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
