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
    "4wFxqt2hp39rEfVkezxuMeJTX89Ezd7aHTMDzJa3NCcZjbVj7Cu8r5j8eKRc8ew5FmgvMJvmT8FD1pxpHeG76LM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CkdpfDDBZUHG4rsuiMX886pcrpSmgecTLNXEKZWt1oaAd5nXy1d1xuvFsQkxLthQ4AZQiSPkVFR5WVcTDB4ByV",
  "key1": "2rrtM97yK1z6rf2ixe7gR5U2G7nZLefL9Yu5r8EhPdpZcxZJuXX3UWDz7hoGVVbzCHVJba18BTpGTjR3XAXzcbE6",
  "key2": "49vPdXZYeWbRr7sn4WHATWsw8zNQ7sDsAQfY5Ct29BP7ycX5meH4srRTfMdLrLtggxthkTmWDHmGzcXoMCryS1JS",
  "key3": "61f7Bzn5zYiaStEjTFr77kSTdufzRbv5tSJCf6YRT3YaCtgHcj6fpaN8wn9zeZiy7TyPQk1BDtxkgTuBVtnCE2eK",
  "key4": "4pasVZ13iYsGbcwzsGXTVgCUjKSyVcrbTEXTpnVw4wqBt3PJRnBxTxi4dLg1ThB8Y6gVkkYyEKi6D7Lhp2AGy9Sq",
  "key5": "5P8bF9sdEwEW6hRgJSSxh6ss6PGA6Hm7BLmkkxckVsBxM94ukSMSdohBcFpxDFn9MpRcnsPxmubfr1voLz9fkaQX",
  "key6": "4d5uwodtkMeVYKNosZvKQGuCy32iQ4oikF3ogKgAsrdh3wmNa5qDALJHGqYjs13zRLd93YH2hxVrCqts3pUWLU6L",
  "key7": "5Rbu3jH3XeYKVGuG9ckJBUCvTgK6KBt1MK1oqhNHcFX96Zo2AfqAAbkYwHRKsjMBVeVbN2KKLjbVpmTwV3MKktAd",
  "key8": "4j9rENKNFL5cbFJJtwo8n4vthoEEcKvbVWsjHVSy88jP3wweFehEyNyh6CjEvki8yAaua2iVWLv1Jxeq1q9KyaN8",
  "key9": "3EE7GuXWmQWquBDn6XHAnALMdaBv5ny5xxXTnHk2Btyahs5UdAK1CUru1f9r8YiNhAMCvnXYZRw4sW5BW7zjh8jK",
  "key10": "5SithhfpgUveTjo6J8JG3rZku7BmmaVZmrBxqf4oeGwELpE5rCXK48qy53cja9WAHv9SwFaj878yzwkKB35oCyou",
  "key11": "3qhzWtDLYCo23NeY9HZsAWiC1JR9iGRMF4xsjhU4vMe7LQGS67mXt92QyGpeE4bHD5GjRUUhBXXvtJPMtgsMhtke",
  "key12": "5hP755T6vExnLYERAxasY4mnPGyjkj63TkJrRzy6UmLAVFc2bwxSEka9b9qyypwQWFmuxifuizqJzfKnwNr34Py1",
  "key13": "2rFfZudbye46QrcfktaeuQm23P1djFcMLUzhBzj1wSa8wJHwFxiqRPEMY1gUdgP8dz58JLnWbeUH3fbaq3JFyUQd",
  "key14": "57YY7n1xsfgZdJZJ6vSL75rdkUXsCfkzuye3jS8nzEULpt9QMRaD9uPauneSx4bu8xF5stZ9NktxNgg6vhpMHdFh",
  "key15": "mm5FNCyMZn1NGhSUMWATGxXxDXrQeqb2wQqGYLv1oUEfeHRSnZdNSEpEeiz6oG77bBpwVMu9fjXquX85JvBgNQQ",
  "key16": "Jafed7itsChwuQyA4DUCkB6thihu2CeN5LXGgjVr8ZisYH2tghVNZQHWjMbvh1Yb1tKK4WNFCsyjuiMNEr3Uypa",
  "key17": "R1V2coP8S3oT3fQWwgqNbNdUzQqnVfrXnL5EbHU8DuG18Uhb3cmqKmb4YKzbb3gWEjAE9HrSaKHRBnzPpHdzZSu",
  "key18": "29VAzEEyf1R5Msje6EofDdqP3t5jqpGq7xYirGCg4FiMYABGpNBpyYPGG9AAULCsB2okmBLk3dKLLuSTZZ4vhiE7",
  "key19": "614pDmb35is4sJDw5XwT84kmdB9sQMJtFkm9zzXFBUBKMosb5zx5RVrv1YSARTWxWH2gGQe7rwPvmhZjN2rsgwUS",
  "key20": "fRNsLMHGuA1SYbGvdKVN7ZrR7ughxWUdV9TfrPzvKZFbWJJLmFcfiskzRedm16m6uWJgKZoQAePp1dBv5JQLrdw",
  "key21": "5D5Kc1KuNnnWcxYwaR62fxdausq4EfpsweTrnC3uCqufy2N6FQRYhsFBFwAVGFgbPX4pdUwhR2DBgmK1c8CHbdEm",
  "key22": "3cUnpCUiTxCDLEmNyobTo4SDg7nXCQy2vtXSHT9fRrCEmSChCiwQUd1jRiVDDcKhS3NiatcYXAqnVd5RR9HMSvGM",
  "key23": "3YPAA2q2s5NAoqvGyoPGd1Q6EJiUBvfhbxi49iE3DEHBacQXPMh51evMTkAQ6aVkwBrk3tdQjwTrpG3Q26AV4zAo",
  "key24": "5GSkJEWfxKKgJz1wTpsvqcpCSfWuSt7C5wF8tuvam3hBbC6X76wxWTmk1D2EEVaWqXfh5KyAq1eTvX5eH67bPEkR",
  "key25": "2UvJDsVk1TSBcjCkhtGjbN6yvvaQY181XVZySFfiM2gA75yoGQy4hGJ7kEYLXXbLYZrN1diQEMu4FY2bEx7idvAE",
  "key26": "48GU7dRAgktAeh5UPKd8SE5S9UavbNMNQfqW5z3BQmt9BW8Z52z7yQJ3K9CRDQnYAXB3a8T3G6rxi69uRVDLCQFx",
  "key27": "2LBJ5xEQRxeES8vaFmnMiyfWiJhRnSowr9kFgz73iSyjhr8wPNQh2iDabNTYGBw8MTJEsrwPgkkvDs3qxV4HyXmo",
  "key28": "xYpq7KuvB47bPvfqGDS6VGSVj8wJowak3SHZvvX3S6Xa6tQ2t9ocMPeZF2Q9sVGnufBEWTCqJjUvMuU8psAozKg",
  "key29": "4zUf4FvPzDaNVNqEtFYbYFvh4Q4c3K7zZH31gR5NZQUafRAF2h6FY3JoournQtwKVuSbiVaQqmZCGh4p5p9Wkicf",
  "key30": "3GXwxGFJyavwkuvm2NWVVsHsEx1Tuh73ii1Wj4hPUxivz2Wn1uVBt53bqJgJEM6psbs4omQgoEp8iWDpKN2wXGBb",
  "key31": "3ttokkQTwa3cCmgkoPehKe5SsLg5QsrF9FqePBY4mpqr8exySKxUbLW5aiRJv85m7BjBUze4kd6KWwMBDcZ2Jw5D",
  "key32": "sNZhYBEMhr4mk3mQkunSsoHPzSHqumTzLuTJS9PsG9rd4Z7AcERoR2fnv8or6oF2vKHPmHFsefdKki3Ns1abb8X",
  "key33": "3euyvK7a7K4D7awH7KhGQYDgum9z6KpJzxaFkWevhVHY7ibJAsj9UmASyNZ5Xi3ZKNuNcna5T1moBTXDgXuFY4L4",
  "key34": "XKwL7KKdhEnrtvfi1xFRYbrvgSD4KiBMZK1jRzAZZ3YQcPEhYr77sdJnzhGcyUesYwiWfDEYpPnnJ75JJSwCZJS",
  "key35": "2JU4FdJJQaoequay9hyYCusztUC5cYbR6bnf3TPsHsFKxhn4QUcr6n8ModQFuKqwM6qAJ26fa8By76etm7rwuhnH",
  "key36": "2HoWcJKKUVGbb3DH7uyXc2GmK2NgwMLQRRsqHNK9sXgMGsWUti6ZWGo5NYCyhudeV2ozCV6zRFk2G7XfGyft4yS",
  "key37": "5fPudRQDGvL1tGujhnHHLvEBPuvrGnkBPvx7WNMskT7iCghffAT93MgYXJaaCfJU9F785Mzsz6cFm18MUnvfMzvc",
  "key38": "Dwpm3y8bjp8QA2daGJk4rcwLZfLKbXeuvaHEhos8gmPPhNmvkdTtHHvJPozxgENJfSVmmzWoFMPcX7EGkYc9xYW",
  "key39": "2h7C5ELUXDgtgrVns2B15YgGQN9tjHmXMzgz4QJpJRaPL6tJ2S1Ngm6ubBDxtjQNjJGhN5z841X2PH96Sm2dif46",
  "key40": "5DhukX7wyunri3KVe3bVB7QtCY43CjzeFCXNFqCb5RWt6vNUJYYyaLKyuhbQoYYVAjsuqYgRqbhTWAxpAYN9aHD",
  "key41": "3SiDbS56eurkbqKCNrqVuYujgTzMtA5qViQCv7QAwbbY4sH3c6uzzPqoTmkZefaHoWGHTLTgS2inW76vWeG8YkSj",
  "key42": "CUTYvCzeoSEBDBwBjGmdD3r29aqdjEvBsXC96hGEbXuJfd7Nwe5H24L5JYcXdRpuphZ5zizwteHmuFPV2crvTRu",
  "key43": "5oGXNmJvvGr4F4kPp78nC4wFQDdg9duanaNkiMJ3EsCihgsyiVs7mhENvfFyVxqBjyPUQ3AmNtK4KE7ECBJMAhBL",
  "key44": "55dwahAAcZysP5nBse9VzArBjLUEZ8gy5LJ9qJUs4eVMsMtvnEJmsaBFEjRexLSbQLGHZsMD1gM9MpDv6K5PWwE8",
  "key45": "4mtu5yM6psov61ZJC4eotxUNPx8uz1uuwTcFF9YVYkJqtr8iKnVPKoLHd6boP1G3c7FNyu91LNQbg6rofY9mQzzr",
  "key46": "3NHv7oqKvy4UszLvxz9WbQM4vZgiZgTJiiQyRebcaLjHVt7GdtoAL8yyuz1qR5sg7md1as5j4GvqR4QuUjDsTZbC",
  "key47": "3WBLZqeXddFLzBXzWE7aBMo5XdYHHBeHt7hu9pQEKXymtFUqewWwQX5GpQSW12hXqTfee8qf1YdzCKEmc1xggFxr",
  "key48": "gHvtfm4ZAmyzmLJMrkFNqn587Nc3T1RbfgDctwCCRHJJf5phHB1zP2aZrNZjDhSykRXJyKL5KMF24f1KH8cKuqU",
  "key49": "2gXxvT9Mte5ENyCdfEnbpQzbgsvH8ZLL2smFpxn9V4T8ZLDigFsAA1pFeJik8gvvc9JTvmR4bxGzJ9PPxGrB3TT4"
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
