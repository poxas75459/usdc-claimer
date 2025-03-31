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
    "56aYwjpYEhVn52F5TZvqSMAZktwDZ9UxrsL73ihFJZ8iquRoZ8nVZxv6N7Z5hXZQGYCCRXv2BGUjE5SZjy3Dp72p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yau6hKfiRB2Z7HFYVBcLEZUSWmjCZQJPs6TxLAPDTPcjxrcbpqJF2UdT8PWd47FTrarmfzr4pfqMX7461BsUkD9",
  "key1": "7xAddrGpMGgxLaomaYjoyDpxPQnqtZAQgA8JHSLQGac6sv254K1Fc5vxrsgijTfY9mrtVU2iLATtsLj8veNWRpu",
  "key2": "e7kedNReAMumzvo2bnNhgBNFCjNeVEQ9ydqh7Ei83CY8vrANt45v9Hk4e7QNQvP8iqUZxUCA4zpDmu2XFMohx6q",
  "key3": "3jtBGc1wKTL3DW9BBwfdCPZXTs5PBmJJP1fV6rU99Ru2ByTTaN9LybRAgTZYA7KLWHQRnUJk48qq69vAr2GZohi5",
  "key4": "5PhEn6ee58huWgD74x1WCDMRQeSB8PSSNzEdw6xD9gdc9dr3xBEPbsZHbLoc8GtyBvmLVLiL9EZE6Lri6pixdtkX",
  "key5": "4HTEbZT3xdzdFmrngtHaZ15BD9xUUUEhzRewQAULqqcoNWBhimqbveHHZjDNPyttm79aP6La34rcZEMr6kUocKxq",
  "key6": "2jumehmL5n27Y8he3HkPvY9MFW3cXmsRLuZiGZaJ1or7tKRnxf5kmqPs7vRmo1CBcZQCvLcJj8QG91MnQT7L5cer",
  "key7": "4PX59V2q1xshV7A924EbZhMPqc3TcavsRMG22HWzdpPMdtLj39ZimQgohqgZmTXMteJVsqfNhMBJFkAT6zciZuVV",
  "key8": "H6Eu8ADTJVc1rbo51FNoKksZffotJ2n47Att2TwsVm2HJCAySNAcNUwn2yp5ETb4cGE51fgDbTE1JXfCU7cVGfM",
  "key9": "5k7ftPuojixhQWadCGLqQT4MkGPmGjXsHqBCBbDoENM1F32WVzThSACsi65gDr4ejP5HYPMenj2rYAQwciSeH9BM",
  "key10": "2wa2CJkt8gDXevNWpvXBhd78uiMLFdh9JE2WcjCNJ2Yee15x3a9QRasboZweCXW3h9apz14iFDe21fhTJ15GzrDP",
  "key11": "5qySH6hxCdA2QewWVipZ2vZ6k6LjhbHGoKvTP3JiUU6Fzvgkd1mBTZusrgkxsZAXeX8HJwweaUMYkXr5K7SJ8w8J",
  "key12": "4K3MBfQCniqCorkraifFjWZGfgh1xSBPjmwXwALrSA5usKhz4KbbNyhrt1psfmWcLFz7TEzoAdWuH9wTMj6QMrPH",
  "key13": "2Thz6iu4d2XBPAH7dhoAitXjnSAg9SatmqM8cMGhVx2ET1VnYPrZqqgXAoYq5CYZbGB5r9Wt38UdrXy84D27nuds",
  "key14": "5nCFdScNop5iDNN3eSDYx75ThabKV5s7ujAuJghNZWu5xcPGJBkCgLpzJ6Brrih9SGoXZ51xHfZbztN8S1CKnSkF",
  "key15": "5EMFTPxJgyFQoFi9jpV4xcaMcukG8hj4QvzUpAPx4z9nsFj2HX4dwAyRZ6C5NyRPFvSQtBdqh4TJdPPmCUX47sN8",
  "key16": "LXawJUrnWn9PrYhzRTDsbfYiGiCUBRiDZwToTVKcSAqUgD6jtUjG35RTtfgvDBcey6ihfNu7naHF7d4iYdefmQ4",
  "key17": "7789uj34WXvwVPuryz6fJUpQW6rQjdmd4M7aszzKuPrdPJz2HNDM4st64NWUkWeT5rCwZaPJsVwg9jfYMBST6Pn",
  "key18": "5wAPa8xhgzvPzDXZajLnXbnTqpNBjkbJa3Ric77AqY93ZDJdnSsm3sMK782rnUJBMYXD9MFryg2gjXW8Cg2Fo2W",
  "key19": "2zX7YEKLPADRfgtNdEnPiv1mFdVEnyQcgGx2TUyan7NomyjWJF3qhYpDbemjXYQyVZAZxT1qsgew8rQMkUoMLH5W",
  "key20": "2BpDvB1hd8Tukf1YHbA7MHHWwxPJ3EEfX9ReE39XaLAQTkSPHoiELwYeuCLMak4CsnnFbo63sqQweUWMJi1B81a9",
  "key21": "MGZtsXocZpAa4GMz4ToCep2RYbMK3RbXpfbicKUMX2JfNvr5LuHSJwnEPmAETSQL4KZYyp3ZomtNUYFyqaRreN2",
  "key22": "5bGBNC9C7uLNvFbx4XVeL345FTpjvsTkSqjNSYQSBfUdAZdFGNo1gRNNmUDaFKL6vwSP6ZV8UtR3A3FiFzqjWNLD",
  "key23": "fVm9Zi6t4TKFw1XvBu9tJPD2h1jvmRNNroEtmGhrVrHVajaNU5bAvcCqLgZfegmo7ky5GFxGxkWa4FngtWXfeoC",
  "key24": "2aQh8xbwQqRhETy3QonhxiKw59VUdkWNxzrs6pRGXwL31AzhaVJXeKSk9sq4gf6CWHFiUYnx9ndMunvxERxFj6dr",
  "key25": "2brJhjTXgJordgKwxyFPjxgnyKcYb6PpYx6C47v1jgQm6uvCxzCX6FuqLWGVCQbvGihjvcsPjhmVadiD1GzaDBW9",
  "key26": "42CQxrj7fY399oqULXdd1zDTDC68V4C4RBSiBE9z9tnQRUVs2mE9LWyWD1KHQnDHnot71BhJvyxFJwk2T8nsahwj",
  "key27": "3eFXkze6juf8aceMSMAvP7sBeX6adm7udrvhC6oEyxpqZcxkZnD81Q4rDSMJi5Vwwqe29NvFH3UhV7Daux62Fjmo",
  "key28": "4jphNrkpZbKN4MwaevVdmE9tEa2MQnmJZQqrWzA9AvFCaReXpV7ktWLbtyW8fk36kUCoDmm44r16qSwmimVYQZFF",
  "key29": "41bVsSXxi2K94r4ib27bfGPrCqKWX4q7L8dyZawucD9m1fPfJDzKcoxFWJDavkcUbFLNEPxhz1D8kDAg6nSxybQg",
  "key30": "4DwVZsefGQ3JJ9NqpLVyKxQQaAXt5xdJ5PBEfaVhFSH5XSF7Ek4nPqLvtmB89CAsjoC4pXaGGY7s7VhWNxJhuZyM",
  "key31": "4JPyYC8hdRrWRojjYWa9T1mLFsAfJNi9aQ3U5rapxFxEvaMNfFZvVhsP98nnurpf3vC79GjFiFzwcknCCxzkpWUj",
  "key32": "3CAfSaBjCMFFnvxze7cVb9fFiXyaSGYPDQtCbvc2UjJjdGKEAhMHK6CyrZUJu2BCzV9ikunYCNyLLUJuQAyH5JmR",
  "key33": "2B27w4CiZd79CGw4mmzsUaJdghkgu68gzcmN9cuYqb4VVLaDJZdXPpUDg7qTyCNkiUkFvAotFvtSpwCXYRgw2uHz",
  "key34": "5zdk3k4NAKdDomnW1LgTqFEPw9JB8UELjtaPcfPx33DBTD6QLeVbm9e8DFgDuwC156Nr8DZb9x57qf7KoHHxyjyp",
  "key35": "mbrk18G3ysNBcWsMxyJEpfepXUMiMsST9H7qeByitqtTfFdwb8QTQQFr5wnudd3mNG6Hz7RqEYGb7dStrLw5BV4",
  "key36": "3v4Ga1qUjwyHLtk2gZ7BfmW9NARqBrdkcgu8zaUtd1n1ymocW52ZnzQ2asvEE9PaHYsK264cjdXjTmx835yWzEbx",
  "key37": "zCcQcRsndbpumikoqp7KRsgLMFLbPoRVxeRdRFyRmk5fNmARCukDYS6kxJZp1JsSZWVUuNZSzzTi6Gywe4syyeu",
  "key38": "61E8RUnek8q5D4Dska4hEuGZM8QcGZSsRFJFDtBSLxd81RgGdeHUiKE4BysfoC8nusdX4b6Dv9wiJmKxMK7Qe82n",
  "key39": "piP1bXSbW2R68m27hrFRY4W4DDnHcqm4bkei64res3LkFtMhL8aZggS1B5xeM1zojg6b3fkhG6xV9hYW7muYiZ7",
  "key40": "26LuhmBK2LX2toterxzoyqCynX2638fyfprqh5Ckzjk7ddwnEN1QG3KRiTJgbLpe5TsghW93xRDDWqVnLudRPGN3",
  "key41": "4XpzuS8V9MoqDcPypdaBmn4XCpGAZ2UFGF8P7kr351Ukn7Rm2ahpAeCiaYMszwiNPMRxntNyYbD6gnzMV4Xndeko",
  "key42": "48TrTKkgPenW8Z6QscVS2sP6SikqVujQV7Trzsm3SxakzfGwaUa85wK2AE31TMYRLHoab7RZwcMKXfnJgvP8RwSC",
  "key43": "2FpJn1yyzqPKD9K2M9KMVFLXaUxrQappFUj3uRcCcE52Yx4pvZyZozFnDeaG2XA1dQW3pPoNtbwesjbsLcrGq6Jf",
  "key44": "31fdNVkAF3gqYJWVC7agy6gN173cWM9wny2Ed2hxoym5GtVU6znfK5XZPpzFGHEfnC1sJUM7mKZ5WcQyPvGJs35X",
  "key45": "3CLrrhMhYsRCocfo9vqpcTkxRLwRqsx3zKQ7jd4jAFhpobZtpk1KxZNWFy6MevK3b71Lo8at7ndqERvZNxoX8zxC",
  "key46": "4Xtahqhem7TUACXB9ABqJti8bKpg7hSoUVUGoZsoMuTFp67AdyoqJgezTRtu5B5fGEMChZPWArSGwgjQpGj5Wf2F",
  "key47": "4ouQqin4XeyBwAifLtq6TH9CasH4sRyN4nFRAkRBvEkca46hcVNARjMSmPNpSLJdsg7FKJKJGZRbToYyUbkSbaut",
  "key48": "2SnpHgUkbJsCUtaXuyGsKFmqFVxWxYiiUYxt6hhDwy7KY1e8mz4qFBZ3oU2YmfF4vEFuKebsnLF7moZ77JkxxLac"
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
