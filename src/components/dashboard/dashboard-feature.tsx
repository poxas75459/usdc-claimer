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
    "4xc31qb3DfKXDyiYoHCYyNWq7jbMk8TgVK5RCQBSqRYUQA36pwXizeKFNgzdG5a6QqGA9cw9YchVgmZhDrYPawu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rFwNx5SSJ1cVMHjw6cB91bhpw6VTKoF66LkE9ibPpS6k5JULuYPNR74aKiqUMRgPe2GgPbtQtt19M7a5Zv3Zc2H",
  "key1": "53wtwnsT88fYFQvD2UiHwRTMc3yRpL8vL53NPpo51i1WjFdMZt4FPdMnFikJ24tKf9u7VC1FjcZATr2DHD9f7stf",
  "key2": "5Wo7FgcErTk3C2CjewYXiJZHZtPLt3YGJx4Er5Ym553SVUhHrvMNZgXiuHFozzPvxy4vNLzZ2XXdZJNjdsChEJcC",
  "key3": "TSaWDYCCtJfEhP6c6eq1kBRQJob5pcx4EVVU5mEUBHSiptsd29xNpKg5wbu9AfnL26WnNTuwP2af7TvPtx4998Q",
  "key4": "4AtRC8pkm24JcbcWMne7qW9DTCmH2ne2gUHoFAt3RP2zJL8ofM8iuQvevmthwS5Z4ri3aVpCbU5ZVE6iJ3hmPK2C",
  "key5": "tEYKps12jmEoqYZGAcKQYB9TWwqSnaBdPY5vwLV6cyMnDZd7sprboFitrQ6QgkQU7xazFa7ERYf4nQBou9dbr1t",
  "key6": "67d5zKtpFXYhj8b3MZpkxqhA9GvcyewTrBvLRA56n73PyynTg1Wp1v2fi6rPxPwzvqVWKmKS2yAQX2FEb5zgpc9S",
  "key7": "5uaW5dvNvEMae3iSWU6uRz1xN3YskSuzHA3WxpK6SCrGfSK9FCkgHXZQSVpck5sfcsKV5QhQpLyMuHKZSybvcjJS",
  "key8": "KEnNzp6Tp7jAjBAdWebqKXp4gJr4MMyUVS5xAj2u4cvS8dehceCpzNNXX1QYVKhVNERN375FxbG6dEPMcfDp5vf",
  "key9": "3r67Dg6AX4tx6Vzte9mRV4Dp2Yya6TV4NJZabQ9e4HU4azUsdfRxMEYoHwFyZhJUyY5A5aFUsBhF97eMYcrzSJEL",
  "key10": "CiBVHMVuWjCJ7brLyb31vYBQDX7Sf6NKETWo1zTnBmBa7Le8d8qS46WqLnp9S5frse7c1D85kH7A4Qr7yEwhLWr",
  "key11": "3Ym4dr2H7cXpQ9SedAT23y4JXCNGrjMD9YYGReZ7vZQHMmpknWEUMG2RYTr5EziJMvDfSmvkmzcnMRtrpyKDHiFx",
  "key12": "3DHnMi9fscwb6MdF2NPriVo7wb6i44csq4vwg6YtSaHzyV4j62mcbU6D2UQfV8Se8FWiN728rH8QTRaj16Y4z3mB",
  "key13": "XJRTr2LbTHK2TrzY3pZ9MrSkjKnHPx2me742xdSBXbmfgrfpLvN5QoDwGSHsigsKW4iSiPZZKGYCiehSALo3XvS",
  "key14": "4HAHYspp4YhcEqYebUHMNQ16VZc4Df1bgzqwMn3wAH9XkvDBzZmPCQpFghVNWFCB33Zcdcf3uCMVEKnLDuJsQkzM",
  "key15": "24xHScXNi4HRxq6UYPHj9RwxKByph2EpTrTn4M3deAJnTUwM6umRS2CTcwR9JE9tpbpPtN1AkddHqEeRgiFf27WR",
  "key16": "DvhwXAPJC1AQs8NHbttJd1ZNcLCuCZ1JRa9rQLEaS9oW5w4XqWyHGGeGpg5k5y2NW5T5P1JXuarJq6oRcrJZ7pT",
  "key17": "431TGm44MhG6uUQC7SMGD3ch4EYLgPysj27bdXqb9WVUcmzAnh5FMXu17jWYcaR9zEz4ivznRw3A1gnoZp3SunMV",
  "key18": "LZhwTL9odPHrNmHx6yAj66hZRwfBrU7ELS5BCMNi7LmEVujvMZVghihqaHifb9H1NkgTbBD5WiUYrbvTX9i9HaH",
  "key19": "oteSboow7pKjGzKbpd8Nm5yiQoSiFSdN4rE3VvUxVvgEhQD9KZwCd8gXkthT6p3anWy3B11GZtd9CjDuHophAz7",
  "key20": "2MpR4E9iUHLvf86N8j6jbv97AXBUQCyBQyHFnpwZuZpqAWYo5CBVLX3ZFsmipKsH5c5wvnNt3tWKbwJAZ6ScDkNQ",
  "key21": "37Xdv31u6Z35u1ftwiReoGZcACgDsxq7qrzpMEw5oGP2k12wt8rXfrMLDphV9UAtDnfrGVqwh6zK2tMygMu9mSRs",
  "key22": "2VQBvwb4H4NtUxnxFAnaA1WfpmSmEKSH88GZ2heRWBbhejw55bj1jC2bX1w8ZSjvx344UBD887Bft63tS1VfUhes",
  "key23": "3gCxKVM7M77NNLKN6miyD3E1xjo3s3xNTnK1F7hzH2fZVrxjH5LYBd2R6wqbkeJ48Fm9AGZJzuZKby2z7n3Sje6x",
  "key24": "5w1YAJyXnHAaV393kTAi1pNSEXeFoxBzS2D51zc9HKwmeWY5t5dYjwxAruj7y4AhiU8GA7ipXpuYQxnHsgALP7cF",
  "key25": "2doWgvxdXLXENJS1DyZEu42XfBKrGMykRkf11LWrVhraMhE3RbFUseEEGktKLjM1Bodg9fEU4uK3JaUhDJfs8Xxw",
  "key26": "49nKPD72AM5obYQTXRt2ipWn4gpa5sBp2bv2HZmLX2yzJgw95XVgUkJKGKFFcYWMq8r9V6gsqa1i9igPeH6q7wCW",
  "key27": "4vhfVyTktyDSDzxB5hgUW5qZYXJhEBn7oqu7BsiLv7bUE4X6skiA5SuHURQyti4gjyvDL7FdM8KNr3StyhDs5EKA",
  "key28": "4ZYeyFtgZzrmEYiMUAENvWevnmPmAq9yE6ajS4QEZ76P3JEwKc67MVxrsu18q8LsMVsGN7Ueo5K2kJ9ZLrogEmX7",
  "key29": "3RbpHgP8K5g4FxJKcYerD8ojKsqcTfg2up1G9EBrVpejNfDyivipmxtpJeEB5NB1vJkd3MsSGmhrshYSdCawx3Xr",
  "key30": "sKTAF27QiWYwvMHksDZwJGLtE4GMdkUMRDx8qG1nZTEkMC9MJQPSHXbriHHJhjPzxEExbqqfDwG799qzhJrKoWt",
  "key31": "4roBhQCLyHgfcK6fZtbar7q1WCxuPSkDYec2K3fJGzyQVNRRj3zhzaujGR9ts4BxR2aic8HZMYUxYVvx3pyH3nKa",
  "key32": "5rNBAFWAw1aHXGMgyjR69ensDARv4GUHBk1K4MmnxHDCKt5xYV4G69wzNMTyxAa6Cra9iNmpjqdg2GL8EM8Y7i4F",
  "key33": "2uLD6Q4uVu5amQdxuXnjVDwm7QopYZ4Mc1Gad4f1ZJRtJARZtU1eqME9LkFNfoPA7fjaeeuaPtNP8FcWcqFQ3kYM",
  "key34": "3srd9n75bxLx9xSTH4zgjnxhmJ2TaZ5QYpqiregMiRkFr2Pq5opyuUraEGBQJ8YQjafvXZPScb6ZYsX2AzrVcymS",
  "key35": "4uMzRgWSPCtprC2EeE3BGRq79JvmNfo9hN5DMf6VNskr7KJWsxgktS31XuJXtg9XZLe5tKCtiQWG5ZFMj4yXW3GC",
  "key36": "4o3393rP6YKsTGiqu3oqvpHUQKchuJ9a6kKHD7Jy4gRX2ChMMKT6e8rwvfhnrso1Eon2gbAoDQ31Po2GWaUWHe1E",
  "key37": "YFb6BJa8FFfjLri6o7D136yAJbMjKJVeXcq6LvHKdkTH3e7t6mbZnhD7UnwkXfRW1NzwUYLLJ8TZpyGVoXqDnq5",
  "key38": "4LGHq74iswVaDeuf97A36Z41Bxwd2wXurLaWD9dybLf6QWn9N9eKGWHhFa8kHZgFbpNF8xTpewGZ3PBESfibW5C",
  "key39": "WUqoqemHZycjbhbz5vPLPeSNRcziQykyTvZ9ZMqKGXxtmRv67zGYR7mCny4t5m6vVf57Xw36mZzcfjPkgXkK86z",
  "key40": "4KAVeS2U3PHwynhxC9FHaWjibQXU6zRBKNcbqz9t1w2a9GdYLEr582Qn8dGCCMo6FUN2muZPLWpt622t6r9CW8j5",
  "key41": "4k6EsL7yCYMXnDew3J4ihgoWA4hutUcRqPeVPW3tufZYn8WeF2SKfxabyy8yDPWebLAkYp9E53zqouSZnjWYeDQW",
  "key42": "5XJQT5NcgdyhL4hvoRVyqKzZP2AgR1R6juJd2A617gHZVfmbfinxVQiczQx3SF7uE5YEY3YNuD6mNQWsyzdbDoqX",
  "key43": "nDEcvQaFBPXJgZGkgqLbhAeNgkjTy7QizGRw3pQhbGy5ZnUeT4KQ1E7oqDrFN6RKAAaRBTEGzKbSQ1ByfmsRGHu",
  "key44": "5JxFyu6EMFTkV9fLtbKnQjPEgdDFyZNENwPAVVNhhP7xDpZgM5AEqpHPVTcnrM7AFPK9C1RoLax6VEBNH7hT3Ui6",
  "key45": "33cBXapJBunFJYfxMSTaVyuheMjerwZKtsvzt3tm1QrrLV8VFbkj2cG9JyvDj1CkQfz8WLxNkzSNCwKT7cNZvD79",
  "key46": "46aAq44qcELTrNWsCEKMdhYhWeQhFVvSkem9WkWjH2BoHaa8H8bxitoAQWmpBXz3Q7r1BqFURnRv6LK7x2hhtHtK",
  "key47": "3coCUpRpNox3KAiWLDRhF3GzM36LxLDhUjNCaDq8eHvhMaKuM9hNWhpf7kbXs7v4VwHp9cfSPQKh8GvvGNemTDPf",
  "key48": "3v3AWYcdv1zfM1iRehAip8D7yRNNCPaQ9V4FopYa3R323df81aTapNmFnAs2xeK6cq1oBL6qM5geLBYgX8GAMhLz"
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
