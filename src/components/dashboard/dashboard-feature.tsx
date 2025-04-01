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
    "5ZBy3R7paDdVueXJW5CN9ALmzCLGdEvBVLoMbfAkkqbmcQMnV7PSWrQeXWp9zaTF52LEuDzAyTi47CVJZVdJGSwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mibc3nWNdPfDCRX6huhGw8UYkYi255WqR2V4shKZahm2q3mLJqFS6imWPZq4DjSF8oZyDT7LkLs5iRfwV7Vrz1z",
  "key1": "574f89soVqvt8TcfCdgiUexr7k6hHJ4yL9Nhyi4ezJZG8DUSSpzmjx3BjLoCVjFRzaA8UoQs8A9XjUxT2W9djS1g",
  "key2": "5NpU6Xm9PcSf7YgGuYWA1K19pcP5Eo5HZU3icgPxSgE5G4nQnFbVurENKSdcuV83LDFoNZafNM25YV9736e1tYgt",
  "key3": "5nV782VYGUGugF99gNgckAwDdBrFEed9rYQuPs8s9y4a8wT7oiY6UhYmjW5z2zKr7fZYyp3gu5HTdfMFEZmS2bnS",
  "key4": "5vB2yfduG2yaZj77ozzmbEqWk4yRwKbBMSzhukAqB9arpXNxFfZqBt95bSbABAvNYPL99seG3iHptwterad2NN9y",
  "key5": "ep2xda5jozCXreVqyBva9d3s4uZseEzm95Ffd642bAreY8SJD1aLNFZ8m8VSjVty7xNfVVCkKGZXyHLv9Y8u2Zh",
  "key6": "5DA2tBiWmSGpPHMcqDd2mhQ3eSwsQyroqBRcqwSEpi1jS5HgWf5xVZPFNoghw4GN38f8qxeUziFvCxFZXbdLpk5S",
  "key7": "2MC8KPTnDE22WCSamF6595VuvqeRHzXaGPCD2j1at8xP6Tk84aeq2C3RBoL3yo2dEtXFLLkPaDtq2WBjDW3RZwai",
  "key8": "5AFe3ytmQxvHVz2fjKGofaH1gCWn4bY5CXWPiHwPDQAkMacdY74826LH6q9grFiQtS9M1jSuG46vxmBnHuuAsaDB",
  "key9": "2ywqUvECXwgADEAkGbi4TEcyvFppy3NyJXH1bHtyTmnuyyVB4vJCZSRytV6WDhPQZP2eKm9h3rR492gBtxjikRZ3",
  "key10": "2eNb3HFfecuVrAdt82zdj5rsLuzyyLnKiQL3YNRuowEj9hpmVfCtopLJBcgMfAR517EDooo3VjphvzrLEWbxNk4V",
  "key11": "gSeurUG5A3v8wRzeA1twp31PJ4x3BELXGYVqdbua9utuUaawLZZHXE89cR43AiHKvt7MVRZWVhLuD5qH1ynaqYv",
  "key12": "48ri1ttd76Hn9JyC5SsYVhWVmbWz8Sxoq3KDdv1Zyvnj3BPtrDnH6xb7zjAT97C3cY95UXeM1LF5qmxqmpBZyvXr",
  "key13": "3cwirCE3MzNB4sbWpusRcVSadDfeTE3zdyLrNNbW2cA7PPhjo6fuqqJsjU8Fea5jYbKsBUp6mx9aegS4EZu1222R",
  "key14": "5oNDZfutGryavjXPKTvNyx7vmSgmy8HmgRM1WEh9k5Rxx6w4PkWysu4ANXTXCKukVtqqcgavg9bEQ632XhDfjM4R",
  "key15": "5LBKJrTt93XiRFZk7mtspFV4E9aVXfRZvX14XRoGaNeX74crwGWLPELtnWZF6bfRSzE1UJg9j7s161PxkdQNUQrS",
  "key16": "2D7pr18k9YnaVjCfAMj729dFikLWgUavSjN8Q2WhRuRYKGyNYNq4pAnHHeUK9Nqnpndwx21g3RGW4k71dHmrGBp7",
  "key17": "3YSmPwAuzxRexbNEgLPMkSxx6sfJf3MvEnaDkTEhkhFq7x98aWPC2uqdSxji1AUwEm6KRVgBon7nEHpCTBogUqhb",
  "key18": "UJCBuyTVySKWRTk76mCTMm6AcW23c5SBj6PRpCr7yVdRNbHhp3hW8VGgF9ijPyn3ihgUCwttHavtPwq6MjXzKTs",
  "key19": "5KTZk5UycPfsphuFunNzoSkgDBznPWufWoo931sovmTZKjss9Y7JJc86CyW2Ruu2gRxNvTshVhTnCxF5LmYatJvK",
  "key20": "hYsHAeogSapkVk13ETq8A2teVtZDR1ELyt5zbQYrRFCKxFjB8D2Uqux3qxSiMqw44M7dgd81pv6MSvjL3m1bLQG",
  "key21": "2Ng9FkNHd8BXNPEnNqrVjreLLkgv7rXMAX83qDpUg55k4SKP6RtdHoox5UKG16xzBYjKYe85J6fVJxbAKx3AE5id",
  "key22": "4baNUmoZpxurq8CWDzmReuyX2LZkaD3J8hAYDGTAS4gmV4b5ESS18RNMvhreLkfEQwbksAfLofC8Sutj2A9GvY2v",
  "key23": "3eX1SRTqJEeQX1Nnwo94uLmtQ1dnrH2rBNYZTZcp6cscdkvdyAeqd8qm994XLbLNBUC32jL2i7BPeoA3y5beJUvL",
  "key24": "28wbbidzWDX4sbSRJZo8xbS9cG2S9DEZoRVD1U6DsvJviJyiNdp7F3VYyHoMJWMXcZv4yC2o5Rg5D6hu11GtYEgB",
  "key25": "4tvDgPwJV9nTmj9VdwXmHCcwrEJ7Gm28Yakg9PGYP1EBtjMaAXAR7ymgHm82UxPTpCnYsmhyAMARNWu9ZinEkSaK",
  "key26": "4vdDqnRLP1HUrFyxmPraqggGaQpMw3ZhUCYVE2zMPimuaoye2d52Fx7M7uHJkpZtdYAUBHaZ48KCH8XHBJKrr58z",
  "key27": "4ugDyETpq9sgt4zUytWSziHKzz9U2zJr6ppMGkPMoQM19X7mdWJGopWgV9DGkQTaJjGZZmQvabyTwLpKWYKxecYw",
  "key28": "3BRNr9PSVJRSYv3bMDd6q7NpXcXuQzUu1VymTzb1YT2XBDqbS1zAdswXQUqut7V51mV3DZwV9uF9w4M4isYY4522",
  "key29": "3JBuUNH9CnQ9LcqYmDy5kcZj1WSNv85evEsDVZ8VDo9f54NQLFuPMpVGv2CxpXwqtDWoUPRPEZX395cf52wCRWHf",
  "key30": "4smeQKtRNFHELD1hBBqmMvRogqWtWtuAdoFVJf4g1ssH4x4i7XUyb36KfapG2YeDf5sE9U9XxpN69gREXHmdHSVY",
  "key31": "3JPrNDmnGR3sAvBnpzXUuNwAs7rrHPpYhwRT3uyAQzzqmgER29yzYpTXVeAseaZgNhx7moLwzhSqRezBvBe8bML2",
  "key32": "3Ef9YYX6a9w2WAivJgGVpQXVB82jbwBJ114ks5CNA3LcmndnKwKGM55QCZpQP9RjqvGacQwThwEB6xQZEodTMvBd",
  "key33": "5gQHzdnFwvvRAi7vwjNfvrZAB7ym8bXgM6Wxh55HYZsAbTgotacZ1FBaeNp6f3dbVbe6NNnzM5G5VWrdmaeePHss",
  "key34": "4Gvo2euhEkVHqv7icaQZwLq67xsjqGVBxPUoJLM5K3H587hGAVNa8CJ6onWFJTDfY9Mv62o53ksqksk3bq1pijxU",
  "key35": "HRuL3XmW3wU5od2Sx6nQW13YhYuUUavkceifWPSDmjEkiPffyEsKUR4cB8MDCgd3RUvVHXQ1S3CtasLtdnp2z4z",
  "key36": "FZo1XHSP81Kbo9D8HNCFuxZryDAD8MgbVjhiHDSQzWVAHsYj6PfUFboW55canFxdf2VHwTMaBgqTLuP1HUVMhjV",
  "key37": "37wztFJvSyb4h6RgHj2UFykdDgViLzqfW7MZmit9LCoYFYaUabgtC6okmSpya7V1xqCsXVnVo6QaB4rUREGQVWGV",
  "key38": "3CQ3aAN38DYM9FRoZe6gdJkXtankMVLG5PrSeRE2cJbVaA2MaRf37dh8hyNKs5JjDhrRxjg4wUHFDicFLAWsXhxa",
  "key39": "4k3i9e32VQKMTGV9u8eopMWudtJTcUev2vcsaEvVJ7K7qeEmXHVKdBhcFnbxiyzVJYi6PUvWdzMyGZSgWHbJo78y",
  "key40": "4EvmKnuWuZ39MXdq8weJ5ZKAHvN1wt81swLaCTUNbJBnGqbMDzxkC8L1RitrYQX6JV1dDWz8YV9rgvxAmdcGME5L",
  "key41": "4s3TpEScyApkBYxpEmNo3dm1ancPLJUmtkGFHF43DYrCzf3q2xjgs85CunZzY4QLQMy5H5e7E6D2d2ikxQZQcfns"
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
