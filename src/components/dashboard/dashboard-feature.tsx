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
    "4T8C6omgJGjtseYDfgDSokYwqpxcES19HuGAQArLPDv3t2NM3zYCtp18i7WqF7Tia1jhgZgfyGQCM5UykdP9roNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTPPHjTjGuYrXQc4CKi6HpnpAgWHiPA2jgsSbUKmvMAkLgufKPUR5SWUzmNznHX8ncwnvULkESWfR5DK4bk8ce",
  "key1": "5QwReeVPYmszQx63P1vACr1qetjC5BqUraTbdgK1aLBUr65B2LJUeZnWfkrbJVuugH3QaSK6FjYNYTt6nHuz51kz",
  "key2": "23w3SNf8KYmp1VVBjQCssGzeEbUxGnZPr9iVJu9waqdG887Ln23j8RqCRsnFKJz2f1hRJQu52vDrMvjdkCJ6GUpx",
  "key3": "xmyAz5vRpDm9yTPnpQTLVMtciaZUvDbJvw4gdrmdJvkMyf9qopXVYaq8BDKvDwg28gBbbWG6ppZ4PLh7yb98xm6",
  "key4": "5zHo9Mm1PY2dhAbdCoK34rARVHtLTJABBz937WKZZSD7bQfvo37SEeNmF2LdZ5eZegcp2uKL4x53asNbHxc1G44S",
  "key5": "2aEk7cTnnzhnRLx8VrQBh1PTs5QniPEixLvsUTfoGvEzzLxYBYctwRfrp6zWqTWFv23Xu1MZ2Bs7i2nXZbYbmK98",
  "key6": "4XGT7XNywaiVAo8No21K3WsNaarfZiwcNhs64hSxuRFcG31UvvDDjcMiddVz2chf7KXVMoK69NGtF7eGFaXNNvVM",
  "key7": "2CgVUrEEdHp4ZSPeumU8ktvrbqBecnrzAj1fKCRgxUuant6fQnb79D1tmwwQvhK1FX6smcPiUh4VCdrWvaqZsAk1",
  "key8": "4fbVS7fbwptE3SwguQ9tjc2gWH1q2w4T7pXVTVbrWqQCEuJhRWMghTKW5V1pLy75Jm1M3W6ufRXtJH8mWgxQeH6v",
  "key9": "4Uv52TLiPdMyRsVSiPYJttKcHmfuUUSGeCyL17faNGsRoqMuEiTXvm8XW6oz37M2gqNqFquwWSPh9CWx4KPwiXJ3",
  "key10": "2rN15VWzMrgtgQbPrXuCNG9Cb66f61j91zE3ep4sDspunb5RMyxu6QNphLdmQVBY7SwukncLt4RdZqanM1QaRYX8",
  "key11": "4Bn8T2fjhXtv1mEb7V2rty6wiC39QjPGW3hhAJDtQXNhYdWcstcJ9EuHodhc1YtsoGX1KeoBRxd9TXLk9bTS2N21",
  "key12": "3J4hLbN5LXPf18Bt3dooFE8yFHZrHzv1rXEKwNhHsSVh3hr7ZpJm14nLvUHtWo3Tc4fnTxoTfeyTsbdFBNpPEZn6",
  "key13": "4YpU98DaEh9nue5JmcEEWRR6rHmiB1Y2d8DDVk2Y9be6vXe4XX23jTm6fLym2pdUxZ5XvpHukW7TDN1owddpQDJH",
  "key14": "5HBT6dcmdBj3Qnzk7yPgLvpRxGpuyRPJNquXL8VkNK4TMTwRgvLDzyzHY9fPUrGSVGtH8zMVS3X1R6FbbseK9Zuz",
  "key15": "5vXTNbXsgxmNu3ZVfH9ZKeWtHbtfgXYegXNaT6yG2fhRtm1YzPw3bp1Kex6RSiZPsgbm5xYnw2Ui7vk3vtaqKma4",
  "key16": "4awHfnu73v27WN6ekvxuHX9MMAgFUzpemFxAyyARbGfux7ptNwYP6CRtakXb1qMSTzNP8WHCHTswg4usEXAq9JZQ",
  "key17": "4psHG1hHfYA2K3qLYdDNHMd87BGWCSbJ1x1Kqc6VG8SB3WGXbEHEsdCxwqGkPM5SEQ2Z34c9d5mbWuw6B1vEvyMf",
  "key18": "129ii4md4cpwmNA7Ug1VqiSnQzK2W5vUfuSmJAggZ2padTU986rbqACre3tgU6D77DZ4dgM5vJ3QQfEsJm1tBUMs",
  "key19": "2eLtWASdwqFap5bYU1Xf3j6NcNqhcpNUTbcpHbS4tuW38DZM2m5dQJuS1CeaU2FiRBsoU8Zbsj5XybLsJBvebkGh",
  "key20": "3AG9wzrE5WfAmA6Ff9y1NVX3mRmmV8h6fdN3hYb9jSGSfc32RB3iyLyXiCAg4pfqpWpddXqEvkzWe9LV8TxLHE65",
  "key21": "4jk6k4MobbbWXxZp261G7TyPLyHLJjQkYaquj4gWBfWjAS51M9FLdc6M9nom3sTywV7LhH7LPXbWUzQiTAo7NLq7",
  "key22": "sPhwsjtE5J38JQuJUopWFVtpL6xhDYrfCmCovxG281nzV5R6PWSSVwKhA42oJtbCwVaBybbtTspE3S63FmbqkSS",
  "key23": "2LPce3Y49QpVPKooLUmV6AaPTLRjpw6qPzsiovMjEWN6yGP6gRyZ5F9MXGwofCLzHyJJukeWyuSXSQ3vqohcoMmN",
  "key24": "2YkjzELSGgMVccSoPTx51ELf5Ha19gdikxaYSkfLKNnCz4awTM9ixiLe2mFjf16WybCGWdKJNfKtD4Ez32J5grmt",
  "key25": "2e4H9BzzfyBKtb4EqaA7jucyPQatkZyR4rDmqC4yCY4T6RajKp2Ux5GoNcYWwEvjx3TjCM6JAPAFvZABMLkRyCRV",
  "key26": "4rMv8beR2WcmMMQxMCY9d1FtvwDa6KmjTFDMZMoAsunifYGLUBBSnJPwMppU4oURGqmHENdJgbBEHqZKT8wewwX6",
  "key27": "4rQQ5c1AYJAhEqWh4Wg8wa1DFTKfqusNX1mrSz1PPVJbHtjgdwGAd5Q3phk9BPiGgZM4WKzy54Wo59zqg59ZJ9zm",
  "key28": "599XfGgTRZ7XwbdgemP2XR8FCJuZhJo3CPX1kHiPMZfHisfLmWyF2mcYsa1QShA37o17KtwLPCYhg2dob3NFcTXj",
  "key29": "4Uz815d46zzzrq4qr4TxXBFY2aKGmjjzAWg8aCdJ264UTXCChWBhEanXStNSJdf4b8pGKGehfuQtduLxKAxtJM2Q",
  "key30": "3nSsm7mg9pxQTnJnHLVXJyqnKJr5oK4QsjZ8GjJUCeZ7qSzUif2wnfcZa3Fqgfoy1e4KyivH8uB1aABFxtueZGo2",
  "key31": "36g1RxgzyPXVDwdXZNwXmftEasW7gSePs9SU6KnJThjk9PVM4FhXisdaoZDQAqMn3k1EdknaXFYZyokPpWQJFUL4"
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
