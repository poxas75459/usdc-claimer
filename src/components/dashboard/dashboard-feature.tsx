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
    "fs3ddaWYA7yeeLwsbLP2ATixy6BueDvBFDRC9p83Lf9yHvZ2htrfYTfXR8xNygJH6mgKATVH29C53NySYAJDdU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yDCrTP4qZyNhQXqcad82pkDGSXWdjP1N8PFy2xBv5nWVQmcev3921Wx6WmJ1SHAmgyxvEg8nLsDRtvHAwMtuuTc",
  "key1": "2hKhzVjtnEKfeuiZWTPv1eudDD8zVFpvaJikUC3KzQufgaTMMy39sUdeRU1Ko6sD98ZXNo3uHrgMQTibY5DovhGy",
  "key2": "2TXNBQavcwksb6Fpj8U6smoDd45hbyB4ZqjGykVdLxANa3R8xnrKfANZTGUDJUffpk54CjGgMx5JxvVrukfMRapT",
  "key3": "wfMKGsbTJc3roAsbH9rsvFQimBZYMQXUYdT8KHd7FVoJ13SYzQkczGFeebkrV7Zmw8YuWSZpd56MqtmtoDeGfDf",
  "key4": "4GQeRN9uBXVYaDRNxG4aG6gxPDDy8b8W87UhtG9rYK65eXcaepbjt36cJS9kbWySdPgjKKAKcF93zENtR6CxCY9d",
  "key5": "5CrT4br4Ya6Xtn8mDMLNdj6b8hksiqDNaSER5J8JgyksufDZHxQ557rv69ZDCetgLYunfFLTmgCFTDZ6Gqo7K7WY",
  "key6": "3bKCzjrJqGxYZeofUndSvUDH1KuRKCU5NxvbFpemTNLonQRyrm9fBR2hYXFT7yyHKdunmFMyvcUpKSahBNfx1Rn1",
  "key7": "eRZ52z377XWGK74Y1E71zx9P2tqC9JpoG9VV8k2zDBrF1hYamvDhkVNs7Ko1fe4gJFwq6q8w1tSPX1LAgFd6kBb",
  "key8": "2FZXMid1j5owLvZzg4GrKanedphbjwygEBnWJ9SWj8FA9ci3XQW9GghFznPrwvv7Vwgs8eLxYw8M7LJakVkGWVCu",
  "key9": "2xivrJhrrFStRktUpBmTRtRGhjLSE5CB3YPpxK4Z3jjAzXiQFrweYQoqDeYrZNEo7R8fHQbV2jaKK8KPUXNigrCc",
  "key10": "3kktGR9gyJM8sz6W3UdLGmQ2teCN7qqkuC9wkBBer8RZVXTo3kHuH8xUuW5n9XXnzqWiNrUegSUMsYGbXffGkQc9",
  "key11": "4TShR41jwnxCfykeev1N561KGJk17EJL7bNvg4QkJYdnaxqWttaWSXL4vBZeWgLXPHztDzsb8v5YSCHzwzQV7Vbn",
  "key12": "54YYpNhnnwwaTqzb2jpCK8PCr58aJoB72DAkrVV7kYLq6pKFPeM81HbabWv1oBb7DUewaxwDK7uEgvYsiEuX4c1u",
  "key13": "3KgRyP5KGu6u9zdmpYvKVeFuMvUxpYNpJvyML6Xqe18Fg8BPFPXxp63RZ8hKKfY47QDy3Y6NaaZL2asYQZmr7TQi",
  "key14": "w19pLjAQEAfodhecfC7XEJVVNSnRB3cs8dLLFPWj97n8fUU2TLpPiBwfT5aYKXCn6iXibpMNeZPVPU3bVGaHZmu",
  "key15": "5pBksbpd5cnX92bvr51MsiUiAGwZdvUFUYF7SLCKyGgDr8Uo8TJjW8m16ZYi49ttCePzsuHom3VRENyZ7QUYDEDK",
  "key16": "2i6b3WZ689ca7nuamdsuKW5jPMMyeum98Yho8nLVwF5mDdkL1aP2YmoCbPpJ8E29mpNP1J4VKS81j4nacfRovCLG",
  "key17": "64EVD3ku2CZA3PFwTDr9bed1ryQf6vzuEicudeRHR91meNLDP7UaTQ4ckEaP2NXkgvK3RpHbdVPdb8woJjbJj69S",
  "key18": "2tVwA118bYSWY5WWYq1K82uNFwpGXZf6ufd3YDyNkE2XzLUXQNmiimEUTmxgii3Y3z6nbGAgjFUL94gKgwzfVWsS",
  "key19": "52urJt17KB9LGSBe1ATTjjWJmTrVUoN4jH4F4w8jAbQTFZo6bSztCbc3mpkug79TJPWxSe5uqfpBc2ph4PzjxtRE",
  "key20": "2SF6ZfUEqopWEbsFnUDRMNY17krPYW1b3h2MTJTohHf5GLieqxFbw62Jsd2WBTuRHgFJ1jbXL7VgXyykwb6rQJB6",
  "key21": "5BZuyDm8V9yko6puidZSFuKKgkkKeYqeghUDs5mErgDeBhohA4dqGvsxAdr7E1XuvgYWmuhEcCgBtvSKLRr9VsHa",
  "key22": "5QAUT1x1xHsdFoGXdEigEWHd9wFXEqxGUJ4MBFb8pD5L229MwUjhyzDBBCayex8zwjc2QqfRMELW6ncoQjZeQ3tu",
  "key23": "3E7pr7Jjy4rHmEB7RBEFFsF6iDbwJNPmEDpmX4ACmjiv2PtEUhgi1ug3BGhCxztfcmeX2BtSmLPRu35csLApY3bF",
  "key24": "3e6jNJcQ4L5CMBfUPb8UZzDZ1wDu4zfffJcQ7x7YHJ8MvbeC5QSBNkPwPLv6H1BaAY4kDuKJhQUMqvCYAzTEkfYS",
  "key25": "3g6fftzaF6izMp2g6ButmyuJUEKvv1jHxGZWXBtgwer1SLCVv3p1wC4RTP2AVsJbea2D1kTDnjtqLSVhQGbJUURD",
  "key26": "2Cn9jMjp1LNivA9GjT9LnuK972cxiFFcFP1exnj4WjJ7AnASw11HJC4zQT4ckAJ52RFBi2hEtXRCQBza9AAo1awp",
  "key27": "5SfsVjwAmN2i64LW4T7JiPKPk9MnaxSzVcE3VNvP2k2oP3wpqEakJXxw7j4rTJyi7SVENGBFLMd4ZJuLbD5VPuyf",
  "key28": "to5zsbkm4bpHMhNboKksFgo7NSkeSiRYJL1CPv5P1QYJDyatx8jrJUcZPms7JtNhGhknwqzH4YGuokbuQYjDpdb",
  "key29": "c2rPu9fTPLLmz6n2JQA1Nk146dnrph9k5XVq6QUc4G1bKbaveS2nqpP7Hi5dcYoU2UwdFapP9EvWYMfmJVsNmkX",
  "key30": "4Q6iq8RLjEDVzDgYFoUdosuR5gkirLk76R6cfoXtf7m59aVUzXKh9a9zafpDwFDUTRbq79LLafkRgzrCRCBkgSmC",
  "key31": "4fDgQhRN3GWxJ4P2BR89dh9WvjaZrJdDebf4Ly954XhfVL75NHmEaJtcrSXFu3kPFakvYHrF4acPppYvjHN8gmL2",
  "key32": "GNC7HFJFe4Lwmr3aSpa8Bow5P1wFCpt9kkrCom5xSx2V7aVUjWMQBmXpYqJLBD3KiLNdjHqb6r8w3m1zBzqCvjq",
  "key33": "2uGBXxz3FXaQG9SrYvPb2ZdujPogjMr4mNpXPBofPxDLNKQ5EBZ9gc3mMd1HN5thkN8b6YVBNAnF1ZPk3djtpVyQ",
  "key34": "2PsyxGyAzNjN1zCpXfEj8v5a3CYpdysoingYy7ctai6TW6PSdBKAvJKt5gXMDjrAfHJoVc2CvehUDrWXMV1jpdFT",
  "key35": "2VgYnCVMUWMUcyNppnWDNsV7kSqKQSamZdfa46FKDMPi1F3yEqkzcMcZD3ftbmxmr2hKyf7EZ87cF5GqLE7gN8y6",
  "key36": "x7Np2oWx9er62BGEPjGTkMQyY4m2DQUD9HvofWHe4X4JcHC5BW5Ajmi6oJNTTunSRXw9Dh7PXCM1gvESacYnGLA",
  "key37": "tYgCv1srveZDc5gvF53wf7gXrPnbViYK2yS28hfvvAfFVB7VSndwJSAiWe2Qmp7YM3k6tWnuTreZzsitNW9tAHF",
  "key38": "27ZJA5eBEayBxqCNvJKPN5icB8HudH5RpRHUgeGfzrbvciF3ydQwPQFUxGeKHwMj6jQHmZySrnceX76My51X7t3Q",
  "key39": "2iXH2VL31Z5bv2uN9hWa2XY1afruDqFHuqWPeajaHRKNvfoGaBuhGtJDugTJvys99sAmcSB4WGYu2ZEv92LjuFJ6",
  "key40": "AHW64vBZWJ42Z6bPLddcGZEWYcWYk8UVH2EN47goS7KebG3MoSPV3RJeCvKuiBChiuAmiMKzRe9k4ikx5weTVgf",
  "key41": "BuhusL9YHpNB3d93qze2yvNkEfFqqCoysLEkPp9q82Z3zp9GqC8bMxSRnTq7BBm3fQBUMCCnqifp5SWCRdy4g7E",
  "key42": "4pKqbtiktF3unPULawYjPZRUqtyEfufnDcUMg9HLkC11kv8Bk5Ky8VMyJNZ7tStJDtLaurdF1MMHtdpCZHF7jdoC"
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
