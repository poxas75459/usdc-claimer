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
    "4Tp6jrtpZhmeRhoCNPfi2gSCs6NBJHr8enrsDZ7VBx85p6UnEZhND6a4WnVtaCkaPGsAzxoPfVP1VDpUqRzRYfY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMdT9r6WHYzsHFoWyVzzqLxKx4r5FDQZBwaP2xjRD6A196PS4CGVZaE4Zpviv3YqYSYuW8hXWq1LU6uw1Vkr7JV",
  "key1": "3RfeUXPyknWs41Nf7j7mhDdEjt5dJgpgUdcDyzdAkhKv86PWcRaaPwbWjmDZTceVyDeUizEX7RiA1zKxwXmHXNtv",
  "key2": "5kWNftCbXkhe5TAinhyKhz6kPbCNmEc4rTZabTqy2RkSbXanTWCN3fpGKaD7NVqHsDppP92zb5xynHujEB8uYYZe",
  "key3": "4kMq6ZVWkER9pKvjE92MsowsJQzV4yFyhdvxLYq1WPqKAQ4XLSbwMEJSKu3FtcEdHaLrvhZc6ZMqJN2UmMQExHw4",
  "key4": "2rDtE7D7fRVsp4Kw9GWRRZhMmrt1n3Srx5NqjzCMzEezQ7nrhvMSDxzpZr6xh1MHTyAPRfqHQwUGmbwK2FHybJSa",
  "key5": "UdFFgJR8f8hDLg8c8UCph5MRsER7VsPp44QmmFqzh2fHMbh2hJpWUTbSh64inMgJW8tstz7wZfsNQLu5UAE7i86",
  "key6": "3xPiGhGufnLhutJTQDByy172h951r8WDAJk2uK7uEsvy2gme3ey6vJMbqGbUUXuuMZZvTT8soXqMrZ5jzYcffWLr",
  "key7": "4xTj39J4nEUf8AbjK9Rv4phN3zGm4m8T51DnsfYvXMMLDmTt1mBjVDCkLmTm4XXsfzMx54zUAgBCa62iZuX5kTgK",
  "key8": "5Q9GZ3HbjsSHVTffKTEB4GsxJAkSUzrEVWx8Ew9sKGLVR5MSEX4NVnzuzNV7Aziqwb9XPjxffN3uvpXYJUiQFy36",
  "key9": "3ZeFy3QxQ8yctmvDEip7AVAwBdzDhP3kryfoebe4Won9BibNSUJtp3TZERu4p8UwGPqdsFpEgEcQwbtHayaNnXJ3",
  "key10": "4n9ebRNUZQZYT3bQmAKTY4yvRCdnAvDhmnz6HmRVa7ouU1Gv5hwxFzqoqCrJ4e8QtH2jYGDUk87C8yn8iRuf4QJ6",
  "key11": "K7YNKV6j7wC13AdJo1F6SWqhwjraESp28cCignwszRnQFQyxLsJU4sd8Tnm2MhcdhGfXn7SNWQj3EzV1xSxFWDL",
  "key12": "5xXEUJorw5TPNhDeq76LUebmcPeHBF9Zmvh8a6uNdTf58yD6UMJbGSqfsxYUKSdfUcmnmyrLz1sZmZxEMcEc98Gg",
  "key13": "23cQv7ZA754ovpRKHySfgaX5ASzjcdtFz6zCNDnqvwJn44b9ihZfTPSKS8GuugU9e42MFAzo7YUivXbxu7cTNw8A",
  "key14": "5G6EEX1oTnpZzQLHjzc5me2dTXpJahWAdee8xXeiaXDgrJFhEEFo5TEX1bJYH6HGFD8oAfdr8FKszaGNK7K29SPK",
  "key15": "4LAbk9sb6BgDkWAccomsBLHNRUfREgGNyzFmbNzB6hejGVEBdTMoFn4WX8Mv8ZmLeLEuHoV9aiEWo9KStcXHCeYP",
  "key16": "2JJYKiaiwFA5R6TRFsafDMCEQWUH9ppoZfiJZZ39WG7xLaLHQR8KpUvfRULMSjf3utREoAqG82389tJwnD4kLta6",
  "key17": "2EFh1Uj5ffp9vvBSGYjVRSU4V4o9go1pbci5dSFPRWqptNjx8wknCqzuvQV5gAQhCNJAUNPK9ySFKrgkHrCHg8xm",
  "key18": "5iqNryNMrmK9asYip5pXFP8ozBTSbfxVARfJTTrjKmrxJ7ijhnkxL46ZHEun7tMqRnquKAJZQQwKpLFj2TF3shGd",
  "key19": "2LZPcXfQpW318SDN5gfuJvGjMeoGvTRxQVmeeG3E2fo2gW3G4tfPep9scKUDL7Zn8DQJHU4JrcGYpwyerVo7wiAj",
  "key20": "SEhg5fWpqMjVUw3wPJsqfkDPgop17b5TV47RPQwfuMBDtToeWHsfrkxhLv4WzL3E6ECdfE9fcB3SZEcmc1Tfy2i",
  "key21": "4omQ4fQKfUyU3ALNy7c47W7Qk9fPc1PgyPBBgJTAHNc34M86vzyzfpfXD54MVDShaBdDHbJhMu9NvENojLcdVvnB",
  "key22": "4roNpXip6Uv7dwZXCsjHUC5X65u1zM9yCWpBEzwhj9K7VR5kBGzhgvZsd6dTbmQL6ToLdjUpE6Sxd7whdpk81m23",
  "key23": "Nx8s2ESX7A6MVArJuCxUcGgnRgzznKgAxrEgDmnDDVAQmtGScnx5aDQfeP3knQT6WXC5v91dzw2htpZ3ok1NPtr",
  "key24": "KfKYbpVoWAPC3FffKu2MTLbdAmTkQ3MQXEuHeABdvNghrUj4j7peQ9BYv1MJpeVqnX7X155kDWJn1BsPJNzzkLV",
  "key25": "nxyopfiLwXBSBL5PPzJSkfwp7pojMsxYH12whz1bWJt6qq2ULHyYbpZvNuqtFQWzgMqunRqQLDCkBQjNxsx3JYP",
  "key26": "FVatBJ1YDmyWrstcYZbtZz1J4BfmuuvrTX2TG4yYK5KbuvziivMtqKdT8vdzKxnuHA5WHmouf13jDkawv6EDJf5",
  "key27": "5x2pom2unroWdKdw7BC7rUdPipbYpmHgnA87yVzt9ZqaqbrvZNPUxfitSS2Q5tzubb5wf6KeCTXUnzwHpTum2seh",
  "key28": "3chqMEnjZXfzww2xUufQW7JfcoJocLDXj4RRqFUGXczykWtkvadENDARN25rubvQJj5LrBG3UbmFuTP42TQb7Xxt",
  "key29": "3aPhZf7pKqMoSupwJiCLsHtBp4q2oUcm2dD7gT2gbKuhGmMJKDRjVDDyijgKfhGwuMLuZthQ6EhS7trqamr74CQ3",
  "key30": "5JTyYj2ch5f4Y1AsCi7H14pevS78xyDY3phLzXLCEcntsfaWCr7YiucXe5Wmg6CeYc1NP65JXQEKXGppvZ2EArsh",
  "key31": "213y2GUxca8xTiACnTzKkhPEPHUYJ2AZAoArRn8ptYBqhGar2MoGzX5JuAWv8aqD6JDR4hkWk8Ey7hVDuSeCby1n",
  "key32": "56HNE5CkihkunZhhBhQ7pbwGmRv5DRpC9Ddz1k2bA2fp4zBXUb2psSZjHzj1xPYkouTc31Ega8A5HhjzxjYxmSaj",
  "key33": "2jLVrsMps3JaVNqxNx2wuQUrmw3j5gCyGb4ENw2GVWJYDHCrdJzHQCPc2z1XwsY1PszEdbLnjrUH9e9vzy8SP5kK",
  "key34": "Tfk8C8BRN4kcyv7qhehHdtugGdh7CFV7MXa4V4K8dNYzJ3gU7g2fZRRVca9rsgFJNxPrqPZ2eaRVywTbBYuPmXp",
  "key35": "4SeDQfUSMQVAb4KcggYtfvU4nrWRMqkbfsEXffNvGMszsFL4CVsWY71SE8CcsRcLU393xzCxz5i16d2wpNSDBMBE",
  "key36": "4jpuVxL6uADmXWAictXzTcggrxojYsFBry16WM5PcEeZxDN6nTzg7vwUp7mZLrq4ikPRFAr9ePNHrXn7fLeuJu5B",
  "key37": "2sHQXNMXhzq2JFMBMBKHb7dH3HN1RPpRrU5jGvDXQRbgfanYnrSCEBrKxCoxEFBWF51m7wCMbdjzqh3nn2ajGTKW"
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
