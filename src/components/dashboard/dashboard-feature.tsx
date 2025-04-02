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
    "2WUymmjwzWocaJFNmkszAnvi3JJvrsbaoH4PWEbrAAkFTC75tgUwkBWVX3cdg9GZy4mnoUDYktx1rmAjobt1ihnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gASisGuzKuhtw7xxwwjdWHotFdiaKpok51M5f5vBQ7ouLtcWp5PWk6CXejUnX5Uj6JLzCgwHmGryb27kcwGpX6L",
  "key1": "59iBfRRcGsJ1hSNH83Y7QBime4DmbJQeSepMSpV9TUg2GWoaEyxi4SqMu8dcZ2ZvPMgpEpkFcw4mCvk5hdt2Krsk",
  "key2": "5oqcVLcAovyHA9fz9Wz4f7AKRLD1wy2K3AgGCFUqNw7szyBcCyw6HdpTkBU7sSxFgPDqLBtnUx49VF2zKtRSQH97",
  "key3": "59sihwHNo84oWvQLbQV2MwVoSY1MPygoNVuBa6u863gEGWwRpcF6XD5AyQyw4bfiZmu8y1dGTwswVHuyfxfL53Km",
  "key4": "dYRJJ2bWDn5uKnmyoxHvJkztMXXEHWMq8gksxwCrYTeqKoH6A7uHr9ZHhULaaHDcau4yLd8Nza1GjKPXCySTXJ9",
  "key5": "2kTPFQbJXWLFhxZGH4C7StWDGjiFXZ56QrHNYxiu4L2dCXUvMJpvoqA1abeZDfSAafUa3VBfMYdq2pPjigsuateE",
  "key6": "4qFe4MbCcABT332u9Uz2ioSsZJ7QdGWCys7w8k5FM4LyZQV5sjHWv5pycHSjnhxJTGjGpr8yUnztKAkmN4QKDP3D",
  "key7": "2FJrMj3xrqpsgAiGnQxhia3A3qXokEuXAtfR3KfpzDbQumzTJDhWk9n9FDTUNvEsRQmn8ZcPgFRUwFXunCHtwCz7",
  "key8": "5yprnWzskJicXFJV5maoGMha2pv8wf9w1mZH6MSfzWDTSNZu1my8jtz8BgXn8vajHknJE6Pu9ZdCKbcreYqMeDBL",
  "key9": "63HAdTxiAs6qBurPtJ4tt8HkixyHZaQYfE5kvY9xiFHC4pDNxzDFrKaogabJ7Wju2CHQGTnRu5BN5He62oKu2W11",
  "key10": "dtyGfgj3986KwaAh7PwrYpWZNzuaisBq3GSUtdWzyAFxh1kRgxS2VgRcJkd6qFfUzVmHJDcBvzQzHUviBBWbRyz",
  "key11": "4f1QTeWTVTnWnVrs4YAoYP4D9geob5GaVk398y3TLCvZHgwdPHEayWLkBgPkPNpAB8F5f5rsk6NNcBRLoqHRfzeo",
  "key12": "5B6MZnzqQaW2AohJZuoRXwjNvh1YhXUNfuhA7d2qXwBW2a8AVLQkeFcDzi2YLsJxLmHKBw3XhRMz4whq3MpvmB6X",
  "key13": "2uq44dyo9C3X4wJP453xoun68DHhkH69nLRbXw7m2rPX39Wi6EH3bhWxetYqqKYb53yVJg15US5DHvGNdTAHa8Ge",
  "key14": "3R1XopSASeKN13ntck1Me9rS4sZF6fgeYTust3EwMULcwYmkVXGqkvudye9A18tuKxNLfBQUhda1JBzknReEeffZ",
  "key15": "21goTveVfaS6PZBj89GiepWMCBYpCGyuLyxZ4SaC1Jg7emjfhDydPEhLUXHP6wYM9LDsVgHAbtk8QJwnTedCLnrX",
  "key16": "5iHjgr5D4YhJLNqHiAMemtZGv88yRwh5GXHpkNCo3bsDwkRT45h5bs8SqCLwrE23y42wD7AYMmTZ7mxZkN7Wmvj8",
  "key17": "44wmJocB3EtcBUCXSER7MNrWGEonCQZHvd31uXLjq9imBCnb36bZjRCdzYBCQ1qLMESksm6DXc1nHjWA6QVdFNxF",
  "key18": "5CoVaCb6EWpfufBs4DrahzP9pRmsBizXaZBshBTpxhh5wLBMrTmLyrZ4c7hcvD6CoamZNr2d2dLJnQj8kpNBd1bb",
  "key19": "CXqBi6ykdbujgVnvPCK5JM37ghFoKbDjX3nUcdi5hH6ZN31uDX9DQUmSUXz8n42WikLszewJq6DwxpA94SrKzbM",
  "key20": "3y49cXXPgipn8bish5RNUhFSXJwqafzjth6drxVf8qdxzKSdbVDuVzFGdUReoZ86xiewDqifeap1vhEcgtWMnsBr",
  "key21": "2cHMuHtseZXSMZ5nPUEgqZ2nXkuxqNGsc2kYSogBYVvVnuamkoToFeE1yb1qRp3y8aZaV8ETDFP4ikhBQbwJLGwQ",
  "key22": "2xpXu7d2fFKkB8Vu2r3p7sois62THB1j9ricfmsvaaSNpMV5fYyDV2oZLGL95y6MR4RHCwCZQVCfBbfD5gUXUxKN",
  "key23": "GyqPELWVZkHf7cMphwcaQEtogEaHfXme7SpR5cWtnz4u8yLF8jQc43R25MDdczTK7uM32LPLbJg8CTZUdghNGcX",
  "key24": "3SuSW7LmrZ77wwMxXxkfbF1sBqWsT4HnZr8R4ZEN3cuq9KTxApiBtBZF6HJmLQyeftwiX4KvsagyQeMGxuqp3doC",
  "key25": "54JampSQSgBJ7NsKZmMUFrCmgok5ZZEP4zWqBzAxgwgg9C6WntB2jPpnWRnCEjvqy5aLJuSgAKs5DShHiqi2W2P3",
  "key26": "4Xb4WwRi9UoBn9ftftGMjPL8BhNPQJSm2CgaZtVZMGp9LpB8kWuHptry6ojfbo7XRzEDeRAbZuqUiZdiYWhDoiDr",
  "key27": "5N35DZAzwvXZnUfAdbL1SLpLE1qABmdDaNq71CveRLDCADC43f3onpTCBoic7N3utUQKEi2PTWWu3W5YrvxRjjnX",
  "key28": "546VvGpuZpsrZTTxs3kLyrYMhpyAB3dERmdFixZQtAyo1Bn2uJVssMu3Tq4qo52hz8LUkfqc9noWUUgZVWqahDiB",
  "key29": "jUvgphx1e2RkbsFrz95fzwV3mBu5oGW2ZwKdviiAsV5iotXnPbby1ZyCqdo52Qsor8rYmQmMyZUZjQckJDVVJUz",
  "key30": "4v5JHrML491gUTiwuyWmpznQuTa8HxeXf8TiqQGa3ePm7apfj4UHUasWf1swUGBcNeLPa4UV8vdaG5VKEGZcGUA4",
  "key31": "39Yx92jVAWp1mSBUP4ApogXqAp1K19qB8eJ2JTegMhf8G4yMR5a5suDPg5sZ4T8eJJW8ug46MLJeMz7bu7KSU6AS",
  "key32": "67RxJAmVPdN8Zg7qabdEQRW37me3mBVGsDhM5qsfGkB6vFDzSALwz3nSfA7x19EwBzWnjWLRjVeiRgJqhUHRvax9",
  "key33": "24ScCQwYCfRTpPePaJcbCitSNTN4PARMZLT7yJJkhbmZyCKkGu29efdBT9ARnfKyMKEYCGfjpCscCxynKc3CovCg",
  "key34": "UxyAyktNkBBdWYEoyYPy6hJfoCKPqsjLxkZBuqHexbocLiZdNG3uqyGDHgVRyEtMjAdxCsbgkREBYtFvcFNi3SB",
  "key35": "2WDnixPi3ARpTyR5KFw5hiNmpV1DG1Dg9cGabvu5YJ6uRe36SWkDoBVDJR5CbQRHRcphMy7jwkERmed3AWSQzgvb",
  "key36": "3tNuksUKQw58W5u9goUJqMd3E6UYZVjChvS3uMGqeuA9zPaPKzArpuGrFXiNYmSTE1cjP7Dsd3Q22sQkWo4M9MBv",
  "key37": "27D1nf4A3us1mga2Sc83BdsgDghqwPsCVn4qEdCqscoQnwmGygNxF2A7DaNVaXXVTKvfEEos1LUNb1mXCHJqVWzy",
  "key38": "TW13abAvoRnP2mkkwtYRCmYNLsS8g6iPvz7V8CbxL6K94upsXnfUbxengY9cxUfHLXRbjyDW3tbLUs8tMxtumkt",
  "key39": "LHZV6z42VCj9uraCg7RyM13xSKz1jH8qCvCM2NiP3pg9YZVmkr8neHoZJfm5z3pvk7NuZiMxgR4YU14SszAneso",
  "key40": "2rAaCbQfVVuBA2hhCSmtQUTkwh79adUJb1bCEuRDqi6RiHQaMZfpvh1nrb2umDyNcJuufYDRG3gomA5GSX5FpbrM",
  "key41": "8NheHDqvUiFMJrjdo7Fx78o3nqAasKJsbbGBRvH97BdbfU9hSF9DbpxqkpDBDbamC1aDKgRMPgKZzd9jQwvFvQp",
  "key42": "AgW7kT5VyFnqa5YYLaV44HUMEfvkCDK5ecSBCZmE1VQ16Nt3vpp3Q8rXkmK9NByPQHCkhSfCPxW77bZREaEmMSW"
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
