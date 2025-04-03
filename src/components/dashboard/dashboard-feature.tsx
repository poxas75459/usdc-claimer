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
    "4Je4DjcavZATBxR9YQZ73yvwhE7nFtsQc3GefeYimpao4a69UJLEFLjoGF2GSHJKta8hK2JvVLhC17D5yt8N97UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7TLkqXttRp4UPpxpPzaH72CZw4yUjPuRiqoFot9Lch3dS7kPzDyfi87PBXdY7zsENYumJmC8RWaP3zcVQJi9kTb",
  "key1": "3FfGD4LsN6i5s5sVJtUdJtfGL7oUE8jptjpStHWTfqvAiUakeUnQecCfxPCqNedJQLoNry4FUqdndXYNoznktgkz",
  "key2": "5EXz7MJRu1FniCedPJHitixB3xYjZ7qkcNgMiAXLNAqtYPQq6bGy3TWH57jeoFgGtVVcPf1mr4RtDJJ4nbLsP8zK",
  "key3": "4jaWg1758v8gu1PRi8ucNHRwWs9NHtJEvnhcZ11VyYBkCwZMNE8ScEfQLvKhyNjE5sxpvvdQAPtTTdYCoLzTHbm9",
  "key4": "3ftaKrEAWjihaEQFES8fYJ2xWykLAWpo3Sea3SQvQ1CfszPinscwAtF5v8hHnHP4ktG1fgiZipHx3uEqwZJiJLZ1",
  "key5": "54Qm13gttSd2fSrAC7vV3Phzh614GVjQZ1fT6cgBsdKynRsZ4wraGvPKsh8b7xt1SVpHFhjRyy9oSSGdU3h52xN1",
  "key6": "3FKXULX2w9kNQVAjBbKoGhoJQyGKFfDvushw7wM7RR8BXo5TAgn7aGBQ5ttY3obrSph5UUGpXn8WGJEGrHMic6h2",
  "key7": "636kJ7CWFxDtHKPW1jLMwCLT5DBGMivmsqz6w9wfBqngoSePA3fg35M9tasd6HF8dUXj8QWLQDdpEHLjXzeJuHVB",
  "key8": "4ZSB1RGA8QkEUCf643CkUxWd5mosoi4yjqrvZq9C3iCiqAGKmKmhniSY2RUckEh18T9K8KX63RVAT3Esed97buJA",
  "key9": "3su4fgEWv4TRNB7vRo5WDUj8oygjuiCBEWwBeUTeYYm774pdCbdJKpAoV71XYuEH7FPNmLXiWj7oGDNvhuE49ixu",
  "key10": "4pWMPUGAxrHafBqtsxiAmVA9BSPjqYUmZDEiZ98fLy7AF7YHDAHTKGJpSMtm7t42pSKJCeqGG2U3UUTsJTx7pVDg",
  "key11": "2kYfgJxfgW8frNqkedAbrTjo5WUo4rZUHfUQQYDiZwPSzoRmAuDq7cSZHh37jACcaMqDWH15YjP45XvAizumMyMy",
  "key12": "5vHhzsummCrHe33b2zyHs87BLbVUqKRtVmZafxo55QV2VQR7xozi6wDaqEtkR1uwNynv346YdBpFyPUeFyoDhAcu",
  "key13": "4MMJUTZq7fqbm9xPosydaB79McqktfEcfPPbi2DSrzPreJbuaGW1BcGLWUkFELcaY8m5BsQ5okRDHYyyE93Exg6S",
  "key14": "44uUCLsNpxX7JdWhVD619aD5ska8xX6FtLfcmExrUAX6BLJhVCmdQYnWLL3WKyjq17hMrncFzXkS3XRHsv1uponz",
  "key15": "44aM1xP9SSmFu5MKiQw4e1gkSMT2TNAsoU6csZxFEsGyQffciXipK5CMT1u2BTWnBWT9ysDxUYmP37uA7Mp2fcQr",
  "key16": "2pavX2na8gibZmvPG1nkuYmEV9FKrGBbHwkzeKRe6dYzhQBb3pasfrZ3At5Ee7mx6HqoLuBdLURnL7HpqMommpRf",
  "key17": "2bZWrX1scKFzVLomj1X3KWG9uukXanw5zdYtEvHwY4dnFsi2JK9a1vavc1Nk6XomHEDhcEoMgJPgNbvKmXGL3dpj",
  "key18": "3Nu8v9KjLScu1dq8FVQ3JVamBLRwAYNx2eNcDmWvJjjg8qbRTaUjcDjFrjc1Q61C3UDozPt9vfhQC9Dsr5k7JvXN",
  "key19": "4H6bD2Q4zzonUUesmNAzShr4XpkhVw9kScbrL5ZkA5xGsPwCbpLQeumGFq9pDdDk5CQLSX41Bh8cdAJBzfm9PM62",
  "key20": "494wJH8grsQyrqGtnABNHp5QPEUZhVRo311xb5st6roVSuHsD9gMXfokSCP47isGX9hApTWeyPEjUQvroCuyZ9W7",
  "key21": "46VZoZe3c21Uwhtbr1RxxkfBHFCV6WL6NsFriQEtJT1LxzPZQaixQvxo5aNkxHd81qiP8epi4wsinyfHzPa7y7oN",
  "key22": "4w8QdQUKyj6zCjwrfVFa9aDEgCmJcwkj8P95UmyaSxMv4o8k6GdcFt6E4pbT7MPXFLKvsbAzMjMRN32dDTw6Bjek",
  "key23": "zVLDHt3egCzT9HEkiQq4zTDT4i7dCiagVRKFftxBmwEqhgLdPRDLzmoPxDXL2VynNFoKRWn14TGuH6bgSKf8LCE",
  "key24": "4oDDoo2gNuQmH3BAt5YXJsZ2gpMqUVE32K6eWwwLhLERMn6LYsGJjaChn1FzKTEzTLNoTDxeWYpFqeKGZvdhwVj1",
  "key25": "4iEZc11gJDkfSSAXssWP5rFJ5qPwYVeUsCnY5kA1CGHraRZdtGoA1tfBaiFLLm8FzsAcH2JDuTeYX7XBfFZMdFh2",
  "key26": "3NAVWgfK3NwuytVrKxtVuWWV2bjYSEzpCFcGwjV1hJ6aLziPZN23XRREYtiJ971B94haLY3Fru6tMpxqhMeRCbhU",
  "key27": "3g1Ce2jbDwKRnvEsyBs6RFbNU8C2LzhFF34RUKBBau3DjEdYPwMFwap9wNEAhu8QTbR7GWRwz7UjRcTeSmCThQmf",
  "key28": "MBDRVAaRGCJPPyXyhDPGNdscCP3XRbvRTVrrDUWNHGy2gBs6g2gR9tQKe5pCsPHPkvXdg3GYi8aTjJo4r3gPj73",
  "key29": "474r2d37PQfEo3tECV1XPVU8CdhweSADtugCmJ72sCqipsQagVMjwJjXyCXfhETqag4caDe53m3odRebu2JNAeaA",
  "key30": "5vzrso27Q6tmVxz2tDsAuUidosUp54in9uVNw6LxGmkYfzBN5vUxJD4Ax14ecz8tKGw7GR4ztcBAMh4idP1CphcK",
  "key31": "7t5d9YVhp9p5kMxTtZU481HehCYMuyuJRwQoSy4R4Q6kezs2QwNr6Vo2NQAppTzhFYGMk4skh5h6k7nYkaKTpXQ",
  "key32": "4pwFaHHrgh1W2n8vHKAFSje8Jh8aQai57PnXknQ5UYSdxJZ5y1UUzgq8gL6kPFbihijWi6b14m3oVAZ7mDtRYuaW",
  "key33": "4qfhyguP5Dj8QnstrXVxqJXvPcb2SoADpj6qHALTcmSeWw5FaXdHh8LrTVDvKMefjqRVqGd7h5RUGbJadv7HjbnX",
  "key34": "4Zz4vfATkuCAXGjSLzMJkSCdhx8VhSkU4pdveqCA3GVZfBnvTaKSghbTQ7Y3Ncji2ZLjHPr82rJdFpRSWVLPiRWJ",
  "key35": "21gi81XSVYUYXSrYpE27NxCM5szc64S1VmJJJ5kN6C4dRsGCqA4yU4gq5W5Q2h4nh3tQpzcjYVxJMJEAFebDm95h",
  "key36": "2jwXUnq3iUwB63RQJQ1vehb3MLPnoPqHVxLtgJ2Ah1QduhKEXcFRtBv3Xbp72y9oUwQJuNkb9qEmHSx3AqBp6oXm",
  "key37": "38qchcEsvYerZjCd3XZX8m7uakKe4oDzKkFzTc7bRGC4fp7wcj4742uieKznvvd7W4Jpr1ByaJCVEE2mRzkCmUbN",
  "key38": "45isHUL7mh39VExBaZBRFiUvRjmi14USCevA8UutfBisrjdsqQYXcbrWtA77evH2AAZoK8ELMfNvSM3BigXTZPyr",
  "key39": "rE8TDmf18k6gTrtj4ksuUDeXH8Dt8WtumMZpKNMFU53mCSfmvW4oibB28cf1b88M2DtC4JsFZiFJuXKfup7WZ7s",
  "key40": "6R9QakNY8fiJRfj4Cbptt8U9KAeD1zo6Ceg9zofF9hGKRZp7z2KvMV6DRHDxYuwX5iZU1DU1qwDxKv9BXSs4ioB",
  "key41": "9eZyYzYqPyXeWiXeqSKcF5VPZkNsirYUp2mJ6WV2RGvFiCnGB3ifWu1aXiNFvtz2TyUqnwAWne7XJV4agMTY61T",
  "key42": "tvLDyFFxusRttAVNxZ9xFScuWgqcijysLxUQVsy9Y6Az9RP5U5UMpGaVyQtgeYAXwF6kzGjYLvwrgHf9JbQkFWJ",
  "key43": "3ig3vAU1osu1CqLY2f6iCxG3auzmEeteKXoLZ7e2BpfedQPKuQvsCQS9xmmsaCMyWDvqNr3RVqVBLnTqJvHqP9oq",
  "key44": "2VncrWm1Qr7bWrPLsbjDWpGrceK24fEU5BbzG8mXGZapg4nFx2RfPPGdZF3eTaSEEid2oHaWNfwhMNMhNU78vZge",
  "key45": "5wQM7jTB2Y85yhCX6HPVtQDsmXXGp8mLVV19xQckJs2pi9REDjc2k45NMR9eQTdtLEascb6cwb3bogmKEitr73ab"
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
