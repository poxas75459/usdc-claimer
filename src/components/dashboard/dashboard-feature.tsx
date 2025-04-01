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
    "3CT8ahMqmY3TefYvUTkU7K55kprYY3vZz87ag1D55RBCbNyaTVht4ezFXM3xBpRKH314HmRb7N8JrQJcyTUstAnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYmP7JytH2ztoL1mED9sM5WygmK77ac8rgqkDBKFHuVhQvn1dSjPuaynXQqgVtnUDV8Jg8DHQzUsaz1nSLaQV8N",
  "key1": "2SmFqTzxbqbAaYMksaAYWnmkXNSzCFFnV7zFPjyuBhJE2DWJ9UobHG4CsDjJvYDDw3GuoEchPcKauaYQCAkCyHv7",
  "key2": "3iFGNPJERR2ZMRGRMc3XjF6xZDBKPM9cpb7HDgyjLvhxwcu4YNxSGB1hguix3kFJzJNzxYQywDzpxRt3ZqJndvnM",
  "key3": "HvBrKYa2hXbqjJGvupwKxtcfQ8oE4y6xv1ypNu1mrrnNdaj8bVA1XwSQkHtX5EvDcyNaHXmTi3qxFK56QBc8qtD",
  "key4": "2AhgxXVUiXmaUmVGtgTwH4cdqbxGwJ6uzQ5bvTqetcszy5APJrc5bZsiNmCvoo1XfkVNWwTXPCxPBLfboU8mJDrw",
  "key5": "5PYcR5kCADp1cfmvGmRqqxkYPPWKk2V1VdVJp5rdzCwafsvBhMC5QHfrwk2Ff3dB4TPQmPm5QhTJhNTZwThc8ssB",
  "key6": "Xe4zUpbmdtv5hxgy1kCZsc7crqcZiUpY4b9uM299yc7TCfZLh7X5JrxqJ6MCXF3uphDsxRw3ibuaurnxF63DCPJ",
  "key7": "zxcm3odNRHVn2tZz49bDNaGmBUBNXwEhyBjnvzsy5qN5aT294ZA1ANww67Ajawg1wuLnGhVPWuVP4SqUXa5X8gE",
  "key8": "3CGT3MKwyX44fpN7BQDDfoVn3Q6YRvvy64abs4gPoRyK3hHjjxDhxxzp3fwjd8sUoHV2D9x4H7kgStZfZCVeBVad",
  "key9": "4y5ShUmwhP6K4EtvHFytmFBhXU17Cc5YRELk3d5eYoKKSrFjxwXNM6U6hWu6psQXPN4BTYXq8NqcsJuVni6Hvz7L",
  "key10": "ta2HWmCurTkkkJprXhZeJS4ecycB7JXPe496RhG1CKAMeKe8YCnYue5QbCb2ZpsTvtddqVsbDt8pDrur5QL4B6J",
  "key11": "3sWP94ARBzV6c5CTZyzRpCm9XWqxT9DhummMxvaT2bAVecqu9jzaxCRZiJybddTZEtp1bAknPLnuyHrStJUwAB53",
  "key12": "2rCxmaKHxtkd3svQXMwcLduAebiTCtUqKfo2EF4dbgJKEsDSZ1ruhrnUiVBQ3c974aoznAm8dWWLbkVhtdVBN6sy",
  "key13": "PVLvoUzVG7nRvLyDW7nsJwEKs7Wp2pA116989QrRx2meKJJt4oPyJvVeLktQXJnLRngn8aaMFzEuwHSLmyc9HHW",
  "key14": "5KGqv1JznNpBeST5BBC81FkFPbPHXbzmummtmgWwyhSQHGBSkEh5o97XF5UxhpwWKKjNn2Tuz6VuaiK3GFeoAWkA",
  "key15": "4kuD1h9ZHMAoq9sfWY5HEh59ACms7ePrer5EjPmP4Kk8cR24ZWsTKe3PyT7xRU8K8r3NwuH99BHZxSM5y7SqAU5F",
  "key16": "5wQB24wcbWLSZpVDaZK5PQuV1eBZm9yhBj1pqyLZ1hGbczR6LPoAhxJX1JRuaviRD9UEQATjENWQDeDz5LxhvvvC",
  "key17": "5UbnpQCivE9CZLU9rwJUqqHC2HNakP5aEdC6D4ct4MFt1TFYxsycZCEuev2AgsdZrcJNiSUFGUddUo9ZsdxnkwUY",
  "key18": "3xZgsmyg2AnhF8ujoyPHEUtCCbCxhpUmnyQh9LyQ3HHmrXf85YSXp1CS7thKGujP4jFqGhtx2vmF9p87ev6dnGyw",
  "key19": "57F5EaaRu1LqAMi1RqT9HBBhn8YzqgY4VBEHWR8YdF9AWzPMMhcF1UrtquzN9LtBC9Tsysuba5nxFre37wdJ8RHh",
  "key20": "3J5ifFqfLupQkudm2mq7pss1Nh2uPM6jZBSTgcQXW6ujecRnm7PsxPMLGHhEYYRFYugeaug2k9grE6w6aJzZjKf7",
  "key21": "3mBMx6aGcGJSUUSkFKorsSF1CoTxY6CixHUxoSqn2C1JSUao3w72ivJA9piEmoBTfFwper9iSLrcpBZuwDxhpGZj",
  "key22": "5aSUi5UwTLiEKyujvmmM8N71RzN1o7h27GwNDaf1HTyG2wpuG6WucWh5KrML7NxtJnLNFxcwrGSrt8L6NZ3XfqXZ",
  "key23": "5ZCTG8nw8HfRCGYmi51oh25sVZ7X4jnWjozQnCZxqyeTix8aEvSgfRB3Bc6iJULfLBgsmuA2v6YBef4Rp5qYhtgt",
  "key24": "39y67Phqq4sPswf73VCdK5A6Z6gffgNiinvYNme73uSnS5iqo6jgqtg5kbkjH6rqJ1QcZsJvJETNHsjBfNuEiFFM",
  "key25": "2CPmzyVUcaqRyzHMKXPpWx1FT2ZapHQqYAcpUTqcBP1LZDebH6M9zxWcu3QvQHSZWxzZfcL93YBVeWTfqaUCeha",
  "key26": "55ak4ooxmFytApJysRt8DUsv7B1Yeg8EfgGdwfFDN8iC9RPqqSzZcKv5qtJiHWVFto2ocrLrNXNYTFdMYic9w2nm",
  "key27": "5ssY2HJtWw9REKxS6AyVo6Lt3BTS6VarTPm8ieunN8JEoTmxNYQw8Bn3j6qKxRdq3LpH7TPEsCNAvdnxESAGhqLH",
  "key28": "4oRpBy1eeWufaxHu5GbhVUgyqrp6PMk5Rgfd9EHuFvPeNaue8C7n72hkFFiYtUByuQi4BbWreJMgUGKeSyfJaaGz",
  "key29": "w1kzQEJMR48yvMLv1v6Bt6iSMZMmoeTjWnvJGr84FQ2bfUVRS3QmGPktqGHrx3atbnxPNuaqpiuTrk6xwVWxK2N",
  "key30": "23wZ7YfdjHNMubDgURRAeLkr1RLXrEubvXK4fYFfVSzes814zjprw6YfmfJ2R4DqphMeCjBeutSNxzY4GHR9bsZ8",
  "key31": "5WKBFdQWVL2SMEyA2b4vmEu212nZ4y64rAKB5qFxSpuDkJivgeVmh811VcnPuZTfxTpGZ3Yb3SCxutwZRcJFFt6A",
  "key32": "5qUSn52iBUDAuDvkVJKf64aaiRNadQJHUhiM1N4RL4DugS9tEduo1GRX184TJMmzRgAUP1w1bJtCTfBB8vYQc4Ve",
  "key33": "2aHAQAjki5nZ7tyYxn9fpyVL3kDG6U9488DFnFJtigp7KrhgiVvtCfZKPV512evYqtkJsh5m7pBbTHU3Lxha7BbB",
  "key34": "2THpWGn16MBCWzUgUtHWAoJxqXveJXTzi2P82psePeVKDcsrMdmjYDFQMbxzWPHKe8rB1EfJYmpQxc6yojsnDigJ",
  "key35": "5R95zEWn5iVr88f3G4p12qu1QnXvVUEmrBbXwjv91Ewg8AR1HbU7iYFCZBQ6dhwqxoQhYtLD6qwVrRfRVMWcpfac",
  "key36": "m2jUEg7MUfzEkzdyJnxLXyAmz1JKTffYGtXMfAgHu3eR48bXZA4AxsJWNN7c1LoKVAzD7qP5RxjRrucXe3BYzxT",
  "key37": "2RBqbLVNQV91e8eBft8BokxG3dSjHpv2H4N69xb1xAP5pQDC8sM3rAKKBpHpybCwdfhCzk8pk69b8637pCeVWwPk",
  "key38": "4pYcxDhLxJKcBCrRWWC2cmmsjqSte31jnEeDQGRHX7VkReKfgATCAk69zx3QEWvfRPMMUpygbCB6c8rCsupnhUFW",
  "key39": "4FuRindkR3TdCuazAxp18dRg842s4K5j2X47xD8ArDVvZcxNb6u6m9KjJBdwnWXktLE3WBKs4YfzVxBwoZz9ikzR",
  "key40": "sCeXCCdZ7CU6ge2KggwaoH18b4TspTc3zuQeCZ1FhbBWBmz6xaYdn6e8AU7fnCbNe5gCHGumYhVF2MkwEUc5kYR",
  "key41": "56WJJuEfZyaswudZVDiaZoBfy4ppeSM1eKFthqXNqQEZsoswd9GQhgcP9Cjh1D3U3NqifVRFpU9aRD3jZP3u5xJn",
  "key42": "2aEZ4FeDJFBqf3auazEhRDkZzYbjZenA4cu2fGgxg1pH5eZi8qZo7f4v51Hhh4ycD1d5QLciSFq2Hi2stiW7ezhB",
  "key43": "2XBSwBqmw7miNS1zx1Zhm8GPoSsnmxXgbzVntcWMzkQoMTUdmtR3kcg4ApcaYkXNuchPTrYgpHjBfsyZeTZNupZ7",
  "key44": "5F2XNwkJPgcsABF5hJbZwbuSYwFi7f3xJ6YZVvMpbp9E7yZ2WAYUVPZRqJajaTDpcfdqKLzwvWGRYiH155vwRMVt",
  "key45": "4kSr9DbVVdP4NtnAZGYLkXrcrM5JLi8QGV7ygAxy6chaow5X9eo7yk7sy2DZH4sQ1kfzFNnW6XpHiDmDoCNdUAmR",
  "key46": "2f8GiESPrfuavHwSSL94NiqeHB7stLzLB3wMkRPZ9ymsBy3dNkVQvLbzZegBEQZRGEN4r3AYvhGiizoQzhnEakbD",
  "key47": "49jZZPSKeojayxXMvHkfYFwAzSHfwatHTrmyEQGWZvPwih4NSU4sbQW158b2iEXyPU15i2eoBmLUxoVVDPjgfwmw",
  "key48": "ZYQNP1KGXavkgM2uRzSX8vDb2BUg8ip8c986payB3wruvhRkLX268ua1RJan5XKo1RiHhpKKAWHXKouFuS7tPJC",
  "key49": "4a9bEUADBUvbVzgApPnkBLcgCZVw85y8qmHSgxDmfMBJf4KJNfWs2VKracgFLx8rNKj9sxJXdydnNc8kfP7nTuGo"
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
