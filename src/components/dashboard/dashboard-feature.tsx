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
    "j5M7RAqGcwbUrQrpxoUq1cCdr52bWvhg4CGnT77WQGP4ckKSEC2MFPspobhoJCKjijSMd66ysZXmMSSjgr1RdFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TENq3JmLZCtWzK4WvBQsZjbktS5tpyUGsexeBZwNjebhyD7PD3VDHqeuKPDqcSEEEX1iJaaqMnM3rdjJpeXXroY",
  "key1": "4AMCUFh5jjKkvFda7o7iMfsxh9LrsqJMmaFd2ubhgtUKtLitbagYmZhQdVE1bPusCCcWojQsYWD18S1tnmC6FGqE",
  "key2": "cV3W4vSYWENZbPtCvYiFPLk5aEtcJyed2MBEBjBxFhqPbzLw2nH97ZNxexVtSoWAzd3fi81x1SUDivixda4CnAf",
  "key3": "4Se4fcJz67rzTizTY32JPFCPGaVPUmEJFMQe5hKJB5MNVX5KxD3M4cCmZDPZVCfBwwb1pbm2KpM3V3Z1e7rCYFAG",
  "key4": "32dE2qE8aAvFsS2H1MgWJgWSgwCft4iUfDvo2eK2q4HUvY8hvCAauM6zeeMo1W6tZzRe3NfjbmzXkP5MFuRTR5Gy",
  "key5": "4z73smKbWmJeK7QrnGqYkgf7uqdU82p5suzLMhodHQS48nvpeuktTcjJZDDzSZiFQthNXrHjHFg24x6FTLz4ZWHK",
  "key6": "3XWLfJCy28DUbW1BK6UuCiWyaH1kNJApea38mJWbyqk7e6NF2CQkLo2xQWG1jD19oTfT4pFeJGhrBDCxpiH5cKKJ",
  "key7": "5fFitrgDtzzvoUzpZKZWs23C6iAqnpoAMkgHMdxyJbLoJgPPHYUW8H1Qi8NaUXEMcKcRC2PzEhpbS7KXHxD5ykYA",
  "key8": "4ovPGCevGM5juD8Uj4KuKn6Dyk4ym26SaHJqdvK4n31Q8qTBPdm5y16shiLE2AEu8YaH3nSycJCZ4jq1CEVhjHAo",
  "key9": "5p4zyiqUGHDGMFfJS4SBpdEJmsM3oZa3a7TznvREmfwaVWUiWMcQ539si6mmapHbw9riWWaTNNcma1k76ioh8iQS",
  "key10": "2Cn9Vv18Y9YZQjWScW2pA58DkBo8cZ2huo1DMwCym2WEMjN416ASVMGNADEeEnRogvuv97TerBQzVi5pbVvhjqxe",
  "key11": "2mZB1uTqgkAfn2C6PiGPrgH4aJjn1rpoK1arNxjcx2h997dE3mQPwNdMURDRUbeUq865ME3iiTkf4DVQebXcW9F",
  "key12": "2BRFoGRncDhBw2oG3LrR8Yd993PAYGtpzttrYRd3JJoYvdJTCtYxZHmKRNAPTmzrqHHGL4g49VRHJkGPKfpNwqXb",
  "key13": "3PZa2bLfTSEg68KGYr3ym3xV4xYqP1ffkhE7sQerQLanFnfeLer9h8MrNecyV8Ls4PrUCrAxg4WuQURKjoFVorAU",
  "key14": "3v3oYdBiJPm5mMYZgsn8bF88kjEGhQnhnQV8F5qqbrFeMozNLe5vCucafcSTJ6pXYYHHtPj9ZBTmtbrH7aNQA3Tk",
  "key15": "EPz8c7tc1351LtqxRcgStPtB6UsN1MdeTWQ5fBziR9osGW9wj6XeBJd42WUah7rdP4uBARu1sij1tC4g6TJkNAq",
  "key16": "4Q5GywXXDJcNMPms8y3kx4Qn4gecU6teaHP7GjSoBm5PiuzcRUSXX8gpc9T7Afvb1EfpD59UQNqaBTZ3dMiUXHk6",
  "key17": "3PySZxtKKinnWE4zeYmhncN4boHCxM3h3w1zUjgv7PU3DckD9bvXq6KVpq2xso5EDEt5rLXoL13GPYrEjvUCq6rG",
  "key18": "4NB6gPVx6ZVc4oDwhvW2dPVmR9Ap25QNN23C5e6gm71xAH7WqWKf6ECd2jPrBC4Prd3wWiPZYQhrrseomYmSPb2w",
  "key19": "27wN1nchBjsu1CnxB6rzVoJScUjpbkSARSjVs3t1fC9gfTVWQAPvYHHcad9kLn1g8G151tDZgDMFMAFUM3xkNjab",
  "key20": "4uPtVGTyC9LmZstbnknmWwLmYMpKSXMiJ5nSBSp8q41YCpLviTFDyMezLPUKwhHHxJW8s9U5EgvWeEBy2myrvGiP",
  "key21": "7qdq21at4nAYPFCaSUMCvpYiYVKosWPy1uhEB2SPrUCLSKJwUP7ZDucXV2a1gD5rzmUZqHb2zxeXetETkUUuLHT",
  "key22": "2bjiZxvhbRc5sVkBDp1sMTygmVuZQK8QVb7D11LZFtCUYnGQMNX1b3kzb3dKmoQAvwBR68pKiuSfNjQKe7786PvR",
  "key23": "4wtXYUeXdzT6QNKq4Pd1zkmHC22wrqyEcjz6o7bRouCK1m3GDeXzTiZMiLEzUnMpcWA8WsTyYYm63fQ4iPQubYpq",
  "key24": "6533LohHajiowCzGzgPCm1wF1sKBFa4krvGkH7AivXJFm1UK5sAkbMqf45hGSjfwUwS8kYCWAGYw3vmFJpGGFXxL",
  "key25": "3bCBZH2gJVwFCPoZd3oZELhHfv5qBp81kWtJe6HQAyaxZuQQq2yya5ioM59qMCqR34E7CSE3on1VBARuXtTmvkfm",
  "key26": "2b6rUkeZsGmyps2oF193aSFFArfV7nquDyCTCJbgbpxPcwh92JkX1iUgSUULGCKpGsmK6CFPbDyJuYdLiz8zmY51",
  "key27": "5p8q7NGXfJ2j7YnvbMYDwa1MAyd3V3Ws3UdQrQ8UHc6Sk5QbBy6RPY5itJCiNTWCSvjLstb39Eg45Br4PEiyKJcc",
  "key28": "3U11Av2hqkHc62TLukCp5PdL3VAtCxq2FmLxc4SCBtAWqj5QYQe8182di3y8vxbbgogYQPdgGsGzXqfjxAYjdqgd",
  "key29": "5Gv8jasMx3HU12fixMPifqSzhevXwSLzqXK5bLUw6iSnSKcMEZGPJuNfN4JeFiLcf71TFmVsxehBFvH252iU4baN",
  "key30": "GjsMaLTmPWzVaqQVJu77m7i3qbpSBrdfKGkke8ZkBtoGHEJ3NwUvatT2mg5nkD1fQLZPEnuRfh219G1NPB7jYf5",
  "key31": "5EQUmkM6TJLRBtmDXPokBDBz5f22jzyeNWAUd1LC1RNPJFN9fJXHPcSpKEkhjnt6EaiaZcyDnyfR1Usx4txgUuZZ",
  "key32": "pxFHbvvSJsGnZYVNkEDS3xEVPSKeyZHpBtikPCPauAeXDDuS1V8h7Kvhei6zCfPsa8kyrrpmp6FrA8MFwZzoPWC"
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
