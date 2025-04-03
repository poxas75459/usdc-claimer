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
    "2bUme8FLtqLuoVr7GNRFixVRcymknHHGXqAgxLvG1RnwgSSFU4deeAo5gDb3fuWqh5EPqzUkJ11xavCAFdyjcA82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcTFJ3UQ9yMu2FobbxvERihLe538LHcfcv6whcXUaV3K2AzSixnjK45DU2wAatLSjrLEntfnxJHpvgMt5UEu4Lt",
  "key1": "27jcimnrMXyhpKkk3grhgwsQYcgQE3tBMC7pZiLhVGbJeZNCLHsvjvXKqv2K4FtvLtRFqbT5yCVcLSNY6AaFVcBE",
  "key2": "2VaMTvvGyytVJH2pXs8Z9i7m9uqaBV2NJH9xxgCSn6aZxfEfCtsz7QrngRCdDZBCjkjyRtqwediKQkuuGRZxiopp",
  "key3": "tYFUz1jwX14bSJLq2EWeoiPFVPVCtKqD7u4KMfuk96rjeR7j3ojdwkZHNHfGFZ4ALeRg1ivZk26Tijd8vagHwf5",
  "key4": "2K8Ui5QPscH9gKGme97v1Xje543Txbyh3d1rafGvmntkuUaTvEnLVoTA1LbRc6fqajTZj52S68WL83VWVa9so14c",
  "key5": "3zMhpzYScYSzxPyDsZX4KKxGfMNoYngb5SDD7CSuvTYL8nhck42KVf6EKbjaHKqFJxRNBcRZtbH9wny4ipzQ6GAo",
  "key6": "3zQb4B9GzYtYgD5apEU2gGfZpeYkjA1zqayDZDsTDk9ogkvCz5UcaNjyT9rCSgjGzKVVT9DcNqwcDjE9zfwiqbg7",
  "key7": "5RNmRY4K4DCkuQP1LSGBXu4uo2XjbXVDg4EWBBnfFF4AANjD2aTBERkfGRsfTXMZKKueo28GqcMvULFrrtnQAxyg",
  "key8": "57sgQLsXGdHQhTcY5gS4yekSvzAYWmqcs4dS2se5UHsKEe2Wtoh9JBaVavWbUe2R3sWbcu3CCWJkByaoMrXvbyPz",
  "key9": "4FLKnNo2XAMxaFnai6Uf2yZWFEDBzcrGdJXYjMSxdkGhpf76qF7xeLypyULSV3Nia8EwVA8vNmCRcMeEWiHqNenf",
  "key10": "VexpGe1VizPSKpGvTLSShweHSjDig5hz3K7KZcUpQ8XQrALb8feokBhBErCCoXgkXBfFoAWGE2bBek2yecTchDz",
  "key11": "4KfWAiJLr3JR3tweqw42ddQZB6QkREWhDwM4wF6b58RG2d5UghMgDcADGR5MCByJmpJxZeQEpHMU9QcVdAUhxdKL",
  "key12": "3WGex3LyCQqu2kydGCaQCGJkNcBTqc3BqZ46QCnX7VLTiWJysSZ43aWmFWwVZArwGPKs7gFjpUeYiotnrZcqkFDF",
  "key13": "3DCY6RxCcJQhdjunYdFqCmLY7TYykMeKLZAja4EVS9Q5i1DaQ7oVMMT4A4CXprFp1gQXHpixq1v8oCCQmmsuGyJx",
  "key14": "ZunkvDYgX9BZDikWjG19aSBbDf2HqDVe2UyMTa9c7d6xwe58dGrEA791egNhw2j4Qi6R9442zQM3DXBYD3rpXkH",
  "key15": "4xvBv6YDCqxGWcmaYAfdvFEEuGEmBw9CvwpPmFkjLzJ7cV7urb1u5PreN8nhsHsaAyVCbYqwF9xXyCJ5q3U5FPXB",
  "key16": "3FsmqhPMDmBJGpibsZd7LHhe7VfFGBGT3HBTchmF3PWGxeJPEFjfojSs1PbZbxK1KUJBmvicR3yXo9WvsxS82tPN",
  "key17": "xe9iaaPeCwnfEefo8R6Pc98FzWYXRsapwgqsK9YDouh9FHpcaSCCL4tEBWfFkvh1Z1ofLqeWwuUzqW6D9JN5iyg",
  "key18": "5UrFexDh2psxfJ2kMKTgQTi5uAfPC7WvNYtx5XEc96fJjfjjKsicLCdCPjxkjhQMtfCJix6MU3gL5BeAUyYejkQ3",
  "key19": "UEM7XuxddT962VSVpAuSLT957kKsr3piGRG8pDpBggZ59M6cVDAotmjaTjkwSJLExTF2rjKFm8VhEn5sZwGuZRN",
  "key20": "37iECV6fCJPPRwK8ddR17jke44uLU2wPjdMbr3GTUyQLJaTi2NwkWfNpnPbhAJGoSqeo491MERAAgUS3DHSy2pFK",
  "key21": "iFNjExhk9yv4K24pW8ebuLkze8WKhdTCgwADqF8s8sYnxKWgD5CDLGxP5aAgvAV5ZfcygDT1wrRMp6sFqj2mbjk",
  "key22": "5ZpY53MBymD9ijmFK3zhoqfhotwbB8SLUw5DasCN78Gxfn4pDta6DEzojbC4jUagW1xmVHupe9nTCyUHCAFCPAaC",
  "key23": "5jTp3c7bFNwYGhWXCT2NM41x1nDc5RDTxTmd7s9VyimxhutMzmmVdQ9WUqfWjaDTs3mjtuedthsXXUaVnrNNgeum",
  "key24": "2SJob5eM3XsjwhTMc3sRvAELmkjWUdKR1etCohdzrtxSCfiiqgZS8pf3pxxH5hD2XY9BzMsePbFgXSH1YELnA1hs",
  "key25": "5oBKMczbd76wiDTq9TVq4QrP26MvmuaQAx8P4gour1QibQevjYK7pTCRMw2RPPa1WDE5cuxPYtf1e45435G4RTRD",
  "key26": "xrfTBqeMCKV1Si1PL8j3KuQksKnR3aNFcW3HxNSW7Hw9KHEYbYHC3AUdLnBZuAGCHQmdkXwARj2Q6fBM3UYKTDs",
  "key27": "5sg2JJQap2czfTie38avbhEqsxEn9Z9Ei1tQWzhSpMGLfT45bwUoFz61vh4WeG4zdswGV1uGStX4C258gabrac7f",
  "key28": "4Lukyse851585KFddvj2qeCqd5g9ywDQYGuRYpvctWtpPdTrFpike5yU7S3fNEJ2ZMm4cdkKqni6tL8XdTabASod",
  "key29": "2J3DnTr9ASmPVjKWjdemUfQgskTEu54nD1YmCvTFn4drGx828kQBhWR1FQTWcDW4PNQppzTUFXZW7MJMpeb1g7DZ",
  "key30": "U7uhpxmMDpomCn6RUMepKvH5svRwGaCLvjn5Kmo4gX4GnQoFdQgxsG1B5MG33MyBdV95jEjMxyhEDfS6iBSk66e",
  "key31": "3hUxULf8Xmbgt4nNaExGgQWDbQmXuf2KDiosuaTkzncseASKhpk4qrz3LfoVjiLjHg1UfyjTnBLCcmWSYsLo8wqA",
  "key32": "2Ka4KhJjgTiHJvn2bH1TYGyHVER1SCpvARFKmjvk7MeTx9aNHSmA2fyem2oV6qHpwk2Z4FduiSXXRgVniQtJRNp8",
  "key33": "4rsBdN8XEuW2GWBXiwkm7RUdZu7XvACVRx9H5BcpSb3RVYq6KGM5VURG2duQBF5QpuDDBGZMnw6JY5v2hJsdmc26",
  "key34": "Tb8uPW4jqbwYJvsrKKgMzCpsFEbcCe3f686roiCiXK9xWqpPnniPmvtzQete3uGWa3xze73Hy1kmKwRtgLpww9z",
  "key35": "3BdqstLGtt9TztBb6myP61GxCjzVJLouc81yRzGAa7728eCTRgCcfXK8d7or5v5NKLRNwQcj3tq6AutzNkUTZpEq",
  "key36": "4eA4NpGKGC3Y3xhKiWuKHwFHqwpUdVRugLipa2591sKtmK8WDjxVqaR2nC36FPTxHmfgKxoGxhzmfvDq3xCH6wxW",
  "key37": "2hvjcCDj6R1b9P55DVwiqrpRV4Qj9EosW18ZPLRqKQ221e58vLUxAEsRHtpr3x7XuYx6SoPjpi4vTroMYhMKC7hL",
  "key38": "2whnH4yaitHVPfAWedQyvkhvnJWEX9WufRXvMLJmuXHHcL73LxRuPshGW12k3FEdPRMe6zyryfw8eRtJAinYBWp5",
  "key39": "61JCE76RQkDjJ93ryafh8VspEgCdunX9hHxAF69wVoia6n542qYQG1fXZAL4WFxXobNV4nE8N4vWVj3NiSpCddbi",
  "key40": "5zND4H1Dvrg1nsiKEW8eqi5yTaKs3dUHVe15yQkATF6oYB3Dwp5U3Eu7HS2qsjbsfDF8FzwACRxUUUbbaJ1UAwoL",
  "key41": "2VD2N7eh8UBHASugNWyynZ8w19Ryv9cMp669NS9bBRH3TT5xJQxHc3K4fURyGysk67KMur5jksBAE4iP7uprNX7P",
  "key42": "C7ZS57coJiwPCWWiFgkGWnoumiz6VGEmj4yMUEk8JV48hzzdNzhEvbLTDKQJFwEsRLRHpPT8tzhUAkJLSBoNJuz",
  "key43": "2ForBi5t8VKtH5x1dHGt2b2C7kokxFTSahY942JwYR9nJuSUs1YKxXbCjGpLxtqyQ1L4X36zxnSiuSLxAdFwgUps",
  "key44": "Pt2FnpPtYWQsHasMwjjb2D5aJUXWcPrgsparsn34oMWXNpYRj8q1cRznM2E8CdTv2xuV8AipeeNc3VXnLWxojnM"
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
