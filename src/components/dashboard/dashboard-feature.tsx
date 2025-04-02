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
    "5vPt6kGYwVxHkQcwm1cfBSGD7ouhQDrJVXmEY7THfzRDYijA5g7dYEdzKfAgAoAeRV4jxPJk9PmtLRitQUnBey3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33piCb7ALjXFVzqubsVuXg7uhCWpB17p6ckmkDed5v3kaEFXofizyEQwYTpPCMfA7qVMPvgjmSd8zff2gfVnLUFi",
  "key1": "4QvP4tt3BTLGXR8pEHxw3d8ickyYkHdG33AnAvu6caM8VEdjeRnLRntpDNXvMc6bWJWjKWydSCAojp81UtxmvJjp",
  "key2": "3axU65MRs6Yn2H3XVM4gDwyPjwHZGVeQ5RmfEagv1jjAMBY93vMBD9RE5jXqrDhiHrYFh8q9rKcjTCrffhvhvwhR",
  "key3": "2aYdYtpq7ApG57MUshwNkbPuFR4ZfYQYZZuE4FZ1jhozQ36MAMhw3yrCo8u9jcJ2xNHqmFdHB6jw4wK4BfJTH3m1",
  "key4": "2ECX5NsnkJEcHJhFTS9RZaiETzRMmzgKUW3FW5FSvfGQ7H3PMEfofjuCfUgcitAtTZGJLHJW8Z6zx7ECicb1Dav3",
  "key5": "3FiYPubErTaBx8JSo4vRJUGcQsL5oB89hRejp63SyCLfLpSi9TSmFywCcQPf6q48wkwGmcDz3ewdGmksYMCyV7Kb",
  "key6": "Dghnqk9g8eWW11RZ7gPnVyb3FbpoGLVmTrXj7xHRUn2v2ve9grK5KUWrTNnb9KdaFsyPApt93oraQyhrKTf8QyL",
  "key7": "5QBFsujGmBZteAA9dAFnxhSqeQgjTMmXigsKyABMPS57AyN9hvz35EDUJ2vAPLjmPTAhM36bmrKX9KFCZUKqosX",
  "key8": "2vZkeox2mxhcBZxSeLDyHY7xqzfisJYsfVJDxib1VVZKMVGgwHYL4kp5qGcDqUu3VigHhV6sPK8DE69uVRu4SpU",
  "key9": "6u31n25kdmU8TE2uiC1vEBTi6PDWLt6gQMzX3MtiSUykY6Y3DU3qPxjeDXBjAN1FWWwvy9qjoQL3YagQhYKYgZP",
  "key10": "34WeE1RAEzNYunTiNKNAcASpCZsHTnGjd6R5aXFrkpARkwDMoKSwfrNQVPuSUEsq9GHuFpk1ADQnYit5pYiKpKWU",
  "key11": "5sGC3ugjv7dQZqiGfMTXJWyAfiYPR6Emvzwbohd2tS96ZvpswnjMZNwZWq2Zdu11zxb1QZ6jFrmuzb3WgMgSFa9c",
  "key12": "3LTHrgvgNXDBJNFoha8zhgK9hNvFPL9sagdH8NaRPqaxtrEek9y9u9t9HXm9DkTdEbwSk88oGmYA13uoYmbhk9HV",
  "key13": "4xErTUj3JdZkECeiLphWVTVc7cXZjktWVhnkuKfSzqk2wEqQJmfb1oox5qAhoPDUDfM4ymXZPckAK6DpoTquqKHM",
  "key14": "63Y7KNofMUzeJPeTrCqaK5zRLQ2JAvJpH87MuZCE1xUtGDtUAFDhNPFkJdGXpFZQndn9udyy1rF4cdnmDbtzkfHy",
  "key15": "4YNEF4pV5cR5UGeZBcVYiJjQpjuWSps6aBqCiZidVvd4cmNY8w6RaZ9iu7twCEoayfBUx7bs2qCzpiWSnE3qhbtk",
  "key16": "2ofT7fHkCZQo1VKQ691Z4KXdLiPdSykiJ2fViYnEdWmf2CnW6iLNjaAGfQHBBNj5a7RPenT76iw4EEeorjH28rJu",
  "key17": "369Dx2M9srJbzMgNCWxebBu2MV9d7Bmcc2vFCac3oR4evyxzkpeBsikjFFPARQHhzE8mJyQan7fqggkk8boFRbXT",
  "key18": "5ijtQfjPrZ2tmbK3VqXoemSjh42dxgKZWHYYiC8XiqoFmUgUTzQ57yWykSmPtEJN4jGozo4q82jTyTMFSvN2K79H",
  "key19": "4pH27afZijQhUpnJTdgGdNuGzyHFUf3imJ1Tj9WLUp3yRBx9s3qRaumeFdyyuyozTHVUHZNHzTv3QGBXs8wo1yDi",
  "key20": "36AeQeLASiqyHpChtwUJ3Saj9faYhod9uEswbZCEA41UUGccVSyVSp7UuVbiYoXPGy3v6E9LY8iwctGvEsqrrVJc",
  "key21": "4dQnT63mV6YCmqEUpgCKrJveesWDqTB98wfA15RppfGgKQbs1EfQxQ9jaqAxoa2HrDqPMbgK6wUVJUFvxUF67Tng",
  "key22": "4y2iSgxDHGNLip3LXer4ySjZKxxxH1hH8zaz1DuC5CHBKvP7LgxJt1gka9ZzZ1vzthdqQ6YkYYhtpU2NeM7nfBeb",
  "key23": "5p7TbtnCpt3LcPHERCZjhK2H792V1PsG4CXZ7yZPtL5WHbtNHm1ouoy6zEdXFgt65wHT6TuZfLTnwywQ6ETNSq76",
  "key24": "2PQZ1rB6KCr6o8vp7ekQAjdH5QvW1wv6M5txKfe2xRDCmw7MGfrqURwsqhe5vky9vWmBM2bSsF8Jo49xouMMr9CH",
  "key25": "2sXRPBmhGMBhLbUXpnLYdkxYqLt6z4wsJJ7kcEguni6e3fzZh5fdGP6xQzDA6UdYdEwbyGEdvZutNBMkhGHvToEP",
  "key26": "2SqHipGro81swanFm4WkA114isp6u6hZd2B6WsjjKVmgfup61nEQXZKXN9DkHnPukzLdJHcRK8zCMbXTwLYWQhCH",
  "key27": "3nwcsDLqMvuZv1QvzC8FmZA9h2L6P12AHF8ytgbPstLMKnnJdVaJePa9Y1dBFkCcEbeeh4ZeukakJ5x2KxxV4NxW",
  "key28": "3HkssHRJP8GEkVJted3ysoy9iPSaLBVbuQ5G7QyU8GXV755reTTk9zh2HhD3Akrf8c9oMprarnCRTEUy2XJ1PvPF",
  "key29": "ZWqyb21iV3P14emnMmc2iUMCcBRwhbTCAfL2qgZciaZWPPt63G8zuLc3vruwSip4Rb9CUiXgt6Qw9SibNzbrtbE",
  "key30": "wNX1wmFqchpnSHdcP9UYtYhmgzP5kRJjBqmyjASLLy1MVCDCKuSjC6ZUaxjy2uu98DNG2ryCnMotDweD5pMRLXF"
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
