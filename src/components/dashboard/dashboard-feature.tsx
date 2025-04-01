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
    "V5vXgkVRjyahFt2S1viuW8PDt3WprXCE7Bb5DmAUFkoXSnUY2nA4uWaGhh6QF9Tp1Fox8sQybqFufxS6W92EaoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3oD3Z6in8nVfw3LPP3HPEQow1ADRqPRKy6T7WyJzhLZShZFGnEZdWhcdjgmum8oV5mGjheikGypve1rWgRSsG2",
  "key1": "3igCnaApdGEhqj4LGGBAKJJz9LTddXhkx2nAyPcf1AsvuVwfXvnSKVUh3QqDc5WsHcNKM9Pi9vhkYQzWyt24kGhA",
  "key2": "qaNK4g4zsvyVzTsW6zHkpscXUywJsfXH4oBD79U4Q3nvdwGWbMjAYGfEgktJq6QvVywe6w4zfLSGs34aqhtzqbx",
  "key3": "41swNY66HDPku8Rx8HCnb4FGtKfFe8mn26aEwiCN8MSh8M9yK37HuxVPpVDeZTepDSxkVng3p4EzQrh2M8EFnnbe",
  "key4": "4iFnVn2D6yW5X7EEdqMmKKtASewLk1T25n4Bqq75pA2JeoCCLccocM3wRkCRq3z5yNMNdayjrjADDmAde66a4und",
  "key5": "3MHYJFp8MMPXjRcLTacLaVYCguHWnEmniyM2k19RYvppoTJaCcZbo8tz9dk6yYPVrg2eTZorhPzfPBYKBXS4XcGD",
  "key6": "28wneBDkHR6JVSsYwWt8TgDYiLw5bsou8HRtPebFzXbcTib2q3BYTdFn6Eui3PQFPJLQYHyyqA9qgdXVBvVMoyMM",
  "key7": "4CkeCUskV42sTpEk3WBQbpN5XfbUxex62JEnzHeeut6sYsTNV3xmXheHkh4JDSwQVp2vJhNeDenYrthAC78NAMzg",
  "key8": "5qfaymrRairtHwMuX83qwqZQtW62A7fHfjbN8tYf7z9MQLK1HsJ3BzHiPtRKyRsEuMUXi1HufYVDwfA53fkd5dWb",
  "key9": "nNrQKEmS5ZDVfMEvMdneay3vWGkqL98foyzQ4DvtrMXLypMm83p4ptz457yuNVQSGjE7DeMjxGqywT6FVAFmuXR",
  "key10": "tMgVCDoP8hH6rqCvVDhHEgRcmFggrZx2AnMP1ppfsp61SijrDQZjbJ6xPX82UVx7TwuhKLnVcRaAhKV7tLhdDfd",
  "key11": "5k1CRnGSGDFXaAMQUZjr8Y4VhfdGqM2k419nfXagrwjH83EZ27W5wg6SYM6gw25Ksw1jVziQ3goyRxnZ1QJcEdhq",
  "key12": "264SgueKPt6HXnKNhmm2W3KDZv5HQQJE1snjfC7BhjRiQovgSJ53eaiRjJja8CyjWJyHL5qXU2cTSU4uR33ZwVdg",
  "key13": "5acKaX2ht1Dn52pcWeCJkUpEQYswngcYEFVMUgPVX1sRN1vY5HTnqE51UBtZkYfrUCMTxY7Y9uSqVmV4QzLyrHZz",
  "key14": "Qap6LtRavvU4348a4YuP6Q1RiwZgUVdYu6hsNDvx55SuFUa23vs8gEaQ9P5STJES2ipCDdY8rZVfsHhQ87uhKzd",
  "key15": "4FfRdum6WKMNdfoCqpuNS4bU6Vey3vYf7VTEG2WMLHKnazP7LqGoKcYtGcDPshx6ycWZUbvZfUjwuNuxYG3MCu2g",
  "key16": "4HzjVGYYWS52XWpRDndmqRnMrQfrJU11NYycaHLJkCRjkW8ejYe8JXaxoZcMmzD4kLDsRpo4jxDVvtE8FRgzR4o6",
  "key17": "54J9Pm8s5ZQFPytSC1hz9SeFnXMbjbbxDrhrnChWtLoWocWkEFpvSYi8tCpwc31v2eAKaCbsKaEa771sqAWUXP32",
  "key18": "oQzmPT44LmU6Qg4riqYzKSw4FYijj56Gn7DiYnZ2Md3bXzcZg5Kp3uoJ15ayxFjmhe332WytEVuGUuBufrmoYsX",
  "key19": "5JjNArjtpU2H7jUEUmDnTM8rpjktc8e43SnpbtXjeLSFXorE8GzTQyh77rqiSLpUFbGVXBd4DmJQXb5zbuRHBLzD",
  "key20": "3xXdenxxBEbqDCF5641dh3aDgLMBemDLiyU8nngcHqEMVqLZ2HVtjm3EeXzLQaSYY6Tq1kpnYbrV8FNEF6btaPK6",
  "key21": "5wCaHbeWHUcydhEyWtDVdzPLQNpS8r2vZ1bqGJL89MH2q1snoKzLMUmLEXKX1ddmcNU1AwaHGM8bcFQSNsXR6bdK",
  "key22": "2VKYB2QFckgS97anRfekKT8b9eR3eyzZXrBw5Q5FT7ccoVmy3yqh1MWesXYQfDst5XMhYn4khqDHokwjWRUEGc5T",
  "key23": "2xyFe2MBHxbf1TFyS2GCJQKPnFCHnEMLdKTMvLenLsEURgDsyD3RTfLq5tNv3rtBKbDSD4VnZF3DQ9pYDqRpkTgo",
  "key24": "5uenWNgcaKvR6UnJe7rx5Hn8oVHtKZEFtE2f9ezxWWzEHvcKyUePYB8Za6NjAju97MMRVB658sYkUuExFnW6XCRZ",
  "key25": "543HNgj1uPdYYKpF8K8pXPvP6PfCqseDSggV6moH3FaNpk88K5nUWeahvrZjWiT6nDCJtG8TmBY5MRbvpWzgdoYq",
  "key26": "5waByy5vdp5pUBRMhpE8fPCF4K4rNHo5af9hVFQLhz7pEBBLKCZQh71Nhk6p4GioHPJr1ykcWF3Hz2K3bGKPijqe",
  "key27": "4Pa5vRJYwXXEW5RbXHvS11r13yoZe5spV1MmcSmcJmnfTrq3nsDhRGfkeafSqdeT532xpFnChx6pGNUAr4dmZRfQ",
  "key28": "39MXe6aZhfR3UQJwkk19x4yDY9NaY3pQDmsgqGMFgP1WeQLm7zEmuwcdKsr8wCyFuZG5hqAgcXKgMnLe6tZKhHCm",
  "key29": "4midoaJ23NNcAFn1fyp37WBNcXUtUd99mzsRbUx46syfGcmmpiXCrzJ2ffD62pBA1HFpZkmx7dGqPHCqmzmZdE71",
  "key30": "cq4yNSGavEMCUP5LsBfAP9DhA6HwDVB8pVQfWbaED4wCBwbxruHNk44oNLbEei6NmLExVmKD8KQjS6xUwzocL7v",
  "key31": "3JJpkFTNC3sLqZpYgQyHRwE6KDV7pcfLpUJnjgqqFCcwnA7e5Q9Ff72wbo5HTPf33ePBFa7zFxTA9y22DC1bW2Uq",
  "key32": "TgRq1bPrXti8mmTpd33XZZmYDeZHjooMhSNiaeMFwUb9VQhdpderQDVp3rgTCywodtCEC74Xxha38VLS5wJN78Y",
  "key33": "63QGfjc43CiT5Ng85NXUuGyquMkELhziigTenfLUpAQc1Mj94B6RGRYdCW7CMM48noenRKTuFV6Mfpcf7QbVA5WY",
  "key34": "Fv42Z5To7cQyu7G4dJR4FC3PNJh4NAHmR4HXdmrLyxymQhDfpK36P2ifYPTqrmzzVrqkQiyohaZqFa5SwrKZrbC",
  "key35": "5GPoDtykKf65xGL1yTHKhme1D6zCEJ6C4A9roZYbyMkshvxM4W6iRtMnwm6WCwQEukcBmHuidrBa2ExXCYBEehUg",
  "key36": "5cU73apKG13RBuv56k1nQJjFW59MFMuhYnjFbjMJf8FfezoDRNp4SWgCwJKWgMmPnJGaivaUqvFSvyEHnF65d7uf",
  "key37": "56UUdohnEGwaGYH7UMZRe4VWaW6Rxo2jRbABHdP1U5eWTp3RkM3qSxctGg4khTP1Kxar7WqjqCP1i36nKE25pAg7",
  "key38": "4TNEumKsr6Q5jm19dSJEJQWitTvqnLGrWBGHQy3RCPqUAdUFqt5WEn4VofuB6CV8G5dGy7PErVSPwMedvhiVkTzg",
  "key39": "2LjBxYtG8EqbnXQSLw7Sc79SrrmwUjWmydAz9LmQi15GHhi1K4huio1gh69zVz9EfmvwvM8heHNn7d7MBAEDar8Z",
  "key40": "5aWcJdmiquG8EYvaq8ZiUnFRzp9uBtTejtRrduvpGmFuKkUw5toFUpjUUa1WxpMFy2y1CukdJFuv49Rh8cyvaLHV",
  "key41": "3v7nqci564K2FRCBfCwMa1RHmbcp7DaEGn5vWAZ3e48pvCZjQCZPABkG8ceSuNAusT7zwozQFJF3BhtgynxLVgxG",
  "key42": "5RLoQw4q27xnW7UTwLkUQ2jVYCk9APSd39t7Vw4j7xE1yzsdCDZefYziF2fjoKCrc27sUJyniPoqVBBxiKCbaxwt",
  "key43": "3GHS3qRP7Xk4RXuvGVEkzKztFfzeH3sBX14K6hsr2E5Sw4MsMEJWa5oekX6FBuKEyxgubupR3mQyFzKtYGeXqNng",
  "key44": "5dkjs4dHbiUFfaE63Qxq3t111AU4eSoTXWsYCehj2iBBEUgtmbaYqrLNc1dfywZGiLoncErCo5LeNRtEi3yX5jdV",
  "key45": "64KZdHqTXBp7c4foGyJLGLW66CQayXNNSLN2X7PukfJYr8yURMUdMyEkZMN2BfrzPqLn6ZfFyfJov1YqvxmM2jEF",
  "key46": "4AND7u1dpyamCHBMabakvTmGXPfMXKxSHnPQmAa2yAdhK7zdEkdjwsaDuEHvFvc4mtyr9stv6jnBB9ttNBbZ7bwE"
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
