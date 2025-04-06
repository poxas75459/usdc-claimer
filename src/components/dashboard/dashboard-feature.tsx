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
    "56jcfBHnzAznMaxxc18yw4YwWHTZKd2oihZcxvgiCwCxvsUg8QkPXi65tYCetunfqJXntuPrwZLW9E6hSQFRH7z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53iYWrAkWXvJKG3MmBEpyRPz9Bp1Sm3ooMJcfrCpBkqP71RigNG9ega7cD47WYAWw9uVoaj9pc1xXsvVRvCvphHG",
  "key1": "5PwRvVBTg3dR8HebocP64xf9d972A1FmkSNJU6htqMVQhuCEdftHqeSVSXS13ZyGMT1WZfxiKRGQWuSqWvfM1kgp",
  "key2": "rKQgD5pNEeGCPLddddrUUFdxxkpmfwcD5uQpHMtYKQ6GiJ9YrZ5QGnNAycZQhzdRNEfwpKxxLoSy9aAsKFECs87",
  "key3": "5xMMytQyjGAQdmQfTXDhbCJRfXcGrjR4Gg4EnpX5PEhERZbc8BzNugfZcx2uFHdheFpt6dpdFfAU7zpj54R1p5Js",
  "key4": "4sLtqyUVr3qbARmiXx7EpW5g6hXTh9duvQ7M2hRSm8FMAYhfgUNwfRxPNsuyDQmJvGt1spDgGb57eLVHNqWs5xsk",
  "key5": "5ZNJim5TqhEuRX8r6pMiWWcghQXs99scPtGufVSvXzBC6wRoBGAiowKVPP38N3mJqh11rm5eiZwEKCm6iS5RatxX",
  "key6": "3QjNYtiDEUBCRaUEQ3JTetejPU1nCNfGpPXXZQHLtZ5v66dMcnRPgXyYiKrdW9nesWeZ1j1LqBRV1UBst3PyVtr3",
  "key7": "3iwkCVFzWq6boRrXvVgmorQfsbA6vPXjTwZoXsEfsm7hHQjuj2ho67oLH41x5iQP4D57fESpcZnEPpTHAEUovCuV",
  "key8": "4ahJGGwbZXcPjcbXhuaY2M3qyjQrcFZHNPhXxn7Ytsqb3PqSUbtaurzCFD1WWKymLsiUHEE7rp29aEYQWCCoskaz",
  "key9": "ssgoRkYZKRkZsgoBq5i1GnyEroAPLmncvAf9YgfCpJ7Ru7CgHWeou9d3MXqgBiJubvBdfa3c1neeuVyo1YJoWGT",
  "key10": "3Nq1btqo5CUZoGn2cZDhpUPasAPu56pHGgfYXxyFAS1T8t1WcBNo9pHzxL7up3YqgFjBvqEsVBr1G47g7NEWNibD",
  "key11": "3Ax9rZH3Xstzk8uq6FPPdTH43oQ59wHMubLj6wdMR7zFKbVKTpFLixMwVD8VoFnJJpptXnYoX6dfMQvkpUXDLcMT",
  "key12": "4Yp44kDsmx5swJqy2fxhrvp835ahYZZ334m8fCRpqyU5TStFZYiYqGcisEpo7bMQtqxaiQaSeW5xZ3pYEpe6tcGC",
  "key13": "3bw5TEisPRaQVj2KUzWJptDJWwDu3cTWoP6fvqjUDeyc9H7kNiqgwoZRhUSxrHk7bEPFe6c6QK8DnN1AHY3WYzM6",
  "key14": "3cdigW9nSECERkRgoaoUuZXyXLbB4WdEnoQSYySH6aPSuTEZv3drUwfR8U1HidM1f8WinVZwanji2HzA5MzhKakX",
  "key15": "3Rfa5HhBHNigVSibtfMEj6uQ64YjxPbJr15AA3k5pwsKXMVb8Fdq9Vwo4zv6TN7SmvqViSkNYerTHczwLqN6JxKi",
  "key16": "2McxKxjDmhgxqXc4petfspm4J2TDYK3WavMusSboiSLYbAborKz8T4ipHPQcYeNrjkSHTsbEsWDmyGJvjTcAExx1",
  "key17": "2kEMhc2SwNpLxhBsRwBg8NnKFKQwKnnH8X7dDpBswB7hyTFyWJTW5hhCC62H47FK4CcH8dnPdpNyxRZvoY68bfHY",
  "key18": "2KHCtUHnQr7uzcZMWjULZwonLBRwgTHRhpvZ83Luwdszsf1ZLEJ8eriU5kMgp342AYZRewDsivr2btGyhRMcDPgt",
  "key19": "4p4shE2uXkhPTv6rJAhiWDqmoBmHF4VoFwiSMTKqDs3BkRA7a9JEFtKFRkPo3epZZFKjM2MXup9fXdv9wNA7CvAj",
  "key20": "5C1r4FxupojiMX2fjLbuXq3xAUWJwnr5yf2T8Gd25YQfdeZ1GR59vqrXqKkqnU8c7CtLLPc8bm7NMtt5oSHQknwx",
  "key21": "4LhJNfZqtsSeUDDtgh4aH54RexZ4EpMebZrNqnpgQqgb1j6wKcBKhaZ5XFraNJN9ufCkFkoEgFTMjafmvLTjcRkx",
  "key22": "44AhCDR2ypCvZqL5AyWBsdBfhvoYbc5hnHPB4buWw4KyoZfPn39568UAotJU5z9r5aGT8yKh7yA84WmePJr9gXuQ",
  "key23": "E8iGmU1HHjJE29Ph6osYCnuMpcrEzs89WURLRJoja43qq7JzwnJZrBgsWnmhumshKmiQiCRBHgRMyPKhcyH5r7j",
  "key24": "tEHLv6jh4xW3QxMnwXb1PYZRettuxRyJHtp2ePKEkLQeeBRjnRqLsdhio1zi4TqLbZkJzMq7x9P8djaDThdZJZo",
  "key25": "2GjoaemAVZQbFSVxPfk9KhHLYiU4QxPkLTwKcK5iMAZsa4XLmVQv5y2YMkNRUDBqAq6T4SBx7jd3diotyQUz6NCL",
  "key26": "3LuyHXJi6ddTTdBT9DeXfKKKY5PfZ1GBA8qZU6Ak4WFrZKQ8jMAKyybKhvEY2YmL8GnRCHavCtexYn3wqiZB4t3w",
  "key27": "4RQEZuxqughM1kN8jRnPTY2dEGLchdYN7YmNChezeT7BEWC8CwyjyLBKTZkEbhCoutCF1MB21fSrmRL2ue2fJLVp",
  "key28": "4ZsF3Vnigtr39BiYFCJj67d54zrYkLrBcA93dvhTLjxYSdfJMNbZKQ6H9fYe7a9VLJxwCYDYT4i22jX2x9cpa9QQ",
  "key29": "4EWHdb7Lwd43FLy7eF4VjvuXyiowMExrLg3dqNuWdCpsvt11qfhhA3UHuX4PUe7Qd3pKdd9VtrraEKL675mmWNHK",
  "key30": "4zYG1tjPZCky9Z6LccB6CJ4qFTXM68SvPuPxJQEz3uMCJcYKSb4TrbWgzxA1mjpwb17CUQ86vbzNjdukH3wphbC4",
  "key31": "5mxjwzUitxgvchVfwK71zZWNpvgdkr3Jzots7TtkDzvfJsf9n8SzPi1c6i8zMR4M9ajqmab52T27e7XJPGdWfWG8",
  "key32": "6ZF1cxDZ8eo11tKBthMSQK2XNx6cVzzMnY69B61M8T18Z4XQhAFPC1E43GYcwYSASJLX9VP5GV72oGUUwY5uojJ"
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
