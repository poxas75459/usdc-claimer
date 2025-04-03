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
    "3QL4WYjNuHNXdnDXPTth8Dbtaf2emHoVVUkaVbRe1FM5waCeGgyAJyazXAqt4FzitxSv4wVYRotAXVkbAkR7PdQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyht3kfQCyMcbCX2WEhbuDWjH6Mau5UvcC9XHWwLt1xme6WfgKDYMcYMCkwkeHf6khBYedCxi3mJQFv9tWobSUc",
  "key1": "WJC68RxvqrQdy45jtJQmPUqofYCQ1Qu6TZtT1fnz6qpErUSuaHNNcvP3CN29XntEkovgXj9MinYFZtzRPvKQ1u1",
  "key2": "5FAjwz9BSWgdwuvADD48714k54avjWjn4XWpfwAVYDTn3pqbGe6NJB2HLWzRRoAmNpRzoj2W7xbefDk179366nRa",
  "key3": "3dqBEqTECupTKqxkvXDRkwU4hiTdtpJCw19sxCnqgaJohudA47ynp6o1bahM6W9dg8mMx29Yniqk9dXP9HUzpJrK",
  "key4": "2m9NKr6B2x8USnvytyYkpoQHYTrFH8vXHkPqSMrCQy7jiFZj63EEhf1QAiUHc3wojZNZVM3jxkktGA7oSh1xHvJa",
  "key5": "5TvZMaVzCszHgP7f6PuoCuWL8TyuLvZ4XCULT75Yad8V5x5QnR3uaH3Rh9gAfGWocDSkVER8rvDLiieGNzfGUUU7",
  "key6": "3mfnZp3tJs3jFF1uN8yt7NkSwpW3nqEQFv3wjnTZCjL3KPUVXZP3rC7Kzpme8w3PRDKjAWHUh8H9G1qHJUCQeBox",
  "key7": "ERjfSYNPYXMcsLYSYWeU3UwxjXyGzrgAVTky26yZzSzwVoeahsQUNua7JZAAmPt9Y59ootxWSCQgUJirYgDLVYz",
  "key8": "4Pp1sTBzavGEKE2QzEajAtvJ73qWimamgpocqGcZ9E6FMsKxCWuWik1kh2b5DJaGTtJKHePxhLdEQrHxqWZjckNB",
  "key9": "Rqj1CNsZoWBeD7PwdBDv7wcmeu8MBFNVRF7R4LPN1wBJfn5ZNxobvmHPtucDS6Rn8Ubj1Xwvn77NoGqbbPEpsEU",
  "key10": "aThEaaoyMso9RWCAZ6iSCM2xyGLYQppwGVxJMtGW6tTGkDvJEmEGom1jHPyt4Xj2LspsLmYodCbLH5177AHNYWu",
  "key11": "64z2tCTcecfzBRwvbUJotJWrwLkUJBgHsdA799HqenevuvAcUALEYx9899Tr5NuqiirCpMHy3urYVddjBxhPqPMh",
  "key12": "5TArBJUyeTcdHv2WVRyAU6vtuLLxZCn4C3wxhdENpJJuG5x9FFs75UP8sV1PtWT3gZZe68hwU17AaDz8LzZgLLZ4",
  "key13": "43dQpVWE7HhRuqYRNRZTKfkvQG24nUFMTuykHqDDK8HSELMsbPzuTLyoAxJfP2fWDQUYv9HBBvR72GCAHHCEXmhe",
  "key14": "5KiyaXXVH5oQ28tstKHyvnvtLVXvVDz9gmHWh9kiRohB2ET12URLvX5qKehKQrMwgmP3KYwq7xhsrzL37V1iWBhY",
  "key15": "4piWHyX635CcwKS2CAPagqe6A8pPdvJo5huEbifK11DiQ2exz2EHYWFECGUyysuuoBytRNjx9GYs2kwycY5tpEAr",
  "key16": "dpATaq7oQiTa9YzrppMARUvL9aTFZWvkswGk4WkcNLms7sKwZg14EGdTvQh3r6ocVDwNPeBj8eHpNNCYMpsVux9",
  "key17": "NNoRfrori2uWxrUK92E6kkmXF8JYshDfTHe7Es3mmrDdokAqGpBusxhsnxNSTL83aFD6YzCTdvRmP1jeJXKZ2os",
  "key18": "3E7fVQ5wUAetjWR5FbnQe7i9JrRAHjCJdMpQgbS7sszNU9SUt7xBbpedJbJ7JRUeiCPWoW8h3PRivnJ3FV7U9yWX",
  "key19": "4ctFCryanbL2e6GPiJARkkJBTCo9y4M2BRQsAMPJkY9n1ArcsUrSy3fmn5JmSXLe8g6ymTUaqbw3gKihduc7qeAe",
  "key20": "5FKQ5KGj7VPoNbfoPGazmemWK4FeETd5N4pPD1wosSQt5HeZ4iJQXj6m8eHSyTMge7NyhpRRsamTcGktAmhE8fwb",
  "key21": "3sydhhHLcSDfTRHdrFoMBjgaqJBXLU3hvc4hAXki7YqxuxibwdmcbLfGTmXXud1VnmYB3GeJSf92x2SX6Pcsg81b",
  "key22": "i85uVatKZonp463wgNn6rq8J8dVtad6uoZYoadcSyjfZki3Gfaw68Xc7wJMc51MBkq5wJoucKSpJZMVnXNNuZrc",
  "key23": "52CuZxYo9fk7SJMdYVvjHYzZpxDW3kyE27Ch7u1xBj2in5B6CGYL9JwQLzRzFoRdS73F9X3MPGFCY6JTz2RYmvH1",
  "key24": "3q2sYNXYWHw9D6M6E74bqmqNSePQWyBgCxcFg9q4RHyyzCHVmPJeV6egKe9JskDfvWvJ1F5cGG7NSTBDeuBD4Mk1",
  "key25": "2YboGueWbSG4opNgHKLSzcdeEtVLyobCtN9bRJZu42u4SA8rrQiCea2GG6quZxt9miak2MwpfU6D1JWboFENNfQs",
  "key26": "3dzkH4GDWNqJUm9riPWEudEBZbmBN155i6xdZK1Udi2t87RWf8vFhz5qHFBnVhT6vjSff2yxTm9YiNtiYrFKTbVP",
  "key27": "3KV4d5XcW2XeBQWV6D5Gr2gRkpueP28fRXA66NJ8ZFDAR2MuoesTpjDPHkXmenpasc1aoCtEWmRjXiTQ86qcEZBL",
  "key28": "5mchsBi1FRgEcZesrQ13voM1cYpGBiRLgsjX5kmpTgTAZ6BRqWPdBUEQzadc7vevnDirEg7vWreYnD8iETh7hKHF",
  "key29": "2XFhgJ4nCWtZguVARba2ugrDX7YUzSDqemUFq71v5RgE7Wg1b8ieSDnG6HKiPHMkhY2gyDQcXEqnL8HPLcjJkJiM",
  "key30": "uGPdDxKYt7iJMWoudMLosuWTbHhaYsNB53n61NZDrhsbGGAx3njMHq5HvwnA9ceNBWf4sf7WAfKrWWHvz8uXHPZ",
  "key31": "4mdfA13M1maEuRcP8ffe9qbnrF26MXNyaCsFJPNwgHmCJss67SZt2sopEfKWVBfZUm33QTmFMtjRrcuGBPqnmA3",
  "key32": "5nRbcUCgvAC3T9H5nkKph8dYSwD6fhWrfFR2ZWxj5BUExM1UbT5Q5D7T1ENfGRAExTxVSaWXV3QzhZLMyY4iTXMm"
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
