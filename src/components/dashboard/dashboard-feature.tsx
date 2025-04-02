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
    "3ZB1nkgrFasQM9uWyYLY1paaoqMn91pY4q77ZRxv8ybeFBVBLLdq5LPtbmMxfuKFsUQkYsLdmZJaAAfDE7gmfJrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnuEnCeZ6XyHxjrCj3Gh9avXbbBMMEjxtqhxkQyoHsrzWyiCLiPTgmQpho8w3a1j3zsxqDnssiEB5eDDKLKgE3z",
  "key1": "4XGVaWq8XhmDUnru7PJjkzDm2gWpWRRSVwqeTrPtub8eSTWrGZJhfYtYZGt6CBuMR6CdH9qpdG6QmsiNm93DphL5",
  "key2": "2FN9uFMpB88Ys6GXWLPV1Fa4BtBCnD21uPnUvKX2MsgFhHj2d6MsjxcPiitjiH54fKGZtc23Apb7EZBbTeLcLCVn",
  "key3": "2sbJ233h6GkAvfA4iNtKCL2J76JGb1254tJscKKPXPuHUo27hrsTN5xVgdaYQgDjXAed5dQV1fmW5i7Y6kJ2xraK",
  "key4": "3F6tXKNQjz3dQCP66rwSCbQyjjBHZ1tm6Xipb6PGwf7ApAxjpq7DComtrPvTwec92HYRTrbbH2yDKDHsZC6med8U",
  "key5": "2ihzcpESsn4yNUc5a7RA5Zc1ehU8URCLw2M9RpzNuKRDVgNgCvQ37n2g4fFZKF69VDdWTMEP5eUxX51RYyGjxitK",
  "key6": "QhytRkFU5uU9P2igqAVX6Jj89AsniqyPXUovLGqnLtoCf4ZyVXi6ezyu5UqLCzSVy9owP7W7PtQCQWLMPxaYovZ",
  "key7": "64smhEA34YGV58AuwjRATyeH51nDCGuUiMWJmJo7n3tH6FVBJsUGe8UcJkPS9V76Pe4n8kkA9whzcmP2hgCqW1Fg",
  "key8": "5MiUkpAZottExyPkzUccXuQU2EGFV1WpZx924Cnx9U3wVjueXJwGGUrJQMFHW5jxkK8DTDx4iR5UEKMwRrRrYQN4",
  "key9": "2VnS2fHwx4j7cwkQeiDutpvQg1E2YgLizLAsxFMoxo5oyYCewg53KR17bsXGJ71yJixHowcS6UPSoHSUys95cWg4",
  "key10": "55i4tt8JjNAG43fTM35sCtYCLs9R4JTkPqBP5y4zfzChnMKqYSH7KpvpJ3FTNC3gbgSAEb6CjJ2iAza4wdZaW9Ld",
  "key11": "SgH6i4drfzfS1ACyAqUT9Bc6BpriDNp6XbAbFrxho6TqEbjMw82trCRAr6FoJdKUHwCdAbVWAVBfFXBzs912JyV",
  "key12": "3qkDRXEtZvbbpKb5hwqDUDpkoPm2FvRPoTMCYxGB4DpSPdS9gT3LwJpQ3mx3UoiZKigxry7fyFWFox2Eq76uKiDf",
  "key13": "3xRNEuAxEDYBaf3gp5s5qhJqcE2AimUFiVugNcFM7Bnt3aKxodC8hR2851KzwcBMJEUeKyGgvrw1VvEi8hPjtmcY",
  "key14": "HZHrsA1xRnwEhBMe5oZ5GdjjWXfFdvDRce94wxU2uTmDqQSve8g6fKN3F3gvoZB6DhnKk4iieKbGgCuuCJx1W1R",
  "key15": "4PsgasB6KLxZ9gLeinp6NCUJg4ttCZTBPFWbmYtq5ZCqy7pY5pELxKpKHzhhB4GGwWMAAhPARdJMfAijSh7jMZmS",
  "key16": "43J27z9oN56ScUJpwemA7eLwzBaBSsSBgEp7Z7JBKCqkCp4zqBw5md54RAWu8iDYtGLVB1G56AppgiBUERnrhm6w",
  "key17": "5czewa7mRkBFg38Gh648H4z1eyn3y3EXLZP5UzrknuKdLhfJETETVr5NpfD8qr7aVXM7Q92QeWWbyjMhabnoZMnW",
  "key18": "4tBeF55prpX31njwDXHCE6c93rvbbfXpnqrrA7xzWV3dJfH34gsZZ5jQtH7qyxA4V4xrvUnrWNpmPkXhZMUSVt7X",
  "key19": "3Ape5uRkFp6EE3CjN18qwSsW44MAYhkb3UxxCaHZxk7CXSrtLKcX3Y2a1wzEjJFRbA1cShb22cxYrqvs2qRJvn9f",
  "key20": "4ZiB4VXh9WfSi21URM5PDNyt56JEyk9Rifcbn4C7uaXhLDwBU4P6x3W95ysiNFvicc46RwQ3LxYnnDomZ9q8tcPA",
  "key21": "4wovzGCf7TEckuucdAxWgWopcue5RfzxmcDy7LxYrS9YKf4RmTv3SqntzQezFpbLSoRYWeDwFSM7SyhpRPuZmRtR",
  "key22": "4quTqkeiyyeUvkfffCfnMD5qpdvru3XCrXVLarnDpzwFcYYAnhsnLQSvaQ15PsmgBera1T2LLf5eRvCK7dySDo2L",
  "key23": "4nnK2uqHBUWaJ3Ewb1NhXpTrycXhqQHGaBBCyzQNkt7NCztJ7uqTQHEnASMzCehiM2JdJ7HY7WeQQ8R467of4RoW",
  "key24": "4EzShpjQoG72t9F1wViv8PntQh2fCkEcsqbHTbphYKxScCBmYWGsAJgZtD9HrFRPDAQ5W96fHa6nQyPpvp5i5dVU",
  "key25": "5FVRhbUxzhmeJHagd1ZMEXywBBTdqRR9md32HwM2W14Rxjcs74wdaRZo96b5HzeA1sjxowYPf494WrXh5EdaoSLq",
  "key26": "Vjun7NT9bSGtKeXuQvcvHHou4C8PK6HBK5LrN4w5PNXxaBRS2SBEgsLScpNXhB9e6UkDMr5Jo1ez3eakouLPCJA",
  "key27": "3pzHLNFkh5fzjfefKhKFkPHRYK6mryDQ93fSwJdduRAvecJxpNFuB2NVZJitRetvpzWzUdvJLibD1K78fmKeP9va",
  "key28": "2SrYSTAARfCaYPtJ8DQwmHJJkfBcwrrQSsKLhB2pFvtJVPNy1z9BUeG7Y2xt3eNKW6qeHGDZyhcxt2DkHMtpf1vv",
  "key29": "38QCtyMt1U1uAbNeyDith8LaFxyh1QsD5HGdmtFzeY8BMaZH9Pz8evAZU4fpzcs5SwXkomgTdHQvBB5XgFwnjDhZ",
  "key30": "4bREvoH2U9vAxihHtizLTiQnB3uEwsG6wpceatrEA5uoxB9ob9kU8JqmuCWJf1B8K1SgHuMeCPn6kKsvvfNTTvnY",
  "key31": "4Z4iYAwqVWSC5sVs3xZj9qrKpgoSEpCEZxdYTZ1CVFY8KFi7BP5vF6sFVpKTWNY7dhjNF5erDWxh3SQEPZbdYpJ1",
  "key32": "2eUqXE9Hqn1qqn5bQU5U4zWEoDYH67niUPhzvr5kHTibcft5fAmiVC1ShBD5NnLymyHFHmBDccnTba8za4vFP8LB",
  "key33": "4Sd1kWRacfs3FACBjCzBXAjCmPSfHqUFZyFKHjS2LRDbGapGRZgNNPj7pTcgj4RY566eWJEP2sFX32tCtTGkJUct",
  "key34": "35nTeqRaLChspvMemdZn1QdFE8uL6mGXZXd9WY5Pssaptb8zSfasck5w5wC1m9z4uj6Ks65DZSyLkBq5BLVHsAxC",
  "key35": "5Ny9UtSA2dzaQ389KxFYJXqAnWp1SujHyPmLp8jpK8M7M3pbTV9ZrvXBv5xUS5VovQejNES7rubBiCwoTbWbcfBn",
  "key36": "3ufJ6efbkdTZngyqjc3u2RHRUqbn2iZ3TBkQ9L2xMJb1VJzd4yKoRmjvQnqh8BmRnDSX7qp9gXYCssNpsGRjFEia",
  "key37": "4BSNcCaR7qcDdLLivFWNvnzrbZGNmnfWyUhrXEXrkJxrhX2j8LqdBN1ukuLqqEEpDQ5MG9qvf6Z9XDsZa2y1JrVt",
  "key38": "3cT7ajkfEdmtubZa9BZA7eS5BHaqtkESCvF5ELdAw3dnDsKqXpdjpe5BNxUrYjGq6XBp1nNVhqikn9EdmTYCPdtr",
  "key39": "35dmqTQwaB1M5gM2wN5GfhkGbHpSoJqPJ7samyVWn7MXxfUXbjNbpfNUSohiVHGBAk8QVgQKdwV5wUMUpHVfzZRY",
  "key40": "37uFFPoquvo6HRs96tQVF4XxwyEuLuu4gaoXUqGHeiU6c57cDkSLxmHGktNkZ4owfAPK64VELFKUdoqYeasi3Ka3",
  "key41": "3deBFS4ddZwX7366uZJWvqDxsLDFjkJ5zqRe9R4183rRjPyyAc6DkhodbHi3gaeSBms4w8WNTSct3BYssSFfFQD6",
  "key42": "3bet5praABd1HpZJAQorC7EmuR9wS7XYcr7hvFB8b8huDKCyq7ubWPeujESgPj6QQWo66z5xpJGM1FTM3G5xbaHS",
  "key43": "UcPkrQsngRykhozZvXLvmtP3KB6dQ1Sg2p3jZArNzCDJc7JeuDsT4CxDHgXzoFcy1hAkfKVKqHyMkpEGgLhZff1",
  "key44": "5DgRN8t3mpnaY8WHNptG1azDxosqBfH4nyK7MtXgwdGdFyDziihor3UaWXVq3E5ZzYLFMYC4EDGXLRYkMpKwARuQ",
  "key45": "42ovUzNDq5GBnu661MFRy6yGnpP2HEQTP46PAq9NAm6SQNdFwxEVWAm5XUspkCEoj8515NYiACw9KjJPVzr53SB3",
  "key46": "3pcFLW4SyMmf7j4p4k43GtAzixBdr3zpK5yUr4oJiWACCTfqdwJ4Fno26TT7MW8MWKBddVyTy1vMKyBuqF8iuCHH",
  "key47": "2KaekQrTdsYLkkh9s8KaqcquPrKee88aN24QRxpCBQpqFcY2qyhpLEiyc79dQg5AuzXYkcUKyFaYw6HQqcDhSYjR"
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
