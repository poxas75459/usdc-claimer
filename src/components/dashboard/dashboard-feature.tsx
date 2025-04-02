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
    "5s19RmaPExzxEc3XzFkj8b5tjSPJ54PGSQMZTzKFJQeVgvQkvrqFBagEhaLaWbBuC2FuASc5nPtUeDT2CLug2D28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mmG9t4FFkZhqaQm7dKosBdLUEcFwMkUjZzfWLK32TaETVdEuDBk2EbcNxh8Ymo9B5QUPogPrQm2acULv1r43MJH",
  "key1": "5setRcVXzPC4H3D8ibwtK65VVBaMNuxzDBCVDZ6XXMixu5peXeMuhECi9MM487o1WcVhT6LRzSrMAoYkHJWcCHfK",
  "key2": "3DABiH3a5LKypcoiuqeewbRvgGXqAUAFccXugvcdvbum8gzGQyptvwfkT3DSiZTdLL2kep2E69eGmLeh9FPB4Lws",
  "key3": "5fcu47fNsEGs6rMVinj2eF3N1eTeBrCBmWEqJJbnLbRGHNy3M4a6NXJjsDv6f3UiT2VfbB6BZ1bcUXxcWxWeika1",
  "key4": "3bGaUXjciF2c2R2BgvREXyiT5Dr1uVKbSNKocTZyRpHdsii4nwe8Kj2qbnuCvmLtDJyHsEZcxAWquANnLj971q2n",
  "key5": "29DRpEZ4a4LSRQCa4RKFounSBJv8LvNM7HuG5oDtzDeTu1ibxa8sqRemQDZ1uNY1tAAZ3rRLy4mxzg9TGJ99q4A9",
  "key6": "2dxzvmzH1t1jssus4E931XWrYJbfvQs4GrKYzZLMwMY5Mky9dg1zyVUAvaY75nzzvp8pTV7Cfk8var2byWJ8KrwB",
  "key7": "5yRzureAN4ACPAGzPSd5zvSaLyNW3Vh2Me1LyK8zJre2xvdyfwaAFpFPn2RgXjY9GkanYGQh6tUtyaQsrbhH9rsq",
  "key8": "2UA6T4iEPMrHigYyfnnreYgZCjo3ksDeXcTZyjc9bNrr85wHo12N5hKbzDQHD9K9S3WKzHYkCYkA46svU9Df8WHf",
  "key9": "2aq4F8TxQqMcCfZiuiEKYvQicuDBEaDYU3hLEuPmdwyNPUzXG2L9wCja8wcxJk9UU89pdtNfLDLwipQrSmV32SvN",
  "key10": "58PWskETsbjmjFvnfpJ7PaHdDTxtZqm9F7yqbtL1ee5w6gDTTJaz2Q3Xy7d8PudsXeCxVP9JppTt2tfnKRGL9JXQ",
  "key11": "5h4pD53cYKCVuYHoRhLCRMF6vST34xzn8Rd4dsJqPzTecPvA3o1SVww41ezhgvbyChBB1rKyb99qQiN3f26B7d7R",
  "key12": "X5RHEQ9qj4NgKV23QH2ZwCU3St3b26WeCuAjAtZNyrER1ehReHzj3ZUGg3BMAHB8Chc4mCaD1dQLYJm9FBjRQAi",
  "key13": "htU6sb6obxkhspDrwPb6idX8HsjkEvy7JkcR8Fay93vgBZkUCWqf5mgn5wJt7CRr1r9rjENWgFT3VGSxS4bGhmH",
  "key14": "5MYz9coyxNjVjkJCQJKCvwyDghQcJSwQYN8cUzNz7yyj4oCbdXAEE8R8E7Bq4M4hPsT5Fcz3ks79kwQXd97bkcXa",
  "key15": "47Ki9bgnwcQ9jg1KHfUyQBRcW79Lb6fRETuQcNsMbEmNeJDpTy5HvXnuPLZKerGNQZphPu5LpgeGBz4Pa5mbi79W",
  "key16": "5BYiL4onrgrdWvZzVugA5LTegEq35btF9HQkTCALwcxxQPBdhtsLkozWbGyKWTyBPGXCXHM8QVJAqD1GZRWip6zQ",
  "key17": "2BMVqfn8fbetoD3ENiSRRuxuvxDJH5WQBksLEiBzTmAMzsMrwryP4Y1xjfgtjhKVbkvHwNqPFJXgb6KDGB4VhVv4",
  "key18": "2QURsKKF3wT1bDAe6WV1FDubHwc8Zxg3uVhrx1MntXmnbSZB5Kqi6xQZ7F2NnadrZpazUmMQppeooWJRQPAt1XtK",
  "key19": "2ufZBM98bBhVyF2Z9bf8xWi7JbnNP7YvhA3ZcgyvYx8JgQFBLWAtyMD79YCtrbz17FT9kRvDEhN7cs99MkygRt42",
  "key20": "47Usx8b7kMbmj4L9SfQVF3RfUFtCo7rSerbevFKCopTqPUjrM5RNsVa3qR9kUeAEz1TRZWDTmVP9f7DxSqS1Lun1",
  "key21": "8xinNxrfzV7zLDXPd8S4bpF9sM2B74UnCneWYCsLhAzReZUvbAZaUKXf1bSfcawLKZBeQczsmVz2ciHogSh7i6c",
  "key22": "4HXESmkdMRwBMUPyxaw2N4nS2gSn6GnMKYogya7War5EV84HmEGHG1YbVU8y3p7hticDqwCkvkPFB7tfNwDokhcD",
  "key23": "4zMDQ2UUM2mUUQPSQztTiTPPp3VWZT991YBxuENmMc8XThPctqbiQW4CL12ao7gHBHb6GqyuEkdaGQhoCfbTStQ9",
  "key24": "3PQvBaefVrrnj8iZLF6hjYhxnf1jtsTcKve8sTB9CsiLWYaCJpdU7ZT6LQPUnDtkFEzHKZ66wU5RSeGtGXm5sKdW",
  "key25": "2WbdsERqfyfA3maQ1YKCn3hdkwnT2GwZUKYzh2UaUXTTWHapbdTM21e1VGkq1CtpEAf6Z53y6oQvSpybsVcKiWC2",
  "key26": "RPbTQ41oUAETSY8SKMp3aJBhKEb725YE7h3i6eeGqCrA4ZBJHP7dAbRQ3NHic1CkGiPe2g3Qv9Fc57LLfPcp48h",
  "key27": "5WduNyNSkLAYnqxYKm7ZYuX44sFHGux7iUr1mWLS6EyAbBqmr8c73h5ZAZMQWpfpxTTzrBRNbhD3UoVkfGFYHtox",
  "key28": "3oatfYjy9XfzxEJfFNxkqQpod57dMCj3SDz3t7S7Mr6k2zUGAoExkufb7dZJuQjqkALBPxcDcVbKLmrVM4DRDtwV",
  "key29": "4tKY8CccKMw5wCcdncxbZzsYBQWamAsAhe9nCFVbXSnUXq456uPgqXyN46cC4euNyF5Jt3AuRGy6QWZD31yQ9EeL",
  "key30": "32pxdRN8UCh2RSt5dBrsxuHvjfFNZZWNLCen6VeexZrCaCNZQUwn4SjfY9uNkiugpEJmm4P89zRmT1PWiqEinKTx",
  "key31": "4YdouzabM3Raq5Ao3BDyg8Hm9vSteqmaUHhV8sxGuG5Js5tFijQqPGtvv8ExcdX1xaLFP7J1bVKK4e21Cj9mKk7w",
  "key32": "2M3X6qjXL5crNmACcSpipzZJWNxjoGewwukXBXPKLkiPc6om2sQsk1XJTkecgtmCUHjxrfEW2R212rb3MSR7JZw7",
  "key33": "3ZRp4FJmkUsgvJeHuPJD8cZjfXsqY5pYhx2pcNK7YHJkYh5xJZxdWvoneLnkZjKsXJiPnVZGLCo59X7G3u4KMhZB",
  "key34": "5GCfhnsYq1vt5PMfVtPTAQzCfzvXaYgGEnb9UEAhvoyLdd5CBr9KqBJQZLd9QXB48pJbDL87N2xJrCYqV3PjC1T7",
  "key35": "27Py9Kwmbtm1Rfrnd7LfPmByasrLbMboZudqSS1epUSHL1k3DCKZZDprRWWCAkz79nWjDt5HFK2xM66BK8NeuHk6",
  "key36": "3nBjGnNAGoPa72KHgrZg4sdLAWbsmwGitmdEfbcbY4GvAkBiks2iLNQFgaSoH3a38H8gVpCwYkEoZN7BD7Y2H3oq",
  "key37": "5mHEk9eG6yydH3VqXLvDMAUXk17VX6tv9Tpkj9W34EdyMjzJamNReKTRjb5dYBgSdQ69c7i9skoTmn3Gjq8NbVfU",
  "key38": "5fChdBEoHJhCajv64GzJM2xRU8R3kP1byuGsDciJBRMDgtLREjB5AGRzGH9NtuQBX3rm65QeEG6oEfTULBNQ6hQN",
  "key39": "2YRQwwaSJorEFcnoEahZTD9m65PnZYDz7zEDtgBMSxuqmG7u73N3X67xKUFuGeQF7jEXkDswaPn6gBWSfAR9deVL",
  "key40": "45XGzAmZUH4vTZa4V861TPwqAfqtsZFnm4jEWo9WYhW6kEVErXV4VZvzqnEc1Hdhyrge85aJ3gaKgVxcCGVeeFrR",
  "key41": "4s1EYj3seZcd6Mvve8M6VYewhkM49h1QHSNizgxfKDamDszLGDzGxL5W8xhjdZa7LFzeS7VHmv4RCzN5Ayw2pHCu",
  "key42": "5RCKTzn4SP8WwdznA5TUJR1YD9aJUL3wLxymtHyKw3NZBp45rKxCteJA35CbFe1gYUjruf5rUB5SpFTx9v9DQo3m",
  "key43": "5esWbS2wFV1AD4bSeP1b2Bv9Ap38AXCT7W1rzokAGSGXsxTsM5LE6sQJByf428D3zBSo8ZCZc8dBGbZkKsGpu3H4",
  "key44": "1AbHnEKtNA2ZLs3tSjTXiV37NjXxvRbosdcLxcDUzcoupEFk6pwSLU9iJiJ1p8vPTKLQLNjsQvXyQW3aqDiu6Pt",
  "key45": "2pgwyUidU2q3yQkTVhLC4DF4CNjTs4YYasrTyDaAEqbhJz6ahPTGJLtaM4KnjkkfjquwESfMZrn6w2VVAEcSyqmG",
  "key46": "2LgGto9GLxBYeFtsGeyr7rvib9ox8jJuQ9wH2LEY5sWNYMksbgfLK3b4Ss1i92hgNZL3tex38vScbuckuWzXFRWe",
  "key47": "EJjwf1Xt5orH5KzekBB8NaPjAvfjTy4SLaeBqdrqLH2DZksjqkXwshnpXgHii7DvExri9da9MjrP9uf4VLVLQ9i"
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
