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
    "4mgAekHqaHNfN3aBLzi1AeJ2qsVvxhaEHkVf6fToHqKZ76JsM2hWfeijSTLbQnTsbgLpmRgHmTEtrwBcd2Q7cuBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LfPfUrDUs9JhTCjJavtYiY8jiQD7M8kfHx9JbYnM7Z8bbWzsDDig1YHUZ26hABscMTqEoG9Z2T1kQo9rBMV69yX",
  "key1": "5MLeWhzoVn87NE6xo6KSdPB6ornbeqCnuD3k7KdpeuXcwL4fksByJ9x49Jsw9H2rq8hnzKqEDA3vzA3HnbTkgvdi",
  "key2": "4mdNnaMtj5XtHcwBxVU1mBiXKK2sJYQN6b8mhMPbYgUCwcovrgMkstVeLmYEFzBVRXc9Ur4HrTjn7knG643emA9w",
  "key3": "4Zfdp7xTRmpSe73QAgkLuwZ3D3idCwjKKJPnMBTAuXsGpi4CxzBMJF7C69XpQo1QGm5FaFx3F1xucyRWRiPvQmq1",
  "key4": "5AcFjMwHTpk4cCSftx7dBsxMqQHA57kProsJJKhe7s1uA7HcfsRU2H59A13ztX9gcWXp9GEJZAa7s5DdrUnPM3X4",
  "key5": "4qLpniY51jGSzvTQreb5JQPxjyEjuv8EBtZGgsuVBHzQwyMZVjLDwnTe4QR65W2eDJWELd7jPHBdQAHbY9dg7heN",
  "key6": "5iR3AxEnhGFcnjfDDeGzQNRyvoHLteZ4sTDoo7jR1LbwUhHH6eXwNFeBcCqefn9UASZYRfUmtAEByGpkhLbTfUq2",
  "key7": "2vi2TepWZEmpeU4MZayRCs5minr5whhJQDpGC8bbr6RW3Pdv3KWHpPPhhAuVvzY5fV4kcVEhBj9THrAQtaMGA2wB",
  "key8": "4CrfbdgbLeWjmWxgcpcvzdogZbN6L5uYpsPSqYCcb7AcgnQnkPwyD8kFVJWhtjRP7486M87hKsgZmHxMFxUbRm1D",
  "key9": "sDKKbKDt1bz3Xegv11L2V4GVu2gKmZtTroRGHptyqcf7S1c2vtwNru1TePq4nJiGK5oABfzWW4TG37CpkKMh5ak",
  "key10": "5qiht848kXFkxdXVxEdWvSdXM8KvuGmgBM4Z7t2Vrh8C1bqVdRHSCjB1cKLjEKLrSMLvkLTj5523bPShWotanFAH",
  "key11": "2P6dD8CENorfuTX5zCxXwegKvfpqjoPBHjwpbNvcaQCVZJUDLXzYorVRXUQ9yrLyc5uLRFrsPVqfpunVJdNj6B5C",
  "key12": "3XRZe5NanwXNGcQfji6o1DkDmbLxDqWNW5Qnwbvxg6RUYKLszGcD7h2xgdsA7PkUpfVx4vup9xNReqNBBckagi5z",
  "key13": "5JoPUyny4D7o4tr1ZMDRodF3nH2sF4XNuxh9PgiAxynvawpEQ4dc1LMPqTAxsUHF6HBALLecLZVB64ti4YuEuhEi",
  "key14": "5WRy9CUaeSoTb28aWG74Pk2FnpMLa1D56FjUgCMJftxzftg74tCEtTAmq6ABbBYT6SCCSYtt5Noeq2n2dX6qLSnp",
  "key15": "2vEyaWkpeBkEtoRqaWqFJP1bBEWef42icPCdWJDFsfHXkaSsgkjrjjMB9vo6eEpQyvCtxWuJyrmQhh9g1v5rTRQ4",
  "key16": "3ARLm5Au4f7prvTtgox87MJU4qYC7ut9F696jTZRFzdZojHSNoMnRMLwtBjpGUmTNn3AteRk9HanPAE48REZQ8vP",
  "key17": "4zazYH2mz4X8Pw5ByukDF1FyPBq5uuiBruyyraC33jH7gb8igJVx4E9s53SycFKR8EsGTJza5gghzvfGrZpYMdRS",
  "key18": "4JsEshpL99pCZB2UhUXwG51qaKksb7YTW7zZ73YAy93HBAHahh7UcPnpekUqahH7vmi1xYCuj5t1CEf1RCrfxdZp",
  "key19": "3Qf53ucZSwNj8EGuCazvUvSVwtS1rZfHSbwgZC5TbbdjsWvfGRWpf6r6hxqrhZJncyKnmr1Qt2BoqRSFAWkLbK3c",
  "key20": "3kpMKq1mevsMhG8dxkH2B6TuwwqgEy2yFSPTZt6cC4822vWVXhDHSTPj4W2wH9gTanoGSvLUKKSNhYc6saFZCNT2",
  "key21": "5yD39Jhcqmt9gp7UMRJoNYvCeEWW6Rb6g5qPrK36C52zNLDuJBFxrxCRFbLtLecLAzxJfMW7CgQYP9u7GHc7CHhm",
  "key22": "5u195EyBvQJv8cbPLRZyNwXEukEKR92yVKgeCJW2RQ2VSmKdVW9qEA8b2n8AoYBaFwpdFksbqy1a5RTNsS6AW1uy",
  "key23": "3EGuaPqEchw4gnLeThZmf3q95vUGRYnsp1nY2p7j4vfxELtufVYU1QDsPb6PjBpqEZ3kAjqUGDexuhH3wM2XN93L",
  "key24": "2q2XigCj18fzkiHGrTqdZQ2yRUFqPD7N6zv4Ev7sT9Ls6fX8vgvXD6EN9SWiJ61wPuQXFJYjNE33FQ1GLcY9hzE5",
  "key25": "5R4Jvk6LwFYw6f5Hy8orhPTDSBZX3r11RLyW3krDeUzV2PQ5PGsvpqYP2P5MGQcQWC2sjnfSzfq9iEqyD4x8qtLF",
  "key26": "SR8PvJxV5n73kHbRtAtkBJbwTwvqRyaQZjfPiFK7AVQrL2TQ8uNtgwLaABx18o3yito7qPr9RBynH3KsJRa3yLU",
  "key27": "3bshaWcpQBEaWUNfk7ZRwJrqNBEYt4zr9r1mNJCPcejULJeB5qWfUczYXs9cSULmeeoDQDPDrxohjJJNVwFoVWGP",
  "key28": "2TfrJMxSzrpf9fV1Ybod7eHTKSQdaernh9eqcVTD2gfe2F8xV36813MWoQG6fWCbTCd4w2wWwYcNQFwb2dzXpwC2",
  "key29": "2k6uKonGf655p3G91medaRGu3JQ15upjCDT1aEFBqft955LeTRNcuc3TwZrvxi46CKfBCwM6v2aL9BZRszdFEdb7",
  "key30": "2oTiT8jhy4QFEv3G61LB1S1yN5VUiuqN3UR4sVffKFBsUY7sopXWiS6G4MjTycoxL8DrTzHu3hQZgEMAS9N5mvVS",
  "key31": "3E7aDWpxjz7kYmxfAxUPK84fh2eWjr9SpmS5FNNSMq7hhHTFG7j2KYGNjHSWeYdouTzohX4V7XWoJHHq4ZC4KEam",
  "key32": "3FfAThSi1GLKE5NGUdW18Utd5u5hLdB6Gu8q73tcY9nTjVjG7o4aDFxdDZ9FF6QLNPdjKyxW7FoGyDHLijSwh5jd",
  "key33": "MSpJcPTJKGMxfiPy6VpZhFzSMKHCMWMzJjhbs61b82iCBpraVVYJN9kSR69Hzp9v3fCPjvN6nGSYRZDKSua5gqU",
  "key34": "JW3MTNEqYtZnWLDWdWnwrqZ1JQVLysAK3N25FHCit3bFjrEZL4HesG9nPFJ1G5wN62LrnkbUDHHfYGSvTU9PnuE",
  "key35": "yUHMWzWH8Hp23AXXp98gYQ7TCJ5FBHQqgMZreG1nYtXdkr7rC5XZjiPdzPyKqM8AZPDQTvVfJZybEBTM7fH8iwa",
  "key36": "4QD5R1hMwsREdEjV3qFbwi6FWFgbRPsMQoqj93ZqYomC2NPxtzYFuYVFCXg6tuJ7nZMcwYMwRs81vuD5Zt8rGMTt",
  "key37": "3r653oCxwQSc8ppEaKz2SVGhuonACYjw1d9UCGbnoSERGTZrKcfdeBvstniQMnwx79x8zpoZzJYihgrBSWfb7crx",
  "key38": "4u3n4wUggHBaXrGZnptGsWfmAha6jbajAtWCzf7meCP4QxXYQuFQmWTFdrL1yZd4rVH871Mvo4ZbicoLFLvkAygM",
  "key39": "5fhV32ANXrMEi9is2Xg6putV9FWRxzQLLbiki1FVVubfKtFPjHRa171hRhz8FBQzugZuAQGr6BkAWuXroQDi9sE3",
  "key40": "4WCjydndfUaGd3KTdhyN5itb4TNKt3GdSNWojm6rnuoHAXp4sHHaEtDbxpKCs2x5G3eeMGboUjq5jXyY7t3MXHhY",
  "key41": "4oFFcn1K7EYG8vccti9cVEoNf1qPKJzERZ8PQ28YeKoTnjqqZvg9MCRiM6jriC4d9S8M6q5Lf7YUSJgUodrxtrSp",
  "key42": "2x6NbynjLB1JHC7W1AGCtZqsLwmmgkj1hG2GiqkM6eC91H1gYfGR8VAqe6okjc9KGx9JKo7f7YFgR7dZGaWVNpvb",
  "key43": "5FLDEDhYtvHaPGbzxKEMyzNZzhvKCkWMBt8EFVX89RCJ5hoTM5YGtLaFfh2hn55XFU8QttHWa9wss5L7HnJLsgZG",
  "key44": "36XFBnfYwqhGDyBJxW18ULcAef117vTyMdnt8PWBJBUFA5Leoshd1RS2QCm3yj3Z9TZUpB73PnjUeZi1BHBgz4ZE"
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
