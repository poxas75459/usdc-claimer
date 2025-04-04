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
    "4LFRFTEKoUYVhkzJvPz3NURsfWbAPFHQLpDDAkbu8sErLMT77sY35uUSUHdz16zyVECUdnYyXaeokTRHqCgar53R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38nFszhhGr9BNZhNCAPTqZ1PaHjkRX1ypbCJvYp9FgPXim1HBRdGaVuHDTqqxBX9PMed5Ti2sxDKme16d8AVpAoQ",
  "key1": "znDYaepJ6av1D2K8KamjMJR8g8yPUHHfdBcFsXL8MqumHgvwQ57P5zcdaxex4JiJyL7zHN2b2cDeud8XCAxyoiT",
  "key2": "3CjhE5w6VVTNsJfiNBGFUFq594ZDPB4RzHCLduFvTFbcMdD4QQ3mFMyL1BMYRnpPdgMF7H7BYhPTzcYwtsNnLmbo",
  "key3": "q6mrnN4gaqXRP4EN3QWC4y6moyQusGCt3s4xX6sFA4e3Y27GTcMfyVPXsSqGtKice2wWfxqf12YAgSY31vwSojn",
  "key4": "3eVjzEHQvJc9ynxF9KEUsjp2Tw17f7YAePmdiYXaP9dGQDjF6haLGWrRa5GHVEAjCHPjjZst8SPNynJLjJbcaJ8H",
  "key5": "5xUAy66i9xExL1Xe3vH3i6UddcxGLGdeMKd5M9TWuF86obYjqaRVNUe7W53FcGRuoriBayyVuUJcMyLXhNEeo9Vz",
  "key6": "2WtNHquegJaXD44PFB5wYVkgrnhscorvqjoYk8AiarTr7aePKvHwjzhVk64nBhQ71Ae9onsCZDESuZpxywc1YZXZ",
  "key7": "cnb34B69pdBwsuvGvSivfDw9BocKMHjeypYBRX5Z5oFSMzF3mNW7sUrDYqYrZBFppB5eAQ17pKR5PhxZf9vVy5b",
  "key8": "5exKLcDM8xhhL6hVPEqjSv8NvBpprqxsXDQWKWwz631NJkAxD6qaYL9t3vZ9zMMsCzWDeQ7PbdEvQNuxfjQK7Bn6",
  "key9": "2tw3wc1MECMPUptBTZSXneokJNdEUoMJTB4FZe6pJiv44Tm4yEoerCEMeAxdjBoL16K7c7V86tnQAPMEPRsmQNpr",
  "key10": "4PwVH9MLzskemDRkHPkKPFfUTHBofhngfShFFwEMPiQfv41kHDj3gH2nZTJkds3uqZ3xr5mQ5cu2UtgLgR8iZoEi",
  "key11": "4PdhNSWjgTrbGCGhmz8Rd8u9sDDijJtoSXVeEuPUHpYRfvcZ3NghPEqbhmTv5GSNc7g3MdpUgf7ogxN8GkacxEYy",
  "key12": "4TtTngsBfkhMfuAeLoxQJoKGjyfbyBzyAAsmdf1h1ZAjVgRvmkfoKjk9isHYC9GLkhB25C9UXkDsnizUSR9FvN8T",
  "key13": "ZPnaJ4o7XMtrCpQVcF9ya762S1u7aXe8XyPtkMAXN4StDN6xbnhFpU9eDVcYV6gFHv8Apb68WvFcJ46GgcWVSAR",
  "key14": "3pRA4GAyD9AdveGhLufbgC4t2NPAXk8QeaHDDv4miB6P32iYiBe82jdTanShuR4J6YeDobdBAzeaBHGoKFbouSZU",
  "key15": "Q7xJYfogZAbDEqrGESpeCZxRBvitkBPy4PTYMXii5NVU3fqyGQDjsy1Lo9g1QyR4cG7wGc5JLapYxo15BrbmuCu",
  "key16": "4KdGj89wavMxKfwpGFFzhothVHcUdipTKRVzV8JAwMKLTmeETuVYTPdEdA7JD4K3ZzCmwTSF59bETVkyC4kudq7j",
  "key17": "57TxSHZ1ewDa6PDX9UforHgLv77ecEu8Uxo6MurmB17sefagSKupgHRVvonrNXSU77UAmkN75fy67EaGoj5nEiJP",
  "key18": "3SdGzGp58BGDLhKkjiQyvXjfsXsWrqVAXT4nqwxv8gN4RHSgkfrc3i1Uzq3mo69RaMymon9gBcU8zV24vDdY2QVk",
  "key19": "4TtJRw1QQHPtWV6tQCAgPEM131okfT3FEWvLnnwHozRDnGE7AWg8gVBD9iJ4spY4YXybG6MhWAp75LfWMHRKorxT",
  "key20": "5j9hZYS1eLqi6Yfc5sdT4uj89opH5YQ1xFw9AvzosgJHSyQWdWtU8qmxybJ3P84iLBXDAkddSKasc8S1qpSujb6L",
  "key21": "4y7KTS3FL5VfunCfWmdczePr22y3SpppsMQNKFtfS1abD54e9rDkuRWqx5BLLMdxDr6gDBbPKt9VjUuE6ty7zxQX",
  "key22": "5uSdYS7u157ETUkKeGCwsBLA8FHZ7nFMWycZRbUW13vAdRfV4gHvKdiiefugGMtmzk1bR2tT9SyFaME1KYVSiXzF",
  "key23": "3nHy2dZKaB32foihZcsXKywHnUfSGQudFuHrQsTrbjrWkcQ3RkHLZqUcXDa54wmsQwXXUDw6pn5sy1qxPhY8Q7aG",
  "key24": "5a3c2JNp1RXiRiSjtJWyAsWMErjjMfBVu9dtzhan2mFSA2qDZUZPz4RkzLTMc9PmT4jJ3MNBDbR1y462hhtxU2dE",
  "key25": "27VR4uFwoJhCvk4cWGn5k8fTuGiS6qmFDtUZc6NACwkxsLYrnXQAg3hPNiqC6LKM83GgPjrSeEoMApJGAi8gzdqW",
  "key26": "4UbsU8ewoij7TMhao3Z6DDZfWATHtPwuJVndpuPpf7wjzVfWFaRTwDpqUSM5V1n2cZdGZ9gcQ8pidr3QwwpqWmvy",
  "key27": "6EEAduQvD6pcCYDPdgAnqQsdfWC6h6uTSpgMfZ9MVvVooYR9vUuq9Co1x8zKHqUWgZuzrb2bdvJWEniwAnyebUE",
  "key28": "KfAvr2bEjVB3oThiAW1Vpg8NYD9GeEndD5nsi2ENzyotRbGwTCeasYs7JkrSvyJJ2ZnBL5jaRQV29EqSmMGXfr6",
  "key29": "2kTs5PveHBm6UBRgLytaajymPV92TeyxX5p3vT279HtnaA4h31qpziQ2cgfDxHZomjXNW399hManMj8TyYHRnAZQ",
  "key30": "2dSwiZb2NWnKhfR45ByrxiM3QZi4RZ8SFQPCL9Q8kmwQCVxukZxsSWKkMhUutNtacn6VwKuXFawKA2u1XtBYQKFw",
  "key31": "WhA84rjaR4yT5hYyDnqj2rBZsnJjgMS42mnBKM9TUsdPWxvyH1gDTi336NEsyQZtseZH3RMoLQxoznT6W7Nd81S",
  "key32": "58EoaJRNhBvmuVE9wJY1WriaaqEHaNxQG7thMpknHtiYor3La93kcpWcWurmpW2VgSqgHrxrsSQQ3bbvdHsfj6HW"
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
