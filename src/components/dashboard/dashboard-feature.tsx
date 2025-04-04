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
    "2jUqPvn7GcwqJ6We6dLAksQGMbeHTq8YQo9NNXA9sRdB1kyToc7bLYwhmVShjNCg5WVQZnmvssL6uv56h4wHwp7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23AXDa2nwbRNwkNbM5X2i3boVLyKsmByvfsybS61eLaVShSc4Jr8taRCtYHjre5cUhnbi1u66JKVgdJ99iqYGPKg",
  "key1": "uPkZEchBjxx9j31a9DhxBqnb8pGYN2YAjSs9BoJ3oZ6AxhKAqeZHSVzHMmXNonMysQJkFJzKxqJKQEcmsRJ4cyb",
  "key2": "2VBsjM69xtRhSPvg5bj57Vbfinc2BVZmexy8gFfqUXowMrZ4BQPjRoze91UwCKmgRHS4KUhJTULdVSEt1DNsQmFA",
  "key3": "2BxduBw3gJHiNb5JnkE6hteGFhCZKWSctkN4PFPkonnLHJC8zMWum2iNNGpBno8jMapKctZ4eip63rMyuMQdEv1r",
  "key4": "52gdvurX1MDoM11jWJVFVX58og2ceALaeg8X1xtusUKsrKDwsq52YDxcC67uMFjknEED5sZTpYs2kmcBr6HbqZvX",
  "key5": "4t9JjvwvKaNft1nXyJDgtLAZzDyuHnchbG7DK35oDdKdEWqbaHGG5w28YGRse8P9Ubk2iKyb5kAwmMUxnnvU2Ex9",
  "key6": "J48Pegu5cyQS1F8yFwBi9gdaTvnA6VgahD8kmz7zodf8HvskvmwWEHkmeRAUwKwEwtKiVTqszdQ4ZXwcMwrUUC2",
  "key7": "35Z5NuRN64DF4rzFnr1p4RTc88kji95itm6hrUweZCd3M5zJCcx3SdV9wtNbA9ykRTrKXHBsy4MnNGB3SZ7MvWPd",
  "key8": "4xfkU947ZmcEpX8Pdjhq1Y9SfuD1ZssoCf9oVMYK4Fg8bigys5hRXmHc1s5Va9Qm4FTFjox7waC7ays7bUD49nP6",
  "key9": "2axhW1tBHGLiStmQDK2VRSq7moWX84t719xYNvcqSqzoemLUzmUmzJV6jUYmF6pxhvLSQtY9RV919ESr1XEQvacN",
  "key10": "2W4LCqAcm3BDhQ4sJpNHxoRfpvJwLnmHTQSETKkZhbFaQtGiSq34Fseg6bnr2imJaXMD6XpfEH8oPJGpJr4MMw24",
  "key11": "3ejZEpv4W2txbosnSNGdg4S4Z5d2KxWhbH7Q5hshJKLpQRwKz9iHmzMnPCNVMNu1bLQ3xDK8MJ9JcUsETdDtUUtC",
  "key12": "bxsNzQJpoR6dJZg2hk9N1jTT7nfvrMdSE1aNnY1FoB92FaxguPScbo2cqnhwC1ZdAZC6q9JZ6vgpYUYg3RPtH1w",
  "key13": "486ddGrzer3ZZ7B8ENhLv3WQETqpCrhWmfzBYtwthBKZmLEzdvdM4ETTkdZRBovBDESTtiipdUybTPuDokkZHkV3",
  "key14": "3hVcSmRu15mJ76UDjroNXQRZBY3pt9UQDCb1M1hKds89NS54PNBSXxv4PTmaVeaGeSHNyVKXkrxYCDXo3kEsaYEW",
  "key15": "62vGmx3Px3zdR6wFxLcJZ4BYhTKQXisEi4WHhHNz5q46BvqDzVbLHa4kb4rCvkND461jNCGhdMioAxRxHC1rTchD",
  "key16": "3cQ8WvEKxMC2h93V1fKnf5DDYq6KnwqYX15dvSD1fv8LjZwfq6CEgjtUy66HWh9vQMCK6Y5gZHTZvsEvPJw8C637",
  "key17": "pty7M5crBc93Hs5k2d6kYmdX75cYFrcoTRwsLD9thT5CgSQqaTF8jwPik4CwgWbzsfhWw3ALixLpXdVnyv64Yg7",
  "key18": "5gCGnyDTLJPav4VQLLw9ktxMLsqYXsQ5nf2isxQzkeXkNAxv3uwqZ12UENKGgM8vydGSfn8URNwhjZaKt8BaJVx5",
  "key19": "cuMD3LQfbWWwyEx568rZ27DyrDX7Up1Z7mV5GSGuH2beDeuy7mHkWRHmtfroeY7yamxLLRNX5eP1tZU3s5NX3bc",
  "key20": "4j4DY7whHtcs7U4ATE1iW15na1Ngo1XQQt2WSfFvSp2aFbK7rSZUijmFvz75XFHeh7oF1YrogmwzmBQiVm8hVt3Z",
  "key21": "oDTiE3KTw2bZvpBb9gqAcos4RPY4GXeJd9uYtUHgRQbvn78eFNuUZmmpjcdEk4HHKWkyEM8CUofpzWvsVLkbrvL",
  "key22": "24bDZo4aoQbb2LZpiFoVRzJvh81i7M81qiH4rJwkKXmA6u1NakJc1q5niV6VSU7eNdSVy7RG6mGSHvmSbbNidn99",
  "key23": "64T84HmfuWuNNgtZ2nX8fb5kFFqtc29zVQjHvFKtNo7EcFcXcQGYFGLxGFpR8615UcxpEDmvEEyhKeAA3Bo3iQAS",
  "key24": "3LzqTKr6Zo7YpLC41D49YZfVsSoXDadymyDrn5q6bNj1KUJpaexkgUYTgAdLxWkkXotKmj1HPCcGFWqkUKfsVVNc",
  "key25": "3eAsfRnkemcUT8A9cuv81Fpd821h8vPqhTLYQEP6vDkyj1eLbzYzm1HKjrHTSv7zDH31mz31jVHU68W28Gri2g5s",
  "key26": "Rq9TMddoEnXPv1WboPhYK3xGgNfm4okbr8E3egf44Xk8mqvF98J6DH6gAWbEdTJULTb8Tw3Lj5vMBmtNdNvFm4x",
  "key27": "32FfK3wCYgBJf5vHAee3bk83SAKiFvyzmFzjLt5V3UA5afCDdvL17EiG5T9QdEAjuwpX8Ry3TaxjzTFHCVimPWJA",
  "key28": "4M5S2NVvrjzhiFJBCNTkkgueCsL9zhzxatUgLWavPt3r6q17sBtBqqbD9wc3hgumT1EirrLRpb1EwtvwzXxWrGyX",
  "key29": "2iUUDXTqyDzKYwqHXHDgYs3UjP2C59KimeGCTPhyjytWcNcbgvoh8XZDHn1S3ra1x4EX8prCLFkXiqDaN9vpz7GE",
  "key30": "2Frqj2wE4QJDe7NqFAr77LiLTxjfcL556dD67KebL7CGh1fCyVcP5oTZWn6qLKs6ToBBVejEcczYnmQeAucsZvV9",
  "key31": "4SW46Pr9hGXcPXp6WqGv1zWJh15THB81YXKJdmbow9DhWvBFasw54BFb3Lbo3pQ5ur1or68bnHRrynfSWDFjmQEw",
  "key32": "4sQk4pqMNgwJL8Ds9mSP6JDD4a2bgfJACvdCA74JJudGaUW2mJLf8a1fcSGimHnULz6f2sbTRd88c1prxtZpHGmQ",
  "key33": "4t2gpFU5LPmYgzxkwAhNrSpx1B8znVpT6dHXnbjwiahW7iaxyRo5TPtTrWDtZwSP9SS1nYds6pjYGytmVeczezpF",
  "key34": "5gxL8q6WvgVpX6AUsjjYu55WoXbHwMcJfsyPvn7tUMwL7ZnTkx2FrpHnhJtcfggYFo99zeKsbjj82Kdwa6uVe7aE",
  "key35": "3cDggyLHRCU6HdmbxCudPEozqd8FnsifLBNaXnp7A826RcWnSoLfJovrWn7Wnp3UPwYHDen2hNCmXqXecHghmiiD",
  "key36": "5sVuAcpDnXKHzLED58b2g7wRCnAsns5AL3mHtaniucrh5BkcNdn6ScfSpcDhA6sKqR6g18PpLXEQJfLDdcpJygKg"
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
