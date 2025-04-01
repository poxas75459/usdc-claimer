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
    "3BYvY5vKD6NsVamSf62GF2Ktaqhd55vPqxDrcAhhgpExtDV3TgqhZPQB2DkpWZwcYNkwz2vkJZ8ssNcXgkMeVaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sT1MzzF3Lfs2ZUrzhSe8ZnerxVTgQ2ecAaXhUmwJx7LcFNmjsBAPAivm8YnosgCeMu73D3FuyzhQrKQswJxnYu5",
  "key1": "3vvYWUAUbkz5VdFwR3SSEMoYgzt1bi1jdqLCbWw85SUgLtcrwq4PtQSAwQkZu261pJsDXNB2FytyMSVkzjfumu7i",
  "key2": "65j7syuqEBSA98hXZELZUxTWhHDCRS7hZSsEChpJQRj8M1xwe6UvdjENC9wheXZS6UyTLTzyzFyq5LqJ8VakmUeu",
  "key3": "5UbukVHnMzPFgPK6Fp3Ze1RApVVXTC3vjL9G8TfHFyofx45miZozr3YHftGew38A5bw4Z3urFRJnEVg1ZqxM5Lh",
  "key4": "57xNUmoFwZiWFbwi9oWUMXTcXGAReoo1rHLg1WfErN8bPeQJwJScN5fPGaWBXcBKMNAYhSb7Uj9LNL8LpFtrzZ3h",
  "key5": "5oS1N9PatRjZFZZ1MrYgeKP5A8MhZPrWTPYLwQBzhyfbt8fHoTruTnx9nzEBSfbKYJ7KKsPVP1FPx1Sxnqm4m7hU",
  "key6": "2PjPmh2iF7rfvTSzyynLTsX7fzPWP1goXDEAKfJwA5UEWzqbTEXYWbY2nDgYjngR8H7NCMS9qbLDz78dBymAxigp",
  "key7": "8cQFqJCGxT46ky4dJD8VWkP2SH24SKWaoYT125HbgaFj3cCspBE7R2gRMm6J6Kw7LmeftmD2x5ZZJm82N8X4Vmu",
  "key8": "25heryQj5gZX2bmWch4RUyhVDM4Cqjfh3vu1z3234m4dCTmcQPQnLdBzVPTXEnTcg26BhVmjWsXWa7SDZWEpnzqC",
  "key9": "5rmJ7er8ayy5kRbmKESYmzsp9zuJNLemQmYBvCL84hDkwwazcpHng9ZA6GzcUsRYg7QzbbzGVeQxstDm1zdHWqJv",
  "key10": "5P3uZh8yNJjas4yZe8q5fBM3wBrno3gxZkmM8H7ppdJD8ndh6CWrCUczJ5DD9duRw2TXFxiNNtXAkFvCikLxGC7m",
  "key11": "Jmy6bykurhb9DyxDfFyk7fDtuPWc1Yb6WJbmBitZW9gowgDY7sqVcVKWMmf1Ds4faVViCGGd9B7LyakFn1ugNDu",
  "key12": "3mfN1N6dc5ncW25ExPUog7HxkQeEcF6pvi7t97AK2D7fNdkw91fgWDhyCECk3pHDjR3Q8kpA6A1xmhjGhz9vxfdL",
  "key13": "5GjScKSoTGh9CW9Cqs6e3evfxkdFPSa6LriFFbUcUcVyJACFwYd9hFWWUEDmaSTisqCMBniHYyPAw1X8t1DZJUZ8",
  "key14": "5QBw4YKGxr9npDb8bfBkfcihvY7XHAjkZk1t7ejDER2zRCztVPjGKjWFdaJURCjSob1PJ9jNj9bD8rRe8uGmgqEn",
  "key15": "5WdALiwtW9ABAzHULn1gpDbfFULAh2UDRzfe9sWqnp5D6LgH2BFV79KKuQWe5Ed8wRbDMgi8WcLBT6NX8YENYqBN",
  "key16": "4VNJMQP6NJmyKsqNmkaQLSsRxiLrUVFK6ri6C546HbMs2X8VjXHJYpFoZvvAgR6Apdr4qRgovVGGtvRnGQqKM6dS",
  "key17": "3L82sSscbNiHdsyXUmhBgiEFdcDhgjJdwqmZGdNZezaUeQgKg54X4C6THzbCe6BTmPSnJyCPfg3GRuLZrDcBatwy",
  "key18": "3L72MyyAFFSjEENgv4vhz4xM3wZaTKHmEwF4Wv75XmAwT4Fz2MY2UV8FbVneToyzNzu571AWuvBxByod26D3czmY",
  "key19": "5GbQ4A5A15oWfpLNUWcmSLEFyjmwUSNsJiTHuRja2RpodVWJp54QAU3df8TBcEQUV1KneePwqv7aeyszzfJsjuGJ",
  "key20": "4Hs62YBaiM3NGnTxjLvPqfhHGYSSyJ713X7EkN9XZAe8aq3ZzoC6NqqrodHAkds4mxDSpcZDynMuoPNKhhHRVv5q",
  "key21": "2stNz95VKWfEYvUEc2rooZVmHSwz1iaKjhbcdXF55Prd4Fd7dDmjXiaP6sjF8nB2PQrLwioD9dbASnbPvrPtSWZp",
  "key22": "U7srd9N1zKKtEdAfFeEKFqBQkYjUKsDeB88KPRYdJd3cNpUVgigAAReq3GtWSeFG3ErnUmWyuW2f86tM48j4r4y",
  "key23": "X7De6GNHyACz3t428Nyn6C84C1pcanpXS9Q3cctpjiCGezCrYCMdK74Uha3bn8pVi4fF4kqTozmzaL2vRdju6fK",
  "key24": "5NnWfVCvnVaUhmZFu3h27okNYzg8gP85TQUTuW7EW86HZzWKwv59VmjJkyXnX9DjcxQtrYTrfq5yMDx2v1jyqa4v",
  "key25": "38PZSdFPehUr1rDgp6PvfGieJBqsnNhPBDumeNLcN7JCLPpEBYGc5CLR92tuWKPmJrM98wxWjqHD6jyFhNBBrewn",
  "key26": "3SSGTPjMr6vujq2CJ2AL1wSXTspJA82YY9DjyPQiq33H1W5fotjtpbLAepgBGEKENa1YyRNVZumFrSpu3a3D1xsC",
  "key27": "5TK11Lw7YPRSqmmAqPjuEvScwq8u5QauNCHHnpFn7iJvwpbsFhA7yCe4ooKbRebQ4ydngdN17gHDaRzvNLAqZwTr",
  "key28": "4AfNdbiWqmkazEveSxi3t2STtAWaXGJn87YwJ7QgHCEpfQt14Bf7TRTsqF6ZnJB9cqFb8a4rxDJb2vWipym5P5Lc",
  "key29": "4F6xxWBSaksT8zkdE12nj5bRFRFhv1B8TE6z366aNsfBu2MjFVVG13S2Ai93o4fhfKkm7zGLA8xVubdSUwJf4e8r",
  "key30": "4eTPVai9CXWnFRY6rYGVyv4rYYduGENyMn6bhn14XhBUYEqTwtQaPWaLGJHdKEyTEuWAZfMLDbTsjtrMLXUNM5Hf",
  "key31": "2zYHLHJvHjv6XDnqb2b4sehnTShAWvk16WvfAYpA6dornganTUKSZB6QUX3CFzx1uVgebaodNBhWgsTZxhoXfkWj"
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
