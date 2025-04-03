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
    "2p2TGEQ4NWmARu5Z82zHqqB9unYGetXp246PvJY7eDvmJmL5DGwt5VXNAxzoLiWwtpCrsbSa4SwGVrqNr9HZUCbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58W3t4eyzG49wQgMcyTDA5ZVzW66LaTiQPcARrej34amrkLsrkmsmM3jMtzRLEqNXYcmDtXPVUhR5YZZQ3J5x8Kd",
  "key1": "4sE8vRoPP8DFrencfhxtkJexHn3QKhLnEroJX8VACDaJGodFe5dYqP5BSamxpVeVQGLaLkCdmeYW8qpm6imCCYrQ",
  "key2": "64iw7w2fhzSnb55XCXfCNkthL2MUW9xJevMMuuWxMFu7qv5owoqyWZzWioaKMuQvqty3eE3ZAggSbLqdqs8VrBBk",
  "key3": "3ECnJs5epS2Er7KRePpQRQvdGDtPTYXzxz58TB1CwDGgRTdKuGduEfvHjTFzeaz2wwoSMRpaAGtAEMgadp3WRfAZ",
  "key4": "2BFtCmXVn8dB46L62URtQYMsQginYSoxDob5drEFHEDh9MrPhpo2sy3zA4f6ZbWe41oqkmaCiWUfdjGoJVV3Qvw9",
  "key5": "3XZ9cyEeJhsKZaZRhG6M4UkqBskEgMPmWxfqjFhyGoXHyESE5pJkXzeeM1gJ1sU5fMERu2NQG1ZoY3T5nEm2mB78",
  "key6": "5z4GG9GSaFxfNGzK5BkBAsbEevT8vZAFqdSxcz7SjESee4z7broc19vt2JAx3E4hFAWFeYn7DSvY7KBnEAVCR5cT",
  "key7": "54WTM2R4JfYLk5j55DAnpF5NNYfh4ibPBP2akf5JeM1CHxTLMkJmwDCtsmDS4C5QduVBxuuLNbmsP98Ho5isTEnQ",
  "key8": "51D5VTEaNrAN93mZ6hibWVimiZSgc2LsH71rtbD8F3e4GCfqXofTUdGhErv1MSixG4Fjy12NCHXDFbhzue6TK6gx",
  "key9": "45kcdaEjNah6gRBigkRY5XdsUm5Uqz2ZmGBycuTAavjsud58pABrMGTvwGiuxKuyeU3orxjxEhdq21F7MvEwJpzG",
  "key10": "34mABBAaCWdVh7RbxRSLBKcSpoui6g1snSc99h62mvbjyNypmNdJcwsNxpd3ftfCzHiyacFAhdCZygT1UnBPwcMu",
  "key11": "2MJ5qXEEdNW3V4b9URAcH4ZmVD29sjVAXzTXTb9N16Ckpfnx69uPXocJJTVcuvy47TyrVkeSGxdJASnZCJukvGNo",
  "key12": "5NaASw7k5LbCbhPxEX1Gd6pCT8YdwZ2fgos2gUmh9rDD4M82chMAn1GF9XPZHy4eR197AE5ZyK9jqDa6C5ukPr9r",
  "key13": "2KRTph4gFqTcop2jQ6dTcZ9g9vgovPFqgDRnCCfYizkGAYqvyGLpff85jrtQnVDDQMijWjVpXfV5zHr4JzLfZ4uT",
  "key14": "2rbC6yn5Edj3aPgrgfPg5ex4qjuh6t7KKftdD3s5FKDcMGRvmK1oQpi2PUW8hdQRXt1u4MsJdib6Dy9F1NSF8ura",
  "key15": "4i6rRk3ZE8hvtXhivDGGNkLbSoXsDk2vCqhDsLAuyqKA2QGUaja9jFSd32BA4ZtsFRWbE42VH9bX7xjqJbL497uc",
  "key16": "41LRmTJ6Mf2fAYx6PDGbBVr5NuECB3CqEujKdmDRHHsj4EpqvwsMmQXxbH2dsxHcvQCbCKQNzhfBDggP66wGuZmm",
  "key17": "2VmRDHzPXPsLfZYhxLNiM7Z1kbdrhuNbKoAqgGrg7DPffpMfNnfRVjEtT2DeS8GjfNcwLoo6dXy1iFrvMzVaPbiK",
  "key18": "4np6dC5LCUDizLLP3TJhKp2BH32pqGYv4CZEgC7bn2Wq8f7JUorTkPBbBUGR4XqrtvMMG1LteGs9L463GeM9MTA1",
  "key19": "2ZZXJb4DAyDy3nJCgNkjBdynssQTs3Ha17xS4oTCX8KgknySLchG941axLPEmgZ8UyVCR2NFL3CaK8iB3zLeqY6e",
  "key20": "21hAjv77Rur7UPbHHox5bzcDDCD5qAieUgPnE7h8hoNYpxsvKKVEhMtwWUDeurWd75qETftGL4CEdkwMH9X6Zp7q",
  "key21": "2JNx8ba5zPFYtFioRTxVp6VZqxi5ZKMSYGT7aYxWZErJhNKJhKw3rNccEcczj4RQVCt7GgVydiaibgor9D6WmuS6",
  "key22": "5Z8nYX1V8W289wUGuptrL4uqphTe6VDfy3K4HggvmJpQbacADw1afEW2ghFCaoSnSDH8fV7gmBppZKrhms41q15n",
  "key23": "3tdivHzUaiiXnYSasyQXzxQ22ZL4K69DDNzF2GcFacfYis75SHiuLZvzYypgo4phrWaLQw63P7k7sKN5YsigLm4E",
  "key24": "4Bswyy8vBEYVdfHbBvMQyeckr9RyLaWuq6cNXGzpJmPCLa31vYr1xcwYHmhsuP83tCvhkePpQt9Q2j7WQhug4DbC",
  "key25": "2MTtch7BjgjTw2A6U84qwiFQWMDhHS3EJXp6ognqZKFDzRCraHaR72Vptb4LdSEiad2o5mCVYUmAX4H4wtg6mWG5",
  "key26": "2nmpVbTbRW3PK9pz3yiYEcboPeKxxuzH1j17c4TceKVX2EFUdaKpZiHMLJMqPc4e1d22JsDnSWvDZUgbAZLyFp8H",
  "key27": "3PG4hTPV6P9VQde773Fxgq9C6qvFSPZvVmYGNNBMPdafCXzLdNCMFyvjsKcJiFMNeNYSyU6A9eUaVe5aLWBADczH",
  "key28": "RGFQbAwvV8UGC8vi1SqHkHUbPfLiFoaQAQohawQdtEBGESrfnN8j59QSt5RNsN4g4Huqi4ZT3Ztfyku2aoqay35",
  "key29": "3Daw7A73nbh2C2KUXiX9ANrfLePKsKCZyntJZatDBZ7iD97JHs6E5aDp3w5zXxJNDHFUmjKMGNLwESuuQYdR8oLg",
  "key30": "3Lvj4XfGJBqmgpg5ZjkFVNBGtooHfnvKFSfJ2b85eN64CQsy9pUTtJMZvD2pTT6SmAuS9b6sTTZEAuX8ApzaUJ37",
  "key31": "32jw6K2ULJ5G2pBpUXgn6BhGJ91FXZq3ML3YLuSAFMQq7qkxkRhiht6kpZEba7yV44bSVsgcr11U5kuik3d3QE4Z",
  "key32": "416Te8xqzxoX3X2wnmuMPRqPqyXfCdPdoAoF58dnajLJMoa1Wxo3DXzQ5oDMGJuM38oPXFK5BUCXdZUZrhQCkAoN",
  "key33": "3VMeeb8WUQVayCTXtaNBsz9ZPivcup3jBXdRHnLoHPWedxEBEt2Vna7BpAbSEtDu9L2fkn5JpQX5vTmxNDvmyATc",
  "key34": "2mDguRvD61wDDRchMEnatqhtA65iGCJqoFeXZS166URfY9mh6QqjYfSk1XiSu9vbAXP5SeUwRya5FWHciwhuwEtU",
  "key35": "5TSpr5pU6XfCduYPMjaB3aDdjpoSsC5mH5bksuz3JfSGCEW5TKjLmtDGFr8Qfw5jcb39Ar6PFkKB17VJWYDWSg4z",
  "key36": "4fAt3MgoyKQjXye1gR1zhfSqA9qBttaTYH8cjeKdp2v13mbxsXAcU5EMgv6UXWpY45xmTE1Yvu4Tg9WigbKxnCdP",
  "key37": "32vGD75EtpDTGdMZQoH5evrTSAmEFqvDzGtvTJezg1PsgjfhxeKRALcjYVZp2DxuLTgReHTkn3uTtKS6XJpUsWiC",
  "key38": "666R3MCDR5qp97in5tD1kCWAqhSpNkGCdterCi1ikk7qhpqjyPh7P4VtJxCPu3ZD1MghkcsWqZUZFfstngwE1w1S",
  "key39": "5z9Xx5ksWduoigtA7tibQ1XHonB8xbtEBCxSfWUhFv9GDDyjYZ8dYThD8UPNCokHp6nLdDVQ9rHRXT4k4KcgDyGk",
  "key40": "2W6TeZgLY1WogVwMZq6MyWWTV4RRqdPztK2fLBK4uZ8gQwjUFX6coe2fvmNjejsTMUj9EQbBQRiFZSxA7M2xTaDy",
  "key41": "5ySSYcjhRTM6FYkYTQHQaZskhWPMMo6G1ztUn3W2J8EHMfY1QB1JZafh7xd8mtYjZh33kBhCid1NZECojw6vgrDH",
  "key42": "66nnzxJ8oEgfXSTmGpkfwxXTTpuFk7z6YBpGD75Fs1keEV48m3GE9o8QHp51FreSPJDN4dHnBP9qCLVp6urSVjjc",
  "key43": "4wSCrsxBHtTpCfmoaHVZdhsVYN2YpYBRuqBZW56AdQFWuhumSXy1ocRKjWM3vdnTMMNXbPJBgzEJ4WmPaQqxxFPa",
  "key44": "5NdipzkpqZnovKz9oB7iKidUqLYBnxcdKwBfw4hTEcgHUT5NTZGBBRVQg8A9U5GWA1LBM5cE5RHKkXt2kjPAA5yx",
  "key45": "3Z9iMHKAmvRWUHPC3WG8TNK3dBxoogB8mt31i4vv3hkWbVGzpMsA9EUZyN3vb13UHpXigeTChfcPJgY9twFMrKBu",
  "key46": "658CaEuavaLK4MCgi6GRycRdi61V9ki2onK3pmPQJwDFYkcFpC9sPdVsems7pwonD95PTLZ28SbMRtxY1aUcB1E"
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
