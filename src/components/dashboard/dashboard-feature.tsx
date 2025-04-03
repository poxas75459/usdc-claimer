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
    "3bDnHtrpHurNJMvWCpuN3Lhh1cXweUeVG2vCRR2yJBT3YujfNBGr64xvhgu4i5eHg9pBgHMXAZoCxdzbrF8mNV5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzYKV7iCMonmhc5a87aveV7iQ9Hm89iNnj3TRUDgTFTvqmLrvpBexVFwFV3UCm29yKuhmxZBXUzJYtuUXoRUbcu",
  "key1": "33CtHD6Dexc9RX6XiyjxzWzKKGr9dDfYmTh7pKSN1kuLypGUvZ6rBeFb9StiukcayXw9XnhAShJPqoZTviWv76vP",
  "key2": "E88SnRAX1oQ82dqwomS4DKorZHnvafY5HQN72epJMgu3y1jxEMe1E7nU9tr8zPDXiK7NvGFM2v8vQ7GGq5QoUXZ",
  "key3": "5k3sEN7AVsmohEYp5wPhtcYKYEdLYqUVwpKYuCjEvY1CiQkYKZNF6FRgLEQSesKBnkRvTx8NMA7y1LrkevwBn61s",
  "key4": "3agiX2vfU2TF94iyXWKsahNCmH6JmB1iNpQz3gs5oowZyEa3AA5nAPezf1K4csTPvWeDKcwVebPwDzuioS3P2UDK",
  "key5": "2GtXZYRaGaMWovDovqXqYWj9oosNjcTY6i49XvCTzoHZxTLoJ92Y9mvZTUHLoSoRqroMkm5TnG7SN3p1aZiEwMTE",
  "key6": "4kpx981XhUfMsDMwQUWPBySEHb3FEdKswr4B7LBFoc9z5VN5ndfBiznd4mJ5xXMthpAFPq4YooeSD5VMCa8kSAaB",
  "key7": "JGGhXSAXWckx6DpVp1Zqg1csF6kDbMHkLbhUVLvXex3HWLuCvRtZ4qsSoxa1JmfaxswvS4VdyJMqwJm4bsb2yBM",
  "key8": "44HDVgfgPRFLaDSM3Q82Xzb8SoKFZ7KjfzqfcFgKTpd1vfgV9oEouftAca2QCMByEoBSagYfK3TpsBU13S9HjaB2",
  "key9": "2r3D7tUUzxfrQ9ivxuKq9LZz2HwhgvD4Bv95VRXnzxCtKpgxp4HAcj9ij4w2QSDikzK5y2Go2BK2L693PrS7arvY",
  "key10": "2X4WC7m1ThLt1Rchg1AMpN6Ps4aHbiP3iU9i9EUHXEBnYyxdGVe2aqn3ESzccJyCUNcXRVb8uacb2BMGZAvYki1U",
  "key11": "FJCtA8tYvyxqxyA9RupBwURY2qc4tzxDzDVA1VA9n5Hd78bMcT7buDTFBsghaYkbtqNoLdtLnYwNbchW1KvmD7L",
  "key12": "4Xfomq1W11bHVKXjQqUTM359QCKu53hwAQCxjfGhERGJM7MCXEgP62m8KRG9HEKNxPzCnxdiig444Bqr4uWC1h1A",
  "key13": "41rcXBk9v6qmvcvQzZBiEW8Q6UNUbXohADNXpsZ1HEidH1DPM2cDDXiax4DQauGouCs5z3gooUqqifPscY1bPDB3",
  "key14": "51HbJ5hs6QU9PfBH6iGRa8UqEoE5HPQKadoBuXdzJRcUtgNcEWuJFD9W5xyJFgw5jzP88tYshGAndESaCnDn7hVG",
  "key15": "3Ga9a6qX5nB48vnAbDQgZH5b6mjyLp5RogmuoFS7ZqZS8begdH5aV3Tr4Lu7sAvB2dCC9cSn8ioHzkY2e19MsTFi",
  "key16": "4KJu46bG43R8PFwCL4Leqho3zyw6D3yV5HEimwbj7ZTCMKfT3dJCMz6tijfej6f4KD9LAaecGSxASvAQzrdMz17k",
  "key17": "2Cy6zThoSbv8Mx5Wk599EUN4MFKZd3aMQLr6orpRJqgPnd11gygF69tL8G86QTijv2Q4SzW1swwe7mVguwptK6iH",
  "key18": "WhFUbi7CwZMn4ySdVvmxTpxtn7PenX8mdaYS882p9uPUp4TcZQfNgGSjdZoLXKsB2D4eLb1JWiesrpxhutwF1aW",
  "key19": "3phfarsPVRfS5v3RrMN93tFhrApB7s56dRaJpr8t94afR8B8ZxJnNfNY221G93DFqxbisxFThFPVmaabvWXVCeG6",
  "key20": "oCL4mKoidMbmedjAJ8L4Pfz3eVugquCw5NWcg9isAWh9Si2XnpxfBUy1XTRNhfTkQ7JrYjfvQTfEFJgs7WAZ8d2",
  "key21": "4z1GurzTqsdVpDkanxM1GhgigZCB3sVN1byzCJy3Wxsg5Zb7LJUWoA5TP6kaZgWiiupnaf5EwZPXYrPt29ZsJaNM",
  "key22": "ApFYbjrf95Fno1pGcrzhLw7EHyfzduVmbNth7qsrk3PHXTysCXD3jKmXyLBvaSwzYB2C9ffjBoXsuSyKzj5ChUU",
  "key23": "5SJj3hcTXaNJnr7zS4kVHzfyCbskKSTxMHMrHcvbuy5YhoeC5o6gXqQZHfmeYbNYKUG5W3qxziALi8jiET3hYSBy",
  "key24": "5bMc7K9quWCGMEZbw2FRmF3Grn1BMRK7Mj3VDMMwST16XXehURT1Uyv2G3ZGz4g4uKHgRi6UXDHALYChoAjQQoMY",
  "key25": "2YHbtz9p5cbtsEZUpw6ighbZYexmyZA9rfi17D5ZVh9mPytiY9R2r4RbqPR7AojKoXHFcnXWZvt6jtx5sDdC8sfk",
  "key26": "4Gsy6XptVxsz2Ccmh7v2ZbdQf35pJNzAf3fb1YWVQLiTPWvMjeeX88Qw3GSkaaLH4YEjnbLV4ERATaG24DmTrYAc",
  "key27": "62y9tw8DNjzTW8G4eqvujybhAJMm7v4qbG1q6UXDRrWe4k6vgKSmhJoSH5HuKvJ5h5jtRhjFNdjYuHRTpFyiyHye",
  "key28": "2uHE8BcqvBvvvRdtwNzAHZJkaEDVsDi8suF5Sri9m1kHPknsUpaQr7tTcEXJY9CNWmhwj3d6A1vuhXfyHRaDR47A",
  "key29": "5wkeBsk5LX1WPrsjaPNNuPifExm4dvP73XyX3xCagrmhnTqKh9P31zpq6LTGgYUqaSQhrDRb8AYCUafEbJcndnmH",
  "key30": "4zubcS59jL94qx95vHjEVNtPQBdckhhtyxLKbkm1A2q8Jq1kWpzWrmJX1f5K6LuajKoUFjKscAdQhLUQsDUB34py",
  "key31": "3EbJUJ7MAGbywDLTDWrmj3wjBNoyRQpVeAaMW1wZNGNZTZszc8LKRXNfdC1Ew4er9vvFbPsx5UbGdmqnMZseiK7v",
  "key32": "3ZSPrGSHCaU2zCjydsiHUkZmb63qbpBiLMiiMSF74ejuZFcGC9KaS1xrv4CD1CLcgKzrWFD8PuGMntyTj4EywZgi",
  "key33": "3Yk4rKv7AYswGmPpbK2rJpTpxQstXqA9eVP4CWMKNpqTXzqwaLo5kzys89cVeeZdowcYHh3pUt5JGi3hvdLQHzx2",
  "key34": "63XXqvJEiYiuvxPA9YakXf99ZHB959djjoiVnUx2pfrYnevP1NLJyKVnweMjQGfCYExvVtE7qE7PV1s4kgnnQXA"
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
