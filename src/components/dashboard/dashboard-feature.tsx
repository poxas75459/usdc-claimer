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
    "2ubQszSmYkszQq5DhPWBP6L1imkUvWS4qAss8WBSSFpzZjpgQAjX8H4JczBroGYxvYo9FmBHWfviNPjumUDZ2eLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XhkMPPFbYWkrRJjebjmxQFbvsd9tPDamqMau7n3Uz7DvbQZ3iWDcgrnkPk1dPb7rkMVmWosuzsdhURGpgDSvuy6",
  "key1": "5vQDkqX9fM9JvqAsAbGh1T1a8uGrj176sPNu4tCrmYpdmtyctZHns5xkEPyERW5wGuPP5vTaQdNjSYatYPRzdLFW",
  "key2": "4zGCaUGL7AuzQZfaYXBt26z6kbP9yuvdgrVXqyEaVtY4gbnbtDLNkW5LiENP8wsnZNB57nbmA8BciGd9A2iygA9J",
  "key3": "NELAPHYHAu5RkYWNPVYbNiVa6MJvF49Pt1biVbxPGJioZmxt723Cr1oqFeDiF6qVKK1KtT5Hw5RVtxC4Bav4zqF",
  "key4": "3ysGg11hh8UvPxo6TA1YapPFViKdRX2XDVV8NFouhqZTuZFuZx6qGuf7i2RLQS1SR8YqFh4fGqXJyTdL87UuA35H",
  "key5": "2rCqywCt5oBXCbnUAQ3wtDc4rJyfQrWmCLMGD1YqhTZ3M3qsEXBjAQhnWYm2erjy41gBkZoTKkUZfUDsq9LqkxXf",
  "key6": "353DQNKmVqn9oJ9zLbuggXVxuRHohrTxheUete8HpdSN84riHPcJBNVXcfYxg2T43nF3ZiSEDCcdaPfpmk1hMRyA",
  "key7": "F3rcWtxKQ3pGGzSAuWrto6SDZayWNu4vfYuG1zjiMNooz4avgG6HetKkBMeE1yRZdPKpXhqUrXB7yMHHXW4eGz7",
  "key8": "2c9LYqUHRGcZzvXq9zgBroU1tLazNbo5gzMxd56kPut2wsJe5VQRT5pq94QtEVvk1RnVa9tr6Q6SuQBCzWEwq4Ej",
  "key9": "2vAnnKS398wgApCZrFJBUgvQx1y7BFPjv8kUbfytygfV4kgt4o6XGi48Wv2gcN2LszxWo8mpnmtF2SWe69wbsXbf",
  "key10": "5sdgCJbJ1nqB5qrGjgs8H7ngnaSMWmAU4Cmg3vLgRzbawsYp3Ush7w1jSJSCxyZoRyGLeNkXbfu2RAstpAecH1gT",
  "key11": "4gLQRe7QJ1fkQawUYjX3n8ZAEaPPBDvYuLa2JU4TmJoR4jgp59Vz1FDxuBKJSXmkUHjdmQSzn9GNGzZ5Qoo9mmwT",
  "key12": "HZLRbszHg9F4SiP6SRCU4chktK7jbzVLxw6b5rUVyRggEbEE4nSYaxHsM87zFUCxucdLMYs1RByrZBBEPZX1qVA",
  "key13": "xTwYsjyXx6xLoLhwGc9pX7UUj5EcsimrjMT4JU5Qy3yrLYk3JgMz9ZxL5c5nTAkMyWfEGhnmK8JSA7beu4xX6Xk",
  "key14": "5hMzo2KiY7TNJbREoD8kiqwWLn2J446FiGsGZgXazKE51WRCbXG2xkcAeuFZhTqTrg7qAFSMctVxLghU5JBiJaxW",
  "key15": "4dz312r53r1fxxyXGipiPe3jFsCvQrYc21ZRf9VFhe9egXbgZHd69UCUwMfQ2rgSKLJXz4QXXNCBZeLJdeQUY8kv",
  "key16": "3aM5KAigW7vr4cYJrNd6t6u2LiWhUtqUH1EZ5crremSZH847jmtEuTNCCef35RwENPHwQYsAV5pyoo8hyAWKEY27",
  "key17": "3isrLBkw5YaXipk1uPjJNARsLGUcPnhhtaKeZqvKbKhNHXQ5ctUGtEJFz1725fqpdvvv4FevMQwShGcy3aB6V5fm",
  "key18": "2izZB1EPYiy9qUgX7mnwf57RXuT2kFDBuf1NLTM5s3bVK5LEr18donqGpSN2iuaARiY4ttrusNP7wk672xVdeGat",
  "key19": "3butoRseFfEhCQeXmUdMw6SYwYLT67isfLjpSjCm2V1DpaBZexRybmSACTq65r18K95pDaLfMBm7wtxterD4UgE3",
  "key20": "3xrkyNqiRV8CiksiiFfJTsPQCAm5dEfZEvRNb12UC2zEhqH4QSrUisqUCQVRW7VbKvB8wCyo6LBzSghbfbBZN9jV",
  "key21": "2o4egp7qqrm1gdELqDwphqpNm7FNDazcYjygNehgi1P2m1PyBf44ffVQsMnCSy6maDdzt7KwWm7jJNpbTwjiQFb9",
  "key22": "2hP4B9pUbKwxGDri5TEfFPwazPoA5tHsRuENjMrWGSpiC1tphWiMZaHdjoP8wamAiKCC1bDVW4TXU2QEs8ntdrji",
  "key23": "5sGnYQQuDiWTrzd4hTLpqVKssojbuzVdc3uBKpy6HFQK6stW2jdXq3CNpqu9jCweGrK3bYeWdP5gEhJYsqcjQeQQ",
  "key24": "472ubpfkEcRBwpx3VrRcPXk3ecKabRgjjknytB5W34W7t7eN9Q7L592LQc5J2gyUaNpmWurkgr9Ggd76fQ3PDrXF",
  "key25": "5JyFrQr5AANQqGkP83sXj9dPYLuB5yEApLsRhxiudWVhfaUTcC4bkJzA3WnFsht1uWDMBKNUk98JoLyG889AQHJf",
  "key26": "4r4cJYospZrxBkF2wy8UXqyXR7wf9zHksw1wYYUGHVi5cBMmYRB2KnwnxHxPASE9A2p2S6eVuu5354HuHe1j4To9",
  "key27": "3Mxzeo26xa25fHUw7dZCxRtSW7SbatyQtCCD6n5yqEAPNC7JkZMdUoDM5R8fXjWSYPJpeaCi9HscD2cfdfoXRtdB",
  "key28": "6Y9PsDfQJe9CTHZKaSa1yK8765yz2JFPz7KQoM5rWFnD8hqTTAoM4Mb77dZUogrFfUbo5BZUztf3YXYWRfFSfyD",
  "key29": "2dTBKfsb1B4v5vvrWAgDYBH2q71qnZVpgHCnoFJxUwvqNKYgsVw9mNEBek7q7SDDxsj5Uj2dC28VVpqsen3eokaU",
  "key30": "5ppmFwQr1LwDHUrWmEbuPpZXGNiLbUoCWaKFjhNbsbrF9TAvX2EK18eykjj5BsBa4a3WpSeqx1FnVnHNVwb9z3SN",
  "key31": "56876nyLiDwpJbfojpTAQqkdzBKAeY1QjXLFCTs3u8kwCbdiDhViaSXbae2WbYHxAj8hiPtop3myQhkqbfsAxx9t",
  "key32": "3RyZcxHgMmaxsNXag9U9DbbuF5cbct15Qr1QKRwA88KrsW1SSudhxKeomD5ke8hdDodo3wpaogfsYm1EXF6VDnxk",
  "key33": "4pK1uyJPPa3Zpxg1dVA8BwjNrcbofZ6b12Ue91RToca8V5vB5ASyRnSBPZQj45XjD2NBMpbH1FKT2t9SnPiJedB8",
  "key34": "35YQL5Ubcy6SZ52DNLJkzKMwDMUjX4c8f7BeZTYQUXF3xaTqSuNKVmLrT7p6dKwgUdyMP7umhNQdJK33kKEcNUYd",
  "key35": "2YwoLeyeBf9XKgzPWS1jkziHDxtxYjiyLyk2nANBHTsxohhzsWbkhomZe2vJ6218N8obk2DF9yfU1KD68MJ8ot5R",
  "key36": "2SfPmMGCtvrfjwJh6558PNxH4eVNv8GvMGtc45mWfseDxXciFCKYUiLFy7ACpxXGP9gUJMkhT9pftzvzqFJnQfds"
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
