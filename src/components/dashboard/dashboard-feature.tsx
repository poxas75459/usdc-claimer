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
    "3Yh8AWiF7TQeDAvjqCKPiStWNcjq1bd3VF8KYqq7rkLXbL1iN6vpDZh5Ti8cbus3WiqHt4mXU3LmCzdBF6zAikPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s2DAJ2V8ceLj7GReDN9sPQecLPBfz5vutLdeJr1z6cPNoMyj5nddYZoTRUJqU4gCdc4xwXUj1qejvAQRbtVHRJW",
  "key1": "3wQhNYCy8H1Y1ud6Ze6BYVmkj6CGZfBmt7pMRhW78ykYsFfRMKLH4GxXqqy19jaPGukqzuoNfHfmiaqQxfqjq4VM",
  "key2": "2kTGLj7xHheUCKGbZqCb2YsBzf2EpM6CeFFfgn7qkULfXrXGJBkD99fJWCiYtSoht4L7jM5MwunnQ8fAF4S26z3R",
  "key3": "gAYySsV22Yc2WEUTS1vhdr8HEghqn4X4ho89xFBqc7125hXTbiu71mAV7hK3XUtS4A3wQdiCKoaBt51rX6x7B3d",
  "key4": "4v55QtoyTHFdvs2bVjs7qqkpNRZmh8mq7kHzMkxZ8GqHxLnA898xMW3UPxmCiPAfRaBVJVNmWZqXy57W6QZVGLHg",
  "key5": "53LRepjdPcu6KA464R5K9WPnw7uRhSXb9T4hc3neWk85gdnaTWAzrhMS2FtJCHUy8RyNBqqQAyfW3efNCZvnLNAu",
  "key6": "5NPpETqHivKRC5dnyrJzKsGrZfXB4Gqd9PuMDBDEw3j4gUjyrg58BVFgYNX4UXY7nxZfhgMLXNHNxTAVqRTkKN7z",
  "key7": "3wknNW8at6jMtdY5cAJAEqSdtzK5U7isZY82KfWnAinosGdGTqtvMNbaWsGVfGGt8f3c9ADF67oButaQTAJ81tRH",
  "key8": "4KCf2nufEjxatsydr5WZ8dQyk5P3zr7aPCLn6N1prKgbJN3QdhduF8XBgYuQjgKSyNCY8u49mmyNetMj9gGovH8d",
  "key9": "5x81PgWex2mjYMw1mYQxA6xpg7sbkEx7Ei591nViDY14JhipTBSGVxeMWJeSj8Qu41Q3g5dVgsGni6F58Q8oC1sT",
  "key10": "4yu5LEJZB3s77baHW3ECLPNdmvZuzN3Uy8Jpjn1hSBqShBDwBHTGNw86xaFtJxcGQCq5ssJg94wwMqG1BtXn5Ydw",
  "key11": "3BP5Bviy4UoCZAWy8RvCuitGhvjXxMEgyqYxMSWGaTk46ngrHyZgcHuXhrMVwkWw4eEZc6vJ3j1odnmECDiEsjKi",
  "key12": "2BYMqYxmw48iTXiMUJSyr1fbasBjJFcdHWAxLvVLeC2z9sBg8DLvw4v7YtceT2J5BYTxhYEcCZw6w2n41VufJgaR",
  "key13": "25v7RbNM8c7sUYtcsvqiPZTY3Ra9q7N76iEsCYPXA4nSfYoAiTqTkcoV3bUvZK7gQnpRRA4TM2wLkFKG5E6r1hTu",
  "key14": "3mYdQWoKsSMRSqPowmr2UANxGDcXVb5exEVK6iGCwKZ641fLmPFSd8so2buWAqNDC9KVQTogk9a7yUj8AwG9yJQf",
  "key15": "293B5atTjgsVjFL4NUrhwnyFtnCpxLU9TqwhatSWFmKfSeiFsxQwJ1F4AqFCYu4vvAiNp5UGs2NGKxcnULWxZjC8",
  "key16": "5Zk8rWSJ7ZwrN39bQ4jGaHRBEooKRmCMHt3c182eshiw9CUsrmkq9nS9MYV69V38ny95W2U5oDPkG1pCpxpuh1st",
  "key17": "ujNpYGC9w1dHaByBqYo8DXmDhW6G6GAsNdqWtYB8wMCh7bn4FuL3jFUuxcSBnLD4aKYKdRK94TzwwUt9KCxDBum",
  "key18": "5jE7RFmdrvDRbC3XaEe7S6pymrgREM1Bz3NGoo3FUc1Bm3pXYLBrVaRTfXqGVJSLcnqoqbKKqEuviwiMnYkjzt9P",
  "key19": "29fKsditMb4czWcHRSNbAafNkpbMSGLz5p3kGxaVz6faNnZtj4A6n8SawwFWZwiCipnfifJb5fNdH8rGhi3knqsw",
  "key20": "2j2CKoyEC36CU2AvcoLwywWaAWPWGK2bbm3874u1QQcbmmJNFQX4vk3rUyMBxC3tcsYsX9hXeHc5GEriJqDQJnNm",
  "key21": "3z5ef9aNk9r1CKqhKvYiXHdcXwPZUFQL2ngyogoyQ5NAfJj7ft5PNYeExi4k2HxMPks4xTsPfnGALhAB8G1fFVph",
  "key22": "3fPDsw1SzMCsTECBmFNBNoSbhX6caq2MT8aQ1wszayG59qspcqeLunry5Mzywxw3xmkZUYGWiM5EWJ3bN2U7Poqa",
  "key23": "5989Fkd4Mu1XGEd4YxYahnDkfHUdvQ1UtW6nnUeY2mhT8PMNUYQ5Xq3UVLF4EW2izqWg7BuWLJoCgfeCfCxuqw6f",
  "key24": "5hghTP3fweUkhUmcNvqt7FTak1YkB59qPoykxoDe7mYMXfFBgMPyQKfpgPbgzeJ44fUnqJShuMMDNpxs6gMz5SEb",
  "key25": "5CVjNtyeefi5iJTdHMLN9wjWevHbbaQA29KEe848KB6d7aeP6c39GpsRUpoxGPaF2vHnR8kiGwrJxG4LJTk9vCyS",
  "key26": "2CGGUiokixyFatG92q49CVLjhCGEX8NoN5H559jwbJgtTKoDhkp3rcZiLHqhhJJcHq6kQyprFzs5GjpacEPhMazf",
  "key27": "3oRwaRJJACsnroFWHtyyYXwj4MMFqgdBTtEDyeKrPDioGpkzHbU28ba5SBrA2r6raDAUEjhqHxqtpfumXnKNM4wo",
  "key28": "2BvKAT4HfPKQvvobwCvLJhPhA3Ko1zxfTkcvnx1W6qH11sjWMRgMBxYYXvmGG7c3j6vSDmkUgJa5qS235qKpzu6t"
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
