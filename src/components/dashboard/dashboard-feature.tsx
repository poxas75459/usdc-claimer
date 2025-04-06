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
    "3WXiqtpmF3UsR9jJ4oTkWE9bTX7ToLR1iDkYeUWjXCnR2j85ichgkxidMxwY3VbnA9EaEgrqyYj8HAy2ZbrDrpcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5EtWvMyYGH82ssgo1nDZUXZDjqWEZq7LAS45L9uiViJDdTAqhgPFPqhwMByp74sokRUwT7zwZQHTCegwqx7xPW",
  "key1": "3iH8TK6DTZdwB7m1zdrfgs7c1BMN915K8meX99V77BH7WJk8mFE5tTqZavFcE58c51WBFvVM8vcp7vDFAd98tjfe",
  "key2": "5GbtAsCjB457eDJybKf4uqXXb92wVhE2LvdamqsDjxcLaYnejkmnSCP5WmKSeLbPideq73VwNrgdp7BEDwZhqfuF",
  "key3": "3J7WETtqMikVLbcJKjwNcNuS5gAXDQZ8MCBj7pvGGseFFyqYCjVfDW2mWmWFeMU58vAKPJfBnTduYVrWr3WSN8Bj",
  "key4": "5Tcny2DEeFZ3Rz6eLvaNEzgkScXsrm5TAqbi8FPUSs7i919R2WM4imDQzBgTQ87R2wSCF9uk8KeRF83msFDtbM3k",
  "key5": "5WwQr6Gq3aMEZiMxCFYRGnMpH3suLQwMar6zhjQ7cbzYrC1M3KLCdUUJ5pBenZv67nnMEoYvuamfHH4Czdr6q6oi",
  "key6": "4ubTHgLcCuLyVezMepeunpEqpnnLd6je12CgCKBmrCDUY98NT1afvBi7xm14RCE1w7oNGfLYzLXAeHLE8XgaaLsJ",
  "key7": "34YeG9Hjx9QtCtXXMgTyeYX1vfSzV3yhVfcNKS9vPP463d3LfmMqBMpbFXuou6WYZJ3JKBLiUXkuNuzM1fp9Vbc1",
  "key8": "YbcLbSwVvV22KSktkwNiXtsMVUUUnqEJJg1SHVtb9NA4FWZb6ha7nCzdHVWyfMQsd4q38J21UJQBTyUq3QSsALp",
  "key9": "2UcQ6YqnURzqHTQ4T3VERb9XqjZ4KMCG4m7PVgzgxkXq8jcDao5VowHZAxWs4dn22Nn51DgbfLw7wsRRzNSFccXf",
  "key10": "FJh5UMp6yik9xfF3fAm5UCZhSGAyv9iPSmR6vjHiaY6m1ekgz62efqEzm792J4cPQcMjGfX3PAHQbWcyqJtCETD",
  "key11": "3qqbq2Z2erjvrR3SqmLqw496p7j6nMipnHZS3UP1a6Ko7n8QZREmLi632zfhQxxbF7mgNu5h3mF6rzyb6uBDbKCC",
  "key12": "3MbPfhdHF8AqFqjjb1cEEpq8xgaRNmahGWyKJkvmxiHCp2cqpMh7cWfereGHF8ybhR1i5FpAwpt7WNnfieBUHptT",
  "key13": "5ZVgv6gQ5SzcgG6tFUbSf5JEbs7KqUTxmdiYrNhe8iY4YGuHF92pw7JU817iTSwyPo3BpePGU6hyzRUJ2sR9Q78Y",
  "key14": "2iA3QmckWLzBS91wXqHQa92Jn4ecXBcxUWdYfP1eLY3c1UyS83mPjQSHN5rsgdDbKVc1cTm2ufeBXZEf5jqfkxjX",
  "key15": "47nREWgQbNCxUBB6EXD4zqatrTt19cYHBazFFa6BC2cgqRinV8kvLBE1Y6HWnsJk5KqVLPtu2Dq5oJcNbUBBbhM5",
  "key16": "48E5yd7WQuhaSaNehRa6eWMLDqDRmVUyAMvbCDhHc5mURgWwpf9qHEr9pJUcrcM7Ywh9eMa6sme4Pgi4UofWUQ9x",
  "key17": "5i6y9gJhvBKoHyqoYX6raoF3jhJPCiPridcfhULtQyXbwoxbcD6hKUp6zBTRQwnkthgTmZc2NtL3LqEMHFP19e3v",
  "key18": "43PrLdUXd9SZjpWEJhmtNqsSVTZ3hcGNnsSEr3VNda4jv2vGMcYjvtgdQLLHo2n7TbecoykHwTfCMar7TcHMktFm",
  "key19": "f72oHNLsBTdqS1msAw2o3LXyRQojuxo6WCeei2o78BqQM1S1qUHTfpR5d4xxcBsAkHRL8WcLbsy4CxHWgpV1Q2A",
  "key20": "5yDmwCuLrxRuAjq2dj2mibGXJWEMgawPCJ66G8wxU1DCNnbmY9K8JAkyLJCWeLa3KzVDwfR1Sc8zCXfU77sq2NwT",
  "key21": "GCVEfAvpQsbTySVVb37JnjpJLHojNHwcPMGNSrVFb3n1DkKHv4btWeXNky1y7qozgrZRz2HVVPM9eG4KdPCqvdN",
  "key22": "56tnvNACmehc8CfEW9syhi4SxEMnbcaAHrM2cop3Hnh1TmAx9acNUaUMcDvpu65GbWPyoizKaqVny5ZkuRiML3WB",
  "key23": "48kDzEwuDpP6DBXwDMhS7cn9peBTc7thpZUy91bWvh2NTNVxWDCTBNjrtcpF3H9eCEgCKGJRtr5HcW2sBE8sbxyJ",
  "key24": "aZbs4QdhsAyARowJG5XBJT16qy8rCVdMNBspmDQ6Y9DTTsyNacBSGk8DzpmNNSUZXWjejDF2wQyCwJv2HwRYPg4",
  "key25": "FNxSLXmfixU9uj9kQ2ZwNiHpD85fvmADhLqVyvjxmtTfrWBUamhWPZgD8vgmDZbqqTahqT6pYzVJDfmQRdyUs7Y",
  "key26": "5tUMFN9YiwinH8aWMdkHzdeKiHUJLpuj8xqNNPuTtC2ERFA8bzRWuYz2n5miDbnrhdzND1Z5czKqQ31zyqutz1SV",
  "key27": "RMo6BoMrnbaFuTxGjbaKXg5VSvJT9hxW4JumqLjkEY5H6irzE9rQpTLBCetb8ut1m4tRh4drhTj8vUabnhdE6LX",
  "key28": "QvV4TSfwXPpXSoksPYM6MDaeEFxtExTNwHWHvjhURwdUBdrPDZptWtuKeusccVMXhzVYg8CrGqt1XcMfjKizqhD",
  "key29": "FkMZ3abHZuEbjctg6GDDtw5Qk3epVnCEmBhfCdtohJP6Lf4gwFmap8wNyMqbKcCmKCiLaP8PTgeYiGfXAq8w48M",
  "key30": "3upcc1GyPbxs5SfBA8s5piaRf1muCcaQZ32a424pa46hnakjYJNNciVNrLNK1UEfS5DkKFSKEB4AtmTVH6NxVAEf",
  "key31": "4fjZFXCmpfKwL6VLWpEDhfMBF5ydcZaXCrSaLS6M1GPoKJcrhoRtjrKxYpLMdVvyw6XJYHjSMvSgt6sVnM9Uvmn",
  "key32": "3rG5QD2gyCzKDa3cyrEWvZ2rYs4ydxSr1BbUjZjgiWCMe9fCNWXghA9KWdqRt1UTP3W6CzrFchXP8MGuNjixaBnJ",
  "key33": "4QDexLLzRwdUoGmjxyCXkWpqj84vb3b8YF1NMAwUaRCYUU57kCyY1kyu1zqRXkytAMNtnXrPcjzWJ9ZVmh9AkHhY",
  "key34": "22s9s1orkczM1qpfqgNSQ8kmrfZUgNwa6BYJy8SQ1DaZzFS9WtGrt7doAh2eRGz5LHuC3kdLbHY7fDkwq8P1crhx",
  "key35": "5CHWWejDfQxJCAhodf1uUsdVwPZQdbbHMP8sUSzJZqPrsdwK8DHTVnvvTZJ8MomvVXPWigKy7qdgQTvr3aG4ugjp",
  "key36": "3eNvNCsPxThv8kSiPV5W2AqcyLpzhmEfvWugD47P37zqn5Pd8R8fgaE898szkYrR99QhAme1PQHL7Xh8CgR5jhZM",
  "key37": "2cj3UzWyBeFjJfUHcdjWFH6zoYju6AqJtCCzuqLaaqdeaeM38J7mUsetVaX4XkVFYCbks3MfjJRV9nn8EtkZkS9n",
  "key38": "5yJKH3MVnniZjPe3jLheQajtzm1o2eNyk8Hj98wNP99Tm441W9xKaVUqfxPjgv2Tn5teSUdJP5erbUndGSDgikML"
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
