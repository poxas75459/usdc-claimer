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
    "2TRXiBPMytP1DdHJ4VeGi5QNqZMNxusiyFnBfq55V2677hp5o6BNWKuAGCarEKHwmyJFUYee5eeyhpJFiqa2tbti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67CZtt5Fav92z6UTc4jNK1XJ3dL6WTPQLgS2k9rHzbtLgBRoarTVHgP26VWzNemKXg6wHDF6i9Jg4MXUGasH8er",
  "key1": "4HDCxu2ejL43v7yghuGvoGcsfxJakCytLGgrgKuRZ3bn7CxL8YL7rM6RGsRZQFVNwWk2DsuPPcnWtTjBpjjtf4os",
  "key2": "2p7jwv7maPM2mVGJa987rgJSWHorXV9XycFvub8LfW3Nvu32tHuhVEaaw6oUj7bDhDbRwjWGFoWmyiQCCext3ETq",
  "key3": "pCaewZaR7QJhSisDHJeMhKQ42fppN2C9oo8716hbEYbyjVfzofbgnpMbqf8r8fRDVPcFc8eTiccBBnqLeFpVDFa",
  "key4": "5hbDZfGLgkmXUu1HKVj1Gh2myn5gmMNVqRiYctWLbRFsbxYmnMRVr1dSwnU6ZAb5ZUCpByEVpPzjVGFpcXURet1H",
  "key5": "3EU8pnZ1mpHw9ftYnWvAqZqiQe5urhKXKEu6CSuBeAw7wF1Q1neT3hLhaxNyUU9xTfWpJw2GA4foQFF4wc3j4e7Q",
  "key6": "5pozBR7JbCmSnTpqe7GhrCkNuPz5qV7aRAFkDZbasVZC4DNLK8b8ZtWC9LLUYPnTHUsrUEF4cVnUN1S53XbxeKBC",
  "key7": "61Gy9iPJ1vT9wdMSP6wAQtpjGof8G2E7cjPRo6bx9ctLDBk1L85k1nbDxuFFAuCJHCBUQgVWQvamJeBQGJxNjqak",
  "key8": "676c85RUsPyTeD2EZvbSYWphB119JCUiJcckrvgPJpeFx5RkBMz6Z6DaEoVLL18xyVggV8B1SVxka9HYkqeccPLw",
  "key9": "4jMEryQgeWZzS1Apvi6k6XvG6GY5m7689ruh2D77vV9cycoaj9XVa3SN1J3ABBCNeLWirroRvxpsLEmCmUVt5dkt",
  "key10": "K9vAWkFr9KjRQZAaE2dRLkwUKxezGajQF34ZpwPy6CvxhfapFfpzPKQHF2n88WYF46JmSbHMXa3V1TvyD8SPg5C",
  "key11": "5b1WU8gy52od9eL5T4dLyV5Af2npCEKEKDwWskwXq12i3Bg5msDo9faqfVtUZSWfqUz8ASkUowRT2vrSbJGRxyPX",
  "key12": "3bqFu5xZBXi1eG7nts3VztS7dTuzm1SmNcNm4Q73UEJfMVih4GCxPZHCQ7JhsAUkagjCc5qM743Lph8bDipK7tkb",
  "key13": "2MR61JsX6VvMT9pxt6wMTUuBECFzy9voiHA7SCe7wESBwFmyt6qVTudGWsLAJREvjahftTbwT6ePAaDoW5p2AQsk",
  "key14": "5Mbef8B8XuDkcu82QrGjfg2P55xmav7Y2STSZdSyNtGtrnLgnYLY4hdCyp8CNMs35AGCtsCNeR9zHH7fDUcgSQ1A",
  "key15": "3jGDjHhWFzTsP4mzhyXHP3mrBQDH3uzX91Tdqc51asCEchWDHuFPBxHaqox2tMWj518JGoQc7LqWNBnUyjSvgwrG",
  "key16": "2sSxJyxssofM5kSbmknxbdrydBpyP8QvdZqGgt9aZYiJn6MeyYiVdd7LpCFLYsjRkusShVt6SZqVqb6zujcMN2Kf",
  "key17": "5mrA2ocxjVY719Msf94LV7HV4UHZ36vfnuNGZxQ7ZgvnUs1uG8RkGpD9h9CgzJgTLHf8RD2EUoPpto4Y7xwjMe8y",
  "key18": "aKRBcPVtM54Kh4ntqc4xi3Lhh7Z9Usc1dHAGb5tNMtVP2fK86YuvRmPyKXXzAxXC8K1qJ85pdKfZNbbmXt4HTdy",
  "key19": "2Tg7cqKZpDbk29pRrwG41RmFFUxhu8mc8b9pVEqE9uFk4N939VKpwdd9sdx8Wrsxa3ZZeumJWGon2cR6727g41t2",
  "key20": "4KBDE8Z8MGcye9iPH18r6m9dB7NTcZswkRyS1MKQDes8PKSJbhB88ba8gmYHrtgVaTsXLRB4jcSgZEHyLvYBZcsM",
  "key21": "4ZZogL3Luex7iAWj6FqcEppHmXkcK5gppgoYNRsrPZ3QbgtXmSCfeZ1YVBfDTGfh8cFRDymZ6EdHqPaa4Gzq7Uwn",
  "key22": "7Qkb3izC1adGkKeFJHPvaBjXEoup1iDYUP6sdXU1iAwACnoRfxH2P8VtkXXv5rHzmC5SZMRQTGMqR9TZYXuvH8K",
  "key23": "43CTKp7X3HB43DChn5QhpaEdZXoQYv9YxGgzGNtNnhoKBLXApHxG4UBBk3AEJDVyJzTaZuSr4yPLaUCzEossg339",
  "key24": "vjkN5nQx47Nroaj3YqJcGNt4Bz6q3FMR7MPDEKZuYz5kbzY8gCpynB3s6Piw6KCF6WSUN4ATUCqVmHA9p8Q7Sf6",
  "key25": "2WkryDF59RXvf2ChumVz5hSpxjVJt97Lh5bNJJjY93Qb5o7Hj7KVMGbQLCCHRi5aELPZRQov7JwPT8qvNQvCQS2u",
  "key26": "2wBdmfxD49wzDL7tQhDzzSbkXBiguVUUtgK9ukWTuxVfWj5huUDPKWWyWGfkqkTuHHdmySo3vffemW3d8T69gPfz",
  "key27": "53kgwQwkLaBMGTGjnteDdZuk6g879ETLAyeEJrmehTzCGRDziPDLFGs95p7hu6D8wcakvb5SYNZjK2gozxcTXo2s",
  "key28": "2t1ffGtcGRjERCnwchEja1ae8rurvGioKASRXZuL4vYh42gYVqBrBHHijPLJwWKf4HxbkuEWRLsvqgcf2A5RmTKc",
  "key29": "4a5XEEESiEWvRcNjqB64MGBvR1hg5LJ4Lve9KhbWBQoxwTFh25P1yiLj6nXigRczgXZFnDhY7j5mT2czPG3o8yjr",
  "key30": "d6ND8Dpa1fDgjZ6YRFcYEkM9CMwHqPrZNmMaeFRQm1FNLvt5uZ8zfw4fjS5NHcuXTEFgnUWmMtfF35vpeBVA5ta",
  "key31": "4CYpCeKYJWCjjuWxzrWXb7W9s6ZpGmdcg1nFNJh6wk1eFpF8p4Vk9pXsUZLuAYf8JduX7H2BB7YBn6iMASbzSNMM",
  "key32": "424P3shgjM4kHHXHW8dHXeTWGmusgmbo2S2L3Ek3ELQCdJAaJhskVcDCZ1a3GzHtHknjzcPNEvAXPV6dqZTmA5Ai",
  "key33": "5occZeEjQXevWzGiwJxubXhhkz6n5yb92igUdauS52HuqUyvtn2zwKqNXGY8A7zJZnsXwhz2exLx2HkkNGEL5yfi",
  "key34": "3say25sRRL3w73oA4X3r6TQirq4zcH1snd9iy1t8ykquxkXoy9RGzVnsb6J2LD2xnXSLqXhFY9AYnFsQZ6YjuoJV",
  "key35": "26zV79Ap3VhCjgG9gybcqioUVFs2HxgXcb4NsVxtitALyuL3iagEAEjcBouHVqobL4LaQzwdnQpLbssQ8g5uzsEZ",
  "key36": "CiJZCd4BwzET5qGfSNwkuFoCjbQeZBPvVJvRkugVqYHBJcjFBqRTo9PUCEPn67MN1LVHqew1iMaTiW61WpZisns",
  "key37": "58LzaFxQBe1NEf5qYipNKEUkWhFj4SWtFWc1K88Mt7wXzk4cJwDUfYRYgTizJXmkKd2n7KjpNc4nKs1hyWQ9BQAL",
  "key38": "64SivkMYwF3ck9Y3ZUM8UCYhtRyzAbcJAYY1yzLAQtfNnvp9ruXn6iVdCfmW1Y5sVpgM1WRs44Ukzdadq2wEQ9gi",
  "key39": "35Yi9hPCUyKNMNvt4Aevgzh9gq9KMy45Q5B3vwv2PS5DNd3T5NwkwmdQJ9pRop478DB2HtqMweHRnVjZf2H51G1R",
  "key40": "3g1yTux29zDeRWevz9cord5zu3GMHeSq2vjo8MP7tXQvAiaWDwX89CJ4UP5deZRaV4eKt5sBJ7Rz1jQRwcKdKMff",
  "key41": "wC8HXedeZEZptsm6RnqNMg33SyukoLSWYwncG2xjtUPWmAfqWGqnDZ4a9DU4JL8NMabzsWTpiMLC5QqqwYC33wE",
  "key42": "qhwZJWREQUDZXha1WENbAvLwSAWSwNx1ESGTc9pJ1cgcoPncWwzwVTyJbT68UgeVbiyrnsHTZnNEzDH8NvarZZC",
  "key43": "2B6QXC4QqqxYVn3JyauB3JF3vM6fuPcKgwFkjPaUSaDc2suLuV9Af1WsqtkEZiqxHv84oxoDN5TuQf9EABwbEiTU",
  "key44": "7zm4W6b4988Q6FQ72kFWKvFBwDuZ5x2cvDaWMqwQ71brZsi7ChT88uBfGBWBpuETzWxFsvfJPHLMmDXkPBXfach",
  "key45": "5FgSq2L6xYsZsA7d28MiJA7j1Kdm5tiLDx6T6AS7qLfEKzxgR5vMSFtmw8LDVRJb1UZSEeyC5dWSMhdkG8iSafgQ",
  "key46": "3VrkH8Dcww6dVMHUTy74taJxHLqjLL7Gxdb664X4EDFGdxuUVBUbq8jRn1bPzm8AxrSmQdGoAvsE4qRpDfc6ncXJ",
  "key47": "2AUvPJP855wyj2zY3ttRuzNtnnhe1rfCoWTsYfMPbv9mmo5oTFw3kpt9JLySrnqt31S3iTqPUDgi8ZaqbRNNyRsP",
  "key48": "2Rz4LZQWroy4ceanK2kHJU3NyQdiovKkFGH1wQ2AvJ7fo6zTesZfzjW3Dop7CurdoXnWHNBdTAoZ6JPUucXqe1t8"
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
