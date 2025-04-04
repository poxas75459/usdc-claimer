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
    "ab4VS5yZSBpGMvFsEP8f6i3rtbMfJmkpfYJPZesZP6wEqcGrNumWXTYLaMWSuZmMGxTg4NiDcPbhEk7Syg6RTN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8xfCNwZGgcPFpztBGuQsPTPo6buSHCtnK2noyR1EwCNe8SK5DZLkVBwaW3K6k58xLqhqB76yu7e9rXjSBcgqe8",
  "key1": "3KvmxYhXK6NZKn9aoSx3uEo5HAQV6TttwfuY5v3coAQDytB8rbXn6DbxuSNXkikPasfHQZQpR6kmuPtB2kdFpfbh",
  "key2": "2RAYQdfu6hq2xsUgu2Lfaz4JnHcjXEESfnYrCnFkypMLS3z26r4Fwf8YAz6P7rraKHvwLfZytoKz3wdrq1bVwNY1",
  "key3": "59BQ1sidG8PexedVPFBNmBUtBRUgnvmMLWqpHW2ZK5h289XKjtrsV9BCcGnJTGFc1VA8QkUkK7d69Vsrxjaf6mJ4",
  "key4": "4ynAEPgtnij4wKFddnwWeatMx63yY4VJWaayUBySSQxoRegxYebRTFCuNGrVcXeEDh7u7zJxSbpT5uT4zSRHKFvE",
  "key5": "2t38vHZHX35dmF1LdK2CprNZ4xVRz59rT1hBwniuhFP8YhMGXA7PwsojpYaJXWhKxiEWo6s6xVSwfq4r5Rb3nSpL",
  "key6": "2sPWvEWscPGpBuCJK3FaBFUTUSSyFr2boZsQsBhJcx6Dk1oCjDJbNwwZpCUmBoUC4ArpjPWAmMDhhtzr1kBmho3R",
  "key7": "xjnsTjNHM2vz8MDR7xdZan81onKP3QyQqW7MWYPVeQLPKnp3VkfYuHHN629zjeSqUhHp6B88ZppVUbLp1cgg3gw",
  "key8": "5bznDiGQFe7rWJb3GZiJmvzun4fM5tMJ1ep1GzSmHYpvaCkfUTtTf3oamfF11a3KuQ8NNjauwvKqGPStH9rvMb3J",
  "key9": "3eqRYAnzMzcjbYqQRbmQjp8HkMst7SQ2uo7jXbw3Vzeqcr2UkgVniedgob6gZaw2KnCuq6EdxZrHZ7iyVkbY7YT",
  "key10": "2ChfK6RobVFGRcdSyYp2c1ek3J4yAuqJsHBv5msEur3uiGcgx93GUZg5KstEodxzCCL2XvGPoq6uNTBi2scdGFgZ",
  "key11": "qor7MksUe8cK2iu6BPdKEKYP53dBLsgTUVGc8U1nYEaWvJVYXUPn9bHDCNWPTD9bRgPf2yh8YWhHDY9kcCQdK65",
  "key12": "4pNvmTjqy3d8HutKxKKEveQzs9yeGetzXsmZem2QZKveqeNkqKr1griDg4dUKqz1sVB4ywwGxxWSY5fdQd3o3sYy",
  "key13": "33cT4R2NtPXYsduRRQjjcxqW8fQt3BRqLhYAzXMy8N3G1B6VZ2VYc7CdpnWXDTPFgx9o3KyLPJaQcSXPfFiU4oqB",
  "key14": "5nYXzYKbJkKCBqbGt8GbmRAwmPx96dW1Z7RhXvbWjm5sFagDMFso6rbD2HvGera3qmrTagkZMqNWqBNFgBbwBA8n",
  "key15": "2v9ZQWeXHNGcNUv5HwbWiuNxj1tzNuVjQGFx6LF4ScpbUWpZo7JQMgTTg1CzzDAt9SdBgWxgvAob1LxfSkt3Cbdc",
  "key16": "4nt9Vrmt1ZQyNDm9vab5yqxLdoF6fUZiX1dkUuLNxCKK3rRiAf8NQoQahHowd6HJGAXZP7cwHiZ7pXqKjazscAjx",
  "key17": "d3tgFueafvqxmDCi3knqvfSmr5cCK5bi8pDkgPnGWmcwaAZERFXjZk7jsgVHdthem4otwGxoENWdzyMn2ZHLzVH",
  "key18": "4Xcn9aP7CAKyZxQNokuwQmpd81NDWCZjJBTDB3bpfi8eWefz5vbDNeNpuzw9mDHhwTWWeppcici35nmxAy3Q5A3u",
  "key19": "38sW3hiJGxnPHVedMQt171zwvUattqE5i7omxdaFjiyQvPWtkK8qjy45BAqv7t8o32iNsfMYuEJdZJAqvckzA2jF",
  "key20": "2Jt5LfJhoceZvrvkJwQ15mKZzs6ZZyCkoNsJKDWACkr6R6xHUytMecbnZ189EnKjp4ir6coQJhtBQ5jrL5ffTWxB",
  "key21": "4GTnd2U6nUqRJULMCe5fUvXSrPDvfV7XmFsKVioWdi7UPvzgoFXE7w99RVqM6HcBoTV8tKKQbR5o5HXSJ1Zyydft",
  "key22": "4uSXw11ReGVRckeW8QiDexSAKmZQ9FCBSiboEAL3MLayB86CFwBo5miFm9WvCBzgBzvNYiLaMGDykjHwNqjXmuc9",
  "key23": "63JX3UU5yNYYCBn1DNiHeDH96j1PsZwn6U3mL8K8TWdCwUNJDxdgu3M8JKLocc4Cs8GoQwWzeuk486YXwkk4AfjD",
  "key24": "4PEmjwj69AAYhiMyXUct5t5Mt2AcXZATiJ8suo6bB8wEEPza54vZgPwQVFdmor86sxmaBxWAGjM9Q3AkH9DXnWRp",
  "key25": "5qG6Y5gyhB1q92dHc3ixqny5CAZBWHkp3wTS3wmeGSDMLja7EfaTSfxYtDmzqYnZtkYz9wcrj4bN38gUgHqt1yCc",
  "key26": "4nmCQRCAPxXtvG92UTaeMXvMjg4PwN5nNAwQzTKxJXycH8oe56R17MpD6LZLdSSC9JBJHKvQec6LgafxfifFxpyD",
  "key27": "vHJaU1RFmq2J2cp3Wf3zHByKD9xSdGtQRgoabXH2j21Uu5D6qDS3pTAT2HfWYbXtapYwrz9gs1zVELWLNrTdKbs",
  "key28": "3NiZjyc5mdFFgMX2V3hsvf2ad3U5fD6EgbWHugazk9BDngWHYAHxF8KKRaEroAuVuGntVpN4mArsUwbBEBx46urp",
  "key29": "5FZx728TrqU7V52txSP1yrMzgsz44VkmGeVNZaKTbAnai1UpRwkNGVqRy7vMb3PGzH8ZSzTaXqiJcARjRVxzAyjX",
  "key30": "4FJ1v4mgpvEZkKrpawJC8s74j3PCamH9enE4xzgyBK6QjwWbnQ386VtriC5AdKLtvCLD8WSf6MUzDsVm8stSNgE",
  "key31": "45y4d5YoqFJozYTNPsKZ1DCtZpS2bugFhgpkybPPDmzpEnPwer8mgcRefZwa6YqiqR4f6F9xA6jUaejxqcjfgQ14",
  "key32": "65SRz15pz7344vQQMRetA2sHYG4Vzj1DvUsfnYuW13jSG6mBJ3sLkpJgKjpunjjaPFZLDhPoNVg3iY3GL9m4og2m",
  "key33": "5VquzDnH4ZcuMeJjNZ2UH5Vk7kRVieBHVTcEqx81VDiXbBeKm4GGschmr75H3X7XyMURDD6S5sDCw1wD21iV622u",
  "key34": "5GLUtN8Cf5qw9kF8z8vSEdjSCa5aWkAHh5NisvwzeNDzXvqzGG2j83t3PTdDA5tvwoFEkXWsoZiLKL26jmf5ZPCQ",
  "key35": "4Nw93eU6z6dP2N5X7ApmsX6bWFpqeAA11rbFsuvaJKAp4FHVELsSoHYmgH4YDfcS7sgeBJn9TyAFfhoAGUL3LwBk",
  "key36": "51BLZV9ja1257834kyhBZA9wVcTZyKDfnVuys61RnZvX74h5bBth5ArcHxuh1oWkVFhPsHKvxYGtxFKiyrHXwrwS",
  "key37": "2pbViBqVMDdRCxXrFkLfYxKnsbK5xNHZzFMsPD5M5wek4aoDM2BwLM9Vf9xDnFUQL72NmvNfUF7cVZWagvk9iM2y",
  "key38": "H1dU9rQ9TayzVjMJioUT2Sy3AL2WTEysNVe6KcBKVT3ZAByHnASXWgtyhKWnsLLfqrM77jfzk1w4cZA26Pixgz2"
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
