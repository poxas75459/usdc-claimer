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
    "22xwzzqjqns2JDj9wUoYg22Baodf4Zy6MSt4vMFrdn1dceM7Gg3XjHiLZaax1Jf5v8z8wEueFw1TaVG5DYUf4kcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1fE7hqSuk7BCRsF9QNKf9hqnJdngQvSDiaczbFPsFtujhX6795NbHcgmB5XyRbhFEELrCDrdJrZbPhEJAnsXW7",
  "key1": "XBtLfDAdn58N8BQLPqVmVttbqMQEdioToXvpAEbpBQStrs2qFNJpTGeAWkj5PnBqFLVq9D1QXQyoGrUvdSUsKuv",
  "key2": "5WLhTVdjeugoozKLwDiFo1ZE8BJXzQ9Fcyw2vCWReMnbS5raSUyKYD1veCU6t9VbY3xLqpxdGUpdCxpWRidif88C",
  "key3": "5enjvUYxMkFM6vuR2FeHkjKPhL34SD6t5ZvVyYmbvb6V2AoA66bwmDFsx8nbQfm8zdPzHuSeH3NazAGUwdZLtPDU",
  "key4": "5hQq5J6eEk1tJyBcLtkmpmMvasEqj4URrjWX45r6eKq1DL4CfYj292XsKWCSKAxiU8Z7wJhCJmf1MdCrJiydbPij",
  "key5": "4TvicaHxJr9jHFtSTv47v2RToNktQ6sedBZTHzH8f34sEqFLPixyc5dhMbUAGZkF3icsjqUiCThtfirAjTyNyY7x",
  "key6": "4EhPPE3CjpTaokxVtFjJAPEd9N3CGoMuqQJSKhnTYDmwTpfuqBdMf9Not53ss6WP1cLARz5DMufkxgnzaaUfES5S",
  "key7": "4R1woXVFgSR4vbV3C95qEHzgkPsWc5Xp4aTgzkn7HwCUWTcKcwoZCTqFFEb2uFp3HQ5hM4KQ92wafRyF5fUdmP1g",
  "key8": "3MRmLeZuB8cNi6NrDUbBshMN9c8DLbKxHFZ4dSgRRziJtQXzeQZtB8mMncxHNApetHQwP738UkCzsxjgm6Whtyy3",
  "key9": "5nozEBEB5EJrWrjGdQGGbW19bxsgcQLtNjkVh9c9K1BLpoEc617QfCx1qwfBZmueRs9AZxsw5BudkTiXcEMvHbZc",
  "key10": "4JgtbPzEHgNqHtq8XnshNFgUNTpj5MdEe31dcQrQ2PNkkFfn43hiJPMbbgWa1vSFaXgxS3X8Yh2Q8DnCQfu77LFc",
  "key11": "5JsbNX16HfXyU2jqJ9Y6fiHaeh7UA1H8Jh1V5i7zjC8kvVRSGG88HCtjMkNfsG9SsZ4xcV3vmovahPejLMwF8ZeZ",
  "key12": "2rdujneCVLDkzqSkz13H4shqHANcfWTgALaQycy3RJpAZ52N5u9KfW1fQJpAEsodfpKdZbbbde8KjxsoiuVeWUw4",
  "key13": "5cZoJoFyGmBMbu4qY57n6xe4V5vNxr6mKxyzYDSxQUr3HFnNpGXwSgeAXD3AUe7TMxmDQdNu12SWWCNGnpgq4rNv",
  "key14": "37HJ32VhL8yDnHi66ZCzettotndqWnWkrnUmQ6DvqgNhz6LxBEf6tqaovy87F7RWnSPcvg2wH2ng3xXfH19VNBVg",
  "key15": "Gb31rMcS1wagCfPHd4YLhdazEvaHsEYW7qfoqJgV3RApzNwXFAuS1LuLVyZ6bSpQbSMq7CCur1hhobY8DsDZaxX",
  "key16": "2xnpB4nedfhRaZdGKHy2HMS6AJe9MTKu628AALif2wwaMnf3ducmbjYjVh2Yv6PhEN3zTCypYQjmsnXLvMit16Mq",
  "key17": "237MFKDsDNU13FnVYXK2S4rszet9p8PvB22WtvYbGAdBPxuFZB57uD1AbHFD1YHpxa61ABbkeHWcqbrjf8iy3Q1i",
  "key18": "Qwuzbcsm82Qoggaxa8Ps3uCCsvQFu6D3e8opSRNx3aQTA7L3rHuJbxnFH5aGbY8PdH8dSy4TMcBnpTG3ES2zrao",
  "key19": "pZw6aKxb3wxcnsD8jKsUniU3UCCTBQoa8NLK7g6m3AM1y4V6y5A3EUjfBYGUNTWUeF45zEWAeDk943kMfWWvStc",
  "key20": "3rLNAKUtp1BNmbrWx8ka89rUzui555DDBVpBbg6fqCqSgBGV96HusrgGUuFeGdwWhHLrE2UGAQ9WeNSAz61PGmhV",
  "key21": "2EaXqbowZH38dS7oKhUkBTUZQy2Kzu86YiYKY6hQwq42prKpTjLadpW696wtiKFAeQbyY9tNU28KzyQQJC52nSZd",
  "key22": "47oog2NLo4kEpPSpBdya1BXDC4RFFakLNLCKyCSjTYbq4aB3D7uykihGg1AfJ1vmrFoqUBgLXf5g8nXjYiCX2rRJ",
  "key23": "3KDKFbZRvpB7xkqJ2hwz8HD7cKsDTYXMi9JxWWkKkiUZgc1y42k6XnM92yF3FGRmFcu9reXqudEKVuKztf4KyLdD",
  "key24": "2kGYv1Um4SQT9S4gN1WeL5gSi35uC93rQ3S9uawE15WJ8pN1GETrfVAdsY2R1w8dwn5zWYSfGR3pKyX4UW755RwW",
  "key25": "5YS1FPvPLcydm81AYRW74KDmPdUNoRTjUVo8F1ascY7pTfbQdYmh1WZy1rKzWReQCMbuWBdkckh7fH52eRfXbKWT",
  "key26": "N44621gyX8joaDzBrUWF6imEmfksaMtRoiZe684Mg2sFYssxwPfEDRxWRQLMfgj1yRNsdapdV2bVM5cRJv2dret",
  "key27": "2fF1hV1pHeB4NYUdt8yERCo6hZRRXPYMwwhACPGiM6WHqCpjo5PUQBSWRiwtCr5dKH1NNLagPxd748f6gigj4AUb",
  "key28": "4pdYcyPMb5di4A6djhNa9Xf2gxqm4prKPDqfHssRR4AmxqbpC35jyzERoNS1HZB5hh1JsFKAe7BWdcHTcJBZMaFB",
  "key29": "2vbnxY5Bbv9otmcn2JFfKYrjLWL2krgaNW3aRbi7hyFMD8uzUe7fJpYEjUWi5MfdNKEymq7mKk6rmSbgVZ4Az1jj",
  "key30": "5caWerFWeGb9bVHztVhL9LgvREzd8utuDgYcyznRfhHaCRq5KBfgTwkVpBowpiLSuw9wo5VDEHVzCfkAj5muqGFf",
  "key31": "2SkBqPeunT3gvZiMG9CRJ1jQEV7BhiLmLc4qbmya7PHDZ7c6iRg2WBoB6VJfymaSXZa24kEzRV3LcVSzBdpsTvt8",
  "key32": "dsVzzonDvgPqrXEV6m9bxKEwmYns5WJJ1gUWuddafJ87nByycPaSXcQpy7Ns387MFr1dS7NyTvvWi8dHfJrfWjt",
  "key33": "4VtDzNcqAeeJjpjbjiLqmwPMSiNqWcVGwejRZv15XfxFPAaFRuJGye6B5sgsxi6aRDn53cMkKoQr2huCzMHvTgnW",
  "key34": "5u6Cy6u3zv7swbX76cFAfx5LYrADsy8cxB2QKqEwWwo9Y4KK2ZgHkeesH4ogTDvhKjLNvHBPNeG2MntUodc9JsKo",
  "key35": "5yptYrRFv448SpCGuAwTq7Wfxh6HvWbZZZsT1XE3ZxempAHRdsECHvmHgsAtL6s39EyZoWnWDRAdoyuYxb4YzbJ7",
  "key36": "3yPyfmupF23ipb2Dcyp48xoyPPjzWhALvnfdDsBuq9mtTfeETaYVX7WA4G3rEAmbLYQQqwq1Pvb5374gaKU9egZk"
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
