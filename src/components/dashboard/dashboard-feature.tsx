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
    "2QmxvhuDpjMQyKkFHmtPdWSepBhQfDfGCgHiSto2edeKpAz8gVFstNmF5iNAkJ1rBkSFwrcFxpw5tWkRJCPEZ7xJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSg5iFgK5V4KGufwM32QKnvG3JYNdC8Gc74CEk8uYsCYuXn17549FEPDUi6Mg62bZHFojZjEZjgwxNF5kGqLbap",
  "key1": "H2JyeqU5QT9HbHCLt7nnmB18QPZJnCuxHTPBvnyGGQRqVpuTJXeZkj6bjNpSJRr3B687YE2AEjPyhdCZvPpWmWF",
  "key2": "pE9m8M4EmR8DvZXC47ENcfW9ime8tCKBisqanFCaUoaHJTUHDC12m7MgqDFTjyG26f2CQmAf1zSMXAmmS431QZz",
  "key3": "5gsA3a8DoBtXX9yseHaZMfhJ9gRk1WBwgcDJeRVrWfnnBJZrFsubxceiAkJbjBB5AgDoTyPX1rAb3QwcNowbfAok",
  "key4": "7G4AEayvSA5kQooqPDASX8sBMQVns2pwDP7LZu5TN4ffNQp8nYqsA6LkcSfiRPuSCqLtjVYejJ2ZKUNLxMmNye5",
  "key5": "xbcTjZj7a5Ho43BC8hM8ZtY4FJ3wmkx9Hvx4LDtwFxSV1V7J8jYD38JQt8NPyvZxMZVLo6MbzSwzR2E5KtQShpr",
  "key6": "3Z4ywvveyyXSuGypHmbK7UEYdugzrtZh9xL5ikvyCLKDzRcpgFEUN65zVmBT9Ykw7byPYRfLFd1TtNPchMRhjQwa",
  "key7": "4CbfU4b9EuPC3xQ9HSESjuNNSfU8LWXWcSCEJHkaZDV2hrBrVK2vSELP7WqBNiR6K62TxGfbQ4Yt2e6ar1UHhUEQ",
  "key8": "4xyghL6v6w6FzYiaq1kWp1RjKAoFB9YuQDLi2PGRkmQS1mPmndpCB9A76b2NwrSS4g1TXfzXykbjAsE1vFHbPPhM",
  "key9": "2AhpZVDqiRCQ66V2vwP1aboioSx4KVTkngXwJ9kwcEmc3QwLaFZxeXLk27sh99uawR1T147BhnZ2i39Pv9e25esF",
  "key10": "3fDkX4BexUqpj6Pcs7pdRgX3tzZPNSEuscHxBcX5Ln4xFWnWbB5TCoXCMRBGkdnEwxSVu3f9MbSNmXHJ4oaPN976",
  "key11": "2LpGha2jWG8RvSS5pmWC3NK5V673gSoNNHYGveNh8nsmefttBvxaKYaLmDPqVQhftaB6EeQoCB1niufTUi86t8LD",
  "key12": "8jbnSyqNp2Sx6urzbxrszCuiQt7wFLuxdVR1QBDi6447E6vnF5Ni8WCJC9q1PE52sWp12n2qQ8HUbi9YfJBKzMg",
  "key13": "dGfbjLXUwvYd5DpN4JM28tT4kvkSdiAVha4LN3N64cDXdoKU4GGKd4hjoZp7U6qkCvJst9nz4vrmQ2Jb7kDNtK2",
  "key14": "2Eo4yNJWKK7x8fAstp1rpYpteS2LgARSuLhrA3rd7dWjAmbB3HKavF6FX5fjAJa5AGP29SJpMm5RigEMSQTZnSvL",
  "key15": "1PwLZZgXuMwvPTezprdHhaMxUh1H7T5PSxWF2bNptBVc3bCzMWG33zXXzXd3gzfH8Qyr1A5JJLwmyVuyaGLf9VW",
  "key16": "2HibJkR7pg6Q7yK1XwQHzcgyok1gAGQwmzLbHHj6PhWnS8gFfbtuV58FwxsjqmAtQaW78Y6eN5bVQn5SEg59nhQq",
  "key17": "25QEwppdS7x2xjkjGsamrJQ9SEQLiNQFRXVfi2sq7598bsRXsRYU61rDbiw7JPSh5B372Qgf4rGHpzgMkY4xwdPK",
  "key18": "5K6yKGwU9VJXp5MgFffo8fzoNBcWTxW6oh9nUdHEGffNHCUUWkjLsHmHcammudtZodHk87k5RMNCoJEQf4QUsWGi",
  "key19": "2gtKX7uKneaSjAKao38KmrLNVzrR5d2p7aL6vczs5ap8oJ7H78EcQfd8p5bsCgkBB2rQfjdZH7TphydiQnAsR76g",
  "key20": "37L1RyBoAz7cEo3QKscpZw7ESj4MKH22bcxeH7CDYe7QtkSLbE8JUfHX5sgWDaEHbsZhLjuTgoP99gBUKisZsZL9",
  "key21": "2AEJgAvsW5RfMQyA83PNsxBkPfUTtzybwCjk2NbSUWCafjfqSk18qB1QY485vt8u3GzpaJaPxsJdXvcq9iGK4oHs",
  "key22": "4Rr2A94RMoz4sBEEcNarKADMArVYyrXc8X1mG6o6n1tz6ArwT8D47Ch5afNd8mKzedctJdQ4B8TWQZ4b76zXX6hh",
  "key23": "4AtqCKBA5fT1oBEUZpJ2p4NuddU5v15RiVnu8ESjkGpJaAR35qWe8mar7rvi6c6KEEX3aU26xa1PNdzGMRqkyF9D",
  "key24": "4CnrhUvZrWhq4T7R3LYhRiGdLf59AhafX3VqQR4q8oacYvSG1qfsiRVbL1wuW2UhSgUFWskPR784eWuepmjxZqAZ",
  "key25": "53QEssBW64tsjNbV7LYxj3PQNjS4qvq3zagde4uoJ68JLSDbZih5vJS8JvwBBmopC7Cctf3C2srcDhFKp5eHFAYi",
  "key26": "5VAfM9fuKx29xcFBRHDYnzEKZoh6hEEDi2Ep3NYSeD699Uyg9azyE695ra1W35JocGZTCYWWNyTCT9dhx2bn2Rmi"
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
