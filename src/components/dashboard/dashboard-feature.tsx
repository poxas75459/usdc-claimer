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
    "3Y8ikkSjsmL93T9PdR1KXacyR8X2FobC96EBusVRXy6p1YjV9nJ1Q9v1EZKKKPdKm7AnvLQHKeo3vpTk2WiDn8a7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UT7C8MMiDrX59w9Du3AbpjzaY2w5QfxUJ9BRngi2W7Zqcrhu8gcV442a3x3fnHD45aiceWrYebeDqv17mnreRGH",
  "key1": "4nZx4Yzd39sjvonZnVmxMhi1eaUMUeXdgyJQ4u4UQqTf8y64SxJ6pSLvBXRB3Kew4XcgT6XHbCNJQRr4sJmy7jF2",
  "key2": "WtiCKcCotDqvMzW84Z1SM7fZQ28Jjpd7Kgrpq9AZ52YEdTfbLm5zyQiZnfkULGygxSsKiwV8kCLdedWxwqQKhCV",
  "key3": "4Be7E8q7u1ZKsYT12nk3Sc2RYnm9sDPv3sTgm7CwDz7S4x1NWuGpYTH7jNewYwZE6tiuQxCyJGGBTAfedahr2iSn",
  "key4": "mr7stULc4UvEU6kn8jEgLEmBnUpRKrJakFouqSGy1JEEuDE7v4MNPxc6N7aVoKcTjSQqQ8JfTebFKxZpDgxiGS7",
  "key5": "5x5eF9ixtb1GK7PmU777wkZYLz9MmJe1efv2dHxozBN6s1XZLjMEo9VZXhRzW7yKheYo7WN9stx1xnxCn3c2wi7Q",
  "key6": "4XKdqRfsEUqgisdMEq2gD6mqePTWpbqBCVwqwkJF15i95U7RyJBFCQuPRYwZMe3z2PJxfMMmECqxpTZSkEXQ4w2u",
  "key7": "3Aqw8y5K8ehScMpXjFyP5EWfkKCMknoud9r86j2Jc7ZpUbhDxZW5ZEbbLhRoto3bE6e1v2rpLCHyR98XwmiMvQGw",
  "key8": "2n5xe64EtZkeBAUvLTSQkXJLqfD19RHAKhepa3ebthaaMKgfvHJiLxXHFAk7Y2Hq6rtSVF56V2Joni2cgQXqtTpU",
  "key9": "39r2B7sWxZZ9wgtN99Q9v8V37osLqrq9JaaZe57fxNDVaAbXzo3i5TRmrV8ktXDBnqZpfP5VSFfzRns2J28ukKEK",
  "key10": "QvFG7VFkCG6n2GuBR8ckUL7SEbz3yuvb3epvFXzMhUBUoHPKXeSeJFEfjQ9TVz7mdUHEycJgF1Uaaz6QyHWckvB",
  "key11": "4uKA57aWbo2Rn16dbdUb5K1UtgHMjVkmkyjb5rF7Q1hFK2qpd9DeHgguZ1wjzimst58ZYTVhoCNTmMnL4zaAoEVi",
  "key12": "u4q1vYjHHapbNr5RQB77vKjGJCrT1CiJ2MuD5y4fardPPXtqP9ULYpvZKk8wiNQEGMh85Kctt4rqdfuHfDLzFpL",
  "key13": "5Zw6tYc46SGJn5NuiLM95QcaokSi5yrKXr65cjQirKxV4KyteMAFJHxbXDQxymANFbWrqfyVMuxKD7o5G9rCi5aH",
  "key14": "4nGHq9krFmupyhuAuE3nN8Qz1dPzvT6ohiaTSZ1dNsKjJ6Z52f6cwW7uL1MWwjbLZvBx6tinq7Ci5uWahGC88rE9",
  "key15": "2qpPQRjXaNxuhJneJeYQD7L3szw9wC6CxhA6rjGfJMEVf5cwTS4SPPWBVL3gvrATpMMMBh8gka1QpeGp3i3Z9PfR",
  "key16": "5SqrfxBZA3g4kL4mPW4o5pSRgto12xkLraLXzFPhyDzKM6rZNPA6DKTwQNeZGTYcoxiD7UKJbRT7MXcDAEwLx79y",
  "key17": "2ZNf8f1kRt9ffCvE3o43NEsPedY6kB8C43CK1mJk1bkAfxhKaAn762b7U672p91NVJqoQqcUh1EcopTcX2m8mcae",
  "key18": "samSoKS8rUFriE7w3PorzyGoueC9Se6tS9yHYFL31CWZyf7EzQ5E6GCXy9AMZo7Lf4Ftf8DrW1P1PvCwnKogecB",
  "key19": "Psi5Fa6jEo5oErDHgYyrXpimuYGc7PcXs9uQvfkKpR33ivSD7mdHr26jhFv88MbBQtSM4tk632UpgbLJqpJZdy7",
  "key20": "2QJUWUR3SAzF6QQqKDuKhdZmeMJQVBqPuuHVVaDsj1sr8QEqRu9qVQcwx3PLLjWBz2jbKLu37iUGGEfuwiviw5BA",
  "key21": "4V7WzRfH6jHsFRNVbmWnL2SNb5Cd1uPmX7AbQMhvprkaGEnPNNHUDouJQnFerFcu5inbbri8xNNHJN6BURZXgYo",
  "key22": "5BU2EwbP2MKgdS4HSHCGz6LZvBULs6H2871X1Nvb36gZdmeDoCP7cjAREjKeZ2ReVuTGVrSJGjucgjHRTkYC51r8",
  "key23": "2aHSL8XRBBfbNJmv7GMLdpzBLAuwr4z6KjcGYfHxMmxz9r6EtK273KqnSqNctzy9V63CZmo1yeotkaHJMsCfJCWi",
  "key24": "44zrTT3RzXzohhreeEVifKMmqV4xELtFJvojyBRCzrqFz2YiKoH2FTSAnQc4vzqmS7zNLHfx3fbVzw4VX89gwB5x",
  "key25": "FDGyfr1etDYRBDunEb4dipSmrJs1ipy94VJC9rG7F3ZBKmiGpmfktYW3JLkJwrWm2RnBne5UW95jtVHT1kr2wZC"
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
