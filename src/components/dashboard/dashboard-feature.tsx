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
    "2cjSFiFiweEWPbRtJbUPuf4xPgWAtc31K2XKQhTNVU3b8DUZgoMt68gWur2WqJM5iJ3TMn9yXk3YMUx8WSD3FitV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ds5Pira4ChXsmu19kwMQSUBL5WPL2BNh6rfy1Wozyjuup8hbUZE4iLRs8AiDEkKLRhE9ZRCBB1QAULB6JWGX7sC",
  "key1": "4ZqL5w1BZvEGG2ack2XPB4V2PeUj4rpEHxFae1VRxcWBG3FRrAinZvmFskPiF2J3njr9y6oTgspS5MHaemVZgCpP",
  "key2": "5ERkCKy15u7DPGDuqGuffzqmYXvKMLTAzfEd4QUVmeUsGtNg4zk5USNuwoBzoFk7yRq2tP9m8ma5KB2Ybt7VXHec",
  "key3": "53SWmAqqcVBJTmvAyHR36BLCj9MbFyTg7WXBLmCnuh1sQ6KGhPXbJcjeq58CUuL91627zNc6fkZca3yWekQyZjm4",
  "key4": "5AoLGeyhoHiyDwp8B6Xz1zPnEHQT3d1ZU9HZTRbjT1yD19bNQMs2F2KBpN2VNs3PZYV1HBB7NGXXMuDoHsjkbsnr",
  "key5": "34Kvr8Sc5WMQsjwfmD4JVtGqF8AsR8KKedHNnkNb1MshtpvRS2qCwmjrLaBS2NvNW7EeaY7P7Gty28wVdPYet942",
  "key6": "GbFWQ9uEQEWFqtVre49znLN33r3dqkcWmGtDtnxpqiuEAcao86xUgEoPCLuEfjDpiDcJVD1hCoNMVoFLiLMF78v",
  "key7": "1xQDF14R6oxQxcnZVS92uRgn3e75k7gyjSQ4jJ6zdLXT1oiva2BXSATDLDw6WzUWFy6pTpfiZxWzJaYsvFh5cJ9",
  "key8": "4ABbprbpPF6xcCEe4NCUuva69YqYmTS7tkm424AMEFZk8tXsmXvfepv4KWqNshPNCxTVymHuEbsdiVM5vwLeJJ7K",
  "key9": "52m5KqVZxAi6s9Bi49eWwz4kyvgZnKZKn2P7PMJg8neL6xY51yLSyCEg57aWBzfp4uGvMy9rqFXN5MSnQWUFf6ZF",
  "key10": "5UGXfr3bR8YQeHcr2gxcJxdVmrDoH4PNpbE7ySnr3Ea2w3PGGGs2BCxavF8nEGWZmfPSzfjnbSZ6U1WbjLFsSSuT",
  "key11": "3smrsnEimbYMrbjEqtTrQZNZxC5goefj9KWSP424jM5ZQmajL71XDh6w6pJaQntSaRF57JDALosVbmVFQb284xvc",
  "key12": "nwwo6poBo4YUUw499UobKtofiZ5dRFSb4UK7hNCC3LqG6pBffGRw4v9buAwvtE7EUD8mccbyYNqMiGBB6aWhVoJ",
  "key13": "4zNj3qRddKVnVsDmuFvYeYFD2s5zBov8qL62T8KvpswvwBjDV3kvw2nDnQixcWpHKqNBgLhhMgw1m8FAbAWpYwMZ",
  "key14": "2QoCRKewsPaKqmWoumN3FSyUHMukeVjyE1QhXABndpvgLmTqJA4qF4Wgoj4x5yjckag6iG86Qy6NjH6wN3jFco4",
  "key15": "4t3u5UDtDyg4XtW26PweAeRLnFTXuPrUQq2cjKvvWgBdcrKi521dJ7nCqnV4Bn1q7bkak3Q7ji2mm5sSuaDNxi9a",
  "key16": "21WbFjUUvEnbhAdS222FToMDaXCqrnHr2PCJms1uHXv6AAPesikSP83LEB2mDwi6WwhKxLfuyXzzTbEca3wWHaZR",
  "key17": "3ya8hoXVhqtgbYWfb17fHU7DZrUAwcx5thhwwmZ7PDmtFwsoqkevMDRsFHxKAzqCJFLKd62KfWSeMNLmQo2ioaQX",
  "key18": "4wNcENBJnTeoL28wFWBDHk4HtMu9yu4RFdotwxJSAjg6iJ7NSnSFmaz3cnwHC5UnkszPq5sRnYe24XCje7hKMoUK",
  "key19": "3WF46X2Zj1j4AXWj1khd14Dwu2VGYqUKjbwFFnACGKDkAqiFjsqeeEU5CTj6xbv9ahCuRknibTz5f99qFgNN3Tx",
  "key20": "3SZSeHLuGMMSVcoqczY9dojhB4Mt3v2chEEiqhRngF38iSs5BX3D6dt5vvFdUouM9FoZcrqfH8YanUKNMsud8zBf",
  "key21": "4HT5vdzi2gSk49kMSQviLAGEHpzBd4Qp1AqEmK2fwzksF6BZUNd6yDfRSRrXFYCuy73b8PW5kYS4gYzPe7a4XCeM",
  "key22": "4Pyd54ECA8QdhHRQjvURkMMSiseF89TyzeWh6MgqQhzhiiiaZwaULkXU9gg2Q6jDUVmoD5KvRGPFGxa3ikWx8dFU",
  "key23": "BHNzTZUuyUp4N2UvCVkWqt7WnEfjAh4pQFMCQqwDPWxL4BtcK1yGYvQ3Ym1CRDU8Bnm78Cyse4GPdQVy6YBM4QZ",
  "key24": "kLTtUb2QpuDokGz782TirzJPzZjNtipvxjiV7sx4YYwHc8agHFECGkXb3ZGrfqnAoUNiewzM2TR1bg1AMfwkD56",
  "key25": "45QEeccnzbPanU3mYhjo255tbUU4L3YFhj6Ae4h35x6gwRgNcyToYyWfwZcTegcE4XrnhhiDXRUYux9z1tbAHxE3",
  "key26": "3qWGz1rXoUxJZvhpKBk9uSLvv3qXZZqN7wWvh3x1fEVfpMmJCHE6UPWnJaSWYY9c4ANRfQCLQVGEfa6aoJEvgjeA",
  "key27": "4Zd7DJPXdkehmo3iTvK894mQ15vRrztzGQvyVjC2oVRzdx8kF9HqNHaYhLeq1WxCzoT2jx3rYGk96HTw3hfy4e3T",
  "key28": "t22iFn9n2Ca87AkfK8XEpqBNA6nZtZGirSK85xnwT2pxVchutFTo1jSK8uurVE5dKEBq6ET1XnBuBMFoWWtNYui",
  "key29": "3pqd2pedJegkomnLKkpGxHW5WK9WrYadU2Z6cAbb9m727qEYptcnmGiKU213S4eXpgoeiEBtZxKjM7akt9RbaSL2",
  "key30": "4wqnvhfVWEnkAVjmBAZYoN6uMdVDxMteuMjLAqiQcZ3mfFSNekc9tVfH5uCeYDWTau9ansFXV7iPzKutBKU14jbn",
  "key31": "4XRS9QQtDYrUSSPY6BvVrExh2Ui6yJnfFNoXb9RWZmgE9RKBWAB27KEfD9xuZcP8RzwCYmoe9PkAvs4bt3MA5o15",
  "key32": "Eqdgn8DUoMHH1AX4DPnEhpB4DvLxiQ19wnS9soQ4rVDqEkJ7epwHoLaeW42QEciz7g9gRBhciXRAnKA1EfwuaXy",
  "key33": "2hjXm4LWEwQ4ZwRdgcWvkVurzkgxxWzn6UhDMWcyd7mCvANFZWQqaqT8PUr6zocuY4yh6WSpHnTDThtGXqFTtiq4",
  "key34": "5E8UH89Jsk6zwUdoth2fzpiYzcTH5mVBWsNEZxPm6uthquUsYS6vRAzGRkSdP2JSefLkGyCwtn6MabGeEm5VDnYZ",
  "key35": "2qcdGwsjKm6P4Lbb5u1mpc3XG1TGantBWEk2zYnVZoqbAYN5PSXikzCR49gJR1caGRgcP9KSUCCQaAgFUD8dbtbp",
  "key36": "5pankwZr4ta3uCvB6TGeVYMWKjj4NxMzprcGSzJLNwki94kxGd5eiHBvijR3JFvLmKZdVwaujarCoxmjHi1Mn3V1",
  "key37": "4LVXDfCR7hJCKpeoeCWVnDKS3XQoLhu7qomSeuRRWTeiFtaaJy2qpNBNuKLHYvJ4aGf7cXX3rQjW8L4QPz3Di1Vp",
  "key38": "55qE8BX3vzbAqTf6yiap3Qdpd3Zib32zcQTjDecMK1myG2ZNJgQiZDgcW2CKVc5APgSZ9YL1t1oBgkourRUnUafo",
  "key39": "2MVdrJPqt85pRTJ3qVdCkn2FiwL4jBPzdtsrwNn9DyjfH5zc7y4aC9D3h878j5GPrTMMB2vD3Sd93r67DqXpXRXq",
  "key40": "621MSCV5cfkCA3TZMdHyYVyXBha6wKrAcRjLHvXYPdjdMnm7u1gJAUx9AXSZMaY88zZ6WDhEztF5h81nQEv1Vs66",
  "key41": "5iYPc9MQj4m6tSfqm7ne7eFmT7Sk5FwgKqHhC6WufCYErPnH3iFGTKGPx4bqu38nhKMYpWRUH8qFeZaFhHhKxu8F"
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
