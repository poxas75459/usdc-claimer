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
    "5MD4jWUKNkCvfUDAJbhuywnFXSE5YcczEQcwkpVfwsoCR4oWmXmfArBTEmt8EDqeKEqCbva6Yu6VkcJm4Xbie6AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5isqKbhdJCQircnVHbTM1cr4yZqsqHPQs7fnxLyG2KWEGSD1BmTSkzVtw5FkNS5jMCDoSGhLeKsUyJc4kwWASph",
  "key1": "9JAN4t9M7LZHpFoS6YMt5W4NpNmGgAt3Mtayg5uKbR64LsZfJ3CNNZUj6BFPRoNdUQRCyJBcgnosHss2eW36VWk",
  "key2": "4igjVFiJTqQtYqV1JxiHB4kgbJuygUhbaPpzbEgsjc698qzPDa2Q4oFbGydecHVDb6bsT5JDvd8RaZxmAwQPebgg",
  "key3": "4YksDxa7JpoxspMMHJ9QUNmBxmei1wY4qH9ffnLBAQ29zYemyurCFCD42PWB65kUkzxnrfXUYYQR3VfPDyVgKsRn",
  "key4": "3BcL8UPay6UxaHCLPofpvNCSvrcktVk29Wuv1UtrBBBrj6ZDsVsV1XpdfvUjFFstD4y6dhiG8ztdWis3ihsDuhn2",
  "key5": "3yVdiyDLTVBbaqYnJXvBbf1WMS8VufKCin1FeYPt2BmFCRKdULfM7FvX27N9j1PcFozVt3rEsgT5CLi3hdZu7hXF",
  "key6": "j9EjCJhT5dabTk2pcct5v9kpC5kq1MU6j2E6nr7CHqvvsBCdacnHSF7BThokdgv5QyDus4tWriDDU7bqd4bVaAr",
  "key7": "53REVmRU3KSUJ7XEJntH63m2johm52xVLrtATGabHdFEdBs2qkCkfzRn9g5yythm6QKuBmgxkwD8ncxizrK9Xfef",
  "key8": "4keaAriaukb5kpZ7nGiQxZXk591D7AKz5Uzhty6ATH11TreCcDE39SqBLaqs6Scyr2qo2p3484AQgod9vSeDzxf1",
  "key9": "3pnVMciUx8mPnMsZtm13q8gpJc6ktfttYMsufDRHzqyYek31SNbDYhncjCfNLiWxvCzySWT9Sx4GxLcDsj3HyF8j",
  "key10": "43tKx3rr41TMmTTABngvg7avqrWpyFCuDqZ2jcWpnBkjmHhNd2GZR4ZvgxLQxHmcsSCM1W9jWpNBWtwtjLaW1jw2",
  "key11": "2qY8ED87nhd9Ugsc5JZ49tr3jnktpAbu57NkmTnkFsCTCigRn3DS9QrkUWJmgVSu8xC7su1gFzbyDzBVjAvNUiMs",
  "key12": "57sWK1N3sXARMG6mc2mzfwQMakCovoxMesFhAkZFi1izNzyANATcUke6vuv6Eii8cv4xXfxmoFd4EW5G7L2FUCC",
  "key13": "5WqEixPtVNE4kXh1SekQk11CGfaxBqeQRF1knhn1dhXyXqvRJjtAFjcSQYxgbHREeoBzq6oEGESauvg8PN1fvzwu",
  "key14": "p82ZVg3GXpmW77J7pq5TBGApe4YPojPwfZXYrFjsAaVfiWTDQ5i38S9SpY1yjSz9TVCAzQJZTqzbuqMbZNYKcZk",
  "key15": "5VeA4pDKaRgrKeixdrJxfPATobHKTj9Cf9nGXzWZo88FcWEBJL3VhmQUrrapzcRCZub88FpMcve9UMBfBqrXos6K",
  "key16": "543Z6vFAAvcxe6inzgTJuRrh2gSc9n6BTTVTP9DM1JyNm2itjnurVRn4q8fAKpoayZ8BET8RPc6of7XsswEMoPUu",
  "key17": "2v3gvhWHMesyfbrsootd7tNeDn74vhSEVJFcBhXAr195XZrxzRFNzJGcPeCou63chGkdufwhaMqpo9D3pHVwVbwV",
  "key18": "3W3jDgceUnhBvFnoyAbZhWVYZHbUuerpYvmn5awcG1oc48WtNMgh9qkuRTQTwXLxBJods5ax7FKKSPfqZ3pcAsPv",
  "key19": "2nsz2pa2T8FAepUkA2mKZLUtjoLG47ZCg5CF92BJFcnrgy6UQ2fCHgUV4UJn34o6Pq3Z9MjyMRCDdKv4cizqR9W",
  "key20": "3Nhfy45kX7UpLSfnafMxmqq8KRf2nZPaJwsqKCH8it9WxHSoT8WPVc3xGeEebmCBbtM3nrRzPLUHycvF36DomysK",
  "key21": "2CuUURc6cUaDBuYto8TbqeaLg9qT8QJHUCyWhCw89C5wLZdGL93wrMwFec8SDznTSv4oqVz1Wqf4vCHapw4Kk8v9",
  "key22": "4mqA9C7ej3ft7n8VRYUKk2zthyLyRdzMs9enHES18XfShMb8b1r3H5eQ9E48fwj1WBhrSLo3DKUcz79rtEjuXF7u",
  "key23": "471xodgFJEtxM9jwfPhQss5Gu4f9rjuCi48FhDPNKcdVDdg9fdrp5wLynMLzuftdBaMSwqFqn5LFuo2fLysJoacb",
  "key24": "3t9GbQfS78tvGuR7GLwV21QLM6RzMmRsjqtJTPAQ33ZqhL54io191Ff88vu3Mz5NeqvtaDbQYvJYUH8dCvaSh4HG",
  "key25": "53u3ryvSuEWkrUw5wGNGRbjRh6RbhyKKzx3MKht6Ug9Q7NJEpJHSkPo52EyDboGnBgp183cycqjAs5GwnNto4wTB",
  "key26": "ZhpwQymkXr5z4LGccpNYY9mjNVBGwHYLWXVTq4cVKEzRG356U1A2Rxyq8ZFNq33dfAjWCz9xFWMg6if7oRLyvLK",
  "key27": "5J7nUQuG5BeGPQUY9X39xusiDQyiWrgRKawXUSun2rEVNLMEKzt7f4bxerSdCDt838NDjUCdJbQoPcHoAMKp2NJh",
  "key28": "pxQ4f55dE5NjbPNDBAU1hiHurZt7TZ36Vywwi6Diar9r2rCKXE4zAJQ4Fy326pgxUoMzNjn3T9YdJh4vPfE7Hy6",
  "key29": "44ayQ5m6KgetCZ9vt8kngEX1avY3nnromYJZ7aEjBBrYtYCmnw1WadkZQpsPy4UijZjz8B4KvcfAwSrwQDzW8YLK",
  "key30": "4YgkgU97dn8vEDta5TGfSVQ2u4QoBmsk27pYaVwvFaPDkDAPUyw86PqWxdQz4zX6aRAtdKfGqjtjv2dP1ZtJQU9w",
  "key31": "5QiH9nyvgLpmT5GVCyYti7xtt7v9RoP97LWreJXT8oBiio4rtJh7FEwaqVGP13RnPg4hiFtZUfhNYbS4WQM1ADNP",
  "key32": "3UxpN4tvZNMj1TSirEePJuoU2viYP25vuWazUSMeeve77XYsKtEkHjyASgPAx6XJkxtobA9f7gB4rHukG2LUQ7L"
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
