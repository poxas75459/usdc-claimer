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
    "55e4R1RpW4xCAjYSUddyUPkpMk95X3TPGM9DFwsenCTweDSP7Y5Y5AuDgixtEx9jBsx2BmgfdNQo3Jazanh462A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GN8iRTBtikNQDQhfBvDf4bTLnr63QMNBu7AThVJk9mEAJPXxmT7yQoMUCQVyxQePZc7xMxW3t1fZWBnVni3s4Mn",
  "key1": "66uy9wtwkxbAQnZukxyB8AjvCb3oq52ZCkWRMA8cNQeQFCand4QEjvGYKYcZqH2H3RGF92BEuoyBKY44sE6FbhfS",
  "key2": "4UxUDvjp75Rvwo7XwkPLh2oUSZ3bKXQvGydxkQCuMktrxoAwNDKQzRSSH3tJS2ZVvNVpmFT8aR98G2Q5AgftkTmy",
  "key3": "4eW8YQHa1N6JCsJdcTtFMrHwQJ73QNR3pedSccEGLXe6ECTCeGyJDjifQZZSH4ehxAkVJrLFwmFfPWehDXaA5nRr",
  "key4": "2LDWLYhvBj2hFPvSZMY7TagvcBTgeCL6ZgmL7ZKUpFtQJPiD7HeZucQew6pqFLVS23vjqLrcZPVhVqgxf8mJ5Leo",
  "key5": "3jL7oMAZMgbhDzxq4Zwts7bQLjcSKER7BBnq3H76CaPsiWw9XJTxA5FZK6tAcPExoQgW1Y8TSwTvbqBEJqWVsRe9",
  "key6": "61RKe5EYNtbaTCaSNkk6JdTf8HXM86BhrtBjXQsg5Ke5UkADRy1nAvFoJBWRB4Q68xcHLLhideMJ5mMT4GyQ8UFa",
  "key7": "TUXs2geL5yajL8uo1D2Jv3tte9ngV1srgC2tbtzjAgMwywtfoQ7XvjDRkg8VNqHtB9fby8thosz4aXisHBE3uhz",
  "key8": "4c54STpLyxzA8kShUrxNs7cDEwNQKa2pgoRszdBTU88DbEEWh2mjnsv6BBTh968NAVvW7SwLrygQ8sp9HLgQayr5",
  "key9": "34oKUyYVshXkz4kv91L7Q448ttcWWjzSKG1X6VCsHyb1bjh2yXMk2pggZKawsoJC8NBr86DH4nxSywwdddMS1Bw6",
  "key10": "2qUPdAscHiFPGt9bwDDdjx2Eo5B6nQGte2ZxhGMeHN4L1TzSATJpUebugsva8ExoBkh4C8wb86cpE46GRa2yZbLT",
  "key11": "2NZwSLic5sC45FLHMNdUez8RmmgWLW2j8mXAtThawEkctJVYTHyv1h4HqWCy6tFUBzDRUJL1a8qMVRMt96qyuau7",
  "key12": "37WchGekADr5FhKiXwCPmLPhzGFUKhQKiLatgycfWKtnMvDVX173h4tJuLbCAczfC5wkEWDK9LHMUJHajg8fcnPf",
  "key13": "ZCGpgJuHHkjjbtzSXpCFq4FEByFVYhEjkwFZhXjMC9QuQXPgrHdo3De54RbJZE9a6HDf2mujgDKsfQgdY8EGYzs",
  "key14": "5sUefWpt66AV6BvQcW4EJBJaCq3uyBknBkgHgQCuxXSHaT7CKt9Kb6cFr8jsRW395aAYjtE2qu7H4y47UFzueYLs",
  "key15": "54RGGGSRt9XyXEq92mfV1rq7iRnfKbbTrzV7UgGBH1pjvGR8neE2PKuUsT4FgnB3K88z6LurJpzpeXqSb1pTBUJJ",
  "key16": "4jFmr12fbgwidGy6CPtaWaW67ujPTKQkFdUcFLwcxeae7FFMVr13SnBeGC5PmdsoaD64bNJDhWxgqx4coCPEDrw9",
  "key17": "54tqGHggRWfooXBmV5NpVnefJSQf7kmUc3DuxRXAjingHoRCX68yQ1zf7hEfGjXS7rvwXVxRWpzkTxCHhuhyeXM1",
  "key18": "63nqASrvXG4k6yMUAPJniiRmGDX9qsdodDsTb9tXWr4TG9hFVzwUUM818uoRgJXmgB7VJLwxCNSsAgCvXr2LWH17",
  "key19": "qPj53U3u7VwEiSwb46jQkrrV8Cdb1p31cmTPffpoB1PJZLs4skcNmc7fCxGUAokuQWcutqFWCJpEwrjfmSHwVGK",
  "key20": "3GdGU7GrymHEtD3hQRGVoPVNQpadVYRT8166AGFha3w4mwDetbUrMTnPhULoSzG7tcDYEDLkMm3e2wuML6kHD9L5",
  "key21": "2YqLw3H1vL51ZzJ1d1HHs76XMDqmuzYqbgayp8JDJLPUTbMs1vfyeHwiw5TmrJ5oWR6qTmN1hNFQ1C6A17vQk3S5",
  "key22": "38j99oyWEfopwGVx6hSs2fk3xLJMvqSiXSYHjfjmaCTMNuJfo6Vk3RnYPiTdyYus1T67MjxsMJHRccU7Y5JV7RLV",
  "key23": "3mFuPcfQLHTky1h3Qs8KjKtL8apJuVPkhMbf5XfzAgoHvXB5Ro8qKfkqHFcz8oS94iq5Z5UJSX6QCdhhRUWmywU8",
  "key24": "2WMcqPR3xPZv7L37nXZMZ3bwCbVp9MW6QK2XPmYdM5E3mfuZGkpW2Z4ShhvcS8Mrbk7A18gQ9BnDTCemLyrw21pc",
  "key25": "3DrRi7GXLa355536fEGRBbCF9fEviKid4AipdT9ev4CNrb8Hg7qgH1XMzmhartYFCh4AuoWnUPUApndhgLYioQTt",
  "key26": "2We5kgxfJPXkswwznv5eiLnawpUouLuuAxxkLo1NKHNYTrKnuGiVLXtw9HnkNvJpyYFjCWWXP5sJqSQcaG5vCHsz",
  "key27": "2fEa2xt2zHJ2QBURUEZjdjXLPLHhokbdNKbsDtkTYRLWmKRp2WQB88m2JGjv2LCDkmmZgQzyDNnV44HRaA8C8KxD",
  "key28": "5d6ChF5HKP7ZL343ab4GJrkUTc3PM13Wou9QATJnKVdotrzzjXXgpQHfbxkaa2o5P5ipSp3xzW5w5taepiUzTZf9",
  "key29": "3ooKEXgUVbLSWPQCguQX5DY7hXjz44K81zb4fGqKjPKiRdCnqUW9yYuEUqmFGCtHE6qAUMgioxEPW3NyM7QG4Jdy",
  "key30": "2RYDLvZxAQpuR5jwkXkFbFXkGLqVYG3By67txwBzqZSMAEBQmVYWXH9d5DSugfdFaSCph3ioGPA8YSLsBWEhRpki",
  "key31": "2oStKGkUZN1NZJ1xcJ7emR61L221AuckPjKTKrbWaUsHqTTDqtWFcQhqhyReJ6QLTdRzzqt5bg3vzs8M5n24L6Fj",
  "key32": "59J7w5CvFFCjkNJrtGUfZx9pYRPhz2cv3HnhZothBGR2iQdY1MzmVUMMPUzXmiiGkJLjs3LteYFMFi3of7aFN8S1",
  "key33": "njwNmxtzU9wTR5j2XbtzxinKxWbEQBUgDzyzyCjPwBkZM7LUKgGn9NZhv6LRfuHn3916KuvH2Rg9TCsN2zRWC3m",
  "key34": "5YS52B16DRDpPN3oU86PXtxufTYAZEZhgvX28hYSkDcYdWmWQk2cqD4YZ3j6Gzrj2muS8j1xpgsEXkN35eJnkbhP",
  "key35": "5dL8rzEkFqDyyVAHygEBmDofmEvV8VEQnYmCVw1uWNu7rTmnq5V2wWuBrVN1HdKbgUa5EHoTLvLHJ7vDKRgT5ygE",
  "key36": "2dVGthWnyGXBf3THCFUAo91cZMr2Kbbezvz7hReDzM6vguQmFBxjYpZas3QNcbXS9zL3niJzoz41hqSLP7CES7v2",
  "key37": "317XMB1c5iVPVJAnMdQEKcWste2G3sboeuu3mtJC1NbTN9UvBZe9esK881Ej7x5iqMytsuRzoaxaYTjbkPAQBY9w",
  "key38": "NT3inyDR2Eah9eyLUB22iU3mauyxepGVSVLb7zyE1XkJ38fUwYgLiDNA1r8R5Q3Cojcdh14zAuoFRNFQo9BCzM8",
  "key39": "aaWUF513bPfRc8VdDajqsHumXacBPEQzC7ip2Uzsi7SUWTNYiH3mz8RaNSbuzhBdzF72WnnN7e8AaCJhxsaaQKM",
  "key40": "5WqHTDoa8xSMgrLcmRwwFKKfQnNheTh13YnF4edNCcYwP9tRrwjaupyjntU4CSRqv9AJvry5PneifARyeQ7JPJ7L",
  "key41": "3gJKtmZwa4rmgwHb1hpaMSfB5b9oWgjFbpwi64C5V9M8frXiYwKUZwZma8NgZpT6gch2Vpsfm9dgEPEagJEpMyAg",
  "key42": "4khuyB4JC6EaNbs5vZMMNDq9oxwbw2WJk4jHD48HY2KYyaUApEPXj9bX4L3s7HvgzT3TjEgCrM6HEvnKEXXbZrSv",
  "key43": "4iDF41h37f5Ga9aM527sEKjSvdCbQ9WAL2oAu9eSisKdRPEsnoSP49WW9wcoiGC6iDiGnNsAXRzvZs4VzBS8uLuB"
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
