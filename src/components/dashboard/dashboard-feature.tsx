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
    "3bMaapzzQEACNZGuHTFryL63CNrfCQJ2zx2fRLyJsqzsNfHA2hBUBm6w87V7PPtMRYxDD2TNAk7WwWzrbBTRQ8e1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NuHKPZuEbRfk7SjQVsrKjzsM8ZtK2ycjdsT6NbFeP3kj3etcHcqZAUvCiQxo6KTQxedZQoYuWPWLrfpA2y5Lo6q",
  "key1": "221ZF7FJzWmyt2XFRbAseNNFfyqSycFdvAjh9xYJmJwLXrUeq1jpDW8SJQpVJYaZLQHDs4niYjRGhm2deuSrsZYq",
  "key2": "4F6GLzS9jJ8PsnhhwyRgmU36xHT9smjsZKZHnrPWDe5Fhd5LKxW9sFTXUvhThVqkiogRP9qgBcfizU9Gxp3VuoR8",
  "key3": "57w2SiGK8cB9pTiJD92em8dSPsrubm2WBGeCLQqmjzSQ2Gu9KUEA3wnC1fYRtqT62viorhp3Qav2YoWSKkdeurkx",
  "key4": "5omPCUkamK42prqBqcyE57wve2YAneDJD2N2Qu4RKzNHXgWwrHYjC6cM6DLvBHgGeT5gEtA6iTmMq5GB7rw7BRHX",
  "key5": "4m7KxJ7sEDBNHWAttfUw2B5pgsqGXKbVGCd3CxmzQYT6exeRtoz6CnthdsjcgjJpGwVcXfafGyCp6cUptFnfRNK4",
  "key6": "3vDsXhwcA1auHatou3hdoRazYbA2QXycnyYYC3oHmDhgPwAn8EJRF6g4ZUQ3mrVtzwpuP5jZKRK8AFMatCD9VHZN",
  "key7": "3jsATi3NYzgKupdxwNizRpK8AP78NtrXRvoXz5QyXfWS4o61vQrVYFzE377JgFvkKg5A7cDdX14uaLc9rXJ4jav3",
  "key8": "4xmkQ1eDTvsV37A877yHRKhcDZ9zKZR5p7VdhznDDyPquYfiYXNJvkTo7ofU7VG9RFo2PPRLx3LZ6Xmk3R1jSCZU",
  "key9": "4u4pfXy3ochYbB9RbiESbN43BrcXPZc3y31K5bBwLnJkNYB1RFSQvYWBpY554HaTeTh6AUXCc7oSwUtejnHGanzC",
  "key10": "4CrgQPxepULJxmoLWFZkgGFgWoLze2GVyADLsLfheiisRy1527LAygXg8BQWq2Kcc5kch4LJPFUphYDzWWJAmg6A",
  "key11": "2ormh8adYSxsPqiyNCyYKxTtYaqBxqvqzsZLdMhjQiNzSrA6ZAWWonYcBdHwt7VZJKczZe3LuXjFcB9mYgRGQNJi",
  "key12": "A32w3dgm9TT2HgV8EED7oqZjyAfjT98AEtwkBn9AsFHbDqXUp5sBJxGFS3b8duKxZSFacZsW9RMB1GNXPynS5si",
  "key13": "2n9RLXmtkNBGiiH5zCq8GZxBWEWUt3UH1k6mn93YeYtHiHoc8CkSkhewdTfPP8U5FSDiqEP7bpptoFnYJr6XHs1P",
  "key14": "ZenpoX5fhYvd8xYbTGtSxF22L4Ry1uMPU7XkYQ9cGZmP9aFT5DjKFLwEoPXoccfjmfQmjW1o8iEUjXg46fpmtn1",
  "key15": "3gx7M83FameL2UtGUpA7YaWGSahkKrmYjXcotjiQv1m2tbmbGa71eCJ9Z2G8xS9WJsXq1hR8a4XkpooQ4RY9psin",
  "key16": "MxAmVXdhgMyq3J7DV8M3N6N7a7iuhdryqV1VbGcK6TubW4vkmqWYhUNWjQzofKCTp7yPVg8gxTeQjTmL5guTeso",
  "key17": "48Q6CxF8TD9zqWJmvmPpx9KE2ZYU4MayjDEPYpHBNxFV7rKPpwbtWGfEQtgB5GQh5hTLwRm7LWcbKCuy63XY5UzY",
  "key18": "aTrNsjpbykuKfLgHePshVJf3GJvH82VGUsTtca6sDtqELMN1Gyd6uoJpAEtTxYDgEbvVmSykT5Ny2PH1rzYVtaj",
  "key19": "5iEPe4uAJRXqhykD75J52sD7EYkzyRKVBpARs75youcVsME3swAtw9Yez2PFwXvEwiSN1wMKjXUoWQtdcnEVBmy7",
  "key20": "3oAzBJXukEJVEA8QXVeKbZW3EQXZAzA7WXzUHtPEa2vqwjgmM4yD2Jho45UpfaVfwAqgjSoLhwcFrZRdg751JbDT",
  "key21": "2qSuHMXiwUYZg1Actzyjcs36gB9csUivHFQbrAko9nWiJgEq2db6KuwLndXTorRNxWygwYD6sQH96eEoUiounB2C",
  "key22": "2bS2Avc7PrVutGJCGkvKTDAMKDpRn9mGFSpKuRpzsAKU6dCLj3bE4vBguzx3xGch5SyZ2DkGHHPDoVtSmZDXTVaZ",
  "key23": "5syiNtkxFodWJbZe8BDFqEjuxyDFyswwR512WviiJNy6gCS897zrx93mhaAnU7ZizZEbXSsCFGyYqPqucErJ4ijc",
  "key24": "oGtgxx4xnD7HLynDdycasJzRvjCiNzjw4ZKV6ShrjRqD6troWE7VmLepRNCNauodtjAethMWqnoNmk6NpY2vk8e",
  "key25": "3WaceZLPdupW1UePN2CJu3w91cmrRHrqZ6gJWsvH6J1CQxz1Y9EaJNMDgX1Lkqu1jC9VYhcCtXvM86ZKAekkGyea",
  "key26": "3qcSZ181mytYCokhPCnyceZGWvDoSmzhobHus3PbGwC7bdsKmLfNZxzGmajPF4FCAGMKttBBAPBT7NRcb1vREQwj",
  "key27": "4CNVqUSCN6tNkagVLYvi5SmyxHvmtZX1mHfK9Zq1wpUuFEkJBKV95BPN4k6quVKAbUgfZhnU23VzzEc3Ym8bC5KG",
  "key28": "3v1jW7bUY6khqcDLXq6RYMe867zRkZjXh1Shb8ipsvZGUAKjuZMZqShRdm5RSmWBG8uB7jjaNg6qVTQrSKg1ig5r",
  "key29": "56EqoG3111L7B4ZaA47o3oxHwvTMhS15qcmxZv7h4ZDoVT51z2ftCS4ZbQef4LTcSz2tqZDadCg79qZsNnmqfRjb",
  "key30": "42np59SANPrVBUTyH63DuYpbqg6AXeGXuoMtpxpxFKDss4uqFVW7y5y13eYaJ7jp7aRStQcJGz2Tdpgf8n3MEqTS",
  "key31": "2qFLNZeTN5bmJFsVmS6bDWnFa3i9hG9a9TTDQAi7GxudNoKS3pBJtZeumCuC7C2GDTLkGcyugeNJr13WU1jk6MUm",
  "key32": "2dZmTDwcbJNWJv35zeXzEJaAP1GRenY77JjkHW57PKdqS1c6KJTCeuxu8sXc15NGoGE2taGfDbDggLKJY7yeupxc",
  "key33": "4FuVtgSCwXG5yoNhUPBZJNaKVcBKPaxXuoeKbNz94GG6t5FKykFeZoarQqKDsGdNUkAy7tyZZkjV6KCky8edGPdy",
  "key34": "wUwVvu8LXUK2rBGd1aYV6K5hWmGdp8LgVDMQjLV1xJ72trM8e39m8d26qisdh64FAt1JmzvKKTripXEtc5BkDPv",
  "key35": "485WxiUrM59AmnEF7QCcCLVrBtrhnRXcJo2oQYkqdUbmqS8d6uUAA25hnGbsg1g4PnXzu27ftHP9pQBuuZNnHv28",
  "key36": "5v8W1sZjEu8Y6vcXSEiBPRPBNDj5APAnMZ1fVHM5gZHyFFw5TgDdFpBa9gDLgQiCyZQJjdQHPg6RVrQwhJ9AvAqo",
  "key37": "3k36NHaxFYrxyZx1i8v31r7MYjhJdvUwW1JLN8R2VZXEBPzyNrvPPPfkJ4amtA9ufWd832BxpNgytU3g13LDQ1y5",
  "key38": "E3a1ARxijcd5uZgVGsWJaJGZydkK985ecW5cb5LGHdL9TbwqofeDucraBowf4rxdVy1VBjwsQfNTuCJzw9yYsBz",
  "key39": "5JKH8pS5n5prdP15rhnJAbHUNx6DMEdW2d6yP26rvtRukoYAKfKD3qMX25aYBcRojUCqtvJxPUxKRbNkEKSeMASi",
  "key40": "3Fv4i21XVxYko63a5QpB5rJ88gAJCvwWXLUJForFuM5YmnqKD6bX2hzcZdBut8tGmEqYa5Eo5GWHUdUPcrRBj1UE",
  "key41": "494GKLuNYuaLG4hzTqnqq9gD6ud98yAELnN2HGusEzBg1gbgeX1sdZwe9VYs1PiWu8ooQg3DwKyhaASLod9WQcD9",
  "key42": "bvJ5nsXBCG2dKxe5UxUZR6Wzh3Th6cX5G6AXSLPnoaP9zH7dLuCm5Aukut7mgZ1g9NK5342e2CdSmTZtThNj2ww",
  "key43": "2LLUK8X3SPNCnMg6EmydN1qyUTDHE6JJ6mTyF82YCsKrSyfYGpSKcCN2AuqoXeRRLG1X9zoxpsKGyFniHvQD41KP",
  "key44": "5AQihf4ARxPHT779Key26w2JGThuSNrC8G9sxfef9seJzS8DZ9A9VJ52G2dtBPTx4ezjUdwV9T1G5nbts3766xmn",
  "key45": "4wsDp26z3Rfuh3GZJByBAb8GKm38vKp4v4qvW3dWy48aJEnPQfgAYpA8oAkmpLxVLbg1WhFFhrFEJxFWjPwoqayp",
  "key46": "2KE5chPm4Jfikj1WsdcyeyytJgxU9MPohFYk8G6e6No4GwQWbXcrEpmLkA1DfLow2ZxyYmJbaF2oKKcsXEiixzWW"
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
