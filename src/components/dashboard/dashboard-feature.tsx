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
    "5QsWSW6XV6KJNp9oMz9okNGu4ku3zoVPHoKu7Dyw14PrPvtatccSMRs4sWjWGAynGYFcwoQXm6YdyVLsmmRegCfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "276gj3Two7gq2txT6mMDcUE8x1gCGU3eUDooaUHB1ghAP4hsDbMUE7EPAB3AqGLq265SWWbtaiA4Jr3vPBaKun6q",
  "key1": "nyXauSL8qzU2S9CcGcX6vY4n6m7s4k7wNqMGgEF9RHNbm29h2TJgFCXEpU5rp4ZNy5AZZNeFx3L67iX9Vsuaamb",
  "key2": "2AQfRqeBFUV2y4vsrU4byeA9Qhmw7fMgppDoBVPn2doqTM8E7WAC6FBiYejDmVw8hjkoTyHyLDr2mpoH3Vc2JNb5",
  "key3": "2kBbWfcvT28ZBXCYvtA6tpaPFyaBqDK7XXKfKQnehHem35GCMBddSFXZEjsweRSTuhwhtsBbatvLLFBcdJZhMnMW",
  "key4": "q8Ac15p8wcPb71iyhbZyvjGv1nkBqkZJD4sS5uXG4SmFwsuEEbpYHSKi667RRsFFvfd83fdds7Mj22kvnqs95Bx",
  "key5": "yVbMEy7NSypqQtUmNfTrEPf9Nd7S4pQArz6MQdwVjnh2EquakRND6Wkz8Mizfmq6CpZferA8KSLxuV1ctyaPdjd",
  "key6": "36qB6gSux3hPkgJQz2iWEEppvZT7fkTv5SHayyNVRNj8Ue1ycnSbxZLU7rbRjAaahXkUWVfKCcxsZNEnav6hCDMj",
  "key7": "1UvswocqZS5vivoJAhjN4wsR39ZMAWEvLKtg7dTQGNXSKHQuyKp2r1aJ9Kp8jutKQCi5irdPGWqKpEy5JYbTYxt",
  "key8": "2dsmEbX8YMfxkHhtU2BnjNuVsUqsLjQeu76NZEVZcZRoNaFwSm6VD8KAyRBNdaUJvnJKGLp9b2WGgSfW3ntysFLo",
  "key9": "5z2AgBfG1VhQwW1ZtumtyGxkcB1rVRYKtSkd7Bx8cfabJrFFqhJxBnCx7J88ocaeGG7jgfax5uEUsEAkVbQTTKAn",
  "key10": "5L53rN3hERnrR1G3hFGAtK4QPK7YN53QUpk3U7UCayN6jeE93DBTJ1ZAxhTASroQ8uEPY3NkRD47TcD1ykktnEGp",
  "key11": "2SBGAKvBi4MGb4F83eixdpNt6QXisREThae7p4ttjToZSvs2wjmTGBx2PzwtHs4NGDkKkjZ4BH1KWUnZyhwtXGCY",
  "key12": "5wfxoRa992h4QZ4GhpicgaeoPzjCebR2SeMDRyxvJvqbidV5n2irnbzBKAA6eYqtuU4dcVMtVUj7hpfrZZABRtHM",
  "key13": "3ovhzPced5xfxaALu2n7XgQcQiNSP4q8CebpG4eStQZV8RPccCNua7a6sSQD2wbLh6VMFb69YdwCvtHhgxhsPf9w",
  "key14": "3dooLzxvkS3CQAmdszMbGJv7rxB7KbCP5WreXEdT9eegBnxde4k6tKsyD1B2f2sPSom5W2aoZwhxpbgbfbtfEk79",
  "key15": "2RcpBEkyHhCPgAzFUCx5FyBSyxLEa9Ld8hjAzcwevTFmNm1QZXKoFUQwudKScdJrZdCHnnbcJxgZHiiyDz5ksagt",
  "key16": "4aT3qnWXEZfguS15CeLDhLfs6FR7VfZi9HTiuoB4ChK9gTa8WnpPFJe8TSpMpoB19yte547HJXc4mW9wsJvNuYx9",
  "key17": "5EYHesCzL6dw4VZkebsLNRHSQyfgo4eixQmXLU9j3HYakx5WFb7Tyi88cUVapb7we44Fm9s3oZNcmLj6RdFUaFQv",
  "key18": "4rSApkPeFDzHrLeSpLeSMg6ZJ6b2t6Jv4tyRtyeboRSqvXdrJB2My6RWHEPSfoNcQmHkPf1hVFuahKX47WVKXx4c",
  "key19": "2NNwuHMetnFzDvKdVoW5qr6px1U2kcU5rzpcWSCQ2tZS9zZkyirZwzQtG39gSwdsQ2NLKjDR9paL9TUSq8tqgzz1",
  "key20": "3cQoBbn2LokknuCUVJHxAJSEuY2VE8MY6upNvwTEL2dQij1RzbNJKLSsfhwtePaaiCiq4QkyzdqCg8MNFNTjb5gP",
  "key21": "h6PnAbAC9Pqeuhjis6TkmAuPPGKMHnAMdtnZiedLWH75ie2bXA8q4dhF2t1S3ciY13w4FeDtKtrqUYVGyVS6i2x",
  "key22": "4u9z3oBreCHLreaNaNQaDCwB2GpuBfxYgMycmsToFwk98qAfkxaKQoVuAPVTq5PR3WAiK7JHeDaVjCkx9RwedcLv",
  "key23": "5z1gioLgrWVfyHftPctBmUx5XUaGQBcvwWJ3WzBkWLCHeaFyT1KzpAEYgpjc2JYLxVK4kCLmDYy3269wcYRgn3Vt",
  "key24": "5uXps1USjh2NfW7stCkmH7nH6h4eZi1ieKKGAJQf3dTpqSz9aRsxr4K5mo34xTUMhycrFEsvSzroWM6pLSzjDjCt",
  "key25": "2FBoicaF6yQ39uyFPh8sawLvrPPQAz2PJg8MctaPrTjNQeoSBsVY2oRYKQBqLiXBsn5PJwtBL3p2A9BkvqAuwmB3",
  "key26": "5tbsRCwyixPHE2rRU9sAR19nqCPjMPywAF2Cy6KcDSYGbxUCRdJi4VDxYqVYuxtXwrjMiJFX9XjwRzCgahuNL6SP",
  "key27": "hA3vtoSdH1EDRTQwwESmx6Kpq3wqoX1RbRQAdwJcMzg2tKWcdgSezi4C1bmZbkkho4axoRRU3bBH3JFHG75Am5K",
  "key28": "3i4kTprjbGHdR5VQBgBctVbLCdRuHkbecu9txBAAbTLVrTj1uBPg3ax5AwFE9GRK4nwTSuTBSsZTvfdyY1ifVNPG",
  "key29": "3U92CkKZhPAmTvNrcgQLjuWzL2KJVgquW7gjenqwSFLAsAKdfKTRs9J8wLYCT7fkGDgRBMXykUbNLTJKUE4ntAv3"
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
