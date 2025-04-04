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
    "5eKmH5JMWxurB7aFXFwWkebzq3tj1hjcU2Hs3Fgw6E3J7CY6xdzLVdfyu7ob8hnif7mZo26Q7VYogH6JkWpF8az3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zqC8BqEjifnmxjK1kPzMAvw5cXYgYzKCegxvLvWRFJ6W298jX5fjxVUqztvb1C1DKGhtzJ8pzh6uKVYLxN9Utg",
  "key1": "wcBFA5vQUjoN4GDPRwWMCTyo3tVVEZV3xx6qAou69PPUvJLzkN1MsSL6Sc9W7ofPW1ZY2tUTsmc73rs5ooybyGA",
  "key2": "YwJorKJJ3BcQZR6Fov8QWDugqRFHiLfLjSh7oGv2TjfbLXhak9WXXkJGzMnYNEFkZBCZXhEHcBAxgiXjAd94d6h",
  "key3": "DcyC2kSreqE6umDMKapync6HFoWuH2a6ERzky7iradTGBL7VPC5zjvNCXDpfDh1d6fBdG7ZEovmeEmvr5asuKUW",
  "key4": "4zvSDPMet6fsS4NKgAh78YZLDurXLHqSeUYQe79T3oF62MnsKNRyRgDo678fZLJRpCMNGvnbMiuJr1NArEPytcnV",
  "key5": "5LcQSVmh5XJAFKTGVNegyKgibQMMVQtDtW5BJ8YNGaWEww4ZpoLAQ4E8FUBR5f977w7CupVa5HnQMNYhWkPSk4in",
  "key6": "48n4sPhNb3So5NYJRNDgpGaNCggTizpBUWDXN3juhVz6tUbC5ztoBSg3Eu2EfbHqUprAcofTAuTk4Uv6pRVf4Fb8",
  "key7": "2LcEwRwUY4zCqyiM7oKKVeRsz664sa79U65zTFxXMoy19j7rV5N24MQg6E4VqN7QXdmAqDm2ZbhKKdpwHxPvJojF",
  "key8": "3L4hBTp7rDngqwkyqKb3uF6Ct38dCvapA7FT9xCwfxieTf6ruLZaf6X1YDGGHzE3D9QDdk6qd7XCRSEtzufQZV29",
  "key9": "7C2xgULBgw3ninu3Sz3JHbAdPBgXqkx3P9rBKdhKhNFVCeh1Wa4Nw8tbmR2Re8q2TLYdhfjJGUirEzCXXYT7w23",
  "key10": "5ZQAs9AjoSYBcwwQCH5EN23fTp9bZZBDTPHPzPhAwtCdNDGH2jTcyyS8igMq9gVYqJ4ijbjku5GBxcbsEikaXjMY",
  "key11": "2ShXBPGuaimxuKyRL1BY1MjojaPZpZCtuxdRD9DCPio4bjuakdkbgwnsRo2LWv8cR35nSiDUe7VuEWmaXze5vfPh",
  "key12": "3CA3AtwkAXSRwVpvz48ww8NbqfbVsQ9D5LND6ADiE715CVfCXXEtgH9H5X9jmTm8WHkTzw9oZwFrdsfqr8JLE3CM",
  "key13": "NqeDfshm12DCpwTPdx8m8bP5u8LHMPzvqSsnmAautFa4JAL1FTvd9kPrUfTqByGRKAASvhjgrwqGaJsMQSxmguh",
  "key14": "27x4K7WrT8yj5PMdJPDbEhE18Mfb3zFt11hBJDnHTAY6NupnzsyzoXRoayePXjBsvvrUL2hbTUEKWCkXXYhJLGqr",
  "key15": "apbzSixg2fVM89iEqU78fLE7Ns9p36qwwArvSvmxo1XGNaNbrnRySBFrrZpaUHL7SFdy3gimKVHFcUxDYShfVr5",
  "key16": "pPQsMbFjHqFQKwY5RJdCWKHTSrMrcazdaKbJQxfftDgHyWJMsFN6E8fTJ7zvNE7pA6rVVjMc6KhUu1PQFxjkmZ1",
  "key17": "3suGT2BNNLRDmTuvtXjWt31xN5vqtierGmHk8VStDsFfiU1YV6rpsDMuipuKfFnJ3rjeSBA58nx91JewPqdgoPaW",
  "key18": "3i8EdninwUQGNh3d5C3C6c7rqAZ6hLHNgCGCAN85jGPdWQr26pRH6xmfZQVM7boK3yLjoJsAEyAJw2DjqEF59diw",
  "key19": "4nzwSYjs9PCFPF7Y7ktoFzYGXqFYrs8z1i58tBXGKQYJ1E92AUdCt57eqVg4XyHVf4S5JehrMkFstnXYcmfNNbYz",
  "key20": "4eq5FbJeZaT1w6P5PfkSqTBAgebNFHiEwYUX4b39fvJrLbGPRn9g7zmYwcmGuYuYWmeTosfo4WZ8twbrLETp4mfq",
  "key21": "363PF6ohfWDLmhJ81KkgBN8XgtVKdjv6WaKJvygcVjcQnkCvMokp9e4guPysFNcSBipmgBZChGrHggSh3q9Fz7PJ",
  "key22": "4nxSUcP3Gq3fg81r6xgfjTUThKwmcKTMme1YTwUmoNC4SUSHZwUWrg3tX72cb4rtwPHhu2pDyxvahgDrVvK6r6XU",
  "key23": "4mwdJzajujoXV9dbwoYuNMAyghpeZr8tLzV14ApeS4ewSyisd3FmuiB2qVJpDJpvrRH8i94FMThvMGtsFh4k6748",
  "key24": "56twfiMSciUzKXasu4HFtZvVZGmEbfLu2G3hL7c4ss1ef71634FLPqM8dPgmT78iuDoJNua4dUMvPoDWyenfTfLB",
  "key25": "hkXW3MqZEfGhPew8JHBB2pG6fb6ZTUTmSvaf9hda6wCU7etoYjNwxDSaHT4ASWMS5vTiyN83K2Ru82Ezv7sDyGz",
  "key26": "45TQMRsShKqTWrWRJwYjL8L9z8RiTCZRcBWqbBkfc8g4pXJC6nTv8Nw6pcaoFvoe6i2Ar4ehwJNWwY2wevR26cRf",
  "key27": "2mnfnjtXgJGguPnwyQFG1eCUp7jiiHvVRmVjQtjVE3ebA5fsFJnmrM97zqn17Ese5LP8NgJ3z4Z2WxCZHByEZp9n",
  "key28": "x8J8kS61VKLVmDB2LXgUPe77C49tW6QxbhueebpBENMyRPTTaFzT9SY6NvezPDuzkQRF626BUoX18v3EYfbJzVD",
  "key29": "2NnvKu9SsNPehz4vDV3WENGQCbZCP8AQjUSd4XuWaRRJjSR6cBx9hEJt5KWKe5tiycrMkTe75JQSLNs8iJPS9g4v",
  "key30": "25eSbdSMX4rL6BaBYXnZVqMC7UJEk9DShJbGEbdy43oMnEmgPA5XaSdjhp9oCfPp9x8pfPe1age1eRa8tGNKK22B",
  "key31": "43YksCMLgKXpqQbjPrSbfwUnfBqF4mS7K6fqdFBCBWWm4zk3WdEn3mhXdsbuEihu1Jsmj7WFAD8Eg6DdtU2JU6cG",
  "key32": "2JGv5AzD3LF3drrXCU2Rmsfitr5W3ayZ3FVwbAVh8BfLWhVuDXbuiQYnFLGTdbgDac7FnqmQahpyia7YwK8yTaSt",
  "key33": "GsRt14SCUnkj1ZCWAB1fiQ4AX22xVZzo614XHTmhwtHeUZd21hs8PYMYn8KHsNhPyMgynUYxD9PoufBrwVRo14z"
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
