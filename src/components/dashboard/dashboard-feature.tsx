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
    "PPudBXxmzyycPUxzFfSnhtN334vWvR8UX7jz3XSd9RnxpJww1f83gno6EmPsTadeEGK1EmEDT4TQhByzKKSMSeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZAzNGLVqayAe9so4YKJw2UyHdqie988z9L7Z69aoD3bHZeXKADLb3y4E4Y9y4ZbZoTEj4uPjV7ywUib7xEGLvvP",
  "key1": "5ZeHKRptJki2fVknztCHeWds5YJT1QFdjPRUaPzENuQZb8vfGAkktcpA8YP6yUYXHTSSdM18k1SWBgURDxc8JasU",
  "key2": "4PRa21Qx1kC2ZRGa5K5HvbFCdUkEx53o8CxfXniaMu11yRyVGsK8NSjteBnnAe7prDXWGMg6eGA22FYEbZsMEzvm",
  "key3": "2uq5u3kPextysWLhzpG363JwwDLeojpvamRgRd6mEmhxoCKsVTZFznrcNdPk5EqTPPSUqxh8GsDVtRyYXF9VCxYm",
  "key4": "2FB2no1SdQKhXbwrNNiZzrzjVCjSgTR1nucC9HFtmdu54cuQgbM4n9RWrYr5DbL5mr9zqFaW1v76714PdGQczReM",
  "key5": "5h66kHNkALArqP1cBEYAoej9o2JMGJGspLXUc7CyE9XGMLi29Qpo5945JR9f2iescriSFTZVFtEQF2Rcrnmno9i1",
  "key6": "2NxeUNw3qiuwww4mgsAkFGiwWYkpBM4LPgSPPmeadZxa2ndoWbqGE6bgm3UPkeE5KPG7qaVjsmqmQadAsmMzWpNY",
  "key7": "2u16HgYH6QDGBzJCopttYXoiLQUzA5HZAjs1WL3R2oxF4sgynb6z5rKwT4qvSLNgLiBhNseLTVGbm3VECjm4JBhz",
  "key8": "22MYByXYw5soWPx6ut4rr9psxiucHmpWT6LGUbW7YohRRvk2dd5WjyoCm6swLzmQKoM34nMHp3cCSRFG7LJb6fdC",
  "key9": "4zyLnKSBgM9yAuqi7udR7psfABxpdx5V7MssoXoSLkTpS5MUb3eDpwyLgVDAmXBhnwXRyJyC7EgE4kYCCqKe5Z6z",
  "key10": "5Phakbut91SXbvBZpTJpiULJ3p2bRmYCkiyuxmHCd8oFxyTqkfanCEaAjEecUcjPn2tWoj4U2yWXV2B6pEvhiBaF",
  "key11": "231N87QZhGLq7393N5Dsfg1X3xBTcYRuzCRByHnf7fGbN72fVAe1xPuL3wTuboV7mpqKAM3HQqysDf1GYjUJuHCv",
  "key12": "2QCDgK49F3gPnXJexbDWKnznRK6AQT66knSv8iNf5SThXtLgxSR7akuDPKyMycShBgN96wcU34j5aDrzoxhiELQr",
  "key13": "SYzaX7G6c9SrVbT6V2GYo3En786sVVxAgo1Cv9KdsyRLzLHzoGRfLYjBLMYdLBRkD2C1b1CPJ1oBBGjfGy7mwd8",
  "key14": "X1jgtZkvdQZzi8XMR7c6F8e2NVmUkjc1gYD9wyCDg6YgTBeTQgF4kUHGWnET9u2J3im8uG4sV2CFPi6ButC4sox",
  "key15": "3a2VAn5FhLqR59BUczsmYyo4eXf3xPQgLLWxwk8yv8PrCP2b1AkEccwdjgUCCEnpA6AxCvsMCK2FjMknCNsVAE9a",
  "key16": "29qji3i35AdFauqTWQ6n9vuZLw4NiLUpcMACFJ5oRZ6CCDsDbPnBUXm7Eov8ascERgDjVmm5DRFjFK93mWhWy9H7",
  "key17": "3gjmK8atg32iySm3xmZDoqqbBgN5o1qJHv6yqGzj6m4RZXkuR3Hy3fwPMNdUWBt3t2nhFu29gSw7zGrSMmWptPuX",
  "key18": "4GEHchJdcehHXuZd9BfRsGpiULKttsLrUwBnu4cWMasgqk7FEX5czTkFz8xdeBNZsvjsLVnsUB2N8yLDVmnv9J6d",
  "key19": "3cdC1q6b3gXo7gcgPdegEPVWmd4JJ83m4uDh51dTH4cJUmVvoQYudULijJ9aejU4eyEA4RQn399ZFihvuJhBvDDk",
  "key20": "2cuZQsiepLd9jdLrgWv9qHVpTJhMF2UU4pvtpxzvWexs2SwxbCZHpMqxkYHJDB6BEEvBzYedKfGh4wwJpEjhCNLg",
  "key21": "5m768vhahqETq8dTdK5JqmPhWoAmQTCqdUKbdtcDMRQ1BPred8ojuSR1A6VDFptHfeas8cuWxjAs8Z6ZBL7ypZmg",
  "key22": "3SMHf1X12g9afgtpS7Tv35x1AhRi4h6ygwEuJqNWCeJDWbhrvdiqHMrdXedtuojHrBSYtSY81ZoJ7vmQMC3gMSRH",
  "key23": "4nN9brezdBgMnekjpfQacYmEprLcwWA3bhjD3ErSDpQaFnZn9Ef9u5sTpYkV5X2AS6wmRFMrD4yZaHcNybV2eGyj",
  "key24": "3UozzvD8yPYwYzuHsGVo9TQYqiDnqJLoEEo17kPYvZSbhJ4udLxWjNy5pigKCgoVWTUXY8t8y7cR6bzsPumoDkM",
  "key25": "2HSq54CXwnSx2DwxvJW1oDZWB5SvnAYfn63qavp7NqzesP2aKQ91xPbFjM9SXZGK83bfFW7uCs12M1jsDAHfQhtX",
  "key26": "55qArhtdESiGTUprtCyCqkw5tTdRXNRBwNaF1KNYGu6aveUU1cZnX7AY54X3BPbXK5RN2uyNbwNimNzxockfWaVz",
  "key27": "5MXdEZcgUindNjrPSRGZWc7icbbDjHsRvgWEYd1685cNfqw34sV2tDwyTiSAyu7J9RRTxRun1fcjo9UCnrH57fs2",
  "key28": "3JnGMQ77r85Kj5cQh7pwYC5TEYD3ZvkXhJxR8myXZmqFJEv9EccfEZKkLHtSJZYXcWiepyUVDa5oaZKd3s89MqUV",
  "key29": "3VDk3GwXbhX8XCBHy6GenbcpA2DJe4e8AyUHJTLP7rNYivnh3jE5psXY6Ne1UNyiEfAheuzQH4BtcvUwsAeSMWg1",
  "key30": "1nqfvusBuTLbFVNwrJoTENUUNUWqnAB4RFUhuifVzB23Fr3fGBiz9hucdhNQDh9djDgfBSiGgCNs6pNJy2oBrJ",
  "key31": "4aWHPEvkjDpbP6XssodN4hJbQTNKKqVhELJHNYupVdsPfWmJGnoSG27GwppFhgcdF27CSGxjgBrZErR8MKc6ZzWy",
  "key32": "pPy5XEJAM2N8VDduysUvSSDUh6VGhBct8RUj4TnQDP4dqYPLrPpr5Lqphuhxx89y61XxcBGL9Fbr3wii8fSPWBF",
  "key33": "5ggHVKYTN9n4GS641wwZJxrVQkfXtmKxaPFzMKayq46XWZqPrUGvdVuZzFCANW5sERUkdhGbYbVDvCe9yHGVWQbG",
  "key34": "4ToJ55f5WSRjCCnqxokAP9siZpzfSqn7iNdV1gPM2g6wrKpBzPtBkjdtP6sFgJG6yh5YTdNtG6f78nDhgsBTWasC",
  "key35": "5J1yyYWJmgPcCjdfc48uPQnycAkVNvdfngRTcDBhbbx8EMrpDhGghwpgcqbRNg4iuB3CDeks9d1imsBgP67ADU8B",
  "key36": "5M5kTPh3XqvFRGwHwgS23FAwJxBwaZVbiesUodR89dMaF54CJbSkxPvaJ6xdy8P9XdSSycBPze33SDaPZBhcchic",
  "key37": "vQctYaKKq9a9N9BMq3iDzMAZpesNTASyUssg2PSqz3oPdbq5PTExboM3EGcgmDo65sk2paUjFAjtZGEKyezmU1J",
  "key38": "4sdutWdRk32d16HofeNytZXqNooFAswFj8pdsrCEgP2c6F8vYBGLKK3rJtLFqfM18fPfyCBVVYy4LihWWbUWr68f",
  "key39": "A1ybkYBmjWb2wqDL8nmDE74tfykXgbyYX8g3rg9wBrkkZ4rXbSLpkvm6P9EEHPA3rg8EnJ3b9feQBBzrVf4Msq7",
  "key40": "3TXxTAgYcvPq2n8AfNW5UYaL25PYgftH1F629YiLGZWdxb6Zo4tTTnkgqswQmSA5vdLpyxSNu2uuP6uFzGuU69jM",
  "key41": "4CvS1K3Gg4ihRrEnFahczsqGmLtGDEGT8h2doRinxkx5SgUKb5Pq4nMd7a83BaM58eHoUEJN3htCCXLQt6iMNMYF"
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
