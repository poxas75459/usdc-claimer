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
    "4wWsKS1LdYQcDM4onNBJDwCyBf5QCzPrBXrMLHRePF6gxuzZEKmqpE9WC8FqahsknY399giBXvNb9cMLHHztuViH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7G6cci1ohbXBkjAb4n3khddYgNSdjQTFcajNtRNCDGz92fW8snKSVxR2AbvrJg6aVHoNX9mPo1QFqouWy1EABsm",
  "key1": "4YTMYZMfJF152KAeuApr7ZctPbU444bFjSSHS842GCyxWZAAzoQFJxsYpxyRsz6CpxnLnrrjL6qvUgxHG1teXheN",
  "key2": "3wo8C4F1AGbw7GnCpJtp77kgKrNKJwgjo5aznpiMEsa52dbDnZfNso9a2Qajr4vF2poNzMFopHdp9DCxDFmHMfCR",
  "key3": "4b5aPL3NMoDYMZXWicptKtyANaSjuR93ANFHboRgQe8buqc5Cj878mP473hdZiWAuDNuAfZincKjw2KwrnZjiEJ1",
  "key4": "4ZsnYVKpPvmeUQzUFH3hgQVX8fJMQKiBKvvZhLT4AcYg85mQrnZ4zio4UidjDKWHL8WdqgUELPdedvPB9SC5xn1s",
  "key5": "4ehnCBN8CuYBD8cbb48SY2PSbnzCZyqKBHnjfkazECpEGULqzGt6kiW1LnAzup7FMmiEWWzzUPevEKAazKNqtj3y",
  "key6": "5mavvAsABcaN4JdWBdstpYt6spYuitirRomnZNDkXTHnbUDTSn6dsnMPQ3XthC8ezzqpoL5jNpwzoUjGi8ApYTmJ",
  "key7": "4hoTtguey5WN7YPKJby3bTXtrj5ZrvXWJq6rxvmU3NReNMm2Z4173RFcEZfcb1Dx75NniEFwHxxGza1BjEZQq9Zf",
  "key8": "5go7HPzfHtwe7qjFVCqwj5h7CqcFzKZ5QLv3PQ2vzE4C7mdVAX88Zu5piEeRfy5uTcu37fuV8km7zw8wVH4Ukcoy",
  "key9": "3EaPaZhKAzVuVquFPg5USTp5Xpb9xQEVhQGGj7spB4ZwiFiHrivZQ9L2aveQaF9LLbUAgrws13dSfYWMiAGoFAyN",
  "key10": "MrmbqCaXpLYZZqEGEZvQvEHcubZCDLV1f4mjomiEMCyRfu55dxmABFWvrN4PtynoyfRteZGsEUAGtBppNCmGpN9",
  "key11": "FpBnQKzWXeH8Y5eaML9cB5fcwPCHg5dScZTqRPUnDjzwRw4XgjKRxN1Ya8XWkyDTWb9Hik8bYwt26HMJ3H8bEm7",
  "key12": "4Xe3bYyMHDmssRCYrmAHyK1EgX19GsYjDhSRRkZradjXZCFTeAosVpLRYnKM9fgJbXUgMmiPGz4m5tJHyrJhBv6P",
  "key13": "5Psn6mjDKY18cKAZAJKvivWkjrLZ6VrNEX2yquE8nv2snJQSFSqeJDyLW9n1715GjD5BzANx1jhJbTSDsVSGYqRr",
  "key14": "3i4u3nJFE78BPwgVSwhbVZyrL6kbmAQgX2zdoeCrGpN5KuDUpRciVGi8Ya6HKVvMm2LnkyuM57n1BMwakvRHTU9a",
  "key15": "VpZwCNmRdnfzZ2GJ2EwzJ3tmRSchffTfLBMeH3CGte6TPaWYfmHjWMPs8xMi6VXkXMvSKG6181c9Mu3TJAaJeb7",
  "key16": "3UPihYHwBnMU2g4mDgBDEQcEiCQSwYDKy2QXzPuyToY3UKd5tqWoFWmQmNBtbEso9V7TMddtKTKoncD89MjuwzS4",
  "key17": "KasEqmNkE6BmWh9bEHwdQiTwM8ovy5Yn7NcT36HYKhApnpsEG2mUVMhE13MUtiiJLdQ6iPXSZ6gnUoDXT4zZH8s",
  "key18": "5b13dZ6qNMCzAJL8XwJhNNWX6cc3dajDYZuGvXFBgsgbW8DWxELT91ymvV8dBUoyYAkKvdiZ7muAVHjaikvHEjTJ",
  "key19": "29UxWjWJHNn114dZQmH6p3Top4SvRbJKgjSU9RLdXrQoZgeQMV3JGfKrmRv9UwMQ8uuNzai5KW692mxxXcrQz6c1",
  "key20": "5UWSM7ssqbdbUYCfQZ1FUBUH2bZAw1K7hy394uRvoabhRZtxhVCZ3vuTkuqX5kytWxPe9rUbUbGS3oogYN918KNy",
  "key21": "2LQKqbW6zVTEQw5QUcY6M3kNkuszTF9HCDP4ndtivxdEqA5RgxGX28AVbPpztwygYsZg2HVNHKcjUKjCPuxSBYrn",
  "key22": "38zxfmwMWNGhr1VPZnnC8f7tYYN1DivCw8A83vAKYkCuyT6fG4K7C7jQ4xABmEmUsy6RiwCfpNL5d5uMf1RbmBFN",
  "key23": "3ouiMx17An3wqKmmgzJCuxVS2uC9muhRDtB63gfjqDFKbpefYD2nJ7NhQ7huUC6vxGtRcGEBBySRN88qbeQc3J9d",
  "key24": "2TXz8dChenDpP5fxjpEnyAPDdUbewsj4M4zV8twGTg8D2aFMvC4tmY5KDX749WjR9znckPbit8Gwp94nXqF7MNyr",
  "key25": "41ztaBfK5cAMbHRXcazG4QPHNJw5pSRa1HX7VFPAPgU8KJoAGvJVi149eWogbZhtdQAWdEP2xijhpYfTaCkE8hmJ"
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
