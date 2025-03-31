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
    "4baj85fYEnUmQ6a69CXU6cBqZdMdn6iw5BDBzLDoXtBjyV5ynfLtcfWbMkdQBk9P327HnoRoQ4ALdQozJRuLTxDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GrzbVfkWSbZ6VzLp686zu7xSTS5L8PYnHcmQYQgc2sZ8rTq1kVAPXB5hfvjd5ZEKfT344nFtyVF3GFdSriSV1sk",
  "key1": "3EmRymxo1bRXq1W3oXMiszy8j5nkRLDTikRCF5g6cdFd5K2u6EJqCLPW9s1TA39KCD6znvormbi9ZQ3jxMbBfZZW",
  "key2": "2BPfjWQF8FNgX4KpzmagLfZSL7AhUmB82fUWjekUDYiMCHzfFRWiYrZDsRZCGZhmaLcSdrAXpWfEba4FQiiSvGQY",
  "key3": "5qdGUHru7wfGCN6f9GJRXufUvnCxSVv9rKjTMo8EXXMGngPsm4ixEvvurqMXLtNYfzAzDr7onzoi5G1rSUMYm6fT",
  "key4": "4GusRzTAPmNH5jEVTUww6HYJkepuCMKMzxSUbmwbbDc2TM7VBptysHJZ4mR7EWxrqqBN8f5TgmMV6KWoVPt8mG9r",
  "key5": "4E5Hmphut8mgpk3tmE6P2dABiJjUnHK1tSq1FZ2FpVuz97aiveN7hkmtmnc9bUVBUrthtYaNc9YMk6jWWvt36jxH",
  "key6": "2VCwJRbtQ6Pd6EAp272dYHzxnCWMrBsLvG4vciTx46WnbqPoHPN3eVHaniaaiYNSGwAwN7VXiU54j1GLVxwS9jt1",
  "key7": "4WD9o3wvPimz2pHHNeKaqd64d6G5StJnmZgqajonuZ5r4qUQkU4LtvUofgtqH5FPD8jZxfyqmUKcxXYDfE2anW4u",
  "key8": "rG8u9rm33VSvJQ3zgCxE2zkhYuuXESufEHVTtevENvHA3bXZxdryxKb8tuvCgFZxRNLBwp4AxHKSjB5mHrzYERm",
  "key9": "58sFymQom61D1rRecfo44z8jQBgcfXnbmadwxkuac2LX36oPx9HNKFmJix2noaxScRyJ3dVgay3atF5tiG1wVqrZ",
  "key10": "3upnpcQ2zhyscixBGPVCLvnNtz8afheSEUABMTxMq9pqbmr7xmnYJvtTENgCbLrT4QZbj29rE4DxH1ALKSdyKvBs",
  "key11": "2G9SqqT7Wuf8i3XEjyLzBPuPyLqXKBNUo9j758MvNdSzrQ9wrgLH8Hwzq9aYzinQUDeqQAAFtgPYynyaNdyXRSYC",
  "key12": "rerKJJ42S1yyAfTjXrdKwCweWneLty8jYtjDhcqLmBHThCDLyakP9FcjmTDAAEE7LLtXfs2fL3JGrpAWg5URVj1",
  "key13": "5TBQcwG3Gws4sb95tYto6Tn6YzyWzAXDxTNzYtfMVbW4wbERjyJL1peLLjkfPDYBQsMuGmfRDjmAJP7dCjS5SfYx",
  "key14": "64VDMMCZXxDcYrECg2T3hxUf3HizSuGimMFJMjmNczbxNUpAAkiTLPyZhCX31jfNgJwTL3o9TtHrA8jndHrGNPkY",
  "key15": "4H1zu8VAbE9VopXP1vGYhsJdABmp5umazDwF5qy37M5HxnCJkgKydVThveTJSJMYG1kw1zTbtpDEByQczjEU6GLA",
  "key16": "3jvSr1gYLtB9MfAocH6srqD9krZh4ePEdtk8WS1Ecb147yNtfwT2LrJbvFfyASGgdizSVpQCwL97D1iSwa2bMRRR",
  "key17": "4CjuShYVA9irLve2TE5MJz2CL5a4mWFUsVTusQLfhmRpyVfWuDBYXLLWK96AouXcmp7n4xGXqMLzYCccTSJuipES",
  "key18": "2HJ8dQdocA7yYmrbmxU5L8TCdJ5QLqbFZpb97GtpurNne8UEkehYLyHjkcXaRMTowyfLn4jUTGWEMTd6wnQ9GJuD",
  "key19": "5nwF6FBGSAWhuSwMSBdmNS1Wh4bSEj8tfnKjo3YDuB5oVbp5kzncZ8ohG9bZpTDk98FW1H2bQevpNyoCPo6zdBx4",
  "key20": "sc5h8iJ7g1VvH1izUAgjfAiLZQ8KMXpi7iSyy2sWXcmHpXUHW6Tr5c4taTEN39JoYzpt3kB1TEbENjWoqLza1ym",
  "key21": "5XytcUfYHYBbipmLeMeHsWa2puHQdmZpvM58brBgWarHg9JDDUQucmg1yt6iVQNgJh9s8usXLUvd71FTLy2z92wg",
  "key22": "4MBjjxniLeb34cCutHtb7peaMDpYswbUKkuR6qLgjrDBRC1ZxZFHNW57PoP4NxLmmVc2W6duSGQs4dyCsBqyN2iX",
  "key23": "5wYonAPNFANpZtRJgKtrpt5RyJPrXcwM9MBBjheqim5ErENSm1kHttKySTDExTjAwtsbD8qjJLc4WrPHTKNE2XBa",
  "key24": "4GSN55vev2rp8X58Y1qG9VBU5bePL7azTd38Ta2FY3CqEMpZcUZb9SRDEek6XSPZtZMDsMSJSkTf5ewhJ3PfT7PY",
  "key25": "3rzv8P5bHYBmHLn2hJ9tqwpR9kM7N4de6vumPDqQ1rvUdV7tGKUoysGSSa2eo1VzFymq2cC9sZ3KREQ8HLDV53UL",
  "key26": "5F39ToXSaWtF6gjHiw9z81mfu8CkiALDcaw9Noy9gs9BsenyaRC2hexoYrope8R6LKipbyAw3fPdhsZ8JHYqrvo4",
  "key27": "4AQpfP4wK1Kvg8cQwuoJsmX6KvnVwZfeu3KFsxcHuxvQqhzgQ2ZAQyCUtvqNEq4H2b44dHZGD1hNkMEhK9VDVZjq",
  "key28": "3KfoGkYvCKvPtihWhARRfpb83gjacoWn6J5ychWqjhactFbfvJEmTBCBG1w4ijb2f1LX8dpWfdP4U9XoLjxPRnA6",
  "key29": "4BA1QZVafRtLJziPKEQBYN1w9XorTMt9frt6BBLXgcnssJhrdfFggztLnXc7XhsHH3wmR91AaCLfdoFuAUBpiGT3",
  "key30": "4GDDU69dL8zwcDNfmu6xj7LMLyrBRNZtFwp6291GfbpdciGzcBsBD6cdqefWZCSGPJiYuJJA7JWm3t4DwdR3D5VN",
  "key31": "4ms5XpZBpiFhiWNrSP9S9xYQovx921GJBcMy3DNNUytH8qD8WNkkZWithBCkYvaJiQLzxikDv92pKHHtWBz1S9JP",
  "key32": "2Vvyn1npjDhx4X6wMF6CB39pZbefbi8PHmK57wkW6Ty9upSo7M3dVMuhMJkafZ1rNq3bh2isfMJvjsALxHPcbZmg",
  "key33": "iPvkkBH8DX3HEi8X2dD1q4v9ehHVeWVouAuVbgVgaNjYu4ectq822iPZYsAHnUoD4avjJFSK9KueupYaqt1tQ4C"
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
