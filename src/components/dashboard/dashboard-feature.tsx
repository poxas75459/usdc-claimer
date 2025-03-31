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
    "59N7quKFjtPDgPav6ZYBVCBcL46snBX9khvVg3myAJMmiu4F8wimQYgtKmTafLKZ2e1dVXREUKmbmoy4mPNPc4D7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23f9oe44TPP2p2KgYUWYRNhirEMvaawoGiNhFEuoJ1stZM5EFEVtnekBxH91WzUpfY9ibkRR4zRTeYtdfznhJZSM",
  "key1": "3nVsfHxTmgpE7XEdmwd8vVHL39h7GoSWUEZa98pTTtLQk4NV9kYpTWHQWz7VdVw98Kd8c8ke3Bi1ZUSbADCbFRQV",
  "key2": "tr1nZ3xsfngvgMWfN37qyosfke75Fo7VzFhN98gYz67EzzA2c3wuTdX5sRFqGB77ZAAskkQxUxiNeQYCzAk9R8K",
  "key3": "3ygaoyTKfxcHv2SNYDtgbyooxJ68LHDPoCDz2N6Tp4iJ6bmB3BStCHovwt4DD29gpcrUcvaESspVdvAgR3KF8cLA",
  "key4": "5TJjis8AoL4fxTWmi6fD7qoWweW4Qgp3dLs4B55FaYjtLDBezMzZgD5ifNzCrjWjZQLSCpzEizLHNvToxFH8C6co",
  "key5": "2qTDqtSRV2b9QybAJJHyWhzc3JcicXbSjcsLLZUyzcgqumfXKKh7Ysq1iDAX9LLKhWBtWh8iYT8fd2CR14AaxK7u",
  "key6": "3NuuDyDbawa8YiLQpR5CsqcZigoGZGY9xDtLnuYCZqWmMQ6MDustMDY5hyik2ZyAopPQGtJHJw6sqyMc1dMh3zCT",
  "key7": "4525HQRX26sTbB4eyan6swycouM5n14mSyGZ1LScnHr9s3McQWmK7QSFsri7LsUtxVvq3nZq1YiZnSVqMbKThqsD",
  "key8": "45ZMdVZrZBkPS6QkB8JifGWbvbmiGs8y7K8rpGpUFjY1UF5VdSEzUGjkwpfcHebE9tjwmGbbtFakZpaR8FEWyLVH",
  "key9": "2n99T4A5MH2MTPhyRdq7DrXEeoURGJnrn1xWhz77q2R5KrjCboGqFxMG3vhqcCHcM6rka4WhxEyL4UUYpimnhEkB",
  "key10": "59xqv8xxnHrcVQ1ijBV7Vhz68xtAyPqG9Qu3L9Lk81ZQh4XQGQTzJiarLPhcpvvo7mkNv2uYimkddstecLuqwi7L",
  "key11": "4nrw3BiuVoMoVVkSETmx9Z1KaSUCZjV2ycSqQ3Vhgcnw9SSQfEaE1zVHq5s9wWfFAuQZRv65itfzvkbE6QUd487r",
  "key12": "5EfsFCFYKu53Nw5yt3MprnKhdEDQxcEVMEq2RbqZWmy8CaGZxHVHTHA5bsRZAUHNN3c4qBWg2p7r6Co4oWYSTHYi",
  "key13": "4i5WSzKZ7F57KPK2sk6ax9Ak7GLFS1RVwqnQXzzdfhTVvEN3yfsL6pnFXs5hMxaLfCsSxt3ngZeZHHLM3kAGau4Z",
  "key14": "3jVo8spGZbZNQaVfNXfNsPMcosCSGBJAUfs1RPGue7EE8hBGYrRZRxS7v2GA2WpP7RiGKG16pbxVZM3uZaBDZwzK",
  "key15": "2XyRdDwbeaZJcwryp5CAxgzXwmGenzsKu8yqfkxEcY3Y8wnRbXCP42Tze3QWiMtTcfgRToonkGRFt4QUsEKCMftJ",
  "key16": "4e7DfqmJMqHoHXeMiCVsiMufucbmRn9mS6EVNacyiKZFyFkgemCBhRsd7aLsDQNsRadeHyzsHdDWzKtSsfBYNL7N",
  "key17": "4xCVXBNL5GdF3K6iscDAVmKhKi3ierKwZtA5V3wvt9nTu2ayjBp6XCkXVmuxN1SMP6Vdg8VRjocCaVwyfpAmHNX8",
  "key18": "X6W3SbghMsShVuQSmNHebCMZa1r5rqX7zWn3HRPZKp2BMgCSHbx6G3a8zP8TVaLNtDVnmS9qa9QNZP7F8SzCsAM",
  "key19": "KwyVz1xisJ6cNBACMbafLNYnndTcHaMSjU8eYVmEai5VUMfCCdr3HkibeYg2nevubAsF3rTQrU7mCMbyGdZhMmY",
  "key20": "Gq6pwv46Myv2DMLdytS8wkV1Xxw8D2yHPsx4x1sJKuKx2XEJfhUh7QwBQs33YHS7sYLcfgJkDfKHdJok7eBFYir",
  "key21": "3CqjCVM1CaB1ZkwTwnQ2TELvVG9Txc6i6hTYPjGBBsaUTbG62GcRVkJNWF6MGZ9ryNNQWZgHfZxskjAz1pz4Mz7r",
  "key22": "5pqhL1ANrQJVuNoKFY3oVwKtdGnf5B7XrZJQf9gKXFaRoV6q7LBS19vz9WS3HMGXBWix93uJLKccK6bcb9Nqm7V7",
  "key23": "3tK4BRxByeZxXoNNHGwFaVkdhFAfGMVJbVHAgb43tB5RQteBVBTCR7aJr4HjfvEAxbDewYJXnuzMSppwdukCoxBG",
  "key24": "2XPHYtYUtygbwMFZD4ZV9Wfm9De5unLtEuyF4WBnnbErJ8ARRz2yxYPjhJuK8s7VzoRcitgr7uoa5cuRYvvB1kmn",
  "key25": "57uxYugNDvUR7mXFukTX2SEa1jTqWXdzQFFMAWVc9b15sTpLZLaGUodyzaUr7E6V4BUAyL4utxmECv7KXXbEFvXR",
  "key26": "c9YNJnaQiu323sB7duk2h3e5wQS3mXGJ3EAeJw52LSX4RtEjqMxqXht99GUEmKJ73edeCydAeacAZpFbgd5Mstp",
  "key27": "2xWayR5nFDsziauGAsKLB2Ytv1GEQeMPEBu6HR25hdPzqQUm8iK4AqyEgTt46mksvkeRm2SZmQb1fiPd9dj8fhtq",
  "key28": "ZF7RZnCY7v5QWRxAHcYFnxtmbxzo55xG9CziEW8RH41jnaLYE1AkzmWiaq8EeCfsC3uAH6fCXGWYG4EisZDx3Ee",
  "key29": "46nKJBhGjcJTkcSvWAR4TeMFDUwsiuTRQeuE3KFEK8h883v3aZ9DAGPSzBrt3J1mbMeaLfnR1wJfWyHRZAcRq2Px",
  "key30": "2a6mqZx1gfjEFNCSG9cvAkNmpy2CRq1cyWWCJDyugHuk7Hmbi2c1hqi2p3bmvLutZdwwdshZqruwXySQi8hZbR5Z",
  "key31": "2UhGiPRES8PfQmvJbAE74jrUbH7udjyCnjMwePyQSqQdjnKwsr3osDwmuRm7LEpAak7KM3NhcJ3E4TPLULLt34wz",
  "key32": "3oWBbyWZHRGMiQLaUy8U82Y4oJTFkZVnJiGPCK8MXeUC2p9oSyaTCs2nS9984Wic9UL6mPn3GRF9WWAffL7pWf57",
  "key33": "5AgVfphMWXzedUByQBiTGXGPyFMXgmm548qfqGs61QU1QDGfWuEE7K3EdUwJAxTUR8LqXLgrYisyBk9R15UxC6Km",
  "key34": "3TgAm72GiVeGXiKH8L5Y9VxkZBNZ8aw4agWJiPGbxBch8LDJRvNxBXP3sUzCdYEafvsAgEGTtfpz7Qn8q1956cug",
  "key35": "5bAHhxA2CRWdrssHwHhS6ad5W3g2d3TDjdTU196d7QHsgYiEkD34kRmdKkQ39zCTDZwTK84FHqw8UMvumpWNXyPC",
  "key36": "2uVAQ3bZqKrRDPJVGm6t675swJ4fpyuFA5XbnyEmMJN21fu5hYrQZG4k6RRbwLUWqmdBMe5tN1F9Q4t8sznKXE25",
  "key37": "4cxUhVxVpDne9QRezig2VajUZPfQWCFiuGcYoCk9nBdWn6WY9FduJm4WaXLFDJQPyHFfvKbGwRN9HAZsxjtGA1pJ",
  "key38": "3wbzGtZFMgBxRcdkj6mdo6JojX6yjGVqKtUU1cDcLvMnvV9hBkRATdMX5HcKLUGdiq4LZiPZZhVJuJDe16ugTb3L",
  "key39": "2LXkKgvZb8EZz47F1MbMxvwpoxoDQkPC28tTmn1ZR1yaegSVPmNeh5ZdU2Z6SZavVxGiqPejs5WSTCTVxKBp1367",
  "key40": "TUHHL4dipADYPeqVdmxnE3fWCTwNU3FVBh2ymXmxTj4Fg4KGt9qKf2xXD9pEnXnYDbG46AKjqCdE8nKH5DYFy8D",
  "key41": "2zenkrpqMQzpqjcgHHkjQnEe76RCW9Ur4jDZhppnbMFs9ebUqah1S1huYtZNm9GNaGghpqFkCY1oXnTSRPu3vy1i",
  "key42": "9b8HJbLnJYbqfQGWSDv9GGdXL8TQkWofETZYXWQ4ccQiAZPVLcnGRFqje8dmHFEycHqGTSqYq5MpgM9agDcAhMR",
  "key43": "4SwwnLqsaXQ4NcFb6oY51WDZT8KpUjpeTJr7LKmpUf8BH2Gty5iRjzi491Tgi971c3bm7yKeeVWDQc7Foz2QD9zE"
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
