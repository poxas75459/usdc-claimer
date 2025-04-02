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
    "WmdSwnmVWNcwxX9stDdxAf6ijGFXx9RT9FtcVyxfnJVnv6VRkwJnLBYPS9CJh8Jd2oo4TUUZV5yDYvzBKymo6op"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Jjq2SzJ8mguWWZTuNcZu1MiHiy7iij22jk2Q9wpRtJsb3kA3dC3ZxRHHpLtYyX2ZbsQk4Rc2DJgotCvjXijMdu",
  "key1": "3q23cMYwzwVXBXVokgW7VSmXufMb47Nw3znZtJmmPsUtgBRSFYm2q3j922CtokAyweEWyyHMQ3LUYPhhu5P7aTt",
  "key2": "3kwQYJRVA4ryuwzqdjb76RXAxR2VFVuKQercXukV4a4ytJKeDJdF48dVQrCn3z3aNTf2vJSJSK2Tw4kYj8CR2Jdx",
  "key3": "4NPZnF1dcLH7xU7Zz7sWKXTmipMsFC9M6St9a6QkTqa93D4PbWAu1hBadywqEgqK3x45Q9CFKax9kPmn2fdMXNAw",
  "key4": "BtrhueJf8wKbnbqUfybgxZXbaUFGHSfc3AXcxHniv31sktGWivDVB4omQ4atz6aLE1FhY8vVxKAtiwkXp9Q338n",
  "key5": "3VDXJ2HvrftDHxoDKT9o1x7EQa5KkEMmEYkD6cUQzgAYofJYF9vWbGU3pxihQCDkmh2MBUAgaBZKDUTyo1xs4r6L",
  "key6": "H7eVmkVMps1eDCo3KGvrzUAWUxxFUGaxsSoHeQ4fCqpTS2anYsJjzKEVaM4oUNw2pNPcsv9h7eFiCiVV2joR6iA",
  "key7": "2rHLFMb4D8srbAEaGfv3CwGZFTbi5pVr9C92czbwSR8us6CKbqTAqEkSEud8g9m39zH8taptMrypsoy2rBgBb7pr",
  "key8": "KfMghiNM7pgfL2hGZAVTXLSXz75DzACYq29EN1rCnjT917pab6fmU3WnV1jNphqTfjF4qTfw9pzzY35ieUW2pyu",
  "key9": "4R2JPNCJRyewYqVX1D2wGZdZtWA9hiQps6Hjw4u1m4Ev2nECvtWg1AcrMGGMVAvkEUJkLB2VDXBHnATTSttroAii",
  "key10": "3U7Mq12V9BSqvaEiaGWnv4jhG3dSzytWugZAS2tnBfAXQprG3gLSweqjP9XbKXgvJfvdZFFVGYSBmFRucir9Fmjh",
  "key11": "5dBEdYWcUackFC5FnZw4E9gQ5VNqn8trNnF2Hgz7U9e5KEbAKwK5Vk1uF5qWnphghw6hTWaJfw3rqv6NDYc7UVMK",
  "key12": "3xdufrWaq6Ky74sBW96PqizF2aLqEr4ftKWDcTk5dDT6M7xBbXNZ9Kgx8Gvja1sMm9zjGgH6MQRLEH1dJYk6GkLm",
  "key13": "47kkK3zQh7E4stNgwFHxaZtrKas6DFAXt3bNhUmFzCpsvkGqZt7gVSsXyuwK2AHDFbWm7rufbiojdi6qMCV2jRkn",
  "key14": "7nTS8gsrw5RyXEAuqu2gq2sg9RGXb4bdXns2zNrbSKdWm6DYjzDDzKtotXVbMLSs4JNmA24M97tbiDEqvvyLa3c",
  "key15": "3mzDDLpo983z7pht8aABMAMVzL4GUJQBaK1NHgbZNSegBtme2bnx4VQMHtiQ9hS91ZNkfuKaLpzSCeRKDvRRQBgX",
  "key16": "27eZr16Wd44pqA8sxKhZozhVsw8uRd4XmHUwFurXcfg6EWwQ5V8DrYRwR5BAdSnUyfpvgoskUt5nqtakZcCzuMn2",
  "key17": "2DZh32YdxADiZUy6c6zZ4MuPy5k69c65AGzwD4PC31GnG2KV86xLo8ebWEXsVGPfzG6NpYEuWmgHNyzB6VwQHTtX",
  "key18": "JRdqomFxDXbiaFcj7eo3r2rSELXrkLER1Y2ojVQ1RWKahuiGCPw69ZEooz44v2Cjqe99sQzDFXcY4AZwEtQj3mi",
  "key19": "29Bu4pizcyX89YWpUzoKiouwYBFb9CAnyzk4HRHi9CjDzSnFZRPuXjZ7CAJm75EwH92yZjwWz6YYKnm7RxmB8oC3",
  "key20": "2S31tud41uiahF7148jA6QaVsQnHi126vBkKK86WZnbKNVYDVMHcanrUhZwpCY3uR1EGXvsswFtcL7ijgYBBxNZb",
  "key21": "KGE1YC39LduEkc1SWJSsXBZfjo7ZE2AZu4dVTN9vwdf3Qrj2oBQVCKrDcnP8MW5BzdwM5epyUQUK78BwTDJCBwa",
  "key22": "5wuyBXE6ipb8fM6PncAmVWS52gAP5EMRpJVgWvNM4tGaTBXSQSoqnXxSH3Af688cCwHJkuZpzsdoZAHnVMZQDs7N",
  "key23": "2UuUZbyYxkdSqh6P4TDQDY3ETbHJ5giTsXobp7Zigmr7Ru2EcWqNGT6TW2GvQLEEyN6i7gkDQk2fTHXDuQUGPrUe",
  "key24": "5mpcwLpfL235TSBVUa2A61R8qc5yUcfPoaLeAB6WFPy8MaGEjaYX59HZhySCHBe8RqRrpSM2bZjg6mZs6HTJxc8V",
  "key25": "5UdfYix9vjMEhiPHVYK9qu2vuku6B25auU18npZaFszXoiTpnXniiYeaENWZ8XvD6Ey69q3rH3Am8zcU6BRiAyA7",
  "key26": "3VMEsg4nLmZ3EYaBtUL21Wmx8PqtPAY12wYWrHCfRiWSxKGhMKojKtjGjM1xrbCA9YQjXJiay9ibKqExkLQfXj6R",
  "key27": "4wqgfWzVDrBJ2XK1pfuLDfxJzZoKSq9JXn3oAcTk8WmMx5PRN7HKKUwxNnQ5oBFoPhwsKAzJFxdqs57Sohzj1cVT",
  "key28": "2SnbK3VYfF7UNgZ8aen7FU2DhkC7jdzTZac3bj5DWzsksHjuuxFwQwFTsjjtwQLaPQE11Z9UHGUVWWEZJYoGCemz",
  "key29": "2ZqC9jGk3KVTYgE4tx9jB5uu1mCGpwj2vydS82B8998qQL6ZLPjH6qu66wAVDnVag8pyDNnPrte7euBihioXEHT7",
  "key30": "3tucdd4aW1PLAKttwK9XFHtgZHV1gKofRT1EgoKgWLAvokTosixcpPxQ65egNPGuF9fPGYv41ANrRRQ4aLByWqe5",
  "key31": "4Y3zKe6e6N2YkjufM5F3zR71HpuXY45KEHNhm11qNtkNPgD5E3sM3utyuFY4dm4tphY5hw4GGmnJ2cfeYCN3ekQK",
  "key32": "4AY44yqTabxPG1dFEs3bzd2LAkRRkRUua83bGp3ZNi2HKqvY9xJpL5gnv6qS3cMaxvvhvNXkmnTS8qwdTYpYLUHn",
  "key33": "2j71ctrz429X3oGK4ovo1HpMJ2y1cuuQHwTLHsAQ5GbyegNVpsQWMp9jDLGz8RShnEop2U8dqK2UPvgHhyGRqDZ4",
  "key34": "2HWVW4szVRmPYdizYqiBH2yj7mMk3tCs4Eo1XYsJw39Us4enirxZGKFnXDQqVBbbTk7kPeDQgN8oYsTVBQGbQJci",
  "key35": "9qGVkjbZdNUPQAgqk9qPYXEWzqBLN1Piu1Wjh7Kc6D3NQzTTJqaTEiAckhKhDbgNmUvTaQf2JUUoc9UJK2gwoEA",
  "key36": "3YaYLmigZce6PicnNCqm91ApC9PDF9F2Q4GUhHjwQLHGoW6wQdg2BdYcmC2ogGaLfbLbQjwoqis3TNmXucXYJaSf",
  "key37": "2cBqRcKAMRReqVrVHgiJYstTNTGfGudZaoosPVTi2Abe9aYRor7WqvVme9HZH4axtm4f3TMiGhCgJ1UruWC1zQ7s",
  "key38": "gevZygK9Dv1mf5pb1zDaBTc5AeEt5f4BA83GH9zYzJbrewtFi8ZucV9j6PZkJ2P7SXr1NiHZ6yKCwErBffXawvh",
  "key39": "49jBUpKiVz2FzfkZgCkGsqh95ZazRe5CAwvgivUbCfTeiKXNx63po9fyt8vmDNPy1gR9ZJKoS5ShvgaaWjGEEX28",
  "key40": "3NDKoheRehuMq149QSeQd3Uo9YnTjyCj7QhyinjtJXmbWLi1rwDnqJ31pJ6J2cMTDr1XErpBgWpAJ7tt9hpTSwQk",
  "key41": "4Q55aHYjMxE6U2EyDU1mNJiNgFdrvP35NEBe2oheVvcv4GKXJhQj3EngPAtgRQEfNWm6mRZdNcX5Ph3tzKa7FBJE",
  "key42": "26GHWqmGHWSa2aUqB4jTjJuNMHBcwAULRd2phveubFnvQ8T3xGopVYWsVbDGeqHxVr5f3yThSoh9JZWYjzBo2q17",
  "key43": "4XV64yzRH561g923WkL2T6hJheKPxjEvAJFvUzmyazmtrdn1XTjxA6TPGiLVQDBKWXgrBpGWMmcwT35EMp6y45vU",
  "key44": "61JvfjiviYXEMoQeuSoK34CH5YxHuCJgmV3JF1qy6BeJtqEYuzDDXuPKNeKY9wBNiy6n9k7dnziU6pJhjfwKieXg",
  "key45": "5iKrBzfaWGWF5QrVCoQTp9CWUred2ndSh3SuF31Q62EdXg62FVEMm31wpLwk1Ao6GcrXXhYv32j8tcyuwfU7Ayqs",
  "key46": "4BFT6nTkDBQsRpgqLpn6UAPY2fnA7zYv9B98X94tSSE41aXbENC9FdvHw24BAoo4nsgJ6gcVUpwe82r4YMZsrfKX",
  "key47": "3HaokbyATrLSSQeyTC6A6HeWzsc4mjXCB6ZXKWngGV5gLc7WMoaBhnH6T1cg7p2tgQiqAxd2aNwe6eh2VHGYqxvz"
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
