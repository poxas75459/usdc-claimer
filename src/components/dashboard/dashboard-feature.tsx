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
    "42ehdo2bYkRcxvvdLVsvGeiWaLtHXte7oiZuj9rTJYZoYbkiWgPn5Vrtffy2TYaw2Wdd7xzo9VQd61hyn7bJSj3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "onQcsdTMWy1dTDN7VigDdsaupPVPtNRHNRv2pzebxnmcJeEm548grbMVBsknUtyc2iUTcqXFonBqc5ghYKf4WKc",
  "key1": "27W1hLjFtsBaTxGkojZG87YazjnhBuEN4fbsw5hawQdcdntLSpHJeqWQ5EDkofGwbm44oxA1g66ttrhcSEZi5jJR",
  "key2": "3y11utyzLxdWQX4NS5RPG2zLX1LaUGKBpb6Z67hnJe2X3ifkS28M41mtzWuqKcEEzLSj5mg5yXk4vBoAQf2Mwyei",
  "key3": "33Do8UKj8YDWKFBZf7LDTBjXHsPTYb1zfQkujbiX1eXjxPbyK519kyUiaZohexJj6K7vaZYCpVFjwZ2L8L5ANCg7",
  "key4": "5KkF25quLDBKEx1bNC5gkvjGa6HccxuD7fmK9JNnjK5YHZPvqcQe3ea1gRKRLBFntX43Me3hvgJPoEaaCRyAUbhu",
  "key5": "ZEn7CWUFJzPBtMkfuYtAiMPY99wtboPeicmHx1wEomaLEnPPfyjFh6UhGmJb2jJHkgp9e2dhy6JgxvJdX7CBBei",
  "key6": "45uaLMYVW1N2nZnBt4a5X5eaRfmdwkWQYUkHitJgYo8zWhCKjgD4mrMwupdTQdpwAnW9zQ6LvrDzdwAb1ENsTRHW",
  "key7": "2ZENkkLzJFKsfAVJAGNBPn8GTsPXkehQZaE97ZxXaB3HrqWXUyNU52aqMg3roPzQiPknW3biwBhjXzz5hEJENQeV",
  "key8": "31eiuzhiRgQ24zL8WvkvSkTB4onR5gui3ob7Qx2BriRtJD8G2oX6g1k6GE7fTTLNaTQErCr6FUBmNBrfPMUee5PX",
  "key9": "2UBYXcHwx9XNTeCbKMTS1tGCfauFCNovNpWjF6ixrrCnQZRUfmXUHn9CCc642ry89Soih443UztFivBZsz23W3Cx",
  "key10": "WNVQKTJzAEFoaG3c7t3fZofBDMeCs86hJXB4hZjBN71xFv2iT5UD8r3PhTNohms4N8XsQXHwjbXQfGkc4DrRBMd",
  "key11": "43hc3PYgUaQRqJWEVNrBZvgDft2JLeUTEGuHmCYMxHKrW2trR9DaHyzCoM68kuXSURGxmveTuNBKRvbiHGLcwtEQ",
  "key12": "2d5dSxetTd11Wpjng9g6qTBenFKuacqp6S9fj6wt9NDdVgyZxQ4UgQPHzpV3njtywpHWXosdqGAjY3WCycoeXrKj",
  "key13": "1NHiTFm4Cz5oHq8N76bkDHSneUNFSjTfRscvjiVHdNmECGMay1qX3ii9hysuVuxBWb9qoXomW2WWD2V48p6S52V",
  "key14": "svMgrNq2TK1AyFE7pbDRmQqvEAXQsPnK5ENGkTJdMxrmLuJiMZNL1mUFmHZ3bKBMJ1FAVEizhSRC81Ad1Rzg6C8",
  "key15": "2pTg7xyii7GNbnu65EVMv2kNEE5MoXrNVHenaQM5MVe9UrwaERChiPuvggBTUVd75cnfS9HgKRroFh4PoQt7fGPn",
  "key16": "328255cPRs5KRoFhF3eMZmEg3GP62LM8CD71o1wvDyC9nziEpbgyN5QY2UUrcZs2dLgyNsrD339P2vBgXADwfk7x",
  "key17": "2UvdKKjx1MNcKWMikLzM65YPcS7KASdJPYqf294ssaYDEhxp284p4utZiKCYngiKcFA2FFSEx6nTzcR9X4zTa9Me",
  "key18": "2GtYT4B4hT2az88bUq4QZEX2eG2DhkG1WT4t7hGmsJ4kazSqQ3fDiSgDu4Bs2DbhVUbHkhsUT3tXtEQaPVJ5b8DD",
  "key19": "38HkMLFg9oan9tqNpwz39FLLZ2JZJmNNfhkFVPWw1T6xpdpx8iiNL7hVs5AY1owQigtumjWxopiQYCArmnQ1VpTm",
  "key20": "1xoSouFB7xmg75mczPFJVG1L6AUJzhCuJ92rTYEV7SNySjmjQARBDwt6BNFMgiNdaxt8ENXHHXhNqGy9Xm7iEhj",
  "key21": "3cKb4AKmpo4od3pQjfpYDxBZeMMExB1RyEsJxa14dAjAu7d2ZqkyAoixXPmdCpF92cFjDQbX5x3kapCzPhyL6tTe",
  "key22": "3jPctBmCFRYLLZVCTc7tH872tdDEGiSRrfrUncaZEwcY7fHpqrBuUsxstcD4JCjze1RNzyQ8J5pyu6bbjfiMmpny",
  "key23": "52t9vTGeg6TDRJq1j3LwmL8bckF73yrrcdjBdDFZTqMkciTVy68NL94ZE9cxSVo81Fox9QgxpbiUz37QRF2uZYUk",
  "key24": "4tkhgWnGFfLn8V1Rd9V4QaSiT1xGeJQi4dF6zoL4wSfww7ePtpsiR3iHuF6z62jJMGpXwmva9LctUM5x5d1QGDAg",
  "key25": "mg6kNahqMejGAtCsWo3EJj3MhpW8TptApdY7WgJqsyGrmhuCPdhgHTzXyXsx6XLPhDjZDpnCem4vqWvVNMhvVbc",
  "key26": "4C62cARrkc35mVenMzw5zp3gFg46cvFW1hwuUjHjNBAfkZuwGE9KzRKZVsVSKVUh7t9bcSwfa51CQVqaZWnCsjjT",
  "key27": "3KUeptToqfDSqVTbrTe5qQHNgzrofaKHVn21De4kJnQcQY3Buv8d3PtbcpUrdCPhqyaCqUxxsr4vtdSZeoE9UypV",
  "key28": "47mLndxJWSoQ483w1NPQDANcvahC1dLpd18ckq2x4v3MmoFrS4gtkvvMtiTrt4DMzinQdLL6pkm2uZXRkS8ie6Cg",
  "key29": "4Mfk3GKyZNvW89nLMDbcA6o4fhLYs9GapThSmwQSx2DHBvB9Cwk7tqr97zvVoWGAS6JGPUjhb12PbDFY4g9Bk9vs",
  "key30": "51jFdpr726eVuP6FZBui5WXYko8yU6omtQLUq6HgfKfmYHsTseVnXreEDyAePaRsG9ZeuZGuXMLrozYrB2Sv6AG6",
  "key31": "4Rb2jLDxx5XHpVCxLfB4D1EPhfws72forh6Fxwro51VHGTf5gkCTgWXD2zGZpfWmSByiQnMv2jpYAk7VAi9Ks6eE",
  "key32": "5EVzc4Bx8mMdqfrbyH459F8qwM6nqmtDd8tNqYmRJBAjVjJXAK1BFRiBr6gpPZrUWNDsVhGzYzRJLmmMUTdzsCAg",
  "key33": "613GG6G13WCeruCUDcNgTQFKKCuL4BHxCSffux59Akj6TWnGi6NY7X5mSaChifjFMtnckovhDSH9PKNPbEXmsqUC",
  "key34": "3HoPXNkjtxHhy2VnLZC4kBSZoDZrcoXvBn4kNu49qpEnT7EU5U52PVfB9cRKgrLirEWc54a8VHkicwFe2XFCLDxF"
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
