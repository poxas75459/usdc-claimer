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
    "wvRvWMt48L2Fs2YCii6iFy1Tw1FYybxPXn33jQSn51EpkbrAdLQuvHUftu1iGAHYMFNQo48TuegCEGAwLHck7af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VHWWg7SkVJ5atxXhrzCKJ4udB2eiaX7bL7MC2RCa6e4miMs6ZGQD7EaC8bDoMf7eMkP54RdqUgBFHvWJ4Bm2KhN",
  "key1": "2ywjLi5gupHMqXK8J6KpufZhU6wrLcGCNiasastnXTgpok3bpV7xEUfsuM6dt5Ab4bAKbko8cVAYvDa6twFmUzxM",
  "key2": "3smfrLZ6wcciTGNnkZMZ38kGFECtKcsiHmQJ92uKzfMrmxp1oPBCeXV26XLL93TYyBiv6mEiFZDoomiTND2mCEBk",
  "key3": "3Gz1xtaHzLVXZzvHjPHPSsXd5QnLQ614hfYt3fHkFMJmu2GfUYcRbrj1LziwHE2XzYVYiQMgABDbFs8LDkmj9oAv",
  "key4": "4B1UBSCMRCLg7Ti72DGBW7QffnE4Rbiw3qJ7zmpsMYvLnuX8BLHQ7aE6sw78E6n3oSU3KbwPDexMLf3MSEbMftac",
  "key5": "3MSjDFHxymmJTqAHkgfQPA4nVVG9EyEgKJNbkgxrgdrVe6Vj2sEDyqsDqagRwLG2gAko1JBpcaLTbGbPNVftxgqx",
  "key6": "av4PQPnypSLNHXjxUZfB9eLWCCy458Nog3T4ncu7r9bjWASWKwZUrbHEPGSKrEi6SskYrXyhQjEU9zqwHpi3YLH",
  "key7": "4xydwFNCxXYHuKTPB6j2FQtmCkV1bexQ3oeFxLQ3MxnCaYLFSE1fEQqX5Ex3PasMpRoQsRLQSjoHwMNU5EACYRRE",
  "key8": "AfmMY3XZsH6QhET6LcfQWxeAdAqMXEeZefRQUH91Tnp7Khu8iqr4RSHShPKs1tTQJkFSMYQcpL5WLq18ymwaej5",
  "key9": "22wPAGk4M4TMzQywCKyPtq71PGiVcX6G5cpQHYJuaQTpj1viYpyapz6iw3HxC83SUL8pxJju6F4CbpkUHE39kAXF",
  "key10": "27A6ZGan4MyAiMX1QXSnQg6ragYY3D7nkNfrQ9uUqyzqYfcJRSFN8osTB3ybrYSVmXCdEJGb8PU5483p67HzHBEZ",
  "key11": "3sNPC63ipcBb6anX92h57Ac54AzfXPyq92A1D4Ycp9SshgYB5jqc8RD1get4q5FuYhHPJfTarDTp67cjJWKE5tS4",
  "key12": "456UTNoQfkLEQFTQCeU4UDnYD4BCWgjHJqfsYvFYFmuhbn6CybW6mGVcFiDf3Mm3EohXqyzQshgdaPr11bhiU6vW",
  "key13": "5Pi4yJQ2yvYNfYjxHFFLgHYXVQqMYS5iLK5iH3qeukHaSp9LzcTXJDoDYi8XYR1WiL6C23FnzK3RMZ49jGbjRVon",
  "key14": "3LHwFaB5SPUYRuGa3SaPMu39Uj6fxQe4SMrSATDcYNxg22BSLj83dGmQutNuxiZ2sj8Wpz5bih4oYZutQqFfpVxZ",
  "key15": "3cCDoXic2dMkQv9z7UfAKAzCUV89DxEhUtVZRy5Ub9A61U87rdn2kRNf7bLQBsRZzGPvErC7ojtmEvzgJV4QBJzd",
  "key16": "4qJEjq4vhNXMW8ETipiVJs6qZkEEoizmyR8PVJbYDdMMWYEm2JV3xzLtWNHKPzXPgc3NEmmV17qNytxj1dhrzw5o",
  "key17": "5zpb4j3hEUpxkV5HqrzUCYJivV77f56bEeP6vHHYZ24Ue3wAaUKdqPcW74ZT5wBYHQZV1vKnnjd65RwQuk4U3ARs",
  "key18": "3pB5VokUHrGhRQwFPuU4UrwNRRn4fo9Xg4sWchCfwjSRNuwABR52Z3MSUQ7A6Af8ST5gLQ2Tq74CAvM8J3Ajjjcs",
  "key19": "2KMZoBwHsCthTrvAjtXAe2ie5LoWr196ox8MugrTmNKqv1CCUZaL3REmNThGcBkdAxyiXHGjeTAPJb6HQs3XFP5t",
  "key20": "4RLLfaZwUbf3iN3MGjmnt8q5SpFg8sF4xSEjaQcKK8ZPa51SboFFcXr4pBkfsY1ZUZYZRhibfKWds4XfNd4zLVWi",
  "key21": "4FMcVhcjNHZFYqjHZ5XWi4zHDwP8UGGeKJLJcoahiCmo2Bg5XqWoVydP5Nizaqm1nzqZkoXmDbQWMhJyNFmP5ehe",
  "key22": "2SMCcNKUmvgdGG9f9LdyT5ZaT2aFomfrReper68EWWFuRQAMGE64hb6D2VZbaeXFH33N8wVBRCVcFWM4hJKqkxTr",
  "key23": "2fGM5FyoxU7K8iksawfv9Win4tNPmyxRcZBgbtkSBmFtEWhDRPoA7g9siM2xzowoz7JUhqQmja9dfmVdmF4gn8bm",
  "key24": "2DZUTTCtHTJT7v289kBRDMMoScCXDYbFrPwhphrnfR5vuHZSAXJCVzhYzsACZ4aM14x2zo1xTNfT9QcY2fF2eF6S",
  "key25": "3v5PpXcCjcqSghkoeN8Rd5Xv7AeXZdKwmpzqhaPqzYuX8QCgSnK95bYXrer7vLXfSueJq18h3fYeSFj4mYEFL98S",
  "key26": "29wPwCesYX5CPBCcnWmR47LUdHL8rPREgKdRjzTTp96rQZAwCEum6shZczebJ4ufgbJxDayAiwnFWQnC7m3hpqmq",
  "key27": "VEA4jofdS3bo42fvdZ1nGcVpoiNo4EndcB8rPC6M8riZM615XSv5bQa77QEbtkvZNEiaMUfNWy18iYvouAbaRwF",
  "key28": "4mW9jfrdZnmGz9yD7cRJd1PSTRg4WHWyMgWYgPPyyioonZ7obVbMHS9pgqBqB9XuuNJ9nLnuua4nqGTFWyZPdRcK",
  "key29": "5fVwMVBDXJEyz9BpPxfBiwTnLHuiMnS5RCRXmhNyNg7FfFa2XHnCXscxDssLwR3fGS9mU5bNREX7k6rJnUUTmku5",
  "key30": "2xxkVL7r455fZ5ST9TbgwqaPrrqWNJcvz6GtjUr48HbNZCjJJrWfFY35hPccEaA3tZvGc5K7foUFddMXy2M5hqwm",
  "key31": "3rkJMwyaa3GLmkTLHg5AN1yFzULJXqDd5iM3pwiTbAoKPYR1GoXiQjY1ZbaLppL1HYo7DryvN4oTX9iYFeweK6d4",
  "key32": "5rJpKToc5sq5xamSyF9uZSV9AiLurgeq45opox5wioPsqLyVhTGj8ZC3QHYonczV87zFHX4r1UpkeinPUgkusynW",
  "key33": "34ExsDAwwm4Wr9491kLwMsi9ngkCUei3LXqSA89UZ4r5fzaX8GfUC1Pq8EX1yaBL5MKk8BHK91xdd9vkujpVipti",
  "key34": "5J9UBvkBA4nSc4x9D6pu4p3CZzS9h7TmogHMysrENx59xEd3u3a1A7C3fgw17Lxtpp27Q5Z7wa2DLdcTMcJKZjHj",
  "key35": "5avEcscCmCS57woNfxg65kyuWxJpSUtwtE1MKN42MCwQVcKQBGcsyhCYuDjxhxme6FYwLs42ZT8CsuFhpNanGoKe",
  "key36": "5udJBwPJ4qyg1qVfMZz6gHFgoBw2zrevhA9PGHpqqGMkxz9GLxpnaa7MzYB8HdngJ9Wend7gWJWxqKPw8Vs3HZ6",
  "key37": "RB39cMT9NmvAYRooQhxZwRqifMWwxnADxDhUFqQAsSRKBQvrNuxeaKZWxSsPMQ615ogKkxFnK5V9d97ifbi1yYG"
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
