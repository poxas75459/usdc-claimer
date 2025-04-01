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
    "2yazBTRc8BBmcfvUr2Gf5zVr6FTSizjwXPVMQuyD6BupwVrz3WNtK9BdguNYYFv88MY3QZm4Eb5oJ4LWQZaLEyV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xECgWWqfCS5EkYqgQLXT2ABJtcm8CirvUzwFXnJoeUrzTninAbRb8WsyTe6w7Fw9FKksgcrYEa9uBj6wDdGGVh6",
  "key1": "5XRB2S5uSTo8yBjdcdAWFNNiVDYbYYLGMS18qd6cCULcv9ctuDFksnQYYJU85zSRLB8JWbcsYm8rYgkqMsS4Bjr6",
  "key2": "3UpMVbFuMk7eLh94fb6mA7npkSHa53GPQhpJbUESc7DaduuEaX7jiC92HPNeysizn5oDQA9JSMmJhWqX1XNfdx34",
  "key3": "23zohYqR7YmMftHbhgFMDP7wRNcKDbsMQvDJzgdAgmn8SsY2iyajR7ZoTNT15jSJJEgXpfZrcdXnMKcYtSR27zYT",
  "key4": "ZcrHCx3Rgb6MhQUUr4ZLDQSNwEu7zc4bA3iWNnQGdB2z1kecda86WZgzMKYqsSdG9pyoeyj2vrdHehgzgdUq5FJ",
  "key5": "3PZBiZVMBojuTu9SY9eZbMvPja2jLfUTyeU5fxETCVMTm6pqHUjQ4mE23EFpEzCUuHxtwiEdKiqVevW3Fa8ZkfdS",
  "key6": "PW6wVUny8bQxnR6pa6LBPqoSUrV3FTgCqEAt3ehpzGsSkt3rdvP96URKw2LoDEMBNfpHsMduRxtyT3D3qbWXYRt",
  "key7": "fyCJCptNtqfSBzNVj5pxjTfnREH5soivUnhPtWCH72UEF7eFvdJtvpQucWRPpzFYMRvN5T5R2fChitQMoXUGP9M",
  "key8": "4GKpL75eCC4GF4LFRqS3xj9Z9yQRXkHTjQxxwwHZo9P56HcDrRz6sJyXDTzpV3owFs66ZowWsiDSXARfqS9gBxno",
  "key9": "ffGLEQ5o5W7tYjZE4RxoicYAVUU9gAeKMy1ob5rnvbPi255v4W6ox76KStM6yByYmuQGYRPM3dRU5uH2Kip4m2n",
  "key10": "5FyCddvSe3abtB4yZaUvqEAsmUXFDGFkp3yB3tg1Y29uB2V6doMhHXG4KFLRF1fitWZJax1RLsvNNdYzdpkpihr",
  "key11": "2JrV3zp3PpyUR5smmsKh6GmrjrqzxJ4s8811neDeQ5YR8KUMA5odELvKKvk1ByFaLjTBk4Rkiv8YTu1xvQoRuyiE",
  "key12": "4sHzbrZCtki9sin1FNskTpd3C35XGcudbDvTjwtzYCPJL1duhmzoLSuT65t6A2VoKnHFY9jdrUxiK2S2yvDoV6F7",
  "key13": "5LN4cDtdpC8QwYnPHu1s7ePXCqFEMKyzW3mwYnqXqrxQCQQ3PgSkfrMpWTm1GtDxrc1FfBAvCzLwzKD2CE8unw3N",
  "key14": "5Usm9KV2ccaQ9KtBgaNkuftJ2xhNw2cj12vWejMXwysGWFBCGX9X9cP3L5M4tKetF2fA4BWgVNubBbhKpPjx5tzL",
  "key15": "HALcw84y1tsRi9yNbA8bzJFHcP9yG6UqqMybbKwEfz4igZ9Vhb8SJdNoqhAy6JRcT1zxN4GtBd1E7mp4vXQNjKu",
  "key16": "2965B6SDWxRbGkvbCG9FYcKEWg8sKXT1JtSREMXhPAfT91HVuE5gKxJxgWwM1WffW2cf1bpddYUKi2VUf5iaZYC8",
  "key17": "2NvKghCEK36a9h5KVfsta4ZAkJ8yn4r7HKKyrfPK6BCNpsx2zCFnR6sLik4bvBtZhqKmNRAmjqsBteGqREdSErAS",
  "key18": "YyjTQnC7FnCRFbLULYvhuoX5PUPRUwLjmSsffYQyxdR2w3M1DwhfHENkZLnaKRjgSNhNuLidgzyMp7yFrUT9PtH",
  "key19": "ws6Z8cHip6Fa2fjKFrymatxSqDB84tkJqoiR4dXaPzML3GRTbrjo7DJwWQG9TqmZLM1FXLa3Jph4dA1pti4QjoS",
  "key20": "2q8Ut5Zo97PQWEyUZQzuYdh1GNjhV5CCrherfZZw2UD1HfY8YJp97tLoSJe4MG5LixD162uY98nZ7H5BHnSSmAxX",
  "key21": "4owCmrUWF76rDGQ4b4U3zpxGCg5avdh49Vi6UGzmrDFWVQNyjVBHEgJbW5KguKN7CCfRzkg91k2qpnVTRjTm34NL",
  "key22": "DPxngHemtjNBpUHifWk2fFo9nYDVpQdnKjy9CA9ZihbqR4b83Nc8tGagH5Fir86ARJkbXKALoAKjYCCgJjVNFgU",
  "key23": "4GtEUM1j3n7s93rGxvsYAtfAw3ZsR8esgNwL7mgPKuZ6P4WQwcjeobSDB5vPbviyS3ge1827ps2qozpDDUXNrP9G",
  "key24": "5VnN1LfXtG49x14bXLSbWnhpwsAWgU7MR68cNebFdXDTmr8xXzDWbEXreW9L3XpwhkxCagUcn3PFrbrVKkny9xsw",
  "key25": "2XXX8zFKDae6TjVRQ6A5mButpgjnrNXjs5MnsFV36MhGqRdgfwKdrVbxP3D1QxN8km5xWJxCTaAvJcveQazvTnCx",
  "key26": "5Fqa2rz2op1afCs9mquCR6CvGccFCgmaGBByMWck9yCVssxRQqFnadMptY5oKiJieRpy4mLacTwtzx6pxQgB4HxJ",
  "key27": "42wYQFrgpug9cYb9eW61icF72efppqBhk9ipvA2L46aiJvWuPgMWmD8hpw6oUJK5iKabLXAZK5tJB2BktDgQ5o6K",
  "key28": "4ACJ8d1bTv5g6Geo1Ko7MCaYBXj13kmBAGpE9UrdcMm5T3Vh8A2HQMRi6YCRqAuPwo4xtr2gPPkqyNHGiX311SE6",
  "key29": "3FW5ZBb4irD5TLoZXcGU9R1FAkitw3jpuWzWFUCxfUAhjHo3N77UXoComABWq1VQ1ySAJ9NSMfP5tw2Gg7KoWvTY",
  "key30": "467QjbrSxwELTv9Rr6xoEvg7Wr2wgVQGBAzQDaSgdthCSxDwU89WUqsMxzL6bWYgR8w2to5i28et4CKF9zdGFKc",
  "key31": "TMC66kai1XeMDUndMauRZHdgjw7EZ72LwUhQZVRocACtaEmmpieqdKCYxvpm3iDNh8heRf46ECEnxiGeNBKudvo",
  "key32": "3DZpDiN4GVRUmYkH8NwXwhVu1YSsSVTETB7VsnjuxacYVsfapXHt1W8YdtvAbaLpUuLwDjCkc5Dq65KXue51ajHT",
  "key33": "21LKL48tQG9oy1As6u4pu1kydhTjZsDcwQFQapMpeKwG8xWhWaZWz7E4iGnuF365dgyJJJEDYmnSCZJdxRpejBzx",
  "key34": "G498nZiFdM7k38gZW3aTUxuB3qE9pazcsPCz7a31G3jVaBX2FMHjUh4PFpsQdXJH7b6s6778Ngikeowh4nCRjYh",
  "key35": "4NwncRTMMp5hwNLBXjEhB4gh53671Ct1yjqz8r16jkQZWLPpCVWTV2nwBbAJFqLnuYE2qBtKLDhvdCyNxcEhPw7M",
  "key36": "2fKwyrwDPcQBxLPf4W9tFRSTQq2ehtYuf6zJPvjm4ktJa61kXyaJC11WbXywZGfAbi7vXbRT1QsRHqLUKEFsJiCF",
  "key37": "YQNUmab6hEiQd46EXuddUkyLTn8d3h2t3c6ExP5hMJxMy9cVsPgqkdBG5TpdHr3PtdcFC2QemX8u5jUCgnuBjHj",
  "key38": "2J7X6uoXTbjxyJshYmwHZgqQBWUX8R9RC2o6fR3x76KrYZE7VH93GJuq8GrSmexntZp7fdRfFLJUrppuK9P5Sgju",
  "key39": "2rj9rHB3bMQ2mGjFWFV7QS4QAcUUZoKeKD5D5bLo3FUJhPzn3iVyTjAvruczUC5A8c6ZfJT5fvvoGHbmyfZXTdfF",
  "key40": "32JyS9PWajXssw7GWLBqCrUbbj6VUAhTLyLChy5p2tbwP8QL1qNKaocoxAP1csGtJu7KLDYdeefCkKfGRR2utMix",
  "key41": "63vPTGkmZ1bRhX2xwPwDkKDp4srbMtQCfRj4ZetWoWtJyGCSobTVkk5pbhcpaggd7cCAeT1TFEXVS1xmhX3Nygu9",
  "key42": "4NEWLFCwzWXFnRA82JnPZdiSWZa98sPobcEWUmLQ9TrX8FofnBALRY7Ta3eiDzBs8BDGXh4yL1VvvXV2uSs31YEy",
  "key43": "4At5pMWsHi6VwZ5ePti9583WCi7gWAcwotbHnBh6H53CGubi2AW9Uz4izCskreHnLB4kyrprw37eFPofnQrcpsuB"
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
