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
    "2YKai7GGecve1yKrqBVPWCzfcogQkBHgFvwsRinDEnATa9v8gj9b1jV6jHe4T2pYwPgyxumuJMZiYzKfYJdBAy9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z5HtZLemFesdfbRXsoZQqwgpD2v7K6G1GVU97JkhBt2YkuJWwWtJ9UJuDj7yXJzuQPdDPgMKe7tJ6tWxZydiHFE",
  "key1": "XL32U11mV9EGJvkTskjgYV6D6vu1mZSAonssae5RjmmdkQdEC9WWRV1iBWrBPUV2DzeHR4kgXhA3ZMCsqnPtdip",
  "key2": "5onipyynV5s57XFFW6Bo64DSSuw2w7ANnbb8Z7ZjRFAQj3irtRrKoKxwJtVmEsR5PJsEXXukYHg1yrnV8AaRsBGJ",
  "key3": "2QENXd4DQLqgwKRhiGZHRH7xFQBitwfsVX9wXMUNfHRUHG8MsdHcWLdjSZgtFh9J3hZxktb9HqRWiv5W2jPT3gdR",
  "key4": "2h2Dx9pTUKabC92uEM1bbb7iJu9W7MMdLP5GRUpnXAiwUCbkUNxmkKhK1DUrKrXR32N3ZU94omzeJs6V5CfWLz7J",
  "key5": "EkFEJLJbazEyyaroZ1q1VdYXE5ZResfpMwF6XqpTP4sobuXDuAHDnD7XqVgyrfgkpkRqMkt1Uz3SQbmvz1JnmbA",
  "key6": "dYWJZL3EPTFRfVEMQ3vgUqJqhE6AtZnGmnhig6GautuF7Qm1c5VgPu442e8iW6bCvuhyx66LxUXHNUkp1boiKb4",
  "key7": "3CgakjN1BEgngyKrS7j8C8CzAfARpM97extAZzQrH9mA4jLpk9HzBEU7QBuiF2Ln3PH8Ge7GCqeNChBog9Egn1g9",
  "key8": "9pb2tuYBqzVRNYDEaLmRV1UBrR9Pqct2zqubM3p9Ma4dTLZSA7YWjSRQePak1eGupNsMyWnd4wxfD8jUS3au3Ty",
  "key9": "2Tp1ir1QVJYu9HUmXmMxaeq8SGEhc7H4gZhH61ejjX94Y53TXAjDUimP1MCSSLMAqYnzxbRTu9zKWQAZhmy4Lyzq",
  "key10": "5rtWBKYEeekaTB58igZti5omBfdMNX3NgHa5xoitrfzfjabs578cox5TSW2FebGyaKHJ6zQe1nchQgBKDpQwPKyZ",
  "key11": "5geGQvzoWJDvjVmwD3oQe3kx9R8fHuRJRFJdghxpyrBVmm4jbKPXXT7cTNZt6UY25tYauwj2VRLL6ibg2M6tDnpM",
  "key12": "3XEFrjzEwaK1CdD8yfu5s1pcTQ7SsxrPaeeZGyXD1dSSfAva8QL8b57ufRYzQQLbRdn25PWDnpdJNkxj76h4iJQn",
  "key13": "5t8KwjQQiZ5vZCPUSBwWUmMRjSyy5hFhMEV2BUR7KKSt3DS6aA2fFVCCVyTXdC2hxDAk5svD22r4A355H3Cticf6",
  "key14": "5Pp3bAv1Ddkapc17BKvemAmVi2XBfiLNQpUuPZ7cNdPoLKcX15R3j6jnJfUJVmpZh7aCKZbXL65YfA67WAmjvBXP",
  "key15": "2d1QKJL8iAFuof9gFTNesQHxG1LuHa1zxbWtMbrsNPbp9xy64Wn33pauMjbJDJ78MHoMuCQjcjWeWzSEhfz94z6G",
  "key16": "3CJgreCJBCgrXywSASJU5SiaoWnJd2HQWmXJGiPfYJsTNhCn8FRRDmKVTyZCuetvBHU2cpym4Jp1Po7NDmCjVtAt",
  "key17": "5yiBfeJuhNhuDS3FhLfkQ3URenqrHrtaddYggaWwdzafSLee6J4M6mQohD8Lx2tsZ1LhayyK3hk9dABFAUYn23Db",
  "key18": "5xXTN3fyNosfsEQabbJbtyGSzTG6Srhn1T6hvMjqQUvjdSrSckpt5zK2NDruChrBtZACeLbCH3wPccjFXS3kWCip",
  "key19": "ZVzV8nGtddJ3RfBSBV1xSbjXR44WswX4ywcsuHCytXAxYVmqAoUDuQqz6sNkoyV1N5LF9kSPovKXCnma7QZBTDR",
  "key20": "5nYzq5mxnPoHJBwtzKQUFsXmsXPxt9bF42jc6jUNHT8Y6vKZMPHroPREyzPKUwsKPqShLYKv3mtgo8LuJchawxqr",
  "key21": "2Xx518EH99JsRhquvFE1NG2q8VVLYtqggYnJ53p2sjydycm7kWBNDkcKmCYdAu3fnqyWKR5eQsLgxqSwJ2e29gQ7",
  "key22": "3yiTpCeadyLmteBvKJHW7HpXWBJZAdCoZmi4nDLwWnMk8ZRwb7zK8f5CYNtzNL5TpiHQT51n5oYgeatrCdYew7ck",
  "key23": "5hek2N8ZFxpbfYWx5eoZqr2SPzorB2EzYXofi9Hot2bkxTmCFhAgWohacporprbUgpdKiz4EGYyFC4wYSNEa3FuW",
  "key24": "8z15BQdyMx3dn9vCASmSAn5wKG5A1aH8r2j2vnhNZQi7mCirtbkXhqCEaFWQkJsKFyCsjYx57e5TFRx4hTi5Ec9",
  "key25": "3KTvZHhXWxLhHxZNeCTCCWowr6TULxdfPq6qCSAGBpUoSxFYSbf8VNpKHACXHLA59vn96JDxzUwd4xSiBbxyK7hV",
  "key26": "2QNd1evYhXz34eFePtSTiSLFVyEoQizRydsR2Cp8EbejoPpEGGdfsEMSWvnkijWQGJxijVcsT26aJy5MNNSvWUUV",
  "key27": "rp1Huh3E3Raf1BFXrq1KCoKygwpQZPu8Se1hNzRd8SexnYF15i57UUoXYUAz5z9CrCCYVtuXCk5YxEZgtZJnARC",
  "key28": "jUGtsCDnXFNwEXEyyRWqHfwJ4gfXM864JtCvLP8EyvouyipR2jSLumpN4HiWxuWvVRtPCLmPGrBHXmXsgeLBJZs",
  "key29": "V28tKKnxyd6EX7QfNMFKtDx7PCHLEgcMSBB3JZ9QBvNwZ4fFVrpTwfs3c4sLtsjUmVazn1TWZ7REcUxWgLNfBfS"
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
