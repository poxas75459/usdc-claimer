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
    "2yYVBYMTmTdz3un4nrvav9F9HqrfGkfsNKRb9RytNeBmwa3nX6VQE7MCXGGhYaEBs5oDf7fDxHTxRFJa2FR8bvFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWSsgcpaavKQMDevY8eH6Xru49vU1K6StaNsEDWg4W3j1wK1oXKhNKmyZmUjr1JP1SsDbNYLt9Gdu9FWJFSwgD4",
  "key1": "3pARTrNAowJjWNYujvmYvbpqVuwoyGCYbvnecvKyuxw7QtARWwUJa4PdnMAwudBQ4wqc4LXrmV5EfL3ejE82bzME",
  "key2": "3RdwyBZVimXTraASvrMUzzrudMp34X8BZS6ht6WU6HNnFVyLzYwSgSckbFQ5Qoo4AhVfBPCfwR3is1958Ux37fd8",
  "key3": "j11CzGaVBy5ZgYwdP6smRVgkakiCFqFGzbfmdeA22cQhkruK3qsJVgcmNB8E9p5VKdyeouCY7Hmho8a7J921LN8",
  "key4": "2baViAcR2bmuFy2HidFSKtsNDFfY6pin4SpE9yrbnU8VKHQSXbcrH4u77pD7dPq1XkJV27Pz4HH6uZcjWkTdwPrh",
  "key5": "31F2SiuR899k97Y1bvxDPh8UAtvRMDjBJG1LqU11q1Av3b6ZVMJuoX8cLfF6F2hHyN2B3dTbCZhiPvUjuh7hoxjY",
  "key6": "3fAMDqPUcTb5ZrRqquQPBoNT2CCwGSnthkfYG8fkjGTGbWdyvznwhMAqWewib2KXQk6m6iAnEzG4A3PRKXQpruaP",
  "key7": "54hiQr1mmLtnYwkABwiFf52EmA47rbQzsAPdCDoh3GSLcnGBNKKLjJQr4TxEcVKW9vYVmLJpsn54F3fwP5XZCpbr",
  "key8": "45hrvmS2a7F7wsi1NWi8ALtf9V6QLBzBP8mtrYJGiJsQSPw7RBsscgApqPR99hqmMG998W9m7jpt6ScrbBuk9SK6",
  "key9": "cb2rHxhCHxLAZx7yX7VH91DkRrKELN2bRdMWZrKN9r3vHA3U4WJmmMmcdzSr8MXRoAsSYMEDxvm3io4gLXG659u",
  "key10": "5BsZjQY9E5vBMv2u6CsJrmdsdiw3cjNbPYRbCPcQ61xgU4DrRLTZ2uBnnmxqAoZJ8z8bzE5fy6LjEV4k2PuQuiFz",
  "key11": "CeRbVL7MWjd4JjJBHoPUpfUxLqboedyt1XPU8AQ1QfUSexiuGiToE7XW37J8JYSFkRoKe2hb3GpWggFzakU7CFW",
  "key12": "ReBV3nyn5w6ywcYatdKh55YiREutL8HKfBw1Hd32SBBDLAeXahThGh8t8uTop1rKN2FZinba7uFexh1S74gVPBM",
  "key13": "3M9urf7rJmzacVyxYMNDBPDnLwAieFDsVGmiHa4zZmGASCMxietrUsjEqjaG1MQpQGqxxn2VHH1KKNk6FsCEKoMQ",
  "key14": "KHQGKUFFkiCbKdn5ZPpmgGUwdqkDKti3HKtJZK1hVGvLz9i7ZYJYBN2rpWDTrNMDq6vyrqvBLGJRANbgYtr7VUa",
  "key15": "5RAmKHMWLPkU4jQQR2iajaARC8aBJfsJqx8q6u5kLUWmYoBfzTX5wKfErHHh4oWd8NKpEf9tHxf75wKFsRmvLUZX",
  "key16": "gvBa1p2wYhUXJ9nKpZ7RkdiCn8QXHX8m55kUaHLVYJN5prB7gB5rxajwR3Bk6xFdW6VWRZuqV15psxMK6CwErqT",
  "key17": "3Sprv8n6xEv1bcMwzfvc55Lj7wqnJBGk7vNptiHCj3KfN7RLTjSMuFUBjapzfevPKaniZdBhor5gXwUncGzwS5m1",
  "key18": "ohXfGNjxPEAzysx4uKnLcM3jWv6RrnmjxSJjXpruUMK6c7BkAnD6X38xXWq5ekkJr7u51e5LW1BEWTLa6EVnqaa",
  "key19": "32LBXj2cgrrfcu3KecFdRSQF5QqNh571R8pBLZBqp3X4dXSNSPdCtUDUgmY3BftUF93HB7M857hZB59gHNsweE7L",
  "key20": "4AcfySXxuZkai6FjLtGDg17RuGLy2tQLDzWN5qmoU1KHhSvH9YxPHYYJSPWt1owRJe8hw4pzZJGNXpxQMteR5SRp",
  "key21": "5CQGnZMVRcdGhrkMuwNXn1naD9FgcpqbLrRzno8zLSnmxHiytKLCKZJn8g8C5fmtqu64qLcox2U5zDexosVXqD3N",
  "key22": "4LC5DqfQ9NaEJ2gatmeVPDdCVXqZqwkrYDinFW9HU5jR6YXcqJwVcWfREGRZY7giYjV8V4czwVGGMq2YbgMtNLdT",
  "key23": "zKtkfzgngqoaSMPTsWuCKDcdARXWrBdUv6WJqtB7vLViVw9d25UkHwfZabxh37JVb1EWaGcoU5htkAyskghJgCt",
  "key24": "4r5FUpcMKYVo9LG215xgP4mh2CuQRVjUTKPACmmJoWgyG9qFaXaeEbe9bx3KNsH1BXvcnUxVWkTm4EykzGsfW3hT",
  "key25": "4AZhzEitVim52Vb7D3TbHb9FkcqgVTWvhGHFwoBrUb29GFWdg4VBkjAHZJCaMj4u5VGAXfA9mpdqZs8CXCqKk47v",
  "key26": "umz3Ddxbe919fDAL5FVWvsGzFw7fWAbtPhTsKFERyLcJqBNVEyoKuF2FtR6VucmxBud1S1RLfD1eUPoDeaCPVsH",
  "key27": "42zczbLWw922k5bBN6JwZGCbVXVytbQ8TNiugjGxVPXFJjJU6Tq5tpepfNP2BaRTkytnUM3mP2GTuUdaJozW3oPm",
  "key28": "3WpYPqBsMXgQ5AGKAsFshHgzYAD2wxgV8ZdhpDUknqQF8KpfcnuYfwWyeUFNr1gRCLypnn8dpDpxz1LW2vXjBxKy",
  "key29": "3J4ifCyhtg9nGpYxSw7jCAESFALbgcZfXLw9AEFpGv1ukPLQ8b5CJgs1yf1bRjzFkrrJVYwSX3MkwN9p2FeXpWLw",
  "key30": "26sKtFBkWh8PGiGa4ogD8fxr9QAj4hmK3zU7aUMYpNCZPzhUtFMgrVjzmzpkozrYtwFEAebu1pJfex8pCq6CBjSH",
  "key31": "4aUQwJjKoWTNb5SxoAN2weoaKuHuXAp9R2e6ggW2PB9wnmrnTQgDPeSJT7Nex6rxK57PVxJtkG7L2qkzaxSchFNy",
  "key32": "5ckkioFpsrKrATkxaobbWifwUT9wzwdcRd1wgqHamuG1WQQtrF5wfLK5LhdPms77XFB9SR43cyaWzUrKnevcc7wG",
  "key33": "4Y1UhyvMbbAJcejD5LpzegqND1HzEiGNRUkDqs1mzPgubuNBGvYtWtQTcFvvJ37ZMXvKDCMj6G4cJPCqhofTcqoc",
  "key34": "2FcijG3xdSFV6FMRJyDJpWEkgEhP34a9PywnfqiFLCqSivSDFukb3KiiBfb4myfUMNhknqayEnCsnmogwZk2cnca",
  "key35": "29qGFLjJ7ooJuAU8GoZgMMEuXQMSmmDK3NdLTSqAGJUy1qWFNc51SzsBdsmrzNntkhbNbCvZQQFLVhnR7NkaHu5k",
  "key36": "da1if2tRZ2B6tYV65LkC7iDCv7pPLfZ6qnTAjEv5F3kEsv3GzuSYYf7mC9nWbVTmWRS9bBYjaNPF7v3soR8oh9x",
  "key37": "4tTbgv9KBZ866iUijwroHa7vHeGKq1EgTAUdfTpykVrHiixqdtAeL2ESH91qS2dFtqhRajnujCDxne2W4ntwTq91",
  "key38": "5MJXLhag4Sdq8R8seFpeJ5pVYfcvkQQqaC444X9xBK1tWFvhYdhKUWa6HZxJvARkyh8gpTDjwrG62WB9FEDudprq",
  "key39": "4tMR3aYDJRUf61EfrpLbvmcyWhXWJUYWMUQqLTWvxLrbS47WXNVGfN75nKXUYSBRX5yxycTC9S2WC2EjVq7hvFG2",
  "key40": "5feVcwjbpUj8sX1Pcts6QwzScm7rcV5dvTb3QsKkYTSmgZDbXbJPJqvKw2rUu5VWUbvum6MB1LBLY5r64tzCfAiG",
  "key41": "2KrbZad2WFKHe6K49hLxLN2Bk42Xz1TJ8AChtPKZ968Yi3hRTM5PtQ9dEKpY2tanPQkHUsB3SaoDfcjKNAkR8HqA",
  "key42": "5hwSxq3bRTJvHRohzfwJjqXPtbg9yfEEcvq8ur9tLVNKRgeEszyPXwCc15J8LtkTi1Ue8nRdTpP3YXqqMDR77g5C",
  "key43": "3QFYDjAYVJds5P4iT6V8jPqzgsjjQKjhcovRwcp4cFrJeMhv9pd5ZJwCSpYfRUfQw9Cry69VJwTWKDkvzxr78vjH"
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
