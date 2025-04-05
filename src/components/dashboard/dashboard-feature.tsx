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
    "43s8Cg7ukpLpuN8HxNBJkuVXAb98rvw3KiD3hjSZGH2aJTCFLwG81HRodquViY3p8Guvf9QeNVhrkbs8fnN6Q7TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgZyjyqJ2XB6xDo6xtqUWcrYDC9W3TJa3kJwvJsAde74hnycvmSkdhs4HSpEJD2csJsacd46EGjLAVHofN3bnkV",
  "key1": "3hYdRJb5sCSRVwWcetueDWnJDD9jKQpztfG1twqvKagzkwgtcG7yz7zMSrmTNAGGis8VHnM38SaPJvXGrKJzYyUA",
  "key2": "5s1B6AW9Duf14oycYnwNHxYL373VpdFwPxnkR6zG8AUQZs8sp3M9RUMBr2ELK1bQG9ZEic6R2dVMELHrZytzwQFf",
  "key3": "3n7Mc8A9EiVXKddiPaxs4voB9v8512Qyp95jAsoS4MhoXWw6DNuDEyLhWDKBGchQPif2zBdiLNCau14jF1Ts8nkx",
  "key4": "4668EAQWcyEvzrhGierKv2eP5u6zewezLi3tadx6pHaSjQHH9Bg4Wkx6dJJq89rHH11yRkn81rooCfKCcNwMr7tx",
  "key5": "54oUkb89zi6eGwN5qvkHuBmxTxAmTPvuYQdXyzPCnzSxdqjq6Gb9pHKYuH2hWXowCSQvTt7HVEY1ck6Vd8PdM5rQ",
  "key6": "2iFzJzkqP9RibAQ4ch6z9Vk5gGVmEZHTD9QgUCFvdVQYVM5XkLbvr6dNPvoJkVyAVvNHUScyyKW8UmicqPLPKTBY",
  "key7": "49eqAhiUC4UAcksCxK1JtyTPLxUSsAfb6Dbhw2ft2czLBxEAZtEJaAW38aUeXpBR5aDrkMNsozia3o9yXniGhbx6",
  "key8": "5o6qvZfSR2Kdd2irfGqj1cVQUZqs74NhX9GE3iLuUsCm2DBEuGJthJsYcRXVUSESPLAAi5pf3s5MiWFAspQkM8ve",
  "key9": "pqfyq4RWwyzPX9xQR9gzioNUcYgLQ93yg3Fne1iP9hPdDgyoVMEBL5MUENFo9FLuPJk63kydQoRe951EpZAjzRc",
  "key10": "49etxJkLYXr7dR8HtrmQCd5vqfvPPX8UQAkcWwxTKJUwg3RZzq9gUM9n9UN38hQq5aDRYdd4bYxxdVXz6kK1mF5w",
  "key11": "2cEuFvphrPUMBgWXNQdKzvDtDqCc4HJFH8Yok1Cpz8Edde3jbJ5f1VEMyFbGfM94t3YdMrkHd7Hye4XRiBVY3xBW",
  "key12": "Vmz4ZmRiNt6mzSyYyCj5YzQGSfG68PEgiqpQqZyYc8k7c24iybrcoq2rnHTw9Xhfz8auFpshLqkwzN18KdqPn2o",
  "key13": "2UUEVwePipEn4vgjvBaERZiXWEZUTtsaig9pcewHKaFDxpgk9D4H7ptq2pTERc7y1Bj6gyn2poACZgqb3hTFNsgE",
  "key14": "kWPc1Y9DkzrExbRYmupBr9M6mJVP9SGNDYiRvPc77UtF7M4Acfpv3mc5yStoXa36DghHk7BgBWRG8mFJ7uiXgbT",
  "key15": "4ydAuosTKjFC2QAozYadJS5rWVhG7o7FvVniDtGqsZe5LBAJt5fe4oJxEPoq6c3mgRdaqVdP3qjrPonkX1Yg5ysb",
  "key16": "A3vXLHV8hXKXqmNTBTkR1DhQxfhMi21bd1h2t4EEoecGaiwmhd7te6JhNQfrFbDsNuK3f4r1ctAmugM5VpdsRu7",
  "key17": "5rAZXsiPaWC5ceEUEY5trXMKpDmScD65ddtzPHtkLGLi67RmWyXRm2Mx1L5ZRF4Mgu4MZsKDWnaaoNaE3Jge3jNU",
  "key18": "51neXw4CYvqR73i7LHkX3VryhSZg4ESBYs3UcZhpLsepCESWPEwkEy6oGSZHuFf4DQ5HoHynPZH3GVd23n1PDXr",
  "key19": "25TCSpASLXJPt9Ne8HmqcCVK2hhuE8GG6ybqYLwY67WyBPVjJFWoaYkjRz6p5QoWyEap1NmhdEc6764jmS54Syhj",
  "key20": "5xMBPsjh8qurxnzbLKAPJwRA4fUkTWxy2cn3mnX8L6QxizBiKsndM2sUfFZjRmFfUffG8LQ2NwTXVqUx3WJrWYbK",
  "key21": "3SMLa2tqsKGeVefNWqpAmwsLiEuD5HmS63MXbjta9wNCYguxgRVnag8KmpwX212XSDTs5ZCCszHDvnGqhu45GQ4w",
  "key22": "3ynhUhtTvVrwacrRYrAmFVuGjafctxdsQXkuqHHJSiWXPidgi3YrPmERd15kpoZT2TfBYygAHe3s1SrVoV7Jkn7U",
  "key23": "49GZ2UUv3Ewvmks4YjfkmKk4qQRH2KnJ4VE7Apz5ZN9HXgh2zDXBRURmFZHzNkD59TPg6ZQBKTaT157oL4NE8pkX",
  "key24": "3q6S3WsNvfDqXhUxfV4gb24Y1pnJsRnq5RtXCTFk17XaRiqpExt7PJMKDW9jY5MJtuCbsUbhkMns999Z6BsEv8Cm",
  "key25": "3oF3VML9NKnykC8GnRKZLH849f34aTcHZdatkSD57HRrmyLdpkKvFag454SFjtgCbTTzpVzKR4ZbvmWA6b6JhZxX",
  "key26": "2ToobkTP56HKcLG2yVQiRxtgYa2npSiQmHmWvLhk4XspGk6rn9fJqtZdMvJJTXJVM3UH4ZYZMWc98UZLbCq7i5to",
  "key27": "53VhuN99FvBVNHUEDmf1FRLS4wpiCEJJdcm5SRdmwkQQqbAzu3AKNoRmh64SzTo9Pma8ML1NF84UALi3AyshJ4Br",
  "key28": "4s3TPosJ4JBRorEuQs6dY5XhUWP958Zf6KPZo3oU9jJY24LV5eKNQhDLVaDCz7e7vgDLRpdmfEfFM4a31goJ5hCW",
  "key29": "5axj3YF9DCTPUNB5H8EcQ2fRMhUFSsFWgVmaEGew1xVKKCybws6577bAW7sWVZagnkYk3kLGHywGVbZmdoaRUgZY",
  "key30": "svRqnD2A8okKBkVGC6qs4NVGpqtC37ABPxedxvWhwxdFXfqdxiH3uj1YDgPNTfHs3MP7NR6Kq6uBU735oW7KxAW",
  "key31": "2stHa2oU6R6YBMQaxoS4vyARok4Rjb8yUvXHuWwTf6nriBsVApGV339HYba4NQqmX9pVxCVghiCDXFTV5jdPPyBd",
  "key32": "2D9Yhc4mW8h6uG32BsYynQ41qYkd1YVigYXCYBBYbh7TFiGP8uf9UAWktEGss2zt9YX2siGQySFBgKPahU59p88k",
  "key33": "629Sz3guPBuMBfQ9rV31ci1Xs53miqUTt8J7cHM4PuojL9Ur2SCbqK49gxPNDwiyPdcRAKhz2ZAbfMd5HBZVqktm",
  "key34": "41Hjdhj3iwG9hGkaztcjT5DH9wHcEnr2NXaHsiAP9DfS7Kp1ijWhZxQCaskKpwkndfYZ5LJCkSb4iJir5PAY7wzi",
  "key35": "4Dgn2R8GHnKVugBeCbfihuwLa6bdGwwLw3phzDQM5qeT7fqhye4nDPUfW9dBjQ3a6UuWFVGHPAgaWMpXckoQZXGB",
  "key36": "F2LDairReWgNcZ3VtLEevaxJtBXwyC82oEUvFkQiimdiMPasyGRQxGJcCVejnD5rTCVW2nqjZWsJA6JT96RnjVg",
  "key37": "58kYgj4LQLhQPQmGnuLXEmvgzpARRzc9qCpnSbawjrbjzmd9UYHHLwWi6Us9xGyU9Cex3Do76A1vXfDvkvsoGp51",
  "key38": "4wjZbwE1mrPD7QwbsTa9EiqgVPokFQ4DNCH5dyvwwRkUWBo3nNt19jRv4NP4uQ7Qxwtgu39sGDoaiP2HVAUv7dDJ",
  "key39": "4NLDsUNuD4jHJhCgeepCLPgS8N5FB69G9VP9sUQCPtEEWVmpuvjSX8UTK9DFD24YKA1Rgi49TUqEcNQKqGMvvWor",
  "key40": "QBYgJe1tn4xxuqUZwXkPqGrK8VSwxE9us3XNWTX9teyM95AmFzVzpmcucs4WMrJKnWRK3bqbPmG16CTaLsLgBVF",
  "key41": "3D43D3ujuEXTj11jyJLhwwAegR6VLrcvBxZE93f7N8uFnvNW32sAZYEz9SR6JuJN4wJvKYX6WCmxznpBG5YHt4zS",
  "key42": "3qG8UeiVy95mZMtvbuqL9iDWKJFw1PsQ5zirBYWBDjMqPb9fx3Q31vuxGh2A8pMqDNFxAisJG5NeduFbmZUfnrVp",
  "key43": "6523UjzzowAU4hMBM4JjaLfZ9k5Trw4TgDwhazXviRo7HHqyrj5UEvnWFyZArmTkqcF6qYaUpCQv5pM8kbv2PE4Z",
  "key44": "Mt3L8517vMWT1rad3XZXojdFZ8ecmagm3AynFgNALeK8HUdoV8o2dkgXEPsCoMYwVkpFTiQqRcuQAvuBjaTLQkZ",
  "key45": "3aLSWJPUutFYuoP7Nd5XpRVzVf3EqKP9SwcreWkyXFXZUX1ECnQxx7wHeF9usFqK1PLP1UVtN39jQtVow83fMbw",
  "key46": "4vaYxmRSZ3RDQqUAkNEnxYooSPAUUFqrJKXWX8b8DkxvXVWFivnSseo6k7LcgUf5uWrPqMtPdvuJdTyHaCzwTQwj"
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
