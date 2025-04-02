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
    "4meAWsKXeiWr4rs5DyAcysYS29QqidywLWMZrNtoQ6bAwwTUs2XXWoBcd27JQMYfU9nRPpbr8H5wT8uAGUdJUyiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykxv4yo48TLDP4VjiTsYEPKnvLqsXgPkmp5v4jv4ekrY7bH2NUE7Bz2VfwmioVx71GAVy2xw7kQiTTeR7D7SK6U",
  "key1": "5qsP4V4N3RCtWPmWHMn3dWAoLW2VExfCsmrQLdPx8KugFEe2QFagg5Uudj6xPe217ctccXpepDp56zPA52KCU4Cz",
  "key2": "4zA8N2p9X8hpT833Yp6Q6SzUgcr6NSjAZtyKCNWVMooKGBjhtU8yruorTckszHcrnPUmRz9nYYmbrwTYhup2yGdE",
  "key3": "GkWTnXuzXfJ52hytJ53skRh21c8Lj8rrosTEBeVd8HTxWxCFFh1xhvWKzV2sVB6UmvZg6kK1XfouJt8AB2zxUnn",
  "key4": "2vH5xv2VjBg7hUaFiEVRwSrF6QxR6uP7TkCgEwazjP1acbPhR87p7CBxRFxN3k46YabnjXgbAbGPHddzLYkKwgyw",
  "key5": "5xR2p634PVzemaF9kUsLiTPqMTmuHUyc3d11xbibFZnWS65qnZrw9iLSBnwuV25JfcAEaLtPaHiq5RM4QaPJTHM7",
  "key6": "5Z2pRuhXtvGux63b6R4ofEBDCjcv8Y2v7KpZGVAZMvHLR8nD96jBvtXdeT1hM6sxERS8aXqQFybjmVzSHHuLq923",
  "key7": "31i6DXzPqenN1iPFA9urdwLLFSZUEZi3rtV5EAzrHjc5SV3YAtm59LU4DZTXnXwxbB2gk73YDa1faZTD1sY5d5uD",
  "key8": "48EhLjQvmzP9Shu6H8ZSB4iEiz5CBdm5SeLSpDjJXnFgitbqdMsguQFtjUocnZ5LdtTzzTQSEBZx5e5wNofoVdbc",
  "key9": "4MSaKvfccF7JjQn9mhLk6n3ypXEJ9bS4brxw2p9p6RzXEi7YbFaz9ZnTKyGuxmVB2HQp2iVD8nmt6hxhF6WWZbXP",
  "key10": "4oVes5rct8zGNLbnYKVkZpmiS9cqFWadpX8vUUGEkVatevCwxqnAHwnsArYcRzXd6qgPgJn2nHbFwih9mXWeAhzP",
  "key11": "4X3GbH9HWabThWruYAnb8ZKEM7jYFUBkCtz95tB1opJfS6QctUHe4P1V7ZLuJpq2f6R3ZQ58sbpS6PR86Cuj9e4r",
  "key12": "XTPmcXamnhBtSx6Ef3M3FenZyxpXovUYCb8RuXFcS6Qi9Dcb3LJA1ERPmqZZj2A3YKrXK4BRuRddNxvUNDF9u5H",
  "key13": "2rcMwGVA5JpmA6JhG9QiPQPAaeeMHmEFJX1DVZxorLzNc1ioBwYf5JahkQLNdUcNUmkTjbja9aDXLU3e1W1RnBkt",
  "key14": "3oCSvjNW3fX8vna7nKUdxRz8hwiARNLxRtyHecXBFV5eeHg8b35VH9nLSmexQnpUN3dvc6duA3ExNTk2d5hUYDik",
  "key15": "8iL8tuD7tsDZQKsov1N4sbWde8SvmufuZYqswQJndGiLjU8gy13zW7GfLudPqELC7Vy279jFnDoy6Wpn3ofazcz",
  "key16": "4gLGjqUBTi61Zyyrhgk5wLSijqm1SF1HUR6q2EQ8Vota5SB9DgA97Mp4JQY6i7NaZ4uS5s3jy6YA9XXuggpo6SKr",
  "key17": "1a6fcat7bQKWNSTmNCUTXB9CpgnZXioRTkEeN2yEtPUbHrpgopLwsBK5gcnXrsBMwgFjy1qQSa8EwXQxxnNBJ4E",
  "key18": "EUkxwEj4dqEj1b8RoSr5TxWDj3yib7XQfRFS2jHVVn8UrVW2NAWmKkEtgo28jdqRqzGKd3YLTB29j9yAe8Ej1ey",
  "key19": "3Xs95aUbTGvsVUtkiaC5vfa6yaZXyeiL4uMpQqJtAsbmnxbzMpaCnRfRewMTrrujwfk5WTTWQeZyHaZHLUtZvUsP",
  "key20": "3AuvWxRvXExSuHxPa2RFHqacfDgPTbqkizhMWHtxZcqqW26SVph3dAeXvhxeDPd6K9kfo6kbQqKTrgUdZodf5wZM",
  "key21": "4hzJqdcFnqC21s4nZHU49z5fv2YWECMdM2HpeA8LH8VrfacJnWh9YhV5xktjBNUm2qEkF14dJxyHAi6EDfDn91g4",
  "key22": "2EmekYf3cYq7NefBr69q5Gn7P6mQsXRbXKerSUbmwS7GJ6beJPFqKwEopcpmjwzqGgXdFRZpyEWMb468n8jJyffb",
  "key23": "2389U4mRyfg9Wq4DKkhaJ8tjtHaZrXYmJNVN2NuBxNrqj5XZMv1bfxkzihvuiihuJBQdtAi6gZuigPE85LJ1yyoy",
  "key24": "8vXusXmCVDjHPULgxjZrcsjs3PCeVpZDsf45RUJDLCiBfx4Z2zTK7YPJadyMrcwkf8DYWq9tNzDBFaVg6VYyA4t",
  "key25": "1GAZDexQpzVvCBxUFU3momsKekqwmHcF27xVUdsfCQ6qMiBEjVzgpoQou5CkjrASHjceuTPRvAG6ith2a3A9Qdd",
  "key26": "56gwzPbet1wy5uGyHBf9RrQDSpZ5nasJLzgYghcYeZDuZ9NRkW1xZt893m42JoAgSoez2DAg9cs37pV4urHpowx4",
  "key27": "58moCU9eC3Fk5nTBxL1qTxYR1ayn63Le6D5qYF9jnrYVoa1i5a5GFN4RM8HUx21FaiZoxx2TWu9bCsgzDy7u8cbG",
  "key28": "368fyF2wdFWK6CC4e4q7VkRVPop6iRD1JAMNA9PuQEZSmKCqTWohbbxWJeiFmhPKqGoVNeoEsWuqhuTiPcoPHhRu",
  "key29": "3heDTTa33g2oqUEka3capcabLg46Hv5ka3qdpsrpJAcwsZY5K5bRbCyNty9VzySe878GFqjhao76dK7TtHPdnAUD",
  "key30": "2aCZ9ExhK6T6c1Fwma28FrLZFAW8SLgekTU1PwBMUG9owoj8GYf5H3Kqt4tasyWKhc1UphreK9rknAqEiWH7HzNK",
  "key31": "5P1zWggzCmeKXy2n7rJCPPjtpE3oFyzzoJUi5TDsFDxu4aDbEQqmjGh1TRE3p1ej86Axhjudsnqx5KNMXTkiEvzD",
  "key32": "fjZA8NtRyYZW75tSP4hYzQuq6iQYQYATXSvuPqeqAyfWiYz3touvme1BLrsUmaRn9MssU44SsYuDUCdY7YUMzpM",
  "key33": "29tZF4y6P9r7WMGuoMLUAGbUSx5yk3MshbRaLP23jWYpp5wokGpw4SWdJBQsejcgCEP4sMNwwj6xmrVUSKd7K1j2",
  "key34": "5odEjWXKYEuDRxz9LmGVp1h6DMNfDQD84mSV9YEzw2vEhjLM3VXp56dY9uZYMbuH8YBWi4pxP3KqTzuKy5AmHgXh",
  "key35": "4PzzDGLHZWvLx9RFbPbmWSfUQTM2DRpzvgdW6SfxA7JA5KywdWX6aaNeBxUSKMH2kGPRaYg2cLk6UMkA9328oiwi",
  "key36": "DPVcNU2rMkhfe4wUixuzrpojc1oRAMqYouUGaASHK3Pcu15CsEMgEQ7HiVMyzAAXBPjESJ9oFMwj6HKZrD3QdoG",
  "key37": "4PmT687MKpmZSNmmkUB4cPW3DZV6CHmxdHepR2yKrC29DrFtGLMurnUP6VynTUayD3kBmxVd7Pfb2M7L3SQESc2P",
  "key38": "4ypKVYwf23ayy1zSG5S3X1D6b9hGHGGMyu6ShhRkPfAGMvbjptji3YauevvYk7JwecAasBie2hAsk43X9sqyNM6Y",
  "key39": "2YkjFTjaxZBr6oUBpmbRUZCTDpCFoCrr1WfSw68tzqWHNR1BNxNeqGByNXncQbyPkpzpA5M5d1cztutWwCufZMdo",
  "key40": "N1rqBERQXLSWENywVcGESXSP8b9TeiT6EYfiWdQTLXuoR1kxrCZgMaVAeimBtiKr5UGiViEwEVqTJ8ZcEDZ4STy",
  "key41": "5KTg85w91oaFznKVcJXS3uUzN5WM2Un9fyjdmXva3vD6HbamPi3zvZu7AWqZja5eW9xCt3er5xWuqvF99iBhaj4p",
  "key42": "Ed4vbaUY2ZUzS81rQoxcaTxCxkutsfwz7AJjMa2fkJFSL3JvPB6qTjfh9buWCY7k31FFxH6sqMYb61nXvkin3bb",
  "key43": "46vjrygzeEAqtMw27bjYjnvneggZoXRgFRajb2PKDUURBCELgbsHKuZeMJZit6GAFRAPFVJs13NXF5g19ZRCcaQ4",
  "key44": "5efP5eejrYfm8W29EJCdWT4c54Q97Qu9CHNQxcfvWjZpMkpGW2fR5hqNd7AhNMKTFwvhT3Xf7uGMApKvnEcndNYT",
  "key45": "5TgzU2reBhSyCZCNZsrP6rCKd1CGsErMoqrrDqt8c1nUHuhD4t1hBhancj526CNcnMWJJ66syr9oerkq8i7nvDoA",
  "key46": "3pAatXh2euVULAtZ1wmz4ojswtmj9RAwNF9WvDfonpNoyHjdyY91WizgoL6ZzvTLiJPftD86b24xmGaMyLZC5ykN",
  "key47": "48SK6JqqEoCypKmNnSETTWqk5NzvaWtc97texQJHcW3u38pcpPzCPQNUn7rmh4ghRsMkXGCdHpYPSNhZumo3mNf9"
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
