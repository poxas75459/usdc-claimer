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
    "3tJ5mxvKg9EnscKHhbgMFVrHvy6ykKsz1zqzMZh5f57Ti1pcNfZPw6aB8MvptFBPsUGqS3x6Fm9dAgTQmgQn7uWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRXzntRHngiWhhH26i51H5MTMTVumwLAbYrv4CFUjpZj87LUrzb8KYFfCabZP1RNY37CJh7PWgV19pNcC586dvy",
  "key1": "58oM5tafdrUkYazNaaK6BES1ZzuBK5VKVQSuSEaza1PJHfU1xLNs18mSVG9N7LT2jTNwAWyHNiJxnsqM2AAzUhDv",
  "key2": "4NssPgZbAPFwAkdzBHfdesdRb327HsQnPmHD3uahbEL8cecbcTQjQbSYcJSvyrTS96S8uaXpNMmF9dXF5o15BDPZ",
  "key3": "66CAqCdVZAYKiDd6Fc3gN2CU9drkDAFXSuF6apSRV5x5HJM6iJXLTwpy9cDf8ay2VkjnB91LQGUyRAaNDwY4Fkda",
  "key4": "4mByXvQGg9NFrtpJT8hHtXVtTn86ppULpqV3hZX4iZAabA5aeMWa6fm95wLL7qe5WeTn59XDAY7rDSTpJKaHgX1T",
  "key5": "5vwS55w7NTQgjrnG7SvAYpNrouWcVU258BTjPnEn25Nr8Y46b5vkAKsd5zMMTsEDnoBGRJPuj3QvM2AHVS3ujjQo",
  "key6": "2NRR5H4AqK1mFYQvMDiHLBNH2BvVqqXeUifEwb5CHH6hyMP7D7qyjtdVBTrwhjemERUzzAhUopDCjfA7kjjqtAkB",
  "key7": "4qgdU5cUGa3VyfxbiUe3wkgDGASy6gUDxJR3jL3rNdtQZygrRQaTkp7Uy6VdbCQpSvJ5FETGxHRbZywj9KXK9dK4",
  "key8": "dgVLMWAxLkUp6RuNtfqf6i2Q7BgUqF5eqzBPRT6sjGtkK7p3QbVaGGDTuKqttr5qGriMrkdzbft5a4HPXA7angB",
  "key9": "ecDdhJDTWomTAJfQouiSWPXcDcjL58boMFj6Xk8vD4aLiA6eMVNrYr6dfaSj8F2hcC6437aj5WV71JivLHDEuso",
  "key10": "rEF6VLZ29Uo1vgr9T7ZHHrJozZUe82FE7q4nE4DGfFpBJ2HEdMxkJBTeegeTZDJTCosKD4tzGdRqfeRjoA723qd",
  "key11": "5sTVxE68qJAMtDHz9ce2vWCQhVTeBrxYJAabDcrgfYh69fSSRPwVQFEJQFKqe5UVrRH1GWYmCB9ftLgwyyDapcsp",
  "key12": "3p4gx1eUarMcAF6yJuBfVwWNrmo65wbpFtFChdxF5UV6Jug8m42XFwFYAG82vFjYAQGufRn2qCj8AWj3AUG1BFcU",
  "key13": "ZJznBYRXJAZDoaBe8oiYZB7skwdYKxqoVJpd6SY6MDiGUaf1MbFU3JUrctw75JmMdH4c1zLsAciK9QUnYkhtqa4",
  "key14": "3RYFa6z7AskadNbQoBDZZ3ZDmKQtbr4qYYsA2XYFpVYAo1PrARcSaPBZaC6ZZsZr9qhySsYfd611jFBR8vfN7dRf",
  "key15": "2NWKaQ1kMkCgpPHxHcXhtgomNvG2KSrayXAqjiUwi7frL5kVMUMCtfLGM4J8KAVCgXPhDcJoYEnGeGsJ6nUWiBxy",
  "key16": "5GSYc2ERtbrFwKDEJmV9E68jJMBSzPJEEwriu7m8e85B98te8H7ufZqnHUVFoexuuwaQoNrdmroQE5KudJnzMXDr",
  "key17": "4FskRiK8HRtBkpxoRut39PWGVCHEutb2tUyFEKNphNNauDxbb6WHwfZ6A1NeG6Tq9yAW2agMBSGFzSqowY4dZDG1",
  "key18": "Nx78cbR2ef1bh7f5M4Y1DLMv5N1NSxgPvaymHinhcGBopZjCKgRYw8Jgwnraznhw2nALhEcwVShYyxrGW7zCurf",
  "key19": "4WQidHJD2yjYAqUdMWuEmC8HRpzZJXW898dkCtSQDokEzVYTDHagYpqMgqfs8mVSCZ2n1UpYwiLuU5TgEhszJc7F",
  "key20": "QketPQZWyEX4tkbWj96wDbTfqABAJ5qEXFSCg4ENSWiiQLn3UybDRyXCnSUqkSP8LiX3yeo1fWjFA8cHh3okmSZ",
  "key21": "2G8kJ7b5DMC3pJhNKvEoH2YptEpFMb4Sksqo7cvmEfssA7ketzPuztUa25d7r9YWhVumXdP9JVutwYj4CkXsdwmC",
  "key22": "3fd9ufDLLLzCKZjwVsgPGAajquG5NNkVQN7N1VNpbB2vayci5dCqs9eDfVjNoRYN7oXT6eEEnaKokZcCyqq1Fo5V",
  "key23": "ZwEiFYitVFMNMhiwqZip9sNitYixfXhsPmzYRXEJv2hTfjnouviuy88guooTg6i5xEV6o2MEpaxkAXUvRCE4Ysp",
  "key24": "21b49bgNa8gd7jEcm7Y1KMoMmyLmKexN6HnsTPrd29ffFPPqAxDNbBpQnmDhqpXhLkcn9oP7Mnaib6vj4FMpZbYo",
  "key25": "31NwA6eBCP1in59jBDKkoqWUacRm2JXWM8v2M4pSZKmobsAjg8udJhpLMNeChuFa1S845ChtpVJDSMS1pA2pFCoy",
  "key26": "4Tt553r8Kh3hRaGhGwoP21EL44nWwG9U8AnKUgWZHCLnEMUQY362bgjwVMSNkdQj7CZaKiNqA6iXQZXDHpQtCdJC",
  "key27": "9zHQ4b9pPKzLN2HvqS1Lf1uKnzGquRLY4UFZRVW6KGGT2aGkXzoPjNVcNczRUfufLKbFmUCamwQvZXfa148va6h",
  "key28": "44GLE3kPZrxxDcBp4KqkTByddc5VdsGMrRSgdRqxbWUQae2xAxA94VwbgV6P7GsKUHreCPgjbWBwbWKRoj2KSigY",
  "key29": "qnyVdfZN5cABHUGM9EqhSwJWnFuA8SKYVPpP8F382oqcEQ1nqufr43gC68Veu7xFzKjAD2HSqFch8NhrxKAEurm",
  "key30": "4z7mXxFPUKLv2t5Fv7QSYrE7YNm4PQEs55SHa6t1U1sAR8k8assMBq7CRdVuFcnY5pE7iVZC5cwrprP5rK8MzXQh",
  "key31": "rZEgvmt6catCqdJDSUB6JcWPUVQjnjbCRqdZwR6GQZuhcCw1a83JnDoQgnbuAPCy9L8CMMnNbmSmFchuzwzcWJE",
  "key32": "tHrPem2q71Gc5DXxRU8KuaPTz2WgPScoufEYqgjFicw8Z4eRJj97q7Qwfj9etZY8CeWDzjJ8JGBG5P9DGsgP5WK",
  "key33": "idQg5aSUzPVdkM9dmMwwMhSSYawv45VzXLPBSdJ6o7EQJ1Brp8gSr862KNksaf5Vjr51quAPLQhonZeWCutG9i5",
  "key34": "2biQU47Tr32xN3c6hJEigMTxEwt3cP8SSXwEt3DvjKUuFTgjvr6L1CpCYJtBqYSWyDeWFGfUGFQh3MYrwqEsZ9DZ",
  "key35": "3n22LYFwrhPGKq27RRfCYTAzfSrjTAPUEyy54xN5ZXar7NK8vsEDDJ2SAxw1zJZFi2hwr27LhJabjdB7X2yvd1Bq",
  "key36": "3HqFS8Bw6kxbiCQq2DbijBgvwW7ogQpr8z8ZuKbTfPkrxXEKaCehBUsarXZcU8B39XwuD1ayX7G88pLbGy3bLWVS",
  "key37": "5ySh3DxzNMQF1VYojoqiHPqPgt5vuvh5XEZGiNZHoeshcMW6ZCtjCSUSrgTL4foiGKKapYT1QbiAB8p6nYBButsJ",
  "key38": "2SWYUqpCNBB5oYFaLKGfUMJ76KC5MLXMDPUoQdzzYnmyfjQnurKYDrMXzcyhkAQ6td1exVSTESNSb499jiA5DwAL",
  "key39": "4EtR5G7pJk4WcViBodBm2vT2kykxg9UtG1pyauw8ux1SLwYBg9i2CdsuT4eVJswRiCDTngSnvGgfk7cHtzVReSkr",
  "key40": "5xGH8pWNsrLxskPJZC1wNcQUwpwBqukDZqGX1jry4XcKXZERXSzxUseZZYxFaYUyjQHoAmNdAbqtFimd1nki1i7Q",
  "key41": "44oVPcRhLZknzoeHYPUAdUShpZbwMjtgegDt1L8ruTTEbwo8DCnLw2yBa87d3WNWev4fdv4PG5qhZT4WvtFNhEHc",
  "key42": "2mUqpJhpqGAX4FfvtTVFSt8LreGaEJdWkcgKGY7KWBSetFhstSWmF8GpS9vubxuNoZ9jfgG73r916xbi45jjFoK3",
  "key43": "2WELtgUFPTQJuWhtxDegfFNaEptPShyaVbWcd4GRPG5YgecoMmBoCQ9PLmSmG53g3NPMPms4XJZVB2oUMkfMXUMZ",
  "key44": "3jWmAdwY34oMSDC9mYhMcsPNLGQHtZwgkx8kVCRiSdAG7edGc612fjXjxFH3cp1EbsyQ2gwtRcAsHXCBPMbFq6v7"
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
