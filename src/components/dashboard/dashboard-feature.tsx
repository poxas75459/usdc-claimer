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
    "2hQovb9o7cfTa8Krgiz772MCcVvVxhb6qdoCoTHbQ1Fn8Dbg9DjV2a8Pr8L2GEuSKQ6ygjjRaFBejam7y7KMJ98h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yo1CiKpkqNByBJ6x9dJuyLgLbM6AZpbbgDXB5bexCGw2MxmE7B18p8Y3GWaBQ42gKMNSrkuEnwTGZyvDCqJkXpc",
  "key1": "Lk8sUyW2QuY1KTEjDpBXgMu71PLgmZg5Rq7oPCkmpwU6fgWiNLQT185iMSL4JQL4iXetiQ4xQVP456hihpwxPti",
  "key2": "35iKr5s5KBm3gJrJhzZk8522uUKzA9LrcUX1NunFsrdxjDLoX6mSag3XgzJQdYxffaGQRyJ9WoHpDDPyA1iNDwRa",
  "key3": "3bNb1ohmU8vKM5V96shGkvDmRWLTZPkgE57usJv4dkhT7CEbrHstunr7w3z8UfX2XogJZhdgpSq256ajvtqfqMrM",
  "key4": "5vMGCRDeQJaKt1WVWbejfQzbq61PrUKPR6b9wUp5fopkfet42xUoE8RMUdfymmZMwBmp1TdYGpkyTq8RMYUNs3eu",
  "key5": "4jKzQwf1HmTcFT7aVKhhgdt2a3rzqTYNDoJHABtfji1r55pfJjhwTWUZdgkvDryeKQPFFZkZoujfiPYUyrmh3cK4",
  "key6": "3F1GsMBfupHhGDXQQmtNt4mMo7EaDxEP2ndc5s29H3ZWSjArXr2Zry3Z9NWxNXGDBUGEe4Whzou9JfYTrwYY3k9d",
  "key7": "4xQa1BnsUEMBakxs1QbU7uJAE95ZE9RuGvJtAcfhVfLFfYrw1xCiF7JLHR8XNabCRkJquuSeB5oj5GM55MgqifjB",
  "key8": "oTkhxh64cjd8p7mjKA7sS24FZPvvpyVpmuUVC9b5gUd5MEZ4FyRZK21Ra9Ct4hW1ozYJR4TkGrim3HxTswrK3tM",
  "key9": "33DSJDPVGu1xHwTHLSjGmGWeNgL4xThzWpCTR7ntruDGz4ThLLMFopo5C3vaHKtx8jD1kY5xNTKCFYd2GSjCduNZ",
  "key10": "3m3rjFKNcL1Qx9R68isVgDVtgTtXgRLEXfaobxqG1cnSVtf6MmAHB8L2iveV9zm5kWEZY694YBUWE4yTPEhkJ7Be",
  "key11": "32hw6HkeSU28DH8Gzhm3bn3pM5HRCjZjiBbieHPS7bKQymLuP8v3HJ63caCmE9wCTeScE84fbv8g4G5C4by7Ro8B",
  "key12": "3Fk4yU2fSK1S2rezw8aYMunJsTA9Xe4UfMFh4FX9iEZU2vAPo8tQU6bktJcEt9zEVrvBmqy1VohLX1PwUcz31KEw",
  "key13": "53zrSd86S7uYSV44WULsJPVE77m4MdyTy4s7g3xDra5zktgjdMKonbufPRs9ecHQ65aonABHA2y5gAH1CmvYHAY1",
  "key14": "5mnUF6dM2cpCfknwjigx7zeRZfGuTumJJuvhACq39qRbfTjMLktG2pc6KYwXryYjnwaSGjvw1m45MXxVf94MgJH4",
  "key15": "5MrdRt9UXPFvJstbVsB4sodaQZt16DU6hjzU2YgMu7C7DhFaszKJXKy7t6CWgLAdYfEKPs6eTBHqoob5c87MVW9n",
  "key16": "295vw7WJYMeUeHQuNQnnEUYpd5VUCNLFdbX4yjgizT3i8gUZ9VBbNVxgffe5orNzSNqVdjK1CPQyAhWbMQxMwFdT",
  "key17": "5bBB2ZybRCXGTvydh5wyaRQanHdBPCViownnpN4zNUh96Q9gzQPov1w85WAaxf7iTjFWYgSnGwSeEaBzZvDp6zxs",
  "key18": "5LcXKXbJdxSQcEPWrn8iaGzF4HdBeWFYqpoDZ96X8A9XyHzar5WeC4bfM9sf5AaCyoCWckfqRWTk5CdyUhUM71GU",
  "key19": "i9AtJFPfTUqiZsRH2GgkmY3uqaKqHTVeJ4cZaMqE7Ffh4ynxFz8xa1inf1rhWa4mAdXn96Nn6a85EJQUJjEFYi4",
  "key20": "2ngudsP8oEsJLuXXyr5p3SrCXe75HS8AAw8f3iU6vXLkHyoXh3VnnV7XGbM8uQuUronoXWmbCpW3HvATHY8iy86Y",
  "key21": "38AkdPZfhKDfsuXoQ9SyPsPkC2ZuTigo3E1HB32bmSjidWYoMt2EXKghkWEvzTQdJu89p4q5QicnxgE2srdwAK1t",
  "key22": "46qS2JP1Qh3RUFQ4iXSvLbRqQoZ3vsbwFFrtRmoQnJNVagCGthyjyRjQ9PALz4Ushw1fGHcFrNwvUHthgbF6rcHc",
  "key23": "nCWJiBgeuvfieT4awxor7DfnnWvzRj4hq7ENzk5esbKR7cCt7woUjrdHhbhbkcwcaqCaMPS3NEXD87v2Efd5c8U",
  "key24": "3wE8WMuqPAKattVENbMXRQvWW267t9tnQqWB4wA5Y16ooSAQYAGPDhYyN4ZHBVEYyTtwbCE5AMvdjc6ap6HYcA8A",
  "key25": "67LLqhwaa2zUemhwENbwTn6x2JEDKuRFyp5LxZZRShsT3GHt8tBjpwYEXW31VAEeDYEJSGQj1K7aEkZfza3HUozG",
  "key26": "8eTzqcWDnaaBs2ZNAJukyDstGtGZVDM35A6SQ5K8yTeKUm7YubJ3tq6ZGiBMihsSmbUeX5WJM1zNaM93uwSUzak",
  "key27": "643rwt348HhSNx6Mp97Amkvw4PkxLV6qVjpUNNwoL7N1wnsCir9zwYPsoStb32PBMVYDo5cQfHArhHv3wnzQfsKA",
  "key28": "2vuTKtzXKUa76NFyV1WYSFq5DCgBX3Sn8KECVQHTcfeZs21LgZ6FTeXArEt8erPp6caETBnoApZn7MiceDEaFPsf",
  "key29": "5qsqfk3RGQ5zLVLPoQ43ERtEaWpyDf5uEM17AKLARB8um12FCaWaDR9c8Fa3sp54bX8fTMckQ5BVTBDGgFr9MT9M",
  "key30": "RGqccJkLp72CR9J7xYckEDtE6bA7fZf7hz21tRvXJpSz3NNkmKTJoanBqJ84yATptWxyBVHzWvbGJXLheTowQZL",
  "key31": "3Gu2UToBmZoL5GwTfGTQ8a1451RK9JFeBsifQBfHgQFViNZHLuxAWjyXz8WoUbDxcXnhHMv94tEHoSqPFL99NdCT",
  "key32": "wMUBtmTVEMEw2jwuEcFJ7QQz3JEWCGafGZ3KKQ9LF1EL4ewXZSei1byK2ut8LR76wGP2A2ZkefwM1xj2RMurk8T",
  "key33": "3vBoWDukCsbFS3ebdzZzniGyPNkbksjJtaAq97UWMYHNPMXzfU72AUwSDF3DWHTJMpbmgBYdtdXBjgSQGvCVk7qo",
  "key34": "4T9hh8ahVT6htwWhtcHANt2HZ4Udjdh7zLZfkfEgLt4TC6mbpiQ5e8x8npwGvGeTmNjgnR3wQQDVUjTcNFUMq2ka",
  "key35": "ePAY7rhWXkCi8pZydeHkNRW3WzvEeLxj4mRUn24jZZnDamwuHLapmis7NSWXqoPp91s68NEJgWrx9gdjakMKs12",
  "key36": "g9mFC2ke3SHAnFAcKqjRCbQjVRugaz8WHz8UNA8EACuXPFybKVezXHr8Gjo4MFBU2vnyXxvmt8YEikzqDeQZGUc",
  "key37": "2oJwigcADEX8emj1KdzBRfzLpPU7M1sQ8buLPJLuTmoY6w1hc83vpj5KTiaNWaAorpqsGM6VMxUF2BwkruQxyvfQ",
  "key38": "2cNr2m6guvji7D86CqRFfiNSq1K2D2nitgJ4kwVzmF8VAeTc76T4BGkU47Gx4f2hU4qXt6e53mTw2sHTm6suCSbz",
  "key39": "5Jwsi7LcjHvkuHQLGXMftpq5sVXQsNgyA4puCy4zMyXsHLjtMJbw9a1uMSUzDP8HtyYdFo3MycUDSKVmWcmGUUFS",
  "key40": "5Pm4ypzDKn7cnqWt7eZSnX7wAZRretkEjJceXHwAt4VzAxxTFmrH1NQYeTbvaGnCv48iELXm5g5HN5DpogGroUXE",
  "key41": "qsezjrZLbxtHnVvrH9Gt7NvJTvpaffTjxKFpH5fPbHigTMUooiRCSwwTNujKVRRVbQiFWL6Ft6NwWEQsQXbKM89",
  "key42": "x5yxanD5xF1beaw2qAX37u9AYYeCU6JaaMFWgBCEGtcX7JmD1ouTsfKvyrhzvJSWtGvdpUiZWVxbcZrXnwvauEW",
  "key43": "3D8zfpvk1wnNeAp7CXgFagLgp3wHk5TGG5xBi4Xxc6EjQV2AWvN9RQ8vMEjAEUWhKL7qq61WmqY1wBabhACVzhuD",
  "key44": "4JnSfNoj2pJSJmhgkmettY7J5xMsQTBPn3RyB65csx4nREsyYuxbvp87UqSZzQgBvNiEqN2vUKf4ANExHDvHBAyZ",
  "key45": "2FmVDRwEPBLFkzdGNLHtgJm6HztGJ2a2XV83Y25yrzDabJvXdjbbGShN21PBTcisTgmNCQcutqm4RivJgkqhM2WA"
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
