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
    "21VWSMWxGSRgtgXqTVfkcuh8SN1kjYTFeg1QQ16RZ8MsrnsRfqNf7nMaREApRTpE98PmxzTpuHa58jSWTKCMjHz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaERGutY86cdDeyW3iu2nJaDBnZG67H1jQMhknTsNCgpU9g3gVB6yfR8iWBRvZdMWQDVLNKAT44qyGqU65UbY9D",
  "key1": "2hNyQJ7H9Hic8aW2K1rip1trRC85Hs7HzgbuHwjTVEsbyPPW4hAPGoTFZwmqdMvyWa8ezMXdBCFuuDcMSVzg6DED",
  "key2": "31GLRX5mhVU3bepVVHGwSQL4SmWoMbMpgt5SGcwtbJTTyn1jjJrjzwtoh4P51pcFZpCuyoaPccuEDG2xENt24R84",
  "key3": "2RVRppA7nWzdru8RijLLVpJKjQuPey4N9YKyYHXJUikzFaWJqjBsLcW8CoASScmU3L58dxHJvTVLR2UdhXS7avVU",
  "key4": "7Y7GVZg16cysnY9e6KmciAdvxSwKTnLkGUDF9SxG5HfAnCoHDePYXnPnUMC2gSCJxtHX3dTVkzezJjQHQW84HWG",
  "key5": "PsHoUkGZydwcMXttNp81K5nXsSuHppJP4FY9YKd6FQiW3ZGTwYXHCtzBbcQ1Ce35HwvZeJxsJKn88hSs3KRxndF",
  "key6": "2FPQB5ma5BiS9aBtVS5xByRri2ZUMYB8b5hVUqUFXjR3LZ8aAmova8TmMttXf4mS9bcfm2cbJ21AnmjHajCdmEbt",
  "key7": "3ncbHYBRxoVcg9LmTPK6AgrrvxZggjYHLFbeiWRKmsCw1yV2gm9dLPhtaZcir8682Dk2Lq2AHAaRpEw11D3csF9D",
  "key8": "3nejvkp176otF8ERg6jQ76p9VDix3TzCQPktDfwJDec2CMwd1TQVN4qdASKtMaF7KjTvnb9xkweCXuEDGgj6egkt",
  "key9": "5YRGLUHicRyiNWaqDYWoTmrX7Z78Hcz1b8BhjCjyThtZk4vEXaMvY33SoZtnZsZRAEygXcWmTKT2XbqkymQ6tS4",
  "key10": "3bL525nevN1tPFwdorR5WduCmE5Fk1k1nqqSBBTHrL1ehTSbZwdCWenD6Zqb23nQ5wNqpnARr8bZ47ntGCJaeZNh",
  "key11": "536Eyd9atEPxFUVhgBQmVtTKwJsF1W99bxKbwDxeTqMCXdLHGJkzgsNtFoDJCTvjeKEpZTFGyaCGpyMJftro6p7j",
  "key12": "4AKaA66CK9FU4zqCxug876zrc3um3hauxkrjoRAWiyoxSAHxMbac8n7MFd77ETzMDFTUn1Bh2Zz5DtcfWxagKqxs",
  "key13": "45GXHHnjAGfF5rGp8ZPtd8JTxTngV2QdiMQTvDss7R7YDDWrZjMaMCJRnbW3mDeW6Lq6mFvzBr15gHdJ3R6AAD8m",
  "key14": "yR2Gihwamd2ueq1ydRZF7zrPEux1ozSQKX9E2UfnCtV4SsKGRz8NMfAHtywv3R16rMoCoiqxtYgmPo425CwLpxq",
  "key15": "55sHoXtouHt8t1bo68M13igHGecfTZZSB6NDbMhc3cpghbat4YftUqUWqmhbQ6kpNWBiMPBb6mnb9tch1aoxn2xL",
  "key16": "4jMttnQPaG1zKKdRmF7rbfgPTKzSv6m1FWaCeo9H7EtBv5Cx8WNc7wtGDxc1Tas978J2QXT4U8to9C8WyEEQCWxP",
  "key17": "29wuABcmvQG4xaZn6LwQLdoSnJpkFStDQgRRJ7k3hQdDEiJXz1B2dbSDNn2yDcpFuTYUjKyhwrJPkZDd9mSKcGG8",
  "key18": "ojtnJZoaTfT9c5wS9ggRkBkgm5q1JDHX4rPA7C1iuRKxMCcNhakRqahvL3PZN9D6fnTrwXDdBc18y9k3Vug3xbU",
  "key19": "3UGFGKoZkRBiCH48w5VNVQzWcqCbpJL54SWbeTnt7wwzgwWrsbkmPVU9u5VFZefssDMbcB7JSUBnDCVYyfE6higi",
  "key20": "4Y2VeXqnFU1ZWMQQdsJku8ieA9VoPoxP41Hq9X97ptebvdhYD6C7yRs4YyBufQGL4ASnEzk7xHNDUJkcu9FauJjP",
  "key21": "5MUTujXKXsn9cuexnRae5bPBk6ESVfF6dGAxU494BPQRJerCfV1Q3acUyGKgCDAiVpV9tgbEXiQreoAVnxyNvA33",
  "key22": "475kximcTfkygajk2m7kbM9aq5wjzRBUit1Z9KJGaoBiPmPf54uw81dGxi8CeHujaQj1KNYsnJ8T8frp82ovhX5n",
  "key23": "5NFszEKutbc5XLrLJeAqU1aqXjme8LLiGkk2BfHKvdfTjB8PjW38k6k116XS1LzmXBFvmf3UTbkMeY3M7KbDcEmN",
  "key24": "2CS1BYAGTgZv2qwxEc6jKyST33Q7U8t5TS7zZJafcLfeW9VrDHpSP6JRoow1Kg6wzEA5WwjxJ17UgU2MLDynPMDw",
  "key25": "2iR9nujYQJFyrAzrErLLRd9pEQ1J3pu5Pp1nzNG1Ccox5pa1DPuM8neyu3KPgenpcz7yqv7zryuxCNWB2E9hEoD2",
  "key26": "raHnuinengkN6UwDGaKbpSQwLEpnUh9WnGSvLmnLYX9mP3WPGbUyCg7qvfDugvwBhTkqX6j5xbCJMBD3EAdWZQE",
  "key27": "26p3tqGtmjbxuF6gjdHi6DvYhdBumKwkAjxSfLCy24bbE4vrwL13uvoXThEnqE82mzQs5A8BHohDqavVoAtPrKJM",
  "key28": "2SmzyxZ3ffQkaaQZTCkxzGSot8HAhL1Le2RMmeeqE7DrcsFkvTiG2fm1DNPEsx9tDdYAiqNJtDRcCKXNecQCmdd1",
  "key29": "Rbh7jckHRdMjYvyUWpvKcosMK1xqji44KzkbNksdXaMoL3rfcjrXactEZzUGy97JTFoDXn6A8GcPFXxd4wsiiMC",
  "key30": "Ute3C5LtPC2aDLHNF3oSPc5M4V263J316N59K5U6QaSQfH9xuwfUzPY1aYQ2fvPTBPSX4vXdXoZJC8uM3cajnqS",
  "key31": "4PZzmyctpjB9TX32ehZfHSJEk6FbT3QqZxckgNgkdLg3xmQ2c6Gx1MdkCDRpCkiLPHXyGX6gNB6U72cQHGEFcqMJ",
  "key32": "5sCtsmiG5xMCbspchcojxSVWVT42TuLAcwMTmgW3XLAVMm26bEKtkcdyqvYmJdPfzz2EiMB37XKnndNfEjqLZsVM",
  "key33": "5YkbPgn9SyZ4gAk1Mcm6WPgHiuW9RNXNCEadT1sHUiuEb8DFfvwsX1gdXmESbKGqH4doPhCe3pxPondAmNKiYBHf",
  "key34": "3fjCKFxiYJPKZvhWcJtZV7FpgLiLVuHjXGw43xnDAy8eZFGYZy79t6SvbY1v2KJhdntHnWZvpMkXsBhTkGYWuqHg",
  "key35": "RUfdpS4WJaYdeiWknSSnRnw5eGr9G7KrU2PetSjJPL1KUc5VMS6ZsoDfyTzkvQLEAWwYZXD6x1kYhzxEnaZT7TQ",
  "key36": "2Fgd8SpPnUuJ1nbaZBTkeAu5Px1TSbGAR9sid7uDMMYf5dD9VqGpfNmfe15fAqSNjHQ8Zzp6C69QtuS6DwcUbw5C",
  "key37": "2kpZzvTowr8dHJmPJk4dCB7hbfpLvnhPzDU6K247Zp7fHETrczLdDAqW5rz3jGjcUmwVMy3ai5gdCnZKWAgaLEpS",
  "key38": "57RQKhGU47FdtYEZfPwQ4woaXPfFv6yBWdj9Js1yMNEzKow9WdVkkDuGCcVrPZHNUUcecpSQgiPxYmWw15wacMqk",
  "key39": "2rFx5XRKwd33oDVpFdcLDs6dcJn2syMYWkEDAR3MNgkNwUtyRQKBod6T5EfpEKrii6EsPnCSbYMi82Npf7Yiq4pF",
  "key40": "5wy5zb2mk9ik9VuYtYjvoDAnm4H6AQZvu9e3yHTjB1gFgciSfWNJSs2Mcyd4xpDfviEw7fAAv35cRPRuHaYR9WdA",
  "key41": "3bKqZXTTA6TxJ43N3AT346B9u9iJG6Ccu8C55bCprmPyHQ8GsGu8smmoVQ5Nxav93EJmrC7PSQwK3PU6xjfX7T7Q",
  "key42": "5aDR6v9MQDPhvetDJm5jjwRFAEbjQP2tTQRHTFxptgZaWkdVQB9dQpbomuTquYFKGQkoDwRv5q6vzCrBWNNNzdUD",
  "key43": "5fkEiQ1DzHfmTfFrN3GfDG6N9yUsxjzaKDRLAHGtaLpWqMN1hFUFvDgNJwMVmYEFbLCUvBztHrqJ9gpAVWVaa5dy",
  "key44": "3crC3mpZ5RWRJbt885t1EdYe3CdPXkHE6uhsTiNLPY9wZDRnAbtZeZm9eCxnLhHQJsZ7XXfFPTTbo1k29n1v85pJ",
  "key45": "5T6CyvkyinSnwQVmKtEEUewpSxVjLAecNGG4DuqCYpuSR5Naje5MDcvPQbm4Q7Nh5uJhsmGkvmkJ2Jb5KLdgL6TG",
  "key46": "2sUqQVE37i4Q274DGc5qMKuPmwDm34iNZ1SYpc7rjkMLJ63m4ibANwhEgi7yGv41abbQdEyqemrvyuHpvFwcTbQM",
  "key47": "442o2bsypvGdk7EUoqwPWGLjrVd8xd6A9nYrg6j56bn1z4XqRMLH6k3y8hhrqTtacF5a7zvRxxNE5ybTeGkLLXdp"
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
