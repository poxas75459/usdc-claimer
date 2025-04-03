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
    "wo7wi1r7BpsUGCei6RSfGsmyTNpaiva1EFKvMgAF5NakxJDzaRKgawuLiRN8xYSYS8PCMxHNevmRaMvEGiiJuo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TxiMk1mGKv3ZDKPn69LWFQGbq1dpJWe4pFUubPvRGpnXVhRE65vjmXwJ1oVDos9EJqYxW9YPs84TyF3E3mbR8R8",
  "key1": "5aodz47xhCGoqHXGCZsdC31ZTTqg6pKUCCbz1wma5bSNTzip6iQ5L8Pu1dvDYE7vqxXdbG4PY2pHysNmjkMkuC8p",
  "key2": "48yBjVoRFo52m2vvtvPJcwgf1xxJztqcFcfnUB2NLkpcPbjr5XEHkdzk4mJZ7CR5Vs9yjkvLxqv41Bo6Eibf1rKf",
  "key3": "2ybufsytwgYiYbG58zbGt3noEpJm28TvxeNrd1ZYS1FfWnLRC3HEQSSQc8bPKSo3P4i2LZQZJbpX7SFQFdQwhamt",
  "key4": "3jJAzrxGwwJyESre73zyu2hmYyvJdPgzcKwNChZvJPDc56khtcV8dGm8oi1a7NL7mJG6X69qmbdhxPfFagMDEbfL",
  "key5": "s5Nuqgxg8SbGkzvxKLPfa3SaMyyF9cg3BSvuV1Hf73Nojp3ojGWboHeWF7rTuKNGujEgSHVLvGpML33XbMabezE",
  "key6": "2XNkzAvjycvmnFbT4Fs8tFczveBTeNeNxk7RPdLgy2KonJKBkDW3X3188Vvs8ZwpyVewubspTwERByAULNjHUmxv",
  "key7": "4vY6TVgLMF3LLV1192EjoP8U1JJQhNzkJrzZ7Mt2sr13CJXsZtBsPbx6RBfodfPo9p9Po2195SVWNMGqnoXNJdzR",
  "key8": "q8wf954kKrrKCpxBzTGAb6bnCSmYWxgSH6woevqH9qbKF6kBy2Ew7jHGWd65kWHueG3g9P4CAPbVBpEgmqPCskJ",
  "key9": "hWeeZnidtbA5EuhuUMPZ5HHtWr7c7Ken7M9Kbp8KqBfh51sYVyVDGSW3MuYWjp5BX37gfJQRo5QU4tHteFGRZMe",
  "key10": "5wq4LPn8CUN1iRs3o1ASeT9UBNvnEuMZU39JPXvvdMioaJtz5zTuzHjrKkMCvKdYtYdyiRrCZDFAtRuWLgdMo4rY",
  "key11": "6ddFVuJk4XNNnTZYSvhqt8Q45VMPMMXy3Z1c81GAu6e8ZrmPSXHidAPe8DCU4gbe8ReMFsnZGxZou4cdX7ZMnHA",
  "key12": "5bvHUK1hua1BmDECu1s9fQq5zJNWQgyPKbpHLft43X1KqHmaepxUKtdqXV9KF2nyqeSgqYGvq53iN6Lh7FZRnjmm",
  "key13": "2FQtkmUvSVC4fHHf7C7qhKUVEBukoXMaeLvAQKgNeYFedAydqyxYtbjmuBBX14qmKRTD3uikZhtbheUV8jPh5dTH",
  "key14": "3LN9WoFmpbF5J9QovKYgYSV9oiX28XBt5rdtZ1krsSCxFHAF9R5sxKo6cYMygVfNmQpnpo7vxbs9THWEhtPp1Lwq",
  "key15": "5gWPTkt8XdxYxshTi7fhYj57DMd5iZmLLFvXLzkK2Ldz57JnqDo5ayNqBTF3mtegUFVaJnUSTd6a4BjPEGwH9adR",
  "key16": "3fqojq2CgXRAs92estyyJLAk83PnHt6XL6mzTSyRbNquPQuGoHnGuVUThCM1LqRWp72x6goAUtShwZzY7wDmxdkp",
  "key17": "gTHPPbp8JVEL7cDay4n1zNg4aBigJBoXzGZ1CNzMje48DRXfoiHrPvWqd3pgKoTvWTKHRKnqqY5AbLsFbjMYZ7d",
  "key18": "4W6TgkeMoNoodkxtzUL7vZtYRrzyi9mPaXm85awqsN89oNxyABYx83N7PsQEFqkbAt5KNVm9yLzZwGxNgsBuX3gi",
  "key19": "2TcH3LxskQhzL4Bwg9bp9mChydMnvFZsGg8YRScm3zE26wtBpgwFvq9QoF36kaxbjk1wyWL95a4AaALZ7KYQcZLd",
  "key20": "61nn5pzkqANMYW7wyurbs3UXBWTHoRSZi7KUCdGXB2EcmzPvq4YEQVDSex7RS3UFmuK8358okbGnvqV3PhAXyYG9",
  "key21": "4prxV9ueCRZJwneCZjwzpSpa3RePVU4Qa7tStnDgGtvAG2oMy3E6xMMbpj9gggPui839BhTH8ykhGyWNcG55URuq",
  "key22": "63Pwvhy3mDq3jtH2GaL6xkQ7TC9Vn2fymydG8HqBsKg97Z7tssMMsLuJZY1oBP27MPYaYCMoXMh2XYfj6TkyzQSg",
  "key23": "2iaEn4X76smB826w9RcSBwGAsrsJ1w3P9Y3do9TH8x2Kzte7xZ5LUoCrgcdjNxNVqfoXtDQ5pxEQamxuoQ8L9amP",
  "key24": "8fMci1GK1sAuNBjVfwWHjWqFLGAGk5rNAq77Rxzd3DRgQ3UARJpkm5o8vyuhff2iREyd6NPeSEwdcDhP6ozzgwd",
  "key25": "2EB2SUb3RAgLoLaA4peqtvfRYWWLZQ1aB9htp5qmTMmVhnvFhtuR9pbsukesBhnyNHdDK7tgHN4LtnWL8r1f5epi",
  "key26": "5meJjenwUZjCwBDxzSwawoCod9Ps9AMe44pJ8BT8rR81ykgDGiWmDgPPtggMEFy14AwC6LhJzrqV2Z5ij2U2333",
  "key27": "5kBrtB8kM8JxcacxgrHGiBjXsJ7cEk5piJfv9tT73t1tqYY7fqZ5gq4g73wK6Ad4VGY1cpYAcDwQnavtvSV2WxAf",
  "key28": "2hancKms4U6tHgHonq2c55gt5gSm3savS7KsJEJvTfGnRiV4HWKuHheTeBJRWFEYzYre5GncCcKTfMRv6fVNU1j7",
  "key29": "2ta2QMy4xG8U2NiJoEwJpbXC8zFQ1fBezL68rzib3Cn6E8i3DMLWSxu7Q7cVjeEzkyaxsA7TdRSDH81H16brmi9Y",
  "key30": "4AE7xN338aYtpXjeS7LbGnLPMwuR8mkD7WkbKPWto22Cdy6R5cMNjLeHymzX9GGUAxr7A9dJv61JhfVyMLhpYipt",
  "key31": "42B6hWE8tQSPT8C1mKC5YkLTcXybFKbB8wTMQ4iKawoT4WsEveQ2iKZoTtDKPAYZdyVzfDHqteVgUneFh3HG31Vi",
  "key32": "26vVUefsrammSsYnKGNEMLaqJSdu82TEwRbZwjZ274xHj96xnmA5Pn7NADyE9xqp9AgJjXD3ZtJWaGwwHgs5bB65",
  "key33": "2hQGQ5uzGxAfqUuF6X3TiAF49JmzB11zywxMna8pzGw8MT3JFw4zXxUcs2SrZa1gjreA3XWtV2cPgArEZU86MEo3",
  "key34": "9k49vXZUbVTXmPx73W32igP3TuirdVwKSrcdhWf5vtr2mVzCAyiz88gz2SGhsFaPuooaZKyRwwZNBkWjeWTeeZv",
  "key35": "2WQZpAF5dCasVxUNpvbHEyCpWZfphH1ti2xVN6MQXKsE82DJdjbH1hvWFccw2YPZ1Zhs2vciMesk2XAGv5NvDNyb",
  "key36": "2B4i4qR4PWwkxotebBanwRQx8GwAfJZcXLR5vZGx8LB7Gqr4oZVUe463PGWCA2pwioPBsssF9XZ8rHotSb1wdxr5",
  "key37": "4CKvgXdzyeodNWgavQJMNdq5AREHRKZVci4dho19Df8aLmRvKLEtzhRFodPBLKDhbaxusqVYdh3PRrrcaLqoo6pi",
  "key38": "5XYawHMXjRBvA6cqNnQ3jrfEJeqwkgS6kUi7oR47LY65LpFWK18LScvie65YJTJtU9AdPx3i16ZUeGCuaK8L2Bk4",
  "key39": "3hboMdPZbQUrQ7yPnMhmQsNPPNCdCi3BRuJHdW3H7cRcyuDad7sqbTtDQcppnB98AM1DinqXgxV2KH9vVWZ7hct9",
  "key40": "4SY5UKoEsTcuuHYU8bJZGCwLLA74p4ycjeSjwRFBQsyV9X6mGWKySKfzXVooeH48rQBK1m39kdi8SstctbTk8A23",
  "key41": "3ErtMzbRWgdhQfztm2EvFEngcbWPN5gjh5ddYE1iCPC8yXWAsraMvVWvLhuEbprFVWx8RwF8x2Tcg9phS1Va6wtW",
  "key42": "2nTBVxFqMDKF6E5ai8VDNZAC2nud4JbjqMJ59HTGigLbCfaiYFQzLvgM3DVRXZVxExuEbshTuQi3ZX5svWsnpW8f",
  "key43": "66pPv5UQh1X4p3CGe13vrSkxD9aaZWewDNKcRoco3a5XPNps3QiRkiRv5MfxhpQKpyPQW37JJdB9UQzm8oLskZzX",
  "key44": "2WH9tbLmaVc4iZxngw6xVem1z8vkfFokPXyxxNqpNzonr2es2L5gcfAy8HXDHDzpj2vbRv1vDY4tW5UvBmsP1eA8",
  "key45": "4oDg2yBPEp4E3ToHLyAp68SCGZCkMhu5hhFoJUTGzMViVdJ1RfpUjHMGY6C51DmMzfXC9fABJwNBNoHgXGQocz3C",
  "key46": "665tHV6pd7inxbBNTeWyRuinLR3DLqKvRftoYEZSz8djaiFa6xWiSHBQtLatiJEsRLXvQxF8nAfC6s2VuDPp1uHK",
  "key47": "5ZvGm8do5fWtbeUztAbeTtBPd7YHxGx1AM2u9T3TtLmx6bgQYgWLvkg7fqB3nU9znJAFdmV9CcccR3iqkvkXuTCe",
  "key48": "3nTBvi2eAxYYUVddxfvykCR8HkFYQchvTF5BVKEjPbc1Dj3oeQqhWdiJx31uHZDH9odYVztaMRqGNQ85NCt6nKsp",
  "key49": "5dd4kYVoyV41AcCeHaXaKPawxLUTvgXH4t6fLvvjNiPto3ASwqMRqfA1rRk5AzQV434tbYoiRDHZYzGMsdJGhwNi"
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
