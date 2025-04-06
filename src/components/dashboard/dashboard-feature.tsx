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
    "22ojkCCs31MWA9Y6Tzk9gbWsmswVEoVw6uLpA8wvQctyepiSdPkYWtXEeAgb9SQxqRmogp93RRbHrSdkAYrxGJ8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vRDTDhkg8pqj6owJM3LeaUxVqj2WXTCgGGDUz6gWPbzAmQVzWZwUiexRALLG1qPWxk6H85WP8V8cWeirZ3gra7T",
  "key1": "mJ9AkUruHm5E57zeAN94QKwqJNHrL7sr6zMH2bBrAqNogbUQeSCcPbSfFdGzMJ6vPyJCmBy37gFetuUsVGe1Vbw",
  "key2": "41vQSunjufvh6NKshfwHxsfoz8MTeDTohBKeszm42CraPb5zCNuwtGXjDNKhcBWY28ib5jU8HEwMDt4Vg7rGwWcg",
  "key3": "kRw9oxpjaTaN4r75G3Ho4GwMw7p6ScnnHdqn3JqAsQSCz7fi8oyZEXKr1BBo5ZsAQdSrLB4R6rJeqqaZN64T8Eh",
  "key4": "rNNAbzddhRN8pRrddr36D5bUgyhbr9WWhG4ceKFvaYmqQ5uF6DiSzSfNUJE9bK8haoVPUnRmSrmDi4jFB1Ht8PF",
  "key5": "3m8nb5wFoEtUGb5UspkpmTSxV146nBiJkHq4LgBgN8z95hydJg8X1CbWPkB1jN1eMHcsuiDLieJXukLcCmBysnqN",
  "key6": "4Kez52kw86TJQwEvtFu7yZrQq2J2BHgVzAegoCn6rW3rYKumPgS7gpGuyf2DzHJcjFYuCaqQ9x89Ao66YqjXkK1h",
  "key7": "5yKa5QHysm1EakMJa1j4vkJ7cuwAzCWJowFvYN9kDQgftfrePJQuoGAPMxudAfnpW1huQyaQ8MHiNgCgRCG9cGup",
  "key8": "2yH6HSpgLYNcqTD23SzeEmdran4LsfGj2GSUquhkxrWCFbmFL8WnqAtaBvMYzwHUKssdsp5eignrSfRLwitrCq5P",
  "key9": "2nwT1ArejraYF8gPmhhqW97Sq6WxucBzCv1xJgJBz8cp8M1rh3Hum7crBH6sa5FQMw2bPY1nJazsj94sPuK5gU6a",
  "key10": "45hZRkj6V1Q3AdLbVBRZpspv6nmSFPrm18ABoPWoaragvHLvrPnUUZQRq4zZ88zKyGCMr8tNS9XrEQV5WRFTB7z6",
  "key11": "RXPfTJSVjDyMxzVdfBZYvustBmjztsTuPm1B82kFWxhA83egQSt9xXtQD4QkwmeCN2s5NgRTwSLuxs7R6o2pLr4",
  "key12": "5pw4mhG8EP9EWgfVmAiubxfFznUddqo7HQYse422wKpoL4JoLzvgqrkmckGSAVwQPd6H3zT4tcNq2mCJeWqgpaP6",
  "key13": "627pK8t5DtaW9xTCVSpHwwU7a958Eb1sxkYWVzB6Jc5m5u36ciNUk2wCa2BV1MpTBGuynqjDQHQxGddjmPecLm1E",
  "key14": "3wSM4aqP58mZWNovSHKQsQ8X5KDZxhhsJvmzD4f6SyG2WLg6gB9uf4XdFvXTfuLoUog2ACPhm6LRE9TD4e6i7uuZ",
  "key15": "2aEDrAJoGYzQL82V5ebWQfmN7NpUY1sKVidys8DTnkvdKfZS3WQ9TLAQn4BLn6pE7Lc74HmdaVyb5Hby5wVuc3Mg",
  "key16": "2UZpRy1uoLc8MQE8avEVJaJ3nmKt8kkTEq6gWiv6bjGvoWyV1LWvWVhPcJ1nWaj5RuAeUr4jAKsjpmAmhfAjbixU",
  "key17": "3tCUwsHtmisnvfZ7gwRMVhWyYUJY7C3ejovkSFkdMH1tNTLUTfZ7EB3hYMHGYeCBr5BbcK3nUYkzJm8h3UXczGAQ",
  "key18": "5DPN8pDpUiqsJQvnEfBgLBvzvLDhA9SBkECVNVZJ1TGGRu8cXaj4GtZvuWsU9gSfTE5YSaLyeWqe6d4h13hfTLvr",
  "key19": "eFX411AnPdj2CcEehpmKXBNN7rGEtwmZvAqq6Yhk751g8tLgfJFvxcGHz8i1cYve98QekeHuvtrHnpVs1QMoS1j",
  "key20": "58n9XD2rQKC6Fgrn3jVnciEibg9ZbnecsN1zvsY6yF1oD7RvZ6NUi56H5VonRXK4QqZXfuZ6KAHE46VENfDjEnW9",
  "key21": "2XavLANb4wav8uZhckoWYxRQinUgXBo1HmQhr2Fw5VNMnJAy6A8hU78ZbFLPxuUr4b33nVfefwusNAfDPaTZVv81",
  "key22": "2Ufqdm7jTQC3F7aaNNgcDQ2Rj1KEKbNz8roNj5YRxbUB6WZU4B6L4saWpNxJ2jT5TFDnim2Emx5Wpzh2KxnA7Bg3",
  "key23": "KkF4iQkR2ucZ9iBGhUCfLRkwfsXwXzCMXpB3dU1QWAwPWmsCN3LknPwkR3rPLWhJWhff4n7wyXwAnJjp8rPZdhr",
  "key24": "46y1trgs1hC47jhQaWctJurYMp2ztes7Umm3ocBm8DKD7QMpFjaV5LKqN2Nh49L5TdJUNgqamCaMMram8qm8zJuT",
  "key25": "3uuMzFvmCHfAwHeu3o8wesULPjFqfZFdTF77E12ijUBejzsvDBaPtdk9sfjBMTDF6JtLXAHJYtxWWN1i57PTj4yJ",
  "key26": "5PWWa1jMThTSHEBjfFucj74ox436CrDbnifad4CrMtCskLfEPcJzwyx4VgKHCYtGb3avc7wjat6LwS4jJm1AWYoM",
  "key27": "2SJDuvH4uDqgq7FkkjkfHzzLYdgynqfZi9B4pacjPEz7bkkEQpE1YyaF4QhpSYdsKrtS2vWjo2fD8DVChmyWwcU8",
  "key28": "5zP3qpjYBy6pGVyub5CJvmjkDDvV6p2QvfkRThKTL4r7WTiXNBqyfx7fer567BYA9mkdiFNKKboQPsKNpCesfr7n",
  "key29": "2A7PWi4hAT64CjmTj876XFowrAqH7Rx6ptxagVe9UbMx9tFChVrnwDfMcFVKabgHxdLPaJx44bkuX8FqMkFa9Rgx",
  "key30": "5QUcShHRjScqjQKEqrYHw2KpPaMe57bPdJquxos6jnaeukXkBqjCrK3kzcCUWKfzY6PyK3XcVERtFmgfz2jaySR7",
  "key31": "5UZNWXgjL8CWo3moz8BXtCpYZE8yrW9Tu5FfqvrWBs8N7AFHAKbVr1tN4wxrFA3S7ifxXzzZ2fG56uPSSpazZVX9",
  "key32": "9vVGdUz9Q5DsiLjgTvpsc5SD4HjAeuTT4BLLzmTGKiJC3TCa89KeZFccFWHhXgM3StTxG8WdXM8sWAAMbsRB8eq",
  "key33": "5kAdtMJY4YqUy84DVfUYYDhdzRBSZfxqefP6Ld1j2k2p8kzCahZaK9ynNUECt3xC5smipNKwrun2Ubmf7exGBazy"
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
