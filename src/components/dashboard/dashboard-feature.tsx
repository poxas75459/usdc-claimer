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
    "7sVC6dYfom4vE9Gr4AvFyAh3YegsbFLDidjn2qRJxoduXRF82mLnKyfmDXWQkZFQkJESqr2tK4eKTVfcNvoQ1Di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jGdGkbZqwhmzUmYV4eYz2ad2L4Fgs6iEDbKA1ATwToxB6uf65uX7v3BJemFSvgf76eLPPDKDovjrQk3pvXKwdvQ",
  "key1": "5JMmEmmJPg5izPjsgpY5pYiA5JJgSdDpidANU4heq8G5awyF8P9rGZhB2yNpcWat91bsEFQwoznraxwq5hxMhpCd",
  "key2": "Ryj9Qfoh4bHzZFARWRRhyLaW8SY8keHAeja7RLVA96HrHWKUfQX1ZM38nGZgeHmMRREqkN3MaWQNK2t9qmPvfTg",
  "key3": "4p4eqEoCu6GtTH1kckLT5VPiNh9RMV1rbRk8AtafX8Xdm8DeedispgcfuQehfTw2RHaU5oYeooumjbJGJ9HooiY5",
  "key4": "5c3kpSs5wY1DM1hVMn94qfu3XySAoxLDLJpGmUcwS28h8yqjFVbgNsmhwaHMTa1xZ5ntPmjUhscs9sBtwUeDw42F",
  "key5": "2U4coZYjjtq6wwKEBabEP6GJCsau3FJKYcbK2JFAGSpdpRxuEJkZdEborBW3aTGbZsWgtKC9RTNN4Zfrj8AJEWz2",
  "key6": "3SSMRjqtWbJYrvFMM95dAN6mieekPtkQvcDRVt7tFmzyaXTUhLi5m41MvcxLLBcgMBBJpXrhQu5wLEaBSJc2ovFW",
  "key7": "4UjXvAn18HRDQWfrJMmpZeeh1XJXPoTECWvpP5MZRRq4oG64h7Tqdehw63tToRc9xWfqLWR7Pquy3Bd3rAosSjJz",
  "key8": "3KxELoJM3X564k9WtzHRh8o6zgMXs22vstpZp3Bk4wXHq6onHKVX3aX3N9k6AHAZBiX6fdNRfz47YXhcRPpcQDih",
  "key9": "3jTDitoaYbuJfbajHRVSSTFLYo3EHsq5oZ6JY54mabL82BMCNMJpsPB4SipiFAZcnLdDVvZ6Z59egct5dUd9wjbu",
  "key10": "3SUwvDKw2msh536A7CskRQBesLzU1UQt1ytNngnKauWkumyrSHF7229NHPk8Fncp2xBHQbRyLNhYGZ31DNjFq8gP",
  "key11": "2BDe3dGA5wui8uDJGWvrxytHPkmfLMSu3rnJrcbL8ZkKwLh4tM6psA3NtuRWFFYsvJh2M6LNq4LLiU7VhrqMKw6u",
  "key12": "4VCYp1DgyaEstXzPjDgtR3zEJkNDzJaBofYjkedzKGWDQhFfpNhetycx2rwD3vMgV7mAziZk1LCDeAtTRDn2Uf5s",
  "key13": "2tm45jt7UyNAKRL1PTWMfqiB4v7gyj7D6qmUhhxRsfBzF8qDWMUZk6iYqNSabPzfAn1g1jcHTwxR1RGubW6U1714",
  "key14": "5JmcYNrZJeLoqHyGYDWGdG3QpshA9gNs6uAHFodQA7EoAqLXPHLsPmkns7cHSisZVjtPtJoYYeaVRPw8H7h8ibJ9",
  "key15": "2nkJYFcK6QKHiJDarzq68SBdwbLVGCg8qBU7KhEkwrFJpPsWtRb9kz7K8oXvUPA3iF5Hw1hqAhCmHbBxfk5iBMPT",
  "key16": "3KfCssPRxmfXswq86mF3ugyb1RuY7QZaP727LRtFcQBXc4PdriNqLZ7XGavAVj2mGZnnkr4QvFv4G35y9cYy7x7q",
  "key17": "5wiZddCn6nYhkb1PzxAfEXj2Gdk5RQBNnMVZV72d1yHtt4B7MQscnys1321nzg2PmzLi5UudWr6C1TYRrKhNuj45",
  "key18": "2JQmVLDt8orxScb7gv3eNs8L6mURJUnwYhCizxnCbPYJtQ2Xb9Vf4CCJgRM42CMs64jcMMYQDzoKY4kmCvGhyssR",
  "key19": "2Q53gLZ9ywZZyPzBGarRTmYomXXFXNZeuuAPD8XcjjzateSZsTrz5rfpj2ipYAm8DzhcaWo5q9XXgPmXoLzE8wJy",
  "key20": "2dpYDrFTdqsfgxMrwQpgMSrgozJTR39fukuPzzSaMpRGrBor3PfbfVWWmQJfVnfzyC3SpvG4bpBcSM5cYkFsnfWh",
  "key21": "29zc8oUviMRLLEUSx8SK15pvECqCHE6h22ccvtgLFo7ubaNrPEtW2tDseoGWHPWiPxthQJGJr9xEuu7Q5KrmZNs4",
  "key22": "4bjn9tvrdfPR1nLzdBptA65tdHjQADyPxdsPpyKYnpezeKa1AWoX8oASC7QtVEqi2MyEM2cLCmUSdmdN9iNUzhtk",
  "key23": "3u7YoA6j116DG3zs33qECr7tTgmPCuFCrsLZchgoq6ThTecK2cAeCRn8zi7JDKuM3bstjMadt6WjdfyY7iG5a4kZ",
  "key24": "4pNBddT2qexGoHP1iEbrtZcciZgc2viJDiYVofDEbEihsJccpxH6QCFFQEVELtzaxDE2nLViki5mxtPsHxDDaSod",
  "key25": "4VBStNKHU3ZTgmDKmqB73tKW7f3uUHZPvWM93iAuckeAfMJtBGUWeiEcAsi6JumMadiKUWfvMSLN26BDkZ7QG3s",
  "key26": "5FqWGJmVSbAGGzv67VGE26ZXMfyDcCE5LyAM3Kfb1jRPYGbBrbWY6Q4A74w85uiUkzAuJNWvCyLKGEHtYhrwmJ27",
  "key27": "4szug9FkVLif1RqwisadV5DHryRQw1XhxJN4r8bQVyQ6dTcZwg7beV8yR8J2Xk42ZbYcR311PKGftE5jiY3KzNKi",
  "key28": "4uiHRZtjUNC8EXWxMq5AtHp5s4EJ4KoABEpv67HYcjUyGSVdGGeKzFNNBXHPZSHT7RhXXUTdnn5NsfPzEFZutoWA",
  "key29": "4c79o9it3giRpvjL5YEbBuQx7L3m9GBqq9myNR6FkdzSe2HJmPvejwSwsyS1TLGTDAA2kKqqUTpBnSQoKTPPxhqr",
  "key30": "3dsGjhLbJWk7p22qGaYMP2HToVWim1Fc5T32wxqhmGkso5HE51Q71oYd88jRVDwje6JNv3zHwqFrt2YGbuAXJs2g",
  "key31": "1oWe9ueDofEy4tk4rqUTY4qUJHAhPYmgAsE5ESovxfmZdwbeVJnZhp2wJMKsiX6dxqeyC5aaHU3EC7TekkvxhE4",
  "key32": "5d9CoRubitSnkQkCSF3u9Afn18jfj4FxzKRi16bxMaLgGmsv8qiGCx8rus6M8h5dvkJn9bmTBNH7Nc4fY6L84jiV",
  "key33": "R7zh9ouec73wnHaEArKBTWV2WLqQqmXaziTWW8iHnTLCkVuYLDxh1FUnfVUZKPqC6GH8Hv1RPYxxvwQY42jmKPF"
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
