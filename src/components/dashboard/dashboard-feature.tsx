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
    "5NgJrh18Fq253pxBtgHyDMskAzqqTVDGBR6SXGxbmkwYLstTU7eVJ7agZZysR8dbxeWc5dS43SzUVZk7bHpSm86F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VCNgQDbZDqpVs4eCf1YU2d3PnmkxULvQYNwGd1K7xdrEucdKiJHvF32JzPqXcLTdfciez4WDNYHBnK3LgB3YwU3",
  "key1": "4aSAJ69Ah4YFbu94jawUn8s3V31SgA1e2mQTuBpgkENsicBnF2nJmQzydvnEP1Mp4wTKVCTSFr7TEkEtfus67Ud2",
  "key2": "5p8z5iNSxX3sYZ4CUG1JvV1TuaggD6YqnKnvbY4ZPDeohpJXv8bEsnZQdabkEsRYPp3Dy9tC6S7uUDJSDgeyn2ut",
  "key3": "2KvBS98FetkrBCr26LMdk6Vdp7dUkLreZtwbCvF3jR5ttMq1ZGx9Yf6hT1FaJPNw2qcdLAxcPofGaq3x182LELrE",
  "key4": "4kpaaaCqRZLyW6zoQvt5mM8SQsSDxNnBNzAK8dcsKidqHPX1A4ftwT1FLiEvWDEFsr49yGw714Rn4gzaLiEr89tJ",
  "key5": "124zFgbeiTh2jwYue2VpHara7n7Wiv9dMiFUmQV1x1zPuh1DFkNaLuyAqmWinqro9EDKa5zgNFFv362UMkbWZx6b",
  "key6": "3g15Joxg9UzjuLR7g3r5YUJvmVRqgmssLjxhGcSVviY9Wg7EiAsaEZYmfgjtTuhPg2nXKAg2ePsgz9cRbkrstimu",
  "key7": "3H4CrV2c77Zx97uLdU8AJkCCcDaoUeFx2yAi1NfrQ6FTyqcFzh1jRmsEUaAhLqQA3Bb6pJiKtPV7Q4u747E2ZD58",
  "key8": "3DXxYtVmbnV3TKTbPs4u5hyncot71jVj95cpBBogbwGMecHb7fjGEyMQ2R9HMwad5euHX2QNST5ewhgNkhEvr6Fr",
  "key9": "WwJ9gUfMfrHVVYpwrJK63mBvX7iuuQGKztjMWmihZe3Xta8N32SDb7ZNnYbR2JwSfEVjbemwunEdG5AYKsrdwHQ",
  "key10": "4eHmdMhDk6PFw1haF1heGcs1TzHt6YwhuKdSQVPq7EM82DFnSuHcnhGNx4BNwrz4xCtADuWNW5dxVQQNc7eUYxCx",
  "key11": "23Uc263qVdArqEag9iAzFWk8KEMkyju68WGFqVhMuHpCoQ5hQxy2wfgJ1ynbuKQtdxyqcEkQjEAaVF5XWFBrf5pn",
  "key12": "621Gw4G5BpgprPhFDYv7Dqs2EFW97bGLUKjuG6X2bHm8Yh36DKQi83NKezNUPmp8YVkHFsJyKFazfDUfBva5wino",
  "key13": "3Sed6yEX4bcE1cMb6Fq2VaC62Qkcdd6xrPaoFeCuV9oBgfTURuSMkHNEPpqvT82wQP9zGoTJa3qQtDL2hNqePtzg",
  "key14": "42rij9w1fsyMTp7hZS2LKStNEPNghbbxFXzBe6NXontYBQQM48YrJ7bzgfKV9VeANz8xYEfNs9dgzb4LAKUpjW6C",
  "key15": "3gwhmzUWwsWk7GYZtJEPZonoMYJ6G5qagZikG4BiJNtcd3BdHYLURXSimgkzZJBQCsC3ooBfWZekfrtatD5eCDu",
  "key16": "2LUJL5vcUUFortwo6t2o739Mtj4Z5VEEj9g7UgE9snovNXfT1AxErGQt1H14VEYNj51soiutULWbPTjgXVAYWzd3",
  "key17": "5FUiqQossciVKjbFEggiE1D2sZE2aKMh6wkihJgCPQ71ExKhZY8ScVLZcq5BLm9nnKPe3bYZDuQSnbTD3xuGgNDY",
  "key18": "5yNGHxSwBMRbHBNkq9ZjWEMLuG1pjoQzeQ5fG1S4f2jXFvoUUzjWAEprh9ctxd69YKoRMU1HPK5af6iDmnrvkLAu",
  "key19": "cmEM2HoqfDFygQ4pcK7HvVGEFStrye1yFPMEmvcujeWT4iVJpq8yppP63gy2JzWDb2aecqP9jx21MtdhSDB5yBX",
  "key20": "5Dhbdd6dt58NrD76PB5irLA1ARao7dsgXsFKr6ufnJJorKdxDWQqoY4mWXap63mXpUVs5L5xm3Ahr9uUzfrMpx3b",
  "key21": "3MkYb4oxYLhG8fLc4THiVteBhazrorKU9m81Kn7hE9Hux49radogzcgvUoknC4rvgEv4vPX66v1XWKnS4APxKxYH",
  "key22": "2wp4KVwS5QAmRKXnJj71Sps6R62vUowx5J5XBdo6hxdTynKqmyVsqKjKzWnUMJp9SmXAeZbGNjqZTzjqs6fQ68D4",
  "key23": "4pci5A5KNsH6nZe1rjTxA26T1DurMza3AJjz6keyf1hhhSMNnieV9bLB5d9vgYV8tT5Vkgx3km5q2yGD9Y96Fsst",
  "key24": "4PqQZp6xKeDN4SQjVD7qX9L44Rozqko8tJshZsuj4tbcG8KFMoTmSX8SP7XSTEjkdkGgFRY39hSZgrg3mn7GGRkZ",
  "key25": "3DWb6y1aHwe1aUWX3yZR5mhwGYJ1Chek6Dj2B7GCh6VdK7R83G3eSDYT82KRtpXAJjB77z5nfLBikPCxRbRodYqu",
  "key26": "2TNKztyvebu3hSRzDDeepR8p5xbD67hNATXLk4uC7mo5PVCSWAPyprcAMU3ZSoKv8R1gk9xL7Enp3yjjMpT2itiA",
  "key27": "XL5WjqfGuZXHhNx27FrwLBRjYzdxaPB5n9CApydL4rAmpYNVx6Ky5anevDHmf3a6k3x7rHKTPnrb4ddbqGdR21Y",
  "key28": "3Z6MAmPYt3Qxg1YUx1Y7amENuNHR4SXLUuMVAyjVbod5APniVv5v2wF1sp8Y4TVdKMeKe9r7km5hv2rQgEYi3PtS",
  "key29": "4UGdrokRvEKkVcCdF5vuNiJfhHVJAtqqyc5dfgtim7DrE3VUmZ4b5z99CEdQATYK6BDYXk2scWQVfkteM7oiyJs3",
  "key30": "5smYMfMCfhAPEJhANxgzxCaVXU8zdKw4aLVQ9gUyNtpDe8BFAXFQ65s9pecr2G53Uek88qqtya7P5xQoWjSuHDiH",
  "key31": "5Rs2KbjVrdvKwZsJEgQobdvW5XBSUdikSv2kcaTfmVySpm3TQe3YiqG9oYdAXBufNk5N9gkbdzii7BvP9KKYVj9N",
  "key32": "2cCr6gwG9riUHwCQxiyE8x2AgfsM9nRvF9QX3GpUjJkr1ug3NQW3jiwGudeyW14gbARmAzUjzqJqJTBjyDeqLKS9",
  "key33": "5EDkGKek9BQe7V9v4xveB4kCi3HPyWs5YJLksYjuZDzcrniuVL3Dcgdd3qbbZqgT6o14dX93ThTMKR4MFjuvf2ub",
  "key34": "2Zjo1Kezg7864AigVaSN1WRbg5KgEAAZA2Xe8GNKd5tbc5ezreWMzg72szqpH7atabsNDVQfY524ALVDyy7RsR7W",
  "key35": "3yyv3KDe67Y5ZGuKMQJvFMw1TS9bEupnmXYNbUr1Sq4ntuaeqFLbA7bAYfF76WRrJC7EGGNe6bnt5sW87G8eRdPs",
  "key36": "3YagYYAxTwFZLKAUQPkRgtwZWTBkubrCTppSdJHkge8tqYzV5Bz6LNPnLEoN6n2P59iBrNpX16Mghv86XsHYBzhY",
  "key37": "4bnTiP9DZeGFzvM1znkHKpoiL4utUAJKAXsgiu3bw8STwJohNUfEiB7VH67NWJCnowKk5FFFEeHzsircVSeisAXg",
  "key38": "2FEDkVbWvqDNBNAeoQVSbDZdaz5wwNhyi7DUVgrkjr24s7pZEBw8AH6nPSNnH3SUQyFRXjXpdjpQixQq6EwkhJRq",
  "key39": "4TDZPvyasuHaASvq5GBdEov4hBjPLaHLCR6CHSP4Mf5haUux2wYKt7jUnP1Z9tb1QvU6FkGGRHtxvbEoRmT2DJjM",
  "key40": "66w2YC9PmkYMhAPJVeFYvQv2BvWDBNop7Sf4DV2uvD9yDmYx4hw8iHecyhzeMx7acigWp5yaCDag1vfvbaMzZYvV",
  "key41": "2heCzamtpaiawGpHGFVuTAZpah8erNnMMe6rN6ymfoeDNPV3U5gFVugDiVZX9aon1UBSaRcqLctr7H3LA5hac2Ze",
  "key42": "2XfrAnVA9K3qAMxwwUbHGngRvdJbMqRNgeYfYfAhPBHAivpaCUqHnTDbECbk7UxwR3QuPiwdG21kKmKCVskAbctJ",
  "key43": "3sNEqQNtFDTFG4BKkEo95cwv34fYTaSXgs13cBy9UVJDJLtiMgDaVdSYnUuRrdtKE52AzpFWprJXqY9TSihPTUnf",
  "key44": "2PLuiqC2M3eTMd3vAfDHCevmksPzHPqSNRs8Bgt1B96Uyo33zeRKgiNFqShKmxee4PMzTSoccCMGt1vfNaDbAPAE"
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
