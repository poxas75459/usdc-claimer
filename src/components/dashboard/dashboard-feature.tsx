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
    "5Kog8gBdEpENkQaERsAT5kZV9KwmbEj8Yka2RzpJ6pPoNFttRCLKn1wHZwFQQCzBffpvFe1GjQN1XkFxEAdfn6Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wEocVdG4cWtRMnZXNahFEqYZsj94qnXsUYRzQjByvEjMn9z1PDU7vVqN6W8RmMTzQX7eeQqDwRkQktjkmiMoTrF",
  "key1": "5XMwvZL1aTF9weGm9v6gVA6urjSMgoGQUanaXF5gxePPySsXceoz4RK5jopLrimTq9zuo2PUeVMPwcy2avU8iSby",
  "key2": "5SbrmGdvp6w8QdhaVG8hTMSp6vLQQVikderEZV2wSReW1gm4eaSj8pi8UTb2QfJuagYxkzBVAxPrkxQEocc2NQUz",
  "key3": "44BXbnuwH1imFCm6v9wHzz5cxpMSpnEeXwZKcfjkCZRSyZgJCqs3vRTTs4MQtrPFy9PnKCvuB2mhwGZrTVzpGwVa",
  "key4": "5JVvsNnNcWGGHdBWiNMXRovePfJSDnHt3wktn7oCRDb1tqA719tdCAPCP93Gj7d7yqT2Uyo88DY8XpMmYHZQbbkD",
  "key5": "5nuCZ3iCuD1QVPjwfXV4oqRcQUmj3rhEqpcx3i2Jpss4K1QdAJJogW2ie91d53HH3bAzLuP6EnESyLcY46xZHAj3",
  "key6": "5vMxFSaqWoTfqAv7STaXVhunTXmFsbiwa1xS5rpqpLSRh6XrEPYz3v9MRduqf6Bx3exzQ66CHDU91WqTUqHw8i5E",
  "key7": "EygUHCaV3x4u42uFuywgnkrdXGabtiuBioMigze4QCtVsb738wuqCxJ99xcqW8dwpQTqivuWNGbrwLcQ8FFb5JR",
  "key8": "2XJ7eXQ5XxDwBN7xvukzQ7NKu6FjRcCpADFureZeZyJxoGoYU9gtomfJmqvAppY41gRAnExb6GgHQe74cLz5nTTd",
  "key9": "3ACFu4tKsZeggapbg36KtL46tUm1tLdY5M5cLC9VCcEwRAxeSx5a8LzNJreVoa9cx78eQehGmz95tVHpga7fSSBq",
  "key10": "4ke9XXfRwWuPjBMg6ou5QGW8QgK8Ao7z44Mzj15Zw7MYCJRcPrbpvzoyY3jdmcs3BoMGqaWwns3aLDg473FfVT5y",
  "key11": "5a3swYRkWMtLHCXLdwbgAuVdjQWyx1ePsvQ8dQwcP7Zj4kZgLYbp19EejfVYBbLqz1mHCrpHGMitsGDkNBbxRJQ3",
  "key12": "4tiYQ96uUE1xoy1FVi2vRuNn91MP3Jb2AvrCTMwNxunFBB4uCY67GBNo7wQUVuY3WPtpS9if6MEF84riakMcNsXw",
  "key13": "5BaHHbmXmscJLRSank17buHJea6yTy1RU2EGySBWLxcRZgHT1jyaPDn1WCYoSnaQBCRDBBV9BbLQw6EHpK6xMwH2",
  "key14": "2HSp4To6PUkqQVAbTvsSAgte9HtSBPBCgovo2qxBmcxxnRMAQ1qTrWuhRh1rDHQcqAVtijnmScz4FcXmsuaG2qUA",
  "key15": "3c8AfjwAkMUmWSZaHdqQAPuJ2rULfbvm64pJ1ufy3N1GsKBx2caGv1XLaj2v4VS8eR4hiAyVRuSi3R4SvmHjeoHm",
  "key16": "2eMP9jiZpBQmkXZafAnUGTdd6J7Nhy5JdSvfNGW3GqrhqSdWhPU8wzH4YCbNe2LAqe9mGyFG1g9pDKeMFun2NYDt",
  "key17": "4zNnMvU2ZfrTuEdBbQEMcdbYg13a1akFcv6eSvtjBkwRiL79m1nV87pGcLE3mBoM4nvHun6g3j6T8aGmvynYtBz",
  "key18": "5fYFdNnRZuGm7v9JUjKpUmKwvStUEESDqPg1CDy3Msxj3inHHa3s4Fds1HDZKWWW5Gx2ME3HBKBDyh77VJbYGFLY",
  "key19": "4P857FU7MpghTfYUoFRxabhGuQD1thhi9oZdZBd9wA2HoTMdbdLB7YTQQSGYSgTf7teEYXR5mvzxbPS9GMEZnYG5",
  "key20": "5RiUuN9KnWvEvMLpjFYzy5axJ7ibA5qH8QM82TBVZVSHkYFWxi2M5GJZFnFFqDPRZ2uKTcyk9FqH1CqX9cp1nuAZ",
  "key21": "3W9fbLVGSq924XY9vcQFAN8zadg5ckE2QPiCaj8yMSprd7RvqwUf67AMomRiSfcTCvfGfxg5cGFyseiTZayFvnd5",
  "key22": "1Pknn3LWRffR6BhNioic7LRKQxAQLbgRXBzwf2Z69YqGQcFCbw9qSw7LbiSh7972x8zQwLfk7jEdRsddWSh3G67",
  "key23": "2UYuPCvdVdennUUiyffRpj7D63foYUjieEovsNnzSESoWUjabZ58hmk2iWhnVrn9N15jxiP4tYqRpBrHMk8XycXJ",
  "key24": "5auR1Sa4pAzFjooQMGHtWouA91RDEFD7pP4CPSkLMkke2H9qHVAd172yB5z89JqG99crTX4woRcoavD4xLEptcGJ",
  "key25": "61LkTttoq2ad9N8xV8VNNdsqgqzqS6W9k9VHBzmamRjbFynHR4KpjhHCU8XCeyjTZrmkBrLyYRbA62TKFzjEvQBC",
  "key26": "4NMLLLXG9TEwTwHWiDdypCvG28Bc2m1xqAdGPr8LauetXPcMUvWBZLaA68mGMdwYe8xHwArR5ScYNdPkaytgNoXd",
  "key27": "JokgbLfHfzdYuft8qsjVHBPNkfdWzobotu27kpqoD4rg55TixF5o5kkf3McTN9K58fAJSzGPKzYHwM6ctS5HH86",
  "key28": "TGTfruf3vkggFF7E4p42xDR1GnJL3cEoegYSfCrEYLmhjWrYfxkYmgm8obRzSXjZAEjGsBHTHxouwPKJDTi3tam",
  "key29": "SYvuFoEioaZDWTQoksS4B53FnpuxeWiTeHvwRNDFqnv5wJve5c7syw3Yd8ismg9uZnqVriV2KGE4BeK7zqM5LQQ",
  "key30": "3VtioiBc4vx693tVBjHzMFeGyqUgdzHyPHUtc18c5SUs8paLJbN9WBN7PH2BJEHUpaP6rwcWeEJM48CZjkrqjPYN",
  "key31": "3zPTGA25vSTxzq9hrAiD9K8gRZNHvCXVVHRsSJTmhQrgGA87HibFx3MKyJzDseTygenjsvXwb7mk5UAnZonmYwNg"
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
