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
    "3kiHrKqLxseZ5CmNdzp1vdJLq6VGHGHv1RXt3Hqv1uFKfTH8FaBm1UJ8f4MBz1ygu956CvgDtLGKHvEKrxCP7jKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9r7HW6XacSMFrNq8ufGnrjCtdyvGqkYhw3LHf6jG1tEArHQ2BhKkaUeDZnctX5jkksHSpit6m19vjJYRYQ9XUz",
  "key1": "2BzPgYqrd79LQYxv4mwvjFUZgCUdnC8cGQ3nDR7snrLS4z5FoqFy7z6JRxixMTFGYNQKivLXa4eVTfzCf9StrxW",
  "key2": "46VQhRYbAVrf1VLkfGFZrCmgxNZ2xRQGoE5YUZ75QKCahCTU6DLfvmg8UFVCVzA9HxHzKmMScsmDxwLKni2VvHuq",
  "key3": "3ypsDiemkkuh6mBsRAYJmoQ7T9mNjtz3bCKc9FV656Cg3jnKhDDew1TSypiFbHfCf8DYD7eKaVeFhb3AT374wChH",
  "key4": "tRPQo1bZgNwWkXb7TxAYxd28XwVY85AurYYav4KgQ8VvXP56BFL3LJWWRViXajXk6GVeMw8WXU9NgmCQK2KRMSe",
  "key5": "Fc5xM8oU3p4uFoB3uneqtrZjtzJeSQ4xYtVTwUEXxzQx11Yy2C5bWNLNsKTATYeKScuDFoG6fg9NFocYT6fZi2u",
  "key6": "5Do4fCu7dLYdvSRcgnHhz9ueK5MxeSTADucy6mgmJrmGgCoo2Y4APpqm9RHHqZyLURx5CvVXk2gmijtpyGckPmWT",
  "key7": "afHJym7b8eYH2K7b1u7GPwHbuGsw9pgVFZSrxD7CNRf5ymPkzXUsAgE6o1wdDpqNSuqZ6rVeH9zYHinA7cFDzY5",
  "key8": "5sjwUfZpPHENCKCXBXNdkA8Z6BhPC2ziP7wF6C1fXT9P9LiEdme2nihPbGe3j7Wkxvxxyk4nnRb9BoPtTYH8CRwG",
  "key9": "Dq5zR6vtD9n2rUpSq1QZSyfxgGZoETTpiCcu6ehPV5FQQqPuZ9DTpuZuCZQcYJgbSXtvyjVZhWx4eGfRJXKywGg",
  "key10": "3Y97DasxZWBmoyn5QcEjY2JTSf2rXZJDSPQbQGzomT9hktrVChJo2LNWBMWCGXwrxY5B8Mf6QN3Niadj2qK8Hsiy",
  "key11": "wnac1g4v1iPf2TU68xgqTdydQCRfzhdvVpVknQKTNskF81TT7esAGFASGrwN4ZxNXrsZ8rdq3k7Yz63hsXweNTp",
  "key12": "EGkUpCCds4MQgkoxTwaftc7YN5ksDJdBqzqADKjAkaXTYmDWUYAcN1aUddcfRYt7cCQ7K2bHUNEDfjiJ8Hses5c",
  "key13": "3qpLEbR6VV5Cqyas5pTEdp9vqnJF7QCnFDMP6vWMJx9ykgGT4T59XsaaTqQfgjEDnGCi9UhtVMsv9bKb49ArY7xK",
  "key14": "2v3qN83iDAt3MmoU22SBHGncRmUiMbJVbBgm1i7UsZuXtGFcy2GZjKi2fa6jS7Ahji9tLBQnp2zEH5HWffY2ZgqU",
  "key15": "44FdQRDu4hpA6Eio5r7PdxgfsNfptNTG1JwSTkYJZ3dXt6D3R1XoDtsExXQ7CAGG8LpMPMpA6SDPa22nvQnJZpSF",
  "key16": "43ficw5vcV1KkMeRcFLANQZczPBWpaZEQxaSR8sCYZ4bVF3hWjm85nZunjNyX6DbHRgwqbWA56hmKpg1z2j3S715",
  "key17": "3Hvg4fGMdSjMvnDHkxke5rHmM7nFpPxZCFM7JYWqkRXv9YFWruQ6F4UPemHr7nmG4GKemtmxmQ8ikCEfSnxB2EYA",
  "key18": "59JiFFyJ2WsQTsKWDuAeZRK4ZNHGvN83DqgsHdT8RWsED3jqa3XYYD6DdPspaX41sHgrApHXRqGcvH557WJ6FbKE",
  "key19": "3RFWy897XGGmaizJ4ZaFgLbQSe69enhyPPAbiU43Y4smTrtH6keLpjkeAvSux44hYtr145gJDkCzCBQPzA6yj1vh",
  "key20": "5hC2rjksZKsQHYRSHgpj75Z2fAUwtAmXeFCMqDWrPhtUhf1vYbBirutY2frpL1qZ5oinruTMRMps3ZY5E1dsRKNB",
  "key21": "48SBZAhR4arygBH2U3rozewcnUVgKTNL77c8doyd1QaCUbCxqTqk8DcXXHQGt8vvnf34ZXHg99TjFfAjR6roczvB",
  "key22": "dFvphkhNcyQKiq6tHL3PDn47qLkTo5F2gPdadQQgdDLj3mVscx4PckmxWtYLbZ8iYAW4SvZcpqzwvQmXunD7XQU",
  "key23": "tQk1VXE92Pu1ktQDxuTj2zTLkWL1P9vhuUxJPo9ZpspYo5YbR4XSHfAVVqd77L26SbRv7b6HjRWucp8G4t1XS4U",
  "key24": "3xcnvWVxUT9B4GvrkRFy4RjLX7EaJWAyBYKJhQMU8W8DdxqwUXVwCQPaNvcwZeQJ2NZE6Rf2goWGv5USzR5yStWa",
  "key25": "DZDK6L57gHqZjFNBG345btmqRVwLbe5hdgUZydEz42xiaX6quc48rSh6BkHwHJaqoRRX2LNWrDC4HxeDaWhqFgY",
  "key26": "Py2F6Xr3eSQsZoRXgQGFjPayTxTKseeRrpovRBBPGjNLM2REM1fb5jiHwRAG4ij4zpJrpDGr5HqtvAsvxkwqPv9",
  "key27": "zjX3Y5HtdP3aCEnge1PUhq9Ump55LWJtq8Ntn5Kgwr5tyKcTh2ETyxuxHqdUcnT8squ1MLnv7KDCDJq64N5efBp",
  "key28": "5FERKr7hwA7N8f5s6ZEKevfAMjAM11Ciu8d5Ry5QKViFMq37xfS8SiLpcmyabZBbY9i5tDNgR8vAyyAeSSDoXM7N",
  "key29": "21xZe2RSQ589ukPzU28RQUrXjBmKZkM1TREdf7N6ZGf6hFodWJj5ESHdabVcp5YhbVwxfMyZMgJgmJNsNRu9yAau",
  "key30": "3UaZUjpSqxjBq9qeZfZ9ypiSNA5vKSYXJbBoocx49C73HL3zmCQbqgT7Ft3SERQKik85FR1dzygsfXUL2gDFabHA",
  "key31": "kfap8hx4sruT8knGgRZg1EVtzemt5nrqrMRnvfCiqdcs4S9qwon7P8cB8KfegvoqXPa7XS67i2TpW3RV3zPgxoq",
  "key32": "iuTPQdqjHQcGz5fshQDNyuV9wnJszLFAgCvxXdKRbUXECXb9EiqusChVrCVkx8X1TocMvrXGAQcEGvgDLaV6Juv",
  "key33": "2qDDAuzJxwhocF4mBErD8FZthpNcmGM1DVV3UjF2HCpgx2xYyQyT4dzBQEMe7fXHj7QZSd8DgPzYBQaoR3C9UZPL",
  "key34": "ntpQtFWcDFaWMyTkhphw4yLNf2eBd3nhpJrvGA9Hix5owzYNRaBzfH8PUdEL1mM3z31Xxxt9iBCQ8Wy9n8zxrFF",
  "key35": "2An9hgAXMA7bkwU8ScoLKrd9rrwvrRcDMbgzHF1wi4iZAGpi73x4zjLYMX5FsWPZpDzysE66fhW6ngpb82L7b3Xj",
  "key36": "TaPQFisjo8WSYWDmhcT7nTQ7tQ36RXkEjh63rUZ3cLN6VdsBYUNd5N55TrLWDdkavrFBWQ17fthP7AMQqRSpgks",
  "key37": "3nYZsuFSxRtj9P3Gz3MoiHva7wRdVJRP5Z9HRGQoULExeRM1Fji2ub8WSQeNXBJ1p5yUshbeuAN1cg8hndYqgbcq",
  "key38": "4WRL8zPG8n6AChKBKHTL32H2gWk3zh3PBW51ARdubSHn8yE59cuHW81kCyumL2HJDfBGUtCKVGEPc3B8bDepcFVF",
  "key39": "hKyub5azQ2p5DG7ysBUgywRtMiHyaVkgbdysUb86hzzGDtaJpjiG9TsHAG8gn8FuL5Y7yKSUZZnhN4zAnWG2kmR",
  "key40": "Uy8DJ8A8yGQhQjsivLUCpSo9bGXeYs9CWp9iMW9bFipwrDQgsY43HdGZMDmTkEk63xey4hStoEuE2oAL2dDuP9W",
  "key41": "348aCwLpbgyXmNAVAdXtkcDG8hxhkHjXsBvwHQnyzZVzTkCG6yMWwsDXcWVTawyoBYaofNNBUsfVXj3DiDwQL9Uh",
  "key42": "2yQhUt6YTjhNA423Gpjf5h6oxLpYEWjpMfwLez1WzxAZDqCmi4MWPKghWT41autFzzku5B9TgXPdT1LwayaySk97",
  "key43": "63KTJkcg2EkofMonQPYPDc3udaobrDpqPep8biw3owVscrd87PFQJoPxpNFAN8E17j2V454dTdNbFujLXZRKNvwA",
  "key44": "5UxrVd6jjNJSFgPtvVY1pbW4fYYvjmpXLrZ6NkYhwZBa38rFw95ZWwo6PEkM1VEhjE1RbW3tctG3QhPPySn5Rk8B"
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
