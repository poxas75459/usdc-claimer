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
    "4Tv3Js2kmkD8pdGzGU5K7sP6EmXU1c9KLCHV4LRvk2fsNMVYBqNCFBtrk5mVWFB9TX1EbP6dLx63r4gH3WzTYNjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9cZV8kMJAeNVAWnRURTLEetrnkhn2ZHt7aQxH8ceLswp7erhwzajKUjqM4YhmT4edKNudTrdS4RbvBKYqAoZm7p",
  "key1": "2aSTzF3XZwvSbPUmUVhpGJTCujdaRaGxG5PU9pJjoAJknqaUTHTGUeU69UELfoxz9wLsvNerWZNx6z2EjhrcRgT3",
  "key2": "4DkZczibWGfSLy94rTt6Ch1e4vTynLmazp7mKMJiY8kJPu7VuKaKmQ4tY98Y1MVGZCisBu44naXovE68QZvGE7D7",
  "key3": "5Ws5GZMMX8s1Yex6CjSasGh1yvxirEcXzkJeYSwTasqGvfVS1ARuKwsDmT7hrERtTmtP2oJqLPahBrD1MLVh5doi",
  "key4": "3pBkUs4vmCapzCNMQ1kkJHjtR5BoVMgiRanZHePq9idgCEefrie1iY58CjGcT5DH6D6jP8WhDSgbmLeVJED55m3T",
  "key5": "48xh63oUbVshFj192qc3vP6g5Fq1mCVH9p2wepQcjrqAGBREV7dGYe4BNKEvFF4PzrJkywYQuDBE4Tjg9KowjZsB",
  "key6": "8srG6dCa7iebpZGvCnZKtnuQLJ9kfxHknU65knWVhpeWNt9GMv83HXhTXGT612ELb1K99KJgaTAR7TgUbSbe6ER",
  "key7": "dj7xBgrhKZ1ZRMWw8aLswxEXxcPmMVuCWB5NyTJEuQJWzFLQeGoMTrguv1bUxayLuFzRqnKLfodBeFhgywP8p8R",
  "key8": "3YFjEvBFQHDBH4iF6T69JCqSPmW6NEAJj9WnSerSnc4JKJMVdzkNR21MPew2142iU1j2UCpY57apCUMAANctAKTc",
  "key9": "yufwA1mVr1DGonf163FVBAmubqYyY2YEsKmD8DjzmvjRJCyt3mNmybDcvaJjtpR3DJbQNMz8c93s1zUCuapAfDB",
  "key10": "3Uh97HTXpyt67GBntn4FDDvew3cAMqKBHCL68Jmbh3CqA9qF812TGeMQDuztCVELTemE4cd7VDEkVad7y7nD1RAb",
  "key11": "2bEiqmCoHvgZ6NMFvXyXDSkHJY2FcX45UuuKJgg8rKL7YMKhzw9s94tC1jRh2vTVNiviny2bKSUb2cCh52V5e4rA",
  "key12": "3eK4i2VGK7A5spArM7uWYvBKoUvBr6tRgL4LipVPGuqu7rzDTWdZzMLTn6YWTZ4cX7Cv7MsTp67Vr2DBpVKxoshp",
  "key13": "5yVFPWtk77LNMMwvvWxgJiad8LEZ2wvY12J42e2Y3H7wPpsCEWQUMYkXKjvxVbRWcxrXZ4yJXSiDNNiFp8aR2wBh",
  "key14": "5EhSwJHC1Xrvo2yNr5UiydHQZyTy6Bmj4TP3gEL8SidDPZGzyWgJ9mdxwXsasKEodRpe38zDUmYSN35TMb69bXsu",
  "key15": "5L2CNA9wEhJnKfcUwJuYfcWpDPoqina5BrN3a6kD8zSzXm31BEDA5XRNNdWZe8jZVGepNsrpdg3PshNnHbLLpBNv",
  "key16": "4QQEWCuEUz6BnH6JmsFq8ymjqYNJoxTANqxGU3cyaDXL3nKZQrmFLNCE563UAYqN2J9BUkf9W538TdP1ViXzxtgU",
  "key17": "3PG45eoKcRcpchJxe3egXeomA1SH76y6QynAVuTAYn5NgrjZvPw5UvJ1FpcnC69hEwtTMiUXfszv2oLTUgoxuT5F",
  "key18": "4uHzPyYNwq9rnwZXttDKEmFuZWGajdhRfvQJkB4iQUJjh8dWHCrZmx2cERzeQcfuk7rjiD3rxfV8ekJ5ov1BCJw9",
  "key19": "2fuiaSN2ae7KVgPPD1g9wJDKMjoW5tb1HF9RPPgRJ8ReXgQYJfuwEZLqmTFrfth1QgBqtuCfGnyRVk4SYwYJSHZ4",
  "key20": "FetDpz8TANGpW7j5ETaWeBFPPByikiAjkCis6GowZr8aSZUr8B7kmmdcBe2nRKWXHLSbD9GvWYHJ8jYBnS5ymMF",
  "key21": "5surjsEkXiRRfX3WzxXYvUKVudX8CMCdM8Yo7bnFXCyvyQ7wLMwUE2unNzN6bW6hj8jbmX1GWcDSMvQrpzpxDHQb",
  "key22": "4C9JRTgMH7h5P8uXjpaF5KAFt2sjk4NbU8UTJ5cc6YZRvPEBNE5kxm5vH8EfkhcssbQsdqRdofsv3omN5bSTRh4T",
  "key23": "56Le8yVS4V29X9ZNcwxkiLZx6K7zMbYKqNCttwijShCisJHjkcJiR7yrf1HJhioomEb3iJqs6emnPLvSsrUZ7TKk",
  "key24": "gE4t4FmhqXnAvJ97RMDVPgXPQfcYLKNwBKw8cYMkammfqjV3dG94QzHGjg42KCE49XbSvbzpg65ES3txa1cN2bj",
  "key25": "3DxxiEw1V4dQ6kG2vvTdKPH8gmrnTNvfApEUfdKxHpzU9G6GxNWHV9cmcHWiPRGY1SmpxxgVuLYRyTUMKgQcej9i",
  "key26": "64PLCFPqrgsX6YGCwvFWMhKyKffYHrT7zhWnn9hbDNGNuiMRP96RKR3ACP1f5SniFoWDnd12uFWjv8NV2BCqFrHw",
  "key27": "5StSUN8NgCmoDR6LiC65xnX32d6gG7zrGBL4gHqGF86JeGPoWQpoCPZwLXkuZujp6tFKC1jbUQ6CxSYLaj8orSBL",
  "key28": "G48RMroZHfFJKXkG6RJjQq6xP5nmFKG2B4jycZkAePZSWUyY7UwZdrENykpaGHjXWpbRc1ZFzeZMjWP9xG9hb7A",
  "key29": "44vfx6gbKdNr9hdJVCAi7CbaXqvN9d6SBxuWbh2iheLRrpXNcX5g9LnraeSCW89irWdmDkAEBsrizTsVYUMGADDr",
  "key30": "5uRdNvnVJv53rDkcQ35q2hzDuB223Yzoo3Xo1dfsK5HVqSKCpib31HrpYtvnbL8qCZbzQTxzN8B4ay1KYu79HZjz"
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
