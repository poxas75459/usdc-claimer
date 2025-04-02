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
    "4RZqmETfwmprt4hxrjXd7ydKaHHh1FTuTzJrM2VKAhmY4MnwchKiAdptip95YeANPY4aL4BKWYqJWkp2LRjiS7Bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KpV6jHsXh7AG186o8VEhYFRXKi7yEza5mRtgZoP36doMkeTb7H2TAVxgaQwV6h1RPs5VCBNufuA3gvKYKMo1kfn",
  "key1": "4Mr1F9UJ5b1YLNUxeU75cLtb7BXuQGNPSX7g8EVqV875d1f4LRt67jhaWtXDWsFb1fPJLiKxijqTp8pA698Nz25Z",
  "key2": "5S1H7ffKif3tFa9prBs7vwcx37vKyBHxZ8SQ3rV3J8FZMP8qLR1i2UTurHrWuWnUXKt9cF3YUdq7ELDGhMTsLv1h",
  "key3": "2ovg7z8V7qVg8beqjgbp4oM97WdapvJSWrvWUMvpWEtLBiRURTfNimFGxL8dvPVWZKKDD4qrR6dGq6s26HtvJJ96",
  "key4": "5whLUPYqiieiWZNAddDfVcD2JnJB6X3aj7ERUazg8qcsjbwZFuQTURQxXok91DFii71cFo2ThfrtqG9TRm1VNwim",
  "key5": "4unvRP2RNfR4jyPH5Ra5MwkKMjcRoBgFxqNGgq9DwsiB6K9FaVNwsmBP6cCoxZuKxMqNkigLMKAJ9NrCcX48hpCG",
  "key6": "2bKAYNz4Vsyh1Snk2fVD5ueGbWGoM9HUs5ZFWFNDaXi84zWFrrcWfDiSzUPjsDabbbcQfeuxQjTnQ1tZcGTvWmyY",
  "key7": "YF7g737dc3KBMUqXRNKWNRaU81oKMYRqRjsvnngG5HKXWc1Xh9pKxkMTN5ZHkPjcaEW5cEQMrcgMiqmDMBWiqRx",
  "key8": "pKZT1CAQqaHg5eQiMwNCJb67KUbgYEveu1tBiLe2gekAzgH4hFmftGrm5qa8bVLktJoMNetaK9DiCYktBSPES2G",
  "key9": "EUTBmnDNCe9jGm5ttrgEVFQxE6dubH7tJP4yf72g8Z8wpi7ivPrghCMmCpa5n3VGeWakK7wrzqpQeiV5cZoiLbC",
  "key10": "4gAotg9XvkhoAhWunMEwWjXv2KnbBUMhZtYkxXkSSH22xKJK3vfotpMgC9iJ9XuNiS2H4auzRtvP8dyNENKsDbkU",
  "key11": "5Tp7WEip8noPjiMkowcMWfpcKHXNikwAHmPTCspc4iLsTtXyFx5UNwizjwNV997WYhDuH2pkA6gnRAmiqdJZisLd",
  "key12": "ugFkMDLJD1JEykgmmX4JUdVCLNjZGT8EdcRg6CjpgncCpVqfoidg9eEp4u6WVVpiW5nasKqcK74QQdppKpafFPt",
  "key13": "3BKZzgn6GCFgLq35d3x1Lod5eNr4syVFddUFwwSdtBBJxKS7gHTcegwVw7MgsSNUy2YChXYCj7Ebi2FwPK5dhpWs",
  "key14": "rRvDWtNEfgywE1JGvTdik4dDhsqJMkmoczu3M1qnAVd22JSR1kCUA9uZwM6o5gVwJM3J65JLoJdtfvFXSiPur3i",
  "key15": "XaQJ3GKMutae8muNoaLy4YGhBPhB4nyGJZRXLmTYXqZqnzGBt5dksCdy9tHStuKActgwumYR6gDxCjTKc3s928r",
  "key16": "gxN8y1QT9WxCb3qkQTd4STWM2w4dHmmqv3WVPo5aBKeRqg5tR7CUBVncVZgLFU66MeDFBhKfzgCrpZE1WepECuS",
  "key17": "2jPPDWGb37wEeoqzVyhYhbs4U8TAwrsVwxFGThBwNxvTndnAat1ozqq73JLDy7nAVS7A7cWRYNs4wKoBPEquToub",
  "key18": "UA1wwdFcBKQeituaTKQzwp1TeNeCX1DfmG3NGGkMmJ3nuiX5rvvHE6mdDwNM5orr6gp6HDDR3TH97fRGyo9Ms32",
  "key19": "64SwmyB7Erj3ZK5EUQTgSZvxoL63GENNqWGBPXoHURZySotWHkAbriy3VDLqRG4KiqA7yF4RdAmww6kqzmzHJfT",
  "key20": "2DdUzf4cs1mnKP2x4Vouu8SirKoWcTNbhkf3MNtZKGUhYemvHJGHb4VYe3J9ypQvyv3sySA9f4MxDVdW9JeTgGkB",
  "key21": "5fqvK3VfmRsaweeMfM8hmPwEGkFPVAET2Wsf5cm7bSqmR5K5XJKZsE6jrN6aLFj8XonBngGizCSyLd1LQMxXAReX",
  "key22": "5C18KmLK8YLUi4WgaLMeQbDvHvbUv1HjdYGZ3hVPmg67Y6N1SCqHDXXBJW4gPbXQRy2eSqzpv8w8AHSFf9DZzk5f",
  "key23": "2EmAqkCpod5e6ZKnbvAAVaWcpLp1bFpbWicRKvFPDq5Lj3ZJTx4dkCrx9JrS3zoVETzAScMgZSGPGq9Giyei1oHi",
  "key24": "2Rx7ijS6udMxBrB74paL6yLdTGjYcbAtiATGytv6BdmFjQjcwuVcm7CdjCQKTFpM3cjFZjPhroM7fApxXgxMMB31",
  "key25": "281MmRCxrnbTcYzTFSBaZAApyviKbWhcUoKgJRTNFjVYVp1gN3hn63Fcj4Ze3iSmju32s2hXyKTQVS2DNNKd8NL5",
  "key26": "56DgZpmdGuBgRjjhFBQKiZ55hFsM2t8KdNdZQR2sRzMbC59H8VN6ALd87Xc5T4oUonE9MF1EAAPepSNw5Y1X8NXU",
  "key27": "4ekHLwo6LYdHNA1iRVipPoNxSNsTV2ksPQLNiHd6oLCPft5XCZXUxFTKUYDnJc6B77BvM9YNKDTksrtpDo41fJvy",
  "key28": "2CUJwbPmynb5NrctHCxiR9Yv1ZmhaMpCDM4pKYafWmVvuyiXEKMUR9TffU92tuTKngFPjfouKgD8qcQDjQp35wnA",
  "key29": "58epwMdUy7bEr5F5NioGAfc5cvoRt5dbJ6Y6bXdMBwujknrDc77etXfy3NBFxX5qHxyncDJbvzHP1qQFGfhyGbxU",
  "key30": "5xG6GZSVEq9R6YDhUVSUb9LVjVCk8KucKRJCp3ygpVJaUkSyWXzsN7cAPvRctg1KWvsEFcuXyi1xYTYDxyP39mqp",
  "key31": "2x4i8uehZNzTFvkoVfqJrNafwfMqJE14feq3NcSL3Q8FhUrDpxgk5XV9KxEcWJtYc6fLK6AG9ciYjUvy5XKftZ2B",
  "key32": "5hYrPpZnhMHa8A3w4NtrTwAd414g3fVAfpcKo5MYrCUJrmwbXvkTunafoHyUfhKxJajtVQnrqHca69w851Sf7EN5",
  "key33": "cdgKgXzT63PYjZUSuJivrsf5WDfsn79CqDUwbiF7JVizBs316x7aeZLC6n7qR1Ayv6TTwqT1BkZCsJPBBu2K7VZ",
  "key34": "2G95hbUbd9WavBJ4fuYRGYiFsgMF35WkuT5XxVSjpDj9xqxirA69ebLDXe1G84LL6DDuSnHEsr92BCZ19Z3iMVj7",
  "key35": "3bdRJUxvJfufU2Si6ok6RFzbdiJtBDNyP4CpSCeeJ2Fcs6Affkj1m6BzMyyppGxsykMit1CfZZhypzv73RzCW1jX",
  "key36": "3d4FJwxRB8h7GT1RMY2XKrZ8RazdRkHciBkS3TDWkxGt7HBk4fdSV1HaoR7CiVkTqDpEer2uRZrZjfofons2nqkR"
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
