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
    "4T5bPtYAwacZoNQcohDFivxHiWocMKr5t1mXadTxuaPV5uLNshdax61sbnifGb4GWM58dK5qRVKEUTKRAUqkfakv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34twBpWjmvJLasGfvtXLV9iQ53oMUJ1bvB3NE5ikxbmnqQNXTZXbC2PUSV24y64guvLpss4ybV6q5LFAuroFsY7P",
  "key1": "4oLbyV5WCHmJZzDYkUfyeZbRFCzuotxoWDWbTicucJsFEnwtVFycVsKke2nobWNJb1WzYX4um2xoY2W75rA8su45",
  "key2": "AKw1Ef3wRGYbFojvm4m68JMWQM6bCZTLTom4b2DF6wGib2YmGFDjAfX3XybyCadMoireBJykWwBbyqujZYtkGZ4",
  "key3": "4hoEQtJR7AhiSuxLR1QioEsR3A1gHDVdPCx7mEiaoPYpWwUra874RjQCuq9K48jJPnh2govg8eXV48o7r7M6CSo1",
  "key4": "2zoXXgqLcbVDbLvCKtT2pg8aLjJCuB6bwzTgNCRPL67M3PKGqwHJ77RT7jomJFPnwfqbv7LTpghkHUd55oueH37E",
  "key5": "234zgbR347i84kiTVeW1v24HpNJPUtHBEmRCzPSNJbGX472ufAA3Z3enPJbyafoCUgwgyHMVSX3P4PzM5Aebt7K1",
  "key6": "2Aw5XWcbaM8Ue5CfBoxhcxMNcWbB6ZAcG9CBnrsjWcFse33jtV9FdBNcUfJ41nnvA5uVeXiapeHTEUaqvuwFaFPm",
  "key7": "4MWm96SMyjPH7xSJF4ZSSxW2mXnHubqAjhMBRrSxgHm1hMRSthzCJych6ZsezmoCTrHArtMEYavkPzopMUZhTH8z",
  "key8": "4AxBxoJqinqNbGQSMYFULfVKQuJnZnj7AwhecxPDXKm3AeKCsRKn3ffkc1XS6VjR6mGjSsYNyDzxMEg3GR5ERSjU",
  "key9": "JCtGxo9MvjvcfheWiWP2kJWxXygVrK9qc1xF5ibnUsXJmbzHq2fcDCRoLzL1MqdgqANFWMxzM5sNF9MTqn8XvZL",
  "key10": "3xtAFZzEEv1VZ2skK3cEDiMXL6dvHhNkbyF4KHswVD4ZapgzK5r51BWA1MZRCaaLRcGdCBR1oouW36QUJjzVpoYv",
  "key11": "2vmgVUs2WmBSE4ZmSMmhkv4EusvS9WvSq1JVQxnM5jnHknogQAAGCNw3mQtLMoS84ctH7q12oKX8jYyyvx43yvAo",
  "key12": "25ZyMCgm7hq7K2D73k2sveTUjRy3QYMHQ3oYgTtFUVV68vwBNLUeZ8tqhFYwcV3FrHRmkopPwZgxcs6GaUH2m7BL",
  "key13": "2fsiKgsD6cqbA9cD5KEb5V443tyEPpEqWHcHv3vhZBHfhgY6PiHWrZhjGVCigug1w6c6czEvWGVW4WZhX5h3gkW",
  "key14": "66qC1CeB6tMHQHxQ4j8z56nEz25E5fQZQ4Ma2qk4zMtUmNZCot1aHUg55BHVfCbMMMTcGfeAMfAQ6ou1TpzFuss6",
  "key15": "5dLN1ourAx4cCL4AcfjgG3sgXA1PaNN36brx3ZDe5b5aEbobAtz6r2piwWL7LzA96VoVHaF8gr4kweMjAT64KUx",
  "key16": "5NAaqpXVNvLEcPjh1nLVFxuAzCSc9rW29GLYRY7bJigMoZfGyScTwyBMqPoX9DF4XcXjtEkEAXFTAsxWjMms3jXV",
  "key17": "38kgE1K3fsJL95MnvAEh7W57fJkmeUfnEk7w3RVW4nxZTTf1rX4GtDMMbrF1LrRsKxCkWnEu9ePPUVVB4DASxFMT",
  "key18": "62CSxmhqx492k3Qtv4bWE1N67LWe3HNU4jP6ZUmte6WdjtvXwnAKTgQeterZjEFaTjsyJKMeSVjJ8wurpK3U3icb",
  "key19": "2ganPP4HgVZ3xXHTVj9z5aL2NMibMqw36nmbS4nC9sqbJ2H2haWsdrQhMCaMLApxmRYU8mc33kmoj15KnTZU4EU4",
  "key20": "4uTS4v85BgujEKES8rS86NXcc9Zyu376JRWRQf4JwuYjzVaxUiJ9Qo6RAohnxq1unBT4zR23MLxwQSv421LL5FTS",
  "key21": "3x6rRcNwRNg4KhHxxzZgunvn3PontZRMN4tsLxEv9Hup5tnCkNES42bHVjN5vymXuPGFngLWVzPj5ShsXmMBS7Xj",
  "key22": "2SDGtzDUv93eGmPh8RSB8AKe8LyaLQjkhA8GB78557LjptMjMNJrf3bEvjdKJTfALS7q48C6aqXgUZ2A8VgCGwkk",
  "key23": "3nt8GhHyDfV2F9247sVmigm2tzTLtsRHiLeVU5FcyWnBJ8BzfAo2GqqNfEBF4StB7Y3KvLrRfLuoGe3NxeRNXnAk",
  "key24": "5YU8TsozezVDmuv5pJffR7qL9GZDor7PwsJ5rNLk2cq9SjDhFMtiw4BAq69jfSjkkXBLMf5sGkAGTSZCBgw4XpJg",
  "key25": "jfn3n55GvmiGG43vqvECvTh43KnP7cBDdGPhrWMp6wsCq3rCiS53rKAbn7AuG6rshGzMemHXWRUTehVn6ArQG1C",
  "key26": "3sxGDogX6R77NVJYZ414pjYm44tu9W3XgCba9zGBoiuWbRu6U7B7k1mFQAfLCS9STVBYxgGaDQpNfUt4AggTzLHG",
  "key27": "5XPmHDLKZLL9yhFRJXN3LzsPnuK6cdy5gzXPY3QzQBj7kTBWAWhpFBPjxoS7uKvyD8BoTDUW5jSva24isXPJKgRp",
  "key28": "2byEyRTjpxZC29hsNn7qnvajFsnsrvZNNShQyBo1YxBbtK2nWePJhrNDhbAbLFsUAoQDTXkKRZdUNaEJPetTnrmy",
  "key29": "5KytRSoEufHKuCRpK9HBgXtfpUjuECB28JE7qFCxfTVfFFLAA5yuWapxnEd2tq4iSskaMrgBorbVkj2JgSr2QQEk",
  "key30": "2QxzwDZ1pNr4Ytgx1htHwtSv4z6Tdmhk34ftLMKmdyrQDUkxbNMNcyGfPiW5JesBogg4YCYzrpoTi6VZpX7qJX4k",
  "key31": "d6oqa2he9bvodtVBAVEHYYkWXvmqZopKxbtwzVg8m5zJqaDKrYZhvpQp7MWLpn8dDeNXqDjbvxfXpyUAewXnGXW",
  "key32": "5Miw3YvF7i5fFxAZZFpWnFDLGvGsrtj6kk3UoRpudRqMzHYZjyHKzoRfbQg7zsTo91k7oonRmWW3HZVFqwi2X466",
  "key33": "4Bpad4Hx3anKi8ukiHv8q3mrWJ6XjF7M5xG2PocMuvtyXcDu7frshoTwhiqULQymUR4PrhXrFMRFwNtjXBeetF9",
  "key34": "3rg8DvHDrJY6AZxBt4Tm3g5r3EgejMcyK2fNjKbKmFLXPbNgVco1Ticj1HRPBQccspXb3tcYPPChrVTvNMMyEB2u",
  "key35": "erv3WKz66Rrxrj9yj5BJT8DmDHm7rC8vchgKJucBErjpyk9JJdk4oqqx4Co7kpGGsWNvTheTB7AoRLB4NE3aqB2",
  "key36": "WYFGAQf1DZ7q8euSgUfGQKwLJmwjqTzxChFy9UmHh9uxhietZKwMmuVJpiNXzf85HXDQfVgVYwPF8E75MeJenp9",
  "key37": "432Rqq1QXb7qyrokj8Yk68MmxVBHZzPGHxKbp4mKpvkhRji34x13RU4JPAjtAUBDMgzsXYWdbMWUviGzDN2kUhhe",
  "key38": "4JaHtGb6m3siGy4i6i7KMFhRt7X2vz2Z1qJ22WNmUYiZbwxxh83s9hYiCYRpfy1Dd3zrU88GLZKGNTPTTu6ogsWp",
  "key39": "MdUWr6Q8rAVuwHkmLqJTPbHdEyFHsxZuVhwmBfY5qPURYPyJ2pGo3oadfcVDU4FEibojCguPrKqnqtwHsfosamq",
  "key40": "3Z3p93Rtfc9fLMKDQW4DYm8MaDeTbaHKtDnXazKMw5FoiKKEGQaR2uQLeECJuGQvEYDSzd3NqiAkLxspBX3rTpNH",
  "key41": "4ahgjP2nrYJVYo6EZRnrywjGJrriz9V7GJoh51xb6QPRHwFeR4nJQP96wvWi4mxDqUeTVqaNhE3tJiCCQYFdzHXr",
  "key42": "5pSW9MwHbuGX9JaLQtKWLFKrt6jMkfRq9bxnwzXVpHQzTUUraEEYBdPE11RkeCMQcTHBaKqfoEYtHbCzTLF4Rg1U",
  "key43": "2DY2BMePVBXYVTsEGog3hZeAdy2EYPdb4ruXDfC9wmQKjqDsz2k2Lv5RxrS1NFLAfFwdp536HXHjKU1Vxm6qXFm7",
  "key44": "41m8NHD1Y2cd69FHThMxkJiSqPg8Jjagd4LaJvdN1uhrLNPyppJfi9wV7dvXFN3TtoHknvv5ntLvGcobRVtfKba4",
  "key45": "HR6rjVqwJ6V4BgyPdK9ZW7QMd1Rx3jJbG7UrFKJTxyEUkn8zHsz7tG6cztUwD3ozHCy2v9JZEMXB3cfn9C7dkRE",
  "key46": "3CVqGwQpvhhfdyEqakR7xxGG7KDmC1cwHBT5J2LzyMu3UNUBX7DZyXLhixBbEVdGDWHSCckLyev1gP7cjWwP35kj",
  "key47": "3s2uzfH3ZHBWPX99jQwnBj3RxeY7vQnVf9zNPVRdhExM8mMghsDZwLQ1S4eUoNKocjghz2L8B7BoHdzNmjy1vkrh"
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
