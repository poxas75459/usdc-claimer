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
    "qjJAVsUu91txuY2uftDJAZbpXZFEfLip2grp6LMG7njWfpNS5etzDenBKVCY7kxtuoxsAptfBijcPcWRAKYszVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBepbq3U9zJ6eJG3KLYBTZdGqa72Fvuuk2HJGP5yFzkHU9boAVpyzUDjuMYPxZ6MWCywvb7FfiFLr79yb6g4CE4",
  "key1": "42BQPox3i1vhEYDt3YKxbkuk3TdJLDqVVdS1Gy7cdHR4j1SvAZ9NHrjVgN7gUMByVf4k1mrnvSdokehcdwNkrWYW",
  "key2": "KzcaLAFGSRxnQpCR3JgVou1BvCbkVMrtd9tcRLqmsVVzPwo3Exd1tJAFn9oQAgkpQXTCs416q1oPtipNenESMad",
  "key3": "3v7cYiUd2YgcrS65LCZa5tbhJxd3fN71ubDE1xiZN1s2LDsNnMasnJjrYP7xiqKK1JTaUUDjvbMfyM9ioqAwAWkD",
  "key4": "3WdK4FBZiY7rfaGtFXSaS9L53iGtEFKmWkxxwXP6Z6YqrSufvHXB7qKtQawftujvpzDczNc6uwbzmewyt4ZbedqV",
  "key5": "5CERNY889v55mVs9Rq7LJvcb3eFsrkCT9DfTxiJbyGJujA7M42su9P43J9gon5zW9eY2L37LpiNbCCfg9yoV6jaj",
  "key6": "2JoiAA7MF7gs6xMUbYGz6qr6Qfm518VYP2tWwqps3JksCWf2rPZDBj1PVVS5AaRPAnMgFpFmbzRZoaYZvTUBQpYe",
  "key7": "5X5eBxQ8TaP5mfWKCD2YDCrMzJRLWbEqS8hfB9GaEEH72YAPbMcWJLJ6UWLFUwqQueJx17eKTVQUHLyAvonKmKM6",
  "key8": "2k8MyCLBwhLM3FL14UpyCgQX6kR7qDBZwk9Uvw6f8B9aMT7qhXZbxc7VLsZo8dn327MX2oJa6m9o6eL4Hrsp6jws",
  "key9": "ka6oe18REdvTLE2LZPnhJ8h6z3fhok97NCfS4JYM6SYPDUGscbE8MqUNNnfZEmaoZohFBtfucyurEq11e6zpmhb",
  "key10": "4yoHXoT9X4pAE1mCQ3u5AEcuJoKXbeHrPpTuJ7kVaN6WZifBgEeaABJAUo6HC4gYxRq2wus2wGNkTbQZVWXR3anc",
  "key11": "5RfA3RYLpeujuaqkpQukGBA9g1iaoHDzMXwM4ZdVyd7GChKJqKu2j8owht3BykQu7PT3L3ug2TW95tCmbyL7GavE",
  "key12": "3sYEsTg6jMawZhuYj4buF5u4ovSMgTTMwaNp1jyqYhvmXyeUrpNa4bwyZYozkT22tJ8Qx5ozJyBy2ohebt3sLtih",
  "key13": "3BjCPUephY4Qg8TruMG2WV4Ly63n2WGcRxewn5D6DEXdCooqbyjEGDjkbNFcBWJTiFKvVraACVXmBfb6M6Mdy62G",
  "key14": "4ugwt3hg5T4p2xEeB5TCHXCoEPPdTfrGtc6N6ePAtfU6mMuYtmpiUczRvrmuR2VXDHDg3neSDYRQ8mXhVy9G9NBv",
  "key15": "3LwJRkeSjqkJTr5JT4Y3SUBsNS82CUzkcmBgtLDKMU27zJNFYpBuojQa1rKjSMYP7nf381hcj3M8NaeF8JgaXwvX",
  "key16": "UxPu62rm26s7nZ95xbZC6pSS9kbKviBThixsA3hE765wxuJAfnb8RZLsxTobyRN6SnKKcUQBkN9FpGe43SpeP8Q",
  "key17": "2t4MB25U5kLuiQtL9opnJXV1hkiQeSZn8qum2mWaZfKJrwuUzgTauQAxNGddv7BH1WMhUSrWmQySMoKowFFzhMmT",
  "key18": "2bU5o84LL5Pjc1HUJm7ASLWEt9g2J1zaLD4LFQGvoc7AG2RF3T1hKYhMGd48juAe7bcGqFodj4UHWyHaCKaC7akt",
  "key19": "E3SxeHTMTUqM1yN1So75iDdrxPv87bZA3WzGcEnHuPyGPr2RMfCQTppWmKZpnvXj9D56MLZXVkv8kEqVQ4kB4Gx",
  "key20": "2fLLvzXHaWftKHYkuNJgrVPx6MYeQQPMTRwzQhzj9PQfp8nsX4AsjpEDf51PG9ZkHUsVQb5KAnioe6JFAgbcj8Pu",
  "key21": "5jpuMX6cPgibiXmYhD5fZoJy4qDZtcE4kSJXcHAP9mUhzE4H2MBJamtDnUnAMjEa6Z87cBa1HPDZUhJe7jTwhcZv",
  "key22": "eAayrM5gfcN3vLyKdrq7pYXxgYjisExVn48d5rnwauPoyBBhEkxTpxQGz28H3HcLeW4Nf4xPfnDayijiMnN5XBV",
  "key23": "66BPmMVaPALUk3T51JM52AE5tvRT8efvAHYCxrYNU8FAXsCydCUoN9w1odEARjovQPHNTfpTxFNYf8ybvUpWKnja",
  "key24": "Sx96rPF3hf7PKtpmipG4DpYkvMPCN41H3Az9XzxJL4TPxajvqrKsyNtPtE2H2qbTNkG2vnJ6yg44YnfChupjBxt",
  "key25": "5SQ24P23NnzzaNtoEo9ShpYQkih9oUStBDHQNGgJJ3ASJEtXVKpy6ochFPxVFPprSJMCs32pAa4iB4meSn59gEci",
  "key26": "41ikd8XU3MWKRvsqn52BcYapaJ8Y5vU394oGqTXtHVVZF4AAzGyfWgwWC5MXmGTZzhmTKgY4cFuYQDcE4dgeD5ck",
  "key27": "5PMBQyjZHK6ZjzVR4xbKiNLyUC4Q1SgknGEABEDjkkYoTSpqJKfBPM61xKBrdBThkyHenFNzQmosK9cky7Aor9ch",
  "key28": "35Qp8z4G8ct7ePFZ6UkDskqZ79PhEAqb41mtR64PLpr2tcKqNm3LNKabpHz7qDo1skMrnuu9LX3cMctVxRF8ipv",
  "key29": "25jqPZhmgmvjL5f8VK4pcUCJnSiVhxzDZLDVz6NMY7yGPrg1APmbi6kZ7NqLzuAWskxcDrtVrUZisYXP125tmDY1",
  "key30": "8996y6ro9vmi7fVWVseMtwRMPfARgkRy7GfAXqR6cxBog8Y1J6aqPtkA1LcottTpFzM4vRcs47Y3yBqufDrDFsq"
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
