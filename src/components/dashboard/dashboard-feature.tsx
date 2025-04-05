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
    "aKnuYR94tzRAfb5B9JMXchHzGbcUS3ijhgZjdiUWS4MkpHnKRgMMphJ9UBTFKDJ8GZCMpKACZxbxDqC4L6V1V8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwwVnk8JPpfn7Cu5GjA8cPoQAYc1RagjkSrWqSUMyNNqu46Amz6x2LAuyxAbjHVi2EoXtz5VNZHPYbBAMWypNEJ",
  "key1": "P7SKgk7r9QAXv8NBiSQk8fG9x7g1KDcC56WLziAMauHNyDLjiM1KnoHbZ3yUTQJ5wAEWd7k21SpvczYJwMvYWAG",
  "key2": "GwBSFFtTxdre2H68QnB7iuuwqvznRhd3Vw1BBkkQKmqZaqRnM2bHWm4jqCF579A8a5cYw7oivaPLyatn9y1WAXf",
  "key3": "22noXar9QsAsx2wcncPbWY3QXpjWWtJ655ubza97HsJ5sGaPgBdPQ7EpvytK2hBkWwdYp2BqVB8ppmXgVmNUQkkE",
  "key4": "3b58fPMfrsczH3TCjHL3JqnXDN9n5qPVrmu5NinVGzhZJARtnth5U5NH3bDtWRsgKrskLvrAMV2AN7GCZ1VkhCmC",
  "key5": "4uJTuASeBGq92bEDpGtYhH6csMVGgN9wnN8PMQEM14hQXsd3TerQ8Tphx4F7oARAwKqiJpk3SdR9zdz2HZ6o7dEy",
  "key6": "28paVp6nJhboz6JxPaCLni8ycYVNH3bCNQrbGYp1BmxPkjgAJKEi84g9tRWmtCiBQXGdrUPZy45zRbT6K1C4F1P7",
  "key7": "3yBeN4kB12hsobtJa3YqaU1QqcgTTrnvEPZpZhCuXDCymaWe7oY2m6wZbeyipq3FZvtcJKDthBAxexWL9J29oxkc",
  "key8": "37BiBUYWwNAiQNChX48s8MrYZ8Xj8BhUbFJc5ESrKepHDA1tYExUjMx3kVHhyZHmQDk33FdVgC7Dxwhg5txqLsRC",
  "key9": "3zRD8PVdWnjTkcofQ2Xnqg42FFU5CTzvw6JUJ2nnxKg58xScwXbbZfLT9fMjuHYv8r5axxtLSDCGpeGXXU5Jyept",
  "key10": "5MTk1QQQBZKewaYNFXQJ7Xr54TDtyuvH6q8xbj1pC3xVwatfRfA3Wghg9xioQViXYH9ZRHoShXJ4HHNdYqmavfcD",
  "key11": "5iW8Gd8svpmTdrmUbwythh3mxDxzRD14r1xQwmxAKbpf9FEMeo7Jg7diCTZ4YcSqKEtaZqGFvwBFwxQTzX61QwS6",
  "key12": "3SSZcaKTVt3YzdP3aYpH2NfFP5EZiCC6D83fryiu2sD6mEbigLgb87qU7VRCHEosZQCDZyNxCtzSfQLj8N7M6TKv",
  "key13": "5ukrELhxiB6c96TPpkBVGGqpnZzUSdWqWMJvvB7f6u9XQoAAL27se8Q4BxhvVaa2mBEcX97Ytoj21UDjCJ53DjcT",
  "key14": "4L29TGHqibWrf1HdRf4MmJShCLW1azkUFtDRRskztXASgseEJkDt7pnTaXyRR9uLirPvFT26utbSpmq7L6u9TqbJ",
  "key15": "2aogz4pvKiXMwdPKp4NmQEef2TRxYnxKn94zTogLxmAqrmKciGYx7rYxxyEuiSrDWUNfbWrcuTWLgcp9tDLtRPQQ",
  "key16": "25YNjXeQaVHZsaGLrz5N1sFuZq4XWGv1Lh1Cuts5dMv4xsnN9TknYiGdRVxXGKo1cPd392KfGwCt589P8FWYsGEJ",
  "key17": "4r9WspmL4iSWVxrZm7cKQqy2RfWceXuv7rj1PNQxHqYu1Yc5rJPH8uYYfrzgKbdXknYB4aU61Mt6zugzFNKHDxW6",
  "key18": "RvGWY1AW1i3WRpLJEfTG6YnqUjs1Go4Xiwp7F6T4GnAoiXr7ubE7ZYCnoQYiKxitWTWtTJZfSrX8AkR73Fgsibt",
  "key19": "2HVWRki3XnMeM9sSfE2QRJ1WpWMUwCWhSg9fU21aSQzLuMnBDmLorAaxSwLYmQ8CkndNgfLZLiYb62sxZzndtZ2g",
  "key20": "5PFQk9Krye4R1FaksZw7eYRTq11Y4vgEa1cB5492TLb6f9nkR65RqN8BCDAJinZ4sQUrpCKxqgYXoGcCUQkM8yyq",
  "key21": "ENztas4CnWczjtG1bitpJAmqHRTLxEQWRwfuQxcxY5Y554XFDg6GUwqu1BttyhqyfQmpQ685rAjvC1DgCqoJ5iR",
  "key22": "5s9898aYJKync2STKdewqQp5CCVQWdLamZz7eA6e1a2b1XgGU73qaiC2m7Ku2cYTown7auYpzXAwrdruFE6mZZjc",
  "key23": "2goT3K3H9q6b3KLM6YrnwHNJtGwGLqeNzpuESuuXn6XQ1wqRBbXGU1wDCQbA4eTGA8eqsAL39GWYcxaJXXftkYZR",
  "key24": "3dAPdwGwqYjYUaLPwZz4w3u2K9UxEGspkg3C5JH9Lxvem3a8pqoTEpZeLaZxV5MBS4NpWQEo2jr29sz8WYQp3ipv",
  "key25": "4nEFhzbrrYKGotEXngkpNX2pGXM6PzpzUTT9h49fFGbnasmTjsoXCSPmgwCkEPUXmoaJYqVupbefA5wytxrLfzRP",
  "key26": "2HDBSxJAYtozcfKzQqv3R6Gu9Z5t236tsSk89oFXwfvAo4TZUPvoYSC6tySy35cbCf8QcmrtmwFMrryh3WHk3Ya6",
  "key27": "5v7tr5tpA3W8seaNRL2wKydRut9w13nrpYPT6Wry1WFNZ3u6VMKbKo2qK5baudcfEv3JgbW1psKunKDTA6P9tjzE",
  "key28": "4PmbukFuGf9RVPTwzU9DGisaK4DSpUfu3HeY7f27G2oGpxZ2suh5Dx8fUPLcbUp3EmQtjqEENwPZzHv4jx6QhEWJ",
  "key29": "5y2wdC4SgDReYCCi2dwZsbKXRc5sgmUiREyvRa3b59jrqWpLg7USEi4UnVWrAmyC6HQwwVrMyDWj5mksTDHf6D5N",
  "key30": "24gw82GkdZrPdxwRMZuMmJ2gmZdXWE5jWmkeWzEyJ7nXbKvYkSJR5rGQYV9GVh1yMrHd1SDbqiKzrFRLDGjtaH6s",
  "key31": "2d5XgVtPbE627UdCFidKD3oxMRqQoLvAwyrasguFQj1acoXNJgDUettGr3Qeoar9y2Dt4EbLkeKK5RU1mFQTkvJL",
  "key32": "3dRGrSotjT84UZRtEkLUAy2YmFtuch7zK3hLwwJoERqXyBFUpoBAd63jJLMXFaSSurVJZKEpv6uAYFasD4d2Gnm2",
  "key33": "25yTegCdfyDL1AcDmLrzjpgXEae48chx499R4hKFED1zAXsEo1fEozz6qiDGEv25SF45z5tiBZL3FbToAoPYsNHb"
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
