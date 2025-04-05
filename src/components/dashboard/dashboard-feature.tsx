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
    "5bH2UtZtAPfCDy6pDVN6hUKSbZqJCwPi7QiR7jYQRhfgkzFFEch5CrkrFjDR9Qnnxro2nrFFVoEupuhTrq84zs2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWNJRSEmLYtT8oRzSZ7sjMQAkMdfcWZCqib8z3NivzaSb9fde23nLZgEWs49xNQHNFSV9D9ScAf5NhZqrHHnWhT",
  "key1": "4K8h5rCph7jPB1g11AKp98GoMzbBJxBW2pFn4JMCSab8wz32nwmJocuNkHJwvw9MqnnLiBzdnZGSzynwE1N8B3Hh",
  "key2": "5Xy4grxbZGTVuEWjR9oYn4REQnXaewGXpZAnf94jDKLNShVqqr7bAMUmmtug7B4AZLVfSLTBPDvCGNufDSzY8ego",
  "key3": "4DSQ3NSgLUbvLCS9pvPMLGSy7qGbnDh5Hfmzww1TUVtpBv3VrSyeaxPTCfm1xj6rjE1sZbcHfxCtkubZo1Rr6VXN",
  "key4": "Zu9CEHQLQwjQh3iju9XhfEkvXJ6TnntgHtmU4mBSQbWfzVH4s7Eve5Afer3jzMm2vz6uivYmVYhjee5fiMF45JS",
  "key5": "3AscA7U6QcN3ZACWxPPyhXKuqYkuF6e267j1UdHzKYzgS5QjrTVv88VDNEPCdiqVFMjwazr73upwm5q6iRGu7nrn",
  "key6": "49qzwKQbvMgv4H9PvxsQpjwQ3bCHTHHhd7y82tuoUUPBVsNuQJ9XdP2QryWwkGro8mbf1Me7sBDDSikkPqWPaWD4",
  "key7": "KA6AYL7gkmSYbWKpD3X8GLgx8ZRxEXCvpbvP2Vmf2bC1Ugj9t3kZzdb5Tknp12n5jfo1jkHuA3TmgfX2iwCMrSW",
  "key8": "2SNZwckdf6Fd6HwzbFCX19V7bcNj67uhCuoY3zfpZCQmkJrkNY2HmK6aFn3r47dU4k1MWv491bbAKev8Md4fRUEW",
  "key9": "5CNrJtGtEFvLRqDrdEwGKU8u8mzda9LYFhADLUSsvMyrTYAchx6wsLpKZ29xZqDFFQjco3M1vWgb73fY9vhnoLRr",
  "key10": "4VXiqFBQmcjiq2YBq23UR7YnmWZkmnNYFkAyzs4yehqF7Z1265HC1imggf8QY4qPYz41ziwhsNsVMzkUFVHHFLSF",
  "key11": "5rhySwBgXbiNmnUDBBt4gQ2zvwFsvNPVHEqVLq1EaQ5gioDFeFJBSTvYhVWG4Yi6YYBu2cwFYNZvmQaZfdU58biN",
  "key12": "4w45dEA2ErmPaxjQowPXSc5DNQg623TnioAxsSBL7WonFj3MicG36yJowMD3EtVLwMmDZ9KCBmEW57CrJTVcKAeu",
  "key13": "2xkjgUVuKLJzqA8ynQHLXvJSg8ZNfyMByze95cC96vTSenCm8mqiK1hPhFBRVcDXG3ehEK5md1XSEM5hdTDFHzuU",
  "key14": "66DrXjYLsfmRojc84ERuUP7eZfoEbzzDibXXH44osFUk6RJa9wmrFVXfUu1XTBs7p7t7KFSSQERhG3mgzrEFhTNT",
  "key15": "43v7X51X6A84v3eTdVjenwwEYSqAwTgNddttCU1iVviDHvDMiNWX4H9HNsPoJzWJL4Z8CB6DtJrE21i9CxExvKj8",
  "key16": "2ZeJvhZe9ciank8zTeAFAMJD2GU6bBQ7vzppSQ3PQK6Qpn71PKMY33t2ym6cobW4i4d5ak5TeA1CUfJJbiaHEB15",
  "key17": "46bXgByr937Ko4iHd1bb7tDH7VG8EJpJvaF61NhEHFEVxFvviXUFpMAZ1GD2QuuEkftwjoWg39sdvqb5TYkmip2L",
  "key18": "2uSoPaF7r85vGyATNjpN9YRzid68Pre1RcpheSnU26wetSbjuBQyLzUWzedMTLXFc83frc2ivt3HAg5K6bSJT2Qi",
  "key19": "5gNeYMukNs54sjFiQ79senb9xQZWUYabZQ6zfifGhWvbPfLGSAxAgxbDzroqwCQmPh2BwCrq8dizXoikPWP6jYMn",
  "key20": "3nAw3uHcx8CxpJna2cLGG8ossR4iUpJpFTeq9ha9oWeDnJwVzkYHxkNo9VxQxywsmRNA5JZmsDgp1z1Akd1NEHyp",
  "key21": "1qwWyP19fVL3TR91zWP2hK5SQ41JfMRbJ6bKjxD8BTwCyxjEGLHxuuQyyCBg49862SPeXxhRRVxm9Nsixqwr1Zf",
  "key22": "4XUr1Wu2b26YziBv2pDm5BcqPhYhvdJePaFy6uwyU5XHFoshCkizyjFBjaAMzsFnjWPZGJY5LuBxaZrekoEdrzxx",
  "key23": "3nuuzGTToFZhvyFKZzDt3PDDEnwT42Hm9BHmBX7aXfGHz5Ac2L2tHT4auWb6Ty7nLjQZsG3vPfBxyAf8YwmT1ZAj",
  "key24": "56KaxKwJBUmT2MUJsQw6eZLf5p6mCt5WaiepijAdLYt9D2o7xNmWxnXh5xNLiRxsGX7tuHLYD43uV7wJmCWv9DdD",
  "key25": "2FiWkdB5JbeZEZeT4QQZFAUxvHuYZMaByWh7QYToEfrhice9hC52B3dB7xPWR7XvVSHr1pdkupQxVqZ4dkLi2Z5E",
  "key26": "3zKzNcoCrvf2nftJejfxwEsFsLU2T9deRpoJMvLfS3Td143SBmPMkXREVVS1oUdepjKHCh6Vn96QUsN7Uc8c78oQ",
  "key27": "2RPFEKmTtWv59k4Dg3uREnHZdGQdYrewRcNToNT8SVzy7WnUtojAJps7r4CXGsLTbBr3yps8m3S59sZFqsjNczgs",
  "key28": "366Cddzm9ESF9DDbxevAAVdq7GcGzBbQwrw8SUFvF9goHJJnJT1pANGegmUL2A4ZU5C1kED9uSMinsmSv7r6Jxdt",
  "key29": "4iBYwLjdP15g2XzUs6vpGwtWKiD2XPt3xwMiMmZZhv92rMFnwai82FpqVKKPetWJspiZn4yGKfzqtCpp3tFbJDmS",
  "key30": "eNVGjBtg2x5No2MJP7YxNQXfktsxtSzeGHcgmZMVrXHvzxFv1484dHSJbTAvrHatBM9LAcCwWRSSrbMLVdBtC7r",
  "key31": "2eWSH82VLhSyYBp3pGNqywJGQxHe5q5qZ6JJ4hQADe33NFVSK1epgf56bQa5L4U4z2DgxMvNwAtaRXn5vh3iT8D2",
  "key32": "2mUWmdTQPTmQZ3PJWNAHTMcaWZgFqgZCSSNEW5vgYL37pKmeQpzwBuo9qg3iMSbiLTVRpDbwsmFk22Njbs1Dfijn",
  "key33": "4SWLrFjuQvjK9fhJL3FCDGuN6kyYuFvEEGJ3fXFpmKG3NEgoPbjaH7rgDPBVrX2TRJWzLVbqANHMNxadpWsux5Gt",
  "key34": "2Pd4H1ty4Xdius7cnjuGtVurwQZ2KrhDgNomb33aMR1bonRwUBLXH1zVvv9pdMoBduaSvwJdG24heJDzzen4YPZc",
  "key35": "4bsgfb6iHHjPPqTfFQa5h4DCxjNpjihvA8S3dSuBb6eXSdGhSdKZqPSM1cW2nndv6KYZpYeoCLU2dA5XvWKNGJhb",
  "key36": "4asXFQuRqfcqAUjt92vHBgqQTpxtcaa9NvCUuvPtkue6sCJsFXhCJYwxcrf9QibsWJsjNWvKC7XrzDTdP2LAQqbX",
  "key37": "4eSdgEFo4452SP7JSz5tTtkp31PMyhwMXY4SKq5erX4tph9piVR52ZuosfhMy6HyfTVVtkAvc77pV3v2hywaYvav",
  "key38": "qnFS6waS21ZsUZBXfxEzepQNNyh1iPmjbRaKaeVA1vZiBjgTjBfY8wHqN56g2kQomMSYUmgTVX8iaW3KpVwRrBq",
  "key39": "3KDDVHh2Z9kqXXSKxFqW2mX5fZktoSanrRVy5UsrCwAJJH2UirPz6cVz4QAvx6azoz4ki1L386sj3mpgDLF44nBp",
  "key40": "3BTpeNF5BpQFu5mSkx6ApRnqAGYyRyqt5pggPayoPqCx1KWhUJoxWhwB7nTna55fY8JVb5QLydrJhmWELkGkdC9f",
  "key41": "3woMtssEU17QMwsQv3LwT2T43VxwRv3DQVCMou41PVvCviX3XzBRvPJpCKyToB7JqnmYkXN6rHHQYxmChaRFMF28",
  "key42": "5x4A755Z9mkALqchR9DovKdnMjTXU3Sr1AxsmLsGUFwwN1pXQwfwHCXbBU7cJ97JRQTbw2aQjExU1wLzmwVVgMKK",
  "key43": "eortMNnmLATNN5kbrHdAaWUjRZvxoFTNdWXE1EDhY3kDBbuozBrfBzgv1DvBwMq7gAswinYjFuQRtsow27Z6zHn",
  "key44": "36f3tUM2jxNFVPjzo9s9WkxG3diUmgoCcXmLAcrEQH1d42n9PKj6y8VNtcJcNYQ7bcDVT7MtJRfj3DyEF5W9JwKm",
  "key45": "AWnuyd1po92hWkbeq85rt4C68Y83T8gVgFzoBkpgqqtmHc9JHU5C7j2tD7tr2Mv1fzA4tPNerkmmZfkuf6gECkR",
  "key46": "3pWmgNRm9EgWxHvT5C2nZEgEQ4BMFa1KdnQFcyc3y87ydEMsj9ZiHZkQU4eSXdi8rrTxAZ8AAyyFRkKs3QT8zvmK",
  "key47": "3oLp4skq7mJFpha7rLhMp1SEDSvY2nUWvN9YmEjp5bntb6MEjBPNLmpM3QLo6NKaBf2dyK64MT3VouiiT19Fvgvd"
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
