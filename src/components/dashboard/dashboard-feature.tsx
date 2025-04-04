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
    "4a2JTeNB4fgfohy1bNZ9VdBbthsiJ22mywTq5Le2uGwEgCRkkARgkpJj6WNUBpK8xfyTXYbt7RxL1Z1L59aDquvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8r3RvSwCVugtmcwzubfLdX59JcQFfw4CATgYtuxyCXqNbrvNL5AizbzJPa4Uepy6oEmXEGgussoDP2FKhYRTm9c",
  "key1": "53BYeXYmH9BFhpDgg53EBH4hEJtw5zunHYT6L5PMCAFQNKcqopZKNbhPPoSwZ48i3Uypsh4dqpF93i1dYXvsRDdQ",
  "key2": "3xAttqtm7i65rvdYxNij5Lo5YyDNGN6iUgmjWoA2RpMtCLHViY9t9bGzHGU8FzcV8ffR5NidPxTVNVXTgTAqt6jY",
  "key3": "54yQQ3gd5Vfp5HSwccqr2MmMD63jj5N8d2kWcYdDkpRo2gMHx4rY789AJbkGhvnqZgceu4i5Ctkx8GjPcBeY5W96",
  "key4": "4HZUaPzoUSgP8UbskDY2xZzbHkj3697wzXRTStNzKyypPLP8VPrsNEuSpxF6kJqNhpHSkuuSDUxk2mzcCEW2j3yU",
  "key5": "3HfUpS1Vs5voku5sSSq6MuQwmEaxUkqQCDHSgy4BvAZH9b7kJj9xuqVvCcP5h6wC2rTo74uu8cVR2RESvS6msUhC",
  "key6": "4i6jkspKCqrmG2ncJE6VJRa3V3Kh8kmsF1YvokQvVYULDGkKsoEMorES1Fsnw8y7XHeQncXBtUma6k6GwULUF5UE",
  "key7": "3V2g7J7WxjZ9DRVtHTioTvbSCGR89dZBnEEXY6JaMbiTkR15cWv3rbQgCh3jSisSAHnYX4pYUuKSUupSypBYZfQj",
  "key8": "3QVFZDAvuBchr4fCenPCa7VZFgEh3SznB9JS52RAy5SRdxFcKsk7uzFiJycm5BKz8Ds5choVv48EcxhpLd2uyFDK",
  "key9": "3QbsZeWtkm3rfQ1GTtNQPcE3WL6m5tyZ2UvRLpXnL4AaYFX3ScBRnEEej5RdV9q4rYRr7Va51mcm6Js8oRH4uSU8",
  "key10": "4PQAHAKCaxuZqJdHz2Qoi3QMJavVZvRkGuTHZvdLM7ANSokHzKXxpFfGCfdxc3XHorMUGDjgTjtzcbcb2QU2RKB1",
  "key11": "5TbeyHCUGr9pmFjizumCfAX1iTDUYSYUBP6XJG6UeG5ejchagB19oHafz2ypv7FCJgoFrFhCJ5WpyiWBCELKGQ1n",
  "key12": "5skrPAFKabQUecAERmaYW4gM4najHvf33NsB3oA2qSYrT6bBvhGyGnjjGYPbgyV3UghtaKLzCWB22eVTwyoMF9fj",
  "key13": "5mhZDchXT4awkUSXXNudHuj5nWkqMEj9cZvBjAMMMDNvbRVtrohhLt5Z5Dfo4MvYTpmmekzD3bXYPERd6E9wAUaS",
  "key14": "FDMRv5ifRSbRbGRfDgHCKUNKjEGmf8x1isE4CjXpgpforgghBNj18J3dYTnfLGapeEGHLYsqkxKpKiXtuVZUf8s",
  "key15": "5YTCgBvEra1pj99oEbkqcWBrQ1veJwwKhgMsiy39EcZQb8EkCRno36WvdBkUscP7KtXbwdKwLk3NaJQtyfXZoFh4",
  "key16": "5Y2FquvtTdESC2mdLGvUNauoGAYQLnwpBww4US1F4FcqwTZunctjjmjfib5pMNS6TAjnFeQNnnEHY3GWG9ek8eJw",
  "key17": "cAVrNmViA5hrdktDNiQTv9wPRy3BEEqMNWK9dcCRi8Bn9C2fBE3BbacPvT2cFaSrZognx8ew1MJNkLuAZ8V3v1d",
  "key18": "3D7cUes1cs7WVvkL1G1tRS3XJq5draEYcE3ha4dKxKd8HbzYVdJVgH1yK1TyPoYrivxBPAwzT7wLnSLqBjeGaFs1",
  "key19": "3T5otpfgkDnErUaUGM72LcmCiEkLoVWWMMWUgLQ8o9926LDSwgifLaAJbj8sBEZacmCGD5aKJpZxzuNtxcBCr5iZ",
  "key20": "okPRRiJx1LJvPWznfPEewCjLgXbALFmhdWUnm3FrcsDfLLNnBDegTFsVxSzkJb14r3tf5vFFQs1mJncDCcWncBi",
  "key21": "1qSMG56rPeWhKbvGspE8WAytewUf4pr8PznW9NVFxJHCToZkhe1wjk47mAXHiFFQpS5e5xSDF7k9DwouU5ERaNc",
  "key22": "VhBdzWyfXfnrsRrg2uhJbDwN95TVu41zFrgs2oq16ZDwCRU11h64vjSNYiSmX2rkVT1Nr875rr5DnQ1wk1GHiJQ",
  "key23": "cAr6tHUbkWk8wGibcSYDb1FgS5MFAqLtb3v4etESqmT6tqptVEAUTUF2QdeFDZLcrfQkuSVqaqnenkYDXW6F8XV",
  "key24": "5UQuCmVEDpzJ2sESAwQt4zpN9QwhAuhHa8FLJ5ZZ8Kh2FDB32e76UARm43vm3x68GmJoieJFnhQUxEjktvpSTS4e",
  "key25": "3uNDqN6DyDeDZra3dKb1n95XzkoyqP9xXh69U6fvQncU1dY8FwiDTSzGFxwySEY6sGbtzxbsEUKLnNdWZup9b47t",
  "key26": "56XPMDExbBgaz6GS741wJXPx4qNnedgP6NM5vMERpzv3NqjCdLRD4xQKQRmzSdTT11Gvb6dcZKARSH2wYA69VzG8",
  "key27": "5hdiZJoCkvZ9QrQ9NRzB9qN4S83NzLTb2qNbETxg827g8aNH6Qxc4teWdWyu7RutRUg6kfqadP39azeW25mp9TeM",
  "key28": "2Twxv17AG74JJaLcdfSRLg7mxumrdZyRg2uNseQAB6s3umWiUWzKVtYyBgk2rSBmaGmdEnMkVvDJ1oLpCQCuFcGM",
  "key29": "2cFf8vV5tg4uvAPTpGaJF1d8jdeTwyAFuihThFEnpNo51ofxhZvoFihHTwBqqB4W2g7EUN8wCxhEScxaNQZWyrMk",
  "key30": "4bpmGa51EbjxLArFMiGxBdavD8jzk1fDfqpjoRhM7swShsPV8sD4drG18sG13DVoMna8cun7MfZx7a7gynZL1SCe",
  "key31": "5FnNoVkLq7Gm4kWEb1jmnmLYYD5F25VSKoeL6dVT4QtTz7idE1M43sD63i1NoDrBRZPSMpcDoWc89HU8NYpox71k",
  "key32": "5Z2cuWQQuKuk7hxDHp8KpoLDh3DvosTCpqsr2WPFz8iGDQySZxX1wYU42Ni4Epcm2WiQaHJCNzq7BcvyPdoy3ruS",
  "key33": "5YbQBiBXTtrwWCvjn9ezC5KS8mnQ1qCTTtqFYjAkmeeGmAnSDRZ2EM8DTKiXNLuRZgGYPQ6mFMengw16T7qdQHZV",
  "key34": "2PcDFThDQffYP8KY4io5KM1cHkFkF227egpDTAsCqus61XsTxJCUzRW3Re99YFKMPNwr75V4SSPSdJx15U8RxTJH",
  "key35": "59h4Q8NSAUxd4isgKnRJZ4grBfsxCyAMSuuyhbp1kaqvxYnACfHmDdKL9PQD6nQF3sFRgS4ZZbUBpWrQm5DvRymH",
  "key36": "2ZGQUYEK32Pf5CEAR8RKmBGfZ1UptXVmQUdJJUVev5W77PMKAkTCme2GuixYfF43qBEa7MJF2yuWbqaoCeyixaaZ",
  "key37": "2cfcqD5cWyPjPyKnvmRTtVdno8mJmrZYSkZNYMbKDPiVvQ4GeKFqUoHDm8wf8SWQtrz8nQ2Qg5nzTTsZ3X6T5SdN",
  "key38": "qwRtmHv7ArbcGB5eJtUmNjULVTo3Uv3uwYtvReoPUvegTtrqeigyqcqA89yrWKGViBgLU2eXG9xGEqbz6o6hKfM",
  "key39": "2D9zUY8PEknsdRVFGMwJUMF7k8dUcPUGGT274kMktXz43w2QeCGtxXApDDH1GbncTbhxSYEDd4nJSvPqs5UAymFX",
  "key40": "fMgfGZDkNfFxn5UxUEtW9zt3ZvwwXBj314KS3LEa5htv4nvoqeySL34MjN3zhP45tPi58ReC5GHj8Kimocvqs72",
  "key41": "5Nj4cTmgwyvYnGpPbrxWJxRyhTqbjCqKFRotqsbnCZhbY5WBjAfZJZPhQVS9x6aZeTHN6Q7qb2NaUApMHpNouEnT"
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
