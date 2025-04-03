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
    "2tKAwDaqV98HStwkSnqQbzdbM7QY3jNaXGj3dxgKWZ8nfPvaMUzLm6szQqM49tC1bYCEsmyn63eat4x5HY3bdn7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ELAk5sQkGxB3crjqzuVqiF9VcUxmUJdKc6MbFsK8nqAhSnqdWgwFNdBgLoAqgbrZdfPgGNUp5ez1fW6j3HCopr2",
  "key1": "2eVZMyrDuAY3FJZ52au1vW5mAQeHMHgNi9M3fzh5sn1tHPMD82uR4mwyhd5t7EkwLTLrXwXyjHaqy4RrNaps8ner",
  "key2": "49ZQVy7wZdQgdSke9LbAzALjzffbGu2ds1m8otk7X6xhVTGzzXDBkHZKJj6P9F2EFjDdqNw912ouae9ce8vKp1bB",
  "key3": "4zcShdHcrp3szeYpUstSj1LaTNCLNa6X7UUrLXGBSXAiXmySzGM3mcL9mWZAScqyXipyGWkttKFmmhTzsqXjSBFH",
  "key4": "31T7M7FVWPYgxjCFrpDkkznoMYxMuAtPVBfaw68XhQ758NNtiEgjJfHY732NzPN7JmfUDUcKgFmiCPPXYuzTwsco",
  "key5": "wEYcXqnAr5Cz9Kyk2MzWD9vrPUBqoDrDqbDmUZKAxJcpiXArGkd6H1m2qsGMrkEurQvisaypLoMeD6bPZ7AA6Bd",
  "key6": "4msVUa6PdwBUqwKcVvJoTP7fLAF8vovSjuqDRcfTsU4fGJVQLCt3vHJzmgs5q39TgM4dBqUjszKkdyRSp8pJKeNE",
  "key7": "2XaKFfbi8b87ee45PsvhCcKn1sqBbyevzinC2Ts4YKcqBx1SzfFRdYUJZ5xymEzywbFda9AynHGR3W8QW5GMzVJF",
  "key8": "3kBc1pAbemkFzRKj841sR8T7rCmp7D5Ccmf1tew2xqPpzznYS6z5YJoCAwXSHH7vzWkKfvHow1aoxxRqcw2MeTDv",
  "key9": "2PxduEinwBowduvRxG7gacDWcU2t5uqeUHtaxAqarSo3FAEvhD7BFysnvuCuHhjddC5qaq4wS5fDCCukbdXa5XNn",
  "key10": "5JDrnAwSBxqjEZM7cyThJJiuGPKAAeRaivSErFYB7EEjmeS7DXpnJCv11Zd4s8QLHv5LfVnqSGKWNjuAXPFhBCwo",
  "key11": "5aZGJ3uyrqopHZumcgR9DajCSjLBHiBjbYj4HKiwNJFGk7gazoC6sL8ywsCoSLGrdUHxHTUZ8rM8j6aEDJqAC6XB",
  "key12": "qWedQPN1pGJ73mUAGxPWdxWyThynXtjDdmJgXYzE6uc6ynpXrkSgtwE3sG3gCzbPCkyUhSKuHjDGZ3i5c2ffcXe",
  "key13": "4FznUzYqy4re2dUr1dK8aoZMFHTm9LhYeJBAadanex8yh5NW6YNQrnKhPQCdC89sPhap2dCjpgon46XWcbDPcN1Y",
  "key14": "4aoMSwUQNGRLLVKXAuGUZyxiHbvFK2iDFXGRdJ5r7riZdcKuJP5nqEZRGhab6VKVKFBXWW2NLjbuLQxUpQcW5HM1",
  "key15": "48fM1XTuBoRzYYDAvt1nC2vWBywXzt3Q1CcPbD3bg7kYs5HnS9Z2BeeiG7SwDTY4g9LfqCpRuzVK4gMGsLQ4SYHB",
  "key16": "5qWQJV7VBrXnUKjN8HvrJx1VFY4TspW6MFoB9Kurta7ghAhm4Pt7LoCrPCLdVVHwXSawY6dPizW9vXi36zo9aGKV",
  "key17": "3ksGQk7pM4zRaXt2eigAPw3x2JxBc8a5jPyQYnVGU44VzduL4AkEYNJR1JEhb6nXUBae3f8NAiC8H974bfdJ9ifc",
  "key18": "3zvmcTJmTZQtqRX4MapBzusNc8G5zvAGtbgegf9wLrSKDLHtycD2a4L6j7WeMCUueKrSxnYvFSbCDYokRLgfo5xX",
  "key19": "47JvRoYLEAhccA1muoqj1APRqP3x9Mgb1QEDrV1PxdCyDeGc8g6igkjaJsS44tCoZFdAYLFtpdCB9YfMMJjcoULa",
  "key20": "3o2c6sJTGoquSi4PTgDy8kKbd2Y7SXgj5JjQXn9VnrJZPwpbTnrwp6QmX15TGMjLFfGTpJXScD18crgnFQk3r2J1",
  "key21": "HVYjAuutxtYYRFYRXS9NYMcuoZYa4EAH1YMqsehTKXTVdMWUxHNpmvr9JUkAfc6WvbdJRk7h8scUdajwJUErKhQ",
  "key22": "42mnYU8FQvgShapkvwaHY3KH2nyN9xpXegD8cnbHpfSybZFu7KDnk944ZpreccVYS7bRY7HzbvCV8n7fDR2Ch7Lv",
  "key23": "5ciVK5D82cbQUXHivx4R6RyUu4mfqzbhiDnAWLMhs7kFPRuYm6h45WM3R4ugvt2jnc4UrtNfJjYvh3NcQWxdwjtX",
  "key24": "5e9tjyzgLVVmJSmxu8bQuHRjEuy4jXEi7swvWm1nh7G8njufSe792YEzyjFZPzwWWBtYoG5gUpbEAxoZoxKmrkoK",
  "key25": "2S9kbZTTBqppu2xTB85wivTmBRbCXugeq4tYz8aRJLv11R9kNyZz1JMepRM2syD3Wy3NaaupVp1Umjym1NUC7cYW",
  "key26": "48JRJjsdUkkwfaJjyZfBDQ9eDvS4ZmnEqaWLg5WeWdbWFxbmZJjcMqWb2JXzYRWEJhP4J4KMFyafZFTTDcVraeBY",
  "key27": "3UCbRdgmqoZPex7aNn6jYWy69aY4e9BLfuhHPmgQdGerFSMr7xA6GgCfYGQBbfo6HiPukHkXe2yNWdaQSx5QYrCE",
  "key28": "5QGmGVBgGk4BbMhGSQArrj3qxjaby5mfcoWKQQH1aTwsnpYwuCZmaBKCPK2VkodtmRsTZxk4TK6DrMNzZDCzkDmv",
  "key29": "5ryPmd9SU3bA2Bhr49JSjn4Ft97gcLsnM2ypqufh7RyyFEsGrPRHFBBZpktMYAkAamZVgzKnGmiv4YxRqDJ7smRs",
  "key30": "rP6moS5462PAsEsuNcHCx9GUdSjtndrGfYL4CMd8tRQosV4rg1rNyHCbBVNgGbtpyHAWDz5p5nf3UHdPUJabze9",
  "key31": "3JayT8C3XHqkdDCrLZqmdUahniDXyFPyaytqCZ57pkjhJNSMTPqNF7xb4oJHyyEZ8T5MzFybWrojtgfRHPXssg5",
  "key32": "4wn19TTafpjGK4Gfs7tV9PfCdBLJu9NsnhJ2otSfHp41DisjSaidYBgVspw3wLn8uE1BNF4y2FqDKDJVnUjnHNHk",
  "key33": "GQMLXzzGQbGb2AMbNgR4bcSYCG6RE4WFkUvDGdyQmrMQtT2YAXfQ2WwYfKbK4HR7YLbMoPNyYBWRxRtJTGaSA6K",
  "key34": "24rQfdQM472iNFY32AjNqug3BtEsX9NE4FKmnJLCA47tqKiRUD7Hw7Pkt7gpxxVD1MX47v1ViKwJDfzy8CQbgBxf",
  "key35": "5VLeNgYYgHGfmxATSWDbGnQDbTVAT7K7SHKqTugN5FpmXC9h3bQhw3WG2q96XTRTF7b6X4gNbahJcqu7tRr8nFYw",
  "key36": "c8r15UEsPQWZxD2AFPHntDiSjsT8H5yFJF5qbApK9Bma7653ykGksoGF1zXzXt6qV7mBxW9UZV4Rz9JgExzftPG",
  "key37": "22KjMWV7cyNsvjGbxXW9cYyzXwU1d9tTPeeUXaUyJbQb7bcDaiLREdCLF2f2WvfLWTFHZQXQqScHNRZyH7bSLXAG",
  "key38": "2U3euP56d98J1QYK7JJQrtYELA6P2HcT8dkcRxbFXsd5S9LnuqKeLgYJ7H2wQfiZPFp9feyP6J7ZLzbMzGNgFyfv"
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
