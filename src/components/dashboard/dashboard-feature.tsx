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
    "2v1beAkMXKxU9ekga3vaPCkggV5A92vxdVRYGLa4kF7LHsBHLx7PHCL3tGqV6rwenQ3w91FjE7qFhb7YzxEEJ3CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DQLzD2BQF3Y1rJeZV7Fd2WjHEJA4v3EgnNAZqAdN6JDtZCKAAmtXms8xMMBK75BtR9Y1KiTpECn3hKFwaXLewBp",
  "key1": "4F2eMEfvaNKj9Grp6348htcMaxnG4o6egTEgek56426GHeQGvdX4WkLCu67wocFcWwMrJa77DWZkBkSqmef1M6Jp",
  "key2": "3arfnpgoc6vVBnHjSEaxWidMwZKxr3bibc8qVuwjJe23kLRxwMUN33Wj9KVotqueKG7S6VphdbMgzfXWWFtM5qYC",
  "key3": "3aR3FZ8dkMdKrxJMus5ohGhV6vHtKAEryB8Dor5wanGVQKubXyMTCxDzdDh23toSvc1YUsBkmG5PZH8Hzpiu1iRV",
  "key4": "5x1YSW5M71tTAKgGh2sRkeWLooxJiw3yG2MFq42NKEhGPSrvyraWUGAVT6jsgwMJ8UnL811aAarndkrT2kHtA1Rt",
  "key5": "4DstkYBcMSWpgfdXWV4x3Cu4diSvrToAvVLKe6Y41XUtXLdEKDr7Ku6wuDZgFbaLWeSn6UZfi6dx8DLAZYFGqqX5",
  "key6": "5Ypx1dvZSM8oTwt5XY7M3XGMJggU9Eeq5CapT3y33k56brxisLtnE8xMSKAh4gYW2UgRtjnrqu3czJ3vYNdLzomm",
  "key7": "4bS3rA8q2SJBhuHsB5WHQo644yQkv6JWHdhygAcWex6oQr7bNMxPuPEsntMx1iZZnWL33Wsi4SCEc6bTayntBLw3",
  "key8": "nCz1k1e6gDcrCH9JXrQceQitz2CcrejZ8TXjxbsujstr3G8otMXzPMYZxxinX9NNowKjxcpca2jD5WmffCHSeW5",
  "key9": "5H4B6SygGmmN2ZuCRyzYepgkBp3F6Yhize2ppzBxFpWvgfG595AEiskuoHRLRawM6saysdNxECQWqAuEUzmGkSs5",
  "key10": "38YJiGYDmdKtGdiregdFRPv5yFi7PaFWghkW1yg7EtLgy8GgCTU4vB7afHxUu2FsVHfDkBaBUpjb6PsbBN1dBRzS",
  "key11": "4wgJAo2yYm2Lbgg2jt2YX4xD1tow76Yq85BfMUyfrHCz9k7oFssTtUSGhp7QAmMerFdwerUGWXU3MPxEcmKyzzXS",
  "key12": "2RZFtcmCRR9yNR3RaNKu2X8gXtyBgrKUJzbH6wvvHmMoggdDv25dGZQD2V4tvTo95VVNY6w7smJLu3YyNc4ZYt9i",
  "key13": "4KHPiRgQAQJ5JKdhbQytmNc3nQfJuPt6MfeS1hFUJHiXi1WjQdKAXBwJTYVMoAAYx6ZsbfBBZLT2jDpSdA56Fbfc",
  "key14": "454HvYHvbvvhucbpRGC6L2phcNgKEBEbZxVetmRF1Y78tgFVMnNCCSefccm9C4R7FhPg3FH3suyqQ9nrP2hsviUv",
  "key15": "4gLeBRHqx4tnLJnNAFgiZkWsXNFTRTrppoXGMd7aFsChJRtCHynaDdi47zE7YKZdEEgA3YQzqfHcW31DkjRE6BXX",
  "key16": "4Ta1wApyiz3kS4m2sEHMP66CivVT2zF4MHtzsAqm49319RE3ZP3Qyg57yrMBSUZyAcNj4yC5uVPkm7jPA7vnNG91",
  "key17": "5jQPvY9ymw8ysVHHv5mpRssAr31hYncqxf5h2r2vfF3LAGFCLVYSYftz7zEELwaqNnBic1uu2FdXwqkoHdZGNN1Y",
  "key18": "57BXeagcriMNJdr4E9zPhUS1kTcb8829rG1HjvhTuDXYQjUfsxNKVqow98tmF1cQeSWcUAQPB9PAwgxTbkEhyg9P",
  "key19": "28aQAY8rvmbjzXetLzUUiLBZSozPhMHJUB1u4Vd9gMovtZ83kz5BLUSHGRtEUwrowYp6bWp1a71eV9wH5qzbLBN2",
  "key20": "4DPThFooLzPfmJex74GRA2r4gMAjJSye4EGYQXoTuD1ayYbGtd2au8ABhhx7XuF1ZvixeFHjGX6kXLq19vWLcS7Z",
  "key21": "2K4NQBAbdZxGK71ApZ3qbdjXfnx9Q8mHrZd6WuJtwNFvrXEcLGUbtD3poYL4nguNYGJV4bzMPcshcoTpcZeTykyN",
  "key22": "2GRtoxnimBzTM5g7jgg4n8zMcH7okyBF3onUvX1JuUvSTQMLwHrGdBSwMy2uCs93RaGa1mPYgKuZsZLjzLzRVpWr",
  "key23": "2A8iKhkJXqn6x8uD8uWr6Wr3SytiED2j4i2872u1whW2C2ZfN4xLHs6VSxNVGm5T1nd1x8YQWvpB3To5jZ9RroPk",
  "key24": "5innbzC3SuahxP9ZBDhVLHLXHgdj2rSbsmENMZhQfjgcXBBc8GzZpwNeLBjRQAhDd8gX77keT9McLqFeTNZD6Ahg",
  "key25": "3A61ahLFuqDCFUMRRZR9FkSoangcYzSVhH2VfAT9HDGrhBPb8zwn3up5b58Z6C5KEKMaY6DmLvossWnQ7KAvNmPX",
  "key26": "7WUBbtzyZmi94Tu9LqaVUW4VujT6Hy584NWqMFH1c622rypa4LYnbdt8UNB4dGk15mvRk7qhmadBUc7CfyCGD8x",
  "key27": "2m2fwrAcJWkBhrR5rLkCahsovi5oayzKnHkTcYm4TwgKMce2QceHeq11E4fbtvcsGUvKWk3f4Stz8HXSCuWtf3Bz",
  "key28": "2bkCmog3BkZZjxFjbZY2yaTPNKh5QjwUFY6DpzUKLkT4ZFm5QhhMkFbqKjveE2MLidY42CSR6rrJ4wq6KbUtNajm",
  "key29": "5wQ1fRqGtDoyrkDPjpt9CxB5rPmM4nPSN7vn7rBdp7A3yZznEmRjoS7A9mBW3y5NU7y2TWGKypiptxRBoLL37Kkk",
  "key30": "3CjhEnWjBTC4UUoezPg6jKojArAfG2pbe29VFhUwHErft32YKpaHAjX6sBvXAxkvCYg47YBjxHu8r75JwLa78Tpa",
  "key31": "42AFawG2UQs5pTBecacQpjXPS4GgGYzfH3RYQw8oFTM37NFBhXTgeGmQwsKRiYY5VUacSe3fNW9qgi5T8yya7z7k",
  "key32": "US3HMXzTj4SsJYdvXkGZVr9KsyxtVM3ntpsq3meiiqEpbyhNgBjh54nUr9TUPVQvHYzqDmm8aRoFZ2XTMiVqAXP",
  "key33": "5VViGD73hLJzXJCwnzj92eQ1ir52RukYr949x1jmfQV9yq4GF3ea5BD8pLNRLaRexSDPhNuMJfnE1jBr9h3MPriL",
  "key34": "5HRGYthF2MJzWyzgAZW1TUzyniUzS4GpYD2FkQThQVUADMJuQNHbmGvDJzegB3tjZesXb2W35Sb6QxSF2P6ULKEi"
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
