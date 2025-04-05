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
    "3o2S9Zywya93wDYjT5iYHWwAUXSFyJkHQfPrp8tRjroXW9Lzo8cWkcqtNS8UAwb1qc1qqVsSihCpja4aJV226GPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e7QfZYYF2WUyKMCKfPyp8PVAHbA9K1EhsW4amoaEestTC9ies7VhDcDCFnru4iCVVtf8KhPhi5GsyEYFF6CLyYX",
  "key1": "3pvdgbt3E6o3NziQJtqXvadKqtcj2EEWYBiqZKHwa8gf7wcucc3ryghYkH3mhaUG6AnG6hdaWe62mBM4xnoCsXMu",
  "key2": "EfPuu5cTVkkBK5eeRSk5JZBKCDXxUFsVm8EXDEja2TjCtTjQAVuKhFEzdiWjtGxutivEnCBiVYoGqmxTkLfbg2E",
  "key3": "5wA8Y6jQwDxJE9ujMTxBSwwg6ELdLc3BA7oDTSQAJoVutZqvQ4gDVsyxiYNvvQTCXHasT1wbrrMPgDJwq51wDur8",
  "key4": "4LD7BfCTrh69Ckwn67CvwbyPXchuCmGApLWmfWL7kt9MtVUT4VUEadHyZKEAc2DCtMk55thvD7jKHAzzJ8UV9G1X",
  "key5": "3jDBtHZtTt18BHHebqerGsCXZCZbcixqqNrapsWEnYgrosJ41e14qAw294fFaNQhbaS7wX2EotyHKzozme4uJ2vn",
  "key6": "5CNUi2fgUS8xh3n4iHhwM7gmHytMJ2Yv1qdjgYiMCKjZ1S9rPuPRSWR5sjTaZBvY3eELY9YCkeqceMrpH8n5YKsJ",
  "key7": "bMUweoFrUVCjy6ZLw833zrjvQZzdEhmAHzD8uZCFL2pLqzhmrn7pChpQu4GbxvTxfeX2niNTAanCkgbN83zEUok",
  "key8": "5v36gtW7uAiGarfsyjG9Eb1KuUw34uXPheY5yCaeRR5bmJdUAc7CPbEz8zEwxTzpnPD7LZ1fSLi2sZhso7hdfd4i",
  "key9": "5oWrxnwWpW27EuKr8VxnZFjZ1fZRbEN319uT5zrevuRhHdwGa19E9RbSUwvyygdWx6W4GYV7oPQa3Y2U4LPW1pWP",
  "key10": "5MFZoi59M27TNcsVfXdSLNgLvPndbhC6DotDAmBebjMuvHp9eXQUwfXhJ6jofeL1xBxRf3RvYmrVuo2jxPMyMdox",
  "key11": "5J64s3TDzdEE5jy9NN1iB9niVb2d3tWs1XJyAcon7nz83wSWsv9v7vHa1SYY6CoLTi1U74ipLfPZVq882JSi8et8",
  "key12": "5KanvYSi1Eg3EcQSf3c6vVDuJfAQHrm9EZcQo7xvmqtNVBpMAy15GrBNtiEjNAqaKZ87p4qRgkBcM9nwJaS5BKn9",
  "key13": "3UwtqpnuznzSfgqJoxbLbJGDNwX9MkzuehwDeZdDKrr8EAeUszYCopEBd19Qh6eysnNJuAJuwoxZkaX6FAiBPwiK",
  "key14": "3VUpL2NbZ3v66cC7wcvkpCbWGzdkUnUVwcJebhMfS3skp2TL9ta2sTt4FqwxjWiakeQnD199KHjvUAviKy8RXXqc",
  "key15": "3E7Sr6jTcfUfCYpXyUbELwdKSkpurBRQxr29mwFQz1Dvw2yRXhNoUn2JZirCimW4orJjmcXCPFGVq3ZMRUBDUnKE",
  "key16": "379ZFSgV8WmwJAP8CPFh1kVwwtqf1LhBsWj3myq8c3U3ZJ8pZoXt3d1ewAFThZ5aNm3fJqbWos4ZvMgLLBjreyqC",
  "key17": "ZaTwz9huZBjaxRr1cK76rEpKVx2sVprQuxdCN38DTY2TbH4H6pcPV2KdxyUZuzvGKk6L3nHzbYsChsBTc59cyT9",
  "key18": "3imuuc6v2h6W8rBABHHvzTDw4ucTpATVUqpU3cWZomLRa14smVrASDbp8YoBaTQoL6MTQG5fSsLHf3xrv2zxtbhK",
  "key19": "5XUtR9dvQxxtcTg63VV1h8hiGMmZb6ypm9t4XbxRiJTUt5UY2jJsunavfDoCarYZKu8kwgSmHT95vSCVRE9BhtuF",
  "key20": "4wMsfKSFsbVgnADdekRADT2wQaQR1nKK2jJqRbum5hvGN2kLC7iwFuYqesto7NB2UfoHP6q92M54bbfYmFhPBjGu",
  "key21": "JtT8kS4Qfy4Njng3jWh4d2cnmXaZqp4Q2PtsDqwCgMECiUpYHGJ3MaUbmjNbHZ5LzEVNXD6WvV1VLVchRhg9FTc",
  "key22": "5GdNxHaLfRRmuyARRRAQRfxYbqYeiwdPL7hJ7M8RswqKpoE5DTUEz8i7WuKJsn1a7sUZuA9pGzcXcdRySoDNKsgd",
  "key23": "4VyVoSoLNZNxSCMFjc76uJWsQNF1kZK69KWVjB35CMckH45DcNpqDfBJYxaW6Uygo3W4nYRpbSeNhEovSrLhk4Pj",
  "key24": "2wYC6GmugoZB9RXNCRL11KoY6nbY4NA7xGiaZQ7PDqMHZ6yydYkkCv5pHRGjL9PsFpu5ugQ6scjXMWGY2UVfAoUB",
  "key25": "63rotBQQ1x21UtSHaCLGHyWQ6wQCWxb8Z4z2BZ3ffSDG6xjQoirTtRNBqxWProNuyQZCL9efrkCUYTbboegE8P9K",
  "key26": "2u3NvC5LdM1b1CY7pcfBFjid13A9jihSJVo4FcEHVZkPfspm7zjKbFXpqsaSDttcgtu3K1tXSFgGP6cxkonNvMNm",
  "key27": "58MYaxhJBCTcpZYsYcyvkeiN2RNU94Urwbb5L95CnEmHiUMuL6NVMLdsTYphPEBRSVb2GdvNMr5CEmVzpWjZEnKP"
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
