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
    "4ZVnLFKdUP3H6TjnXdRRSxC7u7w3Xjku5qDhdfTmAmhoNTWux1nXJ1TdeBNAJZGBi8nMDgT5rALfy9aoKxyWHTfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZi9fATUsbncLSWMfyhYxxXfnfdCgCpL6U2ocktAbQetVFNDAu3dF5qnDeQiiDvoCgQtcN9uKkzdTMdqNRuhFiT",
  "key1": "5yhC7tjuZVRH7AzmWd5UyfjHAA9F1cJLP66oknWP5g8XBqgH1bgRTR2Umb7CZidqfh9zsfqgQANpAF8hNfmk3JX9",
  "key2": "5hr6UxZwHXwVzQXT45Y8A6TmGyqAnMhAFKj8qPj8FwKR6B9J5ksYboaetX2chHxDqpruwSjdy5pYd1bvQTiuE1DQ",
  "key3": "617jg2xyfQxZv1jQbgpmDatwXo5sZAiTrqz3KqNjsnXvTAHawpU5ZEM4BTFgEefippTRiRpevSp5J7dAmhwSZC7s",
  "key4": "3DHAwE1kkbu9r7C1FfmevFE5Ks7ETUdkynT9qk8ohNwoPxUnTZcpAKuzuVMgjvP8d8WxCZC95ySwtsY8S29XtJd",
  "key5": "3Cqe862uDH1A3QxswnTXAMJCNy2Jzhbx5Ag4d5pgdxh1cNH2qzxYGp3mY8iqTmBSv4KCjQCQPSxBdwPn1UdBdY6L",
  "key6": "eXPB1T9EDFcBSLZzzxftoVGGAb88h768ezbkUWt5eqXxtEfWDtAst4FYBpmRitP6qqWw34zC9T8XrK2ci9mxkU9",
  "key7": "5w3mKQhAthqoxcYiHr8hottD9ziWxLYA7QEVJAsssY2KFr7K1CZuQdjxSGDB9EZzawz9TLiCZcj2FU7focrUHmZU",
  "key8": "3vfatXzRvxUx9RdF346roDPf3aak2LQ8VBLk6VTGkyPqqZH1zvM3YYCtGoSnHxwSY8BXu67gFN1xcaJp5MZe7QPS",
  "key9": "3umMET9Wt8X2LzFxCsCpDXgSqYearba8FpMPzi2MkJoG9Tt7sAAwSm8gVVMpcC9gjGoUmTsAzk4gtBbQPuXjbHjV",
  "key10": "2Suh1BqeHSYVkKZbZwEruRTosXRzE2RU3hdL3NiANBRgeLCzeSygJxncFzMi7REAyJSGSUBxSR3LESmLWvWKPCXB",
  "key11": "ZNkrspfbGwh1dHi8Yuqb8VDFZ2kHAESqQXdCTpgGnFtDZ1KUkmJv7k3EZAnw2CRhAV17Rkyr2o7wfuQbytdJCT9",
  "key12": "2seXLjF1ffPoi7r9L5PcS8QPkVyiFHEEzoSTAiFZV8CtYoUK4c3SA8b5GwdNLCZEYZ43JnE73HYVUanmj9JUwxSa",
  "key13": "A1GTZcwDLTGP6CiMdbG1PwXAZU2FyYVxeAAZuqRH68G2mTcTTBwJad2SER8qvLUaLPNLsb6pZxyqEATjctzM6gD",
  "key14": "cPtestRbZhgysMykgw8SQtSoF5QWWHctexjh6iGoBrrr7kD2tLwjG6oLvxxAWHzxqjmyRYoZaB6fPUNcH52eKvz",
  "key15": "45mxbP4EYBco1qRcQL3ZYJPLRQ4ig4pHWpcM4EWrFJLnVyATpZFBixaiHi4yCangjHk9qbiDy1yZXXnUJLM7aAZg",
  "key16": "4drjnEaqe5KbQSc7eUWNgDumNtNapbjUoE9jjnZ1wQtjmg2JNZStNo3G4PVQZ8NKDnHG5M2igonk15LnP3pnCQ4X",
  "key17": "3atjSq18LJvn1cNFjuRxvycRXL2iJNSJ6tdYUkWQQ47SUVfYPUtCQH6HKstn8Wu4YUAdHPRSjztijwNBhX9ncfzx",
  "key18": "5o4zu2bjBii3dRoTCpUm9JPoYCtVq9vGmyHXAxr9MhWkJXApBwy7kz91Atnem3D1zPVU5p8p4hFNKfvzfzRKcn4S",
  "key19": "3PcxE5AFRakDBHcB9qeKenTRGLaxusuhrZt3pUjPQKEY6oWJzdfPDX4c4c1EKTUKB6zAJiiKDh96Ni6txwAS2Efq",
  "key20": "2nHvdunRHcMkmBFJV99Djxf1QRe1MbuZMWV6vzr6ZTmShyQQ1FgDb8VvGigrb4wfc6yEM9t9acuEzs8Ht5xofQnM",
  "key21": "zJGpeeJifk64nb4mWqY6M9US5w29YvqdxHEs4DrUWjpKbd9uuAVn9oCuhbnYJxG7tzbuEYv92S3J36xbdSuZuwp",
  "key22": "2tMWuKPmjrUpKqCRAJ5XaHht4m2tn1b7f3AXf8cL9nw3wrZEu6ai1UcWKLPmyLcWDHSzvoajdkS8faavUNcBdjLM",
  "key23": "56UfUceihpTXEXRLyVVvtuNLGy9YbFXFLeVNT9zaT2nv3tXnMGBg5Vf1UyupyjRiiGnrnYjS3px9mP4jpbN6AQDd",
  "key24": "2RMfM55ZV7SjxG6TafWDg8YrJ7BXApmyeD18CE7tAXtTXsmq4NjmqHX6qUiJXS1Gr7h9H2oXqARzh9sgZNx2nwiQ",
  "key25": "FB5ng48VdZnzqtztydE7Q4eG5ubq2V5pRrSypALWnYi67nt9GxQHGfaoFAcJhgP2FwGoEzJ5pykdpyTDLZ9KuyT",
  "key26": "5KwWyiH8TZDZkzSokAYDRaSHzd6dxMDYDNPWA54sqDGuT5gXi8UDGpchiH6sv5pnBtsX69hr3mW2oGzveKkwraYZ",
  "key27": "Get1nshvqMmeF2mKDm6ceXqszTN3kPHpdNF51RgTFCXCnhn962TTSq13ZRemo6w6zZf9axLP66Zmdf5oEkNSRZy",
  "key28": "2fwBZZz8NujS6kzjqqgoDK47NSZoF77ZeTfbtExcMDk7oNi4z8bzSSd8LQWvyWspCyHXAQzsQeNTayPhT8bCvpR7",
  "key29": "oWBCMS297arZSyafJu3xP9j6w38oDbCcS6aRjKzSbbSqNkYASWjirviq4MTqFBK84QFSK4edFcowK2ogLfzNPH4",
  "key30": "2JYJcjjEtv6LdYSiYoggB3KfJvEqqHzGeuP5gdtRVWCsdD54XsyyP8gGjPPjZFzJo27z4yKyvtAsVJXq9JMPZbQt",
  "key31": "5pXiZFDcDQQtdAXUt9vWk3U9hbV8B7jiAYuyq6uwsPTiBfjkjeoL7dmwjCNMdKFj42YktedvomArdXEW2wVB5xz9",
  "key32": "43K88NPUDpr5rgqW4LCgy31RWLJL3zXvyuvhsLkw9MA2WBLpocFgXyLbgw5vEVLpB7xdjjEVJrgvntUzKZwpXKzs",
  "key33": "2nZi57idfJqjQ5rMjntAwb1iRrkEKjonsV5bEHB4B1miZ3bKKPNHNcJSp9eumjnhCv4hVrGmvA4H8ahpCkv5Kk6a",
  "key34": "46ifSWHWS1qCCdSkKdiBfpVRdyHQxZTHwmHAxHkU9JAJsywnUmTcte8tR98WdbWydSNirvcDAqcHikvCHRfy6ZzJ",
  "key35": "4xiWE8awBtFWrqrZJYXYDgv62RQfX4TzgmSvY6XQEBXzuP5sCckpECwB7TZQNhjmH8JqBYSkMDjDHtaScgRSXPZB",
  "key36": "2uBZQRcGVgyx9YHm9ZnKz7WNrWZxowAWfwRYb3k14Ki17X3QQBcTM8eWDcoxAyEoPrsqhKmtQYLJi87fzDWpWEjr",
  "key37": "2wco8QsHjp4hffykD6QD7eapSK5A8MuWdAwf5oJF8J3PUxwGgNvNtdDA5qqjTD4vwiYFSmQrXwJcHHdjjnxaTSUA",
  "key38": "34so3MTgVPRXvwHRTAHvgzQtEYXYRBGTkvU3CBd9rk6MkfCXQZgztaqARk58JZ6k8rbVB4ZCnR9SJqAcrTWNmX5z",
  "key39": "2MmPKm5gT3SchJQmCedXhRASMuyQLeGqkLcDkDjFJywKngXzj1DMHJzvytNMxsBfdrXK25MJsJUHfw9Y5Fdsfki2",
  "key40": "5UrfrKCsXhUvjBeC4baSSHem3Jatn31Pem2TTTGvD3soVpkJYwXtPx6bc7axqWzXWJngREfzF573MFjxyfvUBirc",
  "key41": "3P9eLgdmWEoREfMymw8ajLXm7SHDULe8JHNnFfHTybTePSXkBG8xbLSkUdzdcY2WYPvYq3xHHwBZaXN4WQ34KSCY",
  "key42": "4wcqSwsZCL85h1QN9p6R4cHysBMN2iAfLhsTFQ6kjDAznFLtB6CmzRNrEe8zNXAZyfPi92wGdMadsSpmQX3e8Tok",
  "key43": "21TixWMC6N4hAKfpS1mPoaoUSfw1mUaDSVikhe7GaEUSg6qxgchHiff3vzvM47vD7UpVXufC3Kftk7cavLFPd4S7",
  "key44": "3aMs64GVXyNkD5fqhfgg7Us2biTzGGxmVNyW9p212VCALziRoj7hoePUfREcvGAZoB7w9P4qjqCHZXMGVdWQRtu4",
  "key45": "3ebK6yywVfMKn8H8mAz1RsUDcUSQ3ympPnbAS2jgLKbTzJGmxhDngyGpntPKTU4J3brMVohMvy1cNNceJKKDhVzJ",
  "key46": "2PXuAbNbQ5HfENtjLdPKstDtLiJD359437Mqip6NE2NMRmv3o5sNziodT9Zb2Dzp6tBgADdpVB5MsEbRGKEUWxYS",
  "key47": "FJZCZPiojSe13H5H3FiniHWSYe3oHnvNk1C176VN1ytaJM7qeqmUXtM2BD5NRMtvqQVRHkmqn1xmtmwHYUq2zia"
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
