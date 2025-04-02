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
    "4QyMgkFg1QJgY9nUpKhvjgE76VaMeXkjZaqMfqZXEizTi2ahTT9gH4hegsapvuC7HgBNR7bj2zTSYLyvrdQeHW3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beykT1zSQd388dKmg8tfMfQ6KfXPoAJYT7NaaeSTz5DUCYtUBcbmWL517m4gCVhNs9FXfXTZ5eqTDdr3HDLmFjM",
  "key1": "QiESDzFvr4kKcRJHB4vvLmwhShUUgAeV6q6A84wWzMaP5ri8kJLiKWam3fr7scb7sM7JNy75rVRqzKK5EqgFpAM",
  "key2": "AawVBZWNJ6GwbZf58nF6iJQwezj6URfxh5asFe7WWvkfASVnF3LLBZ16JAwDFY4yEeCWD4fu3y6YRekkc7WNbn7",
  "key3": "rBuZtKE4N3BccYMsMWhKQHe9gnY3S51U3kJK2xH6hh6hgtpd8FSzPbPPbnYCc5DTeb9HaVBeWSVEAyj6tLnwj7m",
  "key4": "5xGfjWGTdiXfXEGiv8phgBAvJ6KG8Ge7S5J6jPQRR8hTYzqtagG7rm4djS1CG3ycHHBWyLNMbjCmaTHtaZ5Ev8jx",
  "key5": "56NAMEk4bbv7VZZzHrkWQk57iWv6hqp9NJg8GA1N51gkPZcUMTcpRcvTCQbVYSdKL3TBr1BxUWraY5oiyGBgw8AD",
  "key6": "5AgnrARWke8pthfrLzQKEnmsFhki1zevZYKhyCU78B5BQM1NDKt6bLWg8evVyCGMcJb2GCQwFgtLPYEgGyejDvsG",
  "key7": "2JTvqNaeNUbhCAZLUcA5AS61WeJLDGWPbKooQi5mRy2JsRL3TZjURMpRaHeWJ58eJfmxa1EWGAYEP5Xfx9z1zpKV",
  "key8": "hm9QgXPAGCaxzFeQykJ9Xxug8ha7ZLHjMWAkGQ2Ty9s8dUVs3bGfBo6Rgm6bYT8kqDAUqUQLyTPTxWqiUCEGe9X",
  "key9": "2mf4HdvauDzKg7XqZ7TtEdjtoumVs3jqDZXJh1ZHKQSc7wGGcUPPjeqWanJNtVwHkPtxK1YrtGeuh7Mb2GedNX9",
  "key10": "3UdavWFbcHmg9zZjmqwaLrbbdd4epin2UtkxJPyatrgxBvJNDZV2NMHAXXtuB6q3keAyJofpUwLS6fb3PGaaSbTm",
  "key11": "4mdf9ddNCnyvhGq9EtxbBs6o5J3opc6V5xMGoFWeiNvXkUL5R2N59tVS1DKaKeXdtkg5vUpUj276KJkG43aQi4cy",
  "key12": "kwZAdD6XnvxWqVcf4cg4uscdvUsWW9tttUqquMVHCoS7CR7b4Sa5xkYEmDf9Qg2DfLjR6BskXu5subpxvm4Xgyo",
  "key13": "7zEHftv9Cdx61eC1jiyJgU1VvNUFGvV8xjo8Y4r8hquUbt858QA8UyzFfF36tSBtWacTXSV9v7KPhJPx7Tnrq3Q",
  "key14": "FL6G7WGh4cjdzSVwSjCkVSaCHwX49iYyojbk3oPPpJVmag2AnHUu6Bt5tZy4tNh9EtaonnjAdBjhrnckfTKS71F",
  "key15": "2goGusy7damoUf5sTnDTuPXNZpCikRA4UW6GNSBdCe8SKBYVpfFik9ignDooVTAiypfAUDVU8rpNYSPvmhtqCw4J",
  "key16": "5T2dXo3uCYkGcRRg1NNjwBUoAHzw3DnbTkLAkKpHsR9xGzCa7DkFBoyHUkjJ4sorzemx5iHxvQJ5ZcXVZZz2TfFf",
  "key17": "53XnZPd6kDsSQ2dDgWo72CDduYf5rskxbtk2cQCGF2RHzJEq6sXmSy11TouZW71RT61oDTvf4DgxzD5inmwdP8t8",
  "key18": "4VPzApdNJEop6SBXxuN3RUyS1nYv5tS33f2FmX3FNrYA1YitQkfHWg29H1pH5EEFzQSkP4pLcXD4vwTLsvcypZp1",
  "key19": "jrk6XjJicfi4Ee8Lr4tqBtfBs2s9bUTVw1PDvFLtypp3tEcbPbir13GmxXfecmC1suETTNrtLETuqmWehndFWA1",
  "key20": "8m69P9YYbcHkjsxAhkpX7tdmPqUn8WgDySUfoHRqe4Bbt6QsYVsStzdsw6mmQYbCv4F6AeiijVHecaAeBLgR9eF",
  "key21": "iXfc3Lkojxp1DeYex181zgZBLwNJmAjQqUUAANM16yKXPHSwVUVutARkr1qbCWpsAUiaf8HxdB31cpCTpQVaiEj",
  "key22": "2XgTi93Fjx3dvb3akiM1NeCTGyNkNsPTWRG5WRbdUGTxQhQZjYnnjas3HQpzKCqFG7Mbyc1g6YzyHRJke89BHwwP",
  "key23": "5YyrNfu5nabHVXxf5JBERxb3CBQTV1NVj3jTG4F74E6uVid9q84QR5AUY6jQuKcPCSbVfiRx4QBteQNREj5viBEV",
  "key24": "4ZbrY4ZLcHyGKi9SMo62v6mCA5aev1ijxaZdJSRGGTEqtTkayCYBMqYVP6UHJFaZJWSa1oqAcEXToVwL3uTGgDpH",
  "key25": "4CDnKqmHwSo6AVDqAnQhP85JiitR9wiLzPiHwBmXdJGm1KUaMPVDSK3gWvQAnk72gRbqa9KCcgfeUvXe3qxDWo4Z",
  "key26": "2dY33GYEJcg17LHpE1ev5FmsZpf9A11mC9rBLR2JqxUhyC8aWvtf9vtKZifDtCobbxKRzoo4PSVhXvFckHKNChsE",
  "key27": "2LkjgT5QiTJRw8fXyCMeB49mBW66trwWkR4KLx9LapRAu6yzSV1isMg2EnpY5Craj8XggMzy6e4W71aqdsqLs4W8",
  "key28": "4FPSchTHAk3q1AnuH5kVH46UniBKdxottDkpsDLZw3ixJ3JgGMtDWnJmerqgzQkSfqFLDrT39QqBwDvPwrFycvCh",
  "key29": "4GgdtdPDeo2RsaDPfxhniEGyN3TUwoaGXpi7hfLzqSaUmw6vHqYGvFWGRzoSDgDky9aAcyfTwcmeUzcPF16w5Gdu",
  "key30": "5ysaRAn3NW6pcpETZLh4mwC88MwAveQeJeimmWGNBg6tm3Wm9tvNMA5s35BK2BFmpG59ZVBF5vHUyeFm4XxeK8K5",
  "key31": "5eDsBZongqxzA8NG87LVQoUXXX3RHZ1GJfsH5Xh18qEgJkLqRLTCL2Ly8pWQrtnXNoDJPJTuocjMZxS4oq2QKf1f",
  "key32": "3dgEF5zmnKwWACsg4MF1bkbsDMrMs3MronRwun6a2Xrp6RackdLNaf45jfpeesneWo2dGET7Tdwq68iJEMyfuv2a",
  "key33": "62NY7jVoVAWdyp3Bh8nf4gyzUvX1vhSjjRwdr3zp9qi6uFLqhqs29myPT27vYUuZK1uetyU2gSMTKt4cLoscaFkh",
  "key34": "5dtDcFXWGmfPqNEGULXV5qQ6JVkwX2P9cEQ472yARhYg2hK1XqtEQ4KjEvVku3TJ86cAU8MjzSmeFV8V1hahStP1",
  "key35": "2KX8qAqonwDgUE8v1J18jAyAkeBQX621YhF9uAeZi5SW9m3vNFLxJyoFMhQbanGnBQ9RLZ4depKEBRTwuRqvDwLu",
  "key36": "4Hk81vWxKx7nVF1CNky6Dym4Ecem3MRSoR5tCpUwK4NaGYHu48YSoHJzAMRmT8FU4GKnUEcoAFgrspBHd1FCYRuL",
  "key37": "2nTWDkmuSXhvX6WmtwQqoHSLnCipDdpDT236MQ55uiyuPCQuFGi9WcrWWMiaGAbMco5pqgZcSv1ndyBLtJKU9dE4",
  "key38": "2BCkQ5TT61MF7BDGrsVCKoNDy4YZu9q4hV7UmhcvLtceuuZ43z8sHsDwXBqX9YTZQ31n2Eb8hb8SvnYwbBhSivSa",
  "key39": "24X17UAk2APFuWa5SZH3pYrc2RKP22b4E2rUGY6QPzxuEZQaUCWN69gkxGN2saTTukdN9RZcgLnZF7WDDjpjD6ZV",
  "key40": "4JUv2dngy3MxrDgiEXjxjBz5swdbPPcmdJACjHHR343ALM85cPwdvLZcRFDicWVP95A5X1bHWMKKGh314mC4i5vt",
  "key41": "2JytwLj6hVciz7F5Ea8c287gvQQ94cyMeGtYrFs3N9rE9CJGt9rYiPz8cQR7SXDqxH3KTXkUCqB8SzMn5zVjShq4",
  "key42": "3umYkmx36VvfyVfvr5CmBCA2VRXWbxyHKYp7M9hDJELt7SM5m3jvbWHaibMWxjBjuREKyjmb4NZ7BXFbazgVmsFW",
  "key43": "3FEa86Am2MmRfuMPio3WF94tSVdi5n5gozrPvQPRWEGtNoME7Pv6iCc5kn4oC4dsKjVJuuXgQvopYZyQ63NF1xPJ",
  "key44": "2hmd5fVkMHjRikjcxWvYBUxD6uLy5wYP86cqWRXmDjhqYojPhEHoZKd1gVhMjXvT5Ghcq8kfxUuxQ68mC8XwrEnr",
  "key45": "4raycLU2WoF4qaKp61VLa2BKzZpRpR78p7SnyGrGCwDimoRfVkYcsdFkaDuph9hwaL8cn6Xm37yYtktBye4yiZdL"
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
