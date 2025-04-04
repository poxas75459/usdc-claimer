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
    "48yjb4mHuuZuAhEcmKT7Mc14JHCSrdsRgzvEo4BYJmesDuRPWUU2Vw8kQwurKPNDerSXxq1ot9QRWKGwqVP38EKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nS4AVinyXsrsBBnGsN6ZNB56jDiGyzXWtBrzsHbeSnv9brB6KCVqVYpphZV41bB3NKfGLejZAaRJmhByPnQmNTM",
  "key1": "48RNCUqiCxtvL5teGsY2pkQaXtXpoYuqy8TcWvCGDE5J8UjQZqRAhgDmBHkvcnCtpJqorhvP2iq5LuKEVJwEhpU7",
  "key2": "qFYsZX1M9BvUSp8AwEFrEHKA1yNc6J5WoU54L7n86bHfmFgCeLZDTZGtW9pqPSmKyKPxNNxfSHnhr93DNuyqpM8",
  "key3": "4L3Kn4Jb8dUxpnaKcmzHfqBV38ZBDHBjmfwdW7mSmURQwzn8qTzmQBM8SND3cgZypbBJD9cg4PBpidRrzvRmNkkP",
  "key4": "5knJNhKv6AFcp57SkEnWhgd4bxTEh4bahbMAcSMHXB37kMM4WLVrKNpNyNdpzQphS5r1K27WosNeMvXyATHwE1Rw",
  "key5": "3YjhhRVBFxLYQDa9p6tN2ve2rpdSSJb5UoSzzBWntERNxoXaDs7xpg2zfWo1PigetoTTCpFvxypejuJV6pnmES5S",
  "key6": "3pmD7xsckJ6fFP8w6NZLnyrFGq95nc8GBoteGiUbWh2zfqTK7srxPRZw6KkyNC4uAhaGuhFEfbkmbxPM8NzKxFKV",
  "key7": "3gfZmKp4vxhfBhRcjAarw8jTCCa9MMPVo6LGRWGVZqfiD1nu6hQQZehFpG35jsCEJUS9D9wt15FBCnCAwVvcKxdv",
  "key8": "3W9oz8oGKk9JwuVvmxAg5wcnRSA98YUrzYUqSQ13HWPToYdGeq1po6sX25Yqaat8bDgr51NAYz6z3DXx6Xrs1x4F",
  "key9": "4ZzoiePxQUZQ3E8mhBweCf4dQaEPG83N1UnchLaHW63f3bwA797cgqTsZfB4SwrN1EEpKqzk3Lanm2tQ3a7m82xA",
  "key10": "4eKcKKP6R8YcjEgtwyXU6bReTqVvXaTjnrHchfCzZs69WcaokxwmNw1Dwj2kxTZz7bMx5Nb2LzUuQScRB7YNSwv7",
  "key11": "5tX3Agu4phibgEix1RUhyyuTz7UGubU2Jae11vb5v5tRkHjL5KpvNg7MxzoJ5jLiQVPPPp98DQVFMqGijB6DFkwj",
  "key12": "4A5rEi1vA8k2DG5b5cCoMbiW9sSm712TsWvaHd6GVPQMDVfgsX3kLrQaPbhX19KKiABFDKvHn2Z3dCWpSTtGXnGp",
  "key13": "3kULgKMfPj9DUK3A39NvP37uYnpQZwkjto63FEQ6NRdb4NnFAwg1AUFGTZjX7Kgtr9h2oGxkeCvWcm6DHKzMZXn9",
  "key14": "36fSpzBpAiTpYMC11XQg2QXnWwoMGJnYUCr9bVYUd2nxBALNjWCXJGpx6vA4jDUEuQMGPCbdFcxqexa59CPdABud",
  "key15": "2tjsQTZ68aD3XWtir2ZFJzMMg11XqHReBryHBX9Ho9mG1b78kmefgZBJ3zGit8vHZmqci8hCCjSFs3WwbmFGp6sg",
  "key16": "C1cQfrfeWgRrgP5U9wiVeyTjZYNRrfpVYV5vmvHfof2aMWsDW2ZTZmhmAtq2WCvGvfXMKG2iPT6fB8KPQk85Ama",
  "key17": "5mfKjFAoyHCdoQrNDhuVTtwY2F2fSqnUofQ6sYwdhxNW1VLjNsN2d4a3D8SaJ88ZQ9Kx3EXvNNZ86rbHLptApEaK",
  "key18": "5Uo2E1zbGtZq9D2JkbR3EX4inFG9YC3F81gMcdv1d3VPg39vvzk4R5jL6o31nm8MVGHPSq8PkNciyvrvrizw4Rdv",
  "key19": "2rhv4HyTK9bdkB4HBBtMoTBHW3onc8jaEeJiGfgX7R9QcYQHEGMGLrz2BbX7VhXgu7VfYSiUidRM5GzxfSDz9TNP",
  "key20": "3toaVfzbencUfve9Gvro3tczF73YjLYm7wbD7Zoqukor7wHpB343WD3dvrqK9QcFxiGtSuxoiQEUNea9tADB8FdW",
  "key21": "3dBxwoRxEXKph7zWCgbLTeGs7mgkB1m2L6b82DcZUnXwHAzqZrX1YFBipLsHBgaWiy8m7tFLgH3TChHPv1wmqSLF",
  "key22": "3gsk43mMPzBGGMHJja2FVk7wpPHRdP5faE12EFpuNfhswBSaweKo9T75WajzPx5X6899EB3bKagHAxWzfGDp1Xe1",
  "key23": "579ADeUUrZStjPGAqSfAxMP9wvMi2Xs3aXBbQT4W4P3dKcN9m9MdZCsYx8VhK7GQZnbYMumxNFZSpbSUpzmf3Mip",
  "key24": "5uEp4Vjx2txDhvtiHNmW1ASrXXNXnPagWUBrZnbXKHCgjtcwu51uy5SaNHj5kDYTqUs2gFAHN4BvEASiiQfiiGn5",
  "key25": "MNzkMe9GZBDtHmftnVpDqxLCuMuzeCffWZfX2z5WVYzPRVMCbQcZp9KhMfgBfizhATg7WFLKBMAuNjKT5wmnuwi",
  "key26": "4khvS2SJp4MA1iQyT64eiKc5jGNtpREDxhaKck9CDXT4qZZzD5TGgYB2LsTFP9ncbgTUSCkDk83yBeqVMz2Xj2xS",
  "key27": "5JM5euGEoiLzgPzKcERi2HB3JPXRNq6WZUG5LLPbPqsPgqwugAjZTthupkHeR1b2UFQUC5KcC5EX6SDxtRsBWeWW",
  "key28": "2nMp2MLKs783hf8jVbUBJpsKf2ayUxvXCqAPzawFp8UBQNpWrTZZgNjcuNi5Ypfc38iwL9BQvSRHLoJ2WhRE3WiZ",
  "key29": "4Eu1jCsNwdL9oxHEHANNZt8b4HeWPYRdzFewHHEQo2mGAZaqyUCdAnwLg3p9xd4q8rVSvZt1T2VVrHfLuB8tN51i",
  "key30": "3fStZPb8iS3a7HmxyZpoGUMLE3rHqP5zg3p3Y1DXsoF3D8YQezJBCRH87f8aZyRcNuXi3eAYA7Ae99zm817KRQf1",
  "key31": "59Kg4Aew4nDCxBYg6UAkvbnYjh7WcqXfmnQBBcAbA3GhQDAnT7Q83YfukFPDt3geG8Zc4a6nQq4h7yBHK77khVnh",
  "key32": "3hKBt3YWFiUanpGRwUNfmFGnrAVoX7yrgmP7PSxPvQbCwksmC6V1BWugFZ1jgxoGevs7SfRHQM3QwiYCwKiBAAt1",
  "key33": "4c2LzLsuFF6PTmySXtJWawBjhgpu2zsW1zJMw8nXSpcXBWUNM1myuJVQ7v7TJpVPDoMjpYusfCJVLjhhG6vLQ3U8"
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
