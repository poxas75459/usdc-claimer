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
    "5cNJKV3NmLsEiYVMZgaESEhrQF3sMHBJmQAJfHEy5ecXDq5Tk1oipNnN2Cnqzhya5fbYMaXxjDoHBch32F78Ad3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVUerArdFDdkCEQMSkogsrDds3Ed4sARMW6T1J22Xk8WrBTwS8rRYmeh6ttFBQSeU1MFPNkBSwHRXhgyVCDFiGx",
  "key1": "4st8jPf8vQPuWMwrpujLBzBSZxCskiEaWJQkJ9L6UydPnVMzXDMsF5H7HAxzEyhK2KCfEnTUrNG2M1muc2TNkyCn",
  "key2": "NcAWxDSGB5Jk7URGmcPrpUGBU3FxJfo2jU2BRe8wofKbVviYybfjE8Ssy9LdR1TkXZBateL42BkLr1yiRP3MLeq",
  "key3": "3YRHReReJusUH7c1ByqRFHKZrc5f1aUAqx5UVHZuvDhYwyUpj6z4ZHvce3yaLiDdZwTeEKxcGcGTY9nyrduxKknr",
  "key4": "588YZsZj5Mg5tW33iRrdpXunHbuUjyadMwfE5qfFkvp4J5WSvEbVL9b2TLhdQsUeq9b7wtTPVSvSdxYohdEwnau5",
  "key5": "24GDwCMChLoHL1uzAdb6u2Ze54fGCEoy5pKrw9ycJpwWFFepFREC8mzHhrPUjwqZjweS2hbZrNaJhVt4xezKGSj4",
  "key6": "4SJTCieF7yFqbimGWXraCybD2qo7HU8TMKUjcYvtW6DrhYJsH5CRFhpYBAN8s3Ncs2qLXbLJEWeUomh1Ubtz4RdN",
  "key7": "2LpPHqGExCnqvTLnLcFuHnqf7ZYvn7sZ66rYrupmi2CUh5tPSKXigG5LR7jBDLzCnkoeeXAXNYGy9X9yFzfjEdbS",
  "key8": "2s4PhH8muxangv4aKm17VFq67YkJqoHKq84mXoS7zNGG8pyUBXCn2mRUV3XPcXCsNo1F8QjmDWXHVuYxR9iNWwhY",
  "key9": "5jLHswrhnEfPKwA6bNzThjpqQ394mbtFxGCrDw7GeECafjjXZHM2YBw3CRUWRfNKTJM519982CRY8SrLUHYyJNqS",
  "key10": "D1eS44TaVDozRncvE9jfzyMo1ABZyPUh9qjVLuhZzf1SnDefka9KabiQBVJmorfaLR7ysWfDWUDSA1d9Tq6RuVM",
  "key11": "37Pnax5AHVmF3RTR9ienXP4oFnQzWmBVxfQki8tj1tMD6QHJYAwA6qLN6pRvpJgMMS9S1hy9TgYZrkCrf22bmV6Q",
  "key12": "aBsFf2H4snyiuwNDSWB9u4RhxM25sVmVTrzH6XnFVctds8ZC4X1phLeBuPuTLxYt3kuPgq9chQaMtoYk6GmTiNV",
  "key13": "3bk5c5joxvffgwuwXRq63unPeEPWo8tz3xwBpUzLZrbjbuTDdEWuWi8BsHtAp9RbQtz2eVFCdQFzSR6EHAn3YnTs",
  "key14": "44twdvnRyXjnGhp3XRiNUEZUQ43AgUpu9ugYgjGYz3PRc3qY7sSvHWydHMEHenRAYJdxpfGKJymRsR2N1VZ841PS",
  "key15": "2budyYhZxvUWiKniamVz3vLGNpj3wRfBdYjGM1FaBAaN9R3s45Jtfm5j8tfLVhBxuFPfnTtLy3PJHTJa3whkdf4V",
  "key16": "A4A2UiWTb4Gddi2ETaF4NMAmhdnHLYKszDu8aQqzRrHgd9QvSc8Yi2uCdYzcQ7Rw3xVBdiiSvBgt9Cnc1YfaMve",
  "key17": "54wu5mWTDrV8wcGwLLrQobsnpRJMqmRsi5V9ZH2wqQSrmUUYqo28Nt3fbBFnhj6gYGkvz8SVsVJWfLC1nCCcMU2j",
  "key18": "ed8z7b3qCrfNqe31k6nvPCdRGHKCnaXE5cNjKpbKU2vCoD3QpVw4UVJLpP6AvaDc929jP7BniaPuH6HB5esf3Ej",
  "key19": "2ZA8K4mC7UzPfkRRB7KEXS5iNukRx2AFK6d331ZKLwXJunG7FHwa7HSJQ3txCjvyvD2yjz6PCPG45essNpWhVzBv",
  "key20": "5ozzvfz19s9mYAbkJiy2F8p6e2UFNb2rzGfKQdPo6NB9NBYi7rQBXCu1kAVvgFkM2f3wfv96F3YBw5Q8zoqevfom",
  "key21": "2HYvq1ANynBJ2UdyHvLb5US1zzFzozZBZsyG6tU23wUjxqbLXTRXERNsTLuLS8FYBT97TrTh6qHJ4TzChvJGaHV1",
  "key22": "2EhE4bVsapBK59g2kQLPDvDHwxPJYdFxfexVH5bnYETRggkMxLGLeCq16rsif7iwCvTQ7ZWUe6w5N4vtaa8co1Fs",
  "key23": "vzHMJB4QboWfTLNBxY8EWB8TZiGKoqjH8t1didWqvFLjzNvSmM5cfgWzDt6nLvdXCT5uX6HjtkJjffbe3vVFboS",
  "key24": "56vXcDN8Nojs5vdvNBacQFnuGnH7HNa3jhLPc4Zxs91hwtVGCMuYdfVuKG6rJteARvTVQkNzA3vtGj2ZYRsx6q6Y",
  "key25": "5mxXpw7rALYGXdEqjd93TCHeqDtLTKMQBtx3uohKZawe3qoxsXWmfhuVgL2YKkAhBfwUHZNHPx6yy7UXvRvi6ihu",
  "key26": "2QN8N3SFnmDTcqv19WAMhXkxfUoKyYePHsnNS5LpjhYnLRGCY1vQQK7X1oaLsJjYexUTeT9Xqdz3aWX79h8bkfhY",
  "key27": "2XkFYqh8dtaU4o35v78jfuC5awyZnxp4ZsZGNe1bAWozbceahXFo8ymPbWjFQuhVbGnqku1QsW337r8mGDcwLN7K",
  "key28": "2UFLndpiJwSMoSoBT4ddqEFyyF2toXMBMxe4eWeTBiKTgKgBwPwrUJMvSpuJKshhmwQd2WVfWmAopP2sXtXeoT5A",
  "key29": "3zMcZFFufqe35UUtGB7hGH9BA53mAGLmhfsGqnTUkDYXJyoonTkaBsQoqqp4cVwAhArrJZzhQyTiTUAZ8xQdiDY6",
  "key30": "2zhspVD7VcTxVBNeAkAVrjtgA3Pe3rS6anNycdDTWdQAsRaMzLw47B5ix6fQPNFtRAaWcc6Bzd6A2jQmSDBvVtoe",
  "key31": "4FHq9Lsx5CcRKBqPKkWYm97ELdzUng8edCeWDxLW6w6WYMbBRUuWPVVxzN7dYEUL1P9gyiSFc4kXqfHcCr46Duou",
  "key32": "3iMKcgZqLMt5Ztg7sDHWqJi9mVYfWkBh8EPVyzeYxSUCiRqwD1eKzRkWCzP9W3WHTU9nvX94xqaDay86TWxPfDp8",
  "key33": "2zpEnpqJojwnvz1vxrBCL86pwA9HryniUnA5RXWLtSZ6E5yAVmYvoZa9yeSwcFEpQrWEpQjMUZGrDacsdpo3KArZ",
  "key34": "2TgdQfqSaseS7eLwz5ifUCVYGQXknfaKWm7V8tTui4yX9MAgw7uf19aDa72qHNhs7cWhx5UpyiuY6TbrGV4D8pGp",
  "key35": "ETPcVpQvy9cafjiBQe9HJjysLzgG7RKdEqJ6PfXnt7Ji7P2vusRZPSmirWmWTujKNCp12vuFZaw38kSRGopUsSq",
  "key36": "xwLpQGTRGNhdqDAcBdcPiixfLEJrAzrAZEuuQCssxD3HfL9C6dQEXywdqCjmEBXoScgXVfxJBLPrYjRWzwX16Ag",
  "key37": "5qoc1cFebkjQtKnw7hwZo6rPsADGkbfspoc2qVXqYZbgJ1RPGKrDZqo4CT5xFMaiMtc9fKd6EuRYoPgqumAVy5oh"
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
