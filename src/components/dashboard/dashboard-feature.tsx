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
    "5imupAaUGkqkXUVGw3Cp4nywXCjAkrScynpVYD5HoL2ktCqMLsnqKoCFyrY3Zi3Xt7cahSqqoNMwc7zswLG5JKnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9D6GmFCvSkdqAgWYzaC2zpcY6DuGZ3MkmKjusswDqyF4kEUS81DeESNfcPjPs6RpHwFaaaYKoaEjkj3xeFbLEh",
  "key1": "4iv8M8YHR993invTcL2Q7n96GA2BJML4vm8QznWfkogtcywm95DERqNbPxH9Jjzr4i2bE4U66Ad8qaxfQuUMLvSU",
  "key2": "62g4bNjPvaG69KHadz9uHpJRm8tmnDvAyccpGZ9Szou7Fhbvq4H9NLofMCqkMWpPWhJhgnDtH3f2Us6siYBtF7uk",
  "key3": "3sD8Sbd8HBp95UTK7rD7GQ9EDCw5ACTG6Jyg1dKqSZACm9gt3X4m5EhsWQHRyfypfYEbQ26gmWEDjVfDaqJXJkcJ",
  "key4": "4YYTGZR5bJwS7jUH7D7VfdBnzfVdEss4ciriTxur4cuzkgAWHVqYedruryUAaDb9tcGiFap5vdCFR8BYbeWbZGUu",
  "key5": "5oCHnX2AXti1w8BAazrupCvFJcCdkFY3dpnixnm7Bz3aQun9fQVM3k3pTboUwykYWyxx1mRsWvpVm5mTS2PFFHgp",
  "key6": "2djaVeSGjVL63d69uLzFfPMZ6LbmLuEWzTLcpWghR6VFsXw7W3JrZov57AYBNM4qadCUrwPxoFuLsY74zM6LW4Fq",
  "key7": "47E3W44T3m9oidztwHCVj2zsgKwbm3yWyfDoNjqEGADsvLVHtNKbKftMPsjdenNTKbp7M5UcenzS1Q3JaCcFQjQ9",
  "key8": "3YntxqzJ7huvgnPQHBBvkT1VH5SrvocwVhgr7JzyPdczBmoJzi7wgyH12k3b25ARuStg5eHujVUMEW6aLjWmRwQq",
  "key9": "2AxH1jJQNTnNaV4q8H7ze517taFcnEZpN8FKKt1JYQJBcjfJkN26rV1ojGeLzKj1sDue1wbKpMQGjtdCSVM33JM9",
  "key10": "55CTcuBhS9fUd5jADDpkpwZM8kHKdcGAjLQdAm9Ui48ffwWQ86Nnu7arM5G2EZXYwwVWn8Tsgd2HTtt6JNALq79L",
  "key11": "4D7hcogNc9bJTZKZxhsLLgHvRxUC4wTqWKgfZ2QRDQ9a931yepbs3J8Fva6L5Y7X95TfFn2AU7Y3bG5d8BkjGFCU",
  "key12": "5qA5jqq4Mo37LJz52WFjTngQA8dYFG4UvaQQvZHnGdAkJxmYvkd8nG5kzD4ruZah17CdB7yqMNLMSEFhnzXM5pci",
  "key13": "6exBAwZWbtvWZKYCf2pr3U8RVQd1SpP81n62ufTZpwXmgWgpZUBcgrXeicbyHYnZw7gqanSfS3K8tuYnNowQExT",
  "key14": "2r8C5iEwwTQcbMoSzL5L6GSJEi9TK2AVHi5J1QVWT5iAb5nJ2JjCGRV6qSAuhwW2uZuu2svkMrh24BnpPBcKMXzM",
  "key15": "5x3yXeC7kmWMkLm1ynr8jcfCjkKRM1YgCcsa3vHUHy4TmY55tGK2m9w1XbN7FMqWfmGP6yULPo7wKDQHNATw9BCb",
  "key16": "4EzeUMJ9Vzfm5MiGisYTZtvKXQGsjxrKVfxfCAgcDjP46bGX1srkqp4gjdPKxu7H2eHUZoHzxphkjTEmN6sv32V9",
  "key17": "etD6ogkcyLpLWXzA31gcLAjvJ9d5pakwfGVWLVnxa5aHtvp4rKz43SP94ag5B2iaGkgxAadVjppwd4kHNJYYgTj",
  "key18": "5ge3bNd49FsdUyVg5iKsyT58rPV1wgbaPbk4WvVaQiRucfTh9CjA8uPh4SNk3m2rssS1HM7hxfPh3aMBjN9QG5ey",
  "key19": "2t5sY1k8MHGuEe7Y2NW6iQ5d5Ad3uKGB4tkvXV5Sbq9QEfGDwcB57Bw8KxXB9PgmNp9fLPBv9rCeaAWAkzhgRvSh",
  "key20": "63pmZZuWcgG3c5xmLdpBNdZvDtzh3sbRgPYZHDg4bcahL6GK1AfoEpk7JjuLmsCkMDWKvcMTNaDj3DmpwUnNbQFz",
  "key21": "x8qRspFNNK6xrrKDWNAu4BtZFQZcLjzx85uD3CrGkUyGB25DCYQdEjTQkcrZVvGuf1juozwixb6EkkJh9oL8TYz",
  "key22": "3HJSDDRNr2ULBcQCNxrJt2gDjavmQykzApqkmdWaPoNF7YxypXgSLAACsD8Lat2Vv2LpqBWEp4K4ExJgKK3ajN9j",
  "key23": "3uASNRQP7ce9snxQh2JKWW8BW9FpNNwBzFuhgQxyb8TCa9Ptv9R2tz6s8abpifRNNkVGHfijDmT2McmuCukRanGZ",
  "key24": "56koRHu1wkiXCEkJJYFn51xxBEW6n7H7msxeiLAsM38mtCnomFTtAHztN9cdJzq5aPZmtfuvhJk4mxDYJbyoBg8m",
  "key25": "63oTzvZVKKXnX5JzzHrA88pWthyS97LsiKxVR3gwQtMFoPk8UtsUZ9LBYNBjXKpgCNv5AkUSMHJreZBVuWDBM2uq",
  "key26": "3SSBg7LVpPYSW8RQ2d1mMR7AdD5x6DoquyBGj5R1hHxdqjVVhuYepuSGEpzbQnWW5GG8oxYzyXRRdLAZfwMTiHzV"
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
