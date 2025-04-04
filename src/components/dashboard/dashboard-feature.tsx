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
    "32e4cWiTZ3KZZr725S6SYEqjR9Y9sNRHjq1UgmcyTKtjRwdpqaqqFuoPtJAWQ6LKkQRMYCbvJqkFtsiCxdetP5p7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onjzVHQqtskDPC1jCvwFirhUZzizAKnTTK98Csbxw8RTbNKArYKaRV8WTu2Kmz3AEyjdyTEzCHZ5F1vekDEXLJx",
  "key1": "3XsF9XLtwCHgGgM93XqXYmw3d744R5SBAeXg9F69mJkVyfEM4F8jwLrTrJnF1yFLZKcL4TxUNbX69X7LucbXwmbw",
  "key2": "2TejfQcFhR1AsYHDGdf7ox4zNWs4f5aSci6W4wxVaFoXJTTd7Fb4u8mbuomxv6tNea7RPKU9HrdB76SsBUSgovp3",
  "key3": "35YmvsYqdZg32seXX7wq7se9aUGVUK8h48MrjJXUKS3EJEWBvdHnqdYdkQQWsjXbNPH5Ahm6J6MtbjwfgQsuksJL",
  "key4": "3uqxAvocF8B9KrmJY6otUYMcXXzYwHQcp8sw6EsysnUiZvEpouoGTr33AJajyt3qCt7jqxXdMANXajD5UktWQm9k",
  "key5": "qNpdZR8WptB7fvLYVNBoaZukPxccfGqUC1aW9pXrgMdsUMxmpYrXfXPrjkZ3vrgHsdYYwrzyMjepr7FZgCi8n4n",
  "key6": "2VG3Pcxf8gCcCQfrM3VorJpgUHeMT8iFSuB99QRveGRfJt83N8igPJywQt6BzB2Lys4ptB9S8jXj4LHk12kFtMrW",
  "key7": "EQK2mZxYWzrYn4PHmC4TDzuL5AyRQBcFbAGFvqKoSicmB852qNQJMCBVGpaEDSoYuYHbVAiXFs9u2S5mGELLTZp",
  "key8": "3rzeJEr1Ki2S6QdrXL1Foc4rkmxYWY9oxASLYvCr2rdSUQssfZgFoXZK5gBb1gRQ2wD7duHTQnknyzr2ctgCHpMZ",
  "key9": "3fkfVx4w2Br9rGn3FL8NG4NhSqDz2zgDx56Pq3KDGvnbhtiQPkniuPjQuYPx2ydYCDLY58GRJVhtx3DS8DXuU1qE",
  "key10": "GXKySBh58qgEWtjSnMPKd98C8qCFzUKuMJw3RAcMYqR67V1VkTv69KuN2jbSzhLRB4n6doMGmWoUrKEAaiLL2Ys",
  "key11": "33gCphkkHox6Ey2sZH97A31ejifCxTzpo2hEaUwautzDiGB2CDATMhndteeK5PhhNqf6KFZH3EnUqk7Hkkwv6MEG",
  "key12": "4uSN2q8jTot8FPLEMjk8D6XudifhcGpkQM6E7Gv1Z3fqoiQMS7qJeKMcDcc32AjLsEaaCJ2MH9NBzhYPrMVNNU8f",
  "key13": "3PhqfHSLyM8aFd4EdjTzUjRjeDnHBUVFsvJVzbHaEFyygp8k5JrKiqrzcHBnZdUwB9MvShF1xhq4Q8v1RFuHzASA",
  "key14": "2usTv94v6LVDRmdDcLme2bGtaWE62o3jQqpTL9DPoLUZYUCeSMCcas2zgHRqx52mfu17gPhAcbwWCoMRUnncCUGa",
  "key15": "pRGMbEZBJepcg2yZpN3rXLJkxzMVEDPPBX2QXZfDEmBp8QJsCMC8Yo1RhVXjYeenHCoHykW8bcqd9o2onKWkz5t",
  "key16": "Xb5jV2uYVKyHubSsWb21q6oftKJNe56devDWKXyDUZeR96bb3u8zWU5VZtnynYo6TauecYNKKyxSmzeSULVjT7A",
  "key17": "62WzvJy2L3R2ufLaXhhJHhcD6hHsyXGLikQiyhi8v7Bu9XDEZUZMhhzMHN3GydL1zERLkciUqPTodUdBAwmQBG64",
  "key18": "64mj1HZ8JLC8KJhCsDoyp68cGqHthAyiZSAa1qkQdwx8E72whTm1u7KLXUeP4QF9Lb6rA9vUXTVVwCMGY5BivjJ",
  "key19": "zCMmKUQG5kRS9uLLakmw2wAp6ytBgUVQzstKZMkDekhKWQrCra9bA877aPV9wQmcqgwNnz5TsPXJ16ZuGKGCiQ7",
  "key20": "3CwA9ufMJ6NjDLdjjs9sym9aY7EhXJiF8Fwg2sXgoQEDrwcMFKENAndUCaKvior8hHPYTbUnSkbutAvXJ1NeqeSy",
  "key21": "fykhWdumpqexiqay1eef8iw7ubNwWRcJiaktzRdRCop8UtHDckgLSAijpWq5aMrCvGAr4CSgywfqnZuW97Kikq2",
  "key22": "23FosSewrGN8D4tLUuPKtCbRGkQ9kTZgnhWWgbxkAW4oNUxMRH97nHA73LRmXhWaq19krL8fzkLeXHGdXrGJu8Nw",
  "key23": "3uwREVmJ1KJsgsBJiEjwNVuP1Qiteh6cgRXAnSoSAbn9NiZ1K2Wyg9A9xVJRszBHcWLTh66MG7VcUAvUP5stumwQ",
  "key24": "63vBujfTdr4qAZwj8uUDnqbFnabM4Krbsm7GqBdXuEMQnaCHFqy9g7TVHixjXYm25JzPowFDMw5CFa49RX3RevtH",
  "key25": "5KsBL7yoavbBzgvu23Nw5B6phZCyF2sf8QwfTUT8svjh7jvTN2QyRvCyii9oJBHtKaKohKHqZUQo4jKtkAn4pXPA",
  "key26": "2RKnTEbkirXsNPzQFUNsCZG2ACZZr81KvXWhSF1nkHkJ2Mch69gQDyNDQwJCcQSu6uL3ZhkhcMrFQzdB64CEsUzF",
  "key27": "X1bao7QqaHBrJUEAbogNL2WZexCe2GB5sBah7zF7KemBSjjoXfhSFJJ7H3bC3SQQnsxUUe1j7ne6TojkLGiFJ3d",
  "key28": "2hgmSAYCSv8u32DaxAGBh1QFjXyoGpaoFrfzJk3xXYNq5Q9VEzzfyGvGyp4ULCuho4m8QFVpkcb1xzubgmrgkDfi",
  "key29": "3mg39KPjetGwyquk9iZnznPbeFNKCGciQZmsLRrA92RsNUD8SkqP6AGzZMEAm8n1zurybgZ5pAW8NyYrHjyhSNRs"
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
