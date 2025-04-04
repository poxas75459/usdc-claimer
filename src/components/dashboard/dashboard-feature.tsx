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
    "58yvc4dtJbyRo4xS1icLtnK2aeTtd5hQKPuuwkVAV7PMSAFNi8PenCPGsF7m6amMYxsLF2JsGHxebd3SeBnwWsr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obMVsothXR4C4b5UDbrxHUqpgkYmA8TrhmpCxELHers9yYz3PU4Nh23zJiQ2bPYnSFeD3ySygASLG54GNJQFiEc",
  "key1": "4jsLRqzkUkziuxPFWRz3uJET4DqirdrjYfNoB73czzUScAughRVVBg99eA3LiAjAonfcC6amA9eSrEAjLw6nydDr",
  "key2": "3f5rRHHm4kNHk8NbVMwhvV1noeUmvMVgSzi8fmrTxmCLdSHT48Prkoc9X77mp2AquyXPD4orzBzRqLY7JdDdeZ1V",
  "key3": "63tVTJ9nk5WhmogFH8bacKLfGYE8gnHC9YPoCrtzzUCJ6kuFSvrYG1P9ZLfwdPTRbsfPdv6txRjgSoZiqvyikpxa",
  "key4": "5zpkNLk71WCqerz1PxBqVZmanjg3d8Dk8DpzLQkaJjY7PQeYBjMkTM3WAnvXAh5vXe7qYDtFtVZD8aFQ3pz4xhHa",
  "key5": "2GdRfVv1VGz5AA6ZuiwJsjBzPHFghZPvy36b7RHCswj14zqaQy5iX9AfqSZ4BgfbnDNyy2qKVvidkKQ7rcBisuZ1",
  "key6": "3NEMqoeER8dvaA4hcXUKujei9XgZdr1EirjBeWtj6EddmddCJcFizxoE1nWcNjjesum32JmVPssaP9pXJGxJPzuk",
  "key7": "5dG77NdExkkvAyFs6hGRszoaeiywu2uZc1wej5i7CKj5buPbYnbg7ab65zNpRQhYR1np52jtwy465JEsxHUxbHST",
  "key8": "4bLUZCjyy6GxuVmp32WxbqxZspp1rtVbvvMUpKiGffvvWmHonQ4nsKiLQSytaE8DdqkNqnkDeu2dQPUZKb3dTQjL",
  "key9": "36XACq6gDZpwkxbbMFRfqUv9MseaeaV8vfNFMw68B9ZDSRZGjL2xByeUdBoBLa8EFMu1fctFaHcPQHHqFrysnZNE",
  "key10": "4X1SWRT59Jh2KbGnDb3P9bQW65iWwKi5WsmAfbgqJezr1K33y2dgZAAeffpxHmACfKPzVSodSSAEKQyv4UBcbi1V",
  "key11": "3QYssfq77k7KxUURrkddDgpNXCGwsDqAQz1bHNSGeun8NAoNMJ4MfJwxCfvcUxuwNhyjtuGt8vRhAqVzrVt7xX5C",
  "key12": "5iG5NBrpXVyeBg5UGQsWCHW3jyi2TE1wTUAMwrbWGJHgpQEJBqPKrhmfRmFvWiHAjExghKrSfKYuycNv9asCbGfH",
  "key13": "sYBxRCHsmjHDbL9vWqysYGCiBvSMNMw712mtKguQu7jdwp9nEua8pqfcUmNsyAzdriC1Tcxnir1QUkHd2b1r8ua",
  "key14": "hLCQcrp8abroxSwt2f7QyPbTeewmyCWn7Sn4qR5RvMAsTMVuYh7ETXSiWuR6xoDneeMuGfyFSqN61QCCi4Dcoce",
  "key15": "3B7Ax4qeLR1Yo3foNRcHkiLkRU5rA8gxsrwAAZ4jQhgbttRvaf81V7uJVbWmiZr5UX1yGiPnyZ3UCGMRtskWWBCC",
  "key16": "S12NTz4KBevSkEe1M8Zf48GimYvzY9sRxKZod14iu7Gjk9nY8in5sXfDiHz8BJDcy4KTifv1jp9CAaQcNYcGUyd",
  "key17": "4ESRe6Yos7vQVw52qBcechnbL1oBnnaEy7HSukdjRyrV7MtANYrYeLqV6H7K5K8gm2u1dydVseyj9kuUcprECs4U",
  "key18": "3PZdWvi4ZozEAAZ5qpPi3jL7LWhkabGKVyVcQhY5NYZ61U1YfKcRwrKqWNwrbtrCEnDdyyasxQ3XvSRMvpwRSp5V",
  "key19": "5kr3qtHU5FmFCX3DEfxx2sCH5bBHnxMqEGZVnSLQr1Lo3yw1N2AoJ7fsuqE3Mj5pndvLeEWxFCca4uGA9EGFU3D4",
  "key20": "4kHEUGXnRhDqLbZFANuhPRxJ6hnz3dTwXTdFVUx8317jBa97FPpnPLCPhNbS9rZCEKeGNeVo47wHfsge13REBsEW",
  "key21": "seb1H6UbtwRrD27Gs5p9pXRnZAE9aFw2jdndhJrpfgbY9S71irJ4jWRqJkTC1xJYKTs1nDrrAM3XHBAt47BVhKH",
  "key22": "xAA46biiidbyX6QhPgsrM4zQzwHtLdYJe2VTKW7bj48KoQqBZMqC4pLX46V6jgJqXeWbmbfz9YdyskZ513M6oAp",
  "key23": "5jtoAxvc1wcZkhT3mqa8UYAvFetTDRZDyURySdq98iVkBAhkNCyYiw93uCQfXec5rHMGa8wv9to9KGpw27vFv1hJ",
  "key24": "3MgrqjrKL2VsLDdwhv2ZfxcXVHGW6UQrTwghHzExx9ci5r8EQvbdJpmWFSYMUWq9JeNni4hsigAdTDSyaVCYfpS4",
  "key25": "39xp6z8WNSdJcvTDRy9UyThGqXZW2Lk5LCRZSZGcDrQWVHYpdjmyupJXisgVmTeqVwtrQNG3SNpbk8kNJD3RZVUj",
  "key26": "4X1RngKUN4RuaxP1BtfmhaG625YryXqbo7HZg9d1T1Wn571X5aEMxdRo3nzmCa1rHDQmm9cASKQnvrPuLsPihrqm",
  "key27": "3WsAVFk4YPe19ZF2KCjifqAcVSyiFrzm5Qd4KcWsdsDytvxdbRYCQPeW9beW7H4WYzvJQtyPUVpFjwyyzRLpw2t3",
  "key28": "4mdsaT67efdFuZDWxnJksnWv7DeFT4d85NJ4xhRt5qW8CfwJzQdW85QPbz483RXg9z79JJZqM6HwkHzzUDewrmsB",
  "key29": "576hgUNHxtTNhQgafb8dDe3pKADZupf8rxyyux2np2QiaKqFYx3df7L6rVvd6SWMmwaYXcZ7uXh3bvnhDibVQukt",
  "key30": "TTF57rN3HUZN1zjwWdcsuj6T77rcP3j5gz1GUDtUHdPefoZi6i3AeuyAwhMpGrC3zWNgsLK6m25nSg3tJoW7AFg",
  "key31": "3qgZEBcwfR6wdREVStMi1zS7J4rGuEU12SX1kyLbyPT259hyXk1H7JFqQdkxRQiJne8WJs3n18aztqzpfEoqznuU",
  "key32": "2YF1Knnu6m49b1eQrewWFyQWs9pJ7TJDNHBStxq4qxeBxWWqf7dujP7LRPfYA1UpWvr6mdi9j4sUnk9H7Ky4z5YN",
  "key33": "rdWFik13GJDG25uQpYciWmupHPZZdv8Rz4LewE9JZVAdrTE391CDCM2gnsvhEoF4wJnaQzCxoxvw4f5MVDahBE3",
  "key34": "2BdtPeEx3mPZt6nDtRK4gNWwNbzjELLTYQ9HGHY8xhAqz8ni96fzSsK8KomNjQhyKCgg4EocWQhbsNESzKhRCoiM",
  "key35": "diZJUDJHUjw2paeYEUCz1kAAVyX6SLTJWkHD9357taeURQbwDkZpkzrbjKp3WDSpRJQYnFhjkYMxQG97axbLYxV"
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
