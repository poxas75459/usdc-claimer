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
    "5FrX7WMXKi6k17vCubYQPwiu7NAsz34UMyQSMKCKfsYHs49hVw38MaiafgexQYttur9t6mu5tbbXwnWcM6rPbEP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hd9d5En82XA4Fq2qmH9pxZJ6KrRpkiD7S4KuxYTq9CYwrm53dLXTuctJ6SQ2WvamtPteYWTLPvowNzHeihSTkBc",
  "key1": "4KZCarUnwNwnQKmJfrz8V7DF79co6Tx2Txx9aQg5G3DivE2PvsyZ13vec9gF5H14HPN8Ssbt66Np3KvTHKvUjdzy",
  "key2": "3i8BMG1xDQm3bj14Z2kQMuqsmtBcs6wbqBEBaba27HkbAQwvKAd5gr1J34WXwC36CSsmoQPNLjcmAmguKqToQWLr",
  "key3": "2us8k88Q8eC1NgUeiTCFX4YhebAVYfkqAeBLL1LpS8zPStrG2WYhNpwGrcXFxvx81YM31DiU1fYUqcmkwoY2KXUy",
  "key4": "pTUXpeZg4CawBnvXfeotQfLhCuMzyWyfsQnymJnUubgU7XvWtrmCxDi8KJ4rncGV8pftqtqTZE8MXpusUCDK2eU",
  "key5": "3UPMSt5ZTvcJT5a9cmAVfcUAbwbQ7fDbCoRzRnhgx9SJxaU5qunGB1yCrm7L4oHbRoSTAjwBtWBQm4FbNN9BRUbQ",
  "key6": "2RpDhbB9CEC68cfPeEgDPKV2wPRNM89aRGBcysHicJQnTbci5q3PZjFbFJs28jdD7URJ2NPHFuX9HbgRHtpav1Ma",
  "key7": "Bb3xeRC8KDbXpHwRiQeU6bArosKXPCxFv6paGfdFxYafv7vv4YoW5YbTFErBy9EjEuUzTRg7bYUqcwCxHZqZGDH",
  "key8": "2DHSwF1MuYg3srQrUmBb8iFTYv9neS9K7nqCGJuPNBnBzCran6yvaXVDbaGsGmE4Jw3heXwwKHh18JxQNCN7QTUS",
  "key9": "2q1pjRFKs38H2P6AjEvjPADun6KrX7vZD6K7BNPvhxRrUSP7pJxBwAjdEp56ko6qTHrMQX8op6BRQkggtXxL8Ntg",
  "key10": "4CXvKqKavFd4rjmmqR2yBGbBk4s5BWDi1JqUx5BpHbP6YymmH7KCwtbVFZbprMBFxYxE6BmxUQhKAk8e5Jjpjrke",
  "key11": "4pMY6kFDNb9cu9FHnvyFXpAD1quWQawmYUyTQwajuhhPuCFjvSzrshxDuUSvtbPDfWFsJK5EgPACFVo51xtWzdqT",
  "key12": "4gCvFVgmwnoafspGWKzhrQAZGvqStcgtZhkZcrRFD1Xbqx2aufubcF42eQwz3FcMMv2coio27AkjpK45KaKHyDFt",
  "key13": "66xibhs5QEU51niLN3mGkqJjE7b47UV8QpCyeYiCjPUXyV72D1fqj3KhqMcMMXjC7ajKpW85cFWy9NTj7ms85gM6",
  "key14": "2CwNL2eNYd4Kk8BbxUHFqzCdpiPo9LDPh993dUWRBKtyW5zsBuqg7yHeDPDJFT1UdHyfjNYbETPLqHfu6CdddXB8",
  "key15": "4HH2e3WfPEVWrhfMz3kbCzoABx7sGtFqqHfUsqhBsMBGrWYeGRk28RiuXTvXZR6aNrucTM4TWuJLvhLRGVVQcEHL",
  "key16": "4U74ZrceqYwe6EgP3uXL1KKrv9gWELfRRFwMF4QhAdDG7zdSH15viKMk63T4BLg3wt8fZ4UpSRCoa2xKBHyJBBfE",
  "key17": "4CxHH5kEzWx3AM7PyuiC1CMYNdQq3t1n2PsHxRBnSPSh2KP77JKk2MUZ9ZuoqF9dMidS78ouZX6BoJnxKKwyEmZf",
  "key18": "3wfPXRLYesH3Yr9pj3K8Ucn96DLdyddkhgCuk6QfKbTzjr4LTKbMiJ322EAn7R81xYNJsiyg3YXoPSAwsVbMB8HR",
  "key19": "2AYoGbrbBHSGh1td7sqfP5jN78VQmT16sHJeBuxh5HVbX5WajBjB8A3HLcSJddYA2dhRz5h452YQF7gcTLyx3aMe",
  "key20": "5JRxzTsdFreDvxsK5dVrNpv9QJyJNUR6wp5ZzQdwJFs2UqDcauTyVwrKudk656UuUJzWvrJotXfjoMiaiRwxzfv",
  "key21": "4PE76i3h4dfdBWr3LzFWPrzfDzqsRu1JkFiNNmChLThtGaaXAikkLrQbVzZC3UKWhwoXj3W463ikbNLXs91Z38qv",
  "key22": "3XqbB7kxgegYbLRdjGNByVm2kiTTq9QA64MPNVwDbDZDTYGKz3vuvst5Ejza3M7jt5FHvkWGXkVdr1UEPauNhAea",
  "key23": "57TwVzr31Hd3voUasR6Xb1PVUgJJVKbLAXyrDcPJvnrZHmvbqmi99k2UxjoWEGGTHPoSaajTp5ui2YGMdZRELWLD",
  "key24": "4MdomHKvM6CgL1ssMoRD9DmvGgxRmXK3qcN94bPaDLfbJXVMy5jXZi21Nh4rDMY3xiNH2QeLVMQZHE56pAK6Un9U",
  "key25": "4myMfzkyhJGpwuazGX65UYAyMH8A546qTLEuBpuB84uZ5fKS45XJ7hAzhP8HQfkvsrpZcuDQMc3PF4DshdAPRYBm",
  "key26": "5FeRkUSzMTEh6HPi2dBUex8ZWDZbjyU5fNduabSgKFJLHVFTisPsRVGLbRdsGi6LfWcJKEz76VBrBEUVoP7gfF1E",
  "key27": "5quq2AjNhTedSDwgrw5FWqHdvDjxF68JsKucs5qaYN6LL8XVEBHjBkHS6FomW1kVizydBV4jAMvYnyC2zwjsDx8u",
  "key28": "4Xzv1itfSohi8eQiP8GyNCrQhE2DiENRCqjzWrtPATCKMb19Nw36jZukFMMoMQuRuhdaBtXcDeXASTS8oEQqAvdG",
  "key29": "4NjCZyNKB4pvoEuJdc7ffPbB8FPwNn7XQVcSeKfaLeWHhopF8uJpPFxZghxVJYcVgY36KHFR4BY8CdegQSHpzVK9",
  "key30": "4H2bapTv2Cj2BJYkn2fJj4panYDzUXVE9Ny3p2s15hQMczpXZNVwE5xmZEmCxV8b3CWTjdgWQQFGGEjo33JToiKR",
  "key31": "4wqniMp2So9bjHxbjQCoEY3vX98r4cY8c2JcKf1xfa7voGY6aWTsg1BhfGEzfXdq7SdGRnnFf8As1WRL4RPuhPXg",
  "key32": "F3kYpVLEDVXw2ZAUUsETUhEuvXfjoQByb799BvvaMXGRw8bXrE3B4AvcjaB6vvodfqNt9nsSwdudDx3afE46FJc",
  "key33": "3wFzxG6Kyxxqeygm5h6cSdCkXHUVxizPBK3Ne2emdQMSiVnJ4ba4V8HJiShNh9B6mEWYrbaob7CNsSYB9X11izmo",
  "key34": "4CEYb1AWUrjeRGsmZQKjeTxpAhcHAB2yU1xeq1XzT5JiR9W3QVvHbq7AAnj98Rtcj6MEKXZHeWV8ZXjxmEJaEcpk",
  "key35": "3X34kWHoNnsha6jC4yLqLgTgy7MQ72QEvy7vXU2v9Yvs7ESvVWpbwHKBShSXXmeS23QtWFed5xhpyohfG3a5kjnG",
  "key36": "5amWqJVSdQ3PBwbWquGLpxjTQXrqpc2RYAbJVgzcqYaGoYBQQYedwP1GP64atPDvUVE48XWkL51QxsohFhYEjNVc",
  "key37": "4xAA8w8AWRfegRzR8jZdrwt8Fqr9eanwitpAVkxWXNfWqWA8UKzuASpTmEwimNisCJft3QVRtWQwjEJBDH8wVev",
  "key38": "qawJ6nbTdurvkpppQTRHDXJmTfvXjyHHMPRVoJDcWRJdSMLEBaBKYWwkxD68ast3wHGfLXSjAWsMqxyb2DrSk1T",
  "key39": "2Udi2q4txJoTNu2Ff2FjkbySYbnTSmQ3f1rVMyBi2zLR3PPWUaecppH9p74CDLyALrEDNERggJ12tCEnrUGLECBR",
  "key40": "5fUijXipcWsh6dgEyMMFmEqWo4az2wmqsmtahLodSJ5myUDvY1RJHgzT9JkCBPwwHmZj8Q3yYp8PsGYnRSXFfaF1",
  "key41": "5asqyy26LX3m2pdG1tisRN23mBxTHgM79oSmub2oeSqkfiH51TeiS5LsQXmGxNZkVoPkrVUCTArapARk5UvDfmfw",
  "key42": "3B3uj7dhybZW8VMNF6Z57huamX3UMPQgrFZeF8vUrjUKCcrPrTGcJadTca4eikWGbNUjnrUXpGHmAUkp1r3mnQHt"
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
