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
    "2pxPMLoD1FWSZysckkdpZNRSbKyaBMDwVRXHrpZpS4hwXwPbNZGrry84skFvUcR28RbEWYRVQWoKLioc4dxq3AG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7W14j5VZWyDMUXbpCtVGCed5wr2UH5npuwsA8LBNDPvt2e6Q3yYxVvzCQkoe7YkB69bWv1DSXJzmbmXz9zuNdr",
  "key1": "4XLWHcrZCeWhjHDgha6aAk93jVtgFj7RBn4HJ6X4kWPa6H9yuo5w73MQkY8xbcc8mcMs6eZp5RHAmXpWKUVoCpGW",
  "key2": "2oD7nfvbMcwwMxm1rYTNqM4peDjaQYF5kKo9nGYeBCsNLZCVEigL3VPntYqy4vEJjSb3x75nGTBDvxu8JRMPr43D",
  "key3": "5AkQXLBLP46zb32UWR1yQ8FEdhFhgW9taiCVfLKdJSTRS3tLbGodt6w22Do5DQFVEzP83NCNSTBFB9sUTVmpNyws",
  "key4": "2wzJ2woVA25GjtPFqzwj4enYEiYd8RABXJqLtJsvqXZsFGwd85WqT4LFR9AQrYzqPsDQTtbHTDWuomuqfAsRnimP",
  "key5": "5HzFAoZbiM1cw5chDiqNvh53DdvQT8yYZcT1FeBjZ7uvaUyM1Aka9ZQiGNn7vv97sQqGtohybTn7ozMUWfLfMCJF",
  "key6": "4FFG6eRQ6t1eKGwzNZNJmyuPPD3EdNiBzVKZ9u2M32N5T83DR86S8GMPhoEKnBkWYUJKtUm8eBMctYSpvXWg7VQK",
  "key7": "5FfJPTQXtdH2stb1yrtbjQC17WZq3pQWsNjaxoSyVYfDxFpXDKxpZi73LU3rko7gQh2LXijWHkUx5kGFFHD7LCBx",
  "key8": "4rjjEZeqKXMXwzkmUqfurWJvYEFKrqbnLMxa7yqGYpGNwoKcGSdwsVLoA35necd8bQXkU65HZhHhSno1X8zpUC7W",
  "key9": "61PPVikBz9nLh1e7vbWNNZhho6s2moznFR6d4LqgY1rF1qsHx3KK7DchAtjdbkfTNTDdUe34QGweHhWU6rFEw52c",
  "key10": "3Zbu5Z7ebH9sH8hxKX7jqPDXo8Kqv9aFaNeuN8WKT8pED56zmJvURbW4MEvXo2QHSeRSiqfsKtwBAbxfYPmB5fQr",
  "key11": "5x3k6pNB8M1D19nLp3rg2im3J4Zn5evpXZa4PDJr2rC9sf9zzEHeBXEfgtuooJwyMoWpMCMzVJjCcCv198kP2tvR",
  "key12": "4sDJqgM9PZNZNi9jVmQhx7q9CW7PXiLVTTXNLfPjRLnuQDff2Kga3UKrEzZepTe7wrRu7gKVJjtes77Ywv6jkrhR",
  "key13": "cU1dooZZEhwZDXcg5JazhNBAgJw9FkbozWirU62gbRGrAwLpAHy53r4Q6UuyroLEWaJmKSSFffHBEs2Pw2VRvPc",
  "key14": "3wPZ345DDa4AT9h67LH9SCzZhrAjZm2BLZiG8SrnST3kqpeSaHz4EUB5oCc4DoXqPVYEQPbj5gnxWWoay1N5ZTpZ",
  "key15": "2vvha6jTBwrWLhxQjQJKAD8HoYKpbUdNEnUYyqHeNMuCCypPDY6Z4wejVow7bJR51DCaFRwFPMABHC6ek3xf3J6w",
  "key16": "dc8nAFUQjsTA4Z8oCvHHeTJsjy3aMw5knKkK8aHAtCVZqoCh5hQ4Nxwf7bgE5r4dgh4JjvPLBrRrYmmcsKx2FYg",
  "key17": "3MKzZo4R3hq6c46bPAyCfibfm2Xjh3YZPYk6hJvujLbWCttYDRisVW4kMANqfKbxfYNEHjkFJrenze5rB9wC5AY3",
  "key18": "cf2Ecmv1Thtw4CRD2xJiZcX3vnjMWyB1fzJkeKzAeFuLrzRY5WMCFz8eDmUVeEN6DoxCyNs7zpq3QmLsGAYmxNP",
  "key19": "5nCqQETPPHDuQCp17prq8mRVqtwvbTnJspHfyGko6jZ7D1aUcagQoQ6Dt9oGQQ1MjphNbv57hLQjyQBkZhYgh2iY",
  "key20": "3SnWr7owRSY9TknrPzJP7tSXWS1z3n8UMsbT9yfB9PEPgxCvfsmSgiXQKyhb4upqhaWR7m7L3eixwU8ex4WfqujP",
  "key21": "5Bi54RQfXNBA8GwpnCYDyFzf7joc6XzmhjHvLabi1GaXwNmzGudw6X49wgYCy8wnGCcqqgpnABhGmt5KQ7civ7Wn",
  "key22": "tQuXtdoyai8nXKuFxzstkDqiJwK99tceo7KT1KS6JfV6dRrv2Fr41gbL2UgBMqha4tuvZbSWbYZXyub8sT6CC4c",
  "key23": "2GPn8uzZZarywfEDytu77UsGcZYgUbBywjK23Q7LGYPCAuhcG8yiDkvyDgkZGmDR4hHss8RszvGtiCyghfuf7EJh",
  "key24": "4zzVE5BxxozxT5YKRebt9siQndHeUxVUFF4P4kUGEiRSzr1g6MUANqgT5aHNKeDMibg4S5gSHgqmHW3agoKEP3kM",
  "key25": "3jP2Y16ofJt5K6A9zLZMqXcUqMphyUYhmzQDk42Em5bhzznwgeBPv7AGUHCHcEGFpcGPr82spF8Cod5ZA5hTwLTX",
  "key26": "2Evv6q7mEkv2sGmb27Mb9EdqBG1eQLntSozdUJXQLGu4bM7iXqev7JVKwcsB88dt9i6vwfSyBiqpFW8TDMt3edCx",
  "key27": "yyEdvy8bYi2VourgcZjiCbXyBRuhArWt2MRMVfrAzLjWrmfScA9h88VRpapcyKuseT1EaLUGTiAn1CqiPac13R4",
  "key28": "3qg9gKcDi4om6rXn4MEkFMbBxAjUu183myDvLSq31DgAJBgW88PQ646JwoxdLRcS3GtA53ciq1At84YHBtD93TUP",
  "key29": "2JMCcWEgcaqCsikCPC4Ytn9XBXYpvg6XoExx6Rp17SCiMWzSHAH4qSTeNFBynSFcRwQHvBQzWbXfU1Yz31hPzMw3",
  "key30": "3haiTjcjrwHfHWoPVDx7Cune5NkBA6eJoEEdHT4WakHgGfWFNnFuKQ8Xz4DrvSHmuAFtdwCR7moDyPNk2pLoW3rC",
  "key31": "4aoccWdmXxHwJMXstjsmEgCqTF6yw73zV3z3VZFw2e1rhMF9MutGWhCyXcvN6FLGbpgSyYWLqJe7YxKs8gnCJysm",
  "key32": "3j4TmFtjacdFN3LE2aEm4tbNtR5cu7JyoCrBGjaMM8N9jVHeLjS6KhUxKMcGdaqAbuKURwuickK3SGZUMdNgm6U6",
  "key33": "3w8Sr8WMJ9k4NQRTkqZRHUcDBXG1bxXV6CpdckcthjETYgja9of945DCyi83orR8zYCZ2fDBntA1KdQZKWYNgMUR",
  "key34": "4ofKaogjvTRyr6i6vMgHxquUg39BaRzu8Ty6wug9jZtJCb4qmxNJ88YSwuC57SWc9eJAtHa3oEK6STQ8b4vQGAck",
  "key35": "4qyHLTtGwqng91g4wDwVxySe4QBFJEJdVKbMTBkp8c69skYN41jZcQxbsiv7JJVVH1ihgLAE9rfayPnf8SaeBnRr",
  "key36": "3dVpBmawt42Bq9hsezJJGdsih2BgeGfACparSih1Bo8WTM1Yx1RMkqBdVSu1Z6ukbNWSAZmKQNkZHdrChyL1TSxP",
  "key37": "9V2Xe7zUXGP6Ep8i21ekKXcPgsfEevE1M6DvLFhbkvA3y3XC8CqKJfmwt1ozggUZ29FMe92fsY1sUTPUkfoRSoF"
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
