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
    "YRA5hpCu7eLAZpX5JL4mNnrqVtXy5XSqQFS318nZBGeM8MFgwB3qPYvH2eqBUnddFRhYPqCmnZMfyzjNEaCu9ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kpXMnxnvH3XBEbX9PJgvSVqz5gFc8biqRQ69ReKBy7fXseaL2is5VJG14eeQhC6k69QQtz1St8Di7cf72BFNF9X",
  "key1": "3j4NN2Ad8KyTMkDUPF2xTbbxhZvJp2AivMToFdisV2ULQnYumzJmaCeNkJfTLbSCBnjasCMXhEnmKDTMvjtLFWVg",
  "key2": "5AhexBRomkKE1kAgij5R4pnHg2n5CYTJ3feLH73xpg35E4s3PcBeibzXsjFmqfG72vpiHDMB6b6fT3YCa8dziBQy",
  "key3": "3F1jaPncKRqfqTmNHsGtq7E5KvwPykQuZ47ejDLmrnNRQiZaXBam5YAgbCLCJhfcGdqk5SDpWrFrWUmdrh7ncXiL",
  "key4": "4HRf5PqF65RbiiwmETXE4nNgY1tJhTAsSGVxeMESjEsqVqdZzeXUPPwdRNhNMHBoZqxqmZVECv1JmbGJatAWgs4m",
  "key5": "3vvaDFEjbbwMzr4NiFBGvvPnGYpyqs4WkD1hppRmZcQMPCtD2ykKLRDea4aoLwj6unfq9FFoQvPJgj5w8j6ZQPVw",
  "key6": "22ALCM6JWafZMmsCGsFgqqeKV7jXX4Dxf9chA6pmbaYtmZquhCauiNm3GJHfKeAAUS9wDeG2sWD8297EkH2qXUCE",
  "key7": "4wEf6SPKst12RLyU7sFdr5UbC86RMByBxppsKzdyTLjiXJpM9x1itZSf4T53GgSVzpBnhCfhyMncfMJHh2q9rHR7",
  "key8": "P4zKh9NCH6ccGT4t19gXdUBggHoWnT4ySDsS18enXszj6U4owbHPML9oD9dCFD154D2d43ueiB6E1RzBuX1QMuB",
  "key9": "41eDHM3zENQsVW76fYea6QyMDdVcfZeUYLiPXYVmjt7HLez9ZzqnAGBpdkU3Pfesgx2jjr6jLk2XQ1JtzsWFgoUP",
  "key10": "5MdPJN6vb5zKxqWYmQrr8emXMwKHykrTP5Z2m5qJ57sfX55cR99VXSdjKDs29SBTgmRf7JPNPAUQaxsjP5f1btg2",
  "key11": "2ws1fZoChmAimjsvgnhpZtkfuq2giy7ySwt4Kf7Th6FpD9cXt5xo1pYD8fA69zf1LXb9t3vuD86M4iVaaSmmmiRx",
  "key12": "3oy6KoEsxFBcD4csk6f5KPfM5Wn417exz4Rh4eaJ82FqcaRamPFYDCBvz2DfHKNYy3n9Mr4DkcwhkN7D5xvogvJr",
  "key13": "3c9itR9BKQaKPQ3C59dJrnQvQXMXAD6SoENHMMtuGXXXJVtNjNAQYnYFFQNMP9NgWXJnSUNMJFWkJG6thtHU28fa",
  "key14": "4nbgpiYQwqy6zPmRKza1Hej9Z4e3XzYzZiNikaWnZfavdPG9soagQoXRY9nHUPBr7BNMFqYwbf91wVjk5iKR8bX1",
  "key15": "3BjZgdVFF8dKzhcZwUiWbKgZNuwS5wrXDtTUxPm6T5Z9FWoZYVF5pBcU43DNGCVt7uXxr48Syfx6FaLboga4t2Na",
  "key16": "j7iSrqwwQmT8MtHzo3Sqopoq5FSHgWAFMQmKYfmWXQXyX92mAZzBaUa4gWxoYdF9n5Y6dpoXbei2CVJVeqegAwQ",
  "key17": "LXosfd6zWTDSNGVg85Nc8gYX2rbSucRkfG5RyZUXePXEkdv4RWw9oE4brem6EMXt97y6HoDyehd9TVzHB8fQpsX",
  "key18": "63xvuxxWhXGkuQz3pyCqBPj3kjDYPZWknFwABmYmBQHRyvkWuqCqD3ZV5pxnBFc1pknv6nHfxCEr3UHyCvyVw3rA",
  "key19": "2qpyRvZ6XTsqc62SfX9x9e2ZvTUpaVBhzv62Y1A14GP9AaA2aEQZzzJ8aG88VmYwYLPFCXghCJexUVvuerh3gxjf",
  "key20": "2JGsqDscKHCDxRQQTjZSRTFHg8aawn6Wf9HkMBzYFruPr6hNgvQLEeSV8mPz2hHrzQr7UoVFYkyAZsXr6r5ydsev",
  "key21": "1ixbC3K1oC4wcGjKXWmbynoLJDMtKXmqJxjUvAcbmt32vb1qwd5cKv4icNq3p5GXcSWQ8esPdQmqhJ5MxwTThUa",
  "key22": "3k89SCrameuMfPLNVsLdekTrTt8bMmJv6ULPyiJGsK9yRtitq1qJAsmA7VVuVcx7FPBBM26iDBZiBB9ZzBiU9iuC",
  "key23": "5mq9dV4Prujegr1fun1zTaa3ssiYYSGeCtVpWYPuCJ6psMntfqtGRzsZ96kaVCjJ3wAqWYoQeuNzS4W1eaS8PToA",
  "key24": "4YnT6rF6Km2pjkP6QWpo4oPh1xQcfEeouYhovCtmGKnqYpiUJitnNos8RQCVERAuU8s3x2daqS7mesjykxo1AUqx",
  "key25": "49tmihHkQ2XvKhy2ZdBixYKvdSsDPvMJUQEHQo8D3qSe3hVQ9AoaF8ko4gtPeSyRjStcK94yi59be61EVMvSG8Tq",
  "key26": "5UX9CkSQmkmqZtbDi9NFubQWAmaY6LquaRRuompKASv76LpbGw3s2Wq1NNoXsLLDJ398V6n3A2r2gd2KjfD3dpAK",
  "key27": "3rcsu58DWMudv8ifYzgtNnJcLPekhkWGwzYk4kvGewb5UQR7WfydK5ENL1eKe8mXMV4jpHm3HtN8ANrHQ4Dhn9kE",
  "key28": "3QYtcQF82EV5d6VkM51RRWsf6wRoAoMKYT5AjC6R1ZmuumNTm4pdR9EeZ6rFjZk4KPB5yQxkTPEX9y6LvLRFgEAb",
  "key29": "3RnxNiZ4gm5U3YkvdpaPhEq3mRDmpVrGWdrfAbioRQyXMhcyfwBqtX3vH9QqULqdDaf8y3P8dDBEQF4teu7wXTk3",
  "key30": "3fWhik7iCjYzqoNmts6SryGA5WrqjAkpEZNjBf1uJwitbZxV62WPdoRhQzS8PUYb1HxkFaGbEx6Kv2UAHRzoJaJS",
  "key31": "ra3nDRDC1v7NNJ6aN6oMLYyF7RxqyJXUzUc5Qah6haKEEctoHBszmRko9L6LnRFKWhE6NuFXBjm2uB284tdP213",
  "key32": "4nSmrDwQDVfL5rt64XsdsBGhjtzjRhaA1Qkqw5ZsPAJhXSrvqxJr3EvqHWvT1hXxRgUa2ajpGVoVmDm7KaqmeUC2",
  "key33": "5PH7tu7uSfdkfvx2FyxZJtoReoDUk2F3UioNsHpdga1dwXGEPHRfP6u5aJHZ9JitaAxPyRsQFN4T14P6sCegH6qY",
  "key34": "LNaeDCtdP5dBKSYMQbnxuHFoLRvyKgbgTNSWTAFokm6m1CTnuChByz54GvmN686ouLezDiffnifss2P7vS9WXbm",
  "key35": "zgBTYo4FV71bUfBMeKm8j1qjcccsXRak7BQTaRKRqsY1BvqKkxWq9bf4c9XgY2nR9rx5gdSY7eYojTNKk5PV13H",
  "key36": "xfBefxKteDrz62MegXhBjXU7cTre8A3SLqFNP8HVLHNfFKCpy8Rd84iD7NrpbVkHoYyPYMgvW6MeWkmJ6DaBT5y",
  "key37": "2peVLq4g7LorMoPXVyjj1tY8GCKLUPU8TAQdGbvYKUwkH1uJvYHJUtYH4dDoygmgyxpNmfHuHjocE8Pye2AfBhgL",
  "key38": "5sdf3PtDyU2eJMx9Phe9nfKujbuRSdKWih8gxkZ13YqRZyZjexNsBdM1VJHPgAxfBgwZpowytirHkNhZDQUtFT6M",
  "key39": "3FdzysYP8Rm7GZKS23X8X1kjrkbvN2aPyN7ZUAkbgZVUsfdxKHq1FoDNBcPWwYkH4VCbHDwjemQCEgM2FW6s2MTC",
  "key40": "QUTxpK1rDpNykC1Kb3y1KajUFYWxv4h5uvQozRcfgWNH9rmFiysYWCFYRhyFgMvse17wtCDAxoQK82G2f8JjE9P",
  "key41": "sBPRJKVqcDRYqSRDqsLoG7riRD9SbC34ngKWdPoerU56SxTofR5fesgiDatSJSgWy6cnXrYNWx1esjdVP4YXsZT",
  "key42": "4hTdoWw7PGrvHmQxsUMYmWnHWKmKufnUwbRJePqCwSUcMjogmDU6bPBwdMqK17sBu5NhG3HJbS9vVCHemAijkV8S",
  "key43": "3m8GThZAKjo4oAJGZthRKEFRBffCPm7oTeAJSkdRzBQ2i8NhXXu7VNwamfugst5eFCdJh6T1At5KQBvosGCKjf7A",
  "key44": "5mq1KKHBgvEY8uxDMpZiEeW6E6Zgkd3qSswYXMzgiSFhaYUFMEBTTosfgBDWXmaqXDVbfah2h2QX6DE9yWteSZ7g",
  "key45": "2SgE5vABufX2vNhETUzsBJzKF5Pto2TZQU5R3xFdTnPkAxu79VC2QnPGB2Mg82exMy7LfcmoHhRvb3BwfPgG5dcb",
  "key46": "2XEcpyYGAFUP7tFBmDQj1BQuxHxSMDJgwxirQ7RAh8t4JshQeoCZvJRTYQhAW1CiNwmbpey1Zd3Rg2pRo54eCwzq",
  "key47": "4JcwHkzN2p62Au7UCaukZpWAUYMrdq8ySxJLjUpEdaShRzogkfAWJFm1PMSpqEghpqVZn7AyynDp8rPbLcYnoSeT",
  "key48": "4MmWvKgWVTzVExTamoEQXkUpNvpbvKHYL9sHr3Pe6TknT1gaYZMe23bxF6tgxqErVn4DjxELQzJZfYHC3isBpDgy"
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
