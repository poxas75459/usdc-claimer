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
    "5CKSghoZwXYkc4bmtLjiuirmcArios2WKvz27Q2LKFtZAkCz4nWFgyUUvkMWb4ZQmeLUhWCxMC3YZKTRVAWjQt5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ti9EQp2HRn9HWuYqJyJqK1Hp8sUmWDdiKi7wNYGURnTgN3w4bQYshA1sRs9JjetYZFxNM1tJfB1MaN6kxQwhJNu",
  "key1": "2J6raE7xigzFb3xXCV7wXAtZUUHcG6LhhEYzGyiymJ9xH9hobNFzQ4Hfv2JR8UMYjW79iJG7XC5SJxaNFUQPz4wC",
  "key2": "LM8CBfUwZo1KHD11TmBPvGHVzqWoYVwph6DXzKuemcNXtgJnbhsPFsqbRLpBrurpFgy8kywCaTz6dCrfZbhL8uS",
  "key3": "4v5dorCWLcx6MrZFfa3yMS3qrsCFB4Muu4vFJ2FEH9NPoujmwnYoVHtPdsRSt89sJHgLPfXyoKbasRHBu7ExB3Sf",
  "key4": "3yTETC4rz1vqjJ4HLYYVCYhpqPQ1EDxBKB3pE8h37im4RW73esj6ngJ3r19DEmSjc1MNai9KRuJwiGAf8pvtWzW9",
  "key5": "5E3s5pZFhZQKHW7QwCTC2AjpCd5yTaTEqWmwSXVr6jEVkfa2AgRQD6k3SecFiLqGsTSdAPF4zyQMY6nKztkpf6q4",
  "key6": "3GzKtgF85eihxTuKTm69Wa8XEA1gBvTMbJQgrbhpcMH9Ud95dRTGd2TB17sTVuSS4eVy2DvyRFNwzvYf9sZCFSQJ",
  "key7": "2tNpuxaHWmPYuoXWmqSC3hXCHhgwk4f5mTCsPvsSJZgF9UyptoutP17XxkZEJUxzKduafmzpF1jwHTkkTHNLBLsA",
  "key8": "3qNyPQghfCsiU3Ru5yVDpn9DbuaSNsZWMwywPvhsyov1ZGUJCG5ydez1b5m2pmnHedBGfxJRW95ivDAVeJtMG65L",
  "key9": "4wwKersqUHbRfzNk5bFtJG8sb5hfwNymNt2gEyhnHiEjB6djvjxyTCsyXamiUwAvtMxdeqqWtQT5JaTaNxNhdHTu",
  "key10": "3xPEcCv9p2aMN4haok5LQMUv3a196VSSan6vFBiQTEQVxinF1BnVSU3J6BA9qi3EYxkTREWtKX4CE3cgBBfdmsYF",
  "key11": "5b652oyGpRuks13iVcs3nSjnnN9SaXPvuZeJLt8BSnvifKy9vMBwdY8oPD95wYJjTUvjSBLVV6CQakSdP4oYxqb8",
  "key12": "2ZndCCG1D2ynfR8WZBuFBtDZQoAAMA3DDsygqSYcLdzhxDNupfW2ppVj4NNBmzbZq8jBYMoQXzDCXD4eMNNrPqcP",
  "key13": "3j1kpFzk1g1tpsRY9VBEfy4CL7A3MRP8Ni6eD7eBCCtDS1RRMr9ydvNeKL87xdYwg9uQiXNbKC6FCcxeZ4UsQWY2",
  "key14": "44sYGbuHubVvFrnV44kq5jac3Ss3cH4H7oFyhZu9Xb8yjEXq2yvLVH5o21ngLuy2c1JRma9BZnVgTATAkoFCsmUa",
  "key15": "2J3aFjm4AzWpfqWtZvdB4qx6a44WtnpNjw5XoQnLVJB6FvLabZaEygG5sGgZGPQrhoKRiTR4ajrPu2xyMEphomks",
  "key16": "2Gr42JmuBHepfMoQHQ4uEGZ8jAv5pntChr8s1idiPNgjAzaChyFfD3P39DebvZ7w74vDaya8g3L74MEYKZxRVEGa",
  "key17": "4ZLAjEYfHefeDvgCxhGV5Xrp65y6kvTLciCpPV9ErQaJoBk3Gwmsc5N9KXqtAjCabwTXtpVMfFTGc6ni2fYBNkTD",
  "key18": "2D74MFuTef7pMrHAXVf4c9ECSPF9GgSWzXsDuVRxQRahsAW139PHmTRrQF9hBHd7hcZZYJpEZGs5PKZ5dVQtScX3",
  "key19": "2woD4SYxhGrS2hcJW5cFxpVyoWidKHgCazs4dr8vvxSfDdbTecY2hxxBTH2VVLRaw8ZQWRWR85jHZLXsFYsC3n6b",
  "key20": "abRPn5zMEYAAq5XChZiVcndvmxhYsJGd96uHLMgxscopHHCx9ZuYLXmMTdxyo6ujDWv4s2JvRokVG71izwaD4T9",
  "key21": "5YAsu4VgyCUJJk3qW48gFoXxnVjk4Zj8nMJfg1biWdby5dRbgz6b26DpJ5GLTfaUTKqugTLjJRpx9Kw88r9aAvxn",
  "key22": "fJTBAZRYAA4RiFsKj8jAS6dPeprbNhX2fN7M1QJrz9hgnGc4S2EtqKfy5ktFBf3Zn3DuKsLebSWLkRndzCsiZg1",
  "key23": "2ukFSUGCxfp8VtHAymX3naq2QxaiXaMZHdwUxDyCH1SNRVefH3hF8tUguDJK6Q7cAAcPm7bbxv5p9iP6h2Nz7ZMv",
  "key24": "2bEdav6Ro8DVt2tUab5FdMEHc1aFqB7iadR58zk3qMHbXBtMuKjeMziqWuNPgaHHsMepZkdjsGEWSwA6tP5mjdWx",
  "key25": "4ykrLf2UxD41qYNZ7JRPAKmsZPSUrLnwCW4UxwzSbm5TMW1K15rYMCftP6oKyq9S3ZyacEm4fg5uE7JfT6vYLL6t",
  "key26": "4nyAGbSEARiZ28XHJLCgnmEPJ96Lx27QHi4Kt2r1naKptagvW9Tx1sxLeptgVaLTHWk7E12NXxPjPUeAMMAJE3Wk",
  "key27": "3h5HxS3G62WsKwxYJCWQNewfXzYMARAnrYZhVcWQ3dXZeeCXgEBWrzearoHxaQnBW7xSoPcBbdEBxrdabYd7uWGp",
  "key28": "3RvxJJN3AVJxUekXrcZbsJz6XN1oNKPH7qzu6q2YBQT4HkkymqFCyfWVMJw6u1DuwXmh6XBJ3aWqPnyK7avTmgrJ",
  "key29": "79UpuzM2iFjh2R5KUk653DNQgQrLrSu9zUxR1f5EQQKCNJrvJSJcKJxXLqEwZDc8LBykwLq6Eyg9ULVUWzYzTrd",
  "key30": "5hv2JNScmYptSV9jyLzvoQ41wC7GrziT9qoJh9S39ePrLcjc45y4YLDDcuC5DNdL4mZzAjmGBEbbD8Z6f8gWd8Zg",
  "key31": "3mzqcNUJc1HnDuWHG7v77JtXgMsgxqQnCeTnctgV3PoBjKvB1qC9B1mCGmvtMnSaCCsijKWMKSSRqX12XJGojKgT",
  "key32": "3mnZeZ4tRmBHmftoupVs4Yf2Q6wUzybVE7Z6xvD4FeuMcTZcKst5GXtH391Jjvv71qmv7WwhWKKJbz5DceNGoozY"
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
