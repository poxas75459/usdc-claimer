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
    "qUWDT1LtpZ1L9GWDg2zXsJACfbPEHbvGfH7Anu1qyR5zjiptCREFmdZcd6ZrUYd8RxWgZCox2XmqbUcULovujy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r17LvrrvW5yS89GNrFasGsuRg4KBvCQZ3g6Xo8xGeRKzEZNbqRpKq5W7bCAobNVDr8nabcjUsYLLb78bDiFgoga",
  "key1": "4DMyyVLkyRsTXaLvbAVyEd7Pdnwd1oqoyF3ymS79rTsvMYWstvtJ2ZApZpC2q3TVNkARz5cj722kcFHr8PxgR9Wb",
  "key2": "5ohPcU3ou3ougAXTwFE3UAGcu3RiXh5LqwwRoS9MmFZWvncCrQY8xg78TyaiDR7NUv7GKc6fv46MUNDndf327vvo",
  "key3": "3LjhBjT9Ag1ogdvSUM3btwTm4mBNw5bNKrjYYwAtmNo4STzuZFVEaje2hJUNhL71fhm3ayM7gbVbxExeJgnXN4ty",
  "key4": "3wrbXJRuCRQcjGwpHx2YDqnWAHT7Q2UDwCvJdb3URPUhPavrTwMEe6M1H7dCALsyBfe7eENvMbq9PfDV8FtoZC2m",
  "key5": "3fUEvDXtzHD97PDwW191nBgneFXZgJzxJxrh8A1zjpXczuGWRH95UY9uUSkEUEhxLukyHWTGuPtctSXjhWC3xdYG",
  "key6": "rACW639ptxPmS2CbjjAivBWoM7CHwVaWPeApgAyuYJ7BC66bJARWaDNMewBX8jtS92MbuFPCEGAeKCT6w3ZqraG",
  "key7": "4CaHGdSccYEKvYMcix98j8Ayb9ZXz5fhe6NEHNFhVRvcJDrrZgJ5jmqB7YTSasXuJyq2EqxUGsfZjGnDKd79JVd8",
  "key8": "4vknt9XA3MHxfWB7B7cno4j4J7YG5b61GzQatpLQpW7vZBBKm3qBQsQ7xpwhdRrBx7P5e3nfvgbqRRmspbC81tCS",
  "key9": "5DSASEeDwcJ2UkwCiU9vrtADZTuQSdetKF6MTMDKmHVGh7JjjFkvazk1YTwcVanuMLAwAzFFUFJ784LLSazbiRyt",
  "key10": "VoV4DWBrFE7NZmhWJh2NdcTEjDtDVcjbco1YZX94YSVqMKajnBFmqHC4sszaf3kptetzcf9b4MTryZNY6hRFhJH",
  "key11": "5XKmhistA49M5C3saPfUjYk3jhAvAjaK1CNmXJqAV1whtXV7LxdoVfE5Z5JBQgiSgbFnarrU6Ybgw2BHapoA7EPc",
  "key12": "2cmbD5JCZ3A8M68CgNZNBQcVhpEN2Sa3LoFB6Lq62gtLv9iFWFLtzQKu96s8d3T2763x5hrSK4qy8ZrpBXeQ4MKo",
  "key13": "5EkUMkNCzf5X6ZnbPUen1Cy97EZoNjVLXmSPsaPc1u235HoNu4AcVxTZ8kqCav3Fk6Vy3TU3PKiqBFCDKEa7pLgS",
  "key14": "5S1Ds44LSaWZi2CQdveLnQdFgGTqsVyqVvg8TngeycZ9NdRHttKzwrkvsTunwbf2JZAmJ5Hazis1m3Dg8dbS8g3v",
  "key15": "2sww5YybY3bnqLNjzAZhNSzJtvuzPxSnXXMz2wBoRukQuhheNY44iM133b4i4rxwFdVDrXVxrC824Ci8Z9jCDn7H",
  "key16": "2riUGPrXUfERuiU2G3wrFAyTrZ85LfeK5a16qaPWcdY8qj2UJGqYZXwDpQK9zonb4BfrfpaRWsqHHzjAxDQ5thKp",
  "key17": "2qiy242HJjBD7QQZbmyVH7edfhVfmd7AkTk5FQWUgfkZp8AYMgmwpgGW9eQCExGiDk5n1RQjDQt8fEFKarsCJ8q3",
  "key18": "4AUBWrc7N7yxNmAQvSLn7jsiyFg2DvzU9ycFutgSxJ6hU8s8yVQFUwd59hMh3qmpLSZzLrvxudFw2ULZJL7VusP5",
  "key19": "5H57i5hBUgvfRZJjYNgAqovJ2Z4vWABdumMgxhrrz64Ntap3gDm3R75E85951Hupw5Ro9oigCLhZCTTARcSnzjp3",
  "key20": "5UctgeyVfNGmVaLVEyGJUGMCnuMg3mTqwHA8dBGrLprqWwJZj9oCmzeuigga422WHMyn2KbEjc6yBmf38kQYRPmG",
  "key21": "4pMvj2NtpfjZqPqNR8GxgRohTK6YMMWCzjnQRyAdxsLy6bnMt2URQWY67ho8rWeH9Y9n5mtdEQXQxf9Fm5TEPASK",
  "key22": "52hHExi29farts7GszRnsbyHHZsg7hkZb34TyJ6CfWmUk4cTbGBanjEcJdixVPkkNf1z6edaBa7nePbfjNvqP2Xp",
  "key23": "4RGmdBfL3PHe44BjWgtSa7DUxn6VgwLwEfs6bBHYwAkKFHm3nveDA2BomPgzcuWjgU4QSKy2FkDd7m6kkmiwgqyA",
  "key24": "782pSa8Pn5kdGLTAb5RhaCGQkeNUjhgUGujw2Tn1TPmPEsHkWALUCDwWneF5GYT7eFkGEafQzeMt2gtzqNdFbSG",
  "key25": "hnbbhyaRDBQ7szC72DgQS6Py6LJGrktKzzf3PPYKpbHjnU1Dw3xRdM3bkb3UMRoqDjVLqaT72oJxHSWr1XpjJye",
  "key26": "5xFT8hDrsWka9ZWkWfJRCKUqRX1Y7oJXtNf69ipWUbdoXrVabVXmK49Xs6cbR9wJwoz5CDFNsp1ZZ21dFLxcGFz2",
  "key27": "4FBXoxZzCcS779KoTXUFiFYyxgqQ9Sos7euF42TDqG4YMDoeLegrDwPYVubXjxT6R4AiJjAahP31i7Dkm3b62M2r",
  "key28": "g1PgKc4BuFudZwwJAgMQ4N4RPf3ciEmoqpFw2jpxK2RWSgD3AAJvXjYCYKT6Y1oPRF3YhkVDYHkbWfv9f7PQVd3",
  "key29": "4yHWtJdatYS2XUx31Vhef2NmPcKrEVyjYReQmocdUoEXYiAxEcDJp9vWtzrVtzZq4cGh6aikryQQs231FDSf2hia",
  "key30": "2hDmTz8Ux34ekiazaFjyFosHRt2ZTzitxx8EnBgjTvY79DdhidP8wWq7SBXZax42ZaDxV7JFCKygrhJfHhFKCLc2",
  "key31": "st97RkRPbdWo5W6PUbbjhBsbqptAQnb9AFuB62mTWVjciwfYhoBZKhh78DCGunuL68DpVeybs6mVWoencNjzQxH",
  "key32": "3ha3X434WJ4zTZJmz3P697qj4tBVVptpmHzRUENqLYeXJHTBxX16bMGp5tAZURaKvz9R2esEn1MPgwgDXHWXTaYr",
  "key33": "4irDKWJsMq7Mfm4i1VYQg6wxradWUZ56eQwRFrEVNuyRg2yvsXkVtChJTjMsLNzww8jysm2Swcn6qxt2RGHiAnex",
  "key34": "xSt1qVuJP6K82DiBC7Zy8cM4twN6R3sQ27AbKYW9yR9nL67EiVZ5zh13J8uu93m1c6ZahmxDLBrt5xsbk3rFkAx",
  "key35": "2PRE2iC3xxaNwafqZNvg7wJE659GQhyGEeKQC5NXeQ48jMtz4KGfAVitY1Xfz36XMu1rbVV5LbKpW7k3ZyEvX1j1",
  "key36": "3Thj8yTSFzwSPnq96PtVka5HN8iBxvmaaZ5jD682ytCEEW7vFvPLm6B1vdtPCxQsULsdy6pRL6E5eoz5bFkSYT6t",
  "key37": "5VcCD2agyZ1QEjR2LyuXJ4AjYD9jHMasxdfFaXPhRmKEEVYsJ8qKemz9FkHahW9UNUtKfUgGy4D6HGqU167pAYny",
  "key38": "25svHmjSmVgsp6fikToCra2wT7XokESUq8XMe9sEBjKJPDGmm1hPvdBnsbtCtyF5SGUEVdGsD1g2gS3NZrfzewah",
  "key39": "3hb2gji7vC5KNYYk1DZqpcpTSVqZpiTonSE94WAAfQb5EA3S2mC5PYnF2UgPiBt3DA8GV2qqFU6aLWd5vABhMZuF",
  "key40": "UynNxKeHvyd7SFHnaiajoBDb5ACoCyLtXBmWVWUUAoECjEV8UsN6ZCqSQDidJF6VYZKjtpHwdd4M9uY96ihHouh",
  "key41": "hsHwkd5oPzFv44LRmYkFLH554nyZZbcDsGa7BdV22djSrjhjUL6rzSx1P32PsyvCB13iDWnKqgivLoA9dehv2T1",
  "key42": "5wZAUTEYqcQZEU97TLkPLodKZWMVaRoiBrZFgEkTHSz1BhR2GiLHee18Lo4m9f4ABM1Jxn2ohCTWovf972zgQ6ZF",
  "key43": "3mSACNzeZKFDJaMc7Rs7Pav2fUMBd34fH3mNwHvdkhEhqhjZ3wW1Vgx1aEjYyfepq3zZUe26FuY5QJae7TAKY5js",
  "key44": "4nmXCENcRRV781SHnp4UH7wF1QsCj2UfmTZXambuh5xCVYoNBkkBSm8JLmpLeJezuGBbMyps2wQJV1EiPB47JLnz",
  "key45": "4ZYK81GZScK5UKCggnUNQtxwjeZLjhDzDg9zJFcbHJrUnQ7Lhy2M5mGpyHe1rdSXyQXVL95TYWSydxMxhbjdw7sV",
  "key46": "57seDVrFDRhr3sZXhZKbrVcNFttiDZJodEPM1x7x7mpru6YVb7tQHMZKstWWSdiVuY7aXwwafe7FLVSJpDy7GTkw"
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
