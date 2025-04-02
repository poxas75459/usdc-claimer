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
    "4MvAR5gmEi6sefiR8aqo8pvL4uKR9XygMjBASkdUqLfVzPBdS6RznW5ry2JrpCtaw73jZ8QrT5QV7w6Fqne4x5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QXSsV2XyPRFzkQ6RfGD5bvFJMcL7J6ZEvCm66KcsbrgitU1fd5Fwd51j9wGB9jXuiPmvdvumAX3JyCikzGCmQvx",
  "key1": "384JhEQcCSUXTXik1TRcqbBRzcxFuTkP855ZzkHN2BXNMkidGsKCUFv21LpMnPfKAw9iNhxXuraU6b7uQSY9VgDG",
  "key2": "4za3EZXKnV6me7T1KsZ54bpEyZUpGLPhMtDmkH9mePUnHFapSTLp92AqgZz2HXnwMsY6QHXRZje4MMptJwmS6ad4",
  "key3": "4ZbXRi8WnNFNGbw5yovVyYM8xPQVLVqFkAYgmqzLdqoktwhVPvxy3m83JSJSw7syLLoLLLhKicQbWYA1jUZ8tjFJ",
  "key4": "3NmeFxdNtcF1W2QoaXdJehwh46oBt8SCwsGWdaWEcD3E6hAeHPKo5wWeLqhRSL5qEQQj1zXXZ6DWFrXwjyctDMhA",
  "key5": "45BKXvFARmKLU3L9xB2ntVDMCG9x7wvP3UVQEUMhLrnZZGTH4pmW9vw5ohRvUrYF555rqojFFGUqQ3XaApYfrD76",
  "key6": "5zpeCG7dQGpJMJBkedaajq8zrLrrG4XoctJD7YZc1F6XpHfgtJoheCgbNSy8k6RXBAk2hHVfS4ojR7swtcCjSxtr",
  "key7": "61pqjHmBYBbz8sj1bwDfn1LcTuvaGqJVusSsGMzb67DjARhQDQ7YCQzrchU4nYEasfVBtt35LYBhCMdfHzgjEQw4",
  "key8": "3R1FPWAHH8wxxdYwVCtiU63si7qxdaJsmit8uZRJyU7Fco2PFGHuU6iQ2QApRL3ozxQ6aQ2ffKsGiurP7H3XdJ1B",
  "key9": "4MtPKEkj6N47N3uPS5sWPN1TzQ4m9ch7HgEbHPemkpJnZ4cXdTUqtx1TsUCvV59nvj6vmS5wJNDYCBwQ6rBHsGNd",
  "key10": "5Z4zPjQdz1cdLvzKn4HwdAcFJHYQiTUpRev39VBbeKohs1GVXHEaiurBiKVVQgEeE7uzxpuAGijmV5ChpVPpkJBU",
  "key11": "bAsoJM3Me8wXax1zt9kYduQTzVVJBN9rqaJvFnReyGUjzzp2SY1Lge4sdCN4FcErpQ62rxLrKa8HkmWQSFokyeN",
  "key12": "2zKQoL9s4A2WQmepV32BGDujFLFny8DRq6yG5hFmGfW2i94X2gkCWRS94aoGqAJbhvXtGPcqQfwtEXCWX4QKWcZM",
  "key13": "5jFUzzwVDSqJQkKRmLthhoPLsinGeTQHCWBR7pcebiiauUpJMGPzWbSJJik3QPwBqG6JHjF8sAVCyUVyMqj4PKhg",
  "key14": "2sYsaPovquyTVTT8S5zLqYSa52xgrGNa7Vmx2PW9RydVYxTg2uonbfbmTfds8JZtcgvW5me31qcP5yMdXzxhNR7F",
  "key15": "48p3UqcbSU3ay5YRkrLm63Yz4K2CaahAhisutTReNjU8XjRvdCZoYDGmHQbnLu1xg7eAHSXYhrqndhEfSbHjAH4k",
  "key16": "2BKGMWNQBDzhQoEufWJz6X5bPXEtR7AFE3fEfnG8krR1SPztTdSZDt7gSy9tJsFUVJ1Uby2t6TCe6xQ7kTJkREyi",
  "key17": "PwvnECnQF4ZK9eUoMV9JXcE6oVqUoNqniV3ts6ESAS4cAPGcMNxgmuJSGBPNT8RBiXYNoqnyzV6WEmqPMD8k6yv",
  "key18": "5fscMLsqgy8MTwks2KkGiShefnKpGY5KcuG88gyd1r8zFG15AAGtqKBy3ZoBsZ5wZVfHUcdvEStNeeF5wViJHuAn",
  "key19": "2DJZM46AQs2hqiXctWGBb1t8CZAtifpmNy1dh3jfVD6MnxFg8KTQ1fJxcDiPwFDjjanxH4AjBKCsFFEq7dWwYGG9",
  "key20": "67g4zkK87zd8Ksef2YwsKu2Jvpb2Aauu4mmuMBeQbumW4SX7X4jGpwqX7YErZW4SHV6TzLfchaBCiKRFS6wzZrSa",
  "key21": "2Dm97WWAhTs923srp1zxarJ84TC1aWhSFzxMgV5iPKmUambR4AHqXzSh1iJbvPqYxNHumHpLF87VEM9HRdZ3AR9N",
  "key22": "2D2VQ2pX1XscmRQib3ZWxBVwYV9k1WZJZEkNZLg3q4eyLTKWtAYv2rt8oeaJWHefMZBkW5Dc7CTTgbV4NAmGD7SZ",
  "key23": "4B1uEj5owUw5sQhyMsBp3WgeH8JAukuGy3Dk7CVUngK5zXaS5djneJqsdC7QGgeXk4tgsmszRC8LA3csSerJ6yX9",
  "key24": "43k4F2fjotmmR26WZWFmg4mf1pd1Ljkrtia1W4d3hUTRTXDHQFz4qH9dW9f1iN1vFH8pnADcQb1NPQy7XsNw126B",
  "key25": "38WP2pL9Uix4xKm9SZKbFeka9WEV8Ctdy3TvcEU7hgokQYBhEEjAqZ4n4nysaD5YRpKNMKAyYUZCLT6Pk3yvWs29",
  "key26": "5oxdJSr2vzLtZDdtoHLNFxvdqD7AooEQPtZdpZpaX6Y8vhA86QNfmcJ1LCEhrFwUHAJQuFfimKdE8qtoQE8iiURp",
  "key27": "4NhmXZuSQNHHoWop4zHU5bm35VTbXRGmAXQeShshL1eEH8o2ty6RuMQLAjbqaPk5ao3MrRjR9VgTCPKRd6Qd2QUj",
  "key28": "y3S1F6LWoMcnBjkbWMyymZUaF1TG8SsLYmf1DxyQB8CSHuxWzCQx2tYDL1rajFtxPaYmePmw6e6Qx37VmwsK1t4",
  "key29": "3k8cKbZNyLZrYpEJcbZ1Kayzy1wLFi2nGD2TYAaCMPT3zam6aadVXtNjZJxvA2ksY3WETJ3FS9uryDCuJBxgyYJF",
  "key30": "65YGwCF72L34r8BobrYnEnx5qTsCuDzhJjbgLxTzhRyX8RvtmWqc3Ry1raNduPyKHNhsYPbgtJDYPhXqHtDytCWc",
  "key31": "4mF53erZY1fnHLwsA1h4DedCUNZuVjvnDaR96thiUhY2nbGN59L2wDS1UZbT18Np5h4dnBo5B6PG6pLBM4BRLhXD",
  "key32": "8SMpN8dWmyMvHCcYjPRxqXCkSxAH2ueP2XSohUzaDdfGDMcQmyuoYcmk3rwKrX95Nc1MQu4nqnuRFXzdMpY7sGM",
  "key33": "qYhRSArc4Gt8Qk6jkpciLVaDak95rCeSJtu4UfhqjheYjYHLoYu41frsVSJNTYQKbELuDLxh4zU3pv1Ps75Uqfz",
  "key34": "2LzzzBnW7tDW9wLFg7pJVA4awgFaM4CXLuBLf9vFifZEq2P9Bjys5EuuDUM7UfZPirSobRPYzCxporMGZRZYESab"
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
