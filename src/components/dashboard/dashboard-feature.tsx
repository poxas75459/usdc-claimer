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
    "2xpABJWZzTjTDgi3do4m63z7B24U8Yv5a8FakGZ5FGpJopEjAF8Y1cWDstXFi1RxQkVEAJML3PFWUcQqhAbg8xwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vKVnTrJJmXRZywUc1BwodeAoLDSuAuy7ZAPccsNdVZ52o9cnUg9yzkMYvWJYQWzoxq9cCSXNXqVAkJPuNYuVdbE",
  "key1": "4385xmGAWW3mWocGEJiLok4Z7JkMoJ5bJsRRg9F7Bt8PrtaheovRUd3ugR7yDA7NCCiBSjydNtbmXiteXNCb5md6",
  "key2": "328wk9pWt8Gx6YB3hv8gjZxSLJSDUbomVpMZatFcC5DfhN8Lh8aCkA9btBsbqVoANbG3Hjw1GJLhba9b9gNdjwa4",
  "key3": "3ietgdVu1MrQcdkRYivqHaL52bJ65RECMTaAuSZfzAJUXmrBfAAVeMMpjC58caRoXSk7nxcrjyW4bAgoN7jQFHXa",
  "key4": "4AAA99NRnLDAFaEiV4V1ziS5Ww1TfqGKUfXGtutDameuVnegHRzbfqB3GG2b78BNveGh2oMSpFFWeEv439SP3mJx",
  "key5": "5T8iuwiFqtRceyMZGzrovPQX6PoJhZEjUj3RB7kezANK43jxxM6c3G7zgZWJuLVtr3Jeezqto9Q4E2aAfpJT6JEa",
  "key6": "94UBFHPotkU1TJHC5N8L9Q1XCv8HKFcauDVksK7bzcsBMfsi11Yi2aY7vjeU3eVoV6PCEjeyJq6xHpk5U7WN8qU",
  "key7": "4s7mq6Bvu7yRJL8Dc9e6Eo1Hc7GNQExbBwxbvWCx9YvPWFxNprtmqD4sciirucEBMXwGwtivmSAczb2ZHzp8VMop",
  "key8": "tmJS8WriXxE1qNwbLbTiEc4A25bxFDhgrypPLLDkyf5DF7eofAXUkc11BRss9Zg3WCERUagNw9gdBnChNZLfkNW",
  "key9": "275sg5ouj2qKyMQnjEJQvhCLMx6iuyctquYTmNZKSQgpqYsmy5SZfYP9MZpXiPeYDumSkVUQMgzNPAFjvdRizPoy",
  "key10": "2uLnuizBUzazvroqAtoBXAGQ8DydHbvrU19QS7h6gR6AwZFU3xTXaK2sBTyREp9XVVg2RfATcZKDWEkdGUWNYsPV",
  "key11": "3nDb96PD7fridD4JA7SFNHtFck9USf9UKQKS4Hhvmd8d9RGgFrxKju7Lnu9KTUiGuHrMGBDfwxAbazDpw4CVAjyN",
  "key12": "34toEKmkHUtaFR9fFUbaoiJoRa2cTuUJgyGv1VhV8f5gxqN3JfuufhnMgDGkgN7jWg8CHGyN5WweNWLjnUVByyBR",
  "key13": "4pBp3vgtZnXz4bCCFMYF4HQMXq4gjEh27e425HGzog7aGTwUtZws8w46UH3ZDyrixMQXb6LGh3BPrghFg7wZrdB7",
  "key14": "5sLuq9vK1jzW1iuuqd6xhMEg4Jm6dQ5adbrbTYcWdkfdDqVDjrcrbE3DPGVpLGGosmKNrEyroUmYuG3fD29ERzhZ",
  "key15": "4bmJLqaJgSiWJRDyroy6j3UQD4wCcMe7yY5r2ShjLsmnE3LPKV3NVD7YUZu1HDntJAZp16L64KynZkbmqvGqTe4f",
  "key16": "2Wwm4PbtAJ8MgMe6qdS4duT2LybXsDjREqAoCya7Ta67A2rnN8ziY5KceZEGua1gkDSYetinuBA1y3NmjDDxroDr",
  "key17": "4Lmcwciq1QWjexApaJWdX5D3sar8stAYhbym4cQ6kaSqxNRgrWUkWc4how4FxkuW9vLYN6cD1AnH3RrEz6fWLnyR",
  "key18": "4kbscHa9QM5rsnpSibS1fmYAUSqYwPYTu1o2aPwkgRcShGDiphCpumAmEiCKjnQ3RV7c94yF4xZetw5akobVa87L",
  "key19": "2k8LfS6F1Cuxv3xtqyJZzMgdDbifGKZuhvJgNFTkZsfb8EUFWLCFVK84umTdw2AnXoFqspcKb8yFxkjkSjCtUPsZ",
  "key20": "2PAeuH1pwjbGAsTMgAEtMQAEDm4ATqGtNJgWaHrK4idfifQaTVeBUgf35fYhxA6zXz1PzFMT1ufM46iNF4ja9G7n",
  "key21": "4JDcZ6epnPpgPEfkZ5Fx3UYFMmELGXu93myYAf8NCkbVMagXDGcojWqpTGpGj9Zw6NrH2TeVtL9d8fb8WdvtKTco",
  "key22": "45HLtvujJKQbCewFS79rkH56jHrk1neFkZeZynZPkpf1nKZ8MS9BQWGrduWYtkE6j4DgcsqxxmLwqQDkbaL1bhdu",
  "key23": "2wJkaNZTxmbrUX2KVg5jnWnbzf3fJ7riNNe6mwHU6VKWL1y9anMHNKNyEzpyWrycwqoghqBHHjTkfm8b2VASYyRj",
  "key24": "54K5o211MyaEMzawqC5EoRriaETZdqbBC4g99LprjmzRws49ZxbtuwGHhN5dUHR7k1KRZaFvKoYB9nNoEohDjLay",
  "key25": "4JuRP469wPN9z7GSFyTVk5tZcxYSA86zPz9fduduvx8yviECgMB7TnTY6qbaqNo2RRVxiASmK2gxskkohVKHibpj",
  "key26": "3SocLhkwiyoUmiwMqbMB9d5uXEHWXGaHne6JBH4sCqHbaNLLDZ3XXsC8FDRyVhpGnGMrDmEskXZ893wwvSWjXKaG",
  "key27": "2UGkLUwVfQe3xrWp7Xf2miFGBEqkMKL66DwdtYTwir7YNrzj1dvh4QapNtryRWLFgqYEiZ3kUnNhQdX3W1igCzgt",
  "key28": "4CoN3tfCXcR9g31woa8oaE7TG55v7Nidy6HB2PabQQaRTJmZ6QYAGQiyWSYwxSV4cV7iE38WZpNcM3VMfk2y557H",
  "key29": "2eKpG6MZhRiS72asg7TkXadrcchjRmEcSGewtMsdw9zgxD6fT5aS8WU7qW5Cn9UHRWS1UJi6pPiPEJKrvdcbcxQX",
  "key30": "3MPFFDhy3nQYe8Lm8EuGZGo1ZeYhzU24vWdMXfE2r7JeWSeic8DpKQncdQVJ7QMKECGSWT6r4VQaKVMVu8DMSxxa",
  "key31": "KRjW4aNFLnGPanxeZAF9oq8r2UWUHdkZ3Ly59HTUToLiPfiY8Uwk774DGSTTaKXEyfLULgen11PBKcPeY3m1S2X",
  "key32": "4RxRco3gxvWTWYxefCX2e7oaUZHgfKZjgCc26PCjUcJuz51Km6Y7zEpJbJfYxXhtKheVAgcRro8fcwLGQQ2rw4CX",
  "key33": "5bumofSck8eeN8imUhybxDBg6FHthDdj4wTSeaU4C7BWs14LVLhbYuXftpyybmemoxjH1TDoT1ttrGT2PifnCD7e",
  "key34": "Q2gYBEBf4A3hBSksz3hjJ32JT4jiHq4d9EpghUkucAKRjbK7SsrgdKtf9f2aQ9pter8DcFt6AiNZs6jmCf6sBM8",
  "key35": "qWeG15N5Eefn5NN1mNgYBtfbnCSzTnWXWmiM5h5Atw6w8WG8uKPuXd7DomqaAzMG9kLU32n3jxESajvV9P8PizE",
  "key36": "iMfBEtwDnPZc4n2nHqQ9h4x2TfnWhDNKuoMivSfAX7ak5ry6BiZaHJuL2VRM7NwgiHJPwk9TXoUSW7KeVcDgboJ",
  "key37": "K7RMJMo5Ju8HfTf13MU4aDrz9MErFeCFVFPVmMBTfFuZ6tWYvNfX8TUuQYqq5aDUNXLuF5e8AAd1C1DrUnheQ9d",
  "key38": "63B2K3GncwQnvSxr5xCWKK31vZddT7UN4tWQiJZSB17r4yK5LU2vbBnUqjyZuPGitzXEQmD4yTYP7DucSRm6bLQW",
  "key39": "CNtwm7HWvxddFwiLTFxYTNgACat7KARVtVK7cGsvn4yT6UJbqD4wvF6LrfFddr3mBqYseZL1XAvefAL399mQdh8",
  "key40": "554kVgVY35BoTxHJ5gjR2Dg3QgWKBoQLBLKLgHuxQ7Ye4BCWnR2qjQDVFQ1kdmK3bjWMqsqjAQctYdzkvxPRk2HV",
  "key41": "4q8eGATGtefuqzrg72vnJp36nuE4cVeExC9Uz4JsLCytwqMq922kCf1Bh942ZkC8BGHoHqnwe7AsGcUBb1gS1w2w",
  "key42": "4Z6wQd4qBuAhdustPhx17e7LdosktodxpqD5caNQLKHpcwHhfCEjRYugqtdhDkRUn9uJJCtBSBfiZg8eUGf7dfJH",
  "key43": "4Bh5QjFqDENUrT1L6h6jmXBTbMJozuLNCSwKg9VCDpUkvSseZcehy9eiozhgtnFsbYbBb2JW9UZCou82kfZVDiyf",
  "key44": "3sQd63xJhnuqEYpSvEfynj7i881zNafn5v3nC9SHZu8txu9nSaVSPGiWjqtsrTqDKxmtig8DK5Fd1dHbGw5CayVy",
  "key45": "34GiZbSGbrHJMYESC23jMQeXAaJZ2cZaaAShWYC2FpgqbrKfSeHopUNRprJbM3BS9RJucStkv1svnHoTG4uJoaG3",
  "key46": "56ECnGY9Ru7VZ69moAp9ivHKExpawBH23jh6XY6dDidpc7xbSwAMsWhYELtTx8cGzUSJAU8kZTGqhg6q2hWvNUVY"
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
