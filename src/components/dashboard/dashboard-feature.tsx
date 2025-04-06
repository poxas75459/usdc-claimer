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
    "5da8ctdKcZhpAXKyFxaPM1c9aJYdVdjyzKED67EwDVMZ6xBBM2KJeDVzbBSFwvsaGTTRc3UV9NYzhr4eTb5NmwfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hciQAWRxsyuXzxg5up5LHWtH6ZUw1znEPcreuaT3W1uaTtp4GjukiAQ26GScpkTS7TqefFxNF6j6GdLDi826Bst",
  "key1": "5moz2od5miXdZwxLRi551b2cvHvhz4NWUkm2DQvXmKacrfAtWa8xxodN4QWxKNk3Hc3BRoBFYd9f6RGAziZdt5h2",
  "key2": "3QDnrBUhis88GznjvojxopxmitbQYNUi3hpJEkpvdB7poLkXPnR4FXkC7nbbhPy6ovyyLwexsHsitCDc3XM8shQh",
  "key3": "2jzJHKeduQNNUrqLK7KUv54dEUZkiHEHEsDn1Y1SbC9JpqyLJ3bYiLZQRezPyxSqa4kXsX1cQbsRMZC7PrMxiHDE",
  "key4": "3z3QbaEu1bbAAZBAbuyaUAejom9MjxPDsBVSoejzf7gVWJyr9gYojCY91rxynFTbWTno4N9uPrhTPf2DK9uGEDdD",
  "key5": "4SnpwkFXsekucrGTE97YTa4YUCezxni38xNof3qMWjB8qyfcvyYBZaw4azNvKqXbyRFjAfWmKtDaSS6V9iKZ7vZN",
  "key6": "46j59qkV3D7CTpcDGiXNod9TGupjJ8aYeouRQ5UsqStvph8bYhQEcXJw2huyusHNfJZdsswWZ1bE74uuwWhNoRq8",
  "key7": "3MDXymJTVEhQJgt6zYkoyStWkrsJeCDGQnjAVjZFkA3sYF9LfSMaETAXPV197T58zfSmYgdWiWb5K5BqMThXUZMv",
  "key8": "eXAkiF5RYFTM9ogTT67oG9RAu7TAjDLXHUEDpmtDYFQcKwD13DTzL72fo7RRGvn1L2VB5ZM1LNTVphxMsctAb87",
  "key9": "29rHTbWZiH7ebHXepKDZ3DdAYKGKjdkYdNUWdoqso2mxyAq1DgX6hxQ4UHScfUxhkh3uPu8WZLcUHe9qKgdeSrxV",
  "key10": "4jdgf7tGNmYp9WVenX7BvT1SD9XQEx4gzeZrqzXgC8vVHgdnNJgjjUkBJ4v8Cw57psa43RsVNY6m9pS2cudqCHTk",
  "key11": "3jR7zREGM2NVbimPPwX7DLM24wchYLgGNrVows2WzmQTLJaQkB1FMD46zsdeDXLEeZYp4KA785MwnYUjBJnV7V38",
  "key12": "3pVsNEbfbx5f92dA8RKDY25VX5MvNYRjqZwsnhLYgeDEWxQw8gz9rJKqWgjTRuCXvccPey5815wQY6bx3RoFpoUR",
  "key13": "4g5cvCKpXkqHR6D2LavB2E7FUbYbbPuTPnifcNCGXAkKDXGuDTcUp78XxRGgjvULasxvzDfEN4rfKtpk2g4dzy57",
  "key14": "5ZYgNcYqxfL2kuiFPBD1qkB3svx2ydNy1ffuQ3SCYP9rgvCHuchbSeaVD4w2ttZfWWfq6ydhTPFhfo1tV3yCb81E",
  "key15": "3UFAyhjjYHETwR2wsBqeJ4LAe2WWfFLu7VQGJRBECLHegKw4sjH6eaetwQzY63rSgWKN9TRv7BVH1WZCYFfgyvHa",
  "key16": "4QVpGCCWYQGqFmPx8HDZM2Has2qyToriyFvyV7Ti9W4HduszF8yKhN1aHjYdrbrqrejgoXgMedzcuGXcDrysT3jP",
  "key17": "2uNVdQHHTn5NqsbsikJmhf1JGhSx8JSHTLDMoj7Dkrb1q9VjjqVQbfjivyR5gxmwdwCzucgssDUhoxHdjw4RZS8K",
  "key18": "4s71vBQb2QbCpNuDgcxUWzxy1cza4TJttvF4aDbFzWikfiveJbpEtkn7d4edNJN8tdpjDz6VdqM2XNLyGZ6qHoBB",
  "key19": "3GCaoYpTTEMi1KQjRgMrhjkuvD8sFtVq5RvgfF2rS4nvMKtor7VKeDgvNL9LQJJ6tkreFpnfegbCB6MhvXXVMMPN",
  "key20": "fTmTraiau8hSuuRx6s6qvhVByVkNu4mPQAGdae8dUhGV1GmJBfV2Ypasufxa9QfeWMDgtbsTks2kmT7PcMQiWv4",
  "key21": "3uvCLjgXxsEuUXpMyrsjQ1kQbWcWw81B4qUE9ouosUopZF7qMbckPRSovaGeiC891CsQxDrFPvoNvWQcvPbRcfME",
  "key22": "27h48vmMNuYqVo7Y6H2v2t3d2RjHSG2M6pYbX3oFcU8XYUcksqvfFwVmdnnYRfuT4jH5bP672o95F23gMYPZ8Lkh",
  "key23": "55ndDtzTuB5yQ1cyaRrBrZCJUw37LXkh7BzqMz9BXs5bJ1qqTpq5oxgD7PbEWmirDBBknvqCRWD9NakjRYtHpZG1",
  "key24": "f9dddcdiUoYs5NL6tM71XGYvC328dxrMpV78BpKup2VXucTCTy44ncs9UdH7UjLKLmA2b8BLsY4sNbS96hFvfEx",
  "key25": "5Ag571XQVjvXEtLoftpVxwYw74nf137KczaRrRskMgQDZ6re45yvgiJgmrA6ish2w6bGj24TbJ2sKpd3RQZoyzPx",
  "key26": "4KFHGsAmznkHB4GhQqz8ytsrwQf4xrfackugrDshotbTKfgSUTQJE1LcUWzJyjzbzYtsnXtrta1EW7123sEPkGx4",
  "key27": "4DGgVE2gdGKgAiSKEFSDacYXgxeUGK8eNe59C5QhxAjHSndnt3E6LxFGMbD6MZ1KC72b8qjqBr35oV597kyzkCYB",
  "key28": "2UuTMMkN7TJa9zDEifFwfQCs5TVYEKdyK8gGiVT83D8DKcFboFJjj2P4RMyZfkPqKPTb2qdfgJQ4xaxJjAjAVgAJ",
  "key29": "55FSmM7cVmrwyByHYRfFaXdw62jEzPvWG73Q1fQu5LtCGNSzFNNC3tjtevS3QkdHRTpYV9qp9stEa91vDevZ9vnC",
  "key30": "zT6fqtzvp4iw3jjNLk6JWSey6B4pvBcFwD4sekKzPxjX2TvJavwrX7sAa3hPV3CXyVBeuZ6HuRqQhy4kW2n9faL",
  "key31": "5zxEfJAozTVnHbyKyPCZGCfiMEJS3v65v7PRUX8kDYSP1YDL9GJH96dfpb5YC6ter9qavbeyxeJrDzjM12BAyT5B",
  "key32": "5YsAQBAJdupvLLmqkVsDa2PZbaQ2BjKeDRUi7LEzCrz7sTJLb9gQ6ntiZMCVmov3TtnYxJRkKxxoH5DBjsJTZRt1",
  "key33": "5v4TYxynKCJwXZCuGXZFSEpCBjgPpAoeVLuERDr31LHMDyaRUedf96nEjmSHNWQbX5JVETkySAJBAZYrx6ohim76",
  "key34": "2e5Y59EiHTpB9iBqt1PLLZoCPRXBufXzBae8oyQStYwD9Jg3RnRTQakKh9oponXawkzDym6qVye8EreVaUbMbmk7",
  "key35": "41TNrpTPEMHXZ7r9BMdfJEKRyHp5zhCsxiiZDUNCPGwUTzb5e7R96sDCMcNdkWas6QbT7W9yuSiWoXp5B56CFGxS",
  "key36": "Q29cSdRxVUZr1TUaTUDW5bKEyGSx7PSriEY62utMNdSQpBrP3bMsk8sVVhj24kFpgPMckmkp4913nLdckeqpxHz"
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
