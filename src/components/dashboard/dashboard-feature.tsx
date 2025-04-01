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
    "26wJwdGiism1QXrXQCRZQ1MGxmE4LLc3cDCUHfA5DrGpGNSr5ptQt3fR5EpBkFutMYTAYcUzhrBkCSKXFYJkMsGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyxwQAJfN63razmJd9j1KDN9L4tTdpY4BXLH3dPUqgYFMNQWN7eft6RvWCcu4SEdELdxiCNzZvQmjGj9yoJp3bZ",
  "key1": "4JFXmVypU64nz2sbyK99E1mMvx1B8Va4KiNiT3n3F3ueBdryF4NVVMn9HUb8sKhtZssNL8KS6RpodUjCaSZdRvTB",
  "key2": "23Zi9jERENzViTivpckW5MYacUAsarCPnzzwkLNZSADzKJCuAsxeu95QcWZ12P9FLaG7BEuSssabfUeZAKv1VNWj",
  "key3": "2seUNvHYNRxDn5N3VewBQZL7EhPcMFk1HAaUw1pdZjHYFgweVnrytrrBMEczkD86hGpcuF2QFDuwWBMucXjxJjzU",
  "key4": "5nJMQ3Vae9XUGY1Uft9fZXz2gcPgVCjj3BLXoEBk6xCh3gTPzj29i2dpzAvSwBNJBq2iWxqQw2okeWL2PSebBiWc",
  "key5": "4J6aoys6skCttm4eMzKb6nkzNtaBVg1iMWR4xthkk6Uixpfg9yAQqr3eDjeyjXnavvWcskfdXBrrQSAKBv5V9rtS",
  "key6": "3a7c4MzoetCnjq9EksyxBZNkpUGDQZCF72C4E58AoTBBptQPdcoEHhFoGkyC4NAGqUn6M1ecaRtSyxDGrhEzy5qR",
  "key7": "5mqKfEmwFk7m5edZvwidtZ3bw5g75VQfzrmtWEmmgXQR3t4sYwntmAqu4kyYbhPeS3CF11WaXw8Fz1qmgJ8Ffgzb",
  "key8": "eRVBtzChxyUr8ZH9aF3eN11WbLiGpTeSjbZpudXCNGZ4UXPxyRVmD5ywX1sFt9Uf5nZqL1PmisEmddwaKL4mz74",
  "key9": "3FZk8dhaZaGdmb8XLN5hsfYDFxYLj7SaKnwEoyKeP7C55fAktK6bWC9V4pf1PrSdYWhfUjregbkgV6Xqy6D7uBKc",
  "key10": "5ut4rBZQcZ8htdgx2UCYGZe2T3hL8VBeqAi8pGUKK2ttFc3m2vaw2aZ3E869f84WXbjJzVceC2yZwKHWxU7czLnT",
  "key11": "3NC4cqrLEdZ1GxfkMc5hZhMQGZwkbrBHnRHDfFH1YQrS2SNmHRJA2zwQfFWJL8iWhXtFte8jS8YEtHA4QXCAni5t",
  "key12": "3ZNGwZTVFqUTTQup55sasRUNfpFbkVD4nWtYiRWvet9ozcm6diJvU1pRnqmZYj8dmzVLyMYbCEgDyZdKNYDrzhr7",
  "key13": "4gS8MiYVcVe8G7PEy6snbbg6PG6kF3PfXEWq4weM5y1YQBXusRVF8Yjy4LeyLZ6oPXAeZyY2akKQm3NACin36bVD",
  "key14": "oXCw9KYTxzSDoVoCc2MM2ifAwYX8Z2k8qkzt4iLPSfc82hGHRKkYiahLvb7ase4x89G633kD42SmeqFN5KoEazb",
  "key15": "5pozGcoPkPvTWgtgFpEzT33wkNBPeJyjr1CS7SHABckZ5TxJ6hthT7HmW3jKjXUFaKdU3Gtu8iwmPTzLqgGteA9Y",
  "key16": "PuMTncbJVaLBXZ8jvUMbGc32hv3KKn8fNBJWx71sPFw8nSeS8Anqc2Vk13S1ZfiMvXdA9e89fCT4V6uDUwDx732",
  "key17": "4LQR5JqbrYkgE7EDK5wC2VZVxvpdMPNjESwQwjM3wUM9jhg5wn9Vn9YhX2uLcy4AfQh6zUyvbSHNALhmBnJjKSf2",
  "key18": "48aTAErxUYVsjsp7gk2Pzk4BPSL8UWnAPCG9sz5VdCAqS8z4WoLkCR3dKshWG76sTG9DfhbE1TNrBPnznofgDUTE",
  "key19": "3fSHUznX4rAR3WFhtCjo2qg5bVAJeekKRysQkqmE4G1emAbe91sitmrJnwgMkfyqEbiirNEMCr8rd2EHoeWc1Gko",
  "key20": "2T3U96kXPA8fhwKoky2a2Et9PpUb2oQqQoSHY9RR1gTwt41DZULrZDERMjLLm6dswrxFk625swEnCJP2q5YsbuDK",
  "key21": "2Q7ajpXzKLPKTAgyDcfKDz6LzkM9GF8XRPqtYaFgvBPR6aXDSh1RrrHRttFx8bSQD9Zofb7eLbyN39prQrgfRJUA",
  "key22": "GKxT22PozCZcHrbMduY1RrJCbRzEthacH6kc6Qrn6BHQ4Wrb5ZgKB6Br9Vt8ZSa33ujVqgbVTe82Jnk8fdq592i",
  "key23": "CedM2Fr3FvS7DnQ729T6Td1a9s8wZazaAPvcKDsHjsBP1WEEkGqGeEbexhXypRXcF2CJV4D4Pj4ZRj6Dvh5UHsm",
  "key24": "3QrWEiaoj8S2xapzK11wqaftRaQEw7LaSZKRk5nn3U98MJKJ8n2Zoj92bUT2wbyt354bck73WtXPBaGEZfvFHMRd",
  "key25": "3rYPzx2KP3nAC1QxFPoBx3CPzH5GN7rBGhYvoKCLDnLjRtEpkKQE9h1T9h1saxAoauLAniuT8GfQEtgF3A4etZ9K",
  "key26": "5rTCaYuaMJZDYU6Pe62bwXPjUfucESwrZ6HgrXFUa5UNULgoK2aEFKDqdfmg9x37uitufrAoeWx6Nz4Rrf6nWL1F",
  "key27": "5orRSr6dcprLcA1Kodh83N6Ayoe3VSUrxrarGKG8bPwiJHN9YdtucEfuPsuXXeYYo2XW8TWV4DZtNBiKHhG877FU",
  "key28": "5YNkdP8YCTiu6Ffep9F5GsHGX1WNPpK5AatVf9YXKNW7XaudY6FkiSU5uwK4vqhR6eSHe4uZgeiNqvwzGMdp38fx",
  "key29": "2oHisjJJiU399aqcvmYi789w8Crsf6QbKXYxVxoEENoARrU7fU4V3TaX1Tf1RUDGR9vtJCHc3eVjDVc6vChFGPy6",
  "key30": "2u15UQjParebbZwnxcChhdgDNoE3QubcDvTdn58RTYiuw56aFzKXareNnmRtGKAKb1kXvLKwwLGRC1HifbtaB5zY",
  "key31": "BHmmvGAg9PUphmEV9Ysn8So8ETZ42CEsDRKAajGwKyVocuZH3pKUC571ACDZaYLgsmvWNJhvvre1E5FKyBQfaib",
  "key32": "2X4PXopj2bf5gB7wXrUoxraDHuQ3yHFqYxfjyUBeoGjYpmo9VRw7CMfR3TaQTUStz7Tckqfq1rsWTRrcorBkdM2B",
  "key33": "4fAdZFNUm2cPoLaxAh1RF6jWJd1HQC1WfM9TxChR9qiCfCfZALs4hz9h4gYU9XKb36Cuv7y7623ck2F7bK9b8coM",
  "key34": "4JwiX7KPBdxB77vGz9gAo5S5M3V3gpMp4L9rim6PFMfazDR44EoSpmjBgXsaz4PqZPW2ucfYu3dpJDPKbZLzi3Ev",
  "key35": "4GKKyXYqruLq6CzRzjyE6knSeoRe92FJefmZNsf4eo4fhNhNK89VHX8GmbJ2M7HciwA9NVmYa9Cr11zrNxzSiXQy",
  "key36": "2jkj7N5XSMviCk5GQ8M3cHAgu9Q1bxoueg1Y5Ws2155TuKrtW8QQeo9WvSTouHmLhzYBcXJtqgh6smYUbg1vpP97",
  "key37": "58Hidc1BXx1zWmDVdZbQeN44BvEjGgLnXjvvKjL7GQZc5V8NEkMTBXCf8nuo3sRDonHjH4yacsF2zx8Kp82TJkuv",
  "key38": "cAVei3B47nU9yAh1STxKpTpZQ726CDGBfPNogmbCrQNU3uJFAc4aB3q2oJ5XLaeDnTn86YNr6kPfLVEveRbnL6q",
  "key39": "3N9FvdYJEyrogvkdDEKT7BvemVQsmkwcukoRVqfxj6vFZcJtbv1mmB77V9TTx3ps8mrpzYa1xfPsPKCU2ZJSarhW",
  "key40": "9ksMSWwj45wBVGZiZsm6gmA8MDq9yKNxWt3uZnckydHDitRhX9zr9vHJV61gTFEuRy4AmMujEKhMaVYMuZhsx7H",
  "key41": "4C4KeontozNo5nLZzY5v2EUd4bE3bJ5LFV7uygoQy8h8i9ZDA4upj6RqW8UueFvHmZpR3WYMNTZX28dVsHPpBrcN",
  "key42": "46Vo9jnt6hFt49C1gtYmC5XsWywFEu3LTEdCsbNhQYSJhPGeBHFzrvaVZKG2ZWuoSabkX7gk7fyYj56rYZ6kEEXE",
  "key43": "5UTRe7Tomis71YWKgPHMJGHD4UceEHtKfuFaToNvH6N5eBULyGozPa66WRBtuHq73TTrSmVRVJ3r5zMsz8ANpB1N",
  "key44": "4DncZD6cwsN8sxFxu6qV8iXLThnka6q2nfB23KuoJiUmzGMwqLVZMJ2Nhzwdc1gSV7kAnP7Ae2wQ56i18KXcjX9t",
  "key45": "FmkfXTqLD7YaPqJQviA1Y3jAAW2n5V6B4bofaWrNmXgAkLb4RJu8XdfbhN6FJyFXytKBDQrM7tL4yRzJ8MNsEu8",
  "key46": "YkvMs3BSdND7UEbsM466semp9H5mVUfksAfLG7vxh4CVTazdLpE28wvfn7YuaJFQotfDvo75E8arkPCVCUd1U4V",
  "key47": "3Vjrc83h2Na21cTUoo7J4SFXmdtpYKJjSaqEcXSDEEwA5BoaquucyoZRtFnFWChQttZRMdGDxXHp7Rxm9ebZEmRd",
  "key48": "2p76h45wXzbyc1epjxzRkGQBeGbPucsbR43skrTDzxxER1Ey4pPdHriHmeB2FqyqTfnw6D9MkRD9gWUyDfKUPDVk",
  "key49": "26zHp4Pv6dDjjaMRgyx37ck6MoMw9jfeDbxDxrZyiSV4e25YSgu8NaxQJDiX2ihCtZpdPCvkvTn6MV9BdpptYZcP"
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
