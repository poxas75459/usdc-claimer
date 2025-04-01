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
    "2JX59GBjQmwS2LRR5r4nP5b3VxRjEjsVX9sgGpoSWAAXPwJZwbHhJUWqLKLpxYa9M3oe5RmejhaTfb7hpRzseMox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcFKUH2moHTKxJLGkNtNWy8rVQRaX2YqQEyG5eug1qfZP6viodWgewyuLX1xJjpgFDYtWUs59qfj9ScffXji6kq",
  "key1": "2um8t8HBkGqsGVxVQzvn23vgotgREBfG8gfHRA3boPM8peW7U4BWrWaWbxF2Xs5zfKfxcDoG5Le3nrWupM7V161A",
  "key2": "EdTAbMftA3PKsqKC91JEgiEnh2jZLJEpczCtbehV1NxZdYscB9kexrsthtt1SfGYFHksVnVoBQYTc2RPMozgCRP",
  "key3": "22h81c7mH1bBeTqCkuJZS6fcNwfjgB1zy8RfazJXgQxCgBhGbBXocJPx4WDXTvcPDWUjyXu74ZD3oyxcme3dHYbd",
  "key4": "3V9NrbEzTDfxX8xJRSAduYYcXwQ9eet9SGNbVA7Yef8UsajJ2Qoce3DcuvnpbLbWq6Pt2onEPAKRGo6jFkNGkHyJ",
  "key5": "3rZ8xUDCwRSCk93rYN7d1BqBPaArrReb35x7hdgvJaskWFz7EkApAsu2JzpjksP9e72femu5ZMHpZpz6dGDUjXJr",
  "key6": "gKPRqix6NWppKyb8JxfMmbaWYQunkbWFAohShwyLUsDHtncN3XD34wUGmqfSnHwr9pj67BvzWpwSyk1zdZGQsSS",
  "key7": "RBYURhz69kNdsa8ivb7nG6bRabEVq5hagBNb72PLU7qq4q51fQs5iYQsHktKKbFHyykKBRSvJexPMhCiX4iNhMR",
  "key8": "4WyyBX9mARqx9rWdzD63ZgcUX1ua8WGExsTxrYCZDLraPYCZbGdDBBTbEXMHk8b4CjPdA2YKxBELkDec9qzhbzgs",
  "key9": "4knZRieiBdVUHRc37Q3evDS3YZQfPTbtmmNukD85U8TxsydQMBegy1aZuseLp5xChfMa65iRvS1eyosY5ecaynhq",
  "key10": "XrzNdVwPhSG9r5tJ5TkBhpQL6DR7Vbe82JpfnRzt7iqTDNDa7CspnDgRWRZ62Ki2X5Jfp2Y23Q5VRQhByzQojkQ",
  "key11": "5vXeb5zfCPFYadfbgHGoz5mHX3yyMzVugJyGjFcxBoND7R7S9GW5MTQE1cU7F53RpM1orpdGHyudFe5MiWSVFKZF",
  "key12": "5NPFPbpSfZwpgCq5HjdN1f2TvUvNnPsmv1aKZs1AdbdtAvrAa1YpRwD621GGhFjo1UVhnqRDV555DM5AxBYEFgSH",
  "key13": "6nyv5tU54FJzkS9QvHRapkFBiN7RhkQwUwfAnQ89vL3ouJGe8dEDHRHew4TWsXPg4VgD8UmzmyYcZjWKVaiqD7B",
  "key14": "2KJNtLWhWmiqwUXLxDR8CdrH7XZwHukvUN77L68QPWhAfS3gzN1UdwR2r8CUYAncRX55MDFXGCVNANMpJHyw55FB",
  "key15": "4ur8eAygw4zup3dfGLQ1XjLTm64ZDBqy8nnPiLZpC6teLzziEFi4kKscAnjqapiHbEWiwTvbWBFXPTZrKbfsuGNJ",
  "key16": "CcCdbyqLeWdpD4F5H9mGc1eCUimfJqJZtWapgFv7WuS49K5DKyVNiktfTM4Aquh4syGpnuk4tzy6kJdPy128tLe",
  "key17": "3pnuPk2fyhXy9Q6vh15XwDGA2dCN1Vc2r2qiRm2eC1irUiQ1oYCWZpEwVVnv9dGZqTaxC1F5f8UPN9qJyAon5FG",
  "key18": "5niKbFKqMEpG9N8QSEzg8tudwPgoQMAJPbBLDBpo2g2BRwCMukayxYDWSCbkRYHcrigjwM71A8x7zw64fje29BFQ",
  "key19": "eBsRLcnsTKuLfJNLGjA9vaUZSpmCwEtX8QHEaQahw82by7j93oKbjNy6HbttX1D5fqRJ3EW8Bz1KBTjHkF36S2Y",
  "key20": "4Sjyojh73gEMMpR8JxVhZEgmd4B16D7YqBjjS1RhTs9u7DK7TC3NZRoNLijf3bn4cwu2wFWtQAKwN1PCZeRbDWUx",
  "key21": "6192HXPXJzrrRECSgeVxFb9vnadMKYYeHeAmFPUUBRhLU1qS5XHNxzUjvbFj1gnqSMEtanL2oC2p6x24TBBwa3NP",
  "key22": "5bsTyv6hgfZPq1peSvHZTQL9asjjJQTNibp3KcfuPJVZ5nGSxxz5vR4eEiWbM12qp8vC6ZKyJHQviGM7Qdm7jcYj",
  "key23": "4CzPaVnuKfQ8vz256C4LQpbZofxpGsgbvosbDWZ7z1cAiWZpvELXj1eqNjhiVjjaeFFj4NpRVrLcQ2D2Zj6qnpLV",
  "key24": "gbawMj8RaEBY1E3BKHqiSs8AmU6BeTgkQq1nZTgjMZFMZXXJLn87LuxasRVjh2SypFmkb3icmXiT45nmJxMA2qk",
  "key25": "4wXZJRwXMfdRWRMfXqPU8B3TbHQxrf36vwDn9GLxeLc88DopRJeNTyWiqx3Ht7wni4asGXLB7KcfqWYG9EBtGFPL",
  "key26": "2AF7jQ735N49xJwZMbMrHdeY6WzCCxDJtLFmVxF61vWX4t8UXhAUizCbLRShWCi5ALy77H5r5AfGtUaVx7LJ9vA1",
  "key27": "25MSq1UzVxfixrQu3FHj27L2JQaRzfTwHGndPCNYFFKRC1WyTeJWwbSTQmqacNXnFoCTGujqwk4MMTcnzNd6nEMw",
  "key28": "riA8GVWPfpnZZjRLnRbiHPqEFknEq38LjMawMnx8P5WeYAiHGEDPvC5pLKTV1b8RZS8X5DSSuZos3jXfzG3SJ2n",
  "key29": "25GScXfmqZf5WQr6kDqbxNu5tS43S5wfR9V26RxQH9GX2eUm2S2xduSzA4S5AEqdmRs1RTvp7VEHeXgUoNuFiuj7",
  "key30": "4w6wfWeVhp7GYfe9jUfX5UuAsHLXEdRM3E3BbroHNj5SMSfCqkFtH7tUtPtDfMsmAHHdyYpWJmQvHmTKM4LrMAFq",
  "key31": "4Q2WZJ3Z3ux3peVAGC7m2U9h3KU9LtrBs4q3TnZz9HqozYw3vzbCALVbMnUtRWMndL9DngCKmiegLsGEhy8zsj3L",
  "key32": "5e3KbuKXnGRivUG5MggfqxBjr5snKNuK4fDqBtmkuydxiQVUPNVUk5cDQnkdnLaKSnETPhUJtE1bBMT2GhvoLvy7",
  "key33": "3wgGDgsTad7toNiURBPQ1hrx1R1bpVUQxcYUSnZGQuRP9RBTP224pZkgLXy8wFv2uTSkcvNX2ARHrcfYuoY6C5i2",
  "key34": "3WqEfcU9fm8zA8sLEobz88Mcn6V9j18xfFRZGJzFtGgqjFErYVFjSHyokWriytgB66Rv239496SpkX5zEyppB9Sj",
  "key35": "5RsR3hakm9LbWF3cGaYPMwxhZmq65gpD5R5XJTK6TJjyqEF8tqNmkkRzW9pnqbRXNqFQ3Ecv9Ebwearyt3XYgtXx"
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
