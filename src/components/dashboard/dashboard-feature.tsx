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
    "5eHcHh5UgnHfDvtNk38J9ipoW7SkBqjZ25rrvo8CM6bbiAEwYUXAW7bWCqdAmWKfqDr5yoRyS1stqwMLb3GuJ7hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjtZp4PneCywCiNE5hwYEUrqEcJCEfxD7P8kAinT4YiTLVQPtkywRjiVMBedVVgi5yLeYyAjZvz3StKFNu9LKnX",
  "key1": "5ZSNwWa3wdZaFc7qE7VFvNUe9T5RKnbSmQLBhkgSgKXBnT684252YFwkmnsSoRspQrzrS3FiUf7thDugGD4iazLu",
  "key2": "31tSYGRMyggqmq3bsfAmq2dkPPS1m7rQyjBciN6ptfa6dnxc3QaLVyHk1romiT59gZitS63xQbW7LjW54X4rtgR6",
  "key3": "4Vfm4PtDaAPnX459c6wT9gRjuRo6niXn2gi44jUEcfBy52aUX5MQ5aKvQDTTpKEDBkgX2zmpNxEtBwHcSM9nnbZA",
  "key4": "8puucgsJwwwK63KeLUgRSAMUt8KANoTyeQVVpFtT4ziWTpzwNbKYrWJBdt7XhdY538EAhgb6wn4zAJed9V4JTaL",
  "key5": "2FYSMyDvNBzqQ4AMM38oBWEcifpkhfGGRTc53VzT9p3HCWqWtmHkRiqhgwSaPbULJ73cZsHaf4B6wkBSbYp1X1AA",
  "key6": "pwBBsE9cuenvThJT6JaVMTGmp6N2Y3tjpFYmEtHJBXmvMn54VepqgrimpSp92nMZNm8jsQM1Mfm6nx4a7Tj2S29",
  "key7": "jywBysmUdVkiVejqbuvsuvvtJ3eQXN2QTeWfSDgKN5hHitjxTLyUE3kEzm5CMjAyH1PUoygXw639BP5LzjdfCo8",
  "key8": "2LtN1rwzbsUwxdGBCYZHng4PmnfNBZc3utg9xeEwDXeVsywzNAKmqnY6JSy4iikcrJ1iE3a9oWzsUkPTktJAhqqs",
  "key9": "2UBM61FKP8XhVWbymZrSx46kHLjRxjHamyjstRgLdGEht2biH7txb8MZA1oMeTL8LKG8NPHKGSBGmEXj9s6uvF4S",
  "key10": "jGFF8bGNfzANYmGZe18hEUzQCdeqCz3CUQm4nHQp2kBvaBQPvdXhZGUSFQWwgRDy5B3YERLm58KnohFh5AeSFsw",
  "key11": "5VdQtWuPKffcbVNEcZhBRKfMAP8Wj3f5HVxC7URPcs4cPFfZMbEAXhcvnmRT4makjH9JAmLbb64J8DTBxB9ZCCGD",
  "key12": "48qahkbAtbdGZGhUCErVnMx3VcJaDSPBfpQKKKPwjNRsVagHe625xfMRf8oZmsRr3Bhcq5RHzLiFAGadFrTVWGDo",
  "key13": "63NQVXaswkonKWyve9vUMsgk8LQRf1qJThoJNiQT6bk4LuP3TamUt44WfgK9uWZJw62B7ZnkvuBF8B6SfKNtMiFu",
  "key14": "5WcLjNYoemWikRhwd1JVCF3NmJrXVER1WrYjr3p6qspV1tCdoVHszndoz74qkXuXY2FRRJsaLZVa8gji695MThE1",
  "key15": "3dsbkXhbkBM2nGLKTknthxnJccxzBW1UYSVfcCrKqgxhGA4f8SPwgcee2jg9FFkotBoqEFEcXvU47Mo8W3K6qwBj",
  "key16": "2gqPKSMT8vZfD9DK3ExkpNQ2BmQo8dwM7QLzazrDbnPkxgKwTxn296KYQuiQYb7vXMhg59D44bbb4BnwhXnf1zKU",
  "key17": "XRPr3Hf3ynL73zFpU768jnjUTtCKyfk7LEHh1HuRSCNvABKUR79rdgW1qgkHtvVNW7ARR47JqLM4BQo2RtnLQ2f",
  "key18": "4npMtKrMeY4z8Ke4cP4HEYHJb4CvNx55iNF3dNJKqZtBVQHBdmeDDfpQUnZHBFBjngVGD57QvqoJntmxGAQFe6aj",
  "key19": "BKU5fX52PLny52cc4F7jrRjRKnEPqyJb54dLbnKueNUPzGsVdhnzpz5UJrSe3A44WhC8uMVteYtLihKBw4aTVw9",
  "key20": "mLBzkkzXPnULcTKktcsbQLmCF5VqPoVixPJFsKh6jXqoTzyvA9k2VHpd2mmGMku5CEnahjN1DkgHDqVu6E7XEUd",
  "key21": "4aKq3Uew86AVfcSA93qp1xMqL4dbAVUo4AX9WwR1zT9LAhjXxve25yaU3rQN3H12D4DtiEShfid763h7pqeou7MU",
  "key22": "2dSXV9qd2pXPkQuACFiZyEHnLodGFNJ9mtzbJzy3Qt5aNzD7d8Hts2NHzG5Y9NryUg8uCSVn6mcvmDEXeqKyskY",
  "key23": "54WpCkBGGr3X2QZREzaqtiLgv7WgL5M6nqKapdx5w4oeXoNQUyV8PdbWGb2kZi2LLCm4otWDdRJ4PS88bm6YjTWV",
  "key24": "2czsyUoLgeLuYWAEE6h7qKBsvyrSp7tB4nDYTGxifCrppMHZxQ7cpb1pN6sxR3JTLGqkKvuMZtG27wnfQ3ZRJgyy",
  "key25": "2WyHFYvyAD62pYPxTrAYSAQqYxBshd3bxJVKxY8cF3Jwy2BUS5VzEKktRc62odJmZBPo9Gz68eqBY52AmWnXowoN",
  "key26": "4oLZ6e1jmB9CkHaKraQpVtFKXUUoxKQuNvFZNZ1eavynLtMdrarfEm653vsGXU2yNNghRhzLQfcXw4kvU9GvZfp1",
  "key27": "3SXf72R4ZfbU5eRJmMr8pv1VNcXKgoBFnurrCWdEHSFwKRW42K1FJiAt6aaU3fc97G2ZQyrkBjt2BRbeVgzHcLmC",
  "key28": "3BKj5DM9L3AWDx1Dej6Ws5CR4mJSEntBJM5fJeFEaM9yo92CBGxaLNZE1shuZFaGMPtxYMztC1VAxitHuQDi4xFj",
  "key29": "4GSxzxXABAZKt61BBhUJnPoNXku9hrtKPdVAsLFhJfuaSszzbjVcaJ9LBGy7ho2bBJqcGxdGYx6C7HbGpctrvf7Z",
  "key30": "2s8d5qPtB4PbnJHAwrdw8258JmasLnnBnnnai7RfjLtR6QVYdEgUmKfXUyKmKhDz4shoMLdxMrN7ggVbWyvDnwSd",
  "key31": "5Cfvujte6QbFpqyLAbVaTtu8wxHE5bzFnsR1ikzDJKGn3w8LKtueStjd7vUeWrLRXKQQczNZVc3yeyrg2pQTjLkm",
  "key32": "2FCuYCeyd8C2oHZggWZAXtaKymFvjCDAvzVJBT719WYX5QmbQWfmvfbs5Eg7c71gUNRBd1zuHVwe7S7g9sxKSEuY",
  "key33": "41qWdzs92owjgjHXzUa9Q1hTduBMWT2JUossCsA5YLPaB1nvSMGAVWu1KHssp442kVJd2awCG6JdKFUF8NS7Gpis",
  "key34": "5h9YpUicmCFwps88TRpZQYioaw4cteYqc1kMWx7ndeEeGTaVeivBn5GnJhYHnMS6zLMj52FWAuVDkiQJMcjBDLFn",
  "key35": "3GZNzGEbKs5TmVWjUfpV2Dnbh25gVmY5dRzcpyXkAAGV8uYfn1iuwmtzMEsXjsLcQDo7faLw92zNdhYAJa3XYvJX",
  "key36": "5ghgJS4u4rGAzUF8RVq3g2jsb9QedPVTALuoDwU8qsjws8ToniCc7gvCUcJNRebhHMGPdTA292Nsn22n88W9p8FZ",
  "key37": "f1qVBWZoxVvzqvBGn8TEoB3NhQ3JmBZAA2euQsF2hXdXthjUGEPCA4od5T391aCXFxvagyHuVB7GcpPFFkyR41R",
  "key38": "4nH7A4dztHPYrEYJB3dVDvheySH3JBmkQP4ufbLj8w5mkfDLY1fxrZU91XSWdB8aQSq3kpsK7Gq8qUDxzm2mBCHo",
  "key39": "toDB6rYzrz1zaHJCLihw48n5cxKZ3C1R3sdGUho7tVdiJjpaoyFsPHttxhbgkYgFT1xBFA4JmDLAA9D2cdybbfj",
  "key40": "4Hh1sbS7qXfLsdCakYEnrgD8JN6e4iWRe6cLej4EmeTq6NgEiriC34HTzzqbEwWmQdNKUgn4HaZN2GZZ8LBfKv7g"
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
