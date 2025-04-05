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
    "sMai4SrqehUdBKD95XW8nnqzWP6VSfhDe4YsVYmuhZerX4VtUHMVrAANKu4PCnuJDLTufeiRuJCTPsGM8DDCir8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33BSvFcBhf2ZcLPhnt2YrtLLxzs1d1K2nv5BF8932JFMbNy6W9hQBXkXZyMtDqZF4zJEszSAgbfLTWWMmjUVXGpM",
  "key1": "2Dc2nArKV9KN9wAU2Xgww7C2tuwbYLD8hDQMBzMZxdoCR6YMv5osgEP9weLcMjtxx7KwLoNd2Rn3sddnbCurLi8X",
  "key2": "2SrKJbexSeFcWiev6CZ7vvP73YQu7GaUFvD8HYPHWrEesqiG5jHVfPewcEvkgreTCLvzavYbXEkNasAsdNzBhf1T",
  "key3": "62moanAqcwGwHsRT1p8jmUAf5Ap2riaURLZefvf53DZS6QtiFTBFAQoq5Zp5pEaQuswsxx2JJadHzUawfsMpPZnF",
  "key4": "UGwcNufLLue1ajZGXKufpUXNW4rmQ5nozns7suo4xpbZ87SQib7qmvgif4BJEwyh6wZ1G1jUnGK4DTGBqi7s8aC",
  "key5": "2HAhujMgFLXefoxCz6H2BPbhonzZFB7u4dAKSz51pxaBY9HuD1JDhUvLAyh9fkqLbQTeAfnCovD5X33zB3HeQY7R",
  "key6": "BjJdn2SbmkRz7xCB4ERjSe6G4CqLTwBQPRSLX53zk42ENFqBA9h1RbGTdXGPXs1htGUzuDEH5s5BURed26kfxcK",
  "key7": "FvFBXNrG1dJnpQR5crE5iE3vDwQChZbgWC21AmpeR5KeWwbCRhbGunmZo4kjDPBDysNjpvVzoj8qVNmb4Kvh5EP",
  "key8": "4NgszvtBxesJA7mU3ecdrNPYTc3yY1UqqBXNFXemeZ718EFiu9Y8ov2WqmU289QvpkBsz8QC5aNiXmN1z5qbMvWp",
  "key9": "3ojoNcrr982847Z5n7sUdvyaNdXrrYMjb5GEQQgY6YNgD7EyV59jx3tYuao1vYkAKUfQyDzABK5aecrqCDEmXp1g",
  "key10": "91yJu3DyCjQkVBktWHX5AwxHYg7N4ZfUNvCvo93sXPbd2WzNErAkHMEuoXjDyEHebc8obZ81hYZTAxKHisFpgqv",
  "key11": "BP7FsMRe5YSjFMEj8YYkpT1fLKeFnk6vbqvdZws4tdzfr3SM6ehNnPHzMAWHECXNLtMwPvSCdUH6nFqahc5jnrV",
  "key12": "2LiSYEuhBghe2YRhKPPZhkGPQKGUPm3Lmiep2f7hhBH3hHfavZNLUMi1ra6Cex5dsCRRhuVNEvboKQTVWBV5TKUG",
  "key13": "5jXaDus6nti1funohFuLe3FmyzGhEnUcLCr2c5AixUjZFVZHPUsTd97xqpAvpQGfF9HoHNvYV1jzXK1EBmTc6tzN",
  "key14": "MC5hvfDBxh8TLqPFdhvcmQdJoZzief7bobnRNvFLoUcPJRifeiEJz91BjtzBVrKn3KChmaLqcPbhKd2qsdBwrFd",
  "key15": "3fS5DcFibwnum6pAm6SyvGaCYuBSdq8oQWfSX63NmZkURKnUnEVTV2Q9fw2bEX2rNMaVsz75bF9EEhFCsTHh5Ho8",
  "key16": "23hHfnYdBcWGBFW3YZd897oCyFq2wVpRL4V7ap2MHDjfGLdUSRWSPQYJB9wJasg9qQAzokqv5kkCFvtgVLwxprzN",
  "key17": "2gaW6Q5sZYxQEb63gQb6XChBNJDZCCKBwQ8SPgoWdUpfjv5uTyGDuohnqqyhXpfEGLhYAyFB1TSkt5UHq8WyKgPZ",
  "key18": "42nKNHXwRnMR3sn9TVzbL1WZAKnmKgUzBL9X7zXLtHUYNitXoESvWMKsdcwaU3iYvc1ZRnCZJJALvMRojPxwDDqi",
  "key19": "2MvQFdoyiiV2ZimgFQvnfbpqfLNMt6S6E2XLVfu928nzKZZSnFH4LVD1hkouHREkKjqcy2Hqjf131gKtRwib5cai",
  "key20": "3HNz2SNUma4jFGYQSpD2JgpCUA3UUVZ3LouJrNZEzsci9BKrUCxfKZRGeCeEEkM85WH8KUAoK4wt25H9LYRfz4Xi",
  "key21": "C6i8iTc9GMpYv1rYbyenJ4mfYwxg1gH5LQ2sZSL36BVqbmUXFA3uamyBV1Dy6f2mY6Wiub5UfownYbD4ZcXU4fz",
  "key22": "5He3bHm7mTWmQ26tkeZjBrzKPkmn2hEHePuQjLSKWt2v8dy3FpsB2tzQKVaADBknwM7kVuXz3AXZV4foeaKX3sYV",
  "key23": "5WSyNnqT4Ssiyhe87JXi8NJBdoBuFGViKd3fVUVSbwWkm8dq5HQX97HqAb2v42tRrKuG7vJgxU9tBrEauzgoJT6Q",
  "key24": "3j5rZKFZuKd2MpxSAGWxz7mW3riSreR4D18J6fM6qezzS9xQLHVHPPNQn8UDYmtv78oLRi5FbcEkimPHa7tBJwyn",
  "key25": "3eH87x9BDy8wJxVrGYBkjWQqgiNqLkNNVs9bZUkUCsjnnmeHfRwuGqkcBZ6Aq5E7MHRFsgHrmmNb7qZpzhQC4Xqi",
  "key26": "4s4CCJhtD6DXj72BtVD8tiEfCSxqVVbq92f19hWXcEed8NC2Qg945dYtPecjZ7XrqjBb4X81ReymYQGKawBpHegX",
  "key27": "uyEGZJGnkSd9YfMZnYTUfWYmesir5F8RvBE8ynkGHm3Mxv5yvkdmZytsQDddNu7N2paFTFhYzmhW2xox3yjqYjq",
  "key28": "4zTyf1TXQJrMRogPh3Nuf41x3sBtZRAMCPcv1nJxZeegZYJV1jLSynpS5oQnn2jbyC7kMytraX6rAdvWFiCLpoTD",
  "key29": "3Q9LiaXRZxqXEJDgtLhXNXRnJyVp1wJ76b1Xz7VtmyFThKAReVsQUrzcPGUaPcgZCC2eJGdL6yjn2FxUmCFKKSrJ",
  "key30": "4RhJ3A7LwVMRvrGT7ZAACsd8wWZixpgSVFqVPVRcXiFvtppFuN8HA3kjZ8T8qbXwGfktTrFnSMQKRLa58ywaia3t",
  "key31": "4iY6a3tzFVkigMnWoNCq7PU4EeStge4rhAtKnC9XgU3a1mS6hMAB2E86Q49kepKkrGBHoFeVntksA3AXoCjkLyf",
  "key32": "3Y8snyQmrMoVe4WAbrnEjochYJ17rPAHzYzVGbyx9owLVzDdvYXKvFe7Zm4K2RQMkyhtSa5XNuLK7rrQyizjpPu2",
  "key33": "4wAALbHDZW16SG5XBsmRFqfHoMvjZcFXmQoZj7pAGNHu9EgKhuQvR8cE79NiectS6tAGUXnxRJqwscYnP8R9MHba",
  "key34": "2WF3NZcnLaFCY1gsMMyE8wCy3jPw9Vj8Yvas6Ph3xejYqc2fLZ9q5Dw81AGTnz4XNfqMWChjNg2tS14J5ioQQ96e",
  "key35": "HpvV2yp9m28UTPV7ZuN2RvxxG2jwyFjbGCkg7cwhK9YMtEihfWPfFFQojo9n9fAjKAdG2CdTABKDJBsqSAW6z7J",
  "key36": "53DY8xT6p36myFt6ArmNwwrFtKZrZGsW998UtCNw2tp9fiyyujd7n7zAL4sdSJ8Dk7cXv5CmHfwNGqeaEcifAHdk",
  "key37": "4WcVAVEnmzCvh12DqAWUEWRgAtgChRzcDPHPHZG1Yu3pNXmTiyAZ1QVY154vsXpxE25yNS77GYXj5RW1K67q7B5Q",
  "key38": "3DEezdLTBYgiWc5ygd6FPBPdNr7xUGGVy5KgcQSPB3kjkZVMa4KVmbJ3nvwgMfgNnGPnLEUnsbBpSAbK7zrDYHdr",
  "key39": "23T9hiZtWJ5cgaU4eytApm1j4fo6DKnnmSwbf7s6L42jXf66Gbeey4ykDMKt8NRinsWbL8wp6Qys4K1emChVpJh4",
  "key40": "2tytBKXH3FFqNWEikswp7o1aBZs9qvorbNVyitSxgs79ngfiVabYR6MpUrhRg7Ydwf4tWZS6iFpHW3PTEst3G6fa"
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
