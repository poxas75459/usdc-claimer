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
    "2qAvbEA21s36qwL8EqeknKEKjwU1wFgLZ48PeizziDWVrq9iigPbg8f3aM5zpX3bpoyWcTjpZMdCJ1mtMxMau7KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KG2Qah6W8fNz6W1oakbWA9nhn9x5bhJoPBMk8uyTZTEfg55cpWeRUK9nRq7AQgnkdXD16UUFxcxYBh3BkXhQby7",
  "key1": "3NXrQypngnDwdAQ3h2gwmmSXYrafVpUQAeqAZwPd4kxbEbXRRfQTxyto2xNSaKP5a78s1TVpPQTegEzmdkPrdrLu",
  "key2": "4DK8Mp5mTGBuDuotBrUqcaBWF1foj8iZzGngVZdKbTQzMaafAymKfgr5CiBNjBWonVAxwx9eoqN8CUxTtLCjckfp",
  "key3": "dFHXDof88Z4Nxq6aeYB7fVyffbfKr96bXCkDT67hT1gVSzfozixjH9ggKXsspAmrpW6F65V9Nu8WfdGf1j8pmwp",
  "key4": "4GiLA8FqcnrNaPFJg76fYvz2SzX8XHLdC4eHbF7HfEqj2zURnzbULVeqAQ1jJBJiM3caQvxYonkiNwevKz6uuvtm",
  "key5": "5DrDeyZjfW68vkfH5KptMfL37znLT2AeigPw1dHLir9W6LZ8Zst6XaiSXh2rgAVLh2N67KiHSjjRBdy5g4GeLorj",
  "key6": "4u5tjMYbiEhP4w8VBnjZqiZ7iWRpo1hD5JkS1A9dXeyjcUs2UY7BTYSCc5yy2Gkk6L2Vu1NPdySiMBBDz7sVXagt",
  "key7": "4NSp39m3AsjBYybCNTULTpJ1xpDYCSD2jzo7C3rVcTUGCuFPjnfiom7jYcZRYabHtBxwmMeaWtDfRrQ63LVDnZos",
  "key8": "2ZoHcgGpBiK1K3cFVcgQVWYiAbu2GZXVfzwuTXquvGNuwHsEyhNHvwHXc5iuPopHDcKKi8RxLxr5hypiNXpWwXoe",
  "key9": "2ACHxxQA1NcTYos3ov5arkTPN7PLr9YLSxvgMnvx65HsEq3uDHq9oExYPvhtHTiCXhv1v3JaYFSW8kx4XP5SysBf",
  "key10": "568Hu6xZqBvEBLnq3XwHJxyWmfQxNBQ2M7ATdwKxkxccHKwNfBmJTK22HBA11GxFSSL2rJjXRkXAZycLa4Z4yPVR",
  "key11": "518GXe5JbJneNK9aVT8FVDnxyamLW1CU1Tes6YUdbzF3grH1S8dFpqUfmqegdg7BnBniEivDUw1qSDmqarJekCao",
  "key12": "3wuThVh4DTufzScm4CwEhG7ELxxsYUfSKHtRR7V7betiZvLe695bZgzQNHpcFfeTaMS36hsEjBMio4kDwACceGL",
  "key13": "5mLxJTciaCCEHERMM4bfRJLXkagQts8St84Dn3zYosxsLcC3gHeXzZ49Dnjay6ZoSfkmzdJyP2sPHja9EYNme1yV",
  "key14": "34kPmvbXaJA4dvD1ftA83EBtM4NJrHrLQc1tjyMNZUqJBx2LAoyfjHteMk76iNo92ZoXp26sD7EY6iZipUCnTkxi",
  "key15": "4AE2dmcwKT2Q3Mfa4NMUhL2iMVx8JV6iAHGftyuDbxG9uNGKbPHPW8fNSPSQDzfcKhLaoMHMzaSWqyLie2Uuxevu",
  "key16": "1ntdegUb9GufkQidiubXksKnZ7vkaBaCrho6KuiToykkrtehBMFBZhxjxCEjsEgefpZ7Mo4RJ4VtTG73uq6Qj1T",
  "key17": "4e6K1ZF9ZcuFYb3JASZQpW72poNXiRKCf6LkZiKtvZxApX36PK5mkbC6mRX6ShPizVkrnGwPn9vGNifpCZromP1Q",
  "key18": "33GonNxsRVTsTT9dEVSxxy4pPwmK8nUjXHWWDqC6Lv5gD4yMrJhekrAvuEV2VuHg1VGs9bn4hyQiQvE6HE54n1mf",
  "key19": "Sif4m2h5zQm4aiREaL5DSLtwpZjRQf9fwrUunpBhRAhEQWMtYzuWn2oQ26pRmWF7ngUHP33AWGoRzHdiLCR5hGB",
  "key20": "2yD3taoqCTtbm7WKXvb9JD5m9v6gHa9n8mmTJcU6w6hgXm8eFHKAxtKMrT81GS7igH488zxAgZWEUJgDDLi5kpWy",
  "key21": "9J17iU9S9M9T3GD4mrn2ZfEZJZ2qcvkmfsF76nxhzQYpg2RKCoNGSexY1BmL26T35uC8FJWWtmTEzo2j5b2YUQT",
  "key22": "4kRsRv4sC3aNNDJDpd1ZJYPcDqU2Su5GT9VJpPAgFQzfpNgdggaXt8tdqm2v3WT9HQ8UtTNgfoipa24ChKgSbAn8",
  "key23": "53Lq3Uju1tujB5Kw33hDFiVyEpLRGW6Surc9iYVD9ZPJCwuqgoizjvEeijv2ktBejEUd7iU1CiSSeVVDpjg9U1SZ",
  "key24": "2W8Mkv7mGWWE3bEvtBvH2pbVRJnptwGpAXHnC99hy8cKGt7iecSHg94gew5x7ZZfwuNYYqaegYMNifsNJjfuCzYY",
  "key25": "4WitUfAzVXEJWXXQfAUwipAHwWTD9n4KCaxwjLqGwEtLLGtXxnb8P4gicxDnyQ2fRb6aVVUW7D67vn8ZKZXEpDqV",
  "key26": "Hpb3Bq2tJf8tdqMTUMDLtLMgUZx4raivmmUf9TX5pcAq8wCb7wsTVbL2UWrk1ZPu8cni4xaeVTLGWPoWkQHqgvt",
  "key27": "5dw4Yn3fxYSaRL9vxxa3pAsHnrVPQup5e43Fi89Wwze3QgyRcaL5JVpHQ3jBmuKY2ZXyiSb68CL4xVmH9VuLkgcq",
  "key28": "Yp67GL7aALQUKUjDoX8Bz4tTHkYQqZ1SMAG9YCrdh1darwNwCRvrKb2U9Cc5FA2n8rcBufGTugSZdNqcAghCS5r",
  "key29": "5tBia6eHqGuxuL8xwve7u6xJLRgKFzwQ143vKLQoRBUHtFj7pGs8G3e1JtkLaTe1HuSErbboY1H2c1RD7cyFc63E",
  "key30": "2GutgMKs6qUoDD9GSbmyG899QcZfVCxej1W9vgqDejFGL18LdMPcJqn4iGpvA1j3nxLtjptJcK7df3R1S9AmDffA",
  "key31": "2DXxzBj18e1zuufD4W9jLZFPCeCpzDYyx3z2ieb9jqmGjCSy5fsAWhEwThcxMX1VeaM6CT7QRkU4gfz4YGwUZAva",
  "key32": "4eeLDYRyPTXmmUCEmabSWzoiXP9TPWPRDMPpAAqHyVPxSXouf74zQQhaSZktrM3JPUZoQYnEugcEdM7RZspwYuiK",
  "key33": "5HNZzELpuW6jxUPy9h6Wy5H3sLWNH4tXrKifmVVopNKG1DEt8DBNa6LY2iCDpMW7b4KvH6vy3vAszdcTspasxrQ8",
  "key34": "2nT2cbSLeEnePGs8SS6voFWp8vjEdEZHF5raipSxcuQLRewXfsh74mRWnuSeZrEwcTRrim8yebFy2hEksV84M2TE",
  "key35": "33u195oqJBmRbRBVtMMabA8abUJKsBzA4a6fkF4rvYbVQyWwoEyK4VCfNNrx7C7LuXLahJjked4SdgsjhcJDosc1",
  "key36": "3hvbtRvD49cwTsFW7w75UbhWGAoQgyMoBkVKyXGvkoasn3RwNNZ5sWxZnFkXezStPEnVkMwB9a1Yo4JAN6542Pan",
  "key37": "3eXVhHuqABsQ8soTE7S7oj4qJbnDCFRQ6tRFj5V8LbBNgfPLZX6zjbNzDGDudwqmWprzTe9YGpgLfGvgf3h8UJcY",
  "key38": "61daUAxmw2d65LiYEXH2KioC1dbMoHzS1xc3LhNqA23q9mTtLQedMz9x43ugBJWK4Xn2saB4wCokXJRJ39AUK9aL"
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
