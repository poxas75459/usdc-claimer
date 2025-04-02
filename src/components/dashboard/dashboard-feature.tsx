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
    "4ZZh6aABdya2AvuirmT1VrKVCNTtRLKGRvtjJezzrtsj9SMPkDf7mjme998saoEr2NyzDiDL1ces23APTkPmsyHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mnrGgaUMGepSaeakkQgvqqHtVJF7ufYLQmw3cLVJDdezxcMrfQnxZT8uxjd9YNfZvQxKp7xr31PrumjakzrdJjx",
  "key1": "2wjvLBu7r2KtYUqNGAt2J8BzdRG6tLi3WMyoJuHEGW6tczFUick9BpSjoFT5ka6xWhTUDZzPA9WM1NBF78Hnpv7Z",
  "key2": "jg3qtuyr8Zm2TZaj91okiKRb39jrWYoDeWWS5WSektC19horaHQZZZamE2kM26sKXuwFuJamptERbCujcBEeETZ",
  "key3": "F8FJFDk8fYkDsdCmPG62Q9sWfNT6CtUegaSE6JSjBpjG7FZmDhMkJ97yucMH9zSphbD9EjaaauHuNyLmDMroHqp",
  "key4": "2zqcgmBVFQQuRYEjyEobj1mdeboLXd1NSQAabUZfxiH5rGshSJDiocCPaoPrHph7MPsYiMqnXGhE6562zd6eSwbC",
  "key5": "47gYv5WBuS3WB3MGv7ixP6P5x8dWWW57EyCd8KZ7NLnmzud1MsgiE3ybB36gqfqu96tiWeDGkTxj6cqKnBxJmLYJ",
  "key6": "29JRSPY3Rn1Aw7cFVP5fYq6a4cN8rLLfSxbPvuDUgrZvZDYW3gzTWeUGcpjmSxXQaFPJZqnM7LXy24UuN2Teffvk",
  "key7": "beC68hSNEvEoVP9V6VqoqzcUSy26ZyYCvJebHZmqYLeqSPRy5Wa3uaXywgFw1KwFuYHbWSZztnAStWrm3qmHJ2t",
  "key8": "5NAJB5MWfokPwwoSLxQodqaC2hpK2xi36itGfhd2rnDrJsgYjBdkVfXZH4xYap61NgdU6NcsL5QkY78UZSKHm9Dk",
  "key9": "5LdT15Rwzf3ri4tf9pwagD2fNgRkkYhdM3L4vLS3wpmzTzfmVQ9VFYWcfeN37JZg96Mb8MpRty9325SiJrUJ942Y",
  "key10": "4M4TRmyRYuvMNA89bLNboyMPHASoueMEgvXej1NcnzmeSNicMDL3RvE2K5wgc3JY6TZw4uoCZzwmEe3xpYgZw69d",
  "key11": "3NJHPwiNyY9kYMByv83EnNvLUKNEFQdSQBUYJ7mhgJfJtWiwHCzgS2VVGZPsMcgXomMiQJBQSmX9bfY4UPcq48pA",
  "key12": "5fcKztdhUoJuj4PPrNzvvaK9PRonbpcwq1ML1JybxnNfBM2Ss4cSBVCmkeRHtsTSjCvLWuUbf8XsV2KAfajEaoKi",
  "key13": "5bVcFJ9fmZ563gLoYkcWbSyJSoPqzb2F6TYU3EKkvmJcFtwyQ2Ju9dyRsU4WqDF7Fo3cTmsQFpUStg4yzrEJnW5e",
  "key14": "4jaCNRBvvnPJoDPdj1CTauhjWzqPijKcSQieXJNuVz4vFB1vExvErCkpKYuUBvy2JhHbDAB4RzdVNje8V2pTi71S",
  "key15": "8xBafv3b5aiHVLdyR1DYKVVJEK2aUw3aAY8vjPkWQPgYZkciiKJeHGkE8iHPrvkwFZMVb65VUg5ASuDQKWseRz6",
  "key16": "HwgpeujKEjGgQX3FYZs8S5tPeubx89k23oHWzBYXwjUY8H1yCgttGpDyXjbbnqTmxqrSBuSeAictJDd5xNBhbBj",
  "key17": "Zpq75joVLqX9QQYhUYpQM47sodjCB44aMDNJAusPkJiSeviu3esSsnsByBzwsKfHqvYC4uDZxezpbtttAixiYy6",
  "key18": "3LBzmuzybQWEBHeJasqFj1Zr594p44sPp8MgoZVT9jvBwFpt1nkzNdJTso349h3SHLheGW6MQ47QLvcLiLspkv9V",
  "key19": "b8TJ8xZj8wyDVaLrzXh3i6dmKjBWMwno56ADXXkJJEZket78d1KDmn3VrXvSTjewPPEywcJGoKmpXbgeZYEnxf9",
  "key20": "2pv7RG4S3ec7nM8JbrzfP11NbzpTmpsfuwrkUqKdJdajYy9Nz9EqiJtW1Mh45XbGtpAVHfDMe5nGbi4UNiHkjYMD",
  "key21": "U8g2FWq1o2S15RjHtnQcBGxCESanF3DEWDs1RH6BaM4NQ2cHTVVwa22JeTqaLsT9vK3CyQSzXsB5rWyukpXrm99",
  "key22": "5njTGSrsp5nWBPRAHkN9CxGbRZ8GF9FJLLL8r5MgftjErsSjLDq4c93SZ89fdubzy8scE1YPGKBoSgu2UGTwtt1r",
  "key23": "251yNcovhmkbjALwcQWdr3Q6hqB8bX1MeAGJEKiu7PzjvJb5K6dPM5utnyYeDk9dvkbzKXNmpb4M8JQuUpyRAWiY",
  "key24": "4XhsoV8xZGzPgRs4aNtF3Asp9Q54i4yfae3hZmMQTVpWpezszXearkPr7FqdZ3JKDDx1JJ8KRAqFKS3h5MDG82QJ",
  "key25": "2hxzZMRHYSzFPk6natvmNqqEc7ryN2PxTbfMKbLJEBJ81yXfeubXDZcb1SbX9ktTXHAkQsh3bLD4Q66G5Pc3n9PK",
  "key26": "hskVnSrzqQJhv5YgG4c7kHrVqi2aUHTz7JLjDoLQ7PijxPNMQY1WBnYFyEKG7pKLT1AKdAcw9gDsrQCCzoUCay7",
  "key27": "2U8aezaSUfUWR7kszy41wu2qyLxW921kE33eykpFbqUyj565AhbVmchQHY3y8p9Utw7CfDtWkcUepJLRRSrJXyQs",
  "key28": "4jrigqpkZGkVBk2L4gMbVEwLxjVcKgGkNhUCDiHaTbMHiiPFsSHjpyUFnbuRfuLS47PHiCCvghEYL9oXWiZcoYGs",
  "key29": "4kT97P2HSPgGXnYpUkk8Xqc7ZiSLLb93ZCWFQw7ecghfVcKEn9tTBjihPadfqqFBFECSuXQa1GSF6aJKPJ2tY85i",
  "key30": "5TLRCPngzunbVNb8myJ5gyzf64sxEjvmZ6k71JRozpsqdJwbXZgXfcUDJdgqDMwtYmnVf5RWLrVADpFaySKxk78u",
  "key31": "CbGb82Ls6tQs9NZaWeiHUvdX55mRN8rsThkcAd2BvohUBFPEz6JWKqC71DmRJrDeVCzrDicqHJJN2hLSHYyZq3m",
  "key32": "3Xz5NGMud2TDFuZKY85HMHXnrv8PXp7PWBc6Wd1Fn1GBSHAy3EEumeLTLP25zD8uBsioRN2cQUVmLaiEDdrDTC9o",
  "key33": "34meGFiZwSYD76mMPU7RUu7JXan82BRLdNGQuRycRdaHz1xaT5BjHZifafqqGJUozEqgh1zfSYmg2ZTsT6kdKnzK",
  "key34": "jNxVTNnas44jf7D8Z5XNfZmYv5Qfn2gqqzEpUp9h39UJmqvW7hkbgRGFq5KsEo4JFM6DQNytVB4C3FfxcwCEemG",
  "key35": "3mpCdTjHUEwjKvxigUUrKNGGqceDV7qzwV6cR5Q5cfCe6RsDKVyJgBqpeaU5qNA3b8Z3hRCUycrrqwkkvLTLPuXt",
  "key36": "2NmWsztSrejfKdk1GAcsn7DvHmdwHUoX38GxBEhpjjwM8u1UC1KtUjEa85ZuELW2HWPcTnKmr7e5TwBFcCWczzuv",
  "key37": "26SHh5AkJKCdDesTQX6iJezFdWzQEpWX9a6NDaEEJaWPhiUNoofSPWLuLHgHUWzwFg7eF5pLSkZhYQsTFxWdgUAn",
  "key38": "21qmaiwWLz6VB4WGPhWPgL1AyP487japCtyz9Y8RUEAiquKLt3XfLr1uZ18Zz5nqKWPaCRSyyWjDxfJXYvQvkGkV",
  "key39": "YwKKnx79DQQqeB5y2S493zPxogH8ovxeGhKtMPzSKpMaPGHTXHnbjq7NoQDeB9Sb5ZM7ZnWEwYasrFh1vdWQogt",
  "key40": "67EWWja4pHsDeb4oWZ6tJCcbpBy2uWNbFAbZpWpLFtYDmpQvxYiD7WgZnDTMKYoWA4ugdNQnYiBXwJjPsjJbN9NS",
  "key41": "2KZYBH92eaCRmbUPBPFY27gwRwmv3XRwEmfvnnyxe9JJLNtjLg4YNkEru5cmyPmREmnRuEKAqUZBytEtQTTunyi9",
  "key42": "4cJUQSYKmY5UEWGsAxmaVhQgXfB6TGnhfMQknTaScVEWeeFy4Xi6vgaPrfRdbboEUm5Q4xM3CDsvKeZFDHKE3Fz5",
  "key43": "38HNmSCWjJPHhwHwNiSga1hB6T2L2J6W97o7V9MwFYwnVfm7HQsAwYGh7xw8YDsRxAoc6JtKutPJrAW7FguWLQ4s",
  "key44": "66cv2V9on72ZpYyrjnBuVGEdjmPSoTTBB956MX5SKaT9rXRUU2g3JmqKftQB9XAnGcAMkycuFKNLGpnQ9KjB7zzg",
  "key45": "5Rq7GCsDxTGjK8LBYWw3YZ3AafLi8PF2QyJhvxP7CFCeXEmFceSaYUdzJtn4PKFfkE74NRPfLWUgNkVDyUUoe6ob"
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
