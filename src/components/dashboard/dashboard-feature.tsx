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
    "4gTnJUQfJN7tZDVXzgVYzjgnDqJfuFjW9yXW22uj31H8HqLgEbAPGskNxm9q7VAcywUwfCfwhJCJg2VQvVp7Nd6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UzSmW8okztzvigHQDUTLqc2wAGB9SVAc3aEw6fSnhnfWbr4wJG7437YZApPwPiMsnxFBRSChxMbnuZNy5wrq6Xg",
  "key1": "MvyatkUHggFGuCobS7tDyiDW7CLu3zNp8T46oMYDSv9qkeuWsx5z17PUTyHarN4UoBbv9fiQYCX8i7Lh6Srz9Du",
  "key2": "45f9ymZ6cSWWukQsSfRGc66i3iZfJ85EgL5MT9J8WYQhGmmYGZM9mxKYutT8wDFWowWcPHdzwmzzXd6oTm151HEk",
  "key3": "VncgQqV1vE3jjy4qmjBxdHTnj82GDg6kQooymfUvTfpbsfkDbd3VrQ2hQQSDZTKC6VxyfWedUYPdwSm4RBiuXCs",
  "key4": "5VFWAbSP73V7GtqeVKs7PzeH1XVKytvsGrsiUE6toHxqiN2s3qcvAALzR6jFyWw789pCHPDQSTxSS7TsCrQ8Cn2V",
  "key5": "mD3EF6S43DWH3XXurRQ5j8GKK43gmN4ZjerQ3aNvVXH7T3Bh1oR99bSdFZfhMXBisaU5j4y8oEWP1WpCSQEx6LL",
  "key6": "3SQ6tXWoQYyLduApiD3P3xXWjg3NsUuRQeqtmNw6o8DiBhpx4wbzfF2HQA1wAci2oowdh1E4B1pkkjJtDhxxaTLN",
  "key7": "62Amn7F7FbUdwFiyJKu6bJLYYWSKgQEizbmSZLR4bXpoWebH3BPr42b69LThj13wXM7AHAoJBsnGwhmytwWt11wm",
  "key8": "47C8RpQnJkFsPrPEnLEBpV9hZoMeW8pMJQ1HrvToZdSnibPfitGy4qXfpMWjqvCKyjAxPXGYJYiZ9yZFxm9Bjknq",
  "key9": "3q1D51wZccCCbLV95F5jhVcC4w21e1Sj8etXRo7H5wJ1A21tnNeuQaiqxwiQqCDLEZGkT2TU5bJKdksPvmbEhyWv",
  "key10": "3hsouLSTrpmGSh8WdkRH9QbKs1HQb3kCg84MXT6s93E3hCrxPv4i1BZ57Emxgnv8bbv61H14pLRM7FUo92nxbthT",
  "key11": "aVuNAdd2ARb8fT7begikxnxGYkFjcu1MGAmt4etff48GWucG6nSYoaZLfv6qLqdYtJwms8416og5ZhRWqMXeWpB",
  "key12": "53bHXMpEsxfmh3tk8UtSmB4MqbbKDoZGUV2oE2jVhRwfZjz1LYW7JzEwvkzjNwX7XpAi6VJRh7eTRs8WQkxvAu8k",
  "key13": "2Zsb9TsvZz6j9i2ASUUShwBByJv8SaUqBX5QNfdeuJmMAWDTQRBN51ABoXiKS7iMJY8byJ5Hr8dbN7YDFoZNm9EH",
  "key14": "2zrfbaLon2PFjbmLAogBa4XA5uDGbqY74kkcbnCUoCHTr9X6ZskJhtGNh3pywDFSut42KvSc2jzAJgzXVkULV1QV",
  "key15": "BMv1E1BcTevZbbQwTQmiDAuxUarBzm8PqJpWjX95br67WQfwBJ1aaK7c6axeF3JfGM6V9E5PUtAeTYZTTRDAoSb",
  "key16": "5kLeuG427ZKS6Kh31jsi4E5xoB5MFXNkoyKrUuk2ZVhTcnnXPXzjZnDqyMUgadwbtK9pTjREsmArfNEsBfaTdvtK",
  "key17": "2ZyrsZAEMUf5BgcynaVcfnoRZ9J1p5XyMocpGuJssjE98yebnaTe6rqzwpdN5dtfe16LqZSPTCYfcNAKv7G5N1NR",
  "key18": "7EZ6xTNrGCXCNq8goEFqDSzNzsN92izkJDnvMhBHEeX1S9Gx4ZP2d1ajVUDe5AUMSEQBJgKJoFFqz7c7prERoY6",
  "key19": "4XAWo4HLrtMa7tEJHBVwK3RemMJ4LmCBxDikXSUdSNrF7F1xctpTHjrdQvn7rLqw1xCvjM7DyochxCPQ3mg83PKJ",
  "key20": "3PW1FcuSBBCtFz3fTuu4pzdUKMmAPvPg7YGdPnnx6cnv9wHaYbA4SPArUtXgwUSAuAb7jhenfA2wWYzcW6AmVzH1",
  "key21": "4XLzCPfgCMp8UHk35txpT3dnQhfuv73hx3e1D7m7NK3fjumjGo6kgwx2RV43Jrj2d4y3MB4VtHucsQ63x8tapYD4",
  "key22": "W3LpyYVkjAoLGY4Mcnrr89EHuWuGPGKh6yfbEk49d1y8WDFJk87kh9Uud9RT7Q2mpk2gE7D1Nis66pbAZQyCtHj",
  "key23": "2vZg4VAjGHmd6HPuzzQ98f4WpLaytkbC95r3aEgGQNX28eUM8w1PN99e4Pp1Z7k1wvN1n2qUfLeUnT9KqKML2xjE",
  "key24": "38ZDUnaxZxKCMknBZrniTS6aedztbHDcviT7iMLsy2oqNAGyWzeX1cJXTt7mCWitCq6rnn9YhfotMyX5fi86aukK",
  "key25": "nQVQ5b23MQW2FQYK7NrQBba5ikRkmZCi73oRxiazDqN2imFkybxozcagBGQe5MCPZ1Xa391FSWLFSbsXGU2bVyw",
  "key26": "2tZA4SVrEG9VxDUPLU6r7V2pmjhgT4c364BdEexxbP4yzpVAxWrp1pTSwvRkigKnJQqv9ydutTaWK8KKBphh4bnh",
  "key27": "37gUXSdvc7aNC52zipnkjHVoMHyqcdZs5fRbjbAhzri27UAV11NovUeY5X1kTTC26yoMHx4tEka7vZ4aBVXjCcim",
  "key28": "3Pb71UBSDr18jM6PxzpHSwBvB8Y8zXBHJKQwvVKWYbX7nroxC5DEQsiyEZFDkewKUjJnKQ7ADZzjZH9zmqMXRsaM",
  "key29": "2uF9yJhbxt25TsD5tjW6gSMpVws9LfjXDnf32HNwgVCbuxquZqG1SkZ5Rs6d9dh5Zzc9yqLRdTXUPKDExD5qEXSH",
  "key30": "pTc8nsfLaDSWayoia8Up6fjP9NsqVvi1h9ZQdcg2HEeD5ydzM6TqSyxkWCGquLwCrtu7PUD8KWuCiDiysiHoFYQ",
  "key31": "2wHXCMSABRWEw7jaomWgWcgHwRK4QLxE2LEu9VXwza8tJT61vFCSWUSfkDGAREZy1nCgvE5VjJH3ctfprWCNvd2E",
  "key32": "4uCQDjqHVaSFvptGcP1ppRgdkNEk8Xhd7Sf3HTpPwCDepqyojZCNHVFoJ1BwN6crbu2zATKJBY54RcsvyqdtF9ds",
  "key33": "2A73XjLTxwrA4S5mTFFa9aj4LjnsrbT5MAAGKjrbm5rEdGirEDbu1MQ9mMUiAV7efZELTAF3Hd5uRFUmpaYAyyhP"
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
