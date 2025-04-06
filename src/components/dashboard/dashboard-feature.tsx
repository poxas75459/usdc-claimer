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
    "4QJVR2sqq4ueQmd3E6UiwbLCMba1MhnYgsHoK6KVY9FC8Ti8fEMHAWFL7QDA97hQRUy9bLpLtWmJDkacDEYfqTXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4guMDMpavWT6vjcos8zmhKHWvtSHVytCGmP2oQCBzuvKNYyfTgZnxgkvqozWc4zxUct9eg9ZBvmqHh9132YLgAw7",
  "key1": "5h6RXCQGxVo6RW7z5JevgtmXMn7WfWDgpud5UaBE1nKp1NcS3qbeJc74EeVRii9KrcXR2xbPaHUJ2YKQE3gqSrDN",
  "key2": "22CJ8hcbc9rggkSvo2RrrCe4FBjBvjuFzeKtW3rcYia2R21fjwKg95hKhixc4pqdYYRHhmhJTNC1GR4SK8nJBx2f",
  "key3": "3rpJcmp5Ke11U44XbKWoA6XhWGhyApWen3iBJGeVtYf5jaUoYhjcsqvjY6azLTQWTqFhHWj4jmgHSacV2DYgPD3M",
  "key4": "2VbSdZ1P6eLbVFfaKsB7GyuLNB1oUcq1Hk8FKFVbRmNSRLLV5ZiFUBebESQgemEjpKrC4adgNCQLkNsNxRv18yiW",
  "key5": "64j8beqrMzgSYSHnxGmGhAikfkN4R4Qk6Qs4cr6ikJPEGtcNJNMEpSuiyzsZviKLMzYDtSF5ko9PkTWzvFXzyaJy",
  "key6": "5fuGvvNmKmpqRoutLnsjr9RHXjtP9YRFdCMKFRpTzJuXsNiArePL2t3gUcunM5aAw6K1i6ELzcFjcnFdHnKjGtnb",
  "key7": "frYnRKkFNoU6uozUDg1d4rLesQW421bYSYbsrELem9Ls36KQA3PjLV7AhZXEhKkS7DPqz5HswNTiDTcSQCYyxLZ",
  "key8": "XFMdV4KYpwK7EJHu4XVs369oT8XXowvSdxjfGKaB2HzYGqJukD82w4njH6sW19MKkQK1wLB9gzhueSh9vfUJ2BT",
  "key9": "3q2QcXRjjGRmMZLnynBt7k8tkfd7CvuDKyBc5m7BHyHQ62ph823ACWcWsgMESYGtihrLNAT4sYqSCnPdHwFL1hDg",
  "key10": "3ZGKQxJ4fneJeSeXCqpNdbyy5am59Suy8Ehja7mr7QZqC6sA239dn2dc2jms43gZt6WGjHDwUWUyC5i1mp2srKFh",
  "key11": "3mfbmTWZ16B4mwmR7bxxqEJJdmpP79JVri4DoLZstiXaFPbcVbMuNS6ZipEvivPSYrJzsMzixUfrxvdFGebRAAix",
  "key12": "3QjVZnpaUJJoz3fW8bBhG5KwifB5YoiHyVTzsYdnwQk9hLgkMdk7dejXwoDopqS4wf1jibKTmwuqMEA8uL8zbcUk",
  "key13": "31ubsvzPgiSS1KU7vKvKHwqSnpi83FwXUuyn2zdgtAgzSUscvg535orvkGJ6q39Y1apyJhrbNbDL6b9gFTu51Zgb",
  "key14": "5fk4S5XSC13KxZ6RmmT6EzY8wosfxbHdnBimrz74QNQpJabHVPU9dUQC9WoD9wfNfHHd4tocAvdGpBVxLJmw84cN",
  "key15": "5hqUEAdvvyDFEMTx8PzN1NJqjyuotMVGi8HP59rqRFGnpdYFkkAP1GD99QkwgQX8qaDddvYxJVVm575qnnXkrhUk",
  "key16": "3b9YY43JmWMsBGctnbqBDAqhXn9FjCiLFzuoBM4R1D9CKGsm2SpZtr8AbmFfSAgCL64Q3oSVmUrMPQuUHzb3jVd5",
  "key17": "51hJMbEZD9KoQ5JT6CfuT1yzLHbhMUvmXXvhZ4PH8iwVjYQi3Y1UiXsoUXiSMrdPPwFLRJimNXER4FFJiYmoTw4T",
  "key18": "4Ni6UsDobns7X2x5KNpX6Dav27yFgQETcRbXWMVG7B4f97pnBtFYbtgQKMDPCtz9gZ3uYRNZwgQfRHL8Wv72c71U",
  "key19": "2thYuh8A2chdWs1i1wCQZvvHsJah16aya9rcnuJ7zSRhwtXPTbuVnc1zayHKqcJby9Bzn98mCy7yFLr825cW29mA",
  "key20": "2keH88FqepLvtRkJ6xBMLZBADCXBka8BEQXe1uBphBWcfxzd4m94qFmTd382vH4N458sdwy1dtXQxqY5K3JBQAvf",
  "key21": "37TvVVRGq2BtJ7GC1TBbPc1Ls5U7LWxwnLtUsDerwkJ1xKmAuwtXvPFiNaQfupVRuuuFdgmWjzWEVQd6ttU83Jzn",
  "key22": "4a49HhbiaqCMixrVZjgrq2hMwVHSG6Q9RjxjUNWF8HVX41JaSGexstLwJY5sZXUMFVRmZrS2PHnPEH8dbk2mEnr",
  "key23": "2BCN29EwsLf6uGkMQu5oQm6cCSRUa2RwjQhXY4aKkuCDLEZ2he4svZijESx1Cv3aKz4BByZZYRjrHeicH7KQFn3q",
  "key24": "5zw4LxizeYJyeKSKSzc4zGv7Z2YXqgc99ruHJsUQA4pKZs4evLGFCv9j1pCw5js4jQzR1ogDYm12VHAWGcsZzfwZ",
  "key25": "2ge4bbTiJZJ1j3YPiZYJGfaA1DbJQhkRb1Qi28jrjuGngLVStrPK3jSZuUdhSiVEsZwsy3XirT8saqY3zn8S6xaE",
  "key26": "4xh5JgxrZ9daZHfZgbpTHn1GEdxuvQTSk6PPoRgo7yVyiXgHFAtzdV9y3zgb5CXpXzqZJYAyF5r78kZXgxs47N2t",
  "key27": "3o8WX45MzR4Z5bwGzCUjsU9JZHTanteSzU9bapma6KGxLF6GVnnPEgX2NqtMyM2RU9jEbesQ55eGqL8Ag6qq2qYx",
  "key28": "UdguwN8i5zE6qTafWhS5LEdJLfQqgrTwsUnnGpSmpUoQfBNFQ4KszjhQt18J7V9GAMwgx1Ew1PyVjkA5vx9hzrC",
  "key29": "2koXL88qWCk49WjP87ZMYV1yNuEnDnQAswSqACpCwp58uLWQZP5JR3puZLJr7Y3S9vfXUQz5scceRCxSDjAU44b3",
  "key30": "4SAt5gXRDyFA4QNiSVmuBzVbUttqhDC5rdARuLjpM6e3ggAyFygo1xiif4Pg4mpvg6vDBz3BseJXL1ySVKdM3WTt",
  "key31": "5jDT9vC1X5QdPmauVS8CpKmzgv4sQEqpQSaz2CZAXVtGv1RMUZrejUtVXLvftpfUJWTg3ca1mjUyC2QLfnr6Ge2y",
  "key32": "225MdE3Lmyp8gL4CzDr1DhaAJ4tCThyAFvrrMmYmgMoSBE57TW5htkGn8TaZKYJVj6hDKaTXDReabgU8mwvNpyUi"
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
