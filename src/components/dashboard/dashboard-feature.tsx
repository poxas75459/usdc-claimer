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
    "3qy7WRh7mx2y5msarjhDLch3iqsbfk75xHNwuQuwDdzdSVdvt8dy7v5fCg2AjzSgB8imXSmYG93ZqpSriB1Vf4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSp6ABbHsc7RhhBTq6Y9RAf6Xw2rGniygiCgb1SamduC9PKiqAN9HL3AaxXiETT4kepfEipBx2AVZCLJJoRbHFt",
  "key1": "2Px48bwfdLRYiGTFyNRNtFd1Mr9rr1mEsbiTMAEeQrrtfSptzzoNEKTCHHA5qjjqzH5Xpz1oxATZo9mxPi4qKPXm",
  "key2": "n8Rn1axJkhfkyFu12CVy3C2YbR1PaFvPgWZC9md8RRAGsX3LrcbsicJxbGZJWHyXB1JS6eRvCz9fA5ZEKvmCAZR",
  "key3": "5wUiAVTZhA3f64WF5kJ7ihsDoSpkxK71tGfVpiq3U4S5BbreoCFcCNcQAcxpWvBcEttCoWFnQPHLk1doaDLr4aBr",
  "key4": "uRQLrizrR52JP74bQiVya5qf9aSrghyh4LrxS5dAkrh6yz59hFZDByv9rHsVWap32w7dYreCnpSPeijBhBNTEgT",
  "key5": "3kfAH7nmkm8mLGACAZrFcW56aWzL6wTmujqJmhAb2dzELeCYZrepKFtHRWcmSAjbheoW1cxFvKPzVmq1h7WgeNwb",
  "key6": "4HN3aPMRiVWjF4HeoFXy9KVgD1MvpJWYu5KzwDNQWrY7gdPLHaaiQFiEQyrT1ggkGKd4fWjs5GqsnfZnHDK4FFiP",
  "key7": "4FhqsLZyAUdntjiuihcxR5Sb3ujSP3pv829Z28XicYLA8BLXK6qSk8t1wZVaY1irMRZAhVkpsGUgNp7cUSAV6zSZ",
  "key8": "4R1TxUT2TxcZkVLEMrPS2MzYaeV68Xa1ErVW7bhWSU2TXkgiPXDJLx4sY8Dyuht4yfod4udhnjPkjWEZT38oSipw",
  "key9": "4N37py2NsF3x2N3inKQ8MgHGGByo9mWkhtomgzZQ8hMjp6d8KXXx64PxHWemsxNHkFo2udJQ1B5sLSUXX1qcRkVx",
  "key10": "Gze3uHnxNcSUsZRthMPQEe1Ls9gmMfL5dwadceQWiV73rz6GuwFHsVqJtJ1Vrv3HGyzKsfF1DnEUJMpKrHoSfVW",
  "key11": "KHTR5dLGEG9MUCgBqRZMuoPRRgZCCAVrCXTUq5hkE7fcf85FqdWo1VqEdzVzGGr14WXghe7W5kea3LKqGiMmc4B",
  "key12": "5bvE3GNxU2ax4QwDFFMi5LBimqfCb1hafESmRS9cdcZqTjxoyZo9DNU1sMZt596AJReM99erZTV9vpomMTGYFkfn",
  "key13": "3Efj5yvqE8yjTSJedQXC5bFa69exQxbmLiSxqBZA4aAZ31pqo1RrQsoqYayWGnucdCqv8zGczwXdx2a8iHNi6Fim",
  "key14": "58yWWHUokdtzspv4kBSN9UmkzdTVzx5eWVr6m37PhXwAav9AfRgdjgHUQq5movq1kND5fK899jK6JRaDUQLf9q16",
  "key15": "5at9mAUzWSxsAb3QA2xs9JDPL8QQu1j3HsBD6dKwrqnVGWyqNWDSvQ43viDxfiDQ4Bh3iLwXtdyxRsLzgncHdiHE",
  "key16": "d4uzBBiUmZkhPx49kUDeG7xGAqtgNpW1y4fndQfjhWMZPNokDyGFCioLsspeA5yERtZhvjoKpAHoQ5745q9yGrr",
  "key17": "5qhrAvmeKJgLLMRsZBQ4nDLqBY8w4hLW5DhH7SxWzacKTuNYx3rMQJwePumi5ipTQiW28Zr79RLHKkQFGbVoXSZa",
  "key18": "oxnWe6L9DkPVhAcafMMJRUBi5erKBLrm6X3FZqEJqPhbURuEoqWSbetSyC4FQUd7Hqhafw9baWgVHWxtQvQjhzC",
  "key19": "3FZARQxNVhJ5Cgsz95CHspjaWRQppAtvm26HJEMJoQP2jUSdp3rhCQJhTzjXE98mD9cTBSEvURPXoSXu88jDNiot",
  "key20": "5JWG7Jh1fyoq5p4h5DeYe6FS1sNpFiteYgSA7AcEdstr3DmUEbuifW5x4fWPHEWXZMLCArgZMTTRaDdSRPAP7Lxz",
  "key21": "5qXKXwfc7vnzXGBjZYtr1SDX4RzR2QcuTAzi8KxtK9Rmbs9MJvxgf7tP4ypNCHztiVv8bjhDzjHoDDVMFoJwN1PU",
  "key22": "4dTKFrG9zNVrr8p69GDLY2dWuQqmUrs2o6WmybwyBaQFmCLYKKgPkJ38xbhjvq1oXd5kJjLzgoftqAC49kewRMdo",
  "key23": "TqyBr6qFbPuj55JvF1JX1bMnYRGvG4htXFT5Noyr5Xv8vMN4F7XEmVcGEbGm7aMXYfF4tE7xcJeaVv3nA8zGpLZ",
  "key24": "22A84QDiT19SKrQntBbFPsikzL4GC8euYQ8AL7aNRr2m77TvjX9zFeufcjxUNTT4wgDGewKawzQkakrjW7AUP6J3",
  "key25": "5RaeUuC9D8yTd9NEpicEaH6RX4jVUXZFu3o4HC7AEhDBifMu8VKd8sBxkEpTQxQiy7Hc5T23JPy2bfGG8eXAZWjE",
  "key26": "3G1NyZp5aMZjGMKJaaQPWosprRL5rChuD5qvfJiujjEKDFuH6krmAzx9C26dPUJhGn29ZcRyHVocZzB9uUpGBiKc",
  "key27": "36Ng6KHvJfZ8ksd4wnBpnH3Wd6KEjFyRWjSDKWNhv3FUvU3aU8Eygd788eh7mcpyZ4D5GpiNrsbSw8pbWJNrbtgL",
  "key28": "5o4nnCp79GSTdk2pQ3a7EjDTQXoS37nZf8xEuBAzoMdQsSNT6iNywxP41BTnXEaWVr4Sm7BKbfFYS8YKy5KUG4Zm",
  "key29": "XDEDzgAaCJmzycJP6wHqsGcXFgFGp4QvJ8tyhvSJDJeTWT9sPjsrv8C38rCFriJ1G1mfDvdiRD8fRsrsKUednUC",
  "key30": "3xw2z67bUonq2GGwtEDC1WkafuiBb6th9kdpyxg4JRE5rL74wxxPsbPFYpmhVakdq3JxjKTighLztHCp2PRWzB7i",
  "key31": "5HU6MDHefUaJbos4TLexgWWiUY7y1f6yTvEcxGi4H2bh3bDQXvZL2Wy9XjTaykr9jHB2LeUXXrKjJpHcXP9CAbRk",
  "key32": "rTA41fTctdfpSNZjthQygXzBSTvRZ6krti4uYG2fFiAWq2oJW7Xe1idZAWQoFJABdc8SMhuHeCzRYNPZ7spnXEE",
  "key33": "qVY4zTFu5gqFMQZGi2ECxCd4xiFXoSDcrUp97Z5zSeSNqhP4aqvJTtEFpkGxt98eX8Wo3qV3Da173ezq6EmTMhD",
  "key34": "5FBfYtBTYt1DRFBjFtU7p2aJ6ZEb7JbMqrQRggu5Q3JwvMaKp587zRUvFpY3X9pBrn1egACXwsCkdh4UmoVCto3",
  "key35": "2mPkaCgypxP4unh8U52uj6oEqYH817zbxk8xiFfMW6qEiMJKNuZ5mMYEvAi2K2spKq7ZHARnUMcFXsWLwMsfTUFJ",
  "key36": "4rDGMaJoti6QwdBPckSCQkQZugJCcJ1QmXQ6gmqFsgdHmTBAZkXkGLnERTkZfZE9o52vLS1X5G8oAVPPshoVM4qy",
  "key37": "LS8TGKfNKEGNzorvdrmCPhmS3hqYruARVYNVUc7pFG8J4zbXS7wX9MXYiJVmoK4tSdxFfrY86oqCQ6agRixYhd1",
  "key38": "23zjaqQUKbnpdeWQyRqcDd94LTyVgr9pmnYvifyiueE7HmtTQDmqAGPkFYm269qkoVhj9u7rDUkdRnd3SLCKHhjV",
  "key39": "5guAar4McbNdcgsNaHpFP5ADRZkSuvsLnaXgeYsZwXjqWR4YwV4a4UsvKun7iGuQsT61r5xWbEJtbEwjYhr8Cm8N",
  "key40": "5tMeHbUCVoN67SR17r3iwv2kQ1n48aZWA2bFXYaN5fHuoEPuGAU1wJKLKN9o1oWdxrb5JhScWn5ofQegNJsqtje6"
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
