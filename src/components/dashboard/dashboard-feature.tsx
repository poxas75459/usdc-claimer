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
    "xvhoVybmW3LLec2hbbxafMzJEhKUKoeqtX6kSRUq2BrpPZaavMEfuVm2x3PWJSsRFfMswJy5gtMsNHm8Z6TyCnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htTGeEAGnAhL5LaZgEktqfnRgihmJSQ6VSVaWCFHNEi3fNM2E3vYDrZ7GmTReSA4FGoCSDiJJMEnHHcTZRLHKo7",
  "key1": "3VXUNoGAYSHaRhgrMA9JMAUoutu2sVrB67jMXbNsA3eJU2zMNqmNqPZ7Eqgr3PPjnuaDTbkoHpqF7xcLQSVBZH8d",
  "key2": "2s4BJvSkw4WZorPfuN7gpRuP7b7fRhR7Wu9XxiKWhs1TE92CnjynfDqkjCht8EAz3fKe1h8mGwZVjWkPBVkpLVNe",
  "key3": "MCHTF1M85hRLgubwzkH8AHsmik4tCqXVUaSpcchSsdpggHpmWvk5E6W55XRdPfZEC3jWLEFqkMQKseTycytSyuy",
  "key4": "42K2V9raUai1zixW8JQFpjtNdHRbpdJgcPBNBo1PELyy8npK1ToUZVbUzxSod1J6vhZt1duNCGnvC5TGvhzAquWf",
  "key5": "5DrTNyMBFLZYPZC2heBjT73UVPfp6mnLThVSEzWMpFWBJtmFKTAps2NFNhzLUvcVzy3LLz9XpEiPq5rjgbbXpwwM",
  "key6": "2zPkjz8Qg8zA9oG92urh2hkqj4TPHXPGFcShvzieUMdUPaHUXSC3Qkn8ixrQm7dsuocDQy7bNNfPpav7zdNP18Ew",
  "key7": "tbER2j8ssN8dPJUv3GXvssVCzxNfPjqEWKkgHRjarosaqceXE71DFkfZhE1tt5NZuNXb7qntg5QZuJL4s5QgRnh",
  "key8": "eur7zhSgRXouc3crmxvy86jKYMrQnWHosgVZYBmsUfiYVyU9Gx1QuV3NjfUgdoYMQ6ieSz5NVAXXijKz5v1TDuV",
  "key9": "3yHwSDDMWkNGv2qMuACUh9KPC56yxq9Kd7BMSwjPJ4jcgFPzSpXWS1SPuHEY1DSNyVuSTxyjv1ixJNjQCssUuPuR",
  "key10": "QkryDtykTYoZu5MiRQgcsZJRcQzrnHxoVzG2Ta6NRfZkjkdGifUJASKNYb54Fi7FMFYXEi7u2eMBkZieNmDwFnZ",
  "key11": "Zvde8qU4qccBK5cC1k1AypHgJFKRgmGA2jNXuEgACC2QiKRgqwCtgn6VQwMPpx9SJucaGyXHJGpZNMThYn7wj6q",
  "key12": "4EZWEvtk5v6o5vUjdvUhXpMi6zbdnMHJBAx6DVBZRovZcWqNGoiQEa49UudUtnbC2637rdxnt7QpCpChHbDJkGN",
  "key13": "45QvmE6PYH6wiqizb5RP9qiUxYbwbwHaRad5uHsRcgiDkUBbfWBStMHTSjSYUiCqK2Ubab5VH8MmPY3cjJCYYz5b",
  "key14": "3TqKNU7WFzy9x9gCZPNkxM8erhDkzgUS6xofk12YWf4tQVePLiPbmCGJU5rYNJYzqR5xPZqimaTNCsZCuTxEg7Sm",
  "key15": "67mMSvAepiMEgLRx5iuFUzUbxRsAeKr4H8DjmXy1dUTWmeFosuwGtgrk3NKC11jYfMfuP1ipbyjyUPhpnpT6vjV7",
  "key16": "52vsbpDUsZDZGJBRGyqUpRoBJ48kgeWg11pspwU1U4FV9rUYCF8uTVfKp4X7fCQvER6GjCcXhtzigWuVUZF4YfMY",
  "key17": "ggFa4VN9eg1TxRqs9PAtxxfSf2Kd6yoPDBhS3zEX2KtVys5bzvtWpdJmgg4U43oeAjmkpejUKa6EfLtigsohmf1",
  "key18": "4tj4XUHjgb1GSbsLqufa5WrP739uqBQgptG8K4GrBpRNbNMfiHwsyBLuHPfHKAxf2VzGZHxzkTfY9idQ3Y3cPfvu",
  "key19": "43mpq2efJA28ePnuNRNptLAFSPVWtwWFS882jwW5Q3u8XCLgU5CKUYCFjvvooqLA9NoPD9ZPTg6TuN6u4wzFmgTt",
  "key20": "2Zza3jMVpxuBpC2GAy5k6ez43Kg1GHKm7xea7xzfpjQnDVcDrkk8qkBAkpYkpaD59u2PZwBLw4E8JahBWXbxRh7L",
  "key21": "3MHZ7jzXYrrtNiCMM6a7rc7xmLxUUyhpco8VBhgDARidYcPD6BW91bqZLwnGthuFZ2qZ5giumBBjQFoYRTzn5PT2",
  "key22": "5Ah57R2DGN418qLqpuURbXNCJ7P2Q5xuqt4DTxVhefDJEiz8znGdSbyzaYiNygevmP1fyQEFFiTewdrRZUxBkjbo",
  "key23": "64DQrxe2Jod9enUAw2TvuoJJaQSzGFT7zDqmKDCCuxZd7VzFAmUcYnWGuV5g91nEekHXEv24YtL8MnAB3P6Cyj9a",
  "key24": "3GNQ3s43vfw4NcZfhdTrRs27qgGSHNYDpAEXMsvzjJahZSLfs2UNc3VTGcwk1YX8hYMU7FvLLi9ZKuwsAFchnZz4",
  "key25": "5MgNsvEB8N9hdPubGbP4qFPyZTpvAk2pgrESfSnKUEMxpFBCWU7GxLnehwmkBGtiZYvg2axENL6pZSzqRkYfsASe",
  "key26": "4iM72vejvmK48TgAnyEpBE5mosZr1LQ3KeTpzsxHZdwpwfKummXta4aLQdCAW8RcEg359dn3ZLcDsQKEshMF4oNG",
  "key27": "znG26NcY12v9xfYBrxAaRaA1mVY9CrVe8NdgTgJSnxWbiu5g8uXJqvXgVFAzLqBx1xxLqDmRWqvNopZcAusHRM3",
  "key28": "2tX18hiLN8FRfgBUQUDcS4j8HW2NmuD5iXRc6FasqVDMyHazM5hrixg8zhee5JfnKJ2gh1oBKQYH1mgAfvcgLBb7",
  "key29": "5xtH4d4VPbGGc3vTqMaRNQ8ktZKQVSg5igwyzAep8rUYDHVhPLZYDDrsewdGMcJQ8vWFi3fg8vRZTr8Pe1wrWDRN",
  "key30": "5TPqf3GKpyjntKLYHxF2brZu4QBtTbRrcH3VWdsasvNEQ8wFKi2YyehMx6oFEmwuq8PPD4jRXspNQSqJczrxxe7E",
  "key31": "eaBnbP274XbfdQ4YUwTJDfCHEzvxSZ7cpFCcNuAsGmG9zsounmvBXHfsRwDWNzNC5x1uPotj7cWDY7bcGMHMnGx",
  "key32": "V9QkZUjRgT2tnkedswYtXE5bNrMR6cSoDLndBs1sG2HLzDjTqKzHJ6iWQmdPzMC1xMHZLqDTCXXvGijoQu92TfZ",
  "key33": "5Y6d9hirWgvW2ERZR9QdCnS4jEQguc7ejeczru9M3fe8PUiPXBiqPha2dehKA2c8rQFgitPx5B1k78HQdZVKCqE6",
  "key34": "25pWesNKujs8hDNDKimnCx2x1SaChCk52c2CYoLp43f3USiSCP8wgyYuHK7XyXsYoegjsP16EiyUqRD76VaYTwTw",
  "key35": "2BvGH7zAZSfX9GEkXu19VV7un97rN7PtjRX5PMSTqyvvQT9tY1ioTu6Hs6xJLRY5AvKgQuqTPD3jYeH6sFsc6gWF",
  "key36": "4DXvTJYWPTdTZxrkRqRVEMXdPGdPczzx6VBrgdFp7PHxikBdSZBafHaaJxeyRpwmhzbBdRifCXqS7CQJEKScvDEc",
  "key37": "3tKRsFz9AusNwLH8iSBbUBst5mhXde3fhBkc4ayv3rV5q4DNWJG5ZxEuTJMB7fjZRvjVeVGnMctAact9BRkKn1Vh",
  "key38": "22vagdLi1f2vhr7aebQdvQ7g5e6DySkihDq6yM36jhzSxHHvikBMppaxc1XPjscK8MCzmzpAHzRXZ1krXV2uWngK",
  "key39": "2PZYKwFXGmFHzMMmRnhfe4ZLofZJac3TwvXc2TGhXDkV2adZJhuWPJshLfgUpkgz8xSyW5Wm8h2n3Vmgc8XngNGv",
  "key40": "2C1CpJcQSfJxkneebmkPR8Ja1eWFYBjCbDEqd85V8p28j9bmkhPEyrA685VbZ4EHD5VGcpVTEyzUnR9qEuQD5GN4",
  "key41": "5nSi8w7jz1KGFf895qUXfLmXtE94db73Rqcj5KvCLjr8YWKFwYx9RiknoN3mV6brdZcJkC2f7UAE3rKozja8bbrg",
  "key42": "56BqCexcWazTQSwWN9ZT6fjMkbd4CFGF3v6JfwecFvkY32PjMKRweW7u1927UfHVcuY9ZG27e91e3ZhSbQruFHrj",
  "key43": "2KNKoBcs3h2LTxjhqsLkYMevCnYvqSvxg9MYAkrXarsUYxWCsZx3LzaEi82drtdXhCMVVpmdPWDxiMH6xpBHrSR6",
  "key44": "3dWGeS5EbCCFABSUuc1KyttLN4FzBsLi4HrCVhBqinNMosxuLRBMvBC8Uxxu824jjJcc27r71TkgugZgzv8A3yEX",
  "key45": "2nRutYsRzbt7nmEUw6nnvSc8QqDrKjGegrAuJdM8WQRnQ6CVYFg7yUVwC1wjNT6De2a4DkXDNF2ajP85ivLztDK8",
  "key46": "5SLiazeQ8dfg9MnS9bk9BYXb34AKtNWELEy4PyMmqA79KcUyWMT8qag4PL9tzCf69rEbNMbcstCuYq9JNa6VyG1n",
  "key47": "sd4n7wVg8WGbaPB2w8Kt8R1TWJYKhRdj8RJUz65kfu6uYf1MCroMdfrEN5XjghCvQ8vdFrLRyBMpryqUjx3i78K",
  "key48": "5ArSdN8zKLuQiCYgDZN4STT1ASTFEy9K4JnR349F39ro6Ri2ftTiUWsoEdZRGS9XjXm27PjWTAZpvEoqYWvwpZcL",
  "key49": "4WQJfdXhTCf54FzeyneXnFn35qFAqqWWoVt8r9B3F4sA2XJKAiFY8Q5mf7Nhmcb8BZYDGNnHQtyuaTWXcDEsxppc"
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
