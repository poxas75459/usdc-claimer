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
    "mLeSpUKm5eBE6jY5zqqWFZhRZVuAiNL6qGLbudZYjiYLCB8mFy4DJ3idTfeF5YEz9vXct6D2YfMg4zBeGFv64nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HhQbXsvwuBJT5scjTsB5PmamMXYsihu2WBoXUBz1obFtzAEyPKzzVf9nk8BuHVx7cnnc5uxCKuzHUGSiaqSdFdx",
  "key1": "2ApDN568h27rnX4PAAP2WBzC6vdw2n51TaK3ahwqF8qmHVN4oJGJgQq8v7LmoZm7BosurqRXt19CyZacqgWVzVSq",
  "key2": "YLFHxyK9yZKEpsbHEHVjJr6baae3xQ3fokVhi6bE9iqsEumXQ4R2VpyhrqXTXNgxrRgstJBCTDmZncVzdWNgGCn",
  "key3": "39Qf3n9ZvPZhjHtGXUmeMnngGTcNuw3ELhNtcVR9MuziYhPXUPQG8PqVqj29Nb8gYbrjWJG5r69KTmMqGwiMEs5G",
  "key4": "5PuHvLgaQnDHCt8tvshvE93wphYKveh1FNr35roL6aS8wiFHE5VQb2qi3zCGCQMLz7UJEZbRj3PPscHaVaapnKM9",
  "key5": "3feVJnF75KsS3k13wVF3JjcsB5ZzFfajhbRJL8MDDtDVh41mDTjrMcqSqjnJXMMTAdhgnS9WbQBzUnFXq2yLkuiY",
  "key6": "4SRSdMwM29F6mbpvx4DWqX1DyF3DRXgZvpSaP12qKANtTrvoeDgjaT5P6wCSGqCRp7qh16zv2natbKxBEQ3D5bsS",
  "key7": "2d8HPU5AZujcjMNw83TUbWtdKzfyQNTJvp49QLr1TFZJw6AKku4pjyMg47Yymq3tRVFJquVGzLwbVcxmHyxDGt56",
  "key8": "Kpwq4E9dj85pVtTMwkvNAaaYNWwjiM4hFn5ujDfzLWTjGGWqmNWGey1h91eVxxYsdgsamArPdEED2USZNPDwU34",
  "key9": "4xDZ2P5kHEHnmLLhvhag6pJq1dHsbeXNTVwnE9ji9h1YcGTmCXn1Fw69HqskTfZC1ZQ6gE3T86SUaReW58QHzN3q",
  "key10": "5UvPBTAcxtG6EicWUqRLk5xpxBwYgsiV9irCKHnV3dhsTtK4ozyUD5Nem2jH4SmgmFiXKd4xCuQa7sH44DZALtmg",
  "key11": "62LCP3pee5nRZLWQF1GDXDcRhNHchD3jCeagvUSEPN9LctqkRiJ62ffm2XEo9GLBimUjjQ44HC7FxyRfCiok1aJg",
  "key12": "33HigiUqo3y4HQBT3g8Z1PeoGCKBB2ZEjJ2m3sZnkFc1i4S4H35nn3CmxqCqmq5TGPbzhz7LNQVJUTURqtrCjMRq",
  "key13": "2yt3T7yrcqMUCoBCWuMtmGFsAt5fn6iJSoziLU7waXLV7zX23sXBenDtCKGXpkWven568qTDiFkEUHbMWvyBBVXv",
  "key14": "4rxMQT7U35AJDAoK21x7wpwb5drwKBMHdRz5idUGcnwEWrWibLXau4UkL62ECTYZsm25w2AV5fcHWVy72BTzYVeA",
  "key15": "3BH4C5cvQvmLnEHGbHjBVTjeJEs1AwS7VvmrhpG1s4i8mffs2L3mvyfUW4PwgrYrW7NxUxrHgTSacykrP2owe5uz",
  "key16": "58QUm7hH5NLRtxfbiCq4s3skVqLfMgQvBXB2tE9XV8Nz9WqRF5FBJccRdvKBqPCKKsCR2YgwmAjWmFX2oSdxQEEG",
  "key17": "3zzVKhUx49HJDtsQhz7pGUoqoDpaZjXCo9gF5bCs7F9yK5NzXUdr3coddTJuJknGQZEM94C7uZ99qEvvDyvdxNb4",
  "key18": "5tWCPhodSjLUyzTN8NV1tDMkxh9HKVapovGXR81wpf5m4fyiVgJ8AYaW1nvig8ALD5ez4SwPFgrNFNVM19zRycqp",
  "key19": "E6i9Aw6xKhPgAySJkuarvRbodBywEWFBPXYJSn5XhSjyJwApdFHVVMzQ6HGCjeXtumJpQ5NvGpPmsVymKXmK4vZ",
  "key20": "337rGoYZpbqaiRkDfKcpHtjG9ey49obd3eg5c1Pw6SawFsRE456W9oYeyUdb29GERDVUh3aGtt4B74gSSUnX9gaR",
  "key21": "Qv6tC7QxWWEhWGQF5y9eyuoXC3YECgXSFD1sb1LfbuSDF9w5D1zrxK9g1kQq2nECFyfNkunwZ2ph3KWtFvXJN9j",
  "key22": "3smFZdwiFmERbsKUuEHDgqFdPV2rushXMFtA4H4FWG4WbGcEUNgdhXG4w6uuBrPYT7iwyCrrYy6Uqzp1mTENn28N",
  "key23": "49RfqKxHKLFdU9XdZvenPEmhzKz2HQ5dLRVHJfk6BPPYDTC8hogjyKBA74xuGK9AEGwtVrz8NwgnenkFdqsNyPGX",
  "key24": "3f5jzgoELpNkbG4SX4zqoE9oxVc5FFP342i6AHQNkebYsqi88FSrLv1VqmDUbMWrfkYcndtqkMftUM8nCnR9mHz",
  "key25": "4MZxxKHWitqdFWVAAzrt8xLWi8yLJa5PLaHG2Ey36ajJbhPQTJGxRqJ6rjGs3TpdxF3vL5RHk2pFaBbpd5JZ6k7a",
  "key26": "2RzhaDaVt3PFWELjcnCcFjMkzTwbksiepVvDka7bgq1FRQRFQy4w5UcpsTvAUFM1HGANdbWXg9d7LfqZsBvrDRJt",
  "key27": "35CFA3xdamxcsJkWVQBJPiBYWy4anoEy3nANCgt6aTt3SGRgAihmhWp8dLYPTZuzrYWAE7WVAtqfHGegLh9ZQnrP",
  "key28": "4cCpRwQKU1dcxaoUFEHCeU6DfarvJFJsQFZPQaheH6DAmho5Fmzi266vL3SmFHzihGL5j2YvFEiU6vrPdj9FCPUt",
  "key29": "jvyCz15mJPijD6jLtKENHCBpFhampHFQeGk7qRhuK7icqHDFLUdGyyZFrJJBM5VeDYNrb6UWRuCPW4g4WQDD3Zf",
  "key30": "3kGShSWoBwCG1Gv8PKwghBvi4kRaKcKXxDaJ3dJhL9kShPtxQpe5ybUC81DucnSGQpJyg8Scv3hrh2g6vfB2gkXd",
  "key31": "2uZiREShr4RSHUpd2Xqysr9CPqNZZrsCgbHPoeGViw5kYuHFsvSHPSyvvKJu3cFsqbqetHNH6eJf6vRJ1fckaYVD",
  "key32": "58nshwdco2o4fUVL8EgffZrGcm1paqfeoGBVVDqETauRjG6sxbaKK5cSLb9aBvgTxnxFH5qx7zh3VfzTTQG6GSn1",
  "key33": "2G6rNdQyg214tUkCToE7ALvTuZZgEWwmeYaLJSnGo4bPS35EKtQBTs2sTCCR5JVL6xyMDMbc9U3xBZw2c8zrZ1hy",
  "key34": "33WGtSfFjKzkQR85UB9n8ebeGYAdqizMKEbaDfJn5kSNtty1WTnYgoeRFnydm79avYCVErZ8xiUVeet6SmdBQf6N",
  "key35": "2f6YPLuzrd9hAbjjerAPK18YB4SixyGhwgCQ4DpHv2XbwxiZ1MESP6ro3ksuzwrMYqhD45xhfYwnbZhJNM5fcaEw",
  "key36": "4UcwM46ZLqquZqQGQCNoZeK4mRphFKqsuJdQNot8rL3veuvyoviLxi9gincV1JAcNZ4yvGWBpCQ42Q2SkWWqGUdS",
  "key37": "3hLHZrpCSufZCfxtnyjaiZbAingEtYEpDi5eTVdTZpdimG8z3sa5nqmwj1KgP6RGywtBzhkuGAaREkA3ZvgpXTea"
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
