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
    "2NbmW9eUuyN7e7qVbYZQraB3ZKnWB1A17QuLt25R1iyVy5sStKQobBLxcsXsrkHNadQuvCD8A3g3tXDGFfwXGRwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWY3TE5P4ciytzSooJFwiYn5RXCCMxc1wDf6SpXjuwcE94tRFU12mhsY2tUQa7qZjBahcB8V4fhm5wNNJYFYSJB",
  "key1": "eKykzCiKpiGmvegtUL4FBmzyRePQcAgpCb2yjoVVJkrowJGaet14ioV9PTY8SY4CrGZz4G2cDDCa9r6AyEAmY1q",
  "key2": "2fHx1k9yoqxEUaJ6jmtMdzXe2QAJHNhZno1KaScxtXP24pyhA2hhz3jFmoHpaj7iRwDc17WjQemgy7KAhpmsxDEK",
  "key3": "2bvCw62135VKFpD9HtDur7NqCNnHHnuBxEG2CFSaR6TKRnUmsFvzwAyragn65LLBx8xvpkvNbter8HeD4An4jejR",
  "key4": "3DgmG7ULgC2LjB7bWG6dKGG5LDKJoyR9eGKdBWkw2vTabNt38vqWM8wDFPyesVqBbJicuGXc92Kd6yAL3seyNDN8",
  "key5": "bTdkh1MP5cwhFCL9jUhFBamwxW1V74MT1BCxC1RSsZ3HJYCCobb6jrUi3GsQsEfX8FCaVqmigTbgiCtALuaDDPD",
  "key6": "3Y4ycsdnJS6PvffXFNyvbEN1FWtQ6N1P4syXBKrjJDF7rkB9KaESz8kg3kAiDt4iuhQ6hryeSZgf54XWfFXpwxAA",
  "key7": "3onJh13zUUeBw3i3Ybzhgy6LCh3GZmiuQxmK17GhcXZRgXmwv2R8g1HKaaqNXTEVdn1i28KobUmpwDJTDih6K3Yk",
  "key8": "35sXj8cQ9t8DszBj8bcbRGfAFMaJXabaB6vTx9pfMVJBVBNUnKMvNXncfJVXCecp9B7JMWCBbwQidoQYGNoAQu6Z",
  "key9": "4BMkzQooKVBh66WhFq7QR8vNAkZSc9KxNRfVQuBetuarcG3PLirnLTn4qCxW545Lf865oxbmSoexjaaXGfve1Teb",
  "key10": "4J4UsvNGnMtqpfcL9hCwvwPg2RmudBx8YHGKJ67kEFFbHM3G55swSiuZY2n4iSbaBekPvy6nxw2tW4Hgw3Ke9gT",
  "key11": "5Rup3QtNe5GgQjLGKPgksCLs4ywaphHTwsiaSs6RpcNttHGzky79aoVsKTDN5pUEvRCeGBS5fb6nFyfuzFMkvQrP",
  "key12": "2fEC291DysCaSBUHLuNBFwUuj9QBREXw9m6M2rqTNF1p1vWjcMpM4Ffvu7ZwwCG7JYmzaKtfHGeJLJ5MApW8rgjd",
  "key13": "LN9zCmTAfnKv9RBvYVEzCXNy5G3iXuSnGcPrqtDrSfd7UZfd1Jj1vaVdRj8Gu9n4JGttpiGoVBkv7SrbjiDW9ah",
  "key14": "3985GuRCTxCUYMY95q4xM9B9fWXJB4ufNPvxPNdCLPPLa1nDDGbsWZNkhVHkL7tAXVPBSCSzMfJsbbtoxKA7CZTA",
  "key15": "Yy6mC5t9QNLrsqZ3r8p9zfzxFUW1ga7C7hnkC8ebkWZgw58vSkyWbYUXM7s5JEXRxzShBeZbiiHx4jfEYpH8ZFe",
  "key16": "vzeykuEFSdXSCJNKhCeKd5pS2sMWUBbUbyGgQv7xe8xDauZw7kKVjFnyvNqfHg2kshGvVkFssnVmaUHSY3PJ4pV",
  "key17": "5Q3SdvVewBTRSvefNPhvHSrPDVp9pHKoqhER9egEXCnU48mJKC1VeD4Y9za2VNBoy8tXzUHroR8DgFH9cHo1XCuD",
  "key18": "4784NcDCVtm2hcwqz7Rdpojt7EjY9MN8D1bvJtpzHc9bKzQygDe6rGFgprx9U1gLU25bhHhL6Hmj9t7d5Jw7FeYk",
  "key19": "4PyV8Hwo9oUEQ7TjSjxNyY2tGWG4kD2CR2eN2nrjRXZKSTPtx9SQT5hVMxygcusqcB9TsUes3MYGqY73x1s3SNbP",
  "key20": "2wRotdsbiSctBkryEcwhJtceeCTCxRGYBoqL6UbEgnqo9rJTywJAfLwx2eVjfhmrPPvtEnC8wnP7Bi7F58mZgvG9",
  "key21": "5Pv6kfK4QpGJWjWY5hAFnNp9b1b75WxQz4rHk7vgg21UBnHz5cvhX68MiTwRFq8qN7YKxvQgsVeLKsWNkr1oRzeH",
  "key22": "4ZZ7UY27bKf6qbiRBSvUfJcYzAr5jjvUBXBNrHwQeTiAYtgSH2FqTbiAZ6YiX55CRhX1hTiifpkhcXcCGrm3hKk1",
  "key23": "35m3qi2CjBfTx6SiveAUtEDfu2zwSRjyEXy2vgnvjR89pDz6Pg8RhmrTCRwzSYrgeBNVQgma2d51JUTF2HPW6FTN",
  "key24": "cZkJ5mwD6AxSLETfPZrbUzzH7vug8nd8JmAzHBxLo2Gke8vGTebysjPE9j6JPYPhERX6G3XykzGn6pMKoNXcYXU",
  "key25": "gfHv9q58Jf3iFKqpbo44MMn6wDEDKJGrWzjpCYRY5s6nzwobSH71yinE7b8k2So4CPpQv5o3WPUm9A5DU1v5TMy",
  "key26": "2s7pQCP1a8mLQx1fiFHadEZ3h7VCgFrRS3FvDixdfLdaGmFBxyiYbFyL4PMNoNQmh7KNKY1dg53e762QzQtoQKnQ",
  "key27": "4NiuuSf3vdX9hrcyhbzHxx1GYvBktoKpJmZ7jgMabbixVs121L2Rhj4XgUewzU2xefkJPkcgoiXLZQKHcbuSrdux",
  "key28": "4rXHF5mtnkx9gpNwN2FMwvBrBEGt1RTtgNvTXFTndghZ2zo3JE48n6BSMucoSP3472mtiv696v6SyEjxG7zRQAVh",
  "key29": "34AqhnZUDAjsbxL2LWsSLc8hymZuaWGUsxES6XGpDLPYexQSB4TS8MPbhWLwZhP7epTQbZLUULNtzi21AiBYhMKy",
  "key30": "44CBbt63uNVsL2hh9jD12aN7anJqKo6AZgFPQjRCLi5ucnR5Yj3HVHacS6gnNsTASoC75sdmTDNR2oFnMGtcst4J",
  "key31": "24DrpDfQbiLU4CvpbMdFcjKhjZZwK7fervB6xXyTUnWUV6Yt2qHqx4ia629rxpzkJVhQU45CSFk8BRjRexEcGSVW",
  "key32": "62ojAQ4Pvz2vM4PeJ6FpHP7BfU2woeXBvzpJmSm9QWCfLFcPzDtVDZDnEYUjsSYMJzeEWPPCvTRrgAFVtUyexGim",
  "key33": "zeHz15eGA7TAjwmQuBDeqiCQsdgpgjsDb7iY1kXm6hEXh89ztXrPx6m3mcSXepRiFd7ozvDTw6bkjZS471VkRiU",
  "key34": "4mWwfDYodAEDaDzo58nMbfFeAtLmHmq4ZuYk28Hr9ePwQBxCjJRRi5Hv8k1vuqDsgueL9c6VNQY2BTHqSzkeYpuY",
  "key35": "2ctXV2pJTtLjHRCap52mgfQK9t7LkQREWKwFDGgoKdeQqUMyqGuxbsPERWx39JW8Bd923QnriGF3TqutYerzaCd7",
  "key36": "5Usx1yxeg43tQVXuv2izWUzmYrCKz3tvVFoPqqJDoofBtFrHTuEkLPJzG9c4ttnyutf8SwQj5G97fFK3p3xb2xey"
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
