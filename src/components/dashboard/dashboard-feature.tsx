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
    "2VLhqWZb48tLhLUmdZSBDkR4BHRj6FL4Ya2PpUAGSBDEicHXxW5GPju9vQqz2Fy1SxMgZPcG7FgXWaVDo6MFHzqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46B9nbgebt5djtDPp9VqszyexeyzsTpknpb7MjCuw1Rhg3hjzLXMcxGJLSNMQCE8J5rtx9BjyrLBUfW2oqkdCpSq",
  "key1": "8WwF7axwngCDAc8aZK3nie7xCCxTbG9yuv3Qc398BscR3o3JqjzKsNCM2nhzAtAFWfSXNxyJEHNFEZ1HM8Mn9Wo",
  "key2": "2pJ92A8gp8bvRmQuX6c4jUy7Sh42FopEL9v5k4UHPaoZshtYuCirW6jowCuipqRq84tYLYzbFsWRE8rt8b12iBRf",
  "key3": "436zuVArqArZ9bqxj8ioGZpYRXbr9ihYGMNdca9JFfa2Xg6y8RJGJcJwkgPPauUkKUqkczwUnbvdAyPFvn2CurC8",
  "key4": "5yQftXwkrNQcNtVLS23a8digCM1iq4dd4ADYpMjvdFrdvBDM4ZVM9c7cWVjvCjSN8CBVfpf57DNB8Qzb1skUTZcH",
  "key5": "3CTdJJdURpon6hJGA1VejQHf2av6Qp7dRpSHFxkSxrZF2SSe6ReYUrJzSBDLUGRgi52vAnYHNQmyzeo3cc7mevyZ",
  "key6": "4R1GvnsFyJAk7seZc6kYjJx9EdojoRmk4pUsMH6i1gqivM5ymbX2WTuCQtJLf9MED2nVi7vfw1rMgnrJCFwZjuDm",
  "key7": "TxsY8bWaAvt9ySgpqvNnUfHQftNGzFakCMa83uzjrYfDDhzaSUPqq6KNyK1QNGD5yb2HyNeQFzGs4ArRm9ph4Gn",
  "key8": "2bwvMeopVsaVnYbK3NW3weLjVBJWi81xe5FiwLHtyf4wkMX1PXyDTPvZoQNrVhDZsDoYxYwy9AmyMCKdPpSaUaXJ",
  "key9": "gSGZxyDoWRhWpAKGrRjyynqy2RThXgKwA8gz6cpUspBZbSWVs56E8zjUa7uW4RubUJ8WyCkBMXyYYro8hKzZNf3",
  "key10": "3KFUd8UbeB1GYGMck9kjxHYYh1xretaL7ZGc229iPt9qsRVwKcF2BSKSWki1gU13Ekc3vraqGasbjsSyvE2zRXCH",
  "key11": "4i6ybMWUCetjDs51qAXRwTYUtonS8Yr4V3sSugKcP5Sa7AmtK6AJ3jzVmc8o2MbTxHwKi64AStcTjj2Z2aYsebxZ",
  "key12": "5j9n18XLM1VEHAW3w94FhBVGznhHaXoYFyRvviwhyTDQZubzhoFUXrq7cpvCvoUmcSw8U4FUVCZpXoCkHNsqGMMe",
  "key13": "feqBMsg14iHatiFd9sHNbZm75cpnSGGzUp8hY8nqDHsRjDkvjcRkW16NRuLufoKb5WNakrScJkDzdwYuN2wtEhM",
  "key14": "3HxFjgxfMh9E1AXbvTgd7fVEj8FGfryKxygmPmG5JgcVjgkK7dDZsU1HNWn3qV618bjeaH66eJKVVjuKacvtcLkE",
  "key15": "5bvmQ26uVMN6akNeJUhcqzGKoMxHfiAf5hmCwJewKsCaM8orR7E2T9n7yBjHMgJZ65ExoQGJPeyR5mc2Ha6fYEfz",
  "key16": "5iXTw886MFME1YKeKGa2ZTtDhZhDfCCG7ocb77L2bqeyVWdo7Kz7sARftiebfR8Z4RAxtb5VmaFjroFgvTUdiSux",
  "key17": "3yuYSDJGVD8VgY5kyLSNSJLJLMyWrvkw6tmePakY4khxzyBg4TQSy9Qsg1AtQEJU64dCGeiUVkpTzffFKGzTwHRz",
  "key18": "2yJLDbGjD4afGorVVnjKN8KaTb6uK4CTWidybYGEQN7Pjk3jgeMQcTFMkh2YgY8RJvS6MpoQEEgXaksc1HkrPjDZ",
  "key19": "4PFMdbsJbHBhhViR3iRfxKXoiQfS2mtPV1te4SjH6qHQzvnqBW2oWNn2TatiAzNL6YByKGc3TaN9TUPzn5ZkuPnR",
  "key20": "3d3P6otdbYzbwoQo57Fdi3bzy6jeztrsXEwPty9P43wSePAY3dGHmUTba9YAiqJMzywSVBYEV5dDU2Wi19wBxRcZ",
  "key21": "uoDva6ARppXXPgfFF5zMj1eqPyoq6CnN59ZJNxbVPJzAXEhC7YwPA14rvXRVEXDFKx4GD6t1hZyiYUXUa7RYxyd",
  "key22": "2sLb4C7q53PLGghXGvVoAHmsEkwqkz1jBtF7GhQ2qtCnrt735p9jkASKfidAWz3uv3sjiC4rqhP2FyunDga5ELsi",
  "key23": "2HQrBiLSPpVUY8WvPR8wPTaNJkhBborEG79fTnHjrPpw2z8NEBYUHy3ZzwJVH3Bi2qBg4Wn1hfs6ZD1kbgFiM8Uu",
  "key24": "2vRCYozpHjk5uMQ93on7jSGSvb4Md2ovRpJ5teMUZCqqM6xa5DWy4thEx6njbkbDRZ3oNxJL4LJJjYA85SbQfFwX",
  "key25": "5oZTxT32XhxLKovLYpoigRf9Qb8CXbnvLePvxe4dy1i7pXAdQkcHDbvax7kijhfjPB8tFTmTjQZSr8opk9pp5vzk",
  "key26": "33K3w7edz52yLS4kdxMRce42xPe44s2JeHBkRyEPkGviod3EeTjtTAnEDzWVgMrmFp7P1RsfGTx2P4eVu6pCHzie",
  "key27": "3pXAomBF2BnJJTrziptsTo1VLrxm37p67zzWg7yQFoufwNQLs6365YC5BfkTs9QWWVUsRr2tpj9wErBJAUZy4ZQ4",
  "key28": "4g5fCq3TdEVRHsxj24MaQUBCVJc2DzcGNdi8jwmXQJHTMomh91C5bLQhbefKjAaGrbmy5uTZmVBy9jCtLbijNpr1",
  "key29": "4B1vYt41LbBT8k67RYFTjZTpuCUH9DLet9Dh9e9PF1qUjjUc4Mi1gM8zRDKsUw93rk8YYPs714Tk3eQ3txfCngfA",
  "key30": "5MDXGPGg39u1ND7fBNvYSp95XxwD6k65PkVQ6hz5kUH3t3ZmQCQNCPBtM3WdF7xHXjV7wRtnMK9vjsL8TPwY8GJa",
  "key31": "4XHA6gsFctgW6YLotYHY1M1BmcB2wP7NvMS4MPtgvi1AqHKUuCas3DAubVp4KuxPvwLh55SYNmsUmszDaF2dmsSA",
  "key32": "4cuoPBPUcCxoeJyfo3e6FEJGTkbB7PvvtNCseCoEeiHqwZYXNPqXzieRbgzqdbcBwv3UzRAJ7HsgmN9Zt4tzqVt5",
  "key33": "4tMRYq3Y7qNN3vNFrfuFDnDT7hYKJdn99MN4WfzbKtbeWvcDGRe7vs95kkKWReqJ5kuVtuipEHKd8j1zkitQoUyk"
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
