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
    "3VsVFiXtp9Mq1HrDZ2TFhaHZ2EdCJGN9tMkTUGkby2kRkXfCy27hx37kmnjnog2GP7GPDHQYG9TGeF8LKRYRGM1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkDYRaC4na4erJwrKc52pyNB2e9sd1v5b99NxxuKUmF2aCrueN2BZ9iaE2MsdGNLmisM9FCqXiAEF3nUy5pGsY1",
  "key1": "6jDgbP8vxDJJJGvGWq2uT3ntx15hLEq5BhrQy3ZZuuV9D8V3eqGL22wmS4opChjAub35vyoojyVkBXLJ6MVayBz",
  "key2": "66w8qhUSDjdHGYzH9UcC4PKLW2ycqrWDBfX3WPjfY5WvWxkC61xGMtStBuj441PSZAdPTw2AK5jutE6wT7PR8B3m",
  "key3": "3RmoUHdK47uZGGrmJm4jL2L15H52ESxfp9F1LsPS31MPkGoHbeca5zSQZ441KRDppgiRyKPYAMGrUJR6eqkojCgQ",
  "key4": "3AhEV53aWcStvCfzKQJPKD7JcgFfkaF4F48PPJKQfdnJc3yyzX2aQzQcQuZAxRqaZpDfCyjJzVpDT2kfqgyR9141",
  "key5": "4crXrFJao9FHTkAzgDHHMvZbrszDfiYGyYcAEDfX8aswFtKBZzSvk7btJ33kqGd2s3jGdg2A5ec2JL21aDd4xX2i",
  "key6": "f6VrQWAJHR1TsQ5sZs5zzu89YZwBNMXpgxLiRmq9rdShnFMCi5spWKPYn4DeJU5dB2yzqBhpbDZNiX3stxojoez",
  "key7": "ecUYmawQsHXh4iBUDU6UdMtTRJyWEsH7xCrdizgz3G8Rz76NaGWQ79YAESKSeMHesUpBLUScuBw1KcqykqjpER5",
  "key8": "4buzwij5o4xY3jzgAThFeAptTexAqZ92d52FmMYPVve8FrZMkoA32S6tvW9HZ9KSY779S2Kg1uaY8G9Ux4gsGUFv",
  "key9": "4DmSkk9jUbrwhedAMSG9kePsdpLvTd15KVwckWGCxqN8zNMCsqgmTw6x5b3rGqC6QRCxCan3s1wBSZbutnzbFd4Y",
  "key10": "4jv8LoHrtecYpTWipWJeMPAuvRLc5A7duKTSjBMNKjYXW993DF7xzkrWnco5Jv6WzG367bodZ6BuJgrJ4h4Z49zp",
  "key11": "4NenR9taiRQwKtJW2zeP6C69tEADKLXGx9yquEhhWKGhYay5cDfwiyzkDE4LH7xaBz2hfTVVmvdVQuqWWKc89Yxb",
  "key12": "2kjWb3Zi1ibQYhoNTscwPWxAkxHVE67qQgfcxCtJKukKckuwHxxXdU8Br5CgsqZrfZe79kitGfi4nqfP9Y4tYFbH",
  "key13": "24UhVnwfriyYbNPx3DXbBnRpDYxDadp81ttgxQoWwjompdw4s4zRCZva6wmg5Rapy4i5HeedDpJQwxuo42ymPVFM",
  "key14": "4xqnPccLuhq3R239d2m7EHT2RVPfvAPptSeUHdkTsXz6TghHGvcWnxXVCcB4W3Dn7KXjjFm6wPLyBRBZFSUeCoqC",
  "key15": "35ACSP51FNxM512tzHQ4nvZ4KCy61CP8i1mwaC194VB5W6Vexo1yGHr2AtkhhEWXBN4zJF9LwgfNgYXjWQ7sde3K",
  "key16": "MLxBeuV99TZpfsZmzQnmojyNazAj3mgSD69CCKPXgZmR4fxRcDLnDBCa7icpvsaJwDGEmaeJbQwSegkLHrLs3Ao",
  "key17": "4MoE99cLCFvoUERH6oCUpZTYxCzGeif69L4tnPJwd6NAnuNYSMCkjMZbW9bmVi5foXnofw6Tyf8f7nSMSCs8CQ9h",
  "key18": "3HUdyAFAeB9Gh6JXqKHnsZWGhmGkGPLEZVYfF2SzwXwMnxhWzp2qyfhBMp2r6fNsed8WVXexX7cSjUpjwHN6MYfq",
  "key19": "4yuGGFqDdexNuNTRM9Wr5fLHc7qyvCveQMmMZgJEV3twJFDDK4K8xHr6GpCKKxLPzujE3njqATmjtSCcfwdWF47c",
  "key20": "2aZvWV4zKjWA9MJF3WWVFHAJ6mZMCshusNw5GjGET1iGdcUFeLVE3mkkkC8CJuGdx896j7JY1fKVjCUN1HLJhz1J",
  "key21": "5AC9EGpjjnbZAicxQkdUQXSEDZfWTi1bBmWeTFF4btydYUq3iC46n9xzvDGgH5wNL9jSYr6VgzZcwDVLWYSJU3XW",
  "key22": "4PSJk9UgvFtuheDgiQj9ikUmmuwSXefZiwUBBBG9D7LGTWyKwMeP69ttWE4LZxQ394pfGAo5JtHUQWWJkPimCikh",
  "key23": "5QvZLVnoeUvuPHCWwLkxjtywc63GEHkkyTWQFwxPri2tcVdoyMtdqBjvEHzhX3NfBm5AgfgxJdyv7EEi6Lkb3Wj",
  "key24": "4QYQd3wZg8HXUTsjV2QEhJSJb4qRco9ZddAeHXagX4VEoj7TmZDjbfXJQ3UBDG4hSTYEJfpNLREN2RPDGTrbmmQR",
  "key25": "2qoc45ymZFAjxPTVaLuaSKQggA7mDuBWaT9TgkvmnF2nazkaHzurYioTR1ohHycuapXTzdn2kdHdZkbKdX54pETi",
  "key26": "4yMPXKeKwtTqYt1EnhJzBtqemnxSyrXoEacvbc66gHVWucWCWbKDGtjZfJBnYd43YA35PcMJzKNbnPczSmNu7aLe",
  "key27": "3V46tJUGWmodvLBDt9QAowf1QbV6a54jNApoaW44hBBxdEKpnHG56Gm39UkbfchMEe6nP5fAxGVjxYtuMVeBXE8o",
  "key28": "3Dgn9P12cdtCNmBQPqUfR1X3Py3iwoTJ9j647twMALpEPt7hEKKLvA96AWubJ7U6tkTuXx2PmKuxE75YKXwAu3TB",
  "key29": "5oNd1kPFN8ABNM5j9sw11L5afJwLhLGTQfAUeU9zSkWyYyV6gc3PQoisbMmebXfrGnk4ocxBGKhwFRneQRv7Zj1U",
  "key30": "2L9jDZKHYohbCynRrkVgpfZqmsCJZdckgyXK3ctdFZtnGkPjhJqGejYB7MtZsgzYHfVJUmKTjiitiHR6KAkQpCmv",
  "key31": "4cq3jXgtkCXQY6kwgvHtwPrH9RMfLxrBsTHhQiXm81aQZ1RX8hSwNNzvAen9BidCKA17dJTzkJnpda4jWMWcyTve",
  "key32": "XhRQBKRHBX6tdHrQnkfingGT8sZ9kaeMo2q1nit4TRpie5EU1JiXpL1icL8Sas8qB55NSTWeHq7tAPzfzmDj97x",
  "key33": "2cEqUuCtGbp2iFsGXPAwH4et6tgPdqhE1AYmB3xRUrEVRKPXmAGJkShcbyUV5Nir8NmaWoWBYu4rTGErVJk8yBQx",
  "key34": "4LUKBzYNLaB9W8eQKX2Sr5TniHR5p4abcEADNuoPYw1BQvNF9xHsB8xAjRNZYzCmpvrTN1AYuoZUbRSNVxRgDSJh",
  "key35": "65BiQaDjFvjQQhxxxAu8BjE4cFVUjYDRx62TvxuEZ2HGmksaPsARFJGiKEchXMMMe7EP62HUP3ocgLdryKpSAhSR",
  "key36": "395wvuyMkNS2LbpJbfPUYNqqwUDf18cyWsPLDfHWobSvSULj2wNV8ZCHW1NpfJCfcbUMuheheFCHa1A8HpWCWExn",
  "key37": "2NaCFXg6hpbQZqt8oap8SabvJAc7q496xLsHjRYYa25cZE68rULucXPsmfJCxiD2q3ZsxfBHgyDejUSo6pn5sm7h",
  "key38": "2ZU4kg227NHMeCzMfxDxGJgKiEmtr6whdWZPzG56xbpF25z8ssof5LbZcEWfxs9zsqYECrntX5kDDtytokKaQSqG",
  "key39": "5C3wugBXjPjcemvc5NqT8DKS8gxUzExkaohbfAwJtsf2vELzPQZiPLkHpfHxU419wKTfdZH3Jp8x4WNJCiKCrU7o",
  "key40": "4V31o1yLDAaS4KbLPyRkzefbZRhwrDMreEbGHcyUatN2tmwbRt7dhPVNL61BSuQV5tZnVZL9hScSneSzpRi2XeMW"
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
