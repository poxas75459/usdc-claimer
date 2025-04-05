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
    "41pixKzBokwwSWDYxGBVP1umssvpesqeuv5PoHrjsbzEy7KGzmh983TiTtXGm7jxEh4xxurwL7aSabRAGZJAkw4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTqQ5XX72tYfLZJEXHH9esD1A2JaDMQiriCyihYzZeEPW5rLRyZX4u5Ythm6WxXqsJoegfSDgAY9AWSswhxFpCV",
  "key1": "2qmrJrbhU6t5R3SzbCHqkrXL88nzLo4SaagLWtoxTS8AGrJ5fJZmoZCsjpPWuYEmnPy31EMYv839obAzgCSzwDSm",
  "key2": "q7eyr81ib4zvtgG8Y5H5XQHimhKT8kZSveXVtJdBwWwKiWtwLThJbFiU82jzN1yWwQxKCJeXddYQFK7KeAsBcwQ",
  "key3": "2uGmUhgPETFxaVCZwUU8VJ9363nu1Bo7V213FNBuwgP44fqngpXRh6kNjV42t9ftJxakWHS7hYDfFUJeapdhg5xH",
  "key4": "NvjkXUJ3C4zdBQBwMNmHW3P4PnCBmW93L5zg62AuxncA4gXVfkpCgEx3ctf4hH3G4gPASo9EinnCGFVHA1Uca9q",
  "key5": "21V6Qy6b55Km9jprte41kPaSDtsfEAq63YHTazRVtoHJ4VAy29Q3B6bHMmXKUnS2F8epn8YTp1dEZW6Lpzzf9rRF",
  "key6": "h6Z5tXgkhFvVVqDX3AagGtLJjSmRXafFjgRb3vJvHPvDTSy69SgKfucd21Yeor8RUdGSXvunn9JPvcQYqg6HRnC",
  "key7": "rrw9TToLPQWrmR5cuLTRRmnM6nfDjaTXQmior32myCuLQWPDa2YVmrF1Y4yWfX9vdRAyY57pXqoNMqbNxgNXgQf",
  "key8": "22UEjLanEGbWVdmojmBdhJQgmzwaVveZp63LbSPx4KAazpZux3Sd9JyRQ8bCmhCdhix45MQUFHik59nnM41t2z7L",
  "key9": "47pdJ1cqsUoxd5hzBWJE8ijnB76S1pfnTLiM6jPvzzaCdvGWg1jPghDAiYqmNhzYX96hRfC1k4s8e1v1Arr6Ud8b",
  "key10": "5rS8krQmHjkShp9mJghzkhELoLS6MKjXTVHVxZZwBJsvR3ocfHAPexEjWVVErSas9gGv4PcUQbcJEw9jzMXakoQV",
  "key11": "2rGR9b6gZTTcazwqFPmj3pmse7PpGzEzjwVj7Zj6VJjm8ThTGi71GHubc9rsGJEkHxEgztzmU2n67UeZyAf3ukYQ",
  "key12": "2N5fz4m9Y12A5hwdqubCua2MAspd9EhWSgGT2khUkPbvdgm4jAZxLmXgs7XxLJx4JS7dtk8DoT4yr15p6vVH7FaX",
  "key13": "2QYN2SD8iRs6kvcGByoM6R8yjZ4Fc4WnYpWd8RZJgVZvShxv2Bx8iHVWUZuRK5Z1vZUpX4XAURKhuH5WqzgPovhJ",
  "key14": "wvT1QpSPRRifehdt8riVYPew7BNfmgp3mEzL3zZCEKJGvnXvjhysKfwKuT3KuhGLejbPjMys7rSKpmbC2e6j3sG",
  "key15": "2MgxgexvAazjDmsrWhJySGxqBEdRhozsDXehzRC4EJvRBEc2tPdkVL2aAQB5WcFmJCaNHENNzc754bwzeiNWgGye",
  "key16": "64qpYdsRcsEZ7cHAzFHvQbfBsKx4WBpAqSqjmUGxj4RVuXAu4SVzksvGgw5da8jmyZPFBP39x2vXaJh36KrLQ2Js",
  "key17": "qXTchdrtPkM2Z6dMEFENa4TAGesPaQMoAzxe7HRTzNZMdXBPpqwKbUW2ALGj7uzmzZpSTuoHyVkL1sKWtLVgYht",
  "key18": "4XwuWz5agVBttZvVt5t3Ld3eCyUrYxH9HHuy2Js3SiAqSfKBeVVuBuSjqsFgL2VvgUHSC5ttndW6vrb3E3YKaVQg",
  "key19": "5VHESoqbCQkqpzpe9RE2VGk832EVAqHC7ToQbcqzSmTWFpndnkJbhV22g59WHHQ77Yb49BUEPzi2ujzBzrUSSgNy",
  "key20": "DDgHRB9ttGYJLdurxUUrqYN8terddSyfQRWduJ9DJWnBLwwpNmcUvRm46Yw6xqDegrjA2Zw2womrUud9k1hD2y2",
  "key21": "2UFVxvBvWRCnbY9XcpYAGGjANFcSStnF9Hm62mfqbXSsCtXEyKNH41qWngWYs7QTranCnco5Ww1sMixqSyvNfVDL",
  "key22": "2SyN6J7VfCPUfUvBHtbvNN52bpcjw48TyVKsBKU3TEE5bxF692RQP3zoh6cjFXEcCPNNKFCeD7yTkMBmMuhewJZo",
  "key23": "3M2FpEfTZau49n9Yhexj87V9oNURGuVkdzdnDiwiCx8jNcurzZMb54dZc3GtbEZgww6cZa9rEtkDf9YYsrfDJegk",
  "key24": "2aiZseeQiMpFdYmsCTXqK9FTtYkwpw5av64g4x7pacJ8vMhuW2qTn1vSssHKN8LYPNavTvgpPuz9BuRD2CqMDJfe",
  "key25": "2EsJ2mY8AoDYb1dPxHPRcCdNSdwuHkubeJmwTGtcnFaCjXr1d5Gz2KZaCPY3522Le7YZyBaqwPW6xJGopfWEhePV",
  "key26": "5uuABPoK7L3wpw6mLJHozA3pTDzESPwNDLS1Wj38qr1F8ynXKYoeYUJHvi1sjoaXhYVRmCvRrkBHALK9ScwXSrkv",
  "key27": "5jKojoqiMGqZgGWEHkZfgrtP1qAuhRXCba1hBzyQ5VauUq5CSjbNwEj7fxHye6qJJ42VQLC7PZbYpEcQSFrsU47p",
  "key28": "5BNSgF3FjL62f1k3zKxfZK9Q7pwbxidg5RD71YepjWt6McGHhLizyEqm3fQCGuGHHoUXXxz8Beo7GbNvQ9gJAoQj",
  "key29": "38iKsSqP3UUHoRSb2xeFbMPLf3QerVPyqxFgS9ymDv9ZgRdMdNbAJXhwYah8ErHmiwJQaw5gAcTHPnUai9VGmvQ1",
  "key30": "4yUSSXaXDSFayfVMn3RHW3x1gpvjvb5VSuVG8qUUmm2SGifKetVnGjkYYoPgUkjritMKsENiXnPbgYbhGmFDcGC9",
  "key31": "5g8MCDg4ZMQQ9PUqozpw2b7Yznxw9tB8Q9NQffrjV5uEh1qRptp1NXmGYWQMuuFYZfeUYS6G86BNLayK9bATjyYM",
  "key32": "31T1WJRv3AkPR9h7dpDx3eiAdw1PmeSL9q4uLYcWZeM7oW4cf2CengMEJieUFhVV4qLLhQq5Mo5NrBy1mXncTcD8",
  "key33": "5USY3JG5u4i2rzTP2Xs7dKjAjMHHdJqu3FwcJXf58QgrJAQQq8fRP4m4HX9vgV4zH9T7VfDfdwekf4vVqiwhmXEQ",
  "key34": "3SLHRz75wqmYN7fKTWN69WCdL3GcshEmEVMDieeT54NxxjZpRMDboR4P6tNAivhZSocUhEH7KgxJFYv3wvRBeYAp",
  "key35": "26b46APR6t6q9XrKUeRu2mGWn4mT6MjCQMyJLoVF722amP2VezCCUh3i2PvbyfTsrJXMTM3J3ag1QwMjYTfu3AWp",
  "key36": "YGQYDoyaSJwMwGmhVMYXP2C45xTNkoAyRCgma7M15L3jCV84bHf5aNxKEKFVd57j5es5nA5B57f6UyQbTARfyVn",
  "key37": "2FoVTHy16izRUmqF3sYJAEdvQhbHaYXc6cGZHU1LRtznueTQ4viHUSJG7N4QdyHwmEXrQabRr2WzZcG7HVEVdsnJ",
  "key38": "2fMMH7nSbc2TawAi2QyHxbDuyBknZ2AfqmfJWtafchGaZmQVdiHW7frTcrZvRvJ8jvAfF3DGxPkuGgHCdMSM9MJg",
  "key39": "62poNiRca7Y3ttJvVtpP1mGp2YeVZqu1EP8YhdNcHdAEgJA9LMrtYHTkgkZm1a9XChXHSHh6o7H2pD55ZrkAhYPu",
  "key40": "AuKn4WMtcYwCvYmPMnBajuH7WRztx2rMjCDkDW5ZB2BXnHDa92h8mp3KLnFPdiamQdgJNHnU7XkWJR4qzR6LTNu",
  "key41": "2D6zLfCwiKNEoua8e2F6oKdHjDA3vCzfsGEh7EcKaykgdNSxtzYmTR4m7WMEw6CDyqaorfPEKUJ251jqPh2FEsNX",
  "key42": "3D9bATLw1vGC4HNAS6CD5Busf4XgPhbRHvHntPNMECUF3JHNkZPHPGgEQnMReNDcjUC2jvFt8P7pM94mWnENiL6R",
  "key43": "2Gg4zgCL6GAjiarZDNntmX4HhowuCZxPfR7RG3kYyFLMGRfPr6yhdYrnj42j5mcmBASU6j8Xv7gaSP7WBiDBDqst",
  "key44": "3retwQVVxS5YYPm7mRS9bayWhf18R2hAxVRYVE7ganW9yy6vLfu7syfuJKBCZoiT6DGJJ3fSQKLtx7vAcRR2miZR",
  "key45": "5MLSHje9wYzk8U9RU4kBh598qESMJBRioawAUg17q29Fz6u1RZQh9aKqFFmBMfvR7pwtkWJ8MyaE6BeM6ReJGUgb",
  "key46": "jWA7jDMMAZKYXDqCj8meYLhZeQRgPe5shTKTAZBxexhMP4HQ8gH8Rnp6DmvNbrozi5RWXvHydVuQjJqGDRdiYQh",
  "key47": "31JPH9oh4PHmCqh38Jq8jaReeujSsW1pCbm9cFmko21wHvbvLZj9veivCNVcRdiy5mLYYTRXKNow5LnqL7HvskEn"
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
