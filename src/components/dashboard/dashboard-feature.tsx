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
    "rvUaHGAb53iXJYnWCnaUJkRuvcD28dNpswCtUD8KbYX5oY4jDx7EBoJ6RoX4gh19G2JWfxW6msXMBDFkJaLFA8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61dExxJbZPLkX9YbfbrU2C7EjFshuFq1R59xJjLn5osZpRzB8oNjsuGjGcJ3p1H8DykCf3rmT6U7ToaygsaEJYMV",
  "key1": "vDGzGkfvyQBPc2rXXAKeKNpS4DEMYEbPK5hJ8e7vznZj2mz1Sx6XUcYY4rdqf2TkTtezZehutH1wdBmKGqW1C5R",
  "key2": "47C6Tx9vesNJJYqkDXS3Bujg2bGJ9Bn1n5mGND6xHk9pPwh7zx5SJAcMkZCAmzaknmcQMZqghC3vC7gVjLshNNa4",
  "key3": "64jJHPT6TPkYzwyqprx9rwKSzEpEPiu5SGAsjuXQroVt9KvSv87QoBP8E9ZSq3ePUizBQrbwKtvSUvnzs7GSrn9a",
  "key4": "srRyx2cgG5v5KRgjFCeWtAhXPfMCeECyw5jEMY2FBXgcYg87m7sHnw7CAunjv4Ju4FSQkjiz9XPAwC8JKk5eaHM",
  "key5": "2QYsFRXTgwHKDBcf3z8yFxyodeWQZVhX7k1vZ17Xf8YZTaMh5U1ENk82hiYSxj1c5mfSFGy1rFm8LNJ6f4yT3nBJ",
  "key6": "5YrRRq9prg5WBgHgBron8sV43WGhk6wuNa8MT7V4FQvzFNVwoc27efEFfYQaS6zZdJfqVbpv2n29WC3ugCoFy9GS",
  "key7": "2v8dqwoqjDYfrTw6RMefqENcdnGerX3fpsmpdPCJick4e7XRa9EzwBB4K9qWaywoEVE88o2HXp6N41KjpvUhtkeV",
  "key8": "5qtqGYivptoUBP1LYAV269SM7VihFG1vwgyQyTGxYBKya9QaeSxS16LSzEYWtMLCASVC9kkvb6E31td4y4QFn8jt",
  "key9": "bnWdMU5MKYDh3XH8266acD7Pu3f9AUoi59nepXWRms6MinCmokrBe7UjABMmwkVDTEHrhTr4LdZ4pAgQRPFgSaz",
  "key10": "4nec9QUUM22nkcJiRmY4mNQbHmqMhePu4LCMqoHhC6MeNwHkYdf7unBmykdx7aa5QLAUNC2tcUHvz1ao6JtfpVfw",
  "key11": "5Ejy53YfNYwenxyQmmMzg7z6Cqin6qcdZCpF9hdhuwScPNJMDCb16kr37DHDWeGg3eBG2XKZnLZJxMHN5793A7BM",
  "key12": "zbWnusG1nnmYsHby7PS9PH2nG8FNcQY3pwWX4JhDsEDjuZb7VtQWfRZXfUoSjK9RvpinXeybfLhwZU98AkArFCy",
  "key13": "2jKvkB1A7BnqBGJxYV8nNyXuXDzPgwvqVeYK4AUx4ijD7pxbGuZtda6xRnDM8pA5Kn3KU56g9fHWVmtRd6Abz7k9",
  "key14": "5VzbCMjSbFVgYoKfsMHkFTwXWmZ8pbbM6e2XFyfLxk8Bv4qrAWaPBdqQqg8QnpFWctwDHPmxnr5EjLEDRbh1LZUh",
  "key15": "3HrZY1EeveNQ7yRkwZGgWXTeyUvrkPYcob8zH1S8UDnLTBQAkqvVGgH9gDX3mmSZoNz1DeNGKtMDci5Pik4epJSL",
  "key16": "126pYg2ZYEqUDMpDuejsuj7eJzg1iB2Ccwaeuege2DvADrRbuKrNdFikAaq6Vf1JuEhuxwsfTBNhiBu8yjtNEQz4",
  "key17": "GF6CEtCgSLqUVq71fZASZhFB3Nqy1Gf4FNpr2a6oFkE4mezRWPrHqnmFDZmStKrEL1KcXPEorYWrwd9shCyekeR",
  "key18": "XFz4tnE4TRvfrSsuXEb3uGGHLPRbTM7TkZRQ2tL5UMq4HVRyT78DVWLSZfUVFjtPgj9A9UANdGixb8KdL629bGq",
  "key19": "2mxpxHV8wP9268AQWMQejQnyJCXgUWBZupTsdFj45zCwY5oY8nsgzZ8zCXAR9mZabtTQnZ53pKqaRsabBH1b8ipk",
  "key20": "KKarbCC1XqRoove5zgVLutTbxJpNGWsxoQC41S5YQPLck2iotqP4epRhHJ2a5jgqySf5FLKzyxDP5SMTqVh82ij",
  "key21": "4w2pg31GcQMyAZ7A4EsE8VVV1AUh75L9A7L2gGAYmp1u89KwVM6AWkk7bDzrdp3URtdq43df82eKuKJDHeWnTkFG",
  "key22": "4mvZvn5M2e7xpw6FSmUmexQSRJDjzrRTwDwuMZaWtNv4HzX98Abhp5QD5YKNjThXgbSzzUFtAijF28gyTXVjxrJ5",
  "key23": "2UcTEtD7nQhM8YFMx1Hkn6AkDkZTqSTaCac7SeXue5akDZ7vXjiJRcpEEMLP1o7VDFTANowENJ9AES4pbmuPonSe",
  "key24": "DVnYeCehdCxtUzKcXS1CdkfDWtxHD41Ew23Arjwid8U1FKf3MpmuiqaVYzQdv9TAn5eVLnSfSHC8rWpt6rQTzaW",
  "key25": "2uJHn8u52BPXLmGFAytkmrEhhurrCJmaKS7MjS1V6aQFNa6byj2BVmEUrV3mF4141hg5d1X7WZYScTkNMJGXa5cT",
  "key26": "3Y29Ahz77ddBaXo7McM5nq7RkgSqEwtZFNNCCqdg8ngzy1fxDwoxtSWHw1b3kuKRGKkyhZgZ2VT3JKdp1WcKSjUY",
  "key27": "3wT7rFXxidEP9E2yXee74DJdz1o2VQYwmFUB2A5zoN1MfNVonHLAitgmRotbM47AsRKgbCzMBoHNED4rDjcWGeZ4",
  "key28": "3JUffby3FzDMHXR8Xtd2U1Qx7dkwSvEUKnacN6h28pVhSPVNPVAX8zdvjaJ3Pj7SJcLcS2r5drG7K9kXrFeh982X",
  "key29": "3KKLmpPY1YSDGcNsekPYACZjZVii5MdFjs23XNj2241hNaiDoYt9fWZfNrb67k91zDNoMorLi6HfpmfMWSmTJQxb",
  "key30": "5Lz8nhi3QGgQMDTvYX7yp2AM1BedZ4giE3Vi9Ym3N7xv5TFzDzgTLYVCWRq6qjrw1729eREpcJLu11ZNfPoYShoE",
  "key31": "5367eYWuBHiMdPzHaWQZY7bLmEjhQFQbrPuGiVhuA937hEk8Dr95KPj6KFUyeUwFhB8zj8z8VAyP8bcsoaHFGdjF",
  "key32": "5agM9uPXq6v5gn413YGAH5QZo78VRZiq1yji44nsRm69pFdiAu6UoVHcHBeUTjsEutgRX8nA5f1Hzq5LvSn5kTe",
  "key33": "onecArRBDrsUx1gG3d7be5zXxz1WaPcfpqV6A9rVetG9AxomZxNzHHkzqmASmBEXQkGj14f7dWVqKXYbHzRNz3Q",
  "key34": "2kFtBQ3zfSk1YC9iHzrhT3FRyLQNeuhrKGyMZ8f8VaStGsGVbdivW4cQXVko1DZica5KMyr2qaqHmSXiEreYsLqA",
  "key35": "2Yio6WEiQyA5yR2eaKZkiB5emvmDQru6GkwTcmjVVseg9JaJbzF3WALk2BU6Mq3CPBD2uJvD4D7E4J2kT6mVrUK9",
  "key36": "2oVLULedeMeAmCZTSuZvoDA26RX4kryggNUAa2McFRqKdFLeZjGUgyUUTuPasi33Qb3NSASJ4Yizi9P1JzdPhGvX",
  "key37": "exQVyWCazrST2sqSv9Hhjz3H5C9axD6h1nzN2GYBcK9MTBcRcqUBdPvvZEZEvTCsc3mqmV6U2EHduHsrKAKDuLg",
  "key38": "5o4sewPUokNMHtBTt5wBfjNXp93rGuyYjiXdVFAdR4f3WayPAhrfvDhvybFCBA4tcDRdMfA8QLq1DhKGVVbUse7F",
  "key39": "4Qhmkyhbo6VzWffx2DiGYZhDAusjDuarwp1NXq2QcAVead7KM9L95jUnjqLLgE98ejyfomVaRMmR7ihP1wyaE3xy",
  "key40": "2SMknjwmwTKr4QiFNmhMdqh7nLvCy7XBVhBNPX4gQs7AoSNp8MkHqh1TC9FWhucbCTdjvXB2eV8pQkCyaxXW9QaK",
  "key41": "3nhXwo9J1nrL8qXumWrWhoQo1j4yyqGTLrpep9tsvYa8pjT7CWWoa39RW1oAvLHeQCotndpFHXRvQNpsmCWDXhue",
  "key42": "5rQAi8LhwnGcv3AVgY5tZDf8m7QruuY1T7DVb5LyiXVMg2ShpPLosDLn9H71QpHWEjgf1UBDBexhUc12pAB19c6m",
  "key43": "2zCZUQmr8BKDwvMpcuNr7hS6P3QxUe63VRmThkwgM1FP8GHVTp6YCGm7JKgRwh636t7mRLM63aWUNx7EgGpumqZz",
  "key44": "2k1HU6JDabnwmxS3vfM4akFEBnU8KHAB53av2wPj1yJas7rRohan5UzHbUykwM17iUDFFjgdBA9u4cBSUEF6zCxd",
  "key45": "5APEAqUo3ejoq1pgPsuQ97qazi4nR5tvrctQf2Awczr1qvp3YT4o5kKT6eW97AAoHi8WqcWM126W2sXzujycDZxM",
  "key46": "5bpKAc25pGkVPbWtUznKEyzn7ztdojjtK3a4ZBBUMtzE1zzwUrxNMbRkaPzHsxfTxtAEgi3iGGWZEhoQp72TatE",
  "key47": "vw2meSjsGr9eo56HC8npND9vmWJA4e34EYVfB95L7RYpwA8nLq3PmjyfueN6iSi3AyBEnMysMmtL2W5kXKmwnTx",
  "key48": "5VQUCLDJd8MwVZGNDGCpysKksmxL2pCMT8sB9i1xEcL1nHw6EeqeSFaAyvJEGPhsw7DDxybqobuntJNGn6RqiCwM"
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
