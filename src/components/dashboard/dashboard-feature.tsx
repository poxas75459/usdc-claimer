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
    "2gafXtfMehdWY268KpSpDnWxhq7236yyZDwYxwZBMit2T2xpHUCjbLbu6WnbsapeBcG8ZetWXbPk1HeLS4r8gMfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQ6T1jH28Y4U86E1T1ffYUuX9yqjUbvyoWPjCgPLM2SswgMRQFfszBnCkNdt75foebqBuTq2uJ3EiNyJHvQBsVE",
  "key1": "A2u7RRYya34Ff3J1onrYNU3haYWz4NVH2bE1sTSz5Gjix5mn3fMVQz8ZJktoguJqZfLuskuadruZiHsCSj6URrw",
  "key2": "2TwLJ6N2wiab2vBRgiioDDZFq9XUJehss8v25eJLt4Apwkisf6J43fH165r1taB77N4Jsy2RJS8WnWrtQLgwTbQK",
  "key3": "5t6MLpdjEEXWeBECjCde1gK5YFPJ6vpTWKJTxq2vgkcEPx7utpbwhEMHURGkVrqzWGV7319LLZNu6LFrNLEQKr3C",
  "key4": "51ujHA1wNTPCpAsvVq8evcuLJ3iHxDNAnMbzvqDqfGr3mguSX84sptMDeJchXDhpR6xxin9hdCza5xHrgaat4a7e",
  "key5": "2zMdYq61zumgxMrvPKTN7TrwXWDYUdSd23eSgvtJEuigXchhWFTypp9iKt8eVcwLiPD13Y4jXszCHAqbenX2BDrx",
  "key6": "5zbGmurPM5va5qwdS1iY3WPUusK48ieLbRA7XMpwGbeAkdWtiBBbt7ufAxtp98YbTLAusyby5mTyiKXa5sdtBcE",
  "key7": "2zEw6KMo3BR5BEHcf86mS1rHF3XSRSauVQp3q4dDEHZ1nE6LXwbM4jU2WqVzHhr97sJNnRddQLAt1LF6bKbCzZRd",
  "key8": "2gGfd8KzmZBmUwJGXhwngwgMTXUzDfm8wPJmTi5pBnHr8jYJdthpZDjv9NMiVNYt265Fdkq1SjUD22s29GxnQ3QV",
  "key9": "5gDWbR32LGtmmpzUaw3NwUvv7teVXCbyabEVr5oHUucYE4UvsrjAyTqQHL2roVb5ciP8DVW5zme9TF7GxGzk4Ra7",
  "key10": "4gnoM8UNtQbCrLS1BN9zAX5KEmoBYmivNeaV9X1eL37Kvuas7wKsYtDurV8LP423uk3QAuc2s5cvHtm1bDTpxi7W",
  "key11": "2mcNt5iUpv3Be8hR8YoozubvaDUSH3VcK636xGyaxG6Bh9WhS6pBkGDRkgNg8FoyxNSqQmWQmjvsPcRECJDwdsq1",
  "key12": "2QsXH3aNmWBHsBA9CD2vs9KeG6VoHxubRai38itNq4byTjpeG4vdEgKfg2wVetQA6uZiH45cT1ujfwVSin14uvUz",
  "key13": "5pVh2gfcLfTwofiFXmJt6Pqsp3rWUNea5FT7mQNo6kXaBH1yRMNyKmXMCtrakKPDmNM5q7znZpFqtQ57TsxmN2Je",
  "key14": "ZyLadmkvoVQXVJifiMFvVJQLutZ8PxojpQD7hL2vjxJvVqEXRAEpsb79p84S1JDkFzW34zEQWxwPZbRy5RyDYV4",
  "key15": "5guKMXc1iu1upSnmZukEvAbQXaivK6pXqonv2u94bJrDmHSwJs9yA9QGiwhVViZ7hMjJM3h367AZUo73CQmpoUya",
  "key16": "4imtoCTEtN1Qw6BmyB66GPuqNEG8fXCtgBAEWZMKHieTg7NJAx2exCugUeeZG37kCAJ96AmB1jf6zHzhCBybxvgn",
  "key17": "3qmSPb7KTt5AfZ1JH4eEVkQvEBnYMfSPPUyYbJZzZGen9UCUVXYBRDpvSWtqSAuMf3xTc9YtQey6fi2PwsXHAiHa",
  "key18": "3gmu7URDSvQcPNiF2gdP2uRkb2BHDHYHuPWRUgzQaYeikbZHyo9gFkwJTkB1HuZUDvPpu8U9C8GGitgC6NFq7v8B",
  "key19": "3RkTDBPAcC65akw7hupWbDDiwFQScZM3Ah7mWg23RywKXef9NHw6gEfkrMxQZ7yzQE7W9JhHsFWkpDA37HYqt64V",
  "key20": "2PKcgr9N2hCrcasBgZjeNw4rh9tmNpQRvNLXta79V8BdkQ7j1z178a1Va2Khwkfw3AJoXdgRxjX6GtYU6eFEVFcb",
  "key21": "34gffAmPoEMaWeVRituVHcKU6TRGpU5viEt1cnSe8tBbT7f46iu7Lq2QgihgeW3CtzH2BzXtqpcmbaraCrgyajHU",
  "key22": "V15shEKBHHDcwCCsuCzLF8TrhzhriUMFGvCdQRnRptQHumJ6PycNPuEwM7SZ4gXCJgqFcjkBCFN8svDCAY8LsLg",
  "key23": "5WScSSLzqXG4VSbWKEvgDiwdAksBg8kqg5HQuBfMg1etFZpVbFY52GzcwxrfT3p7jnsqD4jFT4oNrXhedVd8QFif",
  "key24": "FQt18ywAbUvpgjWivWghaWhMFAFa5s3mBbMGWPmDTVkx9ZdqovBKugHbD8VCTQSo46pK3rKzbV1NB3JBrTENr8k",
  "key25": "64CF1gQnLTtJzDBZAFMqQprwp2TUjAg2yKbZ752aEnbaXX9UrVW19bjQcVU9BFNthnWpPBjurPWSctyDtunim3rw",
  "key26": "4YnNUhepTXLTPyxa3fqfmJocxrUFyWxcy7csCeennSe1V22GnvonDR4K26EeEtZnFvyzJ7VWvqfNB261UGXnWVpm",
  "key27": "4d6EQaxBpoWFo173LXVjzwRni99N8W97iKXjzhCA1nAN17XJDprdG2DuQeNqGeyP1NsyJA6gNy244tVgx3GRNUWq",
  "key28": "2TuYSSiqaqZAQabNSDjKJUryzVyfKtafqiRGBDzVBmfgzhCVZUH4iLfx25EWJwV3chh975ZXprPxcnd3Fa5fe2f7",
  "key29": "bUNkQLePpf9KHuFWGnVHk5sVjYFtXTXjMRf7bQMoGDjnGB1C4tp9DZhiXN59o2CX2aV7rjikMNZ9aPbwRzg85oo",
  "key30": "5ELDcMYg6moAbAQRHMDq9Tb52Khe2mQPSYmqCc21XTdfs7HvH55ihV7hMKuJrbMfEyVQqSV1pve3G3VRTh8HKcBK",
  "key31": "4Ejo4hrZR3HySsAneehzXB6BVuqeWX98X2x4htm1NuTiCXxMPe9UJwpZyqE44qE7bqErLmeBgJB8EBkubUuZ89ue",
  "key32": "4iWd7ZAH5oJa93uWXresMEU2QiBevyvC2wEqqHB1dztJd9RkFsXQx3KGXcdt2Azoq5xTauWZqA1TxsVgJqLeWQFN",
  "key33": "sQ7zac4NSHgZMTCesrqf9ojF3DAC7WMpv3VY744muBZ18rtgHF7ztDdZFNAoNmePtRg6pUiynetnH88ofX7ndiD",
  "key34": "3diWdVWuAf4MzfDqPEYy1XfreQ9nJjipaEiVETQXqZJaAtCipprV1GUm5Y4ndk4VnQ9eHc31iumLCRj5r86quyfa",
  "key35": "5Nh4shfmrHwrTrVqfN4M4JhnxfGsm8zE5kuiUhY7R9MqA2VfQ9hUkkmNn91v3fRUKz67haqghpp8hDzdxnHZW24v",
  "key36": "29aqUPN7Eg2HyfwxMMXZJGMfdCpLtKyC6XzdaarAxgMgdxVTVmqJWTrxCuMeVoqMVYV3C7Pt7TGDo6AfNi7NandA",
  "key37": "3pFYu4TcYnf2fVRDyVpqvbtDHudpNNekXen3nxxQvKYpNJtuuJr6CRYF2TDGDNyECMqXmqZBEXAEiXtbwe4B8dW4",
  "key38": "3FoZQcVkbehYRiHfZ3hyMjfykMsdFE3yyB2pKwD24eZhgviyDQHKSfkmTjj2ebH241YuKszGknre3UZFM6EP3W5A",
  "key39": "EuUypSz4ixtZCzCqtF33nW5uEA4A1Yc44FjFzWK8GstqnaYe1dyikTuLG95R6HCNTN4YDKLRH485qjbsYt2gCZE",
  "key40": "4n6HekD7Ce9piL5VDXb4Y1eBuFx4GLQ1ifDrLjJ9fZTNtMW8sRzPKHHLe5x6e4L5RDwPMTUqu3VUTZ4iNTanVeDp"
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
