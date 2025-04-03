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
    "fHQxaubKmModjeDTsatVGBgpPTD5ThitogN8T8duu1PBgpm94Mkc76sJ9JTtGmeFKgJZGyNuktYoESdpz3n1n2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XUvs2gbCDjWY1WkQrWstNN9Tef8ezjRjfceUTBpvuLLisTz3yBHVVkRE94pFmXNGmW8gsnr2qgBrqby6JYpPp5a",
  "key1": "3AvbPhrT212aZqZARGFE9MVzuz6yEzUVSF2c1htawfdCMLvVCiduyqq6ZULzcz5q4GPksUEiFYuUbaXz4ERnanQ9",
  "key2": "56eQ8p6pumvdaWVWDBgGjGwNfPifEAfsCbrKUgARTA6G6GwnGaoyJkPHLxYsqSwdGm9sCq5yAmMyhSzE3rVtCTwh",
  "key3": "4xHPGY4NcRUkXZajwACsmMqWLqarsYo352R29NyjTP6nWQEUXzT4tC6Yt3mJEAqBppz8cxiz7LZkor25tCj6L9Ud",
  "key4": "4Zrs4qy3wqjzh5Xmy2QxaRcJZKKx3fDGaGk8wWTxUAeokXsGtbp5EbWF3J7yLReYd6nsiy6wTcdRCu9y6RdGkJm",
  "key5": "4LNJBwU4G75grnZe7udnDeu8DrQopUQ8Weoiex7JtWiqNETCvdy9gqQwCX57tUGGYVsvdG252nCjfrG54YZv6CTh",
  "key6": "39Ka9LbZr9XnXxACkTWnuvkUyQ7FLTzNAjcRfCKn37qtDLCcUMbr7D22XCsJPmaWpLMD4AE6UakP7mjcKfUkEJVt",
  "key7": "5sqE5Ga85ZZ88gXbVWaoytLKbZvCvxFEw6t3Bb6FAvfrGNzDPCtjBHeXFHnRnkbQhx49LphfEveSyMKJM9m8etLf",
  "key8": "3SZMWSBi9fnQ91obDjFqw1DvqG2rCDgpx2VsdCUxBrxJECuvWZJJacev6mMLAynDH23WEZaAXSwer5R3VFnhN7uy",
  "key9": "25Kb39RMRWfiDUoz3yBpamfcqqEpineSEdGK8J6xnEYoGMM2iejQd8PhDhtCDBwH9mqYJgQxa8vtKDPEDjL51pwY",
  "key10": "59sMNYc2smVGYj6DbYCx3JMKh1QgTCoCKJXHr2W6AuzDJoai65jBxPHinfZTayYksXfGSBp1dykGs9R4Tm9gyv8K",
  "key11": "5rV3VKxkgjo7qxs79bPQctruyWAmvXsSbNrbXj7mG73n3GsPt4AcVBhkCSaCu2tdDJx1KECWwin9V88ChwsdxYe6",
  "key12": "5YZiTM8GvqUKfGBTZupeB5o4rLJKRjWKUU8ntv29UVBYtpuJiVh8DRiNLaJnYBi293BvtcZJDhc2jxvwyyi95eNF",
  "key13": "22MWkHnzMpMmY1rVecHsX9EgS2u8vSSDWgHwn55gLL3RVsLFE2RZhh8X7MrzBn7Y5YWKHb1qnUntoBxWMpo1daNg",
  "key14": "61Nz8j9QjNfBjg6QnFUHpu7KG212P6dWfZvbi3Tea3RZoY7vu5EERrxJWykumzGWvMKHF2akLeUUyY9BWnYjk7kt",
  "key15": "3SpNaVTF9NDhD69wZrk5DzTdHgG7zmvLV27Zvf8f7xXdJncRiCLT1YXsUYtWCL7dTtMiwhBjDwSoq7CXjVCtZXWA",
  "key16": "BX79V6uaPG9WAUtakzAoz6wGH68ghmCDWYwEB2Aex1KhZXzo9HaAKMnmD6iC8vTEteeNcmfqXpfwALRt7rTM4Ft",
  "key17": "2ejQt98nBSLKcFfXEsiMJ12vSaaeWyMTmpCFYPyLg76j938BjtJLc39zJYQv2YPQjA6v7gGAPPr1jcY3ndAtNXAV",
  "key18": "qQNCbpcw8aW5KJgZXFggFCgeC5pZF3SZCZmvDAejGCQWwtxAXoxwiSQd2Mqv4pcfbP8MuFYhrXMt17i7sRUvD9Z",
  "key19": "5jEhpL5TNjYdhkeMahbziyPnWf5CXfSWCEPwFXZbWqDFgzQd3eVteRbAAUAH2xWUqenDHwkDH7UCWZPhLjVEur4m",
  "key20": "BiteCZyKf4qZhNSEm2uZqhrmzu8SDu82EtV1QiL4FuhW65bmKLRnBCS6MKqpBbPB56Tz2JiMMJjNVK1JG8v3Eoh",
  "key21": "3mVVhKPDpNm5zV2LUkGSM3e5jUoNucn2o3BcbPxcdXKu57RNrBKc61q2n2x575sSdGv65irAzrkwHY3SF2uYGHEf",
  "key22": "44p9tGhx2ox417igMep6VS1jxShomAv3NpgvYTSNhhgRsrsXecR91vKPvq794WcMB8a8EjshG4qFpu7hfZdJ1QiM",
  "key23": "3BFSfQvYoMxE8nL1zxo8581mGb5gzvcwYa4wuwpoLcvAi4o12KE7oYQBap8f1aSipPa6NP2bkSUb5D5Ekoc6JHit",
  "key24": "2Lp1UbpfpD1ow47v7CU1LvLCXEV2fSkH6JD7ts126tru2dtWQbc7PFKLsRmPifMF3BtY2FzS7cWrbdXFrWVBaTy3",
  "key25": "3R9GtdhDBHo2hMqerZSe8Gqt2R1kvKa4R8nnBpv8pfJ7JSf6oVgnuFxsbS8B9fzrD5x1bGbRw3ZUbHm2AXPmnCxd",
  "key26": "5rm66qbAVyGqtRGFrq2ipy7Dnd7edy5zrfkdZoRj5CY1LzG69ih7pNTLZz6ySJb8ETEgHdVzjoAK5stVBCP9BcyM",
  "key27": "4GXLSpcBFjC7TLLLe4VV6qLCS1dzXoqyS3ZtEL2wnKht36Ai2F5GwkD6TLxbVFoyr1yoz5aCbwhhW3xgsu1JFRj",
  "key28": "4dBBoq2kHULAa2egX6cctC1AxRzHwVhGuQCcrXVt6qFd7tDMdTogeCLiGwyoZvkgkFq6g9bT8cg9hHYbb56KGJWn",
  "key29": "4te1o8brn8rQzPJS2Z8FpfoWiDkHf2zTQwDBpYAiHyurQ79eaqRUTKvXnSV2Kn5BmgiBb4j7eYtqnHs3NB78PyQh",
  "key30": "3FHzkQReYN4JGHytwu9bbebm38JBWQiJau2EUS8SZTzVLjLwPE8He2E95zEA2uw55NPx8X6g1RXfJDHD6nJoVwpa",
  "key31": "4UgHngRTMA8Dum9jGmzxRdWgDpuUXbZHVLP18nmMN33ZZSEhrGsdwSziZvYgQ3QZzFCRzvFVzXnwwXyrM3cVHDCK",
  "key32": "5qrGFTGRpAU7bp8utjvxA7kRXuXf5Xn8r8xbUtMZWvtm4qzFT55vWELzUwzDnBCK96nne1xSghQY3tBCvC2U9C7R",
  "key33": "3z4cWtaJcnmEL3Q8kZxMpaqvkuEsaxzgXTuNJN6wCJWbtBVw8DUNqJcKVbEntzJR8bxPGaQZWx8zhNeEHwHtGPYe",
  "key34": "6fLFnCRenFe4qWSX3aZnjeAeUBdmQCXNGkbtzGotv4Hp8akNivxrJ8G6G7wipMNwppvzhxfwwCnhvm2PvqMtvKP",
  "key35": "3re9BJYzwhzWVQMiNUyTcxkRKqDJZCAdBi7DLKBfqFcMemV7gn3nPyYoRH4Xg5QKhrA6oLuCb7c8pedj5VfhVFot",
  "key36": "3e4qCAK35KvEfUavNFPTV1jWnzqMmQ5nC6rxewNmaENWKvq8yT3bQBJWj5P74rZ9ULLg8dcvbhSxCb9qAi9JoRwB",
  "key37": "tLBpKWvoYfZrRzVpxzkVBsTz5yxrqA3jDZZLxW98gkfScY6RNs42RXW2Gx2Xd1gwjQcKbSW8r5tkuWa2ThKTb1a",
  "key38": "SgsXAbPdXHsi46NNTCZFqNCp7WfxxZp8bRpRTcdEYub8A3BFziPU6m5LBvr3P4bQqNwxMf2KbciAP6MYGLmPQGo"
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
