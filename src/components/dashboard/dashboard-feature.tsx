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
    "2Kjn6Uws1bvAezSw22iXG9WyxqUqEwuxEGEGhxL5bNPZ3Dvio4qLUvsM78HvHzsfsQYcKTZiTkGTmypr8YERjH8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWM7DhGD3FmETS6PPAXCXmZfo7DUirNHkt5UpZ4vWA59VDaBMcsua8YUZjdcVQijHXcWRjfy28zgHCRq2gMoTSd",
  "key1": "3LioQsFyBTyzhsyzUsNsoeSM6EZSFfsBRNiZy2JyU7A9VE3sHqB3qwaScSCYuiRJmU8cmtKXM5t5nRd2zJZWb1Mo",
  "key2": "5osrGNcCFKRJjbiSReyh3NZnsbgXrmwqMLmMc1f4N4zAE9mbZKsxJSJLtW7zNX2Kysoa1Zb3pJ2VwFrdEKbWJb1o",
  "key3": "2qse87PX5uXb2RhEH9frG7dTd1DaDopbPAMuRu3awpgNbEmyvrahME5DyiN7yk41tUGgu6gy2r1NmoCAvDHnNz7e",
  "key4": "Qz3CmqbkvgP4KzHW6W285zkqz3hs4T1xjQzSqckii3F6roTGocSDTdpQXqp4v8G5n5TKv1DketX7hMjg8Kg5Fud",
  "key5": "4Z8Z6XAxRBeRrd75JyVFuxLDYco47d7uE9jsuA9pUzcxRrDJtVEKKrMRzFNi1L8fmXK6x32pRfoTXjmUHtA8Deq9",
  "key6": "5kZMXbTL6dRzMEF53NCVvdtcPTCYktFrFuPYb5pQw49AgdtNTA3B5jtAh51KpjCDF9gJpQg19k5NoAQLxUkSdfCk",
  "key7": "4XwBB4aSYAZ3UKuFbdRPsnir4XBxikE9tULs5zhckbfTnqQ5Ld9zGd7z5batnhH65VdLxMxr2drfsdTU3VGuTzJD",
  "key8": "5SCJZz5xVu2CmTMnuBGn7XarTumake3kjNjDmwa8Y9gFgqT3H4fd5A7aWsZU6gv9SjfpyfaF8FtmJttaupgeMyn7",
  "key9": "5DmKQNs3ZKH79FZG5hGWirsDoatoCQ96CwWwdtt3Uown1dGySbz7uNs5Z8hsHGjmwSDWzDn4baTi9mq5cnYaDBC2",
  "key10": "KdNgQWx4VN26XTBM7t5YPhEGjxy4rJxZJvD5Giqae8HzqN3DnyzNun1isAWXVRXApDi3HetpHhn457Vi6c8xppL",
  "key11": "211nxWSsxGGZQmDsAV5mK8wEgp5Vz7E1MLAiQvYN3Zjvt4jqGfevBJ4DC7o68XJ8pN6EsnMaf419n9anB3zmuggd",
  "key12": "4sBKGnF2juyB1vSQXTpwekYprU2uz5iDFCYuo3gWYR6Kry1uJuAvgn4zqkodqvsS6mzFhF8X4SZuNn6F9q1dVqcz",
  "key13": "24wvDuiKYhoVPjQGoHSYiCmuoBAjguCj1eSE7dpCGt4LwA6rYPsbsKpVafwDjqPmEwV5HCtjXQ8eiRSJ8teLU2Hh",
  "key14": "4GeGpMguiVkmocCSmRFShtz7L6rcM7CvJAnoKtBQMEAKRrWFrR89ZLVMkByTdCetdS7fCr9A8BAEbrx3FpfksFRi",
  "key15": "61Q8s7UoLqzNYkBCjNhc5g3VfRo5EuCsKGBg6dDkaRQxKABHg3BgnW6P12AY6sDKiwS3ZkT1fbgUoJdmCowHcTg",
  "key16": "3yRHawbGx3yCXrFKyyVRXfvCAt6MrSTiGdG7h2NZ7wR8UoSBZ9fMT24jbB5kDJrRa2hgRX2efP78j6P9fZsz62KH",
  "key17": "5CzRqy8P1fC6RTzRnhEuDPo4Sb3pAENjTc5uq7BZXe3MEWXR3EuaaF9AcYcUwkovLjD23wzbmRWX9HZt7VyY6Xuf",
  "key18": "3J9BwRrDS6hiiuDXyUJypoNPjMUEu8dWspyuDkKQysT67oC1Nz8x4BGnATs2SDN6nMAWoe6nADrFY66xjfMg5qLq",
  "key19": "5Kk9XH1dPBgCFVXWpLjdr84TzqCJbUdd9Lgo8kpGHF8tNn617Ko5VCfMRijpHrncs75aiwKcG9BkbeYhdyvWJhd7",
  "key20": "5hV2E7wRTA7z2GJZbpxdgTGMRUgSjBH4LN2j3fDPA7tdy6KF9xvfLBcbnXmP1UjAppTS6GEZLBwf8dJYWEcvtfby",
  "key21": "5CvmmSHJbteFaAGrRwTCjPGg1qp7E6VSVU2cuZG3hdVeSLhGivCJ7WANujREFVK62VeemXWDLEEwnkHPJs1w5j3j",
  "key22": "2x1KE1bKfw7ooHwcdtgkWcN3gvuzGU7LDrexUx4FyqogsFYSyeuJGemUdU9pmdNmJB5smt3CWiF7cGykjEhF9vT",
  "key23": "51dhDeg8SMPSMzrpatiHeZk9vz4S6dNpLFPuHMPCdyAeyCWsJnh96KUBRgwX6LFVCAaLjKwMweYgJpRJbXNgtR3s",
  "key24": "3YDDD3v14M59bbrfqQCxHsGoG9E4mSiQuFGhhcywu7y1RaTG1ZFX7oKZpqZUv4zmHLkNknizwDd2u6GVUdG6xVKk",
  "key25": "wQbycxzQStEMAKuejDabgbJQYzgVS5dXRnzRGhB8qrEmZgi9LdMLEpNLz9arwPQUbwPpnDBea5vpKs3mn6jbeeZ",
  "key26": "5JQhjU22cS4vjtvn5ZT5uS5orarnGZx4LbjpW2LudBgED4YqGBWn5Hr4Ck7n8h2XRP2ukLFrjphfdahS5t85DCg6",
  "key27": "4Gbw7DeRFxXqTsEfa5aSYhwJG2TEoxrVTKTs48L1ABPAswCmbM1kK6Nv8Y2kuZ67KAMhBF5A1ezUnwqFXjkGCQ4D",
  "key28": "5BXnWXcvx6pw5A6Mkv2t1YsjDoaZjEFWa6VhYFQPKG5WNcnVYDo3ngfE5zH4mhAWo6dtvk2MuSKKBkJettEK3Vk8"
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
