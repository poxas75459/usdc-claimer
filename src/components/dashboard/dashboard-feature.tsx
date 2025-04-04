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
    "3BeaX4Yuxw69BEL8uLqHbMHXBr6JM8ZE53vf4KF27KycTgwHPHtPJ1pijAAoxi4LMKGRDwYtH5ZNyEwYKiQkYZEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZD2UHx9tVhcbGih4SmBXEghHNp6itPpVzrRkYKtwEGuHCGbLBmh42k8d7Uttjg3scC7BzkLz3mzGY4jSZqiUbZ7",
  "key1": "3AyRozgFTAU382UpmkaAUyja8GHoFDBUuwBkVXS5s4ai78FcXGocuLw947iZubyZFjaciiyBkoDTz5a4sxWMqhpX",
  "key2": "32FKbxbgNbL2j3k865KNFQTKSBcnPurkMvSPJYP5vZ4AfyKogVnoHt8oEbU1DtBYhNaetMTsxFPkUMQ5c1FgRzTn",
  "key3": "4qSUdn8fagj49wJ87d7GfBHofqq2kt5k27iezarMr9Ujo1qEh8tspdm6VCRz8UUFtSkjJExEZUG7Zui5eHFhWWqC",
  "key4": "CRswjK7LyrWidbRB5bRhusQciB6d5JtdTu6kdsUNeKcvTTMfgPPR57LRZSEJQZxh5bGEsPwbWAfkfPc8LL5DEhF",
  "key5": "4KMJ7NCoEjnvgh4AUXJTQJSZsxoe4bXv68ZQPppH4X4od1W9T2eyv6Zx8KxpvtcQmrNLVBFpm4dxqTqaiG1Um4Ny",
  "key6": "3oztXRXXRXQPzuRB7J33jsiYzyBcJQHActdN5b523hqbn4A6qHE1PKwsGtwV12KxWzWmfCv7oVqAjRmySF7N884f",
  "key7": "4zmNdou3mGu5KoUYjpDYVc41sFXZgMqYhS2WznH7yZWxg9UVxKevB4NJgkCQYYHzVSvdwCPNmYVC8doUfbbGtV7s",
  "key8": "2V1UuAEjLYFY8fsa42VL4BLRRw9QtndyjWfWsVaph2mdEgjPRaQjLNjpazjtpdd89rDvzMYpueaFs3JePEtAGsNz",
  "key9": "3RvEVJE1znu2yn4BXP9cU8fxS8RzXPr69F7tKFK4TCBD7Y3xFojDy29TMMGtE9viRByfQZAf4mD54ApvSgUTmWUN",
  "key10": "24Bh45bu2Lv6NnxVHrSxW9hvY6C7iSSasyfkbd4eobiKDasWBTrEw3pr2SeopT1macAPr7ajBjF49GJQTegZAB4d",
  "key11": "2nHR8WCsJQAy4aUHWpZUWwCCPjJKTj1q8vTgf4qRG8n3tQwgpg2y422GnaKuiDNzMUxXVRUv1zPFhG3E8gGHWhoA",
  "key12": "5DzF7riKcNGSwq9i7EA31j2Tce9EqnuJZBtg2hApXQACLSL1NCnRLGp9ooqGHC87qChCzbJvtEuUdWK6tkdUHwWB",
  "key13": "x5JHDoLUxVLDXPKE2Uq8jEmhjn46gqGd1JbbLurqH8dQu8sW8Y2w8jpEcnBgwBcjqW1SVmenMFHFih7hMY2epgk",
  "key14": "BjYzwS2F4DtDP8ezztP2n7UXrJCXejcTPYW2GPmqDSeePu61G2zzzaEbbVVFYasy1h62jya5voVyBiWHw8KPEbL",
  "key15": "dhhjZgtFRETkKS8x8ivEJjqoyJ3spvE7DfKsDWprkaRPtUGqEM47pE5BKnJDSZq6sbDBe4nBQ8TnbdFev1c6tA1",
  "key16": "fMSe668MPnHXCBvKztbNpy5mtwhCrPzuv9vQ8mQ21EHb6rGDYvGDAjfN7XjSiBsnAF1T9gRM1WvaJKStVk8X4Ch",
  "key17": "qRQKBUSqVfENVg2evNVXQ9rC6dFQ4H4CbhntGW21q9wWwXBmS532YdZWX6yDFxM3jQXr4z1wj9X2AnzyxcoAMnw",
  "key18": "45m4GLsqnqdZKr6VnhdQRTBNPxYmzDAAG71WxXuYsmybpDWZtXnmK1CCishF7GfnnVnMD9Snkuhi6mJ4nYvTuHzj",
  "key19": "5c1BBUNvCqeQWrWbchuQbmfvVrSE8NaBhNy7agmfdsRr8739PZbzgWGvbF9jx2GVBfQt8PptZFgBWZqDZByPMPCM",
  "key20": "2RTXMZWR1ZtYw5QRw3iaRkET4mT5R4FewwZkbhP6tfRGSsJGPcC1dqs5HxN6g6NaoA3Bqo2nkdzJGhpEV5zVk2dC",
  "key21": "4QX8xVJvxCZoVCPsvW1NMKxc5TBFfrhHruuyLGG68DXdu1hQ6qYHpJ2WVPTDmo8DkgKhKffy9JTUa3uWFDGibrkV",
  "key22": "2QLdCJqRFKzTTMnGPxtLfvr98fqEbWjqmqy2FX57B16K5R7uJoidgMfJL7hRdgfwbqFWjFrkCkk8xo6Tzniomgb5",
  "key23": "4VcknDkNpw1eNuFpdn5WXWKkhgVZVB9TTZzW555mnWom4rF1zyxGXRpKbiwc8Yv6EmkwAxmJWkR3aMnSMqPaf7Jo",
  "key24": "2MEqTXuXsC4ieDYZMiNASowxBGC9Jt6yNtPpkKviqDeLgLYyMuoYcePNyM7CPaZZYULrGRCUmQmKWdMCypUrftYt"
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
