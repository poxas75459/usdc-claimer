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
    "2RQLHWkVLWvyMGBGPaSivF4zJH3JaRGuLE6rsUkVY9aWr3dbvHNuDgN996NLeWpsinPgXWvrzYkGPEgFSkjYAKBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xUaiReorExmyqBEcStptCowAMzzLmf624gFWFDnJ78tJEy6oiyRUQWusSvp44RCREybHGihdcTJYE2sBfBEQaay",
  "key1": "3ydoa3maeggCZiWLFPk7xPXS55aGjNicjWmpgSz7D69ueRZHDCCox6PukHAwty9rBWQDwQ7vKRcJkfaeuJ8Rpb1u",
  "key2": "5CmHbJBAmkoWeh9RFAv66xR5aDZyG3TcscZvrJxskFkMpr6uonqmKzKGXRG63QF9mvjGzaLng9H6YiTKb2o9ArTx",
  "key3": "35aqkiUeEMs74dmzQnc8VEm1oy6z2f4KKVy5x4zJScztrynbphzSPexPFBgXPcvh9heioaN1C8f9L9w6hhzgrfhZ",
  "key4": "oUysQbtzrmYMirhtZJAT3tx5z5eVg7ovntQj218KZ4xv8yQJvkKdzmRMKd9r2PQZsZrhYK5ihTCN2rJvkzG96Y4",
  "key5": "4MuQL39be18E7r27d15vwJQPEfmRAar2DXyNQkem2rdkNnSvnPyFkRTwZgNMQoxjqdAnAvAPBHVBoKSZ6buLJfSL",
  "key6": "5wSt5UjFJGVjPA4UKxS14zfdrkt8MR51SCB85ctPMbAVki6Nwip56KhJksECRPuGjB5z6Yge6fPd7yZsn7CJoEWk",
  "key7": "5SWPLVVVQjhVjLz4QJFQRKok5yCJWtxsjTiQNV14npUaVYfK4YvCb7yfWLDftWL4U3kuJ9v57bTAq3Bphk4D31n6",
  "key8": "2P1t6L4tvwBffFjvE4nMzJLaFy3NAkK99bPx8Rfsy8G8vtrfMYYZ8zidZECMeykww585LYqbWiWkLTXx9a47vXok",
  "key9": "2s6SngvJv5TAVw3TH9HJSCXGLyg9gbnWWErLRaLjHiBVzGyNzHCSFtZ7te1Wmm3RNmKt68JFucKfHYhPgwBzCwUV",
  "key10": "3EN3BdxgnL4igECPRwSajUi7DXqLjMnSyxakvL619gZUN9ChVyF733EF9TRMQsuAGatAHTRdTBLsMaNySVXVFNgv",
  "key11": "463A4nJN7rZNSm4dpLMUPGW4TcQvR3cgENmZ3urFyDjiT4MnSH33u5sEMCcN7dCXCB2tEtEWAdLrkbKYJJAwSCh7",
  "key12": "4j5BsabgQAQfLMzTE9XFnUbpBpoEdxNLdUB6PfTKZcHkNuDYyRoxNXn1FHi7ccMGcTzZxGK7uqdDRkBai7BjT4ds",
  "key13": "3VKdDpR2ynxUmdktvgyreBvqsez9zusMmbP2XxmAAhQjHiwM3dFthCXRVa4GpHEtSc224jA6V61VLojuYEXTs7ri",
  "key14": "JVicMSEfjuiMDnUqhKC8cVW2x8fTPSQqqx1Z5djUBatTzVWiR29SizQ3q27KqA2EmpSMvqRAZCz4wzwvNEXQhg1",
  "key15": "3s3hFRwii9Kc9SAoKVcVsJLBDfsWd4FvyoB8zVm2jB5eCTcDWFmQFjYz2cSp9G118vEdBKY4f55oBVayHTMFg9QU",
  "key16": "59USzZSohRUYBRQoNdduecyhFk5EvtGNT1b1CF4E5gwwujxcAWYfucqLThUHUWx6nJcqC45NKcUhcL6spTKuGQx",
  "key17": "5gFomFms1cx8utY9g8bzpACfFM7ZyyEdc7k85foToeejLToUHxt4qnrbDrdw9JmtHJs8o9rcofPFWW14jweTcuho",
  "key18": "22qCA8SrptN2ZhQsKgNG1BmhxSNwSiPuzusde5MAD2nK1c6kPosMnSomFQ2LBTodbroJsjhUiq8k5uNwSSCBVG5o",
  "key19": "Q5bWANg12KLPtePvxRNtJdixF5F8XgRwEZULqu91JMRBLLbHAz8GiFxw9h2dHhgpv1qQQJ2mJdZ254ecysnZbA2",
  "key20": "2j9S37Xtt8s1EYByKv9ymYprqBLdfJ6Nd1i5LWca21reYL1MuaX9AaBog3FyV5FJqfsC6e2yhYApMVMzqQ8sacgg",
  "key21": "4y9ptdfcUWtqo1Sk6eERuQSqzBW4i1u9fNbLib6HtwT2haif7sQLURue32a3Db4qYGNwcCfWWXDVJWEZC5jJGQwh",
  "key22": "5drzAgi6v2p766ELpCGGqf5cbcQM7cwLMTUr7jhNUhXMi7kgzP7FGKag46GM3kwCPD7BjHGhbtXegxNN8wSc3S8R",
  "key23": "i8pLKPy9epG8neTQsZUtWD17zyiEV9d7yyzGTHohnVW1TJyQr443zQrQJ7gWPHTwyVzeWUWeSdWsJTtvdx4AGPt",
  "key24": "2J1s5dZ9jgynyoeZ5xd9uduV3VBLocK7ZYEAy5G733bCkv6iTBc1vyQhWDFn8ry3rBisYKbGnthMfGh5vCanCEth",
  "key25": "5MeLtT9JiRSGKxveY6eAgCS8ruBohwah2CtzRCXgzep42nXW7FUZ58GrovcjaTXbeQJ6sQFQzVoassLwBej2uvKY",
  "key26": "3zzDoU67pDNYQNidC2xEhmAYxAe2aDdjJDVKsYniQA9L7RygUWo7Sg8tiD2jVfJAdbbm3uuADJv66NDKoJaEJWP3",
  "key27": "4FMkwmkDTLbniQx5BXtabYqj6x9BqxcwjxGqHKUNvEnBHKRCTgy6GjkoSSq9FrZeaMwWHcEC3KtR1W6z7xA2DJuh",
  "key28": "RZo1ikDjW7A76btG89HKRE1C5owynNGq1owBqhUwvjuUxQgNFR9jbbXL91aZEQKEPMGF99zkipwnXwGrLVf4HA5",
  "key29": "5HyUwN1VWMNkqwAmeaxTqevnmAk1K7gMZGNCJ14c6DqkNBuQ1kuEHxW25Agx3LqALiuHhDzMToE3RRZmHUbBMxxQ",
  "key30": "2jdFAzkZxiS8D95WYLNCohzG5D7h4g7pn3nG14Jee5dwomSSTrz11UpDTG7ogc66MKgzY1zJie13CWeLuAhGJXrT",
  "key31": "5ikDXPaRFXwhgPPvcMH4J8oDB3Z862hY44EKQrX6KcwXfaDT9r4uqGAYVzCRhkm64oVNLiTNap1r648zD3YaDzUX",
  "key32": "2jz9aMCVhyGMCMJcEt8bbD8kc1tJ7xuiJ3h9WdbB1n4jFQafC7WfzW4wRyrF9Wr8wnchg2XaMjeT487EhSythBGg",
  "key33": "3Bawv9nEn676MbJD1yXvH6BRFf4ZLNFm6zCWXjTbfk6ze6pny7fZ8Jz3fQgDxVwsQSw6gXKXKEuBadF4g8DE8EVd",
  "key34": "mdY3KHaSmWCJyrUwsPVkzCNRXi4efkE7SfA6Wz1K21YpfqVtYWEVMZfZ1WRbJRf5uWAHWCTrUvsJDY2BmBZqfZf",
  "key35": "N1xaPEb29gTqcMKqztQMjsMMVZebF7LKCWcJvFFZRGCmSrvVSBFTE2ysiMdJmo2UECyEjzGETrBZU9eZpRB5mzc",
  "key36": "5yQRtbCbb1vsNYouVxJLDv8Fq2YY5yuBGQbAX9yXwyreVcjHh7eLKUzKSAGcSGX1hJJ5hsxZKXoV1Xgv1WKLRWJt",
  "key37": "498SMKERH4g38hJUXPDnDHraWn7kRHjFAuGbY3Gonfcn3erTWFfLVAHtnuDSmS7WXQCRy5CdWbhiWRktERMARjEq",
  "key38": "5sSEcJJJ44tJVcUHC1dJY3qgLKpTamAd1EfEAow6ucUmr7LPTryCmAbHwrXWd5KtDpZV5Jxg8CMXhzFhY7JYWoXB",
  "key39": "4DpoE4bXdgCbp1WRj2bGNisenrtjL82Rwu2hEDCS7JzDUyUZfoF2A4nrdLuTuX1wtQJKLjUwoC7xDCDmwyPVZRi1"
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
