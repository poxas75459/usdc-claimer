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
    "2f7w7nouM16pEgaSmdtd8Gwx5z452bexvaXanuLce5kwBhEU4Y3qpxYBmUoYVVbPoU3WksLWg81x83tNAttxhkVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLsVnQDLcu1R43egrJidbM7DqKbSiYu2Nbxw825WMVqyJ9Hpvojcyyj4kSk9AV2HJSMjSjZU85Sy5ZZ6Tn5WCKm",
  "key1": "3jY5NtFa8SMbE3oz86X1fuxNgGA9PcLboFerEDTqQfRXgqvtXV3RUde7DQsXjwdzH99c5tnwBvfoEGiBMnQ9rqKH",
  "key2": "5mHekfbrFCuKurM7ArSwhuSszZytRHZbBa83GxYCHMQoVShYX3MYoYAFgaYXYZQ2xszSqZaPjLNNSunGjV5Sveat",
  "key3": "QezZvYKFbgqPSoCBXT2UjEkHfiHPtUW9wNY1uRepfMGKVYwFstHgUghyTwWsRo8kGnVi9oYPDswZ8TzcK7Q8yUb",
  "key4": "2rcEh9RGtvfqYSCMzvcaPHA3PhELXVPuG8j1Cb6fw4ZQGF5apQKjkrYGmn74DyC9bGwi88tBdt7nTaLH2PhYM9xb",
  "key5": "2Xg66Rqqrt83c1S4Lh6cqkcoBK36xNCJzN7nvwwxts7dyAK8RtH3Pwno9ic7QRGbAuzTUgJGekT2mostCxX6MP9P",
  "key6": "5huUnFSwNaT3S4mwCxeGhFcHhAVJYDqPnzCDnAweadj9nFhCryBoLQjgVW5jaLjhBgsrtX93nb4adXrCLa8rzM62",
  "key7": "5eddZjNLutBu9rjKWeVWvRBArawfcyBrEjCkPaYRm2ERC2iY5svwB6DjfbVZyJw9P5EoQi1CVEduphMVQboRMrQQ",
  "key8": "2TLWKm34YPVzMyAtwafNFSeAAwwX1XBP8PUZ244xPa4m5CYJQHtTDfdAXkQBrmmjeYondx3SpuvSPnaM3zdVMCLk",
  "key9": "5TgsVWQBkh6RCAkk8r3rAptN1JpCUkLSygGch97giUs3rqhtvGzTtnAzJTFBkveSRXknNe5yQogQdKkjb9PPmDpG",
  "key10": "58e2YTTd9U5YNydnKdJ5avBpDM3C6MGtrU9Kwco1f9MUSqD7k6CpdgGD2Wa3Q1eLopEMSKxKBjZo1MkjhXCkQTQg",
  "key11": "4LqQ2z1WuoA3tSYjJTU6Q3UCxK9TLJBzDs2RjLwKDVb9xtErGSPtuiAW6w1bSLBrknBj2jxzd99HKMT2FLEFvo46",
  "key12": "4ao5BEP9KyCrKEyUMMfj3Cnoc12cr9veFZazsqbS6tRgpygF8j4oJfHTPEiPDSvnmMpz48NNZnUKhquBzfznZmNw",
  "key13": "yKuYYByBFbkRaXy61rGev32YKxU4tVkEjSUgoBydha73PBwWa5sh3Keg75gNeBHssDcGQdJBZiNkYGdLCAsiBEa",
  "key14": "2mCAW8LmhoQb7X6FEvrrxrSP9A1wU8NHKfgFssyNoP2oyzdnuDJRYkcLBc2SA2sA3AqLJmdDBsoPAoZ5GY9YyLFS",
  "key15": "4qiQhv3VcD9fVR9odmDHLCKUoa2UWBrqNtKuuE7jzRJFqHaF8jrqS45yik3nKKQD7KiHr8LYcLzAakdNHKdUhA5m",
  "key16": "2nWxpiQ2JPNmBMhVikYAfcJEweJgrW4mkJyXpSe3uG4KT7dKmSQXnHoD5zx4YjztUk12hVchwnh4RLd7H67BZ71z",
  "key17": "5VC66VhUmkFQCitRVUuqUJgGdpthnjPTBrM5YLRMnZ8dhUTVDKcqi3o7npvwzTE9FMZCBvqNYL6a9QMMSoPZK1cB",
  "key18": "4s1KhxgoPK4dZjoSpuUfYuw8PZPz1K9Axg2A523QFL2KeJw18MVU46E8kdf2r3MVYLJM9tLcSg1YSfeoELCJPLKo",
  "key19": "3K51N51QvHYXxtiBDV1jfbQpvgoEDpL5fQQ2TpTZnKiAuyEKcAAeW9yUectjwX2MYKaD7vfeJMdXrPN6rf19HPSZ",
  "key20": "FUFecWikkyfyjmGkdxodba4Bcess118cS4SSXEsvoX9soW9zEBgaDNEhEay4upTgn7qzkKaYdPtcv1fQhvvbTYZ",
  "key21": "2iCLuYsAujV9o35XbSKfg9SWTQmixTTs5nhDR8xscPcegTV66u1AWu2dRvWhsogVqxUdZGxvdJx4QFfQLzTNxa8R",
  "key22": "525JBKsmuSJ27TY4absdXBj6oy64xTw9iXuHczHeEFSzvXjmk3HVWZADBsmTVuLZ1s4JLJLnUGZqjLcy9uDGRrdx",
  "key23": "2VwNCPDLbzZpoZjGHKiD8AAtZ32thGhuu4D1Qk9ZVy6QmiXJzaBHQjT7m239auTP9uKSRRTr8UR39oNCbdKetoxU",
  "key24": "gPBq68J7GtEFndTCNF43hiGLbgnHuVuCJF1sRhF62msybyJtp5vPYEBnBa2KSG51319kaMwcdky554YTfHWetAA",
  "key25": "3AAnqutr26vycGvLe7wHS9WKdsuLoAiZRNfHaAnUTBGbPDTzP5GBSuAUxbu7aGNAnZM7kys6Voj2RHfkSQyTGqGU",
  "key26": "cNnx8tdMeVP3HRRLgj6ydxrVCyGQnTEzcEnpQREN9ZQg1ginC4e76YJQLvjEoDNhjwtaWRuCuZdYUChbj4LLgx3",
  "key27": "28DH86Ua1b88A51AVxnMKDUpdv4vuFFa7k97ZXhNfqdJLJpsLVfuKFPmhnafxt8gTjTxZZAeZjKJoSc7pBKvqEwn",
  "key28": "hASxhu2uvEtUBGjy81Xq1uJxhMdxxN7NWkYUpbhZzbgWUGrYDsbBGqcucnptddefgYrsAHR2hKVJrbY3AbTtzvk",
  "key29": "2uFfiQWYDqgV84VXgNhF6n6ax9QtPK1vW6KCzhRytjHvRhcweKYkdEsiTCn7Cr1jUaCBKm1neTDYzyHMnZmmZipf",
  "key30": "2j4myMqsymMwhucJHgL2NteYb7UFeWTTHagneo5SRiew8yYSZb3X5xvZqdMywkznn3gvDbYC24KociEAcqF48JvE",
  "key31": "VQZWc3ecYS3Sv3cUMUefo4T3DKT3vUX5Ya7SGjti3Hdq8ZzFmB2SfZxkKV7TjBRX5V8zycvGavbLLtLyzmDfEfm",
  "key32": "3RP1Pkg2uQPjFvg73DD14WMuSNgmJBnDPu4TrG5GeERdKUaUh82qecY7GRM1D8XCRNZN3HRW9DRbwSn4QMPocVPa",
  "key33": "67C1viDrWRm5mEkniXsZXcPnLAJKPHbEftK2FyBkWz9JJgkqYNUYL2fKdiqc4zsNdc5h6z2Fa7PdCbt8Z3Vazxm5",
  "key34": "3KoLrNst8LWU2D5YxG2R6EZkoS9jZy46E5FGhr56FCVjZJaKMbnu5zVq7pbgD5gkHjduDap6wMRRedrriFDEYooY",
  "key35": "3kqaYDUnXTebo7Ppk2D43D5iDYQtNZiFUfqpU2CSCqnjRinRLrRFmxg1uKroxvmgJsQjHbx8ro18dH24cL8DrG4A",
  "key36": "FWKZAUGk3A44T8DEKVEkdtcWZFHD7GBaRAZGaB2Xfr2jG1GBTo1ieTn1NjCK7THS6PcnTD1BXmsQV4THdvkquCS",
  "key37": "pwBvN3andfJeY71tQkjo8nznroM34t8GdgqQL5PbCcGeKEnWuJXSvFxPGNFM2MLVmsMHn3BoAFK4cTBCqzAz2Dk",
  "key38": "3d9dhje9se1sfQ6xQgE6pMccVk9bmvr5dzcGNE1GHytZgMqHKC2nY424EYXytENLvYaKwBjVvxGBfj1nNfNUiyr3",
  "key39": "2VjuJYJSyLf8gB4TyL58HJFDFX3xz4YENV5QDwTWtS2Pp1g2ddop7YuQGTCkQJRWyzXCyKgk3qHmbh5WwKQs2dUZ",
  "key40": "2AdYY7Mao8AggxZTswR81N1ocmHLfAdvLy8dNjeGcu53WRNGAhcZA7FWQj1MePxbBb39KFve672KVsXTBZ5aYdQA",
  "key41": "2NMKrfMnHoWjntraXGbQwibKugrNuSypuMLa4rVQEwoT4hbYxQqrubEzePJjdiMLSwXdxLdov787fckePhxiTNrY",
  "key42": "3i7JwkcMqHgS3ijmrBCGB8PSwLgwGQit71h1FsVDWoT8McSqhk5n4muyEeosiYWp8BcHCdTX4bmsUwsfBz4uDtZX",
  "key43": "45vWMUAfHjeux2P64sb79hzxWVUSzVhx9avGNYEEiyMkfRk4sdZbLmHNFuXiCktiF3jvyXHLqajJ9qK1NpBjoVEK",
  "key44": "34VvUZkQgAFEtwWoMS9UrkzqbF7SgoUyp9cUKJvWbhqdU6VKBGV1V5zsNhtrJJcDMSD1HfzfwoC5mUcJ8QBdRWdA",
  "key45": "5ZC4p1rnLQ4qmoruhD3GjSSKcmG35XhDKQBcU4StLVjEC6dGGQmgS9AZ7PfbadDmT7GtqQZK8bp8VYua89hh3Hnr",
  "key46": "k6mR5RWuTWzCkHmcAVSF6oky8aeqaUV9u6ybgEgW1bD1iV46TTSL7izT9RLojhKaAUQ8j3wr88LAsa7EUdjE2oQ",
  "key47": "5h3RoAi8rpTMG7aQBoDUZ2Shmp58G42xia4LxWZDTVYZK7gD18kVsCt7cHMZzvRActmmew8tPU1prRMiLKBvWzFp",
  "key48": "5gCdMBW5YAVBfEAPYhkBdFz24V2xaMbwW3hoLeUtyYMPKKZ1yPtAktki9TzRHHP2NWMDeauLPfS8JeSCPYeBnmor"
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
