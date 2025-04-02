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
    "vuFm5FB25DGf32waz1tSHevD3wf4Jg1xuxEPW5LtiG2aajajcLozj4iEWgV2KxzdzozVfQBMCXpECuUPTBFbWa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57gAPqnbeP5BbqGPhsFuJuw9YBD3reBEAfGwgMnRmPKFQdp2p6nJj1VPb5Xi7JMr1niYP91bQieAzhBx8PQstBxy",
  "key1": "2k9YTAZM7NTFM5smeBhkBtTrVAFoEveJhKTxs3ksoNwXc92JSNyM7fezPMoJAqbFuC2bBM95wuweCaxLyzwwfM4j",
  "key2": "3NTfJxgrhkjXJy68xD2mWQY6RDHEd5j1VWVZDsHFMRmk47wQAfctvJgkEWYhKidYEYdF5zsdyb3pzjRgsMSjEYcy",
  "key3": "4XFDa9oWrUXN958Z36Zk2FSjjPiRLhjC8YVT5XBocj6r1Qp8mx3PEAisGdYBbVEuT3voobTakEZtn5BRvVb2cAT4",
  "key4": "3gd7grMu4WNwFLESxaNcBT2CiBXxHodBpMByxEy7eac6PJ7QkgmFg9qW1WzcTAEFyqVaHKqo9cim9mmqe5xg4ejp",
  "key5": "4jgnWTuWYJvsAEnjo3TCVqxfavrPgY88FF5bbonCqcz5SJZqcj7BwupQftrZcv2RsL3qsvSCb1vKcyuFp5TF3BFL",
  "key6": "5u4ojjyvTWeS6Ym4JKdFTG5rXY2ec2YWvUdWvTp2MJ2Ckrp9LiVwWxh4XMaEr38DjCFrbZbg2VB2GBFakiouQELo",
  "key7": "3vKnaW5ApnznMoYnCQpZqy9hjHcV5gjZBn45DZmGYjrQKc9kUafC7P9Y5hAbK66p6D166Tqvbt8q1vARg9wt3d6L",
  "key8": "5qbJwuqgW6U4rioLNcvcQhDjUZXRVVkU6WQ7EFHbVMTQDx7FVVNcqPDNatKjiyUf41SpTiXugg1dEbR2oBZdVqaN",
  "key9": "HspCASmSbNY2qeT1iJYcwP4pP3uzKJx7E6BvjpYejGhzJ6De5XrU4tY4RMsaFibzMjRUGT21vDEbiZF4d6ZqDJA",
  "key10": "4dDMPsnQbTMYy1LYz69bdz5gXDHFanFNW811aTCysy9pmwLuprzG7xtSafTG1yGhijHddsBcnDU1Ja4sq97tR3Qb",
  "key11": "3TpZygZM1FVkM45w6LNTtHQq9jCfC8QEHo6EpmVsRBBqDJzZaT3rLiPPz721AHAYNWqxBEHsBz7W5iTJFamvehda",
  "key12": "2zgA3f28eqmJsHPN9at2rbj5twQ47xmHh18sBtcMvopLeH4ur6bNC8QJhsCCpWzZwRdGdMmiAhyJMo6mKTtjNycd",
  "key13": "qT9jRjT7WWR3s5tpwfnnZc8xLYnGVdUfHgmQPPZgDai6ksQbVhbWnEv6uR4S9HiFt7Y2cRx5DeErukijRDuSUFt",
  "key14": "5Cd8N9bPgCrGFvs1dSoW9N8j9SSEdHjsDtzu7xPXLtqhuUVxYNBJbtBhCyMnamwt5fAeGpFEhrMZbeHgssKeumvu",
  "key15": "5KzwBpwL7xUVsRALbEeYbCrBDXkg19XEgH538HqWhkbBAVDsNX8h5afGjZmHHS53smjjow12W7FCc795WJWQ9YDs",
  "key16": "JYm8zJLNcJkWnM8vr9z4fatcQZXzQkR6aVqhuBtbBz3WqkrK7fUwyoUGdEFcbKHhVwECpuywaDYLER3BmMUEs1s",
  "key17": "57yzTfJ92VKQtZKm3PyBMiHbnmnzsGgYL1ugQqUEQcVBiNHsV91jpqagErSFqUhmuDXuBaBcLQFiK8Nrq6FH2Skh",
  "key18": "54Y6dh7eV7FMQ5krNMY35ZTzGu9MgWGDAjZTRDGqTBChshexgvkB3yFzhFR61yuZK7btY9bW2MdeMXSqDaLJFKUj",
  "key19": "2CTyMMREvcHSH2ukUaViJM7usePVDZezYL2DTEA3ViLKXLy3Z633tuPzVVkMrG546eMq3Q2NrUdcKXfgJSe7syT2",
  "key20": "3gH6eghaKM4Y82Ld3EPLpGFcv6y3skBJNABG12iDodhsKtNGq5KGQFYyWvZDDw2mm4JtZhn2c7RVoG3hH4Nava5o",
  "key21": "4JvxAJmipayvBTeoztgnHtPdBbt3Ya5EDemidN37cGmAYxDGoYkeRGb5KDW3qxZYyat6QeVJSVHYxzBMF9Duj9F9",
  "key22": "4QP1stARQ1JyMtieGUjXsJdkvtYUtgfKHyhyfykTZcAdoBYmK2GBkDYP5tMv7MjTakoXJk6Pxb8tz3cWCfdo9xKy",
  "key23": "56hXCqozX12MUboeRPVUDYHkbJmqreQKtDVodAFea3GnTMwTcdz1PaxEMwcp3EvEKbSVhtT82eujr446ghUP7N4g",
  "key24": "42Jb52LQvzuYu2VxPBxdeSiCeDCuhuiMNxfnev5nPpDVsFCDu1gFknKzt7wo34kyha6dz9PpV9v3sqw8yByDdKPt",
  "key25": "3piNq4umWzfGbSYg3NvjPgZoKkLf3aqsUt8iVQ3C2qqSez5No3F11LHQR8fpNtJn7J1ETm3UB8PZnMC7EUVd9zLZ",
  "key26": "3K6AQUUPZbFX7ghUMZg8YbZenhsBaHkbrFYLeW3XS8Sycgu8QbqXkuH35HA3fw3wj7UW3Rb9GomCFifQEpY1qwKU",
  "key27": "YysmyrWDd1rQaoHc9GKQWdXcNWXTEsrbwzpBLfkn5oYyhrz62LrJNN3yAcVWNHu27YRU6P4x65MVAK4Rtu9gy1G",
  "key28": "4Qh8xLivYLchXGuZh6UE5nSfKGSsrNHGpF57RYgfqk6kApYvDaWayE7tbBuYUhYgs83knuKsra74yJXNNp55eE2a",
  "key29": "3qtCp5aLqcqjAD2auHw4w2RjSHi6QfyGcEd7UfLADMsC5gXiKNn9VYBPEYcdUcZxE4K89biQwasroupTq5nkMQmJ",
  "key30": "kFntg3ZGVNeqDoNH98GSoUu65y7dZGGWbdpiPwqP1U195XHP5YCYLKGQVMzAoMN87C6GEgxXTRJia2SKcxzahuX",
  "key31": "3wkfRCwyT3RE5WEquxSDFfaAi5dBNE8nMUZUpXhkzaBdnqdKLCtge3md4GLCcUj9SrByZP5iK9Q9AmEfAxTYeGaM",
  "key32": "3DSW74bh8scqyzWeYo1J7UTFEQAQCDHdkYpihWKqELTKagFNMhdejpwk5UDk49sLtv5ETwzmQMA8FmakmwAWpbB7",
  "key33": "2NtheLjqSuzVxKz8wXTyv6rpVu3eGGKLN8QEn3SFYpd9KpVjyvY7HpHitsusjTTZz7KcD1yBdxTrWSwHtbGAHUra",
  "key34": "4qTEhvDApTfpqcyBCwGH7Pvucu3APchPBd2bKiqKPWmweU8HjyANRHnNFFTzgaA48uspHzGontEE4fytX93iNvaR",
  "key35": "5rxLZ45eJe85m5j1X282zbQjZxwY7Q9v1oB1QQJoYqFqeY6MMvjg6gaBJEpysXTjzT99FjsdmVSTNPbyA1tHakgw",
  "key36": "SLbfaQxCqfw5uvPcicAMWv6z8DCUM2bpDEsNptENcSQffHTUts2tQVfQWaEhCmYVTVp9zZmxaVGBZ2ziiFc4tbR",
  "key37": "631sGEZ5uPbKdc7LYPJsxG7FczquNgM7LyxrenXgFys9BBWWMDWMF4RaXUCMRXrFvGRtumKoD5jwmG3FxS1eqbc2",
  "key38": "8gBMTMs9pRDHHWQM1eZ4jX65T8a2zd5AtggAkAkDGx9mzGMkR3uqFSAGB5dA6pYPFh1W1tPmsic9Nz8DiUPpXfZ",
  "key39": "2ivfBMyWYKkTfmTUKHXtygaRNr9mba1S1yZCJbwV8dN5fCYPFc2wwdr5GPdYSgS7t9FX3PXRAaBLPfW3ANTzTyYD",
  "key40": "yjFTyxVZU3RoT6qrmbnUYgfjQR4iNFCMuk1SVuNh373LKYzo9tYmPPnA9hGp2FuGzQimZy5qY4fpegUrsVxxngb",
  "key41": "AKkcgi6XWZiJhVNVPF2GqemHX6geNJBBe9ZW6mXfDH4Y53HN5m3RzLXb8hQc4wrVqRijFT9FpQjwTCiNV78Z8K1",
  "key42": "2hdWKjG4uVZxbRFEZ2AKbx4pDWfyvETvWhCZU6wegiKuGVzvLLmFYXxrKu8Daddafec41mFptNe6wEVjtXpZcHSi",
  "key43": "27kSpyWqS2gUXYNAVUXtBq9rtkxnv5YtsxvDZSnD9PEypBZFJ53reg9aZpwJCGGWE8FmqNTQz5Yz9rt6CDEbkcuw",
  "key44": "61Cv5iuzHJ2TPjf8DGKfnUtvxZHJ8PMYZ7hC95sH8TPZkuP4pH4esK3Q65VLQLGZ6jnJMPEfNEikYkb6gXbEoszn"
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
