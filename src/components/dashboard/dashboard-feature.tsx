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
    "93RA8Yb6CHLbSqqm2bGczqWLVJX48ZGpxDjrN455z1GN4zEeCb1kEq5FBjxB3dp6A1e8W5bjKXkiAeojqef5SMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqejHwAu4PCd1cWKd2N5DPXacgZRyrYD6CxPr5t9p7r56jesjq7ujGU6iCpwgMRt87y3nP62jjxLUkfPH4rgeTj",
  "key1": "rKsV3Jo8Vrgujd3ChXjJh4466c1ck4fAWfeUqSRevwT3Awa5S8z9muhNb52gvFeYMw3EZrKCnUXNiVTp4nRTyMY",
  "key2": "5jQvBnpX9b1njp3D4as9rEMk3Hj7w1AX7ek6g35GBC4fMvpY9aruvCch5uySuGrVc2Q3m1YkvqxDodA6jgRMtkYW",
  "key3": "jhj74oNAHk4GExewojKcbuf4NaLzKK9ukUnB7noZRXnVKcJmXWPbXGps6TE5WnMGpAGBggCHCCxj6jty87ZsFZG",
  "key4": "3PS281zRmb3s6bHGwqPGQn564z2psH3kU7La2ymAv91P2JSKCUdBLPukoxsH8cxAvWUCjBywbH2Fs4tbUBNCzFtv",
  "key5": "5PpXnTvL35yHSyszNq1JaBFYm7Lj91peCrHUFk1K6RRZoRfyxC7gcLvDqgWnXfB6xur7S3rvRmmW9KJ9BarBv8o",
  "key6": "4VFTdmqnxKJKQZVk8gyXukFSkZvnatKvBbSRQTSXuL8mSb1CTUNrJNrmY7jprCtBtpKmC7Pa6KKpHHdxt4vWJkQC",
  "key7": "29CZxidG9fqrtsmaRkgros3tTgYkd6dfXdPRwUBkJtAHYkBNVb8kQPC1q2t7ts4cyV15rjvznBKNek8icGNiaxFm",
  "key8": "2f6zezLo2X779oLnFhartUBSTo5uPqHcYDYsHramYuangVWps5HLQLAgpv4UwdLKFMW5CyWT5QPo3hdbp42U4Zmv",
  "key9": "43epccYGC84DZkWaUmgzGNr5to1ny4EYdzZuuZVwQxMivMGHMmRGprpv2EucKB3TWWKCZD4NhfgzBzTU3EkNRRfu",
  "key10": "3wiBEjGZnJPQPaZaNgVXQbwPCy7U6FCe5ymwxWRYXZtMZTRZZKXyN5fz8CoFEFaSUZCjTBTdJHgzEWtB8oYx6rmH",
  "key11": "9GrkhfutdvTanNz3sBZU77exUSKQtuLqH3RCpQ1QjTCvAfQwCNVzmCaToYDQ8eoGdyhfj1c1Ac6VedCGiBXw3sj",
  "key12": "5jU25TACtw3isXnZD3hYLx7X5Cs8nt4bvgxXpgErkuhSxuWDu77HdXBKWeXN91HrsPjPowwdyGGd2VrMFGwK94f1",
  "key13": "vreou4F5PLMsTEzYuqx25ojL93JXC1BPddTV8dpqi3CKaV4Kocfe9RGtyhjHCMTYFtizmTfnfRZYCH1vhSK2X9R",
  "key14": "427TBFg8bTf8ACcdh3zmEUj6soKors8TaZSQktTcunzBNDeVsSwXYTtCa9ago2vF3vqqmV6C2nKxRMdD7XtrkBxG",
  "key15": "bjbGrChNFAUvBkZpw96zHj13tnVdhcXwUMVjYhqjXpeVeDuxTKCt1SiVdNjnTLYuDCtURCyntxQnuTJLAQ7B3L7",
  "key16": "466yu8y1D1XcfpJTFfmQiSBzMjGmzMAb6KhrM2nVvEh4CNWd73tuDiJB9A4WE6MXyC3RWGejRfZBc9uUF1HS1ASv",
  "key17": "5qY6NJvuNAKJHeznqTMEAZE9U2pJg2RhGGwMp4rEFo28frWCvMrAvgdNRcpTRfmwtmqeJuNVmk2WVNdfh1PpbK2r",
  "key18": "51SFxD6fdwG8b3gSVM48ut4aWyVbjKHAJ7ciXuovaYEYSQnGt8pPh3EwLYn21WqY7gEn3xMgCxMh9pqBEZv3EUY1",
  "key19": "4usxv3BkTwrUaQjsPLLUnrG6ad8eEi8TU1JZXwht2CNo5qikXw7hZJiBwEdQy9mjuwwiwnE1KoNJyxVgz1PGHoSK",
  "key20": "4uYnhZr1RjBEEsD456FRozhiUT5HoK2BQGxtVEfsEFr9B9qTMDQoY94vaaqUE8DNH4tp1SiH3p3tE5f5vx6Pkb3p",
  "key21": "3Qt5p3Af6pyuG4fHsyhSz2Dra2ETox16fPZZaK2KGzjPhmkg6fQ5v5CY3a5w4Sof8u9tCGT3FKAXUuSufZhHTH4M",
  "key22": "41UfynKTd8t1BGVVogyRwU8jbfHGfUL6fHLT9fftjkDctiNp4u2F43UxyiP5ryuxUhV1YaFBurpSAEEwpneaNc2q",
  "key23": "3KQEs2F6a3HUxTZ2ruh24KVjxAMiStSBUEX5vVViwwPgwnWpj6dvmmpJ8WuS71LVTWGzZ7G84JBkayXpox7HdqTc",
  "key24": "2AtnKtcaTu73qZu7K2KMfKJsSXKk1o27qo4PjA5wGKmXgBvRFSAhy2eNsXNnMo5uvnjiVunBt2Nmvi3CDqGcDNiu",
  "key25": "4FecboeqCJ3gJ17dcLGKGzkjqY9cAbvFKEJ5gAMGtN8QReEkhkdSKKsBKaKPHRuRSKVuX4CbnJP9Ps1rDLJPbduB",
  "key26": "2zxH9bZHHLdYb6QCgMPrER7LCSqciJdJMTDsDLWKoE9fX2kXNKDa1z6nyYj4zNmJNMyao9JmeyGYwyfmvjKc8AGT",
  "key27": "3HAgTUxXEEwPvEnzhEX43Q6Ad7fkYThHDmy5UC38DGdbimHXBeriK25FZRVGWtDBJBcisbSW49Fyx3wgCBrBE3jU",
  "key28": "26vLd3SFPPSihowcF6qesvs1zRAJc35bnDFAmZaXogHT9eZwFmwXGqKuTsiRoiK6egxzVV5RCqnU9Gf3Z9Q6ikpk",
  "key29": "5VvgPcjP69BXeF97Cu56s6mwaP6wih38G8Q7ZhgQErMgy9uKU97ttsSE4mATSAPQaVGPkXyg9JbrwDWxsFCoAo4j",
  "key30": "MRtbNshCYBdTvGTWCdVaPH9myedvbEvdNSYs219ug7jGGYA2Ebs2RXL71bCb5ifCgdtmZYrJAfcxgWUZ3E5iNnd",
  "key31": "5mqsMiQKi1TBv1X1eECoavq1mL2uRNiizj1M7Zh5wx6U9bc456o8JUbpgt1mVbkiWsz9zAp1twYC8MmUidvDoD24"
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
