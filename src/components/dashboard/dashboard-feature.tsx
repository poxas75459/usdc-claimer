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
    "FGqDi8hJeFLP5JdvVKE6HJ9omZxDaWUCnScdUVViJfAsKgxtJ9395nwyYtJtj6Gvsi5g5bdG6xPKc9ccbzjLogn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Ac68EFiRca2PTzJTdWgDMVwjJC54RexzmjNurKeWztK5R6wcL4qUSYLh6DXva5TEtUUWLMHeKFzSWnu8keKQjU",
  "key1": "5Xa5kvugRwbCUWtBRLKFTpNuxbpN5w6g28JwdPReuUWNAP8YyyKfVpJUQtZh1HH1EzJXCjxpqvszQM5LbvAWwxjn",
  "key2": "3UH16CshZiUPDUKewh5WD9ZLrs1frMwv4EkFMuMZf4kFfbrJBZREHqYeQ6oGMfJqGZiSScWR2wp7pKSqaSJMdZfK",
  "key3": "4gRG7JCsVe9HjfmKM2L18qQoeD646ffnHaiG7GLvWm5eA3SrHjswkqAX1QtcmXSBVPzRMeBLSf6MngdinGRNzzwH",
  "key4": "2oHxC9MRNeK5QVdYvCx3uLw7akWDDMuYmZXpKhGzczVe2hm3ZcnzfDhJsMTwyWRkRWtjf6pv3pHtjDPeSkFS8fCw",
  "key5": "4ER9d7g6h5LwVehDxAGRYZVTDLt7JCsX9CAR9mU8xLVpAf1RGD1X46m64oezXxyLB2F88hD7nYRAvQeoeXu3hG53",
  "key6": "YYuDAmBxSDSwZwSe5AeMf8LDUYDGvFMEzV9nGB3e67XU6LbxxRGeeZF7vBV8io4HCXRcNAA9ESHUxcUbAgq9eG5",
  "key7": "5A98omaAxsfL5SW9NxZ1ewp7niNyEgUruUp3deUrP7zQN79ZuM1K1dLNzW7VFYgDyBoMhRsXnJPkffuofWSf9pNc",
  "key8": "iY8gt5hhhh4s1kJPSJWdHB4WbBgQsu9Ev9fZwFgRRLa4nS1N5wyi1AXSbJrP1aEUFJ8DToJaQpHQh7BMLprxWp4",
  "key9": "36HcwB6Xo9YBt6Nnitp5jatPALJXWcCsDD5vh3x2UCVsm9nYyqUNriWig5nK9rHyuqSJ4NSRkxKExvVwRHsFi4JV",
  "key10": "3aaS6zSsDgbg3FMZqGZZwEQpNWuJyMHPLWf5hsmrxhhqkaXYNSXNg1vGKYZN7Wtkmgsqgqc9sKnjHmuMMLpJhtuN",
  "key11": "1i5wNpDaR4HYmmWGHaeYTWSxrjDmNddjcodkLNg7YCCa2x6TcKCdPpAiBwXcptJhqyC4bUtZ4AvnBWXZr5LMQL3",
  "key12": "4wWZQKpnugq2BAoyiytneQE2bx5MEKZ52ZXQTf7kwdSrMW54UvJeJfEL4UN1BxXPjDYRiCVJY825Yk8HDKgp83LU",
  "key13": "vEssLEPZ4r6jSaGoc17JegeFsuWwGfuAkQBh16SXp47mrMz3gVqQ5YwD5x41dvZDQZH1PJWfjC4cGyyrZ4TLJyS",
  "key14": "2HzRLLfB15yjfbGtTHSivrsabf9rmRchtYMskqVv1rD9wbNQAvKiDCwdej45nVQbsMXDEtqSRFLhHdXTHiNWF7AN",
  "key15": "3ScG2c9AfUWtKZ6pvMXGHXFNfdGnxgC5HPNsJxLQZbfBCYWUrsntgELmFf8Gikro2N76az5Cf6WKNVm6akAcGCav",
  "key16": "2MRfc9NKARK5XqbujjGzERnbWCPyZCF18jfPVHk1AD2njkH1qP2KhYECpRVF8VQgftrKDRrJDrPCNo4JcZh35arQ",
  "key17": "3XoWo1riw8pCiLDUjAZtPNF7LJMH51GM1GmhdoTGkWFen5Q9ZUQdTHFU1SP28xo7rCwhmbAW17G5X538ncRm94qv",
  "key18": "3oPbeLRinPxVFePqecEzWUSveRbnwpgkzrYVEVsGR3asnYe6yoeicfLKFZKzbwuroAoQpPZzY1XGpPCrytoCgUaE",
  "key19": "42TeGmHBcsKWfYMKsAcoAy9PYotoDoCsjuTC3ssocxq7mRgpku5uVBSnTGWugyV37SF1udcA3McyCQRm61AkV7hV",
  "key20": "5Ynio7eD6N4CvsbchmZqY8GND6StELt7bKUtBrYZ4vJHZBf1JhhaanqjUWeJKdDc96q2Rf8DkYPCJDLN8L6cdU1m",
  "key21": "2LrYKFDswyyp3UYsp1k1oF4Gha7rRNrRNs7RMw9knxt6FMotLdme115tErg7q2F4PTnMrP8uAMb4cgkbrWefrvzz",
  "key22": "fWeoAV3puY9qZdZvcu3d5EPf67Wr9Bkp5WwXo72CQNYcf5JQ8ZGZg9T38BLeqfkFnW7AmaawY4ij9Uz5RWPUH2K",
  "key23": "3fqUyg9jg2uEm4VYbuGafjGPE7FSEWkTJ7MvSGnGa2XookrPxxYeTvz8XQWCfnM645RH1as8euvodhM9r59NWCVH",
  "key24": "339kzLpYtQ9Xe1RYX33WoawYM6uwqkCNCaSFvzdd2HrpP1xm6bkZjFazBd6DAxpseXUzkQfE4CVVAgqEsoSfq8v3",
  "key25": "Gw7xEUS7CcoknSxAGZvLAqABQDXmmMtEukexfvQV5qzgpMcbbgNGrFLPn8gMBZX5fpmzxEHu4Az9PBL2eaBm1CU",
  "key26": "dwvhkwvXHkHo2k4av9J4Psq53vSzKdkrM7vBG9fdUycAMH3PoBpA5AgUxivDbeF6acfos54BFW2w95onNP1fidU",
  "key27": "5YCM8RsXgi45tqfmJQLKYUdeQUX4jLG6JT99y3B4tcbNxUBZACP5kDN4aypS6iP461WcF5dbHcLjNn4b7qLwdfKi",
  "key28": "4KhBRurZtoHdbuLvEdECvepUBko9fh5TGuCxR7iYia7hrkEcXnBVfaXd8awVV7T72x4WCbAtQguzja8z3gvLpYYV",
  "key29": "2tCJdjnpLJ7CVTFYBRnE8joDoiRcJ4SQHrxn7QHuSESq5dxotJ8uud5HZoSCg5XfRcVtbY6xU5GsJ1LcUTtF4CiX",
  "key30": "3nTEQygPfyFcaK6fiYmUKMuBTXUEKxXkpF1xu53cAxma8qtJPLAgkKZyVdYejkYztmU45KH7UgWs6VrSUZUUFYyK",
  "key31": "3AeFViCLxEUmLwjkss4AkA6ZSgneAJ2aZ5YurZZbCUmCQ9ZtRQWp2bpJZ6fjKGFTmDSFNjgAHKVue43HPbJu2xvy",
  "key32": "hbg3sWVs3htTtvKgqyGosHTm6EU5Cg6xWKXMAJAeTMSnuHUpEZFU6dEdnf3u57Q1EwXnF8aZ8ymsicGfWYs8yyj",
  "key33": "hAArxQX54cqmHUh2VTqsA8rsud2WLzRs4RcCB2rtV5W25tLedDYe1RNXLAZXKAfobs9w9LU86caY84bHpbc4rch",
  "key34": "4yxN6EGFJZuZE6dX44FNBm1RFKohdaLpYwy6PQ8qmNkPwf2conj4b82vXMZb6zpFqxDpKgiq4bvaBa9cFu6BRae6",
  "key35": "5azoKfTR4yHwLDwrmXtqK3vLChf71JVaYLqMpp9m2Wse3pKr5CiK2VTjaDA97ztdM2KRxeJ7qUgcPgHaVjckaaXS",
  "key36": "4dz3Fw9o5q5tGtraBUB9FbtaWorw4cjzG48bAQ8d9LdHfqd9ETXVhhLSFwNXkLooKYHfBJfsUmSubpSkWLARKmce",
  "key37": "4RCs5JUJgWXiVyc9aUjE29caaZ6nYP89S6m7ypfdL2jZntp9ig5vmAAZqNw4Hxy2TdPwmazLQ15xhJUERqb1fZXq",
  "key38": "3yrZD6TJaM3QcYddYQnrmkMpPsrAjKW9u5Xx418HTc4kPAJgDN1wQTyMNjatxwkdBwb5EeyChtSd4iMYL6T8Xjhn",
  "key39": "2BeJYy6sbbC8zuYgWCgtuGxsy7FpLhKLLTisvCCnodpfKYAWNdSLq4dnceRNHCjXaEtCAE8pPqNtCBXU2fRmKeNt",
  "key40": "24fGcKSMmQcAL5KATuShQFUct74zaghhszHxkdAQjq6CcEyUkShqjXubBXtJZzFTaCx3TCpfmLumBMU3MkzXZiLN",
  "key41": "5izRLRFmeDb3jyMg3ijiDfTKvDne44VJyqbfo4L2PbVYkgsXghDsLCtE4PUDVtVJQRrNcHdWn8YwyGV2ZtLXneTN"
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
