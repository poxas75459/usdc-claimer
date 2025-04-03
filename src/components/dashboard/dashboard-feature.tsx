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
    "2GjS9iHt6N91Mn64Sc4ndrmxj7bn5yhhRB25KftUnneka3pkbE98sM51yvwHUqLGPTCdbNYnwNzcewo6824mcLzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRrYfbLJMkni98c5KnKKuHLZYuRwqCsE7V2TTRbzHiJjh2FhTfscFSDTy2ZCWPMVySgcE3tiBkSgnGpYStdokQY",
  "key1": "S5Qvtyz5friqQw5BScACaJ348usrSSHbEAVWR11QFD8dte1TAEahtiwp7rEaNmkgUvk3FkhzA8VpMFB1ZowePpp",
  "key2": "mMbD2xMb2LazPT3rkuxQh8M3M8FNeCxpk8WCASd2env4QNpnMufTb3rwfWa9SB5vZiEd98uDf9FH8xRSYBe2VTQ",
  "key3": "4BXPtVSa6C4jkbfnc4NNo2YDNXwrsT2okN5DEA56JYYkp5oUhzwv9MuREw7LhRKYMuywF1444xHaTUywaZ2BpePc",
  "key4": "2JtbiHCMDNmYbJw2nb8PuKmVtW8iraQK7vnGNCwyGAfjUMH5S5k6496MaCSeGjkbvVFZcCaZuTpXyVMAaTMMi3p7",
  "key5": "3SPQPjhCt8ARM8iZKokV9xcrtL9cWWiyaMfnhdfLJaR7AY5ywxrL7iGcKRsdZEYiyMG9wiaCoH2jvad5kkuB2jCT",
  "key6": "48kmTsy4xxmgeyRF8aUvk9S3nZ5gWGXqiNwed36H7CqTzTgfi8zKkr3nUNehVEFyZwbwy4VihUiF6zdQEYYXTCB",
  "key7": "4nUnmrC2UqGksFBajub93jMgWx7ffGMYWxkfhPd1bZpyaenLrsn9cjZGv2Wa6NhJ8nfRHT1Vhn9KvkE6E2zPNV65",
  "key8": "3YpUmNo7NZEmnn2C7VVxtrz2oqEeovWvWSAUV4KMVhH86XhFoyaq9p64D47JVTTKuPeUuNYznYBc2NLZ1vN3Mjc",
  "key9": "2yELEJuAh51cBjkHTdsMEwau1DpFSQx9WT66tyXmN2x8UXq86pxMrjjwTTKTZPFRp8EswMKtHwsbPFkfMyQtGzgy",
  "key10": "Ur9fHWVa3GNXMU3VXesei48bHaM1FG5n2Jm7Z58ajH1738jALEzerNNKNYQtKjd9w2S3ZV6h6GDUUft8vWQi2Bn",
  "key11": "4zYgM6ipabd81NCY4YSiLRbWZLNvvVipfsZJoze3NHyTWe48bzbaowgHPCR7uccBNdFqxAQeM9nPggDStDg35ekM",
  "key12": "2TG6QzKusLNjWtPu3jQVyExV4SJt2K7ZZsQDGQDgsVJCMMuA2m2BhFZV8uW6QDFtvWv23FSuxBqEvAy6GSsCHudf",
  "key13": "4EpuXvHCXKLzvqdr4m5q1PXoCLZhBvViRyz5YQCPma5P4qpyBayQwKj2QbzGZZrcYSn99nuEL19sYNDfigixu97r",
  "key14": "aVxAeN2GHsLCjNmjhQZ3cNpQ7uhmev7NiQuEykvsHL5cbRqbkpr7j1Nttm9yo2qZN5Dd2SCox6NUXRndW9mBmFc",
  "key15": "58ayXYik9w52CNjH2736p6MkXZoTR5ZrEQ4tQNwqzNLutrL8Nac7rJhjBEu3j1fNSWtKxckhaND3uN7bLWhMXh9p",
  "key16": "41qdKYAAwNcpGDb4GdvfwKn2nn63so8iCwASJKV3fzC5EQfZ8qgF6Lg3BJ4Mz99Hq46VKPK2mWJwsxbxz2njV6qT",
  "key17": "5Z3TM4hidAAiMZim65KhqmKRJv4i4hNjMUsdpAcSY3iB8crwnvnhSp4YtqoXeG4G2uJp6gfjKMx7xJP67RcUsDZx",
  "key18": "Pg6fMnHPjRWThAN5Ku7QFZmQsoDFRFAJR89UYp2WPEm1FG8sGmUcgH1sobec4EtJqaN4ntpXsk8cLPYWc4dbCaE",
  "key19": "23S54HXmCa16eWfPSGdj7go7WJHpjrYiLSfe6jGReFvMgoji1GaAxUZF2uSJg95gkTYjd6RmtGsdT63xj6qauY2K",
  "key20": "5UBneKPbbU7qYeaCRvR72FPNEbiB5bYKggV7fUKKMoKoDNyAmNqR2dVG722czENyaLsQbEVy6wVi7xtePs8Kv75r",
  "key21": "HHeuFARYKE6rmwcg2epnZLfzz2pazWJfFZnZCGcwSdAnGJ5RRZ8vwk7CL9duE5z4xVJrSLXmn5cg1rDG3vxmiwJ",
  "key22": "B2R17SZX3oy2KS1orNEMN2gL73FZAjKEivxE4bZXh74Vh8dzqWqhxVNj2oiVVVKFjcVvrjC3tzHDmkrNzD7finZ",
  "key23": "2FmqFQp9BJbfoQ1FXbpWobRmXfwbBWHRJhFfMtBALPXSfaquxnWoF64yMDVdLX8VU4UuGrkoHw7jb8ZhnFxpGC4N",
  "key24": "vVzuVqXLexB1o25Ri7udsrB2SZuxQuahoXddXGxQLXSXECtdiD6ZwffPti38pL71GBQzgr5gxA8vE7RfuXfoP2D",
  "key25": "4pA51w2T3wLYrw5Ad5wu5XPSoikfdWkk2ECK63C7CFXGBegVKiBe6iYYUhYY53z1qqAEZjgbe3VnvydViP9G1PSh",
  "key26": "65HH499ecyvSs2Smhh9NVuRi3YNpuNqBoTdCHMbU511vS3T2sqN1L23Y2yTnvHZqvd8y5HrwTgqr8gMbosSVspWA",
  "key27": "2vsqLNHHe4NvBC17hY9D5k9UXS6VqMPgpxfoiipBPgkcF9jmNiRxZJMLmGr2DQPG6tkKnFXQkCaj1iRhkk4r4LYy",
  "key28": "21DuozvvY1GBjLxvueVRs3WPXFDGVYyquDJxJCzZ9pWu6ueJsNPYKtYr9K6x5UafpJJ9zAFYSfG9udx2N8z4aguQ",
  "key29": "4LaSW785uLQin1yYgqUtJcepMxA7zsa9nqSwZkejpmKx7didZPBjNRn5KTa2q8KAN6LvVKWbtRSUBZxQ8r8C24W6",
  "key30": "3DFKotdFwmBJomwstrzQ4sC7kYvJbbvxGPHHusf6qbfAUM8SUai5phwr2212VuEAkeYSqN6jkfK1ZEnWtJamSWcq"
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
