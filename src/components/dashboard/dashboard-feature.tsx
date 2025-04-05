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
    "5whwiR27WfXAuPEmFduD56sB93BP2r2DbqeFVDSnvUg1D3dSXZU9KMvgaAWTVVSgTRgo7bcgsKXScxKtvW6TEdqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22FkMiEGgQifggtwxR55w93CE3KCire1Fs4bKwJhohib3nynw6Zut19M5npbibQtQJYNjLfEjkW6Z5A1UqqUBnyf",
  "key1": "4tTGVQoXBdqoHhwfd4DxSKUWYgojX6Lt9FxAg8HMtNhW4N5QGmQieHWX8uHogM91bpHJMugoQgzwnjnsbJVLsoh8",
  "key2": "E6i7gm44f31boyGQ3XeFPwczgi3BMPQFZef2ioKf4m2B8CSkcWVP8o47Hz3C7nFuLhJeKK4mcsqsUS9Njgjvi8i",
  "key3": "Z974FWgjf7veG8Sha5Dw8ZTibK2L7UdSjfswVkcbi51KzgqjTW9f7BXEu8YonWiAk64GpM1avZyygBAa7c6ybXH",
  "key4": "5z1DcGSFFaMXJ3tHY5FrzzweK3gAcAYVdHrmpFbq2Zy61BZkVSX4RBsVM1mbx6J8j1Nr1hzRxDz7xLiruQaL6bwC",
  "key5": "2AxW1DJ8UqiYHmoBMLd27Zou8ckM2fLNbgUWjJX3zkSfmfXyGgvbLJaDNUE4MxZtdypQLGpJGqnLNQ2rh93ufxWP",
  "key6": "5zcUFGc6rm4qPVQtVFMbPqSzgDAFRLJzRGy5Bw1mvjUia8UqE64reHnewZJ7spm4wUrFw6ccsCdQXZqET4rQy16c",
  "key7": "i7yYzBNKEQJcn7wbG2vyPQ6keRE4VE2NXcNJ8hrCmE4SoCgtX7F1bGRT5mRbM3tfC6eTSGW8cnqWZFeojfK27vC",
  "key8": "Gb51FL31xgF6NBBpLarRRu996RUG81FfF8zeNCoyJjZ82xioFEsBfiG7f7HP6HUzQnqFguMkyyaBdpjFeatNuyY",
  "key9": "3WHVfKwosA39HieWT4XUvc48zd8xz86MeDfftUsWnkG9txTe1XiuqjJqJ66Ecp8vvVM1tnVn51HDCbmdF7hfEjWX",
  "key10": "2k4hKGZtDTqojatgvdPFexHqmzLJM965xqEwBNL7cLHyNsWeeZb8czi7nBwZi8jb1aG5Fagy5SUHBrJ4rk4dJNVx",
  "key11": "2FoYhJTYr8B9M26ud57mwUWYAuG8FDSB5CKjjyUwTHe5pDnwT63f8jBxv456iGkbtux5CZnEGuVb9FWFVS2x4uSG",
  "key12": "FFaL1nt88st5cpdysvRsWfkKACSszsuCW1YJwkEZgsw9n2jYF1v4c1N2TLsaiDXE5CUqUvvn2WajSFr3nfDcmuT",
  "key13": "3kSn8DVaqmDnEA23cKNRtY4fMuigiPmBRTFUjK1L3ZD4CVAXEfXS4hbpK2Hn9rEpi2NZcQhyP3DzQ2qbevAidKUZ",
  "key14": "4cDVMbVTviiE6CvvgBdjphmr8cqpVKLHfNaUGUhPHxv6drMwvrY4NK7jKSBvKQs2gRiFzY5MMTEbcDsj5JqHTg6F",
  "key15": "hq7WGayaLxRFHVgfZnrmztxeeSCqHkamikfhmg67WkzDTmNxaPrDssZdNw6wAErW2SLFWem399GfApMzyuup8CC",
  "key16": "2C3cctWkRpbNiUmwx1iDGuRLPxax7KFKdYNMhQRKgy5NX9HxWwzt7Uktt4vRqJVjqDRBqyz5u42BTqeAdF44hway",
  "key17": "5SUbin7jz7QLZP8shugpyfiUWon2212EE7AVe8cihiW7fb9XYjUEuXbvTBAhAAVhAw9j7AYuyD1thDLw9Q2fNjmS",
  "key18": "2kWMVDtd75Bn9oumD51Nx66XbAojjYCggKQKMSJMa7CEjTStZo654xH2qc1JvqX8541ryKCkkrM4djFU2aqLVDbc",
  "key19": "5bQPQQ8jyTFmypdEEQhnxnfJA1mrJVXx6buhiZgf7g5zLwAePd5c3aGv7QhMwjGXzfGDfhcgkstnN4kvSZ5GkpZh",
  "key20": "4KqsvnF8xLy2ssfEfkD5LJg8m4orV2zAB6swqdHRXEVU8bPUCeQZ3Z3eNHqp5X7XYizsHwfcV5fcfZUZ7ACUe1aT",
  "key21": "4GzJdQeaMfCbWwtPPSHEpiidNJf6E23T6r3gQ7fxnaRxDp3hrDsi96QoyC7RCVK1YqtXDj7mVpHAiMxj6iTnHHAz",
  "key22": "53MzRhKsyNQZyj2BstbtB2NFhA55bY758SPSifa3AFk2ECAg3pB277gsyK4AYZkDYSLhsWXbfVQdx1Brgj8BgTt4",
  "key23": "4rqopv99mj84wQHKwV4eyZQUkaMZoeeLYzQnjhgoYkuDSjuriDyLStfVvv3Fr1JMS4d8E1qhYFV1eojtRpE7BjkW",
  "key24": "4VPKWMeTCofhhoYAdgzS7K8n2RSsMbpi76MGQHQ1JsJjt22MxN8ck6ZZ1UH1fuE5Uv4P8fGD2NzA4iSqFGRiZhhd",
  "key25": "2eRmkHi58yg7pHA7eahwz3Dg8nfgXsAt71zge5JZpYJavVE8hckyqMY9ue76pbBspigYtMfofjs1YpL1jvk3QtvJ",
  "key26": "RwdnTC3vsWHNTpUkn7kWdXwUd71pboicyXNHSqVWCFH69YYkhi6qPXVPZCWPwrPVRFmojdUdEhHRpEvXiJYaVrq",
  "key27": "5toHxPHguVkdR9ZKhQeAQowARFatdcMaMG9d7vP2pz6naNsSf8rC2tNkixwXuKhvzcuU9n9cYZQuyTwdX186Nkf4",
  "key28": "3C7Rz1AUi6zeP643k96NdXf5QT3bSwdeDNHiYcbig3F1pYdzWQwFoRPdFkis4HDWbCajwXEtRWmHecUzhNSwvAh4",
  "key29": "5HkcP1JAAwxQRuUCb5jXXkrWSYqdk7iqXyiiWgfNXGejV4RQJdcGNMC2Mkhz7xBckpb2ne6DdsHtFtcq8YAD7kHJ",
  "key30": "3hg2VvXYwbyByJ1wBtnShQjjXjuZDNmLni6o1KwNqfesrvZAAE8NGMnq2WF8ZKf4Ud1x7xsjDTvEhAdWQmBzXP3v",
  "key31": "2pfH9XegQ7RsW5Nzo3yBAXSd2dt2TtmALdpMyQnHMFemTHrtitbkbXCs7cQuSN4kqsEdNmYizDNYZ5UtEL6j8fu5",
  "key32": "ZAfuxuzd5QCUKxfLBt3eHjY6JBsXR9FDrKrmhY6oMQCA69UgtZf623izyPk2AJMZjC2HmDUpNqD5q8yJkZXWwMk",
  "key33": "2Hh5YS51Tx8Y623hFu7j7TytvMof612aDYfYGs649yuKp74STLUDiTAAXv92qtHfvnq6pYr2Q4ADK9tbPYFb2nzg",
  "key34": "3Q8D5uJEYbAFCPkc2TgMKsguYgSevwKN7YPbEpy5oep3sAqXW38xmG7a4qJvaZERE8Ze2jZwFEsQxUzvtqKdpdhu",
  "key35": "5NvQRD3ne2kSvQZ5zisenAJvuhKEqxx2Zgm4oKCdDGE8LmVqdvJoUPeXkKmeJsWboMimJQAZHxgfSjjpPRhmUohd",
  "key36": "4LzGA8ox4CX7ACZVPW4An7pqSAnborxKSknWDX7r3diCnmS4X9fKXSmTUnLe2tpREbUyezHcgJduFmReYjpy7FQk",
  "key37": "4gfmPzDjVLu2QQFwjRLxkK2vtAB967XKkrJifbDfDj6mer4wDjbgsbWC2KkA5to6DU6yhGiqZMmQ2dwKQj1LQV9S",
  "key38": "3asn7xYQrhWTuAMt6o64rWXr36qGTgYnxQALfnWyo8MZR8ZyxgQGhgH8diWyr6zJqeVxoaArhKcefWXSk35vbjs5",
  "key39": "2F7smmaHkVYhPeQp8nwKJ2nPSw9mQPK846s7v3dWxZ75JjV2xbJpK2Bxu1BEHDZYAQavet2q7QDRLCwNtqMZ9ze5",
  "key40": "45jgZ6LNY2WX1qj9UQBzn3JAjoSGsC6ouUkAA5QWcXMrWSyn3v9rK4unVVtyqR3xQjrTpJ4x6WkHXctwGH3RXeCD",
  "key41": "22msoe9neN5iZqS6GCs2acQW5PF6W6KcDrKHSbVXHwQw39UxT49nhWfgnBmdSvtQ6DKFMTANMBz6SpH5jH98RtEh",
  "key42": "2vhmkuovX4cN7oMGeTker1nKbQ21Tv1USrP2diZuNb95pU9bgSjoDGDxMyxfgLnVqV2r3jKGKxepte3fLW2fKMso",
  "key43": "65SHddKQEHCA6F2PAmMQLrjkQhtvXYg47fZHSVFVLfRhycaaXi45Lxo3GzE41ucs1ZiChSwCtNqu6UVXxgyTNQkf",
  "key44": "43JypUxadqgiL9BrmPT8YMo3anKbitKmbCdv5Yb2XHkYrvf3TH8vvRKsZqJVbybSpR96v6yzkrRaxbEax8GFS2n1"
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
