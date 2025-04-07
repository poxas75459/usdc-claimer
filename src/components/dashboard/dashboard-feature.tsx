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
    "3kXc6LS4YoYSWKSN1yxkSGfdkyh9v6BqajpJhimKrM5Cf2uRidjA5WDGbLWaCZ99MQ9s9EetidG5yFWbSTGtoMC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m7CuBL4QxvLZxK31ZUwGj2YLdevBGWBGCnY2L2SDef1ccGyreqfNtwMd5rx1bSaxxKYZsHgcTJZQtzjBVXt91fd",
  "key1": "3yDmpFbTY369jwhRB65Tu11fGgcja6epaQWuivNfypeRsq1Yr55E2vVQbJATZVAJnBUUb5z2C4UZBvRzQMTQeC7v",
  "key2": "2y9JdX6jxqLtgVzJXyj2d9t6cB3pNzCMNMYtcjbsqqb9usbbKWJwfAS4w7GdGZP4BgtP3CXchfDaa8F545z2AMVz",
  "key3": "3YYsLqYAH6a6NXmQiyr9J9XXjhGoV7qax1CMeQMoK4dANN3iwHVvP2FwmbvSuymMqHC1VAAypyS4bxJ5FkymbgAN",
  "key4": "2d3SH3eiU1Aj2YYAXBR17FjAqUvJrgRMAJkPca2SKgicR5e1ej4EXZZH67SKD4zKYX17PsbeHA7ATidAebgCFujh",
  "key5": "2ytquqwp6sMf6VXunNHW8enTc2oFtVVxMT9q1nfVfRhFARxxZstc8SEdp2ypyPYyvfcKsxBUvMoR5jAsnpMJV5wK",
  "key6": "5WBTcPTA84rVkGkkti51hAQwLWG1YycG5AJKTcLGwV94FWjVGUbeVJ3fFQ34KjsSEWX7EyXaab3NJs8Ao4Mncke5",
  "key7": "58H76UeYLYBswMKSuUuqv9rubXQU3eQDztRWPhC4TWMCYjgWoXt8SVsqWuVA3fs31q1CyQ9Qoaj1N9nG3NLHAtDx",
  "key8": "4mn28Q6SnqagTXb912JU7YEsDJ8RVeaajxDhgez67znCENbDQ7fzxtqveckyuvrH63jVvTXgNjZhprJPCSCxkAX",
  "key9": "5KUnFoee4HBQtiJkYv8uHDDYp6LzqLbuB8EAFQEEcgJoPEWeTJpcwZnPFSXqieBSctzW31pf4Y1LeCeSNnLaauYJ",
  "key10": "3hsHBXYqwwKcTV8jxR72WVKDGmrpEHiZGBZGc1NXc9yBrCuDDrEwqroa1ez8AAbHNUDnFf5mK6soGZTNh4wsA3TU",
  "key11": "3dYH1p9fZbBjry96A1oNshAHhm95FDgePJ7u1YHPrUqunfYydURJS4MX4eYbRKGGvy8NWb4a5WHncdPpaEnhpBRy",
  "key12": "5URGGZFenJ3wAhb8SAyBVh1nxpQLFKFm9qCf9NWN37dMzShJYXMfqZqzooyfQwRQueV4A27FRmiMPZrDthUN4AmC",
  "key13": "4LvSSFuci2Ugo9Q2ecJHJieTqqUS1dgu2ZEmBt5ans8wkqii6vNuf3hNoym21eB9crc8ALiUBxmcZ7mSsMLN7ao7",
  "key14": "26jRVUGh8itiDbSEjGX7FsqTdmGFamUDD36nZXFW5yeNpM8jej9pjzK313iGF3z257RdhkRMFt4e29FyPTPFFuUF",
  "key15": "235EqWNVtQ83ikw11xE5puSMhBeKk5T9asHvdsrpi49sxoBn7C4LApkxq3gbsPHxMAPTpL4YWS7JFW6Uq3tZBuaa",
  "key16": "5NRDngJeheyL9g14KwaJotznm29j8vmkpXtWTxYDh5j5qYKK9vMCJ4gNyVA2H2xwdWsq9i47zRiVqZvuMvSi6c2R",
  "key17": "64PX2jPjnt3WrKoRPf229rGrir5V71d8K4Lq4hFpLVo72BKmsArh2rMV8p5iFhFv2RkSp2U3ndubFJnBc2j8eETe",
  "key18": "uFtqeju7TBHqz1T7DoVtomNwYf1DgJseKVsN42urLnEbfQXLCEK5SSkVF4Gg71W7aUVKgr7MGeqXW4VHuUM1vqQ",
  "key19": "33dS1hY2n1F9sHK2rbqYXu7FCHWZugjY9S42aLSdfH6zerDqvMMqA2vdYNYjuvt7kizQ13nbfuXQKgG9cYnjh2z4",
  "key20": "2jdNuUm7MaR91Q1KiqyCWbrqK5jkyV9UNkehTURY4bYYQxiS1v7888KR12fKAiTcE3MhbsySFmhriStN2qFUdd67",
  "key21": "5p29auGbwDfmHktV1UjnN8htr4kPLwCJPkPUPLENXLnurqyXS4tiqfBtN54LY9yNWHFnhvTy7Nzecn9Xr3pC4kVi",
  "key22": "2eKyerTH9SPtMXeWL1WedYkjfAwWomUcUHULSMegjkfvJPWCeaMmRDQSD6k3rbbh2Ka9DjHMVLvNYj8mswTjmhHL",
  "key23": "2UgJxqLCDgPrTWJp36ozeLRRjrv9YZUoinX8Qr68AZqWNuR2riq92PH3W6ZhaFjMgmcMDfUpxmRiTorPA1mQyfCG",
  "key24": "337X8m72RT73MPweiLhJkos66MFdxEXmiLxtSQeLAZsu31uEWGfJtHUUgJFmRWg2YUhsC13UE36GCAfYXeYxqLvS",
  "key25": "44Ur3BoektvtgFuHHwdU7UeZnHhjsrQSNbkpGcPp3weqJRUnvtHAth14StnxHu2XzgNBYoWKo4KK1FrDsNhugXkG",
  "key26": "4bXyhB9pabDnFXu7xEFUkbbGPxjZyA3hudviFnZc94MdDfTepYUhNcyHt3RUyikDKz9csYoKmgNo1XAbw2DEaA3w",
  "key27": "5zYGnTgHsq3XYEYibhrgT7m9JSiT9mdZaQug1UtSYBVLprRfe6fUsipZzCg18rux2Xc3s3iGTmXhripHJF6RViZ4",
  "key28": "4SqcnPACD4NAADsPWPQVGghFziawQZYyfeugwCUUyeNRqd6mAtMdaJ9HLMicq5HegSbD48ehFo4ATp3vgN8eHrdi",
  "key29": "2oNxNQVxAAhkwpJpdNQy5dWi1nnn6M47AWKN8nvmbnjYyo1fuVvYgkpqMbtkio2WC4PUgB294K1ooz3QzBWwFsa4",
  "key30": "4BkjDyngCNfhYU584MFtd7Fp3r32g3hHJixgULFY5WWueetmcevEA9HTjrsjuUfMdTdiP1P5enfY1tTumf1zF2hM",
  "key31": "3bdTxYMuJScKRBPfPZdymvqQBjzdEqtP5LNoBErpQnyBUpRR4JgqsCBYjBN3b4ov92egC752mQTMECapbofsmmsP",
  "key32": "5qX4eKQEapwsf6Wto9y55TNy1x9z2qted1HjqTMj6ewmoVN8jSo5nwhMBwua2mKMXEiLgmzjoWrBp4HR3fPdB9vC",
  "key33": "3GRx7V6Rzj5inTwr6c8fTEUGVFsxZedf8DqiRoHNxzMVDSAifEuRXuTyFLeY2yHYGPs4ZaCXA8V6cktoXnXpCoCr",
  "key34": "2zM61XCt8iEZ1LqJgXgaSGqXVwBZ4oytZeL4EMEp3jn3vJXLFyQyfvk6hvNPU6hhsRaRRo6rsT2ntCsb5oYnmJp2",
  "key35": "4VQy18w88aRk11GM2yzhbiHSKwk73eWVTSSD58mwSypD4xhCPgdHDzJShWuWASdZukNJrdgwbrrSMrLh9wsdP2W2",
  "key36": "22YLT7bHjX4oGgY3Evn66zGnRjpHKLLMvUzXrziH6Vhj3QVjiG9nyALE9f5en7uU4f2HVjNFwnQe9sJLdmR52Mse",
  "key37": "5bR6Hw1YQMokwW6cQ1GpyLexcqG5di9YxkRAQ7pDJ1UjfPqXa5ufEQWhH9YTNST26qT6vyKSBMw2Dr9bR1pwj98i",
  "key38": "57rmzvKLnZt363AebDtbTe5jLKpc4d2YxPB4M8rBjBKhJjyxyU2mQDM6nm3N3JHqLgm6snsmogBDZtT4RNVP35Wf",
  "key39": "2m2V4NtAUG2MH2ZMRnyP5G4WCLfUTMSwm2DqrQGZDbKfAXp2swNeADQDEuXqv8NeDoGY6kiUAS8Msb5rR2Uj2uaX",
  "key40": "4u1BqAu2YnDwse5y63GQVjzqJhij9rMcCAKa2X9ZiapawLyjr6KuZYtMduxnKgdVLt7xBVp1hTbEKoUFrnFLmBVL"
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
