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
    "4pv8xwNKmxapp8dHYYqcz9W86KshqmaZjyfGef5VVpbGcPR8igUzJiBvcyH68YyX1VbnufPbAJMZAcFbXXhWecqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52envotrqWFbzQbRoHBDrtfnEP8nPcfH5nFnLhLEWyWXXWJGBjKtGPjLFdeedQKx9Tzu6BjL2tiMp1sw5jTJJAKp",
  "key1": "2krbN41z2Kw9FBWSR4cjjHWPKgcXh6un4j1m4qU2q1AtAXKTgj6bsypRDnvYnQAYQahu2DeAmzLzsRAbWSLeULiZ",
  "key2": "r3wqGGboA7UKExKzBmKYmir8STf57CqYa1eb3Mo2AJEcqnE7nY22eLB4KLvuZV3TKEecHpcnKhcw5acr8BkRg46",
  "key3": "4RfFSpibasiUhNhHW4DYx6bPBJoEbpjQCTbjQ5G5E3uiYwVxpHWwTo9E21Z16bRCkQuW4VojAxdFzB9jS9kobGWx",
  "key4": "4ziXxT3HntCLzX536VZX4FTxkw5RiS58Q2pEuedATHqkVC2dErDap4rz3ShkQC5RHSGgTZHfjfE5wNQCJnYWPBNB",
  "key5": "5vFdyDBqmNWAQFtsn2CumaSKih88WzHSccwzRxXGhZVeP6m9nuiZ6G76jYLoUD6sraa29KcDsqsmUTGmfzT7WQoz",
  "key6": "2Gs2hu5s6xcVxny5nPiHSuMvRFgTuFmA5heXYLdMsmwnCdN7AQjnUwEtkKTFgRcVXYzs3u2SeDtFDttVnMYbmnzQ",
  "key7": "5JUvng9xJLuV8mtZ91QQ1rcDUUtkBM7JYheLYQCYJf5BPaL3ksAS8bHFwfQF2ZZFb4vy48RAABgXCb5iSa83oKAz",
  "key8": "mV5Dg8m4fSGTNJMno4ZP9bxM2LQvZSR3fwHB1RfqkswHzjfAw9meDMFLTaChP3QcgbdvJzqBsRq8aE588rVMq5V",
  "key9": "4CfHE9uDEaZbPsHG5o8wV3YLjsBfWy3yCRzFcYmwMSb5xhePiJ61SQEPPmRHcAtut8j9AnmJuEtcA4MuGhwSVhwe",
  "key10": "r2tMksa3xmBkeP2Bw41ibMYg9z3kkUCoYUjC7oMAtc7L9nxh2EpWR1Hy76mvDBExmN7yaBT7GDMXSGezViEyiJ6",
  "key11": "9qnnzFv5jos1fs4BY9oxL1QKBveikcSr36FfFMYwVXQtQQF8Mch4XBNY8vCbGvYik3Cuk4viwGJvyVRmHFWgmXR",
  "key12": "pRM5PCs3Pm2AUGLZhfiXTkd4SAbBE6a2YoXdm95VwG4qvGLLhForoFm8eLK5QXnRzzSNvaKHQGwGkfdszCvakrS",
  "key13": "2n5j5oweFTEiRzApDqeD7ihgvNb7WQmbH3KJC74ewKZF9LN27PF2RXsdmGhe9TdkGSfmPkGeet2oDYnR8KYvSkhp",
  "key14": "4QpKKoHPGfNCuHxX9SYDjaiFrso4vQfwvUYjuspofMeGqoAAqq1kkyLGumSnzyMsiF38aWoAySc6PqWG65YaMeUT",
  "key15": "3rmhJo4yBwKtHxw5HkGpkLerB4mdnKgend3Ew6GktejMCLiR1XxJ2MQujZ7jrYxJJ5fnNYn8HvZhiHPyayFctRaF",
  "key16": "8LMBzeLbjbFF6FDKzUtZH2cKFkk8RPLJ1BrHCd5LbZSRwT2Dd7eSvjy7b3YF9VbiXBsNWGiJ11EENJbTu4DVcNt",
  "key17": "26Zwtz8uAXHZ4f1Hhv7GtaEUzpyy74otvta8HpgmDe2mtcgfGKJBo8YxZaymtBLbPQM4hLSWrTpmqEYmXaXSeXNQ",
  "key18": "5WvgJD4ZsLEsxn5cAEefKJY92Ui8M63bmA9AFgYHt1pRj5EY7rXPptVQAXFNfAnGFmfip1oDcgoaGgdEU19ixCuf",
  "key19": "4jnHP6HDgyCBHtsJ8R6AWZ1VK2rZ5TbMvNQ8ae5pspxU3geoFT4nVq2GMg2xoGUUgPRSw5hBbx56kgWMd4vS6bQL",
  "key20": "5eCb7mWQX8dMzz4A5aCNUzsGYDkbc8rW8e9mzFU9TcXD7TCj7FtTdcynY84ACTyocNFdYGDZsVC4ojxSonBXWC3G",
  "key21": "3g84mex8XuDsPqmkqwt64xfwzWHmkfdPBSuRsaqwt7KqvsJi6ZK2UnQXPncsSrEpFWhZNUZGXgQ2T4d6NphWctHb",
  "key22": "2NrHFp1rDgRmxXYcAzAFVfepJmv7c4FbqTMPcJwUB9PrjUzBLsmNiEoT8mDXSM8DuGMQNr5uR8TGNruFzXCZAm5t",
  "key23": "3Ajquq1AwLma6VzLCCMQ4AkbLV5yimhigMw993XmQXDqfxLWHidZmwzEKUkAjXPqJML83SYxTZ78s4U3QFH2JfJ6",
  "key24": "1ZzdMbXdsEbakhjqi335EhF28tWgvUpX4PnxLkW8xcj5FpbG2Myr4TodtFcCtEYZes7tes8CNvXVSoHbRy5UyXr",
  "key25": "52VqsMSsqzpwD183JRLLPAvkzhrpwY7hyTdbg59ifa3GHPTNWvg2Hy7bq4RdFNjd49yxxP5s6JdyCVVnRvUBvHqE",
  "key26": "4CG2qLpxgJtQkXJUqCpiGVGTkg1Kx4JZ8UqdaZfMwXzG6ZWVenQz22UgatXHHLar4sa7NgJJq28SQGrLp22RmeB8",
  "key27": "3h4AwRDinHFFVm9XzuXrkNmNsfn5vSZ2w5ozL5YYNGNPwt8uF6Kt2ZDfQBNgiNPExf3n1Jm7eXY6dVvaD5K5xrGk",
  "key28": "3Zx6UiNC18azrKESAQLLRQcHSbXccAg4WFHCW4MpaKNEcZpqaGZ7B4wAZXHCuBhC7Y4GEbccum1HdryfAHKYgYu4",
  "key29": "4Wdvwkq9dtKjVFMboPYtxDXpyNMvwfNgjg3LVTb1EgDEpoCvszmiCWbVJjS5UhWco65NnZwvzJbgzc9kpiHPvzHQ",
  "key30": "5S9kUUxU4izokWUY6uS7RrLPYXU9VzQzWZqPHN83twZJAiG8x3DZiiKbgSx5PbgA5Z3LpzY4U7VAdBvMH9maJ8vx",
  "key31": "2ihm2EHt9LABSjeA1uuk6PV1JgoAz7URzfmDQuPTC9PPpZzsSWNzy6fS2RwHuEENhLnxmxZPWLT4ycdJsftSDrEL",
  "key32": "3gkq4ugFMhWJ6AmgbbJEf2dN6VdYJ4HVAfqYboueAwQar8dS4JfXjKVuT7ZQnwp4uC7Xp15eqW4aiAvvAuNFQRef",
  "key33": "3vU7gHdChUQby7EZirXWoQUHDX4Q5CbHaUdGGRaEzGiJsq9W2tBE6X471Df8te1kHpyg8QpDbZ8wkyFLDu3R39sH",
  "key34": "45HK6MRdupgEowqw7GViMauH9a533VkV4ti71hBeGScXBivbar7LBStVxyetejwaB7B23b4U3gnxEjZXE7PieRKX",
  "key35": "3cELmT54Yo1ibYTS2XGzDV68WkimjJRR1Fc5Rv3YuVbNgVHK3SgVPHBz7eiXUb4dyJoWPdZGrrV9mzbJw1Ng2MrB",
  "key36": "5RFtQVFBVEr3KL6hv4DoPy2rK7fiKhqeea1t4C39Pj9vygUsV4D8fXze6YYufifnCVH937qAMUB8M9BS14PDMHM",
  "key37": "7JEMXsvGT7mgeg1yGZRBYEpcc9fKbz8cSraYdG2ZJkbaSyaMsyGZ4qZLqctzgcr4bNca1wLm2GzwkGJeiZs2KDq",
  "key38": "3xBmgxsZa2gMgTn5QPTYBfVaQLXwT1z5R2AKNbQU56aU8Ys8ThSjsVpo1czSQ4UjowrZdjDdvnZzhgdm2VdgvVSt",
  "key39": "3DkuHEDNbpr694VLmbjgB6HuwuW4Xoi2AQcFmoovVnCBWTn5oyv3gAEViBY4oTk2GQWr8kAVHyKuUPaxcefANXiC",
  "key40": "4Dfb4j1G9XJNw8aP2GwwfFr8UrC9sEPP71yik7U2ij2gAeF5T58U3yCnZMKVvCMNLRjxPZ8TGq7EmZSKgBiNSFWB",
  "key41": "2B9UKaqxkZTKrxsA4oVSZg9yD7zy7a8HwA3Kb3gbfRo9Zc9iBgPEhZRY8ixgicPB7bRG9aSL7CScGj8ZP9FnwYke",
  "key42": "2W8kaXHymqhMXEhDAwnAR87tiVZupCbe8Xge1TJAbJMxQ73UnJfnk8zcRkCfVkWG5DbGePnx11JozSUQgbNsRZZ7",
  "key43": "kjRYvP89hra5o5yKEN3qSwCUkMVVnPu7uAs1UcKCATrVpfG3SFzHQy7jYCc4psHPY48gRwYGNBvu2YTv4pXUqDx",
  "key44": "5An4jvUvct1JXqqQT6kQLhd5ZyNgWgXPLva6BcVoYFw1VxmJrmNsFcv3tecvaCQiknELVw6Q5L6GD5nHNFJoFmjs",
  "key45": "4rtinJJmqRxnXWRfCiz3B4YscUh9PYS6whGbkhYWRKp8mpJcU3beAhH9mxQdfM2STQCC5ix4CevgZnfpDPMuvf1D"
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
