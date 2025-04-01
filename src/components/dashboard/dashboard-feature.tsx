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
    "MBbA7HYtRJZXJGvVJu8Enpj7QzLLsH9K1dDsSFJtnpENcyqm4ZzGtsCj7vtgQ57uuXi1HZhqeKGPpyXtEtc34Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3CNNNKSvwjBU49juDdDuyi5px3BpdPxCYkB7KLqZyKw229hxS17iQr8HnZjMEu6L7upQg8TqVeJEXWwepAouXp",
  "key1": "86YYwuN9jSR7VDbrfr5uWScxHFjPCy2pqKcNWiJSpZdJAwt8Qk1p4kSzgZuuhtJiRembj2rEraYTqqMTWDEfxnk",
  "key2": "pNHAG6DsHvvvJXHMA5ejgEQGSHoXeq8MzUSxHPsTJQs7VpgTNa9KpdzPQ2DAKWH9HVyiwdiA9UPhWqA2ohtKJFQ",
  "key3": "2maK972Rye5gVUiEUSjKmz2BLTZDBuJ8ii7TCYEi3ts9K8eQxWQvEkRnr3HW5U3GnJbUY6LWZm33VL6bDfHxLY1j",
  "key4": "5MALeDbpX5Wt8Nmu1kMeNncYXXn5AY61nGa6HYifbLGvNdboJdzLna2WYMwoFZJjv87j2oysztQMwLLYC1wNFHoT",
  "key5": "54ghFpJLbriLqeuy3T5FPMZyrJS4pY9iGiZ2p4ckwiC4pdiAbNUMFYEXMGhe4AN74iPyFX2a2piVdYMUtCAKxfWy",
  "key6": "W9VkQU7S3G6WYpXPptNrtT8JjgZ1pXerDBqrv3S2fJ3nS1PTT21kc9VRFaP2ZhNTXzFJXpwQC7DrdFbjw3snjM3",
  "key7": "3iqFFV9kM7NdypWAWTh8TnUaSzABfLKjq1WwyfbGxHpk9WFYBfX62dA5WGXW6YCaFDmtbqaZWcm4srcg1hhhowu6",
  "key8": "3jhTvZ5hdn5k5P2nSU9JLivKKd6gxMKLfQn5q8D6U976r12Epdo4uQbTPx56DukaY4fuD6umfYPA6A4LWn382MML",
  "key9": "2xEqgMviDVRfpy5uQDNqWEuwEfxptUEYMz6ChiRf5MupocJVAJDc4r2RMd4j5RgoznDRv8AjiWmRjX7oRqHAZoJ4",
  "key10": "4cyFf7ugEmAEGNbyCWGsbvr5zUsnhhB7ZqS1qZ27P1mhrE3mpn4yV8cchotuQnMMqaCqUJpaU6MNP3UK24sgrcJh",
  "key11": "3HLGCLYhM95VMBfU5Jmsxr8TuQXdAThaEHPa7hTGHoYubUbMGmYMv9DeGgiQihLTsdqVrV32VRdhHMKQDRKRJtx7",
  "key12": "3vTPnFMm27BYRyznBwUQ9jMTcKtdfgM89wu84ZQuBLq2jXzb3UYXmi3ZN3Wncta13CneveZ4mHymNAnyHXUzM9cF",
  "key13": "3jaErXeUCUQZAXq1BWKM1a2F3gYDQnMbpTJbf568yxb9oQ5wZvToRzpq11u1e8UuaeXyKztQWx7F9iEJvDot6tMX",
  "key14": "5rXRtj9ujimDYgAB48domyVtfWSE6RTzZ5175rivLz4fkGda6KGoCgFZpmLyzNNf527cadMmZtDBPVqN3KQ2cLgv",
  "key15": "37v1a2yP6seYjMzA7SmhNrJXe2RydeiGodw6ZvDKyKP6RC9sQ9NWARrwetFwdnwcTB4MoQ5qof4QD2ewprCdcUE5",
  "key16": "4xuFm27YVWewz7KrDwd2pjFWxnLrseSpB14RqCMVtDADzvZMkejkA2bfN7Quk2fo3nPYE5gjjkXxR77tLttEDykM",
  "key17": "66RETofjUxmug1J4TuARyaWAekrZ8KX2g7x7QodhnocXSvKeThmdcJvM3jJgHDNt2J1p89R3ZBHTG6n8WoagcQSu",
  "key18": "5U2pMX7Mm6p8Hq6kqr7x1BNiyWpyQW6ZzizmKaKxj5Xc8KJQSAiUZAhXPdrzDevJLPnLjxsg42UuRKeGJvKB5XqE",
  "key19": "g6KSDqcGbhH3yJ7G1N3pfehsGgHtUfkZieXuWkSpLVwJeVEmQLj8y2GPtdT6Cqvkfjw3PVEUHizEGxf9mWbpcW6",
  "key20": "2bg2Wiwz1YVvhxA2xA3DB9W7FPU13hChA5CkqXz9ncXHDihay2PU1DEGj73evSqLsQ44E3vPZsUYpbqMU2PfEV2D",
  "key21": "5PHr6spJVnWJUuWsToVk1B3tHWmBrAqaVo8jUmpUtaGNhF1XJSGenxYGoGa1Ygbj7vvULqz11EitELVhkCyeNgTs",
  "key22": "5YFVbYfCgjDG2yQ6fjnCFkcSA3tQj3bw8j5VBowHwJn6MA8yHfoMvZ5AUerBkA2LAfkcLV7EzBXYZy6P9Hmtwjtj",
  "key23": "5svycnHg25MiohebAj6AFWFqUBNrD3qbqWn6c2nVBo4hV1PqGKW4cr5cYKsHHUbAtBSKpy7M53rmXRn1FZn99Twf",
  "key24": "2XKb8NFQcccT4y6sA57fEUT8gVaBrcwhq5gtzWT3ykmf1h5KxTrCM3z5MLpdvnkZHiwwW7o7nU6Vw3zaYGj371RT",
  "key25": "5xiWBN6kBHSXT2s7RrpMx8mmjAsmLYL7UnqZK8dRKLYaTNMuNYqnncNvWL6PxCPGFVmNB42DKQgQL6nwUqTmTcQj",
  "key26": "4UJkULYb6kRHzPs34YBMm34ff4iqhG9kFZ6RZPjTveGefmGuSXpokb2sPGXoo3eb27d4SnsVw8ErM8apmQZPHjHC",
  "key27": "KFb18PuiVUPKY6vQtdmgkVEo622bZxXTcouzCXmHeA4gLAdphoDzPWBYax7YcQdxKELSfafyfFZUGBnnC6Sg6vX",
  "key28": "4mC1cAmgwdUv6HBK3tqTAmrsu8qwzFXvp354Dwwvay6cZkKTmMARrYAvjP1HxN4iUJCyrsaMi5FKVZ1mkrwNLSPM",
  "key29": "38jui1aCPHsLeNdFbJY6guAGcPZu8CqooTjzdYaEC1QMfMUmhNxcsvDsKCKjvVEWik2UuTQWcP4YreJRLxLbJZBQ",
  "key30": "26QouHiQ6XunzBXh4s1ARjuSFKR2LnU6nL2UEBWRgrMqjZrtt54MpuHyXcVLJcRr7Eihf7ZmQhU1WzKVxJvaock3",
  "key31": "66o4zX1HVaVE9DGdoysZgJZZmLqur4b3yCEXZBf5aBf472iePkS44TFoQmRAWYdcnJwvEfB8dLKJfpjLdhEgH1cV",
  "key32": "49YAFH5JtGhZX9g7J2S8phHsKc1sLBybQUy5XpfG3xWXZhP8QGmRDtyWkXAbLogzFv37RuBAP1RcSxovMGKiTJD8",
  "key33": "5odZdKLfJWJH4NXx6xpXsw17u4pSYrYqk5YqV7YTTVjLcZR7ezNHqX7k5G9dX7KQyPTehV7fMK4E4ojyvmJGrtGt",
  "key34": "2D7FPUJuMsdrKK3pGkXiac25urd1BhyYvPkhFQfdzgAFK3n7mPhw2KSWkypZzmW94DS56swY5Wnaxw7kMj3zitrV",
  "key35": "5LCLVyqERL9fsQBpHUXZpbPtjQ76UeJwohJgjGQYNmHyZNZ3GghHSoSWjnJv3pYjgZe5x5DAZfi5ZAV6mZCSdJbh",
  "key36": "Qg6oHzJjoBvwPQHVn8bgHXBjSSJ3WTusfn91zockmNkBAYncLsHSRsHfUkMifq8Mr3xG5B5YiPG15Zywejj1FiL",
  "key37": "5saXWstw62M6eW5qkyKqkt9Y4rmLzGvwY69pZUnbeqyFfmh4ciwXK3ozSrpsCgwAJVpH7t3LEFJLDQGrEBNaPZsG",
  "key38": "actPz6sRQyxTNmzPsZxNDQmAwVbpAuST5TejRss7mNsPq5dEemHyuz8FvaZ3Yr6T3ekt5EnCqz4kSiZoj9awemu",
  "key39": "5EAG2Md5xCNXhPXwUxS1aHPs7NMLnQwopwUewLPWzqQrYiaohyC63dYcdPUA5UpJ7mHqAjTZcT9ktFG8zEvpSaRU",
  "key40": "cpSzGyuoYBSSc1A5rp7U3fSzUtkWAZgecSt9kdC2geZeWNRDbJpSggttigDTjECAMoyEKB7bDbi7pSpPKRWpyUE",
  "key41": "bpSgorQ1KAudKbGjTdHsC8SKZx8xqukvvi9kRGPsa9hJQQQ3oDDSwj3JLpFqZ8JoYHSAsnCkkRZtvBSxTEFnnXr"
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
