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
    "3LZ7wEjiMkQogQbcAURryFy9NqT9zgWwVRHfvY2e3ia5jATZraUy4RCwqDY6pvsgp1atvnaQZdtV26X2ycm18pxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1EE1yohfbgxrA52mPGWNLciuHtDZKjfzbyvcyzr9tAoLLtKVtMERYv44FC4mbuqZbjkj4YRD9W98MRbJbQdbFW",
  "key1": "4vT4NuZt9FHzpDPyYia38YawcRDJVwEeEP1Ek5VqaGKbCyf73KfjjGciWooaGyf4JyGQkKJsYuriVVTPJqjVetf4",
  "key2": "wsczZ5JXvUcAQ8NEErjGutisPy1B3ZWVphKqzffvsjeadXdggCGNXV3EGKCgA2dgi2CzvXsYKQjkg5GoQZKq9Do",
  "key3": "61dLDxfsSDJi18ALsH6pUJBiaeQK3BERYpUjvMVP76L97RiLWeDQco5bvFN5EMmLVZFyEPC7z4Ti82z5MCeCDMXV",
  "key4": "3Q3LK1ATC4MV2qJ3VNVeHoF6Ht15wPXub2EhZkcQ6Rx1RAcw99KeazhbQCa6a1D7ecRWcUUb2XoW2wHEDZhagnm",
  "key5": "4QTrdavYCvk72De9o2bRXb2HDqWbd7VbYetxzZsJfMefjRkfeFtHQijaKqEeZfuYA4qnuiNzLJ4XQ1nbPoH4hcJs",
  "key6": "4zi2UWfLfTY9JjH6rqvRyEpgC6vRQhU6LmKW966dif3vEqugxbboj82ZEauUX5kRstmkrZwTUaGorZBXwUQ7uBE",
  "key7": "2Pgh9xmg6T5GXZiwbBZUECdcXGmCGUpty4oie7HEiv3Fr6tBxpTH2h4ch87MfoB36d91HiqquBgb4nDirR7TReDY",
  "key8": "5x8rJdeCUjtapxxk1fcgXNdvh8eehrNHdUcmMkUSTq2Y45f6NLQE1FhbD8QX3xx1PdYURDAcVPqXChQyTWJ4ukdY",
  "key9": "3QgskV37P9QewTu88cx3qyVMJYKPxLZGeztDdL1uP75aTrj9Atre9iZZhJd2DHoBuSUEXHFMjBxb1a1FtskfFrWw",
  "key10": "57Q1NMYKKxyqE4yfuDHw7zUMnHCSqtuWjJxGK3pLxKegpQsTeHFjPSTZYvEzcaaVrMBaixy1RVfojcyMZdgQWvbd",
  "key11": "4L65MsUKNj9Rm6wZrpZjxyHBv1hAf4RATvf865C2bqivtyQzciae61nv6tNbHhisbQHAGMeNjFDTpU6QHijPKTcv",
  "key12": "2bavSwhx9F6rq1Zn95gNvLvsSFVg5g7AxjHYzxMmavCYK2c2NtU2ky91ArrQJzo2N8NmgWoGFd7e73K2miPEo8Xr",
  "key13": "MJ3K5Xcrid26i11fKZmkKDv6tgHKoVMS9xVYAQWtXNvKBva5xAwroSDg7yfAuPb82k9xwGDqcM6eA2jaDq7R4H5",
  "key14": "5irGw4ryprLBQND1HvysmgJJFrXpWRVgZrodPuuRPNmwCLH331Pdv3NRUoGoGYxmSN2Ad2fq1R9ZqwZuYTBjTmwu",
  "key15": "4fnt61LqpLPLx9KzXSqZPvRRDKxjbw6PpNNzB4u3Eh6JFfXmpdiH5ou1hED7w566E3NfPTzkqpMpdjenAqbeh4SR",
  "key16": "2k8fVNEjtR6WJGG7xcGxBN2qKDbPcAhpDHjDQYt6bPauSMMqUasRGrkRPpMwnP8Ct7zDm1QSFjsCHMzYbgWGgKrD",
  "key17": "5QvZaFVktEZLZpPdBmrWjPeAQ8Ajjmbe7KeKnthWsuUkLBk1rpmCPdfknXn6FaZ9VX2sBZavG9JFsejEss45zQ6Y",
  "key18": "2isZyskuaoGgPhd8YFT3MSScKrGJmsRV3RHYFXTVboUtjWMYwFsCYBKhpo7rqUK6Rhs1ASUfM4ftCibo862VkBA2",
  "key19": "4djrRcZ6DdpTL5DEYGBKfMTYBKTUSffJgZZWJtevQbXPENXy317t8FCetEnMJPUbdbvSyKT9DPEhdK9Pzk8xTUxM",
  "key20": "313hBrrYrzAzCN5RGH81qH5h8sCpN74sH27gdU4F4skQMxjFSTdtyemSBZMVLMxbPvivdqPRmocMMeQVB3xPp5xq",
  "key21": "53vDbK8yTjbYkkfLKmApPDNM2Zu68tBrQxAp3YzUaTrREGpvM7MztDzMd4MH9C1RfYqKTFycaifFiDErETzgi3HL",
  "key22": "FcwMqKAc28vMLj38TCBN78FMUcQkLnYKiLPNJ4pPmvvg4xhHmNEQficBEGRveYUDx8695ffXxeFa8wLM6yPeLTy",
  "key23": "33VosCoB8yUqJvDESNkDhhtBc433rbxfQQLRH6vhKkoWwAA32YVPqUEfQhsehgozd75yDTH941uk7vpWVuMRWbsY",
  "key24": "5LGWeSskSUQWi7wGVTb5qE1XVCZD8bQyomaJuLj4734L5ubPKiYEDACSshfGJupD2rme7ikGyXr95eFVx71SGDva",
  "key25": "47aQTN6cGNnCeZkraKAJDsyTGKD31YwEsdsZhn8NxwC156d1UEEpDfdAkpCPoyByqWLap1WXb6fQbeDA5cPKGoDE",
  "key26": "EnamXWhw51jXMaL8CXhkB5kAot6CJjoSh75BAvv8odNsm3hc9rSVykJGDxwSQmVDYMfFkRo97QEWUGRZx8CemCN",
  "key27": "4ab8YAWTZbN59iCQuy7hesQzgUYYPXXcKcYwhrD6s16cEW4M7TJzAfkRPWCRZSFK1aGcmS17ccgvsZ4D3wHabyGL",
  "key28": "61LevUhLvHoWbbmtexLecxzJPFi5xdjNoGQrqBeUY64JDMfwfeGrHzfi8JVxyNLd1jAUatg6rQfApZCBK38GK3f2",
  "key29": "CmKU49quQG8Q5i51pNnPbtrvsmxYtwQKZQpbrHJ8VG46gm9ei4FKaYnqNkzaPFfdqJuXpPEB5qSUzYkz2chMWAY",
  "key30": "2sRwm19Ufa5fj4Kzv154GZ45hErL994rP24SUcsrXNmt34SStL1Q6hgZG4nWWuiiCaNBq9uraiujUfZuDbZrBf13",
  "key31": "fWxUDDGCUkPDSigvzFsJzu7UVaEf5qW5Gazfizg5SRD7itLVLznpWsTF1ub4pHEcHagXfC8tvs7oUEnPXaBqAA3",
  "key32": "5cq7zF2vSeEqewak54We6tiBbLQR58mgrmzvvBeeW4A9xcm8MSpRf5xWxzJsyA5if8Ua5wjtaEwvNhsrbS1kQoii",
  "key33": "5KSs7VGuWqwdPifjJVjwbdh3UUma4BzGnqxGk6tPBCUafva6K6kENHbdjxfH2U14qEUdUdxZd83FKrmwvtj2J2jS",
  "key34": "5bz5pCg7y2UpDf3apeQ9iB2h1CmfhcS37BQyBGFv2WE16VdsRN7gQecDymR6h2VSq1fCbShuvicX1yT6a43p2gbt",
  "key35": "45zypFNJDKuty9eTS5wDrF7niiaz3UKDinKjUbGfnq9nZU7xYdz8ZNav2Pgu2jS4D3TwxHLixNzni3FhG9d7mdJG",
  "key36": "4sYHgkdQNY7522bfnoDex1o8foYA4goFWw4dmYUbsw5JrY2KhQonu4LJgzXQ9VszGE87jeeHewCGRWCW91BUrCBy",
  "key37": "sQe9YqtcyXoF2eUHAnwCtgw4wTJx9M9xRwG7uXz1vKYyFtYp3UyiFmNTHGvjm3hyKxH5MkKzcutHkwGwhNM1FjQ",
  "key38": "3tcmzmtLJzTaP3Htp3QgqqpZnQYk1YJJDFRNNj7ph1CXMnAxa21aDrc3w3NihgF3mAUkjRNdhEaKEi7mhU8KPr2t",
  "key39": "4uDNnkc2LXV7rbJyt5nYidNDFeXkau7XFrXC3NBc3LRwee5jGXcvowHAvnKC9nZczAGJsuF4EZB1GEx4Ho9UFXVQ",
  "key40": "2JW5bnHaLiyeJBYrd8tAyRQwzNYSXa6cdetAonPA432QzePHwjHVf7AVzXA8q8HhKV9To27pLkWtNznZ927svVED",
  "key41": "b7c3kfLSZmM1H775KcVF3xSb54SkHMxBw4GhhjS2rRUPh4GUaTSfFhxMJfVkSfr6Gnm6fBneXSdHf4q1LogFkDG",
  "key42": "2bkN4Eb33uiq711bkERPGZPvRrV2vrm68KVaNBSL8xn2ArSRVSkiMdEc8Mh2qvgySRBDzWQoyhLLjcsKkv52ogsx",
  "key43": "2E8qE1P3fbfetCF3ydNCmCCJwp7QfdLTwqEQZnSiNHyaL3ZRaxguPMjYyafSXcm9o5YgyU9kSg4vwDWejmMbftph",
  "key44": "6KnDcvuESnWdyE15eQ5QqfUYoV5w4k3wPXekBABDPadXUssGYNwhe9GCPJEnEKgHMY7B53BiYCV45YemS6RsEzQ",
  "key45": "3EFKWNVvqJuvfAGdPRUq8w7mz9CZStT3TrnGgfiR8V7dvyPkQRLjk22DTKVEQy6zssCcxX4dgC49iYeYq2KZkm9h",
  "key46": "31m35EptFQiP5iDpXsVKrgFw7xPEtid2BQtY5hheGnqVZYAp9y7iGX3gYQsZdkHssfbtBqvyBxN39jfimBZcSomT",
  "key47": "4U7TBUcQnzJnAsgxdtBaoDBQUyh8FzPrFTGgyTrYWb6C1VAqpifyHrRgd1wjWraZgVPqCmi4cztTRVVTNpUtQyDq"
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
