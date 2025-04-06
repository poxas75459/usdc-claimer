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
    "38MCTTLJ56tpZB9WRvubCC26Ns23yiJ4NtKkhkybk7Jiz8bWM73Q8SVEYsq2tamEDMEYQGPT2CRyPVfoP4dxhTjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AS1vrHDdAj9bvbYnmQuUWgEi6bB9H8pa6P8gxorqLk5kjvqxFs28BdxFVq2bhWg2Mrx3qNAHPJ8MesTbm7aBR45",
  "key1": "3vyU6jQ3Zm3c1E389QAx5u5mmYYNJdkceMvN66nKkrCMafKVb15iAXckzszuakD7ZkaLUewhqsfYsPxqw1UxdU8d",
  "key2": "RJiB1eQp6yTKKvrvZrRFtypsFKQ335Mtf4aXfrFWposNpLxMJdHhiRK2zeByozREyMZxgZLsQrZfWd1dnmdkWQL",
  "key3": "2sVzx5mGvEAPfo6zHw4XnjqmG2e2dPZhAL8vbNpKuV1pP7kkkbuo1FR5Za4DVTZGSyaYN62SgDfZdpThjguy3joF",
  "key4": "2D4E9vCuWnmpidrUaSm8MxKp8usg8NDxcmeDmg7EVZb84KoVbn5RzFBpQyHkJeHeHnNosFSqwdRcCBvaJLJzunCD",
  "key5": "4mxeZmBEx1ty6wbC2s5HHixCL52A3Mo6Hc9xzKbAgP94Q63YYSrrgcKESjwXBt4nM86QrwAynY2ovFUDaS58FA4x",
  "key6": "FoszU9i63rsCKdQKuEBAbMWsEBtMxu2G5inZEexSLwoXvcaBqG5s3KNAQ9rbwsuUghbSxysgrTW9FjLdZ7m8yTK",
  "key7": "42TksmatxMYYNbpQKGdPvn2nifiMV6DxfpyMjPgNNiGj1ozrUFcvAVyPJ6HxPW3iUrCbR9PXRHv6UQgpqy9C4WUc",
  "key8": "5JndSbV9933F6khoePukwqMVDjsWvgvqz2P1zGgPy3j7EKsSmV5eZh2gLnDPi6EAmbYszXnVWU1T8AbZzeRA7kRF",
  "key9": "5qejdMejqxd3KB1erUZEaUqvt8MQVWWYL1s85Bj7kzVCn2fQtyRms1LcjDpS9esAdrpTACeo9vBMgpEshPkGAcEX",
  "key10": "2eUaffSKvb9K3riSnzdJ9Xr6RJDacZT3eLQ78FShqk3UbcLRmFNgggnsXyUeyLkRndWmBQw93yRztBsfEcg12GNH",
  "key11": "5Bcd4VBKki7VZNXUQsGM1HFDDN47QTnGjE5gGomEfj6QtZqamC3DgyTYzXqfJMaz45g2EpqLXzbvcKi2JTobXTJm",
  "key12": "21Web4FcKZ1Ug1G9oB4qyRibQcZCi8j9dRhe7jMQnWPdmpFBJrMSu6ChRp23uiBheZ7DbUtxSMK17NrP9251uCaZ",
  "key13": "42oPW6LG169NtjNWPkvzyrzPQUP3VfYnCrobD321aP4zX89PQJPkRrHbCDffJD43XqsLVUhAXkevsyWCnWZWhASA",
  "key14": "4CJH6Jrid673jjQsvJBewXhRxUFjihUSWLLyQGqEkCQQnAs2581VNMCKChBGmBJGwuXK8v78G65Tn6TfPY6LFMLX",
  "key15": "4oxBJJ22tHZWbndFmy1T9Tm3q2yKS7bEbFy4Hd1qFHVgDX3fz9itS2y2KfjcrqKxdFYcQAq4QyA1XJn5CBXPYGs4",
  "key16": "3TfBoCK3P7nQ2QBr8mU5dCXqsZ65ZXSebPXjGDsvQzzQkcLTFA583mdkZtp311sKuXUU9Y9QVJ1udnK5WUo9nD5L",
  "key17": "31arKgBjXV1U25bCjvCKbTetSR83RDSqPmcnJxysM3tDdLp6o6sFyAJpbA63fmPEvsPGx6kP2AFx1UStpGqX2jkD",
  "key18": "4urSYWLnTfRDayyFhfumqe88WkyRSBPEjCPCZ3m7cGP33sU5ACxo4guieup9u6G1JWJZYXvnp2jV2HKvfywJMbSW",
  "key19": "5u9pCisQLBtFVXGxS4Au92Q1H4Mr8ExBRXciCpjswy1f2EmBhPzFwXSjDHBBa1cM9fXxiQhFx6nrPnmVf3vAMnbw",
  "key20": "5AobmvNK4gQsdrRX7Jt8v1izNbuZXpYoN6BQXiRwWMuBgWCqZXo2z19ZxjU8Wch39GM7ApJNjs2hqVVwj3wuGWiX",
  "key21": "3XuBr8jeizhsK3dRUjTFgPKDKqHQYpWWCx6FYJrFMJhjBvhgeJ2gjkKbsstb2kSaUwoYAbspSKZhvgeqd9p9p96T",
  "key22": "2cTzu6m5HcdPmGXYdfMPGLiSpKS6EZoPv8EX7mX9q6GgTYvaJfjpSRdFWMuthn9EiQShUZMMHdL5aaV38icfXK34",
  "key23": "63RRZh5kQg8q9KiqgXre6tQAhmLfcQCLbF26KM4ecmLz38mhZmwsuZqsQJN3dxNWxLeNcuWgNmyxqHfDan4Uptjs",
  "key24": "4ZUKjsyXKeQWYzC2PD7Eor2XmXgSrhJMuGzw2fvWXQcGTif3CYeHGWMAHqPenz5HT9RhZSPdghLdjtkHdjGyckKk",
  "key25": "3SaQwAN9NZ9p7aBtoVkCNvBunD6qgzfqbB6Ry2WnyUWu5zPuSLN2LVFBqURwRdBzuEK4N3Q9CGDUNadkLd5foBR5",
  "key26": "5ty9k7C9ZLCWt2ekazqfzcGYTfWowbwmovik1VYds9vojh74SekNGb41YfWsbHCMDPHaLrM5cUixqkeogznXMjYW",
  "key27": "5112cHS7yefSjQKe8o3XTKLAr2cGWnZGa2qQdaq9eU5N7a2FJaYPCJafDw6uf5Vd7bAZ5nkNb8U3LHAHgKtMtKEh",
  "key28": "DKgCeBMsAMPR1o8Efp6KzBzDF6SsHBkn5ELRAspeRfarpgw2GkU624nRyTuVhX84V4p8ZXv1wUa3Mk74DG2vvLZ",
  "key29": "2FzrrCFhhdi9wUL3srRhba29xSE3qERnMWMfbujKZ5WkD1rmuUGvSGRxtV9njRosLy775e555SqnUTU9TJ4DAdgt",
  "key30": "3KYXRF9omi8Wp9qtcvugRk6SaardDoY8CZio8H9waxNCQ6zEjbZfkcNoCfPvugfPYy3VvCXzFLJ1ETatAsHv4n5a",
  "key31": "5LwLoWum79zjK2oRmY1o45MkZksyscMKBdtrriaMMn6KfN2dc3dZLKvr17Y4TJH685Aw6JXt2cNJPWjcNohowdCn",
  "key32": "1gYbfonxWWf68v1Nrc23yfLJbUZc4tn6w2drUSsgMVCDDufAu9oRKiTWrkS2As3BNBvDN4k3h2BWBhcNcq2QwRj",
  "key33": "3Fw7Q7JHrxbZyct5GfVvuPtiw38tFiHR5qTjAPidbhnNt2DHo58dUVc1AMiTZZ1n2PAbg5muRCq6UeM66c1xEBeu",
  "key34": "2Lbpr8M9bCDtcKFX7xo5LyEzRLAjfdi7DfYbrFSo1469kNzgK1w3VT2r76HQ1KYo5pYvaP69sCrCKihdU93XyULr",
  "key35": "4TvcmGzCpzm13q1iGsrVRzqfMoHvBSYsaPzLSNzD7GHz9Z2TiCu5rYUqvFEjoyQHASasDGbxpe7mYopguSubAHHU"
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
