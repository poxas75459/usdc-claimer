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
    "4z9qnjwgyhAUmnbZj2fVWrsRuesbfmurkDxk5WGGRSooXtkURZSZmqYqhPPswRrPRqw6URV7GW97y7h1z5b8msC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vjJUsYQtmYzmSwvMUCFfYTwqzKtJyFoGzLNWR6o5nkQnxMGYBV3CojgE3xptVPWAMFyGLptbiQStP48MjpJ1dQk",
  "key1": "49MJ1Ho94y8SsT8audYPoQfMo2xdkB79kFHjpADxWeckUUbVejrvsv5mgbdxQSyd5M4WwmN3HoG4REaoZfG8o1hm",
  "key2": "4RznMhn2R6Xx9TxqNQ846PvwG59G6QAuSfYNPksjLTxRSJ5FkHfk4qycZRghJYxKpD62dcNzNGCgRN6bMx4sCTrf",
  "key3": "zv9YzTuBxJGUL6ihk3F3K91bsEhRL2sqENke84oSnyGmUTpuQv8DAAFMrYHLpobL44Bum4tZTxbhTYFxguP8LzA",
  "key4": "4XoL6acSC3gFsC9jNBxWVUXCFYiBWnCNfzYcAHq8ugHazWzeQbJcd27SnKeTvvEGwSNTaEPiU8XdLNmaocRLYt5T",
  "key5": "5NaK2uwmPXBacgK67uS6Ce16MboxWnLDHS14efmBCY8mBKaV9y7dmvLfYL8hADEcJAKvdXtfzeuPmVVBtWqGNnjY",
  "key6": "5D1qWuSyAhKKi2uQbPBDayhUReNwSawG4kgUUpn95pj6ByTaphhYZ3PCj639gwSV2o1ngqznJ5SHxH9BgfXC1kmf",
  "key7": "4uuGkMfKRYq6RfVgRZ7aiyo2aFvkcjGg4r2rRY618KW23ARHBaZ49D3bvvgththvoSHjyD4GHn6gyeFih2EfqwVh",
  "key8": "5cPeCV6fiosEezph4qHsConWfTgDkyTGd7AmSLUTec34dNjYgsXmbJguihnoP8AFixmYG4sQQaHWVHTc521dGrS6",
  "key9": "4m5CKWkhmhMVcUq2fknyDg7WfSaLR9rCgc7gSMkRxFcdtKquSPomDz9gLXxnRKSVEXeUk4bgrnPd6XjUQ9VU1Ttx",
  "key10": "3rtLSpjPCeEySjmzR5YxTxvGY6dDxKWxqdG3Lj5Ds8UTMz5ZDUB4ziCkojUiR27Nbqzf4TfpDBd5c6s5hweT8sCK",
  "key11": "5gDwGZTUwdJwn6xUiWoSE83LTePgPbyMsNbqrn3HcpdtHjZgimYfXHpChYLecRhaWzkM2CVKqZNeVTv5jQNipTZK",
  "key12": "3ZuS55A4EvmosZoChvdUpkdSB66Xs31WJ3QALkGPKhk9JRGM3nCqqghNgfjy1e4Mf3LMKH8nqL3riaw77sEBjxe2",
  "key13": "sh53yK6bumHUG11zHfcfqQqUiobN9qYUKMGtnx3AFis6rSWgp8G1kM2pcuyK2wMzZCQr2RSUuZu41ZABBh2cn4g",
  "key14": "2YiTMuYeT1Teq5iu1BCdkv8V3WDjuTRT3E9EnLBSAPoz8gbz4okxRH1jRvygqtUg8XLZezVJxMmLkpf6YPy1va31",
  "key15": "4Ewmt6fPUiPNAGKs9HSjLyCoNwj1QhntrxLoYYVbto7vbX1uyP3Rmc177fEYaYDfU8MtHmV8H33BgJ4p79GwX7yu",
  "key16": "4xjrawQJK1LBsnCkCV79SQ7kPLpZ1o2wSqkvUwfBDhe8rYpiyHhtiNtD3rTwMhoeCexAXi3CLMVv12wSs2F1sGzX",
  "key17": "9MwEYFBkSBGCXZibCaTWqBQiEgrt4EdoUQ1e5ZQk1G7hNBVQdSEjLpG3SPAgYidEVpvoSGrc9n4w5dvbtG6FZuk",
  "key18": "oKrVPTLeNWpbjwqYg1qCjCfMkCnH1U1i4x5rT3Q7a4gURbeo5QXCbhMaDmoxuc2Lb3pm6frYYEJC9szizEjrYeh",
  "key19": "59AJY1pgRTKa7Qf4yu7nPM71EZ27VrKK21YFjbt7j3MuP2XLKfKjQNqAvsaNxxmLKATamyTN5s2fBuXRKCcSkAhN",
  "key20": "2EGUyMt5eSiJAcjd7ApJ6ZsWikNAwWqwCkeJ6UV8A4w1YytiJShcC4FMc41kg9Ug3ZFXVH2zF9zJyC6m4QvdgBtV",
  "key21": "U6WR5zwL7GaGFurvjVzvkvsf9eVayfa1DCa8kDokqK6MVsACuSHfWw2uE96rwnNhZBUEk5UsujWviTf6XforEnJ",
  "key22": "2xMKEm8Ujks4zSTYQFScA8ZGX93Vhzegzwe1yYWJgJBcPTEFXW31JqQ2dZsaYHFGwDeQkTUexftn3Ka4mzHrFVwz",
  "key23": "3aCLABqCYG9EpzhMzK6JQoWWe73hXxqWkBNPpHyrbKTKd5jmzV7YTZi7KNPCmwn9gT7tMSAV1ApiVmfKNW3DFXwn",
  "key24": "64mYNEVNG37ZBqtVHCzv1QFA6hG9q7a5P68UqkosYEq2TTzXycA7sXkjKJ2c8hbozd7QhtFUom25bJuefka5SeN5",
  "key25": "3GZDDBCU2gvZ2xwpgKUPAxEV7KhUziUENA32rAyNBRU4Ayff5BHR9QU8pRTuVvjfYy9sLiM4NamzaQSA1nvMW2Vp",
  "key26": "63bFBkTw6XzzW6tVBPXtUsiv92VrM55QMfB7et4R5tEcJQMru5ccDsn6G3g6bHhJp6ice5ECmD2RmHLschZBDYwp",
  "key27": "53evqKinskyBBnQ5RnVh4zpHxoogn9TFfBZU7hfBpdAwcB4bvhe26zMd6B8QGqPjhDNJKGFKqcTCsSQJDWdbKumB",
  "key28": "2WmhJ2B65cpDzBF4xb4euHGEVKDD2EuBsPyMJZZVwteP6NECiUwP4A1gKWCF12HNpqrUB2Eao8txXQAFAnersEkZ",
  "key29": "5ZkMmiUfPtCoVSQMAsdxcsmgZxGWcY9Z7uCRf2HjqE4QsrsUMJ8GvUpAh1J3QCvnYk1rQ4UPctKf5o3SyY732Xae",
  "key30": "5NSNTjWtgRhZSJrm6TMqvwqxvfkfKAeTDm2JVQAGGnsTJasDA1pUP3k2JAMeNXN76CmXUicC5Z5aPjJtAsHZmmx9",
  "key31": "5AADGJXja18dp7AEeZ68vF2p49WviEgs7VHNBGpYyoVaJvu1S5YebHXWS2cyfYsp3R4UQD6GmxCg9YzscjMk6tke",
  "key32": "3RTidTqQeXbhxQcd9iujvq9EGh6wggTTGPs1km3kRqzdxKg5n98ycvVbnUnepGTM6rtyW8WuMvJNv249Nf4kbVLH",
  "key33": "4xahsTevgaGBnLASLNVB7DfYdy5Ttqm5ibvdYJ5HskPVGuscYoAapRPVrYVDG3FEAbFjsuUexJ9LwVtVZ4mxrNM1",
  "key34": "5KR3XP1j55mDJBvePL3Knsa99NC8ATGHSRtqxvhxNi2vkA1SnnW1T2XMEQqtExkC4XA1igLonSseSC8k1rANcqK2",
  "key35": "4S2B6Ap1Zncq9PwUVzXpdeN6rX7knkPp9g6QPh7ERaQKiZgzVgwXi4coZAddeY5jZRyFp42Cj2EBasGxQCXZG64p",
  "key36": "44MgCiDBQzwHCsoCuWdnbxGAV625psDy5nWFituX4qPs5y1Gg98d8Wcvxr1wLY13n7eyjbvnLxFR5Hu3P2qfDzmx",
  "key37": "4Y8PFD8DJWGpBQTj2WeiU5drk3VGp8dHUzFAya4JfTuqRZzYr69JdtvN6ovskCcbDnY76k2wH6vD64yZQunmRH99",
  "key38": "yUTNqy7hmhy3t1qPjDEjKTkfttYJvYVjmYrusRr62LpX123mxZMjGmTKsDHA6mq4PXGdEKQeXwhJEdMktv3KBUb",
  "key39": "59mGZbjMFtWTFoE7P6nNEWcvqY7SQ4LL618voVr7sS6W3ZrAN2aGibgNC6YPdj5zwrav1tCf2S2gRm2Z6SF35HUa"
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
