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
    "NsUGxLEa8UtL1935an2wQ5LBR7pSSPLfsa2v4ET1rfM5F2aAsVvwjpGMiQptB3NnPs2ZyzKuLHWjQypHmjqLW5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2acwQvxZSMQAPyYWaiW8LE6hUekaMy99sFgtPrD6cBRgR6ywdsaag3vhWYTxUfgTDWS32y4cS7vjNn4bQ7VeGoPL",
  "key1": "4y4zV6SkfKyXdikxLde6DhMT1gP2TnNjrCgc6xgSR779kTETqLLbPEy8fuZACc1Hd9kbPVYUpNMR4qWEYT95Jcts",
  "key2": "ohPjGxnuhZsQfmwoH3Jn23uJkYSiuy3uBZ5zpKEatgyLJTGendoVyrkmrAoLVuYjMApy2zsNvR2x8BezizwNZM2",
  "key3": "4D8UK5R5niKryYZsdbJNa82e1goK3nYDU7DaAyiKezAYEkwfKEKtUk9YNdJgY2H3mss5tdYRzXycHdtfk1uvY9E7",
  "key4": "3bDkht2XrcZwnsBtQCTqJAug8bcMKizi9scKHmZGa7jEyG2t8j5Vgv3LuHgxvsv23kwBLSnYaLWVcxsWeJYzdUkt",
  "key5": "2dwCXnZNzL2e6RgK5HVe7rLzSeVfhftWgsDQmqx8eJuZfsy94aFmKUbLNWj4ZRKpWA7XtYWZEYkexmSgXazDxHeP",
  "key6": "5sKjBVMNUjcogt9PqJLrMu84K4npLEJ8xfuv5eGBjwDi9bKz4dbkCg3E4Vt9rJu8tfWihGme5DWHue2QVvghS3PA",
  "key7": "5m3hNBnquXFpz9FnPn8aunpLGk797MsoWq74Z9LPoese7Q4ZzG4iTsKR7H6VUqZCwE56G4fcRZNFLcXYEJSh8r6E",
  "key8": "J1HNNPVrEP3p1VsFwXnqmUAD3ge2cjnshQFWT27HMc7ZG6huoQCVUe4HnsXxeN54R2i7gaPMWWMf4qLbtFguruk",
  "key9": "4tWJTCCy4evnt1nMcceh8Xw4ENGeN1YDjuN8b2ribsiKyJakGXFvsNqd2dpxRYMBH7wr939PCqysfZiQ8MB8X7aY",
  "key10": "4cmdG71v5JqLzEnSqC5DjAZWo9R3mG5xkC7vn19dFa56BFs3VtYUgvNZmDuQ42WEkte1ViDg1gmBfaygMJ8ok5Qz",
  "key11": "5aV9DTrkBNkLJzSuXZMp3iys9fSzBoyv5ZfELzbCnVjVXVS1ouHNK6mRT91Fsb67UZLUHdBf4vFEuWQ4nurVn6kT",
  "key12": "2t1yhvkAPeLn6MFwmhqrJLLWUic6x9aYddCxz7GULLjLzyuwzd8znYTwhsQusJVxfx4JXwi8KrFLio5tFQtyFU4j",
  "key13": "5Hj9v71Das2HHq19XEwkEf5YTkw7Pws2Xej5SGsJhnnJ3PvRi2VyQRGjqCpTtG79uLjJQ7hn1dqbkS1tMDX7c7pM",
  "key14": "4x2RvykrFLvYzoykgtgxYFiUFEJ9agGrLoZwTy8LNdBzfnYkrS56p2gWLk1YLBkpe2aR8cqZX7nDvwWS2kX7sUTz",
  "key15": "4Vkg5y35nq7qJMzRbxoY61rrLMXreQXkuovadRs7k4eSkMjXAJARH3gziaDF1yxtht48ibUa4ux7CWxCZAUNW8pi",
  "key16": "2NNnxo9y8vyKC9Xnp8DGGWLWttueGBCC5VceLSX9HWGN2GvXTmpHm8LwN8trdk2AWEzPEYSeddVCWrgnE5QMG6n1",
  "key17": "241Zurkh6K8UMKQjcD1BCmoovSmFcJ6G3Ztkup7dnArqCPGQN9AFxk2w9N3BWYEgUz7nQJAbub7T7wmkYEFx4b67",
  "key18": "fbWsC18avR6YPk99MBKwi2P3cYA1gtVQM6YUrmy2zaaQsMGuhJrdYP6F4uzsuVuWSE5iZAMHPoiaiFCMSTrdQmV",
  "key19": "4xv32KMeQ9S84SyupzWxhADWZMinoRv1E3nG2KusbjsC4gFk2rXPNFAxtU32tBV3mtQpEHxqcVYaToQSYUptLdoS",
  "key20": "3ANB5wAzXM6DE75jL9FDd9Wp3iJHFR1Uue7yvJqHZucLzQZ4wdA9ceTkG4BF1cg94xHTEQ2Dd1f6AouRwfExS3o9",
  "key21": "2U2vndhLeLMZ2CA1CP5WSznzf5EzRxEL8GKrHn9z7dToeWyZ7BFzTWnZqwHoZvwZ6yPyFwwYJ5Lrft1FHZchjCYd",
  "key22": "4GdPeKdtjKDNxzBPausEUV9bsfoQ7PbicmgbU5sqm8ErS7ZKYbFFMNUcz4i9nDTJX1Zjf5MP8PSJbYhHxnYUXcTg",
  "key23": "58gEtVfav6VHzgxb4A7Av8eDJUfEZacfa7rpJmGyW4ueP48foUphR9EAQn37NRnCv7oG67BXH1jaorxNP5Aac87v",
  "key24": "2tgFD7vSEV5eAedfAZyxsUaBXR2h4npba5g2sdbSXLT3nNL8NW3itCccPH6zCworwNSjx4VZoHaTFB4tHwidNXGK",
  "key25": "4nRaeBM6j8GYGC6A4xc1soZ8aXr7b1H3QsZ7NLJWVWRVFmAr6uiQTHafbA5bCo1FhVVhMBDnxsLJUtZa7rTk4GuJ",
  "key26": "5eMYgG6JniMnoNJMd5F4JPHiid2nxxpKcSSwnPxzrj5AdGVbRFPpG3V8HqV79BHuEPC6foPigg91cvVjjPLaVPiM",
  "key27": "Ra5zETrwYrRcwbRMz17STdUBR5y7bpp8c5btdEjUQbdGbW6P5cxeQkC7vnUWJWM6ASVqXA4ort2oBRRrstRZMqa",
  "key28": "65G12N5YUwHWFJiJ1S5oC1ZTSu415pGbaVbLoB8Bqx7PfhoXEDgtWmc5oe7Zxt2DYQs1mHz4gEF4MxyssjJTcqXv",
  "key29": "3d2KdDnHs5pLmc2C26ZWBQ33XcFeDAZEF681h2VtZrt6w57Fv1DykzpqRrob8yyTMNamneiCA3UvZEjbUfy1suMj",
  "key30": "3AU2e8q6ACXqRr6Wviimpb2a2gUKsc8MdnbohSG7ALx9qEUE4P31qyW5eCmY3mFeg7oSsX8yHc6Gstezn1L5NtaY",
  "key31": "52U3ZgWSFybhaQknarL7Xgc2smaerZVWDEtSS6xQzdJL1M22wGQgviks7Cw1Wqib853tVe8p4fgskT79Wy4xSP4X",
  "key32": "2z7oSprKPq7gYiKWeCVDPyBBWAok5rn6FqPySEp7CV5MNs7gnUq9Ns8Yu2r3sgvAPxEjmw9423Bdy14rY9rfzkTA",
  "key33": "5tn4CVk76SfRFep8m4BYDeywwjVcvbBRfbZEctJ7Pwnyb71CD29P614rRdNyfz8bVVY5pZueUFiQ2oauPD7PrjkU",
  "key34": "5gNG1qpWUcyn7qHnN3Q5BUVt2mZGWumf9kqw1KDE2yY9V4MeYetqgP7uxpHro9forV8uDxK9uuxdRb1fMZAYZH2q",
  "key35": "3dyWYK8cQrxK1pewGj2QuuQTUZNEBfMf2uBSCUiyZ6YsEQ29FVDGow74aWULwqReJZyE8zLs2Yv6JDqZjdFQfYPi",
  "key36": "3v19GJGk3a2xB11M74DS6X4sXbFX9Kj2R9KgZbS3QoWmh6VJxcG5HtVD5VJutV4LN6ka7HhVYsWArFdh6d4dKeHA",
  "key37": "5H3Tr27qEo7QeoSkghJBax9TLVr84punR42wEAQnzq45yBDANuEdu5s7eC1tV9ou1NXP3eXC5K89RqRS9UhCVzdN",
  "key38": "4DVS1KXkdWvPsaJX2MtLmJnhTbTnHUityPnNPUkgMFroWwyh32bxTCcEaR96ZzPNeJPmYJmBPdmpjvL8uRW8qhp8",
  "key39": "5bKy61C47kM1Qh51NvY481PuRjq7C6FhFDX5cNAYaibbjNM8JmqMrQkYTa66bX54xANBugezrkMYMfAtEwE1TmeK",
  "key40": "2PV3Lmkqdbfodiz8kidh4mJgnyNHEk38iPqyZqvW2gJgPHAUJHBwdmGQB3kNUCo6PpFRMdcFY8RbzzoS29aqFAX",
  "key41": "4xezJBmwWFX87PGqCwcr4AUeGfyc5SUDTX2c3nZXQ3PULnPs1MSZNcQYV6bDjMe4tgPVyUMwF75aUfFXhUNHhL9E",
  "key42": "4JEq9ihGZGFyakPycWSckDj2i8WAASwjF1R96WmJFZL73tWmpGUCGLwA5xrvEJPjA3cfGNdiTgN9XNMc7gA9Jovs",
  "key43": "wVDs58fmKFBjPtghN33gDMCFCtZBH5VmoEnhwpDZwed3Q2RBg3Z2wE4YwVwG1DxVqKRYZARMhiAXj2qBWdijo6k",
  "key44": "2EfgoRRGCUKPS7fnQrpSbxPSTPi2CNqr96cCffS1Xp27V2oGU5DqoDLH631L26KqS8fsYJPqTa9tBSn1CZZ1MygH"
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
