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
    "4E6NU9g3vhnAJqsZssXhQuNHqQ2YJWLjpkGJvcVjpnuJYwBVrSGeaaS6aEoJrSf7iyfN3pvHtniBCAR9Ho38TyVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ruRwfAyQXRAVswGztvKbWHJWrQJcB8ZD2D2nBA3PxHCE5qafGL33Td3RYDKgeFbW4KH2bDgcVUit4ywXJ4UedWn",
  "key1": "3cgWPMuzcKUZKFYobJSiYn9A2YrTXZY5Z3sL1yrG6drUfepNTPMkidL54ekDv9Q8ZU3nJiYpMNMgubmkShA8cJQZ",
  "key2": "3QGs7ABc9WS7rv8AD1k1TS9ksp9Qba1hXzKX36Np8wX85LbBL7QQp6pcMY2sUidSDmWL5EMJC7LUdYixLbahAd1r",
  "key3": "5hRTy5sZUoPW36bAYRtnchfH4M5p4EC8yDK7xVVCykDudnS4bt2iURLozWh1zNrS1ZthbU9jQ42f9mA3sxMqassW",
  "key4": "3eTRVMzTdB8yv3pjQPEjpb8X6gkRxofQcxhUgkuZdHX7uDfY9pShgniiqPNLwBHz4DsSjM3jsSgTAQC2k6Pe63ec",
  "key5": "MJa1qxypkaaWPUcoDP9pv9kSC7iH6VLAw1JJ3t6rxfWchngjpMP5rX41CWpfSxVuMRvJdu5mwQgjqV612BTotkx",
  "key6": "4kL4QPJ8kAxsQvFkpadosNn3sZEj7JuLFdCBFQkZxDrCgFUeRMq2NUhccaUBwcWJmSGR3HKRF2aUGaew4v5KzJjH",
  "key7": "5y3LpskHuFhqCUVjZwR4QpvJcCiqHAC3jdULu1eA2YcothhxM9jbhe9p6GKreuLEsZLWcuqqV85tdrJuwKGF9q3C",
  "key8": "2M8jYm6nqKGs8LT5kCrdmsGbVzR2UFDaBvxqNscsr3u5bCi5Pk7EwWVWXGDxqfDmXHdwk2q5ijGYk7ugEhHJbu3i",
  "key9": "2zkhbrXbWVZXRVRmC6yCFirQFiohiTzNcsEgLQxgLdn8iMysjjfLphjmH8vs2VbFE6pBU5hfNP3zLXNciQzmzPtg",
  "key10": "FhBeFtFDNVMq3Uq58HUoexPwK3nY71wiAkDecDWWbJq844HLzmN15mQ8EwbDDNgHwB9qs7RhmB3XDm39wQz1Sdk",
  "key11": "3EzJ8wKAKpEDS762sykyGwz5iteaGh3YStYhArrcsY9LFnq6N9wqCFr6vxbSLSKmgx7CQ6jwdf5jKRnpK8ixEjyJ",
  "key12": "2txHNPZiw4kUxPBkXad7qVUAVttSUyryTJaK3MmX7hf25Sc1RdBwZCArZoPNSNyW34L4ShNzJ2aKQHE52kWZGrAQ",
  "key13": "435uxMYThPrrDG2AKJJkVWuqB2Dn88mi9tuh8A17fpxnt9Wn88kjWytjSZp2miFw28gHq8DQbmgCrzrhxC8PSWNe",
  "key14": "5cAnmzoxRwZZbYBizexk4jJBxWZq577ZK1NcUnffDMSPcCDibexEDUfwuXRnavNEspH2pkcsdSJB1vHR3DFBczA4",
  "key15": "2jAkuRjijEcmNjCorr6FfyMUrhPwGzNy7qrWMARYwhjBXWYt3Yke5eEGjMEkMRCqrxcHRbzrkwyKaH5jrcvdcoq2",
  "key16": "amVMtUtyGSkaymPaQtr3ZbdDfg9dLnyKZk3rhaTaQ8ugVi9TZ921baAftLSBeRbfMW2h6QBFtbwrYUFmJaSFci3",
  "key17": "3REAPfKkSdVG8aqMkWWdvtiZtAqaMPWSqDMyT9X2w6sydbTy3jL9WPwRayzkamFnmGvLyH2dCadYh1fDXsTSJinD",
  "key18": "5v4tz8Uu9MUzFL7ndFv6oQ2h4rwDy7QnvEnZeeMbVmr3S4oJ65y1GXtxEwB2dTHNQ6h813fLhAFvfNV45uZNa6N6",
  "key19": "21mXD8T1HKaHgveE4cS83qnJieGEtoHF9ZYhwhrE7Fxr2cxZjBwTyAoenroUe1fVCX6VagN47KTyY1MDaNVGMYTp",
  "key20": "3YBymufWkcwpcJXdSSQeGws9Nytqc1iByWMocBctePMuNcQx3gx5xuQe3Wf2adSAsDNok8p3Xn1xAbcrRdgEmEVs",
  "key21": "3TomEp75GgAVXxkLWrGfHMDhpbepYCoA9PC4PYEtqwZw9T9QL6BezYkeYipPnx5aFjQZ3mvphJaSnsStjA7CL3zP",
  "key22": "5v5pvLqYVP8gb7ShANDFXqoDuMDKSrDBTgTwDahHiaZuA6mpNqNpuNQTFrVh9JTZ76tJTRzSipgV35ZNhvTF8U9r",
  "key23": "2PaLuaweu1T8DztYRr2J59F43E99uKf1HMpYP4eKbEcriiDUGKrd1UYDVXR5s5im9MCZ2mVdXfcomyeaZnG6bN2F",
  "key24": "TLj78CTURquFQ6PN9m8fWGCvjSFeMTXSfozJDU1fsiKGjM6fzorqJ1MbWM1Nr3z38fKLypbRNXbyf4RwAvj8wGH",
  "key25": "5323UmX7VfS9pQBS8uHqdAKv3ojtCjCSgXgWF4MTYzLdoPhY3b84zWeF1iBbNtWTipN5sn1AqkiuPSJuvEmpLsKK",
  "key26": "ff87PbBztPvarQa18YA7JY5qEEeXFWxxi5rWBJ8LF5P1DmZznx6GpGXpuwGtf8JALp4hhGAuFYafH9jFd77wZGv",
  "key27": "65dckFVCfn83e8QEr4cbkw5YEbNgtKvRdApY2Y9VTk29CW7S2jJozXXXBkkXb23uXmYDB9xQjHS7sWVdn3uExSbY",
  "key28": "5XePuPsAPqg9pbsb2hUZFDKWPxnnZLWUm2NNvQcaWNhzDjNG3q6n1FRhHwWthQDtK6pf8yn8BFzkBEEaxy8tmT1Q",
  "key29": "27XoYqHxMkfimFBXzu6ELn3BPsZGpfksbQSFeBTxSXi9KLXzSTNwkdL5P7tKpD4JcTRS5XQp2gyyUNS74Yf9aPwh",
  "key30": "3FRV3dfYu3e3Ep4eddBe3wBMazfyUNx5gk6XWrh4u1iJNaTVWGFB8adWkaaY1n8RH1J4EznB8cq85Mm9tdkp6k7e",
  "key31": "4ngGNcwqzSxDhuuazNxMnssjwH8wGRuUbTExbzGQ2RHXi7RAh7zsECPBgqnt4smZYtS4F5iQ4RCijUeUUrMDvPPu",
  "key32": "3jGLfYLS2Un1QE9XAvuova6DDNonjPt9f5sC4o6VN6opcAMyEHtScPJYMfV3e2f7ZkxPYs9uDZoRA3NQR6BPBbLX",
  "key33": "4oNQiFW3utakNgcWnpGE5MNchFgw9awUYBHpSk53cd3EfDnRs5T12qERz6Km6o5WZYdx3sG7YJiqWxKkdr9GJkH2",
  "key34": "25pvYHJuzdbTnTizgtrFUKsd4U2DgZ6hggHaNak4ATZajvZ98UVXByfZ4XqiNXfrDga75xX5aR223ge9XzMzj7ZC",
  "key35": "4k1JUJGv5QAEci3fU9E6KMgE5Q68pwT3sdKLFYbSQUyLZ4DcE7wYnQKeazecUMuBdxvkzYbs1Gwx4oT1gFi25FEo",
  "key36": "3zD3bZVyNdKGFU6xkCHCVxYzNuv7PT9JkQEcY8SSrVnkJBxr2dybJgtHmP4FLYUqMWkYoahGhgi3tGQdzvsuj8Qq",
  "key37": "4HuK2C6NS1z7ZMVroSqz13oRHngKrL8cSA5TsSg3oC6xHFiDsnwP3UEi5pgkKU44sBm5fWMatJzHpCJ8byzyfTmW",
  "key38": "4SW2WPfvGBrW8R1c5nZGFwjSY41p3gcQ8hwf9Ld3Gp1bp3rqcvZ4Y8XmeSu7JKtRiVzrm3CwknctFysC9EBxaJGT"
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
