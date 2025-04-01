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
    "4dpTWZ9dh8Fz6bjCYnFRL9sTxEJ7nDUgwUJA3SKVwpkEek3ydQAjeqt7ZgnVKJVhQX6BhMEmD9UQJYcgUCS7ptC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z41ycUnw9thjLDnvVSE7YoA8MKsYobry8QudfNnjRHVC7YYNqEYTHXJhrnWD44r8VBfRSCAQqJSqAjbPZjvpNPo",
  "key1": "432Z6LDxZLgNAZwu8tMkyUKtZ7gGuAyZKqoZrwo3WS5tKFr7JTsqNAb3iRCg1T3SXhGDdAFVEoDxCwZ6gGpMvvwm",
  "key2": "5arUx3rsX15NptVSUQDh3zHxksV1jrphBK44js8tomtJ8YxbRYsLJ2PefRtvttRV4FLGrcPP7DQNBPf5ryWhu2Yz",
  "key3": "bzcrrEFds32iduH4oBBrHGcnyeFCY7QW9eJqwBt5ZExjrWa4am5HAxRo7B3sL1TUf97k38PU8f8FZXkGRRtuKqn",
  "key4": "c3tHMDuiTwgpi8ypycVS7N1BoHBEogdK7WMmhGYJ9n8tPShX1q4KQAoF3SNMu64YfGCPihDd2hjPPjD9kEg2xJP",
  "key5": "5UEfh6rKukPuNyUUzsZkPpk6BGLdWmrTyGQCLZ41Gm8w65QgTPTjENVJ6SoiQL8y93XfceVw8JmmcjFyV1wSD2Xc",
  "key6": "LVatrwGrS5XpHK9WkSboAbXxCVyBouK6NGKLay1KGXJzd5TSvzmkunmKryJE9JGvjQ8H9ZvbYmLBYtUg253aJAi",
  "key7": "53AThRuGngth1VMqhfGipevQwU2vjego6YwXrqyhRyASwc7YTPFziP8CFTggV2kmezzYedvf3RU95D19w3eEUfB3",
  "key8": "2k39VfyTB6nR3fNuWkpFYcogCikXC6JredFQaArgi3Em3m47gxKgDxpN5dTWGMopSCSgftukq4yXYbY5a6wqPkVP",
  "key9": "EMcUpaynGuoubH7xnVto7WVn8GiFbwogqfttgBfJWdd9JdkKzDdRJEM9xJTkpKkVDTARQZc46EjvHRQokXWtmNv",
  "key10": "nQNkpcWRFe9uK69kAsFcHiKReXqUdEtpC96ezAYhqo4nGMpoEyuD7QP5iZQRhVvC1pPLtb5E2VqjdScMW4iCCKA",
  "key11": "A1E8dviCRrMzyfhmaGSND1YBqyzbmzKgpvqZZ7WJDJdbfbkpiFMezavYLDeuLWojpZKT8Ubgqq5tj6wetYg2vdR",
  "key12": "4ugQfEA6zwNjSpAty7m3CWQaGNPNSjReAKWwfn84XHNZbJQrayppXAuYHLosKGM3LUiFJ1ptxBL6H7aDbTHgVUhQ",
  "key13": "pDgLdaB6JKPtt5FJnPufLFmR23xjWVw4MHjx9ice77UdjhNDoV6398kruhX5UhycQwKRj6fVDexpktukvtrpCyt",
  "key14": "4XkioDTynH19pwxLp3dov6NTJutnkkZeD3qo6ZJas5aVkjKr8WXHFzS3hZ1AAaTukCwrBLLM5GicZBJgshwMQN2P",
  "key15": "23fcgsuxUBSfwWp745Bj6cvBkXbfyE9DCa16YDoW8gxPo6wP2jJTBUKXK4A1tvZb7FwWBTe7kasVHmoaRQBSz6Np",
  "key16": "4GD2bp97zJyxgcPRmF1LyZ1UpT6hCLiEZGDMdhisVZi6FJrcXZynqTnuBrCfR7LJRLEvo4AoEyDw5Z3zN4pEWatB",
  "key17": "2Z9rB4conRprZv8tnbbPhqi7GfT9FVwEpReRUJUTmbMdStMQbEVTdkMQutD2hipcgQxgQEfLXb1zXWhiyZTAFZEE",
  "key18": "2UyjqRQu2wAv8HMnrn8nvZgM3rFxyLbehs7ewuWB5Lvrtux28FM4dqgbaYkbtKEHyi1tkMzcAJQbugC4pCCAZ3rd",
  "key19": "5w8tBmJVdqAjnPeKfmPX1T2JLruatszEMhCuw9fPpK7DvPgCbhikMmbirBWJ7RPMpiSLJtyLQTvVEGv2cx1gxr4y",
  "key20": "5GkVpRGyPoqWLqUC7WRnCkc9Wsy8G7u8DmJy8g1u3xXLRs43Cu4MPdupza8dHG9hup9jVCFtYNNbjQaYLpCMjKJi",
  "key21": "izVNy8R9XQ34g8Xqe9RcgTmjgw2N2QhSVf3WpU9EAGBZzDpQZzMmq9BqFRWrd2SdaxotEAokuXZXDSuwBvLrizR",
  "key22": "3aT83HDKhkeUrwA4GdCssAkzc1N5EYv4JNiSBFvvzYXbpcngRgZApDuDbC8A1vjjghYJg44zrGgxkKiZXg9KuPFJ",
  "key23": "51s92bamgCeaMECzSD84j38fNzLBA6bxojtPWAKmi9RvmaFJZDhnb8NbFqWKmn3KhdvVL4zyhLHgXRXKE6ef4FSA",
  "key24": "ur8FKcy7RXcFREKtWiCPTpT8zo9A5LR5UmUpUVF6AZg8APFHJTjt1TbjCEwXhd2y9fBfCaTuFWJ9zxQQ73S2APX",
  "key25": "3r52hDCJFhq72TQtongwAM4cbEofAY71Mt1rTW58jdGgB3hmPVvv4AZVgMZE7WGCRx5LCqDqv6eCn7mDsPWNird",
  "key26": "49bkH4aTd7CAbpcmJuTVUBpJ7zL6HTFPKuR68NvtGzYMtNU796WWLj1a7zww41XYncqvqe4cNiZttZDMBj5raQJc",
  "key27": "3DPKTmv4Dq41PxamhEztKJiuSJyA3z4aXVpAdnFQEaNfqw6KHwJ98pERgSzEwQADaNV4saPLRPYPgrMjdJ89vGtN",
  "key28": "382bD3m6DdLH3Uad3B59kXU1yR7PJNx3ae9h4pEf7ULszWM1N3W75SFesmmuV8FVdAbB8h9piXC2CVTWmVxFdwM4",
  "key29": "4PkoR8ShN1d9knpz9DZDwRqratdT4wa33oQWVetFXnQhvuT8cq3jFnq4qg3GW5SAvdUpB4V25dXij1RPD85PpSGm",
  "key30": "561dhjzAUqehktDmaXrXU9oWtJ3uxtfEx3ngUVFaiBKm5CchbzFW5fW6ShNheGJ8tT9SktQWbKQeRYdTHu5eRqpc",
  "key31": "3dFKQG3MyFupW8pWSrYZg8LdoSEjYdTpj8SF5JGnSp4dPWTZeN2a75CNjxMUXKuBZzTmSYW3yjqftLVmAo2RaHHk",
  "key32": "4yJMLfofq57Vy6V1pNAYpWmpQyPfE8PyHyTEihCtZySJAvev3hEAYzNg9ohZSG7Y27kMdTf57gsyxXkj7hjnb6a9",
  "key33": "3KVjhDGWdDYse5xnkG1rnZ89Y9xG25RJsJpfRWGyhB2Z1gHUFjZfvEksoUguvuus3CyGBvG68NXwHfr226CC4aXH",
  "key34": "6D6Q7Sm4dfzjikPyFnjo1oKpng45Xd4V3HrD7cthL8dvMVTj8Qcf7ZdpRDrcpcVZUpRgvRqAStgBjLbkWnZ4EFV",
  "key35": "YEBtnGMjArmra5TzwoJSCJw6yNKK2H1KJdntu81ZwoykEZvgYnXyEeGa8iabZD5BE7SYqoujJyr9yKTFqp2j1gT",
  "key36": "RxCWeSmfEJKFbcXKdeUWxCRDf5xyyJQiVdTMdA7WQmFCC8pcxBWcknXYdbFZ6VgunWhzrFfaSUYPhx17SA137dq",
  "key37": "5pVuYPNShuzQMJxGgJYWPhW7WQeSrwmV3UEzgp8niuZ1UqpTkqMenGdeD7ePDGiceHRbdNaVZ5pns9g6desNJCWf",
  "key38": "2CL1c9DSAtHYB2e7wc2DsubamSUkeitiDmjTWRfdonQRx68oTYkXGhUuvKJfE7vCg4VAd5EN5vumvbvNkijeFh8K",
  "key39": "5SLRoFykmrtXami4YX4v7pJzgq3fr419VyhCVCivnVUHp742vswLGdaJLLpRYcE6dd65YFRDXu4B7A5cwMDfT2JZ",
  "key40": "4TD8DmPJJR9E595EXXAjWB9nFhxMkfZaAaj53CaKZWD5h7MQYSpfvKh72yot2oGS2JpQZsyGAS3HpDwG8AEJCif2",
  "key41": "2oen1RoDWwy6aWDDzmLZ9XAb5b4B7BAriNz6BvrDAZ3rYKara1npsdRSUPMBmsKAJNWbo8NtLtHyvLFPZPPFTYJ5",
  "key42": "2Fj2RfQRUoFJ8MNam9p9tZRT3LxgJVdGL39D4YfV4Y2AGR6NfPQcioav6En7XhENuriNE3zYExsvQT2LtSm3T3Ty",
  "key43": "1uPnWev2zgmV7Zchxvxww1fSgPqZZRXzK7wmbGvjmXfvH6LtkfEhN6pEbF9eTe6Px5sqzPf82TBQMY9y9FjeB3j",
  "key44": "2fs9BAftuL9TpJ3GUDHEzJWMBne7PcaiG3B4MtXfKPc3SQG8X3Vi73oVbm5dw7kVDwFdGkq1UCY2ew1aMUqDcuK",
  "key45": "5AsQHm6h91LDcwCQQfJ6VmZu8vGGawaFpU1ddMbSEae8ykCmHGpkuGmJ82weir5kwWBNAZQtNDeQdY5Ck1dnMkQw",
  "key46": "5UmHwdFmcT8BDTjGSHg4SrhjC99DR82jD3sBxPbuJwSAsowW1QdjJGTxxAM6Q1ESZ6SA6B9688kS3xkxGVXZzGD6",
  "key47": "5q3ZBn5WkSiPA6t1BL5uoxjFtov96MtMERuYSj9YXVzeDwo9ka1CQdarzxgZ6Hu18svyD5RXd9Y19RQ8PupHRVg4",
  "key48": "2oPs4VNP3wqYjDNF4sxaouEeMuo3WfoUFdNbDPDjMWyWHkvpVF5XXoEvx5PGW7oWiWYh4ZbpHL6q6SpbYHFwMGgP"
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
