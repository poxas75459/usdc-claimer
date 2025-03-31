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
    "3zPjmJH8eTTQpFHGtJdpBx3U9eZQ8xr5wcZYU31parh9ibHiyc93hG7yhGsiZeBEhiLd22KD3YDajVoPvCzdQDRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkeRpcgtyuJVP2VPmXFgub8WTewW9XJ8DweFZEhVfF4ACdQcVXApBFMDkKESagjgZhQ3zDtmhUNpd8EjKNPjou4",
  "key1": "49GKLkrDL7B2ex5oqKBkQUYrk8rCaNsykXmDsu397Mi4DmnZcJ2VkxY2trqEctWjyKGx4BXQFzUhhxrBNw4gDub",
  "key2": "3sAmscEezmYGAK7bR3KRJPEBejkyTXSJXZWLhmG9WEt4NgeASxqfsX92fEPZwGFGazCteGStJuDzuuSugQku8BUa",
  "key3": "43Qp5iEwo5rWhXVGMCtUzBfCZkDa92C1UiCDXPb3NEDryMeEFNr7h7YdKChCoBh8bkupGHwCAWcBxY6vDDf2wu4W",
  "key4": "k5a5U92jY9fpZ9aVhgPUSKirif3xNbXBmD6BgY3xCcX5DN5CDfHtLESxD52NYCpC58cXpxcrsQBpyuWivyDnLRi",
  "key5": "sCbKZGHjX7PU8C6c7rJok4SAVa2GoBaGacRUJthJcdncDnGY5vrtGTuwnCgZnBij2HisJD4fSMqQbBfufaW7Mkr",
  "key6": "4dXzygJfRxRrx5dNtJtFkYVFm53B2q3KgiEwcDeKcgMzhu6JqLHMG841VECEc3f44biRHPqp3sPZtuFLxA29JZvL",
  "key7": "4Lk6dRxXX7XRYrtcyjYUk1V4wJRa2uhxJ579z9grReDfZvCjF3D8NUoCKh2PBarkMiCbr2oLnSXf1S7kA7verzxV",
  "key8": "3zC7gPrwDNWiBJ5iSKGcsujvNQhcPdoHJXznG7LQmZNSw7JBRHaE2AG2UFxmWQjwMQRpNdXUZPHqEx5gkg5zWFYe",
  "key9": "49oeZcASATdtEuCtSxCLeoajR626sqLJtDBP6aCSBiRsuR6PpTTy4ibgoG6bpjaquRjjHZLq2utCrmKtgcwtNGGj",
  "key10": "LJaEAdfGAu9pFgL2jSo2jRDCqQyjBW6FieizQ5wbEdy9o1bRUTViMtuGe3X4QDWWsnyoVfeUxc1LzfYRyciSmEf",
  "key11": "4a5prdYjZJYbvy98bkn6VjeMepU7ebXkSfS22US1PBfA5KZh8ytYvC1DG6xXdxDhcgtUCcst946p5UpE9nMXuL8J",
  "key12": "3HwH1u664CmbrJsKFHtb65ouLYpVchnoopDYAr9JpwXA4PYdvhauPE239z88sYa3WMgjLqufpCc7rKr6xr5B8GEJ",
  "key13": "32EhAMasyA5KigdY1H54wWKcu1uhAtpBnLkqTz2iRfU5mmLJwrKV4fWdbDTYU6zfH4bVTwGnGiJJeFsxtEd7hLV2",
  "key14": "5nA3WjJFiYupE39z7BQyKE3rydA1a7QxHiRTDpQWFcCXt8aYcrCqMEmPjj5WHeiL5PZLbo9YsevFYCqPFtoY9QQo",
  "key15": "1Setdp7zuHQqJSksTgdk6BjK8EK3De9gEBRGg3VGdus4ZVjCzEjrQq7rUhMSpxuN36muWtxsmbfTLQvTCqZMxN9",
  "key16": "36LTDhU4nSeE7972nNMBovDmocep1smzfsSPBqBEfm1RPyEuNwbD3rMDBQw8VqLDqcS5ne2nMbJghVt1dnPXc9ha",
  "key17": "5ag3bD2XV7o8HfVsRshJtihsSGj9M57xr5XKcDUKLVkFCthgFpm9LZdcQ8g9bGLNpvV6DgR3EhWvyK9zLzNXrT6z",
  "key18": "3p7To5CKX86sZ1eD3g2h26EZDZri7snYLWtcvhu68BhpakK8mxz3uzsLZjrmMMMSzRrNudxkdQh83dWtM4zTRdfR",
  "key19": "65pEFVEgn5pEgRn3woWn1466niZomoWPV8oogLNEgGXQSQ9sDM59UZBjm2RMZEne9GRzgmo9Nb4mtioFZ22aGsnR",
  "key20": "i18tUmEVxa32T7c1WFxPjCRv2RveXJsUdc5L87kdSFmTCMpUPhjpyywcdudjRY6mLcrP8KNJPHFz7CQCbX8d3bF",
  "key21": "3ZQAUSDs597YXv6pcUEzSF8cnqWpCXVYLH7J7cHy6Tm8zfT8utGcqHy21j3cGHNHpq38Qf7khizVQLZj9uaLfiVt",
  "key22": "5KFRMJmWSvWMwnJbj2CcUwo9MFJxW4EyMprGq95oQTBcXdZCDD5znT2ZyRa4pCS1MHyRAFAk1guyd6vzgEt7ctzf",
  "key23": "3RXENgQATzxyrTBJ7Tn6AGvoAWjkJ22crB5WXkSZyyxmwXBPkjwLVzDuczdiTyQWQVhavX4GpFkA4BSthBpqjZDr",
  "key24": "3k8oh5HB1buJoVsipCpk5w2aRwn9s3NFNQrJakeZFSCHPaDEfpzuuybERhTt2gxx1ugJv7Ecqk7FxBud5PoJL4hs",
  "key25": "34WSCa7t8NrGAHCMoCb7ZsuuC4PjaS5bVi18EkN81is7YhafTN72karZUEQpys4FjPKebbBJJwnAUD9fm55FDRXv",
  "key26": "36iTZo7qo8zngFRPitJ2XKEgywiX8vPGBaLaeUGQix2pcVMZHxvihYC1EBJZRgssfsVxuMa88jj2Nfv86v45jwtP",
  "key27": "2ck6pNW48nDN6Ui2N5XPb63Mcb614ZTMNcbVgV3uXbCCRhCzKkh36dLJEzR5fmwjc9KyiyoCYJM9rB5hgyc9vrmF",
  "key28": "5mSJXvhzfBSmP58dW5ay8Vszzrc2jwoJJF7xXbRK57M2FUjMjmq4Cd8ihngjHnwt2JsC4sVLCptHaHjTwSWPxPLt",
  "key29": "2n4BzjwkfjBsE2YortTDLteMwsaFiAEvDewom8WscEpZ1sRNjG4tEQRhEAGS2ksP9pgRRHXqXswDwbcdEbRsDBPs",
  "key30": "2h1evJmqX9jsVkqQrqu2FRvoVJ64PeX9Wn26uxHvUiherSrUcfiBvwetjfFG35RZdQZSeY6YAbLkXgJUVQbs2n4w",
  "key31": "496jY1dLS3ScCanXRRQ9gRvz95fjtY5nRr71paQDyfk4Jjxk4n6DZUbR8yzMXiWYRjZkGdP4wfLvbxtnK8rLub2z",
  "key32": "5WSXqEBZSynB3gDTNE9e7fHHezgpcCZXcVCcSYa3boHVheTEqjGad6UjgzsbsrdVpvHvCreKoyLxnUu1qifyK8M7",
  "key33": "NGXfteKWKRUEM9VKRq5ZA3u7qxD81irmmbhZKn593upeXsy2ZKa33vTq9igXK9SPoDYStmT39WGwPiBUsbtWt2N",
  "key34": "2TyzxK7q8jUz764Jtbvw3fpXNRKd9Uh5LipQuyeqeWafScPvizmKMu7JMo795wmjokzta5JUgzEDPyo966dDwjVx",
  "key35": "64Q51AMse7BuMF5Xs1eC9XBTSbPi2pRXkRs87DnXkTAusk9hNR9DWzgPf6SPDmU9vVrFf4nDg1NgWkYZxbpVm2Pv"
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
