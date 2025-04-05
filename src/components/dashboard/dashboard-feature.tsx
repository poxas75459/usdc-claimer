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
    "5n6eH8WjRWUHPQJKwJEsEUthheUXq6SiXpytsG7BR1g2pfe3dKHU8nSr9VDrGQCUcC4W3H43KVJbmi9ah8dzcNHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oyh1Qf2enQkXsSiNKK5bYVXz7frdTtr9u3tCsZFFaLrnrFWrxJRGYMf8TgoSi2w5j3MZq6NNUwWc7UipKRA65pU",
  "key1": "4d9TDaTDj2hDMjCbquU2xTHdV7brz598vdSXqyhW3kwz85CoTeXJdRcAEToYzbwoDHgda8Gja23tVTSCEtLsW6dw",
  "key2": "5JX1BUBakdKRsbzkBjeJ9AFGiAeFKoeT281MKRsXuytpBffrxqZw6i8cm9MCUpVHPJmi9ZjD8BiYJF1sTHFN3iLA",
  "key3": "4kzvkoXDnQFH119bmBsiX67L46bfKHpFR2xrtSStUb1akKzHpSzgwc1aaa8ANDL1pSUpZvD6kedhDexYGrtefZxa",
  "key4": "2AfPek5jFo3jySC4b5xwUL4dvEjq8vt6E9RHXdyppzhe8mj1NmhPtaY9euhVMH6CaJH8L8k5wgPhghFHz7H8YtGK",
  "key5": "5QZwtzuSCKLVG5cTa5QrcKjNPhEz3khf6eTznRubzm1LZEFAomvKgJc4yF7pBP2XXMkqjdYysEqBwxHzkdjDdZdq",
  "key6": "gT7oBdegkQgt9GRU45vReB44N1h9D4xFhmRpmkYcTdGtq6CK8S9NRgnU6fynyD3W3ScJgusZg8f7AQ1365AYcF3",
  "key7": "2fWgsSj9ujUKa8vLxJZDLZxAY814RVqeZMMKbQBMkPpsbMxF387Uy4R12cbEgQLKqJSfiVTKByX4YtJnJ5JeZeQp",
  "key8": "8D5LZGBj2LPfnLMh3Gm1fBeeM9E9C7nH7GjqurJa6fEnGp9cQ4HaeTGeV7LovVQrPYsSCHEVrkdxyGoDZ1LzNcM",
  "key9": "3AqxkaWXtiCkWgDC92C8GZLeba7cb7qMqEvVhh1Zh6tUqdGAZQ21VAAr3i46SePMkR8A9vxsbkU6CixDRnnvx641",
  "key10": "4tkSKquRWnoFecCtk3tLJEe5QSxx4wmmPEnJPrTR4K386xysnKVG214FTTsABew69Zb99vxo6n4awbvQ4ywQrXX3",
  "key11": "4DS8tvSUqR4LX2xe1E5kRNZJJKwLCVuMzguDRDD5uBxBW43sWmhpTVbQULRBc82TSxGbiy5mzoRkyXf5KskwAght",
  "key12": "4EJGU3xfNDZwMA8hgE1CVzhWdJJnyBKeFJa4mJPmW3jwKbXGuNWsBZpmuw8fQ8nGnYerF2QPHAmsZGAAoHcY9zzS",
  "key13": "2vydVGPYYsuya8LCnKE9V19Cu1cBHBL3ER5zMA3MSpHmhSLknchHGMDVGFbJUKSzqC13UYbscBhrV4vnekf47Uiq",
  "key14": "5FckoeorRko9sYvcbCrJujkAfMwr8TiCFWzpHjXJbozqfPwzGCJFyzyBaM2kBAKGDCpBoMLTs5DA2x3bK1jEWtgb",
  "key15": "51LrgB23m56kAyd2MaATkvsYZWHtziQf4GpNSxbfay2PHvXYxYHm2VJaDbaTqAL6DqASeB9ichuSnAKKrdLMHcbM",
  "key16": "5FL3Rf4D3Xt8ushrRAw2DuDT6jKfvU4JoKqhULRwmivcWzkuPMjykfzCxLYug1G93oJcYSvkmYVdvtdjUDFv4Exc",
  "key17": "AGjUjSTcF3M26xpDbax6wdf7p2TvvUnsoaCTkMPrSuKnEezCFGnyDoK7pgvvwRm3EwojErA1ikpw7wvbLyYgCDE",
  "key18": "2oAw2td3DEfpoHcpbLBfxxNg6CZq9TpVKFDaXwGKBucyBBrLtWne95ZZuHWA5nyErtVYzjMPn3NqTYGjmzN464Vy",
  "key19": "5vz7hgHzB6gZApo1962j7FpmnKUxamhCpSveAHcEnM5e1VqGjvCwTiFMmY3SQ9JCYLdEf1EkAu2LqKaKqaxTc4Yf",
  "key20": "rJnkrUmUrQGJiXn5y9syTLDNNiURphcHoSJNM8yASF3fm8JDyo5NHpGXk1X14f975isjWDzhj9usWBAHk5v4ex8",
  "key21": "5S9pWSYZrQCcHPXs7ag6jnCtUsbuvhE5qyuKC2cczq2qy8ypf3kzcvN4aSL8JJqnJUxCjfDSEtWTzYfSFWsAQGCU",
  "key22": "5icQpgCydjDNdGS6gsPv8nsbCGurTygPZjYyYqNViETQm72LyLecDs7esaRwCvesukqKPs9sjozhK9TbNyAb7N1t",
  "key23": "5JKFti3LHGqseiWqqmJeXUi6Ci83eQF5cK7QiwRx4dKSXdxwSMmnCtH6MnUohsZZD8W3bapWVE59t5QHRhpZ1Waz",
  "key24": "abFaPjNisQUnQtEc6ADMN7r42231aFXDWdUw1iqLYFyhNuDfFj2HjuGHzcKFQyqDKnei9ZHyZjF3t3CutrmQQ88",
  "key25": "5dkzAcq436fuRKvkw2dTgBA3Kp5a7TJfgJGPcgkqwzfbzAc9URo83MHACyTKaTMQFzMPggMz31nNm3bK36rvQhMb",
  "key26": "3qttoqs5mnJa7C1iCcYqVZUk6UJTWsCZ83ieDx93VEQL9Rkk4pfK7jboahT8ZaVHo2enDg2P16wgLx3FuoavtVXT",
  "key27": "2spj9aufk9BhcqP3punMqqKS9XWAWSEyesua92GHwLSrFSub5Z6kKbdu8Kpa3yXYfNYHhkv2vKhHNYZaeCpqo89M",
  "key28": "2u73G7cCNJXFUtQ4Ze7rd6UsHzzMHJTowBc1ECJiiekSjArBXHQnPZNVGq3pYiqjsVBjATv7qgLH3YjcwXLgrLhw",
  "key29": "3WQoqPUEHvZGEP2RLy9Yyb1sRX3HFdymqxsdXF8pwT7D5UCkUVftNKj9gB6kEugPdW8K7sVM2seLUcE98mPmW3Tg",
  "key30": "5pqoNh4fB9gQzTwxFC15MLaLnaG6nDRHVVsRrbijyvVKq7LBHe2eu59sSygYJSQiKGoGe3GpGyNfQRGQ8WoDiC5H",
  "key31": "4ZbY75UCvDKmxS8x2yfPA9foVHu9G7YABUoq6SjeDBTnKU7B5oFDcXXPeKcVug8hj5HT44zRqGqTnXJdw8aHB534",
  "key32": "4ncTUqBfsVymLxsrC3WyTbj5RRXeayWyqmczsHHjfyuCztBX4Zcs6VbFNmu7b3zahswixbobfTG9aaZWvQjQd2qE",
  "key33": "3rYChkjvqF9KxJpXAXDoyPhW9fBBwa8W6uD6QqYVAC9kcr1ehjPDHqbFf6Z7btJhis5gCZHEa4RAXZ1EAsoQ3Gze",
  "key34": "65MnAhXkBM214ArM62oeh22NpaYoQWwcJGZh4YmCkDt7aSHp1ScQCygRTrFpve9gPEyU6GkJKhgbm6vof6UCoY6n",
  "key35": "2AbJPLEcm36mmfvN2d86RRPgEc8a4y3SHU47b1qZrSZyQCBCQ5WQNpUFH24EFYryDNKkGBs93uCL7VzuswQh1Kgm",
  "key36": "oLVfTnteRNq4ePgppJJLnTTn4FAVNwwEpdZM22i6NCHMgTvz9PgEQZHeZJ6h2prDyWSKVWk3zfb1eUAimMWff8M",
  "key37": "3WpdNZq9rkh3KJXaAgRH7MvThEWdEuPM5QHoZt6JJeSgsfZE8PvziNn8NRDmPz4enR2cEayWjxcZ9JL4n9iNDFpG",
  "key38": "2E6NUfyXh9ob2jKJGGMhXy7oq2hPfmPSMFw3UbQ5snS2wgknsFt4kCwD7RXoZNWwpWyJqe4KvZUAzei8QKTNejiV",
  "key39": "3UZvQQY6brHTizr4K4S14AyiQ625xrtBH8gypHD1sisEiXGo6jmLDhoSeY6V6GEsWLeSBXaxNCjGPd48SHYrJL3V",
  "key40": "48AneqGT6RH8mYqCKytsEFZPw57f6xP6TErQ6zpfpk1xpjzkGrdq655wxK7w5qiYV8rG4Yb3fDd67QUgtJJsML1E",
  "key41": "2KC4r9bpxNAMS1oagTUHr7ZGgeZRb6uqAn3zXwhgknkazwZFK9BzJpC9EzfARZgpAijhexCeYsrBjfNPZDcUJDCS",
  "key42": "2FjsEusgBQn4qfP99KXcL38dCkgj1mwiwg4gQrA9dgMazi4EzCurX3SqiVtENU8cA3djv7UAVazYac9U7d1DKum8",
  "key43": "25ndAPwUfKzEssJVek4PpPvS6DvU6GBGKdKbcRPMqMoPFBcgFMmMNL1UmQe1HPQWZ95RGvhqnUMzHoZoLPYfRtBq"
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
