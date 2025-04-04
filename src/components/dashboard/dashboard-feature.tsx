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
    "4v18xtwFcecx6GL66QUZarJzasQB9PUF9BvgKJ271K7EszCywUbXJTNVLuhMgZ2nDs1a9paRZ1UKXDK69iKUf8rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqG1bXgsfKbHo5vTLW1gSvV3TsVpG9nph7psgE6BBzURBYqeENR6YYdxmojYY3ocrNiD1ym8QXoo4ARTnoxSnjE",
  "key1": "4XZ2ApJRja9imbFKzD6t44yxqdGk2Y5Rxyh7eWvvHngpPNtb2TK35gDaWZiBFnXKW6M812MavMXA7dVjmSNAdoFj",
  "key2": "2gvpWKc5hkyxqFeYCQiyYovbrn1xvCL97YaHyDBPQafY45M9bbs1LT95HDJadFeMBueAtxsmm7W6N6qVWjbZDLFi",
  "key3": "26rwdZYEp698hWMTGUAyS3eKEVabh87pZJusUE8VKtSNXdQxAiDF2CxgmGLsHyhaVvX34sWC2sQEXCDcog7zj1qm",
  "key4": "123FKUM59oEjfynGAXoZ7tfT8XteF7mcTnY5mr1KF4vooZg5o2dF1zbEe53DsrPASiquWnEvPXXHfc21z72663zW",
  "key5": "3Lg4gGykhG1e3vVDdnADQDQDznyn1Lnt2gcS8oCGzNziPXd12ZZu6nDSPG2wzWKshVrr6JJpxi1E7n71WmtE7ejK",
  "key6": "26EH7aAVK9KPp6ADpB4kYfQBCLVAWXikG5un7tppsgXgb184Mfk5pty2wxBLXJSyJTsgNEuPknmDAnBat5ybXUSY",
  "key7": "3Ma96prQsEAbLn2gtbkkmrcoc6pBnimULA1KqkHecDUfm8P6QULAZiAjBhybudSG75fXH36ZCvYDBpQn4EutwWXo",
  "key8": "3uukiLMKmSxK6Tdw3gJ3774Yfcq25xD588gVcoJGb9N2hB1Zu5Ei3p9V2vHgbJzSvVAPmaHhxoVVbtYcMXb4q7bJ",
  "key9": "4BoZkbV3WU82ygFnwRT7w1mAcjNWzNKeZokf7UQMcK5c2AxYsPW2deSQuF9ym4yPSLkdKwhUuS34BkbnKhbLi14Y",
  "key10": "5oRVmLznRyaVfhmL7NyAnN83knycVQUFHs4JAsvnKJr92BTYR15vEF7UaJFFpHx6axvzzFYcZVqSDJeLyvKFAgf1",
  "key11": "5ePfrMeMLxAxjT2ufnnKUMjGUCExE16YRu9S9oVY8UV3LwUzmDoFbdUv1kuYdWpMXb9hptwA6idmLS68nTNz484f",
  "key12": "67iLs3eN7oK44WY7NaBXzcnmV1JEk3T2umpxUNMQxqyXUpFLWtstXeudeEnKwaLb1o9VbH4SAvSm2emkU6VLhqts",
  "key13": "5eS5e8fFLDZZGiV3Fjvnc3mex6jTe939xswjniNFcudTtvafddUZB5ZFFR1TqAo74Uq5CzTsouDvQo99A2cVhuKm",
  "key14": "mFFM3tybrr198iBcY2KatuAZHEqHMgtqpDBveYGFcAPR4p9ZzDHWuWs6jjdg7WwBHjv39H4DcwSbisBoByWoTBU",
  "key15": "5sErFKhndfFkGthyuLU9TNHMcs8iUdpHeN4yjWymHU5c3UVA1i4JA9WxoHziS42cvA7Wd2yTsoSx63WnW3GTsTxB",
  "key16": "5vJ9FkYTqqcQhdiQX24yrgBURWZZPdRz8yG3zQFVnxzdBS4QhufPNJVKHuMNCNvkeSZpyKgA1D31fgteiwNexc9P",
  "key17": "5B8VNfCn1benXt4dT1jYTjHfbzwc2LQx7qntCDHDenWUjQTeeWDvxoLBmc13XB1dZDgekAqtC8sM8FScdeuEfEkj",
  "key18": "3A624DG9utPGMDHJKhKgnb9hVK6deFm85V9aZhwbs74Lm9zCeAJh7x455FhhbmvAuzk1HeRzrRQsTpp159r5hoX5",
  "key19": "4GvmvsviY2Qa2rWP25FpW6R6tz22uWfk3VS4QA8wiyzKNErfAGuhc48qHYCeEYNbzLATw7bT4oyb6ivvTwnf1tcg",
  "key20": "gtjspx79j18qgEPAs4xLRmhpmhZnAU4dmLyao7Dhx9DMFP9m6SqfmYsDkAqDGEmd3UHLzVWjFQMRvBkQmZaP9HJ",
  "key21": "2zD33rnfJgxajy93oXuAEFuCQjFZxXm9VR17jSbyvfs5ULvmFdBGJv4zDwuNHvu84EPYFsaF6uRjq3krTTkyhTpn",
  "key22": "512C1cfDMqraZwhbC4MghbcfntZVHKcEsgrUbdmVQ5wsc9yCwh2HVphk8akGJ3ctsSv3smw8HcU9uRuzLKYrLvYp",
  "key23": "5dMxTm8NKMXezYz46ymRRvGs8MG5mw2gJ6NXcwVCxyP8FqdQ8iEeke45Sc5doj6wCM5yubRDUY6PSkZbJF2duB4d",
  "key24": "48SBPExnQwjzAFwToGLsBBk1wjXqpWD4BJ6c1tA4TAAWcat8QQJfaGYTMYKfjkwRGyhrHgw9UTEhZ4p71V9LZswQ",
  "key25": "558VRonpvWv6rqK4a1Km3kihwKihYF7jtVHfFZMYzyVat2sZaN4EjSkifJz3RLj1p7RSG2d8eEE3zeCh3isRhdfV",
  "key26": "7vJq6Kz3xfrZQHTJco4zQYPXbebmL7xnqCTf1843V3TmakerefuM7Msd3z1RwFoYJutGj2t2iX63YSHzNKY9EMw",
  "key27": "5a6pdSWS5h7p56ZdgT2CnQBMf2kKcdcgyAJhVtwt143jTECwpSNQi3wBh4h5NvXvjCYhRXQqC9Y6fYiHrAQVnC8b",
  "key28": "2e1Fu2RmxG9UmvQHdkosfgT7iotaqTFUVXeSzmEwEnoPMtqufBXtSHakFSQtRZUyBjW3JsWgb8YArSByg4xo2FZP",
  "key29": "2jDkFWHqxPGwtKupiFxEFwUKQtfbUN26FqbQ7rgmzyPc8mxdZjTw8YSf7tfsTkhzWo48r7FrGTDeecWavxcgZBuk",
  "key30": "A23MefuVMxJ7MCBDppyQajxtYS3xhfUqSrWsRTY3NBJ9cUzQxUXf68K3asuayesT5kspWpHMjQ9CqchuMoDRpb5",
  "key31": "aAoKC2aX3RwYHLt495BzzXbKmpGCKGeqXen6s795iKtxKUWKNjQkkMwXFstRGZ5fQkppMcBuquGQec7fU14s2M1"
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
