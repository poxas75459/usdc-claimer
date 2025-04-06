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
    "5VnZ39uTdw4iSeJPKYf6RW4GzN5rydq15ESqyPftVBFEaTYxUfjPsNvGZZJVXJvMnxYzpAmmE3gCZt594XhFpqEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ExqhpUKcrLovcjuTkqADzEsLPbdyYpcNai37p3baPML1xevvT5qTFYW1pf26Q4wviKekNaqGnM9oDiZoAoKCFCK",
  "key1": "3agw245NpAEamN8ZbiL7aWC6CqU2T8fZciWMnQJF7dbYNmJY8tJYMA6YxgqWfWgUyYTBV8Ux2VhuYKt8EVAd1LhB",
  "key2": "4P1qqcLSTvjTU7hRQ9hAXpxpLZSx4thDp7Uhcv2p2YkRWLuXwMj2YgGFDv32FdKJTGd87GuqLVorZi1DY9EH7kY8",
  "key3": "3kKCp5X4QJzWoqn77pzEorrmDmJw5ynNwMP86y7Y5qdHyw2o32ZDH37xBWA7Yn7QVrvJLZhhaierWNTqBvJuvAW5",
  "key4": "4yDMv94P6Xxc77zn1oEFLekona9pb9xozCFtJMhmJ8kHMiBNrTbtGJ9NoL3VNkkCiB8Ty1YYey5tuQx9Z6rdaABw",
  "key5": "3s9hcfJdQSbtCLafMreFtz6qPtEgjMoPZRim8g2WwkmKMS26q1NnUUMUReNoy27tH3RnEGhrmoALR6rcedZVsTQB",
  "key6": "4o54EB2br9vRs8VLxB84JJdq3MnUhwD599zzF4QKYFkjvURiqSY7CgczUSBi8Df93pUSrG76uFm4RYC1LN8qMWts",
  "key7": "2yi4yxUiMrFhJWsoWa3JkyuEgodMf9v4GQEmiMgyNinLzXemZDiqXQS81vNwL6Z8dVB4yKM5omiyGeVDqGCSuGsU",
  "key8": "4ifn4Day54PUS1eZWXVy4EoonqT643pu4gT3EbBqUauHDYmqhzcRCmU3PuV53uQ25maAvqJJegegJEmTFwmqvexu",
  "key9": "4KYWruoUxH86hGyUa24FzUqzenepeK4BRofrZDgNX6AcsJd2cLbHcorTSTnwGi1LZehiYipcJ784YGQ7LENwQcP3",
  "key10": "5Q6eC7cCEDH6Nc6TKcNtmZCos3MBqtYFU1fM34UN3HWfznSvYKroCvwMHbswdKpDZ8WdXa6UqgsMgCRvGsR3Qu5z",
  "key11": "3oEoLS7KmsX9bU7sAUujWNfAyNHUu33qDr9oLRA6qwBHoFHR8hHDVKiRn4ygzeT1oMzZmoJEGgAXA9ZjtFX8RwNC",
  "key12": "4ewGR7rjCQuXhyg6SE7ycLiMRQMarvZpYxs5HVJ3edic3L4aou5MjBJSwDqBkyjgYZrRJqNF9Z7mQ2fXiiE9chDU",
  "key13": "4ArFq38BG1QoAuzEe1PZDXQc6HLpqZUbtokr1Q6PjU495HcSDQ7cjyLLsd6LdpTa4VULFQPxVUCCXAqvLytpFjd5",
  "key14": "5gxbDf19KzXS7zmHw3e9izyJb4sDBmddxVYRrsX3XbHUqSjTXdYBKPYykQ4P6maD4S1J1htRYP4mn4BHv7z834KJ",
  "key15": "53AX5TFbMdqB8pf8YypuwcvqXWNwBuj8SBGD2yYuqqX1CCiJzEGSm16f6ALYZa24NXFPyiJ8zpe3NwiNkmVYCq6m",
  "key16": "61HuN4fo4S8UEnrfUGCBErWS5SGHf7uCR2b8VJYu5VQrLV33icV2V4RKz6GEzPwwJjBPB4oMUiCTHPBPMTHS7KgA",
  "key17": "Q2nL5HR6pXvNiq65tN9VLrP7mQGwRkh3p7fc15DGjbEZpQcLHBYJTtojzpXKzNx8CKpppG788qjwu4ibmpDvc8C",
  "key18": "3dcdVZd6rVkAgXid3ZwYBs6b3zqyrkLCB9drfUppcLa8HHAajNfqGUwJqtbPwXsgiaFp1BBkzBUG1XM43fVMpVQ9",
  "key19": "5jULN5JBD4wnfa3yyKfP3K3md122azjAf5en9YGL4iVzkNQWCjKe2QtbNWPQBnPeJxGA56VHdQadpurEXniGHT6u",
  "key20": "2d7fJaskqAvCyy2cW7ghJBAbqCHefodC6DzTu6ScLgX43GfJrSAgqxPm3hrXK4JPehYvHFJMYxxjktApQqB52RgE",
  "key21": "3cjHyXzawdA4RdYG3SQuggumyP3X5zNUEyHDNphN6TqbJQTToADmtxjB51aUVRXcNPHkMmyjq8fh6kxshbyTz4Ew",
  "key22": "zgQuddVeaLTUssFYMdZFjDbDM7TTPsDzTH9X43DN32YcyWEP6ewbWhHz6yNL4E8zP2Gjn82df9bfrG2srJCTwRZ",
  "key23": "3oNFhcsaMjqbBeJBhZAgai9FK5vSP7RA4WfxCri5f6CNKVBMPtXFg4DoB12Mf712zcCPGMJAdQvaNd1vvkW7TrHH",
  "key24": "2Wj36bEUFKGr6rXNjLgSFwSSKkzBtRpj5iXgiWrqdB8G1uQxc3Xs5yJUWzFZVbMXkqmeqhJhs2mnAuL7iHwMU388",
  "key25": "5gZudqmeTohdNiM5Sn5ZKnCipNuL1bXmgqAzp2nJLNT8ewdXKhQRi1cD6UdGzqw9EXj1FZeefaDtbSYdiMNPUzg7",
  "key26": "3C1WHq4Rarn96khTkeahvRV1EbvorWrRa3H9uR7xmZSDWfLLPERxvP5gnCU8BYqo7Fxzt1xNnPxgqVfaSnv1CwmW",
  "key27": "4eR3PpDHvN5JUN8o5tZcAGwsgHBshimA4bUrMtbfbuHm1wCY993mWv3tzFefXKTy4Z1U2Rqa6M1awHiE83rX8Ttk",
  "key28": "3kVu6FyMHDkVDGU7ekdgsm2cU8imfH5iyNRAsaQyPAZwM9FZMJ3w6SQZDQFZHHYZNHFWcg7XgCiVyiZXppupVacg",
  "key29": "3nYpBzfr9xHJi9nPJvFbR27omuQr3oCti6sP5PhQNLXyMiZBCswjDzVFRk1G2woFGYibPDFCq2VDKRxggwmm97eg",
  "key30": "3UDK4f77ViMJoNkVWgpFJSxgR76Jh7MwfWnT3PXBbkp9gKa5zApAzpypk57nCwmg8sFN4J6dhww3L8DPoe58ZmAv",
  "key31": "PGwUJgRJzVdkqoUb9QkRSaS3HC6EWQmU65oXh6CQFmLjm1e52QtKvSGZnvuVvkeoKAGW7SGpbGipeF9GFVp9ZU9",
  "key32": "2QA3KXJVoPggrPMhNkDusCWTTEJVBG6cmeYYHzdSEMM78JkNieiTd14Q7SxJ4xKb6QVSiuRWddDBwgCYym67oqGJ",
  "key33": "6cDeQKPkCQdhBUpkvzWrF7GAhgxFSnig4GQLQe4XihMXeQcanVVuhKg29vs44ej9zX7WrpN1fSLM3mTeryMgtS4"
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
