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
    "3y6wY6rNYh2KXw5C5gTBbn2T7yCcHiAE7aU63LZZcXKLiQqqvFymjghswoVPjbfnJaveUH1zLGBv8EFbyQY7EVrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dpsKfkYztc2vCEzuBWJseZJux2cqQmWzDz1egqpeTougGyYgKdMaaZbTi5PminhToqbvd4G7SxY1j4t1yBq4UGE",
  "key1": "3MgVUJ2EmoVaavv4eHBpxSjx9iuGM2LvhdteRfhVa7QsJyuhKYiA6tGTVZgH3RirriLeP7rFrMaavm6aJeR5roq",
  "key2": "34BCZSe71T9db2ZZfKtQuyTFFTtzTAzW98UntfZe3eTBDViMYLCk2MUhcK2iWRGfNhgMw7Rw44HDvP6qsCS6NKVS",
  "key3": "3GdnESe92qCgY5cw3giAte1Fk1iN8pr8FgHioPnGXhaAxHDXKsdXymAUpi9UxU3DVrY28KcWaWNrEDEkCFBudoLZ",
  "key4": "5Tf8YUFmGx87Wjxh4qrCpMet1UYs3DfPqBDEEyuruTEBxikZNAr7MaWRztrN5nRrwQphSAkvarz2tmbuo1EiCeqX",
  "key5": "Fu7w9HNs1bAnU83sFu8SZ65KcMtxjeGfPFLFkRWtWNsPXE7wfEXeP3WiNG13KPhAEy4j4kwXCAchRJhFiqAcTky",
  "key6": "5mKihcj4Wx9GrtPBRbBBRZoJGQqHgGSmd5oYTKNJwkPFJHFpwQZUhHL7XpuMHapXAZTNBpaYjEkBwaqTe4Caf9id",
  "key7": "Mxba5r2cxtu1GrfZSEDSnWioLJweqkNRdgui71AiHqTX5ZH9PhT847cg7YGN5LNBn5iRYw2hqRfngYPjQcwx261",
  "key8": "3pSJ389jnZbpAMjULRCuiCA2fUAtANdyENyA76QB6UNYrKvZx1jR4a38deUqwcGKe9FTG3BwPYXGCpZNdEs5hkso",
  "key9": "47neEAqt7DB7x4BfNnFkjqkCWgadx1AU3WSeE2rgRFLGkoVhQGzJ2fSQ8TeHRZFZoRkJb3i1A96rHR1TJeArUPzH",
  "key10": "F2EbyoaK9xzAru1HSYVrnJnay923MGt9XG8anoQcSF94t4n6aD5N2UiMkNuf4C3LMkkxNSxGcKBEFTBgwMjk64p",
  "key11": "3ozJ95UKsRXfSkZiWQp5SQzdPLdqMrDsY23MQV3bruj9634R9eyeJBVMQwyTv8M6A1ZGemZwwQdUDiuPFoLKdRfp",
  "key12": "BQRsHoXNnngF8eFg9JdyaLPc6RFRiT7gMNEY4SSzob3n9QSiAWED38yTK8q6yJ4vGgExivtHiSvex1MQofhoKJq",
  "key13": "38EZUPy7mwepW8iCHPzyR1qFRaeK7ckzCckC5fzMcJhhy2DCFDpmy3wH5XK3JCArxc8oQSUdTxAZEmoJ2SaVV8TU",
  "key14": "3v3K3ubVG6B87w9ffuoPxwomBhSVvX99aPdoKKg5U81UYFy7L3btyu1TR8MhFJrrdpveCnBLR7ENWYiwNsEhfUCj",
  "key15": "3eVcGsbcXkn6skH8RiWytDCgBEihUE7JPkkjNVxhSEw6VAGjShYYEWNbRxCcNpbxQGZijzGftvmnyUHo5rmVGbZS",
  "key16": "2TXCvKkYkvZpdP3d6qQGkqnipnBNp4g1y7Qb4cUemkyE5XrGv5QFzdBmx9G6RwYqQ3NCbXHczmcBXy6Zvn1N9BfT",
  "key17": "4v7GMttS8Mc5nkMEjMRVSpjTAVuqXY4yLfiXpAsgEqmHRVsYR8gd5TA21MYYmSAuHWmvatAVAXwwYiMwkeSxsSs",
  "key18": "4TML3VvVbvER2CtP3hTZ5Xh7P8bCg6HG4XNfQ8ALyDHXXLH6v658CxweBXYFRYa59pErZcJ8wq4a2uGXFSeyQ6iw",
  "key19": "4zCEKJc8Ucmn3mVNgfgWb55od2Q8fabrJFPFysWt2z1dJtWkkbuegyCRVEMkHh6NJs2ZeJWXcB9hPWcBqNfJhq5Y",
  "key20": "e9JTGw17NoCwBgDZ9nhUNU8esxLaDcoaJyrSjLjks8waxBapn5KEpSwg4t7mD2hrD9weFer7jRGRcqEY1VrDnkK",
  "key21": "26HeM6T5MzkmA1dJKv5ZoJ3EUnVqKAD9qPeMEFgucpux1EydfiLZP1rq8Q6rKveEDyApFWr88aK6TP9CUskejbBP",
  "key22": "2Xg8KJokRFaGaXbQStBjfKihMjW2DLeJmjKiQs1ERyJ4wkgSrHUHMKUTRHXzXvBnthgtxJgv1BQGndZ7efD8zz5V",
  "key23": "4teD236k9DbJTM1zLspRBCZbigM6egN8gGiuEyx9NsMdrrxV4jfSEnakuiGxHTjjkmQQHpgghzjsD45bpXu1b8Uk",
  "key24": "46JW9DKKQmKVopuyNb7tVbP56b7wVkEfFKi65c3TYMhWm5jE8BwiHrRM73zxDRoD6rMDYPPr8Mqgr5hHWfJvsfCo",
  "key25": "5keBhdB8xpGb1CgtECobCQoqcXdPcKgpw3AJZQgC9QEmm187HWTiNUgRB6TGXD19atuJGrKkRwkZtfMQKizwZ2cP",
  "key26": "3roridyLKbpeto2aDQGneJWiLea4SDv1tUArV2q9o4Z8vT74bhLjS5wZiwgLgGXbApXAX6LBKXP4sKeFhxJiA7T1",
  "key27": "2bvdfKq5agWPmHDWSFxDht6FcxUhd2btUYe34L9JjuMoVjauzgCwwNUgw74yQzeLtWANd8w1mZ1q73WBdLeJrr99",
  "key28": "5qoKVu8k3zF5rdt1AYRr4uwezSQWE57yoCqVExMS29hD3xhRLQmstv8JMLxmzMYVrCTrcvDWFSGy8etwGiwRxzdz",
  "key29": "2GhDetenWQnS88n7X3zKB2KDfxt7d5Hvui9aCeozmbfm9mupmG6qcv8YciuGqsPHxHKE65fPiVK7WNzo86TMGV9Y",
  "key30": "3YsNCk5SLAG6DdaBZB3REjkvEmHMuAuQPxVykZKp3w77MaztGKkVeA8QDiwoKxH2PNvvnARDQtFPJeynYD3G3jRA",
  "key31": "27CPsZvvxkqbX4z9gsxASva22BCjYX2npPguKtKC9ymJwWEG4ZyDj7sMHnsNSzPEG234LwBJqdqE8qp8wEzJXUc7",
  "key32": "2RWg8AGnfMh5ivpXTof6SehWPDr9fAMsAhvB4TkaavqqJPwnZohUzDgRiLEShPdxrAme5GRxqAnLXZQ7hZSD53gS",
  "key33": "64pmte2cebrCpeMQPzx4wKyJehTDWyJAo1pwBL3dSJ2Qt8NRqRobUrUzkxtCQMR8jP1LiZB1bpjnHVRCVcJtj6FE",
  "key34": "4A9LZpsesNySqNyJwodsWMtcQf8ZUVVkAYJodeqRycHwGyX5uQVvAQS8iJvMPXHqoUBCVXCnpHmowVVyA3XmVBfi",
  "key35": "54uxH7cLQF1pR16jGnjjybwfTxSpJb1XC6q9n8aPs23kqJWq4id4STepd4752SYgYBGodcLUS4CvpUTvvUvAsEuN",
  "key36": "2Vm1sukgmXvfPmwp1MNey8GHuaq4TpFCbHdjJpB34XqgxVZvhuws9Cnr5xwYQA94cgR29dMSPhAzzR1bvmtLYmHJ",
  "key37": "2rpXeN7BV2B4oWA8W4KErXTGTxzsjqhVPQCYoMmsmWpv63KqJQw9woLitkbLkKXGkswBqkWMKcmoDeUJGTVTWv7u",
  "key38": "4KRUXR1FnhwdnNtakKSKzXGNXwG7a5c26SEPLMnQMCz5VLmydnBUEWi1ngBZR52a4JHJwBo7T8R56t7m8QHGzgoP",
  "key39": "6RmVTQ7utoxuB9sjgENc9PjG7pmwWmqM31uoSKV7dvEYwgfDjzsxVnxzQS1MBRivnaK4uoMwp9M85eZjEAXnJ5s",
  "key40": "totf3G6tzWuJKVD5GCFCLKLssf1kwraQ2Yc9P3KRDbq1uzbM6EpKMzkZ17eZ2XJZ3J8iydvCeQ9qXdm6EHfRAW4",
  "key41": "5YkfKbkzno4jjvFB5zMuafWpxWMDgbZ2SP3funWGVwCc52YrYYM6nZf41xxocviqfKWAefPV6F95fuv2ZLajZT5V",
  "key42": "dWCqJiq8LC1pJiRGeKvCSd6ajffDM4HaVZgoD8cuT9wdu38XSBw1gf7xAK5YzBSSdZZCeYuGvxnavKPd4BtDhk2",
  "key43": "2WTcbrHEoJDbQLVQDohmgVrXB1ukNcNssqcNx2mtKFSRfX5sS7oegjUgX3ozhgikvuQDbAeQViM48zDs8wdjpaXV",
  "key44": "VAY4BZMDfZ9sKMafBDFuR6ruE8FigXpiE7HpHc4dVdrDY2xBWq4Y3Bt2cTpKgdERuNRuspqSYZEm169GHnSfvEb",
  "key45": "3m9DLrDPMmiWdv8Zwoy9jPmUXrGrMHXnmCWGFB8PVZ69Z3U1Drheo9C2ToJc6skTgpm8JbE2xkPYgVKqnALGKivi",
  "key46": "2nNuNJtSk9WnKVZ4auQAzfLBE94iMssM9cSBihEdn7oHc93LjLDZYnVEvo32oBNHGMuvh7deT9YpZ5hKB2R5v5UL"
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
