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
    "3WdYSYHR91DKS15bK5ksXuKNiH3bk67HqXfDT1TYG3GN2Fes41nTbcgcgVDVW2Q8sCmCCouipkJmJHWheZABEFGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32wxU5MJ8nGJHLqpBYbenXmd2QCW71uwj2wq1mfUkCEWjJ96uWdchtHdaibW7Q4VSYMNE3zMeK18Tx8xiUTBeTP8",
  "key1": "2ME81Xy4nQFF5C3E8jAZ9v4oXnJDiDbFLfcaJzUFB41D7pGZzrWpAeBQPdbSuTo8yxjpDsjd7KSGEyNYv1a6PrrH",
  "key2": "4Gh5HXhKT7TZDva2fJYNeNbFXhKnr846crrL5e2jVbfWxAcFBsmoJrEze6GLbNzZdWwLPWmHjb7K262Zq57HLVfc",
  "key3": "n2yhCc4VNnM1bbfAXdvmxABBgBQ9DqjYpZKjAV9rzqckXSp4qpvquiC3qT4jpSMvVfNe24WuGzCD7mFY8F7NmaT",
  "key4": "2aoTmbrmrVXDy6D6owWVDkwnex3BkgHRsBkyvtF2uZwrh8132vZZG9rMqaVXoFcFgj8suScUpvmdCGGuVajiEib6",
  "key5": "35bALdGa5ZgoDQh6pGtZtgY5zNvYnd39HfPJd1ywZg4gFTLvxjQ27VqpoPpJmdHjAjEBfkJQnfsaCeCFCipGLYhN",
  "key6": "4XrWpBg4wftFpAkhQCPKBRtqFSi49RaKUPYReno7MafLm1uDQyUgvfD6Zf3dRefn9p54dqnpA6nYS5tGAg8sgJoB",
  "key7": "2MCcsf62u53vvP1Kw5tRJCM1DuowtkbUSFowyRs1nTw86sqSYdr4woYfh9gWCQVsqByn29C5rTTYqm5EHSM9AbMe",
  "key8": "hBrC23hMxrUcuKiogY8fommwRCGERJPNxbWrkut4km49nWBArrLsnyEvN7Y82AGbmCDRaxXAUfoxhQGtACeZh5w",
  "key9": "2Z6XFDdtrKnfRiV9nnVoSVhCnXAeyY8N69nkD1AcH3nv1sgQWwXgQXKs4dLNpoBHJsEFg5kRkGwRCCuqxLNWSdzi",
  "key10": "pDKDnS7EUHVddrvuHahUUuA882ifLPQQuPxKF2WBTgvnmobKrMR5GGqcp9Vdoq1sQDo1cbYmmkwyaFF7zDYiFjN",
  "key11": "41RTaw2ngVy98NLLimFx2jmb5RQLXyuy151qqGrmdAU1BZXs1eRxemirovkmztDQC79kH8YrzrrdBYytLqVMw834",
  "key12": "3vZvw8jRs63Hp4ysc3XqffmhKWgxHsMfeHGdKPStm4uLhtPAoE2KU9cbkiaR4QngV6cSXQeDskrKcU4Gs5S7Mzrp",
  "key13": "b9Z4Z9MszhDWxg3ZmDqznANfQgPqyCSZsyRu6d2hqaZxjLASb8XiVA7spa6MxR1wCxN2axMgaPSV4zRJj4ZfJgi",
  "key14": "2p1rYTor8UVhJFpTgoukzkwzPSXcBX4869dB9dKqwDYo2MYzwpPtFg2pwPMyUWbxzG8g3T5QrpzizA9rVGoWi2Ka",
  "key15": "5jxKSboB8G5whm3s1G5obg3G4nP66VhQwJnvUAATUo86ceAbrBB77h68g4W31MMNCNKBwKHQ5fRwikqj6ivCZwSU",
  "key16": "3qNZSWHaLVoQUQ3njNMtAredhFfiMuyvBJffVnfXu5bmJMpc31P5MjLWVBeQmxwHLExCzNtGZuAL5BRe1x1m3iTa",
  "key17": "4jjrTGwvcKhRgPdQ1FJWLwa86LKf1oPrarudxJdHcrfu4sjpDKnUSejpySZ7HHMaur3TgPaSiPpgMKqUPTPP1f4h",
  "key18": "3Qp8nyv5iD4hgGfuttMW6GMPEjSuQqDJWz1wsmS2vy45ES3tDLKrLgDGVAqtJWo6ZLrHP4EHDWvgJxE4uv1g2NSj",
  "key19": "3eUm4ujYYExKuGGL32qMnP4uXvfH4rxBiwPmtHYWoz2YUCSCwv9aebgG7ckZPifXogZgymLf22hqwArSADF68BtU",
  "key20": "CksyBdJny1fT7daJ1CPyBNyFzY5bt93TxxAzx4v7QNagKRA612ojHVkf2KcfLKkaLC8f71GKi4ww7GTnSMCVzRm",
  "key21": "5iwMyNahCC66G811A2Cd415SieKDikb8L9WW7pskNKXSVJkuxzYxcj2E5pNHY4PN8zFpgDsv3VVUxseiLvq4XGh9",
  "key22": "2vTYPQ2ZETQu7CboJd9Q4PY2oaboSbggkvvBQG5oX4ANSKKBdJuvwV9HrHXgbnjXStjLhgyHdmohyFB8pRpoP376",
  "key23": "2j8qtD3L5wxNLLL3V2X9cRtKtdhhFuyRKwHgxmDtArnEDfsvRNb4GM5svMnoUbsiZwxq3jk3i4QmPW9b14ZogaNp",
  "key24": "qgN1UDaT5NCXsLqKn81MUNgbFs4cAyYrmomA9MDPcmPiG7NjW1p83pqNhRjkmnZvRswRbVMJFVGPuWvU6CjGZqK",
  "key25": "3Ps8FFoEx1fbhaR4ZaQ5h9BmaENo7pD2uQPkY6YPX1NmxXtaC4qnVaYDrjmvo48DaM916iXetdy6QeCSxo1GguSf",
  "key26": "8nwemqDDiWGXSFDdSaowcBD39NhdakdTUXsZECUKAU9C2R98Qrh9Am9uf2RBNiTHcnsXukQR28dfzjTG4T12k5r",
  "key27": "4KYCPJsBehS39gPiiKb4y8DPES6i5qGxi37FmCZarFvV1eUCX3Xnvtx1rMdXToigJDrNELzrZk4mxH6QmoorX4BN",
  "key28": "n7c8u1kBcb5NQTvQZSRZWuE4UUPB6tnXRv12RWMzPbRwoaXyMmHqRxiL1pfVRh1DVMAbTWDnaeGVkURKzAokKrj",
  "key29": "2pTYutsvi3EdfvSH9cB9b5kh9Nqs8U5haHJEvQ8HWh2GtMX5tbXuQyGLWgZAYdcd5XLYHVUYspB8CGo5BTF1RYJk",
  "key30": "4N1Y5JbMhJ9JTfo75D3HfpAWEKpM6uex46cZ3YKFUnH844XQWoiYezS3gZLGAZALUKuxKQdr75ECBF8RD7HcBMeN",
  "key31": "2pLPoHVoJKrmp737VKssJHVbW7jefW3bozYoizzHzqTchTdhNQnTWhWh6pTfZWmmA4rqbKXLV1uiVtSCjoy2U1GW",
  "key32": "4uTuNRjgnwwsdWutsZPKzLmT5o3tK7LaCUXTwZ11ZHC7M2sJrdjm289E6JGQ7tgMDihinhcotQmbUXq1mJXQ6ziv",
  "key33": "4asx1BMVaiyLy3h7idXgtohDMmNT2m3XBqBCG1W1z2GxZJC3vfodKk4swXTy9yWJAphcPxnmunCEuR5KQvERf4g2",
  "key34": "2rxMEnbbR3vCRmMgVBLub6UviVMgmJoxoTh6dRzRvEuhAZFYr96npGVZskv1yr89Xvz95ba5SY5j8v5KAHnBrD3E",
  "key35": "3wk4iUvNLhLSir2a6pn3sVMn6g8fLEg9raDGdq9F4ci2DHAxEV8anUWKDeir2ptNETChnu3mxSDV9cqyyXBsHvSD",
  "key36": "4rC2YHFZ5vdbu95hyoRUjKCfoLzqcXoQzTLCr8qQ8e2BjwJi6EZooGkCwbzq23PLW1EmW7iaBwVWKvJx8MyjGqTV"
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
