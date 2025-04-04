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
    "5DyqMgKmpv434tS1KvR1y8b4b53RWzKJVZ38NooNLpuaYcVsAU7fUro4dXm9qeygAVpjAHwFxGFbTuwLUz4V4Ado"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WfR5ZJuqMzCKhW4ZAbrxAUk1w4xqGTJ4SDruZHdTuAzS88wEGPjpWeCmkEAMfUVvNbVUht5o2HwcEs3uWfb9reL",
  "key1": "2Pf2NUSjNTM6BEKX2bSH9qi8kgcF8jQpRLHrTXXKWu1osLXJxmC243sWWDWzCuTtaAbhhZxvBAYY73mUZaGQsnSV",
  "key2": "5aHfDzorDX7CVyxPYhC1LwK2T6PTEEoZNsnUXmJ44SenccsKFeCY7QrvHMYUDuKrLu3jpVuuYDsoZ1fm34wKXiZp",
  "key3": "PMNh7CswjrKxocPfyKZKCuNrWWKPwSF1SGDYjVUqe5r4tos51STrwL6RVMxAKsgauxFjdJWHLAUBXnATTapxoAr",
  "key4": "tjBR4mKfmHEpfDkbMmoH85dBnZoz5fyXRbjUE4zxE7N4or8dAxRn9JN41x1msWFMmcT3k69fLrnZdg7xWXqt34P",
  "key5": "gVTTgSz9p5smgwoSCPLXETVwrZbbioK7FUrP6VF3F4W3znzG9ZrgbXgC5f3FLj29gqdTGujY2NtApd8pAv5HNcX",
  "key6": "4azhTj7shwXtpQgebYkFwnMuzBYn7EpNwgH66g5jYba8PkKqJYLUD1VPGsmtwNBRoyJKW3vqF8cB8Ym7NNZh3voF",
  "key7": "3rnwMUSrm4nadmCcwy6k69HDkXEpc3MurZLKxtcqAzVGV7uPE5ogwMrHbPPqD9TS6MaSfVs1ka3AvTTntx3XLZxk",
  "key8": "467chyoiuR7HGWUZRRPdFzuCS18BrUwWUTwFvH7x8oSQHcsiJwQtw9GCMirxzXua2niEEgaPVYzZBiJ5z6nQCjzN",
  "key9": "9EpphQjZDPkuPD3X2T15aHnLEmpYhuvUm7ueKaMBFxV69b3CemfBndJttSEB1zvetfhtitNWYH9cPkgGZU94wci",
  "key10": "5YXC7MD7BtA2ErYZH4rVqp6aE5HPvsnVNBtbXYMh2Et3PmXS1qhzYquDgPn1qzEVCErDSMgpzHboRBov9qznTfB8",
  "key11": "Xq9NrvYUNpSvDxnKyUp2cEKs8U64PNLV7aN1prtrc53jnjv1g8piKGUrXZVRcmokeaTAjmZGjzUhVNDNSfnp4gi",
  "key12": "ZWdgafSqwGqrP6FrFuYQsPLFVAtCGMQvKDjURnbcU16pyjmVhXKctWnTwrBBtMnRTMUNRqTPodGUAidqgz2dUk3",
  "key13": "2bFCXrzS5NGFsmhRz6Mj5UUbT7to9JUZ5GL6NXrsLQjNgQfP51xvEQFcohFTJBrr4srzRejrQGdvzGxKQmBzfM9N",
  "key14": "2q2GvJGyJhEQi8zRdtsxKGfCcShGYJHFUNTtz3T8U1niZ5UKSKuyssxS5JcbnwrDYB5ofdM3mU3bnEQPLfRrJWq8",
  "key15": "4AEnCu9o76S8UF8NZJWPkkJiwgJyLurrAvGvefbcy3gtnnsEh8NZJovbovxRCnFQvAWPRUeEFaM3s5RvgdMrPL6g",
  "key16": "2QuvKVfsbx6fukJX2j2NdafVUEd3j6VAnPPT5Q6tVjwVX8nn8JiH1q8NNBh6KP7b8aEWEXRKTkHnZ9c59HGisAmH",
  "key17": "5HoPR3FYHvw1ctkZakBZfNDXnVVQ2yisSFfXCd22s5M17xhPm2YZaAJdCmvpECccNoncKn7coj4rY2wB8nLQQjUn",
  "key18": "Znhi4xaEAs2dn4kqe5TuTtke8RsmHRNX3LvGRM8qP51BJ5kSUvF16FphUNFGhyf4tMxFakwP3AViqSQL7HCZ6Yo",
  "key19": "53QuBxUB56cqjpc6j7Yp4EBQcSq9fHkpg9kKXPJzhw1rZ7oPP5NMgbsEJF4Pyvb5PdFetfeda61Rc1MVdBLLUKFf",
  "key20": "4cKH9VngwYcXwJS9K7GAVmaqM2eDbnLg5r7qe9uwiHa9CC3EF1bfaaBkvcq3XT3RvrSEAajTfmtDtCijqzdUhRgD",
  "key21": "2zLKxv4mPF44K7Wjcuf4EuaJYGT6e9fAa6igXZgzJ51Kw8SYkbXYCwK1UbBGfw72GHg1hKUFF5s5gAjDTEoKpnsY",
  "key22": "5Vzq79AKqH2Wt1uwR2NWJiVEGz2MtGdbscDoPSwuMFDW7Lj5dArKKkn1EeSht7BREc5mpLtTzfLmQ9CouRk7HqDm",
  "key23": "BbBt84FYaa6PjX6U5uCJJn742qQzeoMLUsLgLsfUmuYhMdiAujynTcd3pj8onmnjud2Co33JBEAh48GYWf3LAc9",
  "key24": "32JsjEiYtQWeaTRcG6WSyh3dsRPBVGpe6CTDP5wv4moJnFhzxTvEWbfcJdXunG5jJNda1oZiWf9jwosG8C4HUtQX",
  "key25": "38xL4nw9HsbGwh5acJCt3gJPiDmzgErqMC5xbD26cXzdFKk9ZLcifJeGdmJskfw42aPQy1RVwxbcxQJXpLaZqQBb",
  "key26": "3RYtVoP28R4WeVrLJUTCRWGxDSK7EsDmBzYQhnMLs9GPwfBGExJccfjCXT6YBZ9kWJfznL9D2ajUAyHVfce45ALs",
  "key27": "4n1nBeP3pNqoC1BuaSddbqy3Tu8UiYR56xofzik9vctvCYPH7bWBv6JoptXkZnU6C9YBchu9muyJkPudmxcdeTpo",
  "key28": "5poQ3irdrfBtAWqHwYkks6WBZccDHh7TXiWV7SRxSfPoa8RwehGwJe8ZPUifdLpcLya7BdooJ33bA3gdPGhqY7Sn",
  "key29": "qtjyLjo6GpyV1ac6Do7e2yGAByopFBXUYRgiHo58BXysJxM88ERF5ptbzjT69jSowKzJkxbxu4g4tZEjuYo3rMy",
  "key30": "YVBNkuLkzW8Euz6ve8VnymKRdtWSDjKe2m3qW9RfAen7hukVVNqZAgiUBueMrs7jLEXNReBQwJ5BpKypRdRT4HG",
  "key31": "5HazRxpMfRmJBwvbrrN1EHuQDQU4pwdTXcd7JLtzJ4EhHVzfEYHEk8aDgDcKiWhie8DmMuZuczZobtXktwF3Woa2",
  "key32": "Wcyg3DJUGfMduhMS8T1Ea3HdTz9LiDomKgLHJYPGycU6saFhVLjG9a9FMmuK94BGAjngn7wXEiCg9aHBEvwNCJt",
  "key33": "GT41AL9Sqmwo3JAnLaxeTvVVQS2ggqv1VSLAnGuaU1KgtiL831tM6xuft2U9xzEkps62FtivQPQ9gem6VcKP6Ev",
  "key34": "4j9wXEmpTgisQ8BeHNmbua9PT74CC4Rw1Cgi77dgq7Qxf4KxK9u2mbiYLbnatrD9b8fztwhh1dGxxAQGXWm1dcmT",
  "key35": "4b2h4jLNUVnwkppmjBcWL6zCVoRTBN9F99swKe47dZfypFmpUHdR6E3xxAREQfTGV4RJgYJRFQyeJdEqD5e9E6bG",
  "key36": "3RXcAcmwiuBcmxRFKYQwrzwG79J9HjHodVSD8whYsxTtKqHSzWWR7i9DReFzGbcUAePafx3MxSiYMydY549JMLfC",
  "key37": "26m9FLF7juEo3kquAGGXxCqsRzV9TpuXMJGp9u45BRgJdWXZMTUHvvuMGJ6XNQZNvKqAYZaypaBAFeUCBvbzJGQc",
  "key38": "Nxj2877X5vGesxUTc8WDQCZ2e1aW3iAtsq3EXbB4Nu42zX1C1Vp6674JL5EzxdRxAMgFF6J5oKTedpNENvLyw7K",
  "key39": "5hsUmxwQZtyk5h9wmc9hAtFj1ch3Jd9NYqfrrrJyEj3qnTTK9Eh3hmDFxc2Mhi9HwWC1LFAP7NvseYxPDEwUAvhn",
  "key40": "4uBaHWf3fWov6dvNqDQkBevSbHj6S7YgpgqMZKEQDTKxfwPz2Qz3zBaaMf3iwHss23EdezLy52qkoaeNtE6qn39m",
  "key41": "3aioVc8L5oWfnTMtr9tWJKbzjYLkFCvrV9S3TkSiQ5ooVoVpJ7xdQeUGYRK1p5YyozhzR2KyjYhWiB3kpmscvNq5",
  "key42": "3SaX7VqfM6hgGK8zqcmc8scRtDbAoWoSdZiSMLNihdi8AVbcoBGK2rrHU5pe5MPL5WnCBZUEsHRxU9SDJUj8qSTA",
  "key43": "3MPbZgbtiTNfb5u9vLvSDPSkNHGQhYLfGAq3sJGVpYAnS29tquMwVoUQ1o4K9TPnSAvFgDYa7Qg8jEHpWVGAMjnd"
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
