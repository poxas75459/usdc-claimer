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
    "LgX49pKzvw1z4Zs2wmR1cFD7x5za6GyWribZnqMxyh2Wg2o1UzVymmh4gDE8xUw6NBrz7phvwuPv2tcdy3MFUhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lgvt851q6pqyzjzuk8CY4kwYz6gcZR2vCScZmHxPCuhEdt9zLa4zWiEfY5uFFNkXbuQj66uhtmSEsnA1GssjLbE",
  "key1": "2yejAwx16hcUweUdURcN1KojFrSvBrwzQfgjB9b8VaHy5BQciupc5Q5pLVhAV5vUqzi9gQYh4qTp9FZg75YwxLf9",
  "key2": "2rRbMCQtPPvRQuxDYXSbBDyzWihh6APZ2wYGhiS8zksxAhh4w8qgWQDkM2f6yQqKks8ckB5jY7xHoBnqBBB46nmM",
  "key3": "2ESYUahhs9Gt58irX75oBYV6kKRYAWQseP4MZRCAiFD9sbUqqoU33UMqSVbkYNFTaGkLYxffq4WusvTWQMpWG48R",
  "key4": "CgWTuzetgLj3zAZwGxtdPfLPeWmLqMNy1iCLJdMzeKP7PKeDJSCBaJjDs1CWDirPXbywCdo8CUcVSyzvoX1ehnx",
  "key5": "5roLraBdSbfNbwJAMhBLXA7w7ikdn1cEiNM694qM9MVAqYTtGNECgHYSeVYkbC8dL6rChDL99bALHHU9YVUVpux1",
  "key6": "5fZtRpkKfWRfqGDDc4xKXGQxVuiAfbA8g99nTiGGZxSUs4ZnVkTBixZc2WxaegcyUtMjabVFVCrStMbfZoPgcS5S",
  "key7": "2zX5ySqnK8k5EYoKvqAdpg2XCbZmeBisbGsY5884E3rz726dv32spWL6ask5nBzRQn2Ej8xUU3gMGGk88Ru9Yx6k",
  "key8": "25s2ACRZyxt32joPc5jXZDxswGSWy9L8Hfe1Q64o8rHqr1H7nRNeYugxEspeguztddnTM4cs2uKNVsCqbpetZsf5",
  "key9": "2HytGvigkJG1fqnz2jYoTmgvMp9CNKy8YNqSByCiJhD2pLQ492GLDpe23SJoGwkmdMQsR2QPCZhJyDYPHmXnQHyn",
  "key10": "PkSvNxq6fHgzWs6uzx2sfrA4RCMsXDh9xYfghtpA4pVVw9PCsvoTKhwXm2MgcxuNMHyUs4zBSMJCM17hwzbwZRL",
  "key11": "2rSrsVmvsVsedT5XdQe2BkSHV4JEJEJ8faMyCmbcAJP9ke4b8jJ6i5RD7j7qA3Kh2Tkgw8yNUnThLaVT5pAtjTvH",
  "key12": "2Bmwq9wpKscyReFhNXCcjqsWeRQYMi6ZKKeLaaQtwuwcAJgYKLQnvP8uLEJbWtkrDRXLDueZygL4cG7mtUgSvZEn",
  "key13": "yExebZzTD8EpZq4AAbErwmhZ3sUNN9NR8ZSrpKhhZ1ZqmeiBGrgxk8LsrRe6i6Va9ibzpexFCP8yXHgFpHHGUZL",
  "key14": "5Vz482y8hpTzUteMpojf7isYeNGZCK9qjXwd2oE2JXfMhZke2qPMMPuAbjPEtt8cAgbDaBmgpGPVg2jxU9uiMpq4",
  "key15": "5AUyDFoAQLiExY5LKVQfARsbDNyLYkAstr6ZBDKgC2hAZmd5bkcbL4CW3qeyR1VSD4bLn2ujnLqShJjFNPX9ecjd",
  "key16": "3nJT3KecA3TcFSCHxKGg4eshbnCVzf1ThUKAxdQegVRLSczZZhhMAjhkNvRQdG6K5Zn4EMGwyEw16rfCsXZ4fieN",
  "key17": "4BJxW4EEeX8H6UM9Fqp7ictkFByVMKkRK2cfiMwnDKmDPq9rbQ5pYABJGA4hqrpCfYCZAqKPrkuJnbKJSzR3UZHh",
  "key18": "4SoxDWcuc1fzZu8oyLd8KUjVrTPyK3guTouoV27DA8p343BD5bUHvRZpg8srzu2eQG3T4nRPdYzJ3fRbteg1JFkU",
  "key19": "Q3Q3MURRa64yBnhNAHdHGiwAajWTvEHkUomajzSDtAJcwkqTdFkFjofJ9bCxaNSgCNvUa3RR5rfarid3xwcJ2NL",
  "key20": "eZyQz7RjkGKWLycdmgJuAZbtwCqeS1LVxzTPLT6x5gNBQkwH7ksjgSMfirprpfgc7XRqXFGFWCd1chdiNnDKnf8",
  "key21": "5NBw1LWKx5Lsj5R7Vrp6Ug5bMLH3CL2cpmzx1wPHDE9pMnNXYJiuVgqnjJYVoytJ9JUHHym9AGgJV7N826VME29p",
  "key22": "589Yi2RERfK6Ad77Mvd76YDZhnyPWUfNDeQ1H9DebBmQebnYYNAEVwM2f8CC96u9sxHXcimDh8T76kWfHoYfuaNx",
  "key23": "2oyWi4uGXx2rsmoKLYqtYvvfc8bC2TaKyWxwZSLDErCfPAQ3Yq7WCRJL9AxwvSoaZHnpovPhGa8TkFrdgK6zvx3i",
  "key24": "3uYSCGrY3Dp6dLLxE3ujDk2HvJXKfNepK9NwQQRHHERg8Mn58HaFMsuoXKGU7HG1uScTxLShVxtSusaFKkHv1r47",
  "key25": "5d3LCDGVWqWQ3Hzz93kQaNKMy8xLnxtE6bwHBe2p6D4Kg9rdwPh1CHDrjoE823o5wqrkqPv57Wm42A6iKPNYjSon",
  "key26": "t6v741YtGtfxdR8zysQtB1y4t8t8RrxuTKUUweyRhivR8NNRnuvkP4c2mUdznQGL9VpfunaXyWEBWiZCnkbc6MN",
  "key27": "3864UhD7ExgTcrwycYeS1CTEFYoEtq1faoqUZJPcTJrHGPfdoGiSW8JnqsLW43if6n9qryizMZfDoNYgvGzwdDg9",
  "key28": "2VzCkXKnfKyvWXKufkyGwSAKcq4DUXvbGfo1aKvk3vjwzTCzDX1miH2xDHSKr8VaLRsJdKdh72qzPw9NN6eaysQX",
  "key29": "4ZP5AJqcfrzsJFwYPEZHvgm4oYnBxCWHGioG4oYL4vgEtMUmq86uL6czhKgdQ6PjCXvhvZibLrWtKGM3TQFkHBuP",
  "key30": "57nn4S12SpcFZ51SZRQTCJGAFiw8yzA6huGHtLJGf34KuK6W2hBGxzUC3Szb9dFgkyRoooz9cX7fxQU96AKLMyKB"
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
