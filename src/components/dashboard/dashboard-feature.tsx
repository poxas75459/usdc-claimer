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
    "5haPYqAAv7HzCibTwvse6isY4jjWCtktbQg8rsQUb6RbsESCYc9q7qQ9Cy4Q2wfmWECi6WEKQMiW5QJGJbRbYHnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cWXfiuYeRQggiC3oCjgh3PTZ55tNDZm5v8KVrGEbCStxfHuoe4fweuLdGMo2DZ2GTGvnBufZ2v5DwQ8NVRVnPK",
  "key1": "32BGGFicxYXtn94ZXkP6q6QGhVaw2KoxLU1dirsiv9UKt4usNKF2qN5RLS49yYirGgbSQusJ8gyZFew9TMWnWhfq",
  "key2": "23aQW2ypBvYA7wASGXyRCKaLbGbpoSxiqD1g1DwC74sn363D8nb6CTExwwDZ6U9hELnH93maAAWFKwJ6Cu2yrWjV",
  "key3": "2Yb9xPTnqTLvHNUZrDrUsGaMcL5z8fNQ7nGa8WnjQFxUGVXN5Cq7bebT1ysg7TQZAsdxAdzrUVAA76sfw16vyv1Q",
  "key4": "3HSR8w2rcYfDGdksQ8umUwuLzZtmtz9KjexygaYksAuyAhhZhSvsLc7QV7hh7unxePKZesasenssAMTUkiQHmNZv",
  "key5": "4d25F6TARQgERLA3PoowdPweJU69nF1pjEhCgDt9HQ8mMKx53UEupr3YyXBkBZxKCAKvnjjhS6op8WXW3tJLwHhK",
  "key6": "3ehxyCHYQ6et85fMxdMb7RbCR8536QAwe4fUaKqTSY73qqLmbiaZpQZmVtaKAmMgbaWN3a7BZhJTHq8zSz5f1vo9",
  "key7": "3CfuLfzr6dDT2aLMjViWPL2nmVR3YPVqMnPE3RrsUNqbJwXb1shsQzJwNiYRunodkaP92ssf39tZsnPg98jpbDy8",
  "key8": "mpvSDR4z6VRTP2RsNjLvpx2pjNCtoNJvH9v1ERgW8MkLYp3fQKsnHPDbH6XzwX2dwwuWsQ8ic51JRuN6jWPsyaz",
  "key9": "5VqKuB4eaZjcra9BTJLmzQiAjWj41UAcvSwpr4RBEWLVS27sZYMcF7nUPavbTvjbfaJaD3Cd9MvTGj6DyPq82unq",
  "key10": "5v9j26aFv4Eb8AYiKvKo3q3aEHZJRSVJoGhjD5sitNCHPmB3M59owvsYbKPRnQ1odrQKwVaCXWRiD4P2W2TRzVoE",
  "key11": "5yYanWbTwKTizCkMxgGbB7PLSKrowCiqaiHeFnhcyv2pfP8qBQFL9SJE6JKnTvwYhs1nW4TFdL2bwMtqQiFPaWrN",
  "key12": "294eW6EEv8eqgwn58o9JHXNUnTzUFU7FnhX9BcvhNJ1ZtV4NYcogsc99Yy3GRcuTm3ssQ18DbpvkX14vv8pkRGX3",
  "key13": "4q4eNHv3iw5Z7idCUicm5u8E7jZc3qPgAdfYjSsbKzH6wxnEMViDT2hL7ZAj8FNvGaPD1mnqW66pSdeUGNacAXvn",
  "key14": "5woHwc76tqfimot1pZykupbX6feKMBmwKivnxzCHT5i9x2wkZ8USww3tSv7i6sEzyuf4NzjkA8n3nXK7KJSsSsUQ",
  "key15": "4EXkBeeNsdV6ygovVKQRwSGRVnN7cnTHH9bFJZnB9gKuXJKjjyWJEaoAraerMxH5nAF8n1ZpZJ1WWhtBDiyvGVWs",
  "key16": "5tdvX2rFzRCZc5e1pDQCNt9fmreHd2FLgrwoJBrvwqVAY9xs47LWjemzyPpokcXWp4KXW8JaaDWBobDVe4MAjSL",
  "key17": "23vSqBtY1i8Zj7iXvoYiVVunKViC3D1eBWEPxncTpNvmutGNeT5GsW5QuMqk7JJHsaNAjGNSipPtM4bwDutACjWm",
  "key18": "3rHXDVey9wMe5EgkfdVcBQUHzLa5KV7RDHMZFhgQe7M19SYduPWwTk6ey2zki8HzmvcjwuKax1bbigU87X23eQgd",
  "key19": "3PBN4Fg1gjx1XABhC8qBsdGE6moxyx56EQLKA7uLsKW73AScJswdKqx4ZsTP9nwRyYbexXifUqUzGbrUS758Qv5G",
  "key20": "Zkaefgtpp5SS7rGPdjPqFTmj3k85RB2A5PTzHBrzpxf5gev3VbZBmDNwFk1oEJzDEvWFvLXLHyPsiviD4d7jeY1",
  "key21": "nvbSfyDooR9LHL1N9TL9hRThBbpBa2pAKWuzxBRpr1bodyoTXs9Uk4kgJ9kKtiZw1dbcySmVoL5T5Z5Kki4hWkC",
  "key22": "2jWvvxJKc7xfwEYkD4V2numvpo1eQbt9Lf43EQUeD3bmPspQhKETuBd8ZcGY3rh4fAUXfRQoz6CMn4xAAY7JUU7d",
  "key23": "7MqH7dgEVVhP4LPqu5ZN3s2ZSxWnxUpgrAxibxxm6tMpbHSe985ogQ93SCRFH9vZ3TAm2CQQHDQR4zXCNhhsMMt",
  "key24": "3Ut85XSgi3CDZ55JpDbxAKBJVb1CRqTf9b1sDt4xsXhuBGS2tW8ifkrds33iTjoS68TnDKgjuqb9asS7V5SESMAP",
  "key25": "2DXeVgu1CuJkxzAmSsk7oY6KiGWV3pPTpYChneSJPYTckPAMDpwYSS6H9MKSpAgswMfcQPg2RtHVru1oav9kxj5T",
  "key26": "4qA4vhCmwfxN4kveLY6Mb2B3LukarBke46GQkcWmdekPZe21ERBWoR5gLj9tSFa2vqLawvcbJZVjg4cJq799XL4a",
  "key27": "2NUZixqgSwzdZXrHpifr4M1KE5oQn5mhTz4jrRDqzqHF7CbqpFzFF96ibkBrpSHJkEQaWWwQA4ZfrjjXqkktNPCa",
  "key28": "2RejxdjV2ase9GkNthsMHdF7uf25zZjNV1MBjgbd48nuzMgY7vFoPLNRKtFKYEm7tDCXq78VWgz1CkLW8QTw1jmh",
  "key29": "4UqYFkjkXMpRuQrNpUmgNp5wCr2GouoNcM6CBKvhGDwwZDvUuKpqRgvePwab938ZS7fPAGN42boWe1SqEeqhRcGK",
  "key30": "4Vg8EvAee1jdAeoXeyCotdEvK9bvVz9N7P3RL2X49FnhsP65st5BKLpL3G2ueRi4zD1A22KdpLyZSAJdQjv8kiwf"
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
