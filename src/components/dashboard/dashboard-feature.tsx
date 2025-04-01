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
    "2b2EB5fCEXvnBnnn3tm318FkN3sZYeYvWyEktLw6ZC6jFVyB1jkU5i2akZenmDCm7kdq9sxoGzxfGgvsDraxgacq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WncrBxkE1wqYfMpftg7ssA9QYy8qaNfj4E6DYejwnJ2vMfyKiPzUNye2YKG17sgjNQXvN7qkcWkdvLcXTar3Fba",
  "key1": "3fi6vjgisrdQm7vWQJcYNHLoZKnEGQ38Vwg5HUs9qphMsQZydecCBvgPHQ7s75jHbmHkhC8bRayL9A5nvYnZThCa",
  "key2": "4VrU5u4yAeWHhoVZNwgJzBLWmPZR9tqiaaWvymtm1UkHrvQQzU2cnQU1pBXAdmUfhypruaKfmK8FVN1krCrP8Y5e",
  "key3": "4p7vF5AwUuZMuiioUnXsCAPokoboog22tuKH4nT6HGj8Hq3E4PFPwkK3P7kWbAiUE6B2dgRxxbZdzVaPkAPoacTx",
  "key4": "3DunH3HurENejJNb6QXL8t9VfAi6kN8nu6Y9Qa9bq5Vqx9RZiFX6kQh8dWc4cEPxhjMsjw6mHyBHLeXGyGCwk2K8",
  "key5": "29vn4L5whEacHG8zYggKQ9biVu3WMMcJWYosCT9LkRLrWgfAwLBTkW1ZhUgrwB32eEFvdLjcftyeCpSBV9hZNbNz",
  "key6": "44VYkV5vfGBKM7LBHcvZQ8j72DWnBjXspEmHXPHKomtzQMvsKiTtiHXJhjUbkHsyfzmQy8DHqyC2AthzptCM3HNZ",
  "key7": "3aZCGApYpDL42UYunRvxfq4f6751xtgNWRFsQbparENskp7JQsN3UdfCvgNUsJea3GsAdKbxmVmV8zBB7CnuoS5U",
  "key8": "4Kb5zCRZFJdBXd9rYeooTeMB91VvPcES9kn3vMdGUqHAmErTFZLtdgbVgs2D8mUeSxco3sEG3Ujf5AvsoYLxUBCu",
  "key9": "3br6G97CQkAWJvFAig3TmKqxGFJfY6ReyRkJiaq4Z27u5XtubNJ1uzp3qTy5ZcoptQ3ATUUFFR5VZ6vZMoJ4yNd6",
  "key10": "2GnNqn1pXNLWd54CVHJfe8kNFuskNWvv72NbqMKsdCarMQNHVxx7mVJDGTxFc6qpGEd8LFwQSrDFQySG6ikTnRwq",
  "key11": "YT81YNShVuT4aVJxStWoeqetoCkd9c83qRt7GD1cs5oxTe8eP4DwoRuiatijRQoTYnaf1e4D4gY2wT7bJWHbg14",
  "key12": "58KceUqN3AwH9TGogYMtPgTgwUzM2TcBuxcamw1M1StAzrhDA4pAfFmhZnQrKngz1MbhRrEzsNFyWa7dfjW6LJUB",
  "key13": "5ZGZofGNXujNDo8UrvMwFgDkRDqK6py72UdatGNedWRXweohpzynAQhHXBKz6Kff7SvSWRpUBNyjgwqdQJpaH9zj",
  "key14": "2q4TSv54cZgDAXxBDZYhnCPVbPiA1x2CnbqKXix8x1ynE3SoQuDsBBY6fh9Kfme2ffMAVKZj2xEdZogq8Yp5i1sG",
  "key15": "3rZn5C19MXYU9e9U3xpaWELZCJykjPADjkRqtpJHmF1NjAHeojRLgKrpnAFQR8koJ3ggG5jfxcQxkRDnt9cAdrwW",
  "key16": "2uqxbD6HbwjznVWoV5HTPF6JWRgdQvgwspz1kj8hSzuDNzXmzekDorhGR8uMQ1VnovLRVqi16ymMweTVwxHWZfcB",
  "key17": "4DjkZUDoFiTdHgiTxkDx6o1EfkqkJ7X1sWLSKgaJSL2waezrv9ZmYsgQNibfy7CUWDHXYKXudXkySGvXqYFnf528",
  "key18": "5QyQo31jswzcnySeVtKRzk7mZesU49nEes646zp5szXNBwK5h7xcRzkAahfhPgCiPQ73Ta1U2JeNgXKkugomrSsp",
  "key19": "UwFicJBDK5ci7HHDiajrCXDgcnSu8YuhUwa3UUktwmJUy7qJ1V6pmc9zyYTEbtxcSG6gnh4fiFGNki88h9pDba4",
  "key20": "369KMEUuhfCDhvkD8f5CMGQGg9uEMgM99H7otCayHDSridvcBhLKfEzKnq2sgyMfE6w5aYsk53Lq2PA53X3JGgzH",
  "key21": "2gw9uQpkdtJBjGJTiti5huK2R2S6PXZgoJmjn9JcMVwMtcKxdZZxAxLPb7otL4FUqhR6CXyt4b6eqPjLcFohhcLB",
  "key22": "2HEVNFB4mUnDzxVJDNf9pd6yu4gS8P5HNWns59keyzGppCDycPoEgGwYGKJBzBVWsvp7R54n6G5TnWnQBR1xekWD",
  "key23": "57XJxiSpBJysP73v3AXzD5cJRcDa79dfQyb3fuFRgTsaJxKGhjrxHjpsekYQ846dLNtnSuzyWpoMu7rwVy8Er3jP",
  "key24": "RnMnWeDCarkQxWHuQndazMwnryy86JaNK7gvamJt1GFnsuGZVNUNzUmAfKTmY1Mx49uP2g6XjPJxqj2Zw5RVoGw",
  "key25": "44VrWRUjUwMpVVnUT9bt4tR3s9ZJ6z2uW7o3tqPSM9LdEMGo1Ux8KW4UAg4HwK8AJyfuA1aXgg376rZS2qubqaCk",
  "key26": "4LPKVW39EUW6wrYNRJX7SHiVzMESXKknSuUMU24nqcgxwHViiPiWZ9ZxLF9RdVPCMG4xbU6T94pZzJ3FAfDx4yz8",
  "key27": "4EJw96ekgh244btaKwurZU3Zra7PdkHgf6wDxgmUtHuC8Wy1p997dBN1hNCCeEFLFZcSWajsFDjmNqFxyx6nxXhY",
  "key28": "Wx3vTfH8Sh1eDQsuDhm4ZGECjsAQuVVYxF8JxdbGRUK5Wg5xsrjvg9qitzgAhXTKocW8A7pfXq9BpeBKaV7QzJ6",
  "key29": "fBdrzfst5CBZiXuorv5ogUHon25W47RyxRcF5kRfZtmR2bEH2xQLR5ycwQsxPzKzFsLiKpd9MKyc5KJxRS5p4Nr",
  "key30": "4A9WvYT2cNqCHbYWrH5xFViHTW2D8zgwSZ6LbLnrJmdeBeC5KtYhV347yQhzSEUcogrFP859CeweLDqczFzZ4uPV",
  "key31": "3S7uWiZ4Wd6ELTFCG4Dqj75T9NCSfu7G6DZxEtVXCruTB1ZpUMMet5oN7qwdj223MxFcK9Qzdtz9RucwYAKYVtF7",
  "key32": "61NHxjbmgrcgiFBbAKFTPe4zVK8wny87j1B2Y9vbHdhx4ksE8yHJaB82BiyHEWxBgP4akZbi2rMdBs1aPtxzN51Q",
  "key33": "jP22KncFKBzXdVyHsNxgv3Ln9AhAAb1V8mqbDUCKFMjank4LWzdqZFWYL3jALtiCUaqqNWtDACamAqei6WeUUtS"
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
