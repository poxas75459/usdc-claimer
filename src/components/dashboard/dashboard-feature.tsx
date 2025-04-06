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
    "51Ppb4V43pPEMyvhGtxucsES1WaKwdRrUTy7YX2YwFYfMnymauHQCXVCA2u3uk5mz23ViSLFywCeqniNDAfby6um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3hcB8p3UiNMjj5SResRxXMLnB9sTSsMxAw1HfdAb1sEccEUuQWbwtbzrUGA38Wq4eQ72BQ9BUKsLFMkcryS7nj",
  "key1": "FRC1jutwxB25SQKAvsfXdLYAdMSig6vufwCA4szrvVe4VVSmxTeNWVv3D5MLwPShxQnctHs3caq7nNL7Xi1oUAW",
  "key2": "4qAVXGFLfbcz3urKMpuosp9YtYFJrdbRQxDazQbT4hfrKg7Pd6kuY8srTnWJNZ468h37k4UyrgUEu6dqycgwz5bi",
  "key3": "5La6bWFu3pwZB3SL6Vf1wQJ94w5x5c7MaZ597MqepAxSbQbnWSE7m44XsH1j6HYgbAms5MeJdZAcrbEU7pFESM2G",
  "key4": "3fn2wH1dU1qTHWihEEBXaLt7RZgzopNM8frHfQBe1G3Zan4ag2YERG7NiSWr7TZMbbkrDsKbVvmzp9TGxVgTAfYu",
  "key5": "2aMXSDZ4XufrhELoiq6JvXND6ssQk9wHMpHQ6YAQ22yvCw5WV4JxvkugkouCRc3FdNp1M3VW7yFeQfTzEk1vccoA",
  "key6": "gdM2yHJP2QnHQYmFzRvWkZH6dzWutUdNB2eru1xw7M3PpsT5NeZhyYgF4Jw92mJn7p7M6cfpEGRWDYmcXsRp7EQ",
  "key7": "SBRw5S2Ez2AJDtf7gV7U84cBan25bdv2GTqagLEDJpfBWKn9KCZTHY7ubwRjbgFcNbVjf5k65HvzcTGDrekopfg",
  "key8": "PfJGYM5cBo3rqnZUh3ezDdGjaw3KqSGUedupYRPx3P67nUCivRWn3oC9tvb14SF743a3CvX8vifCPThJ97oSoc6",
  "key9": "64hyF5F4oa7gE9nDwLA5Nvx3rSxYy28adWWW837CdSskYpsT8oWdiJb6JXuNPN7aGMZ2ymp3ma7fTAmD6nnTe9Jb",
  "key10": "46Y45ZHeXbgNDCK1PYMD6jVQ5HFPqQJDoPQNdPLmdfkPbySGHEQcL3uUPBtLaCqTGeDo5smLJovmCbcw9ZQTJfR9",
  "key11": "61GFHEmQeH4aBVwQR4f6c9Q1kzmmK2b8uduh4ke1UxCmYevMeT55VqbtzU2GNHkgJYd76hTMJvN28nSHLwdpwbL5",
  "key12": "AS2eEGVwb1snwQtBrpAHK1FwHMBdmXKUnrV7ttBrYTLPufa36uLDbKXKdYkrHbQDmwF2GyXhu52J1SYEQ24g5An",
  "key13": "3Mie3B8ZK5EX3N6oV5K9hM5qsvYQarqJoJSJb9BGpCTvUG7BgdQUKcZrHJpJUT6BzBSa94NC9VZ86Z88wbqmMNyD",
  "key14": "35vX4iYxboh9PMTScNBswGSzmWdq2yixvg8E7hknbGnVzFrPRoQrKeKQohrnuScrZNZjVhJRJDjXiRkdwf6e3FAp",
  "key15": "LQAPgHuuDFKJAd33LcKSjwz3DAB7BEmQhB9pVQBk3455iCcKx4Vxhke2vQ7fp2Ad1Fv6RcgtFQMZxP4NXePiGb7",
  "key16": "2hrYwVfsMDuwqVVLd2FoWX3JHJacLcuffXLFepLyPL1de5GB7sUS5HZGHKKRN6R2mkwsTus65mjLEXY6hkSU2FKb",
  "key17": "38yrzGn9aWLhFVvqEN5V8Lr8eZFBfu8fqsq2HQgWabUhCgdDxuYLuY6GDDJQovy7qvT7cWoTgc36eQt8Hpat58yq",
  "key18": "21tY3gs33Fpd1q9adzgro5FJTiEBGfUtTYSRfGJgBCmmHc3W6fUcVvSbVKapVKaKKgoTprMpuhE96cpGDuXiUyEu",
  "key19": "B6wGXLcYqjet5oRzjE4DDyuEPjqwJZSRKpiwE3swXGTqzCR1zZvbtfWKJmFQ5KdAqSrhb9sES4ufTukAv8cE3iC",
  "key20": "3bTZthuG6R86FcfH7rpaTN2S2Hd9FCs9yBTLHmFJoGFTjvQerJpzPwQpQ2W3sP5rV7BFDDK19JChGYEvqi7aG5h1",
  "key21": "2W8oPpdAMfuvK41RNgi48Kh9xsM8SAu5hm1L1UWNQY4rV97Rw38efRFrzAqgo3RgZhpD3FNuggp3vtNETrNSBsm6",
  "key22": "YyrHQwUc1DCu7MjwAToC459Fs7QAtsj3wi17qna1cp6snWCSWvtdJBk6gnnhfhrqCyhaqeefCxVdaSAxDe1YwAy",
  "key23": "3NxaNrNxwu6iM19QQBuZXh73qQiuheLagYYXss87fBxtC3npBDAe1BrUbbGJ1B3nP2VEQet2FBEtT13UKLJ96KTi",
  "key24": "49SEA7Sk9HveFNjCCYyw4xCNjH4MwiS4FTTjdiFgrgBxByPwuest7KMM7X31rbLZYopDWLJkwQB2nUDY3ooHLzr3",
  "key25": "4PYjes7S8XtceM62A31vqWFUVRcMHdJBmQtcsSadJsn6RfkqrqRHPu2kRb51Djrp4qde8EbTs8dHXa4pU8o2UAi9",
  "key26": "3ns1FYSsepK3ZEd8VY7wn5McMamyZzQd86qrbqqQw21b3huULHSztaqXxRrS1FQAGapT3Tk3K8xjUx1CFjSxdveC",
  "key27": "5P7Qdv7AVYwkNSxaLLiuq7PJWhmndtnQ3rgDzUseeCyWvb3eghLM8qpBy6fQbymAZRSwbZbo4W2Shnh6vPeT5kXg",
  "key28": "22ZHydKm427DrY167yFjJmptK3jGcyUEQLxZs9gYkpk8AzUcD4F5wewZkjtwN3voCWtk9EKxa9CxqcQgt2PpWB2D",
  "key29": "2Rfk4aUPtFZVBMv7p2PQtkReEbpCJFkWzCoqeCSrkBrjT4X3PHq4jqMAVsr7L95WcJbH8SCmyGQ1eksST1V2V8vc",
  "key30": "5R154LTDqAch97ALoQWxJFbaogYN9iBoiowSCcUC12JGPTAfjwxq1nu2gHwxqwHyXcKvSmg9AV1aPFw7N32gZdgB",
  "key31": "2WtNdhozcFTCKtja6mPQmUGhLJ8GzyQcrKW7uCraPacx5wtB4CNmMHFL4ez6ieGu2cY9g5Pi3BX5MdNnS3esiDuS",
  "key32": "62kQASiXMbRxVjXrbJSfH4tALJ6x8NFJcGgNgDpw3LgpTc4vBsrzZacmMcV3A7aSHB87qp6hqfqMASQzcH7AQvZ3",
  "key33": "QCHXnQcm9i7tuFPyWuvFDpqArFHpdGWqAGfJwgMuUWi9A8E6R6R419FBaRV5dDCvt9DvV6zxhY4AGrQ7NVhSzjj",
  "key34": "4MKPYvgVkokWXb7mDE4jtFy1p8Y6ZonZm5FKEHvyYbdA1C7YMVgYs7LE42YJ9G6rUCaoGMVQmY38XXqFZoYQJ7Dr",
  "key35": "DbM9ydp58otR5dRzN2GCFvipEwEop2iUpY2cN7fRUnSBoGbQDSEnNR3BiDwYwm8DznP9c8J2NZKu1P47acpXHTV",
  "key36": "3wmGmGwnByK6UbVuxWDZdM9QvdFuhuUi76L1SPBN5YTZmMqhPeaqwWn3JqgoNGVtsocoSMACCW7eHvdPZ8x3jtgL",
  "key37": "33vg2kU7qQjYnJ9vTjsrEke78976Cg4rPNXqnEcZYohks8gh3FjfNoMasafq1RGHkoWFM4RnNX3TKDHMhrKBzX3v",
  "key38": "5aLKBXsLZk3WDthLy6tvNBd3ZhJz9fH5hSQEQT7ryWN484ZWqGkEWQjHNx1S75HDyv6GRSJfHtnWszZMEnXVfzAC",
  "key39": "554tAZnEJj2nvFZvAByicJHpLeoS1zFYBsBnUN1Pgjgn8a6qfGxksNYVReUn31VDw8rMZi77nKM5PqWx465izvrn",
  "key40": "2jhBfn4ybLNBnjyijvLsf653N2q7KsYgLR5eDhmFMkS2xj4FECpt4Fbrzf3GZkWQzsftJK3bbtvNyJWMBtF1wTFK",
  "key41": "3UofkpvLzFDC7eofSfg3jYt9AG8wnj1jFdebAupixvfxe9aitsFjevtmjJKS4KLXLLxx493iHC7rqeiz969cwU8k",
  "key42": "bR7vAPicfTuG6tgNCCoXpABjhBeJzAD1QtrnN2TJ392rYa3yUK8UtZpmGTr9k7ErtP5quDK6S8QZ5ZrJHSbagXK",
  "key43": "53sUh8wKisoCYLJhDHvwnzgyRsHqepbKvwPUDd69336WNow7T3EZQ4PV61Zz8zH7hCzUxmE7PZBqf7MtXj2HVxcR",
  "key44": "UsiCyDVQAgbpBmL7u42rPG3hJghnJTtaKvz9HCMBCRaQxbD4fPaSb4fXWQpqwfxVdHAQQfya6Ve1hFBrr6RPRv4",
  "key45": "4PVJxw3Bwn8ZaXh6vTvo3nbSYnQHqbUBoqLTC6AoUwu2hNHMcxrSTXqz3vLo5UecSpdquGqQ3bQHtss2Khho8pnb",
  "key46": "gWrbFkyjXFhR1Q59FzAFYhEZgrjsnE3piGnz2Ucbd13hAJERqMDBKEo31vxWhQr5bpTTS6TUCGPm5rcdMC2tMXr",
  "key47": "5X7hr8abzyj9Sa7pUAB3sS584Zbn5MVxBkshJ6QQUVbYcppeAb8y6iXCwX7tiS96SeHmuCWE99duZxsub3xKAXbs",
  "key48": "XHr29qjLkQSfG2SDYfLGTbxioEjSb7K7A9xhBxV6EYtPdPzfsYTj3APHhw4gzdZ8qYhPfTJ7tmJzN2kL8LqjDu7",
  "key49": "5d1mZ8hdKmZYox5rY9anVs4yW5JGaQAkYpzwSD9A9T6uRDccp1qsmEVnWKHkzgS1Ui2CZDJe1owDtYG1KsUrP6Kg"
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
