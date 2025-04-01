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
    "oiTKQooR13irBgvRzPtknWk8o4aUhj7HhLZUTh2HwaSsE8ond5TWURaNBBY1uJeZk3HQEvT9MJ5zkrW89e6PB1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BCNVY1GCkAEtnzu8BT9iDJfaoK9Dg2DRYckcZa98qsoYsRNTpRGxzBHpdFwWnkgiVKZiBw52L6YtCjXNJKsdLWB",
  "key1": "2ZQbVZNyTd8bmaTVv6SThrz8JELX25wyxLDjCu36UuZN1UyGwhKXu3Re7uuCfnx4h6rLtqMwDUd4BTenHLU3TKUN",
  "key2": "5wphErZW1SyCT1B8w7Ebmt6TffnMyNQtc1VoitoGrVFMeQyvMH2NoG498a4PuDHxyTZSN6AokCJFtBSLenZffsAS",
  "key3": "FQLjshYYFWo2sJbB1BpFLVd7zSJSsBk1ciABxXo1F9z9qWDUzDxXRMqsDKfGVDHaZ6Hw27L36BcemRAdLsTHtCW",
  "key4": "65SVFPpbbuc4BdGttFHvofi1W2K1rMFs2yvztq21SVXKbGvmPnHHTRNcFXsZCY7MumFgb9snSEmDva28dGYKkFrS",
  "key5": "35d7cjtzmkMdGnaUDkhLh2PSz1d6Z4jYWVsnJDjhSj3Fbu2nrgk98biLwoWpZwE7HTZ4j31SSCCVqzk1VrGfwP3G",
  "key6": "3aThAfJjh1Lat29YqPADGZhMVWxcmeQnXbskDHyVDjYifyXMUS7VYoPjXhdVsSRkq1rANusjHWNWqLm9zPHoz27W",
  "key7": "5gPz4TKASQ8zpxA8iHZCKtwGyBiQjf8nNBN2RV4zkNNv4eNN51FAcrtgg3H5m1n2m5eP9CMU6YYs2FGrwVD9n7YK",
  "key8": "5wEB2fnJ6EhECgqfWdQCNHzz7m3Ay3fUhX49G1V5wUMpnp3xk3u9RxGEViLB1DPnAV4wMbGTyiV6abq1Uhbi7QJQ",
  "key9": "dwvhxhCUspZb21pMPQjhxAZNqdxDG4k3ThAzVP6oX3rSPxDcW4cJRECtFupb1w1Ys7wQeftUGs585R2pCbuYsGA",
  "key10": "4NsKCZsAw9hyktZMbh52wvKEZLUBdQ2BfxbFtHEGshDi1P3odCeawBYCdK3RWigEMsMzKVd553my5yhJxmo5E5MQ",
  "key11": "51pTMAez4yFLo5u1vyeMrvzoN2YgsxoNtUpyH2eYpLZvb2yR7iBaffxnv4C6QC2u5y3myKEKHhxkX4SmLxFT6fKM",
  "key12": "5CnTxXVA4hqM6HnS2HAkzQXrFoBD2yiiZc8YmhTzVbT68Z8i2NpDzwd25NWjXJJS5YqTfLZaotmzT6AS8u9P5Zez",
  "key13": "5zqeUWCZdz1U3XUD2jkgnrqgzXnrgKp6w53hYPSe5uutLe1ZJVeh6n8k6uTDwGrH71YK39DKPKvRDyonbC8T6yk6",
  "key14": "5NGmaD9ngvg9dTxyyCQ1dhA7ohtokG4iZrMjxJvQ4GgetG9QQSfywLH57iDK9VZZCodG5sbe2iba4qDPcMPzKrVD",
  "key15": "35N5DxEnWHnuhoWn4wADnz4tPNkMF3wkPxGu9dZQQnQMBYujV7rNXuWdmFg757Gw6zRcbSztBzPMKVNo94xEVawt",
  "key16": "2S3mxaYBV1YFqq8fwgzMR4Ho1YgAAKXr1wCG9zAEV5cdEZhhaLPX2MeUES4NHiGLkQyxqPtMd3m1DpE4Y2MBaJ24",
  "key17": "3kPMgkaUcgUdvbq3qN1rBJxGsWirAN3sTLAzgZtAFW4vJD51Xxp54p71vuzUe6JBeixiwimcDam2PabWmbkRSHrM",
  "key18": "5UdaLtFN8kxyfACQshNbWFMxnB8nQex1ShK23UNrp3THVWcinPPERjCtwJJG8jQnVK8nhqCGvggQqZeUKLwY8Znw",
  "key19": "4GYqCzsNtAZPeWxjYTBG98kfbyvdanUKhSe2on1Lbr2hSeyYo9cSJ8JPcPk3STn6ZizZA5gACjHZs8UNXXXdE1SH",
  "key20": "3VPWU8MfDJbsUGx8ffn6t3UUEjB79P1h1g81eLgpqoFVjdnxj6SUF4nPDS96dvYaRY1N7Tw7V6ZPGBnBUhGMBRgL",
  "key21": "3P1aqVcnrDnqNZv3B9jfbDBv7JYtN53oEsGiBMaDRMjr8MrcJ42qwLmUKA38aXoMYFMjHmRgKFqvK8nGSjjPgDw2",
  "key22": "4sseBV7USR9R19eQgq31WVf6dSyQbZFyk2t6iDkvqdkdrMvxQUZtEkZGnZcePcaQYMsqjT4hd5ApkWpY3pk1ihRV",
  "key23": "iYrfkFYMPXwSHJBJAE6ziCd5vheWGiqv6M4SrJPTmD2Bjoy7eSx12odUdJ5fJrQDTRqL8JDU1EZr686HAdnVzqW",
  "key24": "5y2bBzVhW1jawc2TxZc3MMKARX6LQ4LQh78vkZ9ocUfaNZuoXaN2LG9dBitbfKANfSKb1KQiLZc81DYpGxfAiNRd",
  "key25": "4eA4dwVyUmaL7EQotg6xUuQVkzmLZwMBxyetsSGNm5Ugua6pE7UBtKvc55KyQdPnWwXWnuyNCcZjL1PFwk8NbcGM",
  "key26": "qteHAkHRLotXRk96AVPS1ThGqFxHRSVZph5uNKFDr2vpR3swC7KocPPUkEQ7UN1FXUejPthCBVSVBDBG5N2trBJ",
  "key27": "49fEFrHjriq3q9dSCR52RuXx4ppXS5QrRrEzgJS5fHjL8RwTBtPMZAZBpb6hbiHK3NWfuPDtx6apWNQeDhRXkvda",
  "key28": "58s7TPF57oV4JSiMqo39f8wvFT4xsyCnu1qpZs1Lz3uNuYqxWUh2cMjgkRNcPwha8f5zFyGs9711HXCfnKHoXZP6",
  "key29": "xbE8UXkXYeq7pVNDMHwTRRxTJ2zpsRtHmnDPduyaqw1aYPRwoUwxNPRDZyxg6AR9qVFjRpMq2GfrMs9SoKMjxAE",
  "key30": "3bcjkwogMf31yWtVrQZ4HXgikhiJC5vWFZidE3KVSVDjKxwSznfu3YBi9hCqj4pJ2pnYHKs2PGV3xVxveZrukA52",
  "key31": "3qtUuH4sVZjQFFUF2XRSBcyJg2iLfBrJkWvafX4YStqvnRVUEFWSJicxmjjAAbphdpC2cKnLncWd7DDwQYDjdbWe",
  "key32": "5fmLT5vLeAAPCfZ5qff2pWVGPDPhCUnB7XqLuWM5J9uLKm2UqXTSTYvwDE4wJ3cEP4tRy58P3UsvfFHvEes86UaV",
  "key33": "2NS22LqXZPqvd3pMQMt6P7ArZJFJe5w8t59ZVBajSwuUM8f46xYJR48aLBGqvRzFLuMK65tJ6RERL5Dg1Ywqco8c",
  "key34": "3SVJeqqmJEGaRV65M7FgQwDgTnbGwdgnoAd4dPgaAXCgUp8cnWyyMHo1oKkMXiBkUSizYWujYEFeVgAw4neLymPV",
  "key35": "39BPqJneNDuYGV7HCxACHZv1Zg9P7HNT7bcZyjR8KBiAVSA4NVsTUtdTB5L1xGEovyENapumgJzrm96eFktMjE1L",
  "key36": "5vRHaWipGRZqbzJq1aaSfcRifZ76frwvtDPdG5PyLH1aDuSnGGvqNg7whogBvw5Noq9fsbF8PpAqEt9fdvR4rjya",
  "key37": "3eZ3Fj57459aQjuRHiCGmSmv8imKxXP2aZGwEExza7WxJ96UXhN6Df1KsnnmWmUeYVZcBUZtnUkt1EtLkUmQPDw8",
  "key38": "4ZY64kK7JqqYbyZjZFdYDPdVEF4oGwodpikNhUmLXSY3pCdFdFeGC8pcRXcC9iXVokDniz2GXhV4qGvV9J4E5XGf",
  "key39": "bc4zZECZBC6Lx45GiRi9FohhXX9ZXT9pK4KzWgt8uYmfvecuZwTkpUqxUHM25s18FiKyX5mZkVq8cz67bxsbcrf",
  "key40": "3b5CCbqaSpLnLGc7ipGv4vX9c74dBobTHADKSH6eixxZby5iZk5P14qVFiQnMq38iCpfah6BAxJM55JsEtiaZxoC",
  "key41": "2Zm8m9mZ6Wc2VJoCrUgyh2ypcKTTgYfcMGq8k4bzRNd2M3V1AXu63UAM5EWzAaAogDQE8HoWQuNYPUeQzNCr1hFd",
  "key42": "1CwzNmAzXVMUCN6uwkaUeQSqquY3ecYNjQ6besbyGfQo2bEc2wCqj1oVADaH2Vb4aC53Gk3at2gdAjtQQG4C5UQ",
  "key43": "5HDDDR27QzBJMomc9kFZWXNPeKPdgdGCB4GrwcKbS4NAeEbEv8MqP4kNrs8xYJMi1R5CzGr1RGUQ8c7j38g2sKwR",
  "key44": "VzADUechjJBfmrudtuPrCzzF8467hVBHZsyrQ13WFZT56VKywt5RABf5trMsKszmpoJAWVRtnauzTaePK6ymzKy",
  "key45": "4cnr9VN7RqZQSFBbGA3kuYFGtEksDYgTsDNzTtWoPHzLWYpWfurLDBpMHk6gCd58fdzL2j9x92HemtRwCLdjEd8i",
  "key46": "3pt7MvRhEMoeVZcMJMBuN5DjmwkwEnbwxTTh8Dkz2boU5qQ8BCVKjWzFo3r7rdb14VJUoFA5niRwuhkmzzW2ULup"
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
