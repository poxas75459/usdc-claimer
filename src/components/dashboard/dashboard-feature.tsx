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
    "5fJum1K5t1YTMCdkP57rhX6Wek2pcTScLAHypsdGFeHMmANPWysJgT8st3sVHNyYxjJybdkp6YUY6hmYUyrRAm4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctFGCGHuLsRLfTS7pNPXYAmcPHriabg5F9zaGKyZE67QQsGBE8gTfiDn7Xk1SicftEk9QvzS7XgXX7HZWH41CVr",
  "key1": "475oo5xix8BNbN5hkqKmkqQByUZbTW1JbLpWxwHaLqrAmm5cktBfwSZ7HRQSYTZy3RC2A2YYRbs3wvVSM44uB3U7",
  "key2": "2hLd5bJM66kTN65BDrTz8Jagq3caKweaGiU6Yp9v9Jqms5TM67xuEHFxnJUZv16cQ5B8ZURCiH76RrsYW76sqrt",
  "key3": "5hEPhmC1E85CVXKTpwdr1MtNiAt6yMbUMUjDHHdYCsT8E2uuZm3wLEiKNvVMxy69Pi59xPPbH1tsemvJdZknrgAy",
  "key4": "PqN8URq3j1t1dVSd2HC11SyMjdKfbBXBDkHX1xFFXjbWyY4nrr2YfhBckwjCjKBHEgrDqiX7j8C4eDVhRZwBCC2",
  "key5": "4wWesXWtjG3b3fBYKK33oZDA3YuoR5nLcuNjwbqLr8Nc9fyCsJqRgoYerE2azk1FyWR8MitE74yFDtsbngHwwhKw",
  "key6": "5V8qG1pQfTRji4LsS1thbhcjgJQBkfrAF5fxggxKdN7cszstyp1UEJy387LWaqRM3e7VhSuozA2M6EHSm3ooE1Q4",
  "key7": "4Lzk4eizw7YKdBxiUAX5mAVHaWNfnWQCrmjcRV3zL6ri6R1soaRGBWrHBwT8nr6dWywHiYB3tuRedRcNx5AJUPwR",
  "key8": "3jx1RSyDPy4yw4JuNL3WMPmz3ADtsRit7ofCT2YkqTEXKm7Za7dvnMZuSjKFUfuB8UCCBWVctBXZDdWmSqnv73d",
  "key9": "67jMk7qZRajKpTBgNHYwJdgjpWWVDWj9XX5gf9hk572qQEkoNHuQvNosqWPzQkp79SQhR9jpwyqtCUGmFDqxKq8c",
  "key10": "5LrrPHngFwipowy9EdHMTFCoFhk5r166Nwwn42RVaHBQH3Cxyhjm2LtV7a5bTBwifREeupdmaGKwYMipw6426qJC",
  "key11": "4Ewn9nxj4ZpW8fiPR6K11dJTvTx5rMnQ23kfy12hiyc7LVo1iNDsL63Szx1L6HDzLveM4GgQ1DYoxD6MibFLstqL",
  "key12": "4o1ZtVVzM8DRVPapUwJAdC981Y1tLpVQgJEG89ST9N7ZL46VPYcA1amS3eUQWs6DuaWqHytRBeCQxSNZ7vYXrvXf",
  "key13": "2Vz9vtNcEbeXx564tYcPstxg58rhaXjQTcnxNzA4RsYMQ6yBo9YLYkAESYtce2nWPe4BHhgh3o5fweGp2wEMKiRB",
  "key14": "27GmFuenKnBrhowfLzh12YQu5KxZKMuVBSzR43jTQ5YaCan5wdo22mMZ8YQ77n6q9ibWn7u3YTyTsxwE4Cryy6DC",
  "key15": "2zHDPRUFJbss1Y6Rjp8BKBytPh3m4HFmDqN8yiZVcLxvNMifNvd4JTxWyn4DbgtJKjqV5TBiZnNyaGDBqrauNYLQ",
  "key16": "62JPF7BzMFTLCof6x9bphHXAvMiB4BAXL9ymi3esvY3EZxbLF71eeuoRzzJ6bQPYAFnokuWytf1DK5ZJ85cqbC7c",
  "key17": "4f587GMeSGT2xLjj3Q5qrASg76tUqchQaRU58joDeVPJwRPA58hJzqP9A1RLvjnsffdh3Gati59UEZoxzwcaELTC",
  "key18": "5mn7GoUr9x9VmWswQqEtXGvnfxvLCEv2vn2M5DunW6kVdDFbwFuKzisWvnB91hiu5zR5uvbZhzihrTJ8ojvLhG1c",
  "key19": "3XaRheb7ZZfJGi5mZZPtNwVqMKzLNoemfPZZvJVSnFs6JiVnHF21iLYk28KhdffDSAmAtLvDnJdi9qGqYB2FbU6v",
  "key20": "3WyqCZsogonrkB4dmBAdYiHd4f5kMt9VHPETwLGFsfRZzRFEvYEgF2zt4ZRXBbwY9FoaCJdvDNELg4RwsehUkKzz",
  "key21": "xuoG4wzhDEnA6vCukhvYfFPp12BBrugPjCJUSvfh2h4NjpJwp74KohDmRod2jENbJ52gpY7i1yic5wZv5WiRszv",
  "key22": "3qz4wPLweTqVfBQog5M6LL8vL3nE5aMJRkCsZ2zSsYf2beV3vAJmwA7Tia45MBVLs7nQzJtvV8LqkawXvzpNvXMJ",
  "key23": "28yCo6846zmmbu8NofhE1Nmy58FusSmoUQMXikn7TC47ErDdZYEVo1oWQfEnfqae4j4QmpuoTZHifUCqis19w94J",
  "key24": "2tw196yb1SmirUMXBigSqiMHJoNK3ohmd1f59fo7LTSMfLQfhG3abjQa5mRXXiQXrJM23xtDNvkAJAVxuxH6jms2",
  "key25": "2KUgUwy5LJuB9o2dj8QABWtdUxFkAxUw3Qu4TGZMQv1jum8daAztssCYEkHDLD8fwa3X5ANYYqmoKVxT4isNqbhV",
  "key26": "F8Co33eEeYzmxQmPeTJAKcdQvpFhFSxL35eTsgKkHTxMCPuTUN8qM7zRbLB4Q7nVrBzeK6BPZKUn31oyKg32E7Z",
  "key27": "5Jbi7AwhXTuuHDEU4GuhN2xpMQ2GKnLFKsjo999pVfUk2L3vbUetoCDfmwdu7wfG5nS8SFzzqwfiiMkFSz3m7VYh"
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
