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
    "2AVw4km771VMaJREj1gqrupQ87bkWgnWNXNu18MQKkwMh9LQ5W5pbVDQ3mcuooCZpcP2r4Vtpih33g2UKp3Wnn3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iAoDawJVjTfaEUJz7pk8RDFgiMJgDuJw2L7mDrbGNfdvF5eKhWvqeoiFtHCqhQYq4yNgQyWe1MdyWQhjDiHcMGd",
  "key1": "2JUcj8pR2hsdNcGdu3rRf19b9334wqUWDctJ4xDueRxfEYB8e9VvTrTVHCNNwaUvXTCuvKX67zbzaNuVwW1sFbup",
  "key2": "3tH9Ncqn6ZEiLhF2b8JSFBmnxTaA9TaFYnGowor2a9RqNhceVUm4BZRzTtNAGpdutphABKpUeaXudGVgb22pq9aq",
  "key3": "fr5ueWEGgUc8wAAKxkv6rg538LCDazYtT7oV59s3QKhijrCvwQbDME4nCUMMsHRiN8k2PFzxtAy2sBAxqsr7xkT",
  "key4": "2uJgizpHJHMsd2B9hLJLqqNiuv7ijzNgkZMpEG85w5rgrfBt6UUCURS59bTBrJGeYh7z8BgPVF2a814tthdgGKGy",
  "key5": "5caEjehMTcqZ7uvNDvqL1bMLMHvCxbG3CzfUTHH9uRvbuCL8wNMVWJxMcoauSNaCKU5byWYkQLnjzs4mB9C5NPV3",
  "key6": "633fEKDDsqEPA2uJo47HaTiUKZctRDwX6BqTymB5f7VZzhkQZjoYbjN7Xp1qYGtVs61n2CgNjwBrtchSbt9Ur52J",
  "key7": "3Wk2wHbehYQco6qfn25bDfypDKqE9tDmwMTTtuwKe1e3yFFcNg8kCYgoU6ij65PztULfGLfpgoXQX9TkYNSHKZ1Z",
  "key8": "471q5tHEzhuXukW8nTCfJXPShQ3VmMD2SgpPjvGjUJwYdugNj4FVxFezp771naeG4cgNb4qbdKGYGPuMTFJrZMS4",
  "key9": "5Syeg39sTGo7RzEHxtsJn9mK7VAYksKv3tQuXzQrojfVcmqbpE2c7XDDGJme4vdrgsQgKxBvGt3MJ9tFGP8CtZLx",
  "key10": "59dna5EfxkfAwqxjw6N11mFV7Vczaw5T3NiesNZidjx6hwz9nsvDEHMBzpXT9ByGzmtZZnGo9KCEjmZv5cBaqgnx",
  "key11": "tKNQ7ndTSL3vhf5vqCwcE2jCMq3MsVBMRqndvp5deVuBVJrJ1YXc3BupjDfLVW5Ma7t7oqdbu9esLySGkrUWhcP",
  "key12": "4S8ZHTvtpEDjafw98azS1pERZuevZmef25sZQDCMJNeaw1ex8RkBLxVsonF9EfbLXCMUE2Kpj4NhMNpoVnUqQteY",
  "key13": "2zMtHHsRrxHqHExn8eGXx5k68GZwMH6Lc6VQsjLkETsqqPPo6Lbw2McYsHXTxnMZcg4ic8S5CVpQVEpMCBXBJPop",
  "key14": "58NiAy3xVUDrcWfiNsjCX9j84WFzqfx6xMeFRM95gfUQWT1iqykL8BnCXZ2VcoSo9zV4sgUun7gRfPfyksrbUKfM",
  "key15": "28zp8tNhVMPrUMyYi2APxKFkeAbcxz9BebS4Yc1UFsajjxqovwahEmG87THzp6JUax8GRG3ZkbGcX2ZC2LN7idMv",
  "key16": "5JutsoeC1uTQ92fojfKL5QM1V7mbcCjs1ZVH5LKiyFd5Ap1QTwuYpadWBcdEgRzis2mKzfceyAdbcSnxd8a45NWw",
  "key17": "2Ad2wJGyehvggYJG7AK4NaPE5MC1WSJcex5su5ieN7HY69YNCq3A5jwkUBwJkMLf667H5fmxhoyPNRafKUr65pfy",
  "key18": "2GjVk8E7tVEMuk1shUshkfzZYgLBdcMUjQWToNPEhwBs9xkFmrQkTwRnazBZhrqKvo551ZkCzNUHPSGbKnnu9WVH",
  "key19": "5hnCbdUbr6jF6sYS1Sxis5rFhDMypvEwGbZw6HaHob2y51fbowCQ72PDjtYGAHgjnU1gG8yWJht9VxFFa8Pnyjjo",
  "key20": "3J2unWdGo65v3iqdcULieQtSedNNjFCg1mT6tGqanoMQG1hZkj2iA3ocxoE1xrLU4P3jmP9mhv6QxRcJRvdAgWK7",
  "key21": "41M2CjHgrzCUXbgbnENX1ZqykPbNuJghQvRWC1KMM1vuvo9mEZ8AWRmoGRjgrcB5VKsQkRJX2DVXmEaM9FNdD93r",
  "key22": "3Qbf5ARf5D7dfG8xrv2U2tHEJAQfSYm4UgsxAJeB9QFacta9yykMV8ea7fayAkZp3EGvxP2PztjF1HuPuSLaLZzz",
  "key23": "4LzFSdehbzNJ7mPRhka1JfJBsWUrhQZhxnhMLqUHHrxWyLr1uC5CaaQN83uEU6CfDsUFpBBekgRTWppRDA2XqoFj",
  "key24": "49Kc9giLHmnpgv1LMWBBkbZLSv2LbmAgYmxrT5t7C7RvM7hW58CJzCWmnzdSGPhKGKRVnpHgqSdpiJGcovfNyEfX",
  "key25": "LkWeMYFCuiVSrHTgn8qj7Q5F3EPGYN2h6dPun6f4uHvpepgP8CMUqSTrjGueN6n9ZbVxQ8QEddobSGQv9H8poSq",
  "key26": "3691TyJMAwQrLJiTM1FGvGMLiUqXkYjkaHsRTxaR1uGbfBjzNp6vEgN3mwkRxEFifdcf2eo5ZJk5jivqCPMfDuJu",
  "key27": "NZZce7tmX2oBuUmwPvyhzvENsQ7gQg4HbvnXQEjTEJhrRJdwwzeNtB6NE4173GvJzeM9wgY4L9tMEsYWVo5pm1P",
  "key28": "5vY9duMUknq4oUouQPXAqAqoN8uMRMn4LBA3WKHegPzmP5LjY9USg6mMDwisF7y3h1km1kFjsyk77ABVYrnHipRF",
  "key29": "2zbpYi54ue1tfxXYdsr4ZbQtKycuQrFAS2HWRopPUcV3k2utgYGBDmZqKbqsWYRUrAWL1igNUM7C14FEYVnemGew",
  "key30": "SHGvdSohHxsi9tPujhhJx9nt3VDJZiXQvF4vQ6ywwcnqNG7euEZHF6vW2wdjBn67FHPHUpJaYft2VWgU5yeKgHi",
  "key31": "3Zzse3W4Qc1m2HbG9rFr4nDCj3tQZEQWzoSJ7EeqiPGaoaY8vKTe1fypJ3pX5qnbKzrk8ED3DzPzPmXJWYmmgwet",
  "key32": "3L8hkiD7Fer96dCx4cM2aYboig1SRWiUy6jwsyJgwgqK9eewJHZ46xA9pnAHkYZgzWVV6Hb63d4upu83ikkTNNGA",
  "key33": "wk9s6zzKXx5JQj2iSE9Pa4Xp2NaF5k6qKNT1Bx5y8tHs8fmxvVNGS4LZjaCTjtU1cRYX2QFwsVVtp65MxFyYztn",
  "key34": "2XSkiAB7FgamopdBy94TWqtMPWCLkLoHf1Y2wB1C5ZQYgf5GEUNZy67G3jsQLU1g4Gfwxveb5UTGYHuJxSkVUYSt",
  "key35": "4jpY95gP1nmSHmCdsbB3L56M3UvAYEkkVxmCq4PE6ic2xDDpnAesbE8efV8wg2yCKVc4miLQC4acQzYwrQEQviSg",
  "key36": "4DYMJu9EEoXZ2r76QsFcrR7fTo5gc16Zf5Uv1JujuGtUifvGXQY8ZebqBiadhctXeDefdSktnTWQssfBGF3U3xyb",
  "key37": "36AZLCBC2riJVJbzS4uT33zimzqYmjdchq29KKtqsTjwGS9TpddRgdRzwfLJL5Ci8xNrDPvUivmFN6jR4gc8HxcZ",
  "key38": "2SBWT2j281EeD5pByxy6uVQgCTGuAo2M8AU3saSQPwCfLZjY9QtATcm7g6WW1K24pShFQF8fLfBgYFTEhyGSvrxH",
  "key39": "5e3fpFnrUSdzMKG4WdhDkJpLbXrXYZfwYgpaQh3VSAh3214opBGwgWfF8yDgD9yRrrJzhmHJV47dRtXRyXgQQskA",
  "key40": "3rq6UAuhD3zGmpMLdn33RwwqQkPimjEjjwje4LZc5QhjV4NYESwWjvPJyE9z3x1sxb844ewBpu6AKtsj7PBnEheb",
  "key41": "4v3N5EvHwd2NDCKi3Z3GENzo7CV93uziiV9jfLeJUovyJ5oARBB6thfQcPGd8qKwp3QFeRM8AbXKXJK5LfTEXWTK"
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
