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
    "67HRxGwDr49ZVauAGjaprwgfe6LdbKAQJ22k1raJwGei2mbR6xtDMmKAsz8yfjNrAEzVPhPE9RWQRxRFEbxPQAbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rF5WtNWH8T7JU6gTjf2cJGf4G9UrzddERyUQgxbaeicXpFqtxMhTGbDygzQVDzXjsGxREEmuxFPqMwuoMXW35Js",
  "key1": "LxpmBas4M3G6ueLb1dEfYzeYPdSVJniwxGhtPYR4bKvVaSXqjFZSLfut9yBF1eXeQYWQx9p7TrSfUMytQGs33n8",
  "key2": "58NUywV67WDBGtDkXMbxaHfCdoWsaAM9sehYwynWzQPqUewU9WXoQ5wy6HkMpTXpw54YajeUBm8YCkpeonkZwBX6",
  "key3": "CdZ3Rvrtt7YWpXqMfTVduN3gsmpYYj3F4e7pVm5rAfQeNt8wuteMH68JGcgxcB8PepeDCTbpJbAh4Xpa3z3JHYJ",
  "key4": "3jHGBKXcHAqdg25uwwCGPj26Gab9S1XC3uDYFxfN5jhVA8V3MYP4d3JGjZSxWzgovEbgvVuYUtXAJtxXWgU6uMXV",
  "key5": "3bgGbUPNNNmAEbvYMuzwQjfKPeVsifguxdJUuio1gB2Xdak3TbgVsRbmBycqupWbowsrPSfDfBbqZkQ4tU7W8b5V",
  "key6": "2ojpBz6Pi1PJq52HGJn9Wsk1CeEFev2FEoDeQsQ1oRRj15J4uzr931p8874vwWLAoXsiD2zdvXwo4SPBZfX7E78Q",
  "key7": "37XY7ktVKX9TEKeDQjJaBtMaSAR5tjEuEbQqoXNhrdGgi8vuvLaGFyUzECb2u5tRcewta7NR8GZeSLATuv9PYvCB",
  "key8": "2DLfyHSQKvuaHUSdQJ9JsirgqGktXvYJgVwBdv2vWpVaqZcQmifnHGdLkasK9i5wn3ijp4caPXz2chKHLKXATggd",
  "key9": "3wXpidqFSmsi6P62wyABLjRv2miwC3zAGYTSr1KVqiLxuzrsm7CxSu9N8wFGt3KWxcU8aj91uxwExFC1uieN74Uk",
  "key10": "4CEbnGTLbp8WG6QbXV1APNkv3B9Z1UCQCBJLhTkB6stDchgBuh3dfPzpzXea3crnrDw8ajnC6NCYSMBzodG6EUm1",
  "key11": "4BFnHGHzsEV5XFTDnRSbmPfxiNmJpaD6xt3PsA95YGvNHC6MC3xXGwaah5MKNGitDDfim9fiaXjURiPhmeyGKb3h",
  "key12": "26iSpahJyofEogD7c4Vq4Ak6NE7Too2uLnTkoZ5zPRHbCFLqc7TSSTR9ohYbkzPspM25hJgNXKaoQgPktU1NdYeS",
  "key13": "iUtsFaQpRhqUqDT2J9p9hPH6Fa4rPViZBC5AsuzxGQ5fpL1ZrzbDr2mP3tW7jqRSSc9FrpWBS7iUsdGifuAA77h",
  "key14": "3rMRDbjN1zS5PCF9wGTksmYxSqo7Xf5ALS8xGoygrB9gePS2oiUGBtfwrXgEwf994zfCb5b8diy2D2zypfWpGvBZ",
  "key15": "eMW299ga2a8RJPqUZrvmuhzmctjp3P1d5ggUoqHX5tk8rU48RYBVKhbzfPS4GJU6y5i3hk1FdrqE3dBsyK1PxEm",
  "key16": "rp3gbepD4KtUHLB9czvRsMNQbbcdMEfHiF5Y9AZSbovxZMLmgk9L3TrUmEu84hpARmQ7rNP3FqpAkJTB6sMLJaD",
  "key17": "5mE6dJaPx9W2ZsxCf5SKX6US6XQUnNJFNvwzcSbrk2oUpAJeaCKSvx9eeZbDJdtTW9s4mLUVTXvLTTtYvKnJpgYU",
  "key18": "5zosWx893fc3wrcrb8dKdnggW69sS33reMZiQKg8SvHXJdvgcWdFZym7eDfcf9JZZ2xuL1NTvSMVXR2X9nUNZAws",
  "key19": "2SRGhjfqfktNCua47ZoqaCUot6Yd61GBTrkB42KQWocXMmWGxLCn9rYV5GvzWdAmRhbZRsQigMvvw1X4MnYHCHyq",
  "key20": "2wqZ9H7S23iSF4yXYB8pPevhN3V5PN91FmX47Kz2U6TbUYuW529bgRaDnXaPBH7V6PiEgnvVYZ3P2gcDvwjy8Foh",
  "key21": "4buwkszimbjeVttzcdubWzhuSZk17ogCJzjQQmoJSngdJnXqANg3i5UiRRKkrgT1gsqmGwbiPN3FCfDf1cZ6aXzn",
  "key22": "2A9AjofFJvRxoYx2RuPRg22vnZW11PfE5TUsYxaF3SbdRcgKd1gpU7T3nwazZkvGAM4PVsDiWnDvHZ8gQa12PmQv",
  "key23": "3ovUtd9uL64CZTZyxG3X2fjJD5bgotgRYHPnNQWEqekX9dRnAwgeKAt2DWc886j8UZ2a7uRejgXP6WX5whPTbfyb",
  "key24": "2BmQVV1SvrhjBh2fuxfTqtbXNgEjNkq9i21ycVYhWT7V1MdVLg38KTD5Nsu7m2xNLDovs4QT2iT8P4znzABRrn1s",
  "key25": "4YNmA6gqdfgC2zGLSSGV9EX7Nb4oNHSjCVmUQ8Xc3VhRn4cyUCE76HNryQihktcNZWb7ywAxeKL8zp8jBUjYWp36",
  "key26": "3zUDcc3xgBarhXCv4Gshmnbcb681fT9vVZUw12snrudKqF2NAEHDYtrR17jBXzTC2q6ciYN7ck1juSVGUAvKvmyq",
  "key27": "3V3D3RJVBsaXnf9usydk1aSa8tmFWYiHnebHT3xRFmqmhrJA1NKumkYsxB5Ptsx1K9jyBhqRuDuKiVxzGuTxaL6L",
  "key28": "2T7dksB3kmACqCyAPrXYyiEsS9QGaTHWTqhEeWzzCDsRCQaJbkvP17LbuPpGfRDAKXSPzRs1xZUQjTvHq8B49ujw",
  "key29": "3YrLsvk2XZKjg3RdqHQQQMh3AAJBojKBaB3tB3vxS8M8VvxNyzzdTpZY1QtZ8tUxv7kznct11BnQBv6D6qvHEotg",
  "key30": "5aVRVjRhpP9h4PASmGXsR1DQ19h7na5hPBLWtyvpX73n32UBCFKQSEFr5iW3t9f374Z9JKG12dBDP9LvVBcwphcH",
  "key31": "4a3NYTGE8KKjJv3FiQzbQZZivoArbj86ytHsbqyncWsvb45UxN5dSo67Z7kgJAMiHKrVrrbPPEQrfbWFJh6NXr6H",
  "key32": "4rnFu5rxR4jNsLfzPHoWDnsfrM8hK3iuM4uhxti4jZtQPCkHe6YBRjNoTxPSfGq7MBj2VwnbUSnFLG4hEk9XSXMv",
  "key33": "2eBAzJCMLi1eQZsW4jQfiqaX93y1HdA1JWRJTx2kcee3SHYDhk34u3M3rcjmVaX3Yx2ARQMXKrABZUMijYuCiDeM",
  "key34": "mFGhWNELUKL5x2AG7j1XdnZusoqB3X6JguveNRe8yyd5QugWVzbXJF8PxJWVa7QkCkmnGtgHqCLJcgAFG1RYCS2",
  "key35": "515niJt5DHRfdEwkjdG3F6kNTVQuxEajtYDz6W4t9anYKCUvpA5bGU2D1pXuTouoBvWbTgoRWHi2G5iT2UnnLmJ9",
  "key36": "2MUeNQhchLzvtdrsVzwE8dJmwist3tdcQtBEX73XUQhtDNoW1QFpAFt2E677mTPvz7rKYwJw5HSUk4vkWrhYSLvJ"
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
