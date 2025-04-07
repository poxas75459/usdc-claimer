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
    "5oZf6Q6MN3iRJYABvuhYqUfpPTTur4qeLG4rvxCorbaQBsNbgx8CWzNx7sXXiYifTHfekrwpvrg8vFKqmYPpSgnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gL9Yh3vhqtgcjVMyXoj8dR3yAeML46bYbTgMxE7zzYgss4ZLz5FGpGJ8fBJfjEW8xwEqxFBLHUgczGCvp7TvUK4",
  "key1": "4R4Jj6MyAmB4aWbcGfJ91tLWSM5JbEiNNt77NvjRbHaR8JGh9R4mDAtYvELWDoG96gS2HuCi7wBpNBmyALL9jGyn",
  "key2": "WLia3xuDLruHvhU27oZDE6888UmNNYrkKhzVf1xvErmwkWc1DB9H3kwbPrXFchCuwhQtfg5UHSuM9cVgrfGg27W",
  "key3": "5C6pPFnJpSjYQnRMoyJc3WwfAG4P66hCbW1Xco3hYr3yDbhLkQPbw1u7izY4ZA13dhjQZwpKgMgwvQww3qjmUFDc",
  "key4": "3t7YpVR1p7a4qriKTxE8wXFmMb1ALG7mWhpehGw94fhBBBxE29hGFVrgcYHCjVycCEwSGxuqKYBFuT7kKV7x4hEc",
  "key5": "4rM8sM8T6ysT7beYXzZpDPrubH34MTeK2h5jK2BLKQqaVfuBUibhHSR8hJqTQHxuQhysyiRC1GowX1eFpKPH74wZ",
  "key6": "3s4AKD6NcsesUiM9FvcNtWGKi7bKtrkhekFcUUq2hkaaTAtEgTAadfFqJsYCWC5E48wrQoK7d6kCLjaR3o7YkFJZ",
  "key7": "5QQU9RNkFh5hHVWfELS2VaiWMxv8hfNBDXRuiZxoFh7kUhujctF5mWkc5aRJ9ikJfeeMu57afYu5i4WtrgZ5Vwd4",
  "key8": "KwB71ExGHos5PqHtnSmZDgoUZ9nbubTdj34W55yWngtm8t1rNZ3UvMaosWP8HaxPAeBSWBtV1aoaw5nEFERYQ5X",
  "key9": "knD3EhZkD4MPV8kRi6KpQyd3Js3izK1sxMtyLDRyLq4GsdA8FD4Ceg5bLj9eTT5X2gr3tk6kmsAQ1E7rZpZvM7n",
  "key10": "4VueKd8o5mYdN6qEADAGrdzRPio67v5jPN4smk8DKKsyaZEgW5xZHLvumvZ28jRxPFMJ9xuLGse1vSk5Ly4Pp99X",
  "key11": "333X3xmuTUamEhwtTxQskF5wBH4t5KTdpWQKfFDW3yssc6bHVjsdfF5DBsQbu2aTVHQG1KqeKE9W1r9Wmsg6gwjo",
  "key12": "5Kr7MNSkkbLQuaZYBRArd392LSsNm8qkt35Xs1ox6hN43hEJSMmotjvxUCwpJAvhUUE3AHeF76okph98arjRp7u9",
  "key13": "3M1UCu4jqq7SvPwvxKLqjeU6ULjMSuRRWphEUDRWUkyD6nWHQPr14w2W7UqcVojdDoh9Yt4W2yoNJmEXcVJHd36T",
  "key14": "H2tFejodTKXkxGmTJC26vu9xpWhLezL62JdiqzHeNHi1kqVz4jNyhqtsrTRLUDhnUJWo49WeVN8EMUxPSUnJwFQ",
  "key15": "2jQ2E5FoxXSTCuc4YMhmAv8Sib2aZ9MytFaV7f1aAoVWcDGdobTG9gxEcSs5jGvwG1Su3Voj7Wfj96svX1nHmGqt",
  "key16": "4NGXth2b5Nzk58KX4NmTYBj4RYSMRvrp5VqMB3w3HajqcrX9vjTqVBqME1reELSubrvTEeD9apfKcU461yLg44dT",
  "key17": "4cWKniggtYerZDwBJS5U4wiLSRdy4wSy9sptjcvXXAhtrN9kzUzghCAUh2g4cYivqNk9NfJRfpsMX2b4oYwKjB1d",
  "key18": "24N5LtLBatsnPFNLR8EuRVugXnHLURoBZLvPp6zuDSi6q4fsemL7q63tDhmHDqj1Uf3tpd4sdYBMHnXtVynXPL8m",
  "key19": "2i57ZPfP2RwA3cgeXvbjBKmXNx7Ww2abNtCNuKYkfWbgpMDxCn828MrTNXhu8xMKvNzNZfxgA2U377BevSEzeuW7",
  "key20": "5mCXkCSw7p7WERQuVMAaG5zAmwWgFhw4uezdXTqeBdT779Fm7XnsCX9FPoyu6D7p177WX7GhgbaiVJENRA2giFvQ",
  "key21": "4zBkUpNjTfumnc26sZvjZ9Gu8njFQmQ7QMQN7UeGHdnmKvWrRDjMNyRXFAs6Q6AcxR7Ag6LyMmEyTzjy2ADFYnst",
  "key22": "pzo6VsACkXMpQKSGNajg3C24kyDAUxL5UVcb3eAF3xM8fUkBx4rLXpAeitrGJvZPd5A3RKgRhfoTsU7utdd62eJ",
  "key23": "3Mgu73mWjDwxPLauXnyr6nK93aoqFS6c7x5idnN5UbRoAsSmoc4yFsZeWTd6HmZ6duANrqmzfDsNzJQ3NSiNcqiz",
  "key24": "nG1senTurwHrYeWYTTHnKVU8GsdXP9wDDe2Ji7wGhKBRYqJanEmhZc7PtSSEonbBWvv2uCkdSR9ncpZrRcRAnT4",
  "key25": "SYwmWyQwwK8Di16HLexHzgEfKWKnxthE6m8t5BaiY2ZTVwvTduYMnRnsAvyiXtDSQNrG6bSfASj6FYRUtV3rQBg",
  "key26": "3ZBhQcSjCZZGG1rLd5kHt9pNYg6r7VWVDVqBKwKfZoVfMdQnxuzScFEUfrAuvvNcn3x77gTV5TRi2uMrfAHW258A",
  "key27": "2NUKzjTm1sVLekX5v5iucriLzaDayDxrwcYBsS43jnFe7DPqcYhpWALHHGeUiAyVM3GX29pk9mJHRHgGDY2yQEyp",
  "key28": "R8muWLepNQ4yKFeBP2hLkWkb4m4VsdGXtMtKaDHPtDGQfnqvNUo33nrGdfPWMR97hPy3g91Vq4MUqiHEZtdqiJL",
  "key29": "5Sqh3AaLwHhocVY1M5bVjZ52QeJmB6vb1UNf4Q3SjAaRAjgfx9wiGdDYqAaeDmFrQUvpomNMkYR7Fpzh2dMvRXb1",
  "key30": "2En6UpxSYwJmimDK9ChFbkVhvEiuzYdvgENDZMTNfo2KRoM7NnxUq8quvE9aYJ99ogg8NHBHeWTJjEQ35oDxEBqg",
  "key31": "5wC4RoBXsP3eTgBKyKtYpLdoC4f7ENq2obqvxwRqyhR149jCZoadUHkbxmuSkDeutiy6qC4SsWGanJQREXp3iNek",
  "key32": "4FCuLvKuY9e4oPjMRzWP5BAHKFHMNneSYWx8rahnTQADZ6bvup6nUdbN2eKmqTVYSQkbfdNpkYX7RP4juhsVXuye",
  "key33": "2t9RpYCibeVd7PViPZyKBjc3MmvN7ZMGGZvFLqFGTpE8XfpWKtokQ2okQtCx4qE4TL5qSgYRPEaC9eaK9wa3pHZ1",
  "key34": "5dpQHbDUvwb6rgVQ36acUaFt7SXWATkKpyqXZoMp9htDCJJtNuadmgoiKjdYncKHnj51nJWAxkBhDcbC8ASEm2Z8",
  "key35": "3kUxPYLiDp9CwoRSR4qPYi39QWEPau8vNFSiKKBbYaCPKDEMoTPjMHpYqGiS5fsnhy2C64iQJB3fG1RVxADQxAZd",
  "key36": "3Q36WFRgjzfNdMR682rRzHifzpLEJB4uaXiUsXmtQfU2rSqibPLjJrMT59fgGMWfHJ6yETvStPEkTojkAc7MqXGu",
  "key37": "2KkeTAhiTwTo3WBrkRSDJSQou8QfhPsTQZz5D8NnjVyZ4F5bS9UuJf6XNpEvzJtBFYqrVhWSP2vtTQTKknuNt1on",
  "key38": "5Zytw9GPhe524CuGUtHx6geKxa4w6mJV6MSthiSR3WRwnbPmdWipezJ12NTnzCx1TVuKQ2BWMsGgTmZ7gY67nkDQ"
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
