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
    "jFeSt83zmKtLmLz16hq7zBsypZMf3m27fB2NUqmuRUYRv9QzzCaVEUnBmQkk7c4WCsjn52t6LCx6dHjrxczuCwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434utgNkmDBYawMHY8xFZA1bKh5tUphMwCPUyfz7hy8uUdGEDZVEWRCmrFnpAroFTVKXfBhf24gywcmxBFBwAAgE",
  "key1": "21Cg4BnJUKL6fVJpuXs8B7J5tUfYahaFZ881kJzn2e8TToKk9voBJRjQwL4eqg4DkSs5CrnHm7bfKhiP9Jtk4QZv",
  "key2": "55QFmgkh9YHMx4LoxbqGFcFRPU6y693oLThisj3HQoxbxyFo7J9LnSUU7TDqRtqihWXeBV7kN4ge3KZgyVnYRYwK",
  "key3": "aALUkSZPDDWK7cdzn3XbtzFo1EgULveu6fsUQV43uLyKE2FCB2P3gnk2PqtVNsEKjtCncCV4C1PrjYWNYDfcC3n",
  "key4": "51YpoVmrJh3VCwKyjKFvrZRHQKsGSqU5n2EY3XsRX6eCJ61SQ4Xm9D4LEZm4Rf6sgMT4jbDZ2YHVxMoYrZauwgP8",
  "key5": "3Auv7pgV9Mjh56dCFDDnLSAXHw3QL8raipmzkVAWH7Psr3oxBYo3aacMZ9dUAY5n9GgXiqGDwG9xAZzjdUrmUBwr",
  "key6": "3w9y6SJdp4B4Fzis9Sh7CyV5Y6FwyBWynqZ57HaDdj1c1ejkA2Wo8Dqn79oHmWUiDwPHYPmp6aTMMBCUK7kGECjL",
  "key7": "2UkxTEAsqScQ2mbSHsbY2MXwd77Q6kmJ8hKwAeYjHg6tN6VJNobgopSek4F2NEENFo5T7A1SL9yhZUQKpS43jkjP",
  "key8": "5geqJFRfm1nSmvVq4R6nWr19ynkS3ovq8pAwMPAcUU5h9QVBHShBbcPhB7NxY73oa9EEMT3CYst1gLu4NSFaoGC8",
  "key9": "3bRrnde7CikuCNtU8gybpnXkPxZwYiFkab39g98wok2yvn1vwHZW1dEVxmyXRa2phEzbGSC5sWm5hSmgdXjQ6usR",
  "key10": "2BpcAPoM4zWKCb4DDPAa3UWj95sqJ6a7apTKtEDKZnQpj76on5jCaKye9LGQgNcdDhLYXkbNjKhxdro1XMq4pkp",
  "key11": "5j56vr28tk6pQy5NPFMZj3EBUrzBrVvv3Wr8dhuF1BeicWTNcWRoSfxamxfHiZWPvDgaa4tiGUbUF68HFbEVkBbr",
  "key12": "V61hCUsFuypGsAYMYkpeFL4nQxUFGDbfk7MNZemoX1BVXWBzLfZCoMRjdgiD51oH7Ski5kQ8xekBvryMc7iWadz",
  "key13": "37tr6oJKExBseHadaQM691uFQues5stsqD6eXVKq8sLYVENQ76JEVHE4dMAab4k6hfSYLRnE2z3aJr3iNo51CAts",
  "key14": "3nak6eSRnujvRtGuuYgZrGdwDws3nok8F81F1veDgiK3mA8PxGmzCyoAEePQWZNfMn8UomPgrbZLWfrCkjMSBpa1",
  "key15": "P6iW1LP12Jz3pmyVyiuzoYQwDZVprmKwytQEZZGSnbQYdYb8iJDARLxJBj8tK7iKDvkjoekNZ7KTcfuL6XvYnXv",
  "key16": "vv2uXPKJ4u5KAL5Vrp6AqdUt29P54rnrd2sY8buLM99YW5fe2DsRJGxvHiY7DxcJsX2ST9EPRTKp8cCfMbfhGdb",
  "key17": "2NnASE9R3tbymx3JU3UwENPzYDh9ezC6MKiMAQApXKFRfAW3YtRnQhRfQbvUSaf7qH2V8h8xikZYTRCvt3RsMMZ4",
  "key18": "3qqsn5EwVi8sT91xGYcXrgoa4Jfs71HDUSnrR8UtTx6Qw79R8gPQVXSuj1GPQnMbpM4zeNxfp6teCQQVJ6VaDQxZ",
  "key19": "5Cy3dSuX8MCSEgiu83xuLUNcqqkCtkGe6vtdwCaiabYQK6ZVymiya3RMcFQeTN7VGZM8kozibdNSBJgEoYJCYcUC",
  "key20": "34A9KCprEfGiurb85qBTLGQKyfXti12iPKh84c2w4PJEpiNYv1G58wWiEHosQcfifzWdAAjsXpKXrDesYzMPquTk",
  "key21": "3TszYwP3JoR1zqUk26cvhrCMPFSnrJaGLh9k7E9eddksHkTyG2Qkkg4H39gEkxCv1RMLSeZAsEWTQZhhgz1pPjLt",
  "key22": "BY2E5CsN99kEojqBLtcmJi1eJ3nkSgEfbA87LKQJs45CF14DzUJXbXkRbaSj3iwhQXx6SW2cLjtTzqeDJLLw289",
  "key23": "3Hd8aSNGi1RzXuCvULJ7TYeJq2NAYu6nTsBaq6jaqBLFCH9Xqq349SrwzihsAMzYVWW913kczgQXmyaALdz3j7TF",
  "key24": "2Uxu53FRZAGFfiCxDrfoVghAsBUrsJ9hmJwtqDUQkcgKoehRBK5A6wDxYND7uvWFwhT5GwD84dQBqPLjScFxpD7P",
  "key25": "5ekupuv8tmSY4UDBoYkaxerhJ1osUZrqNbCdiS56Z9CjwHb754bF28XCDt43ggombDeLj95oUC8E9Ut5uSzeMNEf",
  "key26": "5TDySyMLmJzmqVrGCUBhLa7e9BNF3RqDgmrP4mz9SC4NkFjde19iVKdg17PPo5srER3AxqrciCFwdA1MPJAvaQsC",
  "key27": "5Mz9HmWtYtzs83YBYCCKDqgjA16QEzqs6FL6B5vsz73SqSoKdvhfELxArbtgT5vRemiNqWf4U1CQ4zn1ewTjmSUW",
  "key28": "4VerqwmNCvjtsoWkB46ZNuJ6BxREcb2xRuEfDKYtKpz6DLjAe9ZNJj92cbk98CrF9XtF7sM4ULm349s8gg6LH8i8",
  "key29": "WWzxRydy4mDMWE3UhW31KDgngZzqyHZXeGJ3bebSzLAZNR2zmPLHZ3ZAz9c75Fkq8oxXa3DYq2HUctFcm5dpMse",
  "key30": "24dxiqNeAsyfPyT5GHYQMzSQbkwu54jN2X4FpA4c4m7FVWg2TdTJ3RC7PeZPjFKJFMELRXJR8kGqWwgNVba38jmB",
  "key31": "ojYRDiDsU9w7yLmKKR6pZjmawTtrQ9TTmeqEhpRxJuhshRJXMweSgkPfWKfH9rSpaxjKHz9aZnqWQay25yZKqHw",
  "key32": "2HnGPNnLa1Cr957GcndF85RPsdXUz1iFNzx3fMYqQ3uwrF8BCShsFfYjf7Pzqe9jmx9daLwZWsD1HcgWbhhwTJX3",
  "key33": "4SnZrUXKy8UsXHeP3mBRpbvyHwy3fAuRfDiksyJzo1THwpnhEnEosG7u9TyHcPikFUqxkz2awfDFgixxEo6DwLCj",
  "key34": "2JedhfJw2s4dJmKPypxmxCN2cvcTmLvxDhFRbHyPhDkY44anGM2sxegskFMQ41ZQtJcdZrFsYEzwunHuU9pa78rv",
  "key35": "4V15yJb25uLKkFBZRmA3vrjhovhG2BKWw8AoE3Bqft6drZKfSJc5GB286N2kzVTQRGv1Upg4p57Me85jni7LX6oa",
  "key36": "64dC1ufZnViJKSUY9sfwZyRy1pve6SdWARwor28QoqLAD7jbAv67om4C1wn6hsHG84XGvCL5RHC7eJjYy9u5ZfNx",
  "key37": "2kShdn22cjbFgzkoXR6DfUXacgVh3rbUURh51CbM91zMrHmgbcojw6udkshLMDC5K34j4Ytc5upo47SfDMnXiMcZ",
  "key38": "53w3bysZmJoiyXwnrqhjWzVnAyntTYDKPbFtb4T1Vih5UXxrDM1UVMcWD2q35YUeZwAsETnMskrkvcG1nzWtLVcZ",
  "key39": "42xT4LkCEHNbWx8Xjiz8btmuAxcnEov4T5kujtMfRNQTXi2tyCFxSphBUYG3P5JfkaYjFEToMD6sThNMD1sy9wJ5",
  "key40": "43WsmZvNMzrY5i4iaQZjURbDHntYrrKoYBeqdyXQf321og122tGMxjJivHRWhhAvxmDmPR87AFZWcLaRDP2HmRQp",
  "key41": "n1D5XyQe9a3EXJMzvzZdnt2FEKixKywUr18V5mz8yocdSh1GeoexAjGfykVXr2sEnb1ogSqmQEAtwddNNxgGm9o",
  "key42": "FV4q23XWwUVkckTA8sikeiQWMCzApnrob9XfFSDcDPGjA5CgayGwvoyhgYMMM6sTtExhoK8suNi3UEh8CcWXKF2",
  "key43": "5D91g3wxkSbGxSZBPcBqUooGuirSc8qLZu3D97HuPdCD4bstWgMuQcj9VPfG6tTBiRu1Ht8GL2BWZnLWPq1V4EKz",
  "key44": "XM9u1oARjhPiqRHjSSuFPj5Sa2hW63yacgV31uAYyX5yiwLL7BWie4VKoNCbLjTPrxazxN92Tx9hZStPeBTJVEM",
  "key45": "2619fetkMeatrJdZUp5gCJ3UkhUSpka5FggLEy13iTBeVksA6fGRjMysw8BhL27VJKp4uykpXvBWSexMo7JmXddS",
  "key46": "3SzUsaGBSYK7UQcbeREc1XZkNPBpGZf6GhkfcYsmjzUL567xmWL26cAg7wks5rV6B2MwykBxKTCz2ZQUoEnvAJU7",
  "key47": "Du9rMyHmttfBQNm2qBL7nRZ9LqL5trWXgoorsiZR2xHKATd9oxyGXXjEjMCwCzspF2Knrehm3x3pXHgyfbFgMLm"
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
