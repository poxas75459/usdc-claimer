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
    "35vZANuH4vriAWuAGT2vHxn54ZxtT5K3R2GRLzPWe1J7DgpV7VfNbqGebk5vGAfs4AxgKRV1RqStkKWD1zBvzP9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mWw8czWxi3zrDC5bci7LY4iGPgrAKrsuc9okpLf8b6ATysxm7tiHSuH1txAmG7sbycY3GJGuSehUHoZBuAgAKy8",
  "key1": "5rYim4visWkQhCuCYmH3DDE4c77hGj7CSR4ye3X9NNV1VL6jcQXxvAPSBdA8V1MPvtKR43AxagaVvT7AraQkeVPq",
  "key2": "3hhbxYvnCencSJsyP9UiqZMTfBpbxviQB3a1TMQdXRSj98xipGdNUhrnSYjt2HPVvTMPDtHrYngYtBuAevGDBeHi",
  "key3": "437Wg6MWTTDdtSFSDcgqDCRw6gYLyPecjX2h6ZgfGnvNpRwxYzAzPkxqvVQtFTHTqR2x95NuUDSUVqbhKuL2ADFr",
  "key4": "3x9uYHiiYCCm1y22DpknFTVptDPiCfs7TvVxn9CwN5MqyQBcTtoMoAuQNzqAoAWrMQtSfEaTXCLisrQQeQbRz1R9",
  "key5": "Z8FFF8b2u9SLq6huQX43VsQSEypdDDDjdt57f263ptYdnH6TX6AYdh5zFEpFWM88oE7DDNTRmwoU3ymGaZnzZ9g",
  "key6": "32AnksnuJYTpAewMf5kWMr5NHBoY2QP6ed4vXjFZw2TkrXLg2WH1s5aAgUJhNebjCSfC91Lnmk3gpawvw2TS5kSP",
  "key7": "2Q3i4Ssdgu8XRnMQWtd5d71T2LnhzUa44jGEpZGBrAPrkisyCGzqdQmqCPbfTbRNDSjiGLEJeodVq67Gf3nyVZK3",
  "key8": "3QNU2VsKD4yB7vdybUrDwxed8NfkErGgtsuELVy67XFfHRosXWsiPgqWaXASUWAj9VgBhgmZJA9i8g138eCphpXC",
  "key9": "2X5wjN54ZhYhQPWFcGw2jVrF5pYJu775mLhDDJmsCzM8Jidenv9ydBaWrPP7U7WunQXDqcCj8zzWSLTkBxXoSB28",
  "key10": "zMtCwiXz4P9uTPNHz7mFMvdKbwi5d6eSeoP1bdfwP6brZpZLGsekTHP14BEqwCHg38utuyrCLf3RTAD1oTBomWT",
  "key11": "2DwbGhjniDEM5VrA4jA6drtgfvJ75ZZeEBdZuQrzSKMvQCnhEe68Ua72Dz6pkPPXxCzdia7QTLwCNKfcUtGkVBzt",
  "key12": "5dMKmhiiGReNyYTG3bmvKBocQX6pBPFh3eudTUHvY7pfZeb8pB6f74vWgafftyEFYTWzTE96oJ4oHPr3QycoL4Nv",
  "key13": "4f15AJpUKKWCSvvurDifFHC5AmT17AHbY74VcAmgmpxxEpPfYCs4vVr9RdPidAbmisFf131Ft2M4ZhvQ8uJF6FNN",
  "key14": "46FMuxG9AK5RakmedrLHnjrZRpyaiKrW2poxvjqkrmHhCFFRssQ9BDcpvnkULuoaP5hTiFKeWE2ABgzik6sb6GEf",
  "key15": "31Pof2UnQ2pDMmqHdevo2GL62ofJGjX6WCAuMQoFtxiEAe5fvkAZBEnz6oYsrhnCNmX6H9cwzZiwEDnD8xEdod8D",
  "key16": "3texeP4zy1KWqrzHYy5fkcFYetm7CGFBLfDvdhgYs2Y1F5iiRjrEppwimNEWUj43RUkZDrfAiidHSxfhKK3iJ3Lb",
  "key17": "5TCCAyxf4vU6wLiZFpvmi2uNWBtbYaQ1P5gfsDfea5cSx4VJx7oF4HdG8wzo9NC6YHBBaHTGZ7LvcjEtYpvPZoKY",
  "key18": "5G63zThx3ecmhJan1HLSeJTRJKY2qStMqG1VKzyroj5SCvwcHRqQCSrrdYj8apyvNxEXw4rhwN67kJcVuECu7u77",
  "key19": "2kbcLD682fevxNxPUzTroYXNFMmPdeMcvu1B9cpA3L4cDPaYSWvrmjdgw4FkxjUwJL4ZiYzKD8N7GbePQma3Aicc",
  "key20": "4AgNpi5Sm9bSqJgAf5yNvUjtVt7nAFFiHXFeXhhupxnrExbbpg1JAnAQcQmuSUbqVchUHLqTF9Z3VSD1y8sNDoPH",
  "key21": "51VegrkgPPbv5zypk92Q9381fVQBQzf4pqotba7WmYH5735WVpRrg3kkSrj9VaeNkBcvk7QJEgZUmovkdg4vUioH",
  "key22": "4mWFU8BN7jjoE7fz9hK6bzs1qCw2DExMQdqiKs5BusBnM62CCbQfFb1wKXWWYVtJFgKwBysAczLueqRBPa3FdiMD",
  "key23": "5BNBmuqt8kS1k2qUqpMhCAc6Kr7sRgpR9cRFfpymYmyTpv9NTx3qgy9XzimxSoies1Ty9p4AgzP2KrpvERwKqvYT",
  "key24": "4R9o22npVtfb3FZ1B2HYtteqNugnVVMdtiivXnhiitm1prkh1cGTMbZCfewCtMgoougJ24P8xq7sPpG8hjDWUjF4",
  "key25": "5tZrCMDcqKNjrMdbkUgLQVbtikieMghkyLyx2KwK1hjzHEdgqmniU449kKGjhQ8dxDvtbvAhi9iL6wLXMWqRAAnL",
  "key26": "5hYLVYbAg1gU9tggDXmg2vfS3yCaoi1VoKeh7frADsyh7ZeBu8rAsct5wAWV3bDaZ3v63PoxVExowSdkEz7EUG6A",
  "key27": "5kXwQVpetLqcKginQXdHBU4QroB4prtz1F7najbe8Qq35W9e78JgBu5Yk7ZNSGejXrJ1Jwu69dgDj5XUMzG2aGB2",
  "key28": "VVLWAozu2vKR5RptbQc4x3PkGEu1Mroa6AUCSyAYRyNBYvcvGckbAQqsM2kCmg7oGz88Zp1f9SrLk9rAKzumhWr",
  "key29": "63V9DWMnPhBF8oNVueEJyQqCSi7t1Jdc9xtc3ev1JtyBMtYVvuvopG4dME261dru3CxQq2DUXDMUPTJ56jHyve7N",
  "key30": "DU7Hye6fvCYT9HAp39FSaQzQtozpoqvT4vEchNfUkBymZHC8wnfJmyyJWxNyBaexMUyy1vqbJz8wNA1YdaMPyd6",
  "key31": "BxS784CC3aaM5MbFomJAYiSwYLcGe67rMLApc3ixiRsz1s6rWhS1LaC6WVzfCWwS4iLcynQCVS2ccrgorZuTnBq",
  "key32": "3S3RxGpwNwHBRdkgtU7b33WtY4FaLNvfj4HzFnW7ogUG5J5bzcQS51gHgxkVnBCmy4kp9CBMfPF3WQJFzg3H6WzG",
  "key33": "4qfwosEc4Am2fXTD1sVsH4siHLKbk6EvazUBodtAYMaW6fe7ABhbdCzaL6obxXPPiR2gZj41NNVQS8QAoj9afcug",
  "key34": "n5zvdw7nowrWWU6WiNRQkz7Qid8wW5EmD32nXxkiA6mFqZTzLDJEeEPnzFhrHyNrVssmiq4EDYMPSD3VhtZ22sK",
  "key35": "5p2n3c5CGvEngevNFfgnYm8KJqBpypbwhGGxJ5UVG9bEpaYgUX5AGgPhGu7DU12w7zZdbEmcyWGe84BPvEsDxPEp"
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
