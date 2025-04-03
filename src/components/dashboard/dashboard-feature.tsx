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
    "2U1xHMYdHM6Hsor42DbrWNw4rduT9o9Fy5UTD9Kprv2nHJwV1ywvictTvk4QNhF5VRMAdpt52qKHQPbt5P18smai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdYTsSaNhQDfcsRRq5iTV6c5s8XpUbKdwMv7cYqE2XToBbZr2BG9r9kDEkNm2qc1LZea4EZshwDTrK6TBXKk8eh",
  "key1": "A7SKn5dwApeDu8CTrWrpnjLrQBV6Tha1tJFgr5cM8PBx2YX6kmavPZbfUwFpBj3hvBJ3XXKC21r4CaE2xFDucsv",
  "key2": "4bWczwr3mrka7f5Aeit5K12E5ZHy4GAyLQA8HNpE9xaDg1Eq95igk3RjKqTorsFU5Vyo96HwX2eTx39iuuDNqKoT",
  "key3": "5R56Qqu1QhScUP8WierLGJ9nhGaunTDC5oWMFDTgPJDr18t1Py8TBfQrtknNrqjPxQoBx71DZzgQCesf3LBqMh3R",
  "key4": "54AsZmqb4RJUkYkNx3Z58Lc1C1ntBbTE6VFhYnR5ee171tK6z74Su1deCisdAkNKLZ8vdfUZu316jBCkrSCySaQ8",
  "key5": "sDwjXk2x1XnF7VF9v1kbNBTdr2HwY5N1J8qm4btFG91uzC7BqxQz7iLCgMaseXWes3VRku8qtE2WUzrdTfsgMyz",
  "key6": "3DSnQanuE68XkMoX3G3wHMgJVRG1mABfGmUqi4pnKv7hzZK7sVEy5EBWfpfyfnqQDrqsmMtTTZEUEmVJ7ZfYT8VN",
  "key7": "4xpDXcx9qigeTpaNSnRY8AawETTZm57neGENhNHks67Bx7wvdQNsWSCAZ9sr34Rtsm8MmRxe1rTvdmokVC3ShhVv",
  "key8": "5KwhQokERJTTkcCV29d1v1qtiERbZca9Nzi3yYaau35GmiXU1CU2KK8yw5jEZznEsgFSY9c89rJ28nKzQCfw5WMm",
  "key9": "3rENteSug2xbD3SUWX5UPwF3RzZtiLx6JfDqw7tLYKDpeJ7FDHMCiz6K9YYQxg3C7YBM8yUUJhMBmx48eFVVJ7CR",
  "key10": "SotNFq2PfkFr7ccjwCiASf2Ypbh4J9hvRcMfNQNu9nZMTQSv8GXJUZXQUqtn9AkyUF4rhwZ2mRc6Ab4uFBRYMaC",
  "key11": "3aGiXe2nESG5hxsoTRqykizLwHTuhtQuYezXgrj8Vz366LFCzfAZkobaMW549KNYj3aoJW5TDysD6zxNzUfZt3oZ",
  "key12": "PoKeNgGyeJwU8JbU9wmAbiSxjd3q29Hm1VEyodYsXbKvwCBKXZUHkPue6nUFghTfqt4i4VSb29KMRjAEZnbXagZ",
  "key13": "4WvkxdEivaNsREbAeLApyyPjtir56JDweHYVvEnHmasUmuomhpRHdWCarMD6qeRuYMzBbfXSbW6gSjqaF33LXCh5",
  "key14": "hYwfn5mp7iNPfGEDJRAo7yxyLNJDB1SharbHyzZgYiUiJhVuT93ENDstzEvoKRNHGZfn9BTmaPgu89JD79NcNwn",
  "key15": "8eMvgQdApqPfyYKm1Z3byZsQHYHrWSjAHodYNVAyeAMKiTSDNYPFC28waHZhuLC5dtHUTSUPa2R3Sdo95Fvu98m",
  "key16": "61T4NHso17NfZR9tw3CbV269QPkUMce7BkvcrFEz5MquU3Q1Msd9uoP8Nbuxr4ckbvV8x6zHgGH3AJ7854UhYNcg",
  "key17": "4NApR72am4ASMea6QfsbyvzSzPvmW1tVCsnmcLENoZKzacxjvV8qJTksVbpYnrXbhJhxLmCBrKWYwf8fWVdVhBQt",
  "key18": "ukNANXtQ1Jjr6VWRUzrvs6mtd2EW4jxeZCKYwaDRi8etzoN7RZkrga5QCXPKvtrCi3NosBPBndMSkyuRUAiYUy3",
  "key19": "41akwyRydcfLsaieEsHQMckSLWu1gJyN45kjq3W3SfTiXQz26ggKYpBGWahY6ZSRnPVqW8MQnLU1MmV79ZXAy7nc",
  "key20": "uRKmNA9xcVTvG6EMovd49W1eEXb5ER3V3Qx4fVYcQU3LFiorf68JTod61Gb7mwtNyCf14GgGPGdj891d4WmqVwn",
  "key21": "4EjdXyWPL5WxVfxJcpZAarexDBnAYdDWUVWbnBvB1cQtLZcc42oMbZrHXbMNQ74A6cL8Xq7YRfnGhbR2Vr1zhe6Y",
  "key22": "4xJ2g2NXX7RLusoVJkagnU3TSot5ZfHGDuUAje8DaHpWgLR2ZQ4REU8wFJ9qc9ZiBQt1tCZhpncPVny6jtY7MSjv",
  "key23": "2gitT9mJJAfCoXaEFst3yQyP7tHUdMfrZcY7DYwxGtsWFPm7zRnW6FM7kDsmZ1MRXznFoDLVENY2bw1B3xv2qoHq",
  "key24": "5HjFBXgta6ehTJEYaeqp3U28up5ZvvxJNPVdExsaHYUN1oB4Uh3UUof1GrdLS4qzgbVHY1F3Dd61Etu5kq65qe3j",
  "key25": "325D2Nx34ryJrG66nSMs1DgZDBHHtNWPeSuYT7NXQEztr7GQho12aY4Dwc7UU6KMqsY7KR6VPsLwfpHVMxHJGxP1",
  "key26": "2Xi2DcEcXrszH2vdsYrH71NThN7D9LZAZ5eVXeETJpww9Y1sFoTEFgeNr1YrUf5E6FzPiiVA9R79hnUcg9LGTtuT",
  "key27": "38Y9faSuePPxgdmTbpeEx9KX5zSQbFeEswNzNNna9m2Z1BwNKFaqXgMtE5AUKiN6PwUUBEQSUz6SAXE4CfVe2ohh",
  "key28": "59HEMUCRNBuHzxWNwnUbPk9jMLkdMvgNcVgSwJpEMCg7VEjcqFnXmcFc7UbE3Qu66VvNYPtNLXYiXvjNxVTkMnz1",
  "key29": "QzJA4GHK5Z9pdo4xPFrybQwAE6XYm2AmBatFhTCa7RTve6bz8eGw5hxDnntKE6ovHACjPmmMCsoBmP3mTsMfsZE",
  "key30": "2XihZeBx5T4NQqCE88uBMKnsoYkQQnWpcDq92Wgoec94SK9xh8hShVf3E9t97xUYM9bwYEhd4BJZ1A8Lu3sp2BJR",
  "key31": "3fFFgRu3uRkCqHNih1nTNQjZch3sAeMq3D8H7VzoKfbpspSmHisucvknGBD9TDtYx4btsqZveUE2RJ9DUqaLqto7",
  "key32": "2MRvqcdbcmEb2EdCfTn2nLdCPAgrTBibpTe7GVc2qkrXpuKHizf72iuBCkyUPy9nyK7ECwhQiFA9C2AwmXAUiqLp",
  "key33": "3j5xEs2qBqhLveu6LsGv61ZaZbApWwC5cZBRTK59jP7aLeCC52zZ5SM3TkAiB1psJeHPf2WRLatDB8gaPkRzhzKV"
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
