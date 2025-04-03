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
    "4BSnz38LHZaiX5jcAYNURaFyPqNDWJX28ztbBQUgagahkGtA896Sh55ETQpPX3YHDgU7pobzEL6Vzd1LLotUCLgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXf2KBz1JcMuPCRijWbbnBaV4dxeTYkzW3cHRZTHyHQpExpBBs1CtJhsrpQkFmZ4UjV16nHNSBwNfetNVoABBJ4",
  "key1": "dbgm2H2WGReFghHriJDL8kiKJsATYd7qhygtbE6HVSWp4QTawYojZmP2fXkSZBWcUwt3sRDuwBkmJhg8R2VGkca",
  "key2": "5HjeDNGkmrvuXmz1jB62LxAXnDiguSqmE7pRKvGamFqfcVX7mioa7AEPTDK3NFGATtqHohM5rnjZZ5rKCAczBhXd",
  "key3": "3eg4wJ9LV9brCVKRoKz1WLonepSyxuMEgU3nadgEZLvPawfjkAeN7WcsZCjbwnZm6qHC1McjDKZ5USdP4SpGcQZu",
  "key4": "3NZGXkxqe6ws38Y39McVYnbWfgj2M2ab2RjrubMdDNocMUSFN8TYbhodVF9JhhDnKf6m32bVLPVmX15gkfrP7QmQ",
  "key5": "4j2oFfFNmLWNxj6BR9gAwtb7r7hCcLFSEcRqXKfKjV7cn5vSGhvEBMv8GHnAmvN5Aj1PzVU7cgabzRjUHvXHeAQz",
  "key6": "GiapdbiKcqp5KczYK1py2DVB7HzrqivrFFmiqAm4E86RkeiiuJGBmyVCLBpeZJymP4isa54yNYYZXBkwXZvkusp",
  "key7": "5Bmf8TFELfM2Z2Aw3JS4pzMPxHiDe5q2LowS8DAkQH57DTc8vbKFZf5kUkiLDK59yjrMnckkbAWW8vsop9QktwoW",
  "key8": "3sSCcwWYwKmBVmseKVwmTmZHsPoJMB7EUGiwLGDec33HrZh54v7RQcww9c8TEDDNRBfYNr51UQsH6CijJ5AfhkcT",
  "key9": "4KyVdaCGW2AeSRibfCfeun5tixqYqGK6WSha8mn7ZTD3sbC8xbVhvf2H1fKavryNxhxRn8nwZdwgR7fPiYVo1nfp",
  "key10": "3vonqGECTn2sZaMz1992HXPcmHXVqehnBPkCUA2y82x5D779HAaLAXaY59j3RsK1JWTFDPYFWc38Jd3iVGXhjANb",
  "key11": "3VTz1N4EEEz14yJrTVBBv3XET31aiQUFXzKR4dLpnjKFCR5FNXxQnjZghgEEdWNTPoNktBXJV5kXVp4yZW1sD7zv",
  "key12": "3u9aXHPuQ5WwRGQpaGBcKiJ5U5bSohiTg5kuPz9YzX8hja8FJ9fAmjaXRXNn91ShGB6maEzAoU1ZGp9guVh1jgiy",
  "key13": "2Jh1yecFrYLTzdqhciU6M1rCrcpnkDKrB7xhXZ3yN3XCavwJT9tg56XWhfmoZK8DfPyKv7UwFPMWJNVaBC2uQ6DM",
  "key14": "4s7fNbhmn3CtfwC59idrxwdTmcfRD5C4KRSivTVX1BP8x7B59TyBbeQLCWBoqi8cPXaHu7k4nty3qyy9WvRrsTPG",
  "key15": "31ThC1aMmhWeFdDqFLXH1NhCeEmknRziMpHeLKnNsd1KdUwTTYiPr21Q2NSXWB27MPAHCcLtLofu7wztLyg7JRZ3",
  "key16": "4tfFq2zccWR7cz3hAyK8FJr6XPb5ofJmJa8C3NfVMYzimqsQczR7A2P79hNSLJB72rxjCSC3LyBVszwdnrW5Jim2",
  "key17": "KrNRbLpJLdo7Gza1SwKyD9hE8uJ3AJU7mUjS3ZYmUmxYvAJ8SRtwCnZEJkqQU9KzsXKMDKzYXoqKEjMHKF4TCut",
  "key18": "GeugGweZphQGwnkAmzY7Cf4VLpEW4xXygJZZSNtsTd6GgZ5SkwzMbTaY8QHaA2AaRmg8s8N9Erfg3h8Fm2br5Ap",
  "key19": "5zzzxbfvFd8drJKWVWWunHG6RV72ksGXxg72jmcX4TtuZKz8tPjZVenY2E7jp2XekCnaiZdMZGK5KFLJkPPJfg5a",
  "key20": "5v45YpneRgftTwKbvyv9K4JzCQewQHQCqtG6MxpmnZnx8rJSnuYB3sEKVcuk5hrTwWTaG5dWuLBczSbZ9JqmMrEx",
  "key21": "5fxRUHeHioGyC6i4HL8bzBT1BZC2KxgDVHzG3oM29T35mqeXe8qKcYxnadKVUEcgsrBxBzvwSFnCjFmf6dV5Brdb",
  "key22": "32mxxA2Bhg2hYSaDi12Cj95wwFfeKAt3JDJ4BszRFJAqqYmGViFRN5SZxBF3uXCAcm6P6H1rW1oE4KrS6NzR1zyT",
  "key23": "nFUNycjQ7nzqdvD8j7mqAbeb9iVE2uyc8XJ5VVdPCd3yy8BfHcbuoEbRc2oSG5QytNThNs4vQAqVWUWPKou2GXv",
  "key24": "2Cc6WMyvLtUF46kfcAd56nUHCs2SYqN29RZBmknFqKMAfZBgERhhTPcXzTDVyB6GPGJVbmr8i9tLYtEpqn86969a",
  "key25": "kHBarA9KNW9YWnPMEEHhkTb2tKobk1neZGf6CtG3oe6jqJRZMgvuCRHiFK3gox73GtjcsJLadoP5JkRskpthqbY",
  "key26": "sHDJZPU8tTpStfpHvbeizcgHNyRyU9zysTJBRS2ENNgsvNk6Su76PLD7vFEC4o7jJfRKmL6fhqKHQa2eKmKLdia",
  "key27": "3mmMN5fi4qmjHbytPR61m83wgfKDdGDG591Dp8PLmFE1yiZXkYxjRyyCnyMWnnWPsjy9cbXTJGWvJjGe2h7q7cBC",
  "key28": "581nGEkig7cuXWeuNGBZd61Y5kBBtmarYu6LHX5ChbrhtUEePz5Q1tLJpNofgi88QaQkqfAdt6U1NsKk1xM2gArc",
  "key29": "7rCWP5m1mu1FpMJvJCnCFazqH5zhe5Mh1knXy3d3xpfkbeFuKkxrR1KKuozwpjt1guKSLbmZwA5ymnt1eEGvhkv",
  "key30": "2dcxG2dkZ4xgYn3ZR7UzYepPj5rYCGVLGNpWPaatKsPFmjqaNnEqQibrR8rRxJqyBPWWviQ2thryEAbmc7fy7fJe",
  "key31": "33HWUzyAmroCeqyQNgVwRBrKsRwouAFSbn7yybbfPsXyPY5aC2VRBTXx2WcxT5P3FDZYJdckMYL42p52qukxZp6N",
  "key32": "26ehkgfoX9txAXNF56PczQgNKD82Ltp3Ui5wLaEeP7ShaAyA1A25d6yABDCp1GygwqHjzWgkwpBEBSfU6wi82bgZ",
  "key33": "5BtyGtzJH2Dnn89BsoDoUgazJbUqiy46JwMR3n1siPcUuu6wuuJmyBJ7NkQRGkq3eaQ9ws5jchz2ckMn1Cjfsk1Q",
  "key34": "1z1LHjFmzJ6KKBPoUXfiYaVoReXMvjPH6LjsGVsySUTGZJJfhGXkhXX6KqvAYBWmCtJgKzA4MU5CdcnFj92aofp",
  "key35": "3JFoyDB7ccKHxzxzcd19SnzFiyf4nHapZAM6dUoKJPSZBi6HfuRzcyXh9vFz4vefGjh1X39dnaBRPbSk4ELnQbvL",
  "key36": "iMCM9Xrdi4GgvbmZBmAGPbUNP4b1rYmf5UarcKAydJnn99EFeSo6sCL1P7Cn1dv3vPDoQHUHAdrQy82xvxFLCwx"
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
