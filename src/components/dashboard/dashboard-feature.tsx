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
    "5tcRoWARJD8smgCrhDQK4DZAsT9YuyBs1ApyaU5kcJnuZvGxRojeqqPG5be8XEpod6vABxJQ3uRdgaL673xzA9wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D5JUfagfkAu9F6MwXWbsLfiieq2cJP4spe2kdTLqeNGTnbGusSvfnBJffo3Km2nf3Qbsd11bqjmWiykXWB3eUUD",
  "key1": "4NNvkN1GrMKGy4hi6yBShFtUbWpm195iF4RW8anHVUbMtm2akjiHytqhdctnV9tYczfkTLmYPdXfFSTYcDzWqooa",
  "key2": "5CyjWAw1PF3XJcAU7WfqyD7DvYUEMAAg4rh68M5y5XPYedEB5qnH72xYy1yukQKRKnRXKFauBBJWN37ZdoiY4Lou",
  "key3": "2A7UKqjrTnhWkEZi4ZrxouENQQYCRiGiVp963KViBcRUKJq19FuDFbEJ5ksX99eytS2XxooS9JXEqpq7ucsBxXUQ",
  "key4": "36wBcj8Lo4zoCMFkKffQALFZk8KQuZeChQQK6M8u7hwAuT7ZvGAQUVhYsYeJTasFAVoCfMsNrG7zHzUuD2aY8FpN",
  "key5": "5KaCh64Q7bNpJ7XMRk3zXcSVATin6fbzYJHAo6ohkpiJVTRTibEgUnWHVPJLz5uFvz8jBfYL5eoT8mCk6MzR8XNo",
  "key6": "5U5okrPqUQxgtu8G8CnDphaiB1DR9AsWeqfy5ghb7Z6R7SEMvKcvfrxA9YXBEgNh5u3w8qbSBtSjm7Dtuk3keDGW",
  "key7": "tFRcKzQnFrrdRXTNmZ2aBor3jhyuuz6TZ6Vom6dqN9saJKzsPM23pWcWmHEGjR2YhhFgjc6nhc5qw2U92KpACri",
  "key8": "2RERGFCYniCkjz2oi6ytwkzQKk5gXbktMvgCTPTmxZ2ywkRMf1nj63TpeQTj8uAjvpJCyrNUX8dU32FvMorfWAED",
  "key9": "4wnnM3sHWmRGfKinBZ9m97HFpKe9u6MikfLBPfZib4fbNFN2ikiuBAzZ8XasiFpjPRNNyQJ7RWqrps21pWckTxTe",
  "key10": "5UyhKqdb4YSmvBM2rgTVnxsZ4aBefT5bQDeQYXHYGykgWVRLaciMYzYqdtaf6fpgpzmMukiYqxL6uyAHL2G1WnTi",
  "key11": "3axH7jtF3DwboZPQYu1728XNpKDJUarQcjJmSemriJ6n1bcB7eABWCiFFQ5MvAy9BYhemyHvmsqk2PVsn73azne",
  "key12": "JYGJtsZyVSnvNxXpSzitpFh7Cb5WrYVdyGg2tnBMqHfpBtaNr2KXqMqWqfbNhre2NG5brVAJgAyWCPRz2ZitPve",
  "key13": "2asF5fdZfo8PR9fzdRm73v5cyZy2oodo2iKkNV5HJjCT9bdcsonDDNTyUzJfscsj4R1MWwANk1ffKZvvBZbftTZL",
  "key14": "5x13ompgLTBKSv7JRWFPszeeMFJzAawoEVuSSz1evYv5YvBbiRKWhd29ihfASsAE6MEaX158GtuHDT16YuyPuWpd",
  "key15": "4pCfXQpAkCLPKo9wHhKHXVqhmCkroqpDKsKtWwcnGMe1FoPov1F2qqQq8T4eM8iLszRcpGY82UTXAPFTGFGEMWgN",
  "key16": "54LkMQTgJjGufCvZv6aKi6X3s4nJ4Dhmov7Gt7n2CAH44gNikY6ZBV67gZxWgLz4UbNUSKjPXAzesxbUPVmfhFFq",
  "key17": "3UCR2g55aVyzyC6CfhDFTh38nfGnxMGEd7jbsRjqYNKcUiAHSLmHn4VPwMbCcyExXxeVw932ZG5tfkkTq2bvGBAU",
  "key18": "62yFujWFmvFz7pNyqEa2cLzf6V3J5uRtnCFmDLEhpzqs3yb66RB67aggWJ3CR3jGGHe68twB1vK9wKLWsrkNXtEQ",
  "key19": "FcNMAB5jcMFf6ECCbYMpAU3su6zDXkonJd2kZLnRvesPYSjkf4V6KQ4Boh6HhkREeHLMBFwom5bdSKVPxw8Qupo",
  "key20": "Vdzt6t9s8SaVCGHz5f1Epxdfs1HhrgDQFMJgwxG2AChrzGXpwaMgKmrGHDr3PgkvMAs4h4W9DH4VkYVA66rGC7i",
  "key21": "2E1FxCC5URH1ad5TAL7paPw1uubxQf4fwh6PLMYSrES4LekZSp6RuPinphjuqYzF579rvaFUWjcw8BnegWcekRvK",
  "key22": "yCnqRQ8F9QqNG4tM5M2oragiWT95WPr9JJQyBu2xm6SJbRHrpXCRXXthVNJVPdR12u3yv1QvNpzQ1FrjTixrtCH",
  "key23": "4bCsrJEqUwj3V3sfkdt49nvnE7ay4Udi8YDc7LpLcXMTKWMciUWX1xDYxBYazXWL8Hsprpz9pooepA7s9DcrA1gx",
  "key24": "2zHYFJs76e1HVBA9gSibsjbnKdorrCDvM7rFhggrFFQVqSXpHb3EFzu1FKfNVRyghUcZBbVgQWfF8aQe9o21FcWV",
  "key25": "29CjCwTSctovFsNQ8gMkwZFZVYp1mQcmXrU6Ep3J5xkgHNWYAHR9phQqM15GR5q8aabVGrARUnb2qQhCnCkiK74J",
  "key26": "2VWSPiHP5WAb2XxcorqNXWFyWHABoAJWT5tbUfpgVSgXhAeQ6MPLiQJS3AgTbUXmEvwhCg4De9U8gLnrcSfKFHWk",
  "key27": "3cU57tnL53vbSApdidigDV3HdxGBszsKGYT3uhjikqZAJdGKAzXLtXUVuRhUkdXuE3ENbxzmtd3x7wZn3JB14HQx",
  "key28": "5oM9xK8B6Ns6T6vFQxR7gYDnKfXFdBAdb7iJ9Si3bmKeygTwKad245tRihtyF4g3pzfMkciPSZXsqvmyUxv4aipV",
  "key29": "218yv2XNJ1RJR9MQNgpQtGXpCU3tesayWFyVfEMKK11Qfk4JtaB1Wm6NaPAhw6dKZyaRKPSAgPW1P1uvgwB6xem1",
  "key30": "4o9rZZv7zjdtkZAgwfwRvrQWDfwMNQqKUiCqNKFavCQFs8kJsPXuALmapJxPND1Y9JybF8ccBPqeda9KwR51nYBC",
  "key31": "52mPi5NX7Eq2auorMj3zQzFqxaajCB77ELhVqqShrbtBjTX6jQBZSHRqMNScX7L8dJtVFkoiajVosRZKxNR2RG83",
  "key32": "29VE5b4nw7Tgr3YXdcc3PDgGgDxbebNh8S72GrhPyVaqUHvvrRjjDycjVRG9jQRNLB6VzqXngaitwNuQpLSiG7UJ",
  "key33": "4rffVnftF4B8NtE9yzGhZKnApEmEjdvM2s6xGDC9URcC1rS6oN1ZJv4ChbDPeQocBntnUiPif4JQeutQy19iEHxt",
  "key34": "5A6oFuJV3ADj3JoVBsnU29sf9wRbs4Xqgq8ibEp7RRv6rCm1sFk18MzdLNe64vokc4Dco3gnTKuPJu5RHhfyjtJz",
  "key35": "5bjQk38SvUBnFmxL3fS4UiFy4Fnoh3amefRz9aQBxzxPNEBshUrhxHawwd4Rnbwm1Bktd9oNdZUyR7S6wRfxNMKQ",
  "key36": "wNSkt1BXvZKc9GJpFAg2YhgFMnaGKAnoMfV59Ff2pnDk1ytqQrDpDT6FF3J75Svuom6HYzGZJnjSTyS6J9B2mKo",
  "key37": "5CQWvnimm6QibbQ4RCSVwPu43hhuYyme9TkE2aGzMrEfTMDXvH6mvhpHbafFM11rCLMnmMbFt8HbLmEpNkPM7gKq",
  "key38": "o8oex8szRZEmXXWrvQW9u3CMpLZFkV23rdZHVadujEg7aun1pi2WQSmCH4ZwUSi4uKexK7LooFdcoZa6MMoia69"
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
