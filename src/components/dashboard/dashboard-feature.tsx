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
    "3ZXVynfnC4NvsTAP4xsrmzSZyDjZ6FdNDeK9r93HNpP15dLUqkJEGA7wcNChy6cTT2aHf7tEiEAc5mpz9xgiMo58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pMEFT9jwVAryBwfwh8DcArFpYrsdD6vhfjqkmwMm7SgdMpva47cnAWCWauhLx4v9YLVLiMQgZE8dNnvVnt1DH99",
  "key1": "4cbNtacWcGRrMKJWUqJQj92BiwZ43uBR799k834kjhUTZz8Go5XY2YsiUbj295cACcdroF1TUGrWdTNybLF1tyAB",
  "key2": "5URxbNoupde5eEN4TReGceaMcyLqcLzpZuynUCwbTSRmhpkmsdkRJGZWwnJfKEN1iuiQp2oPb2VKPwZ6C7KpegBa",
  "key3": "4RXgbHXvL3JXB27qCNaTFSc7DqtVmmkNGugWan2iH89DELbHNXmz3y7mcYk8mRuo7SSVpeySKiDQgGjq3NMfSaGC",
  "key4": "4YvCzCCwHXqqdUTZyMgg5DdzY77ikEdZzCErkB2e34tHB3xYFu7c4tTDVfDeiPF8A4W1ku9rRDS6JUmaWvCp5teM",
  "key5": "2pHxG1YcJCPVrZM43gPVpN1RHgb4FQ22npoBrriUAPpdEhpW8kuEP1p2sDpmDphMYMCGMgTc77xQRX9ZeE5x1Ufp",
  "key6": "BHYfWSYk1mP6YLyuMTAiuFw4HuLs4Tv2hJeCMpabDT7mhrmZqZZGNmTmWjG6TqM6E3LdSGtyUwpysA3P9sZ8aoJ",
  "key7": "5Ve1XYxzjKRS6Wtz79Y2Zn6UJRSNUGFTwmLFbYQysnZmBXdnBJitHomHykQBpq739LbDJyUftfCGPsDnRMJoFLa5",
  "key8": "59CgcxSFdBJXtQwmham3PvXtr5vmKiekTx7mLnEWN3XJVnxKJyCosyvmwpNwZ6kEiZQNsSfZMNpwBSeZrMQzzGcg",
  "key9": "36fw7GJxuWwMuB3PHEVLLA7WQXHgP8WqDME88m6gLEaAgiXiqRtRNtzZDne5q6iy61RVSLn8u3ey8gnBVJcQeJSp",
  "key10": "2NCu3T9VvAAz93oPovpvWUtr4u3FjGCnbSTYy1qjRG9SU2pgyZ1dM2CmNCfFBfqLd2NHccVqjRtfcjxSgoJhRxYi",
  "key11": "2yRiGUJvDyT1XwqqcBKhyZLpNJNrAbwu7UrohVRgxYeFEjvesT7qpxMqBsBKRSmpymaNL1YyL9LAbuo1VCYLPm7w",
  "key12": "3opjnVjTZTipTzMX2Mz1oZ88aWXU8zB8HaDTJY6NjAVdn4MQm64bd1BNiivGKdKhQLzJ1AeMMMvY34HdWKqTzT4B",
  "key13": "2dxhzRkRU82N2tzJAmvkf7XskSev9F5TR6pTNPbu2qLfNez4xGnaLfti8hDq16FCSrcLtWGBCTtThSdGpipwrJ8z",
  "key14": "4WSYgZfDXFYMmDq8BTUCDPnFyUyzDhw5iJKtc5erXwjzFXKarc3N9q3Pw6cpwdUmXYee8mr8KDrKYuZpGhh31aLe",
  "key15": "2Y4Uot3dNEC5eSksxhvB7ghtuvVv9Wcys11NuCV3XwY5d7g8Zw1C7ruysRV8oH9AyXC4DVoYaYahkA9r9tuAtMkW",
  "key16": "48aE6q3E1PzVud8Eh7i4LZcGbZLQA1Y8prakNyQEL2GVXrpwD3i26nh7SnZxqLh7inx8KAW275dZvhycpGjxArpo",
  "key17": "2DAqMJL1ZZARHyu5koFzLzEavi7hU6WeK2dUgRJNAwmSYuTjaX8He1EEF2hxNuy1F42YLd445qokqPP8TKGt4jbu",
  "key18": "27ayfnaUcZgtsBYzcELUwJ1ZpKSqEQtbNZ4xG4iKwqbiPLB8C86v2b4Vg9Q86CkWn45bDDqzZZDLNQx43n7xMB1t",
  "key19": "64BCRM1kWchkTmpZbtpi4Rz5tQuXBAJyRMv1K3HCDQ2ZbUfCmu2yMfsgye5AQajGtg6FrxhJ7EPfRxHRh4bpMDuP",
  "key20": "3YUoc7BZBEUrNaZ5mfxfBjFizpT1sZnTDhsmtMTfimPxyzvf9Wi7gYqWL9kSVAthRc1p7Sc4oRPpvdS16i5dQvHj",
  "key21": "5xv59JrQYhfs8h345ZCatScqzHEbqTjJGXrVbBTtv7JEpR5KvzTtrWNW3WdXB8UjD3b2vFmoY9Pqi8sxuVK6946n",
  "key22": "4n4zHsBZr5a2V3Ew5PZgTmRPNQdU8cU5dZuKHGrHymDgAgxtidRA3tWsWKEDRBJvRr6zwihTV3qoSm3uv2tc9N3s",
  "key23": "eJX3RFTwbvEzwrKjbysicKAoJvzkuCPj7XjFhDizcKX7jnFZYD8zP5G9KcUkuTuPWhcTYNDEjuxx7UzQztKmD5s",
  "key24": "2eQqkETrPa8mQrFPzpyjjRvQpbvpfdbNZtg2QRiquQMsLvFBJSaQNvHjjS4c7ENEKmPQJB3VqFMphqYg91ZKedkN",
  "key25": "2kUJvwgsmqC1W7MPHPGHmVAiz2Ev6J5BKKJZvzzAci24R2Q27jXkXm26JMrtF5TZE6hJrznyFGR9h8zHLzo2jmcD",
  "key26": "5HMgM8JHH3vAG1sc7xcwTg7b49msSzsVTm6Pfm8a1QP7q2RyRfH5iuVYRwTVGHjaDzNoBvVaiJWDKKNW5c5cXi7G",
  "key27": "22vLgt7GNfbaiWZNXxQdNJ251dg71CjcEPatzoAfiyQJwPAaGH42SLhwzGZ92jMPwkLm3oJnfdzq1cHcpLdg1dcL",
  "key28": "3FhYnpE62LYam9zpa2tJJpCvMd6VzLcvpCoA8qg9YUqSxdQKBJdFjGXnoJ1n4BUeuaVVjxuaLoLMnq9wH6x9o49",
  "key29": "56Rz2qxbo4wpfyUePcLpKygXk8CkC2TQ4Eq9vNGSxvigPM7t49njGxts3jNgAjEdoPcarWp3nZ5DD8ohXDvcaify",
  "key30": "66ZjwXFcXgWFaoNwHCXoRRJgW6UZerNtSC8K43uZuB8Ly357TSVxuVjyh5WSSp45PNXJDLi65UhajjdFsPEBxTZ3",
  "key31": "4t5G6GPNpPgtiy1FE6LxdBaTpfGbvuuqYvb8ERCacATdTKVKiXCFs4Cxir4C6tCvUVBPGf2T4pra6bxXTgPAq5tW",
  "key32": "5gheF1nVXaqmmRJUub5AVANLFYQG8GYks1EbiDycoNVcSuNy1MLRqr2g8NtFVAdCHUS7xXpPuuuEtZ8WF7DD4nyP",
  "key33": "n1w5aZUAvh7783xUEgkcbYturWz4gqPNQba4b8z5s1x8wQiq2J1yJX97oLEw1P4uPFyALVTA1AXogrWCCi3E9ni",
  "key34": "2xFvuudwLt81q7wCnDmTNcZpmchmcmouXgL9ec9WenWNThzu8pgJJZJ2UsvD6tS9CaqqkJMid5CafMiWtetLrbTC",
  "key35": "2Uq6MwrL3asEJ2UFFGMqBDYyLbGfN3tuAuVngwviVafSX1ZDa4c8VFbtssSqpbU32w8dXZwZThZvkt8K8skxBVQd",
  "key36": "2yNtS74BM21z674iDCTNHt3XXPeEEm6Ee2vJmpZGBKzJ9gvoQwQCNQvK9WABePbvcTNHnjoGFR74QNTypv9aAq6K",
  "key37": "5em56RMfvqvC9Y1JsrzDJ7YpHzZQTVUgAEiXb2xEQjaqCWshMbmmgcPb817aJFwsCUZcvk2bWMwPapWrou75nSn2",
  "key38": "3TVAcW3Vj9wugHh4yT3mKEgHBztDCvKVmzRNZgaJZ6MS6uSJtK2gJV5y864ncPYwFL6o2xiBDaUMGS3LEzvC6fRt",
  "key39": "3fFspxmtvZNeBdZLTcvYQ9TKDeGrCoLDYodZACrCauG21UrvkHf47oeeWrgcueFi8FLobkZJXFQyCkYrwKj7v8wQ",
  "key40": "5P7Fx8MQtpgdQHbWjje5gQfC2cG4ZtzYR7aK3DYxYXPcvorPGRVbcAeJtxf8w1hqt4YZ8sZFVjrBgUMGbZiGiuT9",
  "key41": "4RGJWdQmHBdFoWTg3i87AL739rUg1zqeQqByETJVwtCa1oC8pUTWqbHMsKV72k98iY7HiD2dX5gDnv4MQXWqqwWb",
  "key42": "4GB33TQBDXxy6UNuBSQjR6Va1LtGV1rz1mhsMREDpqFsyQk1PXUqupzYrrRf7fwgR8HWsSW6NUwfTgpg3eXuAoHC",
  "key43": "3JiSAKpgcxvZVETSfY7sXFKdxYJV2Hn9w6JvupDtSqogYdjS9tM1nkYFhy9vBxoQcU14cyBZb6Pep7skAgKheAuc",
  "key44": "M6APgdabjJy2idWgxRk34X64maGxnHvczptiiGQEyGuoxaoViy7d9zcrQLbZnWFejbYeAiXPA2fWtbNjGMLe5gw",
  "key45": "2ZwC2vZ9krcViHmVAZkXUtDNABGRm5yRPNxXjQxNLiDVoe7rvdr7QiVEgWHerpEA7eKP2vWX8TKmwkFUvp9TXeRE",
  "key46": "C3k2YVjGeBYkMG2BccMyMn58Wf74PLjTN9nQKLH7MSQAQt8CMwMJuJ63gXQrudFCMNwCLnmiFfT6bRw7Lpxpcrd",
  "key47": "5ZJx2gtgem2d9JYWGWRWodhxoPzPLhQFWLzPVBWSTPzzuhjAA2heaCWTPCeneDUWTLz36sv76MaoJRyFJpUnfBpG",
  "key48": "4gNQCRVDisAiz5D8WwyDL9pPQHvy9kMfgw7iqBS7zJW8DjdkPBSiApZShbHG5iwA1w4BEzYFRe5SM8YvjGgdMoDP",
  "key49": "2gpEuXGYVvvkk4GVEipy8SNCSbx4MiGFdG9R2ZqxFcJcFXmQShEqz1m7yoVDsh4Gu1hEtzJa4ivjV1pe2i4iPAcp"
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
