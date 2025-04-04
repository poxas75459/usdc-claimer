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
    "51JRfCYzyUrYrkZx6bxamDdJzSj2dzXBmY2Jtcrs9JjL2MnVeyUAKxn6r7oK9BRHVuTtZa4yvB9vyAS3zvjDLvXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ThC2SUrSnHmasQZ2fBBmvXmxe2t5fSNeqFrBLxDK6LPEhTFkwJqLNmJF9HyAaoVRaeEcJDZyo68aawKktYhoG5",
  "key1": "29U6XiHF4ZSaQftUKrGYramJGbRmRQpMT4DxbAujBJbj7Kf8Fg45mdc4JYETUBwjW61BL7yMhfJreB4GGLJ5ge4C",
  "key2": "31PFuzzkYH64UEsDxuaCLxY2jnhaJXs9qrFsAZWpVye8FDwz6oxUQ4BLu5s3NWZfkUEBdaWdxxuvQ2zLnCgU7EvB",
  "key3": "2WmxFEfYhKmiKqNuQ5qeui1ErwAPJeXQraNeaz1XFxQBKF7JK8mqMms8XNEnZhrHw4xHxATWG5fuSaNRtNzsxk3w",
  "key4": "5wt85N7wfFSrP8JYtt8VJZgJGDiRmwFGXw5UmD5nvzUVjCfdAZ8exuJ8FWkVsyEVku65WySufQ2XYu3hXRdCktae",
  "key5": "Jg6eQjgiDGsTiap62xf2ZgSgQH4zxMQwFDu9GYWSfsPC8tWdfr4xXBm3Xa7vsMmp4FkjUs7vbpNXVqR9F8A5BY6",
  "key6": "Pynh9XUzeQk5di61FW6EBJF4T9caDYvvdyAAhSv8imrpfBX8cw8pp5q4CdjrsBMEbucDt16bf2tpd3Pe9QcQvYh",
  "key7": "3ZaK8q4dnRhpsEzK3zSAY45FK6eEYHRYqgmVgakk2QdjkXWzza8N4VtztWVuDaiNNst4VYkNh7o29WuW7FgAS3gx",
  "key8": "328A8g3KnfjFGi7ayJ2hx7PeLAiczuS7n2vbE5UU7T2fuJ9mUaYXzsHpXohsB8JCxeVKqKB3Mciui556CCPysyUB",
  "key9": "3pjzAi13Udeb8zj4MTxCbLuWBfYbyZF3tnaBdkMTzYicg9Q66PboT9XaUCk4hbGV1oD98wh9FwiNpyfQxNewn6Ta",
  "key10": "pNiLXPvKAW3mikvDsSVw7Xmag9EpsCXQuijSRzpiba6h85PBEERcnfTZuGPzMwkaB7LajkT5m2SZxy13xjcEEau",
  "key11": "4F3bZjJna8xvnZVhMYwfXhvfVafwnVUw6nHo7yGGD6yTq88JPbrjZMkAgQcmgeiuUey4r4mYhy53Cy25GLtL7wYD",
  "key12": "5DjnEaxKNToyq4dPpSQk2zZuHFXXjYEJxe8xTtP33vSqjbBBVpEbXNrdjmzBdz3L4c2WqZgpDsojRBmwMKX5JBUu",
  "key13": "2NS3JoR3hiVPP1SB4xTVpSZ9wKeYy1nzoDfB1vm3nKie1pKpb2XmEYz8Ai1ZG3C2hZin928xXBZ64WyaHqGZKRr5",
  "key14": "1HV9QxGkKUago3hT1ejpniYwcjBstksywyd8eoQsXMrCVHaAtmFE1wq3h4uXGArxu35hd1C8qeSjhWtinTTGcGx",
  "key15": "ynw674ppjj9vLrMoSz3fNNimkv5tXH8fv8gnnxh6BhgCDkKw1zxi9yqEh8nUSQtTUALJbHUMwnLiuqyeD42pm1A",
  "key16": "2VBkTZcnCMM4CNLYqSaMzzBNtB7HXzWCSHEuFVficqfs552G6z82B1tmvTtNzAsEMQodYrmYs9GCz2iTT68obZxR",
  "key17": "5DMNsifVrW75x74QHXAaTTgG8Z8pwgcFG66Yozkfr83eAaiCJwunTXh2hRuAkzTpry6Ubgr3RUjKdrNofP8DX2cB",
  "key18": "5p4MiyAdCxkWeFXoiJ1zivg5TCNQf3EQtJqwGwvJDnNT6y8RTeLYfHfoiujzKKvQLFxU13i2QtiuwEEWJf7UCYSW",
  "key19": "3BPVYiqNXCorfE3u7nw5oRXEiMWx4G785W9ExrrqBzURRxJp5wdPz1MKDkfSfRfowhzbNQzKzK2Kj8mDVNpWwySs",
  "key20": "4gtYRnADGHwfT8Qe6iy7M9bAyFwkkebfaiVC1Nb7M2zrzkgUiaP4bZemVwXMQuWHzRT41K1M7WQcWwYV1QUEbTyZ",
  "key21": "2vkFkUbM2p6tP8UHHcznEWNKj2fwrYyrE5NWi1tzLjdXLupvdMkKZ9BWfZxQUWAb2SwhpUXBrAj7iKkkuFu68w7j",
  "key22": "5uezq1TZrxwKm7Eh6QY8vV8trRikjvvPcugjD5ib3dArAthY1iY7pLRu8xPMxNrFcMX3o18gyuTa14Ln1jCLFaey",
  "key23": "61Vp48SGH67Fb9Q7yvoV1Xmc2Mfb29tWm5cAcaXSdBSzR9Uzjq5yey6BRKMAUhuA96jw7e5v5npbQaazEeQ7NYyP",
  "key24": "3Ae5gFbabQRZk2CDdog4KoMPMEzjziW5qnMNWUNx1KHKeVHJj3yqSR2YXv98zCSKRYPS8NqBav8jgF3RHyT7mVzq",
  "key25": "3ypMzwac4sqGpzs5oqtv7r4wfcU3KszsHX366iGVVjLF7sysHEY5XiccmNyn5LwRK26q44ZJVSYM1BRzLLFd5N65",
  "key26": "gfz9fZ3Hap889CHHHPvRbXc9dgCxfA7Q9HwQBoc692EF7332Efgp6rBcXGbgvbZqNveWd68DtkjXJ1MpcQqPbjb",
  "key27": "3mnwzp5zcxCZQcDuqKirgqkbcm4g7mEx9oQexAdmgykBooHDTQCKAFHB8s8hGjRvrvVb3KZ5dA9rfczcRR1uLYsD",
  "key28": "521za3L32Cih8pCPRnwfWFuZ5CXiLGpPUDSGVsfEhrv18t5sJVyFmAJNunWnr7ankxmyKpArYTsWoff8cUXnDvsn",
  "key29": "KWpibbBa4iQFFgjVtmoqa91caemMwXMR37i6JMgZ9WqEpgkBTLyc8UH1otdbte5kc6STsUDPfJzEMCe9YiwPEep",
  "key30": "2J6NWFmXVPDpS73odDV5tf43GdaN1rx1ZUXu37imgcU5bQKQycWKcDTsr7C34BBSNBjHJaPyga7MoRamqAoTM5ZQ",
  "key31": "5NyoBfwQ1g6avEE1y1CdWrhVVXXY61yc3rUdYRx4kr4ehb7hmMPMZQm8bqTUECaxp2vMtWarps3ridBdzAA8SmAH",
  "key32": "FsREVTyUqY1TS36dQP1W6FfkNz8DmdpsPaenyD4ERJpsMjpXwycLVia7exsesgCVff9gZB67tNxznXvdtgsyfa5",
  "key33": "2M5W7BtifDTRLh4VTfCB88Jwo6dazjV91WVgdeQT8EWHpLPbDvWxthQYYcEJ2HdiHm5U3xryQb8UGWSuGuZLtq96",
  "key34": "2SzUq6z8CamZyqgYJ4Fi84P2fVN7Z3bccEmoz9jkDpbYL2Vgp9qkEyBDNb3MRyFeK8GCEAZZMZwD8kYx2TEuhC6s",
  "key35": "3zGi2hQ1rxs1nuVRujDVoPZ426jbUAgFKV7x4UDXot2pxLTy3ZiaeYyYf6GSX4wnS7s8hp7qEPSnJpFdBXXyw3dZ",
  "key36": "2X2k8i1dp4n3vFJcTH7qugHykN4PTDMMGp8WiGs8QErYWJxuZgcgGtARzoqRuvcMq5ivSTA6LwCDGUJAToxP56gt",
  "key37": "5aGpcJbSLq9gQrgLyjAnEYFGCmLpMXn3uNFeEJQjo4ZQbfMc4LwWCiCR5ywDE2tdwLVsBSaWAJhogyCYKCojCjxu",
  "key38": "piVAFZWfSsgvzKsAyxEoCCcJ59BpWNUBpHaxS9V3yAa6A4s5Y5uTtgbmT1EDJCDjb9LAab3F8m68RFF15ZFnjCU",
  "key39": "2yGj7mfyUCvDXru1uuzw7bXk5gXxsE5rpBu85n4gwi38E67dvfLy93yapgR1hbAYxjDLfyymaYZhHkVUrLTzGgm4",
  "key40": "2XZ6iRpYbzChvFnVDNPf5kGyFwzzeXt21ttsjatoGt9EU9sNqib82fmegBVrdQ7qc8zh8qHZPb78yXECcPztabmB",
  "key41": "MFGoXhuxMGoWsiQ5Bv7KdnzF3JWmTD2rQ5p3dQhMhcLZF6bSu2s6GaFZYUZXjXuK3Mpvm5FYYr86p7vM6JyKVRT",
  "key42": "kiDWSqntE7wQnCpFSqUxzKJa6Y8dGRgAnaXiuuG9vB2QdBG2vZ34fjq3D41oSL6KSyHFYk84gvzVovpmH8TRerT",
  "key43": "5HPmuL6jAfVZWTdPbSzUYHHGf83jyt7ucqW4VDabvL4qEdV1nHBqtdxDGvYsoVz9f1kPtsDJHwo3f55qsCpqPvNS",
  "key44": "41yshUkZZ1WAS48HWDvbnFDE6SU5Rwj32s86P39p62md8Jz2i9Xwv8brA1zFfP8Q96KZDDAVnL7LVr75TQ9DAkep",
  "key45": "63dfyav2Bti8R6HBkJZg3PNWYLfvVg7VctBU5xvQL3KBtc7cXKXG7kwiKZo6ETYPWoKKQk71fhzkFZqqFoQtyELy",
  "key46": "2nRZx27zPoyiyn36tADn8Xo6NoudQcpvifi4r1NbUHqVHJDN9Yw6oBWTqyCVHMyswFMcmzNUHgZjYjkbNqthu4UA",
  "key47": "2Wzvm4udCDe95hNVRZQ8RvLRZmjScEDPsNYJvL6ZCkTXX5Sf85oUiAZHrLqWvAYt6wu514APCdSNeJcCTPETcTLz",
  "key48": "2fixby7LpadDfi4pKEmYSqs4SX4fCJUKe4QsdHkDNq37HGFN1d1LPVCcY7BHqNzLVCxm1ugnTMaUpY52tL3zoAEh",
  "key49": "5hfbdLeLvetUy4aouFFafqkKvmPU19eHe87SESwz4GPZXBeXYBPGqj7CBJhDAoHSnWM3LuGmN2RLK8uBPF2op9MK"
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
