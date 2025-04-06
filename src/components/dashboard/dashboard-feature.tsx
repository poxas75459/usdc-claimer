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
    "5TF1DYmv2XwhAqkdTLACgNznjLGEJiqbZPVGrPW4fSDVcktVEdhoayrDmAgwR7xq98BAJ4CBhuTqjtUWTKM9ZBqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpkZhhThBFVi8ZRMeGHQfhFXq6mEWrhhu7YB48YqBEnZyMHS732zpm9c4QbvorBqd3ngAiscLuaHZaZfYGHcNfG",
  "key1": "5htXyxjct3aS8uKwyiMCWcwQPDAY4kfLMtejbsM3AB385Y8HWNdiT7B39ovjk9tV5zWsaakW4UKryyJTgBzj2ogG",
  "key2": "31RadgnDRSxzvNJzFd3vzCcF3YhiG3XBb4KT7rVHgEXJtc1wF9AZ5t3hao3xSk3c7qPsf1R6ehKrf2ekV7qAYcKm",
  "key3": "3bxQoBVg7uC6gzS4KE7zCHHC7QjYn2PFGAKYwfKqVzLw7xkBPCdWM4MtbzZXufDfC7WLbodZkZXxaQBMPY4W3CkT",
  "key4": "3Q49MGEq2kcUaKKNDYQ7mMAuNbBdAq1s4z4CDoxuBCi6KT9tmv9D6HsX9b9vJexbNAwvUEfVu1XRSvUniHSWBbP9",
  "key5": "3M11mGDQD1aZZC6mz2V88q3JZbTSe7EE8eFJ8Rrv78yfp5JNLPL1dMPm1ffKUqySbtDA9dytCg5eXvH5RivTWY4y",
  "key6": "42D8U9kFkNL25cK5KFShR5G2afvQ1QvNyPPWLF4BPbMXThW8FyXWJGeYuQPofKBGTMcNCDx7ZoEo99bXAtxMrfaS",
  "key7": "3y8Rfumvw3d3XBV1C3jN7QTfcf6ka5MpnzoyMNekzy6pZAsMZ3hhfjTtBHMwf51r324TXRm2edYGAHaWj9LJ8w2F",
  "key8": "5tFj6wgsg4FJZiaMxrNvMByAoy2xrpevGV81XoLMDmaBZB1SLATCn2o4qyhC5QjQB4M563cwQwbBHVhri6yppA1i",
  "key9": "5BKJUMqSHiABQCs881v1wqERiBEfqAMBaMhrgCjNFGT46gcB1QfzbLeCDESW9c1AK7xwEDRN2Z6CQNSdy1yskyxN",
  "key10": "5wKAm7wSBByUCTVx1jy9YGojV6ek4Jpg2MKujZM1dUHbNhNuZs5z3vvhEAAAA8VqT4xkQitLv7GS2irkHeQUVQVa",
  "key11": "kkUN5CESrjDVEez8cYq6EpnBb7Vo4jVjw63H9WgtmvsQo8uEyRJE8d957fDVHQTfLUU4Dx8wQd4JvmKUQ8gLFV6",
  "key12": "2qT1JPn1SRmYdWHN1FewYjLtLT68DXZiJBB6JanB2DmFNtCm6rgU6GFtUTCtcHbUqHKso3pW3FRdHtHqGfAworaf",
  "key13": "ZUiVuxeWpZUkNoGJRKTXhU8NmqyZScKhhJzGRAHbRDKrPQNASWh8Q2j4hcwuKpT5UHr7JW32YCtFQK2T3i9nS6v",
  "key14": "42GvhKmi2xPemDeLSuMhGGcCfYuccNvJeT8wqSo9QMs9ECJg8jp8yLQhGLrywLMYjvtVZUW2Es7KCw8yBesJiLC8",
  "key15": "4DWF8bWiVSbF3zFkPgE1WDZH1Ag3sju3hD6n6nzwsTFuAUjyqmM9UCQzakSubrdATFhaEFurtYDaoM4qN3JBQRz9",
  "key16": "GDqhZsDKdjWmYUQY23wdupYuTRZ9kHnLc32X9xytJqKb7xtjAfyEvWCQFtaMQVP9s9U5gLn6vUQEydjf2o8TJzQ",
  "key17": "pCsaUqSoyJ9PhW1dfyq4kaYYTQ117ypkfcndGxNfb7P1jYwSwx8boVKT915M6mpfLCihZhoogopumom5F8UEzkY",
  "key18": "5vPxx63ynWKqNQiJTfKutHbi4ZR33pLfKDX4ZfG88kiJwi8Zu1E1BsBXGRSNwUNk3wTWVaU9gpS8FTNw1ZxW7vge",
  "key19": "61u9LdgMuxYgxTZGRuo8kXRUuDcoWQn9GNRZvbPuL578GZpKjWB7fiFHqjXJiqzJF5fLmTgTarqKajfk6fHXyLR4",
  "key20": "3yPCwkSWE85wcDfkGLpAHAU4PWtZPpCMCejcT8jqPM7gJhAikui1uZYu4NjvMExh2nnjYwon4uMsm7H2h2YjYc2s",
  "key21": "2RMpMx1XG6FZMeqVG3m9rtDezvJTYeV6fxPfaXfuf1mf4xwXEpeNqxem3cGS2asrYWicEZF7uF35Te79otMiYBKY",
  "key22": "547DDdBq1zfmTtmLkmSYaKUwcTkhZBuYXMBsjAn6j8UfY8FZMHFhY2GseYVwD8FYYfWUwDECGFMyvEUC8Qqmf871",
  "key23": "ev4a8KPZshNR77yBEDAVLDSEt54G2atnU2mr3UqzjakVpNWYwd2QtPV28AQ1gumYuZErMKabTdqJhAhnkYVB2sT",
  "key24": "Ezpqy7ntUfQ2rD7Grj4oHWXWxE6VE7BA17G6Wmow2Z6Zsiy4A5BZgVYFxNbfyr7xNSsBpKgwpBQjdedJ8C6a9Y3",
  "key25": "5J2duW5EqsRP63T4ToWdUcokttAmS7VAsJBHjMQFLZ5EmNsprooiQ4rUGDeBGpoRx3qihgLD6eYbJiv8gB25mRzz",
  "key26": "59MYDXoYtELLwkboJrkosGjhSBc9wdKR6aHZErs5n3W1Q4sSxngn32h6DUZnrmMiYGHypP5sue34GM2XLX7Hk5oK",
  "key27": "cmp6XqpmNpSFHv7D4uEspa3TowSAcdXt1sVsRiTmVheDoRQwGqviaQhAHSw3WNficCbmy1DTQFH61mJBraWuRfY",
  "key28": "4Ua16SBrqpqZXoThSo48CJyFRzcf41sDZ2gyUVYv4HMEEitkA6wHvwzotZLd1FRSeh8qWsYkX59FtazmfSh88f6D",
  "key29": "nwR7wanBmE4FtzvQFZemxk2dMgoiuttr42kN4iwQjefeK9zJBM9PktL17qDNEhWtjWiitNaaUEb4wQR8SRCvrZf",
  "key30": "43zS5QH6GaF1rAdqfqFwEGC4TraiJX4qPiU2gxguSA42kqS2Px8Nf3V4jR2NnN5YYbyYHKRmcsoquX1CdJhhrAK2",
  "key31": "2bDqaM6xdsBLsR7nA8CEAdLjbQeySjPQwb8gZHjVHo9LWFFt1QT6GgfhU1ZoHNN1iEZWcc7iRiSj6UtXfhuHBxmU",
  "key32": "4v9jumgnA5hABvCwioMH8xYLxJSt5tLkfZHu8fbrJJbSgvqJSgbhs3hNsEC3zNbY4fbgq1NcTYk8DdXBxzKTvHDG",
  "key33": "o2Gd3Fz6BtnaZQsd5pbzh2vowChPKxuLLgooHH7KrX8yU3JBCZxQetPHmaQpio28djBQuwtSTcndiRmVChh8mbB"
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
