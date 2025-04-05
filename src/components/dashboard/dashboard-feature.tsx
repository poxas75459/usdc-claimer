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
    "gVUTSdeQmiHeB7BC58CXdDqGj6SVZ3z7idkQM6jMbXnjdSPtyKEdAw4cwV77PFLZbeFUFDyT2HggtEsDwEatzTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBZT4gnd8UsGUHVfTLN3Lrh8dqC7oDZ8294a76yHuriGkXVPn6W9PaRAFQTiqaRSnYKsgXaJK3MY1HFQ5vNW67L",
  "key1": "4t7zyCvRfftPHS84BVXPud5Bu9fHqsBP13b6u32JyjwXVQc6aj4US3BRQ8kmjm9VHz38PRZiSwPykkRiYLbdYsqf",
  "key2": "4tbiqogLWfP41VwPQaAtgJiPX7LsYEjHUSxq6j5Bt6mi4i8tSb5BS9FcsjhYVQor4Vrdnef4AQ5MyFTWUNy9tVXF",
  "key3": "3vRsiCgsHmGF7bnhWMnAsnHrVhzZZfc62dfQbP7t8F1sNHpCd1AkBFj3DrjdsD7nx5LyvJKkVeucLMnW6G8zZY6X",
  "key4": "5cmQWovveVZP65kQzFSksN9hibkUFfFLS1nioDtwnzPcQUYtj4yTp2jyVCpnGW9bN4ErB4puCAhXQmrzok1rcxya",
  "key5": "3QoCLye9P4Jwg6xb7WqdkRhqGV3iDcA84skkjVWvbe8KQthVTVGLa85ANV8ifoucdBPzYcXM9tHFU5DLTob8H7at",
  "key6": "5xxHHx98oU7QfiJNaSvxgs1o2jAD5hnK1fxu11fofpL57Xn9CKg69PYNqJWPo2QFCLLYbTcS5iQy6AKMTDiyDen6",
  "key7": "4MYZ5put1NKqiiAME5BQyN1wuLdjh5cFms2pxm9rPraxtSXth3ig7N25r1ALbNM8soFoyTTmsFSRBKoGe6pNmuCW",
  "key8": "3LrQE9RrgCVTYiZqcW9cqD4L53NscZEJouRfFJkodAAMSdkcWa948MipHUPmzgWeS7J6Qs49qZXdk9XBqJS4ND6F",
  "key9": "2jfGYTGhYJeLxv3qfKekRGx7JewxtenWM2yYSXGMwU7tW5qbUrvxRkc3ui3tNFcCXUHvxzQYGnJjHWTCGrZ2XCHY",
  "key10": "2UsuxkhYpz9MdtdRxKfc2xmPmMo4vUZ5aHBWsCBgU1mUG1qV2LneeGesbf1ddRRnpKDadCd32mSwuGciVxnHbHYB",
  "key11": "62WWTJxkRGMpFBaGgRUTiVdPC7MMdkPEjrGAr2bRfC9ewrPFa3xr4h4rLFB7hMXMtbhdWQdTGKnWbTXR3zaRqsGQ",
  "key12": "3KWTutFrMBZjUmmvyVec2FNtARSWBRFJWj4X3AVPehhjRTxoo8jY5MoyedkRKQ3XNSB3YMXYYUHWUpxP3Jsj6nQe",
  "key13": "SP4W7L1NGQ9uykjxyWCUMHoCwJ3rGcn87iQ5LfcvhTFoRcXHmeuPS7gXekzLTpcuiFbfBiZw9fNpQGT9QyJet3d",
  "key14": "MqKZP44ZtPcCijFnbJkgKVPHMXoTdYCfS9MajKGoRbw23epUbQ4umjAT8Ho6sCfcpPgnDEbSk4r1AnWJm7r2J1J",
  "key15": "3TCyrztPu52J7WBwS7dH9gDjsjif6dcK5cFs8WkRkkzkkqyeC3F61vNNM2h5f3wX6WyGkmxH33oGZHooq5yNA14f",
  "key16": "YZWJvFyuBTt3otUwYAGcCWycJGAuFNrnTduHJQiFZL9DGiKu38479nu9UA8UaSJuL7gyZbzxUy8wx7zStU6adMA",
  "key17": "5rYPmCYL5B24xiAQ6fKSQ2HSiyiHHSNjubzoMHM59be58kGdsW1wS924sTbeoyCjHL25WqWu4m9VNKcGgMvFKJfG",
  "key18": "4nWiSqSSczejyVswgfyrSVxWigJ7q1yZfBuphK5cG8mEJZaxe9RFSm6yTPyxVogbEzYJo6ovtLZJY6iMkS2mZ92r",
  "key19": "cSxybNhdd6MQwsNb4Y5iohQiuy8P1uuXVemFCdoiBMoiiMnFAy5cdsp8mFL7KWru2WesmHipyFy9wSS1czHSdDX",
  "key20": "3kqS765TngjGZTPpGrZebWbzQDwBMVebcz97ztouvnJcajxUbBTMftqCkbJ9kfq3zD1p7ocSrKV5J3SAw1ZF2jYP",
  "key21": "BeWRB4UgGFTHdyPpLagmZzXyWzfbXm8tpif5BapThVPEN8sVV6ikc2gaYqm7hMrsfpK3CsMoTwcjvU73CqkKTFj",
  "key22": "5CB2JpjVgBPu968USQL6WmhSrippKce8rsDFYmy8AEzSnuWQLeQ6pENpuGBAdExZnn1pmC3ip5E6pD1XdsyxBLEy",
  "key23": "5EZNWSN8u3teoR18E5Dqm6UyJqGX2e4FvCvQJ85t55soG2f8F9R74phmDy6shRezAv6QaWFR79hpNXNcrz1hrCZ8",
  "key24": "4sZZAr1UiADWN3U76Rcx71uTJnttYED1Kz8VewH1HNtv7UhK2MsMqwa1WpdCCTcwovTNbyXWgLpRPWRBo4RUEvcd",
  "key25": "4tzQj8iFgrpB3LMcqSEf3qmUGoQhnsJJZSxk124Byj5eBox81cA7wnrwSqVShnfgyTusY1kSyvgjFYEMoR9q7tKx",
  "key26": "2SFMugbCL7NZhWPpUw918nqXxXFUkHYMKMPHUdKynjRVeoNTGqT2X9GrXHEQsBc9LsMftmBKvPWRTCkGWdRJEeCr",
  "key27": "oPXDXppoAeQk5mB9A15ej1bJq24p1uCg17We2DRrAmXPj469tkbgsBpCrm9dnpbReH9FWqxiVPcmV3YrWDFJXcV",
  "key28": "4czMFumk2t7Q3a6Uwtu9EDLbuLr3uLXSr8NsYCNVWhQMToa7BSbRDdLgMBadd2UwDuK6gZk9kLBPoBWRLZRjpUiV",
  "key29": "2T6KBznrWf7KAHnKUyqkZfKADLTZKXT3XES5m7iGRxdSdwGMRpRxk4T4ZBhaPekxoCwjVLS9caDEDAevdLiC3FPF",
  "key30": "3x8WkypgDjcMboF9RDohbsuJkbqfLqqKAhxvbHAz2VQzwFUuy6byTgH5CdUgoaRFEH3XM721bi6WdDD3VXeAfdUs",
  "key31": "3f1ejP2JUhQEHV3Rt3L1hoafqfa2btfdWy6g4tuVLSDKrPP7f25H4vQPDwVDGKaem2WENiPmKq2uV6gzsapB6G2p",
  "key32": "4rhLiD3BQ4aW5V8YWgTkEaKSkALrzi3rcv25qsFR7D8sN1TAv7Q5pGDvPzuMXwVsX8CEBkFBqGsWGXgRF9PCaqc4",
  "key33": "2dUgSXWK8tFkCQjvP31sYuB53CiXZJgN3q7TSDG7QsSiUagcerGXKDcuUve72Y8gTf3ztgPaKVALgdjYnMAjvH9i",
  "key34": "3cy5emKqw6WySR4q9LdvpTDRaErw4Xz2LWMvj27W7LDBbQ3sNEo6n1jmt288Thje5nM4DashGQhFydbKj8qr8UNM",
  "key35": "3AVnvQR4kyEeHYcXJ6hUgesJfyCPAXs8GDH4gZR9FoMg4oxc9xCg7LcmUKfdgNYsEa9NCjZD6pkQFnmnppkVPAqB",
  "key36": "4ppd1XbCgHY4vrLrZ5d4wigSLejrkNwaz9uFPeyBig4ehMeqyFxxX2fXQ6eysQbJnVbsgvGCUiTEQDW5hqFcZCjS",
  "key37": "5UxGRZPcyvy4qX97LGqEfKadv5Ygpzrxqj34jEQm2E16xef17rvoJq4GSo8Qo2HLEgbuHwvzspa9jZ2yhupjX5yX"
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
