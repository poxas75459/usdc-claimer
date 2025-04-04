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
    "35Wh4XmLTBEQ2F151BiX3gy2TbeVYGS9USmeK9Y7b5CPuEFWMCjY8Y665EvLKrFq1JNm2Jn1MXLeBsd58RhJo5vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5q3pn4kXNNQBEQdQ3FFjgUZTdRhqRGG6nqFLaKwM2KkFBGx3gEJPAYBMV6uN3SDd4Vy4yVbi6zQqD9YoVRLApp",
  "key1": "36FTB7wHxPRdPVpHCx2UMjyF5EZ9WRWHJHXmGZHXdW428bkXsZ4z6FagvhWorMpk9yfLfemDBKUfGQpWCsAVCJr5",
  "key2": "47RXSVAz1QTXEivgoL9NxuiaUN7PceZwpYgFYm9tCDNR2HAm2rzBEPvVUe74LamLcfdzpGh1UHzhh4KEA1fUgjtM",
  "key3": "2YQVomgGiu6HkkHnQ5EbfYYjxjvTqDByMXRJtkxnmjfhqRjvtNqZKQt1JL76hm3HTRrBd9MBaJzFcjxVhSwYWbnG",
  "key4": "2YpxmwM4jgs8EAvBK5y4xvXo9FYUcoJdqpVt3sZpuE3uxnvjPFVD2Aqv9a6SSTRJLreqLktWgL7tx9K5VZxdupRR",
  "key5": "fe1nsE5NWn2teq82TwPhd7ELM1W6gi8KLRh2BmCuqGjzagZe4nrbVhQJK1WN9ZjsJh6hLerVobgEk2wXwjhVEV9",
  "key6": "pYZapcAaj1DjnHtchj2LNFD75Rk44XcUADz9fQVX52Z8cgpNnXA5v546yNMhVKTZDwdukfMyBqddF9GthgVxRpG",
  "key7": "5oTXagnQTrkH3dKqwxmzBY3K273oJsagjtjaAk3hZwjgTfesW4VkiADpA887FysNdnqAxP6CJHTiso9PHUiGHuSq",
  "key8": "2YT14mr2tq1GHdZX3gFeJ4Uum4soUt9rL6A7oK1TGNBFJUFJvYuF5Ys6sYu6v5DFnpW2FyJgzwuuSVDo65EV8mWz",
  "key9": "S5kbr6qhQuePBBiDYk7wjAjWkUV7ZUsTsHLbVs5JTHN6zyCe6qiUTQ3VZ4LyKeexsoPfMvPpgAWhSMghZtB7SVF",
  "key10": "278m7eoiaD7eUQkjYndQrizZXLB1sZUsYFSMmKEHmyyx9xhMNw8AWnn1dFjYcsV7yHKeKvhsVUfcbBKu9EuCiZGW",
  "key11": "4K4uBjgmqeeVVdJYSdVk5ebYkpdWzBwqczMuLPfeH5Cas4VHQnrqQB2xW2wigUM44xTXzBaYHzMHUATSJUa9BTs3",
  "key12": "48wamfPXbcSo4ST2mEMdCGVkHwkPPu9y74WdT4n3Um1posoEXsUF5B8vpwUJdD2Y6ra7UmVn7kiyyXYQzFTqLWhb",
  "key13": "2KuFeZU8EeDoeeMkj5P6yR9C5MELMmaCqK9pMLc2GZmvZJoNMxyp4YPA77VtzWZg97BxEC5ANXrAkJVtkmukVWco",
  "key14": "4hZfiFfGdHAv3a8xA5TXznRHcYS41jKV7ur7LxSd9NuLyMSVhVEUWMnKdkCpFqcpBFJwub1iUSwctuZWEs1FRzuR",
  "key15": "4ERWCE4NUbpZXKD6mdmybsJkXfX8Z9UGY6BeQvn8ufBw3E4E6QjnyKH5jAXh3RCRfe9yZtgHm6hLxMiNMeYX89W3",
  "key16": "4xyJxfY5xmHAL8RZs8v3QnzjPW51h1if55eF2XKsRhD73R2ustdJcnog5iEqR7ANEA5cibTm8FcQu9mUGfCbru3q",
  "key17": "3CwL6ote6CMGbEK1vJ58vUyFMiz5ED1Yzxuhhev3Yg8bttjRYLuzeBm1C65kYMHVseojZHBxs3FBVCthFg5w9bDG",
  "key18": "3TAXqms7DrdH7VNRurNpPQZEWZfyS2opESYz7naANvZQ6o9kianpNZD7JHs45dFWmuQtsgivUzepZWGRxSCFvhnp",
  "key19": "2M6TbLwDNxLof892PisMcufbgyEpmU8rkt8Esw8thUqg9MT3z5NgKBsj4zHRq4AqJtgaBQJkvmDGV6McTB5TdXjX",
  "key20": "3f4RQrm5AqiDpSBo6cTVsWAt7kgsRC7jJmV4StjKrr4wiLiGD8bMhkBxBzpovM6HDYP8UHMDMfyaqmTAAUsKRvjS",
  "key21": "TTRhVNNUuLNPirFwb9GSepjfnYkdWMBSHdWtR4icpYuJm1W51CzSjdEcBB2QMp2vMhch4KorMWKFcfowDcDSY4n",
  "key22": "5TNzqpVPt4SdXRVSvbeHEcNbsveqtrc2MCGy8C877moYVyJNJwmnr1BGzQnzVMGWU5zjUbf94fQQGRz3Hc2qbB9x",
  "key23": "mHJUJtU5wjRNc6znSmA6pWtmW5aJfRgt7VwDX85VZGH55KrV4kXHrFdY94mjftGUFRG47XcAbyrVjneKPVHENmP",
  "key24": "shL71nV4GbfLVk7Gt67AWFaoHtYki6MwKCXTp94FNfTw177nPseJLE6f8dVrnG6Tzt8Ersr3pw8JucCfos7eZVG",
  "key25": "38rQM9bxDhFyoowonfiCseghagC3CisLNb3zaerAgCSyew5cYijoJzfXmWsdnLJddanZcE7h6fWSaBs5b3SPJppj",
  "key26": "63WxZ483ywMhUCKbzkg2hr8aLEwP4f7tNf8sxagAqM4n4raqH7WCb5WcLdgigxedpRKHyaPtjUzuq6c1V1MsXJDn",
  "key27": "4PY164mPLQiYLfCbXqmwqxjqXofctmBn9rKmW6owBWTwqUDyejh3wuwBQH9xDsAiWG7gB73Tqui2ctzTVf6Dcidj",
  "key28": "5tQnfV8Qii6TmGGBT5NNCtdzBZXkKJmAoB9FWjNaQX93gW8gAXCqEuMT6ah5PUJ6Cn95B6zygT3jDaedAcuw3YKh",
  "key29": "3FLvh91jvXFdnoM7HSBFEggRED1tZHQr3jWTqatAZjsWRGkdbrEtj1eUWFq6VZgfhWL1v2bVRhKKiCbczD2Fqcz4",
  "key30": "2qxYCqC6uycADdHfbjwBwvUnEHN5ob7uk4zExFsj11ww1XqB1YpipouWJGKiPJ1zexq6jFSn3eDJeev5Cypxvu42",
  "key31": "2CmPsfu3qrdbcTUqe6L3GRdSi4m8ozpK8e8MiEaQFvhjxUixTsrn94XRjcCgQKeZN8QCBdAg92CcxBF6KfJqd7MD",
  "key32": "51uyAXs68mMqYSpFfh4CwLuUMQXbkDoYLRxJJybaHeVQVkWw6FnEjJd2XqQTjwcu1gop7UEvTGScYgiieLzhoAAa",
  "key33": "N6K4XxKjCDbcgY3Cg5xsSiNofvHEULuzmMCF2YX4fvYJaUY83rJwNKBa4p4FipqZgU3yBpogPAjQddWgjcFvkeh",
  "key34": "DxvWFs7tnQhCMHK8RwDiNwgxu2ucnDMJKMYQXaL5pfMSEQwLTxTrfYBzV2WWx8ZzBaTbkh2ALtHFbLDkfYubTLH",
  "key35": "iK2chcHeu43zhzN56to8AaWzikSiZKvxhwwxGnCM8jVhjzQsnDWZYgjPm65s2UXXu2Eo6XMj82kzE3hYmsgKuoT",
  "key36": "pLiigLM3caCat36npiStGmtXqAnFGiCJ5US3GJhDx2vGCo6fGbS4fb66BptiRqhnyynZa6LqnEZp4hUVqEMdEiu",
  "key37": "4LENMVRVfPN1K2QqUkDfTznLquy8jipLnnobTBxTwjo8ZDbtiQeRsWNa1gy45tbotb7i8hfYVJoMZYo4mVckQTiK"
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
