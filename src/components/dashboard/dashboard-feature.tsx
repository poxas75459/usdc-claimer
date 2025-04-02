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
    "cpUohrYGzzKDuqM8xVkAzVPXZsit1yyCYJN3f4s5qHx3j8oheGYMzJ9FnxEWSzBCzwVi8qmfHwLQ14dwMC8PgFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XsafUFMEcNwx4NoAoWXGw5aGavZoZFYzHbSCPBm1fB4qeWfFk5Z1xMVxXibMBUNssbhueFfJWnJwU4PYtLyuyqi",
  "key1": "3yThpD6QdeWSJPaCQzGQJKJhokds8FfbLaCzofPcbKZoa6N1nkDBNnH2iy9tRUQmcm47orDFPr1da9PePzfnQi2p",
  "key2": "51c6JhbUSj1t9kBuRvY5hhDbnVXTSK7QpySjxQAWDkCg6nwXEEqgNpRtiVB6NK3VgEeQ8xoFvX1m8wKWfYng8Rz8",
  "key3": "235o9nHsQRhSgKcqk49JLXy8s3CwrUFiVXFxSJW1SFwCGELR7WjmEthsbnCkuNAfEEJWM2YrXRAcPoSjiABrrw18",
  "key4": "34Ek1eKQ34SjTb5n1shcy2Q6cvLVCwbBXemyCJQgPrnGqGxtmeTZApjbUzRB6NcYp3o7kFkhpcsHLfv8bxEwZVZF",
  "key5": "gh7YnizBQk1DRZYPZcVz5VsSzrAFjDpRyyMa96FbT8arypGYzRaBxrfY6m7BNokJAg1u46ehGkzNZSQ9Yqx21mw",
  "key6": "2czyMuEWbnj6cuoupAX3jM9dXwR1Dzjf4vqMB6uaJUrWGSXH7FD4gy7Ppwr3kPyCh2NLaeER8pNR5hdfDFZcgjuH",
  "key7": "wYzsqzNTTr49fRrQEDV9wH33kXmEBW3xrTGQ1FW14sCrjXi1mTQ6GyZapukjQT98e3XubJy4wi9ofz2FyFkHgBL",
  "key8": "5cRQNK3kxYn28vj4X2AckuX1LrTpWc24KX3CMChdE5XgaLuJgZN461hLxRA46PsFzV9eXp2gX3THc54EkWYdq6S",
  "key9": "zecfV2Hja24yme4vjTdP9voKp1oGWSAiGuNhHoDq4cfMWVxdST4wNBLphFNz1BRXKeHJkSa2Ttd9KyNrBZLpUZb",
  "key10": "2bws3GFNF5KBYyQPaSTHb6pKyySc3DFvAgBoHh9LmLY8mUfYv3Jf4kGHfYbQfzhZJnxdhgWHJV96rBsFgH2W9f5P",
  "key11": "3zLWTgvgVViu5bHBY4x7JZnY8xdi26iB6p3rvk4tNC18YMPu53kjiVBVxqXouxkFaCr7BwzgrwEq7shk8HYZvZ8f",
  "key12": "2Q1VxPz3aLEYWWSrYvgwqvFAq8fWjGeDpbNcczGaEUP5FcsSbaVZfHUjPZFt4hwHWGWGajG7wekzdJe5RDUjqYZn",
  "key13": "47hTduaCDEq4PrAn6NRUgLwkg26R6koGLRsX1F46AuN8MV7AH8MjZ7r62Hp7JzcKqVj3kfNg55a42rqH2CKjmait",
  "key14": "55NMu5rzz2o5AopgH35c9kyWNEvuQZSFLoQ4LdGWdUZKERz7c5VJ6rLpQ3jvTEDAo1zRQq52NJoXTBJaGNXedZga",
  "key15": "5NZdoVYhYn4FMN3uEwyu4ULS5i89ivK6wxDLwqPcTaLenQJQ9yhpdHqwTZZis1frYCys7wtBiJmxgEriycKArxfe",
  "key16": "ixT39M3uYTVuC2GjaDGxXE4Aeupq2VFtuPuJynzPUmHX1Q5wLtQGN3fKZemrBqCj6HaQEosHDLvuzyvGCqmjj5a",
  "key17": "46JioHcAss1CwM3gtBufjySXCMUsJ8HQvuxnRprQvKQswwhKGAxTbdw6LGez1iB8UvGQYpkas3G8MMuDqRW97Xdq",
  "key18": "2Zy2Vs9PhAnXq6t9vzWfeScR5LssZ2QVXn75JyQgGH4TWJFEyG8fG85mM1QTyw7Hpjtm8tUPNow6Bq4dTU3xZkzU",
  "key19": "5ukXHdan2Rk1pa5SfmWvwkaQ4cqjmihe55v4KsHs4Q4E9xGcYKj3geH61iMRwZYTwFAof6JSLZQKnZzFMSGgv8S7",
  "key20": "2EXv52UYGwHnXW8nUovo1Uu9VpmDHhwD9fRfBUTmbnAGSNU8B6JGwPvtXoxWFSLtfavU7sGAe1XVMPwwQMyGsH6j",
  "key21": "43Xjc6fAM1dvzZYg7bVvSBsKyWow7Tj4cuMmqzmw1Tk4TinbHC4NMnpCqVP3UZUzmqY6Jq9r8zU26gQ7myLDExKs",
  "key22": "4wuF2Qwc39jCZNwkayK2uDrcTQ7W5k8WoxK8FNAvPfipi3urmnhysFWg7i4AfosrmrKQjQ1CjKq5JJxART7DZ1ki",
  "key23": "8gRnESPwvdHfJp7XbHh3FE9pPie6Yth1wJTnLkNiHP5M5YbdRxNssWa8rJbaaXVGKDYj4G9hCizcMMvC1bJoFTd",
  "key24": "2mSKJk3ZJFebdoG8vMoM3W6xuV4F6nGPHNyjcAvH3HtYMjJ69aLPjHLQmpzpi9CosGuFnMo2hbWpqEKE7M6TNkPU",
  "key25": "8KAxaayy4Qp1jyaDYpCox6nfoENV1qXiKGgNp9wa171gvErEfwVYUriqoCPnb7tyEo7AsLq53ThSZDEFTs6zop9",
  "key26": "4ZEbXPfe1WqxoQwVdPiNzpszd2rxvYwVr8VAYtDe1pbAzT644sg4t6ccqHDhpeXe2A5wKjZ82xSqgkhKvd75arxo",
  "key27": "htv1dB2T6p9kqSHnsr6tJ7EpW1MeiRHyD9vZmyzqsMdd6Hqyhp1XM7fRYJjJVWpLVcuovCFsCh3RoDp7Lc82vWm",
  "key28": "5xfuxocxngKpMYuhGp1FgCwDmNRfVCzmsEnTijuRoAF8yJiNMjF9bf1raTZM1XFEzjbqSRMhfN4KrsNKa9VZCdK4"
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
