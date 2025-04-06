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
    "4eT1vzKRjJoTeAbSmvQf9p6PWBZPt87NCY8ffK7hPP4NF65AFegTGKezrWEjPrmA7v8oH2zDpVtX27EwPjnpWsE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R6Kb8bcUpUQJb76m65u1FSBgVT7bgxgsHzux1sYcT57xweoyYqYWH9ts7UgTjKoJV1PQiAZ8pG2vmon5hCHXDzq",
  "key1": "4s2qDmruxXuwdQ5Cwr34HrNfpQ7DgErkJwmjADS2mDiew5SjTTMhDgzJC177cemu5zpQm2zN2fXqbyNfm4aGFBU3",
  "key2": "3poHwtLbUMKc4XvqqPhaWHD6cDJRopb7ECvfcnUHrf8MaVFAXpvHyyyYXtJW8vmDmTf8ZKF7ivbf2iJi6yiHuQkD",
  "key3": "8kqjmT3LnVjVejYnYvZdgPREaTYdKJFA89eE7rAvJQjnezzAhHzowX8baiWTsivgoiv55aKBh9CBAYk9AJPQgzu",
  "key4": "42pT5cf1EbCGgYSkUQFqxa3akYa8LiPm79zZgcTS7pt6aewnFjzj6FRjfE8UAQoD88LKa5xW7C7MN7SfUb57gDiD",
  "key5": "5vhMdv9rCcznqxGPTYSA4BjH9HTRgnzThVKHMCvvApd6imj8q55WF6DekhNkBsbsFBJxzeLbJSP6ST9sFLnYuFPW",
  "key6": "2KJrLvo7bG9e7Yoo3XxCX58wqHRYcH1vyNktM5R4A4dKw2dpCrHRwof2Nj7eDtf8uoC6bv53DcTKKTqzUpV9Xy1p",
  "key7": "3rVEYGKfhP5MEqUrjdaneYJANxYT4h2eyf8a4tEbB7TNG8sKfpW3nvv9cSujAHdxSgcBKVwFzDvKFKHw13Asjz51",
  "key8": "3ubjbNpzw9pKCGLti6JufhpWaw4CeoXiMqefoPJQ3GwGRPeYcz5VzqS5UtcfFiMzWtwPaJoA8uSQmTNYtQeQEvjw",
  "key9": "4nWtPcTrqbnrhBqWPcKepwE6QNLENmzpdCHC57gXQ1DERQCEaRMgXd9YMTVDk6rWhi8ssNjpuQT2yLRAwfV2eUyJ",
  "key10": "FLhMKH3FjzQxG1iJzVHmr7sPHMco9xxjcw3f7LM1xTZAJR9qqCuzDhWvbFjtXoZYiFLLmndsqHD9mQG43M4Qe7x",
  "key11": "4fniJNr4qG6DCPiC1gvjE1p1CdVLgKtUZSZoQju5goFVx7bNMKHT5HdHWNnNuZcjiP74vkyUFgoHjfSmw2UR7zfJ",
  "key12": "5zoLvHsmE14icUo4ZPeng1WLHzfYLLRmpjD5hVosg5KEQfuwtsSZoJjwvyL9DBQc8e9Rbf3p8aiHtwSgXnvkJSzV",
  "key13": "2wqJQyfsBRwF7oTRgfox8GWN5A5FicqD5GbDvVyt2a6dwjUkbveJ852rA1DEc2TSCqFxje9PYgqXe8CTWGgtTpn5",
  "key14": "3HU1kMs2kqHFV7oAiLuyezN4JyZhLpL3RMcbh1RFD9QVgSxNAJ9jtTDqwoaXy9yCvWYEEXDhhhv8myNfnHBmVKyz",
  "key15": "3AVmFymoLfBf3B3G64qQ6KSbWhUzKagb7BzWUNB6ZZ35JN9YYHP551Y2qPQhT4uDepBFVH63zeH19icykLww95YR",
  "key16": "2gcack27z4j2MsGJy1y84DghVndEAK8GCAL1rf5W9hvqQH3swN7oSs8aKwSxj9CHVGzNmC3guKpCP9cqHub1g62Q",
  "key17": "2h55i8aZh6xBBE2VFsiRbymcrzGhU1UuUnHZqCvdiuhZudru7qCfQRLA2PotqQAa8MLLcKo6qLR6Ggza8UWNEPhd",
  "key18": "42ipq7dRcqqUb5FNTuyhR1Jh3iY4HTyQ248VUaKrRbfuMSsUsXCiS1XkRvKuq4Sa71sN8zqtYh3BV5RJLuWrwJYZ",
  "key19": "2kZicuaDDQZEwzmnGnvBdJtuPLoFU9Qkcasq8Lk98jf2ERyZN9RV6TbSdUQ2nmNkgx6iEQjG3NquQu5R9zLs2pfM",
  "key20": "4H6oGfhDL6hPdv3WZ49iPszY4P5N1etbLxEXNtsHZEJ7vdbYWJcRq8dz4sHN2W3kS6uEiL3G77Q6PoEexLp7M77L",
  "key21": "weW1Sx516N65zE1i12TtwgwoLF9ydaSyVFah9k3xaVzwzwcsYK1yVF5bHSbCVsugh7DvQBy8rDkzz3aBJbUMeT1",
  "key22": "JFa5j9FaRNo2fVZdGrwFFTd1GGBocBX7LiScyK9B2Dej3C4W32ppr1Zr6byS9Xa1Zjmm8tZEoFScP4mQ2BzcYvu",
  "key23": "wU8HDHKNUwkVv5iqAVJXgvi8k76e5nHsnGt2K9CVnusedDtVtMnCQGPRJiAs62CQgNVb1uFHjEyJZbRobsQpNbd",
  "key24": "2ha6SkSfsnsqwm89SiUtq2SWzKbnw6gthmemgkHUQfwZVuTeWXCmkJZ21RfPD29HcbL2qspB1M5nKcyxbLewUbYG",
  "key25": "49mK2PGB7ZCfzVA51ptBwwFGT3Rd3x9yAvcfdcvcRZcAj3ES3uVt6ueZdH4ze1h36P2mhHEx6KYZXZhUifsPFtPG",
  "key26": "ckS5VLn8tH4zbeUEi4sPxeauAXbrpeNFWR8eL9jYJQfGZKXrPpJR3NoE1hVAfM9FirngxJaDWj8wLWH4cit33UQ",
  "key27": "4QCE5CnX51vrDJFuEyauU18VThfbDvN8U7NqfRNktEBhNsAhtigjpx2zDunM3LEjMiKL8pPMbvha8JDoe3gdJEp3",
  "key28": "49WFUGQeqH9b2FxzWMAmrULPuVGCQCqEvCstAZCRPj6V9Lo1jweYRJY7gXn8oeNStW5b54KF2Z5CPbMFHTiKSnYF",
  "key29": "24odS2Lop9BRRWyctq338USRTxck6W1iUQATdx9KNhKXGibn2Pmx7GuH3QcrWRahj3d4atd6ftGivbBp6ZG1uiiH",
  "key30": "3eZA2p3szoqnA3xVgxYTAA5eeqMdTVJwRRK5PAiehgoFTuN9GVu7AMT4NZu1Sc3Fy4TJMsfw4BtpYCz8jvAobUm1",
  "key31": "3NtYPUT4DUWoW3owBbaQAH8Di49Ua7LHrZp3EUYGrRzjxd6Snikst1DcqbvzYue4fwSBJbTurbE2BXqwaxtAfPEE",
  "key32": "3Zk5tuRpMsqQqit2JteXpdzzGFjnK69whk69c5TujVh6YLCGGxEu4FeMduJ9RMMLTWAfEy8niUx5JZGpge7YWPLm",
  "key33": "51XvGSoRTed6ccCCCmWQ8Riba9zxCsjawSqdRxmu5as43YVVQ9iw8CDGhz2muLpZFZMt4xW2n5degqBz13HLw9UQ",
  "key34": "3DoiKvAEqn8BLvYeTJRYw8YSv1NSUeoUjC5KAmQAfe9RShwDibCFizYEBP24LSZED3hmt5wzFcgpxoxNmXxhq1eD",
  "key35": "ruEVtXHKiHtPsnd95KdoThPiaQLvZkNtQz5awnwiamVj5rcHHUvDcNZvwao385Qt6CGgybf8YP4PnP1kAvcZ7TX",
  "key36": "HMqRNZpSv8yMdEnVpLcxb2fjpRFwfyNYhFnX3kXqPSFdiy6emiYbX5RjCsQ5Cs6o5qHJPDMFJRmJXncc9p2D1j5",
  "key37": "24DVcYYLD6G4YNiT4998aRfVrWByLXi8TZxfXkvnQx6kM2dcwxdmUjy3eeAfLGA58JA2vzUs3vtBbyFt1UyXUbSt"
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
