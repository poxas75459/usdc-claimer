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
    "3sBNgE8YJdNuZ6zWyABHzWyUyEdz7hAg7Lsk5YXQXZWnXPjffGBhvGPgDCQRvtxXc55CsReXadeMmfeusx9jNhi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3pcbTYw3X9qqtYoSYLgRVKB84PAoe1nAty91KCDavDQgVwwoBewtiuWDiGkTuDTiF43q8H7LmUqmaCPVLSmtTv",
  "key1": "3hc1fjEWK4gUM5Bw5escS14tttr53uzTxpDJdZKaG8UkfMf1KqgTtjNqHueNALfvEk14uaiUr4jCaSWimCcfhE4e",
  "key2": "Bo8qVjQqjNtgEj99p1P4J1rPLGDGbPWcZmW2LKR64TpVLFm6j4A1e6RmtXk39FG9A1UAqi4fMeJBuKpthRrfwEa",
  "key3": "25XqCRUd37iMuzB1r15oxL7oKB8vxQLR89AAReJMJGibZuRzvoU3bN2cQQdn6amHM8JRtjmy8VCcsJTW6WB8iFzH",
  "key4": "2s1HSJzPPq127UHwjBLVUn8iKSe4XfXH2LXuRcmk22gJ6BgD8HMjCZ8gPcqKyiHrW3F619wkNmLq6sRMs56gNt7V",
  "key5": "2g5MuygMb6q2CnmTX5fRaM9kZDwfENec4ahjturUqcSiw3hvggZ2gya3yx2egwgTadP5KBcVWAEexT28jsi1HJ1U",
  "key6": "5g3wk4fnfN1vDKnq6Wu2zjxnpPN5cHY7AQd4w12LogtDAEb6UzoUf86U1vaEzZgikM6z1eUM7trV5uYN2dsq2biX",
  "key7": "4w51PUg6tzHahbgiWp8Xc7ajHm2xAf8pc3nrc1Mgm4mpncc5p6RbcrcVwHKCoaG7wY45jj4pb6XkMLEtcYPWGerY",
  "key8": "4N1M28MqRtZ7M21Q2umtudbdcLuN7dgwARnZtYsdxxhe6c3ohsPBRJHbbxzAeWfrioQJSehkUZaKHjcwaY525Bz9",
  "key9": "2Vyzyp1fDFmp4cE6h4dYBZM63Cbn3A3QszXrqxenhQdKUf4wAWfcWePBP4YdssNV75PxyJ4jJdptzJ9PKEvDgNsp",
  "key10": "JvAYVykyUXPCcA6YMXTqLsrpEFiyfNKhkkTTH1RuCrHrw3KTvBDEWceXyMtQduXMvD35MTQi8vHoLELEvVKMowj",
  "key11": "45zPmNUY6PgjKYmwnHyXZmvvJdUbbj2CQLcPMQPQ2gpQZN51hgEbMPLs6dtoW2Bynqk4BVLmeKHn6yjFFHNKobcf",
  "key12": "3QekzKT2oGZx4oxeDyRJabQa6EEosjNsUHomHK8KdMxcGXBUmsdt7huHrDh3Luns2fZyZaKz24Hsah6gQjxRKNcX",
  "key13": "4GbjpnrXv5pinAoedYjhsxX6FG2jmVrZDjZS2nzBuf5ds4Xf52nSde5uFsqRE872G5T9Xap9ZbjNNBPn1vv2fLz7",
  "key14": "2KA9afEFW8hUabGPJAcZ83hbzQVo8vresgdQf3AriznujvnxSFrWhaBh8V7vRKMoMWGLymZWApHRKEdmbCGKU6e6",
  "key15": "GD94VBPJjF3hKhM9mLQZA6s3dJVv5L65kNn4Dx573EMS8t59ZQXEUB8KGcijFXkjEyvkcSJKuMyTTxhn35S5pBw",
  "key16": "5f4chqyvHXUtXjREcETowJiwgxZN5gtfA2b8BGVGWQt11ecAEEVWhJPr4ZveD9EiqQG37Pf3MBp8SVvNC4GHjNvK",
  "key17": "5rSU7bit4nM6GrELnLXqxSMLqoNRmAWwAAjrZo3DswqgFjnibzNPi5k1nZikjgGfFS9uW6cRp7gdz2MHmpNDK88A",
  "key18": "3pu8vTCvrd6928h7qLCPtDAF71ve3n8WpBmQJrTSrYX1iRwg2pHNZ5F8sMQ6KTD7WxCAKX2zntMNQ5HT4yb8u1zb",
  "key19": "2BH4csv5YpBmY9NEmJariuns4zuXHKc7zWUj4kaw9v7GmNA8uPv7a1b5Df78SDrDD1EATyWXciGCPfWGig9a2t86",
  "key20": "3rjnuFwuHsrUpktSC4kbipSPFNzKoFRhDPfouxXcuxSE7qCE9J9qHuq8xJaxRfDjuZAgaMcsucCTwVaGjQ9mRduA",
  "key21": "2qvacURxcyMyuaouB7ocuz6PUY41aMfcNFpwyiqMUrSNMniRVcgdWVLb2NB8JiYjy8CM34ds6QypRpma9jxnyGBk",
  "key22": "2mkxdCYQvpUH7jhvN93PCui5RLDaDoK2WjLWXXXgVd6rVqHQWjCfMFDvX7eE9kfwUeJfod4udSSL6uGZboBZprzZ",
  "key23": "5Af7TL23cWm8vEFYeQEB1xm22GYWyTveHM8pscCKBHzjgqaQdkqmHimsB4mPvFqaHMdEtqXcYmdHieRu2CPPfy86",
  "key24": "5hhrFK7gFx9MnSrWWyUH3Wm6Fy247zGszaZVVqNc4EgERDJY6FVtZ7xVKWwNAjVk1A3wkFyqadnxseon7nXN7Xpo",
  "key25": "64Re7eTGx6HFGX3YYQpgEHAbzBh9tbrXbUUoNvxzXeREgyDParX3HR9Jnw9rwEv6sC5PjrwpHcCZhkaWzn4tVgrR",
  "key26": "5vxaaFVe5j9EyT6P91utYkaD55kMQe23bF5bMLdwWnw58KdepJpSwc2NRi9c3AnqtPFaPLLerQdDs2VXnGUEQi4j",
  "key27": "NhpeGDRpRAKqwBm3z41f3hYj4WyG3EyTknX3dP5yBqrsPArnku5U1hKi2XeZ1B7dSzWtGEdTqVBfnQHotHDMv91",
  "key28": "2zanWfkMHu3JWihVizwsN4FUBDVhbTv9v1mhPxkWtHM6sU299eN2mhS7JSLDqURTHVzajrwMvRF6bEcPXGjgZzhv",
  "key29": "3WTrdfWsaZesPf8NGPKMuRcoBorJ7RfFsGpzvrjGuE6v1kLqi4Yi2aHnQL2ckRd7pyghjhNAdot9yYjPMPb4xtCc",
  "key30": "3ULvgmtW5Li5BxhUa15PLanCzCp43gUasFMGrnsSupDE9FfzU4PGyF819y4rbrJaprMspwNKZQzBEhz38tkCq1yc",
  "key31": "8uDjsPvXzs4PnQxo1bXr2oQvMSQKhmZ1gZAr2gYPQyk3jtxY5uZV5gMqQdCNrGoa6w6mcJ6dTiYPQZod9P5nCpy",
  "key32": "sYWQg528AVenrDvhrgmjKQnPfnAjnUsV87Pc3yf9MTwKw9t4Qd6ijWdpHYaP6FqdE7XhjV8ApkGi9uv21KyivEa",
  "key33": "4WrC817GxG1Mo9EURSpzYdupGfA9C3my3R9t5UoFS4qxqf6rajSTp24grNoD9i9WeZDXgxiPaVvh5SR4Ckic4hmP",
  "key34": "4hn1jTdVaNaakQ1oA6huDCW3H7VAavNotCKBwaKCfWRjuSeeGL9BFfUA1KiPPd4fHWgnyjVv4py4bwzfSo4RcsW3",
  "key35": "3XMdBGYeR4G8Q8peo3FQjuoG8Zoov8UHU1ttxVMnN55Y7hXuAeDQJLqabRHmUrqvGiRW51Rjfr9hpc9yTw2mN62F"
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
