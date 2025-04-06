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
    "rt89ssb2ZEKgGW4iwpN9SndQUBwPwDF5vBnhWnqZEhS1uiJyhkvNBj3yDyLHj3t2euSgAU7hZRTPKbkUZZgmdzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbhv6WyLQFsQR7kBt93iZkmpAnXZkZKviYa9Rmryz24kCaaRuwXDMiAUJmdVyRLSn67cypspcnxkZz4kmrPbyGp",
  "key1": "2VU2eTSrf1k6UgeiCjDY1VNxH1RC96nAZYHRftufpxg3FQxMxUV2vcwxTyjaMEXarx3vxasDqMsmFH7tezC3mtpp",
  "key2": "5HXsBxv8zdyTj2HpgoZorcdDUJoJx54ytcAebMaUiAHtXBAwj9AKdTmr8ighzKJzUF1attHWXxtvXLwqsvfwg47m",
  "key3": "4T5nVAweG4NRzW62gha5wcWqH5UkhXokvYfq9ckbZEvFDad47tsYHSYsvkwJpYcNq2XWbhkdHRmZt9BnFdJ2z6tC",
  "key4": "5fhyucX8Nsd9mjUt1wwAZLTnVQBh7pLtc7T9AQiVf5FFzaEV3vHsN9B3jqLnR3E9Wcztc8fftFNFoqBU9UPeMFXz",
  "key5": "5REFMvpkk1GLPbcSYQLi39zKGA5eg77KSnadjyxMDN8UCNhx7z1n6uDUvTVXEdpPc9mQr7Avu85V2Xezw4p112wA",
  "key6": "3CyGtxRy33KrSemZB9HYyNdFDjCjLjSSRqALeWXUEoqFhpNduVW7f5G8vHJ1jdn4BoXoWWCxRc6rNcXureB11zbr",
  "key7": "cvkLyyEodTsogw5VRe4uMiVbHCBsqtJDp618Dojp5Bkoo5xLT8c7VjaynCRzjTwDYsgjAH3Me6UFrkdhxxiiSzr",
  "key8": "4rmLJyiLC1ikJDxnGuYHzAu6QbhWnu8PQTU7XL22vtP64xgVveSbjiRR4E9mSErVcVHENZtfLvxmZNKqrDSHkjBP",
  "key9": "45b6269BU5TKtn5t61L5BTVD9MREfK1vtYmFBAWRUksz3NXD1B4vxAwXSkPB23QCcxz7RYUcPFSBCLXvc1dWzQsv",
  "key10": "54XEf5eEtaMrJE3K7JPiRGWP1sUUosrJ6BQyy91FysyTR2yppDJ9JzXmb55czMmZT5ny9G6yrsR5vN1t3joCSbFf",
  "key11": "3xicpGPcATxvSGmn5DRF3NUD2VWECqiJWtdXVBGM3Cqx7pFZ3ZXs5bXZ7xkyAMxtMT28uAdbjvbJwv6dPn6o6R6F",
  "key12": "5qxUsAQqkL9Zzhj3tMSpLyPaxCz7APsFi46xcruB4NhKifqe7EiVYpFEkoej7vywDkieQdwPZNN25aQtSKj1yrh",
  "key13": "ZgGMnBVW4qH3b6QUcsMBXMrbhdj5fkcQPmFAZBLX4KQbm6TgKSX7CXogDH3V13ycFr6ZZ4wPF4G7mrCr4vFLAu8",
  "key14": "43JzhnsLavBwwqdyRLDttht5AE2TD4ZkDj8W4L4wCQamou2Zw2YMTpnqtHDcDVjSHbz91LEX46DnctnEKRmD2NkL",
  "key15": "3kDi6r396oWqikyRdZ3GPNLiS6kryGUou8fJhHioFUH8tG1PVAB6NuV67E8Ao528GmgLYBEstjy5gwERuQDMri52",
  "key16": "5teVdqYk4X5ReyG8iALQZEZqEmQZmsj2Ri7oRFVG3XyrwdfAPU5iSpcCz8qSqbq1rTDPhGcuoRRUjhYHbjJ61qcX",
  "key17": "uZgozFeUNK1mpkxsnqxte6GPztxFFSwdEYgUUJ4GvdvT2BAt9iAWYJ6oPgid8qrbyAB6hNGQbwp1DHpFgBtPCSX",
  "key18": "5SToxDLyvBtaXyt2qkpY7wDuNQWDei4w4ZTsuLEcwd4AsnfBqkAjodiWzzRKq74DzGGt8eCJYDZfMrPLRRetkpeh",
  "key19": "3zFYuDQPcWn7ofHE7a9x3EVQuVs8uoQ6JmRZRX3YabPe1mxof8HH5GiSY1gvXx5QnCuS8MAUXqQr9hPkipXq6EtZ",
  "key20": "4QdkssgugzDYPZqeTBn7EgZJP6XhtzjUc7KRVQDgBujbfoC4fYt3HUd8hjEF9ipFzQ6Moko4pbCYsTAoF2WwfF4Y",
  "key21": "2EE8rsYhx9yvG2LRehuPVsGvwEmYH9hfc3rWxNwTxDaKcRTJy7DkrouoJCm5zw4tyqWFFUSxrfgHh7vpBZcx5PFJ",
  "key22": "FPUhYrHoscJKcyzdVCd9WpzDawPbsRSpZTGs16ut4ZUgpWQUAUmUYmZVZU19zs9YCwYZ77y7b6bKisVywJA4q7N",
  "key23": "62D6zZam2MCJTpbhNSm8mpSK9JPFUK9g44CPLxgxsqHoYFLMCWga9uAnUJxMLNd2oNosnACf8SCBWLqcpCbxCVA2",
  "key24": "5fj77SKAGkGe6yAtosHscRB5uUR3AbZx8XDEBkXif4q1dNyQyaE96EftsZee1qC6Du3tayiJr7cp6KsfKBhoTbtd",
  "key25": "7hnSrPQMCdVvyidJVGmBRzuVSjsASKiQ8b5K58dC5oCxy1MuF1KbD8MkJNuSHqeCT6fb13bAbohG637WQTSZyDM",
  "key26": "2uoWh98p1vczQc9qCu1xKhoaUpsaVAHPiZC6dY8gBwqztLptNX8JxweGhiqMzCPmrsczzTaHNxH6bfqws279bPjX",
  "key27": "3Qi3JmY9pQErNXiUzjiY6Y3tTQhh5SjDdZwaLfsCxpRetXFyZyM8Rpz99S4Bbc1dbM5PdfkxPqRAx4eMdkKdGhEG",
  "key28": "8rJhomhT1CpRJe287DG9aZJ2KPzHU5FioSGYhwYZfX5962ZG5XqhmRa7issCnCHj5cxSeUgTnEKFxY5X7N1WkCF",
  "key29": "2PwvQr8FaCi3EgRD46aDcqvG7rUC7BKHcG15qQNBk3SWr5yoE739LmS8dCrkz9HAuHtYWpZSGtAKNa9rCEa9E5V5",
  "key30": "3VrKXYWBHwC6Vvo7e5YWET9kN3KTLc6RuFEBHLXgGwEuUjwSqh4NVrDNt1kcgDzZ5D6PczCfLFizHc2mYy6R4Ukz",
  "key31": "4FPiHZto51eePzWbeVZ2FmHK52pmvcugkP3aq6dSgwd7YQXwsLncwokb9CQ4HqSBLJxprkQLaGMMjvmmoGsWZr7F",
  "key32": "524Ydq9cGxuHesYc3UMyLwfTJuiVwMxi5m7KJ1FXAEn9zNUeo11M1Qjg7b9VwsoMGjbVX35vpXpJP5jX9MJbXUqr",
  "key33": "3ZWWs4dNzLEdd6poQDxMQYdQYAAZbTuqta754fpeUp3axwpVr4GrM8w5CVggjQBchv2ZkF6zfWpNCnf6VJYBuX2y",
  "key34": "4SY4485FuwwW1NbrDVpB2jHzWAXi97Lx1PpdqHLqD5bkgaVuA3S7LpkC2nGLYvLQb8RPcQ2YXY7hmzFK6UXUgwyH",
  "key35": "2cdRYDWYmuiXitZbASoJo5b3Bmuhz7sSa9fiVJZrPipKhwce88zjksMmpJhVTUFSEALNrahEXaeS3XEn8bcWTaW6",
  "key36": "ijGiXP6bwjddeTMwnptgZrUsiJkVPTVCALMw2WRCF2Dy69ih6iVLj32JatxGCoLVAPH3EX9GXSnBKwkKjbsP1ND",
  "key37": "GMqQEf22HDRn6koqTLP7GLFQFR1Yh49EZdqHrboQAkooU52o6v4EfkXv4tHkWKJd7kCj4qv4tB9ysLWoUtHijLD",
  "key38": "qNW43JC4eDnFNdNoUSQjuieBRcGuv36jw8kfz4PU6KwCfaAYf6WKYn2g6PSji7ktf4iX6RMLgSSi8xuMrtjVdan",
  "key39": "5XvccaDLqvc8Rju6VtDmWfVhrnUzSYgGgivsFBwK4qNkVjmPGXPL3Jow5ZkrXcoexNGft3EhKw6XuGFGpfhEvtsa",
  "key40": "2hAhTJX1AWAQyuKj3RsS3MRafmAotbDB9zHh9WH94XjJGJAny4WmgZ1JEQynACrTBZAY6qq8N2kgyrpseks7kJNo",
  "key41": "2b179rHUHubtgpBJS9ZwrCDnUvi1pQEmq766bNYzSFryyHJVBuvtCyYvM44hkByEPoZSNetv9gsamcpeZLgc2kFg",
  "key42": "2iY5dffeZtgCMWa2mHVDSDkUdsmdRmyrbEjSsLEAsrA92BEw6XZsRqXT8Yom56ruhjQVtMHe66k3jvmNDTSfQqVJ",
  "key43": "57UMrcZwEnTG66WgVAdC8CqdqtE34qiEuhxFYtiwtjM6vw47tBGaerMvg39kvHixpXMukYB28BT5VDTD9bDWarGw",
  "key44": "e5ptaeaduGrfjpcR63mZr4fHAaEafCWw4AaQx3yjMSQT3RjYYu9Bg5puhMQ5VJruSJbTEkmGoYJycuLTQqkCBic",
  "key45": "4EwD23sifcvvvFZRzzX65PCH9LQ7HpxNb5AFEh7Wdw88JUPM8BGXhBtoZ9UMThSxc9M1xgxxpthVKoJjBAZrjxMN",
  "key46": "3RpRHd9DwEWPDx57b8prrRxCT1Z4G1WfM2xv3YHd1Quh4SVx9x5Ccbe2ZEkChU7XmWyuGbeLzy85YPqjeLKPZV56",
  "key47": "314rmDbrcB4BnpyUnVfHWndvwhFGp2itH8CrKmVPWMxTPRi43UKpJiftjQTadABrwAuAqvfyjWGjJkM1mqva2Vsg",
  "key48": "ZycxbzwMhCMyMTJFbqheiUjn1LeoADEqMtLnAbCG9jfKJyXcDtLdV6srpDwyfDnu11bvb7sgB57EUbuTsFD18pK",
  "key49": "3NiR1mCCobJQSuCSYadGohiLLdtcRJ9btb5ssZYHwkeMKYac7KYPf8S18KAUgRzW1DXNPi8dUuBMkqWWFXxDJYQa"
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
