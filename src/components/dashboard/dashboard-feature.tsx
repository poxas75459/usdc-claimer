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
    "2Ywy6RDUhwEvDLVr7oPzd47RJvEf8fU6tDXFagaCGSUG43k2uaC3soGMDkMPB1NpKVQBJWQMQkzyt6cE97PgGa9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58SFvWHNxYJW1KK4rZbQakxbsoedxPDzTMEyuoSkF7LBe5Dq8BfpwDXT8BUr4v3XSYRgXnEPBE4ESxJJSDuC9ETa",
  "key1": "5mMXMNkHfJbLwpFUm6jce5h91v8fNuctsSbQLDbEHYzs41nMYLoB2uMUqFDaWjdYUTLysSKLszLjg94Rmn4JFh7Y",
  "key2": "m33ECSmNzhHSEM9bR2vHoDuoxJxc8Ceyebs8yN8L5MVL9AcQ4HdtgaAqdzzjPZnuo8AB3Bab9XpJSVgrrnpo5MK",
  "key3": "s8QLbFAEtkte8bbo6CRJNmuo3EBUMBkwrjtJj2UVP9PVLe3vDCrU3Bax8ST4ZAxipyrMnESKCT9oDRtinNQjfYM",
  "key4": "4bQh1qZSJA99T8xtDpfxC6kD9aGazrBytRuazmCLsgv9cxt3c1pyxuPr6zYfSQ2gNj3Riazohrxhb1cQ5sZo62Sv",
  "key5": "27Ymhq8HWcQVfo2LQtG6YSiCiefc9BCTz2LyRqGyAgTLGrockzd7kvhrAFjdswg1ySnuNFpiiaDFiRjzZCXFJafs",
  "key6": "4k6FH1quef5UYgG5GJgawMcSHQCekDKfywiwYR2PHrUMJvgDyKCxN4Eod5RaL3pcDPgxePP2gjhEi6UWKjsEXb5Q",
  "key7": "3YL7RQU882BGa8Czzu75RjRR28gWaN2w7WkgXCBBPFSDbfMEnde259UT8SnrDeCPTwUY5TcAXkM9aYMZKFBfUhV8",
  "key8": "4GW232EAhVSt2eo4D6kdVeGjtqYdJtJSXPRCxkte39Qyu9Hi3A9TZ8KHSDusKaCHeRkjwczmdD6DzkWKeWrmKqW",
  "key9": "5t3gG9ePZ3ABk6LqRW7izxbYkQjzJa4sjG85yovnvPPsBanLjgtgnTcLVUWhpovuWs4ekvc6VknvGFwa4BYoLKPx",
  "key10": "xhWSSEimemDXhz8cwq5GrKysb7KhSiRa3Bp5phJyAUPjPb7dVbUf7pqiPCw5XsD7aLY4iQYXELuV7WTGksQksJz",
  "key11": "5iUzKNGUfS29qBFkxvapQLFW7tXWTqeZuD66wk18eXRmvw3Yzqxwr7KSJp6vdL7FMKCqdiCtFu474VeNuA9FdKDE",
  "key12": "4KQJZk9qq3s8c4Lxr5ddTc2d2x4aCU71arixyVXzMkx4cp8roimrMRZW3A4du54xnH1RXEjR7u26KC1f4GH8PhZJ",
  "key13": "GyY6te1hmDsDntptM8Lt9VSBwwxhTCzBo3m11Nxim6GbE2SUNoCKSZxK6ByVbKUKrwGhfzHAL5rHJCAB3jhT444",
  "key14": "2CorJph1vWCYrc4CbihdJxT8tgrSWFqwwXamuXSibSHB5woeiRfmehqJU8B3LHw3TidNBqdShVEbaULXYkLMt8iF",
  "key15": "59XEWb6oVXQgyxFKN4azVhDZhEmM6jLRivQHdn6mj6HCCr5H1ZPSN46iv8VwL5xBHYpr6J59MCRypfx7nmDivTCJ",
  "key16": "2xnine5FvV1um7LXp9Zq61rkYWmir8LqZig74gsugRVbFfm7mTUgwCtPY6RyAQcCjM4MoPvPr5SKHnXognMWUMSL",
  "key17": "2miaCgVtepNqeWows5tiEP6MLgzRfMrqVYxDukNZBpCXX3VsCkHYq9NpB8KpGnsaUJToLbkCoMDSzGdRBLjAsxLn",
  "key18": "3FhA9ASFwdEDMKsB7y4KSDDVjKiUWjnUGkMhuPm8RTQb2YqQafbh8RqNdpBqvbvVB1EDd3RhytEEVds8yjsoiA3f",
  "key19": "257gDvtTxjYTdNqZoVamgjzzc2rNLgsimnCv2ggzwdXQ7weh6ZGezcmPrck9jrG4VfVyUQ16GWEKQpfgQQHaTQHn",
  "key20": "3uufooUL98wGQxmZ9vMGNjM2UoB2dpWPs9mNmMmkPvNdoScwWVE8UgH7wJBuyoM8aQXxZNvTq7oRJAZZiRw5ordL",
  "key21": "5tFafLXMg68KNQ6ZMp6jDPJrMD6wYkyGhk1t7e1AZ6wLi8vcP1tNEgGFS3PoYxVjvRRQa3zt2QyH6EkA7dVnUqRu",
  "key22": "2RDiJy9R9evFe8W9oFikziYCzsgJV7agpjWqpDpp23VTyZ41x9VrSZz3yEaZhyqeTUTjn9AojApUn7KkdJ4c8E1B",
  "key23": "2dYiXpC5aRGUfWLsHPzSF9cmMDNZYpZcmFTT5B9dbKHtssRvC1hkuuKnrThJNmJjpiwirQuJPR8EHBbRyCKrvvXk",
  "key24": "27ZfTHTrMZSSeV3HjUpSadyq3km3wkyDXcpGHcJ96jh7pZ6pwrKCACezCh3Qr5YfwV5L6ABRE9PfzQbNqFT22STZ"
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
