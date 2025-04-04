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
    "5m3fbhRhnkidXbEJKd354SXCSAcG1jWdMvjjJq8PRkubv6VhJJYc7pgmGzTMCvHyqJWqLN1vn62AEjVEibwXsojj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gERxDrQU72aFU5VEF3uNPqizyfVheCVapV8bammNbMgjyB8ghDb1vRqwmwfmhTCqv1ffuNsSxqMR2nv1P2SaSJ2",
  "key1": "boBE4cddjRMJA45y2Vs7rV4MT5G3ZNQqPvw1CsXM6bxsRR3mipyQ8WMRqmvezRMoKvVrKGa5tPtfQJfqPw7qdYA",
  "key2": "KvXz9h6uk9D8V7mquVNK2pmhfsiDRp8fJQpUqnF1avfgnwsMBoKAGJYK52Nv2GhcgFMPaQbEBYsJd5vCBHymnf1",
  "key3": "WpBcFsGvBafyAw55vye9b1KyBc4YunucQJVRdKwPZ5ETsBgNJmnnHpcn3jj5MJvxiVfRf61viE445Gao3SHMA4Y",
  "key4": "wB7HogyggPLESmTrpRprqtjmQaX7BEKGtps2zvNdJqpmpepJUfFL4DLHd5YMmMiB9118cGDLTFS245BKBv2h4CN",
  "key5": "35h6q6FN8Gq7bePUYwmht7QVQNcRSSz7pPAwHYsNtQykZ6bqcB9RXaDSUmvdG872UFeR4eAbnPUraYBd6UX28t5R",
  "key6": "2BJaqjRgUbxkQ3xRCPUrZa1LE3QKuZnNWX6kZPTpnPtiqp862kLXLTwPbVaQ1mhWSbaNhTWRKwFisrra7h1fqS5D",
  "key7": "5q4qVtU97fDXcqeQERrkZdPR5MryAiQVMjDWhsXASrNU3Bcj1HJRAsLb5DdxKxetFCMy4cSq7ByZHtYPajSDJFCo",
  "key8": "WZYbC9dp2xTbVvL9ffoXQhdKE5DAp9GokLvE7RVskAvv318ugrkJHqUSyiqxuXTwb7WX4jXHVw8UBrLipV61vBC",
  "key9": "4PmimsKDqpyHspYd8cp9sgsvgGgD6wEtzoqCaZydFsPvZnGUu2WCDZSgij9cnmv5rY4rCabDrCwBdBfNEYo1MUPb",
  "key10": "3xf8prQ9hhtRGbSs8husfTnqLrxme9cYfafx4DyXVycDXtdjkeUg4HYP6CR4QWTTafPkfHiSgnA7B8CQUk4FKxjY",
  "key11": "BHfe9TBHSUYvqEPrHKLABGKZh1oFzW2kTzBt7e6Fow4CA8fejBcKgkGW9sx4Hmx9FdTW4C7icYJRsy9fCD89cDu",
  "key12": "2RyEGWK4kM4vRhp97WHRKfidWqi3Xuu7rtWRS3dXySuqLoJXipW5dhG9NJBkzEQBoebH2FocniRZnDgRkedRpAd8",
  "key13": "4iqPtWXNgdvQccGrngwGyzfqvtqCDCaRfjsGgasmnmQcjoY6LWoq2sDPcBkAzGoBCnaV4ycYmNq7UbTvm8EGsDEF",
  "key14": "661hZh5ru9oGGu8FqczGe8xUp3VcwpZSA3yp3pQQpce3v3gKqSYJnL2LoN9sLLZzKaiCc1widuZCtJzzBDActimn",
  "key15": "2jAKshGTE5SjKVb1G2mSd9cgzEWFHZpPhWbR7bDGtytvw9KpbHxRQi5F6Y8CKuojKPuG34ujLxQf4EhkcmbAtYHw",
  "key16": "Nkt3Tei8oq4wcxRuA7QAump1TCo8j5pTXkyGzffnb6LziGBu81XuRAFcKMTaXMqQGUssNocMLU1kwaHgobGvbng",
  "key17": "4SUP4XRpyfzR281681MLjamFJZ7F3mkUuGTqzBnWNhUNFn7dzDwXxgNQYV1TM15vn6s8X8L85NArEwn5LFNMApiu",
  "key18": "3SYbsLqD15vymMnWghnasbLVo7HP1qYVsMrgu1Lzki1pQfvvy8apB9TcoYsjb2cNPkJtXQYyUEogKvuPXVWNXfTm",
  "key19": "27cUzPur6W7fqZwe5ZLE14NRWMdYdYrCoupnbsttjKpLeAPSNJWJ8rb1v8Y12qb9w2rRfXc3cHYYefZea3fMe5HU",
  "key20": "5QjTabSvnT2FFYZJCQ5STXFXB45YvqM3Ljh7zECXkDBJVw73WJQ6HCXPe3dshagm9AnU8Fc1izubFQ2RXh44vK55",
  "key21": "3ZgHmznRUfEZe51V75oTcbFP7j1WijcjepyiTP8mmGjKAGFx6V8pKiZHHuGEGg26mzfQ2o5ahyQrbYhqkHcmJ49P",
  "key22": "513ZJRzHNnAHMDtaE3v1RTER9Bpk1r9Xk6KWvQZTDb4JmHjZtbC48TfPb5yrSpv61Kdw1rhd4WPxiWEFagJNgquq",
  "key23": "5wsZaH1HtB8huPwsx5KS9KAsALSmcFkAQXThKZjbdGwEFxsWVkF4qfMAaPo4LFSKwVp7Zq8ZH1hcWnaKsygiCYrV",
  "key24": "3XcxQsJMbkUi2ysmB6PMwomy4Aq83z5wJm6jQPfQGMRW477Li1DhbrSDPHK7juqMHfSwGKjjfMfeVQrPr2hA4PPk",
  "key25": "4jK2b2kQP9mmfGdf6YgAgDD4v6RMkgtw4BVVoZ123vm4dZmpmU8qzrKLBwjX729Gu3gwY5rtThFMwhdjX1vTS7ay",
  "key26": "5Hweo7N1yJQzSaaG163nUTig8K7Y72oMMChFLdawZuntmt6i3N4B6eexSSrUJe3zVhtnV7AmYScfHbADdgr3nare",
  "key27": "5s3RAytXsTshGDrCkRhPoEnYG7g2frSXeyutzCNaQWNT9g5aJhmZtnCrThwaFZEYdgZJd8dm5UPzYXAke6v3Men1",
  "key28": "SC2uTBMbok3wwS2XWpb6T6mked8n38W9FTkaNACXKRubjzZQTeso4rsiRwoBbnDfEudH2x6FxWa1V2pM1p8gxxx",
  "key29": "5ve7dYWzCPcFeHVSRiyEnDPacAjaVWE5WnLrV4dgyGDGRi38G68adfACcRGxEkMqHeBp1FCck2sSijrYKuwwAxvH",
  "key30": "3M1m9779fyPJuaDKathUdiAscC7cUHwJVc5pJeJLUbejv3YfiZC8Atvhv9zjvcGt8xKeJGeKQMpEFpyPAzBw8G4k",
  "key31": "2HbWmMHAUJh2UkEPfAMEqefcQH8pn7oHy7D5y2jXWFo2FxDB6n1y8X1PSSS6SSLctbyCYqPkoVEcS9DbkgxU84EF",
  "key32": "kwtcarUmigpmv7GFf7FhugLy1LaCcJNXFzXjJBSutPC9EjdHKkhGJEU8hNNqZzysLN7qceapDw7JANN25iuDSsQ",
  "key33": "58T2LaKrKanE37LYwHWss45fLnwMZAGjEqUSSFHewWR1RPAt7MsKp4CKZnSQJuyo1wCBzphxVnS3pF6sbzyHJNXB",
  "key34": "4XAAEVHqou2dAQ64LrCJTcZBsuyuUstYFgPYSTWj4rvuP5z3L5E4tXqTpEJGdZxKCCsDDxktxMLYgEdqG1z8D4Ka",
  "key35": "8JzFoLYCDRK5ftbyk6zWD2uMf5BRQxNPT4Vrxv5CP1XDtULjBfzkcHJbJEyjzRsLYLZQgRt6myHutyHUFycgedu",
  "key36": "2F58nh48eFX9zL1cQyYfrTubCDMTcKAifiuiZ7ag8zEPCkkPHQWPyFQJA5JghxFv9NpQiiXVqa1Ta2zcjjWAoAuj",
  "key37": "56qepCia5imMhNFGZwuGyCcGZU4FfTMx4Xv4M6uczwEb9X4fjk7cNK67egdPENuwk2h4NboZTteHCrS9kqnrCjWs",
  "key38": "5MdFCmDuCKDhgpb2iYCbGooUQhapErR292hLQMSp7RdAZhYkxZ4PzivQWAZSu4ybDVyVA7UYqF46hCAPbX5zcVPF",
  "key39": "4YNisKgbfYanBaYC8PFFUu2epGze3BbnftFkwHeaM9cPdAq9swheZY9eEjejvunQ7xjawJaEYTPjunasB7RciStT",
  "key40": "38TEbab7wBAq6v5nCJ7tsK2BdcMtZjAqNpE953Qt14niNPGkXA71udZtdNmV9MjqpLfvJJsaowv8Z2Rgx3dTGApx",
  "key41": "3jUCg65YaFUpsgh7ihNaehswecaUcqQ2yxpcTzdKjf4gZcz2Ncs25CKiyzogJ7AbTRthW77UhcQLX84smQTznX6c",
  "key42": "cwcJjQVaa1yyEYtRtKLk42LV3gnxfaVrY4H2nMyGJrKNz1p2uXpNRNGeD8JUiAL7EGZLsvppj327ceZXywF89zi",
  "key43": "34N8V16r5GX4Cjxv1js4oAYkpKuEfKfjijFiDyVuNJH8btkXKEQwXBQ9VYYRz2tU5S3QWU1pwDJn5QPK5PTPU6Xp",
  "key44": "wLbujfA6jZwiuDSKuuLH42jk6AQW5cjH13SGS9VGFut6XHaYuZekUvA7rCUfE3zuCnojApY1Xfqu8YgW8XnZVJ3",
  "key45": "5MZM1qbbgpgxsAiwdj27TKTxM72usUFt9KELdyYVEBvAeH8GsAK4e9S4WWihwL1YPojznDmZeN32snQ7Qyxb12TK"
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
