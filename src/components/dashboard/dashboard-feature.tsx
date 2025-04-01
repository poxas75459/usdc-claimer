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
    "49u4Nxy83vGNdbFSe6aaMjbKG3bb8HkVZ5fLz4HsvwKuXv3YqgWJSfYKPBWXkcKPh3NV3mVaNAcX4wkGjkxJxoFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DAG2DTxX6zFUvBdhgaxAJZoLSDZKV8DGNj8eB9xSbYi8fHHYkpRrUsbiFLV32R44KTkxDozbNYiTvWad2xmMU8d",
  "key1": "2fWAtHCtnNkFNtb6bvf7QSRZtgjocZHtnXDQwjJH5PKCS4BYNo66ps8hJNegi3AcJYgpvPN4g5EtRMy3WKcBiLdE",
  "key2": "3FnjzPjAitsTrz3yzAADz7PD6AbfRc6au87SLVSbm1hZg2tFuSJunWrqazT32YhupHCAhdTw52AGwx6efdxgfX63",
  "key3": "2RhrYZWNWM1Xy1EXWRNjf6e61d8EHNE2tQz2e8vvzw9XDj56kAibjZSrjsUYtmHQfz59S4vWTigAS5tpVcto4Py9",
  "key4": "2vjXrLAheUB22ip3KmUHBVm6T9pLVLC5hjhi18GwvFoCEVWX6cwQKxTGApgd9dn6FPswZo8DEwBcrB4TAcg8t6Rk",
  "key5": "EAsVAUAeT3eSsR49fL1EqZV8RNs65it2oW5fCwowDKaZABkcgHVf8HQeq16RZNZNmAswtJ4t3wPu8r5a2a1ZQWx",
  "key6": "2iHi5VEUvFLnRPYGUpQU6dFtCaqNDc3WAZUDke1VPrnakpVfAimT8bbsHaPU5uP925TDPiSvnXfGQ1imeRcTcRnQ",
  "key7": "4SmGnurVyZu72n1ktUgC2rQXVdYGj9T82c42XPmxCnGwWrcHYVrtPDHcYZgDejje6bqJwJNttpi6prZM5a9nAQgm",
  "key8": "rYsCh8ByoGjWC6is6d5c6QjmHUFqFtWF3m3PZFRj2z95kTGkSZcLPXYbPanXKjc2VDdFZgG7pfJgtZBH2iHtEJn",
  "key9": "3XSg92FkgKLZyGNeQPY7nfswkTxvMKESzrLEVMC6TPbHjPyV9uYQpNqpu3P1iD4uzBGjqE3q8sNZbcbtsrS6Fv8F",
  "key10": "66EVFc2y2yMAmiysp3PCtXNpF4Ls7zKuSYd5wMXQMbxsSftpqiVdh9Av9pHyXDaUpq3AN7MDT5TGRznUpPbcSXHv",
  "key11": "4dXqKdtGSbxbqrtLrZZCxwR2FuJLFnHGCoK9qk85ThQHrPGb9vE96XcUh1cbavKi8quyQJ1ukMrtDKLHa5ukogzK",
  "key12": "5F5HNyAJi9S3JVejj27tyXpjwMGzbUMdVwgViWMCFzQ7Qj2UzuGN24CgFji4ePPiAoy14KCWiHtBngCQ8EwvuKST",
  "key13": "2pQTGAcpt4baw5dHabQHQyosVpjGLns3LoegCiP3XYUfBA3CmuPE81i29UBf4AacE6KFQKqAUhLNUdtqLryPJhQj",
  "key14": "3m2XeTJYzLkGUGMH9jXGC1PaESCmHZqox9t8DX8NFDMpQaUSoBEKhzKAJ33WjJtDTxBu9rbuNb1VDBijt25NSQP6",
  "key15": "2wZiaFay7pmSxjPU9k1n4gXHGGYi8ieo5UrPf1BDsxaZDpoD9nBqDjkbdZjbYaibF5RrFQf9kvabMYCKBAzHRXTB",
  "key16": "3XGL6yLTgrXgUaCrAMzh58Vh3RzGyivJsrvCfhCdgtS56ZtUXuLbHMZmePiwF16QiXW8AiMu6E33PJHc3HMs4qzg",
  "key17": "e2SauD2G1MkrJDvoqQ3uMpEaMMFVv5nvH2PSbe9EYaLm56t46dQfmjKThW6yyWT8xL1G32PDNMLG4RHkeMc8vkG",
  "key18": "3KvZtrg9YZtaBuRAsJbKqJFPo4uqgKJqDmWprWhpUaSGgNWSWQBMkuaAFGt3TsfGwuWySKoJkY2j7VF88hMVExXk",
  "key19": "5YRTmjUZANLFY8qn8T6SW6uTfpN188L8yZVF7R5fS5oBBhzR4qkcBS28Csmjvq1yAq5pBPFKLEUtkBVcHgQL7aqt",
  "key20": "5Vz1QDwvkwnsorDnMm6BAzR9ANd2MQc8HgFMPemWcWYz2Be7T4mMMA4WT4fGPW51EJugoWJrhKWxg7k82DgoEg5p",
  "key21": "2FS59J2xU1UwCH2Bf5hF8w924uz3YxjgWE97ciGPcP58KWsXBJZujB5KWxBKnLk2tTP8sHjcbd1VVciUNzK5nxH3",
  "key22": "37kj6ykGaxBDS997nym8JQ6wcW9bXiDNzb1tLPW56tR7PLxUVQqWDqagmLrzocnJNFjqfGFeWvcH6MbFohW3A2iZ",
  "key23": "2Nu3E5JK5oZEkFXNsPL5ZLWkiiDSb87UEScS7z35RyHVKTxQwuesaq2Cgrc4qu2bwvDXs6pBjqAdHm7Zrc1FVtrL",
  "key24": "3hVpVBLt5paALDmcZhiQTZLc72mMEWHVAGiJBbN5mBtZBz1tgi7EooHryjZ7ieqCcU7b6aSQEfm4VrM6j3A73dch",
  "key25": "4MchinULTTaXgZWCf3A3wBBcVXLYePQPCKRqy5TqxwuS2vCfrS8cUaFzGJf5yL3EEm6k15CHqsDqHUSLVkNVmtCs",
  "key26": "3vespqGm1fAQmn9FkMn184db8rNmtY3crPsr71jaMuWDb2vww7Y4JkLoxVSY1pa2xcCKrUN3Et7JYVMbvf5M73D2",
  "key27": "Lqg26LArwXYmK7sH6mEtyBE3FUeCpfo6Knxu3oVtFUjqs8Wqy73bgsttobqHLqUu8QT4naT7G7pnxPqarm3EXSZ",
  "key28": "1mAGbx1DE851je6ifzKnG8cPK8y2rPMwPaMm1JP4CMXarUizWbQXM6bV5bGPWFxf67gidvQkKB4x64wRAYacyfD",
  "key29": "5H6giizh7gjeJasBK6cahucnaHFPW8AgTr94nMNE5h69dKvZrZToZs7zWuen7LvgRWMTDuVm6n2m3K9BtJrBorT2",
  "key30": "4eAayhxhEYFexKy9cbMjBnLx9fya7WqTudfr2zbu4y18bQzBwZV2awCSaNZ2bsPbsnWfs5bcWJT4Wige7PdRvGTD",
  "key31": "azPgk66bHqXBCHEAhVmeGwiH68Wwc2FcBM9RV3SSTq1KAUfBKPpEACRXT4JFZWPeqnKgqnBcnQuC5MjFuGDTWUK",
  "key32": "5R8zh7Wf1ZoXBhbtu1siTPbXXaXzNGNaPL2oXVMbyzsqhbnKXDLnC2gPiG5MA6qo1ZoWCjhNTqTrhS5XnpLzZyMP",
  "key33": "4cqFfa9nCqTeUgtCuspFZFXd3mnBEYngBJxMGbM84qaJUumJjvnaSbFFPaxeFWMhXzuEFMM5MAyhpnMXG8175iKr",
  "key34": "2XtbGT7GppgidhrXzJ7QFuGZKTuvNpy7RVbZjhPwgd1UWCcUVPhEUoRNFsJchZrRkcq6KPCNtsjau2KXzYJZZXAc",
  "key35": "4jMH1gsQ3A7bd2JKRVMhj9gyCaSJvL6W1EAD7GakobfwCyVPbWEEqoy7AzaR92v6Hx3G1AYFYyRBzgRzaEE1hT3n",
  "key36": "5W6qoVbNFTjnhnZss9U7HnSopGyPPe4acfQSb5SewSTphr5UGft1uYwV3MW154vWxfho1CtsBaiSGzS2Xt4uQTXt",
  "key37": "jGdaFzH23fv5qLzjwSi4ekc6MU9cWqfCZQ6HEfYc46xJB6cYLc8nDpJFsj9X7Km5a436QM4RezmA9ESruDnF7Zm",
  "key38": "V9j2vdiJTLQch6oMdSe3DmVFFLL2YFsSoPZu57TBdrosCpT6nQACpUJfGhUfiwWAnaw8GMb1Q7evmTzfQDgjYqW",
  "key39": "2jGBZXta9DXhhZFz8LDoxM4AF2i7Pv5FfFhEtwXCaEQ8oAZayRbjatEhvtGriHMuSJLLhtNZNjf1WSRFbQr6epjY",
  "key40": "3skL36b17WzPFzAJeSsxMF2eYr6QeoTFr39JCBBFHVr6RuwwqLWB1CVWTYicC9GU4nCwLUFdsQp9Wixy5agb4ihj",
  "key41": "39FHmnH3B1WRhuhWjQBqvK94EpAzsnfXTy7sKBLQ59tu3xbMKgupZPAL7hXCXkcqQG9v4ns47pnJc7ePykhs5qcu",
  "key42": "3YmPWQhdjfjewhFvg9XxDTZ1Fc1g53vXka3VN7QNtw9Yz867h1VWfoesBUrNKLXtKrbW7tdPsKF2WS6cKRbU4rGa"
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
