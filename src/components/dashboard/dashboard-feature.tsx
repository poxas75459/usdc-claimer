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
    "4E9cHLDUfBEauce4vaXkFM8tSK9WY1VABdDbzVJF8u2ty3HZVEGyQUgh8Dqw38F9DNBdjiUobHMS4XJv9krX3HQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQ7iavgGYiza5KkoGiqJXJSj3vB6kQo6sc98eAFKAcN6FLBxo3vHtgfpdwAJSK2EjJyzbxy8yiMQw9BuvVMKd7o",
  "key1": "5sCELGgRpq8dvYgfF38N84K5mhUGS7yptHXjWfhpikA1MkhsKhW4vpkHXC8Yc5RwExERDev7SjHkVKx8C6nUdsLg",
  "key2": "5PsQmEdN9Wf48Xi7dmptEwzoVAkm8A6wBWhyibgc8MN37dDQNfKBZ2d6hRFtAanhe65Tjk6T3aMG6VCVBCNzKzbx",
  "key3": "4KHkfqWjD24MEcxzmucU8cm4pH4Y1VkYHxrrrvVZGv1KUcJsua1F9Ew3Qp4j8AKMuJ3tooYPxj1v3ooKUbeEaaBp",
  "key4": "2QiXvMtLhQ9pCwZkBbC5MRQZ1n47pk7n6X1XQDuANZpkWE5n9To1qDww7MysD4LsVt6GvwKGmrwRBvdSouSNfuCW",
  "key5": "2wyaUQ3vAgU164BxjnkW7zDf6iT8uQWhvE5PvGqTmqaKUpHdaztYaJiPHpHveNedh3uRYPZjWDwXSyBSJ6kUJKfY",
  "key6": "67ndiaPLkqfo1drr67ikH7n3rijjVn85TwB8e3bU6BzbruL9PaLy6kE5brgaoVEaQaG8rCgnbbh7H7uKgoGv1xhm",
  "key7": "5uaxaxPDwcmfjbmnoSYbLFY4wPKjEjM9ksqjYbPYZkmJqH4kTuRvQdiqdrBbgqeafAmqLWusGSeNpbFTgGuVfDmm",
  "key8": "34urDSD7SzBgfdc8aotR4QekHB5dn88uQFiaAHoJvXXihcJD8aNP7ipgXsttB5rur44S4rUcNyLq7VgY9dRVxtFi",
  "key9": "5Gq6hg7z4DmVtZd8WfXsvUvDgguvYiLQ6WmeW8paosFcrrPYAiDkFhQwvPpgsVzbWTMi4wdGhLkTBSQdjsbeDrxZ",
  "key10": "61eHXFNjYxNBphpXdREB56nv7tEpCWkXx79eM1RJZb2z33aUpF1kGvQjLeW1FAeS9wR1EJ8Q1dGQ6v4A9o8ATsbW",
  "key11": "4v6SnwtoY3i5bc2bRDgxKkpmk1qYGTqrMgRxXxSi7QuRunvFY4r7VBSKHAbFuW3yYcYycE8erbEsuPaf3RHbF7sy",
  "key12": "4MHmAGpdj1QT61YMfmbfKGxdEeXxZia43GUhMc5eKX7xSNkAgGY8PMJhas1rsaqkaufJNZM59582BSWcHnVVwyon",
  "key13": "55SGM2bu8HGNUWK7FoqX8MnAUNzaCcFcrUnAtDK5AAc6TxbEE5NM1aQgP3AmDUfUby1aoT9QHF92P9RB9FYbo8FU",
  "key14": "NT2u4aAMExxD9t2VULxdxfbfTkaV1L42UXNgT2dnSfmGtkGeRgqp6Q1k5p58ovu6uDvaxrL84Zf9TP7ADsZSzjh",
  "key15": "4JM2NJXhQJFyWVVuFAEpAC1QQAYg4mDxqo3PRGfLyA2VuRPPfidqSVEVoek6bPavLF7NV5syZNi2XnT6zocqc6ZB",
  "key16": "5RWfNhtTUkgyAM56fkQgSEAjxFQBT6A4pRTGfb7rwJg4f5rcbjj5QnCdfGPRwEKWATGEjiDA8cDJT6Ropr1c6Wpp",
  "key17": "35FXyrLRLAYVoBegq4tN6n87qnX6HDmUnpSos1i69MNCkDqVL8vHAttWcw5mDtGCsaghAzBLRhTaGMVRCdhEtZNh",
  "key18": "4Ttjy8xw47C5Di3XpavjGytUBWqNsQkcPD1HXZu77hFhZMGKqa5mqW9kzvhcyu39URNfAryZdDtn65hCVSSymPKf",
  "key19": "2i3rpPTtF7hpXqNJg18FXL8Y8cHZHizhVh3WQA6xpXtpsK6QYN7kPGyuJKdjewzt9Q17ZyfWpA9D4MS9CqMXVaA2",
  "key20": "5KgkGXsNo4qqm3EQYC4ZYEh75Ykwm3HWfex6UnnQU39qMnCtDj1T1ZhPPHQF8HmmK98nc39PZUFo9UwMUyHz5LsN",
  "key21": "4TiQVMiRPhL87q8YvW8sqqBEJKLxLo8e5WLTs2uyqByD7J2NVPxcdnGrhoCwxBPSPk5Wmd23GvHAYhvvmAb9JHhe",
  "key22": "5GVRzraztNkNQJE7e3faWL8q6MZU8JVyzRpQ4ujwqo2NnrVSCAcCNouWq1b581WYUPHzjx13bVWAo2KTjaAzorVf",
  "key23": "46EtfPpkT6vy1KK2ngyF24zTAJGARUzEaxbs2Sp53368DfFaszQQwjUwpFpyZs9nG2JihmQdvq9QCwnCfopyLRLn",
  "key24": "5UokkKkodBxVdjoniV8Gsm8emZBUAr6zgKbzv6A2b22yRPNeSP7fdVPcpQrU1r2nzoZeSG7wJQRisdt3CtLxzmJT",
  "key25": "3bN8pUW215CqeJ6J6B9BKrVpe49VwBqQ1XXj2XqztW4enfpRs16ujkrDdbZMTbcHXxaperjYusfnnZLyszERV1q4",
  "key26": "2wfCm5wzHn5R14ABBeG8phV4Kf5hKXHiAkEFLZCQ2F2BksbKT2EYYUfQzMUJtTUhWQbrYXuH8LNsBa5fdzdxNofk",
  "key27": "46T9YF6rNNAfXgCjscwRwWz8gkGhXHCW6wq4mH6pFK5T2C2MQ3rCZjgEfDdKRCvAa6V2e4xbpoaLuRGYP6mWouEN",
  "key28": "2e4HfH3S8uzjE3ycb5Gg7W5BDhx5He9bSyYfPPNxfmKB3kheQX67tD8opB4b8R4GY58RexCWYkjYvUcGmuC4hk47",
  "key29": "3Lp57RTiFWhr22JqQoRAYzadUUQspTbadWGyNgfKovXnmZReq9UBUFKPAFvVYkKjBt3uxSkVcGhvzew6ZTQJgLrw",
  "key30": "5W4WJqipdyTT9YB3jJh9H1peUQ7YhxdPvDWoXejyBS4SaJyCS6SDNgwNpYub3EubUcbrm1MdbyDm4spFpqLdtdht",
  "key31": "63P7cGzf9UgvnVd4Vcqz6m75PLrEC4W8J6BFnLpmsKbsXiaTsTUjXXuvUxiBZCJ3fJXgKKJ6agE5Fyp18FN3d8M3",
  "key32": "5zQKnD8bK2iEC8ij62c7kb5whvwtyyYZFMT2DFjPFHg6uPcEYPPxSyX1WDbsWwDK72m1BrKQjSY6iTSWoynKyfVk",
  "key33": "mehvqpEA8fxixUh8ym49fTFYziZGvUfpWX9scvcrPcsD6JohJjWj33m44XhdAJMKtiaHz7aEiwv4UtzCb4gyVBQ"
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
