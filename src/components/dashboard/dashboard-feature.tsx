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
    "5q2i7srm63hmuRodcLm9ebxaPoWBbZNFTgeWHCsJvYeCgSd6CcUzCqyBQvNoT56wu9i2TaHhFFK6aEEEVnciq7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2p8YDLgKz6g6QYQiUff1yyY3bHTNpdSF1EmXnbzhUMKAtUGZnWpTUZ9gHqhDo8Lx4hC8JhdnvnGdmCJkS2A7b2",
  "key1": "5wpmr9iYU4HFQkmXDKfKUrmibmAdqd2RsnjXRFYGdWHi8jSMrpHyuDuGrn35YYeUubDbr9u83LwyMBSfb3ck9dr9",
  "key2": "2DgULxf8DC7kk45ZB1HV8j23u5Kt2C2NvTx2ZRSM9KcKREqHdKDfoJ3WYw3WyhDWZgC3HAN49GADkB1PmWUfaGgW",
  "key3": "2kh6vvZZcv2LC9KatDXoAbM721uNjdwF8f6BAGWGnjYLMC3cxHad9g3KNegbHPTVF4QhaTbMByszTk3TE2roTmMG",
  "key4": "n24h3TLWSvT2sXwCMRFQxiKp3Q1oGLSkvxypG5tgRC2ajU24y3DiizcqgAjSeSFhCSBYEMcUaJ1ZQ5Qz8mhdZMW",
  "key5": "3BjerVndGNxp6XQcNY9zuHbtWwqYt8QMjiLSUQKxAawiUxu5FawLZED5C4ebRu8Wo3krRLfK6UFrR5mrM9sV1Vvn",
  "key6": "2SMKhjK1WTS29YdkrCN3pP6xvXbg9bigEJNf45tZgb7VnTbbo16gUWeB22N1nZS7dm8K6gnqdFKTNAX6ajQUJ3bH",
  "key7": "64C7jveo9m89GKvwAxELUjafuh5rPFxteAicfR7oqoBFsPF3xoBDVsN29Y7qfZDiVmDK4U9xvmxDGMogSnYu5eti",
  "key8": "44txDV9Dkxbv4tjvr9wEnPr58gfmhpA6uXZ18gGMZkcoeFoLHuiHdM5bgzmvWYNuyEmyNckSyd7cKHFxgVCBGCcr",
  "key9": "5iiCtdCPNoxKKEP5qPqKn6ZdJAyH6U6ARvxQf75NePMj7jHZ1cNm6N73psdCYiTX9oVU7Jy3XoDDdGJGzzb9sNgS",
  "key10": "2g9sqNpxk5bKLp727xufTMmS6XxrEGg517JrstUgV9Vx5tgvadE36ecCT9r7MJq4ycM2xkfkEMYBKP74PESJZYKB",
  "key11": "4BXLKWf3fjp8sxKWFTJpDp4wHxA1TfYdshZo9spNzogMi6H4T6rYzWTG7k5DiEGobLzj6uA494Wba4ajCeo8AoKZ",
  "key12": "5zBouwjiiTs8Le14YN7DACfRN86SAXcMVQFEM97bJvVpcrvZELjRNt5XNWWYgVrzu1HtRtx5m52dBKusAfE6v2iY",
  "key13": "4KCcSyatTbfFTZiCb9FLUkdMHLHKUQLQPzfjmviB8zoXQSWTiLrEwnzHXnH8MTcFiToiQKH9QA1fUrEMWKoEyY8H",
  "key14": "4DB7o33AmWB11Auit4gnJ2VEecigYdWQqzg55xEvGeBowzYnV2wn4sfGDCme8oraMc1gxP1kcN1PoH9NwJBjbN4p",
  "key15": "5d7hYQX1xTcG2pbKo8tCBbCGSzKyCu2zVXx7HrEE4tydP7W71Ea2trug93Ax7PHtgirrWCDhCbSb1Js9F1neseMY",
  "key16": "6ftLoRPifZ3Yqb3eFtCHWjWPtEPxVgf7No5eTT4JWnYEpycnjLpjeGNvnJEiiGH1VzdgMqdCaYNXXJMLBVLUumF",
  "key17": "5jXmDKE5YZiVQjPUJjEtpaRYiZiA41FjRvDeY5o7DRSFbLQCbD4WgoSz348Uqr3BAimnoC81fLv8yWL9bgacmpia",
  "key18": "3gTmT5thduD4jpDCdKt4viWaTWTwqNaf7xvLpABnb53HbDF9q3Gh3Z3fUEhdR4JJMPfPA9b8JdrWQsgQZJCS7aVm",
  "key19": "3ACccaWRS54p46EpcKx874TyxowDx8UCgrJDfZZR1GWJBci8FeUCQb6JS6SJNZLia65Jvn53TTyx57jYa4ArKXTv",
  "key20": "Q6WnHRn4GDnm6HivumNAAmzhVMYmojTcSNc8f93x2a5rEBVyxgJcKDRbc1bB5C71ov8gt9wVQCRpQdTwc6QWP2m",
  "key21": "5g8Lwvc5GVbgZwLnV1mHv29icDrb2LukEMmxSQmryaLYTUHPfNRcX1pfqgDNaUd8ABKcoKwyCNr9c7BMED3oZ38V",
  "key22": "47SubWAo1FWgKzvARSvBiqsXKEVM7GGW7CaTo2jC8qide3fbzJ1xnwQqfyfTJat3S5FVcgc21F6uCRvdpo9Pp69e",
  "key23": "5AigAu68EeN9XKNWsR2sMFe7oGP7RX3t85ezMfktgE8YDUM3K8kC9gj57mE6r5LDFSwA2msZRJExgkipZFfEn1A8",
  "key24": "3GNCDboVwTEuhz995dgh9JyZ8QzHYfBatATxxbNFumxgGrjtLgtC1ACJSM82vcJbNeAayBZetwixwfYvn39YhRm4",
  "key25": "4PSFXjsQ5A4XeoK6VZ3uQ1uHx1YfpucjhHViwhcpYw9T6bGu7BX2k42RJLTKgCdZ8v9h3pZxu5QFFU78PV9D32Ht",
  "key26": "7a5UUCfwrYsu6PbBA8zBwNYZAmjy1JujDBXFeriPjA2tu1NUd1wxMVpJu7jLw6739ARgSCYzNwUfZRjrigRhL13",
  "key27": "28mrQdpjSV5DZQ2iyZAXWnLP7RDZhegYB5drHgEYpEj63VbWoAacj2u8gdpFtXvKq34wG9MJTT9tNLP8M8GjMXUW",
  "key28": "3XDbxmX53ATp7LLhggtxRFn2iUD7pLTAQnS4Z65rbQh2b4vGCvDjvn23RSNNUvBeFUQn3t8gggpETXPcoe5ZwHk6",
  "key29": "4kYBQoaAzGNKkGkVMKzanGkeJbL5NJ9YbSm9pzBYmV8izS8mkyyFTbDvoLK6qXkGmYP1iEFNffRFNYaDSPeYJU2y",
  "key30": "2yZaeBWLgTqEveP33qijm8kLVL28dM4Gcgm27Y7xq6sRk1FWJth2hovkuwUWAJCZRmWk9Dw9TYprxyX6t5T1zbWm",
  "key31": "5gML1bybtjzq1P1pUPbM14uFpQntLhtE96t7YUn5RR4Hd2fpwHoo6z4X6gAWTyeY4pKDw2DeGp5LrUTsrZbgBVSZ",
  "key32": "5yVvFYBF6Hr4wAue6mYrijJE8KJ6QxbavCuqsc7Zy3GVr65pwFAgYV2w2e6W1YHtm7K6ecuL9aP5DL74mom2rP8H"
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
