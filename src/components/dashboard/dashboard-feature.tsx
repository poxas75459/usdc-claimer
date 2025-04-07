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
    "4SY96sUFepCNKmE74HJtWAuEDJ5LESVC4xUEzD9vESbuf4XwZZNob57tUJgaLExtykJj6qwYkbc8mw8fhj5fwxrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JBmNY9EVTnsf2p5brikz7uorQr2oEFShtCD6HR6xegHNLoYXJMftQdVC1RQ6uupKMx1eV4Ewm8N9Fmq7PcQvSRZ",
  "key1": "3bQGrueHzwxMB2UpQCQbfDnmr4nPC4N2QbqcM2FoZXfLYCfZ41xwmFYmScfNkMScSWttTaPYtmCNsHiw9jeBDsfo",
  "key2": "3t1H1E9K6DdtbMTLvqx3J9i1hJYLECDkCEbUoYGvRgccGctByvMExkjRVX6iDjsLKtrEmWvvdF3QEhBPvp8N4oHr",
  "key3": "2yLmBdCKQzFwXSVMD4poyoMunCt6zvyS2ffUg1poVpvVGvjwyEdMx9SD5dVLLuBu3xZ9etzJfHxmmDagZTVZd7K7",
  "key4": "2XNZN6Z6nkvvT3mtoJvko6cMkXDhqJxPrQa6AeASfQf7z82A83QZ64f7vFZvtiz5Ss8XpzQsuu13CNqoRC2PfWSp",
  "key5": "cLfFVNgVehb4j2HAPwAaYPTB9bh2nP9cpPnAqP9dhBSJVPC3FZMKKi5Joq6WatWRM64CfMvHpefVZyTrtt1BdE7",
  "key6": "3yjddaoaTN8yBiu4pcZxFLSeLyWEseoV5JnvqsgzJPUE8Yp3pikR4gV8FEVEJEL1P3uf5DKDm6GXPaqCPir6eRHQ",
  "key7": "4uoaBnpq2HPwJCcxvUu3CPzMez4fPbrucJ3j2yh4GFMxpy35wwrYYrkLC78GPd3HRk4VYfebkNtXPRVjhDWDJbjU",
  "key8": "423dhoK9ssLJXhYAxGoQi5ZreFtUnSwNVa93ZNkVgqoyEXyqCUSVsGxDCGwh8WEvSVBnd2qekxL48JYJT1JyFisM",
  "key9": "2kMQFFvLKLFuhoTNAmJj9PPm7ubQA4vFHtY6GMKCXSmsmMECfMhxLykaYNC19tMrwdRmhbKeVWj3oggS3RVSdDW8",
  "key10": "4Ne3xVcynTRA2ktGGCFzpLKixGZF6HxLaF8bi5vbxF4vwMnrZL19DLLMee9mZezugHGT7UQRwkmJsNEooFqg2WF7",
  "key11": "4nSmzdic65dbbTECaCu9CfWh3MKPiDCiABDASJ3FFVYjoJzJTkGxCiaR9JvyaZgag1PKP9vVxctfvCXPeFdtTJPx",
  "key12": "4aTzAX2m76iBHMnJzUyNhTvuj1AuUF1K7CpzvNNTZ8fHgeTwiBFFoR4SgjaFwWz3N7yrZxZNdtNBg225KUe5H9Zb",
  "key13": "3rcc7YYkrgaoN8SLBBcJrGqLh5jMzo61jE3S6tC9dqNTdzunJ2FdEFN7QbFSfVHqViiERh21hMCux1tYjgrCyhcn",
  "key14": "DSUBWXoHKwrjgiaTxkExyWzuVVG6qS9VowbpSWT13cNCD5YY8tuqbzkyfgAhux3VUVqti9da1qMVUiJmBK16riw",
  "key15": "4FCNAwvAPysSakoJbJTjb7PnPvLC9mv9w4ENGSBY9NrpggEA8TkDJyjJWKM5bFznNKmfRdnqB9nRLHwJoXy5kPA",
  "key16": "2Aft5jR5TUi1WvkjPMsQxcLBahyfCbZhjms1rbjjh2YmJT7Q7nLRP2jbqpd6KKNJK8L73TiXsYVDeCdaXkPfxm2f",
  "key17": "5ZmeAvXnTdZRuVsKtWqxER5idLPoBLxbQfWpiHDWHpQ5P4rfbdB9sQF6g9RWNExVxxAyS9x4M9nW9sDWsnEUebu2",
  "key18": "4K1wLpDkCbqgawbn72mcHC1Pwn9AZYJxW1CPtgxPqzoKFfEw3N9bgRMCPDXbP1F1eGG8TyKKk8i5fTWKp9BJkYx9",
  "key19": "3RnnboCzCgCuHLXVbv4WfDAWNFryxjaKMt4Z6fJGDu8wmZRB6Cj2GTQ273jvw2jWLSNkqpj5wKqACXdU5Xw8Nyx5",
  "key20": "JE7L5MWU9JyxyqfkmchsuynjjcEauPAwxean7P4bjYArFC8UqJ3xMdXP7v9XU7qiaNhHAkgiLMVoL5prBVKgtKg",
  "key21": "4SPoo3WdMNn9xUNmALdXn2978qFW29ThbL9fqFk36tDuTBhX8K27iCN4QNMrmBFCp8StyLQrTvrhM8JaGiDHrw8p",
  "key22": "3Vv6BFdyjjdazQvV8VGWvLMFA3hakDB9q6yjcJkf7gqE6CEmc1jqhqShKRfJFJTemftScSx2bBPCgYL1yHafZuzG",
  "key23": "EBrUSE8CR12ryykmff2iFTdq35r2njjoBtHjp1mWawneZTVQ3hB1gTp9irQUm8P4gsByLtTGjnLoaDo5D1dTrqm",
  "key24": "22YpPWxE1WWA9gMVpQ1LWvDmGFPnV4AsJDxgFcyhuqojUgPUH5fxY2JdwGJqaUib9jSXJ2hZa2WU29QQVgcpcpKE",
  "key25": "nV9FGhhLRNg48waNhdsTmjAJXrPmVWTWb3T7Nn82TiJvVm54MmP68E9W4XY5P5Me5EHQeVRvCBF7pQ382dhKUhT",
  "key26": "2tDcKzVg14NwpaSrLiAsgDQ8pk23iJxd9g92eMBt1MPNZ2hWX65BZMdZYxazN3H4MJHrKh7uVYR8LFaKMo2GaEcb",
  "key27": "5eFoA7Fnzg1GNvcnLvJmM1M6a3266eusbgQvKcV5dcTLzDGwtb1j7QWKkWHHMp5BGrBQFBA1xyY7geWbdRPfpJhN",
  "key28": "5tBQFN6os9xfcsMzwB6CZJo6F9qVhPSYoYk1nAe93p3DSWShUd9fizibunZ1gPTef1VgL3GMbsQu2YUF2nfr4Q54",
  "key29": "2gyCwjRNkuRmyqg7Wmm3QenWipaWVccSLvdUfiTFwDQvfkeYXdSFYcXepX36WFajTj9KGDMdZRFovNMk2zWJ7qwx",
  "key30": "3QbYLE7p1afadqRPu4TECBnxhMSsBBxS1rAsKY6Xa61uotTjKQJyUFCtukvYh8g3vF9cejKot4vvSA3bW1tF3KkY",
  "key31": "bn45zYWuaxzpAWQXj8jHBW23k22q945vCA82B5FjMjwAFTwEN9ZNXEJ6t5rvrqfkMFfkMqn7sXRK3DBfPyqcfW9",
  "key32": "3kLnN5pWhWcFnxg8q117Z94SMU6a8TMzkDVvHLmAYdJDu1bsZfuxuAhByzTTm2Q4dHEAbyN2w7LgCMhdTy7GuuCk",
  "key33": "3Rkuwgy62Mp46Jtf9DR9xpuHLC9Wm2DCH5bJuSxVxKH8bxJAG2ZJnzdCsVg55GsddKeFoDvAX57err3wAJs91dYc",
  "key34": "zgtdjUUcMJ1bfefZx2owHvijH6q5MpfrbyxeAU9EVViThSa4BdD7mXqA4jmpsWCvXx6R8EH6iQtRihNf5TCYQwX",
  "key35": "3GebpRHm6XyKpxKaiWMtby4EtRFYrkkjba2BqaDyzL3i3XBCcUx4hfbi3hZf8NRqoJwtUpWkr77qitdwAvyUBUzK",
  "key36": "5boE2wADPBZbDVhEe142i5yESCXmDKvRSJS84D9m7xpaLPBH4oEA8Exba9DHixA9LG3MVPSvGv7ZbmaQti74PCui",
  "key37": "5M11LMkZyGER1Q8f3ZYLWk44YiBMnMkWbrSDwfiDCQBm4WyVgwJzweMD75keapA8Vtu7tmqSbX6LpxRaF9CTMnhX",
  "key38": "njfFBkJpe3KhkVdWA6isubA1PFN9QLJraz93YwC6yk4pVuFzR24U3A67x9wcM2UpUJKRJgBHpSfoQcjyDFyEjnT"
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
