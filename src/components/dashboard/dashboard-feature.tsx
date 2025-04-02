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
    "4Q4MnxpU7FpxCunRnfSZLMU1E7hmS1QnK1bGoynCoYEWBw1gQHCudXtPoBjwWfBqbfh6JRZuL9hJEvTaErAGG7CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wxWQruJguTkTzUSJkwhRgk5zN58N8PeuXBv7LXuUo6ef96hfZDwBkGyJ1fSkN3R3F2JQJeVpWLHZ1GuV6mFsbs",
  "key1": "3bCh2Lkm4ESXyForZPivTKqk2DKawRieAMVGjfyQuinHq1AJ84q6A1Kev1fnbfrrVgdpPVagiE7QFKXHtmN13aJ6",
  "key2": "MjePs2UsT3EfzvBByiByaQFpD8U9REXVfnru2cMoURt6BJzpXVHNpCKbByfQiuDRRScvkE5FoA5V42Dud26E9i2",
  "key3": "4WkQJBCh7z1qjDpSoVv6FWrJZ1tGGy7G9kSGBGji9zNGUCg622sx5pmGMnfMUN1ScBUMuNfYok72wnGAgVsA5hjY",
  "key4": "4LcYkgGEjCwqZCvQQjfinrfPy9cMysgmwmZL1MHfgnFanAEtHxLERt7CN88ozaLyTnWXPLbtuwXq9qyurm9KGHvc",
  "key5": "2xiqbo2Qouhp3dTkL5bWThHr2K5LN1REjjRPvRiypcF8CZNyRLCynFMVy77NBqZohoErqZjCCYtbB1PeJtUac8vJ",
  "key6": "67TMfkspKKVywx29W4ratzT4dh5fx9LEEqEyLa9Ue2uU39NT7gqvFsYQLvaXgYY8wpxkC1bMCSNBRtiKvDnJwA2d",
  "key7": "3X4J1jsfmTakEmnsJEWkbE637AGhhRVr9E44q1KdajCYWJD8gn9HpYGUdB7Xzb1rxw29pRiZErzqxeruvMMkfedY",
  "key8": "3UpiKiMsvbYuVCAYq75rqffUyJ5Z2Fa5hZTa6bmFaqdGv9Hoc8cr5qgo7onsv5fpu5QEB2kiVQo8YD7tSzjjG1YW",
  "key9": "4B2QegRWdCGo5wsJFYKDFNdiVbCuUmPh2WuQXyMcQXiPhGwgkRGpaR5Y6zurvzCuGeJ5qzPnHdjsFgvBb2tpyxQY",
  "key10": "5egx4WdFbqYU99xxCnKdUkXPFYhywHUw9qHuyRKMbNPFX1dkZT3eVmwE1nZ2uZQ3sUUj8S241Ri1vkNyc6p8Mv99",
  "key11": "hzYfznXzw8XvXv1kqgScGNygTiKiCxKcd2ZvugA7fcfJNQ9Sxp9woSmfCwDXhPRHuQFo4brNtSjvG8iZUSa8Myk",
  "key12": "2Fk6p7LW64HfSg5j1qpbZRgFtup1ox1bHQcaDxotBkHFn2d3f5HZdNbBuSLo8rp27PS7e4QwxPgros34zHzSHEY7",
  "key13": "3vjztD7SHUtEFWNfnsb8T1QCqfKH2q1giuMsJisCBH1y38aZR9Y54qUP6gmkG38wWFFFhAg94ASNf5hjExPppiiB",
  "key14": "tH7t2YALWKx5g7VFvXF2PiYz77F7ywt2vegsXF19hogmXBxkVPnQKkdVEKooXfMSyBj2NmG3LzYi9v5vvWyfcJc",
  "key15": "BVJUe2hZZGwgLQCFNKM1sEq9Z8xVU6Q1DkAc5haWEkHtJ4M8NvKxRopmGD2nFUQUKHEUQHA4Xdy1kSWLUCEXQng",
  "key16": "2H25WpafcbxyN8FLDyqU3tuSKQz7nJwNWzK7PqPffDbsWawYuCRYXRiwogdnW6987w2TaWkto8KVUS7pmqvyQLp8",
  "key17": "5HSbguwdhARSS39J5McYG4Vn38rpRjxxJriJPBCT7EXjZwoa1U2F7gX7RNJ7Fs6QgyJLr9ufyth37X9yhx843buz",
  "key18": "542mwGzdkxFf6i1JA5o7C8BoQujQYqprnzYD4KRHjciVcKvUqt41GzNgYjWubYKDrp7QSqJFvoysekaULDPTP1Hr",
  "key19": "4haEU86kSeemkuabCuLR65MwvB1BJRAgXF6VrBaWu1BDqDtHyxD4UgpXVvjeNXYYoZ7wCX1X7uXgTNeofVq33Nc4",
  "key20": "2Gp87Yray5HaigDoVZ3NDMbopmmEjqAoJGtfNzoQFJvS1w3tREuSJYpfNe624E2X8bNio7v43pcK8vWgWZaiNFL6",
  "key21": "3VkWyhu1SAHJGXaLVFU3XrJ8zqpr6g7aDLCDsZqMKiMc1Z2B1XxG9Jsb36QH6m7kXnMghdCnLdF4nKjmZjGAMM9",
  "key22": "5QXcAizMasruRrecFoXXbbdZpL9LUQhLS1Gq9pdhTp6vA1XjJXNvm31bkAy8KoV8zNUzcxUiCeDirGvVcvefDn7K",
  "key23": "2n7A6rG9PsYjtFVikmiYsXwAdSFPiyG8gnedvYB5fE5jdUQL2sAGDDovB1ZFEpGiUfNBZKP5Yu7NeyY5Ys4rubYa",
  "key24": "4P2n1ifgyPsoDfL55wRKSTYSzQe6NzU6AMCDxcf7KivYvfUv5MQoPHGWjmZMscsEsoSYYPTx7SbpSHqoqa5kkH97",
  "key25": "4xQpPTS9ode7YfDC2SuxjunxEG3TqWZGJz9hXA1Sr3JHzjKYvnKfNQoEnKNHnh15UhUbTUHSNVEixSrjJaEFv6U2",
  "key26": "2zeNxvUBehgxU7fue9K9U7gSJxp7Gw3L91iM3b7B2PGn4jMKTvkPcMLpRkL4nNwzocjDnBEFA9zeCZWTRQH5QNt2",
  "key27": "4jARH6BbtuJvZ3xwgMmPxvxBL4qNx3sVF1mbxhdwUHLXUVFindMiBH5WTMFnPa1qLkdnbuZVa8PBWxCBVpdRhyv8",
  "key28": "5iCVBVCsuoPqfuPTBfGCjNmJ2GUq5YbRKJPUjYsJFNN7rd56sQx4ywoYfZGM2NRtdzKvpAuzawNLqANhT614VVQh",
  "key29": "24J43iqeUAYUAUoozx5R8a1FKzgEsKsJAh1ibcEndoDnyoxL9hjbeoa8p59CoU3AvC3K1hbtgJZLAVNGg7ZLoZna",
  "key30": "2RVNYTfnkFZrvZV8vCbChh487a3pxVu1xvH8tynMaL4GhqXoebBdVBLCQY4dKVi1qcUEyZ4Gu7mnw3hSytgPb6tP",
  "key31": "5SwCWNLDKuzChqkkKkeRoYQtnkR8Dd5sjRymNSA2d4NCfUnrpXRBcLL9quFqpHq6eqdN68weJVMGHJdTzsW1FQRo",
  "key32": "njFjtujSpzvZfRc3ySugekSMUqHhEC7dsjcx4KUjk8VDYyyMSE5wUZmN8MQEJdLMPttVBqLk7SLaRn9XU5jTtAy",
  "key33": "2hNZ5qxK3pUu1U2RsgFg1EqejmMZg7K9jojchQ9hdKBx6vcCcygF25j1YK4dfNeG4AASQkqgmfXaYRna7xQNAS5e",
  "key34": "3SbfWSeB1aN6RVjc2piPHKSV6vEr3ryhTx6EJT9UguSxmnK2wtsk5kwGbFFDcWrKLK28Pc7f7zirFLwFwhZPgoUK",
  "key35": "4DdeoqmEtCXEQvZTri9Reoo45ZivFqFTpDxsDESiRtHX9DWobnUmB9B8sm9wguysGwS6NuVGebrZCSBSVxighE3h",
  "key36": "359DeWWAqjXzTXwynsgdDsH7EpfhrnMdA5TRyuHqJAZBN1ww8fb3SbFu9o6PXau6tC1NMXroQ1B7cVrBQgd2LVWU",
  "key37": "2a9wRg7THZomaevADUED5Cu2nmJVD6Jr5g8yZkzmkw9CDiMPH2C9Ap9FjRDSPas91pKNeQ9km3f5BqH2cxggH9wh"
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
