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
    "Fz7hMfRLojnu1wZkNc9jnausKJBVPddeNAFQGDqUkJJFGq3LXraX6FBGuisdgRMdpoXknyogJuZDss7gvqBLLYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciG6mvGmGjrGXHEaaECFmxanc7DmiH1DpbhKvtpawbgFPbbYmFbQ5DhjkkWzFvsFUZa9G3AF3G7V4ZWaSVnQCb1",
  "key1": "4RVLQ7K91RySqVC25aMpHwk7e2JqxH7dPco6GrBUC8RrPnyrgmeXZRpxQMx3wmExrJKB6buHZ7tRADgCuMrKxiuy",
  "key2": "2xTX2FyyKBiXKPcvF35UdUB6yTE4XxrrfQHs8ZzMtRUupduRTEG49fiqxNcXKX1h8sCD6cNH2EfUQ79uRqtfvnUK",
  "key3": "R3kV8oJgEhWH7apLzuF2E1FczTddVVMofzFpAefHcz7yjq9Rmzt2iG6LTVsD5BRa3CTKiZLT2ahHt8uC8HdfeLx",
  "key4": "3Ae8R7FJ3rg41ufbCACtnMckKegtgvdvzhzsukMCBnB7EiJcqgM2RoEuHho92U2cqyi4jXHpSoLQuSWZboZ2hKDM",
  "key5": "2Xr8SgBy6YMBA4JpZ5cUcABiM5SX9CnFA2MKFvi6X2jhKknE19hQ61mkfBC1kUfeRqCZb7bJ6jSatsFpLUyxMWU3",
  "key6": "i6X3tqPyG4EqxBEYbNSgCNFobSJiCC2ZRV8uBMaSwisuH3tgruFQhPunZSHMXZoDt2vPXqnmBXjp2GbmagqCVfL",
  "key7": "63AyRtQ6wegCUxXtvr6MDWDsh3KB247XxmWUPNow364fYdC8F6wdUWXacs3bb9BKB3GdUdy8XvEEbaCKPY4RPH5G",
  "key8": "27cWceR5SjbZjaVNuD1esQHxPkKp91Y3Zsdg3i1mph2WAjqsmJcjniyLtJmsHEJNXx8qoqPSZLNxhmbt8AC8uKZZ",
  "key9": "5uc9o2BcnD9w5GFMYnpuWEV4wVpAGkT6GmNuPk8MtLJi7wqH6tPdAEuNT7iroCceEPTzCpZj4CRwZUwfQL6koWp5",
  "key10": "365TKjS47j1FCkPdCUCdfDTuJgutHUCFRW9h9GMjuVMmTiLVhnyMrVEeRKiHhqPMVmNRWxv7w6HUtRSj9BpwKneg",
  "key11": "3HEzvuerNusp5sv41Cy4YyjVcQaUorKE84tPqw2dRUgb8Gn8Jq5MfjLJ76SmFgFzyPACkK1rxxL1badBSHDDFPVZ",
  "key12": "2aZsBFyzYcHHyfDMYRfDL3CdbUp9SAgtuKCdfiHrSREpnNRTLqZPff3esSNdiKR1zj9cUjNLBK1JEAGjYsPC31ac",
  "key13": "2V4BhN5ghFhafJLB5PRxx34KG7Bh6VX3r2aNp5ttBh3aZ1NqAKs7k74Sr6iE97FC7ES3Q3tLuvmuxsFaFp2Nu5my",
  "key14": "5qzVusU8KEepc8MouZBkTg8tU82FJe33HTapAtpm8E9Ccq2VMTarpKv8tQbSvLUVnrHsSBHQyni8DeCKPN5iBGJU",
  "key15": "5TUXwDR73XFqY2kry7k4mbfixiACPjSqmp1pqfpvKfwo8hv2Ki2BYn6XWRGbEg272qFseHYiQ3T5KKvHQ9BBSqi5",
  "key16": "7dN1dV1S7GW2X111qWA3hTM6rCgvVnhqi7yF5i7Kuv3LRKNbh5GmisMpTjADidCHQdYNdwFbuN1KV3US9n11r2V",
  "key17": "Tb17waYVqW4QbYjmmhBU6KJjfA4RGRf73ceHGMZjpvifrSJyDF2yzPFFK7Jw3A6bafZ9Y1m1RtPwuvMm7nGXJri",
  "key18": "44rNhqnCShuUyopFYp54h1k4tRYhHTTayHP2T9Cn9EM2SgdSaZAasiKjksetquufUKw7JemrYAn4cpRxiRioqzcy",
  "key19": "37B5yZPAbtmy3x9QXMoZWcBGwY5pcX7JxR9oVFy3ZB8d6SXBWNXX3LfWaBGnrLy6ZW9HKDPbyoeR7Nrbc6Tza9e9",
  "key20": "8hmcrJAFRtfeDmM37Vh3HXSCZFHkR5g5VZAuDZ2NCPdcrrtrquwcFjuF4387yhcMSdmhtQ9MF2trAyLnL3y4Wfx",
  "key21": "JKQGGvr82tcvhj2XUiUvsXqAik5RRrRiVWENtyrY1Pk8Y9LPEEwkjta88wceqyPGc3asaBAZiJn8S8a5z1brBuK",
  "key22": "5kCLCEsKotmZAEz7RMR9wPN5MB8TMCcYDMnKMbWJQB56GdaMAvKeWTBA8RT3W12fs3rf4ijnBzrh3pKmus7K1tDE",
  "key23": "4Z7pmBMGJFWf2qLTWK3c5tfDoYLQFP9XLEUPMzQB4WGtw3XXHeLtneTJaPdq6guoEj4pKhuDRqpvJMTQ32h67dMT",
  "key24": "5b2dMykLToD3w5rodF6CGDHXjnBY7ZgQqRiYZc9iq53jK81fDKZTLGVLndUmWiHESLpf8vTYCJVXfzRZAoZMXFRA",
  "key25": "4vW1xof82zuDfHyfRoPGSDFF5V3Hq7JQGFMYQMLJ3cUYBvFYvSTJBt4FpnpumGCRgFLnWXfR3Zv1YhGJQYAxgxuR",
  "key26": "nfckatL5pYS5wsJwNNqS9BMX6YsihvirFfR5chmCfF61P1GvUNFU1ZeEXeS5rFebBLR1G4JKAZgT8TQhyQfc6j3",
  "key27": "2JcNPcSrN9u9DYD8MojoR4QHmWQ1GYqeqcyspkvuyunbJrJFtQFs2UQ1btZtVtswWuT5E4svhrp5dE4DwGZYKuAi",
  "key28": "5kS2xNFta1dythhSWLugeFfzmiLEB7LM5SECGC7gnTRpx4m2osfMXu7wP39j75JBjaAViziH6mc8D4Kj48xL8s6p",
  "key29": "3KeeuEusaHqhRCkS1hHpPQUnpzbViyFQLV3jaSqyxKFpb4NxZQud4JUGVyQUBRknS3oxURkY4CYVKTB6rhBkQYds",
  "key30": "5sDmEFXZ8Xfii8peG8NUsoezDQH9HQgtBpMonZ8pmNnfvPQbEo3LnjCh6rYmDRZhpLF8pXj6yFGJqCaL9kmGYTb6",
  "key31": "4jpzyZppYCXUazbn1vbvn3qkbuPy5Z6Gb5RmJTRxEerKrc3BYU9pGKspyVcuw8sfeuA1hocpaBFoiCuPp6GxWUi7",
  "key32": "62qiTytViTvzdpaLza3fvn5k7MnhWadLdHe2f1LC3dwyoLM8EpX4MNHG6vcQxpcjTd8k7DuFycNpA46ayJR2LJxG",
  "key33": "tP1g49qUvBXoPyPdgQUZSBj8Dnp95aTZFvaqbGQkSDT7xA2xvgopmMuMN3jFCqVH79WxYdnVi27NGD22SL5s3Cw",
  "key34": "U71kJAgbdr5bY4zLuwB9BgMkXVApJsJ3ubBmbPxS8yQAkgWdveQAvWpyfmXoKxsyHWMTNNi6MmYUJorg4hgmmeP"
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
