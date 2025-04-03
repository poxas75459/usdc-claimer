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
    "3zB4EJJa3W9VwVie9Z2ALW2SGdLxKreEqTo5rLRB4Wcq9bq3uEi1qDFxeDKHwoTSQg5M6pQ7qC6aJi49SJFDtvb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uB5R1dcKmvanLJoa47kquhZvU928kA6TWHuSiFFeYvefd1jT1oLW4iyxpxPkPgzpi8KKsNyVNBDGYTqMpadeZqm",
  "key1": "KJw416Nzyuwh7TWGgznLqjSEvvk9UKEg2hz3qTc35Y1kBebJ2ght32yF3DYGjMjottganLqpq4QbTi4KBbeCkCg",
  "key2": "2armfMEBK6UkZjoabsZhoFaCKAcRpyKX6PNCspJkKidc7vqJqqDd2gBJx8inH8fLoDwGQGMPA5mc4K2PFrNBofi3",
  "key3": "3LeKhMujB7qyXgE5w25J1HxV5tJdSdqMnG535VgSk2HKXi3Y53cLyWTc4f85DPW4RY7oee5h21SAfBBZUB3ZKXR1",
  "key4": "Av5FVH4YVS56NUoanv4XcLf9BpG5h24RUbAZsQTAD6kFcwkeFK7R7FwuU3P9QpQ2gUBJtcamyxAUG7Dt175wzpN",
  "key5": "mxN2f8NWQp8cKtuuKXnigzyBighrcwRiTKpRJhbnoM3jdYZzV8mzkhX2ip41YLgF88LAdp7AYtHAqt5fpTXcr42",
  "key6": "2ynVqNs2Wk8zZRKURPgZcQheJwB7gLoR6Y6yDjTZKNALYFF8wnr7NnfojFQ5skVQSbzvWCVqxM9D5wXLaoTJNKMV",
  "key7": "2rAMaMNZoVYFimeme2hUMch7PNQtaR3uGuXFxz65fbA3zsRxmW1JGYPUaD1wbzgFmt2b22FKcENdCM3qcymCs9aF",
  "key8": "3UibWc9Q7UXcMEvTxHtZ1MTRRSBsVQNxheB6xtbFz7seUH4VTryu5EyPCkv4EHM74k2jMLF8V5w2bvEtMAg38rW8",
  "key9": "4jCSHhviscHSZLSX4rWDVzBSKtN1bmPVsq93oHcWggUpm4mEAioMvErCCv9cCL5ntUCCt1KKcAw4w8HgREE99ne6",
  "key10": "5Q7oNrppAtasuCVmynJaakJTLwsZn1P9vjnppWj5CAf6TjFvB2wZzJpCM2TqPrVnrtKeRnHnjAHQtjcFHwC9sy5L",
  "key11": "5z4RKoonrgRBWttqdB82nMXpZzJREkA9eW6R3hQpRJAY9YTiVcjNTwqZ1P9LdC4mQqyJwtfra68dZjfEY8NuPksD",
  "key12": "5Vu56Kbn5hPURUyVkNiNmSF4FYqF4rvtSWNHCyrK1fbkRhruHb54hLgi4DH2t2naUwseG9Av9MZt1Cw6tCLJNZ4P",
  "key13": "5aqpWnvoA32Tnw5yCx6MFoeA1JRFaF71s7z56PBFS3dLyYM12KwzocgX7ZTRWGhTXpAqR8b97K36EUxtihuf9sEV",
  "key14": "3YE6mEDTMAehKYGhX7bqtsGTjVoCZveyZXWYJb8xBA1wdyeWx7CsfRQu9DC7jTsRgkGDBHXT1zbyyPYSRMTuVpKs",
  "key15": "3YNDe11mtjRaCc4uYZDq1xhp3AzcnARSuaFnbcEpt1XWqy1cz6ivXepCGTtLxgEbesSQFJ8KgZUGv5Umihjkp8PC",
  "key16": "2uq9ADfJJXoT2acbmq3N5b64jni7DL63vsia45HEECfAm5B2acMw5y9Dr9LKt9j2NpjEUaU4DX1XStfC6b4QX9Pd",
  "key17": "54mDh9ZTY1siMXc2Dgk98nYhuDawQhPX4Hfn2KziTEqjhwcTCgj3RcGC5MXu6iABt9PV7gceDbsqu8o2z3ph6U71",
  "key18": "4YafbrRWeu2dS5zZVxZjNQ74FRbMJn5zr2gMuqFqtobjPHCNHcDynfon95HW7DHFeWB4gJqX3c6VFSncw7R5Sq2f",
  "key19": "3rhSB7wg93CcpWtb7SFp3wxM6pUnZGVejNvj4m7YcpsVn8NmBhmjsUpyHve1QAsuNPoV7FbLUhe3iupGEe6rv2Zx",
  "key20": "2xYQjzSwWmsE8pXrNsQrUqj1BqUyjJDpUzBAeWHix6hLQGD91M6V45EPhfxuLRcHYXcUmrzFhj5vSLRW9VBQns2x",
  "key21": "2LqUS85vaKmbCGgsQ9hV6AQADF6XnxTtnSxpMZiixujcGb75UqbDrJu5niJu72vZr8ZhRWeJT75Mt1UsoFoXYdPH",
  "key22": "3BQsAssF94JbfcgvRiYSJFuauEaNTR35NVqPQZFnzKU679P7isKJa62xaxZhvghSATKmuixeJGDemLC7Ps8VPj7s",
  "key23": "3fWyvWr1SFXhoWonRgT6Bgu3JDLnYMfqnyLtmT9ci5nX48CuZyYy6uyvzmvgTstL3QxXGkwcQmgHbM2LG8imfZSV",
  "key24": "53ugreUCTnb1rqYkc9YwVaYLmD9vkfwBRqMQQZJiDaMUuyKx5Az552KDvrkr8QPNkiaHU1TSxL92dVLBC2rgLJ4o",
  "key25": "54or1tBLf3jD1BVX7ZhPMm4Bnksa2b4jG7JFSoai8YLoUjoedsmthd2rhKaxNS5ZRabDSmcyRiBf5xRdF9qJAmyZ",
  "key26": "5pYkmAYk61TwQoAKD9NDTN4tQK7PBBx3p47NtbN1df5fMJkgnmvUJhEJ1wRv39tMxqjYTESjQgm1PqmPfpu2jrqr",
  "key27": "54nYto2ET8peL1JnVxzKin2cakoVuNWTa1RB3DcWL8fVHYyYmqu9oQobUwWJqujL1xHgTFsoZozvKqKKc7fYhy99",
  "key28": "7AugCSj3BGFnhcmdi78ghpZnwYh3Q1vTqTB9F8pittQpG6WYALJD7YJpHd9jUNgt9Ww921rDE2wiLKd1tKZsN3g",
  "key29": "3Ed85ZwwQq7Qa6Q3b4t1D27LwmGUWFzkEiNxuutaE1LaCqFVW3zjRwWdgGCM4q1na8YEeA9XLrur9CHvpi95Er9z",
  "key30": "5WJGwtXbbHJNycJvjBfERR5waLdcjzPSgBZKKo2dPzDEdrHgDGicVeSzsgTiEWndAZxFik2D5hb859hck7kJPMQW",
  "key31": "61teA3dUxgbiKcW92tY2c4XpGUpuciMJgg87FnjCYHKHKZT3HxPnp5eFm6PTohBRi8ew11tWRq236UNPMkgiJS6S",
  "key32": "T9AhoNm11LG2pE5jYGEfmSbnU1e1yy68PV8nFd1G9HgaYvmGo2kXRMrpjdGvHvRQJdapg3c3zEnQfLZboTFXqQN",
  "key33": "229BAdAdihM7wFvogLWUsLprm3y4QthN48Lr7Pzb4kkrThKTiyeEJninfANMgJUjDg35LZmXvZoP9tcyt7Y7nPPJ",
  "key34": "5m3VZyaV2W6wAW3tgMznDvADRCcLssQjSSNe3ZTsHyUiYrfSHX4nLjPpqKTQnJqJHADrRP1Ktdt6NFHiNVnzkNQ3",
  "key35": "WVAuGmYe7Z3ghVPCZgQu645KsYLjg3vzaRaaKgPsgCEE22UQgvakkYAGywMTbgSsM4dM3KBsRhz1DLtYJ6fQYyi",
  "key36": "4CGMSypvNzaaMA2QwxFQCtRKQFyt7Lzq1dSPfKCeZf7nbr5WryKU5Sg6xyiT7hB8nxhCJkm9XMRCawveMVZr5Swk",
  "key37": "5XdkZWRs9DkLZu4ErMp9fCi5gwhcE6d7i5Z61p1VruVS3sTtQugwVQSGZHSs3tseF8jFoQqHXbYEnbQZ5L3g3X69",
  "key38": "5sH7LaRx7sgrSRW9m9qu1fvwzX8y9Bbyh3Sp19q8sGF1thXhbjQR2KZ7bPZq3RBmv56BrJtgkGPDJEJTMWsDJ5XN",
  "key39": "5Apft2ZaneiriZHPoYtrLGTvP1QJnv7XcTb5jBT8LRTqLH7gj8VA9NXjbUxxAvZ2bLkNNWxmniu8o4sBSM76HGJT",
  "key40": "2ZWSCeVEC8XACAW8C5xrxAR6wrqaeMhyM1Hobz71ajA8TMAWeHQdsHDpc338EpXqm4TsaW9zboiiWmEFGFSmRctY",
  "key41": "2AyZVtdGcz3hc8Jj8HFTfAb47RHjsmC67w3HxzACDPXL1pBM1k4EhDTCcpSz8P9BQS7xJYfdXnbuGsEyS1WMFa1w",
  "key42": "4ZgKvwXW6jXGHWw6pr3oJt7af1x3CZpbmPWMAkLasyFbAq9pDg6xy35i1tSQ36jhJZmPi3iYxArhxVLmY9jQZNw3",
  "key43": "vGsBH5fk4B4LMRsYen1J2CHMw9m8rQ3kj86HJefX9vjzzr1Axf1TgjvrsWzneGZ5v65XtgqLXj6mdmBpndqZqQn",
  "key44": "52eicDWzMWCPzgnjsjVFLBxpaFNpYf9FwW5qfsnTtsMMK2eGfscGmvAtxt5LbrnyGBeYJEapQuqSWH3T52tB11PC",
  "key45": "47heTg5vKgkuNVtkKWyEqTZMV8zDo8Mcr9nqGCV7FCiyyoxdJrW5KB9s1BhgTKbnfN3ji1pkG4u1jP2Pozgb6ZkM",
  "key46": "amMepvZ9fvkjoW6JRhMGXEF4PTMV1GBMrzMLL3UzCMJxGiRb5zbJjUBh9mQu76bD2SMDoeiTpEQqRZZK2ZLTvPD",
  "key47": "u8agK1t1Gq8q9XatwTZ5JUo6VAyAa95JppVkTAefEQ9b4kfpvHxm3arZvW4Bc2gQYN9W4QYS6UpTwLQtvxMKYvw",
  "key48": "5mEViE2HuZUxgJnkQYxcRrHmgJbnFerSsa3ZUTnRgKWkni4aHVscJ8mo4oDfYcdmHGpn7JJpXcRF6vwMkPZepe6u"
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
