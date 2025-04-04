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
    "4mSA8hPsVEGDtPPjjJVH9ZZ82t7a1aHLtBAUjVVJmL1gXbqwvwi8BcCv4bQYYzcsYuyRkyNeAkSCwnq7EebasGXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1dzz9zrNkXi9gVRJE68Y4pSnuSzhJdYjkX6tLV1nRuVjtZT15LnecFVzdag71KHMUSEzvXkQnHTcfez4aE5JoC",
  "key1": "2iZnzb7A4EG84tkQQBG1dZ2Gs4KTiuGQfLp5wSN84cpTzFfVK2swj79WTqJJouFYSh9ZMaDrVoiP9WWH5wBP2iKR",
  "key2": "3ZLrP6iCvWytubB9ZfHHjrbAMcEsxAnJFwuEMRau1cr5JBz5yVXvoP84brNXG7ycET9D7GUTh6bkQ9bFH7q696JY",
  "key3": "rNEUdzivjKLo1A8PvxVmw8p7obBjDz2w69pUf4ihQM6VK8hXovhjZZuE3dn31gbS5Mzxe1SgBDoUwwY9ZZHxm4U",
  "key4": "3Z8i8T4WjAC7Vv4W5Jq4mc2NQ1Lfyjp9jRUKA3JXe81ZwXeHAiKUxKzKQFYt2ZGF44TTTUMFBp8DkM4YMtzBnKVn",
  "key5": "4UZMvZNm58gCjMS9UjUnr2W1n5NCi7UzNh7JvMehFTTav9nwu2ygeRCiX7cAzPWMgFAzGX8JhGAvnDXvQgpJjYJ2",
  "key6": "cmz415gXr8QuN7dWFd65Gk2fASJeyqzVmdPoAp1jDpUtrJ68hZzd8FTDC9vXL6wcMM3D15z61ZiJtd5QdVJKKzt",
  "key7": "kKfhEttfJFgEtEULHQAFHqkpQeRWuATtxekGRDQd5tVV25YvEYu2zLZ6P8wDfaSa1drXJq674QFTpJATnNXg73m",
  "key8": "3bc6Qh2qfrCXpWhX6DeFZMFjA1GB8gpqkfAFnETiQnubWAWyxUaBpxmdSS66yAZKbUM7TCmTU1V8572rd48piogh",
  "key9": "3rVgGFvvrhqvreZ4Z41oyguuw7M2hyDJ1VXCTyDaunASHEtVwpM1KehadXfbmaS3hQNkzBHEDfyjA1cYCDfwJ4RL",
  "key10": "4ECa7GEw4PpbQHAbLiGmxbEh5ogKDTj6ufYfQC7HSwu5koLxFsTCmVG9MMoqjZy2zwVFWY7rDYYTdssn2SQJhS5j",
  "key11": "2qTM89F6tbhCUn2Hodpsz5PfASFwFUxtRK7sLX6XRin4zZBZi1XeWqnNbM6bdTHioXngqjBXT9Pdi6oUrmp7xfgC",
  "key12": "3EHXN8QCQu6yCbSwgJoLDgTpMG7pu8UM1a484vd1HudFSxNrTZEWeF71nvX3ebJUsgg1zKEMXUTqvmEJ9BesAErr",
  "key13": "5mK92nxyJgfJotn3wxV4n37sf22tnsWbAJF2w6aUJ1r7eMSv4N1BTW8oLkrfzU5tcRmrw45cDg46dAHC3mbCeGXK",
  "key14": "2gQmKKVhPzQRcLfRHc7Q7g7VVvFuFj5aXpD7RNWWc29nB8GNJeKnbcrnF2B7UYccAQpn12RNciiWpwKEzytHjoZf",
  "key15": "2eZVNYrEKmZPhmns1CLF1WktBKb86rEougHt2L6hgkjPTZXL3ktoPFDm6wsGyNUeoNCY1gJYJTJBgkKPtFixwozh",
  "key16": "3bc16V2sqSYtxcC3a23Bhcd1veu6se2QML7GnU4E2e7NonX6auJs1nuEAhfPEchmuRDJn4AhsL3WzNPTyJTkVbtf",
  "key17": "5CR6cdmjZaYqt5nvWVSzxU5KrTyMgABrsfnURGVRKxSV56aFMnzqHodvESMnojwBMovKX3d6H8CV5YcZTG3sHxbr",
  "key18": "2bVmWxxBmt5QWQw5Y6g9c2Tqe9afoMDFCTCEGW9t1ag1VB7kYVZpTbT5DogkU54etwxS7Jd3zqWo9qT4C9dpXarM",
  "key19": "7VTHU77GpoV6jjaLyRL1AcBgCxAfwGRpG6QXWpZZCLxyz81gRZCMhmUw368jcTtPu8h5oMvLyqpyfnd8LMjiFYN",
  "key20": "2UbVFh6FkjvpwUnWVhp8tjPgvqw1pPwAeWQ1Vo2wXaa8mMsC7BExRFrbyuz811yXMVkRkY3xwGuh7Dryz5Xhe6EF",
  "key21": "5B9CkwBY86QBwrdSYpGhteeKU5q9PvzPGuxHKzS71BgYmm5hnWnHdKMTYMoRT3AcrCPiYhTvXJu5h559ezk7W1W9",
  "key22": "43YQookias7Hsckzc1DLbrBuefeBQwsUpCRNHprf6WH6nAm8JiUgRjha2SPqE6RybRQqC7G4kJosWjSJkX1xM8iw",
  "key23": "4aMN9FTcRyr7gckoy7F3cwsTgJBtxQAArjDCgN54GqhWoMzTHRVgpNFykQh9Xk3qKWnRf4UTHiSYAcwMAWjKj8nf",
  "key24": "261ZjnBYWSSLiniasksGjwMsjVXyfDcTpPYxvwRa5yZmEk18wweqfCVUwN6QpbXXxxLYcN6fLhKPyoK1Vej71Y56",
  "key25": "2ogsB7fgxiECunxX8G747ee3pTTkLKAhtoAv7vGsMXMvyvvAFLRS36KQNvWYKRDJcTHujRGHe6Q1utKZfU9ramcc",
  "key26": "mw7MU1KkCT9QWHPbw4JbmWTCDGxKSGmhzPfVVNWQaRWRwbLvryNE17MStp6HFA2psNckBpLLK5rE7ZqYFLQtFMM",
  "key27": "47kzz7kXKiFXbmP9aQgwFXdeLbauJwHRFx4mig2DPkBYvMWWVPnY1kTmM6wYVUrJfWB7BH6dVX3f1BesUBvjy6QU",
  "key28": "3D6QXK3U3sGXTUEGHgui5Yp1vzdrU5WVRpqH5XBMXmVy8cLeQkuY94xxHK2LWyGnpeMwoL7uLpoCjbYV6mGwr7o1",
  "key29": "2uDA1DBpdxbbEpY6yKLiLSpDtNCpBGm9iy1UDUW1oLdHWxeRw5zCmpLSeCfEvdkAcJ2Gk3r341tkranrsNJYckGz",
  "key30": "3N8oHzvR1WZrVAz31u1GZ2WwbogMuFkBQoAfhrRVCkMjz73o3ZSgEp8yw4GT9qhH9VgMgPTKHY6QXaKDYpiEzCV2",
  "key31": "4Cgrms4wG4FdHYxwt7PGAzgAR9kMVKM2Zk1ExRtvrXcTfMoDpKjMWLbQ54MMDdPQdc4NbexKdAwKr1Lc8Msw9v9U",
  "key32": "23Vx1aC1ni64bhKNH8PvvXPWaLEgeqALaSfWQQPhLs2bQYg7g2np89XC3K5qP3WknmTmeo3TfqcJPrMKf1Hp1sqV",
  "key33": "4bfTTeuqEMsEB3bNqM5E42ayabE4rZBogS52J9F2uDjwdYkRixM7QuorPvszK99MgH5rvy2psu6xW6rA5emxxryA",
  "key34": "3nrT1F3Mp2vjNXzpcJRcBRNmXAn8UMsi6nCuBqLDjd57jS33jBM2tN2MxxfzgvBRgmVHTcnmwkMQaw2N38s4vAHm",
  "key35": "WG3Tv9wj9MRvqVZqVBAPn9Cs27oxodaz5SKQ4MecL2nGgBBJQJMrFBYJTx8m6BDrnxJB6QcDwQaH5V44mtvVWJw",
  "key36": "2t9gWkuWyaGDMqr9TWGCqMhnZTEQaU5gqPvLBAWXw8qoGzxE478AJLW1bqU9QtYxm6jLesxSysxLo7K9cfK3cLtA",
  "key37": "4wBJ7wjqbmb5MF5yWf9s4iB2YsMYqX2Y2A3Ev1LsLpoeurayDj4xRfLA11rnfyt7ZbJGMoedQzuisxfZX9axBqkP",
  "key38": "cFdQY78nC8fNaQazE7B2SPnucjJoLT9uMbgSwPeXmPLvtf8oPhc2eafpKKXouaDNhsvX8rw7QR9rTihJg3APsin",
  "key39": "MWM1UnQKZuRAzw9q9bPNWE6pgUu7S5ZtbRzTY4uwhMrF61p2QjS5snrBjYawZp8cfuj7SZSQmUdHssM9vJsp2nU",
  "key40": "32QgdbJb2NFQce2iir88eFwCciSw1VbfVrJcRGpYrKnj8f5pA4PP85eECRdzQk4s4zuseSoiihftBLBMw5x7mdmv"
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
