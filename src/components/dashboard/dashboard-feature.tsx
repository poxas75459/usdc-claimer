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
    "2UUP4bCLYaiwNVcrKkWbSXN8NCLPtQR8D51RfG2QzmisGSGQoWcnrRKRB97dSxrMzBMcVkmeTQ2KJqXKTkZA2XQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HuufnuBjZsi4u3Kh7WMVY611dzanWTX2CsV8C8g1mUzCz9Xn1FKb4RPf1ZBuPpfvQhx5RGLhf22bKky6MVkZVJj",
  "key1": "2VbfGzr461MoumCCsR5mz3FFRxeoGsGTtQsezy3z6Ct2ueeoPK5S66CoUqiY637scJP8RehK8cMKTKRjoPTsVJB2",
  "key2": "3FZsKxW3oHqe8g4ZvRqN9icw8jPMeHfJbbaf8LNkPmQuQG92W9ZUjyq7sSzdveRekJgcfYsUdRvS6qHvhKM9qoUP",
  "key3": "2mroogAaF5Lrs6DekWjuk6vunTqEhqJXRPxK9wcjaLqVrfKpVHjjPXLNdXF3vJvx47hgWKXqk9bAtpGKvMgZepr7",
  "key4": "bMZD4qYsfh5PFaHHPqi6x6XLMamdBty6qTDwL2sZPkteJWpnMA28Y9bMP2PUZ6MeyBUhxYZXeDXmQPohbS9FF34",
  "key5": "2VijibhpoLSvR5wXnBEVk8JrydkdEfXQXrA7HL9GqCmsxS9yJYyTqAYBfvjb2bQdVARr6DzjvzGmGxkJu8jBBzQW",
  "key6": "5HWMoQNujCDneEZkk86KXaarHNBFS9W5BFtyr43hJqvSyJSBNnWxGd2yQyXNGn99E7pn92BPf8MsmaaEqeQrujyj",
  "key7": "3N1aYsAsEsAG4gP5Rtfmn85Z8gHzL3djS5qNsYAdx1DNQ1ScfWQBgY9EnBgTe8jHZzr6xaJpYGKqFXwuPkggpSVP",
  "key8": "NeW2KSCT95mDfcmM74dRkLSJHP7gy82eQF8B4zyQoXMRtRvAnPwiQ6y4qszZ2tmngHcNbqgBJ5FHKDccCC4mAUJ",
  "key9": "2QroPbovhG8W1nDYgWmjjCV8jKSRnyC1x829qQSj5dT7AxscB2gK5rqBwW46T44SqbncQ3vyBZJJt4ND1aCZHuBu",
  "key10": "Toa7DUv3o1s1BXvQUD35frh6wKDjfZhBDhjRHthfgoFznfP5eoujkaozGCcMdKxFZGZPMQYwX3wTuPkMH5HbdTw",
  "key11": "3YeRz1JeHouYq9uchL6jnjY2FNBTRPycSwbC4NHpc6bqHvLizoY93fFUeWDHG2qkshnfkyhSX9w8hG5fTNFvze4F",
  "key12": "49RvnxS5dt5ns5vUCncTxv43zJnkZ9s8qHZXV9ep4RbGDNAmXzgBphDvRebhWZthjJwrwG6C1PUYaDBPEfinwD1P",
  "key13": "2ne4P1QAvscotgw1D9dQsnmgLVzwip2yoebDaFug3zyuoLhdbeVKACtGbFdcJiGVvDLL33UWkWN5mtw3tn34FeEJ",
  "key14": "2oEPA9ycUetn7svrFRuyoYNtrjmHs8jBPPiNaCebZvGHUqgy3XqS9Qva4VKaPquoYdRJXLpLLApA4aBR48KXs21K",
  "key15": "2yadVv4bjGRgTks9qGDFVveZhZLub3Hhycf2mfRYVcHbtw3rSuPKhwsJPE6tDfgQ2qdiW8DfhXUz48i5zFMu7xUf",
  "key16": "4Xqs8DRgF2JGZeJLJ1ZQ8E9ByAWMKDuxbk2yUK6TB2PN2jfeFGVqaZGYdpcc76oppWakgKqb79QudWEMqt8UF7Vj",
  "key17": "Ty8ZohruqhBAX5hEqm21ibrvpazPzYue2vZUxoXav4bqAJKcRF5AMHeHw22MP9Fb1a3BWckPMWAmUcMamxCwKz7",
  "key18": "KdW63qhENeU3z3UrtRP4WnNedcQVvW4NYJv56i7BTQi9eqgt2Luh4hrVomE8yfgCLhfMcyjVuWpRZdDoqwrSdww",
  "key19": "2qpfpZMuXgn6XjvGBFnWEcLzocGGk8URyMfru4yY6bZV9m3KR7ncSk6YsoRRYyUXQNrPH75zw4HAXr2i6mLKzc39",
  "key20": "2vWZiQhB4bpsQzhujBWHxgpTUe83CdawMMynXMzDdRMTJHVSXXhwx2PSK2n86LXsDSK5MbV8gP88tsFNFXoK7kPs",
  "key21": "2USFz4XpueVEzwg1UBfpEMrc8N9Ht44dHz5eubS1qkQcBM5J1CHMUTnbYFLKrhmU4X2wdaeYVAa41DGBBy6YSDZs",
  "key22": "sE97DcXhLaRQ6AD6w5hoaNczKnPX7aEHczTRx3BF1vXDBR2Mrqnat4epHupzuaGMnCLATS37W3rtz3KcvccwyFr",
  "key23": "5Ld4nPibuvZh8MGAdNi3e8PHJxZLVxyCozbHULGynRgsbCuPxLTeQ9P4MmqaSi5vAEiDe7unMPKGyau4uvJmA25p",
  "key24": "4u5Rfph1G9LUVLw8e3acKDSbiek69vzakemkKhLQiVcBYjFsXts9wqWQqw9pcpPgxPiMwq3NzBuc1tfAVYsZ5rFn",
  "key25": "5R44DvRGC24HPZ8ephToZ5wJFUCmaqsaN1GDiAwnnLB8zkLQP6g6aaccTaYakcB1fUWfV3kzpEkzGknzThXH6TXo",
  "key26": "5kLE91qU32nudwYYhmYsSC8iiKpg9x3PBM13gUducBrEZNzo6AEsQ7ZjAKANaFRARoJQRmSz5icaE5Aiu2ekcBrd",
  "key27": "2k1dciU5Dbn8X46VqZt2rnN25Tz3xojicGs8SPcmixuiaJYU9oS4dG1LCf8qPJzhbabd1AQfqnvumbTz4tSXVrja",
  "key28": "5upj8fAWXUeCXNiUMo7zy8wiZhftumLDsp5ukhyqDUgyfza9vDkuq7ak5qoQVEQcNWeATxUHssq8wDjbJrqEEz73"
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
