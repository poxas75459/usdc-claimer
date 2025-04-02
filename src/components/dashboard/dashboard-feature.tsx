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
    "42KAHr3FQYDvHhuiesKza6AGRPc4vatCYoJP3P6bN5zyQAhydAaGSzoozYFMFTvWgqSTfwshWNKG9MendfrtB7J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRbRKyte2i5QnHFi4J42w2MfkRe6DfVSGouXYovrDi7CXUua58Qj1BjrgUhf8AbmZsjNaQGBVQBN6gyUhLN2kHB",
  "key1": "3RJseWHT4tMR3KpUX1sfVSZqu4AqmCeBnrV6S4qVyadJofbGao3hMo7Zbz6qAVexQ4SLvqfsx9SNmYqHx6cdNewD",
  "key2": "4GHM5CgPdQKthJ8mnmyoUu7yVGkKEXaMs7AyLpTPN1HxBmEYBrm9Gw39DAg3tDvjaQJe7Xvg3QsTxxgU1WL4UW9G",
  "key3": "5KrTuejiKChPEdLbPbgvKcvc5wD2s6sXs99X7BSGKvh7vVwrWNvL7zJQcmdFQDtv45Xi7scaT1bfoi6UUTi5a1F7",
  "key4": "4gfevWwqnRvv1qYm5CwUapLiuL9h5sZZ6f1mmd7bvNysBiCfXKecYdiJzpwg8YAkpGAhcz4xvUZTeSXBrfaM3oD7",
  "key5": "4j4m66afLe83CUoF5pEVq4txorPx78qMrMVU32MzbJU5y2neCL53k9RZ2iS66ZYhBuj29168Zd6RfjaVe8rMVZoH",
  "key6": "5VBd5jPUnowBpYrcSn6JuAsRkbXFL4vy1uJtD1hyB2QrjoRpaLtfaMKgX9HpKbx1NJqJpKW5ogcbs8i8NNdFtZrq",
  "key7": "51qmCkFqUwLXFrJGkKz5bnebpm4RmrDeoGSSavMBsagUqVLioXuYzsUWmxNvD1CT8BaNef6DvGCyecSwHLX7jQK2",
  "key8": "5yasgFPfxGsU4wCLoGpzWT2Tybg5wi6LVUDATedaKTCGqPJsA9Z4wHWhHG3CJbPJh1rkxosAMQGqyJVFbbJNFYP",
  "key9": "4ZN82tVAz7kiTCMqVw2sr4p9VPWdLnU5A2crqi5DFsNDCJtBPkGQfcnzUqBmFwnNQQD3gDj9hxLM4suxCXNfd8uA",
  "key10": "25naaH1kP11uquoLF8mdBqjcAxJB1Fts6oco37RB6QGrFDbdCqMqa1cydVHCWNNnhoUMG8q2U5EsfRczHDtVcpQS",
  "key11": "4zfMfFfgZfUY18nSJgYEextTuvFAeF1Zb9A6HLuPDWkZAWdgY9w5GqGH1C47GHWGmmHC7hmvGgc6KBedDbZHZLwy",
  "key12": "2YQmktDoM4rTgZ8vfJLWXMTY9FjWeG8SEkSYuDYoBTecrCZwE13MFmfBzS6w4T8Qn4advdRwC9wBA3SZM2RuKTuw",
  "key13": "3bXNPFqjrd7Ld2maqJGBBaPenU1Jai15rSyxQcjJ8w6Qv6gXY88ZsixrtUvpeE9cJjLvA2dc94BJQgYoYWrW2dXQ",
  "key14": "5f1iqZkGBhP3ZSamjoLfenbAinp39jwFp3reMw4Ra5dZdtaomcikH2ngnDNv9pVaRiFh67HhhpvjdhmwjdxRBm9n",
  "key15": "4jHKyxEjYkwnoHDCLuGicmKpKeKCLmGoxMeg92razWmhSk49pWmWRp2B5wSY7MHt9zffTGacChvtJgiRiHLPbjor",
  "key16": "3Rmsouvc3JMHD5XuUW4p74zqopuxmQpVDHvHavfwX8YErZWN119SSzwgA3z8LejuPWKSMWCXtcXsyqmT56y9WXxc",
  "key17": "nnyVhADDJQZFR5BECehmoVfMtVgUUYMDNwBCQYwstCj4q9fqsdysy3CEoJyrcKbKgPMT9QUXxXJAoq84UrTahME",
  "key18": "3gFoTC8hAgC98hpbzkmjBMgQUuBF2xAuE5DfxJbbCRDdoiHx5LxXizQUFr6ea8PJ3MTnaRTQwsWLnwysrdMnofRX",
  "key19": "3mdX1dFw57Qm4bipoz3pqkzQQeRzV2pKeZEJwHPmgxjJKNNNd475XFSWDwwvz7LohgbDtDWo9eTLYn8XJUj8Krth",
  "key20": "3cM1fMEDRwU6LVbKo1V3Gm2V7C5JdWHLF4dQC7XUMS99NuyHfWzBmybi2wjn2MpEzMxWqoudYsRyxkEArqn5rud",
  "key21": "3y6tQNLFdcGy8Bw5BycvTrYBzbmXQVSbExbXWwivHxbka7fR2peuESvYHGjw9zfkzAfzWGW9H2ZVMnHHpNunt4f1",
  "key22": "5woQbv2q7UkK1eycSsTGZEJFKQqzHpECVwWujy5Khz555MLXuFPxJ5M1rHsLsdGTy4d4dEDNFqMzmskcYggz5qLf",
  "key23": "5hbQBASdn3GoSCNoqSd9JHqh9DjYaDwN5ZSuYWKPJHUZePs4DorkKK6n1mq39oC3h61Xh1kgjctkHuXy8cUB9sy6",
  "key24": "9TjnaP1MYZxrb1zdDzvJcBjWsHYo3W8cucFWw1i6hVfni5BvtWYmp4UCrLrFwPpauxE13mG3rxWogb94324cP82",
  "key25": "Hq1WuTKhGcnomg6pAwZkk2ARCRdC23Yi5TyYtofc1QYwTvXQzvVJkJ5CPD3tQ32mMUSp7w2h4eLqQ9BK6PKDz8F",
  "key26": "5eFhvTS9V6A3xfKx71bbVto42ZTGmbTg2cD34jm4qETQXhCdbpGPTaM5hY2CvWd1Fpw6VjTaci6sCpuT7T75pAx7"
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
