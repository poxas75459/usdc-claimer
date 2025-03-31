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
    "5rD6zZpC6BbU2MhuvzvVDqm8bfVJRSnv8RXkFahFcwRFZ6aPsceT6aUad9Jv9sfgDdk7qtcbw1ht8VG1g4QjZgyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "473sDXW9Yir3PPc6CK8BgKdMgtbNymqjsqLc6Hfh5JEEKJrZQbrQMDQkaFdZEWqywgV5mX4ix22TJ9kEQQj8yypy",
  "key1": "4ZVr71TFPThawomN4hQYaMr8cHMWLLF637zexsimfFLSv7pPi8bq6e9gohvaaq5mMLG8GkZjA6Dya5etN7Hu7oiK",
  "key2": "5uMYtd28xYcWeK6JEj3WUsxGLfqSFBxGKixD4hGTAwYw2CirmP4crPyiJ38AC92SVr52rJdr6xb1yeS3f3Km3VGQ",
  "key3": "5DmQHoodgcQ9XX1SEW5iLKEJhXhZ1Xd1qgwJEcizzDeX413XS1pF825o7R5jfRvXAahuK7HF2vC2WXsWxppMWTc4",
  "key4": "3V9PdJGpKTDveGPFAuzY9uFitGHYN8JvLExvs2EUgds9ixbx4mnVgiabk2EQBa8iJNp8emmfKqajXQd5MeX9LEEH",
  "key5": "478foa9aevswF22yoAoBWxbqcdpDzvNv6NwKfiwzHjg2Ejra6qb4ws643jvweuCu5bukYWebZVoQCDjb1m2k3bHf",
  "key6": "4wd5PG3SsvATNwFjGLcDh67wgntJ2fbNeDvPCfp8cr9x16jQPrn3iJ2czKNrwqFDXPmPvW9KEAzxjTkLrSpiXUiz",
  "key7": "2uxfL2naus7pTTSY78PmAYFLEWonLtUj5LNivfGuD6LMsKDLxUKikJCmaWbDX7nNVSsieM7eDADjGo7FmESA11oT",
  "key8": "52a8paccHhL1daY9FJbzEW71AmgGVvapfLhLPdjUH85rqm81ug9i9bvvG1vTXehLqypBJWqwARVXiJFwVUyhELsZ",
  "key9": "5mA331xrG6pRpkEVVBmWS1vGpm7ZQcjUeYAWKB8hmNt2Gbk6jSCdS3iQHzkR5Mz4nKUfDGNd6j9aWKvKV5krREFK",
  "key10": "5bC2WXVZeygoUKCmpBUd7kWsPAFmFqgMU7XpDSf8VPUBecDN9WVjdfkUB8bwViHvGf4chba1aCsbNxGs4wvx38Qc",
  "key11": "4Ma7qH6AXLGiRLTYVsyX34WA15NPkUoC6RvVAtJF1xK7CBakrdWy5JRrfCVdw3JQP8Xec18L2jx69xZwh8ktdd8C",
  "key12": "xcfif1Eyu78X6bxpoNC8qugWh7syxwL714pM9gxxhUEPr5w9MebeHiJm2QyGMzFcbUEjnKA7tRJ83a5aUSeTQ4V",
  "key13": "4egCNXVRwj86KS5742iq1FaUgDuzFkCyQLWunekjRXxzWNzjr2g8tzVqs1kKS8VYxQizZUByzuaTaAKGmZ2MCV5K",
  "key14": "2UXyiLqVuu6ogy8SycvQgXTStica1qdq1Mo2SFziGbef8B3oyTmXsUG2ggxEw3GF86S8TBkouABtE5h5xvDyBFbd",
  "key15": "5HPMwt1icm24G6FYph3Yz65M2zSb5jzNZWrAC87b4Cgchsjwh8Y3gxTRJGnJnAPTrKEtZo69bZLPk52DoT28qLxU",
  "key16": "3U7rksoDyvgzQqmfWJVKdct4jdXBB5bJjLvDH1VpEMWtqQT3UcoUFP6CTH8kdf23n1c9jeN1hrS6vBk7gtQzfWqD",
  "key17": "46zHLssUCXcB9FPfNe1W7E7KUc4pnDwkdvHpM2XHisEEhsVxBjeqVXeUXub3Dqisd15E3PQXdDJPngamcfAVdwfD",
  "key18": "522fJvRuc1uGaE9bFod66Ye5YTfVumr1FSUwtkc3KF74y4yszyWJjASbZfi2BtKygAE95mWR3bQkskZNqLL1yQdC",
  "key19": "Gx49Y3cndfaFS2RzhUCCXGVGrxhb4bmCofPgQfSYz4kTRfbzVF5ZPpCe5sdqHqRb6zdSj9g2wijS5AioRKG5mdu",
  "key20": "2QTQF5hwJaVggrUhg5WszTWJme83PVdWhoVgXmA22PXLFQKS9mSeof9xqajtVasEebFgfG7L5wbkz9WZztpK88xv",
  "key21": "sbtVtbdYkjwYqhuJekyzmCqb5osUqMX9CUUcgdfbzaDQ9Jb2PcQ43VRVyovHmjCnepqaTszYsQx5f2Wq78WJ5bf",
  "key22": "3vuy4JKZdRdRxjjbfXs1oSbpRs8zjxtYekJqjZUos15XQCP4kYaskEysoAHQxDBQZK4JaKU1oy136tNrCF2Bckci",
  "key23": "4EiurSm1ASobgZdz8uvxCwT6BGY6GrWdwZdZJUQskU72TrXV6pDGQjSHWvLKRTBKKygc4zSMDiJszrWgeES9nsEf",
  "key24": "5Sy6DA3MfpDGM9r6txeUxsWjMtz44p37n3ejzTS1EfeLqvXBTzhF6cvs2h3Y6m6DgFVkRK2L7f3jDMtGDgtNaa6q",
  "key25": "6v7R4B9PsjJYXu4ftpnAHWhTrRN8m4XjPvqkV7XA6a7ZRGrQKmuD7zsdrnNGHjJXs3EQNESCPtbsoANnWQ8UpA7",
  "key26": "3zGH9TXqS9JGNvrnhUCkadqeYX2DA5Ljh2nWEATSrJPC6wHwpzFwHgNPBSxNWVZZZtJ7CVzzfziQ8neTUzARnPXT",
  "key27": "2bLDwh2kxQRkCwUZ7JUy4sbFnrrBi7rHNaicDKTQRUuzEQ5adjJ8yHjYej1XaLwf6SnWa6vWfXtRbPh5Nh8eZczW",
  "key28": "45Y4UcoBwZaPCGycwQVUpMToYiHPwGPPe9zCFK3UiNNN8mP1A59TaguyMCqLqbK9m8AbBy8nzMcPKkjsP6fSTSN9",
  "key29": "3tRwSfbSaZtfqypc7dvh9YqmhhSTh53fzjS76mWtBZ8NTciFxHtr8H4smjFKELTAHnW9QqTmD4CkPN5ixFC6Kpfg",
  "key30": "5dqAkPrLSrEPzCpjDtqMVfVfcv6cp1TA9fDjvmLEEgzsN3tDFvLoAN63xHWaEV1KKFUbiUJtjuwbZ4cuyfZ6XZdx",
  "key31": "48XqDMxbahusEPuCr3S31FfLSeLd5eGNzeMaT9YBqzowbbMaQYwF8ZwcUo6B9kTYYbQESjVTitsmxaEmbih9AtHn",
  "key32": "2a2cwCgNE5aLiScd3UgVV4txsMSyZBJHcj5sgmZzBUsUrxs42UarYA3mi1gPfTCyX6v72iuCHZN2Zefhy6Z6dPtd",
  "key33": "m9i9GK3dtJEqNrLXX1BVFZSdfFr6iW4NEYg1Wap9HcQbEtPTMpNZYMswtFRZPgAGk3ViJR7p1kJWn8GPnYuC9ZV",
  "key34": "3K1UPqi7b9TPXRPBnkqPt6pwAtUypxPBNww4bEQKvBMmhHWT3LWrGDRSzZStV1fPBLby29sKrxDeoZwrB2T1ecCC",
  "key35": "3pdEGcvY8X68T1u7BeHXQvLfRcJkkZhUBzSinqkQX2RGAvH8X6Z7iyhwUQM4wdafKjLNppV23HUh1ek6Bn7BfYKU",
  "key36": "3KiEJK674bgtJHnVKPhVQyT9QBo4pRghR1rCZuEwgxFUzbwAV8YSy4aYa3BJygwXRGmWF4vZQaRNYPytHuH2ZKvv",
  "key37": "Qk4mR49KW1J7RL5HZwc7Xh6f4mcHfvr1UPBYcw8xmRgnZGL6uxDDgt1qvdbkiCgyjH3ZDXS9uczaojMaVLqVvo3",
  "key38": "2aevJVypn6NDqs1wngJrfDLeCp9BowKwphUx465h7vSNdmbEhy8kzRMpsQwLMHUrBJf2o5iXKAc7qV6fNaLU8ydp",
  "key39": "2rqANKeEsECDdgjLdWJXVxDEKnPc1432KvExQQF9sLjyAtK6ujneyMc8RNsAyHMt3QdZJxcshiQXU5zwYjEPXcaE",
  "key40": "2mASbgS7UsBZEvaz9Q83eJ87JerJ2v1j4v6k8bub1JF9D7QbP99e4BMiVYNktpRFwmbK7PqZg7PAVCtdTRoM2QUY"
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
