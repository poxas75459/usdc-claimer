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
    "2ehvnySqwUoDKxsfQWHppymj3tCMT4SkhNk7vwa6QZxz8VvTYWqF1Z8pLnqKPSvMhD1PqM2DdKvTWZrzp43QArYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XMkVNYiN14ykXZatKyK4UEASGPGa1UH7qB2Sp9nAHiQ4c7kt1X7RwkhowzawzRJjRBRwExvSGJnkUuimQgcydg8",
  "key1": "2DK2ZtFCGY99R1XPMT7ufya7WhuajeiE7rpPoLHfmHPcgTeVvCBeFgCcLmyKabZvdCnkdZb6QpRMP1BUFf5785u9",
  "key2": "242N3bJdVmbKZsEYDhf4XqkAJvD8Ten4ha6xPMDpm6VL5VGrh8dw3fbAu9LgGjgnXZCqoeyM9wzk7zhGSuCJF1dK",
  "key3": "63QvTws5RELHvZ1q413wFAJ8ckQGmsJzS3A2oxpLhthHKNuouBJhDn4HoV8RXjQNAegkXZo78tKCeGLp3GUj71zm",
  "key4": "auDhUw4wUkC5hDz1cYPTS49ZH5Bfr8jQnKRQhnXzgNJkknKAxeTXZvPPkR2MEaiPHzEjsNSrLhjQHm9jHPxDjks",
  "key5": "4oj1uw7PJ3BFUfXSHNB7KLpLsRUW86VXBKTRg4VbLk7YN7BWsTbdgp2w25p9m959F9tkezzFrtJAvmaznu6j6e7R",
  "key6": "kQCR8VG1iWjQeb6LDgV492iD5F64q5UrVq5yXbaXfMsRdCDTYCn4tgMN1VSQt5zSwQsX81wgdtyv8pUTZ3Wsupe",
  "key7": "H1VkTc4tj29c3fDaPgi9FCT65XgWsxXastWbA67U98UdBVohD9VfSpdUvzhASxXB1eXoS3qmCLAXsVTivSariLo",
  "key8": "2wiCosgiA9HuMYz3h1gJucSBVhaXtcUcsxLjNSQV9nDFPQvMmHnAd9J2r9gC1T87tYVPiwMw56nboLBVkG6aJs9i",
  "key9": "Z426HMUe1gf3KjDzTTQJeitUYF2UszsPdx1qDrkqTqYDXnhmKX5FhdUeEErV4vT4bnDYqpoVYrZS8UyjA7mNKJe",
  "key10": "3zwyR2hhNAzASnCPFT5UBNcBaLqFCvYDZn44NzJWbz4z81yByKh63j3XrrGLSnrE4fn5XkDTfD8d8SqDYuUdbNda",
  "key11": "ToEG2hr2k4y15wNk7FdGobAjQUoVC9bMwdGFpUBcTsNodgi7fqisoTGPQ8MVzjFmwtXQuoaZEQgPPoYUwABFJ26",
  "key12": "5hh51xMSUu6wUAQneLoGiqFnTP5z2oxKBJJ2pU1HNN1se54CCZH1NR4pHWksFtwtzgskYkL9c7iuHRzdM8LtWZeR",
  "key13": "2mxgPnUpfWtugMKwRRsDoUAtDPdf1HCijQb1ZKjhcbY9mkjZvnaND1XyGa1j4q4f3mSnXC5ZdgYAkZSnhrDR5SMz",
  "key14": "43kBWWrSHPXGk5b6vK8YhPcik6QyQcCunSZiqf3HoWDdjzw6XyRtVHJAwaGu9TPgn8WpRg2T9sAyF28Yu1ZE49o6",
  "key15": "3GUyu7CbxKkDXAjgYo19W2jx33PWxLCiaLZMNAudKLnKF9myjM2GdKkFXq2FWo5PFMjCRDdeuaV7eh8o7qyWRU9N",
  "key16": "3q3GJKrqtLP4gvk8gZmA4JUwHUN8KMvWF37FRYzGF9o2qqcCV5azeq4M724RJbmLYKWWttSKaeurn7ToJxfLeuft",
  "key17": "5VwZvcx8KrECWmFYPujhNy4CgdvoQQvq9QcKBpDFzujFoUGZZ56yFVsrBmFp6fUQMMPFtkY1d6jJCfjFGy9SpVa3",
  "key18": "2Kx4eTgWNeo9mQwTBk2rK6f7ET3chB1eHmQKTdZbsgJ84dZ8tdv7aCkTrLtcUVR5We5x59auPuF4cTKUyuaZZRPf",
  "key19": "21LbUxGKRHgLDV8ib92zrGyFjYXRuLAryNjwtFdLTKFDvko4YLb8ygHnit4YXcy1c7NGoJvLPvJV2VxgvVmst5JR",
  "key20": "4CBwSiwXPfmXTsqjCLaXc5V9LCJCvcim4AddwF2Tpv7JK6WXeqJFpKFrbSp9fzFcPCJwHAcWYNcov4HPeJ8uirwP",
  "key21": "5EKTmwVRRD1H4nYH1e4d3mtS4qBS9NKZGyHMy1KhuYw4JQidLNBaXtW9FPaQ9PtvXzbJNNDD1osUgMNbNHD5yzyJ",
  "key22": "2d6A7ACpe57ANey65HVqp8hXCuyCKjfJa6PdmCf92PWNuP62ovXc6QErj6iRUSXcH9QiVWy3Z4pgauhsKA378625",
  "key23": "2jZhmQMWEdqzb4Whj23zWKWkkLEs5SWNuLFRRS1H4DY5JqeAEmvha3xADfcVudSct35NuoogqgGuNFx4uWF5mrma",
  "key24": "3YxbfZK1mbEsu5TY8AFqQghtY9BP88Zyf93kvs67vXZe4stCRsXBcohv2YA85FVUHyeimmv8UZ1aEnjUQZEEfj17",
  "key25": "5owGMNHEGuxibe3GToSqyw6EvvryEkMTN9PR2iNic2RDXRCAKRf7X3o8JJo5XZMxdWvs4ESV1HfobXR7Uxh852xZ",
  "key26": "2s8scLkFTwetGfkPa529XdPXBnUXn4Uv2XXTcrNh7iznvyC2RX96XEJ11o74VVc1QJs1xpFTuqsAxZMoju4oMx6y",
  "key27": "63kJ5iZVAUfMtAYcS4LM2zYSnCpmVsKfHm6e5X39BHFf6N5Ck2i1tRDYvBKqEm7j6wuPAbHnxZ4Y8mtKHcDTkPfj",
  "key28": "4mnRxRmQwFxPu2sYG6t1ddxveSL5gXWd451cbW6yDUfmAZE17dirXr8LtTCW8gqQx8xqsRANNyqjun2z8syvT6KK",
  "key29": "2DdCdsD1XfmqbG55Couj33hhazGYRPFwT1uNMF1K5kSGbxncZ1gUgiYyZNoyn167rQv4GeeoK7AkLrsQyHFWyU4N",
  "key30": "2PP7wtbVjb5GA3Wgb7ewgcHcRE3FyRPZVQdLs9Gnmk2eM93KAveMuGYuEjgEUnQ2hEDTcTzfVHzjcrx4NdFApPk",
  "key31": "2wnWZ5PWNFPkyjkywYow3CBqDGosfckeBhSuqKZg2JmKQZBJC6cFr5PKf4ihWyqaHJWRiWWyTD1vECK1D7cZhY5v",
  "key32": "2FYbVhLrJqHKrevU8ionWqNP7Fn49ri5oLCisxgJsWnYBUuUCR7MGTq3AYUWqya7VtNLuztg1KpKeguTecwDSJbD",
  "key33": "3jxAXxJ92WFBHz7Rj3zPesUXkXr1BZfVnViWNDbZq7TAn2Nf9w1fJ3imNCgZUkQJ2Ww89ZahchxPnGUtSzyxjpie"
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
