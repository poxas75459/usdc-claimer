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
    "4uHiDDiSG7oKZEwW25Xg3giNH14v95jQpYx8rGAr5X3PtpLoa5EE8MKTtTgWmTa3hZBrmZ1rquijG2Btap3dZTSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHTk8oSM5R95m3N1z8gQGScPVGiFFE9c6GPKJGTdBuuVyeHnKT2nshyqr3q5uhTb9ohrTeMP7ViNqbdcTmaQU6D",
  "key1": "3Xhz13sph2qpL6iwo4C4Y77VD8oDnFkad1tT4j6jZk4kezEDEtBdDhUn71S1JHqspKpXmY4WVXUBQjXQyMLMYqBn",
  "key2": "5NPL3zLHbpexDRGXyx4zShHJUnKf3yM5BptEBcs2WeshXoDV94U2N8q3fJo5KcB293JGrRau1XaYuq3DFGePawz2",
  "key3": "5JVfyo6mR4HjhwUbp2NZUyGQ5qUBhw1ABDXqGjpZ9nFPG9prgjGLK8wUMnT7uMZuNd7SEGqNK9N179SUVdmtrzE9",
  "key4": "Dar5WYaCQg3KqLQ3Fby4DDJye8jik92kzh61LYHgxFjippVgiQ4d2G7v7pe12NtUby6ybKV8CukJCVWgcqKkJhA",
  "key5": "2a2ah1nSexJVr3M4jwnbJUcUr8Nj3zWCuhxfBLCg7d2Va7NNsMdrJFiB7BU344is4dt5H6mY1k72S1fWonKCmQ1",
  "key6": "wTstj8P8CKZwTaWWCYPJSBrdBTMd3mxZ2LM4jAqABGY857QGiLtPcDay6mFjdkbCSNXi4SaNM6pfoMYu7GsKC8x",
  "key7": "k5n3fBD3X4y7vuSBizfhkCXhV12hfTJhPCGN33Sj4FP58G8UvrygbHr95n1ihrwyrtKg73o1aJ49KR7CUgZNzQF",
  "key8": "5yjZnowp6ZG3nCHk8KcB84tWHxzmj6nLKM9eaztmM3QurxcGpY23ko8fayhufJvQFtCa68tNLiygSox9EKiumKep",
  "key9": "cPMfKYCzuZaj2AaG74RjPp7Ty7ppTpQ1ZYatbWbsHSTSyoh3fEewkREn4HnWpy54JbKa33KKQjDsN8ToTgYddnc",
  "key10": "3UaoADuWs7tHQmoqU6N2CR3Sen6Z6ox2Qdsusm5jwzzTQVh7DgoPiFxNkNzLYU1ssbLNWJVaMyZxUe6PP7Wnwh8F",
  "key11": "4DuiicedGbLTMa48FcLNEccwLTHsvUgkYjZCrJ34C55QPpcvrH8kotw1cRMKy9H5BWstamiEUFvUNwtauRXDVtQh",
  "key12": "3fs5y3DzsHZvtjguRQJ1i1C8XVokQo6QVZVtGkkkYwx1PTtL9HSiHF8zdPyjeMJcC9w48iuSmSEpW8TeNkpG2hBq",
  "key13": "5xNK8YMhev3yZtG8MCe8nUg8ZCTV6dAJ5cPt2JvtfdYu2EE5PomCw14rHjXqfnNqDbxt1D8nmLBunfPyjaGyGGAL",
  "key14": "5cmy6j3E85SUm3vXbzxkF2qhUPKshSXjgJvoyqYZUECRkBD3rHBqWpHtzGGsXyhtZ3kpAr92HWbotMenkgetKuva",
  "key15": "hkoacYxihQzLeAPG9zYKuV7zi9a7qtL1AV7TBimpkgxhLnCXPa9tBfk2gF38ToHiDhDnjXaVGKNuZjJ6bPJTEr7",
  "key16": "b3BFS6sfnnKs6pDDQYix7toxzeLKxGjYDKutVYbdW8DQAP459b5WXcS7JUgyqriTBVgNBoQ1kk6ak3Y1hD8Tm3t",
  "key17": "2wvpyCoyqo7FFZZjLdFVLnNCcFWdy3AoeZYCz3pwZtYTTW3UK2dsJeepFnGKQj5aMfX3HrCGh39YGoyFz1bHf2bp",
  "key18": "5iFkjQWnU3dfoC1R2TLtGw8kDhCd4dBnZ7dkCRidbL3CU6AHChZop83L1ceKo3GUqEMHteSEcLUKzy35sWa5oUQ2",
  "key19": "2KHPX2FFG5SsYokCbk9NSUWqigzDKtyjaFswxNDW15MCLTFwNzKTYppaoMVBSMMv55hB96px7BhNF7TyRQ4ZE7vi",
  "key20": "HQmbKCxS9Ju4aAUpfXZ7kxUYo4RZxSkXC4skX7uvNJbZiNyVBs9EYHjyNb6v86ZeY6FzCQDxzhTUYUcuXh17SRb",
  "key21": "sW2qqfVBdPbE8U7oXnkZSmjpgSchp9oNY7BeHbmCdMUg9poooCeZQt1zAxEJmUstq7S4DTRHECQD9VSDNZnKQp9",
  "key22": "4YaVartfWw6AUvT2Bo1QC1XdJSRbrpQPsmz4Vr61RVQQ23m52ySmSMnN3TdSXa2QxBkciFjupWeiwZqCLAwyr5qJ",
  "key23": "4KMK9EedGUPDeKy3Uk63RpLKwsNbCFJkW3pHdCqi8YpiqVtq51c6TFJ9RD3DkbwP1Rc7mp6yQUFrCyvFTKHbrEoE",
  "key24": "44HZHFQyaTnjqX4ebjUP71ZjZ7jVw2nFbQQ8UyzxDMakdUDqiJEx1kAVibVZHF5chQ8bFsrBvX1G9zxHs8hxZEq2",
  "key25": "D4W8onKDtRvwEMaASNafBYGJLEiLyctrAHRLC4y39ZQBSMLXA5aacZhnLPiT9qXyshfj6x23dxvbhHR1doNfH3B",
  "key26": "5fNqxBdK8SZeu2R7zekFFmNg7LEpe1aH1BMBn15XNchwhijHxZAbQhYmPMF4K5wUjZbrzxVCxynpfLCDz5DMUW9p"
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
