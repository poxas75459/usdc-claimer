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
    "44oyQ8UAnhwp8giJ5t7Q9qzhRKMeU3XprT9V7LysPoGjK7W8brusch1tzKd2f1ZD1Su31QJYegiPUsSsdZchkJtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1mhgg44qC7iCDTS7yZ2r8jxt4YNRvuL48EBLmoiRYbuTp3fkepHdNwYyjT2q5iJ2wPzMU32VNQFtZKtxu3wFHr",
  "key1": "33sYuD32aGfHs1fdyRS9NPX9g36FgeJrAUyBMdy4nTZvhvUL9tTYyjS19yzBzYZ8aps6iHboUpDVKQZuxx88hgnM",
  "key2": "3Jzm1p9v9T1fEZnWqb2LbCcLxP1CAqebNT3J9CvXHHNeKRqKat3o5JQoy7XcT45UTWTgkiTKrQPcmDSp3jSVYfd8",
  "key3": "3TEQBTjpvQ4S9DidmRqve6AUxUSKtY7FXgATbTyu9JUEDCNYLWimtTBWzVhr1uTX6iPcxxEV9NoBSDJWp84Pxm4y",
  "key4": "53Cf1nmLErnj4KEiAchyffKqKftc9RMF4k5PJoz62xYRsqRS8Jx8nFo6qhFtp2hsFMtuKLKD9BBoSgCMyzFhGRn5",
  "key5": "45hXF1331wfmN2xw7RSyrhmmdRvHGXbWwNpZBA8tDcf1E24FueR7FByPN6EzPtHJH3VtKG5CzpnXQ21CS5rfnuFZ",
  "key6": "3VkSacfCotKeoh9jDVFTPpBEzXw6E7aQEmGYMUBZLpMPhUPVFQHdj2LmcRQhTkZogLcnceHF3NJ3Nf4EnjWuzS6p",
  "key7": "5QJZyQrWXVE6rWbYBHy4vESwnRv6ZCUmkfvrtxRQgTvDE1ajebuy5XH1c5NzLQLGe76722m5BodekTcoX2g2Szz2",
  "key8": "4ZbFzt2yQ8aK42hKKJ9p3HYvkWYDETX2hxJQPKEgLnchbyBcArR58V7C8SKB3Dzsn5JeC4WEwEuw2T7zjq7R33UK",
  "key9": "614JjRsdmE2SeChCuQuv9q1cyvsok9o7TL6q9pCbbR3Y2MhvyGGus7bjgwMyLBjYGjNYE64UHnYTS4Sa2tbzcZ9y",
  "key10": "bpNJYAKJf5VGAVWUYeAEumZXf81cQhz7Yi77nY5GMGLtNBLGgZayRkepToB5GVThPczzSA8d57SYxqGqANLLtsS",
  "key11": "5scubyLidQU1S4tTw2xM9mc9vQ84GSVzUx7KKJm2isKJjrEGo6dC82iiK93dN94sttmjbnyPk4wVcB22MgwVsr5X",
  "key12": "5gv8Fyph1NJ4qFTPGL1P329keLQU2aaby1DQhm8aepuuCKyU9abMuTuvFpRxnDQrrT23bn4nmrn7Zo6kzQUHWyhE",
  "key13": "2M3RNV5mWH5jvuYG3ayhh2eHDSuzRHdLwUxrhUJv6Ytmypqx9fSGpTt27S44VYDGuz3GwncLsCFHVR2Hjozfqe13",
  "key14": "2Aa3ENmFSATpgWChXq2A9Vue29NWnHoGuoUeTCGJx3BybSdJwSjUCdyZqZ8456dW7NJAJekzyZ8tMfEXHKT2AG71",
  "key15": "2DWsVAFnvmKYmq1RBWu3dhwkHw96751NJHyQTfAZSGgCbE9KhKoxbsrHcMXvqYZXkmN1hHuoc1csfKdLNPNL4VP6",
  "key16": "3Ah4K7Vu9LHK3jNFym5xXTHeG4K8CUeg85xrLu5QxVpB5JgQ9Qys5SKKLfjutPiM1LrVJ42Aj8FP1BmTGbMmeYKm",
  "key17": "Nud1a1ZwW3dKE2RmK62Rt4Us8eRj1TNUdAvYkBoq7rW6b5tfV9RweLm8z74AeRV3cAQPncFoYW3RE7494h2E2Jt",
  "key18": "4HbXkzyj9xrYtPNvWRs1h3wGJpb7f2PyZJx7Mp18BWkspbcYTsgat29hhGDyYe4MaESEXCKXsJz7iCKthjmgwBpq",
  "key19": "kB7u5n3C9cVhm5NmHrPavEtsDFqBs6GhVRgPaML8duyWo3dtNyudd3Rpe5dF14WsNA2dMKNqXB6YYZuzXj56Hww",
  "key20": "45CPwjJbNQf48fCrL7LnwyTHQ5SnHvFAwq1Y9Dabxud2jZEfdAFMvJFYLrziSk2jXdnCi4gwfxsChnH9uunSYpfk",
  "key21": "3pUbxUaHarDY9mx7sHztieb4HsfAdcjnivfoB3Y8FSBFZe6PFySM26cjdoPSYFZqNrcoZzRrTo8aHGbTmVTpa4XY",
  "key22": "7GbW5BBpXZ1WP4nGQjMYbDF5mhnN8Hx5Z5ULAqenGb1kgK6n5U43APviTf27io4dHxXfiefsABcyoHC3PuVZuga",
  "key23": "3RhNJX2qzSSBSvahy9sZThhF68gcgvWWHd4FikZsMtVJbqYhyqLit4S9G8a8Vmrsatujk3PZJa61vGHSN4yU3JLf",
  "key24": "5TgypHiqs6rWjbWV7KeBJjqTv1duMw5jWkrxgxtxqt67Zsrvc8a1pK8SkAUiHJhdH7jN15B1rBWHGXsZMawawd53",
  "key25": "2VCLw9TVGWBMTYD3g9JNp1aHisvkoAXaJT9csAhQpZ1rKHbJisnBDcEynzUk9iNfKJumVeVbxHNKJmj1nCT7h13L"
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
