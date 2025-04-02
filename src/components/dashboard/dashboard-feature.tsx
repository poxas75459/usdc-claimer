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
    "38sPdxhcAqPxYZoNEspbQoExJc1Qp9VQc3BLd1wEK9BHyYyiXcpd4JTnVxfS5iNJRn6isEdoM77JtNF56XV5dmex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjAqhqtWQyoxX9zbAsxPSDtmfktLv4pAt6y3YPE37utL4JvEToC9GSbvn31XwMt8aDiNS33AG6RaHhfxXNyKjob",
  "key1": "3Lrszr4kaQzhPPQW5pY25JsZgiah8RZsKvjpwwZ3hBNGQrFhAJFvHmdGf1kZFhSYH7hSqy18AiaoGGRr226DB1Ms",
  "key2": "53HsaNT12gCdZsT59jCVoTobdCkpbNPzkYmwQZGMGdJxJSLSaXu1dnHEFTRaGP6Hm2yLbrJ8LChXkkgcKwrSfZQe",
  "key3": "34UYMd1d3WxiWmNgpFknKuhE2QMvgf8pEENZzAr7iKcP9UZHAo63jkEtXXyn9tbgzfg98bMBSPiwAxbxJJESJwZc",
  "key4": "3EdgwAEn2La6YYV1BeCUB9Q6SbojqstcxuvXdJmtJbsF2HtDaKhdMYiuMZGQMcWeKDqSPM8Tmw9WFgT7Tyfnk8jZ",
  "key5": "2ejdY1LepwBY2pyzN1jfpsifW38unvChDZR9iV4sthu2j526LjCJMxhgCujoDDeVm45q7A9MZjKuUaps7xAQLc7r",
  "key6": "2SdzfF7LrwnjvySzoEaEvBuwkQo7WHR3tqLL4Ebt7Ff1TvermmW8DJsTFGJhG5TiH242o38kTk3y6p8o9icFB2b2",
  "key7": "E452qvDvLEpTpgTSShU84WVMqGEYSFsoeP2PvDvhAbc1HBgtYEhuysW5iQrQMC5qH7uW2Ph49YwpvjoULusKqtF",
  "key8": "4Unyx59F1rn6fKFGq9wt4vdXrGSvctFZkjgGqLHKnD23xbrGMFvMtqfiQrM3Zcgh89SYKdPaagEcFHscArfittaA",
  "key9": "5NuJZb6YGQ39hzCfiDNSdDaW9FupGLcbmvkGLexE9sstRCCXkKyLMhAmioTufUgfi821qKoM5GKJo6umpNTvCt43",
  "key10": "4EsHMGh1kVD3dhVh3n7ZixxCfrM6KPLTFt7YG1fc1XpWLsPaVYPN1Zr7dx5pum3fLRw1qr4AWrgbttRkF1sAfePN",
  "key11": "2d3PVHajyBV9r6WwFqHbuzvbuJpdbRAVEZXcMG2F328nwoFgt9Uua31B9bRSiV3rnBbRPg9oKLJ4nLYKriaxzM3M",
  "key12": "2UnndsSDCT9CkKJX9xwDpS2131qu58Y8jT4RVcbVUuBqANHNXazmfKa7HuPuHPvDhEBLK8CMALL9emX7gkVgHHHs",
  "key13": "Z8GNTwfJ8XxA5UxuVhvWmTpPESTKzQhfkVbsgQ1XPDHPFXBDQiV8BdHd3N5qEimextjAUPFH4feeU5wjWqteW2K",
  "key14": "4H3a1guYPCgpFvu36wcRW6RqpniDep1BgjddScd871W7rXd6bNqnpA2qUTQdfV8RNxdypZcqVEg1qbuMXrL5rtkL",
  "key15": "3kCoTsvmRDBWHpUaTFXSBnyHF5KN7eny4ac8MtN2mxs68K7TXq7xD2FdebkMqeLzz9Gpsdzf9546M8etqhGzN6xS",
  "key16": "3v6gErWu2HSNF2Xj5SdtRUvepZaPuyDti46S7KTWdj5esHFWWjftAkv2TXPCLbFDjEafGr7LNLWCMSkyZT5qepeR",
  "key17": "5MRmkQhQsPevYzz1n32yKqriiG4Qk8JjXcTaXAavaQMREh6uYrve5PZX4xiG7WWr1rK4aYJUL9QoSLPmpFQUcv1c",
  "key18": "LvtX1CbjQTZNh8opVCL7nrcSaYnrpCVbwJyuXFSkMkmfdfEG9pkpChSCHzasb91xznUWqEuwmfiUFD2pHGfau6g",
  "key19": "3gsar9yNGS1UTsYsv9dJKLB27jXP6ffFLVwkWmGe1K918vGCczAmHUMcHMh9yfZM4SyBoXncPWx21YK8P4Zt2LDE",
  "key20": "2LX12jSC8yYgNXn2UH5QHKRNbmSa5tKDmVrnP5Su3c7W9s2SwRUVzt1Y5xwE6idyt82xP9wRa5nSQs7ESTwvt4fA",
  "key21": "5giLkwN3BhjpWDTgpjxaZPTaX5JszPe1YZPsMWZjcL1PS9GcXBFuFPUuKqCGgyVxZ7Pu8Mc1sxTQdhfwZXdcQHDw",
  "key22": "4VJVDmsgBBomZJYuurwxrgmbdYEW8q9KLCXvxfEmFALV6PYgEn9X6e1Hup2AyUfxh3UpnFL2vAFsnCv2aBkhR7Sh",
  "key23": "2bD2SPod1tPeeYgGJBJEUa5oZTs4ci4nxcmaWfm8qd7BBJwU9Kr1pRMs1eXnfvSZa8YKT9ESW6uygTGKuuMYuhHV",
  "key24": "2yZzrTDrn26JhbwyzB2m4BJ9PmzGgL96MVsLE4KgLYwt8hkz9dUHrvAaCoitvLTkgahbwjnKbzCpSJjhfLZZfNYt",
  "key25": "5yff4dER5GeePj9HFYneEsH35PjJJAbgpXGCkQHuLXNiJyoNFJKmZYN9eCDuAfh5au223eKkAqYCJJfVjxnCDycQ",
  "key26": "2frsCyzyxumtRSWFZXVnGCzEYBps4yQVxaNXyTBDDLzM3gUGwL73oLbB2J3G1DojTGKSqB7JLSFvF3MSBGaH41Mc",
  "key27": "43vtZqK6dQSdNpA9N4r57B2y4K1TnKfVs6VrHdeRBGnNzXzC5JJUL8q1GfV6tUgPVgnwJM7RVCLC3wBwbLrgr5Qf",
  "key28": "3dnoVPSJZpKWPCyYCDHX8oB93ybmnsgZRCTMW7TA8FdJ2iCxAiFEZLZ5FgRNhyEXEFN8DhF2J9aGfGQ6wHKUYjTe",
  "key29": "4XBdRr4uyDBDBq95Duc7EqaHZQyVyBXVJ4c1ZQ1PFcdt2bgB2q9YMbPtSDQCpwm6tV4WcQjexL2xRd1kGju7uDVM",
  "key30": "4NGyKy6ULJxbozosyuwXfv5nea4f8XDSULiHfcxaY5Mndn8rpjqCw3GdwN5wE5sKdJeu2mm3Y7UQf4isnuXcZNr2",
  "key31": "4SKdf4W8ZKoRvqxEnRhhUs4xLv3KBGXyGdtZ1DwX3poe9hMRrVE1mjZvog5bQeLXsaThHCghntM9wDs9AyKR9RMi"
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
