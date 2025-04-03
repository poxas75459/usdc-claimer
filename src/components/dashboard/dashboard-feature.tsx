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
    "5H2dothLxQimJajBqsLz87Sja8Dv2xd1tcFio9wgs8iy3Yv9uhvXXJwDG74jj84EFb45gxeyWaNPCTCVAh8E5dPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Nmyj982MXxWaKZQitJ4hy5spRW7FFzNxUghWZyuwKg58YdnoBiZoXUpYuuwXuHR9QaprjuNQq54a6eDqvPHiS",
  "key1": "22Lapc2bmk91GgrbUVnJDK6SPoY4tkh2Pc5tssWjqqArLL43im3GxmFDzvP8GudcqhB9zbPf2TdyoZNVH7LQxmPg",
  "key2": "4R7kGFaJYrVS6trudTq69gke9Hu2H7zcvkUVJfgrquFUVp7cm3ESxprNviCna442jRnBuEBAYorSi42iaTMUQyK4",
  "key3": "56PeojrSU6vrowPrJkduim2CyMciBC1CNDgF3T5WfQcAogTkEd8TTJ8yyNtjPZhvMydtYL4NsaP8EQWditqkDL5J",
  "key4": "5sxTfVbDSAS5NhAYbAwPdY5DJpPoFuutmQEsfT2MJQhFCnG5kGCQrdwumkudJfxeyTUuaVEXgL5rntDtejmKHEBA",
  "key5": "2nJdYjP2NbM1CxxsEKUyHdPnbBitwcTFhYGsfMpF1KT2v9iiKJA3cY4w3sxJqjQhSFd6igNeNpUNSZi63ZT5smz9",
  "key6": "3H6higAR9xqRj3L3cYZSJPLifyP9mePbeHjsN3FieHyQDjkkp2sbyaCFXFBQ7zPzKaw2FtTG8rB9VeZMjqe7EDHg",
  "key7": "FEuJqcRMfCMLMWUbnLrxzqnX629QJXJxwkHf8aJzA6ftjkyLaL9MndBtF1x4rPMN1UNNpJch7mMnoC7LaUYMhcN",
  "key8": "2phdhH5fPQ8UW4Dw6aNFJ25Up33BFAmLsxjWEfiaaMHpAfyu8VewyzLqLk7s7s8ErmcYmAtsZNUjBZo7oMxKN36q",
  "key9": "2xWLTX3T9WKnGUfP7mXhpQBFJvhwWi32VHr3aZyjctgwzEowY2PYXL2ZmJjroQka3KZjtc12h4niefTqyacWVPhq",
  "key10": "5ZgmaZyEbVAtfD8enhSdX6ncyfGWF3oVHfZ7od2EYQutudxBHpEsMfKye9cKZpoaRPH85WHqnVph4d9feE8Cx7CD",
  "key11": "4YCwCzBHUWLpYqeVEor8v4eJSofPN9PeNoNDnKDYsgehoJy6Fx83QTmp4us7cveheRZVbJypsyjnv6s8eJJbbcey",
  "key12": "5jBnYwWQwDhMMbRuqpmWMNh8Y5QzV5rHWPDZu4JcWerGMBp5FUCjWuHaYP6PUepX2KiYNpt7wHuqEqs9qJkWSBrR",
  "key13": "5RUhpAm4Q5tVDsrufLJYzeSQmUzt9mmq2m2J6fdT3b35NRJ7td1ZGSMmXL6KAUbwBX6J8dWLTFMRpmdPFnTTVgYU",
  "key14": "3k1oHcjLtrsHGyD8gPe75F2V7AJbdxnFWtXMppYjBRyv1vWihp48XgB9vuJ4NNZbw2WabfjQzorq25LaEAcHpMvT",
  "key15": "oD5DnprwYjEKZ7i8PFtDpt43Nfzh6Kb4JvVF7equ87dpxpK6Axs3Tx9xrPA7x4cXvi51bQu3csU7xTvf89R2MsB",
  "key16": "5KFCQSTCzgPd4tqm3QMWpUzBMUZx6APTchTjoWACDMtK1yxokvcqdG3RZ3EY1QEpYC6sndQbEv8gjBmyMwMA6qNQ",
  "key17": "axK5PhH2YG7CpRFevjeHLHXSwTANfpZJL8YXTr8zig69236X4qPePpZCV4qTX42rqMskKPTu4DCBgii7QBu9c9D",
  "key18": "65acHqJ7NZTM6D1UtoZyroKY26vCRCPLVAfPDAjo5GW4jAtZ4yvSWwTZzDsduGGseLvatbUQR2beQpzyTBdYCEms",
  "key19": "5AyTd4kwLKGVo7LYWfHLrJ5EjJigZiMtWwLCNjT3PVDSKLgk355FUksUK5N5mLJZs6bXH2sUWobMZpRvHuL5CCsD",
  "key20": "3JRa3Ahe79criQRAy7jFrRaGtRF8cFymdA4uAeSwXyPSS6aktsJ333M2DX6drg6EQLr7EixQeNig7cUam4SJvXHG",
  "key21": "4USjo4VpfUXmGe5X94ypukeWRTgRn53BZRidyXz8EJsVXrLVFqdRHoxygkd2nQCEaGqaYr5WNAgy4JtoG5bEC96E",
  "key22": "4FKXaxGzhhZqpSop6Xp6yeTd41frTxyUVHZ4LAJRHhEDFVQ4w3dNvQCuFXqXW66urTmGE1J7CmvqFBqhs39WgYhZ",
  "key23": "7pc7j4wQnc7n28bYVzkLKPSEoNmJnVZwVtHox1owGTfWe5sbnJgehmZ4mTvxXqBG5tG6T5Dw32Nd9xejh7H6RnF",
  "key24": "2244ghky4Jiea59A9kgUsYRaY8dNoh4oWo533e9ghqiQRDrr4W3Nu34zgXwvboZcowk8Rewwjy8rbm1VK33P91U2",
  "key25": "5H7fLf7yjnrxSwa9djD8xbrRcKdzP8KDxMn23HELJkyxwgUCB9iMiVxCf9np7Ztmr8HybE4DE7mNrAUKyfeKhSXj",
  "key26": "5aEkqig1r938v1yR19kegjYtyswHPmcugTs2F7CkwqV63Ne7zbJUaB32J9enRZ9gA8eyKDzdPAxgZKZzVsENG9jB",
  "key27": "4Qk2tEv1vfeSRaXQffmyQWtNY75rWY7yS6XLCJuEA5jJfnqwYAyo6YDCuPV9RmSu1zHSSySzwdQ1Ac43q57B2axM",
  "key28": "3vfShMXXvX7Fq1xceqRkfkKiYGLhztaxr8B4vKzqRQ1kJVR3kCJ47unHm18BxwfRnS1xac274pdCnEMoD2yeDqLN",
  "key29": "uSQnpzVZ5jABGtQtyvLYc2td8KydD9MvmmNhcaH3nhvvD79E2VtiGECniGv3LDqjW4YQ2onBYWnTJGEWdhG5ncK",
  "key30": "5KQ5FpmybT7kCFLor76GUAKkvwh1GSo36VNLT67fztWYG8zqXaRjh3xwjbQYpmTCf4KZqBHuQdKGR76sSgJem9tB",
  "key31": "GYCX2jBoWtNTGZ5nrKuy5X2fE4h2T6Hqy1v4pDgyzkYZGbFqXsJCJdhbZtwZquYFFGrdnoYyTPnacGwRf5o2S36",
  "key32": "2JEZs5w2UDUZFzHRcybNTkYGwm1FPBL2kYyFyUAfHGCkD1caWAyCWzeLd2pWMF8L6M2t5sX2bfcVKrdntHXGgK1i",
  "key33": "4xEKcy9JRqNj3gArBWZRwdKXvauFSjwgLfYFEBLzCCdXri2yRHi38e4e4BJZ2YprbqTnnhM6N9jx1dRBPed1aZeP",
  "key34": "28jxRZpHC4BKxHvsT3LbVP2XwZ9AuGkesyKP2STy3LZK1WVAMxz8skWvQW16nRsnQDpZzFKqroJPxN1RF5bhgwyz",
  "key35": "4aXpwYqkkE5aPrJWFCQsQeDnBey9NGp3c8WT3hHCGBj5nekSQcLrFh4qBjGj3Bw6rdDATqaM9Gc1xcZgd9RUruCv",
  "key36": "5zXW7bv6dMrLLstgeZ11Jj3BfGEroKaaHF76h3KkuAPC1S3ghqDnvJdypFqBgjwhafxRaXt2WprKhX8cgbChnPcr",
  "key37": "4Jdn8mUqesvF6jfybr68BubgR5gkS2E5LiKcQzWm2NbztNE39E41zy5kBn5iW4cYAvBRmX7PVrYG5CgXt3CLEdiT",
  "key38": "ZNzdB7fZBJAZTfKTeGwcvnURUM6uMuqTqiP5aopC7VjsqrZ6XrhJWWunqJMKnqNCMTD6P5GfaNRzr8CswhMMCJj",
  "key39": "JHeBZX4iid5odiyJcuN113Y8GrUtBPKpxT8eMFM81zRyjk4GeQVgTdAuuCsxNLEUfoDzYx9Gs6kLLURc8TWuVw7",
  "key40": "28QFokv6Ff9H284yw7hk4hz4biffb4SWevFN3THAmTXyYnGEYTr3VnoN8w2CKHJpMiXCL642sKw8yYnuRA1DHqiJ",
  "key41": "vWxgoVKH8ukfMQRCU2PpLvC7ppUWFgYF56FkAzd784SmweFtQ4Q7z3qBDNiu7qd83Xac3jEsyjrTMhbsNiSsVYd",
  "key42": "2EEeYd4RyT9QMvvoond5vfpsjVDZ67V6yqgtoVUf97WD5hqvfz5QujdrNK9t2a5qsdwHK21ETL3AnKvyyvxZncro",
  "key43": "2VViQEiHthcW6iNPNLrwC213iKAbo8djgBnCg7hLYkDBNCWYgHJKx36LquzyHjkFHSU8jLTrqtZ1Z4LH2GA9fimz",
  "key44": "3MaCL7gRPmMcvfj4DUH55QQ2PM7qZyVGnLLUHb2PmjUQJ7iewXCLeXzt5C7iJBRvrbDGhEaCsep2SBDMHYH7UyFs"
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
