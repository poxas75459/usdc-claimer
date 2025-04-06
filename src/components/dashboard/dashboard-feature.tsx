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
    "5V9D6jXUu2Wvb1PXu9ygFRF2rVB2Vcj6tME4RWViK65fgVh4122VdcUGWnd6y3fQARWyn1jr4zkvbzM2NbRXBn9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCSz2VtVvr1Zves1q3cBTGXMLtrvvrjoyoQ5VbKXpA261HSrBHREAyHarspBTSaL8cXY4Fpw2m41ujX7AvP8pX1",
  "key1": "3J61FTbw2neq8nDJML1wXw6gTVDK6w859B5hvHpPSU7yNUqfcJCFwahhstBHn2MF9h1LS1z1uzCduXswMvKcodKH",
  "key2": "aCBdJE8Mpn7doopHghh2gJ7gyt5Kc1Mf7SJVoSkW6q1izD2u4utRfEJj43iNdJ53gbDJ4msSTVnfLDG3pvsfxEn",
  "key3": "PbKD4hBXKsR2mAGz6WswBy5U2x7DZDNX1fnhzdMybuVv86UmM3rEZKMdvU1uqDTLDtyBpXxWeHiCmZMaxPqMrkq",
  "key4": "3nxE4tK1tYvHqguikhD1K4o4rJVhmeyhEWYiPxBNt6Vc2nUzGeqUbHh7qdm9WtwHJSTZZBMvgrNoPSzPxhKnNSVt",
  "key5": "32sWLjE4Tt3S1F9tQ23enmceizZhHGEg3wtEuuM9VqyNPQRcbrUaU1uCnyeBxST8tYx7ekFwJZRbMx6ZCkJ81XQL",
  "key6": "QxQiWyDf2axtc5z61puA9xcLz5DxhPCEmSrJDRYSgNP7WgM22iib19eGe3ey1BWghooMYrosmRqC4GZ8GfSSepv",
  "key7": "45Gg8GsvfYYrtYaQnft7vdfr9eBzyHj96WJtUqSH3CeEGSp7iy1T6EkMDyxasAs3Wpg6t5qtzsdSavZK7jdJpT5",
  "key8": "41VYpny1gS3LFacBsYN4Q4SJvAEYQYKXSnJMQNesrAAoL2rP7ZkenGAwniRe9tjRC2qwxvHr3ayf6Gsqgh1eBXWD",
  "key9": "5ck7W2XSN1gW3pFeu4ZJzbAZq7etyMrm9DpcKdW7j8gfrbYMsQ2YmDsRAQdJfXmewAAdW6DSfoBdWwrpu6yqQ3ZD",
  "key10": "4hkVmkFRMdvDtx1cwcbq8MRxcUvMKxkq6rSsTeDDs3w7XwMDccLtViSBxcZmvXBxXYEaLHrVCHA4TUS3Yq6VfzTQ",
  "key11": "3cAn9CQwyaeNKKAdcXbCNKV1jS1NQmDoA5AXWituP7JGYexQGt2AKU7B2Yc7xrEEepQvfCBuQPWEE2QApubKPgKk",
  "key12": "PNG5c2AJdFRZ4bokdimkFzoHJXw4PpN2fBi4jyy3zaVvVQWKud5R4as5M4gazdzSgW4HDfTqQR8zTdsa5LJvwfF",
  "key13": "5wh29GSbbuStPWwV8PjpQMsGM9VPGijWv9WMjrAVtiNaE9Wm4QHVRY87tj2aj25yw2GJhZ7cfo4mYFNpaMirfehc",
  "key14": "5e3qJUJ7VgMts5KtUSGhfsLkPUJ5jALVg4dYKsGvWbpY5RzLS5ULz9Wg1bYT7UgJguPPYVjHNjEGGzJMvhEeBfce",
  "key15": "4sqkPTNexkhPSgWQF7NRMdnk68ijceX2qV14LtgzwxeXePHyvpiD9hEfkEmuHc9LNMfbEZP7AP3REUpqrw5PhEf8",
  "key16": "2ZdiZPcmHJ5HStQC3gfrs8DhULD2bitAd9zDKiegzHJzgiCvJbvEwKDhtLRqkEWxV8NVjAh6kHbaMg179o1t6KNA",
  "key17": "SyzJrsK71haxJD7PUQRnWM5ztqELxPWH65jBtk1t94v9A6cm3HNXb4VkbWavSFnxpzFwrQgjkvqd4y5rquTgtrA",
  "key18": "3wWqqYoTCjoVP1iYaPZepuxmjzzmrmp1z9R2SKVNUtJ9yRqYgUYaqepCSJGuCtDVNWW3HpWLciZTuFdceYaB24tN",
  "key19": "24nsg2EdmjqpS4puN6p1Cuw5u5B6F5pJnX38nAuEpNppnNmwSMdhavM75qNQjMGcAeYNTGdLqSpUHoWLRamPqiEm",
  "key20": "529hoVwvuize2pn8bJ39aQaprEFDAdGD2zV1P5Y3iL7X1ExpAQKTCpzkKhaMgXNdGUmeKymNbVq29Hkxdhckneo9",
  "key21": "3LhvbjcVVqs3GYxsgP1rJFkbMe3zqDEJSaF5SW9mW5SMqzGwRi5xzhDUD8wKmJM7skiprp5fhHku2YzdTqNWhjsi",
  "key22": "5zKeo1VDuYSqtJmYgeWCia6NkvNwTGYdA9pciYuTeuD8GdSCtVviSwvUzkqGDjuVwZLFcrzwDFNMvvQi8Vg1gkAx",
  "key23": "3TtAaSeAJQzwWcPMyugiM9XmM3pYJQRw6UF5kCS8DBQWyS6Jtdc2ZhWBz1Mb8Bp2WH4QtomyvUD1LR6QZjgVr3z7",
  "key24": "5NKZidhnYrfDiLScU8wvLhUqBs9xkk5eiGFuKP4RXxts66cALApanrDMdkTMSv3xU6zT4LQJWmRmWYiWU5NTiQYT",
  "key25": "31ccS3A3ouBDjhvXv6wrULjwHZdgB8PYMCS4EgYAaeEcWH7kAm4CfPnAMF3PaVFsM2Tknvxz7LMJSR4KqN4Ec6PK",
  "key26": "AoxkpoaPDwjTXbKsuVKFVE9FfKvZMcDzUmZ9e1fo3Zdk5V7UZyueoSBULz2p9MHE2CrkPtrtAEzdYFoDQsVTteP",
  "key27": "22XyfW2xuZvUXRTCpG8fLXEMAZqcZp9ba73P2Lru99SAQbRB74kjQ2jjq59HzSLsHjWUjWC77XbdjfDid4LqxwsD",
  "key28": "3EwTCScJgXRL46SNRYvApqh5pLV3kFQqNTK2xweWKtvLRaHcjF2UqG2SU31esYoZbWNPjs3ehJiPk5Fzn6MoDBn5",
  "key29": "N6GqxW9pSqrWtWGwk5GmNzT96PTzWDyiDh6AsnwsW4ULwCaTyrRHCfBZTeWvuVsT8ggHthmWGbzgAJGtwgrQLP2",
  "key30": "36G5jSKANPcX67Jcr7QLGhcABjPkTiN2n55bLpef6vNEUwaPG5QNW2fTP7TJR11U4WFExN8Nm1KUUHLj7eLgXJMB",
  "key31": "2WVFCEoZX5sWqqjaP4tSaYU7hoemFJqJ1MReTUn79FnaEMmpkZrbkR49qkVsUG9g9Sa37BEwsJpWgH6X54SqYcLP",
  "key32": "48brdFC5kyLQfaSowAiBizWKVfDc8JbdwoqyUbxwcM97FnLTj6sgaxkPN9WvnoP3eajBmP6CAGTf8ioL9mNDegKp",
  "key33": "4o99iCANCaR1P55UGgp5eucpBTGJ59C8hiMz1LWvCjyKDjmPk7WUfwEgfLWLkyFhVgGPnEGRNKV1U1iZCR3zrMqi",
  "key34": "4FLZwsQXyHq7DN3w5NWVyBhEkoUcw5JoSf8ZgS77nFoM9gAJRhTEXU9G6yvhRMCzmYW2zmr9FnZoCyQi4VUsQmsP",
  "key35": "59SAzAnZ8cebHFfpdyLPKTb3gWC9paT5t378pBxj1NHFweHWFbbXgJmkv8Vbvz5qdm3CMyoBcF1RTQ81bfEA7tdL",
  "key36": "2AmDw4vLjBnpum54b9jv3ahmYa5aKvnqfHzguGB2BcY5pg57KoTT1HVvPxKKPqW2YGown7t9AUQgYYy6uKfvv2SB",
  "key37": "2CqjdeC4kcMbaDrWXtSrJmPWVnztGgKE51ubQZJpNJHsoDZWkFXMUmQGqbb5BVHvADHk9hY4YkK99ZWEHyfzEhfw",
  "key38": "5HrVLACtkMZCnzX22PSwTyctkHAeLdZkyyzNpyVuUkB7Jreqt126wn7JZj7UmQyua7qrnT89PwwegkRAZ7737t1W"
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
