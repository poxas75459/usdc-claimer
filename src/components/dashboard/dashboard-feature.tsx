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
    "dym52MyVvcPRbikuqrd1jafYXTempSwYiQaDLkcQLyLvq4uCjsgSvJAiukFnXvJ1yubmDqg8Vhc6Ycc4vKvwpxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ccy1DEqcLQeGVn1g9sL9cZnEYvHSDJTinw4W61T86cb1YG3EQhAQURHbaaGGJKWN1vSz8DV2LAvLzU668e9QzVJ",
  "key1": "3TKNv59AMehndr7PGyqcUgJxAwnp3nTBujKBBLXXjizkWV1mSsbm13qdnUWfBDWXDprqYLfXoYg4w67g1y2bPqrg",
  "key2": "4ono4ADY7jLvgpKZwrv8PRgB6DCfabHpXvBsqHarDWAtWU8rH57jxsUrU8stRJZqBc8Lnc69onafM57ZAZNhnQ6F",
  "key3": "4i9fuRbBCBEsWS2cxC8GYG3QJb1w2ibqdVzcj8WqUGiX95tchianUa4AwRWUcPbiUY3hfiuAqqRREQx97AsoqMLv",
  "key4": "gQDYybh4UPJYGfFrxxoUB67tKqYtFQ2pZRmBNrMHgYD7XiiLrKoamerT6AYDgA7fcRpJs95eonRZWhMtyqa35ZF",
  "key5": "2Cxg9rk1a3Y8jM1TExcXzVW9PVvzix6o9B9XyB5xyShmHmwVYRdonmq1JNnuSX6bdTSmzkZp9uVhmrjxwAkAZ5Xp",
  "key6": "654rDsqD63azQpxVZbNwrNpk8adGQNVZ9uma4uE2a1VSpYujjR2N6t2h1LBf1R7f43VJq11NSquLAG3hhArfmjMC",
  "key7": "63RyiymfQe8DKoFaoxC4deNjMJDs4Y7CvF2eYY1r7NC34qGSh18ARuNrYEudLiSgNYExV9f2xhDF36zHHWd7tw5B",
  "key8": "4igDaUar8BVtGJPYp1YGeFYqVRX66qFgKXbgixrUW7fafembt3vdadSPBY7gpxnE6xbacFfz9JVjKGWzNEDF8ugc",
  "key9": "i1GCX8XXGArgHaLZNtsBTie2cr9VNk8VuJwdWvkNXaHqhZfzcgbbsqedU6ws1NBauVftB5o6rTBizvQjTNsjk3j",
  "key10": "2eMBtoiR4JBRRx3yFkYdjRzcKAWjSWooqFaLrYNcRgmYWR9Cz9x3kdyPvYKk5fBC5A2FrLRhZEryaUvLP99Z2Hso",
  "key11": "3VYM5eM2rtFAGWVaD2yFoEQcux9ioordvfy9Pc6tHKPURKRx1o3Es5eYnEUQz6WuhCfYv5Yh5GPWm8nm9euWDt6x",
  "key12": "fZZwH5e5DUYeYryFQfu4PgEf8XUHhQX2FL4z8dBory7sUtTUxFXqzvv9R7Zm7r6AdSUZSVbSfo2m3Ufts6AeZ9k",
  "key13": "2c6RgPdFfymAj1YFWArVaY5tRSoMXRMqsP1ojQkqDQAdREoXpR3eMFT6Dw3VnH8s7fuuzsEiMMU582agrDrjNVH9",
  "key14": "4P4i2TQLSmjvaVjxix69FYTBfoJDPJiCoJ12M5dqnXX5ozG5UJZLuNRvUPpjhaFf6uMF7qowzr1teAkXantVE1qx",
  "key15": "57SBqVnuC1PJUraSqnjVfzSZWFJDMLgEoq3Gg8pcmuHhexCR6JYuhhKVEeDGHRzirwoVnBu1jZ89951L1HmH3U2K",
  "key16": "5CSMTyuoRqTh6E6Fibop6xsCqA1Nuy8iBbjFZPcyQMoQ8tGVBkbASxGXAXqoMefhunsVwL4ijdV5daRp3mYTg4mt",
  "key17": "4CNQxESYiRkufkJiVgDxBAxEXQNafnTEmLAbysAmLmpoDzKpNSEhWpZzrc8hMUmt3XfkRvCh1z9aak8QmoVGsu96",
  "key18": "4ebCjm37N2mcYJxBwR1ZCEd9GsotBnHdu9ifJuFzgRUmWUGFL7m87bJV6QPYohd6gkQcx7rTy7WzZrGVw6skam3M",
  "key19": "2jswXTy6jVb4BEB8vktoWs68rjyyfQoF9R54ni5h2yWCeFUkoJKqoHGQMAMEHUAXLK45r4t6KQUFbsRw6abneU5M",
  "key20": "2v2B5NhXttm7QfRWSZhMZNc9VqReWPVL2Rs9oFG3z5nuh9AQTk2duH7HPG8S5QhqWHTdkmJW3ZzTyBfYg8SZW9gZ",
  "key21": "FKQepHXV81qwunxhWhgj1VjzgtXNPQvPRQEKEkzjrj1oMHHCAL4HF24nA4EtmkjQRwZmcAzEzAGQYcCkxnqjsZ4",
  "key22": "3MeNcJdGmZQKPFcrANSetVSzzq62ock2KX7B2v9uJyAkx2cFq8EjCDZaw4izePh7zimmVgFcVY18VRi6MdpPR3wL",
  "key23": "5MoVwiVG95beXPVHQMUaeHcMiULpwcL53Gyd9XLw635TXJJRUVjmkb1LL1XKV99xLo43ZigFDA8UKnHfY5fTPEyh",
  "key24": "fuSfvPd726FAnhhguBMYaLH25qNGjy5eH8XVAzqSSmZJKcDGr7yynNQRZRbVW2yvdRkXKBhViTMnQB17FsTipTU",
  "key25": "36wTeUodRzqALZpGPRPaQPToJxDwxmo58rpxD6tQtKvTXQaMVE6XtpwGymFm933gjbtpZo1uRfnxXdxWr4h6Qz1r",
  "key26": "5Q4G8ZetpEpHULtmuiZcyfkKGi9B22zCZbosywxHpAazBJDvNi8izXMfwXTs1aqRKchhWA3LpF7yB25HSmER6fLq",
  "key27": "3P54LuqvZ5ZpwkidppdmpiB8op7FvVP2BYqGhLhgMvvkzVDas1EBqQKNXHkPWoamW6tzn92SLPeBRbNdkzHMKEgA",
  "key28": "4A3Jd3UqfGU1DFreaU3erH9EKxo9gGZLgqu7tbNv4kRpgtNzWNZzcXEV6rCg2sYLAExiR3aWH9HSsCcq2aPj81ew",
  "key29": "QAERMAxo4Rb79MuRrGaRdPfLigAGJtURtLXnPR8KnVoj67HeGgkcnuzbWhSi4N2bkS6iKqvyyx3VubKK53RaTxZ",
  "key30": "3MWqxF3WwY8ZzCH8Nf8w62VEguxRGraKyVNDuvFW64hLdfEgNApavN5aijb72DwjVLNWgZMVrmBEQhKLHHkQ6uX7",
  "key31": "2PV5957ipwPrRxbW9Gx3f6cmCyDpn11VZAJtcmyXyZ5aWyYm5jmaEMXCEMujUd4AS4uFDfVZ1uiBdZLNH9YEqgwm",
  "key32": "4DUqvzGsrKycn5eMwbsTCFZNsgaXQHuZAumAb4Ss17eEZvCECeZTk5qzF7UnguybpSxbDW4Xt4hZVeQcLCPu6VY8",
  "key33": "51ibWWD9D7oJjsghehu4DPmh8dGgjcU21bmVHyVUPe2D71PA9one3BS6n1KyUEotEvzPS5P4MWZTfUC2hjadP2XU",
  "key34": "4jUDsKsd1zLLicSDsyHAz1Q98Jtyq5yeYMEBAacqLCF4LZ6YqmtBYy5pU3xw2sUFd47ijp1GBwWHR2GEpzqZbdm7",
  "key35": "5QvadSGixGdYrKGHBNciCHFg8V9ji1ACZKHXurdyLRkN9nBnSd64xavomvHNDsLjSdjUvCRudDdMAAMunCeYSuEE",
  "key36": "4YjgAmay7diEQgDEnnd372BmiGW4p68tyJtBxjmTbXhaBEku8gjPmJNpJpbsTDM7JnzddFKvvN6nDSwDfXevUMBG",
  "key37": "2To2veX5dKteFekxQBPaLc5zmci8CVoaPcBrYXE4v12J3QWrTU2xU15RZHaCC1JiqV9P5mXDF53dRj8mHAS9N3x5",
  "key38": "4fSqKZFN4AFiLGEi2P3DbyYdJFUX4Qn3SFAY1AHyjERrEKTCN7MFHmxJfkC4FsU75HGM4K6Ts7uVdSRHxVAztu2y",
  "key39": "NuieixNZqNJWBb6Cve94BanTG9e75gHHxSzBvsVpNDMvEBMY7bayBxBPmzgLq9AhKCfSKASGfUiqyfSvRAYbCKo",
  "key40": "3qvWstoCEqnCF1G1HPUfsgeuSSsc3ozJnc9FtLtu1BfYoeBDLCo12P857BoCR3fThZ2us9rXoCD1sqCPz2Bx1mNL",
  "key41": "F9qK3Vc69wn4xJEexvcV3Y9Z9pRxitHMoq8ESbWR177kjsEqbNaJv7Un1M87wScPLnopCCw8jA7Xg46pNwFYW6y",
  "key42": "2UotJiMdXnMa2QuC6nq5jvUq58D2w33oKhXL1yLZCDYAvWj1qHLSLSPmFGfzoYtpQvFmd6AH6FgvJBC5si3aEVqZ",
  "key43": "61paAZeHtE4QyuhpyBk5oYYmbp5ktc6pGtM1fihzxL1KR2Zn2cseYN3KEqMP3MaEiUEUxiv9nGD44BDYTGDRYuZd",
  "key44": "3XwZyTYkRjYkR8BWuJU9ActpU1qJZosGZVVbz5VQhjDeKmadX3KZ78a8qKmb4qT86qHLTwC2xRfFCMc59ZTsh5Bd",
  "key45": "5DTVPT3LziE75XCcsLyMExeQ3Jfwht8ETq91jdFdVkLNMb1HniL94iUBEFMuEGiTWykstiF4RSnNYSiU5ieqa3va",
  "key46": "2P1AHpR7qXfW5TNEBDvB3ADrvqeFMVU5eKKhRyPiAYNM41MMACWJmANUWxhPmFzVDb3iBsdoSSNLoJiJ2r5KFxuh",
  "key47": "4fbYjgZECitQshYHAfHNV37E7ZNetZbHBmhksWwjEaxanHHqbg2PFz6X1WyjJp2B31y6VYAV65jboY95kAYfXsLA",
  "key48": "3P96cJFpsMQ2Tdd2Yvj5Zy4TuVoAkdPZggiLdAg8rKew6tmnCze5JETRAPVQhTxpYQWv894NbLjAucRMQebSntdS"
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
