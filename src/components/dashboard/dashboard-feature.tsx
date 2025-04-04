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
    "64Fg2cu6P1mwzFbNkfh778XRPUL7iTbpiUJ3hfVxruA6cearEEXXXkWHgZbZDgHYftK4hGs4FVLsX5GQnyWtZ3WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ozTuyczHdKoGMyM52q75cYMozpM6apCmgBcwUaVxpjLzWfvQ6EqET7BipTaLr1nQifioQvEaoFCpXi9xbxQ2Ve",
  "key1": "4rN62XBK5QdCV4CmDT7D7jD3nycDUNmMDbcFjg5B7GkqPJSU8Uos6hrttUTboRx9fqHwf1gtduC8Vd3NbQd7Zokj",
  "key2": "T4GvLRQxWmCtBoVZEy8gbxKaaQYFKAVwRE11ytPnjBHTpoebeYmyfsUJX6wsskipHqUrFLHPhgRZBHhAaadvwfs",
  "key3": "2QTdjSMNa6zXWawDEHzisKqZ7yKHbzRCjaL7tCxM7oCSqgpXyNZuDr4CrzV1WSXQ4BncQ1QBohrP1Kiots65mdM2",
  "key4": "3DoLuwmXunQwoYwfpqQLURz2Jv8HcrEvHqk53FxaT1ANZ79wrMN8cWBhFNDd5rpyh6tBQDKXjuCpYt6Zfh44DZDm",
  "key5": "578wZH2ftVffPE9pbVuvNG9k21gR2GgcPF8HRvYL3iV4PQAZHtqgV3jHBHbv2T8tgnNjuScFKe1aQFKnhDssTgdR",
  "key6": "5GfTsxP97a232ZtR6mgTM95mBzzASX7j3ccf3euVUJMxHpfTqnoDcyakBazhmnZ7gAGDDF636mmTSrh1P4QzLN7L",
  "key7": "2L3DfDrfCY9Uvgz6DygYfbfSTQosYoRdwpHchLYtNWf6EGg3SsKXaqewMUDqrcmJmsfbw7ryN7UN9X2XVqBYEsj1",
  "key8": "59XtD9rBZRiXqGFdB85CuVdzBv5C5WMJGG7DufsTEASP3X25gSaDZmbrmutFxbb9pgUiCPMAs7W2rewcCjuvtEsJ",
  "key9": "3PaEcSJKuQrb4TBTXUEUr14TMNFLja7cnRYWqxiefy76Y5qGZjbbiCumnS7rqnJDUw2vvKFN9WtdgqcCjkEjPJ2d",
  "key10": "447ZU4y4gZtvaaE1nfBYVnhr88Gqk6AeegpQ1T9v8j57m8vyx8K48mF2oAqTwyHMqK27etiEe2W8w6U8RJ4oTRWm",
  "key11": "29PfkaF79VtpbemQjwtCELpCRpbiXrH8SCzEBiwidigvi6SwVdbxH61yMG2MJD9HyWDB2zktXFsSE1xVzFAnAB2k",
  "key12": "4vgxwqYofzZnMepTn4AoQYEjqC73QUB2gnDMpd6X9hNoPFZWrTWEuj31PMEU53S3QbJtvU1quNStTFmdXqHfSPWY",
  "key13": "7j7apWExezngp15jrrrVd7siQtM8wsEgGGVwR9kRzUNfDucTbUr84QFL79n9BUTbPLBS43mRRrAPbSxNd1i5Mz7",
  "key14": "YQ32a8F5fQ5wAaWEpSWE4E3W7qaW5BRDD2GFWGmN4TYaYDZwpP4RqP5o5QuLeUaMQygQmEprg3P9R69Mmza6E2Z",
  "key15": "4po3H4fDs1mzgmzgt6carvSPYRDbb3tSH1LipnXGubSVKe7xrmPRiz4guxPxekGx39QcR5AdC6f66KWYU8brcudm",
  "key16": "4sxZhyMgASutZWLYVrkvUTYRbRSEPZHVTHqRoNH1m7g7c5qa6Nj1uhfup1TwDDnXitDxTSngou7Z1EibEjBEnhUx",
  "key17": "3swGogxNfjn1tswDHSQtFvMwrotTBCgMBMnAArKMHfkq2z14CC5Ko9AnoLckeU1Ph2ePNJNZuk8Pm5gig4g4HXnr",
  "key18": "3K2oN1S67GJexDAAsvc7fpsbmmjUJqFAeN7w1BVjsgd7dqSMnsNUXViMeSP85CWBoqNkuX2LzvGgEBe95NvLEuZg",
  "key19": "47iJTXGj4yiAW87TDiKaW43dJWq7CVD4E9hvHdPnF8NBCJJ5dGPDUBmFYmpvAEJfiGgVofeuvbgv9uHFwHhzGs9e",
  "key20": "2QevLDey47SnnLRrai99TaQzeXtpYHGKCc3Z1obK2ENPBKReTdbRJKdFMFhSpfsCijVdncxXxXpjjmx73djvP92x",
  "key21": "4qiJYtychULQSfSUhon7QeTEtfdqdJokszYxSwErvkrUaNUskQcLFGu5WFwnRjr2oNkiGhz1mgm95DbCUGgin6YS",
  "key22": "1mRo8nXXuAN6Ect5ejgwcGrLyz4U3N5QqznDnXzS11e1xZjT56P6DdkRLmau1ttyoE2wTepuK9Dw2fpCcJHQrNd",
  "key23": "2cXt9FSPkr2sPHaFj8n9HhFVZ1mrvGFuapcwEi9QUvEFFhfPddfSaZvBZetkpiXKbqUFmbe5BbyNzpNkTUJMcCZt",
  "key24": "52MBmGvmMgCYWdGiqMcv5bFgNjEJfs14fw4xKdemLz5AAfRqCR7cvZ2zp1zrozFXHVxZk9NwPV8U35PiSjfmjQgH",
  "key25": "4drDcWRieFMr4iT4xMQxQANgJcBrHtid7niq9o6fj6bEV1zUehXoXumFdD9aST4mS3rDPjLVdySvFdPmsRVQyYES",
  "key26": "5iWNRWWyCEM23zkBvZXMgei58ER3Tw8jeqyDf63QCPHKeh5hhgF5HB2LM92XcFDR8RBzqqXUxybbwWBVyAxh9qsJ",
  "key27": "4aiLSuqDeDjbm3ppSKFZZtYGBNEVCtpxE1UFGqzpKwAwS5E1hxq1gyGMzmuR7dtLbVTFzfkzZu2Qhj1683P4h9rt",
  "key28": "2UY4Q64onZyumcMSyBFoMekNpf4XVCnFGtGBiUTXLnJr6gvGPaigkLjojhMyB4e1Rkj95tHT7gn4W2zE1sbTC5im",
  "key29": "4eihJfhQ7w4hFKDY7MDdZ3bTuBrqT5mjehy8tqFE7HPrNAULfPdsBMPrUhEAqJMj5MGti13njp2xZbG8grpR3w9C",
  "key30": "8ThiGMqZVaw94G47yP2LUEX2ZfhqgsTyq7Hur7YpPEd546ew1JFSKDKmG814NuPeN8mg7krvWq3jdLivxBTLcmJ",
  "key31": "2pf7MR6iAn6yvtQAjz7YniFdTGtRkz4x6BGnKT6snEKmibk7tWq212JPXLiNrHL6WtbxvsQWxBryyc3o9Snjf8xn",
  "key32": "vcPut1uhMvRmPmBNvZaaF8oKhCoW2rygG6awz5shLjLPrhympDc5E8wtTAwzZF8gUApYYj4Z7UebcWr6fi7U7ye",
  "key33": "2dgtdSziqT1LQdDuzDBtZLvntTYQfmqSrnJ3NAUKe36VqmXdjSKGxK5e3xruPgWy4Kdw56L1nwxWrnZrFcAyVHfk",
  "key34": "W8GdnmbKQ9tbDh3iayueWenzk4z3EwhFUcYwabW3VEG1GPsizwaWb3ddiNcnWwpfmwc8UTKTCy9Lv96D7YodujT",
  "key35": "j4CHHt3wgcWyYLp2UWDPLFxosNkBJ6tJiiSst3RnKDM1af3pVWKDDu5rUfEp9pHd7gi4A6JjmJwu8nzZFSAyn4s",
  "key36": "LifK8nJ7hRbmLsvWaAAt3gvp5ZqoVer3pPkx6whZRaoADYopUHXWfpRrEE2oygpXSHnoJKQ3E64tE8mYEQhFcm4",
  "key37": "121LmTEeK4LUWi64vY1ExiGrmJt2uE9rcwtKCzkhUTSkw7gB65uXhceefFmADHYgJC3bT8rZSeucnXHT3NKsq7P9",
  "key38": "2VXRq3KeHXHzS2Jy2E2ouPaYbqUh2J3jtruysUEq2yFDYQaiDNqoCNbp7SXcerj7BrEhTcdezeSq1UhA6Dc1QyXQ",
  "key39": "4rBPc1yeCVh9yA7wGziCcrtQeikoqzezEfAqbkQE9FWVHq1UTrCcqgyxy6J7oVpE35LuUbKnZpGKJDy2jzL4KGBq",
  "key40": "4ZwmVXeXKeV9HEjTui2swijLvGWFGCDFuf2vyG7ir6DVaMRJma8Xh3jYzvqXXSRdtcLQkWFceN3K4ynjTw24bmom",
  "key41": "4Huz1dJwj3PSvgYERtN13woyEM3D6sM32E8bKcoCbLc8KwSKjRjzGuY6YagDrm8ThY6s8eBCC8pW2wGQcStG488h",
  "key42": "2ua7gqeun7n2jvtGVPTcqwnqjAKx9HVcM7sgDrjBHkGqJvTYCMa9okQDDvjtLLH9ScGikxscxyoGACibeT4Gib1R",
  "key43": "9qUdmLsssxdGEJFGhPcQNPLH7CmgEZxcZcEJxJw633AQnqWdAXRcPD1BodC6SRrarUaAcuvN4hZfSf5gbEfsEhg",
  "key44": "62FizRgBBSudy4XeB498NRArhgRrEDCxCH65wh1nKNZhUQBNXFgWxzbnGgApdtwSvC1taYGTEpordSdVzb8gyhhX",
  "key45": "3Ru3XgX1Gi1CnKAdcqFxQYgvdP5XUaHNf4mt27avqTwP7T1LorE9cyaJm4FjbUwHgoXyggCYXD6boucrvSQcDsdS",
  "key46": "5Vx6ryqjDuU1mcjJYSeRoUbMh77KVZktahBW4T5jnJQYgHXmVt91FDD8esqPgmYnqogG2zkNMV2TbzA9knkzq3tQ",
  "key47": "64cLdiXE2uU6jkvY16jZejnpFRJSXkGkG1Hy6FHJbAcWZarv9Qacgd96FKVjXPDdkMkNzvtjUquwVkruhkZz4ZGi",
  "key48": "NBVPdWakW6hjDB4VnSdJMsAx2uVcE37X7VaDoPf85SzMgFq9Z46iAZ2RWjb1HZwoxHSZNbJsyk683jMhNehanqS"
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
