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
    "3SnAVXdsCvppLfyENyk3eRzxQqEH6HZsRwhU7UVhdnNrJBwxMEak2Qs2ziQXdNKjH7P7UwTVuJaAwAJynDFACeJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2268JwL4VzHeEZUqUZAgMsk4Pwv9eAWh7AHXokKkKn8uA6BqgYnf8LTAErxQiwVUCsdQmS6fzXZQeiRH5cPjcz46",
  "key1": "4srMqTaQxYr2DPqtkBsoq3Zz9qjRJLxE4bpSxywXzx7gobCcoLcazUEy7bWAQBBMf7TAqDccfBB5N1r6RHJyYd6G",
  "key2": "3zyxtdkm2Ybgv2NwJtxk6WuQ9FwdvNE8cpQ93eY998bLE9DiPFNi6YWMQnkgeqdzaDJ11BY9DeqHU1QTVcsFESGa",
  "key3": "4yhayZKetpeDkcZ2xM9dHP48d7RP7meCrndtUUW88H6ChSA4tKKYShmkfw2YtwCJ8TuXvZSjdJ6SBrfJCDTT4Pt6",
  "key4": "5aUaCLAMqenVMkh2c2fzjpGvCQZ74cmWKLyKE3b5LQS5FgprDw8RrCVWQJYQxuApRkshZ7RdsjTGMzEYC2fuoZqx",
  "key5": "4vMYmvZkfWnBmm1bsfuEEr4aXYJ3LP8oGXsMKMJfDXQ9axVHarGTJ5SK2utQTds674gsSYSR2odNHwPfyZ5CLWCV",
  "key6": "4JLm2VmxP5z82aHMGV4G84mUiAyfGfKq3kUmcsaTazLpYHuePd81f8oNq8r4bdAXHk1TMVwoPqXbHksE7XqUy2Cw",
  "key7": "2uCY44HcXspNaQU9ndu3eruNT5qXENdu3BJKBpMpacgPuzJnBjZT8tM4KcwZo39upFiW7yWEFUaN7UgvE9yMYAQE",
  "key8": "59wVZZ4MRydUdNzBRdderD7ULkArPJ81WPEoJ7Q6RQ6JiNstgugTmYYTG5niUTxxW8T3iUrx6hjLU5cZppox6GRw",
  "key9": "5PgPYRu4AhK1uVrVowuRXD3WPBtWdPr5b6DTNEWrCxjdXXLrWiqTR2Xkezqhh9Rj9ohSXD8ed1VonwcJx6wcrCYd",
  "key10": "4iGZ6bqW9sd5PUNdd1pXbUjreeDfSRDnQNvqRRR2NLdeupFfMf61VHnUkSN6JfAXRm6mkxkUyqWF68iNbNAgFFtj",
  "key11": "4xXJ7H3TbW5kcFPUuaxbubYMdpkgy6Bm6vdUKhL6JWMkqFMa9Pp32vZurrd4uSRcHYPijb1qMeDBfHdPBCjvuR3Q",
  "key12": "3cM8VJRiXyxqVekUPbmGWgptvTUfWmHqxwm4khEDXncoJgDp1eVFqgHfEfF53148b43Fboj1dD6vSjT4zGvp6DtF",
  "key13": "4fopB87fujxmQnWHvriTHL84cxeuL4r3JBH96PHVkWLqpUvt7cFusXnA3qPmSJZmvCP3WtecgJ7uypBFBggRiDmS",
  "key14": "3oGQ7NJ5NhAMfNP6fKoChmrc8tenqsvtzs42zP9t9uLVC1Z7d4oTYCcr8yC8yruXqcbe5UKcBVw9ELDNyZNE3vN3",
  "key15": "k6VZEr5K32wokm2HCRmTGUwzRQmDkMYmrxq5ZpPwpbToMHEdwzrZA2i2gznupkwpAkXwcr6jNNN1dJLQMiBKAY1",
  "key16": "5TzBGDnsbMdYAdbLkxRgqzCSWJWuGfRyEDCZhJgjMdw18Gfxk1KxudJ2TuDuSDdEQDV1Z8F4PVEG778sK98JFg6T",
  "key17": "EPyrMpAAWuYcx3cfqNuWsbFrsWME5ky6UZ2YmcXpWQLsHUQRvjXRvhUKCHLpDgFbc6HxGgQFw9ypS1eQqbWGbgh",
  "key18": "4hFtX4F6Ez1F6z4yG3rynfu7ZNscixFEaxWfq25BnVx7jt3aAnUKZcShEnWXKpNE9VWFo7zUMjQhto47MTXsZg2E",
  "key19": "37hcdGcZZkTvAr2MW6nsQzMWQa2sCST2SzXqVxiUwNQ1ipVCvVK1PjC78157LMLJ2VcqT9mLrTmjR3EaDdxSWu4c",
  "key20": "MK4i5J2Hv6nAQ2eAzZSRDS2fZfBSS2NmfkWeqahcrbPM9oKQ3RGzdfzwcqxZ83iBNDE8nYvrYNmrnNqAipEfkZa",
  "key21": "4TtgKVer8Csnd5bG9mykeJCoKC122GcGepTz8FaYU4wQ2kbZYe35uQdCFaQAYfNqJLoJg52fJCgf8BoA9bEwUH9W",
  "key22": "4NQstpH3DaE6XqZ2LqtjVKodAbUGtefHULAjBDJEZoeaLvsaBGGoGWG6MyhDEyCMX7dbjAgV7MC2eDkcFa4JSjgM",
  "key23": "2yTFxjfaiBkBWxwsEkneVD7dswjcXSkodGKNY2qJFqfdfMwRJghoMKsk1BZrX3wBx4c3HUkexvQZD4Hvttftq4Nx",
  "key24": "2h73UaVG6o8Whub5GicMhtp34rT4HJpD7q4eL4PwUkZNutwtRQjv4mkPFYXG13TRNuMqd3MFw2UPpPHM6svVXWvB",
  "key25": "2tX9D4wRBddc4Tva29P17smL4WdHA1zDaWsm2pSTBZxm5mUdoh7pDKgYJC8sECFM7d5KnDhBkDk9sYrzzYy6qGtm",
  "key26": "3YpJaZ8oZssQ4qz2MiGdrsGwnYkFSZswK3DgxaMAtKUohtCR6PkriJ9foifaNtfWYqiorHHVmJmfxYiSgexpjycY",
  "key27": "2RZDeFAedZbwecAQ6PMw7bbAVyLAW43iPq2NbaVLBYQU7KujXSFmHyPUbPrgD1siGodX5XSe4qTNhdadSarRz79x",
  "key28": "3BWzL8grQtMuuUfCzGZtaweJYSxSvp3BtJYTjKrss1LFH6ShRk8EiwgT1bBWc5wPjkvTyYN7LRZLrjd79uv1S4D8",
  "key29": "bNjJYnaQwCRTnotAh7EgxreqWn1yiioXkN8okxctZRncKjhtaZs35sa2HZzS4StqegGk7JS9uvvhB1hVLKaj4Gg",
  "key30": "Juh3LDq2go9MhwV4YQzGezpJmufQfX74MiAEU4A2id1ogBBRbnH2DEF159L6WqsrURSKK4cyhgXmzjn14rvxV8M",
  "key31": "3L6DMRMAsKLzUTY3tYp4ft9msV94uAYV8f5R1ixxdAZRE1bDNavct5aVGig3H3FQLMfruriuQN4AjGraRSANQxxo",
  "key32": "5V9gCQ9DfUSom54ogiXiqWU2uBEC9mxpi47JuApcnCt8pYxvRjWWdk2haNRDpUdnTAQbcGtA1t7b8HX1ZyiNL1JR",
  "key33": "2PoeftnooB1kQ3suyEEGQfqk2gTuSNJx3nv3g2hzjoaR1FZDa7BMc4jfxt9YcpGUpT5JWZwxziPFu5etkohfWNhD",
  "key34": "VNZpNL7Zt5rFWyqH8XcfKHvmRjADY6CDns8zTXJGh8Tb3nA8WWU4NeacozPXqexBX8b6NM324XP7xMNVem3QKP6",
  "key35": "3LDKj53UyCDRQYqba1AGNBQz8j4Q6Ac6JpniYsxLSd8q948wsaWNiVB6Q1UTKdnA8AfKkRtpWCH7UZ5K8e2UUYE5",
  "key36": "5MfxmUsX3w2JRp9LPAWyU9TPCHgestBBMHYb3mLRZL2mDTHMqJCVCRdCEyNEAq4GnciHxghRNfKVoPF3Kpxbpf2t",
  "key37": "3XzkJiLRov9nkeFEpazxEoEnSUHQWZeW9mCpNdnkNuYKUsRUFpWAQ67FuZPwFsFyxRaa81qa5bJ5TXcvmrtdj9Lg",
  "key38": "4wAqZCYSQMANDngNimqsCdtYN6cKe5W9CWZg1DN5zpAZrMoA5V8UUvUZvnroL956eCcBV9T8qaTN8jKJBBB8quWm",
  "key39": "4ynzbDAFgVY7CLSxE2BWz4Hn7LrCfqnuowNMMKNQrvrBJLUb7ryZSWceaBp47i9SCMnmRqyb7hSUaVokX78HqkWJ",
  "key40": "2ZZfsXVsqec9Rp6VamSrPA6WMW91o7GMsVuJruoYPKgmK7ro2xVNt8X3SWKZD7ciFRDyptFVpthb2ALghb5rxBSs",
  "key41": "5FEUnYoBsR2Xnxb4XFw3f5wuw4eRLeRqnKeg1H56qatEPMtZtKFQxavZmoXnceKHji4TAn568UByqquBzwqrhqmT",
  "key42": "5xb67uy3exb2FmJVZsuNWdGZiHxpSPRLnpH4fLhTNVzLhuv6wu8hD1MmMgiVQZHBEZtqSC9Xu6hsNJcWosfDuzTc"
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
