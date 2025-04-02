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
    "URguSZLYQgJLtgoszNAgXhcNSxGe9xvYjop2toXWmXwz4iMxF9qzt2uJ2EjNc1EXudRyyoGCieVUTB4B181CcEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Wz1UXJjnq37nGchEjMnQhn5dyh6hKVRfxWqGaiCDXTi4Nb9L43124bzPDzHaZNnCTfURssAhK6sxTzT8YbY2Ja",
  "key1": "3tFzV8nn3Dez55YwQxb7J6KVsVsrh1YjY58x3hP5z4iJmxRtpJGb664AirmPTGnNrum79rt2N5bVrDqnVZbV3EUH",
  "key2": "3JvEGt3utFByYhuBN1NbPKpwugf1k5iNuThudtr7z9wT9SZjfKFwage5FmAi3xLkRG7jKQ5bdbf9ouxNeigP2N2Z",
  "key3": "2wUxMbBtz9NVi17tz49uu3AwWkfi2n3wNLqeksFmSadZZWczbTybsag3Gg7piTgoGQz6iQ1U9bxD8CKo1d2dgoGS",
  "key4": "2exGpfMsGGJ8CzDFARu9SuhUsX39piy2cPPkPQS1JuFUsx59jWWCrPaU2A8cdpQVug2EvyxogVqNsEnW6X83nHKi",
  "key5": "2h9iADZRtWJPfNnJdBkoV21QTVvTjXda3f3PwfeizKTEtLSumpfezVGxHA6QhesvJ5rKSrpixdixvvcMD8m5V8J1",
  "key6": "pVXknNS3iRndnaue6oESpfuBGcJRw2cDR87PNxyzaPHpT2X58Q6zqoXYwhgLY8bomEe55EfgN11i4dkipQtUj8M",
  "key7": "4TSDjHWUKx4QSJpdGoSzvmLTsDqFbLmqTB1MBtc6kq26jvRsr7Nw4qepG4r1fmGVfykTrmdiJg4NNRuXjcqZHNzE",
  "key8": "5ZnJ2KY8KNhJHh2EzpstVLTrwbsnDmzcoHtdAgk2FzG3L7tGRcHPGWEfoMAVLhvcgQCbBEvqpvYhoE75fKmP7LL8",
  "key9": "2r6Hc32R6NaUTboBPYajBV8dbnoqkifsVhaA9bZL1z8aVGonvSagruVr4VYXx4HcKAsVZ2gsAnDgQcA9yLHnyYKZ",
  "key10": "2ZT4RBoYBLMQ88nBKsYNEg1gC79P7hJAm6f2oRVZsCqx5sPUSawXerGTCp742TGyhWk1RR3AVJbhPdLAtGj8avB7",
  "key11": "38mS5GCSoZoHvpRLAsttihH4euQpsptvr1AXYvC5XNcfwdjpf8EafpbHfAetRgBXYKQYTg43gtfoSwkXTwu3jreF",
  "key12": "3avgE9Yc2YjSdquhHwnLAgLEneC2JGgrHrWmejHYVd7CjgJEHpS9axycpqQgm54vp27fy4a91gbAofBtzgMGDeiL",
  "key13": "4x8aiQrXqwwrTJET3ftJReHfXDcL46XNfbS7wSWXjSZyMr1Gm4sAH99SgqZ9eFW5sHfw8z7f4i5KsCgaeAYSPXE8",
  "key14": "5srKsf3gJioU4Bz9vfSqhqDujLCBVQzcAZkqstWSwmLsmxEF76k9vjgSYoGp7sycA9BvddXA4pn83bh2fevMwVaL",
  "key15": "jJvSCtrebp7xcZNa75m6raSQ7CiZ1y7N3ZVSd8NUAk2uaqTSsVVFtP8TGa2TquHTcmEj59dA6Lx5wxESxdRyKaE",
  "key16": "5aomhVbfjqisz8ApWqpkX19Db33XYjSNXA4DJtzcpyzDne4ehMJYrHnn1eQmyh61qQSJURYqCCoL2yUZnhBqaiUy",
  "key17": "4vNFPTubVZRAyRxJo1E5utXJPX6Y7VGkssGCfqTb8rt4DCoJ917Tsh8mq5SKAhZ6XKRBpUyCLvoHNbDRTmvfPA9Z",
  "key18": "49G4RTnbs4iHFnSLT3fVjFkRK3V7cUMHJSBPgkkJtMT9aqLYhFuCWmUfVd4pikMv2UhVYC6ix2SN4gcpR8UeRQ73",
  "key19": "2HbroHHeSMFRVx6QXZLrh3CM3Cywm1eQuxodWHgMB8Tn4CFU5JN8JU3bFdsxhFEGkAErGvD4XUMhWqRgLS32VkNs",
  "key20": "5xicJuYtERXKzwiYfKkfSqGd5MmfafUrxHMMAfaxpC7MtKQYkiDxvhbFwLbFk5v2svko1YgLiWWKq9cWA4mTK36o",
  "key21": "4ES6yhXGWfdcgemwgt2xCa3QiNhSrx1Et785iy4cYxRqBMKGrEpkgxffQvdbsW5StZ6Tr1B4gu2G8ofZuyMuyLEj",
  "key22": "4WA47GXFHxQq7teWHxgENUmAiWmMaCNU2t9JRRoKDmUHVho2MkSzxS3XW7pezrpckerKiH8EmsTezLHJNhjqKCL3",
  "key23": "5egQYvePb4zenkV6eXEcSiMPSTqcPDSE3AE2bEWbG5jHnHnNhtVR76GUHW9YZjSJGn5M4KYqntMp2KQMoXuzfjLb",
  "key24": "DHRcYK2kfRW2inp65jdBJCY9vPSy8dKb5p1h8xH1NzEMwBDgke4wzQtuntHQeeo3AXWbeWvd919kQcf5tt8Mjin",
  "key25": "4N3pYDv22cXcMqvGJExGhe7jga22BUGFF4sFR1r92gKkurqXw5Qh1QECXabG1gEjsekmo4Tk9fPRHKn6jYXfivHL",
  "key26": "3LGyujaRxrWpMuGiZctZHM1PaG5R4W65SZiM5KuL1BevtvorHEHo6wCiB7bYCzZskFhQsgSm8FqrEXKcbWQKGTv",
  "key27": "b4N7tuMSvKs8Uc4pa7dKdKGcdKizS5j4UZay8wTHjhbLejz53HhrXqGsdbmogB3MxVo3jZbRNXDhwBd7kC7XfNW",
  "key28": "2wGrpFszdYZVYA5frDbkDyzsiHNnTPwyuZbWL7SCFuZkc7KWuNvdSKKrmxiB8aBrqjsS1p7cv9pnNqk8sWdje5gt",
  "key29": "3bXuzhtpHBjZvFyKcKayv2FRtvMCTVMRyNMLz6QrvaXVYxnPh31yyWfgzpyvVJDXxemDL5oc7H9Wt86NC1xsXPUk",
  "key30": "2VAzGbQ43JsCKJTLdvDpG8HMQLV9Cdw2yprik2iNAyJa6TmJEcuZvCWJQ9rgFDik7cXJGeauHs9NtgvSTwyVQwYZ",
  "key31": "2f9QZt3XTxjPFoMzfBsviC2jaAafvpbG1KiDu2Wjx7twyvfaCFwyMvAPr9NZ1fhKc8wfNAJexdNkU8EmxHzk7DWV",
  "key32": "3MSdeNJsk4zGyDoYNEkwg2TpTVasGXSXzmUdrHwbY1KDyXToMWVji9319RNFwDUu2hhRNM2bdyv96mePZoEbn4XX",
  "key33": "4oHWT6A9CXedbwVdqFJw16KcgXMgVsXFpt6KesagS88YoRssa8Q7XhUPDATW35hrvNe2RAgAdcPNJ6YGfJWDSFke",
  "key34": "4CYV2ZeBWBbNfXsUFRf1MhmGGS15gg963LVqdr9HMdVQxg4yAAFqVH9WuruoVVENkQBSHBcVyqgXdEGwXLHo7Xia",
  "key35": "H6CeQgeKZHRePyWbi5yfUoD6tVsQETEsyKEnChUkQHr8d87EEjg4hsnqYJd9nSuziuA9Aq9119ZSbjVa48zY49h",
  "key36": "4w46fALZTMFbXMZaQr5nKcpF9HB87FrT2rNYbf6BaYY1SwBz3MewJ4NnaXZZj8EwK7oiV7w9iP6NCEVTxYvs3FYi",
  "key37": "3eyU455P7vHw5tapfmy35n7YhLXQWrnFrwR6Q2Dr2Zh1uxw46E8wCv3rJUMrPw3Ro1CKvcYo3kdvJp7RMbVYUhhE",
  "key38": "5cmhv8izAvohGqTcgGtJpC7vQQT19mGcUMxCb9JtB9aVUMb9KFLpmy59qez4DDXe5kctDd5QNrLWYS7vu8MJ1mbv",
  "key39": "49EptBdBXeKzJfq6z4tBF5k8KGTcBRjYKh8k8EXU6nKHJoSTWVHVHmqgxwBvnZAeXAJyTXHT1yhsa1Nxud6PGsK9",
  "key40": "3vBoTHsn8wMSQQ7WuSFjtXAHFEUmu7SwPpHuEEXPaN8isoYTcqLgG7VnHx1cVZY5nJhse6C9MBh3n6BwKu3dR84M",
  "key41": "4H3MSdQTyRjXgwQK3EFXRstYzdeAu38HiaAQRo873A1MhBh8ogCJCq4gKRh54TrbLWXzNr8yQUmM8pVScNUg9GzS",
  "key42": "5YTSWsu3YTh1VGCbchonE79bqwNGZRhKEfzWioUdmyZoqeRvrGCe4Afj2v34twE8t1Csi6uNm6fJA9vQo6YreVEw",
  "key43": "4mvWxhoe9WWUcvccfjKbU4EuoiCy5sP5m83bWXVBvGN7WgsHxKhGCm3ULJSe7GS1K2vpJF8eHKSv9VKrKc45pfzE",
  "key44": "48CiXems683hrVLyo1sQvWhQqhAfZjcCm5suxi4EirP97DC3SH8dRR5qmJFGivtBJqM1avEjnXmtBauEFSazY1VE"
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
