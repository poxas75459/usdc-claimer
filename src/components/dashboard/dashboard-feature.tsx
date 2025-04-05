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
    "5PAvgBU79m8k9duEa6L7SuozpoQ71UDEjNKt4C8qobEabZq8NSZr1zc4ed46qrfJJ1LUZa8ars6WF3yw6iczXo8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFZXMsyHN5kz873rja8FFXXmbpUwvTtqd4oyngfhzXM3zubGST328TdSBZdh76tovZKnmUGphPW8vbykAjxdb9j",
  "key1": "3sWKWR3DrRkL1eJGyLm6Y2XH6PK5Z9aKAHmHiz1Sgv4TBCi8fsDxf5oQnsFdix5eDcChuEof2D2Wr8zGUvCmyVP7",
  "key2": "4C3xNqY33MFQJETxkLot7PrMfStJ9NmmL4b48bemnZJ2pFhqnTEUiEcYhLWJqS4421Z21oV3TdTSsizRP8t99UZe",
  "key3": "3dFuKwXuVSyRWwUm5DdiFSk9kMuE7RmbXmsaCY7yytda1dtp59t75HELNpZ9y2nzxkzuWxmxLWMdWrvYA6KgLK2Z",
  "key4": "4ZNQqb6DFedMLrHU7zWM8KKoUPhwjR5Fd2gFPsyLa6ESWDEsdqY2UERdkz7aHmyodBeX8gbrEGtUSTvYDPHxRwmf",
  "key5": "2Bc2bL2v8tXG24FLK7ryQDo4WWbmZ6BhhNRRxM1LcqduApPtVeA81qZuw8htcP6v6LSwRUUi5bP4kTZemLuK31nY",
  "key6": "5vUAAWdSpvJjzxeN1wnAZ9W5iGjmsDFufQpSerhNHcN7UKLrRaGqL7gHBysEKR4gMVJXbzx3ry7xMHEBdrnH6qYj",
  "key7": "YDMXKF7U9N8WcL5Kox5NaPVs8MUY7zStsyP9W3tAaecX7zsGLV38H1VgJZit7SpGhcYP4wtMzg6HcAhEJ9KPLuf",
  "key8": "2k1oUenNcHjtZvApmu7fDf7maiEQQKmGp5UAHhA3EZRoqq6BQtJDFa3zScNN7rJcWmonchumTNxKrRd8wSFGw8F2",
  "key9": "3XRszipTzneYJvb5g9h2NzMSP1kGS6vRndVyeR284gDmjWwnSruniHkJE6k2u6SnVCdVocXZgqDhUavZs2SUJ87s",
  "key10": "3pMa5GYKUTXuN7jws8ZatVebfbGqhnJ4mrNWPP7sHm3v7zvAdMdMsWdPobUZ4GXoz1KoM4rjoPBHF1RgNeW7e61r",
  "key11": "tXQe2kfa6fipBVLXrdT3NoVWgDqpwPQtEVyzKwQ1av4zHY5Wjifu9uTeCdHqAwN9FVbbMw6pxkdGF4WFD3yfjRM",
  "key12": "4RJkYusbfKHVaDLEYWj2yAtHD5jbppgZHYc1LL21c4dJ8k8qpiC6u3S1dBibHwxf3GKo9J1LM9anmwRW2XhQHL49",
  "key13": "MaM9eFsx7syFWy52PyU1YXtAnLaDkwPDpJKGmRfqPfZjtufBmgDKwHWzheyrs929asCYTZMg7s9drCZeQDnEXjS",
  "key14": "3hPS8Dg5iY1oNbYq644U5eZVuMc2fT2oPYj2wanuQsT9XQPwo1BKzrgC6Ax5Gm2AzFbJnvQFRDpfKgTt6TduQsWR",
  "key15": "3eb9eHzQEUxkYY2U8HVDCBGMyrthcKWm6h4AJcvyhc4LNicYZmr2ud8gt3hvSgjmmCUJpBGrUudQoNj9fPFy6Qde",
  "key16": "4wsvsKwFA9t8qMLjjgyU6PbjxBwkvPPp6KT8CobVGuuo6WgPZ46orWL1MDyaecTzZU3RQwddkPsXWp4gFyKVNq3Z",
  "key17": "DLFTSQG9SikfJ2sHeMJ8RKZGU5DVnW92PGqadMkwREGCftpyeSkf4dqArVfWhsEnR3HEjFjHPoAxoonUbozbsmN",
  "key18": "idGWBYDBacbjVPnJxdnhcSrnvXBVnwsmRJ5QFZqWbfewGCuFC5vnvFG2GwXScEZ568mY9yZJ1CyXJavc81hZf1p",
  "key19": "2DUYKnjNm5FZagKnfLXpZpa4DoMxY9jZiJBPupyJNizijZnYxA5HVEjoJnbowNCdbmLgzCcSG7cShWgh43X3ubMH",
  "key20": "3FfKfwEzFP5sYKgEZAgv2xrdEvSWhzaE6dmVcVzEqoHo7NqUBvXZ79WX64Gy72L2CMEQ3tW2T5Fsdy9w1AHms4uQ",
  "key21": "5HFWqeTaizisXwUagiebGHCnnAVkzRL66ziSCngiZB5bgDZtSp5FT3FCwq5pHaFe5wJdxvMRMQBBHFWnEkqaHMMZ",
  "key22": "3KbceAKVTEjAPSsmhzfTNgCjzUrY3AKrM8SgCauCz3trwp1n5BTLdaohRjMZta1jH8WWANkX4YhFrhypTp2eHbcP",
  "key23": "5wWfRVf8gxM5cFHDccM13Lrsxk9Unw9MrHgGHVqAfsgF4gbzZ3g3wX5pbeMdk3JBxurVuAhttrWA3Kj2fFAtZqdY",
  "key24": "2xyfRfYH3RmPuR5ShkPz9b2EMassmDhX53rujvoFuz4QCqEZm28Jvfidi2owDGvhm9o2DKUffGKPiSxPvenPK3Kh",
  "key25": "2EKxWSoPHjJ745fd8g2MsxCCCFMTmFaAxQNthgrVWLyU9DxDfyovvpegBxEV4syJFxMDBxD2kaoUV9HujQbAafRA",
  "key26": "s7LnTtYk67nAriYkYrVfWt6cVrN4EMq9P2TNKMqm2TvmbgsHZ357gDy1syFdfxt8eC3VmWf2rmiDpqvQkzN21fS",
  "key27": "3KdHWgkUrgEra9k2gtz8ihiUeJvHzL4dyeJQPVf6N5MsCYpbPmeYHWPWt6BG6UpUd4mSgYC4UaSiXoFEXgJEEtKV",
  "key28": "4JnZUxqZyKTmtcEdysWXMCtRbi9kH98gYwm6FgxjL1JXnfzUNH9aBQcBiKu4NTqhJQH7qEkPpU7vPzjNcUDLUqgQ",
  "key29": "38iYoRd7oriMg3hPMmWhgj5yxcjKj74xw3DWikpjq6hCFyCBRPEdTXXGZoHpjLCdJqrF5wAFm3m7xAPTTUoKHKQC",
  "key30": "5tQwCVrMVEsAjUxZJfeLLRUHDJ4mCjGApbsuDFkq6z18S85DH9EUmQnfvpZFCmaHUxg3C4r3YJGmdgtk9oNQQC8q",
  "key31": "576EtmS16s8NpZWkuBGR6jmm9mP815HDUoztxSv87KV7GhfW6ACkwWDkGMVys9vBTj3V2apr6P7oGKkeSY2e4byb",
  "key32": "bHWQCCM9HeGdLb7BuSh5sA8WWfeddSxKSs879aFiCgzUntLfk4x44nbX7yMmq9bJAdnib8zrimMqK76AsZJA6Vf",
  "key33": "2S5aFzaLm4tLnzFvPQ1BHQwNBonvCCo4KzUwHLaShrV3UCU3HBsAEXYyWZM2ie6kPagH7VGDpTkzpri1voQ51fyp",
  "key34": "65NtBH9MjVqPNaiaKVS47UdJy3miTNFHEeuizWTnMdZAEgRbks7YLBZEqfZEdywZvLXVYiWj47321gxaZCejPnp9",
  "key35": "2RvX1jKxtChGBB1X6LFDHm7ekKqsCvpJN4GRM3HDZt7JZ5yEmzvN82dHKo5fn66p7CC6djSyZ6RLy27ywDc5Xpvk",
  "key36": "5tDohA776LwUbVpWdFsoNwtX5dsN9Zt97SPsnZGnctFJB3JLQ8SpZiAVXu7yhdJwqDTXAPfh6ygZwJLTtHaUTWNb",
  "key37": "3JZ8pmuDL4x73qEgmjexTxKQfpB8Kby53f5Cuk1HCoiPCt6Rmw6Gqw87bAnQPvchqDTTkHe2ZzeaGbd6eFwgtDrg"
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
