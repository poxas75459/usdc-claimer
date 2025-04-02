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
    "5YHXxCsFVkSyH9vkZKTVUZA55V2MTLzsVPrnGKBKye7amztrUqJtFADuQGMdnFcV9wSkdjp3D4HdTFVp5uWr7m2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8ksbuwrpYDTvBArQhMGdEh4SZs5qDPbWYGeVBeeSdFTiVfKHtamEwaNk8DahX3C5jpwALcXibbdGfmqTRkRSQT",
  "key1": "5xP38ziRVkDtGqx6SB8fwGMmhVt8ugWqZJyvphJRThuY33JUiY3JpN6zrtbuVriSCcpU3H1zSyxRmHdvh3pyfBw4",
  "key2": "3RKri8G3RMgMDnxCbcHt2enhVBkxmmVY2hpUdqLfL39xHRhNZW8xv2xvHeD3tZhwDK8Q2Dg3YyzE4q9dBWXgi4Ed",
  "key3": "3znfc4rphKszckuLswTfYfhY7YTzSEvHbc2orYevFGqm1HTpb9W74wQ3E1gwYkPvqGEuHyCcvrKqjCBfbkHUSupE",
  "key4": "3cRpgBLzz7drx1bk6niBtzxN4VZdJq36nNo1AfnRZjPNRrpxuFeP4J7z7cuaQdLeyQWWDqY76y3A9zVPyAspamYD",
  "key5": "42Fa5WxeCUJbp73mNrbS1D9tXXbGEmF17VRUDGh761GW6DXCcxhqeUi1EdhFmxpgy2LHEzAZwqdD8A2xtzKmVqdW",
  "key6": "3MeXFizFLfRzBgUDA7HGVVtA8CF3ZMpQUK4qc62YCahnYTPDdE9qX2VCcGf5miMGei94Z3zY6TUkHfoPb4oZQmGK",
  "key7": "2gQJ2KVTori5UGNCX4fX9xcv8xKUzbt2eHfuzKtv8vYPSejYVd8nNZDQNLo99fiwcccJKoSopq2uCidvBWjmTJqL",
  "key8": "4xWkzaBDpd4V52hnoTuqDDUk4s1bnYYn16RCmCgUDyVJLGyLuExEbHJncfdJmccTTYzdzW7Ld9tyPdq1kz7By7Hg",
  "key9": "4ejixdYoXAxzNUowPSne3VGLQwyFgJPyfsMYPmjdKWfnhLyJ2GmyuDYpbPJ9euAVqcnVRmhcWoBgVKL6strUZQcE",
  "key10": "53PBnANSaShX1CGfkWARp4DeXdZxYaRAPj792sijadt7Qjmnf6HFK3HL99VtbEdeQCdYJfPh5dbMf613fZLzLsGh",
  "key11": "5HPhuYH9PAdFgpnKtHK8fnsjGcYrH79RduHRXuvn6xDGNKxzu9LBv4KysQwh5c4df8yvT4M2h4i3qHdA2Tb12yVQ",
  "key12": "2wtUTsGDKQfQSKq6R6tpggU7WWuW6fYGREsdMrTZfkf2MYeaNLJquWRLpykUBPrT3F5rjj4UC7Rga7PbB4JRiLpe",
  "key13": "2pcFxBWsHyDGcPbKnicr2LfCaoGq6F7WyBtmx9LbgPqEeDHJGPkR9eHcoLwA1c7pfm1zZn9Q86d1ScaB5PDdusm",
  "key14": "xMrKNYXaCFLrS6hWmMdh996QF31MeXNtSRiQJuyuYzEPaNwP5iATy77XYrVomxU7z67T2UyKiGRiaHRt9GnwnAj",
  "key15": "5xb48Tsn5L3U2QyZnREias5TTVyXLzYcr4WDDWHhXiHaMvB4HLzxxE4SfFmhHisjVDnB3QZupkSQZcuwdEXAzWKZ",
  "key16": "63R5Y5hcnAcPwy5bD776vDV2mdB6fsBWg95nUVa1sVYUDfMcGMLbib85Ls5BEH6ssQnRD8bwe5uovTGPVyZCVH22",
  "key17": "2ZAtYuHnhmp5LMA6hmXsuZ8dUMWHFtr7bQFVGdQuCViXv8Y4srd9rhEAJnDfcaqC3uwgL2XVbaBsMVxBLeC2Ne3T",
  "key18": "2xFAzX4xdciGa2um4FVxp6Vuf2ykq6ds3NuJ8n5718A7gZdUiUi9xUyfbk8j86RXc73QByNFVBvP9kZrpJyzeyY5",
  "key19": "3BFYFG4tHsNQ5AX8S6wNaV1EMYtDFSR8oPKLDxa51f57kSCwZRnqMBaJWVFPY17DUhMFQLnwRVtQMtRESXTu31Sd",
  "key20": "3BPcMNzLE3HFCWuxQfNKGm4oVCJPkLuy2TSjq5qg72VjWoS3xEeZQeK2vDfXbEau3ThdnWNYzUXZhW12T1UwryoG",
  "key21": "4jXdtZE7Echk9mFqjBaEENMsDS6Jc2peyNqJ55DHDeg8EFrcphd3Bd7bAjUdMzaeckETFK7NfKE4ue2XnVKFVWUm",
  "key22": "3C189dtCztAroaM39rfd2Y5cqsgf3BoNxe88C5Yq1tZr8Q9PmyAicrWd2GgXet3e2Hpi8yro7KMgJFgwRWg8JFrj",
  "key23": "63gPbvaQQWgKNXX9rDGj2pw7EtLpAdXbJT5WPeG36yt2XGnDXRhDhtztqYQLNMgPKKYuyXRgtqo9ZnbiKvRTGntN",
  "key24": "2Bx4pfc4DjpDbUW9idMdDF7X6xfUAHWB9nYbAkQTtgSr2kS7XYhLTP1HyHMosrGFyL1KFvtM4wLsTkcXfUcf7Giq",
  "key25": "3FsQAvr9yz4W8QRhZpqaWJ4TSo8nmDFZbMNVknAFAJKFD74Wz7hEgQW33fjVjmTZJHfEDsKEUYMk79BnBQDu9bdT",
  "key26": "3QLse7EV8EjcTLfiMEeMAuMiB7JdWVN92KPbT5vyZCLvjZJ4wFFgvE3C4itZRRVZqhJ2MY4V8ALn7c31avEd1Gzt",
  "key27": "5k6E89gD7bcrwgdJc9s2V2Gn126mkUvXjc2r4JQFPfjLk2nyDQofvi5HLLXuDs1xGVWe8uKq4kD2ghZm7Hrt5doT",
  "key28": "8NG2Cu8eVqFpxnnDewUda11f7vAG9pT9v9mhDE6rZt2ihNP1Mj1oDtw4UJyVb5XYAbvZ7vZ9dVmujfwiX6yKkcm",
  "key29": "3f8HdTStmyi71QPM2qaVCCzz7qqMCMibAsAaj9xMJVPKbXNAgRsHP7YeDgLWLcs4eJYJo1CLvHwiDyjoMQdj6MfA",
  "key30": "fuu8tYf5J1XK6btzs9qbGUhuu4UhznC9nEgfNWnWmow2PqHfU49xd8yYSXnCYSJCGmBnpD8FjUrjTgewHZNwbjX",
  "key31": "5gPqFwT4oGT8dWzcS2pavMvEdri12eRD7gP2NSRYLZB9sM1ttVQ9x7qWesHB7ktWiFJY3dw5tNNnZPyqjofRkNhf",
  "key32": "2WuK2qNXxpZT6x8o3bKw7hsfASuwAgpXxkyQRXV1TptN9TQY3YRqWzqaM7HyEHvSxTUyTVQnhCjtBTvrxxmM9fi3",
  "key33": "J3ywdc6DDKxwCXcNEb6TtCrrgYNGMknCKc5fWkBsu1ZgjUgGYJVV9dD4QtN4J9qgMqZS9LeWahUHkbdxLbfGnd4",
  "key34": "24xWq1SMYtiUZGLkzRfjzHtw3ycKiBCyeNBJwB1JdC3cAdUSZMJq7VPDZZbqziDZozTU5TS2ahdNFf5yu5QdLH9T",
  "key35": "4188eNNh8LLqjWtaE1q6BWePjju18sZcANuAndHywf94VYHTWoWDNLttEM4Aptt1spaMRi3JDuQJij1sXJEcwxDK",
  "key36": "4gvvvMa7atYsS9Li8FEbrmvwYHTGSg8ehyo84G3r6JKLGB7if5wquyscVNuCzLfo7TPnsJQM25GwNfxu2Gtmrepv",
  "key37": "39y2zD4wRdwa6AifLi5nDWJEzDqDeEjBem7r3J5vx6rkirzXMYKKZ9tH8MpHhKS558vCjZ4J2Wj8niPshNfqeSqo",
  "key38": "7F59zz4Lmk1rwK991bwH5oPyHBVuAUYyjwgMAVZ5UEa2vgEqG9tkQN8nDbn7JMDzNM7TK58aeqojQjX9q8FDbnj",
  "key39": "24Lf2oJjU6sZfQPHY4kQsCyRtCZwCUZqu66KSABzYehiexM6Kpse5QuVVGR53QihV8U38hS7n7Pm6cffg8JNp1DB",
  "key40": "2x4v4L5vpic3f9NGhpt1ooVkgnychtV5vXNxJvH5HwPiXX7uEvQcS7R2uSZcv6wdBcwYJbmrxyWn6d1GHznwzDXF",
  "key41": "3oXxmrjqy6eCzSMGZ5TaAbCW5fJj6isGba7pUP4mwtSnxsaitV9HZLFjkk4pmgxxJw49uDQWbcjdo3MSiPyekyoG",
  "key42": "3DSF2yNn2PfhuB2Q5KtzMx1rpS6zPX4uzQoZj2isfWmGMreDUgqzBqAr4adoeFo4HNkrrobTyGJsn6ZYc5iFSgt3",
  "key43": "34tNeTanLfLnfR11sdZoGbDYWCgYE2u3roTwxMQ1xvpLvRxKzunTvhnbvs4mTGkYYR58WXxEGzjrbacTWSULs24K",
  "key44": "3D2yHGNDFpz2moTC254rZwPLJYgv4McuCFgJns4cWmbQfCT88q5iZkwt1RzcZbRMnLkJpEqhj7x6RZQsZ1DJ16Xx"
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
