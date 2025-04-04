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
    "35YdJcgbEWbGRQJaNRc13W1bU41YXxAjfCQaneF7JcmkFzynv5sHVAP6jbBwbhPHqkTcnbv6w2UjhSLBV8szqCAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22BywC4BmBpVm4WBmFWL7aLkV6fi6TyDsNw3dWcLiyYBcPFbVodvMybKf7NSGCg4RYVZ49MZPUgcbCon4P27C7uG",
  "key1": "48YHYDZmKwfrc7hKmAx4YbroLbnxALKYFW9zFAXWS7ifb7YNAy1pVtnnXSQbNV1BnL7tdciPP72gXU7AcLQf1jF3",
  "key2": "5Q7nzKJQExjKhp6szh9cmBYk5sGQHmkhMmxaVgpKijQWYaK6szjJBFU48oRT63A96ML8recu1YtQ7t3vZaiuHdA6",
  "key3": "3pGvTcztMFU5b245PXRFAF8arm3di3zbYds3VVr9bNjpfr4JVVRmkbv6VAoTHATfvYiQHhApWtXmRuEpxsr9UmJo",
  "key4": "2e9eVgRvEt2qaRuHv8ANjSdvxXXxqdR8PT2dLHRQSa9Pjh5YsXR5Rjh2kgdCGxvPcz5kctuepJyNpGJKE896G2rA",
  "key5": "3V8w3UfK3KKK5inYGpwsBLxkY1sWMBssURkZF3VRHW3LzfHybLmh2N369ZgK1vQvRkiDT3yizyNhPHVhz4yTdbDK",
  "key6": "4Y3Nnaz5KTxpGgamk7Wy9i6nbueov73KCfVthNJ5DkWni6BYbenBHiairTVM23iqbMcLJ2s8FDRtrzAJDF9Sa9wv",
  "key7": "2M2pZQfrLMQj8HUSCh2jFNdCtGSX1RWS7qY7fLUdbWavUcEGy314hke4QzKokLTkDYZr92S1GkyeQw1eQnfC7qX6",
  "key8": "5iCV8aouFBXJGAsa841ptp1sd4W6KVyoNJjRSpB5Q1hTH2P8SP9FjUqSpp7vmF1XjGuRkEqjDWuV1gVDwPmDXwNj",
  "key9": "XPppwoFgpJBVFoeR1xUzdjjMNxkPiVx1tosL3pySXpTSXAU11u1GecU4vRmAKn8S9NXAqG9exAkmt98CeBbF5L2",
  "key10": "5xtQjtGo5bhnLVfk1jq6yQmRcn8B3rtGcKUN3Nj5h6guP585TTubnx29puPczTY7bgV6sD6eQJmJCYzBsFVejka6",
  "key11": "3FK44B4tzHmP9MLN88APN1JQvuWxQ2Ru5VHUmQXNZ1WaqpY2X7dPkGZbZ53rG1ioi1BkVuonjyyobSnwSbVSXbro",
  "key12": "5LqCyFvjjDfyGRA23tpoyAnRqpjGnNB8MoB3TrCJ7QBUWeFWMsYGmctt9sF45D3PamRgMmrGfaJ7eL3z3aYv3Fc3",
  "key13": "335cqaqkhQV41Jqw8K9YGpimnjSfRbRM7vKSNnF7ddJK6wv5fPKMT7veQUy1YaysWCqqnyniUPv1z44fuVcPcZsk",
  "key14": "4VFzKXY6ov4UvtF8i7wiLciyxwt1552APLo68jefQxwWJrkSQBxmzLsYB4AHz4WQNGN8Si1jnGq53ex599iQRbaa",
  "key15": "neQsCcTeHUuGjXmK5YTqe8h5MRzzsMVppbpoazm4Qx6zfXMDu6GhYr85P3sL4a9auvdPZUFqonRZystjA69UpjE",
  "key16": "koMZp3DYaQViEXV7ZvCiVRtddLkwEQ874MUJ4KzYhB7P54Z3JBvEs9cPFPLgSu559NBFmsJqESwazMdAEM6ynt6",
  "key17": "L8SpJe8Heg3MXBLUS9Xp9rX1p2FSoDiznuk1d67fcgjKmCugpvhXFgqwZJFEe9LntgbuvUTqmAaZ3dgKEmYBCRh",
  "key18": "4GkKQvJU2UmHtJZ1iPAg54HWTXGsbqaBUindaSTuBofXMmMhSny8gviDPXHi6siTNDws2TFKniHjkFpu25u9ZtDy",
  "key19": "2B2Nti417Zco59REMZZVJaSj9BXDusCTxQhzDecXnDD8CAodBqR9NnGMVd55N3wE9D5y3xLsbCace72nRcuHe87d",
  "key20": "3dH2CBeWnwuiHFJPmgxGBQRSSpMBmyyqGheKFRFoF32Cak4iGKJmFgqwYjpaZ8PWcrKbnpEAvv6g8L6HqquUUZcE",
  "key21": "5YAurBu7MJoJ3gfGBYG1NZRobLsxz5g1BtYQtDFCj1kiP4B4gj5ane8HZ2DFCPf5W3hsAdBdmpWkzbnCDadCcEVU",
  "key22": "2qfpN1hR5MDmSFkinizGQzxFPZmBx4WVh44zSYYWo7UzbgtqoCa5zq3Y2DEM36bSWKrQwkp2zyznhZm9KM5QwscT",
  "key23": "3cx3T6j86srpSR4CzN3GHjBTr4mmwLkiZbVe1uYYyZPWEPSnVwVK4U6MDhSCxTsHXK1LzXbqLjCNVPN8P6JjfBfN",
  "key24": "2xnQRJtRoXo8JS2GNjs29KnzsK4QPTVzUSvJaoQN66ejh5j6vPCmpCFF5s8MgQBmqSzaMPQFS39vbmxTRyZE5n3u",
  "key25": "4BawLPzADghFeiCnjx9BprGasgrcKov5111a98hNaTaC2YdPB42Snk6crDvNUYf3xpfH6zhWB9yPih4ULWgfWbZE",
  "key26": "3n36eyFArNS5sKGqirByEAkeF1Eykov1NjxW6Xw94UsyVzZHGqYEEDRq3jae9bs4beGZN1mQqkziZMNXCNQ9ZHkv",
  "key27": "3Q3AQaYjGtF8tgWnWqNy1B7YwULjm3J2ydPmaQEgShTWPcfr7v3txSnqndRzvNtoUXwbMDY3xccNPwpKXB3CvZWH",
  "key28": "5GoQJEFexFxXT8vgAEa996MQueDZcrzJvPSQbaLFkT7o4f4JRYGB1Tj3ENq4NF2mg3UsvsQTCHEHmszpZ2BCos67",
  "key29": "dXntT9mBXzmUemViGesU3sR8LUeTGZ3XMGroYnpUMnLC6jKMXjTho6CQZEyPCmtKhAabU2F3YWZGPALWvHBRgtG",
  "key30": "5W89xyTyTFoEq7cbdS1qijg4WWm4GRiqqDeKWt4wUaSrAPrsaXvKGdg5QvN77nF7FvsDtBWaR3S3x1vaJ1cVE3g4",
  "key31": "22686sA6ZNhRTYbmagXnNDop549JUo97jBpuxyfCvp1VowCTaYFx3EtBCCer1nwAQmNVSaR8Qzpx4ff5P78CBbWk",
  "key32": "4xr45DfcaXoQ3pXTkmTC4ikVqhY5YdXDvBSgXFtKurNjYmofBF3sXfFDq4jaCx2cmiPD4Nj7QbXP9ytrsoYxdTja",
  "key33": "kE7U1GFRErT2PNRppU22Y2N9V5vwVfZPtfrso8rwLczLphE3agcQ1ucHGNkdJkZkAc9cxkAu8FmpVZgMtujtaVb",
  "key34": "59AEYCBPfAAfatJYPRH5KVFDUc9u6vigwyAJFqrRddT9EzTfnDCRhjUv8fwjshPaQiuqn7uwMfV3b3sbVVZrENDk",
  "key35": "2oavboXY7CWwe3iVArsXTDH4TzABu3GoSESnGKrWp8CkvqZmWbYT1kpRaXs7CXQuAQsSLc55sDn9cwvyizkWysu3",
  "key36": "21gA1M6TAW8WqSSDdXjmxafns1VUDqZHUQUZKLzdsNhA3EuHQHF1sXt539SmuYdeB8922vFXxASBPxZ19w67Ceao",
  "key37": "fp4TSxHGCswtY3RLbaywa88FEJumpBRL5BJrCRPDTdDt86V1QGdDsydncs1H7wjhNARGUGkTt79e9FKmptPumf7",
  "key38": "gqiZxw6uJKgQha8CMwV5dvftfcHSLGXCZgJyK2d4QwFsqghKgCnQeeXK5C4oZA4CcpUtSTZgGq6hKs8gRBRscvU",
  "key39": "2JDphuLfCnSwdTBUyDiNJ9Ps7qDPHuJ13RJCjqT1KiX9SXap8KRKXWa1zgh5S6AhbCFWVc66tsMQYtJaQtbPkubw",
  "key40": "43SSyoBDbnGGDY3PwAMKJATWNPigVa2csZN1GaLCj36A9KQtqZpoz88NUUc6j57QcXtgZapFs2ay2VBWkjgqPAgc",
  "key41": "4ciuQi67up3kocTq6fp4aKNpP87izUhjGvx54nBc2yJDPhqio6u2bmNTFcEJf4ykhsbgVaeL78osTvv3jJrGTp5p",
  "key42": "4UUyK3a3HSKmoGXCXC3Dm2AzNTnhFHACZ5pCf9e5vAZjWVg5XjmUjsQyy3zKk6u5GXDujhGHWZp4QPFS9e7KMrVs",
  "key43": "fvFGxeY5URL5y1kuJoQgU8bTPbqB5oJMDMALgt6A7FUsLp4k3Bkg2LwRSn9T95xbVDz1wNioYp71FND6FEqRvvN",
  "key44": "5mHSQrsVAt3VZVNgmpnT1RY7QCfzfeopZw1smiRDq2zB8a1qcERaCzLwWB3udPZFT3hNx63SmNoYwxjL9jYKvbEm",
  "key45": "5mX2TfU3YREKpmbgr1zCrwG3BHzcEYdhB4qA4d8hdG6wqqVAcifZbhdZVZJr1bKbGdTdsqiDSfi9esz2SRNVDBzA",
  "key46": "Vw9JmDxWubjJDxYhHexg4ujWE82Q8ieQsEqY9bQruxAu4xrPwfs7Ekd5TtqhkcmXMqtqcJb15eNnNsfhMU314Rt"
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
