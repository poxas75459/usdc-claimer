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
    "212j2qQt8hgNQPKj6bCiXod78UTrNtjd5vTsP5R6fjDApqZASw2Hk2h9ZNs4ZAdqaSy6wY3pU6fk7Zy2gDx8KS6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbaSZXNVKyL4fc3DUuF9VKhzZzkfWU4UunJr1DgbabykWWK27d2bKGGxVKY5JmuVCuP8y6FWMnbQdKWPL7gvMPt",
  "key1": "GheuiPSwiEjC9AujzkZQxomEqXfVss4RuSZDiqmXUvMVi9bbjSmbMn1EQvkogAC5vRpHAnEB45P3G9dEoVeJaaT",
  "key2": "4JPivRvpjGZp3KJiDa54ybz97koLpxmduyYKaTFyDKCtZBWCRtJwbru6JqbmhyeTWESuaJi6smaJHtwTpBZVrmEb",
  "key3": "UZeKJCtxEGpCmkbHXUgx74c4EV6X1Ey5wSvRhsaR38krVpMPNf3NcizPeMR3JMxyrnKjmY72HdefncAzHzsDsA2",
  "key4": "5b3WzxQUNJ1VnNKFL33e1NxGWRsMsxPGWAWWGB2MBSEzQWzxaTqoBUxsUmxCBvQAZSpNZ9tWATgH2Z6mgpNkurix",
  "key5": "2BJmu2mC9o8qes7PW7ddeeigvrcdBdWg6Y84VykM1tkPr36xLDXxUe9QQX4KudjwQ67HuEcaoggoA6P4MD2fhrca",
  "key6": "5bEQy2NNaf4ga36jmCY2HJT2oMdi4VTS4Q5BHHVR11ic5Mw4gLxCzPAzHM7JqtqeVGTNeGFbEKFeRDUvUrWKDfTd",
  "key7": "tu2RyC6UnotB2gXZGt3Q2N9KD4Ndafi3qHjnNt8kGKJnxusgydDr7TfLm7pt7XbGMQvuHuKFf35jMrmEk1cUk1S",
  "key8": "57tU7qiRDoJVU5S68VSf4YQjfxR93JJ6kEqv8xsG2A1iZBkob3zLvLFakXJptXXbsA23V25wNU6tx3zsbD6haq9q",
  "key9": "4N3pNwKbkW1Z37hDCN8YBXTRUnUc79sbjr54YRNV7ri9biyAqraQEdtpPTkD3SUTsVzNnrRzjXsE31PsF5UExY8Q",
  "key10": "3wBqgdvQTDFxc1qGHKdxR4Uy4pGoRUsyifubLzxkf9frRpgCuBjdNNRZsTtF5aNP3giT7Gdo2NADGsuWv346yM5o",
  "key11": "5TcNhqUWB8jca9uNvDH2zvRghqP7LmfkXHmqRV8pvErQwvJLRAXse4sdnssgWQ5Y9ye9u3Lrs3nMDUVsxPEgHDgu",
  "key12": "5WmeAHqVhTh8scgtrXchMwEGEDHdvEJqmE6BfxAJ6SqySEAZGkem7L3kYD8vrhrNXSMQXtmwEZUEZJC6fSBxwwMR",
  "key13": "5AojKGi7UXkxByCJ91insh3292jCHsjyKQxwyx56crzYgmu7GG25ehAT28nPBa1Hb6B5cv76j6T47N275DaATGtG",
  "key14": "31BznH5rs9QejMzWFyKpwFLwt6EpinjMG6muvd6dUKiUayeEETUSGzWJNYqgxa1piy2LJaS4VDXUhJNxs5GLRbgc",
  "key15": "54Bxt66bAZoZXzuKAzc2LK96cqpA65J457hGMH5j9jercor6Bsn8p6B1L54hMCX7HPqjxbZqxgiKKzKzdMAChznv",
  "key16": "4ztAu7tqkcUE42f15ofgheXkZoR6ftyEhzsPjSt7tWy5WqLn7NHtn8eY1j4qdpryKTwVcoNtoeRJ35LNpFPSwTe",
  "key17": "5fyPhCNHiSSz9py3zTCSjrmRYTmBPg2z9bohBJoGJzA3VqCXvnnUNaAqkMNsUUeeehPDda4TMZ4RuDg1PhDzpbgj",
  "key18": "jYEZqG8d23y3PMUntFxorteP7ohCz5PWh7QvBH52Y6PPxeUzQBcgKxDbeZ6WhjzHQxH96cPWQq58pY4q9xXzGht",
  "key19": "pdVKs8HaQ2BJv1QqToZEEBdWrHKVrfx9SuB3V69fzAc76mKujSjZKLBhShDzVtpEPbtdYT2N5ov2Yrm7twWhdcM",
  "key20": "4KrXHkY3FgY21FidfwXttYKd24aVsqYBQr1SwK5FLetJHuHCtHBXUQF63nLtQwHPi2qdycPCn5x4Xqy2YcgRUKY9",
  "key21": "3DSpthdRmbBWaZeo1PxTkhgRE5QGy4s17sERqcVvQkUizAa7Sf67J9A3x9NNca6fCQ9hAfNtUwex3L3WZWThdiqM",
  "key22": "3ci7VMXt1Gnkrfe794awG6kMK2GcZiNFXBYvhDjDHA7MtQwGLoZBp4PDdW2rG7D4kkPSyhbVWuzLm6EKSfqGSsyF",
  "key23": "2kyHhU7b4ZHcGw8Nz1kTjmwBxpSzkXBRRnRJ7ujJLYEGTNbeue2w4HC7DD8j2xMZYEwGMCtPJo3qPTWJYMaLDtvm",
  "key24": "4EwgVyX7TxpXuKToWFjCeFMT3opVYB5zj4MZZrUdxsWo2CjTEv8tsTbCr4V6cSGJ2xaC5W4M4pNbgV8Wv39wDHpM",
  "key25": "3LB33592qUkiB6Z8ea3y6399fUw7iLQLUPDpYQ8UccpMZmLRQh1XEdQRsoPgPr5sVGcEM4Y2g7QgXeqoMyAK2Kwr",
  "key26": "4m1AAgi2CWvrjpw16WVWwzYZAc8pKwTHNpubRwNLAq6Yx5LLZUWuzPui2SeeUHFsYXtnizVaJ8p4UtVHysi8nG6r",
  "key27": "2hnMCbVTqwX8ct9LMDoKdPM5qHh8V6AiqE74r7emi1sLoZ2agS8jnbnTHLa3b3Ge6eGp7GYren74oU4sc9cQ9Pvh",
  "key28": "3wCsQLE8vGE2Kvz2JbhgsaDZrnokSmHhzGRnuvSyjs8jfMkm74qiedZb9Sy9WGaE5pZmsDWmAwFfAge8AaTXnVn7",
  "key29": "4fE6R7mVhQNoZXNGbbR4n8iaMjk7gcV6GDMPpWuEELupqWdNqf5fCoqKqc4QEnxD1iDjrk2frmTKyi4W9KrxAqq1",
  "key30": "2xeVwXZUrUaezTzcrpenoXBQyV6exzTpzgQ6DUG9VEM1DyA2pWQfm6CUmaQ44iK5nju6ESma8acwYbEikNqZqXjf",
  "key31": "2ir6b3DjRkWpZTULu4vdkFfn24fC52YRrSjMqee8wtnpRTjvsqPgqeXHpuGFwjusLKB56vQaKh95eAvqvo1XQEjD",
  "key32": "7J9BpnhfuHD5HAsLDchgCeRKwpatbLodEaH8GGwxk2kHiGHgAeTv1wJgesFh78GR8X1fdGZctPAqKyKaNTLnkRq",
  "key33": "3S2cLWPqTWJPv9BxXWsBKGC4C3VKh9m4ELbJSHUSzgpV38fLzvHLggLYxorZc7JYch5p3EuVqQ1tgxuNWsx7frzS",
  "key34": "5KC4hDjJ21mj7MEBY5LtN4pVvK3FoRAwYX65P7hyxvWztKyns4mANMxGVqULPgZ3AT9bvmXv3fjbxpGdxjyJ1JhS",
  "key35": "29tsk1a7YAUiZ9Evk5um8T4ea2UtJ3XHfJ6WA5h9Lhsug1AHPSTcJgvzbbWmv6MQ26S6VNYVoss6aFn8TcLkefiU",
  "key36": "3YQnCZe5WG1CB1mMZVatveSjvmVXna7z5bjaXTSz2MnqwMvHPns8a9neQ7Z3jhy5hA5PKaqPdAS5PADVqboKNmyb",
  "key37": "NWu7VMQ7zusmioxF3cC8XLpacKXdzr5y1vmCyakVnN7tjjpjWCyziw6sv7fAwmjHCHPExCwHMbMLCZjTYrsPDfU",
  "key38": "3r7xx21SnE86QGJnKQV6k42UtKmXMnbXW7WspEfVkPHMoH6ewwvU39Wv3gj7nR8N9eW9B1Fk6CLh6SgELe9foXYM",
  "key39": "5hyewAXdmtp1ZiNRUrBzzxiqx2UndXSRGYxzVFDTfcfqv9vometsvxWBaeE3CURP4WsNt9seropY1seZA2sZK4Sp"
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
