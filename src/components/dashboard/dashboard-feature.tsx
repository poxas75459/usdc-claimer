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
    "8N9ENCp846RykE8F2Jykxr6DzDK4mGL3CRbXERaHzMTaDBNVXfdhypGikdqgYHB5TT1dNLMytjrzmnjTMugDYqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vUkLr8qCF88HG7Muv1WE6aa83N346Poe16Ru4uVDZ8AYXQb6JddNznDAEGaxEn4EJnpYi4avABEivDXvraCtYWi",
  "key1": "ymCS9AYGjzJrxeDVvmMY8sKRQMWYWr473yUhrmmPTsTXb1FZfq9ntcjjAMN39Nw4Ncs1kbDPB9wCq9stuytypcM",
  "key2": "2yE5u3pCuGYVv12QAdyPqUUp8TKsDep76QmRo966KpxLLg59Lg5WRh34fSgQEAN3fWbXginJ8m1vL5PStQ4mdifr",
  "key3": "2hEnbsqdXU73V8ji1uofBdkBvJqdgkHAq6NZnJSwCUW2D6sV9u5vTEfD4JhqDyVTZdRfSXeTyKnMhotqoAqsq3tH",
  "key4": "3TTiWRzvyMYngLUwsH5p8ENFd7L5Gqt1wckKCgXLXTFdSLGoyuKrHJuiom2iKZehdT4Hd6RVcHHNPibivP2933bv",
  "key5": "BJgXYtQ5XvS8fLyw2a1UNz6c53Q2J9YRd5THiRQLKVWwuDko7ABh3ZvPZ6Sxf6Vy9TcR6BSZLuhnYq5b7hUZzMS",
  "key6": "4sZRdBeXHsthnhA3X8W3GYADtURPX44L3qoeFws1JEaE8AM2u9Es3i4MvjTggva1xs5WD7sd5aQFs3hszaH4zYrG",
  "key7": "3LbGN1aE8ParBHRiXq1D8zuMR17mjEK9u5P7wKDPdrwM2wAei3m8fqCG1dpjU1npR9ngVeTCeoPSsdCJMU3egdz6",
  "key8": "5pEGhfvcKyUnB3srS7QQTwLKStVWp4sqgPPuEwkjBw5KSZd1nPSprxUvJcT4V7nUaY9tj6JBmp7zoi1XNQufDuCh",
  "key9": "dXP6fvkXJWfjQ8BwWxtyGYQ8TXimHatiYCNMZE2yhg9PnQUHTy7VgjdgcdeMg7vbLowXQ12YdJtSL7qTZxS8o7o",
  "key10": "3VVrTx3JL6akyFK7dmRxB4iGTAwWzF12ePMbJJgJofSBUhXh2qh2zYYHNeEfQ5HCQuSPCC9PSW9AU9hcX7Ae2kN7",
  "key11": "4s7hHHubuTAvppBKz3kV5opQJ6ycpzMvAw7zAEhkKXRNrdkd34MrLnaDsyW44RT1qaVRFih4LRVF4RLHBwZgbNW2",
  "key12": "3tW4kKG5nEVbFKFUYuHaZMCV4jFHkHSJ2LvSKJsq6d1NBXkjSpn36cgCJZ1Vsfx4dUzfU8kXDT5hgjjU712NSpyF",
  "key13": "2z2TfGqHeWSzqaZtD3ZKfdFLrXVQeXiMKd3sbHeXpVTM5EAqdX79LAuMpeBqr8LbnRkkkE4gC9mhnRjwVACkoEn",
  "key14": "EgqjxT5JoJiiPgXUt283JzE54nnFg4H51YpKkW7enqdcxsNWdiRXfL8ymrRwLSKeLBK8gPUCzcxKquGnuFFrbMD",
  "key15": "2B8Rz1Z7mPSQoyoBSMaAcFU6fLuDB4GxTzwr4CZbuKzWC6U8GjZpQVL6GNNgmttVeiFB9TGXtKEQbjz6QxAjmZeH",
  "key16": "3PP7djHD8cds5ax3rmukU2Qbv9BJ59Cny332DgwKfAb1zC8HPzfnmQYWmxMZFzJQrHmoqrf9wyDiffpSQAMu2vpw",
  "key17": "6oBMQGmJyLeKvHcrddg7QVhqyTPfT7ciMEzsyecXJjDd8BnGAG5sA1VE6fSwxdFVajux3wo8ywpmN92r4Pepvez",
  "key18": "9p6dFjXJQBu5vR8gkhjHNCGnTKePNu4v4Q7Gpo77cMWBKWkdbtPLzDWFjgyqNPoxa9zs8DtgRNF5vRQyrVrTTGP",
  "key19": "4MWzfARKU4dxAcbKRFQZEe6D2qER1EWWGDh8xyFwNL1vy8pxLXZufV54GuW8HdEFgkuAF76rEThZq2CzE1Lo8LdY",
  "key20": "MLePpaAaemghG8e3q8gLRZbyC8XhdpQQr5nTaGUMPc7XaxdizkeiwCTdMqfVMe1aa9294E4akY3DVwCio6R8qnf",
  "key21": "3UivXFQz7rnotxDGtLQW9AZraA98m8snHeaFfd3fY54fbZHq6PPwNfF57ciYrNfX1ENqazXbWToxsxWKZPm9CjHW",
  "key22": "5uV8M4LUmESgLKj4dt7P4DyNukwNMicwdngagDz7xE4aBEAL6ofu1K5EgJJnJr3Vk1G7YkUhawUVDCf6UtpXC6Fn",
  "key23": "47zfEkDWDCihA3hT7ELmtqZk4fWqDTb6Jg2F1v544U4z3f13F2xY4AmKT7YwkzSpc9HRJbCMmsrNjY1diWyyHBGw",
  "key24": "35Jy67FJx2SCvefMNGBdmffYP1qnMQn3BNPd75BqA8Z2NqhDvVXDhsaL4UL17X48tvRa5HZrKmBG2JwXY6nvh4P8",
  "key25": "4gNUujWUuTBcmfoDZ3eCjEa27gi5JTwcULYkHTJHyke5cXonBC7nE9aS2yxqMJTCCr7L4qa7Y6G499HN483NTveB",
  "key26": "4M4R1wW8RaJSeSrPQWk5phYfY9SUk2s5XJk3dL2aB1bXZjuPNVFC2zCAjwtuffHmesjWHEj5sB92ijynAP9fJdkE",
  "key27": "3X5TDjNWjifaPAuRvSt6655wknWyJPGGWtUSFkb56rjg9J9YHa4NqmqTgrseoEWJvdFpVkFYz1cNgn2ewttjvgnq",
  "key28": "WT678suegj4b2GL7rKS8hXwfjWk1izEpGjCBJf6k2cxAjwPC9qucqGPVT2ooLGUg5qUVSmdfGee5CJ5T1dkyZ6h",
  "key29": "S5WipsX4B8d38YiEUkJfe2wHhws26Zgfmgb8qZNMpdPN9a6yEkp4qpFycejReLBc6QjRJghsBB9vpEvduYD8uk8",
  "key30": "4YLxcp81tZxvQZVMwbojf2tf2eGEZRNzibBiHcacVkKAHVtKwgojVSw4NkwjvkB8VCzHpZB3P4ARjfdyA6Nw37NJ",
  "key31": "Jcbb1VQX1WGhXcfaqsnNwhVrgPzt354dzUVEG9fErhyu6B36kSLrCws2wh3c8WYkLu1t4Fs7BeeyeM1aTqnTPyJ",
  "key32": "4xbnibftrP6FaD2xCLC225kLSJUu3XN97xZzAByYgykVxLgHp7JXLYyqH8v3uv2mbcjHagARKScEPhb5tGqgWm5h",
  "key33": "5A4WfEPP9nv3MeVW4SY61ApjFd21UjnxWyTfb9dU1X3oDUtr3sF46ai6KdnCqkfr2xYoMYMFKHZTnJJfYL8QuwX6",
  "key34": "3z6eE8grpEabqwqTpS1Qpm6cuzMpzaGuraXJRyXTqGujTjBbKzPHhJtbAs9Uq4nuCHYYsxuTTn8jZgu93P4xqMai",
  "key35": "3e2uXDDPY1r9iL51NXpMRDUayZVryyyjAbFoKfpxc5PctJXzBom4vhTVzGyBcsxAugpuChskB35Yf4mg1qr34Yu5",
  "key36": "4MFroQqSvK6WxQf4vyRcoWLCtz5LieWn9nNAggHReLK2VNTTSC4saWajnHy1Jgrr4R8Tm1S2ergJUbgGiBWSqCYA",
  "key37": "AZE7b9d2DaUg56Z9Eiv9fB5z3cwMCPtsQBFCtAbUBhZRzxqgkc5Nt5fDzHksybkgocJjkSSKK1UAKDenv5u2BDo",
  "key38": "9mwQa2YHHUuX4H454K9st6om7wrFBLVcVVarF5kVb47XZ4wZAW5yZT7HRfjR6f5kb1oMtq3EXGEcSW9riByGEME",
  "key39": "3NeoxDpQmbpgRoyDxwz4x3eHgt9Kkv7jzvKnMnypTMXJwnjjZ4avz81WzBHyFNDd9jtmYbzP1g9yEkgwhVtkN5TV",
  "key40": "b2nhJBNhDK6t6jQ7oeiEimpmAwtt8XohjiKTbFo97Noz8ZyV27RLY49Zi6kogTU1ZJb3K5RUPQhyzpPaaqSAgAK",
  "key41": "64yTCo9iXNHPp52XygkxNK9opTfia1MexSAtLB41GiCmHyxQpviYQR8GhXH62tgsYDiaiwrbRUAXzw3udefqUQje",
  "key42": "5KqqiSj9XaQ9SuPf9ZxDwUCVgsW6FvNcZ6wzcNjJuruavVC4kZengnQyHcJfzAMHE972tDMn88tA1kfZgsq3gUCF",
  "key43": "3FxUFdNuzjXZjAMy7CHCetts8NpPjb4PNqnR2HA18SWwDgDGG3HSPYZExUxu3Tc8jqVJvMwjF5Fy3mzANbSx1Ha1",
  "key44": "2vE8Qwar6njsZzoJMNZLURffCJnFLeqGdokAgUSRpNp5MqyBcLxiTS6YWt56td91xAoTgtb6orAAozMeS3yZnU1X",
  "key45": "2rSJzMMFtx55DU339tu8LgK7ZcGEJK7hSo3BYNrgg5yMt3djUUsjD4v28FUcjzE3dZJTPSobJ6UrZbX2es4WASDt",
  "key46": "4fMMfsFy1DphEeqGj8RhhuDqpHVdxeTpo3SrjLetmmYRfQJUxoyfjcPXJpSpgNtGqbS2Db9VSfzhLL6pp4oyByiH",
  "key47": "4TociXrUiwDuYm3hHjVa8C4xNpf55NFy6ELdjZGpAeenAS6qcMsgiRgUBJ6vfPNajjDPR4mSuSwKD6P5bgLRwhL8",
  "key48": "99PM1bjdYKZz2gU58vjQtpqxJ1k8ebdwgNhoi9hGH6Zsr4wDgaVGz5agFY5zNuNVjeE7DiSQDGS3xeb8VSCZwJf"
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
