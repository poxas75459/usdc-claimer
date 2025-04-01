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
    "2NZCXo8oSUrdyr5xDcQfX8T6JgsYUSCkkVA5U84TL4ErnKjWtr71KdwEAw3UV4e39EWjAZ1tquqPpk4Rgq69EgbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRYbDKrbzi2kUqLdGqK9HkUuHQz5opuw9DK7Efd5vvxtkw1t1yiqMvfno1bzW6vJCSZf7y1CuHUSSV5oosy8Vph",
  "key1": "XLz7XXCrU7PPdN3XVqg6811czLgX2KeQo277VG5VfvZTuCAiFjxRSy9jUbWxXLPJJDwmdbABcbNAqeTynC2U5m9",
  "key2": "3eXCQrofnn6easxRjF5i6RKxCaZPMTdaKdJvEgRh7aGJpPzKmCDfHeqxFuvjWkB5KWBWtzF4Mf7pV4Z8ZY5ovGfp",
  "key3": "3ePYQzm2rx6Xfee72rWmx7yqq3QFyUu6ifWoze7VsVnLH8uXoJtf7jNU3yjbiuGRgEFhF5Tov6pLgW1cHzYwieMD",
  "key4": "bE4NNUWZ57b8tn7cFXzYKPJQPiZm7hYRjwjCU6YWL7Y4hNXKzWoUpsYQm7DVXbWaU6ch7vQTwWNc3GNBfSCGVAb",
  "key5": "51tCSVhF7C2xZZopkxU8ssWLXvTgYDxvLRnnGpevPjD8YWTP7V89g7fkTgeozzibHy1VY96wgpiYB9JXBbRMPko9",
  "key6": "G53VqE9YjLF46SJgSUEJtqkPmgUsNseoecStz9BqTVTxsTWQQUQkP96nUeXU6iUUta215yVahchHrcGLjyqWRZU",
  "key7": "fHYKoLtpHPzefDMEYQKMMHVg2VUApxthPi4UAPtbwLME2XKSmKjzzHCohznFYpwthLCPEk2hUi1s5gtLhLxNj8m",
  "key8": "5GDVXy2Nh6ngAXeYs3t3x3BrFP8uzpD7umedicZiU1warDpxWPo3i1PDDMen1rx26RZyw7CjKgdznf7BFo3zcc7o",
  "key9": "4NRPZK5nxVKyguJqS761aWBbZhH5M5oKnnniTsxdTJb4hgbEWJcNykig5j15AEhRs1jmuW6YAoRpZ5B4Jz6mTJGc",
  "key10": "5Lp4MDa936X2FXpnqnwHmysC9Fob46UwXKAC61wxf3iNr168REK98kSGXgNJRLRmHX4rYiqu9YSHRbcDQaGBDTgc",
  "key11": "L9V4z2J2UCa4AYQWBkPS3DMFF7dBKDikm75RT3PHx7yShNSNU2ZEZQJmAAQTShw5ghMAxf25TvtN2Lst2g1YTDn",
  "key12": "4yzzfPKovTasK5Q9M6Hc3RwQkyj9YU3LfEPwXtFuX5MVtKLTq6bGDBCTiz7pukvQyBjpEJhqu3bwnB4dBBUcJmvM",
  "key13": "4FEtLLeYn3FfUjqjY5PpyDqbAVG8cidiEAbmAz5mKCRr6apwvkEuS5tQqhm3QTBSWSQXfrg97MCRD8zhxaJL5H2C",
  "key14": "gYgwG6FAiLvejU9CSiPwQeGigCETcYFURx5KitChpuKzR3KzbCWwtuSZjG3dBjU8L5JPo5CHxXPmvXiHrZDXqAs",
  "key15": "3yBJYFSmZjmbeoUHaB9TKVCHuJcPy8td2JfVCSexjCSLHmmvD3YKBPYHALZSn3QDDb4uMbgTpoBxiZfPTwmoLxG",
  "key16": "4Q1K84WmQhX2yR1trgAiTLFFgKdiCjPHqBWCdXc6QMxYXSiAQ3LoCw1sWL8hBMvyVnaLPSNXZmvKq8Xa28iEnPLd",
  "key17": "63Fpd4cmgyGGdCWqTKjdnBVUwVX1iwJq9iHRXTs9qcGztgSqS1MXkCf6QCX3DVv1qsS9yGJgfMZMoRoC1sut1tLJ",
  "key18": "4sWAqrjYn47VG71zh3uD5W5op6rWbKS28U4Uy5wgtzd9bEirDdweDyY9oYgP4tyvmDBVErZswf5JqmhXKdrWtA1T",
  "key19": "22JkGjpWgM6BViM9n9uicnuEyS612V7A9a4LqJ7Qj3szJ2Vxqr5Hq86Dgvnjv3ApQzBDrfDy8S86G1AJWMfugimg",
  "key20": "3EjjbVtyse2GjaH7jzH5WSw46z64hwKRRBYQbx1phAaempuS7VZYiFyA72iZPSX3HkwHwuCChDTXLvLJDQMgevdo",
  "key21": "EdDVmU8eTJTkr2VBJ14XzSPVucewXqZNz6hV9vgKmjLFeK4Asm2vb188EYTa9k41dbMwe5FrVDpAS998TyHh9MY",
  "key22": "49w6SFAmTs8bs3g3JP3hSBWyCmTFtFQXDn9jbJU7d4SKubNCxfwXKhnzLV4ZNvo8qXKhe3VBUk53o8wpcUTmwjJ5",
  "key23": "giyLnv5KuW1o71rZ1qjivhWQwxrvFBxwyv11wko2ibmHzv8SM5puqY143fbxmBHZhbkLAAZFFWrKePSyX6Kiq5M",
  "key24": "4JUNTtEVaojP2ij3MLAvkKSoX3RnM9aiA5xmeRfLFJ7Dx2BPuzNzUkr9vfSNZCLivxZ757VcrMxgb7E3oaAppX9W",
  "key25": "2BSm2eJXhoyfJdMKiQP8jQR55poPDG52SxXsSk8Vw6r8ZtDXmH8Q4qoHaaSchWJiDBsHjp2PaCBJC21dmBBW3C4b",
  "key26": "2fP1Ref9YH6C3jpm2iuDFf68Z6XFfnSBKGdZHDVjq8PJpnywSRsQxUDWFNoB9nBbeBVV2tipgPAwry846qCpX9Yn",
  "key27": "353uzVU5VyvAgvifJjCgG7nLibZjcBjzvK5BsB3QsqVbNDZ8Yhr8z7ksqd65EGzypzzJejZEbzwTsoJot1CxQQZS",
  "key28": "NbaU5kkgb87kHsykDG5BaJLmmAHAnVvK5VVaTffx2Ly6RTf1km5erSkt2s4Srtzkx5xsx4X9i9pjkWWuTN3wFgR",
  "key29": "414TjywAuqEMZzUZyanuKusdAGmxYduL6uMMsChmBqqsk9dnHQXDYaQWe3eTPpqWxEpALsNkJcXrY1qgjXsrrB4e"
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
