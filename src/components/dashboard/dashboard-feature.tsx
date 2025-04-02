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
    "nnEozfv18qWQoKDFjnhdc8HBSce1LcYPBbLNPYFn28QzionrhzrsWLmuPiuyT98QkdSNNwYq4tQdekny3ZbKbi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXqYeM6UgAXyVPJHxbBsbE36CtFLfn2vnszKNZXXWNXRUwDbsMDoD9SvzT6wBm7YBBknFrwvuCps5NhU4smsJwM",
  "key1": "2gaARkJQgy321dW9LVSRA9Y9FxzBvJzgtfiDLBJwo9t5uKUU3qp4yPRdULC1hbwxHBUYTG9gtLMcBDQdx73bm3LF",
  "key2": "42KQBDmxX7CBgKAFgf16zt1Yb5JzK5mf5HBuHU2EEfRdeRKaeJ7q81NNK7jPRjzjbWhGickMc9q2iDK4TTp9FzTv",
  "key3": "Nqz9rQNvVQpV9VLmXo1CXiCxD7NPJAbTyAHA8wF86mwF3HwyniRVQ4P8VVgEGJk35xBJd6D1R8kWf87ssSSbzba",
  "key4": "37Dv9aL4ra6cDLjC6X9KtUikF4WnLhUY8YHhxQn6tia61uefycJz8Mz2KwcUt7iWZQcVkRSrJzXfEhz5dCEEsW9R",
  "key5": "2dUNrW2wyKtxjdmTbmBvXBQtsQ8skJxLMFAPxVVjNCEgS25aupf3U2aqJyPKCZosJC2y3pncV7q1wmh19Wsvaprd",
  "key6": "3xjwCEnBpEoqgn9uoWF1cw8f9A7xss9ybCsdUgJiEQqRVCS6MfbRkEQnB6AiH6QeFuHiFigUTBihNu7PqQ879Ryr",
  "key7": "3Z3askj4KmHtZ2HQEijCoi7kufpZZjgUhY8jA7Af4X9My75J7KBtGQ5c3M6U7ExeZNgKAg843Vcd69RGpCvfWe3D",
  "key8": "3g2RwwcdHwGb6RQHoL2yMWeLQK7SdXgRhQFzCgxV1qXS7BZpPyuamFk4ttL5T5yBPMmnghiQwUuTt4ouo8UMPzDj",
  "key9": "4AbB2tSjDeywQAJG488WbBnkQnENJUvvR5zDud4Dn5G5Gr9Q5UUm3GrfuLW1X9eRx9xRsowQcFayC4XGr8wSEAKj",
  "key10": "3P3yYri7vg9FagkewCSjcZ97GaGVddFpD8iitEozgQL5gYjaufxdcEB29jYayTiNAJevrYqZS7bnaLkbhWomMc9Y",
  "key11": "L2BdVttu6nfyWmG4dbkPZCyoRbtEASb3rJV5Mcdfzb8TeezWDxw9oesL2C4H9XBD1bRKfhjVkasV7SogUtMVauc",
  "key12": "4q96eSdNjC1cC4Q45a2R9qNqtqVAag15xBpwgNhgQGFFfPWKXugNmE4RuyxyyRCBZGxv5W2qm5owvEKoDWtZD5yd",
  "key13": "4gbwdTxpykfYR4BZD5q6NqBZNe5v5bN8JwP5b5bDxtovHFmn17BjQfpn9dC3b9tKoC7prozsreGnLTunxePmc29M",
  "key14": "2qMypaxy4zar5esRere1qDpqG3p5482MmhyerMPgZZ2GtkbevhguYheogn2imLwjMsCMBz19zNXQpx8EF7xgh9Z1",
  "key15": "ecixk5CPGaxyhLgoP4ZuFTFfcs7E5xaxHeRyRRgFYREDtV34pChF5RRD9vN4AsRQMUsSjEBDLxN4U3MwfrrqjQe",
  "key16": "62SfhNYtdqUjZUgc4eWemXh1ubmuvq6TrPBehViWPhwpqqBjNxfkuH7VUiKZvtkpysh5345JP2BL7gWfxa1g9wmw",
  "key17": "XzEbky1afq2iFgZjtiSL4P1rFeqowZjCx1ktw6GxBdvcn18euRgRsg1drqfrLizwfzLArRUqF16TtDNQP5kpN4K",
  "key18": "V8aDafAdVDYCuL4HjrVHJHssAkrWKjyhJtjUwTft3EmhfK41rQz1jFSniJ57nSYpA8M7cR9vtMBY4gqGBuBdW7B",
  "key19": "4ZSXAcDpmAoX9r3qUMzyxKq9jayNDHBSYDYbGCH8FfsLVuX8iZXmz9yq2wZi6YjajaUXxE1cBmjx1PK76RrnsR3W",
  "key20": "ToG5pDNPYLUYhh49pzTN33dcxVNktX6zQ4HWTwU6TL8ug6h7UPTKYDmLrNoakLahHMiiprbawNDczHA1eoe2v6t",
  "key21": "4tD82uDFLErzfKahh38RzmvvD3gQRMeSEvCUHbWqZ2RQowy3zmcNsa6dEG4YEPCkRuGgxV4sCmxV7UGRGgrYLfz7",
  "key22": "425iFTmZV2Y2LHvKULCJPsdR6pjmACUBX3HGXJ86m3tTTVJpMpu6Fm91usj1QWdgBzASk9gXgTsUipZUSUnYndyf",
  "key23": "2pFapfb88r4S7QGxiYBw6CHmBfzLuC3dhirAaqoT8b5Ep6AUkua7YvuJi55t59T4p8ZAZWb6NQbNub1M3xEzkdd",
  "key24": "2KvN7YZrTkx6S9YRB7KhwW75bokDb9e1Tayrfg1xWJXZnLRxhkHZh2QzShYw9ZoG8Nwc4b9gSEU2n2YLQ91PhZ5P",
  "key25": "4wGrMC3Fsv4Z82j9SJJs9dDCrkJgKcSaGoLWdrAzPk4Wa9eSYzHbCfV4oe8o8yJuJ1NrCmb9sj7vLWBzbyht8fH6"
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
