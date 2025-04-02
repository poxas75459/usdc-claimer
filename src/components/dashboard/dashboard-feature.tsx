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
    "299Bj7keZ1nkSPa39d5M7Vdhmje4xJL9hRmRn4jgnKz6f1wPs6ByAWqdyvgA3R1Gr6Su4DLYS53WHWLgnrsJqMu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3isKSRcckZcS5MwUAXuLfeih7i2QkhJpwaa9ivp4UJ6ZJc9VPbSk8sFc1UJwJmdxRwaRqr1NM6sbE822xXGUH4JS",
  "key1": "3pgvmv7DC8HC6vN7jjmTRpY8gXyPn1QoFAGhjoJNfgxMZpQF4Yn9CM7tpNDoD4JXrVLWrAPuCRjEYcyNCmZf2wt5",
  "key2": "4gARnaAPHUT5AJ41pCXUh3pwBMq6h3wsw2pHFbosdoGWM9uuFqLC2x58nkdsonDxYynfqv1N4ByyykfcaA1iyTTx",
  "key3": "24pMMRpCizNi1AdQV9UqcSpQXqtpdCeHsNFYP5HMykWyKqzZsCfNRnCqvhQHwySyaM5DhPB4Bi3ZFtxUjvqpfukY",
  "key4": "4kWJub63LEMjSmCQWBxmyMQjkp59brzPVGeVRJFeJdgkxPjT1H2515FK1TxwveGYQWqXkKKTXxxggny6wKmte44G",
  "key5": "5HWJcQwvMSUHQmGSmkq3nGc6jh9yj3Wnr6nA5nCaPJnGEqXeoCt9ji8Ec2esdyTJrSYwSqFRh6bNsmv5Ru8fDHtX",
  "key6": "2A4bt1RGv5fq4bv8Jihe21Y5KziDkuSFYRaaoDdpb41xDGv6no5K9rq7croJHc2Ja8BrNa6GGNpALeQUvwpduChC",
  "key7": "4gHp8sPEn3e167BWmwtdg1KFud8ozCLjeN3SBh7Q5rh6PafF8amFTMVTkK99EAgMFiwpmoBBvPqzEpHq8LikUtpa",
  "key8": "3Y17qovB3dCjUmNC4EJ6nDUTFVDaN32WamddJnAdaz8MbXhXzKBCK9hVPu8N2jJKTUfrwswVHYzSW8o6AChEFaRK",
  "key9": "41QKHJPrHaa7PzjZFckRDkQcbcx38VhEyAG5iCCGtn5gQeTSvazDkEUrAJXgPo5sWKJeqSSFEvh8FrrhL8epwWCj",
  "key10": "54pBzkqeromRpw12KP4eoqzqR9inupW5FK7kzpGbRirF9SThiguphAnDsAUSDwEq21kpcrTJZovJtVgyLknbZJDf",
  "key11": "5PkSaz2Wsm8tKrjmBAmo3Xviip9wKeBLLjLGWWkAQUER3y2qYvUWAEMwr4CGa3rreZCw6W8bxVN1TRVXyvdjk4qk",
  "key12": "ov8AE7VuEh8L7TbCsGcJhLdaNoJ9jEJjrJc1VWNEdLYWiGyCguyEPfBhWSURp91rUGN3XxfSA1KYVciPrCkSGYs",
  "key13": "41v6UkbMC2gAHSjyetEbnusJdWUgx6m4JkF9JHScL3eSuxSwKFGVeyQqxBBwA3mFuWo7FVtJQJ6Yua1ep7XRuXdW",
  "key14": "4Duzkva9KdA1aisDoLqWC9aBdQSPG5J4mfA8yCY7jrX9yduDBu8Fr4HjoNpLios7JLo3N6MDH7oAgPbjnQNiewYP",
  "key15": "5XgirHCPtKbokHsGZ7ESgAkkmQa6H5QvcdCK7L4fHUDeiGFudpShoTb2LCJHe6DyzvjH44oMeBcFGnUM7oU8MuQM",
  "key16": "FYCs56bCptpEXBGmAjm9pKa9FXf8VPWkRGd4pHFi9wmgwTMfuXvjqvrTktLzDQghbuZbjdwUXATSCNF9PWyP7Dz",
  "key17": "rVjrxC2zL61VWqMVTvQPznB1eWQokxvJEJEvs5X6UVzqyCeyMJA1eGt3kXPDR4aRg6kjcJjCxeA2J6xzkk394q6",
  "key18": "2o11p5yTxZy2HMRSJHPT4134U35uAx9hnvcVtqznkUWcxfwBcWwPaJJPuh252NCi3A1KgL6ByVZ94Bbm1ifBAvi",
  "key19": "2Km5xSDCfmHmzreGP9Lujg8eWTGLmdVATVT2yhoZf8Ca5ytQifNtEZ78k2KPozNVj1MS4rctK6fUYHnt2zTtvf38",
  "key20": "5FdY9quju3xtW53LFyaciMxtcAie2EFTchTFCHpTdVYU5nuy7hVKVQrS6yVka4ALNbWgjBcR3ga8wrjrZt314dSp",
  "key21": "2etuEmXrymx7QA9JDixY5WDeeTJu4JEPcKNcE6RPLZaAz5Tc7RzAervejWmMcEdVuaHGuQodc3KsicEPeY8oaAGj",
  "key22": "5MtaEQaRrGcapACkjTBiZnc7h5jcKxUhZWYtboFnKGW2jpJUKCFiLyn8WEhQYwzHKuP6ihmm2K3sLcJokx7s51we",
  "key23": "2U7zH536i5T9igNSjtBwvHdZnpLHoHvABWdDLcsDAbhDYcXheixdz4WGkmedxnr3qN9RxoRv4ywAE2kodSHaT12C",
  "key24": "53yeVNec9sUkZgXGoAAPAsYxFHs6jrHNWdm7mTFUMXN3Qi8pDUXsx4kExz5nRoWp2iCV3EMvdBTDzzsr4r4v2yie",
  "key25": "4yADAUJiTU8YgeCJjocqV7aJxQ4rB4YeXmnF1Tmsq1jfVDCQTQ45sqRfAYopcEtsL89QjS32Eb3JhKtehFt73rBT",
  "key26": "Vp5ZXJxT9RhbJbEmHcGZY6qZ1G78LyjZvGW4FjAQdRTPQTn3hrckPUayHxsmTVgE2iYD9pVDxwZqMmdKiKqFzda",
  "key27": "22n4EtJzdgh2VcnbdzRsys1qN2NAsCyxjk9FoNv7RQR4oCyvT1xt8oKTa5Aai8Db7QnQrh6gGAyaa2CKA4oKAkoy",
  "key28": "3vkvhJRKprs7LBVzAXdB388Rw6yK9DBvoc951LWkcZpqJdmx1CHRzYCAA3E8ny8VEcEU7XSKfiXftmFmhdT2xAty",
  "key29": "62BhZKqYU7CiiGMpwzLeve4oRe5sLH1EBhoFcJu21yGpHy2DL3U9yy73cyZtfUWnE5uudnWtRcVcjavp7aKoCThS",
  "key30": "5AeAnNqQDqxDFje2it68yubPX8G9ZknUNJngiZgAH6FMB9JGF8teMQZe6EgoLjMp1tWYL2gyR31ZhBuqRsKJ97sr",
  "key31": "33Nmc8XfsSPCr6MJSHiU18sEf1mva2k2J8Geo7JXHTS5vQYdCxK2XX8V8RQxwRQx7yAkPkuKfAvaZRrb1iau2arB",
  "key32": "5BW4Jrx3Wvc2b4wMjJYGcLpgYaAWgLyHcQP3eF1tvoftUVx85Ekz9tC8bHy1MBuBMfBt7T3Z259kzuMQduQDrymM",
  "key33": "5dgLkz5VZQUro4MNUUpNRtqSddXwCvEDt8n6c4ccCdTvq292TFhw2ahBrZWwYvzRGd5iL81ktUqie4hszf9SWLeb",
  "key34": "3htSbPTvhCHdw47witri1vvVT2DQQBvc4GWXYKL36jdwg6dwFRbLUY6i6ESjio7gjxatuofSJx2fVggXfN23rAeJ",
  "key35": "3wWspNEEjjnvbhihc17Xx2PoSXSZxr528ggo8oMCGQ2iX79MoU4i421sWRGRtPrxBbyY4r1bxosMezxEpcfFni1P",
  "key36": "4AvBdwqmnKEmAGvcEJuhM22oqTmJKTrBPxE6jpuUvH9t2mUeqw42knfNxFsX1F5AW8QCJJ35p4WaWj5Vb4DYkyZ1",
  "key37": "66FGCN62oDNM61DwoNK6sSUPQ9R1Eby2yFkDLGbswfXXFUnHGMieRi71CNrRojNu7o6D6wuukGH9tfqMgN6iyZXP",
  "key38": "MsRBvEsa3CGbd1E5PFA2rWRQLNbtUqX4eqDCJRcSzL7RM2f35zZiATWKXqVfbgAZreo5gLwxD4utmEpnF8tTRwc",
  "key39": "255VmUv8yqA53PaS5P4ymyYkocVFXEGWYi9BzzhxWazSk845sDwnmpta41NCNDi36fnULZkn5ZxQeLy7ptnebHJG",
  "key40": "5z9UbuvQzoYsSAwnTf6Z9x4yTnPn3jTB7hsvXzPhULBuafGRt4nYkYHLYAxDLVDPeCDQ4Zcr96yS45oXB2EjzRZw",
  "key41": "4mvJmWjFAGrMGXngyFd3gC8B8wY1DA3CyQgFLGbqK1eAhLBt1kp9wk5Cw1xGqHdWWDzCPCBVh1RptTnY4tKWxKrM",
  "key42": "26EQFUh4XTL4d5cBn5V9JEbbKijEGL6XzP1wTi8GyrTj2PnZ7BVUyBx39QVHPLZk3AuG49NCXaJiPAR234HbLN8n",
  "key43": "2TbtaT3q6skS6YkuiQQGd12NRHCCWuR3hww529aYWwoqkKbufbEk9QZ42RNHet3tEnzwVvrXWdS9k5J854kPHL3G",
  "key44": "EB1vJRwMjzyn26qXcCJPaGuVk5tNuSEHnwbKqPcpWf47e3E2eTSbFjy7hj1ZGiZGiE2ZmeCjueninJQnrL4Eop4",
  "key45": "4URtigjQwEvHGnZVs1CFJw2iNJPCCsNhjLDSTiESCv6rUU9HTvzzcLiY4D79Y1vn1tRMRMSedcpr3eW32DwH499m"
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
