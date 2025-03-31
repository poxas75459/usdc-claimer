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
    "nwEkuUjykuS9VjEJCdduFnPiAKLeYAbxGJjjYCt5CHwuZPho8qEhUjBKKX6xEEYAM8GhaNcsZbUFxrVJPcWXdM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vY266dxV4cNzW63LmtE4mLBuNHo4CSjKzqu2gTU3pA2k42abeDJNrMRYBDsoC9or6NJcQt2Q2jyFcg9hUEhpuP",
  "key1": "37V2Q6tFWWPs74N7AuG9U8yPFdwPxHs7Cw13Kd5QYqg35xMh3u5tD9o9LQqwA4u5v2jAAy3xk37Q21SZtdyr6FxZ",
  "key2": "2vQXnzuqkfn7pcvqL1RfgsFDXcWJEPFbVMaN3Wse5ccNXgSiYSPTzMUqMuotkZpnMYnZqixNMq8jzuo5pNaGMdah",
  "key3": "pMszS8Lo3pNZSFa3Xkym8nutumhgZgvKxXnxzWzcQkGUE2qqRV6tNLtb5VAHUpBrqwVB9H5vBnT1BLRCt2pf8yf",
  "key4": "4wiqJSW5FYU2qkEV2aZ9X6FL2NVDRjrTLBoBRsFaXRjoiAW5VxcJKLixDYG3BPxEy9hBX7JXCn2D7HXjJ5mAia38",
  "key5": "3aMSUMGW17HxTPATBdsJF58DJeL31TuTArUSVeyPu1eK9GG6wqEFkmX5rCZVLabR8hNcWjYcwUbc7xer8k9oAvsJ",
  "key6": "cWzsdUcwVR4TMHJG6nkmVZCskEZrE4ZBm96hQkPPdQogJi2uo7Jt2ZSHkFKkPFrAc92iJZGYnXsyPo7AtB32obb",
  "key7": "2EoqAkvReLwNnUrE1KCbELnBNjDtvJYgfJCQwDmadtiYKm3H9S1ooXgq3S3MH2uwaosA42CvEQWoEnfA1PJKTZjC",
  "key8": "5wK4sT6G3aqdjM6Xy9MzYvXzuuiFWb3NYy9rJJcREetVJUnXB6z8x2Ra4F5Y1pq5uUFKnWbRGVWaT8iKTqsep8i1",
  "key9": "37g253n46aJgD4nNdc7LAnF1k2fLBNuG6CiW72Y771NHzPb9UYQA5csAHKhd78wfL2VHi8GUUzFtDHafCR2BbrQP",
  "key10": "5ER2Pp9PAL7PWTqJd52CKeyAkBKY2qTHgsDAmT7GAy3e8Ub2ukpZXPR1Av38cSeMVNT6mj3xvMzP9JAjbvssgWZt",
  "key11": "oyQetPUCsveHT4v68XDK1153JjuZQgsosnkHUqoA2bDiG2YdrWASisjAaeYvTn3LwPcBZHmXPdHbt1s9okiESWj",
  "key12": "tMsCuVADqRpFK8K3S3ZouWTLgBkXFk9BzmGxQP2diNBrGGDUywQo2fD2uZMUVFM88WeAwLoNadYuym1VWBwYoQR",
  "key13": "1f1dCmqMojREjuNv2Xmn4s2tTEyyvcV8mZxus6XT3Gcz9ZRZp1VeZE8zQ3VfAYEm6TsmMgqWdXcyMTZHd7ZCnPf",
  "key14": "3QVBMCttxreTvDtzpLs5zkd5Lrh5HUsyHDRidVqucWrurt5cvt1smXgxNEro7Ax37Zzs34ZgQgh3iTGkXmcmy5Nz",
  "key15": "4mJBK2bWhQkwVMVzm6j1cy5wHfMDB6YZwPSx4DrszhTR2smzoUR2uwVrLgnZc8KZVH7SKypned2YVVGV4NQJ6u7",
  "key16": "5GysCBqV2y89wLiMpNcHc92cAhajKHEHgfyoiMk5EoQEeMf2PZGWuND1kgjPhH6jXBxaFrh94b368jHx8vm4krrD",
  "key17": "4Kv1VAUamuFHwBoDntKPVVxqkyK7Fre7oSCPfugozjr9ADQqAHES4GGYnsjf2Hkk9JgNY9weyoXXCEd8j6pSULEW",
  "key18": "2ieEYdy46sj4oeD6JUqrBbpG1uTYGcCSi2FJdziJTAyX77nH4MqnKEuZgzNwuuyv5tnBPCBDGvhSqHS7dupZFCYk",
  "key19": "4DXK8iYvc4jUPfDhXBt81kYDHkPeEG4ZNgruxC627nUrhebKy1d51x6FNBriZLf28QkqdE7yBZMkyBoYmwuafQeB",
  "key20": "5GLEQvvaNzd4DKcfJx52P6T4J8FBHUqo8yY48LbvjKHgUSWDZcig9EtdZc7N5N9gbft63hA23h2SMsCKT7uaSxMi",
  "key21": "2GbCiJKewfBfuD3pbXcvh79UPQ5kzTP88snz48ecUVmMVNaGpVJDjYscAWpuMHBhZDJ3SdjHQno1HEWrMvbCiFFY",
  "key22": "657PvHUksC1heRoQrgRJGqaXpcVS5ERKW1ef3wCJU2zc6FCWSYGiupmAk6ekiyjVhkGNBUXXVXrQGpfKEVCpNiXk",
  "key23": "32EBspviB4MNDsBdgxxgmtpeYucHPf8rcejTYFxTCkdoHtrRUbTsMovyF6CXqVYqK5z6zVA2hEzv5DybWovPWdEJ",
  "key24": "42PCaC4fA8DSXQLkRebP3pnfQz9zznMAjQqL7nPsrp7QXpfKS1PVuiE8SNBY8ZQYYKABbczpmW4mHK4gBAnpJuD3",
  "key25": "2oKqZJh3PLvgia7hCwNcPdnKnRm7tJ3VRyfMSfpm18wkHnQMnN6mbAbegSUh8iuJZs5S4VYE6MJyV6NpXjBNi9sv",
  "key26": "5D7FANSbwxudocm7xMH2t81hjSVxaQXxkoea3AWeBzfbDzpmpgEkJbtqVDyAMqzorWBaZaUxMdBtXpKFzNxrLXT4",
  "key27": "ZfgaFLxsE9smgwA83PmpmfQ5A4zSjiaXoufbpUV7zgqJtw5s7rb1W1WEu3AfrwkQ6eoFf2X3SGKjMn5xFRsYCHn"
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
