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
    "3hr2xStPwg1BYzqmDBQNo4Ttz5r3aTbQy4RuQpBMgJHjBtjNJXKUwPR6S7s4fAdCgQtNXNRwdbviLqR3sYK8Wd8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "656eKtPsgk4eQeWu9Xuh4p3Xaz4F2PBC6ySwTG3W2wrEar5FTqLzjEBS4X57pqW9YCtdd3RtzGFh4SXU7PiJZSZz",
  "key1": "5KV797E4FCmx69YpaxiKJYByDDgq2YgrADtpPK2xctBGkhc2DrYfCpAUz6tupZPoQG59uavZDyxHSMAoaexmTVQm",
  "key2": "5jNnLgH9E4W94WBTPE2Y6CWiNdk9U2DD1ZoJWjMBNRFGeNkg9qfP5j76Bx7RwTybkYetPpZYTHX34Ph3uyRquaed",
  "key3": "65eckbgPU4d6vuf8fkBZFGaWfiU2uJp7szafVuWnhv2855yGVMKTX5qnKiZ1dkSQyBXXS5AAmahcfShRYrqXDsLn",
  "key4": "4xN6yWMK9tLyjJPRLTxKwRf7NE3x7wfrJG2PgfzJwy8RJywWHsQ17Gj8THx84ZESJAT9QhjN1HX1EmcybYqg1s8r",
  "key5": "4vMuemApwadFpnr6iz15wSKogW55pFQpSCF5Fuh6yAv9TLmpaZFZPCWc24xjRufrfdSojJWSddQwTuzwchdz7sYc",
  "key6": "3geuTW5arYzD1h1GMq8NMZx7KA2Hg8tzsY7ZFuz6ZGZssvRK1xSuQXwgkqa1rQvmyXqPaQccnhi6C3ioAPcFTXd1",
  "key7": "3847yFVkdQVpPQwto7ybShbiWdnYbEkeYCgWtcnzBjQhYzedqYKV3BQFgEZAToDhT1jpidupfKaEQ2rMUG5h6o7H",
  "key8": "3Z2T3hfsLVarpfayfy6pMxwDUDcu7bDv1xGRC4f8uEmb3GdGpZ2oWn97tHj9YzsMAyHiywBT9Gf5omwQDQu1YMpm",
  "key9": "4EpAgqjsqRYWwuD5dZfC72n9L5KnLt9feaC9d9n3C71cqwfmwQk5gVi6SFhP9cqsZhbP1e9xeg5VHAhV5J3kvEyT",
  "key10": "61Z1odd6XpQiZ575qNoCWSjKBeUDqw8jWJHSDEN8CRWjTqxNmWGGDRW2MxjD9T8VSQw636MPDsUZWMSNAdbLNdtP",
  "key11": "3o7fEH962x7zpA5QXNbvcH9zSSpVSP69CpSoS7qMyb9cHQVuJewLVkiWdYwVRuR8W5Ee1MwKRKBttwam3AzahvKb",
  "key12": "4MKH4ia7PZ5xd7MSv2QULuF2TPU9r2vbgJXhyxVhvMwHSNwyfHfTgHN5KWVNeZ7gC8KzbzgQ9duNkMYXwgFs4vs5",
  "key13": "2HHF546o531Wux3ZDrYL4Rag1FobXt6d7bUDKczZdRfnuwTfN1ZpTppJK2gLD6zGMcvnSZE5qLM2RDaRDYpPKFLs",
  "key14": "2eNCQ7Y8h1s1rnawKCHkj7Eo1g35U5Y2LTmctmmkoLKK1vz1GyWR81yzPMaD7FunmKgEnh9q5vM6ZNQ5AQJLPYb",
  "key15": "3vK5LVvfRasTG8WvGYsA9g8qq7CSSjpvdktU8xGbp1vrR6J2Skn86ge1RP6dhTbDymTAfySZHBJpdTnxg28EUfA1",
  "key16": "32CSRxaR9HJS5BkmXPP9w42tXufZKkzYmGcgzCi3BaBaRtfVENgnnqiiYEZ8EJurkfnC29vXbSHGs3y3tjjVLecD",
  "key17": "BnQrv2HNoxrFjr9aNMzfHQEXUdnpaSiPVJNrssmSoiRpmww1iTLWnAQPMEWHcap2G3xttss3wN6uiFUdd28fCzC",
  "key18": "2cVW4gZHfbU7ph1q8kdFXuZAGWC7F2XepYzyZAqU75VKwKJh1ypTUunb87vmRiDkptoYEpXsU8L1KB7nXiVY55qu",
  "key19": "4uRZJEXXJjwieWbDCKR3JnSwVh2TXyStGKzRZQjJKjdigWYXUHFHJnUe5zS1sRULT1rXiMR3fws1ssFW1zwTQ86c",
  "key20": "3Y7ee2Da4gFNRoecLyktP4bZf5DApxi79Sz3BorXzG1CebEg2cCQJGqrQMzRMb1Qgk7PkZBtXwqsukJyk76ZCRqf",
  "key21": "4VhVuLaz3vwEJYrYAhALmiQPntpx6QCKZvyuDS497Nb4u5GTwUJ5q5byM6RZTpBgR4yWxJDmc1PmRzpMVHpYNdk2",
  "key22": "pEXAM6v8z1Ysr7uxtmEHauZBUBGu8hRe6oaKF5ek94UQdzMVmmhDPVL6T2jzoV63a1K3n8SSxBTxsdN3woap1ia",
  "key23": "5mcyNRdJZb1RyXEFFWrJEyUrWh6GukkysbWzPodLD6ZAF2AYcFWuHf2PwgSoP7zoKaCreNMkSHco6ZLtqYUAHKVt",
  "key24": "5EjPZ58kPKDshAy5m58B9U4VZDzsxgApn9euVwpYFvfmmdchNCKzTUobW4WCMMJsqjedNymU4GYkZFvgEVmeVz3L",
  "key25": "2HRVdzZY4zJFsSBtJ15wK2Jg7c9LYVg5ZgwdNNiVgzSSTd4yAcU2dm4rXVnJU3XQ4G3sumvXPfAfZhAf4LyqJKuv",
  "key26": "5SbaLnnH7kqE9sjkjj9TaMWWWqZb3cKoKi7qFT4rJTHjQ6ej7evHHPauTrCRhzK1ny3J8ZVsKhqfXHMSiWmgKhbw",
  "key27": "4MdM63az66JEXYY4kUaMmHxSLHC9aDUpJB6EYPgutxhnXF4WBZvpRibBCid9HPjJzfhLcC1zv3gnaJwYForbvrUQ",
  "key28": "3a3G3x42E7ff6SMHXv7xqz6tHk8TdC79j75bhJPMbDJSUbWFAwM2oT1n62d4ZDiKb169ELBspghVDEpntHGwZ5BM",
  "key29": "24B7a2kb9FxA5fDbk3ZzTQtY7wVXproeRTZ6kt4raocZwDsxPtVnVNtHFScm8q14yJDBSuBaL2Z5XGxekR7jaMMo",
  "key30": "VF2KEbpXnm2M4N8C8VgLmyeHnyaF1s3rFJcJjcSzGgYPKs9TeyGgkKDLQBfE71A61jG67fPV9c1huyLQ8sHwjpP",
  "key31": "54fX2wgAuVAxDU4eLvXvTY7k72wK4Bye24qiKYmBQvk1YgQiACqEaQz6TvAPb3G7DW2tsSZmdHy39a5EePvSyksw",
  "key32": "4GDAv3ydkJaNo8rgEGSvreUSDXT7xU4fveZcGm56Poy4xe66h4YiccegfR5v7sxGViyVDpVdXfL43vwPVEMfxKni",
  "key33": "3LebptFnMusKFuxMjKQUh9jN7yvP8s7HGbm7qu9rgkV9VFK4p1pA1LG3JVQDWwE786rGGVhQTCjXp2mXWi2WTES2",
  "key34": "4nr6H1FHraUuaguKkDy87Towfq9H3eaobSjE19nMadAzwgdiRJmyk3o6vFz5WQ6wi6WGMDeCwntVsnQBj1CQJtTP",
  "key35": "5oU4ipJ2N9gmoKiHGHZ26vDxqaxyehYdXf9UBm74jPfEBttHfyn8hdFo8cVWLCkNuKDVmzUZozRzfLMR9dYkyhYj",
  "key36": "2nsKExLJqg7BWu51KtF19zHhtP1UZPtNtaz923AJ8dxeoAQYUwLxBqojNFexViLJPvNSHhUufmgT4NrtUUP8vkkW",
  "key37": "MWJDzydez2QBoDNai3C3JFL8cz7f7m48gJD5H9QjW2ngq6zZaGNobjRHhjTTJRRo13uBxWXw2SYyELR4hokQCJi",
  "key38": "4F1nmqV82gnX6j2FQaMf7uxtoewcfFvCVFkVUCuUfXyMCCPKwrPGUsctzDbo4UmcviKLby8hMoinCAhucHQjxWpD",
  "key39": "48ddvHYbaU1H6khE6wwVrLge8PGNNzM4kdeF699p6eZtkjvHRpWdm44yZHFBBW2ndbWHmSNcaHNwwrNHDVdxHuLv"
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
