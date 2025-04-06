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
    "5BHUTm5qwrgx1aAP5cQdTsPCwSyv5gQw9gNH4jYfsF418nH5KwYZXDSzsJ18PR1fXSYhbgLYzwjZLariphZETMu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qTzAvXjmEVGP4EGUDrGnL7c1P1imiKcuKYrX7F8t4zL4bEoF7BcqqeeE3YUNHcAscgqVUXN9PF4CEiAXi8rmBd",
  "key1": "2FR9uj5aHefySQXFZnZ4B7ZBXmwfmRHQhm14ycYVguDjWVxx2NuVBuQaVZZXUqtKBZR1XCcHrevTM6Sz6dT3U3WC",
  "key2": "4Jb1UYQvPkGSCAvYt1W8MRdNc9wScH19HEo1sfsGq6nC2vckD3A6TiBtrAJ2rTaALuL3Mye8Ty6m1qondtiQbFUq",
  "key3": "41CwYEKyU3oLwia3hrvUfm4QocrPSyKQx8skMHWKCguvWXvVPSEwRxPFxkUhx6SV3rfVW6bXFz6c1bqdCuujcqGn",
  "key4": "VCqs91Gg6VJn3ZKB5oPaVqQJ6EKMxNvisXFhm4gBg1cZnTWAtoDeDQqcNQcoc4Req1qVokSJvu3Jx6cxj4bhrVe",
  "key5": "3dR7NY2Dn5hhMg4DKniSDpbon1km8UuEmNTzSG7SYfFoSELTqqpYPaQHNbytgaFQnQT3hQ4yRwG5sB3oM1p71SSr",
  "key6": "3B9aW4siQPmt88PfcRZk4APshMnrrX7qx6n6mrzfzUXsmf4E8y6MoiLsofLdnKgnoAbZ1LwA9V1nTw5KEZhRnp9e",
  "key7": "5TdYL1Qsjgkzj4JnM8MzQuyYTPFyBsGW398juhJPFjCMXHTCX66KPoR6a5RopsC8x8wzGERRV5uZG7v1bWM4ph1R",
  "key8": "61HMvuP6weoeo2qJsosLw3EENLtoB2ns8wPvsZBA3F759Mt2AdXNLhszXEaT5mPrsXSz4CDs4WLmhdFF9R5M8THH",
  "key9": "5YJnaW6tJhnfjrVvJM9eaXDJLmmYUxuBDaSn4Reh54qJ5bEswUzhXV5UJsbwD1pkqwuP4p8LKaBvjgE71TBcBNVA",
  "key10": "5dxbvyLNoXa7owZVVAy83yFyDerxWe7gQVRS7J4tprFtupcD6SzmokZ9SG9GGsjnqkHsuDy4qv3Cd6kivktk3sbo",
  "key11": "4AB7N5c1TDDSeMxZPCi7QK6LzVdj1jzaxQHuL178dPsFmFu2V811CR7gDceeeuEiEyGiLVKoD2VtNi51v42a3kLm",
  "key12": "4K1mKh4Ui7eSaZ7xWK2vGKZ7uhMsWK97RLdZHHNwDuvGfkmQ18ijoKpCv2Cd7PpmV6TReY5kFKppxdS9jnFvpyKw",
  "key13": "4EJR8iwHcSHGfgxpsiJb5dmgySRtMb87upWKUMqHD4gyg6s7Y4hH95z3DbU4suX3wqMGAagAmSA6eM6Vr6raNuJc",
  "key14": "3XdJDL47L2JRY6b3WB4fNMeRVKuLovkKtmFDESBfBvgcU6J1wTJwik1L9XviWWyZ3LnVZo8EPkcEPixVyh86gXTh",
  "key15": "5C3SkeMXUVnE3k9QWTCDgLAjcsuzqaN7sLcH1em4uLgJPjnTxiTjPsVsEnHE9do9R2hCuk8erJo8rMS8LczewZqc",
  "key16": "4ZT62wvXBYjgZBLHzffNAoVxijCMqEp7u6yo9pCc8JDFGu2Bfrd3sMx5pxDA5ny8yi9BovJcS9H5nRp6KJhD7Utw",
  "key17": "36uADVymz52vrXRXxjjS6YoZVeQkVbj9tXL3UcR9qpH9dFxt1Xa6byDmsqFFLyDEMdmy2W2F46ee7q5ePgx4YpxJ",
  "key18": "5yTSGX66c9S3hz4DF2Eyxy5mxKYkZ1rJKkWL5WoCK82ToMzW1SL87iFqxC9eYzcATNA8xtzht9Fb73fQfMt2Bz3B",
  "key19": "59ud6C9K9YHbwttfwTZMwTNgBdD3DT6vUBcUL3zxLfTf1XKKSRgHS5Y333MMf9tE72aHziGBWE4zFtxx4SzV42Ei",
  "key20": "5P6g2A3J9SJa8YCbwq8MkNnaaEL3wzR7RbRUs7ZgTkGnXUk5wuRfWUTf61rBkzsCQ4WbxosKFnMrJkZXCuWZQfHE",
  "key21": "5B6reJcRd2f2NUEvE8YwF9FpYfpMgihjhQvX2HZKeUMgLfhEU4vikdAGhxyf4VTnHgoQM7UNo7Q5fqpPZRFcqRRV",
  "key22": "3SZ8VD6qARrt6PQtVCTnSFtXcno1io9twGpiv8mNnjj2SXBFCiejQf7FSY5tq7oJnEXghPPRTUHq5qigLDdZ3WNo",
  "key23": "CxbJaSw2MDbtDBGQcpPtXngbgQAp3djr5UeRHfQi5pEa8d4yiSCgN58k8wnhRkLshy1uWxQH8QrgGxenz2SmDCx",
  "key24": "PWSQrdXmUDxV414hLyh7v1cUpA9Hc2FWLynX9vgo5q3nNA4oeDTyiGrCqXKRn8trrJgEBT6EtzogCCokrV46CbF",
  "key25": "43M2wpFbqB26amDeqcaAhS8EhdehbSE5JURWAae9TLq96g34oFt56UgqiyLLFKu9KSssT8yCnXhhd7ggj6SYDtcA",
  "key26": "2L2ViYMqBWKjsigqRZiMMbNKCVi2p7gTegmLUeMLMZq3PXDYjrLbUDev5zN8sWs3Lx38h5XJuY7FSG3zMTYZ62Hy",
  "key27": "2u8ZC6dC6Wghqyn9htCDfQG2JqpbzMdMJjP7Q5EshMNg5ay6AMgDJFmpRiokEVvKruX3UhPim5HWdmnR1DVEH6Cq",
  "key28": "3HTHKaS57vDJqE6XfomiL7sHbn4KoPH2PQnosMnwaLKJjW1UwLgPLiwxReFipp5DoYfFCLzDbdG181BfYp1enE2Z",
  "key29": "oqnbMet2aCMCDWCrPgmamgGvSM2goK6p2f55MGS5N94F7456V8ApvBZutpfezb2MSifj5Ap3FVuKWrchcN6U6nq",
  "key30": "28zKKbe3B8hCJMGiTSM7EmqU7Sy4Bf3hK3qvpEqhmLQBLBTLABcP14d6b38VkrTkSgvrmRewPX7gkERTFXc5dfAh",
  "key31": "2Kby5zac6gKfUycTqW8uTVPVCqVybafq3HBXnQw52DKHpUnFMAQHyrwAnYVzYCWoKsCkfArk3y9wogP63dxt5Pj7",
  "key32": "1dxMAEWs6YyFFmusTxQX5T7YkBjhFg9PaPYZDsoSCkzcDNvgaDDJeWfqtq9rfCteh3MhVmV1ssPzceHDkUpkktX",
  "key33": "T3tbSJCzVFYWDoxMHokaMVvsXNyMZ46vXcsE8pNAkjrMK8SXBYaV3JMTQLBWSWTXZpL3dnXDE4FBpT7zmiigmz8",
  "key34": "4LQAzrnYGV7YESeFaTwzCrDeMyCTqBkAZDwGhEumc8EATAPFAGHeiNFcBqL4fYiUFPNDApah9EcxLQ3n84iQBrCX",
  "key35": "2NAmoQzfB6r5QquPacrR58XDYfFWnA5tnRJhmWzHBNWwkyX2CXK5jJrdo4gMWZMkQbkZFUKQ3dcz4Pw8dnc2jCGb",
  "key36": "5RUxCLaUstVMx5tmtsjgBbMksx66S4BmjBHXsTbt5VqBVMDyXkzQE7E5GCGDZGCqSv23wF7tToPP9gv6uRoxgzjK",
  "key37": "3QatE1qfWTU5U1PEhRpm5riVCjovW7irM3uorpjQHZFTQrwXDcFwDZ4A1rSULK9866NmnnSHQbqvvLaeSWVNpbKD",
  "key38": "5H5SQmPoQLqrq5xqJMee3aGoXpND3EKpe2L6apC1Z2v6yLvcRDXSbyDZsbNtg9aN9jMJvacd8gBhtHs4WeDDQkBF",
  "key39": "2G9kkK4HJBVnR93SBoySenRL6W8n5ZYXHg4U5pJhT1BgADcttwiGwaTdr9SXutpNRozuCAQDCrenL4JRiAezX6QF",
  "key40": "25fdTrnBmjMNPRac5XSVj3NgXHcZC3f745nMsDYjtjRbR6zmBEqY12YhSZmMmC6o3sN7VMxtGDoG5JGGuzVvTvQF",
  "key41": "37uk31ff6XQBewKPZs9Buw6CQJupYfUMvSsdJFgordxJGQ9CKdCiUMzZjb3mQPFG2YTFHYbFhpbdPkkefccptM6H",
  "key42": "5btEtEA29yYzD9kQJt38LqXnkyKpXuDhkcYpq2wtJNiMhXmAkD76HNekXzfWvFyaTyGDaTKtnU6ZajNhc6vyvMQ3",
  "key43": "5MxnFP2oFV8ZZt68DcX6oEw3o9UMRtc9fMwdxyPGjzyFXdYs1goA4SYyPraN2W8t7WGtd39JCpGTPfTfBJKKAx7j",
  "key44": "3R3Au66KrTG7WGQw3tXtDugA9aGXAFmNFykw65jmQmEXSHUTuhRgBTNrmUewwGA4oLmthypiTS2FXAQrWgWntvQT",
  "key45": "5BEc4J5uDyPfAtd874dgGpvRHMJdr9r6T1LecgV68HePaFK48TDfDvvTo4MPoSUrMdMgJz2YNB7gkLG1g3D9wYDr",
  "key46": "3jhJ2GbsmxLN7UrV8D9fiwjcVtRaU7A9QJVPBNfQCvEdjHV3XqUHmnUiNmNnX6EQ113FYJW8oRYDrFxagJaVYT75",
  "key47": "2LdxBfQiRbZEanB974J6TELiqypyP5jDYrUDsnWd6YNSfoU4dmRRSpUT7TRJKezP4u65djcxyLYnybEC1pGD8RfL"
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
