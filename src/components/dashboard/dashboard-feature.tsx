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
    "4cGcRJJ44N3y8tnC4AF2uwgUfc6s1zhhszGW5ZScAzrQrVyCv7imgQREPnBNUsXinzEimDmVUNsFzE39rVEQGbHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mcBtPeoGti4G7zWbXsGxDUsGx1D6AGZCroaBN6QXA9SfRnrQUCzzFSEVDY1rPYtFhWAyfbEQWHyXRz1JkTBcD",
  "key1": "4NQFywPqSKi6nzCTkrkQ4Xj1UjhVHsPpeDP5dRPaj9X4DHF2XBsH4Pg67bQNbDnqKVQhBGdkgbCXV4BLtnw6YMiz",
  "key2": "2hSecwhuY1z2Z8djJDgYgqWXahbPcJzRBgXNqakP2tPu9a7sogj8yRbdf9DqpeDnHiSvVLW5s3bTdZ5QqATDfeTj",
  "key3": "3S88HremTPgcEpPXCU2Q8M7qpqA4ZcVoGpXCnxzWvUYGqo2hM6aymkr9AXqrYDi5upS7xpmna6wRbqZ6vtgPMapV",
  "key4": "3UgTCtsPRNQKsZwjxiNS6ibUjLyrCzDzh4kULgzgnr7pSFA39FAKsYCLSRHSKSGKq5nf3vwsS5NTYzjAXNFbUEWq",
  "key5": "3R66wJJXEdyEAQcFXrTniipZfRhGqhYsRfcpLyBMct3fBtTLiVz6t4FXFmRB9ajTvXaSD756SCUMFmh1zpSt4iJE",
  "key6": "4LA1896mTJAQmDgkagF7Wvh5CLXXMSg5EVc3sAWAREPWP5KTzWpF7z2tTWr6923Pf7bwZhiG4xA3n7bhppWpWBmQ",
  "key7": "55t5wvLdi4d4rStGXht9tM2ZeQd79nYgFzx3NrJHJzaaucaBhhRq3AzjwVBWi6tcE2MBtG8r4z1sLff2QU96M8ap",
  "key8": "GRERiZPvekkrtwJMWU1udzRchyQtBXLevZGY5Uf4V3kMFSyUaUrjaKXEVwqhD8zm7Hj7zncinEG4ua53v86ruMn",
  "key9": "4DFBQezYMxqj6A8Bx2tYKfWctHBtBReu4bHnBJMj2ZPDxwXfdstCtqMVQPKYAqd7e2JUc9qk6MvNgEgceHakiJZW",
  "key10": "5FL5WVgbFSzxaiz2UxQiAHgYBLGot1GqS2L5p6wK33Et15G9P1CHAzx4W2rjVhmCqyvqPf68hmpm2rMGuLyVatpF",
  "key11": "2B4QkY2qY2tFZuH9dQ2fD35zvq28Rwapb887KQQNFj4uE1PLPMJ9g3g9He6AyadLQSk4qjCdf2Uppv4JdmbqUKBQ",
  "key12": "ToqnRpTXgatfWcaGdBmwTeCmJLxYPuCjbmSLB1g1irgC1DFVoQzZfLpgGiwQPymVdeFxBkqL8TfEMsoRGeTcseg",
  "key13": "5VKKDiaVH7EkTpirnV3D8t5tnvtbcdSYnNPov4qw1mLKBwF1FpJnFKQudxWxgscogjWXDgaGmb5J7ZrjRFBWzoUF",
  "key14": "4ho5cR9o6YuiRNTY4yBXBTMtLwUChpA1AnwLFL5NTPRsnesN1rhuTCx71Jhjt73SuwNiv4KaZz9uWTweaRhp175s",
  "key15": "3LTmpKyec4Hu78wS3prNUsmsRf9eCfZFGFprkriFfUVZha69k3CKaKfPVTyBRGye7dJsj7tYHw7Zd5K4WYFmhZgS",
  "key16": "21uTwjjKrTpx2M2g6noMqi3bc7jzLLG2PfEpKnncH7ZoYhA33hB3gxGvLYmMGJvXeVh7wJNosMZ7GwZMd4Ff4sN7",
  "key17": "5Uf6ja52PGuGBELh8rVkEwi59twb8ZmjP4ujzKk4wf3FUipaB2hQnfZ3LcUJcAmCfaMFDSPPhQ174DT31UYTi8tq",
  "key18": "5EgZiKYLqZ9NvHyMLVYQPtCNM4MCH2NesUTVr9fkjaxbRjckeY2T69dyVFkZUjBoNLiJQQn6e9LMm3bL5wUSXyeM",
  "key19": "4t1oFi1cAP6jeJdzSVNXHQM8jUAykdxqbB5LdHC3cLvEtUZmfb6s8BK9uT3ngNd5kBBHbehdyosd38ksU1cFLtLa",
  "key20": "2CNVZvx3jxFyjoLPC7QPxFeVUQgMYkEs5xCcyq8FCFxv6CUTm6PPx9Jy3piUZZhSrBmpZ3RPxeWnMsDN2txK8KVZ",
  "key21": "7EcYCy1YZjiyVm4gV6YmrgKRTyeWBD9Je8M7bF1ebQgc8b9FGt3wLSDE3hA3nbwrx8a99USErchB5QQgm5VYbuM",
  "key22": "5vTGw4meQb8UPuYynfM9kGnoQbYVfvrxim3FgjvPQL9YG7ir2TDLjwet7UEUBJ4gL5X5gUHNA8m7tn3fC7hLG7tL",
  "key23": "jefnHqLM5m7oYGfS6VAoMwMZ846yuWh9X3kPRRFQwJjyJ2mHnncTmhcx2SXLSpa65Cd4ZF56tHy5ni79RGnzPMU",
  "key24": "54EXmaT31psK1sMgj4Afw3vpdnMeJiUKJaLdfEm4oFR8H43itHAboPD1mDP4NYcZHpb3uugk6SRA5Q6mRUdamdNW",
  "key25": "a6NYmUYo3vpnZoWznN7wxzHd5E7BCFzk2UVVMNLN3kmoknXGwPndA3Kjnb7aVTgntE3VZBsM2E7wdYqZGpYCMxf",
  "key26": "5vLoLtB1PtdNDzMKG2Hd3zn9bxo16JA6QXH9mycrM4PC9rpGCY7YsrYeWR6YDw1eHjMuu8J68w2U2GTnc2hVZrj",
  "key27": "aeopJwFbcAzQDHxqBX148D3PucZLX3sfPZaopkzCXnWgHnGd9NFXRfqPHJGwKJNGsnkx6m5QtzjQenJfXcs4hLA",
  "key28": "2oznQ64X3NUoopy3t45DJ3GhZDMnV3CWfTwas7AwFGLw4wUBHjb95nSDMZmm7LE5kVdFTKzjo2Rvo4amtg775i1n",
  "key29": "5gUNHbEioR55cfeiNj7u5rn1ER3NG4W925iys8LoeyyeDfSLiDXopG2cBgErazf9aaVuDw9iDrZoJ1BKHvkCKgn3",
  "key30": "61ZPvfmWWgWs8cnGCZEtdfYrHsxQ6iXoVxmZ7Z4NAkrPVbyAQJwJgPYPBckE5kgu6CiZZsNuztfGRAerYdvCSekE"
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
