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
    "3pxUqfTUkRFNxQL8Q5c5k24vqW7Wb3mXa1EkSXh5vGdPXS4pBM8VsuMonkZpCmmSDkBiHyDRUsHstAVdqpj1T3BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ajDtwRvWG5vqP9GiKDxcBhfbx5RLA7hBbkm8rSduv4jD3UqSf1P3EqbPUNpzak92AVZxoKAJD4gFApE44jBdA8X",
  "key1": "5n2BbEUV6iQbweRWGPK7eke9ex6FnwRTiUtAhh8YXpPdtsqcpmusYLSRQqajCwp4t9GYmzTtuaDBXzTY4vLp9DrS",
  "key2": "5DSMFw9VA24PKnej65NAjRZXYRXYH9Bervy6jYzmJcs79MXqCmAh7X5S43zJEB1E6XzSE41AisDz9ViFnEaKUgR2",
  "key3": "43fcSpUbtCVtjU5EE9M3jeCQC8PUpiPdbCqi7a2j7h8jH142B8TothnEtw9o6JhA8hSweLCLiitu4y5NjG9fSrq6",
  "key4": "3vemetRXEpXbvfW1SmuG5Vm448SojHQEhhwDUHMXE8iWPHJyUh1hXHdPcWrFMV3RMvnBtQ7G97v5AnAWQ8ve4VXB",
  "key5": "6Z5dh92q45A1zWPkGZBVUfR1eP97wogPxLaQCG3zhitW69wMLDhheiyCFv5uMfSdBnDVjGKCJ392ge3iN4uB6ma",
  "key6": "2jiYAdzpbqFwbUUZbmZQAvZ4tGqzLGXfmDpTxXRPupm6YyuDuBujgPGSe7YSg2RfdoHGFZym4CW2XfZDT3gvb79E",
  "key7": "dwBbgvaie23ej8zHVSnHtYmqL6DBF6pGJz3WKhTtgQkJTe5T2vzoaWwxSHRXGeMcoDMkxyuxQ8Mw9Z6iwdqjjSP",
  "key8": "s3KCmZqcj7EbcDZQdnkX7V7a1HH33ze6oBKuLR3upyjUj5Ru29naGk9rpmycWK3uDtJqrZjaa6bwfxfNAHHsVQh",
  "key9": "3nPRtmo4YihZNpgSCmVHCoQ2d2EpiPi3aBFzredAYE7yoYUXUPtTZ7YWqW6hCi1Szwp9QTDMk4X5ggMgdtdgjdAU",
  "key10": "v7uWZmBT3Ex8gXzKyWNGSvLsTFtwguQ4UFFwjzezJaPcY6DWzLFCX5DcMUCGgF4ehLexHE83J9XC6e4UZsMd9Sb",
  "key11": "3SWvUQHTuL4K1pL7eLWEM8LBS9jzCB2aNVFHQ2GWkCVybPDjAvsugYy99nsc5JsnivPD7U3CrjxKxkECGw1fSFVM",
  "key12": "nw5nmrnXHoCRvCcP8P4kL6GBALTJyU7ShUG169pTSfXWB7Lj1C94eoPXC8v7XDc2oRBj8eH9r1sQwfYgQkFcfpy",
  "key13": "2FJrF1stcsLXyRo1cX8UD9MEDdXKqWuvv8DkC8M6f24WVmMbym8WCBSH8EF3amVGh7TQZ3ot4H5ZTd2apiczGMGN",
  "key14": "4vDd5E7y74z86LCguNjBRBznoWyBHDqdFMjtw9p6BV9HskZeX5KB7xL4qjr81AUdbhCs67RJsXKqmoGrWaWq6bji",
  "key15": "5o3x5wfVGSHZYtNeE8Y4binYnk9U83p734YdY1iceQikQXNdRP4HeKpiCLb7YgmztoMdDfDbXExEVwKHFXxj8xdk",
  "key16": "4P9coyeHzfuDT66SXRb8cepJ2mJufsP1NVaS4cBFrDworGJa8MnrA1FkyW2aXYdU8ckTwVKBc4T9xKt61JU3wi41",
  "key17": "2xEQ1zLzZLxrnwoYb1YQMLwP1aoDqaxmm2PWDXEAvKpsiTRo3ai6CAkK8oM5kntgAKDCSYHNNrbR6UhAuf2bR1HE",
  "key18": "2m7jNXeeTdLPQNEEHHmas8c1m3rMw8s8rSK27X115ha6nt7pm1Q5fsye7Vwa48Do6LgAevcaZ5zjAGCoGKZ9ZfGh",
  "key19": "3U3SP71HysAzivTrsAzrAFDxpgj9xeQQXdydAe5fVaR3379pvxw3uyXAqs4N2QkXMPFGDzgTBECDmE37irH9MNkg",
  "key20": "3qGvz4LJdP1Jjn8eDptyWjQPyLdzp8gep4DTjvdGhQqJC9UpGYh4qJfsUd6qYwxDcDf659j1KxL851rRpzW99ZoF",
  "key21": "2ChVLRv8WioBhyQEpV98p7SkDByHqWHRDBmfgKqmqccaZB8hRf75DVQVg94aa34xaRqCnZw2KkHXzAjekcJcr2zR",
  "key22": "5qK71VQvMG2fogNqQkZ8cb3aDhbZrMT9ZM7FBdoXQVL1UC7rZf1LeGVh5qSQQqrJci3gtBJdHUpMJnQfCU7bx7zV",
  "key23": "2qZqwdU3T2GU588wwq1e6VDasPQYMvJCgjHv1C2ShjzkqsDwv8nd7VoGUw9VWLPkFJJL6FcftjTAhaC6Yurbc6P2",
  "key24": "218D81FMdCRUR3fM51WiBP7oLNUMgQnF6BG4XyhCxvNTukzJYs1ZnZURBreFygDYzPwYSwZEALWgd6FBtHwubG4g",
  "key25": "eT7sVmk1Tzvxh1tw3RPNUuoxfEuLWJp5PkSmEMRa2CHjYZr5dKFS5bHrTR31AnPJSvnLfNtYzfDwMRB7wXsxJyL",
  "key26": "2cdt5k2zhtpE9V6ieZf9XKEnABx8TCJtSowXqLmQQ6vMRbR86x7fdTuZzwJH8UX28WoAkhVAYc2duj5dXvvLFzAP",
  "key27": "2C2EfcFJ1o3sKhjcFeuuhJJjsbeBwKDdDLLnx563ZWtNyfJ3MaeLrx3qxBcPqTTR4wbLhPEeyjSSq7rktvdpEpSA",
  "key28": "71FtVnyXofdLLQDb1ZMEgLzrB8v54h9tpGmhdd8r9hULWx83KWPYCuvcuLx43ySVhnSgpk4SrE3XYojaEU9joXh",
  "key29": "3S4ZuDTy3zxHnxd2cVNfNfVnoEAmQ7ynR56dJy2cEvXrDLQCtTqNNx97GRc7KZW3i4nSjzgoCFLuhk8VZQxx2ZrW",
  "key30": "UHNPLyh7ZqZzdRA7So87bCkWd7ubyQRVoHSMhvgwymwk1VVhDbsuWCTzm1pmo7VpL4QFHDGFpSgyXBAV3pAQBKm",
  "key31": "NAvgnVUdmkFQWNr2Z3HcHVVqMk6udS9YHKNS8rKSfm9xGppuHWoeJ4jYqj1eWNCP7vBy1PCHSkAXNoUSPA6U47Y",
  "key32": "5RgBhdAb4Y6NJko8bvoWKQxPFCkbVg5aXpduFH3rkgBB8cVehLcxkfuT83ZaLWUPPJbQiEJSP3WoHiq3zgqjiJM9",
  "key33": "3u9uB2C9wUMxFZs2nZuYVBaXbzugqJJcNVDVksQNp8UNiEBrqevhCRw5ftRT32ktBWuiNhimy6M8xxRV6Vv94pF9",
  "key34": "GLMj4bHV3mPZW59BDYvsegszRvsG7Sc4nUMYpZGwkazG6bbSQhPX7xCpNqAgT9XWipmqPKdpbhcvEVRYrB9kNw1",
  "key35": "3UmYqbAiNoh8DVsCzWM32aByBxHTSTfTJBcRNgWGTm6UGorytMs9rEpMmz2HUqeyqMYPcE8v7RDM8JLj5qt3zV36",
  "key36": "4uzNpvBTQZQCaSKMoEoVKt7ykvy2GKjKXQ3LPBgbrsUtC9jG4H94eii52yCbSth4tE9XNWhwBmfQtcj33LxBSvUA",
  "key37": "3BEXkkD4Z4Zhuyv6CRF7tGrZuHHygU6E7q3wuHHN1jwZ32Q96LQUpAUmY5iD8yDAGWTcpFZGEkK7hZQhJ1EsC3B2",
  "key38": "2jQnw1cKwFL1xxFQN8Eb9MuByTg8pKBTFRWHzHRPMSrHNGVwWFhupNvEMbsPnKMUxc3P2iYdRE25JB52xvtAD1hV",
  "key39": "5bQRUyFhKMZZmXajpFSZzt1ji5K9AF7ByoTQTUxpk77Z68mKdgHeb8cCYGJmRgpfSQ6xEVwszKuq78ZWeNXNUuAf",
  "key40": "njLEPZFEsPj6FTwG8c7Jym91eqQqHyfobR9n64WrJaQVrmrSUxwPTKwCEVAnLEUtb34wv9wNbt8U3yabQXqbPoS",
  "key41": "DxrkFUoqc5kwQBTLZ93DwYj1eNwETB2WtArS2u97f85PwCAKWVvVFY3Dhw66U41MSSHYQFYuiuPqBVqpFbaZdYa"
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
