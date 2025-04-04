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
    "5vc81P7nFfcqVgPoz9fjf52ZHfmr62sXXCCTPEgtCY6URV3XP1wKVnYRwPHe43Pqz9dWMVR5RAfu8XE391reMp5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQ6VuRJ11kbrHWK6YE4Zqx65ZRq77yS6VuzzFsUSraf2pP7w5KKNEYvBseVv8bdfMRJa5ot56RkZJDoaVbG1vow",
  "key1": "rvtyruWUyQdt2odK9NFmAEns2ifjbis7qb1xWgtcVoziLHKuzPBs5fSxZWbm5CqJvPC2YfiszetrGW6bnwcJGwG",
  "key2": "LQGWw9YtH4LREidbKLnqWsAbxSa2oU9mwsN7dbLXdqDLY1H6eVWkWR9MhC1Zjf4ufQYLndRFBXwTAMSQPvgBffz",
  "key3": "4u4SBS8rGYhfeFmibBeL4rFqpKyiukZoLKtccAz9Ref9hfZzLMoeiZPjfnCWD9RAhaE4ezXWK7YpMw98TLQsup53",
  "key4": "5e93S87KVv31Wy3id7T6bKAT9FDYbdKDYMZSWMspgWcJCBwjKtxx4vb1GzyRH5BtTvGxotvZsxL2Goq18uEEW94k",
  "key5": "4GUqK9mAj4YyEm1pFNZREsb5DjXwZo2gSGCj8S3cYp18BnwUTUxphwMRkcctEe59EssRTyjUn4PfzA644btz6XHN",
  "key6": "54qw4yDD7mzxadVGLLGoiMiix5DKcaKKkwdHYeKJTZEDRZUTJb8as1SD1y1pCKEU2KABJeUukNDXH3K5hTT7Nx7Y",
  "key7": "DU7s218YGLppwoakYfzSPWExc9Z6auDc38fYJzKK3NdvhvVnpRaGNRVfVDDvXuXSKWinkypxbsHjMTS3MKBdAiC",
  "key8": "3YbbEh2KcWrFxbHFbaCaxDhJxowcPNtSdrhBpobfKH38eUvP3qCWVNvKup5QjRyqaRn5eaAqnuaqCe4hZXHt6iRN",
  "key9": "5WdCRQXotrC45oTTiZDgcmvDJtgeuwHLv9HKrooVHrSWhsT78jFcQNQGRVn9n4WKRuo4i2DvU6k9LZ2EJVf52fLj",
  "key10": "5AW84kn74o93qwbXZsAVKLaWhEYJhSgjQXN7L6eQGZqbp2QjAsMjCFMmSnzMbdQaMdM7mZrPDeHf42zgHMy26BaE",
  "key11": "VJhhdqNRCth949KNuZLiHaVjDqJycCFCi6NhtTFvP1Ve8sGeD3S85mjegP25MwKFYKZGnXgGn8sVc91cSWbGi4t",
  "key12": "2FTeG4aLGMjZiMDH7iritAyPVYfFqBzWrFS2rYzPKXdCm5CWpSGSwCAru4eYLm3eUHpkJsaD7KEWCcKtHqUphxx3",
  "key13": "U3TpPDBnC4f61c6r9jf9VddsR7S2ebHiKAN5555xpN2cxAJNbi4X3fA55jnSNLA9JttDYu9mgsYaii8zVnUdKSC",
  "key14": "2mRNDeP1RY4Cn9tSGyBwRGGZU1n5RyJhtHeyt1h5ZeoWRNMjTZjxWg7akePNWhyMvThsHWGupFcCqrwU3kutD6KB",
  "key15": "ER4gieFAMxBpKQWH9NzThM52mwWZ2gEo7mivAc9LB61w6ARZfSG8fsbrRwNDmxqfjJXbVEG9qMXxWuR6D3mm6ez",
  "key16": "4PUb5VpZqQaZmJv1JZR6XrKGrghS7stUnVJdz1C7vLfZRj6yD6Mg7Cp54vDnzWxHXfgT2orYN7mQv4P82qC8grup",
  "key17": "2CcoxCQnb3NXuZzEcwTXTQdvCioja5xpSNN5sswLpcnoz6vsNdTHxwAC469wgheUDKYpu3kxdVPk42qLjCVgCuHX",
  "key18": "P4JvzpRGbKn3PM1PEBKazE3Mx4RAgyyuWSn9R1NUWavAD9Krgp548WyiQ9P6VLdWoTCBxwBXuoy9gkJgYXCQJQo",
  "key19": "3eA417AXFF3BQgN8fdDkp8igMQ5ccAmh5pRLd9x6s8Pnv4GbWmwVMk6r2uJa9KKUsWcQNS2f5t4faenEP9pcXUKr",
  "key20": "5Cwhtb5tR8vuXsLTZRoQeLRtnJpMbhjaLx2i1GbRLXkcXe5ACF8whKC1auWV79jem2hyL29ce3ieVSavsFbZpRZP",
  "key21": "5NGyJDHNEkM1HTcaxzvwVre1M2Q2KCuP1cQ71Myx4gZtobcok9tj3tCDUyKkZCmegVTA6HwFcTjERCZ7Fk5t85oc",
  "key22": "mGdRrjbFMjfRDbUTe3rp6jBWSMDPpNB3KTaWNth2U1n4s6FweQYiuLkUTFFhqk7CVAKL8zdPxnnmtxdjowysnZp",
  "key23": "5RMWoitrq1RFhSWBJmvycpG6t7re5oxMavk7YJ25q1PSwKT3bJQGQEzu3VTG4xTaPspewLrkLQZEQayTrYCUt6bK",
  "key24": "b2UymaBcMBMfL6i7CAF4QVzSQ61QXbi2zGenBTodtsgSTkhJi8Rx9Wv7LDFjmsUPEQYi6k1EyPtq4UUPgjBt6x8",
  "key25": "5wGgcZdSd3j6rQh11Lt1gtMcCNy1y9Ybz8niT8SQVDWyLFXDjvSWsGmKPDyGpbAXEoKYuboXiUp6fsTX4DVCfqiX",
  "key26": "5sd5rZYC7183CS2vYQmwQkzTzCiveC8wo9YZgNS9iUEWZUTvuR22BnvA67TT8bjg9DX8X56tBjkoTFAcXczfFB9x",
  "key27": "5G6XAQV7iJ8pkGb1Fc1SeHjb7jHf6coSTYitDuYZcnBWQhvHkfZbReMcZ77FSaA9Ddi6S7obH2DrbczeT3mgvJrg",
  "key28": "35chJRqboLy8mjeg47VMrjk6ofmrbPvffhavrpjntG415wNbsUZ9Fr8QPaiN3WjxAp5tTuvAF9DLXvstXMKbNoWb",
  "key29": "4NgdLajsuHbD672TCqUocQwFzqi1QkPaAajowaZ7d8cqHNP99fuWKFMbAJ3UcHmVp2zZqr9miy6to85pykTdzHDc",
  "key30": "2Gy6SynvZUzJZBfseXz5u8HUrHXNU6ECnMokizgrunMCRyT6n4avquGELXyEnMxa9xLNEQ9TGoKvhTgPH9U8nfdk",
  "key31": "2iJyQhzKZdyTdyWKw8iibNBDr8HKwBKSYFYn4nzSzuFwJBWDCMZygpqK9cpvSRtSZHavZ9hvRWJLAQy8TBsRwfX",
  "key32": "5pnyZti7aDe7nJrvLVkB5dfzuM3QNHkgpLbqmrGXDyrAap5EJJTeR4oAQxnPLoo4EzQ4g5QCmDs3rP3NTpmxH1Zy",
  "key33": "5Zq5egLi5VW45xqeAcoRWLjF5Jf74JC6a3QKYdCk4CJxXKDeyurckbFFUUxfoftZymTdvzt3tqyTfrfX12xr1cAy",
  "key34": "5DoFcjo5aQJCj8xhAuTZZguqWXK7khmc2Y7Jmr8Zx8i6azxPqkRctvHFZgRqwccXVsirwJ8jajzvJe9HXBV7avxW",
  "key35": "5j5tEsbaj3PQGw75rrNX9iTMfWrksR5Hd2BxCzRC9h6kX6WMhG1zdrd7RwuhCypA4JvqTa1xLv8WqHvfuyrJyL1A",
  "key36": "2uNzLr5npWTgNRBqL2QzLu4EJF89Ahf3bvzjXvy1fSkW8h5RV79fKtQrXVdxea5gMm49bZ6LpvkFeTg4eFMGWH8t",
  "key37": "2DwgWdPE3hv8cv7dwyMt841pjoFK2Kjm6imWgJYWoTkRRfW2At3hRJ5hesYixqwZT2EDbYGCmSzK8dfzpZQU3W1C",
  "key38": "4UXDn76Xg7ZPwXengtaAhgknHrhrFPJveHF5cT4PDdrro3q1JXsrz2eScZh7ZzfSvAakfUErj5FYw8tyydXR3zZh",
  "key39": "8StddkYBf8RUiDNwFQpsayf1ELjGsvq2AZTZP37w15YgfZgnLwLuJW9JxrYuJzMFuxy4VZDmwFqAxzoMgoyEpmH",
  "key40": "5eRNEjoSgFhgwEL1e1JRt8vSNXxxU4SfUa4LH994MV29pmfLSsjYD89AMKK5NJR7Lmq1sDqhyQYepeWCHWNu59yw",
  "key41": "44ebSsaQLftvNQuPjmzdCXhPpWXsv2SC6NNYVvxvQde84NAyDxwdoEX35tFVvaR1frSnuXpzcwt8xJgiuvywUkRd",
  "key42": "2zzZKkRT4GTRwHyzHNa83tk11vdv1zvfjFFsZPo2KNSPZ2m7P7SDeqGRMSUmyNopYFN3ZvMNx8GSrtgjD5EN7697",
  "key43": "571549YNmaKAk5U1p4X6VaPRJxPbM9rkrLXTsMafrk9QcPLrVmS4NvYpRdhTeTzLRU4LNFcyy4ZZ1FurA7RPWtCj",
  "key44": "3XeSt7tUY6bxFiDKkZZhTXawEncpHqNtDGNeBZZUcVT43Gvqba4NruMTKXi7X2od4w2aMwfsoVDeZ5wUu7QN9GwS",
  "key45": "3pYzvVzAes5V859N2AvgBmMfBrgQ3M9r9xDHwKyy7zFSxEZs8oBhaHHWDZpshKQrJ8QzZDMRpBVHKCN1Jpb7mvoF",
  "key46": "22riv1dp21mNsZvQMQWop6New7EkCckF1qC3k8Ungt9D3BS76yiA6LSYZWwi6Fp7pQsHbcgSfeVKWDMQovBhCEpL",
  "key47": "qbKoyY4U1Eac4rNmWY7jQvrEK86ZXUjtWQDPTHCS2KxjubpqTevNtamHsWbGJF9YTo6A4ewgw9VT9WPboQQFDJ2"
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
