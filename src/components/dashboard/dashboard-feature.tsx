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
    "wr2RAB7PL6pg9A9JZtwi6M6ZJi7jwD1YXjmGHS6qnJJSW376ANYLfp76KHfD9WaXozrcwLDAepqp499J4G2dE7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a6G1aJvpXA5GN5HyHWm1ZoZ8sHdJZ4CZzFXJnz2v9mMUwXKwwGjYNbrHeRiRtrhbnqBmwngQtS7bmYELvsJR9cf",
  "key1": "3s4r3njDBFNe2onezv2hjs4HnaZK34prmv3mRdNXLA4rrpnQyycLQrP1Ad8D65zVKg6tYd7SNWXmMFK1hsZxSrqs",
  "key2": "3EkWiEGNFE74H4T217YNHEDU7UTg7zd87KR5ctNUJ3igwEQryed1amzPsGzYsWr3PfoPiaRZWQjHcKvTAZuo93Lm",
  "key3": "2eAGCbmnYjCvzEqtiHLzaNhoJRMz4G5S567mv7L5TMYddrPB1TiCV7XUuujYbDM7LM9jeXEmH3fW267ybJ3qxAyM",
  "key4": "ujjrLMMJFz1k7gr8KUq3noRPgx67KQrKChJXpu6McVussYa663b16YZtzUZdUyp672rfTkZSgmi326FdBGKWpKA",
  "key5": "3DSAirqcK3xsbMfTwbb4g4ZNPjuGwYMny2Sno3t16BukUNv6PLXz8uSdR8qjnvNfQ1scgXCkUsAN8SHurUonw4b5",
  "key6": "4ro4hJxa6yvBUDqbHWLKB2WP9FpzQUpuaSWDE8paxnDeXruHhJcycELR1NBPtFjDxnAUSkxo85BBFabW6J12QyEh",
  "key7": "2FNz4uJLMVjeSFbofjH5CjVybY9DMk4biuLQPCjr7XpgbdFXHweCfJ57Nhgap1Z9NUKBd6AZK542RjrvpyVtTWnz",
  "key8": "5XBjr1bLBcnBWFniEQfLJWmb4tzaUiktRUxstdEgo2nwTHnEyYJwgZMSarA1ntRjs63PQt9s9rCEF2oXydLYyufp",
  "key9": "5VuMW2htsybBVECDGVU3mmRSRLM42c27cH4gVzcUJ3ojgSbDFKU6w69n8wZKH8Ey72UxM8cDAEKhmer3JTk6g4ts",
  "key10": "2x8svaCp66oV1Spat7H87u3FmL3sXpJL9cuTsEfQaV3GVbg9TuwNyexJMFtbuMUSHK3Xxk7x2TQXRDNPEhSQ81wr",
  "key11": "5iXgjM4txPNxwKGcg296JvimYiAo84u3Rj3Edc3BktJF61HbnxSC8yEX1mexNpexybkr1LtmbBSdpr3X11MKTEUc",
  "key12": "RdS2Vsw6Hg43rvTRtxB9RhBNXv6yXe3A2J7ZPKpSfXnNndqntmCZYs54PpWZKvZSFiE243d4Ehpg1aHSRZ7CD4Y",
  "key13": "2EnJE6eHrN8s1Y5UpqjUgbywdG9xHeXx5TXxbZmdMzfk98CfywaD4ioNdxAd4s2CsL4s8ZV4TPLSnaR8t4hXApCK",
  "key14": "5HhrYudzA5USoCky9DUUEvq9fB7F8nsRG7UzQwzjdtFyputZDHvjds24MXUPzmBuoSYwTQ3i66QQio8bnoKPqai7",
  "key15": "97gCaaZpBFm3WQPRKyoPwgKYBkbtd2zCszpj9jAVmF2E4HRFCN4Q4jn3ibiepYafhAMFfYvhJWBj7XHC4K4uFtV",
  "key16": "5snC6FAXjw2Fy1ibmy1YxubQAQ24vY3rE5haHKosB7EY1vrb2BvoCKLuTYueqyKBw3XJXRZhFknqZ8fvi413u2qe",
  "key17": "5eCVQgnH3afPV9piUUmC38jZ71JGd1WTiQk6YBEQymZUct8esw9eGdLhTEeUZyY7XTr8qvoaMWmztoQAPy1sab4z",
  "key18": "5HKfdb4Q8QiDoSEQD2nfKn7jwXFHEF3LTfH11Hkxgu1U23qojoEVPb1MKc4SuMm9xBzxwojS2kh8LVrqa4Ab4p1w",
  "key19": "4nG57FfmeNAVN3XQsgrwbtWFAtMMuAbusG5upbuKrGCMvVg9yD2mGmDR9M5EieruyyrhMUJCN8SDoUho98THRzQz",
  "key20": "4vA6VNYiGQXTQz3u8gcz5XVPVxgV4xYYqLxcv2EuwzuqFob5xQSQCvEoPZBhsWejKMxUdAk1D94iJa8ZtgRgkxW8",
  "key21": "2Sf3gf8Q5WxMFmwjrWPjTkcFxbiwWWqudW5Lg86bQi2bgsRt55P6g6pUFxy9v68zwdRv2YFwr7gta77N9cJCkqE9",
  "key22": "31VX1L5BFQNa7E991AoWHgCjknnDWpiHTswhQoy2xeofAzU2hmqgzA4M6ApiGTT5GUmNgYsmhM6n32dU3mDX6ihM",
  "key23": "9kCRqCknPGmQtx5reRR5akTKPAKApW7Bs6hf1MrvtxfksYhE2tRTuMdGSXe2j46Ax72kDbAod6R6yJ6CoQgVPhA",
  "key24": "39iLGWse5tvXjJj9RLXxYpcwwZfpKieQvjLffyQdAqGFbQDNmimaxQDgJb5FF4EcjmpJkpMzNJbUNUc9w8GhBfKk",
  "key25": "43t1eQdprKSxz4UAX2QzYtdQ6TdNZjdA4eYyu2jff9xF6CMeCijpEgccCdsh52yL9KdG39sTfKrMUJKe8mXpFeiU",
  "key26": "37wsbqyZYBQcvUuRBTPzrTKM5ULZpxUk73GFv2FSzi6rHq8pyCVZUW71HxT7E8rz9Az9mFdLQnCkadHzimU67ibX",
  "key27": "iKFpXHfkJB48zwdLavRKBBUHwojjZ7y1FW48SvxgsadFwEhAu5MaiLtmMREZqtpqPxpGSmRgpQbRC7saufjGN3R",
  "key28": "NunQNxZWLGgv7W4M19RHNWAngJw2ym5qN4ndBn2DseVGaDpc7YZPpRaSTEXhX7tdajnuChwjxdm8KFY4wXj1KKd",
  "key29": "5E8cvVQqFNwNvkNoVnEQA65DjP3D9R8ur7VtRHfCFQpDtAqk9zn94XHbnEeqVsGSTTjkkVqoEknzygZbYuQf8UPo",
  "key30": "3qtxe5fPCxKB4FVs7exbTbUsBcHZcbc62esQF6C9k8mNqcg64iq9Mh4QhRkcq7E4bYphQrv5KT8bCRXTcEoXHwiQ",
  "key31": "2HV1aSzBXtcqLe6JfMwcS2gBmnHkVyYQagd3nY7w2AvzPeTq3FtBfxCZka3tNiYrYUXZ6NAoForNu9nfSGtUeJvx",
  "key32": "67PuuMYXyjricztjDRibxP6bWGGxMdVkEjFRFWuVxaSiFwVGJHRjqoPWV21UwYm43YrmpkeQLFWdgskGbXcseJfc",
  "key33": "Y8MdpgAPANDhEc95YpDLkqvXyM8umV36wBvg31pUPbJdknq1GFKEkb66yosCxwJoWzoPQE6ERNqQYDE2Pcupdaw",
  "key34": "xiazz9U1tuo5YbpJ1ctokoSPrqLXjRw3ZWFNRprVg8eGtvGcEgdhWAGFgd2gAYvKihYEd9MyTei9R6GRv6bE23Q",
  "key35": "5bWaENARs3YUqHmWNhyrfpgRVkQKJe37F2feSo97mXDUFyLFC3LeNuW1KPP3sxpAffBsw7bUX1f9WnyisQi5Jp2j",
  "key36": "3F4sdm9jS2CEgjTz2vmZ8iC8mz8LLCvNz4aXri8uUrdUu2D5JowS7YHevj3Zb6C6BDQVUBQvNatkgYu7PV44EtMP",
  "key37": "38v2HVAnzgMCZeT8YqTu9ykbN8tE8KREbTiHxKhyLR8xNNj8PjRBaPqTruWVruGemKaTX7gH3nv6QmZ1Xyx3Wgis",
  "key38": "2eErSUs39ricnDbEBZQivi3B3ZDFTRkrTCyEYkduw3McanwGyodwc41w3AnSo3awEPVU2bWSeicMwPfSJCKKdZ7K",
  "key39": "2vdowkTgGw3jW3cNgaPTFGMjXN22AaESdsd55SnTfMiqJQiZebN95t4KuhodRBtiuTKcMMnzvDSdNCL6DWfQNfV2",
  "key40": "zNWKs8shSeCGFh6Kx3CsJDDmX1ab8NiLJdSQsFTb3zXLQNzVegBRQaEHhAEzRuDjUW74PoTEgWsJM1N3ZupDw15",
  "key41": "2o1ruYFhR9fBJTdJMPKAHWBDyQrFpzPgD9fcf3Rozvd3FvPXgQ4JG8qi74G5qGq9sSmXcsLCPUf8KbBfjXCSFjKy",
  "key42": "5roNHu9iuBTdgwBdzmvY2GVb9D7etqZDcCXPz6jtSWpCLCaKynFN6CUSwfcdvSNLx8Y6WkaoyAAtDPAZ7tzhFQeE",
  "key43": "2ptDY5tBAZM6CYJrGtZrJri4NX8Fg7RvLiVLgC3mniB4G42uoUm8S6qoV6hUABHhe2tyM36i3LSw7jTNBiJ8hr3J",
  "key44": "5PzYr4ZnRE1Cq3ELXEj8yUsuwWKDkL9TQfhNrSfD29rqCLPAxTBkZDFb5A477MnZ1XAuLKMBDnSAZSya1KAj8yzM",
  "key45": "Sdq3zPfs94zjbHf8stzCAjRjbWXpCnZCEgQzrhSNjjZVaybkPo7T41kvqTdQBbfjFSFaCw2sNgBA7Drp5T9xWzH",
  "key46": "57foM7pbJRxfttDQw2ZbeUFJwfUjazEs4cMVLy3sXDDu6pBPsmXNyw7SLkLzTf4r47kbbAX8yRBnJxxyGvrP3KVC",
  "key47": "qzj8Rk51kGxD5yF4hy9piVnLXfU2pMhKdnWyjhBxrVuMye48vM7h38pMtt3P71vAhKnVwN4FB9vvJFxqrJNM6sk",
  "key48": "57REPFVi76xCybm823S8DNrCRDmWKzAZiTFunWmJ9KNzv8VNWfhzyV1NNGKWcH7KB1mz9YULiaMhr9rjaCuXMDjV"
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
