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
    "Ka5CWSQjAUvSPAEsh6Ty4aFPXsvAFQdhABe8KqYarmgwVnr1LDsR5NoLxupC6aMSZuX4Dampy8DoY5Ptj46Qz3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i44ZcVg4vWAHWUQ8nDW7JYvonTr9mab27EHgzX4wLdoCBYBqfxNYHXAYTUKMJQJuxwFgyGwrYdFfNiwvC3K9aCm",
  "key1": "3jFSFTGWUxgoqDH8deTnRzg8po7gcuHngB4Lwkk7fNTYAwxYyvfUcfTyXv1YEW4DvipgSaqj3coFfrCiBMz9fBdq",
  "key2": "3PzGjVG8vQqyBPbN5N8FsRKfUpYisSzztsfeDdH1ma7JHC7Zj2GMgjEdezSMNy4pqWYF9EuUmLSZrxAu5qwMvDv4",
  "key3": "3pTNXE9bamvjGvvZ4Jyj4k6RVRWq6dHZawSPcPaSxyzUhzCsJ5VxifTP34jUC378LPVTrkLyvpKydgNWAeLyfaSX",
  "key4": "42XNnzrmnZ3xFPk46v6BP6vdc9MSQPgwyf3EMyHZ1HQ1azSckrF21w8q1ukm96ATpvb7QeYdtjGZse9bnwGiYnxm",
  "key5": "36Fdr7fZBXaWtfXQ56X1Jqk4DLtSux8pAnS7EuxYh6DEHzCeZC594aXhoU8wfLzUCW9o4e7kHoUq3VHS8jigtYwX",
  "key6": "taUdGcFpPJkTUr7dFNMBT7j2ELVVDZuomowYUUCL5WNLfj4RFumyYXeogsqyqq6cT71sHfNLudibq9HWb7joSFT",
  "key7": "4zdX2XTgU2Fb844Mtp5y6ktcYnxnoReGq4ivKX2qinUv9YGBiyFvm2tWSBZqQwLVbHt7NgWNQvzB8cPumF6FVCvd",
  "key8": "3UAMqEdor6mBKYY1dGJYhtKPuFKJ4AcTmzexQmZDWjiFH5dNLmhvHAKt9tgVaCPKF7BwrtWG2umsp7ii6psEptue",
  "key9": "5sqHQJQwDm2aCBFtkzbKmUSb9rYMv7awrxnyvMfWJCiesy6hGfxsDfpVkZsaVBuuD8Nm88YPtAhZuQLuUsri1q9p",
  "key10": "5EpHnN3Rrnk6Ji9M5cv1o6UmMDoPQ8G1oXP2VsdQM73eqosGd64YBwLjMGjtLV4GnW1VF5VR4Nmq2edXwZwtTcfL",
  "key11": "3Cwh1bprc8wPBhBBWD7ciLeu2QiNEMYCU7ABWTbeHUs1XLFTy9F1vPCfCrAKoAQsEE6Ug3tJr92E3Y52CN1NciZc",
  "key12": "3dg6wuh4hNbFDf922J4dBjFMdknEv8VTQLDV3bZRvvfcZFry6zfsoaWkHx3okEWhYyhN9FVvCTR5jiX5qejRHrjT",
  "key13": "2To1Z8TSqeubYSoJnAQiphF11Tyinuoc1FVD2g4Knz3QnFxh1AJS2jX5D57gdQNBJq9XJ8APQT4ZH4A3rZB3BjVS",
  "key14": "kcphzxANqdznZvb1NjsxoiLgG5ncFbtPGxj9tYYjnUPUWqg89GeNQaZwrwGY8DRKk8J1GyzbNxDUAsm9v14kFkE",
  "key15": "2qZwu1WjthH3tURM33QYb734DBjydpEnHsXALu5AzVS5zuSkoW6aX17vDprNRPjS13LQ1i6eVdFNRVBFALEUehZv",
  "key16": "47N2jq7MNvyPcpkPTEMV7KfkPZG7DYs7FCUtNiYjZwUNMXNz1tGH2m6dGtG7PAJ5R4Hsmqy7ag4QvrEiUtEWTnJj",
  "key17": "2D5K3xYVnqmraTjiihTRdLTHsFnFxfbhSA8TQFRXuteoWTKCYCqx3bXaziR32HXTLYyZvfwXiPyiwuRoApQDFEfb",
  "key18": "vA2w6HuyWGkidqioZGprRcViZsJdhQFmWr1m1Uz2WCCwZ1d73JJ8qoRCuDYceUwWA4yzjaoXR7csTSn6xHLLa6x",
  "key19": "FqdGfWdLhukCrgpUkDgWrenZUbE1KM98X2oeuNdQ9gqQJe1sa4hL3VMyvvuq5EcBy12s3MknrQFH8nx7FWkz8Ns",
  "key20": "4T6SAqksb5Y93YXzzL6BJhQzjackN3xJUumBNjcT5U7SqtfjfvPDNLp1XA1uHKDUtcVjodTNLpX6Wm1kNo4W9RRA",
  "key21": "3csiu8bF4YS4BX9vkrFjkTdZLK51yqw8imwPSp67nJNyGLxcz9197hrqPLM43SeUgXQgDjKRCv8wmyy1nMd9uYZk",
  "key22": "4LY21enGSBt357WbTRULX4gBELA2aJFtiVaVDopHEGtvqUTEQxnL1MrzDgTwduDBY4VvSeggdXipGtjospYbxvim",
  "key23": "2kCwZCByqLXqPb4rLeke4ugy6YqiCD1MeqGYbTA3D2LFZfxVTWAKUeAwYoSaeRTYHLM48sWcX1x4grq4WBT8ciRg",
  "key24": "4k6BzjV4vBVq6eEbJe9gib1q8WTrMz7DLFAqWWRtqdjX8M3eq3cnXNj2DtG4f4znzfHtLrVhco5p39m8g4UWJ2qU",
  "key25": "gycqvTKq24v8riQzfRvJAkYxz1yNZYCf5FHjyv3bAcfnG8GkrNLSMqXj9b87XhEQ1srjh3XmcEMk4x2uQn7Rbqe",
  "key26": "2bdzUQ1wmMY19MRuhBEXDovcwZp1v7HpSHWjbzCok83R413WvTkmmYPrNWB6EE5Loj6Z3BmfXxGqGHQrhAZiF9EX",
  "key27": "21JCZ9Wffiut8eqJww9ZKaaSTN5sdPh7zGJoKu6ktyRh4GmjEmNRCzKwyBtHPEYxVVqiBb1PfCaiP91XjPx4MDPu",
  "key28": "5NaPkRs4SWosqr8KMgZQqa7P1g9VYaaS5d2ZDkWN9xwY5vSeUZDsoVyVxdsxsnGUZ1oU2xMpiR4wdNFA8Fg63Bq6",
  "key29": "cy9xeAadosPuk2MchhmcZtRzKrKBR5886QFMzbLbiubQ5KNfSYirPkRcvMstJbBpYa2X4DjxfMd3Xohj1ndsZoZ",
  "key30": "3NVPvkySPQTofVwQ3ewasZjtPNke5vNLwtTqBBRETZPX5pMUpsWByEbxbPynjXnY5B22VXAoNvLFoskkRmaLaEZP",
  "key31": "3DJRpswmcQaf4W7L6y5Y49AcnqQfZkLH3hLHJudzaic1dhGt7CU3j8Nsje8qBip1uqDfmuAJP5R6cvG1YjYqvrv6",
  "key32": "5DUycddnFH1B36i1EqVTStssVr9yNwCEpXd71tafd9AyTE3oUkULvmE2Dk78Y7J9YCQBeDex1y2y4xMxceMk4tXH",
  "key33": "2vXiSzSdR4TZte7DV9gtXtswQgJhoypFcmRB9xkrLe5VHrK8S59BT4HU4bZka65MYtxzjfPBVfJTiEzY52hv7VEo",
  "key34": "5ZGUivv6mNnXcm5vfbHHdTAhFZkvt7qe6Qx5WdwE6L9zEABKW9QVwYEoZb9DYdGFkN31rf6vWsZHkeuvQCWAXL4V",
  "key35": "5uNuJwMjQKhQqcKD9pW7mE5JCujm7iM6E9ygZqc55rKwSFhmeAMDJQvDyPmUonUHCW7gZEwxTFpWeXLxZkrRQNSf",
  "key36": "4VMypXh25pxGSrkKCqXcf661phJxFhb3aDz8kbWQXS51cgZA2NzZxx21kF4KYUbenTUHRct2FqcyvQuG3xNUhuH8",
  "key37": "4AdXeBujZcFJ1AzsvLsvapdDgkWXNkYZp9GC34w9hySbjzB7L9No3u5Hjh8onZBnvJaddjUdMR7DkAgLKNfQSrcQ",
  "key38": "2SxfuFxEXesJYcyZsUb9xcdbBosVx6AG5hLPRrkt5VkwHNBrvKd3RJFAweixRzkrVYBbtWTyvWstQccrwfqXpK2n",
  "key39": "5gLb15xJS5WJD5awgE256bKFVv8KFyeTa7A18Nv4CFCEgDVCFGsrzQzgWA1GTuvGmw9KnygVgJExfKwTwQg7hm1M",
  "key40": "26Ma76mVbUHv8UuSd11cuzdcaS556brmzvDZ5MF1yUSjc9QypVPr3uc6SUNPQduR1Ha58d5A1Z8ViJragxUJvnmB",
  "key41": "2tVbpPSjKAiGoRprqkNf5a8mz6y3fakXASnNrxZY3xnuQXFiNpNCJCGHB8pomzFY9xoJeoV2BUpfeGZCwBpmJe87",
  "key42": "KiWqiVjUiGdU4MME9BimvzYw6GZjkgC993qHthByR4uJwSr4h8NNmraNgfM9LTcutpNkdykgZnyij6udYKywwzb"
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
