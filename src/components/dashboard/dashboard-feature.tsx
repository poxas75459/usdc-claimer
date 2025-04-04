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
    "gALqf4hoNq22enWX6vT2mhy5SYHvcDQPxzm6pPD765CYSdkcBFrywBwpyra8w8h83P152ZrjNwaw4ugKxcCqtos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44swS13CJ8JjXXEk5FBjpPrfeaqtxhxJgAMGSg3Uwzhk3V6BzXhGoHaXr8MHRic4nV54MXtf1QM2SkmrjNYfaFd",
  "key1": "4972zQvT5tLbGaLvvoWNSLUcKnauBn6yQZN6sSNKhAmFJ8jwFwVMscvPbUTKjVAYsUh9AASUYYhjN94NuVDhoACk",
  "key2": "5H8Ne9TY88LMYxsBpeozGgurarYLWE9PsQtq6K68PHFbc8yMhuyLksxLtuuMD21StGdkaDYQYAzXk6ULmMWHDkPW",
  "key3": "65DsQp4KCn2LA3ftV76hoJNcUWRbWdmDiivHEzWo8vXYDvMG9Xb294wbBnSKnqpfUmzJSKQiuWjpiRTL3a7QdEnC",
  "key4": "tmqFNzaKxHfrJ2AdPTMHUtzErxTeHRj76qZerfiAsxitggLcQxCKA4FqRevMUbdeV8G4VdV6VHDgTiSPh6wdWTg",
  "key5": "5e7wMpYB92oCSaoQ6JUgQyZmBtoGiyZ1W8wMpWD3PRErSRPTx95F6vRoNZHx8K1Z4YUm5GZfiofUUi4p8Jkecwkf",
  "key6": "2W6PPHYvtQe9ouB5noSNKz8QXkADYizDJEXEKd8cmQXHjGCFiGLSYbPx5agRyRFzCevjYb5dveZ6drFFat78qeus",
  "key7": "32iM2E4WZ1KZjc6EjDaKQ5ztLuGixD1nNPfPN2oPyNC32oukoNSorwzZCerjsbSZvFfRNdJTacyTp6hPrbD9bJZ3",
  "key8": "23g6WpYktcAJzfr4djF1mm7aUd2NXTgetcpH5SSXRWbMax79rVRrzCHGCWSnyatHnLBFWhVtVmfgsFXnBgmURjYA",
  "key9": "4qtAAGaJ5u5QTgbaQkkcYD6mkKsxtbtVg3vcgYyGbWSBkfUf1SLCLnhmXymS6rAJC8cJPULra93rcFFeL4SYxqu9",
  "key10": "5FbdgPeuM1U4FvHK24oYJcKVqv528qoEvtGmgbDQiswHYAcQphMkU2dhLP53wmdL8EnF4A3LaCi76R3pMfS8q2uM",
  "key11": "4obxZeM8wBgM1J47juUL1HuMLHWNeLnhzB2XVHZvyuP4QDN2oZY9Sn4H2anZPgEBMUhGoNc4pAaM2TLg5g8fzvcV",
  "key12": "5jYcARtBjPpWVzMZjMxBviBRjyVuPVqJtJ1Dv6rwjygFfEj7DTN63mU5GJ3KtphSo1ZnFJjWmM58fr9Kconz7ZRY",
  "key13": "MNAMM2njhfGa4UPFMQHZbTy6MSXxPtHvM8rp8R53nTHXasQvBCY1qW9XH2qxNJgPjgKdh6995onmjJRj8fJa6D9",
  "key14": "622P7N2E7Jisd8U1RDtMZ9uNENQQHJh6Fdo8V6d1oziaPNQUCMadGAsh47aneceiTkfoBW7L5fXG7AQscuKrH3p2",
  "key15": "5D7hoVFAENb5nTxXHSH5xzoRWU4YgbVZJoLCqXmT2ano4euZFPfxFZPYHUcPDGHiESVVLqEwdEW8ct6pv7asGkcr",
  "key16": "57GaDmw7Kq22rs97gLHkeLFKFZ6A2tcN8zCwtgqpPrq8eYPcmWfSzcWmSbQH9UY96T8tmaZh87p4H6YJLPNTBjsC",
  "key17": "2ppNz8Zd6v861MdGWqSWmSmRMy6rRBJ1fXY24SM2VPmAZbF9zczryEdFEMgMoW6s4PV1UrMnjB8UYyhDZ9hkFpU7",
  "key18": "YPpns3bVNxsXXS7uV3ZYNCvmS4xbCzcqa97arswsexeXPszwqWFzXaZBE3csM6Ujfpo3a1LegsL8LZDTUDMyy6X",
  "key19": "3EMjb6ng3aZXn8oNfaYMbXEZTBJYVJeqZeK84Nz7d1SNbyAFTEscGS9wBC67bvrZNeKmK1FYEniuwAYSxmJUhGX4",
  "key20": "GEKC3gx52iHyCadWCs8oJtpsux6Ft7eygnJ81D8zpC5GEEqEKCB7nrVc2mAKuGqFgTyo4TE2ZZBNtRR111B8dgE",
  "key21": "2dP9HKVC2xsMagbiTD6PSWWnRBfBACrZKQG8fjmDgBckmbVmXKcPD48PfxfS21VmrgGBmTzWnuJKg2imqsc1wz4W",
  "key22": "5p5RRKnEobdxiYmjpWGZQGHsG126qjHkBd5wnkKQ5arudfPSg3poxmaCKvqHQ6sEq6cDSYA8PoJ6SD6vmwqGVF9b",
  "key23": "5TkyCUGeFmBbZro7P6QPHTHCHJpMAydWWFRcWKBmb356f3Fwa9oj3jzFbMRFuvCxxUB3fwaYq1jmMidAuH7sMVgx",
  "key24": "3FuiBc3PvG6Zut7SJZyrAUk1QkQPusx4LME4cj1Tnow8QaEYLKVh8hmZ417JieEsaa3JVi5wsCoQzJ2x73h1sgo3",
  "key25": "2xmWfkdjkF4zEXqqje8vb5m97fZXK6kGKRJiR7chxEpWUyTaVuComEDWXzEyYwxG1JiUoD6o4Q2dy5SbGME5RQU5",
  "key26": "5qHg8yLz8A9gCqKvozBwewrV4R1r7c1Se7gRRSTmAeXe1oUBPmNu9V98qZH8Qx8MY9pmED9eSFFeZHC5JD1Gkd12",
  "key27": "5gaartSRrQoD1t746vDHPanfoRGLWMKXaRWci5QxgjJrRVjZcKkwhZJr4uX7TBnpTpZLr3vvht8NTUkL6ufffKvu",
  "key28": "4uNQSXFCwa322JCfQxUco6ezPiz2bNZYsdmXXKirFoTkW3YQsQ99G5juCyqGGUnrKczdGnSpGUwkJCFgRTm9NB8",
  "key29": "43i8dQ5YQvgM3AeeciYEvJsrpwzb5aJx5uN1N4uGdmCh7uiSfE5D2XxzNuLdFUeWDrfsPtuont31oZqt8acxS69k",
  "key30": "37FRnGumatDNtDXwsxryQS747q3fd6DePq2fddDMrj6A6JL7izDHdrR9iv1Kee9DqGuL9RNZuZnDJU6buEWbgHmN",
  "key31": "3xzp5kLs3oXhT7frPBHf71PArL3mj3iFdZAjtTcgyD6UPRUqQFYZKZJuyMcYv7TiAHUMt4sDW1w5SWJZ9ZRJLibK",
  "key32": "5bhuWizU3uGPHfxHy4zih6jxYc7GvMnZCoXTToP51gDjJm64yrmaAR4ivvnUZ1au1fZ86uUzpz9ACtvVToiB31g5",
  "key33": "5ZhHtw3UJr7pkqV2PzswSGkQSjuMjBN56RMi9uTLuaEpVi6Aw44he43oTvE8vmdeLUhbNu1fWaSoVWiLUTbwN9gC",
  "key34": "NLmyLai6LU4qEMD2UmRmvXX5sP1nnTmJrbjJdNSaB1ksiZU5VJqaoLdxWxYcfcH61FespedoaGT3uRxXVJNowGJ",
  "key35": "kLTM2hwSSiFgXQr18TRXoipbP7RZ2WMuBTzzc9eSdrUDfgs8MXZ3W1ftA3Y2Vxxv79dVrAVuK79zpwRQxf843QV",
  "key36": "4vrYfBjJAMegqt2TkwzDGEszMBENSQDYb3Zo817vY5Tg3VLyV7kbCWXKmnmohJDdTdLgqwUggpF6jM9tdRbZrpSw",
  "key37": "36hvb7yYnQ3PJGqMsVyvmZvdwNNR7DuMfmZtFoJkFdnqbCK4kMHazmED9KcjFWtAakgTC8u8aR2BtjQvKXaekrXP"
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
