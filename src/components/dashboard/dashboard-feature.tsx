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
    "3hq7tJB1RUi5tDiVRapfic7hWRc3X5ty6riqWcZgAsftrwEJc6s7zgn4EY1bCF3iLMWft5nTEpSrwx47jW5R2h7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGR4jmNYMMk1wBHdTToKUChvZuN9vdGdXUoJSZUuAnMoLqCHZRhctad1yU1w9ztKe2JU5VbhNd8W3w9yKhUuHxF",
  "key1": "2cSiNV9XDWzhs1WKJpHeYxeqYTpFsfh2Ax1jDFHLzJ1fPbCd5Df8spaK5XN37CW8u8ozmQPvv7kkc6cy3aaqivoD",
  "key2": "4beCkpTX9ysrV3CE2AKbHmbLPx5xmGLkvUkr4h3GCXjWKk9dUvYzyY78ovo8o5eowQwniia614uTK251mLGnF4Pg",
  "key3": "5UMPu4ZKmUfQF23zRhHyc8raywz2jknFDmxw81p7HK5jgkqHBQzvvZyvboayu2FSVHwq3vmL4o4zwBV85iZLHZMU",
  "key4": "3dUT7EhWYD1mPUet7gczfuqsyPfgYeQwBFiK1ogohBpPE1LvPWiD8DmZw2aeCpcWXdAKgS2je6nEzNbQi6pvoWBX",
  "key5": "36F8ouRg92MnF3sL2QwaN4d6xyZDAr97SZpCcCrKLVsUrquevq5vtc1DnFYWN8AFUqnaimJykAew649AoMptRSaH",
  "key6": "4cWLQxnNyUuoM5JrCTYsPp3XeJDVH2cmYKJA1T95mZ7TuwvB7M21GbqAztm7ZyyTA28ebSZDNPPnMrYcq5sHKB7n",
  "key7": "2XXaTfcjibCPtLmhniRJrhb4BaL9fJmxgeGeeQg8S9nkgBuXQ3au9vra3bt1zFK4yh5nem2YEQZKQwrS5uPJh41H",
  "key8": "5KJQgsveGP4xixijxafJqgUx1YpK9kKkV2wU7AYcvoiFsmRMYkDGhcCuAaNMNyuqh7jM3aerfuJNE5PREjMw4YF8",
  "key9": "4VeRVGh91ahmcgfcgzrNP1FJYJoDrUZ8M14GKKiqe6tMcjRJAnEdq9igY2rdu94s9t5NsoeFMuG3WTsdpy6N1q61",
  "key10": "22ScT5auRbW3FMxrv6v1nM9CJu8AnXgYRpvVB7z2Vmed91iXHo3JEoSJipZVZV9rsP1QSaAqw7AsQXcSYwc3nAPw",
  "key11": "2kKy3EcWPcDFKZJnFw22ApBGDaeHcxknrjCh8tE1qAJmRRfRjMiVVzpfZJTcUJQtZuriswFESi5acyxs7A7u4tyj",
  "key12": "4kBv3hRg2zU42W5TJFyZReETiPuZjkgNCjTVYtXYq1L4qKHrQKKi6GsJaW6K3Vkimp1VwrEKcj54gM2E9dLraVsB",
  "key13": "4shUN3SpKekghcF7wtfP1nsNnee8JWoaZ4ggZp2nK2jzcurGwh6NH52A4k9jgTLrQbYQeq7n9zfufk6Vmv4GS4G6",
  "key14": "2kYcvxGsrTV12e5FtCzQB2dbD16yGrX7mgMFgp9MiXcyYLPoZm6eUy21NHQMvHUYb79FqkHxyuFPejyTkGRidNP9",
  "key15": "3vwUdjbmmbB4La9B959UyrEhPqhhSbqrhri6Sa2ZQGxJz2iL2qVGPztfEubq95p3BTB3zxDcreoxA44uaVr8s9q9",
  "key16": "5tFargfNouYLh8XJA9dKQqM536f9hgSr3hoid6utBABfiiuzTPg3mzRiuokP3QWMDsmpUeT4rqEiNnhJnRzC83fJ",
  "key17": "23NpDU3JPMxcmMu4rPJyBHptZ89yYk8HMH2A63wwTuF5H4FpS3fUP4XqDYAii8bLdRxgsf83LwgAfu1VatyrjnYY",
  "key18": "3cfVZAZCJYPDAUsFeTMN94fsNEv6d8PF8hM9LYL8wpio6eBUdZYBexRUSdbRSBR5GYEJa89nARE7YbqQ1n3WMYro",
  "key19": "2fDJMYN2wNj8CEFrPToNf9TzvhagMPWGpdQXy4RM3Q1pBHzRmkQbtVy1WMv5BzaqxnPEZGLyHWLFjH8xiv1heRp2",
  "key20": "4BgNzZUvEx1cn75trPnL86KDnPz9wy2m7qrYM16a3wMVERWiMgJGUmo5WaYcDzcBPwgeTdE22vJWz8CkzSbg6xae",
  "key21": "26mCX4bknhU936LMfpsqX4CZYrGmuDSZbBse5LQrbpcdfvtr4wUorN4qFCAMMNwwpucFz89FBu4TnDR8DgsHbhE4",
  "key22": "t2r7kR71MJ17Gmy46uZjnf1Rcpq37RYCmcav9GkbQ3VagGrSUq8ZQXLMayVuATnhHqrLXdG6TdtmGX9ZP3xduom",
  "key23": "zfxAKeQ2yu1hswYYidzweD6kBnMxjfxpSomNQBf6Hpgi6mtZ1KeYpZVUWY6RqBsV2r4MQoXykHLtHkZ2SMqAwRj",
  "key24": "36Wy7JTS9ZcSjmtxhiwNZ72KnoTktQdzhY3HsiejnutCAtc9k22J8rN5dL1BQjzf53HCRx6dmZGoXGKJnmahZJSD",
  "key25": "41hnRBrB8v85CCjyHPqDBCsYaMrpxNPKNvX5ox3L3d8kmgdKwr26bndfq3dbKR1tzEfjmjk7nmARUxNwTGnfon7K",
  "key26": "2dcrtEB1XoFdJXwtkHcGJbzCizv3Gp1fXtrhfE2auPZRuZ8VPwYdBkdnqC1eEgrihEkFrecw41fHJRMYsndqHwuH",
  "key27": "A9X1bTstusAJvTGt3iUfyUpPc75FDbaipafUG1m4tkj396j8dQHiXSniF6botVSM65su3ucxfDBMJ1Brrup6NXf",
  "key28": "3HvAkRKfKSjv5dSgetHTkEiJktW8pyYR6xJUqwWHDsF89okSH4p7oanGrFpFeVNL87GR4wRScwkq3NwpBbFjNuga",
  "key29": "2KMo6is9QmoCGUBr4fv6C95HTFTnvvGHFR4y2zHyjrdAdPtyKP9AKyWHUmHK1pPYKanX1cTfTV9HertA8NWVd3fk",
  "key30": "63pj2HjNDqnmcFvjAVXSPdDD2G3ZhCtU77NSqmUgTzu2Q52BJz9Jn7gqfWUKD6TquMUBmeJ3WmFGXepvoUo7NmVF",
  "key31": "YPWXQxcC9EFCT2PoZs2zQ7A9FqJTzmXQ3jcNTnC1xGN7XHLRBXJoxt8i8arcEtvV3nYA91n81jXv7oQQ7TFV63H",
  "key32": "vZs7YSnMRjzi64fCkQ4aYqXpHsy1TKGUnJuGcgPTREE57UHexY8tySNtLhrUCTKhJM6xsxmHvDUEGqLNiKYXPx5",
  "key33": "5rX5osHRB3ATLPLKby5kD6YhLka6yANkDzuqxCATfeSBdnEz9doHNvzhp2KvXcop3im5jir7Vjd1aYA4ACMvv4Rk",
  "key34": "3GmNDaMdtgAdb3Me4yUtyuvqUHVP6CF8LoeDHE8muxmGjviZTEg5FUtoPozVj43YeopiSqowokdsT2X6nJYepUNL",
  "key35": "2sSxJjWCdnnfBEpFYhxCEYo5b2px5U9G7ashE5x9wDDWEvBGrL8d2ZCUU1qWqGPFgunUCMHws97dZVqkWkHDjDMz",
  "key36": "2AYr2EBS2f5jaZ6NCsKWFX171Ydg1Bq1X7AArvksi6Ky6zcJ1PMUwB1ucFTVyAi1neK8gD1ANAog2eMUPKzdSQns",
  "key37": "4LgSWXmncRhBR3AJH39RGWqqnCYDKpWfN2tDaL9qJy3WbqRmCokWbYnqmiYbG625qU8VGR67KYVsR8ESY6aLaWbe",
  "key38": "27Kfe2Bn5qkUHXtqtP4RQD3cmLH3Tk7NJrDcepQcYpUY5NtBThULruaRpaHoNR6m12ALQXQ8jfsvNLXQnKBmdu2p",
  "key39": "4KpecyKGXHNmPQFhmjwwd9xu4zeijUnx5YUBJ6mhPe8mvV2zHHpgcPHBzwcwkPtp7z1ih7zeeaN3aWwX7pMNADif",
  "key40": "HwxQA2ae2gTr4XbtqUog4ZuTHRgDzEE5x5zQMg1MJDxr3Y3rvnL3QT5nPBdAGYqdnLuw8hGxsxwtXvxcPU8HkDe",
  "key41": "4TkR58Yvz7d4vy4V8jm273itKYKeqM1Ho1ZjkeHqJKLueT7VYu2zAUNLDD6U64u7tKY5ZvDwGni7xioWhU1Rqzqv",
  "key42": "3gAdjNZD4FmqUxoy6FdfhPiepBHTQtR547RXuLLZxptj67Lyqnps5Kqnf1Bqg3JVvVu1DKXrSMkGRx8wMeUmG1on"
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
