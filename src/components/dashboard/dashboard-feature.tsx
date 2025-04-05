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
    "5oJUgVQoLLGyFFySe31THauD2CwHXLqZpWDhxDkfzzYdEDzHya34KMcUpFkdZwQKHD6KGDz2JfUBN3zkzvT6gN5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZS85UTE6hr2V4HLHjiozN2iyN54SLb1JbPHPyWZxkwKbrs4zE6E5nw3RDvXQNBQUhe5zWEBUpCiA69qngTkMMLg",
  "key1": "2pzKD5rcq5ZpeF5HgpMRxhmRxnbGtQAC1pnkAF5XBsSSQzxwppHTReYh9uxqp3ggRhicUogq5Qg7gu4DbDa1fAnb",
  "key2": "3VkZtSkL2YjAQ8CfwPBNVkokYE7KC6qx4xkGLjDuaikcuTU5KntDyMecGSJbag1E8JpJjgmAXyBuo1fWMtXEmvFq",
  "key3": "4TdkeUaNdhdDj3pZWJBqzeHvh92gMX7Lwnmoghmi7bsRzisB6x7bjAqGUkMpRo93BS7uVw8uSMvUGU9R6ziyV4f1",
  "key4": "5sHXxwjqdcU2a6vyKnGyVdaihPq9LhqDe4JmRiiBBnkrVMVsJwBVbf12Hxb26teLCo9LPHUjCfbmJrqV8jAD4uh2",
  "key5": "3hcXbPBiMj174Ua5ViV8FKUAhEytdrpKxbQZb89veKtnQRv5U8CJpjsfUiVCmy2KJhhJUN4HPrVefKFrPL1EpfP2",
  "key6": "2thMgTn3RuyAbyhT1tYE9xKVg3jM3rkcWhDwZ5vHoE167os8v4pEYqCkGwXgpwGvE9ibNzWY7ucp8x8ay2uNjN2g",
  "key7": "3TpgjYmsr93V3TZpPUfpenJJkqeZ7d8rWKyp9CcTjHpgkTZJtRKg3Ypvp5nQcmxcuE6skfNoDiwL7TYoEfvNfvTV",
  "key8": "58UREz2bSUD3i8ytaQ78CfqMZcXaekyPfNg2Yf5tdNJzhv8L6wjTyjHAVboua2WCJfU6Nr6Cf6jvjB47tKZ7J5Zz",
  "key9": "3PnjPZpoQEu5yzDcjVrge87rbCq8sXqdEmGSKvXRw99ggA3asZh49YYevzPCLLV9FSsoGAF1Ut5peJMfJ7diH5wr",
  "key10": "3EqJjRbbx3kjmJ22EXvowx4bGGLYFMX3SV3cSikKa2YFTyd6UJwkdcwRHfVuZ15P5G8Req5CuuXAxdGc9wn4uuE6",
  "key11": "2n2xHM1YkXq3ddfNhGq4rvYn7Dd2dxj7TGeTenx5bu2JeL4o63zKb51aPojFS6fMfHe1QTo8cvHrQgELJua3Pixe",
  "key12": "4EAbsMZ47mke6fz6ZgW7N6LPm5CdADAYYyLSMVRyerMVZ7XMXzfBPBWtjDcBMFSEKgiepNprK1jm6feBeQMAv6Tu",
  "key13": "5keB4FrsvLG1dwoJe8G9EiwXQv9cgLNWRFAiTFwhNQd8XrwgJ9F9sHeG7tTCuGL83ghNQs89ypx1WeaByWp2WJ8o",
  "key14": "5d6S5NrMtjWb1b6mVGwCnWiZnHaaqvhKFfxM5cQcLeYquzt8gontjT5k7qNiiA7euevh3Ji4RJk6kFTMzBKBXZW8",
  "key15": "2QT6MjTCQbReMTzAo6g6vFN7JyBDXbvPd8Zhf6jGhUfvhFLXbGDRU84qiJL5x2K9sVTNtXdgey34ziZBr9B7SvQj",
  "key16": "4oERtEbebYxanBr2kPtW2Mer2reA5jNTexGJpUYzEUGKN2gQyW9TkrTHtzobVcnkfrvRShbeT4jZYsdb4Mrekxb7",
  "key17": "2Q3BDepG7KxxW2zTfnXN6Vrc7xpCU5CNug1BsjudNmh9xc8VxNUXddbhFtJZsBpp69f4DpX51yCcDgGi7Z5dFGCq",
  "key18": "5LAShbGEygYoC5fXeEABxirReQmjLghSaurNFimQsCo2Hf9YteswpN9dq2w43AmMUMxZLGmoDW231XozgKCgseam",
  "key19": "Wsx98e2zzoToPtBqsrxaoTwigMdeeKpsfeeUf2XiQUw68rp6FDSjhgjozmZqwkmuzeMegXtQEJP3Eup5aAGoFGG",
  "key20": "3RaUvzfcqPZyfCQXCCRaomwictVqyT762S5QSxq9ydRk7aREFzqpvL3UydLERwsjjW8S34Wzh2CP8gwzYzndMC9m",
  "key21": "3V7SknS3fGgvQyQCHRQKpH9fstcxhtwyvTSP7ECtPv1pHbwfg93Je7wNEjBnhucWPfvnxHvazNVcsRp8csZ9YThF",
  "key22": "5LN8VT3uC7oZK1yEp4iuZj1pzDR7ZbCajLpQsmczx9T6QYsaH22TxJoELgWVtFn3cP4rxnC99V6YduHDowPip7Yg",
  "key23": "3cJmhxynRtyFzArwqyZi4fW5RWS8E34RGuAjoAV8BxBhj3mmNucokAC3sXKZmxM7LSHTf5Z9zXhQVCRhghfhxoBu",
  "key24": "v85JTPUue3TihewLbFhwiNAbGbSUQ8t4vp8xkRQHFLVoij8wPYa4yYBEZd5H2Q18Eg3Zv1vma6F2pzzSGNE6moh",
  "key25": "5SbemPPx9pyCEx4gdkwMuEs1P7V79bPqizc4tQevqjRfYf8VByuZDVEDVx7sPEX3x7TsjFk4m5SqMg4mKxEjQ9cH",
  "key26": "oUDXocHDR16G6HL1KEHCTbXQkUZoDMTacwpy48tYowq4hT7aXnMiiBq4VdG8Han8n1SnJycSMedbso3e2YZq7cC",
  "key27": "483CptgtizCi7tKrr8wGhN6YtvrU1utYQZ7TvTkKYwTFUjU7hMSXFP7kynzRaz6VuhLcMUt9crBrcRwFPb71msvu",
  "key28": "4YBLK2TyidtuumgzBduUYjpUa4ghBcXtxTtAwYreBjQqjovhxzqm6y8JinpgcjXhCHB9HEVqwCJjzYrMF5vs4dns",
  "key29": "5s7TpusBQobxVHFCtj4asbGvDTpKtVYVDygvh7xuabcDwd2ybUWsU8ty726rWoNxCUGXDSLzXJ8hTvxaj1wo6aZv",
  "key30": "5CnBt2HaiSUggTatjzaHumFb2EdH3teYZ4QEdNL8Z1AcoSf8xbqrC1rpaeGsv892ErVY9ANt8jvSpVP8XjLDbf1r",
  "key31": "2tuy3J2DHkvxdcC3FVWLS8jQCKrp3sMUnpzC2W9VU3WTjDAaWC19DGX6dCbwnHTRVJePwt5rFohZSiX83GR6TVL5",
  "key32": "2px7xHh2nhPr2A61BH8KdUyWM9X4EWsUTFi1VtvthyyeD1kPLEoCfRQiwSPEam8WDRzah2NnunPjxBXbHuZtXYdb",
  "key33": "fMDw3wiAC9okwz5yuUsQ3XB5RB7PzBbVQ1nZBwMLMcv3F4kX2yvLr3CP2f58YUbeE3rQ4ocx6XFJCmNLaJigB1F",
  "key34": "5pPiKjEdD4oY8UYCjvqT6XkvhVdZWCc9XpRYrM1zw6vEboDK5PwJub49pFyQ7qCgXWmvUtmYPP4VRaQLkGe1hec2",
  "key35": "3vZHjnnYq6UpLCXvWRAdHaoqVHEchMuniKjtmMQJWGANCzSZSUzh1vGbAYBxApZWxQFy4YYCeWDZKC9nBqUMLHEX",
  "key36": "47UDTYL6BzfhHpGvRSHeKKYTUmM9nbbRV9PqhBBd1tDBSKf2P28CbJsn17ZpcqcVZTapnjfUpjYwq2a1TFV7YZBU",
  "key37": "s5EZKZipa2Cf5LkJncHkP45fWEEAFZtZWZsj3Xpg28wSrt6UQUmvn8hiGvAiXJyUuFBbFToBweHUTBS8ZpgHsf7",
  "key38": "2JgkYMzzu1URLi7AuAxpbnsMxQ88jjBhLAf23gYu26J6S27BXVkiiqKGYuv6CHRKBq9zw6C6U2t5J9Lu7Jj77msz",
  "key39": "3UzhspQeUccV71fUuoXrtwjocM9sSSzWuTQYjQUZixRsdRdXSwGxiYrYh9LbrBWEe9nbjUBiBrn9Miw5W96Sfkdx",
  "key40": "3aDv2M9wSDfxDkFQZKqxZtFX4YgzEPtY9ahDfrF4YHwePcNiZRz7GUGU1s6EVdfuSxPnWApC8XkXPPxv3fZzws4n",
  "key41": "3nRqE7M5dtrtAtAHgN5cynMrQdTyWzPy84WtcTCgiV42MKtHSVAJFoVJj9PaZPyZuRWFWiDj1pjoEwLAFxXNZo8D",
  "key42": "5JbrXVNuGZQ1DUBxahMLj1UCrjqQXRoUGnZa9FsDfqC1ibAc9DjQKnhdHrg7HmXXSNCHdBf7G3dTBwTDcxvvaDDo",
  "key43": "3rg8JT6dspSVoqREnZNt3WBDigTf6AN7FMoVayG55AcvbVffARYxy5ZFS2mCMkZkFGZevBGxqUQNXA8Ja11mtL5V",
  "key44": "3Bcu1ZjAZt6bssC7hpm2k3KrUgmpsvgNtT5NPNyJvZWQevYwaaLcLTKVNRmRJeJ8J5fMi3ms8HSHm2jNKbwWMmKC"
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
