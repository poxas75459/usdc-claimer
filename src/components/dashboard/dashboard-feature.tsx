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
    "2jb6pk1h63dtYaHcsGYZUutBTFW1zZoSqqJ2BXbU1wNCyoAwiMgKrfbdm657mszfGK42mSoNpsmJG7PLQP6qLXjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CqCArUYcqrp5TTveac2DcakpUVq5EMe7sXmWmEDXqvTtsJaz5gzbRDx4nxE3TYtUhanQcuAVFRgZCfTvfNh6Xh5",
  "key1": "2kHoqeBTezHwNFWuYwipby6oeVe3ym2FVgGwrdP57BrcdDkHLeiUfpVkfrb3bKB7Q19nDqNY3PnXePNwHnAb9dVs",
  "key2": "5aDoTSaxz9MLiDj7RmrNitvtQphD2cs339kFryC8GniaZrp7euQNcUhcXGm4XJqVMcGhaid2e4yJeeGVmLPt5ZRE",
  "key3": "5WBfg4tzRGbZvBUXsyRuNu6T3kQBY6J77ovpGirRE297zhC92YGtrdre1Lb2f781R7j4CV5N6BoJW8DJ7q2AcyV7",
  "key4": "47u8s28sNXk5uzbRCQQCjWKzJLz3hhTbqGEDvwyf598kGZAWmzpuFQhA9nLVCfhzGUjNk6FyWKp7nnesbrMAsVGs",
  "key5": "2F8HVDfv92Zd31bFzA5yKejYbQqqwdAtK84DKqe7gLD5T8snvkpWyDwqKxFKossYwB26TAfTjMADpBnVy29zN7tj",
  "key6": "4D7kYJ8ed5NGZhaWFRez6caaMHvUH5ACBdYyQQdPgM4sdHzBBEN9oHFPR6pJHUzWckRh9wET9ywaMMSsFxoPTAik",
  "key7": "27ySjgG6WvCTo9SaEPA94hFLKZD9rStV3g8uH91CVS39GSyjNFMoNHxoNwAAWAx8hf3QYDtuXSuYDumFEvYGcPJn",
  "key8": "5igBP2GyRYWZmFkPvKTFvc5vAth8q5qMELSLUKy5qTvitF9sCQAxddUrLNVE7HRNT5i9Wv5m5yH7ACyLdatE1kWH",
  "key9": "4Aa2SZNXXPJ3iH67zHDiuyNNQMh49Wf2CH1qNPFUXU3NhSYGKbahmjJD6meQQueXvkHFqRswt6KQfxfnhaNy79b4",
  "key10": "5bDPqEdRFw2ZaNs3jMeWVA81CZuc7CH3iYoC8i6sZi1NqXAApeecnx13EFWBN6fQhvqwijwL5TwKKnMYjmBRqpuD",
  "key11": "5qSyo7pWmEZCuAdHSVMZKmbDEHgXK5svHpCRSonJ1TUuHnxXPc3mdw5HC3PuapufctweUptZvU5Gdk2wyNW7ezgj",
  "key12": "5cip3J5feazurkD49wXi5ixDdmgvJd7GwbNTKPURYQys2WsRrz3dRyj1fNJv66tN53iaGkykbGPRozPM2xTF21FY",
  "key13": "5wYA79tZbs1LFmL1Sr6XQ2uMsLV4J1JBRdVjFTABv3Bj1oNAMXmmTQR2pQFycJjUHpMxxtasSgKhPPEXQWhssfFJ",
  "key14": "3eT6EwbpsUZYGQQvY9M48T5c7yPEypCqAKxTgqJomkheFR761D2Vtyw2Ff6QaGrvDgF7KvWyzEZ89kotqoMk9uqq",
  "key15": "2F6j94mcJPAX2u5UY4GfRd3Rsm95asx4kVdLNGe7gf9HVUFhivMBcGo5ofHwqagYwzj3RJWW5m9Mpy1XYnUxsthx",
  "key16": "2CSpKRPox2kEAxDhHemzS65UPDjhZ8MMkB5wr1h6tP7dV7NrPZc93fq5cKEWLcRe1JaiCgjyVrRZ6Qr2qi4PxSR3",
  "key17": "3utkG77FxD4UgJpoP3NMPoTva8SyfxzKxxDPqfioJedvVGkGU3GfC9DJmyQZzSPAWybRX4NtaHUJ8gkVawQ9NjN3",
  "key18": "4GP8n7Y96de63D9zMm2Tm7gZ1gQREp33PZ1Ut3Uq2EmQj3n2qfCfhKaQUeTchWpAUn5nMcuehXUZCATuUya7AGeP",
  "key19": "54Vh1Qr3yb72bp8bsZyXN5zYC7U2opXh3Zg6djQvN2HUe4vzDmez3FRwvse9eDbStygvLvwR2p2UhVWpfUTH15Xx",
  "key20": "562mdAQ1xBDPyws8yxkD9Gqhgofzx1SjxREAzU5Fv336UFy4qiyYUD5gjEZvKPJEqUuenU6F7yCfXw24ycyggozp",
  "key21": "3XxQokHEYPKpaCqLH33htsoRw6AoBEeXHkVJVR8zKdabQGFvStW2vQGgNKXEXgc3MBHxDuXUGc11we5dUhQJqY4H",
  "key22": "2ofbrBHSEjMuSq4B4tuDB8y8QEbudzvMMpQPVofejier6xHcE5VS5KpdRB5XV7upXjK5iUGwYT22FQmQL2AyQeUn",
  "key23": "4wX9BUc9HumL4VoAv6Fa7L5oFzd7QPd5NsG2MYipigsWKhMJXiojEJcgUzdf2XMpwRBCYvBdXoDAihgPYNqWJeP9",
  "key24": "2mEQQAk6keX1g6QimqEfqLWqJqtnW4UmDf5dCa1BdUyKYSzuUFEVtDQ7myRhQzH4wN7mVfapnd4ieWXPwAZYnyQV",
  "key25": "2pJ9Ux2tFG7xqkzxXTkp5tGmTqnqoNUU6vkMPGBgA5tQpeSPitMdBRtkkRYbK6YeSEFUBKhvP7Ggf1EKtsc3rFEo",
  "key26": "3rU9Qtvh5VGKJHHypC1N8gh5VEbYHdpSAjBi5pZpippWqiVJdQSsycg3XQsrtdLJcMfu7vCm5N1c6XenH3tFRaDs"
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
