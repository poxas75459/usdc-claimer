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
    "3NukCxyMnVAPAxAt9xtFtbtyEBQF1LeHD4dsGhcegNDSfEb8nF8ifsKMMRKkryVCcP1nF4C43YVWfTTB3q6eVdiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66hpmXtMwMYAYJRa5RWAahkEoTuktU9prrBUY6Q9xe3H7xa8hWoex5W3uMA2d9fLT4UYZ5h7s2Y4ZtXifSUvsfDR",
  "key1": "5HBCKux4hticKhe96rDhbyf5qFysMQji9QHxFRumG8mdRAMxWS88ttWsWN4Ey4ob1RX9DkKe7swBemz66R32rqbL",
  "key2": "Mpfa3Q3Cb69GzXHXExBpUKWcjKNh9Ng2vT9nP4yrqMhxVoDnfkin2Pfh4EnZWxhUhu3dVZLFi1a2L5xJPtz2wMP",
  "key3": "MTvB3fJf1zGwPx5hSiZpp1fQcA7vcYNmAhxCLTUruECTY94vUy6fC3zbpCus17Ks5zaMPDZCsG4s25AWchsFhgJ",
  "key4": "5zBmyHM4mrQR1KtFYPghktwNb9fJ3FjUv1N4KekxuVy4bpnPbqQD4ZqPDrXAMW6gjSUBWVtinXhuRJCeyq9raeQn",
  "key5": "4JFpwxNWRTdQSwwQ5DcBuDd6nTa6MFDiw8Vwqs7hx7Af1U4WArJ5RcpdP38uRYK1csJDwxT3yrpCaK6J5SS9mKZN",
  "key6": "23ddGTAybKFAqpt3vj4Xbqd1xzQF3mLNFjMTqZfTZQyt2hsoYacQUNbzf2ykeT9z2dUnXnGyFoAtACuzSexw9GBg",
  "key7": "3RYvYc6gN89tNdwovXs8nHRa5ZxycKhS6HpCkoy2gJgktGrKjQA3naFeoaBKaCNBJ4C175UcGZbVHr9UuQiqRvTB",
  "key8": "487aGz8gohjAd2Kp5KTXLYL11JPfSbM7rknNfchoffzmAdxrjrBWqsxgKb9mLzKyr3pJs19Z75NdiPiugQuEXfyg",
  "key9": "3jZDGRHkGEojBBVi3XTkcj2Up96zQYGYJK9SwkLaxo5KEUJuST65yS2idD1utPL1nhnWEAMxyR3tC9okWd5de38z",
  "key10": "uBEmDhiacpAnWEzSKZNXFjuZnLscRS2XqvdojrNRNhdkMX822NATemFuH7Yw6N4tLhoZgXFKp4AmYSQoKttGb2C",
  "key11": "SMSXRnCs6jVWYuf19kyU8GvMVtccWCiUXq8urmWGwJ2zNGTVjZJrwoSpF2iJvdM55vCUsExUWCnx81KQXkzxZ5x",
  "key12": "5Fnued1tfYCSkMAtsB1nSzmoGbqqiSCfaNqm3v3rQzPUExRwg6xHkq91bqyCpXamsEebfCuPtcU8Vskmbyn7PPry",
  "key13": "W3AUmvjBGngN7AtMvu5iqjvmKtV7mhpFMKvw4KhdZWDy5STmaLZZ9biTYwXCN8sV47GuVdHmSVjffxcU1QGGuvW",
  "key14": "3sYtaoUiSmPipYAMZ1uJzs45HQnsXUtNGS5agsAGSuuhVvpUc4s83vFFW6gMax4xvsXtdsbCL6r1j4yB2AVvNAWc",
  "key15": "65bfTYmrqsCD3VhRJDHqVmLzcoo5hWNsnQSnHLHGkBH6zTSXMnLZntP7Rm6qE1Ya8bizduVJHDWUHUkX4vVVXaH2",
  "key16": "39GufNdacFzdfCtDmsC6N5e2Lo5DUUSSbRcHzhThwapPvLPp5sKAahtUEdZedpo8SS2RcC6v7SPSR2P8e3ALDcn2",
  "key17": "314Xpaej2WCtvPmW2NqyXWee7oRL7oisN7mUJaNrwWFkxLVBFt3HTNUa3G24BCcg8EysNpj9xJVvVpCd2RepNDU7",
  "key18": "3ogrdh4XXTxrmsC6C29TVTsqeVGjvPvr7SPwMPcYWwE9WouVL8WRbDP4VdkYbG7sM3wWMDFs2e2LPJkJoxF6riqn",
  "key19": "2nknERkg8shrJj7SKBN9MmXEwtRr3WndEqpiuHyYyrJyPS1BSW6cnt9XSSRhgR6UpwQNd7fNQPrCfZA6XMCrfJvT",
  "key20": "48HKGiKmxwZyeH6VYKdfCiDsDPT3ddFJyvrv3CiSkVtJkEvFg77m7PzgHnVMQDUypMU1s7iCfBiaemHq7qjtMVLi",
  "key21": "3y2KZpgkCvuqP7YeLRGPTcu98dFwAsg9WjiHRNYak98ypfjvM1x9ySw9B6n3861yJB4CqAuRxMGFQwcK5jRNUNv7",
  "key22": "4t6NVaQpgZUU51stDNYSQ9NU9e6hpKSJZA1ZrFuSWDCbn3nCo5RViWE848vTaL82SnaZEE3takoougq6DJsS43Nu",
  "key23": "7ASLF4RVzs3tC1ToKJvhCwNfNHW2eounSHFkUJ7juJrLEmEQChynsW77tBGFcWiUnoY2sdagW8kh3LyPFPGQSR4",
  "key24": "38yMF5MQWhiKVfdXfahUhjHHnkXrLCZhc1yxUGk2AGyPSYerF2XScADLvnPPffQa3CkDGTPZwYJ6X4noxE53UBQP",
  "key25": "5iEu6YarKpp5oadWPhWrhRH6PmKQhHgyKjQ9G7K2XdTvFkroALmxSyfoSB3KDYoAWMsyaFZJRYUPPJtpWw8mt3Q6"
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
