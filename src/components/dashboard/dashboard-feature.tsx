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
    "3vZMMH6Kgj22rcvs8hKmy3tGmUTgrY2Nfq2RPT1FvxzJXNtLPQmiidXkmcHVZYqFRgCirVktWXwx71GWy1cN9yvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDWbYb8u4finf2siZ25mpELDpsKBEJssHPPhuvrLCg2NGAzu5EbBLdkeFatpdXD2uxXJRAcM4NqHNyqsLeQDA9v",
  "key1": "233gn2g1PZSyTJ3T3vDZdhNR8nT2nFWhs84LajyDnMG1Ggt2pqNrHiNX48tCoQTKSmdKkYVxPZewYzwiUoMYB96v",
  "key2": "39Vps6UUvZPYA5h9nLHxsUAa4YLr1LVmdDjGGSb7UsykTFAxJGoWcdNRyeS5jP9RRgWXGdBTktHtE1Dp3AC4k85t",
  "key3": "VyLi1dXGJXYMaVcZV71j4haH4UfHX7kPwzpWbpSBrK2nkKpXNb9CfoTmhBvaxefp4oJn8vS9M8VC93CaTCk2PEc",
  "key4": "2JPbuDde53Ern27vZVAMzQW3TK3AAoTDR3T2akATRbpLVc9we6RrjRh1Txs1UQ1hgzkAfGmokKDcnidph4YUUxdN",
  "key5": "5VbzRg2YB3dzc4cheWB4NaL9hSedPKoVKXPrtgsqELtssGuouYgTVx5VDTa6PFsheQWyV4n2mBARmypsmveVwmew",
  "key6": "36N4SduGBmtvSpCx9VXEmAb1FT4ot8oL3medtUPRemPHqR59p1q5QWiwxgmVA9xRuNcCGMXY2SjvGP1yFqybVPNF",
  "key7": "2ovAcegsUg4e53F5bs5n3E2yUW9hgf2MvzcLTq5Y8b4reKQLsrcSmeEZDuZBDPMgf5LRBrofC4FyrUA76EaHD38t",
  "key8": "2QJRPy8ZEFcp4s5mU3kcbXzynJSXRgLFZXUnCtrgAWrQSKBYS2ApFYXBuYgwZAWHhYzAg3fcxEftf11aM2Heqedu",
  "key9": "5tWHoKU5x7odXWSKbo6v7WP8wZ9dLNhzRLKsyv4sLTg1JW7ovQwqBFGRDp4Cyj2jYnEhhttmDUtbyDSaw22RL65j",
  "key10": "5VfSrTdPbLsPtHYQCFkbVKqE8ckeTXgSBjpT4SQF3mQ8zKF8K8ike6oB9amsNS6g8mp3AF2rds9n6jqP7NYJmu4V",
  "key11": "3qjDYeQpdC9oGnun2epttqzWbjW2JCd8wrBp2SucKFRu8oMx2sXJwE8q3zyZ64Uzw8qTyRE5bK8yzsBeoRWRstBq",
  "key12": "2EKm7CcDsxBKgJLUoHtEJNW3ziGZmvLsEfqmLDL6ybgJ8va1aK9sp1fyFzBSZk2VL9KehEQj7QvGKcNDzpudiKGT",
  "key13": "PZTWQT4gSij4EQsFfVeKZwwJTevjcrEEhUbE29zWKaExgByxZgq7M1nvA1WEk75KedBdA11m7pxiLURC8Z6HToB",
  "key14": "3fR2feWtNUnXt5g91ufQmCJ6VAmEeJmNrHjqz8b1DbVysTPTzJ4KeY4J56o6cssLaDEmtn6ZtQjbVcQHkwahQS4R",
  "key15": "3Bfp6qQA3dkzQJFGGYeAvDmDkTFMMTJieuK8RyevYJA8K2ysXQFevuuEXp44xiTiHgqeGpHCZgLZAk8RdDfW1ese",
  "key16": "3JRGmUFpzzjxJVPLu3TXV34USesCiEysnd7hX1kZoSLQFSFGD8wRVCmRWwWZaiKySYkQ9kcrYkq1dx9fa9WCc9YC",
  "key17": "3d8e6GNoC6PF7wpFd1sGwcmdEX8WzsFnMzRFaPkJYDXQKViHht18TnB1uDbE7hfqw3ph6Wwn1rkhQhneDhahEXYj",
  "key18": "pPnkmGVz2WKD5KdhjpNYx7bd6Zx7qHUaMbgKuwKBLChAGp1BYijiHdfH6BLnPWuKTo4x1MHbrZdxJfJSfXtGQEE",
  "key19": "gPLcUKyZycXSwdvkPvEXp85scqBZMehFuz1nANt7YPDa75ZATt59giwVKLcdEnR5UvxtpKE7CB6Smoro3Jsyzwr",
  "key20": "334Be9XHXDkmubBjshqd5H79jMMkht9geCQyXNzW81TKwpaCCV63rT3QQXTAbdLZfy7rcnsi5rBLR3uAXHzacM1U",
  "key21": "mjxNkc6MQ2BJBtuVxyFCJdvwAm6Qoq4VigVVoVH7hjKYGWj9UJg5nabGgyHqvHLcd1ZkMq7JteYj8qRvjMvc5F4",
  "key22": "D7zCA4y5SdMzzp4aAXpsWMNThFFNBvnAcWCzNaKXgMCUDCAqqWo9GoZX8Ay9jCnrfbgRxR53cKDuUT7YQpuX7Cz",
  "key23": "32g8rCYySp27EKxMo3KfVU7pqXBrStXSrw7G6e2jswbZJ52rVBCczj2Ains2Jb1xkgtpdt1aU4UvxemDyR5qcrXt",
  "key24": "3SvU5keLp41ShSZwjJWSUe5NBUqZw4Aw58T8S8X3WTM3gn6SyMmp3jYUDYSqbESvvL7VjbWUtSTYrh9SA4PqB4r8",
  "key25": "32zjcAiusqkKfb14ZAZ9miZcppynUPmiPdxfeFjCfS9pZyDz7kfwJ5zBzLrxuGfAk59NAPuSkMhgHK3xxaBohxss",
  "key26": "2wF3HgQ6HR2e2RBicBey3MurJh99BfmzSeq3QqsRutiuTRYt82caYy4dS3Cn95X4W5tz3v2puZB6CBm8NZDZFHd",
  "key27": "2gBs7Hf8fZ6T5DWH6n8148uemGd1X2vwtUbzE9zuPyGeRh6Yj4eweYMU1NUgHmDVATT928STS3n26M4pPrP2nraV",
  "key28": "4iQ6Dz2w9xih41hcHxdsyH4VbT8KAmQo9ypYDhtk179FgnoHEFRfLWatGwWd5xHA3FLXKTVgAZznethUZmn4Y5xi",
  "key29": "5LKBXrFw2ACi3KmZ5Zw5q6K2s3hrMhwErAZDCno1FhBu5RD7g4iDKm1mxhiLGQ7nEBMavjgeWpCNfV8BJAe1n4KE",
  "key30": "57oJtTd1GFrKsazh7h1gr7LXZTQaepz5yrmRxHLEJMWcHA1YXWGLNad9ZdspDjePDz9QLhqSt5DJ9Q9cVfFRxbc1",
  "key31": "5tSPFNnyD4oLTEa7GvH3MhyFFjTCjy88FSBwD8zm8gwTE9TekFvuQYPRrse9vGs8GWGa5N27ss85scaKuxYDZJCt"
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
