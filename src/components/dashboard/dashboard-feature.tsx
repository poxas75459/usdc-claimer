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
    "3C3bADE2VbYZuCn9WL1BCFbGumpH5CCrJ1mQoTGUJDWZp5v2pd1pTStjogs8cnUCFUsgqtJ5iSPck8TQWFgbse4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDDNNXxhNARfPGaTAkc4qhNcPGjffeJvTcqwQMg2hYnDDsWXSS1j2hnr1GDYFk7MG7DEiPyoU3xBtzZXU5fbt52",
  "key1": "61fPqSMP21yrvCcJA8FwDpXWeXJBEo3xcr2XuFQMiLbk6snEhoeijyxGgJ5eCgEEpkV6hda2vdAiLSPhkrWPVFNF",
  "key2": "3qwJsKVaurNivKhYRBE9L56iHjCq3bYs1J1ns9jgGDeeTA6NRsymJ83GfHtfQAL89YaVT3uVi5rtexFjJmLhkhvp",
  "key3": "3kQXxp6z57p2aDWw5cxv9iArVwghKA8Jn3o4baraGm12SP6a3BVJvFP2diX1ohb9JjHDchRe15kHuE4Pkb5d5zm",
  "key4": "ExwyFaGjk5t25XgLqD9yDhKc5ztVVYdqA1jQcgMQfKXk6RST4CmX2WyJkpAPGKC63d4pcziRzaMQ3jbNJ5d3Le9",
  "key5": "Mgwe1n7ncu29aXf6A9mvPQeMceSi4u3YMCF7g4uJavAtFX2JxZTjQ9ztycTGJYgSwWeFNMhwpAiy6e9o86AzEYr",
  "key6": "4uuf9LVsynBmPbBbs6gnK4KGG4oEC7rqy4Ce8io3M7674rg18MfcMv56WyqRgRshzunYkMfSCZRyBzRcYTeYDSwG",
  "key7": "67ieMM7KpwEJGvBjMwP3ZY8rY3g4xbbkikdNjwND7dDTK2UinHdkuopii1y8uNvbdHQGsx3cLBWG5nYGqdQrM6XW",
  "key8": "4GF4C9PrNEJuEZvZXGkeNnjAWyJLmmbXc4w5aRk1VxhJH9MGdUTqNKUrsDGQHYvrAre9j4RnqgRPTeGUMVyxsEMe",
  "key9": "3uHbNdknJ6GdVhoQre4dj4X7sNJ4DZngmMYtAPRGii75Z1zbDYhHemw9LrWgNKwBfgTanNQFJ8EXpd24yLYa21Fc",
  "key10": "3DZZ9QsPawehVwy4TXNbBRRgPp1MvPm7mMhFQPpebBFkSmbE5j2kZ1AKD4QKXbbDKLVxKBK1wB5HkTCpAYVrzM23",
  "key11": "5gRn1J69FPkLy8BkwEz5s54sNmifM34uVSQTotwozPQcf8Cey7oWcBMk2r9ntSjGEcxZdWTbrFsXZhAjE4DierjX",
  "key12": "wwrVd2bVD7hGoMH7YW7FCuMcqMmiiFDC62x7EywQKeZStTiBmKdVpUZnkUvfLgx4e43yo3CDQ3qP2yF4EtaSNUe",
  "key13": "63cCYT9YKBqAvmijayGvSHcqMvTuZ8sktMBNHExWLridxZEAfM6LMAEJY5wAjN1AhuoVJA1dUJjmCzM1cH6ci8wh",
  "key14": "4DT9LziQVa68VYcsHSqcGaSbmpiCKHyVk6LRXGij4kwFX4B2BD1BFRKmujsLg1jQuP82tedZdKm663fvYGZ3Sf4n",
  "key15": "5CnUCnGcTuBVNQW1W3hg5vMcneLqqRD2cwA3Fj4J68vYTHZQbB3JWQmpFxXNL6adgj1h3PqkAmayvco8PHXUJTjd",
  "key16": "2hV7423iEkNzVm8rB2WYSbJV8ZhJ3PyDhhqkTv1gmrcw8PXpXeACeEBYPzwWERi6VAntUZt5F5QrSXjVKb1sPWUN",
  "key17": "48Skoqtw5u5zsz7B3WFnPkkRcCcMvEBEMds5WdSrexRKs7Ev7iMj2WjvfywNLbiSAvTPeQBu4z17nwct4F8aedYs",
  "key18": "mvXy25jsP4etMBLBDMroxq3hGc4ojcLbDovATsbzevhfKXHTRasJetuGRn6ugwELqKsQXh2yJCohKkfSMeHffaD",
  "key19": "5VDUA3QX3R85qaoNDNt1cc6p8ZriqZ2BF8D9Y8FPpn9QV5TBkmEYYY6vx1SgBidf21AAZdQ7gsVv5Vuou1CKFzpj",
  "key20": "2CKP1DR3E542Rugf4xby4EpSpKAH6ejNJmjmpdYfSqtifVtrarJo8QGfHofwTrnLai2ckRUrpvvDeM1HZBaZMemb",
  "key21": "5NtBAqZD4G68d3wh8L6FND7oE54bqo3uJpviiVss5gwBsqkRzmKF4L4QnYhzppYdwa6YakLABRuCS3LnWnmkyKmC",
  "key22": "5Y2DEPAxyBNYVGo4LnXkpcPpPsEeLNV493Vfs6Me9dQJgr5ZPL1SdXiqm6qk9fvQav7jPWFEcqz2wdp37VGXVGRf",
  "key23": "2EJ8tckLEFQn1wMo1y2FnU2KKHaiAFi4kVjFNKkzQRuh38zoW7ARfMj1h3tVnRcN4fFywejppY4vcw6mqKi2cA22",
  "key24": "4NwCqtJbiR6xHwiWYxTZytR461SGrHJsYxSpHc3cXkJS68FrnuMX3J7TMpzB5iTjujsNwKMr95X8dFf73AUSFhRk",
  "key25": "42MgYimB4ekdPLrjj5YdkdGKfgFZhT5Xh86JSyKKXSDAFHBHwYe1mgTtcMhA8EWNkq7Yp8CGF3H8v4zbayWBUQtJ",
  "key26": "4xwZ36UD1yHGTMEcWbYWBS2XKu6FiYp98RXjXewTknvoCDFcf8Nm6Q4MUD4mXaLDbFiyhrFQ4S8jwPcYDSwWJRix",
  "key27": "CzrRKosksGGHLBWB6W1bmhaLkqs3rfzH2kQbiVdhg9V4kpqoCWhoJMknn8cBcQK31PySkSMwLtCo7RHwSohDnFC",
  "key28": "5KnLLiy86gLjnWLimttPNukSEW8iUFjDZsBE9MQR2yyciFbjLvMoE8TXvY7Voo7kc1WqKd3GkSRZnbqyznhffeCU",
  "key29": "3vAEfW1rjAfTvNrHWKfNeuVFsjiZxgXMUvVgELkvvWRz9Ju2raBRBR68FvC6cx3a7SrNJUfnNmxeFdpisZHZC8md",
  "key30": "becN9RMqzRNazTU28aL6YXctkyuTFcP3MXbDLWDj6h4gAyhb58bSWJzjZscX3d6RRWNuL8hUzqpssrwo5Z2CBE4",
  "key31": "2t9m54K3QCnWBiGRHPz4yHaSechcQ1uR3oe37z8Ed8pAkw1PHpXgAu6bHMwUMe5trc5kS5YD1EnisaihcsPqsEgA",
  "key32": "2ojj7VxRaBGZBTkuo58XJuFp5wytLAUTBBEEsXJMiVvcbhy4s7Q5udHfJTVJG91HzDEhvN43Z1cmFWGriPsViaSc",
  "key33": "2ooN1sPTkHxMofyghGVZza6xyWvD12qtSPDpZUgK9pJP6s27hoNNF8rUdcRqrbg7uH12VPWJ6JZhC3NySDoztLZm",
  "key34": "4dxBJhvF3Q4sQGtvVFhXWiffXCGeqMYarYb56BfRSJN82TLtXJJAYkuChT63LBJPNh2FZch8ZRSqwprjJ6zVvDrw",
  "key35": "3yNFxWbPe2eypmeP2DUExmWUsb9vAS9aFokDewpTUwNjXAzrxcV8oqwCZkBeFQbiMECxT22Skze3vv73SfnNRBso",
  "key36": "2MqzEy1d5oYgv9MVqccBJLsdR3qwbpKgU3eo9yXmeNqitkBa5s2oz4VmhWR5qgHvTvjonJ3sdRHyEzL9N8oQ19zj",
  "key37": "sNgAS2QzCEzEt2MHkr4SEgkgCDaBrugbteN4wtbM3ZV61Bo5eiRsezheWnHr78nRnH3WNJTwMqVDvj33k1KdbVv"
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
