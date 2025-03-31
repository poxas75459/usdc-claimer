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
    "5VAuYPirR4uhRuyrwMcuSStiNjFSXoUCg4ULCc72anFGupZ3xJzs6E8sqLL2ezxPgnoFVDThLfgJUg2E4svT26fB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UT8HA4GAGziVUCojRKd985ExvBXc1hi8tf3o1DXDR2kZrMxVaxoSCkdJkjkgjqRb5sqbDYwiz2Qm6Ck5WTWzgH",
  "key1": "5KpPXjcSg1iWcXzSVwDEvCVbrAwS97FfXMVCkwyjRURtMdfb4mRfuS5rSekpvXSZGmgSS3NqgCAXnz5LpGCJinTn",
  "key2": "3J7rEqVaUnkQjmWt8WNhDVsWFpVmqfKWbtEDV3PaoyKVxa7k6nzSwARLVwHLkPKAywrzmRQ1hXTj9fau9y59jRYj",
  "key3": "6139rwFkRzfZX1xEnU4Woj271t8TbNJmc4f6NEFS8nDA3WX6w2XbzEMdSYaoJMKaZHbz9m88dyYz9MdY4NpNJcae",
  "key4": "5mkte6zCZatXV9M2SSnuQVYPhscjhggQ8mXkahnY8msi9dgGoHuH9nnmE1FZpGRVLM1T9aVANDbTxwB9SGHphZzU",
  "key5": "4uVkhZ4yNjxKZEhtt3iQ3ernpu1oHsFoAcpjBfYgi6xKZcRWrthiGiZSEiKTQaE1BQEhQcNszWeNA42D9dAZBjNo",
  "key6": "awr1AY5pK3kcMkeHBHGJb8GKS3ebqWi7puguLcB6CUypzAEJk6r3cTK3NwKyVjRY72mpomPZPDYRXvgq9X2URGm",
  "key7": "4Cbj5oq7wCV93pSyKYeNg2etZ884VSTDTHWeQXEaz8hZfxRefYGAW7TjqforxX6c89ivx5ZLu24goqkeWP2AbHxW",
  "key8": "4Vfwpqg8BzAxjcr51viEkiEBQnPKtVqvQCu1VtXMNumPLMbFRdw6Rz5Mm75Dnb3BMdsRETby5A6thybUWWosd4x2",
  "key9": "2cpSHAaGkWhLbw3BXyyND92czE7pMrsMidLs2JcstXMy2BotKGGHsBB3v78UGKpYZLN5z6W9ZXnEddqe2Yinu9gS",
  "key10": "1gjWEHwEFCUD4gdKXQLxnnn6e8rxMGCWPFxJmwJih5zieRxFmj9M6S4jKr5wSB7y4Sg3a5U7nyMCdBvURy2iEj9",
  "key11": "4mwSdZp6smQ2tYW4ahSorm2xLM93kCHaaBSS1nKHLwkZ6rrCwxmEdTEANJJxiyhXqUikiuS56HbVhjJESWU362un",
  "key12": "WHgPa2qFCQgBHATscyMEMENyUWZHdNuwEnCyVrVNKMVGJH5M29nsE3MQNXR8aSFBB4sc8f7rgknjvXyvwRN49cg",
  "key13": "274EJv3fEGneLy12xrcYP5CWhozhVcyFvzyPSs7dRvPMZm1vpWS6BmtrvSwnzGdp66wHgoEb4NkJXiJpsuoU1XWD",
  "key14": "3uGboLXh5L4rH5NtePqsmH34Q62LpityHnGrV9EPNc4mdqWbbPHPEidmKPtZngifLgDom4K2pQfH4DpRtSQP1MTN",
  "key15": "2PnN34eA1RLo3dFZHF9rFrHN3ZkWadRpMMswPfc42i1hE6iXDPD5boRLovZjmbARozouF6vgjT5xmvvBRRzLL97f",
  "key16": "5FwDdGf5FMPyvZCugeRHL4D8wk1QfuJxpG5hyytWrorDDrvnjVtipFofsxUdQ2kLVzHxz66PMhQtkFzzWYCoStk9",
  "key17": "28stGeUKJACf6cfGeBSXiqxXzK4ndhkv5WUdbBvmSoJfhNTmiAVFvjiaudSDjg7tSQVTwnpbjbQUWCyWdF6wUcUt",
  "key18": "WrPk6Ln2NaAgjUvGrmpQGakHXP9M3pcdecVZCe2rW1zpzmF4WrPZz9KqVM9K3sacUT7tfXWMZX5jgtj2W6nGQF5",
  "key19": "34kbxWNA9NRAmKxUDRbZtJ77SR3ztMp9Lm6FZbmtDZyJUeChLk72AqBCKZmayijuMKbhtVxGhfpqtQ24W8MCrNDd",
  "key20": "2xYvSbV2AitrQAJmie1SYda5FpGB2jm9mef7GCYGMdbWVGvFjdK7QUZdNYpM2tXj49E7UAHPvBXoc5CiZEdvHnEg",
  "key21": "mCdbnrrjw4minXgfgY5hRzbFdhidte9B25cVXuQi8pscVZNYCzdSWA6MoGDzhrWExbCyoj2MwcCrJ75kLs2FdjM",
  "key22": "3vdLbc68nebCjDpxgznEnBkReS61XLrRa7WTTWUCjEq2PSJMxs9FpcFBryNhf8maC7dVvHvbtYbPwsoNYggFWjvX",
  "key23": "WwpCqaUheoFHSp2fLtaUc2FvU4rpneC8QgPvH6acULHQ4xX9EXMK2p6koKffJ3ooqM17K1HTNtz8ELc5EyKsivX",
  "key24": "2iHXWit9zzhZsgLRUqtPWnuMFduXn1XhzJfkVTJQSKe97b6vQhQCZEcvhU9LX69zsc8UjuLZKwB46szo1wcUvcEp",
  "key25": "2hgiEWWq9zg1S1a6yMdPDZRPvnqZSa9nRMY1AgQA2wSGuiuJ2ZLf8MQpH4m9rqSWB6HF9g5fNjweLzkbZPhcU9VE",
  "key26": "5XtCNpQ1Rx7nebUVfQ6KDXC35qH56fZLQMzbYg5kPx1Wk3Qx5rZygzxtv8yrimR59aJbirfoyJU5UYo8wugb77FD",
  "key27": "34aFUujtLkoJWkrtdFVivLbm1Ca5u7hnWYRg3vuBJm4i2Kwk5qXBzYTLMmCpXYSaec9Ta3jCjMXPPeFGGj1h169T",
  "key28": "2N4NCB6AGZ2TkcZ4WpSTCYkTxA8mZEjf5iZiF3uX4ihGbtbshMFYHxZ1YjL4r5J6xZG4VwCrz5dp4WQwvVZZHMVN",
  "key29": "s531hv9XrYAFtGLH7nv9koKW8fmuAVj4fPD6aZfnFLMa3H2zTtnLg2moCX2nwLPKA71ZcE67UssD4HxiVRSfV7W",
  "key30": "4QagMBza5CbxmBJCT2Y72B5Z64Y45mM98fWNPn8mdFFJTFPAiuDBJfJZ7xS4fSrFDcFGa5ESYdSNZYBDFkiaaRyv",
  "key31": "4GoF4b7VT9n38BaECPf5UGA4MG5vzGEBE8E1Xu9rE21KSrUZq6ojueyD2958eMun2bMQozAYzw8fnuQyYuEyoxhB",
  "key32": "aTUG6PoL8YcLwbZQ5bjmtyxrLqDYGawkr7zQ8evXtmzjgYKtVRCwUzbawDqZ1NTcPP1b4watTiNed1LfXyXk8SN",
  "key33": "2VGpiZ3qiNST6mUBdePJkozzHMC1KBkF39iBCucnEyQwMjquSep4teasKKsu3cDvGEYLRsxraLwkXdb42db7zAUG",
  "key34": "4DDn8wa6Z23Q95zfkExRPY9SiEFL28R2jynLSSZAPHqTmUhN9QUyJBC2i1owHwfUSXHSsctoACDNW6MPtabZAnuM",
  "key35": "4W1f3EJh7jptD9v5aYsJprjicro5zcXb7p9FLB4bsKW5mLx47DBJ7hCjMgm7bhaGxHU6R3YWP17KdvSmYLogEfMN",
  "key36": "5q1TC1fLQ1BRQZabnR259cBCAYeN7oPzj86ksArmgzD5nvZEK9SVGAG2iShZMfprMRLiYhTX56dBZVsQJJGm7tqf",
  "key37": "31nfXuD5yVCssRRaA9yx8PbjWAmiVbUhT8yo4CdSoUc4Ja6iuk1Y16ETohJxxaADRdZ3PKLq8RsiGRyK38MxAGr",
  "key38": "tDV6uKDjUGxZfMmnfFaA4i6TD4kqnUftvUjpBXCbBbKWuPV58C8BbfU1qunvZskiB16uGBfT96Pi1FHjFc7fgev",
  "key39": "8hKbwsoz73Y6ZwaET85RFwj3pjjFYDX5nMAg4KpRv8ofaRAmEjN7aXUQvzbqA1m6AYxFz3ni65WXdGaqTPTBgjX",
  "key40": "5Henwe8zc857eCaiAbBRtwGJNz5r4fKUXBbckkrj6JwEmUybCRqUAd6RTxgdfp2UpTNt8vFdCx6qhDRyWNmwAZTy",
  "key41": "jDMMwz8YkWyzcdFVREFfXkKLH1DesGbw7CvTA9HzSNTafoAbZhj1ojBPy7jbC4pJyFeBb2t2HtfepBPT6r6Fe4f",
  "key42": "2kyvwxjaSGJUxoRoutroRTnpvQQW5S5M6YhEzyYUPd8tckpGQW8MyT5qqFRhqbsm5TbktdvpUvEYueAJWb1J7Vgh",
  "key43": "2nBmCakhdnMQKNtHayoGB5zTG1yzxXsnphyjnmDbs6cDSCC8ikdcmgZ4VGLxDjDCxqwzDuq47F1xL1DrwvgqQfap",
  "key44": "3VvDSjfJoNjJ4Qgzo32JgVeHTRH9DwgHEC4Dc6Tr3w7Wf2GfkYVFK9jqorpsC4perMtbWxRqrVxg83h3EFBbxiTf",
  "key45": "n9zj2MYZrTKccsagAA9uHBDjfNnyjsXKgfct5nut2hq8P1dPDRaqnKPhowgP944Hq3H6R4KNb42Ls4JmAowEf51",
  "key46": "2etCkVrVjd63LyvPnq8j1eNK8SiYNb8kQzcVp9BsHh6kx5NdxvkRXUrWwohd1JiqeaffrwJGWPN1tofmdFLd1A9z",
  "key47": "3VSZhiwp4WJSFTmRzKcQHXnsTpxkSVrD37GCmNzHEoZWjaZQqDWMLkAbEoFnM6JLurksxDc5vfdWgofTXLCYHakk",
  "key48": "2FU6NCCRqpBDQamjXZsgEMccnud4aCjwjVNPcfDpAkWYJNgo3BuCPBZeBPaw3XfyRTNqHzYbgownDbbWYGp1MbZs"
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
