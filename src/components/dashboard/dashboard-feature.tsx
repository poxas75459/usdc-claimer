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
    "5k2izchsNsXxxoV6fu9iKqnDujoz3JLHjE8QxfKErKjGBnkHUDZmGFiFzx5CcBn5eBLWmotCqzHoqY6ZQxxJcXmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aewxtZ65o4zyygC6BNNo6iAAfVu2MddbAr3Zu85yFrSjksyt9GJY8a9ZLRu3mzZwHr4bVaVmW8jqjsjGkfikdaL",
  "key1": "VyDdoDsbzLHRcsQZxpjTYDJSEv6m5SkWn6xHmpwkSrQPyp9k56t8y23Q52jyowA1Ag7DMXJGgF3rmuA5g7yvBeh",
  "key2": "KNNjnshtsy1fUb9KNA24yCW3uQddRfHtjDWfXkvu5ZRkVEWfUh14HBKs9vTNr7Xypgbtbpkqo1P6B6eBB3STnyL",
  "key3": "5USRGzzs8mFAkfc5qjMMNy6FrouTPUCje4W3yRroiAagPMfaNU4UxdbBLXMJWLb1EQkBrX7K1uFW7cs9gk8TWmFR",
  "key4": "9oCXXZ3Y36VwvbyfctPzP3PHgPSFjPqQKH3y5p447wfZJdEtWf5PKorFofv35bEiYYr872r3qBNFyUsJoEjNxEe",
  "key5": "jGgCN4gWTStLGaAyokjrhhfKRjmzpFxbALXYnJ8vBP3vQDZKPjfWPraaUoMqVegVjfh8toJNDiJ8T2aSN7zsyRi",
  "key6": "2haLm4DRqiJGaAefuKWN6eHB9dF4Df39KV4982bZcRiE5h8EMJfPHn7oSxCKadMAjvRKftDuApFADjw3ZnzN9FC4",
  "key7": "61e52EuXGKoZsVhoRZb395ozLqwdpDTrqBYmQDXoYpJBck6myueav62wN5pJNDGNU2vRm7zJKX5ntzd8u7BYimN2",
  "key8": "4UX426xSXqDggCFt6ifQeJPftx7srPvzJWFtyPzkVuFRwrPZU9PomETu6C6VfQX5mMTkq9CqcjoFVbL5uUQexMu2",
  "key9": "4unHUAuj19pbFkQzkPbEyHdiffexAQGtQvJy57Pn6pPj2JoHkW4z2uguYsctfDGPZ2xh7ysSuAP5DeUYVUddpGWk",
  "key10": "YCG6cTUKbeY1axHxsf3ecziGC3MXfkKhx9AVA7quvz5tSpiV7fZgMSFKwEgLvi3b7Upo8ajsiVTNDo8kEDUPNJh",
  "key11": "3TEFwvc9YQ1fB8hguJM5azcDi2dYVuyxw6nG1G1dL48tPcjPNYQqZbUuDUDiAPhR413ZvPwHG2xWpgUbcwjF8e3a",
  "key12": "2G2QVoLRZ9kVaE9kZkTw3KRrDWVU8WVyidHtGvvvWD2PjBDfcqNp93wk2WnTBSjR95GjzcfZuKKaNHpynvgKBTGt",
  "key13": "4jAyNsfdzyRtcx9V7CRnAV8CSuJaN5mAo5rdx3n2z7NbvpKHFS6aGBwHVGdWYeZmEUVeqopmGRUm3TMhwcW5Zy4Q",
  "key14": "idxUH4vfRsc7J1WAyvK8XVqUWZiVivbPE4ugzFYAeKhweGkmZJptRN2Pn97gDDdgxaGd1NWHFsNou2BYrYyHmq5",
  "key15": "8eJhd9AtYhBAiSPbAFwHS5HEhSfHwXDVjpRDUv8yNUCmMoB63VkYVrbxTggH1HATRwjGFpJBBpV2igf75fU829R",
  "key16": "5Fxmu7NJQEUq4CkviGiBKDQjbAse1ZUX1sUPHfxx2ENhyRskALn7PSjGh7MgVwi9tRbJm8kNG16JRmNAjbY2m7EQ",
  "key17": "7nhX3NdYW6B4yYoxPusZgVaNbar8qdn5jR4cUMYUAbUCRtodibBDAiDnp2Lbpug4YuvbBgypEJZUm7JMAxKnhpC",
  "key18": "2Y2FhkVhPtuzo6cas7Wz2rWDist8S3DWWQejgm2iZWkAGdxjago79oP6QYmguvssAHJ2cQH3qEZUjFwp48yWbjSV",
  "key19": "CmjijRKsc4MoHyez13gA4MLkmMYXHrig4451pYTuEWkn1t1ztQNQXUCMdGZ4Z5CJQW5TYcxymC9uyt16CRmBZFQ",
  "key20": "5rshg1zjk5vKqn6yUkVP3HHJqmWWBhnkFG9UTn7RoUW9AtD3JJF7aKz9rAwZ2PZdCW9USYzSuXRjCw1628h5jrHn",
  "key21": "57JNpoFbeavZVXAhWvDhHsCKVV2NAezFQia4rmDyxzfDAhAJzC46SXTNXRqq4XUA5VckU3nUtaSbXvyfyhQi4cXt",
  "key22": "2yXQYtDco6n2sQsDPeRjd71YwUwu8mN9eVGM8ZkUD6Lm5CFQvkL9bwmf81MzGG2JkVXjYQg7XDf9WLAkFnoiMcMP",
  "key23": "2SVdBjh7jZwYAJk9uL7QKfXxH3TqdvGnY2Mx8aKV3WPEmJPCkNrUboLG9Th3raKdkyc3QbHpZAiBTGGp1NRMtZfW",
  "key24": "T9iJGUVg8VJMdGpPnqAfycQ1KgNsh7TBXqfHY74ESaWZSC5BpAjD32RJ7MJDnX1Q936dJUrhS6jGjcTRqs5sjsC",
  "key25": "5iB855qtSgNZpn2WGMjeKCXPTZNaeUWk8NLA57XmV4nFcWuiXE8TMLyPr74UZp1QCMcuLjh73kB9n3ZLSMtNTpTp",
  "key26": "4axP1xKg11SRmcufyoysUiQZDjEdfdjuTV5Szg5qAEnvXSR6zezopcMPifbqyXkCk2wz2HL2AmvsU6tJ6r8WRiek",
  "key27": "2cThtmew5mKG93uYptDuU7caXUSg3fVzPsbX3aLKU6iYkSap2v2kFwtmRvPZsuTDEdEudnJSSjAiFM9Y8BXQh3QY",
  "key28": "2ivPmn9ixJXqbJBoFQtFe6iZm85PHpyxVgQbjtFS9kXvhJXKx6KPbNsskBJNjQWYLargD2uE9Pv84YaXbh6ZHNXK",
  "key29": "3bMDA7XJakfCKE4RiYJRsp6DnoVfbrPgYnPyYnyENqj7UHQKLigUdU8foF3E8ewarkqkYtmino1TeP2NdgiM8pwg",
  "key30": "2Rf5x6sRyBrmAbsszFCV2pHj7AhdWo5qd8hTyf1QHFAeP15Corp3aPeFVJBtkyvk1wSBFVbuYVFKCic6msVq4jsx",
  "key31": "2hkudiHqHamqHGS44ruwigwsdFJXCwgJtFd1M4FPsjdAS3AkWszW76Ugqn8oxtt2zB45QDSCcoe3dkrkdenG8mXL",
  "key32": "4crGkJmZnn4oFCzHbitwKpYQu3S8v3DkXMNsZhdH3mJich3hXS5FgW3HnUhEUaTdP1LvUxwJiXKEtryokEygc83p",
  "key33": "5CHn9guEZYyqqRk7QDK27eHLAMM555zC4kmwSEMP5EZZPLch8g42KjP24YHNZP3TdzNEY898C7fagUfihmQbFBt9",
  "key34": "hC8bKp6b1FHY8ertUMoe7hfYZj2VkoEAy1gFiWQ7Wwr5ChN9noJafHZ1fP9ZxxChB6zqCDTSbU2fC7jBTTRgoni",
  "key35": "3vruRvTYZQp1y4WMprtzw7hNzCnu31fFDtUuo5XKA37fau7QDAJcVQcrQarBv6UQ3jUeE7zDWAF3WRm65HeYoSZc",
  "key36": "5fTq2PcmDJUbWCwQK5EkdzyuwXjv8krMCAkyaG3Hj3nDHftnxCggQnwkZjNn1LagYuZ5Hdvsrg1ZYMU4kXWVHJ8s",
  "key37": "3cVVgib1FchTQw4zQGTzeX1zbhRna87K3vrz6Mk574sqPcjVh5RX6WLB5pBpcjqntLrmYYj9HWJBGQDtUoqt3hZa",
  "key38": "3yy39doj4W4DvEbbrjLEsNCDeWiHvELEM41norf37D2iGPKPXac2KpfBKswbyHibqq3kBZfRxzCfTWAw7iUWb6hc",
  "key39": "64QKKH3icCMdK5uNaym2jvJP2CHygvPJVXrzVeJ8aVKyqwJJ63Cpa7nR2PteJJQ1ji9seZLmffVRMxjNUy6BwpmR",
  "key40": "3ZytKBkLj1YReQTd16CaDMMTjWGokzGWrYDdirX7QX7nLeKMGyo19GSSLsHpDbgJ9Vn6t5T42r52ToYZHHhhPC1q",
  "key41": "235hprn1sYwsXjEeKrRFYpcfDzKkWKhcvjAEEybcpAqoLPsaEAPaZ7k34uYetLUW5yYgbPmKL7hc8Uq5vZ711tNk",
  "key42": "3izxxGTxG6n6KsXsLV1A4WyHEUG2hMScpzfapS5aRzgaM9fSbvcpLA7VqU1adicoTatBqfRhfCLCbnMeAZKZN6hF",
  "key43": "3rPVv4NHQb2iiWEC1AuYbcszpoEYxLK4dHAkhG1rY4KVnQnvBCVg7FAmkQibaFPNCAgWstatQQQdQPxQL278qubD",
  "key44": "3hgpt5BnXXzX9Dxu8YuuwBJEFr33usNrYQ94WDFkELywPojDsLojbmv9kw5b82jAwQMCAZoozGZ1AxasFLBEdnSE"
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
