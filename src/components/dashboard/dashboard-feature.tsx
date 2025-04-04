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
    "5osM94S3mXECn6cJ99yw7J3HAzZSEhpAYhPy4GyZh4MkKSVQ3pjtcfETJjMrRvYFkbgr1LGyXgbDSjso9XVJZrk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hP2yn6KJv8B6W3nWaCDBnkJBLvP93bwpYdmvv5DJLqGHrmAFsgYKnkueTh827wL8r9DANf3w23crz4W5ZMNzxtj",
  "key1": "FHjsVivmTmEXdv3rDU95B65DZYFPfFtpPdroaYURAS2ww8zd9a7hRM9ePPVtxvjHMkhotoa5tjBvVP7rYdQrBSn",
  "key2": "5mjZqZMRE7XfKtVGrp1rvN9rQVv5eQ3UCX45V2BdcaYLdkBRwVCsrMaAqeitSHJskjuz8yXdoBEFNBrUsNP6MKZR",
  "key3": "2X8uGRbq2Ye2SQNTvVJ3WocqSwCRHu38aJef3PqmE15k7rAXi4wWZLqN7frtvhD4EJs4GyN3u9d1X7WMpywvPWNw",
  "key4": "4TKxbwvGazR73iUYgYmDvTb1BfhqLrYzbcwB8dHBhDqehsvUn4SKmErZSAnQHpYLRTrrnPv36sgzeFPmxW3oeLck",
  "key5": "t1fw7k88jV5cEPq2Kk6fgvrYKKS41twGHQSMMq8yX4RLQUUKW1apAPt6WaxkvYxZkTjRVZjJKSQEcqFQUfj6Psi",
  "key6": "2PMKHwCxmGTje51n8GaNkVDSSJVfHTYDTLbM6MXr9hbi266v6yM5gFqfgT1Xiir5HEB1K3nBB7q6eLtx6HNzsiNw",
  "key7": "27TLyGTh9ewKih4JoMmB66Xhdh9j1hfFDzpxiejJKfM3P2HCbodZ3PwJw3mS28TjiRLBhXRH37qGLr9BLcg1LYrL",
  "key8": "5STQqtjQ1nrNSYFFdRUjQ1ppAQgJL5wcFkqsVRBhUbwrWzxkSpjvQ9LsqARbx86GbPzEuuShRAFs4sbTce3ec5Nc",
  "key9": "5F9pqrQvReH8SS9iya64Fo7ef835NW4hNF9GNsmxZU1TQD6TX5tXCmaYFFQQoGwzSmPrUkfxmJAtUu3GH3K4iEzN",
  "key10": "3dRFs8Sm2FZk81nrf8bN7qGm13cLaZgmfm6DJjipwXjGKAeW3URUfkZPhZCqBuabbkocGUTFH9pHav1Ssq4tjZqC",
  "key11": "5girMRCnUbf4N6PtWT1v5mu5hoyV2m8BiZ6JtwXyppU3To6pTAsaewSFLr7HUxLhSYUW6RLzkTBXqLy2MB5ZE5BT",
  "key12": "67ScKsZwCrvhmeNCPpPhp75SiHGWRon6g2AfdWTwvUc4idynZqYmQ3kDUkiqMfGB46iUQ52GrkRd4SmydXNNGuWH",
  "key13": "Db3TtBufcfT5XQRRJuiddyJcHXGSNUTMZ636gQqkcvpMm2MRbkRJwaDxB3w1mvN9HSQpuP38CU3hGX3vEYCDG5i",
  "key14": "42wQ7LbAwuxhDHqiWnKSnY2SgkfZN1PmtGnpVGZ4tHXGcJ3RRzoJxnGDTqboMWV8jihuHfh5YyxyDTQUjGJMzfHF",
  "key15": "5oz1MhUS519qHhaNj6cxRHFGnr821vmsaZpSzRANSsabPh9Qsc8VWQzVq8sS9TUQGKo8MwjH2Pg4Wg4NivqekxHW",
  "key16": "66TkcVGTXTEaHE4V7R5FZnACpfdheV71TT2tqc4sRqQnGoxPpo5yyMHJTnZ6NXpvEftTvpnRa8cnN7XXumgFdj7Q",
  "key17": "38t5WjwoZv6WmiSq2mcdgCMWhGCPgCHmjm6GL86DspoxDGpBMyeHkPT278unTmGgyXEkgqKtZCLCyNmBURb9eAbQ",
  "key18": "EGAkPih25PY1v9tti2fj67FNMU84h9a2SZrzfqH3z6V8syFLwzPeFzfkbij9RQiTdnLbQEbSAKnAW2LuSiozznW",
  "key19": "2btP2mLVn3irVGjtJNCNkiUj2r2optUXnjHAHLQbxxeJQCxinNtBFmxabeue3ns3wfsSVUi2BdNWWVWvnNa7XYJH",
  "key20": "3M3CWEjzYo6ARhhCQLe1JMEW5gQcfne7cwN3aHbcFifm51fyZvFR1M5WRQo37wfRG5jw38CZ6aAzk7yJMNUjdiF6",
  "key21": "aERZV6u76kVYk4QS8SxWmYVPa8xd61Gqv7YYKsM55KgenKkDjv6zp7HHGC9QnvEmVKf9BDTHHhR3JrwWViwXRqj",
  "key22": "48BM5Q6BD54y81EwJmctYDSAw9KrZNH2mY4mE2qUnvFihqbvy8VcsPZDkviQpCwnCE7fC9Gc8RSJMscf1yGocAV",
  "key23": "nK5MiJPnopkFzE5Jth1AUvPVsS3kr1RUxYJ4LaZQX6q8QQiyXHns2VxJmuj5t8BBkTTz6cKPa4bPYab9HNkFHhH",
  "key24": "ttC1DtwHjmckFgXud6jhRP2SUJbmLoEDLM5uKFDJYWtc5X7yUzzzLf53Ur3ERhvUXLdFPKiKjZAFPJH8DFzvBY6",
  "key25": "2JjSuZKeRpkpdA7BDpERWQYfRB9gdD5ShWNrqXRqbZmjAcAhbD2RvVWYAnmNtccVfAaRQCLh8BgyoZ2waPvpUcJB",
  "key26": "2UYqMuRcWuvu1P5T5mX8Uu7eYUnCinfCuGZc6BPMh38SNnTK2bb49z6MTSUxwW6s5QS53nqQsxXAHW2iNusxgEd2",
  "key27": "5fdqQYEP782YkNw85SrsErkcSG3VGaZ6uCCpkGx71pfuDYCXqWZyRqnmSvrtPS1mx6dpLJibHU5VHaTuyic2KKaT",
  "key28": "5z52KKRes1LXWHYAY2HUDDpkC8b9qMTGiAV4xtzScfHsgHTxbz94oA9sM3Q7Wc4a19em1JnAJoVGn9pau7ScYHt9",
  "key29": "26uLQpSzF2ud4dfX6jwmsFLXKdPP8L63mhoJ2RXsas8YdeQjTDRvpQW7bjHHjFHg1WykoC2S7xLxtxFnmV2MQpzu",
  "key30": "2etN96LMcfpgamDyNmawBow4GvGcHwa2qp5YLwe7CfP5mB1Q5EcaVUeTRThp3ineNomHZCXEkQEcP4ZFHCiM9RNR",
  "key31": "2GK6YXW55RNHbJbiPuer87KUgoUn8TcCAmYLNCWkmmmHi38nNFNHH7awnL5XKjfu81jH5CLR5dLaA3tWPdwrzPo7",
  "key32": "6kUYNUXFzUZfknS17tAhsXSb8iaFoY3BfA76H8FPeXPpFUNq5Nsa3rKD48EvJeH2hEcnKcqLVm1SxhfKUcABcsw",
  "key33": "4aZeREJ2tjiBnR4w4s8wLpbnPBFZsqWdxaHqYPQMWkFwzMB6MkkbyYuxq51mH7PcarGpEyFowMs1uaaTX8nrBWia",
  "key34": "2n8pHJ8MtbLTNFwQ1cMfiK5sdhBt5z916f3KSrX5TvwkVrCuF6wHfk8ji5FcNuanq5d8WYctgAKTJgsWKJzUk278",
  "key35": "4mux1yC89Y7k2ch3SuXdnZq1mUiXE7EVzRh4MGUD5kUCWLVdvgCLCdRExobNCaRaJ9wdEy5XZoEuUABHijBbh1wn",
  "key36": "3WxBt3gGaH5UffTp87eoEEW31h5Sy8SqRTq2jW4LvMQxzeNacdPLv5kTxx8WYgEh2t3rK1ow2v9XUffbre1Vi9D9",
  "key37": "4VR3bC9X3KKyzcB4oFeSMJDcqpiNCWrxAMpUEhj68cdxUFD6QXYchYRhHrBNxorRuHVGUc1TdsU96fjd8yaw5xn",
  "key38": "24Z2UrYcnsGef97Cq1k5rieESVEe3Y37LKKHJunn3UUhmxyignw6ZTTFKsWCQJX1zoScz9B2a9SUbZiFWCPpDikx",
  "key39": "4UGUKJUQMYLc88PMZqz8FKnjyGVZNKLJwanCaDJ8KZVAvgkwrC2apVWfdENCuEXAaS7XLTX8t5NrzFVMbqxiupy9",
  "key40": "47cFMkahhhpZJqN36cmmu4MRPcqPCrxU4gC6qeHV9shZDSkA4pdUNNy4AZZdhmxNQYFV5Cchomy4fQqZZeAGyPUM",
  "key41": "7Sm8H4FZB3quV2aLAcGHGwaky6qJDvqaF47iFvJUEh7r6Dwq9WtjvoQRrJR6jEVKWfKyJzBwF5AXyk6fTkK5tkB",
  "key42": "5ftqczFDQ5fMA8m67UUTmkc3DHGMZ5LB3BVobswf4fPcvvuyoNQmuZcSRHtxvJQKkMcYMDoLjyfSxg515vq4Wa88",
  "key43": "VR89fCnLfYNN5tfoaPmFYrjF2uHa3xYNQf139SfTTeAgFf9pUKauGBiF9wZi7AiYutZUdefnGxX8JFQLc1Jtojo",
  "key44": "46Ngpb7wfwYbU9SaRYosxXEfQHTSinrPspmJ1ixKbckz9y8DdTuQv4qc9tBfWCiuygD3sowYwt6RaS6kxpapV8XM",
  "key45": "4gD1tJ1zAYmiiYGcJAZeHDcQBVw7sU4Xxn6YNNThTVmnt3gMNwZ5mJ7i39LN7kWTLYAA8bCrZ7dTA6EmEZRDfetF"
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
