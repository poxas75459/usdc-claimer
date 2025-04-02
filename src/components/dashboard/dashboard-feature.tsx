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
    "4SgeN7w2Q3oYSzx4gHtnE8thtDv17JuQGBNtuJw1nSgNfwhkeCp5GoVyws5gyFwdSJdKj12937jm1oiaxcPByMPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512uVv9mJu5VV28XDzZhvZwyYHLCkK3Lstgnp6ezMSkQsoNZTEdX71iitrS1rLAFqxK2oQqRHPSdEEj4eHtYBGLH",
  "key1": "4cTZowPppGgBLQY3Goyv3tgax1yiJqJUj1qHmX773AZsbtSMF7jDb97vkB1PUaWr9V1WfrVxt6hvgzZaBLMKdmct",
  "key2": "2UA8VLN1PFUAGKB7bk3wYqENPWmUZg7nMCUxjFTvEAtNgBVGXnDuiyrAMCvzsRJyKJipC5JpMXFoFPMavrQhqgY3",
  "key3": "zbCMA7MuAHtB5VrbaccUziPbvmosav2sb3RosBXKiU3PJ9M2nEVr9NGvt6hhGonddQTrwQ6xQcBh1AKwRVwEMWq",
  "key4": "hbY17Fnpq6cFcGC2GfEY1Xxx13JtmyS4MECQcFzXn1Z7Ly6u2KmKDaaiBtTmyYoNkREdg6TFUA7RWKce27MK8Ts",
  "key5": "f9VfnVC58xtven5iypbecTMNR7FXSGkbwcf87GbFw9dkn69JbxLGj4BTonofkAiGbXPbLyVa9xyDsmepmqNAhQn",
  "key6": "4fmv6qfEib19QVH4wQXXjmL3kfUHc4jicsTJRkUfW3R5qBB5rXe1qgpaYDLZyXTEtzPJZhnDDHxeaY5UwMGNUVsy",
  "key7": "t7X5uH5ouYacxjyrkTkAq3Bsq1nz1L1ubwWmULb1BWYm4JWqDqrYRPJe8doLhwjBrnHfKPDn6c3WgLMXGLwXDMJ",
  "key8": "2Dq5fgjsu3a6NeSYFnzShQ35MrHcYqWJMPoGDHZEt3iu6nF2HDdzkUchoDP2TYZ1zC5Czz4xtbn5CkRk6TTqijaf",
  "key9": "55SbDvxn35ikg8LMQxrTqZ2UsfEduiUWaZcjoGLkffPFeUPWeDPHSYLNuEPZ3FHk7utqFKJfnEuu9Ygq6cnjbsDT",
  "key10": "54sCvEhoZnsWtEB7ukqED8v1tKFh8CLVww5BgMS6SsS59K6T8FRVeqAybasTtcZwRZPPa2tCNBrYYJhrotPfEmR",
  "key11": "3BtycW8YHStSWwEsqnNxRWjqA8EiCgs2gYGKNBpcbjxQjJYSFQYACoQghbnEFHigJENHgjz4hCaWK9EbTUjTejo1",
  "key12": "4DyTv6hGA56zZaTq7fqWBAEtjkPcc6WiXnyvKN6j97HSEjFV6f12jQqtk3tBZKqxbqAEvLFe7Hu7RkLZXysBq7NN",
  "key13": "2vwNwkyLdhZ2L62b3JhFi3eZqgqjorKv7vPxGegUsgYVF6WG1uDXhvKiqr6D2tM2dGCaPHMWqVgurLLn1SdRjYA2",
  "key14": "32ERg22c1pBFFS3weEKXSpX1P6vt1SBTJvcFemog3nc6s4xzwsNFUG3CtmaS9wTjPqQh1w2UxWNxcn2AaGoo6qLo",
  "key15": "2uWyT5ipkGDvccPEQRS7LeejqgXAmM6a7AS8A5o3CWyJcDj84XHn22CYbuunW2y4sqhM3aDmAPPPwsJG77WKDUwN",
  "key16": "4Cm8whqKHyyoMvfe67WJpjHKL1Wvi9B5HDrzkFQhfNLPF7VGbWws6b4HhUig6spetXUKgUr4W6eZFrTzJcLHZppS",
  "key17": "4t64B7UaM659P9j1DTMYYkTxTwzUvgoLRwT2XkbE92qnZTysWhRQkWPtNiuwMYiz8iUWAUiDhkCwiBGVRr8RDHGY",
  "key18": "438GEAANWr6s5jQpRpEnu1kZc7ihCvsunRjQNGMq1MPihfB7TuxEdBDd3m7ZjbXy8bst7GpVtq3r1WT71z1phpnE",
  "key19": "3BvaESPLGUFLtxswyDRCrvwDjdC2bQzGwEsMy2FqjCEYGJzxSrqzRdgER4ZCbfKFq8NS6ycPerDdcMjLtykJr5pA",
  "key20": "5ycXEvcFiBXdVwUREQwj8TBZgjvXzEqPnCCWQWEYe2ppbAkpJVKDDoMnWtXZuRGQhke8eLNCmL2nvQfHYR2aW8gy",
  "key21": "3BbHMzQ9VPbHajmnrTSoAQ7LMXCSb2dKYssLHwbXgXJDQUqT4ZpXmkK8895gtijKSKiwpKsZghLqFNNYSRsk8sqZ",
  "key22": "5egnY7Y9p9VUkqbW9XSsD7tnSW4jCzrW9axQM4Q3yEApEFzPp3xZiYQNhap7nwQVMNQ6fPVi38TryWfssCT5M1x7",
  "key23": "5pc6cMye23tzrurpK1zXk2bsPmspbdUXztHh4nXtqeNHPT6y3Kbugiyz1roPQDoVsekRhegGLMN4SWqbqqDCXcfj",
  "key24": "32jtN6CpdWgs61sW5ACXa6BpQVbjkSVkuNzSwU6pQ3sgg52foiE3nDpeEtkuZvc9jCzoPBfpaSj7QckMYgsLF6cy",
  "key25": "2vTs5vPe9jQUccdBYMfo4E3kXmAevQi9jiDEe7gLzfHAnxm5P5jYid1Cith18t3VZAEa9ZFLgqz4fHVzTtzP3dEU",
  "key26": "H11BWM4E2nJ3aGozZ1tjCyGTovpah11d9Zo5V9JbGe3c42BULHf7hjjnKqSGY1pPfTNLAq5UK3KJkhqVRXvSkRe",
  "key27": "3HT72Fpox9m4BpDubSceiu3bQfW6Smz3LK292yBAjwLLbkwM86qbX6xNJX7RH92wuqg4BcKjUi1JJwWPKYM6iTVo",
  "key28": "4joeFBzTGXfwsacjHa4hn5Ki5q2RZo4nWdysdua8KDM84QzKkKWjGejfja32KypG7DxR7b4sYQ96TwXBBmjSPYGD",
  "key29": "5ydx1Ts8dGeYQeV9tye7Dh3hD6vmEbtKmu2P59ZTDu1jJNeznxs2D4PztGGgjB7rYtfqckGKdhbtVPRVBdQ2gv2x",
  "key30": "2LC1zASiA7FErQAzxP2GUqKwpADfhDVSusEiUYL6VUc2jWL2KKvX6xup1FK1VsMGnCvteCG6FLCmWRnmmp3Nzrn5",
  "key31": "3CDBUe3HMchzVVQpwvRprfcxwJGcLnVrK5mkNh2riSs3WDshW9Hr3S9FFqp7SAj4DvJtwzYsBHvuojDpkAZ6tWDg",
  "key32": "5pPoxXVieP8vgayv7ArJxgaHtA1KW1ffmwECjFHDfWjB2xKrf17dYa4KP9nyireKqNcqfPKibYuyGNpPS3zJKp2E",
  "key33": "5ZWVwjaG1RQvznAUDHEbE643ky1uXqbxsUX5Sv6XGUv4nGE28dPRC65VWucjj6qm2j1kXydDzybY6JMb845aprEg",
  "key34": "3MvZVnqJYUY2ksA3EcB8MkchnQphEpXbxbKcdNSBBUu7nhM3u4u5Fs7QXSvm8NmE1xq8rpXXXc9xSggqtn3hZ2bS"
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
