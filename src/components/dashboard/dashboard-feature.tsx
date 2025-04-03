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
    "53kYaeGVt5wG9Kt5BQ1gp7ArQv3cFW5TFR45C4upZV1MnWHq2v9sPhAgrWdLzKd4cqUsLNH41WxnkJRbGaXG1CHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iicGWobqmjaLaKgqQYr2RePwporDZwb7gSCMtZCCYcNSVhBSeq5L8gWA58gntwUctrtQ4ke5g2LgA2PhLpcpEz",
  "key1": "2CxiWKXPxHezjyy9upEfVpGVMfVby3Cy2trpSJD384TdfYRXCRAyAnN6v5cCX4aBggh5eprMPAVZrho6PKSEccjA",
  "key2": "5F1S6Rw6FGTck94mjkH6fva6rFNddpUm1QivH8eFHiqEEHmyobe8KWpm6wiCQULBHNh3hx5rxYfs6Swgsxddg14X",
  "key3": "kQ1RsyFWZ8G3tzzLsXNAgaKVjjPREBzvnhudkMNWTy3feTNJhVwQycoZVbCSoDJHboz9a5sDLGhkdjXBi9REbgX",
  "key4": "2DendTk6zRpTExfHYeoNvSS8vmy71xNNYZSTqCS6Z1c73MAymauneZZ5PKyhSMkQwYVWbFjnPV1WRGxZckJcrnsY",
  "key5": "4suYVoB59MdF8gptRCJzYuVbf8Rfmn5NTRf4YLFhfryU5ki8DTqVktRrwdJ7dD8U6UPcxhAyRXsXnk8DnqjD3vmq",
  "key6": "4DzVh3GJpsZ58aQettHQMrAWDZ1VWyeRebgKfe5Kx4umm8jJVedFLwmrjDH1K7joyM8DsLhtK2GzH5jLYNLGF3Cq",
  "key7": "2BENeqrCbLwqr2mLnczznmfQCK9UjAEZ6ogLps4HwxhDJyyUjJ6AwoLV3vve9iuXFf2t8ZHox3Np475V6jmzSxDY",
  "key8": "3Bt53n42j7Undar9L7SAkazdSbeKujrqfF8jvQyFSVwkdtx3XwsbPfkqQKmiizSJNnNq16vyetx8xfcEA97cU6MV",
  "key9": "3EbfHEXfcWpRpSuQ3e7yktcYzz7Df6Dm4xWPiP2eGPaab2RjHSLahFfzmhE7N6XVbmMqnv8UfXCCo1n8otH2JNBF",
  "key10": "4kABrngs9D1G6dpcfPUQTyBg3XFjXQNMpzdyJx15t8dQoCsGw3V1ZfoveWT8N6CAuUdNzASCy87qi2C2sVvBPTDa",
  "key11": "5iWNTDVSADrsV29AU2c6DM3RfgTyFZXVGiWi4h2RqRyJTC2gvmAiURRPUmDkC2KkXwnroM7pQjBoskxFKrrPtRR2",
  "key12": "4s7tuY13WJBFw8nAKLiVJhijYMqq3RuhSu3sr8PjUJfk35aJddLSNN6BDJGxE8GLVoEBcvoCEyk9JTPF6xzba4Gf",
  "key13": "4iSeNRagtcdfX8VMvXjU9sXj3Z6zwtBzCSSkLSKSzBGtkJz4AnihBiY8V7xMdD5rPNzPutoGonzipzPmqDfKbiRP",
  "key14": "3eibBrT5QAeoYbanyW5zDFhn7HmsTdG4nZ7RhJLKvPrKYWZ582ybhAFPGf3Mwc1jXoReHbDR8AetdVoF399pvVFh",
  "key15": "3FrZC9wJtDRi6DhnR9ECcQuc53KXGcSEaQewWZofFzk3cL5csj4YwvuKPXgy4Ph4qzEr2JyVCMWFkZKsD2xVNaNG",
  "key16": "3CEaQW69UNcJx6hfms1W64iE78WTi38XKr8KaTe6UjgNzXs8Ew95Lh2DcXouSfXPDLkejaS1bZBJWaoLMiHbRHLQ",
  "key17": "KTDvWrrQvnei6uotchte7Cfcfq5P2J8VMxW4mzz5t4yWWBzaLu4isULjBspaAc4jRVYDAufdhKnQVKgeMHoXBkc",
  "key18": "4snxqpnhRvSs2WQrVuKTci4grQRmyo7ygX6q954FgpgU9hJWfZuyTjFv5gs77nb73eBJEemTfMwXGKt1WCsFJMgd",
  "key19": "1k6GP23zaR8c5s7vRz7Hwr5EybMueMHUzAymouxvW99VXSAMeFMMe6LEBjb93iFJXcQ3MVSBuzMP9Fh5K7jVQfQ",
  "key20": "rybiKz8QkSVZ9YaRqQpHiFMfVujxuTrGX4RJMWMKb8gHPmY8gjUN2q3k2rpeextrh6zY1MT6C4o27UsdKcPBuDt",
  "key21": "3TuEVbvLUDEEef4wjn53ftPAwhm8jTfdh76p3D8b4v7GGdzC39QLEWDvKPEqsPmPwJ67si2qnu3XG88NTz7j5rRu",
  "key22": "2AtRvxwcBNMM9vEqfmwJrrSnxDfsqwJfwYhpAgKAWVwic2QrXSk5Z4cVAZ3b2KuCgjfF5yQFSiwrKsvqmkDtz6Ps",
  "key23": "2UA2Qw5m5GhjmKyDKdqmjxEchZVMfLXFkwnDkNP7S41JzwpyCDZs69s34FQQwnpSKc3bkiht2Lwd7wgVaaecdQ4E",
  "key24": "4NhjWW4eDUi4aHgQgdxcjE5UYcCvPfww6b62iLvajLyaBDMyGq8QPV4cNQuEzqSJyo3X6N5o4bnXWKHct89u1oZB",
  "key25": "2yspF7yQfa88XwXuonRPLHwkTjsvEVd7E9dZCEZ2K89o6EfvjUKJRF92BYPxVJczpwCjMu2B7WXx4J9uQ8UFY2U4",
  "key26": "4gZUw5y7MuMGjeZu6aUtWHNzzLLrvfYXj3dEd8v2A4mMRaN1zFzQZKmzsj7mCLogYLUnkmQe7YUpoceeG1rdhUpF",
  "key27": "EXDDCjLeXz4JQCyWjVsaPYuBpi2uPuqxD4Ksuw4RrsARgVDKNSsnoRAQoFap8UnYhMwspwGRLmx4SRaDpxM1v4F",
  "key28": "5XCMggu44waqnf89i4G8exzeNfj3dFBst96sAcpUYsPKT99VhS526ZT8T9M85JjcNmqbgKtnGXaBVdQ8LbbqYsq",
  "key29": "45c6mF7BWu9spQtumod69eNrgVB2kMuGCAgoxu738zAwFnVDTkV19MRtdhyw6ZVcQDQpGGJugA4GHw6iprCBDEQT",
  "key30": "enBEQb9BsyT7AQeVWcXxgbNoiYiL6KaZpqGad4yo3nfBSXYskFCf1tXK3cbr9ZNRTjGEhyB4cis9FCRXmeXaA5E",
  "key31": "2CQpowLAo36i5TNnUtyW1v6PxaJdYgjwta6Z18tuEfcugsogPGGZeUCShNBK5LnEjMVJNbaujepaqM3dnbmgGXn4",
  "key32": "5r9vd8YZfnYg4HmPGessbyLPyF5ojxdF9q7LGpYqskTUJak82tgqcyS5RVv4BugEjzbzXuSwgC6ovRsim275HJJp",
  "key33": "3GxNyUvYGnqq4PVL18qB56mEqT8VXmADqaGqC8ushVR5JGd8DTmNdxjw5Bf712kzzS8dTdM98NvP6nB1YHjGZMqp",
  "key34": "5EenihySWYJmGj17VPaLhH3ywxFyRVX27Cr6maBHAesNEw9HDQFYFjcVpn4jqevZMgrtXy7RwrxwP1vY4B1CqXxr"
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
