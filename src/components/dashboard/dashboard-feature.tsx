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
    "mM4tR2J6wwADg1EBVh4YKbUsJtWRAsqrcAa5TV3iR2NY8opdmvGvejQ1E64uopnQPKZx4XiQVq6jVhFLnvH6mGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqFh39CneZq7hQsw725AXpZtJuZeZCgE1hoDLbFjeHECs6G8gbHK5R7fZjkkzPQ9CcULDxiPimau2bc3VQVkJxg",
  "key1": "5XmXucV5gjDwFigvDpwhfi2ZXsPjCCEHMY5nx3MFe4dQD7EN4dJDHSQskZTA9cBS44nEFZNyQW4LZG5aWsvpAB8r",
  "key2": "3CrzqGCAMrQwCQVPP6enBcAcTr2b9TWUJp21dKC13MbvgrXf2nw4QoNhiaU9rdAyZtQZ4ZqTj4at5wMykfPVYq8q",
  "key3": "67KGCpip3cUPzaWpscvUR2RVQ8F3GGEz9nTBKo75Qy4KFUhRZMUrBpx3XhAK1Sx9WXTDN63uWvg2PUy8yQpNNiUG",
  "key4": "5xe6iR7sBiSG39Uat2pdo3rxaLSBcop3neRyFLDS43dzeyByS5oecyHfoGZCLUnuKDokHgdBykhMSeu659X8KUVq",
  "key5": "57k3rwz5KPrZxPum3vjvJiSieRzpaeabi23btTkTuiRJP4gbvgVFTfTTDK9soo2J1ga8a4DotHtdQaoLxnbKW451",
  "key6": "3moR3LjPEJpBD33rAiRLvd2h33bbXPrWSioQTbXynyfhpiGv2qrKfXLdfnUW1pESGDBKMrYS6sQbKCtMJYvrg2HA",
  "key7": "TGLudGAACa5rgyeyHYwDcjhwxAd5YwnBHPpRQYMqthV8nwoKYscUhbKq4QWm64MoQhZXoLahg5AV3d5FKZ74rmT",
  "key8": "3DsrZ2Y7y6gBJRvZmUffcwQQFinHrxeFGRDWGD3NyCQiwgfARmRiH4NrQeoPJfpUoPAgged8KZBv4wrYp9dWCzmk",
  "key9": "4WbrjM9FcCtKhxUGTbJGKg5aCbEehAwASaneUnxF9gaEj2wyQJxPqEbwx5xA3w8XNfyyGw21nz77QzXgEQMtysz8",
  "key10": "kCwAbGj8MWkC2eimmrYjkQPueL8R7d8Lx4LS2idvJUnFnMjZrhg1HXNvgypQxR5E35CC4DmAq6RjhRQ337Fu4jF",
  "key11": "5NEXWGG2G1B1AB63AgtEVkkqTEHMERUXoNuZETRfeyCfVWQB5gRk63myk5oo3zA4unqjRmzdzM58xhZNzGVZ9eD8",
  "key12": "2LJHWmPi3tGyui2gFD84SETqvpXeihE5gDJvPp3htQDYG6uGKgUnD5X4YvLNstnbavPu8mtbWL5Y4v4vKs2BGghL",
  "key13": "29GfxogKnJ1Bpur1sNADpGdYUFuU3s1zrpwPH2FvckHLXdKWUZCBaPV8hqN5qoVC6Sn5Jb778N3b9C666uR5R8n6",
  "key14": "69R1QgvK7p4z1aBg25c2dD4Wkd7MokoPf9hUTWnPDsxX6TiR4fYf6f8XnDQDx5ac4AuVR5EAe9KTRMatGfHNBK1",
  "key15": "22sHGGBn766Q2dxVYAKuDaaejjM3oHaNoyioRBwWZGz3xBg3jHfqgikLLDJxhLMNKG3RopsRJ7qQ3n47e75e4xkF",
  "key16": "48fBijDKw6gnwxt1EcZsT34JdmeKdCVk9xR3XbqrkWo88YF6gC1HXv2XJVJxovnFZBtkPnGqTUWtPjfhvYR8rSRw",
  "key17": "8wzEZ3r1BtPpND3BWxD7VQtpDy5F1QZx9WpjKyTRvF3nuUyWXQPWJsPeZXjsvRogp7rEUaFrjGTguUut4SnJYuC",
  "key18": "4K6gbro7ujNi99hCR4Qp5yFjHu43ZkjBfnT5fd7rSbXo6DyEPaJ2tQqb7DutVMWSSegJBqCd1AGj5KZS7NzhnpTy",
  "key19": "3R9iG6QrZgv4Sfc2NMRjLTXtswBiuFqP5NJoizL1y32oJ1CpFzcY1owXCQ8a1gKv3rNM1U9jEUqnLnPV3TDgUyRF",
  "key20": "4UxFJuwgXo75LRiYLFpvrVhRzbcnKjQS5U1t3hR1vKpiDv4qMMEWQZCYpDMSEGsQLK6A85fLa6RhX11aYgi6jYpf",
  "key21": "V4SRsP3RKf9mMCaQMAgtvDyxvuN9CgxDsKvFwNrQnMCE6dPUykLZtht12VHZnN45VtpjFA1wDFk1GLbZoZRxQ8c",
  "key22": "5NUJjcz43i6eWo54STS2H2EDSM5vTNkeEWST4zzyKNuUrMEf7cSJmZnrPdW3ia4Kr3DxQUCAbMVN7HMvZ3Lon6Yv",
  "key23": "5nbws2TJrnyVwLr8t1CzyfnbeCJcmN7wACHkuAav8LFSJj55j9N6SPfpKcZLTnBsJiVFiyvoP6LPwZ2w7hWhS8ds",
  "key24": "4GUfGBUzuYP13wvLW4dVto7RBzfqYcUDh1YYaEny4FQeyqsZpjQHZP2CJs2BYscWgi2NTCt2zafvKTyRJDE3QzMm",
  "key25": "5twEeJiSyd1dLkjiYPFczC6AH96LQKMPrfonoiTR4XdgyhJTRGpfEdPWiFP6v1oVi1jfFhnSFZc7STy3Sq38zKKi",
  "key26": "4C2aKgHozcyLchws5vpThpNRGjBF3TmQ8C3PS1fxn9HTV3GwwUz1WHL6nQrAj9nyBZnDPxds2K3qncTikjYu9Sfb",
  "key27": "zEnpgtAudBhEeD9aT1tvc14nnU2D472cSEVRcLTXqLX9ZWY2fsN8knmsUJnoHV7MCTZrtvttpqDhKHA8XBUe9Ts",
  "key28": "51XZRxFCM1zWosg6Jwb3hyxqAm6BSZaSD3W6bE1GgpLcxZqs5Vk3K3v6ZQ4mnphyayrZQaMSWDRjN7PoPpYa6Vu8",
  "key29": "3M7U1KHWXTFcZWfa18rUoj7j7ydtoKuyWNU6jYMKcdi8ZuVbRjJhsWTMgBDM6WCgZktS9Pdb19aNCmUnfBdk2A4Y",
  "key30": "3A7Fe7uA8YoLK5mdbtNFhfRCVwHfu6HWczzEPBqYJoMAsvVDTD9RAbVqDMGtoxh4roNzF5H1JZZSQ8tXHBnJNwTG",
  "key31": "5P72TGBqDsbBPrpNRF1PWuv32ZrhiktJhWd7gjEHX4yscko8iX7DPQwFcNQihZK5wUKwxmPgwpvgQrewescJTFk4",
  "key32": "5AtQn8dwtz4PTYLgs3F62iEgeGQCYtDnwTL285GMFhKBSvnZQPRcsWJEbBbXkn3gU6yKZm2BeYyuixE1V7dnSCiF",
  "key33": "3nyFAoXGCzL9i3XumjyewnF3bNSovAuuvZjVQtDuPkRrFujGadNx8sg818EMQRQq5FMAXYmzc6y4zvN5WR6hym4Q",
  "key34": "3mbEHckwB8T2WD7DAiGPgzLcm4LcrTQWoiiyvKVwHfK5sR4exeBLBAEzDNXEGJDWaz7sLeHZ1Fy4vv8UxTtkpFzM",
  "key35": "3QeUpQaKDP9TbJ9sGta3mLKRezabdCsCJCGJPu6MRWvKfusr3YuS32io8A1TXYHebAcXHPRFWL1fdRHrSLizwNxM",
  "key36": "2gauziHEsYSpGjM66UfJa4yGduM7eZFsGyzMfXVnGNyFZy1XmAh2V3v3uW55d4uaqwtoFjwPjcBor4pSNkY8rZqW",
  "key37": "3raDxzXw4DvoBuy4oEw3caGBN6oDG3t8bKiB3BatnP1Myb48hg29if3iWfi3rojAWDjF9cs317TjMZgpXUYmmwAa",
  "key38": "4i5j1RhwGgspTMNJsZeE1USGF3Vj4M6Ru7finkT6GLpj3WBBhUfDL95qRapgTeUD9tkb1EuLxBZ45dm1ivNLsRwp",
  "key39": "3bCFVCd1xAWiNHbBpFYduJhD4QMWniQKqD3uiPo3fPBwzHp5xLGUiRwghsJFR9AjTqsvuKNeRWEvrLwMKcqxmzyX",
  "key40": "5kL8WeFYJzfaArysB2qvHuVeynbyV44Svt9EGRUMUHbNst3ZkMdPfGn1Gk4SLGNGxk9AhHvnCYtypkhMw6n3t2d6",
  "key41": "2yRwuJHuYZdqR1rctiWxs4us43pc9K4J8BgQqmZZEmjH9qu9XHeKoHQcKFK6y8PhRmw36yUxnEHeeq7uW9PvVUrt"
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
