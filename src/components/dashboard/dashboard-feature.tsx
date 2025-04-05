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
    "2bcSPuMm2kdXom7C6zgi9rchY7hcsoRamsiJPCFg1xUarum5dnqTLrKRERSA1m8hhVhJFLyaxfKWbyhnncxRUtR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hAdQ1iHAnvKVytzLvKLFZGXPDxH3zGW5qYH47ngdywfUjgHuBm1uvCxFHdYqXLTsQ7VKYTGF4dAzhLeQdgQJp6K",
  "key1": "mMamyd8U8RWEeDszNPr9jz6tioENwvWR1tnb6dwE62iBMcr44EH88t8TgdbJJ8XXc6uhQPc4YXmJvQ815Y27tPg",
  "key2": "3MMput1ewNhKBKjR66h1s8eKS6jBSBqnVthjEt8ZpRfUMumQ7h357bmZ1SPsDTX24dP9rv7ST13nk49HvhtpQxE2",
  "key3": "B7oqGBr76BpywqoxbhzwSfeyN4yJkJLBJt2hPzjvX1uzapuopD5GRSXSAFtjSm9dUjoCjvWocX95LDi1quDxT82",
  "key4": "4judDbMSD3SmuwMnrLdzJVncL2Q6fSQ1HuMjH2Xpq3ARcmtqAVHnEnvUxDccTF2LfcjwgGRM2bPd7D4MqUu8TM7V",
  "key5": "5uQ6tWaWVWRho6ufpRq2UrR2TigPFLt9Q4naMAcWb7bKPPeJs9zdAxgoc2nHgzLz6vdLikG7Z3cbqJ1TUuhxKj9J",
  "key6": "5hnXVXmK14t1RRvRc5ZPwsYB8KMa1MrbVhfnp8ZmL8AxXxPAeStk4bYQYsvTtuPKgZDMZmQBAz66GDD4EjvMn4HV",
  "key7": "5TChtWLCWhKyEcxKswkKFWXVBztwNg3mFRPhHpi546ZUY1pJs4rsFgjdrCJQ5SfGGwuGNcxGuY6HvJbCyrVyxbhH",
  "key8": "2p6WuTPUretKxXyy8zGr865j3yufuz5avzw6k2xodzAwrKA17gFDjJqpZyc7kf1sb4eeARr6euiLLCwpRx4EnVsZ",
  "key9": "3QWrrkMFXSnHYNtkqCjyAWRUxCd4Jqht1i6zye578zXpnkMzNK3sSm5debFBdp3mZpFnutoE91NLoqfURKgAyD4S",
  "key10": "5F7xbumnkLSKXiJhtMXtDeqGM7chfmacjbY6nGYxGAzdeyfyTpbm5k4syXJa5AhyvUjNFzA7rP6ySUWoTDyCv3vu",
  "key11": "BQ6B3AF5Fnmq4NXGuf3YRPzhkKx7339B6DA7ZV25GE1bLX7uS1qiSHLZAwQXA8MtuuXG5qqyVpU9snisexAmi6m",
  "key12": "2VuXfrVRzYwdmfarDBP4oU2sdZwz8u6w5ExzmTn3RPiLZA5qiWySZdzsXifDgYZPBdJdfWRw1v34hPYWHLo9URRD",
  "key13": "53F165zx7pmUvqkCLM169cyiiQnBKA5TMpWK9gRY3FEXeqsqXUhyi9KqguHojHWkPUA2Z334jduYaFneBfhzGVwr",
  "key14": "4nHJ8Tv1nzoQ9Q2iwoUNMGQJ4PibuwKUtbspQYHy9TBgrLP7HTfQj3vi9YypFH3G58i4WTgFbGLjGPdK99p9EVKq",
  "key15": "5BhrmscuRP97HSYwUh6H7k9rawyUCUKhyeboaRyVa8QSgjTKTCYeCGdE8N5fRB6ckt2TeBPQmMKHDxeX8WGMpWgY",
  "key16": "3NL5TkmokmzgppodZwNv1eZU56nQDoHoAyUJ7Jef4BSSTpHg6BvBy9JG23DnAa5minrUyL8f7mkyLKYKug5zP9vM",
  "key17": "3zzVcNPNGbPvEudVGvhod1CS1pNiBMDJUCYqqC6Lvzh4MvyfukrwcZTceejAFkyzJzxTR8haHq7BPRf4qVAxgBDr",
  "key18": "2jQ2QoypLR7tfpqkJPAqzXadoKkx4TUx3nFfkGiuUScaYfGqyyRbMbUkvkMgKeamNUZ793UDMPUZkL3yYXoqs5RX",
  "key19": "u21ikyTVeHGMZW3xJDuGtNnn5iSLwzK9SrvyfuWKqVHy8XaKvJg6Njqcq8D9DYqfd1ePGkCuTuMjgHGMjDYwkMF",
  "key20": "31keyo3F9u8cRkqxs2xSUDsqbM1q5sJ71ucpdn2QWhfpHKf66abpfcLMvm4AZSqv3j1TSjr7DUqvxd3GCx4yN4KK",
  "key21": "2p4F4x4ez7iDTY3e55A2QdPJokhzAhRwms59myJEYdWHK5E3Z6aEzEn6926ik1xJsaC8QJeEqGL5w8MDtXWN2UKt",
  "key22": "4t5t8MTozYxw559UckWjcRakPRoDGS3tTRykUHvgMgT1S872LtYjSCPNw9xGYaKmdAYQRPWDx7khWSYcEZqCz39q",
  "key23": "63MMncEShV735kLxTNbcqaqgECMDbb2bwdusaz3cQLnA4LBuY44fQJmjLpAYgAztDbYz3g8bE7YCsJy1ZCuW33cE",
  "key24": "4tsQoABUtxeiq3J6QLXdsPhX31UnHwW2CZZTVsf1GipnPVVYRZbCYGXGdsY1hwMT1EWvGvBwviKbbTreQvKQGj8q",
  "key25": "4gckJJHxvvv3PQy2Tj3uUcoefZR9i47ToxDzCFkeQasPrsbfSDn6SZFJtyWDy4GfRTH4y7vs9Te34hHwYx4m7FLQ",
  "key26": "3QSFzPwis9WwNaZpkn5zDQR6tZnZsPpeHZrTvE1dEuSQLUvxREJ4GsSjxLcBTUemt1ZpiafJfxqRHhM489erX3ZS",
  "key27": "LcdwFzZ6KCdWsXakH37dtaeWQ35nxsXRm2kSDiw3YG3WmdaLjsPX8tptcVBtbAF5j4o9JiQTS3M8Swv1ASYmfsu",
  "key28": "WSXeQREaBy71rpt5XPpAjrqi6tCoCAL8VNxz2kmohMWV8ov9GEQ2CchoyUWnQtQPYG4DMm1hoLFRmkPP5fTtTnG",
  "key29": "5dqHVdkQVqqFbCSmhcaVSDpE19AL4qqGAK9YpGLSrDf83x8BwGFd3Ez58cRDJ3uom5GPFvwcE6KU76rCMN6GVyhT",
  "key30": "27KbtrHgFVgUVf4oFCEfAzXaney9XKqjRiSiovAcVY7LmJLJborjGacpe2Y8d69sB9L6qigK7XxvAaiCZezxx3Vw",
  "key31": "2kzr2nrDbZvKWfZn5HGZrs35QJ9JuxUH7VNmT38QB7wmrsWvkTTGKbkzzSC8saazvsVn1pE8DwNjsfvSeXvFPcan"
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
