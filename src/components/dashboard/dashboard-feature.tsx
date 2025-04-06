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
    "4cLGFrpxKaT7FGHfKLcQJ4QNpqpr5uzi7iseaiYDpMzff2oMoQZWCJ38nHxCRwNwwdjr96hzEfLzdRbjcTV4KKYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrufnM7bibRp3Mar7B6TaJ2ettMej8eY8wre33emwiA7a8SPCabLdvzmiAsH6pSSWZCHLaX2bxWcNJUZr2CVoQC",
  "key1": "55yNekkvDMi5wdtRCC9TVmqSk9Gqw5Ar6BUCS7NEje6ZkyhNSZeeVp9ZGL8J16E7Jqggu4GGsT3qSq4ApS3mQyV3",
  "key2": "3busawfMaazwdkLBMJVxFcgzorLhkchQzHBWL5cR9DKxH46yvdjekytJds1tSm9cKDH8uAhVcP2tYz3ZAYMnML6f",
  "key3": "E9a1qSKpTQ4Rss51QEAZ1fUCugVSV9MnJCe6EVkjqM1fMaKHx23PvXV9wdSZqHsjyuksdfuiketf8eDF8W7EhMp",
  "key4": "3esTSE6255DzKZUUJcqqr1AnhEEdHG962M8fuPJMGaG3QioF7fJWXVBn2jWJmJP1QqmR4eBgrYoNnXwFAHeReoTH",
  "key5": "3X4Vikb9jpmuDmjxfvhGhuWGFVcY5xHr64JqUNNSP9M1rjywTv8VDBKsGqJ4EXjd8KYVzZPDg7Af2yEgJfgE2TPM",
  "key6": "32Y3TjAJKvctDHyg8B9sT1NZTZ8L53T4VkDex5M6RC9vpePE3kBw5K4YEFnxVmkeedWiBqbdMuQ4ixzv7eYi2KKb",
  "key7": "65WWUy9tovTccZevTcSHygEBevCmQUGoNYwyTmsefXhquggbnaGZnkvTpHRqatDvvmMnY2gSFXkd2cPrHVKdvqSD",
  "key8": "5MAVenYD2q4HEtHR34YPEQDTm2kTB7Mmbs3fNaWJk9zYAXA43PZu8gKhtbumQBBHzyScGK42koeaDCDde9H7REKB",
  "key9": "5tru8ipjFca6zQWbpgdwQrfiLMkZCEy9xAu362LEpRNqCtPeuaYxRWuHPqT2VTmZ39AFq1rDAUk5uS7YgtUE5SYD",
  "key10": "5h2vZtvbV2rAwtwyt2XRTtKPeNnQH7CuFRk24Fk1HUMcXT6iwLkEak5ZT2eLwNEhKPmYWFokMnnaTxK2CxaJaWAX",
  "key11": "4fXLYqSkbYbDUMseDiTPZGZs4aDpNX9Xpf76ws18GaL1nJiiftuty2JKD1GgidPngD1cVfrt4KLVon7mBJGkXpBj",
  "key12": "4dAK4qmLHsCzKc4j3VMHqzRRFkuqMsVWFHt5hS1PFq2Y4GJnTuAQtAUZfGBYLwz3b7zhhkatZ5rEgcoCquUioDdz",
  "key13": "58XrhV6Rp7jPngvFsHiknTAqx3MjZhEvZiAeL92HXuKSeZV1BNht4aSLZECDUqSC6rpkEEmGcGDCYjkmNAbgVjDa",
  "key14": "uSJUotvA8tFRAXMzXjjBXD3SuMJsG5NZpHrMpaAL1iTXYediy9ozRmHv6aTbK8VQbstV6L3tXDJGGYfKsorZnFY",
  "key15": "4si4q8HpGKh5kDHmRibhwZ1Ub1vsSGVfr926SmNGWA2YeHuLTG2aECvzVoXSSfb66ygXgkJpUqrN9ZNN7pxfN58E",
  "key16": "5rC4bLjgovkdYKmMCL9tVRt3ewJD5P8k9xRMKKmrvABBZyV4CJi8Lb9baDvuBbN34tHH3JWnN56QkEih6Y2Wahiy",
  "key17": "24qB4YfVjFzUpbueToqwKBakn7cq9dJmDA6FbAShN7J6hdZ3gB5gb1fJWwQWjnUSwCcENQwtPd28YJ5Bu1zucdWq",
  "key18": "5PjQH4vpgxLvbgPfKX7YxL2YKmMu1kveNSiXWekpGJyKEM88baudMkHZtjPUpYBXT7tJtmRmX3jUySzBXNyvcGd7",
  "key19": "2xHKx9YQSJxkdkco9f4MX7cdsyi3JPkTPtAiJy6F939r4xNBGGyDideey2XvTYY8GF7r8PT32DJzLAhrujVAJjVx",
  "key20": "3Y1TVqbahBQvLdYVsRrmKtbjeKDsJPMu9CcPZZKcVZxs1avnVfbSpUFfBARCWR3DHdrrnuG3tYr66foFPEpoR9eR",
  "key21": "66CoqHTkwtDhpY35FMP38DJeEWsTUuoLUyFakmYyGDrLhW73q8Et6AEb8e2K93ytHoEgg36JUDcAsvErLPhdFMJH",
  "key22": "4V1Xv7hmtZnphH5zUmzpbqqutKN9QU1ZtCd2Lppr1LVxEztibCmofU2Hqz11sMJQ8kDjUirPDcbr6yB7jz8yx8R8",
  "key23": "4TNwmSVuQRASbKY5t4SR1ioXa2sWhhpnBEzhzgfT3sqWhsF2NJZjFy6wLn2TKSu7QLSnQfJb72RLQ5WCNeeAFhWg",
  "key24": "5RLcHUetoLHVGQdrcYKYnrU9pR9xahVUH3vGtp91ULFfkeHAnmS4avahZzQnLw2rFieAu3Zq93KHWf2ef7GF7Ktj",
  "key25": "4sec2pbyUdZNRYjfFknBYV9pJyoDBudAq7E8fXqhrSu5p4qJgvTU5NK1rg4euu5sNjvAxG2G3gWgezQj9xvttRo5",
  "key26": "5J7MobXcCrejpPgbyeNnwjrtbhK43F6x797VJNxt9BmAt1DU8TpsTdk1PuH7im6fw9hKszy8x3GZ5E7qbmextQYt",
  "key27": "3UMrRvJbrVu6rxqHDgakCvGhBNKmU7oCFpKTqgQDi9qZ6n7LBZRfS7WbfbwFHxmhgeJGnuGVb9yyoJn3gbrvnDb3",
  "key28": "bktu2TUxtHNUcYonHLRbJRQVRTmT8mtBnsoC4H8yYk5gfFTsbzhCQMwxTmZGp49gqDahuuQ4YMFahj3bKcV6dad",
  "key29": "2yp1Z9FzKVCy1A3Q1Bkwz2ZDvT8d5DtoSifzrdhkJXKw2SKS2HNz3hFYhM4mmVME9zm95H6RH8ZKGqqB25wLgVqk",
  "key30": "4FGCiTQU483fJytT8vzZEFV5pcpcMmC3sP4Uyam5F689gbNC4D7Jsyzbwm87KFvVCnGVr6ptGVhu1uAezn87x444",
  "key31": "5WpryQy9Bf9UGo4LvoVKgvXrtAF1Lq4DuR2VYAtU16mdKG6k3q5hTyo2XgLkJcBsPP3nJGWfaC6mBB4ZS3Jcc68A",
  "key32": "5AGBD7xxPbgn5EaxSH3Yjur5dgzzRvuM1Pijcg4ddx2yaERQhx9HoM6kQy7s16iUQUgNaAggfQp6LpBaY7VHHJ1u",
  "key33": "5Bmtcx8e5oV7jUbB4ZT2dxU6mQ8PXdEazRZeP85VSCGUUkWQVq2xUFhKW61nE8Kw5Tn8CMArMdMbr3CeL47RtbZW",
  "key34": "3HKqf6hDxYS1KqP6WVHJQ89Pf7HNZVtUevstdK775MiBxpQUNMYDz5suAaPujZEaTU1CeDbnRyouzdhn9iiqJpyT",
  "key35": "32knyZv8wbhShMqGAGdbdqQ2QunV8qbYpRzG6zyHyfaLpiwEgmQJfYk6GBZQ3iHeoWWxJsGmR3CqXHMtoTiFM1w2"
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
