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
    "64DmPzjyZYquz8wH3iuzdrxH37BH5nvFJMj38FcL12coMs5oSpcnTGV5ZSUJpw8giVi1N7gVrunnUw3nZKuhPASR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B64JCmafdj1cNa5hkKWPRSYVEotPVG6GTXVcLQNXZ59fvYhpLATJgsubqBYZS9D5YJnBhmiQxAp8NY2SnazRkyh",
  "key1": "3Vzr4MnSsrcd2UXY8cT2b5Tq22NJihsjSytfXi5FRP25MeAF2GojMBSB8PEiowT1pJ69r5gFqwXN6oXrHt8KwziY",
  "key2": "56uvmRXRqhSRwgRET6M51DKAw7kC4qdbKsgvkXh1zunnSEvNsfPVCG36dFs343P8YmZtp8gY5Gjfmb9YH3p6wdpU",
  "key3": "2Uk9vHxai16fp7oWw8vfnJgucwsrXkcbLEBVEyjCpMJh1ZN5MJ8CEESnepQs11768iJnS63e9u9Z2JSwzBUMyhNQ",
  "key4": "3z5XA81oxL713VhRWtrPCZ6JQorgcMee5LAv3YNPw8VE3qQYPDqu4wYEnyhzouwoPAkZ8JNgpEiFazkKqzxFGQcF",
  "key5": "2W3T5mNUQdYw532cBqAmSdzvufaS4DRmdJU3vQ1JZwiBe8NUxREVEJdZA9btB4keQYZUPUFqvVjpaFSUgMsv65gR",
  "key6": "57cugCrURQuqHBGh6nMUJqX2oKzvp362m5WGWe4bRZ5iucr4RHVoW1z6gJi36BP7X6swzadMqujJZNWThy4Qk2yp",
  "key7": "LbdT8gr8bWBoR9xzas6FWfgyvF1d61rPswpXJqnNWZJ6Mu1yVxJMhS34VUKmei9a5gBpMcxkzX1iPcuEpReSzLR",
  "key8": "2pWD4RAof3WqXH1QxTj5migAbvTLcyknqA2fXM7jaRvtyekevYSaxFwfkjBJusv1cDx47Drsxa7CbLiCQGmA9Qj3",
  "key9": "qHsR3Pv5sNRtDX9Dptpqn6MGEXAYjRU73nX9RQkBDXYEoKQA59rJv8d6zDdMjNy53Vwmj3UTpYVQmtrBW8ZZspT",
  "key10": "564oQMRziNJyQkjHG6ChhmrxWEgzfscj7gFghWSjqQPrrjBCKsDFRUVitiUhVCX1LeX6JDdtF3TMiu2b1gAmdAmF",
  "key11": "3t3SDLKwTp8Z37qVNeUvxbUqzHjb9RYnU35dkX7VPModKnZA67TdJAQBrgASUySHvSfaN3WrDfj4eKfTHNVmrRoM",
  "key12": "2uwkh5iiPYCjojVsswe2HBpupjxeGWVHLE3vArWa7WBkWxyfHaeLrwLFPdaBdT7bm1NptJ1wdbwkkJQ9ZJkJEqs8",
  "key13": "38hwdQ8J7gUveyi2idQ3PP9EoTKGnGgmyDo6688iWhSZEPxwzDJffJTZkURafYcFsutR469V4QRXfroqYQthLf6G",
  "key14": "5GuKByZ5n5kfMHEjtpWTGWvrvMhpeW6nNdsm78zUeFkrb8hevvTxbgLuLgRHExVUqaxSwrXD6DVyHamGypyDNBHP",
  "key15": "3SAUHwDVHKbULK6rqSeDTo3JcDDECKNQDqbZa5ayf6P9pGiwZ5RLi7AAvcuLKpFRR7waZUQwhv3iCa34zMEgxE48",
  "key16": "3ZMVPN49kBUM2wX2FEHjdAaU3JvhgUhzEHqRUxsL3JzwZ7naqwg7MiKPfhiRgpbkiQmoErwjANVgv4gX7eEqs4BU",
  "key17": "5MdxtXknuDi7JR4q57x2yLYZbcE2W6LdNFfH54iypGWsc23eu5koU1b5W6WYc2vpBtMUnHet3TqY23bqozy8Hn69",
  "key18": "3sKDz67uYGRxCoTK85hx9dDUJ2TqWcmpq6uWM5nQHXej5LF5ACApMGEw6BN9wnb2o5w3yFR6ZCjvZDks2mkgGUr6",
  "key19": "55Ki4doCo7kLd8HPJoXdubR7pyymu1nQPD846Y1XyMZU23zk215atg7x3z2ZFhicuBSue3rwF8eUaFaRxp4h3Pb2",
  "key20": "NH4Gj6kMUEUZbZnL4viJhbjsfTHWchJfFKVKw526AigAvbpntyGbaxAKgDUM1yeZLShJErSWCnxn6PvrAQfvFQA",
  "key21": "4WnPmYKtCJWcqVGCtfmPnUNeUb4czBbUn2e1y5pfqN1hnJJSeFNAEBea8WKccRsiFZZVeSe5wvXPnEf3XCtGDuNW",
  "key22": "C93xx8Ybabxy2oyJx9Vfh5pgYxxS1VBkRHZr3CXT4ykgLp1UEZehgSfG3GYv6bNGs3tcYK5FNjCujFE49bYqWZF",
  "key23": "4ppX6DPTwUc1DFN6N9JttTH6vrD72amNjwmdnn3af9GwQJ8JnWmxFzxhBGhWvEhpFm2dFy76LodzjG668fCySAgG",
  "key24": "dFW8xfastGjZKQXy4LznsKFY5kw7fmk6uWbCMjBos9bqsQQW8tFhKNJDj5o4tZqCtvr7K3so6BisXQkwQNeoM22",
  "key25": "4twXfByrpNL6qFydNe4o8254JFWBYh9cca7gAGMw4d76DNDAtLUy269mL5hgDwM2LGkCzHBcKNNwAUbua8AtzPQH",
  "key26": "3ZcKsFXJGzbGzmMPRHPXZuADLTsQmDtg8FMgS14oKAswCyqv8Y85jJbmDJrHh7ZHZhmRELmjCm6rdme6ZUuTW2JE",
  "key27": "uWRpDQ21rtmXq16G8K1MbQTDiXeidZ67aspuSvgpLTCcnLcdnzaG8BXge5efPTLNqjeg8GAbYgCPqJH5SXUC1MC",
  "key28": "4NPyEx7d2VsaLSLYsRLj59aMYwPzVFtoxR3sP4w1jp6evXN1ZzdqL4KyDZVmor2iZ1EfATK9siSq9874HG5KfqAc",
  "key29": "2o1mZRXUerNhAAc5pw3KVCKiXNRUcM5C4PUWgX65Yh9YjTGH9Sztin1xYrqAAegLeDRKCHofp21br1cQHbzcazCh",
  "key30": "61s7ynmJ36B5qK5wcDwHEc5CZ45ycrz16CPoR6eFHG3fTd8VRtqrHhfJ9ot4aqysYJ9pPVUP9gE1hXz4EmccZnHV",
  "key31": "2k5NmtMvNXJEq47qUr8zGDKR1rC3QrrvJFyyhzSFJhjpbD2Un1adUdoZvikcUgjqSRc4DFS4fDmPjkLfrP3Doso2",
  "key32": "3qyXjFpPinXEPSoNry9tBrCcxSXv8r8GT1Muoatvuwnz97yQFyWXbw88Mv7YrVBiq9C7R2d6hR13HmLYdEpwkQWj",
  "key33": "3XyhYcUsf7Gtsd54NmZn2oDGRCo4xBNcwRnQwihFVfQLkpNT7yye8fAxtmmjaZjJpkubdt91MMpkC1qaQCohU8iZ",
  "key34": "3P7NU66qN1TmL9gbPyV8bPEZsAaT6CPg4hbQGycwnzdjJgyjDkQaLGNhS42XJx9hGqJbu9WRWBjXSs9JXXaaCFY4",
  "key35": "4bdeedw48brp9PbnW11mxMpdY4tLGgw6TpyJpoh6rKLxfB7pjoALrNU9NiqBHHbUZgPDNU8ovhaxdFu6r3ep6di8",
  "key36": "37MiouaNfCjpiDunG48VoAhoWKdui816aCKAnwrSP94a1KCud4HWgwuePNCNL6ZL1PbgFsHKhFa8MBKyJ8VDVbYE",
  "key37": "3YBkckUZ5g4QcNe7qPedBRFy7zjKvhGnDqWWWd16LPAgcbJ8iTp3bjpXE2dKprrHNfpUhUnaVnUP5SpRs45ZMbmm",
  "key38": "2guZ9gUUDkzhsQuE4vGoV4k8yob4FiTxuWJuuoeDCvAehWmKthCrMftihfjsLVMixBdCimGYrDqVZCYhay666tM",
  "key39": "49uSZ9tciZEriiFxjB7iLqxTRWS13J2RMt8AwrJRfu1uRek5Y56ZEe6hEFCQNXTfgkfSqAvCvzAYSr1mFejPumN2",
  "key40": "2aWGEvsvV3poDF5dMMZ4VuDUnJuCZvYVaR9TdF1JeMTS7CeGsjzimFkH8ShULbypqShdNS4yu8XTCVH513g1SquZ",
  "key41": "2gbkuU69AAfyXhymVUCz26EXxqMuvngqQYfy7YG2DqQFRe61iYsmSy5sbxrHAMy56XFWfbMTyMnHduowsYZUPvDD",
  "key42": "5Hbqg1vjjfqba8oZjdpxXfDLzo5hnni8NGad9zv5suqt85tMkrmY3NRsX1CTCebiuX8s11zSJn6SwFXBtuZZcNmr",
  "key43": "3aJF3iCfATziBHrkxKLKxe2fshjUfggLdkK6Arz6hQLnH6dvi6ah9fhvQqqRKLr3GVYu3hiSwGB9vcqQ8rPKfF9r",
  "key44": "iU3C6gNdufGUah1fPSoAXxiSwKNdKc5evBg4yZoyywADkLnC1ztoAZcm2URH4dFp1DeFpCbj4qeA5VgGebUVfoh",
  "key45": "jjGRGPLSg28mGikg6gh6pgUoo3zXvX3aa62Vdud6Bm9uPfL94dmqSTEEL7DHcbR4sDRApgiLuZWfho6cS5mpW6q",
  "key46": "47jDKzW5EuD1avnVu5Pi8ExZa8nVWb5jqKJJ9rjDvaLEApGaF4EWGPq5zqKmfanmvS2kzT78zf2BLnYhKXzDLFaq"
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
