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
    "4eDKs9YFqz4X8HHFuXtDrtbHQ7DydSvDLxaKATrLWo2TiDbuQNASMAFDQAC8iwFRrchGeSfmJHpNd88TxE4W7Wwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qv5vDo1GybRCKMwXD7Uyk7E78grJZPXHQAWGUkMv6E6zwkDJ4TP5AqbdFMohcZemEQNyC48xraJhtrfk7ikVp6v",
  "key1": "5Jg2uqusQBJd2Bccfgo4rfjQbDzBcoXr76M3MQLUfpBALuUei2qFDe8P2TarphoBiAxb5UBNRwZTnK6taYb7pKyP",
  "key2": "3hK8bigJaTe8bowGQ9zEXoLBbxP52ZqdLj1N3j9RFQefR6b8NtsoNtUK4yTYpS669RKVKnta83SpZVMYGZRRHHBS",
  "key3": "f1kSh7evTucJKSm83ApGy6S77STh5ojsRESkN1BTE6LhZd2sW1NnUBkbtouueY4EbpiiarSyBaho4sX9idNw6nu",
  "key4": "4ynDrKqQXLha5UkYu7vK2Na1vZcaXRFDsh24hT99Cxu4kXBJuUzZ5GLnmN8qqGee2hF5YmGK9jP13GTeC2o7mtbo",
  "key5": "WgHyXyCY8oAKMK7eACiKdzcKmSpuBnw1n3eoGMLZFkYqhLF8ZNwALUeCtVdprunvZgK7QYGVKJnCZcCj2PL9UDb",
  "key6": "64ZxxacvaAw7RJeWryeuDPvSuE77LYhYSpPqJhV34yWCWW14KYXUAjcYjY4yTvEsvXM5hs6oRpJ9uZA2FpPihxX1",
  "key7": "3Hbubq1Bu6ECo4CnesDBsYFzNUhsiWBfNqnXzc7wBEQteAZCKjFERDJQUbLRm8s4h2hd58EdfkcfXAEzVa8ojbaV",
  "key8": "pmd9t3k7P1MfvhwgSQ7U74Y5rNCdpT1i49d1DXoh7naVrm3WUJCyLCyLP7VixcudtFfCUc8LQpiaxvCT96iPhCN",
  "key9": "4TQaT4PTnpZKrNpJg4rZVMVdums2T6YPbqrZaLMuwTtFEpwEZ8KmGYYEQiUQpmx3MPFtgfpY4ffdSpbvN9PQMuVA",
  "key10": "42T56GrgEmmSRrBUe5xXEj5WkrtKtfSA2VtdNFpWZPV1eFmerUM4HoBm3UQCCguNF3i8ZA8W3Rhtt1VujPmyhKnU",
  "key11": "5MQJNQj6Wxg4y8YiW3Kufn1bDVxbmn2RM1xK38uJKUK24GDzS5jcGeEszvmd5Yqs8d7oVSvT3cnhk6Q1z91wiWUg",
  "key12": "fehQdtSmeTUnUnTd7sAmxcR1a9SnpG8TbxSBDVjakRppVF1tYKwNcTvCAsyEpQJrV2b4M7sdNxmQnjNxxM3j5TD",
  "key13": "MTnS17SnRYfR4ALSd9A5A45vQsqxPxNbqf8UZwQebwt531fT3CXJRZC6fxRMgDmcn59Zo7icqH5ieq2cs2WKGhm",
  "key14": "fySrvyBXRTjMuQexbjza7Zrq7HqTvsFNiFQtswmp8vzm8pkWhNuvLSV3UfAcpNUPnAncdBhaDqg9BRtYLFxzBtH",
  "key15": "gdHGsuqgx8GqS4Mm7B4fAgdsXyAHHuRnXoYxGRpREm3T8ZuK4ZZCUmhjKyrJQgxufCfbwUxawsupzziDaNertyv",
  "key16": "2x7eRDJEgaycGZMuSAEBR6gSKaey95dt5kKEETs3iKLoByhvYDk2fbcA9WWrE7cLTC9eFFeeqwQainTnnKCEFnBU",
  "key17": "3gZ8vcMP4i1sEu7ZvMX7PnPFCMAxR1cz2b8nQemeibZgCJriAeQrhF6hNyi6qepS3prYo6NDxhGEHB2WngHShaqZ",
  "key18": "Xwh6i6eQDbH37BVqtYRYFGXFwKcu2tmuCVF6KzT8VhrrroYRw8TA6HKiBBDWEYwsaohkhXd4oBRd5anDeqWPq3b",
  "key19": "4sJ7jeWKrh65oW7b67M5whU9jiv5SDjV1gcGdFUStrdEpcDxDXL2Fd6FqhffzE4c1WTTqasofRan6yKu6Cnhq5Tp",
  "key20": "4DV68tw12jfUxMdgK6RBDBHAcMC8VQXEFYPXrc2cdLnwnAvP47JKEKCsJMcQJKC3irVhrsJRHXSiziobMHB5WfEJ",
  "key21": "2YjZdKwg8AeBShdZbjRNx1UFHXEETvLMsQciMVXUw8Cp3ziAX6V646cpMofD77JxBzohBSYH58FyiKwK7sVRf8wa",
  "key22": "2qGkrqPCMnRZuNgtqPEW7xMwrxaRjz9bxv7nk1WJiipp28eW3cUAXdQFzELZrLLmpeGQQQ567Deo54h7MsD75HWp",
  "key23": "3uBPzuodyZZsyYAv8b7YBeY64VxXj2eJGqgrEQYnMhrV7Z2Px71KXxqx749Vnye7mg49TfgaYc9QDVxVCpyoPQL3",
  "key24": "2uba5tZEk6MQAj4tign7WUDHrV5YD744jWes5M32NYsyES1C6H1KF4TJWbjiG98dcVWvG6GLuBEwkJ5VLgtA6pMi",
  "key25": "28C2qZc8UxWorECAK31EC1ichSqjZUnNvj97S86bA1QsuxE7qqGixy3cWxz89XsbNrwDkcyqChZhpjXYbZiki12F",
  "key26": "5rHwpSGZjRtpW996iaVp31yLdLa9aKK4Ntc3tP7ocRf2ATVEMmUKWCQsTbEjFKKMzyo2hFK5TShehYWzGGK2DXPA",
  "key27": "vE2QZgjJb7WP2YHCPqTQiZjpLSuhREBDVdeNpQAtAAeXvzMP7vhZemWwTGtG4ASafSps23GjzWgn4pacxfnbJyi",
  "key28": "3CsgRFtA5HPyhEGZzwS8uVvzjWUBBwgtxCvXzCV1Q9L6T5dMYRR3n81XaoZRu871TKnfzTVVi9oQ3Ub8ZPMHpszP",
  "key29": "4dG2EFjzHUvw9wyBYqKKqh9DnkyKxX6Z3SyNzi9sxta3TaQVDNZoS4mwhC8rYsRESumAnB1CmKoSmm3EVoDtLsrQ",
  "key30": "khttR9qGMtUr6ZcxyEskGA7kBC8YpbYibKMZRJrW2ebD8Mhkz3kttzfkYfb793Gc7sAiSbDQFHbo7xvenVx6yZU"
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
