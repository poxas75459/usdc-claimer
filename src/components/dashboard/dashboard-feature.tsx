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
    "5XNYSpUyf8iMoU2nYjBSxTSWwP4XFRa85p8fFJ85JbcMv9PwagdHZT3bbLtWf84YLNfJFHvXGnqBHezKUns3HgNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43b21suPscJ21sPGcRnPq5NP91bWPKnXPNwvswHA1ovxyXEzcbUdtCpRxWd2v2GP3edU54Ci5zdeMYub9ff9UvZi",
  "key1": "4TU5NJWRTwLzx7MnYPm1pz8HDtXWaeDiYjpb2qBVabAXGdShTK1SnC1VF8iukwGFwFAxTkeXZgVsjEuygqaEE99D",
  "key2": "2UDWzcnBkkFRNb8DpXbUFASV79euLkADF8Kgt7NSyyvwXBxSfFeLnVfcGVLvmjcPtyhptUJP9aPnjGKox3uJJZqm",
  "key3": "2apsr26QUzgS3SagHdsPBwiMCW614CEMDfwy6jKMw7uaHuWocfPscjUKnA23u9NhhbExT8itHEWE5U5PYv7ASqLt",
  "key4": "4osCAemjXdpfoNXrh4PvZx3Q8QFef6d2NUNctP64CsWJfL5G8aa5YUNRAvhzav5dg3DT83q6vLUqsdS1ZHa5zmLD",
  "key5": "3oSHSxWnSfLeSjd6fxHCeSWS6w1TaLSuG5jHunHueDKTWDmjm8wnKyXNAEbRbTWxwXqkUU7sWXsUQBMqEgiJYgUs",
  "key6": "27MKaK1taY1n1B42uUujysbaRNZYoUMjqfH2fum1595EvVLAB8ZvHeuzJ4AEayJJqPkVAz7NthxLDPaqTLLEDHyu",
  "key7": "5Y2v8i2mq4b9fXWCMrbKAsWhSxEX5SpssjamD7JcKYLXpXJo9Z8bM2dUdDhRBHwuwznvHGj4zf4mZDuwM4nDSYr",
  "key8": "4uzitJtsXJrEjecbXtjNfW7pVAHP914p3aG1dg1Kqn89jo4JcsTak7wcfa15aae7dzikJkgaV6dw4uv67poyWWqP",
  "key9": "4qDShcrBe8GUycyueMxF1AEQrfeL9DnuuLPY98FsJuhWeLUj679wCpqBn7QdtVv1aVidzcRej1yYwSVgNhhSCWEp",
  "key10": "3fCbDy9xfsBxQBjs83Bcq8BZmoYQBLE5uhoT1jSNhG7sRfJk34JZ6YZDG6YgR6Qg2aqJJMintbwgFZ22ufNbw6oy",
  "key11": "3UKHmPc9BEpVwoZbr7jsSbzwYjYKtJoJdw8nURH5o4EAAqNb9VQETRNHjQ679xj3keqcnMkhwxa4gsgGuMNHBzpM",
  "key12": "HjsRUbFXMaEbU3BcVrXjL9q4TkZS6C72sn8oQbEQrfTHXQam8NBWXBva3rwEnfRaEqZLvSgfBsmS42hmPsfj5b5",
  "key13": "5DqrV9QFgaaJ5uh5rBDdQv4h5kabDc7g19CWZ4rw8DG5bEjCXu7yZv6HP6MkfYM1srvu3XrTnVW7fkcFNe4c35TN",
  "key14": "xCSKzPPeW47J1mPXcAV7LidbYANAGGg4U8evtn2NtWgvvYwe1RVPp92LPaKqSDCEcZYZFGAdZtYYxAJ2HvQcaPX",
  "key15": "37umNLBawYyAY7krEDx8PcSsgPZFWHXkoZBxmaW9Ywm5qb4uJTKtWoFrc8uX1FP8b8qXCC2m8xWuh7jp2rj1qDSz",
  "key16": "38foNoZRQyWJUnYBLJwYeUzK5aaC9QBUMyddvUG3Gk7wstfy2FAprdpHiWiEW6YjZmiyPRE5Fy3TPUBe9yEqcysX",
  "key17": "2JQdw7L6Hqq3qLKwW9J6MDk2ZK3r2ThCd6k2jUP9Z6fqQbuo8wVfdvJBNy77bHwjupdmxLRy8F6hNTuTRfg6Roi2",
  "key18": "4NEiiKeyEs3g6nu9RCGJgGpMrgc7rVPZrUSSYqx1bns17f7yamxtVKjwDBdqjEUHd2irit3kjUSpFavFS2WPP5gt",
  "key19": "5ZoKu8esPcaUy3RrudixjBvdC392hKvrPeW5RKncajJCnvDBkDUrfytkwTtdxbx4DRDmrgMaWK1p21zMaXkxH1uW",
  "key20": "38D4w3aBGffBJHg4QQXAkQgPGykXf4i2FTnrRwUmzgjsXaXn7M5b5dnXv7Kzp6ZbcFGKDNUgiBPh2tBS2JFKkpyC",
  "key21": "2XrmCG5G5shax3Suq3qVw9RzEZHYdu4SAbfreJFvKE1QyvyYgj175hJCEgMPDJZomccELteRaMPtcNPHgCckeZLA",
  "key22": "2aNLSaZZuv5cwv8rHxmhwGnTcr4KCCvsSQZEsxKpziS13gRjT9E5PhBezusJhBJ2WP8MTCTwsof3YVHDyW9VfwtC",
  "key23": "4sdXbE7Y4QCGHLkEMnkB5AktpHAzGv2jQhyLJjLnLcCzyXknHuPShXGSv8CjYDhyuvbwvaeUNmDMDGa75YZk2qk2",
  "key24": "2viNB2kenDf3uzp9YQW4DYMLAAmDtYuErBu34uVy8N5jTZuV8QXuSQkGpZ8gnuPxFAEo1H2c8E1uTJVhouvyF5mA",
  "key25": "2Ca7S81d722Jpk1RPjtNEHTLBvq2Y9oq4vVUWFc3JMVxdzEYKAtPSxHG2tXo5ereA9EycPpcSZKdeUVi6qUXHsMr",
  "key26": "4gVhzCFZ57dohcVbXvP4c1ru5b4KazQHCN5UtvZhvAAHzwnGNFNs7Gitk3gwHcYWsqqNF87dgf8qVMWQMZDSsxus",
  "key27": "5Kue2MZ3xm4NDsLhMkUnWAjR6NypjEUsxJvUpaNAPzey6V4FBQPX2fnRWGjJDsLVYFoHj7uEiGxXEFfqFLkBuhSH",
  "key28": "4Ra4BF5HS4FJbLX6iZ66bAx5LDohdXtc3ebGYjR2w9cXughVT7GaqGRhebsF7eRcecZX4rvwTBSsVTvEDWo6fm9G",
  "key29": "4r7RQDxvkJrjN3icR4sqofo2ZVSNUkFaXorHvtj6BHUcergriEMSfe9iGZimuUhC3efg7LnLsfrikxrUkWzacvju",
  "key30": "5aK4eg2u6AAJtkeL5crbADR2ZYSNenAeV9aQkvzrtgrv3gD7GxJF5V2mTCHuyB9kWZLQWyDfQ7TDkPePp2KTk3dx",
  "key31": "45Pg6SjwsSRLyBdg45w99wQqvwjD5AnQPBDBzEyoLwcnMwEnZ8eYZMX1iiXvmNpbVpv2nNZpm3NucwzhnVUpTV4c",
  "key32": "eEVE2KAksn8EEsjuYr1MBomREkopSjQs9Qm1o7xYVfAc1YBAxPrDAu3mZMv92hYERcCpxkSpqCoAxUKfRZGVtQu",
  "key33": "2EegFiuLtUr1WpNB7QBMMiKknoWKfN31rD8Y7hcnXww9VVXf2b5N4eZ5PFUE6y1LifrZ1Y2V2Qy5PK4ThAHghuoH",
  "key34": "3pa79kb81MSAYJLtdCPvC7iCpwoapjKtxaPLiqs5w93DcJPY152QfKRpL2QX2TtNmref6GrU1TBwuQCVWLbX7F3U",
  "key35": "2eHNjHnPUwbJz1Txf6qPjboEQARfCAVx48YPrexscAbTQGm2EnwXRC4g9cNTvpUb2pSb8hzEkvbkqnBN9HkM9Eyk",
  "key36": "65Tcbwx3vKJHHpGQBN1hBL4Reb7qpvecgwgXM8dHbY6iATCoLzFzLuJGnjohU2vQBB19z1zXdCRg5cG1ob18McXm",
  "key37": "4FYhUM1Ad6PCCmyuc6H9waNctS2dHnKR2dQRAuqL5H8F8yWgaJkgfuD2Xacs9QcudxMXuvbM337dYmrBak4UAEEx",
  "key38": "2MR2r6oTMdZfSzLXqkmFdRMchK6snsRHw7mAAbnDVF3CLM7zs2WxYB11JAbB2TxzjSw35EiSuG2dwJxFPt3fnK5p",
  "key39": "4gACTWnPENxUhor68TJeTriSDEtHFBTS7TsSiSMrVD5p6d4y9UURDDaPWTGAbXPaeMtBLgaY1BiuQAeUBjRHrezA",
  "key40": "4YY2XuYkLspYPDynrzMnyN6JV1aitWYGqnUbsRHNgzjNK9jks6DsuiuDZ7UWbvq8kwNahgW9F5QWUosFfvE4nsMX",
  "key41": "39ATA5C8ZxcG1k9F1r45YjqgDcsuShPM2pwdwTDTkgWpdbiauARpEX7rptxdR42fVDmmYNDB8xgFAUUUvwiLagCw",
  "key42": "5SAR9MexvvUDpdK8bosdMtuGQXEY71tX6WcLMqGoPkm9RueAJzHY6jTrxDkrv2jN1jfKpvvJLJaFM1TsrG4eN5de",
  "key43": "4xY3nNSb6QLdW5qtZpK9HbxcCEtXHAfkX85wsje41zLTQ3qhZUDD74Hm9cvWNXatAjiKsVFABeyQGjZ6EzkrRZU3",
  "key44": "4RchLsVrZrimzRHBoGoPK4dnaa1vpUaQ6BQT53BTMWGoy2LLUg9fDNTFkL1vdry3Exki1p3w6VBt9P5gwaaqmcL2",
  "key45": "5PecC5CqLnbBFtQj2vAjiNCGBFg44KJ9nCbk5xrom6oAKGwentE5oKgYS1np4cbCJWE6kd3Gn66HWFf4kfE3KV7v"
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
