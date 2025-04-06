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
    "rD4uoaoMZWxCk7L6ysXehpDZpDWjKoZyLSJxgHi516NzzeePWr111uU4jZkEnfrBtnn7YacmX2d3oBk7eA1FCnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvtT56kNtM8bymN9St89rM1akpg4Cc1FHcYkVuw3JwcHZS8YRkML7jBE2R6XfBQo7GS68Fa5PbBGR6NKt3B235Z",
  "key1": "2FqyQPGqQQBRXevyYNVgJVQX9xM7qg3dHJjQGJnS5gmrTzv1VWpTHSMm9gTubNKj3RAuK8mr6UXiqCTMz9nhuPp7",
  "key2": "nnmeW1Let4uuyEEfhp331GG8TArSmYcajRTZvEV8y4VG96XnxorDPj2GuHCR93Abaz7WLQvDoRAUVQoKckPHj1a",
  "key3": "3oLqAuTtFRCj27782JPQL79zzW8ykvcT6JFsE7Fy1ZnJ6JZHfmqTDr9XfupAPLH8AhdHiqQCp9hvy2VLAXtBmyqF",
  "key4": "45bPKKBvWEK5zQW76o8Hb4cZHeEMkvMYcuNTK7VfbUyRmFbFknCStqiHoinabQoya1wecd6ZJNeorT8BPuKYUSQt",
  "key5": "5hUuGC1XsythP4DxsbvuUzyC3bijeadQPrGAkwBsMNGBomjafyZYfw4monnuzcsBTts2zLY3TCLkAtsmpJwowLc",
  "key6": "34GS25ACq1VqAgbPtiMb3g63QUBDUMXKP3yMimc658YngmbAEMRDf29yRGeFhEhWEHJ7NTLxjqEqxp7bzh6eRwFw",
  "key7": "ouTZYmaRKzhLwSWaUiuQUr1m4MBYwMHPg1SoHZLFNNjzj71DTnx67qLA38WSgRytKFcJfAnSqk5FMFQGgfYHQVr",
  "key8": "FpgzY5RCTYXNHWyrsFb98ZUMhGsVFmDQRiCdkcfvzqX9z2xfiKNSwfu1GMVXXUdfTjtg454xmbFb7Ytc4mBowva",
  "key9": "237LhSF5robwotbdmWKHiZxGdpLXVKK1UGhdZyjkd9SdBA52W4NikL4F1eEtLXpY5CJWBBqxUsJaVfLEVgPqmz2h",
  "key10": "5oaAQU5FBRGj7tcgcDzrHUHBvSGdLTzHTa4H24Q6FFiFgFdrcast3ytu2iByqw9s1bLuqusXDMth9vRs5BZwHSqh",
  "key11": "5Hdpz54SFf5fxsUBvKd2Q7qcGPZtiWKhpcBQfpxZ9vFsSTCScPQZCMuFhVtPeh89q4twv82yNLapLHEbRj5YGSR9",
  "key12": "63qLa3NFfRU8BjsvjX4nf9ZHhWkM3oDkZhW8SL3DuwkQcAwTybXDipY4Q1Evd2cnrysPH8GbPsrGysSeoPciffcA",
  "key13": "3oXfjQCKGQovF6GUZK2EeCv8F8uRjEhBg6g4D5WmNeHXZxea6dJah1NsJg6pgRruZwRLDFcEx3BsLqCz8VmhDbhc",
  "key14": "5qKwHFsyy29iHKCU23QnXKaogJuUVSn6ZR9rVM1wNuRwZbcBJRjdGFC3Nm5s86tT2bQrQ1rt548QuMufWCrw1Joe",
  "key15": "4aquFdWHcJqFxpEUTRsFp1HD6kzpsk55okCgBpPs2u9QeDuYMuYMas1e3HyXHbKqSFkGQqq2CTzgYvq7uTaxqUH6",
  "key16": "54tp6Df1Cbgnb2QzdS5uiTH8s1DLgBGS25wetdMv8hkxEwQsok1teZVMMx6fjx7QVo7FVWRzXFVyX3Kit2YKdEg3",
  "key17": "225bcLhf7pBiuRLH6UPSfz9t9yaavERr1p6wqUnhKmCvb2Z3EYRK5AW2o3S5R8EFh6J72Fudmc6SnibpghjWV6oW",
  "key18": "3aE6pqSkZRKrW7NZRstTXKRWZe7uEPdDTS818Vk6Djti5qMt6dhKvL3ekUCbuDmt4NzUGvRmckwJx2GkmyLKVqjE",
  "key19": "DhCvkZdd6s145RPyvxZbseitnvU3QAniCgnmepeq3NezGbEP4rkYdQLnjqjdQ4vUoWszrPhQsHfQPwdeTxh47Km",
  "key20": "53szanD8j5FxHAh7p5nqcVWerxLcqEVLzTnQCoGwVYYRqohoGbAiHid7RF4zuweMLmN6Wib3hKAdbvFjH8B3a6Dv",
  "key21": "5Ni5YNExrCFPGAxvD4N2rBe9ZwVD6WrjNwy9grrdkbRuYyYYjKAkG3dBLadvvqjwajGi7f9Noa8ufDvox9TUzo6M",
  "key22": "2WP3E7qeafCHjGQzZ49tExkEcY5kX6pJR2jKdiBUP9K2RXVdkLBMXkdC9mS6qCFgtTuf8AFG5GBV24WxfdaDJWbD",
  "key23": "5H61AuJbkHtcNTxNMbkgGNKmYMqy7NJa7eZPsCAaWLmgkg6asdpvkLoUzBAxyvUF611HJZV9nYykbqPg1md9m5LL",
  "key24": "27SEPprhz8i5L5NDm38V9v9Nq9qLMNqeg1BLmHQJvmQwQRUygW4oLbaSMKDZZQU5C99sizg9VcWJqKBGAAmCBL5h",
  "key25": "4tcddSi72CoouJuK9mSZeacwNpg1CEH9bzwSNozHtNQ4iyJZ3hy7yNnF6295zvBg99ERww4m5g3XbA3tagD67ZH",
  "key26": "4TaurqCrzHfuxpCfTJTMWJVvA1oJbsqPTaoPBBiL31LjRRMJsBRVWUUoYncWEkgtT2q4SbU1JxFM8LottPWtBxnV",
  "key27": "3ZrjA31MkHKaGzZnP6sNXSB3gezfMRcR26WY5TRtawPZSBn9yhZhgp8WGyVtL26hvaufeDnrCuSY3TVVizTw43wy",
  "key28": "2Jwz9nHp3dSKsXnkcb1JfSQ1j2WywyW4PE732uh4sFSHwSNHQ6ZBzKEqY5vQ8mkmJ5dRQeRPxo6Bfv9TqRt2ukmg",
  "key29": "4Cd6KpsDA2a3g4JiEBcDEMtCKkvfNQhTyYtb18Tohoqzy4dUdbNVqRanu8w8sFbktQxrpPo5HNxS7C1QmBiu1MCS",
  "key30": "4vzgZSZPousXVH1h71dvXxVoGCtGj5gr7hRrK1kqykvK8Kt5zT84UbNyjVRfZEs22C9a7jL2wdebB528MD2thDVQ",
  "key31": "64b8ZpqzzETiV9cUMStMUYhCj5xJFe3ZZTNeqBBdT6d5apWcR7tfaHbhV8F3kPHPQNLdS131J2RFXMg2N8eNpwsc",
  "key32": "37N9u4DHnHji35mm38WA7hqQVQpM9sMCd6kwzjSh918amcQnB5mA928w1DJARmJfvTsnfHdziLfGTraLeWQRej7t",
  "key33": "7H8G5pVjGQ9ymo7YyPj7w7ZvQVFgrDCET3tu2XtWrsvxSgG123XXpXb5wJcvhBvWEyxfs2pkHbXbnuZZ8Fm63Qh",
  "key34": "5M1gLuVjuHWe8hAb266SZ2hLQ8FmGJZCjCM5ggwk1vwaMAV3AzQXEDh7MCigPd726WU2fn5UiKPimQz87oebJ7cK",
  "key35": "4eAGC2vv3zX1LCUBzKjrscjAmnPEYehnvYgKhbfTSibcEMKqThGyZSEsBWCY1E3cjctV54SfnhvArGxVgV4AUnSa",
  "key36": "2bw3sZwpPp7ysXSjh9HBFzcyknbRLFSuX1cT7LyBmDTuRwLU1Ctn1GHcF2Ai6esVhzrgfmspNfwsZK39DyB7EG23",
  "key37": "4bsFSdMX5gTBKC72sGS1HuzcELzDS31Er3z6qmWQ8o5hcUgKoGMru6HfmeqUbyE95han27ddZfnnhJLaVvPTVK8J",
  "key38": "36u4j7ejWSieR28EDa6QFZd7xQpYq3V2psDyYqCuKXQ7awmL9kjbnMxdgJGK96wWPrx7bAfk8pEPL1VhNoBfB9cD",
  "key39": "5Lu2cyfW72vRxvBiBqDqUgxRumebgFdhDVU4uZvE3SzDgbRJkVoDqQpYrnhkQpFCdcZh51zQaLcHnsPHafVsDMxM",
  "key40": "5bipaWsqW9BTydM1PEevuG2GK18wjMypvBJ8R3i8sbY338Baubgfxme5idvnoZaB4ZEiY9pXQ58XicKLpsmYj1my",
  "key41": "23T8B9Hae2zqyrzuvn8fQPwEVHE2AomC7uZeHDRSdZTBCpU7nSp6PP97TPYMTqC5t3GStjPdnfamYSNVGMermQX9",
  "key42": "4cHd5BVtWeHnVwj8E9HeMYPrUrb7iRQwm9RP6rhguM1XpmoGcCgttYHqbdvC3PyCbCeW33Q1QCaUto8GRMyonC61",
  "key43": "3EyW68hd5mrETzJr8SrhQJR1qHBZMTA7mcCEe9wgRSHENRsJH5J84Vw1RrcFtjFqfmdzsSpsiJtYZgKxEw8WhWRb",
  "key44": "2xcABtG1gBtad7QsvMvvDCks7R1tU1zg72kPXzrzdsz81vYLbk89DM2P5ziBaJWrHHfH4C9rRTTXjCVGVnJWv1q",
  "key45": "4iH3RACDhowB5g8aV7gs3oyw6AiuQrZJ9562WZ8QVLFbrprf7sCWLxPeNpJfZx9ZuLc8rKvUpHVM7QqD9UnbuPJh",
  "key46": "3QhVbJJn7RokxTyiQQvY64MqncAqKsFMydmTtYT5T23mTF6jXswbKyW3hPAFDMEgSGpwpgd98TKvFokmwADt8DJY"
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
