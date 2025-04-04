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
    "P37fum2G2wy7kiNRTWkiBAXJskBqwik3yyf5J7KyEP22ZLgJ4DExmWPT71a9BNr7VNjC7CCTvKf3spkGZ6iYPuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqTR3h6UjV4csjQF5MBPagb6Xi2G4VxmttgMEzPAM8KifrxUqZXw66P7aQKvsaz1oEvJbB9yXe5CrKo2kwnHSn4",
  "key1": "2Th64QiFRSar9ouryE29fQWMcHfh5NBeiugEYBXT7h9ES37y9YRdMHEpVS2hfRAstM7vBkg5KnAYvEjLrNca8Aob",
  "key2": "4KJb4FTaxo2iPNacrFskQwyN14WxwsrLmg5LLo5YNw3k4SmueRhm61CgkVprPs2UYoSFigxsfwvKEBuV4L3bj9kF",
  "key3": "Q8vBnBZabTMiidqgJYwAcYcbbSHnFFLuzJTnopXA5oYTfX6vbmV3MNAdHNkbqDVAZgqDzqCYaHaBBVNr718xLj1",
  "key4": "3mhxDntMqWVhmLeEpwXewGNyTL85T6SLwPmSmjivXD6AEGR9hnJENBt6fZD3j2bZBXj5Z91gTj65JhGV2q2Y8vnz",
  "key5": "2tt22WPD6fmzhStf9frr7sAfoQdrGkwv3MrbJRTPjEmBUE8sJGFKWki1xqUNK6zuiwUUa3kaTNXbD4A16hDud9uR",
  "key6": "3x3L5oYkrRV7oU6rWm6UsNCfcYnBSd8v1r4UeqbkwfXHHjz4Sv8U1h1svFELoKegkL5f2Yhi1bkLGGJJAmhfXnSV",
  "key7": "2UWN34DUy4mLCPdvoXM6u86fJEo1mZhAuqBYUoerRYahMCGo6kmvaxttY1KzxM5P8TVW7ugMwPQBpQLX8TGCyi3n",
  "key8": "GxcSK1SLoHVrKErUJefeN43B7H62q3S9tASbYpaZBThtQfNE9Sr5ve7ywAYxnwaQxKBsdNDvUpuwb9KQzwr6CAR",
  "key9": "kgec3i17nt8n7fER5NVQkczEJHpjoqc2sXAkyrvMQZYnaFNP9XZpcjSCV1yaDi5yiLCrWrBqKgEKjPbYWmqDa9h",
  "key10": "2UR64zvEH4WDtcdib5CgYSC7Lts2QYVxuqNPYYVHbfGkEoPCMJAQ6hYAfePhujMj3BowPqiE3ASr5ogUGEs127hD",
  "key11": "3RQDyMzpKRa8xpEeRmtPJviNqXuGNQHbUCikWQwxnh9oWcUcr7iycvcTwGUo29EKTC3tdouxKTzDWJ3dwqBoQmTb",
  "key12": "5LybRZyvmMdUnwaE1NGRxEVtsoR88xFGLZV5y4MbsRcarR1KT31P8mRYh18c6RgnAyYtSmX3BYCHtz49tAdoyYGi",
  "key13": "23J6dNg9FotZZUUribgKuycLRj9rp2jkeXyynEHzUKKt8YXN6nxtf9KbKUkKjyDBjrvCevu85arZAy7nrhgqTsUv",
  "key14": "5UkCmuPhJVqDvy4TfdEAq1EJorF9D56dq8rD92wSS3781mJzTpDejumZu9JbuMpK3oiJGyRoKEoXE6dujSUjR8nU",
  "key15": "aEqDWdCad2A2w6Xt6wFuDEZZEy9kT6ZzM42FX6Nsoz7evQC3rp6ECEW91ckkLyUxAQb8RLxWqBccMZ8GiY4fEcJ",
  "key16": "4n75PzNTVeSYE2jrCQLsvLFBUakBg7wWYgn8mt8tpcLvPXy7a5UQw1UTURrouMQJxFqQiopiojuoPangAXe6Vqic",
  "key17": "5u3agyyKJAoat42eu27MigEscyXmB8sWBC7LU8vTL7QJVpAZ5nT2NVfTwoJXjuu5gzLfDya1pMpiH9uyf3xtGQ66",
  "key18": "2Rpxsb2d5dzoAwP7TR4iinrH4mEAk7rVdyRkp3VRFdZsHShgrWY7qovrKc58cDQTLPNEWMbwB38cHNEErnjzuTVD",
  "key19": "4H2Ub9942fNmqKXVS8ohw52hGKqBFPUroHCg6QuzTPJYdZrb7A8mepXuwGVHW4Y23RDPincsm6oznSUEgzX5b5hg",
  "key20": "2i2Ph7bjR33ckTgPWtCd9522gJ4dCTJk5kRcv6HtLV9yyvpHypugKAmHtHXjCcujXvcGrLgrr4NEwudY7UGmZn3R",
  "key21": "4MVBcVHnc7yFG9ZM6JTZwQamZX7ZHrU5SXEuJa3ADm84EUa7fHxQp66agTSZqkV6daZFvEup2BgcQLHXBnpqSUKW",
  "key22": "5rCjwrgTZP9NQqidAxiAPnDwGGuA9qTxBpvhVn6bJSDFoY4CL71nurdmuNxYDLEgeYGUN88pdtuzgwJ3q9RzYc38",
  "key23": "2xBz47MLf7hDyLnbYC3tgYqLGjY1Bi95xi7GaWWkMSs7mztGCxSaTxpk9eWCEVjDK5T1nfM4RvSpYxFU8da4tGGa",
  "key24": "4SKbdsXS9XEoqfbWcFCYfx8orKXR6rYEg4qEhdg7AQyNvsuegYL9dkz4dYaoH4RHkto5e7g5DXXxF82WwnJweWuA",
  "key25": "2RjKJmF21eruGfXTXthkVwuY3ZKaGUtUAuKUQ5MXYc7krWnMnzA6LvtEtZUJTSw8DiSbJiQt6vW6x93uQP6QAQbz",
  "key26": "3rV2mv8ptNvuXc8yKEKLgQZbSGRNZ55d19YPR3BVJsZYj2WS7QaYY9TTx7PMPsjSuBqypTFs3KB9eW79opgUbahh",
  "key27": "53QXWzeFHkMsWNRq8vRJa1Bn2U4p3h9uCnHw4aTcRP4uZek4V8jMypp3NnsTKaZWtutwXU2TNdMywEY9k7Tebpbe",
  "key28": "4AkkHDzDoFWXPciJJbUyzstvtVk534goZMNDKQJ6iNQNZzBPiWWyoVvV6deeyURfxDw1UDNeUrAvkdiY5TtgNJif",
  "key29": "5g53sr89fCVuGppyYD13XH73zxevXv7HpBaUkJcUFz5zUX4BYFUfyvWLUrmM2R5ZiJmbaZDcPd5wyi1uP9nUYK9c",
  "key30": "mGND6Q3nxYNsCefJF8Vb5hvv8hj6LYLrpZowaCKmYvK8pP9pbu2fkbHz35RkcikpQCRsUeSrDKrZ1qFgijXBJJh",
  "key31": "5z21ovMUJffyr5yYT9yk7ZGRaMD2gM3kKvK6DTzxhSaaTuGdvti2rWncoPXT2K7Gx2V6B9z3JCWNhRr7QgUQtDPt",
  "key32": "2K5YvsVxDJ718AbYYRkARJrhBRbUJeBG6Sy25NWQm5Nip9K4Wg4dKMCzc1zdobGAcgcBqAYRCJEAf7w6Gj9AyMkG",
  "key33": "YPzWtVLbXE3WbjgfqMSYt7bjYkmzioTeucPN1xKSeuQstZrxQy5iMpgnDbgjD4huWMpFz4rFFwvA1oaaqGLM3H2",
  "key34": "3u6jPeQsCD3DtzcpjV84G41MP4HnsqnP42dn6fuoRrdGAB6Spe39iq3gzQgsf2axujFsYNpSpACr4vHdY63jbWKF",
  "key35": "5cKXxBMik8iHA5M1DbNgukhn9crw1AceLo7BJNALQB6wD4CN7AshddSJPVXMfUkK1xjA5DRxgWCT7sTHKLc65d9P",
  "key36": "2PkbY8ch6JVRuN1qtqtFaCyJVTve5wBTE2ETSVbFkLhgP8ft7gagWJYwS5iNU4KfRWLukT8veqzubGdFDmxuEDb5"
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
