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
    "3Qt29yki6DZ2DHaQ7e7WKuUifQTPXHkqvx2ejfaJu9jaT2NUK4UeiipAeKAsFMr8r4cqT1gXfPiNLHytzEnsfvam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4Rg63kQx2XzJJ7Wx1zNuuZyn36VpW2LjTToRgrwmZc8bZnFtAfbDjyj1dN6QsCKS9hFK1atgqeiMnu2pJTqVz9",
  "key1": "2ivBLKej4k5vr8M2BYgqpEJJVPsm6oJiNJM8k3piAYdqYPyCPz689WPx5TJv8WuB8NtUi9ndUaCEhJR1HJhrqka1",
  "key2": "2gfF2eVnycHQEL2ysgqmALN7nTwaPezFavgFdXXAGww7HCVUkKykPdN5RnmDHow6ddmg1QegGPzUEHtkwrJBZd2W",
  "key3": "13ZyF2qX3niSHeXek9rerDYF47f1d4ndqViPNJc6FYyJHJmuM8YZoGJFup4P9BP6SmVCd1q9QWU76Dz5hRPXem8",
  "key4": "2sM9NY67kfHTTNnFu1CDHaSVTTSFt2nTgKhFHpwgMkYkPRH9f92qVMMFpEsyYeFua6FwRzcFAGuB8rpzsBq7cUA7",
  "key5": "2GUCvA7Mf7u7qSKCShQFYs8n5r8wPXp2fx7RMzsX5Jj3F1wrMboQ9iC7SCPLNG8LGS2aRxHNsfVeHSdZozRC3gWC",
  "key6": "rWjg942NfspNgNhpewYJCexMRtHpUr3LsuTnTmBgbi5Qxf5Wa4HaGYb7MHcddEiihtmVNjXqimMfJXPBW6DzBhQ",
  "key7": "5PP9U9FDSmQ2sgnZiusALsvBEMQnSfqJGs8sj1bNL4JRReo1QZzwcqXarZquwCiwHzG3zKrbsXDHwWebWnDcoMed",
  "key8": "32Bba7NjsiDo4ReS4WvFg4d83VTCC5vMFa9kmYtyjTupiW5xmt9MA9VpvsQNFLuXaqy5rXixd2mWH1UVTRr8QP6j",
  "key9": "QBCd3JkGzsVj2j4zyUJa4zFiVNBPYyH5NhuwpzwCw98zoKFNeKTLqM8zqreRkCNWSKruUVRByK7fwzvFnC8r7x6",
  "key10": "58VtCdr4PVoLPBiLAdrwpsyNhEcq7A9bTZZg8wU9Rsms9bKpMctFzS22cqRVLTEh1KGyB8DLFP78VBYYyFFY9fQL",
  "key11": "266NXMdFb6YYMhAXfuDmZsNUhMgwprATKkZg2FUBQAMHNm43XuRA6jXJPXXNgdSoP9822iySzbij46XyHs3rqpFb",
  "key12": "4bKUiLHkark48w2xp6ADna22sCGB9aMwVHwTJ3GzinNgBVtvsYUNrutqA9rJaF688Yv3yEUv5Qu3MGdoH5RMdPL5",
  "key13": "2tKj3rk37mRW9hi7k21cYoYZjz4RYzKbUW5CnSK8FmMeontKX23b8tpWQGXP5kAQeaVi98BTD5tKAWY5eTs9FVd1",
  "key14": "2hfSraF85aHZ3V9Pr7QdErbUjosn676iWA35vmyZ9rFaCUcm4L6vJRz9xgF6KphVCGDmw7vj2tBjvg7Vw763GJg2",
  "key15": "4Y6L6pRnA3WtJzByoRVkbYrgKvP9wGro5dxoYtaVNfHwDTTUeXvVHAV5yxzP4nFA9gr6KbUVnPHG5ekzMGezWa5U",
  "key16": "285JJYMtstZRZJqAEMHzqk5pYAV5EStaEw3HKNVQ41UQHxb4dxCL2kMzfLPHGgFAfUSd1uPn1rkYFSDPrijMXZKK",
  "key17": "4MEGYsNY3J7xcmi1cQs5DJLrjeKg9GoBqn1oCMsCwX4n6zt5UzLKGYemxCFfJ3nVjZDkXTGZknFf6aaVDnMZo1RG",
  "key18": "324bQi4jvqLotGKsaZhV8fvcxMxSXqPbQYUU6WkUEoPpCpuND5FmAacCE5Kc2YAzE8KxEHiPUciFjeZLPMWkYEGH",
  "key19": "3Wvmymj7XfGDTmVEyN8p3VsZXH1dnRr9CLybKTtnK9SBxNLnHtaaPRd8ohRg6fEwSTqZDXEaixeNWY83UCFRHuNK",
  "key20": "2WUgk2GLvYfVcHMfJKhGmm1MfAVyiGcvCUw9gQvfVMkmVEMwnKui6hZ9MkVHaCDsZtLn3toqv4VVqzWgZALvS1gK",
  "key21": "5MxEnnnSkRKBW8KUxunJW2z24AsbyJePZdcfGgf61CW2gXyFs8nmsfc3FzdVstQ1tmmdmwFiJCqXFiCy2PJcih7C",
  "key22": "3EBdYBpKE51vYQ31tmvUWdHZGZ21xzS4JfwYarx6sevVe9W8NDJsfmpUtMTXNQyw6jLW2acWsebWTWBUxBnQcRut",
  "key23": "9VmYXu1Mhhnq5yv8544e8fYgzJak94FwonMWSw77Hf4vKzNLcJyjWuWQWwLw9iyvct7MgWD8FAmLfV1zTGC4VZg",
  "key24": "3YAr6bCRZHnLPZAU1qYd87JJpnRrs4X5x5AZ1SSuwcJ2WjMLtPY2kxrRT1mtu8Ccs2jnGTcqNs5DdsEiBeugXu6y",
  "key25": "3PXpZdBMyGpVToN5wn5vW4Jy4xvsRae9oJ9866iNSVTYcdDFgNtWA8dxgKQNqDKJmtBk4e9cqkzjVUhYGwKHTZ5E",
  "key26": "3r7dgKNNmtVKXAD4fnTmDZ4tRkP6XmBBv6F1saqcof4tTzbcRot1ZpwWGJM5hq5UpnKwJXV9iFKGna1PPN9KzSej",
  "key27": "62Vy55gsc7TkJXVC3YGSZ9Cc9UugofGs1jwawwLNhtdFaeitnu4dwR2MmaH5PLBCk86oybYSYfWYxnytXv7JDs9f",
  "key28": "36g6h4XvSB4Mo5uBG1X6vKRvj1DuqDAonAVMNgVGyCP9A1SDobEnjmuNYDDoLfp6fHNgnyn7bq7oU8nokWDL2oxe",
  "key29": "2Quo8UvntGnvhg9qwTTWKsLaq6nLpCD6cTmqLT6btscQVVQhnTt2GKoHcFQNRQHTN2GYveCDLbgKC5vLvRKrL7nM",
  "key30": "2hni9bMCGybjB4Scs2YkifKGvdSDu54QtpxSzij3afRWwh9ya7mQj79QdQEA2kLSM3dGa9LWFtBVCHnRer5F9gaL",
  "key31": "4RputHw4K314DHExFUpbo8a1dq42KBrHrMwZ4u2icyemZHnm6dD5FsSa4ubJ6bGR1irTE2y81tbFwN3adaUM5UkQ",
  "key32": "4aMc7M3wSzQWeiDiUoDXH92LKteyaz7Xo32iS7rdBdgynCpYPHFxpVh7Rzq8sg8bv8VffdEzdAEtweq2QVcjsNFZ",
  "key33": "26vurbkMivQ8VwzseEsbAo2TBF5FbTax9jy5PUob9gUe9LqqGRCFZyNCDJ6LMRtHKE7Sf8zg8Fm5jFMbY3SdTq4r",
  "key34": "5iK84AQVDdQzm4tPqFTDHEndUZzguHPLWZQoYNiqeAuVfg2KmtAw53fRzk3Xd5SdBCdHic5zYh9oPTtgXLUATLF6",
  "key35": "jdeiA2sGkoy1bjFfVXTNAS4rGdq7iLRqXVT66i2hhNJKMzL93sKs55baN2EUwJxPjoF6uCuqJTVAppLpYUYivUu",
  "key36": "igkrjDjwkwT2v9z6Sd6RtY6MWvC9pgWDzpaNxZMGx27nF1z5MB4cgBGJLHHCrwB9TYLx7ZXpuSNEUErDiCJ7Fdr",
  "key37": "2YEnfuesDZDMKYs1jPfFiPiHi7RRnA8XQY3Atoie26XeVoRH8GfdxRwizXkWzfGXWJbwqx6vBfYFX9Njf6gu7Jox",
  "key38": "3BLn4sTvSMrRvmUc291BEuKKwgtYNp1iNxeDwh2jxkze2cye57C7fAdLbrQBHPpSHqSBGJhnzCpKmoZXAva1pFNh",
  "key39": "J5hsNEyZN1zUi8mnw5hbLrQwL7wJqELrJPUQu7seEYhKQhT25J6jwa74ogkZuU3HWWAxWvzkQNcVtJoZ5fXr8XM"
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
