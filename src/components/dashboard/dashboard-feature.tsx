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
    "gD78QdrusaAYwvxHrvrQVUHPdCBn7T1FjCVT348DU2wUbYreUw8sLTu26zBq4mWc6MsHjaoQdaJ3opryeLbDzv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZeTGaZSZwo7GL8KWEXtTb6R2K7BMxd7djHao7pknxcg7NmiFjGjCr349Yd9dy5TZGVQp96eNVStxdfnNwk7G16L",
  "key1": "3FDaGXPxsYq2BQgixc7YwFynofiRSyb1DdCXk9t1ZV9SwSLmSFvKtGEZKfXb6czaVkTFt9h9SKLGLiQR1VC6dQZQ",
  "key2": "4H2243bkPeWxHrJKa4e9e6m8wPWdzZv8bfqFm9Yr3YWUAYxP9xPu9YWBJJ2bLNZw4LsdeCjMKZgJjWfwDXt6eSPu",
  "key3": "3wFX9WrLj5q1nByd1SsyoQYv4YyKeqZkjDg4PujDxPKRDiZ6WM3TFZMgksuB27DdnXcVE6GaXmdgbvtZsT6sXQ7K",
  "key4": "5veCfdd95eJyCXZqjJHiGbKPgJKLTvkZKw2xSKeh1Xqdn7nRd4yQRfoAd2C68SyTXtrAB4J3ecBsvLejEDuB9Yg1",
  "key5": "2geH7AhQBkHPAigNZQ2mEyia41ghPXsCJbL9DGGv83kYJgGnVz7ZSqqVf2dB2xTHxwGbwEcdD4ZWYN1Ut77TwfAk",
  "key6": "JeHETLZLJubEVAwbQzd9baCAR57uq7j6ee3Ud8hXWTein218pkU6YNBTofrW3tFmdTfbnUTtPyc1CRLvLvSGWjo",
  "key7": "PwtATMTAdU1bTWzeY99REfpYph1TXkYmohkZD7ko43v1HCWiQWHA5iFbZKM5U51SMUcePZPqy2qMo5yoSqA8PiV",
  "key8": "645WcSi7L5rYzxCac82b8d4VEvKo7fXQAXMf4jzqtFcRAzLReeSioBKyfzeT1ZFTjwxfEEZ12Lk3ULugihkLRYik",
  "key9": "47Ur2tM7EEoWLpD2WaQvGPpn77JEKqrBd8yTpu8AuTFJBuZKhW7uqKj1rKFRMEUQH5h4B3p1aVDCHEo9Qd3WXU3K",
  "key10": "51azeWPTiqQCfGXmrmpcMsJpx8gGJ9pfWCNqSEXqrz3hAaCJ23tX1KUpQ7nd8ZHieTEuMFgbXJugHcw5TVuxUFjc",
  "key11": "29j1f9tqawtT67VPuporkUPcRXFHhmoTBLz9meK6QNHFYSARoZeiEnBQ43Cip3HGtp6oZFnyXFz8wQjEiYeBrAEw",
  "key12": "3qBvSCwpXCsLwkSUuBca5SXwFnJUcpBb4TppwBGnM2rvanu5pYxf3sWhNpdcQr9kFbMBe5naD3V91ShDZ7u98oEb",
  "key13": "YrrRSo6wFeTUWe4te5bUsvzjix16ir25FE2a9BGW6o2xDBeGGSRXgScsV46CUvwEDMDAirR3qpAQuaUHW59ZkL2",
  "key14": "zYyHKnyP7eLZVSQrXwKhSnLzoK4C4bYK9eRtoQyXpRH7rFpKnLaXTmY13UD61VLucrYEEeAQwDg3sFQXHy22Zun",
  "key15": "yUsbFUfenbxzSM9XcAt9rovyTJVGgvFC1gdLRuBgMXsghSEaN4JMC9yGqFYQ4pbiNPpG7pfuab1B9wvo1PY8dTa",
  "key16": "5fm4pjGpXxzfACJD2YCwiTScaqM3v8tzQUKDDgtaraRtKNNsvJUGuZztjZnQXkaqA5FSgJoY3z4u5hrAegg1Zhqo",
  "key17": "eZXCShVY2kT2s4HxBA4HEz8ieZZhXH4FWnH7jiw8WwwBeDTXbaGNmFsMWmjxNCcDrfKLe9j9pyPKyXxTWMhxyoh",
  "key18": "23kUYzgXB4uUyaVh4Hc9wDKnNsknQEAr6WZfbABfbm6CRM3PpfdVNRipeb3kC4yngNpcVoH6stMd9rffDDDdaSg7",
  "key19": "58tJDVv1u6en1q6g12ugKX971aU9a5FdAy9fCxfHz4zpRY279umvYq97zUdnmZHMasJa7UcpLBZBa8y8S9kzFGjn",
  "key20": "5n9vH8QnJKtFk61S3PNpfahJpG7WSZMy18ph5GNLktRdWs2pSEJTbnthFpYWxC9dwjhCEzkt443MvhTh5cKQypoK",
  "key21": "4cQT1MFYJUJTQwziEtZ9ygRJxC6mfY6QNUkFvGveHKm9cdvSEF6aD4uoxWBQBy7FzsmEAuy9u8Hvs9kWGuuTWBin",
  "key22": "2UcUqZYYS32XnkK6JFWgPNn6uL1wyP15sDAFySLXpTwf8zZoDcuyo8NxJPwkJ16NPDJinDrGzgq2qMAVx1LzExAy",
  "key23": "4wSNZHbpDyNzwvc17bSJXVfwkAcjCwtzCyaw4NpBrpcTpfVwyUyPZ7N9oemiDJq3RWn7SEnNrZRCSffxWkDM6UGn",
  "key24": "3wZw43tiw7S2j1qqaJ7gfegsCZnnRzxYsobXSadbJjCUkHQndH6R7k7eupinwDeiUzW8nT3DZLykWxBwDTCb3eJR",
  "key25": "ynfFKeE3CT8z29Syv9TQQuC5u55CnKeYkuHPh8RG8rd86F1AewVja9wXvet2rpsdGXMgKLyYHyQ91wzVvzei8Ko",
  "key26": "2GrTXgrb1vxoWb5VL27CoccAGvdjeu5vVeyE6AqpVCwCmiu7ZP7ez2S5rb2PhnLERi6GtypswW9L7SGFTbftjMNh",
  "key27": "2zRNco631YSfVjgLnBv2RPna9EeHvS8EGJXB8K884d8xSCaWhqLQSzmXDEELnRwZvSsHHH2iEFYBLggkMvoWF5Vo",
  "key28": "rqMY4BceBLpaC1KuToFMGibv8Jbqru6SqjhXMCDcuYuie8RAowKrUqJG4P8ceogy2vKKjnKXZTYVpUiUpZ4PGgL",
  "key29": "k4eKe519LHRdHDmsznCepA3V3qW2FsViGkx3JRJrNEzwBjA7z3gXm4qVeNKGR7D7E8pdJuB1PFyS7ePL53hQcqS",
  "key30": "2pegGv4dar9SUVS224emZ7xczfLTRUScXwKg7WzzroifRffNvtb5mm5b7Hd1jhy8BTVKHXsuLZyDKyj6WxSd5mLD",
  "key31": "38eV56JvKdF6ocdSfEK9sfh4R5oVH7qnE98uT9R6Sf8UgLAddR3rSiRUYSTvhR18zmvKP4p4xLBM7kiDTnxdGW4",
  "key32": "hMTGx2URYFqvGxdx91AupkSehgCHY5myPG6aX3YAw9ey1bk2jaDESzzkrXUAcuDxGk4ti9WHkzVS6pHBpdXqP3M",
  "key33": "4NQcF23KWzsfJTmJ6gkGhoBAy4RNAwPTAD5hYDCZYeuUMf4TkpV1bB1PKEVjjhBdJFt7F3LMysDCnLJX9GJgugbd",
  "key34": "51Cwe7P8PX7xN1WnAt7KvdSJVJo2M3UAsf3CKkkFuLj3Z4ycfmJuJkYB5gnw7iX34fVR8yPsKwuHikdyAb7v4KC6",
  "key35": "2aprSzrN1EmSvhGDRebmuEqbdSac6ZJYDTEhVFsHknZ7AgRG2v6EyrzDQePoi7NXDzFTmGkVDx92u2ZgN6DQ79aF",
  "key36": "2NkAh38HaEqbmrxnp9ePg8ok6QNeErC4vxyfsTCLoyTioqoanKUevPJwH6GH6psM47HBnnhQCjD5RLfE8LphceRP"
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
