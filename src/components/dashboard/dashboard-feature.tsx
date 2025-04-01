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
    "2jPkcC8VZjK989BZSnih7oYLmjAd6BCcr8FVhrrYwwEaRT93WKU5zrYXfEk1VN82zWut1DsUTNphvZVZDAVcVWum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eBpmRrm9VkUf5TdKNbUL7sWjYa3cFhqTi2QoP9J9MNDBNsRej26C2sKM8vwTftymR5cZmzxcbQuHU6K5SMy1YZN",
  "key1": "32HLp7WthvB2cc1qLfcDgFQQkPSZMvkotKGhNGe4K6n4PKS1ScV41qxE4j3zbEzkxPCu2xMkQsEUi6wTMv44LQBC",
  "key2": "3Gq9scLy3NhqvL1eDgTVccGstipxQerzi5dCV67UgtHBwYXqcWD8noSFnLMSa81y6Vw4Nf2fJN9fw6NkUQohouiU",
  "key3": "4NG3QxpEXFfWqnKrDLUeMMVL8F9EJ6Ykoe4Zuo9vUn3erZEb6Ey2vpD8kypWckLjNRVvEmscdQ8bUgQHwezwuvoX",
  "key4": "5gaESUhbfWaNXUodeAoKzEZMyGEKtnf31giTAdBPEncih5oRjxhCc1NGpxoeVaw4LqkLCq9T1WGggKd2yodYVbhX",
  "key5": "2gH2PuvvhKsd3jEezS2ACqAysMkqejT8Cg32xx3p8ET6WSQ7fR7yRhXtrHuKf8jPQWQBLJaXBYTWy8sF9KWLR6xP",
  "key6": "2MGif29mofer2rmzFQzdYAWaY47YokuqsQAtZWPzFSXuwo7yn7azcLVnVKdqhC36n3i4gDo8E6YEX21kkykrBxjP",
  "key7": "2P7CBT8xnmSQSJeG3ChM8gE7EdaLtmQD67LL8pD4cTXR6E9aCms6Ne2hHvr8NFX68jroaBwZkvtXbfXKwtnpqMRN",
  "key8": "2C8fcXHkk98bAguiBwL164gkwN2hDJt9M9a4pk99rvjKSGuGDLi5PPC4UDfR7Xe2qqxHWyojPJrpNj7rLCxMpHEN",
  "key9": "5BZb5RiG3XNSFdLQ6g5h1Q9872SNHyZZKUs37vF42C6Mzx9fvar28J7JSsg6QvS4HJudWycqB5obuwCzrxuJ6HBW",
  "key10": "3vAayF64pZJ7zD6EN95wN8AZAXK491un933BmEkinrarvzaV1Xg9mmjxmkhz9Uyd2bGVY2BSaPrz2m6JiyhSCY5R",
  "key11": "5vPp4vHzJqd6Z4qKQ3YVMNbQ4vjt9eZvzEmaDZHCauH5qPwvkRCtMnniTftmrX1Yox4tAJ8VPCQytn3wmeJv4mBR",
  "key12": "URPFr8HgWqoG9F2cJSsrf78UNNf5cgq6C2QdBL9WoCpvawGrKjv4e2p7ySRawNxMxeRw6ivHmSz3iDdh2BNxGJd",
  "key13": "32pYSPfDz38ctW4ka8EFfzo9knuivjFinhC68aZvvkkkkVKYRARhf5EXd5QdwJmsGdysTe81rzD2CER1aFTnDQwg",
  "key14": "P1efKTuoB5qfeXtgngFAXDPZgUc27z3w8aCDHre9k8HFB8KkjD1UMZxkWV1sYSD79c21vPT1kL88tBk9Sk5KeoR",
  "key15": "28w4boRupVvRYQdPYbPqgbN2vWr7fwemJdNTYzY29BMkvF8csYWWE4H5qSejFfg5zgeCvVNRNVhTVWBuAuGX1MyA",
  "key16": "62tok8ZnfoFwCZT7tcEf4P5wG1vLpCwu5fxKHsKPRsYksVz89Jq3ar3fZRB1bbvhPq3UKC3oguWqVHrDKKtw5SzS",
  "key17": "4Fq6P5wEzY5vXk93GqbFTAYd8rnRHmYCyNPrnckhRLFovFC72auEdqGUxdq9dtTk26EhfxG9pByu8MTFzn7Vh1cq",
  "key18": "62Vqwo6SEtmrcGkGg1mmqMuETQtgDE7pSoPa957TPoCdDENXvGYutCdUHB1tLnpT1HP2DLoXwajWG28D8JDbAx3f",
  "key19": "VAv6HRGom6VrvPf8UWjJhrW1jAnTKwsWDcyhySQNR1xHKi3exkmE2XjDhMWr9g9YLfGZuNTGbdfmg6wRy9xhEEJ",
  "key20": "4QDxcsLnNYG7WiBbUPe4dwxrrqaDpjRVEu6gpgSbzE3iQ1hos3vnU86DVNaFrfpfSu7gNx5qMAATgmJdqjN9WLGu",
  "key21": "KuTDkkfVb7C6WPSGPqSU9rRr1egDSmf9sWTLjQCof9RLN1DTfxBsi7JfmSoPNpMC18umSwCEGAiJtniFEZJkAy1",
  "key22": "4rZWZ2qZwhmwzHuggP2jLcTpqjyUf9GHBwBoYtz3HQ6frA86MivUdQkj7Y23ihGgQoBxumL4PBfZbfDNwRkbqDL7",
  "key23": "4Hqdo69UEvQMA4Xts1nTvZA6kK6fmsgbSEtUzXqxZ1cMHpVSYaiatm1HvHkSWbYfEobmzUwjCBiLyRvj8MDCQgDh",
  "key24": "5rsMxRx34pGAjx6zW3wVdmDvaW1FoKcxKYPGsP19oCNWpJGRptqKXgXttF2VGoCz8yRfJWPQQEJBUjhTxHQV7uUZ",
  "key25": "5kMNhUCzyFzDT7ev55EFMxffjgrfSvSPH9zyafhubA3HC7QGKCnbTBtQjR7QevQwaJNew9VaJCUMUMq5f6kMnPhj",
  "key26": "52LToJeMf4kUSJhPjmrxhAknhcWzwMsDx8zGh4DFiBYJ6Se9UCbeC5nLKMnZ5tW8rXGVywTrBkUUYu8hfJ1VBPAZ",
  "key27": "5bEnTartTzUfLKTy563WX5jcKPkWZUJCC7FhVzR7gt2qs1hk7n5jwA3UQ4qojwmfiLbxAwNfedbVPB3Qpq6byPn7",
  "key28": "4so55qPFJbzMoGLKsCP67NoYMKFnFgrvyh8xdhMDjH3urZuivg9vk6dGx9vKdJGFmXTSXb58M52eeawX2EuXuaKs",
  "key29": "2u4FfDHv7QY3nwxrWLwLaTFoqwDnYsaDGM4FEJdxPd3r6ikbFWmhYFZPRrZc8vsabidGfui5h54suQNadujKPfdj",
  "key30": "5sRT4suSZxrhnxK2DZG5YFXM31M1c9bttNyPSQvPEoeKth3X3Sd3EL349dxpsejY3ptkTWj2z8KMsxeyHFLQ5BsG",
  "key31": "LbJb7Uj3fSy8K8qWTVMyWuTiadczbYHYfCHeU1GYo7gvCKAnKDm7HEo1tJnsPVfchbcKCzBibTiqVtt8K6qESsF",
  "key32": "2KFjthBsxXcXYKzW9Cm1iJ4TmtvbZMtYTNcvTLj4ByKRHL2tNkw88i32E1HbwVsdZBRNroVDBoP6r5vHPPbznoVP",
  "key33": "6jyoyandSuivYWUBpW14h2BNBETyTnYzb1QCBu3MtEpLEZFBPgm8STeBGGGNQPSHV6FS94jNuqnAHZBK3tURAiB",
  "key34": "2QzpNnsPLuSUyFwwFnFV1NM9GZirSLCsjMjEn1aHugTPETVn8ab74FEdYnNsB47eJYxoZtD5Fa1xGv5RhdYPMU7G",
  "key35": "3nPF7J7F15134ziQ6nDw5efeV8kYYUwUTuy86vKhx1xwt8fk7dofVL5uJdMnSGUsrkmJJQM5paHun1AEtaGXjFZZ",
  "key36": "mVYJtEwNxu8tY5x9N5W3mzKYUZDAHCEAZ25kqr9T887ZJZcemGjGgTsmTRr4qh5a18YVzb8zD4k1L9u38b9ScJC",
  "key37": "wATMDUS18kaj2jXSR6zGdyNrfmyypTNGzyJFBTmNzpYCeztg2q1dyzGpewcQdwL1EY6YCqLWhjisB2L1LwJGRo3",
  "key38": "DsGnZqMx7ATVTaMfPZheLkyfHZShzgNEAFSxodYJC4CyfyAFNR75qB7NY4otyALc9BHbGcLX9wTRpWf1CQGxFze",
  "key39": "2jRWKnhcSUqjJdCftBv3QcCoEnXriBj6CbicHPKizTGxDk4YPSYkT67QbDJY9taUv4DUVv8GxXhNJoJjnkrdVBd4",
  "key40": "5x2KztRgk2qRqLnXyoJi7WPrg9C9FkcqYnSsHTBFYW6HBpW3YRLGzUGKSDgjB5DWWu9wAyXkW8U2jk5YTfYvgtqS",
  "key41": "59q63JTCQJxGmdNTnBwKVHhKZihPyHVQXnMZ34kQ8nvubfQRVptP1nt8HCBzVjnz6duwxACyHAmWLKHKKJjyHe7Y",
  "key42": "2gKjPCHiAwvvGX5594R9Vwo9fDFzp7cnR8qdELGzoPAR4bdJWtfCaWS67BTPRH8bpdwjk5g8ZXF6BxW59yPqaKa4",
  "key43": "4gEmynDjHnEouxZUmcgv56auDK7d6uTUDkNWFMkbYoLT9Mh7QHYTcDfs8gT1tGzZ1AvmVJis7NapjyrQGwca1p2X",
  "key44": "5vB3pVdzYULGLmMG5tAXafLL7qcbFqHSrP4UiRN3hucq4bzyRniYbLU1tNZEiXkuYP6ed134qrtj3xjMmqvogG6E",
  "key45": "5D4gv2kPnyNFPP8QEWHR7N89w2CcvQ3iSeqj2ZtqfGPWD8isnqGrSjBx2DADCjAxoQTZsLmbbSqKMHQbNkRzaWf3",
  "key46": "5ExeTJUSj8nAX8XtxBcAk3sfCZYPq7SFFL3J6WRWKPWfEDx5S26cSXM9gfwfDRrP6qzEeDduMniSc8YRS24rT9Y8",
  "key47": "4KZiJN9nUp4m69w4jTCY61Pg6SZqpu5qxbV7imD6iCbPGAtDUrYscpwssyPWiyxvMpSUhwaAnBZvrM6GSGg6tTFV",
  "key48": "dMR6n9HnxLVacqreu39sh1umVoGognZ5TbJhv18DG5wx9XC1zvwGL1rDzjRbNKUsry33MLTMdBbMBqhKJJExZGc"
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
