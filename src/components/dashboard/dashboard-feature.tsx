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
    "29gfmLtTKsjPD3P6wJnzRmC9McbBi4b64SzHr7psoQqkezWpUrcnrPCdePq3cfGaH2puc8NsjKakignB7KyTbW3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23m5mEtcWFUqRXwvh6mSByWqhaQFXAnJzxxu4zb2ai7fhCnYsu2MwnwRbyg2gtGZV88VaWGg4Z2UurmFssybcav8",
  "key1": "4YoUpLAcBVuudSqLHkonoyvSceLoXM2a6Wyy4SZg93yrZX17jK8hTp1YHnStYbYJSw2CMcRANfrxcWirCZqUdgWC",
  "key2": "3VA5e3PRZ8CEfAeCyM1Rw1Zy5ZD5kpFd4WGJCpsVf1k9yPMP5eJNXG6TfrcXR5RAB4SYvkSN5gYFkC7mhKjFuDea",
  "key3": "rhoga4WAC5EdkeiDhSB9ehDEK4xKiwGz83mhgCbU1atuaEx6i3dne7JipHSwemnjKTwbvDB1oxpAgAYiZiiw48g",
  "key4": "58oRPgdDGCcZcc8KhyS56Sk6prUrrFw4Q54F6vrSUCKHHe2eSHaiSoMQJ4duPLprL2Vspe6EGusV8PNShGB7NCG1",
  "key5": "5oxnfkyJez9ZJrt2z3Jxsm1Lge94v3e4fKb7M7SH2w2C3VSFgKLr4Xv2bHXnegqxnH8okztaAHbNhZx9fbdLCQYJ",
  "key6": "G8KdhSVJfmkMZM5dG9EBqD6oGmb9QfD8TEAAkCNuD5Lahk61biH1V28ewhWLQHWmVEoRTNj1ze9mXHQxtMgnpNZ",
  "key7": "5EUwHSRiE55K9pm8JxQ42V2PDU6obpkk5iBKDZbPqnQ7vh6vUAePiXHXYqo5GMqRokXNkktC6TGpJhjp1ryXBrvR",
  "key8": "277t7dZRWQUAjiCHfjJKCkSwdUGmnXQJocjCYrvdRQQHyRGjkj8ed3hUt4AmcNMYbEUVV7wB1e2GwQn1sxgEgxCz",
  "key9": "4ZnTiQMFzivwFmkadvXbmm2jpfDaDn6ShND8oKyXDHAMCc1JC33npebB8TGUH2JD2mdriCSPrTqx8vxCAs8fvU63",
  "key10": "5vt4AYjbFHfa6aFcNLT6gH31Xu9ouVn94NV1SCN29heZrYC9juHFb49hw4dC6T4AriBT21NzzYvBUFkrPyKAUURA",
  "key11": "3Haw6G84sEkQpJRhqZMdcuSNiHa4fm6ZmE6w7jGtuxLB1iEhJVLF4Mtgy6xHGGbLXFZJMPa4uXL6BfoNCHjNn3HB",
  "key12": "5ATqFXH2ifZDc7YNYVjZc9GCRUSGCZFYkQvVGvU2hpQyKB1hVU8xRZ1d6vmeY5cjte243rXMfdRwDy9eCGu47hEw",
  "key13": "2deZHP6pHv1GJ1Hi97HJb42Br98p2mkcBoqmmdGd1nk3Ah1VSvceJmCyse5N55LgmuDqdEvCDqDcyM3XhifRZdrx",
  "key14": "2hC8jSKQ62dB8TJ9FWUMSkwDYeWLjS2cUCkvSxRaoE7uq1YhGPBgazCYHbX9rPDguDoKbTZpS9336UTBa8Ntyz3w",
  "key15": "3Pc33rp3WU61y9b2HGbcfHocsQWE76SNtiKhAAyUGF3ZctwrdsRJQTjE6o8XMUTti5kpBjfr1cPf4kYCzWowbb2U",
  "key16": "5uy7KhuU4DWtETdHhzCkn4c7XUdDWzLaEQErbnyvensYrXz74gfb8y32bmEMA9VGUmjB9UPeNrkzYaxLCdoeDiJo",
  "key17": "5NoYHh3ahbvmGeFQataGZXhzX2b7zZ7y2KJ8uHaCHydnw4EARiRtC1eAE4KYDnXeayrh92AqrmeTGLPuvahj2m3P",
  "key18": "4w4rPNCLdjjCDGn7bswGqZdpt3JsELAyuFREGz9VcwsJjnK5U34yWGUwKWAZN4MRVbRCucF8p3ehXL6pTYxzc8fp",
  "key19": "41YpgQQysRcKrc2wuo6X8Rw1pKR3NS8WsuFf643pWFvu2MT7HJJNJj24L2bYWMuzw8SLLXYiKwWMb34VqxZQAGLr",
  "key20": "2iFmSDBCBm7CzX4AqEca9W4XWSao3JWYLmHLrJe7BBR9pHwZzo8jvBTFY2NvZopFgLPUABc3bhsJMD2wmCfvsbYY",
  "key21": "4f92XFaQGoqUENFU7aB438n1Vsa1oaZhYVYv25sypEj8eTScNLSE8T9Wz5oKVnFKk3DUiZfvpWhgXegS9dYrTcJT",
  "key22": "2z2SHpacjGhZGRnS2J9UkHECaVi9URFiowraDuV7GkEN1d6WBp469Mm5fXwkAEcRLcGxxFfFDSRr1qFdnTBu1Ny3",
  "key23": "3Ao7N1xXgExzsQKXv5QFSrDPE7JXtSCNJ1AV8cCLp4xWqJaQdZqy23Ta59dmfJNFdYMNmWeGJpUUpLo5NnUgjEpc",
  "key24": "nVtPyT5dzHUWAApVYvjdSjn6E1cydtK3J5qWNPVA3LVfXf15RWBRYnwqWaQJf5iq6TnpKBRRy2gfx1QB1Eu9yjq",
  "key25": "6cCv3orVLLGK6SQRzfS2vM5AuKhRyNnXiVkqP59nVL9f2EP8nXgCNopi7BKQCCQkc8DUMPhy9P4rUmsa9Vup1ai",
  "key26": "4D6Gj5igaPqfrvhxsCX74KxGnzBdcoKg6Q9r1Qxz7MRTpt2EetiYxjZvqrxCQLhPoCJEzhAhuYExoFMv15oaseKr",
  "key27": "ujJeWArREg7S59ZHn5qxmW1skWWw2h5Nn19wLwWnh2qhnk88ZpM1xUZLE1Jkss48EeCdWxUBErCL9ap7vGtWKrj",
  "key28": "2xwfESqxa2XwC84TVUwK5QJ7MaHGUb1dbUuXBW4JvjXGULR98S1hGHRYCbvC8xTTKreMtBfiRati28SZXFmdDCM5",
  "key29": "2xMproqMt3KDAv35f7x8uhwVdUg4tuhaGnUsotYEoQRbisurWtjrvF7nFrPiazfuPXd1HxYAyYxb8sncTTELcsse",
  "key30": "z5V6oCSMQaZgnLDN8eJMDjgEw34DdxC9rfR39Zeet4reGzxUURGMAHzY3AncvdazEiemCxgnAd5XFDSLJ1mNoXT"
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
