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
    "24oS5X7Y1dsgPXgctx351hi8JoXHDEkQWMRKjZmvCVHWH8CfeFYWL9FdhTo5syVork5mDUHabkgUWN1SGafnorFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uU7eYMqcqFbmz1HmW9FyBnWgp3YX8AhmGDsqCuZJmvFFoyKMvKgVNWFWjcaeZ79UNyzpgfvYV34m65V9DqriR41",
  "key1": "sYTvVEWiEeXUiDNR2Dq7dTk8KpsYFuuJt4DyYpcgnzA8ongHac15dRWbQMABWCiehna7rwgGHfxeJpGC2qkFMSs",
  "key2": "5CPScF1ZYp9LuZK9EYb1fQyabBCcD6An7zfKqRVqiS29BmnCWTKBF19UoAQqKyLswHEV3XRJxPjJgTyvrPB3gFnn",
  "key3": "uwY64eJ4rLRUi8a4pNuNBYgzssGUCZVnqTXkSFnnjpxa2PsCdZ5cv8mPSDVEik3BmVNLx5xgQx43zJSQa63tD9N",
  "key4": "3S1q9NnsuyBqRkD9G94gEGg8oiQ53XAFf5UtuyT8nXAq1xqz8Z6GzBig8oA6ohSEFnzuH4DDNztUbwZa2kZTPJUh",
  "key5": "5GUhkMj93qyQKGJ7d2TTEiwoXHw7DVpsrUxj1G2VV7vXPGgKFohzs4LE83ueWBsYvgUk2Qq1t21MiHE9zsMx9Xb2",
  "key6": "rwGkN3cREkvriFsj1UrJTeNWw7iWdG9RpeK4y8UqF5GrzGjvkPpPR6x9yZYLTyircJr5BZXd632vR78N2KYdhgj",
  "key7": "CMXnmi8hUtjaKyZgR5NJE4426VRivfRd4QkhPgKFj4jhvxsKWuAsnchkJVVH146VpD3VtokRZ7Nzu6jLSrKD3hW",
  "key8": "5zkN1scAcNHYWRtJXip73vp7Ykk9iNGhx5UHStM9RyRM7fucvnAhhS6zGg6dEV2HMMZnKFa2RFLD8o2XDwMufxce",
  "key9": "61zVxphEwQXz9J9pp3iUfobWZiZoiCyuvKZytB84sHmYysxQVeb2WAEgugRQ25dqJu9mUUrkzbEjGrqhzyL2vvfX",
  "key10": "32c4X2oipoAgFTZ2DiVW2S1pNe7f4Lj7nFeVuGkinxeY4RJV9D1PDE9Vphy7tdqxNdtfmRdt1muAXjP9JnavWtWV",
  "key11": "3SyoTnngpXrWJSjq8Zn7npifRpXP4Mx3BdvBVvJoJAJuvihBmLxw9U9q7j3g4JqqpwPH9rQCBTJFMgKGU2Q9nNED",
  "key12": "3ytjNY8wXG4niSrERfbLW3P3mUSb931qKdvQgN55SDmcqkAgLvuCFFTjG3HofZA1SxQSmuzewosS1VbHjXYkn18g",
  "key13": "5KLtEoBzv9W8e9nypJuopoq3GdLmV3cCSjr2JhGtrNiMVZXXQMusMu445t16QBQPAG7zH89MFDDVafHwNwWVVkAX",
  "key14": "3HMjJpAio1nNgx1B4F6sx8zZbfzmEfUygj59Wn3yPugA8h7jJYa11AhNb89Ajwt3gxm9G2qhvKDJAEoKabUxUqB6",
  "key15": "wv7sSURFVMp8eK42Q2g5bWiLf5gMykU6nyTjTYJZKZVctyMiN8hEmxiEhLio5PDZk2K6Rb6W1HJW1VpgpnTNPLX",
  "key16": "5DoedxDMyqKrVwwfTzTcdPfezQkzrHoA5a8iGsY716K8KHXe5cnRnxiAuLhJ6mYX2dPkiwmMuNt7f3mZwCtFQ4qo",
  "key17": "52wC64ect5Vmp1MBsWa3vsgJ27jnWwCnLeHmryntD4U7Xj3v2SfA9gs1zgcvo8BV37wpfawo1Q8eVqeT2TjKEPYx",
  "key18": "2PJAc6snpQVZArhMacEaYPERTAH79H7pHVUQYtZZvxoaJeN3dkrcv2bAUBEU4wjZzsoJYfkJBSvDTuWio3gvwb5u",
  "key19": "4nwMrhqBU9oJKWFLFkNodAaXAick4KCoTUSNGWtHrHWmwQ7sT3QeHbsaWewLZKzckaDLRm31KkW1yNyknL6UdwQw",
  "key20": "3MncQGhry3bLqK7m2ArvSD7NcSyo2Sy6DW1h8hRcbEXGpu2dA32mmq1MVjx4JtDHwojJspSchTKmcuMoDh4hhMba",
  "key21": "5VNaitYnpafRE8HRL4VhURENzeekhWTvWD8eMpLxR35BgPyG8zfRU3wieuGGMuWNhExT5TBFx4UAW38NkLj61bHo",
  "key22": "5GfHpoBJsnEnfqNBzFhuzDdPiAZaxq9SbW6jnCNyfDwAKJrqbkjh8kEonnbD8D4KStYSM2VL7nN57sMyg6kh67re",
  "key23": "kMpFVeHSoZwSXh8WESQD5zxpMsLBEVzMHUZ5ErrAbNUwzX9YVxQS7bqu7eaviwBamzN97LJj5njZGuHPwQStFbB",
  "key24": "4HTHD6Zd6EHHwCRafxkfwxqBRDqzkwiFfXyofYNszvghPKQjc6u83xsJnpSZx1wLNiwPQAZeH3UbGa6BaPeDPZUY",
  "key25": "3E9vUPmgS62CP3d5oDfM4dTGWKz6C95T8GBva36SepKbzx5Q9PiNiK5gwYeHchpuTmZq7BBK3oQxDdxqMay26Ei2",
  "key26": "5wKFVNTgQYvf6NB2VNGihCyQkSi9FYxeC3CQqVtPsR62hNt1oQECUmrFSF6R2NwBSDEJtGH534u2sroJt3pLkDKW",
  "key27": "j7G7enBPm23FWok6iL6kF32chu9peA1yMm5RRhGEF9QBqFSJcxBqqQt2VVmCQwtrgt8os1tEumUaRhFgCs9HUWg",
  "key28": "63GkZvyyqBtHTKGmeoshxd7PnXLhzP436EP6wejFnwFooque7gUg37DWnEoqiEyUq5ejDVgUJffsRRkNCrm6xgUV",
  "key29": "5c6seYkBxzU1e5tRGJ3uctKfX4gBdot47BXpJ2pk2JMmpiLJg8tmdZ4S5dK4UkKukPY2eEWm52P2ecdMdEYajiEq"
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
