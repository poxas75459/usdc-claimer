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
    "4B9fHTfKhw4hk9VzcXwsdtyNoDV53j9WyyBXLPHfgKdXUzJ8ye3s6M8y9C1MiNYzpBaJvCJVL8KuE4mCnCPzsZNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TrqmiCbjQh5xUauH6PtbFsVGonWD4NZJsSEMQ92hyJ5f8FWW8AqUrKG34E9VMRkmzSxXTPBLWWH2jEqf25hr12y",
  "key1": "2r55LGRFmKrV2hUzFpGoXmMDshq4mc4jQK5NKAgnmEBx6TvoeLdHGXAQTCNaX5tNbnfRkGWfgPeGoMJ1k1PVX1Eu",
  "key2": "3dNgZPwkkigmsrpQTPh3XdHKkYm87SiDRoEk3CuhWAMrDGmYmH7uypGYUUyoysTiYyY7vVmzUzhhYhjHecUsMuF4",
  "key3": "5zBFUEUDY9ud91Zfy9rwd5BAztiH15pr4nz9CVzSaWCLqjgGmzitobhcfVaLcVfGTZ6BRL2JvdEANj2xhDZVeNdv",
  "key4": "66XVcgnhw6VNtBvpAN2t1wWvnaJKdm6pFPCP2MrfMYAgpFqKsjqdsUPbesVzKxWjiouf1c8nyuS5zwmNsdeVqQQ7",
  "key5": "34KJrDjGY1VMv8LnTMYMtREPkWekRL4CNuUMgx2jifdjYim7njNEJqTXuima1HiZBtUmW8eVpXPT1zwZgyMozccH",
  "key6": "55sM7ddvKXLvhXcxfJUq9qZtmTYA1yyaV6W2XYeBhjaUgDP3py7FAHkAjh48onhvc4KVuhK8iSZaR1CNNRUD9mnZ",
  "key7": "ybH1THue5gzHmcd8EfUjgUSw4j6PCcKwQF4vT9Kz9Wrr5dFtvX1fsxY4DeFsniWC52EQhNuh4cr2CsYPXzBBdJR",
  "key8": "45Hynk3K7GJZ1bokF9oRQMhmKMjV22J35oXYr4rbfnisLpzKEywzVe6rTAwyh77VLYYAq32Nj3EYg19yMHwfPx89",
  "key9": "2xw2MF7wY1VfyVvAwPx23pTWioeTVuvVF8EvV2qnVQgNzd1ZZhiFy7kHh2o3wMAMW8V2HkiGDaX9ePxLvuJ6x99m",
  "key10": "3ERHerNs5vCcpiNpmr6rjo3GQVYUk1znywujUHFHnYcY46hryA5qXbzPSogEWMCWS2u1tMxLStAzarp7R6ACNWkL",
  "key11": "5AsqC7vZ98xjr9HBbywC56tMYRfjXnZvGqerUYdZ7ZwmNLcjCaYYPu3riAKWQRZrGuPV75QY9wfDLtemJfVDwMWF",
  "key12": "5uQFiNzVvX57B2EU7Hn5jmJ6vavQKm7FyYUNYky3jhc8tcWCfZvoWamMwFpxdjg5bButQBjR8AnTc3zao74d3Ljn",
  "key13": "rgzFVXiVC5bejM2ssbZpvekYhnqsZSzy1q9n3oqLm3xHuHBHr6YgJZna9rXvuh3tPrs9r9JpCckb2EA12fvrsah",
  "key14": "4WtEhVoWV3V54Y873VqapcGfBQLUVCTmdWfj4ks2wEkny1AwWzhLoEBuT54fCN8Ne5FnVvP935oHBUdybYEa1Por",
  "key15": "5kpBQUghidJjkn2dKaiT9un3WEw5dwsU8o7p8HCFaDPZFyfhmMFe8gyPgEC5WJA7YphcRV5PAmgRMLk29ZUawxfW",
  "key16": "4gitKmtJkhgkYJCYawcp4RZSPULpHRoGJJz6kvLiQDTKAg7mituYVm4mCMeLqfHnrb5VUHAPRF7snsnFULn9HQaV",
  "key17": "3SypmijyDxCVKjVv6ZeMpoyx7J68oLNxbYthiWvjYELrhxL7x1d3dAqrDMPAUREf5LeudK759qKAiP5LgPgqLVw5",
  "key18": "5mTpZ4PqyMT2dgFMBTKSgCvTNUARtCCC4QjB2WXhw8j1NeuiK6LW2FPNTBjdUbdhzavomn4nZSXJ27FHwdVqCszs",
  "key19": "2AHLErjRpxyWWnYsU35ttr5HvPKrhnQBMgcR88hDfjmZeXML9A2kUvYsLEft29XtFrSzX3JWKUCcA7VXuw1KC6kq",
  "key20": "2QZLruBNefA6CgisoVVFPbZLMYTEeYUkqp6abxgrFZZmUpcD4KfRf6UabrJsTQi5mAZQ1D18YUTNb8YeDah3xgYE",
  "key21": "45Cgcj9JZAoRt8b5t7mKif9dtvv9v4uxBjGFaU3tRKe8CVjidazRnu8ckrLQw259zw6ZEkHUYTi2ZQn1FzPgWGEN",
  "key22": "3ujNewdirJ1ocn2qxC2tKKeEykzpUegKNPTbDeTCjabmPKzdU4sRYQ57yDyJpy5aduRzckrYwtBDeCR1X8SkcNi3",
  "key23": "36eyLb8y8DQ5viLQv7PNMmMtAfLarN3cZwKVVNiznDR7TSY1E3bMk279sb9MQ4cBt6NdQTTscByhMbEjzaam2ugY",
  "key24": "5W9gWVZFKq986QnP4kHkFpBudhYWcFQAN3P1mrHXWgLxE8a7E7QQ3QyWy4Fid2SdYLtbRtyoVjF1WLFw4apq7tTt",
  "key25": "4c3zQ79t3VPjj3mrjhCA7APR51uv7Wr8ZTmLRkoko84FeSaG1yLmxrhGDjCXbVFshPEyASF51psAcFTSMbBWPb5M",
  "key26": "Wefjrgckod6GmTATbHuu9mAxo7eE7ppzs5YWGCFtS7WEToNLzT3Js7u9Czn7C2veJcWwvedUGQPGsdGBLFMgZqU",
  "key27": "3zevduuLWeZtifMdk4mgVz2JNXRsvyRYjQ4HHUwpyujAnCjtVpoiUpwKfoY5QnZ49Wm3opiw75dtJXLW9eBioyxL",
  "key28": "5Vz7iZP3r25g55USaCVh5RZawgbSXdU6CgdEQeVRhXXhgE5ZNRLQ7ZdWiiwGgfnTnGUy68TkY8EQf28iNUCw2Qip",
  "key29": "44wTgJ2yBAT8YfaYXGuZ6ubcg48Q79RFMTzGKhiU7pQprfAK2HM2Ys2b7zakczhQVbAMzA96SSNiCBozVB7LfRAd",
  "key30": "5TTMy4LZLB2uMe3YNPbcVfZsK8u5DgF8NfZJ3TQTU3JJv7E3LFu7KbZNgnJbeNAoE3eGTGoccJcBucZhimUjkUa3",
  "key31": "2nTnxLnFgmhpxEaXw3hh9shNkhPEVMdT9H7hmsCuVL3qEVRQETkSubd2HEhL54eBLQnTjxRFCuBeFtCtK8arwGWq",
  "key32": "5gbFhi1XKbTsy1oagKPMizCMmHhePiykDM95Yfpme2gHDL4unuNTxxXViCLBrHgNiXxYtEcGEurfzgzpLhFd3izR",
  "key33": "2BynVxzDXkHTr22KXxhC3VMHFBnQjgNc7TVsCgWJxdR63RraerzjULdDYHzGPXKLaBWuzUt8ZKaf6H1jTRT5WuBH",
  "key34": "FR9NVimkFsdvu24ggg7QuarjnxC4uqGa8xizvRL8cMFj5q1FrPB8HiPkNd6uuGwP68JVsnCy6S4Z75cZza6ae4J",
  "key35": "5RCNozB3h5C1qfQGiWuDnkJiqqAkaR7yiZAJavuwW9LpVpGGHR1aY29xRyGzxf3WG6coWH9RVkXiFLJcQZaTZXFp",
  "key36": "2RrCHMtqh9iq43VUGetA7in44iGSQbW8sTbdpGoJ5VBcpHefkiuBWvwMSYoWmkztecmP7cEhLPdXnMQwmm2vJ3HC",
  "key37": "LjzPHMLZ7mTtzfu8WZvq4evaG2SQiqLZ2LaGwoh4b8gCA71X8c7hcCnExsx5mksbBiBZH2cSFEEXUPFKZcAuoBr",
  "key38": "y4HWVx2yyuQkH7EnBrQhuzCFn1bbg8acerMrsXx8YoVAFWwtCR84HR3TDHLqF3LMeAM5LU3xJJutfyZQGXzcbun",
  "key39": "2EVQn2ihdbGuE9YypWTZjGEewLwgLeNbGE4GxSeFXTPRZ8ypRFyYvxirNu7aPrSPjG2X5FGuryCmjoWoyM8TEGDr",
  "key40": "5FfdKrjLcWnMwks2q2Dc4XRWLL2D2PTuAYrqabLzvZ6823xth5osKddLYFqNRSfrbNgoYY4C9SGHYYS7NReFWUWh",
  "key41": "9dzEWGP3ngqRHRi4oM7oqZbSqV7vUZfnj2dQ1FqubAQBCq2bR9DxViYBJCjDzNWzii7JqYuJ8yRZE5c7jErovFV",
  "key42": "2C98S8XwUsGE5aCnB9ZbjcKG5VuSF2SWuSmyR89s9xy3xppppG53F7iNfsd3vTWLWf1k11Ye3Xk7QydFxTgnVcRt",
  "key43": "AXE5sKRZZTKCrfRRC1N8xcJEk9kSea775YuuBcLnERzgmpaD3kBHn68REo7MAvo8MDRm5E9r8pFzho8WqoKPGE8",
  "key44": "znKxhuNPHL3VfyvXEXEhB3MnmAUT5yV4Dgzp8LJJCdcfF3ifyQ3dAgWf6Ard46WUz1Eb7uVBcMwyr3gMekFhNPY",
  "key45": "5FT6igR65aDmrx1aTZXpDrCbxSrGCs8Ep9Aknpsd5Khm7qSrp18S349qtRyfV72t6zE35G9txF9QPxQeYH4RiGK4",
  "key46": "5z1fRe6QKyKrsHh6eJAV9VJ236XjppYd7gkoGPNXcgyibyCgRf4Hjm2GCNPEPhhBCYVr9XUV1gVaYHP6WKrEm438",
  "key47": "2k9VuwtoK1sBzPsYP56Z6YzGAoSuvW1xrnrJnLNqwfrJgdTcKvX8CuZR3D9npSmZrEyQZtnWeHhSKNVUdENoJjNS",
  "key48": "5L7jQ7dZu29sNF9XwGqc69zTnVm3HR23EUCjiYb8gRWGJ9soTay23eyhN3ZQeBqfm25giyKmVScUPwKmi4cL3VkT"
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
