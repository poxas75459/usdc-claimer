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
    "3d5eKzeAgXXk47nW6dTMuHLpaKYiCHZG1Y5GKcmzhRdcxDwNvmqdKD3QjE9B1L3BXj5cCJV5HFD9ZiNjh5XiMAP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aT4pizANFGBqZQxQzu8xzzo54A8qfyDJTHwFRnvsohzFzE4Q8wqgkXazCJ69wS2Vw42XeH29kznfV8qcgEZ9YwW",
  "key1": "64jNjcbZxrZXRJ7Ti6ddv4CDKRtMxDytjBLr9635QSWvdqzG9Xw9SAZfcz4eXD1cDbnPzp8AigyTrQRDD921nruJ",
  "key2": "5iGfGJU9rziVi4hPXhf9VQ7SHuw19FV67ELqUFxVG9k68UmUpD8fHVhqMvtyUqw84zYSAsCtYS2Fqo3FJZaZjxiB",
  "key3": "2SC7f8tpEPbFVvPid4AfKjcpkGDQZnNvncm9jTQWKfohH44i28bwEEoUNYQAiDas3LeqQh7PWSuvSbCX7U7Kdvvk",
  "key4": "1iCQRiKkTFSMehPQpLP8bZwGLrBHYPspYPzc4Ti8pZtegFmHE43i5tekDPuhRXSj3NMaduChUxzpZPp5tzTEPvM",
  "key5": "5iiR9Njcqndtv8HTmqdb6qdSGW96TS6fbu8rhkBysFi8y9gaNJtSzQ8TFQWGYWm2U1QC7HvQPdkDYpdWVUhfbJND",
  "key6": "r3pPoHwLXL78mDLAi8iBceuXyqgDKAt2CiV9pEu3DnDZ1BR4mPG3ovttJfdkBvevZ6ffGapA1bwWBiUcVjqLVVg",
  "key7": "ca8maie7T8XBsiq2Hz1zFYwEN5JC18Mv5UgR5amZ5PJLwtBx85ZtpezySGKCdxZGJEuktMHFrzVUuKbiCSDZEnj",
  "key8": "4j9fX4x76QjTkP1zvwNsdcgXM8PK5jMwNQXwD56EBraa8L34nygHxRbAyCiJhwcj4u5tAQbFHRzXWy4ro98N8Dhg",
  "key9": "4uYP5pgqQ4aAzUFT3JEaEEXBPgtjqZCDzpmniP6EwoQ1Hi5NAMeHBo5NEGZ21gZCjkvzGAJgqsxaBTRyT3cUAKc5",
  "key10": "JEqCkhHZUyVUGXLuFo9AMNquSMQXtfTcmiDJvzN73hrWnHVUzMcKstKjDoScCUiUuDvAsNiV6HqVXsgYCVjYs87",
  "key11": "2ohkWC2JPVMWoizvXRNohHR8HBDTyHUB9ygcDmFEFmC12uQ8swbBpxCXaptx9cJrTLp2b9KHtSt1FPqbKiFw7dix",
  "key12": "g5hw6qPVUsPQ4CEvWSS34MXiR4spxVKEJdTeWi7aGHsXRSZrZazYTMMLEW4ArQzbTcPgMFG7H8HsoKBHgjf39uo",
  "key13": "2bErta4YsQmCztYTa9vTb8599ambwx91YejFT3CMuaMheH3t47AFdFshuicrni31bFvLmGADyZ3tHrrxLwguRrKL",
  "key14": "4sRgmwLD7FJm97EHeP5cidWBzte2XSZQPBnTNvEqQ9wFqkN8tk9xZiiW8vnZYidBX7pd2bKxnyKxYoGbro7a1YB2",
  "key15": "4UxL4h4qwqCwG2cUfZgD8fXWfzfGCqQaPodtFyYh9b9DaugAbGyuz1idPX7ngQvWHZDeVuYCQj1iTjVtrpWHrQQu",
  "key16": "3bpo3s18d6r4VKBH5iisefV1CnuKihGqrCpW7zaVpBzPwdkxxwJ2ih9o2DiBWE5bkYvPsPQcdB9B3VvzTfAjCQaN",
  "key17": "5PjwwmHKEbu5RxMk6iRBgHbXGtAZZVt7kffmwrFKgoUwrwi96njKYCsE1eQZmJUYYifEXT3waoLitSDrAHgL3TK5",
  "key18": "5i5FcaaCtgNrocnR6eqC4xBCBZcBbPAZ5h1TDHwxofw2DCzELJcBvm56LnWJpTAYbkEzMn5xnNVq9g96ejpCJDai",
  "key19": "5LMca2Um5TWv8HEYpN2ypLcbV19FHCpYEqiFd7hVKcMYk6Nq4DokzSxE1Ny8AuqQpbdjkK6BhURezw4t5bq3DAjU",
  "key20": "UzQVTJfzfP66hSnMPEFmh1s7aWfqUPmHdAyGbcE8Rs2kpJm4SkC5EmdWtrN36a42MBj5exXUscjmk4czKF5HWyC",
  "key21": "2P3LLq5MMGm2yV99uHRQtN9UHZjsrxqNU41nYVBQCEGqzDTF21r7ynCfL1Yi3aRV4oBCDvfrEAdBEtmBshiSKceF",
  "key22": "3yGAuLr3aMvuKXZB2vnc7hMqZMtdkPDQp49a9hQN6KQZLoMm48rKKYVTYdKtkogUUjEAJRBt2e8SJsZTow8PXtRx",
  "key23": "5A2sM9z4fjWeLSAup1APQtbJBvdFWyZtWoqTfuLdZpBNdMbedWbTCSckSoPKDPCXx1DJPtj4Uve1EiQ7PtnP83fC",
  "key24": "5G6NPG4tWnKaW36LXGqgGZkeCb1hQyT3bEVFqJWDbVrAzKNMyhQanLF274MxbJMXtKNsDDLvn2wbfQnBeaKpCeeH",
  "key25": "1L8CLh9MgaQBH8mA9wxc9Bb9oPPboj5H6yLEc9Ly1ePfTuTTxi3Mtbu96TQs4YXaC1mBQeQP6fKh9dPhcC7xtRn"
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
