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
    "18XrodbNeebUSeYXUM343rb6W1rPMtHtcDG6gr1WyuowFHgw22kTDvxaAvjPc1C8Qtz3jcEdEpJDTzJMbR2SA5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZBaMZHXTBHBNWMdG2N27hRymxyFn4NaHCYKVBvXori3u5WPe3T4aGJrqjUCW6zgrJzTrdGrYoV1fuZVmKGbTyQ",
  "key1": "4Zf8Y8k1h1qyQcfM4f1UspX8DQT2bLhSaNrjUWb4L44ELU1WJjVAn5Mj3AqYE5pUyKa8ffLtYQK9Nh7tc6sqRPqZ",
  "key2": "3MbdsvUd76MwX8FFE3kbBLRwUxZSB11pCGp8jpE1sohANDyW1Zs3gDdcgFGrEUS941j6tJMNnqS7frBat1ouFQPC",
  "key3": "2chVyGcdMfw1tcEArGAgV2CZX5fDSxMNMvNihdR7fXfeo8PXH2MkJAoHwRo62mPZ7GkghoZxP2cvnHfCbvuFwaj",
  "key4": "2giNdmSAR8wwUKUmU5sfDLQi3ZWYgh1Gsr5CDqWVA2UxPo1nHU7svTn7vWcRjWQgkdozbiVyAocS3nfw3ePXBNgB",
  "key5": "JZ295GysN72XVD3nXLrUGTEySpxfvT96UvqCj7D6r98rk8FteMo8ttMLPkimytTVLSkfjvTbSEgQPkU1r26RSoP",
  "key6": "4mAWdUS5srDKb6YNWRd2VGPVCnwGxSUhSzBkTSLJEQRUGpYk7TYsGrWfVKKVwsCwW2gSQqKSAnjwFR5wxw1f1PuF",
  "key7": "5RoEBFx789EWnvTdZVU3FGusW5XZcQa78JgyTKaDtNE8mKzsGZLYXiPmk48qYJw4pHLsLa8XcWagmHCrwG1Sfg9K",
  "key8": "2UzvAj2n49MHGdFKQAk1D4wtDZngUzK3Mij4aGCnaT9ucMkCcF8Rhmj5NW6NwWanRUCquhwg8Y5ftT7gMy8R3SJU",
  "key9": "2GdejvT9VgQAFDqomhtsQoqrrQN78EBgtH41AC1yM4fz8HC28ymvk6HdBcGq9UwykriaLRZrnSe9o8GDgaCfiAWq",
  "key10": "241LmaEKvTSGJtGmjkeoTS4Zfqh6f7D4mVEehWx1ZFCKuHTQKHmeHbGuvaqwJz2HdyZ6xuKVzJTnajqeNw26wwgo",
  "key11": "5mgbuVTq93t42AtGCDLGHex5XTLGgwWPyJmqZmLBUPcduWunGMDPsJGS3cziUkHUyasUichxa3JgtgJcHh3BJ5bt",
  "key12": "3CdYiYfzZeWkqkTdXSfC6FYpkS8vRwKcxc1UxhRaPNXCeJK2QYUyKv21mTnyCsFtZPFSstSAVz3e3mUeta38wEER",
  "key13": "4FyBP3JCbbg1jDFH6PnygBHAUqqjPSzG3G463rhVHBfGtTSV6BivaZGkdSohTjqa9EfHv2VK6ZpqQsgRnLgE9zvT",
  "key14": "33kwuKSWNksGjJnxmWXj3PKNtuAe4JqtAuKMYo3EgemwA3hJad1zqwTHCoegVyQug71ZGX2i9XQV42oPRQfSJ42Q",
  "key15": "F5JBJzTngJbXuJXXUtEshnmFaV6btcj1FPa5ZFKwMSfDrnk5osp9M4eCm4xcs9mF4ZiP1rvgYpoBAWLZGbBe2x4",
  "key16": "5j82pBQMcHd8a8UfoFcKAVsGyHM4LbUWsQE96e2kKPJF6ZBGYBnpauXuGnWqaYkjGkummvQxCaHR2H6XGixPpfn8",
  "key17": "38nTXBfugshHXYDwhhLbMWBzPM8UH6gYxFk7c3m7p69YH4J8yj92pKLV1f3Z5iLXsCtDU56hmM3XtUJWQp6PpjD1",
  "key18": "2BnaqCZTz5952oHk6AZ86oyoKUzf3hoSkzBCY4GhdrG3zg6CXu3ZvycR2yabQwP1gDh1pG55ibB8Ud98UwBxxtuz",
  "key19": "3QXMcXhLfvRJR8bVZhQmgyrWB5e2WgB29XbJqA2qEp2cFbNUUsQSHW8aQCNUTFLCekPADjTUnm1g6itmJAYSMgAi",
  "key20": "bRdunrKhEMrP7SU3yspCiyk5AEPATmXB8EdL2cxGCF4XPHXALqokMe3SKXDJGtHaGgfJWNrbEQKU6M9zV8yW2y1",
  "key21": "4qNKmg8VQbCFakW2QvkMY886dWcjzBmVnxUibVMgJF15tn4njhTLfU8rYbFRU7rMUd8BfBBEyHQ7vizJp7eL1uCA",
  "key22": "4Au7LVqdErVidWU1Z2nFpei4sHQ6FxAAKBBj15z1VfSTKwVZLmC3C1uWugmXSdxvPGiUjAhk2YYAgSnYz88f5eJ9",
  "key23": "4UiyfLGJ1g61aWmd7rDwzKTNRM1og3Trf43P8DBHCzMCfLCESrox5GJmzq9996263F584UUUcrWPbTc4nF2cTRyG",
  "key24": "3ZRxAK1w75YDir3gzHZFazysmWHYXxkF2a2CRjiCLLSg6okCmfWLh3PiuuDF3KEAA1mDRTmo8wpEoQNsdvjqsGeX",
  "key25": "3MtRy6rM2RJkRj3BmuH35za1bVqybyRStnNcgGJSB6cXr8S3JGCHro5QE4RhT47qN3EJgK4DHMYVmESeQ2LUJ7Xt",
  "key26": "4THERvd8YZLZyTNFtfx4rf48SCfg9b6FMbsxwyeJc138c4TGHRyyVihZj9xHAhoGRNiiLLA4o1PUoemYCHyi9X9B",
  "key27": "3PXAEfBkuHc2N4ALV9bNSakLwZNzZZTFHHfnSBdse2xqHiND95A2gV4mwYMHpr3zDVuPB3yrr3TGiDrn8CoYFjSe",
  "key28": "54jEFRao5cZqcCPCZ7Bm35ET9FzrXBTW1U82FLiiUrgHe5LME1L1ic5Um6RCAEKYtK5TxfJQdzMRSAxvB45C7iNU",
  "key29": "2HiubX5hLpetKq3UBhriSNSFddvjytBW5NkSwSSSE7hgGKpMagQwdWegErdmxubqTnE4aBHdEBukSuYMHAHu8A1v",
  "key30": "3P3x2KRPSnK7t5z4tEHnKWwcgAYWFDE7eoaxpo936yqWxkijv243P5tVNu8StqwA1kDCPQEUcJs9VgTKJyihiNb",
  "key31": "4KYkyYXyevRAsZ8K6d17GXL5TVLiaeHBxMfG4ZzqVNFQbzoZUUbNo8xG7FyeE2HhfLvaqq3Eym6ukeFGkaaBRkik",
  "key32": "47WZrY4d78BnEMXBAiYe6LBEVJVxB1fxTTW1uPgdAiHrd3zR5GCPWukyeDWGfKfHb3mACgwXQDtb8nmTyoeKHkjp",
  "key33": "6vpP7Tr641Xak9KqDheEbgxk5ru5yisJgmPhpiEKUvF4CBC8XzgSiFWdb7zZrx7BSAc6reJC3KYzHvLLs9Fes7J",
  "key34": "2igspXWa88rsVgQLXU4sA9Mi76m6vuaBDHVzvumvgeDsxtNVoXqtVy9tuKVjSf5cVNzZV1FHxq5iWsmV6MuakE3x"
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
