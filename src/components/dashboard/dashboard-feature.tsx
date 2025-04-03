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
    "79hz5GbUTkx4fXJ86k1CVgkxpS6dGUmVVtacKgTEKzjC3k81vLsk6oLJd8hAYy5hGeCK6UBQyacvdjFMQJa5vfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yWi7XX2ge7SJpnst5ygHosbZuF65KAHuegEWuYmmCRoeguFxGQ8EcjqNZBiq7hGQvnqmbES3sxVnxBH9zj19hUT",
  "key1": "2SCdJZuE2rCRP6PokE7VF3qV8v4x2GeuSJwK6mx92jiRQpmJC2J9PeC6939uKMExFMm991ZT2kUQ6TYNzMtnAEbx",
  "key2": "3PGsWxG2CRQ1ev5zhQq7sYBABa2yK5jiXerAxHcMSQZEa8iPTARERcsnxnz7ciUCjKAgAJ1EbfFEuKYWAfsLNpzX",
  "key3": "4nKg7GPAyLJ9KSs2LNrcsUbLor47uys5CWzbSgPZmqowwE5EoRtUL2asD68Fn6udEc1S519uBTgoB7yRTETbgMDZ",
  "key4": "GgGPAuNZL671HrUgdqB6woz7oST9j3qah83pboFVy13SMPkWh9noAQ2W7ukRKcZ5xx6NcuyCtsT2iSsgAZofJcC",
  "key5": "2Co5exZWX26t8ryjBFGLQowbFyUQQcwuk5amM4JnB1gCSoPiD41HvrEz2ZEsDP2RFUqbBq9n8FgpcmeBzJ94Qm4W",
  "key6": "52eKkfgGpPADUgwe8vWNx1oG2ogsWCmztBYAt1gCwZezKbZDJT2zd5Et9r5YnQHYcMAH5LV4qb91N1PcYuBB1ktA",
  "key7": "27D37WKDg93h3UbNtTpNPcpEtZr1eSuLY8KhHwAZHXMcnyf7kXqNumPW9PBpo2wKi6ai4WudMd1ggJZT4zSd6tQH",
  "key8": "2YAV8aCph3jkFySjyYgDroNFzPUYaJ4taef53qhG4CWLFfCojfkt7J77Sm9FTBXaBcQVWpFZcbJeURkvTQuHMZCW",
  "key9": "5Bec72Pt6M5v44NEGS3kMZegKU2gDpiRqMumKhw8s1Rqpj2ywK7ZcZ5RjL6hra8vw1xRocYqAAhouxZ7xDHkBFsc",
  "key10": "5hKKvgVB8UKEXE3oJVLW4N3rYs1fmxPte1rgJzXc29DameXCpy4rY2kCqf8KPdJCPcv6zL64cqhbPPcSEa34bMbv",
  "key11": "4ncrZBC8NPE15sTo1k25nz8SHTRCgPg1M5ej3qRrhcMMc42iULKD4fk6J7wy8mRJbmkPAsYtiarvE9tUL7npFXqM",
  "key12": "4bEnbdABf6nnHJxLTsUYoMoWD1SWZ9xjAKM5JtKGsa1uDAKuCdqEfGvkHCtY9hNaGXb72cYAzcFoxKcsFA7j7WbQ",
  "key13": "2z38ZkbAuKQBASC5TvCt9uiQP5JukyGCxdR2xHkdpWBFhWZkfAjemeLUvUZdjnrwkP6b1WKCWGdthEzb9R6HMBUg",
  "key14": "2NpPJFHdNwNVJ6Y7rRkmTVmXVqcBhk8f1zJ6RiTah9MsKzrJR2YguwywZ8P6fsQoGKoa1XdndvkhSTQs1u6PoNQo",
  "key15": "5h8SQR9fi4nj86zUkNUV2373dWBx4infFGeUaJ5R765HBqFDAi92Z12rw56RGzpMtKYcMrtsRcfneNkGzz15x7G9",
  "key16": "3F4EQ5R28ZeE7K93uBu4ZBnvVgu4Yy6s16oXbceUtC68RfJ6ZAsvbtvAq1vx2HkQKAJ4qiBYvsA2i36unA668tH6",
  "key17": "JqnLPvuHVyXtxBVTFkF2DRd2RypC3jkNVU3UPzmaMRxupogJprV71UENigQD9d4sgAkArHiQb2fhBeJvF4vfAef",
  "key18": "4GhHpHkodEpxBrGbv3zPwX2XvVoduyiEPGQZSXLMEV8JD8pa5r8oorF9zyB3xzgVVqKHQv6Nim8EQ3WFcXFTeyuU",
  "key19": "44wY3rqCb5ndzJ9eUiREHpFocj1R31eax5rzZa3R9E6qJnXoLT1y9a57f3v5WBKsb2kcrFp6eoKBYNfxuPhFoj9A",
  "key20": "28q5KzeHnssBszaZzFxUR6tU1CLTZZs8qxVeU9hbBabWSRtjnsbvBJoVyJuX1GtB8g6i37xapnggcYTLCtejXsQm",
  "key21": "21S6GQzEXmip8NWr8g8sekheYFpjpXzGBirZq5cMgA2FrBCE8mTVUTR1GX9vG1LEztDmVCxWAdvoVsUtmMwac2Wn",
  "key22": "4A4sssqoPZ2npQqLSHzQhTb7f7X9xoueiBsgSSxcKkDcRXpVrBsvEEFfUgk2BkZr1gm6eTUNjbWrGrm9h638WDsc",
  "key23": "42aihBxXNYt31eSVHXW4VYsUmJ75ivKdvzD1o4fheTG6i7qCH5oMcc1ewywzNNoSWwzB6GkPLgcmNgQMHBnuRuqo",
  "key24": "2GtV72RXsFGD6osVfJ5wqY6wt9tkZa4Fz4aUhS2NfVfLVfgu1caeqZat3kGfAdhwPDqguBviVmhzRjGehWxvP96A",
  "key25": "65f7AzkWCC61nU2hLtcYTwTZ8RKVMqnjaWopLSNRzu6ZxfVUD16DK6fLtXUV3YbFWWdyRLv8kG1mX6k1K3LEYJWD",
  "key26": "2Mi1pgVcmJmb6VcvNfuA6AaPXZgZMzVZos6WUe9yYuj399JtLogiGu5hSmD4iR5ZrFRW7WLJNLFu6J76dAVmFUTz",
  "key27": "4sGqpMwk6YY9oufYPi7qXaW4zZTnqLZ5oejFLnn5AeozKGBvnmRaJ4hN6Ca3Do7jugQyzQreXBG8hGie564isJL7",
  "key28": "2VD3myXqQ1p2LHZDPQLEYASsS1BU9QtPLibXPPv7pn3p5evZ4jLAewDLhs5K42iQwEj1qf9XCWz828HatVQbx6Py"
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
