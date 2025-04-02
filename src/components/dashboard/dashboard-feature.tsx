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
    "5dUEi4QGsgkCt8jYN5HNWEQo8XZu6muFoixTdWoMyzsaEaZ4PYUXrt67CZePFPQfeYrR8ViEPWEfRsNxFeikMT7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaEmnVkuyzk14Eeo4qEkwjdxDy3yXFWudsG1mjgMzGQzCnRFXXNk4s5nBqpCprSvAa2sbo2e6N5hvFt2cDTCqkv",
  "key1": "3ZDBK2RWqEBz2KcwARJvhWu1RGXr5Xtmaiu2qwuetspo6Z4eLich45Re7vri5d2m7oSeoA8r3QzWdFQ3y3tX9ikV",
  "key2": "LmBRjje5xwQijRrRrYYZk9SnTTf4gnTiF7RQaYpLiLJnTE1LfeBKWP3B6RufFyzLC4N3ybH2j2t1PSyJUYfRbdn",
  "key3": "4pdMvQP7Umzh4N3nJVkZXoVNfsMr21SumyPVtnDcNea9a3gB8CyCXvpL7MGMnGZ225gx347AZoknkxiEZUhFSAy2",
  "key4": "4PK9v4WS5kwfy8nnrSCMZKsE95X8x4cqDLXJMdJ4ue5tif9DQzR3AfQCdjd8fsNA1RKtNje4q2MpjnKC5ESjvXd6",
  "key5": "2x7R3ZRm31QfWhE5qCTa32CGy3i51P3JK3ZAuwbxcsaVbHan2AAoMmoAUQv6Xc9xGhCjDdTcbFwvSQJ8WoZamPdf",
  "key6": "hSdBU89PWTS1MYmyPTv48i4RfSzqLpjikbFLy1ak6oK36ezTZCQf6UgBJCdP77M1tMRhtdYuVMyKeJDm8SrEXUF",
  "key7": "Pm6fqMTK1BLPFDhjzaMvnx9NzX8HmhJ2EYm6enonux8KeNFzzHsmFSm5rq8baMRMGqV4jvPeFwGuYjUB55NuEd9",
  "key8": "128Q2ebfGjmqd5kkmcZWzYmnUAeNDQrEkhqjydkZxbsb6iECQvHZdh6Etwt5H6ZMxfM5hXEe5GLPUQ3kCdmibRGN",
  "key9": "2SrQasb3uS1qBKCbc1PwowYa5xnJf3atxqPTSGm66AP3fa7PMSFWaAHbrxdgMRvsWpX2H3UBr1U75taXctCzbxrt",
  "key10": "9nHyYovV6kVpj3u92wRifvLDizkvr4ZR36moKcpAXyRDbjEwRs3MQx8basDGEyYFVjKLpCbjvSVCYby2qNT8uny",
  "key11": "7GJLDmzN3XvkKmrgJUbamTxvJRMgyv3bfVkeuy1Z4R37TDTuTPwgHdnjwkz3CYfKw2MfngdCrHqQzec8TAk3Y39",
  "key12": "uo4bQSxuphddJj5DsAsamLtGXzD5ZkNiqaMHEAeVvTDHVD4gFbBM6rjXbsPurRyTDL5y5BRPXdb3SDu39jjDZti",
  "key13": "3vhxyDnScjKN9rTGQjYpCpN8c2Nox8XXYjtwTDHD12ynXA5qqU5bnogTqGarkUpkLTDnYzSuK2d6QjKpkvcQQPQE",
  "key14": "2AJqcTTY875sAZYy2DjnJpGMP3t3S5ANwCE8gFKNwh32VgkDJR7WMHDSDr8dsobtULdogqT6CZfTr7yVRiFiwNat",
  "key15": "37Sw8Nt2fsd8Qdef4h1QTHppZUranvSE2DKnuXUGDjbcXYwhTYRSa4n8kSVJqtoPmPG8Mf9ow8yJQ633bVadinsP",
  "key16": "22UybQyWFPsdgaubwNszmCGGDPPSDUL8yQpn1FLBQV4iCmZa5vYH7KNN4t17fiGp1C6b4APX8jUmLYQR2uXxHk9B",
  "key17": "3SPSMqbXw26XUW9EbFMbH5neuYDmqjQJiS3JWoMmxTjMMGk2JAFQi84uTSQ3Rk9pJgGsDMRFCsQodrRyZig86ihb",
  "key18": "4aWyGzsw51RdkivADw8LoCq1qJN5FinctbWNQngFbscrzdrL5KhH5rkdYAwxKf83KoyXMpBqae1cHGhGdmJvtsWM",
  "key19": "4wdm1zU1drDcvi7NWo6byyRTrpKHQn6caRtgLuLsj6HMQKv5iWporixD9zMJFVFBPfKirm7pCotLBvhQADxV2twg",
  "key20": "41AgmQHBUy8REt2ASCJCjrmTzAzrUHEJL73LJE9zPKGmJ1zY7BDYrTa7Saoh7UddSTGct72j5PN3bKYxzmPrJfif",
  "key21": "48hgfrnmuCxvrP2Sd7AVXJsYCF7fzqxnzVovqRU2h8Jte79ussJiGyta8atugojazUUrVhRSBdTZT4utVuER19ih",
  "key22": "SdcmRnWDExJchrwDXCnS78MiKhhtReG3aLFKxnmn1WD4XGpmtPtgqLjkNpQXeT1Db8xHTzy3czPXCPS2sfLB9Cs",
  "key23": "242C13f5woLBgiV23r5AtnhtZqAtpTfbuy9M8ULuKCW39NDULMT4YFYYSuNwDmnGdf8UShuxtr3h6oqzkdSNbaEH",
  "key24": "4pXK3cQbfCSkFFPogVbDEfsckaDXeTPUF78DAkQNAxuo7FtHDwza2kwfuV2F6RzcQJg1EUvz12QkkDSRkHqbd5oW",
  "key25": "wFcBYhzuogar5yH3XQQthnpK7w568WKsyQ4Rh7yiLRPueKQPUK2aUeNtMWfkSehLSiTBvha5om5xUFxWQZ61h1T",
  "key26": "964W7sKeUBykMXbDCe7ywQRa7gnzeajWbC5UeG91YuJXvHEpuzrq9yuhWzJiNWu2LZLeY8KQM87QFAaNs4ufkW4",
  "key27": "26op8PzYHaXjPtbHSzvGtdCiBqGToiNGKWrjWLXbtZXxUHzuXJhEgwXUp1hVqpqyavYDZQvpjSCDHVWFQAXC8jQk",
  "key28": "31kEd8jiHMm7muwpRCtPWRGdxMFsUSWEenJrAn5pfYmiFqnYP97wwnvD8xRybafwvsLxNeRteLbUTvhV1TgrMmFS",
  "key29": "DM5yxBmPas1bdXSrS3NxaQpojacMfundoKWvGS32Xt24tHCWHqMuhhtFuGxAEitfc56wqB3UYShk1fBuEYAqKHG",
  "key30": "23dfXLYEZx1YxYZeDaqRexmWDUYoJN9Vo4KL835mGPxZk7h7LMF2P7GdRYVXsgDJ8m1JKQEMqgWiqdwkqTvEvQua",
  "key31": "92HRqn765UZE7LidWA5kkp1BLfpLpfeA4LUDHsgLkKdyqaF9KWHV7g9iU3JphmZQXkmhwJVVKDU24ADuTHmfS7q",
  "key32": "5EmJbzy2WAXTBV5Gm93mFkzcoB9GtFdJf9QtFZVunapZ7zAs7Uwf6yKjjeUcEWGRXekUaZaFjwb6XxtkJAA1spbM",
  "key33": "uKpB3YZJEcNXVA9cKwydaXLfbVKZho5STNun3aEJ3izQfuGjUku1W1RcCmyim8HBH2AEPgK532QsMRxqr4hxaae",
  "key34": "3E8zjzfDMM7SyW4P1NWH6NNtSyPrcTmwg7ddUYsG4qideq213A1nfPdcxGbLHNBMdtE5g8bZor4Gi9xQ3v3PgueE",
  "key35": "5J8XsdbABG1xWr1HLk8Datv3JfmaHer68Xte4wBHeBDDxq3LdCrWQ4go34LWgEVs3axmAM5s7U8D4kRUAZcCsLUy"
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
