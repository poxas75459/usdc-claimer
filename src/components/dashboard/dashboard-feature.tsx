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
    "hyzu2rrnydxwHXW9xNsfCzxxRezsTrnckJdFfpfxE8MbNrdUAiBEeMhBDhtQHFGjgiwWbtiCk9SFertCn3Do23g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWzvCHL2tYgzYEpMWLhQsZ9UpkzwX75wK6byc7f83Hk6a5MT71j7WodADnfP6PhFXzdsU7ujYVFKtmZVEcuqTND",
  "key1": "5DgLevRr3GP3bv2DtTQ7kBZpLHTpt2FjMyeHV8HzV6Z8YyVTT8DCcHzBSo7zY5eEb18Ae6UxKaC3zMQEteTsPzCU",
  "key2": "3PA7arqpSRC1Dk83Wg3uMW1qZSqtHn9opfbeYBEDrL4dteBioBJmDkumbRGEBoYoBcZcNxig9qixXSJQsXcSM4vc",
  "key3": "3FMCW7acYkeDFiVxviCJBBwsSkPTBSho35BAS6kJ9Y4zyFEdC3PPqNXn1xC4vwn3YnAnRVmskcMxxL6M4YTfpU33",
  "key4": "4aTSS36Z8PfJV8w3hWtHcx4kzvcrcrUPCfzwYmSoUXc51QY1pvrSsHis3rWN1QSXZpZC7XXSg68ZhZc3bjYN1BGo",
  "key5": "3tmY4iCSw5nz9Gx2MUP6aFrpJCwBfzqYQZZjwvRQNNfiB2WNc6t1HS49fm27Y7ejxhXveCRVtxexitbV3oiQ5ADN",
  "key6": "4AhHfAd1SEur97f3QdjKGLSqkJzVqzyv9715ubz2xDut2S6VShvSobA6tUhNdjzRgEWNpafLu9EzS1YfARdreWFr",
  "key7": "32RM4pjq13PE1G4uAk3GYU1XGnRVZh1b5XPuGYUUAPjk7vEApgjuVmq3Gmb4VV2oUzexWeS7UFGPSi6N7scUxTxH",
  "key8": "3PxUKXg2E6ur6UfVEpJZKFcREDN9wv5b6ibpdkKryosDFHGhfAZTqgfwhLawtfwRY6jRKcwfoRHLeSrPYGRqgJcW",
  "key9": "4Afbbej6KWbThJhH6iFwL24MeQkQf2ZjLYULdmYjXxiDayUdMG2wSuoCvGpX7bRHv5uFd1tpeNyKcvFip1nZDKTg",
  "key10": "3rUf5sTiJnVEdAusSa3Ln3VQnRefS1DgMFd38s6F9RFSVcCtKTadjgwmdowUL14anx1khe9nWTjZLriP6h3s6TKS",
  "key11": "2M6Vco8BQFLYFNzQNVDMq1osrES1M2raAeP9LYJdXqpiUG6JFyRSsXyHm9QLdbV7C8qAS5PHAaSvbJGrgnDdHN6e",
  "key12": "gVGg82t8gBcsEfvBSfjK59kRdS9VJdBN2F3t51WMcivM9brDvqJRCJaDUcwqAsrdxnfBQCwmbjxoi6dTm5oZFk6",
  "key13": "23AeM6k2HTpYoibQfXqMryLewQVES8gha2CRsgWrcvAQX8zgLYGriv4kwBbpaz4F4tHJ2pndJRb8h3Rho4caf6L6",
  "key14": "4xcCFN1E33ez3ZZhFFh2Ghe4Tt491CrfRfBMuRCQ3Dn3q3jsnTf5LMPL1W3oXWfCWmE76Mr6sjYTHjN1LXmscCKp",
  "key15": "3ybp6nNZUJ5K4tz46jkftM8fc3fQJQDLqx467ctTmqV7no2R5sCnfAEiWFVNoWJCqiJcsqUYgkvvD8kzotaRWKNn",
  "key16": "3QBR7bqDP2g9rNoUySdY2q73XB68Ek3jdjNyRNZa5tG9KSy2yvUmkxJi6xcNE8EvtnUjLjjg8nqvuq83Spa86LjK",
  "key17": "2dxjbxHnrP2nh4XSAfGkaqbJGw3EhLwBZ99MYhcGDEATu5pSC93iiH2q2jouW8fpbV9NaEn6dfd7FpE9RHhLL7Uj",
  "key18": "4Q9A3gGCP1asCPobiZJhYdkVQnCrdxbFKdFPZrcuwJhRFNg3zP2FR49RrELKDNAJSeq7EePP3222hHzU7ZtHYsG6",
  "key19": "p1mKHzwJWMJV1QZ34XMS4wXm7fa9cgz8rEwpVwPoiwpZFn2cjP5T4ycdNGrNnG8xue6at4NfYDrbw9daGgyUwga",
  "key20": "2cre2sSiDBUrnAxH3V9JDs6e8mX4NAW7hmGJ57mTAWJfe83BLVY62uUnqsH6FHeT5u4WKZAsn92YTMUhWxMw6vRA",
  "key21": "24KgUScEDQi3mvLZFoUUmrNLVsAy1ToUiVitg5dRf7GXgWRrHW2FqayUrpscc8x9fmbzbWCkZL2VSBpjbqv68WV8",
  "key22": "4ANrBC2tRnF6BXeeYXp78xUfADFJMTMw4B2QanMpsqnTfU9UU6ivgeV6zLPsH4zSMiPTZw1hTR7Y2AitWAmDQLFX",
  "key23": "26bbtrjJELcdE4oXuAvwayPynJdiZ2pR3cy5zqjfd67onBiJyPgEmDmUcLSAV7xTtPDS5jENxUz7rryHV1HfDVu3",
  "key24": "2vNfneZN8Q5pWkVuQAzrYEGUNm7KXrQqjiaLuPDECVZvp1U2XYvoX3oB5vJtDzQfSNFkfMmejDiKnThgfDCiUaQF",
  "key25": "23UuovWXFw6DLvZpMvC1cfTisgPaYGVXc4TVowqv529AyL49An2x7gA97U1zKKtLNenUvakG7CdyzNamQogaL8En",
  "key26": "5eZkt33oiJbSpqd4P1LCS4NJf3n9MVbcUpNS31Kb6EPA1DGa44GHMPjbEkHbiq18PptyLNX7PD2YYckfvrfu2BqZ",
  "key27": "48FZ5vDf1heGb9nadLCti8Az9wsG4eCSmfabHQGwHgQ9bG5VPM5CnpzoL8SFxQwbKfX15CNc31wKG2Yw89azittT",
  "key28": "5d8jErJmCdbWypjmriaTTTZVKCavaibsbbujCA6Gq7ghpckKrfLf7cST5mmrcBTiebrM8ZoMEmTDkgTZEAgAQusU",
  "key29": "2hzRLFMBUvLH3UrnNf3RFTN4PgdjQ4Dmazn4RDTgY2EghCCwmYYo3rEoQhgZbncLcDYG2a2o3gYxBpEXBHzyw144",
  "key30": "BkKWpzKNvhqNcBGLGwpeDqNd41hjkSqrMHYDrAZKQnvSJWtiR3MED2w9gBSkChhkP5ukjLfpFw8o28G92iiywK4",
  "key31": "35DUQjEzMc1EVi3115BCf9JNHg7N1qkr43JE3S8vkoK2D71iJgo3jEhj5NRhR3wv6wvCwrnCACk4WrzWYDy2eG3h",
  "key32": "42ZwpFFrWcKKqLGDBcz9RCwC6ayr534Vs4gad74CpZ4AVmsgc7BQFqtp4wMDJ1h16C7d3Mp5q5iWHvwpszqhWS6U",
  "key33": "4Ls6mE49ad4ZscawwLNpSyx9swfyza9GRnEGjjCynkRQgNvzhhBAsPTgCjMTBwTj6hxNX2VmCrhJoydc2pPM98em",
  "key34": "39vB9zr4ehWV4a9DzuXm214SyPhJRhWPjq5byGr7SU5Y9dtghKdHk5DQ3RfbAMxkjRLqXhQZvjV9dwdVtYtnnqZ2",
  "key35": "5NhJV765tT9fEeEQQETLWLxmd3ird3rcfYJ1XPjjuY15BpgN68mKRsACGgmQ7tWsHYE3bEL5GKectEb4MshtGKjA",
  "key36": "4XfiV2vQhxf3eH6xtwMg1cBWSt6GHLDpqz7BKsG7kxMje6gZFxmnP4GyJZoNMSMpoTaS6JhdXR9RHSr88Wci5qZi",
  "key37": "5tH7SQuK25CK4NmFqAaL9eEB3orMwQ7RNZGXPrTpkMbqpHK9wMRNbXVqfaYFiNMUPqgWYpaobBxJen4n3RxaXzM3",
  "key38": "2DKgJK9Hz6kcTPkMQW5mKqDqPrXJesHqAWi6cPemVAhksjTchQDFmQohYcPTLJG1fmU9hmBnyUk6x8986v1exyqx",
  "key39": "4dpW3DbZhFihm9u65GjiXk3PJZC9WfMPvdthFj3i1fCibE2YYqpjt9scvtbQ6kmAcxYRcSF3fJyJAaMWqK3ZJp7r",
  "key40": "2VvF8ynkSCCZFVcezuQdbpMuu722bZZwCWmxgZfmYV1W5dTvJyThzCN7ZKmhFfS8R5WGR3fmvv6TAAUtwBkCgamF",
  "key41": "4QxE6GUp9jStg4WtXLAxrKtuJKctVatEMX58nkmuZW3acoEt87zMT9EUMULzSsp83qVw9MxW6KFkof2Xk6tztLMU",
  "key42": "wUiEnN4rwZ3tXefPp137ogBnMGG33RZnVd2NE1HxGBd4pc6sMu8bCezHi346gHx68t5hZvHoC2FSQQB7ShwofsG",
  "key43": "3ZQaBCWPYHzXWayqjDUGXP72Hvu3cFwHh4CAiaVff5iLedBTH9aXzLGqovidPnYXFucv6D8nhwHFEC6YvF1Nd2wo",
  "key44": "uuM6or7V6Xn2qt1GqYsc2Xu4gnUgvQ7Sky6ut5rk2S8a2zStm9bMUg6A4unEpMPHxx4HNCz2eKWbEeZeSspv8zb",
  "key45": "4BXuUSsLxPMUbahe2b6hWSunbLnpWpHH6AhZb1VeFQMCznv9rUKbgknD8SAAKHT63eNmmmT3BNSYvMXFduhsPA37",
  "key46": "3pjicAycJCJbzv1c2ZkdeG6KsM8YhsBnPiH4mKpbFdSZtHbR4DqWus8jorCYX15ffvTcvREhYpHgQCDuKw6JkL6L"
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
