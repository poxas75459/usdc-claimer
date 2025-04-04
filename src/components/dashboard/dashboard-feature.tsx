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
    "YXDoJCsC7bbLbDp5SMfuxXgJ68CuSntx37AsWLnrm5WEvXv1VKUN4rkR2W9MyPtG4n1YCV2v7Fnz7N7fm8DN6vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXtSc92wQckXbARR9NuQ7CP1ZDfcRQemdRMhxJ61nkZ6jaUbyqAAZs1QHWNjr9UzGu2Lnqnf9f7DJg4a5yDA1e",
  "key1": "3DKyEksgXMxQjK7qTxrVAuKAVsY3pvUpDHa1ogYzDYVK8eCSjWKcm8PZ7GkkVmhpSH8tiZ8CTXCRYSKwT5GRG4Zi",
  "key2": "4y1GJKPiouEknBog8Smdww6HLCZz6UvXecpAHVrjWDgok8dh1L74ZKkpWvudSVqc8ujzKyoAgtEbCGca9GRTufyh",
  "key3": "5h1Ttx1UqoYSbnstXoKwrFrUdErVLxCWRb5PezXeVFo4dNfghPnnbmSd2ygwoRmjrvZWTvK5jia49giFTR58M7wJ",
  "key4": "5BPTKzb9SeTULtHJhk7GDEEJfd7WDrH4hasDj6Jg1u4hdKuGNG9MaTCPEZnxRJtiKEhS3cybuttbJiDKacp5DCwc",
  "key5": "48Kwi5JEMRoHBHYcsHy1X49pi74orjqGDcjDCDz66g6D7t3UdzSQfTW64QUGbR3H3jdiHMMnJhriWRwhsfCPyCUq",
  "key6": "WqZ9GGpz6Vu2AcJ2K7XFFhzPfDXwZKCWA59NZBWrxXVsJzMUQK5gHqp8djVdAVYPqUbnaTjuJbN2gi7Ptoiq2Kn",
  "key7": "3RyCNpogRc1HBr4ZwSsXEJ8FQxps3btMSQ3XZ6sFmbJMR5vyueimqdxTmXxk74WwzxQh5ysqLSo1YSRJFTmonTJT",
  "key8": "4eG757qvBb6DcmUbWMhU4yWAQYRHVK3TCovtv7XjKGKZvXhyeZxs5fj6SMHrdHyKNhkSbRY1e6cqHZgrcTDS4M7v",
  "key9": "5hCzKjPQvqsfrJpjiZ6hwVgkk9VdXxJRQXaLtiS3ZKKxMhCfmeRAPGkPkdhu4uf7f8H62CQsewgrHw2fxPWKEVQg",
  "key10": "RCH6WLoBY6Qc5M8cieQXexaMJeBFfdZ55KuhJiMfrdaFQnjRUmrSVkqBR94TY4aUhRs5oDdH83DyDC4R4XcuxWv",
  "key11": "3Szeev3sZagbp3nv3wSQdSuG57jr9z6sAxD8kFGz4MN8TQhvuBRGW5cQ6JP7kCv5NfSi6GJdkbwhaQZQmbHQeZet",
  "key12": "4H26esqHySEWvA3vKWzV7EmFNMUwJ2y76DZnfayTSRuDdScFdvRsaaM6rQfqLTFgNvzGuKUVuyvBnTg5gqQ6GWu6",
  "key13": "4yv5YdZv27HALCtCb5jCkuyZJp7gYjepxnMPCHY8TdPCnuTUhznJhx2P1YmUC1CwA9bt4dEua6gtKWSYwYVTCmqH",
  "key14": "ByyknHAqTBDKTTLykEB3EF8fhn4A2D7kEcy1Vw7PyrknHHDqsuCxnmN3FwpioVftsN3mUZPR39bwHpC6eDGssbF",
  "key15": "5iLBSiDkLQDYobW9tEYrKdJfQLHsxX28RKQFYKc1Ugtq5E2pWRA88cZbTj1BX2ubcjbYwzXVexRTzPVVU4z2oBsn",
  "key16": "334p77JmCywfffJY3uFRPtBpG8SsQBfrTgz6858QJsJvgHjKFZSLY5jWpTsXVGyzpR8YcyBYLJNjifgSDkVPbGzK",
  "key17": "2yVicQNS5bKd45hCR4qGJ9xcxgvm9nHeiSGxZ3iwrhcnX1RJ7VChtdw8iD913Uyy6vgQL49WAd7U4YQBGE4fyzkE",
  "key18": "4qRQUQ9iSmtZ6CShQMq5qrSy8F2G5Bs3DBHoaKLwjfpSfjEqfxbrQdZd2fAjTEZXY6YLAyPYLQqjaAJ8umKbFP1H",
  "key19": "3Zge4UrEebsVcrFzbcAKDbvJetbGiK18z7UXCxeGwTree4dqLWopzMNHcLGBmzrVfZonoDgTAJDbzQyawjMcQ5bd",
  "key20": "5F6JSNvq4rvQ5jZcbnKpqBTpfqF5Ds9QCD3bm8GHBTy86nudQQJBAXqXtJjpDhPFT6S2VLzfkigHyc8xPiELUdjv",
  "key21": "PBZ3unciDxFuuFbKNeJxooaLDLf2aMzmtPEWDvYTii7GjG37y4DkkN8zsKxcWUF2uoxKMNs3mf8Qzwf7w47nmky",
  "key22": "5HXePjVE2BQ3rhUb8Xn5uLRqKfjTFEvExykhfYJ5sLguoL9exeQyMv9czY18sfT5tfTcnosW5fo42BTyDsFHA2YX",
  "key23": "2KFcPsBJEfjDPU1cU82CqUB8TcrKZH332CKTK1DjY7MuhkXcDKPyneAmh8FDkQn8mszuVUeuCsoWJw5AxoShdJLc",
  "key24": "21tbPfJkEidAV9MQhW1LBPdZ6MigdbngYCHpuKdijUjUW6DeVaM94srU6iVB8UwvK758S8eEy5AQPk2xUBUC8WnF",
  "key25": "2Rd5tnsMb3ioMVpSyLBTwLf2nfiA2Mx5ZZB2RLzCVU36SQAqJD72a24eUXR7iTxQa5BJu8ursf8CX7rnBpoo7UtC",
  "key26": "3M5iJSB85ooRefwPhHmFzmUqDmU59ev1avLJiguz4XTduAdcL55MwdM2V96uiZ7Y32a4aEeztuLHXbtJLxK34Uac",
  "key27": "24D8QwND3FYqT8QLwk5UaTTfw26gJJbZ6toQMm7gtYdH72E2VaZ99Gsiv2cSyyu7pgfmHHC1eHkMJ5gzEeTr24zR",
  "key28": "4fFe4U2F83gHrJriKq7YAAXBFY3isxNZvwDSeackLL1RQop32Kw3RQE5QxQzb4nyZie8Ct1HDKnVNUZYXmsG8SGq",
  "key29": "2BaPMMowhxPQ9eb9YKgc9MzJfAzUVEBjYRypN6TLqZ6KqtS4p34RJT6TUvyUnibSmFuygdpTRautQN1SeAa4zrdj",
  "key30": "2b8k3wTyKysuPA7obJBCs6fzn3WWN2nyqjYdVCecMzsvmT1yAmr1jRAxrw2Po6NpwZCHF841rQLvYguKXn1EC1Gn",
  "key31": "5Bv6n3d6MGNMFmaL1U68Ah6jbMwBQoDt9cburkzmuE33afrcQdYdG8Bm9HVvUUbDXgbbxUST9ep6LpLTENHLGExY",
  "key32": "38dPCehYuSRX7kNwjjKdJMwwPdLyaZvZDPHFkqgZigk3dXfqfXLLMR4V6JguTwJVtpRQwngtk78g4nYeyBuW8McK",
  "key33": "284aFdBMAYdEZ5apWkrFHAThwe7W3Qxysz8L7qxr1tuXcQfS6sfqu2PGfuhoSs6Hb6Kivnf4HX2Jyb7ubpr7QzMU",
  "key34": "2MVNoCRc93AhtUoXNagFkfQSHiDgTDwYLVwxhh9GKGZMsqNqEmg5NUrWKDypEgqbL8uMGxCqwST4mactwE6o34Lq",
  "key35": "5fULT6mzUbQ74o822Nt7BW1AmqkeutCuaHDMC2PTYUC31cNrF4LB4Z6m2ar7uQFnK7dswUFJdXKSconan1mGJdvQ",
  "key36": "3MGQdW4Tn3LP3U16wHwK1f17if1JpbN3Cd8ULgnYrcuwhn56AfZtzidRc8BzNwXeGept6PqiuSRmrxGJAYHkS1AV",
  "key37": "2Bnja61LvsvEHSW2k34FuPZLufTBGtBAcVpo1qHqLYk7CBTQHsF3oKjrGtCWyojAe4eKkpekXA1UnMN4g3RGQyDU",
  "key38": "4daMhMD24HG4e8sVCWMU7XKXQdDjg9VTM6dS6vv8R5XuVy9f5ZqbLcLewKwcGTdnc6JArEoSymbfzCUFW2Z6cCVr"
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
