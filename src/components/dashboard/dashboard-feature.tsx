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
    "5KtSdHr9RoTRdmq2sAhKbTmduB3P8RB4aFtJE92tR27k1BGnwKyAqMkLwepZ712KHRy2vskGy7d1fYeDRVmUJxsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W19N845uEASrDKiZLW2XRs8K3W1FwYvNtQWtrsRyhZ88AVkj3QojYFU1ThoEoBmM3vCXCB7PCnz2A2bJSveL92r",
  "key1": "4H1a4koHHfqoEohietqtkULv5mpSyAaLD9XcQRDnGMCC3j6jS5HTS4Fgcnr8eLESkSv2Y5Fmz6yCL4R21RBN39xm",
  "key2": "4nRSVJQyAM5FQE87631h83wGEN1UvEdLbzP3uoetD5pR826gJ2Zh8H9F9YXikuSYwqXD6UC1RLxvHEXoY9yeodDF",
  "key3": "5P2s7pzJmpFQoeKhWXYqZtiw4c61uS1xRsiYLidZKMyqcTJt8Gt7hc5dFxW6MDVHSH1WFnWUTTJLi69J6Fvoj9As",
  "key4": "3ShqyuSjNTTtfaf8dJVLe2Q6VkBvLUYS5NTKZKWp2ZU1GVxhtvZPBZBc4PgMgP7soDQNXZJZFLZ2UdvoR8j2NRAQ",
  "key5": "2d3pdovGxapah1yoJEeZtaweaDU3goqQY4WzfuefxCHcF4maeXZtRxae8Migc5yjdKtpLJQZptGKNwS4NKmYuFUE",
  "key6": "4w26ePJ7wPFULvCEEx6eW747fmkf2HadgQ158QZ9j4nV2L1DrV5X7gSuF7n3ymi8F14SAufxEgC8GzPuiFHjkEyJ",
  "key7": "5dqphjaKWJuckHnNhq5v8SsXwqVy63iTndvgvLXohDqGPbQGTQucXibmVoq9iCjELfxkPakyDpjxcoDy8vzwwHuE",
  "key8": "4GZoZHsaY4NMx5s7PjtwG3ZfYFzRCcznsJd4cDjVyeAZNquhBWNVjx3BGizAWo9C2QLNab7VgvebaEoFRx7GXzYQ",
  "key9": "4tKriz9TfgQdSpZkpgLgokfAwZbavNZsL5wrfYKPvnm7Mw7mAyUd8GLjKKqUCF7xJjT8HZxPvH82mnUtWpYwfbBf",
  "key10": "5wiD6p32Hks4hJxdASA5y5zT2e6XopmC519GDEaLdRxaxp5e5q4A4PizDHADffHEew671hDcLZcjz9Mfap9c7i6s",
  "key11": "4832P49AYTiLusuxuwehwzVwLAMMbY7k4zJo8T7n6RDHqCTn2fm1Na1RNgUvtMa9DasVgYZe7qXo53UcWLcSmkJQ",
  "key12": "4DDCDfkZVjuf9YKaYB6yGu4VruRbHLxd1xvgcqCqbiXSht3qa3TQp79Yq1WqGZvguzP4oZqDdfyXyPZLqzrq3gnH",
  "key13": "4xpYyAwUDrbSUszjXZ7vvRrQNXfRnFhBVtYHuggUZwj7h74k2XijnLVoCm4FCbvRBUGbhe5PKSXy9zjYT88jpHc6",
  "key14": "3emHq1abDKaW4yMifEypf5dZ1MLuEYbnLBtgtisWFZQAGJPq2j915AQ2Sbj9W7SbCRBkxdFS7g5RQqj3CXNpK8t",
  "key15": "49Tiw6MfnKyKbvdbTaQ6kZgEaBQEDZtBmhFYE4ZYKFvtZ4MRXbLDCGQnXhQ3KxJ8ikbe8p3rdmvULShxwqVfeVre",
  "key16": "5AK1VKJFtDs62Da52qMdRQPbpoW9aVxqMcPmKwqKoGkZgEUhrx4eFWratybUEYRYHvPtw4njYRukRYoPHMFiie7T",
  "key17": "3AXasex8X5NSTiaRy7KDLJx3ApGr2Qdg8wh5v9gUF95mn7kfk9cYxdp46D57UpUEEBz8En3s7siXhcC8fMhhwfFT",
  "key18": "3DiQ8ATYJEpF4DhAtda65j7EJf7H2DKuppuu6gCuJZ2PbxQgrLLJaCj71SHyrxhv8UKeDgiQUzXSkQyHXkzQkZSx",
  "key19": "64ty3TwkJgngQPFCUrfEj3tjwfAsm58jSi6tHApNZND7zdKeTxNV1vppWfBfKdFXdvzQzW2a1pua5QujVt89YXbf",
  "key20": "4tGqLCAKS987Xb785vWPwAfkt4QCcPcykZuiG79A1jJDq33jF6825WMnB5iGDYZTMQeVzkHGQ16Fw94MGjw7CLcB",
  "key21": "apPithbxYGCb5exdBfhQx5CJzAYTF4NesuzMDEygdTDjbUiZter2HPYw3y1iXszK96ZuYGz3pAEeex2kDCyRLRc",
  "key22": "Vu362CszuNX6h3uPS3PqbZycRXdDF1iJ8iqrVrJTtYzKJ2zssp62zhg3qubepRrqEdNA9Z26YUu3CskhzEWDDNS",
  "key23": "MXRFHSNDn5wZGamyYHHb3Fv2eWFnUBSFJQhnVbHXiLh25H5UZcEYM2zw4SJ4NvtwX6w62tP7HjouBLVuzRf839X",
  "key24": "4GM7oo9VUQHFKZcUTVxXN2iCtjn4BMFgUHuQRFf1qsRgFkNUbXY1JDfJwpa1thmCbxf6DLLfaHVw1zXGru8pxL8A",
  "key25": "3msbGHHyHo3YTrYySzE2uBQVubLJuEjLuqFZ1dc7WXZzvTtZQE59cEn6odesWB16gt511sBgnS9mtzNXjigDqec8",
  "key26": "5aKe3XGYQGqYrfB7wdxmkeMnjWDxiqCWakGB3HfurXR3sVP721fxgEWmiNyUYRikch5ip8mXtSvbU3VpSAQskjv8",
  "key27": "5EyGGdp8AxWvj3QpgcQXJj4VCmUfACcRkYScAtEiXUN1o3kFQApwQVUpxPmcXbbKGEVLbVv4dpULLwisTamdWfjv",
  "key28": "b3ejPbTZeMu8XP89R1C3T7dBA9cREJjBj3pbarvXKoeBAJfJr1R1b2zwz8W5b6oAjQtXPT7otWheieCQZyAFVto"
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
