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
    "2TGeBGwmokyXrRLy5vxoREPQqv6LVCAmxk6gV6pd4QTUX3w2csvNBAFXdN4WvYLYHGdcw61LYhkQUYTBigYoCnB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wBrkng2wbGMwNsNeo4RNSRExmwqxTXzNajkJ5CycdxANwbX5a5NsPd8raMSBLMoTCyxgExFtKCBfSfuSQn6sLg",
  "key1": "MWsHEXs5rQ9Bp2wrBrbNk77yMAtWhvBFgJnirQ26oWn1rATkADbsPhdgztKKGGtoGSuy9vf95W8apowmHmaAsnt",
  "key2": "4z2HYoW6ZyzuuTLZre2EPKjkhr7Rq8akYsAQ8BWSUubowTzTnxgEC7V94CCrZ94gyVBmoU5qvyV3wE1rWPEhUgzo",
  "key3": "2orVPA8tqxVTazxJze7JK57HPezb9vjAwiTLyRf4XHARsUYPFU8kmQq5iPuGQVBRrd1GGduV5cdMX5EQ6HL45VvP",
  "key4": "5NkzZC4Rae1qk74GCPLoS8VECquNNGwjdonvYUTKDuRAqq9Jv9nthsfrvyXhyxjgTERCxGGQavphy7y5c7y5DHeX",
  "key5": "2CgSB5zM2pK8qH2YrB2Rnv4AaySq3Q8TXrPBmcAYKj53tBrsHSVpNYwo45C9j3MfngPPxQffAK9pwDETAWQrcYpS",
  "key6": "4x1L7hbmopX4XwNJ3hJjMF9TcfKHfQowbn95MtAuw8RVZ1UtJ3WpqqKr5mgty8qGX5kPCKyGgysQV56MJ6qjXvpH",
  "key7": "YQ71wnudhSRt2nMiiSqQrex4tDBSixVN9bgyQyCu5TMmLXMnNpGfVdZPRt4JpFsnfcRCkUEHQLzzWdNS9ex3uQD",
  "key8": "21tAmMSJv3oKQ6qiBU5wUQp7e3184seaKmu6A7EGgZF5DfLjtPM5N81N5UekBcEVKTvk7KpNEzRWaz2igFNQzyax",
  "key9": "sgcizhVF3LBecjiYN4rWBthHcbwmty75SUYWMVwv2xAqRA54hWWQsVTmCyhBJfRwRcvGsXEegoWW1tvLGxhfdSh",
  "key10": "jKYGx5fKf5h6oRncR4KoeatjnXz44CC15sJoNEobEVpr2Y8rJi6hF87U5S3Q3yF1a3yeDs8hYGmFzGeEgn5dXTK",
  "key11": "4Tdaf2U8iZ6dvqeoWKwwsmvMDSQCKWHiLcUceHAjPzmzYDSonVQ3vLQDEkTPad6ZK1J41bjfgiXJ2G3UwCU4pVfS",
  "key12": "2bk9DWPy6JBGN4zsihEKqyLe8fVAHh1UBJwvxFYww9uqhUuLujKyA3EmAKGVgHsq6hnqpv2a5iNVTvdG4sBLcH3h",
  "key13": "23oy38g4g4ufvARC8GNDbV1BnEPhFntchaG8SbA4Fdq8zhdYwCHiNeSUN38XwtpT11zufRCcQp2XgRNFWz4CEx8o",
  "key14": "3iAiuAG4GTNakjw8uXwzXmW8oz1upfTGd2s6rvBMtRnMsMMAVE1iGshi1An7chbohrRgKVUmpgu54DdshwXaYnyZ",
  "key15": "6YXzimMbgQQxpijyd3eUAH58SSDcTuzhhsE5nEphgQTKsbfreZHg7qSxvSixnFqmp5nTAoKxRBPXjGoe3Rm2d1W",
  "key16": "4fkN4D1o5s4ZLP62Zbeu5x5yVTookkK6LL2eXjRhf3zMJ1zvymW846cyxuJQ6D18ZmP9o3cQXwVwN9tYdehX96wN",
  "key17": "5GFaBPaBGK3RJ1aoHDyvWnBcnCyShCK2t49yQ1HyRkBAy5DzNrutwQiMnU11iC7QVengQsBvEr9c6i1XHhkA1AvS",
  "key18": "dBWRVDLb3a1n1MxScquVBM5PunDU4ZQRR631PYv3aHX7N9fD9Exe5ZX3hHf1PsvBu7C2eNjesMQ2Cqv59hLGPwp",
  "key19": "3DtVgzWE6AdhzsGw4esjwAmR6CHsLAujkg7yU62rGw6s8twjc8zBnwkd6LeuQwZnRBXzctNAMWxfCdpvNfK7Ts84",
  "key20": "4zqpRiXdjUbSWZvqfJWQVooZERG9k9uNLdrwqwhEj6eL2qA7P2bJEwoskdK7oeecRYBqfczF96QgEW21EZ5mHrvY",
  "key21": "3b9qAtVNGQ8gkNkCxAKhTPh9mVzHAuibdkK1hWP3rTuKYdspreZ5m1w5BRM8jzz9S9ATxM6MkkKfCrWmACBGjeQ9",
  "key22": "CqL9GVYrDcPiK8ge3bzqcMeZRw8d1tdST3Ar54ShznDvFfUifrrQpFWbhSQibRf6XhmiH2vNvLXEDqjeevjkNH8",
  "key23": "3uGGZLCnQakrN7hg8yxddt2dwyufjBXKfgnbxbUqiVCjNiE8ogUmJ7RebczJucC6zxFetVtfDrTYrGKaSC2tdvj1",
  "key24": "4oT8K1MMASe3vfJoWJyRG2SifZXPURB8iMwJP7MKtYgqzUuPtxHFKuUkNJKHmHcWuN8PQgT6ciWzEPt8MsyRC8Q4",
  "key25": "2osk2Fw74iTE8xZHrmKyXphDLLBwFnkJYCVHepgmTab4htSSDjPx2QhciCLhv4iNsZYFb3Q3F9QBgnxCRrktChpy",
  "key26": "4QtP8V2gM6M8759ug1hcNNAyYxi8juUaeFrsi51yWVRmb7HmJagbEPrK8N6hDzGSNyDbHMj5EKADs8hz8qVYbLBc",
  "key27": "5SxJUpBtKc6kxkcKJxCM3ZkhZk6CRHw4S3MetfVcmkfTfF1m1bZ7TWvhgdC2ZmKK2YpqQfoTxNWuaZe33HMd8nMS",
  "key28": "5QueGVzgaXydtKdrYSXoJCpsbXuXki6dq8Jr9wuZvV4eSd99SQMSA6skj7Yzrxd4sYsiFfAKBpTWwmjMz2g6UwCx",
  "key29": "31fCUE5EAbx4KQQBkXSYB2ZJ8pALojYmL5iqZSWHd6fne5Fevt9Ec6iLr8G1DWwsSWo4oDqADXZAA4VZopy3hY7b",
  "key30": "3ye7dPgbBiy2fquQ1XTf68BXfAb1pwrEEoN9FSuvHCGQUepBDLEYbJ1S2h3vceszGqAMvg3MRuWdtA73zbudBr8F",
  "key31": "51zdo7kiyYZD9F5Tnvo3ZpaqYC7R6SVuFRSQZYG17bwPhvbxLLM4RrxM98Z3CGsVSudeZzdf7NDSJCinmoqsP37S",
  "key32": "2UHuycScKPDrWLvb8LjKZ4Sf88YHWH7aLHYZ4rxb7M34hPkJVE2ALFKXBRabaGJtNK3gNxtZf87AWgQH4QUcKH9A",
  "key33": "4GP3Aq7HGNtXKAty8DgR33tzVbXabhzpqMoKr5mgKCfSRK8cwtWNnp9ExGrtXrvN476ZpY2NnGYgUkPMeT266rj8",
  "key34": "3VsjJbeabnbVyLRu53jsANdoA6wxwWDk48vnoigrUHMbmj4CM8NJLJJr2F8HZHJkAWEGYwjGN5zWEDJuQ7upfgED",
  "key35": "4M93BzYY4c81oFLneN3Pxst8antRnZmq9pxgds7zDZTJXAXQVE1KCbsjXTSSScK7kNnyCVov3NViXszL8PoSGkEm",
  "key36": "4o4Yzb88PcNFPWVwDqDmeVK6PSLc3bUL6N6pwTs5G2KGQW6xc2TYzRVWaWUYuJ9KY9Ro69rsei9eMfYBxHVJagzy",
  "key37": "4xKnxEy3C6pT9obwyBw26PpX7S99pqTedyCTfsb34yDMnhjYCokU1eGsgff9qXwqxzHmBu5LodB5uaoUx1N7ZFRK",
  "key38": "3d5ypvy2RG3GhNETNvscGa5BUDSj2q98kQxLssywEMAr69JzfHFxY4V6Q8vjFMNQctE2xD3av4Stc7k4YLgjFUYc",
  "key39": "3y9FcM9x23jK5WLV3jSFvVBBHTQr2fEy4DhV65XqNEG4dvGryTrP4T2ug1PtzCMwKvoD76f3LNgjx7o64cUnSCxk",
  "key40": "3myUdKCW6q2viSo8s4JGW1w8WQuQUPwQoiQgABEdXxf8sqRhzcytLqnh7UfbABceVhjRTJxqoaLopMteWu43dRkJ",
  "key41": "TZY2i3zinmPC5QMPrnDUVrWnW8XmP7f4P7J8am7fetkgdQfest4qCqYoaCZDMaiDzq3tmtBLAo4wM6E4ptoHhmh",
  "key42": "3Y7XAeeLpRQtMveyfsL4aULH1KgmDqAH9ng5jVpV58fgjYqZJegXKMqciQBNosV3LsByqCCZcjd5Egu6qznuPmhd",
  "key43": "3hTEHQ7jxHGryscpLvEEmaWo6gZBhL7BfdabGAteUJeedcPEE2U7XzCNqzHzjPS1hmSo1mUG3qSgAq6MDNVh7R7Z",
  "key44": "4naqcGRgND7dDRuARpuw67BJuhYQoCSHC8G3mjT2KqrdPTd9XTqG16xnejST3VMwRvmZCkyG37j4tFmBnzXgrZKT",
  "key45": "5KMGqyj8a5M2cdPcGkGe17N6FyD6sKfVuJLMZz4k7s4doE6se5QKLU7Krv6zudU4QtHU8UggBv8dQRnzxJNR4VTR",
  "key46": "3RxWsFfvE3iXkhFSyhmJYAyVdCHDsfx9n3APxrweepfP5vHSbpTPFhR4xg9B58NRstnDkM6YNVFSSwVkQHYLjnVu"
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
