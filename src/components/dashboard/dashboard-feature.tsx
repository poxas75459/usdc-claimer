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
    "3qzbUDRtDYqwHH7tbXE3h5sNE6CevgtvBPo5JhcLNWijkj5E9sc4VdAkzLsGcE2djRqtCNENtjeauW818Q25oTss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dbFyTdRjyBvSgFHepphuXFaPZUUZnFNqDZENd93g3xkUM59R3e1Ln7ncJ6Sq3gxTFaW6GUtoC4VRkYsHVAsnpis",
  "key1": "5t4kn5xF4nGG3bUyXeFvDspFnGGNSBtm9tpDvgVGvxdbetxND3fwW8XHcjszZbXsY46fTLeZQaGNGD2ARzdx6Mv2",
  "key2": "3KVTgJEprTQYiXv3TMRz9JBGU2wSw8oguPTdRqVcLZgYYjT8c4uebgJdA1LrwZSzErjXHUAJTcKqCK9W4nNBFyFx",
  "key3": "5ecXGbmRTL9KDWY4GPouMSn36ojWuHjmvgmbCqCCv8NM6WCkqqS2srDYeM2R7gxw7wTFAfE97yLsUcCPSXeGVUsG",
  "key4": "2Ryy1gXKhATAw49oY9Js9NpJYa2eNh2C6VW8vG7qveHxuxCWB9xAJmaMDbndMBuuqCVhzubzAqqmtBSj83DCHLo2",
  "key5": "3JqR1TuMYVivtyM8yAa41rvFKmPWybQkn2KsuydGiZSJyfzRzBmdN69kJN25kA1HUtyGjR7E5yv4Xy8LyBZiGz6y",
  "key6": "4Urmez9REF3ekJGYytvaCZP4sWE3pMMwZUSTkABrhU2HEutuE8VuFWBFYQTrdUM9nwydmNiBULYtjFdGypEs51f3",
  "key7": "3z7j69Ns7XBPo6GRntAwKgBZMVMkG2b6GoS8MuiSfimbWG6AAwB98myP5jxuimfMLKHTQe2ty4xRQBpQjLxUYQv9",
  "key8": "2dAvrdKTNWYY1snVLRFHNz9JqcEoLcTCQkv7Dsg6WngVxooBzvNr49ZRqATFrwZzSnZVbrtTczconDMCpPxGZp7a",
  "key9": "2sns4RfAkj2qxxzzQKULP76dZcpAwj8ixAU3cKxDeoF2ziBP191VVHxaSUG9VjjE5ihb471G53zWMroCXYADqKbJ",
  "key10": "2BNV65rbAqyAhGu9sjkBKKEChaqCTgagE1yPM2iZ1647Jbexa5ECP6YqGXJ9RgJobeqWmZtiUn3YxX5EBHPkhQT3",
  "key11": "tVmoVbUCjofBmWCC6WFqgwGCrRpLyGcYLqYhYyVteRgLv9CpaSetzCtSVYi1Rn5rkf5tQthaeVfch8RaE4ke62y",
  "key12": "2BHPqgxvmfo9qJZXbRidH1gzsaWLABcz9PrzSUavwf11SD64v62NQNErozVAWgMZBkJK7fdq4TWM52awVU47MDEa",
  "key13": "3mgMpLoKFjLXVJMGJC7Cu9QSUfuyFjUYVbd9tmnAyqVnMWQm3VXEXRcecbHkW557Po6QHngCi1vyt9WHaVFBTNXM",
  "key14": "2ZBJDBRfh3RL4TuybBMAcDofPK5YBtqBXUXki4kJPGGxEFPdMSeuuhYTUBuuFqwudqnoVaXm9pYSQ7AzUMp8nEUE",
  "key15": "4eBaUhELzqjXhhEnBTLJ6BVgXJ4trPGANiRSfNBFwegjufesBtp6KLxB2wg4biLQNmzry6Anj4VQDortNgqAmTpZ",
  "key16": "2bdtXpEMqwPT77QgrhtmYEegruD88R2WJ2URs6CJ83sEwuFLQVGNaGzbPgHnvBeSc6MXhdHmnYAxakh4hu3C6P9c",
  "key17": "4oHbaae42z6kkrLiP37VutfiPUG9VgFdHCsXZbxd94iJeF7Fo5wXnZNusxauQbUygdnGcqMCZbJsXSPMZ8cWP8j4",
  "key18": "2TfsnYvy3mdjNT1zQhUiEYGiRzLuowwPm8czh1ERforeUx8Cj7kSKS719jt6HhnK8z6hLkngntoqbbNQrVoBhdMR",
  "key19": "2YKV6D76MfC9cCeWA2Qeg2rEjJk4tXU1LhDc7LAD2eGdADjC4g4bqczGL7RyVCVokpqBvQDxYsTXzDM96or1SCzN",
  "key20": "2VNVd8FR3yPRaiBJCsn36kFadm34Asp4p3ZFqELahTSKor6VuBnBnPS6ti8ZzsUvYVesG9zvsRsRJMY2HUrxjjR9",
  "key21": "5rTGP8kTSGK1f1Nr86yjRmLppcYpKqhwWrXSQUYwbmL4TEU2Arm8MsVrnPySK8kkLYkMiviMt99JyQ8DAFxBr4Q",
  "key22": "2qYSTbPZwQ77PDmYgCYpxnVGdseXKntGxZWpAhj39CcN2kEV7Cmh9jULZGFWnLbiQbJwsnzw4HXS2CCJCckwjNZQ",
  "key23": "2Y16PAwcju6oNy3M4sjyo63TrH7DrXzAmahVqH8ten1L83zrumx2jesh1WF3jn1x5kmEZtdawu15SjHeNV9bVKGh",
  "key24": "3wpBCxGwYoQbTPk3t7AQy3sXpd7oB2eTjXk9BqwMgX7dMEpKFsR6XVeEaMwWDkiuDXehASLx8ZwfzwmS6RHtS461",
  "key25": "3vQwrH4aVKPU4dbWBsCqRjgxkWXoXufinaWNyCLw4DGsS9AkyU93emVG1Ho3ERrWaH2ebBGKQWJmZ3s8B16k6NYo",
  "key26": "2dbGQ4WHnon93xzkGrmbj1cgQLw23L259T6PN2WRqrSsFiVuSQN4PVbCoPLtLgVWKeFQN3AsdH8o3H2iH4Z5d85W",
  "key27": "4JS6PyN19aG5yfzynv3ThMMDy6tRZoDdy6tC9C7EsZB8syrbGpQiGvuPEzEgS54kQPjZ9dnFKgF1sRnQMhVnBTkV",
  "key28": "5CtXRicEetcBeAa5K488FPHwLBPzBQmPUhMEdoTEapVswZSYbZZ7t9XyCTuuukfYRZPNVZb5xZxrwZgVsPFsSRvU",
  "key29": "2jVzbM6cjM3Audejrv2LXQ9oD6zb225bDU8f43b8CLj8NxD1Zdjc3WTX2jTahaGViZfq9coH42LGm5TdLZGq3zy7",
  "key30": "44iqobPNZJ9ZkVWLSgsoAvJpKbaRpjaQPj1Fj4DkxiYKBsWcrMVBLMfyca2wrWEQHMeXvjwvcRfDDUcPYntgDFrT",
  "key31": "3GmrJ2ygbRfz76nqMtCJsQ4uWHFawWiJD8tTnjP8kPxDLDFjWUaKjeHn8zpHRWzi5hDH4HfiypyT1KVWAoY4FZ4m",
  "key32": "3cZ3Wv3yXSes1XkPYKCvSvD9DcgGxFwAeWNNspJp6jvs5sUyEJCj77quDLJ1vQdfVfZDxHRhiFYMYDp8ASjShp2E",
  "key33": "WBkFEgPPdfbpMyKKfZupUFKFkr74bjkrB1KxmpU7z24ZQQat7qRxdkauCHpj3TRz1haG5QWecMiGGq28ffqfRGJ",
  "key34": "3fUMAdw7MUis6uTfjr4S8EYWZ93RSkwkvQnK3QRhsPCEcuCWjp6H3gTgzxVzRq5DrGA9RQBkkJXKmTEGjRoU7gQE",
  "key35": "b8Mf7j7zntWzvapB1gujXqZxaR1cyVsdkTYmky8sh7zJYN2wQXmaEUyiyphFtZCPNJBPrUWBmqp9UrSZu1XdyYX"
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
