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
    "2oXFinG6KCX3XitCN3ie7jxwAxTDHDi41217oPNUnpwJt99ogr9ZYpirpTeyuWrTxNwXXzsuQHW1xcEwxTn6WDzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562yG5Cs5mizSNGjdYrVFj5fKRWhFStQymwyZ6UAhwQHi1njcE3qvM7vB9txsudu3JcqMyoPArJRj69xaX8FaGR7",
  "key1": "2rA1oUMDqvGoJkF3LwDoSHpoKSNEfqRA9zZ9V5S7kZTH23sQTKctGbNRW3nC3kM1pk6E6bWhM9SMzbgjgVfZ8LKR",
  "key2": "dy4xX51BP7G7yao9oz8sBu7SyjExArgCdh5159h4eVkcSAtgAcpXM66ZVxcATrQmLBFqW9fQkxPPGCfcTM2YBge",
  "key3": "3EErvHWbHo8DWEkkzPL5NKFi2ZLtvUL9gLHvh9SuTMtWkYxdRipcc1etxV1bNpsVP1LGiFjykhKZa1J93KEjdXiD",
  "key4": "2Gc1at7qdWvRFa2JsSFUXsuhcvVzFtEW988uZMaQoikyXo2TAfGFQ45FTWzAEYuw2T8opaFNc7G9ERCsEhob5DLo",
  "key5": "FmKSPAHmin1M5HambZxQMPhEVuJg5LPqVPAQKdAdLHaRim5ijrFVdsgzfoWNS87FnEj3FchEjM2fjKk7Mucw9p1",
  "key6": "5nRCa1LRmmroQxvNy37kT4Hgyi4dizC3FuQJrz2xytxJS6hxAfXiJxZmTFrWxw8SKDfiBm2shw8drECGz2A3TUcj",
  "key7": "4yfqvEeqggcm5Ta1jzxPtWn7pdisbSvgZrHn7AG3pr9i5cTwrzykt9G6GF8L69R9e2A1JtHKVZZ18EWWRAPv7ur4",
  "key8": "3iaCsycT7LkAaLh1GZUQ6asHpdCaxMGt9ewLbDd5y7bmYFT7Ad1tovpyLxVqocp64j7xAZeYvgLu7ZAFnJtzmMdf",
  "key9": "4BqPhoxu2BxFLBmZL8DtPZFZfw1uJA52yyuNEWS8xBTyneVySZJSjr1FNEBsvQsojWTfsgrWmH1w5SuYJMaiM5Uz",
  "key10": "5uhj2KRuxa4Jm122mRjUk72fQiPW2w5Pnka7eq8mamyo9Yqi1MSQ88uhe3BDgoK7iJ6spVfN9hQupAkGpsjbktBe",
  "key11": "3rHsNhAQBE2Cwh4J6CG5AGTzfgJwMoLJm4SPgoBwnUQbGCaUVrUYUbq7R1J6denxM84w8ftacFgNmY3TUA2vZFNE",
  "key12": "5HKvtZp1XCUFnrgt5BRfibG289Kx3R3N7QxFmqpUhPoFPJ4v2admbdKNcCmATYiQWMps5NR12URfZQE7uJrv6cQf",
  "key13": "DUmWSEf9kTEUAWzzjki9WA35Kg5GkdM7aAbJLv7dW2Lbv3bYU5h6NuTeL4qSwq3yfbvFYDVsRZum6UqUsVkrCrM",
  "key14": "5Uii86Df5yWd2Evk5fSQYbBFBhwZUdwMiw8qEiJgRUafeDR2ugfQ4DAhzinVBkZECPDfhZAvLoufwPxznR3ZDtTC",
  "key15": "37oMirNDNKkMQf3rDbhYN6pAkBEFFBrWK59MNXHa74Zj6rsy357yjYHK9D25RGJfHMmXe5taya96zhMgkLXtPpQ5",
  "key16": "4cPrzo9omPdpsJxd7FDh8E5c9fM8Tertv5FygqtwwLvXbwz682dSXJhhkqGB33D4vZjerfocz5tJMCi8WWHv5yGU",
  "key17": "23BqBZGJsCiX5x5DJAkhXh2unMUpjtNbTTDbe8qHzMYVMNxbDXgSsEEFN45TvZu3EL8Fuu9katJRmYbJTg3Tj5SX",
  "key18": "8Z3N5cQuXD8ScbLseVwVzXWp2HEr9TyH3dJ4N7op5CLFSNhEqsXvp2YoXRNish64ZaqQaTE5u1TUDACwm1usCvT",
  "key19": "qzHuKWBBfHGbPkUwL5EXF2yAoXXw7hGTveNWXbNsi4ACxXaRzzh2hAcDqDrBeMpfAbtvKqQdngT178B5ot4ZiPf",
  "key20": "4zaGi4BL341n5YvEFGzb7itVDmMHvv4zMbjWjXg48CHtPJDXvHoFDUpg53LPi1djRHxNRcdCeesHUmsDk1yMDTk7",
  "key21": "4YWsYA3qf5Zm9hKSaeWohpUTvxX7FeuUfreg3piJHU72a24fGdD1U7KF3CHnkUtyd2wyM2mS541MiEMNsYxRHqjp",
  "key22": "5bLTNx4yVr2FPEAzq2H64MbvGitJJ2t7EMv9oc42hDKCWk8LZmNjLPCiJEg2qvgcEMeQvVTuPxGbDL6ZAPK6z8iT",
  "key23": "3XMcx3ut5MtcHWzJkykSAaqc4FKUv9bpU6SmE4A9UQWtbrYCfRsxip4rfdpkFdB3qW3zdUaq9WA4k28mzaK64VtJ",
  "key24": "3sCDFgWvZdQPzXgmad4p8ZdixT3cJavg9Jh1R4uSsG18Nw7aYpNMdGvu6fDKesuDLvhnytjjDNPC1rr6dAL5DvM9",
  "key25": "e1nFvjcTwbZh75qRdx9NcQmveovHo8paMYE8tjFdNENmgqyvHXRoxGtDdnvC961MNJPYmh9CaDVe5gVpeH21uXu",
  "key26": "3zL7ME2kMeGe3AzRVbtVat9ZYK4oXPnkMKdG7gCBC8RQDnE3LCwre6zM7nrgguisRfuhQUGGZZrxLTSChDzYtUZM",
  "key27": "5XLqXQmyjtBgAZ7HWaPiVf1mfYwMrhNLsteZJw7C5hk6q6PzCcaxyQ6PT7Z2rXYVk9Pt8bVD6WH1a8w9CMSJus3W",
  "key28": "5yQAMLpkKvhGZJ8akRcdnmqphpmDaG9UY6dTsoM9PXhFr9cy4HVs9F9F9pb9UruFe7KYccGdsYfkRkvrBGNMYUUU",
  "key29": "jNwmEyy4NJHPaZPiiKoNJyGH5oYdkCqSrERwDTFsqj6VxpTyiKN39VjCJfUfkhUGXSqo9fXNKVw4TLMDQXQeGAH",
  "key30": "5zhYBwRnMeDd5XB2Yg5L8q8dhvKabdZhJfc8u265JCk23mn8BtkxfXyV4qiSg1KLmS9bp1vHn3hd4bj3XzrVeqKf",
  "key31": "27UnoWqAmT9iFng2B7oUZWL9BUegz7wfzKxVPvBKrGkk8XtstDrTucqrUuM5XX4wrtTPysDsEFRjGfh7cc3ohuK5",
  "key32": "41RqpK7gZWoSAJCD5HaNbPTRyRWdmYU9MWUnhgFWPBkSaCnsok2yf5qsDAGpxQ38xatK3JZYRdRz9zWfMi4773Tw",
  "key33": "295BYSRmVmjPv5hSjh4kR6CxJaYtufdfdozPZWZvWV3dD7YEMTf44t4Sb6qK5SzcATJ4rR4YxACMxJMPmHsFshwd",
  "key34": "2wc9tv62Ks4ZR4NX68Ad7UhSTvDUWx9wH3gn3nhqXruVmjZcbqhCQQtmmyYboP1EHjHLaejtiSfE9igLDwYqwhjq",
  "key35": "4Xyv5LesxiYoTggzGvpswLJ5pnvQA1MuQ9E3YYvRzR9PSDQJuHbs17T4b1v26vexYSZEXEvbThmuFdHsaUo8AsdN",
  "key36": "2c6wnJgKTr2enPymRL6muqSrTWX875AtWdJb6UmMFd4GrZ7phkMyKZvpJoPmHnqoE4D5x9pw21JQayx63eYcUH3k",
  "key37": "v4fz7Espaw8jPH7y5zDwMwJQpC3woTV99ESGZrdjiPe2A468GavupW8NNHA2RTioAzkuTgGBBm8FoY9HkGVzMdL",
  "key38": "5vNpPriY8NWdETe3mhnwwQw9ABVGWxgmKewgBEXzPMxRJmCnL5Xo5tKXdVheAzXcyejgo1Yo5b9csQupVEEe3eec",
  "key39": "X5coHpsLbK9VBBPyzzLPTb5u3LeCPQPFvs5Hw7dDZRgppmfxNLEA2ByLucZivHkjeVXMPCXDCSrdZDyJNhKjAQh",
  "key40": "3R5xk3npA6axARu4R72PiRhYrspFuwB2BAwJB8MJbhXzdzxJEtn7yaTy3WySa9BwA8617NiNuqoXeb3qZazR6HPH",
  "key41": "25or8S9A43HiEovcTCFVDBjbEhJiSgjE61orDQSqpBMmnBmyHJJhEkEaVMUcDUZd8iAi71AnFVpkQM7muiggFViL",
  "key42": "3JZdxKgcBKLWKRHSdS9MbzTGP5hMa3S8vTAyBN2p8Qpt4hseZ7gr5Q8GdbeVQzo1hgc4WSJzRYeJjP4QwBM9LdJu",
  "key43": "hddFNnRfuepDGdWSCYLnkBsv2qXLEo1bHxyfrvyvKeZrrbAkWCJhWWRWLUpCXKPPcMFg534j2SBGPF7DpCv42Fg",
  "key44": "5DkhmDayK89r7e7sPKox4KdTQMksmddvEqzwhzN5FkE6asjKshtyGXYira2YV163cQYmPfNBWYcuzDnqFc2r3w3r",
  "key45": "3rKiwHs1TdhVCceKSAdwMoBLv7bLA35PV7qkBw3Xr5pAXzyTNbVURJsco7RLRa7SencgpU525cgRCPJqQChb1cjo",
  "key46": "357PT5diioHDAjdvvZ2V47AgcJnoXTetcyQrqbdvWGkUbvprt5jwiSHDt4Lunzcgksr9g6q736iCqzEAMsyg7BCQ",
  "key47": "5CS7sZnZjCn967gWVYv6q3a9mriie9Cps4fmRTTJtSyHELhEiMvCEe7iqWUg4fo1crLG8j2UCHYMin3LhTTrz2Zw"
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
