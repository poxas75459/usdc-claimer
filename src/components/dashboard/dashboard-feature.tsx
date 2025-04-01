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
    "3TK8phFSh5XNyFrLveKpJWtJgudutZ3PpKZivqAyMqAy49VUn9H3vbDieimNvifK9uGnktbCWYi4oFwzgWpEGbNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HiENoYb2BGrGB9MH8kVEWwqqNF1rhUfMjpk732KRsFGGQTZoyUYR1AW84w7YSC9u5ouaWFsdwBBw2n7HG6mgwgT",
  "key1": "2Nsfckkn4rzhe8MQ2m37AP3vhghChDUzd1Vh39rmVgHMWV9M2H5eUEyWsEoDq2S7iV1J3LeaYc9NXZiA2AbuoMxo",
  "key2": "3FpvCQra2k1uAVQpYDP94Ax4N6nuzPtJ9Sd8iKS2bzwcgnYjvEtnaHdUv1Tx4SzuSQz9tAu8u1WaRwK7GJa9YqdE",
  "key3": "dJEuPEVmxAC2sv8mQQDXgVjr3XKiGcyKzTrSZY6yq6JAomvjuYDWAis3J5k576ws716CcCns4LGH2tTYcRwndao",
  "key4": "54oMtSTLFVitoctgAhy9ZHdogME9WX3Ss5DUv6YTZT8qWZ5mYoqgo7BS7F3HjvMQ1Uk2CdiwRtZ9DcR9Ks3HuQyo",
  "key5": "3dbwWk8spTUwRUmnMmJNDjwWGka83QQpg3Yt4z9V7ikb8y2kuPRL1bb24NyBfCm3fBDdSJM2xHixMEtn2EufTMtk",
  "key6": "4AfqB95DV7VbmjZZqPV6eiVVmPhBuiHDKyN3zitYpnfzzu2YQATDP9gLWoFRLFqiiZ966MRspwVSmXD8UQZYqGkk",
  "key7": "2z1BGK6yoy8RheeRDG8bF7vJdgeauTKqS9ZebCLpD1sRvZRfh6q4NPYjF3M23eHukf8wsjUaSsbbPNdEg3753h9B",
  "key8": "3UA9Hx9u2jSXbkHHucb3fzkM5gcHnPsX3S8ewzhPmhT5VQqW1gJDwo6Lrjri1Yu5ryHBaKc53LMNdx1cVwo4njp4",
  "key9": "47UiD2KhMuoSzys23UTSwxr5F8PwYpCixPCN7Tw7v7rPXH6pwn7WrpCmiHQyU19puUQog58GWWBgZ9VicLucTEYR",
  "key10": "5tZ7yGeqspMUq2dcCZSUKD8NcygVMipaPBWk7qmmykeNgYHLXD7mi4faiFBcE3vtbRxWwVXgUHYpFnvQf2n2XBUn",
  "key11": "3noXSNcJZfnVGJAE59WCwireTzDDTfxc9aTuGC59Nmhn3NgmnG8nzErVxEHupWsSv3mJUSLtaPphP2rES8izr2Z1",
  "key12": "52Jrm8WmyFEJR5tVU1MVPqSngGxkTUAE4Rgq1iR5Ee3c2bjhMP7rHeqYs5HJPbxcdrUTq3YwUSCP99hd7upCS4v",
  "key13": "63YgBJeNcHxezy9UJzJRc9KHYJ88bbZBFaWsc1LzZV823B7wBfBR7VT4s1xjv73q1rfQttqtrLWuRkxTHqPXD5DQ",
  "key14": "33GttcKmaDwQfgtaLqqzL5DXJRiSrDxruTND8fiWH8kBRFVuwTXZ6KkvWFgp7ef3zaZ1KNbhHvWKHVXeZ4esSDY6",
  "key15": "EFLuB3CH5gAefHb2x82b1LmUenFYwfVzz68ZPQn2sfUHKLys9VaYYkuSYF3n3m6yuEJWhdAwmZNUZZL6CeZu3gR",
  "key16": "3vLxDPfLsWgEahwoedzvMtjQby3MfBPGDjG6ghTSzFxyE7UHvoxR7q44bZ6R7FRrLD5GAi3bgfGHDNMyWUe2eHoi",
  "key17": "5WrLvVskdh2Z4LJtfjcJ76Fj7WnCTibMMrD7H9HypKfftvAn8ebvk2ywMw7ETggkXwLhpjqFiYv9kcJkW4aUxha",
  "key18": "3BjzuNLF9RUGkcEmSQyA3grJRYPYQPbzoV7s5eALwkmSCHffzqDDrAvps4QS6s9Mo3dAygk3ctb5w4ZNQcTUMsiY",
  "key19": "4btaArRrNj7V87YVCNjm7MbLoszSXhFkmQYhxrSBgMRTA2RxoEvmLjqmKNYM91LQDaSUwhVKTxxdX8A42e4QEDc4",
  "key20": "S1PgjxoJ6HMkBxueaH9mvrd3SbAxporYuTwoMzVzPDNPbzzk5Kens5dfMmY3VDyU8WRnhLxVfHVyX7MwM15oqCB",
  "key21": "52ipPfbNa7MfGBFyRTWk98JSxsL3NwgSNJpVrPwMcQHw4C9KyeKmvP8jt6nCwxVyzFWu8dJGrkxsxfZgocebA7fW",
  "key22": "42ygfE6HpZ2osKL1sDoogioRPzopFFj6LYpqkXEadpXX2d6SxztJ8mUHrQWnn3GzGtxyknP4E7GEwoL759yqgDXi",
  "key23": "3unf6Ju3eo6XQuzX7oDMSBW8ajeB1ktyBG6bd7RGAVVU1w7dGV7ytYdHKLAf2zQeHi4JoQtQ1951M8gEUNhEn5jX",
  "key24": "4kSZYFJgLHVAc1qRSU8uwkRXAY3qkqSn9UAYkdXsFm1fCoqKG4914uMewQfE73GyhxEArw8fRtTxyU5gStibm4z2",
  "key25": "2meVo2LJkxsNXpFUVAHccXtgup162saQRC3vzjaYXbJL6PYv71hCAJn8w4EJtCjMXnXsJEfoCFus1WUoz99v7XGw",
  "key26": "47Xgk7LvUrwUndxA7h7jytdaw88yxfSg7JtWZD2NqdrGsdYMNMV2NvA9b4pY9s8BKmKcFuMULTor8AArY5RBn4HE",
  "key27": "4GcjyCUAWpFg6AaNovwMZYRSVXQ3nAG8PNAyoVB9QfQ9JVcmAsEKNgS6LKGz2ezngHmRMdsTPpRxTgm45Tw6yZKG",
  "key28": "3xuMSxo376Z7ckKwNLoH4wHpEAM8nzH2aPwWdwPLS9SUSCgz2bdpqhrRqUjKbwyYP85RUCEvZJhrTutzGNaPGF4W",
  "key29": "2ex7DoAEi6Y27T6tN7qUDJhqegTorBj26GwFfhPwnYCmkQARQLv7BHPRTBf83rnhRMmG3KCFwPsso6ZHzTz9AE8q",
  "key30": "2YY4yeCXT5fne8TFg49DXTcmYpnxyG4cTFNDb8iJ3WuMuV2MDp88xPwAEkd918vWS4K11gVUHrxgp5NhTHAqs9sr",
  "key31": "5FWxu62Z5ZRLv22rY811N9amEZf4cB27rVTkwqcMx6PrGxn1Deosivfd9WGQ83jkt7Krhe8poBCWcuadL6sraurH",
  "key32": "218GnVx7FP6xFD4B91Szd7XSARjw6B5dsW55isNAm1WMNX8cwFJbwnCww5KJ4BTDYxpUBijWR35aNCTV1kkzHyFQ",
  "key33": "5kiSLc43MHvUsCQ3Mu8Ja7NZ1MvpD4b5dkwiDVcoZXaM9btiLsNNBb8JBDjo48BhKg9qX9E4xTWvzKb6ocFt7ghB",
  "key34": "4S1Mu5LAFeuerKYutm4DwcJttxrdRksTfHPa94DGSpCjpymC3YvhGZ9qyBYRbetEEzSKhqqdSSr4qTgtqchgUhvQ",
  "key35": "yeh3t8E4bawZkP1UuMxcMn5AntcCRLZCBa8jxBZZ7HY4dmde1ZCRB1XeHd7BX5bzTtCEq6RdqM7MACBura2DjpA",
  "key36": "4wLZjhccZ6haPPmL3Et82C3nx267m1GSCwNijuuSX3kz6Zh2PphkrdBK8Z35mudPTanc5LtuhGVCFaDBowbHpxvY",
  "key37": "5QEebmk5YFHYbZpLK32GekoXdQ38ky5PXdSehx61QXLv3MN5A3yToGg1DXUtmp6K9m7wYetXozjDXd8JqQSxHT4N",
  "key38": "4jYqFUhQ4VpgNhHVM7QrfpLRDS9rAYsHcB4dYFcig6zxZaxjX6E6YTNxPuCKEE7MW4HEGFGYHLTkwTuuyxrcKiz8"
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
