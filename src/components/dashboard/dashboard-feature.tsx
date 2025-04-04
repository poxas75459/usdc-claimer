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
    "5Ltbyy7DnMF3BxJrUcyGmTjqyYBdV2VZvLkUD8kdND5hz9yBK2JoRikdVrZMFeMEMg2gEKmHQu8PD9dbyNpnKzKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGTgNMdtr9c8BG2XZQnkmStCz6cJ7h14ttJxo2uGWJCryhEN7sZUvpBQg7nCHbAfwoypeTkEdYHGHQX4VaizcuZ",
  "key1": "3xv9QXnWU3bCuU5demrjv1L86DA45PiN8YWLH1jTfhJmf22t6uKXjS7EqHgdXKMjtzxm4rqhpfueZpAcjgbcv43u",
  "key2": "4sjC51ZL64Vi5XsvQvkp5RfBvRJZNd9zUD37iMHkqDMZbo26Bkpu2wiitpA8PmoDQwQ8eoigGnEuauttYSvPhYwT",
  "key3": "pocaxwfQkn7fnnVdZo9qgT6SSXkNxU8kBPDjBpREX1US4xPhKFFRZg86BKAMgtx2PnU2SrbAuUpUvA71AbZGMQL",
  "key4": "3ajSj1Ze7VBKNFUfJEq3SYv3dPUTV5GGVgdJu9bcifS7kmwgQqg19cN8LovVk4K2rhkq5fZA7mTk4Gc4Kj3xhXtb",
  "key5": "5dKqVj14Q4wJp7NSnrppthBNEMQm3wFupXrv84SvMhCo2oezuayHFCos6FfZXgTSzhLsMrx1K3ibaTDDtfGbQd5G",
  "key6": "62rgaZAQKHQpBazVxA2GXFr3DQroAJo3WNPnuBTzMKEdf4fqKrUVMpv4c8CaQdTp5GRSSzrJxFMYw3P4wAcFj9eU",
  "key7": "7NMEHN1tU3ocusstimb9psS5GfSu126E7M46VLMVb2offFTYHHrAsYbZcQ8kZyi8BCruhmW1MCNtCxWgdNzaS3z",
  "key8": "4j8yiByUf7gHVzFGquchkFBJ5JGbyu6DvLVvmN8zv5CZ3SHbGafvFZ4DCEZLjGr5V3LPr4AHYMd7k3NRQg3ugFNQ",
  "key9": "44JRrcyKi93FZMoVfHs9bH1e3rWcUCiVgph9YTzFB6GJ1bDrMfqjQ4xJWo1qKMcZsaYqPoJULG9pstTZjoi8hG2N",
  "key10": "3hWN5A2QcsqyEFYWhx5n4m93CvzZiCHaE82h4XKFWTiPHEf72f5gVZp6cwDainnLEjHy36E5UoXH3Jgt1eYrEzkt",
  "key11": "5pvdmKFdaJKKAwaAgDQkj37g2vgrDCsxGgm9uUetYsVJGjoW9P2pXFa6Tq5iwg3Dnt8XLzcSnCmwurRxetm2hzuZ",
  "key12": "2RPbGC1bQxLni4fy7erMBXC75J2cF5bZKpjscB3cRYYHQcFReAULzfdoY6gQJUdiLcqDwStwM9VkFP9GXLwZ9uR4",
  "key13": "4XFvSVkEgZtZQh8mGiEwKdLgoWv2c94KdUbmy7d5wehewaUB22R6YwoTD6tM4XekUcPZEQT9wassPz78muEbwmY5",
  "key14": "24XnhEw5Xp9QPgmDdhPL2AQuzDa98RyLFC31dHFUBkAFKjYJvmYnZ7qoLuLSdChvugKZLY5Z75QL7rX6NfJcor3B",
  "key15": "39xhBToExtJDrX1X4rTz9VXMnBz5aMk6XD2CqaWnptqMU6qBWLHUtqaMckRJjhn4TeUNYKrkH1AoPFstWrfY1gvd",
  "key16": "4tvVqtch4nXP51buocb4TypUui5cW7uSTL9TRhNxAKzDA591aGyhk54Q9ikTBAbq7w39iPFTuSHxe4wC2BU123iZ",
  "key17": "4etoWfRp9KwYyyNsC9AvJ76dryA6FeFinU8dXK4y5bqRtEz3bfviLR4L3Kq4Yjyaeniz7bqEAh4Xz29bTyhVWMPG",
  "key18": "3gwDKLsTvZcnX6RSkhcvcffxWCy1q57jBnVECvMZeuPZsdDdQhpCque8suK7MggifPVyDrptsZquJ7Z53s4ej3ZC",
  "key19": "2e5ZofNGPmLu3jyyrp1XTdyZQdTBtCFKF6J4d2qXybLfjcL5GUsGdjBCvxZDLxnvKCXMSz4HzA5NwDSZtTTwN63a",
  "key20": "53mdBz6DEgNYj2DFRp4MuiHQ1ZEtGP4TnZ2nHrQHTy8vyeRvHisDdyaxsdmovvzjxUJzd9rLcGjSuURsiWAx99Gj",
  "key21": "4x17bKHGhiwVsZUzqRRgJd4Uj2Lo8w8GD5PKZDSoDKaFtb72AEaycV3tNxJGxF7X2mAoUrX589BMtFqyjmxiEL5Q",
  "key22": "4qzaSee9xrG6Hk3FJ7GxnTChfj3PSfxCmKRdpWqQMtQyyB85cGsTDREnkbfkfbrCbLn5X4bZGMw3brU56h3uFGon",
  "key23": "A3pfKmAsDHr4sWn9JaQerFDYbzzQdz9dWJnmZ37dAwGVJCEZJzdRDH2eWFJPGPRt7tUwfUcbZD3YutLMTVMDZdx",
  "key24": "4ryTe7N3EZTP7ykDjoQQvUYZu8AAZSr3BRzgYr7smdrHRu88UpDLmAwxhTP2a5QeWpTS9J7NUMhSvW76NcVd4g6h",
  "key25": "2A5qU6VaWGNodneFrrB25g5avQDNyYqjemh8cWqGmr1DRuGuFU7ecLt8KupUMZ3jsPumgH6F6eJpQQNpUUTEC3sp",
  "key26": "5pxmqqwbV1Fm3fwArgSVi2xBiK2Qs2eMHZZnTJ57aCcLkQEF7H2HG6eDX91B2YtsKTuW2DgdLLFmgrEsxsLfZrr1",
  "key27": "3xJfwTeaAKtrCXmoZuL8VqVRwmzFpTqwHau5sCXoqnWdXcbKTjMRe9N7tV3HYAa9tZeKwwoGsmnHEgU4GVEDM2kz",
  "key28": "2FSLx8VPZoj891WmPe8pk73hwXB7GTvMscK2fZLi3EHDoW6CiFWPEDSGCnzFW6WdR8vgyRYFrmT1fGTpqAi27bEA",
  "key29": "4t5iPmWESNuUiKMGDLQ8f4uPrYqToWYGiyjRoKMHaX2TXnQWnNNgU1ZC5h5LzwpeucAKw42Y8r5xoXbSMHJ5YHAE",
  "key30": "ApbUsVXgKLfaWJBRSX6z1LxwGnTtcLuZp1mgu5FcmFQuU27S9YHMm8o1G6THRvZp517qQyMvgZo31NDy57Qpcca",
  "key31": "5TkEGbMwtZ9vfUYJcts4wmaLsosCHrMT4nffBz1QqZzNVACTPE1JDBFhc5SDgsdotKAwCXxWwU5XrfMYnP32HFLB",
  "key32": "51sg6bdbQyx95AKmFPk3bo7STedwPP8mmhNHj5NHg1nTpv5LGxsXCJUrXFhBjqPYBVbJHRKofikVyWMmCmBDMYbh",
  "key33": "3DTjLGipArDYEFk4sFJhisGhFe5gh5z6QBFh39RZcS8zJDJWANGuJaT2tfPDfdFghawduhqKtq12wzRj1g3311Ge",
  "key34": "4DsxU9V4Bj77rXA83yHLP3aoB4Rt4FYYuiYgGHSoTLV1Aj1eAfV6jgWMxQBtJ4eDYakFNPhiQHXLb2cimzkrhUtE",
  "key35": "2hSstq4EnCyHFtzBYZBtziQCsjkiP3gXwYBdGvT8pxNT1Ey2hskXJ7JEnMSaztjBjkS8eFjtPzJqYhmRWwX5BDnc",
  "key36": "2G8nCu4YXiVTFMqBG1GLBHj3FE1vGoH6KG7iToZJv3jjYadZYu9KJtsD6Jqvwj4tS7At25Jj3Ut4xPG5R1RFsut7",
  "key37": "sWFBTeEXH1eaKLH4NCAmGCA4GhkzjPKbFo7QaPHBs6caFhijmnBFEXrDcV7C3PXXXjdMXAL9tsLbniyUyfmQ2bF",
  "key38": "3mtDqf7xX1tN6Ue9JTJc4JcY9ZicW5Vr2LCXLYvpoT1Zbje534Zgrj8AByuAsYRazC6KTMeA5YYCRJZWj2EMasvh",
  "key39": "5Y6jMTJzNaPiVBVYdK5H25jrAJFrRnpMLTF4WXK4aUk8iRdzfoJcmqz5TXKLPzNrEszxYHbvAPtARZKd7ceYX7F1",
  "key40": "3mLZnsRF4w5yq7AWwEMGAx9ESF2F9wawWwSLMBHaUFwJSWgfBs5i4cDD1Wbidv3Q7wXKU6XSa2EnfYi2Vx67xL4X",
  "key41": "5agHbzsn1r7amLP5TYevnoVfzig8GMmXtY82t6pBPXg72JaAKq9irrSbvhnETpqP1s7rYkYs54sudFYUz6RGmqM2",
  "key42": "43MAePjMGKZMP7exNCAzDirG5oJyewR3tps1EYkuqTS1fXPvT4hJHS8EQk2t4DqExpvL5VcbmDMwq6dt1oYCnoQa",
  "key43": "3fiWcuvTwP3e3ycKCfdd6fisNaPCETn8RnME21MQEZ342fnYS1aadR2pgEhggBTQHCrTrUZArWxUcx4vrTnApw4J",
  "key44": "5FUCfBWCabepnXRBtBdMWCk7nQo1MUG8iRdbatSL3HUNUbF8djoQvmXx6Yh8pc5dYNRRVomKDA1Sq5C4GpnVhoMm",
  "key45": "5uqBgegBL1ozZpoc5U3fXhQ68QQJgYxYdhqotsGMVaFi3PcrV97FLxvn9khA32K1esKzxSG82G4XbB6Q6b76VVzQ",
  "key46": "4xbYNBiC29BAgkbM2vTjSMrS3yVWNjNhKkTLK71giJkaXnLAHY6Ad47w8Z2PtKr7fL4srp3QVzQsjQUCrTMzhzXU",
  "key47": "5B1G4N5TvX6Bw7jVrDqdM2K29Fj2h7FwrGSzoXaGALncjYmBqwBo4gbR5scAcwNLwgcyhQenqetPdwEbAgKfJ8f1"
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
