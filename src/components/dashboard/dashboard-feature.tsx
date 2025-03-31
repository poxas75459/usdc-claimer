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
    "1BJ7PF2vWFi85RjBvKFsqS6SJUQY4QYMxzf9AnJzzNRPPW1HGBcd2Z61Re3Wt6NZ8nfuRECnxxM28H21Ky8XYCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dHzSUoZVfWJ6pjULRZQngZVFUyAampPBoGyQR9DhJU3JBZQexFAb9VJdCDu88qadRTYphok8p5GVBfRYBRDUUm",
  "key1": "2TWTX2wxHn1DrGRBBCwoBYRdULckdZDh2xjfiVxXFPP3ntFir6aX4NdAuGmijRBk3FQBWZqCvaK7a8QTxHxbt65",
  "key2": "2ZTCpYhMrdED4MsBKhUR1Zv1rZ6GnKmRJS7M7k3jSViuYLGgTUAVH8dMSqfTGMDS8FowTgcVgWJVLfzFPuw2vMNH",
  "key3": "4F1wvhWU7MLNY1ZhFxYcEy9ZEoQ4zaMdP3BC12fjXCfBaY2AoKqUvZqyCc6cYhztedKzm6WaDqzvQSP8qfHXNsyf",
  "key4": "3knGQWoyCDsBpg72dgJ2JFEKwqBwV6xEVPutPKXrmwfjz4dD3aKetQbkYMxqyjP5rN5Vvo8iUfg1SmtMkZJLDMAw",
  "key5": "2uMHKmYLgt1kUChsaY9YFgFAXq96SY5XvN27ynjCKewNRdC72rhFeWE6R4bEeCumBUSFcjAGh1nNwvTX4Q3vrvkd",
  "key6": "28Y6QVNnzMZuHxvbd43Y5LqS1AwnsnYobq9hmCM7JmRRGtSb94btPYyLWmnCYJm4rRsNtVk3Cn4gtPfo1qrGnXYG",
  "key7": "4fqwdMhsP8s1HJvAhpqciDgYHZzM2bhhMD2nXKGC4ffgNRX6aEYyrfKDMNtSf4yLmW8AzpW7BNy55qEaMiTXxfXR",
  "key8": "F14wYReD2m1VXTZQW9rbq1GzstezH6rEUyhNupLesMe79n9nFBvjzVd3TT57Mw543Armu13EmpUETd7R55RWUR7",
  "key9": "2x6XVhRZoguVE4wSn4b2m4Pz5U3Rrb6sSgahjbnPrXhJM7TNvZJ8UNRNAQteyw3mcMniNswoamsyAEpWhkELT7d3",
  "key10": "rv2yZRPbAfQuTYdfutHPr2SipextgFcss3ruPTWqLZBx9rG9gFwjpprdvE7VnZWjHHtUsF3vNvwCzJcYFexcF4H",
  "key11": "1S4U4SqgT9vxywD7Z85bzMmQMH4qZFSz5wmAuRBh4JMebNc5pQbj4Akcjf5A6xpyyGZ3oo2XBg3C4xTRSA8wWZb",
  "key12": "2DukRCVMmDk7n8WCU72nEzrq3KqSegaeh6v2dR4DCVTnLVBn49DXra6Gvp5ycMCd93dpULkJqHQstVYSTksJ5MZ5",
  "key13": "4XyGLzFBDRCMRi5moRVNw9urpLBdn118rRYuPpmRT7NYpUgCTiDQDbD1UdUVLQ5D4BEcS5jXe5JmBU8dBUkxAPEA",
  "key14": "5fix2Mp8TGrENJ83GeMnMXCov92GKbYroa1LoTDXJMK9YmZ428bKHnq2mywegEsvrMss1emE3o1Kamy1ohgURJK6",
  "key15": "3RvCTkDyvQGByU54qr3udzQrHEKxCN2ZmQHJw1nqRAgWfsoHtsWTDUTEiadDAJ2axJ4DCr3P3oxvt7a2BX3Dsdab",
  "key16": "2ihDqJCJp69wkm5CvwXPdtL6JNF4rrLBU92DTt4iB3ihnNBjsSYYdJpY2i8Bp7mqwS545Fo1PkjSQJe4N4rcc2ue",
  "key17": "Wb3EiDQLdhfiYuJWFMd1aimjrMbrrju5didvfCcfJ1L8N22V4JXZe1rTFNBVs28HiNGnLZv23Jer5TCAu2eAy3J",
  "key18": "jVPd76mVbuJ1gsU25xSkKWAYsxTp9eUkDfBJM7dLA4VEt3X3T7tPD298UvNuN4um9sP8MiJCXpFHuS1q2rHXaxc",
  "key19": "2RUWkkDtfsXZihZJ8528AqqDfTyconMv1q5i8pMu31zsokV6GfMq3TTBgnhtjvVhRZWm4s2fwbiaszJB8BKTHU8K",
  "key20": "4mhCqowWBWc4jNJR3n4ExaDVrWFE6JmwjkmbcdKrgNK5tTAfv7tGLqccpxtzQH6iSE5b4HMgmh7PoSc3tMxQwp6U",
  "key21": "2Wwbf2dPKUy48D4e1XEhPS64ZUxH1ntwozgP2vtXZsDxHP5gmT81TJSwNrS11eiwnQHA1zNpumY4uNNjy4AaHmG9",
  "key22": "3CrisJgRAYxv7r8bvmVSwv73BT3s4b2srt28R1KmdFVb5thKisJ877Ad6yJJS4hSDsRCTVveWkxNZMuBTtnWtTNJ",
  "key23": "5NgU1xU94MpHcSGmCiPZSEo8jp7dL5HR8xRe85PDDksfKMhU6NnvtVVXRK7X4oZ8jWvPGBvuGEeZGqKkPjez316A",
  "key24": "bNqtoXeaHr5bwAmtHu6Mwiq5j7x5WuQGRyQtSJ1SikigxJQv8czHhDmrmxpgC29MhHkV8VicMGrHMZ4ncCZrzFs",
  "key25": "2GF5ku3ofoD6ZWpQoF8becGpNWD2gfyT7Xzb3Bnbu2sqUbyqDYBWy3kefzi4PzFAop3V3WgSvn6ELcrjWjditYDA",
  "key26": "5o9UHWfZwtPDMRXE43NvQMnFUtGrqLo2B5yoTZUcENp5s3QsxpX7dQXKopwsgrJDUsdnWzGL6EGHDyxeAVUVZ7yg",
  "key27": "38FAPsZwipyLBG6QY5nxNKkgdy141Z7rbsDswYGrw3TPrQkjQjrDugMtjWM521seRFUYycdPKsCPCoTPnPhTUMHj",
  "key28": "4hfrYuqHHYD2Fp85jogKcrNHiY8pZFxfpon3gzGAdyJUqFxYtdGW2cpUZf4DCYMTNjhWDShoS687GKFBaoBZ8j45"
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
