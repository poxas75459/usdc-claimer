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
    "4NnSaGrKhGLyCCZFmenJ5Tu9qUgooWsBLgtoRbRTqmqhDTRa419dVLzoPkynJfBYNkKKyiWbnmuUiG4oz9eFkLgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUrpcxrTnruANv7NJe8jjg2zAYWmg4SuLnhZAV8p6Aa5MNsa1HBvdK6JL7AqGHb6yvm61Bkwtjd5RC3pjhxNiyS",
  "key1": "5dbU3iwFcLwB2wwjfBZsNDdGgmN7Esr6Ky3gSqDdDZ5Byfv1kcNcVxj2xheMtaB3xw862EhUoWHRV38jmDS4d8Kc",
  "key2": "5cBEghPZ9rjNgLTYjS1PGSVab6u6jVBKTKK5iX6o9y2RRSi6LN9SW8Qn4wS9UxhmheGq5xoLSmpMZjNaiuxYPejA",
  "key3": "4GTqJwBBdhKgHWf9XC4EE2tDSBf2cnFFjCzoqo4Us19i1PrLNCaBbz4MzPvjhUoBx356S9rVUhf6Aqw9Lt2BJqhN",
  "key4": "2FJGKME9vNr93W2TPtjwPHjaXb8xmDuWFDHWVe9qFkYp2d6hsstJeLsomvTYsQzgg3rM7P6L5XcpjPEDww7gjxg4",
  "key5": "2XKDSx5SZwGZ1SsPmq7RZL3mGWCs9nsArE5vRGAx3Y1Lb88ckW8XecysTCiw5ACggs9CYUQ39re2dLN9MBieRs6r",
  "key6": "2XJbAQn8Q4R5PVE4LjUuwodKWyvTGya3kh7DYpBrwX83feRh2yjjQyk1HDo7PkWBeSTCs7KnQUfPBowwQytjZDtY",
  "key7": "4PHKt3ZsPuZ7mPfqTZU2FHhv5skXg2Vo4ij53JRNrzi8NsnNdzgCBmmQehZVjDUAPh91b7QgKogrcV6fxp3YEPzC",
  "key8": "sWCfyU6PSZY9tG7jdPDorJm11v7iHMvXszduQF3WGi1ffkjcHQ4TRYY35BGZvU7XwEedsqmspSj2191hyvjrXbt",
  "key9": "4pwrNc2sdQAFfoxSXwwCKo1wPTXvnUvxnpmLdAd7WY7huxgFQCL3rqScPFTD6cLhSG7dGtearsRuq9D2NdDEMsPm",
  "key10": "31D94pbPSvJKf8N77V4FDoxseSePeyUp1tn3XQzJyxMP5U2R4ncFeZcdj6DjBb2gZCAGGiYFGtNcWB9pvFiET6pD",
  "key11": "2oCAJkeeUNo6nXu6LnEVFJSqwFpgnF3Gy4zLuYMWNvLJP9tSbMqc2ocRwvk4h9DNH1PMTQN2KWBvK62dPVEUgmqN",
  "key12": "3NmeXPuFhzF5QpFy66XEMKFEs6KuDWjU6FWsX495TpH7V5X7jQy3Z4qqrFhuEX89fvt6f4xWS13MLBFbXxAbyCtM",
  "key13": "39tKEtUuLDBkJJzTnN24cxQ2mT2s5evrQ87tuFvt8WZ9ouUXNu2JPo6TLmwHqGbRwSXUj5feYRuiCHdJpRncSxZ3",
  "key14": "RuJaNiKRb9r4KJcAzwCTdEtG1sxNpYyfsAKZFm3t27WkA9aEWPZ8yFWQbLinGMkPMwavsigmrFUpgdTStH9f9Vc",
  "key15": "mQmPDsijuDScAQEdP7vm7jt51cUyoGUNvkwuEknduwfqT3ZjXimZSmzUHhZVn52ovcc98RDPnLRBZd7SvVJRYyD",
  "key16": "2V8GosCPLSzoPEMiH1G62NRsYykin5BDnVViJ2CS2m2omcsjoE3D7M59t8frGEmUFKaSTZRgTL1rLSQyD78jQDWB",
  "key17": "5c8VT5YaSe3NQ6sEryFyfs715KFq4R2Mpc3WXGkJ5qkL1rY7fjBLZ1gVtU6T5VxyJyTjdLAPTv8BTs3YJB1dsqCa",
  "key18": "2a3TM1ucS8cKMfr3hP2uHxdfjdi8wmzTrrHmpwcrX1Nu5VBeQcvdQ5gDsL4SLox4J6se6PXGDLSxj3CXS3Dqzddy",
  "key19": "3ikjnrae9Qrjhq8y7LRwogtEMAk3mTiv8oDXbAqsG8ndREijoXAdD9s9xLDhRB9w3jJEW8tycdn7ernxzHGHnuVw",
  "key20": "39Cqved5NhaH4DvkTV9yjLi5UDk5DV9XJQxtzrAwDXJtDDd8AY5rL7VnoeDkNqj1TpXCpDynE3G3ZZD9agsfJSbt",
  "key21": "3qB2BvSB79Hj3XyD2YhRcV8TbB27xTsxP7JA6v5VTD4JRBSnREKVu71DLL4SEAzK7fsK3WiqBgfDwRimZsJqfGo1",
  "key22": "v1pTjKtRcmT7FiUHVvuNs6dumKgPfHEtQMm1KsMbsCT6EJ7LtbU4RZcyeWP98oNtRs5wieG8RsYWwWGxuTbMChP",
  "key23": "3cZhp4BZAPVbSU4ye2NohcaSKbLZ3fmFtvqDDFqRURpNjovaG43FGsdfTjHsJYxJqPhJXUvGSRZqwuX7oJ3Rg5S",
  "key24": "2CBcUvoEr2wMeBPTHHs6r4DKYm2g9qzywxBRQBWTnibAf5UZfG5tbvNYsu5n2rLrapSZZnDVPxfE9qe2FezHR3Ty",
  "key25": "2hnE7igz8PqXZPKhnu3rmqEuFLkRNgKbWbPG9FaB7wBoUgDrYdn8DYCvJHdFNQnQ7VuCiySfmRjrys2fgKxL6FCS",
  "key26": "3XpspDnXXeC3jVMN6jGv1vwBcP3bpwQU1hGUiFe6A44geRp7ULqp2o7oqTMQQpoGbyaHmN3ab8LLQSx8gpLCCeq2",
  "key27": "5SZf8E6paMKrxurp4a7S3zZXppfkxB1maLHjRSnDi5XhZrev6hFWrabqoyr7ApBukYn1eVGoudGeyk22LM8P4YYb",
  "key28": "4A48BkXzwPZYPa3GJ54iipjJWkSBZByYRDiwkqZ3H8Pis4G9ubqrXXRRoWHxbqUpDfbEoRDS1qPBqBdDVCav1Y6w",
  "key29": "2UuQXiQnVxUxtzQPjE8Lb81tBz3a9TCELo7WtAu2haXhmLVTSnt6BjR464eaxotRzPrxRZiY1NQQRhAQ9bicx5vD",
  "key30": "2gv6nu5roibyo7iLuVbE66aeacwLferGEe5VgqiVCsEZA8nThVbXVwH6b5BtKyFJKmjge3Fzducis8hjXfN6Kpt9",
  "key31": "5N8tnipZS5iw8R4cAovgmbeTTxzAhPtPA3kxtjUVjTEzFrwwZKv9yCJiG4gzu3gYThCpwYNgAgRVNbpwjCGCRm7M",
  "key32": "2eJsziEvcELJW44YQhu5vxd7trR7S4ADwrgupJy3FTkkAeJvd6RXfaB5ANsUvqN8ktAfLqPQSQKzRJ3ZBweUKVff",
  "key33": "6Ux6kfhwG7WpgsfPtiBpv6LshER7aCapBpS7yVHFEonzUwwtcusLb7Zpohnc9cgtDZtguBjkQ67Trm8prxz9Hvj",
  "key34": "3p22f9hVBP9NxrmzUXFxGdvBQfthQXTSoGhc4wMm5v9yfb9trj1fxYhqUAcyu8FHcEGsPoy9ZC6bLAz4DwJHVrM3",
  "key35": "463LMX2HjzN2XmxPNVTEH6doWVVS74gUwq4KcxaEqEfQAHpo225xiDFsnqtCgaFCWyajY7qDA2kYjEnj4ZEfvZFg",
  "key36": "31pFDk5Ex4rd3aMnLnv2WB8XvkGbjT9gNnTACix6mRbJj1E72SzeDFUu3s5PZXTqcUPybPhkic7As4a8h3mnvBDX",
  "key37": "3xMPoceZBvCcCvzvp3V6krLMS4L3YS1Uf5AwXdFcJZp9CkcjjLsnH3fkcVajNEdE2SMDZxJtk18X3VLh1RnKtLg1",
  "key38": "2WJy29r8gFNmCse3MnzwKvsHbmu6MRMxXDYdUmSse54owVJjZFiRaSYzxCPCkWBMH7793kgoLhPYpXykefySYh1p",
  "key39": "P1wbdLq9WAPQSVmkWMFPCRWZ8j1hQ2PMBj2fESYJK4or4nQettJQLaLCBBqdasKSvmhJVS2wcwdCGPz5TWEMFZD",
  "key40": "4sb7B6358QDuhysW64PiWDu3teA5BTMgvCii9BB9DdTQxy7UM83FQNmmDuWVeHEpqQoyVq2A31JNsZFimQUoDbtB",
  "key41": "2uYnUSWzQMRHbR3er7MELEMryE7kxu1n2ERavDR1sPdm2bMPi8ciQmBV6WHbZKBRAieRBcsjTFNchbEsRSZXD6XA",
  "key42": "5RPcMVeYpb9X6fqRZjwZCWbtEASFwdbYQwjj7yM7x2y4TEvPUQmzEKwp6R1aZ6NGEbwaswvqC6z39qThCy8epSUt",
  "key43": "4GbreuSRpvB396PjSp2svhtuzcV2Gsr3V9RgZ5zFQs1rk6zasNjkYMsSCNNw9CLobuZ9CKDHXUzMoMCY4cZsWsb6",
  "key44": "4MqAh3qfVCHcdGmUZ4jvshg1YHXEVXTDPhbroR6ZoxAcNWAT9vSoekibPMPWMts82Hgi3qFUSVeEqKuGb8AT2cMw",
  "key45": "2wnzYDXowaYDpy5bqEzMDEGrpYQXQqFK3FHwW54s86Z7pt8Lvb4AX7FUGRR2NVxaouzRMJWV5C12pY1eaAduCw49",
  "key46": "fVuqzTGUkNqMz93aHdaDR3cYPBmGmft4V4zqkPoyh1hBw4rhsb6rBeV2pYAaNjCuZ3XfucAioFXGU2FTB5aCJtT",
  "key47": "EPD5YBNDMNWSxaPoWtk45ENFFZbrDTWfRLaAHRiVLfKD72svTgMnZvzvzodbifoDruSPdxjVcR4fTzTTbLyVtS5"
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
