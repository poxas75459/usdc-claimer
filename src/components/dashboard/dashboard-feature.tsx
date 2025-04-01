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
    "4KwsFL3MYmq5cQFHKkHC3FBhSnJjSMQK2p2GTvgy9ELE2GUmrtB2F1BXbNMqNvmB4KVXDBwkTSsD3CBKo3piXVuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JzwS1ck63eUkZJ8EHi4vhXYnPBXwiXw3xc5QqHYpLwKcGCnr3c6NCUTRYTSrNCf8cifg7ihYgrRqQcpAuTZBNxN",
  "key1": "39kAokkWSh3i1ZwQYfPfwR9nNf7GzMCD8dQn7yt9HegyZSj3U52fhmYEXmJy4JXZPqarUpgEMdCn4st9K6WowAyS",
  "key2": "51WbD5B2qtpSR58kyFiefW6ZeVj3DBoz87y8PfK1BhkKAniTDCj8oouB3bb8QawQnQVAS8mCWnfaRRCr6CxMJtuR",
  "key3": "PVuSmv7NKvDeoSViNjoe4RA5vq1duB4zm1YPzq2N43tCTaKYQXUuhK91NF5Mj8dHkW4QbFqjJNwKoryomCb7oBF",
  "key4": "4tyLtwb2G8JrCXGm6se2EsZUP7WANJqHc3Zz2CLLmciCP7rx6iuk7Z8Kfn3hJLL1TD7Nm1nSq7vLW9t9ezgwHzf2",
  "key5": "4ptdFAr4wS8Q8yb1mMFwGvkJfBh3zreiUy6AkG2G1GJLPt6wxSnG5ayMq3tZ6Aeh4UxWwbkTrAXjxfRYeNhPv9WT",
  "key6": "3AEFjbwCnSrpsCc4AVWFLrJ2ZokS8b77EwoR12b59BcAKgoxHqcBrdaAR5QEFVi9CV1rqrKFNz8Mw43bFdQheX3G",
  "key7": "5dExxfz7LSv7bzWTemB2yJSknyeJuZpghSu4U6gVJiGTEtqx6y4cFooyRJbaHR29SKKnCPrajNhFn6Jnvv7wrARQ",
  "key8": "4B7KkuUxZveCBPgBxSEQ2M766TAcW5t2m54ydzro9AqAAE4Po2Kzedbf9Mb1ubPXvfbbdnM9eJ1Rb6MP9GPso1w3",
  "key9": "mQhC4bL5XesY8njetNZfMqMtVJJjRzMBHpdCRjNzRLPkQUes25p269EBCT69TunxCe1JwMY8PJf8N1x1eV3rc4S",
  "key10": "5YFkY6tYuRQqL4Hnh1BMymMG43vFKyMVKdYMTNrPmKTEmwv5WxbwxEknKUZPw35cwP5QootyMdrstYU5jevyXdur",
  "key11": "48AmN4jW2fjMGe2FVyipa2YctY36RxFJgJJZKKrmRH341UqeU94c3K7zVTJyfLPu5huhSZfCtEWsnMQkfVBMXagD",
  "key12": "4kbBZ1uSxpptKBLtoMXcdMT5d9efNkB5gEsUtf8MbTobvuMLVoDB6xZkowk2W7UKXquW4xYY8FKNZ9epriAMhdxt",
  "key13": "Y3DLhUpufinVMvgjAyav9ZmPdTJxB4QULKeVFMnK54iUEYyjw7y7vTmjNvPJELLhrGS2NUC7qUFrXLuKtXFLHhX",
  "key14": "3JTGKDtEh4xwGg555SckDXKiqRJyNSDRrMD6wgoihCoGxWmLqkmoe4raqhxGiPYe9eeZ9HqKoNJZ2gktmpE7JL24",
  "key15": "24S8NKr9oB13rpkMjQ8xF4aoZ49QUtqHuXUF3VY6akipNfe9632BnUdM9xy32HAnmaiS8Di3xiS5NDgnDBvC5mGA",
  "key16": "HtuE9zv5ZkNpjEHeMEFKRMD91sM1vRUGmUzKQpsYNbnKDs8cm8zCdsLqcFwAxCCLVKzicUP82SMuc4evphbg344",
  "key17": "2NF5f6jh8PLnXDpW3QTbNYfrBBhrM21Bb4BxXHa4gMv7woNWaGy7qUb7tVvBsp3p5g1mb5iFndxb9zJbhXpGvxwf",
  "key18": "37YnwJezUdi3dFxXw4Sj4x1syVWJ9zL5sne5Hh2hHobusRGq5s5tqTQKtv8JNE4tisNGCtR21th2rC3fSKLo7xBF",
  "key19": "5THfouF6yw9dGvhbZbahVpQkfxMdKT7c5hpqm7ePBbTPDRraL9HHDyRXZHTfhzZwzprT9LMXnw84T4WLqaThidTD",
  "key20": "2Kx7SjHpNtwKc1mTRJ316tdwpdowCTdP8ub2FTZNzKfzSUT9g9B2JghR7dVEna2ckNZaK8jW8iR7i1jTFgcoJinm",
  "key21": "5GEyjJESpKB6Kqsypt6E1mHKjcMfVJuJvNBNGAXC1Dbg5LweueVa5UzSE88Zfxy5GxTQ5sPKFfdMb5Gmy2EQ13Xy",
  "key22": "3G9p5xPvWPUjru8p3pteqXd4hfoLunarGExAwCktMrTWTELwgmj6sVsX32bcdtiAmTh9hVyxfMsnarsEV5T7g7W7",
  "key23": "3zYpPZJTkitusHKn9acQs9LbdHWY8kmPu5iBWTJSMGm419SSNya74GngK9XAWWzTTUzVNXHuz21BfoWdsjb4A4md",
  "key24": "NjV6dhLLLRfDeHWRizGnScesrHuzN9F5KQbLGsaS8i9Yq5iuc8QEUSwtDtibvxpuwxxZD4SsnnJjBGBUHtWYNLW",
  "key25": "5uCrtSjXF6cxJCDeGgWjAeTWtq4T4SXAYJ3QqrzRkZ1Ar38N3gHKmgaB2dk7aqH7MFhLTHwyaWxHU9syti5zCxK4",
  "key26": "4NAuZgNa8PSedcbbsyDU8nD2qWzBxxfyZ84gfJVm15bMit4NioYDbiSQrt2nbm9qhuRbAp4u6MAQL7Lhm7UuvLWp",
  "key27": "3GeHChMzujr8LSrG5q7UD7Q2gQww29Gjp9kudMoXknc962fQDxBAvFAUkdouDx7rmzEhwSi2C6EctHJbyaQhHy2p",
  "key28": "2M2cN1yg1b9adr8VMmB3Vnt4D5V47Qu9d2XVK1qgfaoKhSbZZJsQW7frRn15HXXcTtYYk1wGqPwE4ZFcifMs2WPU",
  "key29": "2xc6bUwpKRj5QXy52m5uJdfyRZjAuBaDixJyUnM24weQjixvojBTG5jF7ut3iuBtGrEwupKMgX2Q47215ctCcHDc",
  "key30": "os6Lrergvr5fVnpxZkXF8yrDBfjzwygu1vwwrDZdh4UKRCkb2pVEB7TpjtKadpgKh8mojEY9CTvfQyuLasNQfeV",
  "key31": "48PEmTt4KAxvyQBeQzWMyBCkTiXsJDLmvdsZgGdMsXKz4YEwDbN3TZuiwddbqVkxbZ5dKpUWaR1xNMt3RK9rsPNj",
  "key32": "3afEHPAyKEEXtrQM3qJ8FwKabHLh938r9xmWk9QFaL6XeG1fVWvC9i3FMChv6h2o8wNs53QxPptcJngr4XcAifRj",
  "key33": "3WfUV8woHy8bRqeu81jGXak9xUDqiVFsJ1CSesxmVBbQ9cXC6M5t5aTkPExhbpbt57L2P7ABhDTdFURm8dszTUSQ",
  "key34": "XSvfMPJ57HBWEmRacM3nzV9dyaUT2evSsPHexVsULG8oTR1DRoREfC58e75z15AukbVya42iZsRUmg2poeBsTnN",
  "key35": "5HA4fthB5DM5stANH2XWP753B43MQvz8S6gXH1hkKQaSu55kNeMX8ZnG4WDqxp2wd5ZPk16Z9Y7i1iuFovzabz7Z",
  "key36": "3pxRk8rBvnZxkvxTYN6oGcm6cWBVw2CZP7WwKNKwfZGxH8bjR3BZCVRPVNXPveF1UFFEw3HTrhHSiHZj6sqXSWEC"
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
