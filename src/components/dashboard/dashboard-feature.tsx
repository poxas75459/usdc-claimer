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
    "5SXrJ3afFY7HV86gtSZdsFnzWfsRQAm2aWyZ8JnseCBNAsU65QzeFH6tSYtYhR5XhSFeUu6PSPyAKEKUcL6fj6NJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4JNoShiTEPgVxvPE4DKQmrJupnVu6sXXKf2CBwRB4g4tgm9FQdfK5BHtwt6EjxVxQbq55SscRwLEtcQ25kPWTV",
  "key1": "5CXdnd2TGZuwpcPN21NGhyYe4K1JFoiHSZZzewG6iTsaA6V7NYyAnj5TQ2WH4SKapoQqMYxyZBVdHpqeQa5XZPZM",
  "key2": "8V7WTn5wDGAsqdtLH17kxQcSzawNrbnEqq3aYpS1qFDazokQauoG4n7omUj9AEJrPfPZ79i5YnJDxQ92CHniMD2",
  "key3": "GDvLj71NSEi6jU8YKUimhAor8tdKcW1UWpXWGKYENsb5qQQjWgv2zCr4AXbvX2xG1Rm6GBreddMkuAWph3NoJUS",
  "key4": "2WMkMU1dvoStTEsKamxJyvu17a4ubKTS9mYNxprbjhzHCJSdRtEKqKZSH1uFqyWwVej2qAJVUt98JkYXSbnFDjug",
  "key5": "58sY6iRBs9Wx632rZmjXBhTNVGN4hfiZv41KUDGhWXThGBGC1G8ATWaLws1mqCBfJccZyk9NJ45jaEmR4f6aM6xS",
  "key6": "5LHTZZrPFQ9PVaNpt1mQtkqVZWZ3E99Lvj97U3LwEF9g9t96JWTZYQV9H3eaTBgBmwZ3GSJGi7WbiBarwLmNuF5h",
  "key7": "5wMQ6imSYg76vCwegMTmoUdhd9v4cpVCisG81qBYHM3cshXbVFZGH5uvTMHMn5QQ6AS2MTCXv8PPC5q6q7RsG294",
  "key8": "4CF7vzinUBB22sZuY7mzd9PmrCNBKBBHofMkZyNiVZP3K2KdUwTAL9dzn9KbrgE9HptAZAuSJXesS4U9ZQkydaon",
  "key9": "VuGyeV48yrZJDvez7Hwws4FucdqUEq6Uqadjpvk9crjd1NTxKAHgba8BBPX8vuw3USxG334s4PyTPhir4GGmQ6G",
  "key10": "5zV5AZmw6Zym2YjbwG2XJZNpS33fFbbGMyoCUaxN3usisuxbecWQU1KvcriwhkYVtWBxXrWe5pNM4M453DYimvqh",
  "key11": "NiUteanHxbjBEbmALTp2xvK7uLfUGSNAJLboDxew2KxVmnRDHzVaRwZqidu63RZapcHYKXTg5hZtzBAhbUVStVD",
  "key12": "5UVApEWvXbsV1TbfygwmBAaE6dW9CQbiasFCQKN6cusT1ywBQBNcvVxEMJ8u6R6d9zKjurZEZvf1vq3dW2XgBqCs",
  "key13": "4x6e75zUtF3wFcgR4ZU7J4QPtTP5uL7JyLo9HYzUq49jpJxgDdTrbJv9aeNmuikfKW6Gvr6oDQJRJKDmdvmZdwm4",
  "key14": "P1iP1yBCq6hS4ZZoWq9TVHz3gUnvKvpzwH2a8vowy7PXC7tPjr16rWyTDLNJtaWVpNiGiRYpmg9RkN8S6sqPzpC",
  "key15": "59DXGLLtAormZ19udRkzgFaFGSnqLpqLn3SkMEQyzQxfr9eJ5kh47TA3AytXS4ZmXDgjBQu5GrmE3Q3HNxUDFJS8",
  "key16": "2RTvzoprmMPUBLjVoBhW7YKrDeJBD2HaDHsePN2LFJmbk4rzQw2KwSnn6ApTRAqyyEBxEYMwhbZqSNvYd4JjyShf",
  "key17": "8R1AQnx9KrLx5gPXjqoEgtHXxkS2FjaLZhg7AJRqUfDuvzCDVUTEDVw6Wqsrmx7Hu8S4miWzzxaNTsmHCAWyirJ",
  "key18": "3uDcuRWx7drf6gTHFd2ZbML5gBBEpJiZWonDXuahuJnm3j7yFSJpmCeqpVJGw3zCPHon45rUX2tvDvSBuSLDi2rQ",
  "key19": "3q44LWfVcaBxAbLabhKKu92SfEszSETMsXyKy1uE3JQDHnMW2fxQehUDLS6Qm1G5VzcQNm3C5YvsXnY3xBSLbgMf",
  "key20": "4pLFcDbC1C5PHBky4cfivRe5NB4FJTUF2iHrUcLJQLepXjdAYLLAPpSw9aMwXgpDVnqXwBccW3aTAjXxpsKc6UTd",
  "key21": "5NGUYTLzkk2THee8qw3oU144QezFJDn3sRBaFLWgwFaHyDPDZLhkpAKbxojQHmQF7myy1GcW3tv8rkGLR7C5rEVt",
  "key22": "4w8HW5A951bkiJwP6hPr3NZMamyPxdiw2tjMuGFa88XNsNd5sm33PZakwC7SZGz9XW3yWaGaizaEvbvfgjyyFw46",
  "key23": "5kdJ3s6dH9EZMp6CsjsPSFcxLhzCsZCEMGgAamUswctX4HYeJe81V5rUzkjpjMyJNAAqFR3sdavEXhJL47ssmcd2",
  "key24": "4SbhHejhhUoXXyVdAdtS9urYcgdcJnkwuPCwpn4GmpgYEytPY3Q43tZ2o7ryNE4podxqGqsSeDDD25r1PB1UPsBQ",
  "key25": "3iPdTJtFjQnqSQoiD4S3tGCvXceGN2spTVyrzLrChX179xfQRC2i8gd7DyPE5cG4mDqDBvE7Y3fHUAHzAsXmvzU7",
  "key26": "2y1qCha4Qp7atpy5BaZk1LJUURphkvPvMyXVTj5xQb3GDRv6TDdQQhkNsus4kGFpeq5KsgLwFAuGWfx2ah6tza1Z",
  "key27": "D4ALbk6nxCJpbFHUWWcVjFFTdNjGAiX19yoBfoR6tL83s249f4TXHBEcgebKwfBmmNQLUNCb49u52mUJc7vogJo",
  "key28": "aiskTX3apg3NSS8HMxT56G6cHdQnatXobEpo6V43nh86FrsvRBkXWvMGcGuBBpVA7tf7qpcQ42qKbdgctomVyrd",
  "key29": "3rCkGhuNj93QkBX9tB7ESSdnwvsV6ySPckY4YJ3qyNuKgWQUk97JmBCB8WrXpDZigDgUAecPqyt7v4wPYgP81ZmV",
  "key30": "5DFS99e3RWscx4o4imTm5B4a7MaWNPM4tpwwWmMHC7a7RkCAVPx6pbCCwyUGbNheifqStpy91RH853NcsF3jW5HS",
  "key31": "2oJQzk14MiQSddHHF2tGmBLepxMFzGurHGTpS1BgB9Du3VndKjPGsdebJFXzJWS1QxAs9JRdhXBCL2Lwu1PGdn6N",
  "key32": "3BdCEVP9gTjW8yZuFpG9C4UHUB2PDdMEZXxPeUbTJJDMcmz1RMtpThQeKuY3J6WfeTzjkaSKw5X4jmbhd618Rh9q",
  "key33": "3ehXRCGCP6qNZbVpK7n1tooocz8FFR3AJjKh2C6zqTWbRpX2HnSoEy6rtAwTH1J5YJpKjCVyPKP2pzPKPmGp16Ce",
  "key34": "2RHFfyL3hnLr8PifNsvKifuWPdsykVDvqbiPwKw9RAxjSUtTnAcTZNjQUVEdeBTbe9emsLjJaNtBrXNr4BsnFekx"
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
