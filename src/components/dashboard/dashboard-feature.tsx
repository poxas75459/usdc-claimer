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
    "cnCed5j45Upk93yTSeKxUyN7zEr4Ui1i1t93n284LEX2mmSsgkDAm3B3VUerXdnypzftEVgh7ZEFUuw8R2pHap1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DTNsRzoGk1tKWM8CScspwCHfN97GQSbXu8ZdYhWACcA36pzzLoCzJkmzpeYm16DgoVXU1VT3Us3V7ZASAwZnxz",
  "key1": "5Qs7q5a58avebirzAbbbTTTaPmWAbPzTYbkPbQfR9pcy7H5hB52RTxezKSktSVyqUWDxNTaL427mk1mrZcjmxRmn",
  "key2": "3AHNALYVqUcSgBNZHqekwh1YJkvQsWwGoDyt7ivf1pjsu5gAV1G8wpiRm1pv2ZYYxiq1ag6tSCD9oP1HPFEYWqko",
  "key3": "2MCCzrxKjDe7NCKRdJjg73ufF12uv6EnHfhscA9pz2wBzfi8tEcFiSyFn26u1vgxkic1JjoQQStHtiUj2KTyhEvV",
  "key4": "2GKCA14in5WWvryXk2h3Xthk2fmmtPRu5bTGXY2Ks3NqpmamPCC9ySYJfVe9EgpDXqVwiM1C3eKRGQCkqwz9WTcu",
  "key5": "3wxyYVxsWUGrSxpU6Z9iqEJM8rzDBEwexaAnrrUASWzyBxo1gYAZRbTWcyWdZByBvet73dZFnkhpiidUDnF7TjNR",
  "key6": "2yvJiSm7iFSh6USNLhJBjfvfuHCG3RViw4abEe7s5LQgj3TApe1tiP4K92qJbdJV2ZZewsjf9mMWRUFwig3kbAHd",
  "key7": "46Dwp8KoefUaDGVmTMCS1WTMKHEdyCtU6Mg7DHJQvgHz8xnsf462WfTyJwfQLRKXGpmx1KczgUqfRTGv8bspNjDt",
  "key8": "339e8mzBCfkWsaSPd1yJ4CnXZnbpjmLgj5dsF27PT7ck3s6WTaeaWg3MmbFWqpS22uapap1kWnjUVmTfgYmgJZo6",
  "key9": "4gWPpkx1fCL2qGr2hPxhK1n1v44gczECv2NocgF7HKbg7WAvRbWpbBMqZsQLBw3PdMNtFKskQXKQNeo7xREH3DrC",
  "key10": "3Pw5NUgwYzCXa2suhZtJzk5kk5TL6G7faHXKZYSeuGayyA6qi5cUiYrP47tQSG1J1jsFDtWDxxZRFebQc3NJo99f",
  "key11": "5WEu46AmScQiRTcDcXraSCvA5nNDyYxqWDpanzM8AT6QTBcpzbrULjWZ3Jm5RZB2PVbMd9LZrxmXbwpLV258bUDh",
  "key12": "2X5skCiS2ZFKvg67pSYYwGKNP2pdu3cST68NY9rRgcyBsBiKYg46qSErNcJcfeWaptvpfWqchrT3rtUqDFUDAk5t",
  "key13": "5BXnhFKGXGKyv466uoHHJ259MMFscutegADvAeZvC9EwfvHhgG6WssfiJSZ24ys2mckP5BJ7HUhFQgH5Z55o7qAx",
  "key14": "4aFB5oMxrdWUMYt35CQY1oEUwecxPyKSkXTAZ85Ex7cZaD9jszx9DGDfY6gxq2NaziAifyFkgJ8UWkwnp96HaiNx",
  "key15": "mPJGC17D8aPD13Y8ZC24AZ2pqUofTbhov8Bip9VtkffdwHVmbSoPXiBDqdXHckh2hXWdBFaRzN8FKzxRiFX51eo",
  "key16": "65dT9e7YnuRKq84wZegTpAqRTxUJAWoqpDHz8mozpYC2mJL3nnoHFgJeNUiKuXb6KJjMRvxJYiF7NHWbi8hhyqsz",
  "key17": "3NrfxZqBznuiA3uvwXCjUrpyH9MjmddJ2L58e1Fnr5CZ7jQN3hvmmL9b62kdSi3eU5k6bVkdGhgebGd4bq1woiHR",
  "key18": "4ywB5rXQx7h6c8ZtJiqJsnkYU2Gfy9i979kMCwEhUMg6xUDdrRQHPD576XtQ37Ez76JtUu5dnyoxGs9zsjbZQctV",
  "key19": "5vrniiZpSdZxRfsDz1oZs6DwKnBJ5mHifK2AnyXiggL9XTVKgWyzzHk2ca2edhDgPxeiiGCRbYRpASWJbg7SmuwL",
  "key20": "5ToWTPMmM7WTGLHuJgWZaYbZzEgrva8ByNyJujyH2WvU1f1PNRKTgY4QSWhWGmnZerKwCjdSVeDicECMdZueh1b3",
  "key21": "2MWM6ALbtsT1pPirhiRodasqKom6QYtiuus5266iPJmkV9BAyZB4K6SdQC9sgh9AyfKiZqsY3Dt6zPZkGHfnEbx",
  "key22": "4CQst3rE8fMZbjT23hJondRVW1cpxNkz9GZbcDh65QjHhUwRiafaTuuvmWbDEAgVcbR8hQShuvDJDN9wPSqeykVY",
  "key23": "3zxMcHjNWujn3A8xXeeDTPZjh9Bp4h5TQYoPCYKcGbmLKkfuLGZwVwmWwzwDUarV844XSyHBhBrSLdKQUiiECs4Z",
  "key24": "3PsH2JHiH5wzXmo5E2qkbxvpo1fQ8foAV3KVzbMWkzCUWNYeM3xNMw6wcJ4ypeQAAgcPiRG5AJrtNzEMFdDqJysN",
  "key25": "569rx6buBCSMnX4DUJmWZDUcsKvqGy6xDXxN5TfP27zsRaHdsW3TQAQstGWdkyUZfHH3pEXYU86fUpqZhx9hpCbk",
  "key26": "3Aku5AAAAV7UgnFdVaLBZpwHKNL6fJcKHZASXWrZsAHaJVNdBxeoHeEowtju76NoLni3hqg8X14SJBsZ94fJFGkb",
  "key27": "4vpMe6xKbHkoLQfZRXEWGJ4KscizujkP7kxFVeftXpXkhKpXc7kn3HtrFf3Cd7KJPZn4LpM4BsCBWwzySEa1pnFz",
  "key28": "4o3Z7nq9oNop8FJAxwZhV6G3j71kGL7p29PVDBwx9E233xVywQvcKPj3ptjvuTXgN2ibdytbqAVSyEGkyqkdkcgL",
  "key29": "2rRpVYQyAbpg13VjU8szHvF594Anh37j4FCqszmamXC5c5hMZAaKoBMFHSQu8X9xEU2QnZjb5jukbdPugJR6c24r",
  "key30": "2maVGkzqZc9H39VLZqGu2M8y7SUZw7vswqd3zzcC48UUUFQH6NUoL2NGSff879sbHJK66MnciNVfJ3p1RYeNZ14j",
  "key31": "oh7DNmZVodtTWKy9SDg4Jfv81A5m4aBXw83Naufz7pYufh8RkwkRFVcTJvvty4YpjW2vpzup9VQzZdG5D4E2Cjb",
  "key32": "3S7z4hjZM8dhCDsphPFSBMu3d7HqxHx4uQ8p9c9oSPDeu7uSoMy7gnpJMg6YnDaBoJreubdG4XpqUPkdNSe9t5eC"
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
