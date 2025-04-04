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
    "5agVMocnqRBGS25vCvEfZd2sZ2RKY6t9cPAVDqVYzAQrD9dNAPcZLrW1nXsERj9CwK976VWxQTqZjt4E73kakTeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sToYZedPeYDNoatur55jbms6QXrT2j2rEEWqaQ9PXzmK3QJsA3ewKYkN3q75am69Ms6T2UPhdmNrjtytrjRMoS9",
  "key1": "2rwxB5yCuhREk4E4K1i9QUWkoaDgq4ySFw3rTuNgkbBgMGQBPvpo4m9zkzWXrxSyXhzCyqZkj7xtZ6n2sBAkRMgy",
  "key2": "p3XpKHzCMx4BxKLyqNEdrVkpJhMPmBscmj4irCt1kmhMW4BNmPut21kAD9s1L5bDEkK3ECEyu1ZEjdpohvzxay6",
  "key3": "2pxk4DMNjybMZsKPMtmd9CAB8TWruj9zQS37iZwdp6UtBiJqJ6q3Kp8xvSQtxQKNgVzu7gQpoSBQbcsyXNP7HWmH",
  "key4": "4MFoa733qEPsHZHtcnRiBDaAbTGTS4tBVwo3mouFMVkTWcKcyNmMPW5a3ven6QTc7BE3FT5jo1irb5zuoQ944xrh",
  "key5": "29V53uq42mCKbQ3gdjCseNsBBiJ1gu66dtuXJkQp1ro5Tm8xsmAsTy9xcGwiofsmyfzjZH4Jc3EzLyY2w3Tgcyhy",
  "key6": "4uXWucRvByodmRERa9gra9X4kdE2syDHDzgxEGuqX9f8ioUQE5dRgktD6T7SHcNVZxEoJVZx7GpJvPE99swffAJ2",
  "key7": "27ZrTWQg1cGkiUDsC3aa3vyuAb87Hekc2f8Wq6pz1htmxCfRo2veF4fjgfdE8FeneSe6LALkxt9es1RmLkY3FFWt",
  "key8": "4hTeGtKqEYMJyvz1AYgpVHYtAyFhxsnVrdyH7oheyhJehszJGSV6G3WEiGHNqxtEbQNVqhfvdHmRYNYXY4pqgmRh",
  "key9": "65rihEcz1TdPQYo5KLBh7GJZRVz21j54jFfGHVS9hBLq2RXw7PLKQwjVR6kZWeXT9AHDVvXFgfoe71DRnxeZcmZV",
  "key10": "5dN9uUbxaC2QJGY4ZDgbP85PtgfnzfMXmpDXznEN32n76nL8pePVmTCbT5TS6Z5pijBZ4Cv6Q5HLmLJjeVYBxAvt",
  "key11": "4pXHxN4tu4kyMNLUVmsHsXsbGts4cpsSd6GP2VmXjNTL2Zn6CcDbNJbM1C6Ugft1FuySM63V9F1k5ev9pKgCtzbn",
  "key12": "AUkf1Jbnh8MRZ4F1q6P91q5qjmoKtbWz4j41d7hkEZwtSsNDNPvqeZTsRg3AaCs6CiDGnspJPHF2zGaZ2GFecCm",
  "key13": "vaFHwJAjtQCFAJ9qPbyRyx8HYgR82GedfJ1V58etKJQQPG5uLnxLjGrRCFqLywFgaJh9yBvSo8Atu6H9gV9E3bi",
  "key14": "2Wsw31np4Ge8rAaf8h5ejejVmojVEQtYxDMNtARxcf7G8FVLHYVbTVwW93eFmDximuGT7LrndwcPcnACTmLkZCdp",
  "key15": "3hNLaf6BKh7fqrTE5yrfzEcPF2f5zVTeGPcKHtSWQs5Hv1Dfn6Q8xYqKZrr7ZE8rafMgyRF74YJPB4fSq5oJpARa",
  "key16": "5bSCUpFyvq3LwWubQdi29XRPcFpxvZxUwHfxTz5WtuUdKLJcsnWjPspbM7a5ioe6kaKfABa4H7j8h2CJ6NoXcQSQ",
  "key17": "3sPcA8QCTztibtD3KuNoaGCHeFd8K8DqqeFq5VyAWoMHpkWVy24n5od5VriiPRsTSW13Upxru947QT8aEUkh37Px",
  "key18": "tCVowx4htCrboJw4wybMDz94v1CMqEcL2WmDdhmUKizWeM9LduqRRFQSL2vBTeTi5uYrkJdHchJrcFTx6QXjkWN",
  "key19": "5DmxFgdgjpPJBJzeP1yDG1JuUk2JXwEi6GpoLqPYuZcqXJipQfgQcA9AUrTv8YxbUyCbitCfcdfxUPBsKJbW2AXn",
  "key20": "2Wr8dHiqyJhZ4AQU4ic9scX9Qgiy6biwxZ8Tcc4KBBeB13dZdswFRuc5ZkAnsvroR8hTjqxcnJ9TGiyctuq2cnaf",
  "key21": "2AquoYpGJLJqzRFwuVETH5Ha9He7cNwHbQLbi2xvdSRtwcnrfUK8iiVV53ftQ7wWSdBdyrFiek5VNhNmqHDiygAb",
  "key22": "5ZpUsvQjfphba9pizeFv62CGqmVwgT5A9c9QCpcpGGVyjksNSczBnS4ngajasaujSa4UJ71U5DHw3FvXU7vBbteA",
  "key23": "3qbcFRcnXZzx8KGKDaDEfiLJ1jVbxsqeH6MKc8nH7CoY2Dv1j9WBTK9PzbQxvnFeA5EJHtsTaZ6vCP5QdqZD5cJi",
  "key24": "4xzSz5tLPv3BXXPVZ5EDgAQ8zLh8z3HJCHayPS53k4hLFwUmpUN6D2tvwMJzVyHosCWTcAN9eWtJxagsB6KoSo4T",
  "key25": "53iTKX6oM3gspEGFRmZztZyhmuD6ZHRCZf5AsrkKXhQBfSrGngsK6B15QVjsozG4ygzMc4N3c5NoKrAgo6daWEJ2",
  "key26": "512MxLmcd8D7Sowf9zAjUg9rWFSB2TRsyhkAuUkJPhU8zNATnK6SK4i5YcfU1miR4z92cfSxZGC5eGgHcCmxNefN",
  "key27": "vxwfWjQv5LeuonUHsneXdjf6UxVmGgQbJSaYbLkXerDwL48hfcL7J7RvHeLeYorVJYYeY3YZDZJqXinKnUvJWTj",
  "key28": "3gRtQg5ZHftH1iizsZhPmmZzHq276ZZ4eZRbmW9KK3xepsCaCPVNgw1hGTkcEo7SbqKTgKQVEUZWe6hUqUrsjZFt",
  "key29": "CofGkMVngL81a9upp9d8Xo5PkLk2bT5JZhb1hrFyvx5jJY6YspGGwhbXf2snKmFNujb7vPFhZxBWpbRvih2FAhz",
  "key30": "5MVnNbfEDRX5URENPhtrKtMpW9r8qcS7jsu1odK6JR5hgRr54naqb9Y96M1tPL2hsZnqVPCJGCC3MZcaB4tBhUak",
  "key31": "4oaDsdYsxK7vCeex3e7aqapXSswqbjjunAC25mvq8GHvNsiPf2DGrYPUw8un89VGASC2vDrv9DTsQ61Pqafrgdp",
  "key32": "4hL9tRmPQAY4BK7oQjma547TqPs68ps2RhCcvN2H4atBgUgSCdEwkrZi54BGYifcQFTP5e1TohipAtS2vsJaUEa1"
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
