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
    "4kcJbnkJVfpuL2R8f4jFJDWdeodx9hyByw3pTvrebL63Sax1n7GjNbnawxqbCqt4MYu9Dkhsg5jj192SL2mGbLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3fC5R63TXBeK6gqTidbu7F9qt4w4HujQQBLDEJrYVQrpVagcYBP68uFLatc4UEJaHbyhKtySXFzyXR3Q2e9wnv",
  "key1": "42ydpaR3EJFk59HryX4BgfdFJ1Q5sG8V7gpfEUtZvkqus2yRmS6McuNMLj8oMgCXncRpMVmFKJ7FbUkQ9uY5zwCJ",
  "key2": "3w9aFHoCeAhoiQezg5EsTSjpm7GzZm1G17uftynZ4X72nVz5fT9ZvPsVEccCUXGDp7NQc4n2D4vXei86m69bJdY2",
  "key3": "3X3mNJYmq3F2zjG7moPRyTigWTgTUv72Y2hTKuk5jxKExUNyDRpq4qsiLaPXBx294ofYW9Nd8u8U4GaESVHvHTLu",
  "key4": "5mWsgd6pF4E3xxxMxcQEGmwz214uPCJV6sbzyesvFPwT73tPqYgzyhTsj5g4w2R3fBFrtKJmV5DbXoKfC8hnLYvb",
  "key5": "2HYvEzqx7EEwqHa7RrNKTR2fUfAv9LeY3A7b2B4LB6EKdWtKBhxB3QYk5Heqtv3kzeWQABWR2PjeMyTzbfj7rv8d",
  "key6": "yQWTRidHTqsh1zTTuAszbPuLxr46AuWcVHyQKpbTd55csVazSfG1yif8WBE4nmFYpSGhWNvDqRcZTWh4ATm8tQk",
  "key7": "4TU358uJy9VG1btqabm42DS376VH52mTEJXNF9ANx4uAjtM48shmeMPNKdjJLQkgScDKpokfQEgF93p5oDSRKfeh",
  "key8": "4MneGG3qp5Dmk6ZnLc3z2hfn1fMEghBfNvywdWNxSeF8nWMw7q9Pmy6E4ZEZzjx687TsseTJ1JGBixe5qkNq6Lxy",
  "key9": "4Zqqk2ecqBaEyru3Vg7WErHmcd7iHZayj1BsyDD1zNZx5ypSeRNgEDe34ySjsMRuzKaRYEuW4UvyiS9gHwMn9YLC",
  "key10": "Gku26pyKJQLz47xjzgQuLeQFj2EijdjgjNrGPURRx7jaiA2PR2dLpjHixXZ54YMUMGJTy17pUNhmeBNK8YNA62e",
  "key11": "6158WWwgYNK1YgVvReuXDHqvid2KDAooteUDennRZKf2Nkfxo6kjdu6ZVvcTC5fv3JEtYHTcqTeqpU1VjH4f8sKe",
  "key12": "2EuKCoxyLJE5RrCfMoB5J9FQ7kNe3Jq5q9bLPQbNV2u2J31hY44SErkv8tU8WVLsTL3BidZZXhX4Nhf8rweGpKoE",
  "key13": "4oU192PwEQD7mxrE6sJw5wsBpA8eMund5PQZ6LcmMEPnSiad1rrqknbCkXsSEf97deGbgPc9Lr8fsorHpJTk4dp9",
  "key14": "2r2R7MTjy6bdhcQgjEtAovaP7BSn57ezQVKZEyd7W8ndSrRPnwMXw35FGFmnHzKNZPLrhX6GWCR8YmoqAQfjwt3A",
  "key15": "E3ofCgK9WgfBi6MTDtYdM9Vkgq5WHPMgFVBbtgnkXnSD1pkXzGQDbSLirac7E54T7Nas6Dqz4acbvweMSDs2vjc",
  "key16": "3aTyBuSAB87bTge9WZ7oRHFz9Ay1BnWBHAKChZtXyxuQC9FAp24QeNJ8ESFWzMxE2ibg26CMhTDz2yTvFrBmAiJy",
  "key17": "3a9AqxPFjnWTmM87u2bjzbjjH4PPBF4JaLqMAswhSB63NU7yLh1CDCtJjFsgFV9FMXdisiEsVFCV7dftSmKV8hTF",
  "key18": "GSfRvmC8c3nVxCi56icQGfzyBpsikQMD7pkuPUP3zmSco4WW6tvuMpWuJMJpLbDSqXLhvzDYH8FEoe6BmYnbRVx",
  "key19": "4JmVgzLbwVfwHgpNt5to5FwDcWYcQkiAe3ARfLQVD4xrPNW7bY1YSNSdq5w1Mk4TBHWCVCgFdCYgBu5nK9HaLQ6M",
  "key20": "m89p6kepM9xqWhQdGpNfskQQsAWqCrBVq3ESV3V5bduP5QtCvT5WN4wkuZ4ujKvXZCx69DGt9B7PC2vdxogV5mb",
  "key21": "23U4c37XpxkT5NboiheQMnP5Y2v4BDmvZmzE9b1BZJ6An4ThzKuq9LdcrCCz7PYBV5PULo1ew2zsYnX83G8PzmfJ",
  "key22": "nDeyENjsrFB3DXrKdCDnis4KiAavCHyb24TiXwMsaFLEg8MnnDS72gnFqc2W1FFF8VsYorpygdnhuxjg3e28sFi",
  "key23": "23QQX19V1ZNFz9MUCDD2rZgMYPeGJZDa8gjj9AfcCCoQH4qNoyatKiDeerqVvp8L1JTyrhWPMbQPUBQhtPgrHoSE",
  "key24": "3PyJdSEyM3Fp5wtQT3WNASqYQCSaUrLzfZkcQ3hVzL75UYuyt6g143rah9eSnS2yoK9TjALp3ZDvY5ftZRr68WPY",
  "key25": "5e5pcjkGeMvNsoyqiUVim6vVoSgVtsoaoXG4xfg1DDPwmEFsjZNoB5CKs5SyhDg1TdKSoqnMXjkirDRY2fTSxff6",
  "key26": "4n4n3xM8VSknt8t6H7AZDsRRzDtZqobqYVBohBfRusqbkKCWoU8uYtZEN1eFz93UNZPw2wZaLtrb5UDSgTpzmJ4L",
  "key27": "5DnLDh3QALfm8oygv7S5UinKj8Hm5xrentHBQz4PdK7skvCb7TQ6BstSxinxiytqu2YqttV8fsW7NJythawuKgfu",
  "key28": "2h7PT5MXakoad6RxjV2387etGdrsP4YQ6qPqVAx26xjzgsETYffANntRbXhgrnwnrp9FJfRpudPdAKYUj3DG2kEf",
  "key29": "3ATY5LuipXzs2jTkzYLDRoNUtCado8c3yeP3bT88HZ4KuVnG4WwdmYXhDZHEwQE69BHX5HyptigJebdzJTfLmGR2",
  "key30": "2N6EkfkenQKhGpnTtBHThR9iMC7xYuZeXGwQcRwVdBf33WRMHwPnbFwW3uNXwVnuoe9Yrih4G3fRFAe4GcATewUj",
  "key31": "5WbSKWBDpEAGvjZjdT9ZZR6pW57diQHoXbTnfEZNfmxp2F8wyNxZvtw2woD7grNi62VsuddT415RTkLUwjtvwKdW",
  "key32": "5bqNVdNv44NZPbwys2CZhqDeYsUa4vCMDQoYowvuXHEFh7HyrLgkY1rbQsZEyeVdnf6F6XeMBgD5uSZwXyA86J2b",
  "key33": "dyN9XQodkbYMyvF8DshoLrpovcqXqCz6uhPKHsPf4WDPb6GYHF9UwD9CDoyLNLv8UWNBZqnRdzJT3F2G2cKij63",
  "key34": "3Fe9ShqVoN1wQvWLkAyQkdrwLz7JMFNLCzgJZ8iw6W7Gq7np1iTrXotsJf3d4tQtNG1LQbG2UJAZo3i5FSjE5bnN"
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
