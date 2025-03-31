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
    "4Axzi94HNvpY7h33CLBYnKLBFa9i6FsLV61pBVk9DtScXKWqhFxP8oqH2yffSgLtZPGcscBBs9jhWJtnYxLFaaaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LU8G1f51pZp9TKNTC5RioaMn3wFrPHpYUi5mXuf8xNToEtz7KKrD6pposDK1ofBBo2RpFUrJVB9R8GCnXjRhxpN",
  "key1": "4VjETCgs5uUe5cXVwpaB5w6yLLjGD4ePMbzjfEDmv82FUYf1DXz9BfrHoSKoDmGk3Hfyr2xuT7oUrBHF5vGQF4Pt",
  "key2": "377dzHFRXE7N4po4c7zP4xyr9TtoRQokiNRmaGEHz2TMnWBEjDZS8U5GPvJRMLjCyj18yTX3jUEvmX9ybJs8fm9G",
  "key3": "3g5B7z4wX2PZkCcH611JHjvUiLDXjfGqEdujTQynLhdCG5c2PwsVXCorKJ9SGBrXabwRJDuhHtyp5cCWQw7vZeZc",
  "key4": "5J8wCGbcLduuHcRKq3j5Wsb1W7rtAcxaJ88Mz2Vj6Nj3wNaHRzhgAh4aGyTxekYnjwztrGVxqqor28YvLiLm3W6",
  "key5": "622obF4kccR6hdrmXtk6wr7uqafnxFYDEz4HC4XsePBn9WecfDev3mXtAmMjR8UVzSJTer7n5GAdu6NEweAbm51n",
  "key6": "ByeXmfTR5bf7R5SEAG9VNpYaKL3sPh2zAh6atMxQaRvfTTiWBqGDBeEN5qF28e55ydB9Qj9ejpB4jhShZQ23ig2",
  "key7": "yYXDE3Sp8PLUmENaJF7A5qGF11BzQWTZzfDxr6TkYrGnXPfjy35tfwKHieDzQcc1nvQnDWXfWSdoN7QNPukCmqq",
  "key8": "ZABFsJyua5NobJ3VpkKRFQZKZds6jCz93mSqb5zvLoh5uK4kdzxfwKDHnZ4YCYYxBncd1jiXDtTmAnqnKUrdzk4",
  "key9": "4kmVjBv1tV3hL4hpYeh5Lvg5MBUMVMqBSGTxqDyws5u7v7ySqfkfKYED5opdv9b49fymTvaNiAsySwmvBJKvGYJg",
  "key10": "3dCfCvcpjbqyKASc6XSEipkD2675SLMU7xjQSwqYypQL4CGU4pkUH2K7A9viLYsxg4oozH1hirbgQXxNdm6PPqaR",
  "key11": "3QDMgiTKQ6mkpDNdBjni3ZSRoefZAFL8a5tzzR4MFz4F6vk7tAXTni6GfqtSJmdZX1q2BMNoe6cNuNnnj9w1qEdC",
  "key12": "4oCB6sRapPCnWv1NKWfYHrfjtoDwJVC2vGpBRgsbES4dARRaijjkQe2yeqyhDzZ74zeWbHLvLCDToK7GGZAmcxxy",
  "key13": "14wMqrEDG4eQFUm5KHrEzrZWxs3Vhb8jFejarHjM4XGoFDRsT6MHHcPsUVbKkqY13moyoHwPnkx6h181QCwHs6D",
  "key14": "35xKR5yn6tj72WZjZ8GX4z6WVqzUUTaz8tykmKGxriaFo3WqWvqC37hMBEfgQdqmWNqHhByGDSoofd7GUWqAg88y",
  "key15": "NCAjViNhVTqH6y7eH5wevaUKViBvUWa7d1gce4cwfQFAU34JP7x8Q6QDFUkYFw3iYx5SgtUZrZAuLEQ4vofsJKt",
  "key16": "4pJXfEHR5XKMC4Xf1NQnhSWR9kNpoGyNnfszZnDvJ2Bw8mChHvMNEFjKT7nTCxdZMAHr6ZFmv5oxUsTj8mUfAXvu",
  "key17": "3DV3zqBfXqza43R61aY4gvwQkRY8xZ5C9rmxfvV5Rp7A6GHzVeDC3dxAM1neQgZZZEUNva2gsxn2LpWBUj1cNuMT",
  "key18": "2n41Zupq32CLdDx74QL3PiNBNo1Dc7pUPFDGWP7r4bc1hcHNjH4DDbBZAWLfXMRB1CbbfoXbig3r8ZBbU8nyex9w",
  "key19": "3b7gBab4pQt7Lt29KqNJXx2336dEg3NDxP8SeafqrTJbFhsRseHnBHgaxvPoar7M6i3xG4zjT4DeCkqtsqaKixiS",
  "key20": "3ykjVNJ1jiFsoGrFhTYXKQofjX36ReV9ov5BFwUa2gq4L6yLoRM6TKimJfLfHztY7o5GQBFcuQwSqDXGCvG9SWdL",
  "key21": "2D6PBFf8z7gSpJ2DUt56WBWzYryKy5chamQ5ptc9YT26RBe8q5AKw5hVQqPzgghAj1hmeHdSbzaHLeo5sysbcjMz",
  "key22": "3Tb9USfi6zzrXztkri8e63769LVcMG4tDq8QD9ScsJ9pS4ss81YqDukbBnSyKZVrjC7URBNfbiFHm7gH52uH4wFQ",
  "key23": "3VK5ht3CbHEm2Nn1dwhQRdejN6bUu3fRtYePpHGNaucQHCJVGo5mvJbg8hxNqwFjV7vpkDQ5Tv2NRhozkTb38t4t",
  "key24": "5NPehbRRyzgusTT8qVTdhjZDAWZgxvNXj5r6EAs8MV4pxAv896ETv357wvHYuG9W2nDcc9LRWo7PtSw48VZGob3i",
  "key25": "2ob8Fw68TdNk6sF1LUoXPpjkayRLKa8CMk2VT6otLsr2wpNKHy3bzZ3N3CZcQSDx69vYka5ySfdrjC9rtEYHwwYD",
  "key26": "4TDM8WuL9uXZRpkHuFWuuexFoBf4VMEQWiGLikLsM2gbj7XEmHH5t66x6c4P41yQzMgBhvkDPWkG5J9v982Guntx",
  "key27": "kJSH2CHZbVCcyXnEqwchqaZw9p12yvbNEZLJmKddPjGBKwcUvibLHHdgAUEx6hYtVJMzToWqHj1giqhi4BbHHSY",
  "key28": "5hj3YK5rMQqVihiUBkFVHPsKcjrHe3iUGqeNQpo89i4vX9FhU5bdBCdcq2WY13G8uEDmJ9xFjBQTFqbnzndzLpYn",
  "key29": "2D9jNwUHKUxp36EkVqG6NZP39Ltdbwg84jrPgaNCGwdWNsHSBUKjrqkmwbY4AyZ59ukEgGCZjMmbqaHFTZJv7VfD",
  "key30": "iw1tGqY3qVYHw7wGkqDzmjnZkGVQQv2EZcE7FkiJJSbBGqwHDcDLMw2A92ZwL4FoFCuJWWkxHZKb3hgrRtcB4Y1",
  "key31": "oo3StFV8Vy6cvzoQ73iJhVK9rDLASLq1e2YqpeARRvLvnA4sXzvX8Vo76eBq3K5cFCFfXa2JceeRKFhiq5ZYt1s",
  "key32": "5ut1ENFsXXSixSNDEeKE9CfST3UPVRPcRdWAWJ33mqC7pHvLsefihUB1azcyV4h2616E5rBJW47XgJ6nq4T9ouMX",
  "key33": "34rtcsFbp8D6Y6NFJn4BuC3sFnJuciY7F5KszVF4VuiN9AHqQSnzK91Xg3WxiLuiHPw4nuALrPTBPPskvpAxnwCk",
  "key34": "291XVAWN8Jqamqm34EXss9CwbquximiK38gWbxNxNpXhivEytqVY8K9avj9AKBR6vAz5hHvxohVSXwE3chw9anCK",
  "key35": "27Ln3yppfaEzczsExfDQgjSUCkvrH3MbKL4K3HJs7tShhEuiwDSDEiwMavDNK64ZdEzPDAzACjTWKzGcNzESm8mU",
  "key36": "X5NCMyR5XktYP4b2YbwXfnPW8Exe3Bg31K5x2xBTUCi2eg3LeLobmNE1j3zHQbRbsM9j6TmR8XK4FqvmcFZMp6u",
  "key37": "2mH53PjjbpBLVaWMQTbZfBsW97okWvCthvFG2y8cf37NY7dMkKTw4V9VBvSS433ZGVaC4jndD1pgLTzBcsGJXdma",
  "key38": "2kxaLzknfPeRJF4idCYhVPSWyUHqvZcRTcLB6KjDY2ER9ADiEnHN6s51dBb2ySbFPrEnn4THSJXtM57K2AnJYhkP",
  "key39": "38Mps1cZfLWoBaY4oMvBBcf6cjCosVJqY1NcZy1JjNPohcxi8EFSicnfoK9vWbNaSuQtKxRy3QTS8FrUDNgpBTy9",
  "key40": "38VLTTwuQSew65Wm8KuVNV9dTByKYbWFXZLQ1K5Z5Zpx3qqSWF6CLVJLGxbn6tVoF29e9MtrVB1QZLQKxtSTgFTX",
  "key41": "5kvqPmvGHe9Suec3X4KZAXDXDdxkMDM9r48Y2oEsszqmTqTQg7JAz18uZ9xLdgSM1ziqRvXKNcJwJYDbgbSqeQBa",
  "key42": "2rJSrdNkqW1TB6BcwFd8hJEgjL7jwe3GNZJPFfMYJserpMvVe3Ds64XS1ppQz3Ssti71D5f5DbNVmX3JkpC9WMJx",
  "key43": "2Cx6R5UdpLi4cGhbDNzLoLHSTmp9LFFY8H7wBrZNBVc9eR6EwYFGAGdz8A4QttQazdaaes5nPzAbjHCSq7PyMnRY",
  "key44": "4MpD7E699YJrQWSYRHSfQmW9HBMUPg3NVajR1DcLy6jyvfLr4J8hcUksk5Pmtoh3jjaPA953HZTxmkZZ82iTT5pi",
  "key45": "3zNh4sB88S5pdH9WcZuW87xr2fBvd251i99DfoKhyMgBV63wCkhrB5RXQBanfbSKV3zk3b6rnY16a9JbNSWEUWCd",
  "key46": "2sqP9dDxX4fTNrx72M64mSo7Nah49LVSrh9PBU5jmqGG1XhVwVMjXwFc3mbPVnUduzLb93J8vAMPLqrWYaL1WjDM"
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
