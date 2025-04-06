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
    "4KVtT8pfkuo9kQp2s2K48id2WYAfabJp1gk9WAYr2uwDk1dVPqRcZEQ5R1BkxpyUBwW4kmmeRRWa5DDZot2Z9C4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XVi7MofhJReN84G6bbT4jEYc43gvt6fJJaoLK45itBedsYfCQT1RLcCtbHhyC1DAV2Pjo5Z5UqWuvxbBTMEKfkZ",
  "key1": "5ojrJuBySyW7dejuSqbaybPMgk4ZBiJFKdHEHMzhw8rdugmte8FpaqKhtT8exvqS8CoeUt9TMhugk9oHBoieoN8s",
  "key2": "5RYAdvPYUQa7t42dhuQvQHvunEpcmuQKx6s3wNQ2SmrbkQDqRCGkfgpjcaMM8XewyYqeAAFzsesEdKVkpSvXaKoA",
  "key3": "2ZVo9sPRgE96dTnH2EHoDHQinqauknDh9v4owxKUQxZQ33UA9RdfAts8ttPLkUokXHp9NnrhzAWkpVtjC2gSGi6u",
  "key4": "4UpU7f1ktrC29PHJYVWWJACZDuwr2kWfzKmWZfZLAKqsUqyTKNvnthJKPu13N4TERwdCd4Nbg6i9kMZB9rLrdw36",
  "key5": "2XZrMByvPqHgEEfJZSMko3RZvwfASDdDuNF3HmyBJbK2qotbFy8tzJ6PP6AZdJcq19RZsmsofDjfEMry9TZJHARn",
  "key6": "2XuFWzJBhXaWnbR5CbPKkwNpmE2GbDRB82y82bbHqfRDT6NDVXFvaid4ndkTQWEwdLRM5nuDgucw8K3YWiWaf5Lx",
  "key7": "2K2nrBmuBRwgJwzX1wFFHEy4ek1kVt9WsCEKaJbbnXYUWm4TnJdjiuKaNdUE9zT2UFj7ooPJZnuQZSATwaDtYKGV",
  "key8": "QMmoYX7ZUf3JPC3w2Dbe23bFXQ8JaHvt6D241owET9ybujcXLv3TE4wnwtR4b7VNjoV3JHP1dvLxkn6A9i91kRn",
  "key9": "5A5VWea4H3XJkExyZYBNmqL3CbPWo82njyYqfa4mJMqpy7B8YoDffxNSDsftzHXUx3xFFq6vC64kDCqRR788khAT",
  "key10": "3SL3KFy25MsKDMu5RAPYsh3Ss4E1YH8YZYPqG2kNskY5uqVhxfBFforYpD4oF1qQAumniaQ8LATwhNkSUrYKb4Y",
  "key11": "hGwmnuRQTvYbFAyyGUnHzLob8QZAiwSFsZbwS3HsrGZ4cBrHy3yyTZujTijf6YCyTguGvqe2FGqQPUy35fuPoZK",
  "key12": "5WEjU2bWmZF2epWNBdEh6Ndbnkdn7trdHmzBG4Ct7F8PnhM5KQmWWUio4JZxTCEQPHi5JdXMbzL7PW2R8PpbYxaA",
  "key13": "HPjQKw7Hp97aq5N6d6XgagkeFc8fVYw4Qprcb4ZmkVAtdD9oxG5j3RXbMf594MUdAo96a8TPpVGbAhaEqJHGsoJ",
  "key14": "yda7B9rppsDa1uhfQkmAi7Loy9aEKDzWF27rejXSPm4cecYQSVMftiPnqHbMs2wwVs3w3DZ6XdZpN53qQWcRPp9",
  "key15": "3giyqDhid92Csny8xZwrBEErBwRAdzZdT8T3fujAz8zjL2AUwL6RTkNfZoAg84FMMtHuzA9yrtYCMzPSLu8ouiQ8",
  "key16": "2ZgQUXqvkf2zUqBn5wszju5VXhse3BQecRjkoLjJXPmHfxMjTVEj1JpGwBtVZa5ePYCuBmk39Ge8bL4qQG2Eo1B9",
  "key17": "4eiGfEDnsULhJkmZeVHR3YkdjrewT2yMYCMuJbdAkdHSsGapbfizgEkZVa6Z8AFN6rtm3rs1rXcEXu3NxPSPTEWV",
  "key18": "2Bw5vcy165gH1XLYsR8oWu7dqLzDmrk7EhTcF3xqLfbP4njtgg1ihYFUPnPc78o3gv6WKW6J3M7DvYbvNveKi9Ue",
  "key19": "4h5PtNravwke7tpkciZPgB4zeMENhoobYXVr29APuQAqJ3db96dq3SHa2pVZJVaXLpDd4oDYVqvQdBAVpkBzwVmZ",
  "key20": "xfsBPn39ftgJ3K3AoDbAyfdhoh7f1iKruGVzYqe5GWQk6ddeJpwym4mus655HHuNtxfXHKHxGctvTuia9gKEGjd",
  "key21": "5YTSwa7e7kqwegVsPpqaTtJXBZdYCLBYPf8angw8FtnodSFprwxTMwh3xbLHF6xUpper4SbcPFukD6nERjRNWbZ5",
  "key22": "5XGvLENQb55znisoQkmfyNxUrdZtBYS3yEsvR2H196YEQ3JggY1NebRN6kAGN7NuSb2AtrwDRQT1BkEwCNTnTvZ5",
  "key23": "5jfG2Y24k6yMx7AhrXKsswV5gvzBVhhMAbH1FMyA6yAZ6DGdqYywCt3boYgVeJzFc2rG1zkG68AMztZW6UuLquuu",
  "key24": "4gLpTifPuNs17rYQjZcAK324p2AzcbfJygsDDJhv4xEeMx4aCFzub8tRurTm1UKEpCyF9KafVD7y37jr7qLgKs4",
  "key25": "3TYTFdgX5FMxoJsaDV9HSKtMMeKtKVnsnK2pPrqrXh2MKVshLA79PHqY8RbgEu5NzcqzhVzfYrSA9VfyPsTuH4if",
  "key26": "MGff1a3gSRgYkXE5UR9bv3eFRTqaBgdrggPCkhpfoK72D75TKVyo6K6grZeSC1xzyBa5Dp17otzBn4Q59u4yB8u",
  "key27": "CBahiNtmrwCzxMb6Ndx47VrvLoFnv9wtfXM21EnSaA1xAfwUtPDyuq9fxYeHwCAFNfzRj8hn5a8xRbjhtmYr6ff",
  "key28": "3hVBpRXP2e1R1YaZgFyjaSvbh57SJ78Q9dbkghmWopgfV2azD9bSuNgzqwisofoXg8xWMoVDUWgbpLBeLe1JfWJQ",
  "key29": "4RR1TYLGNBfzEVS4KyggbmVYrXfTFQwiRLFQtrkeFfQdUn4mzrcWE5ZnrmGANVXCs5RnpMoPeQvb3nB8SwJvoDdm",
  "key30": "VEyZbNeb6TWU8sevdtg6PeBoCeecvcTi7nijhSSfQuAaa6yGVeyYu5XBU9c1WsUuamWDNXbXVYXkYzmxzWjnvat"
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
