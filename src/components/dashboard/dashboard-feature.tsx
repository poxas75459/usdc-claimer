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
    "4bpe4yn985VG2jZcW5dNRugpv6dbSsUXtWXQQq24KmC7UebqtNj3oo5PQcUcpqEhAm2ELsxstbw4RZkmq8q8Us1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyZEhoPnruk3JMCG92pyfcMaECLdECpYk1TPEmR5FkirKTP6eirMrDzCvCe2zAYADKD5w3VoQrNgCZK6FT4Jkyr",
  "key1": "3PeHLaz5FGJDELirtP75PbNSvbwTC1HCVYUCZzBrQskj6CP2o59iS2CqECWeCAN9cXn3VmxCdJXjF5nbg7UaeMZt",
  "key2": "5xQJBLwHHFrFAU78GjLWqUymuufo9Rtaqrnb7mW6y4f1LtZhnYCtdFwtae8Av66SJaaga139mdNzJFjzFgs3GoKv",
  "key3": "55ennmtzDdDSidVDUcKWaVSGVM4HMXRjyAhenxNmY7jG2eZE5LPeFFTvXznoR81TT4AdLd2mgft4un4PbBpxvcqc",
  "key4": "3nVcrZwmQNtQKiycQWyofPtQ4hjVSzoV3aH4aB1MzKsszd9kMQ73gtPuNrXAZAGGdTccgrQFLAxJwbW1HaQx1UAu",
  "key5": "3LSA4VJzpRENAbLgerm7LovvuzeReCPFJdscv7GjsEpNnWeA1X9EHrPV59PoQdbyS6haZkMFHqhBGUVTjm3mtj5y",
  "key6": "2vwg9HzQE6aSzAf7Y89ths8riTC4c8Yi7JuBRbWgGBinAiVXfba2BrYmUqxtGEmFKjMx2EQu5vxttMvnANj8BJfq",
  "key7": "2KoTLZskWWdJoDxhuvWAss284LZrUkvmghsAimNkbT9ZXpNyLj3dRra7XeUc82M8xyXnu81Zm6N68vTSPTx1CEXg",
  "key8": "33WAkxupTyhpnvVQcudEHvaCSnWhFuyxZUSjpc3H9uTeZitC6Rn8GhXAezHdSByFfdPPthspvNFC62dwG2MrM5fd",
  "key9": "zxN6KsEmJgGVh2mkQYbALBRvUQxfnF1N2oKB48CT965pSERnLJQx2XZ7cmmQWHcs1T7G4QSSeoLuJQKuQ8HxTt3",
  "key10": "5jtEfE5d2iDZciLysciephhRHCCfYo1F6xHaqf6g9pFL8xENkWyyQG43C2R1AsWUvxRRUGiEiu9GcJjEAYyqb5hL",
  "key11": "5qTymXNwmQfVtTVuQHjbAvB6NAfj6YFWd4jA648kfb7nDTsiwnMC27CXyZYMZjT6RwS3Uqyp3gaVbdW7si8qBCxw",
  "key12": "4YirNGz3UiQgubpns16z7Yc3KnMfD5h7TNDnUS9LxcBK26rSebdY3sEB9cmdvQg75vZWz8NHbWUNRVCbX9e2BmH1",
  "key13": "7PSinZRo75Nf7vbw1sxAySMeMt8sxQHdZDDkMqHqAhMjL4ExuPDdJV3fNg2Pjv64bz5QTQHTwnX9gxMhaGZhXgs",
  "key14": "3jH1TfiSWnUi8NBbV1PXWACDAZNWcVsstQVDstFd1oH4npBA1qRpcsoQdkYvTACqFjDUt6gGarNi9nL72F8bR372",
  "key15": "344KbDSdhXuEG2SMFxMouxyEZ6mWt5eRCMwzKWvdGJXjN2WZz7CLu3VEoimUgxSBcwhNyQUo1GrkvSXDJ1SCLSCR",
  "key16": "5fzzYBzue3ktVRXkqg7ZP8ATFRHvQcD4Cwk38mdd8zsqBFEDvs3iG8obPfDWiJwbXaxnfNkGsikPM14vWzmxAqAK",
  "key17": "39jxAEhN6gdepAh94VbokQQXu4zSzbY5KjZ2gEE6K91Cfh6k6ZcfU9F13FZR26tPiuTeCQ9QZtJ6fsr1b1PTGxk8",
  "key18": "4hxkZKkPVWSQhwszZCwpagsGwbn4t5im66N4wxTjY7Moc5jJnPBRTvUJnBekZEMhfiouWzsAaDFkqXs1JMkG9GSg",
  "key19": "Y7Yk6JeCjbcLdbdP5Q5KgEZw7C4Qjai4EDSmiTa4f8zvjUdp538d5rCh3bcgCAiSz19K4jreXr7eyBYpXb86Kkv",
  "key20": "2wZAdDPPAq8mVCzdEH69Mf4VyuNxPf6bY3xhTe3BxpVvZrUR8RMRubtcnbHZLtxstgHtVeZg4aXrwHMZrPRV4SCY",
  "key21": "3cAzKRjYMQHyk1b4kU6HDx8dXZDNM1nsnRrJKW8i2FHuxy4SzhWxj6NvUhmERAWQ3iTsRB6uvwsUTLofGDu2ESR2",
  "key22": "vPYaoC5uhjqyw2E4FTmtXE8bS8tQiytW2UC4XRokG8sBPkCf7ehSFmGRp86czmHXTssA8ugWEHn5znPYZvtRt31",
  "key23": "kJBjf8xahVkrcueU7eURZreWRy9ESBbBJM2WECD39Aeue9CvBTCwaDTjjVmRuA1yTmdFYKfoWgEzqqCmconXEdJ",
  "key24": "5DHJvbbqnQTfACDazrxYUBzWygCtpgeLqtAf1pWPQfZJNVT7taWZBhK6dFHPZFYTUuormHGyvBU9FwRq6G6BeeRg",
  "key25": "TSWcAiEK3SVAH4z8epCaLMsPwiBPe68ZmXPc3tYUQsfY1yVgTp2ci5bdc4WwAbJhLDVTnmd4q7BvdxmKbztHBxn",
  "key26": "5vMRRSa2Sp73NENs5x9ypg5ZtMe25CyxpgCzcLaWNfFBfwNtUQ7TcMehTS13S1RGn5Fzf7iBBFmqZT34u6ongdq4",
  "key27": "F7mSwRkxvzJQUFboQVaaxYdsU7m3YYa8i53UMCTbQDGkFUnKhaiF8nb4SrUujiF9pxtgF226oYokJe8QE6ndz1j",
  "key28": "4iMT69wGHJhMBVJLffwJ5SdNjWBPLj3nbQsLgaF1NsBS8CvQ3CDznDrcKbCpT1vjxJawqUQBTHcC66iWjAqtkGTJ",
  "key29": "5pyC4hnDy75o3geinhuGBjnKtahgot2vB3FeLQYFWsppGnPaTY8VhT7tf214sKNNumUzQu3JtwTRaqZRvWVDQszx",
  "key30": "2KsqN6nDPEiU7fWY1Qc2upJ5GK6PrFSTUhKbrJLBCdArQCJpf2UicGmJshmbEpMpuyFUmsuu3q4CLBByEou4ZvvT",
  "key31": "26AJ6UUsn7bgf7b4fmmbxWH7vnSSqAZUXxgeCXcFvywh6c2tbXdBiXXoQtmHBwCr3B2yyLyTvEo6w4Hs3y8Hbdc2",
  "key32": "2z879PDhyNNixYNfgHV2pmQyDha4eVUyr3Vhj1Ayp2qc8h7qWVSYUQiKLamPCMm6uXiC5MXYRUNBPwiZjbDiQ294",
  "key33": "5v8GoUmiAFZTzuacB1Mc8WmgpaXAthLt6TUu9BucYcUFdGiNzNYA3yz3hay7jQiZW15qPShh7UCU4B1LmbvyXYuP",
  "key34": "542rnwcBeGgyv4hk4GxUsRmxQ472KdvFjjTivcLtGLSNhNMtNL3oojgU3j1LwQKWq4amgf2T6bMqFFMu2VHJy7v8",
  "key35": "FSyx3QuZcLQyWjd4Xqs6rPu1qKQnoZRpWLnJCniJMci1wbx2RerFc5BxFbRXVEgo9pCoiHAHxywUnmBd2aiWNjx"
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
