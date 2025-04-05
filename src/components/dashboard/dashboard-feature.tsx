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
    "2Jb4qtrpChEczm2QWL5K2EEZjCD7HDNmCm646DjyBFYz9dCxXd5yT36xgV6NFew6RLfyRguvQQiHjWVmHpG8zDm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ed1JPNd1AEX7a7fU9YW2ZmZMdL4edd4UbEHMTCNsMQK5KtR3DtPfpo5v7dUMX7g4w1bHT7XuQ5Sy1d2BCDL9iAC",
  "key1": "4EbE9o9fsWHzzPdW5c36mRet2aHAUVpYT56fjvvCx68FVwRswkRwd6Yun6uNcKsRazuEu1QbZhrAhFmQ2J7Dcicz",
  "key2": "33CRC5U16twMTuFyUN6emCwGRq8L678wWPexps4mTqke3G1dzpsRYWFANii94WfBefjNwxuZFa11aVNX3Zm3soyZ",
  "key3": "3uQpYCZF8ySunvThi4VpYGdQ6FqZzXKW3185EJvYeeWzWhCqchVfwopw1PLJycfAoputzMXXDJ4X6VNNjzgXHEHW",
  "key4": "2zgd7AGcyW6jmRQ8zXB6CwR8NmXixV9LQpq3oHLBW9mzbX5jECsfEfdMbMYv3aiz3GZBELx3d81TunANr8f12B2i",
  "key5": "3v5JZNMFNoDneBDBLpe1EPSkFxQcZrXB9GBByH3VcbWiFzf972e5XmeoTn2gUMfMkW3hXuTYtmV1ZJPk4tGSVtYh",
  "key6": "2WFUAf3t1oob5vUZQz1taQDvCSe9rXh6vy2aLMpdDw3993f9Hn4mtextjuKQQYCbZmGE29Cp4WrLgkxFy94Hspr6",
  "key7": "42wgc1Aqn8fRv2fyhpEU5hQSwW1XiWnzvCb3kCKRsxoSGWWRn9nu9AbQG9EH6Y1kpNX8ifMcfih1n4X6U3icWaV4",
  "key8": "2Eem9bkPTCiPEAs5HHdYDn4wgAm8M91VvLbwQqeEytvPKScUrcSzcscH2QhfpsggJBG2HsDQHNAw57D1ex3YR24w",
  "key9": "4GQQa7NvgJb4DaqxmBv61HeCYoywQQiqKtvwxg77Rvg8F1pbmhPR8pWQ7Z8fjrLsngL7mcPVSqhQSwZ55dK9U4tx",
  "key10": "5kBweoLG527ziPexS7VBTaXTyiu4sRxAwD5TdfpBpCZEX6bjzTGCWUHKaSxy7Lk4udk46HNmEigXLierLN4vjHFk",
  "key11": "3m4ZrEFgvvKqaeG94YEL88Qu1oPWg2gkJtmrVpjLrZSPfAj8mc8XyC9PvmfvZ4TH8bN5Fwn7AWAUhsw3rHcSypyD",
  "key12": "SYJDw682Pz8Y3HbXnWJkELLrxzdmrKyygSr29wgrYxyNhs3HV1hh6eXaxq77mXK6yxKDFBVarYjToSUSdQF2nCU",
  "key13": "5ZfDfHh949SnBbPv7VGwCuTpTxSuToKkjQ8QnbyDteCbBcXTSrQu3Qw1JmqWM27fQg8jqXZYfCDMdLcxfqzoDajc",
  "key14": "3jtxxeTVU4AovXGZi4q5jBo41Q9dRQQkBLxmnHnjPkxspX2JVCfjaS9VTgNPGt5XKPK4DyHA533aeYMvcsBxRe3w",
  "key15": "MaoygYAgwxwv82Dk1KK7oAeQQBCjd5gmPvbzFJAjoaiWkzDHZeg6iurf1ZhZ5bbiaDyjkrAcW9Wdx1YJC9eVCeu",
  "key16": "5eWVWHu2LMJyMFW4p6wsQQwTBAHGti8ac8DGHi41S6xFU5P7XwC5YX1L9UpB4NS7JVH3zfpQWvj175qJmc1hGWao",
  "key17": "5c4FSR7jGLnQzbToXSkL1qCAsxVQe1YWcrXcTAu6UQjab3qWnJdvGye1m5FjSxeGB4BC8aXRGVR3vNWLVgNevgDb",
  "key18": "vJLbEPg1CUFbFwus8DZ12vrJdptcJiYHaVFEPkqH2djBT59GMTzVdk6a4VeokdLZKGegY4jAkeL662KycrzEabQ",
  "key19": "64VnLeNa6KfDReCw7XNeLiSdXge8Luy7kUkQ1XqSEh3dp5KCfGXKqKEAQ9RqnhQVvjkhMUpoxLcEJk5AzNm1jgxs",
  "key20": "4nK2eoncUKshqb7XE6HPgPTZyXV6DD6rs5a8ynB5uhYUvtenwXSU7bgJYG7YcmT4jWjQgA6GdEg6jRQ53JKVe56t",
  "key21": "4BzMWQkT9aSerGggxf9DHZ38t8G2bFx4rh6DkSpco7BWyTyHxzHSQJP24SRQ2Kvtd7F6ZjFHa9N3nM8C7z46BW5D",
  "key22": "1pBATeYD6hov1SbmeW6tMLMcn4fQE9z2PG19mepS6Acb9trxXz4VEJznewn7LQwJ9PrJ29qNVvckUK9XBPje5gk",
  "key23": "3WbNgmKQZKbfgxCzKDjk9MsvKVCMxMehh4hZJT2cRGVbs6t1qLThtgriAwvMtVeVBJTFKdVHWTsYUAkuKq9QPWEF",
  "key24": "5n1tf6ABAEu6cWUGL1wxrQbkbTYC7DNRAKtmzN1EyeUJybLtU9NVbQrn4SMJmjWSFexqS8N6bEYb7WhnCdqPc8w9",
  "key25": "4jRNuSx9WA282JwNoebB8Z67HqMoqxZ367extiEPDbai3iYDDxZvPvXdhzhPFDbB9gPedTxzFiR6fHLn4VF2omR3",
  "key26": "4MDviDgSHfW8Xd1VxmhNUCZD2ctTyVX3jSL2wnfH9uWq4Ditg7KEXtbNqfDQXViCAA4HBnrqQgxQVxjZvHsGQYy5",
  "key27": "3PsPH83q7XAjjx71zNnSokDWLetAVK96LTzWEbHSTmxXkMBTQahv5ewYX3iDY17vCmmMQKC1kZNHJaHPMaDQ1gh2",
  "key28": "4fR5QEveFE7gTJFNocdjZogFjComrNP4pm9aPoYC3f7xQPXgdteNnwFV4SivUbj2183JZY7Hm6JUcswJA4qvQ3xM",
  "key29": "bM1Vvy2bSNFoGQQSgDU1UWN4oT7hDu8EtqkUsXgmnsW25xHEtA62rg88fjTGWa1vEAzN3MCayHVBRA3eSqYd4t4",
  "key30": "3kwVYTjXzpuVw7DxGu6ph3R3eKMZ97imqjTXdEDBi89fj1fZgsfWVySARFKRyX4TbiUsFPtTz6tZU4KRto9CXcRc",
  "key31": "hqF9Bz15aba1pwqPjefQZm7BVAGW9ouFvTDWJfRVuw8UzkvsaVZKNB1afFxMjQ9siemSR3gC1mfDC1TPBmF1b64",
  "key32": "3mZFzGv7L5cB2eXSSfDzgNGkeKrwG8inDe16nCsddwESdydKFKBKw2dcgQAVpHuoNzTceX4Hq57zPoLBfmFu7eL8",
  "key33": "2bCE6fRu8pdKjqQPZA9Wg1Xut98i1XnckEHR1TykfGZZDACNTu1stpvBPWeyFR6ri2E8PRQMdXM33PVye2DEACH4",
  "key34": "RoT4kkPDWs1smGEqXJMwgUgxxp9g7iGuWfTd2ZRb72cxBoRZ4h6GEh7vyqroP5MAD36eZrhDV3tXsdNhrR7dL9D",
  "key35": "2NZMwz7RHH2L9xSpB5tre1jakhTTBot8pSJcqv3vWAgAka56HdVDGnQ8Nd7cmXxpUi9jVMF8SK7GAKCSu4vSEnFh",
  "key36": "5MTjWPRnbMcYN3tk43fPDQeBki2jjDUi3GFxeMkuJchV8u7j8TVxwMMwHs9myNeQXLrCtF8vYM4ZG4jVZrCCByTu",
  "key37": "5gdPpoinXD5sJkVJKsdLkiUm9cGqdA4DtXr1a5SCsv9ftANnTfuysfuxrSHY5fYdbKPFjte2vVk3Eq9gotHg1ZkX"
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
