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
    "5urwJis4PT8J7SEVmTbFiNSxzxRdXuDfiUyk8on6TAtvUuXVEUkF55KpZH1y8LdrBb5kKARkFVzTqJFXFD5NGXyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJNJEp6fL1imGgYWvBSA2wTpj1jmzXjLoyiiVtBAiAUdBybc5YsTFYPYjVK4Riux8hxU4QUfTgbDSw1KXwYHneg",
  "key1": "4uTYQAsg9z4DCXtGiNnGTU2YXhAVcVB1KvD47aYgPkYjie4JQjy4W93ng4m2T83LVk4WNaUyGaPXiscMag2Q2FBP",
  "key2": "5dgdCaKBuuLdhmatbLs53Mhar7Drpt2azyjzXeG2bgmmzFsbvVT1HaH4GGrEUAeBaMFv3ndpA25RZU18534MdDzU",
  "key3": "45AZ1CvioNbCrATjANAo96AhEcfx4LoR41VjyZEhhHpdQnfw83W5UWDrKh7bqPKnN3zVBUvR3KhdEtsmiMER63FY",
  "key4": "5nAWJhggpAELpNihuF19Ms4niP151bqwMYyRK1MSruGicFmM3QjMDv4srZsBAVQti4NUV8bcJuL8WDvz6GTYz9GC",
  "key5": "3UYXSCgTLK1U6VSZsBLTVwUNkTKiBAdvKZXrKeps4VasPdWn4Cff2yG2Rk4FmVUTNHWL1V2WHnHCtrRMnTHZJhaK",
  "key6": "G65B7VoRQghA2cqyxtZEXaBXKthWYNvJdCGmxA94eKjxeucHPCzPaxWadw1LFYoiSrEqKhZEo9Xicik7vobV37k",
  "key7": "5dV86t22qFTiAHd9LfXS8xQhXJ8xib2Zfmu5HvpLxVDc567NFqujPo7MgVgradAT9zMGhV8ayWtapYuSLzFdto1i",
  "key8": "u5FiDjWAQ46wUnZQUtXXTpUkAJL4Ji4oAPJku9ju66R5MQQCVougKJ8S2xVkmiH6wX2im6PrLh3CBb46ZUVgQME",
  "key9": "2bbvzo8TsZwnoqVunJkmy6NsUAWJH5UiTmLx3fJRPiMbmJv3tjHytVbRKqTfu5kbEXKAVDaXmQDbsgT3TS4iqBDx",
  "key10": "47v5NHwmAhuod4ZauZyvRGf3azz6E4yv1Qjpf6jyKQJik59WtJTu7PJH9HeKSQdsmSXM44K1CV7FDZTjmEZQ5UQG",
  "key11": "2bcuVfjCwkDyrYQhT7tKQqkEdTbUgkue2nZLT5zy9AgyFuPeaQBVuyybcSbGKWVnmhepnM5JCTinVe4DixuFRPbN",
  "key12": "sNCuuGDF7bAu6GNMHhQyVyMyYCMW7G5LqYbnQCKdDTiSTFYysFdSggoN1Tthq4Q9jqNocrnnozSzp6BD698yJjL",
  "key13": "3NRsyBndfXB6j4KkNddjjH4FobCGnqJLeYpu5EWjM7tssiixRKgW2cAPLe27ugvZCrSyMBr16gkD6mM8PAbKagqG",
  "key14": "LA7Wf8k6jRLucMKsn7Etmbx1rGuYcaDKocfiUVJMpfedjNMLWMSi7mP6j96qE8Zhsg4KsDCCUYoLv2gxLMyFz5c",
  "key15": "2Wj33GHjCWundFioaxzm6ttJVZ3ec7QPjfawisZcSYJX3WDiykDwwweUoFkXw2pXQxSdxHFoGB3PKBRsNqkm7w6j",
  "key16": "3GRd7MGyLS3D87S1am4r5t5dj8ry5dFxASTLc1jv8mb4KQQRQqhE499G2td29NNFPVbLzQmoVEWPoc2xkHMhgG26",
  "key17": "2URenyyLqaekuVbpeXu1e4mgEzJwBjprbLuR3cVeUjDFspDxKMPoYx7MAXpZG8PrmP2QTdjNVaaCauBYhvWXd7wz",
  "key18": "5fx3Sd4uERzZmPP4wF3FBHyHL3zaWMNbrs8JYaXLoMnw3Wyyo5iqGTcJktN2JvWB6ukUyuVduH9pVJG3GQfxX2AG",
  "key19": "3WD4FMBFy7d12fq5JDZjWRn5Lt6kKiHfyJ1vZCZTCkAvQzkrMF6qTuAzU9qnYh6SLJ39qag7PnThHgUucw4bYAJc",
  "key20": "4AVNXmzKTUKWMiQcdLXNedLc1otkQyUfp8YixLDzcT8LAWvuAGbJNiDXQqCWcBRcUTFRXdtPFhksbf5GQ9J87hfM",
  "key21": "5zYNGSs3Yjp12scwsd3DVuYFTzZHSyPQiE8oZjWthkERYUVvUdm6LdAPEpL2Kfq28hH7C1bc7dn3cj9B5L8sJdio",
  "key22": "4BGscTqCeXHEJ1nxFa1M5PybAjtNrbUxst9CMEiPQMYS55sLnnpSLHPgoWLTocRBLzhp2c15rnSNPkVEZyhXgmEL",
  "key23": "4bkdWcg1J6MHAzaHQhNU5eHnQnAPvnoork76djtWCsezeNiHdXyTcd7cwHDM438aoN5wjLzGFreKu7eKKptCxyrM",
  "key24": "3waHvtZR3GphqKGkn8jv9xxoviWza53MoL5jLiRMJwtpsBECJpGzE7FQLjJUJS61r43oSk6MraP9sdwnFFXd7xAG",
  "key25": "61QrXEGBJDAW1pkGBRpsHYZ2TFArADhHW16AUwSDQ6eMxYHfVzpkykAFiiLUoHqZQEMnqJzZKHk2B6WsfY7NqgwW",
  "key26": "3GkS2D967PepbCs3W4tCKXdK1ePunsePVtJmj6s6A2JAmHpCHC8XU5ztEJdDu6wcbatuXaEfpg2bjdHMqRKLffQv",
  "key27": "3Zof5HpMLt88cMnDQRnZMbxEGcFkFZU6HETHhUxXGy4fYqBLNEr24vrC3vEatdATKrrssPKb9LGMttRDXcgL4VvM",
  "key28": "qVTQDPrWJLhmdxh9CRRsoCUQRZqqMME9frNE6ECCZaEGRC54etN27N64aEVH8apN23sUVt9iFwbyvpgpfyyqKFE",
  "key29": "4KrDheghjBGnFTjYZ3vtFKYPUqxgAvyRjRP49N8HvhV3qaVGvZFTrvvozWw7BayDbYobTKc6utww5huqoqAvhSUM",
  "key30": "4FnFzyNqHmpNXvxyj7p6sbtaZR551UHbQ6y8dvH3dwrHDTNKWkV1NPLs7AZV34fXp3AvRgisL2VSDZEKuE9xSUgv",
  "key31": "3xGriWuc8Tjr1c9XU3JLrywNwtKLvTeSVVSujSMSu2WZXqQkunZEi2vX6Dhkgoy9dziYRQZAENx5zEE9RSjEwSpF",
  "key32": "3oJMgGEyALjPTN61AEqxenjmzDDcmCUqKJsZTqLQ1XR8wHMQhTyaWNj4GnozhwMg1fj43Hn2kmd3JTwcrP6HnfAx",
  "key33": "3HMEdTbtnC6wawVAQmLFSeAt66sjh3iA8AZoF413Mwqc74f5sSxsVzbwtAVgfvuF4BiyvbrFCt3RQ5k3jTTye3Xf",
  "key34": "5qArSL82UWXvYLjW4sJtRiE3iQoL4fAH799ezpdjNCXKZVhNqQpGFCUkxegvP2zrkraX5iXkRBD3j8EqfwENVkwd",
  "key35": "3nCnhZeVS1Tz7A5AesEJEeTkC8zRtmJF4ifPgVsYTPsQVbFtgkC4NfVgay31hu6Se7azMXNfwduRESWNmEdmkEC4",
  "key36": "5hGwE3uGRQGZRA7JMXva2Ygn4625wqWk5U8nJCGT7WiSJAtLTyeHgvrg5d2wDUTtXTNMyBNAVCD51NV7EWH7Y8sg",
  "key37": "2UyZLrCduNX3gPYbwjsuNk5RaLouuyLFb1TAGQStxrHt1cpaPL29ehcRXdJnA5o6KRd6KosS4dqcYBnmPDmjPhR3",
  "key38": "4LoY2CsUXuD3b186R6J5CAUB6s5hN1F627BtTnU8itZKPbGkyWEr1ERN49kxQQHCpHK3tgPFWtazEJjviNcT6Wo9",
  "key39": "5MjgZvcjKwufUZxBJvXpRAovpvY7KLioAAD1Q6Te4ixJPg8VYec6e3b3DLCfCYcY9TjHzvavxxACD7Wm7zmXRRpD",
  "key40": "5htmxWQdBbe7DMYDgYniSc4thV93u9xEC7Nu5X2xxM5rEBJSKzUmD194Y36UuCXwENiLbGXdyN9c1yDrLrH53MeX",
  "key41": "3Q5ZqQ5agmhxVEB6cpKJJhNYzGzEyLLENz2pMZJMutm6RJ4RYUvLfvujRWBLny6dZzrei5F8inpP5Ky3x67iyrH",
  "key42": "2i7pAexnUiHdaUDohMGqef7EGUXajLqtrC1daYNTNRUhw4QwZ6NAfd3Eb9DtSbKfVwHXRgp6GudFhmrCEjVVLotj",
  "key43": "2eunWnqnQQZvFcEYgG8eMaxQsG22pKsW21vtUr986pY4HrTXmhLFvZzgCx2tQS4AFX6QEqfaoY9iyMx3p5RASgwY"
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
