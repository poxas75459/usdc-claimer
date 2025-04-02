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
    "36ZDmT9rCGFt4ggiLaQFKhsuemWcj8iHRho8gqAtCYKWrsxE57GeWgKzv6L4chRxao1B9bTRXGciVdwhUsQc7sTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnvCSZuNnh9yjDD8y75hHf7tu2qAAzW943VrR9Uh3oTrbd36cNRmyorP2GaPiAnuwU49s4Dq5BFCqSxySPqAmdv",
  "key1": "46ryZdp2YcNixAZLUZkew9ahnpNuy4hpjbK9Vh6n9zk4c3XVmoewWSzi8A9zxWropr2m8sQm4nMKGpz2u8Tbmifk",
  "key2": "4U7ymFHivWF131fCsAqpgTNnJvCRQXcesN8FrdVvJivfUVEtU9WbGmdx6LudJV4GGbHCP5aWXwxMeSqL5tEkjmYc",
  "key3": "3Ggvvjrs6nUvFedghvKfLPQotsdQNsiLMebEfAxwMdF7r8jkG2U3fsLY73d48Kr5aBDkA9dJKubLV1bvB8ZzQFXo",
  "key4": "5oP3B8VYVWJAPHDvAicTvtmeaD7PJrGrW4FxpXkiJUShgrz5XUP935ArdQjhWMxKwHVBTyoAZ3pUkzf8QpRcqXxP",
  "key5": "5si8gxF4EMkgzCNSqNzwB8uR1UsYDMF5qTnoo5aqEijcN37Ex65g6daX2Y4MhB6DWHAmmZzhs1dw6GgsbkiRG7EL",
  "key6": "5ef65ECnvHkUg8boNSniDLe6FFmGageZ6D5nwT25uSEW39NtpWRPBzZCp1p8qK2jtDXgKFRiitdTK6KkXYnuvX1E",
  "key7": "2VTrYHNsUbgempssCRdExuoG2EekvCc8iS5FbS3PCWyqkrxtXokDNz9bAQ21KJNkwK2GS6hzFDEuDLHTYb6tNgNH",
  "key8": "a91bEBHpzPKjwvNVhTmLcbhZ3izRYDatjgB1UYbTyYKEqjxhLpJcWiUD2ndepj7hYzdZFcYUYiqKHCrFomjN34X",
  "key9": "3f8ryP6g8hCdabrskRTQ86otYRUp3FgzDGYC1wpsSqEXwwkjb2wTJPFDCzpHNTS9gGD5Vqo9sWvCuwy8YN53RMHF",
  "key10": "axUcfqARcmcQurGLBaHFn28jWx47ZMq3K85WtVU5itpQMVv55bN2YngXCmw4CZyoEq7f2ZvRvE9w8tNHGeXqiER",
  "key11": "2UmAFhEA5pcFxR3dXCYTR41AfeSXAmtaxntrKtPKZRhuoLty3hKXT7Pgg6c3qZAcipP6q84fs6enqfem5QuSs4gT",
  "key12": "2CpkzjrkKvAEERQmNxncu6WPLrTdK8V1BjwdDAbGJz9x1WQk6p95U8vscZzrAXjaUqp9MRKdLoDPVCDE3ghsefes",
  "key13": "2YA5C1ZnaS4gaYRKtDcZanyFZtyb96UrABQG9Cy8rnkScAo3MPAmirSM89jv2B3yxNzgRbK7GG37crDBiaSqLo3z",
  "key14": "2kD74fk539TuA9ARJVQhGsVW5aBSp86xWmxgL296K6Rn7us27RgEC44NFnM6VmaUbUbGk2dGvsAdfuwvLxsDbsRH",
  "key15": "2FK72UZRURmxLaWcJStrVZBah6TUdiN8b86mAMs4nuMhGpAgPVsHn94SzaY97Qq8DVFvnXQfos5wZEsZ1KUQmpQy",
  "key16": "59EbKPNN5FMDh2MEi5uqP9qnCNcJ79aDxJzsfPoC16mV5iJASzq5ARDvs9WqCxRJ5VerGUHWwhwipWzrnQ6W3KiM",
  "key17": "5pHPF6w9BKW6QtCScJ8MwVRJoENRWKdP8oCBF4Fx4AvRQGWfLdY8Q9jvvm1xyESVFtjjax2WJ9bN2WxtXRiCqdPw",
  "key18": "7iGwm5bPg465uve69V392zykTmVhhVev2a4dnAxejABQCLu5czUyG1CYoXZumeFUqRSJ6e81Bj5Xhor2Cwi1MY4",
  "key19": "3c2d1mY9THQyVxhZ3sAJTe9LpsiaoDzsexB4aUPiNcHpdyEAx7LYUSWn6iGGHbZPd9h1gEj3HpEhWmmh1Xxcq9b9",
  "key20": "3QnkAT2LanZRzB6Y4V3WX3sA1zkFhgshE7oGWzCVYap1nwwXxip5e4Y2162SFAJxxbE5qb7mu1axTWDpSYxAusGE",
  "key21": "A7bMtpTrKjqyKWGZfqt8gVdYjvH3e6tdHs8HYUrvKB8hMQtrrwYAZ3QvFo9bxqGGXNQJFpzYJD2kazPptnFK59E",
  "key22": "27Jq83asofAagrJEVVs9nixbKbZujyyFa4WjuS8qy19j6a4yHxDVVfYVDCVQzP7ogoxWSUUjAfngHza5SwtzGewp",
  "key23": "2cnGz8Xz6qGvcpDBNe8WHc2yDYsjoe6N7gv8nuiw2B5urxwYoGbG5KQkGQbSCeTDnMsg1ZJbBv5uRuQsuVt9Dz1R",
  "key24": "5tki1Ane1pMhzE4BBw9Tgu9XGjNStqqoZVcTh538kpz9bvraJ4MsJ1jwBnRSAqWLpSh7gTDRjDpBuBxP7jCSV9m9",
  "key25": "XdVbZQPFCnFQbuUXyhrR1qZodQCRHxNkCLHjdHDxfPf1mth19ukPerGpGGdVacFbGRX5ss7RKq4R92ikTH7iTo6",
  "key26": "4mrtDrTFWznXrnLjPQMSHVaBS5QiLnG6ruH7dkVHbTqddPdtrgaBmJ6gWRX5yeXQRiWNxQWnUjtg6R7My1FhMP3W",
  "key27": "5w2oNzqTxbHrzBUJCoknDqFffsvbFjq7ZsLTKHporboKdH3fMJDohSRFCFkvKSQmB33bD6CDab9dcoLdTkMr6CNa",
  "key28": "Y2DPDdGsKxMPRfRP2dm5RhUmmUv3quW7Fa2wM1D534YtmERoo8A2C4AHjVPd8VFxDnxpq96JadsyYtbZCi5TFT3",
  "key29": "2nEJaFEo23pCsL9LhCPFFLiKC23EGX5S9C6SKBpukNXTyZ7nUY8hePyyXXfirzfNihr4JXvcKeSVR9o74SNiCFRM",
  "key30": "csyp1jq4y35BeGo6yxfofaaj3QLTSvaEfE3mSPqaFPJfZi4SyMVZgbNDHhHr3exyTXnTNKyscVFpnmvZkBZ3rNE",
  "key31": "4k7TmcuyGFjxzCuKRWNVhbw1ANsAKGMawsDfoqTqX8kYJV4pgYSq2WdTYmkNAgDqNiy6EG2nhDBvTRntAfKgESGe",
  "key32": "4QrFZ5v5WBZTTAoXYsiX7voaDyuMGMqD7x3nHZ2KpE55FhEiYTFNjgCc7ns3p6mxUvFDq4cnBDKTY8g3tAuhAi4o",
  "key33": "3j7sierKAFsn9RBuYdgz4rRJjF2NykNjiuvAVcwF8AD6LHXJPWHKRP2W53N8VKp7WBzxtb9NJaPmTdg8zcYqyHTd",
  "key34": "2dREa5ZbbVD3eJAR6iZ2xdG6NLoXvgzUWeKtPYYyHXsDfZyjKEXbRoQodJ3bXrB139sYA4MTwJZQixbbrmfWqUAZ",
  "key35": "ETp2qKnYXBBvRcbT7zuXnthjnd1pLXwGwgFAHXrP4dwdeaNkyvES2ZRmBBgoX8A1yNrhdCaLaV7tQCVo7TyPWwC",
  "key36": "49z5S8nMebVaZSd2e9dDzA3iEZeNZdSTj14vdriVdNxXDNoZpF8yWuUPgUERrKSUWfeJocHPQDmKbfmy6Wk6Sjts",
  "key37": "3hWixVajgF2uZqAnMdpxvU19NZ6GNygWfCFokHk36aX8SyF4yqnNEdkcCfUTqiQCgigTJimbBAn7KniBjMZBDp5T",
  "key38": "5xzBkYV3wSvQqXPxBR3MB24SeCpRNAzar4omTpJPJ3h7NFyja92BMoU8bnoeGuyL7HKfDMVzyGPsyR2Adpzaqi8Y",
  "key39": "2xABYWkDmpy6wETTuSziRmBsDugaNBY1CKnSB2NyFZY7WEGHxCvuy3QMKNDhoecLwHC49ncnShMFMZKxrwcaooDz"
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
