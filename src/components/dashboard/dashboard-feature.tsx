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
    "2rMpzNZMLbuvfpCpZTFjrVnwQL1H5MSkkJNi24okJXi6cb7dAgj2YuGKV9VYCMjo7VXzUgHGaMRXbaer938cpTio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f37uPLPG4QpZfrmhPDeiCSNYcGMe5Du5k1NvwU7Vb92bEMPUfUNXk3yW6qZiTkrAQjBy7mDud6mazRu2mrLMe56",
  "key1": "2RePysqBZYJjf1aQXnrAZQxULHWmq8rZfGeGNqGVAWqedppENjhAu7hAaQco8ZZfxV3wRuJ5Bc9qE6V84jx6Xvzh",
  "key2": "3hZnbFjWMUwfonechzk62kfkHP16851n1biwxjif7Zmnx3FN2hEJtpB6ZDWDNQGb86akBH7Q6Q5KcJLZhqxdroEi",
  "key3": "5mpaVUgfWXhKX4VueHdEzoe4fhbyAEUTXVmnxYQECB9Wtmi4ZFcqb9bHvTAdvPvAiZmAscwdhczuB5LxdKU1Akgc",
  "key4": "4AzMmT663ooS6W5etA4r4dLnSy9enfJ4zu2PY8SB2bcpCXepbaVcEyVVarTGiXpNtUB9zQGpdfdk5XpZgwvzxq2Z",
  "key5": "2FceUq8asn7FttkvucaGJD5iT6cTisNaW5Ak6KMA6QaYJD2mmjTwaWSLTsnZowaZnmzzPa9iQgNDyBJNpQXJxY5X",
  "key6": "4qowwuUP2cvFySGEJwCqFrmD7GzqLyzLa1TaXRmihkDsayfDjJgoJo7QbhG8eucamdcNaBm1UhyYiJPwgsXiFTXB",
  "key7": "27ccP2XtjqvZ95GJLE7jVYVmG1aT9TxpShhm68hA7ru3uZTzsmggT4cdpgKvJKjkMvHpob7GeakKRefP9RHUnLLT",
  "key8": "4in8AzLejtiTJEmty7WukMPewr2iEeFJEcUDdKNxzrA17djCMQX24oo1f7JAZygbqU7EzB8t5EXS32pczeSNz3jB",
  "key9": "64Adf5Qd6jMPkQFoAcQSWN5U72C1DoRm9r2A2arRsYoZaaCibpmYxeYzVhV8RC2qzHBpQqoJQurnxvZ95kXB4tbT",
  "key10": "2zintupWfUkJiY3PwPFHjgzXyGCcN1axrsA2dy3FfuLHoy8b3H7351L9LP9DChDpRTEdkSSR7hgMvdKyCDrZEJuM",
  "key11": "4MwmtgwXQ35XrgX4EA4krK6Mh7dpMxKB5y2P4q1oLQdfp4isHL74M5JHKH1pPDdmx1uvRXxygdddLxBjWXhS7Xw2",
  "key12": "4oCtw82kx25hSVpaU25FexKYuhfr7NyPQ4vnPYVKhSszJGUJxKLuVNWLkgYc2F2hEooqYa1Uvo7pjcQ7mJaUSqrt",
  "key13": "5pQKxzWiExKpv4rtuDCEtES2BjuKPWkvxkBpw4pigabeimJFKxCQuHuwtoDvGdbKCFqHHy59xEHJaJYrd9x7hGdj",
  "key14": "3Xw3sRAtoEKodyJB8YAd4JR9kN3Pmr211r71DiPjKmqoEKWg4Ntc782A59rhUNawUhwFrFPyEZPz2VXxk73JJKNL",
  "key15": "hkmkWP8AnDjPiM7Kf48qLiXXATcghsu5QhVZ1udrQhAVzitETd1vpvqd5MVDeQrkRaWJd6KoGwXt35s1WM8vQW4",
  "key16": "3iNPmM3wUNmmunRTjZShyDxVQCnWiBr2kZJRkn8TU38CjXazrT3xREqkVMgUCwoMnbHUCbrmSVtnvv3uf6YQKizT",
  "key17": "2FnZXuzFUzr81p4PxqjmvBS45d1KaB1qZcLedoSoTZA7GoqXbhmEWQbfu6EitG4vx9pFGmZLPBeriJrgZYhRogkN",
  "key18": "2RZGVVgWbtyxUkrpV6xRrsRdtDt8oL8tesHGRUUYw4UeNxZJwgLgH11zKj4LV65oT5HT4vonBpVczDb8Lx8rpgA8",
  "key19": "2NeFrKwdkRRZMokiuAhv6iEBYAiiQvoNasPKYxkDdJQm6tYWJCNZ4bJ1v1Ueg8uJUEYupYuF8qa1RwZinGBmVbbi",
  "key20": "3PyiMEeNeihGAfisjY9PGHwnJxYQQuhY5q9tbxMJNnqFEnX4P3ADFC8ubTQzrqx1cmHCKomcNtUFvWfi3TpJ2apu",
  "key21": "25A4k9x6uhhSvBJq7QUqmgoSbYcbRnq6J794GcDiFU8v3LvfAJJPfmfptx3ib1WMyA89a5k3ntnTRmY6N8jNg1tM",
  "key22": "4qzBRwQvNgaBbTnDPFTNedJ2nsGGpe9SCuuae4YxZiu6mPsW6BjWYhWWvCuPb469wWPBedT21oAkczzQePPdiWQ9",
  "key23": "2S6Qo6kAV296NBVfS2TGFbgaJGFk3BJewFUjk9Qy9kNL46QwfoSNNd3pZawnwYdKPvzBeYvUFX62HQmGxq7j4uia",
  "key24": "wMLpoVjAanuvj32GzPHfX1etwneb1Jk9BE1v3uX9JJao4cSYR7hsxK2BZ9w5L53CKH7w64i1wZhNaBrmK1WCRHH",
  "key25": "j3hUMwELqBvACruDFa12waYshbGvDW8Eirpojg3E4fexcdV8WKQwxDpuUUmeExSQBy8PrEKyu5ydCYYRpbs91Lz",
  "key26": "42u4egkxfUc94kuifhD2WchpHFUS4TZhuynwVw9dAkokpwkWvC9LyL4eYkJE2TdQkTqP92W56UeynqvPeuHSd3PP",
  "key27": "6cUf5TsjaCzjFSoHvPhjaeVEaGTUu4bgHtmXuJdhJhPnDPKxhviXB9MdaSyBZFpqmAM5VtyTJkDKPSviA99LGNY",
  "key28": "REPXKLtfwXfvp1QUsfthPZcramuD8mrAN8SqjSbni1nQnSYtj6TemHdMfYhsheX6WYUGJmSbsX9kiZiFFd4Ve2d",
  "key29": "2N2ysxRJUosY7NDw7FU5R1CsayybUdce8aoQyADuCoZ3sN7JmQ6pM92Xt7Mh8EeRSVZkZTV4DSgHtBqD4mijWEJw",
  "key30": "2LuqaWumLruYPG4JDXgT5PbMtKq9SHLtUoCNwDpwiJc68xyRiuK47WeP5EppSnNYzRfTpVfJyXX23wEj9oQGFdzR",
  "key31": "44QA1KZaC9WXWJdWackVCQXSmwzeNoMJPui5QW8yDtFyYXXCcpGnuxCeqwFETxVW4Gy2HaBRSUXgY2Qc7QXcqJNw",
  "key32": "3fJ58juHQ2oZeXZnABfQRu79CcS2az2yKqGeDH6BjmqQQJJ9hfdNdnDbaYte5gJtpYg8wGTBT7qCMLHYVP9jTNBV",
  "key33": "3RnkKFZa8WFRFUzdbGwZBEuvLRVXAeRYbo5PS7VcdYzAVXshCt6ScCnJNTdFihrh7xX4f6LGhgyf7RGJc2aaKEZR",
  "key34": "3ZT1AbRFeW1oHCN2cYQQo6Dm7PFxDUeYs36KhqzGmZt8m7NPLR8mV7vcDBB2juxwxK28BZtjkp3Shi478AyTvXRg",
  "key35": "2yqGHDZpY16tFadiVMx7GcpDJ5imbvL7jTNEMr3EDkLhnjnMp8rHHjhRN9dxf3Vvf3GwGQv5WA5s1XG77Akaq2Tv",
  "key36": "4nXD4KDBdgXByXrzrhG3TZ2MRvc5kSD8Gr5A9kjpugcMTCGVHzEZfbQgLKFKwNeEZPjbx6nZUSGssjV2GeTaPwEL",
  "key37": "4r9uAD2KCTz1z6J5bFfsyTk3YJMzv9YQjgqqkMh4S1hMVJ9dZ2P1WgWWTz7FLxr2iVfjncmuoC7fQGEt9nZsMHmu",
  "key38": "NQ4rkGj2pGrDCgp75VYX2gHZPjdSJrQ9rWvS6JoL7EN1Jd4JuPuz8aJVMxzTCkrK1tEyEjZMB19JV1STpLcokFH",
  "key39": "5pB58khBm37mP51rHwKn8LsLTNq5CWqq6b9NYdPuoy4DbkJLMjd5NYrWc7G25BuoUMAZSD7hiVymcuUJCjLDkCu5",
  "key40": "5k4ZNNVQbYvVNbBvtD1exgt58XhdagJqPW7eUTEAyQ6BUft1RUCyxdHLoEm5yCtVQc8VURupNgtgGj2ktoP5EDF3",
  "key41": "5Lz9BaCMDYtJmDRLSFwAxeszruyNVgGtrUh4md3gdMRTy5xXGpdZRkscQYA98gWNQj6U4UAW8uKvnhz2meCcef92",
  "key42": "3oa1M3GWbHXBw1Qq542sFn31LP9oDMQ4mHQpPLb2om5yFSyraiq9hbXrcAg8p9gv5yN2LiMxXpHCVe9YN7QUQKAz",
  "key43": "3L61MHt3jicEr1dixmstp6YDSGF3s9aygJt2vz9LfYrt4ePeNjmdHzSmJ9ArwS61UgkxdaTf2iC73GqupmG3rjrq",
  "key44": "5Sixejj2ZKP6GUNGZuEEcAJ84T5Cuqi43nFmqxYAaeFphfmY1HPDdUqKbLBP9hkCRuvJN2Hd1Kp54MHAeG6Y7YVr"
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
