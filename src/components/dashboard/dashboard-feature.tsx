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
    "ujbkK668pR67FZQC72wq2PpBNhWGb7WfDEwyQytCxTEDBHCdUpThtBYVVkS7fskaVbynqutwejKyrSSwCM6qi7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NqRjAdBaSF6K5g3kGVnAD4G6Gk19h7bMwNoDP7ww5k37T16RZbN8SWa5APsRsZGh97QYmbJ29stZtYWz219DQZ",
  "key1": "4pNdiT8fYNyua6vvdCz6xffwoA8NREZMA9BC8ToNJMhuccQirvAkxWDvqVGbE3KxdjxWnCaEEDFHkVVVoVRE4JHv",
  "key2": "2yxcLWtnPCDnxPaRApM5uA1u6cNJoYmPN6tGQVm6pMxgwukYd2cybW2u8HeX32YdGw3j6zzq5xdaK4jg2YCTNGtm",
  "key3": "f2c6PpsXg4znA9PpGzfXxtD59wabU1ti45u8Qejan9mWrfKjWwpCSwFp939NaXEmw6KUWN4UkAXp1XCgVhbRd7o",
  "key4": "s3gS6kWQy66UhT4ATHyoF8PJSnUFinwbbGMPNWs78tKxYfmwUczPGVpAHyFPU1WZnHSpwkDfeRU3UMTisopmsxe",
  "key5": "4QfgUUBYBmsuZqMphsvYvLkHH3uoVKz5fi9fuW8XnzpAWkHey3Q4w4RFkxTp6nNCje39f1XcJDH8JgqRvPdHNwjF",
  "key6": "2oS3i5gHZAB5ycPxsPEzLEi5Ltscg4ZJPoH8NG5vPKuH6PWsY89AAxeXEgtroDrVTeST4KZRqbUSiBoU4AFQSZwo",
  "key7": "4CiruWUGKaXHayQaNT4vynCJ7coGNBFrmkNitxGEJxZ59RyB8RKg3YhjvgJPMAU8qCvSqNCtdcFz321ha5ZV9mVN",
  "key8": "2xvbJ8kThswYKF5ARLPXxhdDCEYZAVJh1dGsN3VWuMA1hcDpABBLwX3bn5HmEKJLeXMF8NtyxMPGtm5YtQQuDBLT",
  "key9": "63G1P6DvNMrSggEP91TAtJXJeXiZbADP55TugfgBR1wzPXDAeSbvK8AqaEXjJG6RyfiEJ4uvZ1xsSy6FM5Rzv2Wv",
  "key10": "55e3QwWyppSNUrzV4GtHe3afRafBFCb8J2oR1oktPUf7aswVNM7bw9HLw5hJK1SghrHgcgCAY2NtYEae8bxK286W",
  "key11": "41j8ACPUzZEKGfGrwFmGNQqgkjNQ9LHQ5RGe3mZkeUSpcuYxJSHLsov6rTqDh6kLiwWLQNt8z66th7Eio5GM5nwW",
  "key12": "56VEKXBt8hUXr4MtNn8LM5FAEiuoa7QUb2bToQ5u46MdPgZZRG7Um6A3cpy3TLjMG4zmAYwkFWRN5TmY4kpgPC4H",
  "key13": "4mFmLArK7gRVRgY8j8st94yLd5rrCVda5JCeX8r1Nh25XMw9HDuNxxsXAxfvLmeuH5xabHjbtpXVZuxQbCuNCN25",
  "key14": "4RqhHj5onnkCsAKTX6yKE3RFVhm5Z1KWL9LFRv4sfjCdaCh1pouHBFBTnwfqC1b9Hc5nxySYL2BfHonFYkzdEUnJ",
  "key15": "25mgeVPaxNWnPW6PeTx6a9izrUzEfUzZprWZkbiCAcGPkqLTEpzt5feGQucWcQMqDZgKL9xqmYovP4sS1oYiwADB",
  "key16": "2sV4RPUZHYL4cyMjvop7p1RbfJuqi6aQWcSUEkQe5evmiNwHkkhRUNEQwPHbRVTXugkQzzw3q2NWHQnq9AhVJWDV",
  "key17": "2r6hNeUoENaqSJrmUGnupnuyzETpcD64cRxiGvnEhsMuejhxktDEHSjAQeWZch3cDcsR8BhuriSU1DRQQ8PHrKjo",
  "key18": "3SM6FccQBwe4yGAnGqtXiXuykf9whJMQE3h8EDb3TFhQe7dN5kQiMJQ5yN3yFvMERv5shjhMvTVCTWZrTqnSTkg7",
  "key19": "4SQX2EwoEq2EEqMv3cfWp67x6WPsXK9fgbdNdAHNqxayXUyFbwTJoykt71XHob1TFQVXogBMiozTcGxv67koR3au",
  "key20": "67RNVXsdw2NjbJYDT2bbEqdMub9CXWhz5pxr4focV7BGBhi5z1jK58aQw7ofK4dWnYuC7qfx7yxtJU5ivCQahZeN",
  "key21": "oVxxM4EwtVrtABmS8xaVJ9V4nqEZYgM5U1d3EEGmyBHK8Mvr1XaRM9qetyDRutbHhvSHP3LCPnzjnHdc1dEAuGJ",
  "key22": "5HwFkJcuW4PSVW8tzK3J9RHa4QsHnKmhymiC2Jt6dodQ5dma9W1pC8HguZ6kwe7TVD5zVT7oD18dYRs51YDexqqf",
  "key23": "2taRvq6aw7BZvVgkMmBrnz8kBtj3U3ku4gBy8Hp9sFjstenaBQ4YDTZUA4wDMzMD6VTaTwF2KuV1C9bj88ysPthp",
  "key24": "4KnX8sj5WuQnJWAGJCmQ6DmuB2TEeXkTVyqDdnGfig2A5NbFc2f4imdc8FfHzg6zi3abzTmCLgfnX3pMJUVXymaz",
  "key25": "2RKgXUhEEb226Yhdtb8MS2r4Yk2U7oqPMj1zoJXKA8JZEHzERgU5Ytz8x96g55Q72WapphT2fNv5Zz3xfBowiA8v",
  "key26": "4kkz2ynvQiRfEb3yYmEDB55zFkNN8qP9rN8jFUqhqV2UcpJYqmyTQLXg8crVMXvkugSCtiV2FuLGj6ktcZCwK7uq",
  "key27": "5BejifCB6PiWy3su8iEp2B4E11tRaNpPWDCb8PFJuHqBAFHxg6ySpvGW9QpgrmgSC6Fk7gZk9MAN4ZkicJwrCNzr",
  "key28": "5hUo38HRnEZXT1vVfd6e15Xix6e3eqB5jrVLwjLYf5Eyd8DcdYrodoeaboQvWGJV1Yxz1CadbXcVd7zhRSt4bNfq",
  "key29": "5UrkzSfSXUvrKqbaj3UqP2jE6NMaqu3vTTfv9yetYwqqXXWCK5xFyv7KAvvtsV3XMZwNUdaaLEUxsNy9LqcHX1nx",
  "key30": "4jqAD5QHBJd5ht3x2vnTPmPansChuwP232KzFBPqgvNLxpWgKBV7heGrwVtSWtUnX7UDNammGuWmUwq7RxV6Xs41",
  "key31": "4PMr5XmVeMq8gcEG15Y8dgQJ6egGLpYqcQuwNLUQNWg3JxVmTwo9J4JURxDNBeiPKnJJdRC4Tg5pSxi42WogoPKS",
  "key32": "2DitgiXVwGdSHo6HJTSKnv9xmiga3LER4DnrgJBZwgEPgjhdbg1NnLeznxsFhAqDx2EYgSrNCExBQ1ehBVyT1VgU",
  "key33": "3DwQNWQ85WWDG1XwQQXw7X4qBWD8y4TzUwP7JsaWWh2rmZbe5UcFEiF1hGsZYT32wpWnwXfW44wCVxv4X67LY93q",
  "key34": "3iP1aqmAxYKbeVFfYree2XMmMEpnSwMsbyMnm4hWccKkK1jzSERTeRpMjCE9XxEHA5e1oK2PZn9E4ZppXGWrDDrK",
  "key35": "4AcTvotVMnyKyyN6QqQ5yMuXTZ93qT7exqAG7JUWG75aRYMPZJnvBXGgWcrcgpD4DHREkDZmBgwMb8VtvWxS4pk9",
  "key36": "4DAkLpbz6wivRQoMofeR5DSqPyGfUJqm4vYMpBJQPEpWTQh3FjZ1MAPp2Bjn2GBwonpBRkgPoeG6X1D55BKcY3M5",
  "key37": "38pFbDDXCPPtctVyFpAe47aqXqN5NG3u5pYcAiu8cKoYBXLYLBS8v4etoJWUfrdt7r21KC9CBPxbDVNscJb1hvzD",
  "key38": "2Gq25JVcnoWAxEgVCqWXdiSiGjXwhP7JBG3gcSibL3W9pCZvsTr1GVsgSpk6GPh2ZwdWW1hkk7bQmKNdvVyMvrgM",
  "key39": "2PRh1N8QtD7dNKDBNvesMvyEx64hhCT1Y5QQHJHw154rvBPFNiBPnP4vSR96D7Dyh7JJX3hGoJ8HSkT2wXostLYM",
  "key40": "Vqy98mFkUUxyX2158vLuFVgdyzqjiHun1cxVzDUBcw2kw8UPeJiawAARPdN2UfgmhBG2d4PJ9KUaTBMWcm9qsA8",
  "key41": "4XfkvhsZ3CSnX9DYEY8AzDpFt8hQne4U6w2REPoQEyLzosKrPzZeHmGCxQGnJVstTTRWFjqmxz5NmFEAs8XVZkd9",
  "key42": "5NK28rBWEJnmrm2d9rSX2UdKbgNsURKKmP8tcLaMYSsJH24HCK5kDAqnXejtAs3VDFQFh3FgWAxXWhG9YBq4F1Fz",
  "key43": "mDV8edoy8Pr1aupkx5tSN6mSMiSVUoNV9yK49zJXbrsg8D5v8PyoasYFgsZ35hkAgvaZ1MUyMK6V9smgPZ5KHDk",
  "key44": "5pbKyMB6gzRk9hZL8PH9DT362z48vrfZBdA7HG5FDEsvo7qbHTaJHv5p5iDPXUnJEAgauscd3xSwgGDx8bkxHC1Q",
  "key45": "2GjtJYUpPPZzn8yEY1jVBLUo3YK8UcQL6U7SUV3c4bVYBYnGm3WKW8yNg75pGa3aKswwU17UXi6KNpt1FFwP71GR",
  "key46": "2Dk22jQt3BXmu157LwAbWwBEqDze6W8ZcSoePRUAF7C1UDyVBZLAexBqnEP4scSyEbJa6UxCkyJM3tC9RHGStyj5",
  "key47": "5PQ3Nm7XegRWYpASVUUSEgsyCf6sZbqowgVhkVTqdaS9cgL6VKFaavQGpA41ncfdjMufwekNz266eY7mnpAdMCQE",
  "key48": "5VHP1UJME4tWNHUpPDmY8jpmPABEtV3bFfJETWa5qisZw8t3fgYhZc6keZeSDUadYarNtQ6QTa39n6JYxKoofUtE"
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
