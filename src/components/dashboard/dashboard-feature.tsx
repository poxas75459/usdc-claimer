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
    "4zzXWn1DnSabWjbJMkLbhfePazj7jzzqBX5LeMgkRfR2TWWr1pLgLYTXvo3GRyA9DgA4igEw51Y1sniKt3qthgJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfnQ3CXUxpr46oTufuFbXZfy4E4nM1wTD4BWX8Z7pLxJMSDNRz6iX8gYJ33fvBDZdh5uUTiDgTaQNYZXhSMPNwL",
  "key1": "4ab536i4foHdga6GjsTAnoPXhjjbQdcxcRomVjbM3aa6UTruHcvG87hJ39RUBVeVggj63nMW6BcBqRFTXufbCEBj",
  "key2": "2NiZAzhN2aRz5dDJJMFcJF8NGQcaP78zxfYV4MxsC8WszUbL9PtxRZH32f1x3xxKyTq2qRSdhr3f3c2xkJqPkkqe",
  "key3": "3z4jeYMUZYDk13x1nguUyQeZDB4qqGomf39fajSSNCWgLbE42pymA8TvHZxcFq7byzraS6KkveXnJ6n3YC7URmMB",
  "key4": "3MBDrGYCLGgygZvFssj3wYWDZKhE9Tn8x7u9RndmC9kxopuWxLmyi9gjjyxshwpofpTMXGSgSrt7KjHxqaUHg1Lp",
  "key5": "2ot4CrzaZGVUrghgj8aw5WHbUTrRJjDUoLsvKKgYzBU6X3HH1RPskr1rNvpZiV3tE6UPWBWpBixyL4o2J4RgE5so",
  "key6": "5QNLZwTT79dWfduswGAAxVmN6wKAc43d4Ne53n66NWTNnnxr8zjRWdvPNPM52VvY2T1fWEZ9Vr3w5JZ46t3j7Rdp",
  "key7": "hDriLm27oxrFNg7Gjk2igPrQv1zEC7Yy6RADY61qV8AiDA6Ecmm3Q8rVsxfKZ7Mjes2AmDDetY2g5QRF8Up9cKK",
  "key8": "22teAqmAYxRLg3Qf5DtyT2BAsWHMDYwyLZVzKZGaFRMGwYoi9rJ9T3CHkPDmd7w5JvTYVL93aHC7DTN4Xa4f5KiF",
  "key9": "XDo8mQKGNVuWHpCZoCcxo4RanLu9VEpr2vmT4iBDR5XujojLDpb3gr7PZS2eytgeGGzF5YT98vBK63cHsUbFFHY",
  "key10": "28mGXpXCXYeafZDixzJ5KWRbFSJR5KGw3Q1bKtL4Dq8dEmX4R1Euy741ZXbuyqzga45FbKUBxSwsgmSHBtzyjjyb",
  "key11": "5EzAe73G4t5x8HABdL96una4LTSA7gdbd5gGHgPLrbE2aCoqm9F946DJJMeMeFLKE3vDX6CD8Dc2QbQPGnPCHG4X",
  "key12": "3xD6htgE7gzGuoSA4dLmADZWzZ21FLjQNVjBBgXQzwuRdohuWwtMxR9KvmrL1Rviv3aHd4r5Tn6RKAUtCiVM2jkg",
  "key13": "2RDThN2f99FGKX9ioHgvpf7bHdZ3RGKtX6usTe4GLGghVKCtbq1MXftaVjJjoY7g5VstfMqWyAN4AxRR3Z2o71sa",
  "key14": "3X1yryYJ4pbmBM66hpivqQxqbgSDRXcXT6HxR3Pe8cJCQDP9JWESkueFNuQ935KCo8bhpYBMh5qreWniXFMcDuZ2",
  "key15": "58u87SdcmZ4fyzmShUQTpU623B6MVZoJpUsrnQv9CeyAxdLe5Mq2GzAa6eqcvBE4uYrnDeGyHRFd6Jave4AR8zRr",
  "key16": "67KVmsWLnLJ5TkHsFNhpwb1b57a3tM46EMiBLFkgDV2Y1bWb67DevqiUa4MSbSV9fvJYsNh75WDbbSfoEHtuSBrR",
  "key17": "5zaCoxpqkyznczeuxAAoPtdaxkztFELsRvuW6A8rhcGPJdQhNmCXAvaJZJerdpFyQDk7GUUBShxHpF5e4Se8RQ3F",
  "key18": "4MkNJyu8soK8ZCbC1qTeiFknkaA7wPyFTFjpbPt22T91WUusECAYDAxsW3XtZy31Eoi3w3kcHFqMTmG9uVPC62M2",
  "key19": "4FTyzp55FSUfjQPSA6gq9D8j5rDsz7LoEXhqBBcdEQa8mPHYxMCgh6LDQHbvykC4kPUprkcBPz57FXoB9gY95ijE",
  "key20": "PPUoRBHCzR1UCQpoRJtqXCNQRhPLX38kwBkzBChh86M9zkBWJVDfN4DLUhmTfPAtBrPFPfE3NEGFNcqk7BprbzJ",
  "key21": "4siXigkEswZifJmcLLn9JNNBA43gBzkgi1X9SNNatZDjiHurdThc3tEvnGgRjEPRuaobdRcwnFVZtWEHMXzJDMVD",
  "key22": "5zamx3GgnHN8tbmj2kkqWwHqkAwwu2ygUFjr5Qz9qRPjEkBWzTVmEgbdWvDahidy9cexuqGRm2YkPvwUPicD3kmp",
  "key23": "4j5EqfMyV6kdeUFM5rqifMgwnC32WBjVgp1eNmuKJuHE9Ne2uwhfrgK2ogCdDAACUYcxQ6Ktkes5Ws7HHBNTkfvV",
  "key24": "4ubej9zFsxJwAiqqMkK5SEa8MHoGDKCpu88sPEw2qZ7H9wVSg8TcKAYo5vg7inzRMKkEHXKURroG6s9388vmytXy",
  "key25": "5KSuk81D7USCnFWVdJa67YUSE5nRCBUaND13MkKnuUTmeH7T7DEgJcMir3xkrXFin9QhJ37g2PbEY2L85Pt1BCv8",
  "key26": "3fvfz3hLm95ZNL1KoDiWzgHERfcCXkBPfFLNVDMGG9kBKqheMWc7iyWb3umwVCHfoLeWF7hBfNufV9jzb1tBPrh9",
  "key27": "5HagwtYUoZVqk6au486Xf3V9GvTCzZbbtnhJkRj4oidfJuGjBXvN5Tz25qugyTCp8Uu7sEjo2VKtsxLzWKayzjrv",
  "key28": "4HT28RuD5Lh9i7pBXg64JYYQSSJ9cWPuTgpsPisYtmUdxgcyB4Yn4wHWXLAwWMFjzPNgwkBbPGLTKrsxDAVWgCAi",
  "key29": "3swi2ZEMNmSW9fiM3QpSsbJ3WPt8Kj7mZB46t7TQwugpoZkPuVK2oHrF35CWHSdyQKD95w7ukfchwnqj4M1gHDiD",
  "key30": "5rU9moDhkGS5QFrtCGFyGku18zg4ij9yDbDnufyLayb8ggah5D5ieTVF5DB9hGqv5nqzu6WN2nsq9KP4euUCwHRo",
  "key31": "5mdEgQjhxmqfwqvQa18oGjq4dBnG98HbwndCnixD7jfqfWLKLoh2voHVd8m2744j6HBbsYB2FAnmRuAmnUpo7qmd",
  "key32": "4rQEpd9usmeYM4QiyCsNHCLeHKrXmyAhuJjrPfDwfUKtna3drNvVXy16S7Hv1uHC4gJf5ivy29dwQdG3vjLAuiwo",
  "key33": "67DTzZzXtTXyvNcZJZ7xcYxp6jLNbhD7UzcJo3dR13CrZT37wDRpBbHMvVQ6g9JjUs8e64g1dBbn6efczBLQbaLz",
  "key34": "3o1zRFUmzks8P9YSAdqDkra23xew5UGuGvsDTnKAeZbZSdh4sdM9uarBDy7txFtfRAkv2zUSoBMrmyXNsCvDbMVR",
  "key35": "ycMNT2XQ61mVcdvkqWeyETZQxMbyQkUnKHnm5PvnJJL8mewthESY9iytJf3V8MYDYnEdLRS3ySVS7jdaWtZGAXb",
  "key36": "64dgutdtAjoFxS5iiqjVu4Cpfxbok9gGcqwvfp7VCUwYDEEAAR8K41RnReg7oQSNAH2yfmK1tiCPu3NwFaJ6Txnr",
  "key37": "TumdYw1zwTEdxDfRQjd8NbGA9vEQyjViQd3nGtudrRc3bZ4KrWrLES7yyqTDYwbaLMLUUmtLSLY3M31iT2W9b5f",
  "key38": "3GRovhLx9WwvBp1GFPQj6Qryd1EeBhHNWmTS9Y1JHQNkznARiUJYyao7NvrmwUonsbD6y9Ne5odgzZHFDchPqaWh",
  "key39": "RqfCVVH6a3NQNg9xsprAsV4jXbcV8WaBcRXaCuQsdxTLVeKts8HZehBJPWTXHL4w2w2CxayCZS9sT1rDQXwdF6H",
  "key40": "2DKQi3TJkoQSR2Vqx5jAQNz7v17QzkxbZsJB58tw56LBLWjgv8ze5wktRbByqy9g8rxBAec7XrVZdeLpWHaDKUmm"
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
