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
    "2E93viRXyYTucjNdbB8SonoqkH5Vt5YR7STATzrRosEUFFD9WYV2txG2nE64SGYaoBQ52ddxuvzNN9BGW8SKjcxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W5WuZSGsx3zbxzJKGDeFEXS2e3sAD6xDYnMrAuBTJSUxNhvGnkZGKKE2Sb6LtNAtBb4xfWVCnLNipbuBNLpag6Y",
  "key1": "5seomABhSoGyZWsfS3dANnthESSZ54XQpeYgaJd3FgSRPFmyqtrccawHPjPb5ZYW55UnXAcofX7dWBcd1NKkvzfT",
  "key2": "3rFEwNNy2frCSt9K2AvxBCs6bP9VJEvsYnpRTBbBJ9heUnHpEoREYh2oxvr4GZjnav6WA4Yw7yeUGbnpVRU7XsB7",
  "key3": "34v59BVn4gPfbt51osY8hppqZt2ecAu2BzHh55GdtU9qftZCaBmvSCRGmCQvrUdCV4rCwceoVGEmk6hVn6eNaq6z",
  "key4": "2W6hphcQUoTdvQJ6V1hQQFjHg2FSw42P98xuNjeNetjQek7qejfiVvQSSa9XHSrzDv3TUBbj66885MxciyhzG9ev",
  "key5": "4wuGtT6PRrvh48CgaVXHfnqWV6xaaa34c8HXDctBMxy6s5pvTRyByYzHmgXDhJ7PFpDajz2H2WT2vippHaJuwauX",
  "key6": "5PNAh1DzpJckySFRvQdzcM5z6h1Yv46c645kxbyZJoN2yGAMUcuoiUvzyrctZKGhEJik7BnBoRjTtb9cMpZXFPcx",
  "key7": "5b2mestZvZLue8magUQqg5i5eXR5NGzgPcW47Hr4X4h41Rz14M62NsD5cogxEkRwznAMz5vect7KfiqoSX4FkFfZ",
  "key8": "3wUdTxiHDKEhD2wJ2NqbTFJXE9AT528NUB2BaNLJ3FnbR5gsnR8cdwvDaxUoUZeFo2RKpgdwnJtS5YqQoTTeidx2",
  "key9": "5gVTGfLQ5JK9rpSBKsqiVNXm9qhBcZVMBk4zAWkp7VkhDjuJu7R7LC6gJqLT2wMKYasdveQXEjpgHmMn8cjLEJE9",
  "key10": "4C9NunPriCR554eyio7d3RH3CgayJAGmEHNgBd2dNXtrmHwz3zJu7KVWCLbyosi54eRpM5cQQGpsofbJF16AQRkZ",
  "key11": "4khQTnyqYa7ErzrURnwtsJryVCa7duwPJkctoJjtywP7GuRq7Lztngzf2FL7qiCGo3RXs1GwsJUsqBehkqHtTLRK",
  "key12": "5Lxyyx4HdeuTzzGaFJ4dMnMDepsXxG1o4vqD8SYrXhUzs3rbK5SgsmUc93pxZHr5epzsXD1XmuVYjSfmNPakrcp8",
  "key13": "5Jje9fRohDhZL1Qs72gpUX4PjLenu7Ry7CTug8LEip78a9HYfvkg7isbTdDavSuwpuVVxB4fEhAba59uXHoZcjRw",
  "key14": "EJjoTdJXnqVcC7ZcDk3gZmc2R3cQ7eLXp8AK2mq6PN87GEcGgZLymof3aEbGPMe8rLRX63gb84YRRHoR8J3z1co",
  "key15": "3vQqSFWsEVeXKP66NsYTf1steEwipaxjDbN78GyFNptVCtBBNVeQKeofe1HcDd31Ju5mGntUrGo7zXWy1NQRAcZ7",
  "key16": "qJhQDmPLp4TV6H1oSe7L1gXZk1N8fBrGtmnq51ezZofP7jhkCaDNgYKCf68wtxXWoGJcL8bHrxyTUWU6UEJeuxr",
  "key17": "32tQAHSG4oKjWqN12ZwfhewhX6fBXkrsPZHbYWbGTgM1K4bGQqH5PDfWvEw7LRFKH8bjcS9EAAPZ3MdYfEmsos1h",
  "key18": "2Gk3C9y1y3wGwnWi71i8UyFkMSV2HtAfGo7T62jvqftHSkNyEQQQfDv56dEh4nzBzrf7SpbT3d1me4wyvzn9R28c",
  "key19": "5ywKxqXUJyxUKM3xHUrAzTDBbxdiLDVxAGpkfS8mho4S9SRJii85s8LFFp4ZePz29V74eRtNB92SoZ8EggmmZCYj",
  "key20": "2vzcE1jD8dwpoJGjKZsNMoNSNf8zgftDAyA1TAESY22PSHDynanAreJXBERMfzkD6o65hG39aiDMBjAMyQVe6qUw",
  "key21": "KWNqmNa4pPRMwFNS8mY9Jm5rSe4wcApAZKsxHSBssHNbomoTdAqajR3nFw56EQUoQhgEQfzCgnrFekVvr8Lyo24",
  "key22": "65GqGL7qGbeHUNmXzXjHRUMyTjPdURwtYzvQMzq4TEtKYBPXke4NHUMMZvqScKU7NEmMqUUpb1EpbbkNTdWPd973",
  "key23": "257tmXmK9SkaJYfmsu6EmohGpbuHMtwh6jm4u7CoDdypC1ZZZu3wSqr9aj2JAspgr11Yz7STnkYa2EDn2pLRYTZt",
  "key24": "UquYAg4YVFdJ7q9JMfNk6R5WtVaL8cmUPfMRsABQu4DubUyc96zt2RjnsfeBPELtiGqBUNpzEYbxnUUCuqjVG9i",
  "key25": "5LEwoCWMVfCAkXC7v8SCtNP7fhFETxJx4Yt6TwrQGYv7E4bd6KNHJJbaqGoQcm7Tn7Jt2kZsxzdEm1kbFM8Fsjxx",
  "key26": "FgxwtojmcZNwjVQZpBc2gyY8KL7PVQgYezgpCgHDs4yNoh3UpjXiude3j1wFZMKAeT51RMChbfLctDpi3Lj1mBz",
  "key27": "2LxrRaFwgygGkx4Xbqc3GuvtQpEvXAnD1tv7vtEzA6kjGXr1o18WaUovGac9M8MZcHCsV2HHpYsnEFRHN1mpyW1F",
  "key28": "rSGHUYU2KQXhZKV2feHArxyY9XTbzHZ2k5exH69BJQEEYXynFnnxj2GnC7E4rmpoBTYR28JGQLu1rKGDe8AAqFY",
  "key29": "3QnrChLu7puzJzttQfN9ZoRddrEot34hj4nCexZ1sVvWFEacSiNexc6cVDfRDytpGdB9Z2Aoo67mACdMhQ686huT",
  "key30": "4UwME9a7JmsnkcMEbupHSYiBRcqKF6PY11ajpzMHoyj6PbnmwGHjcLwtJzmPEAbrUu1YdfspdwCJZSmeVj1L5Gg5",
  "key31": "4o6LMULMqHKu9ofG7WBPijEptesEaGaJsZz83vfBfQbZUtQubnpmP4DncjUTHp4UNonJLxQJDaHgbFsfhKCKbWoc",
  "key32": "KurjF1qQmuQ315xDQtRGywuGtkQMbgFrRVLfycDqcXLsgGHGBuNH1QRY6vZ6tYwa75kjqMtfFJpr8SiJAN9U1m9",
  "key33": "3pJ2G2fMUTMZcG8DPKxG8Th9PobjPd37T7oTRiuZ7FF5g1HavcCMbZ7KiBSFmPpdJqgyo1RBFS9BfPyMh2wZBxM3",
  "key34": "4HgoAodyJsUGy3hjDz9T2tuDiuYscugFySdi5HY6ELzmnr7Eg1M1uSnrJSnCLVSHJ2huZuAAhAvpSmMEauwxyF1J",
  "key35": "nyYLz5jvS8iCeAbN3icQA94x9r8oKBQjkYyf7hcuSwR25tYYg1a8MpoPJBu2jLbpvu1TxiqPwNC946Hz6D1gykr",
  "key36": "2YW6t2fPDVbt8kdX3jeZCMQaZSQVyXcg1BwJectrs8jcqYFeyYLeQ6igRWoLfmwB5UzyRiC7Hn8Xks81j1KQh27R",
  "key37": "5Y1u4dYKUsPiekJzSFcvUrr4CAn9xCQRp7hUwoCX5XnKuCv7w8gXqVZk94xZUEvKtewstpqXCqwsve8LgNqbVBYq"
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
