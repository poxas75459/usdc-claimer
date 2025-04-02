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
    "3s1Ma8Rv3KjjJd2GLXAyNkDeXevUjXPsnUPzwwUVFgy2a51FrU3Dvfiz7r7jpJPhpPa9ryLQMzKsszrdHenvKmec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646e8ZQsGcbnAQWktbFLoKSyXTA3mc7G28sgqJ6a8s7D7Jn5dDF21VvasmytHetbv4jxHroD4M5kBm9SLRtHSsov",
  "key1": "33UTnnEFQq9dzMQcpFEypRoC3hHxbziGREFbVF6PR6JeRSJP7x15ESfZ9mcgrHivzEFyHLEa9VtUPDmEA4JKgmVE",
  "key2": "44v3aAmN2tr3w2352twjPTJDS72imXVSQtB9PsZYMANsCJZuKH7zS9KuWKwVLfBW7ABkxbegZmPZL4suj2V5oPNt",
  "key3": "2MTR8kEAWTDLremksirdQ6DYdZ1oRwhygNFwgCEMM3ZV1kYAAbuynrF2xUvhrceLxreCeGXqj6542Jg7p2JjVFmC",
  "key4": "xw1U2ofTr4xYMKKN3MLmrt5TFnKyPJFvrw9jG4xn9BzdBhDNtUepU747UFhYMU3TFQrbAUcXvB13rNgee2GQnQk",
  "key5": "4Bms1FqFEKDKY5FPZKjRxozQnaAWRjmKJV3CNuFWJs9nTCYD8fPTEXRNA47wribw5fqGQZyHH9jkh65P8Tom5zUW",
  "key6": "bcGiLAtuU5jaWQTPA7duSbPxPpeWUfwuVAM1HDL7PAxvQxuse7cC3AMaYYDNpQW55ChDcHzuC2At64U5SfuvL2L",
  "key7": "2kMGsxgdwF26bY3gVDowybYqNnfJ7Mr3TsC414D741xbNUqhUHTk4ZZjPEbUUmkZkgcijkz8QCJa2w5uyoBLSvqR",
  "key8": "5fvp7GP24BPLGcLuXdKeuiy4JiJwouwxtNoj51FPdiZLL6LpUU6DR2qrEtus3XvWEgkp9KhdMXnLQHNVvdUdbevF",
  "key9": "3WnnufBpgis8L1H6YL7uf6XNpcV8iJtxKw4JuqRjnDMCpNv5AmHW6SjMN9sigHMokis9pmYDWyqPhuvpUDyxTvgA",
  "key10": "3oZAGMEEtBd17DznfK9W9NPiG5rGHmZfqcNj6YucgUVry9xi51fduU5giby2GfYBqseYuPcnhZSqmYyF21zpKdma",
  "key11": "4tSHbFc57xdTJFnDdmGwnyjMM2hCywoHeo8S3HAzLw8USSdQoNnveN7TYrvp1dw4gJTQ8HhmHKCpdQyAiDcG9xx9",
  "key12": "euZqtbbe8BVpPXVnZDGin9uHhAzQmPNyvvpSATMnKeAotVbTtbY2SmUAWwNwzN5Heer3RaXya1LajPPFSToGZkU",
  "key13": "3naEuLYbbZdYqDwtsB7iboFbC5JCd7dqc5EdZLfNCPGhVuJFTpmc1p9NGc29MRGhGBW2UTVbDGPRJsCqbMzHfQqn",
  "key14": "3SgPUcKFx93mTjpJHvo86RovwUfMQ38FEDpC6kU9iBtNP1gBbiLK31moJTH5fN4wyhgUs4yPuW3jXktvb69igjto",
  "key15": "4LyAPxVwGo4RS7fcvGZUyzmL9QbkzfVc4xk512C3UWS4MTWNyugX4mWA72XPQJM4KdMxwujFumWnhaFqmNz6q31w",
  "key16": "KEwRfugskdDuqvjLyt8mWAnMNVCrDdFcQrBVvJtV6yvwCKLtutj8dHJP6BhKiPvqkbgGLTn3tzjyafPpePnojdz",
  "key17": "4HbVtovr8Yve9kgd1KgGwNLMk4YMMhrzJnxCx5UjSASjb4ERPs3iFBbVt7QZqvdECnumEt9nZcANsbyPpb7acPcc",
  "key18": "4PseuqHS7b24Pz4mj1A79KTr7NLvD7NLmgP9Tk7K3HGuhKsuiXzsbakuzk4y1LxfqERy53ZqL7VWb1sZ51QxUo9x",
  "key19": "42RZPdtRSJCxXebf7cNtWLy2nn6FFPTAaH4dRSNdSSY4dvmWA1UY2uWcG1m4NRyvV1VQPcXXwAuWqq4zQ4X69rAX",
  "key20": "2Ad43hVZoLtWReWKGiVMLSD4KTPotXGpCAyLywq2sZfjbv4QvsabL7gdkHugFpA8bmwk9ZVCzRiLT9UDTyANrr8L",
  "key21": "5w1cBicsfSpWAGH8EZPCvEyGxBSh6mPhEagAdPkzfq74NgRPy2RADLZg8SvAE1ALVZQ3E9hpb26bU9Fm7c7Svtsx",
  "key22": "y5xPLpYfM5Ef1ZDrbJdbLtzUgYEpZtUatmeWZZxMHRw4URx6d2nKLwvmv11FjWBauhgzvWAmcA1yAN7dNRo5Z7z",
  "key23": "4jqnUm6x33uMNXP4jsdpEaNxWDoBGNeFvJK72LbsbGdP6AeTWQFXSGYigZMkqhdhkbSBhvqJDFKFMsBY1TkGSeg7",
  "key24": "5Co2ZJJotyrGLVc2FV2drsENQrNawHpApk6x1QqMmMzgzH7iANC7yXf5t6LBHNkD3qtC24nu7NcH1dJP255M4esF",
  "key25": "37UejwBcFjqyqyxybh78fo4sE9AC5nMoMCZzp8dTThUQyHfyZF6YuLnoq2m9K9w3tFfKQn7V7Hb7W83qLuYhPn1s",
  "key26": "fDSGRGSzYCakTw2VCpju3Vu1figXCTvQwszkB5vUAWpYsRtHyL8JWFECzzhYwGNqcMJbhk86tsVRUFEKhXpVzbH",
  "key27": "568yFDkm5ddKhyYfo6n2pHMNzm76gR5HEhZocmK13tiw7FT5FRwGNtx4AkKNnBe4TZhUV7hKJr13amdCexfq6pu9",
  "key28": "2v9WHBXsEUYgj8Ugny7MwXGb2fxjztiaDi9nExfS3DTkny5TvDkyfEJEyqcFBmWGLdScnhNw4pdEKbEohSaHmnLK",
  "key29": "jc5kabsRCSWrL2RjgXy8BCLkNF7PUuko8e1oSgVSErmA9Xgro7guFHuEBjZZf4q66XzJRVZauAPGHKyREE84qwY",
  "key30": "2uFiJrca7vrUzCTHZjTTzc9QJbsqE5pQsLiGiHwmbrBQzN6BYggJcJAE8Eq5ud6nUEJZkeJmWEBjkaFi2Wjy7xtf",
  "key31": "poHrAtwFk4axCgydsVpmCWRpPnXWMU2SvVGsE6RwS3CdFWtWLKwPsJ9U3fWrhbHHs4nAiCuKxGx1YYM8XrAmoxs",
  "key32": "uw7fM5ouMyhD2CbFcQwy1FtNCs1Ak8ewjJeMifM7VJJCSp48sY9dpLKvTM7QM4vuqCjxEm5NNAZkc26piTLwRAy",
  "key33": "4CiEkVfxkMzSNmaM8EgWYR2VMpHiA1pyABxTGTKUCWvAJh5i35zdCbE74BsaEuVXLNFLrvujbh7X5XM9xkTKDaj",
  "key34": "4vCnYeLsthQ2n5ZBQSFP6PVEvof1d7qVRf4rKkPYjGe2SMrsARJ9xAhTUv3eGdjaoiEtk792mCb4b49HVvMWARBa",
  "key35": "4FLJnapopRpBuCFp6rR8HVs6QS1dZrFZQfGSPdRLRKgGs6XXtJayo2YZbrg41DWGX8iP5naez5JnzLQUYFkFE4Zp",
  "key36": "2r3bGmgCiC2h345HGCCaHuvoFxJAnNCMTESZrboRYcCSP1Qzk4jkGnsMrF8GqDu9sxDauRGvn2yEjtYo6xt7Q6zk",
  "key37": "25VoPkrdFGXQhCggJXB2rzBMjs6nhd6qdVtGyubqyyGNSsd9Uc2TbG2ZwDk25GHjFmyT4SkkdrErS2vusQTeWFH1",
  "key38": "KaS8SsVukQtJQMPhmXAdr6Ev7MKDudP4LAmZ6D1zB2qWfynScRZzDn6nPRt3Se8z59avMgXsF2DXwH4TMSgEYCp"
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
