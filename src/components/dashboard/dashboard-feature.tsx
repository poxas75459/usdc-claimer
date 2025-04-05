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
    "4PLuxXKAHMYdX1JaertAF62Mx1aLfSPRK66Jphj2QfPCCRAGzmzYmfwZE93BW3iNmcdDPV6Sqxqng4gvUQMuHR4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xxLiCQPUdQFR5QNyCnwsH9qe1HbMFYFvZe1GBmk7962bqqZv7enhn3dkNpkcZ31hwrKFYAqB3Lr32zLr1zEZ8qa",
  "key1": "5jduxHsT8SVuSPv16g63f8aAMV9FLWmgyNBND8h7rvd7PbDxA1VAaGT8kQPdrjNYosRNXKvjc8KRuSQPBGUsBvtc",
  "key2": "2NjeE9GRPxnXZXzWGzwKumarqMGX3Vaj1j3kvLLPfwLpbFLJdBtLMwN3QYNNRpC8Ax1KMhFfAJQFW6ZEvvAcDET5",
  "key3": "2GZvZyAzp83ESU2NmuPk9sKS9k11j7c5D8gZet7wnTTYjezjeL57iR9yn66hFKFeNhzcJaRKWsVEx6P2xjitK2jT",
  "key4": "3yKSeZaaZyqTCbxgQ7cjtFYu69xdN1571UDTFVzcACuFzLBVmM8ADJUwjVbbNwQvx3gs3CogWGzGbWFF5NQsypWC",
  "key5": "4kjcqvPU4YysY62r777CWRHaBcpC1HXDf9xjstpFY4DFbcJ8NJ8uKNuwr3HwNMqw61YQiB8TTahS7NEXZ9HpmP8D",
  "key6": "25jqhPjjAv1LKR1cx1mnhyWdUn6MVGcmSM8bXwWW3NfXq5GfCF1KGfiGK4b51EWsxHYdQbfVyEyB2p3bGwBhJEtu",
  "key7": "3Ub5Vdi2Lmog6UAm3rBrHg9B1maxGZXvTVt7R5XLtLK6JRSyWfKWnRLYZDU4cvCfS2xR8p4nb6pPojjCqCEcm5EV",
  "key8": "2T4SgmCqAuBDJQNqWCwPVDv89HNVd8U6BKLdZ7XQ5jxB5DGSZ7N3NMt99EKgrKCwqGpEsizLtUf7oBoUV6Ho1y5t",
  "key9": "2KnPU3kn3U245xuHu9xcbUbxEKtid877oey86vvPwaSXEfrn6FAbNxLE7hnb6tUcQGuAyCiv78Qr2MU4WcvJz4Gy",
  "key10": "63BtPYq8acUkyvM9PhQbAqd25VYZyDvyNJLtPEQVEagdFz6q65YVW5c2UKFAhMpFdmkviw7sggH4byTx624QLPnh",
  "key11": "3QHbmeF5sznJC7gGWnA49X4NjWHuyS3xYvLfevARbCDTWyneurCfD2Yj8921JUHD8KSBpiNPZxAZbcc1MLve21nY",
  "key12": "2QTodFpSrmpyZjNhb79pGKjQ2DSicDKU4Z6tesBMMLQnp6YFFqzqukRouPpdH5gxjhgyH16R5ibowUqgGaU9hyEx",
  "key13": "4pPRVHjTdWF5WLKTxtZPjLnhXHH9unceNGyYekEgcKmi7nbcKaPtYMe2GoMP1QJpGa6SwLjmzSRB1oTCgU3sD8FK",
  "key14": "2NUZdnsEL1tJu1ZvKQzCoJoH7jDZbzWEg1AEipcig1RK17CwGCAYRGdq7ouhpTB4d91C4LMzGA5yng1RVJURzdjr",
  "key15": "4JURQY6fnPwqVozWRBCX8fTx9JvaHE2CBu9yHed49szxU8ihMuZGHwr3nQwU9Q8xoe1UX2B3b9Z5Ww3L7HprPFiV",
  "key16": "22o7e8ibmJSZWRDrevCDN8gfDjC2WeFqocFk7mEVoVTKbZFvo6qqCJetpmCXkY35WjnENg3mSSPXWPTvhxMpZu8g",
  "key17": "26ppHcxodtnTorDJ9G3mJZPtR3tHvL9b2qixvGj5sxM9dL4JocDYyUGqLj5uvHhz3dERGWBH1QP59ntEk4Naxied",
  "key18": "5myePbAoSpWRHLqrwasdnujNW4F7hfQUyhyHZxRGhHxFHWgLHVETMLaDzxHNwsgVjxWNyjHy6LDqt2Ui5AtHBbbY",
  "key19": "5vEE9iXeRoaJHWP7DXykPEataBhKK4Htosmrvj69dt1intPkcrEBQZmwQJFCMQWpoPfeeNinhy7gVCssH3gZcbKi",
  "key20": "2yhKspvHK5k66oh5Gqy6L5M9t24A2y9pvbJ6ehrCSy9wdFjLrQBUVjs7UiN8974S32Cnd4vzhN3XyNCLX72vB3VD",
  "key21": "5582k3zPqNuwTFrApDrvgQS8dFsvB9BNxT5oerJdn1NvmEQpdr49ihwVyjmes5SjFE57AZRhxT7uPPkaZ4o8BXjM",
  "key22": "4FLphvZa4CFekojeSnw4PAG1Bu1DvkGqdmqiAaksvoNfTwaH3pb1agzr2QdfYrY77nomzziousob4RbZU1o7LBpt",
  "key23": "587oaQ8Ysq3AYUeQkf44nyKDSgky1PYNA8Y6CCF3kDKzawCkSYTwjb46CEgEusnDXXyEhnT4CjkMyZYVgeUN4v2b",
  "key24": "3CjfFrnGEHRRCbGRFAgQ4UUBK1HbjdyRx1VWgYTwktvYyibkyURDPp7Pa2wnepjdM4qoJazyYQJwkwjhyBWhaabH",
  "key25": "5SxkEGcvzyvDwhk6PuKN45Ri4Whw3ivmrpnCUwarZuFp8XJoiaE2gsDEByUiaf3t8Hdd2ua3ernQYgQEgbKn3eX1",
  "key26": "4Yign1QVM9bAwvRFuGRfAgVVbVThehK29H3BnFou6EY4QLWGfyqcbUB8axSuHjoT8YGVV6kcpMCY2WYkdZ7pzgqX",
  "key27": "5xDYVcYWVzuy7bH1kvoKhu9edhzGPnGoVaJ9YZdPPQunLKHKK7FcsBzAAxEbQEFR3bBfvyLiCi8yYzRnmxkGg8VZ",
  "key28": "4XWgYDNg461DVuedoSNZhgkrhBxee5tBdrZyH9gfVpThFrP6Mur9qENZL4FXL1ZewgcwNzBGYhWDrouyd5FN1sYk",
  "key29": "48TC6GpNErWqdG2ZfaDqgGwphFjQdsFTX2TqSL8pEENvtcASRwD6xbR1EFQYdLr7VHnpJY8KKZZyH1eAaczYQoT6",
  "key30": "4UHq54EmCbfP6VSzmJQi32QrTy5erkYWPF2NjxHKuGHBJe7S1eMkLaWZ52ti8GBZHYCNbik5oUC3zrJeV1XdZzTx",
  "key31": "HE8CA2NgvWfSUS3hHFnJvKBwUraTXtr4KbaLqxx28wqiiVm5CM7g5sRHsfou3PNbsedJVoSXqeoP7uhR1YX3CQX",
  "key32": "3m7cbZHmCmi1zG5XvW68gEepsjjJ5BZLR6Wwxfy8AHpSTUSuQW2KR4nRnUNAQMW5tpbacGsLnXQ2UAEmQK8FXzMd",
  "key33": "313AzHjP1auZPXY2RyfGNJDefJpz8kprfUk5LZvXYD7FoQidLRD4qi1sLMA1mEitfciUX6C38w1PsCypxhehjFjF",
  "key34": "KULuVEHkMfpvVHBsuKcV6nGxeTQ2L2d3pUGfCKUe3bvM6Vpwye8PgSM7i8HaLdMvPcEEBj1bLnvjydrij15QrdT",
  "key35": "3R6sniuvM5MmihT88DTAdF4j7yCniVCPCzBz7THoRB97nQNVXNBrURv32tLN34VTurwsD5iXk9GVjcHBgLJRBDUh",
  "key36": "ZpAx7HXwTu2mpb7ZFcqezSWDUBX2vxtBuubf5RDKdsJ97be45c7wuqgZXzrygM4tkJbR1hnNLPmzUpwZtvHnhEH",
  "key37": "4K7byEsohPfxnmyP6yt7P6MVQDyDzgxH7L14h7gEcaPz6pfSKQYCeriVdvhXT413TWmhKFMztijsTUmo3rjb52t5",
  "key38": "2E6QBTPkbKar48XtLTnMmBb2pNTdi5YmPUrFjqWBkvYWgAirys15JXjnHkLZ82uWGekTP3ZfX2wohQsMMqMpcLVD",
  "key39": "5BpWRGEGRvxLaPVYLyWc4hojQiryYMfGXieYmM8hEHLhUvqv5SXB3eoeGR1oVFpAbEDofV8eAtdAq3GD6KYgNq4w",
  "key40": "2pq9bF9WDrbsX4N1pHkQPr8QhqTkVJ4S1fVMebUcJaVRHM8vp7XLQHUYcLwr3wyWF2QYJdfwJeyVtuWM9iMpzmTh",
  "key41": "4vED9imFSSbkfgURFoj6pD2jKGuVHUkxYpE5Ky6pRi4fUqNyCQMmeH2wEwHXwnsnBEPnd6cbFEEdZP5a3uZyuZiT",
  "key42": "2mqL2ymwvrq7R8BUCknKZYT9hRsmzQSKweZuerTDTrW9bz28CrAfcGsFJd7m1PtkBAT8X26oDCaoS7J4EbiXzu85",
  "key43": "56iBHdajWXnk3G4kwzKPVRyRbEFGtEuxDFbu1sYm3E1Y5YpAC32zeyuQbGA1xvcFWm21YCq5jn4uX1ioPn3bu6xu",
  "key44": "2zsDwAvAhq17G94G6nQqJNfSiDiAk1yTFCfsqUaVYJQBWapez3eAbBhCuqtuMxzKC4bZfowqf9efa2PHF6Lbhqwd",
  "key45": "4A3XLhBua5H1JDN6dPbZ4X737CvPRd7LrY8Uy8LCNiX2tmQkJeNgEWeGic2qBedr7fkWvxhoezdzM2t3Yvmmyhg4"
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
