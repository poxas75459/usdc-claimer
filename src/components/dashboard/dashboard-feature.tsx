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
    "5uYy2MgHaNiKv5ht9Z5vC5K41XtP2XqvBggTfpcdUcarJBU8QqFhq3UpS3mAJ2hm8GshfXS1DjP3NJK8EGKBk4dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dd6thSQQ3zkJCpQhY3cYdmgJ66XMWp2TaKs2CqtP5nC9D599W4igczDHEWUBRdqgRuCXpmhMw6YyypM1EgPzaeD",
  "key1": "3u3NKrsdJSpGJgqSCV2zPQ1BYZ9KpRSTvoyq5zaYnWSXg9kZhU4mRp76ne2APj4yZnjiuKFeTaa8DVgbPHyEJP4x",
  "key2": "4679Ym5KNPgwz19cTmL6W7Fk6e33PdUqAkSTi8VFPjEmGx8Sk57rSxExsec25GZu5NrJ763rfmvdtpi44aUkcHhm",
  "key3": "4g46Z8uafm4yMLvGKMf76TkNAqepKnnwhLZ9MeBuG9fmFW2BtS5CFEEofpKJdPgdz9GVYTGLzaQ3HuT9eCwBH2y",
  "key4": "3JLn5NJVtd251SmCgaH7ZqwvE8gibUAEC5kWxbTx2s8QkzDun89YBDL1gqwrBYRbhrEW3QXpFxyQqAMqF3pNkscQ",
  "key5": "ThHQRLMAzy5vgxQcwZu5e62SgZEdiM3142GWC1GktRHENAp7d1nBbKgfekbhfcwZ5ikBpmDDC6k83rjANqKekKU",
  "key6": "3MR3571xfZ2viLsRZL5ev3n7mLDnEgUiU3bmEzBgBHEZDVAt1oPMxVhV9TqQtbzXKYJBy2WtEkfNDCU2Fn8h3vaV",
  "key7": "gNiQKSdnMBSyBLssb2qG6fd9E2ifuosgEQDqgWztSoFe1LNeHUb4jyHpciws3V8cLD8V3xBkkzZX7Gzcw6t34Vy",
  "key8": "3kjPHu7rbizH1jya8bkkjhhXk45YLvWyqMAA2WVeQhbgbPXeaVQtyAQPmboLh3EkdhLgFfFH3VaFv6x1piyRzNKs",
  "key9": "M2r2GSjR7J5kVhSDH5faSPRguAjH6gXmqn7RTHpLkntx18UC8yrmM595rrBcocP65eoq82oJKD8GwKH5Ed8AcyE",
  "key10": "d2Kj8QZPahGH2veVx2wuHU3hrr7T2h4zJemdAFv1frH4UpDoqysrUX3w8AmEBY2DUPruJn3Rbt3vt7bFiWJ7CXz",
  "key11": "3kw668FgySpXXQrzDdbcKiBsX5BwqFezqWgZWu5RdVPiVquCYdPHb16Luvg8HJraYhPeAx897gwnF8cjjHQTJyGN",
  "key12": "587HyMtRCGW23ENydCWNTQjPFg11hEpJ1HzeZmimAsAt18JMjkJjGHL7WJhGUZixrwUcx8zGu7uVMRC3yUMC5uce",
  "key13": "5ZZfr3onssop8pbtoq4Qbo4mfVCENAyxiqGKt3HmuZDj6WuWM4Arh2eEtbLYyePeTbTskKLPL1TpM7ywm6Kbkx32",
  "key14": "4FEtnzitWqZWaK36cSyNnPimB1u4FahD9zgD63Hki47G2DJ32g23C8v29ti4jHcPQuQpZv5CbtewLMGZpbGghLvS",
  "key15": "4BSCWLMYbaVhJGP9KEaXXq3nhoxs66gUAxTQvJbBR6yoyzbw8vBk6KyKGchGYBRte2TDqmUH8F7NpMNA3XJpHFm1",
  "key16": "UyDrUvqQWzqBH8L8ncmVxeCbwgjcY7qD7XSsgUV6oaEhAb7YfBmg5v6WiqRM63WwxxKb1nGpitNbVktRGtF3MU9",
  "key17": "65BZQ8XXdCSd5KyYQ3WJKTixhLcbxt3WqSPMRaDuPrgjzry4coTWKiYY8VxZrUiywgPDgkdSbP8Cf6p5EL52sANP",
  "key18": "BQ1rivvtX8Wido9m3fe6EkBiX6EQdeP1qsgEerdwcr5WQNW1wK1vMmNkTsXTqmweEDTtnxG1Xdf9su2mYK8E4DL",
  "key19": "273oxVkAPgwWmAYnhN99WqTaGzuVtKyRB4NU2MPQxVJT3ECCEYg7imgRNg6Qk6REPQE8TV9rWmeJD2P8p9ddqA25",
  "key20": "5Cq2cD5Mh8pkBNzfADtHxXiBcDZeqnAJoyMAzFUz1ZsQj2g21gH8pET6QLgWtmR1Gt2p1CHwFE7ExCT38J6AtMbE",
  "key21": "56TqTcbPHPoHw116ZYUg6LSuhZvURSDAPaJZWw6ngWCB1BhfU9ZJMHiRsjs26qgPp1vQDcQcFwakuC6u2JpXQAr8",
  "key22": "4fqTEfv8rYL2eeGwwWkP2cNKUt8Xwzv8KmW52BebrSsQZRyRckQNCbhHhpjHfZJiEhFrgUtphX2m2jGdp9vnAwUz",
  "key23": "5i2whvVsrQtgSXo46AKdzTD4UQxm8EPsBGVy8RmgdLnvTB7Eepm9wNyVdkxZZ9qBooiG5WeeYhRXGF1ZEj8ZBaXF",
  "key24": "4yHGzC9MnHx77tChAxEHvhiwantU2fEUEEY4WjHb9FT9PF8K23gzWJTJgRCTqzxMWkGLrGtwqDc9ZHJWmxvfoU2h",
  "key25": "fLRXjGCByoVPNJkf4jpofftwYdrypGgvjqUs9vBg3AhznMVmELYZ1P9fvaafesoTzVdHYfE8vtLXyBRdoMzFcga",
  "key26": "5DwyL3JgncoQBVo1YZoTWWZ9w3jRuKbEwdt54ksRfAw4Fdgx92cNYT3BH5xcQRXtYjorjVwLutKap55Syf8wJh17",
  "key27": "33GhAXsi9PEeips1f7MvCvcZj3NiupikqfweYxhL3jrWbRL2YHeAQJk7We48DoJAMf4yzW64bkCV8viXXM8PVKmL",
  "key28": "5kj1xctPrFMrV3W1BM2addTHdaPmFuQD4yTDfeHE84nLTrdxE9bYU1jJryhaMMFBVRqtGC2yPCNJvNHjFgnTaQz3",
  "key29": "273Rdgq5NEgdqFgeM8ikamaFDuesNgcPcVRbDZkJsZ3yzf2ynn18TbPxW1B7z4WYoKiCs3Gx4FM6jfF1id3VNanH",
  "key30": "4yqAQBhW2GPdMboVaVtGGwieuErSWSk9YNURTxp1yYBwTWbanDuPfe3NEK4BYS7SUcFLpDg9AqBX9h8SWa7dnKjN",
  "key31": "4bnzytZPdCLdy3qRq6YEyiN97Vc9r5HpkRpi9drxmM4ckBB5RLBzoRxrrGvKHifbuQ6NCiW2Q56eqtukpMdhajex",
  "key32": "5XT77JaGwZLgUwUm72HtcG3i7iUJ6G19mvE9pPFdcXjhd2sQTSvBwcVnBfMFjb5t9fRUuXw9XJ2JKhNmgdN5ve64",
  "key33": "66SmYkQYA17X7evtej5NNBpDWd7bDgZmA3T1pz7vQ5m6m8GQWKigzdWffeUiMurFFuHSFUSUzudwXScPu8ok6R1g"
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
