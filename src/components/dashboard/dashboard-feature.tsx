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
    "3xA1NNiNN8qZ641J95vUVU2gFDYABbKPRkeddv23FoQNJqL3tqLBhpS4uZqcAXNb1ziLt1U3Q6RwcciYZq5TKxi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mn82Q7VnUySnDjfCQt9i111bBrAdde1j3AgHQgiHsoumz9VzTYVKT5KUP9s3uHZbKQiQs7nrFGggmEaX6tSAAVS",
  "key1": "3XDXSoRcvqNK3RTsyhfbHbXBrWJTF71gMzyZn5eUMwkkB21qjwB2z9gRCnGRbQfwqM8oxQX4ypX2QipXYhpH16rJ",
  "key2": "5FeTgxt3YSW9EhuHj2fpU1faiADh8Ae3gySnkottLZpp7Ywyg8EMTbzB5Ad2ffXErU44krvDBQSqZrfYwYNBDrYN",
  "key3": "HNfZAoXo3AsNt5qeKKqJ9xdusTs4UaMa6h7kxCeKd1FKfUzaSAQcqFfHW316iUyVDMBhc94MxWmU2eGPfMBigWP",
  "key4": "3hYHkJPoShwKibgZJJAswhZmAzq6dwPgEmzmPAMXP2QoLGHd1rrkZbgzrxb2568e1WkJozqQKJn287hMgEg5Yvhr",
  "key5": "4uzdeSyiDKr3JARLxbeLUTz3evSe52RLKYSz9Y71qgjGQHzizqMtwv4X1thUN6ddKoaNdizXGZB8HUzRUPPXhkH8",
  "key6": "564wdJCfxxTZzRESU5UmzuKP7Q1K4v2zpFuNzHFiY7aQFqkZTfDBPi7krzqYqtM3NZ5J3PsAUQcT5ffFTsJ3dJck",
  "key7": "2rfdVouvCxd1cAKpeapaVY1ZxygjKdQB2PCBN4QFjaW1GDD1um5edJyiEpuDwTWbon2PCWqJS3cMjth19SGVH7U5",
  "key8": "2a6qW4rhrqJho1hYmnMKhN3em7cEr3kTJRMb4zc9jawJ8sksECuZ5sXVY3Ctw3nwtmfjcdUVZTXAEzMqo8GDdZyE",
  "key9": "5VF4ysd2eH8i5mV2rxyuY2VpN89MteYbUgqgDeg3KQpQx3bac7PdSroqNDtf3jhNBrnGmmyZBoQLtgQp4Lq9dJv4",
  "key10": "65z2DZxeLCa5ZgGx5TCKYvPxG6NSgbpVTGvaCq8Rjo6TmuorZGS5SGZjVg3Ro3kgcJKEV9FXhtfwdQ9K1RAXHukH",
  "key11": "3RjB7tgkgaWGQNCWYEohCtruw94Fqjey8ki2fGr6mztDbEvvLDH8mnmpgLttUVjTiy7m6xdXh5neYwzgFkzibWNd",
  "key12": "pVNr9f3dgovGtTqDQ62VL1ddgWLdHCxNiX1j8KDpNK8AUf5p8TvKrexmpPQcM2kFk1umyCAJ1WFbeNGuPVkjx52",
  "key13": "5FvLZMAbrDE7HkjStV1arfY8RB5gU6THSCGsApDmbrqaWeY5Fpa1Jm2RcCfGTTLxNGt3rU9VGDfChNgzdFRTk5rr",
  "key14": "3BjjBRAasRLU2VPp5ssr5H7P7DPkdGmAufjyure2U2Md8aD6jLZbV4hyU9Fq9dzRMogQRmd9CWkMLgdPcnaqrS2u",
  "key15": "4VUFRvyVF6RhJ2Z9ief5rRW3SZzWVaRMMapvS51pgwf3XR5qAu6paMqNx5sKGeTSJ1u4ryHZK1HU4oyTVX3FrPfi",
  "key16": "5S9JXNBAod3wbTiZXBteUNdJaWaQuFhKMRUzLnSestXuVJEfafPZvdZNEsm4BeNKcQ3ttFWzDB5LexmsN4kvhFGS",
  "key17": "4ARpao1FoKMe6ejoK8irVSv7dA5sBuA627TrYT8Uisak88GC5s1Ku2eXW3WQHbj8X7otGRabXpoV9QUqWkkKBsYb",
  "key18": "N3T7nTkT44iNUCfr8fMEaszB2KWB2cg8toKMLf7FFXtERduE4UNrgeGV2BD1CkXRxiNriWREhcpU1txRsGxy88V",
  "key19": "66jxJZRFSNY9yCsDwJHyU7BskcMKt5mz5ave8yCNWYNeZA9mhmVckAVWrK7UJacTFq1yWcPJ5w1osAZrA8xmNbmL",
  "key20": "4PWMQe5ZchbCq1ChWHsngypQW9aDJF6d1Uz3xwWcZfBAxf7wwvvX3mee9zSBCHTNepp1iQwHduvZVjXKmMMNfgdm",
  "key21": "5M5735jgVcZKiTef4jNbvZEiyzK4ckYELJrQVx21kRD65yp7Z1457mnTd2RSN8y9qcw9xczuFtGBfxh3bVhwBcAG",
  "key22": "tL9kVr3wqsPBtsPLSZWAGT4EX6uEmwjZXGiLiuh8Q8SYhQ4tZrcGqjXjsYKd2k1jNGKDwAeGc57MszYRtpk4VAn",
  "key23": "5gEM82PTdqcw6AmwmaVviybiqAhPttnSBeyvNzLVCg9jXqb8XuHzkE1P5c521kVTxaZoHJB7S1mDZemCJysvjnoW",
  "key24": "4fZKehYefabKXBynWBqCohLKj3EF8s97FoCPNRtQv5w4rR98EV4Bca8EF3VJ32J98ikeTedDk3pQrydjnK47VXHn"
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
