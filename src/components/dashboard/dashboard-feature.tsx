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
    "LwUPJm2X1yBf21UKqBt6edq5RjeMQfaQeUYqYR7yRBJkNsv2dCh5uJarnk9PetjQybZ2tSf7S7aHor5yDK1JBso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tk6CJNKNHMaCGBxoSWbmtL7pSMSDFrBFQYzCs8M6z3SdSDiMRsmR8JevPcLBrM1u8otyUMfE36dzkgfseK3RiU",
  "key1": "3cVQANHiyFDH5ssXL7XWNZP1uTC4GfDckAwhjBjNHGwFAGqxsRjYA9PAc1XFNmTQxvqpcaujoBrBvvJBbcJyL8QD",
  "key2": "3Xz7eEDM5QcxkhbpbfHAYjNa3E4wwVGmtic57vCGeDFtFr7XJ6uyPkeLqyZ58ZNSqrmMxx5w7ZwY8cobGkqtEJBQ",
  "key3": "2viVQYryiajGMBAUNhnfm5BtFdJLkZRpspDYqpfo36m6VPtr65Som3wpC2dK6fcG11ZrXqhy3PRyVgQJjUDzPY9g",
  "key4": "1fXmqieJL9Gosg9ay4BeyVMCr54MFN9Yndh1RbbWuaJmTVSFfWdKzhnES6Kdc2TpZAScJNyvnJjpNispeA2iFY5",
  "key5": "2GHxXJGRt8QaZCurYdjJANDP8Y8EZur6piR9JAivF6XsgUeAoi6LNi139twj6GatBYERPQ1PZbd5WtHFP9mhqwQy",
  "key6": "3N43VRyDaW5K6sr2Be6jEXxDakKXE8yoahDMvMvaTrxnexDpmJ2uv5xSoBPrZTrobdXEHePgiQTZHzBb72VQ7xSt",
  "key7": "127hmwbfwWB6upVJ7nNm6xN6zF3HfmAp99cwDAUkCo9HQhYwYwSZDGAhdemCf3GPEZ75i2gd8hgPDhFd44kq2Hbd",
  "key8": "43NUb2ZpwbVK6RsFHtiKdP9rJBihMz4H1cXJuru37zqNzCvcibiNWr6i7R2ULncs82pqTeixiRkGcwdoimqUt8TH",
  "key9": "2nkyFUoMqPv1dqwWYsi3C3fvsjQgi31MM8cqdfuRw4ExqZuZXogSfDz49x2d56EEyctDEj34Q5CpvxVR8ryt4KGq",
  "key10": "4TvryLun4XtnhWXDjcYJaEFmVHB8eYfJZ7zBwRuUMgsXW9sBDrV1BSKk1CBQr8GkF2nQoYwFXtQTpgZueUtr9Gzw",
  "key11": "33c2d7iLNqAumx8RBjmqfzLVVX8D5khaQPEPyvx8w3oaykKEDtMYuk2t7dAwxfrNzJ5nMth9bXWqjeUo3i5RVZQt",
  "key12": "58Us13tWmfQyhvGb1xChspd4ya2j53Ar89KKmbi2EScGUcwguZtqPCFDQibeBRj6ncgK8FvYoyjvvysL6ChKnKQ4",
  "key13": "4wHxa59QLxRyzWzNNHPf42vShAVLfF5vy8thV6MS6g5vm81D4JCgAeLvSXP3zsiqCWWR92YvB2LDktvKgtZWeyP3",
  "key14": "5X3cwwKp1weRJDzhxxFYV91DzVAUxxsYxoqYWDXdnyg8ir7JJnGj1j9bbVypZi2dK3UipKjEvxugv54Ao29mmN9x",
  "key15": "wCfPziAm7QaQJS4VhMNcLo9pYJ3aAfhJcnStJ7VyqPoNCQHsUheGEbNize1HqV5FGX9UdwviKDfZQeVTQ5bN3gA",
  "key16": "kRSujs5rmyZihZ15Yu5CVQMFseppagtyPmK4YLrMcUurf47KqoUiBMdMeQkC5BRGztNPZzJn2LiRGxeXCjHCHf1",
  "key17": "2QyQPe5K86vk6QjC7iS9gPVJ7V7eBbxiWfGP51VQUpWP9Pq3JsGkxaPuHnQchv6fqMEEQFZubNpAaVsEmqbEQRjh",
  "key18": "t6cMvFJ3wfeoHSxNXC1yxZbWPV9DkS6w32jVH878fkM4jxSFSu7x9z3RHYyNwvD2QH3qsHYpYAeVmh1UhqLApZk",
  "key19": "4XwzFyemYEb7N95zpegxNpU9tzG5jFFU73socqe7AdawvQyn59msgRowYyjLGJrd6kNy5BL4vK9Fe2G53q13LSXW",
  "key20": "2GJajaUFcKjC1jqKK64F5AqPpVSKHWNrPTYzEuzS5UCJv4rgjHYCF7RqXFqBo7ZKkCM7MZxCLzp1eQoTppTs4t9Z",
  "key21": "4YM4a1SJdhw8gNhaQDnhhKRZGzMFaJrNw6ohHSwc5NfVUtfTRrXZW9H341Z9PzAdeK8QfhANLaS6WadXhUEuEuxq",
  "key22": "3xZwfiS4Gp15HpvHUTL74RmFq5on2Bmrqkq4SmUHPyKYt1Pyu86UvTdwhgQXJA7ubbpwdWwMJNLoVTaj1ois9gMj",
  "key23": "3d7JoHa9VUdxhPjnP4YAxEasSYjdHunbHBR25eimDkwdDsqJ7my2ZwtZ93RRS4MgP3BetyHJwvv6bLbVWyDqGFGk",
  "key24": "5nnnML58aTd5Kn8iqqFB8ZXZhmxbEBsiSmuCAzEMnCSwApJuRQG4A4gSraGNtmR2xMUdwj4XSzZg4ZtPhn7SrYUJ",
  "key25": "57355GYcaykQLMahTUwTtgHJzzZywpHjmA8DZfAhsQTJN6BoVrfA7GigmKEY8Kf8mgXJBuvnkWeK9ivyh2n3QkRf",
  "key26": "3xhh3pBAicpCyvWK9iUDLAvTUkrSJn6f4KZzkRUJ6u7oNSYX3pGpLHpCueEMGwuzZmrfhdJJb22fb5UnhWG72iw9",
  "key27": "2yrawDTgid1nZUerScFJdMFcGkYqyDNqdXZPxWjB6w8hTW88svmBjmbFT5QwKiortjLGsLaS1vSKPidxTmLNCeY7",
  "key28": "5pe5Yg1rtjcyVfo9jX442ryLNuKM5L8Vzf1eKe6HZExjZ86BdF97MErqYuEQsfZ2tiVDAEiXQsWkb4BnivNPJAK8",
  "key29": "32iy6oUYCN1Bnb8SzeogQLibeU9BkdRRVUZ77t84JEkSjomd7LrQWzuypaSf7SbueouYwtKyeqCpuzFwmq8okRAS",
  "key30": "2edamD4QLqF3hhxSF2AgyWGoZk1AJ2CzeN3iwNbmBpFiyYARdtWiX2SLYkrz2iUbG9TdKZ1WB4JND1Rx6arvG6D6",
  "key31": "3VFgzx99UDCNiyuY6YMm32sheXocjMfi26kkN9VDmKufYwZ7dPjyrqJ7JuR91bhnukDXSLfFrLYrXJJUMY8Z78C2",
  "key32": "4p9fbP1vyNGkSMKeMRd4A4iPyGDjGaTo28zTKDeumu9aMZwD7sSt948eL4g7FfTA4ZHSKc8VqD39URKQEcYLySz5",
  "key33": "5zXT55XQ91EzuGYvMKJNmTa9VhCHHq3yJucCUnH5wRhCQv3VjwjSHKBTEYYg6HkESed7SHSTzUuVvMWTEdrB5gWC",
  "key34": "2BjHEghUokmsVLFuCTvB11KVeSygtkaXBdyNnhHaZQggZYj8nDuTrHENi3JaPncwzzddhxPhkrCD8XuH2HyhwCGn",
  "key35": "5Swwb7dHheYKHVUR8PXF9Tz8WD9PpCiR9CZ1jT4JuwjVxx54ZvBB2QwPQq8qWxJWmEf9zAStxWhfiJmGQqdk8dRH",
  "key36": "5jWCq3HFchG5Fn2KjWpRwgv5upyxgrRPMS1ihvYQoSgXe36VZ4df1sXCZeueyU7u8o9R5GRndKDgXSNiMRrWA3F6"
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
