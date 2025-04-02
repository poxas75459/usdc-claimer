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
    "4mXn81hbAheNN5gyqrKzXP9PNikHAj1movCekLjP7E4G3wQHQxvgD2Tx2ENAkJiM7tAUvFj53QNMgsHpDrZyRQqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywg3RjadwU5b28DnmiVoUVEHeSk2z5yeyxjnKTuKT1yyfJ5A7CWsB6KkNDvyu8Z6CUY1eEGbFiyBc8V6HuTozSe",
  "key1": "zGgDe95LDJQLoPtYQvQXtxN3b1Bj2ZuvLkzwTnRgRUMTwE4d974hMe3hqWn1F6wtcveuqYSoXE9Vt2Ww7jFMDde",
  "key2": "3ZVsQn7UF6NGUpqVEdUP6LgCDvHZSjXjsGDPJMypGrqjiKdjZp8eEmod1F9NGzoCRJLP5kbFqDt23B1AhRhvdCqG",
  "key3": "3exmeWCy26GkpuLC2vExcQescFbXzodYzdeDH9MwcM6iDJNbsJrzPdB5BoBPuEyLnaiy8a7pgqxijKnZuxc6HAhH",
  "key4": "4sNZ3XS3S7eMcy2zP8qTh7yK6T2F3Tfjq6Ubh4GDnVi89mzsADHD83kpQuHvMvG8uzys32KL7fbB6EXLwsN5PZcu",
  "key5": "2JiZqottgcZ617xDcBuyFgbEkgyYPVoPH2dT35cninViD9W27z6iz3iHByL1ZMWyKMZfeJVWzgad67fZH3H3kDTX",
  "key6": "3WpqFhJ2TGgbETRmHD9pUA6NRiRbuPM5XucA6QVXgTJfFv4iFcWauX9Qfh4iykfTt6kvCTLXMo1mFV9VPvidCgpF",
  "key7": "4S6CSKdY15V3wgz6m36ZfGEBrft5WZfT4MzeqYTLAwfKhz4FSmNaVhk6hfnaB3mF5cHTJmUhkSg4vXn8AU2FBnk4",
  "key8": "44RtEqmKqCGfHr4yewDJWgaM42f1jH4YNMAvbzp1BK84QTTe67iHSMuMESBT1qkU6vpd5YVniUbDhnvbwSGhcnbt",
  "key9": "3avpKj5quJ1oU1M3Y9ki5dHd74VdDo36q36ZQMdrD29WPr3j9bphoYiFiaQ4FVH7Nood99qmE8TGan2Z3gjQTGPh",
  "key10": "3uJJYVgDUPQtK4ZvjvdNzcA6U6y9DChF6hNtZ7hdR1uEm5JsWM5zwnr8kmC2v2eEJUWkvr1jkcux8aZPYNNzHcFR",
  "key11": "3RD4FDch69bYeubFNbuNmFCMzRi3tEmbZLH7GvEdfueVffXrRf7HZCMAUvBX8sLUVixa6Hvkvx2V6rDqAj9ck2WW",
  "key12": "4uh5mF5B2YBMk4cUX59ESvgSmxv85nHUM9EPwotosV36dwgZugRzzBKk1tbKA1paa5QjxX1LhcfwjL9L1qv6hb8a",
  "key13": "2ABXBpFQvVxHHDe98xrMPn7WKheGLmeh4gb9yEUgHXUqo9vKyWbG6pMNHtjZhVr5G8HrouQvtP5ogPctaSSEkZNc",
  "key14": "3w5kthJMczXp2XnvdSeY64Q3zW3fyvvLZ68U917zXGTZw2D91vmoxAPEUMgu1xrpjwmnoEMzVL1MSBodecYnYVup",
  "key15": "2Y3b8bfoxzokSBf4y1nae1J1thnwJuidKZNrTz5bBRPGLnfpd1Xm741GJVQkBrbMwAn2tBf52Cc4m9SdS71dTH5X",
  "key16": "4v3msHkCnbG5ry2a2rcBHq84A7tCoc1dv48S8vkFHhgX3sGv9e5C6DkYubf7FAhTuJnXQekNRsFpUbBE7GkQwdbC",
  "key17": "2wbuT7B2DQsBM3DqnqssLTDGP3AMANhuqF8STB4UGrrNpt94Nqna1EJrtBGeP3HPpLngXpGHBrysh4G3wDYn5qho",
  "key18": "128m8iQmReGbgULBgdPPhvQ6o2hjeBd2stgBUdHuR3nkoxjrksVAFNhWr2jm13YapXHhPq7QiVw6ZroMfXHE1i6S",
  "key19": "xsrWN8PGz4CJ1UWnyqERerqkAtcGuLgYt6US3QsyDUDDZhJcuYSZexfe1M1aniDPaTNDVwwTbyC2zGzWs5SQB46",
  "key20": "RFfiAmv8UQFmSWhcA6rA4uaPfWbYyqmEs7C3QT3u2Z4eFBQrUkcxAcyjeqFTXVDqdcMqsLJxU1KxFHHkEYLnY3S",
  "key21": "4XNJwjHYWdH7Z927L3LhCijAFaVTHMVEgtxr6ZNS6sD6aNJN34tQ55VdHnEUQEse3B6F5Nr3jrDtgzBqy3fVWbrn",
  "key22": "5pPK1hfpVKYTrLSCDuedpmeLAttL3JURPbvUTPtsYR46hQFxtEpvKW3ChYB4R52Uqqfy3WfCNJnM513Pib8oRfNP",
  "key23": "ueucEaHbwRYYBrJ96YCCKeTtC4TAFmBrgF9MnxmkvoekKbHaXxAnyZ4RRam2Ufj2ncmWvxiD9MpURAMZsS55W71",
  "key24": "2KpvvaHfmbEwhijh3c6SdMoDvbreJ45yAyYkdRUfkoRBY9uQFsszo1S4NSMMx3rLsVXvFhXMucbwitX7PCisFs7i",
  "key25": "5TumXXyR1crqQuTepEcCfi9Q3vZBsaUnNobRRQ9avpL8Y7qS7HczD7psLhZiYCSQRaiaxmQBPVrDh16QK63MRGyz",
  "key26": "5toJkDZSNinLptvAJKCZJHSJKmBm7NoVQJ1RP6yVB9S99EGAfD1UVKuZiQ6JdMVwtN6PFjCrG6xPKrSubLwDuBBu",
  "key27": "2ZRYhvJMaBp6hFXsH7D9ythVgGxbd3xEcPAvBhbbKrn4ZT2SwAczwYJkZ9TFEL7TuJmwQBM2Wf3DsE9JyANQ94bJ",
  "key28": "4EQgbdaFDP2R44FyqsqiNNcdWyMaVqaWq2mxcvEdw2jMJc9Qv9xtAirCfHCYHVBZLhn6BxrbqaZCbxjywAUDAU7M",
  "key29": "1dx8ct7Fkddw7T8t8cLJt5vqTDhJjRcDizJyUajU5jgeFD4mvHuzXD9HqoADmgf1WgSDuTJ6yEkYk1rsgnWGdTz",
  "key30": "2kz66LLJpDbgeGrYGjT4etSEWoT3dHy2Xr5g6qEKRRRZJfRi3mbkVnv3GNm52kG7jEQHov5dpmpiCxgtuZUyQJ67",
  "key31": "2YqsWncHCb29K5LtLyhnBpLviWhs9pc995c6cjXkxuWS6NRAgSXCXsb5fXscUVt8LmrKPuJYKG7mKod77HtHjA9k",
  "key32": "2f8qUX1w2o83A4Z6s7sRHcHMxgYh6SYcEPZrocLLunuNncJcqSXaH1dw2Z7QJoJdwMFftzpycqZtk5LCinRPd9HM",
  "key33": "4AjYgkxCGZLPb1yQRQCEixTZvuBpVwnqkGc9qzMsVKUeendAc6P3KcybvAv7LKyhL87z6UopSMm7W455RzUcuwpW",
  "key34": "5euEZdfUyKa3aePeDRc8Uak2sDg8JAVNz2Fbp33bTrQ1wnCPYFcZ9AuCdRPSaTnENFrYcw8B12HhDuhHNBZMH94H",
  "key35": "51jxJYguVCaUFpNH6BsFXNqTBLvf8s8K6g7ehmTQy375STYHQHqDGFV5eNDYaDA29PT6rz8gc8iHefcZ18zi95Po",
  "key36": "3TbB1LREXa1gZQNDm4saXPJCn6YYTjGuiW9b1Do7boAWaRajU6itmnJb8DMfA7J6C43tE6DujtofX1K9GjFSD9Km",
  "key37": "3jJJSYFJSdfhT6mApXiKXXMRsQP4D4UqPYZ9nKXYAdJ6rv6tNgc6pLPhM98wUhr98Wj4js9hZqkm8F25Cszt7dfb",
  "key38": "5Lgtu5oBNZoowYYr9Gh6KkE7r2RMUuCXzxVVHjVFxcFgdK9BdaUicgwLx8YnKhJfJf8jA4GfkK5MmBZJF7jzQHa5",
  "key39": "4qEcQZvTR4Gkrpq2a8rst1Gk1GVBvG4Qhug297fAZ171v4TYYhcZhWXHRodQLNftuAwawfKXkzfcLECcQkzH6frZ",
  "key40": "5aK3RjhUcJ4ump7xqp8cktYnQxUBkb36AXmKJqwbp8wiUrzbsf2uNbeE5XCDQUgBnWmVAhAEAat9eknkUuQoruQD",
  "key41": "41M7E7SxFeNcTLbyXjigayg4UoHne2D5zX5eqJATGKCwGiSwd5xFcPnP1niYD6F6zuYkGMxCjwRTH26tatzF2vGr",
  "key42": "2T2uVX2WuZVka3Wc2Ww8RjD9GXBKyPgqZCzuNv43N66p16AjJ2TM7fXpihvryRxuNi3Wt5y5pHMATu9CfExPzytU"
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
