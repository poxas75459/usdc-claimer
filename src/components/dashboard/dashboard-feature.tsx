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
    "4iQYG13zTJiVYGAwmprkiWPawFMdYZsCtX2xYdkRnFLBN61MSQxvrzhds8jYJxWCjBaz5zqkFDPvFTEnuq1MvRv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJnojG8nepPvQx147dYyesb59o46eKtpepGb3SKkLT1N1cLsK2Lt1rhxa8jegmeasxdFhioWyPqYtfvmbpb5VaF",
  "key1": "5TXKn67RnxCjzHtyXZ9RTPkmPhhHinnNFV4vrWY3qSZXYRVV1gHRW2BxsP3xF5NSh9qPPzeFSCJyeh68TUhJBbxm",
  "key2": "2hyNjZiRPDWth8CkbNuGwNa9pqkmw6TUePhFtU9cKpH2LeKwcEPPLLYMagdHwYcCQbbeWfdpsQTUmaDcVLFg18Pt",
  "key3": "4TwmNk6vDfkdK3mPT4Jxp8X8Sw2TzgdMsWiotzDEEPcaYCibWUq8TLB3QASmWZXAxn2vwmPyZzRznC1NmLVE2iH5",
  "key4": "27jAquuw9g7q4P1crmAXTpXansSWh3wW2RNHkvugVzcAV83fUrv8Nw1GRDomeM25Czi2qULvaG7XJtDt9nx17kMr",
  "key5": "3BqzBJfJxE3AquAyeo5KqXNTyWtSFCN5fMMES2xdzND3vnCFXz9EEdrmjkqWRqXNYEeJYR7zdFWE46iyQSTLajeS",
  "key6": "2j25Sw3q2FBq9DqpcGEZESCPrY3DKuQg7DvMRPonwBaRw8sTVqhowafNVeuit6rCU6UrVC4YhNMmtmPdrjHd8uy3",
  "key7": "2np9xRq1FRaNjDBkVS29LJFJ3SRQV97jgpHUdx1w2ZMN27KcfhXtCz68Fv6qD3pEudHhsd47K2Rg6mjZSrzGZgG2",
  "key8": "5ep9ouWeosnNJCcQtTSUZE3py4aMg7zbf69cLxrk9DrXxyT6RgtDSuoayBjFWftXhZ2rhHsuXkcbiDmdgNZofNxa",
  "key9": "dXf9UpwFqHnVshuu3AAiD7kMNh97VSvLXpstt6o88TNEFShqhdQo4YeVjv3Dqntf9taHrTC7oEVTpK8A5TuhQfq",
  "key10": "4Jj2jQQVBi1vaSPJPEaQV2wVi123TmggNTp7rDV9uDfSmGipcmL7xT2NBje6eh4buu9Cyqo96b7gCNiYK88nYy7u",
  "key11": "5W9eawuzt598wksekDLtALESPUzu2xY6FTMZ7gY4y2GQxEeH5gg2w6mGJEXrQzT7qHVs5TTh9hAeZhDWee5V6o8P",
  "key12": "2HAxW7ujaSrYYRRZnw4YTZG7HTKYDo5UTmGjX8TtNBNXVa1unCaUwHBQr1uh5yYitA5zogoxW84ESMoiwLGxSLSo",
  "key13": "i3jH12unCpH5QjtfWXL5eSqfY1V6VTQfWP1v6ccTSuueZTQAWkmPEJurAtabmMEq5w4Bp9CXefsNVrNLCPu2PiY",
  "key14": "48kQL93XcA4yBARRdmmBmPD3sZv4PMpgJwq9eBeMdNHZnMaFRNgo118qjCRonTtJV6GEK9AMWZXkaVGtHERZx391",
  "key15": "5kYCgABnarM4wkW47BaafTQDo6u5dyvg5D3arxhqgCe5bJT9Q92BprkqsYTcDKJYZAsPkmVQUarefHtwvkPf8UjQ",
  "key16": "5bRFJKCu2uHQbouy3nbXTsbyyQXfkEvJQe3AH4JV6YC5HGhe2vZrbvtn4Wz7HuMAxWf4iFuwku6YmiQci273nhNk",
  "key17": "eZiMsj9u8uFLbB55g4uWwSfc4drVp1WLPE7q1XG2qgdCDMKe2FiA2CAWZ3e17hgv5D2aCUYkmYHv3MfqdCabSPY",
  "key18": "22XJ7SCS7BQbf6jh4PjLM1jifNYGWGyu8KEoxxU6JQA5ZPPuZXqAYTZZ2izgs25EimAJPk22LSrvS2jjoLt4N2TH",
  "key19": "2AKoS2J5opw18rzYkDSiAFA1SMpHiGMozm9ByS8n6UqopkdMph5KSfnLQdcB3zLaHudB671U7PwGX89E6VWMeyJ1",
  "key20": "44B8oERj21pBMxjtDZF5GWZeYLTRQoymWvvtrPhA1PUiXYpyBx6KTJgxK5oiQy8dHTwYmE7Y26auhRPFEKgYUk88",
  "key21": "55w4BoezDfbdnApE8D5YWWwErzwURVqHxg6xetUBYMuj3bnUFMFeX3ZjniDonTpXttYgVqqfkyCMgpmjPG5drYLi",
  "key22": "5QRQHHxGgMSeq9JyYLRXGwKBnK2hTRAsFVpywuNsAtYLzoP5cuDwQGriysyyQjPdhhBu34agUUiUjnmH6ftu8mBt",
  "key23": "3Modx2CjWAzUnEz5LP3M8SzHV4iVcoQmD9MCiZoohcaXWDeAzJHEZuuupu73idxS1zx7FponMWmCRcMrvxzdb25k",
  "key24": "5jThLwfAW6UQxggneRmkavdp9Za2w8vzpyd2fLTQisUqLtZtXG5EP5skgurMwAKgcPrvEEPVjQWPf6snP282FhWA",
  "key25": "2qQZNog3o5cUPX7AUb4jGjkvnVJRbqb659dzP9AsUv4CYbqp6QmbiPBbqF69UmgADkVY3irtVSNXooHV96mdzxx7",
  "key26": "5J8CfsvRi9nvQcZR7qkWBbKr9TL42QgYc848MTqZ81oVAz9wPmR6pq3M8EqwvHQmABEZea9oYNiVxbMJ84iECAj1",
  "key27": "2Gx1tiJELzDcv5WQjC7QDegJAZR4rUeV5o3tu3PUPSoHf3s6oR7vJx7XeGHwwFnEbvQRMJnFE2pTgPtMEMkjqXc4",
  "key28": "5iMUsP4FLiD2brtVJeG63ffDX9NtgVjZCQb1q4ic3vZMkJEvLQyinmNN9CbyVvrX8xwBzstYkaTNus4KoSXN8W9s",
  "key29": "qmRaTgoEgWye24qcfZxYogdhR9g9GA3cgFCAsCMuCmudLLMxscztfecGbYcJtTte1cSaDKxqma7JyjcEAmobqrf",
  "key30": "3U4XCNHzzZs3gwHCNFbk85mSKJbwuG2UHLs2qZooXL2bbb1Ap2672JKFuyid27PWVb8otRMma9D5mbr1cTPqEJB1",
  "key31": "3UxLSpc2quivYK9oPFSsLtiPJYqmJFjfv3rPNc4H3WsBGLoPQr2Dp6foTfpQSJXWyGMuus5fnbFaLrchpusDKzqt",
  "key32": "2Zy4jXC1o3TdfJyMgdYhQAnWryEWKiLfaXzhm4WYbmCVnanwEo3DqTWrY17fEWTRUuViY8zXrjYBtWru3aF55nYM",
  "key33": "5NiVF2nh8E164GyG4K1Ta8W6N5rvwic1vQbmHD3de4SG6y2mNogFqnykQaY6kGvh1dDifPPy8FxLGVF4w2QjWYTA",
  "key34": "4gbaPPCwvbENAB7iYhWC75m1XXsAkaF1j2YEP79USzK3buMRrsebrtxvtiZneKSsCsnbEGYxYM7ZTX5WhMfNk1su",
  "key35": "2tm8obtisXxoGXuhJtD67pQWpDWSBm2gNhmYnpgRyB3FrJE9Lt9rRpxeG1SQUsSN9pxXmSUjNaVbzF8MDwE3pzdD",
  "key36": "2wLGioq3d6rjvG8F6YUrWNPjud81s5u1g5bzb7zADn7rb3Z8N4ba7CnzkB1mUi3e613eZbcBAwHjqWeB1mpn1UsJ",
  "key37": "2Er8aQkY3erW2EiiwPY5P7CfFgAMCsUSY7tQpwBRsKybXdVSU3Kx44RVMGCKmmGuY2ZYQHKf2jxqDJ3tUYCurNHc",
  "key38": "59bvfX2okPt24MPiAsR1RQ9uwuwWo1vQYZhFgKeD584AHaNAZF67aYcEuTCkSoPp5rRTRrLDrwT3cf6gVPD1sQi4"
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
