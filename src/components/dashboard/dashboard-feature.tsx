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
    "5VJ6pxJTQbWHm4e1Nq4ebaw7wVshxaepiDnEPAfn4mRT5vNSJJtDUgWFYTiKkyjhD5EHnEjhRsrPUG8f5V2eykGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRqYwvZfbDnTUbvr1G1KNBqUG2CLuyrehGy5H7Gb3EUJWdavWFRNcrqBoQamTY7ptyoWYgnDA6AjnxiMYbRaUUy",
  "key1": "FoDhJ7Koi4g289T8sbjLzXfkNWeM63r4rdqP7WXcUEVH8v1DZiMfQM7MBy1oPnJpFzC1RhccrKDz771ySGgTM26",
  "key2": "3Vy5LQboDUhkPcJL1GnfdKbCJfoBiBhNcnowqoPToQRfiHxyCVqiEbACBcbL7W4HvBHp1npNwCcvrZbjZ6Fg9qeG",
  "key3": "64tEKgCEi6NUYVPW3CPGBqaUeqi1Lop1fDQHeHWn5b8RCoEs6ZppNbLpBfapojw1tewFR2FttrnsP6WgDevSPvFH",
  "key4": "4RZsM7A4HRwURjNHqz2tHdTT12Y8K4DUEJww9GWT2NsRambm9qojmJMHVFozgzaEPsDAZK33g2gvTMBJ7nAUhZgY",
  "key5": "4Vt7TwzpBSXLswD7cWWQTqdjcmLhoVxX7XhDneiXDriuQhnLMakfwhjtt2aZXAQoeEQKCiKJHj7sJ3PuWGwqwjQH",
  "key6": "21nBWJTztLw1KBzDuy1VsHcBwAHYMEYopYfhCN8ZLacKt4kcjs7jJGhc6vPvyJRgJMtQYAJNZ2Z8yCFECNXZLazv",
  "key7": "2rCKeE7QLJUnkCWEH7EVUhYUrZ7YND8s2ZtPsUsEay88R6afFQwBQRNTfzdoTvrFw4H22VSaSiMgRz5XgTCuXU5m",
  "key8": "4hvYHuD7E3bn7NrDwi8jW1HazeEZKHxTb9bhU8DYhJPab8TY5iq72ocRocMJrmH2VsL7uTNVhWSiAyh3epgfGCfd",
  "key9": "5puNoegsGQt4sYef27zr4TByVaVQ4Vqdme7rrVm32rJJvCVrnfDpkPn71TXcKLmEQntaSohQXbAdxaPD9xfWQgbU",
  "key10": "26RiLHS4igtFmfFrarC4oQjdrqVVuJeipf5HsMqm7EPkhivxZZVHLk3N91dczWVgRA39d4z1pRBSkcozRCEQVz4z",
  "key11": "5bQrKXJPr8G7sjBgvMF8yTewhPmqXqTQU22yNitZvaWF4RJcRp8bjtjsYt3GPK8rqZBHcFPrQPvu6c4oEnL8e55a",
  "key12": "5jp8RK658PsWFmzdxFYqB9wagFiAnsHu6nL9CuSH2zPoBuGJTcs9ZSUUnW5pDS1YYmAMpPCxNir2q8KrQuupnQzD",
  "key13": "5k5AwkjHRMA1TZw8oiKtnVjiuB66Fu7C5ivGJT9iEbWPPhK9dUKJdSENPRXDMvLsZnLxhWBoQySfNbzKgfoGDYWw",
  "key14": "2oMgQKbqv9NQ5A6idnnvg7GkQRz5zUt2LY7GWxEtspyNLPpjjpbdCpUY4fBZ1j3nyqXawv85V9KmQTDSzc65qWpv",
  "key15": "qf3L78Hgmw4GZ3PEh12LQyemWdDbj3Ly2zC9zQfwZaRqxxSuRvzrnFrjVj3WK5BCPzgPdGx45JevA2xe5VdwWPg",
  "key16": "2jAyVxR6s4xprR8Ng9GPqSZKS8Re6BMubAx1Q96ACQaKaJpmahgFhJ5hJcWcEydFvipnUnfdm9JxLLMdW5Goh9JL",
  "key17": "EFRoqapMQvs3DFAmY2QXy2BHzsgnA7L8XYAdZnuNUChf3sBTXtTeMbV9UCtBjULXB4s6akkgBVPdwJbve6YbKpq",
  "key18": "2c7n4QP2ejdjqhG5Bm6m1FAU38wmc98CMjnDZGrADg3mk8oH29kjukK6YJ9hk6pnTXoLmp6R2SQQSL9AP9hjEdzq",
  "key19": "521X5bzMdW6PGgiLWUM4PXHh9R8tvJDTE3jFMtvDKPMHquX2t9z2GetyGMFfeMPEE1ZGHmCHitF1RkvhutG6NB4B",
  "key20": "3hoF4WgnLJoBCFboGBy554sJjHppfPHDjDjQcmnRpCqRsHiHSWi7JgQsA2BvVU9fDHs6yNcuTdxKbnQ5bxWCb4CZ",
  "key21": "5yto8xSHRRXzbvrh6eqgrLzSvvJRZijaWAaBo1pFtzyGiKsdVJDVXMm7yTXFCMoDVZN68Zzqc1WWdwx5EprA9ioS",
  "key22": "2JkukSy1exeezM3RjQFwhNoNuBKNuKrwXB42US53dt5ne58SimJEBApuJdu3sE3dESGRP2zth8e3zriuw55FX2ie",
  "key23": "3Jf4xKGMsZBLEqVJd1KpNejZKi4S4wsPGZJzaKMRSfP6PpdD9XVuMxo3Ld8pXSnVbKGS9m43okvySJBKePLprT4w",
  "key24": "q93BTcmzvWt5ME4HyfhujpYkRRWHn6qKKzLvP7fCLYmyQaq1KjfJ4bWs5iU7V7WbV5tkDDeyiXMgKhCBHm39YtG",
  "key25": "5gCu9Rb9mvwN58faZgE3n5p1dJu25HjWRVq3FDnMSLkER1f2cnXjqX1mG4UtRTErLowVvp2qDszhUQH6z4iNy8W4",
  "key26": "55X6eVBaSvMS4LqtKTWMjeS5Ak8p9s1jWeZnYLuWFx1pvMp9kLNrD4X7Lnyzr9x2uNJ3KMCivUN7tWibrbaR1YN8",
  "key27": "4n8yJDnpuEDoV5rqnzX5s9sSef8CUSTvodm5hu7h9WwtAUjALj6qnpw2HSZ6yCQmLaJBHqmDCmGsQz8SHPKumPFX",
  "key28": "4Mbzc1dfBK33civSiKsGLBALnqo2aUZc2degNuQR1Az5jFHkviw21aPjNBFdw5g5i2i4smxdNYNqzQ36ZuZaKyG9",
  "key29": "2SLFV2ejSivRPqRN6KnB3zWQRYkepGgDceGM2iX3PtKKPBS4JRawx8avi1mag7QWguco1HgvnT9oK37d8jdVWKC3",
  "key30": "2zdtEETKHQdim4b9ZdnQVDQM8z4vkJbJkN4oKHZGVzdzosL8nnoPnRJNhSThyDpNJfojmbfYS1eCA5A6Nd2agab7",
  "key31": "5dVpUmmvCkq8ok4ybYb61QsRKwQXmkmwPEuVT3AusyqknhQxpgK2dEjcUzvru5Nhia8jXjjwaBr8zkJeX5YrxJqZ",
  "key32": "2mE566rSryahbDtPL4VRTwNxaa119PEEQyReA1RGHS2ahaf2cZnkBa91cK1DgQHyZp9SmmM2gRpEtEy18AThvC8e",
  "key33": "2DrmEdsmNWR5qZ292XhF6RnzsSzGHnZB9fyNi8XWD321W3rZhkrAyKDck2V1A9xKo1yhp6sXcmQECqrdp47YLdPQ",
  "key34": "5pcTzbuyUpfmZ5cq2MRSoykEg88JFxWgY8Ju6cn2VPeENSqWRZtribdnv1aGx5hvEK1hb1xdmiwzXEnPmvgqaw3g",
  "key35": "3QmRBir61LE2bPVWTbYqFtuvRMz6qyCcZoAGELnrVSuX5vajfpajdnXdcRY8PCL2LEyjSJfR8cb545dxqdDQvhS9",
  "key36": "21huBxkBqLMHKp2fUoWy2MBMhExqKWGTaK3hGKVrW33MDgkrtv9yit4F9vr6dFo3nQ2Ab4LdBhPsVFoc75MRwVP4",
  "key37": "YQztCqpYNr5mLr2mAYP3HNzFykeyZ9mHbNwZu3TjNttNXZZGXDK42GnhsR9TrTJec2TF8RheDwYpuZp9U7Kmqnp",
  "key38": "5BGUSC1vKLCsJrnRQygLh6sEPZ8SamAMaUpim361diLKUg6ktFDULLGJcA7Tmjkj2ZodjXet157gTwZxEBhMvSP2",
  "key39": "85PHptjwuNERj9BkEHjpBCEthqXsF9vkGechmHZ4BJQLdLL7hpNHcHZ4WZTNaHT9E6ZcYYhvasVyCa3XjqSqzqT",
  "key40": "2saWTr9doJy5hxXXQFQuK414k4PgamSTrrqTbSe8FobGN4kfPU1bEnJeMkM8LEohBoiBhAe99WtmcNt3b6ZuYqhK",
  "key41": "4Gm3YBx6CNebErFEH3P5QqrfS46gCeXcxCEZ5mSd76BicmVjcR1BvJu7zs1qotVuVHa6EwqgsaYaGk2Bg7dXD6qe",
  "key42": "3cCWVU7W69w8BH1fLEMBBZ14xhwFfvqU8LuzqyzTawRaeXVRvyKUuYQV55Wtmw5hHn7foCkfRt1eVseUa1UMTcCK",
  "key43": "2SB7VgnV4RLi2TaSzbh6gFnQUSZBKSD693BfE2vtA35QcdcRZE1XfCRKk88V9jefSYqb8jLdMmvtgPr2QTQALfPW",
  "key44": "2s1uFnufXpEWecPGUYnZKP1WDrPuouirQmY1pc5iUbwATa3Tem6J4ABS7w774mHzbLYPPQdD4LrWpqkV1rVyRQpm",
  "key45": "4URmfxb73QCriZrVYsYBqyoVVhgmGER5H4bkNjKctzy9FCU7uSi3Toq7iVDNjDgTd9TL8qxm6uaQ2hH7XWwSz2Vv",
  "key46": "NCu5iJKqoB2DZE4bpuQeiDg1tdgYCAe3oXFqZt8e5Ks6z7LhmTZkSg3ngUiV9m77y4QMe7XyApjiDfEvP5wMTM5",
  "key47": "3c4Q3MAPuBoXUroXqUpJaVTHbfB6auHVUzhfo7CAxTSuKYdThn2VJiZ3q2CzQUsTSugiKxrSUqMhwWeG8JDK61Dc",
  "key48": "qeN5C1R9vPWjUp8TxAJYKhJyCm2mcxkkmKHXbHPNukoYADBxKRutX3ZtdvgrBE1EuP9D7LAM5Cxiwdr4a7AbvPf",
  "key49": "63zkd2V3cc1aGbQirxhL3guFry8SrL9EcMZQoj5iKrbXkU7ffvTEH8HFnLw76162gzkJ4KBZSqGCR4dM7j6UN9dW"
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
