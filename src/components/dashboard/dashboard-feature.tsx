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
    "UMSWbGvCHtTj8Hm5nd48MKJkUNBgFCN4HPVEBViEcoxLCVBoLKcE8y6p1ZGMHZJo7T4TYfN3mzNPBccyjUh1RXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61kyiesdrDW777YrreSWaU5dMYtdCFcEhCgwhWTUdm4ovswJepis3D96sM8vz6Df9CbrPehVajN8iovTQHaZcdf3",
  "key1": "3p8c96v4S1xHLkPXhguUVAiMCSHxVtbTtKXy9z5WHg6nZAhgXFZN5Up25e9CV5ozHdFEzMmZQCibzQzK3wdfQN5N",
  "key2": "wAXA7WBsm45F15qRGYvgpetrsBN9UpXtcLUqzb4Mk1EVcJCGporE2nTBciHBaqnPqZ64Qm1X9G422nyc9pkwhhJ",
  "key3": "4GXvbUn4MMLpK5Uf1XjzGsywfDa4AG4CasM6KNperCzMbBqaE4RQEys9gJ72QCMCZk1xJABxeWhSubhQHKKeckBU",
  "key4": "4cGxwhhoqAkvkPCbenzgN1989vaEso311h9dAoo6YfaMX7rhCbHttPio8RJCZgLedo2r73GvRAZo5NzY4xRLjKX3",
  "key5": "5EMPFvrbMrzZkcaynPKBTnmbqeKodxagKfofWZECgPxJD2dTLDc15QXkkeubfLJ8nfDbnPuctbdcMK5jGso3Aiqf",
  "key6": "4pSXvTApkDEhn3LeJ1JczcWZ2CAhF27ewKXTG7RJdssNku1439zwkTWz9TSyw2grAEN6zkA14CDZwqaE6oA6ejpf",
  "key7": "yr3gzykE8mR622UXTgHGpvbbzPuoDNLXL1G9kV5eNZD3DEZkhgvJSYmAY1bV47H9CrbfKmNb76GTPYWNvw2TsZr",
  "key8": "2GooJP9UnkHpaN7h9XWVKHyNJ2sK7VrmGgcyU7R4drqH4LmcW1sz2imjUSTAsBnTk22h9jxKwwCaSqKJKQYwbA6F",
  "key9": "3UqMd5cvufuNkRgBJ2LWQrsRnQboXcaMpx5uKYECkhNQ94ermYUBpMLq3RmPwKX5QAEfnMgZgizEvDUD3LPBnHn1",
  "key10": "4QwsPjCBwPVhukTgkskx6WStMPo9HvPVPUxKXT5H78FtQDtquDpK3oKTABHGXFSSDE9nYpg9mHDzEGSZeArYceuz",
  "key11": "2GMX6nyzG6FaBRYAJVvxyJV13umhqB6pFogoWC4CrDp8qT3ETvnWYzQ7n9f95bmNwoyRp7DSFmZo6camoQBCc3rh",
  "key12": "3jx7UGXjca8fjnfqYm33qp3jtxFJ3aDaZ85Rc4nBNMRfuPheRsUiysut96DLVLwAwUUBXe9cKMqTbsPcMhcJrH2x",
  "key13": "4TnpBvFqPjxbWRNEALnJC2cH4UJFir518gQWwd7fkDfQD2SRXEWedTJZ33TDZGAc35jLSq4dcZFi5hGdvrKswHLi",
  "key14": "5Mph3GY8YoC1YcrqX8uQGB5iyfj8zBsJ5Pdss23174zRaNtN4HYhd9CQCXBvFVqxZFpy9EhydyRFTXrCBLqkDpCW",
  "key15": "33UVtn4PSh5DJwiXZu3N4HTB6X2FYVSn6UEURFfXiXiWczpfvFRFXQ5rBcZ78XJmXWqf3ae1Ln51R8vuT6iUy1pq",
  "key16": "2CyH4zH77BpjTGbq3KR44xRT6dg1dro66h7Ni2QwV58Z1Npesco9W8iEk5wp51prgp7NigY4JRWbJM2xigw2vZVM",
  "key17": "5KKhdrtHnV8RUtHXskDUsNWYV9eXnuPuK8DtFGAJATKEVydNLGCZbCoSUWWNvNgc5GZgAdoosvSVohMT6go3deMb",
  "key18": "LV1ZekKD8xGmUPMZFeFKf7gKy8Sn74C1TqCTvGx1XdvsGNzgTDdKQ5mCZdpq6cAE8b2XUKvoDKJKELkBT4GiXNG",
  "key19": "3tnUcXeqq9DA2TjmUEAwKMvaCFM9WPo4HAMibFq5zinZ5iZQBJkjzgHP4qpvJZ5XsS2NrpLK8zbjr73c2kgsXDh6",
  "key20": "2bdEjR9RrSQt9jdGECBu5dkKJZgmJseoG31mzhAuTVngyYtoYL1y1ziuz571J133Lcv6t3zEvNXAn3i5r4SP4Vcx",
  "key21": "B6hF42xL1FtYatbYp7WGMTjvvnE4SUBmM5AWdUWMXNc7pfyPH12vG37sFrE8jDDUUkuoNvS9osS6gkWHTGuf7TN",
  "key22": "wFd2s97LfqjpMMmGsERnDSS4rqjiTXuhXzavY4jrRgPV6rsV4bWSc4opGT8EL5NkE79Xh5XviYH9kMLTq4zHXgW",
  "key23": "T8LvbVBmvmaCyghxMKeHp4aWHyNSwXJS1RJTKMgGvwspYdnACbFzU72VVXajegHzs8CYW5hpx6tbJa8yE6Ro1L9",
  "key24": "63yUGw2rPyS3sjaSeUNkYXUH6t5F2DKRvDB2CPgRtnjEfgJ39oN4JyguVGYYGpiptweNz7f1GmunS6R9uAwwtWbC",
  "key25": "2CB9oVG1DUYAo8Rs5gi9hn1PU8iteAnkbZrNiRZggGivSJ5t1qkBxUtUyJJowgEAWZHS9fCwSqaGhUVoj6e8JRa",
  "key26": "4fuhc5T4Br9eGPNqetiYvUoUNmphgqJ4LCEgYyBuC11N2jJNyhVRmaKeFzzzq9JoUyM9M27Eq4L82dwovFPyJrgz",
  "key27": "4TfmkXT4h5Gigsxdj8Q7oDMPMPZjjUV5k1wN6nnqhMR2YMGtt4aSBAbjPk8hW5Sci6fPAypyA8e1XRPAoMWFhRPu",
  "key28": "3qKNCjgPhqyYHDQ21shBcqhCiRFwEyw2uqKZFgcTxK2zvMEjcP7N234Gfh1NBxVu65VKzn4rbMmdqp3Z1evpQkiE"
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
