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
    "3BhA2fpNhiaXzWsTZvw9ry5wk1D564NddAoKsi73sDChRw6oGK6XppedCCWzoaMwy1VivdYBqHhMDrBGeCZ8dhUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EN7FLttrMD836cmarxSSLcWTWCFsfoPWjDvhc4d46QwwcHdkdwomhUz76nPyHMrGNeX4FSxyAcb3KVW2MeZKmBb",
  "key1": "3SxgV4zyrnWDTDNagDKkZteX9jRPPdYPoGVazEz7dNNsn5tnFms9Cwcr9bjwWPigXyLtPk9Mt5xz3thNZ5kLtZP5",
  "key2": "2o7k8zDooxhi8woZgkyfJPZofNrkLJqfvvUFHrrbiaKtWVzGCgZeiVhKsEkUfEYeGQe1CcsUjZMjscjzH88E5eQ9",
  "key3": "58bqrYBxXRmda66hq7vN75zkmTJxzw8v4YWh18nu6F1XcjTZpYTMJ94ZUiaW2XkVrhd6rCNGceC6iRP91L6DMpii",
  "key4": "4NyPKLrcinFHqFEzkE4QbMjzvnxFguKgesFaKtHSkwU9PVLpyTzXHi8e4GuKe9xDytjvDG8Eq3Sttmh6i2uusjwu",
  "key5": "2t3m8njA2Qj6prHsfnrwF4YN9cjfjjt1xiwG67xK5U2uabCaDzhegvpsCPGP7m7Jqa63LywYfM3STw7ydXnwHvr7",
  "key6": "4AXxroAGwDC7wPpqfykkMNH5ykp7UAnvmuJ8HaAeLK9fssoYu1EQ6k2KvuNQiUFVGHCxRubbMcBx9q4j7AHvd8vj",
  "key7": "WmwR7GMyPeHATnMnvGxqP6uxv49Yonc8AQe2NdnnAd3ETmYHLzCyuuHjgKxndHny2ppuvgSZrEod9ADevAm8mno",
  "key8": "5WJoncnBFKVmSxJgJQxHoXAh5UbVBGC1JnFCYa8djz6FSbAbcPeDSXxckt1vWm7AdfdFJndi1Vwyjjk4VKwamTHG",
  "key9": "5s6Rhq4zk6vzjyvPoq2oZx2rVC22FyrE4GM4nubFahVyGeAbYRS1tp2EP2HhQzpYzsZZuo4gY1DrPb4JpyDLPCAe",
  "key10": "32LXdJtaqYzzSMWz1KVV5oSQ3vUYtoNX5W9mGXRjsQyqkpAa9NdxkA5hyXCZMUeCybhZj7oLAZZ7NJkUAFn3qnRQ",
  "key11": "2TdsikjYt5UBLMjzb8ZZYngRDc6SnYM2csBYkeFvyUrWByDgi9RsLGfToS5Td54MKiLaEnQDigdXNAiuoQnhzacE",
  "key12": "4bSNKhfWUyGPp4F1d6wbaGTjNLtf16tx8he36ySQLPYXsYiWWLGgoS98rb2JX1w4yoGCdxuuTLCJg4a4XVx5gNb9",
  "key13": "5kyzZ7k2HUtUcmG6pqYym5BZpLeRrqKA492cZniBzom3jgN6FNagaAe2XpZiXjHtgK3xpbiEswFg9dV8dNQZESkj",
  "key14": "4qGdZx9R8LxZHErwpRTz1cPr3FJ9zAJWrXXrYapGbJJs7CnLKSm4sdC2kb8QUvN5jxHwJKSNKnNDgin7DqEENWei",
  "key15": "3k8cHs5eNJJ7ZbV7cKoCoyoCQKJR8pp3HgJj31s16T3c8jBCCMozFroYL4hPaZsh3yznMVLLrN5BGxEEGr3c68oe",
  "key16": "67UbRp6Vwo4nYo6Kq3LfBj9J6Jgiiobgo3Bk5BHWJfXGjWCAbAPFQ4u33B4oouG4p4BFpEtJMrwKpFJLvNURxN4p",
  "key17": "TB3djdBBgqwF6cHWUUR7rSYsMqU6mmQiwSaNt8j8thhhzTzsyFmmLNsT1RpW3gKovAtQfP3iVk3DJjGayf77Nvc",
  "key18": "52Ep9oiYv6pMsjAjXFM8ijz2TzGNadSKJBnDnDAEDjf2YyppTkeMdxsU4gDsepknV6dKHCme7p18FSpUyjpcYdus",
  "key19": "bpUMiwmeAFANVbMMZiqbQ3ZVhSxyeWzyB7AnHobtrQrycvXXipxa9w7A3HcPzjXNaqqHtEhzydSqyWAMysE6dDQ",
  "key20": "TRSNHRX139kN8gC73mZyLy1P3kUC6AZfgzLK1argQYT8GubdU7dDEfCMwxG6MxMm2UWxVjLjSVbCDmAXzPu8QcE",
  "key21": "SZ85zd7eAVu4reHxPTrWS7vYXygamdPFdKzv4nZ6oy3EC61VBeSYtAZdHG9FY2FMsdCDY6oykskdGgqmT7DKDpT",
  "key22": "MhAW4p2TyvSRMrSvJNAQ9fhZsGWPWGDosjSjUiHVFSc4FCeSxdnZnLmfgP4uNNknjQw5Gk6w1C2twVSXNpvTLkX",
  "key23": "51X4JE5fStWJMXuJuAEB6yeS7LTooHgeeZTYAzcTAYSCZshwMPRJVgCZJJTAoqhA9RsBDLhoMX2KawZSVBeXnYfK",
  "key24": "27tWqSijDLBkHGJure4dwBn8PP7g71HrsfnigdNvaQDcjtQqmhfbk1mDVki259PWAaWsNaJm19mh1hTkpQE8TAPm",
  "key25": "UxvHPPqyfSXakEbiTqZEEKNJtLaJo9UhGJyEHJ2VcUcPtWAkbQTPh29iMxmVzWCU6DXMPEdL27EBgkpAMG5bUKt",
  "key26": "2ysG4CU8eUQ7o6XUNd42e99ctAfK6pk7ijPM5aN4f9pKatVjM52ySDnyMMo886HQzWGAgGHEMgKs4pMpAYrr1k9P",
  "key27": "x5Mw9Y1RJ2HQzmbVaqPqef7q5VRT9vPkT58cu2NmmcToQbaohxJ6xgURNZvsnNd4yCn3VPBB6ssdpsPPM9jx8Ei",
  "key28": "53nY3AvhoCFgz6Z6G7jyJTg4spn2w77c2a47ZWKk3TdkMJm2AAnM7UemEZgT76QW6z536wgBJXnYGssKQwzMhpEv",
  "key29": "5Z4DkqRnYDY8qH2btSpTuQsrpwagFTphAWCvy5swVpYEqEJDyHz7oGjiGfeBCbVf5kiFQv9XFwJVoTe7szhaJEJo",
  "key30": "4W7KdzFLUnmg6AEUvqcktyP5cLNmSmcBQP7EEbVGM5z3LA3WDs9dm8C9WmotferZ3o9FWAm8eZj7KoZGRkknNmpR",
  "key31": "5Bqb9EJBy4Y3ZGD3VUXfybs1HBiYbtWxczcRCVq4R9PyCifw4qCEw25HyeLCRU4rGqx3eQwUfeE57vUN4V5DovQP",
  "key32": "3tVTVHfNMXXXasHW5Y1GbTkftHR2NXXWqqS77MK31quG824QVrKRTDE8HDQ828mHqDuYPiZ1XYeitCnmtB4zo4wA",
  "key33": "2GBdXRdg6phRpGFEfhcD6zfvkQ528uPKMU8YPXw6fAyHF5oGy3Yq7eiw9CJgHDCpgyosGneofbG7x2o63TMj3X54",
  "key34": "4tbKKdk666QxE8RRzJZQrEVjQANBwcLTNBDpv7mSVHjSBSFkkrBo5M5C6rYAWrSR4XnsvHqoyXREuMesACppMtsK",
  "key35": "5iTyk5zfdaKJHxbq2yAFxp5u1ruKEvB3tFJbTCMuG3jnZTjqBa63rF9qdhpoef7WrTLQmPmKMNi42Ui1jrZNh3sB",
  "key36": "3y3CWeAGPSnSQqVwQWuscHRrjAGemf11456tRvKLUPAYFk9ypdtiZC8qX8fGuiJiqCPsrKuLS5UKo62fz8KrnpiD",
  "key37": "4Z49SJYfKxwdf5zqRbSQxu9fMpQTCwjzuhUzabYASNNjagEmngzwHEarTMV7q5EFXH8RADHWvko2ynihbo3VxdDC",
  "key38": "3dyeA4ZLV4YcBAPULnLSfZHQnFtuiEXtUjdskQ2PFvkgz4ehwe8kjfJfdwEVFCvtEbLNzhA9nqq98pemLYG5yzJs",
  "key39": "3zorLerpUrvtGrdMLuDCf6d75pKARAJdvFVLuBrkzkLVUWdkVPXVdzH2S9hEG8pVwCiZTEhQcbeDyivfyECPCUyh",
  "key40": "3TUECPreiCKU4aCQ94nsDaN3u1HYKYNiQxssfcJF1yXjH5dT8M9JYvRNbEnixJPZEsPx5k4NJGsFTCmqpSUmsEKQ",
  "key41": "5k75DJXEdVWDX3gP58hSugTDQZ3zQ5h3dJfiResmg2cWDyY7KaYvLFRwswbkHLqKAwyhepXQ9hVLizsFJZrzyhpY",
  "key42": "deX1h6L4gUQPFQgGa7HgHSUCfqpLRZtbzcAfA6rzbajbAAdBbPrRqSe4GP1eaNPGYVchrjjj82nP2c212ujS5V2",
  "key43": "4oQeKXvAA8oqiqvpLgsdi9S2X1LJ1PBXtbR8fw8Rbfnh9ENoAFAyfxmMKWHokDLtS3mYUjABVmjrevZDDjMhdwEk",
  "key44": "4ZtvTDW4UzwFmcKtV65Xn81Kec6hzHDBn5J72a2onjtyKM55MgbGDohMpwRsnCyY9SAQUi3DFY1Tfa8cyqvYNs94",
  "key45": "5H7xrYoL8KZdZ7q44YnL5rjx6hqPFWZpxwpM3nfWMtxTKSa64ECqKb5ZByojSqLcWK6Hsnk5B94NdUYRrYDGAnku",
  "key46": "3iMu8tiGkymQQr895CehipH8Zox5VaVRMn4hjLuCkSdNQBCmmnuCxf6fvrTQxRaGjqM6h4uApNTXVJFhznWoGXSF",
  "key47": "3RFkovDbFr2rMTMsWBL4w5hKBkadLrv9VSABUPksJTe3i9oQG7vspqJkoYHjkSCxUmiw8tFQF1zoojKr7Y7N4WFz",
  "key48": "r5LWGSHT3F1YLBaHX1im3m82zzYicB3vXDsbmBrJyJPPE8VtPVf3sR52stcCZoP4jhgc5XwU7KrGps2wv81zNWe"
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
