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
    "28jsYV55pkiaVviegnsYBcKnW6d5ButEQQZ3WPQ6LYvYGhfXNv5Kv23UjmA4FbuCuGJTaU2tusZUuQdGum9dpykX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NVuCiU7gaWDqvcuY278gFsmzE8FfF6tzQuyLDN88zgGm9vZCyZEaCwMuP3Aqz4vPLaiS2Jjnqfakkxnewg21ntF",
  "key1": "5DkGwZyCGmAqWhpcjh98y5u9Vn4cK3ywiXoTXzL5dgyvt7P4JZ7zkiJwEw7cf5fV2g5fr1xszpoZWR8rzAjJREEq",
  "key2": "5e5uBWAcBrEKP9yAmVo2fqSy4RhBa34RR3666d5qYf4QLQYphfsiwhEzRBonPrhko5Cn16n48L2SXkoadCe8pJ9n",
  "key3": "5md7aYeaaEFGD38Jci3xRq4H2m96cUtPpBiV2a7Wspi9gnScEa6giM5ZFbNsJozxdn3ysKZhKbiHsCEfiarDmgQH",
  "key4": "234HPV3JJi7hk5qTqF1NQHmib1XNT1highz5yCoi4GFXRjhnZw9iunk5U7ftoqF4qbUh3Nt78TZVg7Ui7uhusXDf",
  "key5": "QAH48NqyskcQvLJ4wHRtxj99qxz7UCr7rBi5GuhwaUUzwFpZdGAB4YmoK9V176j38h3chGQ6XNPDRe4txUSbeA2",
  "key6": "5dnQkSBW3mktJnfmcgJWXhvbnWni11hFUMWj1U6M54o8d13qUYWMsFh9qqeNUNwPL1AwBDSenbngkSprY6s9waSr",
  "key7": "XCxmXv4SiLyK7UtThtxxpQndq9t2rqvuQdm8LsjSPSVKneY67nyTcQi4icESsP86t34beyccetWLvDqQaAPueK6",
  "key8": "3sUdrYHfR36GmAaSXN5swo3iEtBqA9BJKKLHMzWHgvmysRKB6GAnsNm8qLssHw1oYoEhfUdTZrTBvwWzJCqyRzGz",
  "key9": "4d2JzekCQj8aR2X8ruxdQdpSufkYZ8s3sJHGhJwaPQiTzq7HmCuGLpijx2MqM1MN5JM7VvxxnYAVtkLYtzk88Cgy",
  "key10": "4ujgqGKtfqmQSBUcmkRq5gB3K94xTqYmBCR9nbJMZ7eJy4H7x29v9K6qFuARvngszMyZzknAnvx6FmfpbVXxLCro",
  "key11": "47pozd9viwK6jeXS3syWb7Et8mAk76Yty5TeUCHJtwMy1Yhk3xvQNq67SGYTeNccGfd5vDWLjn1whoQMTy3Nrid3",
  "key12": "4MYN8SY5Q5KxMekcNmbfBzHd2gcMjrXpDXvGvzX6ZH5FG7tDezoDV3sd6P8JagzadFzRqnGF6XXmhgkSuvgkSnLR",
  "key13": "26LDh3tgKLhutMMEnxga8KGicGGcxNF1fjGkvGzBxHkCMPMTFyusUfCrN5aLgX6y5effcTX5ewK9mLoAw67sKPwh",
  "key14": "Gc6S68HFLvDf3LH2MBqUUEzVXjYhTDc8zMrhPd3YdNP1KVeiXA3zaS9fgzFydCv1FH5ck6JAT8pFqNHWnhcwuYT",
  "key15": "4chR8BXqxZFTRYmQdNUsahYFhVRRRgfVMVeFBwJjbRdN3tw4TSk4siWdCto7zue7zVPp1H1vjhbF6qkNfEsWxiq8",
  "key16": "42FHg1KaBddUmDtJfWwWGjxyyd3XSseHMy4vW1PeKdXiNZjMfjhupE5eDZLwKo2x6VhTt8TG8pkdJTtWzsPH1UWk",
  "key17": "3p5yhBeAp31KvXzppK6tDpQJTwYc5ANFikhi8ik8ZxcEgaGuff637vWNNyNwDvqxCcJWHcE9BiZz9mriiW7FyQ9j",
  "key18": "4Ju13HGBMfPNE3g2bWYhdsDukdn4PKXVRQ72TnEjs2htJwhCi2TUDpAXyeNVxTCQkx3CucVspfThKBfHomgEKkWo",
  "key19": "4U3qaDztrdNK34kKvfjqvatXsHaj5P9TkfKfS4H6TNWkLaXhthSQc5eKE7q3a9oBfmZH8ftC7trACiknsh4ZMTE1",
  "key20": "zJAJ4r4BDyoQdBMyaxd3zCGezTSKXw8K2GazY9HDVLTFue9oXH96fgoQPAPqoDXdBStRCymK3enwbt6pVQ9KB3m",
  "key21": "4K813AYCZ35sC7BYVVQ1YLwk4MxNxhigoi8rq118xW57jkiqW3c4QP9i3p8ayqALKo4m2MuDfNgCHL12fLMknrXe",
  "key22": "4FLeMKN3DXow6VnbTR7Um25KMXaPJuECv12Db86keTVQwEJF888MmtxH32AJEaP8YXH8gbvyFDS8newjbTLi1MoL",
  "key23": "2tzMtBtJNL5rjE38v3dpJyKBvwSxbgwSXWnw12YaTMEhEQVx8ZD2e98HmHoFdVJyQNAozdYuHJCvCLp1FGnTpZxB",
  "key24": "5ryGxDQ1RuwrmrS74Vs1zURBQdgQPZHy9HHu9DAyK9f4kQcBUnHfQGWztzXLayny9abVb5LCBmqSZRyKBrFNSKjg",
  "key25": "2XZu69mxUmvaFkHhGw6sqPnPwyuf3Nw6dKw25AgnFxE9x9TFjnnm2cB6i9P74teQp1yPpwKVjHiwNEjpeRBvhUGz",
  "key26": "4rU4SbZE8GgL7GtMsej9mtCDLBp3FuXtQActqhpqnz3uHq7oBaR2XRSFWFqD1KvLRxd982PB5b6hMxV8XGmZYp49",
  "key27": "4TEstn7YfouqiVj6K9n4dqxjPWKg2T7HNVyHohsdr6uR3G5n2wGncf8gf4NWKWkNigXHuv7acPVekZLHToJhHasy",
  "key28": "3e8goDvVk3uJN2koGQzn9JaxPqx8TTY4VnhWosDJ6Ks8ps8FZzgzUX6EseMtVtpAmriqVidEYuD8HmLfSVD57eaT",
  "key29": "a421y8kZP5jmet17d7YUh5ewoBWJ9wBNd8BjEaM4tVCvFEagmQJ5fm8QEkwphZTjyAtGFonV7cvArRYUVCy7Znv",
  "key30": "3EoRfq6BgH5KQ1Mixd5JmHvCssCTzb6upjnvGfioo2pngQRJfwv59uq27wAeaZH87kZLnzkcrZnU9SFkwTLKrTcc",
  "key31": "5PWsAak7HgXXn9WrsfGyPMpahp2bp4Umkg7ro6odN5nttf278ZDy38Q1uACixqQWtjQdW5rJtQq66vgHWpK1sKYo",
  "key32": "H4nqNe7ZivSv22ePxKkRu1QJgRJHdELYWUnbMG9p3mSmtv25FVswWT5wd15BhNYN6vAu4niUpFTiwKdSNeBDRsp",
  "key33": "5m2Mma16eMfEBvBZtxkfqkXZ2P4V7M1XhEtwU2PjxPPrUiMtRmVTbTqUQeHUzM9W1ARYtybMfVgQyZyXYVqpz4VX",
  "key34": "4WDeQ5sYwJAn6xvmPwr7yRDDKVXt7LkMkpcsdEfUw3PLwvMrgnGtcCfgr5PuQa6ys28oTvdCq9cbu4RCAM42c9ZP",
  "key35": "S2U3NfvrjtqacjycgG44UkcjhLF2cuV6YKFZtQVnx8iDMvqgWkWNBo49zY873kgKoJfvjVUPjx3J68jkJtreCTv",
  "key36": "2doCgMg1DChQzUDm7mAqU42uzppJmGtGvYDaBhyKZJXLUd4hxDKjzNZwr3bhEbP9uCryGp244VZZLyzm1acCCydt",
  "key37": "5LmKwBU51nBFJ26xkZC2jvD7dTyL5ygfAUziKKFwU5237RATYhS2E5rubZLAiBYBSg8d7qv8NyrZLTtsgJVuhCEb",
  "key38": "3johH9Q3Y7UorCKRWyvzhkQf7aWbR1C4tV3pXsnPpAXBJ711qvWA4P4P9mh5hEcjZoRCf4yadEdtBfFMDZm8ii8P",
  "key39": "2rCoTF2nzEEQ6JEHS19KqZPVbwvSWMJSDHhFtCz2vwiXaRXEjPenL1cSr6KyEHksXwHMkQrfKsMKHTRxhYnw4Dfb",
  "key40": "2LBvAuwhb1GGGiVoYdAmJc293crcB52TDYseS7R4kbotSxtzyuEVMjiroWRSkUkQfNJgzYgvCM5UMexwuwpr94oq",
  "key41": "3DNDaQhQN5dsUBLnwRxU4EqrwqJAQzxAdAcjfVbLkqNeo9wQ5LtCxGF9DBwJTWSDgUpgERhhiLp3x9nmxDt3GDtj",
  "key42": "5c44tRR1wrsfxLTgYpZdA5cXdCAaDxK5dhEMCQazqxwwWMWp97Ke85hVkAM7hVLbLwZHChL53qz8D3Wpwi3Mvjgs",
  "key43": "446Xnm4uV1QasiMt4EfmE2CCwUH2EQRbrbpoRVt7sC9nPu6giJM7dGXZt3TwetVqMfpRmqKntJbc8uo4TNUqAdw9",
  "key44": "4erHdtHMcPbvM4gAy8Pat3S49cTctFxVS7kAkRFAdLRx3B2HUksp79JRFQjD8iVxW2HTuCmzRq9eMyz6tezbBL72",
  "key45": "37pPjqWLtJmVj3HhoaTetm35QzBsakJ6MigSTgFqe8q2YvUHdmrx4NLRqeTUNwuiToBGRMHbv3zZgeXegppRy97G"
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
