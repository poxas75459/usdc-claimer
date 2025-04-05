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
    "46SaH3o4TKXJE3hHH3mKjUwQUrikPmMj7cUmiv8bVmTsVJeM6DUZyRiXT7nxG1FcTQMu1vdF8uLZ1p3ExNFw7yt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1KzqdYNFsQxLJcwMQqbzdoeWUmFJzfXtbyWfJvZaaNAP33HT7ssEqSsjPhWk83A3fuQyLNtAcZK2y8tDSzhih7",
  "key1": "43WnD3gpCKxYNGTYwEoE35YkxjhnXBJv7kZepvTDbxZAsMruex8zWUTUgyS3pTD1td6rVukhBsKwNL5VGvnKRzQo",
  "key2": "28GT5DkKJretwRAv13JKzzd6SccENUrDonsNVVny9zsYaFw9kpDYarmaFkDmTJ6PdyUZTTpX79YicsdLbsqKgoyP",
  "key3": "2yMb9rtBUxVyCaneRRkEGjKiJEpqUobYQzuwBdcEzopv8wXH8k1RB5MCsK4BfK6zCGD9yiQbJYhNsM4RwRQivTeu",
  "key4": "5FfmR567QThefBZKdNhGhQLkBPvqxM9vbv17mJTyq7B1XkCEeqLrBHrhB9JyPVQefV2svNHvjXAY3pHSmhy2AGYK",
  "key5": "4PkojdnW75iteKZuyXNm21qgztdPTfDZiNq4AXLqUUrjAKrmMd1vzhqCBgMUSo23pTvkxVnuxJUEFNJ26nE7iYxs",
  "key6": "7fx1CPfmb9z1b1JZkm853Q1a73GTtA2cRyGUB9cx97W3yqybswdTwWgnRCNYmbpbjpjqv22zqv6xwheDh8XXiMV",
  "key7": "24FXhef6ABPdW6m14WCYup1zpRnomHE2RuTYYVcDgTr72PVmezBe7iLeCS6GsBH2LWobx64fLqS2H3v333acZ9cN",
  "key8": "3mMMPj8U1ssAF7oAd89X3TU8N9dyax33T9Sq7jVuE8SGKpprrtGaD5aEDBxAC2H3gEXvjM7K7oAf4xChnqReRiW5",
  "key9": "59F1VFktqp3g6VjzvFuKKXQdMR1AeEmLpSeBME2U8W4VgrkiX9iMrWk822V4S2vmfsNWwfG3Swd9ojEVSRv4Hxqd",
  "key10": "4eGpqff939B5doMqzuTBfh1GhX8c7kQ33XaodUN9JnT3er838tm2A6xjqgKsFpDCcLVz6Lv8Z1BaYfMjhsNNkhCp",
  "key11": "3GMgMPmdMGAbHJdooCFfPNWWoNrvfbsfQzXUfprCD7GjzszrFLrsif3GyhR4TKBokCPzPLhZfva1ET5d7Wbvtm7G",
  "key12": "4mqn63vaYtseFBw6peQwPpR2DAtR7JTKPebW9mKtT7w1HvUyTmNZ3Equ38qdSckebrdUL1zPD4dZqVvjCQYm94cJ",
  "key13": "LBJdzHQYRg1kLPSR4k8wFjX72JbJWqAdhVBJbNpmwdqnZFuFUnjvTVfYmdwBmPknZnHJrS6WZLTp14UQZVpazv4",
  "key14": "4Sb24pf9b25UXvtNQXwfVXEvckkNWdZ8iWayWYcFv8TmWFjoGdQrmqsLAHShMTzAY37UffbAnUxrjKKTbwCEkfXp",
  "key15": "2A253eoRxHqYay8KvGVXrWru5NG7JHdr2mUULD42fRknr5TrekceHqLLYbEgZ1hh64UYxNxU3LPqiNWZUuvGe6Vi",
  "key16": "53qctYVir4WTAxar32oHmpkjp4NpNWtJotYxTiH73n7JNzGvRx8XkxooagNqPJ1d5iNrLBYakb6ZqPxWXtHe2gmS",
  "key17": "63YsUfH1tqkrxUr1kY7WpwTkCRfX9rbWkWLpKcdeGnxbyvN6UtYY4fWbSMz9uoBZnZ1oojmPwFCNMtmjsfJXE6Hg",
  "key18": "4GxZSj43Xs4fCk9wFBppg2ZaryU5RXrbZPoRJZQCLqitShknw2Ez7hc7SnVeF6xjg1brCSVctqEQfHRwWGzh8wiG",
  "key19": "3RahQkvBDyCMKnXN8CruiiLdEGuru9WrvSg7x65r21g3yFFaQ89axVQEskTf14MufA5QpLKSn7c6P15r68tCjGKb",
  "key20": "298knP6KmPwE2zs2kquKRYmNB7PnFuxmiQDvL7qxykJ3G7FNx6iuj1FyHhmWbnXinny5CR7MYPmn8uqSTYKqMh86",
  "key21": "3Y7h8feA8fr1oa4NPUpnXyXgjSSVDmNsD1ijg1fBDgE5fSm4vcYjLrSkCYCEz6ATrc2v5GXuFXkAy1h1vUpks7Hd",
  "key22": "ce9TGzeseZb3Cuv2x2MUqp3P4oEAHGiTGEvrg4PCo4TkeGV9W8c74oz9bVAYfAGTFWL1C8QFWgBmrK1Cv5RGKxm",
  "key23": "2ST76sDnXQWTcPZf1DyS3kt19koYTymDKZMdqpQsouU87oxyV1XjE1WLsPFoy6wb7h5ZWjg7Y3mRTKG5kE7o7FMT",
  "key24": "35RsC8GeLarg6YCQA6PaVwiFguKG268VZY5zhf4GhTVJaHsMPGY7rCGLm474a4dPVm7ZEnxeGuzf7YdKkHoDNv2Z",
  "key25": "26wG1XiuEy9PvX3kvLsbq7d6Dvh52EnyDoAQCp7YiTZ2wTdAiPkQVhWC4sucjuYQDgPQVJhZpiikcf7EEZ3H88V8",
  "key26": "5utCFiRjPEn3kfYKzgwRoWuBBEgRjatbBv93L4fKZ3dM6BuQzY9oGtyHxF7kfTsSZUwHV555xdnmt4wBMSaPyov1",
  "key27": "5SbMH23UNdyDybuV7bXFGvyutuykAA3yzrXYLQPgwho9gpiVVeQFgzovkFNodCibCBvaHSbp7pQSPyid6XLxP8gn",
  "key28": "5CZ9JijcVxHHT9Ri5WZiSLhUdjkdfmwmh9hpAydCVq7H6YbncDxzYcJAmNjKogjgBH7diLghmeKaJwt5TJ2UQ4Nn",
  "key29": "2z9H4c186T6BEg3XxemDCqmR2fHKCNNarA3UC2TVtxmMFdKDNTyhdDUoCqrn3iSnp4pWqudMVHV3D5RouqHNFU4A",
  "key30": "3ELKrH9YyN8aabiuV7GPMu99efpCr6qweqhpSmsD8Se5CJXHHwVwLmKZHakhnAmV3zthpKdQo2En4AYZAoycYTT3",
  "key31": "22tsMGkbvToPk4qURNf2Xa8UoGn4n9cSStLruCjJbKkEqbSTp2c67UFvFmRGzQa1KXtdNMyJsgrUqex8C7qcm6wT",
  "key32": "3uq7ZZnHz72WMnS7F41aBZRyjp4kaQgZCaLp7U6bmYaB5SkkUuKcvwqf8rqGZGpDEq4uUhybYY9DF8oZcPktBd4c",
  "key33": "2K322PodSBnLvdjptchbSwn7x9qe2pnQgD4W1GYyfkcXiqmVfAb6VeUWBRE2trwSsXU5LDrPDh5TC6gU5u3bAH3c",
  "key34": "4UX2WyKoBgCTiphGXjMhs598tdwKSV1URyLFoFSk2EWi8kv95FKqU6WpTstmAVAyZQCYfXW4MYYFAcNeTRxBKX4P",
  "key35": "2WPSP4bL11FJL4b2Qo59dN49vQQGohrwd5XtPh1ZYVaR4vYkcQP9aM1utsxvFoP8CqhRCD4sWbvZs8PA7VebTnGj",
  "key36": "3scCcGG9NPnbriRThZ5AGbKJoAdecEavFFiLqVhH2dtC6iBFSwmu2BC397xnKMTmNKvjoDu3FqAu7XYR6ZiRg7nC",
  "key37": "2P2rBPRotub2JwxeiUi63ixmPp8gbCMNDXTNCzsP9rWU8XTMvrLNoZCJHcpyQD3PcT6J9Wx7AHmWzSn812C7SCcx",
  "key38": "2VQfmejCFDfSzGEe8ukuD91xeS7Bza2yKqJMKXMGfPpHB8QfWKrnVTNqXbPBpDJUjNnri9XRNaWoNLyoa9wcjv34",
  "key39": "4VLkAnSsixFtYk64XassBGhudrKBHfVE6LbrL9iD8peTzLSkgXGanMLts91eU4SerSwpaKArrmG7Rn7UiWD7c6Hk",
  "key40": "55GEknnVCRMbyZuDyXj9oQQLyegdH6oaZ9nu4R38umFQ6q62q8R1ynVVEitwi5xwxk5oeEP57KMf1V5RXphHxsLQ",
  "key41": "4j9n1gwJHks8hofMYV6y9X4336UWmrHBCdFwPYkfEnQwAWyjs5NMxs6S2ANb1Xg7SN8op5Le8HHNst8UzEEbRYfi",
  "key42": "9cqcsyEY9sGybHyRMHHF1so1LdtiZndaUU2Uui7dzRG6oRCiQjr8keLp7yhc4kqG4dTmus5ZLN3h4sY2hp2MnxU",
  "key43": "54edJDAV9TZfpiLeDH72tAprC6nLiB8J1ZjdJfqdCB89jfyDSe9UV1KiggdfFsmbRwxBW6uUr9LGhSzHvt7J2e1J",
  "key44": "62z6nijd8n7Cq6AXNxH3Ae7EEbZmm4VT7C6iKeKFgSDjeZzhy4sxY8yYEJsRkyvvbWPXspLuyiooS6DNM7b8Unfd",
  "key45": "64v6o7C8xjTCrBu4QVekHHqHksS8mgGZWvvgmKQM79T33oTysZxw8ViyXpSscxisb7LXVzSTnamv6kADjrG7AT56",
  "key46": "28GFiV98bTbdSiBNeW1U2tkcqYHva8HWpRmoGpvAJ3NaG8vaZGLD9Q5pykpbcvw5bRfuJ3fSknpY35J11KYpcr8Z",
  "key47": "3AEcntnsJhn6yTy45sdPCRrEvQUnMAtYNieRpUF8ie3zb4GoRPHg9F7bu766AEjy7TuQHfqHzTEWrreCzeE4D7ro",
  "key48": "pBtYsEnh6SuN2tMcJeMkViqdGzLDm4VAQDJBQGjjHn1pXZcBFzj8EdM8ix7hrYtEhXGB7RUyxKfLvkGn74vjN3P"
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
