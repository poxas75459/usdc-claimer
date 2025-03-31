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
    "2udXhfQCYjv5n6QodjbFhmwsXSyH9zoVW1LTSUYWUYmJTkPbWekfMSpSzB4k1YM2xopodr4Cm2jsAr2GJx3gHt81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ci5DvYkCb2pdrVcTofsZmmiiYHkdqehBtX7fsSSNgKCxGy84QP74xMHmrZ65UknmRJVFRwz8j8PoGZWxwGe3MFn",
  "key1": "5r41RZ7ceVe7tK56kQKmR3DXT5ULb1yJnoRhtwuNagw9fhdqeWGvPGBQo2Yka7gCN5qvwmLmJaVSDHjfA6qXxGJU",
  "key2": "3bPpDCexkhHkotueeBMXfHRFshsa36ZPt5R76K2sgv2uFdDVZXAhMpcM6bY5CGEHVcNQrDoyye1BGmkVYyd6GoMG",
  "key3": "5xxkUrQe8JWfjr7NXdaKRiwS3SEgKC8ELgjcecZznCqUogrSfxp8PGSmULsq2RG2EX3pcVaVi8qSjFDfxUb2JU1Q",
  "key4": "5RbW6J7LWSqVBpQVMGZzdK9TcAdB6akiMd52kcZU15Yr7TWn2mb9YnVAJQM53VUPNH6cvaMQqWum9eKgC8LvqCYs",
  "key5": "5oXEHKajSpKib487KMUs1ZoYtMsD1GzR4GDhy2tFMaXiDNUtYoEx2VS11GziitS7MQLA236YT9psASFnWNLq5juv",
  "key6": "5VCA3oJsgyqZTYj6uqHQfky9dXzw5KoW5A1y316W6jAzGgTzULS2aAkW3G4zQf4ttf3m8SZMNGDtSKK2YPzBP1yR",
  "key7": "2kXpSaJto4ruKMXX16xUkhLze6Zdqs5GpsgENWwEBqzWptWL1MgTdDET4zSKkP2rfyQ7Jk2erztmapZbeJZCz2Qo",
  "key8": "iLN3smnPa9JjeJfknVctyvtPaQZU5S6jq77iniaASTNBxGonn7znMakPEsmv2jPXTZwbChJFbozMAGLNqoRa2ZC",
  "key9": "DX6BdCxKAPR6d9XEtE872vRw65hvqXGYLjJjz45eCbju32pTt168JCU6vGVNAMhQaBFuZbXDBfXoggfBipqKxnu",
  "key10": "2eLyr8xh4X8ZVBiX6Likw48ZGyE9rqLnjtmfWJuv4Dnq26s4jUBG7GLpSD5fKQmnACKdaMXTQkNngU2ejQQSUDo8",
  "key11": "VFu3ZXwQiKY7sEfAYAZEeCWWpsGYSJceM4yq1gHvZzU9aVVhQyh5ergBtpmK2ix41oNrAVT851PghwzQuX9Kog4",
  "key12": "424p2cYZYSd4sXnR3oZwLSG993tUknGqHxfzb1GXwWkYb41QLz5DReYLKsLTPyLwfQNkBxGjgQWAAkzyJ8vPdRbp",
  "key13": "ZtmKCvh2C6Dbuyr7SZTEY6haJso3448RKWZ3oCfKnaQHYtLaXA1vc8tpT9hVzVPVxfifQ4Cp12tQhY2StrktAoF",
  "key14": "4jHZRDBHXd4WBLfMNxnA3Le2boP8xLYPxoSy97MCFfEym5XVWqEtju8isGMumnXiY6Kmpgj3AcM2i6hZdUP78sgC",
  "key15": "5A4U8nUv6EjQNbYsamXptUZHj4jtCKLv3az9hcvjdVSHvhrBihJzYHoj28qDYN9fbap2NJ21JKUav5DUqZxDa6Fa",
  "key16": "5RmpSbzW2gfPbbRbTE5arw1WsyvktaJn7oPZ5enLSRaKRzufSLqaXWHWAWkXEQNG8kjhLcEuKRocUHsqGPJFn6mG",
  "key17": "2zM4u3mR3rvXt7vkfo9BGdGv7WEjBAbCC5bXkiy1hx1D9amnZuRmuUZoXuk3hpLmQpsfTzAmey3nP8QkkuDcn2cN",
  "key18": "57AdbtnEu636RtVXxuwsGS8zxkU2K24NJzqLRTowqDML9hVfk3h6p82kkQ6zDJkPHhEtLqHBwjNKELU1WQ78smB6",
  "key19": "T6tCWxNvGWiWEyXNRWN3ppdpboouyghUEKxacCzkaCY21zEbo6kfFJVRZWvgx445rcjh3f4drrwuev4SUpqB4tK",
  "key20": "4vgB51oou3mGPwV4AVkQnwWdeHoQATLH1ujXPmEbqRFbrBnrpP5b7zZhzaf933gkvVbVXdzXsge8Ewu6sBKKR8tZ",
  "key21": "4rwuacY8yYW3UL7EfwEz3ZvdYabFaQJn4w4n8owPjMxUJpYgX6KMsxXtKV9uKAUUYLxUZeCFZ28KsGX67u8J3CZS",
  "key22": "e66ovBfTMp6cjryk7q6Zuri5RkqUoCKciSSU2uiYncdkUTSDRHBgsW9ghUFrq695fuyHHbd6k9y1qUHwedFxikR",
  "key23": "25oyUEnWiCCsWkzBeR1msj15FLdAQ6jabUuKc68fouRpjBd4dU9gwJXJ4u2CRNYJPScJbKQCxoaPXMsDBx6NoMXs",
  "key24": "5JSrf5AHGoZ5YzEwnA8zBGfFgTqgTKoRdcJoGgEY9zGJ4tnrawwVZ3Nx5EDhHMiwuGLnHWibqE1tpb1oaHBi6Lrm",
  "key25": "3v2QhvqontYPRymrZGrueWPUHzQ2nQ8qVkuD3azg9kvZwxjaE1vnPz9c36uabcW6PVp1WNMEbG38pyhhxpq7gVkA",
  "key26": "34jHAkSj2nzq6LzTn8B2qYW2BL9zKKyoiEwkG3nEk2zue6BUEg5fnPZRwfmKvukD5xu4ND5TedReTBX1JdJuEyxQ",
  "key27": "5BB6HCQKKHYFbDxboCJpz2QEZbaJsjg77BAhMVrwqSKA8EmDB7hhgUcTwtnEDhSvMboaZa4jwWz137cDmxDSW28H",
  "key28": "4oUXAXoc7B3c4Kn4BtCREED1rg4HN78ug9czEGDQZHdykB2sDCrpZj3uPzHZ94XLkaomcEstcATgK9NhT9BU9Jgw",
  "key29": "BRXpcuqs7GzhRt5vmWPzKue3VscrziKYzhMS1Bq9v1xBLiLr5FEQGJXypEWc8B2UhTE8be7umwvvsymy1yut12h",
  "key30": "NWopDfCLPjgYrAXhgpkgs5NopcXKTUgyF6pzPhjaGNKjKVTqE9MVCSpXRaQzb74PpdJjiA9eYY4F4ArZLKYQqmy",
  "key31": "5e7WnHTaKXXb7si5TweC5DKJXpUDVKaqRp5xYVxnupVF3SpZA8XmcMKxgk4VzfmQqVBsh9ErmyRTGRzr5zjgSxbd",
  "key32": "4xdek23MrW26x5qqVJ2mNNshcnSTvexyNP2E6jiumaHND2VuTAKXFCbBEGxE3ULyEdF9MS7svNgkNyp5FgitEQMR",
  "key33": "2SD1jQXq36KCPHVB4D5kS36S4cSkUTkgFZSU6iZRjdJhy3EXsohzA67xfp1iDBwS6tJ8fgZoJaChQtmGYKCx5Bgh",
  "key34": "3oWSeRQwQeiXFYqcBCKPB3AqFcPnrd59yotpQWr9mj17n8Rst36xTiPUsLTf9koGAsYGR73rnTSpDtpmHeKZBgAb",
  "key35": "5C1soGxArkX43eZ1CtQcw5wiZYDVpmyXdVTCtBvWFQ9BhJ15EcoGUGejCmif23wx2YKZ8HaCmoEHqEPop98BcWnz"
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
