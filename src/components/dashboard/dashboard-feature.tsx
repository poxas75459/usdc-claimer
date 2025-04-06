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
    "34gY1T1RVqYZX1xUceBxC8jSxJ81Wkf4G8BKCKsUhCjnwUsLaD5tSEMFt5dtnXAmkvT7xcVFAUU45Wa2KUWaAkJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbNHTxCt13gufd7CWUmyXdZFY1eLsHasSRYYP3HEsNBbTPYNv859biLGW4sTqmLW1D7qCVTAy3MFbvWxcsVBx3K",
  "key1": "3QyZmNyXhd5V9ss45atHcW7beLzxiiwFsBBh2kWCcWn4ztzPt47g6mzB2sYCgqh1VfArRgG37DDuAAd1t6xDk2K8",
  "key2": "4acrcVMM2WMwCZTuUFT3uDhBTuqpvSGWrJTQJzpgTeJYHpPirMkE43nhwpa5mK5A8CDJ15jW5chAebUMesWtoQRV",
  "key3": "4wavHjY7DMc6YxkBvYZrJkqwK7VhWjjkcMAeNeeS713iCw9TvEiLg3uHVtQnfiss2Hdo9TA3UbetRGMAQa8cC1Ei",
  "key4": "2eSZcAVuLHyRhJ6vxHuWXZoRmPtQFiPhpa8aCcTwSBD5tcUDioJ3ymHjNXC47c9MvKJXQPhwnzbQ6omX7B2P7mhY",
  "key5": "3XRmJyWjUn3nmfFdvbP8DM4C3uqpKugGo4g1u1C1wng6TzumDpjJwHA5PPJPwC1E7Ts2xthqZZpJ7MWDDbndv5JJ",
  "key6": "51u14cvtShzBRcofyrA3hctM9NMxVD46F3QNPU15ohKsWRhfQcKTkTWKpbqFEQDwDkqESn7XNKzCFNgPTcDeCrSg",
  "key7": "5LRvCrn54NFWajeyhdedtjj7H8aSwuXGXf1AcNcdzdU5RaZ4Ve7ufSuCKBmRiZC5QxJZsPQFyJADCEHE8wEtu6Zs",
  "key8": "27UuxMMHGuASu4HkVeSbTU8TLAp6WEd2ihRXGAt429CAZDYeymvcyZYpD1srtsrWdFPDmC9dCh17Phq83p7EYjVo",
  "key9": "3qie87f2U2wXsddHG6zjAxccBCATcPJH65Fbk6QUYmP5JdsoogY6ehML8oR32uVb6jnhRAsjzMTPmXKGysA3Z3j4",
  "key10": "2NWes6ivGxVsAPCutczHAG3QGbiWvAJ4ax7Ms79Qjr4RsCXgUAbTVPXncPN48GXErgT4Z37ke3wYkKTQLkoPuugm",
  "key11": "4zBhd3jP5magvCjCkM9xJmFgRVMUe6C4MLYU5zwkceH1GNbTyTZejnRWnu5og8EYjLCxx5iWSkY9RfiKsBd1M4Wi",
  "key12": "5H96sAr45iy5Z3cn2goMFgzb2wU1MxDttxixgiaWvrxwXx8z5bTRKj4ASL35fUrS3YTXs4k6yJ3XfX4o1y1yk8nE",
  "key13": "46KBcNffdXzUH1FFj5DfBLf7xdfYfj6qzWXRYBG1apYreEWJW9MGSkoRRRCzo2dAQ5W5W3Hq3asrd3KJ5s33fA1y",
  "key14": "2hfbQTJr6jrMBZU17t7KkiZvKNBjrYENgxhQSLTxy9VU5StLKbvua22f9idLaBexei3GVD6311oQKkQVj17dHvBu",
  "key15": "3TygER5XJt7EKjqcbJP8nwx4SZjjidZNStUrFt441DMfaK5ByP6sg5mJt9TYkDWYL3ZYxZTxPkhwPXRFYcLG39TW",
  "key16": "2iTTPtx1BsHg9Sb1uiK43C9xHCxG7DtXb4E2R3eN1SS2zqiiNfk3BZCENhiBZJMhqWq5N1M1hCUnuJNXJwhqYX8z",
  "key17": "58UqEPxCaCBucPhkFnNGLvdSDSyv6PqRkG74GiEkKchPFFpVmta6CAQDYxPYn6pZqEoF8bEz5HeYFKN7ineRu7PK",
  "key18": "5gosxb1dUNJ2fXsoGZeQpvU8eekb5m8r7SA6LemrcC81BzeDKmtiE8Mng7VwcBQ49yxEsi9Ve1jpfhccUT5qWBdH",
  "key19": "3Jfg3kZTiNuf6FmwRGd9MiLE1nq8Nj1mMe7RqcsdxyCqmP2gQ9QAyjLMGzQWT3xGhkmXY89dRCBLBZiHzbyuknPv",
  "key20": "2xTmSpeyY1g5WnUgS8rcx1GUYBbxQk2hF6eR8TCKcaNchm9AULt6qhj6MncE2XEJqQDYfd1KhiA5r2qdAGbGadyz",
  "key21": "3sBhT2uB7wLGtG4bteaUP6h7ZiLBSJcozsNNkarU2BpbUYTntHDyomVYkbZpEXw33ipXr4wWjgwWGbYWeVUZayH9",
  "key22": "zXLdQ9kFD1KgimThzd4ARv51qWVNXkrsekntdScwEwDyYiQrW9Che4bQjaMMz2MKhjrGErNnmQ1TGh1KcuU5Bty",
  "key23": "Q8o8U9YFbd6QGbAqtwuZzrV6oYB4SFZFtoGRMDSFF5mzrVW4T2UhV5aYqgBnWLPZ1Dm4B2z9HnCDzjyWQhUTEaC",
  "key24": "EvJXJ2PbV6qWynnRjb91ME8RbRxx3WahpSpx7CwqNkFLeYMJF7G5WqagS7NTZQkQaA8ACiP4gVcxEq5KDjKLrPz",
  "key25": "5179DG4gmj2MoieiqYZZjbnJ6ffreYQQZyU7swcfTUdkhdT6sdcLaBWGbY6Qhsz4oZ2RtP1HyZerB85EeoFVtBZT",
  "key26": "5bA9Kgp2FPCu7BMegAmr6vVUAnRkEFS5dNhEnGPSchYqHXZfbBvik1LcJ2KbiMmRsmsfroLkAHfNuyzkpEG5cvVw",
  "key27": "JCMYV24wa2DAy3PfNt3PDUSUSKnYQPxdw4MxLAEQYUvQAqHVWnyr4g5j2KfiPsLTqwutPFfc6qKRciiYro9vUwe",
  "key28": "2asmovxHBDd9cXvSXiik7ggEuHAhpJLgQ8FyUUgNHyzhe18epPMwbxhQ2VQK4reZteUKBE3jJjFagbBRgy7YXjMo",
  "key29": "5H5yvqBw6V5gYspjYcRNmqsJ7NCcRj1AMYtVe91YZCWu8UiqqtqCu3QVTCPYr76H3CTzYUJAbrVap1fDhPbLJfws",
  "key30": "4KBPEJvX1z89Vn97ZRcNX12mmRJnVCbkTDc1dCfU4d5ah3vvrqJpfnwQwKu1moufSZcaUBitA3vt5H5X1hU6SfjY",
  "key31": "39xjA1Fk58xH92mxdhJLNvXnt9VdCWHVWZMfXvNrwMG5psogQapUKcgUw8XzHsSNKSkMqF1v1TzTYRsnRckTTPDb",
  "key32": "3CYbfc3Rt6ec2RTwE15mdxSxEuNbAg6Q1x2NfcjbdKnS9t8zcuabVMr7SqMb3kRAuEdAXYNAkgV26CDVzU6TNGRK",
  "key33": "CJ3ofWMzmdMeRJHz8VonnXFKqVcDkwZSp3oG7yr1maigve1BzzWZ7jqt9uU4e86MpsqdUJxSk94Y7wks5YjafpX",
  "key34": "fAQSTpmG7FPdQ5k6tcEixtUh3cfeR2fN1PsoceRB3oDgCz1QvLhUcACGSgAFUHyGbjALZKnA8aCxTXcRnp6rs3f",
  "key35": "5ZWUxtbfsPDvpqU1MmpaaEUsk8YjhsWWoxZNmUK3gBu7rXpdYJ3oGTvuCA5j7sn85MM9YLX9LhpjfvnYekJwBPoH",
  "key36": "4J5dbwRKS7tgnt7FH9dKhNK2bT7p6L64EhjDE8iMNhNfXsfvJMyhaFiLJD9Gipz614WchjBdbirkuMJ7h1i5TuY6",
  "key37": "3n4yV9k9jv3ngsPg13aiKRDAnFDLANAGwZ8NqjbT5J6vVZmW2o72zo9n45mqLhTsZjf8isU874uytowEAaRedRYj",
  "key38": "59nJBkqMq4Wc85SEDuWmqzBD9JytKDk25yyAFQoHhwAUSZmfKwQkRn42qZSmAfC4eTLRxBwCvCF4NfzsojJVtDXf",
  "key39": "2KLEmMWGWmSXzPSvHLKgsY7ugxPcLteYgsUFgE7G2CLB4t2ttMWV7uUqCGrWEDrWyCV1syBxL5gw2mv1BQmdciRG",
  "key40": "4Aj7UzgQ9FkESMi3bPdmHizia4F5Jd9AuBgdb1SPjp3xap7gxsn8FqFZ8yD2DkUeZUuj7tEAVmTbFQVPBMTAAfgy",
  "key41": "Dc9ZFatd4o73dkQdXBttZD4SijmF6v5fwjbEjx9hYmWHtDXYQGjhFep1U8XYXKY73sDcZRse7tYBcUQParr8z6j",
  "key42": "5xvsoig4ZRUyk1u6zg8gXmSz2otzgftcrdyyosbvct3V7BMSwZCd28U2huKnydPjKrd1J7UKiubdXsNMgxzZ1uuq"
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
