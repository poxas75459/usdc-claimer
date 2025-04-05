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
    "4DAi7ugWYjEFKpMDaNYL1D6cfXB7aVREKYBVeKfB6ZVRBADkStYSLGJ7LXZWePekR5qzwY7oGVQVHJopj6SZfrtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wHrdVfavCNPPgUVmDkg6cw7gn9Gcq6CfSg6z5ojygDvEwPPLss6ydgiEbBQTQ8qQs9WYpNumVgkZoCD2CXvrzk4",
  "key1": "4JfbNBXn3FcAcKGc6KHGjCQcQuGHXqvHnhzQGVGdYcuH8xbVKLuxAPU4wfabRjHFnmr88J7ZCfZkfk6QeDLoMLV3",
  "key2": "3X9zZwdLxmsSqaHrD5MjrCqcXh2JCHsGSZLYzjQANMRY2NS59RHbUaBrgBHqXTzjwYbAxzDsP2KEKSpZfdqBAiG3",
  "key3": "2azCX485ZNj1LdsD91SGkkgPRD6NfEQG39xEXRVTdh41sEw1fhJn1yVtVSaySpuaUhVojR23WfTcUhJRoPDSPbmF",
  "key4": "ouzm6YQQ82tNjm9XAefLXLMwqf9K6ZgHUtDYUPG6yegHVXQFxyd7J4iqscDPRvHEapYisBzgsgafs9PiPr1QSuU",
  "key5": "g41HKrkHVL7T8usdM16yMGihUzgnVJarUKTUrXQYkZ7ccwppoWzBJdUc5xb4GG5NgR843dnPC5QwyJzWzMPRfEa",
  "key6": "4ykstQpgQe62YUmngTGKnMR3UsaZMEAZvWBgX1tJAaraUu1RZbvHfTKApQ6JFo6KU1MrKtF2nQC5TbivCem4C6Rf",
  "key7": "4WWC3xKqvoQx4EieHdvLJwGPK221JDG5QL237PQB1yTdDasDQza1m5DS38n2cydn2riZMa9Pe9rLZg4Ynu4VBRsY",
  "key8": "4UofTvUJpbEaPK1UNhUQZoAx8H5nmzY3Afz3cCYDkEaSJXprMN88K1NxY1GJY6zPFAs95Rc3EBT1BGdwexW13mi6",
  "key9": "5VpL44GeAFdHa9ZYLPZiew2xTL8m3v5oYpvhRsWDd49jSRfD4yRY6az345pmAP8JFmGx8AybwKiA5GP8sAgKnxFB",
  "key10": "QdmkMQgyU2YsmxuHainAKTPJjeX4x4wMnp5phHiuWm3Ek9mZZYzqCjTxDj951habpCned51dVKo6V7iBDoWTePz",
  "key11": "2MxZhAUvePehzLJkmNYLrmpT13SEtmUoRcvtdSsu94NZ8gdHuQbMSUg6eXAsEAum9pEZoZ7HBfFcfeXdKnu4tH7T",
  "key12": "2K5aBvE7GWQ1sBwo2B7n7NUo25UreHvfft55zUmkPBsXxU3iEnbj2L5BG6311wr3cV4wXcvoFKJ8LNoq7ud2dgtP",
  "key13": "3aT3t64baq8S8sqowL9wcwG5R8uAB6fg2La5E9T6cHV4e5r1uCZYvNXju3C2RqenJG9FuSuXDPk3vMHTp4t5q8cC",
  "key14": "2ik8ErUYNHngqMc5LCyKcQV7Lnu26KgdQbJ6UfHqB3MfvZAibmYbUcw2F9QCy2arVU8FYLY9zgN5gXSwwBVsZkf4",
  "key15": "4Cjnv4uYwk3YfYGrSfUPJRoz2nKijzM1rKa8LdAkztkJGtzpeBParWgAh64sQqChBswR6TbgUCUba2SFzvuXCXTZ",
  "key16": "41P8R2A2H3P4xHFkH6QCTjmemVpNpRpt71w6KXKBm6LTaGnjGjRZvEkeAgmc1e89CV3pBH52ojDFvWsVHAgkXW6B",
  "key17": "3HBwfciBPYRHpLXAjsPRyfUMdz9NVjJkYNiydB8aB8fL4w7xBKv75z5FECwJfah89ZAD2vcmneuHKYRF2T2Sjw25",
  "key18": "3pdSthNwWoeiDkF2tsQ2WcVgeBnvkfSAmThvBQd9yaBbQGLcjZ3Boczs5JjyaKaZPVP3qxZoxY5yNGmcs5VAsnGf",
  "key19": "trU9DSsGdTJJkzAwJDfKX3J9aEPMkNVMtUjmVm5U7zj3Cwn9TqF4VqioUExyugnFh6mDEnUDfHmhrjcg5NhHNGE",
  "key20": "5wzFzJohEjZQm9wKJKuEfoGMzZdycfPJvEasWZrt2yACZovpvkD6yVdrX4xBYgD6P9Rt8buBoQMfePQ74iQ8ij8j",
  "key21": "3ZQtaMP8CfXwJJGZ1cmcLWZJ9GrwWJREWA48nZDaX4uGxCDUStkKwWbiGmVraxxRCP7rW5hMn2C1uStUL25W2NFH",
  "key22": "2AaFhTS5mg5MU1wtGCPHMoD2XWa13iVEEVvtfFyznrNCToGG1a3v3aDbQ4MVoDETSzTP3sJth9E4wNhTC2BSbD1m",
  "key23": "2iK92YPfaX2hhaxhpuQHGdmHoZ38foZ2ZeBuGHcZxS2MMBDkBPkhce5uk4UJvGHX6FKdrVxuBMGfDL8cpcgrqPeU",
  "key24": "WRCvTQYebgDsmQcHT2GFCkKqwuaV9ESagWpswYKkT1BikgDDgCFSrYDZEBP9AK2vxvDpbxcXU78dLDjVRTb1RRo",
  "key25": "4B4NicoCvKU2R2xcjfmhM7y3BQpUDU5eEvqxVr3229ym9YG4JX6brgKQ7KyXGuD2rbZgN8UZqFLqwiKt2rkdomhh",
  "key26": "3E2CAxeKBk3Ss6inXhRwedNLqL9eX4YnnYCfBsoNve9oXtKp4bGQuboc7fdciREZaXk8zSp7qTEDyDfVZvLEiaM",
  "key27": "4yLUsAv45EsqwMB1Tkj4P1Gygp2RTiRkvcsQiR1wX5Pvwex2dQvGUnBk3nGqC8UpoLAG9UkXDBJwEZM7NwSvKVcg",
  "key28": "2Tk5m7U8YQQAa7yV9QZ6WhPJHQAGpHwnTNYqxrBZgQYCvg8e2aWgZr1DmFnHrWq4CXVYLV5hiYeKfKw3WtWFs6Hf",
  "key29": "2ot2M6NmgZJxf7btoVG3DsXN9Y4dDYJVK98YNGFs1MUdbaG5xgPjA1NMXZuxzQWVKW41hgHJDYx4vE3qh9w1P9sw",
  "key30": "4vBmJdopdsD6TJum8p8NRjKp53SB3VJizruCnGQdQ3EX9iYLNAWyVQSrANMD2u8ZdgAy7UMwSHaSjmNsuNFKjmWd",
  "key31": "4Hnq5f6ap3eXrKgioXGcU4VqJ3zNXApZP3GR5qQ6iCaLzRFQWjoaJGy2NDSC25BSahxcmhnFKtr8Awe1yxi7Et4n",
  "key32": "uikyZaZXszL5HKjxhSF6X5dmWjP9caxbdKLYD6ZHpEsLAwQxHs8DXpzRaXjhmCGZww3rVTF3sabB3C9jH8XVvr7",
  "key33": "29yKa3cMyRYPM5Nrr2HVXpKC1vVM5Brp1dywe8hVzLZED2K34diELLdqc1D71LEvo6gS3bkaVerCYpT4N4CxsrQx",
  "key34": "3B42m9uFKXM5R9P29uz6P4v8jV3ae5cXe27nZsyjxHij4GWyuNuz9iucYAaMHwvb3UMqd4rvsczMvnEZQsb6YiKJ",
  "key35": "4Kb5uR8vmLTAH1dcTaFJm9jx4EDx2hGwXPDwX9rrGaSd3kqFZqfokGwvZth13dYFpg9TMpap2N1eSyEc8rE1b1jQ",
  "key36": "26RVwycmP74u8Cd3exoaMKyxz21X4T5sHWt7YtZfbDjVU6Wif9zCYZG33o3GqWnvcHhGqJtM3PVWQEXgxgLnXqDK",
  "key37": "36sxo4ktgdVVHfWjmtGLPdB3DAoCLeYE1HPUycAHkNuAMKsZ7wvBvzMFxbTFLRDWgsJm9qZeQegtzg599n1rfZJo",
  "key38": "3NU3bgFQaz2o8zY5zqbrZ6FVbGMHNUPHFNPDaNjfv5t2x5rCArMHRyxgN2bb8pQgg29iJhudmu1E7jx9rTVJLQ8k",
  "key39": "2EomeFNcnYExDCUWBDdY9MsE9GX5Gr9nHzCbjDkejzfJzDk562dQqSPJ4ESxP5YZa8ics58e8PAaLLNYJtU4SBHq",
  "key40": "3fA3eUxbwrz6u5S1bhH2KHEJ9XuhzrCvHwyZX3VA9wSCcFnDN3ifaXowNErHmizDfnsiY4hjLz53VQUXd2wXAgty",
  "key41": "2L5zZ7QEAHt6ZMK9q183ua8hgf9CZN36pCtMd1wqeQPekeEyNab9CvT2n8cKR6J6XiBuronkUbsCK7TqihytarVj",
  "key42": "2UDEwVAV6qNo9L8jUWwPHGi2BwPz1su5D6TUmNj4NkZXS9z6DBAvxN6dK6sTPTpTsDfMeoGhTyMXdCMeee7JmGSm",
  "key43": "xxqoUdaG3Mm2zagu7YfYgT4bSaa7pvscTACh9AEipfPDDAWDGVFZdqrQ8Ki2LEcxwpVxNjftoqJEJPc2694ndCx",
  "key44": "5zFDT4LmranfPdk1v3bvZvmF169LS2A8F7YFG6Zis1LcxgC6dLbwvAXeQ8auZ8eX1bRu9BKuqPAbMxcqecpxuYrt",
  "key45": "Qpz7FwNUjvhididP8rNd4pgWsBV3FAqYLeXUaMmJP6CyS81s51RSiTyRybUNi8eZNUToeurq1zWPPwFC4LQjHjM",
  "key46": "UhkT3vHCnbB6Z7wxhiy8MyhMzCnhdv1jDiagfqpQ5cDby8AKGdjdqxyzNoMoNjfjgHmkdQFHbLd7fdRQCmpQoyZ",
  "key47": "kTfYdGKUxo7S7TBj1yvczQkfgRohHLNixRjJwaEdD7jY2jhELJ1AVGFT6RhU7tNBau7CcDh8c2YJZVVg2yEtHa1"
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
