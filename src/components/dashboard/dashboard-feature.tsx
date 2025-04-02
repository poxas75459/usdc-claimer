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
    "4HGEYgTMJQbcq5XrKjsVNWeYNsPuV5qMsT5sEJBvR5SYKNLA7de6CM7PgoepKv1Wo8Rr7McU4CkbFKEMgg2XAsGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "98zN1WLQuPoNM29uFHNqhVnyx5VJdWfkEsFGkZUBP4cYH2jGjbvRpy3qJED5r3TBENFiBnchW7mGjEEMcFBgUMy",
  "key1": "5YF3vz3iZYFbyQX8AcxeZWNZtehd9dvYx25GhTdyjsw5jJGebYVMASPzWyjV1T8gC9LotgQzSMuCuxnEQcrKahka",
  "key2": "4tjL38pgNV6ComY6XvbovCbfA6CvGCK3yFJzeAhEfkWtivMRcb7fFntpL5CFWqMpFuYUsLPm8gQvJJQv9DtpJri7",
  "key3": "2WnPUrfS8Fr2ys63CEvrSLjhHST2tKSDU4bu2tno6i9s9pZUXAdJ6GhoRTrjc8V65SzQNJSQGcyfQVpHFmnhsqWo",
  "key4": "2WfkbEJN7LtaiYd8wdWQEZDE794n2WU5YBexQaYK9iXe1JQo684jaUnAXDCwD5ciJM8DcHmdoeWqAfU1anAseFJx",
  "key5": "54DgPAmQ9QAj1xqmL57mDMtdjAviHAvbmtt8CCfn5bt26fqFEB6ad5EE9ywen1bQf5phroSa85syyzx6c5KKujQ3",
  "key6": "3W1AGkVNtw7ssdDzwb8UyLZRVowwPoFcEsgWZp2UsruLsGjHv1KJFuExpkZhCBZJy1hC9MEfdMhbf1H7YDED6M9j",
  "key7": "24SRhRCcHbUbci7aFZQsV2Yny3kNyw8wrXRpAzqGgDzj3ESHdVVCBttgRSwTFPdMjp8qrew5kkLHhSAqKeqoLxSK",
  "key8": "5PX8yucX6zwkL8ktHmbnjKAY3othUvybcWMGZNGav1NWcQJhkNFfoTjeASZ6iHJSg1B48C7qakGgMchmGbWnLHBx",
  "key9": "5rbP6iyabcGiJziSD86vDm6v6Jh4djttdfWkzU9oa56hd56n31TpeeQrDnwmytMhJrTcT3L1PGprZk2cSoswS5vE",
  "key10": "2CzBgwpBePpX45m6fYNPyPEwdj7X23JqkY7tpSYr6VywyFyKaGBmyVxcNduAw8WrEHUt4EbXEPCrjRd3Dxdw9kcU",
  "key11": "5GL5kcdawi58XCiN7XGuuGYc3ijrpvtMTSSK7ZAbufX4wiBCKfwyMK1rG1EnUAvcNVogtyLvpFSGTYjXmKdHMn1m",
  "key12": "3kCEzKzsKRYwHbZqaYv3jQ5UPpz9A6XYQR5f3eaQEn65LFTVK8msNqT9iwuSZQF9SQFy427hRzViyU27UYLGoDbq",
  "key13": "2fTLmRJ6MpdPiNBCbBpwbWP2hoWzMx8Q8JEF7i3cQy8j3mbKixKtEJn3MNhANgbjKq9CiBP4mcFjoFKShWtTVWu1",
  "key14": "4ybAGb3jXum1fDVBbj7ZBc6BGhiSgH1viGYSSkXwgrcqVX6iKdoRqvhDbZyfEkYnNTWv6CYTp1qgm2jMA2ZhR97J",
  "key15": "574JqHHHwUjTYFrwBXuR7K55223tSedcTSzJMgwvKChQCWmitMAFzx5MSnhxTRoYvDgdWwqTaFbgeSLjr4urkQt7",
  "key16": "327cUxvBc1tuuxgpy76JPcAHMGecsohb5W9gafHdKToDXASVbZnVxXyZn9eb7xdpKxV7ZyRYj5HcpjUJudbA3PqT",
  "key17": "HRFiM5fTR25GHuqCVKHwks3JMpoi8GndqHpgqHqxEeUpFCw91ViJx3MGxrgFtXcvy5sg4gfHHBYM9jYGN6Hgvyi",
  "key18": "4Eu39ebTf8wzqK1rdTrXXaaHRRqjWVnoFV5s3Raz8MqdzEV6nMvLRnyr2rTyqivU9ix8iqJMRJLE1bzUa7GLoUA",
  "key19": "3E8dVtwWc5KgADtCEiRDinoAuLgjFYjHHcuXtM4MWBJqYbbCfWYHwKcKmrAZ1Gy9LYR5zUgPuJqXmUMk1tWKpp4b",
  "key20": "26c83sus2dHbefATbQ9brzwzqgWuTNMHr2fVG2141vj5qy1NPyfnLvcXaRxqM3YUDk5yEFnq1ftn4UVrCxcGN7dp",
  "key21": "NhGmGFmbeqEa8cdaVayf5utCzvN9yKeUmo7T2CfBe4smnVkxbEeASXdWuV1kMBaAGA4UzoEucKMPGxryrRCWWu8",
  "key22": "2x1hM6MrRJMNum2ee7k2mz7RzbmDvCMhujFLP7AygdvVKmRdQojqYUueHmUMHE3fUcGDXf5pusSa2u4VrKjBhkyh",
  "key23": "5qGa4ckAkgF39cDCJdZ5G5JonEMWzbnm56Kb859etZtFWfqWUKy8NjuV6w8BZA1QSFwYiLVp7pv3yCrXteqCqmpE",
  "key24": "4vjLPp32BVKxUCBDA2pcauZKSy2LgTyDhfS5PA5D8z1SSCNG9KgLDLjLmjbZbCoHDBB2DKFGB4AqkZxJAU7DSm1h",
  "key25": "4UN1FcMRJetFnaqsheUdKB4vhEsHsmofsdL9Nubm7MV4RvgMS7Yd5ZidMd3fQTohM1xBHGU2RtQAJtKYHGikj96E",
  "key26": "4atbkVLbTNowQWCN3Yshu343enPwxnhVX9jZhRSaE2WJK73giywo5yrfH2WrVvfUXsHngh9Qbev3j5HQ1FqKQkEY",
  "key27": "2ZR3bFf5ZQBHPHYN6HJj3tsxSdEpMTSyJYfDLZfjGXv2APbARpHQse7AUqK7ZVsfGaCXLLnPwvqn8stnE6rf3WyQ",
  "key28": "HpSrtaWkBZf9xzoWQGH3YBWGicAzLuvnfTr3XVoN39PquThSDuN5c7HT39GM4p4fr3RoVPkTP8GLCjzr2NBq22A",
  "key29": "4iZye4MJ9KvpDZxdkkg7WS3zEyD3ZLcdv2JG3kaJ7FtmTUDf8aw2hNc8N4vEWLWmaLbjEjpUgeF2UG3NE9cTfn4V",
  "key30": "4BadCG4RBap29oztr8kpPLeK3XJqykemg5N6xXXMTp1QChHdkGwSWKkHggbfa25sCi3j11YLpB8K8pBvsxd3oGbH",
  "key31": "3MYPnnqAEVanpzRLMFmchZ5qqm5BPu9yNEqeEvH4LYSNfBar7U9rntfepWs26tWKjY8nmVgRV4ZMe5p1YZTkx6j7",
  "key32": "2syEZAZqhS96Tj95N59yBF6UjRRhqbX2GrCDzbEdZZa3BE9NEUdnBeJXcuxfP7EYgWtmSNj9a5fZr55pcCQEmtPE",
  "key33": "2ZzpDVMM1vximq1VG6DSNAHFMMvh9RF9tSAyvMdd3Mr24hiR6xTxs2dBbSUPvcu3pJtrkb257aaku1U9Ko832xeF",
  "key34": "3vEVG8sN8aVFhQJh6Ut24AXdanFJvdPEwxz4srgCovhA584sorfz1iTCfjKb7NYSGVuX1co3zDsW93WWJT9YyKj2"
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
