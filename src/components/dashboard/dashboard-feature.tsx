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
    "2C7PQy1JC5hU9X8WRev3ewcCjyhau2jeWDxf9C1LMa48YfZQWRPLka9nzbqKMk67adppDzn5jBVAQC4hdcCM4927"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h7FNNN2jBXx1upsccwc3EMwH4Vv7pnfyscNYrqjiK2dcBHcButumntmdfAtwjciwADsPRGi5NbBeqKhbsBHz8iX",
  "key1": "7u9Jb8CdZMDsyHw9WJMn8PHL5BpXDvYpCRFYnrmgL7652EWDWUdNCH6uKvbWhXqt5huGgWWuvDxQ8AzarXXdWrN",
  "key2": "6ss79NZeSPC34vPj3y57btwt65a2rvAFoDbncVZM23TL1ywrYWo6r3FY1vMRVSERHG4tModXgsPrFw2B4M7FwtS",
  "key3": "C9BSELet9ae3oCCnTb7NfMJa65ZDFe6FP2ezv3FWRb4C8Q36PdXWKDbfUu3sSdtEJHmDmBmHJrw7oks8ARJM6g3",
  "key4": "3GFVQH8hpvBSdCGXyX4mcKVzBohhkNijyyqmQS8drMw1UDWCwj2H3H7WZQj8U5kA1QYDCSbMc42HHNwVFwEJHni7",
  "key5": "R6YPgJTAbR4Uh4HkhtzxcoecCo6g8H9ApeoSmmniwPEkB9R9AuhdMqYXj7BxMbuDV1xKNPD49D48Qt4g2Ee3zeS",
  "key6": "2e11bHdWFjyDxpSCnwtuM9K9mktF196DMA5n2oKD7BQY91E6qmH1GDCTB8SY1VV8zvkyHjv5NDGKnY3Ko4BSxdBm",
  "key7": "55KpdTq7qWXKi7KvxvXzEWtguRatah7ZfdxCHPfaGZmbhfKqAMyVMF3FuhhKPHJJcUgFXa4MsmNWzPTLFLcuBwDx",
  "key8": "34kVS1coMx3QSfGJkdP3ML3abZFAJaWSMyGupwvp68QXPTh4vEx6LtCPAVBGACpKjdBZ4dmHYcpbtRFxQ42NhrFy",
  "key9": "2nZFGB5W2PuGn1USDWD78kqt7RcDgRurR7E84Z4EkEetDoYzsrDWVwtRvLJJ2KFbujWxS7khx8NQjy9H6WKqJug1",
  "key10": "2X4akAKQs1g33d6oAB59CksVA6HcBJoPVEoNy1JRZPfdto2oc1qVBLdBgWtryfytQj6VNgGGjjJE15XsEyDtn43G",
  "key11": "3PyWpsunt9zD3ZhvnN33CUgo3BzFXgck9xzTkJ4NHo6tpjCo3BqPUsfhLmFEby7a8zbxFUiUn1Uo6KWZKRavzDGJ",
  "key12": "5vPcoiibMT1Uk77oL17pCYyGbyso4h4zRvs9fUy7NpJSbjHr4TV91dgzaVPPhqqf8ZqGGdZFRHfKDXEWwXbz4ufH",
  "key13": "2XnagcgCT4Y9wbfaDmGkYKTrq2BEThUEzTuNhAu3pccFqpfrojaAZi5GwEEbB6VSNRRbU7xTeonoB5r45izf8yyv",
  "key14": "4GJ5WkuD8m5JG5CxtrcEULtes7Mz9Z9WjHXGKjhv6sVzZsy6zGdNPN9deF13PNeHCx6nNLFBTKNF1DULoqd3FtS1",
  "key15": "TUBCk213eQ4yDzwV9cFX9Uc13eVLJCpsEfhZukhMy1AnQCkPSsYbaRMDw5uT5B8JZx3ecAmMDKwDtmm4dpGsNZa",
  "key16": "4P2CP6C7r252cCaGjV7pGqzjSyfQnZ2hrBp2N6hLzurANUGxVctFZ6KbggnmerZATzXRgKp6nhxicZ3mksjAnQcB",
  "key17": "3uVN8bBaibM8ycwtkrf9cRGdnsa3GHgyG4vBAmCbQKYgdiYC76Yym6iKaAkTReXWTb9nv1hSUGzTAfVjcytuZ4WD",
  "key18": "5vhFUv257Wyf1R1ZzVtA3uytRo4YkrdaLiqRiDScHNKQ7UT5o99YumuLwbQvu9kKf6rLMq75peygzzAxwLQrx7SX",
  "key19": "4xF1HnVU7nEAjv16SH1ibRyVyk5Yo8aBtwLUkNXes8rJxnb9iLpuGRpwEwM5dfWfT4JfbqCoEL8DftH2a6JXDj6T",
  "key20": "hMy5m7qh8sTqwS1oAQ9k8Li8FiKWneEsP7DTkpe4BRDYeMBBDxeJKe9KxCkf5Jh9bK7Brz9ae7XLvLk6nA2HtDX",
  "key21": "RdtY6k288oQcbd9pWuW7cncrhwVrUtMTDAv9CPZPJ6j629q9J4KHkMfHW2ybVEJYkKFd1sRUnQKWd45ZeQ7QFXt",
  "key22": "4wHFES5Vp4Jycxs7Ew1wTC1vn85Nsmgfdi2hRJLR6s22qjWmcTdzDDf4S8KUgyLZAasdJ2BZGP5rS9rfw2vuQnUm",
  "key23": "5cBNPqEW43hmRaoUpZYBQVp9eR7JNDsPNpeuQTyBCBR19qfQYvSz9tcSRb6VuKFXUFczfjeqMuwbG97LmJV7Xvv7",
  "key24": "3B6pjWA7aXiVLyKWmHPSKYiMW2atB5LKv2aAL67F2QAgExAEV5Wj1MytuzFbE3N8SGHFVbzdRzU8d2HsLodC2K6",
  "key25": "4NUCPdbnwYjtEFKSpsgYec4d2eczXaN5nRyV9zWfDg34y7srDqufy3PsytauvmC3H23tXdwUqPrVZRBq5ZaKFxyF",
  "key26": "eiuKerA1jpJ1ocaUrRohqxEdYgvDiL3MH9wU9RCL3BxovojZUuf92W8EJA5riuETCxaaPMEWaT624RbXSsb99Y2",
  "key27": "dgnTbdJ1q1WV27Ct1GTu3iHC8BExSpj4hbVgN7m7WhyvhwDWtpHpAvramrwskY2mkiDM4uBrYgRkZFYLxncRf4L",
  "key28": "5hkLT6AMxpCwokHc4dXPkcUdnzhvUBhSUUGjeJs3NUe6uStmknQBnvpWscup9wwcTZyEVSnTsfaXkyRb3MoEcPxA",
  "key29": "29J9Z3zstmu7ognfhEis4ednyyt1pHNAebE9tFn6PTWaTQzi69SPexc2LfEAVr4AyVJ58Rbr6iZEBAfpDEJzQXGx",
  "key30": "2HXtis9FbCMHDYx8ZuEdAhVHieuV4vzMhkbJnCiqWW2VYWYSP7QrmwTdmsMLZAmvuQbpeHwcv9myhGfw4kmvugtQ",
  "key31": "3HpXhBGgoMXDbb2B88zq5nfYxusmLmMyAJqDafUhqz9pwoLVKQoV5XT4qFPPdwDd9Y9TrwVXktj23DHobyZ8bPLu",
  "key32": "Sz7kvpTr7erBCXM1vYfi7Leqxmy5W3T3VXGBqoYzi63fxqebh4TEZsn8BwACympP7eNk4xAWwsLo6rSJzpPLCKW",
  "key33": "5MUTkiHGacgJ9UeXD6gPyJoWgZECtn7b13xLrYUB7QbsfiFy49hTapzzgSHt1tNQVWKeEocRUFFUriEkpbwwgwhk",
  "key34": "41yAdPg9nxaXTSAFpvhCwprh2SeaECGDPtqSzjcYuehEMjmyg47KzjYVhaXXNwZwYS3xQirevNLjzbcKiJAz8Mqs",
  "key35": "5Xn7Zo8R7xwam5PoeLkRydMXbnBPzVECoqZUKa1wUyyVdSZaYdCXri4bbVJJqhA6PmjJ33xwUp1oRyFz4UrtK21N",
  "key36": "2xjdJgwKsm4qa4Dfk56kdiPWaCrnh5gAxMUbMggawXNS6o4pvCeVJ4jNHwy9deiupwRZHvQwKnpj6EP38DWaQcyq",
  "key37": "4zWFhn6fDBcetPc38abcYMWJBgK6w8iV7TuVCdR8QGrjXVP9DFYcd6aPmJNioRCtQLTUai3AcuFqRBAgd4oabMEs",
  "key38": "44oBoLTSUvcGTbzJ2R5JH46KAbJWK3gEBUyTzNekio15xr5B1QqbRkfvGxWGSJbRPUTUJrCohm148PzFmLfZ9UG7",
  "key39": "4sq5F7ZRtePyXXko7EkT4b12eBjMnySsMknfQuPxM44vG7Ks6SmVhjcu9SmT4jSPBEET3Gkp9pgKfRUeqNAE96h9",
  "key40": "kZgbxmjvxxt4aLM4bfb1t64fn17qKLT54G1cRPXTPFL7bbLJAdPdi2HrZKV7mbn6JLopYgHXxsppiEYWeAzCp3M",
  "key41": "279ATj3Sn9Wmh1TLnEWnP2yUSQuSnhTajXWCqFrbUTCFiPnLb9tpNiSwYn4UBHdHSJ55gDrK4hKPyzJGRKpKGbWt",
  "key42": "4hv7PXNhmdU7K5MAQPzN8qcT1CMJv2NEtkCsYeap7bsVZ3QbieBUFfkor4uvZyasHauyuzcCiDpxwQBK4FXr49dm",
  "key43": "31VFQQ8A8k4KNW8Z74wa8zhxN9Qr4VXVxNjav6QAL4987urCvGcFwzPrgGhqNtojGAZM5SwjCGmj1S62w3TuN65J",
  "key44": "2hEhsbdtmisGBFcbuHuwuFL8mK6UdR2gx6TypW6rNzCvFz6QcUVdSdPErFeDfYJZc1q8o2hb357TcbNRp5cNeSYN",
  "key45": "3Ne4siqogiadk1F13V1zD3aCkW8bQQogcLWBXLm6vEjnPowQth7gGNNs1ng6SVpM1hxBDJsmthqdnEwe5FDWjg24",
  "key46": "4i9r52LVUj6gsg1Stv42F5eWGe5HVMkE6ygD68kwHRcubmN8eQRxZMATbMFb4mU77eoQpqaFaLtp1GFpRkMTXb7",
  "key47": "3JBXKa6fMjUC9XE3mmQhvugNGud2jNBd4VTdVQW4v5G8Z1SMCTcVdsWMfuSBuMQ16NKoPfFAMf6Ru3vu7Lq3xJ1c",
  "key48": "2F46zvkjgugAETe9gZZStJ8T6HTXtsyAd2L66D2x9CkbTQC2v347DJTeeavN9vcPZGFWZLjux8ybrjBTrkn5W1Ct",
  "key49": "2km5ssswsmR8fuoaYw6i4LXfqXDDeXj8wmZaPB17PCq1CdnQ9HUSUsGrt1kjiJwPDz77E6j9Sbr4Xg2dubXh4mTD"
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
