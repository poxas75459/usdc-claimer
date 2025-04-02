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
    "CC6HySUkzH472d2srVbVSmePFnJQK6kpCzNqibk2tEuLu3FkEmFFxSze6qW2kqJokSN6PfU9hn7Q6Y8JqJuxaNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ow6NsKKxA5hGtbBPP9RMcWrEstsGSeJhWisNmbKV8BcF9Sony9vjRdCz4hK5iBWJ72n5ZjHbeattpVqsFXMCyc2",
  "key1": "2gKmSM7uGA28nHXdsi37EhXcvRGM26iLfW9gWcwKThh6PQRKULQL3YEUzywWS1eKBucYUgyEYYzhporCQ5V1Yd7j",
  "key2": "3JvLek6c6dw7R44ftVDwx4tnqyKU8wR3H6RG4XKcNiTjmNrskcvnoBEhLFd7dcqYT9e2JyUpnNiX3ZkyntAQSd1j",
  "key3": "3BkSyJgHe5YbZqnZmckpEKYxugGuFP9zgRNooRjED6f9LXRzFkLEtYRgtopxBs5LkSDGdAWJwo88QS89BeMkSWcz",
  "key4": "3xck9QkaMLXJtFG8BHimj7JD59rmWpPdurVe9GyDFRqUz8RGjfv9URU7e6T9Hbtybmh1uL1Gw7M6F6GjW5BSp3wR",
  "key5": "oQd1F9ZiPoveKUbQcHXWBC5SaZrxDYTmanrUJE9HX3usEZwHFLHoFvbegWkDSdG9mydWFhwWSmEBabjxsGRtBZ7",
  "key6": "4CTU8GoSq44wvwcSoCf8zLr2SinRHcM1zmnQwQUX4yGUfJe1XkoQhRjWNG4n6gpEeVdCmNeiv1cUMy598YsL3SX6",
  "key7": "3PieaYrSuw3ifCAh1KDWbcuaFc9c4rHBGc7js86S2f8Jtjk5gBAVesZzaNJr7AbbESqZQ6KibaJuRUKZsbRmNa69",
  "key8": "3JSnnZ6gbjjMJMmKwmSePr9LKqaKif7kWfG9Z13J1dDpNc67hEMcryk2k2mdJxqUVPF9hGqq7LPAyaG6RKxDiRYv",
  "key9": "5QW3wXryg8u5Y3dqpSkD7vRopiGiSPVf9zzX6D45w25DtNRs6MJqW6u1azUf7qtdFiCyT6mUGrCHV5qCStkFdfop",
  "key10": "5fwsFQF9w6naKq1CJ7NffKvGHUoybeBVgqiANrP72R7ou6fymASfnj7hLJPT929uryGb1vZqZZxtmFZsDunLjEbW",
  "key11": "2jjWZ16FtADDdH5im3Ab2XzmgsQ5N6wvDskMNvT7BFKDsZwC5VQk9eVUM48Anu2J1CQkvXzZA12VJzV5kLJbW82V",
  "key12": "2ayggXQiUHUr2zxqmgYtdDBFoQTuf7EYk5PgHryTQXqtkZqTovGuN2cvFTLn7xpKqHCvLyio6rZ4mCuxMCRC4YNA",
  "key13": "61gMZZXjtnp4yiUcFcknn25K9fjUHLd8Cx8Scp3EVo4iPuGBFbfuWu48R61Bm81KvFy4CGLFLYhtNgZLKXxiwj8Y",
  "key14": "3mTbUh6ADrDq9SsUZTLHWuZMRAvqbmMkksEbqxfTkRDKiRGuEAWHNsbprbyUijPqHrNSjpnR5nHAXuKsyoegtZCe",
  "key15": "4RE8MzXuzuC9gUNP7pXVP2m4LFFeC9Ka1Yv9sh8Efeq3NyEEcXZEb6vTfWpY9JDb39ebenob1TUBmej3RzpoVGfA",
  "key16": "3pGZFAAzA4Q7RLe4ipgc9pxJ2juKRYbMwAwZrCAJ6gxHJmefWU4H5MUapP3xgi1GjdBgN5Pt2rjSrsZEQMUzjpsZ",
  "key17": "3nYBRwQ1puhCUz3L2KFpzG9RNqC2Uqsg6CyMQ36d8K7dxP8RNeJmVhKpNQo4kHY6soJ2BNZYgNyRYXMJEBUvn76J",
  "key18": "3LLLKEiyfjE8hzs4W5A8y55CwfcZ6UDroKCTxCrUeETi2LAoBrWfrtZDENhj7jYgeozwWJLUtaxWnEw3e3LkVmJm",
  "key19": "4gTADPLZyPvdefMQAbxcSuC1hswXpnZn8kbUBxgraqEyUiNGwzZ9bHyimVmqQ9ynLG4WLXdmPwV2zHfmSSyJBJV9",
  "key20": "47LKcFSS497B3jSsCgszVcLijd891Vpd8YyyyKFEKZrnGLVVv1Y7QbcaxBNacAD9M5YwzgtGRf9Aj66TbB7m9t8B",
  "key21": "2ftdM9PpqfwGnebtQwUPDkwvxcHvAiW7Q6asEKxqTaemukHM2mrQ9k1fjBWQM6yKuAtwAv6qBqBf2cmRoNqTYzNa",
  "key22": "2TKZd79HERkjugJfqqsF1Ehm3NrMLDf7ptWdDTt6ebzgmhdb5g2FCMqzu3WiRLb7NjCGvm53m5WMhnNTRRdPNJMt",
  "key23": "4tsq48hPwbw4koJrjgZrwXVbtj3KPpoVqo3hUQkGEtYMBmtcVDHSvHpF78KQ6T2Q4WfV8SbaYvMxMZTzKce5tWt3",
  "key24": "5rr8FM8QC1QwwXw1qzpZHydpfWfdNiDHhmbc8tPWpmNeHmZdw5E9GWyPcw1MF84weG7qimar33gjBGwaDGXBBsgN",
  "key25": "3NdSrnT4EDfTrVzdKEvaYucvesKRGt1oJ7LdVv8gKYZte8DuPLmoBXeJMn38rgiT85ZiuqTKPALZczvsRALk2rQJ",
  "key26": "2P8X5BYCjqV3U7Z8t7crf7zHBWPc3KmPGsNfRzNCMbeztEqvFuuDKDxjsfofHFnzr7eEPX4RA4SU1yk2BUzkMqAx",
  "key27": "2GLaJZkxFZaEQmAeKwszuqaTR7W444qMtVi5hfXCUBvm8VD6sDCcebTMNzZCD9mCaVwctPCYVrWc4eFV7dFgG5iN",
  "key28": "yoqcN2bK8eeJ7ZNAEQck5ts7mEogc4P7b7ULcXGCSCjLgtMZwXPDFMDHZMEDPgkWqNsoXfbWVPJpJkHYxYmsNBz",
  "key29": "4zQ3E9jU8xVkDaY5xc4rnXvmALeDxifEKiGMXNz34EPQh32CX1buQUZccVpz4g2z1ZWr82kd8ZY42mG5d99rg6iM",
  "key30": "3Psw3WQa9cFEEGy56a5QHagFBPcW6XtJtRZH1XQvQiKV8opU5fwX37vKPaoVyd5GyK1pNfFG3d6xXkQTnhWVZmqk",
  "key31": "3Dwt1XGbe2jcdvoPd8Y7BeMUHJi6GznXkArx3untpExRZBS4YRAzeQBC4Ry8TkFudGvgbVTDNYBgJmkmKYZAdaea"
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
