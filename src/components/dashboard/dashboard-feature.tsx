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
    "5guvtnj2TZ75kxeb1aGEbxcLitiRVpU72vDYSDift1eL7anVt7CWvbJsSPZD265xrb3PPvDdWdTrGnfrrUkAjqzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YF9D29YJdKSA4EEw26MDkX58VhDSAL3sUu3Gt7bZjvGa7P6z3rck1wysXBcHGGo7qyTBEpNNpPdjae3L6ZFYJ9",
  "key1": "4uUTAvC5raRomK7pqzPCXjofKLBKBtgbKvb5mcrNizu8hJZNvgeMdFkFbZQ25V8Y9w3nYopt7MDfqmw9vbQgeFHB",
  "key2": "tKKZL3BZc91VemCfpCBJq8nxyAGcMcT2djRbem73RCGEfpx7yiZwfa98catgTBrYekXWGANY8QTcKURbTtLtQJE",
  "key3": "29rLqeCUNmnk5nYdJYdtyN5km1MQgXgXoD3FGy1hkpZJQF8nPePdiGHmjCv4JE4dK5bvWCgQ9gVqxNM3qEb8qCFL",
  "key4": "2SA8FxVryonsgTncqpfjMi4NfEDfPAbPidvJEufNhDQsLPp7Hm3XfH8pJH9cZgbQmhVHcrxuJArS5kEnoKZsZ9Rt",
  "key5": "37KWcBcbscP1R85DdhqhRSAZ5cWWW9Tc5Mwz3yC4E9e25ijeUHsrcLbQAhu2FLYxsbvw52a74c4Rjx8KiBbtsjjA",
  "key6": "21Y6BVop8SsjMGcN4gbjtxiMpQqNRQfNnP7PaQYoYWRJeWAr257ZsCk5Tt26aVrRQJtApw6UgMg72mnX7DhxtgFG",
  "key7": "51mZECWbFXDcfuuX1nniST5rEnKgMYGSqS5apnmxArVbq67Q2gaMwTC6VEMGmMaMD3wuUyLDst1vY6vfkfXZGsfB",
  "key8": "5anJuXM3SaXvh623Vacu4bUuur9YwpfCYMMk6f9tAJhqwCvRNz2BKaX8EVY7MDMSYCsQj3mh2L4QY4uJK5CMMGxC",
  "key9": "ejmnTUdiozgVb37wwdtvczPugGmjd2oQDCMyNJaRqDwwx9bcdbUcsS7M3NLyotJhA41rs6wo4p4vdVLKFGqyhSM",
  "key10": "64fatoKAdsn4JwDxJsC3mgnKnZ8orcsszKRmewCjf4SpbnrLyGrqXJU66dNfBvHLeyw7mjD2t1WBTSKeTdfCdePX",
  "key11": "4bVM8bTccSmbCHwuukXfZvjWSoNthULNz5QQhwzS7fwBaFREomcUwmuyQK9LJrCaPaoRZxi1YHLL1LicssYB4rCC",
  "key12": "ZqbrNeeBTAy7gmh58EgD1eZZtFJkn4kgZPBp7AVoaDn43dEspzgGUkQhvzBX2hvXaeYAg9Kirc9nXH9i1mwRANj",
  "key13": "3wLw7RWsgowReNAzQ3CtMDmpT44HBswVZKqLyMrU3rQpeaU4siH7vVbqabVNu1JqUU9E52qMLaSt1t9StuoSn63R",
  "key14": "2RjEdykrXzaSZWhMb4ucRxytbS1GvQ14Vs8W75ShcpzcSk6k5c37zNwWZVfh8gnCVVZ4ksLmJL1adgLaxcZws8DJ",
  "key15": "5MasNkinHPGkSTtca3QRjFCk7BH9U5DYEyMKfzAvpQwRa6Z19bG6HNXGWBk3tsjxWgs5oLyD1vwX5qiH1EYqMT6V",
  "key16": "5BPsqsgTWfbqo4WR7wm7xTJkE2vjAsqGWkUFdt5smowuR5rSQGH5ksPQmxxjwMiX9fTpjtNEdQCxEd2PqSBwREEj",
  "key17": "2zevec7bkaSjLq18jEFqKq5ycNVUUVu2mTjUJHNUwQrhtq5hjYR2eJhMZTXvN1y84u1S7FoJbiE7cG5s1watATNM",
  "key18": "2ktr1jiRptm8phQBnTkfHqtRUrFPcZHhNrCcSdhRajDGVaZD723ZfeLqav3PMS5zQ1MEkBxFwt5Fxi3HcSUYDbyd",
  "key19": "4YKsC3Q7YjJfcTLXvBjZUXYmBPDZh3unRLSjZa4TVCVJhnob6A3iAjmbizXp7fYJTMtrwgKTJ7Sd85XSy5aFi9FQ",
  "key20": "28L2RmoaxmiYNaHc1EjArzfdGKcfsDLbvf1s88GskfsXVKZFPgW39Y9cMueqxkzWkDA7GN1xuVA7VZB5FMt5VUGF",
  "key21": "3P2U92KDFF81o5Ch9vCbJgKdK5dSn61DebX8LNop39pHayDHaxaxnMwgApQc3C4mPaj1BxDt5BwzrNqzDMJG9ioY",
  "key22": "3oe6oKw4gDQeHEXCbJon8WTHZiUWR2Zx1y1YBCqwqH5ZBuD9u5eoSawi87JQYP1imP5pRFapcL1qid9rSEnaVfrY",
  "key23": "5YVjkUuc7ULh84bgcgaNj7ccWZ5x1uePs4FqWUDrQZN7vs8wseodMBTezTpooJUXaoh9VZm5trRmnEGrP2sdvuiG",
  "key24": "rMTV8DN5Z1KYA5Fo6nSP2yy58LXpdc8kxAq1VSULbKPgjEPyUCMaY3q1pfxjHtoKsPoLdjfJ2cLbEHqm8gFszNd",
  "key25": "CRThgm3NqdAjegAe47DUuxqr4bLvf2T4H1dPrVZR14WSzDg3kgiYYUQynF273NcFdaBphs5Eqk9BnE4AQ8jeBmD",
  "key26": "8SDLyadeNxK4shAeMDhNXWJ1Jm7MifBNtXpDJNhnY92GmD2vnofbJmuRr5u8mywTMDZbVdJc8hdCPHBDtPQvqPd",
  "key27": "48xJrEwNa7K3LNjH8iBaxX5RgXzpSpxtqKH1uHskFV3oPenpNSEM4d5uCb9jy9vFZAGjFkDqkdH624VvuHPSypfL",
  "key28": "3j9cBaTNbPKEx8a9NLA2kb8ueCGX9ACHyqynBr4nwJx1HYzc7f3oYrSq2E43tofuLJWN9oqoCuf57db1GpYMZpKh",
  "key29": "3aJXHK6Ks7nqniRSujfzqnSB6WR1s7zXGwbi9DjY2jrN3wTUqNcXtfiBD7zkpN6o7JGyGpJ591FfokRnyywZCKgT",
  "key30": "3FvTXLRKhSPizxtciXYVG7RaNWXQZPBp61jzJCCWVPXu2ZjqF17GUd5PF8aY3B71CWfuvJ1f6m5igo2UGTc2yLLQ",
  "key31": "3TfE9sDgpv3zrf9oqCM1R1AAwUaXaub55MsE9ZU5V6PeaDBNbSLcna7XM1FisbBaJB9zwmzaetrSfayKH4BLD99Q",
  "key32": "2SdhNiRyfDL3ThhkPTzPm5AwskfuzqHBb4TNPc1NaC1aP4ixwRC6ByThwQYF1MNTsKx7nLan6LEn8ARcjTBbXWDD",
  "key33": "29E9dLhXf6vwGrD96LNnTM9pNcoc7oJBZbfPsJbuRCJvfdDCCKYFHmA44im23wvn3MXrFWLwrz4GvJGqPSf4LkMk",
  "key34": "5FxK7jKoKd37QGXtb1Fa9Hd5bxhHh8rVFssu2MMTMc6AHs1FWao5qpQTbamyX1b2N5RD3LD1bmF55oUhLwy3QRDF",
  "key35": "3TD2ufgMkoUSH2tPNBX7jMNVnWdBkkeLhRyp1PkeyosQzLrwFm4aHDeofeueQmVURJbkkdWoE4s4onMfP5t9bg5N",
  "key36": "2E1x6xsoEEQqs1aEvxHhB4UnKU6jrohHYQLkxB8sfo6kWNWh4RFGAKq59VFmXAHbvdi28SosGQ7LtgHLwp3Gt2mC",
  "key37": "3wn8Ssg5cGpuvsfmSuYfHTN2epwpTD3xmgM5vqpsLwgAZcCAjb1rmowsUFbLCL4WSbga7vsUjJrtnN6xZ9GQS2rJ",
  "key38": "3n4Mo3N65yaDXiL5wbTjZ1iyq3ibXJ3eGXZL5kAetfek9vgLbTB8ouZyBZMB9e4GM7LFrhMgqx14FxSTfd9AjKiQ",
  "key39": "346Hw6LDFuqsgTaLZi6GsSeJAy8gVMuQsNEWn4Q2B74jN8kNNRmaCB9YrjSNUM1QRu1FLgbiumjtqwzgsRVk2Geb",
  "key40": "CtPQVsABJpJCpABfEnvDS6H5ocJk2mS4MkuBuoozXQVsZtyhAPT5F2susmZYzjHkGM5FJHYZCGp2KoEtx2m48D6",
  "key41": "3qjjBhPeMtThBbHNsSCsFY7qYEtrHzXzC1WWhoo8DYnXmWXujg4JbDg6Cz2enirXDinQXrAoBSJfkY3M9pEZszrD"
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
