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
    "5iyqEZMpy6QoJCYxqN4xRHpbKG1CEbjTUYq14j53oGJdnWcsfYJ37uVpJYzkFRaptAnEBz3y7CzZeLwC47jJkHsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxEwJJbJhhPMVBks38GgegzRfZqcPjbD4BSAmjspU82QRgUKYsQYud2HaH2ijLhXDSGx1M7sty378RDyM317LWw",
  "key1": "4gHyvrQc7aBdGe6c1jwgqabRbfiVaT68UmGswxrxrsvnqsrTSziNfLa7TcaX1zMwp2xsvrFxSGXxfrxLCkVm2aa",
  "key2": "52Uo1tERUxoVLLjpJtdR4NTayAePHZuA88Et8eWAsP4541ssgHAyrNTzcDa34G8PnfU1e3yZWaJ5ry4DgKU1XCB9",
  "key3": "3yo6eiogAWMtPeDef6tzDh3sBxxWByi95wNwLzE9KT9XpmpPAwna7XEnY9eX9yQUky4fQ8SGwvTAfVekyeBVoxsq",
  "key4": "5jvxJBdXQ4ujp1EqKCp7G2NA7kTLiutZemomjUfYENc2yp2HTAe7zoQniFPuC1Uwy4irzhmBDRTrZ98ZA1ghGsau",
  "key5": "4u9ouzPo543HEjX2j8kG3qjMJQEnGYLsZw6tZiFwAfFXx4yCz8qcwFsM34nvefWzE8XLHXb4QgL7ZHgJqwmzBseA",
  "key6": "4Le9EvaRcLbWJCUk57NLEw7vwjQoVwUgnJXHXXujZWNxTUS7K2P9B9uNvJTAQBtoWSRUDY6cPmbKABYCQGJGjxZL",
  "key7": "JekSrvZf9aWokXvGo7ex4AY1GuFXChmQNJY8RhYiuMLdaLG7SjRCFdSwQ9um7wMuPk1NMEbDgertzXhgodsaejN",
  "key8": "esmGT93zxRJ7Cren87MBHstXpgDwoB937V1oSthW5GZrVhw6adDDez1ceTQ3TYTyvuywTbfb3JF1sEjNU9eRFmb",
  "key9": "4gL7jusDxnpR4og9EzLFnzXKDCU7gwr9UQYXa4psZUZvyQmgMBGFKXNbjUyiRzZRx9ig2yVw9EtfciZp9kGUYPRP",
  "key10": "63rZLewpuazhr94DQ4gRCNBksx2FpnEZmLjfbhu9C1Q2LrguzRuSJ8qNRQa6cNL212uBwz6G5F2ns7vCTwZHtYjQ",
  "key11": "4miwoiXw6Q2TDoLDmH1YJyx7X6NezXikcLVJ76GkXPFL9A9sCTxj8eqQsz8nYLVoExdWqai8vdpVLRTjeLv7xjJu",
  "key12": "2qkW1dzWBdNWPJMZFkngzuHY66xhaXXWYmJWJL22ioD6aDe4N4PYoYVER54PD772ryiZoRFiPWNAQdoh4H6P7qtM",
  "key13": "xiRk8dJXJN4x9t82UpyXnUMaVGfmZ3tMtAWcp7poKm8CXcNrzvSvkj95XGxTukBuc5YnqL8HjD7MBzxhYh3VBh5",
  "key14": "Le5fMyA9aHRWdjZ6aVFWWwzKi7tPTUxK7NDP1H1ZrEko7pBVMhpojEvAjJ6NCW8tGcxqcvXbZKdcXTjTcN6ryr2",
  "key15": "2BS6bi4PoX6rXRBSZZU59UBYB8ZzeErux8pk7Ux5FeroSq8VjkDhmqnGCN7e7D1pECaJTfUkiJqpcXotKsSC6mY2",
  "key16": "67B2a6VGR3jbY1sjruC9oH4kbFY8P7xpbrhZKPFhaPxzh7yDVAYNMotZFvjjSewutAq2DP9hUMDXdYfj2GypPrwD",
  "key17": "2GrUXtr7kYdqaWi7j2kCJGqsqhkAbfbdX3udmnz6tTakb9Nw4dmGXf6FvPeJ4UAWxWusayJuNMdkrGfUBEk7WkBE",
  "key18": "9Hh7m9XVA2DM7242U26qoQwigSUETuxyg3y2FZ7vQypTj1kR1zE3swELwSRhzwBJU7YRNxQmiKxkDDm8p8BARiq",
  "key19": "5ZYuoTAQkR74uA4tMexH1LYX2y9bcP8v1Pugg368GcRDhQqAMqz6BRN8NNrrbe8Qw4rMP3GBvJygo86kzRH7K72M",
  "key20": "21YZhCaxxPKfkCiwj1E7K34XRY5Cj6wDBZxZqhbnywuj3cvW98Ks8zwuEFbJSSmJrnS4vCECv5ytoPSBDrr66szd",
  "key21": "3muMjfcd2wqtMyq2nqiyuP7pe6BdnNKJjkanuwFVkrPiSzf1ysLHTJWGyEL31urwQQrxRkBEaXn6atDoS2pVW83B",
  "key22": "25jEbPPP19KEFSKVzRwpTstYRFceNQBXSxjAjFHbSDFZxrcP249qCBCvwFj89BeeNaci5iVAGPzdb4gWTe4vtJSE",
  "key23": "qL5sCDbrmEzm9jksPKMyoYqW48BEGtTpif89khBEef8ojvwRHS4E5nJQxtXHqjn8bWQcqosEFWpHrQ4Q999UjiB",
  "key24": "5eAHxPVHgTNKWnDJP1Yn9qrL7hdkNwfzM532Qqj4vY6iWQ8U9ndb3bWbNtppCYtyMere3yLYhKTfyLeNjT97A3J4",
  "key25": "KDag63SJcHSo25jhLefSN7qXfwWUUSLZuTVknYhYHFuSPiVVcx6xYFc417ToN3jY2yNfwPCJG6usyHZwngbGexs",
  "key26": "3zn86Rdb9prFvPnEydXsd972WdmS4b3onFsNoF3xwfEFicqrLWGQtafnp1EMsfZGHJwGqbDHy181QAuKguMBETR9",
  "key27": "2diWPHJW9Mq31w13eGsTcjiTrMCV8LEFWmKKKeNAMYgdTrCbzr4fWR81qjvRujyCCh9CspgV3VFf1K4CePvJdrJK",
  "key28": "2f73DtRyVwAyNBzMZVqYnD9HG5KUpDVAZf2HjSa3FRgJMFJF14EVD6kQGJ5EA9DUQkNtDoQt6dC2njDf3trYSBaP",
  "key29": "a8HV2BQTftpbBKYCTmYv7B1mvyc2JgHpcsmyn5CQ5J4MXhoHzMTTkqRzK93J3PjnytCp8UvHVfLmKbbQmVUb2m8",
  "key30": "xkPhQ2S9EqdwCTunpytSFjarqERvVdzb5NUzcVn4QbUeyXrMe6TA1kr3feVkqupghKNGa2G3mnM9CzBeN43Fmw6",
  "key31": "2gfSqE4E2p9vLnQUecXC4vPeHAQzr59g1wCiAHAyqvM4eXpFRHbUbtJ4TWWDajUbHHuW3fZ4wuSzjk2BeZ1woPs5",
  "key32": "56VKbUTyHUWoXYJjA4r7vJrAJmTvAm55gS6PxLmJjdtDPCLwY1FJt59L63KMcm2Szm8A8vVGg8tNPtD7Trfvuxti",
  "key33": "4mgu67Qo3KKsSj9TymWVFXSwoz92r4v5ww5C5bhE4FcA1pTmgVC9c6Q1agzAenGrdNtEBQaRhDVqXpNYPK5kuZNZ",
  "key34": "3a9Vru25opThBiS9ecrxWs54h4QLX7Y6xbFzMJ5z5BifN37kqRVbrVm1JBmA7hA4GYd21YfCqcUqZM5G59BhWTnq",
  "key35": "3RJSmY3XnJxePDj2ek7n19H92JzomegSbPmx4QhZ2hb59A6vhgYkiPg4bRHhzTikmYWZb1WS8t8AzEob7j2gVDpP"
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
