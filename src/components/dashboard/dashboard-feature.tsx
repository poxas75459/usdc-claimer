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
    "4itQpQkknjQbDqDSy8NhfvhLJD9bu6YHivFtUkRZpd7FwDuXTR9AdbKXmbUGNRGoHrUbF3tr17a4CK5eP5G8JM3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXZhJfzazwPNPZWCV5QipwtPnEXd7ngL3pug1z78rB5jWTSkxjaLGhbFWifsJBdrRfmRsfEAjVWCPZm3twZ77Dq",
  "key1": "xHNEw3HRE69gMwJVtmYdD7rj6ZajRgTvMQC2QEcoTUBb1dX7oQZT4DczuxVQXThQqoS4g3govCwcccju89ek1rK",
  "key2": "26kqsvUEGpvkki1y49psMnM8Tutqwz2NpLiEReeRj3LQi7XM5bmMctLf9Ss43ppmKKicVMtZeKvLzuEtCPG2Y4tz",
  "key3": "gv9ZoF3ngQmwwH5Fc1D8X57Y9vCYzkr3sFC627cbrT2Zoes1H4zp27rkwbNtiMTikbApN8EHeSw19BawRqEtL6w",
  "key4": "3Uz2CG8HsX661dmWT9gPLtPsjxpR9KNjWUiySw6aETDu1nnbkrCk66wzRWc5WdbzLSmbn9WseJ8P24hCL5kHTmQU",
  "key5": "4iYk8pDqHD5sTT6Tdzc1J21WU9a3V7KZbt4KRAibZRFfCLazCdsti2dRtUCXmArCbwRMVpfP1J9e5hPTRSb5ey74",
  "key6": "32p1d7hdT5FdwJa58SMPCfnHFxYuSJ7GWjNsmLtmcyUihciPh4TvECqff9cRD97nT4GwMV6AB4iaFkNFjiYEtUrx",
  "key7": "4e8jGiXpKtWzKisAub7Rx79H6NnFhNaCeLCaKDVG974xZsGT21pfs9kZMXFLJnVkj5CorHdDqBcT4m7w3JoLWxUV",
  "key8": "2K9PBzfPwXBjbFNjUTcDhJCm5EZNftr25s9jz18nS4stwpYcHiDUuRpsRVSiyso114jP2Vjceiz6DvZBSXBU9FdM",
  "key9": "2UtWmG8UQGSQUq88awSxxRJzhFQcvxeSaDPh4JjGdeZTwBFzG37NiDfFsLKTfbRsMwzfcpyH5azWAc48g6HLBfE6",
  "key10": "5WZJz3UaMMpf3kPo3Jk5d2NeEF4vdwbZYwTsJwTPHAwtiQmUEHNjBSwdL5auw6dVVr3WgozCvqjEp4LAx7ti1KEv",
  "key11": "62Uca64YoDm6xYrqYGkH5RCcqXqfK3Wwy4FAb4TwqxirFVLduqJo3n2NsbGMfuVyY9WvT9nmvSt81YUR5VnyZ5ei",
  "key12": "3a98TzyukWkB46c9b4qHJEJ45UPYH1Fi7fH3YZJppdNtgLiwk83boW9CXmhoGk5HMjWfcRvAfYz1DUqVe7KtHJnY",
  "key13": "43PCwyU68bai6bbUa97XLKpgqNhLiodXaepfC8gXUgCWaqCnmkiX3UtqJK6SGmHSCyyZbvkxXN4vwg7qmjGyuJ3x",
  "key14": "bLQc8BTNMw9F4SVtSSPHJGfs2vvWeLnHa5tje5mKA2uDghuhLcYouFDbmrZctSgbShRRqCac15g9K68KgfisbEz",
  "key15": "41KfMCD5fesNS8duU5RDXMYq66aEieKKkMnWpGXWAg6GPxgp2towjZRnbUd7Gg9p5wUKhanypTBHEhNRXCUZ3hRn",
  "key16": "iF1JSKyGRQtYiaZ6LCyTVikg87uRYzcK8V4oLFte5rmspgANcPsu9SxMRgbTrMkFAnnhJGE7h5eWpd9yFg5oR3o",
  "key17": "23vZr1zvbCr5yBchDFw7R5QLMFGkJEhWF8PpFs2ZdodbhW6ScdGmCn1PWnM5GeekdAqG8Ska8JzX9LEQUH9mgSDc",
  "key18": "4XynCq1VrDQU3dEZMdu8EPNN8fnBQ5PUAUEttwf6oYGWT8jWKn8ufecY82AmBezNgytrmQaGopmLBvujFjq4WEDG",
  "key19": "4YdWkzNJACQxGoHXwCpe4GqDoYLzheEm55TsauHBjarqKio6mRKxCQBcrYYDoAG1poxgp7mznTfk7fxQzHwQWiSF",
  "key20": "66TtLnowSWTPugeRvVE5RJdurZVddMAcCHKG7dPcjFLMEQsRwAcs1FHxLyEgXnbQWG9pJGLFaM1hRiouu3f3qH7i",
  "key21": "5fqFMaxLFLtyzHfeDKQCMmhAfmoanYkZtvM3M5z4Bgd2S3aChpARB93HaF8erB89tLxREa9HorqMMVuWPSBav7KC",
  "key22": "TyJuBn1WFMPw8uam9FPq5rdMFdBrVk6STXovtFfu3fA9988JvbLkmtN2XLg6HfXbiNpyFyhzhPLsrRSXhYASMPP",
  "key23": "5NwLpeWB43kxgBAKofxq6dKhVKynWexP6Q8CmwdXRLbD7UrVZFdhMHwxtXqpZZvLJbed3JxJYGu2QwezXZYrrq1J",
  "key24": "5pGcLUeGkDhh4TgNoSQ2ycbuU7xcEMsGvrx8PRLt9Tchy2Zd8QiZtKW23Y35eZBKSdLsfgHS9HgQ7tzB3KMwfANK",
  "key25": "2gokBSEDj5uM9okHJKLGSkeT6HNtpJ4v3GcSmtVpRxYKnxcEHHfb56zNUrtZkHB8uhWnUb9AdGiQX6FgQamZZZvo",
  "key26": "3rdB9te7cjuJfnNBVi4Ggt2QedShypC7G2gqhpcaBWEuuaJwCskd1ppwSvcf1f9jJwNWy95dnAdezduxsXpxf27t",
  "key27": "vrSX77cQKbx8a7ZBbJRccyVnqB85WZiLBgyKhvRABaUxpd8ziBR5CMDmuH8qu4FrZF53NMHpVPEVyoY6QJ4J9fD",
  "key28": "2f9RFjUNUzkV2oPrtDZanNbmz8qnwmStLvhuuJmkDzB3nmiTFmUXyY4WfpuQpjGACcQMVRxekkWtpATPF7Zmh2jp",
  "key29": "36xLgthMfzGdGvU9StKGVxBQQW73fCaonbhAFY4y14nTNNwprrvcPWKPwcmga4pz3cWKh5vjDpn1uSAcWUpmd8n3",
  "key30": "3oRBr5YSzXdpjogXcLZDzLGJ8HMAcC9EKv3YJLiktvMHeywocZZB71VTyPe7xj5a3d8g8kpbBHyJwhYt4ZbwSDK4",
  "key31": "3FSp8AP2gDztXnHUmzcb6RuCvSjKC2Hd9khEX2ib7NeKx6kYYkn168bX7HBjt4kvWpHS9ghPutNT2TMPcP9XZ2b7",
  "key32": "5xpAELaD65oYxgJhjDg7of9bzA8Jg6wzJWGzS6BrogoPEBQkGtTzKH8PAuNNVaL1y4qvAE7EA3UQY9AnQowEyjq3",
  "key33": "2Nc8w3VwCqYtfoBUK24L5o4Y6M2r8ij7og5CrJvgLMvy7EQu2LhTNLR41sWAAgrou1Ugau1WQvT4fGWfScKMhjMa",
  "key34": "2FU1W4A2A8JzMgQioaEUo8hs2ewR2sNPeDSgbVyGDFUtW6UMpzpPLny73DFgARvMf89Kbb8HuuPkcj5XwXyiz4dN",
  "key35": "44ySdHzbN7UkUt8DeCnAYpAfnXC5gVyEHi2zeVfQWibMeUtnYXEyQkM1yCA4UZAhZkBFiyBA8nF4fSBv4WF1YrPe",
  "key36": "4i3LQ3VovLLAqsexpffm8QwLSHRjd7XrURAhG6ncPKMeJZUvcNjBuh1V2AVYGFZtkFWS4K2N8aGEBWWk3ZyY8CC8",
  "key37": "5UAjBCPYR4utB4W1ozN8WdipNoHduY798ywrWUuv4zMfw2LQxNfsMr7WxEAurcWiiSvqkNeMhdwk8PHJ8LaNxATm"
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
