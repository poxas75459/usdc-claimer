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
    "4dUvRB2GJ8LNuikfDKo5jUZK4PjCvgxcSTP4itzdh43uQsJ8hxby9YE2ZVJubFQXWyRTTxcYPABgyiW4U335Q6GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rxe29fEA9pwpawYgU9vdv7nqk9ACpRYH5G7bHquVuEw4RfJQRwzyaqTgGrgBu2T7JwgUXXuSxTjRWqSHfLHd46G",
  "key1": "16GRZWaUVZdYrY7jKXkCT2B5RhNAZ24L3CJyQJ3ebaHGK4Sb952AUaWsAenCopNNhc6Zc65ezFenZCfLTqvUZNK",
  "key2": "5SEkWg6Xy24MBoWqf2acK5SzNCf74FuMCM5QUxyjNxXSGqVPZ2rgQhEwbWjyuSqr12K2RZ9CCF5pF3VSXpyE4TFe",
  "key3": "3tD8hNTFX1B1Ly1xSnzMKfAg2A4HJ248wPMHAWY7fRmtu2mrKKR1K5DGAYbuRWCjAhD2wWYyh54eVY8JdkYzrzqP",
  "key4": "PbQ8S4bb9PyaHYobPDLTGTszpHe2UkUXFcB1ac3SwSTXKXtUVQynKFtSbitPELfvk3EMbs8UTW9aFjdeQEzZ1dF",
  "key5": "4suLemd71GWiF8ZxWSKtv9LvjgYXn7VwtYFVHNqoFXp45n6kUc832h1JHvgxEUBmnHBNrmiK4HhcgJzzHmANFwZD",
  "key6": "2PHHTz9nSg8szYU32SbFELpS94Vc5AbmQpA4wxkZjSUrMr6kduY33dwFHaQ2UEAhyR3Q5f94wDCzMhZFY4HR8d9X",
  "key7": "4zSTBbE8L4h8tXqhdtqLJkQBAzoQwPHRMVxk9HZbdEmMQL1fXpKFQnk7scLazAmTrvLdQuuUovaTnDEU9C3UNwon",
  "key8": "Hgq6n7UwhxwYHPhGovHMujQCDmHxKPRuENBxohUmBqwNvhYLcui5J8GYa6Ke5MBR2Pdusm2qBxGjLauniCjPeH2",
  "key9": "5A7KiShqEhGAHa3to4rGCznJQgT16ptWxxx83QoHESuzGshagU3bZCMt6izoDFVRriB3JABPBE4FQbhX4rciz4xD",
  "key10": "5YZtwxnWHsqQwmtmKCHNXX7UyJ7McDm4urGMs8aDW9kzrn9pyvaoLBgMGCK7PMMirZ2uRw1MfUP97gsVk4BYsCM6",
  "key11": "3FsQKMsxNz6hfRWvB3jsvP6jJsfveuKeBtk49xVZ4M3zYoX49kwzdVnZ1WLLYrN8xgaHnkVHH1wLm2mY7xgfuRZ4",
  "key12": "5ruqtXN2kasLjjVefLwyTzFGujZCK95j8MPDin1zhRwCAs7jBJp565HDSc9t4UTVmhy6LXXRyhQC439aA8rnHsPL",
  "key13": "5qffDiQ1PKCr5pyTwujXiz3irXgyjPR5B1VdQtTFjw8nJNH7Zgw41HLDdyxN7qMMYp6MF7SfvKfNVmoZfuG1g7v9",
  "key14": "2vsTGYwAYZEAkVMY56VmRdmKhXx2ruCjfWt1UvfJpvbRmfXaVAcQkkFWYWErpth4z6i7xfu3kvnHhj4GvagMiQXG",
  "key15": "5xA52ZoyzyHr5mTo34x5WfHWgB4e4s9pjm661Tq8ysC6S4P7JgcjQVXJBZB5qSh239RzD7qwbvmv4fZoVmNJjaWt",
  "key16": "4PsJhAW2TCDAc4cdh39Ws7WpaLh7s442xMut1Rvs5otv5cvGTzc5rhFdSrcSUDnZUe1QLTHufxLJk2fvLCzLew2h",
  "key17": "2HrAPyHowJaGcSiRr8DcQzm1wDPJgaynJzBfGQXcq2HAFGGCrAYEwMovyDq8QDimgEgiXKU2chooBiK3i2mpwD26",
  "key18": "5ysFNjBtSqFYj3ocsBS4u77BDxUYP7XznnNz2AZ95S7MU4MTxAvAktVMWL5HvAV5ER4Pok4yvGvHaxfCUqQwJE2p",
  "key19": "41nPqQGMity6rGfJ495f6zEZoeK6yW3BFhgyVhUz4VTapgn6DukY2cRRmgHiXpnvixxRaX4Q3z1ijPqz6JY4SbuL",
  "key20": "44tS3LfFYBwPv42JKA8W9za5mfUvM2gELcneSv4PysNMa6zCqsMy4RFrXbv3ixW8YdwU8cm2hzioaQFmTXZ2EG6p",
  "key21": "5FrRSKNmTwjCrsjeFWxK3kv2GcLvtoqq4CV26vVgE4UuchnXRRX1JnBjbGT4qRfKaQPSsMd9vcyF5yxLPxPxXDei",
  "key22": "5bhyWqnHQ7AASGcJK9zWwsQvZfpyCmihsYuiJh5BxK7rjKmB6vd5HNPXcmY4qeFK49LiuwcAxUPSfAXUG68W1Ga9",
  "key23": "5MqA1rdKqJJhhoBHR9E3H4Gddr8bj6i2MFsDhP4zgqGNCK7mCyvGynuMaPYhezrLkMJVDaY1seMzXTQBqovfmMG8",
  "key24": "5X8nuNTxz5ouZmKX3eNkLytKnNaesAh5kV3ixTGJVhQrXtjXFXRqqz48p1PM7vxdJJ87aw4eKsKsU5vLDAhKSrxB",
  "key25": "65a3KT3dPqeNFFG99e2xcE5DuJ3bqhePX3EPpzJ241ZeV7x1P1UmRUGNUsEs2hTptSfeKNPD7KYZwMysnAm8kWD",
  "key26": "1CDF7QDdBd6L5RUkq7tAS6V8iacUVm6bHA5bS2adYKrg4GtzFfJYvE4yruFhQneXReSLtaLwV7eohtNCKjwckhy",
  "key27": "2cjkspYLEmU9RpiRutSgjSu7Ns2MGrAtLZCVtFafwsEjDN38Ht1kqFvFKEWtershzQpJqScbRFGMAusCc8JP5Mrm",
  "key28": "4p2G2S4RA7tfLtcrYMyaKDgfMHjaSqgfEmLxhTgKxqKYXGSqHVk9865s8xeXoSLVP3EM3k2aMoyFBpa1AUP5vvNF",
  "key29": "3t1qG1yPopz2CvP6mHuPXmBKwo7P7wwCJu9cXvpZuGurQzdW71Q3tZ9nQuMqrpomq2NnhBUURo7VpubYiqpKsKsS",
  "key30": "2Pb2uwctpHvssNvoFWEBzZAp2cPJJzug3PNJtMvYSAxuF9ffPipRZ5GSpYDw7rX6DDRnNMRmNJRgW11TL34v1oqu",
  "key31": "5TCC9osBYFKBXFYZY554VGhqnmAUb8NkkZWjqG8oGA6FLhHDbtdm5C1k8C5atp1aqvQ6LA368dpWeWb3qpW68AsA",
  "key32": "4yJzpbZ3SgEqcvd8U5sm4uGduum7RaGxs8C592LosQFE6vSEj53Y4nd7hbwZanU5eTzkUgdcgzqGo88moxKyiFh3",
  "key33": "3RpKwGEJHUCmu6PT6sYndLUu7eSXZkT5npaZfL2YUKivXTkvaNzmbrADGqCFga6LE4f4ERGjZmsfHS5hkUayfrRT",
  "key34": "4EM1E5b2wEbZk3g9mh7Nav2dFqc5stydN67e25RfYgftM98njn7GFjW8oYkiYJQmyie31nhLeveYgmvFpWLJm1kV",
  "key35": "42gtomugYzLBfm7asMYwFvYQxqeaAMe8q9iE1BKFUeEWyvop9dWdSGThEHCMyZBVm7ckzjrpVoW45uSciFfbEeYP",
  "key36": "iDHWfND9WKwrZaJ77XHh8o5AJTnHvQp8UguonDGZwfBBB8h58gYJDiEGr4V6L138nQx3U8rdVSZRMbW15neWLon",
  "key37": "35ah542urLjqzjBWMxxHwEZ5A2kNdC9pnBXk5ALe5WJzjdHxYmsvpNXyDqNCd3UTH75BUbeqisb1m2DFh1bFbBTd",
  "key38": "2W8knLTKsFKJx6hyuig6dHyFFMa8Q7GqYYYuyFCtqTnmXVz4fxJwRi5VipBBg1nT7SEPvoVgshUeU7xJuPh8N79G",
  "key39": "45dNNCUGxQu3YTRZfh1yyFNwSEAVNhLSSdZAy7EdvBQaM32QxdvJAA2BQuFbs7g8uJNAhGeU8m7T2g3iENskDKFY",
  "key40": "3i2TWb9gh59nu5TBtedbrU1U94eDGiUC5ByXa8DunjpCt1RiJEEKxYJ4Q3pZerNHMfyuLiJgR5KtNXgswGM6qPAq",
  "key41": "3dnkLuNWD2XFEwiyriUB6rHoerw6JFjkw398jXsg4jz1XBknTUGoBjBPczSNm4gS8ASdCdMsENH49m4CSJjr3F3B",
  "key42": "4n84yNbR5fcEJ6mfSma4CZaqMHWLgWwmwoXSSkyVZDVZkjFhHN2RbEHGnt6M7pyS99SeNP5qNLsGSkc1FwbtCqX4",
  "key43": "81Uyru1h6jR37HbibDXFDsBRkxvwhRabvumUiBuYnFdAzWCXN3Ve6PL4MVRHCDFSMuJuFffLiYjDb98TZx3iiQY",
  "key44": "5XjNZNeTa8waXnknhXc6JNGzmdnbxy12yTmFoH4nFBMKLN3FSWFvQgqjLYzRRwtwW8RVGNdvw4SJrCH8Doe6qG31",
  "key45": "4i1LWZNW6QrvyNNgeNYRR1d1mp9x9NETHJ67jrPk9DafZAr3Ndud5YC8i9KjNcscgsAtoFyGQ9owgUYRGARkuBNK",
  "key46": "Fn4n9cJ2FhX1DRBnzWwG4x4zPMospvigh8WWiBDhJ2r5BWc91S3KrdnrjmfUAjJJHGpBQtaCES8GgN6YC9AciVY"
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
