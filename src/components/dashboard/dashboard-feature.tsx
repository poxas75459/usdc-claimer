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
    "4DR3ChQesnRVRCWb2z27dP5Crs2NoW9UiUVm1LL3bS3mDrbxS9Fn3uSTTcn3C6MkPJk4frNXXNhTT3uew9dGb7SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4As7Jn89b9ZRpQKpBfU9YrxpwtbVBAPtTJyDG1ggbbEr8bYVkZJo6ynuZQ9QARaECo59R9zpFWkrvRK7pSFSHE1N",
  "key1": "5DuQ2s8V2SF9HQnH8zPH5F9LJZsZKMKKnPgvbDeJkkZvU4ZrnnCPVFYF5vNJA8mstpZLuCdqgtnKNuUcwvtagNdc",
  "key2": "5CJiZqkXZSkMzTDNXy7AQvBEqkHEDtHWCjmt295GnYoHqaVxXn1FoHq9h9X93yKrJi62z8BjsoWwcfYmio5qwVrn",
  "key3": "36bZdzvm4EZ3SETzG5b6KZ9xwKSg5Wb4TYrBVBDXLrutd9ixgNsVxNAXoeWwKWW3QcZhLjm3DVJ1BmryqhpeUqtD",
  "key4": "3Vo3RQcn9QaZSwTERa87YJstb8L9mKtYJag66ZS4QcH7GaWEixo6FBHjVtqttwfeTapJVYX6vnrBndXVRMiJd9nb",
  "key5": "2K36GtvHeWsMEC31AZZbF5vrJRnEZtsbegAepHuePxfrarDdre4CKDwo7nNv8MfSjMjwyc8FBYK9Peziqqcr5zZr",
  "key6": "3mKKQ98cTpKiVbHsUiADHkgzWaAd7E7CHDxBaKLVDFZqMA7naJJDzPxgjCBNbyLEM7ep442YQ2NCiDDMvLzjNpCx",
  "key7": "2hk5HUKN8XJssQFGVZFPD1ENEVnABPExqjwiHybjsGEaGpUA2LGHdsAQCTXHXAonkK5xvULRVbmuxq5KCs4f7sRR",
  "key8": "3kKjPKu61d7KwsDheBHqUemZa1tqUQnaAcxtUbnuy69XtDUHJ5mjVQibX6VNn39sb7Z2f8rF5GBsT2nLL2hhEk7M",
  "key9": "4oF2goGe6RMjzLdmjsizs4UucZybXFHnAJqtYiibjVxcfgc3dcnby5nwdjT8zLDsCsnqEyCW4srhJfhJR4W5i9iw",
  "key10": "2YN61MYHu71CRYgb6eP7B6XrKQJ2NfZvsR2vi22sAWQGjetUUkzL7oQxbKTL3iGL5nS9znFRy2GC8QmuE3bpt743",
  "key11": "5worZcLAjA4C2qmFYTxe83G8QL9sDLueWcRXY77wykaVUUJn8zehQ4fXgHAjL4GwaE3aQZafQ2bfLtFEjbUL993i",
  "key12": "3TQBtwqn86bMmdYL4NiNqUL9hhMn8xrM8i3Eg7FscBRzAAqxnm7cnq9tyRYtLqYEi9hyCTt8BELYvchpf2yuENGe",
  "key13": "2NFFnk6sEdZ9b8QQNchVz3S55aHWdYCycajGtrD9ULt1Knn96Ndags4qmcQJkewPGU9tYg3iQQExxnxMC672yECp",
  "key14": "3xbMJDAUU7YcY7EB4juTVLQyp47hSQs42vhhz6oQ3saTYsS96HkUmQGmeppJ9k8qUWNrSPeqrPTPtwTVFoBoeWHb",
  "key15": "5RopNbLFewyNrx8YeLwi63pYTA3arVhL8JnDgHxyA8P49Tk8L8qDKE5b2WUm6QEUMicMijxZUGnHaWDQXhGQU1qM",
  "key16": "4SsJj9zuM2RAijWuewLVF38A3ceds87NJi6rgchYBNQ2QoxzKNMMt7wW18bNE79YwmTdxrRJAnWyGpCC29PwnerX",
  "key17": "3BNGq4SNo2kH9s6qjuKfbXjeC91RjW3abTFVrzfLi1iEcnk1fb9cAQBFwZNjucHAV4CaYdTkGTParQBaceX5qsSM",
  "key18": "ydKqXu8tXUcdAJqnDFe64zvyRE7kKsRzwEApQKyMQpqwsNbNdutYoPkbNNg7mMxBuYWrMjqHMdKrAudYzevGZj5",
  "key19": "bCMC4mxzP7pSEQXnxtYAwjCDxUrNBN7v4TXKfmESm6VrbdRQG8YUtjc8XkWsoRjhavN1TALRpDc7LnFuK7EDZMp",
  "key20": "5CGKkYRn1QQYS9k7x8vNmLLxQFWk8esrdm73meSD6KR5MbfWXxWJ26p32iqKg4LJjTtPinKHr6eBFhC7N3xZy2RT",
  "key21": "yEpQXgnCcEdRNKygY1sRDce9EhcBUvYmVFfDFjV5UcdK9W2Jjgt6USSki1SWmuwpqkaTuieJzH19U4XqtsaZxH5",
  "key22": "5vSzMenTkSEbTNXZzxZcZRXsLe56a53nKE7Za9SoLir24YpiMYX2CQmtEmCcQHrVLAr6fdWYDP1b4XStJ73qZhaV",
  "key23": "5ndCM6otXsp8PWqFXYv8e1cgLHtdyaGGkM9gQLhrJHvWDqcXFRk8td6n8r1821bYyYAFf86yYFagB11YekUH7CjM",
  "key24": "2xZihhdAkC6gvhazce9PuwjwH7wEzQwFDFMV7rcFXzYSxEoujb545GmFSeUUtDJZc569GQmxxMxbdtgdK1rzYpMt",
  "key25": "2sBV14AXb4US1aQgnbuTWJsnWgKucFBMLZerCu75hafmkgqvxA19AAWQZJCDruzVpKohMvefuxKGHvLiWXAEuUZR",
  "key26": "46tMMCb5Ez6EKoGnwf4JLJhWHhFXGo3RcEaxX1Zi5pmNW3nrQ1JxdFVTZvYf4SEuG4eBPXG2yo6rFbrDUQFDC8qk",
  "key27": "gF4LuDukthCzUWFFmAhs4fYKp6kXFcwEPpZR7d4zxp6ssxGsx2rPuYsDYQcdeTgSnSMgXTg2FSxaDNwtW3vAR8F",
  "key28": "2cdq1xsmF7S2Ak6YxM7Yx7qrH8USzeSA7YyuC9UQY5ZrMA6qZXxR3MBLfmLx5NECZEkDRG9XuNzkZ6dNu34T9WC",
  "key29": "39dS3i5xxYuhfPRnmooGhD1W1quqNvYZZodbKf3JWW1Ap3wgZCpHzsgKfLGmaAPD1Ti9eXJqVdfCRKe1Rpkn8adk",
  "key30": "5vDDWM6rNQFtqrU4B8PKPqwM9vxwH8NPVgEaP3dJBk4mJodaxHM9D3cHZtcN5ZG1hvs6dTheMDEsn44yFMc645tv",
  "key31": "XbU83XUuBJpsopJ3jNeJPVvSyfuK9hjEtf3esDwMumsiSqKKavKEXzgn6Mt8kDXd3L2QURrrD22prjqo7C4uHkJ"
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
