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
    "5JDTkgMsFifZnu7Q2GqJk36o6y7GRzqFUQqSS9THmV52NPFbtyUWkphzbiEByT42KSv8HUSoZL68Eyu2hJG4AWki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ThFmCYmFs8YmxpvHhG52wQkFYW8MkEKESfATZRZPjuxs1ZKmaCf9fdfDa45xJ2H6yBFBK1cDB5XCg65cHcRPYaw",
  "key1": "2zM5X4nH4Ccnz7HektkqSMwpwGcz1UXRhUB3HspVQVjAPUmX25FbaxxSkFg66JCM5M1Z5otCUqy4AiLY79Px4grL",
  "key2": "pRYaf7C6Cjp1sHbD41GKMFdVgrCyUWjnA3UZQNiPufZMW9uq7EvMYdM3YXnnEA6ujzwPEsMbeGmDzmgPZJWusJU",
  "key3": "ZLpATQCxkYQYxbUf4yt6jDZzK2z8AtCiofZUcuQQZhpHvvLUALC2HEjtKxarkk3nH4LewoiMbJWKNgzbejRaoJJ",
  "key4": "3tcPLViyza2MKbayh5erkkiRyqpQmQPBND7j8SJr9Q1tKN2PV8j4DYpux7ZaJbTw7qqfZXoNu9DmM467STunagJe",
  "key5": "WcWj8ZYwQ63FhguDTGsrjUBJSYom8o7QdKagknxj6W5RsgG7oaHma3JXsvobCDALd65JeizyEA1yLgZS933DqMu",
  "key6": "2JPWCnhE3mA9MhpLrK8FQwEfjY4Jw6WVWY6YrCCeHmFjSMMkpFhPDR2gi6VU1pgAvivyezn6kENoJoLPqNSZhAEW",
  "key7": "4wpYEsdvKVGSsV2CCWP4Gs3QR6k7dm8qmW6CT2oWNM1hSXPM6MhuLXLWwWpdrJSQuAuhQNBYziN4b6nr5cmBRV9V",
  "key8": "5rzLusUxAdJxHYo1EKGW23ca1PTgNjmW7FfkdXHsyHmJ3MR9mn6aFAXsHyYPAemjrvQDrZXzDXUBvrbtHiq7hspd",
  "key9": "ao1PFEZyvAAw5cp88ia3mv54uXtuRXL4sReBcNws9TkW4zvDXqMegCnCXjTcNVvB1Qe2dJE6xAQREwYF5aXve6b",
  "key10": "3CduqiBzLmg3F7VTTS69YETkyQgfDjXrAnws7wgrJw3fktFd3rYPDcpeBHCjBWt7hSLueQb9fzkGbHU3exsJzoZ",
  "key11": "kmWNDUp75ViMoNTTLei8Vw7ZjojSfQnHyqskAv4ttZ6wYAhbAERsSjADsRacuJQL2g1QYtdarjvmbRzSpSgGzQD",
  "key12": "4ktLCXF7ubqmDJGEZ4c7dvNEqqwFZe9nUXB1R4nsLYawQiPnXhoWd1koWsduK7aQCzzQKfDAtmk2JnJd5nnbhnJ1",
  "key13": "QwWsR6N1NFHGAV8YxBQJ9SELATuP6MVmJq5rLXYymrseAGrBLoSVzyHd5xXVg4bCXoAuNGCKNdD9N1q8BrB5efG",
  "key14": "24cgjWQwnzd2JffsKQVLg5L3Sq6YDecFALj7k7hCfdY2PXv4jfhAT9bFuRuuSpYg4r4qNQHtsrpY9uW9P5mrEzay",
  "key15": "5itUWZf8jajWwDkVXUhEH4nf1HBGYpPZHDZmnVjX7UY1XwUhomSAWYDWbpXDFRYn2LaHThrxA45oUNzDHS1S5FNN",
  "key16": "5LXntubu3Rts1F1EeKYgVQq3m2EyBgLwfqyznVnVi2PjAeiuwNa69ECKiRwaVZqrKMKQFFos7gXnULWT2Hif5XWW",
  "key17": "62Vfe2xFvJ1uhdfTFxixj6L5CZELnj7LN8c19zRS9rVKL98atro3kdtqJxUWxNeHfi4T5WQLZNEjhRhpagLhXY96",
  "key18": "3hkZxRHVm8RAfadzEQKZZYurPXpYvPZxLNJmUwnNsQUtYi79YQCXNvxJYSXgbRDAVR2jqM3aUKA4XJtRqHxRCZoo",
  "key19": "2GF5dZb8yD4FsPAKLZWn46NFovRWodPi5vvFCTcFAQvQNXXSmZmCjYyL6hyxKugPN5AFBjVBaa1w5amPS6suPHAv",
  "key20": "4BgaZEgRnKAoXqTmfjR97KpXGos5gLu1AYqr1a6xkZwsZT8u4Eat5SKFBjuQf2ZFe5H7rC5awDcr9UhyvQVfyUNK",
  "key21": "56fKKsenXDgjHYWVPchrQGFS5AhQjon8Bqj6KoHD1TLRfT7w2zbsXXMid47LN8JvkUJh2u4noKTRxw4A8TEANmpx",
  "key22": "Z3LCNq4m43u3mBP9XxpWZfvdqkoyadb6Mp8uR1Bgt49R4Tz5WfXenmbYFNGKgBr11mRJFmuf6cqLrRH8AHSMJUj",
  "key23": "2BAsjyDAw2HduQbPGXRTZ4zDS1iUjC9TGJoagJ5RY34acoU6X6T3LC8seYdKYLjZNno95X4jWp1uh6KpYpomci2A",
  "key24": "3K46dw1AbDTiuPvAzQ59HxHFXZT8Kvpg1Dv9wAvMXaC2Xpqxtoait8fyjLmfqJBzVkM51Rx8oV77SCBHFgxj8u5R"
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
