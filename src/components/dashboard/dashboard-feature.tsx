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
    "5RvcdBnUfnhWmskuA86aUJKjirLRoRyWWRFqw58RdpMFoUDhVvWcdTTr4W6osQVnBu8v5zDtw1WixcDEeFfJ3aAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fo6tGxLqjewtuUvHVgWwWo2UszBn2SQpMjkHCCG7ZQzQzna9tNRGkJPR2igGfRaUDyLMefcyoDkEX3nHuaDeBCp",
  "key1": "4aiSgsN8amPCNGRVQ8VknJkTQhT6hkDCtWpUAwQUoEGMv5p2oWRWiztzDZGd92KU4newMeMqhSZ7zZnRVV6piEbV",
  "key2": "TiDSdAdzDGG5rNm9JzeAPVpmw1oUxGqX3UA63DRLDn1MFozpWvHmtotspEmUedKD4a2JX2g6eLCe6xAo5irzES8",
  "key3": "3q7NY9Gj97RVPMsWpTRkvR2eAFRBdUSxMdJcSz2sA5GSBUU1qoGahvtBwaCwL2qQgnBGm9mSKQe2AmVg2VuYe84C",
  "key4": "4wVDYwC9hzLH7M5xrVqNLVtBgmvZed66MktJerFYFT3vkcDoXeNWyWU73ApWD4YiD5MvgvT1kvWEUBFFk9zj33k9",
  "key5": "rf4VjdUvX6FgU2vM86x6ZfMcWbaKtcWPLKo7jTMj4nGNvbaNwedDRehKZ5yWiYnt2YmyiLUWWri76JE1xPkD8Q2",
  "key6": "5ZCU98DLM9LT4u2zzv7KL123TiFasYKcy677e7csA6acYDxu4j5viGjxDDbd7cvaikXEkS3suVqDUnpe92QfPmSm",
  "key7": "4oGPTTkCkMq99QyTpXVWaxb7xhUydrvFU9Wrn84Ejx2w3VPtujWz4i7y3JqCo5S55jfGkRA7zdJ6Qp3YBznNhPfY",
  "key8": "jardrp5Rp2SoPJrvoGYSQR6SSSv1RzW7DzT9umv2B8NJzmJncTHqmNeHyhJYfAfLBkFnsYycbT84kjQLKafiUJM",
  "key9": "2G9DSUCHjVmDFRQdgYgrdZM7TzTJWUeQMcdhgyNnUY5UvHBA8ghPh582tivo1dVZmDhs5z754d7NPwazk1oCUuqT",
  "key10": "4LiyrLsskSLa96prhnKnt9RDU6KVtgppPyiHh6zAWDPYDWoavJ8MjBWHhdMmyJ4EMQZsEEazz4Pj1joynD8EoqdD",
  "key11": "3g4d3TUbgfX4irwgBQPPGafjiRuauStSUVBuRH5ugsfrHLhwfRnpidrXXyaDriBFUviT19CH4Wa6TrpcHJjuVnxJ",
  "key12": "486pa2GkwtrzjFAGZHSqonBXtFNt5RuUBdq5CgLK5UTxrE5ASBdEid5PJBPLAaYMYPHomiUSPJTQXFGfkF8U4Bt1",
  "key13": "4yXpeQru53AVivPjNCXynkubGkLSmi1dBjwKsyFtEfwgqATqm42phardkXVb8tXxpLxUip4njByT6r9PupSyFoWV",
  "key14": "4ynWZFaeU68o6j3WoLxTShp1eR6dVjkUeyMo7P5GdqZy9vuFi43SqaUKb2ZiBTPBs4CEUmhZijYVtYNmYSp65QA",
  "key15": "4XdLZU7wxxFZGxUQZGYpX8P5QbedxEXVJSAmQ49MhdozwA8WJoLTk4cnGiKaWwBo7NjtpBRhULtifMeTRr5Rk14L",
  "key16": "44wKipKvP2kVXVNc4XPnQUYd9nsbhGMJpH56JWEBq9k4kJZf2vgX5X6DJWpGYpdyqGrSarboagqYyfYXcweKA4X8",
  "key17": "2WLoa58JijyFCkt8tHeS2HnwnL2ce9PAdNMwiwirFkZLATjtufQcCSTe3bJsgn62eF1zMhV8RVCEG9p1UJhSTsTX",
  "key18": "Le4CWuuq45JD1HsuyPaAUABWszPsSFh2xWUBe79mvVK16irQMecGnSZscNcwQcrhjhxrgqfPUZD5GqKEH2Mjh5p",
  "key19": "kdLHjZabVHcbhLaGmQF2qQM8v8PL2NY83ZK6fUyqgrDggMTEhugsTFb5DXwqXmzHwbbFm8wWSn6NPZBeudbUdoS",
  "key20": "TR5iTxkPsz5m9S3eQ3uwZL5wS9APcifPtDa34i9VjZSnUsXdDfQA1jjJMV8nGpTXrYFG6Yjyw4qHCM3cLwUuMgN",
  "key21": "2XkbbGpG7JhtnQKDh2ezh1DRJ3XKMA7TobZwueCN1Q8A2KWtuVGvjYNyZGQ5mqRbpUrvF4DNvtcYoPF5KyF5sTyV",
  "key22": "5ad2oQXpGov7YjQP51v8xR25crexXVrwdNyoFB2kS8H78nxjrXCouWoT6XdpowS5SsXnuqfCGtRREjawiThmCPaD",
  "key23": "5o2Q5BrA9pd7gJhVc5TV9EJn4ijegxoQ2eSTCYQdztNJ97bpt61nYqANYMLiGzq4VuhNkQcmofroLiMdDVJMXHxR",
  "key24": "3SXT1ghKzf3ocvD8wLEYfjdKsuxPPRvqn5AKhWq29tBmwmAxo8SAwz1EYqoE2vYy2KrzknqXoW6Vx6hSwibrQARQ",
  "key25": "5kA7W1VUHyQW1rDecjnS7tSzQjkcr9spJsgX271nncQkjy84hePsarjYWuf4Z1ShCmtHAqNxsKDN8KwcFgcpGGBo",
  "key26": "56WY2gix5Sd8cMiDgPUj4pUwUWH2kUnm39UaduPTGRKF7R3a9Eow9kLMr5oNALSgHNVxBhHQ4BLQACmi1X24WW8s",
  "key27": "3Cp39wWsEqXkBYHFxNC41RZPMwYhzS6mDaHfD23z9jFQ31Z3tAzQQiEsj81hrgZZP2bWuv9g6bmvGCsX8Mb1d8nb",
  "key28": "3MqDVuNm4MjJw9AgaEiJMBneJW2FhMUDysgHjkWaCcV5VAN3Ze7pSwAHycfx7NESH6sbY35KFUQPbkywf77yVugm",
  "key29": "2Gy3ewHBRvCg2CVQQ5yTNNNnw9bQcExxyHWr8KkUVeRwDUofs1AVShva2hdYHHJXLREqSuZEwM1YbPh1gzP9efmJ",
  "key30": "21Ey8ZxtBKPc2qJrBeT6N4A9JBgwQMdFKxHdnrWv2N55xfrAgRshozEWBik2he5Y699Hd57JwK7ZiL3jYB9UqgFh",
  "key31": "3JeSUgSf4ebfCiLQa58gaUdiwzvdv8U6BQxGTqArvGukwJcctdvPVpbMZWT9sp86zumVSZgf3R6LeTfDzieogRQS",
  "key32": "65Zr3oqfH3ApTzUh53JPJ5FfojVpAEvApF6oWqxVJf7frG2uzW3srogvRfiGnharkkKp2vWj4oYAL3csAbRPzBuE",
  "key33": "dvqxDbwQrYF5qVo7u5mn7eCPKFkPAaDmKZAtmH621QkBEgYG3shDuynU7A65c7DPBRZtKWcV65fbskknBaav44k",
  "key34": "2XyU2NDCURv41YSqyYJ2qdnzbwr9aynU2TQ4KA1AsCCykpQjvryV6aLe3AZUjyVqL4akjXHMi13kaEBodJr37Pxn",
  "key35": "ezcriMZ7MuK4RdXZ8Btdnqu7Anbo52oHYGt2cjFLaSWZr682pRSLa3ipZ2ER7YBe1VxxiJnhSK5EskVzFuef6JC"
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
