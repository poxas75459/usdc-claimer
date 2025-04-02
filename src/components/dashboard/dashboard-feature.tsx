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
    "5TVM7GoAQUcyHBKT7wxpvDHpdUCsV6pWtfPa73judYVU6bqdBAcnDuwdzw7ai6DxoASRkW9HAZzfhiQZEKmavg7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6suGXtdffMMNzacF4MEK7uHs8TxvVytQDLudtPspz6petjBoFT675q5z8nBVVAi5LJ18GMdpf9eaffJFggmEqk",
  "key1": "HoPB3B47NboJQHU8xrqmLV58xXGGoPC271M1GGRTmxjmK8uYLARBZLKD2Xaj1xY9aHf9qzp25veRPRwAeq3tV2W",
  "key2": "wqW77hirMV4kcRqHfcssXa5EjY1wV1bDmTZ55xoBxYLHYwtULp5bTZhwMF4iKwSDXjDEF7oDuFciLAGS2XgaKUt",
  "key3": "2f1QWTiiSdi8FALU3b7aMH1tZM11Q9PnuHNrb9pygW8PTFTNc1TJYCWTYFgZe27dw9KEJ66zBzJHaYU3zZqp4v5Y",
  "key4": "oEtCe6vBXyaBuYaWK7zcQPrsVMEawKLxdhrcKsZzsjM439TUACEzbTYpZbyHfSrmRzAiB3Y1B6GiBzdr9gYvvKP",
  "key5": "4YSgsTzXmQUq7ckHCXrd6d6n5qzTPqM8xbJDWi2UeenS7rXxpyv8hjzWu7xe4ToyguMv7zxVJxYm38DsUsxfAq3j",
  "key6": "3ypum43yQ9bgBDQ9A71Cy1dQzoFi22WdJsEdNgcmisevyUUmSwBMoYPHkGr8cq3WaaLaMTCZErdn8X5Jyg5j5FAb",
  "key7": "2Azs6jwEGdBpi5vfkAu85UJZTpo9M1DNd8P4fq2zrnfhGkLjVHe5MiGeWJi2JMu6dioVDfJvc2erNwLfQNARaGhq",
  "key8": "3j8oN9wHYcQJDP1vVyuJaGNMhrG2KYdE6nXgnKsDW4MczYBQx6JsmKdu2zsv9cVvp2XQmaJRzTu45fdX3S4EvrBw",
  "key9": "xQeZ5pGBs6L3sSpJg9ZEZuRVx6JCLJ7PYMaveCUrGxoq5vsje6cgMcfEBbwg2pmZJMHkdyJNJfLXGv24TRALxZR",
  "key10": "528eUxfqywZ7AfF3rZDQb4BTbHjbbj2YkeDk3JQMEgYqeJApwa6zA6xY9fnEif9NJfaPoBGrzoxLLtZ5L9iRiN7U",
  "key11": "2TMjU68SaghFV4tgiDjcRcB75rWkxPd3F1VXq5TpnFMYvtjMDaE14BgpyD4rMptUcjRHNtzNUjRs1S4Ht2f2sCVw",
  "key12": "3oa3VJKLvEiPebcrTRW3xfKAUqV1S1XrLEqqFNWiUx1oRtXTrtBranUuu5uHDUvkPMiUyxz9osEK6sD71szk57C7",
  "key13": "4JLJrND832RXchkyimDf2BVQ4JhV5gB9AjX2NzFaZkC7Jc9BaAWrSVoohiWGF29HjLUKAcquqsKjacRGP7AS4SfY",
  "key14": "dbb2kNFmM7kmA1Rc1goDwdb4i9VW5wvWTd6EDZRyMzrxaMUBs7e2azzAFXH66h9uJ1RFCLBnWq8H6wDznT9PdL3",
  "key15": "3ppSPHiCdbXa4aegwBM2c4KsXdaAXVx4f2wDamyTuWqqTVJQqhcPM97YFiKUjnKkTepXteBQXxYb3e1jLx2JZEUF",
  "key16": "2Yud8DXuk4USxt3GYY9Ff9ekdWv9Co8Xp2jj4tBVZda5QFreTXh6Vfx5t9rxNBELgCmHS8sbVw6aLSi2WCVHz5FP",
  "key17": "4xhK3bMJQssqAFgmjgbc7pmzmC6Ezes2U42UeVtyghGTuc1NSp9A3cxRoAfyvQKiCdLiPAX44T2p1SjKwyg8eMRu",
  "key18": "5SGFhJSWoXqKuD9hBhKCPQdPtHaGNwckK3M9FErwwFHHw6FbngPabmrTiYR46zXnjLzyPu22ooRXJoVRHuBJxmg4",
  "key19": "mvokZsKpieyUoaHUUmKr6CCrV33SkUCjRUUmhnB7JSXyYj9YLwvJxmzz6accnY9WiYomgH8QH843FiYR7uf5qJh",
  "key20": "U49ua3Cn3QRz8E5etXqZVKLFcuudiSWW5yGRuEM5MTbn3yFfraBwjy6nPpLK6R7D58UtKcH24JJmg2LbReeJZmx",
  "key21": "5yzWPcNBWF8X6SMrgnfX86v6Stz7ZRuwnk34L7NFaxaw54BeZhgXjzbBD9yNUciKiqdowzqzuAn7vSFBYFhscJeo",
  "key22": "8Kpn7QjjoCzFbdHpK7c3r41d1QHx6yTJKVRNNndCsvMRFnurAo819p32KtwAWrRTf76zp4aDe5gynccjo4yL3VR",
  "key23": "2zVx1BjkRQv1YdcK1o5T7PhCfP72wXbqh8hQfMnJwV77toRgrFb2KcQ1LNEc6LDXQbFjBVLWp42g8Ts1DyYY422z",
  "key24": "3w9mdZ4MKUyBFqwXbXXkRHL2U6GUTWejbw82SH5TSAXBQS1kqDfX2ukck3HCcahMGmP9EoTHhjVvjCzABotnFupi",
  "key25": "4PgM84DawYtikPXfVLmH3oWHpH9eYAHThNKGst4DPao1wn5aVn1q7nkwLUfuRW46Gyd9YUM5ZHBdrZkd21MrBsRL",
  "key26": "5TCbRyw5SeRULWz8Ub5JXQvcpaVYa7bqabrdnvoPLCm92cVWcQmirh3PEUkQ4SVc9sK5mor9sfmv97TSLRLYPZLK",
  "key27": "5R3VGx5Sww8RVWsby2kmNhXDvQmWJ7yA1p9aFP4C7eDj9SRhY6ieTW83K4TVC1TWc3X1RAmXj1NTjoxL3ns7YF4d",
  "key28": "dQFWigyAAbL5KEn3UZEBJEe9LQQ5dBxwLWS2M6K7BzdGskM3njcdXYwyaNX1BaXcFztJrittsABJgj4CLx9LnuC",
  "key29": "49wm8pEUJmcscPnbaanpAUA9oEUJyMpfHTDWSLg4wz2LfgQfTZ4Z39yeyLpToprBEth2yNTmZU1emZP8AuWQ6SVP",
  "key30": "4JejKdSkFE3mCdQaMHdSbQAphTX1aCBjLBPn3rRU8uwd7QEa4hdq1AHCncYsoUqnHsbNeuvsySdG5GAYcgqKH6Rt"
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
