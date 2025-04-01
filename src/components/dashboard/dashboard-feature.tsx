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
    "5KFpYXRZ3cxCiD1Gpn97pcwsiu2nJAYYSugkxXnFCps2sSidUUiPRFhXdEAgGtcVqCUqNvZxYxQWPvxh1SpEuS7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZxigMbWgjTN9PQB12YNz1H4mXX1CrhwHc6YANQsiHiTKts458QDPPi2i6FrpeJKgKsTHn2XB3Xgp283PBM32oQ",
  "key1": "5Tt7qx6AoGP5DXhH4BPs36Uy7ZViXXBgxRfPBX8KCmY6T4b5xyCy8Lgv1coHmEox2RFK7F2qCEqFKyCX5zpoJ4Gj",
  "key2": "3F7UjhoAEUJqbFeszS9RQEk6UiW5rN49LKXe4KT1NPdQrvAULJQX18GGctFLqRRx6KFEer1i3UXEX9RheAoHhVzT",
  "key3": "7sHzfEdUgSxSb9fgXTNMmfFvHuSgghrocgE3rEh1FSCVLJhyAahmtZwhaLQBh5Yey3xSXBkEcms8S54ygtRRdDH",
  "key4": "4CqpTyDh2FEdrYw9swTFjimL7b2DTWVHT99HaS1aCxDzf4Uj3SprW2pYvCkGjHxf85qqa3FVBTTgEJh19GPwH6P",
  "key5": "p3CBJvCHf5DsNvvqGdogdA9PkY3gsAep6PsdAEHGiSchLmxBQDxZs73EKhFSc1qARLMuJfy9hh2fV8gxWxh58on",
  "key6": "5y9hDDTAZroe75rk4rQorL5ZqGpbWbLSgf6zjxTzH2PoWUuxuVd2nVPSPT3kxx3d3gmuXowUgZWaLb2hYMGNXWe6",
  "key7": "4LPxXsn97y9xwNeQ2PJkJV4rQQkx3rXCQj47Rp4Cwx7nh1WpqXCDKYsevZD3sFXEBvtTv1LgsHrkDRMU5C7ax1Tp",
  "key8": "3HrgTzApP6YDvv5tSnC3GXZGQtJbxfpRWSBtSSr2g4ua5qFA1wttM6QFDMW6AiXntQYjR469Eocv92wLfXSdTv9P",
  "key9": "x4bGu5wYyZwRjGYE4F3KqDpYvmEE1VSdqe6DkT18QMhK2YeokStd3J8qVtbsUnrxLTkkfV1TVAZSG9FR846q7yT",
  "key10": "5JJsxVAKCpgaCZWHBaucX6FE6DemFqtCiqPdjcZDpyXiqtSCjXs7bik8KWLrGb1GAbpSx3AmdPiuAEqJRGsZSWdK",
  "key11": "5AXgczB7GAsvMrYRF8kSfmt7RFUnNaqUxeC2omPEcxiiJKwGegPUNUA2zwX8oP9MKN3xpVWngunnNvWXbwMFjQJU",
  "key12": "2hsnAS9p7qAZpdDhu3NRmfa3H3q97SJBNMdoKboA1qeFLNPMy3G4gzZtiukpa9hGc33zyUfGDU8fXi2DnxW3VYfi",
  "key13": "22uV1GyqKdSh3tRBwePEwvpT2UwQ8hqb9UXvRKSwnhbbDQkdyfqhcssZJYbdk19tKssxFCn9Uap9cmgqpJ2B6QYb",
  "key14": "5GzW9aA9c3KwVjXgWAD5rSVvK5Hr3vj17myyP7z6cqBb52Moz7vaj8sSfdQUdY4SpAeQV1M657pJLsfjpnKh58DM",
  "key15": "4M649rdh6Q5NBkhhruPm1JD8bRRhVNQoE11DbppP8zt5ZZPq2bcikYR2fsToNGnuZWzK372cokhuuM3pHyRS2tYv",
  "key16": "4LTLDrbuMU72Kg7yEFgh52z1eqy4uZSa1Df1ZiDLGM1XXtNNg3HVdiwwDWAsHxiYHkfhdrBLTPwA6vVLZFviBg3w",
  "key17": "jTGjr9EkGiZuLoprrQTGKDLBeq2HChsUfgiEQYxNRrT9pAhfZTuTKHtSPtKD91TkVQmSpMXKM8PUxRMA71S9wgu",
  "key18": "43KPFVnQo4dBoFuSJoKMyYhpCRtgmp88jjDe9FAPGwJkoWvsFwQbBdt45QuDYcZPXmPc4qF2nHvTKbJdxAp3WmAA",
  "key19": "5dMBDPDUWAm6hrSMYtEdcNQ2QhDKtrirGsarysW9Uznm2kom8HrgBR4s6UwHv4f3w5wDZLSDW67Fg7c9FVdGUQEo",
  "key20": "2xogSbsZ2GR6WBsRd8Ngj8wMEdmHbv28RNbJHKbdyXK1ZcG2srUxY7dQNCsc24aBEwS4Ge7jFVa9pqgYhw2YgvP3",
  "key21": "4dKBQ5mKKSmarbUVjR112pgYLupZDv9AQ6j89jodWFpvhDvpXHdhy6aNWRWMWm8GkixKUTKNUNAbjBgZwgJ6jtgt",
  "key22": "j1668ZGvM99RUZQqxqGknSpAKrHwt4c7gZ2QUwK7PwLbQuy7qsP3BfQakuA9xSxAS1cuJv7uHrEbYQf5jDpcRe2",
  "key23": "4woMGmx9frZVZLUA33m8vwWGpb1AhDbCCUj96htvjyq84rv6c7zKWQRukBRkzcFD5S5vW3xx2PvEGgeNVw6Pzr6H",
  "key24": "3dGAPZQ3zY1wEv2ag46ESMRBkWSkeCbt9Nv5zdri8bd74H7G91wXizBB9g98T4kksS8XEmh7igBTehn6hLkjKMJs",
  "key25": "2NXRkeG1TRzmCnZiAMSRVrVEGaso18PqSKxgEjRchfsDTcfTwfD5WX9xixYMqBrJhuz3n7AXcKTfhCWCa2bA5R3r",
  "key26": "4Zw5914g8PVTY8e34igRyzRaH7LrhiRnNv4EybYWhXjybpBj2zc72Y5KMNwHRyCRhnNgC2he5eFvkcRDPgN9EBS7",
  "key27": "3XTUs8as8HVoU9YCQAsHVu3QttQoGVHEqk18Setb5QZDYkitBSLNtNfmvSfUUZ3f9SNU2gCJdtsEYatGUiDn2cLX",
  "key28": "du9vEQRQRkobrZ8VaPCuZ4383yJfRtHuf8f43TRJ93Xzb1yXW46dekWZvSDbae2Uq93treuJroF9b89ZKBhmAvz",
  "key29": "5s8SYGzu25PhmG1RmBRbfZo8799SXBmeDSByHpGXq9dhrhL2WYJmRBtY3XrRBydttxEHyof3hd1WhQZhosZYgU2a",
  "key30": "5QTbzveoT4mhjXfjisRcpGuh1TF7ZsD7vjMDRD9i585bMUbySkJNA5hbHMxt3Qrvda1CvaL2rWsaG5udcSGQtrPE",
  "key31": "5XoYBAK7ywD3Ym71sRXJK6uXh7jrdULbDPyNUuk2FB3afC8oGNFNGZboxQVriL5NwvhDdz2mPaCG1CeficeRgTgT",
  "key32": "39QPhebPoqvJ1cYkZof9v4KynH5aUKiDXC7e3P9MsZWc3XxoLydXUh6EKMguMU3GwSr5fubDEFSdDmrpvpizFuGL",
  "key33": "3nTHUwVMotcJ2PrMnYd1L64PWRmtFzRjhZiUL9NWcTZGN1GeS2y949Cs57ywc3R7py1bXbZu7CDf5kYsoiecMwSe",
  "key34": "3TjCGDPNRyFQo9FkB9dgwwj1fuczeNVdzddHodDe8T3BeaLKmaAZhzwqeXvesgf6hqPsmw3be2J9wDujpgkdG7iZ",
  "key35": "4pJXyrFUjUR998LBFS8WJFiyJD1bGzs3nsyYHs2g9EfghJaZpS2iz58Ag6VXyz2HCxxjfJmp8VPrbQjNBNyMxZbw",
  "key36": "3XL3gtPX7a394gvzrpiwzbfafX3THarS68vCaUZif7E6VoT7sXrUhvQEE93AmKyB5Gq7XqeZ5UaWkPFUWENHBp6a"
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
