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
    "4NNNDUciE7xRgWiUHjaEBJzDTBv1xvdF7PbZPHz3ehxKSrbak6E2o5v29jjP8SC63NPn1jDsfGFEqW2dr4JvwQCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFiwrzSbfo82LMJW2JZnzYKjFG4EJ3YxfAeoNdzV3c45ee1zxAM66bkH249yjdwrfy2k8C5NNwqf6FEmJFAeASB",
  "key1": "3oJhDuw8TG6Ghh5otjVUetkSEJZLRjQsdkahPaiuefthvkQVnidkizjcJr7zTF9JLCbjwns6Wjiit9VWMt2qYuBm",
  "key2": "pwQ9yxLkS6MUHtGzTgrkjfNH8aczbKqzW5SRaakQttWzRsQ6YwCKsUUif89b2jQL6KfsDQgW4yc37xsfMw8oVG9",
  "key3": "39KXDR6fzCwPXMiW2itreyuetN17KxHkZThsa4SUZSnSEsSsjp81EtJ4MEzFExkh66XDrMwVvT9NB7CNT6H3HuWe",
  "key4": "3fpLM774nn4n9bDSkyE7ZCU6XPBuyWCDASVX5D2oU4axVNGjvUEJ8KMjdqMMDgzfpbacpoHJqmuuE31HkDC7XKHT",
  "key5": "311nqPr6Z7bwXvmqo9G5AJGpZdymnqEom2QBK9pw9Nuvac1h7TMM58AkujtFx2VzFAcwJA9f3gfznqHiq9Tq8xbV",
  "key6": "3YtH8xZPct8hqfWu92obSRnpMq7GZGB181SPDsHGVFaNmr34V9mdAqB5P3pxvLA78DKPEyeiQazSv4JQS9L3fDjt",
  "key7": "5kMHznaYj6Tkwf1mGAVc58DtSqVgX6CJjfKHtraKL9uQdPqeMLMNzK6Ba3ahZ5hkzBtR1V2GpT28kH6zfycG6fYf",
  "key8": "5gSgTPfowaMmWrToubvs9toDuMvPDCT8Skh5aY1Tk19sTwHrMGrXQcbrH4pWChEkLhfEWSryGTYPnWKaLN3P8FdN",
  "key9": "2YjdtGzhSnaG9f2171aAyBakrpoBc44t9LcPXXe1WCPsg7kzK76h9D2fWjCz9BUSmW7tTJUvk2UM3q3A3VV4VENe",
  "key10": "2wAyBhRKcioDTjAiFVUKxYL3uMW5Pt5qA5tmq2Z1KjJd2cRBYPZm2MsuJbcTDTvWEwmzGJ3mG4vZATp47gRVSdYx",
  "key11": "4TKHLo85VucWAtwiFX3rK4J6NMgDHkWXfBbSuMkxhpZnLS7ATCwmg6TNLfedh1o2qk8npHKY7GYS8baeo2rkkCpA",
  "key12": "5JeDsjmuz9eid2U7Tre8sChgKxjaUfAWEy4z1bdkC6TpSS7XEAJdxn3KNxA6RfHiCXZfaRgN34S8kLmBCbJsctci",
  "key13": "5zy9v6RNBeZv4ndmPUa7Ly3xpnYtDRVviwMixjvNYXZVLj7Duc4az2KX4X9duJG4eXrbgZA7hcF3KHcx2afswNJr",
  "key14": "63beextpcvfBwmTpKcaqe4xnrBtTrDhyRbAPMz3VRQCNP4JRz5KomfhxZs8bGz2REs28kJDR92niCuj1DjwFYeft",
  "key15": "Q5rXUbZwo8hY6rRNEHoSEGkCjfLXkHdzgQcwB4SyJWYGowH2dJVQTpXFqvJ2dKw8kRwVvNL5HhVwi5TKBEBuRaD",
  "key16": "5HE4yMo4FBXCQjvM6rBFyjp3jMwfmb1N64rh4zRW8FtWTwqzfLfjZ3KFWz1HGwx7AyPgNcVnN3f1SshypGQr12uq",
  "key17": "XkpJQR2MDzBmJ7eSXkTBSdEYuySsZeZoJekycczm3LGWawbLDRFWGj6pDr85Si7YVuHy2r7zsRFNka7FcStQ9bV",
  "key18": "4zEb5ST6UHbuTQtcz6zCC5rvezHoYTZg5wrZFJmauG221wEKBVTjbKmoZGVYBqXf6eE4dZYmVZ9fJPgmNfARRBdL",
  "key19": "4utwDM2b418miXk6tVwRsEskuXrvYbXNbEKHH6a2vQdspUC5WgCMGRDbNyWQ2Kt8t6XuEdEQdd2YtxPnU6eSv8fd",
  "key20": "2xF2Bvyg6yLSRN12fcEjvsR3H8GqPKV4QYPKEmkugDaqC73TmgoRLTMrnPAFQEGmoT2sxMAyZdQqir97yLsWQm6o",
  "key21": "3CCG6LYqa4sSBa2KSQHw8NBMTNCv44gHfZJzsv3yYFt9z3udpGDm9hfDpszh2TgYaNznmJfAYxDKMTzBqYLn7V2C",
  "key22": "4Gj4P3oGiBYt77wfmGgyY2Q6t9svoUn5KWuvrv2piTh6imagcvamBrFxX9RBzE7pQXaWPTXJxAYZc5dwuA2VzNif",
  "key23": "4PnBfrgKjXtvEcgP2RByYM8Sxbv7oewxEd64ow5HTJaMKTA3A2b3mtQbWgu2e7rG2HgGVhBo883EV6de4iD7wGdH",
  "key24": "5K3Tpah36pmCk2DMqkaMJkNPKZ3B6zmuW6GC4kv9B1eo5TUokcfYoZuUpsgNoAgj9GdQSLgKwdmTv5wdLeSArJMf"
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
