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
    "4EJyxBV67Ss7966NJdsENqRGq3rrWsFuTKL9ZehW7pUiv1DSCjaLpatqm8XHyxBFPg1yaSwzC24fqT4vZXdcrENZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQ79zCiQqaYAXmk69srQbKHKjveGEaWJQKAWVXtAAKQHfrd8SMdfo554voA7TiBWcbsV5xshnQF9qH7VSEdssxm",
  "key1": "4LCcniCphpmeRGB58Dj6HkKd86GGtXWYyqM8jkDnDSL3Eb743sBRjuSaZfxfPXYGAAbxc9w4pWDJYg5bjKfqNkAN",
  "key2": "65aCmMYYzW5Si1iyvV7HCpQR3rkGTpL9bmih8cHdF3m94WuWDMe6vt9gZa1Yrti2fWWjSoUH7gXPPeBjEcwAgVkj",
  "key3": "2neq6H7GvnmMRyXGs65bte1zKNNUrEJ6wsZz8vVvoggChJeUsDfKosSS9U6Wg14hKsYAPipGxgJcgmiRogcgwEBH",
  "key4": "3dJSsbiyAAQAGNtcRWNHCp6Eyq6KEdVwngsrLMrdjnd9VB84BGpsD9Uk8AmtiLYk3GQghrVxgPuY113oqUgV2Cmb",
  "key5": "5HWEqM5EpkL5Rcx8WbAo4Fu5GDr7w9154Vpj3KSK3T46cyymLWiF1YdhnsKabq6xuRNNvtsk3b5JngXhbZcjWvU2",
  "key6": "38e9R1pfNJEE14vmsiaTZcZdu3GbTA7aAbCb1pRXaiA1vTVYHNjzxncYeDeKLo8NCecZt3anRvqVhhQu3CnuE52a",
  "key7": "3bCxSRpvVfS1g4qNZuU6fmFVe4gb5eJTZJr2UWaMpSWcgDFdEBAkKrxjgjg6icbxwdiCKXkz8RL1aP1STvjXiUJW",
  "key8": "5aS4oEKzxZxS1gZ97Z71f1BA6rhz9q5QU2BawKyJ26C4SvjSqrFqDpxmVk1wXM88oHspLgNkP2Apb7busHnKYfv",
  "key9": "4hYf8vnRJ6Q8Pw3yHNLhiaJno7zwTgdqxaABWjaTSAgSTcCdkJBkP9yMutZpRQ56j9DXJWgep7kP7rgwRRVSzs6g",
  "key10": "48ZJs9XDAVS39RLrLCmAkvFnYTyp3byKsHoAyJV6YT8RJzzhphsHwpXUbV8gx3JddoJMhCKGHuZKKKLFjCNtDdMC",
  "key11": "3gPjBf1nR6HWwB9LpqaWxn743ri9vKjQ9s46LWgHF91MpqHDzm7WkR5WjhyXbQmcZGYwq6xoNydaCDMJQMxUQKw6",
  "key12": "3cFoLyhkz9J2TdS3Y2JwHWuE1oRkf3axPw1ARY8bkkYEoQgJxi7iyrP8ertoY91f9AgjP3ztYA15sYV4v4W1jDVf",
  "key13": "5bvbQQU8PXAUv6aoD69EDyh21cTfQYX2W8MoE7D95zvB2kvMD7UKoujt4GgrrJy5BPD9NgesUR6sZoApvP9AixNm",
  "key14": "3CFLS7XP6Tm6PwEqSQhPXCis9uYJKZ4ND8MPNGGsi7pHBCGHkyFM4ZjSvyhgDWa8T7zhWkhNZyk6q6q8m1gmeMpf",
  "key15": "hLhfq4D4eUnsS9druqbrXDgcYwgsYtae7vF2PyEjDJunNaSrbtKA3AUZmH1Z6i3FLvGpBr1bUTA4FtX4SoUuMYC",
  "key16": "3CqqpS7EzrDNQ36ZPdGBXfQajoTgkPLY9Jjgqof3SzkibhZooqn48JxmmRN5VPPnQwVZ8R5cJ69EdeciShX4BfZZ",
  "key17": "fdFdinznMFCuTUr3aYnhdVpNLTcnsoZWCo4zKM5cTDo8ehFhnQm66SkxwMqR4C4fcPy6tjxjwhPbkinWDwPbcPf",
  "key18": "4cWzuxzZwgTEjbqiWqPu5eiLfZbLVH2CsDZsMAmmpFj53BmG6knJEaRTpepk2ybEhoFkD9WpQLJXv4QiGxkQJXq6",
  "key19": "56Beomgs6HZHot6XfPEZSFWSweubFhb8Fu331fggnWSNpM5gQNubLbaYzq9Br7raG5CuRQegQkUPZ1eiTzeEDMPP",
  "key20": "TRHtRRTZ9GudaGjuvH8yecm78mJqEJSJtWbTpPnT7B5qyBsu2cBpxFEz8PCyy34adQ1HXubUSh5qKwuRgTG7ht4",
  "key21": "4KKriB1HbmtBjMd8qbwbSUEXKH9p9jkzx2WYtNsEscBGRmh1APJ23s14j7aWV2Vnn1uE9bAUJcXfnkNyDkvxNKR2",
  "key22": "2QS5dbDtG6kA93Jvmcki4H6cNLy6UtJGWUDStyqDLBxdH1o3GFWLCjtuKMmyhQZDpbboQhUoJF4C7nB5XNVaBs7w",
  "key23": "4zG3iMHW16JnfLM41jE5tT7YHBhMeTWAzaa7Vebn3nQehbN7wJqgSihkyT7to6t49vSN46orubeRNpFbxvGAdbKz",
  "key24": "4TUS472A5PJGieRkuRhuBpoaEpfgS7aNX6Uo1zDFaW4ktCA6U8ydi66wCbyVASiiYk17Ys3xDTqjZUxxjk37U86k",
  "key25": "61q2TtWo39eMppm3VLUKsgazHdGAQRKToQWFoJ2V1nD9W72aD5GhJw8eSg6QW4qtNdBNXpDWfGBsjrdFoQNL5C24",
  "key26": "3MLgSfGpBqTBGXir6EnBiNzmWbPVtgc6LDoRNUisZ7XAt9rLiRjdaunvUYRijhjaJTvQtB33iAe1vEXKkzbceucR",
  "key27": "kPHoYEnpHVAjUWpZDifGX6St6V4w6gJrCMpE8kYevNJETcf7eXiWr8vJGKVcvBzziARfsnzjcaCB2hwjKde2SWe",
  "key28": "38YC4F75AhUDjNwFtHRWdktNYzERhh4Qk4YiKZtxb6j8fnmoqUgEYwy1d1wKb695QNimSxhe8cyECKSQd59c7hJZ",
  "key29": "2F7keQdkeo9dHTM7VADZXbELXwwHWaLEaCWuw2FbFYWsnqB4wZS9e3w89DafoxCdA5Kpphxm664HsTqX9qky71zJ",
  "key30": "3sTgxZLpLbxtF9rMEFqDxjqDBDxstkBz4o6K5LTP8TTzb3ibxhHyNEeKQqGVgNx2PNsoJHKGa3AA1tSHF2ssZxZ3",
  "key31": "63zv9jgucKjiVaRV3EMqSsHN5tkpuyPj12R3GUV1ubZkUzXQPfXg6KZFnR9AA86UBkS1ddtzMCTSAYE9nSnfUKv8",
  "key32": "TNADaYFm6RaWFQjvxgtfTT7uQzh564v43R9oh2TktXDoWqCLb9YN9rQsqqkEgFWAsYPjw7y5Dg2saKcwieHiRak",
  "key33": "PncPj8AB3PmT1Vz2GocdwQgx6n3fLPxMJKjPz8FVhDSyUHXG33bLqASxUAL77UQTWuuy4maRGiMrW2g4fTePojZ",
  "key34": "3WuqmnXBD995bVKLCSWCGsdrKFaZueS3iyTKNkNPsoSvVE1rzPqrbmqXXHteWkvigHedkPKqg3xxzipahaffns7N",
  "key35": "qWkbbf4FCx16RJ5NYg5WYjv2KsQwMeVCGAJtDXxVQgebKqEvenz2vHMnCMYhUfzYnCELuyUWPyZuSvaNRjuZ9n5",
  "key36": "utjFxGjzbcsjVDq6kBdgaRdeGUB8BCoc3jJLjvZ5j5xW19tAgzq3XF8JXWqms45e5cLuyXzSfUjs7zdV8DZfDnK",
  "key37": "4fBbA6YMdgx5xwwfRBYsWsAhKJBDon6jQqxUpNF5xrquWErkNGzMXYSQVr53XC5LfPejoQA7vtFERd4si8ribcWF",
  "key38": "3Hd4jMyzJkDwCw9Y46c8tmN8vCHwodNdWyEz1BdZML6Ds3imDb1njUPvrGx744GKY6fwWi8ReJo7TNZvcMHwyjE7",
  "key39": "zpa9QjnufaRkpnZLtoGRv5fjaSR1HAMTM2bDG7JXLCcMC1ED3ab6WgSdWTYHGZV3YcqGC94NiGQtxKQ1wG3AZ4t",
  "key40": "5jnLPM2axGc7MxUBNQkpVzY3NRdEzeF8kSGHgJ3fz55swR6o7KinHqJXAoAWwkAGV5CFw2Wj5YVr7fbNjYR8hocu",
  "key41": "3mNWp5A6kEcFjE6WCKafuMgLaGRhWCQpU1inxyodkHweKCvZLGzJZEjK3QhdsQ1ykjmqfPRFbDKug1uFLTu7StFp",
  "key42": "3CHQvJDBGNY8P3fyPxUfBkkJVK3S8zjFeVnu6t7H47fp7NyRghuFrZ5pdEcVbwicR9ZF7rKtqJiWbSQ89atvpJ64",
  "key43": "2YdwHnjF7bL9dcEZ8Wv9c3MQEvVsqbU5RhC5YrkXqagJJ9jyYqtKjpXXDvwMxtVpnimd6BF4SKw9qfzdyTAUC5w3",
  "key44": "5csvexytBCRVC1NGefKLUXdSAXuvAvoDdUr8pThHm62ot3tPjGk73iiknWwveYK1p9x16DSnEje48oKwbKXc1jD8",
  "key45": "4oLn8SKsuyeddqASpe3ViRHfy24Cg3enaXvSkFYp5hpdGirUfsykhC6UFPKfzfVxMpSZgyeKfVbgQMa9Mdn2UNwg",
  "key46": "2niV9qbVt8Jo3qCH6rhAKET1hV1rEfsTiKYPYyPzRBsMv6drzEKu79pNw2CQ5CjThAuALjBKdaaEhzJMfHin5A2A",
  "key47": "5Y9M3J92EmyEcdXme88XrXHDxF8aCrX6koh4uME71VBWCXvexG9UGYXVVcXu57o7vg9AhKEoHFnVur1Pr4vqv5wL"
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
