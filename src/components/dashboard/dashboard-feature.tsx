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
    "5PNf8RMJxR9WrFSex8AUqRPhJ19a6WhoCnqRGkGXVu8cc7Ke7LNHS3j9uxjrMKqQemYkCkN7mZGxM1qmRMLfSfGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nsa5S46YuG2kkKBrnpkVYsdYJvPa2qriED6AjsPvE7rLYuatGzeC98zok57bcNjQLASg3S7RELtKqAZrzwhL1A2",
  "key1": "3qB6NjCjP8jWzhUQaNgDVWAoVYqYvaHhAmbiuHW5GUKsge1PG2ZsKwZknqo1729PnSmGLzqbGaG76wFmY4M4Jzr9",
  "key2": "3ZPqNifFVFEd3oXpsyT1Am1SKGNoLoCH6xSzbPb5k1CnGPkozXxcamJD956M9FSJYpQ3zBScnt7rssEEbs9dJJBc",
  "key3": "HT6imvhrREgEHnXXw3EJRTwSyYxR6ugJeytgSJS1dom27ziu6if8MYDNScpKCjGAvsm6EdC5WcY17PrgbMX6aQf",
  "key4": "kUGqfAEhvZpLbRMnfeG3GELTHrZsYxsyxrv9cxYUKxgwuwoxh5EnGCFQa9USJ1mY8nvGPKdpH476YAFQ8JUMwzB",
  "key5": "5ZhTxV8KPsTJTgY3dau9U9JUoxH1ktdivM7dHB6jmK5YJViZw8bdQCexzZj6TJNpy6G5kHKU2eCch9ArJmBiRgM",
  "key6": "542T9YbFnAuqkgFMJxXdg7KEggPZkxJVjxd6oGSkuj9aymsMkjBGW54J7k5vmBfjmmPCMBz8xLSqJNgD92mp2nrF",
  "key7": "2R95SQhuJVJdZnqvcfqqJ8CUwEA4hn2PWHxnXRnaYDZtuhdh3syz9o2HLs7WDVoXPy4sgX7PdfhoqyEPu4MD77yU",
  "key8": "3AdzHZaT5URk5sgHHTYSZT7Xa8yEiQZkKDxJqmpa8EDLWSq6QRvMTtsVekQGQ4gvByyewci2gx1SX5ExWuCzuW1E",
  "key9": "5KXy8LFooky1Lm5y7J3WZRWrGYTrP37LoQVRnUiJFNNR4vcusjtRTw8ndccrkdF4HbGzSJmZojGBUQvX3e55s1gR",
  "key10": "2vQ3vPoZUkULC6TG65V8trC1nEsdNfdkJWPD1TYSm8eDt4caBjhb4CsXdEtuCqj8ZDNBPK9BDCYrgDFMXzbYob6b",
  "key11": "64XagVCMnj4wCUaxJQ4EjXCqJANf4fPPjjPxMD7ntuUAtKb4TBtg6XM1ZMdbRcjMpqD2JAjk1xY4APV8v1SVt7Vd",
  "key12": "dsg2o2b6QtdPQXpNDP9nFE6nN4MPdV3Y52Cf8Gsxs4FeTvmiPsvPC1ivq5Npz5DuMif1UFq9wf2ixByuxz1nzeb",
  "key13": "49wKWsb5r1ZJYB1FFG3Di3CkyDrXv2UZryH48ptQLupWjGr9jEFzf1GDJtpmbX9FDDWs631C3RgTP1u13t8euTaZ",
  "key14": "2Fd3Ap88dKLNZP1toKQvmUmYCWcQe6tUhVX9dvimNM39UUauczv5ZM5DcSr4XGyFR17bCSy3FbqT7Kxjyj7WgZP4",
  "key15": "3r1rfx2kKAvJtJ4J9Efa3fgn7ApAwu9HJarimzUjBJTZeb2pBUDHfBbE4AHuY3YqyHxdopwNxs1FR6q5BQDkkp1V",
  "key16": "65cCNns62tq65muXjE2Z73zBZgCughfggZdAhPrxKuVj8QPjgP5UKK3GuesHjxghM4ekm1AHM5PW1hA9G2nLMeBU",
  "key17": "5nJmo9UiJR7fvaK3xNhMM7RpybBZ7zvYoYFKZ2KX4smg9wA5wkiasqeAyNtpKUsLHJvxCqQxxN1Bm7ZVxaXRNtNK",
  "key18": "vNAmjHfxCcuVR8Z4xUK9cwD7oYpWYm5Zm2ouRBzqLpYYQcTiVKuKyJCY6rxZjC6j4tZKY18LubyhFD2SHwu3NYw",
  "key19": "32vnnkprJC9KaqCqdj3mS6LFLq7Jrq4vTZEaXikWm6sJD6o1FJfztzxCfqftsNwUWRvJrrLSEE4CY2EtwKnu4xwu",
  "key20": "52uNrkyDAVP9eHQS7HMynjEnUWqoBEkjSsjn5knntFEJDF4q1qacCYsixfswWWyQj3KcjJkHfSRC1tR3GMaWSmHx",
  "key21": "4hgWXaELbnqrgQLLChH2H8UKkFivUB4yiV8SHnJC8443HPh2hnG5gR1pmX4VdqqktURJdSfk7jf5TwWSDE1HALtQ",
  "key22": "4QPKcM99ZQ6zwi3bGyjcMTZzRuzqqsDhbSf2Lm6GxdkVUNC5JPxmb4uWwLhNebMQdqVVr6hqsFrfvyWujARXSkVW",
  "key23": "4JXMQB7E8KjnpafdZgDHgdo2E3wHbV8bJdgURVzL7HUQiuUXqVidsf1Ygp6pgh1Ga1MrJeYytmQqcQF23teUVN5Q",
  "key24": "3jd8EVP9E5s5oyWRDbKWaXQ595Q5UJujLoKLoC5PoDL6Ta47mpwPzrLK99qHAsNMQzCUPr9PrstJqiKb6rXWssKM",
  "key25": "5gS7mcb3Jfm3f8KjFmAdHp7oNvvmxFgT3ei1wM1uHhdoQCBqJ6oxfJ3zaqFLqQ6z5XDoGxPqgSyWBxoR3dtKhrdY",
  "key26": "55Uy8PXdoT7MozmiUhsmc349invUzrvcLg7stsYcXPeR49kx8JDPfRxNGgqHYMtH6izGKRRxwEQs4vL9nPpCkgV6",
  "key27": "4P1ixRFBH94u4VyfvhfvSRhmxw27AEKC3aS4iwyVwhhTXvNrp8XjF61s4bqYNmZUso5R4fkVXwMyVP1EP9ZqKsHC",
  "key28": "5G2oq5gBAXVjfYWrZeSxTb5bvjvvExuhCHXVqNynjURiAfURT9K7o5pVt9uVdtg3wZJfLpxTS3s4Bj3hJUjBiBqm",
  "key29": "GEwiRCQzDiDxTkCYVeYczEmxFZvNSzQgTekpBUSgXYnLxMhsptEiGnptkGRFF79hmWFVu8oLTSFnFrPt8bm8DZP",
  "key30": "PBGDXiVothB6sZRKbfr2BoR5DDsCQnkiw5SXnKRnd6MTyRaQa8xSAJZzKKR8JfHsQrFweFd4J4K5mcNn7Atcjdk",
  "key31": "2osUhMjjfzUEzpJGn7EN1aMCoxHmp2eA8GJFqa9DPeDsXPqQcVcvwU4cxWdwodPu1N9jDEyH75fPV5iZnchiuMmJ",
  "key32": "3Ce33vfvTGzamwigyANsP9Li8UCYDzrndSov32NaCuceZBA3RphUqSFoF7JYDNu7oUXS72aeTiMHbaCsjDX5EZYT",
  "key33": "KQuNGwJ3AN1Gr1bg1ch9A4HrnxCpYTGRJ8Mq1EX1j5NFsFRcTfK4wqSrAt8wN9K2UUi68AiEH7QzzfEJ4uGN6SU",
  "key34": "3euXCViwCu83SossAyD6P1puSeqgZYXSfsiavCu98636PkJnCpUNwewE3UVskzU6JGrZb2rBxoYKhJEK8EfoEhP3",
  "key35": "5kyXJewVWfcNXoyG5weELH3o1YVBwNDMwpDcng9qW1v6f6R75XTTGb1QWMRMKfJuDEcwv4jp8x7deDxX69MRFX9b",
  "key36": "4mtXq9G6G9HgMrpXLB6LGshAgf88vH86sRTmVGRBwK3KjiPSyDN594V4KMq9ZyzQ2gHXkyEDFSxn3pSdptVSoffB",
  "key37": "4cuJ7Mgs5f7JzbFCEwCJDQUsqGpBeemsrj557kUeqhDvK1BKNPnEC3dwvMNDT4rB5B2fRv8KePEWZujn4dMbrD6x",
  "key38": "sRT9BcKPQMRuzgsv7emyPVDtb2VGPoNRAKfncDDrtvBPaUfGzsw9rZ67oN1jTw6KnYQ3AjgLoWD29r5ySW8Awj7",
  "key39": "ywKynWdq2nJSD5QPcos2VPGz6qUajqso4zyfoMYz4x4Y8dntkcFhNQhMP5sHZ3oD3WVQS2uAgmUrGyuZpjtnieu",
  "key40": "4fuHxTTQyALon9K2bZvqRSXjSu3igjiEWGgnDYu7F3628mWxoHecdVuWvhcpJmXhXNcp2k7wV6p73yjMfKwcWNx",
  "key41": "58LSd3EN3ztmrmqkW6DFnJDN66dXJCpwK9tzGgvdJE6h826AGPjtzdKp8LYJWcEUZoj3G3cCnqJTqrqQ9KzcWDtH"
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
