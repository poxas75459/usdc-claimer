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
    "29dgzfdSvwGm6V4mCvmVHzoCyVEzzkrA1XxsQYQwPB61zperqC3kfMRNXMSfMkEsxwm8fHASJYcAnTjMpRwNwaXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wydJiSwCpaCLFveCbrG66HCWa3e4LcftXcJ1jeAjLU1i2WJggnJU98EZrwJvoJKuGGCdZyCSi5fSFuWi51sndRe",
  "key1": "2mSVtvfK3cEUq8pMn86QPHbvg5JXz96veH3jvEjaB1SEacp9KsRw3rn6eEGhriYe5qkSvwFHv1ZMFaPhSmvH4EwW",
  "key2": "36Hs73MsomqtRq2827J1b7sCY2GbnJ56N52KFvdgAHiAukSJYNixBvdwQksh6RSohw1wGXqPa8nWYMpDUMsm5xPw",
  "key3": "4uQPQqGjJsJAo5Ktu8HTg4h6gGDr5LqefxNfFY2EhUxskY8f5WL62KrVSjsYywP2x87Tr8SoxUgF9FYXqNaTraQN",
  "key4": "4uEinT3iUzmVJbbM1bpRrYnhVDSQff4o6Qhmt6YECwjHLyNunUJbHXuUJusNtz6aP39wUffdfwmcnA2TRaMbkEah",
  "key5": "4iDPxfb3VSSR9sWfEjngqwvX3uUgfSxArotYGRTcvmEyG8ZQLZC8b8R884oMMsKxedU7ZRW5gZMTa8uTSqsfsypH",
  "key6": "3Tip81pV8BmB2MRFmoipJ8AkbXMHWZSwHmwLsSsSjeiqwMhedgE18nHTW8A9Wte72dHqEjWqZeadz5vDbSvoUzGj",
  "key7": "4krKg9pDZ4AUxdLL3U3yNZGazshMc36NVMBaYtZ6E9howE6TjPV2mrzcdCnTMZcWYCk5Am4ms5pswsoy9zCahVNE",
  "key8": "52R9HRFGQax7CJagHFN6ysPAGsChDaf4qKXeZe1zbeGpBvwQtJaS9ncJjA4ppmyspgFrVU5p2c7NiCXLVdxdPvkp",
  "key9": "3EcpRjeh9gDnMxPAqNQU7oHL629y9JP2HCw5oPwBMQQpBn6hXwvwY26gMutKSNrXYqQdrJN35oWWv6eLshGCJfQd",
  "key10": "2Dwn8fCdT43tv9YyWBeEiEoLouvDjaRRvnKGs2F8JHc3chYRcAhHQuEQn6M9fnj2XUiRMQacXGkZz6e7bPQACTX2",
  "key11": "3RSwwvTwvDQHidbCy7KG9sWbPxQQaco2YitAMyFgdyt4VjXrgc4EHtdr6m2cZkvYpaSYV11vtLqMuKVQUSYTyipy",
  "key12": "3xggmwfhUR3o9Kxv2UbbsCGnLnJP2YTQQVe4cHgNcPPcAL2Gcpmfn8nRcFH4Q1L5tvqMWCfGChBeTuZWETL5BSxP",
  "key13": "s5c1fzfVfZ4bJFVyENDbBHFo5PBtzd89VgVz91noaskzfemzcUJmfqeL9kt9gQwWhg32vB9cv7y1m1fQHpCPeEE",
  "key14": "3f53M9JfL7u2p82e4YxPxgpDE5wervLdztDFphvEg1y8issQM23yaQKFsy2X1VEewu1K9TvsGUqvUfWcFBY8Fqg5",
  "key15": "3EZLhtkj1JfEbCgD8n8XHhnNaQKviiwfkBCHm6t138uZpkhFZ2zM9fNvimH3yH38VR8VF9ySwZJewDbsxp3fgQ43",
  "key16": "3DP3TndFwAR1aEFrDfwfCmk2TeKDjqjpLDbVmx7u8zqhST1pgfN6C4G25BAkuqWwBqEDeTL7rzRxDZKYfXAqPyB7",
  "key17": "3R3vEcmzhJUagQDVWcnHi5ctQmDxKxJ7BvDkX9iVg4LnFaTZX9F6pk2QS4RMPN9gAckRwuY7C84LVMnL21JWB1uG",
  "key18": "2d1sjkizPNQ2XiyoKJSx3aJM5apLKhhEULbYsr5KKEoaDZBEEptEGmnc8z34diPAg5aUixwG2tubHHTKTRSbWReU",
  "key19": "4Fa3B2J3eMF3h6P9SHpUNjFWP1NHDnusU92uDDmcFg4RbkrbpdC1nSpDLejagfcSjSjDf8rPYocByR37f9jEMPar",
  "key20": "JZgTZTLmaZz5t5CzFWj1Qui5vUH73Hhg4vGGLLg7cipJcbHVnmdKNqw968mNaXcbjvT42WAUCbFELHhg4RQctMS",
  "key21": "9eEzBkzGVuiDUbAkJSAhs8n9N2xi2cWdw6jHafbNf5C2mZKhPD4snefCZrWWeHnLSGP3yZ9wCzG8wswrQgr9wnk",
  "key22": "5CFUL7bdmAJCReYHU3WPGuELgWJ66hoCMgz2qtNSmxZFL4ht6V4XWVxYFj9iu68G3RpJZ2SLzTA38ij2rDgtoNKc",
  "key23": "3WTtPpr263VXX3PqyqAB4iBBvBY2wBThNkowqgbdSgJdtnsAcU87tTSa8wyDNzGRVRGyKtyNsfE4EWEwiv2P6LNV",
  "key24": "2g7pVtK12JEhk2WUSetzCAXmD9Qqic21HtVtZsNFuraDVdMD3KnYxASa1pT1MjPEHj8iU8w8jW5hcV1VQ9Egw8g2",
  "key25": "53vVBhMkrRSsBojamAhQUQNFEfa63jJFZxWhmL6bBZF21th2qkZYrkhCLQAKzyvMQPxWYUKntySU3EeAZ1KcG9nf",
  "key26": "4Qgu5bCpT24Bt8XD5hJNo8sHq3CpGNuiDjXFEvxXFNX9mRVKCDjKbRszj44EMavrU8DrVKzhhRLrMgJ1bbRoUqRi",
  "key27": "3waeBYVQEMfe6MeYpgL3YDQ4F39Qvv6GF6W5E2ogyEDapaRFoKgRThnqccM3nJsqW4dj51UP22cQRbh3BCer1XXH",
  "key28": "4sAhsohjzxT8CFetNzmWfydbzCTKQm671YJnGbiY8NAGCjV9CtDnTfiiUN3Umt2XKL7wFRoP5xoard3ggHtpgj7a",
  "key29": "43g8d8RgFRgoXasqg4eULE18UdAX9sqrsht9AqS1VtiuWs6vtTmsN9v7mR7H644REqQHBtNcVRHCMaPMjy1ZHPx4",
  "key30": "4PRx2yWx8KRSdJ5LAUzNyDinhainL9TqwMimwcXkdwMWdQa9Z18HzA8b3AqVB5fZtiGrJRDgqXkgyfHVkXfQieDW",
  "key31": "4VqCXyxWjYVR9ddQbwqZJGdQsVarGTFdopgnutYYC2dfsn8v5bRgQC3fqe31Cn7s82JCxQmud93AYd7MVxS6qjFP",
  "key32": "3y4wDPGhF9MRtMVdkuuSLfY1pTXMAfaGm278p6t6QmxVkpAw3KF44kx1wsEuiPsRofy8gDhRgWMz5KX6tFPyLBkp",
  "key33": "3KnWrbbVwgqH3vxMKTW2hpX8NJuTbR8er9T9cTk6FSwLqEHURuFZGECbDASVpTXErMFo4WGD8Au9sf2J1uvQGi57",
  "key34": "qwt1od5fDBVfmeec8aLJsnYyWWsTaXKzf1jfQVc1yjukKda9ADZhVtshaVc4b8HvYGpbaMk4nSZqt6NJWSY8Rfy",
  "key35": "4TCCstdg549d8WkCFyJtbkZosWnG5UewjKjAVqpdCdq7m46sV4yCMVkfG741ha4kqHbpanQwEsvXvroNXEp9fM8S",
  "key36": "5AccFeAboDd5NUL6H58ZVukV1x2NHLa7QGHA2UojDjm6r5samFakXFwwwo7CY277ee5tYgoRR7Awnmqk4nAaXDNa",
  "key37": "3syLBFZqfDx7SY39mYUuw2n1p38DNovGjMybXtsPYZWRsgXGKd3hoarrD6JcRxK2igY2NyFTp5PKk61ExJJz5tYG",
  "key38": "5XSUbv6nfKNbh8iEMZzVKVQHUti5e21cchyjvey7KtCkuy6wfyZruqUCkYPwSachXZV4ezqhPxqE3JD9k9PwTdcq",
  "key39": "3s6Saixc2hoGcSWym4fSuyriHZMiupY7bJFSBuX2TaqmSKqhjVWyS28Vcswt1Sj2AGXyWD8cPwJGCnMoH6YBrar7",
  "key40": "KWkiNf5BD4BhrYfdCTEHM781XGDHe7qiGoCQx7ornw37vExqiuCjxi5L4PFS1oH7ZtsjMz1DciTQEv98M46uZww",
  "key41": "2FbNsBnnrL6752yTnEAA287YhGSQUWGWYwm26VEbs8wKzt69LFnAagnusoYR2c7v7eg4cvm3D2GtUVZLjWTA8Cuw",
  "key42": "49eHfdDXV6gspvFZ9Cc2NkP7SzjWH4iVotEpyoZgpna7cAvnzeeijUaz5sNWiFU6z9h6W65M1iGLWKLXb6xxqoTK",
  "key43": "5jpj9SS9EMyaZMGbFj4bjwwGeC5FKpRzJ9DWaTbWqC6KpUWeVbZVee9WnS88R7CMn4gFpz5GW36WiiiK8GRHyvee",
  "key44": "5tXzpgCfQ8ozaMafHyXuwu99aWguGwf7QtitbAMuNhvzSHi2wxd996tKiuzZDEjmnFWqw3zP5vA9gPMsDg5JiGjP"
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
