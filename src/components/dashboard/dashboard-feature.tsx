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
    "2uUMt3MvJzcWHT9ZNwdBJbgbxCy4Rucg6gFgLDGGjmM9U2L4s8dMZz9JronAGmAx98MNY5cuDeVG5G6rmu7t3xEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "528t3qeKKH8EGZpkpNoRf5bs5iWNisRw2ptvojWVzKoGC4neV6aUd3XUKcGdAovxWveGm4jmWJmyxmBtYqV2kN7f",
  "key1": "3yucj37WgbmTRbFcrpth858eQMCZhUobHjVufUCpVvQ3sG9oQBGQ7RNSqnEHXwk6PJYQ7CP33njFhMG9ynRRLaCG",
  "key2": "66RUAfQ8YaBjaT3otjRGNSWbff2qJ9pfWdxJ5XX7LG2wR1mbFWJgXUe3ZPm4BUSHNHq3Hqb2yfeUhQM9a9KFECWv",
  "key3": "WU17iT1XbEM6xXTE92MVjbqKUHg87TVJBwmawcpQnDXHuohKQBD6DWDExfzDfdYkNLYB7rZX5hkcUfHpNfBXNZt",
  "key4": "azBY4MSAU2W9DQuCJX2osPrdtMsYoT2ANMWPFe1rfpkpkSFbiPwNy33uecwfhAwp8hfXDTxaGKvToZrr2hbgbEC",
  "key5": "66ujBHyM3eAiyFjMrUDVssJKbyLVqc7vZMADNbxZEZHYMj5ehBA2XEogb6hDp4s27iUg6PfM7baRtXavzTS944GR",
  "key6": "2W46oKw4Sa3Nrb7Sc9zht371eiTJLM8wzhpt1D7LwBwGWdqWYpcjLaGpw2aw1Ht1rjxxZA4msCD5TveTNoykytb7",
  "key7": "wpBfoXXvPveByj6smJqnYYpL3HiCrLaSWmkb1CptJC74RtogcV2GvbegvZTWyhG3yE6nXkZBXMR6to9f1MmxpEG",
  "key8": "qPfnj81je7rPRDqo8Fk9nk9Yut93LC5ScKMtssyCiEhYrcbhaF1RNv8LRWLGiAegAqtNykdGKT2YtnBdbjmqHYP",
  "key9": "2F3M73NM669A1bBmoJ557Yt3c4McmfmfF5SbdJ2cUjmPCUGeuQFWRoAotzzdNEbHmGLg8Lz5CivL5XLTxC2GVzax",
  "key10": "5L3Rx85ULxdjXgW6uLq7J3eapmsvK6a1VNWbXBtCvQYA1djT13ffciTQZuiHUuz6zJJNkh3txQPwHg5zzzmLF31G",
  "key11": "3UUJNeHKLH5p3pAszQQ38EaQrumJ4BQYLKtWqyH9AEXrv7uhMAk65xQxsexCmNSvLErKpYw79txkcN88BVc5ayi1",
  "key12": "EXwfBHfdApmkiuiKtoiKsATtUXUPPZSZzDBxZ1sxue7WZE7Rau2ToS9bfLUkSzKPibbUR6ADVQjfYNqvf4jMxgd",
  "key13": "3VZTigy72Lw75atVT48tAkgembW2mz5AdABtikk3LXz4munscXkC6xwTpKzDUoQxMQ5vNVj82xQ77889hsLD7Ydx",
  "key14": "sxnSKnB3rmEVGt5D8yR3hDyFfZfHS7FwoN9UoeMUWPqZMXrGrRA9TdHW3QYgNWEUnhtZiarCxdJVefWUU9ebHj8",
  "key15": "46TZiZhcnuHZDeFbhjZM2fFFF7uU9Qnm4kvKPzBiif1yKD65RmwvDzo7sfYRbDyWucnLoxJZZhXcS9pumh4ByknP",
  "key16": "q9qCFMLP8d1rqNGtpy9spzj7WksNj77j6o5MWRPbHysk4TUASDoh8AVTvnEtYkUoMdk7Gb3p1azjPfqvJ2V4zBc",
  "key17": "2QGDF26ZXqrxU74KdMw96VWuk1uDA2ePSac5TqUXGr8ucHYSCzrayY5pdtx7ec9EqaQZWfBzkgkQRRzV3cJ8YxJd",
  "key18": "5Kjv3qvg7byRWyct57ZjYZGTfhCREDgYPqFSeHjNZQVj23fQBN6ANrm7iTdiNC7GXnSfbBWPvn5xqEBoWhfH4vV4",
  "key19": "4SUfjyuqMNyvMqEAD3beqw7rUYTTevpKtPucyHMeoJz12KTQTYZwgyrRSUEYaYDYLjznHGr5hF5g3c8r1jpFidCJ",
  "key20": "2um1jxwsStiJVf578LJSCHGVRzAY7XTLncdxkXDbot5QNGuaXsZEBTrN131kyw8U6E9AHTYxsQLLSwskLK3xySpz",
  "key21": "25fo6FBFE7vxM71nXEHN7UWwzx9BrWmK3vBxxwemBGcz9Xcc4LNHjVPXWJVc7L833frPEwNCZHG8nP714RhYmPcF",
  "key22": "2X1dneiRUDxpRXw2oW5Z7GTmHcn6Gu3KzsHzzPP35AM8nnTfQy1gyxBvfMtEsvoQgEEN5fULbMxmeBZEpajkbZ8v",
  "key23": "AboGX4NwQHeKd2nQpf6YwWQM88iMRDQP7Hk1b7nw8JcsHcGerdBfr7phzbf1NPh4YnaedwGrxdM2pJvYFCzrVaP",
  "key24": "3YN93Q6a3SSHwa3NwnJD76Zwiq7mgdtjWngJd5A8anDMKTewLZ4PYVF9LdisKgeyD5TQC69jm8NJ27kojy2G9dz",
  "key25": "3t36RT54YJevxAD4fkbaoYBsAKoKTFgtywprX3RkbV7UxFagiF3Dp9AbrTMFF4317cjqmQ9P7z5rwbK9Qr6dacVX",
  "key26": "1cngrabgPpPAxxFARZW4tVX2e869Rie2GQDEyDuH441iz3xp6rRimsw4qTYBPLAw2cGUQoXcj8cCLhpAN7x4XeD",
  "key27": "WCX4D9E9DaHC8AacFJPJpfNbYVcWD8ZWQcnDeXtVmNswVFDqV1edVw9tuXKJGAKW7WJg5SMiS9gNwo9HhnEvvpb",
  "key28": "4Wng3KAay9N959bhqJJ6BHuiVmXeD7nuikbYhaYL9f5gC8ufTBmUEDNHwjRhktwY4ApfwEHZoGMKaxZMGoFve3cQ"
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
