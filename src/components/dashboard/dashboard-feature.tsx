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
    "53CaH7iAy96YpM7AuVqebndKMHrMttVkKTgPzNCCKzRPDG6eG5bYRoXAKgP1NbHVyAo7VaA1zJFjQQ78JYnrUXH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JeWMCybxJ4Y6qhUP8hhhdZW2dPTrpNYzRju3FgCLVvourY5hf9fYEcpSS1Erimc5oiFajrNNi1WEyvtmnTYn7x",
  "key1": "JB66CrhaQGWAkUdGbVZoJAyCDF7HNWYAsbR1YPrFthiuh1KygC7q4dPDJoCLXE7k5HGHZKhX1zpv4mxp4grvYDS",
  "key2": "458xQbHnFup1fBGej7uHjxyRynrdtstGCjnPgZiczBD12FLgNU12bcdeSr26qupu7vQLUtffHVog7ofARUE9Uupd",
  "key3": "3Gi8TFbSBwqyGFeUa7DUdnRcB6g5VUwrAssn217bcpFtirzwD69zGP5z3XreiDijwfYxqEUyv69gZYrMXxi9sstW",
  "key4": "4or1Q4pKt7WCcPfpdDcmho9cPBfMyZKsH1iMv6GUkknyyUWQYHQsVpAXvTesEotj6AQh6vv4BxoxQheNZsu9BGtg",
  "key5": "3gwiathwtRUdmE6GpRGHLQL9H7dkrB9fFtVqLGb9BGwSdc1VfRgooReYYgs6EX4txjGEHGhHtmDRJSFuvC3JBekc",
  "key6": "5SqEM7B1CsUXexsH1bxdoV6T19ACVVWF5oehbq96HhkSoCPzPKJWkSC9WCh3eMnzACArTa9jHTqtW5mAmX1CEFBX",
  "key7": "2DDGDfsQ9vV62UAKYuta64LMSv7PtnFA6nURk4Re1E7NFB6ts2cpadWgAdNzKuf9AjWuhX7KE98uEqZTQ91X58K4",
  "key8": "21KidfAtxfbgKgrb873HEpNzqu1YDwQKaj8sSArBazXoYqmV4zTDo3BufjnRQDAeBHfiBiEnWggUS3swHCK1Vyuu",
  "key9": "2ppdZcVmGSmo3GWXHDhsweGixUU8ttQuGwgqJHVGFroSJGbkVyQGG994arhufhYhfTAtAVeS7y5pA6p4VjabdYox",
  "key10": "YnzJGnuzo38k7URe3ZhiXXE5r2nTGtcUDXqELbiJoegbcBz9pKmyx8HKQfZgzpHzBpEfURCP5pjp4U1bzE7dB4G",
  "key11": "2a7bZbCpp2JPbW43kQzKBwTVJFyXNE4YTaoZbwkBgUEyCeWELRKLpJDB6Rq6eUEtWjBZ1KfriNoYD6gviXuo29So",
  "key12": "a5SZCvxH3s9WBTfuWDtWcC2UCz3bMpEuvZwDiawKRPbUDwN3XvTkMWB1sBjyPDyyy3hHgq93JFBruGeAdfNBpNj",
  "key13": "36TUQTcf892CfNKvBmW761ahFvFFpS1zLYdMdx6TuGTXrENvuJSFCpS7BqDe3GSHujc7cgSgL84KbkiALwyCxU9q",
  "key14": "32dAVwuWXEeroY3kxqMZES4Wymnqy5xSxVNuoxMsxXpezqfKBAY6PJU7RcKtR7NtUsKCk1HdbYML8LNFcM34x4FP",
  "key15": "4p2XSTCyRgUj7rxujRYfu1hhqK8Sa1jtf5jVK3yvPXeWfLRyRTvfbGUU6w832nbUM2hGa7RRiDdjkTK1K8J2uN1Q",
  "key16": "Ve4Da1fqmzGdyR7RtcpadtUUFkSmTopfFrKoDvpfiyHA2nZZvRWjAAAY4RBPcptgk6EXvHY8Pd9cAVuU3bUTXSM",
  "key17": "38dSLFVaWPc8xPQF29J4h89wwQqyYCogNvwqfeajpRAUYsTaKojjuhCAW6qxkzHe18jawo3jDtEgxeApGU65hh8q",
  "key18": "2bKe5vfRYv7qCVDPWBwt1E6ohGSEeJSWzW5otVUtniFy6rg55CoaTuB9K5MCeYV2RyjRQxPhCeRQXufng83GZe7g",
  "key19": "2QSiBapK2xafABSgwqjwTSAk8K9dDTVGwWuDqjAWNgvFYwgvA3cQUEhpDzKUFhe9LHGVxAEashmJHKNb9h5zeSSc",
  "key20": "4FQrpbnZaKVqJh1KXe8B2SvjTHZ4MvoXiiEwn2MiKmQBGRD8hAgNSYKYMRY6cVmm6qHFLSiiZC3viJKrciJHhXzd",
  "key21": "Uri3TyGQqj28WUXzcbVHKjuNCcyNoB3R32hYF4zwxqqcFE4b3xmBhtWsm1vArukJAchM5UezLHXkxKBomAEcsia",
  "key22": "5xxMBK3dokxJBc91igmGHM7TAazKVQBy3GvsUA5479zMxGYagSJgajXYKavQGDcArgBEXpHxTsDzqTTF9uBH4UeC",
  "key23": "2N72PLFRjc36gpeapniYHziXcLKrDmw2zYs46LLgdJ5DBX5SBMvTbN4kYwwpUpsV664SGmnRxRCiuEHENC1Rst2L",
  "key24": "4B6Gvnp2ZkvAcgicY12vYsAea4wP2mZa2GRNNmQZZxBLtLqcCmwDwjwo7SHcNe8DHbXy3NiQ5rS4L3nX3GnPk8Yn",
  "key25": "ftkzYRgmKJ5PvagpvqkX2DCfU7uHESZEq6ZRXU7XwaGjdZMEH64KEPbx1HfFzDxz6bV8vSn83k9yi5W7LBQEWRb",
  "key26": "2oVnZAv1ypc3SyqqKRudJjZFZdAPHwfQjMjHafsrx7bauX1Qco8sJLjyhz5K5XFTgNENjhVZzAsmQepxoHqns8gR",
  "key27": "2eYCA5gPEPMCPhBMNC35guYMebeKxTzeE5S6WuBYimjpM9rgqskAGs9quoVCkEsnSe4QMid7XaWwcAqVkdrjkqLG",
  "key28": "2ENFbmrsqC6DH3TkXYcYRikbeDnMU3uAL9r4puA4yi2csWksBn6ZPb8wtSgpjfANkDXTTiE5MPmH6LaeCwKNBRwt",
  "key29": "2qwZq3XMCqJQVGG5efnCJtoK81nDYYD1GoFrFnzXJ7sksbhFuih3yTFmDWUGs8Hx3iuVJhpFjLev1RZek2Zu2EuT",
  "key30": "3GF2ZVHy8HYuK1QqFgXZMwKmT7qN85CTU6wXZCXfv1C2gQ9NDsPn6h8QC419MXr85wnuEKexUyxnQoFfXRzNWKdm",
  "key31": "44M9TVgshAjjjvMFB7BEhRXN1UT7bpTXZG9bcmH5HjUYvSXBu4BLW8bCTSzKuTHJHwYsmJWeCDLhjUDyAsskKVcd",
  "key32": "4brjpQGdsLXAje4GanLCRmYvQCNpsek1zDCwBsRM46Jn2F7PZLA7UBNQsr1mZWuTLNywMQyv1qLYYtVBShp596H4",
  "key33": "2iAUhQhyFkTHwGgu51UfQXevp1Y7r7NdvV6uz7agYBi7gyhdAhuT2bHyNbor6HACXY94WV3x1xApT1mKVt5AxvqF",
  "key34": "3EogU6vrcYCxaNBZKjh2ikJN33fbo8KmEJ4RTfsQiLt1VsjiEtjcnXVKY2QpopmEZGFq8wa2WFdgAgy5EFdKgA3H",
  "key35": "w1v81udF6XeGdriHhEkAtuW2ZsDG33XAypths6o4zC6HJ9AcBjmKTkoDB5XYuMEZ39FqkiZn3xgb5T6cQofM7X4",
  "key36": "5LhcS41J8zWYT6aBcBYCeXiCcVXtPRqh1FkFrtZBj3kaSvJZXtEZSdB6ti78zwVRVxAqRu955gHgZJjGkf8cYmQE",
  "key37": "5FX1zjqwPvAUFbDJ4eevWPE9hiQePUVaizKWJUEZKAoNrCkgHzv7AoT1MZsXYova8fMr7868GEqjqvLwcjsWLYcu",
  "key38": "35ZbxAQ3y4ytyU9EA9XCJrmybVTZcmgVsDCKdFpAcudw6ARGMNn6aEu6h6FLXGMzxDnHdniH7uPpw8oaTW7KoXgT",
  "key39": "512eUzNRQkiDBZTUi58FTJcdCQVu8dbaUrxB18V1Kp6PtCNdXFz3wcittk6PqLXn22hu9YsqSSmZJvXpFyCrxspE",
  "key40": "5ef5ca3rm2ibKUMGuyVecS6dMF4sUhtc77qRTw82VjVRx4ZmUL6NgzP6DWUbK3xZDZ36Rw24oc9kwzZ8VbhFNveW",
  "key41": "Drc9jLVTiXYJr6NLBaLZKG3tKf9JogAmUcCKehRguyqJQtA51uouMDHVb3zeZngucbhiPuwPUzHL6WeH4BJ3xAL",
  "key42": "QcsJSEeKee7R7Foar4Y1w7w4HNAyMpMWU51t9JhoArbimDkfaz5cRabJEzptKFBS4q7V6JGvFd3J7gEfX6eaew3",
  "key43": "2A6e3dxo9tquJ7QAwwRqr1JJpRBXMVJ3Wda5t9y6UG7KsYmV9SzyUgk9dYKFbtHd74xD98reoSFEVZdciGPtBPfQ",
  "key44": "2fqznj3vP6X9ZN5owPbsSqcWfNsFoauwJzw3fdkWn4pe78XFkobkdv4qxN4nuKswbpUz9yBspXb9RFLzHEA27B4v",
  "key45": "2cFWFcjeqsVNXvWQVqsrZ4dBhaU2jzKogQD7bsa1xHAVCHjsjPABj5MiLkFN3FgY8PbJkE2dWb6PKGYZcHAUCmUK",
  "key46": "3M5xQk7CgLjzEBCtK6LAVhVPrrQeeHQ7fPao4iEuHPeotaCRcUyVSM81cJe9fD6S9AG8QpEBVDWfTkNFbHRELyq",
  "key47": "2hiJB2tYiZk9gWv9QxWEvVWf5pHXzuKtnJNPhGzpWPxf3cE8BnJSxpJmMnN3f9SWzzbf6C7yoP8iVKS7kpBBgSq1"
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
