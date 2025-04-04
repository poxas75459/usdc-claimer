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
    "UurUrd9bhkasS2evT9RinDvdL56TAXxxRNH6nKBNog6FsZ5mNsRJ5HgAH5hNYjZ4RgKRimdRKnFVaLYaURyQ15P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7pFveWMQ1s3aEXaP7aeE7jNMo9CFa64hXTDPRGWgd3swJ1UdtedMzjzyaX8ZY4dJjWouVbQDecXmQPMwVSWMJcL",
  "key1": "atdTAY2avkhpW7igq7gQGeRADfrfEyf9CsxLWDFnm4p7r6ssXoTJmJu5gHSHgtHiwLLU1opq4ucoV6Knj9rQstY",
  "key2": "3vKVPtn4LPaj4vHpx1LKSdjN4b5qqY7hdJ6E71cukF1HSvW4PhgsjDw1zJ9DthgagaHyav48StNtDFpMNBMzDZY7",
  "key3": "265oH9eEpoy36wDdrSN4aTbrobBjiFx2t6ewdcNhJg98qkAeqMXDyBS5c9eYf9MoUg5RbU6w6etfE9iDH12wwLZW",
  "key4": "3nVkU6hCe5MQtYsxyEbdy5m1MzMMmXEQDTsGdWbSfjie3uYDcnhppAix5RDidQfaWmn1itEkBWnYut7kB4sdLPhu",
  "key5": "5mTSZhSt2h63J7H6S8uYeFRN5Fst2hmQ8BmE64PBgLbhNARXtbQobtAxXwHnx5Dt5ZrrhD98dbjBtoM9YYJvNYd2",
  "key6": "3X2e3VJPXH6CMzzVFZYRG4gKyb9oTpGbEsBhzvoQFhsZqnwWV4aeDvu5tKyQJiydf7kRWE89LT7yHtnA2Ge7fDx1",
  "key7": "qyEEmhRDSFEoacsmHZ46ChuWwQQ8G5KxfmzCxgMowC1mJCne18P1YqnnnmWa574VFVLcDUbCJyFN3mmaWt18BaU",
  "key8": "PR4FASLW9oUTpDAQFLYHEuFHVpykWrMwnNgioRBCv4ddKGmDCKyKWe3YakKrGTM222Cz2odr2paWUtFsBkRsbwe",
  "key9": "3YpUEUqBf5fpVhBkY3zxUTzLp3BQPDKxPfWxfs2C5qNzscgAogz8zFuTzcdLTNSUGDJFKNXQ7tNo6dWMXeewehjC",
  "key10": "vHDRw7V2ajSCmDJ6zDVQ3bqDTE4KFhayay2AE1njKqoGEg6PmNaa3ynmYzYxE1vLc9g1WHQSAZ7WavuZCFtyPzS",
  "key11": "4usLbrC3BFZv7YtuMZ2VVsJ8r4Ge4UrD6jynXcKgWngo7KT7s2NANsXBiVx2rDrDPYEtxNXtxrDr8M5NvAio3no4",
  "key12": "5yd6P3yTJCWHeC2GHntWLVoYBDG4sbyL1P3TJyRoqZUNnzgrVFW6BVgkRm49tds21NuYRD7k4nHAtro75Y4qhct3",
  "key13": "4KK4cNrmT38wNrtxwhw12Lk3hbkGwUxAj9VTzsGGkf1wQLMMjVqDkKcEt1LJe68jWMRApGfPC7oSZhiivRy9ktfn",
  "key14": "2BL1Rd48Eb3WVAtTUXnLEtyyH7mmTjhGLickmkrL4RL5eSprJAnUhSMWpGw3sQyAx3BmdE8ezi46DrKcq3PqHUe8",
  "key15": "4RxrAK9BXMi1bwqcTpweNDzFw1paDEQutGwhjHXdGkDAdveQVy25vRmHzAJjnVcynqfhJg9BQnBjesd1vxrr7cLd",
  "key16": "53tvSGoNuLNoY63Nro2qjYG6mLUU5f4wgpSjGLj4bmdMBytqaReAP8XLMNnk6JVU74jSL8n1jTRXRfqZwra1ar8X",
  "key17": "3HDsddpkVZzxefMDCfqhnm1FupnBE6pbXTdsqq1hnvJuwSQzkEETVjLFC24EuEW9jiTqhgQtDiMRFjtsrqd7THpe",
  "key18": "5xZGHeX1SWhS6xSFR8W4DhyizSgBGQ4igdzCyJ8YqYdhRp2VHt79Ary4t7xdP4ChqDbPuDm6oZy15Kc5145NaL4P",
  "key19": "eZwj92C5K8cAaUWdeDHPhkvSoqJpXLRUXofLwVECu6arNgXQTytpaYixhyMR7VGcH8JvE2aAvAkrRBAxHLNoLB3",
  "key20": "2XnE8NnZBpYNgEKt68ttzaE9P4pbqFX57Bm4w6xuhyVsA8a2ekgUhT7chwZ4jRimJQRCuWNKRpNcQetN5JWUfwbK",
  "key21": "4M1fK17a2CduPhe7977JbGHMkEfqd9PZfv8z3R9rCbxxFy6QdjWEoMY2wwL5icdc26N1CN3BLinmuFiKymfaGwvb",
  "key22": "2BrCHxCsipu1qTTPvV5qzrzFb4baXLddKWbwkGNxFX7qm2io7MQCoYBvRmkcYgMSeGVKzK34VRyMhJrvV8KLAxvz",
  "key23": "63LVeF6bSgohWCmQT4uoN9owjPpXKvWC42urgZoi7un8A2pZqcnq6LcYQ5CnZUyS4Z4QHk9ECtyWka8GKZMDDo9P",
  "key24": "3Mpi4uEQfenhDe6aLZwnBD85qXhuZGNdnwMD3DpvSATnKxsjrSFJkhDX1JQvqRiLtkmw7exKtciXZ25x1H9JBN8e",
  "key25": "2aV9Gd3qAvNtVTXS2xsbzeeHx8HndiHQXgTApPUH3uwUP5fQNRXAg895PCK3QEChUKH1tEXaSmsQAtu6SYem8zwB",
  "key26": "3bAdaUQyW8T9Bcs2RnFXZ4PTRHgA3AAqbGUGrTCNRpztzuKDmXBbuZwwBRMm3jyeiGtJHMRCqQ6UCL4Mu77Zynjb",
  "key27": "UE2cWn3cAxc8Q62L52iyEZz1nCAzEuRS4ccwTGxFWETPG92bepDAnZ2oGkrkEDE3vsAQaqAGh3dahopE4E4Er4F",
  "key28": "558EYxoy1DgY9G8TcXE9tExEGuotbQNWgUWLgcTBJQh7T71n8CgUgo5wLWHUsYbk5N9n2hJNKgg9r6SsN9b62xFC",
  "key29": "HHftt9NweaNZZEGprNG7pfRNZsHsegf8ywMJCMupW7oDLu7ky4VppJ6eFfskX4p1kwavMfVn6LhTurbHQTaGCgd",
  "key30": "3nn8etetgQPe8BA2wJ19xVapPaMBWhGZJ1AyVYt9CZAmiiXdfnCYRiTjxkF8kUTEwkZkGo4F3dTdSAJT53LXPMEa",
  "key31": "5wJ54s5KuUNh5EQ7LSMT8nP4ub1jbnkLbXRKoQk8gj6LeWHrrqmGFeRtqHcqeasmpNDtZffcb3CtTuWUYrdwJ3Y5",
  "key32": "33YYjj3QiDwuBZ7wcyno4gNtPzdEwDYGKDSLYJHJXYHVYBzxAc2BfbJCfmEwrEbsyGjoRA4WSKStdeFPBAYop4BP",
  "key33": "LoDDwdq4e43FvEDPa4ad8Asttvcctkug7PFTAw4TdRHSixJm8dHxS2NDeQZ8qLFrh4sNAv68AjwfWWq6Rcg4r5R",
  "key34": "LwyC7QZYpLwme7pTz3vS6vdEoeBAyzTwwPthjaLY8ZZW625Z9hgvS9uxGsAGfXnhCMnSztarDkoRPupYxzWgosV",
  "key35": "GeMfsdiGndSUgayMgAHqaDJhQjpCUSdLMVSSGEcPnYAKme1EzC4bXHwxdnMiGx32n39nbmZj4PXAp4JqLZMCjbM",
  "key36": "kbBgzViTNRYCkfF8uTsX4sQnbQE5ZcVfZo1tsFLt4tjd2PHLanwNSWNma3kyhuuzRqTsQ27J38bANYQkFVkKLsq",
  "key37": "HUuKz2Y5acP7oziZ8vQGTdTRjEVL1LD1fvs1aMhUjEEyeyZSnQRGMrPHDB4HanvtD8HoiiWknU6W1DHat2CeqBX"
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
