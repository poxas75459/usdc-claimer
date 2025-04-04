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
    "2bTuif9a7Hu9UKmfWpKdnYNz7jwbf8yVBkVwsUSHMtKuz4PB5Px3vUQQ7475dHBvPV8VVMeBM4PDvvSZzAceEaX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41oSk4EnkQ7Ki1j82rgKMF7NtzY7x2h4rS5LuvgJZQX4DAKfC7iwQEyfihq26smKTHAyaohYFuJHVeAzZFYPHEWK",
  "key1": "5LXb1qm2Ce7hY53XND8K7Ahcd4tixkbGkuhV4eZvcYF6cqRhLfRnn6fJ96Nef9rdBc581p7e9cw53Vaoe79aEnY4",
  "key2": "38V8iPx2CdDUd2mjY2CmUnq6FuVXGGAopL19KcCf4ERG31pGaSaVZbk2k16Wgdyjk1TVpYjwSUFBRwNRew5fbTZm",
  "key3": "2EXvoZ2k4csqtd9HSdnMsSYY9DnYSRNE4QmSPAhVv2prq3JabDbGQQvm5Aw581CLWc47GCPqudChTKDck98j7UTk",
  "key4": "2zKTbpc9Kc7ZGrNo3xokiXUbMSeFFdy6V8E2STxs2TGV2tCH6Ycqn6eLSi9Vxo8YXqHVAYc3jUmNgncXBNyPMXTT",
  "key5": "4QpUCzvAtdiXdUid9CRsjy32A4s8rTspEdccSufL6PxF2QfprrT5aQM5MtbtELCJi51SSQgvbaFuuBbALp58ibjf",
  "key6": "hWZNq5SCBsPFK4tWCYXcrHnWrFPX1h66cFqbNKCYyFq73SMY7QTvYXkhcvNkRm7evFr5Fe8q5jxf5FaxJuTsLoV",
  "key7": "3a7xRHDFpUpytiYWREf7XRbv8Bs5w8e9rMXrbtASU2GEckUe9bEMERuJYtJ68uwKWoE63daE4MQodkXVzw5jjfqi",
  "key8": "3q2ww6TFLkX5bfJCDZMEsXcjVMVEuK9EgoYpr1vx9weA6ChDKpwQo93MCjZQUf6bZgXGu4B1LLqpeuAgdXyzEGxj",
  "key9": "2baSqqYVPBEfHGPTmsEGeJhRkemVaJjxMxLFqfzBtKf8Eg8JRqemYtwcCVPFCQBUa3mFwvgBus7bL1xoDKnvHrec",
  "key10": "4UbSno5uKocE79qj7oWqQVpjpzPMvdqpQ7KdZykiUTsAhcYzEDPDuU4dbpeYEfiJ5bL1H7tyt3fZgjFa2D1vb35Q",
  "key11": "5uWmRA3STay2JvyQy3Zz63SVG1jLAuob14ok6zH9guorTEMXTkoKcRrZLaXpqjZTuDzFoxLzRDg8Uo7z1kDvyRaA",
  "key12": "4YadSnwqQMQin4PoocpuL84ZBfGWeWtwH2djcYFCPzfbyyVEKVZ6yy2nqNWtf6pHv6AP6HkTBFofH2TjqdoZ1mWi",
  "key13": "3ssri68PiEyCkgn71dfjLfVkeBg4H6j1DbewwhxH7XwKcRnkKzKZdUeKkkgWSJ4QPtLxeWaDv5rHAR8KwB1ywLFf",
  "key14": "2PXzvaPirUFqNmoHzGKHgBnXEGo1wFcVhhxgEcHBDZudMsTRYfku6RMJ2ZdSWT1i9LCuqsmNVp1soQJzd9iX15bY",
  "key15": "2KLBVMviwSdGY3wKqo4Y499bbbGz7NygByCmJHQNxkJaiNE5PSNrKg3GtxizAPe3zDZP71p8QCPvyNFGYvqxyvyu",
  "key16": "59HHDWgwFiAbuz6nk5wLKnNEYwFzj8uFpKgt1RkfXr9D8AhRjBzTcPWdUqyVTQpba9nYL3qTiAZjDfqDqT4AsWAh",
  "key17": "64jtLKNB72o2mpLVBaHT4Ya7JsyXuxvXR1hF3SaEw6THmPJoVwuSZ5sLyDYpuGp1pKziXYppAApNZHn6hpYtgfSi",
  "key18": "4Eb7hcTVGhwKvAjNwhQ3UqZUE6qPDyp4U77aRr9htnoPBwwZvHtJjZKHjNTUMrxgLzNVBGf5RT4MuneYrXnBQuyd",
  "key19": "4VuPN43BZEZitGYqNW5np8K2bep8DwA2DS3GxZZD1GCic9wzz56ivf1Hqhwu3gC5xeoPq3T5NnaurkQ9puamBN49",
  "key20": "5WEj6enVAkFCrbXBnezmvBfYALSV6Nq66nvGrNjgBMtYEXFU14e8MmaQkG2iZM4sa9MnPCSLU2WHgmUpsp6dMZKx",
  "key21": "4LKSTLnkaPGSMuasTYS5T8ZttYHTiR4cVJcwwv7qXFKBKgvHdBZcpoGLP7sce5HmMVg6B4qua8XyoHJuuxp2rFm3",
  "key22": "goiZNE2aErm9VJKSHnP2vJypcFbHz7HFH3datjmq7KF44QWR8Hha9hsQRcqwqgFtNjsk7VuidLoXFzDMiMwm8jm",
  "key23": "3n1Qm2CT8do9kHZr7aacDcsYQg3EA64YRzHZ1sJheTCisVN3NM99TwWtiEU4DiZGL86MkMAzYaqHeEVjY4Hye5CA",
  "key24": "sFimiQj8YjxDnS7zixmRNBkukENhMuKtZCYvZyQAt8W2uWnJ48pAwSK28hmYe1BrmykT2UZ75j5Jg3kriaQbiD1",
  "key25": "5TeJZLdQnbjrB3RaPdD91Bg4GxEpxq74Eo9VERnHBLnaP4cioSib4SzVuBsoo3a3HvRY5xcnsHAbKXuBoLDVa8rQ",
  "key26": "2HeankUgNvDLoAwezeD8Lv3TQZ9NDmK9qqqCHaKGHR6ikdreAFLCww2Krk8ZH5rsbxQF8wfya39jG7L95VmZdaer",
  "key27": "2FR71AijiSb8WJfvDep3sP1xtsdGR8D4Dd21fNfQRTA2esz7DrTN4vz8hvsaZUbDfZ2sqfPNQvFxwDPUR35GRURH",
  "key28": "nQSCLLvyrsYRgsJzHRqpQfJyfJRwvfqCWD2kfPuoJ9bUCDc6mhcqMa8RCxm7AHLEweezGzupYCUi5Yfxcn9LRxN",
  "key29": "5gihQLFXcWRjU8w2d3oct9wimJ7pW9qzSEJhLcXaZeXbqjXq7pEEvFWQxM1e8UCjvo24PfDFMLK5ERbfYnFqzbiP",
  "key30": "5FGtDzKgWPc65mt6mrecycQwxMsBtEoRa6AhteSA5t8KMwpKnrXGDGZEwCgjaHvsTtkmwG1gUU31hKXPUdqVVq5z",
  "key31": "3he8jQRK5CAWLXizEhwi96aTKiDJtW8x5TJvoR3Zkw5SyiWuoDZt81pF8NzXF6Pw5ot1xcHuwFTaVCAesuGSR6Ps",
  "key32": "rV6LhvnPfErkyACDtDU7C5YMnyG8gsV2y54kycZZasy3WudLys1871dwzwHaQpRobfjq7LVtskqQzTqDW3tQEGx",
  "key33": "42GjBA3fP8cNvfXPRE4n2FXmyqUdnCwkaYDjL7jtosFe9WgczazY1TiWA6DUo616Gw87V4deMzb7ohco9ZqV7BEm",
  "key34": "62SD9dMkUu14t6uNBknrE9whVkjADcQn9Tpn1LMKAvR1XtL1bHx84xo6v8a79qrvAZToxbBFpRPhpqfpLgag2UJN",
  "key35": "4kUTYQmrXohe9NnXFWYvPz4ezffEa3c98i768BWcUkKzAMoM2Sz3f5bjU2ZX7PKZbVHYaM2dauNg1G264ZwFiC6X",
  "key36": "4AYAtcQAc2bQWYjchFqCuKSPQscMtmqpjjkn2gyUd5jYxKRKQD7ifgQ1pRN8W5XvR5Fkjw1gJCa2jXJ18QLuMbds",
  "key37": "3JmmtMrmSP11DudYKSoxacPUsXnU3taKekqTWBcH61iT8fLsR9bsTKHVJerrwdaDonjVrZQNNSkq52AGd2J1Fzt9",
  "key38": "2aKDPcPiF2thMJnHaYajw7jAymM9mUU1RP8iuNxwzVYD4izJuwmFjmxFftwpLPKcCEyg9FUnJgJPMh7dDeZmSRVk",
  "key39": "3ruVq2daTTtMWHp69fSFnz8EAg2c9nmbk1Mwi1p5inKaF9Bwu5uSej7bwXfUNaKxMaAHYupHhYzanZWHexmH64bV"
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
