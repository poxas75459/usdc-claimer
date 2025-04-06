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
    "3uugkpckBTZ4zn1rYbjvNNqATEw8VN4352v6Un7XcWpx7fT3RFWEF325MUXMukY4gRqqk76cREXotxu767MNm6mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDAFdFSeaffK788TCxoF4cUdAqcFYNvsLhfMJBEaZnbJd9HeR1Tsj3gkTM21Rr4ZXumxBXCCaQdtZDJCRqV49Gi",
  "key1": "4PCQP5JaLKYhVHj2qYx2MdhWm8Rv7fSnJoBbukjnjyEdWkAbxXFEEQAgehABoECeAuZ1HngYKXe25hBH7zfG2P3z",
  "key2": "4XCMowxSAJKxTmGHVEjgVH7Lbcrdsi6QZKFq54qiZW3kvH92rCY3optVy1SCY7jD5rX2DRpptA5XuxdKv7ZuXC8D",
  "key3": "5iFoyKveyDRN6bELmmFKK3nRTHqCvSEiP3gYwPwwBoV5NDyAsYh1eoCPmyYuhZmCnzvwHibvXyRPz6apYNxN9Da4",
  "key4": "3J15VUxe8BkmxYNV5xuZ9zK7BD3BmTwW8mPfV95Kox1HDNWVE7MqY7UDns1LetUdoMAmJzujeWdqLoC5J15bowLV",
  "key5": "3L38wQ9bXAVezWww8KDVvSE2s4h8BYwjjyFhQSvyCwxZN4HAo13cjSTKpp4VH7ZUmVYZWmVqyXb5cmcUVCqTuH2",
  "key6": "4t18ujcGdfW7fU5tXivxcUjjsFv4jSpNY4Swfk45XVWeMPD6yCjL2MGrUBzjH4msRGfiuwfxSViXPdFCLTcF6kuX",
  "key7": "4rkmn4LtVvnBn4RXdRTg9G7bCWnLBo9s1aH2osXkmjUqdQECvfktjBe483n5R8zfNJQ6pKeYGJHVnMTbkdn6LBqF",
  "key8": "u6aKYi94sYPybwuByVKVeD975irK41SRLWKpYppQZmT5Mc9Xod2tttUSR2wkTJXVDnv5YsrQ1MpucQmar3MJCuC",
  "key9": "3aKS8EM3vWi7MQBbiu9gVSPBs1pnWo5m1zKx6KVinoKds7ru3WaTRPJaUCzNwWQ3cL3aDiskEDurmGdXrkq5Nje6",
  "key10": "2tUPi2xEm4uov4pUxumHdpE5yAyujne5qYEXjY8ddEuhx5im6UajBF6AQzhCo5ipp9T33G5VzcvWcf1vEt9aaP6M",
  "key11": "4P9aP8iKy4KSnXxuUbKwDwK9RUpfgKA6YzXox1hmdiYuMqUogapDbyJ3EYcWZmBdFWcobvxpCSkwdmwcYjBMC3CE",
  "key12": "3scQdrBG6dQet8Rtk7vVHeUzmAzB88wph8tVWJPewE94LUPDMAJLJL2w9nxEyymwpZQFoVYXRpn1mVeLwk6DhG67",
  "key13": "3rZ1vHqHZRHxSzL57qW4L4CQn4FzwNcPLBiDRWWUDpSY1QPxUoiWoryvrueYRN5JZE3vkHq6aea2oMQPULJs9PoY",
  "key14": "3bdM1a2JPdV4Hxj9A7nTNDn6WcPGZMKLwGnsmaEJEH3sbUCe52UoHt1pn7tHmKtPiXAcywyiQ4dTrKCDDtCexWPM",
  "key15": "4oDF3cMuT4jW6hXGvLgEw9jUSbG3wNQtR6Z8uQfPyh8Bkk7sZfGxwkDzFaouJn21dZGPdpMpT3bF51ceNDDEYp2G",
  "key16": "3Re7NhF43RRJYKRiDgZPH6aVjnE3ZicpSsjDiA4ukH2iCgr2XpDUQXHvi1ZCp6tfrS1dKBizFbMovMYFP3B48Ww1",
  "key17": "2m1gMWgVw8uY6ESfcD6tjJTimxq6jivLZwqUpSUXhGi9ZwXVQMvfXqjhjwK46KnDQdBTi4pT9j3roNMeyYRS9GCw",
  "key18": "445wyf4M9o4eM61Z1LNM2wDzxEjWyACAQ9MiPdjVSb4XHJsnrP4DbRg4PRiKsC8dvaCkY23cHsGBybDhHPpAGmcx",
  "key19": "ndb15jWsXhjgSSgyKmUnqJdHxMgaH2wRbZGEcgrpe3k3kTmnvLfq9YWyaoA5iS1HazT1JzcnQo1JF7G4Pv5uHdP",
  "key20": "5bsWHHvxYpEGDwZMgypyyAygZJLjGW8jj6Fq2uZExH1UPNUxt48CYU6RZW4j63SyWd3E4ZjVPfvaozUpiQjfmC35",
  "key21": "4Cqo4rkFGuskzWjd8xphkwEbmGPFBfsDkQsokGg4oFDUWtRXRjUcpECRVzR3kNS9p5GgHU6qG7zuy31VS4TjtaGy",
  "key22": "2yY2WGVuFpPehxiRjuUWS3ZEFg5b2NrLCFthXMMAUXQfA55KbeKQap9JAMUB3itkmLePdzqFdLPo17AyCi9bbY4s",
  "key23": "4DejJFzCbmZBViLkPr5QMTUCD9BAZTTfWDdwUPfbN9B3iH7jCi1do4xW4wWmFSoPpdmUck8LR48f1MY2aobN3E22",
  "key24": "4e8xGbiqA5EebrDvLVQdo23QNN1ydLiVgigQtJL6vSZA4r8WMivBvS1FUaMJ4YxEUM5rnKReyzL4f4QvHBP6Ka2m",
  "key25": "3AAHUNJiHmgAvPNs3SjWXDDMQRhNmxSLL5ahR8EksPoj5vW3fP48pTbeE6cAsgT8i5EiocGuTj6tzC7336vkSHZD",
  "key26": "oZAuxHh4myn2mRP2YJFfByeaKBWNzWGnhXEcnCMCfypfeNet4B2wayqwaiHsK6cmcJDjikktNg3HJZJHxeDjkU3",
  "key27": "qN7NHaH5q5vmPWqvzmmyA66QfYYPzW8aZipyj2fi7bBEZgeSCPqQAeBf5fs2SELWyEYViG7ywwqjjkLZVudkHuN",
  "key28": "4XZX1BXk7sKyeK71jUZUQyNAxsuFfwFH971egFNCf4hPjpeeD64aGyXAyzpXs9aeuG4yS5JXLijDafqBXLPNTzNq",
  "key29": "4V2KC7QbSkVgcNzsUmbbwE4Pkvy5u88v1mVhHmyNv78vZpDMhgLuJzWBMZYNnLV7hRz3yBgzERGK6n2amjBKSLs2",
  "key30": "5Q2k7FY1k3MRtUHHu5xJ5mN5hELFTjGZa85Pfmxa3oNozGxiPRbqDCYgZzj2EZXUDA292gWtQsXGRCW3cAjyn1yt",
  "key31": "3THxsZJonTDHBjiTReFEgE3bHfYvxFBcU6nfPHttuJvRXrXo8JTY9oMzKkwpHHB3M97j7v4iRAydnQrJnKVKAzZb",
  "key32": "vTBQWrdAEF7UYaXGzvY1F3TMPQiKXmwhvpdBAUkt7ULM8AqRk5TP2uBqCQHoXjdMfpzGhaLWMDkQqu7EiVoGGSH",
  "key33": "4drCS4yrLBtsjt39pMDdNP6L4Qskanvfk9voH8yQQ6szL4RBNUZsaXPHRq6NH6Nbr7srwqN9oGJpPQbFqwotPTBG",
  "key34": "359DbjmsCajAEE8BYP5dGbwkj1Gtnuat7Mizk8DWosDTdMV6YSiocfY2bbthLZ3Y18ZmTEarVKAefaJAPphijSFp"
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
