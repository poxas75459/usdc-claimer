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
    "5DzcWSjzcuS2AWwZhs1gm8WBBGzEnKzgk6DZYHmp9eW791kf3YBJrY2jeR531CQgVrsGNrimo1AjbrTYncSU5zVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HsYnXpCwVEwKXsBz2cAy54Z6etLdcstz3D8RLKEVx6aTNcYc5SdmKyVNRGMzzEu9pGG4nWXu6Mh64KxknvWMUPu",
  "key1": "5VY7oTPpgHBqC7cpfLXFaHXfGunwzqNaNxc4Cn6mZQQ3ShRjNHSPK2JsxjmqdiNixow4oE5ErzE8j7VeuWzmhm9V",
  "key2": "54m7Mrcqxa6snDNMwXMNjjxmxZN9XrBKQ18rVcxAQyGuP834pUEZnxqGUtUfXiFdCfRF7R8qmkHubxhC7tUKYsyJ",
  "key3": "atU7js59kGFdspe15CgTeyTmwNLqKuGKenmhGm4ZS6bKD7qm7XoBEXLxUoTUiarkK9QrG5Dbh3P7QwLX4Ta3ESb",
  "key4": "4H7f2vaGGt2xQouTFWLfqosE4wGL7ifMeDKCoTwQrzChycDroUf1zYRs2Az4a2z5JKGQzQMN8wXiohmwDqUHrcQH",
  "key5": "3c8vfgu4Sq4o9C69GCz1KLYKRuzMp3xJZWknho4r8KMEfKSnzYUKyLvvjHizsTo5a3WGnJE18QtwujouPFfscMhH",
  "key6": "2fzmNdjA8zJ7tjYvjjhGd2oJfP946xs4rq7yu8gEfb9scDpWrAAZXPecsyLuPRBRjNWDe86Pohk5cZqPgxwUjbwQ",
  "key7": "3d24Py6yqUaiSGSpuMeuUYFW4HYozNfMjwyL86WNL5YD3PpXiPUAuBDL93Q49vKNbq1eauwH3Hw6BkUbTd7qtMzY",
  "key8": "hjhH5YiuLS8jfcFtTQLEAEJ4LSo8jbr44H5YM9SpWqLPgfm2bKQHTBd9BBpc4zbimzJbF9wzmhWiZxsgV8rQceU",
  "key9": "3PmmtzmzJkpUfL7pnHmL16v5BvrJ3cueAJTXuwZFsrQosMYXJBx9o8vyZz69XfBfRjV8rxDwN8u4FpNJzESZ3Ahz",
  "key10": "22Q2wokUHhHg2tTDK9WnP3Syy2z4yLyy3S6721tQg3qZ9PJSBQdTTm8kndBBYLL4f51AwUGC7Xs6gwdSANT6BYjK",
  "key11": "5HHiMCJh7dM3WxqjXvp7FjD13UADw8keTSmeFGdrcB9ZQmqCVWqUxszdqG18Y5RYjWDNuYy3R9hmWDzqXDKeFMv6",
  "key12": "2d12snUStsHMa2k1QdSgUguwUPjAzaH4P1HueWyRBKhwiPUA3k2dhi6jPZpp8uh6Y9V3ntdYRzhbt7ArnYLzkBmu",
  "key13": "eFp1GmBqXG31CwgL12YXGZCrankaGk53UMp11dXfT2HgRYd6uvZkDUv1uQwR8KmecTutPWkE1mbFUQhDzA2ZZSm",
  "key14": "fZMTxKspTcKnA3kBbvdDNqxormfPbi5sBzRmxroCNfFpmA2CPkqXrFaerFK1X6GCsd2rsVy1XohinJViY7npnQy",
  "key15": "gbcWNaFw2ij1VrDQcnNtqtPxt3DNGj9xS7mk9G11GpvxnqKXEsGpRPvkqQt9buvTXt7AYTfoAEVfA3bCiWgztvc",
  "key16": "2h6uuQNBnCeb9hzdxKfEVoe8J8SeyyiTJJHVqivG2M7vzNgNFgq6bo8xyECcpvw7TP1vGAREMvASnhWnuRMh9SuC",
  "key17": "44vAVgJzyBxQVyhPb7QUktkwPaKac6za1dkwLZqMKUYiR6gRjQRWkL4HGJo5Z9dSRB8FoUvMLbVC7eJ5g12UydeT",
  "key18": "4tk7dR2xsSQJMre5oMYe9tM5DVpWWyqjnEQ8Y63nRx2yUv1LeiyHeEqoR3uggb2tHB2u2zzoKsyFD1PECCoBrn8U",
  "key19": "5pqjRAtCc4i9Dt4JfbuLQnUzJmuZqni9CMJMbwYzijdX2PniuEhLDUZHyikYVUqY8p3Do2TT37Wup8T7jCBn3rGj",
  "key20": "25wpq6i63KtZzBmY2WNzuH1FVPZnctRcEuGgS2UYzWDD8UWgPgqbJZ9XMVEdwZ33tpZeFtZi2E6Rkiu74eB5zQko",
  "key21": "2cny8WiAzfm8nnLG6z8Tk1gahWRDffZYQAprkYs7Bjsa94WPtSZQZupeHBuHERUB7hUgFExzzc4jLoYzuJrFYvBh",
  "key22": "441kD31cCPMbo95ZUXJPo38FpHcua2Hk81WhT4vkbuMSXNSibfjAGT3Yn6aVz9WH9ZhqHduv1UrBKAJWQHKgZTZ3",
  "key23": "3xomGVCiSmyS1AjoyhY4LfMtD4G497joKDfbdwX3ma9bzKd1smhKK1DgGxV5sH51sLEz3hUz89FiWcXsgw7GirV9",
  "key24": "5dcr7B5reBp9XRzUAxdvYWVBCSDQYMtERECe5YPrKi1HwzEvQc3Dh5WLpKA9cQxgLsBAyedqU6WT151UGR8hBoKi",
  "key25": "3vjV1LHy7v1bVLUXqTZrjwN6R2oyfVGs3ja9LZ3KvS52SumXeau6TeHVs7WaXQWAnu1bJu3KJijftS2nD6SuGEod",
  "key26": "3VzncUdNcCuSQ5i5iH7GfxhAUuB2h6CCbUshFNvga9Z2wMQk4gDxKpvzPXW463bxX6qsQczm6YnpTtFjbWcPmbhb",
  "key27": "4XhRuUb12uQPdakCE2imzabH7mcFKVAgLcRSj77RMpajCvQHVEG4PHUb4S47XvSMGutxDyveKQPpZjxSoDaErLiD",
  "key28": "TzB7oxLZpr9zUcYpXjpHRAYf6YhhVmDbRyjjUa75upkkuXpxcXpEYkjA7vNXqdbtcUFqyanY8QWVqEJEkNLYAZZ",
  "key29": "2YdBXoYKwFaZZa5uwLjpuzsRLVVbGt3wpqr4rnxMua58X9yGhaBqvGn5vpAHhcYhQqUB91rjkqKDstxcUPbb5HfB",
  "key30": "2Mj5tcTWx2P8nVtHDkoGc9nRvE7nNSaW1FXyF4X7qsq5Lpj3eiqCqyugseSZ4q4Te12b7TMjVS1A8rADDpivHaYA",
  "key31": "bQwyR1R7mwaknZEpDPT9zmgF8y8DkiwCf2SXsWGWKSkhKMvStUowLMjh4VeKRLnCWyWjpNVzjMZcXPDpEmMCL3e",
  "key32": "5XhuKviCPRqXSa92qRK7Q3RKBFgBXWUQysVDbncVoJug9iBGgvH9Q1CELwQjaq3WrTiGbHTWPWBjovwA9gQhLyMX",
  "key33": "4B41pS8pdeh5htzH5kYxoUpZB8voG8WEfuidSEjeJEMGBCFY2FUixk63rQR5uaFG5LitJ5Xpe6sUkfdu8XAZpYGn",
  "key34": "3NWViGgpEwWxXnwozfc1wX7R9dvsSPF2Ci2nTVe8DEPYVNWENKDnr3BYGErG8fuJ2RShqCLy4ZesTGyHp1TnsyVS",
  "key35": "3adGWU2oF4BY6AohRvzyiKR2qF9oGhnXjxwVBBhMkQVRu3tpen3KHmmZ3UCzD9MsLWr3193WZKDaznweLL9PUJ6G",
  "key36": "5xK52K6tt3Be6VNwAxkGbvuwa2FrRmBDH9guRAcZPZxpydsVmEKJRntHpPuZup5VronLpJSdpPFLD8AtxDjWoPnC",
  "key37": "566uoyQKxE4CcsbFZYxJEjQsJtHQD2MDCFFc7C1sst6NRuCRhNwHyCKDQ7pCZ9yq1kWX1oPpZ4vQm4mvqKRRi5QS",
  "key38": "3Hz9Qy32W6gQRtcY2pihr2wQF8htXfYEKAHrZR8ZZpPKnCFYBJ2fcYoAJzuhXtuFfPdRzXEK9WfvUVfmxKC1dDpq",
  "key39": "cTTLiAXb4As1rBhEHXuXpemAHmoDmsxZ9CGNWSPuy9TPyH3JHhvEANKNHfSeVY7b39yemCDY8fmyHuWBgYFfYhs",
  "key40": "3Rr153F1wFEdvQCruawd697uQqnXd72Q5kmwLdf8Xxh8LTqUcbEwakAG6Ub2JDENVAYzQida7sUoMk2a3A2UXRe1",
  "key41": "2CQiGZVp4CDxE35Y8YKLTSShkJxpJsD1YXY9ReBBmVwqWNMU1W5tr5MCqbZWKd3fvgAneocLS9pw32WMg4BMqFPN",
  "key42": "4Ei2iEfbDz5WpfhhPm151ymnDXaC6isPpDUAi6FRKR6SctBGbbTDXHg2mmJW6rjXGyN9TZZ5ZCKDdArdZYRfwFrz"
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
