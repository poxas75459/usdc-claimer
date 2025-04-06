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
    "31Jd1xT82WbrNkdeDMAFZP7cqmHoKvAJWMvzQjgRkiEf9P7PFHfWM1F65gwn85YKAKnkYVER6yQVb8kPJZ6V9gM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iD74sD9JzF7ct5DThh2Ljhz9eMnC5x1L8F5bfF6HL8sNoW79d7DoJP35XwtHozsFQXi87bpf1D7E5YBBZFxAPki",
  "key1": "B7gDnojsBeR6yNkbzpRmJyRDAJPQMZrWNisoiEHF8SnagPEqBtx7U6WhKzRT4Bb618PQo6ih5xNY5Nhi2pyKWjG",
  "key2": "4WQSCSG62uG7XEg72iY8Mvk8EL9XrNjusxHKW8Zwrng1vKD561AYgpqxF13FbePdW5SgMDU2vkds4d1y4Vq5smGv",
  "key3": "5ECWyZBEkybsrcR8ZRuo1GAH9sEn647x6nFx8W6QWaBAFZyD43fSMaJmbsQiDEEUBof8PZJxgT2aYzLWrSecPXwb",
  "key4": "4abqSrvn8akj9u8sioWXs1fKgJWcQtxZ2U3DR1YgHo4rUWiH59urQaLKZWotVuRJo1SyqYiXtDGvdVW3ih2f4H8c",
  "key5": "3pU1pJuNjs2VLcjUXZWBFxnPexTMAwYCGLqihRkZ37gEd6vs5bZNvsXP3dUFyCbu1EAHu42SC4LepH6CefqXkyRA",
  "key6": "yWFtLa9e6mSUSDhX8sGGAHXyf9Yt9jNjHXgRshG6XURMVxS8YE6DptPBNAqm3umLffRRg8QfdDBTJ21Qt3VntXg",
  "key7": "2tZJMzznRGapJN42fuHUWLXXPRgRAUL1ZgYH4FevGjh444c9cT2zgQmVU4gNVFEci9vHkCp13Nhu58fB8FxHiT6G",
  "key8": "dBP5yC2VwQAF7hNTeaQXA4wNeEDW9HfSnWWdiYx2b1UbiDVy4EaiZf1EVtHmE8E6JG7npNH6MzbcpkhQc3jKb8V",
  "key9": "VcMXebMfwawbDRf6GZh4SoZuwLsRS1tURHiYgwuVyCtpCsmpLc6RQQfFuyJwXkbghbvgJWUH6G1YowfqHcCYxx1",
  "key10": "5exLURMHGEySSCYt9ertJFB8Af2vm7MEvJWQ1571cVtZBSpPP2vvQEtHwfrGtJYZbWfWPaDqvhLYzFaYfE7GJRpA",
  "key11": "54hKi9FBs6iLbEjifvf7ytvRRuPJdqQM5FVffGdjP6Nip7qxbYdA9uoPiAxtbJnxW4CgkMke3ZCzYJxBeH67Cj7x",
  "key12": "1ruNUriUZDbyG9M2gxrp5DDxNNfXceuyN3Q2K7UBTkWnv8EGNM2kvQMdu5wUY96d4tMZFLDANTUGE728Vhn2V7Y",
  "key13": "3Q2acZydM3v6je5PZ9ZmpHUvZmKdq7TFv5mcyPEEbPZpuQkpmUEsNmPw8EuXchtx9AtZgs5nWVYyZEzMGYJsTAs8",
  "key14": "5nZ2T9YCJsHZ7JAyXo5xm2rtBh2edwJNDxJhEbeyjuKfyzqWQrWwagQfjqyZJBP3x9B9Hn2tpE6Zd7CeJ67EL4bb",
  "key15": "417RoUyMiGQjtSsn31pd3gUJKanHu2Bh1ta59XajmegMfYHPdBRpU9aM9cZgeZFSjqbuY6SVsL7CuGRiExc2iRf1",
  "key16": "5ge9DVs1vuEbL7k64Fqkbp33zVdvc33eVANZyw6BMasB3PrxjqHspAuQKjyfuWC3cFSg2f7hK61KheLSRU3sRHMj",
  "key17": "2awLSgA7faNZHgePqbF67ob2V5ep1wf6Mx8xgZHch6pzHrMd7PphW8qWGgd4ecu2towTBDJy6PNuUwXsn3UathBc",
  "key18": "2MyhuVkzG3gRGGreQ2jY4xVKXRC3yGaYHPw6sSaewdQJy9EpDzNcNrevA62sT5aBsfAPAfJ6BUpmmbBThCewFGCK",
  "key19": "uXK2j3RheiXE1PyfFuMdUcD7er7tGhGFxqYTuTpDyG8BFpYZAnDMraGPwmK99GFGiSgUAFWdbBE1BKjfEYuki9D",
  "key20": "61vSwDH8dDWrPtqndjvjnSejPeTrPS6dkzKccQQEFd4a8uGuFdALHbfsWKwKK9ZYhp43HZQKdaSQmx68cEM5bCpS",
  "key21": "2BALJvRNdfvGpEpquTfrgZ2bHMBZQxuYBJa9NC6UMjwfxPhFTKrrZSyGSXXJnTL5UQbyTQ5NNkmYY7QtgaT1a5ir",
  "key22": "3MH7Smi9g192DpKMp8Hf8eXbiYKePNBaPyBTYYVBoob7vjxhAAHLPSrVfZY8rCm78AWH9aXTWtemDXnBYJVA2VAS",
  "key23": "ZmW3xZ96Qjgn4mBJgMLkj9EbZ77jGoGMtojs2qYHxUNUMg1MXPivLhEFyjm33ZZM7fuDWH1NeRgove6k3BiSrp9",
  "key24": "3Aj3Taec3ZG2DXu7Et9D5d4dcDVDajCdGmcuzNzFyH5J1AQxbj8S2xF4Nv6UgoXH8zCRChta6Y3mbFWFiG7XgLom",
  "key25": "3rNzCSo2mYXumurzzeVSx3dDGqi3Je85G51m5zJ7Ea1gqUXwSogjRPDBqmuyUqqBmQyEjHqSvrBAFkuYE1GWZLCX",
  "key26": "x3p7CsvYVKtq6vSgtoub93jHG3TVSrrTUyotgYAAhXqBwBg3NcDPqwVMPHh4cnzXCVCxGK9panJdoaUwKgAsEBL",
  "key27": "535sLoMJLBqPbjJPzcTYFcgtsw5nz7oMvK2mpJBARAzkbsYzjVu1PfJk925AcPoSC3kc7Adhe4Pts7LvxMe587je",
  "key28": "zyr3oAW52mNfnCXcanqDbs4hARysfRcZFwrB6rcwkv8b7mDJQNZXxDSjHYuKNqf86pRJ7XF8YkoJ8CV9gFYA5GU",
  "key29": "5LvV5FPZJCd2NHQE4V3wMhG6xCeVz5cCDvkysgupQyjxpYG5TVceGovKi67ApMSbhCbshHyesB2Uv4bHF8RAu4UM",
  "key30": "4GJXgaabHK6jamgidr34xv6FTirG9VGKTBygmGsdJkXs3TewGN4DTcGL4iHDrhdvuzSHJXWQDnQwz3KjP88HbaB4",
  "key31": "54X1vCc5JiKuLTh8dP1hQz8DWoTd4hva9nLf9syj5qFdKfxhDJjXCpwFPyKs7d5ugyDTTg8ExAwJuosbroBuPdyy",
  "key32": "4rmKVSD2ZfYpQ6iQhm6nt43VtnRfjNRv6sAZ6SQu1F4fpHgv5TigxeYceUDVv1JyBmNupKZ1wzuCEp1TXu2eDbS3",
  "key33": "3YQdanW2tR6Ncuee2jKHhyyPq54LDmkvigL5E66jPaPTU3uQL8yWrVQco1ZieJ5undLdNJCMkSt8RdoU8wHf5wUf",
  "key34": "4FkzYdEEgPjPZgVEdrU93i34LeKfyFVubXoo2Gth7UVYZ39tgVwM9xzLjJHZciePSFZSmsTemdmKmpgaxKEXa54k",
  "key35": "4JQ17mGtpjWK9BfQWz9aAxzZfz2ZZgtCEtxySRWqQXAw5yYZncmzL4e4kMi6uFk6MB3kR9PnTL6WdHPKs1BmkReW",
  "key36": "57w7ZRuJ6XeQ2uKx5SnbgbsLiSALjKBVJfxexX3p9zYY4LYz2NZFk7pCGyTbV2PGJJQo3At5o3DLDfFfAhvJwSh3",
  "key37": "4JM6R8tWQcmpTc6Y9cBQqRAt9LrACiU1GjkzsocmYg1WnWgmt8HpHXyy58jQuSeqwtwH1ptBYR5wKVH8MwiRoXYF",
  "key38": "4q8VUv8ydqrdECsjbnoMtdH5CrDTccxCLTMgtazZJs7XEvk465n2b1StXReGtH9hH2UfnhNefvr3DvC3KmXmwrm4",
  "key39": "4VFT4ZKzvLEqamWCYnZHmJh4UDWQNWSkY1u1hrUTPZ8j6coTbKXqrSDdXQtbzWriqkP2Qob46D4ouXfYh6uRsSTm",
  "key40": "2sxcM1h55gXA9d7n8b1kx1sj6Nmenv29EczBPa6wwnLz51ifWBrgBjTtd7j8owyYbWF2VYnxysq4CbgoTP2iYWgj",
  "key41": "3YxKwdgMwWvaTFACiZ37us18Jm4zzHNuyeWP4uJzy27uYdnR9yJWbGZygxq5SGJXJGpPWCbSbH2YWZV3zJqFJ7XQ",
  "key42": "5qzebHxxbGi4opjdbMR3LqscLkJL4HAW5Nxm6adpCyq8YCcj2FXU9D3cDpMUW45hmS7dMbbQU1VCqrnDhcg259gG",
  "key43": "2UXjdiu2Y6HiPupTqASkUtbzx2dKUDZQypJs1Nt5a9cyHjhiZTP5fD8X4vvAnrgfHvGGDhSCk2uiFZYmKAKcUDzo"
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
