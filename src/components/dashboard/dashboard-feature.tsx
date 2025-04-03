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
    "4TmrJaT2UT9KQffvnTtEGDzSTVy3c1TVdTH9Cao3bx2v8nRA8WeBuKjfi8EEFqTHqNHDpDbv2GxM4z3QUo1c8qaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHtUajX29kY3xzoJQrUaxLuDsUFZyT5BAPMpQC3E7qARDoCdziDqQJZ7xyv5fZHK9vmzoSbLJ1k3UtPNDxWZaCr",
  "key1": "3qXk35DfV6z53ai8SAqNLVAGqYNTHCU9JHZUC2ZA8Dm1aSDyTyK8Q4zDAtYfw5vxtoEVsCMnnQobgdsARGbD63E7",
  "key2": "41XpBg9n6jSksVNbpU4xsqoDWyBZ4ayHopraphoWoZMEzjbG24FC7JtDQSzmqrAu2MbcuyitJ116Z8Hf8KMm1Jj2",
  "key3": "2HARk8cfGmNddwdJErJ6Pv17wTgKXtPcqr9EPj8z58HHrC852vu7wk5KfiaN6YB31vcmBTHjSBhrarZBVD66YiLv",
  "key4": "2WkUkdfq1P3uv4XBEpHMo2B49N1Ut8JTgDYgmKSKWXRgjVEcNgLMVHZ6ruHmSBdfqJkrRWhocEZmLPVuLLxx2pJ3",
  "key5": "5hcQ4W1GyiBF45WJLfw4Rq3HmUU5nUashNAXNxKyDTHCQFJi4Pr3ksiUnY6ViGjs2RzdLbBrkP8tJXkid984xsn6",
  "key6": "5HNCttsA3tXNXSU9bznryozooksRmHsT6ZeVsqsWG7EgtzaKxTzR7FsRqEG6cUUxZrirsjfSeHCGT9AYDj1qt3gU",
  "key7": "2YA1MHwq8BSPzQ1nujpT1uAwSEZp2TmgcixYiebDAdrWL6pecntwExB5pzQMEW61zGVzpZc9vLCGN9h55FCMZoXF",
  "key8": "3chhUMxDovJFYt52bELNWeY9mWq8sGrdoogAcv4rarMxpkWf9rujgQ7eZCEProsycF3MPe3ZLMsKAQ7nSigL7d9b",
  "key9": "5hKrjUPY17qDH26b3LCpQb45aE7MHaS7YfBHmssEETrbtiF2pvPZdj31KSe4d3m6Dq78rW4V4xMMxzyj8CUXwVyQ",
  "key10": "84ZPSaTM1DpJm9U9ajevEs6Z9GgvVraUhD3k1Um19PanLNjrbY6UPMdXgnebVbFBann2oZzpbNpegU8uGfgDNTA",
  "key11": "2F2sWhVjBoHJ22awLvueFF3W71qoSph4y2tmcRq4fDHYZat447ErKWfRTT6DyPH6VrA2KQQowXjhW7Wrh4X8HMvy",
  "key12": "3XfHm5QWBA8ADvYB24wCh8EqrgxMPY24N49KNCCmUfXBptiwEdSZzCbYqWTyiik4kxPJGJmbfH9ECKw1G6J3KKWY",
  "key13": "5tsifu67fdkEqMuaK3ZPh3PPQS9xgEzWjGTCNbfeKVKwWuggutQBwDk3efUiBqs4L4FjrFx4KSpA5cCPDGB9fwg1",
  "key14": "5UZEJJ8iYqJM9SfZTniTCei7SNAChsUbqEdbY5gQWyvMdxK5aEhGkCufcw6awWeBz2o4ZJvPFxCskKEkQUJTTBF8",
  "key15": "5GC8pvJCpYgc4a3s5Ux13LaXn3tHzGNgZ5RFMmf7nrx5cumYUUQYPN1Hn46dspQ5kY36hwhtGATHWeLC8HzPNdfU",
  "key16": "3ixLig3Qk44TuCi8zTCPDurAjix5RWW5enbYE2GbD1JpvQ7YFQETUFLKs8s6k7h9fe8iQdoAZqH1PbUEKB7M6VMJ",
  "key17": "3JJj2nj8XmFxiF4KswqvrnMjFbnsfH2SLhh31QCm1mJajPxPgdTwKqF1NH1NJQNQpeXUEVhRCuGmHgr3Lemtqd4R",
  "key18": "4DGUMwTfXxyFhsX8yumM9Tmf9o8qHDcVDRKMNuY6tY7KXrjFYBbEyduhfr6wGwbRzmz3tLX7gTPGchpyKqRy6Rt3",
  "key19": "475gMD7mgP4BWSV1kRVa4g6Tud9xyWGf1WxFrjSJkLdWcGZo2kPgWipkeB9Pk2Tf7mJ6DTTheBEedkrua4k7g3Ng",
  "key20": "5b1jCLngLojfzmNwaGWFJ6n5ZpigNfcW28ZWbbzDqAAF66KN3t2QT4gFfp9BjTse5eZC1UV2rxsdpy4YJxCTzATQ",
  "key21": "3rWrAxMbTHRV7xVfDPSzwepDBNCfGQjGpLsF9iQ1VioMw5vrKS8YpNu2Y4eWeTtXDVkz5mfdvG3gxbYDYDadexkR",
  "key22": "2Xu6S2NuoTFzouC263KXzTk6kaDBMYbL35kLD5ALHemvffMVD9JvdY3uHTUNn29f4m3YJn6mRUWfe46pq9KWHjXe",
  "key23": "LBbrh7WcgqN6dk5iJJg5fmNgjyEBS2psaCkjHVgem7H82F98sVmuZeEhzXitGKNFRgxVNBk12Cqntj3si4KLSmS",
  "key24": "3j93yMGX7rhBudS5X3UNMTbm7z6PoCUkgidqvxWipi6YnSY6LoxDpUziSYEanmrdonMD8bPuud2J37q6EKTj8vaL",
  "key25": "2HWzGkmVijeLMg3jDPBQvQkK85g9MQ7SH19e2tfpkHkiuWQ56d9cnMC3xpSZvpnzWmbMZPjxyiTiZq1BwtdhQRgu",
  "key26": "M2AZ9EbBVGe9qcad1UwY4hmVaXUgBPg8rZvSF4VJnrv6Vj7B71k7yn5MaNwdyrBTEq7o9uEJvQgAMWrob2jYf1B",
  "key27": "3VTdkrJe9RemKx14Pu3roNLgENdep4DeBuGwQZ78zaXGSb22yzwDnfV8uVqJ41dRR4ZJHHKEYPLpeywTPJLkKwUq",
  "key28": "5GsNiMJuXLrsdrWxTsdRKquVbwSmenuD5jzCZeHdjL3JUKvzPWLHRLZidWthj76TSF4vpyjLuo7fi6KrMrBvD9QJ",
  "key29": "3tTrbYzT9R8fPZQPmHdaNQRMFubNf7zE3FqswHwMCp3ufGeCQDcBHdxaVYHJzJQSe9dLRbB5d4H78oqT6h5LJt3H",
  "key30": "aHgQjxZ5TiDfxY2KHEXxCkkdae7N8mmdN2QNAokgu5RSNPbwb4kodVjxKJ87ovBJfNepN7qPSJq1HbMqATFS4WU",
  "key31": "3Cv4tVTi6tbgbUF4Fc916kmufedPK97R4vcCUqYdtFFtQd4ZcMJnDPs1XoKd83aPgZdQcvfYqGUdrF1k5dQMD7kP",
  "key32": "UExd7NvcJJhqYNKBzNJwcyQaN7sPTg5MWeCm2MLTM9hU8o7w3xFC5wh1nyK2oQ3zZVnM21zHux5TdCdnrtuR7mL",
  "key33": "4U3q2cSxKjGeS1jisDByHVV1bhnZKjzUvL68qH79bs6iLDJr4KfKscffriio5qvRAmYzwvjF44SYq6pr96RP1fyJ",
  "key34": "45MdKZEBnS4a9XVWZCKjUyP8H5SabaSokKuq3PEkDfsejiLfDBYmcPsJpGkn5MCbQ9kL9Ws2sq1oFP7NJAKzyP3X",
  "key35": "2cAdUgYW1FpSRk52noSZQ7NpwM62y9xpbqdh5BWH3eqySKGdGcefkYbP9rkV5ZjbzXi1j2PtzVY87VNgP7CrjDG9",
  "key36": "2qVwgDQENbWvziPqxRjg5HLUfNcZT3t9UjEtmA7ad74psfJHzTQ5TGZeFJiU1aguZrXbmErYFPo69GA2g3BgQ7GC",
  "key37": "E3mthtWPoZFMLxgJmy4C2dSYHHSftU2btbYPo9P3UJN4jJRkACDqDfhMU92t8dzJE5dJQCLZSMM44qvE8hke3oT",
  "key38": "3QgCY2za6oZm6fffDF7Nfq3fxWaXEwAwgJD2eSRQ71ws29m2uuM1Hw35zUd2ZNgxqrjMsMAkj7PwAKbuy8XtE3FY",
  "key39": "5ETQXQPyLKC9Z7P5vMzNcjhQrh57cMQZdw2WhQp94DWyAWj8cfZcCn8Qs16FfE9KZucf4XbxByhrquAKSnXKaQU1",
  "key40": "4xGcPnzozGuoftWmEuwppL1V6EUKwsub18v4pEzoeQqYzwXhCr2ZmA483qY3nkcQgtjes3woSS6LGacootmymv1n",
  "key41": "59ZxUu8qPDaPGdHeZvguxDsViwoQ5xrVLXaqNAwxuYRWq47S5gPm7uYQG2ffJFSVtfesKm7Mo4ZKDj1AyieASgzr",
  "key42": "37Gp4RBsCdZ59ZmQK6Lb8Uh9TmzUZseykGhTWoqu7eRnRUxm9RRht9fai9whtrhhPCKfE2NyeR5VU7bWTDSRKRqS",
  "key43": "3FxofCt8GnFXU56VX4s2u9rGU3MpzztKoQJwrEXt3hnNsVrVAsMaCRSJe514m3B8wC3vaYWJ6W3DRw4eTQwVPi7a",
  "key44": "27utNo1w5Z3pRDiKQ8vH6he4FAC9Tb4AdgFy6xJeWSiRaVWnwbU2C3TXmY79ujgejn54WRbBqnBepXTELSkb37kn",
  "key45": "5sAEriaN1p2Gn4tdrin2GviJVBeHGJMciXmzLGJYMva78jhLD1tTX8NhoLSrC3M547DC5spC8eykMJj67NvZtAGE",
  "key46": "2fTFeHJFXQZCjmKQhLXjwnBmzWwbEyQqBQPAuzWmUYeS3iXWHUH195tdNp9cgENaWX1KRKDUJLFTPBhCn3K5XL5s",
  "key47": "4tZ8iJV4tw1ivAcrmuxUmxbGAssqJMzvEK8ykbYhY8EywpB32rPg7Vj9PWaAyS8CvRFHd2mM61uocvfYdp926SF6",
  "key48": "5doDdcTekNNmMPVeXGuWDteJu2MbNgfAvga72k8YA1zvxpvihMGu3Ly3GDeRjYed3XJKWGvQvn18c4gjVMxcMGBr",
  "key49": "5h39V3Cnyb6fziK72YHzLU2MyQT3DyzVUngVF8U2zHA1dTJgLVgnw35QpZSCsw4uNR3zQy187NuoZ55HdZAcvkgD"
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
