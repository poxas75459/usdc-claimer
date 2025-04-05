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
    "5Zy2hB6XDrQPrTAn5gaTFUKJQreGtfb8KZr7UCH8dwtkkUHYPPusPAoXKYYTE55g8pj15N96eSbdrzBaYVq3kUSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLraL97uNVtkiDE7LUof7kyXCa2TR44szbNaRcMvaFijcew9pPeAyw2RMzFvhA4myJeMYHyyVHEGsBxUw2jGz5X",
  "key1": "3iDBQsQtJu84cwuFeCjXGnZNx71EQp3FHz4zjpWBcJsZ3xDA8Bgnik3seVzS2TmKsfxQDGX4W2Ho7kUq51XradZz",
  "key2": "4ArQt4ZV9zQUuHNL9Ktrq5YEJ1AnA7TDz9AvDnjvyscfFzKX5e2tLYCFhnQXuySdf7Bx9vUEoTcCDUVpVMhjaB5d",
  "key3": "3Dd1rqcThewAx4r78joz29QzSy9mf8kdpbh5gRna7gYMKaD3BxNrzv2dgx38VuME6Mx2GZELb6mippLhEixScCXy",
  "key4": "2KD7xUUbVb5s7MS37FdBmXAMdTRTUSdcnpaTwtCm6j67DvmJARaBodAbxBdUL6D7cGgU7JAyirHr7ECUrTrfVH9C",
  "key5": "5AetQPuJceYBEGfgeXJerNSYiZGPoFMp7roHTDfsGKX9fpcjdB2EM6zYAMDzqDAAPwWD7wC9feCc5nvHVrPopatD",
  "key6": "5RqmDaM6jhMWgtjMD6dz5FMNmzzaeR8VR8QUgeQNri2M4JU9yfkJKCWT13ovA7RES7k3hGLgsknriknexbrwgw7Z",
  "key7": "3wHMgwHuf1v7aMvRb7GNuonbGPkyt8c59jSqo2Nx7EyNQc2Nn4VLEZ2jy6rZABt8ru2T6NeRAwQne3PFowj7ERN1",
  "key8": "tsLP54X6d3wX6HcHASiWfqZH4hmFjCngQJMYnbLSfXQ4Xnq5KXWPxKegwd8LuudDBR9sh9rkD8x6Bq2N7B4bQUk",
  "key9": "4uz8U7YDiZitcSqTQfz1p3bfHTaKcrwk7KhgaqyyQQ2E2buhj4S2ogpgX953ZAPif7TgS71gnTdjU3RDT7eUGmpy",
  "key10": "2evA7UKd3UQdVSCza8z2byT3oDteAy1cybPZUoRqdp9TvgZrn5UbECdvwSBb87zbGMKf5Zfh436eVWszefLBeGu3",
  "key11": "3GfpJvBJSThUDNjC5kGoi3hWgKv1n5dS2zn4TCEJvXbAWf1WeXtx1AtsqK62j7xSCHB7cA8WxbAWi1NoDQZcLxm7",
  "key12": "3VHk3X9FsPjnuUgvpTKYZVok7foz8BM4rCGdDTaxMLFC3kt2GSKezmSM2yvZCkbnhZPi2yuaxeu4bQ8WjcWxEgCY",
  "key13": "2GhGQA7GkA7tRAkEjDYyMrj3TFLWRpHku5gMQwYcsGXmWgDb6Qjw1ZVcQdhLxhqg1sE2aMqquosDnbqvANyF7vr4",
  "key14": "4s4Y4MaPXJcMgbuGaruxHFDRwkhPrzeDXDKQgjwKGfwiQhXScnbYBFRBrjpn8esEfzbUeWXMvk3ufKAktvTCpsBa",
  "key15": "22eyFkvGgNdopSvVDJm3u6UitqpNDhBuGkzNVEBHxU44QH95Y6fcCR6w8oQxyE7Q1WQbUANsj1hQ51jUR62dDPNX",
  "key16": "4XQu2C92iqgxjWMeTJNZqomfSdJEUSsGf681Wkh8dihmTETBZLGSuJmnpyiZTMLxkd8D3d2XK6bNPDsgamzQDPPn",
  "key17": "3RNJZJXZ3XxhwytAVTb9dc7bd5427fAdzS5k3rr79YNFMKsV2z6ZEsJjgGteSLMkBsVMuUBDhrqqxtZwCv8xAFQM",
  "key18": "3gBrCJZ8EJV1HfA55pwhnr5aAHbk23kEeW1Raifqkj2iBV78WkgSr8oZietNLsMhnnB8k4RY8tUUat11Do6iC6LK",
  "key19": "3ErnFrVKhj3xNFFqFTU2sxcSbJouzBHS4MAshXFWEaMkmAbkumJwUkKbPAFG5hDbhZbtpcZ21MFWK3fDPEs6FEqm",
  "key20": "2bdF7679y5G62vNmJzqoXesBVqy9gVxXWoPwuhvYEJeWUyG2UXnyxKdGjr1G845bfqPe7jcyyAvkCq2KNWX16XeN",
  "key21": "3Ei44pCazeQ5S8Hfh3dteg5Dwcwmk9QMYvheaxsEpqyzzhUkHxxER1jpP8UJYR7mHq8pFeJ8yi2Ru5pETB6cvoQ1",
  "key22": "nE37RhKj3Eq2nPy23SX66MGys9SpVGKzkMzK7SJa4JS65QXx3c7V4TARyR5ppMPwzkjMCEzAJDfW5tEyroqWLFB",
  "key23": "9iLveobYxgJxd19wYsrHNZLPQCDmwG5qbqA5RZ8tGMP4mJqa69xbkrxchsGr8fhpq2VEwRcn9mzXmWmcuW5fCxa",
  "key24": "4TLHDzfxWDRJ1JwU9XonuGBue9UhJ3Mbnb6v3fyxdW8nYnXHkGphuXY9JRDjZNZ6u5fvBUPemohMJ1DGUTukj3ns",
  "key25": "4Vd4kx88d6N27X9U6iEo4v3nvxeVY58DvGvXzi3EGVSYFfHkdBcQfmxdKhFeEHbKRuTZLz93pSjfAcTPu3Drz15t",
  "key26": "2eNs4AuRuoApLuUnU65j69EdvQfJ7JqawNDzDLGbMCEEiHA7GZyotuwfexkwsQ9ouNbXaYgRcKBt8aE8Q36EXGsB",
  "key27": "2HhMkXANMQECJQRj78PBdnWR6wAQ35YQJRtHs3MVjMreZsqDEyrjghyrynGeTR7a5sqDgnx5xz4JqMSP1gduU5RQ",
  "key28": "5tZhikJ8pi1wRuUpiXTFXsv7mUuqnfWv1HokNohJqeYcbs1pqBGDqqqr43HCUuqpKex2KfSdvVENDB6jB39neEBq",
  "key29": "2WPpP9ymahoeoSdjPXctBDvuoX6mq4Lo3cHEL1qgsKHQWYU4wCuj4a34Hf7ncNrQpwtz7M6aXWZjgVyXDc4MFUvq",
  "key30": "4XaUH2QxptDotvRfnyMVPcsKvThGofGoy2zEtb7jVTjMxCDH1YTYfv5LcKcZvb2ZNZ5Jk2vWfyCNcZM5K2HvWNZW",
  "key31": "qsC7brAT9ALMqexiqmznHuFFayKWnq3vmA8tV6rP7ZK2ZvQ8Vk8YLa4xzLc5jJizB3HcPDQhqzsW6UmW7S68cqD"
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
