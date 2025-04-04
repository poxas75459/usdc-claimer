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
    "bpHrNGKVb3xtS2RQ7xBQ1UtpA8mBGfgEnrBEsWqjFRZvVCTsAhckzHdU4LN75p1cZMN5HLLdpSZr7FmeAdiAoK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfFpmQXHrktXkktuiKfL2SaimHrseXTxBV2c9k9eFvcaZ59hUhuYUaRNu6ykfpYAr8UAR1LgguVRfMw8HJ8mVi6",
  "key1": "4pTBSntjgGLE3o1eHMN3HQ1rhWc6VAdJ36RFudBKwFPU8D5nADCbcoirou5Y6bVUsVyKZnPedP47EA43DBAqj4J4",
  "key2": "39dLqDKAVVaAQiegcPigJ4LTA3ivNkBtWQmvZGH3P782HGnqKLTR76itR3yZs6ormtnpxbdaJpkd1GfyhDGQ6Wcs",
  "key3": "Nd46cAGRsLUSKYDtpNqGwerWbHi736Y6aGQER26JTNDtWhCbyiXjZda2otUuhLHmgbCPehFRAHxxKxnjhRB4Zgj",
  "key4": "3LsTxKKap9eUX8jycGBSftxt4BuGiEvHd4rjwGGur5dAUwViWtKsZqdDoGJuAtTpMpQ5qYYDPGFcnjQdNjhvgSem",
  "key5": "5i2phTkDFZKNoNqx2hYAy6S3qbD2GphLudHkQnXhtF5KpMczswtGbHk9GNB1SuWoW5mejzt7mVnrQjw7vguaAeN1",
  "key6": "4xHtGLWJJLsGsZ1T9S1itKYG379neW4mvBXeCAf4Hr5A6QKyQ6xY4FGUR8hPzMiUFhMCHu9nMrDWscyWB5j4emhd",
  "key7": "3yE2RG5oUfuG1VDoAiH2E97XDKKBtLcBFEbaaybYFM2Ug3SCgc94GMPa7rwTM4b92fa2ugrB3M36LqgM8C1zFKCN",
  "key8": "eQZ58TVQ88YF8YSfQ2fzjQB16S6nymM8afz6Qw1KbeVM9Gb8Vxs4E31pQGVqzreZLHmhxF9pHim1pk1sjLStTvj",
  "key9": "3jkhn9ADYaJfL6Qhxnq6w6ma7BHxZzjS13PSUsTezwQRMLHAoWAD6Y3TKhDGhGb4mT5fSnqpgwUXwCABRqcHevqQ",
  "key10": "25akN1TvgfeXWyrugeXkxs41W4g54MFPzFCMjgffJ6eh7eCGkV9CwtDpQxQQ3pGjLexXzitKvUQpKFepYkYyxi1Q",
  "key11": "JVpn7Y6QjcbrapQG33cisBvPZZzdDeZMN94ZB2kLKc33aHLueCM24ckdv4hGCqL9hirYs4RNSkmqZtwRa95Vmpo",
  "key12": "4ivdGDUCxf1mLhsCs6HTLnQuX5hYPQFLM83R9F44efLcMtVvRN1Xy7Qm6hfdxU43DKA8geKdDRfMF2MW52oKfGNv",
  "key13": "NSwV7hd3CtwYpybYfzg5xyEbJB3GeinUbGvAZPxa2fRNeNi1H7vLQZe4ZyP8JsEY5sUCFomPZ9rtpyMWEnosg4A",
  "key14": "4E41LjSkaNV2HZN5whEMn5UXdCs2GcZL5hp4p2jwsytadMWyHrMQKh5Z7DgTEWm9FK9vCwtqeXJGPmTK7orwnH1M",
  "key15": "3pqA629GwWAmEE9yZqPDivKwjefeq9migSEXUeHgeuKUzdmf8bFkThQs9jn6wwUvKQ6UA2A7FzpxYo8BSmndMFx4",
  "key16": "Q5vDnwCULHqR46jYD2MfKFZw66Mh3myMzcCEejrN97536xerGg57kXitEGR6jw13saxf4gi8cG2VcdchYLkE4kP",
  "key17": "42PysmV48N1CfJm8WoE33A5Yzc7YKDv2Lbrb2gnBDiHUZjbkxQUzRAS3mapJ9Tyw8xK3faauhTpaH5atfnM3CfRJ",
  "key18": "5AWt6eCdm9aq5LQFLitxgsRCppJqCSo8uWjNJ1Bbb4pNFTVc49a8webxi15hpdpvN1nxy2CRcQ3hXwEXFyYLcVjP",
  "key19": "3nu7jCaRYj4BGQNABVkvyqThUb98KqnMVkxG4jEnbWDSZ2E7g6SrGSK2o1Rvu9EnxYagPfZinnWT1kmBYRcPyEc6",
  "key20": "3cJGvtPMv7WFBFapzTnkFmb7Mj8pJakByou4nWAdcet1e62R4xoGsa3Fxj5SKxLDpYNsEZdtjjdo8GFqrG1bWkHR",
  "key21": "33nK66pX8AtKCfeh1dV8fsZRCXBRJSJCXtsGc32WEhptoewJjSWMXcdz8HAGXtfcBgoSZC6mLi9EdbqdsWQYE38C",
  "key22": "TZyuSsz1E3gjSX6RGLSCH95SedDWpCYVo1Reeqaa2rn31pTMPtgVagYF2jrNaVMTtarff3fYWKKKdvKyUqrwA7h",
  "key23": "5zSqr3nRZt5yuXT3c2gWEkzumN9SnSH3zd3ELxRuUAQcadAkTq1QuKQq3YzGNrqx4M2PXpYaj5R6ww9EUSgRT9cT",
  "key24": "5y1FngqN8efqf7HD54RMMiv9Vz2VhNDrKNKv3VU3ithmYtNaynLWRC7cEKyVrT2WtZ3TxBTepWLMDHGs2Dda3suv",
  "key25": "4oMcatJ2tMwZcxvaWeAfAJiH496UC5NLwRpWCg5tq9hMHm9mfX5fpEKxkJu6n274bRTvJuyfdCuaiDL8tJB7AQTw",
  "key26": "4AZhpXQeqzqCZL9My28XLyfV1u5DAQaGVn6VuuDEG4xK7SuHpur6K2RSj83E2FGXTf84yNMDCwGg7XrCRd1S63iG",
  "key27": "4Wgtmp26nHSimWvV5v3yZgMFqJyP5bfSSKrk5uLHdwT8FZwSiTC4mgEy1cHAnNrQMn9NdEhSDe3F9mwQ9exq5qow",
  "key28": "4xhmu3XjHrbC5VBsPdUr2YSSefVUCjLwZWJxZBNnJfKKkkaRUEFf6sj8PUjf2UoXntoNUdrm8iesjhKvnqXJrxDp",
  "key29": "3KhgwkDAWRkvnZy2zA9odG6JYeobyby4XYJ99XdH7NhhTkRLfbR8urSZjQh3XqPf1t8K6BTsd3WwgY4kMDqwva4Y",
  "key30": "5975M9cE25WnzcuKNxeCCySrmextirxCvNDjGZB8AG3HA8AT2qq65PUGhmfriocLsK1ApLWbumDbjyihEJNtGRch",
  "key31": "5tZmwgA6t72AE5cSgDbiSsjKvTL5ZZerhgqKPwCB92sYmkiCC9TXEErztjiCbtrdu6dsSCuUEPfUNyYDHYs3PhaT",
  "key32": "52syM3MHbDpbv6Z7aE7w651nd9KYDBipdzhiwEXPoatpW3GNqXzcxj94NpRsEG5U5cf4GgbmrVxpH7Z942dyicmY",
  "key33": "3y16JJ9cDiPZB6VudR1QBKXDfFavgDbZhvZtnnZemcS6ZDvc7WyecuC3HKYYvrWpqLn6BVj93KMiuEs3GURfDA4S",
  "key34": "66NcNVzXGhLxhy7SaLcmC1gZ6ETryBsVE19845mtXu7Kr8c6dguMGVqx7pbNwwF15jHQsUPKmd5vgA9PQW1F1pRZ",
  "key35": "5SY4Gi9kAZvAyBaLbrvyh91GXjBwHjUacVvQWvq7q4F7kWgmpgE59kqb7h2eL56C67t4rejjTFEUVhxkvEZQz5H6",
  "key36": "SDH3vUFVovsSYqyuKvMYxgj4sNUHz8GwA5nvfkaAP8AK6kZVBDpFbTwuuVNwDEcLJZV4oiynBQSPKpnqq779twH",
  "key37": "2nthEvAKfasxUgUfSxssLo6YspA7FFCfaqB2wJUGfC6MdEdWVbJq6L4Hwq7HzXJSAzVWoZyRtR6kYwzHVgLiDSQK",
  "key38": "3WLELhERg1G5VnZSXDiozC1FFDxkTbE23A9JKaen9KCjpocpS4wKqGGyqnjHhbzKDJVK3EEsPzpmnF2d628ytf4A",
  "key39": "3z7yiGv29dib7XwvPKEHtDQvxHvDfCmiRqhNvfmKjK6ZHmWQsYiPgtEuZEwCArTvYY59bvk4NDBrD9Ju7n7TepZH",
  "key40": "3s9vBLp77QHvezaG5CrGdG2XfA8d5TQzD7zMwHsrqrzYVuG17ze53p4v9xE7h1Juh5ubS6zuCfUNqsXcrU297iwK",
  "key41": "2srmHq58ayayiEG8n3AnZAcwQNpPoX1CJdwXoPQfG2bMuJ13uwLkgZjKtaYoBmKWDnUuZzycS7yN2d5humS9y2U7",
  "key42": "2jQNFnGvKMdQdwVHZjxftHbRVrHyDfEYj5pnELtiUAGRsHHJaNCuy5p9y5J8k1QfcDQETZNdQkAPqLfZGUJvktar",
  "key43": "574qSqMrnsPFanLvzHfFq8xieTww3RAQPhJdhGRBq6ML6jCbwZAdrKu1AYGpstjMjW5cv5H6Sc4ByP1EeAyEvhqc",
  "key44": "4ufai5YRA1Gpqq2e5XX61cUi13p4t8WWsuMJFkdouHW3txbjtcVcTn2REPCjG2bMzvAwynggkp9hSDdjnMH7CAvn",
  "key45": "4WN9hGvDsthqnS5NJnJaYkbjAs81UYXfpLXvS4abYRiYsGeEdGLFJTkBkYFi3iBcAbHP5XibcYTw6CbUkfpSchyA",
  "key46": "tRrRiKzvyoV9Y5pYCvKNSxgbGEPGGazB76VBGNvkhKrYU2BfRz5gBUighQbzM4pMrKFkLEsH1UKZ5FM5iAcMRyp",
  "key47": "4Zd1qmR2r8NtFKPm9pTZ539D8NJ7GZ7Qgw1kCBSW987YpDx8HjqesoBW6vnFZwciF7XqUSAKuUgERDgqmRUMMi2x"
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
