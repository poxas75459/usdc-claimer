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
    "31RjxPtwnWApKcZuDLk5Dr4zGRv38Rag51aQGdKwV3QTVodoR5VQL58wWvBZ37jGVjCRVYbYx5nyDPuZ7JXAhmti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7kucZdnAxfyToYi41YSxhAWChsGSTa4PPLqapeNRbpnVQkMgfZrYgd1QC1PdvY7AtD7wqVWgfBCUuS3hoyDXdT",
  "key1": "2hu6omVenofCWEb3mjFhgG6Br6vwmNtWy7v2RpfnRQtdedhgXpXkmFMc7kBTJMznyPDaiSUFBogQzuS1kHJ738Cc",
  "key2": "24Prc9bUTdoK4TRUgdcQkT5hLi9Jw2uBNT5gnffmC2sh9Lp9QHdT1UMZchaGQtdNT6dyPSWkS5U75S2z2dBMZQb6",
  "key3": "pR8PKyXZnU7sctSi1D8hJeTKkBpPSzY9RowWejh3yhXgzw1z3S5KjK3ia1Qa7AkoUvRqhXpqFoXrUkCSZXC28Yz",
  "key4": "bJFhraSGMAaXTFf4rt3pm1kUViZHQCHMAsvmfKVnQfpbcoiVcK8zv8Sxa3zzPf3VuppKbCpAoN2JVTnADX66uU9",
  "key5": "4u5WU1FyjCgzqktn5wLu4Uj2QqyhvAxLF6x4QqrkHu4VGjnbLYwVm5kV27rwjuVVDoXs7Fw4wphNH2jyfQvMHMv3",
  "key6": "3i7tQCVREkRmJVwq5iXstWLKjgrGW6KteMnAM2U8MUKfHZrNmE7yDtHcRGTSJNEJpzPrnboMgCfHdS6RE9pDyzMX",
  "key7": "4Ynw55N8ec6rPVmsac1TGrycN2onELzufE7oHKKhSUg3oLPpmpQPYLwohJyZBgqCGfV4PL3dpgYThTEKSuGqPZyp",
  "key8": "2yeC69GBG7HVGVcua4CN5ek8BZCUdZR2df2EUfFUEYL8ySvoc7fLMuLXMQUVxB7dbTPZ5Vybwk8McutdNqKBncWW",
  "key9": "3Rvy8nBVKyicbAtZsbWWtfyTJhu6w2mQVaNtsTusHVZ1CAMBaW5VUMMLhrPHUpMttrPXn2jfPqzc71KZXHFeYuZX",
  "key10": "32bSroxGjBFpvVAtpWpMbXocCMgEgixPowFQq18jef8hmTiA224brWSkiKHoPNSJgDSuyYxGtFY1yy9Xs6YWFCdv",
  "key11": "HPSfMDQPm3zaQpT5dePJD4RkTz7gtfwiAmWCxPNs1KQu4iZnFY9nJcPn8trjxf7zN2f4J2vwk14dMe5JxH74iAX",
  "key12": "C2aFtHgAzwPaPUKfhay1QAsLtZgqGrRosmrRoRryaJpuQCiuboxPMMb1m2k1eUirGVywruTo73NdmGVhyias3Xy",
  "key13": "dA4188qzgchZzSwKpSdbry7i4ZKpM1ZUCA5dj9dQFW7kuqv458oUtsRn3SP9Wxv8s3yK6yvoWrUTmXXDbyBYfQZ",
  "key14": "2oqwmRg6XLVAu6hmZ7AhVYg8vAspRSssZP9D91RHz9AX8QUS9QParBFw43rHKyAt1eKTd1mESWwNtFE4DPmMCbqx",
  "key15": "2WWvd11Ci11mbyoXfkooEtfuxs878pRorPXkZcaX8kgL35L3tB4uMw2JtTu2sWabMbjyQ8nChRimvr5xjuuwx7e4",
  "key16": "5c8nQiMdQGpForhB7UNTEJ5JoLuwZuLMHCX2RKYSHadAcx7PXrnsuBD28xwwYUnvTUnX2PYPDtQW7diRaF1DXu31",
  "key17": "4qnChYoYdUsvsMJvwFnxo3GiQcTqV6Dehg46J5h5SMVA2Lw51vDa5oPBs4nvK3yNpscAfLREkWZnr5u1TXg362WN",
  "key18": "5g6fYzDsnHc6ReFsdMvxghaDzcXu7VDB5nD3pzj6x11zny9veoVAZnXpaQChQ4bRGRrkHPBJUvjUcnt5pUpZdtSy",
  "key19": "27dU1c3ZmCF1anRWEmmXkbeE5AApFMZHd3RrCchqGHk4zvGkTxStxziKf8epiHCXiy8s46RefN15yQgPH41swXWi",
  "key20": "5xJWkNV3yMNr7K44aHjGZDN8bLBuBge5hvGhn2qszp4hFhuCrqaEUFGYjkLbDiRgpEM3pXEuF8FUVrSds35s7ur9",
  "key21": "2tvSmkEzQDdz8C175Cxe9s6uEN3mHBe7SU3fZtCYZEXTcL8BUx4ju24aN7AQf73mCwEXPZutX65a6uafi8oSNqCk",
  "key22": "34JBEhGtpgTifGiHQ4d25vaFH7SuAgWaHvC1cHHrz8YMCTcG7wFo5twFt32oQvCzyNUNmid7WhQJekowfzAAw56o",
  "key23": "5ojFpEpWiZ6zTGiEAvPWktepzpgdro4CbJdZi9FV5JUTKb2WbVc3ectfH37inotQCAEEyACfzj1SB1C8MD35gD84",
  "key24": "45RcJuTPGsJ4ZoZndYZyts7HrXWLUYwjuumSPy3mqGPYtYu3qR9VdARxxPtgiWG5h9q9SQ5zdZjqrYeD7QLD3uZA",
  "key25": "5HdoFp3mB27wviAyFTU2xcuSkRkRP7gaG2FSzSqWSrJjhJD9SAb1iQmqhUAV1R2rgZeaUUJ3sQQWyNiy6WQAhbCf",
  "key26": "2YyBDjz4x54D5PeXHGPHQbDyUmZJq8XtnRcU1oCzyaNX5BhH8Sb4VEF7XHXwTZif7ZDY1huDq2nH5Y2uY4yT8z7B",
  "key27": "2Kwq494oFJ6Z9bUNkwTEzYjDKWtabmmySJBH6iTy6A2aZ1iAkzJWU4Gap3oYDk2MJRKjWzQuXzcRpG5qyG91RLuS",
  "key28": "5T7URH6eNiYLXmvfgucE7qjoKxBR81TuJYDQWy2YcFSTAxbEnjAtSFtjfzJNDpc6gFZZauy8XBbeYSQgScqmyvKH",
  "key29": "4UjjUenhQisvCU37LWwiPRpggRUbKUDUiGnYjnZocSJKqGx6EXAqjDXuPcXschpVrUxXaJEebdKX2VDv1d7NaGPE",
  "key30": "59sU2ueJsUMALCRvJkTbxg9FJWFe5oN7XURgJZbSeskBbT1AY1GExKw4P9L9NRQ3AafQEXNvDVZEQVRSNMHqNvCo",
  "key31": "5ucZXJywj4FQmyZNnrqFLZp8QEeqek2UKEHQmnM39GmnupAGfN7wpgEcxCb5FJV5uLUaiVfzM5Zxj66Fj9TXbfUR",
  "key32": "31k4ycJc5HCM7wVPq4YGC29w6dUkDCE4nFNwLJw99mkfSThzaUtEtcddc36Cq3U622ACzY81ZQJETnCXSLVXHFFd",
  "key33": "xZSPwfozT9zpoNJDDxF2joNVaGNLycFgHon3uHH3RR8JZECuHP4G6CDbQn1FbGmHH2jaawXhuf9PDhgckCk7StK",
  "key34": "5JXWc8Ge16ixGge2ofR1PChRL8HwRnnFfPuK2jFcq2KDsfLFpaDQvYNemUDARys3xzNoDWY2zmufiWPhKYinUCus",
  "key35": "2zxWgyUWE3YRUobDDXUKUtZe5qjc7qGf36HzwZqgjTE6oABK4ppnwL6DcDwNnSNH78frVjGtjAxZAdEUtPeSh77u",
  "key36": "4bn44KtcHuG4HTfVVf9pmEtK13VUrYgwsiuZjRnzM8Bze26BQfe9EGYjSTb3HgJfs1N4CZDWGsxkPqAv544XT75L",
  "key37": "4vXZ137R1H3k4jrehEBU6bJ98pn9AxtkoKWiCBqMQHdE9MGcv498SZCjc9UhJUXdA4qDPJUAhiTFWVn4524qEUmw",
  "key38": "3pFuTxitnsT5HK2mxHonb88WW2pDcBtG9GtSVvirXTjiqhj7mLrJ9xGjCqYb64Xzvh9WxFLJiFZdMWQCtykkVi32",
  "key39": "3nP8vpT1zzTdcM5kdkD4yeWFK5qKBPZgLrVaWn4iswpahZvEdhe4m9VxmgB6ihMFaEekYnpWb3NBgX5anLqot8UJ",
  "key40": "27KKWUZydbRDNsGb6yAhjhCRBozNVmFTpxgz3JDzo9bvQwBBfNMbwhD6Tijt6RV3bZLE5rbASbNsA1sZrrnwiP1n",
  "key41": "3gcbCnMnK9e2DTcmG2jkZCAiWUhFbEQLBdMLupn3w7zEVgdrKdyW2wLGU3KMPotDU4LvzoKswqcYhGKNmRWEHMV",
  "key42": "3hiv3tFLjm9YegXZkkEU2ag6oJp6YinxApLfecK1AHmzoWHyqEinC1VUcTNqGa8i9uyeWmc5NNFic7FKLozidEcQ",
  "key43": "27vP3bAy8PAmXLdG1ZBH2Jg8v6RSd1jBX3Mj8Kjmiqzp33vYTTfT5fVyxwhZGnDogYQbBJB3Vqyou8fBkh9CHbpz",
  "key44": "FHHmDnHRdVK6ZHW8CN8e99y2f64Erf7xczprDFbCE2mjEfaHNZPC4Eo5SLV3aqY7SY7m5Ffxn4gackGNtcWkomG",
  "key45": "3m1YVzTcqQYNUaxzCTTfD1JJLqKmt1N6KPtJ1jGYWkJzM3ktrbrzY35EDSX2AVKoT1JivfSYaWgjLCuwM56Yf4TS",
  "key46": "2JP9MVMdb6veAN7MVPdpeNDsJtxB5NqXTWjYnh31n96ELFag8L3vkc4nmNMiwH8uGP94MXuRowuUHyUP26J4hJQD",
  "key47": "3axQWsZTgntrYi4PUG2QZ4JRZjmGvhjz9ia31vsrfS8Ei85bFC4x61oePpvB5pMdzxHEfrmMuqPeDBVibwfyeRCM"
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
