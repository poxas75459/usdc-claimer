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
    "2N7yomQhZYgTgE6ALoHhzwQ7HYVzTeuxkwmp1krUxnbxfj6Cwmpvse535PEutC8NnJEsotwB1QbjJ56hFwhYUUAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9Gzq6sQdpz8yzP3TCAoA3bfCEgF69kiSSrLALsSxjS2aMqQJCi1DzBhyVonBUhknp5YE23aRos7HkrLaprghsh",
  "key1": "4ESbVorh6XY13jnGDxWBWnLeAChe4o3g9vQ6cczWRrrgkTXe3mDbgrVHVYY93rVNpRLPyHQVA7xMCnbvRv1EfYE1",
  "key2": "4VN9oJmsucPRQ7uMXdbasPMwZc4zZRX5KdxUQ3QEjPmYLP5Dkf6GiWsiri1LZMaLZg9L4H4EDHgbh23nV4skvB9i",
  "key3": "2rrde5VJcNBUxgtEqZa85wbBr8hb8gWmmcTXonyZ3FuA8EhybrmoPtAQiGS349Kh2sNUQrvyE6zGNFbV4HbV3nYb",
  "key4": "3mT3XDEjuAPk9nhzFTQBSzYLb7AuAAB28nEpX5DPFf3dacewSpNR5T6ksPqE7N5uUZmJeEpLM8b33e8RnrE4f4AV",
  "key5": "3iMb12iYNLoFoRVDKwzeBttzeYzwZXo1CMq2XX2g7z2Dv2hUjCu8rHTK8BnWi37J4GVFJBYwK9E8o6xrdYf2DC7m",
  "key6": "2cytKUmjhPQVVzFi4EUQqiUGw2i5u1iBm9Za7jSg7vFxVgT1f5DxCMLDePnDScQzAWxyeBHGtt57xxdDFaCRR1iE",
  "key7": "xzPEUsQE4NTZcNS1r1Vz99vLCLHP2kbZPiNVPYaYqZb3ccCHS6NBmLbuG1RpMX94qjgTkuy4gkBPeP12QrYjnTk",
  "key8": "5JyPZaKxUgXH4pLZgtA4j6ccjZkedn5MWH8frRbEpbjLbiQgDUBZFumVeRAWrH96nH9shTJHYFmAsn8fQ6YgNYG5",
  "key9": "2hTRcdQ1tsbCqnfMjA2amtoNK7zkaBVQwf4YnrEXT7tQcNeuuBDNjFzczZst7ympx9uZaky2JCbdAy99HNMfAUwu",
  "key10": "4ghwjQxUGAG5M6yVeVcwRSp2pxW8R6C568GUJdhWPEMV1Ju1yRVPtWPgpnCj6YC9AJKBCBCZFiWycqKs7Gasrt4u",
  "key11": "5FDZAdFNM3uaTL58Zn75oGnSMaJHNt6BKqdCsdexVgZ2QDxJH8NMikLL5uHSdV9M62iposbXqWpFCk8ZB6TAXWEu",
  "key12": "51ZGdJgh2SbCyr8WUhBjJktcuDDFoUrYhYsRbqsZXhkaqywGK8RM5THKfND9dN8erqq5UEhx5MBGuDyihyTPQiv3",
  "key13": "5SPJDw8e213bfGTBxUsGHKP6qgzS1oRr7ZoJCQaAJQWgAfDVqQ4WdLkpbHaANLVKRY86kbi2s1JWwnQCYeDrDR8V",
  "key14": "3EKjBQkZW3GNJSsesSeY692hDFgEHgCew1Z7Qn5dXRe9gUsbbQCz31vctxMupH49qApigVqsic3DTpphhMDu4qnu",
  "key15": "4EPeWY9HdH3DKWcsEYhUwXPhx4vmyuN4fa7n3pJFY65jrepuwYoxzZG7m4eU9ZyryAHTfYyKTLCCwCZ6b8ULLVAV",
  "key16": "2PjbkvBR1HDrSusPvxgY8CqigEvFiYAUk8SpqNBPowtFMwfdZaSckkXg484xVTVVPdvR4xTv8AG1vjUTqb89VabG",
  "key17": "3unAT25VWF2Bm8Yyqtg6Qc3YkheimA1TfBwDgkjHbDd4hQ5Z5ke5CC7bB6rxy4HvdQ3b1kftckHusrxaed8hvokp",
  "key18": "2CvFrPdMGg8NsrwH8KAEJ8p54NLD5iKFSQA53T9mV6MHEZQFrumPduJ4hQBL579RJ33RQpCv38ikhAUfsmEetPkT",
  "key19": "5p1hiEDM6mTFHXDrWKQdcXHCwrF5K6CYfHifmtx77vAH8bcmFGqoauhhE79RAKXurrdfry91P9NsLyAXcYx5oxWw",
  "key20": "JyUTuNNYDVXMSBo1MC3T8w8XhFsuTp6ZNCM2hYDxwwcNBpzfwVvumrCYpR86Qy8pVBThHRCpJ6EXzuxSJHH3S8d",
  "key21": "52g3bn74HkAME7yuwYy5ozbmbgpMsUeCLoM9ewGtmZRjL36tQWQx1ETXjCtfa1kKJiBhSBzmBJAAeqzSzPad7ujt",
  "key22": "3an5KAE4vrqPbuUkwMUNGk1knJsYdWx9ACGR48xBt36TY1mwyVUoJHGtLEhB2G9UFNfyCAqNfH9cDQEh8knkD8x6",
  "key23": "413euHB7Mnnn7dEVvyQz2n4nNPKoRAGYZDPkoiF4gPh8FKeP2TxRKFydA6bWHBxuv6B7iQ3iy9KniQ6dG1fuQpwi",
  "key24": "3ax6bqnEFWTmrVng8nnbRMg2weYgLZNqwWuWMqXMjEPqDhwNT7DoRDpLGKCSCg1iZAyiYp49atjniqYUdp8qHij7",
  "key25": "2JWpmGPL8aHSc6iwYck37y9DhJ83bVRj6Bxy4Rxz4YoKepZKs2cUUEEbbbApsghPVhQXqTkdqBKhJDwtvobqUjCY",
  "key26": "5raFUx2Df8yLNjnERKx7NdzJxAEmNiYsQhBQiXZiDtdwr31B21oeV4oSYAQdebDKwuGS1LskcaavULc84dtkLzc6",
  "key27": "2iBmyR2vxH1JfAhimgrxQp5K9wbF1ynNkDJn7y61tX7SCA89uDi3j7peMMbkoGPsdeeSYYU9hxj1awsfvafBX8iN"
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
